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
    "revision": "69ace11674e29cd700a88ad620c600c9"
  },
  {
    "url": "about/app/index.html",
    "revision": "6428023a62148c3dda06870d40016dfb"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cc19aac44d47a97d81f8ae36c64a8a4b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3171c95dc3a55903e0b889e15ce52a88"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "5438ac0ab97902a31f74dc1dd7f6f81b"
  },
  {
    "url": "about/index/index.html",
    "revision": "713e5c25370afe653dbf2345b1bc886b"
  },
  {
    "url": "ai/index.html",
    "revision": "5deaa2eeb8f8e8fef62a04de5478066d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "28c2b7df5fe178a032cf4e776c2d01da"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4399cd74.js",
    "revision": "e32ae38706e904b30decd4a30eb3d2aa"
  },
  {
    "url": "assets/js/10.7f9aeb1b.js",
    "revision": "57b437322ff4bb881a560f33e5dadc7b"
  },
  {
    "url": "assets/js/100.adafd71e.js",
    "revision": "480e0962a11ff8cfa3dfd176db68c952"
  },
  {
    "url": "assets/js/101.ce943923.js",
    "revision": "c4dd5d46fd2bca7ce9129349e67e679c"
  },
  {
    "url": "assets/js/102.f4c5f259.js",
    "revision": "9a23c8d57a2134a17675b8fe91a36e46"
  },
  {
    "url": "assets/js/103.0723d15f.js",
    "revision": "8fed3d566803277c847d0ea7b80da6c9"
  },
  {
    "url": "assets/js/104.6427ab06.js",
    "revision": "3a44a2362c0437e9079a816ae4904888"
  },
  {
    "url": "assets/js/105.26bc9131.js",
    "revision": "660a7cb6061855f9b6e5dd240e9a0b8c"
  },
  {
    "url": "assets/js/106.467ae6b5.js",
    "revision": "63f215156225ba7dfad622a6db1d292f"
  },
  {
    "url": "assets/js/107.2dcd5659.js",
    "revision": "8de17256f84c9c047a32888aeae77c9a"
  },
  {
    "url": "assets/js/108.da8b7656.js",
    "revision": "b56aa67931636f7642ac8711f2831181"
  },
  {
    "url": "assets/js/109.8113115c.js",
    "revision": "d3ce23dc7ae70ab6d5cdccc04c182d11"
  },
  {
    "url": "assets/js/11.7944bcf1.js",
    "revision": "e81e962cb37d3b314b5eb139fa80b411"
  },
  {
    "url": "assets/js/110.901cd2fd.js",
    "revision": "5d75d3691a27bbbb9ed32b380dc15f62"
  },
  {
    "url": "assets/js/111.abb1d859.js",
    "revision": "21b4aab6be32c166d10b9829e0de8b37"
  },
  {
    "url": "assets/js/112.2556f72b.js",
    "revision": "e89bb0f8645647d6e390d7ae3d716f24"
  },
  {
    "url": "assets/js/113.6fb272e4.js",
    "revision": "5fbbdb1051efb292942f6d478176b387"
  },
  {
    "url": "assets/js/114.0fb537f5.js",
    "revision": "403971d771c7e6e10717bdab2c1d173c"
  },
  {
    "url": "assets/js/115.4acf1e22.js",
    "revision": "c601aff171eb5cecc86a2f3087b55094"
  },
  {
    "url": "assets/js/116.84beb57a.js",
    "revision": "4a6004ebe4619eb7bd796b946b84fd85"
  },
  {
    "url": "assets/js/117.e2a0c3a8.js",
    "revision": "0a68d7fdeb42327429b580d8a6792d5d"
  },
  {
    "url": "assets/js/118.f98d1712.js",
    "revision": "d9355f79e189d29f0d45a676463af9d8"
  },
  {
    "url": "assets/js/12.8a4ac429.js",
    "revision": "1972b21ae985326389ef46cc16cb4d00"
  },
  {
    "url": "assets/js/13.ae0c6859.js",
    "revision": "1c48b1f6c4b67bee0d3df9af1d34a3dc"
  },
  {
    "url": "assets/js/14.83ec35f3.js",
    "revision": "1f46eb9110d72b48f678382deff4e2f1"
  },
  {
    "url": "assets/js/15.108cbf52.js",
    "revision": "250f07323fe11ffab702162454bef188"
  },
  {
    "url": "assets/js/16.0511976e.js",
    "revision": "9cf0126e432b3fb0d73ac013db962475"
  },
  {
    "url": "assets/js/17.4265d35e.js",
    "revision": "57b45b727e73b03509afd98dc382ac2a"
  },
  {
    "url": "assets/js/18.9941b179.js",
    "revision": "fa371ca59f5031f9f9596d4dfa831c10"
  },
  {
    "url": "assets/js/19.d76c3f75.js",
    "revision": "bcd4944aa833aa26db5adba0af7df1b4"
  },
  {
    "url": "assets/js/20.a82f8e49.js",
    "revision": "a4112cf737e213f1ea1594b4fe9a170e"
  },
  {
    "url": "assets/js/21.4d8045d5.js",
    "revision": "b83094e4eefb0529836fd255c3e78efb"
  },
  {
    "url": "assets/js/22.344067f6.js",
    "revision": "007207b9a25c185a40bd0b8f2d0a398e"
  },
  {
    "url": "assets/js/23.1ccb7d2f.js",
    "revision": "c0b9c4d4a7e6b1d10b7343a1f8d1b1bc"
  },
  {
    "url": "assets/js/24.33f4ffea.js",
    "revision": "1ef2f6dab573ec9f60b67d6c2b30b87b"
  },
  {
    "url": "assets/js/25.b2374206.js",
    "revision": "fd03c3d5233aba673acb35a890604203"
  },
  {
    "url": "assets/js/26.72d83eb5.js",
    "revision": "e8f94e96c4872387ec2dbbcacba6b66f"
  },
  {
    "url": "assets/js/27.c469c454.js",
    "revision": "4b331c4c09881b87d51c4578fb90f59e"
  },
  {
    "url": "assets/js/28.97fc868c.js",
    "revision": "65af17b668a5aa2e22c849da151931c9"
  },
  {
    "url": "assets/js/29.b9337f41.js",
    "revision": "cfc2f2787591251ba203669b28c7a53b"
  },
  {
    "url": "assets/js/3.668e4ee8.js",
    "revision": "8dfaaa4f8ae6d5af68ec1ba5733b1167"
  },
  {
    "url": "assets/js/30.ab45821b.js",
    "revision": "8b85afe8d63cc894dc9afbfbeaa510f4"
  },
  {
    "url": "assets/js/31.d008f168.js",
    "revision": "e0b8142c54a155f7e732bc55eb41a698"
  },
  {
    "url": "assets/js/32.f92cda73.js",
    "revision": "f30c739016cb983712b487f2366e1024"
  },
  {
    "url": "assets/js/33.c05bb8fd.js",
    "revision": "e623544af7b9d297dbf2ba45b0b4b810"
  },
  {
    "url": "assets/js/34.42d59c32.js",
    "revision": "019a9e484bc215637dd4c5655abf5369"
  },
  {
    "url": "assets/js/35.d5494030.js",
    "revision": "f479290aba47399c99ad408e1be8db1c"
  },
  {
    "url": "assets/js/36.3029c235.js",
    "revision": "0adce94accc69271e7d6bd6edb9f67f2"
  },
  {
    "url": "assets/js/37.40f27489.js",
    "revision": "29749b84ffb6173ff3bcadc694c5e9e9"
  },
  {
    "url": "assets/js/38.8e92cdfb.js",
    "revision": "a48fd7d79f6381e4747c63f840e6fa43"
  },
  {
    "url": "assets/js/39.6d65f1de.js",
    "revision": "3c7b50d08c94740344201eb7d5f4f899"
  },
  {
    "url": "assets/js/4.1df20184.js",
    "revision": "06558f4bcf057bf6df6b6e501c558e32"
  },
  {
    "url": "assets/js/40.648119b2.js",
    "revision": "49a738e2a64965af447c3392b9e4fffb"
  },
  {
    "url": "assets/js/41.e0d8d575.js",
    "revision": "3e82742598614bb88a3949e11932c4e7"
  },
  {
    "url": "assets/js/42.c9ac2395.js",
    "revision": "7ce967517fbc69dae0a8342d2604d057"
  },
  {
    "url": "assets/js/43.730b9134.js",
    "revision": "745cf73c17dca48e8b26093a6bb6311f"
  },
  {
    "url": "assets/js/44.1ebc07a9.js",
    "revision": "598c316864eb887d7cb682426241d74a"
  },
  {
    "url": "assets/js/45.03f90919.js",
    "revision": "0e71ae025cde08e5ee5fa99049d6c445"
  },
  {
    "url": "assets/js/46.0192ea5f.js",
    "revision": "66166931ca6d9740474c5b64e010ffe7"
  },
  {
    "url": "assets/js/47.eefafb52.js",
    "revision": "205785d1da80b69bd45d0df3ff770bba"
  },
  {
    "url": "assets/js/48.11fe078b.js",
    "revision": "c8face725ad9200f790c234d030fd25f"
  },
  {
    "url": "assets/js/49.b6e0f106.js",
    "revision": "a0e797404826ac97b6491ea4aa914da4"
  },
  {
    "url": "assets/js/5.f2af34c5.js",
    "revision": "b1e083468c4223e2bc38dceb99a12ea8"
  },
  {
    "url": "assets/js/50.21b0df7a.js",
    "revision": "354699883b7f70f0de806e9034126fdd"
  },
  {
    "url": "assets/js/51.2ffad108.js",
    "revision": "1daecea929add5da4746dba1ec4f8b49"
  },
  {
    "url": "assets/js/52.cb07d3e4.js",
    "revision": "a34ff787f11ab7b8233d684f1cbb8bfe"
  },
  {
    "url": "assets/js/53.d47ef22d.js",
    "revision": "64e9a3c0e35979873ab90c6dbcdafca8"
  },
  {
    "url": "assets/js/54.83af0d4c.js",
    "revision": "788bcac1b4d043b11973e4c805445f64"
  },
  {
    "url": "assets/js/55.76f26a6d.js",
    "revision": "3e7ef67f71ea65ee935d1b6a5fa57753"
  },
  {
    "url": "assets/js/56.6d9ba85b.js",
    "revision": "41bff67597f10fae996b0080c3bb646b"
  },
  {
    "url": "assets/js/57.148c8e3d.js",
    "revision": "1f8396c4e70b7574f6e5836fff075f8d"
  },
  {
    "url": "assets/js/58.a4c38962.js",
    "revision": "97dd2b5fabf94852a4b0548fbe5b94d0"
  },
  {
    "url": "assets/js/59.d522e96b.js",
    "revision": "6173cf8e185fb195da3e64e156b6cc78"
  },
  {
    "url": "assets/js/6.c23386da.js",
    "revision": "702a13ef4e017030e12b7f4617b6bc2f"
  },
  {
    "url": "assets/js/60.69d5f544.js",
    "revision": "4c32218150ab3be03e2659a5bf67a269"
  },
  {
    "url": "assets/js/61.20e5f719.js",
    "revision": "d9170baafa6904ae9349c613b1d19283"
  },
  {
    "url": "assets/js/62.90ab8b71.js",
    "revision": "473c978d43d93956280885b91e7c984e"
  },
  {
    "url": "assets/js/63.548b3dbe.js",
    "revision": "7329ad488ff900b93e14584aaaa19244"
  },
  {
    "url": "assets/js/64.caeaf3d3.js",
    "revision": "2da32db687ba90cf43199c43d67fe230"
  },
  {
    "url": "assets/js/65.17b5985c.js",
    "revision": "675b53e50b29123d202caf7e101e688d"
  },
  {
    "url": "assets/js/66.819ea3ef.js",
    "revision": "8985ff6de2c5936bfa554f7323405b6b"
  },
  {
    "url": "assets/js/67.0f17398e.js",
    "revision": "a607a97093e73107220547dccfad3e6a"
  },
  {
    "url": "assets/js/68.c6b98a79.js",
    "revision": "60cd65511a19abca427e724863d9787c"
  },
  {
    "url": "assets/js/69.cba6bbf2.js",
    "revision": "4bc038b78340d13e350426389927614e"
  },
  {
    "url": "assets/js/7.cf204011.js",
    "revision": "041dbb9922951686d10db32548be5d1a"
  },
  {
    "url": "assets/js/70.24472725.js",
    "revision": "5a93e4da74febb8d2293696e07627407"
  },
  {
    "url": "assets/js/71.45fb70c9.js",
    "revision": "690212598bc307c7688017c0cd9fa7fc"
  },
  {
    "url": "assets/js/72.7c38b569.js",
    "revision": "41fe8e741380410c8fd8c29311e8b3e3"
  },
  {
    "url": "assets/js/73.b532382d.js",
    "revision": "94978d2fd135d6b2e3a8585b2e04cbf6"
  },
  {
    "url": "assets/js/74.ba94207f.js",
    "revision": "286f23eb6827750378e4be52b9183df7"
  },
  {
    "url": "assets/js/75.2e3931ca.js",
    "revision": "3e9684f39c6e6834969ccc61918c3c1a"
  },
  {
    "url": "assets/js/76.7c8713ff.js",
    "revision": "3e1ee9628c06d0eba086b40287c263b0"
  },
  {
    "url": "assets/js/77.257ea152.js",
    "revision": "f07f1434b0db8480e9733d968e5a6fe8"
  },
  {
    "url": "assets/js/78.bbb05027.js",
    "revision": "11a1c06419aebd37e1a3a3b61c4e2a37"
  },
  {
    "url": "assets/js/79.992a404d.js",
    "revision": "408ba98c2ee04b038e4060ef48b6b966"
  },
  {
    "url": "assets/js/8.ab5c9a38.js",
    "revision": "1afa3fda92e1e845c46f88af1d843756"
  },
  {
    "url": "assets/js/80.ea14c0fb.js",
    "revision": "0e23a1adfc8c69136c2ec36eaf79a1f4"
  },
  {
    "url": "assets/js/81.ce274827.js",
    "revision": "85f0ae2a299f9339ab2eedeae4d9e5c8"
  },
  {
    "url": "assets/js/82.a3b80c91.js",
    "revision": "f02485719652b20f56b583f4189b2bab"
  },
  {
    "url": "assets/js/83.838d7d63.js",
    "revision": "37edf168ca2b2d3310b001c41dc38980"
  },
  {
    "url": "assets/js/84.c9647cd9.js",
    "revision": "b5d4ba1832f0f940e25f154290056619"
  },
  {
    "url": "assets/js/85.9f445db0.js",
    "revision": "17b7165ed582b0b9806e0f2b45e3e586"
  },
  {
    "url": "assets/js/86.eb948f28.js",
    "revision": "d92f5d412a17a5a5fbddeb95bcddff4e"
  },
  {
    "url": "assets/js/87.310d99a0.js",
    "revision": "f523aa4ef14a4ba39dcc0912222b0bce"
  },
  {
    "url": "assets/js/88.8a8ed7a1.js",
    "revision": "824a0f359cc26b4b52b31d9bd7776774"
  },
  {
    "url": "assets/js/89.c109d0b5.js",
    "revision": "97a0a127eb522e8c06e7f8fbcb11e026"
  },
  {
    "url": "assets/js/9.92a376db.js",
    "revision": "77186c1917841566cdf2cf29b222cb17"
  },
  {
    "url": "assets/js/90.918eeafd.js",
    "revision": "f1c11302ffc831909cf46fa5bfc0ebb6"
  },
  {
    "url": "assets/js/91.df839f24.js",
    "revision": "94744d0bff9741318f2312bb12e8ce41"
  },
  {
    "url": "assets/js/92.e6807bef.js",
    "revision": "ea7e52d0f9401931d36eb0a9cd8d5260"
  },
  {
    "url": "assets/js/93.c31c1387.js",
    "revision": "3f0c06f1a14ed0ad307dc7df5809eb58"
  },
  {
    "url": "assets/js/94.83cf47d5.js",
    "revision": "fadf4406077de337450f5c8be275d6f1"
  },
  {
    "url": "assets/js/95.b027796b.js",
    "revision": "dfa602c63a51c16e9ac3e0b4594ffce5"
  },
  {
    "url": "assets/js/96.4d793503.js",
    "revision": "55a17def26d856a3b5536ac1e42d0b04"
  },
  {
    "url": "assets/js/97.672983ad.js",
    "revision": "31890a34d0d8bf7570276ae9f605e7e6"
  },
  {
    "url": "assets/js/98.b2a50852.js",
    "revision": "fb5f6acf26f06a162c97ecf3978f93f1"
  },
  {
    "url": "assets/js/99.b91aecd0.js",
    "revision": "86782928027b9348d8766a10c23c30c9"
  },
  {
    "url": "assets/js/app.36842a73.js",
    "revision": "989d37e998770d563f093356bfee51df"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "fce07780a07cb0f6e1f5042a0710609b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4863f942370c46d1c18e58ad52df05aa"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "4e2b913afcd362c9e1c2bb50d5560623"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1e7c79ed1748e4668285f354441904e3"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "33e6f05e4fce0c4d25ff59d01ecf1d22"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6cff79ac02e6aadddc6dbddf24442a3c"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "debd0535a5f404cf6128fe1ad428ae5e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b069e9c073d7f2659f838487bc8e0aa1"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "742b35e1f473dcd7148469f5a945c3e2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "035d80e9d5459317298440ced6e278ec"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0fcdb72dbdf93fc91dea4889b9f7c42f"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "376b6bb57096921191da53875d46cc3f"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "5b0f5c6d71cedf474f53d60a7722f45b"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "5d64c7165b818198da4641fdb2cf7cfc"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "42a159899a8f24874eb516b19d540364"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "4a73423b9ebc143abd09171f3b24baa7"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "b3e7fde94bbe8de74af8715fc9950183"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "51d2bed84b7c5515b0781955eb66bacf"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "2b9858173869d162efd322c72c65a3bf"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "eeba05b8087e0927e1291d3b67b8f4e4"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "7dcc2f1dc135f3b15779b17795315992"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "e39d3b2b1e24a71c7689cd41a4d8c518"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "8056b34d6e3a00c1da3f0ee92193f98b"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "a1ab3684ce28bda9d71951c960426730"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "70a2c9173b332ce13c9b4b97934b80cb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2e748c09859409c43c645ac89c06a9ad"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f4883e7ccf7043d8d23973a89e9634b3"
  },
  {
    "url": "book/index.html",
    "revision": "e927c7903dbc4a3a525c6e115117802b"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "bd214a010ac42dc4cf288c758ea37297"
  },
  {
    "url": "categories/index.html",
    "revision": "b90e8cfd73a782c2ff8982a8740f0ea8"
  },
  {
    "url": "figma/index.html",
    "revision": "41002bb626223cc9c65aa917831febd7"
  },
  {
    "url": "flutter/index.html",
    "revision": "e23a0b20d0a41c515e487408b2673391"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9ce2c8b1684bb09d88b7a151ddcf0f1e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "85db314acfdb323d9c379f3ef6d944ae"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "ac81b80bfb03e68612c6305df66198b1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4237f9c6a8f3e80450e94aa7e097aafc"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fae1c1ed0f2a1b12d863387212c773f2"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c7c8106865beb5e9afcc1d53a25e4c5a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a511c028079593e6480ddb94e9eb71a1"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "16965e67f898217ce2b1e3fac8c42db7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "8ee06f83a0ffe1fce1a03267d1a49d5a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d6dfa9133314ee2612b92c56e09d1249"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7bd6c05794277d89d23389d98959382a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "ee11886db1623722435961521ff913dc"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b7ec5b09ab160e9dfaf5f36d75819e81"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "a08b00549bf1995a4cc1b004928a2456"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d222ecfbc652e4665b83cb0f36e8b101"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "4577f16f2533ca9100912bf19a555b47"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "397e3530634a7cbd3d7e8b6bf33487ae"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "20cbaf343f625464b591892d5b14acbd"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "6630e34f1f4e4a4fa016490b3eb82796"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "6826ed32dee45b3881226fdf48972c3a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "d6b43e6153e614c24ecfff64f1cca442"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "7475a8930b2a57c9fa41f0cca02129c2"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "060a7c894cd80b88b7e7a4abfe846a5b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "591457cac54dcad520965cb4ddda8b2a"
  },
  {
    "url": "haskell/index.html",
    "revision": "ec7a2908c7b67e3ffd5d4248bb94a223"
  },
  {
    "url": "index.html",
    "revision": "82f2b18accea6422f5e351b3089caed8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "7acebd1827e9d5f9b6b414283d787657"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8e78f5dcd0247873f152e3a5d5cd5ef3"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "60863016bfefb21c4aec0257e9f7b61a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c2af3c7e2d73085a013a2d925960081e"
  },
  {
    "url": "python/index.html",
    "revision": "0dd0ec6e2023f58b8bea780d76b05191"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1a28e386eb972115697e40902cdd72b8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3a8828b7f652124bb0eccb127a5ed5ed"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a37ee47dfb3a7fbe781e855360a4c63e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "165b38585b77ba213bbce872d41a1f30"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "727ddd5f9aed64495119fcacce71e739"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3946b7e95d3a4254f9e69bb4bbe1ac96"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "f5d7329e75e7cd8bf1d9ccfb5362d39c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "3ef9993c51df563a16bfc90ea99a6a69"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1221b3ba34ac0a2fc04cea2a2081e794"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "2001a22c28f5a5623e0f05a4d8985206"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "0f3caccea46ec42378f208f8793f31f3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "05c7097e577288d3795d9698027cacae"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "fa147d7925b190bbbcf326786b1bade9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "90376f785ce0a788e402065bcb81587d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "96bc8733114a7cbdaf80e6dffee36a33"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "78219a56bb9fba5afdd44c2f458fa513"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1ac4ad1a3c6d471486dba763ab1c6384"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a870138d0a32911f96321676aed1becf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "141e4b1b1f513df10500cecb44affbe9"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "28ff0594f927b1011ee36ace46c8018a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "6cdfd0295acc34ee4d78dc3d79035648"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "46f1472ac872f7501e544831f9bd63f0"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fdd6f94ddda9a998845be427a01a2988"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "6c2eb6e6c5ba2a5b5e9a264bfd480b01"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4827123b43db31e430c69645cd697989"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "daad7ed0e59ca2877e14e02951fdb965"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ebbd4fed763ddcbfb8f2e28e9fd24683"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "ab9f04f3afe8b3b76054975bea5b9ec6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e2ffe0443d8c6195bfca0eecdb563b2a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "16ea47e47c637902a8ebe2e80ca51290"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ad95fb1e59488e5520dfbc56f7af676b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "681701c0508c0bfda49ba02a5c71a467"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ff83e9f428e76fa9c9683afc50196cdd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "45d2bce17b4a61f3f6bacbfbdb2edeef"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "faa27c09bb0145cd8105d4f5578b3a15"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9c5adccaf0b60ee18cef6c7ba5b0b20a"
  },
  {
    "url": "tag/index.html",
    "revision": "e0dabc5f0ba1e2b80e541ba41b7d27eb"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bf577e39cba2a35b5dd16c6e5e5071e3"
  },
  {
    "url": "tag/json/index.html",
    "revision": "548783d8b0af115394d3df4bbc2bea52"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "c87db9dae1c469e299a4704856afd9b6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c0d88517de1074a23a9d4396c57e303b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e94e032726bb6255c8fbe3a4ab02cfeb"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "06012566c87a5ab678f077436ceccf73"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ba55bec0782fee2120e477d9bf2109da"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "dc19e60915b15488f9e6a33c66eff020"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "60f342d49cabcefe2881ba53a6aa95a2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "fdf365585fedf82dd0a233df390b89a4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6749303b890ab374c2f86bca895737a3"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "51e3754ec9e23cd6bd2e6ba355d87b36"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "5ff30d5a3cbc8b7ea47327f87f564a1b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "21db089aef3f62ecc0c84b0882a40410"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0b9654b50e54721aeb8e3b7baaa08bff"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8e319eede531d2d72f01d9e0aa17c822"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "6b8aeab8b9e4214289c8e4c8ea446089"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0f881e0308745c0f22f5ec93b4d73ae9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6418ec508ddd2bacf5e8df92dd42bfd4"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c68b7d84fe203f51bf3235a96faf94ee"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "feb8dc0545e6afca0975185fef45e793"
  },
  {
    "url": "timeline/index.html",
    "revision": "a267276ad1b55f72847c592a4d90f8a9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7343dc9bbe08cf434dc9bee845a05832"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e57e27d5f2fd564f43afb22a03d97ff9"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "17bf85180d72fba5bf02d0eedbc1d54b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6a98a6f1578df49fab75eaa35681bac8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e64b17ccfe75e017cedd5d12386c4987"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1d8390dcd67b900a9e682dd39d44a737"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "44d5b4a26d1e1d29303a9240b699b85e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ae6d0f3180ebb4c63271c2fff7a98c9d"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6119da4e26170318491ab99646c40902"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2869bf7328c4897fcce0537664ecf5e6"
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
