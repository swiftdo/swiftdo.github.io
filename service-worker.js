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
    "revision": "c0a0ddd6e1a9aa2d5c57cc10851c8351"
  },
  {
    "url": "about/app/index.html",
    "revision": "9c9be927a5bd9436a51ce7c047f04bfe"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f022c065ba1e92cfee4131ea0859790a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3ad067d622491b10777d7ff80eaef375"
  },
  {
    "url": "about/index/index.html",
    "revision": "b04e706cc1e3ad7f2dfe0c30ce199f38"
  },
  {
    "url": "ai/index.html",
    "revision": "af0bc133d05064ed2a9709c6dcef54e7"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "92855d2caed146ec3efcb8e91e2ab21c"
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
    "url": "assets/js/100.c61fa3e1.js",
    "revision": "b22b05c0c2a5630b6ab78231441b0d04"
  },
  {
    "url": "assets/js/101.35b72509.js",
    "revision": "aa7074ac60cff55db982720a32966f5c"
  },
  {
    "url": "assets/js/102.d9ae4b22.js",
    "revision": "a8b41ff6790db3a60d8540bba5dfcd4e"
  },
  {
    "url": "assets/js/103.fd81d5db.js",
    "revision": "04a8d1bdc3cc278959f119caa9015f76"
  },
  {
    "url": "assets/js/104.719b783a.js",
    "revision": "fd8aa1860b435381fa7e9a1f6c722f76"
  },
  {
    "url": "assets/js/105.1b995840.js",
    "revision": "3774b7cf5b40bbdb7407effb02862de9"
  },
  {
    "url": "assets/js/106.05c75af9.js",
    "revision": "4f6dbaefd49157c30d30ea26490b6e8a"
  },
  {
    "url": "assets/js/107.89e9a1a0.js",
    "revision": "c7be6d7c910fc9493eace0c723605737"
  },
  {
    "url": "assets/js/108.fe4a438b.js",
    "revision": "e135b3d4832ea9c63e788c488e49f72e"
  },
  {
    "url": "assets/js/109.0f7ba893.js",
    "revision": "a39a94aa0886d5cf716a859f3d756474"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/110.97b05637.js",
    "revision": "9fe33b5b4a295acce3dcc682093c1f11"
  },
  {
    "url": "assets/js/111.d0b7d22a.js",
    "revision": "83d9c1ff67c5e821c74d2e745a67d96d"
  },
  {
    "url": "assets/js/112.6c5d0a74.js",
    "revision": "3931b6c0d380a34f1db7614c44f18cb0"
  },
  {
    "url": "assets/js/113.4d4dfd36.js",
    "revision": "7f2dce6e8341c480a3c22ec08434f5df"
  },
  {
    "url": "assets/js/114.5b599e16.js",
    "revision": "50300c1e50da777d6f3624850523cb85"
  },
  {
    "url": "assets/js/115.a8ae8439.js",
    "revision": "82ddf1f09aa65a59b4c0d173aa6db386"
  },
  {
    "url": "assets/js/116.efd6461f.js",
    "revision": "34bcd16deaaf85ff48772d2e237705aa"
  },
  {
    "url": "assets/js/117.a9ad1da7.js",
    "revision": "0ec611717daff7cc4883f215aab68d88"
  },
  {
    "url": "assets/js/118.dd506b0e.js",
    "revision": "56795b11d22276fd9fbc077a1f4a13a5"
  },
  {
    "url": "assets/js/119.34752aef.js",
    "revision": "0c74d28180d64d16074cb8a3fe86d91d"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/120.fe26e460.js",
    "revision": "d7f284ece1f4be565c5387d5e5859736"
  },
  {
    "url": "assets/js/121.6bd60353.js",
    "revision": "2db982c18f3ab5a4940ec47b87be1b9b"
  },
  {
    "url": "assets/js/122.3feeb4b7.js",
    "revision": "ff3a94500b6ddd947e12f3db3f89c0fc"
  },
  {
    "url": "assets/js/123.6a889d9f.js",
    "revision": "342e3e63d5690d8fd1edb02934877bac"
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
    "url": "assets/js/126.16e593bd.js",
    "revision": "aab5661104c328ce8224109743b9c044"
  },
  {
    "url": "assets/js/127.1ea6e147.js",
    "revision": "70bb3b80e4decc2fd81895f6cf548467"
  },
  {
    "url": "assets/js/128.8353ecfd.js",
    "revision": "52e294759a943bc2585ad86f61526a33"
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
    "url": "assets/js/59.f89968cf.js",
    "revision": "5c2f257d63f6484bb1806e90d19ad439"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.e0017f38.js",
    "revision": "43cc1041ff9bb61e572cc5ff4971e0ff"
  },
  {
    "url": "assets/js/61.844a186b.js",
    "revision": "b89952886c1df23824aab81a843902e9"
  },
  {
    "url": "assets/js/62.1ccdc91b.js",
    "revision": "3363aff368f126e927d64efe33d6d3ed"
  },
  {
    "url": "assets/js/63.79913602.js",
    "revision": "ddbf00737e802a45215c5cda0916fff4"
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
    "url": "assets/js/71.dedc4c5e.js",
    "revision": "45ce649afc778e7f7af2a7298e306b7a"
  },
  {
    "url": "assets/js/72.241dfff9.js",
    "revision": "3d6bdc15983f58f8e2a1c05241376c23"
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
    "url": "assets/js/81.20c70534.js",
    "revision": "12be9ede1bc20176b530335ab3d3bad8"
  },
  {
    "url": "assets/js/82.b9097b60.js",
    "revision": "891f3bf8567c07b766ad60941573de39"
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
    "url": "assets/js/85.c71a2ebf.js",
    "revision": "72ed05a1ba891fd33bdf75b3e484fec9"
  },
  {
    "url": "assets/js/86.02d35d20.js",
    "revision": "4b5355ea83433fe2106c04dbce84456a"
  },
  {
    "url": "assets/js/87.e75ade09.js",
    "revision": "0cb54d0020c3d57536d8a40c954777a9"
  },
  {
    "url": "assets/js/88.fcfe1fd3.js",
    "revision": "125ee284c47672b1c996776e4de78439"
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
    "url": "assets/js/90.97ee48f9.js",
    "revision": "16717146bbb71c2391845ae88a383977"
  },
  {
    "url": "assets/js/91.9a930116.js",
    "revision": "4617de3507b14fd9ed3b6039c29f45e3"
  },
  {
    "url": "assets/js/92.b470e3a0.js",
    "revision": "c5b7ac5b03df7eab1ec1ffddb7a87a6d"
  },
  {
    "url": "assets/js/93.f2049a5b.js",
    "revision": "420f18126ad42944ad62d7f27b70db55"
  },
  {
    "url": "assets/js/94.c6e4b503.js",
    "revision": "67d4202e6013348ea2a169cff1075a5d"
  },
  {
    "url": "assets/js/95.5c71d13a.js",
    "revision": "5bba699e5c1588c0ba147c6244ddd760"
  },
  {
    "url": "assets/js/96.348b6523.js",
    "revision": "ad0dcbd1e88b46140899c695c98575bf"
  },
  {
    "url": "assets/js/97.452271d0.js",
    "revision": "15ce6f4c51c347014584ea56b3e584a4"
  },
  {
    "url": "assets/js/98.071ba0bd.js",
    "revision": "a79f209e9236e121727a51ff0aebbfa9"
  },
  {
    "url": "assets/js/99.9eef64aa.js",
    "revision": "c8022df28f66d53f8b1d5048703f2c6d"
  },
  {
    "url": "assets/js/app.59e64499.js",
    "revision": "7f20669c84eaabcc8eaab8ef801a8cba"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "0b1180771bad6322d023bd6c7d33d3b9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b22865b75f742b5dd614166050dd5605"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "bc56da06d69065fbe580a4bb52d699bf"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "90e47c6e87d0becd7f2ec00ae518e4c5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1d5cd1c919e60edf2c6a547ab9481d0c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c194c79b1421eb0f3e69184ad725400b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "983343bda07798e86343beea3ab039b9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4e12f70180162ab5141f53465988860d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "cfd7c53b369c6ab026f75f9e290b8443"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ad338dc6ba43366108a64324118340f9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4be0c8499a876c99563c1c7ad2cfd758"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "3d5e25c9d58ed024312a9c116301ee47"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "4dc53282a9f0fbd8357d26611b25757d"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "a46d202e42fa1a8bb514517be8a8568f"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "a8fd41f1208457da6d9e79b1b5d95916"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "eb7e77e0c309fd69e9268ece80d79069"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "d41f2baa9171fa34db49d41567aa0161"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "8cbbab398eb306743a6ee32c23674bae"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "97c4bea1c8229eb287f74eb53ccf949c"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "cd5fdd720b63438a9958afdbbc9d849c"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "face3ed6ddc153ef3bb97c2161e39d5d"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "bbca34a1423e863cdab9b02f69e5383b"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "e8f63c6a9074f018a72c0fcb4fb6b125"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "2771d19d533f6d4f74d5ee160e4608aa"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "1b147bc9090bbd83ef2e0524673608a2"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "624a43a57845952da58ab3818f26b1e3"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "6a9d37e7fdc8d8bdb2f594c29dc2bec5"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "2bbc17f5980ba56d7926aef554366053"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "c1df6a0e941252fe5acef8fdde9351fd"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "be85bb3a109404f70e7ec0249e98c875"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "478603b3dc13a471935b5c35be31512b"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "b72540316f193d2f85e14a3065b09b84"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "4e1384353b931bd03ccb4e8d5d84adea"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "945eb015580df85235357b4b9db101d0"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "2c6198e3a9c4b0f0652e9cf1485c7e5f"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "8ecdea07a65d0b73b6715342b706f1f0"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "e6942d20d66d65d9e9025cc0d894a5d3"
  },
  {
    "url": "basis/design/index.html",
    "revision": "7d6a01c946d0b3953e7ca57e35a1ce1b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "fd39e94270fa28d48326ef0046ab1e02"
  },
  {
    "url": "basis/os/index.html",
    "revision": "9f1fbeb2041c533a011f28664dcc17ca"
  },
  {
    "url": "book/index.html",
    "revision": "610653ed550d275440a34b2666ba0a40"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "561f748f0abc072edbfe53dfe79958b0"
  },
  {
    "url": "categories/index.html",
    "revision": "c8269754c2d549684c19175e79ef8c9d"
  },
  {
    "url": "figma/index.html",
    "revision": "2123d0f1973ec040707d0ccfc48ae21a"
  },
  {
    "url": "flutter/index.html",
    "revision": "b7c69e944895eb95fc3e94295c1157e0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d90d1aee5ae0e27593b2a300739f97a8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "64813505e2f8d55e27c52d6e531abf60"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "2cc7ae57f340f560b8bc159e705c55d2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2430e2e168c9a5b5b69656ad82273a1f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "280b9bd3a4fb2c152823b5dbb84786ef"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6df60138dbef33873b4a981259f59607"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "9d791d4d7eb3d3557767f205bbc966d5"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e5d2531d50c09307bec9f3fe8d6e2232"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "3c53e49e1bc10ecd59541ddb69777283"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "82e45515193a352244f15bfb23931925"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "4fcf1d3b37504704d6f01cdd4e006b2b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b913715c96e86bf4f43f15709a00d68f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "61876e44d2b36496fb77189bc3baa44a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3f84b8885012e861fd245e41bd5aa0a9"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "871acd2a77148bb38e722d6edeff6d26"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "cb557531bfaa4243d6b6fc35e4aa1a3f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "8672b36ef84e0f3613287f5007eae7e1"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7582d51ff057fbc7e6f27500ddbcbd81"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9f9cc95947118d6391458607bbcce045"
  },
  {
    "url": "haskell/index.html",
    "revision": "915021c8040af3b8b84692a978de1c34"
  },
  {
    "url": "index.html",
    "revision": "5beea97bbd76ab94d20623d784a5a225"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "25c13a2459c85873fe40d47402eb1433"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2a1e96d84ce83ad50b9c43006aec402d"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "7c650723d67fcc3c677d389868093ff5"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "cf8ab37a92ba8c0f3a6e05c3e66ae6c4"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e04e4769180e899cf7123ab02eaefcec"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4b45cfc591d3ab9bf14d7550d26784fc"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "4f0efafaba0d3df2ff2c99eab4e9fa64"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "bf06cf3b76f1d9ea59611daa9f9da2c5"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "53657b0e7b7f2aa07be439b5542894a6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "bc42506e7100878b9f4b08000accb107"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "16e4b0e8e8f1ad90337d09207891143e"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "ed568f2bfb01ab56cb73dd40635cc280"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "851730fb4eb8fc0cae09c757a250d4e0"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "b69893ac2288c52db5cff9cceb3cb4bf"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "80700ad4ce35fd3a2d1dd019a7b3a3ec"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "e73fc44a513028e2a7c851d99124fd71"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "67dad0c24b16e9a32c5e4362d4dd4c1e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "1a00e958ce2a0ee76b2c8d6d9d0239ed"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "eee36a34f2794a79d703a13253291088"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "1ebf24412a11ef793afc189a6bdaa841"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "b7dd2814d10c28579ae830a5ea8aa3af"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c1e9d77101314e4f62c9fc000edc415e"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b30d72fc8323ad1bc88d61e803f4f910"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "50155ee273c73e7b9c44463722b36b46"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "00dfdc86ac03201f913a02dd49a6d9f0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a7e65e751e7ae059bee010b7984b6a0c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7d3adc901baafc4171485c3fcac05192"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a489cd9982b9fc044ecb58ca69ae56f5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "af9e56fb1a272e464efc4525884fca2b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d73582a2bf8c279492928ab6ae242322"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ffb61c445f1881ecf84af0ae99f27461"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "dcfd552b0e06729ec2888d7eb3565856"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "03234fcbb2f8d888c0172c6bcc6c58d0"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "3953879e115693f188d2bff9a1feb82d"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "dd09f7185df0498b8c7d7b9dd7ece750"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1b26fd3c5e2509d179fad942d33a29b7"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "418d2dc1ca2851e0d104c60296d5322b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ac89f732715a04d4d14e7f2ac7bca91c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "68564c82b2a63a01c15fd9ae38e9c4df"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "9707f67177bac15d2963a08b5abfcb33"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "7ea683161611876f756c7a2714ceb657"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "aa6a1df81b7da696cb4ee38547f34193"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4383aa7b8cb40c8a8fccdcea89e9ecc2"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3dbca44f0e0769a5555cf4840cde0008"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3e237a7b49da37e2784d326b0067c536"
  },
  {
    "url": "tag/index.html",
    "revision": "5026540abc15cd686e159aa8160c003f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fe3fa5afc3bb27be6af56221602bba6d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "46393641587f3aedee51cdbd4297591f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f68d5cc88ca23b838b8dc0eea32a0261"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "06baa4ab37ec3ad4b69596df6ad42bd7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "089c846856f417be9759e0566e118735"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2ff99ad1101a801abebd051c6723ec86"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "7b723ad06ceae3d4670bb85e7893cd77"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "70dbdbec826d8c6636c25b849d457fd1"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c6f851575f2963e9c705b1ea4dc6d537"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0b8ee846923eb1bdf1a9e7968205cbd6"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "afae14f78d69b7cd1cb0265ed6ae977a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b44e473ce7045cbe4c1446ac4c287e59"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1453bf4c724856b0f17d9346e8d90de8"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6a444a127e8b5ef5713e5cec0e311c47"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4734854846c453b2ca1109f5841602d2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "99e2f996a3dacdaa3aae84107a66df72"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4ea0ff40da4cad5958b393f63cd37434"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5a1616e6ae8aacd5262678527777bf45"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d53745e4017e04f99df57ba409c19be3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a3350c9b816d0840887a4324c5c5d07d"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6b48f9df8daefc23d541cd648f851fde"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "5d752d14af69cb299aa669daf27b7912"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "7093257cf358cc537e612837e5834293"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "43e0e051bb0788a198b62543da869db1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "249eeba13919c1bb54d56f8e57d9c849"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "cf08e6e4ab4288b55e1158413eba7891"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "08a05a537794774cc17ac868f0ed8c93"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5c660584b1a9ededa0ce19555ff3d50b"
  },
  {
    "url": "timeline/index.html",
    "revision": "033d95b706203fbaf8f5b0288d4b21e9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cb1dc79156eec9ca217c51baef2edae4"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2449b2994e0e0d3c6f4a04f176d430ff"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e4ef56cd18367af6ee12070f8e06d700"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d667b4185477ace2874bfcfea77ce15d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d78da0b59f38bc22fd6ad847585c2772"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "98f38114ba4aa17af55776a96022238e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1a656a9d14e271f8d6f00453b9b396d7"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "2ae841043178dc4c63fee2968b8bfe38"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "0cdc092a9f1e9854cea3859278af74d9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1216895f751160de25a6ce93cd3b043d"
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
