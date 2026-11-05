<script setup lang="ts">
import { data as posts } from '../../../blog/posts.data'

const recent = posts.slice(0, 4)

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
    <section class="home-showcase__product" aria-labelledby="home-product-title">
      <div class="product">
        <div class="product__media">
          <img
            class="product__img"
            src="/app-yiqigua.webp"
            alt="易起卦应用图标"
            loading="lazy"
          />
        </div>
        <div class="product__body">
          <h2 id="home-product-title" class="product__title">易起卦</h2>
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

    <section class="home-showcase__recent" aria-labelledby="home-recent-title">
      <header class="home-showcase__head">
        <h2 id="home-recent-title">最近更新</h2>
        <p class="home-showcase__lead">新写下的笔记与观察，按发布时间排列。</p>
      </header>

      <ol class="recent-list">
        <li v-for="post in recent" :key="post.url">
          <a class="recent-item" :href="post.url">
            <time class="recent-item__date" :datetime="post.date">{{ post.date }}</time>
            <span class="recent-item__title">{{ post.title }}</span>
            <span class="recent-item__arrow" aria-hidden="true">→</span>
          </a>
        </li>
      </ol>

      <a class="recent-more" href="/blog/">查看全部文章 <span aria-hidden="true">→</span></a>
    </section>

    <nav class="home-showcase__shortcuts" aria-labelledby="home-shortcuts-title">
      <h2 id="home-shortcuts-title" class="home-showcase__shortcuts-title">更多入口</h2>
      <div class="home-showcase__shortcuts-list">
        <a
          v-for="item in shortcuts"
          :key="item.href"
          :href="item.href"
        >{{ item.text }}</a>
      </div>
    </nav>
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

.home-showcase__head {
  display: grid;
  gap: 7px;
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

.home-showcase__recent {
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid var(--hs-hairline);
}

/* 最近更新用日志式单列：日期与标题一眼扫完，不与上方四张专题卡重复 */
.recent-list {
  margin: 26px 0 0;
  padding: 0;
  list-style: none;
}

.recent-list li + li {
  border-top: 1px solid var(--hs-hairline);
}

.recent-item {
  display: grid;
  grid-template-columns: 6.5rem minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
  min-height: 56px;
  padding: 10px 2px;
  color: inherit;
  text-decoration: none !important;
}

.recent-item__date {
  font-size: 0.8rem;
  color: var(--hs-muted);
  font-variant-numeric: tabular-nums;
}

.recent-item__title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--hs-ink);
  transition: color 0.2s ease;
}

.recent-item__arrow {
  color: var(--hs-brand);
  transition: transform 0.22s ease;
}

.recent-item:hover .recent-item__title {
  color: var(--hs-brand);
}

.recent-item:hover .recent-item__arrow {
  transform: translateX(4px);
}

.recent-item:focus-visible {
  outline: 2px solid var(--hs-brand);
  outline-offset: 3px;
  border-radius: 6px;
}

.recent-more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  margin-top: 8px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--hs-brand);
  text-decoration: none !important;
}

.recent-more:hover {
  text-decoration: underline !important;
  text-underline-offset: 3px;
}

.home-showcase__shortcuts {
  margin-top: 48px;
}

.home-showcase__shortcuts-title {
  margin: 0 0 14px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--hs-muted);
}

.home-showcase__shortcuts-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.home-showcase__shortcuts a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
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
  margin-top: 64px;
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

  .product__title,
  .product__desc {
    grid-column: 1;
  }

  .product__actions {
    grid-column: 2;
    grid-row: 1 / span 2;
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

.home-showcase__shortcuts a:focus-visible,
.product__btn:focus-visible {
  outline: 2px solid var(--hs-brand);
  outline-offset: 3px;
  border-radius: 8px;
}

@media (max-width: 639px) {
  .home-showcase__product {
    margin-top: 48px;
  }

  .home-showcase__recent {
    margin-top: 52px;
    padding-top: 32px;
  }

  .recent-item {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 4px 12px;
    min-height: 60px;
    padding: 12px 2px;
  }

  .recent-item__date {
    grid-column: 1 / -1;
    font-size: 0.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .recent-item__title,
  .recent-item__arrow,
  .recent-item:hover .recent-item__arrow,
  .product__btn,
  .product__btn--primary:hover {
    transform: none;
    transition: none;
  }
}
</style>
