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
    "revision": "571423ac47025fea82ada193b0d8344c"
  },
  {
    "url": "about/app/index.html",
    "revision": "7b9e1383ff40a753a219630a8600f0ea"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "72745c33ec8ebd070c54a13fdb6e629f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "846aefc2d3e131e9b5ea02062ffd8b55"
  },
  {
    "url": "about/index/index.html",
    "revision": "9d25324c281359a18850afa52158ab96"
  },
  {
    "url": "ai/index.html",
    "revision": "cc9d6066e05c90deb1eb7a743b3cb52d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0d2fb909a79e2f53dcf26d9d554fcdc4"
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
    "url": "assets/js/100.8a3c25d0.js",
    "revision": "53139cc9d90937a6a442abeaebb39b60"
  },
  {
    "url": "assets/js/101.9aeefe43.js",
    "revision": "994d1e0f42e892c69b145751995404a6"
  },
  {
    "url": "assets/js/102.b25ce225.js",
    "revision": "93aabf5d159ca538a774cf073b5bbb56"
  },
  {
    "url": "assets/js/103.347e8257.js",
    "revision": "b030a1370a03d5c319317c0813f4ecce"
  },
  {
    "url": "assets/js/104.ad6cac39.js",
    "revision": "25db9cb170f026b00543fcd3c82b4378"
  },
  {
    "url": "assets/js/105.252811c8.js",
    "revision": "f006a42fa708ef375e54eb24cc6d8691"
  },
  {
    "url": "assets/js/106.8014eaef.js",
    "revision": "f8c33d23f133b1db9ccfdf189dbb4746"
  },
  {
    "url": "assets/js/107.018640d9.js",
    "revision": "42b408391bb537edf0e275117d669b42"
  },
  {
    "url": "assets/js/108.cb96753c.js",
    "revision": "e03ff7e68fb53d7b52104d2b29670a60"
  },
  {
    "url": "assets/js/109.3c08550d.js",
    "revision": "96ea738c5668a886a17c2ffcff230652"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.cd855fb3.js",
    "revision": "12773aa2b96bf8396cd19f2b0e283a6e"
  },
  {
    "url": "assets/js/111.b7de5e71.js",
    "revision": "ae1714c7b90f0a6d04ca6fd0b1187b7c"
  },
  {
    "url": "assets/js/112.cf0c4cad.js",
    "revision": "b7e23d6b00d73523c7b3ccd70d5f4b0b"
  },
  {
    "url": "assets/js/113.22e7488f.js",
    "revision": "96dc6bb33de75ca82afb8e9220483adc"
  },
  {
    "url": "assets/js/114.c10b4222.js",
    "revision": "e937cfe7629b36185cba5b4d58552479"
  },
  {
    "url": "assets/js/115.a2fb0cb4.js",
    "revision": "3038dc0823cd0fd082401d0a6cfec53f"
  },
  {
    "url": "assets/js/116.b7cab5c7.js",
    "revision": "ff12e15bbac76048f290cb88974fab6d"
  },
  {
    "url": "assets/js/117.b9f8ab79.js",
    "revision": "3d64ef4fa8eff9cdf739eb8de26bad30"
  },
  {
    "url": "assets/js/118.cba27d63.js",
    "revision": "3b0f870131396111c92df72238b70ce6"
  },
  {
    "url": "assets/js/119.5c89c4b0.js",
    "revision": "675cdfbb18583d194bca06b852d925dc"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.e0fce138.js",
    "revision": "fde0d9d4b7f679db2c090c2d8da67fb1"
  },
  {
    "url": "assets/js/121.9a572f10.js",
    "revision": "fbe4245c9078a33f02642dab411f62f9"
  },
  {
    "url": "assets/js/122.e35b5d5d.js",
    "revision": "72a16c64357bef7ab44a0fc8d310031f"
  },
  {
    "url": "assets/js/123.59afcbf8.js",
    "revision": "35779231e53ff869d2cfb7e8f92bed6b"
  },
  {
    "url": "assets/js/124.737aa865.js",
    "revision": "407321ed54b16fdcf9bf1524ab578acf"
  },
  {
    "url": "assets/js/125.fcda1868.js",
    "revision": "ab915baef0bde2a03105b5e67f462850"
  },
  {
    "url": "assets/js/126.b9a899ab.js",
    "revision": "feae43a0be5f090d64f95dfdf9452339"
  },
  {
    "url": "assets/js/127.1ea6e147.js",
    "revision": "70bb3b80e4decc2fd81895f6cf548467"
  },
  {
    "url": "assets/js/128.d0ad8e1b.js",
    "revision": "81f63e6235da64f95778988cff2725e6"
  },
  {
    "url": "assets/js/129.b2c501bf.js",
    "revision": "bf892602c0d300a49bfdaecf3e2a409a"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.1acd4472.js",
    "revision": "e6723a83f00947c6a43d1723caf3ce57"
  },
  {
    "url": "assets/js/131.3c4146e3.js",
    "revision": "d946a4ee6b3e1e37188441e296ea5423"
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
    "url": "assets/js/58.56effa2f.js",
    "revision": "026dab5571277de7fe5e0f95f86221ae"
  },
  {
    "url": "assets/js/59.8f67f719.js",
    "revision": "560b4c4b2a866c4993af76576d8a0296"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.d5a151e0.js",
    "revision": "7b8d56a1088c622be8a41eda77dc31b5"
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
    "url": "assets/js/87.b8aad9e9.js",
    "revision": "4c847860b606f2f30a3545957a1f248a"
  },
  {
    "url": "assets/js/88.e8f1fb1f.js",
    "revision": "53ee4814522a23d47c55299dffc26bb5"
  },
  {
    "url": "assets/js/89.7e80e898.js",
    "revision": "4e7207a8c593886b46ac91e4fccdbaca"
  },
  {
    "url": "assets/js/9.ff3c969d.js",
    "revision": "59ededa15f4cff11637a8faf63c89174"
  },
  {
    "url": "assets/js/90.02eb0a00.js",
    "revision": "a30ef401c6400ffecbcd29965e049a1e"
  },
  {
    "url": "assets/js/91.6aa6805b.js",
    "revision": "cdfebb233ea341539eb7d4006af97380"
  },
  {
    "url": "assets/js/92.cf594cee.js",
    "revision": "85b4df3ddff463fa45571d4f4c8cf79a"
  },
  {
    "url": "assets/js/93.5cce11fb.js",
    "revision": "a60bf518ea1c8f8074bb0590808ceb96"
  },
  {
    "url": "assets/js/94.24fbd417.js",
    "revision": "5a508bab6f5a67749c1767955f44ac1c"
  },
  {
    "url": "assets/js/95.8bdff3b1.js",
    "revision": "2723340e5058d22558c69135925d0cf5"
  },
  {
    "url": "assets/js/96.7f60d125.js",
    "revision": "d103fd292b26c7c5c587739a581c498f"
  },
  {
    "url": "assets/js/97.ea7c0ac2.js",
    "revision": "3f77f02fb9fb688c96e8ecf815db1250"
  },
  {
    "url": "assets/js/98.627a28cb.js",
    "revision": "f248fc64ac36ba717e70801575a9c8a3"
  },
  {
    "url": "assets/js/99.df5216f6.js",
    "revision": "7a14f8dadeaa98ae98d1a57ad4a0c474"
  },
  {
    "url": "assets/js/app.c11c8746.js",
    "revision": "05ee162fb2b6ec09de1d42c0d0aff353"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "08ce89173212749d570a40b8664cd8d6"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e79e76558bbfc6f17122401b19db26c3"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8c107771f286f8cc818fd7d16944a87b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "09475b991d94c488269c188c41f14c9d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "18fd4d158deed5bc281870cf2140e0f8"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "0946fc73bb02ad9c3d1a83a3253b8774"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1988a8093a0bdf022fe22bdf52039551"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "15b753d6d3b39060839875778c69a62d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "04058b6ab20ce87a5d7d7ceda21a6cec"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "deb819a53fe1e85df2b1fae1dafca99d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "b1b84b20b8e13a2e98a2259d3bd4d287"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "1e20c349e4631dadb9a620122b1ce926"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "f82d22de0ff3a2b1e432bddebe74e86e"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "e3d7cc48ff6b19adb1f6dc0279c8c734"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "5bef6f1230211296faad50b3d5ac6a9f"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "2676b074e5e78a70ea29eb992484b591"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "58f74bc949eb3e96a53ccc413d37fe16"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "9c2a78b597e4507d3cb58a6f2247bb72"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "3dee891be45126ae0da81586211a9ae8"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "12100d2009f9dbd8fe08268178fad282"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "393165e93343e958616d67b39346753c"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "c9223a29aa8999900c0bd997c52016f6"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "c7b4e12d92172db29e6bff6ef92adec0"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "1e88d9c51bef5d8df3a51914ab4d22a0"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "7b4a6f18fb4b38efa581a699783e0f28"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "a01417a8d3c27531cd3d7f4a1483a380"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "396712b22216554f8bb5ec472c4d9c22"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "ca3f82aef6d5e91d4db44a4248c6a18e"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "0618dd0a635d6ed7927fdd3d862b02d9"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "5d9f7f7e123b2e985442ec8f4ec16329"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "e3dbcc8bd09462f3b873b72242603a42"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "f29a6aed0eed5063ffba12be6add0936"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "c99760566f3f29b1c21b3c5b3aab2130"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "3246214b836298dbed60f5fa24a98a3b"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "589591ab852aa3d088f3382fe21a24cc"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "4ce4b61c48ea2684fa3181d983a9639f"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "87b8c987d5019d2d0da40b6ec3edc4a0"
  },
  {
    "url": "basis/design/index.html",
    "revision": "b2c21928e30955a73ebb934def24178b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "231ce196f7db5b39c143c7acaae355ab"
  },
  {
    "url": "basis/os/index.html",
    "revision": "5e2b2016659aac63e2f6790c8fa28201"
  },
  {
    "url": "book/index.html",
    "revision": "9db12fb2ccf08e42a412b316c69b4353"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "63ed2f32e31ea2d52c1cf452705d4df8"
  },
  {
    "url": "categories/index.html",
    "revision": "97e23a5f8e2234e1ce790ad2170b3e49"
  },
  {
    "url": "figma/index.html",
    "revision": "02c443672f632cc143c3697539c25c09"
  },
  {
    "url": "flutter/index.html",
    "revision": "be5b900a7d0fc82f962ad1d3f3de4529"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3538d64cd3efb552ba5889b8c24f34f7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "7332ab8c3b1ba242d4a44103fa45beac"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "470365b06bb76694858dc3b257b29b9c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e126e898e64ac59565f6f8b39b8b5f5d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c9892fae56a5c37e6fbd3c1f9e57f760"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "036c88670babb22296af4799677ebd9f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a31a06ad26ded4b5e107b5f95267ce46"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b0db4d8b99a0f4f9cb15865bcc8835fe"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "9de97651210800670fe95b562c1293c4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "971a5223d109c1eca89995566ca6b134"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1b011bc02f0371dde27a225491c19ac3"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3080c8e47797a84ebceaf35c3c5bbabf"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "762b1e5dd2414bf171ed56461cb1b5ba"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "20ffca2be82424a84745374343062355"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "75b0cc31b2ef507e87153441d445b350"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "ba2c1d05b45a39936ab829db2b29cfbf"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3efb893928929ee8de04750e00af3478"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d8b05bfef03d489fb1c4206a49169e3a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7b398b5c6c9fe3828deabf5b9b3e088c"
  },
  {
    "url": "haskell/index.html",
    "revision": "c951cd98c429fa191cf6471f1c516820"
  },
  {
    "url": "index.html",
    "revision": "6ae59816457ffb1dbf1be32a7828a133"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c423f3e23743a67acc5b62f31ae3fa32"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "f2182a060303cefb36b4ab070f69c753"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "68117dc4850c06f0d19572c858a58ff8"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9d231ba996645465926ccd7e39c9888f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "1cd6d80aca7f08a81c3123331264bb33"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "6ea9871914f86a977b7b560dfeb828b8"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8fb9dc85c2d4380ec1d6cb1aff501748"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "16c1fe035c8e8477f9e133996ba61b37"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "6ce8346e97543ea51dc10930aac9c890"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1a75f6e7e7095eeffa42084388e13f73"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "6b4945994252980b54648b843787a7c1"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "f0956fbcaa6e3d68337891611a4c2211"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "7998f158f73b80dab18cc6990de3b56c"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "86772fa89e55652e6a70278a0e09e945"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "285cba07a116dfea41178b128515e229"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "03386caaf52a4c06c756c4318e94540b"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "8f50528a9485b64f0135f322894d0279"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "00fbc57e0d90838802acd5a3a45fc323"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "081fa6f21e7f98e84aa0eacd192617a8"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "ccd6af63ec31be2f591dcf6397482849"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "3bb2a749054fcacec3c314dd629d227e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "11578a48c5beab4dcce56036af860016"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "70086fd7f86c327ca0afbca80112dfdc"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "09f0eabd14b5d0aac98d6868a73dd707"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "22b70e7752cef6b4b32d00f40eab45b1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "7e1f92008cf0867c3013e8946c3f3d8a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9d6ed6ccc3500b6ad0d7aca0fc1072f8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "138c25404026a1c1d56c8d3f0d577e4e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "2993595b3334fd36898a504987138df5"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "42c2b7b660056bb2ee89a539fa7b9c97"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7c4d3773301eb7406f5c96825a4196c6"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "eea470cae8b446a62d7d786a9ba7d3dc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "edf45ab95bb71aac45d01539ba7374ab"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1122d6327fb2b00cf4b328b043a09a1b"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4d696ca1b748f4971ea6b403f3a7d81a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "45f9c4bdaa670272c012d7f905c33d1a"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "87ef95eb1dda6bd90e80251ab772d309"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "83431b180f9c77492ccab39f9810cf36"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "5b4527c6bf563df8af42a5d764b7b85e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ac2f114b926b665c0e6340e49a16754a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f4c0c9b1715158be2a9ca5ab0530d590"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "882feffe9a58d753ddd9bad4c480c83e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "aac28db51eeadd144a24f97390786ed9"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f96267da0bce57c923ae1c2027367493"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f2114c3fe4c549f099ebc2efce18c9fa"
  },
  {
    "url": "tag/index.html",
    "revision": "9774c030977e347b640845f517c52791"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "80117cd0855c1dc683492e3f75f04486"
  },
  {
    "url": "tag/json/index.html",
    "revision": "79a592258e07239af087ee29ee118c02"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6c0ef289d988a8c11cbb3443032d4740"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f35fec8c264654dcac7275303be78831"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "2aac6ef0316248fe3fbe13b9e0096d1b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ff6a9c43a9023bd7438dd0c39e746032"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "cb446defa1dbd21c0b7e6ae6553a2aa7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "98e3fb20a50a1807947aac015496d0b3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9dc43a5ed1d320f7cccfcf7993154bc8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c8749832a203f1ca6e7f9d84fff70597"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1d015a4b6c7bc122229c3858112d8eba"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "cdb053fb83b003348e021ea2725f29ff"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "cddb926f84d8f14aa6cc30ae7444ca5d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "942454e5df9e8b91c4fa214fc7599562"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b5002de03a25af0b753720d5102bb37a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8049e5cf232f2e9e51f9d4df3116a4c2"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4c70eff42663710f34846b7e7ea29f04"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "119c0ac33f108b145627b601b80c0800"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "bae721ae6bccf027be0f93bf1eefa82f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5411b74521ccc6c0a418155ed625c8ab"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6b91be89bdae479f6e8d5165fc397530"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "e33e5fd9fde6aa86e5d7d298e496bd49"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "3232bbe93bea3e15681fd924ca41ede4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "da5f8c9430c79ca6a4230db9023e1a06"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "21b442823334786be9a7efb254f6898c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9908013d23810216e00b685301050f30"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "965ac2cbf3d2835b99286f038997b323"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "576d4b44b266378bb99a0daed811651f"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad50c37c0785a03329a515c96067cde7"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d00f36ae349868f9c466ae1d684c39d5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "ceb73939edc11cd48b29f0185cbe183c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2e4e7bc88a83460700b6828799ce1cd2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1ab7d99fc154a33d96270bdfc3f86e17"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e314f3d8d17d07eabe65338c6319aba2"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "d47bdd8a91fd6843716cbe894dee91f7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d70e7abd5992970906d1e255e56c6635"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8c86360a983d571625de50671caa887f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5e689899c6797b8619ae0587e9c72881"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ce00e1c2ab05c53ad3acc057453f63c1"
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
