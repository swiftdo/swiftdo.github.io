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
    "revision": "70bf35da617a6c72bcbc5b8f20326a4f"
  },
  {
    "url": "about/app/index.html",
    "revision": "624060deb862421c29880f82a9aca3a3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "71919d0f73af25851d0429d216f2952a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "fe65f84e853dd0f27c60c0f6b2df1f45"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "de41c5c6dd5b747fe759a76866cbfe78"
  },
  {
    "url": "about/index/index.html",
    "revision": "c50e885ec6576892b7891de76312bf74"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "733dd6f144b022f8501e5e6d23e646aa"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "7931c9332300ee31a431200825caea0a"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "0945a96903dcb2a3e82850641b66e5dc"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "0f3ab12c5730b4ad18c6e4593e262cdd"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "509586ec6d327baa39af0550411b5c81"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "8cd7b2f43e31d059785d99a83cef6596"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "5490a4c6d63ddebf12a49efba7271996"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "bd8a67b4f97fbb866a7e4719b8ac8d47"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "ba9b5c917a34bb68e44584a4b8b8ce75"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "061be3558e9dc4217f0a5c39f61bfb31"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "5ade1e66891243f953f4cffbd679174f"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "81ef0b40e27d660c9679cae53dd86193"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "6fcf51751d12deaaeec0465cb6a1a332"
  },
  {
    "url": "algorithms/index.html",
    "revision": "1b180af71754c1651430fed24c77ed86"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "ec1f03abc55a8488be8ba580ea8e9d70"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "316dbfaa1784aba03e9bf34277f956dd"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "a32bd231fa22b86d86a6c62369bfc777"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "ffd3a8278ba02c481b5561c13173be89"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "2c8d4c10d093828646a0ce2daf727b8f"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "13bda6a84ecc6ab3a179294e73fd4872"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "9717611800e5de4e2a3bd6912cb65de7"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "d05293a542bb363527e790105d42decb"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "31d8858075a190adfcd890d44ddf7880"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "6fb6a40f732b7f39603c57b1219b19fa"
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
    "url": "assets/js/102.0dcb355a.js",
    "revision": "78db6974db79a5178162e8c283ff6861"
  },
  {
    "url": "assets/js/103.c6820df6.js",
    "revision": "0ce226144db64ddb0c0b718d69b42efb"
  },
  {
    "url": "assets/js/104.cfe1617b.js",
    "revision": "77bd6587729ef28e9f6075869cd13e19"
  },
  {
    "url": "assets/js/105.8f5f438a.js",
    "revision": "5bda5744b3675102c95ddddbb5cee092"
  },
  {
    "url": "assets/js/106.51873ffc.js",
    "revision": "df3a5a8fde6faf7e3930aceb45c1a6d1"
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
    "url": "assets/js/113.ac3b46a2.js",
    "revision": "ecc60e267ca6f73d4a87f34d33c15eaa"
  },
  {
    "url": "assets/js/114.732d464d.js",
    "revision": "b4b51822ecf36150ce513018dfe0de86"
  },
  {
    "url": "assets/js/115.f764d18e.js",
    "revision": "e82f463c226ff5fe28e423f558d8d802"
  },
  {
    "url": "assets/js/116.dbc7e7c0.js",
    "revision": "2086373326ffaefff6036980d2fca77e"
  },
  {
    "url": "assets/js/117.3bba2838.js",
    "revision": "1e9e9012e75cce23dd423425f21a2eb1"
  },
  {
    "url": "assets/js/118.4b689777.js",
    "revision": "6442daa7b7695559fc2ee39a5e32f9ad"
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
    "url": "assets/js/128.13286c23.js",
    "revision": "b9d0ae745e2505f95d8a06162e0cb2d9"
  },
  {
    "url": "assets/js/129.762b0334.js",
    "revision": "02e3fc52c37d459b074b3e45fd4cf158"
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
    "url": "assets/js/139.9feb5324.js",
    "revision": "48bfc19282c5dbf4bf9158f38933b388"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.0ec0902c.js",
    "revision": "cacbca308a1418b776501260828c69fd"
  },
  {
    "url": "assets/js/141.6329225e.js",
    "revision": "c947e46264a8b56069814ee29cc4218c"
  },
  {
    "url": "assets/js/142.d85e9a1b.js",
    "revision": "f08ebf7c83d398dce0ceac31fd54c671"
  },
  {
    "url": "assets/js/143.7d4151d7.js",
    "revision": "2a0104b5cb3442ffe9273d7d40980c84"
  },
  {
    "url": "assets/js/144.be45165d.js",
    "revision": "774f82cf5ba599496c821dc8328ea8e9"
  },
  {
    "url": "assets/js/145.456a40db.js",
    "revision": "305eee15fc2b10add45b8586d464b92e"
  },
  {
    "url": "assets/js/146.76c818b0.js",
    "revision": "301031ccd180f97a3304f6098dc6be18"
  },
  {
    "url": "assets/js/147.8ea97499.js",
    "revision": "dda9acb56634f1ac427a84d23ecd2eb2"
  },
  {
    "url": "assets/js/148.cc1ea9b1.js",
    "revision": "67653eb45552f0be6224e78561fb6624"
  },
  {
    "url": "assets/js/149.6eeac356.js",
    "revision": "dc15d4b7be30a2598f3a83c51ba315c1"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.b1ddef3f.js",
    "revision": "6ec192104085e3578f864461cd797255"
  },
  {
    "url": "assets/js/151.72de8ddb.js",
    "revision": "67e6abdd83cb2ae1e88710b64bb5d753"
  },
  {
    "url": "assets/js/152.0de90e73.js",
    "revision": "7e583ae42f4e0706f296c0d8fbe915a1"
  },
  {
    "url": "assets/js/153.8ffa7a08.js",
    "revision": "a5f94076ea40d60e0f7ea11f299c7a7b"
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
    "url": "assets/js/157.f629a096.js",
    "revision": "9d34af41f174e3a7c9fbca2b59a1fcb4"
  },
  {
    "url": "assets/js/158.8e91c990.js",
    "revision": "3bc0940da991b08da702fe8c3d6d2e29"
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
    "url": "assets/js/161.1f53c7ce.js",
    "revision": "80250ee422802c71d01c0230b099d9ef"
  },
  {
    "url": "assets/js/162.3c5306e8.js",
    "revision": "3e7411f5119fd9f76643e612ceca58b9"
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
    "url": "assets/js/167.4d3a13be.js",
    "revision": "742f8271cb078115c2a39a18da79ce6a"
  },
  {
    "url": "assets/js/168.d2bad753.js",
    "revision": "173d65cd64fc2251f7c9f96b6fc344f1"
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
    "url": "assets/js/170.7790cd26.js",
    "revision": "97068d97d0fa7fc298a4894fca649be8"
  },
  {
    "url": "assets/js/171.0931804d.js",
    "revision": "815ca10d5e325463ee4841e36e510584"
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
    "url": "assets/js/175.e4298642.js",
    "revision": "20e37d70a888a45c8fd19203b7faee8f"
  },
  {
    "url": "assets/js/176.87d53a53.js",
    "revision": "a36ac646da33729af650f7e38132b6ba"
  },
  {
    "url": "assets/js/177.360074eb.js",
    "revision": "723ab7ab6f4ef4e528063996f3248b78"
  },
  {
    "url": "assets/js/178.fc8703d1.js",
    "revision": "c5d86fd52bf24a07eb83cca76bfd04a1"
  },
  {
    "url": "assets/js/179.e69c01d2.js",
    "revision": "9b646e51c037fc7baf8aa2aac4279268"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.ba986dcb.js",
    "revision": "7957488381a68dce5c11654022b3d3e2"
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
    "url": "assets/js/185.2227ef61.js",
    "revision": "cb8ecaa19a36c47e994dad2d4391ba56"
  },
  {
    "url": "assets/js/186.3028231f.js",
    "revision": "367bf39cba51121c66e21536c1163674"
  },
  {
    "url": "assets/js/187.e4b57e0f.js",
    "revision": "d06d168b659fc026a30ac331015ab2e4"
  },
  {
    "url": "assets/js/188.9dd1108c.js",
    "revision": "2ed3752ca931d52ad4283b630e6621d0"
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
    "url": "assets/js/203.fc4c9251.js",
    "revision": "1b7b653c60b27c18c8835a31d47018de"
  },
  {
    "url": "assets/js/204.3b463604.js",
    "revision": "980b2b36c7dd6a348a688a55cecdc821"
  },
  {
    "url": "assets/js/205.a69e0188.js",
    "revision": "b8033181a581635cd86de9234e798cd5"
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
    "url": "assets/js/208.46c8304e.js",
    "revision": "367a6360fb2bc2d406097a048c296a41"
  },
  {
    "url": "assets/js/209.2b1b408a.js",
    "revision": "c91e2d0b389e38ebbad33918ec5fac51"
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
    "url": "assets/js/211.075df5a3.js",
    "revision": "a51426d773c7dbaf8c3ec9d5e195d732"
  },
  {
    "url": "assets/js/212.4835be40.js",
    "revision": "1636e5121c3fa09b371adfe214c68348"
  },
  {
    "url": "assets/js/213.be669d58.js",
    "revision": "38d554b9a0eacc8e667d66c649d0efca"
  },
  {
    "url": "assets/js/214.55436915.js",
    "revision": "b796ebf493ae45bcd1e1798823601c98"
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
    "url": "assets/js/217.6760332c.js",
    "revision": "a7397becbfda3f51873b1d9f65b2a12d"
  },
  {
    "url": "assets/js/218.4fbb6b00.js",
    "revision": "852858fd83d98cc9f21134117b6308d8"
  },
  {
    "url": "assets/js/219.18f1b046.js",
    "revision": "33355a9304a3b272cf16abf8d16b2a79"
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
    "url": "assets/js/221.cfaacae9.js",
    "revision": "7cbf939362c561fe628da2d8b36d90fa"
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
    "url": "assets/js/224.95382e69.js",
    "revision": "7e5c686ace1a3e6cd0b28c96a0b8f43b"
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
    "url": "assets/js/227.497b5f4b.js",
    "revision": "1de4c1268696bfa895dee71d4e1cbff5"
  },
  {
    "url": "assets/js/228.73ae8528.js",
    "revision": "29842b2e81919732ddc698f5dc80fc73"
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
    "url": "assets/js/230.2d28a779.js",
    "revision": "e3d4ae58b7a20ca9b986ab15e6b2ed83"
  },
  {
    "url": "assets/js/231.30d93ad6.js",
    "revision": "b84d3ea53d3d4ed8cae929b8bd94329f"
  },
  {
    "url": "assets/js/232.5f324e26.js",
    "revision": "a139fac0ab6dbca7534957f822d4369c"
  },
  {
    "url": "assets/js/233.54eb379d.js",
    "revision": "3dba39bba36c01732d8e91e781ba6161"
  },
  {
    "url": "assets/js/234.611870b2.js",
    "revision": "d77c2e16fe02138204ad67200abf7b45"
  },
  {
    "url": "assets/js/235.215473c8.js",
    "revision": "3a6caf894f8395c8a391a2aa14e9389d"
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
    "url": "assets/js/239.0681a4c3.js",
    "revision": "e44989df4967ff3555ed8d8c882900e7"
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
    "url": "assets/js/241.1369a0d1.js",
    "revision": "b5a94349ab3913a0f27fab83853025db"
  },
  {
    "url": "assets/js/242.7a5fab69.js",
    "revision": "2c265d9a933d1bca8a32f20632d2bb17"
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
    "url": "assets/js/245.518f78c1.js",
    "revision": "c164b2023bab6cb13d5ce875122b8c87"
  },
  {
    "url": "assets/js/246.f8e9138a.js",
    "revision": "395165ebe550bd3a91ee844f86def57e"
  },
  {
    "url": "assets/js/247.d8ebd1d5.js",
    "revision": "d9e0a1b29f5099c240116dce3a2c8093"
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
    "url": "assets/js/252.b20df191.js",
    "revision": "750b9fb1c74b8bbe85745b81b095832a"
  },
  {
    "url": "assets/js/253.41f2d269.js",
    "revision": "f9f658ee19362faff3e4a3736d33de76"
  },
  {
    "url": "assets/js/254.52965be2.js",
    "revision": "013cfd95b6ba574f4ebe408d4f11db35"
  },
  {
    "url": "assets/js/255.33709293.js",
    "revision": "21e6a433c29f558c856915deed8ec7cd"
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
    "url": "assets/js/259.9b5a20d2.js",
    "revision": "d9dad35e336fe029efb16114e4c7121f"
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
    "url": "assets/js/265.222d3fbd.js",
    "revision": "e064183bf72ad7eb295f14597b7b4389"
  },
  {
    "url": "assets/js/266.ac4852a9.js",
    "revision": "28206abc8eeb283b2d3a3b396e3a9b92"
  },
  {
    "url": "assets/js/267.a61ea733.js",
    "revision": "c9b0ab1ad2efce27a07920816e781ea1"
  },
  {
    "url": "assets/js/268.f6c0ede2.js",
    "revision": "dbb075a0cd76da5054262a351bb6653e"
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
    "url": "assets/js/276.afdbb6ff.js",
    "revision": "9728af56ec5c2926eb29cec13ca6c232"
  },
  {
    "url": "assets/js/277.7c966184.js",
    "revision": "b287f03fcdcd374233de7bb0d720527d"
  },
  {
    "url": "assets/js/278.c056503c.js",
    "revision": "cbdc8b5dd648f76ae308ca84cd9cd33e"
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
    "url": "assets/js/280.968c994e.js",
    "revision": "4964179d2d94c1349dc07708cf470602"
  },
  {
    "url": "assets/js/281.a89d13bf.js",
    "revision": "fda1e58817a10d5cdc2579f23040279f"
  },
  {
    "url": "assets/js/282.693f2be4.js",
    "revision": "fcb768c892a241098fc102c56b6915a9"
  },
  {
    "url": "assets/js/283.71a122ee.js",
    "revision": "593f8317d2ed0e593ff5c0f34f2d53f0"
  },
  {
    "url": "assets/js/284.ec4c0c74.js",
    "revision": "11073429066f34c510d47219fab68a05"
  },
  {
    "url": "assets/js/285.89e60d1e.js",
    "revision": "1ba46d0ee26cd5767ecb312e6e795aad"
  },
  {
    "url": "assets/js/286.eefcb97c.js",
    "revision": "3e881baf60de0e08e6eab8b6730164ff"
  },
  {
    "url": "assets/js/287.1cda2fec.js",
    "revision": "e66c0db2fe75ba315b947c9e40bfa24b"
  },
  {
    "url": "assets/js/288.5e6c99d6.js",
    "revision": "888cefb91a66c165666786b1056197da"
  },
  {
    "url": "assets/js/289.21cdb19d.js",
    "revision": "9e432de55b73c842c3a3cec33db1b48f"
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
    "url": "assets/js/291.28f8bf2d.js",
    "revision": "57b92d3c9a34418379b7b188c30bf3c1"
  },
  {
    "url": "assets/js/292.34837a34.js",
    "revision": "893eb0952d9d7796b7960d988ce34d59"
  },
  {
    "url": "assets/js/293.d073e05f.js",
    "revision": "db699874cb771e62dc2bc97d7bbbb0a4"
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
    "url": "assets/js/297.888ddc81.js",
    "revision": "b0e09dcfa9790b6d1f73015a92408dd2"
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
    "url": "assets/js/300.46f7133b.js",
    "revision": "0d6c9cee1707a7eae028bb8dcc5f07b4"
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
    "url": "assets/js/311.85bcad02.js",
    "revision": "994106181360fc0c6a6b20a756c1d552"
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
    "url": "assets/js/316.f04268dd.js",
    "revision": "68efad82b668e4fcce8c7bf8ac94515f"
  },
  {
    "url": "assets/js/317.4f85da95.js",
    "revision": "1959eff2b8c452f9e49ccbe0aa7dff83"
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
    "url": "assets/js/322.0a03363d.js",
    "revision": "75be85705ae10b43c91a5a2268fbec6c"
  },
  {
    "url": "assets/js/323.1b4b1165.js",
    "revision": "2660672be390149b1090412e66150741"
  },
  {
    "url": "assets/js/324.5f25aff5.js",
    "revision": "753fbff894edaef47f37fd6d25bc11bd"
  },
  {
    "url": "assets/js/325.5e91a9a3.js",
    "revision": "31c280b97373795146973e6ff3e0b523"
  },
  {
    "url": "assets/js/326.bc2bce6f.js",
    "revision": "d5853d9bc27d354f95a994e8cf1cf88c"
  },
  {
    "url": "assets/js/327.aebdb751.js",
    "revision": "9e5000df503f980bf3f3e876d53e4fa7"
  },
  {
    "url": "assets/js/328.fe9774b2.js",
    "revision": "bb860a95a14c16cb38adc20f4def6770"
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
    "url": "assets/js/330.ce4737c6.js",
    "revision": "7b642de874afad8328010e77d1c892ac"
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
    "url": "assets/js/340.5cf95ec0.js",
    "revision": "fa6a5d88f17e9a76f88b73d0b4c71d7c"
  },
  {
    "url": "assets/js/341.c9646b63.js",
    "revision": "3e1e3f92f7d72b37f0ccec56de65ff46"
  },
  {
    "url": "assets/js/342.0edc0947.js",
    "revision": "cec59bfaa2427f3c787b2eb57c9d440c"
  },
  {
    "url": "assets/js/343.72b30b58.js",
    "revision": "95217ab8e6e563acc21b286ff0497c17"
  },
  {
    "url": "assets/js/344.50b55b6f.js",
    "revision": "ba407d2bdb1b1e2a27fc8e5f9526d18c"
  },
  {
    "url": "assets/js/345.d8dd18a5.js",
    "revision": "c16e2f2370ab1aec3e2014496091e5a7"
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
    "url": "assets/js/348.f27be3d4.js",
    "revision": "4a5807c968c945cad959e3a0b2fe9cec"
  },
  {
    "url": "assets/js/349.de507ce7.js",
    "revision": "470406b29afd9dcf3339e469bc5a362a"
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
    "url": "assets/js/351.c4c1502c.js",
    "revision": "4afd998cdc4bdc45daabe5e487fe9fb3"
  },
  {
    "url": "assets/js/352.4f0f2804.js",
    "revision": "122a636ce5a22f3c04e05a81779b2852"
  },
  {
    "url": "assets/js/353.55065c31.js",
    "revision": "041f1fd81d4a15150d50367dc730b0f9"
  },
  {
    "url": "assets/js/354.e53acb10.js",
    "revision": "f1d22684abe877f17b5dc8f74a8f0753"
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
    "url": "assets/js/357.5b7ce67f.js",
    "revision": "25c7feb6dc23cda3d013d956b25be6e8"
  },
  {
    "url": "assets/js/358.47616a83.js",
    "revision": "e6b1cf73db73b5aa17d50ed9a87219d4"
  },
  {
    "url": "assets/js/359.59e89031.js",
    "revision": "8d6ddd030c9ad5ceed71d32d84d7a525"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.b4767e0c.js",
    "revision": "5f8c6d6157fdd8b209ebe4c74c029174"
  },
  {
    "url": "assets/js/361.4ec8e554.js",
    "revision": "e2217b73bb85d0edd5a0a5a61e058caa"
  },
  {
    "url": "assets/js/362.f43b7059.js",
    "revision": "75813f9b00befa5af3bde111809fd52c"
  },
  {
    "url": "assets/js/363.98b80a16.js",
    "revision": "b6416530a4fc9bfd158dc204f5ee5611"
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
    "url": "assets/js/41.a03eb21a.js",
    "revision": "f7003219e839dcac79693799fd1ddf68"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.83a99001.js",
    "revision": "3a2f887888b9ffcd0373af50f4b511eb"
  },
  {
    "url": "assets/js/44.b716750f.js",
    "revision": "e29df2968d22465d2d514c10a0b3787b"
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
    "url": "assets/js/47.61d739b3.js",
    "revision": "c8dfc7d6d32660a7179e16dfa6d6ce04"
  },
  {
    "url": "assets/js/48.756dd4e2.js",
    "revision": "dac45279e7da1e7da4c394501647105c"
  },
  {
    "url": "assets/js/49.77f44627.js",
    "revision": "03d89a677c1fa098b4f21b5f3e67d9af"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.a627ead0.js",
    "revision": "bfe430ce728167abf1d6a4948e2aea0f"
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
    "url": "assets/js/53.5e7bdd83.js",
    "revision": "b41246c6fb47365874080c141eff3557"
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
    "url": "assets/js/59.4cc5978c.js",
    "revision": "ae89e6468099b60e49d3f014d08b9b7b"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.a7c0c837.js",
    "revision": "217610b03f8616887131fa7fd5a98bf5"
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
    "url": "assets/js/64.e490fc06.js",
    "revision": "e3a630fd43b7c464b76b452901825299"
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
    "url": "assets/js/78.1cb5cc35.js",
    "revision": "18c3b4cf8342d34874fc4d2d2b865ebe"
  },
  {
    "url": "assets/js/79.3471579c.js",
    "revision": "cfc10ff6fb2e785ef493852043129390"
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
    "url": "assets/js/84.dae757ad.js",
    "revision": "60597a8332e9345b78f59c9074273df5"
  },
  {
    "url": "assets/js/85.48b2843f.js",
    "revision": "7f5b919da1302c8f9a46ae475c197a0b"
  },
  {
    "url": "assets/js/86.5a0ed9cc.js",
    "revision": "1e5dfc56418d138d42ac6db1a83861ec"
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
    "url": "assets/js/89.31248a2d.js",
    "revision": "ba531085cc6f1e5d46f730e679a0f5f2"
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
    "url": "assets/js/91.b0d3fc37.js",
    "revision": "e6142411947f94943ded1ffe4fd1a9ff"
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
    "url": "assets/js/95.957a5782.js",
    "revision": "409c63e9ad8bfe2e329d91b7d0eaefb8"
  },
  {
    "url": "assets/js/96.e1d55c45.js",
    "revision": "88d8fad1f0fb27ed36ce1c2cdb425d92"
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
    "url": "assets/js/app.738eaeec.js",
    "revision": "e3933003709a491f79224c08e7287d4e"
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
    "revision": "2c7376818f6a0f8b494bec9db30e1473"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "3b1699ff37658554ca7043fff1abf153"
  },
  {
    "url": "books.html",
    "revision": "68a3a90385b9aeb21da265051c60bda1"
  },
  {
    "url": "categories/index.html",
    "revision": "c2e39e491099d52566e9e93088dbf03a"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "0ec851aff3276279e67e939c8e855cc6"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "60d2bd2897960f793727124a40017ec4"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "e7aaef1bd43a00cb01eba5d146ca4cc2"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "202ebb5e307da9f2c11b32ff869995a6"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "cedd8ebe6594e8c773049acebf35813b"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "1e1002c449b06a2470b0c0bca97e0731"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "1b6cedc91886f33364848927e54b7e78"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "bbb1c882ede585b8303b79777ac44f6b"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "281d1d3fa1dd32da7102b73fd19f11cf"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "b4831e4d75a7489a17e87b07c6dd9e9d"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "fddbbf0fb1947268130c13eafc76e9c4"
  },
  {
    "url": "deepseek/index.html",
    "revision": "1d3bbf44baed1ec8ee3b6a30e0b1b8ba"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "fbec2c8ddc9cb3ba25f53cb2c29771e5"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "1bf641c5f1d6b74cfd99b597ef3caec4"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "1e8309394c007a38817e6005cab1a45b"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "123da47dacd04c86f4a31f742adb1a36"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "469166e7feff3fdfb0cb3a088a1fd1b7"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "7f4bf0262caf5ba474789c8b42a1c478"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "d6eb413f08b594c8a0ef21fd4438411b"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "79ba3b64793b57316e184bc27f0110c6"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "67400dd114538d8f1c47170e2179704e"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "2839df0610585bdc8fc03d72d4cb3182"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "9d14ac352d413fd1b21bc68d9188a98b"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "667bf13986558e76ac3f414427663ffe"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "b7f1dda9b33a957d17ad70b4cff649dd"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "fdb8b96c1104c557bdcf001aa80b12af"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "353fba29dfb93e4435a045a670256d18"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "3cada7846d0d77b178e5d8b3c979a05c"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "d64793e3120146200cc1c29a88569f98"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "40362f2e3625eb4eccdbfb6ddb9d87c9"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "8e31d3615ecd5914b5ebf93bd1b92364"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "2a6085ebc2d3235d1bcd392147782faf"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "62773209ae0c5bf580c8b292b73df2b7"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "b70e39948d49d00d83a5cc4abab6f01f"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "edeaac43fa8d28edafc61c6f5addc350"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "aa534726bc9d16ecac8a9f38b0718891"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "8eec600435d947a1da824771761e4d2f"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "358ef179f83c88f0a071fea8b522e75b"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "0c32149b56e6db6492a722006fa86597"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "0907656869b80f9ec4450a617ab1dfc3"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "6bf2ea1feee3ac1185226a9a24281986"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "e24c7e13ab354a667d462c2af3d06e44"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "0d82871d1db05384173f8a512a05bde9"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "8c94bd68a27602506d629f01a8ff496f"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "667cb533547fd5427636498bc6b8661e"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "189a0deb974419d3a40a6c43b439e9a5"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "2d64643d66c0f7d41287c4663ae219c3"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "4077ef9291af141daf3304a513c4305b"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "7bb57c5680a5e337d94a11f579ba9f98"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "b08eac380f029db16c25e544e0b67c2a"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "345929c282d335c5e2d5f9230632f42f"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "f2e4038d07fa94190c430e01d291e798"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "df4dbfd356eae4284bc8d382a4191d80"
  },
  {
    "url": "figma/index.html",
    "revision": "e6b57cda43909e392b82ed6f5679e251"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "2b813c4d93b6f643f30c1553a8eccc0d"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "2691c2058cb99ba9ef10d6836e021c6f"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "e3f9c30e6b946dbf726f7fc5ade18f28"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "c8d3d40f3d97180cf3fa4e8f8fcf3b3a"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "84098f0f940074a1b739c9f10e175ead"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "13a25ff9526b74af36e631ddec51464a"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "d059fee0baa5b11ef8634b383eeb8611"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "1b84ce85dbba87516539dd6c95d5b35c"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "39ef704a4c1a00dc5fb936a513962590"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "5ed31ca428c5134ab2e8187c05b4a4f1"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "1b6d2adb34752c8e9b0aff8413c7c3f6"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "33bf2df733db44b9e4aa29387aaadc6c"
  },
  {
    "url": "flutter/index.html",
    "revision": "c74529191b93b7467f5e7f4868f7eb99"
  },
  {
    "url": "flutter/point.html",
    "revision": "9c2bfec1805585ff38cf04a3008f8ed7"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c25b6d9f1cd8ec35a3c35dc10971e0a9"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "56dcb549907db75ae1e9421255f33155"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e0a4d54b879b2373176112eeb56aa6a8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9dfe75c18bba5917273da3eb5025df28"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e35058862ef34365340224ea402f4c3c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "21f694070d423eac82b8c4bb0579b080"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b7f5ae28d2e3de64bfc85e06ab89c9fd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "2315707650fd8b3e4538fd9959400017"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "9709b01d1649820331e961352f7d1c0d"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "fe4f01d1a56d1f6b41c17ec8d356d23d"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "01629287486f2098df5b7bbb5d23af07"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c4a55df091ff504f30d6c4ecfa64e907"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6a340a1250fee54c561a998c61d4db9b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "7ce7d4feee1ed1acbd1b48dc8f9f2325"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6f9ca0874fdc6de91943f142fba95c31"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "715e78bf7e0b26714b36c6004549a229"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f6cbf485340940ae602aa757737df14f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "9311c57e441f0ffaf7b3964fe0c7f3e5"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "b75f1e383ff66d9824391646a4945da5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d86dcd7458714af843d9ec012ba2ab09"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "4cc2117cc841ae1bb0627768fdad0d86"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e0ead6463a6609a5d0845ff9eb9c8328"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8b21980743d929a1bcff2c1a7573fd2b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "92d51c21400091939c26c886e4c1056a"
  },
  {
    "url": "haskell/index.html",
    "revision": "90465c14138e43255ee3ef6329bbd1dc"
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
    "revision": "8c7754f9399cce29203c36ae109931f7"
  },
  {
    "url": "java/index.html",
    "revision": "65b22bd6b1328811b112306141528087"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "a63cf660eb3f595099356ac918d2713e"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "d501baa3e0203d9ddecf8dfb23c520ad"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "c49b8b69a1557aee7ab8ad28eebf8326"
  },
  {
    "url": "ops/index.html",
    "revision": "ef7a5fa12e870fbaaf4aa9929ca61454"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "18aa5a55a6e5050b6e36019ac43d720a"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "85d7727a5c25c3cdf2552805121e8898"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "de40e370716ea904cf0ec4026db313a6"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "5c7d7aa590781cb1e42cd551fbde8368"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "76f0c0917b13370d1a84175b267719b4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5ae55ff19d4f16b3620adbf57dad76a0"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "10bb71be122376102c76171c15318619"
  },
  {
    "url": "python/index.html",
    "revision": "4b94b33e87293dd8a9e03046d8ced9ad"
  },
  {
    "url": "python/poetry.html",
    "revision": "66493ea95df25a93b58f2efc869410b5"
  },
  {
    "url": "python/pyenv.html",
    "revision": "e5fc2e415bdf4532593998144c982ab2"
  },
  {
    "url": "python/python-ase.html",
    "revision": "8d043e175ebef565d806c4c273128c82"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "c3dfc3871c1720c61c4b9a7e968026ea"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "e983714b1cc59653926f2f48838d9f55"
  },
  {
    "url": "python/python-file.html",
    "revision": "e5d2a3a3282d4b1c3809caf9d60c8992"
  },
  {
    "url": "python/python-function.html",
    "revision": "bfe3bd7bb745294822848c68e5c53036"
  },
  {
    "url": "python/python-generator.html",
    "revision": "faf25c59f3b359c558c722209b1532c8"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "e599a541bcbe8e5d7b9a9808ffb8def2"
  },
  {
    "url": "python/python-module.html",
    "revision": "5119cf78c821463cfba42681b9b7a3e8"
  },
  {
    "url": "python/python-string.html",
    "revision": "39724f84e22d3f6fe0b5d03066ddbb1f"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "f5fc618c5675b520bd3316455a71469d"
  },
  {
    "url": "read/index.html",
    "revision": "96b7435984cfc0b3051bbd7377ccd68f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "cc54ab6dfe892f4b022e59ff4ef55e74"
  },
  {
    "url": "swift/better/available.html",
    "revision": "20f58221bc2905fc90d44c056df1a5c2"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b071adcbc79b72ebbff2215c0b1274b0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c3ed2f21611b3782aa3cba7889086a26"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "90c7f72a1c7f81de7b466155b34ec65e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "ffd80e996fcc183392653fe1e5e6fafa"
  },
  {
    "url": "swift/better/index.html",
    "revision": "82e6bf15e69fb4781f7b02ee1083f89c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9a9cf186cfcd80bc69151de7a396d9f0"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "7e14708b45030cbe1b5789ae05246084"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "95e23244eac60c3597b6a1736e0493d5"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a17759ca86e3d4dc04e25890c1c5a9a8"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "e51f8b67927a913ad14d6bed993834e8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "de0b89471720704c2c5329b521db7e4b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7ddd34a97ff9716d2f362d6278108654"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8ef9c1425892f4632d1f63784d3ee4db"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "f6b4e2a12458fb7d178a9f1e20a7adac"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "120c8fec80fc9fc28e66c879b2d5d1f8"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "751b0168c528668099bf161693f3643d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4c035d9c33113698e537321e12b4908b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0d32593d89f0224381c148508c85bc84"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "0d0158674b35433a491650ee7e9d7ba8"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "1f58a6a2dd359e2a8611d1088d066a2f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "3ee35dfcf13a4643e8f1f9498aab4624"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d3acc9caeb3828ed398e3a59d2474121"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "5ac7621403ee38e1670aec272cfa2019"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "68a6a4d5d0fbe1172b8c4d678de60550"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "f512323ba4f189273c2be776f45bc27b"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "0ef5a7c9e923496dc6c3326bc81dda03"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "224d4f8f428b1c3ef76bb90dc07e2dbf"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "3eb18d246fbfc82c8a06d8d18900cfe2"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "aa85428b4e1d0111dae7919e18d91e9f"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e90bfd89aeaa79cf18239ef254c82a2e"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "97a61ea0fc8fd99c4df787051e0f145d"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "808c2c9e637c9413b1ccd3238d5988d0"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "71591bcbb4020d057517a837928ca316"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "f7c32f3a4f592c29dc610d85b792126a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "2db1f58976bcea5137dabef7680696a1"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "6855a47f2d7bd8061de901161b9ed1d7"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "02f4774b1534823f6ab2506a2994ee46"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "7cd40dff9291600c07c28f3c0cd5c193"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "a4a69adbf1d7e961da8ef2b6d91ac536"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ca052b1d884817b354ee6b8fc0660f97"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "fa5bf9e126675e802279607f15db9fc1"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "82f83b8b8ccc9c11b6ed20822045edc1"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ad34061ea962cd8f2b1957eb91733cfc"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2925c566396f0861c7ee8fe2b0755db5"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "4903e000f8266a162a0c5bb0359eae84"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "f7a4ff1cf383080f1641061a66142178"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "7d7479e0d1d1e4e51974eaf823990161"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d56fdb06b446f10d209e06db88294a16"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "32e42ce823ba0d89ed56567c9bf5c977"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "d9c2a2acb99ea1b3eb252bb7c7d4cc84"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "701c39f0acea2016d38146cf0ead7576"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "fd04d1f4b9741353f1b275363694233c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "962fe877a43c3420aefe8fb105361e46"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "eccc03cd6ea89b55421581374517adad"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "09b55898143c77c6d2072f05e0a0c447"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "d77fd9783a4641363e8d482e448c0044"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "45ecc98c566cd0ddbf80ac252a96057b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7400ba906a999b6106a9d05a2ce66883"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "200c0c4357670a1d3b9617a0f85cfe9e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "42f4825dab660b1d5c519d16dd225272"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "91e12769bd3abdea9b206ebf68015ea1"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "055fd7777d1021d034faed474d713021"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6f96338e03c3f4cc93f2aebaafd445fb"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "c7bedac646696b448ab6552e8ede1dbf"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "3ca44cc06dc699f00f8aa3d41c0efdac"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "d4a4a263a8bf2813cb6914a760176b6d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a165d17fe30b02d787e657a089b0f88d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "fc6b2c6f84d4899b8f38f852086eac78"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "3966d883467e8e42dbf1e4069d8b0254"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "d56f18fa737917ec6fedf44cc7ecd038"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "ee219131adfae092732f7f282eb4b1cb"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "76786e14d4fd5dc8ea95eb715fc81dd8"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "322f2d02cc454a9ae9f6b73d35158e4f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "9f47bc4a6798054d7e37972e531b42d4"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d3fa628725202cf0d4e6c4d8a443e249"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f4afc30183fa178b9cfa575a8a621f1e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "372b5b2d9590e0e75227eb81715bab74"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "d130086c88fea61d1b70501036866872"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "7f156544873ebf81c5c050ecf3afcb74"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "0b417628cd3a35956a66b7aa72deaf03"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f934c22532ae8f71ed7ee87193e5a18f"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "02736f4f06c8ef48b8112053ac2db22e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "0c1c241ae49fe0403f75ca9826579bb5"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "19563b4ea8154f0a84c757ad75600750"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "ad1a85be90563fb9e88756c1a056c1bb"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "f2d3858b11945a2b60c827a808833dd5"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "85e321c3d5d690ab28620ab44bf18a56"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "327b9b82f3f5c9d12fd7a5db2beff087"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ace4e425bccbbf854e429bc41c776a97"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "f9f73fbac63de9b0e430fcd077c16fef"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a14a074a9255d728c2ee266a7337aed6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0563af8985654379773d46d40fc0f6f4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "79f0bc2a42ebcc8a4745134b9378ef56"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a0854e7b1ce0698b6647d7f5324efc79"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "1e2438d1358751190e99ff33ea98c99e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7a0e4140a4752e7be52019a643c20a80"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "795094171fd939fbb65938b1da4456bb"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c8f0f9d3b969ea52d36450d77e038c68"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "8a84294bb52e0db53fcbcb664b3b1008"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "8e3681f8d79aa2d0a82e315376861bde"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "adc3bef7c17aa3a3186af8eb93baf4ea"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "95802c618c2cc93f0ac8fa72db8edbb9"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "d757306c11e5fe34f3cecacfdaae2b60"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "67b513cfb74e7d888a81e6735d080e77"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6b3eee3d7279ad84d08768df45a71b8f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "62e71d3b0f632e05f02761fcb5b2e2b4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "3e310051d722099c99e92d82989fa8dc"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3ca9b775ec5b0652df29004105f50556"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "76ec4ec816a217d0326f0ad7afaf9f7e"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "de7eda9923dfebe06d1f1500f8595b36"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "28a0eb4f681f31f360eb588530a8a597"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "2d69e98a58b285754103a438bb936e43"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "944c43b6b1711450d8347d287daec239"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "fbf7f083ddaa86a54ce46ebbce71f1a5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e4902519d26fed8ac9105aa1bfd6de21"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "0caf42d9fc3eef78341b06c551c63dcd"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3bb954f080099bb9f51a873b955d7430"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "94a7e3b1244ae7d8bc32e838818db860"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "5b10abff1e44468e8d1ea8982960bc84"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "e479071e0252eaabcd8c4aac5dee503e"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "fef759fdf7107f73b690694e387ec10d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "c615e3589dd0db92f7a1c719d6ce56b0"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "52100831ea3e6c852c5a9d092b3cd64d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "e65b4af79c808d2b36829af581c6e515"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "6841b8c0eb78f0cddfab418bc69c65c9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "e3168f9b75eb2397801366297f1b0387"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "062bb4586bfdaa2f81eb4eeced6d4a90"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "151db1d97776aaf22f9607cd4f6cbed3"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5ba9de9d31eff95bd85418a41b82af5f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3607bf43fe53e04c51e398a93715d038"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a743ff173570ddb5f964a6b054d1c79c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d55ec42a5de5337b9a8075f9625ca24c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8bf84434288b3673de9497b4dc7b9a04"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b742eee06fd7bea26663241a48360480"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "5ec3f2c3726f5894266907665ca27cd8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "86b1da97570fe6f038f04afab396147d"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b096f9c1a8664921d82ed614d6f15f4f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "487669018069d70324e1ef9dc613a8e4"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2e851b291fde7d54accb573f575ff306"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "6f06de09f85b9a7e03c647f23c18119f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "98045f9927fb32e28cfe13d24ae6a4cd"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "c9234658244ce04af9a5a34ee42fe49d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "c473fc092d5792c7ef5fe254ee9e3aa5"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "550dcc2bb4f06e0c7699f1a7c940b3dd"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "724f3bff0eac2cbe871984832ed896c5"
  },
  {
    "url": "tag/code/index.html",
    "revision": "59488b3925c313322d6d5047c6f70505"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "eb2ef3014289d8307bdbc7af61e0fdd9"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "1a3d3cfd11d69f32a106134f6324e1f5"
  },
  {
    "url": "tag/django/index.html",
    "revision": "7bda69304e243a51a50235a1b4661729"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "6a053c8f7b5af5ceb69122615fd8f6d9"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "fb32c96bf0245a7469bba48e9f7d4700"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "6cccd5d4db72d39fe3082560b6908dea"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "0ca4a27b4039c8f631f34c2be502875c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "cd681fe17617aedea36c9ec1ae4042a3"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "48f14069c7cefbeb7c716c57a8c2f75b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "f83ef75f183e52841788517e541b35bc"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "eb51d98c92daf9aff578cb13b50f7464"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "ce17825eab262f2379689e7985b7826e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3b38755906849d1821f7f7d893ad592b"
  },
  {
    "url": "tag/github/index.html",
    "revision": "7e2e7f67f8fdcc88795ea20b49475b50"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7c3a3ea72e9c9815081403e69e7c4ca2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "53c13923d25b01b68ec351fa3cd64c8f"
  },
  {
    "url": "tag/index.html",
    "revision": "2eeb4d5d94befb1f5656ce9e8fefd35c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "adc2cb6833c4f81cb9e2cb449cdc6649"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "343609729c4f00fca9f3164f73e371af"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3656af4ab33933e9506607e722fc9d8a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f05f35646bd8220aecbbd9ee99042f31"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "efbcab4bd95e061bf9460d0da316d658"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "b2f1ec2c01af0d8f6d427a417051cacc"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "fe6bec8bc392e0795ed716a4c29839f5"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5ba46f0166a1a544d0ad5005dd73c0b6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c3492d2058ceccbfbb021b84b1b24e93"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "cfc51040fcec4c04be54e9e6455af638"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b0f143c250228b4745c5dea5d90be818"
  },
  {
    "url": "tag/json/index.html",
    "revision": "16d165db2e5c47626ff96ff7e4c61870"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "91569c63976b7b8d9d8b77dc81117047"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "65926c2d7c5f093490ca1afa97404f4c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f13c84c00dfd2bcda7d387087a8d5264"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "ecac9d3069b2296cc25d2e1036310ab0"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "5e5dbfe1ac25c210812c80bd8cd6b160"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7b409b257558c197d91e1a1a97cb4a0e"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "dc4c0f026509c995efb40a1c4b47047d"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "5ffa4ca53fcfc31b54a101519da78206"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8b7718055c4bd256f3340651f8ff24b5"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e995369bddd549637e9a69f69ff92907"
  },
  {
    "url": "tag/read/index.html",
    "revision": "fb8330365e5da82b01dfbd7064717c95"
  },
  {
    "url": "tag/review/index.html",
    "revision": "f81fb274aa93673ee500978b07025985"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "2ba1be306469d10fcc477767a4c2d6fc"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "de00c042798711c89a4275e340a0a53f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "4a3b2eb431adb7c58ea668b05d659c72"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "47ca1456d88e6ee097ddbf3cac47350c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "7a679399d9b25d298d0f77de8df14a45"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f248846ef292ce88fab9f8d305eb369f"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1ee7d50bad74265ecc0995d46ee9e8f5"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f4b67d2f8571a833f3d1450c6843dc99"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "30f694bac005300755c766378b004cd5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f464f862185f10dcec08e711128f0359"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3417acfb7e8584332730cf06b4e03bd3"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "db3337a75463eeca85dda6dec8530bb0"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "9173a3af04a4147927bec2f89a867f7f"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "35254d3359671e549b5afaed168ed482"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "3b0e94e1259550de8b9f288088f24dfc"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "c3e367088c9c5feacb622c7ac1cb7da8"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "9cb44cf82681886f25900580b2142bdb"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "db66f9ed643c7ca9599c5590be4ae954"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "3ede2c0809344d04e7d0c43d89ad8668"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "002f80baf51fd6a577740be784e2d39a"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ed6df6df766168869f622510279dbed1"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "42e826208f77bb9859a43384f3203368"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "64b3e4d98ef996219d0a8103385a3ad1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "49175a8823493dc53cb7ff6396979140"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b692cc99b8b85ce906438e96debed846"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "85fc9ec3bfa6469d89db30570897ccdb"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "5153019fcbea3cd274f48a4ef9faedbb"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "7cf885af1655994543ac4ffed0ac45ab"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b039632b2407579a1931fcebb7ad32cb"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c37bfc8121a15e16c5c16f46123c5da7"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "d868aec79b66cb3d0f683040342ef1a8"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "3e74bac6f48dc0aace16b87db7f95f26"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "ca74ca37c347e8336c273446138761e5"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "22ad16559b0868413d37420c382f217e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "5df645f6e5fce6e3ca2580fd1b5a1b73"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "17f5cf341fe4a164ca150acb0b71d962"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc267b5dda3c00ed9606eb51a81955fa"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "2feef3aed6d2c496bf14acf11f6e7d76"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "461991e3674e917ce48af8c5dfd8708b"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "e6d58e5c34d52294c282c83e9dcf03f7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "304847964f7a855c3246a6641277c8e5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "780d396d5751c11b125c8e9d1a51077b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ebf1cce79d19f0ebfa8296fb530190dc"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "8d4b0b3fae737401f089409ba1d159ff"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "72684940c3b7264f8f1b34c2a71a2849"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "0c9c02d6bd70623865b2701ca2c0dabe"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f246f302e612153f49104d2ef4750416"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a416a0d57a81da686ae2b82dd99c580a"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "84e09862c834a644e915823399289d91"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "bc7122aa2268b553868269f226f5743d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "61de315c1e031e7e83b4415c7be41785"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "fe4c94a6ca6d9cf28f747a7c5f694f9f"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "742a992769da0da379aa73f9f7435aaf"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "40441b549b34c7edeff9b883af317ab6"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "7c55d171fe23142f7f3b6cba956cb11e"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "a997291308163bea1e259d094846a871"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "eddcc42763620567635886383a62fd07"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "836d16c21c04f11e8382ad861523ea3a"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "ad4b8317864f57b4904f4ebe92bd9647"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "7b77afd514562047fa8ebf75eb6c3ffe"
  },
  {
    "url": "timeline/index.html",
    "revision": "1a65270e8ae9a97e03f394c70339a694"
  },
  {
    "url": "tools/code-review.html",
    "revision": "7449d271dda36977573b1a256a7e6fef"
  },
  {
    "url": "tools/docsify.html",
    "revision": "8f338ed857a7a8707aaedc5bc1c78abf"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "c73f5b3b25283851d9f6415ca7aadeff"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "fd6955e8708305d695bcc617ff9b74c2"
  },
  {
    "url": "tools/gemini-cli/custom-mcp-with-gemini-cli.html",
    "revision": "961c08087028ad8c690142746d5628dc"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "3a1b19807f999940cbeeade67cca1152"
  },
  {
    "url": "tools/gemini-cli/mcp-with-gemini-cli.html",
    "revision": "05c32da965bb4301e9fa815c34b37030"
  },
  {
    "url": "tools/gemini-cli/pro.html",
    "revision": "4d2cf4c820085bca8671b5a9df4d2e06"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "a4b7705c00fef2c895830289fe7bfc39"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "7e2e48b32383d2ba2c17c3ff7cbf476f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fde3fb0466fa05973757d16dfcd6e210"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "95b549cfe799f8a58adcbdcab9b555db"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "aa26653bbd17a34e2559696b89954680"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "39bf54f791444e5ffba52ca05cefa4e9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8cf467d82c75003213a238010becdda9"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "cc1a786b0c2894675a5baa720404ef09"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "c8c176da601186b524b32f5ea6336dea"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "15cadb6f4c01253e70155212cdb6c437"
  },
  {
    "url": "tools/note/index.html",
    "revision": "246bf031878a0c8f9f886b53fdb0d959"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "1acfeac45fd53552981a5fe377a2dea8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "82802ab728b2690f31e8809b8b4090c5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "0a6ff60b2f1ebb0cf2955852baf5b739"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "843c133cea334280320c24526d0b445b"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "39dd9f65e17ab384950236a8e015d150"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "27dd6163e161b81c7fa08a2c98a58ab0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "34ff455fa3c46e30503a219e42e58bb2"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b9be6f116b326405627c4a5b071f50b6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "34543b7b0bd69e4ef3dbfddca587897f"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "2057228434105af857887f2b33b6e2bd"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "c633c089db2b6a31e55e398423a0943b"
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
