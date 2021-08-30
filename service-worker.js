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
    "revision": "ce547b731f59bef50db95a1f3fd41a2e"
  },
  {
    "url": "about/app/index.html",
    "revision": "c646fc728a0d456307ec6438c8310361"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "df6ee818ef44a1ac575f7737f1ed363c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e49bbb761eda9c198dc352e7d3380f68"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "9dd586cb03d8d6abde81810815daa5e6"
  },
  {
    "url": "about/index/index.html",
    "revision": "fc0972ebd3662c01e928aaf8198d4105"
  },
  {
    "url": "ai/index.html",
    "revision": "8b79a47cd8cc80d4d807763fee7e6c4d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "807f08b2f8bd13a2ac3ab8c4c0bcbbf6"
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
    "url": "assets/js/100.d1b1151b.js",
    "revision": "6b76e6632815fd58288ab09e8e0362a0"
  },
  {
    "url": "assets/js/101.925741a6.js",
    "revision": "d8d7e506fc29ca4206e52dc65eafaa52"
  },
  {
    "url": "assets/js/102.869153f7.js",
    "revision": "27cbc32b8ea427dcc9e8ab8a9ac2fb11"
  },
  {
    "url": "assets/js/103.e6f42258.js",
    "revision": "18ba9d590480b449b51e02985b80a360"
  },
  {
    "url": "assets/js/104.aaff3dfc.js",
    "revision": "e910c45ff8c92543f6f5cf1fdef11b0f"
  },
  {
    "url": "assets/js/105.cac2f4d6.js",
    "revision": "8518eb6034f31d0d49193071f42de28f"
  },
  {
    "url": "assets/js/106.2841b1de.js",
    "revision": "6762161be007421c6f3a4b66fbc9cabf"
  },
  {
    "url": "assets/js/107.e64eb4c2.js",
    "revision": "c230fa9b25d5632310a80ae7c3cb0456"
  },
  {
    "url": "assets/js/108.f58fd12f.js",
    "revision": "238e0cca04b8ffa12569ad307776f0fb"
  },
  {
    "url": "assets/js/109.1cc46633.js",
    "revision": "2c4482cf881d4d21c3c6d84223e3f025"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/110.06c45e46.js",
    "revision": "87f95bc6d0bd9bdabbfd61938f9c9904"
  },
  {
    "url": "assets/js/111.298fe6d4.js",
    "revision": "ad374abe3aca4fe29e64f860338c10b2"
  },
  {
    "url": "assets/js/112.25cf32ae.js",
    "revision": "dcf32f65841fb9350498a6ac35db72f0"
  },
  {
    "url": "assets/js/113.e9146c50.js",
    "revision": "82a27d69fe8f8dc4265daf2be3557bbf"
  },
  {
    "url": "assets/js/114.5a884699.js",
    "revision": "2ecaa8f8ea8c0bb110c07b6974a114e7"
  },
  {
    "url": "assets/js/115.b2cfe1a4.js",
    "revision": "f8e7582b28e4ac3291baac7cc88e3071"
  },
  {
    "url": "assets/js/116.eef9b120.js",
    "revision": "8c75fca38d280c56344b1350968e1967"
  },
  {
    "url": "assets/js/117.d190807b.js",
    "revision": "fc64eaecc788b03f1b09c9a8dd8c5dd1"
  },
  {
    "url": "assets/js/118.9ed66940.js",
    "revision": "31289bbed3cf82c6138a64c3b86e426d"
  },
  {
    "url": "assets/js/119.05063f4a.js",
    "revision": "33c26aeccf45c85aadcf6fa547185dd1"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/120.0187b45e.js",
    "revision": "19f935c63920dc6be83ddbccb7b173c0"
  },
  {
    "url": "assets/js/121.a880ce33.js",
    "revision": "1913bb89ddeb108ca1a389c163812afc"
  },
  {
    "url": "assets/js/122.8eda6edc.js",
    "revision": "dcf82f2a9152d43a22acd5ce9a711edd"
  },
  {
    "url": "assets/js/123.06743a9e.js",
    "revision": "8a7dbe85399b639e05bafb8d2560ee6e"
  },
  {
    "url": "assets/js/124.f42efee5.js",
    "revision": "085aa53ae9a1051d9f48d227927f341f"
  },
  {
    "url": "assets/js/125.8f727317.js",
    "revision": "470e722f7b88d479cce2a36d4c431ef5"
  },
  {
    "url": "assets/js/126.08f747d6.js",
    "revision": "8e01998c2d782df9fb0e5e3872349a67"
  },
  {
    "url": "assets/js/127.d3ce9f28.js",
    "revision": "b360efbe92400606f315dd7e1a545925"
  },
  {
    "url": "assets/js/128.29a08965.js",
    "revision": "7ee1d67c0c8a95a273cdfcacce72262c"
  },
  {
    "url": "assets/js/129.c185ffa8.js",
    "revision": "a9b9e92ee9ed66f4e2cd8bfd25e91178"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.003663bc.js",
    "revision": "1cd8efbe68df1b3659b82073025fc602"
  },
  {
    "url": "assets/js/131.1b9ae579.js",
    "revision": "8e19ce78aea3b920db379c6f751d04d3"
  },
  {
    "url": "assets/js/132.ec2973dd.js",
    "revision": "05917c8b20612dfa89d24cf96eadc4cc"
  },
  {
    "url": "assets/js/133.20c3e7dd.js",
    "revision": "b230d49f3a3ae06307928d2cecd16833"
  },
  {
    "url": "assets/js/134.1253730c.js",
    "revision": "fd550ed38ad754b3902af00a9588a4b4"
  },
  {
    "url": "assets/js/135.2de6a21b.js",
    "revision": "ebbf2f2e2bf95220c9eb642a54e03878"
  },
  {
    "url": "assets/js/136.9333054f.js",
    "revision": "2d4a91ce889e1e5598558821f081303b"
  },
  {
    "url": "assets/js/137.92c8c5e7.js",
    "revision": "489c19e761bc17b01d98650aa071edae"
  },
  {
    "url": "assets/js/138.ee7d8f22.js",
    "revision": "d3eec1e3b1701f4b4fbfba10001e7bbb"
  },
  {
    "url": "assets/js/139.62fc2594.js",
    "revision": "6a618b83abe6301bbe9c8b4b31884060"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/140.c64d23fc.js",
    "revision": "e97bc629e22f030d369755f69f237f93"
  },
  {
    "url": "assets/js/15.8fef25b9.js",
    "revision": "590266b039effecf37f6a0110ec3bfbf"
  },
  {
    "url": "assets/js/16.f89849c9.js",
    "revision": "23693783f3355ecf4db7a506504e15f1"
  },
  {
    "url": "assets/js/17.12cea87b.js",
    "revision": "6fcc657469e57453ad0e9a647b72cb0b"
  },
  {
    "url": "assets/js/18.1736faec.js",
    "revision": "377e7c50dd84f74a4ec01fa04e1d6aad"
  },
  {
    "url": "assets/js/19.c87e256f.js",
    "revision": "de9b442b63e0d275cfe1fe60dfe35e64"
  },
  {
    "url": "assets/js/20.8d93a411.js",
    "revision": "b208555257c4e6839b3eee461090c2b2"
  },
  {
    "url": "assets/js/21.29f0a307.js",
    "revision": "ba023177649a558e72993b0d8e88e9f6"
  },
  {
    "url": "assets/js/22.e9e0472f.js",
    "revision": "3f886781040445b2ef9fe330cea1b147"
  },
  {
    "url": "assets/js/23.91a4c8fa.js",
    "revision": "3394c21e3fae89027000f8d9ed65ced8"
  },
  {
    "url": "assets/js/24.c674e2e1.js",
    "revision": "46c72e64584e4421b84e195610eaf85d"
  },
  {
    "url": "assets/js/25.d7199ead.js",
    "revision": "ca97a9754f9a54eebf772c95855ff6ff"
  },
  {
    "url": "assets/js/26.9b223ae1.js",
    "revision": "7392355af61f204e4b2edf4ed97088d8"
  },
  {
    "url": "assets/js/27.263ca047.js",
    "revision": "da34fa8fc63dd42aee8cf648c0ea28c3"
  },
  {
    "url": "assets/js/28.052622f8.js",
    "revision": "e78de3fbeab8bd23cf4fa6bf29ece086"
  },
  {
    "url": "assets/js/29.e2080783.js",
    "revision": "d014607d6e2f0682b80900ea3592ca9f"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.1421ae8d.js",
    "revision": "322d5212beff73ad502492c1e3ab946a"
  },
  {
    "url": "assets/js/31.d67f9836.js",
    "revision": "9275895e4bf9f3dd73f1c146592260a6"
  },
  {
    "url": "assets/js/32.5426f591.js",
    "revision": "451f6013b0fc20b6785b1946049b41fb"
  },
  {
    "url": "assets/js/33.eccf569f.js",
    "revision": "fd818223efe47f2845477eb1f4148bc8"
  },
  {
    "url": "assets/js/34.75832252.js",
    "revision": "156a954491999489caed963c5f3d13fc"
  },
  {
    "url": "assets/js/35.43bead9f.js",
    "revision": "cd57561867fb05efbe3422fc20321cd0"
  },
  {
    "url": "assets/js/36.898079a7.js",
    "revision": "ac7547433995eab25fd14be972b15742"
  },
  {
    "url": "assets/js/37.50755570.js",
    "revision": "ea8e736162f1a05908860370c41e7e52"
  },
  {
    "url": "assets/js/38.f55b201e.js",
    "revision": "d18e46e57950f77094d6dfcc269ad508"
  },
  {
    "url": "assets/js/39.f9a31bca.js",
    "revision": "88b50da59806fa949985866385322d86"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.3f6932ee.js",
    "revision": "436955126c1ab54cc3d1b1dbdce025e7"
  },
  {
    "url": "assets/js/41.27b9acc5.js",
    "revision": "50a0cb5347f4700082e3df190eeb22c5"
  },
  {
    "url": "assets/js/42.f02bc052.js",
    "revision": "3e021e4857140a1c9275e0a574149d79"
  },
  {
    "url": "assets/js/43.a5cfbc16.js",
    "revision": "72f5b553fc72f2a705b4f01fdf38c315"
  },
  {
    "url": "assets/js/44.165c4c2e.js",
    "revision": "874fce4d4f94ef453d2bebf265eac208"
  },
  {
    "url": "assets/js/45.328e6a6d.js",
    "revision": "011fa63fee0918211c3226042efdfb42"
  },
  {
    "url": "assets/js/46.93b1c5a5.js",
    "revision": "f427a79669fbb6f0d4109beccb783fba"
  },
  {
    "url": "assets/js/47.3322c253.js",
    "revision": "758eada3d67c199d13845a412d99ec10"
  },
  {
    "url": "assets/js/48.6c457bf9.js",
    "revision": "0de4f256e18c62cfbb7977e922f95586"
  },
  {
    "url": "assets/js/49.6a6be7a5.js",
    "revision": "2e0ae52800cfb645a3bfbd5520ea142a"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.91104ae1.js",
    "revision": "9ada6b8f4c4a88808cd92244f60281ce"
  },
  {
    "url": "assets/js/51.f03a49f9.js",
    "revision": "adfd0a3c8d017e5766fe6ddaa04cb028"
  },
  {
    "url": "assets/js/52.2b1111ef.js",
    "revision": "3d22204b6c35ba05adf8980c5aa2567b"
  },
  {
    "url": "assets/js/53.aefb21d2.js",
    "revision": "b479fcfdb3991d0f456415afdac65f1f"
  },
  {
    "url": "assets/js/54.e1fbf6b3.js",
    "revision": "00f3fad1700dcd9242a4b3b3a48c01f8"
  },
  {
    "url": "assets/js/55.d8df2c25.js",
    "revision": "3dde59492056ec36910b30be7818d972"
  },
  {
    "url": "assets/js/56.e55f54dc.js",
    "revision": "fd3f9ed505ceba07908b72bc0dbf8600"
  },
  {
    "url": "assets/js/57.9fa71dc4.js",
    "revision": "b30514a063a26fb87e4fb83e1607e6b0"
  },
  {
    "url": "assets/js/58.61abc569.js",
    "revision": "b04ba9b060f8dee8c5dcf95ab1e17cb2"
  },
  {
    "url": "assets/js/59.27a66539.js",
    "revision": "f132b79afac18dd96d81c212c079c967"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.b06d55fe.js",
    "revision": "272306efab2eafdbac3d2f23579e2ade"
  },
  {
    "url": "assets/js/61.c98adb62.js",
    "revision": "d2bb39ed02bef5d81896837e9db976ae"
  },
  {
    "url": "assets/js/62.0ec3e2f0.js",
    "revision": "22f961ea955e15c2adfc2bf455f2e498"
  },
  {
    "url": "assets/js/63.f2df63cd.js",
    "revision": "bc72eebf1ae123dd83e553a01ef99714"
  },
  {
    "url": "assets/js/64.c3b70501.js",
    "revision": "ba010c17916315a244818917d9eca75e"
  },
  {
    "url": "assets/js/65.5772b8b4.js",
    "revision": "d9272f5303fef5220f06933a71d7f72e"
  },
  {
    "url": "assets/js/66.5cae30e3.js",
    "revision": "b8a826a3d0da51ace71126ae857dc04d"
  },
  {
    "url": "assets/js/67.aaa23246.js",
    "revision": "fb9807fe73406748229ab2be3a946893"
  },
  {
    "url": "assets/js/68.4eb2dfd8.js",
    "revision": "b60f6d8249c91a26d38482c16542451b"
  },
  {
    "url": "assets/js/69.dcb05039.js",
    "revision": "face85a58852c24cbc6958a5bc258fa1"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.8789e3f4.js",
    "revision": "0ee0cf6c91c1c32b93fac42eb0c9dd21"
  },
  {
    "url": "assets/js/71.7bf1b46b.js",
    "revision": "35bbf05e2d5b7e751a82023e0621dde2"
  },
  {
    "url": "assets/js/72.599a5098.js",
    "revision": "6a84aac906c6ca8095c23bc58576c3f2"
  },
  {
    "url": "assets/js/73.f10c6937.js",
    "revision": "973b63d40d218c1a38376ce2d4142947"
  },
  {
    "url": "assets/js/74.653ec75f.js",
    "revision": "3ee535916fba2cfad656e6e3b681b1d6"
  },
  {
    "url": "assets/js/75.fb91c557.js",
    "revision": "6c4722685c5bdf4856c74d089565a39c"
  },
  {
    "url": "assets/js/76.f0446d93.js",
    "revision": "b593129e674d0c50f748c0fe496557d6"
  },
  {
    "url": "assets/js/77.5ea41a6a.js",
    "revision": "7284df7b57aa692960f7b9e56120d2ca"
  },
  {
    "url": "assets/js/78.61dd93df.js",
    "revision": "c2cc2a21552fc6e205ecaf949369bdff"
  },
  {
    "url": "assets/js/79.6f057c53.js",
    "revision": "a3542d4473085cfcda52613861c59dea"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.f5a01158.js",
    "revision": "879f214c22f7e177cac0ff6e125b7ba9"
  },
  {
    "url": "assets/js/81.0c0b8302.js",
    "revision": "b655d3e0c51b192cef3b858cedc8e23c"
  },
  {
    "url": "assets/js/82.d18b0020.js",
    "revision": "54ff0aa3249b8dc7512351aa376a1af8"
  },
  {
    "url": "assets/js/83.111d0e32.js",
    "revision": "d88ea14338ec1bf82cbdfe7fb2a0a323"
  },
  {
    "url": "assets/js/84.300fd826.js",
    "revision": "7eae6489445229519980e8bc806f57d0"
  },
  {
    "url": "assets/js/85.96cbfab2.js",
    "revision": "fa01417c19995822a45d6cd9cb05fe8a"
  },
  {
    "url": "assets/js/86.8445385a.js",
    "revision": "2a1163b58097397d619c9a682ed35421"
  },
  {
    "url": "assets/js/87.d5d1e4f0.js",
    "revision": "5eb63b58f6f6f44074c18162d23bfdaf"
  },
  {
    "url": "assets/js/88.daf468fa.js",
    "revision": "537b5bb6d789086da2fa4e0e64bd44b1"
  },
  {
    "url": "assets/js/89.42bb92e8.js",
    "revision": "45cb793058ad95cffe9a70b5756d4a80"
  },
  {
    "url": "assets/js/9.8b7b42bb.js",
    "revision": "b09f693064ee912dba1bcdcaa52fc213"
  },
  {
    "url": "assets/js/90.e11a6278.js",
    "revision": "4cfe6483711866f0e6f9519f9360bba9"
  },
  {
    "url": "assets/js/91.cf782c69.js",
    "revision": "c0bac66cd7af957eb4a5ae2228e55782"
  },
  {
    "url": "assets/js/92.b8722096.js",
    "revision": "f8bffc328c3918184a1ac6aaf30f10f0"
  },
  {
    "url": "assets/js/93.f9ea62cf.js",
    "revision": "89d94d53090ba5ddf48615fd21f57b19"
  },
  {
    "url": "assets/js/94.4b0ed3e9.js",
    "revision": "246bb84b91dc94c1bb315545b9b8640f"
  },
  {
    "url": "assets/js/95.fe2940b4.js",
    "revision": "7ec7134071366ba87f52aadd2ffe4815"
  },
  {
    "url": "assets/js/96.4ebf8a58.js",
    "revision": "3f4a9ed3d65599ed9938fce9eb202bc2"
  },
  {
    "url": "assets/js/97.7a6c5bce.js",
    "revision": "82258336961ca30084d3da040a041d04"
  },
  {
    "url": "assets/js/98.765ba634.js",
    "revision": "0191b52d501af597f675d1b79a01199f"
  },
  {
    "url": "assets/js/99.5d04d893.js",
    "revision": "a7459dc1c85869ae84dc04da628f892d"
  },
  {
    "url": "assets/js/app.ed157777.js",
    "revision": "ab1636f2565b187f4755a3925f79cbfd"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "abed1dcc91cc693fa0c8abd92cf6ee2a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b9a0856ce81889d5473ed3f9588a45bb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "0bade05dd74a7dcf8159a268a26293f9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4d293cdd70ddccc470ccff1869f44633"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c9fa10b2c7c5dc005ebdcb8095b92f20"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "dc56bbd768f4ec15fada3339556084bc"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4f2f2853702a7e7fc9180e280f07b46a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "8a3c9b3eccb0b0fa47e10bb0bc9323d6"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "86c93815d7dd41932bcc4198193b4cf8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "006892e52c48883f7c080d97b5d11ef8"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d3cd969fff03b1145ba88337be8403f8"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "a1e9410744d65e6a89237be06e8f1fc0"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "a0097ebc57dbec3cdecc8093858d3722"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "d730c4969c7facd3c66288fdc13cdf71"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "7d9781e0525c92588f2c17c746c66b42"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "c08f19a0bc82e8ad12556d857ff5b6fb"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "17d6b1aeade547d7de43c5d10ae0073f"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "08c8d43894e6dcd753b4b069afbe5d88"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "73ca81664e0c2f565454d80962b1873d"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "ae68e20976f47b6e8ce9445ac51a21da"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "fb419f3b45ac58d0477b5df7cbab3b63"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "892664296981d172a91c9deb68ad39dd"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "57b1e313b0c0491edd9a6da043ea89cc"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "151616770a4fadb11f94c9a027e7175c"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "8bbb7d7d5b537f3a9ad04a13f5629e22"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "6a672939ac8107f8e003cc56fb2b8a7a"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "0da1219089bfcedc8411d4c8f656ffcc"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "d02eaa37de30449e974cbdfbbf843e74"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "9a56ecdc2d494ea77eb0db0a88d32750"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "9add4ad1c852d66c87aeb50db851dc10"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "2d929f46415eff38b43fca0fa7dbb3d6"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "1c9adc5e040384238ba65daf50d93c01"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "c0145db4c41d90fc5234a2e14a53853f"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "8061350e9b3110b1e7a0cb671caca346"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "6a00a031b6789e0c4b8678d74418f79b"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "c27d5b5df8f7541ed15c01f082975c35"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "db31d06d4e3ff00f1af243799fb6edbe"
  },
  {
    "url": "basis/design/index.html",
    "revision": "02b9cef029dfbab8a8166b9004b43fa9"
  },
  {
    "url": "basis/index/index.html",
    "revision": "cac6bf26dcc0a24b7be38bede0c19008"
  },
  {
    "url": "basis/os/index.html",
    "revision": "845905a7091669f3598f80eacd36b950"
  },
  {
    "url": "book/index.html",
    "revision": "8ca4837acca54fe0bbf55432486a9e4b"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b23a742cbac824f5f95490dbc3350ec6"
  },
  {
    "url": "categories/index.html",
    "revision": "b1490ac80259167e8f5ad62f76ab267f"
  },
  {
    "url": "figma/index.html",
    "revision": "9b55dda3336b6f65ae4e42bac98248a9"
  },
  {
    "url": "flutter/index.html",
    "revision": "040857dca1d03db924928de473b8d7c3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c4e8d4a34f8ef39c63d0323f0fff2ee7"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "aaa7ef6ee15a0dc09a220beba5c13f08"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4d4b05ac8c0b593ed9df7c282a523fec"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5a45c5d835b0c190ecae01f870df4c66"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "28ab34e16ae91f79584c6e313ca01dd6"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8f7e8e7b5fcb6687f8dd215bbce1b7f4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ed09b7805d5b925756e8e3ab76b3ca94"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "f337485545bac66084d89494308ef7ac"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "12c3ced920be6c5055d2cf19f8dfc1bd"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2899e3036b806059b192e902496c3e3f"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7456850d7a1046bc433f7399c94c52dc"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8bcd60c76036480f83a54db94b8b4e40"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b0ee2c99fbfc1d780b8906904da2c5d5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "05111e3933c78545b181a39dcd312288"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "cf8dafa8d2eb43b3886fd26584b7a29f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "49502370cc76ef8811742b8886fcaaa9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f0d65bd902625fd17bcbf6af94535bad"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2b708e53520cd1ef694b6a44aa9cca85"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cb27f09b669c481ceb6204999d0167ff"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "cb7a22b9a2c9560fc121088c7af7a7c1"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "9cf375b03701eebe0725f5cc629436ba"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "98ca454145a066af9591e4672365feb0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "89a1b0d19d11911ea3beba5474422240"
  },
  {
    "url": "haskell/index.html",
    "revision": "07c7e66887d62e9d0fa1358001f1755c"
  },
  {
    "url": "index.html",
    "revision": "022e80e304916f5dfac6252b41940896"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "2bffb2bed211e075682c9843abdb8ccb"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f53b029b6467b5aaea213ab6ea7b0f36"
  },
  {
    "url": "python/index.html",
    "revision": "0912a3e477bf63e5e905a9287d15b73a"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a8878c074fbb6ad79956a7ada8f46581"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "23aefe5e2771ffc87bb412565545b857"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e38777f49ec74c73d13c88e93e344317"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "abf80ff62870222230a0392e8f62bd03"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e0e5073e463fdeeb15453c3c739361d8"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "39bc8e090f338378785112894bcf298b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "6759b88256eb31e90a8713f4e328e97f"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "67191b998ffaa33991e9f50d9421ed65"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3a70e9918f9529cdac088194178200ba"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4a26da39f20cb2cefbe4b5fb0c43dc9b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b3439dd35bd0518e0c60234300479dc5"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "580fa81bb8c075f80a61980d1c521733"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "5cd3c7ce787193e6ab149529b62b5057"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "473e1e4dace01d8cdbd4217a2f7f9184"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "d95b9e6a262763f31318edd3f4325e64"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "22a8d47f080a5a386bbf520eab11fbb0"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "4318268ecea4d26223069efde576a643"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "75e406e54323ac89ebb89840145b064c"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "93001b2144d098920e3e2bdc51c0220c"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "663e45a6d07bda6890c5c1c81b609253"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "82488253b8cbaa99060588976b8f6e76"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "ad1a338c0315791e2399c543d0ebc81c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "73e8e3010d9071b8c190e360b5ff5ccf"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "05bead1427c3364387878e1bd80fb272"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "89be3a8bbc7b65c61eed94df0277806c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "364d677ce3ee62d8eba63dbacfad43ab"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5fab7d597f1dca52a94bea4bd27f401d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3de74bcbac035701ba23f25437047161"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "aecdc5b846d09deab113877836e443e0"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f700348da3fbcedb6bca730d89199f35"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e666ccfa60bb8daf8842fba1029182ce"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ac853f861a4705a4fa9ea63c3352c44a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "bfc7167220af57d78e9056ec2888fa5d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a4594291447560ac9ad150d5cde32504"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "63c69c416197c5def9abf8fb9c77f345"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ad450d2b6d769cb68c1a5a0039fcd137"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "750b87511150057e8376f4137139805d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a8cd2ebc7bfb4146143c84890f862f46"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "43f9706febc070366206dbdb6bd13369"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "655d09a3b71f2a9f1e4ca8987506d6ed"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e2b8d9eeae06d1501fd026128eff8aee"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5248f45a2684ed153a97b7d43ad0dc12"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "55d6370643a361e3d34370985984874c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4f17aa9b878b19dfcc309f038ecc268e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3086d9d358ca59db56ea495b924d864a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ed00431c90b832d30fc83f046f53e856"
  },
  {
    "url": "tag/index.html",
    "revision": "0a96cc50b5d83edc23b9b21632c64d7a"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "7b7822e897f81de3013811e16618261c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7055d51a8b9553700bb5e8c6e64c9226"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "fa43797096cb0dd1f860894a588e1748"
  },
  {
    "url": "tag/python/index.html",
    "revision": "938aee64e8900535bca6d0f385c1961c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "614327f03d13c60c8e4c229ae481c7fe"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e47300bd190af802ce758571d8a3074e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2245bc9074935a8650ce7af96205aee8"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "760ec6050709d1a2c0f5ba95eaf433d2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2cd55570b6a2e0f29249561dfab62679"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ba9c6b0858313d24f3097cc05b51b82d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "69c484e42a74a3c67d935e5a085d61c0"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9e47b5b92ed850b4ee58318090848081"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "359453924492d7958009c935091af4ed"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "24b3c516315d2423139617381720ea69"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1573c1adbcaceae3dbb3f2e2402ffb0a"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2f752cc47a6dbeb69f686c7309595a99"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bd5afe18b570f605e4b59e8445519690"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e8b03e618a847d7dd046c023adcc6940"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a914225af3fd87f0701be0ee32f0e8a3"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d09e7ff856cc5a612ce5697679165454"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bb07370978c112a293e823128d567ada"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "90456cdedbcd72fdc632c389372b636c"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "37ad5fd7afbe8de5649a07bc115494c4"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "0d6dd0e930561fea85b98bb5e6993e8d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "32a1b9061cacb287f4b7e9d642f31bd1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "cb3c33a323befb07f4a5f1d6c47f0949"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "cfbe892855c10f51f3ca614d11cf0ea1"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "de98976d18eccf92035c8637026d7121"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3cd4cd1d1d31d09cf399896a94cb8e91"
  },
  {
    "url": "timeline/index.html",
    "revision": "e3106b3ec4d408731162f0ecb41f336c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6f336f84de6fff90fa6876ede172e4be"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a969c7ab1c60636ee426415ca39be75c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6015853cc77bbc1f90c9cc5c37491fe5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4356dc51fe137e5770c35fecee721fa0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1c62855790b15f1e2c71d151332a42dd"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "591b2fbde90d6a14f969de7d3e3177fb"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "b16ed322efa3171b3933ccb6642a8314"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f42a5e0cf83fb700a480461c134902b7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5c0b16ab2d1f54b216a4c8ff41739f68"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "710ad51f4661ae86ba003f9e1986285a"
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
