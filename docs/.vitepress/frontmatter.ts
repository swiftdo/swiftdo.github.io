import fs from 'node:fs'

export interface Frontmatter {
  title?: string
  permalink?: string
  sitemap?: string
  [key: string]: string | undefined
}

/**
 * 只解析文件开头的 frontmatter 块（第一对 `---` 之间）。
 *
 * 不用 /m 的全文正则，是因为那样会把正文里行首出现的 `permalink:`
 * 当成元数据——教程里贴一段 YAML 示例就会污染 URL。
 */
export function readFrontmatter(file: string): Frontmatter {
  const raw = fs.readFileSync(file, 'utf8')
  const block = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!block)
    return {}

  const lines = block[1].split(/\r?\n/)
  const data: Frontmatter = {}

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const m = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/)
    if (!m)
      continue

    let value = m[2].trim()

    // YAML 块标量：`title: >-` 的值在后续缩进行里，
    // 直接取 `>-` 会让侧边栏标题变成 " >- " 这种符号串。
    if (/^[>|][-+0-9]*$/.test(value)) {
      const baseIndent = line.length - line.trimStart().length
      const parts: string[] = []
      let last = i
      for (let j = i + 1; j < lines.length; j++) {
        const l = lines[j]
        if (!l.trim()) {
          parts.push('')
          continue
        }
        if (l.length - l.trimStart().length <= baseIndent)
          break
        parts.push(l.trim())
        last = j
      }
      i = last
      const joiner = value.startsWith('|') ? '\n' : ' '
      value = parts.join(joiner).replace(/[ \t]+/g, ' ').trim()
    }

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\'')))
      value = value.slice(1, -1)
    data[m[1]] = value
  }

  return data
}

/** 递归列出 docs 下所有 markdown 文件（相对路径用 / 分隔） */
export function listMarkdownFiles(docsDir: string): string[] {
  const files: string[] = []
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules')
        continue
      const full = `${dir}/${entry.name}`
      if (entry.isDirectory()) {
        walk(full)
        continue
      }
      if (entry.name.endsWith('.md'))
        files.push(full)
    }
  }
  walk(docsDir)
  return files
}
