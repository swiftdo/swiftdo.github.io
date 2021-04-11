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
    "revision": "d0a4ce013e504cfd71a3194f07abd574"
  },
  {
    "url": "about/app/index.html",
    "revision": "ef8aafafce74052ea3a5124dc90efbf6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2dc5940710a45b0a0ba9ba814ba29706"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "aab61480309c9dbbf63c5b4c33f0b742"
  },
  {
    "url": "about/index/index.html",
    "revision": "696b1303e4078fae6dfb8ce608164cb2"
  },
  {
    "url": "ai/index.html",
    "revision": "296643361ae475ad5f4d58491b7c062a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "3212648b46425690d87b54f72556e9b3"
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
    "url": "assets/js/106.743c8cb6.js",
    "revision": "bdae264d91d04a5fa854a54b91dd92a0"
  },
  {
    "url": "assets/js/107.09f7f8f7.js",
    "revision": "c504c07ee7ad3c35548179601165ddab"
  },
  {
    "url": "assets/js/108.a1be1d66.js",
    "revision": "77801d868708ef24633d95bdce55a397"
  },
  {
    "url": "assets/js/109.0f44b902.js",
    "revision": "7c17af8a6a34a0e5e52feddefbae3289"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.031e2c3c.js",
    "revision": "29132c6d1956ca893d59b46d467675c8"
  },
  {
    "url": "assets/js/111.8a48a404.js",
    "revision": "7c77f16c5d95f43e698f3bc91ad95ce1"
  },
  {
    "url": "assets/js/112.73e203bc.js",
    "revision": "a47b07e66ebb8019c317162469278f96"
  },
  {
    "url": "assets/js/113.b43cf799.js",
    "revision": "a91a04b6e345e7a72e78f9e32cc787ef"
  },
  {
    "url": "assets/js/114.fb5663d7.js",
    "revision": "e60b295ce63a39359c6f380e63a2ba7e"
  },
  {
    "url": "assets/js/115.f6410be9.js",
    "revision": "ad40f0dd38bc1493553b4f3f345744b8"
  },
  {
    "url": "assets/js/116.144ff5a4.js",
    "revision": "fdb3b8f30042129e80b4eac6b26523cc"
  },
  {
    "url": "assets/js/117.bbc9f7cf.js",
    "revision": "232d27870b5f08c121d345138088a2d1"
  },
  {
    "url": "assets/js/118.801be092.js",
    "revision": "05f9c9ffd19a88fe716fc71bcd314f08"
  },
  {
    "url": "assets/js/119.d73cec13.js",
    "revision": "c961dc77020f5ca4be0383adfad0ecbd"
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
    "url": "assets/js/122.fed1c06c.js",
    "revision": "652652002a82f764d3176b12d872acac"
  },
  {
    "url": "assets/js/123.a2e5eeda.js",
    "revision": "2ee3a19f13746f04202e9b9b8a343cae"
  },
  {
    "url": "assets/js/124.8382468f.js",
    "revision": "b0dc70f645d89279900d7a7cd23ee6d1"
  },
  {
    "url": "assets/js/125.e382e9ed.js",
    "revision": "df93594b291e4fc3f8dbcdf0f0a8596c"
  },
  {
    "url": "assets/js/126.2e397b4d.js",
    "revision": "965e8ca54658c63378e3c4a356f1c98d"
  },
  {
    "url": "assets/js/127.def40397.js",
    "revision": "2e4e215418f397eb6a8effa17cdfd7c4"
  },
  {
    "url": "assets/js/128.6f05325d.js",
    "revision": "0dcb8616a12039082ab99dc0581e04b8"
  },
  {
    "url": "assets/js/129.53b92b0a.js",
    "revision": "afec4dd563f32bf41c09c612566ffb2a"
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
    "url": "assets/js/18.2db5cef7.js",
    "revision": "11f3fe6e3982152fc00629f09a49bfaf"
  },
  {
    "url": "assets/js/19.42bc2529.js",
    "revision": "5f5fb96bd8d3165c569c031b28afb8ea"
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
    "url": "assets/js/22.3060ba4c.js",
    "revision": "a049370c09fc1b21dd94aac4e31754a2"
  },
  {
    "url": "assets/js/23.aad90c7e.js",
    "revision": "e53f4a41cf870518af76c1ae3072305c"
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
    "url": "assets/js/57.71678e6e.js",
    "revision": "e674057b0787e7e80b080365db8e3e34"
  },
  {
    "url": "assets/js/58.23c7d219.js",
    "revision": "86e5fc95ccb539fbfa176036d56cc385"
  },
  {
    "url": "assets/js/59.981fe090.js",
    "revision": "a1f5bc603f6adf5bb40f1748f5ceff48"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.9862a6a2.js",
    "revision": "ec5692fead3d311ecce49a80f5dfbb72"
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
    "url": "assets/js/69.e8986dfa.js",
    "revision": "604583c969ff857ed3cab83ff54c4b4f"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.0ec5e0d2.js",
    "revision": "c69883d0303db082231aa29d14ccc168"
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
    "url": "assets/js/86.8d307f71.js",
    "revision": "74aaa54a0d94942dbf4a850359d90165"
  },
  {
    "url": "assets/js/87.96453906.js",
    "revision": "d063262ce66854f1546e5db2e1289a22"
  },
  {
    "url": "assets/js/88.866c50c3.js",
    "revision": "451b3bba2521ea3c14a895ab6168fff3"
  },
  {
    "url": "assets/js/89.fd6b9b5d.js",
    "revision": "d7f37987bdc00592c70189020482b9c3"
  },
  {
    "url": "assets/js/9.6219a820.js",
    "revision": "bd965b0220467ddaf5c66be8189accd7"
  },
  {
    "url": "assets/js/90.be79c570.js",
    "revision": "27538e273719ca9b5e836dcb83c5f2a8"
  },
  {
    "url": "assets/js/91.56a908e2.js",
    "revision": "ae404737baa611adf8fce728ad8ade12"
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
    "url": "assets/js/94.c85335e6.js",
    "revision": "47d041a6a5582a5933c23df77547b2c9"
  },
  {
    "url": "assets/js/95.4684afd2.js",
    "revision": "74851b12813ccf646c9825b6ece1ffdc"
  },
  {
    "url": "assets/js/96.2cee174f.js",
    "revision": "578a2762f8030eb54b6dec7e44af520b"
  },
  {
    "url": "assets/js/97.6142261a.js",
    "revision": "7b6ac46a9a598ded8a55eb4ea121f499"
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
    "url": "assets/js/app.5db1025c.js",
    "revision": "b331e9f19770850d952fdbe4a216bb17"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "29c9d937deb6ee1a43cc8896fc2cb93d"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "2185c159154a3ee58be35f595eb95600"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7b601bb03de47c8366915fdaff4a977c"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f8d2755d73c3c989b40b92c49d3bd14d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e9b0edc0faf4c6cc0086a71cafe34c05"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3810c20700265f6fb6dd6787b0f5d601"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9170423b2d27ad665ffb6af278c052c5"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "fcc7576b5486276e99966abd7519e599"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f201031c329174d8f7c1b2fe9ac22c0d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "8ea275134926055cac55feadc08aabad"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0a276092113e2e1cab2fa6b25aec8cce"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "cc261c2fcb30a2b56ec18eadc118d294"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "1903e52a43757edfc4d07a717e800472"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "7fe1593c5add7de02ba8c84d228ad3b9"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "b889ba9314b4eda95eb0e92d64565418"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "73e0ae76ba6d1e6ae7d8a9d217933844"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "d153853722f1d574eca2aff44e5575cb"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "7334b93927b3c701d51c3b3bba932ea7"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "151f25aafd469206a28e3e110bd4c977"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "bc3bf69a07a7b43202a75fc3713858f6"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "61881834cf540614499a76125039caed"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "bc5e1d8e602c45f1556837d6e867c1af"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "38f69dfb864ee6caaaae54e7da59b3ff"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "04fd7ec4d60656ded4dd80da87493d42"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "83b2cd7b5c869a11418f8111ac856aae"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "e006fc11469d912b7ad709f6c198e912"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "f673112a12aee0d135cd75cc940c6344"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "b1285b9a173e0e3fe295c98a44d6d31b"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "bfdc3e794433919a49e6cae4bec50781"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "cafc68daf84bf6f6b20aa4393de739bc"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "c3d568778418bf84a608a689a5344424"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "fdf29c7cf64a14377b7ca04e6ef0e89f"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "c42ba9c419429b2bf2eeffc8e43181da"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "6f63aac774ebaec52c9d8dc0200859aa"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "5f9b817d6aafa4f77d5f28249f90dfd3"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "af9f252a67b1ee404e5a89a2f5749feb"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "de874b85a6fc90ec36f7c8ec2832c881"
  },
  {
    "url": "basis/design/index.html",
    "revision": "694b35423a137236297135675a5eb838"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b8ead0a7c2add8f5a215e5db4b73f00b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "49e213be460b8ca6980467ca48e4bed7"
  },
  {
    "url": "book/index.html",
    "revision": "3bc07859a72075499d8f6ba2e0957c1b"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d174a18cd12bfa11a1ffd309b1bcb792"
  },
  {
    "url": "categories/index.html",
    "revision": "7cb6fdc8f715bd75f8ff68a77240895a"
  },
  {
    "url": "figma/index.html",
    "revision": "494a016867b966ce3df2bf2243d4c12d"
  },
  {
    "url": "flutter/index.html",
    "revision": "832835d4b1fbdaf50f38840d5677baf1"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "341fa338bc86fe4e7b37fe445cf6b3f1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "4a91d65fb9ef24a4fed5f209a3aeda3e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "bd20fc073ac25337c4ae9a1173989289"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "54d064a7234e84b66b48505919f72b19"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8f09c3a70668eefcb9286212d5b70f40"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "1e5de9bcc19c66c457c4bf84b3ff7a4c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c0cbcad60238ff6d0c7aa5f1b2b56d28"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b43f7d858a75f158a23a58096f03a0d9"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a8e0c293d0dade3025bf5143fdc7089b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3990ec53304326823e2f8bed3c8c1a2f"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2edb84cbb299339d4b39587c57540020"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8702a229597b1ca2bff2fdd87e418f2e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "dd5389ef99db56b3b30b78e1e4dea36a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "391dc41a82c7255027b8182bc4a0b021"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8661690cbed5108900858cb9baf6416e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "df9ddc1584a1503db6ac59b40d4f97ae"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "385a7d414922c178b5af7a86ceed590b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "79b217c9c2db1db03cb650150bde502c"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9e6ee8a980522d7f2d3a5ace1a065cfe"
  },
  {
    "url": "haskell/index.html",
    "revision": "b4f43d235fed3297edd35b034c1d06b0"
  },
  {
    "url": "index.html",
    "revision": "0a292cb67f2a8d1026eb386f936f3d91"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "6dbdc84315b9b80ff0fef5a95f2a0617"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d7350543b075e2e81242e1a01e62e4f8"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "d7081c2a32f4d761584d3a01695b2481"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e9593edf577635104117eb7496c4ec92"
  },
  {
    "url": "swift/fp/t3-length.html",
    "revision": "73967a0ef2c83a79f6d8b86f84b59fc6"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5c035de8db5b978862e8d7b33c7bf20e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1a2b4d6abc7373897d546f2123b2a738"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d61ce330b20d0a98b86cf2b5739c7611"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "781f104b1787b399d2e131ef2a858461"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f5e80b94e230f61974d121d11e3377e3"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "45119af1b91e888d8fe8ef20136b4eec"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "92252c452fec16adcc79fba26224a835"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "5c13496c2f5bf927c593e2d448d81567"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "693acdb59591ce7ff19ea8f587fc8cd8"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "de0cce2e26aed6cc466e3830762f6fa4"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "a2890b977cefa7c8bc9fb2c5dfe220e5"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "5f6a572f1e49568185ca713120d5d741"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "0c432fe0ca501542e061750088e1f92c"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "2d17505fe49e3c5334d8980bb659eec9"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "8388e180455c3d87106c0c517681ba03"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "daa96232ab0867faf2f5df9588f881e5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d3399103af302dc2227b43901e383a76"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b3d422a073e9faa7bfef92e890320a97"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f6fd063cb2174815ed7807843abc26fc"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "14e39ae65630daf093a229b8d63b1669"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0dd01d1c35a1c391dcec454ae244836c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b506e20fa0fee9ae7f6720b68e8f3642"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e29ac4a3e255ece1e0df4c83b7f57d64"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "394d937bbcfcdf0aa95fd8ad7f5bac5e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7d05de64d587e90fa77cdd4ea84012fc"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9ce10bf8f16c6d742dc36d1e2598de5a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "bc2b3f9cab9ae99bc7d9aad6ff14cea1"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "89020458ab6a826f1758508cfe6200bc"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9d7ad8a7a77e302215d470270f66058b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ba0f15eaea758b445090dfb4b7a523ac"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "90f6143a50ff4a0f3f655d3f9f5d2c48"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7eb89cbeba231239c00e8d9464339a7f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "93c7f8880ed9fee5d40a13382e84801f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d85f23a5f5d667422ae84fcb0a3f0353"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "809c8082443ecf242c772e8ccd777fb5"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "03c3d8f3f320740386a7a88e29d78648"
  },
  {
    "url": "tag/git/index.html",
    "revision": "730e98bacfe7f55b318d9e7087a2b7f5"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b7e111d018162060ad18ae9f4fe2cf5f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4b101ca7026ea2e9e91f3806a6f9dc6c"
  },
  {
    "url": "tag/index.html",
    "revision": "681c094f948b7d93817943f1c3cb23d5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a5dc9b57c1182f8816ada0e3e1780e5a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8c85ab547eaecf05ae218329f10ce171"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "233ace599838ba2276049493ae76de2a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6b6a9556dc952c92b72344be1687d4ac"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f4daee6638664ed31295509bf86fa47e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4253bc3f4b34cd4020807a84946a9287"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "054332d2485a519e94194db03f6d07d9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3b4f18e3cc1edab9fdae519b22e6ac4c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e06dd9c23d84b6a38b1931553d5db606"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "21577b3f2925b0aa1157564ea7b33293"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b2eb58a832370593f8c6b375c2828cef"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "92fd3a26e109d0db5aae8f5400eef0fb"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6c2d3e7cc9960c97294ca63fd8ca0457"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7096c30b5c408a5ea8140d9fa082bdcc"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "114ea15608747a84b9a1884e1a415267"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "57287440caecb1becb5194437a94bcf5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "84185892e787482ee41ec39a14acd055"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b61c1483b2729295c0a2b8092fb02c03"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "629e32f281926a90a52215b9dcc3da00"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "774b51a4d4ee8c076472ad87e38c61cf"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "742401e88590f0246aaf2dd9629069f9"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "bb3b211b12946e981b57cd9800c56b6c"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "0a01c6569b2627442bafd910098c19c3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "958cff9a4db0ed08e5f13942b5241e32"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "798532d9721d8af3b7ae69036429f331"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "7cadcf4f62ac690f7362d69268e3b340"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "827b8db8c169c9c0eed0d417af5a1a11"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3cb6bd8408d9646ce1b468465b265ebd"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6f5bd30eb66d58960554ed51a891500"
  },
  {
    "url": "tools/git/index.html",
    "revision": "58447cc09969b6efeffe3b167a3f3ee3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7df3ba166d8d3ffaae97437aa1477117"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e476340be50c86d461e9161976028dc9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3d53b91b51c694d02a1a82fcf60f6131"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1aeb70b41db2bd52a8ff771174dd7da5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9deb298c34effdae1e44c0b86d5c1f83"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "970dde4b7e15c6a3312fcc811e63179e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c759401d54e81cce07fe76e6380b67c5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "318f458e211403e1680dc26e023f7a68"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "84ae494700a6cddf58590feef11217de"
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
