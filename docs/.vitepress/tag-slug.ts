/**
 * 标签锚点：文章页的 tag 链接和 /tag/ 页面的 section id 必须用同一套规则，
 * 否则点过去只到页顶、不定位。放在这里让 config.mts（构建期）和标签页组件共用。
 *
 * - 大小写不敏感：`OpenAI` 与 `openai` 归并到同一个锚点；
 * - 中文原样保留（HTML5 id 允许 Unicode），空格转连字符，其余符号去掉；
 * - href 里的 hash 仍要 encodeURIComponent，见 config.mts。
 */
export function tagSlug(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
}
