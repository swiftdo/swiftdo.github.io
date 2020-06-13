module.exports = {
    base: '/swiftdo/',
    title: 'Oldbirds',
    description: 'Swift learning',
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
                text: 'Swift',
                link: '/swift/'
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
                link: '/about.html'
            }
        ],


    },
}

function getSwiftSidebar() {
    return [
        '',
        'swiftui'
    ]
}

function getFlutterSidebar() {
    return [
        '',
    ]
}

function getFigmaSidebar() {
    return [
        '',
    ]
}

function getToolsSidebar() {
    return [
        '',
        'VuePress',
    ]
}