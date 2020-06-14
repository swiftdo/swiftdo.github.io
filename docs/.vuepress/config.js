const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');

module.exports = {
    base: '/',
    title: 'OldBirds',
    description: '过来人的笔记，带你最佳实践，@OldBirds公众号',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
    ],
    plugins: pluginConf,
    themeConfig: {
        logo: 'logo.png',
        repo: 'swiftdo/swiftdo.github.io',
        smoothScroll: true,
        lastUpdated: '上次更新',
        nav: navConf,
    },
}