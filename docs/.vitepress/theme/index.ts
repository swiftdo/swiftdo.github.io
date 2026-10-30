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

  enhanceApp({ app, router, siteData }) {
    app.component('HomeShowcase', HomeShowcase)
    app.component('Portfolio', Portfolio)
    app.component('YiqiguaPromo', YiqiguaPromo)

    /**
     * public/ 下的推广页、隐私政策页、安装包直链是原样复制的静态文件，不是
     * VitePress 页面。VitePress 的客户端路由会把站内所有这类链接都当成本站页面，
     * 去加载对应的 md 模块；找不到就回退到 404 组件（"页面不存在"）。命中这份
     * 清单的路径改走整页跳转，交给浏览器直接加载静态文件。
     */
    const staticPages = new Set<string>(siteData.value.themeConfig.staticPages ?? [])
    router.onBeforeRouteChange = (href) => {
      if (typeof window === 'undefined')
        return
      const { pathname } = new URL(href, window.location.origin)
      if (!staticPages.has(pathname))
        return
      window.location.href = href
      return false
    }

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
