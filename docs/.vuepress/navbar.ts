/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '笔记',
    items: [
      {
        text: '主线',
        items: [
          { text: 'Swift', link: '/swift/' },
          { text: 'Flutter', link: '/flutter/' },
          { text: 'AI', link: '/ai/' },
        ],
      },
      {
        text: '基础',
        items: [
          { text: '算法', link: '/algorithms/' },
          { text: '设计模式', link: '/design-patterns/' },
          { text: 'Python', link: '/python/' },
        ],
      },
      {
        text: '更多',
        items: [
          { text: '工具', link: '/tools/' },
          { text: '鸿蒙', link: '/harmony/' },
          { text: '运维', link: '/ops/' },
          { text: 'Haskell', link: '/haskell/' },
          { text: 'Java', link: '/java/' },
          { text: 'Vue', link: '/vue/' },
        ],
      },
    ],
  },
  { text: '博客', link: '/blog/' },
  { text: '作品', link: '/result/' },
  { text: '易经', link: '/yijing/' },
  { text: '针灸', link: '/acupuncture/' },
])
