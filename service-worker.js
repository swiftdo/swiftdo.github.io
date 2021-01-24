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
    "revision": "914cdb58841347a81b602240a7efafda"
  },
  {
    "url": "about/app/index.html",
    "revision": "212514e6d9979275da85c4495d0554b4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ca28d29b4752afb63281a3bda46f21a0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "cc6f5e2e0e605fe4c3df2a64e42e73f6"
  },
  {
    "url": "about/index/index.html",
    "revision": "e15617ae5627f48d4ad781b2e93a89e0"
  },
  {
    "url": "assets/css/0.styles.ef8fbc08.css",
    "revision": "75d501d333253bf66acf622f468da4e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.a23113d3.js",
    "revision": "f9ad9ecee0d76c03cafb2356d554432a"
  },
  {
    "url": "assets/js/10.e2cce4b3.js",
    "revision": "4ca55ac5d9220c2795fef472275f8581"
  },
  {
    "url": "assets/js/11.3cbebaf8.js",
    "revision": "52dad7bfe1cecc3887b1dde613e10d5a"
  },
  {
    "url": "assets/js/12.2cc6e04c.js",
    "revision": "f1a2b7586032449e112c938cb9f6f904"
  },
  {
    "url": "assets/js/13.2bd71125.js",
    "revision": "5a97c4de46941002a5ed3892c6677756"
  },
  {
    "url": "assets/js/14.acbd2c99.js",
    "revision": "51c1ef945e37efb4c325e9054a432b65"
  },
  {
    "url": "assets/js/15.bfa0770d.js",
    "revision": "5c86a9c5c1c0a455e2b03f2bdef656be"
  },
  {
    "url": "assets/js/16.a5e1c9f3.js",
    "revision": "b2bca1f28ad1fe9a8d4e37c70618f3a4"
  },
  {
    "url": "assets/js/17.dc987c41.js",
    "revision": "57a5307028ae394d7411cdf0808eb74e"
  },
  {
    "url": "assets/js/18.bf7b1e37.js",
    "revision": "9a79489ed5ade5bdb3ab4679e610f68c"
  },
  {
    "url": "assets/js/19.c00a3102.js",
    "revision": "6af11bbdebaef8f72cd7fa47a50d7907"
  },
  {
    "url": "assets/js/20.3cbf4f10.js",
    "revision": "3072860f7c58eb3a7c52af5fa994992b"
  },
  {
    "url": "assets/js/21.85927cdf.js",
    "revision": "cc045dd6dce444c9e302dcff85acc2f5"
  },
  {
    "url": "assets/js/22.7c8f04d2.js",
    "revision": "1035438d6ee61faefeb1dd24889ad367"
  },
  {
    "url": "assets/js/23.577ce3af.js",
    "revision": "e46fde1ff1d09bd6957880035435b5ab"
  },
  {
    "url": "assets/js/24.b88ad7c5.js",
    "revision": "d352aa6ce49fcd022aa0947f48356f99"
  },
  {
    "url": "assets/js/25.3182394a.js",
    "revision": "47b17832b5d84ae81793b5d345c76df9"
  },
  {
    "url": "assets/js/26.f01f356c.js",
    "revision": "666f24eb912abc180cc56b288bd7c981"
  },
  {
    "url": "assets/js/27.601125e3.js",
    "revision": "2df1a405e7103b67961cfa68c220c733"
  },
  {
    "url": "assets/js/28.abfe1ab8.js",
    "revision": "cdbec9a48ca35418433c5187f92898c7"
  },
  {
    "url": "assets/js/29.16086d9b.js",
    "revision": "ea53bb09ceab0ad9a1cb55f791cc4cca"
  },
  {
    "url": "assets/js/3.1b0902a1.js",
    "revision": "1710836fc76effd31953a68b908415ee"
  },
  {
    "url": "assets/js/30.2ee57be9.js",
    "revision": "42ce1a03acd34b8b89417b724a7ef6b6"
  },
  {
    "url": "assets/js/31.4b330b51.js",
    "revision": "ed7aef4284fb98e25f699ecbf6137a8a"
  },
  {
    "url": "assets/js/32.65834969.js",
    "revision": "b9de9a9d140b626454b1343ddf8379f1"
  },
  {
    "url": "assets/js/33.d8fef21e.js",
    "revision": "60f6ccc4eb69046c3efea0be2f3b365f"
  },
  {
    "url": "assets/js/34.6c134203.js",
    "revision": "485acd8c0702327cd153f77a91beeefa"
  },
  {
    "url": "assets/js/35.375aede9.js",
    "revision": "0eb64ae9ff40399045cf14297ccdafd3"
  },
  {
    "url": "assets/js/36.572d6680.js",
    "revision": "098ba94b38aecc617555e193efb1b1fe"
  },
  {
    "url": "assets/js/37.a9642e20.js",
    "revision": "e940e6d8d88ad81853be53b826e3bdef"
  },
  {
    "url": "assets/js/38.d69bbe59.js",
    "revision": "548bd3247bb496faf158f2359280cdbe"
  },
  {
    "url": "assets/js/39.4a170183.js",
    "revision": "934e1b6c23796c95a9620ef24df8403f"
  },
  {
    "url": "assets/js/4.0cf07b02.js",
    "revision": "7b0660a0fcb6ece7b8081a911ed9b5af"
  },
  {
    "url": "assets/js/40.95191603.js",
    "revision": "24ece0d07eef55612a36712c1c35f0de"
  },
  {
    "url": "assets/js/41.83cd9f32.js",
    "revision": "86679e21851db1d527c68ad4faa75613"
  },
  {
    "url": "assets/js/42.965d7a6c.js",
    "revision": "3ef8be1a09befdf89d24a6a2a487a375"
  },
  {
    "url": "assets/js/43.dbf3732c.js",
    "revision": "1d47318cc9f28bd74dba62fbde19d977"
  },
  {
    "url": "assets/js/44.8dacc10c.js",
    "revision": "f95c8540fd09442e1afe65dfcc4db8a6"
  },
  {
    "url": "assets/js/45.95d17d12.js",
    "revision": "b4fa43c149fca94ef98e6174a5f5f817"
  },
  {
    "url": "assets/js/46.0c818649.js",
    "revision": "58ed89f28588d7cb2e1ea65a283c71de"
  },
  {
    "url": "assets/js/47.ad916ef4.js",
    "revision": "9292794801e7b76508539ccba84fd202"
  },
  {
    "url": "assets/js/48.6a57d7cf.js",
    "revision": "3eaa9d065b6bad90169f6b9c3443c88e"
  },
  {
    "url": "assets/js/49.72be352c.js",
    "revision": "dd05d233a2f7eb98cda7d95d4903c78e"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.3723d779.js",
    "revision": "0c652446180fc4073f447003b569c085"
  },
  {
    "url": "assets/js/51.5122b2f7.js",
    "revision": "518aae440877f3b0b10ea7968edca79c"
  },
  {
    "url": "assets/js/52.4dee0410.js",
    "revision": "bb98484df8767211fae8ef7d548645b9"
  },
  {
    "url": "assets/js/53.5d0ae975.js",
    "revision": "9b60cbf8b6a07fe146ac3db39b920d10"
  },
  {
    "url": "assets/js/54.24992414.js",
    "revision": "4f7a32308bec9e44f6941e98be5f3b20"
  },
  {
    "url": "assets/js/55.68b32281.js",
    "revision": "bba1a16ecc9d59308fe7663de64a53b7"
  },
  {
    "url": "assets/js/56.453b158d.js",
    "revision": "a72dd3c994a8550e0bd728356ab3515d"
  },
  {
    "url": "assets/js/57.3c9fac31.js",
    "revision": "91278a67c7b5d3fcba97cb5bf9f01416"
  },
  {
    "url": "assets/js/58.ef0fe414.js",
    "revision": "2f0e0a835bde4d62461b157abca4eb41"
  },
  {
    "url": "assets/js/59.8139188b.js",
    "revision": "fe51f77b84bfec5893b74260598c4732"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.20b597f5.js",
    "revision": "28d7f25eee523df359db4749ad91a8e6"
  },
  {
    "url": "assets/js/61.bdbaf0c0.js",
    "revision": "40dbd4cb1ac14727a84a909dba85fc55"
  },
  {
    "url": "assets/js/62.90d8a0b2.js",
    "revision": "cfc393541783ea84e29e4ed54232c7f7"
  },
  {
    "url": "assets/js/63.085fb556.js",
    "revision": "eaaffc2583ea9e4c01848e4ee91b0de6"
  },
  {
    "url": "assets/js/64.4c3cf25a.js",
    "revision": "f4501e96f1a93fcd38b1d1c7f1764455"
  },
  {
    "url": "assets/js/65.65267fd2.js",
    "revision": "ec36116c2888a5a96a5851396fcf791e"
  },
  {
    "url": "assets/js/66.ec8b9491.js",
    "revision": "5c4bc293fae67bdb51c60c7dc9b47c70"
  },
  {
    "url": "assets/js/67.a5163d3c.js",
    "revision": "83e0ddab7b75b8201da754acd60116b0"
  },
  {
    "url": "assets/js/68.3bb4fa48.js",
    "revision": "88fce6d63bc489eed10f54470297d39b"
  },
  {
    "url": "assets/js/69.75d2ca39.js",
    "revision": "3bcfd24ccc31f69bf216f697df284b90"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.cd3042f8.js",
    "revision": "31ed0900d946e38b735d155ab4cfdbc2"
  },
  {
    "url": "assets/js/71.b0b8032a.js",
    "revision": "3232b8c64614e52c6c38b3e25f20936f"
  },
  {
    "url": "assets/js/72.908718b1.js",
    "revision": "f246dcd03af00a182cb153bc9be04d4f"
  },
  {
    "url": "assets/js/73.ae8742c3.js",
    "revision": "5304ce0fc5f595a23a2c9c8dbb6a01aa"
  },
  {
    "url": "assets/js/74.68aee34b.js",
    "revision": "d969732c2be35ff92aa3f17204733467"
  },
  {
    "url": "assets/js/75.fdcf0cae.js",
    "revision": "7046dec779cdf659816d9e17c1909e60"
  },
  {
    "url": "assets/js/76.6322438c.js",
    "revision": "26008adc54d6c80d1a0c5146554e0bfc"
  },
  {
    "url": "assets/js/77.2f1589c1.js",
    "revision": "75d0cff4f8f75eb1a646b8238ea22212"
  },
  {
    "url": "assets/js/78.81ea6a89.js",
    "revision": "eae314e87e194800f1e62eddcda47664"
  },
  {
    "url": "assets/js/79.e166033d.js",
    "revision": "9df46d33e237d17e832aff513ca201ce"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.87f4b096.js",
    "revision": "04f9e5d125ae46027ba49fbcf9c98e0f"
  },
  {
    "url": "assets/js/81.49b6dfba.js",
    "revision": "144b96895af4fdffcbabca00bb730dba"
  },
  {
    "url": "assets/js/82.185b7260.js",
    "revision": "1add6413d67617b1cbf3927f36c7fa7c"
  },
  {
    "url": "assets/js/83.80b5c2ff.js",
    "revision": "8f262368801e9751f63424721568ec73"
  },
  {
    "url": "assets/js/84.87a77082.js",
    "revision": "f8175a4312d015b413e0e401cf89c8bf"
  },
  {
    "url": "assets/js/85.c6085f1b.js",
    "revision": "38495c18edd8ca21e251ded9b5a4f61f"
  },
  {
    "url": "assets/js/86.d0a8068c.js",
    "revision": "a447893b12a7fb339d1e043519183782"
  },
  {
    "url": "assets/js/87.08348d57.js",
    "revision": "1a4faa9d019cce844ee30fe756d2703b"
  },
  {
    "url": "assets/js/9.790337fe.js",
    "revision": "298e3e5f180c531dc064a7dee191b84c"
  },
  {
    "url": "assets/js/app.f268fb19.js",
    "revision": "3cd52f167b5fa2d84036182533960c8e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "08f5663175f11ef028694ac0db75d30c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "867e8cf579f9e9a27c769958158a309b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "260de9d9a9bf29288464f5370a624459"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8cfbd0ba74551592b31164b294b2fa8d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "866b61d55e4a891646498fcfaf1ab98f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4abb41ef1f6960ccc069683f0fb6ef07"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d08b044bebc3140732f22509a1d2ad93"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e81bebb6536dfda4a1226c8c29db509b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1493a3ef060bcdc3f44b0be8ce126a06"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "074a8fc51dce03054fcd5b922fb77880"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "5d52db2cde0596b2aab16e4e1f02be16"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7c4b4444596b44124b61d14e2857c99c"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5d9da04828cef722bf8260bb91a97feb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "7c5408e834124dfa14d5aebf05c0f2c2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "65c68d2158f60d3f11efdb1f00507a5d"
  },
  {
    "url": "book/index.html",
    "revision": "67269fe59d142e7d779c750f165e9430"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9fc0bc8a8dbc993c3813be2a40f41303"
  },
  {
    "url": "categories/index.html",
    "revision": "945517729e3c67c0c372c7fe06569ab3"
  },
  {
    "url": "figma/index.html",
    "revision": "f3a612c43cc0d137722c40352aff0c2f"
  },
  {
    "url": "flutter/index.html",
    "revision": "a0b1f0b8e7ffa04d951c24d5945288b0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "78e0fbba2de600f6eac8c664ced097c6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ab461af6e57ccea44491f275ebfe3369"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "db39731a29c1f47761cc2cc136419d8e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "3c769b89a60476d6fcaedd5e15113423"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8d638ee6e6c6a10edb2cec255d05fdb1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7b9c2a706d08b4846f1d56b4cb6ec9a3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "fd6a4d9d9310af677a94a6f4c7609782"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "183884e158d84a95e91fc3b77ef42339"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "9996ed2ce8f0db7071b122469306c2ae"
  },
  {
    "url": "index.html",
    "revision": "b11824dad2c66f5bbed49732b84b90e7"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "dfc131c966cebbc2800871578d169dca"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b3151160e9f50635fef18297acd2177e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "601a941a60d5c0fed3f9e97335df79cb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f96279ebd4b9c91acde49ebd6fdaf881"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "ce16ea6dd9a1db96ce7c057f148eea8a"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "6ccc3a361a9955e181cc767db81ed6d0"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "0ab179a040248e4dbc142e7d845d6f0a"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "a11c7a5759518bf4a569800606eab86c"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "045f753cb4e56546f40f2444a0d16c14"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a53e14d1e282767a81c721faeb052b31"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "5161d3496a800d0a5661a82bd1aee47e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "14820ac511f704f05b054c3b31d14ff6"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "53326bc0f6e77bdeae96e0f9952bd0ef"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "2b0289e77a5a34474ec93a5bbab5352e"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "cee437b49f888fa188c77947eaccffa2"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "911cf49ff38004e2a99411b52d33adf9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0304bf4affc2298d30ea785f9e6672ae"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "558d917dd84489b3493362846957c339"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f2d7143d6c19d48c14f1a53ee2b9fb99"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f4857e23eaf268db49af08037a7274c4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "89d2979b6ff569d68db38e3ebd14820b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a704057a818f361bec86e58bdd9b0d79"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "87e6b1da3dfb545e7613dbf98cfd7f51"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b229abcf627f77e4a03f35e0a6f24a66"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1bc8352b0864bf8d9b61cec1e50468d4"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "37117082c69cb03601c0b36b96183e71"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "dfbe5a5f38bb181218a2521c46458595"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "686e9c2f8f0e6e08c0d478614ed770b0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f24a1fc8f7b72da0902a5b17fcdc575e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "dbaad2caa4d107ff3f87f9c5503ccdea"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f947dbac962721ccf7d6bf71d209e290"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "73626fe84acd35878c091d1a185c0707"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "b79f0edb4332ca050f04349412b025c2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "eb30d6787437180218d2c7d3326d7289"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a8df2a0767645f43b9ef458fdf967709"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b2c180cc88cade524c06b2dbfff5cbcf"
  },
  {
    "url": "tag/index.html",
    "revision": "70005d0a1de2679ade3569404556fa91"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "74279f84aaf4044af12589102f22a3be"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "43e23935ec753ccf93f31a37959d9e70"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ba77e6821bd7d73661192453d5d5af16"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4e74a062f2169f67f8e5bc4a8a9d358c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "70727d62d143890b8e53cac6f307ae71"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "720f1137fbf6c587a4874d4db77f6938"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "5df8a5eb6a6bb3aab2c7a958090dc2be"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1ce7c7efc5d49165964def742dc7ad9d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "2ad449130d8ef232ba28c375ee0a9b47"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "60ea11439fb78827648e670ea1c8100a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "545e4d6f32be7ab44949b0e7589a2b10"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0394936636a45bce26bcf901f08224f7"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ad9b386c567d52615a2d7c1a9e4344d0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6b3b3fd8aac54953aa079e4e2c9d6ccb"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5fa2c4f47cc2258a4b1f361835c155a5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "912adaffe81c925380caf409b578d56b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "cee7b759117dc4afad6f86af7580bcc8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "efd621bd448bddf962f18fb84c74da3b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "99c91c8bc907c96dd6bcb4c7d46f546a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d2c1036b27214013c7ae455bdeae652b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "7a14706ec0856370a6f18868ab6eedfb"
  },
  {
    "url": "timeline/index.html",
    "revision": "bbcb9a8e5323e20bcdf73b6ffbb8acb1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4dceb2b1dad8e099389c2c97bd9c3c1a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f2d9ba595db64d1c53cf0524af41b0f5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "52af308ed47c8d7749ef4c52f6ace60f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "494ff6ea5c242a4cbb15fdc2400883fb"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "4eb254c8501fef9af33afd673d58ee20"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fdf63a7041793b215463d39c54b3c63b"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "57c46966368a9aa97f9164eebe4c6dbd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "11baae8965a5910e0e1d5bf838032433"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "119be14371bae9dcc022d82259540261"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "095f44fce1b3df89baed10aa5490e40b"
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
