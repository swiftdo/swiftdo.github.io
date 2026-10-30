<script setup lang="ts">
type AppItem = {
  title: string
  desc: string
  href: string
  /** 512 应用图标 */
  icon: string
  /** 卡片媒体区的主色，用于生成渐变光晕；黑白图标必须靠它撑起氛围 */
  accent: string
  tag: string
  cta: string
  /** 主推应用，媒体区右上角显示角标 */
  featured?: boolean
  external?: boolean
}

type SiteItem = {
  title: string
  desc: string
  href: string
  cover: string
  tag: string
  cta: string
}

const developerUrl = 'https://play.google.com/store/apps/developer?id=oldbirds'

const apps: AppItem[] = [
  {
    title: '易起卦',
    desc: '六爻排盘与一键起卦。App 不解卦，提供 AI 提示词模板方便提问，支持赛锦囊、卦例与本地记录。',
    href: '/yiqigua.html',
    icon: '/appicons/yiqigua.webp',
    accent: '#b8954a',
    tag: '六爻 · 排盘',
    cta: '查看产品页',
    featured: true,
    external: false,
  },
  {
    title: '梅花易数',
    desc: '以邵雍古法为根基，支持时间、数字、汉字等多种起卦，生成体用生克与应期分析。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.plum_blossom_yishu',
    icon: '/appicons/meihua.webp',
    accent: '#cf5f4a',
    tag: '易经 · 起卦',
    cta: 'Google Play',
  },
  {
    title: '金刚功',
    desc: '八部金刚功跟练工具：全套与单式模式、进度记录与功法研习，离线可用。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.jingang',
    icon: '/appicons/jingang.webp',
    accent: '#e0a030',
    tag: '健康 · 功法',
    cta: 'Google Play',
  },
  {
    title: 'iDiary',
    desc: '极简卡片笔记，基于 Git 存储，适合把日记纳入版本管理。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.idiary',
    icon: '/appicons/idiary.webp',
    accent: '#8b9ab0',
    tag: '效率 · 笔记',
    cta: 'Google Play',
  },
  {
    title: 'RSS 阅读',
    desc: '简洁的 RSS 阅读器：订阅管理、聚合阅读、收藏与本地历史记录。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.rss',
    icon: '/appicons/rss.webp',
    accent: '#f26522',
    tag: '效率 · 资讯',
    cta: 'Google Play',
  },
  {
    title: 'Panda',
    desc: '基于 TinyPNG 的图片压缩客户端，快速减小体积、保持观感。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.panda',
    icon: '/appicons/panda.webp',
    accent: '#34a853',
    tag: '工具 · 图片',
    cta: 'Google Play',
  },
  {
    title: '极简菜谱',
    desc: '解决「今天吃什么」：智能推荐、趣味转盘、收藏夹与心愿单。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.dishes',
    icon: '/appicons/dishes.webp',
    accent: '#b5836a',
    tag: '生活 · 美食',
    cta: 'Google Play',
  },
  {
    title: '有趣拼图',
    desc: '沉浸式拼图：精选图库、本地上传成关卡，难度可调、进度可记。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.puzzle',
    icon: '/appicons/puzzle.webp',
    accent: '#7c5cd6',
    tag: '游戏 · 休闲',
    cta: 'Google Play',
  },
]

const sites: SiteItem[] = [
  {
    title: 'OldBird 博客',
    desc: '个人技术站：Swift、Flutter、AI、易经笔记与随笔。',
    href: 'https://oldbird.run',
    cover: '/appicons/site.webp',
    tag: 'Website',
    cta: '访问站点',
  },
  {
    title: '拼图游戏',
    desc: '轻量网页拼图小游戏，随手玩玩也能打发时间。',
    href: 'https://puzzle.oldbird.run',
    cover: '/appicons/puzzle-game.webp',
    tag: 'Website · Game',
    cta: '开始游戏',
  },
]

function isExternal(item: AppItem) {
  return item.external !== false && /^https?:\/\//.test(item.href)
}
</script>

<template>
  <div class="portfolio">
    <header class="pf-hero">
      <div class="pf-hero__main">
        <p class="pf-hero__eyebrow">Portfolio</p>
        <h1 class="pf-hero__title">作品集</h1>
        <p class="pf-hero__lead">
          App、网站与自媒体——把学习与兴趣做成能用的东西。
        </p>
      </div>
      <ul class="pf-hero__stats">
        <li><strong>{{ apps.length }}</strong><span>App</span></li>
        <li><strong>{{ sites.length }}</strong><span>站点</span></li>
        <li><strong>1</strong><span>公众号</span></li>
      </ul>
    </header>

    <section class="pf-section" aria-labelledby="pf-apps">
      <div class="pf-section__head">
        <div class="pf-section__label">
          <span class="pf-section__index">01</span>
          <h2 id="pf-apps">App</h2>
        </div>
        <a
          class="pf-section__action"
          :href="developerUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play 全部应用
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>

      <div class="pf-grid">
        <a
          v-for="item in apps"
          :key="item.title"
          class="pf-card"
          :class="{ 'is-featured': item.featured }"
          :href="item.href"
          :target="isExternal(item) ? '_blank' : undefined"
          :rel="isExternal(item) ? 'noopener noreferrer' : undefined"
          :style="{ '--accent': item.accent }"
        >
          <div class="pf-card__media">
            <span class="pf-card__glow" aria-hidden="true" />
            <img class="pf-card__icon" :src="item.icon" :alt="`${item.title} 图标`" loading="lazy" />
            <span v-if="item.featured" class="pf-card__badge">主推</span>
          </div>
          <div class="pf-card__body">
            <span class="pf-card__tag">{{ item.tag }}</span>
            <h3 class="pf-card__title">{{ item.title }}</h3>
            <p class="pf-card__desc">{{ item.desc }}</p>
            <span class="pf-card__cta">
              {{ item.cta }}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="pf-section" aria-labelledby="pf-sites">
      <div class="pf-section__head">
        <div class="pf-section__label">
          <span class="pf-section__index">02</span>
          <h2 id="pf-sites">网站</h2>
        </div>
        <p class="pf-section__note">在线作品与实验项目</p>
      </div>

      <div class="pf-sites">
        <a
          v-for="item in sites"
          :key="item.title"
          class="pf-site"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="pf-site__cover">
            <img :src="item.cover" :alt="`${item.title} 截图`" loading="lazy" />
          </div>
          <div class="pf-site__body">
            <span class="pf-site__tag">{{ item.tag }}</span>
            <h3 class="pf-site__title">{{ item.title }}</h3>
            <p class="pf-site__desc">{{ item.desc }}</p>
            <span class="pf-site__cta">
              {{ item.cta }}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </div>
        </a>
      </div>
    </section>

    <section class="pf-section" aria-labelledby="pf-media">
      <div class="pf-section__head">
        <div class="pf-section__label">
          <span class="pf-section__index">03</span>
          <h2 id="pf-media">自媒体</h2>
        </div>
        <p class="pf-section__note">获取更新与长文</p>
      </div>

      <div class="pf-media">
        <img class="pf-media__card" src="/wechat.png" alt="微信公众号 OldBirds 名片" loading="lazy" />
        <div class="pf-media__copy">
          <h3>微信公众号 · OldBirds</h3>
          <p>技术笔记、产品动态与学习记录。微信搜一搜「OldBirds」或扫码关注。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/**
 * 宽度由 theme/custom.css 的 .page-portfolio 规则撑到 1152（与首页一致），
 * 组件自身不再限制宽度。
 */
.portfolio {
  --pf-border: color-mix(in srgb, var(--vp-c-divider) 85%, transparent);
  --pf-surface: color-mix(in srgb, var(--vp-c-bg-soft) 55%, var(--vp-c-bg));
  --pf-radius: 16px;
  --pf-accent: var(--vp-c-brand-1);
  padding-bottom: 0.5rem;
}

/* ---------- Hero ---------- */

.pf-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 26px;
  padding: 0.25rem 0 0;
}

@media (min-width: 900px) {
  .pf-hero {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
    gap: 24px 56px;
  }
}

.pf-hero__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--pf-accent);
}

.pf-hero__title {
  margin: 0 0 0.75rem;
  padding: 0;
  border: none;
  font-size: clamp(2.2rem, 5vw, 3.1rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--vp-c-text-1);
}

.pf-hero__lead {
  margin: 0;
  max-width: 34rem;
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

/* 统计：竖线分隔的三段，像一份规格表 */
.pf-hero__stats {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pf-hero__stats li {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0 20px;
  border-left: 1px solid var(--pf-border);
}

.pf-hero__stats li:first-child {
  padding-left: 0;
  border-left: none;
}

.pf-hero__stats li:last-child {
  padding-right: 0;
}

.pf-hero__stats strong {
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-1);
}

.pf-hero__stats span {
  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}

/* ---------- Section ---------- */

.pf-section {
  margin-top: 52px;
  padding-top: 24px;
  border-top: 1px solid var(--pf-border);
}

.pf-section__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem 1rem;
  margin-bottom: 20px;
}

.pf-section__label {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.pf-section__index {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-variant-numeric: tabular-nums;
  color: var(--pf-accent);
}

.pf-section__head h2 {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1.32rem;
  font-weight: 750;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.pf-section__head h2::before {
  display: none;
}

.pf-section__note {
  margin: 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* 区块动作做成胶囊，与首页快捷入口同一套语言 */
.pf-section__action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid var(--pf-border);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none !important;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.pf-section__action:hover {
  color: var(--pf-accent);
  border-color: color-mix(in srgb, var(--pf-accent) 40%, var(--pf-border));
  background-color: color-mix(in srgb, var(--pf-accent) 7%, transparent);
}

.pf-section__action svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.22s ease;
}

.pf-section__action:hover svg {
  transform: translateX(3px);
}

/* ---------- App 网格 ---------- */

.pf-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;
}

@media (min-width: 560px) {
  .pf-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .pf-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .pf-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.pf-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--pf-border);
  border-radius: var(--pf-radius);
  background: linear-gradient(180deg, var(--pf-surface) 0%, var(--vp-c-bg) 62%);
  text-decoration: none !important;
  color: inherit;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.pf-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--pf-border));
  box-shadow:
    0 20px 34px -26px color-mix(in srgb, var(--vp-c-text-1) 65%, transparent),
    0 3px 8px -5px color-mix(in srgb, var(--vp-c-text-1) 20%, transparent);
}

/* 主推的那一个常驻一道品牌色描边，不用悬停也能看出来 */
.pf-card.is-featured {
  border-color: color-mix(in srgb, var(--accent) 34%, var(--pf-border));
}

.pf-card:focus-visible,
.pf-site:focus-visible,
.pf-section__action:focus-visible {
  outline: 2px solid var(--pf-accent);
  outline-offset: 3px;
}

/* 悬停时顶部浮现一道品牌色细线，与首页专题卡呼应 */
.pf-card::after {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  z-index: 3;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.pf-card:hover::after {
  opacity: 0.85;
}

/* 媒体区：光晕由 accent 生成，黑白图标也能有明确的品牌氛围 */
.pf-card__media {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 5 / 3;
  overflow: hidden;
  border-bottom: 1px solid var(--pf-border);
  background: var(--vp-c-bg-soft);
}

.pf-card__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(120% 100% at 50% -10%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 72%),
    radial-gradient(92% 82% at 50% 112%, color-mix(in srgb, var(--accent) 13%, transparent), transparent 66%);
  pointer-events: none;
}

.pf-card__icon {
  position: relative;
  z-index: 1;
  width: 76px;
  height: 76px;
  border-radius: 19px;
  box-shadow:
    0 0 0 1px rgb(0 0 0 / 8%),
    0 12px 24px -8px rgb(0 0 0 / 30%);
  transition: transform 0.3s ease;
}

.pf-card:hover .pf-card__icon {
  transform: translateY(-3px) scale(1.04);
}

/* 角标做成玻璃胶囊，压在任意颜色的光晕上都稳定 */
.pf-card__badge {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  padding: 0.16rem 0.55rem;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  background: rgb(0 0 0 / 72%);
  backdrop-filter: blur(8px);
}

.pf-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.3rem;
  padding: 14px 16px 16px;
}

.pf-card__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

/* 小圆点用应用自己的主色，把卡片正文和媒体区的氛围连起来 */
.pf-card__tag::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.pf-card__title {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.pf-card__title::before {
  display: none;
}

.pf-card__desc {
  display: -webkit-box;
  flex: 1;
  margin: 0;
  overflow: hidden;
  font-size: 0.84rem;
  line-height: 1.62;
  color: var(--vp-c-text-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.pf-card__cta,
.pf-site__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 650;
  color: var(--pf-accent);
}

.pf-card__cta svg,
.pf-site__cta svg {
  width: 13px;
  height: 13px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.22s ease;
}

.pf-card:hover .pf-card__cta svg,
.pf-site:hover .pf-site__cta svg {
  transform: translateX(3px);
}

/* ---------- 网站 ---------- */

.pf-sites {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .pf-sites {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.pf-site {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--pf-border);
  border-radius: var(--pf-radius);
  background: var(--vp-c-bg);
  text-decoration: none !important;
  color: inherit;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.pf-site:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--pf-accent) 45%, var(--pf-border));
  box-shadow:
    0 20px 34px -26px color-mix(in srgb, var(--vp-c-text-1) 65%, transparent),
    0 3px 8px -5px color-mix(in srgb, var(--vp-c-text-1) 20%, transparent);
}

.pf-site__cover {
  position: relative;
  /* 截图源多为 2.07~2.28:1，用 2.05 裁得最少，也更像一扇浏览器窗口 */
  aspect-ratio: 2.05 / 1;
  overflow: hidden;
  border-bottom: 1px solid var(--pf-border);
  background: var(--vp-c-bg-soft);
}

.pf-site__cover img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s ease;
}

.pf-site:hover .pf-site__cover img {
  transform: scale(1.03);
}

/* 截图多是浅色页面，深色模式下压暗并把底边融进卡片，避免整块发白 */
.dark .pf-site__cover img {
  filter: brightness(0.85) saturate(0.95);
}

.dark .pf-site__cover::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 52%, rgb(0 0 0 / 28%) 100%),
    rgb(0 0 0 / 14%);
  pointer-events: none;
}

.pf-site__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.3rem;
  padding: 16px 18px 18px;
}

.pf-site__tag {
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.pf-site__title {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1.06rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.pf-site__title::before {
  display: none;
}

.pf-site__desc {
  flex: 1;
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.62;
  color: var(--vp-c-text-2);
}

/* ---------- 自媒体 ---------- */

.pf-media {
  display: grid;
  gap: 20px;
  align-items: center;
  padding: 22px;
  border: 1px solid var(--pf-border);
  border-radius: var(--pf-radius);
  background:
    radial-gradient(90% 120% at 0% 0%, color-mix(in srgb, #07c160 11%, transparent), transparent 62%),
    var(--vp-c-bg-soft);
}

@media (min-width: 768px) {
  .pf-media {
    grid-template-columns: 400px minmax(0, 1fr);
    gap: 32px;
    padding: 24px 28px;
  }
}

.pf-media__card {
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 24px -16px color-mix(in srgb, #0b7a3f 70%, transparent);
}

.pf-media__copy h3 {
  margin: 0 0 0.45rem;
  padding: 0;
  border: none;
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.pf-media__copy h3::before {
  display: none;
}

.pf-media__copy p {
  margin: 0;
  max-width: 32rem;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* 窄屏单列时 5:3 的媒体区太空，压成横幅比例，图标同步收小 */
@media (max-width: 559px) {
  .pf-card__media {
    aspect-ratio: 16 / 7;
  }

  .pf-card__icon {
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }

  .pf-card__badge {
    top: 8px;
    right: 8px;
    padding: 0.1rem 0.45rem;
    font-size: 0.62rem;
  }
}

/* ---------- 深色模式 ---------- */

.dark .pf-card__glow {
  background:
    radial-gradient(120% 100% at 50% -10%, color-mix(in srgb, var(--accent) 34%, transparent), transparent 74%),
    radial-gradient(92% 82% at 50% 112%, color-mix(in srgb, var(--accent) 15%, transparent), transparent 68%);
}

.dark .pf-card__icon {
  box-shadow:
    0 0 0 1px rgb(255 255 255 / 9%),
    0 12px 24px -8px rgb(0 0 0 / 55%);
}

@media (prefers-reduced-motion: reduce) {
  .pf-card,
  .pf-site,
  .pf-card__icon,
  .pf-site__cover img,
  .pf-card__cta svg,
  .pf-site__cta svg,
  .pf-section__action svg {
    transition: none;
  }

  .pf-card:hover,
  .pf-site:hover {
    transform: none;
  }
}
</style>
