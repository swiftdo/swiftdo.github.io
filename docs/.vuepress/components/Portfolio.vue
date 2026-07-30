<script setup lang="ts">
type Project = {
  title: string
  desc: string
  href: string
  image: string
  tag: string
  cta?: string
  /** phone = 竖图截图；cover = 横图封面 */
  media?: 'phone' | 'cover'
  external?: boolean
}

const developerUrl = 'https://play.google.com/store/apps/developer?id=oldbirds'

const apps: Project[] = [
  {
    title: '易起卦',
    desc: '六爻排盘、一键起卦、卦象解读、卦签诗与卦例、学习记录；支持赛锦囊，数据本地存储。',
    href: '/yiqigua.html',
    image: '/app-yiqigua.webp',
    tag: '六爻 · 排盘',
    cta: '查看产品页',
    media: 'phone',
    external: false,
  },
  {
    title: '梅花易数',
    desc: '以邵雍古法为根基，支持时间、数字、汉字等多种起卦，生成体用生克与应期分析。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.plum_blossom_yishu',
    image: 'https://play-lh.googleusercontent.com/CY5294qnxCoEQg3T_RjZ9OyLaxQRShycdVl5b4SqnRanHYMY59wbTpuzb9xJqOQ0LZmhJgkUCe551QARMEuR=w640-h360',
    tag: '易经 · 起卦',
    cta: 'Google Play',
    media: 'cover',
  },
  {
    title: '金刚功',
    desc: '八部金刚功跟练工具：全套/单式模式、进度记录与功法研习，离线可用。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.jingang',
    image: 'https://play-lh.googleusercontent.com/QIpIxPrFR2tnpHkKcmQupGJM_Bb4vKSMMOd-z7LgmBS3FTkT3RtOP0DQpMtAmoEuMuUrndXqRTXl-yRGne20Og=w640-h360',
    tag: '健康 · 功法',
    cta: 'Google Play',
    media: 'cover',
  },
  {
    title: 'iDiary',
    desc: '极简卡片笔记，基于 Git 存储，适合把日记纳入版本管理。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.idiary',
    image: '/app-idiary.webp',
    tag: '效率 · 笔记',
    cta: 'Google Play',
    media: 'phone',
  },
  {
    title: 'RSS 阅读',
    desc: '简洁 RSS 阅读器：订阅管理、聚合阅读、收藏与本地历史记录。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.rss',
    image: 'https://play-lh.googleusercontent.com/cqEpu_IQEdKNoyrkMLdYnBRKvq7j4LuaQrE-Gzpw55oojRqp5rxJIWE8uuXUqy9FnHItzF3NRYQOBMteQTP1GFQ=w640-h360',
    tag: '效率 · 资讯',
    cta: 'Google Play',
    media: 'cover',
  },
  {
    title: 'Panda',
    desc: '基于 TinyPNG 的图片压缩客户端，快速减小体积、保持观感。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.panda',
    image: '/app-panda.webp',
    tag: '工具 · 图片',
    cta: 'Google Play',
    media: 'phone',
  },
  {
    title: '极简菜谱',
    desc: '解决「今天吃什么」：智能推荐、趣味转盘、收藏夹与心愿单。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.dishes',
    image: 'https://play-lh.googleusercontent.com/lvlPXZHKK72smp5L6NC_obAyFCCBvGu9hCPzQtLth7Q92-ZLB1fp7xolCC7_oiaPFgCwuT32zTE141f76xwV=w640-h360',
    tag: '生活 · 美食',
    cta: 'Google Play',
    media: 'cover',
  },
  {
    title: '有趣拼图',
    desc: '沉浸式拼图：精选图库、本地上传成关卡，难度可调、进度可记。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.puzzle',
    image: 'https://play-lh.googleusercontent.com/cnujtjUkZ2NHMLy2kA5el6fgNOQ1eQP6S0y0R3CDLFUthB2hcSxUzqtbs-fTChO5l8b90neGRhnDce9Zbi9YYXI=w640-h360',
    tag: '游戏 · 休闲',
    cta: 'Google Play',
    media: 'cover',
  },
]

const sites: Project[] = [
  {
    title: 'OldBird 博客',
    desc: '个人技术站：Swift、Flutter、AI、易经笔记与随笔。',
    href: 'https://oldbird.run',
    image: '/site.png',
    tag: 'Website',
    cta: '访问站点',
    media: 'cover',
  },
  {
    title: '拼图游戏',
    desc: '轻量网页拼图小游戏，随手玩玩也能打发时间。',
    href: 'https://puzzle.oldbird.run',
    image: '/puzzle.png',
    tag: 'Website · Game',
    cta: '开始游戏',
    media: 'cover',
  },
]

function isExternal(item: Project) {
  return item.external !== false && /^https?:\/\//.test(item.href)
}
</script>

<template>
  <div class="portfolio">
    <header class="portfolio__intro">
      <p class="portfolio__eyebrow">Portfolio</p>
      <h1 class="portfolio__title">作品集</h1>
      <p class="portfolio__lead">
        App、网站与自媒体——把学习与兴趣做成能用的东西。
      </p>
    </header>

    <section class="portfolio__section" aria-labelledby="apps-heading">
      <div class="portfolio__section-head">
        <h2 id="apps-heading">App</h2>
        <p>
          上架 Google Play 的实用与兴趣应用 ·
          <a :href="developerUrl" target="_blank" rel="noopener noreferrer">查看全部</a>
        </p>
      </div>
      <div class="portfolio__grid portfolio__grid--apps">
        <a
          v-for="item in apps"
          :key="item.title"
          class="project"
          :href="item.href"
          :target="isExternal(item) ? '_blank' : undefined"
          :rel="isExternal(item) ? 'noopener noreferrer' : undefined"
        >
          <div
            class="project__media"
            :class="item.media === 'cover' ? 'project__media--cover' : 'project__media--phone'"
          >
            <img :src="item.image" :alt="item.title" loading="lazy" referrerpolicy="no-referrer" />
          </div>
          <div class="project__body">
            <span class="project__tag">{{ item.tag }}</span>
            <h3 class="project__title">{{ item.title }}</h3>
            <p class="project__desc">{{ item.desc }}</p>
            <span class="project__cta">{{ item.cta }} →</span>
          </div>
        </a>
      </div>
      <p class="portfolio__more">
        <a :href="developerUrl" target="_blank" rel="noopener noreferrer">
          在 Google Play 查看 oldbirds 全部应用 →
        </a>
      </p>
    </section>

    <section class="portfolio__section" aria-labelledby="sites-heading">
      <div class="portfolio__section-head">
        <h2 id="sites-heading">网站</h2>
        <p>在线作品与实验项目</p>
      </div>
      <div class="portfolio__grid portfolio__grid--sites">
        <a
          v-for="item in sites"
          :key="item.title"
          class="project project--site"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project__media project__media--cover">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <div class="project__body">
            <span class="project__tag">{{ item.tag }}</span>
            <h3 class="project__title">{{ item.title }}</h3>
            <p class="project__desc">{{ item.desc }}</p>
            <span class="project__cta">{{ item.cta }} →</span>
          </div>
        </a>
      </div>
    </section>

    <section class="portfolio__section" aria-labelledby="media-heading">
      <div class="portfolio__section-head">
        <h2 id="media-heading">自媒体</h2>
        <p>获取更新与长文</p>
      </div>
      <div class="media">
        <img class="media__qr" src="/wechat.png" alt="微信公众号 OldBirds 二维码" loading="lazy" />
        <div class="media__copy">
          <h3>微信公众号 · OldBirds</h3>
          <p>技术笔记、产品动态与学习记录，扫码关注获取更新。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio {
  --pf-accent: var(--vp-c-brand-1);
  --pf-border: color-mix(in srgb, var(--vp-c-divider) 85%, transparent);
  --pf-soft: var(--vp-c-bg-soft);
  max-width: 920px;
  margin: 0 auto;
  padding: 0.5rem 0 2.5rem;
}

.portfolio__intro {
  margin-bottom: 2.75rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--pf-border);
}

.portfolio__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--pf-accent);
}

.portfolio__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--vp-c-text-1);
}

.portfolio__lead {
  margin: 0;
  max-width: 36rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.portfolio__section {
  margin-bottom: 2.75rem;
}

.portfolio__section-head {
  margin-bottom: 1.25rem;
}

.portfolio__section-head h2 {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.portfolio__section-head h2::before {
  display: none;
}

.portfolio__section-head p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-3);
}

.portfolio__section-head a {
  color: var(--pf-accent);
  font-weight: 600;
  text-decoration: none;
}

.portfolio__section-head a:hover {
  text-decoration: underline;
}

.portfolio__more {
  margin: 1.25rem 0 0;
  text-align: center;
  font-size: 0.92rem;
}

.portfolio__more a {
  color: var(--pf-accent);
  font-weight: 600;
  text-decoration: none;
}

.portfolio__more a:hover {
  text-decoration: underline;
}

.portfolio__grid {
  display: grid;
  gap: 1rem;
}

.portfolio__grid--apps,
.portfolio__grid--sites {
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .portfolio__grid--apps {
    grid-template-columns: repeat(2, 1fr);
  }

  .portfolio__grid--sites {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .portfolio__grid--apps {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none !important;
  color: inherit;
  background: var(--vp-c-bg);
  border: 1px solid var(--pf-border);
  border-radius: 14px;
  transition:
    border-color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.project:hover {
  border-color: color-mix(in srgb, var(--pf-accent) 45%, var(--pf-border));
  transform: translateY(-2px);
  box-shadow: 0 10px 28px color-mix(in srgb, var(--vp-c-text-1) 8%, transparent);
}

.project:focus-visible {
  outline: 2px solid var(--pf-accent);
  outline-offset: 3px;
}

.project__media {
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(120% 80% at 50% 0%, color-mix(in srgb, var(--pf-accent) 12%, transparent), transparent 60%),
    var(--pf-soft);
}

.project__media--phone {
  min-height: 200px;
  padding: 1.1rem 1rem 0.5rem;
}

.project__media--phone img {
  width: auto;
  max-width: 100%;
  height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 12px 20px color-mix(in srgb, var(--vp-c-text-1) 16%, transparent));
  transition: transform 0.28s ease;
}

.project:hover .project__media--phone img {
  transform: translateY(-4px) scale(1.02);
}

.project__media--cover {
  aspect-ratio: 16 / 10;
  padding: 0;
  overflow: hidden;
}

.project__media--cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.35s ease;
}

.project:hover .project__media--cover img {
  transform: scale(1.03);
}

.project__body {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 1.1rem 1.15rem;
  flex: 1;
}

.project__tag {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.project__title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.project__title::before {
  display: none;
}

.project__desc {
  margin: 0;
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.project__cta {
  margin-top: 0.45rem;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--pf-accent);
}

.media {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  padding: 1.25rem 1.35rem;
  border: 1px solid var(--pf-border);
  border-radius: 14px;
  background: var(--pf-soft);
}

.media__qr {
  width: 148px;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  background: var(--vp-c-bg);
  border: 1px solid var(--pf-border);
}

.media__copy h3 {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.media__copy h3::before {
  display: none;
}

.media__copy p {
  margin: 0;
  max-width: 28rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

@media (prefers-reduced-motion: reduce) {
  .project,
  .project__media--phone img,
  .project__media--cover img {
    transition: none;
  }

  .project:hover {
    transform: none;
  }
}
</style>
