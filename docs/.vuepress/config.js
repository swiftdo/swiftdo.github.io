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
        [
            "script",
            {
                "data-ad-client": "ca-pub-4465026491979447",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            }
        ],
        ['meta', {
            name: 'google-site-verification',
            content: 'YSHTZDsyPVQ3h65Hf_kAkCw3CE6OJxVh3w0h3ymkIGI'
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