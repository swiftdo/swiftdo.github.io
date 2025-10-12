/**
 * @see https://theme-plume.vuejs.press/guide/document/ 查看文档了解配置详情。
 *
 * Notes 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Notes，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Notes，然后在与 Note 相关的 Markdown 文件中，自动生成 permalink。
 *
 * 如果你发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 note 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `note.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 *
 * 通过 `defineNoteConfig` 定义的 note 配置，应该填入 `defineNotesConfig` 的 notes 数组中
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const vueNote = defineNoteConfig({
  dir: 'vue',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/vue',
  // 手动配置侧边栏结构
  // sidebar: [''],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const swiftNote = defineNoteConfig({
  dir: 'swift',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/swift',
  // 手动配置侧边栏结构
  // sidebar: [''],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const aiNote = defineNoteConfig({
  dir: 'ai',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/ai',
  // 手动配置侧边栏结构
  // sidebar: [''],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const flutterNote = defineNoteConfig({
  dir: 'flutter',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/flutter',
  // 手动配置侧边栏结构
  sidebar: ["",
    "point",
    "t1-tips",
    "t2-what",
    "t3-messages",
    "t3-mixin",
    "t4-lifecycle",
    "t5-flutter-web-deploy",
    "t6-docker-web-deploy",
    "t7-fvm",
    "t8-const",
    "t9-logs",
    "u10-fvm-flutter2",
    "u11-flutter-render",
    "u12-flutter-create-w",
    "u12-flutter-web-01",
    "u12-flutter-web-02",
    "u13-sliverappbar",
    "u14-navbar-color",
    "u15-custom-nabar",
    "u16-shape",
    "y1-statubar",
    "github-actions-build-flutter-ios",
    "github-actions-build-flutter-android",
    "flutter-color",
    "flutter-dialog",
    "flutter-deps",
    "flutter-screenshoot1",
    "flutter-screenshoot2",
    "flutter-screenshoot3",
    "flutter-repaintBoundary",
    "flutter-isolate",
    "flutter-vscode-config",
    "flutter-web-launch-page",
  ],
})

const pyNote = defineNoteConfig({
  dir: 'python',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/python',
  // 手动配置侧边栏结构
  // sidebar: [''],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const algorithmsNote = defineNoteConfig({
  dir: 'algorithms',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/algorithms',
  // 手动配置侧边栏结构
  sidebar: [
    "",
    "t1-buble-sort",
    "t2-selection-sort",
    "t3-insertion-sort",
    "t4-shell-sort",
    "t5-quick-sort",
    "t6-heap-sort",
    "t7-merge-sort",
    "t8-radix-sort",
    "t9-count-sort",
    "u1-bucket-sort",
  ],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
})

const desiginPattensNote = defineNoteConfig({
  dir: 'design-patterns',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/design-patterns',
  // 手动配置侧边栏结构
  // sidebar: [''],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const yijingNote = defineNoteConfig({
  dir: 'yijing',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `link` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `link` 开头
  link: '/yijing',
  // 手动配置侧边栏结构
  // sidebar: [''],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})



/**
 * 导出所有的 note
 * 每一个 note 都应该填入到 `notes.notes` 数组中
 * （DemoNote 为参考示例，如果不需要它，请删除）
 */
export default defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [flutterNote, swiftNote, pyNote, aiNote, vueNote, desiginPattensNote, algorithmsNote, yijingNote],
})
