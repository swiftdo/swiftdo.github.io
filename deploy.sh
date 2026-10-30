#!/bin/zsh
set -uo pipefail

# 使用脚本所在目录作为项目根目录，避免在别处执行时路径错乱
PROJECT_DIR=$(cd "$(dirname "$0")" && pwd)
BUILD_DIR="$PROJECT_DIR/docs/.vuepress/dist"

# 以下均可用环境变量覆盖，例如：
#   DEPLOY_SERVER=deploy@example.com DEPLOY_PORT=22 ./deploy.sh
DEPLOY_DIR="${DEPLOY_DIR:-/www/wwwroot/oldbird.run}"
SERVER="${DEPLOY_SERVER:-root@106.52.236.186}"
SSH_PORT="${DEPLOY_PORT:-2002}"

# 是否删除服务器上 dist 里已不存在的文件（用于下线改名/删除的页面）。
# 设为 0 则保留服务端多余文件：RSYNC_DELETE=0 ./deploy.sh
RSYNC_DELETE="${RSYNC_DELETE:-1}"

cd "$PROJECT_DIR" || exit 1

if ! yarn docs:build; then
  echo "项目打包失败，已中止部署"
  exit 1
fi
echo "项目打包成功"

DELETE_FLAG=""
if [ "$RSYNC_DELETE" = "1" ]; then
  DELETE_FLAG="--delete-after"
fi

if ! rsync -avz $DELETE_FLAG -e "ssh -p $SSH_PORT" "$BUILD_DIR/" "$SERVER:$DEPLOY_DIR"; then
  echo "文件上传失败，已中止部署"
  exit 1
fi
echo "文件上传成功"

echo "提交代码到仓库"
git add -A
if git diff --cached --quiet; then
  echo "无内容变更，跳过提交"
else
  git commit -m "update"
fi
git push
