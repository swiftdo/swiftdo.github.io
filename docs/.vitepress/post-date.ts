/**
 * 文章时间：**显示用日期** 与 **排序用时间戳** 是两件事。
 *
 * `date` 只有日期（`2026-11-05`）。同一天发多篇时，按 `date` 倒序会全部并列，
 * 并列就退化成文件发现顺序 —— 站上表现为「顺序不对，不是按时间排的么」。
 * 真正的时刻在 `createTime`（`2026/11/05 22:43:36`）里，所以：
 *
 * - 列表上仍然显示 `date`（不该出现时分秒）
 * - 排序用 `createTime` 归一化后的完整时间戳；没有它才退回 `date`（补 00:00:00）
 *
 * 两处渲染（`blog/posts.data.ts` 与 `config.mts` 里的索引 / RSS）共用这一份，
 * 否则「站上顺序」和「llms.txt 里的顺序」会各说各的。
 */

/** YAML 里的 `date: 2026-11-05` 会被解析成 Date；字符串两种写法都要认。 */
function toStamp(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const iso = value.toISOString()
    // 纯日期在 YAML 里是 UTC 零点，不能把 00:00:00 当成真实时刻
    return iso.slice(11, 19) === '00:00:00' ? iso.slice(0, 10) : `${iso.slice(0, 10)} ${iso.slice(11, 19)}`
  }
  const text = String(value ?? '').trim()
  if (!text)
    return ''
  const matched = text.replace(/\//g, '-').match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/)
  if (!matched)
    return text
  const [, year, month, day, hour = '0', minute = '0', second = '0'] = matched
  const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  return `${date} ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`
}

/**
 * 排序键：定长 `YYYY-MM-DD HH:mm:ss`，可直接做字符串比较（倒序 = 新的在前）。
 * 没有时间的补 `00:00:00`，避免「带时间的」在同一天里永远排到「只有日期的」后面。
 */
export function sortKey(frontmatter: Record<string, unknown>): string {
  const created = toStamp(frontmatter.createTime)
  if (created.length === 19)
    return created
  const dated = toStamp(frontmatter.date)
  return dated.length === 19 ? dated : `${dated.slice(0, 10) || '0000-00-00'} 00:00:00`
}

/** 显示用日期：只取日期部分。 */
export function displayDate(frontmatter: Record<string, unknown>): string {
  const created = toStamp(frontmatter.createTime)
  const source = created.length === 19 ? created : toStamp(frontmatter.date)
  return source.slice(0, 10)
}
