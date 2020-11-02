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
    '@vssue/vuepress-plugin-vssue': {
        platform: 'github-v4', //v3的platform是github，v4的是github-v4
        locale: 'zh', //语言
        // 其他的 Vssue 配置
        owner: 'oheroj', //github账户名
        repo: 'swiftdo', //github一个项目的名称
        clientId: 'e43a2d1d85c12901c127',//注册的Client ID
        clientSecret: 'aa769adc5d844cb5cfb88eb3aa0ca46fc070ee34',//注册的Client Secret
        autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    '@vuepress/google-analytics': {
        'ga': 'UA-141621537-2'
    },
    'vuepress-plugin-auto-sidebar': {
        titleMode: "uppercase",
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
    'vuepress-plugin-baidu-autopush': {},
    'robots': {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */   
        host: "https://oldbird.run",
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,      
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */ 
        sitemap: "/sitemap.xml",
    }
}