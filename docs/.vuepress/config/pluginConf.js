module.exports = {
  flowchart: true,
  "@vuepress/back-to-top": true,
  "@vuepress/active-header-links": true,
  "@vuepress/nprogress": true,
  "@vuepress/medium-zoom": true,
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新",
    },
  },
  "@vuepress/google-analytics": {
    ga: "UA-141621537-2",
  },
  sitemap: {
    hostname: "https://oldbird.run",
  },
  "img-lazy": {},
  "@vuepress-yard/vuepress-plugin-window": {
    title: "OldBirds",
    contentInfo: {
      title: "更多高质内容，请关注官方公众号",
      needImg: true,
      imgUrl: "/wechat_cobe.jpg",
      content: "",
      contentStyle: "",
    },
    bottomInfo: {
      btnText: "关于",
      linkTo: "/about/index/",
    },
    closeOnce: true,
    hideRouteList: [
      "swift",
      "flutter",
      "python",
      "c",
      "haskell",
      "basis",
      "tools",
      "read",
    ],
  },
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: {
      content: "复制成功!",
    },
  },
  "vuepress-plugin-baidu-autopush": {},
  autometa: {},
  "social-share": {}
};
