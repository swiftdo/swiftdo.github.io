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
    "revision": "7faef20c0954008459011a8fdcbdeb5b"
  },
  {
    "url": "about/app/index.html",
    "revision": "be23485591b84781fa406bab56c6a1ae"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4c543e6330a92ad782d534e4b81598f5"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "357b980b41ba320d68c02f1ab1f27d88"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "e58bd04933a2f8aaa7b9f455080c0f27"
  },
  {
    "url": "about/index/index.html",
    "revision": "cf8e552851f54ccfd5a5cbed3c8c4599"
  },
  {
    "url": "ai/index.html",
    "revision": "df98624737794834789976474f04c6ca"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "511ba26ea0d6e49c39dce1d715a2afb7"
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
    "url": "assets/js/13.3268f32e.js",
    "revision": "f391d6e04b0414b42c57a00e0f2d31e2"
  },
  {
    "url": "assets/js/14.bdfd9769.js",
    "revision": "5d285d82e2272da762083056d1aa75c0"
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
    "url": "assets/js/34.17d9babc.js",
    "revision": "b288715d5bfb880c172f47c9e08f35cd"
  },
  {
    "url": "assets/js/35.b8dc13da.js",
    "revision": "24fbae7f0945a367f98caca603afea23"
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
    "url": "assets/js/52.fdfd6226.js",
    "revision": "9a10e1f3b28b3e902af18713eed96263"
  },
  {
    "url": "assets/js/53.3143f7c8.js",
    "revision": "31c3812187454a5bada86e84e91264ef"
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
    "url": "assets/js/60.5bedb1d3.js",
    "revision": "574d3b6a2f8031d1e9e1b468093cba50"
  },
  {
    "url": "assets/js/61.3f44968e.js",
    "revision": "21407b32ae6c5c9e15f9a258e1f856b4"
  },
  {
    "url": "assets/js/62.4dada3e2.js",
    "revision": "f92ab338322a349c9f44a1c0e5918563"
  },
  {
    "url": "assets/js/63.16fee471.js",
    "revision": "3946220d1fd9ebe27c5ce523d39ed8ad"
  },
  {
    "url": "assets/js/64.f93929b8.js",
    "revision": "650b0255d137929ea19fda188c3a0fd2"
  },
  {
    "url": "assets/js/65.7a310346.js",
    "revision": "7b8ee73b8af8a7d94096e42d126d8848"
  },
  {
    "url": "assets/js/66.5084592d.js",
    "revision": "12b3523fdc72342b5a0a859bc9c42cc9"
  },
  {
    "url": "assets/js/67.30c86fd8.js",
    "revision": "ab59e7af52a1c45e294bf269863aa4e3"
  },
  {
    "url": "assets/js/68.595fa276.js",
    "revision": "02aed27bfc57b29781166b54685b99db"
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
    "url": "assets/js/87.6ff3af02.js",
    "revision": "43ab96c1c6886a9c34f2aff49790594f"
  },
  {
    "url": "assets/js/88.0420cc77.js",
    "revision": "e9c982b4fef382e784602a53164ce8a8"
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
    "url": "assets/js/91.2f72ff2b.js",
    "revision": "beec6a02262a951b6231a3a65175b7f1"
  },
  {
    "url": "assets/js/92.3f11b656.js",
    "revision": "3345db37eb90c45af0a2fe12b614bdb9"
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
    "url": "assets/js/97.0fb4c876.js",
    "revision": "b7b3fd76b4cc214c82fdfe8e271cb24d"
  },
  {
    "url": "assets/js/98.cd0c15ed.js",
    "revision": "da06c9829f05a90d4a10cbc233debb35"
  },
  {
    "url": "assets/js/99.77c2e777.js",
    "revision": "a65845ffc15e238cf964f642af9466d8"
  },
  {
    "url": "assets/js/app.3d59f503.js",
    "revision": "d87dec3d605fcbbbc8fabf6976be13e1"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "cd212a0b2ef9d96014ffc0470947ae4d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "cbdee33bca1fd28d16c527ed4af4011e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9aed3935c5cc02c68e658b9e3a41d52b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5f35170a3b299608acde19743732bd64"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a3285f2029afdd2d6e099ffaa25cf81e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2dfe27f8a1394f4e475f0c711f67972b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "df2c3765e1ec249290741408314e3132"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "29343f4436947ed515943e97c1cb443b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "db130bba624e64daa129cea656866195"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8cb9bec98df240297072bf9bdef760cf"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "cb1fc3f69b0711b2477059ee996d4517"
  },
  {
    "url": "basis/index/index.html",
    "revision": "44486e6891d459d03f8ce391d2c791bb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5b6d9761b7337a26285d65d33488fc2f"
  },
  {
    "url": "book/index.html",
    "revision": "e4b0580c9f4f6887e60cb1970ddb2127"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5b141775ff49261ffcc5b22bfe7c5f26"
  },
  {
    "url": "categories/index.html",
    "revision": "db8a150c21dfd8871e9c5ebf31d52f40"
  },
  {
    "url": "figma/index.html",
    "revision": "c61097a5315f2b166b31e56aca0d515a"
  },
  {
    "url": "flutter/index.html",
    "revision": "3b3253c33b34efed93bca6e2fa0b4d03"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7f1030a1645e65a9fc1b1f13bd4d062a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "e7411766dbe977aae5a45cb165330b4b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "8d3b39b08a3c32cdd822d03b51eba0d2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f3e15625d632248c13b374e465c04a3e"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fd4f75bd8da0dd22ea3054cb62e6de71"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "753ef7c165c603e9a4b8eaca93b1f62e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "407092ead1ba0e8782d827fbd6033ac3"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "291490ab66f80fa60ad45b4ee511de9d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "09d058bb73d1dbb1de698f06f3804f3e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1b42153bb86b7f16ebedd3a5d390e079"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "680e9f5d7b782874b8855c7f12327465"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5d7a5a6de4d4f610b659acf36108f37c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "382e4cbede5cdae56a6baf32a7587983"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "79a3b4b337e4607c1568f24d81a8df0d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ae1f45be31e2ac1df1403bab07a81b9e"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7b4974cff56b4f6ef48494baa2dfa7c1"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6b035f1b07b14a4b41f7ef9b7683aca7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "15a2487e1cc61b15110bef5a111d59cc"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e96ff78368f5b4678fbb7961e739f8b5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "53e0d48bca16fd0e008c11f051544277"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "0d07393686ef003940086ae8f6e10948"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "c24197e587ef68155dbff4bf5c79eda5"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "16c6788558d0815a49fcb2a425a96f53"
  },
  {
    "url": "haskell/index.html",
    "revision": "b452d2684327c3e472100db67c8528f7"
  },
  {
    "url": "index.html",
    "revision": "fd71c7f7a5637d5154c3971b3fccecfc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d4c538a74d5677a1c779b74508ec501a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "1469301c40ed336bb56e1de5faf48007"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3cabfc2af03abdcff3d71e9e24658b0a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5fbf887bfaff1413a44d7eaeceb95b32"
  },
  {
    "url": "python/index.html",
    "revision": "316c8e84a856bb988ca3ebb327a812b7"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1111687587881f45525aa26b12d1837c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3e2c7db9cac01b98e9fa7018286851fd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ec4837ab3b201257a2faf1ee0d491c9e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "17170b108b9afe960154cf06a3ee7bc0"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "69cba4a37f5114814c0fc99f777f8a6a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "8b638938b994b0897533c30171364901"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "2046223de75e5ce437dec946ac62730a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "fcfe1e990a0d3f6637017749bb6cfd5b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9aafcdda71d4231325f395790c7191e7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "31ba834ce1ce700b97beb3250a7591bf"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7e7aa579be0daa8cf6f43598392ffae1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "62b1025b055a81c3f038b79502b322f9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ab4518099b0dad486297707fb6e691c6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bed380c511fcd596ac9ecb41a258c49d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "cf9a845fd6648c95f3df23dbe8d5997a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "dcfb990601c717a9815529accfc926c6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dfd40e97cfc118f99f2e023a527c7744"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f0d8019a5860272202b72576b65e139f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d3db8363613b3db5a7552fd866ea76a9"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "dc4789cfb3d0ac96caf0e641873bbbac"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "82c34fced36a2e195b594af975e6080c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "dbdc33b7dd01b01b1d26512f1fedde1f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "88b6346e3c5e80854b66a4e3f1a960dd"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "84060213c0074b269d86b333d8d529f3"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "691cfa6294a9bc6a5d5fef902eb400e6"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b0a70cce232c03c52bb0b7af6f8b6620"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f07de532c86bf5315c9d7d7638a1646f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "0e978bb3e8ea21ba5a7227f1a96f1173"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0962dd753c54bba4b2ec1da69903bc16"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "ada262c7310eb84a9dab71a33242d165"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "19619e441fc66fbdd691a8a6a86b5019"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "75682d8746bd10e77ee4531d532fd1e9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "af7d93d55417d89675aa14492c232409"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e636f423913b66d6f380911618994718"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9aefe39070fc0ceeee423586f9203462"
  },
  {
    "url": "tag/index.html",
    "revision": "c9a2fb4f8a91ec21757f81a434fcca71"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e498f2d6d1cb8e715e9bfb4dd784383a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "42d5ae443d5103978b892156f808d7a1"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "da184b205e14cb9e11dd48bb38aaee29"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c8c667ed9b00df3ff46f3c946f6514da"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e4831ba299497a98b7961f5bbdbb612e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ab3de5d9aba119e12f1ed5becfc0196c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "28dadc6a39986df5b6ef1e3069e1c8dc"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6d09bfbea293c728150e2ccac80383ae"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "35caeab2831245d757218eea2bad1180"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "282d55c07d5e6bca0fd294a657d84fa3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5b10900bcc974d781592c15daa0df45f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "a10895e2c8fb4b93a72fe33f3214390e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4b1dd44e57c12d16dfaf031e7329239c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c54be6cc872b112f321b496497729b94"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7207769d4789b72bac799e374b537944"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8850b74f0148ead408705088b4298822"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e487519935630b6f79fceb4f99459cf8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9b08ebdbab1d736cbaba372543885cc2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c427d2a90342278afcfcc9924cdae1f8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "673eff4a185f65153472c7e47c03d99b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4ff97d70997555e14ef28b5990f254c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "6fe24df1804039d7fcec00718acd7539"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f39c31b00f101ebc85b6a1401a1f69c4"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "45df5bf82a8ceecba88964d65f55379e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c2d72ec611b6680aa3045626cfdb015e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b08a560553c8f393c752a9df42b51b70"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "16fecf9298035bc4ca3ee2016a3a87bd"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fc46f24eac1a11a3e0b3b49632cbc939"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "0475354e0774ff3410123f8cf218743b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2a9f9933773ea14e720db42712d0eeda"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "07706f16cdf9238a5ee819e3564d9d30"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9daf7c3e3824e6e7fe59abe4cf6ba7ef"
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
