import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  description: string
  date: string
}

declare const data: Post[]
export { data }

export default createContentLoader('blog/*.md', {
  transform(raw): Post[] {
    return raw
      .filter(({ url }) => !url.endsWith('/blog/'))
      .map(({ frontmatter }) => ({
        title: frontmatter.title ?? '未命名',
        // 博客文章的实际 URL 由 frontmatter.permalink 决定（/article/xxx/）
        url: frontmatter.permalink ?? '/blog/',
        description: frontmatter.description ?? '',
        date: String(frontmatter.date ?? frontmatter.createTime ?? ''),
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  },
})
