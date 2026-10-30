import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { buildSidebar } from './sidebar'

const DOCS_DIR = fileURLToPath(new URL('..', import.meta.url))

/**
 * 由每篇文章自己的 frontmatter permalink 生成 rewrites，而不是从文件名推导。
 *
 * VitePress 的 URL 由输出文件路径决定：
 *   foo.md       -> /foo.html
 *   foo/index.md -> /foo/
 * 站点已有 391 个带尾斜杠的 URL 被搜索引擎收录，因此把每个源文件
 * 重写到 `<permalink>/index.md`，即可在不移动任何源文件的前提下
 * 让 VitePress 产出与旧站完全一致的 URL。
 */
function buildRewrites(): Record<string, string> {
  const rewrites: Record<string, string> = {}

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules')
        continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
        continue
      }
      if (!entry.name.endsWith('.md'))
        continue

      const rel = path.relative(DOCS_DIR, full).split(path.sep).join('/')
      // 站点首页：README.md 重写为 index.md，VitePress 才会输出 dist/index.html
      if (rel === 'README.md') {
        rewrites[rel] = 'index.md'
        continue
      }

      const raw = fs.readFileSync(full, 'utf8')
      const matched = raw.match(/^permalink:\s*["']?([^"'\n]+?)["']?\s*$/m)
      const slug = matched
        ? matched[1].replace(/^\/+|\/+$/g, '')
        : rel.replace(/\.md$/, '')

      rewrites[rel] = `${slug}/index.md`
    }
  }

  walk(DOCS_DIR)
  return rewrites
}

/** 收集标注了 sitemap: false 的页面路径，用于从站点地图中排除 */
function collectSitemapExcluded(): Set<string> {
  const excluded = new Set<string>()
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules')
        continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
        continue
      }
      if (!entry.name.endsWith('.md'))
        continue
      const raw = fs.readFileSync(full, 'utf8')
      if (!/^sitemap:\s*false\s*$/m.test(raw))
        continue
      const matched = raw.match(/^permalink:\s*["']?([^"'\n]+?)["']?\s*$/m)
      if (matched)
        excluded.add(matched[1].replace(/\/+$/, '') + '/')
    }
  }
  walk(DOCS_DIR)
  return excluded
}

/** 生成一个最小化的跳转页：noindex 防止与目标页重复收录 */
function redirectPage(target: string): string {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>跳转中…</title>
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<meta name="robots" content="noindex, nofollow">
<script>location.replace(${JSON.stringify(target)})</script>
</head>
<body><p>正在跳转到 <a href="${target}">${target}</a>…</p></body>
</html>`
}

const FOOTER_MESSAGE = `<a style="text-decoration:none; display: inline-block;" target="_blank" href="https://beian.miit.gov.cn/">赣ICP备2021010021号-1</a>
<a style="text-decoration:none; display: inline-block;" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36011102000528">
  <img style="width:12px; height:12px; margin-left:8px; margin-right:2px; display: inline-block;" src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" width="16" height="16" />
  赣公网安备 36011102000528号
</a>
`

export default defineConfig({
  lang: 'zh-CN',
  title: 'OldBird',
  description: 'OldBird 个人技术博客：Swift、SwiftUI、Flutter、AI、Python、易经学习笔记与作品分享',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-4465026491979447' }],
  ],
  rewrites: buildRewrites(),
  // 教程正文里的 http://localhost:8080 是示例地址，不是站内页面
  ignoreDeadLinks: 'localhostLinks',
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    // 站点有 plantuml 代码块，Shiki 无对应语法，回退为纯文本
    languageAlias: { plantuml: 'txt' },
  },
  sitemap: {
    hostname: 'https://oldbird.run',
    // 正文为空的占位页（SwiftUI API 索引、SwiftPM 文档占位等）在旧站标了
    // sitemap: false，这里按同一份 frontmatter 恢复排除
    transformItems(items) {
      const excluded = collectSitemapExcluded()
      return items.filter(item => !excluded.has(new URL(item.url, 'https://oldbird.run').pathname))
    },
  },

  /**
   * 旧站 614 条 URL 重定向：构建后为每个来源路径生成一个静态跳转页。
   * VitePress 没有内置 redirect 插件，用 meta refresh + noindex 实现，
   * noindex 可避免跳转页与目标页产生重复收录。
   */
  buildEnd(siteConfig) {
    const redirectsFile = path.join(DOCS_DIR, '.vitepress/redirects.json')
    if (!fs.existsSync(redirectsFile))
      return
    const redirects: Record<string, string> = JSON.parse(fs.readFileSync(redirectsFile, 'utf8'))
    let written = 0
    for (const [from, to] of Object.entries(redirects)) {
      const clean = from.replace(/^\/+|\/+$/g, '')
      if (!clean)
        continue
      const dir = path.join(siteConfig.outDir, clean)
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(path.join(dir, 'index.html'), redirectPage(to), 'utf8')
      written++
    }
    console.log(`[redirect] 生成 ${written} 个跳转页`)
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'OldBird',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '笔记',
        items: [
          { text: 'Swift', link: '/swift/' },
          { text: 'Flutter', link: '/flutter/' },
          { text: 'AI', link: '/ai/' },
          { text: '算法', link: '/algorithms/' },
          { text: '设计模式', link: '/design-patterns/' },
          { text: 'Python', link: '/python/' },
          { text: '工具', link: '/tools/' },
          { text: '鸿蒙', link: '/harmony/' },
          { text: '运维', link: '/ops/' },
          { text: 'Haskell', link: '/haskell/' },
          { text: 'Java', link: '/java/' },
          { text: 'Vue', link: '/vue/' },
        ],
      },
      { text: '博客', link: '/blog/' },
      { text: '作品', link: '/result/' },
      { text: '易经', link: '/yijing/' },
      { text: '针灸', link: '/acupuncture/' },
    ],
    sidebar: buildSidebar(DOCS_DIR),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/oheroj' },
    ],
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: { text: '最后更新于' },
    footer: {
      message: FOOTER_MESSAGE,
      copyright: 'Copyright © 2020-2026 OldBird',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
  },
})
