import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { buildSidebar } from './sidebar'
import { listMarkdownFiles, readFrontmatter } from './frontmatter'

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
 *
 * 这里补了三道构建期校验，因为 VitePress 自身不会检查：
 *   1. permalink 必须存在——漏写会静默回退成 /notes/xxx/ 这类意外 URL；
 *   2. permalink 必须是首尾带斜杠的合法路径；
 *   3. 两个源文件不能指向同一个输出路径——重写冲突时 VitePress 直接覆盖
 *      后者（rewriteToPage[dest] = page），不报错、不告警。
 */
function buildRewrites(): Record<string, string> {
  const rewrites: Record<string, string> = {}
  const owner = new Map<string, string>()
  const problems: string[] = []

  for (const full of listMarkdownFiles(DOCS_DIR)) {
    const rel = path.relative(DOCS_DIR, full).split(path.sep).join('/')
    // 站点首页：README.md 重写为 index.md，VitePress 才会输出 dist/index.html
    if (rel === 'README.md') {
      rewrites[rel] = 'index.md'
      continue
    }

    const { permalink } = readFrontmatter(full)
    if (!permalink) {
      problems.push(`${rel} 缺少 frontmatter 里的 permalink`)
      continue
    }
    if (!permalink.startsWith('/') || !permalink.endsWith('/') || permalink.length < 2) {
      problems.push(`${rel} 的 permalink「${permalink}」必须以 / 开头并以 / 结尾`)
      continue
    }
    if (/[A-Z\s]/.test(permalink) || /[^\x00-\x7F]/.test(permalink)) {
      problems.push(`${rel} 的 permalink「${permalink}」含大写字母、空格或非 ASCII 字符`)
      continue
    }

    const dest = `${permalink.replace(/^\/+|\/+$/g, '')}/index.md`
    const prev = owner.get(dest)
    if (prev) {
      problems.push(`permalink 冲突：${prev} 与 ${rel} 都指向 ${dest}`)
      continue
    }
    owner.set(dest, rel)
    rewrites[rel] = dest
  }

  if (problems.length) {
    throw new Error(`[rewrites] 构建中止，共 ${problems.length} 处问题：\n  - ${problems.join('\n  - ')}`)
  }

  return rewrites
}

/** 收集标注了 sitemap: false 的页面路径，用于从站点地图中排除 */
function collectSitemapExcluded(): Set<string> {
  const excluded = new Set<string>()
  for (const full of listMarkdownFiles(DOCS_DIR)) {
    const { permalink, sitemap } = readFrontmatter(full)
    if (sitemap !== 'false' || !permalink)
      continue
    excluded.add(permalink.replace(/\/+$/, '') + '/')
  }
  return excluded
}

/**
 * VitePress 客户端路由（client/shared.ts 的 treatAsHtml）会把「扩展名不在静态
 * 资源白名单里」的站内链接一律当成本站页面，去加载同名 md 模块；找不到就回退到
 * 404 组件。白名单收录了 png/jpg/svg/webp/css/js/json/pdf/txt/mp4/zip 等一百多个
 * 常见扩展名，但不含 html、apk、ipa、docx、md 等。
 */
const STATIC_ASSET_EXTENSIONS = new Set(
  ('3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,'
    + 'doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,'
    + 'man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,'
    + 'opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,'
    + 'tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,'
    + 'yaml,yml,zip').split(','),
)

/**
 * 收集 public/ 下会被客户端路由误判成"站内页面"的文件（推广页、隐私政策页、
 * 应用安装包直链等）。这些文件由 Vite 原样复制到站点根，不参与 markdown 编译，
 * 没有对应的 md 模块。清单交给客户端后，这些路径改走整页跳转，由浏览器直接加载。
 */
function collectStaticPages(): string[] {
  const pages: string[] = []
  const walk = (dir: string, prefix: string) => {
    if (!fs.existsSync(dir))
      return
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.'))
        continue
      const rel = `${prefix}/${entry.name}`
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), rel)
        continue
      }
      const ext = entry.name.split('.').pop()!.toLowerCase()
      if (!STATIC_ASSET_EXTENSIONS.has(ext))
        pages.push(rel)
    }
  }
  walk(path.join(DOCS_DIR, 'public'), '')
  return pages.sort()
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
    // 静态文件清单：客户端路由据此把这些路径改走整页跳转
    staticPages: collectStaticPages(),
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
