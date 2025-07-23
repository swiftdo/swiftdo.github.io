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
    "revision": "2f1b04446750ac528386ffb72158c93f"
  },
  {
    "url": "about/app/index.html",
    "revision": "ec4b42eba1412996105fa33cc24d62f6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7602f0309ccc3fc5864b281a043110ee"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bdfed1c3c616d90b5221d3af95ee0f38"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "3811847681480a1d7955146a0c1c0576"
  },
  {
    "url": "about/index/index.html",
    "revision": "90a1ccc5cf64d9faa5c71f1d6c245ac4"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "81efcbe5c6af87831b5924fbe390092f"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "4d7b14f122eed8ef4950ed123ef2b3db"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "9e64df82383ed0e608962066e52338d4"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "2ea8767fe069370d21bebc7b78b0a681"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "6b12a10e33277d61b8205b775fe60f19"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "8476994062d1847d900d2cb649875599"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "ec34d6d0b14371182759531dc715017b"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "226527bc2351bdcf57dd0433e7976c48"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "df86723541c9382f6cac98be7a4b5a14"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "1f1030eb340e45eb14aa211f273033e6"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "c84747ccdbbb6e4114fc8a8a311ff048"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "3b1ee81c9b18f5dee9440dc6652459ce"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "e34a740d7762172de2395965bd6ae68a"
  },
  {
    "url": "ai/tools/index.html",
    "revision": "eb26e9021698a6319b7c8674e89f6606"
  },
  {
    "url": "ai/tools/qwen-code.html",
    "revision": "5ff700dfa02a7229b3d4b51ff46c0216"
  },
  {
    "url": "algorithms/index.html",
    "revision": "aeaeb07ff99e5933b93f810669a4f5fa"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "2d96ac5d6b38e6447d49e2334d9b52b0"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "8848bd23e3aa95c2519c89728f60eef8"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "ee9df4e6c9c4b0ba9d63b3bae71e5442"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "b22ab0369d2a01621e3a29f8ca795b2c"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "dcf3398f028982fa4a6b85bf16646055"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "aaad8c402c3a3d421cc83d6b0c4bf8f9"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "a61ff5b8d692dd74ed6f8ca7760f9cab"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "f5d948581e42328e5780e6d791de5f57"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "450879d729dd59ed3f766a95b77a9533"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "ce3966da2790ae141ce3b3fb8eb92f4c"
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
    "url": "assets/js/100.0d587d8c.js",
    "revision": "42a4f74f0ca2b98cdb88af6a6552b85d"
  },
  {
    "url": "assets/js/101.a9cc3bda.js",
    "revision": "92fca1f471d1baded5623e1a522a97a3"
  },
  {
    "url": "assets/js/102.b5cdb86d.js",
    "revision": "32cf3bbf70da57a7e4e7840e6665469e"
  },
  {
    "url": "assets/js/103.84b8227a.js",
    "revision": "981350a7b96bcb6165e99fa07e650ba1"
  },
  {
    "url": "assets/js/104.08cce77f.js",
    "revision": "e284fde9c05ecad3f4b6c185bfcc2a21"
  },
  {
    "url": "assets/js/105.356d9cf0.js",
    "revision": "cdce28a10bfc41d909b80701eb31f51c"
  },
  {
    "url": "assets/js/106.f1b42f71.js",
    "revision": "0a0e916e6bce42496f3d1132c4c4551a"
  },
  {
    "url": "assets/js/107.e0ea05ba.js",
    "revision": "886548ba2f4ebdcb10f1e61d29ac1b17"
  },
  {
    "url": "assets/js/108.530248d1.js",
    "revision": "8389f674e873068256f9b70fd0517784"
  },
  {
    "url": "assets/js/109.932e4459.js",
    "revision": "f01870432892a84bea672f9f9d3c7633"
  },
  {
    "url": "assets/js/110.54438d51.js",
    "revision": "2a9287fe21e650d6330e398f8eb7ecf2"
  },
  {
    "url": "assets/js/111.d1425037.js",
    "revision": "b15172dde38d986418a2c81ab1d8907a"
  },
  {
    "url": "assets/js/112.8052e77c.js",
    "revision": "7b1281b4f35d107a24bba3469c683c1e"
  },
  {
    "url": "assets/js/113.753b73f7.js",
    "revision": "d700dbdf3041678cd81719d9c31e3dd4"
  },
  {
    "url": "assets/js/114.0e2583bf.js",
    "revision": "bbb876fbfe471fed210199b61dd2d470"
  },
  {
    "url": "assets/js/115.6805e14e.js",
    "revision": "21006dc5bb78b5344bd600e183b94b37"
  },
  {
    "url": "assets/js/116.6c6a338b.js",
    "revision": "c99613f266a6b20096b2c8cd9e371fb4"
  },
  {
    "url": "assets/js/117.517bd2ec.js",
    "revision": "d237056a7011a784aed93f2aedbe3d7c"
  },
  {
    "url": "assets/js/118.3b6ba223.js",
    "revision": "9ff5eb5e3cb4cbb2c817093f07d0eefd"
  },
  {
    "url": "assets/js/119.6b8e2445.js",
    "revision": "2856a7c17ff3694160712f332bbdd7bc"
  },
  {
    "url": "assets/js/120.633227d8.js",
    "revision": "2db8c85b9b29735c68f1bd8aab570484"
  },
  {
    "url": "assets/js/121.2a9b42ff.js",
    "revision": "e8d7265fe5c67595084d0a84d77eb4cd"
  },
  {
    "url": "assets/js/122.d632b341.js",
    "revision": "896f83201e3dc97818c2ea4dd5f6a2c0"
  },
  {
    "url": "assets/js/123.3b08c62d.js",
    "revision": "785a64f900b444fccb6ebba4e6c1a076"
  },
  {
    "url": "assets/js/124.1e928619.js",
    "revision": "d5ae7d2c191acc89fed141ca67683325"
  },
  {
    "url": "assets/js/125.787d2620.js",
    "revision": "92ce8fa60d6a2149102d1f33d0ea1384"
  },
  {
    "url": "assets/js/126.ac9ddbdc.js",
    "revision": "91efa4b9c17c5fdf834468e3ac5be0b7"
  },
  {
    "url": "assets/js/127.42ace4f2.js",
    "revision": "4016a1978f2707a5bc12397c9aa702fa"
  },
  {
    "url": "assets/js/128.5f7de6c2.js",
    "revision": "6c726c098d1e5b60ecabff9fdecdecd4"
  },
  {
    "url": "assets/js/129.e7bbdc55.js",
    "revision": "6cb514fff3b8bd4a3a82d0dfb61115bd"
  },
  {
    "url": "assets/js/130.c9852ac1.js",
    "revision": "78df925c9a3e5256bddaf87b37adaa7c"
  },
  {
    "url": "assets/js/131.2fbae861.js",
    "revision": "a15fd5c2c953afb68df1dcb1dc6c4544"
  },
  {
    "url": "assets/js/132.c534785b.js",
    "revision": "7f330e98d09ea6323f6315991a9d79c5"
  },
  {
    "url": "assets/js/133.828aa499.js",
    "revision": "4d266fa3d6e53ba9693106c1ace38e9d"
  },
  {
    "url": "assets/js/134.0e47ce6e.js",
    "revision": "058752d866c24fca23c56ae02a72f4d6"
  },
  {
    "url": "assets/js/135.b46ff135.js",
    "revision": "6da1a8dfb82b3a1818135e2d26bdcf7c"
  },
  {
    "url": "assets/js/136.67d0f06c.js",
    "revision": "c2ef0824b1c70100c7fec7ebc3d8fc26"
  },
  {
    "url": "assets/js/137.a1b1e1f9.js",
    "revision": "8439fa663f98a7e9cd2a2c2f745ad125"
  },
  {
    "url": "assets/js/138.0020d6d9.js",
    "revision": "85d99aaeb20dd5bb11ac45e34725648a"
  },
  {
    "url": "assets/js/139.002ddb0b.js",
    "revision": "ef955f56f3ad8286ad2f9f087eea81a9"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.9bdcf424.js",
    "revision": "acf45af2ac399147138540762bd35da9"
  },
  {
    "url": "assets/js/141.92e27335.js",
    "revision": "413582e6c14229d5fd8f5ce71a231284"
  },
  {
    "url": "assets/js/142.6bb3e982.js",
    "revision": "0bf64c8c4a4b983142bd265e93ded83a"
  },
  {
    "url": "assets/js/143.01044866.js",
    "revision": "497ef64823bec42c5b2931df92eea6a2"
  },
  {
    "url": "assets/js/144.848b25d7.js",
    "revision": "7c3aa46349cd473153374b8adc5979c4"
  },
  {
    "url": "assets/js/145.7dd16e64.js",
    "revision": "627dd51dc09c8494c51427245d257a45"
  },
  {
    "url": "assets/js/146.e05ccb79.js",
    "revision": "47535ff94790e410db7ffecb26b907b7"
  },
  {
    "url": "assets/js/147.f5531ba3.js",
    "revision": "55d1951aebd319d114bb906453f137aa"
  },
  {
    "url": "assets/js/148.00e2435a.js",
    "revision": "9a9161274bb20ac8794c412e556ac0fb"
  },
  {
    "url": "assets/js/149.316b71a1.js",
    "revision": "0c37392a9ce73e2e8210b9603fd2b526"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.75c2a45c.js",
    "revision": "ff7569facfbad53fa578d85e1c794499"
  },
  {
    "url": "assets/js/151.9eab3519.js",
    "revision": "0d528d7fa8d320d936ec80537fc0da2e"
  },
  {
    "url": "assets/js/152.a2d3c20c.js",
    "revision": "c3d6da8952b20954693235bdf563b4c8"
  },
  {
    "url": "assets/js/153.acf2b7d1.js",
    "revision": "1914a0b965840632759157f35baea24f"
  },
  {
    "url": "assets/js/154.37e1eead.js",
    "revision": "1f38cb500cc0266f9b5c4357e50fb45c"
  },
  {
    "url": "assets/js/155.c0a0f796.js",
    "revision": "95b243e4406aa693d83a97a6bcc8b452"
  },
  {
    "url": "assets/js/156.edafb82b.js",
    "revision": "4674e7ce55c403be0df88f7720cf01d6"
  },
  {
    "url": "assets/js/157.c67e5734.js",
    "revision": "d2840e4c06b1f8f41e677d5b30aa50d9"
  },
  {
    "url": "assets/js/158.834a6f37.js",
    "revision": "23d6a1bca01f1173fcce05bcff6c9131"
  },
  {
    "url": "assets/js/159.6179f0c2.js",
    "revision": "b61bad92f54aa839e78be5f51a1d6456"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.1f3214dc.js",
    "revision": "8c1936968136bfb5187846e213ac3fa3"
  },
  {
    "url": "assets/js/161.8c38c33f.js",
    "revision": "3f6c9b84800b35cac1a1782381221415"
  },
  {
    "url": "assets/js/162.f5ba64f4.js",
    "revision": "3adbf4a656f7cae4d04c54533a8b49e2"
  },
  {
    "url": "assets/js/163.bb88d390.js",
    "revision": "cf9bb191d24aa0b1825f5e9651b687c7"
  },
  {
    "url": "assets/js/164.42ede458.js",
    "revision": "f8d44059f3911fec9f6a663d9edf9e45"
  },
  {
    "url": "assets/js/165.504941bd.js",
    "revision": "e4f9e7352fce2bf677f040a9ac6470d9"
  },
  {
    "url": "assets/js/166.b45d5e8d.js",
    "revision": "659dd94f643d737a649eb3360bc4a928"
  },
  {
    "url": "assets/js/167.2978bcde.js",
    "revision": "fed752081c0d2644471eae6830aba414"
  },
  {
    "url": "assets/js/168.9a033d92.js",
    "revision": "18a532d774eac6ade052851e3b315140"
  },
  {
    "url": "assets/js/169.b3585357.js",
    "revision": "29077d8d05c285ec3dbc9e86ccbcb2af"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.489e3d12.js",
    "revision": "2d7f1ca405657c52aa65c53c2d37b9d2"
  },
  {
    "url": "assets/js/171.2dd188bc.js",
    "revision": "af8403526cc228bf302710de73460c05"
  },
  {
    "url": "assets/js/172.1d4f1a24.js",
    "revision": "6d582920e7c5dfcb11c9bcbb42f38a6e"
  },
  {
    "url": "assets/js/173.af6402c3.js",
    "revision": "debddd555d91b554193d246111f6831f"
  },
  {
    "url": "assets/js/174.85706e23.js",
    "revision": "f5c026e7abb7ca5f8f303efb5e6e39d1"
  },
  {
    "url": "assets/js/175.96439bc7.js",
    "revision": "44098770fd05ef6f0afab0b1adc0ba63"
  },
  {
    "url": "assets/js/176.256849f3.js",
    "revision": "3e0e00619b908882fbc1ee6d98a65a14"
  },
  {
    "url": "assets/js/177.25a83045.js",
    "revision": "992b78b2c1e86df500f4bb3950396c91"
  },
  {
    "url": "assets/js/178.11d610fa.js",
    "revision": "a7c087296a7695bc456973cf5fff61a2"
  },
  {
    "url": "assets/js/179.9569b4f1.js",
    "revision": "9b5d6fc7aa5d76383811158e8515d677"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.8c4bd11a.js",
    "revision": "823e6dcb4a70544220148ff47782f25c"
  },
  {
    "url": "assets/js/181.271a2f88.js",
    "revision": "b2d0321b899ca80f25d49f2646659101"
  },
  {
    "url": "assets/js/182.eae17aae.js",
    "revision": "92e1e3fe3e6de86e6d0cb9dd028156ad"
  },
  {
    "url": "assets/js/183.133cb355.js",
    "revision": "8c4c56d03e3f87c984fff9542ef9e8fb"
  },
  {
    "url": "assets/js/184.88579378.js",
    "revision": "a1fd9acc1fb250af393d0a8e4711e898"
  },
  {
    "url": "assets/js/185.d9751848.js",
    "revision": "5ec21537cbabc2b1c07c25dfd9934505"
  },
  {
    "url": "assets/js/186.7dcf8aa8.js",
    "revision": "d54aad53816383dc2a3db45f59b170fa"
  },
  {
    "url": "assets/js/187.c9fbaa22.js",
    "revision": "13cba094628c65162503651a66a36469"
  },
  {
    "url": "assets/js/188.3e05df51.js",
    "revision": "f1056f97149aac5f2b3e33c14824d90f"
  },
  {
    "url": "assets/js/189.dd36d77a.js",
    "revision": "fc14f669bdad54c9852ac9905353e1df"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.db50e751.js",
    "revision": "6b93ae6f071b6a603fd78ae45ef9287d"
  },
  {
    "url": "assets/js/191.18a84b5e.js",
    "revision": "213cf98a07b3d3c87f27ee3bc77b7d6e"
  },
  {
    "url": "assets/js/192.1c050aa8.js",
    "revision": "46b03d44bd222c38737c1075424bbe5e"
  },
  {
    "url": "assets/js/193.3a5acdf7.js",
    "revision": "8ed5c3def06cba00aadcb244e50bb577"
  },
  {
    "url": "assets/js/194.4bc57196.js",
    "revision": "55c45b029ddd9f08622881de61686665"
  },
  {
    "url": "assets/js/195.079d9ab4.js",
    "revision": "f7f0b6a64482a49d7fae072778b587e5"
  },
  {
    "url": "assets/js/196.6b44fec3.js",
    "revision": "b827dc3a922b4f8d9cbc6b24501b2d3a"
  },
  {
    "url": "assets/js/197.e60c7449.js",
    "revision": "64dfacfab5578417318df98a16aafba9"
  },
  {
    "url": "assets/js/198.0c3b1bf7.js",
    "revision": "40442c70c9b8c69bf35da71d36a84b00"
  },
  {
    "url": "assets/js/199.f619b015.js",
    "revision": "95d80df22350805c683d4f8a50361320"
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
    "url": "assets/js/200.57ecdf34.js",
    "revision": "81dbed9eaefb29d86bfff82ad95d681d"
  },
  {
    "url": "assets/js/201.640f3ea5.js",
    "revision": "e2de6b45523e56bd094b690c638afc98"
  },
  {
    "url": "assets/js/202.7338c9cf.js",
    "revision": "09fa3eb044893a63e277a8c47aedca5c"
  },
  {
    "url": "assets/js/203.6d2cdeef.js",
    "revision": "a68287f6682ed8dd23bf595e31bcb7d6"
  },
  {
    "url": "assets/js/204.f83fd371.js",
    "revision": "8f10a183c4390a2d77ff20e118de008e"
  },
  {
    "url": "assets/js/205.4e201799.js",
    "revision": "4c9ba2dfd64addb1731f3913788d6d8c"
  },
  {
    "url": "assets/js/206.68b049b2.js",
    "revision": "feb322903c70f7d237c14831d36fba11"
  },
  {
    "url": "assets/js/207.fdff9761.js",
    "revision": "1e7aaa5237e16a40028c92c78dd86109"
  },
  {
    "url": "assets/js/208.a7918cca.js",
    "revision": "94cc10166d3eb45129513e9d6c168bb7"
  },
  {
    "url": "assets/js/209.f6239928.js",
    "revision": "975c8ab8b7fb050d6dbb98e88c812f79"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.e4fc7663.js",
    "revision": "6cb5a7c3a3fc05aac057164cb818a0ed"
  },
  {
    "url": "assets/js/211.153c7b49.js",
    "revision": "65a36e7a95c25b842dfffc8c3d23b6ae"
  },
  {
    "url": "assets/js/212.9cc6e42a.js",
    "revision": "eaafec203d5982a541bdc903855b4cca"
  },
  {
    "url": "assets/js/213.fca461d7.js",
    "revision": "a2eeee28b36bc104fcfb2c1c3850dfb6"
  },
  {
    "url": "assets/js/214.30a910d8.js",
    "revision": "96c536bd41fa95d5f9d429d1b458f8c8"
  },
  {
    "url": "assets/js/215.05f956b4.js",
    "revision": "4ec4dc01c072f6db64ef923657120dcb"
  },
  {
    "url": "assets/js/216.9baa41d4.js",
    "revision": "1466c7585089a0c1d48517c4c9c9a1f7"
  },
  {
    "url": "assets/js/217.cb870af6.js",
    "revision": "bb91cafc45c14831bb682ce494f4375d"
  },
  {
    "url": "assets/js/218.9b32f5a8.js",
    "revision": "bd3f39713d777adfc30b9a6d35c9c87b"
  },
  {
    "url": "assets/js/219.7e1e6b8f.js",
    "revision": "3a3e383c6258b3daae28df78eac2f805"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.60a87de8.js",
    "revision": "d28be65f249fc510983d5cb8eea8daa2"
  },
  {
    "url": "assets/js/221.da6749f5.js",
    "revision": "d1d0a3632d64f093a6cee51c705fe09e"
  },
  {
    "url": "assets/js/222.d67a3e8f.js",
    "revision": "f9d11718da010abb8cfdf4820129c445"
  },
  {
    "url": "assets/js/223.1e590c7c.js",
    "revision": "42db47327f0777365d7693b70fdec1a0"
  },
  {
    "url": "assets/js/224.414807c8.js",
    "revision": "df0978a16450261a401657dab94bf348"
  },
  {
    "url": "assets/js/225.221fd99c.js",
    "revision": "afde69c6356bd5e11721dfad19da64a9"
  },
  {
    "url": "assets/js/226.cec6a793.js",
    "revision": "c14069b0d868f953220d9d83c5220580"
  },
  {
    "url": "assets/js/227.969bf482.js",
    "revision": "63293c883e048c6e27d60d508c9b2512"
  },
  {
    "url": "assets/js/228.15013ae5.js",
    "revision": "056e0f2e11746e10ee6e1c1bb9f6f312"
  },
  {
    "url": "assets/js/229.c3589c4e.js",
    "revision": "a9f6d22e3cee38412a97f15d36dd3720"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.becb8fca.js",
    "revision": "a004c232d7ba29c0d675da99184ba394"
  },
  {
    "url": "assets/js/231.36add8be.js",
    "revision": "96bb5e1720ba1dd222d9112e73ba3faa"
  },
  {
    "url": "assets/js/232.3ff21a6d.js",
    "revision": "d5b0e2c2def048e4bf25f8ea738989da"
  },
  {
    "url": "assets/js/233.976f9aab.js",
    "revision": "29d7d48c631f5656b64b115498f0405a"
  },
  {
    "url": "assets/js/234.c4a95b42.js",
    "revision": "b6b0daadc43cb535bdc5737100ed51a4"
  },
  {
    "url": "assets/js/235.519e25e9.js",
    "revision": "eaf27a782c58c770360674acce52a864"
  },
  {
    "url": "assets/js/236.16982717.js",
    "revision": "4213e3a09a0e9588c512b49c8f086995"
  },
  {
    "url": "assets/js/237.d705a81f.js",
    "revision": "48d3cdf496c689865b2c4e2e03a3f731"
  },
  {
    "url": "assets/js/238.129aadaf.js",
    "revision": "4e43daddcdcbfb9ff5d39f6bc4f0b8ab"
  },
  {
    "url": "assets/js/239.1dfa29e0.js",
    "revision": "69f8a68384f680f07bd3fce6638b1ec3"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.98a76da9.js",
    "revision": "d93740b3f41ac6345a8cd9866a0f4dd9"
  },
  {
    "url": "assets/js/241.0ff0e4db.js",
    "revision": "a2d68c33bcd3c055e0cb2a8ae902f571"
  },
  {
    "url": "assets/js/242.9ba02bfb.js",
    "revision": "37ebc1b969c05e8bd011745ef3ae3d1f"
  },
  {
    "url": "assets/js/243.704da06d.js",
    "revision": "1f1625828aa328ea2898fad33af1dfeb"
  },
  {
    "url": "assets/js/244.a2af5c60.js",
    "revision": "8e9cba29a7fb68495a64fa0b8e4d5674"
  },
  {
    "url": "assets/js/245.422a1f26.js",
    "revision": "a485e778c1f1c7ad600aea8c857db24f"
  },
  {
    "url": "assets/js/246.69d87d35.js",
    "revision": "2a15c1d65463d52d9c23d97a6c799653"
  },
  {
    "url": "assets/js/247.5e810651.js",
    "revision": "48e397a5097168a8ae944c80d8942787"
  },
  {
    "url": "assets/js/248.16feb2dd.js",
    "revision": "027bf861c70ed8be0e7a2a19742b236c"
  },
  {
    "url": "assets/js/249.aafbad82.js",
    "revision": "b204fcf85a105fb67b408d93490e5309"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.39fd6584.js",
    "revision": "0adaa0ee0fae068246823f6cad5211ad"
  },
  {
    "url": "assets/js/251.76e75d5d.js",
    "revision": "220aeb6f6fba4ee379b5eb286d96941b"
  },
  {
    "url": "assets/js/252.98d20823.js",
    "revision": "83b6a30fc9f83417989170c29f85dffe"
  },
  {
    "url": "assets/js/253.86febc36.js",
    "revision": "7d71dc689f91ce816ead9db75be0a8c5"
  },
  {
    "url": "assets/js/254.48e71fe0.js",
    "revision": "4af397d65c34a68e77c9e3b61b29202f"
  },
  {
    "url": "assets/js/255.3f51f6f7.js",
    "revision": "f7be6f550c6cfb4039dd9960540249dc"
  },
  {
    "url": "assets/js/256.e0615594.js",
    "revision": "66a95ccd817ecf58f586e84066681314"
  },
  {
    "url": "assets/js/257.09711c8f.js",
    "revision": "330ed4f3d97e21e25862bf556c3e8ca3"
  },
  {
    "url": "assets/js/258.df62e996.js",
    "revision": "4a8c346a455f8a6f3a9479a4915d36a9"
  },
  {
    "url": "assets/js/259.3c600075.js",
    "revision": "a7e75d961022deae07b26f84497c0aec"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.3d294620.js",
    "revision": "304b72b18415ac65762911ce4e70cb13"
  },
  {
    "url": "assets/js/261.3949fdca.js",
    "revision": "c052d432b0035b166cde2ba1cdff5d87"
  },
  {
    "url": "assets/js/262.da3cfd3b.js",
    "revision": "40ff91f2eb4fd9229519e2d1cf5e553d"
  },
  {
    "url": "assets/js/263.e648dff0.js",
    "revision": "bd1e7afe30235e2144fa745621d1bee3"
  },
  {
    "url": "assets/js/264.c92f2bdc.js",
    "revision": "2adfa92babe513a482cad157eb658d4a"
  },
  {
    "url": "assets/js/265.eb1ad334.js",
    "revision": "4dcae9e33b4493cd52cee305ebc1558b"
  },
  {
    "url": "assets/js/266.475007e2.js",
    "revision": "38f1e601e0fe6b6c6bfc29aa50d36494"
  },
  {
    "url": "assets/js/267.e47794e3.js",
    "revision": "d003ad1d298e91577b3f3be236858c82"
  },
  {
    "url": "assets/js/268.f1ce6052.js",
    "revision": "a2a02497a69e8012f4984421f2021bc2"
  },
  {
    "url": "assets/js/269.59c531e7.js",
    "revision": "adeaf336fc284980f58ecc2a88aa54d1"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.8da207f2.js",
    "revision": "7f96484203644459bf45068cc33f5814"
  },
  {
    "url": "assets/js/271.3d7b4365.js",
    "revision": "e130dd4ed0408a8d469d7b4620f822d0"
  },
  {
    "url": "assets/js/272.3d1902c8.js",
    "revision": "fff388b96fc3e22f7eb5904fd15cec5e"
  },
  {
    "url": "assets/js/273.74a95a06.js",
    "revision": "27edcdcc9f425b771db0a1f30c921ac2"
  },
  {
    "url": "assets/js/274.e075e05c.js",
    "revision": "8e49554121a2c42cc2524c259beed3b7"
  },
  {
    "url": "assets/js/275.7eb271ba.js",
    "revision": "4e0131042cd9be1b183fa511a8ec018f"
  },
  {
    "url": "assets/js/276.626d77b9.js",
    "revision": "dbc73746b57343136ebfe5167933f100"
  },
  {
    "url": "assets/js/277.4ea2aa86.js",
    "revision": "7e4f4e01fd585bfd9d49fffebd4ac495"
  },
  {
    "url": "assets/js/278.f5a72407.js",
    "revision": "b10edfb488f5bf64cb2d5bfd935aaa67"
  },
  {
    "url": "assets/js/279.f07c153a.js",
    "revision": "42c110f0e86f4035401119c0b1fc2dea"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.0b8357fa.js",
    "revision": "28746b799b0e29e830ffb84c2520ed14"
  },
  {
    "url": "assets/js/281.df5311c9.js",
    "revision": "deb96c4c5393db7f2b45a9f6d2c8ebc4"
  },
  {
    "url": "assets/js/282.59a52a46.js",
    "revision": "6a1746c8cd610d3bb50878e5dd3586b9"
  },
  {
    "url": "assets/js/283.856578dc.js",
    "revision": "4262be1d1fa9b914c8b3d7e299af37a4"
  },
  {
    "url": "assets/js/284.a8d6f0fc.js",
    "revision": "da50a4e1ae963a184c48ded03d14a5e0"
  },
  {
    "url": "assets/js/285.fee76be3.js",
    "revision": "6165a32b5d4dc0db96419ad5e411590b"
  },
  {
    "url": "assets/js/286.a56bc4c9.js",
    "revision": "7e8cae1c5da232b910ead1650f8cffe4"
  },
  {
    "url": "assets/js/287.c77973ed.js",
    "revision": "7776937c36f751e4a7df9b3552b2992a"
  },
  {
    "url": "assets/js/288.a0948834.js",
    "revision": "4b3d805459c0fc013101dc675abc2147"
  },
  {
    "url": "assets/js/289.5fe62a66.js",
    "revision": "575ce4b8d2ed8d173c7c8a18e2038546"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.4bf0b21e.js",
    "revision": "7c158fd4075c22ac2d21f76deea822be"
  },
  {
    "url": "assets/js/291.571ec59d.js",
    "revision": "4f810267f36bf34489a1e1cda684ecc8"
  },
  {
    "url": "assets/js/292.64d98e17.js",
    "revision": "966a93496ed3eb4ff74f4e8cf4b3624a"
  },
  {
    "url": "assets/js/293.85899782.js",
    "revision": "9dcfc430f4bd8af636816ca0d741262b"
  },
  {
    "url": "assets/js/294.5d8957e9.js",
    "revision": "6687d7be3c4d0627f4ee860e1c4f2de9"
  },
  {
    "url": "assets/js/295.e44dfc99.js",
    "revision": "003934741604e43c35753e7b8c1f77d9"
  },
  {
    "url": "assets/js/296.92596d83.js",
    "revision": "5fa11b07338f511bc2bd0c1af3fb2491"
  },
  {
    "url": "assets/js/297.2fc411cb.js",
    "revision": "73d31ee223b836578e5b59c14616c3fe"
  },
  {
    "url": "assets/js/298.c55816cc.js",
    "revision": "bfb4e3c4da79c39625e4ce8f911eadeb"
  },
  {
    "url": "assets/js/299.fb193a29.js",
    "revision": "9ca350ff2cf7836e5d35ff0a74f086b2"
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
    "url": "assets/js/300.5423ba34.js",
    "revision": "51aeeed04ca982a812423901014a3df1"
  },
  {
    "url": "assets/js/301.9ba79238.js",
    "revision": "9c8a9f763b289e859ddcdc221e892f49"
  },
  {
    "url": "assets/js/302.f77f9c0c.js",
    "revision": "804a351b3adbbb313fc4341bd48537ab"
  },
  {
    "url": "assets/js/303.79124e01.js",
    "revision": "07550be1c5fd56e5dcfadcaa32082ca8"
  },
  {
    "url": "assets/js/304.b84453f0.js",
    "revision": "bc575d3f3d2922f0e6c3286e446cedfd"
  },
  {
    "url": "assets/js/305.e49b398a.js",
    "revision": "43b42bde2bf571a8801a62ac35dc0a29"
  },
  {
    "url": "assets/js/306.f24aab76.js",
    "revision": "799e1fb363f42d7b5b91b046f1419f2a"
  },
  {
    "url": "assets/js/307.1426f97f.js",
    "revision": "4eda3170fdbed170270c753bbf5aab3a"
  },
  {
    "url": "assets/js/308.447c7662.js",
    "revision": "06a7ff0bd8d9b60c5badc77938269ae7"
  },
  {
    "url": "assets/js/309.b4b0cbfc.js",
    "revision": "b96839923c0284553860b78c5a4c1d2b"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.c37af0f4.js",
    "revision": "0466c8d113085c34dc934bcf92a3eeac"
  },
  {
    "url": "assets/js/311.cf8f0f5f.js",
    "revision": "3ad698c73996b0b5765f2fee7e698984"
  },
  {
    "url": "assets/js/312.49f64c25.js",
    "revision": "edfd1f75bdff9dbbdceadd1e95198355"
  },
  {
    "url": "assets/js/313.b10e7cf6.js",
    "revision": "788e85c30d589eb693ca3e5c2aa096e5"
  },
  {
    "url": "assets/js/314.fafe9b9c.js",
    "revision": "e8f7ab3e782eaa7c64686c2686970f68"
  },
  {
    "url": "assets/js/315.d00c403c.js",
    "revision": "7dfe5158f09221baa8e739be7e916233"
  },
  {
    "url": "assets/js/316.9d8b8673.js",
    "revision": "b49a36b971d7fa00ae3fe16a41e17a37"
  },
  {
    "url": "assets/js/317.236f6098.js",
    "revision": "6c21a8656edfe618118a8fbd7f85efe5"
  },
  {
    "url": "assets/js/318.15b0231e.js",
    "revision": "700cc2ae64cd68778346b4cf463f30b1"
  },
  {
    "url": "assets/js/319.8e4dc481.js",
    "revision": "f5de88a10e674d8d89e998db572f45f4"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.d717a749.js",
    "revision": "857af3ecfca674ee802056dd8d016170"
  },
  {
    "url": "assets/js/321.cb1504ec.js",
    "revision": "eedefb92a38f1d198d2adbc05ec8af26"
  },
  {
    "url": "assets/js/322.cfa9c65c.js",
    "revision": "8abb1de1d6cd25bd09142162932575b1"
  },
  {
    "url": "assets/js/323.369901f4.js",
    "revision": "072899480303600bbf08482acd08d258"
  },
  {
    "url": "assets/js/324.b7ad666f.js",
    "revision": "8cb37f047e303bb542df9a52366d561f"
  },
  {
    "url": "assets/js/325.2ce3257c.js",
    "revision": "7d39576248b69574a343790b85196e92"
  },
  {
    "url": "assets/js/326.88af3e25.js",
    "revision": "a60525605453fdba3c97fc09c149bf4e"
  },
  {
    "url": "assets/js/327.086dae6e.js",
    "revision": "592114d60862794c000e6682e328c2eb"
  },
  {
    "url": "assets/js/328.1dc4133a.js",
    "revision": "f6773f41721cb0181e2962fbbe9f4bef"
  },
  {
    "url": "assets/js/329.4a5bcb46.js",
    "revision": "6bef53e659c8138278c640ef955352e1"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.c8533cd1.js",
    "revision": "cbbd353777723bd3c4b02ca7e294984e"
  },
  {
    "url": "assets/js/331.5742ea37.js",
    "revision": "38a3a7a0b8bf7d7fc93c44cd9229360d"
  },
  {
    "url": "assets/js/332.b6084599.js",
    "revision": "ee754fd78aa903f6390ebd12ea084b46"
  },
  {
    "url": "assets/js/333.73732218.js",
    "revision": "81f2f058c1a65d2f4313f8e743c84588"
  },
  {
    "url": "assets/js/334.9951b729.js",
    "revision": "e41876d182e94369be3c54b29c5c9f5e"
  },
  {
    "url": "assets/js/335.c3efbde0.js",
    "revision": "335bc30060ecb64ecfa7a831463b7e30"
  },
  {
    "url": "assets/js/336.97a75671.js",
    "revision": "573b7fe4d74dfae09b82482573aaa027"
  },
  {
    "url": "assets/js/337.04c16314.js",
    "revision": "fe181f1698f2c107edc1134ee7423ac9"
  },
  {
    "url": "assets/js/338.a670563e.js",
    "revision": "1e76b3fe20c63bdb6d2f940ca68cf94c"
  },
  {
    "url": "assets/js/339.ea0aaaf5.js",
    "revision": "125ecc8ab0c95dd6732860188f1044be"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.ee8a74a0.js",
    "revision": "a1563ae511bf1f4a7874c71c0f68419b"
  },
  {
    "url": "assets/js/341.a995bb07.js",
    "revision": "cecb4e7105c0e4f140209b4500b0b946"
  },
  {
    "url": "assets/js/342.cc191f2a.js",
    "revision": "48f90d89f4059f6970f6b00c3ddf75de"
  },
  {
    "url": "assets/js/343.aa2d3440.js",
    "revision": "a420d5350cc6a5ad8d2beaa73764ae88"
  },
  {
    "url": "assets/js/344.5afa9627.js",
    "revision": "88406346c3cbe2712051123a0e7b35cd"
  },
  {
    "url": "assets/js/345.ee295598.js",
    "revision": "5c50c87091c64bae99affd35a541908e"
  },
  {
    "url": "assets/js/346.a7f1da89.js",
    "revision": "cb476fe084a8c1ca416dc93c5aeb8e77"
  },
  {
    "url": "assets/js/347.3ed43fb6.js",
    "revision": "4c80953c4d627b095805a06f740add88"
  },
  {
    "url": "assets/js/348.5316327c.js",
    "revision": "611e6452da846bcda02e1f4be27c495c"
  },
  {
    "url": "assets/js/349.c544333f.js",
    "revision": "9ec15c78802c73b56bdbb7049fa3cff1"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.8c7faa5d.js",
    "revision": "cd0e51ede624c39af832a1bb63c2650b"
  },
  {
    "url": "assets/js/351.a2078a3d.js",
    "revision": "7a8bae79b0d234c2ea086a1b9d90ca80"
  },
  {
    "url": "assets/js/352.e8e2e566.js",
    "revision": "b495b7380b08e030e1e02fd1d15189f4"
  },
  {
    "url": "assets/js/353.71c3c7dd.js",
    "revision": "9a16784e96aa9b14e73b7b4dd466c5e6"
  },
  {
    "url": "assets/js/354.b7317d18.js",
    "revision": "a34ea240cdcc2d4aeb62183fa5b0c4b3"
  },
  {
    "url": "assets/js/355.2cb2b350.js",
    "revision": "9f7293a074e4978c1f9b8d13ca92253b"
  },
  {
    "url": "assets/js/356.f4e6f187.js",
    "revision": "10da33dd45e3a005277060af7846665d"
  },
  {
    "url": "assets/js/357.d8262426.js",
    "revision": "d6f3165e4c178c3feddc05f777953d97"
  },
  {
    "url": "assets/js/358.52f0a180.js",
    "revision": "6d8b27b863afe91f0a0f87e35bf083ee"
  },
  {
    "url": "assets/js/359.9abac4b5.js",
    "revision": "84b0cfe24f7599670914bcc0b38567e6"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.6003e817.js",
    "revision": "a4471d083513cffb233c506804cdf6e2"
  },
  {
    "url": "assets/js/361.093e97da.js",
    "revision": "d0253d7196dab35e25da27d504d9371c"
  },
  {
    "url": "assets/js/362.df1d23a2.js",
    "revision": "2d06407d86e21c59cbb8c9507f71153a"
  },
  {
    "url": "assets/js/363.f953970c.js",
    "revision": "0fe45f95c186e5a8f2c34e869e7af8d2"
  },
  {
    "url": "assets/js/364.467964f5.js",
    "revision": "f9bd07c1b476c3a6af77d516bc715d64"
  },
  {
    "url": "assets/js/365.9c185a21.js",
    "revision": "c91a56113d1540d5c1f95f3a991ed987"
  },
  {
    "url": "assets/js/366.ac2b5735.js",
    "revision": "bd94d2f50e77eb173dd5acbc2ff5e885"
  },
  {
    "url": "assets/js/367.6f109ed7.js",
    "revision": "f56f79f8d060799351d9b94690891e71"
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
    "url": "assets/js/41.2f9fca85.js",
    "revision": "7535916a44b67bc6860299d78875cd54"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.2e96c386.js",
    "revision": "e279e456eff37634a528b23eaa1b9158"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.89eac773.js",
    "revision": "c7330ecc6eea47045ecfebf732c29932"
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
    "url": "assets/js/51.9a163497.js",
    "revision": "29d4edac1230e87fab36eb61a6cf2100"
  },
  {
    "url": "assets/js/52.ad037c2b.js",
    "revision": "beb6116830765de5ec2382f3c8f0bf4d"
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
    "url": "assets/js/55.6e30dd97.js",
    "revision": "df1d8fe7904181ae194f41ee00e91bc4"
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
    "url": "assets/js/58.b6cec79d.js",
    "revision": "5d12ac11ee75fcd1c3ca77d6db2c0c86"
  },
  {
    "url": "assets/js/59.8e85a53e.js",
    "revision": "e63da12f9705c62cd3245bdbc6d191d9"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.886947d6.js",
    "revision": "7ca49c904ba986098457d1acaaf8542e"
  },
  {
    "url": "assets/js/61.fb831e0d.js",
    "revision": "85042daf64c52cfde1cefffaf4e1067b"
  },
  {
    "url": "assets/js/62.4ad947a5.js",
    "revision": "c2b90d6ffc6b16bfbe495f3fefac9dc3"
  },
  {
    "url": "assets/js/63.a3bce606.js",
    "revision": "4eb04944667ec6e6c7edb77b7d8d8e73"
  },
  {
    "url": "assets/js/64.efab652f.js",
    "revision": "8074658b3da38f53df5cc8b9164acb48"
  },
  {
    "url": "assets/js/65.09e32a4e.js",
    "revision": "5d44bf574dad4dc95bf9ca58a85b6205"
  },
  {
    "url": "assets/js/66.3d6ce4b3.js",
    "revision": "dea09b178386de07432b3d7d9aee132d"
  },
  {
    "url": "assets/js/67.c876f443.js",
    "revision": "392836d45a90d90daa698734d8cd4102"
  },
  {
    "url": "assets/js/68.cba05c4b.js",
    "revision": "b30e4301a0aa7cf628bc570965e23380"
  },
  {
    "url": "assets/js/69.6621cddf.js",
    "revision": "03387afe1f2b98b298b4c3bfff46d6a8"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.a423da93.js",
    "revision": "4a46bad8fa8c5437f30c2adf28b2c209"
  },
  {
    "url": "assets/js/71.ad117358.js",
    "revision": "b6541bb4b8aec091badec8cb82f231e9"
  },
  {
    "url": "assets/js/72.a5a26ba3.js",
    "revision": "da2c8accdd56d97a9954d2ec19d2bbc9"
  },
  {
    "url": "assets/js/73.50c3c308.js",
    "revision": "5a91a071a929385b1b2ff4a667144be4"
  },
  {
    "url": "assets/js/74.a8b0fd46.js",
    "revision": "449b27314a5bc1a3c19c590c1582bfbc"
  },
  {
    "url": "assets/js/75.6a962d7a.js",
    "revision": "cd962be3d0cf89d8f5b23e39a17008b1"
  },
  {
    "url": "assets/js/76.d2e97409.js",
    "revision": "f79d2d8847ac059b66e7e33cddb3478a"
  },
  {
    "url": "assets/js/77.698c0aca.js",
    "revision": "c6213a09f40cff7f1289f0e1bb437783"
  },
  {
    "url": "assets/js/78.8aeaae2a.js",
    "revision": "0257c08a79339479f1be2daf08221c9d"
  },
  {
    "url": "assets/js/79.10a576b2.js",
    "revision": "394ea289f8e1e0879c72b3b6bf141a7b"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.77cf7fb1.js",
    "revision": "eb77935da3e041c361912507f462bb50"
  },
  {
    "url": "assets/js/81.7647cb90.js",
    "revision": "6cbda0e7c753bd5855363c184e761428"
  },
  {
    "url": "assets/js/82.688e2d5c.js",
    "revision": "6704d2833081944fac37cadca5bf24e5"
  },
  {
    "url": "assets/js/83.69fd413e.js",
    "revision": "3459e4ab194838455a53669e7010dfec"
  },
  {
    "url": "assets/js/84.d7f02233.js",
    "revision": "ba1cefaaf59c6616a723e846b90cba67"
  },
  {
    "url": "assets/js/85.8a3a9ce6.js",
    "revision": "4d5ddb73ab5007965232ed9dc1b1e71b"
  },
  {
    "url": "assets/js/86.c1ec0164.js",
    "revision": "7778ac4f31343719cd4ccbce62bdd037"
  },
  {
    "url": "assets/js/87.bfe0d8ec.js",
    "revision": "69780881aeb48ac490790791d086d231"
  },
  {
    "url": "assets/js/88.8e3e75ad.js",
    "revision": "8a7e60f5f67ecab08ffd2559624a4299"
  },
  {
    "url": "assets/js/89.78d3bf11.js",
    "revision": "24e5da8a70ef50be259afc320046de55"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.1ef78bf6.js",
    "revision": "275161ef2912aa2d6e38ed3345a49ee7"
  },
  {
    "url": "assets/js/91.b895b77e.js",
    "revision": "6cd1a9bd9fff6bb86d73a4cd2b604eec"
  },
  {
    "url": "assets/js/92.09318043.js",
    "revision": "737290bbdcaf0aeb98ecc87faa7fff8e"
  },
  {
    "url": "assets/js/93.93004f83.js",
    "revision": "be996018cd648a1ba0b1351c5b3f93b5"
  },
  {
    "url": "assets/js/94.cc2e9cd8.js",
    "revision": "48e915b5864284c5a0f5bf1c976f05cc"
  },
  {
    "url": "assets/js/95.79677fac.js",
    "revision": "fc00c79225805fab8d132708abafb8e7"
  },
  {
    "url": "assets/js/96.3630da3f.js",
    "revision": "0fe967435d79a2e294794236492e7c58"
  },
  {
    "url": "assets/js/97.afe9790a.js",
    "revision": "a316b2c72f53f703f7f6fa85dc4fdbcb"
  },
  {
    "url": "assets/js/98.4b73ef29.js",
    "revision": "d7163fac478781ea95c0a85a357e4b8a"
  },
  {
    "url": "assets/js/99.511e1ef0.js",
    "revision": "6b8dcba0bdbd682405d9926092e62d65"
  },
  {
    "url": "assets/js/app.bb56780b.js",
    "revision": "61bba50138bc3865b52d9a04b7c110df"
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
    "revision": "a260362f510c580073d336a2f6ee22f4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f2ec7bacefefaaeb5e02fd765728950e"
  },
  {
    "url": "books.html",
    "revision": "9ceab909a69b0ed1a45ed17c26e46382"
  },
  {
    "url": "categories/index.html",
    "revision": "88b68cf52d5aad28456c22b230758f3d"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "ff6ebd5b984f20accabd2d2b89f1e353"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "3e08a0984892640c6d7bd491c9ac99a0"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "77b29f064f1f0ecd331821443a4f0d16"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "899b1b98614de4fbe46875d4b44a44d8"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "49ae5762a96031fe033d9e7f12009503"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "fe53cbbe0caacfd9f8c0026f18b05d8e"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "9b16e73f1658247eaa145504d6848012"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "94f3cc62771b39856e79385ef9a53b7a"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "cb5c93ffc4f4cf2d2c5034977c223495"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "53d4d76ac3104f3d43fc4a7e0f739d86"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "04454bb56f684479c9c02274b78f2f65"
  },
  {
    "url": "deepseek/index.html",
    "revision": "6f891aa490de23c5f196528940b0b701"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "8b1cb34ba0e341208c2acc93b5990f42"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "9eb2cccd5b3415269e8c8733d5f953f6"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "c58a5e2afb038a2a66017fa54d6e6fe0"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "afc0ba73bf09778873187fc4fa114695"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "c49f046cb59d7f2d968adc505cc040d2"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "cbc45f23a8501d7c53f13e53029ce6e0"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "84197ca11b22d4ca976340b3d08827e5"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "4eae96cd0a8bcf81a140bb85f9934a55"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "b18899abb0fd92d71ebda850eaa3cccf"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "fa4265b33832e7472695781c5fd158a4"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "513744fa53024132bccfa4be45c3a2ab"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "a5c13012ad32b13fc645acffac35ebdd"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "d173d7b3d1e5d7f3153be757a3dc6eb5"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "ed001470479b5d5f3d2cb5e58db0571d"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "affef62cb39ffa607bd5fb67d345d30e"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "b5124a4448bfa60ac5da284e00391015"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "44dae5a31f158912cb8b2a896211ba70"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "8d1b01f479eb20e45c9bbe504f01b1c0"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "a36dc6b69722d80a91252f7a660dcfc4"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "802f5fda516ea6057b3a5377260ae9eb"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "3300a3ff7121a217393ce6430656f205"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "8b70b5e3d4045d9ac4de77e32e90eab1"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "dc352c5e2e23d987276ff1327eb84d86"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "3648cff1a7f9c1b9efd715bb1587a779"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "dda62d835f5ad079606b0b233b70bd5e"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "99392f05dee29de96344052888dd30f0"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "c8d33e66ad67e54d29adf9b6aa39f22c"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "791bedd66a52c45a4e44900c759ca7f0"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "d2e17c6b172885ec0fede491dda0427d"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "27a7a0f14ec083d40fb4783d75e4326a"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "91e02331e73d827422b718f45179baab"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "1667e5eb3a8cef388e815eac2431072a"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "bc747a0fb2c3f530596dc70b13653c0b"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "82fa3732c3074ae3cb500e8ae577b74e"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "023986f92e2dc620545703e669bfadb9"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "2d95998d2eae11a1bdba519773b52de4"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "4800060ba105bb9934ee2c037aef3a02"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "fca07ba5002edeea1d17653262d56c22"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "41577ad57e253363c0e8cd2ee943ffe5"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "ce5aeaa015b5b12d2ecab36d12efb011"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "6e5026c7a86a7f589d712f9c9f4e45b3"
  },
  {
    "url": "figma/index.html",
    "revision": "0fd7d93a888ce13b0e9b8b5e69962525"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "8dbfe920bfbd024d18a2b67d5009a77c"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "1be98bbe78da8844e470e7b6e7491acb"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "c68e9a4e1f9fe99741065fec813f070c"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "8d29d01d4473db50989dcd5d3c1043de"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "3db22c811ff6c5dd2be43bc088141e10"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "6e125b6e7889d508fa9cd68f052a130d"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "075de3252b27ef6b5ba9213741318bf4"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "e77a35daf713ad219635f5f45858281e"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "11db60589e1bcb6faec58d11a97bce36"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "e1171ebc48520ba24cc244f5140b5f30"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "29f4d9e1024fb9f515fbcacbf94843fb"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "73b014be4fd9f6ae7ab6f534ed18f398"
  },
  {
    "url": "flutter/index.html",
    "revision": "8ab6df4984d1b0f610bd233d803ed7c8"
  },
  {
    "url": "flutter/point.html",
    "revision": "a82d01e7691c9290fe1c4337ad749c5f"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "71a0ae87d93c5000700314921a6431db"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ef396ae11c1748ade286304186bf85b4"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4ee79d60cf2c96f5e3953cd4169db56f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e1a6985614e50719a7255fc6baa5a5a6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "c6b35f79a77baaf58a2010488546082b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6956e71a31e405ae0ed61ee540573aaf"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "6dfaf7d8ca0a55514a9f3559842d5ecd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "62d4e2881b4f501c4098772c639b4b4a"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "1db084b5b3be3837fa39951b6f5f2d78"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "324e96e1d1f5c75885144fde20c2c1d5"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "16272d21407f86fee9f8fa3b03642e26"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e7749c86c547f0ca80647605ff7c7236"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "5ef98ceec1b0f3c49319dc227f88265f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "d7937450d00673e754fdcfe1b9765834"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "05fa25b3e5662675cdf8c7aab616cfe5"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ae3935b797f8c1eb49b971d3fc6905b8"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "600de4bb6233ef90844e4cb7bb532809"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "4fd9b2ad782044d7e1f0052b5b82a4b2"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "368b8addceed69ceef136ddd189886c5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "dd2cf1ca6e159c0c7af66bfc62c275c9"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "acfafe8a03fcbaaf841797efec687542"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c0d59121b060209b2ff8dac39646f953"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "fc73a3f5558f9558bc9362fbfc3b6595"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7aa2b24184b56215d1876fa4398f984d"
  },
  {
    "url": "haskell/index.html",
    "revision": "bf1b3b00ca129e244ab88b255c73fe6a"
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
    "revision": "53f9db3cc0419f85e9883c5c3085f88d"
  },
  {
    "url": "java/index.html",
    "revision": "18871d4f610e177779c6f8eb84c6315c"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "b63c8b9a5d7678b6bd976328814a6b54"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "28b377a0cad5d2d3e35a8ca02af88756"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "ec9ff78db251f61d855c36d477518cc1"
  },
  {
    "url": "ops/index.html",
    "revision": "7f7799990f24c9336d37e81455155a89"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "18d08541afaa8cd262651f9b4d9e646e"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "17c258eb744cab3c34898aee9ada1843"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "puzzle-sec.html",
    "revision": "8629bbc4baa52aa3690af1fe6dffe3b8"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "27a6ff5f3a409214eb7658829648b5dd"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7bc21e09b93d11cc51e014393a1b0885"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "57e50ffa29c431d417f34c682932e47e"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c0eadeb3eecd5cac9c2ea06a8a1fdb0f"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "4919dae9bd272c20c6d9d80ee73e9aa8"
  },
  {
    "url": "python/index.html",
    "revision": "0a250b16baf18d486399e500e1e31b75"
  },
  {
    "url": "python/poetry.html",
    "revision": "7d2399464650f5723473ffb6f7faca89"
  },
  {
    "url": "python/pyenv.html",
    "revision": "b98ca3752cb1b17621118544f292c615"
  },
  {
    "url": "python/python-ase.html",
    "revision": "5a22f785661ef878e15b99882326845d"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "0a34a861147bbcf5bbcd30ee12047d5e"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "44b5b5ca6c6dcc451dfbba1e673b6d57"
  },
  {
    "url": "python/python-file.html",
    "revision": "7931ce9ac541cdb4a4dcfb6b5772ed40"
  },
  {
    "url": "python/python-function.html",
    "revision": "6dd82021a2c251bd875cd4f6e787462c"
  },
  {
    "url": "python/python-generator.html",
    "revision": "33c58da13eb22bb6b2faccbd5240776b"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "ec37a55be003aca1562fde86f8387f2a"
  },
  {
    "url": "python/python-module.html",
    "revision": "33807ff9a7664770a0612503852a483b"
  },
  {
    "url": "python/python-string.html",
    "revision": "b91bd31ad18357d504f6edeca5893881"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "b5df910ef10d634b239f42865b3a30bb"
  },
  {
    "url": "read/index.html",
    "revision": "6dcf3a2fbab1fc6fe716b30add023c9d"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "8946b13420804bc493220772c949d946"
  },
  {
    "url": "swift/better/available.html",
    "revision": "49016ea1b98439c71dd65fb3a384f921"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4cd350f250284841aaed92150c67de68"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "15b720c94aec4d90bc789b751381565d"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "fdced9a5ede329648a6e51bbe30e11a7"
  },
  {
    "url": "swift/better/di.html",
    "revision": "569bf25497a4b37c3bc8081f4c93d23c"
  },
  {
    "url": "swift/better/index.html",
    "revision": "1c32c31fdd7099b5e51a65aea09fdebc"
  },
  {
    "url": "swift/better/last.html",
    "revision": "0bea5fafa4e31a92d117bf6a638147d0"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "b41ece4588ff2db114bb762b9aa7c994"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "643f1d3e07e6de2f123aeec0aabd6bad"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "f5fa25ea4f8b6c828cd9bd688b6d5c1c"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "4edb50464a9b3cc1e222cdde686962a8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d9500e6c0ad2e59cff2a2bdc9d64e66b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a8cfd4e767513ea50068ba5742a9dcc0"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "7e55d0bc720cff64f1f1499d69052a07"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "4e0412118f2c63d933c43014ae608ca8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2ed37080abcf19d9659d27ea969a8cca"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "4ad37f5b50678700174414ad9d40fc93"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "41c05b16d47c75227097493823ca143e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "aa1dc3f500473333bf056eae570c881f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "095d7542ad28d7de677e6f3a541a594f"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "3cf6cc19b6c3fb670dafc8b3f011c433"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7fe9e6d5daf721003b2e99c3b1de1b63"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "60fd706ee530214b80fcbcaf7042325d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a0c7c734e2df8c3559e13e2594ea7321"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "63ec9e2a6579edadf9f44228c9457b53"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "73ef09beb4b9d5656718d3cb0084b96c"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "a7efa3c9d31892fa9ccaf95125de105e"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "e2d52ba216487ba7452caf5da7e058ed"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "9448556d5fdf0ce8db3a03664471e807"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "0ff9c266d717406249222c6bb2c7bbe5"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "e12e5100c2ecedf97b861092714de355"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "9f9ad1088fcd72fbe8d518a2b63e056b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "8280560cbcadbb169c8cff1834412686"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "aec182e47e98508b6b6204baaeb9e8cc"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "8df30b8c8a682253d2810fd4a5b903f1"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c7861964e4387ca7ec1edf7c42910278"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "a390c630bd9e5f4a47033808bd6ba53a"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "b011523bbbf9c11780035dc2b48d0303"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "7982d06dfe4cda3dcc93d11375d96299"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "455727d38ffc497ac293a34a3333bdfe"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "cbaff404cec2df454a8c5748842a2f17"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e64e9a05463ead899060563535fe9a7d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "33c81df47ecf2c41b7dd1ce314b42bce"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "097b7f93a83ff6b6f16fea5f0f6eadee"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "64a3f9ce645212b99a7635c4e1ebf987"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "4c744d4dcc729ae4a1b4cd75e4783581"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "74ab4aa70d8199ad322bd250ce292e58"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f10e8ae965d06e7589a9f4db71168fec"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "37d28ba22cf148133a4aca6aa0566533"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "0d2a0dc1045fee20fc56c9988311c448"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "591c6c421d14b52177b5a1f5b21b313d"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4a0c235100c7aa1e4d82a4bf2a09110d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "20a45f7b33fd53fadfe1582b1bb4019c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9aa49153ed6aec87c6f6a73c9500026c"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "4738e652191ddc3769a39fc2bb3c2f33"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "c3157666598eba6d0888606d0af27b6a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "eb5d0d81227428af97364fc5e89217b1"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "59703094b982b0db5131766bbc57e21e"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "53873ea2166c01b9f02b992451baf179"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "4bc5fc078973da4ad6df4d09be2699b5"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "116a807271dd223f97ce56101402f2e3"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "4ed22c27edbf89b3b61c492b51068e4b"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b0d851d9eb757bd915ea0d5730f3cc6d"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "4fde31ac9f6b4b0526fada787ce843c7"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "30b0cd698e339395f74043cb4a5db168"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "cd5082542f662fb2963aa4892ef1c087"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "87c2e173afa158ca168ffd2810703c2c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "1670485fea8b8411b2bbd1c8e4470806"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "6960e0b4ee803b1d98e6340c7d9abd71"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6403c3518905a568db9fcb4054b0af8c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "62fb4230cd13308e34ed9a8ca21b3cf9"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "d04f429745d8d8b67ba66d5956dea5d6"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "23703b37226d447573118591f4034373"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "dd7284998fa9b45a18f2fe8e5223e9a5"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "cfd526da2f85c42d7215e6580f80d601"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "2278dded8b840a7f4f62ed81cb5e9bfd"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "cab538749ae1c4be9be3f39f6132cf39"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "1f3df4e82b32a0bc4f39beda448798a4"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "8fe05bad2aee44636d00ec302005bd88"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5e4f8bc1b20bedf1cdf3e3f976d310a2"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "bd786acddafd17fb46558e98a2cfbe7a"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "b8459120aa03daf95281fdd7add3f3da"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "0dc191fd59a9c6b9fc82ef5f62979441"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "6bbf4a0e58d3cd7e57b41e604916c6de"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "355bcf076f21cca78da63d71cfc3aee3"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "5b53823469360c16ef93ea570d76287d"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "da267f71c56d58859437eb0ae36b7d25"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3da098c574f7ccedf603e98ee4cd478a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "4b62b949b2e7fa76641570700f7fed1d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "331cadfbba62570308d41d6ccb83d678"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0976ea7799913ec564110f4ecd124ec1"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "0642d6f756420ddaa175a8e7f5e1e9b0"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "1d58de2f267580f71dd6b61c00bef9f9"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "63a73240b38c84a0696988bd679b31c4"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "885ec15075ab3e23a1382fb2740c47da"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "feb1bbc2fb346837ece4bdaa6cf9614b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c8d743f35fd79e6b80226d18b6fd8f8f"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "aa167e63eebc041a4972c211f87c1dbd"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "5dd7e2bb7168631db70c8022daaf4cf6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "92be62a15a9d3b3cbd026910768771cb"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "595acac9a32e5d45d91a07a2f0ab492c"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "401fdaad61e44f1b673d72480320718b"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b4d152841c5e206d1a3529ff38537ae9"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "27a588e7f6f56d58b53a0d2551f3c6f8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "14dc88c0a655886df879861945d263f8"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "af6465226dde31c82ab5b02036f0bef4"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f1eebabe3a752b625a875d62fc04153e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "09a37be0903f5665842dac5acea21889"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "5fc20bec7addf78655934a93ce8e202e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7255715d2a8f59c7eb5e0ab37f8f36f5"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "66d559c0e9a42a9e0b105423b3c01256"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "9ef8fd9b4913418f7c93d8fba3336bbc"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "752fbc82c5b25a1dcfa9300f0b10eba9"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "67934e82ef283a7dad05da70b51db695"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "93c6ff62a577e0aa4d53b74a1bacc535"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d22749f97f32ac80e581fc3f15d2be7e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "76541c96e7b28049272f23c5ab153adc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "68d4e359b1cd946301fed956e3467ead"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d3bb91e665bc7c3f8482dcf47d64ed62"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "35d7c0214b7992a35f11f66aae5325f1"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "446f8fb4104d40037f549683ca3ca1c0"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "d13335d374350ef66f082240e98b5f6b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "b22da2e6cde74e12a51bd9b1efeb20a7"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "8685e91909b0ba7573c4742940c87009"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "d1b8177d5e21fa0cdfb44ca7557d5408"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "77b4d90067437c280ef988656545db1a"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "871181b16a182d55ac5fddac90029993"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "eaf4ad1d9616de0a53a35a137a27c178"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "81b0bf22206d47ca5a187c973e9d8440"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f1a717909e9944d66cc2cc08b5c8bdec"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6ff363b4ae44e123ff09e55b1d79e29a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3257d6b2118d8e5567ffab1b81ef5a81"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "92b3c8a2416ea73039d937cd893d372b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "84a42c90620ad1886a3ca33690d1417c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d65a4e0e2fc98e7326074412ba19ab86"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "94ce550b06390fd36652a0b5381823fe"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f355cce62c0bed15bf0e829db2e3c379"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "688b0efa6883ead6ade93b0eedd789b3"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "6fc6ad215de52d7596820f7154657997"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "20743b680c3f04f672ed303f1640e15a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a815bd890d446318464237ddbd25868d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "7bddec3f71db04eaec97af0ea3b4d60f"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "1c120f612ede0c64e447ee7c0e70c86f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "bb8fd46655a48839e99c653a01de2e66"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "542623dbd83987dd32294c21c6fb0fc1"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "e674ae31630dd02333bd3798696c327e"
  },
  {
    "url": "tag/cli/index.html",
    "revision": "8ef0f71659ca6c155fea8d18a91220d4"
  },
  {
    "url": "tag/code/index.html",
    "revision": "4b32cd346079ea3d76921db5d590f6a9"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "ea71cfb79b534eee33fc36bdc74448f6"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "18410ce8208cd2387af915b0f25dacdf"
  },
  {
    "url": "tag/django/index.html",
    "revision": "5f11a261432af03b98ba0d8db479fadf"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "08d56f8c657c84f853a158b9cc307282"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "37f88081daaa469b9c1c864947496ab8"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "49177a30307892bc1ce6e6cdb73f89fe"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e507011cdd81c71e5d57d18f259c589d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "be186597052fa27f9825c53abcb401fa"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3508a00982637e33a6a304619992fa9d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "8dba2e245abee39cd486157457707d02"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "0e97866f1f787c5a56bca2358db58195"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "dabf372535083117cce31eedb46ea6f8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ddd7fbda75e59b1827cca3a4815e7d01"
  },
  {
    "url": "tag/github/index.html",
    "revision": "75ce14e042379467d133206706c936e3"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "8f22d4955fb30e47e392352cdba33b1e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a42f365983e93755a233210373821cfb"
  },
  {
    "url": "tag/index.html",
    "revision": "f6370548549e1855107090928f8a772f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fd52439d7a4a6f23dd476d0e7dd7e135"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "5ec60ab1e3341d9e6955d5a87aff80ee"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "4035c8e976f1292faef18883c810774e"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4cb3056229cf49bb8938e8fef4f7c392"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1b22de7abd72a134940a9c207add6dbd"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "4bce605e393b8c2272a723b6a72c6da3"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "a6ff0b8716b545858a1fac3b7b468e9e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5d0e0d5449caa48a5c99ae1f9a81c192"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "8cb7a96d133c88eb96b04d99cf9d0edf"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b9727f897006c97b7152b54ed1f7cf95"
  },
  {
    "url": "tag/java/index.html",
    "revision": "e85a5d2ff06873697f1b502a4ad22218"
  },
  {
    "url": "tag/json/index.html",
    "revision": "803c824164b226db6b75f8795394c9dc"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "700481b0cbe127e40d552dc3d7c43cea"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "2761ccb853b316c80c4a0d03a50fcbbb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d78b14d2bda58f19c9ca8634cc1237b5"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "a9c66ea4f1cce8bf0803f13823878c52"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "9a3c2a19fa61f2817b0a888013aebbd9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "88db6e402a81b6841536365288d7038c"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f2822b0dbc284fd6f47d49354ae4c215"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "b4d0f83fe4a8625349df36258391e44a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "4218e5d0614584af17745e875896ea6c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "95172b749e4413de8c7b87a222ee9959"
  },
  {
    "url": "tag/qwen/index.html",
    "revision": "9328e1030f1144f27a4523ab96a25aa7"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d7ad2d5dd424278d0c9245fa3194312d"
  },
  {
    "url": "tag/review/index.html",
    "revision": "ce178df4ca9ef2bfc1dff07e89fef19d"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "5008307cfad1b8f2d7f976f5ee5ee4af"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e9c9ac8efce3bfcf844985d446dce3c0"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "e017475c2867ede2ca3f3aa88f7ed542"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b3d9899aff386c3a88f1d88689996c97"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "f96314e023ba37282e25d3af72bc7b7b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "c72fc407448ded42dde09c20624f1a2e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "5103ad66158412f07a1d17748d74b903"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f203ca414b2127799d61dc0a95acf45f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7e882cf123772af9749c0a0f8ea82cb1"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "77f388699773c0baf4629113d0ca851c"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "433ce294ce0fa0abc91a8926484ad294"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "dcda345e32481f1b34fb1f854b23636f"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "775335614d51322ae255e4223c105ea5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "8581f0298611a2f0e481873fed800a04"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "be129c1059b43df531683ab251c08260"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "de541aefaf648fcea2e2207516bd4563"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8866f5ba12535c34bd759617a2350159"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3d207f8401f298240d293192802347de"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "95e78e2d3344e6dd3b69f47ff766b1c9"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "747dba3f947a9be977dc8fc9a1243de4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b5ca4def9a8834b0cc45762ba0fb2dcd"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1451166e07482dc0ad22580708a13037"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "772992dedad94189f65f45dbab7d3764"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "0cdafd75a271f423f72b87cbd4d6fe35"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c8cd9d719f7dc21cb752dfef04c53251"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f682c9fd4735fd71e555a731fb52c91e"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a976e3d382c5d162f9ba0d85142ffba3"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "7ae6b313531a3917270e13e0e480e2e3"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "37e0b626d6631d2eb54088e5efcc7c63"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c313b5c46f812d8f51e8d5edafb8e744"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f40baf6e0c9b9918acf6427d00018f35"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ba431218092d84bf5d6a75c5493aacd5"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "e8157accfb72168bfa50fbe8cdea77fd"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "8b1cf4cb76cb604898c8337fd8397497"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7f45bd44c819a3f7763adea2317583ab"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c0f0d058096cd63167104bc00dbd3c0a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1a84b2d0ff6372a184a781e9beeefda0"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "48f352e4cb37824c3433a75134cd7f6f"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "97ff113d6ea8f15d97b162553bfab09e"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "e164062cc7249e395efae51947161cdc"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f1de5cde1f9832b0bef50af669fc0370"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "af88b6cdcab184c21f436fcd9879fa83"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "9bbcf77e25624f6bf73c7b724dabd31d"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "de213883695600f6de81c54d3606efd6"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "1948fe85be255f6af866cdb3a28b72a0"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "41a6229c77673c21efb116c0f7023bb6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "351a0a074b08f49262f2476dc7243ebc"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c2979f6db2e4be4af135756a05617207"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9a85231765abc62a6f40d7d20ff15771"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6ab3927d6cf9ba3cac11c5c42a19c2bd"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3ba149523c127e20bfd557ffc820949b"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "0a6d7d4ce2a819edb7269ddbc6ce6ae1"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "43d905193e1eecf6f579ba6a90a9799c"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "0b613e647f0857be2ebdf8a1a23a4fd1"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "ca8afe1b7a0f136ff3cc690b4d312370"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "ac56b6378c7972dcb5bdd53398031762"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6e9028e943a56af0dbb37c77e7acc5cc"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "ecfc5b36010dc450f9b5667c1a7744bb"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "2cdcc053ca6199d568e9c74cb58f09b5"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "22b89151b8dadecfec70fb41651d5c5a"
  },
  {
    "url": "timeline/index.html",
    "revision": "ed9c298846ebf99890b977e5260924c0"
  },
  {
    "url": "tools/code-review.html",
    "revision": "5e7f50ec1cab616a67762bee528fcb04"
  },
  {
    "url": "tools/docsify.html",
    "revision": "82d1e024a33a659bbde17d075c2d1c91"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "fa9b4336fc0f4745c3ce5c1a77f90897"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "111c63bf4353d2f677080507bb3a0e14"
  },
  {
    "url": "tools/gemini-cli/custom-mcp-with-gemini-cli.html",
    "revision": "f185642936db130d4672c33920140980"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "ac49e21e1c0f2ec7fe6893ed177a2273"
  },
  {
    "url": "tools/gemini-cli/mcp-with-gemini-cli.html",
    "revision": "6385e5c17088e23e1d3fc3a99455eca1"
  },
  {
    "url": "tools/gemini-cli/pro.html",
    "revision": "5b628a3bbaf1c40a023ecdd376c3a17d"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "318bd51d53615a2dd8122748dd619018"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "158e4ce65bb8418ff1925914fff963c9"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b2ceb452a8b4e3058ac4e26ac7415142"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "2222b10e53f2afd02e79314f1fb8f440"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "0187852837349af532125653b0a03c34"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "bd78926ac8aee651e8723783ce7ac376"
  },
  {
    "url": "tools/html/index.html",
    "revision": "380e2d51d95fbf31cec6103f1a238a33"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "ec04296aa6419e7c2d610e309aff92bd"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "b6977898c28ed172bdba8c76ef31205b"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "83db8f8795138010a6e64043ae7bd8eb"
  },
  {
    "url": "tools/note/index.html",
    "revision": "709ddfb7c11f712e1c2a3f994c851937"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "215831aa1a3f43c35cb2f925947e5ea6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3c85aa50a66f3de34176e42d5bfac0c5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e2c1a9d7ecfa723c7317764791c94501"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ad64136c0808b3b7cd8e85a52f26ac49"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "a723e23f81779b7d7b1fd2e6a6010f0b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "bc2dc3983b10a8636a2b5ed4ecba3557"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f332c6ac251168f0117bb41ddf183bea"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "817a383749872a4af21ece42982fde83"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "558b8d62273f6fd09f16648b8cd46a35"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "c17b22387da9e1220bf096303f40a7c7"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "92df12cd19c85a878089a008222ea38c"
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
