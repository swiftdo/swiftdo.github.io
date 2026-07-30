<script setup lang="ts">
const topics = [
  {
    title: 'Swift',
    desc: 'SwiftUI · Vapor · SPM · iOS',
    href: '/swift/',
    kicker: '主线',
  },
  {
    title: 'Flutter',
    desc: '跨平台 · 渲染 · 部署 · 鸿蒙',
    href: '/flutter/',
    kicker: '主线',
  },
  {
    title: 'AI',
    desc: '机器学习 · DeepSeek · 工具实践',
    href: '/ai/',
    kicker: '主线',
  },
  {
    title: '易经',
    desc: '周易 · 六爻 · 梅花易数',
    href: '/yijing/',
    kicker: '特色',
  },
]

const shortcuts = [
  { text: '算法', href: '/algorithms/' },
  { text: '设计模式', href: '/design-patterns/' },
  { text: '工具', href: '/tools/' },
  { text: '博客', href: '/blog/' },
  { text: '作品集', href: '/result/' },
]
</script>

<template>
  <div class="home-showcase">
    <section class="home-showcase__topics" aria-labelledby="home-topics-title">
      <div class="home-showcase__head">
        <p class="home-showcase__eyebrow">Start here</p>
        <h2 id="home-topics-title">从这里开始</h2>
        <p>按主线进入笔记，或先看作品与产品。</p>
      </div>

      <div class="home-showcase__grid">
        <a
          v-for="item in topics"
          :key="item.href"
          class="topic"
          :href="item.href"
        >
          <span class="topic__kicker">{{ item.kicker }}</span>
          <strong class="topic__title">{{ item.title }}</strong>
          <span class="topic__desc">{{ item.desc }}</span>
          <span class="topic__cta">进入专题 →</span>
        </a>
      </div>

      <nav class="home-showcase__shortcuts" aria-label="更多入口">
        <a
          v-for="item in shortcuts"
          :key="item.href"
          :href="item.href"
        >{{ item.text }}</a>
      </nav>
    </section>

    <section class="home-showcase__product" aria-label="产品推荐">
      <div class="product">
        <img
          class="product__img"
          src="/app-yiqigua.webp"
          alt="易起卦应用截图"
          loading="lazy"
        />
        <div class="product__body">
          <p class="product__eyebrow">Product</p>
          <h3 class="product__title">易起卦</h3>
          <p class="product__desc">
            六爻起卦 App：排盘、一键起卦、卦象解读、卦签诗与卦例、历史记录。读完笔记，打开 App 立刻练习六爻。
          </p>
          <div class="product__actions">
            <a class="product__btn product__btn--primary" href="/yiqigua.html">查看产品页</a>
            <a class="product__btn product__btn--ghost" href="/result/">全部作品</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-showcase {
  --hs-accent: var(--vp-c-brand-1);
  --hs-border: color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  width: min(1080px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 1.5rem 0 0.5rem;
}

.home-showcase__head {
  margin-bottom: 1.35rem;
  text-align: center;
}

.home-showcase__eyebrow,
.product__eyebrow {
  margin: 0 0 0.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--hs-accent);
}

.home-showcase__head h2 {
  margin: 0 0 0.45rem;
  font-size: clamp(1.45rem, 3vw, 1.85rem);
  font-weight: 750;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
  border: none;
}

.home-showcase__head h2::before {
  display: none;
}

.home-showcase__head p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.98rem;
}

.home-showcase__grid {
  display: grid;
  gap: 0.9rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .home-showcase__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .home-showcase__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.topic {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-height: 148px;
  padding: 1.1rem 1.15rem;
  border: 1px solid var(--hs-border);
  border-radius: 14px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--hs-accent) 7%, var(--vp-c-bg)) 0%, var(--vp-c-bg) 55%);
  text-decoration: none !important;
  color: inherit;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;
}

.topic:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--hs-accent) 45%, var(--hs-border));
  box-shadow: 0 12px 28px color-mix(in srgb, var(--vp-c-text-1) 8%, transparent);
}

.topic:focus-visible {
  outline: 2px solid var(--hs-accent);
  outline-offset: 3px;
}

.topic__kicker {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.topic__title {
  font-size: 1.2rem;
  font-weight: 750;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.topic__desc {
  flex: 1;
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.topic__cta {
  margin-top: 0.35rem;
  font-size: 0.84rem;
  font-weight: 650;
  color: var(--hs-accent);
}

.home-showcase__shortcuts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
  margin: 1.25rem 0 2.25rem;
}

.home-showcase__shortcuts a {
  padding: 0.35rem 0.8rem;
  border: 1px solid var(--hs-border);
  border-radius: 999px;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none !important;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
}

.home-showcase__shortcuts a:hover {
  color: var(--hs-accent);
  border-color: color-mix(in srgb, var(--hs-accent) 40%, var(--hs-border));
  background: color-mix(in srgb, var(--hs-accent) 8%, transparent);
}

.product {
  display: grid;
  gap: 1.2rem;
  align-items: center;
  padding: 1.2rem 1.25rem;
  border: 1px solid color-mix(in srgb, #b8954a 34%, var(--hs-border));
  border-radius: 16px;
  background:
    radial-gradient(120% 90% at 0% 0%, color-mix(in srgb, #b8954a 14%, transparent), transparent 55%),
    var(--vp-c-bg-soft);
}

@media (min-width: 768px) {
  .product {
    grid-template-columns: 150px 1fr;
    padding: 1.4rem 1.6rem;
  }
}

.product__img {
  width: auto;
  max-width: 140px;
  height: 170px;
  margin: 0 auto;
  object-fit: contain;
  filter: drop-shadow(0 12px 20px color-mix(in srgb, var(--vp-c-text-1) 14%, transparent));
}

.product__title {
  margin: 0 0 0.45rem;
  font-size: 1.3rem;
  font-weight: 750;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  border: none;
}

.product__title::before {
  display: none;
}

.product__desc {
  margin: 0 0 1rem;
  max-width: 36rem;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.product__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.product__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.48rem 0.95rem;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 650;
  text-decoration: none !important;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.product__btn--primary {
  color: #fff;
  background: color-mix(in srgb, #b8954a 88%, #5a4218);
}

.product__btn--primary:hover {
  background: #b8954a;
}

.product__btn--ghost {
  color: var(--vp-c-text-1);
  border: 1px solid color-mix(in srgb, #b8954a 40%, var(--hs-border));
}

.product__btn--ghost:hover {
  color: #b8954a;
  border-color: #b8954a;
}

@media (prefers-reduced-motion: reduce) {
  .topic {
    transition: none;
  }

  .topic:hover {
    transform: none;
  }
}
</style>
