---
title: 博客
description: 技术观察与工具速递
---

<script setup>
import { data as posts } from './posts.data'
</script>

<div class="post-list">
  <article v-for="post in posts" :key="post.url" class="post-item">
    <h2 class="post-item__title">
      <a :href="post.url">{{ post.title }}</a>
    </h2>
    <p v-if="post.description" class="post-item__desc">{{ post.description }}</p>
    <time v-if="post.date" class="post-item__date">{{ String(post.date).slice(0, 10) }}</time>
  </article>
</div>

<style scoped>
.post-list {
  margin-top: 24px;
}

.post-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-item:last-child {
  border-bottom: none;
}

.post-item__title {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
}

.post-item__title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s;
}

.post-item__title a:hover {
  color: var(--vp-c-brand-1);
}

.post-item__desc {
  margin: 0 0 10px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.post-item__date {
  color: var(--vp-c-text-3);
  font-size: 13px;
}
</style>
