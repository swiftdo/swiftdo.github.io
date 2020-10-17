/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0e05bca96590ebf07ead1bb555ae66c4"
  },
  {
    "url": "about/app/index.html",
    "revision": "9bdf9c74b061d19fa0cc54ef920bc0aa"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2b3b64644e1fe224442a7bba970babbf"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "09813e77644a9db9f3b72167b1094bb1"
  },
  {
    "url": "about/index/index.html",
    "revision": "0bbb153d8fd5d2a5cb96ff9172c6f1df"
  },
  {
    "url": "assets/css/0.styles.a3a52609.css",
    "revision": "8d353d26cdda7095a8f4bed77dc7ac82"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.88afa5ab.js",
    "revision": "d25c35a529e824a10392e774e3912169"
  },
  {
    "url": "assets/js/10.11797137.js",
    "revision": "bd7fc62b5926950d899372ea2c8843ad"
  },
  {
    "url": "assets/js/11.32f28b2f.js",
    "revision": "cada028dddf3f9175af6ef858c0553e8"
  },
  {
    "url": "assets/js/12.7683926b.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.33557c32.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.5f5de77b.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.e4439e6d.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
  },
  {
    "url": "assets/js/16.79038250.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.1ff84154.js",
    "revision": "4d2755e8df32dd36e81b445727b7812d"
  },
  {
    "url": "assets/js/18.26371ecb.js",
    "revision": "fbf0fff568b930c7f817f02288467bbd"
  },
  {
    "url": "assets/js/19.4c28bfec.js",
    "revision": "ac2348cf63d6e5f3e1cd225f73e4ff2b"
  },
  {
    "url": "assets/js/20.c0cacdbe.js",
    "revision": "1df4ff4a8ec2dc25b0932f0ce0c98700"
  },
  {
    "url": "assets/js/21.5f087bcf.js",
    "revision": "a9a775f071a685f7b716c44593f45173"
  },
  {
    "url": "assets/js/22.37df95b0.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.15ae32d6.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.66dafdc9.js",
    "revision": "18e92fa984917daf10d78d63b876643b"
  },
  {
    "url": "assets/js/25.013277dc.js",
    "revision": "9bfcbe3ef6d452824008d19e8257a55b"
  },
  {
    "url": "assets/js/26.6cf86c14.js",
    "revision": "e9214ab0d2f31a4e6aae3949d5ad8fdf"
  },
  {
    "url": "assets/js/27.07cdb1a7.js",
    "revision": "66748e0b21d8d98d083c15e468fd6b1e"
  },
  {
    "url": "assets/js/28.308ec362.js",
    "revision": "b0187e99132c72a5afc05ca30674d438"
  },
  {
    "url": "assets/js/29.de85dd7a.js",
    "revision": "f225e5884380a64311ab9506a2abdad6"
  },
  {
    "url": "assets/js/3.861d2001.js",
    "revision": "39e05bf0ca1c1528793236dc7e9ecfde"
  },
  {
    "url": "assets/js/30.4e9a2b34.js",
    "revision": "614e2bd42102c5b8db529e88b74c25a2"
  },
  {
    "url": "assets/js/31.36e1102c.js",
    "revision": "ed139098853a537bec4c887633308fea"
  },
  {
    "url": "assets/js/32.cd9e0cc6.js",
    "revision": "8285a9c999310bc0191b19b01cb1777c"
  },
  {
    "url": "assets/js/33.f96ea019.js",
    "revision": "0f4ed56ed536510a6ab1d95bce214171"
  },
  {
    "url": "assets/js/34.adf02b0e.js",
    "revision": "d9ca96f86488945ef1702672efc45d6f"
  },
  {
    "url": "assets/js/35.993538eb.js",
    "revision": "9a96f1987cd937c37ecc3bd95af07481"
  },
  {
    "url": "assets/js/36.74fc5ab4.js",
    "revision": "ecc978c0575f391597461e5f43ac6a32"
  },
  {
    "url": "assets/js/37.190abcba.js",
    "revision": "d5443ef8c45d06a708df4b39a0546fdf"
  },
  {
    "url": "assets/js/38.5b0ab75a.js",
    "revision": "8802937e936a52a561dd80809016733e"
  },
  {
    "url": "assets/js/39.115593ab.js",
    "revision": "4909462303d6ea05d4a6f84b8d97e433"
  },
  {
    "url": "assets/js/4.b87db551.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.496579fd.js",
    "revision": "d949e5c5b69b902efd58f0c99707cdc2"
  },
  {
    "url": "assets/js/41.d46e59bf.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.24ffb36b.js",
    "revision": "6a3b93bdc2a1782180e2c5c52a06b938"
  },
  {
    "url": "assets/js/43.43d3c781.js",
    "revision": "24606c35ee1c6ec7d0bcac31428f5c73"
  },
  {
    "url": "assets/js/44.fe4e3dcc.js",
    "revision": "dc2f94db72750dc9e9e33342cdd3d248"
  },
  {
    "url": "assets/js/45.1bc39c76.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.d8e7a1b7.js",
    "revision": "00068a0ea8e63351814cd92ce633f5b2"
  },
  {
    "url": "assets/js/47.a3213036.js",
    "revision": "7e287fba408496fabb7a894f53bc28c8"
  },
  {
    "url": "assets/js/48.257742f2.js",
    "revision": "c8cc831caf9a3807ede9929ebb38d81f"
  },
  {
    "url": "assets/js/49.4a49bcad.js",
    "revision": "d3276fc31f8408ad3ef24050a1c37400"
  },
  {
    "url": "assets/js/5.46ee72ef.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.4beaab19.js",
    "revision": "875f8aed44fc399a6510b8ced30ab449"
  },
  {
    "url": "assets/js/51.b2391122.js",
    "revision": "901643510870e8f084e7c47bc92b6f7d"
  },
  {
    "url": "assets/js/52.d9aced77.js",
    "revision": "aa47eac9d106dc6a8d7b3006764b5ef3"
  },
  {
    "url": "assets/js/53.b635a814.js",
    "revision": "132a7678376f1f407d3848668f41df76"
  },
  {
    "url": "assets/js/54.d5ba709e.js",
    "revision": "9cccff2bfbd02a330819863104d374e1"
  },
  {
    "url": "assets/js/55.bad804ce.js",
    "revision": "44119aad50c4b46b92c26513874974af"
  },
  {
    "url": "assets/js/56.37ad6cbc.js",
    "revision": "241016649c125ef51022e21110d43815"
  },
  {
    "url": "assets/js/57.c2bb38dd.js",
    "revision": "24e43456b433d97d5e0ebca43272ff3b"
  },
  {
    "url": "assets/js/58.2bc432ae.js",
    "revision": "3460ec34f6afb8d3260b079f8e3c3761"
  },
  {
    "url": "assets/js/59.0526b220.js",
    "revision": "869743171e9ba8a06942507edbcb1fa1"
  },
  {
    "url": "assets/js/6.97959c4a.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.0d71911b.js",
    "revision": "802267888572ad09f2b583ced7a7fbd7"
  },
  {
    "url": "assets/js/61.0134387f.js",
    "revision": "da72caa9747e3e5563e811f82765401a"
  },
  {
    "url": "assets/js/62.73826e72.js",
    "revision": "d8e712af6f6121861795d6c8e08f43da"
  },
  {
    "url": "assets/js/63.43076aeb.js",
    "revision": "563784d94d0634f3eb0aa3b7c59bca08"
  },
  {
    "url": "assets/js/64.ac3d668e.js",
    "revision": "7529aaf691eff8d5094570efceee4338"
  },
  {
    "url": "assets/js/65.62095896.js",
    "revision": "d3993a1b1abfaac669abf75ca661139c"
  },
  {
    "url": "assets/js/66.8ac7936f.js",
    "revision": "a33988bcaa5a72fcd8123be044e54e1b"
  },
  {
    "url": "assets/js/67.17a61c15.js",
    "revision": "ba0230d7ddc0612406173a81ca62042e"
  },
  {
    "url": "assets/js/68.efb5054e.js",
    "revision": "8aedc616754ec5a6f865ceab43a45b5d"
  },
  {
    "url": "assets/js/69.085a7ec9.js",
    "revision": "26e080d9ec80180bb6722d35422fb60f"
  },
  {
    "url": "assets/js/7.f07e746e.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.d7f9ec8c.js",
    "revision": "e32ee89225a17d96e14d31c3f2a73ef6"
  },
  {
    "url": "assets/js/8.9749914f.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.1042bcc7.js",
    "revision": "15ea412f91f14415a473ec05a6198b81"
  },
  {
    "url": "assets/js/app.4e98d6aa.js",
    "revision": "244ac1f4f16f338332a5811cd5d890fd"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "af22235532a90eb53f911b646d72fd4b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b6de143830d05f3414b8057c450082a1"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "76948bd3a44b55d0f587a73b4f5c664a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "224b6df6757c4c83dffd5bf63dd20cef"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3fd5a7c29a88a113baae706c9c7a599b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f7c5ca048a8eb9649eb434e5b561bc04"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9a2fb5b9b94348bc99ceba90ff8033c6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "d20e48761dab6e4983790d4c07410b1f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0820d5c105dbacc1a09390643089b550"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8ccbdaa984ff5433a2421af740a84333"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "258c955e56586dbed77226d06867f97e"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7de2564efe8eb0c9c13119b646c11b29"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "7031509e426c7a8aeac9323fb0d4d6bb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "63de9d932bdb8b5f8e90d3771e280b50"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d10c40d1c8ec49386f9b4f8336a39729"
  },
  {
    "url": "book/index.html",
    "revision": "129faa398c5880c5afbbaafe9d62aada"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "aed559ffba14af8eabfe73233f578a47"
  },
  {
    "url": "categories/index.html",
    "revision": "43425a074136f224b37055ccfbe205e1"
  },
  {
    "url": "figma/index.html",
    "revision": "b80b78a66301df3a4eb34fe2a3e5be93"
  },
  {
    "url": "flutter/index.html",
    "revision": "fd2b01e1e57888cb51b879993caddd37"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "f99eefd8cb61d80b478c3615314b0a25"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c081a290de1670642defbf8b0cc4e9f5"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f02f7c069e1658fd8b365dbe2839fba3"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "079971ba0b05589186e08f12e1b7ff20"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "07505da7fba2a7645829f09b5a05d3a7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e4a7bcdd3fb5848ecd53897e8d4ef8c8"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c4239166203e017ca5dfdec9a8ad17e5"
  },
  {
    "url": "index.html",
    "revision": "bf3f174483d886a62995f9f6be147179"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "9f725e2b9c031d214f99b39abcf52a97"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "52f05a1ddf1c3973518563ba9234babe"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "aaafdfeb478190536505d58da1dd4089"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "fdef474be2545cff1f6f70bb81261dad"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "c6541aacf0cdf9bd9a1c2ff3a833bb5f"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "71ebe7f115ffe48f8c435e265d86bd1f"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "be7b026f110de1c7f8445a8a447766f5"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "766c972503004bd1f4cce82ee6b32002"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "826c78868369265c6d855c38fce8687b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "117e4e1da3344702d425514583309e2b"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "59cd29f9bf63bb686834ae1cc3cdcf4a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "0c2d96160d1968aa328998d0b212f281"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "2fb4877ab31a61eaab45060dd441784b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "505beb5a269ba95adcb9fc139292fa7c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4ac914401ab5025268a8fd68ef7a1921"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7b6c13e6862f4c08c83eb0a44b50cfef"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b51d017679950bccdbc4d50f69543911"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0645671d29ba10c471ce86359377b7a9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "395277ac4c46814b4085930c4409d25c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1ab74bbabc2eaf440da1a826bb979e79"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "19f6a0acd378085e43a5a583e4cda59b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b73dccd55bd4c403989bd4b7835ff26d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "76b443f0f897e5e0f1c350615047dc6b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "21d9e2fc134262cac09b0a1d0d7b3e4a"
  },
  {
    "url": "tag/index.html",
    "revision": "edc3f9c596ce9927afa77a96d10af13b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bf4298a4a4f5c07f9801b31cea4cdc98"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "76f646148eccee690a9423c9823da278"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3fec4a793a078408088315f03b512045"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cc9ae9d333f3758467f7f2c0d4bcc0d9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b4f11dace61caa303a1ab3800d19459f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d33ec7bb759e9243429382833cf7d035"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "984b17ba838d578c799a453581150047"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "759766f2f4a474c04774a8e81b5bf52e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ba20f8df04b7041749ffaa71ca716b7a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3c1f2c3a6b95f5d66571dea160eb6750"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "7a6630df58b5e21edf38d120425199bf"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1bc2209269489683d10b26a00507b070"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "451dcab008483b81366b52e681f0ce42"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a58c29551773e19bb797ff6176e96f6e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a447808837566f11ff1fea74d225c6bd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f791266861bba812a8dd759f50baa7c1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6da0639fef8e3356ef7ecddf4c5ff13"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3bbcb5297aa0c8015664d8f7a683dfca"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b2ca9bba6c3f74f14962686fe1dfc6f2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ea088ec8d25a9283aa76cb1ff249ad82"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fc8914ef8b22362ca3ea6f36a331f513"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c548c3aa170492fe6307445955adca1b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "59760d39c39ee2ee46ea6c20537805e6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ecac223c0ab5e4d0ee8e90a636a2d759"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "wechat_cobe.jpg",
    "revision": "7c103210c64d14972d9429ef991b44d2"
  },
  {
    "url": "wechat.png",
    "revision": "ecf97432d3f0c1c71f25d45113b4460c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
