<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vuepress/client'

const route = useRoute()
const dismissed = ref(false)

const show = computed(() => {
  if (dismissed.value) return false
  const path = route.path
  if (path === '/yijing/' || path === '/yijing/index.html') return false
  return path.startsWith('/yijing/')
})

watch(
  () => route.path,
  () => {
    dismissed.value = false
  },
)

function dismiss() {
  dismissed.value = true
}
</script>

<template>
  <ClientOnly>
    <div v-if="show" class="yg-bar" role="complementary" aria-label="易起卦产品推荐">
      <img class="yg-bar__icon" src="/images/yiqigua-icon.png" alt="" width="40" height="40" />
      <div class="yg-bar__copy">
        <strong>易起卦</strong>
        <span>学完笔记，用 App 起卦练习</span>
      </div>
      <a class="yg-bar__btn" href="/yiqigua.html">了解产品</a>
      <button class="yg-bar__close" type="button" aria-label="关闭推荐" @click="dismiss">×</button>
    </div>
  </ClientOnly>
</template>

<style scoped>
.yg-bar {
  position: fixed;
  left: 50%;
  bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: min(560px, calc(100vw - 1.5rem));
  padding: 0.7rem 0.85rem;
  transform: translateX(-50%);
  border: 1px solid color-mix(in srgb, #b8954a 40%, var(--vp-c-divider));
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-bg) 92%, transparent);
  box-shadow: 0 12px 32px color-mix(in srgb, var(--vp-c-text-1) 14%, transparent);
  backdrop-filter: blur(10px);
  animation: yg-bar-in 0.35s ease;
}

@keyframes yg-bar-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.yg-bar__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
}

.yg-bar__copy {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
  flex: 1;
}

.yg-bar__copy strong {
  font-size: 0.92rem;
  color: var(--vp-c-text-1);
}

.yg-bar__copy span {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.yg-bar__btn {
  flex-shrink: 0;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff !important;
  text-decoration: none !important;
  background: color-mix(in srgb, #b8954a 88%, #5a4218);
}

.yg-bar__btn:hover {
  background: #b8954a;
}

.yg-bar__close {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-3);
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
}

.yg-bar__close:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

@media (prefers-reduced-motion: reduce) {
  .yg-bar {
    animation: none;
  }
}
</style>
