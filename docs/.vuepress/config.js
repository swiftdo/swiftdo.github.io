const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');

module.exports = {
    theme: 'reco',
    base: '/',
    title: 'OldBirds',
    description: '过来人的笔记，带你最佳实践，@OldBirds公众号',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['script', {
            "data-ad-client": "ca-pub-4465026491979447",
            async: true,
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        }],
        ['meta', {
            name: 'google-site-verification',
            content: '6EogPdlAJYusvUHenXWXCGX-oVrqdeBnY-WsURHuKAA'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ['meta', {
            name: 'keywords',
            content: 'oldbirds,oldbird,公众号,swift,swiftui,flutter,vapor,ios,figma,数据结构,算法,书单,vuepresss,git,yaml,设计模式,编程'
        }]
    ],
    markdown: {
        plugins: ['task-lists','markdown-it-plantuml' ],
    },
    
    
    plugins: pluginConf,
    themeConfig: {
        record: '粤ICP备18007810号-1',
        recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
        startYear: '2020',
        logo: '/logo.png',
        authorAvatar: '/logo.png',
        repo: 'swiftdo/swiftdo.github.io',
        smoothScroll: true,
        lastUpdated: '上次更新',
        nav: navConf,
        author: 'oldbirds',
        subSidebar: 'auto',
        vssueConfig: {
            platform: 'github-v4',
            owner: 'swiftdo',
            repo: 'swiftdo.github.io',
            clientId: 'c91ff3d0b5753a4788de',
            clientSecret: 'ad67e4630d3bf3709badbfcfe6c5dfdc21d4c04a'
        }
    },
}