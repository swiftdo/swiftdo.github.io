---
title: 标签
description: 按标签浏览博客文章，查看同一主题下的全部内容
# 标签由 Vue 模板渲染，没有 markdown 标题层级可供目录使用；关掉空栏正文才居中
aside: false
---

# 标签

<script setup>
import { data as posts } from '../blog/posts.data'
import { tagSlug } from '../.vitepress/tag-slug'

// 大小写不敏感归并（OpenAI / openai 是同一个标签），展示出现次数更多的那种写法。
// key 就是 section 的 id，与文章页 tag 链接的 hash 由 tagSlug 统一生成。
const groups = (() => {
  const byKey = new Map()
  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      const key = tagSlug(tag)
      if (!key) continue
      let group = byKey.get(key)
      if (!group) {
        group = { key, variants: new Map(), posts: [] }
        byKey.set(key, group)
      }
      group.variants.set(tag, (group.variants.get(tag) ?? 0) + 1)
      if (!group.posts.some(p => p.url === post.url)) group.posts.push(post)
    }
  }
  return [...byKey.values()]
    .map(group => ({
      ...group,
      label: [...group.variants.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN'))[0][0],
    }))
    .sort((a, b) => b.posts.length - a.posts.length || a.label.localeCompare(b.label, 'zh-CN'))
})()

const anchor = group => `#${encodeURIComponent(group.key)}`
</script>

<div class="tag-cloud">
  <a v-for="g in groups" :key="g.key" :href="anchor(g)" class="tag-cloud__item">
    {{ g.label }}<span class="tag-cloud__count">{{ g.posts.length }}</span>
  </a>
</div>

<p v-if="!groups.length" class="tag-empty">还没有文章带标签。</p>

<div class="tag-groups">
  <section v-for="g in groups" :key="g.key" :id="g.key" class="tag-group">
    <h2>{{ g.label }}<span class="tag-group__count">{{ g.posts.length }} 篇</span></h2>
    <ul class="tag-group__posts">
      <li v-for="post in g.posts" :key="post.url">
        <a :href="post.url">{{ post.title }}</a>
        <time v-if="post.date">{{ post.date }}</time>
      </li>
    </ul>
  </section>
</div>

<style scoped>
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 2rem 0 2.5rem;
}

.tag-cloud__item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  text-decoration: none !important;
  transition: color 0.2s, border-color 0.2s;
}

.tag-cloud__item:hover,
.tag-cloud__item:focus-visible {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.tag-cloud__item:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.tag-cloud__count,
.tag-group__count {
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}

.tag-cloud__count {
  font-size: 0.75rem;
}

/* 避开顶部 sticky 导航，锚点跳转时标题不会被盖住 */
.tag-group {
  scroll-margin-top: calc(var(--vp-nav-height, 64px) + 1.5rem);
}

.tag-group__count {
  margin-left: 10px;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0;
}

.tag-group__posts {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag-group__posts li {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin: 0;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.tag-group__posts li:last-child {
  border-bottom: none;
}

.tag-group__posts a {
  color: var(--vp-c-text-1);
  font-size: 0.9375rem;
  line-height: 1.6;
  text-decoration: none !important;
  transition: color 0.2s;
}

.tag-group__posts a:hover,
.tag-group__posts a:focus-visible {
  color: var(--vp-c-brand-1);
}

.tag-group__posts time {
  flex-shrink: 0;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
}

.tag-empty {
  color: var(--vp-c-text-2);
}
</style>
