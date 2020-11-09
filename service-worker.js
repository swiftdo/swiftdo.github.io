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
    "revision": "ef94771ed16e1762bf89fb343fb6f8b3"
  },
  {
    "url": "about/app/index.html",
    "revision": "132ace789bf8dc7ed2345925e3e3b733"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "23d3af648c29c09d3191c06873d69802"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "06544290711866e23d92e77e5ae51707"
  },
  {
    "url": "about/index/index.html",
    "revision": "01b40ddb67041b571a502772dd33fa18"
  },
  {
    "url": "assets/css/0.styles.7a61191e.css",
    "revision": "6cd718cab216eeb148e3657091d28f83"
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
    "url": "assets/js/11.26bb3e0d.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.85cf56ff.js",
    "revision": "50dd455421a33e481896ca971d509d9c"
  },
  {
    "url": "assets/js/13.4abb434e.js",
    "revision": "74b67427937a197fcc2027b38489352a"
  },
  {
    "url": "assets/js/14.dca8ac7d.js",
    "revision": "1e68cfd3bb61fbaf31ef75d9abf9e03b"
  },
  {
    "url": "assets/js/15.e6fe0188.js",
    "revision": "8f56445dc2a69067c23fc377ddfce57b"
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
    "url": "assets/js/21.e60e4cc7.js",
    "revision": "8101060c88eb29fe84d23aab6492660c"
  },
  {
    "url": "assets/js/22.f901688d.js",
    "revision": "7786a2dbb11a636b1380001c8c23873a"
  },
  {
    "url": "assets/js/23.13bfc22c.js",
    "revision": "0972cd4f5054c07c5676023f02c4b218"
  },
  {
    "url": "assets/js/24.2dd0f23c.js",
    "revision": "18e92fa984917daf10d78d63b876643b"
  },
  {
    "url": "assets/js/25.32d2368a.js",
    "revision": "9bfcbe3ef6d452824008d19e8257a55b"
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
    "url": "assets/js/30.be2e87a7.js",
    "revision": "122bc5624b093e9360725450e7b3df15"
  },
  {
    "url": "assets/js/31.07d4b5ca.js",
    "revision": "55cac94f9d3eb17b416a6cb0d10ec0cf"
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
    "url": "assets/js/44.577f48a8.js",
    "revision": "9fadb59d34d10416ec738b62d7ab93c8"
  },
  {
    "url": "assets/js/45.fbe50fbb.js",
    "revision": "98bfdf1ff3d18afeccab982e770106c3"
  },
  {
    "url": "assets/js/46.1111093f.js",
    "revision": "67648065c3cc55865a95beb11a99dc27"
  },
  {
    "url": "assets/js/47.4cd5346d.js",
    "revision": "5a3fe30e4340a7b9705ccce07f8e927f"
  },
  {
    "url": "assets/js/48.86c0ed61.js",
    "revision": "758bf07f0a41e780082ae01676e6a7d1"
  },
  {
    "url": "assets/js/49.fa866396.js",
    "revision": "27b93e233f52286a71ff5bfba044bb8f"
  },
  {
    "url": "assets/js/5.aa707387.js",
    "revision": "d0605f8944dc1fcb0a6488ace25432c8"
  },
  {
    "url": "assets/js/50.59bc185c.js",
    "revision": "4a0fcb53f50fdaf2b8938cbbaaed7293"
  },
  {
    "url": "assets/js/51.650611d0.js",
    "revision": "85e7061797ccec9e588fd477fd5e789f"
  },
  {
    "url": "assets/js/52.e013d898.js",
    "revision": "38ef2be0f9bca9c94096d1ef9c538c5d"
  },
  {
    "url": "assets/js/53.5eaeaa6a.js",
    "revision": "3fad10291b197c0e35d696602dadd5e8"
  },
  {
    "url": "assets/js/54.622a3a97.js",
    "revision": "bf949f5b222543a0b0553b99273c5d5a"
  },
  {
    "url": "assets/js/55.2398e9f4.js",
    "revision": "c97b8370da14acc860b0c2a9934461a3"
  },
  {
    "url": "assets/js/56.af80061b.js",
    "revision": "4a3508fd618b1d1bdaf2cdf4068a20df"
  },
  {
    "url": "assets/js/57.f839d286.js",
    "revision": "731c39f9ab0ad72307fb6dc46c8ff84b"
  },
  {
    "url": "assets/js/58.dc4b8151.js",
    "revision": "f342ee9f465bce6f3ef19950e9c28c8e"
  },
  {
    "url": "assets/js/59.e2db6aab.js",
    "revision": "2556c16ba843615d6bf2ae4a1b4fd214"
  },
  {
    "url": "assets/js/6.a86f0367.js",
    "revision": "c2f95aeeab9c2fad79a9086401e67320"
  },
  {
    "url": "assets/js/60.ac41aba6.js",
    "revision": "0bb001cd5ac7dc16e50c98e37fb3e9d9"
  },
  {
    "url": "assets/js/61.ec188339.js",
    "revision": "4131a812c752ed6ef7e6d89bc5bb83cc"
  },
  {
    "url": "assets/js/62.9d42bdcc.js",
    "revision": "e9f728c31c84094654d0bff39be2e504"
  },
  {
    "url": "assets/js/63.98e36c2a.js",
    "revision": "3d0e9f0986d98f55942942a2e1519b7e"
  },
  {
    "url": "assets/js/64.ffee4e07.js",
    "revision": "3ce899a9d05b546e641bb0416510a17a"
  },
  {
    "url": "assets/js/65.b28a247c.js",
    "revision": "e28a3791340dbd824e3708acdfbdfed8"
  },
  {
    "url": "assets/js/66.6d49bb8e.js",
    "revision": "8e4198b0e70722b05dd2dd53474676d2"
  },
  {
    "url": "assets/js/67.d6641f44.js",
    "revision": "d0c0b9351901dd896aad9e0a20ee5d08"
  },
  {
    "url": "assets/js/68.918bf08f.js",
    "revision": "45087f7108a2229ab8aacd52678e8723"
  },
  {
    "url": "assets/js/69.fbbbfaa3.js",
    "revision": "a466f67e23603d2893ba17bcdc3ea653"
  },
  {
    "url": "assets/js/7.832723f9.js",
    "revision": "191ad1baf9d9edc24b3d37091ea5b77d"
  },
  {
    "url": "assets/js/70.935da329.js",
    "revision": "91ede5ff48b494c98468d696b77358d4"
  },
  {
    "url": "assets/js/71.bad91050.js",
    "revision": "d588a36d0aee4f2266f5961dca075a4b"
  },
  {
    "url": "assets/js/72.cf432c8e.js",
    "revision": "3a05c048fb7622b59227e8b04023af42"
  },
  {
    "url": "assets/js/73.73b711bb.js",
    "revision": "07a8fa97fa24ee7bbef686d530ef68b7"
  },
  {
    "url": "assets/js/74.8485f9cf.js",
    "revision": "91521c1b5f352942d41bb149b393f8eb"
  },
  {
    "url": "assets/js/75.482e4d62.js",
    "revision": "0629e1a9a34d4b23e7965be95359a6e7"
  },
  {
    "url": "assets/js/8.69fc1dc3.js",
    "revision": "ff85aabc10b1dc3ce082f27eadd100e2"
  },
  {
    "url": "assets/js/9.72c48980.js",
    "revision": "f198c93e68e3b47812c96d0ac41b3065"
  },
  {
    "url": "assets/js/app.799ed216.js",
    "revision": "9da5a3470ba1bb67525a7e5368e0fd85"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "40a7f9b47540e90ec779d50ce7df425b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9eb42213b90d5e424103075c3feb5385"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7843595e73fb01d030666a05945a1622"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "afc385a4808ae3efef905a1f4c570b64"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "418a079da7d463ab6b7cac88d0ff9593"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6ca8a579e3e198e72f1447e38609d975"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f4655f5fd23499e45203760045daa742"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e76c81f5204ad5925e7476122859f6fb"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "dfb1528059de934af05d0eb539671106"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a87a3f0f07d10b8f8c9d2abcd2ecdad2"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "60c8ce2df854b20d732a4db2ac68980e"
  },
  {
    "url": "basis/design/index.html",
    "revision": "707612962ba31d146a7a4d5036373cb2"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "5c21e671bb0d1a04f695388ca427b0b6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d6117695e2998c4c7c8a1f931a1de8a9"
  },
  {
    "url": "basis/os/index.html",
    "revision": "eadb28f2b0011e0a50c73c006941d09f"
  },
  {
    "url": "book/index.html",
    "revision": "c36f610518f1d91b46e070e9bb826468"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4221dc3f999b43b74386e7c326701fcf"
  },
  {
    "url": "categories/index.html",
    "revision": "242c915604de6df608ed59cc2d8b8e94"
  },
  {
    "url": "figma/index.html",
    "revision": "3645976e1871e0f5584042478be2c962"
  },
  {
    "url": "flutter/index.html",
    "revision": "10703637b3246bb2f1803f7dd536b550"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2f6a470ac33abe34639908d126f172e7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c6292230ad34f65ec68c7944961aa266"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9a007eb90d2665f775cbb2c58ccfa449"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "589bff923db00f7a378d36c3b44dac9c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "05de608d9bd6bca835dd97a6f66be509"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0bbbc5f8d3799a2c9ee833efd0915ed8"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "6239fc7e3f080a14521551938c366984"
  },
  {
    "url": "index.html",
    "revision": "2f69728446fc043836205a675f24ed8c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6626a8634351562ee56c646da4d4d003"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "141efdf3b0d094d93c0abea621dd62a6"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "62def541cb862fbec4581ce137a9e806"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "baadca93aae5429596fd2c6f9f936d5a"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "11c99e9950551a46ecb27e293a0d0c78"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "00c6d1bc084794895f7e62648d9898a5"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "21364fb939ab87b0ac1874e6c2b12ad2"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "fb760c460bd79edb13b499870c5009b2"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "0be0d9b78991f093689dac06a3952ee2"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "140196ebfdc71229fe195daad20786e0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "987e3b4ee462192b76cb65b0a9a6e94b"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e901f9255cd63b3d3489639db0a7cf41"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "88ca2c6a8a431671d16c7291df274fc8"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "65a1df091dcf01871f703151c7c86760"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "eb2f150d429091b6094a39640369a6fc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e30cbd4ac6ee99524fa3e05258b0d53e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "25e098a9f07a586dad9f1b567d5251bd"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8fc14f64ee0ad799fcc8e90bac3d25de"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "939ecb1f382c44d7b6866d96248aa231"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9641d4eb002d4d6201dacc7a6e2e4ea9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "05cc1be721c68b64777aa257659b6cb4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d2de38ada32b417d2e6aeafedca6e72a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e724a5f372c883ebf83b51992f82b450"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "4b202a872ef5dd07cf5b09bf96f60514"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "4ceae716bdcf7c6677d20fbe3d303ff5"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "21a42d05033b576a482fdcacfb3d0e03"
  },
  {
    "url": "tag/git/index.html",
    "revision": "75bd249e74843fe9848d781521af76e6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fb2a416bec05386e4e9b79f8d27f139f"
  },
  {
    "url": "tag/index.html",
    "revision": "9e4bef2f3fd8287ba64212f959b0f40b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a1cfb63c54837963b897782910d7e24f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1f3cb1f1f98abf1eafcfa91424005eea"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "abb6530bef54085b22ff08419fd55b95"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "de51097797370a3659afd8032e8559f7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e9ebaf6aaaec989040b01e2a436bf2ba"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "af4686ed68acb5dec0a1b8870fcf2483"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a01ef8db7ba3cacf73bdefedc0764cdf"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e67b4c24d90dc9781ae98961c21fd689"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "54da94fcbc11ede6302800bcebc45966"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "687caa52fda2bfc9c8af2485acc894d1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "79aa8b11daaca2d23cf7243f10816e77"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "29bc10242a03bea2e8c393b181d681a8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b20501350455afa203e72c819d591db2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2e9e575e9f2bad6f742511153555c15c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cf4c83fe9de50c07f7b10a6b008c7a0c"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "70cb736c0931f522c046f3cfc77cb364"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e6e479c082b1c598afdf31c26e46da19"
  },
  {
    "url": "timeline/index.html",
    "revision": "11218da9b2f1005a13f0f670c50a1ce1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "19baab9ad4952dea419755d9682f0bcc"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "49f3e3cf7daf386ae21e76cdd8fb5fe3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "93ae0ce255a2c6d514957f24895c1c3a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8b721b0b497f4cbabe61859d05b2baee"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d5bb87c4ea6a09be9704104025805504"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6ee7d0ce6826787690bca8cf76a1323a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4b2e510371428f1262eff26b6a7cf65e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4605f07d582963cd09afc3e94651aa21"
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
