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
    "revision": "796c2b748b9531607c1f90dcd22a4029"
  },
  {
    "url": "about/app/index.html",
    "revision": "8a54d85f5ab5a57ad24c87c351e8ab4e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e6b5535c701c32ab38428d946e9ae481"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ed42a5c0a2c81b38ad18457e1b9a29f6"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c551625cf9d3161f165dbefab16657a6"
  },
  {
    "url": "about/index/index.html",
    "revision": "074fa7f6e25ddc4f926b61cf5d98a67f"
  },
  {
    "url": "ai/index.html",
    "revision": "cca1b2e31d97f61077366eb707e039a2"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1f18055a204c357cd822e7ff9e9b665c"
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
    "url": "assets/js/100.ff076da0.js",
    "revision": "be5467b1d088bbc8724288d0924e57b7"
  },
  {
    "url": "assets/js/101.cd42b276.js",
    "revision": "bb0df5c430b72b3ccdbacfd797c877d7"
  },
  {
    "url": "assets/js/102.4dfddae8.js",
    "revision": "4257fd05be62e8f140ea7ac485747323"
  },
  {
    "url": "assets/js/103.5054affa.js",
    "revision": "1f0fd975be391aec6f56e98085664de4"
  },
  {
    "url": "assets/js/104.4e81e5cf.js",
    "revision": "dadb31b3ded7f2ad44a623bd3505113c"
  },
  {
    "url": "assets/js/105.93e04dcf.js",
    "revision": "1bd64020d2eb96383f73c015f29ddea3"
  },
  {
    "url": "assets/js/106.d5c4f74a.js",
    "revision": "53dfe7f7ca75512332f14264fc7a0f25"
  },
  {
    "url": "assets/js/107.b6071381.js",
    "revision": "2667514ab8c418984c77694a5d425b0d"
  },
  {
    "url": "assets/js/108.40ad044d.js",
    "revision": "cc80a9900024b20c242a6bdf6508fb69"
  },
  {
    "url": "assets/js/109.049fa872.js",
    "revision": "1585223d34dd6e897a3e4951a472a957"
  },
  {
    "url": "assets/js/110.2eaf37d8.js",
    "revision": "61bde7a4a9874b8ca425f59c42eeb534"
  },
  {
    "url": "assets/js/111.2deef7bc.js",
    "revision": "d218849bd51f0925c5872578178a0dd2"
  },
  {
    "url": "assets/js/112.9be07078.js",
    "revision": "5c9f8802abdcdf173cfd96db5211078f"
  },
  {
    "url": "assets/js/113.ed194797.js",
    "revision": "babdfa8b7020ee2b58ba57cdc1077516"
  },
  {
    "url": "assets/js/114.4e733d42.js",
    "revision": "df6bf45fca27e8dc678b50120a23d959"
  },
  {
    "url": "assets/js/115.4ef83f0a.js",
    "revision": "bbe8dd0e4780aedf21c782aaf5349746"
  },
  {
    "url": "assets/js/116.25e4a84a.js",
    "revision": "c2fb01a342f3f0ed4a3597f28effdf4f"
  },
  {
    "url": "assets/js/117.0e3c8fa5.js",
    "revision": "8c0f9062785795e784a2fa80ff79a67d"
  },
  {
    "url": "assets/js/118.34dbbda2.js",
    "revision": "4a01f091f9574fbfdea3bad04f43d8c3"
  },
  {
    "url": "assets/js/119.331026ac.js",
    "revision": "e1954d84defa4c64ce9329e0b7f6d596"
  },
  {
    "url": "assets/js/120.cd91837a.js",
    "revision": "69eb7c309147c88190f13f9f7ba962ce"
  },
  {
    "url": "assets/js/121.2d45e7a1.js",
    "revision": "84ab6a824827f90008e56b1e9a0e1e0a"
  },
  {
    "url": "assets/js/122.d28ea398.js",
    "revision": "7b30bbf71b8e7fd439bedf2894c84570"
  },
  {
    "url": "assets/js/123.0cc3e880.js",
    "revision": "59e59bb0455a4dc8a1395821abdf3de3"
  },
  {
    "url": "assets/js/124.039c8c4a.js",
    "revision": "19c6fe91197cf8243168277182f5f244"
  },
  {
    "url": "assets/js/125.373e0f27.js",
    "revision": "6c74139b1a945dccded86fa17c51e9b1"
  },
  {
    "url": "assets/js/126.5b010a5c.js",
    "revision": "861f4e0d6974b6f1a88123591f049c2b"
  },
  {
    "url": "assets/js/127.107b4995.js",
    "revision": "2d21510860eec35e2a93438f522b0f56"
  },
  {
    "url": "assets/js/128.ae855e51.js",
    "revision": "eff2f9710f1428b17d20b63095e25057"
  },
  {
    "url": "assets/js/129.ff418c2d.js",
    "revision": "cad7a8aadf7ca1a5ca0e6eb47e5d6529"
  },
  {
    "url": "assets/js/130.a51cecee.js",
    "revision": "db17bc72559577c0f2065336e67d24ef"
  },
  {
    "url": "assets/js/131.e92b6561.js",
    "revision": "e542be3fe4f96dbd243b12fdd9391d74"
  },
  {
    "url": "assets/js/132.28aa6922.js",
    "revision": "b3d32b4488a52c559b481598fac7a9d0"
  },
  {
    "url": "assets/js/133.0f9bdef3.js",
    "revision": "19549d91743ba92ddf1086dffb72886e"
  },
  {
    "url": "assets/js/134.697a65d6.js",
    "revision": "9c7edbe00776528d2cf749afa790ae35"
  },
  {
    "url": "assets/js/135.f6691aa5.js",
    "revision": "21f3cfe09e5da3ed67ebd6a33438636f"
  },
  {
    "url": "assets/js/136.b2811f5f.js",
    "revision": "860c20cd59c57b5596ba2da912bca5bd"
  },
  {
    "url": "assets/js/137.d22806e9.js",
    "revision": "42788aa7cef17d1c4b401dcf8232e8f4"
  },
  {
    "url": "assets/js/138.8ab08a8e.js",
    "revision": "7735e8e20c666c0e475b0338764720d6"
  },
  {
    "url": "assets/js/139.c3afef6f.js",
    "revision": "2fe6ace61e2b90c0bae30d8cb0957370"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.bb57b935.js",
    "revision": "084298e939af2b208178ffe243c5dab6"
  },
  {
    "url": "assets/js/141.dc6149dc.js",
    "revision": "97b70884c871843d861c3766ec378e3e"
  },
  {
    "url": "assets/js/142.8ace1142.js",
    "revision": "8ae881cc9512ce0e2d61f0121c0c705a"
  },
  {
    "url": "assets/js/143.c1369a5d.js",
    "revision": "d6bafe8f8f699ee0c488c820fbbdc60e"
  },
  {
    "url": "assets/js/144.2cfa443b.js",
    "revision": "299edadbeb23a243244783c94e578e20"
  },
  {
    "url": "assets/js/145.c86d0f7b.js",
    "revision": "25544e596da84721253304d61825727b"
  },
  {
    "url": "assets/js/146.ea382846.js",
    "revision": "62d95a24c86687d2c551ee56fa3145d1"
  },
  {
    "url": "assets/js/147.a544c287.js",
    "revision": "e8d05608359d5f2de0d86643c22a8e3f"
  },
  {
    "url": "assets/js/148.c0264c21.js",
    "revision": "34ce0b9d22a53fb782684b5027dcaf8b"
  },
  {
    "url": "assets/js/149.3cbebd3e.js",
    "revision": "0d5923384bd7135560e85b586cbaa856"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.2fc79db8.js",
    "revision": "22fce4c525da4da4d39bf3fe5510696b"
  },
  {
    "url": "assets/js/151.5d8c32a2.js",
    "revision": "68e9852daa7ae8f60dbc4367675fea69"
  },
  {
    "url": "assets/js/152.4c741dac.js",
    "revision": "471ec87dcbafef8c84a80127d131f05d"
  },
  {
    "url": "assets/js/153.fa8f658c.js",
    "revision": "18392c25d15a2c9b34fd63a637ce46da"
  },
  {
    "url": "assets/js/154.e82bae3b.js",
    "revision": "b8c7d07ff49da9420362896a23ed4153"
  },
  {
    "url": "assets/js/155.a1bf9b76.js",
    "revision": "360d93cb4b04c184979f9a00af73568d"
  },
  {
    "url": "assets/js/156.fdfed16e.js",
    "revision": "b849bc488c9b968b4e4f4b90ba200e03"
  },
  {
    "url": "assets/js/157.bf3c7084.js",
    "revision": "8f1e0246cc421d82f7f50f6658c950f3"
  },
  {
    "url": "assets/js/158.ae6a3a70.js",
    "revision": "508d8f926b9f8f889bcf3be08441a0f2"
  },
  {
    "url": "assets/js/159.6c57ddaf.js",
    "revision": "92e784ddc97d2b4b101c12c05829dfe3"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.f083f376.js",
    "revision": "381ff0f0254641e3b13569407a346c86"
  },
  {
    "url": "assets/js/161.2311ffa4.js",
    "revision": "0ccf7bef662cbc61fd1b48548451d5fb"
  },
  {
    "url": "assets/js/162.e2e5f3c9.js",
    "revision": "304a323a6f1a4337734302befe1dcf08"
  },
  {
    "url": "assets/js/163.e46b430f.js",
    "revision": "2be36449dd09903852b25864d5aaf10f"
  },
  {
    "url": "assets/js/164.44f10b76.js",
    "revision": "ab4b7d1bfe7c05b4af48714892453e64"
  },
  {
    "url": "assets/js/165.ff57b586.js",
    "revision": "aa59804311e675b426409e13ecd2983e"
  },
  {
    "url": "assets/js/166.916e37d5.js",
    "revision": "43d92c37dfed067a4823175c7e71c337"
  },
  {
    "url": "assets/js/167.c621cc18.js",
    "revision": "6618c06206b044b804c0421bc1104fcc"
  },
  {
    "url": "assets/js/168.87bdddd1.js",
    "revision": "565ad94626dfff908eed720b6e1eed1b"
  },
  {
    "url": "assets/js/169.263374e3.js",
    "revision": "44aff68a1152de3212d21175bb0cc403"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.917a9ab7.js",
    "revision": "f856ac583e403a4ff7edf0a13ba8690a"
  },
  {
    "url": "assets/js/171.59da867d.js",
    "revision": "b0f81a79cbf5a6876278f51c70a7b02a"
  },
  {
    "url": "assets/js/172.33624348.js",
    "revision": "c65dbde32574ac46d609fd897b5a8917"
  },
  {
    "url": "assets/js/173.7533aa9f.js",
    "revision": "ee03f488c0bdcffc9c73b642d706a9a4"
  },
  {
    "url": "assets/js/174.3839d223.js",
    "revision": "0be0f2f34689f5506439503301555ca7"
  },
  {
    "url": "assets/js/175.ef3f3b5f.js",
    "revision": "38809ab4bb2035a36b61224117ee2884"
  },
  {
    "url": "assets/js/176.3341948d.js",
    "revision": "ddc2ad259d1aac2556379a81f3db41f2"
  },
  {
    "url": "assets/js/177.1cb4c7ab.js",
    "revision": "25ac526099d1509c0f67e2be66129bbe"
  },
  {
    "url": "assets/js/178.5ff79257.js",
    "revision": "f420fba75c7b95204bea23d87756139a"
  },
  {
    "url": "assets/js/179.9d0490e8.js",
    "revision": "cc09b4863268535ee550ace2beba4246"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.699a4793.js",
    "revision": "981a2e260aabfcd76abe1a140cb2ff85"
  },
  {
    "url": "assets/js/181.78681443.js",
    "revision": "833e258246cc93b7bcdd87d70d6c4fc5"
  },
  {
    "url": "assets/js/182.5d9f58f4.js",
    "revision": "e1b0d41fbdf4c3cf3eb0d37957fd5317"
  },
  {
    "url": "assets/js/183.b556717f.js",
    "revision": "cd699df8459046363d2cba2bcc336fbf"
  },
  {
    "url": "assets/js/184.b9cdc4cf.js",
    "revision": "f4f900c0d530437ef7bf5e7366fecb88"
  },
  {
    "url": "assets/js/185.19d2cbd6.js",
    "revision": "bce6534983ad8e2f24904da9a5f1cfcf"
  },
  {
    "url": "assets/js/186.4d29cecd.js",
    "revision": "13fd479f0cee276e672498dbd5fe56d1"
  },
  {
    "url": "assets/js/187.3b498af9.js",
    "revision": "471339a1db5a79c836ec85bbe9e96f11"
  },
  {
    "url": "assets/js/188.168982d7.js",
    "revision": "d8931c7f691eee13fdf53372b497130a"
  },
  {
    "url": "assets/js/189.23ba661c.js",
    "revision": "8cb15c748cc12efa55ca55b43952baed"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.86d3dfb9.js",
    "revision": "a1bb96797d7f21e50b5598f2d86fa5cb"
  },
  {
    "url": "assets/js/191.397b6b50.js",
    "revision": "f9769e1f38b4a8fc8c4569e0f4be4aa7"
  },
  {
    "url": "assets/js/192.43dbd7fd.js",
    "revision": "1432b30344f8e0b39cc29448dc1f13f0"
  },
  {
    "url": "assets/js/193.eef2bc22.js",
    "revision": "e9cb39ed8b786599ede5a4a848ba6edf"
  },
  {
    "url": "assets/js/194.65090187.js",
    "revision": "2e761e92340ca278a73f4f4ed00c8b3c"
  },
  {
    "url": "assets/js/195.83dbd4d2.js",
    "revision": "a3f937182c4365dc853ba517114483a5"
  },
  {
    "url": "assets/js/196.e09f14b6.js",
    "revision": "b3d14475d30a596089747b0ae1bb2d0e"
  },
  {
    "url": "assets/js/197.7f4d0d15.js",
    "revision": "a12885dd9b8be8275ff4342dd04f06d2"
  },
  {
    "url": "assets/js/198.ed16454a.js",
    "revision": "3a05bcddf650b4c4ae25dbb5622bbc21"
  },
  {
    "url": "assets/js/199.011b8124.js",
    "revision": "d47377b99a7a3e98586c2662093bcd2f"
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
    "url": "assets/js/200.e0cc8991.js",
    "revision": "2b4759eabf2848c72f2c85c45221788e"
  },
  {
    "url": "assets/js/201.7f7bfbf9.js",
    "revision": "85b564ef24328f4266e898d449d0ec3f"
  },
  {
    "url": "assets/js/202.e48415ca.js",
    "revision": "432aa57a69338f93abd5ad78e2e37543"
  },
  {
    "url": "assets/js/203.8f344be0.js",
    "revision": "86cb1464dab487fddc1d317564a926ae"
  },
  {
    "url": "assets/js/204.752b4d5e.js",
    "revision": "f249cf2bcc9113f68b654843015520a7"
  },
  {
    "url": "assets/js/205.1bf02f71.js",
    "revision": "f1514a0cd972cc5c9c97a26d71e2dec8"
  },
  {
    "url": "assets/js/206.a7a47a07.js",
    "revision": "316909fc305ac5b9193bb89e8c7ffe18"
  },
  {
    "url": "assets/js/207.83bb1bcc.js",
    "revision": "38a4262d317d22cb60ad90d2ae265ba9"
  },
  {
    "url": "assets/js/208.87860735.js",
    "revision": "70ed9f8e09dd35a1152de515bda097c6"
  },
  {
    "url": "assets/js/209.e2faae34.js",
    "revision": "c325d11225ff0e3e4f9570f318ade82a"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.d01a60f7.js",
    "revision": "b29d447b2568ce0c00d3886a2d1c28e2"
  },
  {
    "url": "assets/js/211.66555d2a.js",
    "revision": "048423d9b91422115cde4ed7011b7bb6"
  },
  {
    "url": "assets/js/212.eb914ca3.js",
    "revision": "f28f056927f943c268048c70951338a5"
  },
  {
    "url": "assets/js/213.e2301c9f.js",
    "revision": "7bb5b2457cf490e90d2ef0f8c57509db"
  },
  {
    "url": "assets/js/214.226bf17c.js",
    "revision": "a0d129816704b7110326290c6d6526d2"
  },
  {
    "url": "assets/js/215.cb8c446b.js",
    "revision": "706bdf05572faa002856679bc715198e"
  },
  {
    "url": "assets/js/216.34cb2ecd.js",
    "revision": "926d506c8fdf9abc1c78c14fbc9c0c76"
  },
  {
    "url": "assets/js/217.32cfbedb.js",
    "revision": "14ecd6de58d8978f93a7fe1fcf5ffbf3"
  },
  {
    "url": "assets/js/218.1f2e546a.js",
    "revision": "6d7c1fae44568510bfa0d19c01539c29"
  },
  {
    "url": "assets/js/219.aaa5b458.js",
    "revision": "4a473b20897a429b5616eb8bc7980d73"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.e03c2423.js",
    "revision": "513c6dc9f703c6a9eee5ad9739f4841e"
  },
  {
    "url": "assets/js/221.a5c7a863.js",
    "revision": "196ed928668d1d4b39fa63fcb0b20e8d"
  },
  {
    "url": "assets/js/222.22bb81cd.js",
    "revision": "fb7e111d12ce501befc847a8e0d7627f"
  },
  {
    "url": "assets/js/223.a1e42880.js",
    "revision": "0367b61a19c38e26ad98e51147fd6dd2"
  },
  {
    "url": "assets/js/224.bf248afa.js",
    "revision": "35892f3c32b7c9b0b58cc2a33e52b34b"
  },
  {
    "url": "assets/js/225.909e79b3.js",
    "revision": "f1b3fd086ca8f425e94497f06c07c953"
  },
  {
    "url": "assets/js/226.a2075c37.js",
    "revision": "cbcc5dc11cc97a9257441b50116c82b0"
  },
  {
    "url": "assets/js/227.811c554e.js",
    "revision": "b5175a881c0517291ad113eec337c2e6"
  },
  {
    "url": "assets/js/228.d2b6e08e.js",
    "revision": "aad91a8a5ce5bcccfbecbcf66a544d86"
  },
  {
    "url": "assets/js/229.d0d5c137.js",
    "revision": "bc665f07f7c08ed6d952285ca9b2733a"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.38ba2437.js",
    "revision": "49a9590edf918be89437d19dec07db74"
  },
  {
    "url": "assets/js/231.223345ae.js",
    "revision": "099d4a23d66fe517cc8efc207990786a"
  },
  {
    "url": "assets/js/232.387012b2.js",
    "revision": "9bc47e9e097307d80838f5add3869c1d"
  },
  {
    "url": "assets/js/233.c32af8c7.js",
    "revision": "b43b7c9dd2fb52338a98ea494fb680b4"
  },
  {
    "url": "assets/js/234.10b252c2.js",
    "revision": "9cc45b61d9f5c550f78e35fecb5613e3"
  },
  {
    "url": "assets/js/235.55f64b47.js",
    "revision": "728944ca9452e7a9b549e13f9bd888b2"
  },
  {
    "url": "assets/js/236.55f663a2.js",
    "revision": "e4352501c0528e3942a2395b323c858f"
  },
  {
    "url": "assets/js/237.c3d5fca4.js",
    "revision": "43870d77671534f3f9281030ada8b5b5"
  },
  {
    "url": "assets/js/238.73cd2357.js",
    "revision": "3f8a08ac4dfe0fbde3a436c8b18c0cf2"
  },
  {
    "url": "assets/js/239.0071f916.js",
    "revision": "64c4ac969884e9261404f79b5287d108"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.96e42673.js",
    "revision": "8be4567209567dc1fd1ed6a98d94375a"
  },
  {
    "url": "assets/js/241.99fedc6b.js",
    "revision": "7f98fc8a055903cc204a87d2dd1d9520"
  },
  {
    "url": "assets/js/242.26cc903b.js",
    "revision": "ef9cdee105a3de6652d9ef76e50df4f8"
  },
  {
    "url": "assets/js/243.39e2c452.js",
    "revision": "5cb0872fcdb1fd3bf079ecddaf31ebda"
  },
  {
    "url": "assets/js/244.64d633a0.js",
    "revision": "f1d19794306cdc3261e6e70d48b5ae1d"
  },
  {
    "url": "assets/js/245.a3b2f55e.js",
    "revision": "299add0588f30303d256a167364435ea"
  },
  {
    "url": "assets/js/246.767f75c9.js",
    "revision": "519632c362624d4f80230a91038746ed"
  },
  {
    "url": "assets/js/247.c3a4d313.js",
    "revision": "afe78d3acfef20ad9bfbde112f124c39"
  },
  {
    "url": "assets/js/248.55cd23f8.js",
    "revision": "f4edd7ac7e8ff18dc0b1ee33b02834bf"
  },
  {
    "url": "assets/js/249.eb486c0e.js",
    "revision": "ff3d923c6549940bb3d5ad05edc31d55"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.77add66b.js",
    "revision": "76d43a0f4127b8c2adec0fe6f309b948"
  },
  {
    "url": "assets/js/251.6c83df8e.js",
    "revision": "d7fafbf1cc005f524dea7e8e7f11f88a"
  },
  {
    "url": "assets/js/252.71f6347e.js",
    "revision": "d4392f18f62a16e39b71223aa5c09df6"
  },
  {
    "url": "assets/js/253.9cf89afa.js",
    "revision": "ad5cae176f03cc36fe71ace6fa68cf02"
  },
  {
    "url": "assets/js/254.80c4c882.js",
    "revision": "d31576aafc343f63337e85decd621466"
  },
  {
    "url": "assets/js/255.57e6efeb.js",
    "revision": "4c1695c4ac59d4bb36e9d41061e41d92"
  },
  {
    "url": "assets/js/256.577bc978.js",
    "revision": "81b319422fe3c6bff4b136e51e13a4ed"
  },
  {
    "url": "assets/js/257.38354bb3.js",
    "revision": "985c99c7acc9fc69659f2b7f854ec66f"
  },
  {
    "url": "assets/js/258.93634aae.js",
    "revision": "7beb002ebd8d4f747685e3ecb52841e1"
  },
  {
    "url": "assets/js/259.d29ea85f.js",
    "revision": "9e09a44a87f29cf8f9e1c1a9eda34994"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.0e088055.js",
    "revision": "94f450db1bf68d8935ac99357dece239"
  },
  {
    "url": "assets/js/261.ccc0678d.js",
    "revision": "a019357c0149bd0b971121cdc1a7d71b"
  },
  {
    "url": "assets/js/262.ef9286e9.js",
    "revision": "a1312faa3a0f102715e278720b390db5"
  },
  {
    "url": "assets/js/263.8f3ccae6.js",
    "revision": "504774d5bbf36d39b5810d3a05803760"
  },
  {
    "url": "assets/js/264.74c26ff7.js",
    "revision": "6cb6aa06e9e4fb8fedb946d07d0c6bfb"
  },
  {
    "url": "assets/js/265.28f0ed27.js",
    "revision": "7e2c09b1c2bf1586b74732171508022f"
  },
  {
    "url": "assets/js/266.9d75e3f7.js",
    "revision": "16dd229b87dc98790e067078a3bf863a"
  },
  {
    "url": "assets/js/267.5e9985cf.js",
    "revision": "9a4037b233aaf8b141462323184bbd59"
  },
  {
    "url": "assets/js/268.35d0f69a.js",
    "revision": "f256d9d142b75d3cd0dfdd1ec6d8b728"
  },
  {
    "url": "assets/js/269.abbae5d9.js",
    "revision": "d15616e9b2a93b7b8698e22d013c357d"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.6ac0964c.js",
    "revision": "a98df296979caaa74e94f93a490193b2"
  },
  {
    "url": "assets/js/271.80ff5da4.js",
    "revision": "2527f03c0fe6d532311281a3db4ec52d"
  },
  {
    "url": "assets/js/272.1a1b453b.js",
    "revision": "62698444eaaa93f412ec71e7296c9c05"
  },
  {
    "url": "assets/js/273.37fa8693.js",
    "revision": "3c0ee4b1b377e27f8abeb7bae9f023b4"
  },
  {
    "url": "assets/js/274.e89a96db.js",
    "revision": "e562ceea3f41cb9f218eeb3181ffc26a"
  },
  {
    "url": "assets/js/275.4ed7d8c1.js",
    "revision": "0dd4feb064ac67e0fe6ce052d6b5cd58"
  },
  {
    "url": "assets/js/276.bd918419.js",
    "revision": "61eea0aa39255a58b8a3ea3fb29e70e2"
  },
  {
    "url": "assets/js/277.a234777a.js",
    "revision": "835e22f204db1df66ab0b08b648e7166"
  },
  {
    "url": "assets/js/278.02c3ea30.js",
    "revision": "96e8cc131f6797db30555903d1fc3aae"
  },
  {
    "url": "assets/js/279.940e73c1.js",
    "revision": "efe86fc62855e6edda1094f38c6958bb"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.93b21f36.js",
    "revision": "2a617570ee225f509dc2c6173f109d8e"
  },
  {
    "url": "assets/js/281.f4e623c1.js",
    "revision": "33e2bbd5bf4326f644c1d9019f862976"
  },
  {
    "url": "assets/js/282.99f84a7d.js",
    "revision": "3d0d6f83c7cd11fbe5f4d83a65ff0005"
  },
  {
    "url": "assets/js/283.f21f2ebb.js",
    "revision": "f47702c11ae13f27c8213248acf87ea4"
  },
  {
    "url": "assets/js/284.6b27617f.js",
    "revision": "882121453bc39a9aa98b79117b8ad680"
  },
  {
    "url": "assets/js/285.3a3cf780.js",
    "revision": "5453616088b3531eaf3d39b924e86599"
  },
  {
    "url": "assets/js/286.bf79246c.js",
    "revision": "d90d01f15ef1b14177ede1e088e3d7ae"
  },
  {
    "url": "assets/js/287.aadee283.js",
    "revision": "e1c191f5e5a2e1464d2907857c6b8c99"
  },
  {
    "url": "assets/js/288.7beb488d.js",
    "revision": "56eb0a56da6c55bccae258615378658b"
  },
  {
    "url": "assets/js/289.527b3e32.js",
    "revision": "17973fbfc7ab60e0e68d113d4e633cb5"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.d75b08ba.js",
    "revision": "baabbe899ab883808020460b6e0b4b11"
  },
  {
    "url": "assets/js/291.6b657fd9.js",
    "revision": "2bc2677373aaf5c4a618c6dec5dfe870"
  },
  {
    "url": "assets/js/292.ab663572.js",
    "revision": "2af03d20de8b5d691b907e1e1c33d5e9"
  },
  {
    "url": "assets/js/293.88999cc7.js",
    "revision": "f2fc682ae74e901173fc72ca8ac19ece"
  },
  {
    "url": "assets/js/294.d46e439f.js",
    "revision": "35dbe88660f29c446525299e9e898b90"
  },
  {
    "url": "assets/js/295.26ae7fce.js",
    "revision": "141f809002a0339a70fe3e4a5d8ab4f8"
  },
  {
    "url": "assets/js/296.117dc93d.js",
    "revision": "a59a64dc8c69ebf9fd6fd9216b1c2eb2"
  },
  {
    "url": "assets/js/297.46c76605.js",
    "revision": "6e5fbd4f25205bf9afa13249d4d5d9f0"
  },
  {
    "url": "assets/js/298.f3d1caab.js",
    "revision": "cc475c8103287bdb672df0b5af877285"
  },
  {
    "url": "assets/js/299.cdb8bf79.js",
    "revision": "9a1eed08c775e75ff7a7a70d76845331"
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
    "url": "assets/js/300.b4555cf1.js",
    "revision": "20b55ddd84e8c2fd55988a4c6720eb26"
  },
  {
    "url": "assets/js/301.781b9fdc.js",
    "revision": "e6154b34f584b4b84b01841725d0d0d1"
  },
  {
    "url": "assets/js/302.9037f55f.js",
    "revision": "ce147b9f73e683181ed182bf4c38cfc2"
  },
  {
    "url": "assets/js/303.4087dc00.js",
    "revision": "244d2da1a891f8a475df457d89db77fd"
  },
  {
    "url": "assets/js/304.ed27992c.js",
    "revision": "a6e45db0b33505a3b7bf8d46d19d2a2f"
  },
  {
    "url": "assets/js/305.456a6a45.js",
    "revision": "65d22b6beb2718542f4035c61c875359"
  },
  {
    "url": "assets/js/306.4b9f7402.js",
    "revision": "8221e973a720c0a58413440612758dcb"
  },
  {
    "url": "assets/js/307.d80ba436.js",
    "revision": "fb5dbf2aef3d99fe135f0e54cc237d66"
  },
  {
    "url": "assets/js/308.d42feef6.js",
    "revision": "ac588366e7289f1476a28e960bbac229"
  },
  {
    "url": "assets/js/309.834004f2.js",
    "revision": "97e2084e3f8b5af2db3ad53a83477a7f"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.6e5dcc5e.js",
    "revision": "ce5484fa66ad06ce004fe264bc28bf9a"
  },
  {
    "url": "assets/js/311.3162f38f.js",
    "revision": "b323405b9fe14941c70844399edcc439"
  },
  {
    "url": "assets/js/312.24aacb4e.js",
    "revision": "d52afe7fe324a9d4fbea403197f42a09"
  },
  {
    "url": "assets/js/313.b52d1f55.js",
    "revision": "e171ca33b8cb7fe9ecde7896f9181856"
  },
  {
    "url": "assets/js/314.59e70a86.js",
    "revision": "37988c29d62d8413a487a2e360acda6f"
  },
  {
    "url": "assets/js/315.64305119.js",
    "revision": "f7aec2be8c2658db72f8d056606a7e1c"
  },
  {
    "url": "assets/js/316.9eb79a70.js",
    "revision": "df3485efee2678068e01b8de524f51a4"
  },
  {
    "url": "assets/js/317.28ed003f.js",
    "revision": "83dad27da666f3792aa5c4b56ba8f827"
  },
  {
    "url": "assets/js/318.6a464492.js",
    "revision": "c56a7fe9acb73316e8f8f5bc6471d904"
  },
  {
    "url": "assets/js/319.74fad84d.js",
    "revision": "1fe6380d9b81fc6a3b579696ee207a6c"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.ab890ed2.js",
    "revision": "4c93dc0639052e890a0bd9d6c4d5a965"
  },
  {
    "url": "assets/js/321.510429ee.js",
    "revision": "febbeb19f852d6f01d032738261e32c3"
  },
  {
    "url": "assets/js/322.71e8d6f0.js",
    "revision": "f9a979c2ac9bbb00e2689079adf04eb9"
  },
  {
    "url": "assets/js/323.edc66ed1.js",
    "revision": "22189329fe94aa1255d66505cc3d4cea"
  },
  {
    "url": "assets/js/324.f95f9894.js",
    "revision": "d7ae2bfa21073a247dae74afbf051827"
  },
  {
    "url": "assets/js/325.4038c8de.js",
    "revision": "4c31542adda4e12a24deab9d18365c40"
  },
  {
    "url": "assets/js/326.1f4459df.js",
    "revision": "46ca357175a4e6d7bb975194a8661a43"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
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
    "url": "assets/js/42.046db2a6.js",
    "revision": "dc0dc3a922a290a723e9cd5463ff9897"
  },
  {
    "url": "assets/js/43.678226ef.js",
    "revision": "f7cd244a0ffae99e6b679a9cc403b0b3"
  },
  {
    "url": "assets/js/44.53aa25f6.js",
    "revision": "2c7d897f62f3e35097072b207ca999b0"
  },
  {
    "url": "assets/js/45.134dce27.js",
    "revision": "bb716fe40e1dce76efc57d8907d2c139"
  },
  {
    "url": "assets/js/46.17e59aa5.js",
    "revision": "42233b847e88b2112a6dd523e8a80ec7"
  },
  {
    "url": "assets/js/47.2ede5b0e.js",
    "revision": "4e1e15f6ab754dbbdcc253ae10a8d847"
  },
  {
    "url": "assets/js/48.ea767660.js",
    "revision": "8146f9d6b8bd201dc923a7fc62f58d13"
  },
  {
    "url": "assets/js/49.0378118e.js",
    "revision": "e2aa5d0e5ff66d05bcf78d314c4bf4a5"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.f8fe3704.js",
    "revision": "52f94d1a77d2ec601816bb02c6dd9c60"
  },
  {
    "url": "assets/js/51.cffd9d00.js",
    "revision": "e9904e816d5bbbb3668ab1b1ef10047e"
  },
  {
    "url": "assets/js/52.30f6cf40.js",
    "revision": "42278aa96e66fb3371250d5b59caa5c4"
  },
  {
    "url": "assets/js/53.d7807f12.js",
    "revision": "5ac6991205cc91e3eeace70287d45a86"
  },
  {
    "url": "assets/js/54.63044d6c.js",
    "revision": "c253669e6bbf8540c3185b63aed2bdfe"
  },
  {
    "url": "assets/js/55.40b15fb0.js",
    "revision": "c4c8a8a17e6d9f31c3f9d69b828aa2fe"
  },
  {
    "url": "assets/js/56.24877a27.js",
    "revision": "a034121f51b31f21a782093a2a90bd13"
  },
  {
    "url": "assets/js/57.ab790651.js",
    "revision": "715dfe44f27bf1c3b1ee38df1b24f164"
  },
  {
    "url": "assets/js/58.91f066d0.js",
    "revision": "120eef2a9e7dcb7e8d49e8139f7eb45e"
  },
  {
    "url": "assets/js/59.3c810c3b.js",
    "revision": "02b6abe5d1a49bd7711825ab312245dc"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.a62bc58a.js",
    "revision": "e6aafaf90a0077f41cfcf0dae803bb1a"
  },
  {
    "url": "assets/js/61.a1f65cab.js",
    "revision": "7bf61b1f8b3f3fca6c000ade280ed6ea"
  },
  {
    "url": "assets/js/62.856a1241.js",
    "revision": "807bb168492d1b69aad71c8e8b8faa61"
  },
  {
    "url": "assets/js/63.1a2216de.js",
    "revision": "ce1d15f57f7f38515521148c868e4120"
  },
  {
    "url": "assets/js/64.3c5e9cd4.js",
    "revision": "a37a1c3cf4a7d895518662ba812ab19a"
  },
  {
    "url": "assets/js/65.067ef8c6.js",
    "revision": "d0e860d771fee3e7646e92a5edd78600"
  },
  {
    "url": "assets/js/66.a862e587.js",
    "revision": "2c36e57e4206bc0bbf907e5ecd51b8db"
  },
  {
    "url": "assets/js/67.dc3439db.js",
    "revision": "8eda9aa774cb53d129246410ddb2816f"
  },
  {
    "url": "assets/js/68.356fdc53.js",
    "revision": "ce03b52ea7af2806eea4185436337e50"
  },
  {
    "url": "assets/js/69.d3c1be9c.js",
    "revision": "e71c4e8e2eea222d9e378a1c7b066c16"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.8ec8a46c.js",
    "revision": "39ee43e095a59c9ebd2e2d8653b0d72f"
  },
  {
    "url": "assets/js/71.e9c4f758.js",
    "revision": "dd3eaf52ce84a752ff1bfdcce2942817"
  },
  {
    "url": "assets/js/72.5cff73cf.js",
    "revision": "237fe84fd5ce2142e5075484851260c3"
  },
  {
    "url": "assets/js/73.d9fc4efc.js",
    "revision": "27f581c714e06170d6dfdf4212d8b556"
  },
  {
    "url": "assets/js/74.7ada5acc.js",
    "revision": "7519aa6253d96605e3a8d95da0c59f80"
  },
  {
    "url": "assets/js/75.f4c3f6b1.js",
    "revision": "286c22e08b254b07653adc157ad83ee5"
  },
  {
    "url": "assets/js/76.88a18d4f.js",
    "revision": "bdd9fbaaa23935b72ada4c0aa3e0d0ab"
  },
  {
    "url": "assets/js/77.97ce3709.js",
    "revision": "d5933bd3599497c3b18fa9ce5c03feab"
  },
  {
    "url": "assets/js/78.92540989.js",
    "revision": "f493b777db6c8196b1e454e252c0eb00"
  },
  {
    "url": "assets/js/79.f43a5f97.js",
    "revision": "aa3b1158e6e36dc3d4e2ea72ff212f4e"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.87396f4c.js",
    "revision": "4cc849d20a0ae6b5b7b4f5c2b838431c"
  },
  {
    "url": "assets/js/81.b2be9a8b.js",
    "revision": "1a296a1338e5c1ff0045f0a04292512d"
  },
  {
    "url": "assets/js/82.b79776b4.js",
    "revision": "3100ffff80ee96209f73aaf3fd19db0f"
  },
  {
    "url": "assets/js/83.c9b693eb.js",
    "revision": "d916657677056c7e29fb864eb6f73be2"
  },
  {
    "url": "assets/js/84.b2c0d808.js",
    "revision": "01ee615e9877f71cd64b3e6055b89a79"
  },
  {
    "url": "assets/js/85.e30a4051.js",
    "revision": "831ccefd3089c4dda98f437d02416a39"
  },
  {
    "url": "assets/js/86.6290b650.js",
    "revision": "f747fb23c754a3265a7d3f978d287cda"
  },
  {
    "url": "assets/js/87.44ee4eaa.js",
    "revision": "d7f4a0e8ec404bcb43a527e3a8e849a0"
  },
  {
    "url": "assets/js/88.d76b3dd5.js",
    "revision": "5ac2dd72ba2c87e74fed637c7df6769c"
  },
  {
    "url": "assets/js/89.d3320b62.js",
    "revision": "aa6e8685563d9716f17da2cc466b3e34"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.911d9fd5.js",
    "revision": "ca575d0d27d160dbe8e3a436cd17863e"
  },
  {
    "url": "assets/js/91.e92d9531.js",
    "revision": "d78d86f824a715e12abe732113b6ce34"
  },
  {
    "url": "assets/js/92.2d7de507.js",
    "revision": "a8e3ad9e93e9c5a3b0df9e0bb8a616f4"
  },
  {
    "url": "assets/js/93.484376f0.js",
    "revision": "d0b784fd2e38eeda778062dc3a978583"
  },
  {
    "url": "assets/js/94.a5921be2.js",
    "revision": "ab01f21cacddd9f301fd9f9f150252c6"
  },
  {
    "url": "assets/js/95.38937b70.js",
    "revision": "5bb70d88fbd1c681988136f8262bb583"
  },
  {
    "url": "assets/js/96.1b771706.js",
    "revision": "2f5ba528f9bb365173f67dd70e0699cf"
  },
  {
    "url": "assets/js/97.4e4945bd.js",
    "revision": "031b3e0ecac4fd502d1609e206bffd19"
  },
  {
    "url": "assets/js/98.17e104ba.js",
    "revision": "e7b716d115b2778e359b89eda6b87c4d"
  },
  {
    "url": "assets/js/99.dd0d24d0.js",
    "revision": "1c7d4acaa29116852c577a95f1d79ba2"
  },
  {
    "url": "assets/js/app.f5d8099c.js",
    "revision": "dc35d20036b80c61d33a857593e43b18"
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
    "url": "basis/algorithms/index.html",
    "revision": "dc503018462a10c7c64839971b5ff930"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a75a5f9db4c91a5a042c5e6900e40bc4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d9007aa8019c7bcc702e02ce9c7788a6"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "45bc19fa2e0a75f01bf1f8bbe27ef2ae"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "070836be75c887e86e6b2d865257a1e1"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f58968001edfe9c68962ddd6fc906409"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c83bb65246a18e30c2f0fc7179220556"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1aa962d57be8552651d2268698f7258d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "41514fc44b23cf792af4ee7824fd9d93"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "86d2444bf9343cbe39234212c90a4b82"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "5f59d9dd0ba8271490d6f5f915f9861d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "8ef820ea15c7524277fe98f719357916"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "789615485c065048f7e58ef23a6ebc58"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "314b90459b50fe0380610e49293edc1c"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "87b624f3d1af90ef760e6508cf437c19"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "54c1bbcc736f4184f1963459e0c804a3"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5638cbaf38e419278e83866afcd0d161"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e71d22fc034fca9b683a385662b3b2b7"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "da2ac033abb6ea81ae7d7b2c67b868f2"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "5b21e8fef3afab79f009ed1713f46751"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "643d5d7580153a45151b7de6d5a63179"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "c2e344d7d5ec5bf7b943e14141fd9a26"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ec35a80140e1aadf26432fdd918f2587"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "ab008ac66dd012db559fdbf08d4703ae"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "b03cb11e0f59f1837102c9dc84b7b868"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "6ca959386e2ee511de97fead58ce6040"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3264422e59ad3e5a14c334c60c3ef6cf"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ccad1c72e4e9571216c9cc5585e40b87"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "d52e701f6880529baa819dd3e554fe66"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "58ec33f9afd8dd395619c737e5042c28"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "d548296323641f373cace3fb1756ff21"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e1b0972a66184ebc01dd2cdc174e3672"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9c40db407093baad17e24dd5078784a7"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "34ecf42b3bedf9d43980c7ea59102cd7"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a8c47b77cfbef0e752bcd768885bec96"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "7d782deb2629beab14d4ea2fbb5c68f4"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "5ccd715d8186ef61b7d268c41951992b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e852f8bc4f758ae839d48ee65010e041"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6a01fe6ecef9c2b35dd48743b41b4353"
  },
  {
    "url": "basis/os/index.html",
    "revision": "78b7d947773be05ade784a1c56d0d286"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "bac04073d9426646cda854b1d7ef9eab"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5d4eb2f5a1ec933e1b0cdf33664e7418"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "215eb209fb2a7ab418670b37e5077cfa"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "8591c5f49f20d301ca6efe64d78345dc"
  },
  {
    "url": "c/audio/index.html",
    "revision": "6d9e9a41405788683e185ac81d9daa0e"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c4b75549af107f22f190fc3a1a6fffa8"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "2e3fb1c62180488cb1cdda7e6c653fd5"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "3a38a617772452339da312efd7f1c255"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "06b8c7a7fe5dbb88dbc772f089be1933"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "08f46987a0bdc3f331106edbad7cbc46"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "5117ffb7c591a352ea1a4a2ebc1deb7a"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f63b28f13a35ad4882f518de7dd7ddb2"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "630ad008a15aefa9112a78df055e0c9a"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "aafc696d942b066350bb9cf78ab76537"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3aeca7ae61cec4dc8792ad541b49ee94"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b3479f55f2deddd3532c6daf8a321449"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "7e0dd55c561cb9aa60e5be93becb79fd"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "84baec7142538fa780b1b4f0aa97c388"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "186bee91af6d24a7a9d48b7005241c35"
  },
  {
    "url": "c/program/index.html",
    "revision": "20d25d06587bf37fc0ddac74cab795d2"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "f2520b0b79260e0dd31320ccd71201b0"
  },
  {
    "url": "categories/index.html",
    "revision": "486225decdc6b05d69e7b13703ffc64e"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "d7066bce0bc4a2745189313135dd3511"
  },
  {
    "url": "figma/index.html",
    "revision": "8fa7e53b91156c2a6544c1dd4566d425"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "257521e39cdf888759001b8a0880307e"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "ce99356df917a2fb56d1200b4342558f"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "1ee98b05f0d3c70f2149d15a172b4437"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "52447443dfff4ebcc6f2cd57e2821fdc"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "c295c1f3edceaab1bf378f5a63312347"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "0cde556d5e692f9bb8e8201dc46167ff"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "978c36f72dcf34c07fff057c31948eba"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "3b1a23457d63580fee33c4e461cd6809"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "2ac313dd3f6fc285db5ac38d03f8768c"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "d8cb839e0de1b4d6656ee69ede3f0659"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "39d8c30cf9aa100487e55eaf58133c4a"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "5f3829510eb468ee85980ce07b4a2543"
  },
  {
    "url": "flutter/index.html",
    "revision": "dd9e69f261eb0b27d8e93ef4fdc354dd"
  },
  {
    "url": "flutter/point.html",
    "revision": "42ea44bc71dd67083ce6ef1c96fc3db4"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "215794aa055c1b9325496e462c278094"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "6ce0437cfe9009d0a3dbf16a7d5a79ae"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e1a8e60f5f4812425793159311a8d42b"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2b7a5c69c2edac23bbbabc5d3ccff32b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "07de76db8e6dec86d6aee85b8c3bee73"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c430ae67035378aa94533154596623d3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "eb22287e03076e3cee977e3694956ac7"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "c996c1849ca20f9c3f9159723015b8c8"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4c3598b39c0231c27d6a7c8f3e24ccd7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "19f2c64922a632e30cb4ae460e0d7179"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "b88ae37182640e76eb9100f2ae5a4c74"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b167bab1fcfdbd26e090e3f81c8cfd9b"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b72e8ad7f72f45a0c61cf9fd72179d8f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "688c7cb5a2fb5aa2ae39dae8ccf3bc9f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4d5e586f09b6215bee0443cd7aa22c08"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "26dfad21d78a35f91190c7c131488fc3"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6f3b9dec3c5a1ff389f9e1dcb45781ae"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "2fe6752da4af3890d8f3997944472f1e"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ccf442019cb199203264eb0a12c8de27"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "0eab7510bf746ae3d7b6235e5d926da1"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "6633890e4f0fedcb0bf2c1ec19b8394d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "4c1037b5b326f388b157cdbdda2b24a7"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "ff28f8bb5de4a075571f9989ad17b6c2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "905afd202441f53b5bfcb3d823bd1a68"
  },
  {
    "url": "haskell/index.html",
    "revision": "2ef24f1844986bcd77653b80690ea973"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "index.html",
    "revision": "9a865cdfe762d51d1189b9f43ae96df1"
  },
  {
    "url": "java/index.html",
    "revision": "a0bb06f77e2083e0be6cb2b373d00001"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "7dc2fd5c3c133953ec972d796c5b766b"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "a17e5cbb73f41b1ab2d103a4169c2ba6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "26b347726fc804bdec4bcb0bbb06cf0f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "df9f532c3455b5f81b4e634941d030ce"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "fd58498b9c1af42dc938e5d587e40668"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "fef3d16c2b4aa2146e716c0526f47a72"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "e7ad06bd7a305cf92b64d7b2d3579f70"
  },
  {
    "url": "python/index.html",
    "revision": "455f10cf7ea5678701c23d9f25a98da6"
  },
  {
    "url": "python/poetry.html",
    "revision": "286e6368876b20f16168ef3a970da70f"
  },
  {
    "url": "python/pyenv.html",
    "revision": "089bde64fb5d140ed0a9315d146512db"
  },
  {
    "url": "python/python-ase.html",
    "revision": "221da582b6255527a1fbb14aa9ea1de8"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "9e26f0e6b8a6b5d30f2e231161f703a4"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "f10fd043399fc4f98b64a91db4402a3e"
  },
  {
    "url": "python/python-file.html",
    "revision": "599ec1632de06ff0fd36c34106184af7"
  },
  {
    "url": "python/python-function.html",
    "revision": "4d6a73681ac8d00a330ffbfeb176ac30"
  },
  {
    "url": "python/python-generator.html",
    "revision": "1d24afadecd3ccc721c691cb8b602ce3"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "98e4e5b2bbac09a9a08196d4d4e64109"
  },
  {
    "url": "python/python-module.html",
    "revision": "b955570f92f5f0c1ccfa00d42cba26e7"
  },
  {
    "url": "python/python-string.html",
    "revision": "d09700d14b5cf3912b606c1c72981b40"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "db25239c4949c685c80486e3ae0f3c5d"
  },
  {
    "url": "read/index.html",
    "revision": "52567d7bd90f730998931954e2dfcdb4"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ff1453f93c67a1755954035ce15d86a2"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7335184055005dabe5bf58c049999992"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "76c302a589949b95e6f0f07be39abe00"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "018b8ef9501db0fd8b8ca25c91ef5ef2"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "a88bad57b139852af18881a7ffea90ab"
  },
  {
    "url": "swift/better/di.html",
    "revision": "bb7fc29ffe58d2f4e712db78367bfa8f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "8b2efd4d01ebc417af7ab7bdea10b942"
  },
  {
    "url": "swift/better/last.html",
    "revision": "4011e9e846fc818f91fda8cf977a8ec7"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "3fb53f6616e044eb7521bdaf81db82bc"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "d00b7c6ecffaae7b9fce7a2699006f85"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "7940ce5dad73f20cbdbfaa737fa70e11"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "35214e9572c2a650d77a730543746826"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "5f0a4aa3f240f8db6498e67b03d060a2"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "e3835160104337db02d6d44e7ec4c32f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ff2ee7e1fc8df0c03fb5d8a297c18f92"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9cdafac178899d51f2bc7155109aa9ed"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "bc5a22e89ed020ea850c055d97fce57c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3115bfbbe5ed6c7e79e9f4b786511d4f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "fc23fc1f97d6baffcd6e43a1f05f34ed"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "40aeb7e73c0805f2dac7d71aa99b659d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "1f298fb7aec0ff3fa4d3ac654f690a8c"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "c1fa86ee714337ddebfd2308b86f0864"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "95984a350b530b5614cfecd92acd15fb"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7fe9288504ed4345a480df11ad346acb"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d40bc8205627c1bfe82cd4d23ce9364e"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "53bd2938c0a93361096d9b431b87ada8"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "a8ed59a29cde388260f1196df8ac4d18"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "6d29ef018e4cd1350a45695213af22e8"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "ed88fcc8aef9062b7e7f90af590e2376"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "8591a4672bcad750a6a1e1344d47458e"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "25ee7cb23abba1be6bbf2f579e429990"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "1b14e85a1ececd973f242cf3704c7d72"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "9b8541a73195b499da5db8c437930cc4"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "9d55b25187075cfdb71d5f38fee4dffb"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "854b62e8223b75245897fab977c6f12d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "8a26327010751887520d1d46a79d1b49"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "124dcc31b26167f876690f8a4904f0f8"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "659f0053fa7e6b3295f4f4bec0d41574"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8206bdb91a078936bf7e5c99582c15f4"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "1a5ae8f8c0ddebe35db3ca5c1c981ff7"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "06b97ce764228e3795a3256c2e6ff6e0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a084b49979382071a7c9fb16afe95a2a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "7aa616c7881684874937288c48fda25b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "0e1dece5eae39e659d0bc1dc8f4e7a21"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "fa0bcd24bc1cfa567171e93ef910695e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9a7336ba525179012860e24e65fa4d0c"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "41bd8c36a614182c669503130db48673"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "5bfc8a95de51ae002fb20c40dcce7adc"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1371edc988596d053c54687c8f7b16b6"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b7f96433d46f3e7457dff2373d1ea280"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "40000774bc7aadeb335ffe5dfca89b50"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f1321e63c57efbbc90445e59c787b821"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "e59bb37819f664983ca39d2bc77af1d0"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "da516bc429f2d4400de9fb742f7021d1"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "f67a58806a3710f2f39c54555d114022"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "9c96391b870ed12a2f75850faf377d34"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b3c2af16cbc10a9051580290cb83bc34"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "bde6309822d668b032149daaafb6fbe9"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "a6d8e29efd10cc31afaf274d43502392"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8ecc182fffcc1384fa4b17190784d124"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "2734ec86f23c753a0f8e5d89e84f3ef9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7c7b29d10f65fe08de6507e6bcd14c8a"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "42780ca68d9bc52070ab6c58bb0cf25f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a50f9fb3d3ca8442c6446c5f8dfa7e1e"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1e3251ec7142e63e2550219dcbecead8"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f69f66e1b574dd24f9392df59b070f51"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "0f32bf0ccfbd79dad6383a6f59120241"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4b133770b19f4601925e00b5bf761643"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "634439836e5afc27fda5b4283f2b1ade"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "7390f496e9be83811c95589df927f80a"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "39f4b09fc9c08a595e88d9bed0afbc2a"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1ef015fb6e00cc6f92bac31bc515f019"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "01e38e9e4a00139def88e3c83322d534"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "4d218a865a6669736e021617c5953977"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b93568fc1b24ac362d4a7f8469bf4959"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "c06258033c970b39c12e30a32c6fd29a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ba0afff592dbffd3ab794ae7d470e425"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "0bcfa3489c85e85cdc591ab6c5f99b35"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5d2d80fa3e2185a619db6aa94d6b9d48"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "6f40c90d8ce1b76e435ee93c67bf37e2"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "50f2e6821b904f937a31c0f4c17aee24"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "97256c2303efb3aa582c015b1cfa62dd"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "a4dcea388ac8c282b6aa5e446b846f00"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0eec2908d7cce7747805d742e9e0a792"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "300e522d224b0e3cef3fd37bce197de5"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "213d23285acee7c603ce483a12de3f55"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "dbf10be893adefc407382c44ddad07a1"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2860fba7be526fd57595da9c794d1e25"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "1c25ea755bc929a522ab3e03a38f4d10"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c474c9eac74d59afdf2f8d8c46f4a589"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f9054902cb35333d0cbefa9a0f0780c4"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a1d0e45832138643e3998d3af60f7838"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "c6378d5491872131a0514224507c530b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "10b316435c15ffada7d991daa6dfb80d"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5293138eb25596cac4c4142bea7f329b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "677ca65951239979d180499e5324f78f"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "bb8a658ecbf0ef653d7325c23dbd0ee2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8fc7a7ff098ec367afc2ee9a9d70cdcd"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4c4a3becc5aa4a33cc24d45078c0196b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "75e9b8bf1aa68d0bdce6b68902242cc7"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "4bb7a6ff37938f93fa51c7b2f0201b24"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "bb08fc058f4b1bf89cad60a5e25c0992"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "ec9e22b1bad8fa277dca259a16bca160"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "3118336e2ac80db71480bad8929326d5"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "71aac37603903ed43ebe5e1014863f2f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "dcca0916901fcdec66d3a4f38373b9cb"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "6ba1ea2762e969737cd8aa1d2490d9d2"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "a08329f7db9032f247f6209ae24f81d6"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5c376ab1d87dc5801760ea251b179d91"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "11e9189e46867b959a06fee45a20d56e"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "1c44da86f71f48289c79fe55039e8f10"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ddd06379802cb71b5de33bfe0c5d2aa2"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "4f7ac86f692bdb54faa3bfb1681621e2"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "26cfe4837521802cad07e1d41ca53c90"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "01076d7862b02d1249c65613f94d52e1"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "e90281c0227a98f8be1d9f36d6578bce"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8540aa3504e5396a1c9301d86d072ef3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c84ad85b6c1cc6f6eefc9fcb30cc5afa"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3dc37220726c4a85ea6d182d4d90916a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "bbb04b7704a6ce59a6ce9fe9f7fc3bf8"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f5f2af0db90c4bffd59a6ed9426bbe47"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "98b5734db95c63dd40bc642faa314647"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c70383f1fa3a5cac096bdccd43db0a3c"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "3da6ea52a7b8e6719e206cddc161efcd"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "80728c17528d26798360c4cf9e215e71"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "630851e483cba7b574d6c2b13ddd6798"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ae4e18bb08de39a10943747c9fb72e4b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a982e33912c687e45985bdf214be1a1a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "84bb0bdb602a1770d02a157a418cc704"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "53c7ce2b7898d781f62dbad39ae688f1"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "aa51cc252e7e8a22c8861e61028e45e3"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "4e92c5ca0c5cfd27775f4c01cbb2689d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "22f435c5a907d74ec6cc00a2b67dd402"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "38a63171bedcb6e86eeb7dc25850728d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bc86d543e085c99e5bf51e4b203b79a4"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "774fe4a2d58696b11dfc210b54ec9946"
  },
  {
    "url": "tag/django/index.html",
    "revision": "f4ba137b2f4158368d3afbc1912abb02"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "f63b4795c671e175122f97f27995091a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "da4a784efd4f277c384c50c710f857e4"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4d03d2be1b4c2f7eb2c594776e913af6"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0e2eaaf0217204ac3f21e05d71ab3d3b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "861e6b566f4c9ad2eb92f884c3ff9628"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "bc13982e7a242606bb1c97e9f3534567"
  },
  {
    "url": "tag/git/index.html",
    "revision": "285331982588520fa8b8349e40f889a0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "712964d790b4a45c7ac8e5336883ab8b"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c2fda559f5750990c43fc94d16eaf9e9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "19b71bbb8937a4015450379d2832ddfa"
  },
  {
    "url": "tag/index.html",
    "revision": "2e03266380e55ee30e72036cf40060b3"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b54e295380166e630606a66ee8acb4af"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "9b06e51cf22fcf714c5805804eb2d4ad"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "8dc3d41a706473e000f71e74e8140122"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "478db603e8d89afe58be2423a07ef893"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "201dc408b1409ef8cf07f0a8f1c12e9a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "d6ed798cb7f5e65e2c5645762ec28c8b"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "2ca71ea206f6ccc5a04dcefe954d48a8"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f6f8c19e6d666b00425c7bd3508c72e7"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "3c1cd070dc8e8968ef5eb4b60e572cb6"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "04267421d77fa07de90556848507c4f5"
  },
  {
    "url": "tag/java/index.html",
    "revision": "7a345546521b0ceffdad1ba2fb6e940c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c2d508ac7e33f38fd86e45009b5cd3f8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "4fa5a468f30b3ecf17750d1494b184d4"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "6aed69b869458c7f8e7263a79f45d8db"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "c8791cb758ea669456bea1bb5d62c83f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "402365cebd28742dcfa5e4437865507d"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "0e88e10ae95babafe32481f335d39bb9"
  },
  {
    "url": "tag/read/index.html",
    "revision": "57559b2404f1e2ac28050fa5a1be7706"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "e1f08fd6989eb352fab0aecc83793551"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "dedb690404e810e99315919a3f13b261"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "9bc81b9e5a12930f1e853f3f64c9d70b"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "ff950c1200dd8ee40cc3b10e2d6485bc"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "31a539ca68b34540334f245474083f43"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a5ec7d55584379ba3a8373f9cb79d22a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "88f99be76b6e45ce9901adcd5a202d18"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "8f133e6415b96ea53adb977e47629f6c"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "ecf7fb049bbbd0d0424ef290a83779e8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "10083e8132558c7d380aebb9c60f3eca"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5320632917f8a30a4060d092a131651e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "260ef6c8715c1afccc539a53a80c6c2d"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d8a5296ba8aa48e4bf9778d0d97a14b2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "182611ee9b4d8fb3fc237017dabe2f69"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "fb52336b5b4bae764df46650672f6ffe"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a2203db2ddc5cd5bde12960a1099f087"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "c729c88ced73459d406e58e67b7a29d1"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "7ee599dc1832a060064a6ea011cbd968"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "5d4f2e5bc470a8d2a81d35d0582a0cb0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "35d7c55c28f53b7b34cb7f6c339a5148"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "fbba2604b37ee41f3d6b02ca3a8231ec"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5fbf8ccf0a480713ce0725252598b823"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "2263c149beca41cc0089e753b487b55b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "0846583f066268dcf2425a3c5818552c"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "99dccacf4bf1cc037038bb206aaaa685"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "10cf75b716b9e3e3006bc3d907fe1794"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ce224622d9de456f71efc7b7a0c7e839"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a0c505fe855e37470271730e00d2553b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6d74d0c0b6c06971626b6b5f0d491fbd"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2b4d8750074b266df5bee33b1446e703"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b2396d721deba3f4d5cb81d7655ece8a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "27848cf31efb72bf01ab51cf5294d78f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "c6ed41c364ff92d27840ccb81fbf552e"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "13b24302fb985dab6a4ff27858c625ee"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "4e42dd551dce4ce5d03863d311f2309f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2ba80720498f66617936cd34543a22fa"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9ca160c267473c9951ff9716f431d034"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "b7890194fe0269e077d638dc936cc6b2"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0671dcbec07652add41afdf1de0fb7f5"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "55612d2f0313c7dacf5e376b3145672f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "9d51668705c0350e4c9f0d81ea36c0cb"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "748438af8e8e1421c74c29073e80bd86"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e02aabcc0239562992c32a2eadd86ae4"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "dfbcedd1a708f23c9b5f8f346cf168a2"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "c9429bf96dffc605abdda317e0d6d3fb"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4d658c375cd11d04897d1bd483098eda"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a8028eef741792f0c688905114e860e2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "16f937afb912aa84fe8f82085b80462f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "837a8cfcf33f595eebf314a05d104998"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a5aeff48a2a9d23dc0502db2f73c89da"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "710db1164615a51b75c9b446d750ba22"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d46b59b63281af29630c05e59d81c925"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "955face8e6b65336d648acc6f8634811"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "613ed0f626f46781cced293cb2a0ba47"
  },
  {
    "url": "timeline/index.html",
    "revision": "7855a4784d8508ca6708b7d6175720d1"
  },
  {
    "url": "tools/docsify.html",
    "revision": "7b1471f93e437f35c6392c1d28341d8e"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "9d1579127a53a47b1a05945a6e85a1e0"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "7c1acfb36067bd0817b65c30957036ca"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "d2d2656ebe2dc91d8c04e5e6af928c62"
  },
  {
    "url": "tools/git/index.html",
    "revision": "14acda7f087b3021ef2873ff24b5f727"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "738a7343b002522300ee00e91666160f"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6a508f52d34fd6135b22b9b9db05adbd"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "53f6ae2842874849939bc25526cd1b56"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5d7a8d82a1e5df09feb4f49cd4e5c0a6"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "2a31bac9ce161861048ba03bb6d0fe1e"
  },
  {
    "url": "tools/note/index.html",
    "revision": "d8fddb8faf51f0e1ff33612de4f66dee"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "5088c7bea0fad2990a49f5e893b34b1c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d19308745477ef3a117ae91a0737cc53"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8490cc32df95d180ca42c77382ab9c40"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "eae3e9cf90c4e07a626ab04f209780ef"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "7e8a3e675917102b29d83489e62c1368"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "982c2abd312902671f77bcf42c204473"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "84972c328d9cf7bb7b703d6095c053db"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "caefb0ceb73839130124b4cae2acb276"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a6a6cdb1ba4ec3ab6be36abfd0a93b32"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "91c946daeac6242d0577780f8769e765"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "ef6dfe6e49b7eedbe5a82b4e9baf2bc9"
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
