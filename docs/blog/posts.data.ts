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
export default createContentLoader('article/*/index.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title ?? '未命名',
        url,
        description: frontmatter.description ?? '',
        date: String(frontmatter.date ?? frontmatter.createTime ?? ''),
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  },
})
