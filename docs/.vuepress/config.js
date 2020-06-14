module.exports = {
    base: '/swiftdo/',
    title: 'OldBirds',
    description: '专注于编程素质的反思和提升',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
    ],

    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        'vuepress-plugin-auto-sidebar',
    ],

    themeConfig: {
        logo: 'logo.png',
        repo: 'swiftdo/swiftdo',
        editLinks: true,
        smoothScroll: true,
        sidebar: 'auto',
        lastUpdated: '上次更新',
        nav: [{
                text: 'SwiftUI',
                link: '/swiftui/'
            },
            {
                text: 'Flutter',
                link: '/flutter/'
            },
            {
                text: 'Figma',
                link: '/figma/'
            },
            {
                text: '工具',
                link: '/tools/'
            },
            {
                text: '关于',
                link: '/about/'
            }
        ],


    },
}