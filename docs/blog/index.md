---
title: 博客
description: 技术观察与工具速递
# 列表页没有标题层级，右侧目录永远为空；aside 关掉后正文才能在版心里居中
aside: false
---

# 博客

<script setup>
import { data as posts } from './posts.data'
</script>

<div class="post-list">
  <a v-for="post in posts" :key="post.url" :href="post.url" class="post-item">
    <h2 class="post-item__title">
      {{ post.title }}
    </h2>
    <p v-if="post.description" class="post-item__desc">{{ post.description }}</p>
    <time v-if="post.date" class="post-item__date">{{ post.date.slice(0, 10) }}</time>
  </a>
</div>

<style scoped>
/* 间距取正文页的同一套尺度：条目之间 1.5rem，标题到摘要 0.5rem，
   摘要到日期 0.75rem。旧版是 8 / 10 / 20 三个随手写死的值。 */
.post-list {
  margin-top: 2.5rem;
}

.post-item {
  position: relative;
  display: block;
  padding: 1.5rem 0 1.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
  color: inherit;
  text-decoration: none !important;
}

.post-item:first-child {
  padding-top: 0;
}

.post-item:last-child {
  border-bottom: none;
}

.post-item__title {
  margin: 0 0 0.5rem;
  font-size: 1.1875rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.008em;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.post-item:hover .post-item__title {
  color: var(--vp-c-brand-1);
}

.post-item:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
  border-radius: 6px;
}

.post-item__desc {
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.75;
}

.post-item__date {
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  /* 等宽数字，日期左边缘对齐时不会因 1 和 8 的宽度差而跳动 */
  font-variant-numeric: tabular-nums;
}
</style>
