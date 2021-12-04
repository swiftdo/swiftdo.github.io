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
    "revision": "649a327996bb7b299f1a2f581e35e8e8"
  },
  {
    "url": "about/app/index.html",
    "revision": "db6ea98b8cbaf2dac9a7793bf1cdcb50"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "12fd4c5953e4b6364dac13545f0bf348"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "eac05374426bd002cbaa09dbb33d0d6e"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "273f6709a6dbecc745ae906176716623"
  },
  {
    "url": "about/index/index.html",
    "revision": "af568cc4716594d8b11a3dba38eed0d7"
  },
  {
    "url": "ai/index.html",
    "revision": "093e097eeae2a5cd02221a2c4306b112"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "60c4ac72d7d0bc3906907264194a70ef"
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
    "url": "assets/js/100.c4b42078.js",
    "revision": "462de473e06c628bd39cfef245610304"
  },
  {
    "url": "assets/js/101.629abe36.js",
    "revision": "4a0622cb5f0980da1820a6638be3f7a5"
  },
  {
    "url": "assets/js/102.9521af96.js",
    "revision": "957d9eff770bb26bdd8bb69f2e4e8503"
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
    "url": "assets/js/61.3f44968e.js",
    "revision": "21407b32ae6c5c9e15f9a258e1f856b4"
  },
  {
    "url": "assets/js/62.7c38baf6.js",
    "revision": "8c1ee2cd82cc49a4f42f49340230e267"
  },
  {
    "url": "assets/js/63.ac9240f8.js",
    "revision": "22648ff247e0b71479aaa49dd12f8e98"
  },
  {
    "url": "assets/js/64.f93929b8.js",
    "revision": "650b0255d137929ea19fda188c3a0fd2"
  },
  {
    "url": "assets/js/65.05d2d67f.js",
    "revision": "6e51c6e1f0a6f0ba52e3ce9e58a6cc86"
  },
  {
    "url": "assets/js/66.2ec341fc.js",
    "revision": "da704f217deae37693ffb2706b134377"
  },
  {
    "url": "assets/js/67.a6b611e6.js",
    "revision": "9ed5cbba78aa96d1f97a18e24dd9ee2d"
  },
  {
    "url": "assets/js/68.e1d64583.js",
    "revision": "c8bbbe52007df33f53573029243e783a"
  },
  {
    "url": "assets/js/69.4101be43.js",
    "revision": "71e00711a503b4a849f6d1d713271b38"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.463fa910.js",
    "revision": "c371f362ebdb9d2830dbc78ebf2b5416"
  },
  {
    "url": "assets/js/71.caf39533.js",
    "revision": "0044006ac7b8fdc18224f28a8c5167b8"
  },
  {
    "url": "assets/js/72.b25830d0.js",
    "revision": "dc7d702274ab5217bc7bd03e02547294"
  },
  {
    "url": "assets/js/73.2fd679b3.js",
    "revision": "fdcdb65ce92dae513b24bf594b18baa8"
  },
  {
    "url": "assets/js/74.de1a02de.js",
    "revision": "4ea124686ada0a6d3d312ea79ecd0d07"
  },
  {
    "url": "assets/js/75.ec289f9a.js",
    "revision": "03d8e3d7f82ee12d0e64f55572b28740"
  },
  {
    "url": "assets/js/76.2ee193a6.js",
    "revision": "7752d9d1647fdfaa1c46dead042e2588"
  },
  {
    "url": "assets/js/77.b833e05b.js",
    "revision": "e05e1fd8d2459b729c2cae5ec2da77e4"
  },
  {
    "url": "assets/js/78.b26f4bba.js",
    "revision": "a48972944ded537c766e33ac38c41660"
  },
  {
    "url": "assets/js/79.5da4a394.js",
    "revision": "514ee75d0531d928665d5a1beabdce2b"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.26029e92.js",
    "revision": "d967e94f4a87428a3f0d3b73e02b452b"
  },
  {
    "url": "assets/js/81.abb15618.js",
    "revision": "0eb0860888ca0c83ceef4b5f2f85dd44"
  },
  {
    "url": "assets/js/82.8b355874.js",
    "revision": "114f636a6dd766b207d2df8b60546ba2"
  },
  {
    "url": "assets/js/83.0080d174.js",
    "revision": "e6280cef90d6d1db679e7e8e0b1706c8"
  },
  {
    "url": "assets/js/84.93d12331.js",
    "revision": "8ef7dde230ca690f68f2535fe94a8b7e"
  },
  {
    "url": "assets/js/85.b87247ea.js",
    "revision": "adf070aa556a7209382bbe3a72d3a450"
  },
  {
    "url": "assets/js/86.33794342.js",
    "revision": "77b4d9e4f40d3ef59b49883165a34d73"
  },
  {
    "url": "assets/js/87.8cbfcb55.js",
    "revision": "b7f86981c94c983025720a84d76e8269"
  },
  {
    "url": "assets/js/88.0420cc77.js",
    "revision": "e9c982b4fef382e784602a53164ce8a8"
  },
  {
    "url": "assets/js/89.45de4ccf.js",
    "revision": "19f76521d9fa1a47aadbcb1666abb831"
  },
  {
    "url": "assets/js/9.b48c661c.js",
    "revision": "4b43ac2812bd0f8033ce0b1e25a2bc44"
  },
  {
    "url": "assets/js/90.ca18804f.js",
    "revision": "edd46cebbad935ad6b95d1957358fb76"
  },
  {
    "url": "assets/js/91.b4b2f0aa.js",
    "revision": "5ff74aa4c4a63e951535eec6214ea896"
  },
  {
    "url": "assets/js/92.3f11b656.js",
    "revision": "3345db37eb90c45af0a2fe12b614bdb9"
  },
  {
    "url": "assets/js/93.f8ecf2ba.js",
    "revision": "3c50e2b7b8fd0777b732dc2eaf2f11c0"
  },
  {
    "url": "assets/js/94.d5deeccf.js",
    "revision": "68bc82775bffd004bc3375dfffa09809"
  },
  {
    "url": "assets/js/95.4f4aed33.js",
    "revision": "2546195d5f6d1da59ce4fe281e981a71"
  },
  {
    "url": "assets/js/96.d5484ca1.js",
    "revision": "0e3f218c6f1d66386e0bdf2ad0421773"
  },
  {
    "url": "assets/js/97.25908aec.js",
    "revision": "0e71fa3dac2c821cd54e385e3e0b2341"
  },
  {
    "url": "assets/js/98.cd0c15ed.js",
    "revision": "da06c9829f05a90d4a10cbc233debb35"
  },
  {
    "url": "assets/js/99.37075311.js",
    "revision": "ac41b3164ab2eb8c4e9f6af731276ddf"
  },
  {
    "url": "assets/js/app.5bdb9daf.js",
    "revision": "e89161f14fc92a30dc61413bc112c854"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "2a03507337c57560c453f87e747aedfc"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ccd024121cf7a4b1a33bfde7321fd720"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1a52b752cf2de2840c5e4ba760477f7b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d108a2135fa26dfd6112a1367ffab382"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f5a8b63c38bc42e4b6ce3f4c5abac8ed"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4f88f07427e2372f9aebcc6f9edf4cbe"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "35bf75b176d4750508b907c50291df71"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4e4d84247ec363252e375ddde3caad5e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "93fafb0ebab97a98372263e35cf7ca8c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "bf3a5a8abccfbba376f91b7402d5c71d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3943ed7027ad4d7528fa00c4874590a8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ac0b4ab4c5c91798f6c38c88bd0dae4d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "6dd4949a5e0c97dcc2b306eceaa2a308"
  },
  {
    "url": "book/index.html",
    "revision": "288b61c035b413f4b4303680d7059eef"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "68d6c14f18a70ba0826b511db73b7054"
  },
  {
    "url": "categories/index.html",
    "revision": "0a7c9a64e17bf48802545328c1cb6b6d"
  },
  {
    "url": "figma/index.html",
    "revision": "c291b037ae096bc903e9b4b4a4f3123f"
  },
  {
    "url": "flutter/index.html",
    "revision": "87bae7548760a55a58ea129eb8de1b09"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5fcee4d93034aec2f88f8cc251aa44e6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "dc089e29cbe5fb8601b12003e9cbe488"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e8b7c03852b773a760df364b275fd651"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d0ceb5e8ffdd1a1470c92222502236f5"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "bbe0ea2bf1527d6f13c6ce6387bd9673"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8990abdceabdd498f7eb7f7ede1d3162"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "75e12647aab3b5095a0a77ffcf2d6849"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "73d1fd9b775e2b5e0d9e9d50dc1680b4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ce19ce6e44e9ba2ae2cbd0653730770c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ea82cbf127a5bb0896a64d25fafd5dd2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8396f8c2a0f23baf5f53d131f61b7d5a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "4832952efe1479225c830ea177323ef0"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "807fff82d5dfcc4c7beed046cbb339f6"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "9dbae2b3b913901e918e539ab38ce38e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e862a28b6ea425043e846f0782d847eb"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a4a523d86c5b495da6ee7ddd42c0cf9a"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ea891ae78f19e4a680e374b2dc47b982"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "8adca4799145329533381338a10fe8ef"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "51878e5dea28b2fdc12fe417b000a21a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "7e4efe208235e89b6a391ab3f6e89550"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d26fbdcbbc4ec994a55a98b02c85346c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "14197f3b7d99541e3bca27543c901e72"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a8b53ac1be15e538dbe30ddedfe08962"
  },
  {
    "url": "haskell/index.html",
    "revision": "605db914dbf70b99df1f9d9a25b53b4b"
  },
  {
    "url": "index.html",
    "revision": "29bfe9b8be09cadd9827b90fecc97e6f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "6ec2ea77637aa6f8793ace59b56fe640"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "febe52615b9a8f31f1cae0d950095066"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "604ca60348389ed80f2455e0fb474fd7"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "25da7926ea4801ffbc35dbd0d7a719a2"
  },
  {
    "url": "python/index.html",
    "revision": "3f8260e1917b623e185e7a79d732b241"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "16ee06f72957e9d216dace3bcc5bceab"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "5600da4ccd85172999c083f756bd3cc4"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5344f8615f8c71c20a49d9c792a77ec2"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "911a2ef265752a16e159530b6e2ab23e"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "954b742c1bbb04650ce4db9aa4b35e78"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c2cb09ab8fa829fe851537b09080d8f8"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "2f3c46b495634337a0ac132f655ef9da"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b2b864f69f2c8b913dbd3b7ca26c624c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "4485ccd2c7c6943a5504a26a29ee9c23"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "dc52ecd936f240b8b19c78c94b209b56"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c662aa6760af8a3c6f0ffdbeeb7b2f27"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "5a2a5fbd20975fc4f18a585395035795"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c461236933835b22665423cb9dd21965"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3434de297902e745c8850d12f7737533"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2da2708b91f3a6f6b00a7749ef39150b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "384a3238a6aac8b528da47f98f76d075"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dacc717632882fd3776fd1aa904335db"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c7eb73ecc5dd47073106064de27fc746"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "3f214563319692b5a84ae505b79339b5"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "0773a355055eef8aec56ef1aa2a1e674"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "dc1cd9ace0d9bac5873e265d87063036"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ff38ea06e036eef0b9605ae115aef99d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ad3f59be12dbfa722c1d301977956ab1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "2db5071501eba0b4cdc224d2b9c2740e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b29f84e2cb7e4b45c64cbe186fbde599"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "05d5c476431c1c69977bd51e7ba7477f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "21d3ad985303d8aac8d27036066e1319"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "decef9aab732143bfca4e58f7fe52b31"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "daff747f4b95464dd304c628bea9de6f"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "cc232dd9acfd2aa8bae0735b53f5080a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "57a27d06786f25f674139b2f05b6df2b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b023eff0d7fd4a40a415c94db2118257"
  },
  {
    "url": "tag/git/index.html",
    "revision": "56d9b9b4b64c8b845a4166e82c4a90f8"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "9d020290c8bf95b3112af3b525fd9b75"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a0251515dd1870cc059003f0dd82902d"
  },
  {
    "url": "tag/index.html",
    "revision": "a60bc1bad5cca544950900600b7ea819"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "25578cbfbc8eb5a0270307f2fe75be0f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "484871b18f779a13434f24bf9f5e20ad"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9f78bac1b29ae13fd379f6dc3f0eee43"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c91a03a6c99f6a4a0a9aefc0605b6391"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5e2976a553d562c5222ea5f97f61eb9f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d16c05d0b43d00d79f632e82b44572ea"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "49268741d8e7628941f69559aec0b874"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "21ce3d8d080e1e838ace52b3e6fdad93"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2408df0ef4a7d199cd312c996d6ebe27"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "42916f9c237863311cb97455e28742f0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c131be7b6de399e18cd90414678ea179"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "af044c4ee437ac799f450ebb5e466b55"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "50b23ce6d8227e010a940a1ba1eb6a57"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2c46eecfa4664dfcfa9da54ce4819aea"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "cc65ff67456af0364a8758f5a3514099"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "921bc692d48a75acf05cc9271411c781"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0e6e7faf83211729f92de6ad620d02a7"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "18585a1f1ea5675f3f4f070249a595e1"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d1a9eeb3fd2d764e2e3c1a273a64e369"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "be5c39e934c7e2599c35bd9ea2db7add"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9b396031005b741fd7f16114d27477fb"
  },
  {
    "url": "timeline/index.html",
    "revision": "2589c7e5c73974e61bca5f7f5eaa84f9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "32fdf699df48d5d0532d96c3cdccd643"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "76391c53d366f87c6ee4f0b0f0023afc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "053b34203d5d22e6a864b65910789187"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d29c6efd22f6be553481c5fe06d603c0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ad486a24f80cbb71f53c62f8de72963a"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "b1806ca888b8bf5759977238db3c70b8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "fc78b41b0a1e7f8cea1d86145da4876a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f02710f9b7d5a291b7957160b2873b51"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "be401310768c011a574839c284cde8cd"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "abff1af6089bf38a6b076c831b6f7f2c"
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
