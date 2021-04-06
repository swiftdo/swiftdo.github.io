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
    "revision": "13ac35b7cc9651f35d1ce6b2f0736c78"
  },
  {
    "url": "about/app/index.html",
    "revision": "3589315745ba053d73cf19d7d0bdbc72"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "203c88ccde0aa6a40ebf1e92da7c4499"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ebac436172e7336a23ded11f207d382e"
  },
  {
    "url": "about/index/index.html",
    "revision": "b7bda81094fb9486badfa4c2238b4346"
  },
  {
    "url": "ai/index.html",
    "revision": "41b73e93b8fbc7ceb0c2bc4e44ffbeee"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "751dec758a75b875bfe38b306954973f"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/100.6f4be827.js",
    "revision": "8f31bb6e5c56c46bc5fab54d917ecb86"
  },
  {
    "url": "assets/js/101.4dec253b.js",
    "revision": "ea2a195447d5b4ee53a65e66a665bfc3"
  },
  {
    "url": "assets/js/102.82569877.js",
    "revision": "4a7b0b96be6c03531a2bfcc1d8f5d69e"
  },
  {
    "url": "assets/js/103.7c460cc8.js",
    "revision": "c479e36d701bdd27e8d37d44df4abb63"
  },
  {
    "url": "assets/js/104.fbb7bbe5.js",
    "revision": "0423724287068a9cfc7915853ea6336d"
  },
  {
    "url": "assets/js/105.09c2468e.js",
    "revision": "1594687ce7a23e7d25c2119f14aeb24c"
  },
  {
    "url": "assets/js/106.35bc2597.js",
    "revision": "a45ecd2fdbe0aa1100dd8f302f34d240"
  },
  {
    "url": "assets/js/107.6f799fdf.js",
    "revision": "b42bd371cd69916a85440bae6112ba39"
  },
  {
    "url": "assets/js/108.8c89656a.js",
    "revision": "d62b5617da037744911f95de524ab676"
  },
  {
    "url": "assets/js/109.dbac8ddb.js",
    "revision": "3fd3e36ad7a2771cbcc35bc63a28d3d8"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.70086f86.js",
    "revision": "d8199a5a01d47c4442bd3a7c9b4ad032"
  },
  {
    "url": "assets/js/111.80773d3a.js",
    "revision": "6d10a957168a174bffe82b027728aa84"
  },
  {
    "url": "assets/js/112.f3d73a32.js",
    "revision": "f6951c614b0747283feb2cb1a06846b8"
  },
  {
    "url": "assets/js/113.3fb31321.js",
    "revision": "413b5f9eb25a20a74bc53c877ea1619b"
  },
  {
    "url": "assets/js/114.899d4394.js",
    "revision": "67d93dc703c05e160e3575c14a5c90e9"
  },
  {
    "url": "assets/js/115.7ad3e1c5.js",
    "revision": "001c0e3afccf31ecee1909c9a6953a3e"
  },
  {
    "url": "assets/js/116.9eb60602.js",
    "revision": "b100a6656e63a4fee361972937774e74"
  },
  {
    "url": "assets/js/117.dd6790a2.js",
    "revision": "e22ac805038ea86222ea35565f7b85a7"
  },
  {
    "url": "assets/js/118.fe66e396.js",
    "revision": "618f6fe4e0e3bf87e60a71d4d40e269d"
  },
  {
    "url": "assets/js/119.0268d012.js",
    "revision": "994d31cee6555dcb1cc308a93916160a"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.d2d12aa6.js",
    "revision": "0cbca9453948650d3b7175fa65c01920"
  },
  {
    "url": "assets/js/121.0918618f.js",
    "revision": "a7569ea32a0bfa17f439d57f9d32462b"
  },
  {
    "url": "assets/js/122.234fc488.js",
    "revision": "447f6f88fd226f26cb3be1da6fb73205"
  },
  {
    "url": "assets/js/123.7825109c.js",
    "revision": "7eab1a2bbcf7096ff97903d1fb10f043"
  },
  {
    "url": "assets/js/124.ef46787b.js",
    "revision": "f937feca6a0ef96870f4798b6928d69d"
  },
  {
    "url": "assets/js/125.bd9e5023.js",
    "revision": "f916fe3d8c7b5f13d4bc6f0e531bf918"
  },
  {
    "url": "assets/js/126.574384a1.js",
    "revision": "72dbf31721833f88e36b02cd519ea280"
  },
  {
    "url": "assets/js/127.ab1fb568.js",
    "revision": "97c04c0413d9ecb1b2f19f7e6837997a"
  },
  {
    "url": "assets/js/128.d3d70026.js",
    "revision": "b49db3592867a509d41de1297d986c86"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.429f6100.js",
    "revision": "5079abc5c70e6401e011c2b0cd42e6b2"
  },
  {
    "url": "assets/js/16.de4c7be5.js",
    "revision": "91dfe2e910e1f674302d4876d7a1ae92"
  },
  {
    "url": "assets/js/17.0ddb612b.js",
    "revision": "d005c426a00d40956ca85e652bb17c68"
  },
  {
    "url": "assets/js/18.77bbacd8.js",
    "revision": "e799887b365b13b69b761f8a100d34d3"
  },
  {
    "url": "assets/js/19.9e579819.js",
    "revision": "d7e93989eb9cb8e0d42a115b9fddeb3e"
  },
  {
    "url": "assets/js/20.5ab45d12.js",
    "revision": "952a337862377b210b286e9d1d763026"
  },
  {
    "url": "assets/js/21.feed0bc0.js",
    "revision": "53aa1b695420ac448047037df4d0da89"
  },
  {
    "url": "assets/js/22.e652841e.js",
    "revision": "1598a1fe8fbd8495fcda0045859ca648"
  },
  {
    "url": "assets/js/23.ae326ac6.js",
    "revision": "7ed82f1b9810338287d73781e3ab0b08"
  },
  {
    "url": "assets/js/24.e0203ae5.js",
    "revision": "3187102e042dafa39816382f9f165be3"
  },
  {
    "url": "assets/js/25.457686cc.js",
    "revision": "79b476642e86d0f7aec070d0ef5949ec"
  },
  {
    "url": "assets/js/26.4b920c1a.js",
    "revision": "ec4d75a4732a721677fa92bd62169bf4"
  },
  {
    "url": "assets/js/27.64b91fb0.js",
    "revision": "7d583b00bf3347b8f8b5ce957d3e24ab"
  },
  {
    "url": "assets/js/28.06dc66be.js",
    "revision": "2ca610c92b76ac76e12274ee4cdbff74"
  },
  {
    "url": "assets/js/29.14e9dae8.js",
    "revision": "261d6c286536f176aadb22cf7f538552"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.e0ab0455.js",
    "revision": "1758cfcf06bf1e56fac322d3ed375884"
  },
  {
    "url": "assets/js/31.d2f292e8.js",
    "revision": "e8254f41cfb69904a6bf2b51388a1fe5"
  },
  {
    "url": "assets/js/32.1f847e6e.js",
    "revision": "3b4e3c3579a9da9f2db14e0908180049"
  },
  {
    "url": "assets/js/33.8a8fc219.js",
    "revision": "56bd8cd421678e9f3cb4731a6c813dc4"
  },
  {
    "url": "assets/js/34.33fe4126.js",
    "revision": "0dffa2449e6b577749e4804592f18d13"
  },
  {
    "url": "assets/js/35.bbedce37.js",
    "revision": "ef9fdb727fac061c8a9efa24fbbbf364"
  },
  {
    "url": "assets/js/36.20613275.js",
    "revision": "f81aba5382c0c3d4cde1ac060045e0ad"
  },
  {
    "url": "assets/js/37.25a682af.js",
    "revision": "7f4242f2bf3d650c8e6e463bbfd9203c"
  },
  {
    "url": "assets/js/38.009f151a.js",
    "revision": "420a6acc68441cf285e0368c29df89a2"
  },
  {
    "url": "assets/js/39.ca73683d.js",
    "revision": "b455492acd8b974eaf8d4d9faeb8819b"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.e8945783.js",
    "revision": "fff741ccdddb2e369b81d3d66d7306c0"
  },
  {
    "url": "assets/js/41.624b955e.js",
    "revision": "50a0cb5347f4700082e3df190eeb22c5"
  },
  {
    "url": "assets/js/42.dfdddae1.js",
    "revision": "f3b6474c9802678b093502f06209ac8f"
  },
  {
    "url": "assets/js/43.c0ab8215.js",
    "revision": "13f7ae03478675c4410d9cfe56253a3f"
  },
  {
    "url": "assets/js/44.b889c7a7.js",
    "revision": "1977f47c338d1e429364f6fa5a2acd42"
  },
  {
    "url": "assets/js/45.ae963823.js",
    "revision": "25a3edf7e0e660472aec92faea13bedd"
  },
  {
    "url": "assets/js/46.40a44ccd.js",
    "revision": "477203711a1f3728b87f1f0d2169e856"
  },
  {
    "url": "assets/js/47.3b93b369.js",
    "revision": "6b408ef77725e1629de8ada5f3d790c7"
  },
  {
    "url": "assets/js/48.dab4ba0a.js",
    "revision": "ddecf52344edc386e293f5e1bdeb7428"
  },
  {
    "url": "assets/js/49.667fc940.js",
    "revision": "4a8b1863f2bc8cbf5d79ff250ea3d3bd"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.25635154.js",
    "revision": "28c91179adb6cdf93428166a6528d9a6"
  },
  {
    "url": "assets/js/51.f63f85f3.js",
    "revision": "529fdee788f7a6d1fed3ae058da6ef5d"
  },
  {
    "url": "assets/js/52.fd1d7075.js",
    "revision": "7205b3561aba3a3e32cd49e93da63a5c"
  },
  {
    "url": "assets/js/53.3d0bd722.js",
    "revision": "f79480efa9a96b8882e3407b47fc70e8"
  },
  {
    "url": "assets/js/54.65009450.js",
    "revision": "e2a29332246f3e0ebc4b8dd002680203"
  },
  {
    "url": "assets/js/55.2d0a5316.js",
    "revision": "afaa04df4edd06579e300c1c2261e3f8"
  },
  {
    "url": "assets/js/56.ff4b3a57.js",
    "revision": "7fa9c7d4604e8ac5cff103dbcad68d13"
  },
  {
    "url": "assets/js/57.8d532ac9.js",
    "revision": "396f990391bf24b78659c0abb6eaee41"
  },
  {
    "url": "assets/js/58.333dbd6a.js",
    "revision": "65f83e02dea80a61d039f0e7d219c9cc"
  },
  {
    "url": "assets/js/59.d379013c.js",
    "revision": "891bf6c3a865682ab025c20ae01373bd"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.481f270f.js",
    "revision": "f8d1ec0e3d4d2245bb2e451a9e733363"
  },
  {
    "url": "assets/js/61.a3c55adb.js",
    "revision": "d372b119626a8e4276a9bb80a8c38e10"
  },
  {
    "url": "assets/js/62.92d40450.js",
    "revision": "d4d1ceb51e436461c6db83da78cede80"
  },
  {
    "url": "assets/js/63.3a763bad.js",
    "revision": "de954bb5061945e957cfa3ff72b8ffbe"
  },
  {
    "url": "assets/js/64.abc821b4.js",
    "revision": "298b98c35ee7b1f3083d2d5abe8bf361"
  },
  {
    "url": "assets/js/65.dd28efb9.js",
    "revision": "6b3fd5797f9174ffc1470919bbcd3b5a"
  },
  {
    "url": "assets/js/66.da22f0f0.js",
    "revision": "6ca3968b55691344ab830f9139f410ef"
  },
  {
    "url": "assets/js/67.bd9fb27e.js",
    "revision": "e6d684ebdda7d6b35e78273ba29c54c6"
  },
  {
    "url": "assets/js/68.d1597d1f.js",
    "revision": "623fd105bb8da962fc0994e7c1858ff4"
  },
  {
    "url": "assets/js/69.fc65d9b3.js",
    "revision": "c0fa8d2513dc066ba81689725f6aff91"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.6f3eacfd.js",
    "revision": "ebd52d7085ed5570d79f12ee6e2f0dd3"
  },
  {
    "url": "assets/js/71.0ae1394d.js",
    "revision": "9ff800d4470afc50e71e4a1bfab443d5"
  },
  {
    "url": "assets/js/72.3a8fbedf.js",
    "revision": "2f14b1fada92cad581524529ec7fe479"
  },
  {
    "url": "assets/js/73.b6c0b5d9.js",
    "revision": "31e790a507d951461602e4b896d45707"
  },
  {
    "url": "assets/js/74.e85c7c5c.js",
    "revision": "ac005bba68afd1ee85606fe6d34d9553"
  },
  {
    "url": "assets/js/75.7edf7c19.js",
    "revision": "3d83d5627398914619d7a6a1ac5d58d1"
  },
  {
    "url": "assets/js/76.2c761a02.js",
    "revision": "b2ec157914bd497cfaeb636f26f2ec91"
  },
  {
    "url": "assets/js/77.a845ebbc.js",
    "revision": "33504065b329ee375bf9a296ad0a2534"
  },
  {
    "url": "assets/js/78.83d2c22f.js",
    "revision": "af33d1a08a4cb78c237ae8d0c75fd39a"
  },
  {
    "url": "assets/js/79.7ef3d4c8.js",
    "revision": "2e30eb4e7f5841294f04c15e20a0249b"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.c4423fd6.js",
    "revision": "e2edb6d6b2c470bdfec206897ff25b2d"
  },
  {
    "url": "assets/js/81.22f64ace.js",
    "revision": "2bca1a90533b5b4b07f5591d8e10bd16"
  },
  {
    "url": "assets/js/82.17b4d5cd.js",
    "revision": "3f4c9c1d00bcc35aa8b92b18c363d546"
  },
  {
    "url": "assets/js/83.cb2ff791.js",
    "revision": "ef7aed3dc4188e36738c38fe64be5f26"
  },
  {
    "url": "assets/js/84.a9d629d3.js",
    "revision": "36b60bf6b417f6fda130fa3e08ee3b05"
  },
  {
    "url": "assets/js/85.34a0bb1a.js",
    "revision": "3056a86c4f1d40623f6a7e497f1605bb"
  },
  {
    "url": "assets/js/86.ef588a7b.js",
    "revision": "536dd92b3a89509a27116e1cb3a5c130"
  },
  {
    "url": "assets/js/87.c96497c4.js",
    "revision": "bece9147c6f0ee95f2c8b3e63045edef"
  },
  {
    "url": "assets/js/88.68cf82eb.js",
    "revision": "36c45a3cd8dff09ceeddb84e218fbbe8"
  },
  {
    "url": "assets/js/89.aca3392f.js",
    "revision": "7594a2121d4f288c7189a3399c103ef4"
  },
  {
    "url": "assets/js/9.011169c0.js",
    "revision": "bb18ab651aaffaf44025d3f4abc16115"
  },
  {
    "url": "assets/js/90.8474eabd.js",
    "revision": "259a69280cff64dc157e391ed87843f2"
  },
  {
    "url": "assets/js/91.030db1af.js",
    "revision": "76d59e6ceae2ee607a4c837767fb25cf"
  },
  {
    "url": "assets/js/92.dd969431.js",
    "revision": "bdf4327b4a84cd78a08901021ebc0395"
  },
  {
    "url": "assets/js/93.368a621b.js",
    "revision": "b07b5e8fcb999d0902956f6c81dbad24"
  },
  {
    "url": "assets/js/94.74776c15.js",
    "revision": "62ccd3e314c1b23287d37db534fd627a"
  },
  {
    "url": "assets/js/95.fb7d3cab.js",
    "revision": "bfa30960376e46fdc3708b12ed4b2eea"
  },
  {
    "url": "assets/js/96.1f2aa2d2.js",
    "revision": "1259d4169e645216a9a638611b6dbc45"
  },
  {
    "url": "assets/js/97.f7f8e1f4.js",
    "revision": "3c3f52ab87cb3ab349fef0789c5a2651"
  },
  {
    "url": "assets/js/98.a0e21055.js",
    "revision": "42551d1cbc44b509aa6ba208ad1dcdd4"
  },
  {
    "url": "assets/js/99.e721a470.js",
    "revision": "53b04f3fe53ac12993574de96c6f54f1"
  },
  {
    "url": "assets/js/app.e9a7af89.js",
    "revision": "f1129c9073800242874f98854988caad"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "7a9f588c523bd110e326564f656e474a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ca33f1f99807c6ead6c67801808888a5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "26f373f9d88662799f2f04add410dc8e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c6a24fd15519caa6e56f176140fa5b69"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "cd75da0287f3433cf4d6ca3cda063f6b"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f8eb709c27ac497226f3afd18330ab1d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "671a70e0f51651afaef7028849a47599"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7285ce7577e6279311641416c2ca0a30"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "398bc215c257ecb5edf4e098421dedc5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8ca10a3bd068ed5871de5eb390c96ace"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "870f78e679c109680170c42b5cac82f3"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "fecde06513e7d6a2b78a66b0d08a632d"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "3d96c7c64284119f8c81dd29fc3311d1"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "8e9ae90a98030fd5a09122ad1c1d1622"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "d2c116a6bc0fa9e8c0018599175f7e95"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "2ea5b54932d0b394195b5409ff62ad3b"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "7ce0b030387671529d3e8a8e6e46e509"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "f1d8cff8e98c58736c3c3867287be018"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "f1f0572d17b837ec9f5dc50c12c35ce0"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "d6b5cc2d6554a8c93c18d4e2e1a3a859"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "73463ce12e27d582eaa7ad84f1179c98"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "81e9efdf9400eb5ebdcc8ee3a91ae800"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "ec0180a3334a276b855cc347c380c0c6"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "ea8c0c3cbd05047a6b6b7153e81d8771"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "47e6c7ce3ed4ddc8e483b57fa50cc7cb"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "723359880e3fd89f175bf51bdc9e7d20"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "34b2856b3e213aad9f88aec47ac957d5"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "b90b636e3dc30890553b687d4709eb67"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "5cace9b9a8ef1149585a20d8d2e5da4f"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "d427f7b98521c35dec9386badd5d163b"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "b412ad0a973ebb8eb141958506718840"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "f9acd5b4f7f2ae7f77825e85bb41726c"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "b1513936f3c8f507572a9ba8b46acead"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "4ab1c17c8b2c71babbfbcd4e748d7541"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "ec9828ba1618b69151fdf742e90a87d0"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "b2be8d74547eab301fa127006c49c278"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "2a35e203cd93dd2dc6e33339ffc75aa9"
  },
  {
    "url": "basis/design/index.html",
    "revision": "d9cef494fcdf1096d50b30a67f61e2ef"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b8bb0d9ecbfae5a8e969d33a10eceeb2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0803ca97b30768314d2e064030b0af3e"
  },
  {
    "url": "book/index.html",
    "revision": "fcecb0451ea880c8985395bef4d7d86f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4cd24347a17fcd7047d3bcba2f27b841"
  },
  {
    "url": "categories/index.html",
    "revision": "1a30f18b65ddc4db488800390349296a"
  },
  {
    "url": "figma/index.html",
    "revision": "46540fe845842557dc1ec3b4f5a46ef8"
  },
  {
    "url": "flutter/index.html",
    "revision": "70a64610f1dd33bfb3635dd386b2fa8f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "14f8626a1e9adaf095e5297141b5d33c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "83118d31360168be2f1124e6ba1c9353"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "552778ce17111095bde2d5cb30fa454d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f67a35884ea83226a9eb7a59b52094e5"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f0d24b85bfe6e8b09f4d8c9aeb5e2f9e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "090ecdac1db9be4a7c3928b05c8916e0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "71782efdef5d4943e9fea33e67d99b92"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e5449e865f9514834e03e8c942fd3d8e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4afcbfbb30d4902d08b88446ee8d9e7a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "edc6842b80f85426128149b284fd290c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9ed52ca27b0b5b100c9d2ef8b7dd3848"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8dc735cd770bf7307f01665bd7adf026"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "f8f0958853d6062fe04711f6db2526d6"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "54734df3b5c1fa6d243b8e2214ef96fe"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6a1bdcdfdb6ee55c0e0779496d684123"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e52a5fd38b7f2811ef53e71f31a2a598"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fcc2ce93b5fa5a878d505c83a5e17fbd"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d7b758856335cf1a100dbbdd50f3182b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7488e6d5ca4eab8843dfdc798f8d2df5"
  },
  {
    "url": "haskell/index.html",
    "revision": "6c651b31a2bd027c6f8877e77820a0ba"
  },
  {
    "url": "index.html",
    "revision": "1f71eb673b2de7a8893c358785a5983f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "6004c45fa1d18b88a0d1b89e05d61ecf"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "810d37653a880214c2ce3ea76fe8fe2a"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0c3ab1e22655ef4a24c45bc5ee2ab09c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "17db80e79a6c5ff57578ea55e0f3220f"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0aefed27c9c9d48b13fe462006a3fe20"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b5b0c0ef8fc7a85f34c0f2b3d4cebd98"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "69da47d1c24790a0c3e94bb3bcea20de"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "76d7a189ca96afd314a8bbef2ca7e961"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "5da63f3fb72a4764a46ae52207fe366f"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "6b05ef8be4d3cf0475080873de978ec6"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "bc2ed6f1796fe01aa6e49187ecfc5fc1"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "b9e8de3b4f8340e1ba440bb4f0f88a60"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "16222acffa571da57f7aa6b26f7f8a5a"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a8dfcf96b3c0f2d9203cf5b9fb4a5a05"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "658da6950ab63112d3c5eb5599f1c00a"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "2af92ac8725b2ab7658f46b5f5c514b8"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "5237a886da5447b6a0aab678e7197fa8"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "cb957494fa782964f926f1ced448bf46"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e9c248959840028271e09761ba42f96a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "18127c5525e42123daba526337e84c2e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f18dbb6c5ac9d232ca1ce2906be057c2"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "906d827b3c82f8036ab4266e71c6978c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f9ed57f1fba3f089cf0121b1f11d886a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "561b74167acbdbeba22c4d68496a2889"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "508e30afab7de61c557bf11c3cd7383b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "db99dde4b5b45f78a0c328fef47e83f4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b34e25a34c37c2c7b7327c2196f7d4fd"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "069264617360c0e7ab3b20e7dcd71420"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "91ff38caba86fae2aaddd4f2e610c831"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ad234b371ba6cf23750e9192b4a81cb1"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fcd218b2af6501be4a8f0b6df3bc84f8"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "53cee80e0b6f17c5ed9bf727f8ac881d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b6e39777dc709cda1a8a5523984d81fc"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "30122a3d330b9b3a03588271f0c3fc4a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "20904898d0e542de760735341ed2360b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3bcb7ed85158eaad49e8553645ab3f35"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a3c846da174bd82db055296560fc568e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6a979fb84cf5b7b90f82b5e2fb226e9e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "136bb965e029e623437f19424fe9807e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a08cab6cf8f0e736ba55d3fe2fa11357"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "8480826c8ca162ad738ac7c8743d0f02"
  },
  {
    "url": "tag/html/index.html",
    "revision": "dd59ff57c7e075efd12691153c2da312"
  },
  {
    "url": "tag/index.html",
    "revision": "97d6623ec1e849a960cef49f35c9c8cd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2e335765dad19fa31b248abfd3a09933"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "0a8fbcc3bae89980536c031196244ef7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "772722db7e3390aaa1a4d45886463015"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3fbe25b1203139f54cef06ab128fa771"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ad2baed16f402f469eee1bcb4b20de58"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9c0dd73d627887488b1202685e09b679"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4a2354e2b1df18703dfab6bd3c7267e8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1cc8f789344087741201df4345ddb352"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "04a90a764a985e669683dc56ad1dd8cd"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f1a339d1177cc19f03b0fd36a00c8520"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e77393f46b85ae08d8a77b13c5aac8a4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "364196b73bc7bcda4e1d2fa60582fe4e"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "06e59e1eeb518a6b2b452d2f01a40e75"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a731e466c0c1f235944f57e26e7b6a6f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4f925c48af3b7f3499c8c5905b3adf2b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f7318490ce0020266fa97841a31d1d8a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1496800d1c0b5518b894dbbd313ba124"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8d0baeb8ae62b911ecbce8025f765032"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f37ddd0c0d84328a5ce0455bf58bbc35"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c65fe2a301ed52601680031d496e051b"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "70785f706fd3bba0ab7b5240401f4078"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "a66ea7955a74ad6e6776f7597e55ee89"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cb75939f3bf0c8f5213ce97ed0adf3a0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2813171fc8030505f9ab995fd5ab7664"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "252b094a836c6835777abb63df0cc446"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "c64269bcd828cd9737925ae21ba6bd9e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3b6ddd04b71f0ffb797d16d9a8467f3e"
  },
  {
    "url": "timeline/index.html",
    "revision": "4bdbfb306fac00d05950c654eb4194ee"
  },
  {
    "url": "tools/git/index.html",
    "revision": "da70552932eef53a2d91376b944c78fb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "899a6c87b57eb16752820f628734966a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7690c6758824b419ee3eb5c819aae5d9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8da45726ee4d83ae15b0386c192df86b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a2ab767c5b6bafce628f3398f1fc9dce"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a86cd5bddd7156837e57a33999a97c4a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d7e2a3e0d8014ef8d6bfea946d71477b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4f56af7a413ab605d2134b301f46123f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b73db1bde1ca70eadfefe999e1320218"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "97cf94616e92440257fbb9be501077a1"
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
