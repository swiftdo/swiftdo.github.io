import { defineClientConfig } from 'vuepress/client'
import { h } from 'vue'
import HomeShowcase from './components/HomeShowcase.vue'
import Portfolio from './components/Portfolio.vue'
import YiqiguaDocAddon from './components/YiqiguaDocAddon.vue'
import YiqiguaPromo from './components/YiqiguaPromo.vue'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeShowcase', HomeShowcase)
    app.component('Portfolio', Portfolio)
    app.component('YiqiguaPromo', YiqiguaPromo)

    // 防止重复加载
    if (typeof window === 'undefined' || (window as any).__adsense_injected) return
    ;(window as any).__adsense_injected = true
    const s = document.createElement('script')
    s.async = true
    s.crossOrigin = 'anonymous'
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4465026491979447'
    document.head.appendChild(s)
  },

  rootComponents: [() => h(YiqiguaDocAddon)],
})
