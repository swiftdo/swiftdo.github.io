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
    "revision": "cd4354d300a9c98d1f75b7a938dcdeeb"
  },
  {
    "url": "about/app/index.html",
    "revision": "bb2e27e8cadbbb8d11153d35cc7a0d83"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cce5693a6aa34bcdfafe2fa9c47bc9a1"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "68f01c5bfe63ca1d7372dbfd6eb0d164"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "8954fc45400e652bd15c2b3a585fccf3"
  },
  {
    "url": "about/index/index.html",
    "revision": "51fecd645c9f600f447ca6b03ac9aa5d"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "9e56ea39a5d6f36cb6dbd39db9261481"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "616f00139c41a7170b258196ad0b8c30"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "30b392f12ace8a76062d81b02be4a7fc"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "1cef9c1ffadb8c967cc438ebf32203ef"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "0b0cad3079e350ec6d804cab6edab84e"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "39b4300ba52483033f52986f6a18dfc6"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "6da158cc4096803fc6749b88dfe4473c"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "5a7202836cb12ac2bd225a04b3957c4f"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "4627ef0eec9fed55229dd38ec8f30a64"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "9607423cbb8bc61375f9f34bca5f8a62"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "59f75658918c23c859f5f397b857b014"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "50c8e9034ad8657c7b54f181d4b4870e"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "8b07d3799faca55e810d9d190c1a1923"
  },
  {
    "url": "algorithms/index.html",
    "revision": "c1f961c356e5a0910373c69b4a6f1f79"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "95cdc40d9414f9f498029415fbd6a1c2"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "b9f5a0177a75b1151974de1e9f1bd930"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "96004a0b0121a3529ee8c7c3f279f9d5"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "379beddf38e5b113f3d03f685c798f06"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "e0c1d67db3602a1cbf32134700601211"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "89376eaa4784489726950af758516241"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "3d93e453e00ecab9c1a2572b42cd11ef"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "a97448c06baa3355800327cb5e64963e"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "8e4a3f79df3481e0f0602b3de6a3f4b8"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "c2b13d653f51a72956ebbee2dac08854"
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
    "url": "assets/js/103.afc9f216.js",
    "revision": "d037ede0cc16fb8360a2eb742c17386a"
  },
  {
    "url": "assets/js/104.4a7caf91.js",
    "revision": "d0a2c1200a8144f33a54c4bcf27b501d"
  },
  {
    "url": "assets/js/105.cd0fbb91.js",
    "revision": "75716e6604d9522daddc88dd015b1836"
  },
  {
    "url": "assets/js/106.51873ffc.js",
    "revision": "df3a5a8fde6faf7e3930aceb45c1a6d1"
  },
  {
    "url": "assets/js/107.857041e5.js",
    "revision": "5e7168805bbc7b503bd82cec04ef74ec"
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
    "url": "assets/js/110.03a740b1.js",
    "revision": "955e022a3f3817ce07e699176c77da66"
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
    "url": "assets/js/114.fba3f4ae.js",
    "revision": "df9f4c338ddcafda862d5650b7892456"
  },
  {
    "url": "assets/js/115.5d9a1915.js",
    "revision": "68c60ece2587a8b11606e2dea1344484"
  },
  {
    "url": "assets/js/116.dbc7e7c0.js",
    "revision": "2086373326ffaefff6036980d2fca77e"
  },
  {
    "url": "assets/js/117.cf93de48.js",
    "revision": "92ab953ba1a47d5b8387e41ba4f576e9"
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
    "url": "assets/js/120.d7fdbf33.js",
    "revision": "08ece16262d3b1339bc0f3762b5f4ee0"
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
    "url": "assets/js/130.dde1aad2.js",
    "revision": "07f1eab3f1fdd1e7e2caaee6e9474cbc"
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
    "url": "assets/js/134.0a7b7cea.js",
    "revision": "93c7c404860f77d0e61e46688eeb0748"
  },
  {
    "url": "assets/js/135.14de62c2.js",
    "revision": "9dd2aceebe52bee5c538a1f5c76e1297"
  },
  {
    "url": "assets/js/136.0b1841e1.js",
    "revision": "b2362426d351ac5e913de56761ea045f"
  },
  {
    "url": "assets/js/137.22988cff.js",
    "revision": "228b2b4f380eeb7f0c4e8ef5599a8715"
  },
  {
    "url": "assets/js/138.cfce5238.js",
    "revision": "6efdd15e32f9ffd98ad3ee83743359dc"
  },
  {
    "url": "assets/js/139.d54917b5.js",
    "revision": "624ade89dbe7025c17ef3ea4d15b1245"
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
    "url": "assets/js/141.c167cbe4.js",
    "revision": "a8d8c9708e32ac9585b42c4744018f52"
  },
  {
    "url": "assets/js/142.358ff8b5.js",
    "revision": "1802dc50c2a51f07ad0f11f571f621a5"
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
    "url": "assets/js/145.310ecd6e.js",
    "revision": "2c6485e02af39fe67f2910a23b1e06c6"
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
    "url": "assets/js/160.e5e29f8a.js",
    "revision": "c593a79960ca4c4651d83a9c66e28314"
  },
  {
    "url": "assets/js/161.c8c7df2d.js",
    "revision": "ffbfd57b3d16264f75d21c76640e845e"
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
    "url": "assets/js/170.c1245d20.js",
    "revision": "eabedbf11def4ee8926f8a26f267b0b3"
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
    "url": "assets/js/173.3b85e1d9.js",
    "revision": "046f4fa54a36f5698ba793b8c5d668a7"
  },
  {
    "url": "assets/js/174.dd7594cd.js",
    "revision": "48254261b822bba61c4190937aabb316"
  },
  {
    "url": "assets/js/175.b841d3d0.js",
    "revision": "5be2f05b321aa61fdc210c2e8b99c704"
  },
  {
    "url": "assets/js/176.87d53a53.js",
    "revision": "a36ac646da33729af650f7e38132b6ba"
  },
  {
    "url": "assets/js/177.36c00203.js",
    "revision": "eecfc965a9c02aaaed0d10c77e05eeff"
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
    "url": "assets/js/180.b947a8fa.js",
    "revision": "ea97842d84f0e3fdd1da269f868fd8a3"
  },
  {
    "url": "assets/js/181.d96c9e05.js",
    "revision": "161aa27d79a0cb403b3ff5b072988702"
  },
  {
    "url": "assets/js/182.e42a8b67.js",
    "revision": "05a6489335218d343f0ed9ecccd0b8db"
  },
  {
    "url": "assets/js/183.e389d769.js",
    "revision": "d712ff655ae795000d23ab65b7fb9763"
  },
  {
    "url": "assets/js/184.84f3edc2.js",
    "revision": "7a7802179330125401c1c43c7ee1fd57"
  },
  {
    "url": "assets/js/185.609f2c87.js",
    "revision": "b5f89bed8d8d0a6dd8c4a9431d563427"
  },
  {
    "url": "assets/js/186.91d7af2e.js",
    "revision": "9f2b8da061fcfbfd616f8aeba64c88a9"
  },
  {
    "url": "assets/js/187.77e55c86.js",
    "revision": "ba5b237acd8e28346b0c658aefc51246"
  },
  {
    "url": "assets/js/188.8b4eea8a.js",
    "revision": "6dbab4375227cb4ec2d5b61970a9f80c"
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
    "url": "assets/js/191.53994fef.js",
    "revision": "727630a5aaa498feab0b8eeaad8d2290"
  },
  {
    "url": "assets/js/192.8b0ec8e7.js",
    "revision": "7109a8c1109032c06c7ea36031f0fa0a"
  },
  {
    "url": "assets/js/193.f319c64c.js",
    "revision": "38e27d7f43fc61aaf36ac96b4ef007e1"
  },
  {
    "url": "assets/js/194.b22436ea.js",
    "revision": "54dcb990073950138471e61d1326f504"
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
    "url": "assets/js/203.0d33cc4f.js",
    "revision": "e6f222a6007f3c688397c0ce1f5c8578"
  },
  {
    "url": "assets/js/204.c1771128.js",
    "revision": "6e2a2411292290036fbba5aa41bdc6b2"
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
    "url": "assets/js/211.50038641.js",
    "revision": "63ca01239f4f4cd9f723e5777c0566b3"
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
    "url": "assets/js/217.91958b4a.js",
    "revision": "e3f5570bfc39571921d752091daf878e"
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
    "url": "assets/js/224.0eac6e03.js",
    "revision": "bbe19885cc8b9e3740ff9411319c30e3"
  },
  {
    "url": "assets/js/225.57e85a16.js",
    "revision": "47013341bf9863041572ad68c383f5c5"
  },
  {
    "url": "assets/js/226.b600f8af.js",
    "revision": "f0a130bf57578a12b5858eb419ddad89"
  },
  {
    "url": "assets/js/227.497b5f4b.js",
    "revision": "1de4c1268696bfa895dee71d4e1cbff5"
  },
  {
    "url": "assets/js/228.11c5e3a6.js",
    "revision": "c28f1dd1f4e7b027be83531c0708e448"
  },
  {
    "url": "assets/js/229.b6623815.js",
    "revision": "f578aac7b538ded74e6d1ed71ac20b0b"
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
    "url": "assets/js/232.cc132b84.js",
    "revision": "5aff7ca3baed77cef03c3dc9a8a51968"
  },
  {
    "url": "assets/js/233.9786a87d.js",
    "revision": "3d7d628ff7fa8f95ee328e07e2ea4b5a"
  },
  {
    "url": "assets/js/234.413d54be.js",
    "revision": "7da54b22c426690c0d986714a7e52fb7"
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
    "url": "assets/js/243.f87c36d7.js",
    "revision": "527e33c616074dd14d0b183a14e969b6"
  },
  {
    "url": "assets/js/244.a779134f.js",
    "revision": "f4bf6bfa1190006e357b62ebd766915d"
  },
  {
    "url": "assets/js/245.fde4935b.js",
    "revision": "96d1d4e601cecdaec12f1f7643a6310b"
  },
  {
    "url": "assets/js/246.490b3594.js",
    "revision": "9fa03199cec99868f79763ea3a798e28"
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
    "url": "assets/js/249.d75e6bb2.js",
    "revision": "cd7b48907900d117bc207acf64b5bc53"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.bb090b81.js",
    "revision": "9dadacffeed7880ceef92bfde35bfb9c"
  },
  {
    "url": "assets/js/251.8c95d6e2.js",
    "revision": "5585fd1919367e724e78c4f6d6ada90b"
  },
  {
    "url": "assets/js/252.5e00e9be.js",
    "revision": "314bb7935b02a63c736fbf2ab14bf9f1"
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
    "url": "assets/js/262.40052bec.js",
    "revision": "9b0eda0b084b1a4c5f159e938fde840b"
  },
  {
    "url": "assets/js/263.1c729b6b.js",
    "revision": "f66228adcdfea2fdac03445a12540b4d"
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
    "url": "assets/js/276.04fa26a8.js",
    "revision": "4293178dbbeded774df943e4d8bc0869"
  },
  {
    "url": "assets/js/277.aa3a0184.js",
    "revision": "c16f90923aa9b1e7103e4e01e522bd53"
  },
  {
    "url": "assets/js/278.1d517d3a.js",
    "revision": "612ae2661122eaf98d5d0acc50496e7e"
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
    "url": "assets/js/281.7adbb21c.js",
    "revision": "eb9a38f7b08244074ccb7cb4fd61663e"
  },
  {
    "url": "assets/js/282.693f2be4.js",
    "revision": "fcb768c892a241098fc102c56b6915a9"
  },
  {
    "url": "assets/js/283.579e0bc6.js",
    "revision": "53a266c069120e98113289e4af35ec8c"
  },
  {
    "url": "assets/js/284.304bddb6.js",
    "revision": "47a9309303f7c9c08f65b72fb22c1704"
  },
  {
    "url": "assets/js/285.89e60d1e.js",
    "revision": "1ba46d0ee26cd5767ecb312e6e795aad"
  },
  {
    "url": "assets/js/286.12636e1e.js",
    "revision": "1e8a26a171ff44414e8a5cf812b399b5"
  },
  {
    "url": "assets/js/287.5dc320e3.js",
    "revision": "e4f19ef9546761b6efe0c171e593e2e0"
  },
  {
    "url": "assets/js/288.4165e021.js",
    "revision": "218ce771bcf7d6aa34c78ef831db83c1"
  },
  {
    "url": "assets/js/289.e264bfd9.js",
    "revision": "8756b5177ad58b901a5fef2ab028f34f"
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
    "url": "assets/js/291.b879ac6b.js",
    "revision": "a097c476f8ddf4113caf3c12773e7ae2"
  },
  {
    "url": "assets/js/292.6c1bbef6.js",
    "revision": "92a91da1417a04155f0809c553d85810"
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
    "url": "assets/js/295.22436ec9.js",
    "revision": "93b60344c072a6e280cd9b1b1129f0bf"
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
    "url": "assets/js/298.6ee81bf7.js",
    "revision": "f8e72502becfbd96f67e15b1cbfb8c2d"
  },
  {
    "url": "assets/js/299.3a49826d.js",
    "revision": "45b053143f9bfd912e500eeafd51f517"
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
    "url": "assets/js/301.ac8527e0.js",
    "revision": "6adfd1cb7c031122eb5beb98f6a23277"
  },
  {
    "url": "assets/js/302.dfc85cd7.js",
    "revision": "51bfef48304df59e869217006b85ee42"
  },
  {
    "url": "assets/js/303.9b5a3050.js",
    "revision": "465a486efeb8565bcc79e5e1482e8af6"
  },
  {
    "url": "assets/js/304.7dd0b67e.js",
    "revision": "1002d86ce0fe7337121c73e98a836e9c"
  },
  {
    "url": "assets/js/305.7ba25cd2.js",
    "revision": "3802133dec3928dd21fab29cbb48218e"
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
    "url": "assets/js/308.0e1c7160.js",
    "revision": "896175995ff8a5f3400b011adb239dca"
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
    "url": "assets/js/310.3bac35b8.js",
    "revision": "30307c4b68fe9952576e6cba2a0c79b0"
  },
  {
    "url": "assets/js/311.a3fa1541.js",
    "revision": "6eb338204f0c8ec599efa27fa0721e92"
  },
  {
    "url": "assets/js/312.ce9ec063.js",
    "revision": "75255df40320e3721334aba70ce86d69"
  },
  {
    "url": "assets/js/313.6bc631a9.js",
    "revision": "1616f41b79468798814365e3eb1ad523"
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
    "url": "assets/js/316.f04268dd.js",
    "revision": "68efad82b668e4fcce8c7bf8ac94515f"
  },
  {
    "url": "assets/js/317.fb39c7c6.js",
    "revision": "0b24a7cad8e2b66b4bb32c31f7e32f5d"
  },
  {
    "url": "assets/js/318.68f4aa03.js",
    "revision": "077e0c90e352b5b05d7b8a6bb0bf17af"
  },
  {
    "url": "assets/js/319.41401923.js",
    "revision": "f209e0f1ab9ad68eaae5b17c0fb83099"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.c827509a.js",
    "revision": "be6751900caa54274cfe913c8348a5d9"
  },
  {
    "url": "assets/js/321.148eb33f.js",
    "revision": "949e96e2fd801ed01d09713c85067a45"
  },
  {
    "url": "assets/js/322.65c871a3.js",
    "revision": "c27036b07e1d4416e6b9fd4742a8acf6"
  },
  {
    "url": "assets/js/323.c781b635.js",
    "revision": "900ba323db88cbb125ead24dd7ab5c22"
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
    "url": "assets/js/327.54bd9689.js",
    "revision": "1a38bc031747bc1759b9c033b89a4915"
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
    "url": "assets/js/330.096ddcea.js",
    "revision": "72cfe6c001829f26a4736dea2ed3e772"
  },
  {
    "url": "assets/js/331.99e0a565.js",
    "revision": "2965863b53844119351088649cf4c532"
  },
  {
    "url": "assets/js/332.8dba97b6.js",
    "revision": "7636045dc76fe44e138ab369e8538d85"
  },
  {
    "url": "assets/js/333.63b22958.js",
    "revision": "eed1b680834e919d12e5cf48d0e02019"
  },
  {
    "url": "assets/js/334.ae5c7b9b.js",
    "revision": "3854be03287e379a2d0d4fc4c1b51141"
  },
  {
    "url": "assets/js/335.5bf2fe33.js",
    "revision": "32619f527fe558ded4b28a1a3bcb5d6b"
  },
  {
    "url": "assets/js/336.2d355ff5.js",
    "revision": "9cc7d3c01f3087fb63e1dfa94b526b9d"
  },
  {
    "url": "assets/js/337.ae994646.js",
    "revision": "d09f040ba0f59e8cf45e3e142bfd69de"
  },
  {
    "url": "assets/js/338.acf7c079.js",
    "revision": "6edf942a19e7f7033101b71b595a5704"
  },
  {
    "url": "assets/js/339.3608cf87.js",
    "revision": "255aed6413e62c1c280e8c1449082e4e"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.d6fda718.js",
    "revision": "9c38f980b9b7278b6d22d1c5023dcdac"
  },
  {
    "url": "assets/js/341.5edeecf0.js",
    "revision": "8d4a9ff5013ed279632a0183ad66827a"
  },
  {
    "url": "assets/js/342.8f131726.js",
    "revision": "0ce1c35204006ec95043889debd4bafb"
  },
  {
    "url": "assets/js/343.6e759280.js",
    "revision": "ba18b7818cf19b9786bed4855490a032"
  },
  {
    "url": "assets/js/344.95bee7ec.js",
    "revision": "090299be070dc66f9c9c112c64acbe06"
  },
  {
    "url": "assets/js/345.eb91547c.js",
    "revision": "8f802ce90dbeabed061b2d5058bcba15"
  },
  {
    "url": "assets/js/346.03674038.js",
    "revision": "46907ea065df305c107a0265ec9a24cf"
  },
  {
    "url": "assets/js/347.f8d6a5d4.js",
    "revision": "61feebc75c47ec33257c3820cb8fb274"
  },
  {
    "url": "assets/js/348.91dc8213.js",
    "revision": "50054f9206fad8ea1bddb1831f8581c9"
  },
  {
    "url": "assets/js/349.2a0d20be.js",
    "revision": "969e93b6115153b230730c82e331d807"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.2dbf3297.js",
    "revision": "210526a9a4535d94b487c54b0d7783a4"
  },
  {
    "url": "assets/js/351.142f48a0.js",
    "revision": "bdc0ba4daefb5c54530f2d0ddc2cb7ee"
  },
  {
    "url": "assets/js/352.5e4ff587.js",
    "revision": "8d038c95ce40b58930c06fd9fba132a2"
  },
  {
    "url": "assets/js/353.9b92e1f8.js",
    "revision": "d017cbdb6726106b1419942d10bc038f"
  },
  {
    "url": "assets/js/354.48e76a07.js",
    "revision": "45057082594a5379264d052c4dc1528d"
  },
  {
    "url": "assets/js/355.f2e45053.js",
    "revision": "f5d336f680c600d51e8b6fa86664b292"
  },
  {
    "url": "assets/js/356.2d85acd8.js",
    "revision": "eeb086a4d19f9fd3d7855a7ee26327d0"
  },
  {
    "url": "assets/js/357.b4d82677.js",
    "revision": "79af9999478432fd5cb746576ab0881b"
  },
  {
    "url": "assets/js/358.a615082f.js",
    "revision": "89b03f8442be569c46982d6d2ef1e7dd"
  },
  {
    "url": "assets/js/359.e3fe7f4c.js",
    "revision": "f53a3f5804043591f4e4adbc61ed67ae"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.7a7e538f.js",
    "revision": "8242a5262c414b0c7c5b78bbf22982e8"
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
    "url": "assets/js/40.e201f327.js",
    "revision": "901353ea6ff4601492f4cf533637cc57"
  },
  {
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
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
    "url": "assets/js/46.cd4455af.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.61d739b3.js",
    "revision": "c8dfc7d6d32660a7179e16dfa6d6ce04"
  },
  {
    "url": "assets/js/48.8a593d31.js",
    "revision": "384dfcdc16424720060b9d39fc3c2ee5"
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
    "url": "assets/js/50.c0f788bb.js",
    "revision": "e6a25c258d100ae96fcec85552e4b397"
  },
  {
    "url": "assets/js/51.2e50490e.js",
    "revision": "1771bbb93f776701a77d6e36850272c9"
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
    "url": "assets/js/54.00d09fb1.js",
    "revision": "72d6477d5b3cba324d689ba2f6f079d2"
  },
  {
    "url": "assets/js/55.9b065e75.js",
    "revision": "0a3ad6c69a1db8c9c18bc530f04ec795"
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
    "url": "assets/js/64.bc757760.js",
    "revision": "cdf1d346db5f59f2ab4ca03bc62c0905"
  },
  {
    "url": "assets/js/65.89c15451.js",
    "revision": "a6d869caf981e820a7866e6272bfc22b"
  },
  {
    "url": "assets/js/66.e129e0f1.js",
    "revision": "0b6f25f553ffdb0256c8706de2055a2b"
  },
  {
    "url": "assets/js/67.1abc7bbe.js",
    "revision": "c4a95c7492772cd5d280e01d2b29e528"
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
    "url": "assets/js/76.0ff9df0d.js",
    "revision": "7246170424142585c10a9eddbcf698c6"
  },
  {
    "url": "assets/js/77.3b9e9b3d.js",
    "revision": "7a6c5f96d308e72e44650819dc904a7e"
  },
  {
    "url": "assets/js/78.a69d6809.js",
    "revision": "e94186570f4c762e4adf3f6a9c0535d3"
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
    "url": "assets/js/82.4c6db3cd.js",
    "revision": "2f21569d958b2e05b073c8a7f6f8c602"
  },
  {
    "url": "assets/js/83.6990913d.js",
    "revision": "ad59bce45b7dfc917eba9c65ebab59a9"
  },
  {
    "url": "assets/js/84.df7691c1.js",
    "revision": "8e5b7f5cd2d32810c3d1cdbc9d442e29"
  },
  {
    "url": "assets/js/85.73fcedd8.js",
    "revision": "e52d657164e295fc70538012e3aba7b5"
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
    "url": "assets/js/91.b0d3fc37.js",
    "revision": "e6142411947f94943ded1ffe4fd1a9ff"
  },
  {
    "url": "assets/js/92.dfd70d28.js",
    "revision": "24edd23de97053da2bca8c88478fee86"
  },
  {
    "url": "assets/js/93.20ad7085.js",
    "revision": "fc3dc403d4ec79a1d24fb381a59cc62b"
  },
  {
    "url": "assets/js/94.3fd59735.js",
    "revision": "7b8c3c754f5cc6960e8d3b98d933b2c3"
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
    "url": "assets/js/99.7642f7cf.js",
    "revision": "e5c2055f4dba09557687bd681b724dee"
  },
  {
    "url": "assets/js/app.df0ce565.js",
    "revision": "a5a676305acc6b1abdbeea81ff2a90e1"
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
    "revision": "edc02fd4f73036a49d234bb29e03b50d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "88dbfdb57e9062c1c52141b6869d08bd"
  },
  {
    "url": "books.html",
    "revision": "3c43cb4806a6e2e67c88aafdd2fd3898"
  },
  {
    "url": "categories/index.html",
    "revision": "c790af95fbff51a1f8b1b2946e4d10a5"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "b2dbf90a3d40f2a6e29a1e7900d50fa4"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "f679d6921f7a3bcee626bce6a4e42c1e"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "0b431d238d4eb16bed95c9f0551c31c5"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "597f4a0a27ff3a0ba9acfdf4cfc6c138"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "891320cd45f7080b4fcd3ad56f32690b"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "f7f344dcbe0441a3920444bb06be2c6a"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "806d074fc4b38486410ed168eabc6498"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "ab22adce797b2cf1ac8f4de1abe665a3"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "b7f9c385abc25eb51e62597c19121fe4"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "6cd2af7d7c5d8c0cf21c7424a6737763"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "8974958bcf13b1359670e11b41efb5b9"
  },
  {
    "url": "deepseek/index.html",
    "revision": "f3ad97f17dc790c14377bfd218bf181f"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "b61ed8f7a50f44311c1b242280c6f619"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "db3e3a33038fa7aefde04897d414e4cd"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "9027e4548defec2dd3ed0fbb42a4d682"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "5a4ba738b375337befe08a7a198ec6bb"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "d68372b8b7c38e3c43ae72e43051e0eb"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "e13319b965da505a3432906bbf9a6993"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "4a93187cf2937a5271833820d0499225"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "733e195a29e80ca33b6eb960885ac38d"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "f2e290e577f8987917019202ae0d9663"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "2628614c45073ded467775dbc0c7091e"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "78cb573e96ec9f88953b9c6473ae3388"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "e1d45e66e1bddf8f8aed3bbaaf25d3d7"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "3cc7a9e2f5a8a28d196f3f1f1d53046d"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "61c4ccab100c12563c6c6f2718b833bd"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "a87a35c2e8812664490bee15ef10920f"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "1f6b58a30ea9c207dbc5ffe3089f987e"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "60f2c501fa9418838b9ab29d25073cdd"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "ab4078527b2a5c52bb8bfc3a7a376464"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "062c8104f1ce4ae597a360203307dd4e"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "2f2ef94d5d4fd06c62d132066d19f645"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "113b28a5a8911638b2c92cf2c9a85e21"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "3182e234d1c153d30b67ea31a64aeb22"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "aa5ebdca071265f1bd6d1c1ff33b7274"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "857de8c1874b777e98bf1edbc0227531"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "7ab8eba9bad4451265848b225f966c02"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "8e820865f747af7e4e382e405b141fb1"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "688b90e788dc7d0b3c56ad7287c26e66"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "6b43aa6dd4dd360a63843beb5714b501"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "c863f76bafd21dc08cb1aaf21471d5e0"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "2c528815594e690851d9e7917b184d4d"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "af33d77e44eb66fdc587668ab590d818"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "51cee6a9f9699cf029c845c772e47648"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "9999d742823a47b5a93adc9f0000973c"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "7a572d3c4c1e832b4b47365b8b041818"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "05384dbca3d64fce42423cdc0600f726"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "7549a074f9500ec0235da52a19aa40be"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "b52dadae5a9187148a7b8deaceb4f117"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "a620f0ca31054fe65d0baecede1685c5"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "10ee207c35594be50acba6bffb195708"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "b0fcaa700d681ed7a140d925eed2627b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "b206b0a1ccd6289cdf9700e9a02f30ce"
  },
  {
    "url": "figma/index.html",
    "revision": "eb99515551390c12b5c929da28fbb33b"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "211deff77cc19ef581d1c1474760e705"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "594c7137c3132c18d26ac0d8fb6c1fdb"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "78c41ffb60d1eed5a41997b8996079d4"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "59cd798918d288f945d25fe9183e698e"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "e067cbefcff005fd2db08d9cfa5344a7"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "ddc5928e02b362abc88ab1f3be876fdc"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "64bbefd93f3f327e7f2219d019afcbcc"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "52120f75c4581b9e6b1c5e973c1a37d2"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "7ed8bd9e6cf89ecff4d1326b8d916e3e"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "d0920f4bc1407544663b57626fa910e1"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "05bc60913f43878e8472e9c28655f66b"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a44dc42ddf2e0e294bb42f9161ea3d02"
  },
  {
    "url": "flutter/index.html",
    "revision": "8cf2db0c33c104fda6a7b026cf939619"
  },
  {
    "url": "flutter/point.html",
    "revision": "6ea4d8c68d52116f1d64954338f0cfd2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1d7878eabb24aa30d45fe6071e941595"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a545ce2dc5a4ab027781ae50a5f998b6"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "aa173ad333e9dcf78b629ceb877c45c5"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f96c3c5773f90400fd799eecebfa2514"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "38aed4d30c831be9bd4e92e6c3abc7b2"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6d31cd369ad2c2887ca69b075b9f026c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0a863217474ecbe05c0ded35068a3b4c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1b714652061109cfcea9d2ab30ef8e6c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e535f8a878cf407f8088f454f2cb21b4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "59a5b55494730ee27631469306b8c895"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "fa3dcc7354ab67b2193420b4e119a3d7"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "21fc035b5d40e172cfe7537d02ea2eab"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "8eac41686b4ebac8e1066e1a7e8fbe64"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e9bdf77dd99a911c1308ef15d4df500c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "b046a6ea435eac2008ad613a96dbcb73"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7e7786be7f9c3888270a62ffb4cb5550"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "84f85a0b8603755f2cf293da5e5ea934"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "1a57eb57ae24cbbdd476898df1ba2bda"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "05742b89d223e491562c9522869b3df4"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "07ef06838fbd750f57c8f9db9b833675"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "3ea7dec7a9088958fd4003b97ca6f6cf"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "14534993815a39ac0a9bb8918cb8415a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b3e53b06a21c2c15b6648fe2dbd0cbc1"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4ce77102e12aeec3daf242ca75933b4e"
  },
  {
    "url": "haskell/index.html",
    "revision": "be0830dc151290eb099adcc8de16542c"
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
    "revision": "325daccce0ac3f4416accb587069e82b"
  },
  {
    "url": "java/index.html",
    "revision": "1fbd47a678fed9ab74403bab89ea43db"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "6b0807ebd159943dbcf97f09f4bb50f1"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "b874e5e0e110fdf2190d902b024538af"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "c3eb5548f1791670f7b7e2951c08ff18"
  },
  {
    "url": "ops/index.html",
    "revision": "9d9577882c9cedecf688d8427e98cf4a"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "e2c90e957636ceccee71cc9710278951"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "824d379a5d5544709447ae179631ea7d"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "1642f3a5ddb2a38c18063edcd4b32637"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "a659265d5e4343e63bf02568dbf4b8bf"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "06e56676b2c68759e1d1ade57ff2f4ce"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e59fc6addb2b30229c756cf1b3b78178"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "3544453a381345b9813c465404448402"
  },
  {
    "url": "python/index.html",
    "revision": "a8f81546cad5e142fd574bf20254d3fe"
  },
  {
    "url": "python/poetry.html",
    "revision": "0962a9de5d0748578e84bd519653d1f6"
  },
  {
    "url": "python/pyenv.html",
    "revision": "f223571b045b7771dc2c5a4b169d425c"
  },
  {
    "url": "python/python-ase.html",
    "revision": "019580a6c9c0e037f4ec4d9894e89447"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "c18668e736a2ce3a582f13770f53bc44"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "73d1facc54af2951ae4148939c28c8df"
  },
  {
    "url": "python/python-file.html",
    "revision": "87c8178c360bfb6b3dd3a6c48bffb3db"
  },
  {
    "url": "python/python-function.html",
    "revision": "2baef3fc1de4bc498e3c8c468f72e59b"
  },
  {
    "url": "python/python-generator.html",
    "revision": "8ff81df5f4250213085d3310dc07e5f4"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "03cd220a59d6c9b22042e951b8b188dc"
  },
  {
    "url": "python/python-module.html",
    "revision": "c2aef620070319e11236c65680dad0c2"
  },
  {
    "url": "python/python-string.html",
    "revision": "2e148d298f96ad102a71456971fe7625"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a79b2cde190d96b778deb3ac58cfcf87"
  },
  {
    "url": "read/index.html",
    "revision": "3c83f3c69ed335c972db71dd3a1f986a"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "8888d395d59ba5d9b00298bd04f4b115"
  },
  {
    "url": "swift/better/available.html",
    "revision": "9e2e9cf670502c08f6a72a009575a9f2"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "93707d5bf30608ebdee161fe7b7b959c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "a6b4d7f407ceebee7ad1dad7c95f1a41"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "85716335661a111da7f7d30daa0b935b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cc01abe4deb11869ed1fc0e794082a36"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c2cfc3af8a3e00c58a142f461ee325c8"
  },
  {
    "url": "swift/better/last.html",
    "revision": "1f92554db2727f19ab8b6e09c93092dd"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "54207c29aa34a59936bc94ccd9cf65c3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "bccce616c534e625b58a36eb3bcc417e"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "eaf7af5209e59978cf8608d6b3cb7bd7"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "b1757357d41f6e5276aeed94cc41275d"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ab5ad2c6be9ee612653094d57ecd137c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9c46daf4b64055ecfdd92689feef7afc"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "d4f5924a83ce2d34cfcbacf6bea83b45"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "995c81901622ca00486ad6b0c8793ad0"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "456f9d18a1969ceefb0174228d55e40e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "821dd6416acd6110d10f746f8fba2e9e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e633d4ce655334e54ad88d4ad4c4dcdd"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b98eb7a7b3a074f96cf8ba5cf8f77bd8"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "0f16b7760a444a3f901beb130d2a282b"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "062056966f3bef698e6e93413c7d6bf8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "2e858e204868dcc6d01c70b473068806"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f919b13c296b73460f25cb03b5d151a2"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "bbcf80ef9a9ce063877335b19ee0c348"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "239427d9df5d4aaa930db0a5e8812f25"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "5adf3856dfcc457bbb6052e2b8f814ec"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "5587ab4c6beedb064b63c51ebf7edfa0"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "114e047c5fc5601a9446c771a74a430a"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "85724baadeb7f300cbec02c1f8b10cb9"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "32e7e51db050a874f61c050340415f91"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "2905a75b5cbdd8cc7b413984fd16cc84"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "a82fc7cc17a8b5c8640c8925ef62cf23"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "2c9737416e15465fe6c5eee2c1db5b1a"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "cc1f4d239f4371b59a89cfd97fe8a221"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "4641fc9396e993057716c2d61d51086f"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "608fc1c042d8033c933fb6bfeac884da"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "93c49da9bf723a7e64632818d11867a0"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "1c82d266a6588f49bfeb6c34417e5dc0"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "b5ade36d785c80a1c05ee4eda2c9353f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "dee259c97081c7eff4c8a4fa29de2b67"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ec9b84304b93d23ba0cf606d2ce4c1d7"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "6a549c25683940b05ce07398ec9efccc"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "223cedb8034956578c34e89f684492aa"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "5d26e92141a53b2aea1770c47cfb550b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "65ee2632dd3e9d0243c6fe865760d90a"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "e111b4b0efe84a305389c5da9416a30a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "74499bc5c879655542a84878dd982035"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "cfe6987b725caa1ed5014f18cf692fdb"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "c4d8dd22572266baedd3aeed572f3af6"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "013d09a36b18a3e9f33b6a9eb4c64d6e"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "a65435c8515f4e7edad2c12d63c93b07"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "94c0bda5f452cf8554687d610b7a6cd6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "13e9e13e58978814b85eadb73779b3fe"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "cb7101e0751fdfe87b4a94cfcc00f8db"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "6fbf0aea9e6be5a45488294a4c14baeb"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "679f407c1282ece2fd6766a58b9f6146"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "7829541cd9a9fe2ca589afb39ccf44ae"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "8f171f3a2bc90d2235cd6173034537b6"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "8d2c4ade7510a96b4953e28cd4b8a117"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "944820c6941b0bb48c373009fd1339f6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5e2b59e11d1e00184c2391b5f143e567"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "090e7f4432de83f7dffdda581b1596cb"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7246256b417b458f40cacf111ff0ac29"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "799bfd4b0f227a5a299a19d11d6a08af"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "49e92c334d9e322457cba48d8b9d9f81"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "72026d86a505611d15cd3bdba2ccff35"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "97282d8d8420ab202a023c59ee893712"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "031d6d080a1fd721db8d30285756675e"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "6fe59bf3ef551a1ece8f0121a6583af3"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "25692c32bc1913c22dee9d04ea7c630d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b6f74ad14fe8202381d5df9524060ecc"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "db7defffceceadc3ef6c4d478bcefc4c"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "ce8f106d9bf1335e7d9435e2ab9eaad3"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "0b38023ba65baf2b980b2ade1c05924b"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "8aae2728c7963df44bd38e9a309f8ace"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "9ccb9dbeeadaa127c3e67e676ec52a8a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "380ddef4f9ddb7e9e51370e8266d0bd5"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "696d9162a2506262c60df88e3b4d4014"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a4fc9144d8ca51b04d23fcff0d080992"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e5a26f6de418553f562c26b205437b19"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "420668bb0ec8b5e96dd972467645de55"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "29835f97725a4adee403fe84f9c54e2f"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "5abd29114638c2a4e1d53009b414a394"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "67fff72df71346ec4f2f438a45f2de1b"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "75ce6ec650c418c3e51bc7996520f81d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "46549bdcd81f97536bf7a7bc0c8fd625"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "cd08eea928f49ecbd54d71fe5ebeb27a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "c10d94d15cb0e01ce7e42008daefd293"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "584d255f1fd1562f218dca2d0f4dcf8e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "f4228bf0f924d3a1f8b4c78ff607a64c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "9d6e70414f5b2e31f4e41c42ce954fe5"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "8614c0d306c07c63cd5b76f9da24590e"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "f7b624d01018fec163cca2a4ef4ac3a7"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5586092bf781ad46a6a4238850103de8"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "66c2afb36289b3543e3fa491afe87704"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "578d54c790d138e8e5038077528e443c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1516900a61cef120846499c1479979ef"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "d4909c63174afccc1a12dd521bd1a304"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "e8fc02a30522591f371ebf4c4f75aca4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "822e790fab22a9bfcf0b7504592036a7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "837e6aecb4c23dc09e343220f7e68fb6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "dbbba81928ee7a08a680ff9dc758c226"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "603ad32e983513797e7ce7932e3cc1b1"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "779fbc809794d4341b3f7b5f55737d2a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "54902c16ce1b706219d4b7b5730247d2"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7a4d22bc3c5493684345f5896199fdff"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "3ba5e26d8f434efd61f9d4070ab879be"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b8c1d18cb11620da3d53fbbd1559691a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "6f53b6bf33d1ee77a7fb846239d4de05"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a5fc7727ad4c7e0583ae254a71a6a5f5"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "adfe9caa0fa0d8ba18b63ccf60680682"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "e0e65fa296b77afb4f499b2e7f8a62b4"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d9bf07f9ac3035a200d5c753630db5cb"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "461af7abba7dfc4a207c24ae7e4686c8"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "d71e3ada0a9306fd97eda8daeb5d1465"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "25151f6d9771adc35ea6cccb3bd9a4b7"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "230808a5c025bd24bcead1b7282810de"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "eb8b599b48c6b09365ceb9fd42f93d1a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9bb8c8e26e0d0ab429671c6b390cf55d"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "491c390a71d37b288139477e28b281f2"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "e21fc0434ef4e85e0081d3dafd6113c5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "a550a78526f165b71d17c30e51977d79"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "855dcdb6317ce0b2c7b3b3909694a4b5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "89be539a8297dc1f9dd4fe69fc4c79d5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "74a9c7bd0a9008370e64fb23ecd5f3d4"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "cc91ad49daf9a5897af4cb6ba2be86e5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "d3a1586cbd27bc71675541cbb5b3907d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ac09579216ec60a190a46868612ba726"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "201a79980575ce8aae2fa5edd7b1e4f0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a923ee7403f316254db1a33f1922bc31"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "1898be02ff7005e4bbe9dbe1716c1700"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "11a333d1eda98759ddfc831235b899a9"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "76d85b1e9ca5cfaada02feb327a1c7e7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "842cbb36e030479d1f3191f1ea609d52"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "088a642ac595907f5cc1cc9da86f563e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "075d2f01ff3510331cde7ecb6340eb45"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e7822318025090f15e44d96cb785c1c1"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f2212a72c844eac30b5fce09ac0dea3f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b7680784ae6ed909d6ae24f257c39450"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "31a929b634bfdae08084637d5ada6474"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e28ece6389b8ac066d9f3b117d233535"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "050faeee9afe367238338217c2bdfd01"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "e4a950a6a2a5d903988f94e1e874ccd6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7ec0c7afe063e376fc2f181a78e4bb3d"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "ff3edbe9b50f2011d6ba14633b9f9a93"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "28bc877ad0033111f85ccdda0e46df28"
  },
  {
    "url": "tag/code/index.html",
    "revision": "a7d0565f443e6d24f7e1748df1c9d813"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "a9065809f675846700d992a59e8834d6"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "c70bdd87604c8474d642b0e34e978ea4"
  },
  {
    "url": "tag/django/index.html",
    "revision": "5d326d538e2966a0396e2451d39f17fa"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "c77e5321dfa781dd986a988d0473e544"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "c85ebfdb19e79c9477d57cb971d54436"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0094a6a25076e212d433f9612ec5e05c"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "921d8479f4ba0131f65aa58a73f9ef3f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b246d86310518fa9e73bac21b7fd128a"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "dec077e769a8b21fccd3a49305f892a7"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ef8736afdd678d9b05ed65ee03c938d1"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "743d02642c7c7a1dee3c5b8a24045733"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b0470812ef21e16d10ecf7276c754ffc"
  },
  {
    "url": "tag/github/index.html",
    "revision": "02c180ded09d6a5764727207671992fd"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4d85a3e8f365c69f528b1259207c306f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "810462d649f036ababb4ec352279ea1d"
  },
  {
    "url": "tag/index.html",
    "revision": "3b584a1f58107deee77c450b935274af"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5013567a9124461fbe5bc814014ab1d5"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "fcd6327299b3488acd70151c3e3fee2c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f8536cbf1c6e0e042b26294a061e0d1c"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "c636fa83c26bb2c2e830c9a72ca3a3b5"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "41a82961e2527d29336058f6106448fd"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "0e8a89ec83986ef02cc1de6a0be2f51c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "aa2d30545a3e7262766846271d0b4591"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "616f3537f56bac4b1fda4d0189ded63a"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ba6bdfe6b9a2900f8fafa6a53659b406"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "e8ed429f6a241d943bb80fec76ab44df"
  },
  {
    "url": "tag/java/index.html",
    "revision": "51ad089c3a4d91408868b41087831b44"
  },
  {
    "url": "tag/json/index.html",
    "revision": "49087794a55248c49bb8a72f27fe541a"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "521a83f3f18e449b532fe417a62d0bcc"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "40f2de93cf7c5bde8c35e0075ae5fb70"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "29758e425009de89996dbd6dee9ad4d6"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "325970784e4ea856a1694f46fc457ecc"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "b254e6906677ff252e3f7acb183ac754"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1222cf7e313aa6729918db047a481320"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "67ae65f85cb75fcba6e8dfd4c5b00337"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "9a0ae6db79bcb1f09a503b3a6cb549da"
  },
  {
    "url": "tag/python/index.html",
    "revision": "72e5098017f8c5bc1e505b5dbd3fd647"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9dfa1781e588108cde87668930e0b640"
  },
  {
    "url": "tag/read/index.html",
    "revision": "6c526716340c0d7b9f214cb8d485cf8b"
  },
  {
    "url": "tag/review/index.html",
    "revision": "4d337250427bb41179d6e1988fe0431d"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "9bafbd576d7776b8854248e281300b0e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "85708ef7bcda786b0f9fe073bb74bde7"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "56fb38713b248a807eaf8664c2f121b2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "259904d3c646585327337ae87b9efac0"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "f3f038d05890508ab01d7b608b6c8629"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "2aa88a3ff9525b623d097bbb58d0c85e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1ffec912cd33e7ea5ae3e76689bf8dc3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4d98ac6b5b9a983cc4aefb8f1f4735b3"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5d358aed892f6c8a215691988b32af0b"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "7795da5262ace1a51a5b4ce26eb25ea0"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "0d76a1fd7eb2ba6509f878755ecc0b44"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "0bf6edec27b5cff3aa995641a30f68ed"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4dbfd007b11a9f933039ab2decdeade2"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "5c351772ee720bf3d77813fc886f03bd"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "c66f3dcc5a6b8481eb01b3c6d398b2a2"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "11ef1de0f9548c0195daa8630e8d29b7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "5cde88682f561ac79d01995f0634a9f3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8a4e488390470cc794382ad1a432e9ee"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "24437331c7efcaee6cb4337172c3723d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "9cc592024d324319131a03dd97da1f36"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f489c54ee3e89b04a9bdd0e10f7a04b4"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "940f169b5e3833d5e6e0aae3ec7c172d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "d72e04ab46709b860077c98960f339cc"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f0813c7187f84487670038c9233c6959"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "30aa0c4c5374e589a7c9cae650241e25"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ff6b237c342c21df0c0447a1e8d3b071"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "0e84afc63d4520b1caad9f4f0967276e"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "0f59b8c4283f9fac7851b5c2852f7db9"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "34ec4cff14896b4ab8b2244bf6f87888"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e35cd06fbd917018b35da9274c8979be"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9e9532779705192e1f248f7e52910d63"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a20205249ca75da3425ccbfc01e784c8"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "1d8b0d2c20c3ed3c3aec2e8d3ac9b565"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "fb3aa587aace3e7c765cac03fdb90de4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6a79da331808a9b14a67b94ad0c1e61f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c765b3c721b98bb0a8b06b26a7f9488d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc7e65e3449e6a2589bce6931658d9b5"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "5527bcd043c3da512947b8b4e43de9f1"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "785f5a29fd26cff527a0cf3df405bf71"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "168e0a51741ed81d413aa17119c25a07"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5fa6a6674b0379fcd6bb386dd39efb29"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4ff24ea96859cc8b34b1e8220d1ba0b2"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e3fd59759afd0f9f5fcb51617cbde8e7"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "5cbbc288902f4ed84af4b3d3205b8f08"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "5e4aae5d4cef3f26a04885dc5b86579b"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "a6e904dd015a7795b16cc80d66ac7ef8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b3534a50e042495a81da41c1c5ef6296"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bbee8cc26b03a4b71f4d252e06429848"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9c7866b29efb5518857624d878f13b97"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d8c97696cc4d7773945f73325bc6db63"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7b92f7a19b54a6658cc90929e6c58399"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "05c378958df36862554068a356526ddd"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "7da383965b8594a8134f907c45b1b111"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "6119ac7e3ae3c36474c0fc44d85a5a17"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "96ca7c650394589ead79191b2752b746"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "c9a36fad7afbbe8249dd47a9e143c01a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "10a301c0bfbc1f0ab1e98273cc7abb1e"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "f904c5ea9791089a67d0147e8c8ebd72"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "355a4668a3717460cf796afead50de44"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "e991df264b5822897bc52175e9b56bb3"
  },
  {
    "url": "timeline/index.html",
    "revision": "d56ac28407f5f75757f6e2dbf8e0fd54"
  },
  {
    "url": "tools/code-review.html",
    "revision": "f867a45dba7909694d2059bda7a88230"
  },
  {
    "url": "tools/docsify.html",
    "revision": "d90344c11c8c7224968c0df10151f5d5"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "b527bfda840bf3e3e8d6641dd9d64b72"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "e1943f1b0159fac02300823d0c2dbfd0"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "b9641ce7cb32e3a34a28e3a7ca59f1c2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e0923cbb419227f8f0f86684ba4b3e1e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1afaa5adf12459454b384ac0181b45f2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "d0c58b4e44b4d4d49cdbedce3b65fe12"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "0ae5bb6884d27762d8eb7849f3303f07"
  },
  {
    "url": "tools/html/index.html",
    "revision": "2493d39fd5ab537cfd1241caa9502af1"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "97b18fb16ac2dfb6f2257b85f843d468"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "ea0b843b20c888fa53e00471eee65dbf"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "2548d1b5ca3a8ded4bcd63a468558dc2"
  },
  {
    "url": "tools/note/index.html",
    "revision": "4e747c7121f4eb6db1e7e5fc35a8ad2e"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "705c7ee83153239b6266deab68c3e776"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1cb8ede0425fc0d88dee8536c1802fba"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "2690473b9c8b699e2969b9682e086d58"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "24b1a1828484c41436b56d39f236a404"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "150fe971a549d411d7ed543550409575"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ca884a51c54a426135679a8ae515b50b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "eec3e7673e6e4a25a89ad821c8ced901"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f994b10f48260151de6e8315d5476447"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ae1ff7b6d6ea25ae1b468b1f9128e205"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "56a58eb976b421e5238f7b8e8f826c85"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "408ac9df51e4988887ce1fc9fc642c58"
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
