/**
 * 集合配置：post = 博客，doc = 笔记专题
 * @see https://theme-plume.vuejs.press/guide/collection/
 */

import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const blog = defineCollection({
  type: 'post',
  dir: 'blog',
  title: '博客',
  link: '/blog/',
  linkPrefix: '/article/',
  tagsLink: '/blog/tags/',
  archivesLink: '/blog/archives/',
  categoriesLink: '/blog/categories/',
})

const swift = defineCollection({
  type: 'doc',
  dir: 'notes/swift',
  title: 'Swift',
  linkPrefix: '/swift/',
  sidebar: 'auto',
})

const flutter = defineCollection({
  type: 'doc',
  dir: 'notes/flutter',
  title: 'Flutter',
  linkPrefix: '/flutter/',
  sidebar: 'auto',
})

const ai = defineCollection({
  type: 'doc',
  dir: 'notes/ai',
  title: 'AI',
  linkPrefix: '/ai/',
  sidebar: 'auto',
})

const python = defineCollection({
  type: 'doc',
  dir: 'notes/python',
  title: 'Python',
  linkPrefix: '/python/',
  sidebar: 'auto',
})

const tools = defineCollection({
  type: 'doc',
  dir: 'notes/tools',
  title: '工具',
  linkPrefix: '/tools/',
  sidebar: 'auto',
})

const algorithms = defineCollection({
  type: 'doc',
  dir: 'notes/algorithms',
  title: '算法',
  linkPrefix: '/algorithms/',
  sidebar: 'auto',
})

const designPatterns = defineCollection({
  type: 'doc',
  dir: 'notes/design-patterns',
  title: '设计模式',
  linkPrefix: '/design-patterns/',
  sidebar: 'auto',
})

const haskell = defineCollection({
  type: 'doc',
  dir: 'notes/haskell',
  title: 'Haskell',
  linkPrefix: '/haskell/',
  sidebar: 'auto',
})

const harmony = defineCollection({
  type: 'doc',
  dir: 'notes/harmony',
  title: '鸿蒙',
  linkPrefix: '/harmony/',
  sidebar: 'auto',
})

const ops = defineCollection({
  type: 'doc',
  dir: 'notes/ops',
  title: '运维',
  linkPrefix: '/ops/',
  sidebar: 'auto',
})

const java = defineCollection({
  type: 'doc',
  dir: 'notes/java',
  title: 'Java',
  linkPrefix: '/java/',
  sidebar: 'auto',
})

const vue = defineCollection({
  type: 'doc',
  dir: 'notes/vue',
  title: 'Vue',
  linkPrefix: '/vue/',
  sidebar: 'auto',
})

const yijing = defineCollection({
  type: 'doc',
  dir: 'notes/yijing',
  title: '易经',
  linkPrefix: '/yijing/',
  sidebar: 'auto',
})

export default defineCollections([
  blog,
  swift,
  flutter,
  ai,
  python,
  tools,
  algorithms,
  designPatterns,
  haskell,
  harmony,
  ops,
  java,
  vue,
  yijing,
])
