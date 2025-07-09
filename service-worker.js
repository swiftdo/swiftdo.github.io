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
    "revision": "cc6b0dd3111525c18c32be52bef5be66"
  },
  {
    "url": "about/app/index.html",
    "revision": "510782f9e75c25e7a7e568ef68360136"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7fe5833223d79d24cab48c94743aaf3e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "dcea091f6c0d2f94a43ce81586482bdb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "47214066d50d0a4e535d9e3a1a9392e8"
  },
  {
    "url": "about/index/index.html",
    "revision": "e89c6692c5aac24f2d601bdfc8152a39"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "fbc42410292acbf5f78bab3df0513b41"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "6b99e62cb2c14f492cf13fb4d8e5a014"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "ac39a2e40343d217510e7a618d7632a0"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "20117f8a458f0e1fbd371516f510e2bc"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "57c97b0e0c956f550936af9628391f46"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "850f674b2ba4e0a4796c9202228fd99f"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "1ddd9762a1b1f6b96bb31693a6fe2e3a"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "6cbaba178e8fd25ea10821b66aab9d27"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "4b6ea935dbf14d75643df2d7ad450a95"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "e7937e44706568ea3ef906c12ef343c5"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "5a04a1939fe7072274462c3e6750b2d8"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "726febac8d760be95b5db3864e0fe22b"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "89a9f0b99c7e29902c64a4b790f82703"
  },
  {
    "url": "algorithms/index.html",
    "revision": "14fcdba86c9ecc91a8ffa0ab83b7944e"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "cd6e37fca42dfdbad2a8b220421ff258"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "3da96278d3080f64c823fa1e6a308f3c"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "59492379ba47e8bc2257fc8a9f5d2630"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "11c6868ae6a94c3a12c32c166edde39d"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "a06f5975a33d1841945c17010927fe13"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "89cf3a5f24c811e099904ef8be37c603"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "97c0ef0848fe5f5ddab85d6bf5c9b73a"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "52ae8d5a8572bdb6823f3bc0425b28f3"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "416287641d12c634781c2fa60cbc3186"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "7c5910f1bed71469b14017174c96f858"
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
    "url": "assets/js/101.b443302a.js",
    "revision": "3d64f09f68522c625e8682eb49c48644"
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
    "url": "assets/js/104.4a7caf91.js",
    "revision": "d0a2c1200a8144f33a54c4bcf27b501d"
  },
  {
    "url": "assets/js/105.9a440172.js",
    "revision": "83c370b6b795be4f48e6a039ab28d043"
  },
  {
    "url": "assets/js/106.51873ffc.js",
    "revision": "df3a5a8fde6faf7e3930aceb45c1a6d1"
  },
  {
    "url": "assets/js/107.c0603acf.js",
    "revision": "ce0350fbc35c4bf318d18e8e026f0e64"
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
    "url": "assets/js/112.105d0be9.js",
    "revision": "d26b2e73ad44abd79697eeaa0e089ff5"
  },
  {
    "url": "assets/js/113.c772ad6f.js",
    "revision": "2ed656512fbee09f554eb7e5f6faa95f"
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
    "url": "assets/js/127.6755e22c.js",
    "revision": "e08c839c7194c4144b767808280d5750"
  },
  {
    "url": "assets/js/128.ca903dd8.js",
    "revision": "fa10fe9bcbfcbca8719022eb99d76efa"
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
    "url": "assets/js/134.46e9d187.js",
    "revision": "5566a625ae0b62da1e499f85a600b44f"
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
    "url": "assets/js/137.b2abbd1e.js",
    "revision": "344a0a3ee4822d0b83bfe3fefe6484b9"
  },
  {
    "url": "assets/js/138.9ab96f98.js",
    "revision": "3ae78f03157e4f9f3f8ef0fdb2101782"
  },
  {
    "url": "assets/js/139.a02cb556.js",
    "revision": "923403b1b919246c507b2ea7043d056d"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.8a5ab8ba.js",
    "revision": "a5fa186176854312948eae9cacda574b"
  },
  {
    "url": "assets/js/141.a854096c.js",
    "revision": "3ec1e137a1e6aa51311bca95111d1bc7"
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
    "url": "assets/js/145.de7037f7.js",
    "revision": "be96ed79b39e2da85e5304633d8a8b57"
  },
  {
    "url": "assets/js/146.c15148d1.js",
    "revision": "55c59ec92d0fa275649aaa2be8eaf955"
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
    "url": "assets/js/154.a5e699da.js",
    "revision": "5823ba8fc2600d7d4ba41fb5e5b6f9bd"
  },
  {
    "url": "assets/js/155.c32e3b31.js",
    "revision": "5b0e61085645b91a0ef48f70640d9542"
  },
  {
    "url": "assets/js/156.cc9e2b9d.js",
    "revision": "6f82d931461324a3e021e01bf650ffeb"
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
    "url": "assets/js/167.4d3a13be.js",
    "revision": "742f8271cb078115c2a39a18da79ce6a"
  },
  {
    "url": "assets/js/168.d2bad753.js",
    "revision": "173d65cd64fc2251f7c9f96b6fc344f1"
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
    "url": "assets/js/170.87c7e9c2.js",
    "revision": "b881acf5b8246d21f82e40376d5edc84"
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
    "url": "assets/js/174.6e66c595.js",
    "revision": "f6e1b2474cdd006284842ef9e0111e3a"
  },
  {
    "url": "assets/js/175.b841d3d0.js",
    "revision": "5be2f05b321aa61fdc210c2e8b99c704"
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
    "url": "assets/js/182.3cc8fdcf.js",
    "revision": "0dface2829eba70d21c449fbd9c70d6b"
  },
  {
    "url": "assets/js/183.06625b24.js",
    "revision": "9552013ced0fd6eedae4a55a35ac785a"
  },
  {
    "url": "assets/js/184.84f3edc2.js",
    "revision": "7a7802179330125401c1c43c7ee1fd57"
  },
  {
    "url": "assets/js/185.57676c59.js",
    "revision": "42a6b4a7877d182b29420d3bd2c77321"
  },
  {
    "url": "assets/js/186.3028231f.js",
    "revision": "367bf39cba51121c66e21536c1163674"
  },
  {
    "url": "assets/js/187.a5068b66.js",
    "revision": "6c539728346c3dd6bcd1383199402453"
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
    "url": "assets/js/190.d81431d9.js",
    "revision": "bb80d011b5acaf922ceb785dbfbd3a5d"
  },
  {
    "url": "assets/js/191.e1b6e062.js",
    "revision": "7509bc8c785132e2c227b483c5c3eb75"
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
    "url": "assets/js/194.d4227d5b.js",
    "revision": "09ae49e0171b2e267402342fd0656d50"
  },
  {
    "url": "assets/js/195.c65e8df4.js",
    "revision": "013467dc65e88feb37b63f85eb358c88"
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
    "url": "assets/js/209.e12c683f.js",
    "revision": "af3d27d534d02a6a1968fdcc814132dc"
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
    "url": "assets/js/211.c9f8a4ae.js",
    "revision": "e27c0f1713b0886c258a868c1f65edc5"
  },
  {
    "url": "assets/js/212.2260d8de.js",
    "revision": "d7b4e808e90bb51acf609ef70a89aed5"
  },
  {
    "url": "assets/js/213.f04c0c8a.js",
    "revision": "bb1a12439f3dfbc6a0906cc6b776afdf"
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
    "url": "assets/js/217.d02576e0.js",
    "revision": "945b40faf9d01f505a8889a7f69ddb7d"
  },
  {
    "url": "assets/js/218.4fbb6b00.js",
    "revision": "852858fd83d98cc9f21134117b6308d8"
  },
  {
    "url": "assets/js/219.e77d13fd.js",
    "revision": "35cd0f1d28ee6774fd2e1ad06f717dca"
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
    "url": "assets/js/232.41bb1691.js",
    "revision": "5d89b73be4557e94a95481dac58b57f9"
  },
  {
    "url": "assets/js/233.8ab8f2c1.js",
    "revision": "e3176505296f65111620a630f0148923"
  },
  {
    "url": "assets/js/234.02341277.js",
    "revision": "93714391e826a784bdfd9efa92a3d8e0"
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
    "url": "assets/js/237.2731bb9c.js",
    "revision": "6ba897241cb750039027160af58159fe"
  },
  {
    "url": "assets/js/238.f0b33474.js",
    "revision": "6e1d66ced950c1fb92bd678560020263"
  },
  {
    "url": "assets/js/239.eda4fda8.js",
    "revision": "2cbffc7cb1e4153d219e0a1ece1a090f"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.8de8ee47.js",
    "revision": "29a405c7917d617295a0afab74b7aafb"
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
    "url": "assets/js/249.10dc53fc.js",
    "revision": "9d32fb8ca8a6b840fb98022f77da62c4"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.6412dc84.js",
    "revision": "dd63a323c1e348e3284afeb8c4aa79cf"
  },
  {
    "url": "assets/js/251.17b1a027.js",
    "revision": "98bcacf2c4a68f296dcef3791330e370"
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
    "url": "assets/js/255.f6590e08.js",
    "revision": "4273e5714328dd872144bb78274fd369"
  },
  {
    "url": "assets/js/256.f20dc28d.js",
    "revision": "612dfae53661155db26034c9d218de7b"
  },
  {
    "url": "assets/js/257.8c2849ef.js",
    "revision": "e8c3a05f1dd2ed5950309c9f44b7211e"
  },
  {
    "url": "assets/js/258.af196ded.js",
    "revision": "ec5327cee02bfb2be2f598a130285a63"
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
    "url": "assets/js/260.4bedf147.js",
    "revision": "5bcea75a1c0231bdc06af157a7e5121f"
  },
  {
    "url": "assets/js/261.17e8fe41.js",
    "revision": "0b7febeb238c89242219e4850a62aaee"
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
    "url": "assets/js/265.13e585ac.js",
    "revision": "0195c62534296ac9ea89d02d79af155e"
  },
  {
    "url": "assets/js/266.88aa6eb1.js",
    "revision": "01afc2db83cc21b709557a0aa84cbdf4"
  },
  {
    "url": "assets/js/267.3ed8c878.js",
    "revision": "09fe79202068c53ddc855143e34333e4"
  },
  {
    "url": "assets/js/268.f6c0ede2.js",
    "revision": "dbb075a0cd76da5054262a351bb6653e"
  },
  {
    "url": "assets/js/269.99bc90a9.js",
    "revision": "c4eedb706826f3f72086cae1daac68d7"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.30c5bb19.js",
    "revision": "4f6d1e2271394f162604b3f331845e56"
  },
  {
    "url": "assets/js/271.36e4012f.js",
    "revision": "fecb6151c767801df6c2a8e6d7c08d95"
  },
  {
    "url": "assets/js/272.215fb404.js",
    "revision": "0c825e155645c6738e7ec9eb386bdffa"
  },
  {
    "url": "assets/js/273.dbaa7c95.js",
    "revision": "17f6f61289a6314ad0f6f1059d4589c1"
  },
  {
    "url": "assets/js/274.6845a1c4.js",
    "revision": "77ef1f4c3da04b494272b05da2b5019e"
  },
  {
    "url": "assets/js/275.3727b79b.js",
    "revision": "54f07fbc9e0034bb7eb8bf266f24b175"
  },
  {
    "url": "assets/js/276.66214dc8.js",
    "revision": "101498bb0edbf551de3c87955c3b4bef"
  },
  {
    "url": "assets/js/277.7c966184.js",
    "revision": "b287f03fcdcd374233de7bb0d720527d"
  },
  {
    "url": "assets/js/278.d4781a0f.js",
    "revision": "49547306d2a1d82a4c1fa9034254b66f"
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
    "url": "assets/js/280.968c994e.js",
    "revision": "4964179d2d94c1349dc07708cf470602"
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
    "url": "assets/js/283.71a122ee.js",
    "revision": "593f8317d2ed0e593ff5c0f34f2d53f0"
  },
  {
    "url": "assets/js/284.a8628e3a.js",
    "revision": "0449210041d974a9536dfcdc9ee446e0"
  },
  {
    "url": "assets/js/285.be5143c6.js",
    "revision": "84300567b58f63c0f0bf944ffbb8b5d3"
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
    "url": "assets/js/291.7d803138.js",
    "revision": "1cd54d23a20f743a0c7a3e8516fb3008"
  },
  {
    "url": "assets/js/292.29486932.js",
    "revision": "81de9d4d633d5173ce885865c007c701"
  },
  {
    "url": "assets/js/293.d073e05f.js",
    "revision": "db699874cb771e62dc2bc97d7bbbb0a4"
  },
  {
    "url": "assets/js/294.fc0d1d60.js",
    "revision": "0b7cf3a8d0f7c0795a51a18dd22b523e"
  },
  {
    "url": "assets/js/295.ce781a96.js",
    "revision": "aef1cc74e74e0d717ea71a46051b85e9"
  },
  {
    "url": "assets/js/296.15c2f4d7.js",
    "revision": "d2c085600de2741901b1098345688836"
  },
  {
    "url": "assets/js/297.888ddc81.js",
    "revision": "b0e09dcfa9790b6d1f73015a92408dd2"
  },
  {
    "url": "assets/js/298.d0bcdb7f.js",
    "revision": "976bb0d33e5deac49ebf555b66125ae5"
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
    "url": "assets/js/300.115bf879.js",
    "revision": "82c6e419971d2fbeb7b7405fecc65287"
  },
  {
    "url": "assets/js/301.8d1110e5.js",
    "revision": "631bbd14c4e95db77fee240ee7c3258a"
  },
  {
    "url": "assets/js/302.5224b712.js",
    "revision": "37893b0c1b7873cf19e5c5e0ac2fbfc0"
  },
  {
    "url": "assets/js/303.8c2168b1.js",
    "revision": "0b719e4f51b1a660aba1475361f3f94e"
  },
  {
    "url": "assets/js/304.7dd0b67e.js",
    "revision": "1002d86ce0fe7337121c73e98a836e9c"
  },
  {
    "url": "assets/js/305.11552f27.js",
    "revision": "de32fec103898e87caa6b9327ee152a3"
  },
  {
    "url": "assets/js/306.a49432d3.js",
    "revision": "518bde9bf9cd59415df1dd7885246ab1"
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
    "url": "assets/js/309.87fca33d.js",
    "revision": "74819898b56fbaf2ebfc3be4e2cb7b4d"
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
    "url": "assets/js/311.06e90b4f.js",
    "revision": "c507b3c23ea0f491943cf4352148e142"
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
    "url": "assets/js/314.1e9d95f7.js",
    "revision": "c6c1851392f3b80ddbdda0ba1cf10304"
  },
  {
    "url": "assets/js/315.d46432e3.js",
    "revision": "d5c586d35c5fc0252b492b58085cd6e9"
  },
  {
    "url": "assets/js/316.a3e17df0.js",
    "revision": "11650f1d2d39543e024e3dd11d2d64e4"
  },
  {
    "url": "assets/js/317.1ea2c7a4.js",
    "revision": "55407e39a47ab40005b27cf4f4225a27"
  },
  {
    "url": "assets/js/318.3431b02b.js",
    "revision": "2f26067f28a3afed40a504c46fc9200e"
  },
  {
    "url": "assets/js/319.c284e017.js",
    "revision": "39953e608ab2eb5206e0f2e888ca8bbe"
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
    "url": "assets/js/321.65167caa.js",
    "revision": "0615cc68a3a38ccfdd99c2127aa81eba"
  },
  {
    "url": "assets/js/322.9a58e6f4.js",
    "revision": "cd8669f9f9a39dfbcecf504457a60ebd"
  },
  {
    "url": "assets/js/323.00a53cce.js",
    "revision": "56c598d4038d1d3314d3f4daf1a9a174"
  },
  {
    "url": "assets/js/324.a6fb200c.js",
    "revision": "00c80be082d6f3cd5942cc9ee12bb646"
  },
  {
    "url": "assets/js/325.053ae176.js",
    "revision": "7c1e63679e011734eb29cc3be2bd0cc2"
  },
  {
    "url": "assets/js/326.461f3e67.js",
    "revision": "b602b5e3d3f48656e37f0e585db2188a"
  },
  {
    "url": "assets/js/327.05999d7c.js",
    "revision": "0be16f6f6eac21068817dea0ae0ee2fc"
  },
  {
    "url": "assets/js/328.30df9332.js",
    "revision": "9f25f7286effd0cf4900eab9b6de6980"
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
    "url": "assets/js/330.204aa066.js",
    "revision": "b0ef3cb65580084d01ee166a09131048"
  },
  {
    "url": "assets/js/331.3795f9ed.js",
    "revision": "ab6637bcdbeee661ab8afdd774ce1c0c"
  },
  {
    "url": "assets/js/332.e35fee21.js",
    "revision": "c3c4d04a5d3eb19b6710aa0a2be61ecb"
  },
  {
    "url": "assets/js/333.bbd8554f.js",
    "revision": "3873fccd320592e0689fe5742a387e47"
  },
  {
    "url": "assets/js/334.3b5e9ef1.js",
    "revision": "9aa44a4f58f676f6cc8477deb74c9112"
  },
  {
    "url": "assets/js/335.b85335fc.js",
    "revision": "2fda9abf2b4f4916215b52e62f271bb1"
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
    "url": "assets/js/338.2e478c8f.js",
    "revision": "ede866bdbb93b6f8b550ac84eebfe24c"
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
    "url": "assets/js/340.89b3c2c7.js",
    "revision": "a7f3ad159ec81fb2d79c4913aef408fe"
  },
  {
    "url": "assets/js/341.8f85ce4c.js",
    "revision": "12b30f9fbbbd71a07365fd8866a2fab9"
  },
  {
    "url": "assets/js/342.0e374439.js",
    "revision": "87c38625d226367b89e5234b771283f3"
  },
  {
    "url": "assets/js/343.0b4b37e9.js",
    "revision": "a991233018c8f6a9ef28467cd87c6b9d"
  },
  {
    "url": "assets/js/344.ddc81516.js",
    "revision": "7e2eb75434ab700dc4338d8754df6274"
  },
  {
    "url": "assets/js/345.6d93d504.js",
    "revision": "373b4713d4c49c5bcbf201498e54e3a0"
  },
  {
    "url": "assets/js/346.246a7ca0.js",
    "revision": "e182e12344fd74132867a0e35e98d985"
  },
  {
    "url": "assets/js/347.b179bc23.js",
    "revision": "ee3419860d4aac7d197a6db763244079"
  },
  {
    "url": "assets/js/348.5430553c.js",
    "revision": "d6bc1b0fff246847db90f0b42290dce3"
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
    "url": "assets/js/351.9b0a49e8.js",
    "revision": "fe196f0d06b96ced30e19ed547717db3"
  },
  {
    "url": "assets/js/352.c7b86d98.js",
    "revision": "53b289ce31f05aaa1eb9f6d082bab6f5"
  },
  {
    "url": "assets/js/353.4cddfbc1.js",
    "revision": "ddf7f655e385382a533af15e56128d2e"
  },
  {
    "url": "assets/js/354.30ded9f8.js",
    "revision": "24930f297814336463a2ae6a0eb9e34c"
  },
  {
    "url": "assets/js/355.c3daa653.js",
    "revision": "84cc02e947caa9f0dc8e8f76ccb03243"
  },
  {
    "url": "assets/js/356.569abb58.js",
    "revision": "705e7d34fe00c67c5573001bc5d9704f"
  },
  {
    "url": "assets/js/357.d635d324.js",
    "revision": "c34c1edb8ad32fac9f402aec7e056703"
  },
  {
    "url": "assets/js/358.ffe91e93.js",
    "revision": "087282fa599581fb5baad74c800fd4b4"
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
    "url": "assets/js/41.df5b2e8b.js",
    "revision": "d704aabcb010b4cb446171138dc8ab1b"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
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
    "url": "assets/js/48.d27079df.js",
    "revision": "7ad76c6b06ffcb84615410bd225d8e5d"
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
    "url": "assets/js/50.a627ead0.js",
    "revision": "bfe430ce728167abf1d6a4948e2aea0f"
  },
  {
    "url": "assets/js/51.32c1776b.js",
    "revision": "0ddacf7d73c512014aeec0a8e7eea80d"
  },
  {
    "url": "assets/js/52.d5f93f33.js",
    "revision": "55899750eb85b4f79da4496b81432a96"
  },
  {
    "url": "assets/js/53.de0cb71b.js",
    "revision": "b962bdcb93bdaa9aa3804f22439363f8"
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
    "url": "assets/js/61.6b077e05.js",
    "revision": "74c2e51defad0e9321c57a898dec0a33"
  },
  {
    "url": "assets/js/62.673682b1.js",
    "revision": "78b43de97fe9593319c96308c7cddf3b"
  },
  {
    "url": "assets/js/63.53af8fe4.js",
    "revision": "cb1b72dcd0e9cf8e60509674da2d4ee2"
  },
  {
    "url": "assets/js/64.bc757760.js",
    "revision": "cdf1d346db5f59f2ab4ca03bc62c0905"
  },
  {
    "url": "assets/js/65.77aa7f08.js",
    "revision": "960f6df3e8e852fc6c0b52cd379ec650"
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
    "url": "assets/js/70.42b08f9c.js",
    "revision": "cfa385aa948c5bd9d3158250c5340327"
  },
  {
    "url": "assets/js/71.91f84544.js",
    "revision": "851396fc9c648ebc26cb9735b91eabd0"
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
    "url": "assets/js/77.db2d347c.js",
    "revision": "125a7ee1dd0f1d1b24954c9484cd13a1"
  },
  {
    "url": "assets/js/78.a69d6809.js",
    "revision": "e94186570f4c762e4adf3f6a9c0535d3"
  },
  {
    "url": "assets/js/79.7f9ae6f6.js",
    "revision": "5c40bac55037908f516576a83a5b4bc6"
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
    "url": "assets/js/84.8738fe6e.js",
    "revision": "12cab248cba7879ad7c1a65d2af128fc"
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
    "url": "assets/js/87.d2d30c21.js",
    "revision": "0edb398ccba443796dd14f059a34a3e0"
  },
  {
    "url": "assets/js/88.a4849fa5.js",
    "revision": "7edcb9f59a08f5fbec256884fd4fa971"
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
    "url": "assets/js/90.d92c1223.js",
    "revision": "5ecea83e129545e65a977aadc8263406"
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
    "url": "assets/js/99.c48b53df.js",
    "revision": "61310d55d6e83c42144cf657701cc89c"
  },
  {
    "url": "assets/js/app.5fb4b81a.js",
    "revision": "cd6aa97b77e998a8e1d30513773893dc"
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
    "revision": "ab088e4242500d69714e1685e9e8b4b6"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "985b11f0f9f036edcf5661b39cc5d09e"
  },
  {
    "url": "books.html",
    "revision": "f3c93ff4c18bc14f63eeca38a5793d2f"
  },
  {
    "url": "categories/index.html",
    "revision": "f27185673c7036bf92b66fd05275c539"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "9b687dfb821e15efe990cd117916de95"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "3908bc4878b24eda4aecc5aff51ce8a5"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "db5519f5a71d60318bf67e97855ecd1a"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "092424dcf1158889dea780f32977a079"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "e4f0771b6931669888013c11bdac0bf4"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "5789e3e79677db4459ddb3017885450f"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "0177bbcfd00dfe16a9fa3ce657fb463a"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "541f4eb6e765991539147a6982a4d1ed"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "923be3b4092bf3d10515703ec2906eec"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "391944784b74d40dac4ebdcb2f666b1a"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "21e59b9b9308846f27c40e4edbecdbe5"
  },
  {
    "url": "deepseek/index.html",
    "revision": "67d84fe79098a872d1eef420788969d6"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "2da978fcdbbd106c9b97b9ab73555ea8"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "75ac73ac8f74f30e7ce5db98db4c0f38"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "7d445d5ed5bf1b63fcce153f14ceaa47"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "1c602d67d27a2065ef71610c5c9227b7"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "c6fd3e31929ab36040f9cb1c5517bc39"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "0b4279fddc517dcb6a202178e3355e34"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "6efaf444b85f28d1c6fca881639b5ec9"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "e4460c898e8f432d4fd6f5b765e3740e"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "3021c14b9d4b77ebcde91c1e98f741a6"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "22705dbe19742dd5a2338de005e74a9e"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "c21617507b3e07264a28038c148f0dc2"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "960a11e2814b8d8d9d411b6b358a50ed"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "34821131f252338ee4abee8e38288b98"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "cc30d808df0af3c827beec5a96ecf933"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "284f88c9daf4744057ccaade5461a462"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "eec430eb942e718dcc966fdd2c25bfe4"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "da399e842adf975d7cdbe7e96875bf15"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "2cf9db6d3eb4bcdf4dbff0aade5956f7"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "67867d173460403a6e1b0bf725a8b8d8"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "7b0c3024d5c1a09a7deb7ebdbf03b6cd"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "201e40bab455c46b4fdc2b38729b866e"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "a8021486ec500eadffd434359177f307"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "db3f16b2d452217bc1fb2f9a4c7bc667"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "80c7a13c15595efa848611dc938a5a68"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "378ce19a8f6cb069a0cb517b575b3d60"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "9116b546442695c4d1fc27076a1137f5"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "376f906c04fe079855775c3d0c5dd28a"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "45d895fa0fee4d683f54d0eb2794fa18"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "d0a73081311260e26256b17ad93b4f49"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "55109f91b5bc1acafd695b7de1a3c5f5"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "71e010b98de1421397c446e0c8a756ec"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "18095dd91089a48c3078eae881aa5389"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "94f6f2128aca5dabef879c2cbe7e854a"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "6db1504e821b125a784f5d6e78963b8d"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "6251fbbce4bc3093c744151790dd0908"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "eb7b1888c73009c3f4f3d169cf63676e"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "c30b50147ce818399e009b462782b1a1"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "b260b8a49bb83b7ce84c343ac69cfbc7"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "b3f5d18af9bcaab1058b9df436de19bc"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "c57959d3ecb3f1150320739664d2fad6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "602e3100184dcbb24b5abec893f7ee95"
  },
  {
    "url": "figma/index.html",
    "revision": "180a8af9a09b9f8e4ad7abfff5245097"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "1839e80692a2266d0277647061887ca3"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "0adcf63271fbb30f05d348dcd24af3ae"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "b272070dbfbb6e9443e0f55e1d7c3ace"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "f69c6d3ce0b2cf89552d6916e665a037"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "ce63845dece7cb0034021b688a499c4e"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "0b72eaccc67c4f28c6ce42b696949517"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "6eba7a60b3767852fcf99884a50cfb0f"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "b1755cade3c70a9fe45adf4a64c05fa6"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "c5665a9926dea90201f2c45e08d50fbf"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "0a2963ad2f8dbc894f600fd7e7a128bc"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "b36c5e8db2c255d0d8889dd79c3af925"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "730577427ccd9931eee6a8672356714b"
  },
  {
    "url": "flutter/index.html",
    "revision": "eebfd8d94b7889909740ed4ce925d6b4"
  },
  {
    "url": "flutter/point.html",
    "revision": "b8edf934ca55129e41c2a06fe1bae012"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "f88d1f02e2731f173d5882c219bdc312"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "d435efcc18ece853bef5a2547a34215d"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "30ec65e696c95257603ef68d20b91487"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fe3f63d0e8a7f67a24f2e388f27ced5b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "07d0ac1c3b8dc4e622c750649db81259"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2d8068d8094632c4daea68eb653323a0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "36aad1b2829bd836596fd1d9a2bfa034"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "dec5e4931a5401d3de458d5f0884c55e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "10c5e3fe98c2b5cc3072f30f6b8dc0fe"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "edcd3c5595c1f7dff7b9c444e1573591"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "72d7b772de57ec1a2eff8457ffe35474"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9118c923104b414f0093c498058e4a8f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "142e5f51afa677df8af5a3a08c6b40d8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "94daddb075734a583baeb93c1be23e96"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "1bbd395fe3a890900d0b155df62984f6"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "be7aae4853fe105da3c9eaab80200936"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "2880ff85bdbd45526a3a3a29c32aed9b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2007b99554f7586bed47a3f3d7355788"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "4f92b03c75ea7b1451fc446f2232859e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "e8031f7377fab9289d3051da54c2efeb"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "284e0d90912eacb1fda71d188fcd5745"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ea6e8c2c61546b2ccfb387eb0c9a575a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "13f327752b22c6873be855b8e0a3fe97"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "ca210da48238bcb7c8fbad305b692dc2"
  },
  {
    "url": "haskell/index.html",
    "revision": "11422922db6b0fd331c8cb7b6ad2b91b"
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
    "revision": "cacb7e87b17263a30f2213547b18b085"
  },
  {
    "url": "java/index.html",
    "revision": "d92ff453770168d03e8401190b1aae46"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "616f9372a06c42787338820e662ae146"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "e031b25c5aa366bafbb7173983bb4afb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "7b60412dce88f8047cc418c4e09ca2d5"
  },
  {
    "url": "ops/index.html",
    "revision": "158baca3a5eb653692694a6c010ce7fe"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "48e9dc1d0517082b2cff7b12ecab845a"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "850c8ae80456694596c309ccfb5cf5ae"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e3f271d7b516803b8d97caa125696448"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "608276811d982b505adf99eeacd71810"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f045d3ce426a33980ed2ce600c009f54"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "98499636643a556d2254eb8967728a21"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "fe4de195cd4682c9673620b8c5ed3d93"
  },
  {
    "url": "python/index.html",
    "revision": "482efab3b50327994356b9fe9bdd5831"
  },
  {
    "url": "python/poetry.html",
    "revision": "aa93990b8e636d730aac728e62928234"
  },
  {
    "url": "python/pyenv.html",
    "revision": "77adefa110b464691fae7eaca0636575"
  },
  {
    "url": "python/python-ase.html",
    "revision": "b4cbad32ab690ff361c8fd585cf61f32"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "db886d47ff51872570a0dc7b462da16d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "e7b57474eb13b116d2ec2213a22b4c4f"
  },
  {
    "url": "python/python-file.html",
    "revision": "c8c4c2e10a2aa36f018b1ee5c9109bc4"
  },
  {
    "url": "python/python-function.html",
    "revision": "701409fd0a6b56f1d049d7e12705412f"
  },
  {
    "url": "python/python-generator.html",
    "revision": "c67e7648ca8c24ef601b02249662355c"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "24b2c33bc28c630afb26191237df78b5"
  },
  {
    "url": "python/python-module.html",
    "revision": "a93387d42736fa5a55897756cf7eabef"
  },
  {
    "url": "python/python-string.html",
    "revision": "008e8df45d540ce561cced78ce6ecaa1"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c93c786f905c822cae6c79768704f06f"
  },
  {
    "url": "read/index.html",
    "revision": "da45626c33c0072b25a0a938998090dc"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ffc899e9a5598da0e1fabbad83776bc1"
  },
  {
    "url": "swift/better/available.html",
    "revision": "da2ff7e2ddbfe3c8dc1f2849c35f19e2"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4ceacf13acd94653510de2f017367491"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "7dd661a4804e2d55c9d748c8d35f5914"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ceca4ab997b71307aed3a2b92fd0c8ba"
  },
  {
    "url": "swift/better/di.html",
    "revision": "981977f61cf9241be2f875bc7ab532f5"
  },
  {
    "url": "swift/better/index.html",
    "revision": "807deb0d990deb8bf39bca22591996b1"
  },
  {
    "url": "swift/better/last.html",
    "revision": "67a21ca86d7e7b0d60e05475a6edf9eb"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "8fcdafbc8dc916c75c76aa9731a5b993"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e25c25b7ee812545412025f9fa5866e9"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "f3229e7cc3b9140ab2f533d1cdddc315"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8502257a3c3bba2cd7c85425c9d32f59"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ad920efd60cfb548e895727f50b887cd"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9c76f66ab525ca098176ba0e3703b57b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "332164d83a07eb46333497f262d308a5"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "b7cb346b2228e23bdbc90488101bc131"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "74794eb0e9a131634f3d419e641242fa"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "22e4bfab0bec9d7ed6148b677fc3f222"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4064200d6acf49f43a05e6d1bde6f9ab"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "894b10c0fdd0c9a6e10ede1e4db9b650"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "33f44af89fb6efaaa301db20f8e84a14"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "1a2217b7cc0fe3e2ce82edc1b5f7f481"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "457768baf5de41d7af400a2f0b1f9a68"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "12de23bd0e5f9f4fefc3e6550a1f9787"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "6f6e06508be9c8cdd05f3fcbb6f39986"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "9f775f47875821ab350da8ca8091a4b2"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "191c45eb543e6a78ba702bc5fd03e63f"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "0e05b28d0b98a1f3b495b71c046c3a6f"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "12644dbb2174a4b28b4b67c4f525fffd"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "58d31620d87e9c19d81d66fe415806ed"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "73265ab7a3674db14b2e71ea2a5b1431"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "912048225e8095e1105beaa3dadd274e"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "85ca58588e80cf8d4beb11b4a9543922"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "08566f62bbe20e5d056d6d66111711e5"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "a5c09b3c3c1e036936ffbcc556f29878"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a038032c6ff81810855c913f10ee4727"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c78b1eacbfd9325cdd22e471c45ce57e"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "53bf4117e366f14192230f8a0a8c871f"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "b0879c28dcd436a7960404884428998a"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "913672edd433244d51d85e82af7d57b6"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "9cb6a3a051a55e4575edf030351d3c43"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "13715cf0af79fa061cedd1ed4f66130c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "83073f7195ea1b0d1483bc1955d2bf55"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "43c3cfed7ed38a29614f85e7d8512b70"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4e94d96ef426109ecf59fac2bfe9e43f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f3b305cfdf877486cafd1276795c00b8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "e86d34500df140707c1443ef1981cf12"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "79759a31dc203eca585abfbe3bc81515"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e23ff570e86e7488f9098486d0316ed4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ef996d3c8f09e3967d777a7091011275"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1c5f6ec318fa020cb38906a8ebcc17c7"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "844bbd2566dfcdeefe6223409684bcf2"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "32a1ea273d8eb3a53cfa74cc19bcea0d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "ea2c60989aad04c0e2d9bd8d185af4a1"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "8d7e49aaef2e08e845782ce4a9b95b99"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a8e2148280a43ba1af5423fd2ee916ec"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ef6aedb0015b133779ac9c17a6c63d98"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e55107dcef344ad80b861fe9f98e6985"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "43e4b7948b1aa99d9310ba620313d926"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "33c77ee9bad6ff927731958080b78787"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b3db03347ea1c0168725fc4555710e83"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "173d868c5e9dedae93f43f250f8673e4"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b5a89915ca8f5fbf32e72480b006984d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b68231411b06323915e4efc0418246ad"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "be3c50c26cc92f815a61f326046e1800"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "26abbc36eee827bca7d092d05793b39c"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "71989a2f2713fe6281a0ad4de2b88400"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "228b9f82cb3b75c68daf6270c2261de0"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "ca4bb8da338ac61af7ec80bd54c97b21"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8b5b677c9c96343df92cc7442968573c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "93de12ec89766984dbbaf559686c8185"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "f376778d675512dedcd3b974e039c566"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f4a093f58b0c449cb73e99c6bb0decee"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "2059eca876df5fff3f6ae47955f93aff"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "22dd11febdf74d85f3c19c27b37b9e49"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "0e82f431617dc1e4f7a7dec2046c86f2"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "de0b2cf3ac4079c11d48363ed598aeeb"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3ed6788a6f6d9bfa23e471caa796df1e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "782844e31089db8dd1b03f1edeb6c268"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "35c774521bfc95c2d07715de8db8281e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "1f0642fc90710712ed0a2185da6ef817"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "85905e89e3cfb07333886f2150738aa6"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "009e49e569cf17146874d9c4abe76607"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "3e66ef697e6959d9a6fcc004f474f7d5"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3843a699d85a8491b55427257472f83a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c7ca52d4eb904be153888f7ed3e894c4"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "be560fe8bb7584eb86f313edba57e24c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "105540d3b3c58f3e133cf36a5e6977d2"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "23db5548761456b3239b25a499316520"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "d751b3cf24d6624f67632188210d8c15"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "756d62d65e0f0ff5bf38d7ea08b9bf60"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c862595c193a7d6ac9187e8a27b188bf"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "31667b48e3d27401d9092666e822b5b8"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "1129bd715558f3161e89e2c17683fce7"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "3d7f0a0afc130072836c61d31bccb911"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "2bb3790783ce74478a9a865ccce2326a"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "dd3fce2de700eeed9698d5befbdb0e16"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7541e36de7c57d236d3ae24a6b6a5df9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2f4e385a143d932bcc592a071ed4891c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "4aa8c9e3e64ffee48148a8491410f35a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "8a96e222826ace4d320f9d501d39feec"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "93da5658c320899eaeeb4cb10c90478b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "bde2a649d703e9524980134621ca1ecb"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f4fab7b37c564f05199358181fa6e254"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "bf4f39b8a0b5c67cc3360f1b7444a2a1"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2db5e7bc4f4a344b55b07b3f41943f6f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "122cb102f296cacb0ee2039ab33a72a3"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "465232864b7b1bdbb03fa3bf05cf52f4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "9612d3bd2e58cb754d8f00e89bf332b6"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "a239bf881fb6a7a51ca6ff5ca1737c27"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "da1c4a824ddd7d102fa76663ee8ac411"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "ff5d51ff59da93578aa6f68b71d4cb10"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "8ebe15ba6e50d4dad95ca2729fe8255a"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "2a0cda89233c5ea0c3e028cee530d88d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "08fb19b22b471aa344d749f7270ce410"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "7cec62a2af28dc8387143ad80b37fdd8"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d3b825165ff8a8b1ee18e24b0e5ff05e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "895e4353d54402cead891987e32f591a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "bb9136ffe10d5db5eebb28d164573a92"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2b3a42760dab602b5febce226a5ddc73"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "4f7e39323b3eb781229e9ab1f89b4b85"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "8e325a34596327c16e1e1f2322bde360"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "2fa4233f3245d4656d2490884be5334c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "08bada63d2d05bbc883018917da47357"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "e255a70476aa24ac83bea06e6f82aa3c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "522316994f51ae439563d80b4ce00a28"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "4ce84e6950fb6861ba612e697a8e3292"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "5dae709b89a149804c9fec2b98c39017"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "9e9ab7873e9e59fc9e17f982bb45cabf"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f81f1cc54b91e4138c867566f528d649"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b58abacea0e7e2814ebc5ee31986882a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0df2a74194defe30e6796ec800044b1e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "338c3b83c2c8f4dd5e866a061bea8aaf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9770bf837219bac4bb074cd0dc6809d3"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "4f086ee90f1125f2a4c397bf97516323"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "dc0f1fc971ea3ffc58813d6513e24c25"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9a54a0ec5ebafa90a57066dd8b0b15ad"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f1fc71e5479bba4a2840556bcc1ff956"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "8c94fc36ef9d11279840913e16fa7089"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3940b461c45c8e0557e6f2fd41e8e9e8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "25bb445efeafc88fed17743d6bab2172"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "cc92185dddde61aa6da1ac4ccc04d6e4"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "87db36253e8d681681228261b0ad8795"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "5e287b3b467f397b112aca35d658b005"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ae96e21731347fab6e07044dc63adf2e"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "16fab929d05bf4e81289f16940c10e52"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "2d2467d4f0b2de04017a7316def787f6"
  },
  {
    "url": "tag/code/index.html",
    "revision": "a9f377fe3a6b1b80756b8ac1e40e4518"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "b70f1e3b199639e0844c01626d5f4a3f"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "d2a6d2e24b2ff05b91eb526b57461de1"
  },
  {
    "url": "tag/django/index.html",
    "revision": "2ec1dbdbbc55b6e0ae17871cf44668fb"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "3613cfa0a967d08eb9fa8996612058be"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "9fc966713fea491d340442954bb9ac65"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "a3628b9ab5cfb1c1976092dae7d682ab"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "664b080e1ea240e6dd57d61f78ffd6a7"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8816e46da332928b58f402d0337bdcb5"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b09e5a0721f105829ed587cf0e11f5a0"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "abeb7a5b1119f50d04d0fd45ee0cdf93"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "3956e94f598e61bdee9493a3a6a75575"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "4c259dc628eb651c9404600ecfa4679a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c4006b4f0b4dac35b221b875a06ef3b6"
  },
  {
    "url": "tag/github/index.html",
    "revision": "de3336251eb32481788140d56003ea9c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b4feff8cf721e2ac746bfbf7e479656c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "78db03320504a353287b9b7a6ee33c88"
  },
  {
    "url": "tag/index.html",
    "revision": "8fcd8ec2e074c870562f580c716aa082"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d242e17971c04f139147c51eb14b4549"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "12f1042652b8497e4238230493c192d1"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "1c1a4dbae4d39d045a6fb1928eecdd63"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "2e342941f64a6feb7c568307c4e091c5"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3618d19f384debf3202dd964dd04d5d1"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ca4964e51183a5ab7233bcab2c0b7ad8"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "4a6892d400d2b5226027e98966f37bcb"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a2f9f63d17669534210f48889de16548"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "fb4d60fc8af03f39be627b256e18fab8"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "be3851aa2eb21ff203b7b85dc9b90cfe"
  },
  {
    "url": "tag/java/index.html",
    "revision": "8492d4e5ced3da6e24f92498ae6bab42"
  },
  {
    "url": "tag/json/index.html",
    "revision": "1900bdf1b2bb3f184215c3ebdf63acc6"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "3740ee7ea215e607cf5412d41fcbd964"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "76c17ae72ee291e065e33f3c2c4bed21"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ba8154a8325dc7d4c2b64197fe42d431"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "f9bedb656777b0158a46c345f4a64717"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "4af0b05a855218d84e95ff5a46f1716f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "715422400642a0a31209b705f40bfd73"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "9665c1e13e7844fe41f177bd10ad975e"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "2530a5c1d4d73a66a439dbeeaaff2246"
  },
  {
    "url": "tag/python/index.html",
    "revision": "779475e37d7270af456ac0b37cd84607"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "13e5fea054a32b14b89950862f1f193a"
  },
  {
    "url": "tag/read/index.html",
    "revision": "6774bc3d693da844158971b61755464f"
  },
  {
    "url": "tag/review/index.html",
    "revision": "ccad04f026b45c935d5e17d951a9ec00"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "f5a6e5cb6dec78dbc1096b923c62a1e3"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "93fc37543872621b7449b5a2567e9dc8"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "bf94091ed06aa6d235dac5a4d23ad1d0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "98d01ff954c8bfedd4e2e992b89bd29c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "677b8bcf0cdaf3331cef05dd231a5e5a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "6299e994f17bd1563ac76cd9bfa941c0"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "bd93d9f944ac695b3780dd0de7792af5"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "437f89808f91b91c6c77d449439bb0bb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "11cc115a42ec94f51b5a420dbed50f40"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b47da50a1280716e574fd425dbf34ec6"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3587f130d2c980a9f1fd7b8d33de3157"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "0a2cf237d4c8832d0c1cc935038f8a1a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c3bc5e998795e66914211a19820d34b5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "1d92990e829bd490a5cde7c3a52e9d40"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "e9beb25818cfadb2ae4230a34d8660d8"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "723b8b95089b42e06f73b46113354941"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "dfa439adee9b2f42bf3e8697be4ee546"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ceaf69c402f9412c93c71f60055b012b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8d52d0c2219d93fd7da5627f8ee9291e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "6070d50adafc3aeccaef0e558fabf354"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "abed7ca7932c217869ab9277a73a0c99"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "f39296941d061594ec9b97275a762c81"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ec2181aae09ddb32631644dacbfa6972"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "aa5c08aaec9a07724670dcf86ef4eeb8"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "51cdb819959ac6ce9fb06bed54ad62e8"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8cdd8a208ae79e695dfc5c91ce10528f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f16b51bce71d3649aba9fcf884b7b9a3"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "625ea2eed42f654c9477abf934cee8b1"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "65b8dc1ec26322ea885bfde992c26c1a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "206c8eeeb70e7d18b94a26931de8bd3d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ed45879feeaa08f926d87c2b30ecdf89"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d52c6f3d495a03e913054a90e00e5df4"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "dd8ea56e1b1c10e64b7ad964146086aa"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "18b6af4b694d810b712251c16fc62535"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ac74690ebcc9fea5f6dfdaf4463aac03"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c7a73822020c5ad3d1c6bfb239437250"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fb0ecb2327d675584d3a8b5e6be1f3d9"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "76c5ab79a5e050eded9301490124d97a"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "d1968a8ec7abc556c1da8e4e11009000"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "2730fc17595ea44fa1eed7eead6d21f5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4fc29ab531656cba4b0e643fbb33bc24"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "488af4a36e1dbcf45b915c1885906777"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ccac96da875ee967d27ebf54fd568ba7"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "4d93cfa79aa951c432b1d594d653bb34"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "2959d3a4a85cfe5613dc422cc79980ad"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "4ee80b6e4a687153ae9f5ec3d304a363"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6e950fe2416a74659e7153e6a66536f6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "87c4494add93cf058799019ad9fe07c0"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "79e2f93d4d9ffe55a45e59d260ac5360"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "bbdea3d0d6c24dc41e8beb86b8e42435"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "306dfad1f8d1d61a8fb574239f40d9cf"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "defda53a0e5aef2b042983f6783684ea"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "196d88772fae343dca2173d13c19759c"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "db26b380f8d83252419e0920cbe595c7"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "1bfb3d86d9925f41308ac456230d930b"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "610e301a4b2b91c5cc9cd9b35e8a3028"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "75c6d121b6beaeca2515d372a3b76126"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "97663f92425d8254c8b2b2f9d607cf60"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "74c0e61384c2ba71f1db1e3d45d64531"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "cfaa6e66d43deaa4d65abdf34a1b4a3d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e8eee57f89364a5deac0f64437d02d0"
  },
  {
    "url": "tools/code-review.html",
    "revision": "7a85e69728b23d88389b2758e33a9b83"
  },
  {
    "url": "tools/docsify.html",
    "revision": "8d07905d228a058753e030f0fafc6fe1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0d6c3fd367ff46650ac53293eb7ed613"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "55a156c447f0a27d4a43af46e68ce93c"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "d0fd5c79fc2434ec4d4e99d8cea30bd5"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f929f0f4688821d80c290e22dc9d7cb6"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "83eebcc75057220db675aef5825f80d0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5fb10b1575c64ad7c043c55d3652a778"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "04dceec59c75c891133bb5c5ebabfea3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "406df1d73e438bc1f076d183c4345ea4"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "67e4696f321fa1e0d559069e7110b133"
  },
  {
    "url": "tools/html/index.html",
    "revision": "864f398b626b9e7bb9a9b7286f96db08"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "22e8abc81e486068906ccab91bf10493"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "dae7a60236b43da182c99bfdd6dc3fe2"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "2c605f00086ed236a1d67bee621b15b5"
  },
  {
    "url": "tools/note/index.html",
    "revision": "7e18fe5407746e5808a29a567a64c081"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "69bd76ee6af1444d50b99882a2a98196"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "764f0151f6f4d2624aa28c94708163b6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1037fd39130a64aa34c00daf0a0e003f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ac53eabfbafbada3aa4ef0c9b0d0e729"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "eafb029be06e7921ad02571823cbcd4b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b5973f5ef2017fbccb891ec9f8a01e6b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "482043771aec1b5ff4740344a6fad39b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "d2546d082332ff4256c557b43a9528f6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4ea8863ea22c32a5de087e2933769d96"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "34a017a6a1b9e7898e8354c73ad66e63"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "ed7945be1bc42257f6a4aca23b832275"
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
