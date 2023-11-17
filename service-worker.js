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
    "revision": "d0cc70c5e00743f9b1f48a79630dd664"
  },
  {
    "url": "about/app/index.html",
    "revision": "f33687dfbebf9ed46bd9907050d54640"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3172cb257f5730d9d04b4cae6b29bb6a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7e0647dd647c6a57f53113c2a9d4c389"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "66a06b8a8cfa988504421d65a85413b4"
  },
  {
    "url": "about/index/index.html",
    "revision": "13696f532d017a2592f2827da5869d7d"
  },
  {
    "url": "ai/index.html",
    "revision": "69fd1994b670356122711578b3a67985"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a5aec0b157e151ce4ccde7fca76ed993"
  },
  {
    "url": "assets/css/0.styles.52897987.css",
    "revision": "4dfbe691fe12515b916bf86d16453d60"
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
    "url": "assets/js/1.03849e3b.js",
    "revision": "d6e0253421131044ddd9fd19fb5de6d1"
  },
  {
    "url": "assets/js/10.04c3e2b9.js",
    "revision": "407ae0bc7e70685997aca8a1e26145db"
  },
  {
    "url": "assets/js/100.72ab74a3.js",
    "revision": "e947fbde7b60205449e79007eccd36d3"
  },
  {
    "url": "assets/js/101.6e1d97f6.js",
    "revision": "85ad6aa0fde004b0c65ab018d08c1ea5"
  },
  {
    "url": "assets/js/102.b16ae2ca.js",
    "revision": "517ec77c2eb61fe15730496b663e055a"
  },
  {
    "url": "assets/js/103.376717cb.js",
    "revision": "80103e3a4f7192af3a5bd3fb3701f110"
  },
  {
    "url": "assets/js/104.b83ea381.js",
    "revision": "65b069ae252ea407ef34733a8564b002"
  },
  {
    "url": "assets/js/105.394df58d.js",
    "revision": "871b50841ff94a799cb4c386437f9b23"
  },
  {
    "url": "assets/js/106.a9d302d9.js",
    "revision": "b70e7af97501ae2486d23780b94abf73"
  },
  {
    "url": "assets/js/107.f5dbdb5a.js",
    "revision": "82643a2f6ddd9d85fdf568024df470f4"
  },
  {
    "url": "assets/js/108.ae6134c4.js",
    "revision": "ab7272b25116857340f66a4e61fb509e"
  },
  {
    "url": "assets/js/109.620da30a.js",
    "revision": "978b41f01b7da45c4582b72fa92c7521"
  },
  {
    "url": "assets/js/11.2fc10662.js",
    "revision": "c13682ae075f9bba421c9edc3dc8312a"
  },
  {
    "url": "assets/js/110.0de5d473.js",
    "revision": "973ae07e12d38f7b7618913104556c23"
  },
  {
    "url": "assets/js/111.cc03ddf9.js",
    "revision": "be3b21bd4a3ca6a044e8c2d66a6d443f"
  },
  {
    "url": "assets/js/112.a7277b7e.js",
    "revision": "116f473ecb0b3699ced1579baa35d147"
  },
  {
    "url": "assets/js/113.cfbbe10b.js",
    "revision": "f51af6d232a758a081eb00eef799030b"
  },
  {
    "url": "assets/js/114.9dd8c73a.js",
    "revision": "27e4643226fe32a9c39f80be0926ae49"
  },
  {
    "url": "assets/js/115.6a44abe0.js",
    "revision": "dd7f6be84cc7d1ba2a5fef4d68e5dd79"
  },
  {
    "url": "assets/js/116.26aa8930.js",
    "revision": "19b4496c67fa773ce78d95f4a12b21a2"
  },
  {
    "url": "assets/js/117.7ca10faf.js",
    "revision": "757fd1c1018958aa86780a2bbf16bd3e"
  },
  {
    "url": "assets/js/118.01d17f19.js",
    "revision": "6177835e8ee2d71c9396a8ed512d51f4"
  },
  {
    "url": "assets/js/119.c6d350ce.js",
    "revision": "ffc278f80d2b093a536ecd4dbd40562f"
  },
  {
    "url": "assets/js/12.0b48fd98.js",
    "revision": "b4eef22d6ced6807e66d6bb4bc9ef0e3"
  },
  {
    "url": "assets/js/120.2e6b6a09.js",
    "revision": "2693b215624ac04dde69907b333ff7aa"
  },
  {
    "url": "assets/js/121.f2825d6e.js",
    "revision": "a676333a98eb9e4f2d1b5fc1e5453a6a"
  },
  {
    "url": "assets/js/122.1bf59d4f.js",
    "revision": "941100546d73ae6d4eeae9884e83fc50"
  },
  {
    "url": "assets/js/123.e2f5ddd0.js",
    "revision": "39309886ca13dc8746b75ee09788ae66"
  },
  {
    "url": "assets/js/124.f716c518.js",
    "revision": "dbfe5bd423ee022a5703cd6548c3e1d1"
  },
  {
    "url": "assets/js/125.661866a2.js",
    "revision": "19055502ab0e4fe1c59efcf47b062af1"
  },
  {
    "url": "assets/js/126.037376ec.js",
    "revision": "aa4672493d572a6b45163d884cd5fdb1"
  },
  {
    "url": "assets/js/127.c949a443.js",
    "revision": "95ad584f707c16b8aa09cb75a1a207c2"
  },
  {
    "url": "assets/js/128.b96caeec.js",
    "revision": "219d40f19fdd5a14809cac75b999e8f6"
  },
  {
    "url": "assets/js/129.6430cef9.js",
    "revision": "80671bca421392fbe263473d33327efd"
  },
  {
    "url": "assets/js/13.3ed8f453.js",
    "revision": "0a5b3777f6f232d1fcdff5027dc81004"
  },
  {
    "url": "assets/js/130.2deb0d9e.js",
    "revision": "3f3c4bf94c5eac0aa8e1e5ef1de30d30"
  },
  {
    "url": "assets/js/131.97b3e284.js",
    "revision": "058e39eb78fbbfb6c1256373c02c2772"
  },
  {
    "url": "assets/js/132.e53afb64.js",
    "revision": "4938bd69117700d6185d61257ee9982e"
  },
  {
    "url": "assets/js/133.b510201d.js",
    "revision": "c0a92f0cd10f666c91256523582a965f"
  },
  {
    "url": "assets/js/134.2f6ac257.js",
    "revision": "05b201554e79ce953722f886516b621b"
  },
  {
    "url": "assets/js/135.88f21727.js",
    "revision": "ca6b4c17ebe496a3c3a7891940e22dc6"
  },
  {
    "url": "assets/js/136.0f478024.js",
    "revision": "8027ea26542c93c7afdca21939fa0a0e"
  },
  {
    "url": "assets/js/137.fb449e5e.js",
    "revision": "99636c56fabd23d73014843520b6dcaa"
  },
  {
    "url": "assets/js/138.968bcff5.js",
    "revision": "bccf1bc65f385c38f9a8babb3be8ce6a"
  },
  {
    "url": "assets/js/139.da4eb9e4.js",
    "revision": "09e2689dc19cab046c37b8e50bc46b36"
  },
  {
    "url": "assets/js/14.9e477e6b.js",
    "revision": "9cbcbe2c965b316403693fb5de1e9d70"
  },
  {
    "url": "assets/js/140.5bcf2fd9.js",
    "revision": "c450635c3945406877c6e94cd412f4c3"
  },
  {
    "url": "assets/js/141.fd0e3c51.js",
    "revision": "10d3645a2809e7fab1a14094a9824f39"
  },
  {
    "url": "assets/js/142.0a7f4162.js",
    "revision": "de02318d5dbf843d87c641c8d1866fd1"
  },
  {
    "url": "assets/js/143.1841cbb1.js",
    "revision": "89643acc97292006c502bf68384f6a2c"
  },
  {
    "url": "assets/js/144.1b5a6bec.js",
    "revision": "237aaea721e460f67e2a0ef1aadabdb6"
  },
  {
    "url": "assets/js/145.7fe48512.js",
    "revision": "a0e62716d5a7e114c675712002d31dc4"
  },
  {
    "url": "assets/js/146.a73dfd0b.js",
    "revision": "ae7d320bed1fee078da6efba4f27ba4a"
  },
  {
    "url": "assets/js/147.842f74c2.js",
    "revision": "4fde20a5396cc6750fef470786a29024"
  },
  {
    "url": "assets/js/148.07cdbbb3.js",
    "revision": "3a0a9dc6fa81eaa5c5f0e2ab88982934"
  },
  {
    "url": "assets/js/149.540b40da.js",
    "revision": "777b3436eb3186e51c7f351602576b00"
  },
  {
    "url": "assets/js/15.a342b896.js",
    "revision": "0c21c202032c50db0573373398f0e5e2"
  },
  {
    "url": "assets/js/150.9ef3c000.js",
    "revision": "5199cd92064e808558bdd3fa18c58da8"
  },
  {
    "url": "assets/js/151.df98f115.js",
    "revision": "95375f21ba052d264561cba57e2d7354"
  },
  {
    "url": "assets/js/152.cfd29c27.js",
    "revision": "bdd80f07bdf4072b8934bcab0e81305e"
  },
  {
    "url": "assets/js/153.b92a4fbd.js",
    "revision": "09be08f88634e037bfd07cca0d259600"
  },
  {
    "url": "assets/js/154.43e89b48.js",
    "revision": "65582857180ac98fdc3138b1639d289f"
  },
  {
    "url": "assets/js/155.5dca9fcc.js",
    "revision": "e1c7464681afea00a853fc5d9f95cbaa"
  },
  {
    "url": "assets/js/156.f7c77910.js",
    "revision": "c070775352b1191ef5558cc65bc1fb84"
  },
  {
    "url": "assets/js/157.a5c3e4f3.js",
    "revision": "b75cff18904f65baf05b2dadf22d3abb"
  },
  {
    "url": "assets/js/158.99869d78.js",
    "revision": "84b070605eab1d6190b94d3b698a6d10"
  },
  {
    "url": "assets/js/159.d9117d76.js",
    "revision": "3282c22b4d3d10c43c8045808ff29d2a"
  },
  {
    "url": "assets/js/16.c1815a9f.js",
    "revision": "d2a05c03fabb66edefbffcf40efdc18e"
  },
  {
    "url": "assets/js/160.b311fbc3.js",
    "revision": "bd7168ca33aef62e17a913022193bcd4"
  },
  {
    "url": "assets/js/161.2fddea1e.js",
    "revision": "a63a66ae4a92c0cbb4a184f2d053382e"
  },
  {
    "url": "assets/js/162.857af697.js",
    "revision": "fc7a5099914ab6b8033fffd7ea1da28b"
  },
  {
    "url": "assets/js/163.7e4ca0c5.js",
    "revision": "d7231f011810c3acd642cc99d96e6c43"
  },
  {
    "url": "assets/js/164.251ab8a4.js",
    "revision": "38272fd6d8963761dba33c96c350e167"
  },
  {
    "url": "assets/js/165.cf5e1476.js",
    "revision": "6ef095cff8a7042f374d3c640c757f9a"
  },
  {
    "url": "assets/js/166.6302ee01.js",
    "revision": "a1eb83974b44d1939a5670aa8f10fa5f"
  },
  {
    "url": "assets/js/167.a2cdc896.js",
    "revision": "d3113c69f3f3c111a945523520d766af"
  },
  {
    "url": "assets/js/168.cc5970a1.js",
    "revision": "73fb052f21d42ca523e229b13d868b8a"
  },
  {
    "url": "assets/js/169.7503fc1c.js",
    "revision": "7914fd26294e7b81371da76d042d575f"
  },
  {
    "url": "assets/js/17.52ae4edd.js",
    "revision": "6dd6eb943cc0c849ce36f4a585b7e366"
  },
  {
    "url": "assets/js/170.9cd04942.js",
    "revision": "db518133c3459e90e16e4fa72e44463c"
  },
  {
    "url": "assets/js/171.7e698afe.js",
    "revision": "4d87de9c2df8bf45fdcfe695376b8003"
  },
  {
    "url": "assets/js/172.d84a5c9a.js",
    "revision": "15475805bd16c269303c2e69914b16f3"
  },
  {
    "url": "assets/js/173.c13bc2ff.js",
    "revision": "3edde89da3907414cc3355eb32da6552"
  },
  {
    "url": "assets/js/174.18ecbc25.js",
    "revision": "4a05a7eb88b226a82897d47cb21e13ee"
  },
  {
    "url": "assets/js/175.ab5bd7d3.js",
    "revision": "92fbaf8ba49939c13e361d97409b2110"
  },
  {
    "url": "assets/js/176.7816700b.js",
    "revision": "0c1e3d9334b84e5e2e65e2b5fe521fc3"
  },
  {
    "url": "assets/js/177.40347577.js",
    "revision": "9e338421a91404ae1dfbde9ed00791d8"
  },
  {
    "url": "assets/js/178.7be8326c.js",
    "revision": "e52e58a8dc79cb744570065f10095169"
  },
  {
    "url": "assets/js/179.34d267a5.js",
    "revision": "efc4bd3119672ffc6d49edfb981eba28"
  },
  {
    "url": "assets/js/18.0e9cc935.js",
    "revision": "64c21d356c417e769abfb868f87689d8"
  },
  {
    "url": "assets/js/180.d202f0e2.js",
    "revision": "8d5f049dfc8f32e739e4cdd25f8a8433"
  },
  {
    "url": "assets/js/181.bbfe6dce.js",
    "revision": "d56a8e0390b92a45e890489299f3f11a"
  },
  {
    "url": "assets/js/182.3f103c8c.js",
    "revision": "2def0b8f2ca80b89177d91a191bd8d45"
  },
  {
    "url": "assets/js/183.b944dc3e.js",
    "revision": "c075c2f15316d8b83a655f07a0e8d2f6"
  },
  {
    "url": "assets/js/184.6adeb409.js",
    "revision": "d34dbc682cdbd14c88d9353f8c434276"
  },
  {
    "url": "assets/js/185.eba4885f.js",
    "revision": "ac45cae5260e3ade233dcd1210a697da"
  },
  {
    "url": "assets/js/186.7372d7e4.js",
    "revision": "7df731c9cb90eb2f259541dc228e9233"
  },
  {
    "url": "assets/js/187.cc13f194.js",
    "revision": "6e08d8e547ab9b90cb9c03d9842c675a"
  },
  {
    "url": "assets/js/188.66dd0b1b.js",
    "revision": "c35fa5537b90541055a466a5c1c35f59"
  },
  {
    "url": "assets/js/189.9666ec88.js",
    "revision": "0f623c641ea2adaf980a273d253e44cb"
  },
  {
    "url": "assets/js/19.dd180768.js",
    "revision": "034879c4c33ef30d056ba240f30b9c86"
  },
  {
    "url": "assets/js/190.ee78bbdc.js",
    "revision": "a1f062c8e905cf25b25e3307afd179e2"
  },
  {
    "url": "assets/js/191.e9c220da.js",
    "revision": "fddfb2892f141c38841bae8701b81cde"
  },
  {
    "url": "assets/js/192.c5c093b6.js",
    "revision": "0e8f4e3000bfae5801472021ce80b617"
  },
  {
    "url": "assets/js/193.0c2cf44c.js",
    "revision": "f9eaa7c2f4b361a01959e165eb0a127f"
  },
  {
    "url": "assets/js/194.85a4858c.js",
    "revision": "4067e80d3a7fafa5c9c935e72e993f1c"
  },
  {
    "url": "assets/js/195.ad6b4ef1.js",
    "revision": "1ef2a7f775382f3ce70e388f68826d1d"
  },
  {
    "url": "assets/js/196.c59d7c40.js",
    "revision": "6ac7bbbdf754932c3ef2ee3db3de85a2"
  },
  {
    "url": "assets/js/197.34f95c13.js",
    "revision": "685811d99d434b9ffa75a03d39edabcc"
  },
  {
    "url": "assets/js/198.9aa970d5.js",
    "revision": "60118f3f8f5c9ff6d0c69122ab3a2efa"
  },
  {
    "url": "assets/js/199.c161b97c.js",
    "revision": "da0382befac5be9b7c907d2836c964eb"
  },
  {
    "url": "assets/js/20.3c8a96d9.js",
    "revision": "49a2d26bb69e936d2888b463d5e7af82"
  },
  {
    "url": "assets/js/200.0ad46196.js",
    "revision": "5dfa20c5307c50bc5d9b207a6d47bb22"
  },
  {
    "url": "assets/js/201.a45d4bf9.js",
    "revision": "c2c27adaaf1a39297c5e15916b9a9a11"
  },
  {
    "url": "assets/js/202.a666a208.js",
    "revision": "f5b2aa9cc55a020dd367d9a98596bb96"
  },
  {
    "url": "assets/js/203.f009e510.js",
    "revision": "e89028e63370111b30bb78f1fda1bb23"
  },
  {
    "url": "assets/js/204.b75331d9.js",
    "revision": "e35c80df556a33f5eb799dd2ca341f88"
  },
  {
    "url": "assets/js/205.b0c5fdaa.js",
    "revision": "cc511d93c945eb58b66616275ce2538d"
  },
  {
    "url": "assets/js/206.da50aa9e.js",
    "revision": "bb850a5d50d11b37819f36dbd25b0eea"
  },
  {
    "url": "assets/js/207.56398202.js",
    "revision": "ae0b111689c654e852ecdf3a1b5ecb82"
  },
  {
    "url": "assets/js/208.b0813b2b.js",
    "revision": "67ba4f5f0b46ae269c0f6532aa6f56e2"
  },
  {
    "url": "assets/js/209.69ba4c8e.js",
    "revision": "2d060d120387381178589c3a6b2cd22b"
  },
  {
    "url": "assets/js/21.220ab70f.js",
    "revision": "1373e586610408f39ab8c574b1046d40"
  },
  {
    "url": "assets/js/210.3bc3fca1.js",
    "revision": "34807c1c351734ad9d52a0031cd6ac2e"
  },
  {
    "url": "assets/js/211.3503716e.js",
    "revision": "a4b48f269ed9a0fc3361bb2af3f9f735"
  },
  {
    "url": "assets/js/212.6a952905.js",
    "revision": "aa495dd6d25262767b36f87b51ad98b7"
  },
  {
    "url": "assets/js/213.ea6ff6ef.js",
    "revision": "d8d885e14bfbf85aa613a63e8c9ce7be"
  },
  {
    "url": "assets/js/214.9f7b64d5.js",
    "revision": "35c37a44b3650d4b163aa8035fafc3be"
  },
  {
    "url": "assets/js/215.206b05ab.js",
    "revision": "cedc0aa2183cb37a8c3146c3af2a7f76"
  },
  {
    "url": "assets/js/216.0920d010.js",
    "revision": "8978cf183dbc39a0c4855c78052d19e2"
  },
  {
    "url": "assets/js/217.07b2787d.js",
    "revision": "7c09bfe417d58a20a45e9b9bb0a7826f"
  },
  {
    "url": "assets/js/218.1af60b81.js",
    "revision": "1bb27cad213da693020a33f6df08e8cf"
  },
  {
    "url": "assets/js/219.1d019079.js",
    "revision": "4e9440365af3bb51246bd79fc4d86747"
  },
  {
    "url": "assets/js/22.a60ffa29.js",
    "revision": "b282c57e5ab291e4927c1a74da0f6fd1"
  },
  {
    "url": "assets/js/220.fafca395.js",
    "revision": "e9a8bc73f12ed4e997522ab977a5db64"
  },
  {
    "url": "assets/js/221.8173d48f.js",
    "revision": "fb9510cac2705e330773d9b3a8f59fc3"
  },
  {
    "url": "assets/js/222.0991e6e2.js",
    "revision": "492a0a7107cd5ca14b4230d52e2d5dc5"
  },
  {
    "url": "assets/js/223.4c860c1a.js",
    "revision": "e9c1dedbcf48509895dd20ac0c561242"
  },
  {
    "url": "assets/js/224.1d3568ea.js",
    "revision": "a655cec26ab6f322451004ea3d1b1b15"
  },
  {
    "url": "assets/js/225.30c2850f.js",
    "revision": "7d82d9bb4f45c3b920d2281b22d10302"
  },
  {
    "url": "assets/js/226.a7c1e3df.js",
    "revision": "ca76160980a318d848f82b0b88bc6925"
  },
  {
    "url": "assets/js/227.f9c009a7.js",
    "revision": "7bc8601d400f1008d8e9a4da05d7ad50"
  },
  {
    "url": "assets/js/228.bc8bbce5.js",
    "revision": "e9e3a0bd4a23db17e8ba0e2ec431ae35"
  },
  {
    "url": "assets/js/229.ab99a38d.js",
    "revision": "b97b5f1634bbc3cd85a8c645190dd7ee"
  },
  {
    "url": "assets/js/23.c0389be0.js",
    "revision": "2e70fd7dc508315c05c263b94fc017a8"
  },
  {
    "url": "assets/js/230.fcda137a.js",
    "revision": "25ffc3e7d96983c0a18435cbba0cd01c"
  },
  {
    "url": "assets/js/231.fc47e10d.js",
    "revision": "e293c13d957f7b40ef3949576b1490ba"
  },
  {
    "url": "assets/js/232.db363ac3.js",
    "revision": "3a2ee39a5280af1c37d45a8582a55f19"
  },
  {
    "url": "assets/js/233.0633ad48.js",
    "revision": "ece2408ec558db792fa069d5299d82a7"
  },
  {
    "url": "assets/js/234.b9cdb94c.js",
    "revision": "cc905944d80e7f01b2bca969f335c4fd"
  },
  {
    "url": "assets/js/235.d92a2780.js",
    "revision": "75c3751c484817ecc487e1a3f9e51950"
  },
  {
    "url": "assets/js/236.83bbe40b.js",
    "revision": "7742efd803117ce6ae0437dfa07694f5"
  },
  {
    "url": "assets/js/237.dd08647a.js",
    "revision": "05ab831cd3d1753a75e6543c02092fff"
  },
  {
    "url": "assets/js/238.eeca95e8.js",
    "revision": "71ca93ccb91a12d74c96f956eadde3e2"
  },
  {
    "url": "assets/js/239.692c0675.js",
    "revision": "7683bc584f165b2c12b8dba96ec7d595"
  },
  {
    "url": "assets/js/24.ad8fc117.js",
    "revision": "07993bf7bf9f4947029d1d78437b7d87"
  },
  {
    "url": "assets/js/240.6b9be32d.js",
    "revision": "1d31021404b6c586ded6e18b5e315282"
  },
  {
    "url": "assets/js/241.8f576efa.js",
    "revision": "65a3c26caf62a125179193cdcc999b38"
  },
  {
    "url": "assets/js/242.d90bc826.js",
    "revision": "fcde262bc5cc70c03dd1c5fdaa2e369e"
  },
  {
    "url": "assets/js/243.88735324.js",
    "revision": "ef991adf49c152913748052055961f91"
  },
  {
    "url": "assets/js/244.e316780d.js",
    "revision": "0f7ca7a20db9d53683492ad8869c0fc5"
  },
  {
    "url": "assets/js/245.aebfc870.js",
    "revision": "8f4236454f51fe08692c4628534c8710"
  },
  {
    "url": "assets/js/246.23d12c34.js",
    "revision": "7b9106bb5be18eca6a1827135ecee6e1"
  },
  {
    "url": "assets/js/247.60f47975.js",
    "revision": "99b33b003a291d119b62b3a96e34a4f3"
  },
  {
    "url": "assets/js/248.d4b464fe.js",
    "revision": "3bc64c728d342e4c17ba271495e555f9"
  },
  {
    "url": "assets/js/249.7d5dd835.js",
    "revision": "906c4ee0bc64c7a48b532008c518405c"
  },
  {
    "url": "assets/js/25.a330b5aa.js",
    "revision": "046bd591cefeb9ee2c972de4309995db"
  },
  {
    "url": "assets/js/250.55539468.js",
    "revision": "50a45b92fa739b898dd5bdbb297b0445"
  },
  {
    "url": "assets/js/251.925d9602.js",
    "revision": "264b6bac9df2ce02a138fb3d2fd24501"
  },
  {
    "url": "assets/js/252.f315514d.js",
    "revision": "4eeb47ae218f888adc7aa96e2c217c7a"
  },
  {
    "url": "assets/js/253.7a23443d.js",
    "revision": "7a3e52f94b510ec8f2cb6af82b3b12ba"
  },
  {
    "url": "assets/js/254.d526c1ed.js",
    "revision": "9484306403bb15daf90b2c385ccd5798"
  },
  {
    "url": "assets/js/255.807bbc47.js",
    "revision": "fad0ed36d41efaff19a4368a72ecbb5a"
  },
  {
    "url": "assets/js/256.81a5cb3d.js",
    "revision": "d74fda7bb903cd4f2c26c2b06e8a38ec"
  },
  {
    "url": "assets/js/257.e7d878c7.js",
    "revision": "7cf46798fc9944441b8aafc1736299de"
  },
  {
    "url": "assets/js/258.5370402d.js",
    "revision": "b81fce1d29d58f9842be13faeae678fe"
  },
  {
    "url": "assets/js/259.37eed719.js",
    "revision": "bcb0b0195d6080522f66172233715307"
  },
  {
    "url": "assets/js/26.5ed9774c.js",
    "revision": "dd81b4279aa7ac38fdf3d4e4e607a148"
  },
  {
    "url": "assets/js/260.96e22934.js",
    "revision": "75965032260cee7b55f688b2719f5aff"
  },
  {
    "url": "assets/js/261.2eda39d0.js",
    "revision": "d9bac01e545deb2cd85653d011820e3c"
  },
  {
    "url": "assets/js/262.8b0c44cd.js",
    "revision": "235e454921d6d85013fc5b18979a5d42"
  },
  {
    "url": "assets/js/263.c9b201e9.js",
    "revision": "e31266cabd5f183ca6d6e0ada7acb8e3"
  },
  {
    "url": "assets/js/264.932d75b5.js",
    "revision": "aab91422b644be047a5b412785bf3e05"
  },
  {
    "url": "assets/js/265.8af87d22.js",
    "revision": "eee7062a0dbc5b4ffea5e510f7bef70c"
  },
  {
    "url": "assets/js/266.26279b55.js",
    "revision": "4adb4df14e0210c3f88e8768f3f93bbd"
  },
  {
    "url": "assets/js/267.24473c0c.js",
    "revision": "65e6397380268f16175a257890ec05dd"
  },
  {
    "url": "assets/js/268.57d048c9.js",
    "revision": "da800ba5cea8bf0facd436fb9c7a6828"
  },
  {
    "url": "assets/js/269.6fa21d7f.js",
    "revision": "8f4852adfcd6f9e4896eaa11e9bd3b12"
  },
  {
    "url": "assets/js/27.14affd52.js",
    "revision": "ea86e0bc1b5b590c92f24541b9dbe72f"
  },
  {
    "url": "assets/js/270.c42db2ff.js",
    "revision": "26af6d06ecb8942296eb84b0c5c05837"
  },
  {
    "url": "assets/js/271.46d67b48.js",
    "revision": "f551405c2d72d50fccdecbce2f211f64"
  },
  {
    "url": "assets/js/272.63c86190.js",
    "revision": "132ab4277c35850eab2f3482bcaf4357"
  },
  {
    "url": "assets/js/273.4f72e71f.js",
    "revision": "d7d89b08c2d9d7e95aee205992f0a37d"
  },
  {
    "url": "assets/js/274.0cc876cf.js",
    "revision": "a83e603d04a76cbdb4205ce68a714bbb"
  },
  {
    "url": "assets/js/275.84667e5b.js",
    "revision": "0ffcfc99e27c6699d5158994aa9068a1"
  },
  {
    "url": "assets/js/276.e6856f61.js",
    "revision": "e535063da74d9d743ee51f2f856ab42e"
  },
  {
    "url": "assets/js/277.8fda0be4.js",
    "revision": "9b3ad15a9b9175451a07fd0d3bb5e017"
  },
  {
    "url": "assets/js/278.cbda1b0a.js",
    "revision": "dab10343713af737378f72e427cb98b0"
  },
  {
    "url": "assets/js/279.ebe7127c.js",
    "revision": "3cdabfe06468dcebafeb0f4d01bfb54c"
  },
  {
    "url": "assets/js/28.aeb6a4c7.js",
    "revision": "1e95e511200b19002bb638583cd17adc"
  },
  {
    "url": "assets/js/280.e5ed2805.js",
    "revision": "7a2bbdee889ee142fa2f173f55b12f47"
  },
  {
    "url": "assets/js/281.83a97d46.js",
    "revision": "96d65ded3d51967c225a5a076b30e651"
  },
  {
    "url": "assets/js/282.ca6328c8.js",
    "revision": "c3ad3afb13080b2c39cacdcff90b9005"
  },
  {
    "url": "assets/js/283.45f531c4.js",
    "revision": "4bae69d16dfffb5bc3ad7817e2aa2cfb"
  },
  {
    "url": "assets/js/284.79c2e00b.js",
    "revision": "53a157aed1223582d965ee680dfadd05"
  },
  {
    "url": "assets/js/285.809ab993.js",
    "revision": "3d5825c1173c1ae57ae2049373916c03"
  },
  {
    "url": "assets/js/286.e6b681ea.js",
    "revision": "11c78697a27ebf9a1ee72d8175d266f4"
  },
  {
    "url": "assets/js/287.8ce77b8f.js",
    "revision": "ee341f6301b752ee23c243d13b6d06a5"
  },
  {
    "url": "assets/js/288.acaef1f2.js",
    "revision": "38f2051ce1ccb41d42b04771088f2600"
  },
  {
    "url": "assets/js/289.5f67ee09.js",
    "revision": "b79e468e114a4ab9587f11a882d845b9"
  },
  {
    "url": "assets/js/29.0eedac0c.js",
    "revision": "4cc547920791a013d286b524baa5dc7c"
  },
  {
    "url": "assets/js/290.77c587c2.js",
    "revision": "7d3d2bd4d7848b9be23d6bfdbb11fcf0"
  },
  {
    "url": "assets/js/291.051f3e55.js",
    "revision": "f39a42eee484270d49511e2612251dff"
  },
  {
    "url": "assets/js/30.c2529d4b.js",
    "revision": "4c34b17b27270ba1486cd4065b11620b"
  },
  {
    "url": "assets/js/31.422d5e66.js",
    "revision": "604ff7415f793bc925ea6095395a82a4"
  },
  {
    "url": "assets/js/32.b7207cd6.js",
    "revision": "46450687dfedda14f020e8772611322a"
  },
  {
    "url": "assets/js/33.c48cafb8.js",
    "revision": "b8bb2a0cc8c9709bd38690cd650a13ed"
  },
  {
    "url": "assets/js/34.5eda02da.js",
    "revision": "b5af7e45646ae1b05bf716c4a85ed4b9"
  },
  {
    "url": "assets/js/35.b02c8e4b.js",
    "revision": "fce97ad29f0d750ed65a1224f81a4b23"
  },
  {
    "url": "assets/js/36.19ae3871.js",
    "revision": "30cee5270ce49293379ee419ceeb2c46"
  },
  {
    "url": "assets/js/37.fb2625ed.js",
    "revision": "ef9823df167228365c33a39efe80b943"
  },
  {
    "url": "assets/js/38.5acddf80.js",
    "revision": "3fe2d383c55c050ed2c44f1fc14d7569"
  },
  {
    "url": "assets/js/39.5e0a5e62.js",
    "revision": "f7b43f96cd85846b09542f83904be41c"
  },
  {
    "url": "assets/js/4.4d9a412b.js",
    "revision": "b836d39500214782bf48832d97aa7f8e"
  },
  {
    "url": "assets/js/40.4e84b277.js",
    "revision": "80e5225429f02fa8cd8017a254670b93"
  },
  {
    "url": "assets/js/41.8ad00fd8.js",
    "revision": "34a21cac1dcbcae7bbe5b4fb4561316f"
  },
  {
    "url": "assets/js/42.f3d802c5.js",
    "revision": "247aef21ad98230f06a593de11401e08"
  },
  {
    "url": "assets/js/43.3cc6a942.js",
    "revision": "84a4adf214907181b98ae50d1d6a9d64"
  },
  {
    "url": "assets/js/44.cb34ced1.js",
    "revision": "18c5bbf639c8193ce03e189d033f8304"
  },
  {
    "url": "assets/js/45.fe7e1025.js",
    "revision": "f10d779be4fb2941905566b34c3014ff"
  },
  {
    "url": "assets/js/46.c691a053.js",
    "revision": "e4b7c8ffb04b8b24ef0b401137e319da"
  },
  {
    "url": "assets/js/47.9df3008f.js",
    "revision": "79a6186cc6483672cecf90150d621785"
  },
  {
    "url": "assets/js/48.d9fe95f5.js",
    "revision": "104828ec66400aec346f637a7f4e270d"
  },
  {
    "url": "assets/js/49.e124ecab.js",
    "revision": "36dc350b0042b947c7c8a6c4ef12d92f"
  },
  {
    "url": "assets/js/5.43c3f80b.js",
    "revision": "622d4a544f4132c9b6afea6c56da577c"
  },
  {
    "url": "assets/js/50.45b4831b.js",
    "revision": "2383fe209c50e91827e29f197257e8a9"
  },
  {
    "url": "assets/js/51.a1f53f39.js",
    "revision": "08e25107a1d715392158a1a389166a09"
  },
  {
    "url": "assets/js/52.43acfba8.js",
    "revision": "973c573681155074f5fd6e4cf6c17ba7"
  },
  {
    "url": "assets/js/53.4f0aee69.js",
    "revision": "3e65b5e1ce511a32f28413e6cea3e841"
  },
  {
    "url": "assets/js/54.0f77734c.js",
    "revision": "5ec8d7ea141dab5c113495f22fc9bfe0"
  },
  {
    "url": "assets/js/55.020b5013.js",
    "revision": "52f34f5bf135fdf552223e3d3dfe1f79"
  },
  {
    "url": "assets/js/56.9aa690b7.js",
    "revision": "a67f5a0988e07cc4bd77e8800a1ba743"
  },
  {
    "url": "assets/js/57.71f81096.js",
    "revision": "0a997d4f5ed215c077f10e13ef452912"
  },
  {
    "url": "assets/js/58.500a39da.js",
    "revision": "35a98586005cd67066eead08f44c96b0"
  },
  {
    "url": "assets/js/59.dd96c0cd.js",
    "revision": "241c5218b4c89ab084f31c6aad14aa86"
  },
  {
    "url": "assets/js/6.e059304d.js",
    "revision": "714339683f474290ac4b1b9b4bde291f"
  },
  {
    "url": "assets/js/60.05bb68b7.js",
    "revision": "7ff330355a7ce4a90cd18657b5676c1b"
  },
  {
    "url": "assets/js/61.ded608a8.js",
    "revision": "adb951161da7fde1b488a2a5813fadc6"
  },
  {
    "url": "assets/js/62.596b41b9.js",
    "revision": "cafee2f6e299bb85cf34b843fb4eddd1"
  },
  {
    "url": "assets/js/63.eae9d180.js",
    "revision": "0a8a1e555542bfca46b6de57cfa4ea14"
  },
  {
    "url": "assets/js/64.0e8e9f81.js",
    "revision": "9f6550e5f22abc5542fbb568fca9653a"
  },
  {
    "url": "assets/js/65.14c808a7.js",
    "revision": "3047cdb9d646fe4db943db48ecd5b95d"
  },
  {
    "url": "assets/js/66.56355a72.js",
    "revision": "7e25eee79c0d69c32bace0c870f8ab91"
  },
  {
    "url": "assets/js/67.eb5b6cbe.js",
    "revision": "45bfc04ae1c2b2925776820ad1882ff3"
  },
  {
    "url": "assets/js/68.6b4e8cd0.js",
    "revision": "7bb7fc1903767056cc06c0c2dccb16b7"
  },
  {
    "url": "assets/js/69.bfeee975.js",
    "revision": "dd208571ec64a4783dcb973161e7446a"
  },
  {
    "url": "assets/js/7.9d03ddec.js",
    "revision": "84a7d7b09c3ec4699fb8b0df6ab68757"
  },
  {
    "url": "assets/js/70.f0e3b679.js",
    "revision": "6d6fde3e4573a52cb9c74f0d3eea003a"
  },
  {
    "url": "assets/js/71.e9702cf5.js",
    "revision": "555d212a1483759d05bc99cbcc82fcd1"
  },
  {
    "url": "assets/js/72.8e43c2e1.js",
    "revision": "795084eb0bf1fdcae9b3c5011cc227d4"
  },
  {
    "url": "assets/js/73.33db7513.js",
    "revision": "963d7fe14da985a8343e648bacbf80cf"
  },
  {
    "url": "assets/js/74.bed4e7b6.js",
    "revision": "2ad7e59eb7a6b232494e092a11515b89"
  },
  {
    "url": "assets/js/75.191224ce.js",
    "revision": "680d190565838c81c53993ab39c604df"
  },
  {
    "url": "assets/js/76.3d36c35b.js",
    "revision": "38b44d0b02822d2c37ed80b2e36f7b37"
  },
  {
    "url": "assets/js/77.76e751c5.js",
    "revision": "a55c7d96d52af7d2d473ef21916e6e3e"
  },
  {
    "url": "assets/js/78.c21b3865.js",
    "revision": "722f58e7c8156315934ed70aa932376b"
  },
  {
    "url": "assets/js/79.e080c26e.js",
    "revision": "3db8a7ddde6de17080747712e29141fa"
  },
  {
    "url": "assets/js/8.9784c77d.js",
    "revision": "9fe24dee605c863d68d564d047023e54"
  },
  {
    "url": "assets/js/80.28395d07.js",
    "revision": "d1c52f718fa1dbf3310d4cfd0cc21e99"
  },
  {
    "url": "assets/js/81.8d42c096.js",
    "revision": "238db2708e32fa6514e9940ccba7fb2a"
  },
  {
    "url": "assets/js/82.7c2e001b.js",
    "revision": "23e7b3fbb82a87b868c434e762c7d85d"
  },
  {
    "url": "assets/js/83.4cf57342.js",
    "revision": "5cdb56a020be314106005c5c374671c0"
  },
  {
    "url": "assets/js/84.01024e71.js",
    "revision": "55a73e28b2fd0c88b69d7019e678187c"
  },
  {
    "url": "assets/js/85.a1e76232.js",
    "revision": "0f8c086d4dcd78fbacb1228672dbaaa6"
  },
  {
    "url": "assets/js/86.f662314c.js",
    "revision": "4feacf75d5ebf3946992be9fe2783429"
  },
  {
    "url": "assets/js/87.bc1586f1.js",
    "revision": "ed252e81eaac5d103f05595c741db1bb"
  },
  {
    "url": "assets/js/88.77ececd5.js",
    "revision": "0d5d4613488f4686aa64cf0a83d7a214"
  },
  {
    "url": "assets/js/89.ac4a080d.js",
    "revision": "22db1c23b8cd25fb6f5642e526497b4f"
  },
  {
    "url": "assets/js/9.d99b2a36.js",
    "revision": "100ed8989b5aeb4e05a406135f3bc25b"
  },
  {
    "url": "assets/js/90.8141d67f.js",
    "revision": "abcbbeb24cc6b775145b130774c01231"
  },
  {
    "url": "assets/js/91.7349dec6.js",
    "revision": "9f6c1a00ad71b54dfc958da116a6f649"
  },
  {
    "url": "assets/js/92.bfd7f478.js",
    "revision": "dbc46a5aad92ffbd6f2673b9e1139874"
  },
  {
    "url": "assets/js/93.47f207cf.js",
    "revision": "61cdcba89875876456162923017394d9"
  },
  {
    "url": "assets/js/94.1965a6b6.js",
    "revision": "e86d8cf5fa219302f9e864cce762f03d"
  },
  {
    "url": "assets/js/95.6d3f93d6.js",
    "revision": "b2d037ebe94f21738fe359ba6f738b56"
  },
  {
    "url": "assets/js/96.906f7759.js",
    "revision": "2c4b886e912a9c52afa87a27bbf299eb"
  },
  {
    "url": "assets/js/97.353a42e4.js",
    "revision": "ac12525ae560bc968e9ac63cd8c0a73b"
  },
  {
    "url": "assets/js/98.b641b8c6.js",
    "revision": "0dc74e1cc409e9ec890f73b601356c01"
  },
  {
    "url": "assets/js/99.6bce757f.js",
    "revision": "fbe0075cbab542569bf45196194dce92"
  },
  {
    "url": "assets/js/app.4f352bf6.js",
    "revision": "43df69d87414b98845ea7dbcc220fad5"
  },
  {
    "url": "assets/js/vendors~flowchart.b3384144.js",
    "revision": "4740c33d7acf3036ce1c5b4ca8ddee31"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "3ebc1031101e4a361fd3b34d23d75596"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "40f10056059f15be3cecd362e822c0e6"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "04dc788bc0e53833c7fab9f68d35378b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "05ef62cf1e9ef01d7f2b9d694d35b810"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4f3d20919325f50d317c61397e3450c5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "84e86ef2559da52fece7a11b4ec83853"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ebca288b21cee9f1e6af8fac23c6b613"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1196a5ca5017640f643db0191092f198"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f71f90d2ac57863d6ac84d9dab06dffb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "881450f4d06fafe120b9cd5549cad3ed"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "950ec80c4283bb75ac90e3c34494c639"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "635adf2b137440a8888b1187746b19cd"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "2024bd78c791e4d672bb469895ecfec7"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "b28ec77e8a6840219ce1df1a06c0bdb8"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f8e0f2306bcbfac24f827cafffa81af6"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "567ee5f44b3787b5aeafe03918485550"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "a037823e67998c32f754aeb445c61c54"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "9f3be3e957e7692bca12bd4810a5de80"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e3b91122c3ca2d2a4fa2473251d1eaca"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "5b870a8f7765edf18c959e556270d3a4"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "73c0a3586888796ec0f81e586a5c2191"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "0def444d9809982b31a389e60d9c9395"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "c7a753a81dd7a237bef69598e903d6e5"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "f17af61fac841a0ce8e56f075447f89c"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "f80d99c463d22b69e0af603f151b7ecc"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "b8886193572332f3aaddbd299b92c18b"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "7ad415390fee6a63c0acbd5d58b1d51c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "38dda32c6d2e96663e41b1f4832a245e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "dbc73c0e4cea249c191568fac3a531c6"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "154401a7ba3c229e8029a2e8a96df252"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8160af397d6062ff4a5a3630f2521348"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2e6a5f9d6176fd9f5f1b5a3245adb7ce"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "454ccc6cfdcb42e0979a7fa0a940b1c0"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "4304ec6679c90a770f3dc5135818ee6d"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "23fa4e782c539a577f75d3d1383e2799"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "26ff915a81cd1be6da56661c163e5fca"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "140c6f567d028d5c2cd4e12a373aacce"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "442ce7c6e359a5da12f067c1acdb0b42"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2b86d8d452532610189470c2b905050c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "36674eb4b267ca1b30912061257fc49b"
  },
  {
    "url": "book/index.html",
    "revision": "71118b37483de19c3c93b77aa23c71ac"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8fc21f431c9f420a9db67b4a6df77579"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "33e5af646f864a16faf38dfbfd9234b6"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "1632a8ebfd779dfa19578b8043513ebf"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e2b7dc394a5b97a28904694043e1d351"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "77f18522badfb0f414882139b52a31d0"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "e8a646846b89ea9a5792507733bcfc19"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "ed7da071dc18b3a726607607aad1786f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "11b79649603934f7cbd1d612a2ef6664"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "28d6be554aaf9074599a3e9ca0af042f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "82e490085782a67ec12106cd1b23ef13"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c8235a0a596b02e24a42111aec01b66a"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "2e24cade83b8cfc532fc69ce70e69eb7"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "13cedc29549a9744f42c2e9d7a06b529"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "e42c5a6abcd231ed7f343c9942cc7229"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2dd5c486ce5e32f21d759564845009ba"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "cec6861735803f5eea0f7aa460d768f5"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "6c7a51b723ade3d17165215d10f8e16b"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "e23fc7cff3ace92e503a8b443d1d0417"
  },
  {
    "url": "c/program/index.html",
    "revision": "19e2d456f75be0433a6e70369f93c72c"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "b4e60b376c8771cf732f3f7f39d4ed4e"
  },
  {
    "url": "categories/index.html",
    "revision": "34b839617cd8f950d5e382735b1dd6d6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "4b3b6ada151d7045fb9f2025e2b09ba2"
  },
  {
    "url": "figma/index.html",
    "revision": "e458a990d101307ca0ef16ec2d8732d6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e2be026ce4119d904c0907bd1625d531"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "bf1e6d4f12f22b3cde486d58ff65bee5"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "a51f448be4bf945c561128f0c23e4d2d"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "151e544040b1bf9a97f74297efc23ca6"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "d34a6bbd2176ea3e31f644081c1941fc"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "3fc3f6f683862ddf72c0aedba54799a2"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "57cbc95dab8319869d78b5ebc264d1a1"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "0cadbd0a4fd7d49a80e2cd01cd5f0211"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "a7241e1b6cf816967f8180c1dedd9cc2"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "11e48de1bf6d162aa81788734e84b33d"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "c7aa894c2bdb01c4eb4d8c6518a3e0f5"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "2b3928047ddb5bb0ff4f5b1bc31d439f"
  },
  {
    "url": "flutter/index.html",
    "revision": "f9d6bc5f7b23c7aa3741ba6ce4f6ce51"
  },
  {
    "url": "flutter/point.html",
    "revision": "bea3d829321e4d44b29fea0f941dc6cd"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4ed7ff93aaffdb3bbcadb122a43db7e1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "44142daa59c179245aae70fb8db9134b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "751385c5a839e7a822b329597ac5c05b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9ddbf1ff4e6fbdeadbad997a671a1f65"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6e8a7156395ff2ef05b5e36a8ac0fb5f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "458a58b45a6157ffc8a422c601a1a282"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e3dc3078b35d963510fef5767e604039"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d6df9466c3f083f28309bca98df1ec14"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a168e3d8f001a109b0713c1005851419"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "96a6167738287268a9f616d415cc9852"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3cd646dfe4f9ddd91f6e20840077d5c9"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "71130517e927078c547e48cd90c66318"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0aac57c8180d4c925bd3ec210742fbac"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "1c8734e598dd48455260c27bfa837568"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d41db2fcc16b591d578c5f4296d04f03"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "456bd34952741867009c8ba2c50f96c6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "937cace0fec404397a01c4e368dac825"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7008d3625b8833e8c6e0dbb5a92980b4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "277aef3e73658de3c7671a29cb30bbb8"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "f060e0cc596ef0c1abf45b377df5e840"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "15ebf0310b1a1f39a47b214f1c561eca"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "dd1596c926c83973510803124b074574"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0d4127619dad61218ad06ca954fe2914"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6d759fc19f2ab45a8bef0d1a20f50112"
  },
  {
    "url": "haskell/index.html",
    "revision": "5379551bc7bd7e6789165a6c1002ee5b"
  },
  {
    "url": "index.html",
    "revision": "12d1806510b997f97274dea86e825b4c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "27e146b05b90eb296381b87e4113b8d8"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "adad74962f2a67fd918aefa7414222db"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "bf149b94f3dc05a289961ddbbb103a35"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "93409761003c91776ff13d935b2f0c5b"
  },
  {
    "url": "python/index.html",
    "revision": "909487b64a4535168cf8c8114dca6f5f"
  },
  {
    "url": "python/python-ase.html",
    "revision": "ba043b41934986ff1c0b580a5f702cfe"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "8d1cd327498ebd6ff3d5218b3960131a"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "e3e53937f28827392c68b3e486057c74"
  },
  {
    "url": "python/python-file.html",
    "revision": "149e0f0ff2a030bcb208ff340af10bed"
  },
  {
    "url": "python/python-function.html",
    "revision": "d5a94afb3658577452ca5f40332a2521"
  },
  {
    "url": "python/python-generator.html",
    "revision": "c3f4d12721123a3caae26974e068bbe3"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "262736d08fbb3ac11cc29f37d1084e46"
  },
  {
    "url": "python/python-module.html",
    "revision": "96e291a38ee3a8bdd203f339ee2a15de"
  },
  {
    "url": "python/python-string.html",
    "revision": "cdbd1d1126ee531268ef4c85e0da3231"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a4a2c984d7352547fab953a019784da1"
  },
  {
    "url": "read/index.html",
    "revision": "c6c26b779e17c59fee6efd35a84e18ca"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "2099fb9fd304d93bc1c0664ca5c41afa"
  },
  {
    "url": "swift/better/available.html",
    "revision": "30eef61ddf709d57db0e3a0d1ccda7b3"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "1aa8aeedf67c93f0b981b5765ccbcab9"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "065196ca0e2a3e6a71bb735d352a2a39"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3aeae81d808fcf362028ca12056164b1"
  },
  {
    "url": "swift/better/di.html",
    "revision": "25552cefaa481797f8ea6aed6c25d575"
  },
  {
    "url": "swift/better/index.html",
    "revision": "7726709b2b5129deace7ff7e1a18f83a"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7ec8c0bb5713de972100e44392da07ac"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "ccdcf0155753beec5a7d5bdf36e85fde"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "d9f45a237ee6f77b22da776d5fdefe17"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "446d45b7eae3693670a48494db971037"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "7fa596c101331206463d61e6fdc4382a"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bddf60bca5803f1fbccbb3373e66466a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4fee335a5398a4918527d78d7d86cc08"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "83c9f8be0d6dc5903748cdd446865c2d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a56f4a378b0e8fb7d811536d1795241f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "394d4125443111b0c99826bc4c47db2d"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b126239e48f2fd339d82850c6e72f424"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7b1db6a3ee69ba19b17ea6da5f4c095d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "71354e7a1d16adca063d33797cdbdffb"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "72d9f7e7a3c6371a8ca977ff87c26098"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "04ff744b275c09577f994e1819217fe1"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "aa9f0260cf1bd2eb32d2c9724fd54fa6"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "bb979000f77455a47b97a3a6f598a2ca"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "3e9607a6772651afa2d5bb8a3d9cbfa7"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "eaf469d081b3be49c5004de824e75dfe"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "cea54d5469ebb9c71211ad8738e2f443"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "8342b01caa3ca3045ecd5f1ec323c1da"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "9653d58e698ba93da8ff1b0d1d155298"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "17956b11b9314de3be639dc524f624e4"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "3118265ee006f0dbee59f311ad365d4f"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "a2db5378af6777350f5fc253b3a5d890"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "53bd53c30acb319916b5a536bf08177d"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "706cc8da18abe1dba10261a7b7071d4a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "07851c3f2145e0a4d3b7b2eee5f809b6"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "c04a92de74b35c6627725703b5ab679b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "0a279742813c296bd4b0aed3e677f661"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "af896fcbc12e4ca1d14d4f7e435b2927"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "19e54c5ea6174ce4b501928ee7eccc6b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3aac93e61600137321db9735d1a60580"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "5c29dd8d397f0c343b0c134275570a38"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f078302e86910cd0eb867db092c4fee4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "18d693465f8359a758440e3d8b200f39"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "06ea16cd0dc79472683ed8c80f0b94ff"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "4d5d26a56a2b3a8d2588a4d87791d2f4"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "cf9e2a64aefd8803e9afdaf2176e1c81"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e64dd2765a6d37a293b2a8b71e9c5cb5"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "7aa5087d7f1ca63427849cf05c88f030"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "45c00617a6655bf8d9113353b8f997cf"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8716e59ccfb8a4282e804c031fb69ed8"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "82e36b6b7425c19d655c1859ab2c8db0"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3f6e03204f81492a880d2f445a9906bd"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "df4fcff384efe051e91c2cf7c3402acc"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "0d41ac0f9626c2121cad534fac571897"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5417513d5e0a52f4d301847797d1b1e4"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c3c883bb8ee16630d06bbe817e56bf87"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "550744aefe1ed180a5ede13451e093ff"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c586cd9fc71bff697c6b0d9eb93ce47b"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "cc4b4c2f533ab126f6d1de2bb205e870"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c1892f8d7decec2bef4b1fee36ea70cb"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c88132b6498217521c3b195c90644208"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "0fbbcb3f3d660d7057840a4c07824e95"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "c6162a92a5bb454e0e815a6bc0d9c6b6"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ff1fd95a6e236abd0488d2d8ea85fcc5"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "cf7058adc8d0503f73d85c2a8e7ad4cb"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "aeaab4ce7d77eb9ac6f04df1d4e5415d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "73c975425a4a5ce047acd9565d28ac73"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "dff0bf7cded4cf3dbcd276a726e4833c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d1d8834d9ec69e010ce43aa4217cdf1d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "485048a35f48659f4f954bf8d08d0900"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a74e5ebd61dfa294b5fadd1a33cfad52"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "a383ab1a259219e1c0de3260f5ffda7f"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "5f21bea1276b2ce4275d298eea44e1c1"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "3806b89b2c39367f5b635fb985313439"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "a373e680de040a7a33557578d3b61d89"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "0aafdb04a06a3c5f7327079606afa4cf"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ca6ab571b2c50222990b030fc351d4bc"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "d1554c2f608028cfe8a5892b39de3249"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "1e73bf571662089ca068bec73def7c44"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "e0ac3e0f60f9071cf718b7d7a754796b"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "d0e6782bc47e1229c593bac39bcbd66a"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "29e3a08c030a2b0efb9ff720cffda789"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "db3cb676a4627244171880aaa7fbd66a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "11e8c023ffaa9df3cf7fc8181e31b35d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "bd74dbf34077c7f823de90a043abe769"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e3ba83ee820a2d63aa90ddcbb06a75f6"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b96e6889707977b0438b2c33eed653b8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "284d88ce9e94c1b05559d9378ab3cbb2"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ee344e1735da4861e63a405de639ff72"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "79983549e6c1d7a98152bbf47fc96d13"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "e39b0d2e3053f41c8d6c9a62a2ebab76"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ae9c112a7072e617dfcc9dc6dcbadd71"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "95684a4be7310712bdd6fadecede07b6"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "4f868356fc496d24de8d107b497bb24f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "f53b50278ee707b3adb9c2b271688349"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "045ef8e6b1229f042b4b5a2eca9421b3"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "8e2489df2197a95b30fde855a4b4059e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8b0e403910e181effc9f951d4d8a4e3a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b9fac05f2494cb8b45d7862a451d46dc"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "529998755f6c1a60ba0e2eb82232c24a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "cdc8de41f149628f4fab94773941368a"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6faf01b3ce22ab6419442b50b1414611"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1a1a0e035b81d4dcb5ff9d9f97e9ef80"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "ce4b57a87c52f556c81c6f9b26b4e07e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "ce9dd6e63a25b92fd2d1fc2a199df9aa"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "1cae24652faa7d6c1879547727a472fa"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "ffaf4e128763a5df7934855f6c1891a0"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b6c50a4e303066b6f848c396fec1fba6"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d5400b1fe52aaa4f6ac4d0b7b166a65d"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "78b5a34ca922138a59151fce3c5a1c4b"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "d59122de742769a55848909123466e4a"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ace82dfab47f3b45e03e67709324e540"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "42c26b2a44efc934d6a0f80872392834"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a299c79ff1cb09a8b7826fb77724ea24"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "30619ba017985e0637540480d2b8ecad"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "57e5c4e78b37042ec8002d1475cd37ee"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4bd21fcee0f514484adfdba50c1128ee"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0c85e3921a56e7d3476fc9e0d29ef212"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fa9f4f555f567e4a976a8fd6c06c5819"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "33cdf9005219869f6b566b67179cb05c"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f40405e2a89d6a0d1423c80013181507"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "283deac39354fa02c416a41bbe177add"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f8fb19f92f7e0433d97e84bb47a47650"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0f9eb90db55db74bb10cdc17e9ae106b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "41f7ed890768aaa19af7be06ab8416a5"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "6738f953ab9feb71ee576ce0cd27634c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "26290b41856669015e5542a005451ba9"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "66ad965f8ba50e195195b1c431612af5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a6517ce015df8f2a95749276e1783933"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b4c230fdb747c1fbc24457dc9adf04e2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "dda6cfa8787e3c5eef1995dd194643a8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ccd7f93a78b79ffe947fdc5bf4b3fbda"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "886c27ed6dc54a02868ebc66c8ff71ee"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "664e2223a806d7673af7d148565afabd"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "648d575bc1aa853e0db7756162f611ed"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "3cb9881ec0c02034501c1ff03a6e3dd5"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "d4f297e2b170a7bb02ba78e2311df4d6"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "874a171a91f59e69cdb96a7696d59deb"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b3e6db9d4cf65a63e07bdee2c3b117d0"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "93cccb1bb4119f6b5ddd0c8c5adec715"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9b5172bd9316ceafcad8b79f160dce86"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "e3ca7288438b346a8ef59fd19589a1ca"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1415f0146d1d7c168726ee7c337aa22d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ee9956a20c2ef9d36f03136f008a11cc"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4e1f7e68bb78ad17922758fb83865a7b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6af70bbad2ac36dba29f52fd509107da"
  },
  {
    "url": "tag/index.html",
    "revision": "2001eb55ef10c712e98e6de21e3cd0fb"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "27b35a9d3b5fa2c5e8815b202b210227"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "c0528d58df8746422618e1ee8b4d9c33"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3c8e36767b4d8efd5594864723a6cd62"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "07847fbb846726506b9359a725cb567a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a071de2d66c587ad3cc2d1c208a48fdd"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "75bc70bb1ccdb28ea2251682867380e6"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "73193e6a05235dc59d01e717a70f0e10"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "220a0deaeac6b8e5481c0bb691796995"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "707f76f3638bd0f687afed106922d2ba"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "0e7af8a29e9cec0df6e1a88480d34668"
  },
  {
    "url": "tag/json/index.html",
    "revision": "b7c9b4fb209fb9ad500e43756ec3847c"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6c66ae4a1c4c06902633c30dee43fce2"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "2c7e1846b37bf398227b62728e123ca8"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9c294a1a9decb8f50a3d59e92fd8a3af"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "31871d43998cb0e7d40d30dfac47ba15"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d01169f2210eb7e01b3fcbaad0799f80"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "79e713cbc2ea3e93a3c57ac655f14c6f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2c9f7f4c9361a238fe50e90f2fa18163"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "0da4a78b08b259ba7872c848166023e6"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "85489937283f86c496c8a26d2459988c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "1b383d86912be5dac44210425dd699a1"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3d21f19f4786df5c36a9ccd70110a7ce"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "8ef2bccf313b11bb77a91ca29cc12fe0"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "effc240ee88609e84f3d4790f1cab763"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "62d6a5c8c6cb7af5208b103c84485f4a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7017002129c2016fd646dccedea66d4f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6acd6703e580038d20ae0ed9dc5913f4"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "4a688dc02231dc5bf40dd1808793686a"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "6c80575a362851eb09226bb82178e859"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "773523c555df88f7c29503257e65e8a5"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e5eedd62d42ef778053c4cdf5d0ee5fe"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b963cee481aef7a5e7abb09fc8c50cbd"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f4581640972640718a016546abdc61d0"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "5f3574cca1c2354e916a77b1da871475"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a2469fb66f22108bb687fb748adcdbba"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "8b06f9c5e71c564d012fb3ed4a690cea"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "040f8784bbe8e52f26990db5061fda84"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "12ccb39bb036d85afaa0b0791e33e3a9"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "7f180fb12a734d27495a1fb44e4d0251"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "84b37bce44a9a668a3a48570e450cfbf"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "9a327b323d755e014e24c2770c4b4671"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f76b6ade8f19629e961ae15e596d3378"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "9fa079f544d599d9913500cbd29c4e9f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "1100bf63c365a1951870d55b7e5e5a10"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "aaecfe45700cfd280e838fd391c299b9"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "c998cdaf7ab0d22540f14396bca21bc9"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "53893c7e506e5479841cee84e932ca01"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ba91c4d3c82a657b200c3bc38636b434"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e56fa2b3089e1ba3bfacb4cb257f3fd4"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "1adc317881dd49743f7a8f225a0661ba"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a54802dd84afdc6711132348bd5ccc7c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "8b267ceea65584b282f2459e3e502d9f"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "25e716e841ec0c6354d2dbd3fe37841f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "6fa134d1ee3ed64b410a1a27f7f3cf14"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4867ad3e24e1628a01e3e07281966944"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e594f9e386231e2b52e4b1385fb1a066"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "4658325335dedd11f66349b5a85b68f3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "18e4bc90e3d2270b71a435995acf8510"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0e8b998d301a52cbf6cf47c9e0db7cc1"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "46d4cdc9cbf07ad8b03c53526832dc3e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "7128a722c259836ca62627202720bb6d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "add9f7d6fd2ddb5334a556d5b91781af"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "939836dc5e0d1e238286a865ae0fbd77"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "6ebb4399a9551c66640b8a19c1cd9ed6"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2f8966306da8874d472311811805fe41"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d4cbd9f6d947aa4aaf7de885f7b43050"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e9f633ac2e38dc7d12edb64b6410b4e9"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "e7382de874bc7a908effec2b41367647"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6cc0e75c8468d29b6f25da06f2f7ffc9"
  },
  {
    "url": "timeline/index.html",
    "revision": "d54caeb7cb536e09a603eb2bcbd1d8a5"
  },
  {
    "url": "tools/docsify.html",
    "revision": "2cd91c925d001eb35c3faa4eb84881a6"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "7663c99f517364a97c46a29df40a128d"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b3ae39248879a38f5f855b7fc2cbf799"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "cd101ef1dcb54f9b9e599565816d1edb"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f3816043af6c7dc663878b91bba58d0b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7964ecd232bd63482507c06b9d5498f6"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b8cfe6a2fc3d2a1f28392498d6886552"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "16ce2f051cd9f4cffe8222d1399b7687"
  },
  {
    "url": "tools/html/index.html",
    "revision": "42dedbefb9e1726995a2fe7f5c3d163a"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "ccba1e96ec646ff31ac567f2828249fd"
  },
  {
    "url": "tools/note/index.html",
    "revision": "37142c70dd61925d9707873f2761f15b"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "a529fbd0973538a333ee683dde477c1a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "15c2344532c3472857aff1cae84eefef"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c9610768d35084ac1af1d5df0eb3e165"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f61a52221275c4df159ef49595d2f4f4"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "32289be8ee566be12d3ffeb802c70916"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c281e3d363fd2ab88ba9f674efd2e47e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2833a047e6732d7cab986cd56aa85a4e"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "5d2b0ebaca7f192bc3c5eaa79100898c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7d3135179b645ba149de625e3524e859"
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
