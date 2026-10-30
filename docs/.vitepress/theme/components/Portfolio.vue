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
      <p class="pf-hero__eyebrow">Portfolio</p>
      <h1 class="pf-hero__title">作品集</h1>
      <p class="pf-hero__lead">
        App、网站与自媒体——把学习与兴趣做成能用的东西。
      </p>
      <ul class="pf-hero__stats">
        <li><strong>{{ apps.length }}</strong><span>App</span></li>
        <li><strong>{{ sites.length }}</strong><span>站点</span></li>
        <li><strong>1</strong><span>公众号</span></li>
      </ul>
    </header>

    <section class="pf-section" aria-labelledby="pf-apps">
      <div class="pf-section__head">
        <h2 id="pf-apps">App</h2>
        <a :href="developerUrl" target="_blank" rel="noopener noreferrer">
          Google Play 全部应用
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>

      <div class="pf-grid">
        <a
          v-for="item in apps"
          :key="item.title"
          class="pf-card"
          :href="item.href"
          :target="isExternal(item) ? '_blank' : undefined"
          :rel="isExternal(item) ? 'noopener noreferrer' : undefined"
        >
          <div class="pf-card__media" :style="{ '--accent': item.accent }">
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
        <h2 id="pf-sites">网站</h2>
        <p>在线作品与实验项目</p>
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
        <h2 id="pf-media">自媒体</h2>
        <p>获取更新与长文</p>
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
.portfolio {
  --pf-border: color-mix(in srgb, var(--vp-c-divider) 90%, transparent);
  --pf-radius: 16px;
  --pf-accent: var(--vp-c-brand-1);
  padding-bottom: 1rem;
}

/* ---------- Hero ---------- */
.pf-hero {
  padding: 0.25rem 0 2.75rem;
}

.pf-hero__eyebrow {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--pf-accent);
}

.pf-hero__title {
  margin: 0 0 0.85rem;
  padding: 0;
  border: none;
  font-size: clamp(2rem, 4.5vw, 2.85rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: var(--vp-c-text-1);
}

.pf-hero__lead {
  margin: 0 0 1.6rem;
  max-width: 38rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.pf-hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pf-hero__stats li {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.pf-hero__stats strong {
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-1);
}

.pf-hero__stats span {
  font-size: 0.88rem;
  color: var(--vp-c-text-3);
}

/* ---------- Section ---------- */
.pf-section {
  margin-bottom: 3rem;
}

.pf-section__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 1.15rem;
}

.pf-section__head h2 {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1.3rem;
  font-weight: 750;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.pf-section__head h2::before {
  display: none;
}

.pf-section__head p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
}

.pf-section__head a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.88rem;
  font-weight: 650;
  color: var(--pf-accent);
  text-decoration: none;
}

.pf-section__head a svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.22s ease;
}

.pf-section__head a:hover svg {
  transform: translateX(3px);
}

/* ---------- App 网格 ---------- */
.pf-grid {
  display: grid;
  gap: 1.1rem;
  grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
}

.pf-card {
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

.pf-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--pf-accent) 42%, var(--pf-border));
  box-shadow: 0 14px 32px color-mix(in srgb, var(--vp-c-text-1) 10%, transparent);
}

.pf-card:focus-visible {
  outline: 2px solid var(--pf-accent);
  outline-offset: 3px;
}

/* 媒体区：光晕由 accent 生成，黑白图标也能有明确的品牌氛围 */
.pf-card__media {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 5 / 3;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.pf-card__glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(118% 96% at 50% -12%, color-mix(in srgb, var(--accent) 34%, transparent), transparent 72%),
    radial-gradient(96% 88% at 50% 118%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 66%);
  pointer-events: none;
}

.pf-card__icon {
  position: relative;
  z-index: 1;
  width: 76px;
  height: 76px;
  border-radius: 18px;
  box-shadow:
    0 8px 22px rgba(0, 0, 0, 0.26),
    0 2px 6px rgba(0, 0, 0, 0.14);
  transition: transform 0.3s ease;
}

.pf-card:hover .pf-card__icon {
  transform: translateY(-3px) scale(1.05);
}

.pf-card__badge {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  padding: 0.16rem 0.5rem;
  border-radius: 999px;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  background: color-mix(in srgb, var(--pf-accent) 88%, #000);
}

.pf-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.95rem 1.05rem 1.1rem;
}

.pf-card__tag {
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.pf-card__title {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1.04rem;
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
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.pf-card__cta,
.pf-site__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  margin-top: 0.45rem;
  font-size: 0.82rem;
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
  gap: 1.1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--pf-accent) 42%, var(--pf-border));
  box-shadow: 0 14px 32px color-mix(in srgb, var(--vp-c-text-1) 10%, transparent);
}

.pf-site:focus-visible {
  outline: 2px solid var(--pf-accent);
  outline-offset: 3px;
}

.pf-site__cover {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--pf-border);
}

.pf-site__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s ease;
}

.pf-site:hover .pf-site__cover img {
  transform: scale(1.04);
}

.pf-site__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.95rem 1.05rem 1.1rem;
}

.pf-site__tag {
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.pf-site__title {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1.04rem;
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
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* ---------- 自媒体 ---------- */
.pf-media {
  display: grid;
  gap: 1.4rem;
  align-items: center;
  padding: 1.35rem 1.5rem;
  border: 1px solid var(--pf-border);
  border-radius: var(--pf-radius);
  background:
    radial-gradient(120% 100% at 0% 0%, color-mix(in srgb, #07c160 12%, transparent), transparent 62%),
    var(--vp-c-bg-soft);
}

@media (min-width: 768px) {
  .pf-media {
    grid-template-columns: 320px 1fr;
  }
}

.pf-media__card {
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 10px;
}

.pf-media__copy h3 {
  margin: 0 0 0.45rem;
  padding: 0;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
}

.pf-media__copy h3::before {
  display: none;
}

.pf-media__copy p {
  margin: 0;
  max-width: 30rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

/* ---------- 深色模式：深底需要更强的光晕才看得出层次 ---------- */
.dark .pf-card__glow {
  background:
    radial-gradient(118% 96% at 50% -12%, color-mix(in srgb, var(--accent) 48%, transparent), transparent 74%),
    radial-gradient(96% 88% at 50% 118%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 68%);
}

@media (prefers-reduced-motion: reduce) {
  .pf-card,
  .pf-site,
  .pf-card__icon,
  .pf-site__cover img,
  .pf-card__cta svg,
  .pf-site__cta svg {
    transition: none;
  }

  .pf-card:hover,
  .pf-site:hover {
    transform: none;
  }
}
</style>
