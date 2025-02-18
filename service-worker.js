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
    "revision": "f5021830a96f5e7e77fcf06322174d97"
  },
  {
    "url": "about/app/index.html",
    "revision": "062ff53fea53cd6b3b9a8e8bec83f863"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6709e5d0a20e1dde5e1d7f26d5993e22"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c91f6ef34fbd49932a64fee16a71cebf"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "803d3ab24c4a46fef096d340c13152d3"
  },
  {
    "url": "about/index/index.html",
    "revision": "431eebdba8b4e260d2449788eaed562b"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "5fa16ecff2e2ed6996c30610dfae0312"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "3e71b79ce51cc87305e37114f42965cf"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "70fd27180b987341787793c6aa672baf"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "16ac89ccfe6ba1700aebb8fc86f7fb2a"
  },
  {
    "url": "algorithms/index.html",
    "revision": "5b1cce17e851862fc71c85c886d40908"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "081b655d7ef8a562b7916a70412b9d19"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "2538d062035ec593a18771ad23273552"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "cf66b1caa8635b6f6e47f8fc9f097da0"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "f59585366256306cbe701ed106c67ba8"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "9a75eab888119fa956b925134d7fb7cc"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "eb82f48efe1d938fd54f0b17fd07a04e"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "e8e4c7c6d841594018ec94cbdd979352"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "0afdf9d11ae40d0fb47cd084531426f6"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "efeb15c5c3a099261edd69c29ca27407"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "f3f2b189443b9c1ac2737f87b43fdc79"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.67b8e764.js",
    "revision": "4b421dcf5f49b5db37be6329caf64c21"
  },
  {
    "url": "assets/js/101.13eae628.js",
    "revision": "a09dfc4fa5f3c5d0550cd5349d8693a5"
  },
  {
    "url": "assets/js/102.dab669e1.js",
    "revision": "01069221d321cd13ed591888efba4641"
  },
  {
    "url": "assets/js/103.8fa04f58.js",
    "revision": "425537928b00c4e18b2fdecd0d6587cb"
  },
  {
    "url": "assets/js/104.cca1161f.js",
    "revision": "f19bf863b351d7dabeede79916067757"
  },
  {
    "url": "assets/js/105.e6d40fc7.js",
    "revision": "cd1953f8f41d4846d480f680f8b6c2b6"
  },
  {
    "url": "assets/js/106.571ff866.js",
    "revision": "f8b6b73a7fffbc1b7084235ce87934d7"
  },
  {
    "url": "assets/js/107.fc34a3e5.js",
    "revision": "757d5590f5296ce34c37d289294afeef"
  },
  {
    "url": "assets/js/108.0461aa84.js",
    "revision": "990e0081f0e3e2ab3c98328e8c688327"
  },
  {
    "url": "assets/js/109.9d03affe.js",
    "revision": "72bb0d4bffb497818951342d09f36154"
  },
  {
    "url": "assets/js/110.9ab18142.js",
    "revision": "9206ed3847d3bbc19df28f0ab25dfe13"
  },
  {
    "url": "assets/js/111.554d957f.js",
    "revision": "ed5b8fe70dac34c77db21345fa8c9949"
  },
  {
    "url": "assets/js/112.fe552087.js",
    "revision": "5834fa828e835e9569382c86642c6018"
  },
  {
    "url": "assets/js/113.c61748c3.js",
    "revision": "83c0f4cc1fb0c37341974ccad983e2d5"
  },
  {
    "url": "assets/js/114.9595de01.js",
    "revision": "c76c8b2d5b9c06c647b214a9704c06eb"
  },
  {
    "url": "assets/js/115.111a002b.js",
    "revision": "0daf9bb69f6eb2ef1fe09410c13e3522"
  },
  {
    "url": "assets/js/116.be5b34d6.js",
    "revision": "fb02ec3fe54c820120de937b2b20b607"
  },
  {
    "url": "assets/js/117.47bb42fc.js",
    "revision": "d9e82c194cac6a155f73469c435de891"
  },
  {
    "url": "assets/js/118.e3065617.js",
    "revision": "40eea06da5a39aa8e95e9a2a2a27ce45"
  },
  {
    "url": "assets/js/119.fc366ea1.js",
    "revision": "3771cd4df98611e48a42b1b0f4cf6344"
  },
  {
    "url": "assets/js/120.e40cfb33.js",
    "revision": "222655672e3eb9aed1fc82dd1897a1f7"
  },
  {
    "url": "assets/js/121.8a41f769.js",
    "revision": "e6783b0a491f34dd0ac061a3ab4dd8e9"
  },
  {
    "url": "assets/js/122.0addc562.js",
    "revision": "e11ba1c1f53e1b63b271b181e7abd1c2"
  },
  {
    "url": "assets/js/123.a3be8821.js",
    "revision": "225c4fb40557082f9e12c27d8a534dcd"
  },
  {
    "url": "assets/js/124.bb32894e.js",
    "revision": "4fa550f04aa5e94c855130c3c9cb42bb"
  },
  {
    "url": "assets/js/125.0c1903d9.js",
    "revision": "a5e33cd7bf0fa320845ac85b0075cd4f"
  },
  {
    "url": "assets/js/126.2fcb46b4.js",
    "revision": "fc786c053a912144abbf7c4b58ff9ef8"
  },
  {
    "url": "assets/js/127.d8265a43.js",
    "revision": "e04e18e045f0b5895e6b994a7204abc2"
  },
  {
    "url": "assets/js/128.f658bbed.js",
    "revision": "76daad931be9ab2e57acb28b32dfed23"
  },
  {
    "url": "assets/js/129.acf76d10.js",
    "revision": "a2d277d579951b41a2328d23d06884cb"
  },
  {
    "url": "assets/js/130.70ac51e7.js",
    "revision": "38a017b769cc7879bcf5a617bc3e7646"
  },
  {
    "url": "assets/js/131.6ad2fb68.js",
    "revision": "6ace61f567c3bbfc1d08166f8e31d2d5"
  },
  {
    "url": "assets/js/132.9b20028a.js",
    "revision": "5471820853ba935d3d7acaacd644e26a"
  },
  {
    "url": "assets/js/133.0caf2521.js",
    "revision": "9e6f26e4c498540787bb55a8bcd29a2a"
  },
  {
    "url": "assets/js/134.618611a8.js",
    "revision": "7217079aea65478cce2faa1c738e1695"
  },
  {
    "url": "assets/js/135.53a61c30.js",
    "revision": "85522a557b6d66d242791a061c8ba9b4"
  },
  {
    "url": "assets/js/136.41062a9e.js",
    "revision": "af572a600853a58d1f124d8ce93dbdbf"
  },
  {
    "url": "assets/js/137.3e9bfb69.js",
    "revision": "e8c2b8687d3062e83cf951d36b777433"
  },
  {
    "url": "assets/js/138.f65176f5.js",
    "revision": "42446d5512bd4a8ee778f54a7f525211"
  },
  {
    "url": "assets/js/139.97ff3367.js",
    "revision": "3a50b8a5ba3326e1800a9490f560dbae"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.ffab6884.js",
    "revision": "e3d740ed6c8f1071d688daac65e69159"
  },
  {
    "url": "assets/js/141.ee357c67.js",
    "revision": "a5d0a4e3dcf4236d9cba9bad0bfb656b"
  },
  {
    "url": "assets/js/142.6a83aa04.js",
    "revision": "c3fdcdd4dbef5590c79052ff3de4074e"
  },
  {
    "url": "assets/js/143.ce887d24.js",
    "revision": "9f985d46f8b6d5d53c9d21700a00ffda"
  },
  {
    "url": "assets/js/144.85def099.js",
    "revision": "578292fe457b27f5fad7b2454e0737f8"
  },
  {
    "url": "assets/js/145.fe6303fa.js",
    "revision": "0a3702dbff037b4e1ee6aeb9921d5714"
  },
  {
    "url": "assets/js/146.cd9bfea9.js",
    "revision": "4dc18aee58be81cf49a2f6bdd225e893"
  },
  {
    "url": "assets/js/147.04efd064.js",
    "revision": "ee551e0b08a7a7d32b990fcebc0855ec"
  },
  {
    "url": "assets/js/148.0faa92bc.js",
    "revision": "a5090a3e9d1f981f8a9f69f6d5002b97"
  },
  {
    "url": "assets/js/149.fc5c195b.js",
    "revision": "a019bbd584a2cc56b0451f09f439ff97"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.50110665.js",
    "revision": "358ebac6d3f78deb0751b18144f50811"
  },
  {
    "url": "assets/js/151.1cd388f8.js",
    "revision": "2b35639321c014528af075136c4bd49a"
  },
  {
    "url": "assets/js/152.addd6c00.js",
    "revision": "16eed26c5bf98f321443561f72e63e1d"
  },
  {
    "url": "assets/js/153.2b726ac7.js",
    "revision": "ee9914f5d27c6fe3a49df8bbfd0bcb30"
  },
  {
    "url": "assets/js/154.07332145.js",
    "revision": "ab10aef3f419e65e45c452282584a33b"
  },
  {
    "url": "assets/js/155.98e97c69.js",
    "revision": "b52ccd969941a87bc577b8b907d8c251"
  },
  {
    "url": "assets/js/156.f357a8be.js",
    "revision": "5006c7687d372cf3242835fb84264f6f"
  },
  {
    "url": "assets/js/157.f79f20a8.js",
    "revision": "f59dd61d1982ef4183a79b0b03a1d3b4"
  },
  {
    "url": "assets/js/158.97510f31.js",
    "revision": "e7149b9079be6edeb219fe332945648d"
  },
  {
    "url": "assets/js/159.2dc5ec0a.js",
    "revision": "966b46878f52de9389deebcedbca144a"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.e9e36400.js",
    "revision": "7ceca6c911e64addd1b159478dfcbdf7"
  },
  {
    "url": "assets/js/161.4daeb88a.js",
    "revision": "dc37e805b670d6fdeb3205c5bd61f564"
  },
  {
    "url": "assets/js/162.44b94f51.js",
    "revision": "572e9be1734c2764a92b8fc4a63fb886"
  },
  {
    "url": "assets/js/163.974d09ac.js",
    "revision": "2adf0d6029a38fcd7c91b3eff5d877af"
  },
  {
    "url": "assets/js/164.aaff920e.js",
    "revision": "52ca4cbfec6a1db910a72f4f5c6f1507"
  },
  {
    "url": "assets/js/165.a1278e25.js",
    "revision": "1862880b7bef8127170fc63ce97447d3"
  },
  {
    "url": "assets/js/166.ec5a5075.js",
    "revision": "896b44fd6ed4c36db7f7f0f7f7b7e4c4"
  },
  {
    "url": "assets/js/167.785501f8.js",
    "revision": "ac5ae1dd27133aefe61fd4c8ab52fc59"
  },
  {
    "url": "assets/js/168.f8e4ad1b.js",
    "revision": "d2c0d48fce26d2fdd350690a89019e48"
  },
  {
    "url": "assets/js/169.1a8c1b56.js",
    "revision": "2a1fcd82c22399aa17f5baddded98672"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.bd673a1c.js",
    "revision": "2e6782841bd5d75c88ba32e89a5b548c"
  },
  {
    "url": "assets/js/171.da3c9b95.js",
    "revision": "18d11dce13aef13328a14141da389ae4"
  },
  {
    "url": "assets/js/172.80dca66d.js",
    "revision": "48b1cde08de95cf1f243ac015fa4cef3"
  },
  {
    "url": "assets/js/173.a228c48a.js",
    "revision": "5d1001b94e27bfd1e34fa5d8d7553556"
  },
  {
    "url": "assets/js/174.ee299cc5.js",
    "revision": "cbdb17e6302df32921af9017de07660a"
  },
  {
    "url": "assets/js/175.e2a00fe6.js",
    "revision": "a5669533696d25d78843d49d6fe3e09f"
  },
  {
    "url": "assets/js/176.37b8f207.js",
    "revision": "e8f1ba5e3d93b90d396bc0abb140c730"
  },
  {
    "url": "assets/js/177.2a138c8a.js",
    "revision": "ea9de9d6f4e3826b243397d8ebfccbbc"
  },
  {
    "url": "assets/js/178.0a747d93.js",
    "revision": "78f54c010f63a435beb47fae145555a7"
  },
  {
    "url": "assets/js/179.565f0c57.js",
    "revision": "71ef6a7e38e06effa9485a66d06ead8f"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.92f3b11a.js",
    "revision": "c1bfecc1f97cd72d48cd5b2c1a82f0b4"
  },
  {
    "url": "assets/js/181.66a25114.js",
    "revision": "503faffd2249ca861b11e54cb3808fee"
  },
  {
    "url": "assets/js/182.26b91fc8.js",
    "revision": "4c45ce5d6582c6e79ea70a853e070a1e"
  },
  {
    "url": "assets/js/183.326fd691.js",
    "revision": "8a3e969cfe990f987465c3ed54c359fb"
  },
  {
    "url": "assets/js/184.339a19ff.js",
    "revision": "fe428bdeff32e9c7adb21f6c31e0774b"
  },
  {
    "url": "assets/js/185.e6c98314.js",
    "revision": "33c93698e5debe9ac54be564aef06dd2"
  },
  {
    "url": "assets/js/186.5d817575.js",
    "revision": "6b2e9a1e960a5e0928d94eea3d4ee4a6"
  },
  {
    "url": "assets/js/187.97eaa733.js",
    "revision": "3203a0bb682c6e163f95359af93a80c6"
  },
  {
    "url": "assets/js/188.d2443e73.js",
    "revision": "9ada6f1426697de0d834748603120600"
  },
  {
    "url": "assets/js/189.0aa515a9.js",
    "revision": "28ccb8cbd13ab1359e5c74416904055b"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.a97be0bd.js",
    "revision": "e856a09d007786ff0ac0731731889c70"
  },
  {
    "url": "assets/js/191.1cf7f243.js",
    "revision": "f8b3e0f6f59650513d9c25ab412d4ba1"
  },
  {
    "url": "assets/js/192.06c96159.js",
    "revision": "478e90b8faeaff3b81938c34fc1e2c2e"
  },
  {
    "url": "assets/js/193.7359c2f1.js",
    "revision": "b8e4a65db9437edf11eefe9ea618bdd1"
  },
  {
    "url": "assets/js/194.3c098af1.js",
    "revision": "e6117dcc9557e150787450e77ba254b9"
  },
  {
    "url": "assets/js/195.7046c440.js",
    "revision": "3bdd00328138d9eea47bf62244c8dee0"
  },
  {
    "url": "assets/js/196.ac6304f3.js",
    "revision": "b49e95d5578e31ede5395f8527e6de93"
  },
  {
    "url": "assets/js/197.5cedae10.js",
    "revision": "bdcfca319e210fe574bc5d7559c73596"
  },
  {
    "url": "assets/js/198.df911837.js",
    "revision": "6a667e415232fc0d6bf018846c3edfb1"
  },
  {
    "url": "assets/js/199.cc34bba8.js",
    "revision": "24e61dee53144229e1862d8598a11ba4"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.c4bb3886.js",
    "revision": "29df9159abefd520b7bcf0971c8bccbf"
  },
  {
    "url": "assets/js/201.7f7bfbf9.js",
    "revision": "85b564ef24328f4266e898d449d0ec3f"
  },
  {
    "url": "assets/js/202.ccc071e4.js",
    "revision": "a0a7681f87bfaefcfd80aa0fc54601f9"
  },
  {
    "url": "assets/js/203.2f22f395.js",
    "revision": "51721a32ba993305f9b560939484fbf3"
  },
  {
    "url": "assets/js/204.aaa8823c.js",
    "revision": "f0ce30ffc62a6cee0aa527a197a479f4"
  },
  {
    "url": "assets/js/205.1bc82195.js",
    "revision": "c7ac592848d294e7d365c2806b73d885"
  },
  {
    "url": "assets/js/206.f0bd88af.js",
    "revision": "3e86ab8d1f2c3c30fe2aa4ba86ea9a65"
  },
  {
    "url": "assets/js/207.02dcf6e6.js",
    "revision": "6e474c3d76e1f5f541c5ebb988e84465"
  },
  {
    "url": "assets/js/208.7f4fa79c.js",
    "revision": "ce691aab180d8812aa70bef2f1c8ea31"
  },
  {
    "url": "assets/js/209.532fdac4.js",
    "revision": "e013a2e49ade62231ab8e2483d8b3126"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.bc0f0913.js",
    "revision": "2ec383ef56006e0fa3bd91e4419c5180"
  },
  {
    "url": "assets/js/211.a5830e92.js",
    "revision": "abfa14ad10a9f7f79f8478aed28c7324"
  },
  {
    "url": "assets/js/212.e9014dfd.js",
    "revision": "9ec9b8723f6abad884e53cc9975b31e7"
  },
  {
    "url": "assets/js/213.e2301c9f.js",
    "revision": "7bb5b2457cf490e90d2ef0f8c57509db"
  },
  {
    "url": "assets/js/214.40c9a220.js",
    "revision": "4b1b477a14ea99b7e4ed960b77b666d6"
  },
  {
    "url": "assets/js/215.d0745efa.js",
    "revision": "d6906a228356ae1098c652d636a04265"
  },
  {
    "url": "assets/js/216.34cb2ecd.js",
    "revision": "926d506c8fdf9abc1c78c14fbc9c0c76"
  },
  {
    "url": "assets/js/217.0a3deeba.js",
    "revision": "07bf7f4a7f1562dd22de0a369e27244f"
  },
  {
    "url": "assets/js/218.b21ffc27.js",
    "revision": "f6a5755f9f849fbeeed8524e2930c930"
  },
  {
    "url": "assets/js/219.c3d68797.js",
    "revision": "1793dfe9f061c1573180bf4ee1308fbe"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.c438ebdc.js",
    "revision": "28b62d007d62473b0f80963cf994d9c4"
  },
  {
    "url": "assets/js/221.1acb13c6.js",
    "revision": "b3241f693b926691965d3565e2921b74"
  },
  {
    "url": "assets/js/222.89c87c10.js",
    "revision": "fd811b829ce7d67c0b57dd026dd9014e"
  },
  {
    "url": "assets/js/223.ed5331b0.js",
    "revision": "b1b96fd832bad42f5913a7efc321e62d"
  },
  {
    "url": "assets/js/224.dcbe81d3.js",
    "revision": "a09f0cb348e2f6ba487b206b1d3614cc"
  },
  {
    "url": "assets/js/225.e1bee485.js",
    "revision": "1a86a115105f7129d8d10dc2f7fa2ea7"
  },
  {
    "url": "assets/js/226.332106b6.js",
    "revision": "55b441a5887e388f77598bd5eb20c0a3"
  },
  {
    "url": "assets/js/227.743003ca.js",
    "revision": "2b60950e8b636dc46a39300d03264caa"
  },
  {
    "url": "assets/js/228.d2b6e08e.js",
    "revision": "aad91a8a5ce5bcccfbecbcf66a544d86"
  },
  {
    "url": "assets/js/229.1df8a1ea.js",
    "revision": "29fbc4868f6cf9bb008ef82fb549884c"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.0b294b6c.js",
    "revision": "4a63ba0dd6510abaea5dc66e28a6ce91"
  },
  {
    "url": "assets/js/231.b2da3017.js",
    "revision": "826d2130dcaaeca3f31da4fd3bf4dabf"
  },
  {
    "url": "assets/js/232.29319239.js",
    "revision": "fc8cd738766ae3475e43c541c60cdaff"
  },
  {
    "url": "assets/js/233.50f5710b.js",
    "revision": "a2cfa46a66a5a3a2b7348443c5938a31"
  },
  {
    "url": "assets/js/234.2f56c432.js",
    "revision": "ca1b36744d3a33dd5f19c5715cbad3be"
  },
  {
    "url": "assets/js/235.93ba74cd.js",
    "revision": "7bc2714d3ca984ddccd8a47d83937a32"
  },
  {
    "url": "assets/js/236.9d889fa5.js",
    "revision": "6df59c9382632af28a1e25aca06ae74e"
  },
  {
    "url": "assets/js/237.896222d0.js",
    "revision": "19693109f2c8cb7a6656e68a2462b7a8"
  },
  {
    "url": "assets/js/238.434acdf1.js",
    "revision": "4f5744ef5a9c050cab6b5c50815da723"
  },
  {
    "url": "assets/js/239.a9a6ab47.js",
    "revision": "a3ddc3744eebd4789bcade2faabf155c"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.38f7cd92.js",
    "revision": "7af1259540b3207ad7157af7337ac0eb"
  },
  {
    "url": "assets/js/241.53fc89b7.js",
    "revision": "453afca88e98d11efb53e314da035a34"
  },
  {
    "url": "assets/js/242.d98241df.js",
    "revision": "98af9e30d20060d1c29c6bc22003d92e"
  },
  {
    "url": "assets/js/243.8b4cd879.js",
    "revision": "cc79e746456aa7057d5168c33cd80335"
  },
  {
    "url": "assets/js/244.4aaab608.js",
    "revision": "1e0e7763d4acb65adc4f30280282c684"
  },
  {
    "url": "assets/js/245.47fb0a03.js",
    "revision": "dcf1fe8e61550df02dc69a509bfeb6f2"
  },
  {
    "url": "assets/js/246.89002459.js",
    "revision": "f6296597ef5113c57dea214379c04624"
  },
  {
    "url": "assets/js/247.7a360a5a.js",
    "revision": "ae45931d5977c4d50a2f1adf848fc084"
  },
  {
    "url": "assets/js/248.55cd23f8.js",
    "revision": "f4edd7ac7e8ff18dc0b1ee33b02834bf"
  },
  {
    "url": "assets/js/249.da38f55e.js",
    "revision": "9ffe0de4d137a74a82f2d1ab98c55189"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.2493f5a5.js",
    "revision": "8f6a159bb5c732007f0f19fcce5fe045"
  },
  {
    "url": "assets/js/251.90222824.js",
    "revision": "c3c7aee800cbb7a41614327eeb790ad0"
  },
  {
    "url": "assets/js/252.2fa7dc24.js",
    "revision": "beda60debd6bb77cb418392521fe9901"
  },
  {
    "url": "assets/js/253.57461bdb.js",
    "revision": "828c3e4fef126b401a69ef9a74ba8559"
  },
  {
    "url": "assets/js/254.a8c93f1d.js",
    "revision": "e16398117d5a05f30bba401a29d2fd65"
  },
  {
    "url": "assets/js/255.a9cea2b1.js",
    "revision": "a238c8eaab8e4a3f1bdcfe033298b3ad"
  },
  {
    "url": "assets/js/256.577bc978.js",
    "revision": "81b319422fe3c6bff4b136e51e13a4ed"
  },
  {
    "url": "assets/js/257.0f019186.js",
    "revision": "5db28343c1b9ed30aa948bce2d9fe8ee"
  },
  {
    "url": "assets/js/258.8b4486d7.js",
    "revision": "3ad6fc4765af7f75eef99332e7920869"
  },
  {
    "url": "assets/js/259.34c390b9.js",
    "revision": "2235ba6d6b38b877d375d14362ab5587"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.363b6e06.js",
    "revision": "874580ba7b2f83d708845c196d31485a"
  },
  {
    "url": "assets/js/261.cadff2e9.js",
    "revision": "0f9c968cd9fab1e8dc38b8c6159a54c1"
  },
  {
    "url": "assets/js/262.4cbbce8c.js",
    "revision": "1dacde6b5a0fee975eee4249a568117e"
  },
  {
    "url": "assets/js/263.d82debb5.js",
    "revision": "4b2466ad1d2b25af091540004a1a2c29"
  },
  {
    "url": "assets/js/264.63ce533e.js",
    "revision": "9b98b74ae7b8d386c3d4e955a4f81e6c"
  },
  {
    "url": "assets/js/265.28f0ed27.js",
    "revision": "7e2c09b1c2bf1586b74732171508022f"
  },
  {
    "url": "assets/js/266.ad2cdf8c.js",
    "revision": "f38cecec4a81d570681972c78c8470c0"
  },
  {
    "url": "assets/js/267.3e9b2426.js",
    "revision": "208cb6f1b1e373cbdc53e26323f49414"
  },
  {
    "url": "assets/js/268.f86f2e29.js",
    "revision": "4b0e4a2d9c8cc6174c9f8084f0a6d668"
  },
  {
    "url": "assets/js/269.fcbfce40.js",
    "revision": "d1fd9c147e72fceaca92782fe9ce96da"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.8219b02f.js",
    "revision": "a2379377dbc82a050b582cbd7a392232"
  },
  {
    "url": "assets/js/271.a8e3cf8e.js",
    "revision": "017a3d88adf321eae1c01cc229a6e046"
  },
  {
    "url": "assets/js/272.20b58ec0.js",
    "revision": "336d730fedf89ccf83fd0be4f33d86ed"
  },
  {
    "url": "assets/js/273.6039d6b0.js",
    "revision": "47c34b0a2f7ed3509472d5f77a58d5ab"
  },
  {
    "url": "assets/js/274.f0e57433.js",
    "revision": "655af91defdf9be10d971e2fed413af5"
  },
  {
    "url": "assets/js/275.3eb4eaa6.js",
    "revision": "be92f3e3afb66ba734c239c2f80763cf"
  },
  {
    "url": "assets/js/276.3b8f0ee2.js",
    "revision": "c394a8a369f28f0dfff45b06b0da5f4f"
  },
  {
    "url": "assets/js/277.a72002b5.js",
    "revision": "5e7401b729925dcc0ac69e285f35e338"
  },
  {
    "url": "assets/js/278.02c3ea30.js",
    "revision": "96e8cc131f6797db30555903d1fc3aae"
  },
  {
    "url": "assets/js/279.10b055d1.js",
    "revision": "a520411818ea3f4ff0c9a97df38186c2"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.ed55f347.js",
    "revision": "00da87a3910015626c540bf0885f573a"
  },
  {
    "url": "assets/js/281.b13da236.js",
    "revision": "fbd17677af2564d3092252c8abb3b965"
  },
  {
    "url": "assets/js/282.22af584a.js",
    "revision": "f7af1a21747dca57fdbe4c8971edb6c3"
  },
  {
    "url": "assets/js/283.d704a1b5.js",
    "revision": "d07d7e34f7a43aed02987ca0a73be3da"
  },
  {
    "url": "assets/js/284.88abaee3.js",
    "revision": "8f6e50ee998c59ac3ad33fcbc3b14fe4"
  },
  {
    "url": "assets/js/285.a9f63491.js",
    "revision": "1f46ba2d089f08c815c736c30a1a08cf"
  },
  {
    "url": "assets/js/286.297317c5.js",
    "revision": "4984b365200975222afdcad71f2d208a"
  },
  {
    "url": "assets/js/287.be836fc6.js",
    "revision": "a55140742a2577cfce445883a590f57e"
  },
  {
    "url": "assets/js/288.5ff62d70.js",
    "revision": "38bec20b85b950b0288ad21496e6aec8"
  },
  {
    "url": "assets/js/289.3681b732.js",
    "revision": "911231ee2ad9306152c8d91bf9c917ef"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.5ad2e4bb.js",
    "revision": "cbb742b4e8d923053880322e989c3667"
  },
  {
    "url": "assets/js/291.2847f6f8.js",
    "revision": "c2aec294bf9ce6d388a27b3c1d00a3dd"
  },
  {
    "url": "assets/js/292.9f1cea84.js",
    "revision": "3bcc1052edbc1b5cafc690ab1449cb7c"
  },
  {
    "url": "assets/js/293.7696ac8b.js",
    "revision": "f739d19097e6443d97873626414c627b"
  },
  {
    "url": "assets/js/294.af359f5d.js",
    "revision": "d5c0601913abc9cf3be4a22a57e0fa76"
  },
  {
    "url": "assets/js/295.c7a808fa.js",
    "revision": "382d18382dfd487714680759115255cf"
  },
  {
    "url": "assets/js/296.912a8637.js",
    "revision": "0eea70a9e8f4cee12d45098826929c85"
  },
  {
    "url": "assets/js/297.5bf4716e.js",
    "revision": "da1d716adeadc59eddebe57fee8891bd"
  },
  {
    "url": "assets/js/298.77a994cd.js",
    "revision": "b6be56413123cc6c7763f0571fc47055"
  },
  {
    "url": "assets/js/299.921a9c71.js",
    "revision": "8a293349987799ab7af3e7b914ff9f20"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.3b2d43f8.js",
    "revision": "c732c0e67f7f4f07df89aaa155af2ee5"
  },
  {
    "url": "assets/js/301.6f0c68fc.js",
    "revision": "ebdb0c6600fec1b8a757d5b6439e8e4f"
  },
  {
    "url": "assets/js/302.b02e8ccb.js",
    "revision": "7ffa6019b65e4a6173c911770f6212f0"
  },
  {
    "url": "assets/js/303.ebbf6402.js",
    "revision": "6338dae54634b4125aa17ac9e3254b27"
  },
  {
    "url": "assets/js/304.82802ae7.js",
    "revision": "4372497c3d0286553cd33f86bb5cfba1"
  },
  {
    "url": "assets/js/305.185fcbd4.js",
    "revision": "2c8bcfa1d386e8723a945c77d9f201a6"
  },
  {
    "url": "assets/js/306.141da071.js",
    "revision": "70901dc35b894ca884044445c4dd53eb"
  },
  {
    "url": "assets/js/307.d0145190.js",
    "revision": "f57d3d18d65c8e0f07ffb3596b369f3f"
  },
  {
    "url": "assets/js/308.12448ae5.js",
    "revision": "be0be2caf0896d828d2709de718d8e4d"
  },
  {
    "url": "assets/js/309.20a3c9fa.js",
    "revision": "8f2c1fbdf728dca281fdfdf4b293ff68"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.815d63d3.js",
    "revision": "333424333a42b11f2af28d9654bef7e6"
  },
  {
    "url": "assets/js/311.b72e1cca.js",
    "revision": "510cf1b63faec0ee30abbfd1671926d1"
  },
  {
    "url": "assets/js/312.c0729a5b.js",
    "revision": "82ad2477fd5261dcc28e447c138d34c5"
  },
  {
    "url": "assets/js/313.e9df315c.js",
    "revision": "ba93efe607781fb21af035093fad6ed4"
  },
  {
    "url": "assets/js/314.03493822.js",
    "revision": "b06734b825c779b42b3cfb93aa03ca59"
  },
  {
    "url": "assets/js/315.9a31a7db.js",
    "revision": "b0b5b0c51fd7d85580d25bacd8b4e5a8"
  },
  {
    "url": "assets/js/316.6aca0933.js",
    "revision": "3dcc3269aa42de8f9db6ae4f3c778ffd"
  },
  {
    "url": "assets/js/317.0b72eafe.js",
    "revision": "ed6efbf5e06a4021eee7caf92aa39cc2"
  },
  {
    "url": "assets/js/318.8223af95.js",
    "revision": "71a1856089c0f24fe37e9358f4fabbe1"
  },
  {
    "url": "assets/js/319.60c08b90.js",
    "revision": "c34b143d9cf6860a8c44c01e5ab8ed4e"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.21a7a18b.js",
    "revision": "b49543d5a4f3737e4f116b2f806306db"
  },
  {
    "url": "assets/js/321.b296ddf8.js",
    "revision": "898d698720cead1fa77461c90184c019"
  },
  {
    "url": "assets/js/322.dff930f2.js",
    "revision": "79ae477fe6f93520da681eb401c3a720"
  },
  {
    "url": "assets/js/323.d0efe6df.js",
    "revision": "9f6652ae175a465e9f63caa246da692f"
  },
  {
    "url": "assets/js/324.39fcc46d.js",
    "revision": "ef76f00521e4b679593b46a9fec6b042"
  },
  {
    "url": "assets/js/325.fb4abb27.js",
    "revision": "8e13056f610f72c8b0c2a8f3764b66c4"
  },
  {
    "url": "assets/js/326.7fa4dcf6.js",
    "revision": "ffda87f9c2ec1ecd8d16d5cdbf5ca34f"
  },
  {
    "url": "assets/js/327.7733a0a2.js",
    "revision": "14425bce5a6c4acd504852da6a8fbada"
  },
  {
    "url": "assets/js/328.0cdbd51f.js",
    "revision": "738ac8982c62af0dcf103cd0c5b69614"
  },
  {
    "url": "assets/js/329.3dfdf6e9.js",
    "revision": "a514a99ac5436d748059a8a80791f4ad"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.66bea47f.js",
    "revision": "27704dc2c764221bc6122622cca64ac7"
  },
  {
    "url": "assets/js/331.f7aa61ef.js",
    "revision": "0a15fa8c51c4c0410a9bec4e7696d746"
  },
  {
    "url": "assets/js/332.dc41284f.js",
    "revision": "eeadd08b6c67cdf29dd0e9e44cc01db4"
  },
  {
    "url": "assets/js/333.846ca722.js",
    "revision": "db9396dca6533ba1c9f888e9b09998d6"
  },
  {
    "url": "assets/js/334.d36de809.js",
    "revision": "a8794f3f653e02300cea7255e9496478"
  },
  {
    "url": "assets/js/335.9c63b1ac.js",
    "revision": "b8dbaf79bf1816e7f3e2470d59d476fa"
  },
  {
    "url": "assets/js/336.bc5acdf3.js",
    "revision": "211e074d4037cbbbc672f43cc987bc48"
  },
  {
    "url": "assets/js/337.50018329.js",
    "revision": "6ef74395e0bdaabadf96d838c4a6f0a9"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.7d6162bc.js",
    "revision": "2f3d0f35b68e5022e9c74c0e45c5ca19"
  },
  {
    "url": "assets/js/41.df5b2e8b.js",
    "revision": "d704aabcb010b4cb446171138dc8ab1b"
  },
  {
    "url": "assets/js/42.b9c5ae99.js",
    "revision": "f8c475ea3f8b4c0dacadbd1bba404626"
  },
  {
    "url": "assets/js/43.2e96c386.js",
    "revision": "e279e456eff37634a528b23eaa1b9158"
  },
  {
    "url": "assets/js/44.53aa25f6.js",
    "revision": "2c7d897f62f3e35097072b207ca999b0"
  },
  {
    "url": "assets/js/45.89eac773.js",
    "revision": "c7330ecc6eea47045ecfebf732c29932"
  },
  {
    "url": "assets/js/46.cd4455af.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.61d739b3.js",
    "revision": "c8dfc7d6d32660a7179e16dfa6d6ce04"
  },
  {
    "url": "assets/js/48.5098e9cb.js",
    "revision": "268e11a5af4da2437ab21bcf0dc25b1e"
  },
  {
    "url": "assets/js/49.8fd53189.js",
    "revision": "39dce77ff66423c0952b9d687c90b7e5"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.2dbc1671.js",
    "revision": "9aaa0359fdbc34dc30843e548c7d1393"
  },
  {
    "url": "assets/js/51.7a7bf95e.js",
    "revision": "981f40544af60c93a2300283ed11ddfe"
  },
  {
    "url": "assets/js/52.86bfab54.js",
    "revision": "2ce033cc383298e70d6771ea910a2ee4"
  },
  {
    "url": "assets/js/53.1a3423d6.js",
    "revision": "f6c61ec48ec4be1ed71f8c7ac3ae452d"
  },
  {
    "url": "assets/js/54.60c6bb08.js",
    "revision": "e61adb199a720b98593d1130e3d27d6a"
  },
  {
    "url": "assets/js/55.ee40461e.js",
    "revision": "83f56cfb542f450fd69381115194f667"
  },
  {
    "url": "assets/js/56.0ca93de1.js",
    "revision": "dd42ce9f83228020a3f4f2a52e28827f"
  },
  {
    "url": "assets/js/57.1789ba4a.js",
    "revision": "ad25db84beba2ed5c255e4faea34d97f"
  },
  {
    "url": "assets/js/58.be8735a6.js",
    "revision": "1cd947a730b9a14ea6056bb1c88dc8b3"
  },
  {
    "url": "assets/js/59.8e84286c.js",
    "revision": "77dfdc160a8fef984cebdcca2bfd913f"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.2378d84a.js",
    "revision": "1b25228315b23ff0f34e1038df86694a"
  },
  {
    "url": "assets/js/61.3923ef64.js",
    "revision": "3e39cd75c87902f77f3ad21ffc89a1ea"
  },
  {
    "url": "assets/js/62.c117fc6d.js",
    "revision": "36034dcf6ee8235eb29586217218e589"
  },
  {
    "url": "assets/js/63.1c13c245.js",
    "revision": "4152e284ef772b6a2ed894d377c055ee"
  },
  {
    "url": "assets/js/64.56d9e9b8.js",
    "revision": "036e38695897e3e72bfa3e148f45ee50"
  },
  {
    "url": "assets/js/65.ad17601a.js",
    "revision": "7da1f2f4eaf6849a4da256a971e95826"
  },
  {
    "url": "assets/js/66.a774983e.js",
    "revision": "164c983170e2e4cc14cd974c526434ad"
  },
  {
    "url": "assets/js/67.f9926b9f.js",
    "revision": "7b58fc1850603f4cf9e9e00ee52bb12d"
  },
  {
    "url": "assets/js/68.768f7a55.js",
    "revision": "5fb60c914e3f3f15bf8abc9ff2a6fa84"
  },
  {
    "url": "assets/js/69.41f96c53.js",
    "revision": "fa6fdc21aed605b0e6454fd80adeaf4e"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.8f2bdbec.js",
    "revision": "23bf1123aa87b04113d5ad930f4b5745"
  },
  {
    "url": "assets/js/71.6d64f498.js",
    "revision": "7c103db8127fcebfbcea6734b9031d57"
  },
  {
    "url": "assets/js/72.26d8579f.js",
    "revision": "d1e55cf22cde24b5137da0f7bd73b226"
  },
  {
    "url": "assets/js/73.0f73d50e.js",
    "revision": "c36396b30137e292609ccda72a560753"
  },
  {
    "url": "assets/js/74.02e886ac.js",
    "revision": "91b4286d809c898476157e5add526344"
  },
  {
    "url": "assets/js/75.dbd49894.js",
    "revision": "182012fdae116e5330955b3ccb9323db"
  },
  {
    "url": "assets/js/76.b150aff6.js",
    "revision": "b391f803e151e2765e3f067f812c9c19"
  },
  {
    "url": "assets/js/77.2eb580ad.js",
    "revision": "ba3803ecff5b350bc2b169544b214a92"
  },
  {
    "url": "assets/js/78.4c7c067d.js",
    "revision": "c76a338b27e0f83080c8f4b89b828791"
  },
  {
    "url": "assets/js/79.84e24711.js",
    "revision": "2ddf73d424e226e123f27f730864e7e2"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.9c39161d.js",
    "revision": "a6684c3ec678f6ecabf96d28682d3a15"
  },
  {
    "url": "assets/js/81.d1f337ef.js",
    "revision": "b96f9c875c59091a480b0e11cffc9534"
  },
  {
    "url": "assets/js/82.b4cc4e1c.js",
    "revision": "d92f3862c250c43087110105a77a5545"
  },
  {
    "url": "assets/js/83.14967780.js",
    "revision": "40263e734b480b5db250f62903106bd7"
  },
  {
    "url": "assets/js/84.666fa5b1.js",
    "revision": "4b103e7e5274d83d3e0ce078d8fdfbca"
  },
  {
    "url": "assets/js/85.16fa9dae.js",
    "revision": "13b98890619c885b4837762ef98292b7"
  },
  {
    "url": "assets/js/86.d96570e0.js",
    "revision": "cc220bb81960371641181a5fdd89b44d"
  },
  {
    "url": "assets/js/87.ecb06d01.js",
    "revision": "03963ba0e2c79f2481ef6e26cb58e943"
  },
  {
    "url": "assets/js/88.3a316868.js",
    "revision": "440f52e0bfa857b38d5d61468553c45f"
  },
  {
    "url": "assets/js/89.d585ab8c.js",
    "revision": "072f16a790f357dd181b4a0ff43fc78c"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.e911d211.js",
    "revision": "c8dfe798c13df2de86cc85425f86dbd8"
  },
  {
    "url": "assets/js/91.5d5820e2.js",
    "revision": "8402011684bbdc73e96c0d2624342333"
  },
  {
    "url": "assets/js/92.bd155100.js",
    "revision": "d1233d1f6dff00332be96f66b47bdf03"
  },
  {
    "url": "assets/js/93.81a20a14.js",
    "revision": "39a62501f2977e9b0b6fa053b80ec20d"
  },
  {
    "url": "assets/js/94.c49eae2b.js",
    "revision": "1adf4dfb311599720164a6ee08185311"
  },
  {
    "url": "assets/js/95.98189a6d.js",
    "revision": "09b5b3b7a9e8ce42c83c2479bba972fe"
  },
  {
    "url": "assets/js/96.590e592c.js",
    "revision": "9181f4af1b811aab582ed12c7d41cae9"
  },
  {
    "url": "assets/js/97.f2953e1d.js",
    "revision": "ae1710e2fd16dd2011e2d85c41db5b0e"
  },
  {
    "url": "assets/js/98.1221ddf4.js",
    "revision": "0476c0318f2e51f9591479ef0e560d8e"
  },
  {
    "url": "assets/js/99.73d57486.js",
    "revision": "17bdc36da34a0496cf5f8591ff4a7ac6"
  },
  {
    "url": "assets/js/app.e566b1b6.js",
    "revision": "cd0c1c6d64eb6e3c47b9dfae30d6e90e"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "1948fe833e8cf267eb658c657b241905"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a7e7c0d4751330d1248016b8a7988a0e"
  },
  {
    "url": "categories/index.html",
    "revision": "4358303690767468ea916f5bc44e6186"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "0179f8173922a7a389685a83cb060311"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "1480383405b939aecefe9448dcc45192"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "218fa0edf0d6aebf9a0e8c8d50baaf2c"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "ca6cdbd1b7ca8ec2d0e9d11f4e82eda0"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "9154fce8382348cc63b7e4c4f929e8ea"
  },
  {
    "url": "deepseek/index.html",
    "revision": "0857808fbc37abaf85b32dc236730285"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "b6b07d971ed5df7ca96b020705af6f00"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "a29e594c63e3c094542534395758ce7a"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "e4b610444bd5fccda2375c60bf954e08"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "a8150e37106bff669cf58f3825457c35"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "095e9e9fe4341ae2818c9fc03970dc63"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "276ebe65703083c69f123d42d20e8ffb"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "a1a3f297d3dd4f7fa857e65687dafe44"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "7753f8759ddc712a968d3dbc403884c8"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "fa4a0559d52cc0c6d375d852dbf470e9"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "f8ba4598c02a060cd2e0ef52ae525a28"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "5d929fbd7b5308a7b2f7a761541313ca"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "e1f47854e57fa1467e12d2db399aa08b"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "70804c12e7f272c6b0c523b1fc079963"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "a73213747f60079672e9259958e29d17"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "7edd2118e1075d9e9a53229a0abbd5f4"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "7f38d632859e4c0c46806f8103b3d638"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "31832a361b61ba54151782416779dc37"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "d8e4fa56bb8ca2129abdce462c7f07be"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "884da619c5378123c78421e5b23a95ab"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "a9adacba808a629cc2cc7ab2cd9b5110"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "3ce19b0b285d6fd90f7e31bf1cf9d30a"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "5935d8eaf645f6bca196ed5ecbacf219"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "72dee5991397147b0e9eee6e2a589e2c"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "dd1f9058da5a306bed2fd6a72f03c2c0"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "630fab578c61922b61ae678af87ada09"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "0156141b0bfdf60a9859160bf8c39166"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "a5d765277ea2f254a6fe8b434570c3b8"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "dd579842b26691988d4412cef21525d7"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "4bdaf2cae26c3dce9a21098a14fa6dd3"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "e0d6dff30387ef0b50d313ee152bfcbc"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "fd56568cb8b1ffd8b13798ecad9f5ac1"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "e72d928511923fcd85d4d3906a3f6234"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "0e468c23fad65e5bedcbea3e58c667bf"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "a04f63d88cf186e9b5bf6591857f107e"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "5b3d39a5770f2ed500738f06a844b49e"
  },
  {
    "url": "figma/index.html",
    "revision": "d13c0565668ed02a47f40148d7dbe0d6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "2cfe18d5a6233d91fd2febe0280b7fce"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "fb186eb6ac9575094815368e1e9999d0"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "792af204b2999e76a68cfbac4d93f917"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "f0b34ccfb04fc53c0c1b4f746b01e480"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "f279721366dd2fc398ee5aab2be88dfa"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "354341c5842a17e92bdda5197fe7fc45"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "9bb321a21096b7687ff5111e184ad31c"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "99157f0a6998e230aaf3d6dd1287c935"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "bab0627e1a258a9da6ab17f5383686be"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "455528a0c8de58bc3891d3e554ce4836"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "ddffc175f44f0467f2e7cb6d54a2e9da"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "9c7f732eae1bf6d066ed385d5bfeb02f"
  },
  {
    "url": "flutter/index.html",
    "revision": "8ce2e3f8c744eb5e69fa5f418c8413fa"
  },
  {
    "url": "flutter/point.html",
    "revision": "39973c5d84229814735b44801e9e1fe6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "968de460b4e4faf80858b65642b64cff"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9ad5c901ecdc433f54b4dabb222bcda4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d3d66c252d83236e37b09128d67d4053"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "0b3dea8113cd864bf4c910af71b50a43"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6c31c230cc890664f220e70636afa724"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "68c0faf644cd700a63982d4cfe73b20e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ef604b0457ce12b0fa24873c7fac63db"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "de827aa47d8741571fe021e0b39ef98c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "499f1bfaf28983146dc9d8ce80483c4d"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "885574be3e11f47705c4a0d6ecd06909"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c2cf68a4d0313cd3cb07ad6a19b83efa"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1e629b506e4f134a1c033664a0c5f641"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "505ef2273bc84f7d8bdba4fa0fd01ac3"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "9608e3bf12c66f10a19961db031b3f28"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "57bb3065e280ab0e6115eaa3ac006d70"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "3f56f5f4cc9541135883fa790bf5f407"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "682b20b3ac8b85746680ac2bf8e4a461"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "385a3c86492d7c063243ec082215255a"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "5663eecf62f232744bacd706a69bdc03"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9da46b63b7e091147be4a2563331377b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5d30afc86f0e8785e484c90c199f5204"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "95eca43e415d530e60bbaf501911bf82"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "59942c0e78406fdf327092d21360dd65"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "0ff520c08fb7e10403755df8a013035f"
  },
  {
    "url": "haskell/index.html",
    "revision": "f6b11562edc6fb6315ec6fa3b1c3a46c"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "00e3be6f20367a5a363f0938a90fef57"
  },
  {
    "url": "java/index.html",
    "revision": "7ebb716c71d565d351cdad8f4c4f1a64"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "febac44b97892d364b17ea53a60e4d82"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "0b3aaafd9042aec4d082775b79dfe3ca"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "b99fc9bf0740fec83adcf267ace44b4c"
  },
  {
    "url": "ops/index.html",
    "revision": "4d58f91b24eec77eada7d46a6c5497c8"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "645081de45747f304eff2903663a5b82"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "3a96e686b59f307107dd667b2f246873"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "0e3e0bdf3b48f3c2ee7bbb8c45ca27f6"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "52ec6152add1654d1633141baf66bddb"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "470d430cc6c2927407637996fa8e811b"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b7a3392c23d923c900732bfd98873654"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "4809dae1d1fc68a35c3de711aa871eec"
  },
  {
    "url": "python/index.html",
    "revision": "9dc313b3f677713bf3807d0e7f8412a0"
  },
  {
    "url": "python/poetry.html",
    "revision": "c56dbf04ed5279949e3921dc57950068"
  },
  {
    "url": "python/pyenv.html",
    "revision": "4cfed9fdff90d6c227d456f065b53ab3"
  },
  {
    "url": "python/python-ase.html",
    "revision": "0a02e8ab0f54d249b984f9eb235e1fdf"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "6ad14a41cf41b9451e8f8c88143b87b5"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "bd64b30bf961300b3e3641f10312b9f6"
  },
  {
    "url": "python/python-file.html",
    "revision": "33ec699e494bf820414531350f3e7afa"
  },
  {
    "url": "python/python-function.html",
    "revision": "17c11b06bbbe84d3e9caf436f077d4f1"
  },
  {
    "url": "python/python-generator.html",
    "revision": "8c774a6fd673aa3ea2f20cdbca307a4c"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "27f6e08e5c15a34aa09e5fb53275c8b8"
  },
  {
    "url": "python/python-module.html",
    "revision": "43fb92bdf911f7705dfb54c848a990c5"
  },
  {
    "url": "python/python-string.html",
    "revision": "0cc0708735d551ce17ba0c46090082cd"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5b501923ab0022ddedd520bdc6133a2e"
  },
  {
    "url": "read/index.html",
    "revision": "4cb24a6e2105fb7ba154b8b52deb08b8"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "27e6e50e21f852ba4bf35bb50b2ec44d"
  },
  {
    "url": "swift/better/available.html",
    "revision": "5a057ca9cf1f77230c9d5870779292e5"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "bac3fe6ae51dc5ea74114309de000761"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "3f8f0467a1c36e57b1fc0a4079698e6a"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "27587b453a3a8dc4b066f32e2e19d3a8"
  },
  {
    "url": "swift/better/di.html",
    "revision": "d75c2735bc5c9912ab7c982ca3e9e597"
  },
  {
    "url": "swift/better/index.html",
    "revision": "df406ccae2251dbca5d9c4fce4de0723"
  },
  {
    "url": "swift/better/last.html",
    "revision": "59080c5f65c328e434c20912daa29d6e"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "ce38477e5f7ed134ab2e60e877dc975f"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "cf524e33a0aaec74c99f646e76497e3d"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "0b4130f8b01cc3f690f781f5f58edecc"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8e932613af2b9061e91722ec0237b0e9"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "4e875e7f3297e0eee50a700f3d78fc63"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "37a345c6e984ca974ac39f12ad3b3fe4"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b7ae5fc5259116c8a31a005e9721bfff"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "77fb52ae1689c4f8e6deb6a2c12e36dc"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "74f89fe3c6436f044c03c32e81482945"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "cc2b1c5a7f7f1a060e90af142d5e2aaa"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9e0b8bae1e36ab26eb3204e7f043049b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "cdf4b1d46614a02546ca762418fe37ce"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "27f0f9164b6479a26b2a219f42afe656"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "b1fb5740a6604f81275474326c57cca8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4ef76da9b905ad0949572ec56624ddd0"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "51d8ba3f40337a714e3a233c079fe442"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "e9403e7a4b04d21a4e8118f9c35c2530"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "e968e5f8b605aa1a55861bb8eb12d817"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "0855a14d2cc94de473532c2578c7668a"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "f002364ce6dff5a91ab5fe58d9f6ca6f"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f38f518acb2eeb8dfcc0cb32efff8851"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "abf266ac421c3f7eb11a27e3dc6c4946"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "efe6cb8b4ddbb482aa6f83e4f88bf291"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "704bfe8f5fa16232dc49bc0d8280795f"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "22621f1916df82ba42507faa78075074"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "fe1a2b582dfd2ee1e75546e9897ca41d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "112619b2cfcd86e935bf3ac02fe2675f"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "bd827a8375db31e89ca8d71cb77d4abf"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "0ae411010e0a47f0de2c5522a5aa96e3"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "e3fa2932400ea22b295cfecb98020ba4"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "1eb8c4cff91ff58258ff1b231b1daaa2"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "929ffcf6a01a1ef081f142644f1b665c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "955efcc0b73b5c7e4dc71b98b4274127"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "620adace7a07bb6a30eb4b5473a04ded"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "ec405e5e04e10eb6004a203e8f1996ac"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b2a873c2f40e974284fbae9a6d99c9cd"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "19124b81de13d6029b701d09afa19911"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "93b8899db6b299a26ee9d9d5397107ee"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "0e11f0169b05a15f3c87445e7952b7a4"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "f3572a641d056b5238d3ff7cf745bbe9"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "ee3167e317b2b539f305bf46f93fc965"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d26baf072e9146120a351c858878d8e0"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5fdebaae6c81651f3945e500a2001c1d"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "7100b477aab2bd3c9b7258323f51a865"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "afa7ab89e780bd7b51432a42cf2188fc"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5fe4b105f6f7894c9a3ef5c3614b2267"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2e8ffc11de60f104db0e2ac88a8209a7"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "7a73bd5df0fb80c65ebf45acb32120ca"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6e4420b50665703188f0883bca753ada"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "076e0389860bf6e3bc0f9e07b4ade0b1"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "a04c7a40b15149bd733448af2ee109da"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d63bb563f8b4110194c330ce5ad8198d"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "46213490ba5f1c7874aab978152065bd"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ed223b4f744a38d6e5d3888e352c5cf2"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c04a0890f64c896816ca4c56bd2d1633"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "0359b4a22d8ed1867e3f5b54a657901f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "514eb42c6ae0d366d76a033e17922d75"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ea5746a61eac2925afb2d4e2171989ed"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "50d618e5861c4aa6e1819cc53da12135"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "2f89db5a631e01264a15f6a144272f52"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b7865e9c8e1fa03ff7654811ccf387c0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "99caf59b273cba13524a9cd213b10120"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "bcd19a77165577d76336681446413a23"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "97e9691040cb6580aff25e61fad89085"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "d6f01ec53eae48c90f4f893c337464cf"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b564118c6bea4a769f4d6b7357cad3cf"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "0f4b76ca64677969e4f68d16e1b8c2f7"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "0e83a320e5694b274e3349b557b5ab87"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1e0059a80954435a86ff6d7bfc97597a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "a429d844709d1bb4cbd30a0a6333dfdf"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "02c5122d0d90e7f0aeb23532da74d7e9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "1564353169d451d01081351c4a8ef4f2"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "84069425109000adec7cd6fe35d0f10f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "fd22924971fa9af91019d7388c2d3f50"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "9dd6c5551c6ffcd5ca1dd596d5e50873"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "5b68da0e8f7c5468660d923e4e251e69"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "26459d9a5ef1618e501644faf0702558"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0d84ae506e1580f1838b1bc548f83017"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "c6e7ef1338052abe196e1cc88eda163e"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c0c83b8871bbc53f10b8e04a9908ea0d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ce2c126b45cea8d0caf0f9d27b7b6789"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "015bc4de8d32cfd6d6ed801229a001e3"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "7f5fde0a2d226c84cbc394d2edc8eac8"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "146351f9fb81190f492fd65ba7e14505"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b4ea9898dbd81ad1a42cc59946f8b5ef"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "854fabdc1f991e20c99df39e141347a2"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "026d90a41d98224bc654332cf695bb06"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f1fb5001ef44356b3d4c61de51a9b47e"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "ac52ee92680f58bb95842e777cffa7ea"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7da9ed3e6e2642f52b33a25addadb521"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "77eaea19bb7fa1d80fb1ebf41c1f15da"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "406356be2a60c753b03f8211a0eaedf4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "6849517f1c544ba336040d94512984bd"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "137ee85f8e254c828a5daf34c63d9458"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "0d21274d5800910b24a521ddacaf6879"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "29e74e6e08a4c2a20cf6250d6af1923e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "caea355d74e701a2028df7c4b8d5699d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "63d3f1d6a9dcf50ced93edcc927da663"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "79ec128638ca0fe1c2d3e482b1761f9f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e2e9c7e74514f9531bd9987c13f4a24c"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "09e01d305aa9ab3769b8ffe52c9fda79"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "6f601de28f4d75447626d1ca8c1623af"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "6915c44e8a6f2ca0fecb6b01375c04b9"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "8fa71c68be58b612257af1cc5f4d4dfa"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "9ed5b65d961ad38a5d8f215a5ad77557"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "bbdf921b595dc2a6f14b9cc1a0e3271f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "704b02697fea1c8e7343e79985fe7428"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "2e370c66e28048ef8d4299eaae15ae61"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "44ae8829460f9f0e8cf61429960ec0b9"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "0925f14b5dc9f154ac087fef0c36a66b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "dbadfd686f5d9c75729a84c9759ad078"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "71f5c782cd824d40a458285795ce195b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "7b28e04b563cb137da46c447548102b3"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "a5865630d5e4f8dae80b3b721d36e6e5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "16f9385b2d7f41f837560c6d68bed51c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "1ea62cf57b2250ee9faeb7911f8d00a2"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "904d9ea757d6472dc66c217e0df3a223"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "6f272fc36ce6980d27c0c416f00ad7fc"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "b0a88f3ab6af39dfd9bdee850001659d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "3aabea98b18f511dd85eed4222248f08"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f501f3ba981bbc0ef7008168af208746"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "933cd25314483eaacc71ad1331bf018d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "46745d7afd7c4342ef381ce94448b25d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "67b36158aa8ac97a559f237761217187"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "917a753cc43e0dadc0042adc2c05b7d7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "efa4974fc9b165125733df8198e91bbb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "65989f12790a5d7784eebd7fac388854"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "0358379e266eb3f7b1c4fd5e6f086280"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "344cef4dc285460e6e9cab3a484788c9"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "df8da83c4147078ab56a150d6bda35c6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d3367525532b89ae1f51f2185cc67025"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5af9505ccbe67b63ca6a35f8b3d5d483"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "778d0eb28d471872faad218f118c8a75"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "5bcc2f99af6ce93f36c229e3f0fddbde"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1cbe80196f81d7140d1e88cd0e637881"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "634b07c9c001c904baf65db18b4b978f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "6f15cce64928f2f28023292af5354627"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "617668aac46298d24897a474a462f1d4"
  },
  {
    "url": "tag/code/index.html",
    "revision": "4bfad412b5bd1ea602cf9c3bc768b470"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "4f3b05856984d1194105f65cfb211b96"
  },
  {
    "url": "tag/django/index.html",
    "revision": "16525408ea8f53e83be93b203eb31a84"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "9eaaa059f990659454c3eed54c1c4052"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "4ddd0d30f97b78b18fd884462448b64f"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2ac856dd630ffb421c6ce60615d2f219"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "b580a76ca251f9146996a805abb9f204"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4ada0ad88f20c142c728d69f274d3e5d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "898dfb93460c5a95ef14efff77d22e59"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "8e71ee9bf04c7cadbf0ae0bf37b3d611"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "8ccea001508d729e330e5348c7f00ece"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4c10a404dbca5e4304dff85756e7f2c1"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8783b98c94fe3fc9633230dc71c98a64"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "2d324e238631723cbf0dbcd805a13611"
  },
  {
    "url": "tag/html/index.html",
    "revision": "cecea0605e5ea52d5750d23ebb02129c"
  },
  {
    "url": "tag/index.html",
    "revision": "6ee1bff338bddbe59f2b3621ecfc0db9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0e072dbac40e6fcb94df3224186f26d4"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "9887e82292f659334030ab7597d446cd"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "4375ea5953fa84756dd9fcc3048e6882"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "66c44612174bde22d270a3edad5c178c"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "2aa0b9c795e7a36e733a3c0db6b10f21"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "e510bb1988f4d5d5c56ca27c1b268edc"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f0369daa9dff139e4cf9e73c59b22cb2"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "d62957a4e46e267d0469dd906b4f0978"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c3a93fe568f551f152dfa28ef6179be5"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "51f5844d4bf8549d756b6aba148ef2e4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "d2214a070ff6ddb147294c019dd7566f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d8e5d2b12cb569227801bff8eed50580"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "3d2d9b31caf8843e6b44fabdfbbb599f"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "46f44e8d3cb239a8482c1e59d3ef28c8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3d08ae8ad18379c500053aee8a0cfa37"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "c8708f2c49c562f1a6b6e38469d37a22"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "b6fdcdda47fc255232f53b75d24870cd"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "86f830953cd89196d666f7ac80f75da3"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "8ce4a685274316072e7c49c736bfa44a"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "c879c867c4e085d6589b936faff81324"
  },
  {
    "url": "tag/python/index.html",
    "revision": "aa8089fbeba81dadf63ede7e52988c63"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "ac95b6b92b354df354d39fe020333e5d"
  },
  {
    "url": "tag/read/index.html",
    "revision": "81f74005b5942cba1b0f323ed6f2b445"
  },
  {
    "url": "tag/review/index.html",
    "revision": "028b7053755de628e1eaf8ed153f8488"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "35a4d02c04f79b16b806f204ae29fe93"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "1ce46cbdaadcc08513a7d87c07f30154"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "a0765f2d67f08c4a00522da5bd01e1a6"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "db76752fa01fe609e9371e9573948b1e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "c76f1d89bd8d3a49e6ecc89ca511ebae"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "b2e2c7cae4a0bfcd7ce5362d8cc3a06b"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "e3852e8e46835f5d156336a026848823"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d3779e3ab13e9f72ba9fae23890a1e0b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7b48923dd407c89bd20b9cacc529ae9a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0bf560935eb8226ba3e0fe7733caaad5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d426ed6793fcd167e37a1bf9539171ff"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "030fd461e3566ff6b97f85720062ef96"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "3d12c91c8b1d15e8740b06229f0798c9"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "faef5953a38c5ad7e6bf57c4cab911bd"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "6660b8e06ecea3b0efff5c6225ba3575"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "2da93e3c1c26d5d61d4539d52a332050"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2dfcd78e8db2ce9f5172fa265550a56a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d36d5374ed0b6633f3845759c477c25f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e90967b85aaa1818acb39397893ab001"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d542cc85d1b2968846b8fca4e8f18919"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "de1f7978d52788b742e201e83bd0508c"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "f94a53e7bff15769ae3d5de6d4862152"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "6d2422e76e7e407fba5fea22da6b74a0"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "ee0273d68356afdb4f4cadc53da6d478"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "265ab00ad65e307565c446a5e0c98c9a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "c75ba3c813da289a26b532daa59de4b6"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "af84396bbc03ae7ed5b9b98cd0d406c5"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "3c53070acb758e67bb746a3bb8afcdf5"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "8b6805d948f8376efbefb80ebfd15ab9"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fedaf94ea5742e9102b83d4e926bcf29"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "50037b62dfbe045f2032230d2fa97d53"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "366796d0c8862595b0101c2b68f60c5d"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "44de7a9b25f957f9ca2018b57fa83182"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "26b0637a6e46587c5cfa9a61c0db10b0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "49f787d05bfd33c707032950431fb0bd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c439bb0478b5bf672575cf7c881da73a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "01d6dcbaca968f956b5ca333d4f87a29"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "517644f8c6000d23cc07699104ea3769"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "5298b44708ce2d82cb0721a660164844"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "b6b1fed74b4fb05cc552abf2cf826a26"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "38399d116281309e63ca32d09d306989"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cc2f3c433bd8afb6e721fe2b2cae241f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "6f5c6c228d8f94d162adee6c808deaa7"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "0c43631e5b867dc68cba76b2f3feaacd"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "52815501cfc0a7e0f44119e4d67f219f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "acc51bb19b4c7ff9dfdd260ffffdadfa"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8779a3184fade1ea19f0473b4e8fc649"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "645dafbaa2d2128e600b6dae3acd967b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0e4b1a4f0293a88c3f0730e555bc9742"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "85b4e5f06dc6a9ccc7f50e4fe5d1b8c1"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "6e0fe134eea898490dfee8100b21f17d"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "039844bc62190a4066651427dda9b38c"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "a1ffd7c209f636cac175d9d47e0c3973"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "0b9e7aef16ce1e0d068575e260b37901"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "5aef99f7e73a811eb1b2bbaa2be8b333"
  },
  {
    "url": "timeline/index.html",
    "revision": "d4aae9b4218d6c5b7a746908bd3cb1d1"
  },
  {
    "url": "tools/code-review.html",
    "revision": "30b7547f81d4ece528236a4e8fc2426e"
  },
  {
    "url": "tools/docsify.html",
    "revision": "2da2744c14e6957e752028f5db7b3c4d"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f278dbce998baf6bfd9296f4d3076262"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "77b3ed3e38f447dc43d00d655be18de2"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "9e6a89eeaec648f94eab93c2aad18741"
  },
  {
    "url": "tools/git/index.html",
    "revision": "909ce15b47bba739600c5cb786a3c36a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b6b4c6d5dc4ea7bf04d416e356154f04"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b5ba8f94790def494a3282b8754fa746"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "509fd2c0877b4391a1ef3cff2d79fa91"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f8bdf4a8ae4ac31c5e34e4bac23ddcae"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "695378f1e090204afcc9cc59ba2a882d"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "88d0349645a6bde6f1fce8753d59367d"
  },
  {
    "url": "tools/note/index.html",
    "revision": "d2f49f7d822635d4129e55442ab93acf"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "22ac734d3935aa53f23b689997ac9248"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5fb1ef86b1fe0d4020919b61a0f23d0f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "cb5dec010075ebb37f25910e2030123e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "7f194653378af59950fd907b2d7f7532"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "744bf68dd7e78b5053c8e0bcdb887239"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8775484489843630f63905db42cedbce"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "982b4945ffeb4066e73be6824fa26f62"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8b4300f93993282f718145d8977a6461"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a991fad0c9e2a8c91cd02dd1a311c2b1"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "cd24db7c4db221bb1a7187a7ca832a44"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "799be46cbe08574467cb3905ca768b06"
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
