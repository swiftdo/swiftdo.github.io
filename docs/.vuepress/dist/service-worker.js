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
    "revision": "42dc50365fb471e170f6baed5f775df0"
  },
  {
    "url": "about/app/index.html",
    "revision": "f2df5774bb34893692c2d88f316b074a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "21cbd213ed3b4ea51cb43bfa9a303271"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0e1f394218fb12621f890aa0d5eefd5d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6634175ac2941dc53d82e65670e0204b"
  },
  {
    "url": "about/index/index.html",
    "revision": "f2da3beff5cf18512af6b8bc75c0c314"
  },
  {
    "url": "ai/index.html",
    "revision": "6191eeb51afffc8a4a693286f3b7ceb8"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "f610b613736d85caed2d651d71889ad7"
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
    "url": "assets/js/1.a551f48d.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.abe8fd73.js",
    "revision": "20824761898e44a45f81f7c19517f9b2"
  },
  {
    "url": "assets/js/101.e0df4dae.js",
    "revision": "c1180e60610de381171995a1bfe2336b"
  },
  {
    "url": "assets/js/102.0e71658c.js",
    "revision": "6a4ee90ee2a960161baf4977f94aff0e"
  },
  {
    "url": "assets/js/103.00a37402.js",
    "revision": "243e5421bf91e8cd2da940aea0bc2bd5"
  },
  {
    "url": "assets/js/104.fe3f4f8b.js",
    "revision": "cd1758c701ba18d7453eee203ea1d6e2"
  },
  {
    "url": "assets/js/105.6b31cd8c.js",
    "revision": "c7f322dbe0cb5cadc78c862ecb486516"
  },
  {
    "url": "assets/js/106.69e3b11e.js",
    "revision": "dd68169fcb2ec372fc5b04edaa21c8d1"
  },
  {
    "url": "assets/js/107.b097b565.js",
    "revision": "7aa71def7e2bd81471f1d7350dbcff12"
  },
  {
    "url": "assets/js/108.bacd767b.js",
    "revision": "b04852a7931c70ca73f5ef3b41cfeea4"
  },
  {
    "url": "assets/js/109.3afb2877.js",
    "revision": "2ac31d967a3c83672458ca1da345903b"
  },
  {
    "url": "assets/js/11.e2346bff.js",
    "revision": "d4db2c3acad7e5deb83d922b5a0ce4c3"
  },
  {
    "url": "assets/js/110.267c42f0.js",
    "revision": "099adfa39d0bee48d92d6103e155737d"
  },
  {
    "url": "assets/js/111.2e4c51a3.js",
    "revision": "9ee2bb51e94855c084ac868effd8dae9"
  },
  {
    "url": "assets/js/112.caa06436.js",
    "revision": "5addcedf2eb6b62d196bcbf168837af1"
  },
  {
    "url": "assets/js/113.60f34cb2.js",
    "revision": "ac0c3f49210fd1931237643e2156ee33"
  },
  {
    "url": "assets/js/114.30d2dd3b.js",
    "revision": "3cc3f47f68b131d8dd3c58a042f0e9d0"
  },
  {
    "url": "assets/js/115.d251c9b5.js",
    "revision": "84ba3564f523f7ae5b92c9c09a0f9508"
  },
  {
    "url": "assets/js/116.ebc3c484.js",
    "revision": "5d27094e295e8455f9645359c99b0ee8"
  },
  {
    "url": "assets/js/117.e25df4a2.js",
    "revision": "8a22c0dd3b599ddbb4ccd9932a6ab9da"
  },
  {
    "url": "assets/js/118.8d18893a.js",
    "revision": "fab86b79eccb1fbd50503134303e3ee9"
  },
  {
    "url": "assets/js/119.a0a4cd16.js",
    "revision": "f4d2b35073bb4e995588dc0337e57c0e"
  },
  {
    "url": "assets/js/12.2e495a0b.js",
    "revision": "287a3c6a24c55c4c9bd1b92ed2cc6b71"
  },
  {
    "url": "assets/js/120.9b98b0f6.js",
    "revision": "94800953faf0bed79cf7708154b49359"
  },
  {
    "url": "assets/js/121.9a08eaea.js",
    "revision": "d16b46017dc6a225955177e4e08079ff"
  },
  {
    "url": "assets/js/122.7961bba5.js",
    "revision": "0c25feb14bf4f34a1652dd18c336c53b"
  },
  {
    "url": "assets/js/123.d334125c.js",
    "revision": "7927e083f1b1fe476a0fee55a151c913"
  },
  {
    "url": "assets/js/124.d1e8b5d3.js",
    "revision": "5e3b53f2f857f04d9e7501cf03bd6559"
  },
  {
    "url": "assets/js/125.8f6bd980.js",
    "revision": "ec35495d2034f912f8190e4057be7fb2"
  },
  {
    "url": "assets/js/126.c7c06b2b.js",
    "revision": "624bf5a3c86b507b18f728f7ce6f6427"
  },
  {
    "url": "assets/js/127.73c88110.js",
    "revision": "1c7a8ba5ced162b383f96eb96b011fd8"
  },
  {
    "url": "assets/js/128.f9a5e38f.js",
    "revision": "6bf0cae6a40a1b932feee5406aff7d78"
  },
  {
    "url": "assets/js/129.ad0dd40c.js",
    "revision": "8ad9100d06d3b2923b0778a7b5ac5142"
  },
  {
    "url": "assets/js/13.9d3a8989.js",
    "revision": "0d83945f510b42bfc620af5b3bccee31"
  },
  {
    "url": "assets/js/130.426f72b3.js",
    "revision": "4cca8fb0a7ea16dfc7bee9fd1d5c3392"
  },
  {
    "url": "assets/js/131.fd13b0fe.js",
    "revision": "03ddf48c077f83630b10d26b66b777fa"
  },
  {
    "url": "assets/js/132.335676be.js",
    "revision": "d9d5a3d74947d3617d83752ae0859c66"
  },
  {
    "url": "assets/js/133.8e538b3f.js",
    "revision": "0ab0695d7b46f4c6f2434695e6de3e80"
  },
  {
    "url": "assets/js/134.7d2c1592.js",
    "revision": "14c22a083a1f082b54cc866cb5d2e2c2"
  },
  {
    "url": "assets/js/135.1deefc9c.js",
    "revision": "18d5496f4b8e46ae65e6abbb96050975"
  },
  {
    "url": "assets/js/136.a5b28c71.js",
    "revision": "02b372b889291af390b8801c127b5cfb"
  },
  {
    "url": "assets/js/137.7d770206.js",
    "revision": "728148175941e324b6fc1fd7fa5545f0"
  },
  {
    "url": "assets/js/138.1b33e077.js",
    "revision": "41d6b23d57985ef3613aa8eb258dde87"
  },
  {
    "url": "assets/js/139.a893e668.js",
    "revision": "8ba63fca3c1bbbe0dfe5ddebeaa4a91f"
  },
  {
    "url": "assets/js/14.420914e8.js",
    "revision": "29571602fb9aff4b4ff3cf7baaf4bb3b"
  },
  {
    "url": "assets/js/140.ac4a0700.js",
    "revision": "e9582a98a348be7927d23d97de286d01"
  },
  {
    "url": "assets/js/141.25a65e96.js",
    "revision": "f6f8f69e81420d3973d6ef15c96fcfff"
  },
  {
    "url": "assets/js/142.cc85e9c0.js",
    "revision": "bdf263efdc5938ed676c86ce20642961"
  },
  {
    "url": "assets/js/143.42a6b70f.js",
    "revision": "9a4e3d1ec8c48f9336da15b567f6e63a"
  },
  {
    "url": "assets/js/144.78338277.js",
    "revision": "c9cb81fab25318287dc70eece4a6b108"
  },
  {
    "url": "assets/js/145.629bb143.js",
    "revision": "00d7f1513e42d4e3c5de4032aef15f3d"
  },
  {
    "url": "assets/js/146.78403d72.js",
    "revision": "b75c409d8b945c1d66b93fc4e30bc4ae"
  },
  {
    "url": "assets/js/147.70d18e37.js",
    "revision": "573f3df906ec2d45f08e8faf80e67b47"
  },
  {
    "url": "assets/js/148.3ae37f53.js",
    "revision": "a5996864a858fe0193504d0b4d8c7c9e"
  },
  {
    "url": "assets/js/149.c18bc33d.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.0727d298.js",
    "revision": "d4bda84b8171fb3466624824e999a764"
  },
  {
    "url": "assets/js/150.5931e8de.js",
    "revision": "edf8c1b59b42a38371adc2d63b244a4a"
  },
  {
    "url": "assets/js/151.f0dcd94d.js",
    "revision": "a4147b7431f9a4e8bd76793dfaa31865"
  },
  {
    "url": "assets/js/152.0442e6de.js",
    "revision": "2a52db9d0eae88122e77838f360d7b43"
  },
  {
    "url": "assets/js/153.33a3c898.js",
    "revision": "ccc2f7ab509349a08009f3611696983f"
  },
  {
    "url": "assets/js/154.c411abd4.js",
    "revision": "7b379f8d836648d9101451922d7d7e10"
  },
  {
    "url": "assets/js/155.30cd8547.js",
    "revision": "aff42195ade8ddd9f674c96692997db2"
  },
  {
    "url": "assets/js/156.d3b6b2bd.js",
    "revision": "aa887d02ed8a225bd95bb34467b4f0b7"
  },
  {
    "url": "assets/js/157.6e6a52d8.js",
    "revision": "e179c7b6205cd882312e9369a7d82d75"
  },
  {
    "url": "assets/js/158.9d6ea641.js",
    "revision": "bad21e0be62fec67bdcbc80748dafb24"
  },
  {
    "url": "assets/js/159.0e9fb058.js",
    "revision": "02188d5bb760123ba86a69abffde2721"
  },
  {
    "url": "assets/js/16.2761bf14.js",
    "revision": "40e564c7491aec2149f9813287dfa85b"
  },
  {
    "url": "assets/js/160.0bfc1b86.js",
    "revision": "76eaca82f620dfef15642c14a9058d7f"
  },
  {
    "url": "assets/js/161.ffeec41c.js",
    "revision": "eb707a0ebc4ad144966724510e6787b6"
  },
  {
    "url": "assets/js/162.9baa76d1.js",
    "revision": "c0f0adc398d9eb28368ad7734e77a332"
  },
  {
    "url": "assets/js/163.dd53b99e.js",
    "revision": "718ba80722e55362aa67f959b57b2b9b"
  },
  {
    "url": "assets/js/164.cbdabe25.js",
    "revision": "3b9e15f4fbda9b6b9464f20dd33e3411"
  },
  {
    "url": "assets/js/165.5405957a.js",
    "revision": "64fa4fca671eafb5e06378314613361b"
  },
  {
    "url": "assets/js/166.e4888a02.js",
    "revision": "2b531b81f3788c491e6a2be905229e5b"
  },
  {
    "url": "assets/js/167.20bbc3cc.js",
    "revision": "82de97af5aca5c3be18040bf53140e39"
  },
  {
    "url": "assets/js/168.a0ce5c12.js",
    "revision": "a84cb20c2f5ad4ececa146aa98e3b9ef"
  },
  {
    "url": "assets/js/169.211ce417.js",
    "revision": "51c57bc5b508b3ff6c8dd32caa800462"
  },
  {
    "url": "assets/js/17.3476d5a1.js",
    "revision": "1dfdb3398810ea3f595d332e72b6cf07"
  },
  {
    "url": "assets/js/170.23566b46.js",
    "revision": "2ff5a6482ed1ec6031d7a6ecba62ca88"
  },
  {
    "url": "assets/js/171.af409e30.js",
    "revision": "6078a5e98f0e9c38d9d9aad8e4e4c5d4"
  },
  {
    "url": "assets/js/172.dc92cd26.js",
    "revision": "f6d7f69e1810556dbc1c35db64614e34"
  },
  {
    "url": "assets/js/173.a524da26.js",
    "revision": "1be996bbb2714f698e880c962a44e51e"
  },
  {
    "url": "assets/js/174.955802a6.js",
    "revision": "272661c00b2227c6c768030aab907b86"
  },
  {
    "url": "assets/js/175.d934bc67.js",
    "revision": "ed434da8eca45837f71464f16a4953fe"
  },
  {
    "url": "assets/js/176.8c98feff.js",
    "revision": "d48cf0486874aa9e890924dda89d64b7"
  },
  {
    "url": "assets/js/177.b76d354f.js",
    "revision": "04a3e6b782ec4bad87f543d22fb04e4d"
  },
  {
    "url": "assets/js/178.a2cbb327.js",
    "revision": "57937c842efc941111ff038f81ad0ef0"
  },
  {
    "url": "assets/js/179.ec00f7b8.js",
    "revision": "5ff68a3372c479ff8fe7713a22219e62"
  },
  {
    "url": "assets/js/18.8021e176.js",
    "revision": "79a6e12cbd3e3d8b28e3a63c0bc857ce"
  },
  {
    "url": "assets/js/180.d48fbd3f.js",
    "revision": "2f0782c3f5d901ed753fa1cb8d18ccd0"
  },
  {
    "url": "assets/js/181.72b6425e.js",
    "revision": "724de9e9f0794036dab00444944675d0"
  },
  {
    "url": "assets/js/182.aff20ffa.js",
    "revision": "cae9af2e6e0c00c4af81d5c52a7a1e40"
  },
  {
    "url": "assets/js/183.f6569c4f.js",
    "revision": "41e35de4373facf4316f5aca21625ec2"
  },
  {
    "url": "assets/js/184.0553d61d.js",
    "revision": "a08a3b268450fe9c3a244eef0bb8ed12"
  },
  {
    "url": "assets/js/185.18664bd3.js",
    "revision": "d6e9bba374446af569353b2568bdd825"
  },
  {
    "url": "assets/js/186.57f1f90b.js",
    "revision": "7992ed3b82e4d51f7c7ede5207eff1c0"
  },
  {
    "url": "assets/js/187.39701f03.js",
    "revision": "36d5460d9c85d1fdf8778958ecb71f3e"
  },
  {
    "url": "assets/js/188.51090b27.js",
    "revision": "1e551a53df0cd60527a53030f87bed32"
  },
  {
    "url": "assets/js/189.e1fd9951.js",
    "revision": "90fe665467116e9a54db882a1c0a830e"
  },
  {
    "url": "assets/js/19.fa387aae.js",
    "revision": "47d0bafd003f696f3444759835babc6c"
  },
  {
    "url": "assets/js/190.33bc2bfd.js",
    "revision": "4fd2013ae2e9d27be1adb4757c6399b3"
  },
  {
    "url": "assets/js/191.25988d34.js",
    "revision": "521397460ff25f9914c3cbbdbb3861f8"
  },
  {
    "url": "assets/js/192.2eacbb3d.js",
    "revision": "19b2e89588d736899630a83266b00a89"
  },
  {
    "url": "assets/js/193.78938e64.js",
    "revision": "13ee27d920de98a728d4bebbbb0da68f"
  },
  {
    "url": "assets/js/194.85553856.js",
    "revision": "3e5ffaf6d28d1f3a40d23d8ddc683016"
  },
  {
    "url": "assets/js/195.69ce93d0.js",
    "revision": "e345bb0a251a919c1772ce0f16ddb392"
  },
  {
    "url": "assets/js/196.3716f0ec.js",
    "revision": "9bdd95bf98f5a55ad2e7c1f1a89e35d0"
  },
  {
    "url": "assets/js/197.52f8e8a2.js",
    "revision": "8106ff5f9275c2ac2b79ce77727a0bf1"
  },
  {
    "url": "assets/js/198.8b902288.js",
    "revision": "391f70e49cbcf79147365d0eeab6c679"
  },
  {
    "url": "assets/js/199.cdd27f49.js",
    "revision": "92682d1d687e57e0c5c99baabda18ef2"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.ef172dc6.js",
    "revision": "df8b14488afa4ca86d28bd08dc85d989"
  },
  {
    "url": "assets/js/201.d247716b.js",
    "revision": "f1fca412f029e79235d57c01862fcb20"
  },
  {
    "url": "assets/js/202.ac96e827.js",
    "revision": "6034bf2f1dff417ce095180eb1871d2a"
  },
  {
    "url": "assets/js/203.7d0a2bc4.js",
    "revision": "a4c23da8dc904d79491451ad74574809"
  },
  {
    "url": "assets/js/204.26c278ef.js",
    "revision": "5351923fa0c1aed06513be2fbd46d376"
  },
  {
    "url": "assets/js/205.55109036.js",
    "revision": "4ea25b97b90610acaa0d077b8d15246c"
  },
  {
    "url": "assets/js/206.d8a85d97.js",
    "revision": "fd15738c07261e6e79f1245a9b7176c1"
  },
  {
    "url": "assets/js/207.ecfc8a84.js",
    "revision": "ca2eabf1d18a4ee0a0564a9f43cfe714"
  },
  {
    "url": "assets/js/208.8331ac53.js",
    "revision": "babab7044784b6ac18fe066d0e71f8cb"
  },
  {
    "url": "assets/js/209.0d04c2d9.js",
    "revision": "54a8d975f651875835caf263866e2a80"
  },
  {
    "url": "assets/js/21.85976d2b.js",
    "revision": "fcf783f0f80f077b43ad6ca350a899af"
  },
  {
    "url": "assets/js/210.d0116468.js",
    "revision": "685864f912e7fb42de1d683e435b60ec"
  },
  {
    "url": "assets/js/211.fc5fce02.js",
    "revision": "a8d24f05e882be686847fb535abfb6e7"
  },
  {
    "url": "assets/js/212.22f237be.js",
    "revision": "fcf7e0e6df4d6bce0f9b86ef3357c352"
  },
  {
    "url": "assets/js/213.3cca79e3.js",
    "revision": "4217cadada484a3dd9e4c0fb360e4585"
  },
  {
    "url": "assets/js/214.444fe8b6.js",
    "revision": "ea505db82a68395910dc0a64209e27eb"
  },
  {
    "url": "assets/js/215.08af8639.js",
    "revision": "cc45e8808ba53c4689700012974c0986"
  },
  {
    "url": "assets/js/216.75829dc0.js",
    "revision": "54e7e5bd0a93212c1995fa7b3442be43"
  },
  {
    "url": "assets/js/217.74c4d62a.js",
    "revision": "f607e1987974ca01a49acc8a25280848"
  },
  {
    "url": "assets/js/218.891fa4e8.js",
    "revision": "fd7f62a21c052014a2c9fe02cd22fcf3"
  },
  {
    "url": "assets/js/219.5da9e937.js",
    "revision": "c0e0fb704e4c45fa07b1f1a0488d8c07"
  },
  {
    "url": "assets/js/22.904be68b.js",
    "revision": "cee57ab95b0e28c368abc6eaed3e7e41"
  },
  {
    "url": "assets/js/220.644a9915.js",
    "revision": "27cfd5c65aa061909f4eb6cf73451042"
  },
  {
    "url": "assets/js/221.f152ec5b.js",
    "revision": "6fcb263471f31566b76892ff0c5df9e8"
  },
  {
    "url": "assets/js/222.bb0ae4a4.js",
    "revision": "9c1a412d97a02e7a0b8a50908b895673"
  },
  {
    "url": "assets/js/223.c9e54027.js",
    "revision": "23d6f5a0df9524083b0841b1faac52fe"
  },
  {
    "url": "assets/js/23.aaac1724.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.d1aa06c5.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.e538d23a.js",
    "revision": "8457ab633475583a9d99cd05c47f96e4"
  },
  {
    "url": "assets/js/26.5099a8af.js",
    "revision": "1abfebe0bf882fd69a2487c567558e4f"
  },
  {
    "url": "assets/js/27.bb391e34.js",
    "revision": "53f035db2f7796a0a901969147288a08"
  },
  {
    "url": "assets/js/28.9d8aa8ac.js",
    "revision": "cd03b3468adb53dc390f460cc4377fee"
  },
  {
    "url": "assets/js/29.0f347e2f.js",
    "revision": "14918a5ebee9b028138e0cfec3f3cd2d"
  },
  {
    "url": "assets/js/3.03b8f943.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a6631d9f.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.66d94448.js",
    "revision": "257bb00457698be896a024221dba6edd"
  },
  {
    "url": "assets/js/32.c36fa945.js",
    "revision": "4e8efb0743bded49fddce1603948929a"
  },
  {
    "url": "assets/js/33.fed59d56.js",
    "revision": "3f8a540e3bf6e5607e39701ee2d29f63"
  },
  {
    "url": "assets/js/34.39711443.js",
    "revision": "3390bcbf8f722cca53e973ccca78139c"
  },
  {
    "url": "assets/js/35.cec93a6d.js",
    "revision": "1635a117cfa629974866f7c5e080d17a"
  },
  {
    "url": "assets/js/36.f9348fee.js",
    "revision": "41909cffebe14044519ce2fb64361474"
  },
  {
    "url": "assets/js/37.5f3be3f4.js",
    "revision": "66fa3aca65f23841e22e7fb1f7b405fb"
  },
  {
    "url": "assets/js/38.7bd21d49.js",
    "revision": "7610e2f432721143a81fd6cea4ee6faa"
  },
  {
    "url": "assets/js/39.5aad70da.js",
    "revision": "d480864c0da5517b4d2fa5d7629480a8"
  },
  {
    "url": "assets/js/4.ec8238cb.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.92b6a123.js",
    "revision": "3ce8b364176f59620a006b5738803f96"
  },
  {
    "url": "assets/js/41.d8723a31.js",
    "revision": "8f9e2fb77014276e7206cb57833d3683"
  },
  {
    "url": "assets/js/42.b387fd97.js",
    "revision": "e24559b1f6b7d00de12e098aa6b44ab3"
  },
  {
    "url": "assets/js/43.d7eff1c0.js",
    "revision": "0619e5f861bb46807ba9fca250464b2e"
  },
  {
    "url": "assets/js/44.c9e20e9d.js",
    "revision": "d6536bec380b804f41b9db2d45a17535"
  },
  {
    "url": "assets/js/45.14bb0184.js",
    "revision": "afe392c8c52dcce45dada60e9c2be06b"
  },
  {
    "url": "assets/js/46.386cc6ce.js",
    "revision": "40f26468a97faacc7d0f0af2f6b2d9a3"
  },
  {
    "url": "assets/js/47.ca99ee35.js",
    "revision": "857a0acc2729cb2665165efa646997f6"
  },
  {
    "url": "assets/js/48.85776129.js",
    "revision": "51692b2b083cbf6a265bd806caf16a50"
  },
  {
    "url": "assets/js/49.36380d0b.js",
    "revision": "5bcdc2190b051f519352abf365928dbe"
  },
  {
    "url": "assets/js/5.a53ea690.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.42ea717a.js",
    "revision": "15f8bcc84fa1b6d3ebbf97294fff7c7d"
  },
  {
    "url": "assets/js/51.0af902df.js",
    "revision": "141985de1dc415e480b696b441a24cf7"
  },
  {
    "url": "assets/js/52.e30e1fe9.js",
    "revision": "b9b351bd318a1fb69feb050783e01c0c"
  },
  {
    "url": "assets/js/53.7193ddde.js",
    "revision": "d2ae3c8eaf48ce06327961c68f4c9d97"
  },
  {
    "url": "assets/js/54.b7a826cd.js",
    "revision": "a3356a1de5708d953ed68b7428080684"
  },
  {
    "url": "assets/js/55.748e8f50.js",
    "revision": "a27cbc4c34e1395cffc6c2b798922c5a"
  },
  {
    "url": "assets/js/56.2efc2837.js",
    "revision": "524c126932b339e3aab9c3120fa95f68"
  },
  {
    "url": "assets/js/57.cc2dc6a0.js",
    "revision": "dc0204ac9644543c59a72b868223854b"
  },
  {
    "url": "assets/js/58.d2f34e18.js",
    "revision": "caa74a7290b32a86fe9055c2a932b2d8"
  },
  {
    "url": "assets/js/59.a0a6ad98.js",
    "revision": "cfb9081127b1aeddff9ef2a0d4ca0df5"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.42451ec7.js",
    "revision": "bbc112cd702807fadc4ef959b441aed9"
  },
  {
    "url": "assets/js/61.03fb8ef7.js",
    "revision": "9b293e3cba5da98dfd45a44634ba21ac"
  },
  {
    "url": "assets/js/62.0b5ee3d7.js",
    "revision": "d635d003fa4962b7c901bccc2d2516f0"
  },
  {
    "url": "assets/js/63.a47dd61a.js",
    "revision": "95e0334628cfd5a12cf713d48bb6ddd0"
  },
  {
    "url": "assets/js/64.d6cc9938.js",
    "revision": "3132947d60a29fa0134baeb3c296f479"
  },
  {
    "url": "assets/js/65.9af84460.js",
    "revision": "a7431f664494d4bdc1d30d5583b71f5d"
  },
  {
    "url": "assets/js/66.2e14a297.js",
    "revision": "ded1adbf786675f0f6b58e0edd3d9c49"
  },
  {
    "url": "assets/js/67.cd1ac0c9.js",
    "revision": "e8d965be452f4b4d38887d1b96beedb8"
  },
  {
    "url": "assets/js/68.2fb71ee5.js",
    "revision": "4ebbb0dede9ea3db9b444fe18706e092"
  },
  {
    "url": "assets/js/69.c0cd21bc.js",
    "revision": "99b85d7ba96eac46f6518494a85fee81"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.87abe8a0.js",
    "revision": "9268d5b0d6ec1d622a3e2b8b980d156e"
  },
  {
    "url": "assets/js/71.196684f0.js",
    "revision": "bff790ab6423afbf4b46271053b96c45"
  },
  {
    "url": "assets/js/72.e52c8463.js",
    "revision": "5383183f05a2ff5d7673d458d5b359be"
  },
  {
    "url": "assets/js/73.66ca6931.js",
    "revision": "6260c5b9414ca5a90f22bdfc5971918e"
  },
  {
    "url": "assets/js/74.0daa633f.js",
    "revision": "f35da326a8bd5f3189bddaa7b0e7c4d1"
  },
  {
    "url": "assets/js/75.402c1138.js",
    "revision": "8da4bb48e483eb194cb4a0a09a971428"
  },
  {
    "url": "assets/js/76.93824f56.js",
    "revision": "d04bd5309f1e5cf2ba07d18d834e23d1"
  },
  {
    "url": "assets/js/77.272c14a6.js",
    "revision": "0ec270b74099f05682c8a20b9498e71d"
  },
  {
    "url": "assets/js/78.5ac9f6bb.js",
    "revision": "61785b7c43555e1a5f29d8a8bbb8ddf1"
  },
  {
    "url": "assets/js/79.7abb0a76.js",
    "revision": "b919e2f5f39daaaf009b94ec8d7086d8"
  },
  {
    "url": "assets/js/8.ce438359.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.06c573fd.js",
    "revision": "c545183b23706e9f398f2379a643db27"
  },
  {
    "url": "assets/js/81.3aa3c893.js",
    "revision": "bf71923b5df478045971c3ae355692c2"
  },
  {
    "url": "assets/js/82.af03ebce.js",
    "revision": "c0cd3965cb67ce833f04a9ddc5d88003"
  },
  {
    "url": "assets/js/83.4bed7a04.js",
    "revision": "af2b1032e6154620e52c98fc7c977916"
  },
  {
    "url": "assets/js/84.dec19c14.js",
    "revision": "83c7c13fb27442769f5221e05c6ed373"
  },
  {
    "url": "assets/js/85.42a41e24.js",
    "revision": "2d5ab90f9ddfccf232b01b9593e823d3"
  },
  {
    "url": "assets/js/86.ae3ffdfc.js",
    "revision": "8675eb56df27e6b1d7b6c203a712dcc2"
  },
  {
    "url": "assets/js/87.0e9d3353.js",
    "revision": "73888e48db3ea26ae283f325834dc45b"
  },
  {
    "url": "assets/js/88.713e8a41.js",
    "revision": "5191fb22a7c468e4e33382f8908d003a"
  },
  {
    "url": "assets/js/89.d5ec230b.js",
    "revision": "5e74ef5c3a2db2732ccf17e87bff10d7"
  },
  {
    "url": "assets/js/9.d951da48.js",
    "revision": "f3d49783f04ef3201609cfdd4236a9cb"
  },
  {
    "url": "assets/js/90.8654c7cd.js",
    "revision": "702c0f57c8ed80038502f0f8e94ef19c"
  },
  {
    "url": "assets/js/91.f4dbe90c.js",
    "revision": "bd3b1d200d6526599c2305a0f2704fcf"
  },
  {
    "url": "assets/js/92.89baf877.js",
    "revision": "f115b199de04b741c30d6fd5ede41266"
  },
  {
    "url": "assets/js/93.813aeb6b.js",
    "revision": "2a5a30b3f8aaa675654b3b33e262eb03"
  },
  {
    "url": "assets/js/94.6c6b0b66.js",
    "revision": "4e86c97ff13264f696644c0a1a7feb0f"
  },
  {
    "url": "assets/js/95.f8d708eb.js",
    "revision": "5927f32cdf3f3df31d596a36d169a275"
  },
  {
    "url": "assets/js/96.9fefc939.js",
    "revision": "dea1d1943c6cc34056aea2e7b6573782"
  },
  {
    "url": "assets/js/97.1482e6fb.js",
    "revision": "09698321b3a27c5959d6bb1ce60493eb"
  },
  {
    "url": "assets/js/98.ff9e87c5.js",
    "revision": "02259483ebeb505b9b39e4ae59ba0a14"
  },
  {
    "url": "assets/js/99.4cfd6ec0.js",
    "revision": "e258bd5dffd3ace1ee08a3d5e0d21aa6"
  },
  {
    "url": "assets/js/app.070ec595.js",
    "revision": "9fd637bff9aca1624ea80eeeca0bcb45"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "ccce0594bd046d4f2a5a6ddd19949e8e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "39fb052e023810e8c6bfa171a6601e94"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fcfbca9fb5dff1ff11f0e26485e4d01b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "70ba7102920e83ed0505ac66e5dd3685"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6516f9cf2bc62074d48b0d18e99a5119"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "07504f27b8fde8dc71de660f54a568e9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a33d9ee313ea963af6bd0f5969f2e69a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ad3fa02d00029742ca8b528872730d77"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7df1aab8ca63b8a8d0f7358c9420ede5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "17249b95ca359b850052d734ca91ec33"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "17640fc2bac1cd34d2703e038f11a7c5"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "4cbb9c0cdfa0c2c6966d6f960f862baa"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "b258563fb7ea15b6ac48a383aaf7c904"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "95c9a653a02f7e18065faccd6c3b9cb2"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "cf504b7db82b9942b4c18bf208fa8d03"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "9ff59b8d53d3b1f5faef53190ccf1193"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "27a95e0f496e8d48b226b74c1c28363a"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "d5f701f8c09f689e9552a2936943f2d9"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "5e735a3ca2cd9cb3442981155c13350c"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "9bf5bc6ae0f7fdc3bb6ed3c5b29e2c8f"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "11572db6ca6a3c8259e8f8ecb6483391"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "9e339b462da4ec313a6b7bb2cf9adaf1"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "7ba3e4129c2ad9ec04cf1690c807b042"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "5eb57ae51df112b58e08a9fd5b377eca"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "74ac6d35dfc33b6cbd335829faffabf7"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "4bf1ebf0d0e370de49deb8f74d5b783b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "3ebea2712f76853d25dcbef3af1d95fe"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9a1def5708a86c5677e870eb469a1873"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "bcc01276d92a9b7153bf5370821f7877"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "4ae2cbe89f6812bd8b9151981466787c"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "304fa1725ec8085a3495958177c50137"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "df0b2f59c894e32b367b9ce7ba40a51f"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "69e99e0f000f97be63b49aab7d5a82dd"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "80300fc351a74ab959695ba445ff1a19"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "8bef2c11179eabfd28f2bb975a4d5ebf"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e9d914133ce22052cb0d81a51264f3e4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "f2c29f857c7668531b1dbeb454cdcf5c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "ccf784f2ba7b26b97015c159e4529fdb"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "9561008552587710915c8530d607a12b"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "fc2282fc3ec2c455ad5c47bbb0912856"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3cd0ae7c23024a79819c55dbeac428eb"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f01a8872b52aa7276811297940837f1d"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "1e5f931afbb43675f70221d6d6707970"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8d6f11d396e6520ca30bf28f502315d4"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "24150a300696e934ffeca884ad2951b5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "9ed959524a87fcc55857c064fdbd23ba"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "28e59930feb0876856709c45fa2714aa"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "2bddc8d57733926d9e35c5f85071a00f"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "79ec72d66ce1f3c5ee0a86b4737c3c81"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "88e1d77e04b5d468d441560d6f8919fe"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "6b644c450f1748819e2c1d0ad1134505"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ba1475778ec2a4bd5b2480ed11927a9e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "056585fbd8908f598158bb445abc5156"
  },
  {
    "url": "basis/os/index.html",
    "revision": "422926fa4552ead2c9d88987d6116cf1"
  },
  {
    "url": "book/index.html",
    "revision": "32cf68fa6ac02dac3cdd71fa835a8394"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "9d447e6813fb74ec695485c5d4cea88b"
  },
  {
    "url": "categories/index.html",
    "revision": "850bb280c3171f2cc73c34f29b27dc77"
  },
  {
    "url": "figma/index.html",
    "revision": "721214c6f17ff5e55de341a3d2057a51"
  },
  {
    "url": "flutter/index.html",
    "revision": "f71a2c599b662ee1a75ac2a23728daf2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5c4c03f269a61b69b25cc3dbcb3fc13b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c92387d255bdb964f9188326a9c81bd9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "09f3374f19dadabbba191cdc373bb8bb"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "bf13990496d5b8c0110bb3b3e5fd055f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "be67faa8f4036ed2b29bd2e9bc51cf20"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d14e3f2a996f3b5e429c61afc3c81662"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "07cc2c1ef2cc1f9ab6b6850c280e1a05"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6d5bfa071102211e8080d985ca92c31d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "62dac5ee994f387a4a8b3cea21aa934e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "32d31602cab1ae1214faa30d9c71d299"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "efd4a7599bb510e761164ebe82788115"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1e486643ac4050c4e911d53a077fa318"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c4a115a8797facfe44d8fd1d05eeb653"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "20f0d481ec6e515506cec52f3723ae90"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ce3ed4128f37d2633ae5131074da22e3"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6c7df2ad94eed9c25dd07eb737fd53ce"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ddb14d926596b0badd6f3121ea5b2d38"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7e267875717a419ed9d9b8fd1dda41a8"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "7fa84c1445b1d056d5a192f62df227db"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1aacc61873928b0290a02cbaeb0a13c2"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5d202e55b2cff2803696f31fb7508b5d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "5b8637f59d91daeb0282a4d367b19c84"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "2a2b78822660381dadba58631701401b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a11ac996c415c1e1c065c0d7de8af9dd"
  },
  {
    "url": "haskell/index.html",
    "revision": "c5b69297246cf1f40378b409e8acf77c"
  },
  {
    "url": "index.html",
    "revision": "02b000ff1fddcd17594901e3a2f08129"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ca5c0cc7282bf118052ec5d5729a053d"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "2f2414a5a1c017b026b734c36f0735e7"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "303accf86eb243a6d2e6a4a20d2b0a38"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b002047ae9145657bef74a5a65873bee"
  },
  {
    "url": "python/index.html",
    "revision": "50b0f77336fbf41e8472c999aeed9d44"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "d2286334f6306ec0412dce72a03b8a34"
  },
  {
    "url": "swift/better/available.html",
    "revision": "44aadc6e83cef5b4b909df7295e5f5ae"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7be597c4c5cd1f5a0bd38b08fdff4f91"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "545f586fd7345a666e6a641dffe21b15"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "dac6e54fc70424a46e90df5617956af0"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b711ed3946c0e5a25c534aa33b96df3c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "36358e002315525f24044c07d6687823"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e3e15ad6c32d8175afa7e5da31accfba"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "de0528b41cc41890e3ca425b887ae66c"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "56e6b2ac64d8b52ef1e32d59a13f8823"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1cc749344640a41a4be8a7752d351646"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "20631d771aab5d750560f3f2fa14f564"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d2ee2916ad4ef6b9140790245b686cc3"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c4b6b8c9df79f061d74de26e7bb74cfc"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e23fcf6da2835843cac1de2fba48d433"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "ae94657f5f43481c8ce4599d837007b6"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "83710c0ee7e0dbd3451db0888aba6a19"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "898d457e3f633d082737e9895278e7b7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "72fa75acd7c2e55233e455afd45e964c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "72cf4dcab29a3b172aa9e7ee8a9eeed2"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b747de944fc122522ddf208b18fe931c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "aae3bca62e871c4f0172817f495f76a2"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d3e75c1392e2c27aff6b1d88123f8e83"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "d747abc308cfea85922c2bd88b43d961"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "c45f40114a9a6b6b1771f26431d11bb3"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "32dc1c6999870f5f2d91f74dc878f183"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "107ee9e13a2c47d0bbc4b26953ed1e96"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "c3ab20071a68ea765a23fd616d371d24"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "c8d96c8965e15311add8859f9b81cdc8"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4a1870a39156ad0c52d4dd3c7f774c00"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "e9d322758be957757d4b03f389f738d0"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "b5e2bf06e98b902882a57fc2f6893b5a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "bc698f31d0da1170368e415976f65de2"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "5cc89a05951cb1afd6427b9ecdf22314"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a19614948d178782ae1feb3b3b51f89a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "10aa0203680818e48ec506c8563b46ab"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "297af08f435d758450cb7d0fff2ab2c4"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c4181644b23f7dcfc944cba156aeaa11"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "6f5554bbf92b75a22b093f4e9bb5a658"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "61186714feb3167851f06d5e63f8de43"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "875c5af4254ebbb73eabe76652b250ff"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "fdd240895801e06abdff42522e1854a0"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b8c106a5d93b1f6af66215f0d454ef08"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "0daca67677010affe5d40c95f1d1df71"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ca73405fdba928b01409efc7fb123b61"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c3e119e56799ba54dae8511925438c60"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4b8b2f038b845c424ab5439ea2a7c2b4"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "4e913d651f86d50e175e4662a9d3a5e1"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "1b8378c050c08b0db3cf756b3731fd7c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "19da22a531dba0ebc853aa721b256e1f"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "2c25b62216d084057651440eeea34dec"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "e60a1489cb99035a859b823a6fdff368"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "733f6995d4cf0ffa78cc9a00b417c5f0"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "050b94258bec2e822adb98510a888fc7"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "296478bb31307785fbe7bfa942acce27"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "48b80d59cfb648ec94fa5d6849f2429c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "47c961bb122dde7fc56197303a8e96c4"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9abedf876e630e616d327e445a75720f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "90edf761413a5d3d8b54937935be9355"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "c77d9e057d28487d6908242b2da99803"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b53411f8d4f847c72a548aaf670b5fc5"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "0541f5044750da13e54e4f54ee45835b"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "74c2fadc5073e595a45eda7365409f0f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7a04f5c3b94e9bb9f968ce6aeecb71a2"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "bd0adc597c3679bc4930d1f26cb0db75"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d4288d4d4b1b9baa341b0301c2d6904d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e3bacc76900e7f3625c348cb70260020"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "73472425405472576e5e6c582e4d96ba"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "0c3344f4fea3c7af4b62fe304132c0e5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "123de57ab0448e053073e805901e6b8a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "ea60378806fbda99e80e1e889fde2c22"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "3c1efafe82f6b82c6ca19ec6068cbd1f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "a7f88a604f9b1c9844024868da05ae73"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "202b98ef3bc46c31309a97e4f0557c70"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "cb85bec057bf9f98a658c2f98eea36cd"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "9096da1780357a0a8c9b6e31a375c980"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a0d8fa9ff74c1b30a1be490c5ef13982"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "29a70b841cc261520dcb2f297fb50621"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4453ff3c5d0942151befe3a06777ccaa"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "97b8d13dd20035930ea604d6e19af0fa"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "6afc027116567c479bb643a112a65bb2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7194f574bb34dfea74322f4d4e1ce067"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "464eb5523e942e440d7d1855a9d33ed6"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "4c1358743214ef26e0e2b3bc42c945c9"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "05675d12daa1cada2c19724c65cfb79e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "40404904ce8b1fe79b3f4937fdeab86f"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "452f6a00fe8af5dd3b7665c5c996ecce"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "cb3ab914f6749ada0bfbf3494a161b2d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ed59ef17251099e85d1c79b4b1c75a73"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "cc3a705b1fcc1230c4f1768b3a449874"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ddea9d7f4f6043879538e7a57b8cde3d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "73b3a0682d25d0ac53eb320c45819646"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "76d213f1436d2dd2c31ef16d3127b94d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9645500e8f8a0493a08a330beff36330"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f2d38b0e8a443aa4e1a91cc7131e4c0d"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "bc5d61e09535ac99948115c22718e4b1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ce747639611823a5b0f48178bdeeab32"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "39c3cafe2aa683fe2243b81e53be12a0"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "856e15d764b4cd2ab05d1b2d3bb9c892"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "8d2786b829f61a33952a01284a24e01c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "34ef64d78a523deb671e511a63da7f25"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "3e69eeaf5f69d8287a5037954ee94c79"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "108a3b9bff5988a5d54e1540fe043a88"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "642453da62de11b243270af0af988651"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7e69753088c116775ce36ce28030eb95"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "99888d1495a7be987b704c566f17ed05"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "c0c2d74c2ebe3e10e7be168ab33803ed"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b513e83cd0e4ef966b5a48d832d7b11a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "42c703eb1754d8e1dbf3628d278365fc"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "063a4ec12403a23a02c9ff5c530c8111"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c2256b20aa8e33c6bba688ccb694474b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2dbc949c705f3884a66e1a45f2e490ea"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f7b1c225c33c58e25ef0dc981432affc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b75c1a403d21dbc0ae2badfc5b0620cb"
  },
  {
    "url": "tag/index.html",
    "revision": "1c66638e4c758e6b0e3a5566261fab9d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a4004cce9f3421bd35e714e23880f86b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b4953b9d4c1032cc35c2e26fa511c106"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "bcdcbe203f3d3246bec5f3cf265d3ce1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c640081845333dc1d2ab950aed44bc66"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "68fb6b01bf0dc76e95779642856f71b9"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "3715a322fb0c83ac87eb65d4ffa5cba6"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "54b1749769e09b882e415f3452352aad"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d1ba29bbb03fce7598bdad6bac1eb0aa"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "35a8b9666c60907e3184eb1955cebb8f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3f274bd7119648e57e6e4475b295fe45"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "09c670aaf7bca9309c8ae990a17ef38d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "338323ecb5e416f87f8d7ee9e3e32f91"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5839bc6b0dcb792312cab29df03389d6"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "34bde4a2973fa3e683b690ffbf0e96df"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b209c81f47634d1d69c912e5202edce3"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "67ebc480d60e4053f4459ffbbc187818"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "dade68ce9b51053fdcac97745208e417"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "8a9692afc7117e3cd629f5ac5a2d06bc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d296ea05739a33372f5643d1831b4a96"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8efa9569e6f8eb3637ccca038125caab"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "49faf049f70a57c56d51e798d361e2c1"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ba07a8fa9b21b782bac5628b7fdba89c"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "ee63d937ad4377a98a055c838b5a257c"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0497368d54fdbb04be61647baed3bbf1"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "785e1020b4fbdee6e22ef5e01014d0ae"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b1ab7c7be2e150866d6543d9f467458a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6cd83a36ee673431b507485b17bc9f77"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "584d5fde5d6d24932399fcde4642d143"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "184a83c5dfd2f1ab226cd499b1c7c623"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "4e6ca1cd01376f7fc10ea2863db7d49c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "accb033be8e90d92f3237b6e8539c246"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a67ab54ab39fbc03c08885f817079bd3"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4843a0798a30b4826f52f029ae0c0c1e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "424e2db324cf4a9d05ab98c6c5ca3423"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ea7f82043536bde936030b7779997c59"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f4210bf28ae96ba6149b8c2b87cc6030"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3dff9cb06d419e2dbaad3917f6f00cc7"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "64676b3787cbbabd47f44dcbf8643742"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "98ecf9db9be6a64d1590447b42267d04"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "de2f31f34e3ff521af1053fd572de34f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ac811fd0fb1871a4ac3853217f0cc8bd"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3d4e9af00936eaf6de56a3cb45fe016c"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0b3e62d3a53f40f7d0357fe55c523f16"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0ed4512f9fb97f1f29b52a12f4636254"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ac55e8c7e9a09f6d2e439060843ca16c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d652187605c6198262fa1d78ddec831d"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8fcdfa3e3d42bd09935380bf2b12cd20"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8681f29fb6994a2779c88f3efaeb6cae"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "75e69915c085dbc26a904ba449f3e088"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "4530b8bcace1fc680f1878393530e0fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "a452ec4484e7e38ccf3949bb6b01c452"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9b9f879acabd0499bc3b34d78116a8de"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a90ffb2adced9239484d364f2aa62991"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "177230a8302c32ed8c16aa7bfcfde38c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "d2ae022c9c785096f76a55e345f57dcd"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d38f673c2258170126981878103c023d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a96b707b60f5b82219a7d42ed008d5a0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "777a34d1fea28c2fdf26ce0b3b61c095"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5b8a9c9d8d38eb278f257d4a831fb357"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ce5be0a0b5b66fb2b29ae80140e172f7"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "6dac33391338a6b325d2c2a61f3b00d2"
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
