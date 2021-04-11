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
    "revision": "7fb5e0e12155533ae366f7b24ba63248"
  },
  {
    "url": "about/app/index.html",
    "revision": "d71d9438af1259ac25dda9bb154ac9b3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2955b9f687f169843460a0682a06f1bf"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a4c4c0620bee4c14895d2c6b1d60f71b"
  },
  {
    "url": "about/index/index.html",
    "revision": "e2541fd272b8816abbd4ef8902e12306"
  },
  {
    "url": "ai/index.html",
    "revision": "d44cd0bb76773501d98a88c69f903c56"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "480690d29151162e7a874942e0f2ab26"
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
    "url": "assets/js/100.8651cf52.js",
    "revision": "054aac63ffee30de1ef678543d2f7e79"
  },
  {
    "url": "assets/js/101.4d455ae4.js",
    "revision": "7bf5a137c14b054802e4c72cd38d9ec9"
  },
  {
    "url": "assets/js/102.ffa779a5.js",
    "revision": "343cf69ac1c21f1673df9a185b97b377"
  },
  {
    "url": "assets/js/103.268e6bfd.js",
    "revision": "7520ca83bc0ab12f30ea903b900c7a23"
  },
  {
    "url": "assets/js/104.c92abf4b.js",
    "revision": "283f057ef3f313b0d99d396ee8f9f4fc"
  },
  {
    "url": "assets/js/105.b4ab352b.js",
    "revision": "b744f31730787a283042998381415874"
  },
  {
    "url": "assets/js/106.670a318e.js",
    "revision": "3933340f740fc47205f38139e5135a79"
  },
  {
    "url": "assets/js/107.b9b2246d.js",
    "revision": "14cb2fd5bbcbff3aa85ce447309d8db7"
  },
  {
    "url": "assets/js/108.6ede173d.js",
    "revision": "597d896685fc99207dcbf998bf52d730"
  },
  {
    "url": "assets/js/109.5bcab3ec.js",
    "revision": "dfba8750e88bc5a208ae57e7d714aa20"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.aa3dd6f4.js",
    "revision": "9c20e7caa794cd2e50f9a1b8499a5e5c"
  },
  {
    "url": "assets/js/111.8a48a404.js",
    "revision": "7c77f16c5d95f43e698f3bc91ad95ce1"
  },
  {
    "url": "assets/js/112.4ae98495.js",
    "revision": "1855c06c8d5bd74a90423bc751f4c83a"
  },
  {
    "url": "assets/js/113.4ef9700f.js",
    "revision": "439d2e9dcdf2e2fdfd0762a9b0f57f20"
  },
  {
    "url": "assets/js/114.81701e91.js",
    "revision": "83218d4ac8ac64356af4fc5fee6e688f"
  },
  {
    "url": "assets/js/115.63de4271.js",
    "revision": "28740da829209c09f1b4c6ee22f8dbf0"
  },
  {
    "url": "assets/js/116.a1e4245f.js",
    "revision": "d42d1dfeaacf68cf4b4de7e4365ed63e"
  },
  {
    "url": "assets/js/117.400a7ef1.js",
    "revision": "041cb806f6e07f232622417254a705d5"
  },
  {
    "url": "assets/js/118.863bf6b7.js",
    "revision": "6e575f1c05c19e0ec0983a7f6e5f15c6"
  },
  {
    "url": "assets/js/119.65ddc74b.js",
    "revision": "10ba06c9be84caa39c9b1d7c9be07b82"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.124e91ba.js",
    "revision": "71a3f27f357eb340e3d1aa6cfc2b8b92"
  },
  {
    "url": "assets/js/121.f90389e9.js",
    "revision": "50c5ad962223480859b2596c662beb52"
  },
  {
    "url": "assets/js/122.2fa252b7.js",
    "revision": "a1a4c87b45519960d7d51342f831bff1"
  },
  {
    "url": "assets/js/123.85ffd70f.js",
    "revision": "5307c445a53f32056a483d6261eb4cf6"
  },
  {
    "url": "assets/js/124.90992679.js",
    "revision": "734dbadfff68789b70914af7a32ca9db"
  },
  {
    "url": "assets/js/125.bfca01f1.js",
    "revision": "d0f75749d0923f05c6a061e12b90b485"
  },
  {
    "url": "assets/js/126.2e397b4d.js",
    "revision": "965e8ca54658c63378e3c4a356f1c98d"
  },
  {
    "url": "assets/js/127.848a1109.js",
    "revision": "b58f4ec0b83daa9f3f557d7688ecadea"
  },
  {
    "url": "assets/js/128.d3fb1e4b.js",
    "revision": "81cb43878caf222e511d015a0cda129f"
  },
  {
    "url": "assets/js/129.392f144c.js",
    "revision": "eb8fd7bed38bdc4122658870377e3d61"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.98707d93.js",
    "revision": "f851e1eafa6425e0a0526db522c3664b"
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
    "url": "assets/js/58.988a96c4.js",
    "revision": "5d8e36bed6d9e91c18b3c974d63de87e"
  },
  {
    "url": "assets/js/59.0e4a5646.js",
    "revision": "0cdba4858dd8bb7258a7b4df32c63c77"
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
    "url": "assets/js/85.cb21e218.js",
    "revision": "dc0fb58a5ddc77efb75a65c454ed7b12"
  },
  {
    "url": "assets/js/86.8d307f71.js",
    "revision": "74aaa54a0d94942dbf4a850359d90165"
  },
  {
    "url": "assets/js/87.96453906.js",
    "revision": "d063262ce66854f1546e5db2e1289a22"
  },
  {
    "url": "assets/js/88.62896347.js",
    "revision": "fdeda1d7a4c431e972d81736d463b634"
  },
  {
    "url": "assets/js/89.82cb7da6.js",
    "revision": "aca80f607dbaf4d20a7d09b97a100c52"
  },
  {
    "url": "assets/js/9.6219a820.js",
    "revision": "bd965b0220467ddaf5c66be8189accd7"
  },
  {
    "url": "assets/js/90.a9429dd4.js",
    "revision": "3e1d8463f6c17d918e6ee9a88097959e"
  },
  {
    "url": "assets/js/91.8651e684.js",
    "revision": "92282fc14f27eeef5c8e1e270f40d772"
  },
  {
    "url": "assets/js/92.8cb1b2b7.js",
    "revision": "270ae52a5108078f820ab527009397bf"
  },
  {
    "url": "assets/js/93.93656044.js",
    "revision": "d353794f8169e8627ff8c7e1a1c37308"
  },
  {
    "url": "assets/js/94.2d9865ad.js",
    "revision": "bde507c2e42b4adc35bd1fdcb2cd07b9"
  },
  {
    "url": "assets/js/95.311e3c47.js",
    "revision": "4a00b87dcf55eb645ca9106f5dce36f9"
  },
  {
    "url": "assets/js/96.bc80bb34.js",
    "revision": "4c52e68026a4447146513de7cb902ca9"
  },
  {
    "url": "assets/js/97.b2fa5ee1.js",
    "revision": "b72d070064128f2685d9395a740a92f6"
  },
  {
    "url": "assets/js/98.cb90db09.js",
    "revision": "3dafbf095abd953040e415ffea5ff854"
  },
  {
    "url": "assets/js/99.0b6c0fb8.js",
    "revision": "43fb4c20b330ae7c41880a05bf68f04e"
  },
  {
    "url": "assets/js/app.bec5ff96.js",
    "revision": "f4e3096b1c14124ef3a1629f527092c8"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c6cbcdbb082367d5a77e5b2a9c8930f3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "810d4f5765721c7fb5aef64c40448d7b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d7a330aa4566f30127b68742433b6851"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5c2dc8acabe752950f36dc2e8a9b5fcf"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3a785517d986f7a9cf1b1cadde8baecc"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a507ba8e1789ad5f719c6e8c3010a5b2"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ae70e627444fcfae644a736c4d81a4a7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a00a8220095e1981e255208b4d5e6f19"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ebcefef4ee2ca34e13445dd3dae26deb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "84a75f49fcd3bb98b22d4ce918678654"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4bd9645493f6326b675e79a747169fce"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "d8fcf1578b75c05c1a0b36fc2d81887e"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "9b7e6e3fa980ad53b0afac7c985b601a"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "f671f534849e163a6c52258b45ec4181"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "a818eda3bf6c2f0ad79b665eb8b7dc7a"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "d20020d0393712f15a7732b789352e43"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "31d924aaeb8f2ae0928e0d8eb1855221"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "6cf942a55853c2971c7664f4cdfb7796"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "dc659bffea97b33929f5ddf5f9be03a1"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "2154ed8fe4178fb9305b85d76f2dbfa9"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "987a89f547938fafc2fd7e6468eb6fb5"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "150539a0006fc8461d68f295f8899a61"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "170833bae4af501ad927fe776f514c94"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "c74098601c7114e4fed9ae5901425588"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "eb8e8c90e986167f5ed62585b7b4ef1b"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "466ab050ec386b04ec45793289e08554"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "c1d047d47261bb24cebf6217555d122c"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "fe84281661d910426af314fefe455137"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "63d4c3ff13b386c6a1a686b190d11600"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "f6a1f168048b4ac42812ff72d0e72d0f"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "889fec07bc4d01a0691b94df747c67b6"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "3e6424bc8d9d5c61cd2c198e71f30ddb"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "cd026112814ed845ba19d62be5f447c1"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "18d8969a4803455b1e45d5f9b6f968a5"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "8cf93f6d25c6965a8616838095e58a29"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "d3f40cf9eb6355e9d145b83fde79fde9"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "4e021c2a6df8032ff65843c9c74ec0f4"
  },
  {
    "url": "basis/design/index.html",
    "revision": "e77db0b52b58d7b86d7b23478cf14345"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f59fd789401bb41d1a2f6ed43b9f9f21"
  },
  {
    "url": "basis/os/index.html",
    "revision": "9eca5c99031007f2e0b88cb103d016ae"
  },
  {
    "url": "book/index.html",
    "revision": "f758a6126b5330bfb9d561032fd14a7c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5d26e5cb11aeb35b99bf2cf3c1228f6c"
  },
  {
    "url": "categories/index.html",
    "revision": "af2ef7bd3870a5a61c846c2fc6056d35"
  },
  {
    "url": "figma/index.html",
    "revision": "694e9f3243a975b10ee2aea8a9322f05"
  },
  {
    "url": "flutter/index.html",
    "revision": "f15de29e344e8467dea06619c9d17f21"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3b4804bd911e3a4f1b00a405ae2336fb"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c195b5e5d8e47f952c00d7a2d9059085"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "cc34b013f4ca853cbb72d19ded33bf4d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ed98447f013c6b6b811b15af360d3bbb"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fcd916497650e36c32dc3ddaf3503fea"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7a2ca491a44f23b70aa17752ece212b2"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "08e96d7d1d8ed910acea03eca1a1d7e2"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1d07b562d394f41fb1fed9ce21cdb673"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "3592420ee7b678c91cba0edc8c0469ac"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6e206f8f74ff6b02563a6555b246154a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6758782bc5c8d6f3fc38ba852ef9d46b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c31939547f3cb4aece71adcb7100c180"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "3fd520afe17435ac1bc025ecaf2bce7e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3b3d2cea6f5d00cc39bf0fb0e8310024"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "da3f7641eab1ad83ebdc329c121053b9"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "d3408f015ac35f5f11a2339324060b48"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a586db9ccd9fcf4c7447d92743e911a5"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "92b0c25c878b9b7362d03a25eb3dad42"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4f69073fb324169ad44bea7dc56b6969"
  },
  {
    "url": "haskell/index.html",
    "revision": "4b9359ef25d2b08ad30cda4f008d53df"
  },
  {
    "url": "index.html",
    "revision": "364344cc1883d1d18d18dafe19986395"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bfe6e5455bfb601ff204c0f8917832c9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "774dcb3baf1bf0697535b935b4c53376"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "9181619c104af81161e729fd90d529e3"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "c612f8688b3d9fdba5216aaf6ee4fb85"
  },
  {
    "url": "swift/fp/t3-length.html",
    "revision": "cbe584b1321fd30e3577e76739d8df6d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "96f71fe74577b64ab84751f6566530a2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "da15192b828a543a6913ce758c3cf3d7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "174a9da571b074de4799cc64c49200db"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "aa2f489d88b4fed4ca096ba9f144ba09"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "786b9c753c83657b6819ebfc45ec4efb"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "884b96463d6b1445799f8ef8ac2caf5e"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "42017f1677ba59a46d8f28e88f0eff81"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "efedea5051a0a992a7e65e87d55e32be"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ef52f13ad8d8442249b6273ddac066b4"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "301472aa28cd8ece70cb243e1c3e9eef"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "763f6dfa4f14faecee891de8272b398e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "bc9b79bf14bd9dcc7b6acb94a617bbc9"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3541abf368f760b87145931ca80731c2"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "bcec3a9c4d615d01d9e554d3bb946d58"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "f6cfd7c36dd18e5d6f8974d00dc8e813"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "138967be916c610edcf2ccfdb283bfbd"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d721838884a9a50c4764f8eda1934d0a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6b30f9759f9efe922dd2c15714e90f01"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7f86fad90bc94801ffcae968bca1ea70"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "798b1e3a119996ef74f619315be502d0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "14c5703d3b3f496b284f2c374f313610"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1ea4101203c2574e1a2c9cfeecf7f0fb"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e4b1a91c51728bdef71ad1b2c37268cd"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2569ddeaec8a6facaec5eb6631030704"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "97627ac8f45ff7b4fd10dc5935c398c3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bc89ec83b96d78f02361a6fb7a1a58d1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "20ced42a3987ab4634ce3f0cd87502d1"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "139354001efda0d7c76f2b08b35bb034"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f82247406a7633618f81ce7307ccc9ea"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "096d7df660c90cb5b74c0e1c3f9bcb49"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c5022e411c60ba5e7adf46da69c91bcd"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "533a3505bd2d60b484850ad864fc71b9"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "95be42a425d6e62d18b11552b303a8b4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d7e28a90493e2aeb275b8b45849d69ae"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "953bb341fa1a49f5fca0329db2950367"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b8e3612b84d71507eb6deb02dfc9b35b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1302c2c62ed6e58f1f315fb6d332f350"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5c96ac1652ad3db88c9027b7d6a761d7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "23aba2f162cfebe790ab69d4d0c08f1c"
  },
  {
    "url": "tag/index.html",
    "revision": "869dcdb069ffd56cf0439779ca16a618"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "11331f59598e4c6f0c2a8069da78e363"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f9f77e1b7ee67f3d34c683fc6ffe6181"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "eb258074a8b18cef4530451219e7662c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5c69c176d86776c4c822f11a97cda4bf"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6ee0448a978ff4e1172bcdb14c521686"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4586413bf4118e1063aaaf433c4f9568"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "8c66cdab4221c0c8e9e3373c09d4362e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "db37f3d71d755f8e5c201c2cc5cc2c3a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fcedaa2081c23e45959eb64206d1feaa"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b8f4e09537e46708e180e3f3dc8eab9d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "259933a28e292ed965d5efe2a6f3c295"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "25da831043fd1c8df717e7d565353af4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "48daac76d4e185514098cfb00e08760b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "76fc66fbfe54bc4ba6126424afa9f5ad"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2f49f647540a12bfafd2d171ec86cc7a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1a8b8224d16d1d20cfecf36d164f2a52"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "345d3a7265145d9e9036e82b88cf0670"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b0ec9e5488eb6d73bf9f01ce13800d44"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e8f5e78175d0c5d994dfd93b436aa38d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "08cb4f4e6ed92f27502b8b33d0e4288a"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "62d63b4610e5ab75fa6dd5b00ce001cd"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "54dc0283a13f6b692fce12953d18bae5"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "1d340060f1bbea056c03568eb5cf067b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9d7c22b3bf5d2f53463bc2655618f4e3"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7a09a4b1be8b0089ef5c1ace036c0ce1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5f9ad9156d9bc8ea114fb08b5d664a87"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "76ed63ca448029fb35eda546a47a1543"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "52ed39b2075b9063213f392434295856"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c16f8093f9fba52aa6e09c24b96ee28"
  },
  {
    "url": "tools/git/index.html",
    "revision": "27fe42fdb3c19a5acef338772ab6d23f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a1cb29df7163b82eaaee932be959bf97"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5bde2fd85ad754d8b6681f2cbd4d8b22"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c08200b65dd8b99383176d598760088f"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3d2814a6d9c14732b7428e3e46cbccc1"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9d3aa28ee71c303a1a7cdd4cdaefcbde"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a0b81aa26dc1c981c6b76aad47d6aece"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a5b45914af318a2e560258302c85f444"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4683dd94370eb8d278f1ec5333c1c9c9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "df1c047d759285a57ed4c2ca527dcf81"
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
