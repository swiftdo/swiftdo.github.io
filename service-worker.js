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
    "revision": "3343ff064e07d1cc2f5ea7bf3202678d"
  },
  {
    "url": "about/app/index.html",
    "revision": "2ff9b862b5edd19e4fa903ab429784fb"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6bf8fffc6d983edddd74066ad99260f9"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "701c619ad24ed9d7cfbe13fd3d3a4948"
  },
  {
    "url": "about/index/index.html",
    "revision": "6acb4a3f1eabdef135c9b59641dfd0a0"
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
    "url": "assets/js/1.f5bfbac9.js",
    "revision": "d25c35a529e824a10392e774e3912169"
  },
  {
    "url": "assets/js/10.870ce170.js",
    "revision": "bd7fc62b5926950d899372ea2c8843ad"
  },
  {
    "url": "assets/js/11.5c4dd5d4.js",
    "revision": "cada028dddf3f9175af6ef858c0553e8"
  },
  {
    "url": "assets/js/12.f0d65a5d.js",
    "revision": "7c80409a8ce42968bdf00553b892205a"
  },
  {
    "url": "assets/js/13.4abb434e.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.85298c30.js",
    "revision": "b26355e42018d76202456720f647ff86"
  },
  {
    "url": "assets/js/15.b8142a3c.js",
    "revision": "7f1f54c81a58773e007d3f0770adc322"
  },
  {
    "url": "assets/js/16.f8bf2c7b.js",
    "revision": "609dbf8c75747f59de3640cd378126ef"
  },
  {
    "url": "assets/js/17.9ad99f4d.js",
    "revision": "53103a5cd6feeebde25d6ee0f28f9d96"
  },
  {
    "url": "assets/js/18.b6809d17.js",
    "revision": "1ddbcec0d1342d66222877c287ecc9d2"
  },
  {
    "url": "assets/js/19.df38015a.js",
    "revision": "84805c490a871056b507439977552644"
  },
  {
    "url": "assets/js/20.127c8673.js",
    "revision": "3e42ba62ddbbc101a9763a5dd4825107"
  },
  {
    "url": "assets/js/21.4704d19f.js",
    "revision": "a9a775f071a685f7b716c44593f45173"
  },
  {
    "url": "assets/js/22.b8077a1b.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.13bfc22c.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.d8fa631b.js",
    "revision": "f3dee10ac3963bbd36d7ea0443594db1"
  },
  {
    "url": "assets/js/25.2d682b1f.js",
    "revision": "d4b6b71a5e263c6d80d7f03ecb9079b1"
  },
  {
    "url": "assets/js/26.052e2640.js",
    "revision": "e9214ab0d2f31a4e6aae3949d5ad8fdf"
  },
  {
    "url": "assets/js/27.73e8ff52.js",
    "revision": "66748e0b21d8d98d083c15e468fd6b1e"
  },
  {
    "url": "assets/js/28.032b1e9f.js",
    "revision": "b0187e99132c72a5afc05ca30674d438"
  },
  {
    "url": "assets/js/29.172fa8c6.js",
    "revision": "f225e5884380a64311ab9506a2abdad6"
  },
  {
    "url": "assets/js/3.424717bc.js",
    "revision": "39e05bf0ca1c1528793236dc7e9ecfde"
  },
  {
    "url": "assets/js/30.a20e3dc3.js",
    "revision": "614e2bd42102c5b8db529e88b74c25a2"
  },
  {
    "url": "assets/js/31.8d11b2a9.js",
    "revision": "ed139098853a537bec4c887633308fea"
  },
  {
    "url": "assets/js/32.dad2ab98.js",
    "revision": "8285a9c999310bc0191b19b01cb1777c"
  },
  {
    "url": "assets/js/33.93a4179b.js",
    "revision": "0f4ed56ed536510a6ab1d95bce214171"
  },
  {
    "url": "assets/js/34.662950d8.js",
    "revision": "d9ca96f86488945ef1702672efc45d6f"
  },
  {
    "url": "assets/js/35.e479ed17.js",
    "revision": "9a96f1987cd937c37ecc3bd95af07481"
  },
  {
    "url": "assets/js/36.039b8de3.js",
    "revision": "ecc978c0575f391597461e5f43ac6a32"
  },
  {
    "url": "assets/js/37.e7440fe9.js",
    "revision": "d5443ef8c45d06a708df4b39a0546fdf"
  },
  {
    "url": "assets/js/38.974e3ce7.js",
    "revision": "8802937e936a52a561dd80809016733e"
  },
  {
    "url": "assets/js/39.3272d624.js",
    "revision": "4909462303d6ea05d4a6f84b8d97e433"
  },
  {
    "url": "assets/js/4.bb802eb1.js",
    "revision": "893e2c59de9bc8abf1ee794e0e5750b0"
  },
  {
    "url": "assets/js/40.a9cfc374.js",
    "revision": "d949e5c5b69b902efd58f0c99707cdc2"
  },
  {
    "url": "assets/js/41.13c01d73.js",
    "revision": "47e5c0d18c2f572bc80cdfcd0beb9ab2"
  },
  {
    "url": "assets/js/42.c653f4eb.js",
    "revision": "6a3b93bdc2a1782180e2c5c52a06b938"
  },
  {
    "url": "assets/js/43.7e19e7f0.js",
    "revision": "e1000bb46616c31306bdcf6c7aa77aa5"
  },
  {
    "url": "assets/js/44.8ed3e270.js",
    "revision": "c9abe75b6e7cd94127760424d7ffbad7"
  },
  {
    "url": "assets/js/45.d9a7ca20.js",
    "revision": "12336b47028d77b515560e2be489bd8d"
  },
  {
    "url": "assets/js/46.ba3fe6ca.js",
    "revision": "9bdcd8f2eb52d3dae3eb4c5cfbb1f2d4"
  },
  {
    "url": "assets/js/47.780913ae.js",
    "revision": "84f8160ffaa559f110f538bb2d0e8887"
  },
  {
    "url": "assets/js/48.7edbfd40.js",
    "revision": "3284fc9cc97971241fd8c578174a40bb"
  },
  {
    "url": "assets/js/49.bfb179d3.js",
    "revision": "a127d312e5920c29652b05eb0bdfb47d"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.8b1aae27.js",
    "revision": "875f8aed44fc399a6510b8ced30ab449"
  },
  {
    "url": "assets/js/51.78819fda.js",
    "revision": "901643510870e8f084e7c47bc92b6f7d"
  },
  {
    "url": "assets/js/52.4c7e1534.js",
    "revision": "aa47eac9d106dc6a8d7b3006764b5ef3"
  },
  {
    "url": "assets/js/53.447974d2.js",
    "revision": "132a7678376f1f407d3848668f41df76"
  },
  {
    "url": "assets/js/54.eb95b2bc.js",
    "revision": "7da0e8d9ca3b08717af8aaa9c054564f"
  },
  {
    "url": "assets/js/55.3bdf218d.js",
    "revision": "fe30dc72dad2738a4699c56dda64aa9d"
  },
  {
    "url": "assets/js/56.1378fabf.js",
    "revision": "f51a1712793efbcbfd15f90195ac3eb0"
  },
  {
    "url": "assets/js/57.5d146985.js",
    "revision": "ff1ea1d42fc1cb968c9da9a1d4fb9151"
  },
  {
    "url": "assets/js/58.c1f79d4d.js",
    "revision": "bf5b0dc8fdc0b54b36da4e7396ffa179"
  },
  {
    "url": "assets/js/59.3b3cb26c.js",
    "revision": "03bdcbc120995f699925c16f5f97ab3c"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.d67318af.js",
    "revision": "9ffad857679e02e7f72f8688412a271f"
  },
  {
    "url": "assets/js/61.9d63d2ae.js",
    "revision": "5625ecc72d60a8afafc0f7636d601bd2"
  },
  {
    "url": "assets/js/62.75e2e034.js",
    "revision": "b8ee7aa72a5263e9b7d14c6295559dfb"
  },
  {
    "url": "assets/js/63.9b3113b3.js",
    "revision": "6830b1cc1b68ae85ae33aa98a0a9cb19"
  },
  {
    "url": "assets/js/64.fe7ab7ac.js",
    "revision": "1134d18d20e0bc9836687e44a9496da6"
  },
  {
    "url": "assets/js/65.56d4e243.js",
    "revision": "46a4a50131b12b22727530b84e61edfd"
  },
  {
    "url": "assets/js/66.55e53794.js",
    "revision": "fdab202c9ab7cc21af194150dce11d9d"
  },
  {
    "url": "assets/js/67.5d101d79.js",
    "revision": "2f804dc7cd13b8b933c0e4dfddb079b7"
  },
  {
    "url": "assets/js/68.280f9a76.js",
    "revision": "d01153666389d536fe08d416ca636a84"
  },
  {
    "url": "assets/js/69.a4594274.js",
    "revision": "f3e678101bdcb61eb02799874400fabd"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.0abbf1ec.js",
    "revision": "30803a9af5db859efeace80f40f690af"
  },
  {
    "url": "assets/js/71.07fbd98a.js",
    "revision": "0fcaf989d83a656cb765577e4a01d323"
  },
  {
    "url": "assets/js/72.c0744669.js",
    "revision": "9603db60f3e82675e80141a0999a298b"
  },
  {
    "url": "assets/js/73.f4484033.js",
    "revision": "7b543b5c81bb670f8e21588f62506f33"
  },
  {
    "url": "assets/js/8.7f7f6ea4.js",
    "revision": "36e5dfaae5f044b6177ae014664fee54"
  },
  {
    "url": "assets/js/9.820efd31.js",
    "revision": "36f3e1c232c984d0c095db28720a668a"
  },
  {
    "url": "assets/js/app.ef6297c7.js",
    "revision": "9a25ea8356a28b857a029bbb9d19e492"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "e57eef2e8e3077d5ae4e23766ef09ed5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b66ea7704af89841e3c6d65c2c63bd16"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "01949fabc3ef0e5f4daf225c6d25d6f5"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "245e9975e8401c46774637c96b1aaf0a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2a4459c2671a7e24712a6022c5ee14cd"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "fac26ca09ee4df16488b0bb57de355da"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3158b57f1c9d9c4cb50c9ec063237112"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "840159d16c92f14f586d786c3b926571"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "62aeb150499d798bfd4688d89d642ea2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9bdbd90ddbf923083704ae7ba3da541c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "2369bb1b40bbad70dc7afd6d15ec9730"
  },
  {
    "url": "basis/design/index.html",
    "revision": "f4b8db3a34b5aed6d3a83825beece961"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "941bc8f8fb605a132299be68b7bd0103"
  },
  {
    "url": "basis/index/index.html",
    "revision": "efb3f56819f85f2c71c6c4b853e69140"
  },
  {
    "url": "basis/os/index.html",
    "revision": "cac0fe67d9032b8ef7a90c2fe559d8d7"
  },
  {
    "url": "book/index.html",
    "revision": "c347837411bbf3630e8b4e75126bf3de"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "eb04d0fa6ea9b2ab239287ec2451a2e0"
  },
  {
    "url": "categories/index.html",
    "revision": "312431bbecce2f9ba22169a5437eb1e3"
  },
  {
    "url": "figma/index.html",
    "revision": "ad3ebc10d70845b19a13a417d06edba9"
  },
  {
    "url": "flutter/index.html",
    "revision": "2da6d37575edb01f875d5a0a2d6191dd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8b61bd07334a68290d238c04baca97b4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "552391353ebe60608bca2f1ce17dfe1c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f48910d6fb7166ff677225238c53f077"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "36dd91b8b31c27079a02996aed767d83"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b0d7d0cd1f28c48c1190c252a74a96f2"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d9f9243cacd12fd143fdea59331160ec"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e7b4701539eeefc81a3102b63841604a"
  },
  {
    "url": "index.html",
    "revision": "1878a98b27e7641c76fe5074167acf4d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d0df69126906fc811e256ddf3b9d832e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "97e93b048f2a5fd728a571da0af21cbf"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "80d181038521f23564fc0d6b56063937"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f938ebfa19c79d507eb1651d6372509b"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "6e2b22e4339841d0298d0bf6c5a52e39"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "1ef5212717d527c6596d693856f5eb39"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "fc7603cd10b66692dda0d91380fc9f56"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "413008b5a567185c8dcbb9f82535cc8f"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "864784744537742d37bc8fa28caeeabe"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "42dff69aef9f3e69df1b7262af850843"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b5675e000104e808ce3987c9f234f5bb"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3f112185ac1c3ecf2a7e35c854b1ddda"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "f9386d0d2a90d7c048a9195ff64ade2c"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "3dba3f7b34b579330b0cf737b8de82bc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "2af716d8d044de687219956f9790ca7e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b5bb88f7c0997ce9d9aad8d08726637e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bf1e6223e8a005522e57fbd7db8f3dd4"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e96c8bfca732574d581b0929210cf50f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b2e86e3b42cc101da87af03fc8d07a02"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "93e53e011462be8e13ad36b5febd738b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0c14ba7dd57a3c5e73faaa78fc813c18"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "83001254c26163c8b8056fc99e37087b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "737dd7855b974bf1ea9cc3bf8d2379cf"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "53f40a6c37bc0a11f2b0b9c190fe8232"
  },
  {
    "url": "tag/git/index.html",
    "revision": "51f29d75507f4543bcaad978c1d518aa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2b3548c11bbc5e36b94eee2564ec58cd"
  },
  {
    "url": "tag/index.html",
    "revision": "80693219974b50b3440d033b2533d8d7"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e177f46eff7670a8f2c04d427724c60c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4d99ef86a4b2f30d62ec9364aea94336"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "fa6868fac72fc68ea214e08f7ed2b99e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a97fe227b8d8e7b305857a94d32a4530"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3b337e6b92d34ce4e48032f3841b78be"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7840f6c4ad9da3f16515ae803d26a76d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bf4d2e81a81cf5d072e627552d07cec1"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ff56e4280955cca34374b23ff6cf5ad7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "53136f8e301df16e18da9072b6ee063c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0a60d98f8b7c10a2dc950f365ebb2f79"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e2eb36f0d0be9c7cf4251637f362584a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "42ed51f85d250f7e21debd98098f64e9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c9b40679aa2aa5d76ccfd9120ceaebad"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "11c889b9eb2f3cfabc4e0f88a5407280"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f493c987bf78ed235ac81b9c3468b93e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5de5288dca107b4d4393fd7ed7a3b564"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6ffe02f6daf7a13b5cb634c57a2ac7d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "01283eab80a0e67626d9c0b662537541"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7919cee39797eecfd6a47ce2982abb2c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "231ab8d5f1b115cfe2ae7ccbe4fef72c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "0a85a7fd455d75716e53ddd158ae4910"
  },
  {
    "url": "tools/html/index.html",
    "revision": "dea8f699f13536305a0a7921e162c84e"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "edd4b6ffdcce10d94cb528e79e862797"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "74e18a873d30932e9becc7166db682ad"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "df83ab37ca754a7669ce9b8d51aade44"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0314f4bfed5c41e6b5c08c1eb5dfdd07"
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
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
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
