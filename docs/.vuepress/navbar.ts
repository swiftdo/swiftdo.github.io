/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '书单', link: '/book/' },
  { text: '周易', link: '/notes/yijing/' },
  {
    text: '笔记',
    items: [
      { text: 'Swift', link: '/notes/swift/README.md' },
      { text: 'Flutter', link: '/notes/flutter/README.md' },
      { text: 'Python', link: '/notes/python/README.md' },
      { text: 'Vue', link: '/notes/vue/README.md' },
      { text: 'AI', link: '/notes/ai/README.md' },
      { text: '算法', link: '/notes/algorithms/README.md' },
      { text: '设计模式', link: '/notes/design-patterns/README.md' },
    ]
  },
])
