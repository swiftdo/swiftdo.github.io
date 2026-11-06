import { createContentLoader } from 'vitepress'
import { displayDate, sortKey } from '../.vitepress/post-date'

export interface Post {
  title: string
  url: string
  description: string
  date: string
  tags: string[]
}

declare const data: Post[]
export { data }

/**
 * 博客文章都在 article/<slug>/index.md，URL 就是 `/article/<slug>/`。
 * 目录层级本身就是 URL，所以直接用 loader 给出的 url，不再读 permalink。
 *
 * 日期与排序分开（见 `../.vitepress/post-date`）：`date` 只到天，用来显示；
 * 排序用 `createTime` 的完整时刻 —— 否则同一天发的几篇并列，顺序退化成文件发现顺序。
 */
export default createContentLoader('article/*/index.md', {
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => {
        const fm = frontmatter as Record<string, unknown>
        return {
          title: frontmatter.title ?? '未命名',
          url,
          description: frontmatter.description ?? '',
          date: displayDate(fm),
          tags: Array.isArray(frontmatter.tags)
            ? frontmatter.tags.map(String).map(tag => tag.trim()).filter(Boolean)
            : [],
          sort: sortKey(fm),
        }
      })
      .sort((a, b) => b.sort.localeCompare(a.sort))
      .map(({ sort, ...post }) => post)
  },
})
