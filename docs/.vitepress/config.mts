import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { buildSidebar } from './sidebar'
import { listMarkdownFiles, readFrontmatter } from './frontmatter'

const DOCS_DIR = fileURLToPath(new URL('..', import.meta.url))

/**
 * public/ 下的静态 .html 必须靠 docs/.env 的 VITE_EXTRA_EXTENSIONS 声明成「静态资源扩展名」，
 * 否则客户端路由会把 /yiqigua.html 当站内页面去加载 md 模块，点一次 404 一次。
 * 这个失效是静默的（构建照常成功、线上才发现），所以在构建入口直接拦下。
 */
function assertStaticHtmlNotRouted(): void {
  const envFile = path.join(DOCS_DIR, '.env')
  const text = fs.existsSync(envFile) ? fs.readFileSync(envFile, 'utf8') : ''
  const fromFile = /^VITE_EXTRA_EXTENSIONS=(.*)$/m.exec(text)?.[1] ?? ''
  const value = (process.env.VITE_EXTRA_EXTENSIONS || fromFile).replace(/['"]/g, '')
  const exts = value.split(',').map(ext => ext.trim()).filter(Boolean)
  if (!exts.includes('html')) {
    throw new Error(
      `缺少 VITE_EXTRA_EXTENSIONS=html：public/ 下的静态 .html（如 yiqigua.html）会被客户端路由拦成 404。\n请检查 ${envFile}`,
    )
  }
}

assertStaticHtmlNotRouted()

const SITE_HOST = 'https://oldbird.run'

/**
 * 文件路径 -> 页面 URL：`swift/swiftui/alert/index.md` -> `/swift/swiftui/alert/` */
function pageUrl(full: string): string {
  const rel = path.relative(DOCS_DIR, full).split(path.sep).join('/')
  return `/${rel.replace(/(^|\/)index\.md$/, '$1')}`
}

/** markdown 路径 -> 页面 URL：`article/foo/index.md` -> `/article/foo/` */
function mdPathToUrl(rel: string): string {
  return `/${rel.replace(/index\.md$/, '')}`
}

/**
 * 文件 -> git 最后一次修改时间（仓库相对路径 -> ISO 时间串）。
 * 一次 `git log` 全量扫描，取每个文件在历史中最近一次出现的提交时间。
 * VitePress 默认的 sitemap lastmod 是构建时刻，每次部署全站「都更新过」，
 * 这个信号很快会被搜索引擎降权，所以改用真实的提交时间。
 */
function collectGitLastmod(): Map<string, string> {
  const map = new Map<string, string>()
  try {
    const out = execSync('git log --format=%cI --name-only', {
      cwd: DOCS_DIR,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
    let time = ''
    for (const line of out.split('\n')) {
      const trimmed = line.trim()
      if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
        time = trimmed
        continue
      }
      if (!trimmed || time === '' || map.has(trimmed))
        continue
      map.set(trimmed, time)
    }
  }
  catch {
    // 非 git 环境（如 CI 浅克隆）拿不到历史，回退 VitePress 默认行为
  }
  return map
}

/** 页面 URL -> 仓库内文件路径：`/swift/foo/` -> `docs/swift/foo/index.md` */
function urlToRepoFile(pathname: string): string {
  return `docs${pathname.replace(/\/$/, '')}/index.md`
}

function xmlEscape(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** 生成 llms.txt：给 AI 引擎（ChatGPT / Perplexity 等）的站点导读 */
function buildLlmsTxt(): string {
  const rels = listMarkdownFiles(DOCS_DIR)
    .map(full => path.relative(DOCS_DIR, full).split(path.sep).join('/'))
    .filter(rel => rel.endsWith('index.md'))

  const fmOf = (rel: string) => readFrontmatter(path.join(DOCS_DIR, rel))

  // 顶层板块：swift/、flutter/、blog/ 等（不含首页与文章）
  const sections = rels
    .filter(rel => /^[^/]+\/index\.md$/.test(rel) && !rel.startsWith('article/'))
    .map(rel => ({ url: mdPathToUrl(rel), fm: fmOf(rel) }))

  // 博客文章，按发布日期倒序
  const articles = rels
    .filter(rel => rel.startsWith('article/'))
    .map((rel) => {
      const fm = fmOf(rel)
      return { url: mdPathToUrl(rel), fm, date: (fm.date || fm.createTime || '').trim() }
    })
    .sort((a, b) => b.date.localeCompare(a.date))

  const sectionLines = sections
    .map(({ url, fm }) => `- [${fm.title ?? url}](${SITE_HOST}${url}): ${fm.description ?? ''}`)
  const articleLines = articles
    .map(({ url, fm, date }) => `- [${fm.title ?? url}](${SITE_HOST}${url})${date ? ` (${date})` : ''}: ${fm.description ?? ''}`)

  return `# OldBird

> OldBird（oldbird.run）是 OldBird 的个人技术博客：Swift、SwiftUI、Flutter、AI、Python、算法与鸿蒙的开发笔记，以及周易学习笔记与个人作品（易起卦等）。内容以中文写成，技术类笔记包含代码示例。

## 板块

${sectionLines.join('\n')}

## 博客文章

${articleLines.join('\n')}
`
}

/** 生成博客 RSS 2.0 feed（docs 下的 article 目录，按发布日期倒序） */
function buildRssXml(): string {
  const items = listMarkdownFiles(DOCS_DIR)
    .map(full => path.relative(DOCS_DIR, full).split(path.sep).join('/'))
    .filter(rel => rel.startsWith('article/') && rel.endsWith('/index.md'))
    .map((rel) => {
      const fm = readFrontmatter(path.join(DOCS_DIR, rel))
      const pubRaw = (fm.date || fm.createTime || '').trim()
      const pub = pubRaw ? new Date(pubRaw.replace(/\//g, '-')) : undefined
      return {
        title: fm.title ?? '未命名',
        link: `${SITE_HOST}${mdPathToUrl(rel)}`,
        description: fm.description ?? '',
        pubDate: pub && !Number.isNaN(pub.getTime()) ? pub.toUTCString() : '',
      }
    })
    .sort((a, b) => b.pubDate.localeCompare(a.pubDate))

  const entries = items.map(item => `    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${xmlEscape(item.link)}</link>
      <guid isPermaLink="true">${xmlEscape(item.link)}</guid>
      <description>${xmlEscape(item.description)}</description>
${item.pubDate ? `      <pubDate>${item.pubDate}</pubDate>\n` : ''}    </item>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OldBird 博客</title>
    <link>${SITE_HOST}/blog/</link>
    <atom:link href="${SITE_HOST}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>OldBird 个人技术博客：Swift、Flutter、AI 与工程实践</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${entries}
  </channel>
</rss>
`
}

/** 收集标注了 sitemap: false 的页面，用于从站点地图中排除 */
function collectSitemapExcluded(): Set<string> {
  const excluded = new Set<string>()
  for (const full of listMarkdownFiles(DOCS_DIR)) {
    if (readFrontmatter(full).sitemap === 'false')
      excluded.add(pageUrl(full))
  }
  return excluded
}

/**
 * 生成一个最小化的跳转页：noindex 防止与目标页重复收录
 */
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
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'OldBird 博客', href: '/rss.xml' }],
  ],
  // 教程正文里的 http://localhost:8080 是示例地址，不是站内页面
  ignoreDeadLinks: 'localhostLinks',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://oldbird.run',
    // 正文为空的占位页（SwiftUI API 索引、SwiftPM 文档占位等）标了 sitemap: false
    transformItems: (items) => {
      const excluded = collectSitemapExcluded()
      const lastmod = collectGitLastmod()
      return items
        .filter((item) => {
          const pathname = new URL(item.url, 'https://oldbird.run').pathname
          return !excluded.has(pathname)
        })
        .map((item) => {
          const pathname = new URL(item.url, 'https://oldbird.run').pathname
          const fileTime = lastmod.get(urlToRepoFile(pathname))
          if (fileTime)
            item.lastmod = fileTime
          return item
        })
    },
  },
  /**
   * SEO 头部注入（构建时逐页执行）：
   * 1. OG / Twitter 卡片 —— 社交分享摘要，VitePress 1.x 不自动生成
   * 2. canonical —— 明确规范地址，避免尾斜杠变体重复收录
   * 3. sitemap: false 的占位页补 noindex —— 不进 sitemap 之外也拒绝被抓取收录
   * 4. 博客文章注入 Article JSON-LD 结构化数据
   */
  transformPageData(pageData) {
    const url = `${SITE_HOST}${mdPathToUrl(pageData.relativePath)}`
    const isArticle = pageData.relativePath.startsWith('article/')
    const fm = pageData.frontmatter

    fm.head ??= []
    fm.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:site_name', content: 'OldBird' }],
      ['meta', { property: 'og:type', content: isArticle ? 'article' : 'website' }],
      ['meta', { property: 'og:title', content: pageData.title }],
      ['meta', { property: 'og:description', content: pageData.description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: `${SITE_HOST}/logo.png` }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
    )

    if (fm.sitemap === 'false' || fm.sitemap === false)
      fm.head.push(['meta', { name: 'robots', content: 'noindex, nofollow' }])

    if (isArticle) {
      const raw = fm.date || fm.createTime
      const published = raw ? new Date(raw).toISOString() : undefined
      fm.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: pageData.title,
          ...(pageData.description ? { description: pageData.description } : {}),
          ...(published ? { datePublished: published } : {}),
          author: { '@type': 'Person', name: 'OldBird' },
          mainEntityOfPage: url,
          image: `${SITE_HOST}/logo.png`,
        }),
      ])
    }
  },
  vite: {
    build: {
      /**
       * 默认 500KB 的告警在这个站点上恒为真且没有行动价值：
       * 唯一超过它的是本地搜索索引（assets/chunks/@localSearchIndexroot.*.js，
       * 1.8MB 未压缩 / 约 550KB gzip），而它是 VPLocalSearchBox 的异步依赖——
       * 只有用户真的点开搜索框才会下载，不参与首屏。
       * 框架与主题 chunk 都在 120KB 上下，阈值放到 2MB 仍拦得住真正的大块回归。
       */
      chunkSizeWarningLimit: 2048,
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
  fs.writeFileSync(path.join(siteConfig.outDir, 'rss.xml'), buildRssXml(), 'utf8')
  console.log(`[rss] 生成 rss.xml`)
  fs.writeFileSync(path.join(siteConfig.outDir, 'llms.txt'), buildLlmsTxt(), 'utf8')
  console.log(`[llms] 生成 llms.txt`)
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
