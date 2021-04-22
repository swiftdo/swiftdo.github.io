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
    "revision": "3c660762a8f1d53684e447daecdca7c1"
  },
  {
    "url": "about/app/index.html",
    "revision": "bd4f6424763311ae16a9b9110ec42e70"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6bfc7af47b6804ca60f71d6aab66112b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3e7bf19c5e5e9c05f620bf64e5dc3fcc"
  },
  {
    "url": "about/index/index.html",
    "revision": "e6178a8c3f2d2c84a0d51ac6376be321"
  },
  {
    "url": "ai/index.html",
    "revision": "88319a728d4fb4c3b9483515229e0e88"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d615aaace1d66abee2c0e5ae43b06e32"
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
    "url": "assets/js/102.5f20c9ca.js",
    "revision": "30ef1e6795bdbdca077675af9fc30f19"
  },
  {
    "url": "assets/js/103.6ad69357.js",
    "revision": "aff559f516f4cecb213e3a53b11b4996"
  },
  {
    "url": "assets/js/104.20264253.js",
    "revision": "1b175ef95e9d8a74802bae66bd337845"
  },
  {
    "url": "assets/js/105.54d67aba.js",
    "revision": "15e0a5a82877727857689889ded02105"
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
    "url": "assets/js/108.6d535d34.js",
    "revision": "759bc801712ca164f8b5ff73fabc3c14"
  },
  {
    "url": "assets/js/109.817377df.js",
    "revision": "48f6b846b4d6ce003dc0b1a0e458a685"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.f470dcf0.js",
    "revision": "1fbc8ca8b6b285bd28fd6475b8d8c5c7"
  },
  {
    "url": "assets/js/111.a46af24d.js",
    "revision": "6ec2d724bcc1bb68cd406aca16e70515"
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
    "url": "assets/js/119.19a0625c.js",
    "revision": "e9496a6449e297697b33e2e7100404e1"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.03f1cade.js",
    "revision": "4af92e5e41f73114997283680e9ac4f6"
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
    "url": "assets/js/125.b142949a.js",
    "revision": "7acac7c0744aaae21abddb1ab6ea0723"
  },
  {
    "url": "assets/js/126.9604c30c.js",
    "revision": "80589d43677e564435fa36ef75e19935"
  },
  {
    "url": "assets/js/127.97b4ee5b.js",
    "revision": "dc13db1fbe3ab57d70c20707c26e9c4d"
  },
  {
    "url": "assets/js/128.2e4b2574.js",
    "revision": "747f2ccb29a872e01d303e44e9ee3f55"
  },
  {
    "url": "assets/js/129.c34aedf1.js",
    "revision": "6e7464adafa94f246deb04495738f4c9"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.834fe712.js",
    "revision": "2c3202177ab5c8b062ed6fad31ab746e"
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
    "url": "assets/js/44.f0ffbb93.js",
    "revision": "852bef2c6d2fcef7be447ba2370fbd3b"
  },
  {
    "url": "assets/js/45.1ddfbb94.js",
    "revision": "b977b707055b3262c0551ecc44d7feed"
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
    "url": "assets/js/50.360d6559.js",
    "revision": "4468a438cfbd264712487f3f3321fd5d"
  },
  {
    "url": "assets/js/51.58cc5e60.js",
    "revision": "bbeea249797073b62ded3dd47192d88e"
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
    "url": "assets/js/60.733794df.js",
    "revision": "ad4f694497ef45a876db820e5c77ca37"
  },
  {
    "url": "assets/js/61.844a186b.js",
    "revision": "b89952886c1df23824aab81a843902e9"
  },
  {
    "url": "assets/js/62.8b40ab8f.js",
    "revision": "348a94f457bfddbb693cccd2d1e93d20"
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
    "url": "assets/js/77.a9098d08.js",
    "revision": "fc0ee261b0827cb76a61d447dc913a7f"
  },
  {
    "url": "assets/js/78.a469e1f2.js",
    "revision": "6fbc0149d4e51ef8ed84f23edb9a8930"
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
    "url": "assets/js/87.fd9c8a86.js",
    "revision": "328051b6ff34ca001f4f8732c773c0d0"
  },
  {
    "url": "assets/js/88.0efc9903.js",
    "revision": "1d4ec41cabf9c2cfb24af69f32e2a19a"
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
    "url": "assets/js/92.b5a3abb7.js",
    "revision": "9f1b2121b0c83e191db18fb6fc3c616a"
  },
  {
    "url": "assets/js/93.51f81cac.js",
    "revision": "cfacdeadeb3d77f61c83990ad83a9983"
  },
  {
    "url": "assets/js/94.d1add948.js",
    "revision": "c38171b91f475a5df2ca53af3033b88f"
  },
  {
    "url": "assets/js/95.6dca307a.js",
    "revision": "6f25f4e73dbe8cd10eab7d462d96775b"
  },
  {
    "url": "assets/js/96.1bbeb532.js",
    "revision": "99d76e3e5ece4504a4b9a13e469f3106"
  },
  {
    "url": "assets/js/97.18f4e247.js",
    "revision": "10d397b8fa1e4855d04a5c2c952426d2"
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
    "url": "assets/js/app.eca59ba1.js",
    "revision": "ad4db516fa2f19ce47a5860e033666dc"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c3bb5ab2993af985f3e0e582d28a2d7b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4bec155d5ecfbe048ebfae6036895fa8"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "56fbabd26efa88498e6cc84f4be56aa8"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "0d4d79d87c4f5b97ff36a829214863f3"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f60f50511ed80dc7f30659bad065baaa"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "8affa71e229b87e849c87dfb8eae4653"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "7d28f76cc90a40d7d695d949c5a44ab1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "350f830a7de9f6cf14bbba929f8d8690"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e44010a6067fb3b9e5b080c2a1ac6ce5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3b28d25d2671fdd1a32efd0294f40305"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b048c74d21d1ab3fb50594abdc2c25a8"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "b2aedaea8b40fcc22cedb250029257f1"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "0020505fef182f359b2c7683c14e0f21"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "775c2224e99a80bfd01abed7dbdd0051"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "a611e21adab65ad9b539828dd22fcb0c"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "7fe3ae00043c06285637115f44835283"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "4d56d3f5cc1bf275e1253e24dd9f71fd"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "9c331dc4ae64e0e4d7c2683b5ba7268e"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "77a7a2f0d4bf8115f1140651ac00f288"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "e646ac9643fab3f0d69667ed4d907cab"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "05d4d975227e604344ca3d572e2a01bc"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "de75fe4e93f85fe00e1e3c78e9a25db6"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "5d2d5b800cd10d2ab46461a95f80a3ed"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "78d8b957ced9b4bd7b4ceb6edf71caba"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "60acb8392dfbeafaa1a4661b02ca8c3d"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "fb218fc3f7b44094d62c8ffbb69fd752"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "ba6926225ab2ac77014d70751eb5b6c3"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "dd8d039a78c3c953a8e502f12cc1d015"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "e69c8dd40e82c526ab2d71cb82353d69"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "7964ce94e35205e655a6bc3bd0ea079a"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "db38dc91510811d03328ef2ef3bcd872"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "aebd50d5b7ad74b1a7f438dfe87b8f7b"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "df2f3fcc1d1783620306e8446495acb6"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "fe1d34f685ddab51507745e5903bd399"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "d66b245df5ed941af7fc754aa3a96c27"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "7c8252b5bd6598c5a4b4e547eb89c691"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "1aa2d809da0aae8f25e8bf1c24d64553"
  },
  {
    "url": "basis/design/index.html",
    "revision": "231bfe7b053404b277b36056e5756461"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b457a3b97a1a46f86b346a06ae02093e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d61b6709d5a27ae8be69e15c8b51915f"
  },
  {
    "url": "book/index.html",
    "revision": "27f67913fcad54d4ea1756b5a65370cd"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1c185a8bfa5c87695f3d877594f29e98"
  },
  {
    "url": "categories/index.html",
    "revision": "fd55d49c21f9064c35ac261944f36f22"
  },
  {
    "url": "figma/index.html",
    "revision": "daaf19bfd839a6056c597e33a2b4417e"
  },
  {
    "url": "flutter/index.html",
    "revision": "85949b1676b56d8eaf30aac040bc2fe4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "aeacf5a79a3b71ea533db0f4d0918668"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "62ad356a99460450963a4f6ddb4da846"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "92bfbcdfe86f611a4b114a33f98ffb1c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b7e636f2b341c2600f0fa4086dd77ab1"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8982ec401f89469082b2820f87b5b6ac"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "633fdbc314baafc4154284dead412a2d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "379569daf6db687042352445ce1446ac"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "42dbc1aaa26b898c4d34339f54c2d833"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ac64346f06e0b94ee42abb0191a310d2"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e63bf6d63d97664715c5338cd1a3f4a9"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d0279cfcb47b2c452896f55a72e16b33"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "31eef4da168be70ba377c980ce2f994e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "967a0b9d2149f2de0eaccb255bc19e13"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3d56ea80351742924907aeb7b9fb761b"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "be4eaaca435d5185e498f66ae463182a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "51b3d9d4750525c7cf63fb24b994949d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "170adb0dfcdefb05a5f1c8170038edad"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3faa0a96615e54f1220ebd912f0dc652"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e0edd49339fbf5f149fb65a3f4c3c0d7"
  },
  {
    "url": "haskell/index.html",
    "revision": "5ceca10c9628cdf9b73262924d934b11"
  },
  {
    "url": "index.html",
    "revision": "8116282d4f7c72d4b40b02920e6504fe"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "094f9e637b651466f3fd8d2aea0e9839"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "fdd1e587ea29f9f6e9f86fc6bdb8e36f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "42236b3be8af172541f5eeb6298a5ea9"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "1a4da1fadb774a1758bb185e931320d6"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "53970eced76ab5a40ee3be4cff3a2895"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a0cefb764cf402af7a1718274051664b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "5f1438fb72ea94bce463383f358e35b2"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2c960dd5db96855ed34ccafdccc0f847"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3d826189d88b07213e18280a2b8799a3"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "bb60f457815a0364bed5059ce9b9f807"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1f2ffc860c44b060e93e7806ecd0a0c8"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c53a04e4ba636f80793f0450c71d808a"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "257448e62a8b3f758c98ecfa697ca710"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "974ea14a122491ec68ae4b37b0a9f1dd"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "a49de425ca99d72d114555d48bf610c0"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "03df1ebf0ef718273c305b6f3090a2c7"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "0bf95692cdf14e596256dc0a10597e97"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b26b53e147a03a5b99aa627f227752e5"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b7359383f16d015c87cb70fe0dd1b718"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "1970d9f75f8e15521a7464837dca009a"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "05cd56196fdeb8fb726693e8b29653f3"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "a5a205115ee30703bf9507f9d9c902cf"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1fdfdb8bc785f5bd2a72132c237504c6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "aa4cf520722f02aa7695193c0a2f0d3c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "3409b76099c4259bef1900f444bf2f84"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8428fc569de178b64c5a15d19538d1f2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "13c161e8ebcdb4c6419628abf3b549f0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "521a6e6beab05e69cb5a31c19df74416"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d2e550084eaedf67260d63ef15f4dc63"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a24963a03af353e61885f0958cb44219"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8b94fc03abc496f2c00405349fd2d199"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "12a1117d75d938ed18e9e5e317d1f225"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "93193b855891ead27fe64aa653c99f59"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6066157f2bee101f800880485ebefdf3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1429b52067483c3dbc3fe95a8aa8fea2"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "61866286cd7bc1469504513105ae381c"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "68575b313c77d1f9356c19dcd1859c64"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b78771a822c27351b0b01dea9a9947b5"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "65ac50ac275e59dbde613daa884bfa71"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "840a52205e2b8ca74c90b9ebf8b45418"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "738cf5ffe6db09c2b5ee025ea3332491"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d375e44defd86b6121829d18b90074b5"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0791b51d51401a66c8ccd584a379c068"
  },
  {
    "url": "tag/git/index.html",
    "revision": "38315eea966d4cc0cedaf786fb4c332c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a5cfd96e5821d97a507e943c31380df5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2196c40f4631a79bfe6642dc05f61597"
  },
  {
    "url": "tag/index.html",
    "revision": "53c9c383f6a3bb0be7d16809bc87af2e"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "04ca14e1d2276b13445185f395e334ac"
  },
  {
    "url": "tag/json/index.html",
    "revision": "be76c548c19e35084af41b083bf81fb9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "c58ce3e763f21622b82962f4d298a482"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a11f6d0a29ed3c7cfe3410479c97d0f0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ad63573cb6375dc922bd847164f25d45"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cbcc6ba1ccb4c2d4161524eec0b7ce58"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "16e6959a064b8ce0889a665fd468a07b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "35a99fcdaaf8c452b41ef6d4cf495996"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c735f2936f05010f753375bda1f2f476"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9329b464e446174174c39e0b3045a94c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "96b37c9f6a7e92ace5d666293552871b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "54d50af0c82327fbd7dfa1740aae0d0a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7fba48dc44b4a8cc6f792f51b0d7c0d3"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c8cb852e7a7a8678ca625139c05a2f24"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3d833ff673f4849df60431a339edb2e4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6fad29dd5f5e871249fa5e469a4159e6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "80eb6fbac6c1f1903de617a403404b2b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c1d786785d49cf697b20fc3aee73eaea"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8e74210b6559804da5ab2040fa7c8bb4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "aed55ada062d08a2fe1ef212fbb93865"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "23df6bb6804a19c250a600f2e9d7558d"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "6b729c00ddbac866411e632b1a77fb86"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "348bdfb4c16a045b61da34815457ad48"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9f86e38b896e2cd1f435477d28711615"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2598e67152d0ec0efde4f609b673f14c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e49ce14ddbefe1627197f6d7ce800d49"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1cdac4743ff44372e7e61c4c99bdb81f"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "9fdf09557602f6379542f833bed6be7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6172a3d210de9708f8d294e6223b760"
  },
  {
    "url": "tools/git/index.html",
    "revision": "dd096a9fff52502ab1fce4a02a1185a3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "fa668932c2ffd6c31371220d4ffc6a4e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3d22cff9f232e20ba93e24a12a6980b4"
  },
  {
    "url": "tools/html/index.html",
    "revision": "e4b22832718dfed1c000feea1345456d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "03c38d764f4d0f61f7bed1472a9d7732"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "0107f0d9146a09968426e4a47d16355a"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "71918799c5e46a834b87eab6b2c647e6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "85ec935494c0c237eb0554faf3890614"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1e69f14e96f779b2f879417f3f4994d5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d9977fc66e7259008a14e9b7a95a3cc3"
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
