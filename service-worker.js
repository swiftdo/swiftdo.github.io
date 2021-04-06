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
    "revision": "ceaf9f568d6601b591e1fe1af1dfb784"
  },
  {
    "url": "about/app/index.html",
    "revision": "2c315ee930120b1aa9b823412db15d0b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "210f301841bbcb7052f26dc94e5e7953"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "357506c0dde181bb6e539cba05680f96"
  },
  {
    "url": "about/index/index.html",
    "revision": "1e9f9a1b211f2cdd8dde1f09fdeeccb3"
  },
  {
    "url": "ai/index.html",
    "revision": "b72e864247c304c9482270ebb8751da5"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0ba73aeaeb9025477b5ca875f37af8cf"
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
    "url": "assets/js/100.dc7c9d11.js",
    "revision": "a3ae5aff5dc57a7368583b39a4815e47"
  },
  {
    "url": "assets/js/101.a217b2cb.js",
    "revision": "c748c7d6081eb48827374ebd43ed9b6c"
  },
  {
    "url": "assets/js/102.22070b0e.js",
    "revision": "f329d16ea3a4b028999b6dcef2c30dc3"
  },
  {
    "url": "assets/js/103.afa1cf79.js",
    "revision": "6d1e64eccec38107d87e7849f3d71d4c"
  },
  {
    "url": "assets/js/104.84f9e330.js",
    "revision": "5f06285444b970b898339c882786c6b7"
  },
  {
    "url": "assets/js/105.0b559d32.js",
    "revision": "e4b1b308a286f4168469a624e27cfcab"
  },
  {
    "url": "assets/js/106.a685a640.js",
    "revision": "aa2faf490f58f8f05b5fdb79faa8a971"
  },
  {
    "url": "assets/js/107.1f5d3187.js",
    "revision": "6251718fb8f5d77c23fa0bd93b49d19c"
  },
  {
    "url": "assets/js/108.94254bf3.js",
    "revision": "37f23c74380e11ac2c636d805c7756b4"
  },
  {
    "url": "assets/js/109.0fe5b30e.js",
    "revision": "566b4eac02ef57cdfe23f1844fe7dfe4"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/110.cd4dc0f4.js",
    "revision": "40dc1de2b6168389f8fe9d809bbe256f"
  },
  {
    "url": "assets/js/111.2a4387c3.js",
    "revision": "455aa59e156577cede88d245011a7209"
  },
  {
    "url": "assets/js/112.ad6064a1.js",
    "revision": "56bdc51f2b988e3fe5bf520f0e018a61"
  },
  {
    "url": "assets/js/113.922812e9.js",
    "revision": "8305a7dfcf21a4db732a6e9d4c8b01da"
  },
  {
    "url": "assets/js/114.2a017cb4.js",
    "revision": "236cbc3d8d662ae9d4302a643674079d"
  },
  {
    "url": "assets/js/115.645a4f47.js",
    "revision": "6b3a30486abdb90d30d82de3fe2fd716"
  },
  {
    "url": "assets/js/116.6924060d.js",
    "revision": "188cddc9e651eaaec48c7b0b54b6c1fc"
  },
  {
    "url": "assets/js/117.9c7d8c1d.js",
    "revision": "ebd562ec739ebf4f5270eb456d47b5a2"
  },
  {
    "url": "assets/js/118.7b7a4748.js",
    "revision": "2f2dfdd533d3848fe5cdcacfab5c1318"
  },
  {
    "url": "assets/js/119.9c07972a.js",
    "revision": "f1820d9dc1ee4c9ab05591b8a13c0041"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/120.ca8b3af1.js",
    "revision": "3bad7d0ab6fcd0bd2e3fc3b6719b40b0"
  },
  {
    "url": "assets/js/121.2106ea61.js",
    "revision": "2a5c8c0c54b65a4a6c4429b3d4be5492"
  },
  {
    "url": "assets/js/122.427ccdc6.js",
    "revision": "42356a3520d7095b866329c863ec3359"
  },
  {
    "url": "assets/js/123.ebddc71a.js",
    "revision": "d3b1353bf40c80cf96c4e9c48ad365d5"
  },
  {
    "url": "assets/js/124.ad4632a8.js",
    "revision": "4c6d180660eef9bc15aa9cbe675df0a4"
  },
  {
    "url": "assets/js/125.b2f9a47d.js",
    "revision": "e065f7c09b0872bb4c2c6b26ff12ccf8"
  },
  {
    "url": "assets/js/126.9875e258.js",
    "revision": "e4b6160ff02755323a800726dbf033d8"
  },
  {
    "url": "assets/js/127.c06a623e.js",
    "revision": "0bafee804bd8b22cff4e60a10175111a"
  },
  {
    "url": "assets/js/128.8aa76e4c.js",
    "revision": "7bac5f0d6edd4546f4254681c979ee47"
  },
  {
    "url": "assets/js/129.5102a427.js",
    "revision": "fd77427b5a9fadae8a52b14e89c164a9"
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
    "url": "assets/js/45.1d952855.js",
    "revision": "2fe1b360fdaa8dbb776ac241c1f23283"
  },
  {
    "url": "assets/js/46.169638e8.js",
    "revision": "9eafce0bf29a9ed12f72a42d83dc8095"
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
    "url": "assets/js/71.0ae1394d.js",
    "revision": "9ff800d4470afc50e71e4a1bfab443d5"
  },
  {
    "url": "assets/js/72.3a8fbedf.js",
    "revision": "2f14b1fada92cad581524529ec7fe479"
  },
  {
    "url": "assets/js/73.28f7665f.js",
    "revision": "0be86210990b3276dcacd796e10afed1"
  },
  {
    "url": "assets/js/74.eaa61e4a.js",
    "revision": "04a9e34d2523640db33e823a3a4c4696"
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
    "url": "assets/js/79.be7380a4.js",
    "revision": "999db2ee9bbaadbc8d8b19347545d74b"
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
    "url": "assets/js/81.34686f1c.js",
    "revision": "32ed38c5fcef71a857229f9a01a1c633"
  },
  {
    "url": "assets/js/82.ac2acd86.js",
    "revision": "9852f04ba99c8d954f4160331b4be17c"
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
    "url": "assets/js/85.2231be4a.js",
    "revision": "609d69c94d656514483b267bbcff89b7"
  },
  {
    "url": "assets/js/86.9d5d7b1f.js",
    "revision": "dab82baf86e73f77d90a637679b93168"
  },
  {
    "url": "assets/js/87.678bd424.js",
    "revision": "76d0c3b89b57a81b0e11796a40cecd90"
  },
  {
    "url": "assets/js/88.eba9b8f2.js",
    "revision": "ceb2de1fab71a8a6e7de34a057ecefa6"
  },
  {
    "url": "assets/js/89.1c3a1ec0.js",
    "revision": "e3b26338d3d4c5630f370b129b374869"
  },
  {
    "url": "assets/js/9.5c779ea8.js",
    "revision": "cc3928f114dc9267789b1c956759d628"
  },
  {
    "url": "assets/js/90.ad406ba0.js",
    "revision": "a45300149bb9864fcc9fbe7a39fd2719"
  },
  {
    "url": "assets/js/91.d8dec982.js",
    "revision": "3f589ad74e5c07e2e506cc63c46736d4"
  },
  {
    "url": "assets/js/92.e289eae7.js",
    "revision": "fdf83f8c2e5c6cf8e72508b97e281ff2"
  },
  {
    "url": "assets/js/93.c6c00338.js",
    "revision": "766b0010ab576d63434b364de7786f2f"
  },
  {
    "url": "assets/js/94.cbb982bf.js",
    "revision": "56faf3c1bf7a223422272bbab5eb14de"
  },
  {
    "url": "assets/js/95.0771ffff.js",
    "revision": "30f4ab9747ea9dcd35f8633d5a6b4be5"
  },
  {
    "url": "assets/js/96.8e16b2a2.js",
    "revision": "8c91605f330878021dffde9ef0ba6850"
  },
  {
    "url": "assets/js/97.749538c0.js",
    "revision": "fdd5381a4f98cd7176de6b8bb908c681"
  },
  {
    "url": "assets/js/98.c2ca1356.js",
    "revision": "b4caec013a6b64e265622fd35e648508"
  },
  {
    "url": "assets/js/99.2f5d5cc4.js",
    "revision": "a6a481b16943ec4651f0072dffba750d"
  },
  {
    "url": "assets/js/app.308bf855.js",
    "revision": "9028a4f583dd2b2e6ac0442469d6b2a7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "2554ce4af56f49294b3a226b30aa869b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "65d42171059ecd3e2762835b85abd57b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9781eeb1bbc155eb2b7251ce24c60a7f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1d385289deda89d7a7fc7ba5224b8757"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "bbc45749fe10d0e7a0df795ba13831d5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6c0d5115a605706e1ddf7e036c281934"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f327eb756b29f5a8a9fa529786b1024c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "95221cb685ba12b38b8394b7b3691119"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c00baae33d19a3394a6f550903256b73"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "084940d0af60186fac0735d414b5ad15"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "cb2701b8f2dd6deb231b12579b046fb6"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "c010d55ad5515a9c1e1b7767239dd522"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "647b005a0c800acdab2cc204a12338fc"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "50cef7a939193f7ddccb3abfefa63d3f"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "7a074bef84ab502718d1207adf3d1a50"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "868081f22a9898c51d6ad5a854f71e97"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "e208deb468b3df6fe84aabbb7f631328"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "99c2921da29ac671d405d2a68fff7565"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "4866e7dddc8dd3733528ce7ae8d63b9c"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "26cc26a88fd8e7eebffc16aaf23dc17e"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "f11e781e20fc5593f94bc6397410756c"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "8addc81380b88234ddfccb16cedc9ca7"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "12ee119b1a7222d5bc9203f68a5b80c2"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "38baa2ea67ea8df7260e92f5fa6335f5"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "b017110ef4c47ec020d4dfd7e1205ae9"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "74f59c8def722cead094c794d08c6c48"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "cefebf34aa254345ac11b48fe81476cf"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "cdc1eaee2da3097a3ae4f86b0f211672"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "d1176af30108dedbacfdc0b49d43e188"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "dfbdee83b190f520fd8777902a151b23"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "fc0f1dfa5351e29036ecb0c2407a07d0"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "db5427e46d551c73f67738d8fffc91ec"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "f786b8a9535a4463181bb7f76ab4f232"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "76bdd4edfb1b84a207749627622c4d71"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "3ba86075132b1cefd0edf1375c4358ce"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "aac6ec7d335d8812d25deefad7efc9e5"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "c8413042e7cfb73d5e42b0acc949414c"
  },
  {
    "url": "basis/design/index.html",
    "revision": "67df82edcb3d730e4f7b1ff4ef4e8827"
  },
  {
    "url": "basis/index/index.html",
    "revision": "4fc2ee5291ea19b7f541de6b2463fe5e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "df8024c3e3c6d8ae6a8af8c66d6e84e2"
  },
  {
    "url": "book/index.html",
    "revision": "625c51ebbb9f9e25dd5fc9742f94a681"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "06bad188ae530b8384586c2d01ed8018"
  },
  {
    "url": "categories/index.html",
    "revision": "9c9bb1719907a45caca11750c43c0027"
  },
  {
    "url": "figma/index.html",
    "revision": "90c8cca2279ed1c172d57a2990922ca1"
  },
  {
    "url": "flutter/index.html",
    "revision": "2a1560d7543222d2b3d92bcbf112ce13"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "226cb04469b00e06b83358d759f14531"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "758131790fbdad763c1816f9ae6bb90c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a82634d22aa4652879d5f3713ba21099"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5faab77aa24e8b21d76f1568e07d8488"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "17a31fa9ade9d191d057a484a92057ec"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e4c96f67f22c27bbc5f0b6816d8d3b2d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d58364cce948d571d4c751734a0b255a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "dcd4657b36df771970f86d4730c5ce1c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ebfbd4b38a917ad3fa3a753df1db754b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "aec1a0391cc2156269d352f9287c943c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8b6fca3ef96339022b8795c0f625dbf5"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "06f9f37028ebe173dc6af6ed2fc4900f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "53bb4d39a7b35b8dc53a1e8cc0854458"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3261bdc68e92019c213d3407f3f2b43a"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e91652cb5a0d375fa10a08cc2ddc7c2e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0f06ceb3517c73566ed4ccbf1c782dbf"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "0d9caa4f11fc6591ca6d23728400a663"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d66caa05b617207f4d68c3abd1cbbea9"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "1b622d0acdf0cf07fef5ebd824c74b91"
  },
  {
    "url": "haskell/index.html",
    "revision": "d21b9be7db34a8aa32afd644bd02a22e"
  },
  {
    "url": "index.html",
    "revision": "3dfab2926f863be6c226e1373c220bdc"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f325d1c143d86ad9a0a4dc2b1e0a04da"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7ecb1f615f441487649657cb82a28b2e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "7883c9bf6adf672f0b9018db69c182d3"
  },
  {
    "url": "swift/fp/t3-length.html",
    "revision": "a5ffff77b2dc23cf31bd2afc534fdb66"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6cdb5304e965ae674871d26dac224632"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "bc19c81cf6dc74f2b0127d4a8b91419d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "8f225ead6b57bef278740d26a240611e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "d1fbfcf42ac26ef097b215a752d1220a"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "c93917e8b8d87c821f3f02ee5d806c64"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "0909dabc6a910fc23b32458f327a23b9"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "d70cfca5d173cae910762b14cd00bbb4"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "a6e211b019786eacb50b02a51ed55564"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "e07b453fecdc5b3d46ce3803094cfe70"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "338a1941309d63945703bff6b547c1b5"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "6d626e0358895ac4b0e6bd1a51caffde"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "6adbcae972c9bdbd1537f2e3bf6eddcd"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "33b024ea3bfdc3c3a7a6d6fb2203d250"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "7f4a004d38ef85ac01523aa5022f524d"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "ac9e47fcfa6a98d97a853e9fe4a12131"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e1ccf3e55eddbde844ae58c29b45f9e5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0a464eddee95d6f265b99d05734ce869"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "22a964992cd4fc50a576982c76bcb7d9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7c11fe279b73296c36ffaa289ea5f435"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "53b44b8efb43638f824ff47e3f7870bf"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ee3303dc0c2472feed7a80c619123431"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "45383b5e8afe391990e9b3c4dff6f27f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "615556d58ec01df19d91652984629bd7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e4489443bdc3c180d601a225460054d7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "9d0b3d0e61ad83da9c80e70d84b3e2df"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "1bdbe9fae694fef131e55f077e1161a0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "fb8f0544f42c89c28d6375f7fce9f05b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b6afccc0b99d4d3b320aa09885422f23"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d5359b080918956a9a47799716b173e4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8ff6f6146c8353bf099ae094ac4d2291"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "011ec9f2f990bb923ee9bf4fd1d029d1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "79295d649be468607b433e27656966b4"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "6e55a4029134f9cb0ec58bfe15a98446"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f203be636f8b69b9dc25f0885266b09c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b562caff0f81806c0fb11e49908e846e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "17295e6c1984b67b40ba6d4de1bc9ebd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b8a17e64544eeacb07a024d09531da61"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7fc7f4e54e6bc548e178b16327457da7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "576634eecb8c3fa01860d48ff5ff0e24"
  },
  {
    "url": "tag/index.html",
    "revision": "e953f2b7b23c35dd2f3536d404b64cbb"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bbea61f6e412f85a9b832d0eaf35bec2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1dbf21d918d6b46d6653f92384e82b51"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6c631661cb646d1edf93dff0ba3f0f45"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "002507f1ae92294427f7421589c7adbc"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2d30a4d30963cb05e266b489a74950c7"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "64f68b966c8a65f4f78a8525bce15496"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "5670c27a36f270120ab40d8b23de387f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8f1b8a8fbb9ef747293df1fbe4af8164"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b4c2b6fa3bf63eddff7aaae39c5960ab"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "33623d18e20edf864a841ae686dbf5d4"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2d3a7f757087d1ce335f608056d6cb6c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "179627aeedd3efbd36c6e03d47ba6b8c"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ff281ddc6f308c73e1ee29d51b63dc84"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3ff155d4ea65a194fcf5cf98bed338e1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e12bca9e74258a2b254152658f209ea3"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "988f5ddab39ae6858ade33a83781bed7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4f527bc7f82856750df125f05a78375a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e74f49a7c90870e122df0d9022ef8e22"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "83dda97afecb17180eaaa6a0ca8e2aa8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ae58b9f2429e02aed3494d6d3ade372e"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "91c93897d0bb25312b54c11439646558"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "79eb3a397f74ac99b5a762ba644cd7c8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6b23a480bae5f2c0da0b5b0fd0829ee1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e509c92d586655e4347023d93d567bcd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2c56bfab0a4f29f41e8467350c4ea8bf"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "da42d7fa2d1e9786131a02426267b383"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d600d34557dd9ac758c72a0dad8477ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "b7fa0a0d3e83da5f545c8efaafa5ea1f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7ae9a41505e945a127f1a5ce2ffce08f"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7b9bdb89106b91b19d1c189f22107426"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "22a32c2daa39d176e60a98f99afdacca"
  },
  {
    "url": "tools/html/index.html",
    "revision": "fc48e91565b4b8624f97e3a3f5ff7925"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "8c56da18c65bdd5f864bfe15371b041c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a65759e75d8f6f63ed5fd1aca3b8b5f7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "50aff56e9927fbf7ef3ea464e99ab9e2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "bed40d284f7053fc6e1d72da6b527479"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c3d438097086c107b56fe39c4bc0dbcf"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "88732bfc72f3247c3d7899ed02086fec"
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
