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
    "revision": "d4e6b09cd87d189599c3ae854237eef4"
  },
  {
    "url": "about/app/index.html",
    "revision": "cdfc10f19cf68a6cc9796ade9d684cc2"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "14f4d6718601269fc7da89c4d1fba53e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "33f1454f975f2f0e37af9fd4434db80c"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "edc0a99acd762dfe5e59503ab919324a"
  },
  {
    "url": "about/index/index.html",
    "revision": "29a73ad13224d23ef4fb067c33252820"
  },
  {
    "url": "ai/index.html",
    "revision": "44f5bf9bee21c44c10e48f080686922e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f86993678b0d96c6a4a82e019e973cbc"
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
    "url": "assets/js/50.f4847f57.js",
    "revision": "6ed784ad50002119e506b15216c66a8b"
  },
  {
    "url": "assets/js/51.8d1b508a.js",
    "revision": "9cd5e3e508565c5682578af4da19e180"
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
    "url": "assets/js/58.846ddffa.js",
    "revision": "c7dfcce0bac56b9bc3593c7ac908b557"
  },
  {
    "url": "assets/js/59.88694288.js",
    "revision": "95071cb79d3411f474654e6397b6b4a9"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.3828c32a.js",
    "revision": "31ebde5c8c891bf3e07b72f6144a8b64"
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
    "url": "assets/js/63.f2f12bd4.js",
    "revision": "a80a5bd4020419a7a1b95a0b7e19d80d"
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
    "url": "assets/js/app.d8342436.js",
    "revision": "3c85b0503d5cb45c0b8682557e02a443"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "598f8cb3a6e9a661d5d165acffddb59e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "01a1b92656877ea0610d97f0ac2867d5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "66893be4c5287c3e0557cfa1ab1ff610"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "955744a2bc9c7327ffecb304e6d4ed36"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5be933dc9f10f047c50c495e2ea66e67"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "18837f24a663697be268910f2b40672a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "41e947365fb5e03af0bcf0d71150961d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6c4d59ba2c44f2a1cbf978e3f7f81878"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f19249c4c296b5a2cc3b3b16a04f92bd"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "59b879c0c76c12f523cb34ca969e2ba2"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "553d3a1efbfd7e006d98bf04f390e96e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2d2e078158ba4957f91bafc64209ce44"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f62bccfc86da64940931154c54aae3d3"
  },
  {
    "url": "book/index.html",
    "revision": "d9debd8bd26731771807d720a074afe7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "40f00563aa8c26c3b61c13a485c55b7d"
  },
  {
    "url": "categories/index.html",
    "revision": "d2f28d76efb2f7b7b1e41a216e154bbf"
  },
  {
    "url": "figma/index.html",
    "revision": "1fee1b564b93948da579277ed36af462"
  },
  {
    "url": "flutter/index.html",
    "revision": "bddbdb892283ac019c3d1c8f1a44ef9c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8e34338870eb70f67e06e176cd9d0c61"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6636298a26df33c47e82faa5cb363edd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "447e08d3f141b7284959655558fdc70c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "56314cf8047e098aeaa98af70d738cec"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2babc9192c255d753cd0db052ef3a608"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8e2348916c7a421cf976eccf9d9a6c2a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0b3389384d1cfcffc593443b719c672d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "562fbbd7071d4e891b8ccc44f71bf45b"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c686fc0ab8fa0383179549547b8e6416"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "95fc77a05939ec8ce2a2dbb30cdabab7"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3da60578da2fd195e9b659452fb73698"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1ad5bbe926ff5994680cc3c36308ee01"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "851e1ebc317c026c85375566deed1de1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "a08de888c3b53c45b978c65f47281c54"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "182386ef5a8dd35456b678597cded9ca"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1e6c73f4e990f6397acbea8fe3f24bb9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "bdd4ac960af41f32928b4d850f88e7f8"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "cb1f4cdffa866ed8daa6a78e84941c27"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "079886e5f15277566e70ab0e2c9df91a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "845fc1373bdf2fbd4fa5eafe0ea07f20"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "94608fdf79e2109c54394ad62d1b2451"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "634aab74a7e6b207087013b0a21d079d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c5540f8dcbfda6e10ad7e3ce7149d99e"
  },
  {
    "url": "haskell/index.html",
    "revision": "5f59a89714f4098b924f421a8acfd9ef"
  },
  {
    "url": "index.html",
    "revision": "95c9d203b41400ae53657aa68238dc71"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fb9f277c645882246afae0cfccb692b3"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7a90129f0cc0c1377ab49d1b4127f126"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "be403a54fab0e02bb22ea2b590c61aa3"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8269417ccc0d5767ada92524c6258eca"
  },
  {
    "url": "python/index.html",
    "revision": "fbf62b25979d7c84738fab96fc0bbd4d"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "417899770ed1a0c8fc8639b84bcb270b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "da9449354a4bf256b0bb9f4bf8c7ca57"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "46b1e69d289a531ee1dc6b1692e557c1"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d5d5c8cd575216bff305377b2b1537ec"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b9a11ca1db8fe5ffae1883ee85c334ba"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "461815aed386a3deeea9db5502cfe538"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e836b4688d2041137b7d7649c88ddc4f"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1fffc6c650e0fe161b7d28ee770ba7ae"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7cd89f58554106a82a1d0b7a5121c1cb"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c0c9ae85ac7023681e0b3d4fb25b0161"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d2120701e9b711099915934ab36e37ce"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4851c727bea9c2ed2a273eda884e4039"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "98021784c8a22661ba38ada190e7ef64"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8af727183806363f3176f10e32c4a272"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "db59ae40ca2d23541ccef342e6511d73"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "136cfa5a3226c31d259ed9804d8af7d6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c277778e9390c61b43db86f427fc9bc7"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e758bf293fbd91d0149c2cce39da0232"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d196e5e5bbce44dcb6696d4a4f94ddd2"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8cd4236016e119bf8bd316b16ab97c37"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "640d8c16c6a10307d74897e73504fa98"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "89801aa311cee0e8597aec45a7533390"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "db34c6875b3e67c330cc80d00b238479"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "3ed47b5de177fc93ab49e2c065a2e43f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "f917aa824322872e98769fa86b40c611"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "9ac6fb01eef41f151c9bd3fbab765bc3"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9d33d267fd5e12604b5d12cf56329ffb"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "b3e8b1dc6dafebe050807a70ee27be30"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4fb37a43f099b67380604829e5fc3c49"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1cb33259d2f1b620ae5bedcdffd0957a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b8617df8779221941780bda823cb4f61"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f4bdb52ef8d80de0d10ffd0aac9104c7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "648e8491815cd22fda645f0743e17b38"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "48f856d1516ba507210d369741ca5ad6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d0edbf6632defd18cd10f978bb7f1086"
  },
  {
    "url": "tag/index.html",
    "revision": "6c52508fd45bcedf5fbcf50cf570ba85"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bf4bb6e441cddf9c755cdec71a6817d3"
  },
  {
    "url": "tag/json/index.html",
    "revision": "fdf2ba1c192a3b91ce71809466486fe8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e733118de546cde18ecee3edf66768da"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c35a9b2ecbc5e6964be7b8e4ceecd032"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9fa452b25001adb7726faf059abfca3f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a0c793b876b97b952aaa39ac172e797a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0c7bcf2501cd4ea00276465f9263c5f2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d6861a9706b02db2edde4f515cf6d2ce"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "78f66b332a73554607430c47886f5e09"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4b690303f94af416a45022f112b0f4e0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c7cf2611ac73bbdb91350302d8540d17"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ff1f6c156dd718584e7df4e14a15986a"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6235e8a619b8c36b7541285b5d48d009"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2a8126f30de4e400f3520a3a3da44b52"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "78998e7acc8f5dbf97e1502bc433cdb9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ba3ca48d2a5ac8ef6d99509d250acfd0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "897c8a5b200e9af113b33582c716701d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "076d9bc2dac630f300bfebe3f8bf7dd1"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e9512fa08084d3b66560cbeda3a637eb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2b844b59410ef0ffc722ab54631b0384"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "511c5d0b0fb3b6b053e3367de39edd91"
  },
  {
    "url": "timeline/index.html",
    "revision": "3bdd233206f230148a1d02556c83bf5b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "de32358b7a2241fabcfb15f78cfeeba3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "aac69f6285dfec69f06531d193be4cbe"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "91cfcab9125e6aefae9b3aa2fb2b803e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "bf1d700f008b75027895a1429112e4d3"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c293e742ee8b172d4c020d588e482da0"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9f9ad60ffc13b0c62166bcd8af763524"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "93127a597d6260982f540fc030962a2a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "dfa68fe7d90bd4a74b081aa599d8c72f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7a91d91253d51f37787643ebe71a792f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "04ca0178c4888ef7afd5ef9fea4559c1"
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
