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
    "revision": "a1ef52ff20f805039dfaa151ebc48283"
  },
  {
    "url": "about/app/index.html",
    "revision": "82094bfe38b1d7e1fe6960835b5dbe52"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2d10cc02f52a3b961c07ab9e515e1a8d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2082785a71a7d792912fcf32ee2f4d1f"
  },
  {
    "url": "about/index/index.html",
    "revision": "8bebbe3b29ec84a574c6b8f690dafc05"
  },
  {
    "url": "ai/index.html",
    "revision": "42d259a2e4ac1c6a7b235db692c3b0f6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "3503dfbddc8723339cc5f3eac0aea447"
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
    "url": "assets/js/100.1e9c5d0e.js",
    "revision": "f58fb7d7d80c2048f657b5e60ec8dc33"
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
    "url": "assets/js/107.89e9a1a0.js",
    "revision": "c7be6d7c910fc9493eace0c723605737"
  },
  {
    "url": "assets/js/108.aeb32bd5.js",
    "revision": "c8ff4077ccddca72e572a2e9f22013fa"
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
    "url": "assets/js/130.f7e7d7ec.js",
    "revision": "4031ff18216b907731b8fc4391ce8205"
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
    "url": "assets/js/33.bd5ba947.js",
    "revision": "c135f368f091f57327572a766408e4bb"
  },
  {
    "url": "assets/js/34.220c7fe9.js",
    "revision": "fd1669be3b7173f6527e524313b4fe5a"
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
    "url": "assets/js/62.0f462e53.js",
    "revision": "dfdf3b89fd8ed7b1805d1e36bc56ca9d"
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
    "url": "assets/js/65.8baf0a41.js",
    "revision": "dd59e903115697f4087bf78456d78d83"
  },
  {
    "url": "assets/js/66.dc45ea81.js",
    "revision": "6e6105d7f430dab9e063274de6507528"
  },
  {
    "url": "assets/js/67.2c816c9f.js",
    "revision": "51a5b7029b3e9aa04c438acfc914b2b9"
  },
  {
    "url": "assets/js/68.240ac395.js",
    "revision": "667a0aa675f19d7dcbc7f675e60e480c"
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
    "url": "assets/js/99.9eef64aa.js",
    "revision": "c8022df28f66d53f8b1d5048703f2c6d"
  },
  {
    "url": "assets/js/app.4b4688ba.js",
    "revision": "1b75d40bcd719c90190d9b4cea9e4b98"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "740ae5a0d7c10ba18b1dd649710f9c37"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0ce7e42d935b0167abb4eaac98469025"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c4a58d4faac8058af953faad418438da"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "cc1aa0186926d82a0dec6232915d2a5a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "300132fdd2ee0357ae7d883a7c9b2319"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "558f3f9e4969601653448ba28432bc6c"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f185ba17bde79d331fdb8bc59ef464f9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "099b0fd107199bc8ef5b973a5fb5c119"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e6492169743b82ec18997a543e564334"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "366b2e60051322ed5b22bd394695bbab"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0a38f1f8dea7757376dd48910e866e69"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "4269775bc7d5785d934610e55910078a"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "c9854aa59a56bedcfc42be64d3cb859d"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "bc3c58d303138daff46d6fc53579c288"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "d801a51243f365d211bf28625a8d4d13"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "59417eb06b8618a450fac5e9f2aa42b5"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "80721490b4f2a1ae09b84de5349b8ffb"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "88e0b41a7b003cb031b954d338cc3af8"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "22e185cb3300466b1cb3a3894765ed4e"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "6784ddfda08d89da485fb1482b6aa3cc"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "f6e3db3d68c0b111ccb6e22e763cef25"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "fe15cad347979aab93c75486b61fa72a"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "475b1bc362e04cb4de97684d0b36ec19"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "28c208b0c737a55493e2b5784abaf613"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "fc7c0e7f3d394887c51f10288e2df8f3"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "13e7e777d1e1f4d4e00cbed75fd3b64a"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "4042f789cfde5c2426286d6955d58672"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "af4417140c8aedcc04844817251b0fc8"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "1442f8adfe705ba07dd9ad8d42fa8115"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "6716cd7121109dc5b9ce79e89a8bfd68"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "9366805ad727dcc00e623baba1e24799"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "61228540c35934ea2ed1ddba8dac06d1"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "5c98728490d9fb7fbe97be3089d56958"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "5e4bde336796ea94717ef45981ad3ca2"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "68ad45b7228724d1a304cb92ae11bebf"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "de2aebd4f290ef4185b1c39cb88dbfa2"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "19500bb389d17f0aa878971c0b12b5e8"
  },
  {
    "url": "basis/design/index.html",
    "revision": "61cff9da3a03e2ce422f25c606b6b7db"
  },
  {
    "url": "basis/index/index.html",
    "revision": "7cf44b69210af4402a079abd1c706bb5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "dc43ca0e7301ba5c8aa13bb522d1c027"
  },
  {
    "url": "book/index.html",
    "revision": "6d1d2e2059c8668ef39ab7dc8038d4e0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ae69f8ffd714cc2f4696c72e78a1e36d"
  },
  {
    "url": "categories/index.html",
    "revision": "f75c45ccaab058127e0566060c2e29ba"
  },
  {
    "url": "figma/index.html",
    "revision": "29fc84042a044534ff461d2a663a1dfe"
  },
  {
    "url": "flutter/index.html",
    "revision": "f5733798a049ef67b2cf4eeee0657526"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1d4549fea1c7e8b425c5d855f4102a1f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "751d08edd53907ca6bf637a551b7cb73"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "76104938a32a86fded43921628c66ec4"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6c94e4a0808d2b9b31b8bb2577fd3b65"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a551df8f7c29d56be5309d66c858dcfa"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e3f805ae0218a00cba708e5a75b54d5e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "18b65146590fdeb7acfa6c46c6b16ea3"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d2322f5dbb405caf3da2ba41d48071c2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4a1b60b5fe2b5f85a8284cac7a8b8fbb"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "0c0d9c4e6d9fef2704846d46a2c2f191"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9a6255fca9a951542b4a3a2533508731"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c2cb2d25d990045a60881e398cc1135d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "8a80a36032bbce335509d001b36df480"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "5047d6408ab087d33fec71e91f002296"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "0dc10045876cab3e1e787f753f4dd6eb"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "22b725f2cc2de10e89538cd311e5f2d9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fe555dd11570ac7d09cdb39e068030ed"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "794119f86a7e7f6b20bc42c4be2bf2f2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c770c1654e87d92f036bf9ad257c51f6"
  },
  {
    "url": "haskell/index.html",
    "revision": "b9864d089f2f54289d95b56fd9aea19f"
  },
  {
    "url": "index.html",
    "revision": "31f75415aae115f578d874607e215456"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c20eaeee47a28c702ece2ee6dcd8970b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "f6d2957e189edc6efd4934130caca4c4"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "eaaab521fa156a678973aeb9f523e739"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e8c547da9f9d2bb3938a92a188d5e233"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ba402bbe2a171c96147707f0dc666970"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d9bb47dcfc56d79fbe5266c837bed631"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2112348860b22d72e72386c43054d35c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "74b013ac2d08b6145c8a5840f1185723"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "8a16d0e60ff039789d582290974e5924"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ef134094540eed9bf9d3b8f7ca98017d"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f5653db1c68aaf7b942d22fe578bc335"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "49e3caac9ffd61aeb401d41f7692c863"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "b3d3b7797ef708b0615ea8de74de795d"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "196aa20b5dd6a85da8bdecd1ee1b9992"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "6c51fcbc53c67b933b98f89bcf0c08b8"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "d126292446b96cb6cb484f94ec2bb70c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "fdd46213c9ff7481b5bda580dc8028a4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6e1b067ae39b845f0be701d2e64a1e0e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "862674fa0792e399c07472cb235b7fbe"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "416d6e5f60fd666c15321fcfa2d96e83"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "2ce5f62af4b607676c1c3a9c3771e4ec"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a02f62e598e8e1f2a72842dc2097e85f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b9347f70cf1fdba4f1dd7a76dfb870a9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "085d9e4302781fc3fcdcdc4d758d7e0a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7e59e33213129c07487b56abb8bca1fb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "05c862440e76a111caaa6426cfac6140"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5babaa70a8b3aa8f7cf8324783523f8c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b1e99f6ec477b1d233dea92c014d773b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "97c1f8730e4598e124ef2582ddc1c2df"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "a5ce6a446bd4a2c7b37b695646afc16e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "4b20afed5bf6a80b58da3e1fa1ccd3ea"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "210b7cf4d2c0dc0d4f196a1cbb5054cd"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "7e6bcd92a5c2499a9aa21b712eaccc7c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "55e3fc6a51bfde498ee010ac097c2479"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e60e2d97fadebffed9d7f5e290d0b700"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "c09330e69d15f39a18d674d31bf28175"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "eebe97136e47998dca0f7b3ad564bf00"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "231e11c05d6f314b8be9c8eb9822e1c6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c4e6b302c6640de22fc8251b742366b1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d1e6cc8adfb12eebe3608110c2ee513e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "56a79b3ef792dab9bfb90b568f634bc0"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "64b65b0c28fa930313f667f32dcfae51"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7ba32f307e1dc3959d04fb7a2bb0d931"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d1d5084cfd499ebea74fd85b4691ed17"
  },
  {
    "url": "tag/html/index.html",
    "revision": "384b7564c173cef9741ba51fabd7ca29"
  },
  {
    "url": "tag/index.html",
    "revision": "d699fbedd9360ddafa9a2b2e4a47a9f4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e2a18ef74c21e060983dd86993b4107a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "19f1cc864494b781939bcc9113eee0d1"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2d04de9da6da5346486d171482061866"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "857791c9b0b42b26ea1091bb69541a46"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "85e2fa47d52b6fa949022d06271b1e23"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3b300570dc302cb0e88f00106005d8d9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "128fdf9ccbb4558c2f659eed977abed3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "cbbcb645477f693f7469a5e8a360108e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1fbb61ef4da089a763588aacbf8c038d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "196f4cf76da8830878a8d85f9ac806f1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2603b098ba926de33f796bdd65c72f8d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "16236f8328b2400f55a983a6604022e7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "142b1a9c7bd7fdecfbacbe0267e3ccf3"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1a8dc6439b6218580bb38d7d7a22b4c6"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "02d8976fa1b55b5fa02f61c36254777c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a51d5eb00fd47f8e32d9effdba4f6d0b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fbd70e52aa35d7b5dd1c9147161b58e0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d4d4e07c3a70c9bf297b2e2777f8a72e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "059ffc4686176e2f50f4ca3a28a366e7"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "56302f655efba682dd68f500d8ac80e8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ec60c10cca84ec173c1e6c21788ff57c"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "97312da4bc3b38dbff4dac3ccec20a27"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "5f128e683047aba2afa86bb589323d1d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a32a77adbb8db4c3708ef5461f535976"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a0847bc68048dc875c6324ae066ad04a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5869aae614add246d23af7adaf73eb34"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "bf259cbedaa25b692bc7529052d7e47e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "f412466eb0359efa225adf21c56b986f"
  },
  {
    "url": "timeline/index.html",
    "revision": "bef34cb52bfa35161b8537f00193f320"
  },
  {
    "url": "tools/git/index.html",
    "revision": "732a0266dac1243c8fc58de022eb365d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1ad8116395b0c98b2f01b2c87a787e51"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "18830c8a44bc89712ba8ac54b40c3c45"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5098c1a5ed298a316d0f51356325bb9d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1265cde1d21a316567c17158c1716a59"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "368838a3defb1209581a1d1825cb1d72"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "7967ee84d5ade678314fafdc6ad10edb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "387b415d8fc91237cc2170096cf91e88"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d5e5108764983fdae132e0c5e20e8cdb"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8ed176437c67fb133e9883c19cf1ec5c"
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
