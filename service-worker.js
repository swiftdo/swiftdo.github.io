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
    "revision": "95034e1bd6508cd8db7093936f93a9cd"
  },
  {
    "url": "about/app/index.html",
    "revision": "8e2af59273ed3c4106846d2cbb277bd9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b9c4cf9b9f96203a8637bf5232be3731"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "977a9bcf5ffa54e503a0ecc94b8abea1"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "947f3bcc4d2ed5bbe41f146aa7b18372"
  },
  {
    "url": "about/index/index.html",
    "revision": "712011003784b8207643a2d932f94de3"
  },
  {
    "url": "ai/index.html",
    "revision": "6e9ad43c62715ec97bc70b48b3a8be13"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a812418ef843e314d1617d8b0bf16e51"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f34f288f.js",
    "revision": "e32ae38706e904b30decd4a30eb3d2aa"
  },
  {
    "url": "assets/js/10.7f9aeb1b.js",
    "revision": "57b437322ff4bb881a560f33e5dadc7b"
  },
  {
    "url": "assets/js/100.33dce324.js",
    "revision": "20531861809a30f8bee368ef98eb9559"
  },
  {
    "url": "assets/js/101.d3f3bb7d.js",
    "revision": "e37170c55647ffed44a0b61f21b795db"
  },
  {
    "url": "assets/js/102.39296cfc.js",
    "revision": "d8b0bb49bb6bec83d87135e4a973f1bd"
  },
  {
    "url": "assets/js/103.2bb0f483.js",
    "revision": "1209cf3c2aa7cc34a8b64ff9cb160253"
  },
  {
    "url": "assets/js/11.7944bcf1.js",
    "revision": "e81e962cb37d3b314b5eb139fa80b411"
  },
  {
    "url": "assets/js/12.8a4ac429.js",
    "revision": "1972b21ae985326389ef46cc16cb4d00"
  },
  {
    "url": "assets/js/13.ae0c6859.js",
    "revision": "1c48b1f6c4b67bee0d3df9af1d34a3dc"
  },
  {
    "url": "assets/js/14.74d7af21.js",
    "revision": "184903de516290c78ce16051f4ecde09"
  },
  {
    "url": "assets/js/15.108cbf52.js",
    "revision": "250f07323fe11ffab702162454bef188"
  },
  {
    "url": "assets/js/16.fe2d1dcf.js",
    "revision": "8b948dd770513985158c82a73dd170f8"
  },
  {
    "url": "assets/js/17.760bc64a.js",
    "revision": "8d6f03cd0803baa3e94be6afb3ba677b"
  },
  {
    "url": "assets/js/18.683b47df.js",
    "revision": "c6c04dc1e19429a238e21f577ccdf654"
  },
  {
    "url": "assets/js/19.eed91a9f.js",
    "revision": "208948fc512d0501d7018c6aa73e2d26"
  },
  {
    "url": "assets/js/20.6da0533b.js",
    "revision": "8acbea7fbb27cf57ee1e1d98a499fdf2"
  },
  {
    "url": "assets/js/21.127464f7.js",
    "revision": "3e69a98c159bcbd4d03ddbb72bb50c75"
  },
  {
    "url": "assets/js/22.a7ddb56a.js",
    "revision": "ac52b5b837f6aa0b312ceb374bdc8e59"
  },
  {
    "url": "assets/js/23.1ccb7d2f.js",
    "revision": "c0b9c4d4a7e6b1d10b7343a1f8d1b1bc"
  },
  {
    "url": "assets/js/24.33f4ffea.js",
    "revision": "1ef2f6dab573ec9f60b67d6c2b30b87b"
  },
  {
    "url": "assets/js/25.08bafbe9.js",
    "revision": "b7afa76c6b02e74236ab605e1962d492"
  },
  {
    "url": "assets/js/26.ecb76212.js",
    "revision": "aec412912f0d392334e458efe58e99d3"
  },
  {
    "url": "assets/js/27.1286d258.js",
    "revision": "5f10205940f2afad2dbb6c32aa120c4c"
  },
  {
    "url": "assets/js/28.d2f3f7ae.js",
    "revision": "3fd274e9ac23310b0a22c6c970dc8f2a"
  },
  {
    "url": "assets/js/29.183c7fed.js",
    "revision": "7e3e2ce95baab2f81bbf4e742aca4065"
  },
  {
    "url": "assets/js/3.b17a0982.js",
    "revision": "8dfaaa4f8ae6d5af68ec1ba5733b1167"
  },
  {
    "url": "assets/js/30.cc59aec7.js",
    "revision": "f4f64b6696fea2ffb2e86627f9f4ec87"
  },
  {
    "url": "assets/js/31.43a21c08.js",
    "revision": "6341b4eccd0598ce98e400e01aaf8303"
  },
  {
    "url": "assets/js/32.8261a4ba.js",
    "revision": "07427675352c5e02f6fecfe54d208667"
  },
  {
    "url": "assets/js/33.12ca4d93.js",
    "revision": "7a05232e67c2b446843377e54e152157"
  },
  {
    "url": "assets/js/34.5ea29991.js",
    "revision": "76e32c897f92300e42813c0df298454a"
  },
  {
    "url": "assets/js/35.912f5908.js",
    "revision": "e21cafcdf09a877674b8738cee1bbb0b"
  },
  {
    "url": "assets/js/36.9c32a1af.js",
    "revision": "41aaa554d73f156a386e4c8ea3ffbdad"
  },
  {
    "url": "assets/js/37.5c613eb6.js",
    "revision": "17705bdcfbefb0f2051bb10cd57fbd90"
  },
  {
    "url": "assets/js/38.33596e3f.js",
    "revision": "f5c05211d5c2361e1d47422be2c2e320"
  },
  {
    "url": "assets/js/39.45fa6903.js",
    "revision": "33602fa071dcd428dd88898f05c5e23f"
  },
  {
    "url": "assets/js/4.e96cb0be.js",
    "revision": "06558f4bcf057bf6df6b6e501c558e32"
  },
  {
    "url": "assets/js/40.b2afb996.js",
    "revision": "bbbf83a4c5c70d9173f0c684751efab1"
  },
  {
    "url": "assets/js/41.50c623a0.js",
    "revision": "0b0a830501e41c56763ac2fb331a833a"
  },
  {
    "url": "assets/js/42.95a8dde7.js",
    "revision": "eded274159d276c29c0ea907aefd0ba0"
  },
  {
    "url": "assets/js/43.1798fe0e.js",
    "revision": "23eca48ea1eb273dc545071abee675dc"
  },
  {
    "url": "assets/js/44.75c5ae60.js",
    "revision": "aa5d4647829bc7fd9455b9ba54fa4008"
  },
  {
    "url": "assets/js/45.2d0a77cd.js",
    "revision": "8e455195e6ec24669dfc4c81ca3a1f53"
  },
  {
    "url": "assets/js/46.342d7f48.js",
    "revision": "7a318661cbf008891b18e7bc329e7528"
  },
  {
    "url": "assets/js/47.0b84adbe.js",
    "revision": "65269298107301634973cdd8b75de48d"
  },
  {
    "url": "assets/js/48.9f7813c5.js",
    "revision": "0542859e4b905b464db85f3b7b9ea28b"
  },
  {
    "url": "assets/js/49.de4a7230.js",
    "revision": "d360ec3746c4772a2aa8e5d42170fa6e"
  },
  {
    "url": "assets/js/5.f28bf91f.js",
    "revision": "b1e083468c4223e2bc38dceb99a12ea8"
  },
  {
    "url": "assets/js/50.578c988a.js",
    "revision": "b40097a4d547979d5a70f8b739a666af"
  },
  {
    "url": "assets/js/51.1acf3c81.js",
    "revision": "6b2f9c3b589f1568d49043969412c834"
  },
  {
    "url": "assets/js/52.4b20933a.js",
    "revision": "ef87e80b5961370974fc453daffddffa"
  },
  {
    "url": "assets/js/53.499756a1.js",
    "revision": "0b12ad8684f67025958298e7ce02da2a"
  },
  {
    "url": "assets/js/54.dccfa2ef.js",
    "revision": "838bc567113d14f94f64bde8c4f547c4"
  },
  {
    "url": "assets/js/55.02314522.js",
    "revision": "65ca426488c0115fb522b439c4f7388e"
  },
  {
    "url": "assets/js/56.8d317f41.js",
    "revision": "01fcd72acc1577c311c98398605978de"
  },
  {
    "url": "assets/js/57.fd05c4f5.js",
    "revision": "aca876461c9a1e8684ff46ef6cc7a60e"
  },
  {
    "url": "assets/js/58.87a06ab1.js",
    "revision": "26bf80628df4f71614155d872fed3af2"
  },
  {
    "url": "assets/js/59.64dfaea4.js",
    "revision": "3578a7191da32e6a061f9440c3a4cdd0"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.c6f2e3aa.js",
    "revision": "e2315b28775631289c155402f572c393"
  },
  {
    "url": "assets/js/61.bc6fb0ac.js",
    "revision": "a5933ab61f0bbcbf483ab936b77937fe"
  },
  {
    "url": "assets/js/62.7c38baf6.js",
    "revision": "8c1ee2cd82cc49a4f42f49340230e267"
  },
  {
    "url": "assets/js/63.2833a016.js",
    "revision": "c9bf9c3de95ef15cbdee6e06bf26cdec"
  },
  {
    "url": "assets/js/64.28e618ce.js",
    "revision": "eda45a8f4452d70055666507f529f0ea"
  },
  {
    "url": "assets/js/65.2ab32b9e.js",
    "revision": "4e47e8e58bcdd6794142d6ef8035fa4b"
  },
  {
    "url": "assets/js/66.2ec341fc.js",
    "revision": "da704f217deae37693ffb2706b134377"
  },
  {
    "url": "assets/js/67.1d179182.js",
    "revision": "fe79e0def442aec3f4503e194b2c9167"
  },
  {
    "url": "assets/js/68.e1d64583.js",
    "revision": "c8bbbe52007df33f53573029243e783a"
  },
  {
    "url": "assets/js/69.d2ff9396.js",
    "revision": "782b4be2c0f881025a23bd3b23e8d956"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.17378fca.js",
    "revision": "f5839ec3b7ea7f76cb7689012b84ad86"
  },
  {
    "url": "assets/js/71.fd5a0cc0.js",
    "revision": "6990aad067ae7e8180a0c9643ed67d2a"
  },
  {
    "url": "assets/js/72.f4ac67f5.js",
    "revision": "f602f7fbf0aca7038d3cddc7cdedd35c"
  },
  {
    "url": "assets/js/73.43a3bb71.js",
    "revision": "938b06f6fd28aa3d416cd5a8aa20a09a"
  },
  {
    "url": "assets/js/74.b83511f6.js",
    "revision": "ab95a72fb0eb04b5e44c7e5bb4abc2ed"
  },
  {
    "url": "assets/js/75.2179b430.js",
    "revision": "9ef45a08119556af702790535becafaa"
  },
  {
    "url": "assets/js/76.5f1f25a1.js",
    "revision": "50e738210c10f0136cab9a225645ecc9"
  },
  {
    "url": "assets/js/77.4f6922f6.js",
    "revision": "f0cfaae36156e2a453632e24406a26a9"
  },
  {
    "url": "assets/js/78.ad8e95c4.js",
    "revision": "938bbe581d187b16fea72eb608937c4e"
  },
  {
    "url": "assets/js/79.23d5cd91.js",
    "revision": "0109db532a8e897c0c65807f2816b675"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.eeaecc3d.js",
    "revision": "6817ea06d88285b4d37d169e3597384c"
  },
  {
    "url": "assets/js/81.7fc97aab.js",
    "revision": "3df2997f84d81ab9b904aaa781a539ed"
  },
  {
    "url": "assets/js/82.06a73c48.js",
    "revision": "78b6fa00dfac48618a4c9ebcbf46b7b9"
  },
  {
    "url": "assets/js/83.1ddade9c.js",
    "revision": "9327ce75d3e230d7565f530e8bb0ed37"
  },
  {
    "url": "assets/js/84.67fe6bf3.js",
    "revision": "84779fc2be6e96b80dd1e77478611639"
  },
  {
    "url": "assets/js/85.c23bc9e2.js",
    "revision": "9dd7c6ed51598c18c621119b36848ad7"
  },
  {
    "url": "assets/js/86.a9e348d1.js",
    "revision": "230dad1c99f2a4b02d9838605eca3a5c"
  },
  {
    "url": "assets/js/87.311f9f6b.js",
    "revision": "b880355fbd6c3700af675535a81d7920"
  },
  {
    "url": "assets/js/88.1146b701.js",
    "revision": "0cc4673ff37fadad4b42ee701c148cb6"
  },
  {
    "url": "assets/js/89.10b990ea.js",
    "revision": "ee420c3cbe9de71f5c89f07b2828699b"
  },
  {
    "url": "assets/js/9.b48c661c.js",
    "revision": "4b43ac2812bd0f8033ce0b1e25a2bc44"
  },
  {
    "url": "assets/js/90.28664d8e.js",
    "revision": "2c048707fc61a6977976e0b3040cf67c"
  },
  {
    "url": "assets/js/91.c295e09a.js",
    "revision": "631b20372fafd8c3a5fc37b2ea7f4291"
  },
  {
    "url": "assets/js/92.5088087f.js",
    "revision": "9b80191315bf316570d866e6af395f88"
  },
  {
    "url": "assets/js/93.753234da.js",
    "revision": "890d3e5623f3f7964fcd704b4231bd73"
  },
  {
    "url": "assets/js/94.d5deeccf.js",
    "revision": "68bc82775bffd004bc3375dfffa09809"
  },
  {
    "url": "assets/js/95.92803b73.js",
    "revision": "4fb1787aaf6030a13dd72fb07ed8bf91"
  },
  {
    "url": "assets/js/96.0d45e37e.js",
    "revision": "072cdb9ad75c114788f3f1966d07ef51"
  },
  {
    "url": "assets/js/97.4986dbc6.js",
    "revision": "09cbe16085c29b26321133c1c34de1a1"
  },
  {
    "url": "assets/js/98.abe35886.js",
    "revision": "309e4827a6734f286778291490cd5672"
  },
  {
    "url": "assets/js/99.77c2e777.js",
    "revision": "a65845ffc15e238cf964f642af9466d8"
  },
  {
    "url": "assets/js/app.23a0efb1.js",
    "revision": "6ad570faee70ff28ffddb1dca664cb90"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "f89fd2b66a939c35a117950bf408e0d3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "eed717ec70ed8a636e3b899426028d36"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "79d80d970632ed013f5cc7b877e1c632"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4a072a69334d369752b9c4e70dd5e525"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a6d5c070674501580052e6619ce52d28"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0c80ca40fb4500c90017c8ed0d75c96e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1978b64363319908f9f00dd501f6a050"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e8e9962dd1406b4fd311737cd8ffc3b0"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3d170be0cdada718cb1ff2136840639a"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d2f4f16b7fad1c18f84c94840b7a33ff"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9f5690bf86e9f96fa7038651764ec6f8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "86e100212fe43b1db86df7bda473a081"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a34e8e20e6f142873ae04bf1b8090e4b"
  },
  {
    "url": "book/index.html",
    "revision": "8399724acc871aa8f0e475a8ea7479cb"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a10e96b2ca1052f63c142a69dbf6dd48"
  },
  {
    "url": "categories/index.html",
    "revision": "2ff969e8235fbacba31b9149a5dd49f8"
  },
  {
    "url": "figma/index.html",
    "revision": "dbcf6d266ee3c4c1eee3a37ca3bc6cb5"
  },
  {
    "url": "flutter/index.html",
    "revision": "11e279bde769ab218cdff0b54a7759b5"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5cad291ce16110850bec83dad4bd0396"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "1fd5251631e02e1905636f2d56c85832"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0a70f026204816ff0e0e98a55a357049"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ae1107c1d5a924af15b176234fee703d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "843b636d8216257307ef7e65af2af9b1"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b9307ff6c4fad0d31deea97a300eaeab"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "dcd3190bf0635db749991396169d9a6a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "3c4d6a27d474e3ed2a4579295aee20d4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "8447d27a76798c764033273e8a4ec749"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8a35f509188c03a3d57762bedb7e936e"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "0e6b1710449e822763ec5c914f942f2c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e245bc8430b71d77b611b5bcd1eb93d4"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fe4b6f0f588fa50d9cf02165b7d700e8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0f2aae7863fded271751e1ac6251d41d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a78ec79f87b3c57eaec6993ffbb5159a"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "8c637971360a8da3b221762ae1561a4a"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0ea9c7e5909ef516a946c21308b3fb38"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "58c3278c9134151927e07bc1b8e588d2"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9bfd77a5ae5082e8fb4c5c96f4a4491e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "82860bfd8b24fb559eed9c1aad38472b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a47c991b35f5a2e710d08c8852170b7c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "cb9d12520e047ad6f1c7dc8decd00930"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ddf08ac2b0fee21e855a85972c909a9d"
  },
  {
    "url": "haskell/index.html",
    "revision": "ea2ebc455fba55b9a1d05e63cdd4aa64"
  },
  {
    "url": "index.html",
    "revision": "6d087c371ef14682e8206ed9046acd01"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ad4045d37098fe83a4a3a55e294d1414"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9befbfe1b3589753f1971b51f760280d"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b33ab14b063e154a888162c20a315678"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "578c27bb88ffe7db70014e78352d9c40"
  },
  {
    "url": "python/index.html",
    "revision": "dd7b1eeadede0fd6537b9db743150070"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "03535c1193e0cc5eb45693a192ce8076"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d470fd7cd7ad1629a0264375d329728e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "307b1999f8f747b4e97827e8cdca54a8"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "04221fd2beb33f2877c3fe976928e872"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "90d41061b0cffe43bdcdabe9e60c000f"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "4b22a986e253013763c10d50d653dc5d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "47cdcbead443bb8d693c64400bd0db48"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e296e7c27a8cb847bfb35bc93743dd24"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "4762c84b1b1ba0efd59791186e18520e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "0e05a6fd4a006c7a4c41e274276e7236"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "198fb22a253ef19a254339ad43659651"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e1bebe2a7f61c0655246f5ef3432c302"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9440d51b4c9844d442b7ddd8e2ec1f4e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c8ba8401d5d24a6757d7ea2758f98d88"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "63efd682242cd18a14e3ee69c139241c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "eac976dbcb3152eee9c40abca6c75152"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "85b7d37cab48b300bb2cb76fdf306c36"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d362488bded28f27576ecd671da1da2c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "51f68fca0855a95ffc13ba5ff2ded4e5"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "00ff585628f72354251eb2f8909f4251"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d6a3c72cbb2a3a326c1f50458daa8fd7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a11e6cbe8c86747f8ec23599576a5f76"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7563640eee8c98e358e5778027b79b90"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d03e11ca9865b97c6e038bee0c2d6506"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7a168dd4d515f510509d9bf2118e3785"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "02ce2d75d7679520dfd643de0b64fdc6"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "91a647d21a3e26c98c0ca1c259e8a7eb"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "5a92b6ff4cc9cbfd1e0a378bed49fd0d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "6907201c6242fc090e1211a712851dae"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "024ba4b0e7347ebda2d29ec0fc3ef81a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "719e4cf67b96f9de2feab21c61bc4890"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "48a3e30c257055b8d9e905486e8274b7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b5cb1fc4a3bbb936a3940d707aa97e8c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c080db0aaccaeee01f069ce6808ff3e9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bee5500b3a720c6002705fb4102d2da3"
  },
  {
    "url": "tag/index.html",
    "revision": "021dd06cf9c996ed1a087e5adc38157d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3719d92095b19ff7d489e05e19a5fb2c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d61fca3b93be961173e50fb3c615f237"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "0aae6bfc9cb24a5f6b5c82aebe03fd0e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f8ddd0f2368b5d44f5d330d6f70bf09b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cf52a47348960ba13db27b1f7d8408b3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "254e1137e01f4f4a475143c8c2aafb93"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c33e6f0e6ec5e0bcbab713fe6a1483ef"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "18716be1dc8e1a23ce7fd0712cf5b4fe"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b02a9c3dcdd1e7a2d0aa9e7ceff3e9ea"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "519360d3dec783111d018c6fafa056b1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e73e613de981b2db60f6edbf70070e0a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6d2b927c72ed4be8bd60c3bc88aefb67"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d7794f36eb048687262b62819562b394"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ca0071ee9a4d42672da7fa14816062ac"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d22819e308e4fc589ea3375deaacbce0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f8a95dc1fca3420752476e17bac627b6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b6d1c35c07643e79b583bc7db57f4998"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5b1c77ac5d686758e43a680d9855ceec"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "532eeb58e36964fa600b437761ea62cf"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ec83b76eef11c65db87f9b4d938f78d3"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "28dc60cc9fc26f86a59a46ad33642568"
  },
  {
    "url": "timeline/index.html",
    "revision": "43416450e6d974b0a36dff66406487d3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6e6bdc59223afe05e1768bb0e4c5397f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7588086e49d9bb05ef0d4b761343b72a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "885278f064836a0c289baa457c01d9c8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d9531a77840b646d49d5ea42eb708174"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bff26b4f6d9c8ce42dbd54bdd623c2d2"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "47fa516ac398de58a3ea232dfc63db1a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ab3ae12e0dc9e181272faf16979896ab"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a64f788d73607ef5e96406ae295d6538"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "df502bb6b278b584132a42a45dfa44f0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "de2bab647710189639a6427ea6726505"
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
