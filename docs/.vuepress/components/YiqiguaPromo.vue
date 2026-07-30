<script setup lang="ts">
withDefaults(defineProps<{
  /** compact = 文末条；hero = 落地页大卡 */
  variant?: 'hero' | 'compact'
}>(), {
  variant: 'hero',
})

const productUrl = '/yiqigua.html'
</script>

<template>
  <aside
    class="yg-promo"
    :class="`yg-promo--${variant}`"
    aria-label="易起卦产品推荐"
  >
    <div class="yg-promo__visual" aria-hidden="true">
      <img src="/app-yiqigua.webp" alt="" class="yg-promo__phone" loading="lazy" />
    </div>
    <div class="yg-promo__body">
      <p class="yg-promo__eyebrow">产品推荐</p>
      <h3 class="yg-promo__title">易起卦</h3>
      <p class="yg-promo__desc">
        易经学习与起卦占卜 App：六十四卦详解、智能起卦、卦象解读。学完笔记，打开 App 马上练。
      </p>
      <div class="yg-promo__actions">
        <a class="yg-promo__btn yg-promo__btn--primary" :href="productUrl">
          查看产品页
        </a>
        <a
          class="yg-promo__btn yg-promo__btn--ghost"
          href="https://play.google.com/store/apps/details?id=run.oldbird.yijing_divination_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.yg-promo {
  --yg-gold: #b8954a;
  --yg-ink: color-mix(in srgb, var(--vp-c-text-1) 92%, #3a2e1a);
  display: grid;
  gap: 1.1rem;
  margin: 1.5rem 0 2rem;
  padding: 1.15rem 1.2rem;
  border: 1px solid color-mix(in srgb, var(--yg-gold) 35%, var(--vp-c-divider));
  border-radius: 14px;
  background:
    radial-gradient(120% 90% at 0% 0%, color-mix(in srgb, var(--yg-gold) 14%, transparent), transparent 55%),
    var(--vp-c-bg-soft);
}

.yg-promo--hero {
  grid-template-columns: 1fr;
  align-items: center;
}

@media (min-width: 720px) {
  .yg-promo--hero {
    grid-template-columns: 140px 1fr;
    gap: 1.4rem;
    padding: 1.35rem 1.5rem;
  }
}

.yg-promo--compact {
  grid-template-columns: 72px 1fr;
  gap: 0.9rem;
  margin: 2rem 0 0.5rem;
  padding: 0.9rem 1rem;
}

.yg-promo__visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.yg-promo__phone {
  width: auto;
  max-width: 100%;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 10px 18px color-mix(in srgb, var(--vp-c-text-1) 14%, transparent));
}

.yg-promo--compact .yg-promo__phone {
  height: 88px;
}

.yg-promo__eyebrow {
  margin: 0 0 0.3rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--yg-gold);
}

.yg-promo__title {
  margin: 0 0 0.45rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.yg-promo__title::before {
  display: none;
}

.yg-promo--compact .yg-promo__title {
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.yg-promo__desc {
  margin: 0 0 0.9rem;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.yg-promo--compact .yg-promo__desc {
  margin-bottom: 0.65rem;
  font-size: 0.86rem;
}

.yg-promo__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.yg-promo__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.yg-promo__btn--primary {
  color: #fff;
  background: color-mix(in srgb, var(--yg-gold) 88%, #5a4218);
  border: 1px solid transparent;
}

.yg-promo__btn--primary:hover {
  background: color-mix(in srgb, var(--yg-gold) 100%, #5a4218);
}

.yg-promo__btn--ghost {
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--yg-gold) 40%, var(--vp-c-divider));
}

.yg-promo__btn--ghost:hover {
  border-color: var(--yg-gold);
  color: var(--yg-gold);
}

.yg-promo__btn:focus-visible {
  outline: 2px solid var(--yg-gold);
  outline-offset: 2px;
}
</style>
