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
    "revision": "1263d8fa9fb456610bcb688aeb5fbea9"
  },
  {
    "url": "about/app/index.html",
    "revision": "7892e9cc350ce93ce172361aad114c70"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "24feab94adc58cb5ded901a435930340"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "55fcd35f3120182a8ac969a8b23d7f82"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2764d2cd921e97ca2baaa536a7dba1b3"
  },
  {
    "url": "about/index/index.html",
    "revision": "0f636ec16380e1e04cf1728b50795bd5"
  },
  {
    "url": "ai/index.html",
    "revision": "a67228c376704b76a09459fd7705018d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f3385920678d5fd8bbcd76c7165fd2a9"
  },
  {
    "url": "assets/css/0.styles.69fe0ec4.css",
    "revision": "b222c2e7ac4543d2fa4d450479a65364"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b74ea68b.js",
    "revision": "c5e7b23a60464e79980a65df4c084044"
  },
  {
    "url": "assets/js/10.eeedfe79.js",
    "revision": "d7281a03cca01fa0d9867fac7eee890e"
  },
  {
    "url": "assets/js/100.c62f9a0d.js",
    "revision": "33778d0b9c4826e255a3631da335cdd5"
  },
  {
    "url": "assets/js/101.d9d24b46.js",
    "revision": "5c5cdbadcf0f7ba23023903d6b19b1bf"
  },
  {
    "url": "assets/js/102.88f6e12d.js",
    "revision": "b8584a1c7ecdbe13fc3286966c5bd784"
  },
  {
    "url": "assets/js/103.63ab2a81.js",
    "revision": "3aa6b24dd10bfc0560f32f566aa2d6f1"
  },
  {
    "url": "assets/js/104.720982e3.js",
    "revision": "5387c8c1da27a33edde9f7e1706d49c5"
  },
  {
    "url": "assets/js/105.d62ee5e5.js",
    "revision": "40848c6c69ca3999254bb368693b79cc"
  },
  {
    "url": "assets/js/106.ded01c9e.js",
    "revision": "71c5a440fa2f2bd7bf928e00c9f2e4b0"
  },
  {
    "url": "assets/js/107.ec79c042.js",
    "revision": "0c4ca3ae9515f421792298a347a426c2"
  },
  {
    "url": "assets/js/108.f5596ed3.js",
    "revision": "4ce2386523db3d0f910fbe5f1f2ad6f3"
  },
  {
    "url": "assets/js/109.557625df.js",
    "revision": "25c8ba856e5d203875adb9b3e6097bb7"
  },
  {
    "url": "assets/js/11.5025bd81.js",
    "revision": "8594e2f5e118fb7ef5b9d34cf5c84237"
  },
  {
    "url": "assets/js/110.e80acf9e.js",
    "revision": "6d661a4c7d14d5586c58e5a48ce20a2a"
  },
  {
    "url": "assets/js/111.09979fd6.js",
    "revision": "42c4d267711c805cf82f75c112d120dd"
  },
  {
    "url": "assets/js/112.6f737018.js",
    "revision": "19f2b6a08d3673867b7d0a3913c2469c"
  },
  {
    "url": "assets/js/113.b4c7f207.js",
    "revision": "84bd9e780c59923957bdf065a22dad95"
  },
  {
    "url": "assets/js/114.976e424d.js",
    "revision": "6bd522e792c2a7c134e8e501e68f265d"
  },
  {
    "url": "assets/js/115.1392fd34.js",
    "revision": "3b3ec9cc3d47dd1bfc9a227865967820"
  },
  {
    "url": "assets/js/116.8f384623.js",
    "revision": "79ffe952df97692bb3a49b2b940ff743"
  },
  {
    "url": "assets/js/117.48c94124.js",
    "revision": "ea5305ae96533156a608e8a46773fb61"
  },
  {
    "url": "assets/js/118.14735502.js",
    "revision": "c2a7f886c5c4b8598ca0ceaa9cd682be"
  },
  {
    "url": "assets/js/119.36bbd056.js",
    "revision": "73f0f8f8ba4d89789961c51769643e67"
  },
  {
    "url": "assets/js/12.8265697f.js",
    "revision": "5462499b630529b5bd6323abe9b2e455"
  },
  {
    "url": "assets/js/120.74148595.js",
    "revision": "3ca29b2fac62184251489b4310005e0f"
  },
  {
    "url": "assets/js/121.e167d428.js",
    "revision": "e98a99c8283b9ae4a9c9da91c2669b5b"
  },
  {
    "url": "assets/js/122.c3a832df.js",
    "revision": "7c80e5752e55f4da78f3d0e5aa840371"
  },
  {
    "url": "assets/js/123.f57a5dd1.js",
    "revision": "0ca76fc72a72a340b5495f2095a46bc1"
  },
  {
    "url": "assets/js/124.2a8f74e7.js",
    "revision": "766592d1dccdc19896cf5314aaed3e6c"
  },
  {
    "url": "assets/js/125.d27437b6.js",
    "revision": "ac9f39976fe708e6b90eb21820c08f58"
  },
  {
    "url": "assets/js/126.21e4902f.js",
    "revision": "26028a5ccbe81349387005233cba1252"
  },
  {
    "url": "assets/js/127.44f85cb4.js",
    "revision": "f8af2d94730e3b1e987cb14b3d669416"
  },
  {
    "url": "assets/js/128.824ff2a4.js",
    "revision": "3422a5dbb5d25889d92e86272d2887ee"
  },
  {
    "url": "assets/js/129.b52c10c8.js",
    "revision": "b552613f4a1843afd75e7793b488e9c6"
  },
  {
    "url": "assets/js/13.bd15f5e6.js",
    "revision": "51625acbf6f6884c4952f5471614a366"
  },
  {
    "url": "assets/js/130.c65ae59d.js",
    "revision": "473c5c3f8700f66258b0d747ec56bc13"
  },
  {
    "url": "assets/js/131.3eb447e9.js",
    "revision": "d47e16b530bf2d30420fd046d096f172"
  },
  {
    "url": "assets/js/132.098d323f.js",
    "revision": "6f5baf22c828f612e5915d0002e75670"
  },
  {
    "url": "assets/js/133.829daa5a.js",
    "revision": "8e83b2003649c8c80add016c8dec6c71"
  },
  {
    "url": "assets/js/134.4ffc4937.js",
    "revision": "1e3618072ca560992e545c8ea00932c8"
  },
  {
    "url": "assets/js/135.5594dfb8.js",
    "revision": "25839685fcbc8754605f62c2d8e011a3"
  },
  {
    "url": "assets/js/136.7b122a5e.js",
    "revision": "f22b1c08c927ec8983cd041d537be02f"
  },
  {
    "url": "assets/js/137.6f475fe6.js",
    "revision": "c97fd2a3aceef37e988243a3d952c1be"
  },
  {
    "url": "assets/js/138.9c83768c.js",
    "revision": "a13dd6408d44824a4bd0a13c0079bf42"
  },
  {
    "url": "assets/js/139.3f0184b0.js",
    "revision": "34a027cd4a35e8853342d52c0a7373a1"
  },
  {
    "url": "assets/js/14.008d58aa.js",
    "revision": "5f4c2652f44fcdd1224cbc3efe80a7e7"
  },
  {
    "url": "assets/js/140.4325c8ab.js",
    "revision": "0f08525a8cade1853c43d8c1c3727b11"
  },
  {
    "url": "assets/js/141.ce47664f.js",
    "revision": "b5be5ef58b9e0ca8a6edbd6582a9298e"
  },
  {
    "url": "assets/js/142.cddcb407.js",
    "revision": "6ee80f0c06de4a0f912f6c79d94f1673"
  },
  {
    "url": "assets/js/143.c5b4dee7.js",
    "revision": "d77e1f25194f5b46966b9b9d9889fe73"
  },
  {
    "url": "assets/js/144.8f4cb2c1.js",
    "revision": "eb5c0c610d136407a42efd9f8ecb971b"
  },
  {
    "url": "assets/js/145.d96f70cd.js",
    "revision": "f5210d2788a66ba5d2f096485c7ec74f"
  },
  {
    "url": "assets/js/146.727a1645.js",
    "revision": "c1a407eeff26070a9391834576790a74"
  },
  {
    "url": "assets/js/147.22efb236.js",
    "revision": "3fe8fca410eb574da4ae020b7af349ff"
  },
  {
    "url": "assets/js/148.2af45c3b.js",
    "revision": "4eb2f41d94b30745767799c2e71b3001"
  },
  {
    "url": "assets/js/149.37dff575.js",
    "revision": "b53996ecbfac7d5482216fbf2692df41"
  },
  {
    "url": "assets/js/15.4056799d.js",
    "revision": "de05d438649de7d6d2be159d20e94f27"
  },
  {
    "url": "assets/js/150.92658a6d.js",
    "revision": "6777370a2b9ca553c4c32d57c51454e7"
  },
  {
    "url": "assets/js/151.50ebd33e.js",
    "revision": "061ee3e6b7ef10d0032d7a2ff7215d5e"
  },
  {
    "url": "assets/js/152.389fb4d5.js",
    "revision": "7e41b3172dc72089e084462a7029a582"
  },
  {
    "url": "assets/js/153.4954b5be.js",
    "revision": "f553bddf00fec391d44c1f2c844f11cf"
  },
  {
    "url": "assets/js/154.6adaab4a.js",
    "revision": "6e8e5b2395d5dbcae859a9a1176b7268"
  },
  {
    "url": "assets/js/155.a9318799.js",
    "revision": "1585a296d7e3584b02a80153bc8b4584"
  },
  {
    "url": "assets/js/156.34d2f2d1.js",
    "revision": "53ca993567ce86158abf18791d3eaac0"
  },
  {
    "url": "assets/js/157.b573a7d0.js",
    "revision": "8f2492aaa3eb4e02d9ec28b780e59fcf"
  },
  {
    "url": "assets/js/158.1cd94c1c.js",
    "revision": "b89a31a4f06464e29e6e3bbf0bd8ed24"
  },
  {
    "url": "assets/js/159.7b9555b5.js",
    "revision": "6060811702b7e08b84f7f011de755fac"
  },
  {
    "url": "assets/js/16.79c3d288.js",
    "revision": "9bf3a4f61f65515748b77dd7e8a2f56d"
  },
  {
    "url": "assets/js/160.4b0c02e1.js",
    "revision": "cfb9a407fd08dc522840de0054894bd1"
  },
  {
    "url": "assets/js/161.b9b461f0.js",
    "revision": "882a1578c274f3f0442054df6fd08c51"
  },
  {
    "url": "assets/js/162.b0e83996.js",
    "revision": "ba90d152e2795b8431806c2bf7a7e641"
  },
  {
    "url": "assets/js/163.4ff66a8f.js",
    "revision": "9c2fc5889f810c59c1c88f890cf8bd77"
  },
  {
    "url": "assets/js/164.ac3c873d.js",
    "revision": "ab12885445ce381021fb26b3fd2673ee"
  },
  {
    "url": "assets/js/165.d2fce225.js",
    "revision": "9e1a2d7a4d20e57e7e34cd364db9fc87"
  },
  {
    "url": "assets/js/166.1d5b08d2.js",
    "revision": "cc0e45b72bec159fb942fec7751d492c"
  },
  {
    "url": "assets/js/167.b5c9ff70.js",
    "revision": "92eae8b4b4a011f4e22c2b2303fe9de0"
  },
  {
    "url": "assets/js/168.f996e269.js",
    "revision": "6a7a66f216529eb9df5ed5a05d6c6cac"
  },
  {
    "url": "assets/js/169.6bc3a542.js",
    "revision": "57fa66ba62db66962c679fb6ac6f7cb2"
  },
  {
    "url": "assets/js/17.ba1dbe51.js",
    "revision": "382cc471d59f865d36ef0953bee93123"
  },
  {
    "url": "assets/js/170.635f8118.js",
    "revision": "feace251c04167f33cf2809e1ffd8635"
  },
  {
    "url": "assets/js/171.136d942d.js",
    "revision": "2658351ec2679a1056e7e1520a49cc6e"
  },
  {
    "url": "assets/js/172.07797d9b.js",
    "revision": "0bd754b7ca8ca279574e6f389f65f3b8"
  },
  {
    "url": "assets/js/173.f206be63.js",
    "revision": "d80691d6cdf946f180c08d7746653b8b"
  },
  {
    "url": "assets/js/174.36990341.js",
    "revision": "94f1b543a21642bfb3c1439276d38bc3"
  },
  {
    "url": "assets/js/175.0a5350ea.js",
    "revision": "66ade749e293bb38d6106ea53919ddb5"
  },
  {
    "url": "assets/js/176.c493cce3.js",
    "revision": "ff011bd8c1e792441a28bab91dbda342"
  },
  {
    "url": "assets/js/177.237b57e7.js",
    "revision": "b96d0f2589e9a604a54a8795881abf63"
  },
  {
    "url": "assets/js/178.55707e0c.js",
    "revision": "27bb645c63b24b44af777660a18e8d4b"
  },
  {
    "url": "assets/js/179.077dd4b4.js",
    "revision": "469f7519c56eee9e8114bc58eea4c195"
  },
  {
    "url": "assets/js/18.10794f63.js",
    "revision": "8abde94d4cdc8ec6f5713237249a53c7"
  },
  {
    "url": "assets/js/180.51f95a1e.js",
    "revision": "c0867fcabbe1b9cf1c966a7e8a856e03"
  },
  {
    "url": "assets/js/181.d7c8e0e1.js",
    "revision": "daf9c259e5789cd44b6a5461db6757c1"
  },
  {
    "url": "assets/js/182.1b065356.js",
    "revision": "4980472b987e307f893838cc139a44f9"
  },
  {
    "url": "assets/js/183.3e9a9d95.js",
    "revision": "c70942e1ed033e86a5179e3cd81e6dba"
  },
  {
    "url": "assets/js/184.1f101cc9.js",
    "revision": "f775e2e8441a71445154a83eb6e65ebb"
  },
  {
    "url": "assets/js/185.88d42683.js",
    "revision": "947610bd4469a49296463061fd14f4f6"
  },
  {
    "url": "assets/js/186.328a0c8b.js",
    "revision": "e4722c6c58870776207c85d5ca3b1adc"
  },
  {
    "url": "assets/js/187.8b40b656.js",
    "revision": "7c5ee352969dd780ccd252af227ac2f8"
  },
  {
    "url": "assets/js/188.91a3a12f.js",
    "revision": "9ca4aabe29aa55b17e52dc71b6b8feaa"
  },
  {
    "url": "assets/js/189.53578a9e.js",
    "revision": "fcfa9f2868535b9a524a0d6effbfafbc"
  },
  {
    "url": "assets/js/19.65f73a7d.js",
    "revision": "b838eeb3dfd9898feff7ba72fd365ff1"
  },
  {
    "url": "assets/js/190.2fb50acc.js",
    "revision": "15a7429c7dde71509127559703142266"
  },
  {
    "url": "assets/js/191.0b7431cf.js",
    "revision": "d8df70a6851bb9708fe8f3c4372ef3de"
  },
  {
    "url": "assets/js/192.c99c2492.js",
    "revision": "9f7cd5af864261a1e2814cf7fb519c80"
  },
  {
    "url": "assets/js/193.ca72245d.js",
    "revision": "05701664dbb8a46d519fa1378dab48e8"
  },
  {
    "url": "assets/js/194.e0674a26.js",
    "revision": "9b8231bc6115a37104b0143bed2e9c3c"
  },
  {
    "url": "assets/js/195.73c962ff.js",
    "revision": "46a3e5c38c323f33d5966d505fe4501e"
  },
  {
    "url": "assets/js/196.0d45a1c7.js",
    "revision": "f0ad95b378706e97d0e791e59c055d9b"
  },
  {
    "url": "assets/js/197.67b62e76.js",
    "revision": "8dc8c98f5ac6a4fec3a3592b4e91dfa5"
  },
  {
    "url": "assets/js/198.b98afe12.js",
    "revision": "3eb756005b4a88d41d4606e1aacc6e0f"
  },
  {
    "url": "assets/js/199.a5ae18ec.js",
    "revision": "2ec6084e2ef5ea89867c4b6ce77787bc"
  },
  {
    "url": "assets/js/20.43bb39bd.js",
    "revision": "097d54b6376cb67662d0c2d278ba8bfe"
  },
  {
    "url": "assets/js/200.ca201744.js",
    "revision": "1ceac83390239fad66d3b0a1c07e10b7"
  },
  {
    "url": "assets/js/201.4b9fbb82.js",
    "revision": "7cbfbc545094ee7116263f2f05ea5ae0"
  },
  {
    "url": "assets/js/202.7a83229b.js",
    "revision": "ab30b1898030e1fe27328ee7f15786ea"
  },
  {
    "url": "assets/js/203.ea88e2c8.js",
    "revision": "315021fddfcf87e3360b5afc2cfc1067"
  },
  {
    "url": "assets/js/204.8135ae89.js",
    "revision": "1ca74c1c114421ee91abc16160971662"
  },
  {
    "url": "assets/js/205.959c8df1.js",
    "revision": "5aaa5e1072de213d31030d3ef47a5da2"
  },
  {
    "url": "assets/js/206.eb998e20.js",
    "revision": "26d9a65f9918b35b4f034c8ed29d2a8e"
  },
  {
    "url": "assets/js/207.69b720af.js",
    "revision": "f400eb449a2dbefdf99908fa24fef69c"
  },
  {
    "url": "assets/js/208.eefafc24.js",
    "revision": "4e19b56f8a4253c1fd1f1d643a68c34e"
  },
  {
    "url": "assets/js/209.233167ef.js",
    "revision": "c9a038ab5b7a379f1f31a85fdcb9b0ef"
  },
  {
    "url": "assets/js/21.49cdda21.js",
    "revision": "f62e002372f10f249a13479434fb5423"
  },
  {
    "url": "assets/js/210.6d0854f3.js",
    "revision": "e39c7f3a20e361620f20ab6019f63f6d"
  },
  {
    "url": "assets/js/211.663f938d.js",
    "revision": "e535f969cbd669efa348256d49fc59c7"
  },
  {
    "url": "assets/js/212.243497f3.js",
    "revision": "28611281662fbacabb9f554a1346e733"
  },
  {
    "url": "assets/js/213.c8c04515.js",
    "revision": "a657da8d68d6d207c7977aec7d1998c3"
  },
  {
    "url": "assets/js/214.a017c276.js",
    "revision": "9a3286453139621448a61062bc357786"
  },
  {
    "url": "assets/js/215.ecfa3cb9.js",
    "revision": "5b1f231e6dcc0d0d7e85173c28454c48"
  },
  {
    "url": "assets/js/216.d5c67d7e.js",
    "revision": "4f43632ff9bb0649e710d673ee792542"
  },
  {
    "url": "assets/js/217.085a0c9b.js",
    "revision": "e61d12e60b67020b9f58328ea96947b8"
  },
  {
    "url": "assets/js/218.313ba0fa.js",
    "revision": "ffa0607db830d9adcdf13dc71fb2cc2d"
  },
  {
    "url": "assets/js/219.44f739bc.js",
    "revision": "1b0f1bbfd3694da96dbb00bf6637a5bf"
  },
  {
    "url": "assets/js/22.f022518b.js",
    "revision": "2ae04bcaa6d50dbf284b94a86cb0e46a"
  },
  {
    "url": "assets/js/220.ed169a63.js",
    "revision": "7d2301f7fd5cdb8240fc0be23cd33d13"
  },
  {
    "url": "assets/js/221.ec18b529.js",
    "revision": "e002fdbea5e2a519f8ed211ff7dad1cf"
  },
  {
    "url": "assets/js/222.f3fb82b2.js",
    "revision": "c8abd9c6f68d07e349b59585672ee2c4"
  },
  {
    "url": "assets/js/223.186897d9.js",
    "revision": "4752b76382320a73c759492769abee1a"
  },
  {
    "url": "assets/js/224.7205517a.js",
    "revision": "fd554397aadd1038de381b2720e50e88"
  },
  {
    "url": "assets/js/225.9ce442ed.js",
    "revision": "e6ba10096c1215a83be8bd158a8e1fa3"
  },
  {
    "url": "assets/js/226.ae79626c.js",
    "revision": "eee443c9c5186d69e54f63bc09f0d3a5"
  },
  {
    "url": "assets/js/227.01be017a.js",
    "revision": "394ab89a07ad151b25d92cd73f9e3011"
  },
  {
    "url": "assets/js/228.d204b1b1.js",
    "revision": "2f254e8aa10abbcfd96668f64406bde1"
  },
  {
    "url": "assets/js/229.a949fed3.js",
    "revision": "ec739e4373dc8546d56015cbacccd0b5"
  },
  {
    "url": "assets/js/23.93005be3.js",
    "revision": "2cfc243493dde2997341a297fcbb27e7"
  },
  {
    "url": "assets/js/230.9f1be5ce.js",
    "revision": "935cc95e82ac0e2eb7c7a1ea27e1282c"
  },
  {
    "url": "assets/js/231.422fa452.js",
    "revision": "0ee8341fe1897a5f9939676499165239"
  },
  {
    "url": "assets/js/232.a12d66ae.js",
    "revision": "a2ed0886acca97b7901f093bbaaa45ed"
  },
  {
    "url": "assets/js/233.95addb0f.js",
    "revision": "97d857c4ea37db47b5d5450fd82938e0"
  },
  {
    "url": "assets/js/234.9cc43557.js",
    "revision": "f3637a8ddf36f653eebb8352a5d8962e"
  },
  {
    "url": "assets/js/235.d1fddc61.js",
    "revision": "3f5b1e4aabca3a4b91624722ff8fbdb8"
  },
  {
    "url": "assets/js/236.e45fc8b3.js",
    "revision": "9e9ca44aebfcbb84788fd1c93d9ca2d9"
  },
  {
    "url": "assets/js/24.fa766d47.js",
    "revision": "11901ea467c4494fddf9b3eee5a3e473"
  },
  {
    "url": "assets/js/25.bf035779.js",
    "revision": "004d54d75bca45f31b24ec01494e5a8c"
  },
  {
    "url": "assets/js/26.44892b44.js",
    "revision": "dcc0df5c47b8461dec89938fcec2f1fb"
  },
  {
    "url": "assets/js/27.764532f1.js",
    "revision": "99432bf1678adc13c668a5cbed874d19"
  },
  {
    "url": "assets/js/28.df5b9597.js",
    "revision": "479dd849f9b56b6615d506ff6da355d3"
  },
  {
    "url": "assets/js/29.a1364084.js",
    "revision": "0720d0d60b3582087e2c547cce07f102"
  },
  {
    "url": "assets/js/30.11dc42c9.js",
    "revision": "faae076e7d03f56a668672459f0eeaaa"
  },
  {
    "url": "assets/js/31.a9d1c244.js",
    "revision": "e588b3b55ac9d3ed49d2f9a56d091b3a"
  },
  {
    "url": "assets/js/32.9507e1a2.js",
    "revision": "1a3b73f0e0e390e78c2c729947c42c33"
  },
  {
    "url": "assets/js/33.9b8e0d3e.js",
    "revision": "80266655f26ab70f0626f5b3aa4d593d"
  },
  {
    "url": "assets/js/34.473b07d9.js",
    "revision": "0f2042849367e9a804ac7a8c3f50fad5"
  },
  {
    "url": "assets/js/35.11f60928.js",
    "revision": "8577817d7b6d3a68e9f68223f4cf7407"
  },
  {
    "url": "assets/js/36.d29b01c8.js",
    "revision": "0dfbf890ba45ce6509791ccf48c1e83e"
  },
  {
    "url": "assets/js/37.01e8aaef.js",
    "revision": "e457ffc388388ab296563c375df345a7"
  },
  {
    "url": "assets/js/38.bcf82665.js",
    "revision": "06bbfc1b901b77d450751a6e27dc0e30"
  },
  {
    "url": "assets/js/39.f2bcd934.js",
    "revision": "3fa087e6f57e98e0989f2f9753cb447d"
  },
  {
    "url": "assets/js/4.4da56912.js",
    "revision": "be007d18d61ba5e5f59f1599ac6abff6"
  },
  {
    "url": "assets/js/40.51ec623b.js",
    "revision": "3d63e1a1cfa5699e557dcbf47de8b606"
  },
  {
    "url": "assets/js/41.62074146.js",
    "revision": "313eedb1b1440d47a3cabba71ff3e47d"
  },
  {
    "url": "assets/js/42.6be66a1a.js",
    "revision": "fe4ed1c39b018a4f4c3e0ad7a3621891"
  },
  {
    "url": "assets/js/43.87196e78.js",
    "revision": "50cce2f527fa0d568c11cce4a90400ff"
  },
  {
    "url": "assets/js/44.231397e5.js",
    "revision": "69f4289f25f0a032bfdd2ee80d2f9111"
  },
  {
    "url": "assets/js/45.1302eb5d.js",
    "revision": "5fe3ddd3c7f516a8c2b2171d3a2c6d58"
  },
  {
    "url": "assets/js/46.ba31a452.js",
    "revision": "09b863721993d888b9078b4487f3e17c"
  },
  {
    "url": "assets/js/47.fe911d9e.js",
    "revision": "3e1f2ec7a8b07e4744c91b7e5acfa565"
  },
  {
    "url": "assets/js/48.32470d7e.js",
    "revision": "46140bdf503cc6a8d9a7b4f911a5a28a"
  },
  {
    "url": "assets/js/49.898a1ee5.js",
    "revision": "b1a344a5b85e99cab782ea6c9ad8356c"
  },
  {
    "url": "assets/js/5.7f2a82d9.js",
    "revision": "30727f26786f019a188995fd84df75c7"
  },
  {
    "url": "assets/js/50.939c7440.js",
    "revision": "55c8085eaac62d0af5b90a1c858044d2"
  },
  {
    "url": "assets/js/51.05ae439f.js",
    "revision": "4f264636eada85e6578413dc977874f6"
  },
  {
    "url": "assets/js/52.6975bebb.js",
    "revision": "e15543437e15e1a511471703931f2679"
  },
  {
    "url": "assets/js/53.e9b29dbc.js",
    "revision": "d73a1146014f0ae56a1e49811ef7d9ec"
  },
  {
    "url": "assets/js/54.4f57424d.js",
    "revision": "e26d7493ed3e285a185119e15b9e7f3e"
  },
  {
    "url": "assets/js/55.054d91fd.js",
    "revision": "89cd24f3479abcef7fc0649300a96b4f"
  },
  {
    "url": "assets/js/56.215cb904.js",
    "revision": "cae961d38c6663091cf19fc1dd35465b"
  },
  {
    "url": "assets/js/57.1288e528.js",
    "revision": "5e5bad462f8723e1d3428f4d8fd9653d"
  },
  {
    "url": "assets/js/58.55110184.js",
    "revision": "3f503cd2e737bb1e66755745cf376477"
  },
  {
    "url": "assets/js/59.26ca8cc3.js",
    "revision": "c349339dbeb3d97bdf328bd6095b7c0b"
  },
  {
    "url": "assets/js/6.aec09dad.js",
    "revision": "497d8649a8445c2f54c2be502a578b85"
  },
  {
    "url": "assets/js/60.d67c65ab.js",
    "revision": "65944f5d30340abd627f43f0f64e983d"
  },
  {
    "url": "assets/js/61.c5d6bba9.js",
    "revision": "9a7e5de5fb0047563f1580eae9a59f5e"
  },
  {
    "url": "assets/js/62.bd48a31b.js",
    "revision": "11659cab16d8df85d5c50dfdb4ced447"
  },
  {
    "url": "assets/js/63.f6b33e37.js",
    "revision": "cc1b4db917c0cddee8cecad1ebb2d901"
  },
  {
    "url": "assets/js/64.2fd2470f.js",
    "revision": "67373e9ced75efbc25f6d649d8b840ac"
  },
  {
    "url": "assets/js/65.0df44d62.js",
    "revision": "1f60e65ecbb41c87b31cdd2f7e9dfe07"
  },
  {
    "url": "assets/js/66.8ed28a0e.js",
    "revision": "bfe9a297804a08a266cc9ebea55681ac"
  },
  {
    "url": "assets/js/67.81b145ae.js",
    "revision": "a743a8f89f674db538fb2ee0d450085b"
  },
  {
    "url": "assets/js/68.cd8f173b.js",
    "revision": "dbeba63e34911d9306e65713783947c2"
  },
  {
    "url": "assets/js/69.894fd5d5.js",
    "revision": "66e458c78f5991ae9ee8d7a02a151910"
  },
  {
    "url": "assets/js/7.2ddd48e6.js",
    "revision": "29f7a724dad49be6948ea3383d030d28"
  },
  {
    "url": "assets/js/70.ea09edbb.js",
    "revision": "1a382c41c283a78917a005e87f83299b"
  },
  {
    "url": "assets/js/71.2ae2ac2b.js",
    "revision": "de434da198968183d444f2776060ad35"
  },
  {
    "url": "assets/js/72.93ecd326.js",
    "revision": "0af9063474b6ae7f7751fd86b8e6be4e"
  },
  {
    "url": "assets/js/73.ec4760e3.js",
    "revision": "a1bc8307856b1f9221cf9b0658b65353"
  },
  {
    "url": "assets/js/74.208fa967.js",
    "revision": "94f0b596f429fd1387b1c5b4c2c09268"
  },
  {
    "url": "assets/js/75.7e6395de.js",
    "revision": "cf716bac41dca74c076cd1f2f4c8e213"
  },
  {
    "url": "assets/js/76.09f36953.js",
    "revision": "09ddade6e521685c65acd55a7bbadfb0"
  },
  {
    "url": "assets/js/77.cce35442.js",
    "revision": "c8d5abee9f18e030db9b2c868c5c5c9e"
  },
  {
    "url": "assets/js/78.fcafa482.js",
    "revision": "f2b1e7e0b3648c85da9778b00cc0547d"
  },
  {
    "url": "assets/js/79.0d5189a1.js",
    "revision": "b0eaf3a56e3044d550e14b74df23ee1e"
  },
  {
    "url": "assets/js/8.1fb332aa.js",
    "revision": "b9fc34f5581483f3c49ed2838dde4b50"
  },
  {
    "url": "assets/js/80.152f5982.js",
    "revision": "32451ee30d6212143c884ba658867891"
  },
  {
    "url": "assets/js/81.a32df1b7.js",
    "revision": "fcc9ccff70469189fd9cc8396fed7de8"
  },
  {
    "url": "assets/js/82.cff81b1b.js",
    "revision": "7e88c3f7824a7794415051742a82e4f4"
  },
  {
    "url": "assets/js/83.28de86fd.js",
    "revision": "6ff0cd35f63acfc7b1b6dca60e75ee2f"
  },
  {
    "url": "assets/js/84.ae6455a1.js",
    "revision": "6ee926fab981945353bb5fc527c07c3b"
  },
  {
    "url": "assets/js/85.711b0766.js",
    "revision": "80706ab0154d0e953d269fc94757ddd4"
  },
  {
    "url": "assets/js/86.892a205c.js",
    "revision": "cd1445cacaf0b25314f919220ce5af30"
  },
  {
    "url": "assets/js/87.f6e4162e.js",
    "revision": "5df63e2dd312c151be06cfeffe21282e"
  },
  {
    "url": "assets/js/88.e0475416.js",
    "revision": "3c39fc1685a32ef092bfa9d5d31c60f7"
  },
  {
    "url": "assets/js/89.8579cd2e.js",
    "revision": "08f24fae158a1c760182c663630b9106"
  },
  {
    "url": "assets/js/9.ade5b115.js",
    "revision": "54734064a0c0e2a89a899e44b10dd037"
  },
  {
    "url": "assets/js/90.4cacef07.js",
    "revision": "b46dba81d9ea7fa722e960401228728e"
  },
  {
    "url": "assets/js/91.7cdc02f4.js",
    "revision": "b14a3989b1ada8c4cc6ff35c383f39a5"
  },
  {
    "url": "assets/js/92.481efcdc.js",
    "revision": "45f75703dcc9f88f58a86f1854a04d76"
  },
  {
    "url": "assets/js/93.934cb09c.js",
    "revision": "798855ed3c03338e08b223d9431ee7c4"
  },
  {
    "url": "assets/js/94.7eef7d11.js",
    "revision": "17f6a9a4fcce5a8d7bdf01b823d100cf"
  },
  {
    "url": "assets/js/95.4de89ada.js",
    "revision": "a7e2f2804ab9d7d7fa2675ca5e3c7c3f"
  },
  {
    "url": "assets/js/96.c73e7e81.js",
    "revision": "97b9ce7b0a14877356fd5c2b2566f372"
  },
  {
    "url": "assets/js/97.aacd026e.js",
    "revision": "ed4535508422ae34589eb80ec2487e42"
  },
  {
    "url": "assets/js/98.af0445aa.js",
    "revision": "97e6751c940024121ae5d53b1a466da5"
  },
  {
    "url": "assets/js/99.0de8470f.js",
    "revision": "e35c82e95cff71d52b1ba4f76ca890e8"
  },
  {
    "url": "assets/js/app.ad76cd63.js",
    "revision": "c497e7b2643737da39d2f00c8e09148d"
  },
  {
    "url": "assets/js/vendors~flowchart.65e94d02.js",
    "revision": "0ebcd0f7930734160e15c97a4105a0f7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "54fb1a9df49d0f678dee4200e96d3b38"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1b560f3320eb795b0a3f56d1c17a8829"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8321e4b6a55c51454b4357c91f057192"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0be74aff8c62bc6635c2a3197fcf114f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a92ee98f98553a239cf3bbd9db040211"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "29be9cde3921f135aefdbfd0c4cd4a64"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d1c7ed74c3f4f9861655132789ae7c0d"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5f7e83885aabd83edae3d715360bb1ae"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "eee89e3838222f5f446627449ef3cd32"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4aaebf77476b25c2a282b24e0609aa0d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "388da49ddcc28b49a0614867bfe43c95"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "b592f61fceb9dc1043ce2966210fdb24"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "62877fb40d59c2accdea4af4e076ec9d"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "5fe53980dd461e8f0bcc9dafdcd49544"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8fe54f48e4e1a2e0be1851ae32921a3d"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "dd773d4340f77f744862efa259b3dc9e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "47c727033a0ce23ca72d5cf0a657b53f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "f78247762a4460e0a3a79afa15dd8a36"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "2e4c1a8b71394aa201578bca65b74c9f"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "99055fe785c55f0fbfe275c1d1190db1"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "98ee1dc0b100c6cb2d33d5caaaf7111e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "b16c0b326e6840469fb90a2dda185967"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "53d823f5ef7feb3238b6427bab20534a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "228d35e2f4d2a7ba05d499fdc94e74ee"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "10691bda68b7c2adef13a6c38f7c2894"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "9be56c3220ba0590c7fa7f453ba41d9a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "38d2bbac80910e08e4df5ac685028802"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "d04ef727ca0ebb23c5097ae5a85fb2ff"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "830562f06e0e52536010a84748a53f1b"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e0513bef016db75d7ea030140a947263"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "68e915d102676e0293df53f5e58e59bb"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2eba7dce80d87dff712195c554926e26"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ffad9b93c287f7e656410266a03d44bb"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "eec9e45290c2e5a73b61f007253c533c"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5b9558b79ff46c364eeee43c8c2c3768"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0525d02358862ac0dde990d6a9c6a6aa"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b18c2d7e9c6214337af0b7bb099e77f1"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "f300de0104428b1e6a12355f9b5cdead"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6ea0b756d3109e3bdbac51f69f171029"
  },
  {
    "url": "basis/os/index.html",
    "revision": "58ee58a1edd37cda38d865d07b30c904"
  },
  {
    "url": "book/index.html",
    "revision": "e9f1ff22d32658fbc26782b7365b4010"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "db1f3dae8d918682afe8f2b20a2cedee"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "872f7feb9633c4db8b2c320d18d40067"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "492e723127b955c05610c26137384141"
  },
  {
    "url": "c/audio/index.html",
    "revision": "23e9f159ec52480269683df0744287bc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "9fdbf1ba4ce6ab021f0e887d08e6302a"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "1c0e78641000fe2573b6a067d199c36d"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7ef52f477d0a896e73e5cd8d7ec4597f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ed48fd513f43e9397dccca7a43bafbc8"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "d91a18636ec4e8a00797e4056c2c710d"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "036c7ffde39b25e50edf7ae3d46d973d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "eb26f899d86b3206d518396d8dc31b5a"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "b2f24d07320daf0a63292eebb9256aa1"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "477ba9d4d7d3475cddc9d46269f7d80a"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3373f30bcd54118eb6eeb047c9aa1d07"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "85b2207a836a4850da2efb66ccc95415"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "78057774c71d3d5a3e708a1c3bc6e218"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "db66ef82f373cbbfba0f07f3355d35c1"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "48848fa6bbd5a2009fe0be2a6b04f2c6"
  },
  {
    "url": "c/program/index.html",
    "revision": "af09916c72e826e312281d95992dd89f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "34f36a57b497d9e91a214f1f8d5d5c0d"
  },
  {
    "url": "categories/index.html",
    "revision": "1a30aa5f4cad686d32436e0ad57ac118"
  },
  {
    "url": "figma/index.html",
    "revision": "6e66804775e5c8b2c3bb68d5bdff4822"
  },
  {
    "url": "flutter/index.html",
    "revision": "c8c3b81bc1d099379d5e8f24751deac4"
  },
  {
    "url": "flutter/point.html",
    "revision": "4c33c13b1fb394e1769ed7ed7b3d3ca2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "395b895c4b61702a0eb0cfa504cf584a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "45b623f88f716eb3629ab5d55e31da4c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "8a375e84685c96655c07656463aac3ce"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f8b2e51e9b9f77e465cb682bf19c9ccc"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "903cdce2cbe3bab9bc65f1e7db6f3842"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2f7a0fa594b4a6ab2f58e1b97cfde2c3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b9e6ce5fb445bd0aac9838ea15603119"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e68744eef43f9cf8aa51d283c2de28e4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "fd3b1b84b75cb5fb454aedf4bae9b121"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "7522a7ffae5dc81dddb06c6463431dbd"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "47337a9de3a81bb2f6161bbc44c66f64"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c8beee61c92b54eedd3534b34ae2c189"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "00fffc9eef9f9daa91a87dbcdd3b637b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "507e53127f4f9ccd4d05387d8de260ac"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "70ef67705ee633672b01f43edde1ecb5"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "0e6ff67f8cf11985b55b62c956dd42a6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8949f980fe7420c373edc9ea8f02bc1c"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7a8e21ba462ad44cdfe7591bcd903128"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f746010d9ddeccdb96aee89e2ea46155"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "6aec0b791e42bfc631821be33e8ab4d5"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "4434eef2b787feb67d6348c3b042fbd9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "2e43b36c4a2ad1208bf39694ea5286e3"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7c1c1ea7fec9184176bfe6059aaadd5f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "06bc22f9c5eebb8ed051d2c89966d527"
  },
  {
    "url": "haskell/index.html",
    "revision": "01e5d025bcc3eb705488fcb07fb07338"
  },
  {
    "url": "index.html",
    "revision": "c30a39e95030a43d833fa785ff7a41b1"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "2271c9b9f2b404c218491b478c762f75"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7c3fbc262bce96398c8f0bdf955e406c"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c496c3057d507a7a0190add80d8033ff"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c5e5649c77f6d39dbaaa7bc8847f7ecc"
  },
  {
    "url": "python/index.html",
    "revision": "3dc95b812a1420f3430d989345e00866"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "27bc598499a3dbf193b5f7be89c217b6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "bb13c6a1c10615671b73fc695096e16d"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3ce1c93682488ef62022c6e48326c5bc"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "4492a6c471fdc2bc444097e83e6c464d"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1e9c7435d94254b05e363df89c7f53ec"
  },
  {
    "url": "swift/better/di.html",
    "revision": "56e8da2954ba1683400dd7905604d8b3"
  },
  {
    "url": "swift/better/index.html",
    "revision": "65c796a1708a0a65236b518ddb5048f0"
  },
  {
    "url": "swift/better/last.html",
    "revision": "b8107753a11c212ab779dcfa8764eeb4"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "fd300bd8c379161bb06f11bd951570cd"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "a748264340bcb805a8ede56f63a319dd"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "beb9eb5b0e9245555229150bea4eb1e5"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3a03acfde302f9afc7fccbe7bec354bd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4a53d334c6fc03b55989204b9603b095"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "98ed5f28eba09ee2e7563b48810325f5"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b61bbdb3636dc95900782eca3e24df5b"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "578d3494dc1c15018949be6406a9836e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a22ff2ba17ad7ff3a785c55618d00c62"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0e12bd1838a88516871015193c3778c9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "e0dcfd46da45caaef1a8f6502dd0dcd3"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0268520f80c9ffe4c9a2b4144f7781d2"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a2d82f22bcc7498a3b173863e6eb4722"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e90e09b47464c3f3d0c25e845be2a456"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "addd4cf4e8f43209ff6c22f95d08887b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "6ad58c3accd41f860c4e62a770a2f569"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a66a11d7226e06801694b412ff4c935e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b6df2a9e4a956af022208427ef4e9578"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "b5465280ea1b9a22f070a29bc1998e35"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9924493681cf6b919dda11b9f97d4ee4"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3a46fb2145770f25e372b5d819b40384"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "19b236ac52248be5f05b428f66dfa2a6"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "6e84fe6dee561a6e37f1598064a3bed5"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "ff6cbed284149daa38bc10d335af2bcf"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "bfd2e00da722ca6a94587abbb043d59e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "67e8202860296b195c7443fceebdace0"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3501f86eadb03915ac88a92c05a50655"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "7dfb19a5040feb582de7fa58bf8f4cff"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "8c2299f7999bd4f6b1e2c972cecb6af7"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "d40e69485e62e56b89503d55b127eac6"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "4cb77bb315014345ef9f7c9ad0f897c4"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c5c28c4377c962d0b0c29891cff6d339"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "1ef64f033b341865057fb87625ec9246"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "a9cf8cb3edc04854abbafb13d0e24529"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "84331a73611e7059e2cdeb6f237fb896"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "8a2c39c212eaa0b832a932e40ccf308c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "68cfb10dce6b5a41223795e1348bea25"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "7174ca5ddc03c71b594a19a7e98dce2e"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "fd4350c0d28b34aa8613cafccfa023ff"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4965a231a0446e9b590bcd66ca739601"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "fec8620618b0a19b4386d8422a5aedeb"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "45374e23877336d9802e486c4ec6c00c"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8d847cac2172e25792187a19aa9b3927"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b5804b11aec670141b6ffe615ccabe7c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "d5cd4203bad64a514c62bee95a4c31dd"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "497bcd544f2816e484210a3062c73105"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c885171095d8c6979713008c4505e62e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "5d0b76b370aa8aee056a7e9a9ded1c40"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5d1e2805f8a534053f23aeae27959959"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4d84b8c5b9640690745f5d4ae766fa8f"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6e8c9064ca74756d067a964baa9bd45a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "cf3284156623a0aebe5ddec200003e4c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "d59039ab91db6910056390ee0200f843"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "06ae85addca788b1687c712fca64c53a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "6f96a2c5deeed0db3e8b0aa7f5034251"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2b9ccee91c05c4e684a47a1ad201f4a9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f08d35bbcfe287d2fa820466cb967f20"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "976dba83c76a10a7448671b139c150c7"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1f1a82b49a8d17dcec9b713fc0164767"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c8edf49c3dd8cfb4b18fc57f9af6894f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "78d26ed0a0870117779021dc469321ce"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0e6ba49b08c6b82ee28c7961ab0a7291"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "102449e408836c3f75c68cd0b820dc5e"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3aa97b90a3891b634e1c2cf701756ba7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "bb6c6179e844391636014ba6e91e5e14"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "9108b9fd62b4e2a55a8b13293b3249a7"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f3ce77433c625b02ddfc3893149a083e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b8706b2703581794ab170cc72b91d4d5"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5c5716fca2916c823eaaa870ddc0ca56"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e86adab170d06d2e83c3ef62e272c906"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "409dad3c80d25d2f9f9aba0ed04c8e72"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "98529c96c28af253def05a7c1ee08744"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "35836b95d1a0cc64c1570dd890f00f8b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e59cbbdc017b0ea9aa5b0c1fea3091a8"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "ccfc52f151c7ac763eb32785ccd73f64"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "62413bd883497e9dde2aec6d61b3dfbc"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "43ee4d4a1c57778a9f63ef5a96f7a893"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "e31c1574315b9bd5764a2780ccac1758"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "dfa416f91a864cd23a21e118e88beca8"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "46cab3222ed935538eb86a3a9e7bcd67"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "06de580b81fc100ce99dde17f3efaa8d"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "edf843e424006d436a5dedbbb2c1e08d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "aeddb127f880d1db5fb7d713de4f417e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7ce90bf7d82954e785db56b8194aef54"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5373f2f4cae172fc96eace9f327f3d20"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "26b87ca6e9c60f88c754d7fc21b25ab0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5fa7441ef826e04d509991d82c278c1d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "73677b7e64d4b5e6ca34a7f5cc840255"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2147d5fe45103dff7a8e8118e70a0962"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fe4c17d1815e85f0383bf9a515e9ab61"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ae158df8a59d6830033266b46c90e1fb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1c1014cdccd9f283587bedd5b87aa1a9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "957cd0d623aa46c988d8b51b0ca8ab55"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2d493cf4c058b0518d610cb1a4961274"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1fd141e31257cd77e6fe54442572ba74"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "01a9be4768f92feea9a6e1c14606c0f0"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "962a4768e77d12507f6c1736e2db9349"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "65248c79e79c880ada1ba75d2aadcd64"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "00affefd06ea2a7492f7da0aaf6a86ae"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e41d4538ddd6cecf1c4e53b1792ee97a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7edef7ea2d1736e93e65a92d6c48999e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "ca556ad8fc85d36d45eec706c2d87018"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "380135487f000d30ee022fc90679e783"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "48c7a91b63b9b0c4c32a8987f94ffd64"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "a5b70f6c8e40c3206f293c5b4d1c9366"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c8b73cca2a66fb0ca3b1381f0595fae7"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f01086ccfbff070c1c45def31ad7f059"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "6d39895ed2c6b766a6c7cfe02705731f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1a6772e74dcc070bdcb9c1aa596e9b01"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4ad7154588feb6c9fe335ad9c798e510"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c45e5c7e4c6030d8ff8d687a05e5af7e"
  },
  {
    "url": "tag/index.html",
    "revision": "c464b060a38bcf16d223238a54760172"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9748ca14b605102a1aca8749173a4d24"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "76fb1b29731d8deb813b65517565aa1a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "13aefe77a326b186aaf08b60b1da1341"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "bdf46290dbe94567b4ad6045e83ab492"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "83f001382d982bbd3931631fa17a8b1c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "cf337af843371a23c25c86ecca6ae10d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "185d3310507517635776a059bb08a4d4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "fcbc6cdf94944e496325a1f0d958dd62"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "5b2cd44f15f2f091be9eeae1cde211d8"
  },
  {
    "url": "tag/json/index.html",
    "revision": "598b2520816d18e4d992866bb4ad57af"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "24adf1d155129b1766ded5d38c4c044d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "742761cf3909d24d11f32796061c092b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "91d40f8f3cf91980c746451b46c37121"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "bd3b87c7a830d5b207c6e6de6fbfd001"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "950d4bec5ffdb26f65e46ad183e329f2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "123d3910d0217bf396c9432200f2582b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "eb07ec7e6644a692d3dd0c9a67416b3e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "dcf2b6be0c52b7f6d85a7f41a112aaa6"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "11edfc542e6e81dd8445c270fa037f6f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e64bcc80a5906f80b357eb3410d9fece"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ef14db96a3d3f7d5c70a532061c96ef8"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6ce27dd2ebe6601572eda904b6ebf709"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "c2ee2921b5fa90655d262ca887f41348"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "96d031a757508b5075d2c8f74e4bd985"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c367ce020e82a9265d0b511844da2a9e"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "1eee5afcb98313e6a08ac5d10c73dd98"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "6fbcbb793d196a5ddfdefd1277b8aca2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "fe0af7627df79c24dbf98149a4c43547"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "62a527257e09da57564f9615876789e0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ce444c9ab7d92e9ce13537c156c1f4fa"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "48191eb78e61249990e1418f96be7a27"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d08f230d01ee4260b6b9af97bd05709a"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "827b0a50232fa556e61f3778e91f31e5"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ff21859f71de3164220cca4cc94284f6"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "e9ce3cc82956bf59f0abe7a49f912edb"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b4a9aaaf068c97aee73ea1360a4c61bc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5ec0080f87858928df89ef1e278159db"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "64dcd33faedbab7e879ae043e67c96b7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "733550c9e492e8e20b59349b1105e851"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3682e728ec49d43af2f278518568eb42"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3735c7ada3ff257852ee8726300ea8c6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "71d8d6ea3a57253e6e32844ee9dc4d97"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "653b65080de31e08bc99376ea536df09"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5239896af6fd271e4a2519053b81f7c3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b0f0013a8eb58a777d3cad0f5b603923"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a0627654a283a9c6fdfcd8787e0624b8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1697b5f8811c4c6bf3b2839064271b3a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "6b85562ef2d1ff1c0b3cf6f59e5d7f42"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9c6a2d5b00229c0069e59b5c9fea7338"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f5c9f9033c87e905956b29e6f62bd002"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8f7d85ac22bbef16bc79f523ca89cae9"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a7a897521ea96095405d4342211003bb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "97bb33efb58c0d434cf32385e63c3d3d"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "644865ecb8cd555ee7518f9e21c2f093"
  },
  {
    "url": "timeline/index.html",
    "revision": "5bfccd5cb7d5cc02ddd3a18f285639f8"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "b9e37a6329f3275c49f704a3a005d940"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "9413078a089034735e9c33a8145a6a1f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "728a8a30790cc3197ba3f105bb7034ab"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c4f9f530211f629f818359c04a405c88"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "06574473df58aa0b20b6769ce55ab657"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7272c2a3eb3d11657213032e9fb76ce4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bc819f5b5a9fcb6e8b0497406408166d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f3ff54d5b55c4e9498cceeb669453340"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "95f370dd14543d975a82bf2f0e20c115"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "8c33fac6911c12fbd590621a16e12aae"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2a42eebe0302e5b1c7f206afafb5e70d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ec7baa783b8fbe2f0a8f51f339b20bb3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "21f249a811d33f6fbbaaccdd013705cc"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "6e414b6ed69591bc090e5dfcf2af84ed"
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
