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
    ],

    themeConfig: {
        logo: 'logo.png',
        repo: 'swiftdo/swiftdo',
        editLinks: true,
        smoothScroll: true,
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

        sidebarDepath: 2,
        sidebar: {
            '/swift/': getSwiftSidebar(),
            '/flutter/': getFlutterSidebar(),
            '/figma/': getFigmaSidebar(),
            '/tools/': getToolsSidebar(),
        }
    },
}

function getSwiftSidebar() {
    return [
        '',
        'swift',
        'swiftui'
    ]
}

function getFlutterSidebar() {
    return [
        '',
        'flutter'
    ]
}

function getFigmaSidebar() {
    return [
        '',
        'dart',
        'figma'
    ]
}

function getToolsSidebar() {
    return [
        '',
        'tools'
    ]
}