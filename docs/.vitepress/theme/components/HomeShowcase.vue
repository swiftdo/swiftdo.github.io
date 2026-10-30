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
      <header class="home-showcase__head">
        <p class="home-showcase__eyebrow">Start here</p>
        <h2 id="home-topics-title">从这里开始</h2>
        <p class="home-showcase__lead">按主线进入笔记，或先看作品与产品。</p>
      </header>

      <div class="home-showcase__grid">
        <a
          v-for="(item, index) in topics"
          :key="item.href"
          class="topic"
          :href="item.href"
        >
          <span class="topic__meta">
            <span class="topic__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="topic__kicker">{{ item.kicker }}</span>
          </span>
          <strong class="topic__title">{{ item.title }}</strong>
          <span class="topic__desc">{{ item.desc }}</span>
          <span class="topic__cta">
            进入专题
            <span class="topic__arrow" aria-hidden="true">→</span>
          </span>
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
        <div class="product__media">
          <img
            class="product__img"
            src="/app-yiqigua.webp"
            alt="易起卦应用截图"
            loading="lazy"
          />
        </div>
        <div class="product__body">
          <p class="product__eyebrow">Product</p>
          <h3 class="product__title">易起卦</h3>
          <p class="product__desc">
            六爻起卦与排盘 App：不解卦，提供 AI 提示词模板方便提问；支持一键起卦、卦例学习与本地记录。
          </p>
          <div class="product__actions">
            <!-- 静态页在 public/ 里，target 让前端路由跳过、走整页跳转（见 docs/.env 注释） -->
            <a class="product__btn product__btn--primary" href="/yiqigua.html" target="_self">查看产品页</a>
            <a class="product__btn product__btn--ghost" href="/result/">全部作品</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/**
 * 与 Hero / Features 共用 1152 的内容宽度（--home-max 来自 theme/custom.css）。
 * 父级 .vp-doc.container 已有 24/48/64 的内边距，这里不再重复加 padding。
 */
.home-showcase {
  --hs-ink: var(--vp-c-text-1);
  --hs-muted: var(--vp-c-text-2);
  --hs-brand: var(--vp-c-brand-1);
  --hs-gold: var(--home-gold, #b8954a);
  --hs-hairline: var(--home-hairline, color-mix(in srgb, var(--vp-c-divider) 85%, transparent));
  width: 100%;
  max-width: var(--home-max, 1152px);
  margin: 0 auto;
}

.home-showcase__topics {
  margin-top: 72px;
  padding-top: 40px;
  border-top: 1px solid var(--hs-hairline);
}

.home-showcase__head {
  display: grid;
  gap: 6px;
}

.home-showcase__eyebrow {
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--hs-brand);
}

.home-showcase__head h2 {
  margin: 0;
  padding: 0;
  border: none;
  font-size: clamp(1.5rem, 3.4vw, 1.95rem);
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--hs-ink);
}

.home-showcase__head h2::before {
  display: none;
}

.home-showcase__lead {
  margin: 2px 0 0;
  max-width: 46ch;
  font-size: 0.94rem;
  line-height: 1.7;
  color: var(--hs-muted);
}

/* 目录式索引：四条细线分隔，比再排一组卡片更轻，也避免与上方图标卡重复 */
.home-showcase__grid {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 30px;
}

@media (min-width: 640px) {
  .home-showcase__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 30px;
  }
}

@media (min-width: 1024px) {
  .home-showcase__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.topic {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px 2px 20px;
  border-top: 1px solid var(--hs-hairline);
  color: inherit;
  text-decoration: none !important;
  transition: border-color 0.25s ease;
}

.topic__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 3px;
}

.topic__index {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-variant-numeric: tabular-nums;
  color: var(--hs-brand);
}

.topic__kicker {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--vp-c-text-3);
}

.topic__title {
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--hs-ink);
  transition: color 0.2s ease;
}

.topic__desc {
  flex: 1;
  font-size: 0.83rem;
  line-height: 1.65;
  color: var(--hs-muted);
}

.topic__cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--hs-brand);
}

.topic__arrow {
  transition: transform 0.22s ease;
}

.topic:hover {
  border-top-color: color-mix(in srgb, var(--hs-brand) 45%, var(--hs-hairline));
}

.topic:hover .topic__title {
  color: var(--hs-brand);
}

.topic:hover .topic__arrow {
  transform: translateX(4px);
}

.home-showcase__shortcuts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.home-showcase__shortcuts a {
  padding: 5px 12px;
  border: 1px solid var(--hs-hairline);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--hs-muted);
  text-decoration: none !important;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.home-showcase__shortcuts a:hover {
  color: var(--hs-brand);
  border-color: color-mix(in srgb, var(--hs-brand) 40%, var(--hs-hairline));
  background-color: color-mix(in srgb, var(--hs-brand) 7%, transparent);
}

/* ── 产品卡：全站唯一使用金色的区块，作为「产品」语义的固定色 ── */

.home-showcase__product {
  margin-top: 56px;
}

.product {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 24px;
  border: 1px solid color-mix(in srgb, var(--hs-gold) 28%, var(--hs-hairline));
  border-radius: 22px;
  background:
    radial-gradient(
      110% 130% at 0% 0%,
      color-mix(in srgb, var(--hs-gold) 14%, transparent),
      transparent 62%
    ),
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--hs-gold) 5%, var(--vp-c-bg-soft)),
      var(--vp-c-bg-soft)
    );
}

@media (min-width: 768px) {
  .product {
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 28px;
    align-items: center;
    padding: 30px 34px;
  }
}

/* 图标本身带白底，做成 App 图标样式比强行抠图更干净 */
.product__media {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-radius: 20px;
  background: #fff;
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--hs-gold) 18%, transparent),
    0 14px 26px -16px color-mix(in srgb, #6b4f1d 55%, transparent);
}

@media (min-width: 768px) {
  .product__media {
    width: 96px;
    height: 96px;
    border-radius: 23px;
  }
}

.product__img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: contain;
}

.product__eyebrow {
  margin: 0 0 6px;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--hs-gold);
}

.product__title {
  margin: 0 0 8px;
  padding: 0;
  border: none;
  font-size: 1.32rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--hs-ink);
}

.product__title::before {
  display: none;
}

.product__desc {
  margin: 0 0 18px;
  max-width: 54ch;
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--hs-muted);
}

.product__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* 宽屏下按钮移到右侧独立成列，避免长条面板右侧留出大片空白 */
@media (min-width: 1024px) {
  .product__body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 36px;
    align-items: center;
  }

  .product__eyebrow,
  .product__title,
  .product__desc {
    grid-column: 1;
  }

  .product__actions {
    grid-column: 2;
    grid-row: 1 / span 3;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 8px;
    padding-left: 36px;
    border-left: 1px solid color-mix(in srgb, var(--hs-gold) 22%, var(--hs-hairline));
  }

  .product__btn {
    min-width: 148px;
    padding: 11px 20px;
    font-size: 0.85rem;
  }
}

.product__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none !important;
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

/* 白字压在金色上对比只有 3.5:1，改用深墨字色，既过 AA 也更贴合「墨 + 金」 */
.product__btn--primary {
  color: #2a1d05;
  background: linear-gradient(180deg, #d9ba7b 0%, #b8954a 100%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 38%),
    0 12px 22px -14px color-mix(in srgb, #8a6a24 85%, transparent);
}

.product__btn--primary:hover {
  transform: translateY(-1px);
  background: linear-gradient(180deg, #e3c586 0%, #c5a155 100%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 42%),
    0 16px 26px -14px color-mix(in srgb, #8a6a24 90%, transparent);
}

.product__btn--ghost {
  color: var(--hs-ink);
  border: 1px solid color-mix(in srgb, var(--hs-gold) 38%, var(--hs-hairline));
}

.product__btn--ghost:hover {
  color: color-mix(in srgb, var(--hs-gold) 80%, var(--hs-ink));
  border-color: var(--hs-gold);
  background-color: color-mix(in srgb, var(--hs-gold) 8%, transparent);
}

.topic:focus-visible,
.home-showcase__shortcuts a:focus-visible,
.product__btn:focus-visible {
  outline: 2px solid var(--hs-brand);
  outline-offset: 3px;
  border-radius: 8px;
}

@media (max-width: 639px) {
  .home-showcase__topics {
    margin-top: 56px;
    padding-top: 32px;
  }

  .home-showcase__product {
    margin-top: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .topic,
  .topic__title,
  .topic__arrow,
  .topic:hover .topic__arrow,
  .product__btn,
  .product__btn--primary:hover {
    transform: none;
    transition: none;
  }
}
</style>
