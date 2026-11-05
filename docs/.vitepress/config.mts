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
 * 作者与站点的实体标识。
 * 各页 JSON-LD 共用同一个 @id，引擎才能把这些页面归并到同一个人、同一个站，
 * 而不是当成几百个互不相干的匿名页面——这是「被引用时能不能署名到人」的前提。
 */
const AUTHOR_ENTITY = {
  '@type': 'Person',
  '@id': `${SITE_HOST}/#person`,
  name: 'OldBird',
  url: `${SITE_HOST}/result/`,
  sameAs: ['https://github.com/oheroj'],
}
const WEBSITE_ENTITY = {
  '@type': 'WebSite',
  '@id': `${SITE_HOST}/#website`,
  name: 'OldBird',
  url: `${SITE_HOST}/`,
}

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
let gitLastmodCache: Map<string, string> | null = null

/** 带缓存的版本：transformPageData 逐页调用，不能每次都跑一遍 git log */
function gitLastmod(): Map<string, string> {
  gitLastmodCache ??= collectGitLastmod()
  return gitLastmodCache
}

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

/** AI 工具箱下按目录分组的显示名，与 sidebar.ts 的 GROUPS 保持一致 */
const TOOLBOX_CATEGORY: Record<string, string> = {
  skill: 'Skills',
  mcp: 'MCP',
  agent: 'Agents',
  cli: 'CLI',
  app: '应用',
}

interface ToolEntry {
  url: string
  rel: string
  title: string
  description: string
  category: string
}

/** 收集 AI 工具箱的收录条目：ai-toolbox/<分类>/<工具>/index.md */
function collectToolEntries(): ToolEntry[] {
  return listMarkdownFiles(DOCS_DIR)
    .map(full => path.relative(DOCS_DIR, full).split(path.sep).join('/'))
    .filter(rel => /^ai-toolbox\/[^/]+\/[^/]+\/index\.md$/.test(rel))
    .map((rel) => {
      const fm = readFrontmatter(path.join(DOCS_DIR, rel))
      const category = rel.split('/')[1]
      return {
        url: mdPathToUrl(rel),
        rel,
        title: fm.title ?? rel,
        description: fm.description ?? '',
        category: TOOLBOX_CATEGORY[category] ?? category,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'zh-CN', { numeric: true }))
}

/** 没有 index.md 的中间层用它兜底，避免面包屑里出现英文 slug */
const SECTION_LABEL: Record<string, string> = {
  article: '博客文章',
}

/**
 * 工具评测页的规格表第一行是「仓库」，取它的链接作为这条评测讲述的软件实体。
 * 引擎靠 about 把「oldbird.run 这篇评测」和 GitHub 上的项目连起来。
 */
function toolRepoOf(rel: string): { name: string, url: string } | undefined {
  try {
    const text = fs.readFileSync(path.join(DOCS_DIR, rel), 'utf8')
    const m = /\|\s*仓库\s*\|\s*\[([^\]]+)\]\(([^)]+)\)/.exec(text)
    return m ? { name: m[1].trim(), url: m[2].trim() } : undefined
  }
  catch {
    return undefined
  }
}

/** 面包屑：路径层级就是站点层级，中间层优先用 index.md 的 title */
function breadcrumbOf(rel: string): Array<Record<string, unknown>> | undefined {
  const segs = rel.replace(/\/index\.md$/, '').split('/').filter(Boolean)
  if (segs.length < 2)
    return undefined
  const items: Array<Record<string, unknown>> = [
    { '@type': 'ListItem', position: 1, name: 'OldBird', item: `${SITE_HOST}/` },
  ]
  let prefix = ''
  segs.forEach((seg, index) => {
    prefix += `${seg}/`
    const indexFile = path.join(DOCS_DIR, prefix, 'index.md')
    const exists = fs.existsSync(indexFile)
    const name = exists
      ? (readFrontmatter(indexFile).title ?? seg)
      : (TOOLBOX_CATEGORY[seg] ?? SECTION_LABEL[seg] ?? seg)
    const isLeaf = index === segs.length - 1
    // 只有真正有页面的层级才给 item：/article/ 与 /ai-toolbox/mcp/ 这类中间目录没有 index.md，
    // 挂上链接就是一条指向 404 的面包屑
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      ...(isLeaf || !exists ? {} : { item: `${SITE_HOST}/${prefix}` }),
    })
  })
  return items
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

  /**
   * 工具评测：按分类分组列出。
   * 这些页面的判断（哪个工具会卡、边界在哪）是 AI 最不可能自己生成的，
   * 所以要在索引里列到文章级，而不是只丢一个 /ai-toolbox/ 的入口。
   */
  const tools = collectToolEntries()
  const toolGroups = new Map<string, ToolEntry[]>()
  for (const tool of tools) {
    const list = toolGroups.get(tool.category) ?? []
    list.push(tool)
    toolGroups.set(tool.category, list)
  }
  // 按 TOOLBOX_CATEGORY 的声明顺序输出分组，与侧边栏一致；未声明的分类排在后面
  const categoryOrder = [
    ...Object.values(TOOLBOX_CATEGORY),
    ...[...toolGroups.keys()].filter(k => !Object.values(TOOLBOX_CATEGORY).includes(k)),
  ]
  const toolLines = categoryOrder
    .filter(category => toolGroups.has(category))
    .map((category) => {
      const list = toolGroups.get(category)!
      return [
        `### ${category}`,
        ...list.map(t => `- [${t.title}](${SITE_HOST}${t.url}): ${t.description}`),
      ].join('\n')
    })
    .join('\n\n')

  return `# OldBird

> OldBird（oldbird.run）是 OldBird 的个人技术博客：Swift、SwiftUI、Flutter、AI、Python、算法与鸿蒙的开发笔记，以及周易学习笔记与个人作品（易起卦等）。内容以中文写成，技术类笔记包含代码示例。

## 板块

${sectionLines.join('\n')}

## AI 工具评测

${toolLines}

## 博客文章

${articleLines.join('\n')}
`
}

/** 把 markdown 压成可读纯文本：去掉 frontmatter、图片、HTML 标签与引用符号，保留标题、正文与代码块 */
function mdToPlainText(rel: string): string {
  const raw = fs.readFileSync(path.join(DOCS_DIR, rel), 'utf8')
  return raw
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/^>\s?/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/**
 * 生成 llms-full.txt：只收有明确判断的页面（工具评测 + 博客文章）。
 * 全站 367 页拼起来是几百 KB，没有引擎会真读；这两类才是值得被引用的内容。
 */
function buildLlmsFullTxt(): string {
  const tools = collectToolEntries()
  const articleRels = listMarkdownFiles(DOCS_DIR)
    .map(full => path.relative(DOCS_DIR, full).split(path.sep).join('/'))
    .filter(rel => rel.startsWith('article/') && rel.endsWith('/index.md'))
    .map((rel) => {
      const fm = readFrontmatter(path.join(DOCS_DIR, rel))
      return { rel, url: mdPathToUrl(rel), title: fm.title ?? rel, description: fm.description ?? '', date: (fm.date || fm.createTime || '').trim() }
    })
    .sort((a, b) => b.date.localeCompare(a.date))

  const block = (title: string, url: string, description: string, body: string) =>
    `## ${title}\n\n${description ? `> ${description}\n\n` : ''}${body}\n\n---\n`

  const toolBlocks = tools
    .map(t => block(t.title, t.url, t.description, mdToPlainText(t.rel)))
    .join('\n')
  const articleBlocks = articleRels
    .map(a => block(a.title, a.url, a.description, mdToPlainText(a.rel)))
    .join('\n')

  return `# OldBird · 全文

> OldBird（oldbird.run）中文技术博客的完整文本，只含工具评测与博客文章两类有明确判断的内容。
> 站点索引见 ${SITE_HOST}/llms.txt，全部页面见 ${SITE_HOST}/sitemap.xml。
> 引用时请保留原文链接；内容以收录当日为准，工具状态可能已经变化。

# 一、AI 工具评测（${tools.length} 篇）

${toolBlocks}
# 二、博客文章（${articleRels.length} 篇）

${articleBlocks}`
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

function toISODate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime()))
    return value.toISOString().slice(0, 10)
  const text = String(value ?? '').trim()
  if (!text)
    return ''
  return /^\d{4}[/-]\d{1,2}[/-]\d{1,2}/.test(text)
    ? text.replace(/\//g, '-').slice(0, 10)
    : text
}

/**
 * 文章头部元信息：build 时插到首个 h1 之后。
 * 用 html_block 而不是前端组件，避免在 .vp-doc 里塞一个需要 hydration 的浮层。
 */
function articleMetaHtml(frontmatter: Record<string, unknown>): string {
  const date = toISODate(frontmatter.date ?? frontmatter.createTime)
  const tags = Array.isArray(frontmatter.tags)
    ? frontmatter.tags.map(String).filter(Boolean)
    : []
  if (!date && tags.length === 0)
    return ''

  const dateHtml = date ? `<time datetime="${date}">${date}</time>` : ''
  const tagsHtml = tags.length
    ? `<ul class="article-meta__tags">${tags.map(tag => `<li>${xmlEscape(tag)}</li>`).join('')}</ul>`
    : ''
  const separator = dateHtml && tagsHtml
    ? '<span class="article-meta__sep" aria-hidden="true">·</span>'
    : ''

  return `<div class="article-meta">${dateHtml}${separator}${tagsHtml}</div>`
}

function articleMetaPlugin(md: any): void {
  md.core.ruler.push('ob_article_meta', (state: any) => {
    const relativePath = state.env?.relativePath
    if (!relativePath || !/^article\/[^/]+\/index\.md$/.test(relativePath))
      return

    const frontmatter = state.env?.frontmatter ?? {}
    const html = articleMetaHtml(frontmatter)
    if (!html)
      return

    const tokens = state.tokens
    const headingOpen = tokens.findIndex(
      (token: any) => token.type === 'heading_open' && token.tag === 'h1',
    )

    // 有 h1 的页面插在标题后；没有 h1 的旧文章补一个可见标题，再插元信息
    let insertAt = 0
    let content = html
    if (headingOpen >= 0) {
      let headingClose = headingOpen + 1
      while (headingClose < tokens.length && tokens[headingClose].type !== 'heading_close')
        headingClose++
      if (headingClose >= tokens.length)
        return
      insertAt = headingClose + 1
    }
    else {
      const title = String(frontmatter.title ?? '').trim()
      if (title)
        content = `<h1 class="article-title">${xmlEscape(title)}</h1>${content}`
    }

    const token = new state.Token('html_block', '', 0)
    token.content = content
    tokens.splice(insertAt, 0, token)
  })
}

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
  markdown: {
    config: articleMetaPlugin,
  },
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

    // 修改时间取 git 提交时间：frontmatter 里没有可靠的手写 dateModified，
    // 而「这份资料多久没更新」是引擎判断能不能引用的主要信号之一
    const modified = gitLastmod().get(`docs/${pageData.relativePath}`)

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
          ...(modified ? { dateModified: modified } : {}),
          author: AUTHOR_ENTITY,
          mainEntityOfPage: url,
          image: `${SITE_HOST}/logo.png`,
        }),
      ])
    }

    const rel = pageData.relativePath
    const isEmptyPlaceholder = fm.sitemap === 'false' || fm.sitemap === false
    const isToolPage = /^ai-toolbox\/[^/]+\/[^/]+\/index\.md$/.test(rel)

    /**
     * 非文章的内容页补一层 TechArticle / Article。
     * 之前只有 /article/ 有 JSON-LD，笔记和工具评测页对引擎来说是没有类型的裸 HTML。
     * 首页与 sitemap:false 的占位页跳过——后者本来就不该被收录。
     */
    if (!isArticle && rel.endsWith('index.md') && rel !== 'index.md' && rel !== 'ai-toolbox/index.md' && !isEmptyPlaceholder) {
      const raw = fm.date || fm.createTime
      const published = raw ? new Date(raw).toISOString() : undefined
      const repo = isToolPage ? toolRepoOf(rel) : undefined
      fm.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': isToolPage ? 'TechArticle' : 'Article',
          headline: pageData.title,
          ...(pageData.description ? { description: pageData.description } : {}),
          ...(published ? { datePublished: published } : {}),
          ...(modified ? { dateModified: modified } : {}),
          inLanguage: 'zh-CN',
          ...(isToolPage ? { articleSection: TOOLBOX_CATEGORY[rel.split('/')[1]] ?? 'AI 工具' } : {}),
          ...(repo
            ? {
                about: {
                  '@type': 'SoftwareSourceCode',
                  name: repo.name,
                  url: repo.url,
                  codeRepository: repo.url,
                },
              }
            : {}),
          author: AUTHOR_ENTITY,
          publisher: {
            '@type': 'Organization',
            name: 'OldBird',
            logo: { '@type': 'ImageObject', url: `${SITE_HOST}/logo.png` },
          },
          isPartOf: WEBSITE_ENTITY,
          mainEntityOfPage: url,
          image: `${SITE_HOST}/logo.png`,
        }),
      ])
    }

    /** AI 工具箱首页：CollectionPage + ItemList，把整份清单一次性交给引擎 */
    if (rel === 'ai-toolbox/index.md') {
      const tools = collectToolEntries()
      fm.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: pageData.title,
          ...(pageData.description ? { description: pageData.description } : {}),
          url,
          inLanguage: 'zh-CN',
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: tools.length,
            itemListElement: tools.map((tool, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: tool.title,
              description: tool.description,
              url: `${SITE_HOST}${tool.url}`,
            })),
          },
        }),
      ])
    }

    /** 面包屑：首页 → 板块 → 分类 → 本页；让引擎看到层级，而不是一堆平铺的 URL */
    const crumbs = breadcrumbOf(rel)
    if (crumbs && !isEmptyPlaceholder) {
      fm.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: crumbs,
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
  fs.writeFileSync(path.join(siteConfig.outDir, 'llms-full.txt'), buildLlmsFullTxt(), 'utf8')
  console.log(`[llms] 生成 llms-full.txt`)
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
      { text: 'AI 工具', link: '/ai-toolbox/' },
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
