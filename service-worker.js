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
    "revision": "054f75cde8d0e7b6212a831a96368e84"
  },
  {
    "url": "about/app/index.html",
    "revision": "2257be9ab39a28f6eac10bcb36c3cf84"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "91ce3895a47a92a7dd3af9adc7a22d64"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8df4eba3addcccdd45ee293111fc24a0"
  },
  {
    "url": "about/index/index.html",
    "revision": "21639894752d18c026014481eace1a6f"
  },
  {
    "url": "ai/index.html",
    "revision": "407f500e6bbbf57da368b4f1b54b6d31"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d717324b9c82d057d86c954b5eeb62de"
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
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
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
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
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
    "url": "assets/js/124.1bee266a.js",
    "revision": "159f48b39c018d7c0e5dce35b78a1bcb"
  },
  {
    "url": "assets/js/125.a6080174.js",
    "revision": "5d2870b6733d195a3c1b15c69adac2e6"
  },
  {
    "url": "assets/js/126.7663df12.js",
    "revision": "0fa12a7940f312527474c0a752a00c86"
  },
  {
    "url": "assets/js/127.302d70c5.js",
    "revision": "160e2f31139168ae5e9ba2a8f45ae490"
  },
  {
    "url": "assets/js/128.bdc5fe20.js",
    "revision": "82e6c1a2fc595931d3c58dff420c826e"
  },
  {
    "url": "assets/js/129.35dd191a.js",
    "revision": "26e02d9858583d8bebfef9765a76a77e"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.e524b984.js",
    "revision": "4a7083d27139433b25ca205c8305c5c4"
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
    "url": "assets/js/58.44d54516.js",
    "revision": "afc7a14b1ca37a4ba111ff58a5cfdb65"
  },
  {
    "url": "assets/js/59.20434414.js",
    "revision": "a448b4ad9f95ab62dc6571bc263123be"
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
    "url": "assets/js/65.2bfe4cab.js",
    "revision": "8e793195acddb44223573fe27902d5c3"
  },
  {
    "url": "assets/js/66.dc45ea81.js",
    "revision": "6e6105d7f430dab9e063274de6507528"
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
    "url": "assets/js/86.0629ebe0.js",
    "revision": "4fbc920b733f4eb6ba3d6943253979da"
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
    "url": "assets/js/app.b576c1cc.js",
    "revision": "47378ab94cffbcc39d203517f6198cba"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "1f5f10d3bd495f0f39492a7d3ef5fae1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d36517736b7f345d0a9b4c7dcc65ae25"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "748a9090f3448987a7afa269c02901f3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "6eb83aed75e26c995ca85ac8489f432f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "219fbaf4e110ae0e86e76cc1ba7cb177"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9444ea101c4b0fdd2d248f9ead6ff313"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "47b56d7d10026ca93990771c970bcb30"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "60a193fd3452206db979ad93b5e87959"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "db071df4773533273a5e0a845ad0c6a5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "618e273c252fae49d55a9b14ecd7cb85"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "20c7f946d4c9725b944fb6297fd679f5"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "766415e5c2c80c8ee86a2c6a62424dad"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "32cc566134341ef3d56a4980774f340c"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "d9bcb612699f3fb16bd3e682151b6b09"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "a7dd80c0f35898d5218054e33d166c0b"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "98a59e502198bbcfe9040916645549e2"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "b3c8f35273c77995370afc4b73a8bc10"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "d1a2d2d7b077b3bcae368dc6a399c2e3"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "59a7256ce18ed0fbae29b8f5d840dbf7"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "69287ef8ec447aefc6401407906f8231"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "3ab658ae8142327362ecd6bb364a373f"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "709476150b7a9eb041dc6a5b057b5b6f"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "c62433448584d2c619efd61ade9329db"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "30d9d4d8ff5774ca4bb8f11ca04eddee"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "faab117675601aa4813ee99d43212c8e"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "cefc67be0da24d524af64c4e373c4883"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "6b9a23b91c690651d672b9fb854c766b"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "00176ee4fd8e5418a7a7be43734fbd93"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "5d09bda4dbc18bfe90d2bd0616078bf8"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "f1eb921318e5ae3a8d13d06aad842edd"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "daba4fa92567744bee28112aef86b592"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "827a155dc346366683c52377f4f016da"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "b4300d24173856d86aa938daa8f8d0e3"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "d0d1d94f101e71d20f474086bbb7acb2"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "1c0d1a93d573106fa1f375e6ab3d3984"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "42e9574536f79b997b07317011c8f3ee"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "4db9050f5d202c776690fbed8f2823e6"
  },
  {
    "url": "basis/design/index.html",
    "revision": "9e8e8af75f17c8c0f6e800fb4afc2dd3"
  },
  {
    "url": "basis/index/index.html",
    "revision": "eaca41cecba277e535c4079a097e03e5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "884261d4a7c74f93d4833bc5eed66181"
  },
  {
    "url": "book/index.html",
    "revision": "4d62e0ad3391a56a0b1213a4e1d5ec6c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2a023095e6c3e8d2614e18fec4317309"
  },
  {
    "url": "categories/index.html",
    "revision": "38cebe4069c825095cbf8048d20d3332"
  },
  {
    "url": "figma/index.html",
    "revision": "7130d897b1457bea4ad43d9532c8adda"
  },
  {
    "url": "flutter/index.html",
    "revision": "e753d15b83bf35e752149b278790774a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ed2c0caea1d2f08a09b9fd22b30104dc"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "741bd8ea3118705564e06c0fe1356cfb"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d86e4315e45b43e1997004907a5cc6ee"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1fbec693af081f50f7480471f13f89bf"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4c9ad6fd9dfb39fa132b5c11cd9aa480"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0c054421283fd3e2811cabd1be695903"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "147d05b39738139cc524cd319ca9a464"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b0e96134a5ffff2b93bf7933696678e8"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "26bc5e035b4f214e2dcde787da6d601d"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "dc88e020aafe2ca5c638efe005920deb"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "830281b61810373573faa66d47b259bd"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "fe23638d45d3d18f01b5c073f4c14058"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "8c3904e90a24d9374037251d21e22e10"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "39ed56092e219a6d20c6f6a0eae87027"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "76846822c717f8461984d1b54709ebf2"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e2ee6696f357b120ea158219a9beb50a"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "93e922ca68664161dd58f85de7e54999"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "422f0f60b7f6a2167eb49d71ee5efac8"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e72aaf8140c2620d2492399f848c9c83"
  },
  {
    "url": "haskell/index.html",
    "revision": "4027008e1b223d854303667c0caf800d"
  },
  {
    "url": "index.html",
    "revision": "ade56421543927d79347f006554199f9"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "5fb4e0ce34809087e5663be41da5f419"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "871ff388cce0994417c2a48a393ec080"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "28547c2cef0c9cffa67415739422f101"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "065a0a1dce510b47932c458d5563f396"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "fd755b703362ee11c44895ae70993349"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a81d705b1446ffc74a096b0ab1520532"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "53c182c1c5883a7856294da6637329b8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "fdca93007db747a206350f651021fce0"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "2f8d35b446e269f214c7d4de59780fea"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8211194d507fd10dce773db471b97f9f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "fa5f1e3e20db6473a6926cd571dd57a1"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "12c34f3c3ae2c0d73f41fd593b7dcc23"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "285d7bbb220a5fd3fea999c2010b0ae4"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "bd1b49bf3e2c28785c1a7ca4ad48da02"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "5081d6daae67e5ca7a8e99759656cd9a"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "bfcf9ab65438d7b80ee219c8183c973e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3963709c2c09f67d1c5fe545082207de"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "7eb35428b0fa82cf041ae96b9de11693"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "19d7faf5ef13206244d09cbd2360d7bf"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "99fdfc31a6c2d0ba9e31fb173785dd57"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "eb0c6b642f69c4c764d727f100a0dc58"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "00a27ba4aaaf668d1db70b8e2bc478ff"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "70140e4008c4c8a5126e8c884bc2fe8e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "aa47fc737335ce275cfb31ae578fe527"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ce107b1dd78d5ecb4c257b9c0d45ee10"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f36cb49a1aa80429cebb828816c1350a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "79a1692b4b2fb3b9c169c63be70b5467"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "20ce821f1302b1dd0773a8e948da1d4e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "88a43c699205378facd4d4b984122e62"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f522ce398bf9c9a2eb9ace92399378e7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "86e89a96365696128b32b5e6b92c37dd"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e258e4d67eb729d2da00f8771a355be4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "0df582ca01cd2d2d9397efde55c63510"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "19edf45211577779a01cecbd40b10017"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "fba7095c47586defca0f0e9742dd8984"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "e16977ea58a4af2224f1a8bd04a8795b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "98a61e7528b35ed9b4f315e4cbbc1671"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "8eb6a43a67c1f9a4616dadd0f48b42c8"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "d7c133b4600e42ac288a222002d65637"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "761946dee27089decdf431cfeb4836cf"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bd44455d064d969c3728523107c7b18d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b84808f824b1118ab174628935566e68"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b2330a4f182f07c2a2148f9f5566267c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b7128273c01387bc7e6dc064323c3dca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c44615d284f1479aaee965bbdb19d9b0"
  },
  {
    "url": "tag/index.html",
    "revision": "49f2eb1356971559af9ede3ec649d282"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "791e2159868fe147ac64815fb7b1e918"
  },
  {
    "url": "tag/json/index.html",
    "revision": "724172c69e7de95a5748cebd88420ce8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ea4d117ec6ce324a806fba59e4e8d5d4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "77e3c5fba70e4f0a7d51af8145528415"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6b8974ffd01382dc52548aa4f16b6a50"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3510967dd5aff1d8309a099cbe3455ba"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a7c24c0593992ba4f3ee2d4e7e9aed40"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "26feea0bd5359b4f38bed71a2d59dcdc"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "5d6c72aa1c301f5d6e8f50e85d7e6394"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8b56c5278268830a78dab4692c6fdfcb"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "7146c380eb6f1b6e8a1600694154a3e7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "41dd599e18190b8e682fc115e92ca3b2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e0bbe58e7b87dff0dd73bd7bda2f2233"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c3af13b199485786f1ad407f8e66c900"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d85acfde6777d78d7b3861e666656d5b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "19b7fd36289ffc7bc1226a00244c9877"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b95d366b0d15c0d35399aeff8cf3b75f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "63a5d8cc89d89ebcd137f669b640a864"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "23460857a81f5d407734bd415af16d6b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5106a6be3eea229dc1b5db0f778b0ed4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6fe47064f2512d411d00fdce85fccc29"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "34c1933af34b7e47c325627059150ee4"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "e6e62b49d91c2c2092d37835b98cf6dd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4d48a329fce3faf4f61deec5dd565c58"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "19029254da3199680518eb3178e40320"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9186863eeca34e562e68480dcccfac8d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "0fe068913db382bf163c194e2384f06b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d8bb9b2dc931c09400ad0eef43bede4c"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5625ec5ba46f8222170fdd0629eb5b6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "129d329f41acb03c981429d33d9bc74e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c2ab5004ee8a8934e0931ac3c373e6e7"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f39b0e0963f4dfe018888b09c47b6e88"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fb13e008eae3511b8aba99a7b30f7b27"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "243e568ed5653e1a55b243f9d5b0163d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e72f9cbaa6e67b57043cd28c83f9bc3f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d347540ecae5fa73f9c41ebae8631545"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8d44fe54cd768f3ade164be6b96377e7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "67d2a3986c3253202c7ecd10edb198b0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3395f2ac8262990c4d57165259fe4d42"
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
