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
    "revision": "616ef5f5c711684cb3d96261948caf93"
  },
  {
    "url": "about/app/index.html",
    "revision": "d16aa7002836b0dfd7c7b28c9d6f0d34"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2817925cf32d51a86fcfa34cdd06a8ab"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f2ee95ff47cd87bee2ff5556382ed371"
  },
  {
    "url": "about/index/index.html",
    "revision": "45fac151eddca0597e406223fc56d748"
  },
  {
    "url": "ai/index.html",
    "revision": "f7810326358c2951dca5f578845a3361"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d3adc7a8f3317ce42775fe3836ca468c"
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
    "url": "assets/js/100.7bdb541a.js",
    "revision": "49f36877bcf4764a791624161193fbb2"
  },
  {
    "url": "assets/js/101.67ba0038.js",
    "revision": "7c429c077062986c154ed05049f62a1b"
  },
  {
    "url": "assets/js/102.e153cd43.js",
    "revision": "13924fc35f1a951bd0e4156f0b2ef3b2"
  },
  {
    "url": "assets/js/103.79dd379c.js",
    "revision": "d37d0212a8eb5352cd7a387ab1f54ddf"
  },
  {
    "url": "assets/js/104.cfef9865.js",
    "revision": "1f37482d7161cfa001623364538a1f98"
  },
  {
    "url": "assets/js/105.fe3b3bcd.js",
    "revision": "2c8da901a3dcb83055a60972026ea883"
  },
  {
    "url": "assets/js/106.003170e7.js",
    "revision": "1949fad99a7e17e98bd8cdd7cfb64d49"
  },
  {
    "url": "assets/js/107.8b71c210.js",
    "revision": "25bb326f463716935042a4f51e208349"
  },
  {
    "url": "assets/js/108.86e2b239.js",
    "revision": "286e2ce8232c932fd2a9187bf81bef02"
  },
  {
    "url": "assets/js/109.318b8c45.js",
    "revision": "a77d50ae218fc64b139ee591b5e111d3"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/110.54e544a5.js",
    "revision": "dcacc46da5c46292cd437ab9087a85a6"
  },
  {
    "url": "assets/js/111.4349bc85.js",
    "revision": "6366187e99b9d993a565e026cb335073"
  },
  {
    "url": "assets/js/112.a4099ce6.js",
    "revision": "be5c576d0b33036bcfa200ba6aa02f62"
  },
  {
    "url": "assets/js/113.3b522003.js",
    "revision": "2e1ce6168c30d25987dc3614cc887e1b"
  },
  {
    "url": "assets/js/114.6cfd5082.js",
    "revision": "702813f962925cdce0c7255bc1c583a0"
  },
  {
    "url": "assets/js/115.69ef6968.js",
    "revision": "b0702bd8c14c795731275551ed693d79"
  },
  {
    "url": "assets/js/116.4900f88a.js",
    "revision": "f5d0d5a957a6946d571ce13dfe75f35d"
  },
  {
    "url": "assets/js/117.f617922c.js",
    "revision": "8cd9cb839ed7fa7b3b133344b4e33728"
  },
  {
    "url": "assets/js/118.f02c6fcc.js",
    "revision": "dae239c0fe3e02d577a4cfb861b68973"
  },
  {
    "url": "assets/js/119.0e6d193e.js",
    "revision": "26ff40cf360ac084b5aea0b972f21ee7"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/120.ad357970.js",
    "revision": "5e596be922176a17da64d999d2286bac"
  },
  {
    "url": "assets/js/121.7adc92f4.js",
    "revision": "5103d79bbcdc411b205ab85a4fd771c0"
  },
  {
    "url": "assets/js/122.758d9701.js",
    "revision": "1a4e7cf185d6177304c295b3114d1cdf"
  },
  {
    "url": "assets/js/123.720cb88e.js",
    "revision": "178a2af158a177fc010e022ad48e8e06"
  },
  {
    "url": "assets/js/124.fae5053d.js",
    "revision": "fc852117664a941577e7e69dd3aabf6e"
  },
  {
    "url": "assets/js/125.417ce8ff.js",
    "revision": "483079edc5c53a08031c952e674b3e06"
  },
  {
    "url": "assets/js/126.8fe556b6.js",
    "revision": "be0df04027a56b59589639fd41e80be5"
  },
  {
    "url": "assets/js/127.3dde154c.js",
    "revision": "4e1573c3ca2b876b921152400b36faf3"
  },
  {
    "url": "assets/js/128.554afa6b.js",
    "revision": "79cf3ea90312c51af9d24b2763c82a8c"
  },
  {
    "url": "assets/js/129.a030bff5.js",
    "revision": "fb3660adcd908e0581d8fb808a796fc1"
  },
  {
    "url": "assets/js/13.8c3f8598.js",
    "revision": "6e48fcc939ba964e64e5160169fc4a40"
  },
  {
    "url": "assets/js/130.b92355bd.js",
    "revision": "9f99c3ae70f70bf50766d0b633f895ba"
  },
  {
    "url": "assets/js/131.be877f32.js",
    "revision": "15b968d0aeaf54db76eed7e20403d20a"
  },
  {
    "url": "assets/js/132.a04176fd.js",
    "revision": "b625557eadf1020c64ad618e7434f70c"
  },
  {
    "url": "assets/js/133.a8715738.js",
    "revision": "cd8c6aca4ebdd151dc74bccb2344c637"
  },
  {
    "url": "assets/js/14.55c60317.js",
    "revision": "a9320dd5177f2e35746866c6876f4765"
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
    "url": "assets/js/34.8260ea91.js",
    "revision": "8ec33bc09087df0550475c66ea298931"
  },
  {
    "url": "assets/js/35.7ab33050.js",
    "revision": "533b0fc6d4c84de52e4c0bcfb3a0920d"
  },
  {
    "url": "assets/js/36.993bb996.js",
    "revision": "89bb73f011acdfe84a5104128ec4ba64"
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
    "url": "assets/js/58.673db8de.js",
    "revision": "501d98cbacec50529ce458375892d4ef"
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
    "url": "assets/js/60.14368cf7.js",
    "revision": "7399ac3fc4bbce635a3a02a6da7a4627"
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
    "url": "assets/js/65.975b727f.js",
    "revision": "aca6ff223451d116fd9463cfb5eebc1b"
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
    "url": "assets/js/69.995f930d.js",
    "revision": "449a51c71ffd42b8431534071c4c6920"
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
    "url": "assets/js/71.e10cb840.js",
    "revision": "10be6783cb611fbf734bee0fe2d6c6b2"
  },
  {
    "url": "assets/js/72.241dfff9.js",
    "revision": "3d6bdc15983f58f8e2a1c05241376c23"
  },
  {
    "url": "assets/js/73.c9528ad1.js",
    "revision": "433cf6dffd4c1c879ca76d468ec75eb3"
  },
  {
    "url": "assets/js/74.eaa61e4a.js",
    "revision": "04a9e34d2523640db33e823a3a4c4696"
  },
  {
    "url": "assets/js/75.7edf7c19.js",
    "revision": "3d83d5627398914619d7a6a1ac5d58d1"
  },
  {
    "url": "assets/js/76.8ad54fa4.js",
    "revision": "040f4ed2a49f4d4351c1f309fd5b2199"
  },
  {
    "url": "assets/js/77.2e2a1332.js",
    "revision": "2cfdbb804eb38139ec420b8ceba4efce"
  },
  {
    "url": "assets/js/78.1f359479.js",
    "revision": "7fb995374908bf83cd3ec79bdd48beec"
  },
  {
    "url": "assets/js/79.fbdd976f.js",
    "revision": "2d97adcca6549cca7e6e2dc76ea78e19"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.4bb24807.js",
    "revision": "e481c3c3e2e0ae3903292f68307d124a"
  },
  {
    "url": "assets/js/81.d06f92ac.js",
    "revision": "f665779bb2efc010983c3fc7c377309f"
  },
  {
    "url": "assets/js/82.0a899461.js",
    "revision": "7b1a20c0a6de2f4c86fc4eed16e5459c"
  },
  {
    "url": "assets/js/83.08f7d150.js",
    "revision": "62b548872236e70e0816e136e792dfee"
  },
  {
    "url": "assets/js/84.d1accf1d.js",
    "revision": "49a3349c3604caa7a904b7aabe0f499d"
  },
  {
    "url": "assets/js/85.7af6e901.js",
    "revision": "fa2485b662e6897492aa431a37db10c6"
  },
  {
    "url": "assets/js/86.3957d702.js",
    "revision": "b48e6715d02bf10693a00b8b56b75ad0"
  },
  {
    "url": "assets/js/87.c231e401.js",
    "revision": "11a5a45ded3d1906136012de73f0e9d2"
  },
  {
    "url": "assets/js/88.72da94cd.js",
    "revision": "0ba0bfe1a6ba7ddd76e66d8733232d99"
  },
  {
    "url": "assets/js/89.fbdcaf82.js",
    "revision": "9304767eb712929c722d3c9fc5db9aaf"
  },
  {
    "url": "assets/js/9.2863aca7.js",
    "revision": "b4b4e2625b202a3a03230692d3509598"
  },
  {
    "url": "assets/js/90.f9309327.js",
    "revision": "67597a3088ae5265acef5873c0750275"
  },
  {
    "url": "assets/js/91.bb9f2ab4.js",
    "revision": "42e22560c6240389bcbe732c39392d81"
  },
  {
    "url": "assets/js/92.373fcb35.js",
    "revision": "8ff83a434f5ecb10f9db847562a1a440"
  },
  {
    "url": "assets/js/93.925a616b.js",
    "revision": "d3887a83dcd79ae2f48bbfc54b531973"
  },
  {
    "url": "assets/js/94.1ba0b4d3.js",
    "revision": "e19e0be7268f1e001736279b09cd3412"
  },
  {
    "url": "assets/js/95.f573ce1e.js",
    "revision": "ddf512b20455c82e6aff83c4b3ab8c5e"
  },
  {
    "url": "assets/js/96.2ca167da.js",
    "revision": "d49f9304d98ec8ce282ef4f01cdaabb0"
  },
  {
    "url": "assets/js/97.0d70a58e.js",
    "revision": "17a66aad5a806070428115fee68d2340"
  },
  {
    "url": "assets/js/98.3eb26675.js",
    "revision": "e19f2882e3ff5404528a0cfd29f9a16b"
  },
  {
    "url": "assets/js/99.4e70df6d.js",
    "revision": "db8fbb8ee0d887c443ed1a386530a330"
  },
  {
    "url": "assets/js/app.11e46618.js",
    "revision": "cb3551906c3c314b38a3b66b99b1202f"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "f9467535cbe22fc7d7ae7bb2d5ffd965"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "5f86bfebba32aa1f059ce004b5c80289"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fb83587b269b4285e15ba65bee5dc04e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5f98e60d0b2e60d399c0c72ff4834136"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1402586df455034c8b793e6f56a23279"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d0b29eabaedde140bf42bf45317ced39"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ee91f8c2aa1e63e239d00f26bbf1517f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4dd1fb03b2936b073595ba7d621a2db8"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4ee1c55da8cf4ef1bedcf9d57bee737f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3e945358eeb3ccccfb5dbc8e6033b3ac"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "455246adf2cb7f2b2e3c54f274106a5e"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "1f0d68566f50b2f97e4adcebdfd33561"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "280f2602ef261a33c5774ce7bd7c43ba"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "b92093a8704dfc357f36aaf21d4f3c6e"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "b4d2405bae7f8f22971597bfafaf5e31"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "35671490105ef500e43d2a41847a1a17"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "74b4133915ebb6750db406b78167589f"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "bd45c09812dda48d2811066e9d786ec9"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "fe30741fdb272dc3c150ce23bbf59e8b"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "3fa4564bbd7456b6604b8b800f76a945"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "a720d4a40f45b3993b65118c9620c023"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "3435cdcf963300a43b7fb4973a8b2b0a"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "3c6f9bee9ba7bf1de4efc4a2771e7694"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "9a1f31d99b3c86256c2855fc7732f08d"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "8ca5a68b8f1d8706c70b7881d6e07357"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "423367e640905f45b50f44087913f5d0"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "67ba595611ef2d21b06c1c813b42d7c7"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "0c4b1f76fe41f09b60f47aeffb5da290"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "a1ee4aeb22d04a4826e0752fab5b7dc1"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "958e60ca3d51a523274b45e883d41acc"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "bee6dc78589ed2d6f86dc0b6036d1d31"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "2bb1ea26a9389f9cb85c522ac0962b51"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "30f6f122a67f956c101590598cc9e800"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "801622b2410697cd029bdaac9dea2dad"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "ff52426c0da6d2d315c7f7f0f251c0da"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "0243f98128186c6d04c7973ad6d06976"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "66097ece1438538c68dd7a907a6cd20d"
  },
  {
    "url": "basis/design/index.html",
    "revision": "31a3b92e8c541293d59a2c3bc842d51a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b369243c809ae47270f32c2a9bac50b8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d4a26dad6521d09848e0c967b3a3be00"
  },
  {
    "url": "book/index.html",
    "revision": "cec17289126475310a77b869a7a07182"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "148cba2c092b48a84728b176e4d339ef"
  },
  {
    "url": "categories/index.html",
    "revision": "924ed4a51fe1e72da92dc3beb7cac0c0"
  },
  {
    "url": "figma/index.html",
    "revision": "72b0449d3107e0d41dbcd346e499b47a"
  },
  {
    "url": "flutter/index.html",
    "revision": "83eb17bf5c4d6a198bf3f045dc2aed9d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "575ed4200bf26b055963441aa7beacfa"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ec906ee58af538261b49db2a8825a7f2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c18ddff755872f25665eae37342739d8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "82c5b77c1e720ffdce1f5e525ae4c823"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e4d1a92943e42bcb1771bafd6511fb90"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6b9c0d6739f25b5c76622781433007bb"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f807b1e98d0173de72901cb6da4a1c48"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "65852d1c56f3f57350465264956f5745"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "71c35163326df649de41afcc01c56096"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "473b1460b73cbc515a190d0197eb55f6"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "b6dd18987341fdd892781127a9f9f189"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "2daf9de44891c3dcc384e46ac2998cad"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "052f7826444fd4b220b706f7d14f49d8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "fda31b2f984b5c27fc155d8871fd4339"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3e9f419404ad67f811b574d66c3004fd"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "46b6b96415c298097f39e3b97b5d8004"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "87cb8ffd4896370a9a2e209313cae57c"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a40042f8e8a5d3fd042396b94155af11"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8c218a98016a16e9cba8d0b250f51362"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "086bd5615e9a16cb68ecd2b1d60e5fa5"
  },
  {
    "url": "haskell/index.html",
    "revision": "30ff18d1a56f323fa613d115443862e7"
  },
  {
    "url": "index.html",
    "revision": "efc38da0d6ae6f33b30cc98e9d4c631a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "4ef1792dece8713b3aab9f7849bb70ee"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0ffb6595aa849ad4c74a0bfcd566c7a4"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "963a5778e4177601c102d0ea276367bd"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "949cb700771a726864e4016bf5e7d07d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f5e89976d8ecdd4709b7a81a935360c6"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d9db46cdc60ae1ac64013e7be75d55da"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e7c23cf0d47f94fc768fbee807ec4136"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "794b6c986ef7810eca316704b70e7f85"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3d19cc2ea174eb8736e02c74675bb27c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c66b53eccfd9be284d53ea37c2e895e5"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4eb46f82993a67ec69b42ef615d2d6d7"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "f77cbc158dfc9609ee572ae6b3306fd5"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "1e807f5e097f49c6e04ca90c9cb68454"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "09ccc65cbac519b44324f419456ab544"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "b400193fc015d7af330f3360f4d639f7"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8e61fa35fa26d520b5f1add932beb44a"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "dda5dac96a8a6c8cea40762207179c42"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "2b787268b50f3ca44fdad447f0946f93"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "dcfbc21903ceba618bd4e07cafb76226"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "ecbe88ac4fa77d57a979db7fb0519c4f"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "4e6dff68a688bdf3e26bea012ea055d2"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "c11c3fc8b43d85c48df5f6190297f0e0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3495f00c0d776cebc72cce76c6bad0fd"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "498d20519205f8c560ae30def845d86d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "8ea59608ed23bdb8ae3d030a43321b13"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6740c701e8637f8166fb51b99a8683b1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "2a33e616ef49efa8b6fb8a8a2f747ed1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bfa1d5025d78ce56ad4737a5c9322433"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0903fbdb664265d8191ad9be9c5fb1b6"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "60bd99237b071f204a55f768d5d188d1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8516691defa67a396bb5d1e319870c75"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "dcbf4ae988fac73f431659b1711a7b4a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "87d0eff16fbd34fb2f715e78b6bab9cc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "af2ab7bc16d165a8251996051f42be6a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "523c99025ed76d428ea0e44189fabe29"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1f1fc7266a4026f3ba5318569ede56c6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "499bc9ed4968d15ba46d6eb4af00f82e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "66188dd52eaa46af037fab2b0d66f20b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "af5ca014f0acf5c07217a2709a736936"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f1c10f6624b0bcf85966bb1966aafec0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e02809b17b61982222e2382e01c9920d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2c1dcdde51123d5c53a1e1587109d7e2"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1c29640235e85ecaf1595fe344602528"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2f692870deefeb0ec47b89a204926e4d"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "458f8282971a83795851f3256921f1bd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ba7cd99291cb00ba3fa681f76a908aac"
  },
  {
    "url": "tag/index.html",
    "revision": "3646be1a81419368bb5666da21c20bda"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "556bfaeace76597e5129044185ad759b"
  },
  {
    "url": "tag/json/index.html",
    "revision": "29a0afc21262a82651204b3331bccfe7"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "319c11e39273ed315bad246b6d7f4c4b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "50083ef62f9a69e9072f37c0eda6bf8e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "46ca6e264e5bd9c4751945478f3dec29"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f0addecf8daa6b533615c889877f6d81"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "78fd6369b74e8d4d4d2550cfa4d4351a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0f44b2930c39fa76851485ce6a5f026c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3c96402f335d4de81b719fa2977b9886"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "3c44b6aaa79a3a133f85de5246befe3e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "284f8e2682b4d0e9378c68d444c662bc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6f259a9d47f0a339d7e968581feb139c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c66faacb7a682a3c10550f2a667fb1f9"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "673e8b6d0db66f3a4b1dd8cddeb35ed2"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6d29324fbd57473b62981f76c9ef8ce3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a2102b33024fa6beb7a538865cc6527c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d0a830d1ff9e76f9be203103e1727d54"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8e98553370fc493f361ca5eb6ed1e41a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "220aaae8ff6613c584d8f8172a6c19e4"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b8bacce05b6e21ea40565cb6adb8dc5c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1e54fc77ca4353e78a1bc23634e7da92"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "0114da3d7d640059dbbc93f13e29953f"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "999d46c291d0f0e2139f4502d52ecf87"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "031bdb712d8a8e7f99bbca0f3bc6f3b9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "acce0e5ca0237f069c60e7d7834717ae"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "fbf3bd5886dadd74bfc12f638af46c89"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "50cc26972c29a7a6f6e8891b9925b0f2"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "8a64c6ad747b6f2d3ff05f1e51f17b41"
  },
  {
    "url": "timeline/index.html",
    "revision": "d33a93a37d70a64e1f08b1afe494bda8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "25fc07fda90d8b9202f9189712060134"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "682bd6c167fa561bcbae8c3638db82b2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "281ce50a44107056533e369b06cc46c8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "64863d118f04cb874ba3685be5f368aa"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "fce38585b691c8b2fec5e6a8fd289da6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "73bd7eabe6ead445bc57aa18580eeaba"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "685a6ea1114c471ebbf40c4a2132dd32"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "fb3272f7ebe818ae4c9942348119f4c5"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d0bf23b98b8f38068005248e584c5b65"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1e92c5c960778c13f040825f8b7f091a"
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
