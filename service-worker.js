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
    "revision": "d0a18e32996dd8da6f33b90210d6079c"
  },
  {
    "url": "about/app/index.html",
    "revision": "3846ef8127d8f2e291481ef0347f1586"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1d9476ea56c41822fb763e72ca37034e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a5a178acde3910f3bb6cabf136e0c8c3"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "9fd7c6d80a4fb5debfe7786bf4d99baa"
  },
  {
    "url": "about/index/index.html",
    "revision": "a3967995fffeef57eb37b92dfa09e81e"
  },
  {
    "url": "ai/dl/index.html",
    "revision": "81c3c1351574578f70c23b5977c91cf2"
  },
  {
    "url": "ai/dl/t1-gzj.html",
    "revision": "b358c7aa05f83c45b8d9f3eec90a6a4c"
  },
  {
    "url": "ai/ml/anaconda_installation_and_usage.html",
    "revision": "dcc3a3e86d2cf6756d00297e9b22f222"
  },
  {
    "url": "ai/ml/classification-and-regression-in-ml.html",
    "revision": "0ee9d23eaafd9342526b54bc6bb1ce5e"
  },
  {
    "url": "ai/ml/dataset-and-feature.html",
    "revision": "88d6f7d95c906cab2983f671790c8fae"
  },
  {
    "url": "ai/ml/feature-engineering.html",
    "revision": "6e878f497aaee7376defdeaff589cf28"
  },
  {
    "url": "ai/ml/index.html",
    "revision": "fb426f4509cf24225ee7e554c82fad47"
  },
  {
    "url": "ai/ml/jupyter_notebook_usage.html",
    "revision": "2c29f50a4294fca6cd566f8bc3f2a8ee"
  },
  {
    "url": "ai/ml/mastering_pandas_and_visualization_tools.html",
    "revision": "ea73010f6d4a206ef4f5a11ff4c07ee4"
  },
  {
    "url": "ai/ml/mastering_scikit_learn_basics.html",
    "revision": "89f53a7e94a3336223b6098e40b3c96f"
  },
  {
    "url": "ai/ml/overfitting_underfitting.html",
    "revision": "f4ad146fc56f738e72848c03dc31de80"
  },
  {
    "url": "ai/ml/supervised-vs-unsupervised-learning-concepts-and-differences.html",
    "revision": "0d7ba5fdca14cd11460935df3c103c6b"
  },
  {
    "url": "ai/nlp/index.html",
    "revision": "3ca9821cb31e2ca37aa2807dc97fec5b"
  },
  {
    "url": "ai/tools/qwen-code.html",
    "revision": "1584cb55b57fb89762f0aa1c54c188bf"
  },
  {
    "url": "algorithms/index.html",
    "revision": "1161c693c262475bd359341725e21fd4"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "7c5b920b1c0d73ad1a350ecfdb983968"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "6d24ec3cc9fc777ba02d97ab6e5f70b7"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "e3bb3cf18332be1ca96f1804ca2ab2f9"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "e427c49b742051a68a185ade2af9428b"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "5f458096f30f7ddfdb0513201ee2896c"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "8d808c10f097eb77e4fa5b7c0cb667fd"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "6bad488cc576af60bd272615f8c19347"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "8d292b8a3ce9118e0c590c126f386989"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "775b727376c545d0ff9286be39cffb44"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "ab7c9d2ff39f30f8b1daf00c1c1679ea"
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
    "url": "assets/js/100.4def51e2.js",
    "revision": "e391b7f378fd131f9932ba18fe9149d9"
  },
  {
    "url": "assets/js/101.5000023b.js",
    "revision": "4d9a12e4b647d5f0e667f8954eab5ee6"
  },
  {
    "url": "assets/js/102.b8b3e6e9.js",
    "revision": "0177c19295541eab01ecea47847c7d8e"
  },
  {
    "url": "assets/js/103.989da652.js",
    "revision": "b4b32284a60e6211f2fc5ae191103121"
  },
  {
    "url": "assets/js/104.289e1a8e.js",
    "revision": "e08c717ca38a8f70386aacd0d9547168"
  },
  {
    "url": "assets/js/105.a7df23f8.js",
    "revision": "bc7883da2f373ff0e21c6c150d269f2b"
  },
  {
    "url": "assets/js/106.6776b506.js",
    "revision": "8378dd1774b2aefa1de52d008f81be8d"
  },
  {
    "url": "assets/js/107.d00bfe81.js",
    "revision": "b2df37d1331ebbd04568d7070740a151"
  },
  {
    "url": "assets/js/108.82e4ad5b.js",
    "revision": "1f56a2c0171c67b1e48e1c5aa60ef757"
  },
  {
    "url": "assets/js/109.25f26ee0.js",
    "revision": "4c5d3d4d696dbcbf19ba8276532449d8"
  },
  {
    "url": "assets/js/110.6cd82d0e.js",
    "revision": "d6c331e3791759eb5ca8f6a6ce9a9ed4"
  },
  {
    "url": "assets/js/111.e43d3085.js",
    "revision": "f84f1d643e7201649d493ad2f98e7f15"
  },
  {
    "url": "assets/js/112.34c8234f.js",
    "revision": "5c8a0f54c7d94e33710aff5621a6b35b"
  },
  {
    "url": "assets/js/113.f7f9db75.js",
    "revision": "d7b2fb35dcba3a3333a845cd8eb6aca5"
  },
  {
    "url": "assets/js/114.defb7155.js",
    "revision": "0fb1dc77e812a0d30afb89a7f59880e6"
  },
  {
    "url": "assets/js/115.1daa5706.js",
    "revision": "34cd0ef4cf1a1cda689933b7d2929d7d"
  },
  {
    "url": "assets/js/116.4d09e056.js",
    "revision": "0cb484f695b8586bd8590a3812aaaa64"
  },
  {
    "url": "assets/js/117.d9684648.js",
    "revision": "a1dc1c44edf2bce36e30730b652a7d02"
  },
  {
    "url": "assets/js/118.a4e3a6c2.js",
    "revision": "e9b8c393badaa301ba76c7f10c61b6f6"
  },
  {
    "url": "assets/js/119.7c0877dd.js",
    "revision": "d0e9438d424d2517348b3d6995d660fb"
  },
  {
    "url": "assets/js/120.f4200732.js",
    "revision": "2d6532aae9c97826e50a8032a8191f45"
  },
  {
    "url": "assets/js/121.1a794dbd.js",
    "revision": "7f493aaa4e8643d4a2ea915ef801f228"
  },
  {
    "url": "assets/js/122.a1f5b9cf.js",
    "revision": "cb248b1647c2eb233a0f3c49ae78aa5d"
  },
  {
    "url": "assets/js/123.63bd9a97.js",
    "revision": "1684330375ed3de84cf20a0d996958ec"
  },
  {
    "url": "assets/js/124.329b0a0e.js",
    "revision": "544f716ae5f0d66faddc901766bc2a33"
  },
  {
    "url": "assets/js/125.d17e1dfa.js",
    "revision": "a6d6151f89af889d74afefc28642ab95"
  },
  {
    "url": "assets/js/126.c5f4e814.js",
    "revision": "c54194c4ec490fd50aae66423214c23f"
  },
  {
    "url": "assets/js/127.1e98c4df.js",
    "revision": "5ea6e44eed0db68fc794120b37d4c8ac"
  },
  {
    "url": "assets/js/128.4cc01a5e.js",
    "revision": "500359895d613a8ef7a98ebeac060c19"
  },
  {
    "url": "assets/js/129.ae272a11.js",
    "revision": "e8d2640aaf0866e0797f1ab83558dc9a"
  },
  {
    "url": "assets/js/130.b9b1d7cb.js",
    "revision": "34bdf0cb4cdf9c87e72aee6090f04afb"
  },
  {
    "url": "assets/js/131.f0d0ef68.js",
    "revision": "2eb93f439b999d577b2d0d23ae3cf852"
  },
  {
    "url": "assets/js/132.d211c271.js",
    "revision": "11944b06ae25d5f7ba7689de55f8c441"
  },
  {
    "url": "assets/js/133.db06dcef.js",
    "revision": "e2f5feba57d3b83555e84784075fcfc7"
  },
  {
    "url": "assets/js/134.26e04c73.js",
    "revision": "04ca9cc813234744dbf95ff82a24a544"
  },
  {
    "url": "assets/js/135.c8830a09.js",
    "revision": "a54bd23e6786b3e56189464355166a5e"
  },
  {
    "url": "assets/js/136.05f6e18d.js",
    "revision": "c1d0383148ad6b62cc73c00a29078033"
  },
  {
    "url": "assets/js/137.e1f0e046.js",
    "revision": "d4ac6f75e42bd7495cb22fe77abf5b20"
  },
  {
    "url": "assets/js/138.6e47c9aa.js",
    "revision": "563e7da1590b8a6336a2c7cd39b20cc5"
  },
  {
    "url": "assets/js/139.e724d284.js",
    "revision": "142d2a6bb5d7e38af0153a1b1f000f75"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.ca5870a0.js",
    "revision": "8006efb510e867da8ac4c030b3529ae7"
  },
  {
    "url": "assets/js/141.b9447d8f.js",
    "revision": "1fbaafa76b5d5c04f919ac205579c555"
  },
  {
    "url": "assets/js/142.c579b0fb.js",
    "revision": "0f78bcc92e6016cbafa82d36ad4f0b14"
  },
  {
    "url": "assets/js/143.1a668a1f.js",
    "revision": "883e59742f3bcc6a750e317e6d271529"
  },
  {
    "url": "assets/js/144.42e321fc.js",
    "revision": "947df0438fff179ec661c68777be66f7"
  },
  {
    "url": "assets/js/145.8cf50405.js",
    "revision": "d0bb1c11b507011896705bd79e7f66aa"
  },
  {
    "url": "assets/js/146.0fa66c35.js",
    "revision": "6945a4855d9f65a65592ee22cde245d0"
  },
  {
    "url": "assets/js/147.03cb69f9.js",
    "revision": "d29785ef72835a664127a3652b15b7db"
  },
  {
    "url": "assets/js/148.9cb37673.js",
    "revision": "648c48141437507c5d2d7d429e19e0a9"
  },
  {
    "url": "assets/js/149.24eefa9e.js",
    "revision": "1aa82bd72fda01905e323e81566ba894"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.b56b3620.js",
    "revision": "cd152cfd021109d25d63a354714493c1"
  },
  {
    "url": "assets/js/151.84821576.js",
    "revision": "c62b72bb83ee49ea686047875bef2254"
  },
  {
    "url": "assets/js/152.fb95212a.js",
    "revision": "454af905dac03d8ff39df2659833e909"
  },
  {
    "url": "assets/js/153.85a0dfc3.js",
    "revision": "2bd31748660a796583c05996c4c9bd1a"
  },
  {
    "url": "assets/js/154.f5f01dd2.js",
    "revision": "7ee3df6c546063716e37232821c490cc"
  },
  {
    "url": "assets/js/155.205d0543.js",
    "revision": "109e193450c553617a8cf2adaa6c936d"
  },
  {
    "url": "assets/js/156.741b66c9.js",
    "revision": "d2b953fe283389a0b19c2ac777ef0fe2"
  },
  {
    "url": "assets/js/157.4f32000a.js",
    "revision": "fc8834ce90cf5110283604c6198661f7"
  },
  {
    "url": "assets/js/158.7a6b5a60.js",
    "revision": "38af67372a665f7a4a695a49709c69d6"
  },
  {
    "url": "assets/js/159.2b549085.js",
    "revision": "a69f0f142a4685b92bb8e5a14081bd83"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.a9f8df24.js",
    "revision": "8c29369b3846ae29fe2d4681b6937fd5"
  },
  {
    "url": "assets/js/161.f99d4f82.js",
    "revision": "11feb42bd783bc648a65bf8e721f4f89"
  },
  {
    "url": "assets/js/162.4a03178a.js",
    "revision": "137799185466356633f02e6810105288"
  },
  {
    "url": "assets/js/163.3ae5f7a6.js",
    "revision": "bf5c2ffd952387726079b53fef3f6c4d"
  },
  {
    "url": "assets/js/164.8d4c21cc.js",
    "revision": "c74aaaae44b4d033bbc818376fe44636"
  },
  {
    "url": "assets/js/165.4b2de07e.js",
    "revision": "c18ede11847ce272831dc9d3acfec246"
  },
  {
    "url": "assets/js/166.823ad6e7.js",
    "revision": "a05542c665c5857ec3cbe888d51b87b6"
  },
  {
    "url": "assets/js/167.0d28af2d.js",
    "revision": "9a51d365072d3171c64ab70b90ddd35a"
  },
  {
    "url": "assets/js/168.de821dd7.js",
    "revision": "53bca4721c8e97f1c6bb81df3cf8902f"
  },
  {
    "url": "assets/js/169.ac347025.js",
    "revision": "213b6b9ad55702c6902fe7da257b464d"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.e11fc723.js",
    "revision": "cfc9bef9827ef050ad14e09091207479"
  },
  {
    "url": "assets/js/171.506ca806.js",
    "revision": "643998bfc191ee15f52f8be4f96c5935"
  },
  {
    "url": "assets/js/172.db3a7b23.js",
    "revision": "1fe8f60712c388ce1bb590780d77ebe0"
  },
  {
    "url": "assets/js/173.4dd2925f.js",
    "revision": "18732eb64ee4bf8b9d5c44b8d55ed456"
  },
  {
    "url": "assets/js/174.52fdd57c.js",
    "revision": "c98a4758597212edb08ea33f0a7d2e28"
  },
  {
    "url": "assets/js/175.8a76585f.js",
    "revision": "b7a469db16000109c573880379e5b055"
  },
  {
    "url": "assets/js/176.646cf7a2.js",
    "revision": "da3884ab65d2310a7bea9e6db3a1ae79"
  },
  {
    "url": "assets/js/177.826bd77a.js",
    "revision": "11a346272c871162a8fa12848c40e892"
  },
  {
    "url": "assets/js/178.b8439d62.js",
    "revision": "e32c52d11128fd6f00a780dcfb682fc2"
  },
  {
    "url": "assets/js/179.64144707.js",
    "revision": "7d1107fad3adfb86e39ab45d3feeb24f"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.631e93c4.js",
    "revision": "739fe2d61f43e6a8a540f7a2051d7976"
  },
  {
    "url": "assets/js/181.e874ba07.js",
    "revision": "8f6092ded479cad2d4e493b43ccd4695"
  },
  {
    "url": "assets/js/182.528dd1f4.js",
    "revision": "52f7f587ba6fdf19faf946166a36c5b8"
  },
  {
    "url": "assets/js/183.3eb843d5.js",
    "revision": "cfa5f9bf8666b3f72f07c0f6eb6d7005"
  },
  {
    "url": "assets/js/184.9e73fd11.js",
    "revision": "1226d6bf340fc24c8b3af248cd3b7277"
  },
  {
    "url": "assets/js/185.c7d55f70.js",
    "revision": "2fc5bccf596a4a99ee919a23faabac06"
  },
  {
    "url": "assets/js/186.522dcad6.js",
    "revision": "648e915cb08fcd0f18f15d51acd9a797"
  },
  {
    "url": "assets/js/187.e148c06e.js",
    "revision": "3b0ab122c77ba0acecbd3e3c2c7e7a71"
  },
  {
    "url": "assets/js/188.eb5f9fcc.js",
    "revision": "84538572bc4153f2e5b2f668fdc95c51"
  },
  {
    "url": "assets/js/189.2577aeb5.js",
    "revision": "c685d100ec20132ec79cb238186fa18a"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.59ed8f67.js",
    "revision": "dee2e68102a864309e528bcbbf113198"
  },
  {
    "url": "assets/js/191.95cdaaec.js",
    "revision": "8ae34d4afd24029a441c1a687f03139a"
  },
  {
    "url": "assets/js/192.9ec475ab.js",
    "revision": "265a420a0f4223c220ecbdb46b65ba71"
  },
  {
    "url": "assets/js/193.71cfdf08.js",
    "revision": "5d7e4027f583c9f86065a1be4dfb2ba4"
  },
  {
    "url": "assets/js/194.1f66dbce.js",
    "revision": "2bce3d9918f5af249dc0b771a793a6e6"
  },
  {
    "url": "assets/js/195.b7e66c3c.js",
    "revision": "4e3701db8ff85f651b122f4562eb1911"
  },
  {
    "url": "assets/js/196.118dfae2.js",
    "revision": "2d454dd2b76b5b605787c36eec3a4e78"
  },
  {
    "url": "assets/js/197.3cafa973.js",
    "revision": "1ed61bf75deea7eaa99816e52bbb09ff"
  },
  {
    "url": "assets/js/198.778d6f52.js",
    "revision": "bf111682cc650a604421d667d0f328f3"
  },
  {
    "url": "assets/js/199.7189e7f8.js",
    "revision": "d0a76a88798d82bd68d0a473c3738042"
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
    "url": "assets/js/200.73e4bf51.js",
    "revision": "29662e4a7b0cdd34de1374d7ce88e99c"
  },
  {
    "url": "assets/js/201.97be866e.js",
    "revision": "0f59da6f38e07f770353ac9f64608185"
  },
  {
    "url": "assets/js/202.1bb649f7.js",
    "revision": "fa8c208082c71531b71fcc606409bddf"
  },
  {
    "url": "assets/js/203.1898fba2.js",
    "revision": "24faa1ef768ea1d5a76a770ac67da380"
  },
  {
    "url": "assets/js/204.31aef29a.js",
    "revision": "1378b9903307ae26c8855087bcdd9235"
  },
  {
    "url": "assets/js/205.eee57fab.js",
    "revision": "377ee22a13a2171d6cf263e73f0b6055"
  },
  {
    "url": "assets/js/206.9bfcc78f.js",
    "revision": "4d1d6092383fe2fa13ebaae7eb7eff06"
  },
  {
    "url": "assets/js/207.df8e370d.js",
    "revision": "b3fd4f89d029a534985f4189f70fd7c3"
  },
  {
    "url": "assets/js/208.f1e33fad.js",
    "revision": "7a0dcf61a800ea59cb178bb12f01ae0c"
  },
  {
    "url": "assets/js/209.4db9d37e.js",
    "revision": "4f9993e4fcb96d219efb022a540dd079"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.755487ca.js",
    "revision": "04121faf45d10e7ec60b8c0c0fcc4d9b"
  },
  {
    "url": "assets/js/211.ab9f2297.js",
    "revision": "35b408395e1a1cca188bea87225c8372"
  },
  {
    "url": "assets/js/212.2a064b85.js",
    "revision": "aa4f5618699732be4b7128242f276749"
  },
  {
    "url": "assets/js/213.0e8fd3a6.js",
    "revision": "a3fdaf397ff083e4223f7ba159eae267"
  },
  {
    "url": "assets/js/214.83cd4b8d.js",
    "revision": "59bcd8ec82a0baa410d232476e194313"
  },
  {
    "url": "assets/js/215.f560489c.js",
    "revision": "b4031bd91f4aee5be01b7dd217e5a784"
  },
  {
    "url": "assets/js/216.e76553e2.js",
    "revision": "16b886560304ad38230e557082a1a950"
  },
  {
    "url": "assets/js/217.70a3c752.js",
    "revision": "12051881606f51a2af6b190488d4f576"
  },
  {
    "url": "assets/js/218.64a04ab7.js",
    "revision": "b19ee8fab7b5186f6fe7f51bb5b68392"
  },
  {
    "url": "assets/js/219.89ad848d.js",
    "revision": "2b51b46b6abcd58be5a32910e945a717"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.1aa475ff.js",
    "revision": "8716ad24e70819e2ecb58bcd7b66355e"
  },
  {
    "url": "assets/js/221.5ca2069a.js",
    "revision": "e3813afd3625b3e843d32f5332631677"
  },
  {
    "url": "assets/js/222.b597ead0.js",
    "revision": "41c9fc62dbacb2dbf55094656e19ed8e"
  },
  {
    "url": "assets/js/223.6180bd50.js",
    "revision": "bc2f9b5c41f17c45342173f23b988b51"
  },
  {
    "url": "assets/js/224.b1cc6750.js",
    "revision": "66f2459e0482d20845dd7ab1575bf249"
  },
  {
    "url": "assets/js/225.bc7c1f42.js",
    "revision": "8c6a7a48d369bd1da0ed7c9d1c7155a3"
  },
  {
    "url": "assets/js/226.f8e21f84.js",
    "revision": "4c5ca03f7294f27189b5b46fbc6088fa"
  },
  {
    "url": "assets/js/227.14addb99.js",
    "revision": "709227e1fc8c0e657debcaa03fd884e0"
  },
  {
    "url": "assets/js/228.34f7e402.js",
    "revision": "34cd88d5592bbf8fd728101d30fc8a93"
  },
  {
    "url": "assets/js/229.2dc6bfe8.js",
    "revision": "d2d1d7a7d28800cc27e03c827ed042d0"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.f37556da.js",
    "revision": "e3d4ae58b7a20ca9b986ab15e6b2ed83"
  },
  {
    "url": "assets/js/231.deee0d09.js",
    "revision": "96bb5e1720ba1dd222d9112e73ba3faa"
  },
  {
    "url": "assets/js/232.39f80cc6.js",
    "revision": "b47cb28b1ef1d80da5d9c06f09ee086d"
  },
  {
    "url": "assets/js/233.613233b0.js",
    "revision": "da9f82c2b7b9e1960c05116807eca9f2"
  },
  {
    "url": "assets/js/234.b45ebcfd.js",
    "revision": "787b697d46d987341d2b75114412e829"
  },
  {
    "url": "assets/js/235.c5e6a979.js",
    "revision": "525cd7eb824ade05f1e5ed3944825c16"
  },
  {
    "url": "assets/js/236.27655148.js",
    "revision": "d3d623e5e093f6f019c45827d48ad725"
  },
  {
    "url": "assets/js/237.17a02851.js",
    "revision": "e42fdacac34752e581d2f0fc9634b36c"
  },
  {
    "url": "assets/js/238.67a5001d.js",
    "revision": "0b2eeba129ef529dd7ab16f994beac20"
  },
  {
    "url": "assets/js/239.59a24199.js",
    "revision": "e241ec73c25d9ec0c1c3af7cafe01586"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.d792ce49.js",
    "revision": "56737a8db30861570098b008ebd17fcb"
  },
  {
    "url": "assets/js/241.e5ec3650.js",
    "revision": "461f03afe3a4ac6756edf1e19f58b382"
  },
  {
    "url": "assets/js/242.166ab6fb.js",
    "revision": "01dee316afc83cea8b1df41d44ff31aa"
  },
  {
    "url": "assets/js/243.c8ae78cf.js",
    "revision": "e259b6a5d962cc335b3f39b8083fa968"
  },
  {
    "url": "assets/js/244.285e54d6.js",
    "revision": "555d15b0e435143abf2c11ddef4a34d5"
  },
  {
    "url": "assets/js/245.cd998d27.js",
    "revision": "fc912f131646479e6fbd02e0a2bdacda"
  },
  {
    "url": "assets/js/246.5f6bf0cf.js",
    "revision": "500a06cb48aca50556756bfe42305301"
  },
  {
    "url": "assets/js/247.b630d1b1.js",
    "revision": "6e6e3502e67f10886cb2bc716dda4795"
  },
  {
    "url": "assets/js/248.aecbb048.js",
    "revision": "bea5dfe9ff6af1898da9631e53fbbf2c"
  },
  {
    "url": "assets/js/249.1420010e.js",
    "revision": "84685ce3364415a9f8a1136421e7d9d6"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.6dd191b6.js",
    "revision": "30b3987cf34a83a7cec92cc2a558590f"
  },
  {
    "url": "assets/js/251.e6790138.js",
    "revision": "7d3ee05eab9d3c17eb3dd4ea22a0957a"
  },
  {
    "url": "assets/js/252.88606647.js",
    "revision": "32024b82c097f098775c55b471b31040"
  },
  {
    "url": "assets/js/253.bcb19405.js",
    "revision": "08ff955380bcf584f8312e95a5b1b6c9"
  },
  {
    "url": "assets/js/254.3cb1e03f.js",
    "revision": "f6c4864e4d4cf6e2a8c2676af766cd45"
  },
  {
    "url": "assets/js/255.bc96488d.js",
    "revision": "a141b64416e76fd76887a605125bf5d7"
  },
  {
    "url": "assets/js/256.33a2b424.js",
    "revision": "9e2779cd3a1a71221f77b3db4ea8a8b2"
  },
  {
    "url": "assets/js/257.e4c2a55d.js",
    "revision": "9d959c1b0d6a761f212d269b116aad26"
  },
  {
    "url": "assets/js/258.c32d7dff.js",
    "revision": "fe50602ea29d6850837f227656032bcc"
  },
  {
    "url": "assets/js/259.03561526.js",
    "revision": "b745be827083cbbd928dc49ae8759d69"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.91acfe59.js",
    "revision": "6a3bc2fcce7424b5e43cc0cefc4e822d"
  },
  {
    "url": "assets/js/261.96c91052.js",
    "revision": "b18bdd44a350561e3bc0fdd16fc05273"
  },
  {
    "url": "assets/js/262.f78eecd5.js",
    "revision": "9066e4dc26f35ddab3c61cbb94bd37e4"
  },
  {
    "url": "assets/js/263.bd73c872.js",
    "revision": "5f0da7feec8bf4e87ee494adcc69c513"
  },
  {
    "url": "assets/js/264.0481ae68.js",
    "revision": "89b2f5e869833ef8be92da38deac4676"
  },
  {
    "url": "assets/js/265.746a3796.js",
    "revision": "f656d8d0e42fbc6ebd52500f56763172"
  },
  {
    "url": "assets/js/266.3ef4e859.js",
    "revision": "dd5925f3ed259f5369aff67617973106"
  },
  {
    "url": "assets/js/267.c736c504.js",
    "revision": "fb7bff406794e9a631815532469f325a"
  },
  {
    "url": "assets/js/268.0e704d43.js",
    "revision": "6458db597f902c7e8a6cf9f4a5012346"
  },
  {
    "url": "assets/js/269.e56f35b4.js",
    "revision": "959db787fbc2a8724a26a9a7025be86c"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.efc3cb7e.js",
    "revision": "28aef8d307e4b88ab233e2c5d9266cfe"
  },
  {
    "url": "assets/js/271.0ca5c4ca.js",
    "revision": "0c9008ab8f702626a1b24c0456c0f9e1"
  },
  {
    "url": "assets/js/272.151c6303.js",
    "revision": "e2478449aa8afea663e444277782a5dc"
  },
  {
    "url": "assets/js/273.4f9b6780.js",
    "revision": "d37781f087e3ec437d76ace8b1add151"
  },
  {
    "url": "assets/js/274.dab02fb4.js",
    "revision": "c45239a3e04c70400f0209e7f1c4646b"
  },
  {
    "url": "assets/js/275.66d7b4c6.js",
    "revision": "ba7da789b210ea6eab117139a7b3ebba"
  },
  {
    "url": "assets/js/276.c2791dd4.js",
    "revision": "8ba2a4cc1c3236e832856d646164014b"
  },
  {
    "url": "assets/js/277.d4ab88cc.js",
    "revision": "59cfd7ba12851a5688eb123de532c1bc"
  },
  {
    "url": "assets/js/278.4ff6452e.js",
    "revision": "f5fc18a1a2e4649d8c39148baf5eb6f7"
  },
  {
    "url": "assets/js/279.ec31c128.js",
    "revision": "eebeed512d2d31870dca481009edaf66"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.4cb22f4c.js",
    "revision": "3cef96d0bc207f30337cbc0ccfb5a31a"
  },
  {
    "url": "assets/js/281.d869f41a.js",
    "revision": "a658b394c3b839fd293e6a8ac5becfca"
  },
  {
    "url": "assets/js/282.6a7ef2c7.js",
    "revision": "ecf26d851cb909a1e4907fe6272a2153"
  },
  {
    "url": "assets/js/283.9cec2ca9.js",
    "revision": "38e5773946f5a16efab4686acf507478"
  },
  {
    "url": "assets/js/284.82392d55.js",
    "revision": "c28d8a24541e014ad064071aeee24da3"
  },
  {
    "url": "assets/js/285.e51522ce.js",
    "revision": "36dafcd898a4d3f21ce144f8ba6996ae"
  },
  {
    "url": "assets/js/286.76148d85.js",
    "revision": "9944cc70d5765476e6d0fa3c9b0ad70e"
  },
  {
    "url": "assets/js/287.dd49eada.js",
    "revision": "002e5f032f663c2707362b496c47678d"
  },
  {
    "url": "assets/js/288.32782c0d.js",
    "revision": "7c97ded662c66d12ee929eb46fea2839"
  },
  {
    "url": "assets/js/289.f66df653.js",
    "revision": "f2dd6971e7f7635ac90a8adff6a8dbc0"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.4d8a1c84.js",
    "revision": "0abff3d7097c9d791c50a800f86aa3f1"
  },
  {
    "url": "assets/js/291.c4dc09b6.js",
    "revision": "af832d8b7f724fb50947f508bb4fafb3"
  },
  {
    "url": "assets/js/292.0571b7d7.js",
    "revision": "6775c38a6209bc432b88735887aeb1c6"
  },
  {
    "url": "assets/js/293.aa6aed28.js",
    "revision": "dd4aabcb84ffcf289d8f3c43f5d4bbe4"
  },
  {
    "url": "assets/js/294.ef1c62f0.js",
    "revision": "bbb819cd1c6d71d892811780eac8c7bd"
  },
  {
    "url": "assets/js/295.3da1b8f4.js",
    "revision": "941ff3d0f1bfaf92bba37e0faa748ebc"
  },
  {
    "url": "assets/js/296.425e7c08.js",
    "revision": "0b144d927e4ea153c1ae729f730e43c6"
  },
  {
    "url": "assets/js/297.14926613.js",
    "revision": "07bf5dcfdf19952862057ed5a69adcf0"
  },
  {
    "url": "assets/js/298.dbe95717.js",
    "revision": "9aca1754339f007bd9e09f5dea622477"
  },
  {
    "url": "assets/js/299.c82ebac4.js",
    "revision": "20f52c105cc02d4a755af78c0d0624ac"
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
    "url": "assets/js/300.1fca301f.js",
    "revision": "8332671d52b2af1f9a36df003d003313"
  },
  {
    "url": "assets/js/301.fb9ef195.js",
    "revision": "9193fd7aba4011aa52c9868bd8859229"
  },
  {
    "url": "assets/js/302.f393a7e4.js",
    "revision": "0bdbacfd6a9d5dca2fe15fdd2a8d4ab9"
  },
  {
    "url": "assets/js/303.5c3c3654.js",
    "revision": "b62e34c13497ad222dfd3223ad63d6a4"
  },
  {
    "url": "assets/js/304.7de87ef9.js",
    "revision": "c1c3d984e4f6fe1ae1f574c66aeb9d07"
  },
  {
    "url": "assets/js/305.5a37e204.js",
    "revision": "1cbd79ed7d100648398f6173e29208bb"
  },
  {
    "url": "assets/js/306.3f3e63bb.js",
    "revision": "92c8cd22f1e8b078edb219d11ae740bf"
  },
  {
    "url": "assets/js/307.790e3609.js",
    "revision": "ec41debe086a625845e876be292c96c0"
  },
  {
    "url": "assets/js/308.2978f939.js",
    "revision": "46b6878a1c1dae7e590ba2ce35ce1f16"
  },
  {
    "url": "assets/js/309.87d10e5c.js",
    "revision": "c75d6cab2f7373901a4bdc6d1b65cb9e"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.a07f8857.js",
    "revision": "b57f9e8e7ba3ddd6345a86d7ca17c527"
  },
  {
    "url": "assets/js/311.5dd1f515.js",
    "revision": "13f05f7a7d406a6e2d00e425f3592ff1"
  },
  {
    "url": "assets/js/312.1990c807.js",
    "revision": "e3fcf1907903dd5a7f92cdb09a4483c9"
  },
  {
    "url": "assets/js/313.ca06ce0e.js",
    "revision": "865b54e6950905fd57d5e020b2616a60"
  },
  {
    "url": "assets/js/314.8098fdcf.js",
    "revision": "53098d28d73734c8b6ff17c3f09efb76"
  },
  {
    "url": "assets/js/315.d16b72c7.js",
    "revision": "11f05102310a3e2a4c347646ae76c70c"
  },
  {
    "url": "assets/js/316.453638e9.js",
    "revision": "9e457ee56f75f2e4ab044ebd1992549f"
  },
  {
    "url": "assets/js/317.91ca40b0.js",
    "revision": "b8ac4592b4d506cc12d1ac692c0cf752"
  },
  {
    "url": "assets/js/318.596fc879.js",
    "revision": "e2b7e068afb8034295ef3b306867def7"
  },
  {
    "url": "assets/js/319.080919d0.js",
    "revision": "bb2a6049e7c82cc66388175631240276"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.6e2bb48b.js",
    "revision": "52a5f9d82259f5cde9ebafbf57bfbc51"
  },
  {
    "url": "assets/js/321.9e6288b6.js",
    "revision": "b8a3470f9b080510f50da13f4256417b"
  },
  {
    "url": "assets/js/322.07d21a1d.js",
    "revision": "8d318a8e3a5311927d3701f6c7b1de76"
  },
  {
    "url": "assets/js/323.c9b56849.js",
    "revision": "cb49df683671fae55788d458674e5850"
  },
  {
    "url": "assets/js/324.8d0bf6a8.js",
    "revision": "c9f2bdd60602fe5d23905b13d13f3cd9"
  },
  {
    "url": "assets/js/325.9c52b66b.js",
    "revision": "c8aafbda912bd407eb2ff05299cc021b"
  },
  {
    "url": "assets/js/326.5e32e26b.js",
    "revision": "53a85d8b1010edf861e3f420e2439d21"
  },
  {
    "url": "assets/js/327.dd55d83d.js",
    "revision": "54a08d90af5df6f19b51ad2bab5d84d1"
  },
  {
    "url": "assets/js/328.40eefd95.js",
    "revision": "53584eeefc4b42ca276998769f092df7"
  },
  {
    "url": "assets/js/329.f1348a82.js",
    "revision": "2451ed405409aa5ead7a5c26712e758e"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.44027338.js",
    "revision": "6e27ed06ae862ba81b3b5476d8bee0d1"
  },
  {
    "url": "assets/js/331.e62f5c38.js",
    "revision": "c82949e80eedc5ccb1679ee14acdcbd0"
  },
  {
    "url": "assets/js/332.27580f1f.js",
    "revision": "332f752d7d85546ef943c06ee80ccdf2"
  },
  {
    "url": "assets/js/333.ee7bd882.js",
    "revision": "b65fefe5ec466722560ada6762b48a72"
  },
  {
    "url": "assets/js/334.4f4f6bc8.js",
    "revision": "ef6224020cfd61e14e040ed21ece5246"
  },
  {
    "url": "assets/js/335.6b847f7e.js",
    "revision": "5ab725d8ae450af9f422a6aef213f175"
  },
  {
    "url": "assets/js/336.87ca264d.js",
    "revision": "d038129d97e8deeacf22dab3cf91cd5f"
  },
  {
    "url": "assets/js/337.0277d962.js",
    "revision": "beb834b0a164f54c089569d0ebb6c6e3"
  },
  {
    "url": "assets/js/338.366504ec.js",
    "revision": "b965ae87233913466a1e8959ef5e1213"
  },
  {
    "url": "assets/js/339.c7a9f9e1.js",
    "revision": "af0eb4e8a8418b26507d071314be1fff"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.3ac29542.js",
    "revision": "d6f74d85b670184c67e5a3a83adbfd03"
  },
  {
    "url": "assets/js/341.ef51e41c.js",
    "revision": "b468a63adff47fde0e99985856156983"
  },
  {
    "url": "assets/js/342.7fdc5fc3.js",
    "revision": "b617ee5e4a44448873ccfac2ea576723"
  },
  {
    "url": "assets/js/343.2a168a20.js",
    "revision": "0401315cb3d367ebdef4329119529232"
  },
  {
    "url": "assets/js/344.145b2573.js",
    "revision": "3729c84da5f2f51ea71e21055147b7ea"
  },
  {
    "url": "assets/js/345.251e4934.js",
    "revision": "8088577514331ac7f18ee978650198b0"
  },
  {
    "url": "assets/js/346.8943a86f.js",
    "revision": "2634b4097e0a2dd5ba8c307d9d5fac95"
  },
  {
    "url": "assets/js/347.76921514.js",
    "revision": "71e661d0690cf3bf8fbb5f304fab114a"
  },
  {
    "url": "assets/js/348.2f315bbf.js",
    "revision": "0e9fc746f4e4a94aeeea96067dee0c2c"
  },
  {
    "url": "assets/js/349.d1039adb.js",
    "revision": "60bcabed1d9125ea65f2dccf21a78710"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/350.043255d4.js",
    "revision": "9a3315f7433d7782dbac7be0f310ab04"
  },
  {
    "url": "assets/js/351.8cd7d2bb.js",
    "revision": "767cc557256389f190f75f4f7bddcadf"
  },
  {
    "url": "assets/js/352.26843ef7.js",
    "revision": "99200116d4747bd846d72cacda9b5aaa"
  },
  {
    "url": "assets/js/353.44c1ddce.js",
    "revision": "3e47e2b0ee19c48bfa893adc3ffd799d"
  },
  {
    "url": "assets/js/354.9a57861f.js",
    "revision": "1672123f4da7f8aa7e4ea8f233bb04d2"
  },
  {
    "url": "assets/js/355.4261bade.js",
    "revision": "a1c3c512203fb88983d9341e49fe153c"
  },
  {
    "url": "assets/js/356.4ed42d94.js",
    "revision": "833ce265394c71ad26739236169c29d9"
  },
  {
    "url": "assets/js/357.6a3fdcc8.js",
    "revision": "f0011fa81d4dfa1a807577306a1257df"
  },
  {
    "url": "assets/js/358.fe1dc6f6.js",
    "revision": "1871b8c00a26298ef2dd6ad0b0bd9bf5"
  },
  {
    "url": "assets/js/359.42261b2f.js",
    "revision": "88cd01408af39bd84daa7bf6ea058568"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/360.7ad229d3.js",
    "revision": "9ecc959f8acbce14bbe7ee34fd337bc3"
  },
  {
    "url": "assets/js/361.1a834364.js",
    "revision": "b2163abb66e29557a5f63850cbdb76a4"
  },
  {
    "url": "assets/js/362.abc403a2.js",
    "revision": "5b42a22c353e3c044825e66cc926d7f9"
  },
  {
    "url": "assets/js/363.1768392f.js",
    "revision": "b43310a0a40def0ce7cd432c6e409efb"
  },
  {
    "url": "assets/js/364.36ca0514.js",
    "revision": "7a4946272e5c150d475a05220e2d27d7"
  },
  {
    "url": "assets/js/365.22722917.js",
    "revision": "05b3313eef0c0d8584e701807b65c815"
  },
  {
    "url": "assets/js/366.19b7828e.js",
    "revision": "896fd7eed2f42c4f53b3d9f722937f72"
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
    "url": "assets/js/52.5a0d878e.js",
    "revision": "3cf16ef257f079a4b2ffed25fd407d2c"
  },
  {
    "url": "assets/js/53.82ea34b3.js",
    "revision": "9149d21c19532f8a11065ee8a7fbfb91"
  },
  {
    "url": "assets/js/54.5bb6adad.js",
    "revision": "fafb1288037925154a18344e2366a840"
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
    "url": "assets/js/58.a9939bfa.js",
    "revision": "b9c313af7c21ffa4ec5613be8cfb1bd1"
  },
  {
    "url": "assets/js/59.dd8576fc.js",
    "revision": "94f2ed726144082af7cc98160fca2ade"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.18486250.js",
    "revision": "d5a4c03a1850a238a6e3a83c4e5c21f9"
  },
  {
    "url": "assets/js/61.5219a254.js",
    "revision": "beea7f27ce48d589bacb7219ae9f3aad"
  },
  {
    "url": "assets/js/62.13a22918.js",
    "revision": "b739c26e7115e4306ece63eb35ac45ed"
  },
  {
    "url": "assets/js/63.83ff3f68.js",
    "revision": "0f9d8ff116732c8ceef9bf234d7221eb"
  },
  {
    "url": "assets/js/64.9ad36be6.js",
    "revision": "96a952b3fa084bffe1f270a7edf894d4"
  },
  {
    "url": "assets/js/65.7c448a36.js",
    "revision": "365a559442198542841aff220d243e2e"
  },
  {
    "url": "assets/js/66.9a841c15.js",
    "revision": "5344ad8681e2c5b04d31992305e3f810"
  },
  {
    "url": "assets/js/67.ca759bd5.js",
    "revision": "458280a60a5dafbf93d8ba0f3ee3955d"
  },
  {
    "url": "assets/js/68.0f089170.js",
    "revision": "f576cdd1fe23754507be7c00c5d0d0b3"
  },
  {
    "url": "assets/js/69.775c22f7.js",
    "revision": "56c412b4443613c3b7fdb5072ff3a4ab"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.9734582f.js",
    "revision": "eb6565221d82524538ca93776530cf18"
  },
  {
    "url": "assets/js/71.aa9d071d.js",
    "revision": "31eb21e1f55d8db10a9e1d2c48a11f61"
  },
  {
    "url": "assets/js/72.e3b75f08.js",
    "revision": "f33bfb6ac6810eb6db296dca5c863d7e"
  },
  {
    "url": "assets/js/73.cd85fe32.js",
    "revision": "e2a3356cf88fb7679058c6e6c7bad47f"
  },
  {
    "url": "assets/js/74.66907970.js",
    "revision": "62017740df7c41cec9f25583162dfc02"
  },
  {
    "url": "assets/js/75.53281e6b.js",
    "revision": "ca126d7c68136fe0088e83571018f4c8"
  },
  {
    "url": "assets/js/76.d3c1e3a2.js",
    "revision": "c418d8801fa742de326cdd7d92589788"
  },
  {
    "url": "assets/js/77.efd47c85.js",
    "revision": "5f3e865ba254b006d8d3afe9737a5328"
  },
  {
    "url": "assets/js/78.38f55b8f.js",
    "revision": "ac717960b24cefa42af6819f3436e070"
  },
  {
    "url": "assets/js/79.d158ee6a.js",
    "revision": "60e344755454e7c2292ba7d9c3dfbb74"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.dfc80f8f.js",
    "revision": "251681dd4fb082e3f82ba965acab4f1e"
  },
  {
    "url": "assets/js/81.169db809.js",
    "revision": "ff0ced35da8ded793cda4a2d99b253a1"
  },
  {
    "url": "assets/js/82.5435b815.js",
    "revision": "094d7c20f39c78c573a4373b222ccd80"
  },
  {
    "url": "assets/js/83.fc2800f9.js",
    "revision": "a17f789d95328a6145b357008f5eb42f"
  },
  {
    "url": "assets/js/84.523eeaf8.js",
    "revision": "07916cf1aa8289beb99b62997401c639"
  },
  {
    "url": "assets/js/85.d3daa0db.js",
    "revision": "623a836e46d278f7c5cc6a511d361ad3"
  },
  {
    "url": "assets/js/86.ac99213d.js",
    "revision": "c88d40169bada6af685ffa29a928380e"
  },
  {
    "url": "assets/js/87.263615db.js",
    "revision": "7ad21efada59a6e4feecb9a9cc164af9"
  },
  {
    "url": "assets/js/88.e626854b.js",
    "revision": "a262ee64bd5189150c1737f4b4dd1870"
  },
  {
    "url": "assets/js/89.c7b66fc0.js",
    "revision": "f5b8f782b444b01396b89ee8a484656a"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.3f6308a2.js",
    "revision": "866b948b8f9ab3c6e87e35dbe1e46c77"
  },
  {
    "url": "assets/js/91.bea57ce9.js",
    "revision": "2e6b240d98c6071eb3773ffc53644c15"
  },
  {
    "url": "assets/js/92.9a44f5d8.js",
    "revision": "1301a653892c8321a7503777968dff8c"
  },
  {
    "url": "assets/js/93.bd7b2599.js",
    "revision": "97b12c0c7b1c5dc0d1e8d8acddfc39aa"
  },
  {
    "url": "assets/js/94.e108d5bc.js",
    "revision": "39ebef5662354745a314d92067acf986"
  },
  {
    "url": "assets/js/95.c9af5013.js",
    "revision": "0617ed2e55f60ba9bca9629493838148"
  },
  {
    "url": "assets/js/96.797e0f65.js",
    "revision": "dd06e0763a13995eb953393ce1adf113"
  },
  {
    "url": "assets/js/97.df0f0fc4.js",
    "revision": "36a3a668a330aa8d2473d167f89a35a1"
  },
  {
    "url": "assets/js/98.98ea4414.js",
    "revision": "f589f46207e0da14774eea2a8f93fad3"
  },
  {
    "url": "assets/js/99.966d7024.js",
    "revision": "a8a085270f204dc38eaa34b0dd3947bf"
  },
  {
    "url": "assets/js/app.2375b47f.js",
    "revision": "98386bfa70809b5bf0783773659c9842"
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
    "revision": "40198b23ef22b503cc3326b6b5e6e56e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "6a49b85b89741a244b36ee762a26131a"
  },
  {
    "url": "books.html",
    "revision": "f7e6ee466ed41378d794adc59115f376"
  },
  {
    "url": "categories/index.html",
    "revision": "cb81b5ab4cb4fb7f81051382f543342e"
  },
  {
    "url": "deepseek/background-needs-method.html",
    "revision": "f85fa63455558f2c933c5f58e678a52c"
  },
  {
    "url": "deepseek/data-analysis-instructions.html",
    "revision": "abe035fea7d5cea4b0686dbe3af4f8bb"
  },
  {
    "url": "deepseek/deepseek-1.html",
    "revision": "5bf18c27354cc2100f80349215755951"
  },
  {
    "url": "deepseek/deepseek-2.html",
    "revision": "947f97d06bd77e1f51222406e4030321"
  },
  {
    "url": "deepseek/deepseek-3.html",
    "revision": "673933e862ce21c895dcfd29587fe5b0"
  },
  {
    "url": "deepseek/deepseek-4.html",
    "revision": "3a0e40dbe9abdb4bbaf2cc55a4bd5674"
  },
  {
    "url": "deepseek/deepseek-5.html",
    "revision": "c9546d8a46791e3227637139ff2707e2"
  },
  {
    "url": "deepseek/deepseek-6.html",
    "revision": "461b1c19996bc2ab689b3f605c8a1080"
  },
  {
    "url": "deepseek/deepseek-intro.html",
    "revision": "396b84354cb733fd3a17a88c50996c73"
  },
  {
    "url": "deepseek/four-step-questioning.html",
    "revision": "75abdc031f28584e458eb35b8cf842fa"
  },
  {
    "url": "deepseek/grass-planting-post-template.html",
    "revision": "f18783d7b4f8c5c266917e0aceb465b4"
  },
  {
    "url": "deepseek/index.html",
    "revision": "1c36c7893a731b6cd7274b9e11defc11"
  },
  {
    "url": "deepseek/reverse-prompting-technique.html",
    "revision": "18e55413986f43f89ccd38cdaae3658c"
  },
  {
    "url": "deepseek/role-playing-method.html",
    "revision": "44d84ae963320a7f223608828b108505"
  },
  {
    "url": "deepseek/step-by-step-ai-prompting.html",
    "revision": "65768476407c147698bf3db2763da646"
  },
  {
    "url": "deepseek/thesis-strategy-formula.html",
    "revision": "cb83ccf2c1be84ce97bbfa29c835eb66"
  },
  {
    "url": "deepseek/title-generation-formula.html",
    "revision": "9e62adc4494bc42c831e5739ab5bbf58"
  },
  {
    "url": "deepseek/trend-jacking-method.html",
    "revision": "9a0266424b6a8e217e59226f00472cc8"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "0f17a2851acd9b03ba3264d0f5654ab0"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "2e0af097a1ddfcaebdebae302781e948"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "891fa8415cb27268a1157c15d5ba3da4"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4cf569b16b8777c0231ff288e5f6c707"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "a89773156e18d4cef5a14a6caac75831"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "5e5589504c4a8c11b28ee320e5cc168e"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "eda781a9babfd998e4b4f2053c5cb692"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "fe820aec7932910997c0ffc8fce411ae"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "29dcb7bf801404d7cec7ef980ae9cb73"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "f4b04a127149f5f7be0bc210f5515fbc"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "694e7fdcecb43bfc4387add18ced6298"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "bee4d894396c08f53f2a07d87a1ea95f"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "7a95b7945894c3e575a4141a4e72acab"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "5f2c80a7c2fa6fb6be468d4988250520"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "70494f7aa2c9055ec9dbfba87e840507"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "c93a5b827fd0d3b6842b6cd2f8891e17"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "c9761f2774e8e004098c2341a07a7a7c"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "2763633da39762a674e648fba60d00a2"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "a12ea90de4425bebbe79c7e46ed7470d"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "e8f292ddf408cd239a814b9ac45f4586"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "4294753cc4efb21cdd5887c2c8190721"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "348d562514833292b26f8955caa24af6"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "d5c8c38130782389c3f16ec3498fcf2e"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "7b9af9c3006cb343d2555b1e8d935632"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "9fcfead36390d012fdc54f52b5738dba"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "bfd4b3cf8bcbebe85a9aa40c6d08cbce"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "44d2d594a84a95b69297d30705a74822"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "3378de6a420ad8adb6b69b6def693d5a"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "6702dcacdf395dc69725613df000dc78"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "3743ea2cae5d8de036fdadafc0b5af79"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "8c6e71d9cfad0f06ff2116504acdace1"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "8643812d7efd421ddf55a263eae2557a"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "27f4ce9313d2848e5d3143699db20a19"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "ae41fc06dccc303aacdb5753ee17e977"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "c4f81ed25bb7f660f879c269dd6a71d0"
  },
  {
    "url": "figma/index.html",
    "revision": "2d8c7ca48c3b75654b0505aea49f2f85"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "43a93e354e97c325765c3793e2b2237d"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "cad5f43fff8e073cde98821d4c23606f"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "d88a240648702b1d278e2dafb64c1b1d"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "19b7c8a44119f182e89d2bd5601c18a6"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "bc3d404fd977cb430cb2c010d77ddfea"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "73cb6808f10e30912a513a64d9ee9088"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "95df422f59fef90de31e7f9b63f526ea"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "a360385b6a2f129115adfa1c1e911ee2"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "780f3c99ed9df6105210d5c08fb8e23e"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "b2dd4edfa7573a34dabd8b64fd3bfdc8"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "1130a70230c352011767a86766c7d9db"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "3ebd81c3edfb935c45a87622962e24f0"
  },
  {
    "url": "flutter/index.html",
    "revision": "c76a908c75b2c531a33011396798322a"
  },
  {
    "url": "flutter/point.html",
    "revision": "6b10cc694541f8e2ee1537f56c6d7bd6"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "aa6a76d815e555e6da2ad5948fd4bc0e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "95ee16d5d9b6a27e1438388d7b79fea9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0ee3c94a78c7b62b0321058bd83ce0e6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b5d5abe66cd98614a1f180ad8e805518"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "57440d24aa79c50ab81fd1d5a6b3a2ca"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dae3adef0350855ea6a8fc6918fd7a6f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "db1861a9c5b94882821c06c1d1f132bc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "7e965101d6060349a7e8fc47bbe65d9b"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "3da79594e7fa804e9100157b62ad9fac"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "bdfe1dac844488a8c96b9f4aeaf15c34"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "13e2a3200e1a0da41ba86b8b800f0f13"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "8c2e9de36dcae3e925aad4fbd450b228"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "769c97752b6c02c01360649fcac0b465"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "fe1ab34c054172931d676b185e698240"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "68c3e541bda1d449bb0522a9c8a37d18"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "afabd0e9a39dbb17abf0c290c0bdb207"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8c817bb06cf7cac056f961b3f5b0b462"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "e837f07116d6d8a474b803d68c9356e3"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d3232aae4fb5950cccb2e71f4f235996"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "71a1c7fc87a854e21bb4aa53e67d979e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "76dad8aa3bb862491807b88589704e40"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "17bac6c390218669538fc6ecf80d5e81"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "787485e99e55460da866233d2f62d703"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "70c89f08c1927956a7917c295ce57db4"
  },
  {
    "url": "haskell/index.html",
    "revision": "ab1d00fa440315beeb970f7a92563ae6"
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
    "revision": "3bfabe9be43ae73095e6fd5a6d83dcd2"
  },
  {
    "url": "java/index.html",
    "revision": "a8cc58a126626e6e97c4c869e62e4abc"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "5e173d9ae3234bd6a1b1d20b7cbed560"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "a0f92d7b945c6dd0d127e54f393a434f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "eeaf158dbc33e339f4a2db946fc42b36"
  },
  {
    "url": "ops/index.html",
    "revision": "672341325d87883de199f4b2f296f635"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "34a8c303a2e0e86889ca03335ca6e6ba"
  },
  {
    "url": "ops/sonarqube-plugin.html",
    "revision": "4bb2d6ed92b11c54998efb538ae6356b"
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
    "revision": "08eac62988cdd0fae31784d92d5cb2b7"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f2993baaca4d5935c40b3e56ff6d9faa"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "d4944ad31a905a7240c71b80c44e4b83"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "3768b17510be937984bb37d940a5ae39"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "5bc4701c81592e7dd36adf3513325478"
  },
  {
    "url": "python/index.html",
    "revision": "194651e18047b4644f358553e73e94a1"
  },
  {
    "url": "python/poetry.html",
    "revision": "94c46a7e30f2e29de215730eb49ddd02"
  },
  {
    "url": "python/pyenv.html",
    "revision": "f5e821731cd1b972cdd5c62bda36ee35"
  },
  {
    "url": "python/python-ase.html",
    "revision": "e029b48b0d359e694b5c1a1aae49ec4b"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "ebfb625c2bc76912b7ad1e698a3190f0"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "43f3efb6412cf18e2b0d13777251b8a3"
  },
  {
    "url": "python/python-file.html",
    "revision": "36834242e5360e7e786cb9c99ca3ba15"
  },
  {
    "url": "python/python-function.html",
    "revision": "b5c8c33ad467de70d7f923c5921371d2"
  },
  {
    "url": "python/python-generator.html",
    "revision": "760723c07076be1775e945ab4cb193f5"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "c8346e77998832402b6080295c7f4db4"
  },
  {
    "url": "python/python-module.html",
    "revision": "469aac0e21c907ceec8d6b427d61173a"
  },
  {
    "url": "python/python-string.html",
    "revision": "8a70b757762ca2a089f9ec255a425510"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a0d80dc8adb497eb04032a9b3e5c5133"
  },
  {
    "url": "read/index.html",
    "revision": "f01e06e81dece0651b68eb43549bb0cd"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ccc6ac22a9a84f2784b0bee74f08801e"
  },
  {
    "url": "swift/better/available.html",
    "revision": "bb5dc802e206d2126f7094bfb38bea55"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "1838b8296b570b19812a9172cec4d6b7"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "80a769cd7fbcdd420177212db9b74ced"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c13551bd03cc34444ca6835ff5de9c7c"
  },
  {
    "url": "swift/better/di.html",
    "revision": "1bd57007f23097a60d0944f302fa146d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "ceda9e92058919a5f784b838282605ed"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e9dbb0ab0a324772a98a5da271cbb055"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "ed9d3f7d456034c775fab1ee5d253f6c"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f1281794c7b741595f03d63a5227d43c"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a90f0c202867310075a82b02a242362a"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "281080a98c4a8481156b387153acf3a1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "95e8f817ff492b1a01f8cbb0aa5cee0b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "63999772bf2bac539c4a5706304d2ecb"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b3da444da42fafaad986c9f7c657390f"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ec6f166a062a307aeab67f40432dc0da"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "932d724e75e7588d80ff67fdf71b08c5"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f14bcc9cd86dd25841e56848e35ccb5b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "79e97c254478286dcb62284c23094766"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "324f2307f3273edcc41c4a00d7eb701c"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "c2c178dd52cf01b67c8ee9b9e88b4d93"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "0cb392e6c0c4d593a472d1fd64ca3720"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "c1b19b711a6c8b58df01e704473c6b06"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1b27953587891ceecc96ce34a242830a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "259c5cc2365a181a5ee0ec4d38a7fae8"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "2748bff366319f4a6bd9921b46c4d1e4"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "1b9748f77ffc631dcacaf12a86f2c7db"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "1d9b9051837335520439184542a16764"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "bb73280394e03f5e375486daf87efa38"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "08dd9b080fa94a0d737e73a5d26b058d"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "62edc5d0b3f2b87f9a0b1172a8f33ff8"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "dee64ae2e5798825802fcbaba8312555"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "4f6d06ffff12e32ad2aeb254ed022972"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "6aece4195d6d10b0a13ba135e819672d"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "50f464c0f60c6bd167ffa3285f0a67d6"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "6cc23890c83858f1a1ba663a5ca95da2"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "1bb2bddfc821ac3c4d115dce9e8c7cac"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "bfcd80c0ead8cfcbef7e72935938d95f"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "fc2a965bf729d20bac0ac768ba4112f4"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "a2518273464787a300f9ff8f1d591293"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "6a803f784328c3c332bb7db1c2562a32"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "21795a38a3f83dbb2ef3a657ab3d87ec"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "c162fc565994fe9ab91ed9f27cd02fd5"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "5661c40004d71a6a561ecf5fae454b8f"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ccdb9d0be0b41429b22bd942fc31c952"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2db416392dce716fc66123113286255d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "c15ed0147b1d1b2aafb0cb35d05f1e3c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "874993210fc7bb19908e6533765b0840"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "284df57fb51c10a3073d04d324e995c0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "efecb5c0798848eaabff5c95efbce401"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "fc13552bde705054248ee3f134119b0d"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "e1f2329d450af2b9c712246e4f551579"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c7250a4649714aaecaabf1ce34b4e294"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f03c7510054344e3c527bb5603709ded"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "68c87da97e5830603b86dd2ae2353b7b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "199567d75b5a1ddf5c467dcb456af218"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "d729a76057b48fe68d35641f7cf0915e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "8c73538996c808a0f1c9bc98dde394f0"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f3ad2cb52d96d87820f64a4d5fe006ed"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "29186cc1ce4859f87acae9fceb93503d"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c84534ca4717c7cadc21adac7a80e6e0"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c219c4603af0e4d9ec7e365a98e20170"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6c336aa4cdc83424c7c46d32e2374544"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "92caadab339924373f3cbd85826669b4"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "ba97cbd186740943f92d91b8acd8650a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "3c05354da221df47377adb0cc5c5f5b8"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a6e030540d9db0c57e8c8f80897c704a"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "17e0f079b32f43f48b06ce25a0127556"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "88a04a5c7a325f585cd5e9a9a41c4368"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "11807c34186239a01bc3c517c7690e9c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "56c22ac23cfa07c3eaec2a7925c0add4"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a9c61f5da94ad3761f0230829679b417"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "d4a72271ed850afd9d7affc3b485dbe6"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f08b4eed4d9d1127ef5e9c3a459cbcf7"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "a5f3742cc0bab937cb69a7b4113077e2"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "a5b93a73beb2d2f60db4641bc2c8e1d9"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "6728ad1c1283a8dd704b1e3adca70564"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "da251b0a342377ffb82d50a4dd4aff94"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "cd07ce0c6e15eb67c6abc9929a1e02a3"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "00336139860752a19a10be2f1fddaff6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a0488c2c2d3ed558a2abcb685668fd32"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "acdd1ec1df0199cba89e89dae4fe8d39"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "68fb5ef6b812fa915f10f15d066daa60"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "93de58b5181f2ef0ae4612c544364cd9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "ba8d10744cb847d39b0578c3a51d624c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "f1833498120ca2f62820931dd743aef5"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a0ba5ad8676afc4cb6022f55f5f9ec7c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b80ff15d3b012f79c41ba79430121525"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "00b2562147d6b390a1419fe3de7155f8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "d57332d8ca350a0783c00419b17ff906"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b6a86963435c0802443cb8d5fa712911"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "446be8d009c24e955b98c70e2a3cf3bd"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "7b1a4c4c87080d336512cdcd08f537a3"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "386e84cfdcf54b8d4e0737228b9a2041"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f3d6798ae269cf5a88824ce00f9b0017"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "93b9777beaafece97a77e44dc9316754"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "db56b6dedbaf81643a822bcd1ffe4f7a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "ea4013779fd7c3a6d53586f0a008de23"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "8df1cf80949c4cc013ce726a349b7ce5"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "28d85c0c609d9a3bba6ecd43bf058d91"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "363baff97087f2710a3512fbe335087c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "5d21f57f5b13bbbbace86bae7b5ad61a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f65a2efa04dd9884a80407016a545ff8"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c6e464d7c5b5326c1f8ffbe771da11c5"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7c0f514114033a66dd50cede7655a7a6"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "c92085fcfbcade3f9561ee5b3b32b90f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "3ff2734127c819dfd603204741ac6d01"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "42949839238d28b3470db0c80ba81c4d"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7408198c15be9e370845b4eea7ce030f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "8ae3c9184c28f06e2076003689a1fe18"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1e751fcb13d66b93bbb574d487bd8ab3"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "245460bbf277f101d683b17ee1b42f2b"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "0f14f5d05a34754cebe75128dd7af8bd"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ac8e7de3aa4d3ec6496bca46bb9dd7ac"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "2b9971358261f62c38d3c6cbdbfbbfb7"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e27c17bdb9764c948f256e17086f0f01"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "430df31d3209d0220b160f5206ef14cd"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d24bd67257f14dc68dae916f4a5d795d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "18ea26fb9e1422fbb1811782c55eaa81"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "63fc54b8963c83a7211b87bf848efd34"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "2b8593ed2981979c8ff58f9289cafac6"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "67691c6e0c14c00a17376a5340e4bece"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "a63e219eb3f1506affd457a8045f07fa"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "aeb5dce414c9e37344c719ab35d98822"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "d9d11abed3e0ceee00523aec2039d25b"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "a200c5486107bf6db134618c82880c20"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "6fe09384d385153af24ec3cd0721768f"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "1a5f7b5eeffd3ef1148618eee790ed45"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4f4a4ebfdca17db7b5c2f47ed2c1599c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "61ba969202b65c718f87bf27d6cf209e"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "e8940f15dd546328c56c28213ab515c0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2563adb7d9ec2d10ed820a7a2fee90f8"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4684076c27eff8283fa91a5def5a19e1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f60ee476fac73d11c3e88a557bceb58a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e6d8218b09facbb2d09285794d0f76bf"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "90defb8b2ef95e6633aa2262d9b78fa1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "eba05c207939d7ec9efbe1bce3609db7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "1ee45283bdbec030312f234844fb6c19"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "7c5932da8a9f7f447d2f9979676b4f81"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "45ae68e0eea7e9ddf9af4901308ed97b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "e4461a4cbbf40ce715425f256ef15fda"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2a743ac693e7c98f5e1e3a905d5f54e5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9a287a57e2b905798ee1813afd14a34b"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "3c854eedca9d1bac40dae6b23d4a18b1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3d7ca545fe0315d6fc304c0fbfab7ec8"
  },
  {
    "url": "tag/ai/page/2/index.html",
    "revision": "0686ec587aadc95462d9b80d8b50871f"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "e1f51b06185061cab610c4d436f7ed3f"
  },
  {
    "url": "tag/cli/index.html",
    "revision": "09e022b33f5e6ca9943fbe448c0c0f4a"
  },
  {
    "url": "tag/code/index.html",
    "revision": "586b8552b435956b5f093777dae3e863"
  },
  {
    "url": "tag/deepseek/index.html",
    "revision": "a70037aaae9099fae3a3a5324b1e61c5"
  },
  {
    "url": "tag/deepseek/page/2/index.html",
    "revision": "0c36f7a0d584eabc860eb3fdea3c9111"
  },
  {
    "url": "tag/django/index.html",
    "revision": "1731eeae248c14a997b5ea499241f186"
  },
  {
    "url": "tag/dl/index.html",
    "revision": "e4423a6da6cd62dbc49cfdb43b76d3ac"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "f1f4871c20e4e5c723c4638bb438da78"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "a692926a7794501de29ddba311686c1d"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "624083a9567d6852e112df34f5b6e343"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "13a077c1a30fa124ac9583ea99190ec5"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "944ed80b450b7b8a01e5e8f1d948a785"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "01fbaaa1e9fc5a73efbaca4e04388f93"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "917629b46e6baa948d2a79e4dc7e7361"
  },
  {
    "url": "tag/gemini/index.html",
    "revision": "e0e0a83fe53d6f0655e745c4b6f096dc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c1538feda76ee655247d1d93e435d092"
  },
  {
    "url": "tag/github/index.html",
    "revision": "468216f1b7e66f770c5d7621f7394576"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d945ee975c42854afa0bcdea0636a490"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1be6fe18734812fe2da4291845267bde"
  },
  {
    "url": "tag/index.html",
    "revision": "958c6ce226d56988bb2e6acd8e6ea96b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5de0c203300b15e3d95f7f65cfcb5431"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "ac73d91b43bb8b9690495f08a486e977"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b3c2ea4b2362f5c9d94c85a67f4dabf7"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "90b89e0a13915c67615fc173dfbbbc0b"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3a88463e544bf591f65a854e638d2313"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "0166edc00b9f92b1a1d5068f99dcfdaa"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f5a7f30162f683cc0d172a4def16a135"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "406a928b8758f7eff1560afe7389985f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0b1362481ec0755469699ea5ad15fc9d"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1a7e4baac778ee61f48e8ee01a6a175f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "add406d7458d55e10459760bace0ca60"
  },
  {
    "url": "tag/json/index.html",
    "revision": "da0b6df6ff50fe2e8332d43ef3df0ab1"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "8b90a3dddebc4a1469d93955cb328925"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "804d8822e81abe92934def711ba3d588"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5bc3829c563c8362afb6310a119f6bdc"
  },
  {
    "url": "tag/ml/index.html",
    "revision": "50c4e84f0b4a11e9f7d0909ee153c519"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "3f26d59dcdc32e37dcfe107ef4cd9ec2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a553fc49f4a1356072c8dac687992b28"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "1162e439b977cb1aadfc8f234b5166e9"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "05a6f2f2e4e182e6c26a52f5d24239e3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "4ea698641e2ca255d13dc6c4607ee63b"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "2f3b7bab70bb064b464a20390e34729c"
  },
  {
    "url": "tag/qwen/index.html",
    "revision": "25bcfff0edb5463820acae522011088b"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d15efd3161eef4cb867461d0868f87a7"
  },
  {
    "url": "tag/review/index.html",
    "revision": "df82c931666c37ea4276e4cee7e7b17d"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "d66206d798984ee24b4ddceceb720b18"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "db730f8663d54370b609b5cd1414d68f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8a7ecfa38225db25eb1f7ab637243c6c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "1e7e729fdc4fcd1f6d4c4ca6e8548ad4"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "315aa4e66d85db412a8b9bacbd070074"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "29c1ab4b903e89c299629c64732cf8f5"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "bfb05cd069b9d10b2f53297d5194006f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "eee9a0d0e6bc15f2ebb102e7be4cb7b4"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0c0fff0e34e8c4b05a695b4cd02af6cd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "807c26207e4da88af26aa0db95cc4ba3"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "c9a02452c52b5635571a0ba0f40d22ed"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "21865b7361234d3dcc96309e342dd903"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "40f8c783e817828ead22b870235a6223"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "9e39df73c163271546ea3345f721a165"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "2dc2dfdd047799e85ceb4b1b9178f03c"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3af8e07bf0ee77bfb1f6519fe9ccc5ae"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "332ffbcddc18465428f0881b3d391899"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f27de7aaeab72bf31e56cc53da1f9585"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e3db1f99066409fe9f86da811172f348"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "ae3d4e3786ac60134ea51db8abe116b4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "10927a3e70a3c3aa6ada25006e91942d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "bb5d67b9bfd5cc12af497fbc07ffef88"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "67f035f3a516191572d788a7bd011abe"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "246d7db296a378085bdf7ded22dd7873"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "565993156c5b7ede1f93fb76e3dc0c12"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "65bdf6711e457f39b0ad67a885acf168"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "28908d34836f5e041ea348a7627a64de"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "3caa1efb14e827d57845405159f7ae70"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "1ee7ad37ecd3699c62059e58a5006c78"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2afa23896296261feca419dac9134623"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "4eee02f0bca975dbb3ca2fa8888c8648"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "baca6b2336c7b29fe7691025e7b97363"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "682fc89137a19a586c19ee408836fc69"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "fcfc3265f13899d8e2556817c9199c7b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bcea04f1582a15cc21354d0485bdeb7c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "31ea01fe2bd83208e248cf35222641a3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dc5f80be21e877654344f3235a1754a1"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "dd495c93141f9b7ee60d39de616d37dc"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "990980eb6637021aa20b28d043d2ea87"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "808cc9b421279ffa65b68ca3339eb197"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6631d50e5a4aa476a3e15d663f55abec"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0df31266b0c1b6c1ba64cb4361daf460"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2adbf2221beb099d15c433aebb59b655"
  },
  {
    "url": "tag/分类/index.html",
    "revision": "f690cce1bfee0261911a1eada9548f55"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "1b9280913782d52aff5e4bb6fb221b0a"
  },
  {
    "url": "tag/回归/index.html",
    "revision": "cfa2d78c7a6e0588067bcb9f59ee6aba"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2f9a67cff1d6307ca1ae1a31bd2fadbb"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c4f4bb6450b7f372d3f7c66b83e824f4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "eb6de13c5615dd38eac397ca0f5bf807"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "602636b238e2744db000175f0fe0054b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "82ab47622990ac76c5025f664cce19c7"
  },
  {
    "url": "tag/数据集/index.html",
    "revision": "40d6f9cb7f9fcf85c883014ec4807967"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "83478fd717da994c3f88e465ff3068a7"
  },
  {
    "url": "tag/深度学习/index.html",
    "revision": "41f291c8946ae00fe612c65136ac65c7"
  },
  {
    "url": "tag/特征/index.html",
    "revision": "8fe7790d099051565dc70f0fbd8848da"
  },
  {
    "url": "tag/特征工程/index.html",
    "revision": "efd099a2b79e7ccb286be10d6540d560"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "d1199b2751106b16c1cf185dcc85ae7c"
  },
  {
    "url": "tag/自然语言处理/index.html",
    "revision": "0933ad9ece89b02cb57e7a41c5bd51b8"
  },
  {
    "url": "tag/运维/index.html",
    "revision": "ef0f3b1a8bf3797bb771a9775880ab0d"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "baf75970dcce3c89ff0f6ba54fbf215e"
  },
  {
    "url": "timeline/index.html",
    "revision": "5bfafde970ab14e3fc649c9add870d0d"
  },
  {
    "url": "tools/code-review.html",
    "revision": "effa69974b625715541efb4856fe1a3f"
  },
  {
    "url": "tools/docsify.html",
    "revision": "6ba30fd8c22023990c497afcd549e12f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "a59cd8432b1571cac5c19b9578d60992"
  },
  {
    "url": "tools/gemini-cli/basic-usage.html",
    "revision": "92f4c3bae8dfac49ef54812eb96db1f8"
  },
  {
    "url": "tools/gemini-cli/custom-mcp-with-gemini-cli.html",
    "revision": "abf045b2e7ae90a6209c065b4e669190"
  },
  {
    "url": "tools/gemini-cli/index.html",
    "revision": "475012861e8ef41600a1b61c6146909d"
  },
  {
    "url": "tools/gemini-cli/mcp-with-gemini-cli.html",
    "revision": "1582838fc791c05f8de259351a55e6cc"
  },
  {
    "url": "tools/gemini-cli/pro.html",
    "revision": "0083f912638bf089e564fad21a2daa2f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "168c52ac4412d6656fd87fbd11f04e5e"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "44332f418705c3f10f80f8bbdd8de4f4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ad15b7903a27df25bbf500c303f553f1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9a71633bec5ac6210a2510305c2fd85c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1712ea9ca0ceac0f341ef837a43893ba"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "6053af3b923e67fa12a98d25e54459f6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "12f5dae9dbaaa7d8b5b6e60cecc4bba9"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "bafcf3e8cc59efcccd479a520e407ba0"
  },
  {
    "url": "tools/html/video-faster-play.html",
    "revision": "25241724cc4e9aa3d0e9d3be0ceda12c"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "3c6fc897a5d85e543f965a98e46bd6ab"
  },
  {
    "url": "tools/note/index.html",
    "revision": "dedf01234d3650f2dcb70a8aadb6451d"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "9409cfb067059689830614edd2d232f7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "8195d4eac71e4d92d402be54e968b93b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "d5fb51adb5b962e01faff105c47f60b9"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "50e52e34372119f0d69980b9fa39cbaa"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "80dc2c5d301700c368a48ed09a84be85"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ddf73f956bac5aec514c67c10c5f1cf0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "7ca7b4daf2a8fe338840931d68638dea"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "5d7843f1a0933f66ed7921eabc3a2550"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ca9712fd069de0b54683d7e23d292799"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "bfdf80db1989c48aa2434a8704c08f64"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "1279d38f37f0751911151be1ef8a34f3"
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
