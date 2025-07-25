import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // built-in components
    // app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // your custom components
    // app.component('CustomComponent', CustomComponent)

    // 防止重复加载
    if (typeof window === 'undefined' || (window as any).__adsense_injected) return
    ;(window as any).__adsense_injected = true
    const s = document.createElement('script')
    s.async = true
    s.crossOrigin = 'anonymous'
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4465026491979447'
    document.head.appendChild(s)


  },
})
