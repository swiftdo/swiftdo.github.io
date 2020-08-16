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
    'sitemap': {
        hostname: 'https://oldbird.run'
    },
    'image': true,
    '@vuepress-yard/vuepress-plugin-window': {
        title: "OldBirds",
        contentInfo: {
            title: "更多高质内容，请关注官方公众号",
            needImg: true,
            imgUrl: "/wechat_cobe.jpg",
            content: "",
            contentStyle: ""
        },
        bottomInfo: {
            btnText: '关于',
            linkTo: '/about/index/'
        },
        closeOnce: true,
    },
    "vuepress-plugin-nuggets-style-copy": {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    },
}