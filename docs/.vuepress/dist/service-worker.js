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
    "revision": "ace7e4836ac1c59dcf14877737ef4ea6"
  },
  {
    "url": "about/app/index.html",
    "revision": "14dd1f5c25954060b62d09ff0c596a52"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0101abf3a3d63d662ecb023c22e485e7"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9a1cdf03c98c77ca9e52f9ed6a975a96"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "95e894d84720e2dc0637ce93fb3b991e"
  },
  {
    "url": "about/index/index.html",
    "revision": "42b47cb1996031febea6ef4a1bc14e15"
  },
  {
    "url": "ai/index.html",
    "revision": "39f56b0405fec86c45d12d037e2290c4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a5bb990586d91f440840d0ef623777dd"
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
    "url": "assets/js/1.4399cd74.js",
    "revision": "e32ae38706e904b30decd4a30eb3d2aa"
  },
  {
    "url": "assets/js/10.7f9aeb1b.js",
    "revision": "57b437322ff4bb881a560f33e5dadc7b"
  },
  {
    "url": "assets/js/100.de223812.js",
    "revision": "756d711daa5eb24a4b4b185ddaa56c17"
  },
  {
    "url": "assets/js/101.ccb22a13.js",
    "revision": "afb56df18be48f099ac5f3a56d59d656"
  },
  {
    "url": "assets/js/102.a52fda9e.js",
    "revision": "7b3eb81274e86b64effa38932af144b8"
  },
  {
    "url": "assets/js/103.d00d75d0.js",
    "revision": "9ba8c95ba3928818c834af6bd4462bc2"
  },
  {
    "url": "assets/js/104.e2a14b51.js",
    "revision": "4af1137e549da8c9ba1f6d2a7f1c901a"
  },
  {
    "url": "assets/js/105.a23b7c09.js",
    "revision": "773540b09dc58984afec8972912b4f83"
  },
  {
    "url": "assets/js/106.da136b16.js",
    "revision": "99be992d267a3b825ccd060fcae25de8"
  },
  {
    "url": "assets/js/107.0a0707c1.js",
    "revision": "0c735f99fe9e2b500629c0a468106db7"
  },
  {
    "url": "assets/js/108.c82f0a2e.js",
    "revision": "b49a39145f608ee606276ed1352ec02d"
  },
  {
    "url": "assets/js/109.029b3a5d.js",
    "revision": "0017079add32b1afd38d26d4ff349c96"
  },
  {
    "url": "assets/js/11.7944bcf1.js",
    "revision": "e81e962cb37d3b314b5eb139fa80b411"
  },
  {
    "url": "assets/js/110.50261536.js",
    "revision": "50b3d9ce05f1f8b0ce84f71369e7556d"
  },
  {
    "url": "assets/js/111.67a8e3fc.js",
    "revision": "d7128d60108fdc11989bf559b864b2e2"
  },
  {
    "url": "assets/js/112.bdafaf22.js",
    "revision": "92d004ccb377c329490a3e6c6d2dc748"
  },
  {
    "url": "assets/js/113.32cd3584.js",
    "revision": "93336023aa567083c5bfd8b547a61182"
  },
  {
    "url": "assets/js/114.8dc25528.js",
    "revision": "b25c3e7524085f8116671d11553201ad"
  },
  {
    "url": "assets/js/12.54fa7ec3.js",
    "revision": "3140313402e8706a065470cf83819a8e"
  },
  {
    "url": "assets/js/13.e7ac0ead.js",
    "revision": "4810982fe51cb12f784ed0ab5f13df67"
  },
  {
    "url": "assets/js/14.f030f7f3.js",
    "revision": "307eca0a734b3366044f0b36200753c3"
  },
  {
    "url": "assets/js/15.e025c68a.js",
    "revision": "a0ac98eb0dcd15d3e4e7d639f8eac7ef"
  },
  {
    "url": "assets/js/16.e2c0ac97.js",
    "revision": "7577d7b70c439a222cf638efa28f8543"
  },
  {
    "url": "assets/js/17.75741269.js",
    "revision": "b515198480e61f53a7dc3c9c682796bb"
  },
  {
    "url": "assets/js/18.42f3bdfd.js",
    "revision": "9129702adcf6201b5fd10f77faed9eef"
  },
  {
    "url": "assets/js/19.eed91a9f.js",
    "revision": "208948fc512d0501d7018c6aa73e2d26"
  },
  {
    "url": "assets/js/20.e87795fd.js",
    "revision": "5e34e04d159da7647df3ff3fe713ba39"
  },
  {
    "url": "assets/js/21.b3948449.js",
    "revision": "ef7d78f146e686318a05a110fc09313a"
  },
  {
    "url": "assets/js/22.344067f6.js",
    "revision": "007207b9a25c185a40bd0b8f2d0a398e"
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
    "url": "assets/js/26.afbfbdd4.js",
    "revision": "84a199f566046bc4657ccbf9c3af56f9"
  },
  {
    "url": "assets/js/27.1286d258.js",
    "revision": "5f10205940f2afad2dbb6c32aa120c4c"
  },
  {
    "url": "assets/js/28.40b573f7.js",
    "revision": "32312b934d85f1afdbae6739c860ce68"
  },
  {
    "url": "assets/js/29.183c7fed.js",
    "revision": "7e3e2ce95baab2f81bbf4e742aca4065"
  },
  {
    "url": "assets/js/3.668e4ee8.js",
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
    "url": "assets/js/32.71074b12.js",
    "revision": "b9cd7bbb368bc101589a69899e695c84"
  },
  {
    "url": "assets/js/33.f52cd980.js",
    "revision": "95fca3800dba9fa94421137c2b7dac73"
  },
  {
    "url": "assets/js/34.17d9babc.js",
    "revision": "b288715d5bfb880c172f47c9e08f35cd"
  },
  {
    "url": "assets/js/35.7517d76a.js",
    "revision": "56aad1a913517edd22d57d64a8925722"
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
    "url": "assets/js/38.f97bc0b2.js",
    "revision": "af85602c8ab05052cfae25c8662cb243"
  },
  {
    "url": "assets/js/39.8491da6d.js",
    "revision": "9ef67d62768cbea24b5c9d734a05227e"
  },
  {
    "url": "assets/js/4.1df20184.js",
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
    "url": "assets/js/42.a0a7c21b.js",
    "revision": "67627d091bd6356d2cf9c07e2f4928fd"
  },
  {
    "url": "assets/js/43.42536988.js",
    "revision": "74337425baa6cab957839729515d208e"
  },
  {
    "url": "assets/js/44.eff66ece.js",
    "revision": "93e6eecb31e24da6c937c1a6d12db508"
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
    "url": "assets/js/47.e3b62026.js",
    "revision": "756821f671d5692bc10c8fa4385088ee"
  },
  {
    "url": "assets/js/48.20afcee5.js",
    "revision": "cce4b48346e38fbadd716d52ee08bcae"
  },
  {
    "url": "assets/js/49.7c43692e.js",
    "revision": "c926a9612277ea28ea2c14a3115a6aab"
  },
  {
    "url": "assets/js/5.f2af34c5.js",
    "revision": "b1e083468c4223e2bc38dceb99a12ea8"
  },
  {
    "url": "assets/js/50.578c988a.js",
    "revision": "b40097a4d547979d5a70f8b739a666af"
  },
  {
    "url": "assets/js/51.f5cc2a2c.js",
    "revision": "95d9278bcc1d954d4d44e779baa9b806"
  },
  {
    "url": "assets/js/52.2ab558e1.js",
    "revision": "2bc43308d25b5193bcab16fd734f7801"
  },
  {
    "url": "assets/js/53.aa7b5313.js",
    "revision": "b1ba58f1663f59110bda07ecdaacc38a"
  },
  {
    "url": "assets/js/54.ce357159.js",
    "revision": "fada5f9c14642e1e7dcacd6ee45ea72a"
  },
  {
    "url": "assets/js/55.a500d9a3.js",
    "revision": "f66e139d73fff008ce7d17ff2920ae5b"
  },
  {
    "url": "assets/js/56.ff4d0cac.js",
    "revision": "7b7dde49eb6136f8afc6a9b94d733cf0"
  },
  {
    "url": "assets/js/57.480ea637.js",
    "revision": "0124ba6178a0288b75277c0938a7999b"
  },
  {
    "url": "assets/js/58.c66006fc.js",
    "revision": "218ce3505352e8ddb3ad670e720cdc27"
  },
  {
    "url": "assets/js/59.bc4bf97a.js",
    "revision": "ef8aeecdaecd428c644f97e28cc3288b"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.5a044bcd.js",
    "revision": "20c6d12687d7f46b9953f2864ca2353e"
  },
  {
    "url": "assets/js/61.7d368fc2.js",
    "revision": "4f4ddfd4cd451450605980a93f0163cb"
  },
  {
    "url": "assets/js/62.a6ea8b98.js",
    "revision": "a7e12a69fd18adeb3128d60cdd4d810b"
  },
  {
    "url": "assets/js/63.b8aa3581.js",
    "revision": "e6fc7d2d691f91a68f95817973c9ac94"
  },
  {
    "url": "assets/js/64.6faab53d.js",
    "revision": "bd0aa4216fc72ca9e2ea26c891de332b"
  },
  {
    "url": "assets/js/65.962f730e.js",
    "revision": "3021f923e2018ec198284751df558cd9"
  },
  {
    "url": "assets/js/66.f4139570.js",
    "revision": "98784f86f4fffd3675888534a9bec1e9"
  },
  {
    "url": "assets/js/67.70b28099.js",
    "revision": "bf50ba8d7c14f71781100a9b22dd0037"
  },
  {
    "url": "assets/js/68.d4c38d47.js",
    "revision": "a21db79364e23beebbaeed7087b48e84"
  },
  {
    "url": "assets/js/69.9052d098.js",
    "revision": "ecae00b3ec7f4ec396aae6a77c027a6b"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.3ae0b6a1.js",
    "revision": "4d33e94fc2cf3bb6ad4e6182b991df3f"
  },
  {
    "url": "assets/js/71.ae93cf2f.js",
    "revision": "868ff5ed52a3c0e80e635ecfe796e091"
  },
  {
    "url": "assets/js/72.c3f618cd.js",
    "revision": "d0e51eadd9ce573d57a2c6e07e1250c8"
  },
  {
    "url": "assets/js/73.281420e2.js",
    "revision": "7bff3d52333fdfad94ecb86adac40f03"
  },
  {
    "url": "assets/js/74.16686775.js",
    "revision": "918e9b1519148a963d6e1b35feecf61a"
  },
  {
    "url": "assets/js/75.2446d468.js",
    "revision": "3222bfb3f403e185cb1e806dc70125bc"
  },
  {
    "url": "assets/js/76.c89d70bb.js",
    "revision": "f763a7ba8da8d5cca523a90006b884a6"
  },
  {
    "url": "assets/js/77.783f220d.js",
    "revision": "ab07a8a4388e1e8aa846a0e8d8b05acc"
  },
  {
    "url": "assets/js/78.ed9b82b0.js",
    "revision": "c97f7d105ec42c7b573b164aef5b2387"
  },
  {
    "url": "assets/js/79.f8ee8715.js",
    "revision": "4014c1ca14acab0405f072abca30d382"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.c5162f72.js",
    "revision": "d2584120dbf4373c4cb964cd008af097"
  },
  {
    "url": "assets/js/81.e334078d.js",
    "revision": "29d0ee555b3afd10a1302d5b7cd95207"
  },
  {
    "url": "assets/js/82.bf15ed9a.js",
    "revision": "85826c03db5448be21611112e598f23e"
  },
  {
    "url": "assets/js/83.62511f1b.js",
    "revision": "48ed6379fa6dce5d3156f0ccd54cd98f"
  },
  {
    "url": "assets/js/84.59f9732d.js",
    "revision": "da902fe550b623fdb30980f87939ae8e"
  },
  {
    "url": "assets/js/85.3dcb10f2.js",
    "revision": "d708b2238ceaa62054cc3aa80fad5c08"
  },
  {
    "url": "assets/js/86.9451259d.js",
    "revision": "000db2a96ef2058d77e4b9a4161801ba"
  },
  {
    "url": "assets/js/87.174bfc14.js",
    "revision": "9b2656383d033dd64b990fd5556688e2"
  },
  {
    "url": "assets/js/88.23f0b362.js",
    "revision": "9e4c01ab8e097c7d9dadc4a30f747df4"
  },
  {
    "url": "assets/js/89.c8124f37.js",
    "revision": "d0c188f76d0b1ea4631137324f3b2ee8"
  },
  {
    "url": "assets/js/9.5014cf32.js",
    "revision": "d41b712c8cd19fd5b65e9d42f2270399"
  },
  {
    "url": "assets/js/90.1f2b67e2.js",
    "revision": "9e709880b1c06df41b1110439c67d041"
  },
  {
    "url": "assets/js/91.8528c3b7.js",
    "revision": "464b7f4c2138e9bb00e364c3bd464673"
  },
  {
    "url": "assets/js/92.fb045afe.js",
    "revision": "ece2cfdfe3c6cbcc8be5e7d80d45e282"
  },
  {
    "url": "assets/js/93.b7e30f44.js",
    "revision": "bb9fb01bf8720fb8db51f067756f4c56"
  },
  {
    "url": "assets/js/94.44559c55.js",
    "revision": "ae6a415efec24e69bb8990d21af0cff8"
  },
  {
    "url": "assets/js/95.73262756.js",
    "revision": "90d3b86522d15028f079c5ec07439c60"
  },
  {
    "url": "assets/js/96.25215091.js",
    "revision": "ff9340ae9d8a14299c0ed32e8e2cfbe8"
  },
  {
    "url": "assets/js/97.5e68c5dd.js",
    "revision": "80c434d80dc387f60b3dab41454a6fde"
  },
  {
    "url": "assets/js/98.e93985eb.js",
    "revision": "20c45364dfe02df2a6167f6f4285de48"
  },
  {
    "url": "assets/js/99.60be0a23.js",
    "revision": "c1ef364bdd4f005bfe3571fd1742b40e"
  },
  {
    "url": "assets/js/app.2dd3bab0.js",
    "revision": "d83551d9c8a47a3da6249fc9f411f495"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "7711f1a54bf92beb9915c0f7f6517946"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ddec840c3c4fa51480a7ab1e1ba70a44"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "13d620e8f96b94847834109803ef02b9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "47173956a80cff1fcd44c6f7b10a82a1"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "49d10f0e5dae7f408a4ecdb90a7a5280"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0dec96b147ab3522b8ec05c4800284a3"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0f2e2bf470cf1bba8167d41b7af9eeed"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a5494b6a133215a4f86406f42072c9bc"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b60d2a30b9e30c0ef8c9631b9d8c5ad4"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "dfaa45fe69c89fb8c0a997b371ade49e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4413260999b7ab3514c7fb2129a3a159"
  },
  {
    "url": "basis/index/index.html",
    "revision": "effa3b79bee1d5f12e0e5df32bb9722c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "913f203be6407662d41c9b054d282a81"
  },
  {
    "url": "book/index.html",
    "revision": "d3a6a6cf4265e67202b2352496bf9303"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "90d9a5af41b29871f870084cdd79d1d2"
  },
  {
    "url": "categories/index.html",
    "revision": "7253834283ab14d3bc2c27e3620a3a7c"
  },
  {
    "url": "figma/index.html",
    "revision": "26da0f752b61466dc79a2a4fd62a64cf"
  },
  {
    "url": "flutter/index.html",
    "revision": "a949183babcd3b291d1bef85c64dcf7e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8ae5fd136623d2b2fbf97717e9ef7e04"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "10015cb2fb884d5f7edb0e3aa15e9b0f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "72889d9e09d95184526505efcbeb60ca"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0dd1840bf9694813f65fb7620374211c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4dd8ace6c3de0d446946a6cfe3a6a6fd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ca1445c4cd243bf562e414f45c49a6ed"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "af2e0baa4820888da2b264fd940af8a0"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "07fc6dc653b2f47f200206fedd4b480d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "65e6e7d622b304d5f935328bd7810cbb"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8f6f5af4a71eee6f57a4ee51170afe85"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f27ed0250dfb1889ff5da05ddf838f25"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9da96d104f07552696e470ac7429d3db"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "5635a1e5fd4fbd529cc8ce3ad287175b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "abd3145d535b50ca6e3c7bfc4fbdf010"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "69e2babc001f94f2e0e01d8209f010e7"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "3fc718c25d1010e255e973282cb0ca16"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ab4a46d179e53ed641c09c9ae8a9cb6e"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "5185acd56e555e1e400771104107781c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ab9565d6b24c8ecfd998f6e70543b2d3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "d66c15b5934b3ca6ddc7b9bf9b01ae3c"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "0ff2e2a8b7d1c374564e1076b0314362"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5e56d4674cab0632dd6f9321d7f91328"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d251f587d4e78b04b72f40c4e7912178"
  },
  {
    "url": "haskell/index.html",
    "revision": "c818e12fb41e150652608610093b296a"
  },
  {
    "url": "index.html",
    "revision": "f99fcf0c1f5376efc4a0bee4004a35e5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "100297f7a076bcbbc6649b94e58b38c9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "27129faf2b92b17359b285dd1b30f803"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "65125b89d87458253dc26d09c2c675de"
  },
  {
    "url": "python/index.html",
    "revision": "03af75f8c642372face3be474b53a16a"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "9d00ab577a7e341257c3747e9a73af54"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2387cf6049f933640e843f3b1bbecd6e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "faaaa3dcb6c9615d95e6e12908a161e2"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "585e31755b181192abc8fe95f56bfb3c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "0c775e96f9afaf4a0345497919d2b38f"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e3270f29a03b92a953eb3486dad98c85"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "96b82ac16726631ee2db8d8b6f920eed"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f5625e0c50c7d542ca61b8583e01a487"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1617138c24497e7af842d23556bfa332"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c27309a3b2bb3e71eeb2851847070f64"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "104845d0f015d9facc4a72c7ef68c59c"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "aa5202cff2cdae98f6a0ca0ca63f360f"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "10c9b85e421dda04dd0d967508a33c87"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "d991dfabd5fb4c202f3341f585232f5c"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "34a657e9ed4756e1cef525a807c5dca4"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7133da4668ba5fe6ded6ab5dcb225b9d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2a39c39b1a9e5be8cceef60f041ccba8"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d1698f43a2ee483fb387e8bc8a360957"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "127380c0d223ed9627ba93ad0c452d21"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "a34adbb0fa4ec177f14544c0f391fa9d"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "17fba5a3a8290818d7a5e4f9da3cc55b"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "248020ddc02a3945fa7cb5776fb82beb"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1c94e55d975c2ca28b94083b6f177385"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c6a702c633458274dca171d4ecdd0542"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c7a8629e9cbe0af4c377242e01d47edc"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "746597f36f7595b3f3adfd482905744e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "e44ed719ea980e032a71b55728f78829"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "387bfe32affebc669e1b04cb70ca652f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d97ae24686c92d8a9fcd46a0f55f968f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "24a4175b2173d30d335a705623d1f04d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f6c73af9027c974b921c816a1b2f2a91"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3f4a84ec208d18ddabbf24d378cb2a97"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ca66e84adc5e581cbd94978a5612cd2c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "56757f5f2c60911734f9784f0a7522c7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "5723a32baf23585e1dcbb6ab125397c0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e3589327d7ac9e157f1c66561a1236e5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "25be4f05fb018f8b30e15a199bf76750"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a9c3419ec8d58bd23c416e9ccbd073d8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "8f2df9d74f02bc9ea4122660fb9bc363"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "96c33bef7e11161459ff3c5b3814b089"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ce4baf7a57a2c0073622d94b0a8a72fb"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "afeead641a5716fd3d733a460368bc13"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "23d660706e2e6ba35f33c89a25a0a3f5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f7d29c8e78c4c51bc0c78811d2f9f897"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "2efa30ed7967d0aabc207c5fd8969086"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6b4284e6a6fe82fae2421fe24c8efea6"
  },
  {
    "url": "tag/index.html",
    "revision": "5b0a6900dfe6d6333f5c99835f35dad9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4b042249b135922a8e3f7845778cfb09"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e2e75e45d63190800a5baf46a0297be2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "56db303815d4fd54ee3fc462cd59726f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "51090b362034322bfc5acb573c95b392"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e92fb4c27a16fa55e97be2d10458c2ea"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "11a62f81b7366cac682ec3d89a88489c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6fed9b41b988468e6fc53e4cd6dce3cd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bcccba42caec4275ddaaf82d0393604e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f8cb96fcbbae645859b78e5fc462ba4e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "aca253072a5aa1d843c11ad65a1c165c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "fa4d4bb36a1917f76a676dc9e31a8956"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "124a58e5fbe4acf6897a5d99f3a5b774"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "dddc2704143fbeec5beb449ffceafd9a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "adb138708b22ffbd7d34b3ca0750f5ba"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "67bc919b6f4b19339c41d30dbebefcf6"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "cc75a5a7d3cf7e402e279a61ac87d188"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1df891a4625bee78a0093c2ab7b80fec"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "01eee5c4a4cd6f22711a1b428efa0883"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "38984e4da009033a050c31474d19a2a1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "548dcd77ab5100325de274b502320fff"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4bdc763c8d73ebc04445e13cccf5aab6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fc9fb45b7de1d0b9155a03863c5baea9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "656940a571160d24ab48f22d71c6d7c4"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a00c1e3a20332578d1ae12e70d52d6a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "ae97f8de2dec2510898999fa6d29435d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1e43573d06a3ffb3e9da7dd733fa7d95"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "babfb60862cf2e3e02c49a7ffcbed489"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "71e6503e961df49fe9106a7d6fe042eb"
  },
  {
    "url": "tools/html/index.html",
    "revision": "11d55ecab5bad897ff284cd4729351fe"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "85c90e9a3f06e5112c621463cab57f82"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ffba8ec021c5e6d96fc3a51f884138a8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c01dc3a89ada56e0ddfc3d94efd9fe6a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1398cdac8b759220a9fe78aea7592267"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c8104167813c3e3fc41e161159c15408"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1242cd7d44db035e295a47072c31e98e"
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
