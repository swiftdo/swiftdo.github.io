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
    "revision": "e843ebc2c7ef5b9110a94cb69bafcaa8"
  },
  {
    "url": "about/app/index.html",
    "revision": "7f0d7bdb7875e092cfcfedb4eafa620c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cc86a4ad56f328eec43e33feceeeb504"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0b724eeacc88a9ad91a4ad8d3a4483f1"
  },
  {
    "url": "about/index/index.html",
    "revision": "bd71de271541badd6e4f0369074cc404"
  },
  {
    "url": "ai/index.html",
    "revision": "6b19f5f3ba573704ef898f68bd189f52"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0655d5c4a327fb875decc5b9317631b1"
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
    "url": "assets/js/115.2d53f9cd.js",
    "revision": "42d4ece8a87c1e3a68182c99f3a4afc7"
  },
  {
    "url": "assets/js/116.4b0f5f26.js",
    "revision": "7cee17dbe96dae7aa575aeff3869e36a"
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
    "url": "assets/js/125.37e6f834.js",
    "revision": "7c9922a02d3d413759402c8d65e69936"
  },
  {
    "url": "assets/js/126.9604c30c.js",
    "revision": "80589d43677e564435fa36ef75e19935"
  },
  {
    "url": "assets/js/127.6a80fc31.js",
    "revision": "35c04cd6729656281d9165f426baffaa"
  },
  {
    "url": "assets/js/128.2fda33e4.js",
    "revision": "fc931036cd91e8d7975a0a7fa7a5ac64"
  },
  {
    "url": "assets/js/129.a5045446.js",
    "revision": "7459f2a444b232ec78160da82da0f9d9"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.3872f03f.js",
    "revision": "52aaaf178caf63bb44de2dc2e66c2d1a"
  },
  {
    "url": "assets/js/131.78036e2e.js",
    "revision": "1c66dca55194e00aca173decfa5af5ee"
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
    "url": "assets/js/58.ac7c9863.js",
    "revision": "d47d8d46886a735b807ca73c823222fd"
  },
  {
    "url": "assets/js/59.0bdc972a.js",
    "revision": "bfb0904a80f542fd8d455825ef65a680"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.841da449.js",
    "revision": "75c9bebbd1b532653a7f75d266e8fc2c"
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
    "url": "assets/js/63.b32a212d.js",
    "revision": "622d3698e047e820cffd4aa5235763c9"
  },
  {
    "url": "assets/js/64.3087fa46.js",
    "revision": "85aa527e8e993daf7c483d43ec0a45d9"
  },
  {
    "url": "assets/js/65.dd28efb9.js",
    "revision": "6b3fd5797f9174ffc1470919bbcd3b5a"
  },
  {
    "url": "assets/js/66.9a774a03.js",
    "revision": "9ac842e08a1219106a9f6737fae995ec"
  },
  {
    "url": "assets/js/67.2c816c9f.js",
    "revision": "51a5b7029b3e9aa04c438acfc914b2b9"
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
    "url": "assets/js/75.612a64cb.js",
    "revision": "a5157a39d8833c48223f8335da75799e"
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
    "url": "assets/js/82.c9748273.js",
    "revision": "e800754c953c21bad2d3ae82d7771a6b"
  },
  {
    "url": "assets/js/83.a1d6ea48.js",
    "revision": "1689c9519a392d19a82a5deb40905c69"
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
    "url": "assets/js/87.b1fe3bc1.js",
    "revision": "7bccce7c97beebd69f7a71d0a3d8fac3"
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
    "url": "assets/js/app.c5163da4.js",
    "revision": "6430d6486db518487410af6b5baefb01"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c553f6095bf33d4d688e60258be3327d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8bd597cc1a2b9a22e0efaa4b64fd62fb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "dcf79b4d9f9df9b0dddaecd0a4deb7ae"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "763e4ebe9e562db0329a465fa71bd66f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a75bfdc8942b893422df4ff80116a194"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "14b57598434679324731b67d61c5c07d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "992ff03a6626e4fee871a1bcecfc0182"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5940328e617b5ef2fa69c11085eeece9"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c56c14221d4b4cb9c18accdd462e1f01"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "04cd2049f4afc692a964cf8dcdf3544a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "bba416988dc946174fc707dbbd468ead"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "4c1dc47610998a4271f95b4c25fc1559"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "9c09323d92a4f9c2270678c711df68c5"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "7421074925c7fd99d8fefeeff6a7603d"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "0f5f5122a2b7a34cbdb09837b09b59d2"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "d909827195a63a4aab3d91f4c82c9c30"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "10627a4725575b1b33cace0265408f4a"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "924fc72b0d920f8e83016c902074048e"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "731ee825ccf5e17a7b0b921345b855da"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "149dfe44ced813bd960d7687335b671b"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "28a40ed2ae717d1ab0045d56f16e2b3d"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "cf28cc6a5b6cdd4e5e30f6d233eb8186"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "8507b05b4810ff7c0d54f45a6c7027b1"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "26edfb40d7210e2b9d62b27201220600"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "1a1b2e8702380850d07d95f132e52e22"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "3b672a5980335b815863ded28347d0f8"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "61b86a1a753cf047d88fd13e34a4e59d"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "aff511e2ed054b8af54306f5bc17dfe1"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "d44ae00a5e7c7e682ab89b47a5cacae9"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "e40501116f962ff917896f3d6ced766e"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "c826e0724f896cbc7a2056c65790b129"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "44c6da80ea39a88bddf5a0420a84f474"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "51b788dfdbd2d80ff6ac528be49b1d0f"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "b2e3a5647ee3dd31152f3d892bbc3dbd"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "c395701238e3fe8cecb524f4993801db"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "61f13dce237e5533e760de559a095059"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "731ec41a54ba1e4083d673e911fee836"
  },
  {
    "url": "basis/design/index.html",
    "revision": "9c9760416d727d374e89849cc6deb472"
  },
  {
    "url": "basis/index/index.html",
    "revision": "14c2f4e57eeff099bcd99c609b8fa9a2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3e5d0c0438357f6d4ffaed0b3b1b373a"
  },
  {
    "url": "book/index.html",
    "revision": "1f7f37cd84c10e2a8949e4788a74378d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "6023c00bc2022c3e8c503d9028336749"
  },
  {
    "url": "categories/index.html",
    "revision": "6b4373d78994a367e7dd2639e80a0368"
  },
  {
    "url": "figma/index.html",
    "revision": "71747789f088fb80d6b597b940f7ff95"
  },
  {
    "url": "flutter/index.html",
    "revision": "e3aa9b05ba948e83d172a0fd3ed5edcc"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "586a6d731bccdbedd792efda1e802974"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d90b211ccd3c5d614789c9ad425a14fc"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e4533786888477e4d9aa9f41566a1175"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c2027c1c9a5995a7c6db23bd79d90ab5"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3445bef4b77ba3c53e9130a724df5785"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8c5882fb4e49d0e2b025ee2a9aa31887"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1fdd8db23ec1ec97be2028586d6dbfbb"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e3d2036167cde9833460e9dcc67b9051"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "66913f2073c03bdfdaa363342185675d"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "0a6aa0b6f33ed3115ed2f2e4da28d58a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "48d7a3086b8530de946fa11e4565c986"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "089f6f55d66025b4cb1ce770ca129fa3"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ad976099cad6a0d31048df2d4ffd2add"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "75b6bca9a3b0d0227a56f861aecc330d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a5251c7a0cfba0006fa75f58f9ba505a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "61c80eeca73999bd43955242c4621ab7"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "bdd906bfe90e07985036ba0d187a5c83"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b98d75c272fc8deffa0dbc916d8dd453"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7fcfb415d39b27ad87ebb3661a852b8d"
  },
  {
    "url": "haskell/index.html",
    "revision": "7b9923375232194ec0db9501edef6c5b"
  },
  {
    "url": "index.html",
    "revision": "82f5f5af433a3d61090235b9a29b5a84"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d939ef15e94bcff7ede7acae8244be18"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "b4b3a78104e8134744c088f3d1d3372c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "d8081bf633d6d04e05a275f40c07c90c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "62ee7ff0272d63f2d7f0ce103645fda8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "790a3e5ea31554a3d40c94f673c65511"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d2dec9c59a5535a9e95325e6b46c0be8"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "58eacb08869384dffcdddb61be3b71e1"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "d6ccd35dffa24d09a5bcc666fdb69df0"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1845bb50be5e872141187d7044482cf9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b37bcb5576f9bc05f52f8f0c7cac4deb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "37c92a6f10e4bbb57959071543db248e"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "35bad2d19f77756dd76c401c154f4bb4"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "687302403de13015c7ba3c15a99eaa60"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "66727c229b83cbded37b5bffe83b58e1"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "e05b945773c53f3bd09dc59f7fc07a67"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d36e761232a34875933bcb2123c90106"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ea8a47b14d26a9ee6faeaa174bddcff6"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "9253f0fddec0d2649890a3a51724fa09"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b3b0f0bc102d53097392eba20547fbe0"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7725c07580cd81a6c3d9a51e3fbb4ba0"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "99be2b48c749f93e55547c52e1df462d"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "23b23fb42b5c3c9d7ee9865a7f8629d4"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "52c34cbd08a82aa699a312285d555fad"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "39bd5633781e5a29b272db5fe4f21d7b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6f43e6f1bfa1dd068e3dcb20a18ad12d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8f79f42efb1fb3a579343ebf83e8698c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5325f34f327ec07ba05d6b71f09c0473"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c439680efaef303db7e5a6af92465ab2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a1835d78a958981e5d6dff7e61d0f7b3"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "dac2161a4364488ede6612ab563a5e7c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d08fc702ce85d87ad218b9a4f513b10f"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e905eaf976f538c170404c101dc797bf"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "2f86b1288415002d0719bcb4dafdf206"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b5fd620743a8f9ab69c538a8b9729967"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fad7d1211f2884146d20485d18e39a3b"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b23c74347364b6727f1beccff1dcf827"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "6b11e4fd363b96776145e82192a8dfa2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "bc107a17ef02d993bba2744330e6a14f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "72aadfd32fe7ba6bac6a291607a7357f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9503a1618802c5ee96076c2ba9d4409b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "1176ce872b4daa81603676d89826e442"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "df6d9a6985cf9ee3da37f2f5faf11b56"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "9113732dcb4902f22720c6c54fa92a6c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0499defb4bda743d627343fdd3e16e38"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "29c0c655542b93d0ed25a5ad0c053695"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4591cab5b00bdb07059a1581b2589440"
  },
  {
    "url": "tag/index.html",
    "revision": "0c4996b1d348e5ac39a5b14be0c03ece"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ef824aafa91fa8c1f0185819c899ec9f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f21cc357ed7b271b39a16711a6a1a73f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9f7a3b9ec653eaa76cbd35f079030886"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a8ed9cc51097bbff8e979175a5bcb9d8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9e63881d4c25b5548f4a3c8264033dc2"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ced387ab20d5d62d813aa147a5fea76e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "62c3e62e24417fe686868f2e30ac5155"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "62e33c17f0405b2fcdd3633db3535675"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "80f46a3a162d572303387bd55782b4c0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "76520a9c609fb1e8a55b03c532ff1a32"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "964d66838c88704af78e1852fe869dfe"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "be0244b554cfa1c06f5481dbfcd82428"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "ab545ac579080eec095743b201f3857b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "95838ce070542ad5cf01262092bafab4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "69dcae4943cfdcc65a63bd54ff26d7e1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ea84d0cbd38da21b6fa168506ad75bc8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9a6a4685d592040f5ef152a2ff6558da"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "212c085d07904681371370d8979b60d7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5eaceb274b554e61b852de8d5d942e21"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fffe3d232cf095461f57733371bb3afa"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fadaef797522bb594ed21e2fa857157e"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "41c37a81d8302b39c05a99638ba6840a"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "5a81e429fa97dc3df6d6e23a7375689b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cb2e8d710d34e972aa4fc957a52fbd65"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "edf7873414e83aadc6e3409fea0212f9"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ea13b6473841d625e5ca2322a242e252"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "4d081f1208de91e2b49a8205627910a0"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "33fe97a4b41a33100dcc0ab415d9f3bc"
  },
  {
    "url": "timeline/index.html",
    "revision": "9dcc2c434c049c6ef2b9b25f5dab0ab8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "567b313c149a987ee69a2c173084d5b3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9d2f66dbc569b62d1010625d9ed3904b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6cfc4245aa2b8013d9d7b9248668a112"
  },
  {
    "url": "tools/html/index.html",
    "revision": "defc81a73cf9209b5257a8a37a20d28a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e5562e6a1822b81361adf3b5ff58aa7b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f72f53805c6d66217c5fe893be995a4b"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4079ed617abedbc9d09f906ac8c5ee32"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "89c6b528a96a8b7ec654362cdec04c23"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d8fd12baf7fc670b440aeb36cd630d9c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "23d99e82ba8ec1fa0e34e265a02dd800"
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
