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
    "revision": "23717ac06ccf096bd0c5b74fef8bf264"
  },
  {
    "url": "about/app/index.html",
    "revision": "b0583221d8f947ded1c92af0b0da3f8a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f3875051f954e9ecaa3d0f03edd66476"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "29f2dfa9948596ccbd4c533c3695947d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "dd4c79ad47c230c2402c0fc4098d2a6f"
  },
  {
    "url": "about/index/index.html",
    "revision": "f9f11821c5b017fcda30487680d06f0d"
  },
  {
    "url": "ai/index.html",
    "revision": "69dff1dae708f7776730bdcb52dfe8fc"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "21a526e91d25c8735bc61d397322c22b"
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
    "url": "assets/js/100.dd336ca7.js",
    "revision": "6d4157c653b1f1824f472833e64730ef"
  },
  {
    "url": "assets/js/101.e013100c.js",
    "revision": "659a6556a4c21b3d74b550896d6b0a2f"
  },
  {
    "url": "assets/js/102.8c8fc700.js",
    "revision": "41f65470e3bfecd81951d32143ad837e"
  },
  {
    "url": "assets/js/103.935fd347.js",
    "revision": "9820e094236d92cf5a3c6b9ada3b4a25"
  },
  {
    "url": "assets/js/104.2932ea63.js",
    "revision": "2e29daaedb880b0edd30c5a45d5cbb67"
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
    "url": "assets/js/22.faddbb2c.js",
    "revision": "b3547d729995486a68a280cfa4ad3b4e"
  },
  {
    "url": "assets/js/23.3841365f.js",
    "revision": "0c0c3fcdaf92717a3dfd89f7341546b0"
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
    "url": "assets/js/59.72aca57f.js",
    "revision": "847e9e6e6f6fac4dc75929d056cd9c53"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.6bf4f4df.js",
    "revision": "a6911b0b273c4ff6f6c43854c29fa2cb"
  },
  {
    "url": "assets/js/61.e1a3d8b6.js",
    "revision": "94b6d606f6aa969bcde4e2c471772068"
  },
  {
    "url": "assets/js/62.51278deb.js",
    "revision": "e0c8ff8fc92e9adece790c4e9327405c"
  },
  {
    "url": "assets/js/63.3380f7c3.js",
    "revision": "64b7864d0edf7c4a67f226a10712e11d"
  },
  {
    "url": "assets/js/64.657d74e5.js",
    "revision": "48f51b7e7de6ebe34ba05423ef656158"
  },
  {
    "url": "assets/js/65.4e276ac9.js",
    "revision": "3e728acbfc06c6eb50941334bf1373ce"
  },
  {
    "url": "assets/js/66.93cef82a.js",
    "revision": "c54142c8c2ff1e15a89d8eb7dd241374"
  },
  {
    "url": "assets/js/67.2dc0f8c4.js",
    "revision": "78858bfbfcf9c53433f08295b1292376"
  },
  {
    "url": "assets/js/68.9920fe45.js",
    "revision": "7db6535787e6961fd3d1183050011d47"
  },
  {
    "url": "assets/js/69.cb2e1b13.js",
    "revision": "539e0ef1750180ddf83ae90675fe8174"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.7fb8d20e.js",
    "revision": "b4c9ef0515b9e8cea7c478041c3abbc7"
  },
  {
    "url": "assets/js/71.997fc5ea.js",
    "revision": "07b9ff32b57571e306520e907112ac07"
  },
  {
    "url": "assets/js/72.4a93b65b.js",
    "revision": "9e333787b21d98518035cb18854f3871"
  },
  {
    "url": "assets/js/73.e69f116e.js",
    "revision": "c8e81f8dbd3fffb030ec77ed9738f9d9"
  },
  {
    "url": "assets/js/74.fb09557d.js",
    "revision": "9de6a82def36c03247e13d7f39d15807"
  },
  {
    "url": "assets/js/75.6f91b74c.js",
    "revision": "f296297ea8b37788db2bb9e2ed461875"
  },
  {
    "url": "assets/js/76.ca5f96e8.js",
    "revision": "beeb67bc121b1e7efbd06fb9917b80a6"
  },
  {
    "url": "assets/js/77.7e101d3d.js",
    "revision": "bffcb2ee6202526be74c5a5b86a2795a"
  },
  {
    "url": "assets/js/78.13183a96.js",
    "revision": "dc2513759b201788594d1b17a058f912"
  },
  {
    "url": "assets/js/79.ed68bd0c.js",
    "revision": "3112725a6d5ed60907165ccaf1f74afe"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.73306767.js",
    "revision": "6bff2de109620083955e7cc24dfdb7f9"
  },
  {
    "url": "assets/js/81.5f5ba306.js",
    "revision": "abb6a6cc06df23f01938d170c4574e0c"
  },
  {
    "url": "assets/js/82.4598e440.js",
    "revision": "8ddde8f915a465d8c05c70ecb6a39d0a"
  },
  {
    "url": "assets/js/83.d990f8be.js",
    "revision": "7dce6b0063ae6b1fad92cbbbe28b2434"
  },
  {
    "url": "assets/js/84.c46f2dc4.js",
    "revision": "97e08c430aff1d647397406778ca5b7d"
  },
  {
    "url": "assets/js/85.65b07c8b.js",
    "revision": "b01436dc0d1287eebabd0340174130a5"
  },
  {
    "url": "assets/js/86.7adf122b.js",
    "revision": "413d2d8de8f100886f3d75cd5b31fa66"
  },
  {
    "url": "assets/js/87.22bcbcb9.js",
    "revision": "9bec1231683e47ab542223c44f08dd1a"
  },
  {
    "url": "assets/js/88.a108767c.js",
    "revision": "59c111fc96c0d610e63d265d11964ce7"
  },
  {
    "url": "assets/js/89.7ba27d7f.js",
    "revision": "0a6f092c44687e10409e751ae1e3cdcb"
  },
  {
    "url": "assets/js/9.21971363.js",
    "revision": "4f99ef5978b7e3ab6809377ec6f5a6d2"
  },
  {
    "url": "assets/js/90.0bd27389.js",
    "revision": "a6a8da01ab2a651da4c2511797521709"
  },
  {
    "url": "assets/js/91.7a043f49.js",
    "revision": "c4c728176719c8809c0301c3e405dfc2"
  },
  {
    "url": "assets/js/92.28f18aee.js",
    "revision": "a06ff3314460ae2908fb2a63ad22aee2"
  },
  {
    "url": "assets/js/93.943359eb.js",
    "revision": "d021101c89d424c83d0c6e68fc46a070"
  },
  {
    "url": "assets/js/94.50f928d3.js",
    "revision": "5a8898001cb7c23cbb68d3acd3d167e0"
  },
  {
    "url": "assets/js/95.d18b2e22.js",
    "revision": "123b551006df9e69e9353290b6d6a0f6"
  },
  {
    "url": "assets/js/96.0a438b5b.js",
    "revision": "f74d6234f2d260b22e187f8a034fdbbe"
  },
  {
    "url": "assets/js/97.3ab8429f.js",
    "revision": "cc5638a18b93d94a6967689516028da5"
  },
  {
    "url": "assets/js/98.ea0fc3d2.js",
    "revision": "c31dd9fb3a924df6c47b8a70a6883357"
  },
  {
    "url": "assets/js/99.e9791b01.js",
    "revision": "d801c18582d323d53bcb788d05eab094"
  },
  {
    "url": "assets/js/app.b59d4210.js",
    "revision": "e0508c29155cb646f139251e28cea513"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9ea5630756ab52f147a8d7d5c7ebc6d3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3ca461cff9f4b5c6be1b799418da6881"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9e2c342efe0b4b48c97ca5a314eee9a8"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f60feb467f5e0e76273a181fac676648"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "0b4638908233ba50f213b43891b0155e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "42081dff943dab693efba0b477be00d1"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4bc17ac5c7984dd7e19caf0e2b059f1a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "886ba67c3e757816838ff562ba537275"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c85d7063b29b2a4e2cb648230d6c408b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "95fd03a4b520e53002e240c5c4116a40"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "54b26a976a54fcca7a8615c7431ac2cf"
  },
  {
    "url": "basis/index/index.html",
    "revision": "531b582b4f9e2a1d9c6d47426172a403"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7765d0ac39b3cbaad817aee342d81fea"
  },
  {
    "url": "book/index.html",
    "revision": "8754fff7fad5bbaccbffaaa4f47198f2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8794576a490784990e752b5cbed20399"
  },
  {
    "url": "categories/index.html",
    "revision": "daaf178db0887521514e413f8a051ac5"
  },
  {
    "url": "figma/index.html",
    "revision": "cac53da24ca88409abfe0ce67f18b28a"
  },
  {
    "url": "flutter/index.html",
    "revision": "55b6058c3eeea8e9ba1feb99398a901f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b6eff7c6a079df77746a49746eeece07"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "03cfb2b9ba8427121f8a9408f7be0ce4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "04278fb4e3dd36b39f951bc6467c3b27"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fbdef98860348ec2d6412d3617083d1c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "adcf14e3e7adb9f2362859600f97f24e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "189d6d75b39fba49fe4282a912fec943"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "7fdf5ed9c7d8cc529ba605b4cdb1e47f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f51b60c44b45c9a2bb1e1d9368c089d6"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7f77b799100eb36abd7b9a96890d8b0b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a363441abc3aac0147efef10c3a90301"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "90a8d9f3e82d001622e428f16f5f2f06"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3070569121b0ad4f06db327ff6cf6dce"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "cb68680fdf6f000a85978c85d8c3c681"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "2f3cbc669cd79e57394a6fd6e8735409"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d7554f6471d2279d518f9a023ca3ffca"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ee323730a0b24b915fff3d1b0e5b5dbb"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e59e88dff009529def65df7ca1604d67"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "553d98fad4b08d9486d557429833bd0c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ddeb811c809f3c235bc4a5b158c9bd09"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ba3a3e5e523c9004679eb744d96c5a0c"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "820f3a114ef73918da98703f707c26aa"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c8607896449d53c1a3bd63192073bc8d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "c665a52af0c6c4d09e289fab5871866e"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "fd6e04269df1c3ece0e1139e108b37cb"
  },
  {
    "url": "haskell/index.html",
    "revision": "ce642859aa2e83bbcb53b9eb37f1b8d9"
  },
  {
    "url": "index.html",
    "revision": "332bb837728094b87a52bb2779a5d337"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "098f521531f91a72ea28859e9118886b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "af04715f75f847935baf09f92b22e034"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "dd457ce9e905f86a63f4594f22f8a941"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "75ba66ff6a39a76df9c8fc29f7e3d795"
  },
  {
    "url": "python/index.html",
    "revision": "5c4c28976264fd2610de02fc6e01c3d5"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b565b3714b8507de06d51c1a7c8c3835"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "93d527bf527680e84ecbc2e60289cba3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "885d826677ae212193c7ea1a02cbe177"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ea3811a0d4db827fa784cfb2f2b5e6cb"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b66b488d2044697017a062499626522d"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "05d9a72c6b16eb14c36394ddfe61d58d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "923b8938a5d55fedae63f959e95efd0e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e2ad0ae078ab99abc934a868a03b0d24"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "bbf59c628e54427386d2535ad1073ff8"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "019d2ce02e20fbbda7d5d44cdd038bc0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "be52eea205218ce0926f362cfa53b260"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "843d2cc9eb28f729f76fdb76cb0004b6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "64df95d2379bfa69378b5eb3591da108"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "cd2bcad0a215fdb13459389e02e8da99"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ebd2344abed9d72d6f6254cc50db5f75"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "60a5f4d1859ba0baa572f4f7c712f002"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8c77522b5dddf507076a864e3fc0aff7"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "bace1f520ec8d0080e4f0e9f22684f98"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c1f3a82e830d366121bba494e71a1d3d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "c3f6935e9cd3c465869bc7b9f203fc11"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "815a9b1af20b87ab223e759e6d751197"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c163e5a1be76e2df10dedd7ec0fadf40"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "63fe571ecf018a10d02c1d8192c4f1d1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "db726e61c63db36175c63b6d3a93807e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1f8e317ead25eea1d5fd23c922a9732d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "62475bfa1c248663d933c0ead884b5f1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "78ed6c17edc71bc936db5efccdaf6375"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "123d0292b02d127446075b4bc5e58ec3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3db32a851c0d1390fa33ab7bc259c0d3"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "57a3491e09146a77f81f2df8ce87d994"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "19427ca38a6e64bb5713eb318ecee9f2"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d49df945e15b04edea108d3dd1942e2e"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "aed9b059589b0ee1e0eb168e9338864d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fb6848c51f8f89850315c71b0c521410"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "78e4f0f135c2ad34fbf75a31fec0c830"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d0b4a5070f507dbff1fc2588cb6759d3"
  },
  {
    "url": "tag/index.html",
    "revision": "b439d2963c29ef49c0fe95f13ebd1f81"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "442ee162e5023a391e6f1ef570aaf66d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a89d43144667175898597a281194a558"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "8d98ddccccb43262849ab5cdfea7cfd8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1d07b2541f63f5302c74de76992092a5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cd6213a8731d4d4c50a94f34e89f74de"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e83aaa2a3c6019d566f92b0f40f20b79"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "1e42338ed3ec9ff5803b170072e0b0dc"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f0d2c6b0b6e6b10458b27f901e000b68"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "68a34f8bd7cd8367380c9800d86a29f9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "adf8971afec4633594620bb3f9e6bf99"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4ab3e7bc8d0eaa99553c3208882c62a5"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b4977cdf9b504b917ab399e73defa09a"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0effeb46b076b8fe8ee60bf04ae70a61"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "31fad521ba3332188f74e82d7bea4c8f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b168cfb9be5ec6c3b138719cf9e6db91"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "753214c022fd0cc4d2b7fcb0d46cf7b4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "cf79758005b5ca0a23e098fc44aea24e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a9e58703ec2261618ff05c586cff9df0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "05f80172feb41b7e47b6d7fe0f98bfd4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "16428743305d949926c4f9e8cc9245ae"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d8ce503507201ff9e2dbb7280e018361"
  },
  {
    "url": "timeline/index.html",
    "revision": "714c98f19e7161ce50b90c269336f255"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e04d1dd44eac66ccb53d4fc484fc9d23"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4892f7a61bcdd63bd2697f8e5bfb7fd0"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "44061d1d9e5659f63074fe423f1d1b55"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4ae1c5bfddb83f1bdfd9f8599bd7f521"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b41ae0edf72d251c9b0ad6f433139127"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9b05fbb27454c78ccc5104b5cc13f799"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "696a81ce6eb2cf97c5e0eafe10919b1c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d4af7a0025869dd5b99e1d18d632d31c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2d84569dbc3d6564ac2ee90ca0473111"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "eb3b15bb5b3e6c895d3c63ee13ac261c"
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
