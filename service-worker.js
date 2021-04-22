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
    "revision": "ac7172f67a66aa2cfb52b1604389114e"
  },
  {
    "url": "about/app/index.html",
    "revision": "b32ce5077713b7a47980b82686e7d9c8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c774fdac61e339629dd14ce86bb39439"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "577cc3e42fb18ef3cd245fe3bf1f5e69"
  },
  {
    "url": "about/index/index.html",
    "revision": "462e502b99b99b7287dd5c132b2cc2d6"
  },
  {
    "url": "ai/index.html",
    "revision": "66486f2cfbabf92f7299b7405d477959"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d2e25181e6b4c68eed234672916a9f8b"
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
    "url": "assets/js/100.e1152958.js",
    "revision": "af62608b92a19a00aabe576ad819108d"
  },
  {
    "url": "assets/js/101.28dbc50d.js",
    "revision": "8123d79ea7f854e636f3e8ff9f5f63df"
  },
  {
    "url": "assets/js/102.5b32d737.js",
    "revision": "7f89b03fc7c6590c998e96b11d0406e1"
  },
  {
    "url": "assets/js/103.20dce6ea.js",
    "revision": "38d2c75e53e337194f5bf6a1644d00d3"
  },
  {
    "url": "assets/js/104.8306d214.js",
    "revision": "9ace37e1e9c3a7913caf65c931690ed3"
  },
  {
    "url": "assets/js/105.27de0198.js",
    "revision": "556490f4ccfb92f12a9419acee99340a"
  },
  {
    "url": "assets/js/106.73f496a2.js",
    "revision": "d47f86f1e8a08428b9a1e9c48b5b0589"
  },
  {
    "url": "assets/js/107.3e9a80bf.js",
    "revision": "05fe7ca4456409996175707d2fd3fd5b"
  },
  {
    "url": "assets/js/108.4c0550f8.js",
    "revision": "d477781a58b6f66353090879de7dce08"
  },
  {
    "url": "assets/js/109.12a6c791.js",
    "revision": "6e4ea6116b51bf62b310adac30b67cb9"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.219ffff5.js",
    "revision": "04f08cf524caf15d97cc56e93b4371ee"
  },
  {
    "url": "assets/js/111.177e8f28.js",
    "revision": "31b1d7634aca1ebd5ff2346cea8ce8d7"
  },
  {
    "url": "assets/js/112.4e1952e2.js",
    "revision": "0f76e68409370b03fc545ff0c6bc56c6"
  },
  {
    "url": "assets/js/113.7d5b1046.js",
    "revision": "e8d95c226447e7fd4c7e04b72204a110"
  },
  {
    "url": "assets/js/114.a74e72f0.js",
    "revision": "5be43d4470c430fab8f597c068793edd"
  },
  {
    "url": "assets/js/115.2a0d2dee.js",
    "revision": "3736677b44ab7634a04e654b1f40eb31"
  },
  {
    "url": "assets/js/116.cd3a7781.js",
    "revision": "6042bf2a06391e747aaa2b750daa3b53"
  },
  {
    "url": "assets/js/117.aba88a8c.js",
    "revision": "510ea8812ab09c9eff270d6e9fa3e0b4"
  },
  {
    "url": "assets/js/118.8b1c1014.js",
    "revision": "ed03d50c79d9b7bd5a07ed79b5e5f88a"
  },
  {
    "url": "assets/js/119.3ce8cbcb.js",
    "revision": "28c579d97c137b466a1ba0b1dd1befb3"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.dff0dbfe.js",
    "revision": "773e7be4a4077e0c2dfe8e94ff670521"
  },
  {
    "url": "assets/js/121.843ec361.js",
    "revision": "d2a142c9fa525bf156a52e3808076548"
  },
  {
    "url": "assets/js/122.ab5988a6.js",
    "revision": "37ba2c34e75688f3256a5bb57ea587f9"
  },
  {
    "url": "assets/js/123.91d5c92d.js",
    "revision": "520daf20307b9deb2df576ed14b218de"
  },
  {
    "url": "assets/js/124.f2b3c098.js",
    "revision": "0c6a9822e7e0ae47979ffc72a355052f"
  },
  {
    "url": "assets/js/125.a77aae9a.js",
    "revision": "e960500bc3f9207731ef8858dfe062d2"
  },
  {
    "url": "assets/js/126.83f691e0.js",
    "revision": "2ab793634c7586e18afcd168df8b61ab"
  },
  {
    "url": "assets/js/127.6a80fc31.js",
    "revision": "35c04cd6729656281d9165f426baffaa"
  },
  {
    "url": "assets/js/128.6963dddf.js",
    "revision": "06b4fc3332357e656a37342e44320b53"
  },
  {
    "url": "assets/js/129.56dd91fb.js",
    "revision": "c0b710b4df6504c8b20b0b929fd30fe7"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.2ea14396.js",
    "revision": "c3365b5d23424256342010350a96dcdf"
  },
  {
    "url": "assets/js/131.e44b1866.js",
    "revision": "09e72d57dd81cc3113c464a9325330c8"
  },
  {
    "url": "assets/js/132.1c2ad3d3.js",
    "revision": "944011e6294053eb9c0ca127293e9f48"
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
    "url": "assets/js/32.7a09da0c.js",
    "revision": "0b71713c490967df6d9751c80033dcad"
  },
  {
    "url": "assets/js/33.793d4493.js",
    "revision": "2f0be5e5262419bea2b6726ba4c3f621"
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
    "url": "assets/js/52.142d9d1f.js",
    "revision": "7e2820a99cef777e336f5000cd8db24f"
  },
  {
    "url": "assets/js/53.43b5d48d.js",
    "revision": "f0444f55de80dbe6abec5e3a787f052a"
  },
  {
    "url": "assets/js/54.db4a668d.js",
    "revision": "d1ef9fd7e9e3edab23658bc664b63b2a"
  },
  {
    "url": "assets/js/55.53fb246e.js",
    "revision": "388e90f2d11323cf6a58e4b8c6fc1a39"
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
    "url": "assets/js/58.6bb404ac.js",
    "revision": "a28d173ef7b0cf368f027040693ae6ae"
  },
  {
    "url": "assets/js/59.1cc5b303.js",
    "revision": "ec20cc1fbe698c08c9f0b51a8117e88e"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.ea629e4d.js",
    "revision": "f815306f0227e9c45ceb628f77fbad61"
  },
  {
    "url": "assets/js/61.a3c55adb.js",
    "revision": "d372b119626a8e4276a9bb80a8c38e10"
  },
  {
    "url": "assets/js/62.1ccdc91b.js",
    "revision": "3363aff368f126e927d64efe33d6d3ed"
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
    "url": "assets/js/74.544a41d1.js",
    "revision": "a97dbe5921acbe125e6b2d39e6b74452"
  },
  {
    "url": "assets/js/75.76a3896f.js",
    "revision": "d3cda7844e5eafcd6d2cdc1b1922e6c1"
  },
  {
    "url": "assets/js/76.8ad54fa4.js",
    "revision": "040f4ed2a49f4d4351c1f309fd5b2199"
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
    "url": "assets/js/79.2367bee2.js",
    "revision": "fa3e4c19500f21a90332edfe896d0070"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.ad59d20c.js",
    "revision": "de99eb89c483824415a77afe5cbc8a0b"
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
    "url": "assets/js/84.1c3480b4.js",
    "revision": "fa4b51a7ee2c510ab1df594a696692c2"
  },
  {
    "url": "assets/js/85.b9675b29.js",
    "revision": "40d3147152626075a687a3c04ef15bf3"
  },
  {
    "url": "assets/js/86.554c9bd0.js",
    "revision": "1eafa1a818358dcd8739a064acb004ba"
  },
  {
    "url": "assets/js/87.aac4a2ab.js",
    "revision": "c6d2ea3b0288dccd965b6fe7ce3457e1"
  },
  {
    "url": "assets/js/88.e5ff3492.js",
    "revision": "75e17ede67d1cb0c303cf7b536e4f9da"
  },
  {
    "url": "assets/js/89.995b1b72.js",
    "revision": "a649a3d64dbc84e011b2233c31dc504d"
  },
  {
    "url": "assets/js/9.45791bd1.js",
    "revision": "a616b8870822b0ddaa5edae8091a74e6"
  },
  {
    "url": "assets/js/90.272ae0bc.js",
    "revision": "a868be63f736f8c5e7f53717ed591058"
  },
  {
    "url": "assets/js/91.5bdf192f.js",
    "revision": "52bd2ea32638677212aaab17a3c4461e"
  },
  {
    "url": "assets/js/92.139fc131.js",
    "revision": "aa85bfbc8a252c6a8c1ae0815ef3661e"
  },
  {
    "url": "assets/js/93.9e215dfb.js",
    "revision": "132ded164509ce0b16c08318c22f71bf"
  },
  {
    "url": "assets/js/94.1cd9472d.js",
    "revision": "a3f8279d2b75acfdb83c273e53dd3f75"
  },
  {
    "url": "assets/js/95.f9d632ba.js",
    "revision": "46c924527ed57c4f89ebec06e3baddfe"
  },
  {
    "url": "assets/js/96.00e12201.js",
    "revision": "1e2e9eda9367d7a423c9daa91daf9d8c"
  },
  {
    "url": "assets/js/97.51ba32b0.js",
    "revision": "1f5e340dbb22537d9f9515720d5b816d"
  },
  {
    "url": "assets/js/98.b3dd6eaa.js",
    "revision": "22f2d999bc5f029b954bea84dfeda4e9"
  },
  {
    "url": "assets/js/99.0e83980b.js",
    "revision": "36b7e010d4c9709ab476d73888dc805a"
  },
  {
    "url": "assets/js/app.fdd2fcfc.js",
    "revision": "df8b7669770c437f9242618545badb83"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "2d231b8ec250e5e2294a4298292e460f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "078b7edde63bde6ce44328554bce4630"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "bf45b0492163f3231b4136fdd500b4ef"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "da22384ea8c36deb419ae5d3d48b9f63"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5a41a8563e06864c40537b02b3c35f50"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "283bd6ce25feb808ec83f4f75cae433d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3b030d25ce8ba3a16ae13bd485ec54b3"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a3db592cda113ffd96d2f53d220dd126"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "be1bdeab25b57c36ae34543320fce747"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f17377ec0eafb2df8c795b66515babcc"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "685b1e4f27afb677476fe34d8491fa54"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "bbdcb496883e4c5cf5e6bbe9625475c1"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "cc0e4926fae8e468f34c88796504a720"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "eeb2e525f32119ef9bc31602b8a91159"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "b5f1d7b76a56506447be0ffc8fdde65d"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "2ac48eeb752c3c35e817b1a3d54f4db5"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "3c23c3925475d34572474fb9f93e748f"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "382ee3be1fcc62650b060c3fa22eb68d"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "a0dc75760363c61c6de6d349f377d600"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "fb6427878d317089cb9b7a470007abd1"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "c72eaca89d39db51df5c164e209f8a67"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "d0e63995731890f6769fc4436fe2c31a"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "fa856b85681cd5906d1b83d5c4682605"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "f5c9cf0fa48bab5cf2e4a2203ec0536a"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "fad4f462d8a24dd7c73c5870bf6bcf8f"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "24e0a3746bec7c6b67cb9f77fbd793ec"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "72258bfd878b1f7390d8161d4453f716"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "ec6b0c6c15862469f97fc03359d59347"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "97eedf060820d3c2a3adcdf7aacc6608"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "f423514a2625f326597b25430472913d"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "9701608fac38654d81a1a9b61d1a5869"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "c67e146ad3684f8079f9a7fd42deeb6a"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "f6dec4a6ac3ad93dfced572f021bed10"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "f8adbb9eead6d9c3b8dcfca1018529d9"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "59467c59884a39b359d03241353ae469"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "6b5bac34fe6d16eb34187dbfd374ff4c"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "afac95ad7b8f38a8b6799967aaab2760"
  },
  {
    "url": "basis/design/index.html",
    "revision": "82de51e1c5d21eb9e6c6f8c6227ca707"
  },
  {
    "url": "basis/index/index.html",
    "revision": "00520548b986fde48d3881716c07930b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7bb94c6aac0bf72bb51d4c85ea248f73"
  },
  {
    "url": "book/index.html",
    "revision": "fba5819c0bbb0c52458edda2e00d7ef8"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "3cae726de885a978ff004f8201070022"
  },
  {
    "url": "categories/index.html",
    "revision": "0c91694edd86cb8a2ddbde76507fd296"
  },
  {
    "url": "figma/index.html",
    "revision": "aa1ef794fbfa68d95374f6389ad4502d"
  },
  {
    "url": "flutter/index.html",
    "revision": "414978e77f938e75437f31d4c8deb69e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9b7908fd29f7cb033aa120f116517b33"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "dd5e788f878e5865245a52a2cf8e93a8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "32b891a3462bea216e40259ea5a327b8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8dbe7b227295d9cab1675c5f40927559"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4c8eb6fa8f6e2ed9c43b5e6eb840a24e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "53a7dafe80c78330ea0251554ef33358"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4bd1ecd9775258226458ea9c1967ea9b"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c4572e51ea75443f31c418c4acc4e88e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4f4837fdd9cbb4764c95403c6980a31f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f34f08050ef9f559a30d6b7676c4d8b2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "4d615fcb2e5ce7b4c8f199393a9296c1"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "70969cb9bfaccd24e90dc33652dbef29"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c19265714eec36316de48b541ce84596"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0459481aaea9df50bbde2c4e8e596ba4"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c14208cf22ca61edb59b9893b82bb49b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "2a11ad6ebb6e47993eb50d73677fd885"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b03526220da59053b526f408496396b2"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8c568dc492784eaf3569bf7e944962a5"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f2ae9ca3e52b90b13f90a98575dba418"
  },
  {
    "url": "haskell/index.html",
    "revision": "b26d1ef755e1674a4a29d85d1030f313"
  },
  {
    "url": "index.html",
    "revision": "f42c075517f2dc1fa030f1a36c65dc5c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "79024c64183772ec11e76d32586c6aa8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3e09db8a171f6e0a31d8d9439c0645c3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5f9c4ef4865ae8a30c1f1fbb8d5cb4b6"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ad9b40a0a80f7697aaba03bf55ca8cb8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e259135a6d78c829c86fdd8b9ab66f74"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "dd5a77caf8f0b0ed6c737cf1c7d9041c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "74e6972b337b44f58fc45fb0a4b7875a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ce96cb42536eb0c8ea5d3cbac851ff9e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d4b864376ecbb6f876c46e0185956cea"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "787b5220e19c8133782c35d90bf36444"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b53deb4366646c7212c8e80c4c4213de"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f8655a7f43d01dfe0e208b159a23c3b8"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f04b3a6a354e2abf60a4b9ac93bb097e"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "00e38cd7cab8a7f766f474b4fe5bb716"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "0727b9a3841c32b272dda3d175825d44"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "50ffa6c3599e4a4bbf42ec0d8e7c117e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "828bbb9040c9b4c6a7ddb966ad091b75"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "8a97de92c5aadc623ffaebadaa65180f"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "2bdeeacd35212394d206a951baefbe11"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "6a5ae41df5877b4b7e854df641fbcb45"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "7b3d9459a89b3747081065cf2ace96b3"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "521c07c4a0afe72044b27b75f3170e46"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "27948049f455ab9348a6f27587c5dea2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f44bb14983a694107ea0bb1d5ed72ac0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "aa2cacaf83cc7dd37ef5e54a7a6d215b"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "da228ec3b6528a897f3f0ecde772ebd5"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "27146d55789c9ee96fb16c9e9217ee1e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c8af7e43483377300171f2be0c96cd5b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c77c99f4e322950ab44282e9fade78a5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "11aa03fbf64f1ba04f977c59fa5b1d7a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ae9c50be4590861f6fa930f89cea8494"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8ac6cd106880059d1b1023437e758544"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "dbc2bc2a2482d2b4d5f145a5b5c58ac4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9d7cf2d647e8bc3732e82bd067acf868"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "37aa1de32c6bbd85aaffd194b63a7071"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "fbd44903997439ebbc9fdb6c1bbf9af3"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "bc8cb7deb8215341b24590f426780bda"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f268d6e5044e9713ef9971708615d180"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7de37dcc9e764e889fba0a0e5da98abf"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3f73e49d6a7e61a44d9ab95c2cd7247c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2eaded7b570b9c65407c9e714585ec91"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "66dae5f2c70699506e17e12b1afb9e85"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "7af3568f50ea34f138bb60f56fa3a251"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b3ecd99b0e25d914fb836ea18f3e9b12"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e58732ff23840bb1e3ca576682a04999"
  },
  {
    "url": "tag/html/index.html",
    "revision": "39b2358b7e02febd454e98241d496521"
  },
  {
    "url": "tag/index.html",
    "revision": "6171143f5e8357c06f543109fd91e0b8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3c23d23ee01c6874e4094d2e7340ff96"
  },
  {
    "url": "tag/json/index.html",
    "revision": "40cee999716de6041008bd9b1e339869"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1865dc65ebc135d10c1efeb91b9bf3e5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5db6f4ce7dffd3e0c4bd0ce49d7e7ecb"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a4071bc87c6c1df1c1d21db51e52d004"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8b0ed48661667beb082a1d75268211f0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "49010228e4561f3f6b308befcd197d94"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bf4a73ac52e680102c650ed27020519a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "509010e47f4b1d0ded03bf9ea1dfe561"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d44e26ddaec7589e2d69ef9799175928"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9ccde37cbd1c2f0022e1570e7eb3456e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "3425d784ff5499bd5bc5c47f3431b6f6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "8fd934156d246a5652dd96da8511b759"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "69fb6e83befbc219d82c201690619b2a"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d7306b7cdfcf064849f6b62abe22c4c2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "357aaeb084036db41e2b58ba1fbf4649"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "434df40b75a1a2dc756a22d243215b19"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "eec38d51d24bc3ebfde996c2f81e87e3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "77380acad0df6681ac1260f0e6a9213f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "83d39509ef986af0bdb0afe2304f2a6a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "75a8333141b8feae1a13a9a9aca14f90"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "003ef4a2f125d615f8788bf529aace5d"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "e1b292920cb935b187d6470ed65512fb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "650d5d6f5f17e7f7fc0bcce978d7b8c6"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3f02fbea296c05058cd15cb8fb704576"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5847e7cb728630423fecb50ada931294"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d01cf4452de902e47904238ed694d8b5"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3504986bbda321804369ad16a585ad4c"
  },
  {
    "url": "timeline/index.html",
    "revision": "28540b517f46fcece7a7b54bde6349c9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b3ed78a60f5ed5ca78b400addc14721c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3e0300da2aebfd296945f17f1b5194d9"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e541fa49439ac00abee7fe3dedef3a45"
  },
  {
    "url": "tools/html/index.html",
    "revision": "40564282102f75c9a9c024c2c964dea8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "31375d9e02bd8c8f2a4fad8b54d812a6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8376d41e2ccdd4852e0091f06e024cc0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "442df86e3b0745b58e5638faa695ad9b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "79c24132985fd019acf238c57e9dc17e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2e1fa7510f5a2e95a4a1d1f1ce692f11"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "0d84de010d4d4818138c2ded2fb1be4d"
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
