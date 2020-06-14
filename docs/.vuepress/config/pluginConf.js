module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/active-header-links': true,
    '@vuepress/nprogress': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    '@vuepress/google-analytics': {
        'ga': 'UA-141621537-2'
    },
    'vuepress-plugin-auto-sidebar': {
        titleMode: "uppercase",
    },
    'vuepress-plugin-google-adsense': {
        ad_client: 'ca-pub-4465026491979447'
    },


}