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
    "revision": "4b9eba6ef29318b1fb44e1c13436beea"
  },
  {
    "url": "about/app/index.html",
    "revision": "01f6eb9550d88f1f3cc55286fc2c5ecb"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "54b9f67f52ae3f6a220cbf7451b43aa3"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "64db7f15d720c9dc702a7f9629a3dd28"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2b8c6a69b88ff9c14c5871378f9f950a"
  },
  {
    "url": "about/index/index.html",
    "revision": "8f7cf712521bab32a7cf471eb7ee3916"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "f3c044d7e64a85b907ce16158a657ecb"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "cf2efca9cd1d8f3f088e97fd0deb3970"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "7a05609b79634dbf25b50ee1e13b66f4"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "60c4b039d4d696c5f3916839965f8de9"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "a987845b1c95096b9f01a23caf6e8ed5"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "03e674fc15105ac6728a094489cbca31"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "d28c5bf81c75298640cc4dd79300bb0b"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "e1cbfedc6a161269eb939cd87a8c6dea"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "8a40db453a5a5c582553fb573e20626e"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "78bde66cd3befaf4d2eba006bec21302"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "680ac497a7d00fbe5e8c995abaa4d4eb"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "a1d1952885106a660f5ac74df18a557d"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "5152d170d74827ede0b1fa36f7c96c34"
  },
  {
    "url": "algorithms/index.html",
    "revision": "1be9392a00c61eb6ad926d199df77ab1"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "a0c8cb9a2ea49d1cac484f59bc9aa33e"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "256098c23900f7d555ffe9a27abb1118"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "ae30aac8222b1d184a95e371c137ce88"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "7c9cd87795effbe88855b556f84e9a07"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "f08f4f4b8cbe303f5a8f47923f7e3448"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "a879a2589d4620b2f911067cca13dbec"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "956b84999cea562126de86bd8eba11df"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "642e66676762cc2eb9fa385ad235ce00"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "de4df938a5f2d7d90be0bb5e1901f320"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "343e226f61cece47d9c08cf1bdeab271"
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
    "url": "assets/js/100.c8b60c4b.js",
    "revision": "9b3ab828d9acd6cd8fcb0d84173ea877"
  },
  {
    "url": "assets/js/101.56a95b7a.js",
    "revision": "9a570f2200db1f7b4d7cd84dc578eed5"
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
    "url": "assets/js/105.cd0fbb91.js",
    "revision": "75716e6604d9522daddc88dd015b1836"
  },
  {
    "url": "assets/js/106.9d37ceb3.js",
    "revision": "920d0b5a85f5c8e4ba11b81d18408ca5"
  },
  {
    "url": "assets/js/107.f9605e38.js",
    "revision": "02b8bc68707c11649bdcefbdee6b76c3"
  },
  {
    "url": "assets/js/108.9c742675.js",
    "revision": "c995888c85826f42dc4dcc4af27f28d4"
  },
  {
    "url": "assets/js/109.362f0568.js",
    "revision": "f5795fa7377b74d46deacfff644f0e34"
  },
  {
    "url": "assets/js/110.9d81f775.js",
    "revision": "60f413d69c7742d5ca8f32fd49b65997"
  },
  {
    "url": "assets/js/111.48cc3139.js",
    "revision": "eaf355b29d26b0122e6b6f51dd8a998f"
  },
  {
    "url": "assets/js/112.fcf0732c.js",
    "revision": "594a656231e5bc9bf94ab27dbb6b4c11"
  },
  {
    "url": "assets/js/113.ac3b46a2.js",
    "revision": "ecc60e267ca6f73d4a87f34d33c15eaa"
  },
  {
    "url": "assets/js/114.fba3f4ae.js",
    "revision": "df9f4c338ddcafda862d5650b7892456"
  },
  {
    "url": "assets/js/115.5d9a1915.js",
    "revision": "68c60ece2587a8b11606e2dea1344484"
  },
  {
    "url": "assets/js/116.a4c8bed0.js",
    "revision": "4b368dcc259663bd99b56255211142de"
  },
  {
    "url": "assets/js/117.1af4d7d7.js",
    "revision": "df99516ef97f61ff2cced58677e50a49"
  },
  {
    "url": "assets/js/118.14dad97e.js",
    "revision": "7fb4d9f3e088e3654ddbde9115f0c989"
  },
  {
    "url": "assets/js/119.9689c788.js",
    "revision": "fef3d4cc55d9e91d1d34afb7c2b378ef"
  },
  {
    "url": "assets/js/120.c515621c.js",
    "revision": "265a848cfc0ef16e06aeeae60c96c300"
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
    "url": "assets/js/123.28427839.js",
    "revision": "1d820b0e441ba2f34db7c2942f46fb56"
  },
  {
    "url": "assets/js/124.4676581e.js",
    "revision": "ae098627894e55a74944ac687feff1af"
  },
  {
    "url": "assets/js/125.9f2a2d9a.js",
    "revision": "05394ce11e067d577a96f6ace53d8cda"
  },
  {
    "url": "assets/js/126.9bdb0f07.js",
    "revision": "f827a3fb798272317d4dc08235b5e1c3"
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
    "url": "assets/js/129.712012d1.js",
    "revision": "6353eae37a9815bbbc4479945dc34298"
  },
  {
    "url": "assets/js/130.b2a09037.js",
    "revision": "c9e267d0781f9a8b4709f04f7e69f557"
  },
  {
    "url": "assets/js/131.63e185ab.js",
    "revision": "8fdab96750171e6ca33cb9aff748102b"
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
    "url": "assets/js/134.a2bd0679.js",
    "revision": "01576910ebbc0c7a160ad8b17833c2b9"
  },
  {
    "url": "assets/js/135.ec0b567d.js",
    "revision": "f7efeccace228b5b8fbff6fe4436d3d8"
  },
  {
    "url": "assets/js/136.0b1841e1.js",
    "revision": "b2362426d351ac5e913de56761ea045f"
  },
  {
    "url": "assets/js/137.7d118e05.js",
    "revision": "d753535eb5c656231dbef85c9499cf9d"
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
    "url": "assets/js/140.6224c140.js",
    "revision": "50eed4c8cb605d252ed54637ec0c23e2"
  },
  {
    "url": "assets/js/141.6329225e.js",
    "revision": "c947e46264a8b56069814ee29cc4218c"
  },
  {
    "url": "assets/js/142.4dc419c9.js",
    "revision": "8cd19d3fa51ba473d6562f8759548610"
  },
  {
    "url": "assets/js/143.7d4151d7.js",
    "revision": "2a0104b5cb3442ffe9273d7d40980c84"
  },
  {
    "url": "assets/js/144.ade3c80f.js",
    "revision": "6a20a081f521bb6b80975fcc3793b90a"
  },
  {
    "url": "assets/js/145.abaf6fd0.js",
    "revision": "bbd0b26b35e9752b5780d6fe33e76745"
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
    "url": "assets/js/148.ff947ea7.js",
    "revision": "4155c656c425982a03400ab67822d71b"
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
    "url": "assets/js/158.6c4a2ca5.js",
    "revision": "19d78a3857d25b3369f8f0e8f75ceed9"
  },
  {
    "url": "assets/js/159.2f526117.js",
    "revision": "1527deb0db0bfb6850719499bbb8f045"
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
    "url": "assets/js/164.59f9e609.js",
    "revision": "4442463724f5620d9849d1d580990c59"
  },
  {
    "url": "assets/js/165.b62f8d55.js",
    "revision": "237e789de70f4457750b552ac737625a"
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
    "url": "assets/js/169.0cb7758f.js",
    "revision": "967050b760a1fefaaed09df07682f6a7"
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
    "url": "assets/js/171.ed6a4a2d.js",
    "revision": "f8fde744019b79c02602ea015e76e833"
  },
  {
    "url": "assets/js/172.99c011b3.js",
    "revision": "71a51d46a174a95c9a8918a2c60410c4"
  },
  {
    "url": "assets/js/173.3b85e1d9.js",
    "revision": "046f4fa54a36f5698ba793b8c5d668a7"
  },
  {
    "url": "assets/js/174.dfee3bc6.js",
    "revision": "abce52618d9d2098ee9313214e201605"
  },
  {
    "url": "assets/js/175.e4298642.js",
    "revision": "20e37d70a888a45c8fd19203b7faee8f"
  },
  {
    "url": "assets/js/176.561d9216.js",
    "revision": "15409e065748433a2101b9c8f09fdd1c"
  },
  {
    "url": "assets/js/177.664fe50f.js",
    "revision": "ee51d1ac0a9199810616f09de6104be6"
  },
  {
    "url": "assets/js/178.142b9f3b.js",
    "revision": "738763dfd488fa51fa7ce0f52df4b92d"
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
    "url": "assets/js/181.de6e939f.js",
    "revision": "a604bc36c800729a7cff7cfb98284560"
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
    "url": "assets/js/185.57676c59.js",
    "revision": "42a6b4a7877d182b29420d3bd2c77321"
  },
  {
    "url": "assets/js/186.c337eb91.js",
    "revision": "4c6d65cf54115552d669cdc4884ea045"
  },
  {
    "url": "assets/js/187.18dbc594.js",
    "revision": "66fb28d53b63b2e9b02f6899466a0854"
  },
  {
    "url": "assets/js/188.e7f3487f.js",
    "revision": "b56e959b1a50228a1506d6533abf2b41"
  },
  {
    "url": "assets/js/189.87b55554.js",
    "revision": "652cbd0c3e53c6ad68ff0e9cf48b6295"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.0b5bc1a7.js",
    "revision": "a981f35103146d3dc06cdcc96738efbe"
  },
  {
    "url": "assets/js/191.33c68c82.js",
    "revision": "d9e53806f17b9d93e8265a3ae44d9f09"
  },
  {
    "url": "assets/js/192.29a40b3f.js",
    "revision": "8c88f9513b9d506b3acb47eb6f67682a"
  },
  {
    "url": "assets/js/193.7fc39720.js",
    "revision": "0bcb6a8522ad343ce60278e4c5c4e184"
  },
  {
    "url": "assets/js/194.d4227d5b.js",
    "revision": "09ae49e0171b2e267402342fd0656d50"
  },
  {
    "url": "assets/js/195.c65e8df4.js",
    "revision": "013467dc65e88feb37b63f85eb358c88"
  },
  {
    "url": "assets/js/196.20995c38.js",
    "revision": "55015ef17c7974f0e07fdafd3e1d8302"
  },
  {
    "url": "assets/js/197.91ef161a.js",
    "revision": "ea21ea21e45d2d836f9a4de918e6dfff"
  },
  {
    "url": "assets/js/198.003f6042.js",
    "revision": "b1fe4b82b9552ed6811759a8b6262651"
  },
  {
    "url": "assets/js/199.745f2964.js",
    "revision": "e81cddea22a8b9afad13edcae1a4a6c5"
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
    "url": "assets/js/200.bb2bdd96.js",
    "revision": "13b053f6ea9687544f86d48e043b80a2"
  },
  {
    "url": "assets/js/201.b1451aae.js",
    "revision": "15661aac409eb9f3f3d7d45e9c4c9e9a"
  },
  {
    "url": "assets/js/202.4a10ae80.js",
    "revision": "5141f86e15f8d012e61804209c6c79d4"
  },
  {
    "url": "assets/js/203.6c912581.js",
    "revision": "95331ec50510f9451a3e604102acde4b"
  },
  {
    "url": "assets/js/204.3b463604.js",
    "revision": "980b2b36c7dd6a348a688a55cecdc821"
  },
  {
    "url": "assets/js/205.5685fb84.js",
    "revision": "7be8955e97dc824c41057a3e8b74fee1"
  },
  {
    "url": "assets/js/206.edba53e2.js",
    "revision": "846c78611c7e70af47e460f26e653596"
  },
  {
    "url": "assets/js/207.d8042657.js",
    "revision": "7c0eb342de16d09e159f74649ec1759a"
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
    "url": "assets/js/210.bab0e333.js",
    "revision": "207a3091aee79ab38c166544684bd2f7"
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
    "url": "assets/js/215.b3f3ccbd.js",
    "revision": "25b8e7825ab4035edf99be2350d7b2e1"
  },
  {
    "url": "assets/js/216.effd24ce.js",
    "revision": "ceb20151d4388ad09c6da8cef16d3b28"
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
    "url": "assets/js/219.f4913348.js",
    "revision": "b78917576a352fbdfa8f86f7f9127272"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.3836374e.js",
    "revision": "89400004ceaf482373eb9e5c1fe35f50"
  },
  {
    "url": "assets/js/221.b0dcc423.js",
    "revision": "6f55b67bd35d4a25e887394c9da98e45"
  },
  {
    "url": "assets/js/222.a7bee218.js",
    "revision": "331f9eea20341c7180da532164eb3fbe"
  },
  {
    "url": "assets/js/223.9bb38754.js",
    "revision": "bb94d66af7296e62bf387a9e78111f5d"
  },
  {
    "url": "assets/js/224.bae9f2d6.js",
    "revision": "ba520ac55f4301be0a2f0b2e952e5cba"
  },
  {
    "url": "assets/js/225.ecb96b60.js",
    "revision": "8c6a7a48d369bd1da0ed7c9d1c7155a3"
  },
  {
    "url": "assets/js/226.5434eabe.js",
    "revision": "e1f0ce65917f9bb669f461c2d9c5737a"
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
    "url": "assets/js/229.e45f34d1.js",
    "revision": "4558ea29ca563a7424107687189502b4"
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
    "url": "assets/js/232.41bb1691.js",
    "revision": "5d89b73be4557e94a95481dac58b57f9"
  },
  {
    "url": "assets/js/233.54eb379d.js",
    "revision": "3dba39bba36c01732d8e91e781ba6161"
  },
  {
    "url": "assets/js/234.1ca1f596.js",
    "revision": "430ea4a0fe9758abab56cabb460e0f51"
  },
  {
    "url": "assets/js/235.56e02ff0.js",
    "revision": "4886b4ed383b19930347821808e1aada"
  },
  {
    "url": "assets/js/236.17af8e6a.js",
    "revision": "8ff6ed8e6390ba003de1a48d2f065d9e"
  },
  {
    "url": "assets/js/237.188c838d.js",
    "revision": "00680a414be84cdc06f027ffb80f8529"
  },
  {
    "url": "assets/js/238.aa62801f.js",
    "revision": "f661e2893a5bfc96d4af8e61f5de17c6"
  },
  {
    "url": "assets/js/239.aed5517b.js",
    "revision": "fa098dff4b46d0461501656490e9259f"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.3c550ef4.js",
    "revision": "3cc15f4456173c360ceba79d7d29e538"
  },
  {
    "url": "assets/js/241.b8048ac0.js",
    "revision": "749c75c96dbd19bab4c6c6e3f931c5b8"
  },
  {
    "url": "assets/js/242.7c8dbfe2.js",
    "revision": "fa5a448d6032adb48c1c6a5231e7ed25"
  },
  {
    "url": "assets/js/243.f87c36d7.js",
    "revision": "527e33c616074dd14d0b183a14e969b6"
  },
  {
    "url": "assets/js/244.a779134f.js",
    "revision": "f4bf6bfa1190006e357b62ebd766915d"
  },
  {
    "url": "assets/js/245.de766b1f.js",
    "revision": "06bd82df68c1b54180a857f080a58861"
  },
  {
    "url": "assets/js/246.f8e9138a.js",
    "revision": "395165ebe550bd3a91ee844f86def57e"
  },
  {
    "url": "assets/js/247.608ebff0.js",
    "revision": "d010a3cf98a7e59165d74c2cd4951d91"
  },
  {
    "url": "assets/js/248.0f744052.js",
    "revision": "51a161f87b505c166d9cdf895a4860b0"
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
    "url": "assets/js/252.2fce46cb.js",
    "revision": "51ca1c28435c2b23cac16c920153ee52"
  },
  {
    "url": "assets/js/253.209a9e52.js",
    "revision": "3c0ee101f1a110fe9f6974e3632c16bf"
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
    "url": "assets/js/257.975e46e9.js",
    "revision": "02778dbc390d4075b61ae5fa855165ec"
  },
  {
    "url": "assets/js/258.9f00d7d5.js",
    "revision": "df4830b59ef1caf543cc6a9bdd7592d3"
  },
  {
    "url": "assets/js/259.473b2600.js",
    "revision": "345a394548c2fda5f070b3d28b24e1f3"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.f5e910c0.js",
    "revision": "025186a3cc1371ffa4544fc46cfde217"
  },
  {
    "url": "assets/js/261.3b58f0eb.js",
    "revision": "bca7a8f6786ba4b5d57f587a542cfcc8"
  },
  {
    "url": "assets/js/262.9fbf64a1.js",
    "revision": "a1dc41985a22e415b88245720fd333cd"
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
    "url": "assets/js/266.dac3b6ef.js",
    "revision": "2ed1951f5315daf74ebd2d4e1cd0e6ba"
  },
  {
    "url": "assets/js/267.086c3fc5.js",
    "revision": "afaafd48729a54043fb75c5036b38e3d"
  },
  {
    "url": "assets/js/268.c2e7045b.js",
    "revision": "63df85efaa19ccc74b37d17fc360fc8c"
  },
  {
    "url": "assets/js/269.62961c5d.js",
    "revision": "d34c36bd18c6e27cd6b4fad90ded032d"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.17b50989.js",
    "revision": "8dcb702b3c0be630d57c38d19cbe651f"
  },
  {
    "url": "assets/js/271.ec67509e.js",
    "revision": "c74f56b30b7df0860d87485b6f02a07d"
  },
  {
    "url": "assets/js/272.cef12dd7.js",
    "revision": "dd89a7e96e6e7bc72ece5331f94000bf"
  },
  {
    "url": "assets/js/273.dbaa7c95.js",
    "revision": "17f6f61289a6314ad0f6f1059d4589c1"
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
    "url": "assets/js/276.bf4bbb4a.js",
    "revision": "ea2e269acff4c5a0f4c2cc228c6ae131"
  },
  {
    "url": "assets/js/277.aa3a0184.js",
    "revision": "c16f90923aa9b1e7103e4e01e522bd53"
  },
  {
    "url": "assets/js/278.28121721.js",
    "revision": "7f2cd3222f1b6405b30fba47808e1221"
  },
  {
    "url": "assets/js/279.01261d82.js",
    "revision": "fa205af7997505bcfff67cc77782e9a5"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.70ad394e.js",
    "revision": "ec88643e74c0292ddf4cf78a06920a1c"
  },
  {
    "url": "assets/js/281.cb143936.js",
    "revision": "ec7d6351724e5e8e95d8e97021f57f14"
  },
  {
    "url": "assets/js/282.8a525e24.js",
    "revision": "385bf6403ac3654ca55cd6a4df7949c2"
  },
  {
    "url": "assets/js/283.579e0bc6.js",
    "revision": "53a266c069120e98113289e4af35ec8c"
  },
  {
    "url": "assets/js/284.a8628e3a.js",
    "revision": "0449210041d974a9536dfcdc9ee446e0"
  },
  {
    "url": "assets/js/285.0f9e1791.js",
    "revision": "dfb4f1bde11eea32f2b0c95bc0818517"
  },
  {
    "url": "assets/js/286.eefcb97c.js",
    "revision": "3e881baf60de0e08e6eab8b6730164ff"
  },
  {
    "url": "assets/js/287.d4aaa13b.js",
    "revision": "0008805eecfc0fa0ba164e9dfaabfa88"
  },
  {
    "url": "assets/js/288.9562a1d4.js",
    "revision": "8c98403f6f4644efc5c4a4b3d2205ea9"
  },
  {
    "url": "assets/js/289.041447fd.js",
    "revision": "51462135ae9664f92072b7df8818175b"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.6f4d2407.js",
    "revision": "0274527b9a0e4009d05ccefb63606e8f"
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
    "url": "assets/js/293.9f215840.js",
    "revision": "d5ded8fe242063b9ecc8d13e9030b81d"
  },
  {
    "url": "assets/js/294.4645f43d.js",
    "revision": "db3290854383454d197ec16bcb84581b"
  },
  {
    "url": "assets/js/295.f1669ba6.js",
    "revision": "0a3c3f4f46452de006606552201c4fb9"
  },
  {
    "url": "assets/js/296.d1e0d954.js",
    "revision": "117edc0e7bba8079332035a256f1118d"
  },
  {
    "url": "assets/js/297.888ddc81.js",
    "revision": "b0e09dcfa9790b6d1f73015a92408dd2"
  },
  {
    "url": "assets/js/298.43376976.js",
    "revision": "ee586ca24cc5800ad1de2ac5eceb8a44"
  },
  {
    "url": "assets/js/299.65dca06b.js",
    "revision": "2073a9517ae85b5fecb745ba7be516a6"
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
    "url": "assets/js/300.26d725c3.js",
    "revision": "be8396a7c0d7baca10241db67f680b5f"
  },
  {
    "url": "assets/js/301.608ff44b.js",
    "revision": "2fa480cab65ccc05b354a5104dc5cbc5"
  },
  {
    "url": "assets/js/302.5c6656c7.js",
    "revision": "428dba9e44474c02dcd982712e91e867"
  },
  {
    "url": "assets/js/303.94cf82f1.js",
    "revision": "2151d4fcfa5a08b9137c24b410c9f037"
  },
  {
    "url": "assets/js/304.c8c0fdb4.js",
    "revision": "576a835ab2d00307648da7d8cb1e549d"
  },
  {
    "url": "assets/js/305.c7e25900.js",
    "revision": "bf6473fb3ecf3bbe60285603b19a70b2"
  },
  {
    "url": "assets/js/306.1d49b999.js",
    "revision": "c64e8257de9b853360849e42dd9f9dd4"
  },
  {
    "url": "assets/js/307.3e807eb2.js",
    "revision": "ba5466024a5ca39d5e52bad42ea0d820"
  },
  {
    "url": "assets/js/308.78d450c3.js",
    "revision": "71b0ff9261450c894f456e4cb818a0a3"
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
    "url": "assets/js/310.a5f3f62f.js",
    "revision": "971b6e3baf0047ce463b9a0b259ff64b"
  },
  {
    "url": "assets/js/311.884aef7a.js",
    "revision": "4c5d7bfdaaee451b725d4a20486c9190"
  },
  {
    "url": "assets/js/312.cf84da18.js",
    "revision": "3ec8bd38297bdd3dab0c50f5b6ee6be0"
  },
  {
    "url": "assets/js/313.2cd140ff.js",
    "revision": "47a04a02c06ce2d38d41acd351d40693"
  },
  {
    "url": "assets/js/314.da825b27.js",
    "revision": "9706b25adaebb90d23a1d8db9351316b"
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
    "url": "assets/js/325.20c7ab03.js",
    "revision": "f36f3f798739d789533e3d91be19df64"
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
    "url": "assets/js/328.9727c6a7.js",
    "revision": "dc77238c4f0404237916420b9c83e6da"
  },
  {
    "url": "assets/js/329.df8a2c70.js",
    "revision": "ff8243a0f968d4d44abba05e49d5afa0"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.5c0b86cb.js",
    "revision": "fab2070c3c475af1f9f4119237f3582a"
  },
  {
    "url": "assets/js/331.b9ea462c.js",
    "revision": "387c86bb7eb9135f7d5b386503a144d1"
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
    "url": "assets/js/339.50500545.js",
    "revision": "8843f548917cbcbef55510130181f57c"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.3d30d707.js",
    "revision": "95f39f4797b466ad146b2a25fd10b2e0"
  },
  {
    "url": "assets/js/341.d7425b1c.js",
    "revision": "f7dd8d52e10920a492d414cceb8b4225"
  },
  {
    "url": "assets/js/342.47b3ac65.js",
    "revision": "5a180d70f87cb8230c42a8f7c09d9e22"
  },
  {
    "url": "assets/js/343.1bb04dfa.js",
    "revision": "55defc27d7aed96fe7450f5a7f2e5db6"
  },
  {
    "url": "assets/js/344.3e26cad8.js",
    "revision": "cbc1a5e4535191285d7aa6f6b3f571be"
  },
  {
    "url": "assets/js/345.5e28d551.js",
    "revision": "b4fe91eda78eaf6252150283be5769bc"
  },
  {
    "url": "assets/js/346.b6dfe192.js",
    "revision": "001d6f96d57bcbe3b01c5293543b917c"
  },
  {
    "url": "assets/js/347.96145a5e.js",
    "revision": "4216fd4e30dc63e5c6fa6928cf6c1ef7"
  },
  {
    "url": "assets/js/348.8df3a5cd.js",
    "revision": "852176796e7b57e398e64e1e317445a7"
  },
  {
    "url": "assets/js/349.42f9e704.js",
    "revision": "b5a3a4e432976f4730033478ad67e9ee"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.6499ace6.js",
    "revision": "c550506a615baf8ff5c7c9015427a55a"
  },
  {
    "url": "assets/js/351.b7888cd8.js",
    "revision": "48bc6e7c34309430d59196b5fc78a66a"
  },
  {
    "url": "assets/js/352.d55ca6f5.js",
    "revision": "82c44429c53b6925a74232d71c45c4b6"
  },
  {
    "url": "assets/js/353.47ca65c1.js",
    "revision": "3ea6a50e88dece38976eb0a167a43c9d"
  },
  {
    "url": "assets/js/354.2b601075.js",
    "revision": "b15d4593ece7c915b01f26839362beb5"
  },
  {
    "url": "assets/js/355.7cd3ff20.js",
    "revision": "2f3e1576ae88447e266fb77b99b6ef2b"
  },
  {
    "url": "assets/js/356.caa5c15f.js",
    "revision": "41e741bada62fc25710977ce4492300b"
  },
  {
    "url": "assets/js/357.b9ab8802.js",
    "revision": "a6470b3ff10f065408ae082e1ed1f7c0"
  },
  {
    "url": "assets/js/358.edde4ca4.js",
    "revision": "faa639ee11b00bd85d47560451ad5bc9"
  },
  {
    "url": "assets/js/359.7fd7aafe.js",
    "revision": "e0d16b451321bdb543cb7013a71745f5"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.ad146eef.js",
    "revision": "e400ca6959160f4c08bb5004f5c26686"
  },
  {
    "url": "assets/js/361.11d7378e.js",
    "revision": "e33a1e6b0b470d5d1a3d3bdfc3cd5b32"
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
    "url": "assets/js/39.d98ef824.js",
    "revision": "be9d5ed0ed7f08cfa8c58aefa206c05a"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.4600d658.js",
    "revision": "13f17db84c21c7b02109a6d1a10e9bfb"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.678226ef.js",
    "revision": "f7cd244a0ffae99e6b679a9cc403b0b3"
  },
  {
    "url": "assets/js/44.a0e3b1eb.js",
    "revision": "832ca9d0fa53e0f8e650de4c2d810542"
  },
  {
    "url": "assets/js/45.8d5d8024.js",
    "revision": "76ee68808787b6b0aa79d3f727839859"
  },
  {
    "url": "assets/js/46.dda0e55f.js",
    "revision": "42233b847e88b2112a6dd523e8a80ec7"
  },
  {
    "url": "assets/js/47.9ebc3de8.js",
    "revision": "1be38880c440de6849a5c4c7f66ce9a1"
  },
  {
    "url": "assets/js/48.f7208043.js",
    "revision": "e009134369b654dd78eb5a115538b6b8"
  },
  {
    "url": "assets/js/49.82c29cf8.js",
    "revision": "b8ca994febc45d805a2c62760ae83d6e"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.b24afbe2.js",
    "revision": "ae82258ea5cb2f03b6ac6d7c8e662b94"
  },
  {
    "url": "assets/js/51.deb07961.js",
    "revision": "73a9af4104c5d9e37143ca0dec31e591"
  },
  {
    "url": "assets/js/52.5a0d878e.js",
    "revision": "3cf16ef257f079a4b2ffed25fd407d2c"
  },
  {
    "url": "assets/js/53.430d8d9e.js",
    "revision": "3c2f09cdbd5a6ecb3947160bf40d415b"
  },
  {
    "url": "assets/js/54.5bb6adad.js",
    "revision": "fafb1288037925154a18344e2366a840"
  },
  {
    "url": "assets/js/55.9b065e75.js",
    "revision": "0a3ad6c69a1db8c9c18bc530f04ec795"
  },
  {
    "url": "assets/js/56.c827630c.js",
    "revision": "8a4cd33334a593ac116c68d9c08ebb04"
  },
  {
    "url": "assets/js/57.efdf7e04.js",
    "revision": "60eac33da79780ecf08dccde05c35232"
  },
  {
    "url": "assets/js/58.c0092258.js",
    "revision": "7a39b6321f1a21a199fc5c6c95ce26bd"
  },
  {
    "url": "assets/js/59.28919616.js",
    "revision": "5055b5ff47570769dd0896c236e8bbfe"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.40b56007.js",
    "revision": "2ebaeefe257e62b920bd3959d64df9ab"
  },
  {
    "url": "assets/js/61.aa8f7ded.js",
    "revision": "b6acdc6b7ff6ca9d4beb9c7e2a4bcf0b"
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
    "url": "assets/js/64.e13ecdd6.js",
    "revision": "fc288ccf1dc0d5a3868b8fe4be208b9b"
  },
  {
    "url": "assets/js/65.a3ef93b6.js",
    "revision": "56c943431acc4d86c273950939f6001a"
  },
  {
    "url": "assets/js/66.3128bf9b.js",
    "revision": "a666bb189b789a7361cccd71edd527fd"
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
    "url": "assets/js/69.96cc6e0c.js",
    "revision": "073ebf1dbca95a3ab1e6fedc911727f2"
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
    "url": "assets/js/73.51560d34.js",
    "revision": "a95d03cb8ccec92b3be6dd7004293a22"
  },
  {
    "url": "assets/js/74.69e91ba5.js",
    "revision": "fed2c6d681d8a0f1253e4376a695a102"
  },
  {
    "url": "assets/js/75.c954bc20.js",
    "revision": "ecc96141c33d117cda59f63cfbec418f"
  },
  {
    "url": "assets/js/76.c5373dbb.js",
    "revision": "856e49fb3123c3f8d0a64e7675669f65"
  },
  {
    "url": "assets/js/77.db2d347c.js",
    "revision": "125a7ee1dd0f1d1b24954c9484cd13a1"
  },
  {
    "url": "assets/js/78.a69d6809.js",
    "revision": "e94186570f4c762e4adf3f6a9c0535d3"
  },
  {
    "url": "assets/js/79.7f62bcd1.js",
    "revision": "3993135a06389ef2c13f0d335334786a"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.0e04674f.js",
    "revision": "165f4009e967d9f66b0076653a6a0a34"
  },
  {
    "url": "assets/js/81.f89ecd42.js",
    "revision": "42b13bccc281daf93e44ac6dfc369647"
  },
  {
    "url": "assets/js/82.1cfd8622.js",
    "revision": "fc00f16b340f657257b96893c037a474"
  },
  {
    "url": "assets/js/83.0475b983.js",
    "revision": "8c0376264164f901b27639a133a28b31"
  },
  {
    "url": "assets/js/84.dae757ad.js",
    "revision": "60597a8332e9345b78f59c9074273df5"
  },
  {
    "url": "assets/js/85.7394678e.js",
    "revision": "5196ca647c382b36b198f29cae9cec8a"
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
    "url": "assets/js/88.d55d3a34.js",
    "revision": "2b3b4080aab2ad8643d9d8ee1c081ab4"
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
    "url": "assets/js/90.a1c668c9.js",
    "revision": "aed8ca17c92ef7fb949afef9c996212a"
  },
  {
    "url": "assets/js/91.4b450468.js",
    "revision": "fb82e5887898ac19b02c90212a8b9fa2"
  },
  {
    "url": "assets/js/92.a8dd7a08.js",
    "revision": "121af021e3908e49cd6138d94d5ac4bf"
  },
  {
    "url": "assets/js/93.20ad7085.js",
    "revision": "fc3dc403d4ec79a1d24fb381a59cc62b"
  },
  {
    "url": "assets/js/94.55fea943.js",
    "revision": "e405abc123aef509238fe7dc19c51680"
  },
  {
    "url": "assets/js/95.af27d0b9.js",
    "revision": "7ffc2f9d278121acce6b943d650d9728"
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
    "url": "assets/js/99.7642f7cf.js",
    "revision": "e5c2055f4dba09557687bd681b724dee"
  },
  {
    "url": "assets/js/app.686f3d70.js",
    "revision": "269649dde4611c0fc75778fc888df107"
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
    "revision": "b888643f367768360caf2d29fc56d932"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a641d67d039581a2809cc6c6bee7aad1"
  },
  {
    "url": "books.html",
    "revision": "630bdcbb0f8a22119480360c3996a68e"
  },
  {
    "url": "categories/index.html",
    "revision": "c31f001919da3bdc332036d24f1a77bc"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "1c52f1ba6c5980abd29c5bc48ad9e57c"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "517b1cce604f5c686edab6669a0d607b"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "7f4b47c7681d5010c6f21a691dbc2949"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "5f8b046ef30277d860b1d707d435fffb"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "c1ddbdd1a05bfd155a5ba46864416e28"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "d6076f5db3dd7765b4045dd60e234bbc"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "3150f0cc88f6bb71ef49a3f9b859f031"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "fa0b937efac728a64989a4ef6f87b57f"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "0259b8ef299269dd3af75cd6565a3b26"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "00a69a2894b5169e7db4adc6c91f09c7"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "9b0d3c5e2fde23c00f4cb316083b5beb"
  },
  {
    "url": "deepseek/index.html",
    "revision": "ecd04fc7331012489737b4802e8a4d1d"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "fab817a2e595ddd4ad788012fbb0a105"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "ae0ffa28c6d25ba6177c62f6399ba291"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "d766de15da41851e94f3ab70f351f02d"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "37d900d723b0d8ee2ae5d4a47a1a07cd"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "29094f4f5f492ce169d9563ace4196f9"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "8c6b0b1fd8861774e4facdbe1aa78253"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "87c90bcf04902d2276b63ad4c5aa72c8"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "de3cf827a4f362e2df46884a9b2673b8"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "6df6e33cbeffce5407bd16c80aa0c62e"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4e85070ebe25a16897fbd496e79a30b7"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "af0832232e45b913bd82d4b44a482ef6"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "3d6991c12ebe200d45d7d294a4a3eaa9"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "8f5a60b8eb11b4eb251f407dbe877b6c"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "fef673c58ab59a32cede9ff28cf31200"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "2cadc03b7370c7b74875b86d018282cc"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "56e5e70bec3eddd69cdc7ccf86f59f6b"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "2333ec4c827885dfc020de92a3e9b156"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "1d94ddccf5d10169ebf45936917abcca"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "3b9ff53d61a86a3ef21d1a01719a661c"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "526046980ac545780f1e2bc2ef7b4d7d"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "ff27f18367620cc09939ea2823b86216"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "6dad58baa61da2da58fca2ed26e13ffb"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "acfa0e7b92189d2f60b1b73b465c870c"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "2f9c6d9fe4c672ca593dcba0091b15df"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "08e52173b82f02f762f2b031b5ce5a42"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "081e5ed4116f11c036c00595ef299c52"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "9fa914532383d8ea0cb9de553304e1d1"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "aa6f046612ec05a1592effa476b37e53"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "a51a9eb41fdf8d3f8e74c3ec7e1b2fe5"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "795ebe38a5322bfb74e6dfb45e0a3033"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "06a7a76f4234a5f7c1ce5c0a65323fe6"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "4054aa27f2f2f6f768ecd904d2462c5c"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "904aaeb594f688809e700e0714066a13"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "1ad8f9406b993df8f0bbd73c5efa01a9"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "471801ddd458ad716148dae6de60a359"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "7235ad1e493ae66034b7bf6b9c1962d4"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "cdc648a14e1dca63bf5a6c6bdbf56165"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "bf85aa07d7dbffdb5828437e3cee4dfc"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "58654d6e96345b0a15e5b6ed337f4ab8"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "8f3baf98e3dd903cf3687f315ebacc70"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "9964c677f3cc2bc199ab5be2418f30e7"
  },
  {
    "url": "figma/index.html",
    "revision": "240e16a09dc474a3c6f202fcf4787e77"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "412274d71f5e3eb9391525bd453810e6"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "ee2932f466bab7b344df39eb408e0961"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "d06746df38e73eb0c2a9c1d6d2ca5c0c"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "74e234c0ccf703fd35ad2b10e4694596"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "e9b049e88233008a8f6f9e7674ab5daf"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "03a411f3ab1c201c1c383c0ae9ccbf0f"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "f2a7a776af14533d1287674f263dc3d3"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "84d21d119c89abc365b4e84a37f22578"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "d86d1cb91643972789b8fdc9ffd125da"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "1c435adf17c7a5f40090d5a03055ff04"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "33beae84e35c1f6c8ab9d11fd1e7f3f9"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "bc152ddfcad85df88d3fae1db1084e1f"
  },
  {
    "url": "flutter/index.html",
    "revision": "0dc538d9c8fc28270b0a4484353876c1"
  },
  {
    "url": "flutter/point.html",
    "revision": "2242a02faf73f8b11971674d82f425ee"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "497d5b157173156943d3f64ad99869c4"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "64af30ed68486f4ff413b01947343baf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "73f194a2f69913e1e802de421adfc352"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "65e358542b7b1a790924ec04c72c16cf"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d4e97ce11c86ed1f46c654f1fa0add9b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7bd2709fde459db1889eba5a4db454f2"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ba0628f9d355ec953fe52012343816fb"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ea5de9538e3d39d138799959c41b455f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "35b5865f5262e2090986c5c59564da96"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1bcf8d51b5bb36431f88d58058564b0b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9b3aa96d0067b00a426ad9e819fec179"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e97689bba279f865451b5c6924e15175"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b7e4a63fac04201f0cfdc346002e701d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "771e0358cf6718cbabe3cb0186b90314"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "933d848a9585a1e7243de238a46c4a62"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "8830f05b561a9d596f6db7fcb5beaefa"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8e542441982540dcc53027466d48a4b2"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3a1d8b4ad72e1538623ad7bbdca9296b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e26f74bec953a156f480261968c033ff"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "749c5977199061bfcded2597e0283e6d"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "16d1f22889b2e402bb3077549119360f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "73290bf3a06d907dd2fa53e1767943e8"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "846af4811be5cddfdef3bbbb375eaa00"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "26b60895f6ddc31ba559df122a3df3e4"
  },
  {
    "url": "haskell/index.html",
    "revision": "e18a76921aac5dde66e1322824fd0b9b"
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
    "revision": "d337c0310182d1edfd1a5f1c88a6f03c"
  },
  {
    "url": "java/index.html",
    "revision": "9b75c24c9a6aa051b1a35de3fd2a0c04"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "cc34d15efe777aff9d28fc18ba3a58cc"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "3e5b6cf310aebba14a05524e459000fb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "060e18579da717b70f0f1fff6fa8abb4"
  },
  {
    "url": "ops/index.html",
    "revision": "3edd29b48d4fd6357520a8db1d81afa1"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "2a685dcd87f024ef7b9ebf11b07df8bc"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "adf005f432592dc278ab3644c8305ae8"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fd4f20375612faa94920a2ed44db1460"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ddf1588d59c2492f56d3025795d539f1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "48d3fc05f3c503a2b7518bcbda434ce0"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "9d2d2268e24c2d8b37549dd0d9731298"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "92f4c4f003cca065009540647e1b4e87"
  },
  {
    "url": "python/index.html",
    "revision": "0a327861380a89dd268faec4f6234f30"
  },
  {
    "url": "python/poetry.html",
    "revision": "0384c7488815be852f2b6e159991e61b"
  },
  {
    "url": "python/pyenv.html",
    "revision": "56ff6a01ed952addbd47ae76278cfd02"
  },
  {
    "url": "python/python-ase.html",
    "revision": "e9461b0e98938177924f4fb108c29851"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "2ff94b95138c11bb818f234a3d2420d5"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "274ea4658d73e4689c6ca1924b2296cb"
  },
  {
    "url": "python/python-file.html",
    "revision": "8a1fa72eb52c76985273f2bf9ea26b93"
  },
  {
    "url": "python/python-function.html",
    "revision": "148312eb477c5e1cb89236ff80442e93"
  },
  {
    "url": "python/python-generator.html",
    "revision": "10c3dc1fd83f5b578c53db3227ed3654"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "f70a3492811620496dace6c42db7fc34"
  },
  {
    "url": "python/python-module.html",
    "revision": "91542868577c5d16145157f93d1cd51c"
  },
  {
    "url": "python/python-string.html",
    "revision": "4c5e156d8d27be8ea245d719235c16b0"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "0851ecbec50f34182f754c136b3e876e"
  },
  {
    "url": "read/index.html",
    "revision": "f7f426585548067f23d71139dc8c4e90"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "eddcebea4c98e73bf140d7f7a6db06ff"
  },
  {
    "url": "swift/better/available.html",
    "revision": "edf73cfc1d4581dae4a35294ca569bd0"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "d8c102564cb2953636f470d27256702a"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "9134f39b9e051c228184e150892b0d83"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "e9d91586f32f8f560d46b3dc0bb8bf1d"
  },
  {
    "url": "swift/better/di.html",
    "revision": "132d82fed1085eec6306a4b9ce1c1701"
  },
  {
    "url": "swift/better/index.html",
    "revision": "aa507b724abaf764fc39f5adfe3a14d7"
  },
  {
    "url": "swift/better/last.html",
    "revision": "34b12e10132301a43448efe6d5fe69e1"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "7b6b7642c51baa2ba75d8a737dd887a9"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b340c925f9867ab63ce2da80b6eb3c47"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "ec18f5f186905de51c0446a04674d42b"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "3de13f2e4ece104472d128d57f3ee56d"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "37155b2aacb44a414b7000f972a15d5c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "137ad1f974967fe33ec587a6e565d72d"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "203309d4608eeaa7afa2b9c9260b51c7"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "681ae5e9947df4fda2705f47dcaee031"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5b37c0d4c95fb275b01d42ecaf063872"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "0ca4e384a0357c0c4b8a3c41a64738c9"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3c17258430aafa93496b4c3625813ee2"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ad311e63222d6b22c36cb57dcbeef249"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "e2cbb1288f4a28caaee82bc9878981ac"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "56abeba640937ccb45b6d8e611fc43ac"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7f1423a1e6d9f62d46cdd7d42a7d9ca2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "6f6467958aef026ca7e23966cfc43957"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "65a43c52f1c74fd2b876bdba544ab6f0"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "a9c9c2dce55367cce03722d487c89ccb"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "2f44f9f7778a49d4daeb9aa2aceca4d1"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "00d75b9f7848b246dde734a9b5b89b85"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "92adf05a7b2b329677e88183a913b36a"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "f30f5eb4635d9a65c2ab2c16199ad364"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "96658f45de7980c8c8b2db94a5982f10"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "a388a3a70044edf20ea9912bab94184a"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "66c809ccc222008e56a445888015c2ed"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "61349d12cd96bf4e3f07033b98a8131b"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "ec52972e58df05ea33946fecb481a4d0"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "e80609754cab953da8e6817e6023eda5"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "92780310a3c9c951fe38fac9ba6f5350"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "c6bcb82a921fb1f30edecb3a0e09b016"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "70defe17a876b3ed515cac22be5e558e"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "109a32f9a5e61ae16a0e0a3b782b644c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "29b019aceb4ac23750c46477df4efbed"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "6775b51579785802f5e82fee33d42b2a"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "ecdad1eb29c479ea70470f66ebb67482"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c8dd9a563f70dc943ecb0335a7e2f0d7"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "2e5f7a721fdedfb2dd2c1d4d22ddde5f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "bf08660c9418281dd2dd47cf99b83c06"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6fab6a889ab8405b86dcc8a856a79e6a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "88da879f3c5dddc979771d8ba1084308"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "1b0b20be91a4cb41978bacdd434af42f"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f72b35390ce76d24254a6ff63a86b560"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "ec8a42619199fd69d501f29c417f1f5c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "830b63320398797041662c7bcaf6850b"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "1ae12d866395b7dd6b9cf163f58acd7c"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "31f42a66f9afa803eba6fbb25cb1002c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "70aa4f17298c645ad30bf1ab4b3a5169"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "6e47727d3e590977cc6a5871c373e03a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "370d786a2037a0f2125291f02b11c84d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "2e9c2fc64c89e7bc4e2885eaf67f1d98"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "718e5bcada8fe21f6c15e757860670bf"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "614370facf04e0f1d365f325d375a763"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "68a2ab1c8a7da678c9c2497ae98f875b"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "72f37d0420d155df2568e5e28e1400fa"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "086dcbc3711e5e5fa011198b8172b9eb"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b0c54236eb5004a1064a83ea88c3cf3f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "4f1f1c680ecc765727f9addf289a53ec"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "52a055af02730a63bd49fe556c524918"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "8fc80234b0c7e6b968880047163f335e"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "862505e4b1d26a8f8f69527457a5829e"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "d97198349808d0040e720c09ad03343d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ef60c5b2764a5e9592876a21cb678193"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "8e1c434b8c8c8063b1567ceaafb2af4f"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "9df0dbbed167d73ad3de5440af471c56"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a39103c44584cb7d37a163167a6fd78a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c4e66f899040233b9e1a05e7b010ac6d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "782d1bc2d7e49ee2643b42548249bbf6"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "027795a38a08d0ca4794c1466bdd2712"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "abce31e4ce9ea8ce3dfdf544b18d171b"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "7545a2cf2421c531dff29eb99ebca65b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "89f0bfd7f65cd52569b34b67605a977e"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "f45a02a49c068a8c8241b22bbb3f97c1"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "ae0fd5feb1de7ededbfcf640d8f5f14c"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ee4cbd371abf066a515c68be6e4fe423"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "be8d0caa04e65216d41d0eaf467635d8"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "97b51b558afdaaaeb12ef4d94bdf2146"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3487a4442095e52b5d1605c96cab4690"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a95a76cf48a81e514d8e8acf28da0c85"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1a0831507abc5ff2e326ef426f5597b8"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c25f5dc172bf44bff2d2e8dc63b4131b"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "7478405b2a6813158e5ed1c8f4c63bed"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0e8fb8d2b5a9ecd116818e46bc225b6a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "146fc233d84265939560aa34de26b060"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0f3d01eaea7c835781b363e9ce366eb7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "85cd042678fae4bdf721a78169fa7d74"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a332b93315fbf0f25f1ddb65747e5050"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "cb9e12c5daaf06705b4d13a242860103"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "05cfc8f21c34bd86e813d8f2a046a9f7"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "8ec665fe08dd382a3007ab9ed7d3d718"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "44ffd396f2b9132f1b2600bfda0f409c"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "c4885a5fa34dc6c995c8ed63cb4ab7ab"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "9df51096fff7dcd452a5614df74a42ed"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c37eaf291055b9a90b3da2144e0f1747"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "d8a00c4796af972e754a205f681c3955"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "ac0d36c7bdd4b66db59ae0eefbf1ade6"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c8237ff2dfdc115bd7d6d41ffe6a350e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7878dd7690cab55884082915e5d2275a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "a3de4a4dfc0dd7576cd273471f5a9ec0"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "ca63423bcf6a596ee7dd9144076ec002"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "77e348d12ae47c91306364fc7dc20ccc"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "bc3e769b0332d3e2f52937c4626480e3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3b9121b037cc8ed097006b0e450b5b6e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "cc379ddea21f6d353a5ca64aa3ec1bc1"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "6a09f04ec2fef354604651a60a29f8f9"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "fb37a37e677839ffef9be63f37b9358d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d0b186e6dac078706a4c3dfd8d1b184c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "2fe24550f52d12dc947d9dbbad5b352d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "8f338709c39be96c03958ba8c73511a3"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "ec1d215fc805daa93ea1aa17558e9f00"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "07488ff06f835802f5540313be60ba14"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f5f61f2d6fb6b65d2198f58a6dc8ac4b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "adc630f7624759f4b9650c2d8660e5e2"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "24974d694077d608293f10ee3fb22736"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "9910ed89976115a990134e9efa365300"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "184b65373ae03058c50f1e6845f4f7a1"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "e82704410b0bbba56d21837312901754"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "8debb10246d5de2e77b56715bc110964"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "a659b1fb7647f66914238ccc63552b5f"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "eddc88bf7fa89b2891e537bfd056c378"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "4168055718f1ad7b52ad7073190e3e32"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "18ea187579922f97537a0c3aff45900f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0aa47c385853b76519db749a54a5004f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "13df74cccb908c1c9a0e85e3a452a748"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a0c89a1ea5b0258f3872b4e6846ae9e9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4da48bad78ce5f7f4ad4b3f0d290a17d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ecda46553d4fff59e48ba95739a0da9c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "2ee118973d833697aee45ca0d5c4c290"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9b3eb512a685b05f432fac1aa11334c0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "52b22580bf9468d4dd6d0fe6340fa950"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "7f0f6189a8a8f903de0b6b5242405240"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "89f864aea4abba32292d73e17638a738"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "43ef805d43a6bc63ffe41b6c0c73870f"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a2ee55d875054a0b1d42a15426d8a6f4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f2e2cbebc14a890251ba1f31c6d907cf"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f709e9ce991c6351c87a53f55b5fedf4"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "6393fee3114d26b3b626f2e7b7f19a8a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "460aac91a5a64866db5e7339b1ecc55a"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "0e853da7367b97d59e40b812a1906bb2"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "e1816322303e8adbf8c2dd4623ddbf16"
  },
  {
    "url": "tag/code/index.html",
    "revision": "ffb83d3e74ef147aa10e4991dd065097"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "8339522fc0259471a703a1c4a97a1963"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "e63a02e73e81391c3b96aa79b6d6b102"
  },
  {
    "url": "tag/django/index.html",
    "revision": "6ecd33f6f7b75fe9a19ac4dcbeb3890a"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "e94ac860bb23bfe4843c8faf9ad70d8f"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "f682b8f6b985bfb956705ce3aaa8339b"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "038c0ee772447857cac8a195861e9790"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "2ad481493d97e5ca4d47a7fa526ff3ea"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f0dd6895e885c8b447c2f3a0c55f8f66"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "60a6fb1956459106762a78cd4291fa27"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9f326fe6593f79c73bfb35476f5b0a65"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "5f3d5a1b1cbebed1147f840fa54c5682"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "68c3409d266c6312cd9f4f0b12fe4577"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8774b6ab1ef53724cfaed29cc8a7fecf"
  },
  {
    "url": "tag/github/index.html",
    "revision": "9b912c4ecc1192b3b2b995db801411a9"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "60b160bb58c6531a343e0143a9cd878e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fd9cd4ddefe9961724db02bfd1867c82"
  },
  {
    "url": "tag/index.html",
    "revision": "5d81d810f7b7e0dcd8aa4db719f68526"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4c7679697e06bfc85d0c79a154ba01c4"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "2f569d479f82fdbb320a97076a3a14c9"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3d5b88136aa646b420d581ff5b90c527"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "e8dbcd85859c26640bc0b142aad87a72"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7d07e6803f370653b3fa82c28bca9e5d"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "5631a5632bef0723338c408cfa8323ba"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "0c6e59cbb7df6cea15e35d7c3e5ff5b4"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b6928daeecc2da327e3f5374b7285eb1"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c21255599b44e782bd1795d2820f89af"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "90bdeaf8d599350a01dd84543758af8a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "f618ee717ef730c55192eb896d83a100"
  },
  {
    "url": "tag/json/index.html",
    "revision": "204d2dd854c05843422c94dd8e120524"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "454cf671515e2e0b615679fc6f5a2840"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "7280bee96109cd4bce922c8630ae5412"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3788ca9eb84cb3748311bcbf83eca978"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "9d69eecdaf429fffd80d8df7139877b4"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "71fd7438dd10608230ed935b1ce171aa"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "16d283ff26d350f8bff233ba575cf333"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "937b9ed8b21043551b1ee5254f6c41d5"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "42942f7e364b7f3fdd37ca725b6485d6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5384ed1fae9aec0bac6ce56052c8b587"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "937ccc97dfbd4b1a84a215ebca170d10"
  },
  {
    "url": "tag/read/index.html",
    "revision": "5fc84f9793b9c752aeb0822184f95d1c"
  },
  {
    "url": "tag/review/index.html",
    "revision": "002f5a9c6662d3184638f7bbb507f050"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "2ecb44c15933b0face2786fa0e4f8e4e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "714ece1cee7d8de3b5e142630eb8b1da"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "7f6d5b4a8ecc37983563f30cb9602aab"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "9971a9bd12ce0302d6f79a6f0606f263"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "1346eebccdf8d0840ad9410361ea3b62"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "39123c0453feadd667d77a84526acc0e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "5244807865a5fe485ca75edda25be912"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "84269621e58225fdf87f1cdf719097a7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c3cff762437d0b8f03d4e126c0eb5132"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "aaa215f855cc1060a5a4f66ae3f7f49d"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3f847939cc6f7fdc2855940fcf7af1ca"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "5f932bdb9d98cedab1dc8d6bcb382f27"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "a41b954c0b7967cf5b2a975aa79ae9ad"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "833ad7752deffedce4f08f5520224119"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8705cab04c959ecbd7256bd9ea04d5ae"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "a7757c5aba0a6ac01586910cc377b11b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a1da68ff7522746f5418bc6ab2511265"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cec8f3147b5e4a032aeeb175c0ecf93d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5bb9b6945b326c7d84ef043b1760a36e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "3b5a2c36f6a839f22f7266a6c2f495b0"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "e987fd08d303f28cb2d9e7ff31c371a8"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "e721d2749866f037795d70915200eead"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "0605ba75b4d40ab0069556665e488e1a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "7fece5af537780db0c6a94b959b89400"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "a5967f64aca7d97f4958d9a231414ddf"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "aa777d213f111ee84f472df5638f9594"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a8e4a02fa541e064718578307820a5f9"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "13c983aa86f052a815d49a143160abc9"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "6eab8acf2d7db1d1064740f3c61dbabc"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "bd5b955be19273754105ef8f8d608e6d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "772a3c3e735a8f939467cc4e475c1ae4"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e60b000c18683b1707bbc56d55d8dac2"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "17f3489bb1714917deeaf04a96ac8183"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "2b7aa7f4bc8592f137773ced4166c29e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3ed61a220c0fee2f402fbf33dd3884d6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "98af578390a1f2851b131a18a44d5918"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a3db01b027818325d4f699c3a217c508"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "27f4a39e185a0b67c4d516ee30af6239"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "0d0821246d3e5fceb920f88539b4c237"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "1a117264ac83ff66ae79b5b3336ce464"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b18057f1a759a111e6cbd8fb5661bbfc"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "93f2c945d1d959364f571a9df0c96b81"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "dbb25e5b9fec08b5f128d6eff956baad"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "7431c983af1c8dbd439349e7f98da435"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "4a232ffd88d1bca25140ea6dbf06ac9d"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "bed5e0b9698a1ff775dcaf5e7f0f784d"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b9a6d7d75de2e703b3112af9bc7b9700"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "8198ed303a504e5f6eedb62aba67eb94"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "b7eacc510c061c9805be0d32e79365db"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4d9569bad952a0ae31e238c6de69765f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9a20583b04a40893fc47ab83e46bb8ec"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "fa27a3e6a9ff5d17fd323ad04eca3493"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "3e5aeb33dba32151ea2b3d08a9c38bee"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "965795a7b7a55e8e3793d79bc77e3ff6"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "2931818cb4927f0e0a56f3452e2ec8eb"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "e859901a0e03feb0f3866f28e8c6d76f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "4cb3f2203af2034262f4b874099ad726"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "7f97db97b6cb25ba2271016e61988b85"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "962f154d465207468af1b845dedccc79"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "52b0b84ae0d5ca67788a8d94212adb30"
  },
  {
    "url": "timeline/index.html",
    "revision": "663af6925d16df547a5117b4cf6b9be4"
  },
  {
    "url": "tools/code-review.html",
    "revision": "5a8c483e01d72bf00b214d756fe16732"
  },
  {
    "url": "tools/docsify.html",
    "revision": "fe466592684d19061799b6c2674c60a1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d4e149527788c1e2ca6edc1627cdde30"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "d581a964bf5b76fe57b0c37e02acd0f5"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "8e6a9aeed3596c8565c9decf402ddeba"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "c4059a8da8f7c6e1e5c14c24ca242e0e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2b0ebf979f279785bf822fc38911ba2a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "89f8897f266f4ec1faac75a567ee2932"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ee928d8b7754f08bf5fbae93c79c3161"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "58e2254e2c3d4009495825ef2f4cd8ed"
  },
  {
    "url": "tools/html/index.html",
    "revision": "948c33784e0d579d112afc21ac550a6f"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "a4d0c8dd6925811d132735857a0ac053"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "3c8bd4bf335e700f772057106e47ac5a"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "2c5ef0710060f168f394d523eafa599c"
  },
  {
    "url": "tools/note/index.html",
    "revision": "2974adfd581a235f750c50850fdd6faf"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "675140b059c49cc1a35b088cc45866c9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a251df24b19188509724331e4fe47a40"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4c1db1d815d5be201c26c8f20581ce35"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "27cf9cedeb989e8b0f2bec65e4a7f454"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "aee0b402142cfe84a89b1b503bc369f6"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3efd27e2af7c675404464e56240cdef3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ee110091c0928cedc557ddacb6f29abd"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "bea27ffadf5bdc66f5d4c1106af4c056"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d1af19aef7b61dd7c00087dd6f91da04"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "108e2d216e1548223a9cda7cd337778c"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "3cc0381cc7925deb961c8fc9f70703fd"
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
