import fs from 'node:fs'
import path from 'node:path'
import { readFrontmatter } from './frontmatter'

export interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

/** 笔记集合：目录名即 URL 前缀，与旧站 permalink 保持一致 */
export const COLLECTIONS: Array<{ dir: string; label: string }> = [
  { dir: 'swift', label: 'Swift' },
  { dir: 'flutter', label: 'Flutter' },
  { dir: 'ai', label: 'AI' },
  { dir: 'python', label: 'Python' },
  { dir: 'tools', label: '工具' },
  { dir: 'algorithms', label: '算法' },
  { dir: 'design-patterns', label: '设计模式' },
  { dir: 'haskell', label: 'Haskell' },
  { dir: 'harmony', label: '鸿蒙' },
  { dir: 'ops', label: '运维' },
  { dir: 'java', label: 'Java' },
  { dir: 'vue', label: 'Vue' },
  { dir: 'yijing', label: '易经' },
  { dir: 'acupuncture', label: '针灸' },
]

interface Meta {
  title: string
  permalink: string
}

function readMeta(file: string): Meta {
  const { title, permalink } = readFrontmatter(file)
  return {
    title: title ?? path.basename(file, '.md'),
    permalink: permalink ?? '',
  }
}

/** 自然排序：t2 排在 t10 前面 */
const naturalCompare = (a: string, b: string) =>
  a.localeCompare(b, 'zh-CN', { numeric: true, sensitivity: 'base' })

function buildItems(dir: string): SidebarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const dirs: SidebarItem[] = []
  const files: SidebarItem[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('.'))
      continue
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const children = buildItems(full)
      if (!children.length)
        continue
      // 该目录若有 README，用它作为分组标题，并从子项中移除
      const readme = path.join(full, 'README.md')
      const hasReadme = fs.existsSync(readme)
      const label = hasReadme ? readMeta(readme).title : entry.name
      const link = hasReadme && readMeta(readme).permalink
        ? readMeta(readme).permalink
        : undefined
      dirs.push({ text: label, link, collapsed: false, items: children })
      continue
    }

    if (!entry.name.endsWith('.md'))
      continue
    // 集合首页（README）由导航栏指向，不重复出现在侧边栏
    if (entry.name === 'README.md')
      continue

    const meta = readMeta(full)
    files.push({ text: meta.title, link: meta.permalink })
  }

  dirs.sort((a, b) => naturalCompare(a.text, b.text))
  files.sort((a, b) => naturalCompare(a.text, b.text))
  return [...files, ...dirs]
}

/** 生成以 URL 前缀为键的侧边栏配置 */
export function buildSidebar(docsDir: string): Record<string, SidebarItem[]> {
  const sidebar: Record<string, SidebarItem[]> = {}

  for (const { dir } of COLLECTIONS) {
    const full = path.join(docsDir, 'notes', dir)
    if (!fs.existsSync(full))
      continue
    sidebar[`/${dir}/`] = buildItems(full)
  }

  return sidebar
}
