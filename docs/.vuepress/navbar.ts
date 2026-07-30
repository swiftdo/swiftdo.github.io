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
  { text: '作品', link: '/result/' },
  { text: '书单', link: '/book/' },
  { text: '易经', link: '/yijing/' },
  {
    text: '笔记',
    items: [
      { text: 'Swift', link: '/swift/' },
      { text: 'Flutter', link: '/flutter/' },
      { text: 'AI', link: '/ai/' },
      { text: 'Python', link: '/python/' },
      { text: '工具', link: '/tools/' },
      { text: '算法', link: '/algorithms/' },
      { text: '设计模式', link: '/design-patterns/' },
      { text: 'Haskell', link: '/haskell/' },
      { text: '鸿蒙', link: '/harmony/' },
      { text: '运维', link: '/ops/' },
      { text: 'Java', link: '/java/' },
      { text: 'Vue', link: '/vue/' },
    ],
  },
])
