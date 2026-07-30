<script setup lang="ts">
type Project = {
  title: string
  desc: string
  href: string
  image: string
  tag: string
  cta?: string
}

const apps: Project[] = [
  {
    title: '易起卦',
    desc: '融合易经文化与现代交互的六爻占卜应用。生成卦象、解读推演，并支持历史记录回顾。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.yijing_divination_app',
    image: '/app-yiqigua.webp',
    tag: 'Android · 易经',
    cta: 'Google Play',
  },
  {
    title: 'iDiary',
    desc: '极简笔记应用，以 Git 作为存储后端，适合想把日记纳入版本管理的人。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.idiary&pli=1',
    image: '/app-idiary.webp',
    tag: 'Android · 笔记',
    cta: 'Google Play',
  },
  {
    title: 'Panda',
    desc: '基于 TinyPNG 的图片压缩客户端，帮你快速减小体积、保持观感。',
    href: 'https://play.google.com/store/apps/details?id=run.oldbird.panda',
    image: '/app-panda.webp',
    tag: 'Android · 工具',
    cta: 'Google Play',
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
  },
  {
    title: '拼图游戏',
    desc: '轻量网页拼图小游戏，随手玩玩也能打发时间。',
    href: 'https://puzzle.oldbird.run',
    image: '/puzzle.png',
    tag: 'Website · Game',
    cta: '开始游戏',
  },
]
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
        <p>上架 Google Play 的实用与兴趣应用</p>
      </div>
      <div class="portfolio__grid portfolio__grid--apps">
        <a
          v-for="item in apps"
          :key="item.title"
          class="project"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project__media project__media--app">
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
          <div class="project__media project__media--site">
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

.portfolio__grid {
  display: grid;
  gap: 1rem;
}

.portfolio__grid--apps {
  grid-template-columns: 1fr;
}

.portfolio__grid--sites {
  grid-template-columns: 1fr;
}

@media (min-width: 720px) {
  .portfolio__grid--apps {
    grid-template-columns: repeat(3, 1fr);
  }

  .portfolio__grid--sites {
    grid-template-columns: repeat(2, 1fr);
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

.project__media--app {
  min-height: 220px;
  padding: 1.25rem 1rem 0.5rem;
}

.project__media--app img {
  width: auto;
  max-width: 100%;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 12px 20px color-mix(in srgb, var(--vp-c-text-1) 16%, transparent));
  transition: transform 0.28s ease;
}

.project:hover .project__media--app img {
  transform: translateY(-4px) scale(1.02);
}

.project__media--site {
  aspect-ratio: 16 / 10;
  padding: 0;
  overflow: hidden;
}

.project__media--site img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.35s ease;
}

.project:hover .project__media--site img {
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
  width: 120px;
  height: 120px;
  object-fit: cover;
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
  .project__media--app img,
  .project__media--site img {
    transition: none;
  }

  .project:hover {
    transform: none;
  }
}
</style>
