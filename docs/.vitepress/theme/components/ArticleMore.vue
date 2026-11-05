<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as posts } from '../../../blog/posts.data'

const { page } = useData()

const isArticle = computed(() => (page.value.relativePath ?? '').startsWith('article/'))
const currentPath = computed(() => {
  const relativePath = page.value.relativePath ?? ''
  return `/${relativePath.replace(/index\.md$/, '')}`.replace(/\/+$/, '')
})
const more = computed(() =>
  posts
    .filter(post => post.url.replace(/\/+$/, '') !== currentPath.value)
    .slice(0, 3),
)
</script>

<template>
  <aside
    v-if="isArticle && more.length"
    class="article-more"
    aria-label="继续阅读"
  >
    <header class="article-more__head">
      <h2 class="article-more__title">
        继续阅读
      </h2>
      <a class="article-more__all" href="/blog/">全部文章 <span aria-hidden="true">→</span></a>
    </header>

    <ul class="article-more__list">
      <li v-for="post in more" :key="post.url">
        <a class="article-more__item" :href="post.url">
          <span class="article-more__date">{{ post.date }}</span>
          <span class="article-more__name">{{ post.title }}</span>
          <span class="article-more__arrow" aria-hidden="true">→</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.article-more {
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.article-more__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
}

.article-more__title {
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.article-more__all {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 44px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.article-more__all:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article-more__list {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
}

.article-more__list li + li {
  border-top: 1px solid var(--vp-c-divider);
}

.article-more__item {
  display: grid;
  grid-template-columns: 5.5rem minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  min-height: 52px;
  padding: 0.5rem 0;
  color: inherit;
  text-decoration: none;
}

.article-more__date {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.article-more__name {
  font-size: 0.9375rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.2s ease;
}

.article-more__arrow {
  color: var(--vp-c-brand-1);
  transition: transform 0.2s ease;
}

.article-more__item:hover .article-more__name,
.article-more__item:hover .article-more__arrow {
  color: var(--vp-c-brand-1);
}

.article-more__item:hover .article-more__arrow {
  transform: translateX(3px);
}

.article-more__item:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
  border-radius: 6px;
}

@media (max-width: 639px) {
  .article-more {
    margin-top: 2.75rem;
  }

  .article-more__item {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.25rem 0.75rem;
    min-height: 60px;
  }

  .article-more__date {
    grid-column: 1 / -1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .article-more__name,
  .article-more__arrow,
  .article-more__item:hover .article-more__arrow {
    transform: none;
    transition: none;
  }
}
</style>
