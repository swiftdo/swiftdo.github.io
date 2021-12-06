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
    "revision": "b1500a6270e5a6a1797bbe54c5c46e71"
  },
  {
    "url": "about/app/index.html",
    "revision": "d1e4e5897876d41d272b2f3bf7d2af22"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b78fa131b507c9feef3318a2285d858b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d0901f425f23bea0622e1e4367411164"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6353e98fa54c5c508fe2c077e5db88ee"
  },
  {
    "url": "about/index/index.html",
    "revision": "b97d3abcbe1e71317996e5eb497dd627"
  },
  {
    "url": "ai/index.html",
    "revision": "2bbe83f89b46bf193b9df2e580e8b15f"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7b438fae8bf28e1ba44265afe34f7561"
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
    "url": "assets/js/100.faafbee9.js",
    "revision": "381fce3adb7827a981a8f95d61c524f3"
  },
  {
    "url": "assets/js/101.4d427920.js",
    "revision": "5e9ef489b43b434565cd1f8b1f53ed23"
  },
  {
    "url": "assets/js/102.2694f2d3.js",
    "revision": "869e72d9bb66c1721562d7e4a6959348"
  },
  {
    "url": "assets/js/103.65900ab7.js",
    "revision": "656d054b5158dcf87de7bd21e02f08b9"
  },
  {
    "url": "assets/js/104.2932ea63.js",
    "revision": "2e29daaedb880b0edd30c5a45d5cbb67"
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
    "url": "assets/js/47.79068648.js",
    "revision": "b26181b34d3944ec6b2b4d0d10bc6236"
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
    "url": "assets/js/55.0726dc0d.js",
    "revision": "dc352079f3f67813b0799e945234ce64"
  },
  {
    "url": "assets/js/56.51c835bb.js",
    "revision": "e090e929374964418c461895cc1d9e56"
  },
  {
    "url": "assets/js/57.44db7ac7.js",
    "revision": "7db3e91e7187b9388b93d9974b8b064d"
  },
  {
    "url": "assets/js/58.35dfd08f.js",
    "revision": "c03312d3b63207c5cd2c8af5924ea37a"
  },
  {
    "url": "assets/js/59.89cf8974.js",
    "revision": "cf431b5f5372482dbf2bd339373c62a8"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.b0381648.js",
    "revision": "3ed9aaa9196ad9ea2f64c4e1f5d7356e"
  },
  {
    "url": "assets/js/61.e1a3d8b6.js",
    "revision": "94b6d606f6aa969bcde4e2c471772068"
  },
  {
    "url": "assets/js/62.769f459a.js",
    "revision": "f2baad319030536c9946a1fbcd3dfa44"
  },
  {
    "url": "assets/js/63.cf5d6224.js",
    "revision": "b09cb19f0e7a2c138b5cf59321e11367"
  },
  {
    "url": "assets/js/64.eb0deaf9.js",
    "revision": "ce07860aa7da54d060b61f3796ee9e1e"
  },
  {
    "url": "assets/js/65.e404641b.js",
    "revision": "6a08d86a39931bb2fd5da5a2def4a043"
  },
  {
    "url": "assets/js/66.b6524012.js",
    "revision": "d0b88c83490bd846d4350f19c8d06315"
  },
  {
    "url": "assets/js/67.45121175.js",
    "revision": "2b7491544d8a3a28f22f8edf1c07ef0f"
  },
  {
    "url": "assets/js/68.6c7b0a2e.js",
    "revision": "bb0452b148c138fa6a7d3a3b8c26dcf8"
  },
  {
    "url": "assets/js/69.e7d17a18.js",
    "revision": "febb1b83f9d892acf4dae49db077792f"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.dd63100f.js",
    "revision": "1a671a651a5d0dc838a2d00f83c67059"
  },
  {
    "url": "assets/js/71.b36459c5.js",
    "revision": "e0eeb93db2f9874a7a78c255f632d176"
  },
  {
    "url": "assets/js/72.67c38730.js",
    "revision": "4ae9828220c164727723d0d3c6c5019b"
  },
  {
    "url": "assets/js/73.1c9f7b8d.js",
    "revision": "bad3e7a307d7f57c98532ed454fdc60c"
  },
  {
    "url": "assets/js/74.d597f9e4.js",
    "revision": "0d45d238f50d6954441627989c335780"
  },
  {
    "url": "assets/js/75.4db68bf9.js",
    "revision": "4946ee40a68d0164e8513bdc4860f55a"
  },
  {
    "url": "assets/js/76.376bd26f.js",
    "revision": "c8d0717b312eb28e04f278dd97c402f6"
  },
  {
    "url": "assets/js/77.726c9397.js",
    "revision": "13ac84f9c48c2c6f31b34be0a1712926"
  },
  {
    "url": "assets/js/78.24a54cc1.js",
    "revision": "0db2d39a12810b61376317c4bc33a4cc"
  },
  {
    "url": "assets/js/79.28f5f277.js",
    "revision": "944bea2b40f5418e9061d323d1944918"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.e1c2af18.js",
    "revision": "f4563025b349a648dc6f4dbd8be092be"
  },
  {
    "url": "assets/js/81.c8735fc2.js",
    "revision": "f048e65352386e0f04d1a4dbc7a81586"
  },
  {
    "url": "assets/js/82.9ca801b2.js",
    "revision": "49d4dc0362e0e7bf5968c3e5e09f013f"
  },
  {
    "url": "assets/js/83.e1fdcdd6.js",
    "revision": "5f31e33bdad456b09f1e4bb4bef53fdb"
  },
  {
    "url": "assets/js/84.c557935c.js",
    "revision": "d57849b41d5295d247f9ae0f843ac79f"
  },
  {
    "url": "assets/js/85.9728061a.js",
    "revision": "990dc9cdbeb406f900d264ef07dc2bc7"
  },
  {
    "url": "assets/js/86.20baf49b.js",
    "revision": "02e9efba874ff3cafa501f65dcd4d39b"
  },
  {
    "url": "assets/js/87.839a382c.js",
    "revision": "c3464bd726c81b585c55716555a8b7e6"
  },
  {
    "url": "assets/js/88.4590deea.js",
    "revision": "db1cb9d4d32c050dc3082536d268ef2a"
  },
  {
    "url": "assets/js/89.d2b0fc67.js",
    "revision": "a50719766d3808cb5a511fe54fe4d280"
  },
  {
    "url": "assets/js/9.21971363.js",
    "revision": "4f99ef5978b7e3ab6809377ec6f5a6d2"
  },
  {
    "url": "assets/js/90.1d8eed00.js",
    "revision": "8f57b515e7834e040b53a2fcbfa3925c"
  },
  {
    "url": "assets/js/91.ada99872.js",
    "revision": "ed703a107e2d348e4f1318e38da47d51"
  },
  {
    "url": "assets/js/92.d68e71c4.js",
    "revision": "4c9d05cf34aebb137b5dc61714cc4869"
  },
  {
    "url": "assets/js/93.65062649.js",
    "revision": "bcb521549c05ea01009eedff8eeee5fc"
  },
  {
    "url": "assets/js/94.11f9ab93.js",
    "revision": "909463c2aeabd1ad73e2504ce6d2ecfe"
  },
  {
    "url": "assets/js/95.2d0a4612.js",
    "revision": "64c4e4c1fe9f03ac31ac9c37ad2e9a93"
  },
  {
    "url": "assets/js/96.7f08ecef.js",
    "revision": "bd729a883cdffa4ac7f2afd3b089addf"
  },
  {
    "url": "assets/js/97.80ab810e.js",
    "revision": "a90a89eb0a446f179667ddf7128ec56f"
  },
  {
    "url": "assets/js/98.c4a98090.js",
    "revision": "bad9bf4fddce66f896612f2f9bd81062"
  },
  {
    "url": "assets/js/99.af3f655c.js",
    "revision": "f5356b74c629dfa3d021067faa1c2d66"
  },
  {
    "url": "assets/js/app.dc3d185d.js",
    "revision": "ab66d291ba8c6bec99bee07ad9a9f3d6"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "637e8f6508301dde60966c3c42a16a3e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a8a9498c7f78b82c4846ced12fbfcc56"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "51284a949f562944977e9462fb876a04"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "a448008c8cb4fa9f468bea7a373110b9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c45f14e5135ceeeff79156adc49256a9"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6b619cbde02f8cb16aeda9f78be166e9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "335be8015db78dacb9e37197ce0a06f3"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ba502cfcf101abdf4d0c7d30d8b9ba5b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "1eab1d12e6a5b5e32e3d89c195d08600"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d5556f1e54b829e9905bcb797ce6545d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d199a7e65b853956039d9f46809a75c0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6158febf4fefcb73df779f83b07dff3e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2916d468ddc84c62d53dc822524aad6b"
  },
  {
    "url": "book/index.html",
    "revision": "327fef691c876f66ecefaf7dce86e440"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b310dba808328241c3c248786385c11a"
  },
  {
    "url": "categories/index.html",
    "revision": "414a70893ba68395b314e80d4ac7b69d"
  },
  {
    "url": "figma/index.html",
    "revision": "6f3857766c64c025d4e07f5a9795e456"
  },
  {
    "url": "flutter/index.html",
    "revision": "3acc2fecf193fda27dfd77c50e733a24"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "65be1af44d722eeac7d713487badd0c6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4995818adb082f5af66345d66c207542"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "2a15cb19571c936c65cf2664481819f0"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "030496469b42049d3bf4a8dba00832d4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4f297c3bd2879bf2ac90378f2d9bab1d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "99c90f383390540b468d835cd69b67b7"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8c9693998309de49c0cb3fc82f098860"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "2bbd940483fe84f7b6aa52554814b6e3"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2d98efc9ed1ddc9422fd2024ef7389aa"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "540e477fb6db7758a9f396926e7b0643"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a6bb7af6c97a6cf1a5b620831dd06f89"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "aa7b7aa8fb9a4a69ed276c477ca9f65d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c22f32a9153cc1d677198db45aeec05f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "86f19371e604bdbb1d610c0f22c9c9c1"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ea44255fc370fc1b30c537011900b7fb"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "9cd49a64ac33b1fdcf771acc09c4b594"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0b66eb85add6a983f37d95fb34568ffa"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "01dfa90ab6be9e37fd45eb9f0d62acd6"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ff594a44867b43f6370c360376902fa1"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "685bb25818fa2c0eb7ea1ba00bea4ed6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "38aae8edcc8b5d7c21e15dde40a86d9b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "668750737faf1e6527321f74f96b5dfe"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "aad2196d18c99f2641b7d3ccda394b3e"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a06af6e1aced1b7e4f067d37a9f06926"
  },
  {
    "url": "haskell/index.html",
    "revision": "ffb3cc53ad6ac923275537acd5b420af"
  },
  {
    "url": "index.html",
    "revision": "51790f9579c9eef4cd71934cb5bfcb50"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "215440ff36691a1112b6dcb9c042f6f9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "534baeb879a322bffcbe6e863fbbc64b"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a8a099ee04e0ebe8ddebb99c61b82133"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e70d1f83f375443601a6215f7395fdb9"
  },
  {
    "url": "python/index.html",
    "revision": "c1c2805796644f2869d6ad82091e18d0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d1b945a1fa4dda2b8905c54ae61fdd43"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "46d4ab012c88277f717d77c41f33a5ab"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0eb367e4b586791ab909da2d08f7cca0"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "68d75369a2ea71a1869a0af0a440807b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c4d65e6afd932189a3f06daa703fe61f"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "25de551f1100b30b0d8cd654630733a1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e8ae744cd1452bff1a3a16a1c2beeaa1"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5f8670d3cbdf62de54ca413726f11e69"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "80812a2fc8af5905941c60e3df757b0f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "94550b65345370464a262a66f6ef6f88"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "58c3efa6dcd4b921785fa15e03f6f949"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "53c707a4848eb8c2cbdb8884c257db0a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b0f2dbab6f203a3f48d571bfbc5995c5"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d9fc59c3ac2261b1c535a6b854a25061"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "808da02774b89c1b180477c772d1e469"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5c4428d8b159c6aaa20e0e72e76421d5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "72db45479985a8af610630a66f2866c6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6af85233c2f57ba25178db954023c22a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "22655f5fac5ec6848e8e2a2079282e45"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "183cda43387292db49796a18c018409f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "3c0fb0a9704770bab22a6d3a7e1a0ec2"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "63dd4bcd835b71c41c1fe7e3c15149bf"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fccbd21c756217acdcfa593e97cbcefb"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b0f75596a2f845efca18fa82532c418a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b56b3f87c86e908d14192e221850ebf8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "70036b1ecb06cb1e05ff0b76dda2b1cc"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2efa1803711953953d94842e866ccd30"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f411fe463ac6477c474d3cb83c6ef93e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "16cecd7c0ee83014a6a9c976c39ae96e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "14b2cb827cc6ff30b44bc9657a380e06"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "da211e71fe33146eaf93e604c06fc275"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "fa0cbfa968e65c77769ebdedef2c9474"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "4d5102da1eb1043dc06daf8364ec386e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "20cbab752f60a9940594e4cb712207c5"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "31be03b5b67d154fe42cf08b133eedcb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5feaff7f5e7bef50889c49b954500015"
  },
  {
    "url": "tag/index.html",
    "revision": "2c583be20c1ff87af34184b555ac8dbe"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "64b8bd6a07a880df0060029aae54e53a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "b8dc9411db73da9f6bf033e74cc34d28"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7d47ad01fad92a33c5dd4e1dd8fe3e93"
  },
  {
    "url": "tag/python/index.html",
    "revision": "35f25f2a844ffd84ff9018435622af3b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b7d8abe52cb75f9785e03213dcd17291"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5785b552d332c1215a45d591395735b1"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "18299b74a92f145407106cb53a76b658"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "1f3a9566a2adebed81a8d392fae856ab"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3be6322f5c301771f9eaa4d51704225b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0de9d8fac8ceef7704d6d9c58f2d4c54"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "041f642280102ed58c806b974963469f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b1cff3a5a81c0ed3d3a33a2406588410"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b8d8bc496242cf3c932fbd456d1c2b71"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2396388c73b3429d51f1a4ff5eb79bb1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "cf1e2215ef24db9154aa5580dda6258c"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e07954aa9223fe9150b9d3dd035f6528"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "08efb23a1b2b37ca86c7d115d59c76e0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4281da1a7ee8b410f2dd822da0dbc092"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "3ad180c8dd5ef545c9ebdea2dbce563f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "98160121c8a206064ffe6673748e83bd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "16351ae5907282c0de7f0097f7fc3bad"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b75b2d25d90cb5e6c5a92ba8f768790"
  },
  {
    "url": "tools/git/index.html",
    "revision": "608d5eeb653911ad22aaee0c88803000"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "abbe1810162319539883c09809b89165"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "13e430b11110fc16cca47a4a1677512e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "cdc4ffa9c5a621a6825df7c185077108"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "436c246d8592b3b5c86ee039a264a31c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "6e5b26de25ed8945da9746a5e46cbb5a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ec1528bbe880db92646006454ac9912c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "dd726c38e31e8eed87825476d04eb50f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "88e40ed435149a40bbfa808407954d1b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2590130b35df9dbb8d42bde97f93e43c"
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
