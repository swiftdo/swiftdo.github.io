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
    "revision": "24c695780aa135f21c7fac2aa94ce62d"
  },
  {
    "url": "about/app/index.html",
    "revision": "a77c185f30c2785e260c8086e8b2e379"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "53bbaeac46cc67a877d1e996d412e00a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4318638ed6bb0929a55fc2412159c8bc"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "5c7796bee9543fd4416024118401a73a"
  },
  {
    "url": "about/index/index.html",
    "revision": "4095949144ce0ca3e940745202f42cf4"
  },
  {
    "url": "ai/index.html",
    "revision": "8c162d4cf9981591facf92c137c12a6d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7c1d1a33d71ebec7bb57fb174aa9a9e8"
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
    "url": "assets/js/100.94abf1e0.js",
    "revision": "53d76eae2148255250515bffdc6c943c"
  },
  {
    "url": "assets/js/101.0934a44b.js",
    "revision": "9d1aa04c659dfacf38ceaffcda3363fa"
  },
  {
    "url": "assets/js/102.6f77a7f2.js",
    "revision": "14758e8e069d7901f7663a85d0ed63e6"
  },
  {
    "url": "assets/js/11.e902afa2.js",
    "revision": "7c7afd22dc3b3d7a035b9856f91aa31f"
  },
  {
    "url": "assets/js/12.8951543a.js",
    "revision": "1b82321eb780a21caf4e530e006324d1"
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
    "url": "assets/js/54.1d2d29b0.js",
    "revision": "8d382cd526d841e367f9a6f6f0d6baeb"
  },
  {
    "url": "assets/js/55.6f58fe17.js",
    "revision": "39ff9ece3adfa04d101a5d7ccc2f0a92"
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
    "url": "assets/js/58.55ad9618.js",
    "revision": "d68c9bd5acb6cbef47ac8bc5e497b0db"
  },
  {
    "url": "assets/js/59.f1ec7906.js",
    "revision": "e19aed5e80b1feda25459c8fe4fbe7ad"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.2661e3d7.js",
    "revision": "8828e13c752c13e48de6dd1bea0bd398"
  },
  {
    "url": "assets/js/61.31e87875.js",
    "revision": "e85e8385bdb25ff5387063cd9aabef80"
  },
  {
    "url": "assets/js/62.4dada3e2.js",
    "revision": "f92ab338322a349c9f44a1c0e5918563"
  },
  {
    "url": "assets/js/63.e159ea77.js",
    "revision": "29057709dfb87dfdda51bb1a67810b58"
  },
  {
    "url": "assets/js/64.938e7ab4.js",
    "revision": "7f2e5325a0173f792994bdf89580ff88"
  },
  {
    "url": "assets/js/65.7868047a.js",
    "revision": "c967a9ffcdd5d2c7451aeb8c822088db"
  },
  {
    "url": "assets/js/66.8ab22f0e.js",
    "revision": "e6d26d67efc06a1c58d3b2373bd587d2"
  },
  {
    "url": "assets/js/67.002e2407.js",
    "revision": "c2cf7df3739b10a076475963c3e3be81"
  },
  {
    "url": "assets/js/68.c0829aed.js",
    "revision": "d7798b0c987fde6731332546de88d82b"
  },
  {
    "url": "assets/js/69.e5c85410.js",
    "revision": "6b2a9f0f4853501ef10aaebf45138e4b"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.793555b2.js",
    "revision": "afec0da002754f43186e55b9a3c95234"
  },
  {
    "url": "assets/js/71.c04e95f5.js",
    "revision": "80975cf7b69c81f64cfdc9d3eec3f1ea"
  },
  {
    "url": "assets/js/72.8a077af5.js",
    "revision": "b669d6a3c7459d23a0dc50a9781e752e"
  },
  {
    "url": "assets/js/73.3c6d1181.js",
    "revision": "0b2a4bff6becd1ea76616ba9fea4d234"
  },
  {
    "url": "assets/js/74.5a177587.js",
    "revision": "829cfd5d549300e81f9f5f3ed1608451"
  },
  {
    "url": "assets/js/75.3e4eee80.js",
    "revision": "881643bde7669764989288eb195841fc"
  },
  {
    "url": "assets/js/76.cd65d63c.js",
    "revision": "5ab5294fe3de3299d60ee5f1353c8be3"
  },
  {
    "url": "assets/js/77.d84cb97b.js",
    "revision": "9173dc6556d9fa9b0c2e18c6b0c74322"
  },
  {
    "url": "assets/js/78.52d40389.js",
    "revision": "84926a80f172799e8658e1492a739902"
  },
  {
    "url": "assets/js/79.53d7950b.js",
    "revision": "2b5d6ba50059059340ae93ade8c18df3"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.4d36a628.js",
    "revision": "2473f8ef9256aca2532c08fb52f39e2a"
  },
  {
    "url": "assets/js/81.47189fdf.js",
    "revision": "b20e2fd1361217fc11339393da4c0101"
  },
  {
    "url": "assets/js/82.8e69e9ac.js",
    "revision": "2c069e526f95ba252a3c8599c2819622"
  },
  {
    "url": "assets/js/83.da3560bc.js",
    "revision": "18f811fce7f19a116de7969177e52df4"
  },
  {
    "url": "assets/js/84.13519c0f.js",
    "revision": "68a7ed58acce01579fe5b2403b4e913f"
  },
  {
    "url": "assets/js/85.a6149513.js",
    "revision": "98fd88eb10a8b677d515d5604f6889a4"
  },
  {
    "url": "assets/js/86.f8cc9f7b.js",
    "revision": "2412817ae2bc43e69382c7817a919cae"
  },
  {
    "url": "assets/js/87.4e5c3b74.js",
    "revision": "523edd44fdc6924031ea783d78740acc"
  },
  {
    "url": "assets/js/88.7d449fba.js",
    "revision": "21f81cdf26fa2b7f7979a201d9fbb6ee"
  },
  {
    "url": "assets/js/89.bec50883.js",
    "revision": "1f1517d851e8e8db1772219430757815"
  },
  {
    "url": "assets/js/9.26dd41fe.js",
    "revision": "bae50f10460ca5a6a56a247d286e7b27"
  },
  {
    "url": "assets/js/90.6f7b45da.js",
    "revision": "0e898ad445e89178b79197664dbbcfa7"
  },
  {
    "url": "assets/js/91.d7d5dedd.js",
    "revision": "85f98e3381ad05f4394c210018158eee"
  },
  {
    "url": "assets/js/92.a2df71c3.js",
    "revision": "3b849af1a318aa59727ad7ca3075eedd"
  },
  {
    "url": "assets/js/93.c76e119a.js",
    "revision": "cffb4dd4af4acabd9f40427040671cbe"
  },
  {
    "url": "assets/js/94.30f6e7d6.js",
    "revision": "a5ae9fc6e0e519fba509d70d7061d482"
  },
  {
    "url": "assets/js/95.a597918f.js",
    "revision": "7e4e8350b9de9538a4533d6596550d53"
  },
  {
    "url": "assets/js/96.5bfa4625.js",
    "revision": "fb5cfcb4728dc6d1fe3bd4354ece5140"
  },
  {
    "url": "assets/js/97.5b8b4ef8.js",
    "revision": "8e26647fe8bbca508e39fa86b86a5b93"
  },
  {
    "url": "assets/js/98.054be8cc.js",
    "revision": "17d4901f52d72218e4efd78e34a5f6b2"
  },
  {
    "url": "assets/js/99.dfe19229.js",
    "revision": "997575bd2f81d100ded97d13cd790ce0"
  },
  {
    "url": "assets/js/app.30656816.js",
    "revision": "cc7f4af6ead2ded0f6109d761c13a5c9"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "bfe115a0f68249cfc7b3724d4ad5d3c4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ebd819be1583bb1da40333d0403acd21"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ec93e39f5a358c36805dad7a05bbae5c"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8425675467e608fb732749d3a41da375"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c5a71ca0afb0e293029e0ae408b04c9f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e6927a6bf4bb71fa809ced0d193e2b59"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8282928b6176567ac909b27b23472c68"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "cd448ad598c1e764374a0b2e0e3f4534"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8b8282d900614175238838dd4639bffc"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c86ec618147bf72d123a80b2d9e2523d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "42db522df37c1a9230014bb3daaa1644"
  },
  {
    "url": "basis/index/index.html",
    "revision": "3d181de7a60cf631d98067cac5d0583e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b7646cf129f0ab217dbafe4516768634"
  },
  {
    "url": "book/index.html",
    "revision": "d1c2ece760f907168c2ef1e7c29a783c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c0389a3bb308998ecdbf50fdbb25334d"
  },
  {
    "url": "categories/index.html",
    "revision": "9a66e50c75f24bb2618e0ed9f4e970ae"
  },
  {
    "url": "figma/index.html",
    "revision": "8f093d398e0ba77790f62f1ab2e47f45"
  },
  {
    "url": "flutter/index.html",
    "revision": "30b99bab4aa0981df3bca7311903dbe2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "09578e9613e92c03441aa251d8ea87fa"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2e8ee7038484c9121c2c2592f12bead0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "39b5588a37a253aa60d25c1b526467f8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0b67f430b41707b100f3bf742a641934"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "437dff0001de73e7448aabd0aeb59504"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c992d00756b92037215a13f2f4069f3f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "7ac39dfb4285c17caed3ebc685251c7c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6bef0a42dd0f8c8a99eed4399fa1c1cc"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "0cee3e8c12c8a9c8c017fa70701b290d"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2a536579bafb5a46383d073bc5abf7db"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a9b75e76169252f7221ff76bfb932ea7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5bed3ef40a6724737d427eabab6dc721"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "49173798bb11bdd77a20ddb97604b6e7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "d656f65ae8975a9ca465183a3914d577"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4ce943e2d8b8c995fb3a1054c5b4d3ca"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "18e1cc971106d179e8cfba68626ff249"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "7ce7e679d3ba089e6702e2c72dd65a53"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c67f11abb03d2d190818376673a4dd2a"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cac489b1bddbdf0015d1343cce3c7986"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "8a6a41633100b5f3ea5e4ddb86b196f7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "dd10b58107798b83ce248090442350e6"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a6e281f3c0cb4d3505a721cddf90a2ef"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "98ba46a527eb1d8d4dcf88372f6cd2dd"
  },
  {
    "url": "haskell/index.html",
    "revision": "6087c765b5d385b8cfe41c9d4b57e007"
  },
  {
    "url": "index.html",
    "revision": "18e4a8d50270341fc23b46e4f101c4f6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "de83e79650dc0f8579912cbd9cbfb2b2"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "25db03ef88c3a946dd2ac11e04c245a9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "0e8a15bb9ac6d022b88719671a87f363"
  },
  {
    "url": "python/index.html",
    "revision": "2e8390600097f4bdb3bb5c9d70bbec9c"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "5321d4973ec586ddc3e55376cb264273"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "68ea365d380307515b42112a4825f4ec"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b9ed4251af96115aeab65150e3529f90"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d7ffbc4bb91b556fd94c93a45a18f1d7"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5a39bfec5ce24eb40d4d6ac3dc743fac"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b571230fae256f9f1397b438ab2eef86"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e74135ee869dabf78e14e937d791a2af"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "608ffe50b0dcb8d43a9dfbaff854b9b0"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3bc5aacfce3aec0e616bcc6c88701353"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "cbd539358cfbb0a936fd114b15fa4aad"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5d1139e4238d6a6fee44cc95a7facda1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "df28f1cfdd552b7887456d00c8cd591b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a0d20606f35c9bf19530a2d011090c42"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6a50a72474eb5852783868b0e0a57b26"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "8c8df1c75846428278b4479b69f2134e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f26098fb7d1dbe26798cb41be6490895"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7c87366942b9e795df47c405e193f2e9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c8e940c4fd2fc7f38e2b52c73b0aefb4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "be1d8a8428914f691e2b02883c63d9eb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "69eb268e740f8c459d3b3a590f5a02f2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5efd12ed4864bccb1c7d863f297bd382"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b93e6e28176a403280489fed0f4c8d9a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7545964b83ce8a3cdb055e71c71a20f5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "65f50dd5496e7727a7e50840593f40f5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "168b4909a3e421668f647c2f444a8423"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2515c85a77240f5be475a9715d7f4333"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "41e96cbfc1c362d6b9590c4cbf057f3b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "ca1b3651c69968b9f7ab96658fb3e1b9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "79a3b8e887b55f5ece5fa3302d7a4129"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "be34eab0d51646789618645921eabfcf"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f1989e3f0a948143f97951decc67717b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "56a61d5ba66fd4ee3b5e12e7d928c4ac"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "731a42baee554adaf9b87ffd08bd69fd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4647f777551debe3a522fecb12c897bc"
  },
  {
    "url": "tag/index.html",
    "revision": "cdb4c9707192b296ce617cd213e82589"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b4122d551d9529f29744169b10cdca8c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a80d5c1bb3cf4187637ce3843217d91f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "650384ac6faedc5ba751010f5f7f42a2"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b60ab742aa96a1b68f8ce79fb5345e95"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4ec3ac0b9a156b0d56109f0ea951cd3b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "01a2d7bd896d8cd8f22e40502b393a69"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "27c1cbf4012b949a545001d01c53b403"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "cb06aa7d2297fe493f95cd843450d35f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5d98938303dca5376de56c336c536c20"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "52d0d48db918f824e6067b117f673dbe"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e243f6517f1ba43aef04129750d2ba5f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "0dcdea7162dcf87980a586074c0c9ef6"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7ebfb130e6c4e2bc79e18beb54aa1c8e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "493cf9499ee038dcfa417c8362de2870"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "93fb24a608b47284bf9348b81eb58ce9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d7180d72cb61b1d6ae4ea8203b348f70"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2d099e4ac41376e8cf0ceaae376b2258"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2d6b9c1833b8c75bc3c8d643e10eed43"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "97324768f49d29e2c99020ba19bac847"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2635ba261b5e65a187047220d4a7a06d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f56407bf059e12b7343c8bde21a1185f"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc8909eaff6ba358eb7f2e616142bafe"
  },
  {
    "url": "tools/git/index.html",
    "revision": "74c8714bffe0996583e85c6b6a62b03b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9a32db023847246877ed2e12f29cd4cf"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "52c890daceddf7966a4a1f8dfd688bbe"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6b1b18c946cb16e80eb913d9a61c6e93"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1e2f151e1f168664ae91eea56cca634b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3fcb004b53a98a1bf439a322b1cc42bc"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "439e93eb44014084b273790d45614ead"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6822c3e15a4700eb37e21ff5514a12a5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a1e5956478fb8095f85014bc13acb85d"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8df8b475ab8e7a165440c115e90adaae"
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
