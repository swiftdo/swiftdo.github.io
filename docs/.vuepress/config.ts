/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { redirectPlugin } from '@vuepress/plugin-redirect'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import redirects from './redirects.json' with { type: 'json' }

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'OldBird',
  description: 'OldBird 个人技术博客：Swift、SwiftUI、Flutter、AI、Python、易经学习笔记与作品分享',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-Y1G8WYFPCJ',
    }),
    // 代码块复制按钮由主题内置注册（copyCode 默认开启），无需在此重复添加
    redirectPlugin({
      config: redirects,
    }),
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'https://oldbird.run',

    /* 文档仓库配置，用于 editLink */
    docsRepo: '',

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * 新文章按文件路径生成可读 permalink，利于 SEO
     */
    autoFrontmatter: {
      permalink: 'filepath',
      createTime: true,
      title: true,
      /**
       * 主题会把所有 README.md 误判为站点根页并强制写入 pageLayout: home
       * （判断条件 filepath.endsWith(path.join(locale, 'README.md')) 在单语言站点下恒为真），
       * 导致 /book/、/result/ 这类独立页面被改成首页布局。这里按路径还原。
       */
      transform: (data, { relativePath }) => {
        if (relativePath === 'book/README.md')
          delete data.pageLayout
        else if (relativePath === 'result/README.md')
          data.pageLayout = 'page'
        return data
      },
    },

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },
  }),
})
