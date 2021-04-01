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
    "revision": "91fed032b4d43b054f741d5074cc8cf3"
  },
  {
    "url": "about/app/index.html",
    "revision": "4163482e80c9b5392d9f39f266d98229"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "367c8fbb13e5f2864af87a4921f4dfaa"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9e1746581bc1a02577cb23aa44f55acd"
  },
  {
    "url": "about/index/index.html",
    "revision": "dc611b7f82b409cef0a43519d2fc3b0e"
  },
  {
    "url": "ai/index.html",
    "revision": "ef6441b6d2f9a498d5c503c4f4e613a0"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "10f16405cf4670a1e28f97c55ccf2e85"
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
    "url": "assets/js/100.69ce49d1.js",
    "revision": "130ca944f42e171f20ea9890edaf8bbf"
  },
  {
    "url": "assets/js/101.c26491d4.js",
    "revision": "7b5bc1c26bad9c0c14b07b12541a72c7"
  },
  {
    "url": "assets/js/102.34b35369.js",
    "revision": "4a303aac018c2a5519807fc626407957"
  },
  {
    "url": "assets/js/103.f74c0b0a.js",
    "revision": "ca2dc63a6f215afd5628d64f0e4c9659"
  },
  {
    "url": "assets/js/104.d2469fdf.js",
    "revision": "fdb1c007c5f767ca1fac0bbf5c2a76b4"
  },
  {
    "url": "assets/js/105.e9bd6373.js",
    "revision": "d0457d38dd478e2d9d0c38782f3b0215"
  },
  {
    "url": "assets/js/106.9cfad97b.js",
    "revision": "676cf55351e4f74a1b47563c6c60921f"
  },
  {
    "url": "assets/js/107.35667057.js",
    "revision": "58c3033cb489ace5f4749c0990e7a05b"
  },
  {
    "url": "assets/js/108.0bbdfb89.js",
    "revision": "0954eb65268da8fc06d7a373d8133557"
  },
  {
    "url": "assets/js/109.ffb56245.js",
    "revision": "0121aa61756704bbb86c5792706b38ab"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.3458c007.js",
    "revision": "355ab35865a55b3914e104663283afee"
  },
  {
    "url": "assets/js/111.1930553e.js",
    "revision": "d39c416ca6ffb93ddc395e2037551d01"
  },
  {
    "url": "assets/js/112.e44a1c9e.js",
    "revision": "bb5feef7ed7c0d6904d7265f69b74c4a"
  },
  {
    "url": "assets/js/113.83849938.js",
    "revision": "3fe3065a5f969bc3cc9f15eadd86e9e8"
  },
  {
    "url": "assets/js/114.26d8b5bc.js",
    "revision": "1d2e5e93677eb92fee1d982f7cf11419"
  },
  {
    "url": "assets/js/115.79fa9369.js",
    "revision": "78e24766f27a0310273b17f149273b36"
  },
  {
    "url": "assets/js/116.7f356ff5.js",
    "revision": "bc27d381423b3371a02a82e126af6c41"
  },
  {
    "url": "assets/js/117.9c85b800.js",
    "revision": "a2b3348891acbc3b50f70f01fb6cf3b5"
  },
  {
    "url": "assets/js/118.6e847aa0.js",
    "revision": "a82cb2c348a2c5d2fe2b3b81e8e5ec13"
  },
  {
    "url": "assets/js/119.c25c1da4.js",
    "revision": "7fbfada8d02d2f916bfaa6c97946ebfe"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.95dc81cd.js",
    "revision": "c11a5cfa82de306a13dc8b20aac0ddfb"
  },
  {
    "url": "assets/js/121.abfd5bcf.js",
    "revision": "283cddda5de31407bd01d6ab1ae94f3c"
  },
  {
    "url": "assets/js/122.3198ecae.js",
    "revision": "b829f120a2ab12f418ce64eeccaf925a"
  },
  {
    "url": "assets/js/123.9c899705.js",
    "revision": "68fdf707d6c7656e8afdbe1911953f0f"
  },
  {
    "url": "assets/js/124.813ea2b3.js",
    "revision": "9531fe738830162abb04bb0b3d670591"
  },
  {
    "url": "assets/js/125.a62bbaaf.js",
    "revision": "f8625e71536465b7c2b8e6aeb6fcca5f"
  },
  {
    "url": "assets/js/126.6283c4d3.js",
    "revision": "6e2320f8f94e0e9a70f94623e7d21087"
  },
  {
    "url": "assets/js/127.11e75195.js",
    "revision": "dc1688744f2021547abbb76bc6670d90"
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
    "url": "assets/js/58.6bb404ac.js",
    "revision": "a28d173ef7b0cf368f027040693ae6ae"
  },
  {
    "url": "assets/js/59.4f3b96f9.js",
    "revision": "37df0600395f2ab7d7d198479dd78b56"
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
    "url": "assets/js/61.01f4026d.js",
    "revision": "f35200cc855379f00a78941b54b7dc07"
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
    "url": "assets/js/77.cc9aef57.js",
    "revision": "e74c22d53c043a4bc85c53ef0ca02a23"
  },
  {
    "url": "assets/js/78.893d0132.js",
    "revision": "8b0ab599ffefad73733fd979d6121408"
  },
  {
    "url": "assets/js/79.fe89cc46.js",
    "revision": "383cb14b84c2e2bc940183a9c58f4ba1"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.7fcd0be2.js",
    "revision": "ad57cb060af3dc5a20e9d6da85742243"
  },
  {
    "url": "assets/js/81.fc317e76.js",
    "revision": "0970100e7362b377aafe9e612f3d6fbb"
  },
  {
    "url": "assets/js/82.f8016a32.js",
    "revision": "fc312da27a340f53c33659d8abe192b1"
  },
  {
    "url": "assets/js/83.4178124a.js",
    "revision": "9144e24a9b8045b2fee073d007818978"
  },
  {
    "url": "assets/js/84.b60ffa6a.js",
    "revision": "2c6185df0b296032d983c1181bab94e7"
  },
  {
    "url": "assets/js/85.224aba30.js",
    "revision": "f24a2db57886388fefe42427bfcc934f"
  },
  {
    "url": "assets/js/86.614b3051.js",
    "revision": "eb07338b392b9a86e582686d0db5c7d9"
  },
  {
    "url": "assets/js/87.5b3dafac.js",
    "revision": "73b4fcc96c836148f1d42a455b7971c7"
  },
  {
    "url": "assets/js/88.f5e3bc8f.js",
    "revision": "f68efa0452302ef7df7c0231b4938914"
  },
  {
    "url": "assets/js/89.4784e626.js",
    "revision": "d60a1bde097c799a412971bb3ef4ee34"
  },
  {
    "url": "assets/js/9.f54ee413.js",
    "revision": "6d9294b267cfa9cd596d31516d0c20de"
  },
  {
    "url": "assets/js/90.68d8bbb9.js",
    "revision": "39d08bf101af1d726fb136c7466863c7"
  },
  {
    "url": "assets/js/91.e27b18ed.js",
    "revision": "0fe51d1323773c86bd2000fc6d7a6a8a"
  },
  {
    "url": "assets/js/92.d88be74a.js",
    "revision": "67dc2cbb6717c66679d82c11d3b838bc"
  },
  {
    "url": "assets/js/93.aa135baf.js",
    "revision": "a10b46ff5acbc5ddc75907e6d551a197"
  },
  {
    "url": "assets/js/94.4a3bb773.js",
    "revision": "91fbfc0cd92425efb8176500ee8bad1c"
  },
  {
    "url": "assets/js/95.dff585de.js",
    "revision": "eb33e60eee0e2f748ec4d1bae6156690"
  },
  {
    "url": "assets/js/96.41f6cf69.js",
    "revision": "8e80bc8ca03c31fe6d3e1403bc432416"
  },
  {
    "url": "assets/js/97.8e5b80c4.js",
    "revision": "0a699f64db02ac3e4484511077ee0e6c"
  },
  {
    "url": "assets/js/98.957bb653.js",
    "revision": "4c478d4e04a3513e4214d7d0199614fe"
  },
  {
    "url": "assets/js/99.42d347ff.js",
    "revision": "d5a2b4c1aee6159437a007673712ea2b"
  },
  {
    "url": "assets/js/app.36a6884f.js",
    "revision": "8e692068e02026f476130adbd4f333e9"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "cff4e32d129c72caf3e75b0c9c20bf5f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b486db3d73ad40fb4f9869f91402d13e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "3bb5b578086f2a1f65896a3999cf142b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ea32de87e1f679087106662c2b24fb57"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f664dddb7fc2e2ac5be8a3a8a10128e5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "81e091f8f7fdbfaf055c3df44e762c13"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c8ea8859df52ad4e10a9b58dd7e6cfa9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b8eb97d44c6a31a9f73f98b3efd0e41a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0fe6d350c6c9dc49160abe89b6e568ba"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "fffdabf4930d6d2cdbf4cee98940be29"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "fc0d71ccdab696f862587adfcbc5784b"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "710ecb9d5fdeec7bca339d48b31b3d43"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "c8f90b3c41121a21f12ccaf061b48c94"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "8c6ae944f1727cb61de446dc0e4af6b8"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "ab8f6d9c25da6aadd178bbbaa8286115"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "54ddef8168d989b74806c1e190d3d049"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "70c97b98afb2da2cde84efb4db30b132"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "848d32e3a3a2931db06941f7ae0148b2"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "c074833513ec304974947717cb6c0ee7"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "32f0c0912c36bec597d1a55d8936b261"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "8570867c59e05f739bfb1ce3f30e58ce"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "7460f8af35e5659beb53dacc4b303e52"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "edf28f7d083602510d58cfabb09912f5"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "68cbe643d4ee79cbf16155180b5e19fb"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "54cc00c65224eead8b917dbacec3b3a9"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "d5d968fcc94bea3017b0fe0799c30966"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "6fc288eda6f687337a6f25721878eef7"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "78674eb79260e94429776c6580e6c19a"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "7a526c18ca0be469d29c9a5c5ceda5f4"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "4c73b2664d160750730ff898b3e77a62"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "95d56a850c295849f2e50c12ce603585"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "347676dc743acf2424bf671f4b257c09"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "63761ae97c01906b5d9fdb64c50a4308"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "235abdea0cc96dd816fcba75d137d17a"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "2f2e8e58967b94956589bc321adc3f78"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "97a2f2076763b7ed2b2e34dde04c6af4"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "4f3b65c69e0b05db504b0a0bc7440214"
  },
  {
    "url": "basis/design/index.html",
    "revision": "a779591744c52e60ccd714f0f75d6ab0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a3fa6bd77219090d518ce027a5ff7465"
  },
  {
    "url": "basis/os/index.html",
    "revision": "715aee976501b6fb7c84d080965673ea"
  },
  {
    "url": "book/index.html",
    "revision": "e1f39f43105fe3b2b37300f0cb2db5e0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "07b911bdedc46f4c6d7f4a3f981187df"
  },
  {
    "url": "categories/index.html",
    "revision": "9389a59575bde58aafabecb02a1d8212"
  },
  {
    "url": "figma/index.html",
    "revision": "c958e7d6cd35228caf070885593dbd21"
  },
  {
    "url": "flutter/index.html",
    "revision": "422b73673881d5b3b1251f396d780018"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d7fa3991c90b9c78e2691aec91d36cfa"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3416e05c686c7a7341b0d5235e59349e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "922bc26925886340fdbbde2e6cbab99b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8d00fd4ed3b850dc885d2fa0125d3a82"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d7dda6b52c4f9e35cd2aed11e62773c8"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5ce34b99c36483d8c8f1975a2a90f64d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "54bd5857b59197987858cc6c1d52d5da"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "bbda2290202e0ede90cf55b75a3a2f50"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5416dd90b164657afcd06ae296c04eb0"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "cd5ee202523750e6cd623b5b2882df16"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "ec12ce4a635745fb1b8c573eae9ff275"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "70ffc08775fdbef84301494a5820b96c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "9db935321a373f1698478d2c478eb98f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c757768cfbcee9e1f85e156d6d66d1c2"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "a325ab4279b42e9e1416fd1ce777e778"
  },
  {
    "url": "haskell/index.html",
    "revision": "b40c3265b9d63fec22718dccb7a88692"
  },
  {
    "url": "haskell/t1-install.html",
    "revision": "5d642d9b7fc38e46aafcba5e4b65f15b"
  },
  {
    "url": "haskell/t2-vscode.html",
    "revision": "6114c646bb64f9896a00979300fa70c1"
  },
  {
    "url": "haskell/t3-pktool.html",
    "revision": "92a2360581b134a0d94c604d5116b97d"
  },
  {
    "url": "index.html",
    "revision": "5551e4a90980ab1515308a942e2d247d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "7fa108163e9c4d77c5f47c0a7d7cede9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0e66293ae4a3109bfd3fc5cc082ad8fd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "30ddab09250ba83333301e62510165ff"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b9c90e2cf0c69fd3e30d4ad7d889cb2c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "303853fe64d9a7f29ffe668be21c9d67"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "3790dcb616abcc0fe9552c7548e34023"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e979daaf0994aad197c80ec48b4d6fee"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a81141f1b1a34a57267d8ff57c837ca1"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "8e8f24433d463de2e3dc268356710f7f"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "e3fba3cb54a1214a28c9b9ace1128f9c"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "9e535749b0b48e08e884bcb5783a1c14"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "60b594f6b6881b7ba5ded4a7bbbdc5c2"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "2581896fde24f84b73a2d7c1113875e0"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "8a758779eec3f483cd5123c2c1436028"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "a920bd69aa586cd731310541fb6d8b5d"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "e8873869e0e1ced42eef24aabd8912f8"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "16c4932428dfcffd4980c5a19feacdf4"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "f03af9d55d4c1c9197519d9e0db98abe"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "af9b51e211b07170e4a10de989f25299"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3800f0b4c72e9689d5b45c59444d45b7"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0dd801945e89be306d0fd619c47fb6ee"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "845fba0d993c2d6874063c95f0521e2e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f376605485fb6c23c8219d23ba443de5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6c3721ab3b8a388f51b9043aea5a48a1"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1ccf951d080355aef206d1f209d73021"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "75030e07ae8f8597377729a7c146ad98"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5a7759a6001ba7fdcf3c33d6133e13ad"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "5dbe72430eb20b611493bebe9b30b190"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d5d9babde87e68e736fef2453345a6e4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "91867a8cedbf0c4355491e2206cc0cb8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "064a8a8d33baa8a26accfb0d1e9e86fd"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c8cdb9be6b1dcb15f7efc2469876c845"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5d8c8983d046dfdf239e348ab04b25ab"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "475b418098ed5d3c5727a39098c58cc3"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "22de4f8bc921f16285400e3454433c79"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2f81ed402117906639e3ae6fb7e17de2"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3f08a8e237428c349c3f220973f4cf29"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "08bf7eca1343e6b718b88104f48ca587"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "12ac7e9a64e30af315bb03a86808850f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3ca83f966ee2ae071b284242928fc12f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "22f5764f45d83a04671eaa92b3f55680"
  },
  {
    "url": "tag/html/index.html",
    "revision": "16d80fc881a5cf942ae9e9ec17c825fb"
  },
  {
    "url": "tag/index.html",
    "revision": "2959465b54c586db6ddb4d96a21c980b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "337183dce0e806b047098f4902896924"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "bf946358ebc09f5c3372fb299fad92e7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a5d00fad31215d86ebc737810da1af1f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ff533f5c8294dbda984e38faee857b46"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "fb143acb4eea0e2a0663d2cd5cfd4dc0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0eef3025dd02abcfd92459fc03ef8a76"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "ff13ae69b0ba6e988cb876d618e9c8d6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "bdd971e755356a545dce590f64b4a570"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6dfd589a7c03c31e9f496e70d829600e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "1162f816b48cf5794af430672d8df036"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d1620206e19849eb0d405a39045dd5b0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e2c040481fa58355329c12df4909a879"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "2e7f4593e98c69d6154ec61604a23f8e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4a4f2b91425c205380c69ef676039be9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0dda2d4afbfbc2440232906cb1238323"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e97157e9c3fab433a7ca46347ebae01f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e931bc56ea84ff4a8b1c14ddd6bdb4d1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b65891479f210a41e26f2a9513637151"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fd5c4afa66ddc2c76c1663e7bafaf5ed"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2e45e5395286aae533cc3c69ea091852"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "ab4e8c597b956cc84e3437453532676e"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "ee4bd6c54fa60d42fc42e37569645b76"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "63933336a6bbfc22394f6eac1ed69aeb"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "37d48610dc1d564e06a59f3c1e884117"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9f3854e50446798f060e2b18dd98c535"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "6e796beab40366c07fe0e06c7c0c342d"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "6bf38984a1d828597863fd9064d1d2cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "89c35548075ecd8d1fd3d26fa9eb406a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "41037d9edbf1215905c7a043972cc2b1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2b3678d70f4b2843f6123290609961d9"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "246991fe62f0563edd5b6e7ad7ddd6bd"
  },
  {
    "url": "tools/html/index.html",
    "revision": "689f43d58915ea7ae99458d615270f09"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "325c7d0bc58f2acf8efc937eaa00eb17"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4a27bed2cc5162aa7007a7445b5bbff2"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "b5d08c09b357f6f6b5c75dbbb68efceb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f2b5b7ff776f6ffcc030fde99d8f544c"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "71f5cd8d0ab62968e0424cd5f204d960"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "77ff8ec1bf95619c2ebbdb8e5b9bb51b"
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
