import fs from 'node:fs'
import path from 'node:path'
import { readFrontmatter } from './frontmatter'

export interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
}

/**
 * 笔记集合：目录名即 URL 前缀。
 *
 * 迁移后 URL 由文件路径决定（`swift/swiftui/alert/index.md` -> `/swift/swiftui/alert/`），
 * 所以这里只做一件事：把目录树翻译成侧边栏，不再读 permalink。
 */
export const COLLECTIONS = [
  'swift',
  'flutter',
  'ai',
  'python',
  'tools',
  'algorithms',
  'design-patterns',
  'haskell',
  'harmony',
  'ops',
  'java',
  'vue',
  'yijing',
  'acupuncture',
]

/**
 * 纯分组目录（没有 index.md，只是把几篇笔记收在一起）的显示名与顺序。
 *
 * 旧站靠目录名的数字前缀（`2.基础`）排序，迁移后目录名即 URL 段，前缀必须去掉，
 * 于是顺序信息也一起没了。这里显式声明，避免变成拼音序或字母序。
 */
const GROUPS: Array<{ dir: string, label: string }> = [
  { dir: 'design-patterns/principles', label: '设计原则' },
  { dir: 'design-patterns/basics', label: '基础' },
  { dir: 'design-patterns/creational', label: '创建型' },
  { dir: 'design-patterns/structural', label: '结构型' },
  { dir: 'design-patterns/behavioral', label: '行为型' },
  { dir: 'ai/gemini-cli', label: 'Gemini CLI' },
]

const GROUP_LABEL = new Map(GROUPS.map(g => [g.dir, g.label]))
const GROUP_ORDER = new Map(GROUPS.map((g, i) => [g.dir, i]))

/** 自然排序：2 排在 10 前面 */
const naturalCompare = (a: string, b: string) =>
  a.localeCompare(b, 'zh-CN', { numeric: true, sensitivity: 'base' })

function readTitle(indexFile: string): string {
  return readFrontmatter(indexFile).title ?? path.basename(path.dirname(indexFile))
}

function buildItems(dir: string, urlPath: string, relDir: string): SidebarItem[] {
  const pages: SidebarItem[] = []
  const groups: Array<{ rel: string, item: SidebarItem }> = []

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.'))
      continue

    const full = path.join(dir, entry.name)
    const childUrl = `${urlPath}${entry.name}/`
    const childRel = relDir ? `${relDir}/${entry.name}` : entry.name
    const indexFile = path.join(full, 'index.md')
    const hasIndex = fs.existsSync(indexFile)
    const children = buildItems(full, childUrl, childRel)

    if (!hasIndex && !children.length)
      continue

    if (hasIndex) {
      pages.push({
        text: readTitle(indexFile),
        link: childUrl,
        ...(children.length ? { items: children } : {}),
      })
      continue
    }

    groups.push({
      rel: childRel,
      item: { text: GROUP_LABEL.get(childRel) ?? entry.name, items: children },
    })
  }

  pages.sort((a, b) => naturalCompare(a.text, b.text))
  groups.sort((a, b) => {
    const ai = GROUP_ORDER.get(a.rel)
    const bi = GROUP_ORDER.get(b.rel)
    if (ai !== undefined && bi !== undefined)
      return ai - bi
    if (ai !== undefined)
      return -1
    if (bi !== undefined)
      return 1
    return naturalCompare(a.item.text, b.item.text)
  })

  return [...pages, ...groups.map(g => g.item)]
}

/** 生成以 URL 前缀为键的侧边栏配置 */
export function buildSidebar(docsDir: string): Record<string, SidebarItem[]> {
  const sidebar: Record<string, SidebarItem[]> = {}

  for (const name of COLLECTIONS) {
    const full = path.join(docsDir, name)
    if (!fs.existsSync(full))
      continue
    sidebar[`/${name}/`] = buildItems(full, `/${name}/`, name)
  }

  return sidebar
}
