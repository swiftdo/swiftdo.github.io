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
    "revision": "24ed988177b3b328509017548e0fedfc"
  },
  {
    "url": "about/app/index.html",
    "revision": "18e05a1e7f0d68790fd583f2f38f8423"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "973f44764f560c148833a0eb902b6d66"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3ef11e5565f93a0180035bff4a5c7684"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "1cf243d80a601e7abb5ed7354ff16309"
  },
  {
    "url": "about/index/index.html",
    "revision": "bbc3a1d682cc97aef64594fe290c67f6"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "237fb74bc6e0458471bb72cc284461e9"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "2c4d0f92047ea43a54e9f31a0f6524a5"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "64640fc862f26807e59f302e12d8ebd9"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "291dfd5a44397c0f4267db68ac54fd9f"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "0a5bcdc991b9285a1db9d95d3b667b9b"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "8c4d526dea465e60690935f4e7ad2ee3"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "e6f4bfb5db6907759764ff0b99ad7c25"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "8d569c8198ac3e4aea29aae2ee916ad3"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "2a85649e78cb2d9b6d1873747ad5173d"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "6b1753b93162b8896fc4b22531ea3c99"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "7cca926faf13f15cd383ff73d4ac299d"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "4e158649276a35a1d5aec7671e5d1314"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "e5cf9ed57c68d9ff2f745aa7570533ea"
  },
  {
    "url": "algorithms/index.html",
    "revision": "c409c0e2c97a89e6717684aa44fae382"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "9efe79502cebf6f2702109bb7cd720df"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "1a9f7d51d54c89a99b35cf43544a6dc1"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "4dfaa726a233e792a493e675fe13516d"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "bcc98769495f259500614d1977d69d66"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "b7c0879a4ea548aba2f8d07fed3da02d"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "93b3c4d7000cfa4d95dba375cd1eab75"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "bedfa0423a12057b211bfffc54725535"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "14ec9bb1df34ef3ad41b2a20515ce617"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "45938882c565870de788da5f7bb851f4"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "92fa43e5d90c5cf3c462d3dc16635128"
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
    "url": "assets/js/100.a32652b7.js",
    "revision": "2ea4b91332373ad15f704ccf2b17237d"
  },
  {
    "url": "assets/js/101.56a95b7a.js",
    "revision": "9a570f2200db1f7b4d7cd84dc578eed5"
  },
  {
    "url": "assets/js/102.b3514baa.js",
    "revision": "9324d97be1d2bc23c055b82608c6f50f"
  },
  {
    "url": "assets/js/103.19fb94d9.js",
    "revision": "9c8b047cb23f62346504f65cc520d741"
  },
  {
    "url": "assets/js/104.2d82cd70.js",
    "revision": "16f1820363915211b3a1bc739119b3a0"
  },
  {
    "url": "assets/js/105.f4d97d3d.js",
    "revision": "14a339741e18dcd787d3e220287daa02"
  },
  {
    "url": "assets/js/106.de55f0aa.js",
    "revision": "24d8ded64868b1524f4d79f37f1d9b49"
  },
  {
    "url": "assets/js/107.f9605e38.js",
    "revision": "02b8bc68707c11649bdcefbdee6b76c3"
  },
  {
    "url": "assets/js/108.cfaefd8e.js",
    "revision": "8cf4cebee69e17548802d28911ac64a6"
  },
  {
    "url": "assets/js/109.362f0568.js",
    "revision": "f5795fa7377b74d46deacfff644f0e34"
  },
  {
    "url": "assets/js/110.d7a43b8a.js",
    "revision": "77c31ab3e674fc2f57d7745e11bdafe1"
  },
  {
    "url": "assets/js/111.48cc3139.js",
    "revision": "eaf355b29d26b0122e6b6f51dd8a998f"
  },
  {
    "url": "assets/js/112.105d0be9.js",
    "revision": "d26b2e73ad44abd79697eeaa0e089ff5"
  },
  {
    "url": "assets/js/113.1cc4931f.js",
    "revision": "cc5b4298878fd13d0dbc5d47e0f00652"
  },
  {
    "url": "assets/js/114.a0b639d2.js",
    "revision": "05eccf67f97461f2955f59d031fabd91"
  },
  {
    "url": "assets/js/115.f764d18e.js",
    "revision": "e82f463c226ff5fe28e423f558d8d802"
  },
  {
    "url": "assets/js/116.87a53b94.js",
    "revision": "17cba40ed370deda9184b54fb1cf04eb"
  },
  {
    "url": "assets/js/117.a676d1fb.js",
    "revision": "79a60357670d31082db86e4e2e01e8af"
  },
  {
    "url": "assets/js/118.c1ccc90e.js",
    "revision": "f569cfd605a14af2ef9b37b76636b0b6"
  },
  {
    "url": "assets/js/119.386dafbb.js",
    "revision": "c037f2ac1402a29d3492f7cc65d3d73d"
  },
  {
    "url": "assets/js/120.175bfcaa.js",
    "revision": "2ab4f065aa992c793b29b652305fa1cc"
  },
  {
    "url": "assets/js/121.f7e1643d.js",
    "revision": "5b7d6246b4291ffc009f7bdf2bc7c898"
  },
  {
    "url": "assets/js/122.db451d23.js",
    "revision": "e347dd8b13e383265de26ac127258ae6"
  },
  {
    "url": "assets/js/123.661a9ee1.js",
    "revision": "65ad90bfa71056635a62fb5f88293d64"
  },
  {
    "url": "assets/js/124.f8b1424b.js",
    "revision": "0a763278b24bca59b85ffeccd3a5cff1"
  },
  {
    "url": "assets/js/125.b3129bdc.js",
    "revision": "a838c8c524ea797923edd814f7024f1d"
  },
  {
    "url": "assets/js/126.a3fe28fa.js",
    "revision": "e43bae5ac7a4b03c74d67686a08d781b"
  },
  {
    "url": "assets/js/127.9fcf9c3b.js",
    "revision": "5e9e93be3fde786b25880c018423b580"
  },
  {
    "url": "assets/js/128.606f58e3.js",
    "revision": "e99f5ccbc63c9020eb19d71659215437"
  },
  {
    "url": "assets/js/129.7ca03dc9.js",
    "revision": "e6d2ac4c64656338b0cca450273fdb7a"
  },
  {
    "url": "assets/js/130.0b5c1b12.js",
    "revision": "ce67b2e9efacb897c49daec4bc422c4c"
  },
  {
    "url": "assets/js/131.24b43dfe.js",
    "revision": "f3ffd64061600644efc15985dfe9b0ab"
  },
  {
    "url": "assets/js/132.aa62e5cd.js",
    "revision": "4ceed2c7e5da72d030a525aebdadd86b"
  },
  {
    "url": "assets/js/133.34a109dc.js",
    "revision": "995e88a072720ad8d7ee8f510b0565db"
  },
  {
    "url": "assets/js/134.0a7b7cea.js",
    "revision": "93c7c404860f77d0e61e46688eeb0748"
  },
  {
    "url": "assets/js/135.14de62c2.js",
    "revision": "9dd2aceebe52bee5c538a1f5c76e1297"
  },
  {
    "url": "assets/js/136.7d61b910.js",
    "revision": "d03e4416bcd9160c16a84a5c808c7fdb"
  },
  {
    "url": "assets/js/137.04d436d8.js",
    "revision": "280a0f4abf229fb0be38bcce1d85843f"
  },
  {
    "url": "assets/js/138.4da18b6a.js",
    "revision": "0fa6960174e3fa9fc09654908fc36a2e"
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
    "url": "assets/js/140.6224c140.js",
    "revision": "50eed4c8cb605d252ed54637ec0c23e2"
  },
  {
    "url": "assets/js/141.6329225e.js",
    "revision": "c947e46264a8b56069814ee29cc4218c"
  },
  {
    "url": "assets/js/142.ec4a1305.js",
    "revision": "2604cc3a1a7a8f0864e3cfe808e145c7"
  },
  {
    "url": "assets/js/143.dba115c1.js",
    "revision": "9dabdf04c189b3cbd60b9c0f72d0e9aa"
  },
  {
    "url": "assets/js/144.ade3c80f.js",
    "revision": "6a20a081f521bb6b80975fcc3793b90a"
  },
  {
    "url": "assets/js/145.e9a970f6.js",
    "revision": "9269023952d22dfaac91d1133ea5200d"
  },
  {
    "url": "assets/js/146.c15148d1.js",
    "revision": "55c59ec92d0fa275649aaa2be8eaf955"
  },
  {
    "url": "assets/js/147.28ba986e.js",
    "revision": "f457ab48ea215f29194ec7f10b7a9e59"
  },
  {
    "url": "assets/js/148.cc1ea9b1.js",
    "revision": "67653eb45552f0be6224e78561fb6624"
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
    "url": "assets/js/156.e1dc61cf.js",
    "revision": "b115d462fdf3a66a66ceaeffb57da7b5"
  },
  {
    "url": "assets/js/157.2dce58b4.js",
    "revision": "90930476e5bebb6f2b00e95aa951502d"
  },
  {
    "url": "assets/js/158.e3a2a1c1.js",
    "revision": "02fe25f6a1b595d3d4381e34e84dfa5b"
  },
  {
    "url": "assets/js/159.23239c07.js",
    "revision": "a6b7be21e9e8b6ed73e2cd7d10203821"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.c3788fe7.js",
    "revision": "8af6e304a6dc04ec8f3d555efe4938e3"
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
    "url": "assets/js/164.bfba85a0.js",
    "revision": "878f1db53d999819ecf4900b25e16546"
  },
  {
    "url": "assets/js/165.ca9ac122.js",
    "revision": "0441bfaaaac88b54dacad8339aea8f59"
  },
  {
    "url": "assets/js/166.d79ffa9d.js",
    "revision": "593a65476de56a724ffa954ddafa4709"
  },
  {
    "url": "assets/js/167.90236605.js",
    "revision": "d84184c51dcdb56f6a89f1e97ff2fe60"
  },
  {
    "url": "assets/js/168.1dbed02e.js",
    "revision": "df346ce205d6e7e6858ad769a32f2b3a"
  },
  {
    "url": "assets/js/169.c3c84c62.js",
    "revision": "cde4e790c50bd6c3c9843be88c02fcb3"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.96f519a9.js",
    "revision": "914fcae5782b8b7efed978c549836118"
  },
  {
    "url": "assets/js/171.018a3957.js",
    "revision": "b9ee92e9d44f7721e167141a86c3c7da"
  },
  {
    "url": "assets/js/172.f4904b1a.js",
    "revision": "d9b6ada4e664c0654416c77b214907f4"
  },
  {
    "url": "assets/js/173.d6e9c1c8.js",
    "revision": "baee81933905f93ceb59a263a44ac22d"
  },
  {
    "url": "assets/js/174.ff745d30.js",
    "revision": "bb0c64bbdd00d5fcd6905e7525be662b"
  },
  {
    "url": "assets/js/175.e4298642.js",
    "revision": "20e37d70a888a45c8fd19203b7faee8f"
  },
  {
    "url": "assets/js/176.87d53a53.js",
    "revision": "a36ac646da33729af650f7e38132b6ba"
  },
  {
    "url": "assets/js/177.664fe50f.js",
    "revision": "ee51d1ac0a9199810616f09de6104be6"
  },
  {
    "url": "assets/js/178.e6723d22.js",
    "revision": "0bfff876b89da600b7a7cf6359d33bce"
  },
  {
    "url": "assets/js/179.29691226.js",
    "revision": "094afb58f5576adbe20b5dd33afa0923"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.da39e756.js",
    "revision": "c658d8b95b8f54d0071cbd2820a94134"
  },
  {
    "url": "assets/js/181.d96c9e05.js",
    "revision": "161aa27d79a0cb403b3ff5b072988702"
  },
  {
    "url": "assets/js/182.3abb0bc8.js",
    "revision": "7037adc7b941d324b9c51948590915ff"
  },
  {
    "url": "assets/js/183.06625b24.js",
    "revision": "9552013ced0fd6eedae4a55a35ac785a"
  },
  {
    "url": "assets/js/184.b7b1182f.js",
    "revision": "24fb808fcdeeee255bf1080ecb43b60f"
  },
  {
    "url": "assets/js/185.b790310e.js",
    "revision": "aa4982b7e2239aa9c3e3d4c221288f49"
  },
  {
    "url": "assets/js/186.91d7af2e.js",
    "revision": "9f2b8da061fcfbfd616f8aeba64c88a9"
  },
  {
    "url": "assets/js/187.38268807.js",
    "revision": "6fbafb79e3a8de38d71948aab91249e7"
  },
  {
    "url": "assets/js/188.8b4eea8a.js",
    "revision": "6dbab4375227cb4ec2d5b61970a9f80c"
  },
  {
    "url": "assets/js/189.29d5d8fc.js",
    "revision": "b98de05e876c018b23d1cffcd04a7587"
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
    "url": "assets/js/191.33c68c82.js",
    "revision": "d9e53806f17b9d93e8265a3ae44d9f09"
  },
  {
    "url": "assets/js/192.5b4437b7.js",
    "revision": "afffe8c6ca59da24dd925e5a096aa1eb"
  },
  {
    "url": "assets/js/193.ae3c9b18.js",
    "revision": "d60066e0dd242f32d1554bd42221b6c9"
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
    "url": "assets/js/196.20995c38.js",
    "revision": "55015ef17c7974f0e07fdafd3e1d8302"
  },
  {
    "url": "assets/js/197.5b2c38e4.js",
    "revision": "b1074b83d6a15102daba07de6b7bc80a"
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
    "url": "assets/js/201.32c85a54.js",
    "revision": "ca5162d11b2d0922449b73fb485826d6"
  },
  {
    "url": "assets/js/202.4a10ae80.js",
    "revision": "5141f86e15f8d012e61804209c6c79d4"
  },
  {
    "url": "assets/js/203.0d33cc4f.js",
    "revision": "e6f222a6007f3c688397c0ce1f5c8578"
  },
  {
    "url": "assets/js/204.e271ce02.js",
    "revision": "89e1736d801794cd6b8312f032092d7f"
  },
  {
    "url": "assets/js/205.a69e0188.js",
    "revision": "b8033181a581635cd86de9234e798cd5"
  },
  {
    "url": "assets/js/206.62743742.js",
    "revision": "47a72dd1ca784413220a86b9ac656208"
  },
  {
    "url": "assets/js/207.3fd4850a.js",
    "revision": "213a4b35977d7cdfe943073978a5c753"
  },
  {
    "url": "assets/js/208.d8c45ba6.js",
    "revision": "d79ec7b4b0f0c8bd6878f83dfd4192ef"
  },
  {
    "url": "assets/js/209.c09edc45.js",
    "revision": "5859f419ef7665b339e0c9129b2be70f"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.40b9cbc4.js",
    "revision": "882cd479d3ccec7e926d2dfe2df3d16e"
  },
  {
    "url": "assets/js/211.c9f8a4ae.js",
    "revision": "e27c0f1713b0886c258a868c1f65edc5"
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
    "url": "assets/js/217.7f8f5a9a.js",
    "revision": "43861d79407b7fb8a4a3aed468de4bd1"
  },
  {
    "url": "assets/js/218.4fbb6b00.js",
    "revision": "852858fd83d98cc9f21134117b6308d8"
  },
  {
    "url": "assets/js/219.f4913348.js",
    "revision": "b78917576a352fbdfa8f86f7f9127272"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.4e091ae7.js",
    "revision": "2e35a56d32291f5752c885c106958f8a"
  },
  {
    "url": "assets/js/221.6c208605.js",
    "revision": "331875539e4a21f70b08bd8de089cf3a"
  },
  {
    "url": "assets/js/222.753a4c8e.js",
    "revision": "e30c0ba70b508013df5c8e761e7af7a3"
  },
  {
    "url": "assets/js/223.56cdec99.js",
    "revision": "155d18be687b87ef26a6fbda57b4f21e"
  },
  {
    "url": "assets/js/224.a02efa0a.js",
    "revision": "c8d689588ef1ae7f42c748245f645d25"
  },
  {
    "url": "assets/js/225.57e85a16.js",
    "revision": "47013341bf9863041572ad68c383f5c5"
  },
  {
    "url": "assets/js/226.5e9a6ece.js",
    "revision": "4630996935ab29f35abec19038f5faa0"
  },
  {
    "url": "assets/js/227.66d4b2c4.js",
    "revision": "a8b8ef8304b0236796b3fcb4da4bf29d"
  },
  {
    "url": "assets/js/228.28b1fc1c.js",
    "revision": "dee4dd5d55e076b0314258c456596e5d"
  },
  {
    "url": "assets/js/229.489ad377.js",
    "revision": "87587bc078eb012bb599068f67102404"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.7ad0bcbc.js",
    "revision": "5cc6f07d5a79c157ccce3f22e16df1a6"
  },
  {
    "url": "assets/js/231.2be61c22.js",
    "revision": "916e9cc36b8a9572af86c4a068274e7c"
  },
  {
    "url": "assets/js/232.a9b9036b.js",
    "revision": "2d6a99cee22253b41bc66dc75515ee28"
  },
  {
    "url": "assets/js/233.54eb379d.js",
    "revision": "3dba39bba36c01732d8e91e781ba6161"
  },
  {
    "url": "assets/js/234.413d54be.js",
    "revision": "7da54b22c426690c0d986714a7e52fb7"
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
    "url": "assets/js/237.73d49557.js",
    "revision": "2cdcf1caca5755a36b0919bd4d1e4776"
  },
  {
    "url": "assets/js/238.0b1bdcb3.js",
    "revision": "397725774ce92dd2962fa8b188486575"
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
    "url": "assets/js/243.671d2ab2.js",
    "revision": "fb0bc74fd244be2930cf5e39ada95075"
  },
  {
    "url": "assets/js/244.a779134f.js",
    "revision": "f4bf6bfa1190006e357b62ebd766915d"
  },
  {
    "url": "assets/js/245.812a43f7.js",
    "revision": "979988c3ddaab382b9b64ca6b3bca3af"
  },
  {
    "url": "assets/js/246.28d7f2e5.js",
    "revision": "ce0ca76b8659198e463104a87c404d5f"
  },
  {
    "url": "assets/js/247.608ebff0.js",
    "revision": "d010a3cf98a7e59165d74c2cd4951d91"
  },
  {
    "url": "assets/js/248.e3ccf0f4.js",
    "revision": "a3907cfa93ee8d53cee333db5de39d3c"
  },
  {
    "url": "assets/js/249.0553fc17.js",
    "revision": "fcb6b2e3a2ed75032d3c54487c524df6"
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
    "url": "assets/js/251.9c5d6e8c.js",
    "revision": "1421ea4abdefc2bb9a736bfa88863426"
  },
  {
    "url": "assets/js/252.5e00e9be.js",
    "revision": "314bb7935b02a63c736fbf2ab14bf9f1"
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
    "url": "assets/js/255.ed5d0d5e.js",
    "revision": "9d436e3f1369e739e6ebd8cfd8d416c7"
  },
  {
    "url": "assets/js/256.8aaeef7c.js",
    "revision": "988b3dd2d8802818078d482780e7fc98"
  },
  {
    "url": "assets/js/257.8c2849ef.js",
    "revision": "e8c3a05f1dd2ed5950309c9f44b7211e"
  },
  {
    "url": "assets/js/258.7b8af19b.js",
    "revision": "4bd13b4230a1f9e9a344fcac1042a4fb"
  },
  {
    "url": "assets/js/259.d876742f.js",
    "revision": "a1913c312ac516dad3499a72e293e62d"
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
    "url": "assets/js/267.30dc21a4.js",
    "revision": "82df3dff56e5b1836181e3cf5695f559"
  },
  {
    "url": "assets/js/268.bc5a4e35.js",
    "revision": "ca5fdfad5a0e0cb2ab672bf474eee2b8"
  },
  {
    "url": "assets/js/269.4ce8dd70.js",
    "revision": "77ab917a58cd39551a7d9355c51399dd"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.3d9e4f89.js",
    "revision": "36e1285055f632e3eef2351ff110dff5"
  },
  {
    "url": "assets/js/271.e8a4781f.js",
    "revision": "fdb195e4c7a81c764c03635a98b26a17"
  },
  {
    "url": "assets/js/272.e4869bf2.js",
    "revision": "3d6b813ee290985487b1bb1c9a66af5d"
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
    "url": "assets/js/276.2ddb48f9.js",
    "revision": "5ba3a948550d1e98cde0cbb3724441bf"
  },
  {
    "url": "assets/js/277.7c966184.js",
    "revision": "b287f03fcdcd374233de7bb0d720527d"
  },
  {
    "url": "assets/js/278.ae5fac9c.js",
    "revision": "3d74f86d47c04f66ee71d28c35deb7d4"
  },
  {
    "url": "assets/js/279.029b96f6.js",
    "revision": "5189696298628ca0d9b165d630a01f0e"
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
    "url": "assets/js/281.cb143936.js",
    "revision": "ec7d6351724e5e8e95d8e97021f57f14"
  },
  {
    "url": "assets/js/282.e6e96b4b.js",
    "revision": "f92562a257086774ca83d17836a8fb0f"
  },
  {
    "url": "assets/js/283.cc26211e.js",
    "revision": "78225a67aafc767120695fa697dea705"
  },
  {
    "url": "assets/js/284.083bf67c.js",
    "revision": "e01e0f41aae3fb678e622829c7f2d2f8"
  },
  {
    "url": "assets/js/285.89e60d1e.js",
    "revision": "1ba46d0ee26cd5767ecb312e6e795aad"
  },
  {
    "url": "assets/js/286.3eb6577c.js",
    "revision": "32ff24ae63e14cc7da8c193e3b5c8d05"
  },
  {
    "url": "assets/js/287.34f15eff.js",
    "revision": "0d3253aebc706263c600827a0e4bb662"
  },
  {
    "url": "assets/js/288.08b525aa.js",
    "revision": "819704d5ea574193319eb2288bc79689"
  },
  {
    "url": "assets/js/289.c0d23914.js",
    "revision": "7c87a0e9359cf6c3e59afeebe9fb6384"
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
    "url": "assets/js/291.7d803138.js",
    "revision": "1cd54d23a20f743a0c7a3e8516fb3008"
  },
  {
    "url": "assets/js/292.34837a34.js",
    "revision": "893eb0952d9d7796b7960d988ce34d59"
  },
  {
    "url": "assets/js/293.67853ae0.js",
    "revision": "c1ab0eb22b22bdaff48f74234fd6accc"
  },
  {
    "url": "assets/js/294.130fc1b0.js",
    "revision": "80b18b99c7ea489fb1115519f86d8ab4"
  },
  {
    "url": "assets/js/295.f1669ba6.js",
    "revision": "0a3c3f4f46452de006606552201c4fb9"
  },
  {
    "url": "assets/js/296.6ffd1d45.js",
    "revision": "9d102146d40025a70d4fa0236aeb1b2d"
  },
  {
    "url": "assets/js/297.4ab289c8.js",
    "revision": "543302ae89a6c3f4ea725082c362be3c"
  },
  {
    "url": "assets/js/298.43376976.js",
    "revision": "ee586ca24cc5800ad1de2ac5eceb8a44"
  },
  {
    "url": "assets/js/299.25552b05.js",
    "revision": "711efb0acde9023cb1e3aa17e7cdc502"
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
    "url": "assets/js/300.115bf879.js",
    "revision": "82c6e419971d2fbeb7b7405fecc65287"
  },
  {
    "url": "assets/js/301.8d1110e5.js",
    "revision": "631bbd14c4e95db77fee240ee7c3258a"
  },
  {
    "url": "assets/js/302.5c6656c7.js",
    "revision": "428dba9e44474c02dcd982712e91e867"
  },
  {
    "url": "assets/js/303.8c2168b1.js",
    "revision": "0b719e4f51b1a660aba1475361f3f94e"
  },
  {
    "url": "assets/js/304.1f27bd01.js",
    "revision": "d8683e865a43fa65cd14cafaeeaa2117"
  },
  {
    "url": "assets/js/305.b74784c9.js",
    "revision": "b152a61317c5ff0b7789560ae6c70582"
  },
  {
    "url": "assets/js/306.a49432d3.js",
    "revision": "518bde9bf9cd59415df1dd7885246ab1"
  },
  {
    "url": "assets/js/307.22518ffa.js",
    "revision": "6822e380d3e6c7a0b9b7d33e1761c823"
  },
  {
    "url": "assets/js/308.2fe837e1.js",
    "revision": "8d7cd1a26fa08016d8dd22d92e3a6b33"
  },
  {
    "url": "assets/js/309.9ba1d5ff.js",
    "revision": "f16fc3695e08ee81d4ba64aaaf3486b3"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.c53c5413.js",
    "revision": "588ecd3aa52cd565537ea0dd4eb64140"
  },
  {
    "url": "assets/js/311.884aef7a.js",
    "revision": "4c5d7bfdaaee451b725d4a20486c9190"
  },
  {
    "url": "assets/js/312.ce9ec063.js",
    "revision": "75255df40320e3721334aba70ce86d69"
  },
  {
    "url": "assets/js/313.1b35269e.js",
    "revision": "00ae909ba9dc20e08b5ac1fe69f57b5b"
  },
  {
    "url": "assets/js/314.9e2407f7.js",
    "revision": "636da2f2e0f56d8b5e478cdb3f370565"
  },
  {
    "url": "assets/js/315.d46432e3.js",
    "revision": "d5c586d35c5fc0252b492b58085cd6e9"
  },
  {
    "url": "assets/js/316.f04268dd.js",
    "revision": "68efad82b668e4fcce8c7bf8ac94515f"
  },
  {
    "url": "assets/js/317.995a0763.js",
    "revision": "2ac60caa404f696eb0b10403ac30e172"
  },
  {
    "url": "assets/js/318.a00e10e5.js",
    "revision": "65e160d5a28d9cb1779e49e341a795c9"
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
    "url": "assets/js/320.8a1e40c4.js",
    "revision": "7474bd3672fa0579c059421e55c8014e"
  },
  {
    "url": "assets/js/321.9dd90463.js",
    "revision": "cf799b04a3d731edfd9dc1379e681127"
  },
  {
    "url": "assets/js/322.c8a3cb36.js",
    "revision": "ca3aeaddbca80b1ca505f00ddb946211"
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
    "url": "assets/js/325.333d8536.js",
    "revision": "15b6dbf4b8b5343ce5d6059e34e98184"
  },
  {
    "url": "assets/js/326.74409e30.js",
    "revision": "5cb23bc452f357b3ef198ef5962ca2f2"
  },
  {
    "url": "assets/js/327.aca3746d.js",
    "revision": "f2063772e03e30e20e4d17be6210e614"
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
    "url": "assets/js/332.b6220771.js",
    "revision": "620a4fc32fb03d788f4fcfdf29610c60"
  },
  {
    "url": "assets/js/333.bbd8554f.js",
    "revision": "3873fccd320592e0689fe5742a387e47"
  },
  {
    "url": "assets/js/334.5352694c.js",
    "revision": "53890b977232cf4c8a1e31a3ffccff10"
  },
  {
    "url": "assets/js/335.b85335fc.js",
    "revision": "2fda9abf2b4f4916215b52e62f271bb1"
  },
  {
    "url": "assets/js/336.76a4dcd3.js",
    "revision": "999bd2abbe57e08cc52809e4df215db2"
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
    "url": "assets/js/339.7a869f10.js",
    "revision": "d7dec6d2026ad1275b9bde84adc345aa"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.12008449.js",
    "revision": "c1ff8db290f12714ede82008b5573127"
  },
  {
    "url": "assets/js/341.c9646b63.js",
    "revision": "3e1e3f92f7d72b37f0ccec56de65ff46"
  },
  {
    "url": "assets/js/342.38cd78bc.js",
    "revision": "057adad0c8715a5e02c601269a3858ca"
  },
  {
    "url": "assets/js/343.05cdb605.js",
    "revision": "c95259a16f45e3ecab8817cf776e8399"
  },
  {
    "url": "assets/js/344.50b55b6f.js",
    "revision": "ba407d2bdb1b1e2a27fc8e5f9526d18c"
  },
  {
    "url": "assets/js/345.fc47895a.js",
    "revision": "108f7956862380fea728041d60be8485"
  },
  {
    "url": "assets/js/346.23ec6c45.js",
    "revision": "2e35f37e5778c0db5f1d780cec42b1b8"
  },
  {
    "url": "assets/js/347.8c494461.js",
    "revision": "a184e0a0042701aeece94b0722d263cc"
  },
  {
    "url": "assets/js/348.4163efec.js",
    "revision": "430ed75d2b08b88787d457846f61eca5"
  },
  {
    "url": "assets/js/349.cd1fa9b0.js",
    "revision": "c72b6165090016985459a58a99ad6f70"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.928514c0.js",
    "revision": "4d17b137642e46261cf0d9019e619b4e"
  },
  {
    "url": "assets/js/351.fe047d57.js",
    "revision": "01cc76ce81d848f48796b7282af1df3e"
  },
  {
    "url": "assets/js/352.6e1d3f81.js",
    "revision": "27bdec9b273a4cd43dfb57a337bb0a0a"
  },
  {
    "url": "assets/js/353.1feb8a5f.js",
    "revision": "70881e3623e1ce422952764a8d4e6be1"
  },
  {
    "url": "assets/js/354.deafb39d.js",
    "revision": "40107f85bc40cf1069dca4596c5acca2"
  },
  {
    "url": "assets/js/355.f075ac12.js",
    "revision": "e04497950d37cbb3e955961644b6f1a0"
  },
  {
    "url": "assets/js/356.d506f2c5.js",
    "revision": "efc573aeffe73214df649512df7ec997"
  },
  {
    "url": "assets/js/357.485a846f.js",
    "revision": "9843b739c6b09172f7f8981f91fce547"
  },
  {
    "url": "assets/js/358.d6f85ea6.js",
    "revision": "097cd5d7a143e0866294d671124aac02"
  },
  {
    "url": "assets/js/359.0fe2e2c3.js",
    "revision": "edfc31533c1c49123f8783f90d551f52"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.5fb42bce.js",
    "revision": "b7bcc779be8b3746f0464a86bd1a397b"
  },
  {
    "url": "assets/js/361.4ec8e554.js",
    "revision": "e2217b73bb85d0edd5a0a5a61e058caa"
  },
  {
    "url": "assets/js/362.017dd1dd.js",
    "revision": "bef45242512b11526fff4d42e4d07cf1"
  },
  {
    "url": "assets/js/363.d3e195a5.js",
    "revision": "fb7be5dedbc8477389e7c76c38b59830"
  },
  {
    "url": "assets/js/364.9861855c.js",
    "revision": "03c5d48d86b26e7f28a2aa17f6f2c61e"
  },
  {
    "url": "assets/js/365.1a814c34.js",
    "revision": "b91b640ea3fbe33cfe0c7c4aa07f3c92"
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
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.63b58091.js",
    "revision": "496b6744dee469122ffaaecfc8dafe44"
  },
  {
    "url": "assets/js/46.9fd609e4.js",
    "revision": "a8dbe4ac2ab19e9389a259bd2b036bf0"
  },
  {
    "url": "assets/js/47.9ebc3de8.js",
    "revision": "1be38880c440de6849a5c4c7f66ce9a1"
  },
  {
    "url": "assets/js/48.756dd4e2.js",
    "revision": "dac45279e7da1e7da4c394501647105c"
  },
  {
    "url": "assets/js/49.34038a79.js",
    "revision": "6f9fea6339b945c4ae3d8aa583c3373a"
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
    "url": "assets/js/52.5a0d878e.js",
    "revision": "3cf16ef257f079a4b2ffed25fd407d2c"
  },
  {
    "url": "assets/js/53.423cfeac.js",
    "revision": "6275110987d25a8478cb07d450a99ee2"
  },
  {
    "url": "assets/js/54.b1488426.js",
    "revision": "777736d77027145051c1ac151a5834a4"
  },
  {
    "url": "assets/js/55.9a3a8ce7.js",
    "revision": "cefefa290df898bdf8902a4ec6aebf4c"
  },
  {
    "url": "assets/js/56.e5ee3a10.js",
    "revision": "b10828a7de76284247fb176df58fe3d4"
  },
  {
    "url": "assets/js/57.a3b528b1.js",
    "revision": "995c6d5f6be91cf9ae448b1c4c7121f9"
  },
  {
    "url": "assets/js/58.f91a9be3.js",
    "revision": "e68e84da086c1938cf1f58b8349d60f3"
  },
  {
    "url": "assets/js/59.64abfe86.js",
    "revision": "34c3f528274695728d4fbcb65377a8d9"
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
    "url": "assets/js/62.673682b1.js",
    "revision": "78b43de97fe9593319c96308c7cddf3b"
  },
  {
    "url": "assets/js/63.34c07512.js",
    "revision": "d40b516e2745eb5437f4dc2bd83ef719"
  },
  {
    "url": "assets/js/64.bc757760.js",
    "revision": "cdf1d346db5f59f2ab4ca03bc62c0905"
  },
  {
    "url": "assets/js/65.31ed0571.js",
    "revision": "2e0969807f5d37ed3bd3ef3297b42135"
  },
  {
    "url": "assets/js/66.22fec4a6.js",
    "revision": "3a3c480364a3531615f8f3e5edf82422"
  },
  {
    "url": "assets/js/67.b653b12b.js",
    "revision": "18cb74deb32f14121a56b91e64a7d907"
  },
  {
    "url": "assets/js/68.a965e14f.js",
    "revision": "5d3d9b555f953d650d7489d1b01843c4"
  },
  {
    "url": "assets/js/69.c9387777.js",
    "revision": "54da3a6ebaa66e3975d9d4f544643247"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.82657f66.js",
    "revision": "dd57d8eba873e0acf208b49e91585aa7"
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
    "url": "assets/js/75.a61ed005.js",
    "revision": "6c964249fea5359ad02afb1f838adb19"
  },
  {
    "url": "assets/js/76.abc2cf0c.js",
    "revision": "96a1b74a29c8126e7ba6137bdde509ff"
  },
  {
    "url": "assets/js/77.a716867f.js",
    "revision": "0bf7bdf7b8063587e36d4700719b6774"
  },
  {
    "url": "assets/js/78.b0a1898e.js",
    "revision": "cc884140f731d17dc8a358f1d37952c8"
  },
  {
    "url": "assets/js/79.44629d58.js",
    "revision": "0d6b0d4ce9c86eea0f543e418a648225"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.8abea16b.js",
    "revision": "c5459d39d94d54cdb8a848ada6cb4a3d"
  },
  {
    "url": "assets/js/81.ce38da0e.js",
    "revision": "9b7c5bca5fb689754b4d35ad7f242a29"
  },
  {
    "url": "assets/js/82.304339c0.js",
    "revision": "3b266166a09875792827bdb3b2cc3e7f"
  },
  {
    "url": "assets/js/83.ab250a27.js",
    "revision": "46be1845a05bdd3f795eef33c4a92688"
  },
  {
    "url": "assets/js/84.df7691c1.js",
    "revision": "8e5b7f5cd2d32810c3d1cdbc9d442e29"
  },
  {
    "url": "assets/js/85.d6373522.js",
    "revision": "4196cd16d95f3e02e1594f33b9be0e24"
  },
  {
    "url": "assets/js/86.5a0ed9cc.js",
    "revision": "1e5dfc56418d138d42ac6db1a83861ec"
  },
  {
    "url": "assets/js/87.2970aa60.js",
    "revision": "6fc6291aa12f08ee857ae661a4383df0"
  },
  {
    "url": "assets/js/88.a4849fa5.js",
    "revision": "7edcb9f59a08f5fbec256884fd4fa971"
  },
  {
    "url": "assets/js/89.48b4823d.js",
    "revision": "0273bf42b07d05412a9082697617cad9"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.d92c1223.js",
    "revision": "5ecea83e129545e65a977aadc8263406"
  },
  {
    "url": "assets/js/91.840b9785.js",
    "revision": "f62961a174c335a9ea73c5f90bdfd95f"
  },
  {
    "url": "assets/js/92.75d6a56c.js",
    "revision": "644cbe50e48457babfa178059286ecc4"
  },
  {
    "url": "assets/js/93.93cf7e63.js",
    "revision": "07f8783a09228eccb62636e17dbb61c2"
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
    "url": "assets/js/97.5ec9685f.js",
    "revision": "cba3bf6d3c5138406e340fd8f6ff299b"
  },
  {
    "url": "assets/js/98.54c82a8d.js",
    "revision": "edfa7e3bc33947a7d9e3ae3c68da89b4"
  },
  {
    "url": "assets/js/99.601fa264.js",
    "revision": "056fbf076bc9c76e28d7bb1e8f8f137e"
  },
  {
    "url": "assets/js/app.6bc34f2f.js",
    "revision": "32b3434fdfdc99b16f6814ee94ed6fa8"
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
    "revision": "7ef1b6d65879c1314dc2c1d33c8bfc14"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "564b4db001cc22d65de92ace1c46a529"
  },
  {
    "url": "books.html",
    "revision": "7c50bcd9a86f7352f55cd581fad532c0"
  },
  {
    "url": "categories/index.html",
    "revision": "3b6cdb8b5dd34eeb3bb5c03d046c4510"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "24dd2bc95b6b4e5a13efcdfcf7e8c355"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "32037573dddaf3d2ffb07dc42589b649"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "d4611dab092e37a055546113358890a4"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "cef04bc733489cfd20b3812b434be2af"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "4840afe4775984cc70ba7f5b0ce66c6e"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "276c7f012f91a3399f6b421a58c315e5"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "480d9394891101d8bd5d5f769c3e902a"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "89baeabc885246267ddb33baf95f845a"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "dfbcb0627807648feed963ed862d5bb3"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "d5a6a05aec408f6d121f1a2f9c218e22"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "c45f3c241c3683f515bb8b0c3d4d16d7"
  },
  {
    "url": "deepseek/index.html",
    "revision": "8321f633a78e37e3492eee279ec87168"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "8d841d9169943f9d22f2fe63d9455f3d"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "31cb37ff0761261136c73bfed5b53aae"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "e4a7453e5935b91763ffba6d0706f3b3"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "ba2094c87e68bb1b162450ce6b324916"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "e07297e999cf7057137461c52e07ba51"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "e1680304e05cb47f2392e9ea05d48f80"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "69d0d193f10a1d5469bb9edee548cdcf"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "b46a3bbacbc15c1aa5947d5abc0cbfdd"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "36a3cdb01d94da230890a60de7748075"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "de483fbd3d81ea85f5b9c40e1dbf1bbe"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "9d726942e8dca232c6f5b895e9495b7e"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "b0ae23f25711e6223216a63641c8d804"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "7d9aeb136abc8cbeda69ee44f4d80ca4"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "701878d09a96fc242c52889a49212f05"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "119e785ecba4425002328109d9fa99a1"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "a083acdc3789f3a717c8b37d6f4277a6"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "50a7b9ef96e43c231e0acc55b3202c89"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "cfc54976bcd68008b24b9ef748190cb3"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "cf9f927cc6393d2b54c8ba7d4c63a845"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "d1e06da075d5262630b5a865774ca8b4"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "adc209cc7fb46d056f6bdce6e84a8ecf"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "8b0c55542cd523031bc3428e1f213870"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "afe39e61d882ad2479eaf218d54faa52"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "5a99dfb5dfcb117ebe51145c09cd8c3f"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "4cec2e9169a67f224688a5bdc015b18a"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "081eb78dfa656897931adc4ea39d315d"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "20c856ea9d177023a32f6b5eba0f48e4"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "552f80b21dfeb4f265b80749cd9cbbd5"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "a1b687bf92ee2baf9389682ef8567029"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "4f7277a88780dfb3a791f9c5bb64fd3e"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "6222f8763514e1f05d273131179591dc"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "39ad5b2426082200ae8561bda84e219d"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "30be0bda80b663a4d1aa07d0846b68fb"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "146b4a37cd6569aa42413ae535581a48"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "3f2ecd98cbb7de601e12af5d81e718a5"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "e12a48ea1b379ad8cd2dd2709d81f072"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "3cc9f4da1cc6593a9ab8f35042b5f72e"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "911434d9a4315fed8403ee636f7150fd"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "064511452c1984cba782ca7df824e2e7"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "d383566d49a21d87de11591457b00a06"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "3ffcb1b0e59b9ae23c16b78c6c6fff80"
  },
  {
    "url": "figma/index.html",
    "revision": "c959808c9e349206e634557d18939b2b"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "f40c6b73fe7acb965689006a3585131b"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "d001842be7680c57c5d761d0aa18283d"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "70c5bad5ffd238b635cac6196eb91d97"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "b14c2faf1235526cc7b1d6466d1fde83"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "55d2ac5e73376e227df07dfb44f0d15a"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "271d88d2341759da15e6ed7feae5355f"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "1262bf2d1c7c0118a3a5b857cfbb8831"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "865a25c17775aaf222e22c4326bcb0b3"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "df7ee37995649b28cafdd7786dbefca5"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "e6bc955bbd1de5fb886addbb862d7f69"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0f918a31ccc21bd07c95457036569cd3"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "08e1c5086aadb03a694209064fa07bc3"
  },
  {
    "url": "flutter/index.html",
    "revision": "ee0b38b1da77ed62dc2e6070c72d4dad"
  },
  {
    "url": "flutter/point.html",
    "revision": "f9bb4ae47b1597a10372920fe0358ad1"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "34cbf87f099008930a781939bf5b32d4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "7b9419faead3aca65b09ce924c64aea3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "64a34ff8b260dcb7a9329079ab7dfe7b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5d52f5f5d7841fee902e4070f2648296"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "f0b44a6e66b6cc7c5c6e1bd86000a70e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0f8cf93e6f1148e7492d1b6f66eb4f73"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d2918cfa617886ea736c1810d1f1b40c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "4520de53db1086417108fbe8936b68b1"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "fdcbe8033356376e50ca30aead5e764e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "75a72cf18e1a8c4d6c6ee4aa0307d1c6"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6f5d89df5f508d9c29b528a99e99824e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "907d0e1a14342ada57df106bd7280121"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "aeaa12dce2149176cab7ff5a0195dde1"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "1fdc3dafff3764862df025787fd70ba0"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "1cc2d2e045391d78384c34ec8291f74e"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "016ad5d227831839a09bf55cc4c8f9d2"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "44566266df771bccdc2d233e1d12eebe"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "eb1ee4579da6c86377369d88604b3fd5"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ebd954825afdc6b58c1a8014fa3a4466"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4e08ec94ac98c3a4d1b754e1e98926cc"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "ca726d51671c7f5b2dcbb7744b8333dc"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ecf619282e6c041202f7ce612a0d69af"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3b556c4525739b34a8d6e86fad9d2709"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "76a3e46f0529dc4a0d6136cbbd978371"
  },
  {
    "url": "haskell/index.html",
    "revision": "a1fdb7a9cc776702d0392341bc1dbb86"
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
    "revision": "49075ec5f39938e37a1f086f26eaa85f"
  },
  {
    "url": "java/index.html",
    "revision": "73af1f4f1e8ca0182d11c3e953469f7b"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "12424bcbc8001f9cb2a5a3b2383dfc48"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "a13b4ab399da8d391b06b1e8e1089ce3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "20a2230074dea0167cfa8254be2978e6"
  },
  {
    "url": "ops/index.html",
    "revision": "fb63bb0cdc99207ad53e1fa70e7fb85e"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "3be5400a5b50912fcafec4725f72bb1c"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "ee0a3c6960d32e4142f90570f379d0a8"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "cf0dd4681673bea40f0a0c7a62aa95a8"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8c6037a62083df2267c964b0498d2414"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "532c1bcf261433ae14f6af73d1217624"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "a7dee3467aeaa7922a47b8c7803c8b3c"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "a88c745ea9beb2d1ac8c4cbcca5f235e"
  },
  {
    "url": "python/index.html",
    "revision": "430cbb116b65830c5c1790369f32d831"
  },
  {
    "url": "python/poetry.html",
    "revision": "de919b47687707726be08912ca42e6a4"
  },
  {
    "url": "python/pyenv.html",
    "revision": "b783623c9311d6d35451bd270119ddae"
  },
  {
    "url": "python/python-ase.html",
    "revision": "687f1a23c20347b41c6063b60d60fa30"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "7badb55496d743e8862cd8ed2cda5e4f"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "4bdf1106ba7e9a2341e769b6ccf002fb"
  },
  {
    "url": "python/python-file.html",
    "revision": "94f1e13237d4d7c4c35610121c1bc29b"
  },
  {
    "url": "python/python-function.html",
    "revision": "1b374e11eee2d29d54110b621378e754"
  },
  {
    "url": "python/python-generator.html",
    "revision": "a85e5583b198b1c620cfae66d555e7e6"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "2710b21a30e69c0b3b855aa3cfb918a3"
  },
  {
    "url": "python/python-module.html",
    "revision": "0f67d6b98fb8e4847c837cff6c79ba81"
  },
  {
    "url": "python/python-string.html",
    "revision": "bcfaabb45d68c8e0af3c619479d3e629"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "65563b62b7968fc8590ef5b971698703"
  },
  {
    "url": "read/index.html",
    "revision": "038ab62b70bacf26279872365886ccfe"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "9e2a551c6862157ecea57569108cb921"
  },
  {
    "url": "swift/better/available.html",
    "revision": "a2fb64e35c4b7f8093814584958db037"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f3365b81ae7acd2f58b2c6d3a6cd5621"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "0dbe05813599cd1fdbcd10984e84ef27"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "46360a4e4a702ef2166324037090f547"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cc0e2a2fdba958535284a931dc9b61ca"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c728a39ba24de22c4aff62cff21421e8"
  },
  {
    "url": "swift/better/last.html",
    "revision": "cbd27c9841edd962e5d62a0f35c5b0b4"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "30f7e34a585c27518b7b7d831558082c"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b91c9f0ed4bfd06c0185845e5eb07727"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "30c19c3595f2a71ae828d5df354785f6"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "10ad8a4150ebe1e2db032d1b7058b22b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "163546fe7cb5212c742b334393b9d6d8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "24fdf1d4c3562c004632027ce8a800e3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "010d1df608613854188c6567e8b3dac1"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "48540a406f366fcd7f017f035d0ed06e"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "d979683800f4615bd4363a35681600dc"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3a43bfa39b4d0d130be2cb90c6d8ca98"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "8377e9657964f1c3b9b0cb0ae88c884a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "411c075ee2e51702c1df29681ce59679"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "40ce2b1aee75c4e27f7ffa262cb899d7"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "b41bdbddbc3f6b10fe50f0fb5f4cb275"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "da762da86e046ccc0621553a0a6b8bb9"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "07077b595b81515eefed0f057658d757"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a91cebf2b6f7db0a1b646fb6c5fbe1b2"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "b1984a7dbf7ffa3cded2c868b310d52f"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "fbfc6defb0184a3fa7f77631a4289db2"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "1caba68d0a5782e6074ece35dcc87a89"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "dab891c8d72f2b976ddb8f23dc34272d"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "0be76016b6c553289ea86c27ffaf10c5"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "fd7902eccfb230db26bec2e14900ef67"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "530354d6f92b16261f3f805078834e16"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e94c96df463e8450e254fc0a8c90d092"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "f2e53cb923235e3685561ee5b3a13261"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "18a304448d35f9be460a99dcf64c689c"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "c24e620188d8c4d93f87de77d79abf3e"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "38f55c5952a29a1ee5fd2f52f8b080e6"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "da40a252912a90a838a8e45cd23cf688"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "287de72b4ea99c6a693ec094ebbcb3e3"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "bcb1302b67fc2096036edbcbf9873398"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "7ab96df13904fb04c22ce5342e3e7fd8"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "d35e80eaf5019a57d5e93c3fe11fdebc"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "a944ae275238989cd7de2ab39829d58f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "1e1d485e7d0470403a5ae1433c1436ac"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4bc784ef2f1f32758563bab41c7720eb"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9a707dffad7e61d70e6d4cec4a90693e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c73bafd67b8c28ff34a122105f4118ca"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "a96a50ac6a2422ce6208801441ffddbc"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "ab30df3e8718a4f5094ea249e4da5ddc"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "673c66a5cb187eae083e233457157510"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "6217b4bca4ce7d59e3ef709f7ecccac8"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "fce68afac3b3c5ff2e3fa554adf449ba"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "631e313144cc8c688692b1aa3c7e6a9f"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d4f94944d1f28c74a3eec53fe3438828"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "a8d540f79c6ccd9b2f203d12bb378720"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "8f56554b640aa277f6e671a4a5b070c9"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a49067a100ab01a70d7a1df79d7ea7fa"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "df66f66fed005f647cf311ef15c2dc7e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b74a42528b8a101e0df429d436c2d18d"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "caed54cfff5e9bc6049c28d73fa1fe7c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d8bebafa8eff8a77080c627e39f0bf21"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "989f986a4a6073589464930582027099"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "53f7368861421451884d4d8dc959c464"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ec122d83b6ad234ca5fc032813757cf0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b46ce8f6cae0bb2caea9f268404c0289"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "241c5d39805b43a4e4215a1e6273696c"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "2c8dac9b6e0fc05a5d21716833386192"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "3c289a11343057e88f0d5830573dcf1d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "47b07a503ff393c3c9abfd13681e24db"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "fac1ee9eef121f4e9854252e7e4c0ef7"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "a5a31d6f3a1b09b0611a32967f94e6ac"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "d65368b6987c0fadce7cb35504d48296"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "deb209ec8c2f459f4e9a552214096be5"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "2fa349d670c2e5554865631f1d5897b0"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "ae589e7d20041ce18c3f8dfb2e6e2c12"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "cb1dc675d89b0c6fe670e02489c49dee"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "492d1717205aad6c9ae340cf78dac78d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2273a52cc502d57cb9c201b86dbbb220"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "0527131294f38b4b9066bcdd497eec00"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "64a4be347e09904b140c438fc0d90756"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5ccd9efb0ef9eb4e04f9437e6e721d91"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ab5dc12b91e8cde1b88fb73b2ee40f1c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "5d0c8c87852d2634fae820517d95de65"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "a8af4b90c56e25f74e9417d3e9541402"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "415228a2a89354bdbdc3e48037f3a59a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "9cf26cb3264d1bbc052bb09ef139e927"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "63b3e384b081f387c0c4ea33f441aacf"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "834ae515d2f9f8522d42317322878a32"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "c2f03a4422f31d8e224c88232cb8a7f9"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "a3fa4005fecfee213c2daa7127b99b4a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "d64b0ca1c3c0bae6b901488553434ac5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "86a4819bdc791df2704e828fa8e8f350"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "93de82681a8bebd3114c088d114b4b32"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ee6223f45600087c289b5bdb7ed6264e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "7fe5e7b6bd72a77cbca85427f2f49d3b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "bb7167e57848040df75e35ca19be2243"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e239852a2e744d978a95c02fda39d89b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "221e9d629d368eb695c0e0780447421f"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "e4340617a7d908e4db8a9b4d8db913a0"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "3fd35c92bb0ee3417ff00186e0c0bfd0"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "61aa9f267f43bfec1da113fc91e8e5ad"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f6e29b634c46f3047168279f940a3694"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9a8ced1c07f0e422e58984da8b218164"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "bc3d0a9612c26d79def0fc8ae9e86b3f"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "519dec2b68bed7c3e663db848a5dc5a4"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f743bcb4c281bb3e0eda5244a7da1c46"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "448cb7c63adfce02b4827d4fe277f78d"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "facaf2cd14d4ec5649925f2e82724243"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "5f2ed13a829e64430470facb714b03cd"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "ad2bc61176e3d8db7728f9abad77d22f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9698068e988d36cda1254684364a82cc"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "5b26dbee696b18d20bd83ef51ae9a410"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "691eb09e8c6273ab938652983724b267"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "71078df86e89353da386afd453f4d97f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "b6dde0132288d4d3e51f04a43b2ac76e"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "cb6a419a5f2d7bcb2cecabb48cc38bda"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "05a99cf7bb6abd39533196ef663e198c"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "1ef916be36e4cf2f043a46184c99dc0f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2e68e67c6daf0088cbcbf25db1cc5ddb"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e365b836505a6e68e849c0e3333c1611"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "dafa06a254e1cc168a4e71fdb6784e68"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "24e8cb81712b8b0ad4e7e3388b612567"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "fa298a0ba1781a1e474f47b8fbb3db3e"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "d7bd38af4471e259bfcce4bd6cd39e5e"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "92a429cded91c7679aa07647d6ff395a"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "e8b3802024c68f9b9c074dda9a434ac3"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "dbe56849f18ae5001cc10642cd892f02"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "68dfdcece88070ef56a9d7a1b8835ebf"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9e48463256230d96d1bbdaa5ee484926"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b2e809f507239ae6e1a6dae4f917dada"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "71372b003e718dcde8d6b159b155938c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0a2ada813eee35f1b0dca848dc4c706f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "383400ea77e4a4f8d691e52f615f3f4e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "bf2472ecb3a14918e8988f1601a346e7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "940e068d9e9b96cf848d6b5d395dffd3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ef6edee0a35ec6dd47640cbf369a712c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "dec79674dff63c1feb6cdfdc425449c9"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "31dd6016e3129f8402b31e62421422fa"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "326f5f0cd26f84acac2c53c9c690fa30"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ed13dfc96a292b07cee665d05c1b01a8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "21e5ad42681ae0b01b31e9ad0af82428"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7bdec14e5fab2f3f28bed8fb203c7ab1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "db97935b88d8f763726f0600eda1a60e"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "38a687e8e5fe3c088f84d65f549c666d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "72f0a6790f67413d7c85ab85bdda522d"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "115b2c00bbe1aaebee3ffc6beadc4bdf"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "61ef087e57d2d68f58d505f3eb9d5fda"
  },
  {
    "url": "tag/code/index.html",
    "revision": "1c964969a0abbf26dcfc26b316f17b59"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "68087478ef39710bb28e8390989206b6"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "4e19ccfc0dd218a709d4672189435ec8"
  },
  {
    "url": "tag/django/index.html",
    "revision": "1f907ffeda20308cc27086e7db907a3f"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "5d9cf8fd0d5b9120d106661b57aa2d9a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "96add7be4855c624a1d13e8971ff80b8"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "e60bc4814e7c986609d67e81a2072157"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "7b34c27f469f0ff737830b7fc248d38a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ad098a0b3432df2a3a6a6d0f678f96c3"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "17f19d451d11f030f28c5cba29ef0ba6"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "16c6b310d38268c8e94c01e53b094888"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "504366635fb5cfa8134792dbbd0426a3"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "7e5c4f34b785608264e3ba1dd34e2dbc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "67b979a3cb4ca1cff2a4bd1994309d45"
  },
  {
    "url": "tag/github/index.html",
    "revision": "bea453e6796e869cd8f2654ac3225afa"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e1a36e413a0299f3d310a4cce8c2b46b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e62615cf977c5d86169371e3aee8e91e"
  },
  {
    "url": "tag/index.html",
    "revision": "adb18ad0296161c9b7ae10115f295ba1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "62d6ea6775a8f1017260559e6274aae2"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "ab2ab5c828e9af5f6a2ae252ca65d7fc"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "01cee399eec131ff54ba14c8e941babe"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "b9df3daece88166cf6ff87d839e5e06e"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "8761df7388849925e06204ab6fd55c7a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "413e3fea522f713987df9e85291e80a8"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "9cf9592e885880b97faf97b0959f7a47"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "0cb37aeb87b7936cdb6a76e0f532a39e"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "5ffdf75c54a991c3f08c833d9a123947"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "3a845cf047a75faecb42eef95021c322"
  },
  {
    "url": "tag/java/index.html",
    "revision": "31c672b2eff46199bdbcdfdf22cb5066"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e370bcac32b91df5c4b98aa5ab1f979f"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "3b9663d086b78225e8d7c1de09b7cb44"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "41df8a441aaba5f482e95f91f6df45b3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "62bd24495834c12c68897b15fdee20ed"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "02ec29cef8a1628b57bbb4b32438fc82"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "c4fcefff3488e1f0cd8e4f6d2d78892f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2afc362e77d5c430bf104e6405ef6e98"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "6b39be58f4e42790b8e0d6f7a43070a2"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "d421a3986184c24b93bbe02ac7fb7a75"
  },
  {
    "url": "tag/python/index.html",
    "revision": "02c3591cd6d2eb11a3fd8144bcc1b6a9"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "68d43bf82eafc8ff7b10626642a05e3a"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f966c5e9c1db89cf39a0cf072e0fd613"
  },
  {
    "url": "tag/review/index.html",
    "revision": "6fae1dc635220c2e1fd1af874c738492"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "40c07c8600a8349c84a81dd8f6bb30c2"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d588f0997dd5a778745d559f67d61057"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "7c2e8300729faa1fe1fefc1b8541f85a"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "bed053c4fa2c9f059ff3c9aecf57b244"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a9f927d0b1f3f5181940fb819b5d38bb"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9daa9c40c9d84a2fe5f49258aa3549f4"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "d1cfb184b6a535b29f75da51940f6df8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bfb6ee9f0ae01176782dd656195cbfeb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "50b8be6977de5544db48fa984482d418"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "79a08d8efc0431e9e1f925efd4a49987"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "dcf3e9b89fcacbd2c089387ce5d99558"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "0efa65ba16b3ed770e1792842ac28841"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "31c141ca20f1c12e5ed3c9158518da0d"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6ebf8bafad838f3d4fe924bad8ee1543"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "6a61b92269fa57c478b8e540a27760b6"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3f0a19b4ab7410c1c248b56ff139bf3f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "58d89b944b30ef952e1b17014af5f3af"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d0781e8eaf5761cddc732d6ae226ca46"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a87493abd84ae471715d514fd3016036"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "efead9884cd9ccc4e14a4be3a00603bf"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ba14680414e938df29722621484ddfa1"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "14ee42455f2369cf00938c52ff7174e6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c2dbcacb996019857bd866ed011f95ff"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "d0713b1b336442427ba9ceb911ac81fd"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5a3625634b9e0362ad32cc1c6a9e6899"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7c10ef60dc8a30bd8be3d877f27917a8"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a458de4e6cecd33aeeb6dcc4196a86cf"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "03512f804d7fb1c4b973cc43cedefdc6"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e2fb701d8f147742cf2edb744c4fd0c8"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3a7761b1f894817f07c38d0c358fedba"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "52a3c1b88c3baaa121ec44d2575040eb"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "389032b1faf88d200cf056358d1b2bab"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "0c558977057b04b3b8b444b912775fc2"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "9025bde429dcbaf8cd0feb3a07fa2ed7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "8640c1a68c5d1ab7b03e3d5a88982724"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2694db65d8875d37cda5b83cf99746bd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2efda4cd139533e04a29efe403cf3a8f"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "f125628344afea4de591b879d149ef7e"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "1f15a0e9352b1a95e72043640c3243b7"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "6e8ccde65840348512c6ce158eb9e0a4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fbf6d38db81f206cf7628b6177e58595"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "9f60ed045f549a098a97148d63180c59"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "fdb624e7929d52a97b260893364afb3a"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "f8e4c359af3ba57d89e9129368925eb4"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "e8edd8f66d5623b781aac37b9266fdc9"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "c030abfe5bd28c3d27e2bf2f0a8166b7"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "1cd97ebe12fc59564d5b90dd4e5cc1f0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "977ce326649a6a5615d705826edec855"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "f3a1b9dfb91e7caa42339097fadc6a13"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a92bf8767ba07ca29b71dcad60682efb"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d161a3f3a700904be634b57477391ee9"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "6008978d7ca6d5039302a0f11a515bc1"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "04d593313c9e31a0f007354357d24c6b"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "7f3559ec85a6dcc480996c23aacf5fb3"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "ca1efd5a6992260eb376142a512085e4"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "1ff1c06bb1d292c600c5fd5ff01cb744"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6df2e877e21f9a7479a1ce4e55e6f4fb"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "888c16ebe65c68587b62d516fb3e3b23"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "875449c7e127cd8120c27fd4ff5c2bc3"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "df3663a854b81592cef41a3b2ce66375"
  },
  {
    "url": "timeline/index.html",
    "revision": "48dc814a855db45dba4c8d69e09f6902"
  },
  {
    "url": "tools/code-review.html",
    "revision": "b4cc74848e466a2484b68090f7832a1c"
  },
  {
    "url": "tools/docsify.html",
    "revision": "09605209bad4af6f165ca47bb6b9af0f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "9d9e5f5f0a5d29fa5a6e50d9a46cd714"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "98f978c8cac0ca3b4b725441869973c6"
  },
  {
    "url": "tools/gemini-cli/custom-mcp-with-gemini-cli.html",
    "revision": "3ed12591b4f9f9dbc817da964d016446"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "ca42c31b2a8db9c0db1925f28ca9185b"
  },
  {
    "url": "tools/gemini-cli/mcp-with-gemini-cli.html",
    "revision": "eeaea7fbb2f544325c1b8fae4d510f23"
  },
  {
    "url": "tools/gemini-cli/pro.html",
    "revision": "47bc9c0cf6c67c284495ff3fbd63f8c3"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "5d25b19463e3eafc21f18d89a209c8af"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "563cfcc1b432426b07e86ade4e2a6ae1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0b7ea0633fe0bc524e420043f407d6af"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "19b94bab3b2900d58b24d6c20cefd0d3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "bc9ff5f09c97fa5e2b3b51a89c4dba1c"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "9e241acb18b2b48bcf6d2a7279328ead"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1ca0010356ea8f52f48770809505f1ce"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "ccf3559dbf65a1284fb5d07e3c7b0089"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "a7a91a9e728b3e485df10749edba2005"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "ed3c668dd2762cfd53e30eca86346799"
  },
  {
    "url": "tools/note/index.html",
    "revision": "01587fe016c62b3f1bfe65ef7eacb420"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "22f5b155a3380f5db5ca51ebb0a6f4c7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7c1adf806b278c662363d2044228d17b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "808083abeca2d4a3c63d29b274d897fc"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9dc89e720b92df544d63c80ff8255aed"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "2113002e8fb1bf5cbdb538fa9b51186a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "77a4b0c12427846bbb6492b0955feec8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8b80d591c855a7bc6c0a2b2a68bd93b6"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "e0cafd688a5ca2e766df790e865b4457"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9757311c07ec54c75a151bb9a7643f34"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "740734a473647fecdc4df865afb56675"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "c841fbc77f3e0f8ffb140488b3834ebf"
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
