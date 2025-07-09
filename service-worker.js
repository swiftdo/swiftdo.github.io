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
    "revision": "54f94c30aadc413499b75e6a3e2b3526"
  },
  {
    "url": "about/app/index.html",
    "revision": "03a8eea939d33e28802ef21ea0968e51"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5dbee38ba1d54e6de0ab2b013836e93d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f2ef3670ac35646a28668d192ea17587"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "364dacf00f985ff089da63598eef3ce9"
  },
  {
    "url": "about/index/index.html",
    "revision": "db3947e5c226afe44361fa54f5c24f25"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "ba2665f377bc1e36d76bae6c73495278"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "03887c5a226b477dac2eb1b143749fff"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "e46fd9d561cf3a048523c6117c9f14ba"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "dcc4c864f66d97b8e1ced6dca1e76ea7"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "70d178bddd27b7efa84cca67c6544c75"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "7590f04c1bd7a28c1362f2d0fcf608dd"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "399bdec479f58364acfdfd35d1ef007b"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "02937ca9d61847394c79a2c4d9e59ee9"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "7dfc2641c03c4861f8d7cdf1b071a4e2"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "5e11173ae947a268044475b6d515d62d"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "d1e853e339cf7d3dcadcd91d54b769d5"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "ed319d846c3e2d47629fe724e1aad0b1"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "9e8b38e9f1b4da28b0f9b452f4e7ffc1"
  },
  {
    "url": "algorithms/index.html",
    "revision": "940a90b7419199bdd07a4d7f2513d33d"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "bb9fe2c4945414c306dbe524a4f4fb26"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "03d9e4fb576a9351fdb942d53e4cd3ab"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "a23acac1439ac40dc9070c0b156c1926"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "49c8f80d00be77d731aab2264b700da2"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "808dfd27deab881fd5636099bc2149a9"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "d9e8df67603a81ddf6c9950ef142049c"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "0e50b15b32309401e263f6768451d6e5"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "83500a4998290ad91b602cdd8a60e27d"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "600d4c3b18e03c5906d636985d16d210"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "e62058a8144821bf50e365feb72ade42"
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
    "url": "assets/js/100.9a191803.js",
    "revision": "d340cccd11fba77d839b44d073f68a0e"
  },
  {
    "url": "assets/js/101.9648cc91.js",
    "revision": "e0f037e09b6e4ab3b05f3cfd5914768c"
  },
  {
    "url": "assets/js/102.0dcb355a.js",
    "revision": "78db6974db79a5178162e8c283ff6861"
  },
  {
    "url": "assets/js/103.a1f07497.js",
    "revision": "715671f313c7648b85d994fb830080b2"
  },
  {
    "url": "assets/js/104.cfe1617b.js",
    "revision": "77bd6587729ef28e9f6075869cd13e19"
  },
  {
    "url": "assets/js/105.908d5333.js",
    "revision": "67f161a36eb51d0779e2db01c27135bb"
  },
  {
    "url": "assets/js/106.ea1b6a75.js",
    "revision": "d19605414454cb481c1080df13d0b124"
  },
  {
    "url": "assets/js/107.3c40d19a.js",
    "revision": "c01771cfca17631c52e2828061de3658"
  },
  {
    "url": "assets/js/108.cfaefd8e.js",
    "revision": "8cf4cebee69e17548802d28911ac64a6"
  },
  {
    "url": "assets/js/109.1644b618.js",
    "revision": "f207be312ff1787be669a0f2ba9f0bae"
  },
  {
    "url": "assets/js/110.fd8aba49.js",
    "revision": "d64dc7af5881cbc678d86ede27a6b2f0"
  },
  {
    "url": "assets/js/111.9538ba84.js",
    "revision": "ba0d14524a1ae3f9246ae17c5f5d96c2"
  },
  {
    "url": "assets/js/112.fcf0732c.js",
    "revision": "594a656231e5bc9bf94ab27dbb6b4c11"
  },
  {
    "url": "assets/js/113.ea2fdc23.js",
    "revision": "9aeac81f7aa929e5f5fb65aa4f3cc6ef"
  },
  {
    "url": "assets/js/114.8a7b4007.js",
    "revision": "7546c7e251948268d9f9651cc839b6b1"
  },
  {
    "url": "assets/js/115.5d9a1915.js",
    "revision": "68c60ece2587a8b11606e2dea1344484"
  },
  {
    "url": "assets/js/116.6059dec9.js",
    "revision": "11af80819bcf79f0b5b563adb8d7f6cc"
  },
  {
    "url": "assets/js/117.cf93de48.js",
    "revision": "92ab953ba1a47d5b8387e41ba4f576e9"
  },
  {
    "url": "assets/js/118.62016392.js",
    "revision": "a858f34e532f87d4afb32bb860602775"
  },
  {
    "url": "assets/js/119.9689c788.js",
    "revision": "fef3d4cc55d9e91d1d34afb7c2b378ef"
  },
  {
    "url": "assets/js/120.b027b0c5.js",
    "revision": "8bffee5cedb64b39b7e48e386ad8c6f9"
  },
  {
    "url": "assets/js/121.08b34763.js",
    "revision": "6e8097b2068d5180bd267717f120b5f5"
  },
  {
    "url": "assets/js/122.39fd27a6.js",
    "revision": "d28c630bce7e458720769a4d731d0651"
  },
  {
    "url": "assets/js/123.7857dff2.js",
    "revision": "431d9d3b2dc756eb9e062d8cdac1d44c"
  },
  {
    "url": "assets/js/124.4676581e.js",
    "revision": "ae098627894e55a74944ac687feff1af"
  },
  {
    "url": "assets/js/125.b3129bdc.js",
    "revision": "a838c8c524ea797923edd814f7024f1d"
  },
  {
    "url": "assets/js/126.6452ab67.js",
    "revision": "ace46c9d1a4d05b91b8a732c35f3a331"
  },
  {
    "url": "assets/js/127.4851eca3.js",
    "revision": "53185e3cf4b56aaff7479d2a4b52621c"
  },
  {
    "url": "assets/js/128.606f58e3.js",
    "revision": "e99f5ccbc63c9020eb19d71659215437"
  },
  {
    "url": "assets/js/129.4a877beb.js",
    "revision": "ebbc4167379a76a74b1b2bf204136916"
  },
  {
    "url": "assets/js/130.0b5c1b12.js",
    "revision": "ce67b2e9efacb897c49daec4bc422c4c"
  },
  {
    "url": "assets/js/131.63e185ab.js",
    "revision": "8fdab96750171e6ca33cb9aff748102b"
  },
  {
    "url": "assets/js/132.48c67f75.js",
    "revision": "c1e3b66fd28c8bc204014e06585b1fe4"
  },
  {
    "url": "assets/js/133.34a109dc.js",
    "revision": "995e88a072720ad8d7ee8f510b0565db"
  },
  {
    "url": "assets/js/134.a2bd0679.js",
    "revision": "01576910ebbc0c7a160ad8b17833c2b9"
  },
  {
    "url": "assets/js/135.ec0b567d.js",
    "revision": "f7efeccace228b5b8fbff6fe4436d3d8"
  },
  {
    "url": "assets/js/136.7d61b910.js",
    "revision": "d03e4416bcd9160c16a84a5c808c7fdb"
  },
  {
    "url": "assets/js/137.7f8c9a93.js",
    "revision": "4900d8b12e63e4e2b26e574ba0fbcd1c"
  },
  {
    "url": "assets/js/138.76c7ddc3.js",
    "revision": "8efc9a6ed5065750641acbfa62f8fbc4"
  },
  {
    "url": "assets/js/139.e480c685.js",
    "revision": "04df7b1ed8aaf328de769115d9eaec78"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.4700ded8.js",
    "revision": "b630c0e6a945dd013134ef98656b60cb"
  },
  {
    "url": "assets/js/141.a854096c.js",
    "revision": "3ec1e137a1e6aa51311bca95111d1bc7"
  },
  {
    "url": "assets/js/142.358ff8b5.js",
    "revision": "1802dc50c2a51f07ad0f11f571f621a5"
  },
  {
    "url": "assets/js/143.cab38e41.js",
    "revision": "828dcdb1818c80ccdbb5b84ae913adce"
  },
  {
    "url": "assets/js/144.9ce87475.js",
    "revision": "34b7aa2f55d3163d50b4dbe4887f6ecf"
  },
  {
    "url": "assets/js/145.02783965.js",
    "revision": "2863177a97a5c118b63cdd80c4e22906"
  },
  {
    "url": "assets/js/146.76c818b0.js",
    "revision": "301031ccd180f97a3304f6098dc6be18"
  },
  {
    "url": "assets/js/147.f3d81a32.js",
    "revision": "f1ea7745d14787272744150703225994"
  },
  {
    "url": "assets/js/148.8c4ac463.js",
    "revision": "f8fac3d7fcf43d83437e1bfeab5ed0ae"
  },
  {
    "url": "assets/js/149.52e340f0.js",
    "revision": "6f0d6f3127a3ea99985c96251e488c2c"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.5c145eca.js",
    "revision": "9fe3a8108544374fc5b0b7a58c119c45"
  },
  {
    "url": "assets/js/151.4acbe995.js",
    "revision": "831fee3d006d6346992301d99538291c"
  },
  {
    "url": "assets/js/152.64ce1a9f.js",
    "revision": "d1a848072143b6b1e6208c8ca5c7f41a"
  },
  {
    "url": "assets/js/153.6ac3a1e2.js",
    "revision": "920f39f2c3c7c0263e3b925fa54bcdc8"
  },
  {
    "url": "assets/js/154.c4613054.js",
    "revision": "1c0b285286bd5e623d9d624dad57a7bf"
  },
  {
    "url": "assets/js/155.d4dc2872.js",
    "revision": "8064db2e0145282eafe839c883f3b718"
  },
  {
    "url": "assets/js/156.4df931d1.js",
    "revision": "4f01ec4b85ed0643df34a1ebf3927c79"
  },
  {
    "url": "assets/js/157.dba2aa4b.js",
    "revision": "c8f9d6bf96aba3114f011de849224711"
  },
  {
    "url": "assets/js/158.e3a2a1c1.js",
    "revision": "02fe25f6a1b595d3d4381e34e84dfa5b"
  },
  {
    "url": "assets/js/159.8d0f2988.js",
    "revision": "9b2a75f1045ec76781987a825b7c1e6e"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.39f496aa.js",
    "revision": "dedb529e215eda6428297682b0295980"
  },
  {
    "url": "assets/js/161.bdcb5c92.js",
    "revision": "688d01a80d7c8a0d30001ce41f07aa3e"
  },
  {
    "url": "assets/js/162.e3c8a326.js",
    "revision": "807c5e490f87ccb333e28d8cc8b4735e"
  },
  {
    "url": "assets/js/163.bd377015.js",
    "revision": "4a7e1444b86d695a84ef4155443550e5"
  },
  {
    "url": "assets/js/164.3e5219d7.js",
    "revision": "4bbf9b3ef2b4bef4a558c21a899d01d7"
  },
  {
    "url": "assets/js/165.ca9ac122.js",
    "revision": "0441bfaaaac88b54dacad8339aea8f59"
  },
  {
    "url": "assets/js/166.109349e8.js",
    "revision": "b3c5b6ec4ffe7e4ad66798dff40f3805"
  },
  {
    "url": "assets/js/167.31024355.js",
    "revision": "73f5afd34147c1a96e99352822ce5a67"
  },
  {
    "url": "assets/js/168.d2bad753.js",
    "revision": "173d65cd64fc2251f7c9f96b6fc344f1"
  },
  {
    "url": "assets/js/169.8c8dedf5.js",
    "revision": "d09c3a274d58f93cfa08f8576a689ed1"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.7c3f5f31.js",
    "revision": "d8bee1155d4800e2b0e7ac5b3b0ed90e"
  },
  {
    "url": "assets/js/171.8180a3f9.js",
    "revision": "4bc05f404be11f25925281e3a3308493"
  },
  {
    "url": "assets/js/172.dfd177f4.js",
    "revision": "95c95714f2add026d2c4b21c37532989"
  },
  {
    "url": "assets/js/173.d6e9c1c8.js",
    "revision": "baee81933905f93ceb59a263a44ac22d"
  },
  {
    "url": "assets/js/174.dfee3bc6.js",
    "revision": "abce52618d9d2098ee9313214e201605"
  },
  {
    "url": "assets/js/175.79eb16e6.js",
    "revision": "06f03025ac8d65276b6e255e2f88db9f"
  },
  {
    "url": "assets/js/176.5802d485.js",
    "revision": "7538b1a8ad2e20beb80e1dfcffa4929d"
  },
  {
    "url": "assets/js/177.664fe50f.js",
    "revision": "ee51d1ac0a9199810616f09de6104be6"
  },
  {
    "url": "assets/js/178.e6595dd4.js",
    "revision": "80ae2dc9ff7e6bb8957729054634cd0e"
  },
  {
    "url": "assets/js/179.3400b5a2.js",
    "revision": "9ede974faad601f68fdf3c1c4d58ce17"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.45725aa3.js",
    "revision": "4b2bc265763acf0c4828d646660870d8"
  },
  {
    "url": "assets/js/181.dc097b5c.js",
    "revision": "90c78ee118a59b504ee1180f973ddd3d"
  },
  {
    "url": "assets/js/182.9f504798.js",
    "revision": "1d0885ccaa820a019f57e06132fc9616"
  },
  {
    "url": "assets/js/183.40d0fd84.js",
    "revision": "c09e6413a3506a77adeaccb4dcfe8748"
  },
  {
    "url": "assets/js/184.2aa338a3.js",
    "revision": "459c9ed8cb4107d18dd7e3643ab080ba"
  },
  {
    "url": "assets/js/185.609f2c87.js",
    "revision": "b5f89bed8d8d0a6dd8c4a9431d563427"
  },
  {
    "url": "assets/js/186.c337eb91.js",
    "revision": "4c6d65cf54115552d669cdc4884ea045"
  },
  {
    "url": "assets/js/187.960726d9.js",
    "revision": "9bd7fab021d296357ba405fa87014928"
  },
  {
    "url": "assets/js/188.e7f3487f.js",
    "revision": "b56e959b1a50228a1506d6533abf2b41"
  },
  {
    "url": "assets/js/189.1c5f2c87.js",
    "revision": "3476ce95ce15a6569b0e79ab02c8c06c"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.17b037f6.js",
    "revision": "6e5f755f0f704321821f4a3785999750"
  },
  {
    "url": "assets/js/191.3fb3c665.js",
    "revision": "7125fd454a6d220bfa9263bf6c9f2595"
  },
  {
    "url": "assets/js/192.8b0ec8e7.js",
    "revision": "7109a8c1109032c06c7ea36031f0fa0a"
  },
  {
    "url": "assets/js/193.7fc39720.js",
    "revision": "0bcb6a8522ad343ce60278e4c5c4e184"
  },
  {
    "url": "assets/js/194.193f922c.js",
    "revision": "fb9a7ed5cab72afeb206fe730d82bf8d"
  },
  {
    "url": "assets/js/195.1ac943d6.js",
    "revision": "127a25aab322d1262775c7d4f425a11b"
  },
  {
    "url": "assets/js/196.edd5cfd2.js",
    "revision": "7c2a7a35dafe9e58568e8935d8debaf5"
  },
  {
    "url": "assets/js/197.091ab190.js",
    "revision": "57c7ea0a2fa7a2e38addaedfff062e6a"
  },
  {
    "url": "assets/js/198.008d6259.js",
    "revision": "671e9c90e9726a22979da4ee7c987bd9"
  },
  {
    "url": "assets/js/199.1d2a4f54.js",
    "revision": "7998e05082afe559cb098761546f0499"
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
    "url": "assets/js/200.6ec0a2be.js",
    "revision": "3c91196fc59f3494bccee087e0a3dbc6"
  },
  {
    "url": "assets/js/201.e4106efb.js",
    "revision": "0726a5d36e9c85c9c1718d1dbd75ceb2"
  },
  {
    "url": "assets/js/202.ad03f2c0.js",
    "revision": "e467523d3c9d7ab6413428537e000b21"
  },
  {
    "url": "assets/js/203.0d33cc4f.js",
    "revision": "e6f222a6007f3c688397c0ce1f5c8578"
  },
  {
    "url": "assets/js/204.a400ccb2.js",
    "revision": "3d122b8a160e997d941a96f09a806708"
  },
  {
    "url": "assets/js/205.a69e0188.js",
    "revision": "b8033181a581635cd86de9234e798cd5"
  },
  {
    "url": "assets/js/206.d63976fc.js",
    "revision": "ad082319fb512dd47dd8bb8a695b087e"
  },
  {
    "url": "assets/js/207.90a24102.js",
    "revision": "5383af695a18e01f4b6080e970875208"
  },
  {
    "url": "assets/js/208.d8c45ba6.js",
    "revision": "d79ec7b4b0f0c8bd6878f83dfd4192ef"
  },
  {
    "url": "assets/js/209.296ff9f3.js",
    "revision": "ad86e9ee3646182798627ab6fbf821fc"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.a1ec8fa1.js",
    "revision": "64f27509e69dbe7aac47e4da2812b6ee"
  },
  {
    "url": "assets/js/211.cd02dc23.js",
    "revision": "2e5d018f630a23912f7b0fe983c51033"
  },
  {
    "url": "assets/js/212.043ed9f8.js",
    "revision": "174a4172230a28e3d60d02642064dac9"
  },
  {
    "url": "assets/js/213.536dbd4b.js",
    "revision": "e1f59a02eb6cefc5dc1ddf490895b214"
  },
  {
    "url": "assets/js/214.ffa1744a.js",
    "revision": "6fbe8179eca48952f1caf786fd0ab35a"
  },
  {
    "url": "assets/js/215.17688a14.js",
    "revision": "7f772aa75e9d6b6958310ef25252546b"
  },
  {
    "url": "assets/js/216.21079eb2.js",
    "revision": "151f2ebb5715c69c1a43b5626f1926a8"
  },
  {
    "url": "assets/js/217.ec819c26.js",
    "revision": "7296204ebf058a398e7161daf680016d"
  },
  {
    "url": "assets/js/218.8d5ce2e9.js",
    "revision": "465bcd10fce145572a47b155cdb3a5c3"
  },
  {
    "url": "assets/js/219.3925f659.js",
    "revision": "99d9fadc0cb6fc2099801bcacc6b74c3"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.e98064cb.js",
    "revision": "8e60b24e692b77747a518235d17b52f4"
  },
  {
    "url": "assets/js/221.b0dcc423.js",
    "revision": "6f55b67bd35d4a25e887394c9da98e45"
  },
  {
    "url": "assets/js/222.50f17516.js",
    "revision": "bfd86c61394d434b23981ea96a90db14"
  },
  {
    "url": "assets/js/223.56cdec99.js",
    "revision": "155d18be687b87ef26a6fbda57b4f21e"
  },
  {
    "url": "assets/js/224.bae9f2d6.js",
    "revision": "ba520ac55f4301be0a2f0b2e952e5cba"
  },
  {
    "url": "assets/js/225.b78f8213.js",
    "revision": "665f465e6693deebc359a2362e6c494f"
  },
  {
    "url": "assets/js/226.5e9a6ece.js",
    "revision": "4630996935ab29f35abec19038f5faa0"
  },
  {
    "url": "assets/js/227.fe9bc187.js",
    "revision": "e5283f0ded2bd910daac467e65a32fd7"
  },
  {
    "url": "assets/js/228.28b1fc1c.js",
    "revision": "dee4dd5d55e076b0314258c456596e5d"
  },
  {
    "url": "assets/js/229.5b8cedd0.js",
    "revision": "308507348e6cd3dfdb76d3767ccb7d04"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.2d28a779.js",
    "revision": "e3d4ae58b7a20ca9b986ab15e6b2ed83"
  },
  {
    "url": "assets/js/231.30d93ad6.js",
    "revision": "b84d3ea53d3d4ed8cae929b8bd94329f"
  },
  {
    "url": "assets/js/232.41bb1691.js",
    "revision": "5d89b73be4557e94a95481dac58b57f9"
  },
  {
    "url": "assets/js/233.7bb13509.js",
    "revision": "d8b4ec71d3cbe631aab2b4608bf07c8a"
  },
  {
    "url": "assets/js/234.1ca1f596.js",
    "revision": "430ea4a0fe9758abab56cabb460e0f51"
  },
  {
    "url": "assets/js/235.a8e1f5a6.js",
    "revision": "d42c30e569c62ef944efca63d1b64413"
  },
  {
    "url": "assets/js/236.11ce6b14.js",
    "revision": "527980836afd64705b8427fc2c47b492"
  },
  {
    "url": "assets/js/237.5b647693.js",
    "revision": "0e3e07f94888cb870aaf0720735d76bd"
  },
  {
    "url": "assets/js/238.aa62801f.js",
    "revision": "f661e2893a5bfc96d4af8e61f5de17c6"
  },
  {
    "url": "assets/js/239.48b6ed24.js",
    "revision": "7218c7b19a1ed02e1cf41088f5c8a7e9"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.896e43f2.js",
    "revision": "f515a475746f44126f8057f68c2fd5be"
  },
  {
    "url": "assets/js/241.ed9ecbe6.js",
    "revision": "27e45d36099df8a24592cd249897fac7"
  },
  {
    "url": "assets/js/242.7c8dbfe2.js",
    "revision": "fa5a448d6032adb48c1c6a5231e7ed25"
  },
  {
    "url": "assets/js/243.bfcb978d.js",
    "revision": "8d728a54095e9dbb4a51199e7a1a7587"
  },
  {
    "url": "assets/js/244.6cdf3b62.js",
    "revision": "23918d8119bce487033dc23efee99dfa"
  },
  {
    "url": "assets/js/245.fde4935b.js",
    "revision": "96d1d4e601cecdaec12f1f7643a6310b"
  },
  {
    "url": "assets/js/246.28d7f2e5.js",
    "revision": "ce0ca76b8659198e463104a87c404d5f"
  },
  {
    "url": "assets/js/247.d2bb90ff.js",
    "revision": "63e7ee8e11eb112fb3032881f166a982"
  },
  {
    "url": "assets/js/248.fa726894.js",
    "revision": "e476dd6349dd1134e4bfe7fe1a268a33"
  },
  {
    "url": "assets/js/249.4134ff09.js",
    "revision": "845694c482997a5e95945c94a8d3d823"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.bd301c60.js",
    "revision": "8afbee7ec10a5e5663f2718292665f95"
  },
  {
    "url": "assets/js/251.515dcd1a.js",
    "revision": "4656153b639791f2711552cd3e3b0c85"
  },
  {
    "url": "assets/js/252.b20df191.js",
    "revision": "750b9fb1c74b8bbe85745b81b095832a"
  },
  {
    "url": "assets/js/253.8db912a0.js",
    "revision": "2b48c2aeeed3fb6affb87ad09a7dbbb4"
  },
  {
    "url": "assets/js/254.89123274.js",
    "revision": "32845323a58728ffcd81d28a10d428e1"
  },
  {
    "url": "assets/js/255.91882794.js",
    "revision": "1905b2bca959dd51a00f9fe8667d2c24"
  },
  {
    "url": "assets/js/256.f20dc28d.js",
    "revision": "612dfae53661155db26034c9d218de7b"
  },
  {
    "url": "assets/js/257.77725b3a.js",
    "revision": "2a5c25931bc679d7d68e77771fe9d5fc"
  },
  {
    "url": "assets/js/258.0a3af518.js",
    "revision": "8b6d1e45190b8dae3fa3232e15c6605a"
  },
  {
    "url": "assets/js/259.45e57daa.js",
    "revision": "55aedbabf38ab7c8a0ccf42111eebe9f"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.430ab690.js",
    "revision": "18447cea74d2aca700544200712cd155"
  },
  {
    "url": "assets/js/261.3a7b144b.js",
    "revision": "f405508dd981fd4cc975a869b4ec1c20"
  },
  {
    "url": "assets/js/262.ec1c0b6d.js",
    "revision": "36e1c17061a8121b1cd3500924888c15"
  },
  {
    "url": "assets/js/263.654090d0.js",
    "revision": "adc480d63e0c5488aaa02597a5a9ac57"
  },
  {
    "url": "assets/js/264.aba4cf41.js",
    "revision": "1f6cc9347925dcfee600e579e855dc81"
  },
  {
    "url": "assets/js/265.cb413aa8.js",
    "revision": "a4611efcaa17318b76482400c7d69bed"
  },
  {
    "url": "assets/js/266.88aa6eb1.js",
    "revision": "01afc2db83cc21b709557a0aa84cbdf4"
  },
  {
    "url": "assets/js/267.a61ea733.js",
    "revision": "c9b0ab1ad2efce27a07920816e781ea1"
  },
  {
    "url": "assets/js/268.c2e7045b.js",
    "revision": "63df85efaa19ccc74b37d17fc360fc8c"
  },
  {
    "url": "assets/js/269.22274da2.js",
    "revision": "f6e643912c2307c0b414833f4c639378"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.8f1410ea.js",
    "revision": "c9348d38880e636fef7d6218c9b5c5d1"
  },
  {
    "url": "assets/js/271.36e4012f.js",
    "revision": "fecb6151c767801df6c2a8e6d7c08d95"
  },
  {
    "url": "assets/js/272.cef12dd7.js",
    "revision": "dd89a7e96e6e7bc72ece5331f94000bf"
  },
  {
    "url": "assets/js/273.bf167614.js",
    "revision": "95b4e3b00c2b2960bd6f972e77ed6b2b"
  },
  {
    "url": "assets/js/274.3bafbd8c.js",
    "revision": "117c6a57986185e7c585070c3a881cf4"
  },
  {
    "url": "assets/js/275.3727b79b.js",
    "revision": "54f07fbc9e0034bb7eb8bf266f24b175"
  },
  {
    "url": "assets/js/276.3ffdd339.js",
    "revision": "8ccd727cfae17b985fd95db413d9e71e"
  },
  {
    "url": "assets/js/277.87b77ac7.js",
    "revision": "df5d0f12ce881d358ea85616cb93ccc0"
  },
  {
    "url": "assets/js/278.c056503c.js",
    "revision": "cbdc8b5dd648f76ae308ca84cd9cd33e"
  },
  {
    "url": "assets/js/279.8dee0100.js",
    "revision": "262691a93e79be03ab635442b9e76774"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.35b38797.js",
    "revision": "cc1f201981012bf78292112e5600e39c"
  },
  {
    "url": "assets/js/281.ee28daa8.js",
    "revision": "618f792ed3ebd1f2dc1370a57e88e698"
  },
  {
    "url": "assets/js/282.54cefd84.js",
    "revision": "71cf6c3c99c2546606a033ac0e05c7fa"
  },
  {
    "url": "assets/js/283.cc26211e.js",
    "revision": "78225a67aafc767120695fa697dea705"
  },
  {
    "url": "assets/js/284.b3f85ba3.js",
    "revision": "0e6b1caf9883a53e4465d10bece7e557"
  },
  {
    "url": "assets/js/285.0cf3f196.js",
    "revision": "1b25d42e8651a51571916b062a40d2bf"
  },
  {
    "url": "assets/js/286.2a0a3396.js",
    "revision": "9c9e291a7e64c505052fd8070275bad2"
  },
  {
    "url": "assets/js/287.34f15eff.js",
    "revision": "0d3253aebc706263c600827a0e4bb662"
  },
  {
    "url": "assets/js/288.dbc27a0a.js",
    "revision": "46ea33de2c6cc999be765b60a9dcefc7"
  },
  {
    "url": "assets/js/289.28272c09.js",
    "revision": "85edd717998dad50ffed741a958128c8"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.83ff02be.js",
    "revision": "4a4181327c22531e96387bd39f6dd353"
  },
  {
    "url": "assets/js/291.b879ac6b.js",
    "revision": "a097c476f8ddf4113caf3c12773e7ae2"
  },
  {
    "url": "assets/js/292.6f020db1.js",
    "revision": "88048e24cf6377923007ea5a74b3e63e"
  },
  {
    "url": "assets/js/293.d41ede9b.js",
    "revision": "90857289804c4137b208479806ac46f3"
  },
  {
    "url": "assets/js/294.130fc1b0.js",
    "revision": "80b18b99c7ea489fb1115519f86d8ab4"
  },
  {
    "url": "assets/js/295.ce781a96.js",
    "revision": "aef1cc74e74e0d717ea71a46051b85e9"
  },
  {
    "url": "assets/js/296.b747f20d.js",
    "revision": "85ae4ecf06b53995219e526b6c3a114b"
  },
  {
    "url": "assets/js/297.3e0688ea.js",
    "revision": "6c58ee28f7a670c8437008a29007e2a4"
  },
  {
    "url": "assets/js/298.6a193edd.js",
    "revision": "299ceddba561003c698602b83e919ec3"
  },
  {
    "url": "assets/js/299.4659bfb4.js",
    "revision": "f54254513c3e88820d25a2901739fc68"
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
    "url": "assets/js/300.1922e020.js",
    "revision": "75a8dbbb15c4dea12febe2965416ce93"
  },
  {
    "url": "assets/js/301.ac8527e0.js",
    "revision": "6adfd1cb7c031122eb5beb98f6a23277"
  },
  {
    "url": "assets/js/302.5c6656c7.js",
    "revision": "428dba9e44474c02dcd982712e91e867"
  },
  {
    "url": "assets/js/303.9b5a3050.js",
    "revision": "465a486efeb8565bcc79e5e1482e8af6"
  },
  {
    "url": "assets/js/304.799a8e12.js",
    "revision": "c1b2f21b2a64fa172ab2e3eadd2cfa2f"
  },
  {
    "url": "assets/js/305.b74784c9.js",
    "revision": "b152a61317c5ff0b7789560ae6c70582"
  },
  {
    "url": "assets/js/306.1d49b999.js",
    "revision": "c64e8257de9b853360849e42dd9f9dd4"
  },
  {
    "url": "assets/js/307.22518ffa.js",
    "revision": "6822e380d3e6c7a0b9b7d33e1761c823"
  },
  {
    "url": "assets/js/308.52651b7c.js",
    "revision": "cda7e125afa593e398277e862eb2c9ce"
  },
  {
    "url": "assets/js/309.87fca33d.js",
    "revision": "74819898b56fbaf2ebfc3be4e2cb7b4d"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.abcba112.js",
    "revision": "731e69da55052fa2867cf18afc10b5aa"
  },
  {
    "url": "assets/js/311.a3fa1541.js",
    "revision": "6eb338204f0c8ec599efa27fa0721e92"
  },
  {
    "url": "assets/js/312.9807fcf5.js",
    "revision": "1a389a6c164a2fc8723fbdcaea48bb85"
  },
  {
    "url": "assets/js/313.1b35269e.js",
    "revision": "00ae909ba9dc20e08b5ac1fe69f57b5b"
  },
  {
    "url": "assets/js/314.609a3b57.js",
    "revision": "526cdacae469b2d3f760c8c979a09be3"
  },
  {
    "url": "assets/js/315.6cb193e9.js",
    "revision": "8ca07d8992be001880576529e9a1e42e"
  },
  {
    "url": "assets/js/316.b22bffd8.js",
    "revision": "b3898419b7a69e6c707b42a74c39ae86"
  },
  {
    "url": "assets/js/317.1ea2c7a4.js",
    "revision": "55407e39a47ab40005b27cf4f4225a27"
  },
  {
    "url": "assets/js/318.68f4aa03.js",
    "revision": "077e0c90e352b5b05d7b8a6bb0bf17af"
  },
  {
    "url": "assets/js/319.0d5110cc.js",
    "revision": "74913ac6db3d7c8f48637575e09b4936"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.79102a94.js",
    "revision": "0651f116b5cfae65a81331055cf6876c"
  },
  {
    "url": "assets/js/321.97b60c48.js",
    "revision": "e65ae97f75b7583f9126b9af71eafebb"
  },
  {
    "url": "assets/js/322.65c871a3.js",
    "revision": "c27036b07e1d4416e6b9fd4742a8acf6"
  },
  {
    "url": "assets/js/323.febb3d45.js",
    "revision": "ce6e3501fd210221ac250ee04c8dca65"
  },
  {
    "url": "assets/js/324.69ddebd8.js",
    "revision": "62b4df470200de2ebd83a48620651519"
  },
  {
    "url": "assets/js/325.053ae176.js",
    "revision": "7c1e63679e011734eb29cc3be2bd0cc2"
  },
  {
    "url": "assets/js/326.cc8e667d.js",
    "revision": "2fd5bb133987436f6ab4b77cbe48272b"
  },
  {
    "url": "assets/js/327.aebdb751.js",
    "revision": "9e5000df503f980bf3f3e876d53e4fa7"
  },
  {
    "url": "assets/js/328.c3470ff6.js",
    "revision": "9be76dea28f7bd53d05e1a690e2d7d66"
  },
  {
    "url": "assets/js/329.830bda47.js",
    "revision": "8a466300d1316ff230ace3d1dba606fa"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.204aa066.js",
    "revision": "b0ef3cb65580084d01ee166a09131048"
  },
  {
    "url": "assets/js/331.3795f9ed.js",
    "revision": "ab6637bcdbeee661ab8afdd774ce1c0c"
  },
  {
    "url": "assets/js/332.7b054eac.js",
    "revision": "c259343135a076aa51d53f436f6ef3ab"
  },
  {
    "url": "assets/js/333.dafb0a67.js",
    "revision": "4127d18850e06e759a80438934528f84"
  },
  {
    "url": "assets/js/334.57b1a575.js",
    "revision": "325ca01d38c3bfe517a9973aea770b45"
  },
  {
    "url": "assets/js/335.2833f0de.js",
    "revision": "39535dc0d8ac0fc9ce7dcb33ce92c75e"
  },
  {
    "url": "assets/js/336.bbfcdfbf.js",
    "revision": "8c81ccc00f221f35dbbc234b08cdeca2"
  },
  {
    "url": "assets/js/337.ae994646.js",
    "revision": "d09f040ba0f59e8cf45e3e142bfd69de"
  },
  {
    "url": "assets/js/338.b3e357ab.js",
    "revision": "f123d7a596abcdc69878d07bb290ef0b"
  },
  {
    "url": "assets/js/339.3385628d.js",
    "revision": "a8beac524933b6c75f9483694e04c2a8"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.cb64ee35.js",
    "revision": "884d2a4ad715c3e23a3e0013cc07f9df"
  },
  {
    "url": "assets/js/341.56823788.js",
    "revision": "b1adf62a53f184c703835bd49cc01e34"
  },
  {
    "url": "assets/js/342.0e374439.js",
    "revision": "87c38625d226367b89e5234b771283f3"
  },
  {
    "url": "assets/js/343.e1ee0d9d.js",
    "revision": "56f8b8ebb680233bdc927c8808d8d983"
  },
  {
    "url": "assets/js/344.6831d6d4.js",
    "revision": "57fddeddb48228e7bca709e5c330fd0f"
  },
  {
    "url": "assets/js/345.5f1b5ed8.js",
    "revision": "59474e3c6cbcc0dc93d29c5066645632"
  },
  {
    "url": "assets/js/346.3c1366ed.js",
    "revision": "d22f0026e54390220f1aa209b0753bc1"
  },
  {
    "url": "assets/js/347.944424c0.js",
    "revision": "0a513aa0b2018d4d5e96374ac168425c"
  },
  {
    "url": "assets/js/348.a6a92459.js",
    "revision": "6d0d7291a33b1c805b470b56cafb7f86"
  },
  {
    "url": "assets/js/349.3d22acf2.js",
    "revision": "c7cf4cd96b1b3b21395595dbb2239dd8"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.a25a5191.js",
    "revision": "6a177e0a5d06a0719929d67a84ffe874"
  },
  {
    "url": "assets/js/351.ed952025.js",
    "revision": "23be292853a62123aec27ad7af3d5e7c"
  },
  {
    "url": "assets/js/352.c7b86d98.js",
    "revision": "53b289ce31f05aaa1eb9f6d082bab6f5"
  },
  {
    "url": "assets/js/353.2a505b66.js",
    "revision": "40d7bffbeeb5fb8f5894bd72222ca241"
  },
  {
    "url": "assets/js/354.afa59ba5.js",
    "revision": "2ede78f4734c9cc9de9cb465a51ef63f"
  },
  {
    "url": "assets/js/355.9f78abb1.js",
    "revision": "165402aea458e9ac2670dd5c76677749"
  },
  {
    "url": "assets/js/356.3c2b895b.js",
    "revision": "1c1dfbae96e07c1328486ed4046e8f9b"
  },
  {
    "url": "assets/js/357.491ccf60.js",
    "revision": "d2b885eaef9c272bc3e5b1dfcef38822"
  },
  {
    "url": "assets/js/358.48152517.js",
    "revision": "3eb0184eaab4774fc5e03a75bc6e5d98"
  },
  {
    "url": "assets/js/359.ae98db7c.js",
    "revision": "13f6e0703b74033001495d683da3ec70"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.690df1df.js",
    "revision": "2b5506bb1c588be92c9c6ac874cd0d54"
  },
  {
    "url": "assets/js/361.a5121f13.js",
    "revision": "8495a492bd47635d16a658384a9b9b5c"
  },
  {
    "url": "assets/js/362.b09a6868.js",
    "revision": "d1aec10ffb9d672530457f182f5007c0"
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
    "url": "assets/js/40.d8887dab.js",
    "revision": "5c199233d8134852bb7a98cdddfc2d2d"
  },
  {
    "url": "assets/js/41.fce8a83a.js",
    "revision": "ffd58a8bff888cc4c8e88ca39b918d76"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.678226ef.js",
    "revision": "f7cd244a0ffae99e6b679a9cc403b0b3"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.bb01d0fe.js",
    "revision": "27485427372ae4eb53356608d4d0627c"
  },
  {
    "url": "assets/js/46.dda0e55f.js",
    "revision": "42233b847e88b2112a6dd523e8a80ec7"
  },
  {
    "url": "assets/js/47.61d739b3.js",
    "revision": "c8dfc7d6d32660a7179e16dfa6d6ce04"
  },
  {
    "url": "assets/js/48.756dd4e2.js",
    "revision": "dac45279e7da1e7da4c394501647105c"
  },
  {
    "url": "assets/js/49.66537611.js",
    "revision": "dbaa8294874368f4e7e5525b4c2c0f65"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.8ab3ad68.js",
    "revision": "4e18f656d7dfc0f5721a026f47f8aa8f"
  },
  {
    "url": "assets/js/51.32c1776b.js",
    "revision": "0ddacf7d73c512014aeec0a8e7eea80d"
  },
  {
    "url": "assets/js/52.91c07ea6.js",
    "revision": "8758d11719dcda56d13dcd8c2cdc07ae"
  },
  {
    "url": "assets/js/53.423cfeac.js",
    "revision": "6275110987d25a8478cb07d450a99ee2"
  },
  {
    "url": "assets/js/54.5e17af04.js",
    "revision": "1340867313e96ee506776b5752e9e190"
  },
  {
    "url": "assets/js/55.9b065e75.js",
    "revision": "0a3ad6c69a1db8c9c18bc530f04ec795"
  },
  {
    "url": "assets/js/56.dd3f1bff.js",
    "revision": "1c5d89ef345016292c5c4c87b607d6c2"
  },
  {
    "url": "assets/js/57.88995396.js",
    "revision": "42ddb636e0edb21aa45ff077fb918584"
  },
  {
    "url": "assets/js/58.4f041ae7.js",
    "revision": "b380dafe02aff694a36405ac36d6644e"
  },
  {
    "url": "assets/js/59.f4dee4be.js",
    "revision": "7cee26722f825faa91875932bba62072"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.062b6749.js",
    "revision": "af60dfd670568df1f114ae580e80a542"
  },
  {
    "url": "assets/js/61.eed66a5c.js",
    "revision": "b3438b3aba9d3599f613c3c91b6c12cd"
  },
  {
    "url": "assets/js/62.42adbe13.js",
    "revision": "e3eee93e330c9911d76e99b4fd367859"
  },
  {
    "url": "assets/js/63.fdf30947.js",
    "revision": "10f6544fde39c07071543f3932b08e4e"
  },
  {
    "url": "assets/js/64.ea03c47a.js",
    "revision": "2b2ebbb7c5e22dfa22c2b15e54889336"
  },
  {
    "url": "assets/js/65.fd45ceab.js",
    "revision": "541205793e0e3a43ebd9281510126625"
  },
  {
    "url": "assets/js/66.2a86b997.js",
    "revision": "d36440397c663563aadf795034c8a8cb"
  },
  {
    "url": "assets/js/67.7f4a3ce7.js",
    "revision": "0900cf6ad6a9e79bb6636c7cf520640c"
  },
  {
    "url": "assets/js/68.e4bf9c75.js",
    "revision": "ad59595c7a5f99b8181bda53da7c844c"
  },
  {
    "url": "assets/js/69.1449cffc.js",
    "revision": "2dee44764deb6626879afb4740b9292f"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.7ea731c1.js",
    "revision": "14721db89519c02c871312bdb6eba406"
  },
  {
    "url": "assets/js/71.9bcd3545.js",
    "revision": "6dc642086a54b001cd95333a43a95e56"
  },
  {
    "url": "assets/js/72.0be7d8f2.js",
    "revision": "ceca1072373adfd8d8213f99b4d077ae"
  },
  {
    "url": "assets/js/73.a2e536d7.js",
    "revision": "e83c4c76bbab195a062e948a0b59ea41"
  },
  {
    "url": "assets/js/74.76d49b9a.js",
    "revision": "6cdf8dbf0f426af376e84c4edaf87ae3"
  },
  {
    "url": "assets/js/75.9342c28f.js",
    "revision": "0275088089147a580033a655488b10a3"
  },
  {
    "url": "assets/js/76.c5373dbb.js",
    "revision": "856e49fb3123c3f8d0a64e7675669f65"
  },
  {
    "url": "assets/js/77.3b9e9b3d.js",
    "revision": "7a6c5f96d308e72e44650819dc904a7e"
  },
  {
    "url": "assets/js/78.b0a1898e.js",
    "revision": "cc884140f731d17dc8a358f1d37952c8"
  },
  {
    "url": "assets/js/79.029ab5c5.js",
    "revision": "89cc8291735d8d93f7c58502bd7ddcc2"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.7d65baec.js",
    "revision": "2c20e9aed17c58e8f5b22456534fe585"
  },
  {
    "url": "assets/js/81.c1abbd62.js",
    "revision": "9d43fa5c716123c675c1faab555f8989"
  },
  {
    "url": "assets/js/82.304339c0.js",
    "revision": "3b266166a09875792827bdb3b2cc3e7f"
  },
  {
    "url": "assets/js/83.c48c5b18.js",
    "revision": "7eb41582b4aecb8bd3adcff4a3d9d14c"
  },
  {
    "url": "assets/js/84.d1db1042.js",
    "revision": "00baa6a9e88268c9e075f1d0a6cf9fd0"
  },
  {
    "url": "assets/js/85.48b2843f.js",
    "revision": "7f5b919da1302c8f9a46ae475c197a0b"
  },
  {
    "url": "assets/js/86.f8d08a9f.js",
    "revision": "c13811fdc3966380adfe8eb623fed831"
  },
  {
    "url": "assets/js/87.91736456.js",
    "revision": "a47322f45cc38e21adb3dbfa1b5e4f2c"
  },
  {
    "url": "assets/js/88.6f883503.js",
    "revision": "2d234215122f0c3f03912e74a887e273"
  },
  {
    "url": "assets/js/89.b6730148.js",
    "revision": "e8407070cdebea8e1c15f7c49b272b23"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.36410f38.js",
    "revision": "15cc39d09c6ca7dd137b4af3147da2ec"
  },
  {
    "url": "assets/js/91.840b9785.js",
    "revision": "f62961a174c335a9ea73c5f90bdfd95f"
  },
  {
    "url": "assets/js/92.2ed45eee.js",
    "revision": "8d5fdc4afd46530b3fc32c4a9d1b8b7e"
  },
  {
    "url": "assets/js/93.20ad7085.js",
    "revision": "fc3dc403d4ec79a1d24fb381a59cc62b"
  },
  {
    "url": "assets/js/94.116a1853.js",
    "revision": "82c8effd11bd6981c432f44f0aed94e8"
  },
  {
    "url": "assets/js/95.6b37a2d8.js",
    "revision": "4cac42d187d341ef751737a2a3ebd879"
  },
  {
    "url": "assets/js/96.3b802a24.js",
    "revision": "68772127a853fc27f33de9b966f01509"
  },
  {
    "url": "assets/js/97.217be8c6.js",
    "revision": "21da5f347fce6da9fef49b8b1483ce28"
  },
  {
    "url": "assets/js/98.0a4f8598.js",
    "revision": "7dce6edf22ce53661c15d32c2d248ec2"
  },
  {
    "url": "assets/js/99.7642f7cf.js",
    "revision": "e5c2055f4dba09557687bd681b724dee"
  },
  {
    "url": "assets/js/app.5416fa67.js",
    "revision": "fd7b698777afc49ec140cbd0e9ae87a3"
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
    "revision": "63d879608d558a51a3041bc2fe07ea03"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "cad0ed4678eb6409be445ee5dbd6b72b"
  },
  {
    "url": "books.html",
    "revision": "914dae9d68ce839897b85d6f545641ed"
  },
  {
    "url": "categories/index.html",
    "revision": "a17ec002defbc9f75cc70c5ffe077f48"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "750eab95ff6e680396360337d069e430"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "8cebd415bb68771e55ae23bafeb5e223"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "de0dd77453ba0d1322fa41013c8c3014"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "cb754150faa8d395361008c861b2b141"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "a9a5c3f6aa5bfd93220f0fbd959dc7f7"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "97ff0b4f95b519246bfc9c57a47e919a"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "209274f2eb83c1d02b5d263c7044ec77"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "a3fbb8a79a4b17af837a5c5cee8ba97b"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "c365ce04a414ff1d9db5ec03a4cc224e"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "7ab520001751c2727d721649d0af28c2"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "ff110b6d393ab4b5c332e85b95ab7139"
  },
  {
    "url": "deepseek/index.html",
    "revision": "74866fc0286f40afde2afc07c9840ed5"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "fcc04f67e958c6035b05b2e03cb397b6"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "75d9d30906cf05beb2216436244d6410"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "3576da537af49b3cb77fd4252647e488"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "05431e0812d76926679374a2088c7c21"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "1febda1eb186118fed5992971730e035"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "4b892d6c35d5e2418d83c27d7b52d740"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "95b180186ec5bf218a4cbdce6ba16bc8"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "940e757a6fb1b1012474c4d6353563cf"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "5fb16a0734047d98e7da83132b710d6c"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "58a5fcf912d9f2d53a74f253b4e06db0"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "9b658bff889fc30429fe9d9820e5e381"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "15b20edeec0d764ccfffd2c59e485741"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "94f2cb0538f6a2f731fbd2aabfbcbbd3"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "f20424c3e82aaea21f208c7f4d54e0e3"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "2831ef4115fa7e7f053c85705c6d3c0d"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "271d7c26f6c8bf52af283b68a0edd233"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "fc4351525e1f1d79acb248090d013cd9"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "6a6c482ae71a93bfc66f879a215ddc64"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "75f5abec96fd558e73d3a36f2a4150d3"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "d34b930c966fa91e7b406e6dbe014c2c"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "aece339c83caa182b3598947c406e599"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "ac3e421b53b1b3612c24bfbcf698debc"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "35c977a3b47a4d04e9de8b2453fad734"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "93cd9956c2fdadffe4e2f267ef9ec9d4"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "0ba29dd66c32d6c54a8d2fce81c24ce2"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "89fba74350456a4f84b44d2c7f9a73e6"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "40bd3abd3d40306e7cdd8a0daf3ba85f"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "f0ca9e07514eb879ab11170ebe4e8754"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "f2597e530d9977a1fd2435af09891f29"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "9a6aaa0fe81b1d9c7dc03350f71225ee"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "80b78ee4dc1785c8dde8305a19c77468"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "cfc9818d8993b5a710b610c8f3b862d8"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "7c7007a48c071f2b2c2785bb9d3a84f2"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "b9a422b77e724f1bf0dd39d1c1c4982b"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "4ec157fbf5c07fac249d9192dd4ff3dd"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "888cf19ee6b317110e3e6eb1dbe6ec30"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "f76595860486ad858c192377840a3b82"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "ece0d7e8090673ec0d028eb877082b1a"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "fd2f9d096770b43839cfb49cdf9087b4"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "39f72b8be1d2120109478ce6bc543a20"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "a74f5a90d0ec14c64f56e10f9a340acb"
  },
  {
    "url": "figma/index.html",
    "revision": "265766d558edd294ab3f515defb67a98"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "43fef3fb1f4372e893813899c160338c"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "97d6b0a779377318b923c44a7cd0a545"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "5853a49836d555c6f6305de2520fed34"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "c80222a3c25175b05b7d6a0f04e37007"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "9d4d1669f1cc2aae4265d1ab877d18ed"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "457e2f3c712f5f7809fb23eb1f5fcaca"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "7d8dda796f24126e6ef77f2aada9a89f"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "e951eae700961849110e84bcd77ea63c"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "9a09045e8125a90556a253e4182c7570"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "ac210179ef61633d187190d74b9cacca"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "aa08eea397575cdcbca0af3d8f2ef020"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "4de6b039ec60a5ec31b40826146abf8f"
  },
  {
    "url": "flutter/index.html",
    "revision": "0374669ba51ef5ac72ebe89522767a18"
  },
  {
    "url": "flutter/point.html",
    "revision": "274278e9b3c597b85f4035c13efdb5bc"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4e22740254ecbbb448ba1b8317658a88"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "530191d580e20b72c547f02c5211c5a9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "3f5fd3644302ee3488b627147e239fa2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9e2a1eb4c6652685c1ddb848ce1f3aab"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "568a82590892e59e0306593552feeb8e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "99dfc5d9e7b059494f4faeb053b46694"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3df0379a2f7df56124e135d32d314950"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c64a72aa8bc254a4a4bae6be59da081e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "8ca0338b810098aae74847fbfe188114"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6d080c34d904a4f8de1246e979668477"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "ac073e75e843d3f9d4b2e787e3f0159c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "81749600c0929939522b90fe50f0e0e0"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "41bfe9815bf9d9906f93e088a7cfdddf"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "82da4e7443a96656550273f88628b274"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "88f8d589efae1e5125bc4702158e2fa5"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "fd02a0dd1ba620bafb91b30d1d142ee9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "72c85cacab3df9253e262d06e6ff4303"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "9e8d8c384046665d8dcf937dc7e6c9f1"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "79305f498694bd5bf922d1d16145729e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "f6daab7f55e7dc18351e25b44ac67020"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "08ee683aa55809487f95085904d1cd16"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a844711a23858fa1d0e403059b774070"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b90f4be02917265432a0992130f4848d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6d8f7aaecb686e520a1eb71c72e6d600"
  },
  {
    "url": "haskell/index.html",
    "revision": "1091f831a6eef282041215164505e794"
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
    "revision": "e6115001d3302cef5cb0b4978945a878"
  },
  {
    "url": "java/index.html",
    "revision": "2fa4c4a113f8730142bea30c097b93e7"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "5ffa709f2d8ad9cd77c83373f5bfe7d7"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "3786e77a0578316350294b039024b270"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "0b5b949846b6bb8c29d6d4e49cbff2d5"
  },
  {
    "url": "ops/index.html",
    "revision": "3379b04588310046fdf4f99ce4c37d62"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "90a46aff120340ed9be83092e3a08614"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "10c6bd8e5cd2ec777a9ecc308bf2a40e"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "08571ff23106df889de38aacb2b4f0d7"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "964b2e3c6a5cc483d87acbc87e62f0fe"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "d228db0eec53bdaa1a684c35eb1229ec"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "519addc6d23b01dcef270378201d7d58"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "f83a84882995f488962d7f83ac70c708"
  },
  {
    "url": "python/index.html",
    "revision": "70b0bcd07d20f8ffef1e8451b995e66a"
  },
  {
    "url": "python/poetry.html",
    "revision": "310626b667af1a45f6af08438f639496"
  },
  {
    "url": "python/pyenv.html",
    "revision": "d69d9adfabaa0825484a769d69fe8b31"
  },
  {
    "url": "python/python-ase.html",
    "revision": "60844b3e4d389f976d0f59e2c29af5f8"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "5015f0854c7579b8dd18677b98778fda"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "24f57341edc88e07e2eca526abda7734"
  },
  {
    "url": "python/python-file.html",
    "revision": "9721ec811563e4e9bf52394513ff45a6"
  },
  {
    "url": "python/python-function.html",
    "revision": "ab35384d04544dfe96d838dce92de0f1"
  },
  {
    "url": "python/python-generator.html",
    "revision": "92183cac0496e67fd148cbc6737d0245"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "82f99dcba6cb07c78e928f88c6d5457a"
  },
  {
    "url": "python/python-module.html",
    "revision": "e3a0d49b7310cc514e50e543d5546318"
  },
  {
    "url": "python/python-string.html",
    "revision": "11b4e86147157f224e27ea8be5218d9b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d8c5cce5bc152bd6ee9c4a1669227393"
  },
  {
    "url": "read/index.html",
    "revision": "9dc6ff7604a7256c0fd98eb2fbfe1df7"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c83d71ec969fdad40a83dc6df91985f5"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b0d301e28464d4f066bc0646c031a0d8"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7c4a79efb17a082f44fbcb19f5ec1ed3"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2124b360f3487fc9cfb4462400228074"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "575eee26848852ea039aa85a36a4cf17"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2ee0362e1fe06c89ede99ee31b350fbd"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e60914302fe7a05f219fd2b7bdbf4261"
  },
  {
    "url": "swift/better/last.html",
    "revision": "93f5580ca9a100e75ce17beef039984d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e74fe1aee3cb5fe5f5a8bb757b02c20e"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f9bc4330cc06adcb3210722d6e0aa83e"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "b08a3d3f31ebf9c3de053b06083e6626"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "fa9a311eb3e77b9055ed07cbb44ad6d4"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "68d148f64133b12015e2806810bbcff2"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "0bc03fdf3abd616030bc184a34cb152c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "f4263de39d1b0efeaf52e432b5762189"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "df9ecda754c00613a3e53c628e965832"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a7e11fdce059c236a0aebfa990850337"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "223308541fd9a7136890ac82278dfe9e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "eacc0bcb344de405201144a35d567e38"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "12f124e9621f298c1f8819adf7935bed"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "eb845d7a1e5e34f57c596a199ebf820a"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "9a993e7ab922a51f9bb5d9faec33ef00"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4faa5b2589e4357789b7e6d9d706097e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "16cc2eafded8b3c26f51e13df23bab0c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "71cc9b4a271b6414fc0bc9065117af5d"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "048e2c8662fa37258dc56cb114bab16e"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "5e12c341b8b4de32967f2c1997cb3255"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "32f0bf84db0ca7802d62623cfd7cc7a9"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "ccc77ea8e133c79d7e7239efc7804b52"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "5853aa6499e8dcce81f57915df73a4a0"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "ca6fed49974dc7396c35035ae095bad9"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "6e8694cf0971e654e71c2107f5aff24e"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "bc315d1746b94943aafd7239daa687c0"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "d51e895f9329628d2a91eb71088dc029"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "b99f619ad7e953447c451c0551c2f28c"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "517385b9996d43730b7314b0ad009137"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "4491f4c3dfb191f78e8e5faa88995e4d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "9fff8beb7d3d91262539a93f2692ff03"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "4a6ad6e64e19ae0f9d5d3518b9a7a41a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "5905344d682de39fd9795835291f8bae"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "71570ce8fb71cde9d1c3ddd1a319138d"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b63b82c0e7e1bfab638e4ac42e0ed932"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "7c19f994e1927ea3a0461e8a61c179a6"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "5fc06a51115fd1d72214ef7307b008ea"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ec0d7d3acaec3fb2cf884642956badd9"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7f040606281ba4104c72629f076aefaa"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "cc655087e438cd08bf33fd74c67ebf03"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "2a104e826aa02a02e4c35bed81f14d61"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "a35cddbd22eba9aa539158ef9bfe32b4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "8357cad4fe9342a0db318a7282233782"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "dcab3056ce8ef6345df6b41d9788530f"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "35ce6747081289fba5703aa70155246c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "5fe8c6e03782b2b6e0be07a3fc13e5f5"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "74e09f49f1c39f6e1db60133a8e2ea59"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c66d8877d05660fdd8b9e87ca6b52ce0"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "fa5fd1abf3139a7ab17ec21f6d8d9148"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "557fc1bf9a6b194effe67100ede50898"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "a1df664bdc1ad3ce9e5bfefcb6469093"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "9266d28c8865e26a10a371098e37f353"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a3574cd13e61935b25c87e5d9bb5eafc"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1e35ca23de9fe80406e0c8bdfae8a2e1"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f68f1481cb96e97c3e68aacadc1e4f10"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "3d3b217a51c50ade80a8ba0b5d086170"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e14463d455d37e590fb0036ed766d5b8"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d3a39a4e59ad5efaa74c82ad1e14d26f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "b8d8fab434f7ff2e1f6c628e769a8b23"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "df52fa3fa87fb064768e11449ac97ae6"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "0ca74858ac0dea340e3de51b7b44b8a5"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a4b53f989c823f7f1b82d47452a0e186"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f1864dcfe2ac4e8220a46b432b2c4c1d"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "931b0f2f8c49582c020980cef4c24b76"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "576bc712a5439f7595669c18c631617f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b46752fdaad8f7e043ed95bb7ded63dc"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "01f9e548af9eeed434560d66e3c293fa"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "bc453897d7318a7b289ffd256009dc3d"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "681b6255ec6036f42641c6e4a82b86ff"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1aa13ca1d83d1ef1b7289541deac65a2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "fd9b311da719233843c443960c7b5711"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "e83ee534e44902d27795fcfc9c9b7c17"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "782d736f151a8939414f3da4b01cbb75"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "7339105a5030859846e157635ab4d972"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "356c3c5b693a176de8174d177ce336de"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2f09baaef73b331bcf4577923f788624"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "f5dcff1fcb211bb804e32e192c8fd388"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "dc88f991be1d61c81e2705e831cefb2f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "b0a3acf2e5b46226e65f7e0ef71b6d8e"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "0468d958b94218447f7c4821c00e4b9b"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "ef334cc23996714472cf34c34ae55ca7"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "502356ddbf3ce2c75055b0bfbf8537bf"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8107d76a0964d1b82a360a690f0e0a39"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b127cb514d469b4ee9962130149e72a1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "167570cf081e2d51a1a93123829a3ad6"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a1973ca60fb171c6a2b6c4786bf66177"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "569b063fd5186f1b57bf7a3fd8b32a7a"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "8a08e5d814a8c44fc0fb0896c87ea4c0"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "fe1b6d1c6c1293066205a466593fe4bd"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "488cf0b0116aa9c57e2388960307e7bd"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c01ba9948e795b861824017040132b2a"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a1fdc106d49612b4d47938257c367380"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "0ba774512a3cfa6473c7bff54a832243"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2eca1f4401df5129d9ecb5a60cd3481b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "69bb6c6de982df9cc5ab20eba9fc2436"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "3107256a9853b488842d9a8ef0e470fb"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "30901a394c320431af0e415b6d8c9a8d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "cc3dd4854b3e0cf0801e95afde0df2a6"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "c88073fbaffec812336498b924f70405"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a960fdd7acce639436409261022b353a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "93b4e580ad6b3e4fd8fe1d69bf880235"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "45f6e2a942ad91f10f5115614cdfe755"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2713ca63ac5a9390d03ff995ff5a6d94"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b0ba1fd7aec56c884b137e6ca81aba52"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "0720e73b2dab377b7bdc6559558a2720"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "b6c76d57d58dda4387441de61979ea42"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "c7ff7c041ee602f286b3d6f02b6a0edd"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "ab60f628b55eec1e59148c6c8b36e007"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "ca99e325b2853c16c1ea8d9566d0a8f5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "0d20aa0970f876fc8343ece0e26b1515"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "740553222a02eae55462b5e27ab2e5a7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "290d999c8ffed6c3696f526ef736c9b4"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7be751ee467406d039e3bc9c5e3b7862"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "45403b999bbba5ae0a6ef636456c9601"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "bdc6abb4bfa16983345d5d46b27b5b7b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "f94a5bda626a928f82ba5ec779e4ef1e"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "727158889c271143983093dc1d7d2cfe"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "788877b9b24ea59e6bdb01450284b51a"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "b53723b8598be7e33ce01d910cf8e8d9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "8e47ddd65682f46ae06398a04e373690"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "8aaab53b999e799b15761a868949923f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "17272284fcef3e723793637ae4577485"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "07df39020d30f58819c102b55c6e0d4f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "df132836086a85dc481bde2499cd4a67"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "71e4c9cab3d05624343bede1ad1fad23"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0075eaaa346f544609cc080f51403eff"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "146fa5610f9d8b71c1e1e9ee2ed9ee71"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "91dc0cabde2a3eda910e6f24eb56a3aa"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "7adafdc8af2aaa821559884fbaf4765f"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c9b5394fd842fb17e192c9badce9b94f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1e6608cadbfe6966da6d16a717f5e247"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c733d931bf11b32bc86e5eba276df02f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7baf7ed5b02c2cb9e63a4c861f1d6bf2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "bee053c1aa58197af323b388a478014e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "bb5a04c04266b9c02b7aebe87cc3d1a6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "12ddab4995facf469c95dc70be011227"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "ae95f4e0bca1ac86fe4e87fab83bd288"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "21f9817729ed2748c54b3e90b237a624"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "147cde3ac3cf54a8d0c4288ac8f26a48"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "4bab93f3b72057d185b161038e36e60a"
  },
  {
    "url": "tag/code/index.html",
    "revision": "5fc42514de599eb5085f5d09bfcafb82"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "4b981863dd7d1a156cf32197bd5ef5f2"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "03149454d854ebc4f04797383fa2a236"
  },
  {
    "url": "tag/django/index.html",
    "revision": "5a9599104f9b2902b7e87c0d70c8aade"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "13b113713231ff3f24091e13017f4574"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "e64657c0a9ee19ef00d487dc6d343c83"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "509314616af6c4c179b73309cedf0ef8"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "9ef7029815847034bea142080911dcb8"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "562168ec87b47a1f67284d1f3517e504"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "e7c6bb710ceb852573595ba72e4c5f90"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "1a5db59b0511a8117354500649c700f8"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "0bb8cadeb15e2ebcd29e25dcefa35cd9"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "98bcb4c5ffd98d977392855790058c36"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9867712caabdc4258c74d4b93eb1f312"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8df8589442fc9b2ba12492d576d40365"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "fccd3092266cda6d152797da14b41883"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fdb2b48e91fa72d11bc772b9b1e6c18e"
  },
  {
    "url": "tag/index.html",
    "revision": "2bcddd9a716362196cfe7a13e22a2635"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0ecaf51344d6a4e2e7f163302016e180"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "ee1fa5245f842cf55b79f7a666119f43"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e53d1ce6546cae487f73cc11bb7be43e"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "323f41dca725d9ea28eacf51344bc64f"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "743227ebb04a540ae3da982115469618"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "7593f3663c33a6a0738fca75a21d2bf0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "1089179d13ef431d626e479361e17cb1"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "d144d67cb4f9d28b8df92ee12f6e0147"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "91bfb8f128131d101ef6cf16541c7a12"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "d5940af8549e9cbb54849fcb1aef08cb"
  },
  {
    "url": "tag/java/index.html",
    "revision": "8a8b206c43dae3ebd149646b523b99eb"
  },
  {
    "url": "tag/json/index.html",
    "revision": "ca22e6ddc6faf84ee6cea83128b7f537"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "363eb5f6255ba1a3648f04a7a7e066e7"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "760d2d32d39a62e0655dcd76d0e80c28"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "210518df88359ce01a929fd44a233a70"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "a4455db11fc8a24a74a79650c247d2b8"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "129c3c924f0bdf68f64832162929d29e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a8d46e8263b209ae3eaa97526709d34a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a4a0c8f7db3a5bc226edbe075972d640"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "0da7f9c37478db81b0c877ca2edd307e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0526ca3b58efa0471cfd58d91709040e"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8968d7dc822f126ec5539dc7de18ad15"
  },
  {
    "url": "tag/read/index.html",
    "revision": "4359f6df5c6ffaa95166d9e0f5f2a01e"
  },
  {
    "url": "tag/review/index.html",
    "revision": "8fcb34cf8c909b05a64f7e606372793c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "6d75d4b135d4b980b685e4d2b4aeb4f4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f7c709012a9a6d44e63daae098f1d94d"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "3586b3fecf83d508db18d5b6edf391e0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "2e2901f6d5f5b1c9946c3c3ba5b0559c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a846aa3427173319aa5437f02b5031a3"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "35bece5af09e985ea93ffa469ace9fe0"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a6828a5c1205669d889e371f3c627d65"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "6e568b5191d6800e39fda2ce33c2b486"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "03e60c93d3b99cb2ed7c0319c2502ee3"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6dc14fc7e3876ac48b11d74e671b177a"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b0ce65bf820355a701c386954c856437"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "dfc8eb56016a5eea483f03081c33d1f3"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "ea871e59aa768acc6615b76cf8fd2c91"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e665ab6dbaf76a842ff00e580f6d85d3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "895f5c48d72351f900febd626a9f10f0"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "954a37651a45e41c53986d435ef8cd60"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "fad99f49e57f157e9d3c23a53ef22772"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "5d0a8c2df4b373822aa1a4314988b62b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6a6ef98b9bd219775615f83eeed6b139"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "796ab51aeda8c4d90a845a172169888f"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "215ded49e3c863a22b1726621f3710b9"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "6ca501ec75db35e8637d3c05ce455f12"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "f31f57b551004ad762ae302bd6e692a2"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "cf7798ab9efdc1cfa378aea19d5df840"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "29f576689037ce039be873ae64932be1"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "32b338ee10e29f600218ef347e31f86d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "d71d222238faeb78527acb6573d16296"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "5f60a5328faae669b1c87e317860f831"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "4aefc11982395c64a6c56df4d48716aa"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0dc37b2084b562013d482abf1498b75a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f141459bc3f26e2a0a64359367a3ee3e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "bc2502220da5aba93b024b00ec3b71a4"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "0568313ee4223cba950f2f12dfd1744d"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "00040adaaf8baf1e8f1930ee1c479d4a"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "aecdb5af6a1ba47269335b6663cb9fc5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ee88348c3ccb9936bac5933ce0303484"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1d7d9fee71b6fbe0613deae2c5c32436"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "1298c09bd25b252007b3eb0495ecdda4"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "b05c7c8be223e144c0c623ebb6d0cb39"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "fae93c127989d9d2000f351fe98b9426"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4ddc8e631350ab998f7c26e766409cf8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "472eedaef91402e66494f3bb8e3349af"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "4eb1eabebf7e193b4c86d70128b88265"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "467079395861fc7e88a6b5be575c2079"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "a017dbc3f0188e3bcd36045a1d61a369"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "999eb2a7a1b9cd069a0899d39b32e91a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4f7d3fdf473dce9a4fce92d0ee010c15"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "44fd79a4a26b80158fddb03459a0f60c"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "24558ee49c561e44ee87a052c506115b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2042596765d95e53ba449a2d00292706"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ba38ee5c4301cc31f548e440ff063024"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "f369bc4ee87c401ee0d622e4b37679ee"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "810dbcbe22341580496f14a9bcff3a04"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "08988f83b94897e33c179ab3ca202af4"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "d12aab2a9ab54d0124c133b39196f441"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "d4f094336b22b749622d7c512f58f99c"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "35e37a448c7f807bbf3cfd4f43bc8edb"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "a919aaa3f8087e1060f9bb523d9d6571"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "bd29e10c2d912b9b73950f941a4bd5a8"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "6b3fe41c249ec6e6feb05f134e2974b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "305b30931f02923749bd5d8ce05033a5"
  },
  {
    "url": "tools/code-review.html",
    "revision": "12ca64ad076de79bbe4a2081bcef253f"
  },
  {
    "url": "tools/docsify.html",
    "revision": "b6226b3c208df23c8e35aeaa40f4092a"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d09e73daeff9ec905cf04f5b29f619f4"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "84c78a84f427875ee3c2516fc451aaef"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "8712930edfd7ecd38291ccf53563c469"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "20426124821680a73db7932bdf53cff1"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "8b87d59ebd5209e813f44e7c9a5d7cbb"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8c555c19ec36b9e418a7ebaf57b5b205"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e28f11c647835090243be4beb4f4699e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ef0f2e8c28f08324546d224a10ea69a4"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "725655fceaa0a76974e3379c86aab7b7"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0c88571bbfb62f6b9e879dfe5a3f97e5"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "a72efa935b8aa9026470637cead9b9aa"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "17f8a2a7a11a2fe6e7f433635105b2dc"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "e4c3ab4fc6254ce7f4c3418bafda877e"
  },
  {
    "url": "tools/note/index.html",
    "revision": "517cb9244f034535d4325c5835d7566a"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "680ad8de4d88b6b7133cbc685773ecfe"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3ca98ebf46b902eb9d52e6771c4c8259"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c9ed76a33e687e03e6ad14bfb800d98d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "167778a65568d0b4d6dbd62cbe65a3b3"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "02f9e972d08974e3c2ef156918d6ee34"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6e1a2d8cbe63e3647da6c2f0932f6239"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4842b360c81945c63b1cb765ee0fa91d"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "fcb71d8c17f7445b5ff4887724bdb66e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a20ec8cc6023b76c8feee3e1ea01d6b6"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "8c9c6507a76191fc2bb2e33c727ef46b"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "7516b965b85037d31ab628cafdc25829"
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
