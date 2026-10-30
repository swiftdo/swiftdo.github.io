import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
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

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
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
