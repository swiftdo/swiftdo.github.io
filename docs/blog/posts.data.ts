import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  description: string
  date: string
}

declare const data: Post[]
export { data }

/**
 * 博客文章都在 article/<slug>/index.md，URL 就是 `/article/<slug>/`。
 * 目录层级本身就是 URL，所以直接用 loader 给出的 url，不再读 permalink。
 */
/**
 * frontmatter 里写 `date: 2025-08-13` 会被 YAML 解析成 Date 对象，
 * 直接 String() 得到的是 "Wed Aug 13 2025 ..."，截前 10 位就成了英文星期，
 * 列表上会显示成 "Wed Aug 13"。这里统一归一化成 YYYY-MM-DD。
 */
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

export default createContentLoader('article/*/index.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title ?? '未命名',
        url,
        description: frontmatter.description ?? '',
        date: toISODate(frontmatter.date ?? frontmatter.createTime),
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  },
})
