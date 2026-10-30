#!/usr/bin/env bash
#
# 部署：构建 → 产物校验 → 提交并推送源码 → rsync 上传 → 线上探活
#
# 用法：
#   ./deploy.sh                 完整流程
#   ./deploy.sh --dry-run       构建 + 预览 rsync 会做什么（不上传、不提交）
#   ./deploy.sh --no-git        只部署，不碰 git
#   ./deploy.sh --skip-build    复用已有 dist，跳过构建
#   ./deploy.sh -m "说明"       自定义提交信息（默认 update）
#
# 环境变量：
#   DEPLOY_SERVER   服务器地址，默认 root@106.52.236.186
#   DEPLOY_PORT     SSH 端口，默认 2002
#   DEPLOY_DIR      远端目录，默认 /www/wwwroot/oldbird.run
#   RSYNC_DELETE    设 0 保留服务端多余文件（默认 1 = 删除 dist 里已不存在的文件）
#   VERIFY_URL      部署后探活地址，设空字符串可跳过
#
# 说明：--delete-after 会删除远端目录中「产物里没有」的文件。
#       .user.ini / .well-known / .htaccess 已加入排除列表，
#       被排除的文件不会被删除，可放心放置面板或证书验证文件。

set -uo pipefail
SECONDS=0

PROJECT_DIR=$(cd "$(dirname "$0")" && pwd)
BUILD_DIR="$PROJECT_DIR/docs/.vuepress/dist"
BUILD_LOG="$PROJECT_DIR/.deploy-build.log"

DEPLOY_DIR="${DEPLOY_DIR:-/www/wwwroot/oldbird.run}"
SERVER="${DEPLOY_SERVER:-root@106.52.236.186}"
SSH_PORT="${DEPLOY_PORT:-2002}"
RSYNC_DELETE="${RSYNC_DELETE:-1}"
VERIFY_URL="${VERIFY_URL-https://oldbird.run/}"

DRY_RUN=0
DO_GIT=1
DO_BUILD=1
COMMIT_MSG="${COMMIT_MSG:-update}"

step() { printf '\n\033[1;36m==> %s\033[0m\n' "$*"; }
ok()   { printf '\033[0;32m  ✔ %s\033[0m\n' "$*"; }
warn() { printf '\033[0;33m  ! %s\033[0m\n' "$*"; }
die()  { printf '\n\033[0;31m✖ %s\033[0m\n' "$*" >&2; exit 1; }

usage() {
  awk 'NR>1 && /^#/ { sub(/^# ?/, ""); print; next } NR>1 { exit }' "$0"
}

while [ $# -gt 0 ]; do
  case "$1" in
    -n|--dry-run)   DRY_RUN=1 ;;
    --no-git)       DO_GIT=0 ;;
    --skip-build)   DO_BUILD=0 ;;
    -m|--message)   COMMIT_MSG="${2:-update}"; shift ;;
    -h|--help)      usage; exit 0 ;;
    *)              printf '未知参数：%s\n\n' "$1"; usage; exit 2 ;;
  esac
  shift
done

cd "$PROJECT_DIR" || die "无法进入项目目录：$PROJECT_DIR"

for cmd in yarn git rsync ssh; do
  command -v "$cmd" >/dev/null 2>&1 || die "缺少必需命令：$cmd"
done

# 复用一条 SSH 连接，避免预检和上传各认证一次
CTL_DIR="${TMPDIR:-/tmp}"; CTL_DIR="${CTL_DIR%/}"
SSH_CTL="$CTL_DIR/deploy-ssh-%C"
SSH_OPTS=(-p "$SSH_PORT" -o ConnectTimeout=10 -o ControlMaster=auto
          -o "ControlPath=$SSH_CTL" -o ControlPersist=60)
cleanup() { ssh -O exit -o ConnectTimeout=2 -o "ControlPath=$SSH_CTL" "$SERVER" >/dev/null 2>&1 || true; }
trap cleanup EXIT

# ---------- 1. 构建 ----------
if [ "$DO_BUILD" = 1 ]; then
  step "构建站点"
  if ! yarn docs:build 2>&1 | tee "$BUILD_LOG"; then
    die "构建失败，已中止（未提交、未上传）。日志：$BUILD_LOG"
  fi
  ok "构建完成"
else
  warn "跳过构建，直接使用已有产物"
fi

# ---------- 2. 产物校验 ----------
# 空产 + --delete-after = 清空线上目录，这一步必须拦住
step "校验产物"
[ -f "$BUILD_DIR/index.html" ] || die "产物缺少 index.html：$BUILD_DIR"
FILE_COUNT=$(find "$BUILD_DIR" -type f | wc -l | tr -d ' ')
if [ "$FILE_COUNT" -lt 200 ]; then
  die "产物只有 $FILE_COUNT 个文件，疑似构建不完整，已中止以免误删服务端文件"
fi
ok "$FILE_COUNT 个文件"

# ---------- 3. 提交并推送（先于上传，保证线上产物有对应提交） ----------
if [ "$DO_GIT" = 1 ] && [ "$DRY_RUN" = 0 ]; then
  step "提交并推送源码"
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  [ "$BRANCH" = "HEAD" ] && die "当前处于 detached HEAD，请先切到分支再部署"
  git add -A
  if git diff --cached --quiet; then
    ok "无源码变更，跳过提交"
  else
    git commit -m "$COMMIT_MSG" >/dev/null || die "提交失败，已中止（未上传）"
    ok "已提交 $(git log --oneline -1)"
  fi
  if ! git push origin "$BRANCH"; then
    die "推送失败，已中止（未上传）。线上仍为旧版本，修复后重跑即可"
  fi
  ok "已推送 origin/$BRANCH"
fi

# ---------- 4. 服务器预检 ----------
step "检查目标目录"
ssh "${SSH_OPTS[@]}" "$SERVER" "test -d '$DEPLOY_DIR'"
case $? in
  0)   ok "$SERVER:$DEPLOY_DIR" ;;
  255) die "SSH 连接失败：$SERVER:$SSH_PORT" ;;
  *)   die "目标目录不存在：$SERVER:${DEPLOY_DIR}（避免误建目录，需先手动创建）" ;;
esac

# ---------- 5. 上传 ----------
step "上传到 $SERVER:$DEPLOY_DIR"
RSYNC_ARGS=(-az --human-readable --stats --itemize-changes
            --exclude=/.user.ini --exclude=/.well-known/***
            --exclude=/.htaccess --exclude=.DS_Store --exclude='*.log')
[ "$RSYNC_DELETE" = 1 ] && RSYNC_ARGS+=(--delete-after)
[ "$DRY_RUN" = 1 ] && RSYNC_ARGS+=(--dry-run)

if ! rsync "${RSYNC_ARGS[@]}" -e "ssh -p $SSH_PORT -o ControlPath=$SSH_CTL" \
     "$BUILD_DIR/" "$SERVER:$DEPLOY_DIR/"; then
  die "上传失败。可重跑本脚本（源码已推送，会跳过提交直接续传）"
fi

if [ "$DRY_RUN" = 1 ]; then
  warn "dry-run：仅预览，未实际上传"
  exit 0
fi
ok "上传完成"

# ---------- 6. 线上探活 ----------
# 服务器返回非 200 只告警不中断：可能只是 CDN 缓存或探活地址写错
if [ -n "$VERIFY_URL" ]; then
  step "线上探活"
  CODE=$(curl -s -o /dev/null -m 15 -w '%{http_code}' "$VERIFY_URL" 2>/dev/null)
  CODE=${CODE:-000}
  if [ "$CODE" = "200" ]; then
    ok "$VERIFY_URL → 200"
  else
    warn "$VERIFY_URL 返回 ${CODE}，请手动确认（不影响本次上传结果）"
  fi
fi

printf '\n\033[0;32m部署完成\033[0m  用时 %ss\n' "$SECONDS"
