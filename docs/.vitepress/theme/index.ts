import { defineComponent, h, nextTick, onMounted, onUnmounted, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ArticleMore from './components/ArticleMore.vue'
import HomeShowcase from './components/HomeShowcase.vue'
import Portfolio from './components/Portfolio.vue'
import YiqiguaDocAddon from './components/YiqiguaDocAddon.vue'
import YiqiguaPromo from './components/YiqiguaPromo.vue'
import './custom.css'

declare global {
  interface Window {
    __adsense_injected?: boolean
  }
}

/** 顶部导航补 aria-current：VitePress 只给活动项加颜色类，没有可访问状态 */
const NavA11y = defineComponent({
  name: 'NavA11y',
  setup() {
    const route = useRoute()
    let observer: MutationObserver | undefined

    const sync = () => {
      nextTick(() => {
        if (typeof document === 'undefined')
          return
        const current = route.path.replace(/\/+$/, '') || '/'
        document
          .querySelectorAll<HTMLAnchorElement>(
            '.VPNavBarMenuLink, .VPNavScreenMenuLink, .VPNavScreenMenuGroupLink',
          )
          .forEach((link) => {
            const href = (link.getAttribute('href') || '').split('#')[0]
            const target = href.replace(/\/+$/, '') || '/'
            if (target === current)
              link.setAttribute('aria-current', 'page')
            else
              link.removeAttribute('aria-current')
          })
      })
    }

    onMounted(() => {
      sync()
      const nav = document.querySelector('.VPNav')
      if (!nav)
        return
      observer = new MutationObserver(sync)
      observer.observe(nav, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class'],
      })
    })
    onUnmounted(() => observer?.disconnect())
    watch(() => route.path, sync)
    return () => null
  },
})

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(NavA11y),
      'doc-after': () => h(ArticleMore),
      // 易经相关页面底部追加的练习入口，原站通过 rootComponents 全站挂载
      'layout-bottom': () => h(YiqiguaDocAddon),
    })
  },

  enhanceApp({ app }) {
    app.component('HomeShowcase', HomeShowcase)
    app.component('Portfolio', Portfolio)
    app.component('YiqiguaPromo', YiqiguaPromo)

    if (typeof window === 'undefined' || window.__adsense_injected)
      return
    window.__adsense_injected = true
    const script = document.createElement('script')
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4465026491979447'
    document.head.appendChild(script)
  },
} satisfies Theme
