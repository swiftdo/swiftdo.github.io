const pluginConf = require("./config/pluginConf.js");
const navConf = require("./config/navConf.js");
const sidebarConf = require("./config/sidebarConf.js");

module.exports = {
  theme: "reco",
  base: "/",
  title: "Swift学习",
  description: "过来人的笔记，带你最佳实践，@OldBirds公众号",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "script",
      {
        "data-ad-client": "ca-pub-4465026491979447",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "6EogPdlAJYusvUHenXWXCGX-oVrqdeBnY-WsURHuKAA",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "oldbirds,oldbird,公众号,swift,swift学习,swiftui,flutter,vapor,ios,figma,数据结构,算法,书单,vuepresss,git,yaml,设计模式,编程",
      },
    ],
  ],
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "nofollow noopener noreferrer",
    },
    plugins: ["task-lists", "markdown-it-plantuml"],
  },
  plugins: pluginConf,
  themeConfig: {
    record: "赣ICP备2021010021号-1",
    recordLink: "https://beian.miit.gov.cn/",
    cyberSecurityRecord: "赣公网安备 36011102000528号",
    cyberSecurityLink:
      "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36011102000528",
    startYear: "2020",
    logo: "/logo.png",
    authorAvatar: "/logo.png",
    repo: "swiftdo/swiftdo.github.io",
    smoothScroll: true,
    lastUpdated: "上次更新",
    nav: navConf,
    author: "oldbirds",
    subSidebar: "auto", // reco
    sidebar: sidebarConf,
    mdEnhance: {
      flowchart: true,
    },
  },
};
