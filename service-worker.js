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
    "revision": "3a8ec6135a65291cd9e287ccdcc3a692"
  },
  {
    "url": "about/app/index.html",
    "revision": "f4fd9d979ad7a03f5e285a03fa8b7be9"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9295a03d97dc7f87c934f75d3d9faf0b"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "64b163fd4c04c57621663214f01348a5"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "29d081593bc779b6a0e0b8084e273deb"
  },
  {
    "url": "about/index/index.html",
    "revision": "414992519612a57aa778bac9c30c98c4"
  },
  {
    "url": "ai/index.html",
    "revision": "89a10bac2075e58725c41267530d6731"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "dbb81fa011c494dac460f81a90f622b5"
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
    "url": "assets/js/1.aa25a933.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.ee799951.js",
    "revision": "1b44e14ec81580f011a2130398586b43"
  },
  {
    "url": "assets/js/101.e32daeb6.js",
    "revision": "c49cba948185adacc913c73d7fefffc6"
  },
  {
    "url": "assets/js/102.3e4c4a79.js",
    "revision": "f9d47f65c2794fd5f43bbcc15195f8c3"
  },
  {
    "url": "assets/js/103.db0dd963.js",
    "revision": "d144a3addf3a88fdea6e35458ee7c502"
  },
  {
    "url": "assets/js/104.dc076891.js",
    "revision": "7e1478df296748b7421c5362e9f8f6e8"
  },
  {
    "url": "assets/js/105.8a5a7f99.js",
    "revision": "8b7ee326b56dd3c9ff8340fe059ac167"
  },
  {
    "url": "assets/js/106.9e5b3e9b.js",
    "revision": "c03c644b439c22af9c4c25afae870952"
  },
  {
    "url": "assets/js/107.593bfa53.js",
    "revision": "4fe00068d35e640f4d9e7e53fdb03fed"
  },
  {
    "url": "assets/js/108.33c4f8cd.js",
    "revision": "edd77b6b85780553465d2c13868c6175"
  },
  {
    "url": "assets/js/109.77a44872.js",
    "revision": "0e478e897a0e10c7f23134e2dc5ef61e"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.06fad77f.js",
    "revision": "59df7b83db9d3d8bc133f76c7001a726"
  },
  {
    "url": "assets/js/111.a0b57d44.js",
    "revision": "ca4539d428b4a6b9b1ddc7cd914ee084"
  },
  {
    "url": "assets/js/112.748fa8d5.js",
    "revision": "1c4c8fdd4c6b063ef72dbaaf227a9db0"
  },
  {
    "url": "assets/js/113.5d140245.js",
    "revision": "7071704f77f74e114dc0c23c438ce18b"
  },
  {
    "url": "assets/js/114.2542ef0c.js",
    "revision": "2a68c0c23b8c479851724ddef560f9df"
  },
  {
    "url": "assets/js/115.3a4dbd55.js",
    "revision": "c36787dab42fda42e7e9835da8cd3c83"
  },
  {
    "url": "assets/js/116.9aea6b71.js",
    "revision": "70639963000b0c6158f7b1207ae88503"
  },
  {
    "url": "assets/js/117.759ce694.js",
    "revision": "e1120ee8078d1b29973bc7d253239b20"
  },
  {
    "url": "assets/js/118.11f19988.js",
    "revision": "716e8b5a17b59b9799caa467d871fcfc"
  },
  {
    "url": "assets/js/119.cda8401c.js",
    "revision": "41b9bf233e7cc163c49ff37a7caf5981"
  },
  {
    "url": "assets/js/12.749f4d86.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.c1f102e4.js",
    "revision": "21d025f042b24937ff7c7ee6903af6f7"
  },
  {
    "url": "assets/js/121.65ac2a1d.js",
    "revision": "bcb80600f2dc4dbf86e6b33f915d53ac"
  },
  {
    "url": "assets/js/122.a102eb53.js",
    "revision": "2d3eabe99794a129e1a890a185354e56"
  },
  {
    "url": "assets/js/123.76f4c0e9.js",
    "revision": "25bef5604a285b64b7871d61e7033f91"
  },
  {
    "url": "assets/js/124.3b8dea8b.js",
    "revision": "9d12d76318828f1ee50039528c07b1ed"
  },
  {
    "url": "assets/js/125.028d2345.js",
    "revision": "5d73c02231586d3ac8deb5ec0b7b9955"
  },
  {
    "url": "assets/js/126.abe30832.js",
    "revision": "fda4469d945e7eba4f55e3c035b7edc7"
  },
  {
    "url": "assets/js/127.e25ca658.js",
    "revision": "167bbec0d4266dbe42fcbf88cedf1c24"
  },
  {
    "url": "assets/js/128.9c4e640a.js",
    "revision": "fa57958f4d46b87257f574157b0e7bed"
  },
  {
    "url": "assets/js/129.d44f2a45.js",
    "revision": "83fb55bbfa8c3e49f0a22ae793397d50"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.901860c5.js",
    "revision": "537f6d71a4b0599025ef1678e45b4aa1"
  },
  {
    "url": "assets/js/131.07768310.js",
    "revision": "170636d6c705055c1f10fd98d448af36"
  },
  {
    "url": "assets/js/132.cc018f05.js",
    "revision": "e065432bf25ecdcc0b0dad35eb1139fe"
  },
  {
    "url": "assets/js/133.97732109.js",
    "revision": "876fd9e192aae36e314dd75268292000"
  },
  {
    "url": "assets/js/134.dcc77122.js",
    "revision": "9771153d2d14ea1e7c8a66564623dd16"
  },
  {
    "url": "assets/js/135.1e7ef6bc.js",
    "revision": "df575a8caa8880135ddaec904991e4cc"
  },
  {
    "url": "assets/js/136.e16dbe34.js",
    "revision": "14f796fc2ad0db69d5e4c0be0b9e8291"
  },
  {
    "url": "assets/js/137.d2f7dcef.js",
    "revision": "938c13c26d0bfc05a603ae68b1beab91"
  },
  {
    "url": "assets/js/138.b5413507.js",
    "revision": "bd51aef522b2a1aa9e10bf62d884c8ce"
  },
  {
    "url": "assets/js/139.e72cd973.js",
    "revision": "6acd61725a4a2550fdd43c667cc098e7"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.8e04e96d.js",
    "revision": "1b909de48558bf9d87568b721c1b2287"
  },
  {
    "url": "assets/js/141.e2080ac5.js",
    "revision": "fe5756e7ca0dc206669ba96bf551941c"
  },
  {
    "url": "assets/js/142.80404179.js",
    "revision": "9903b77379d10e6c03ae52c13b4f05bf"
  },
  {
    "url": "assets/js/143.c8e99520.js",
    "revision": "d98760bbc0da9b5b068d3e664cab7e8a"
  },
  {
    "url": "assets/js/144.0daa58e2.js",
    "revision": "567a383c276cabef74c2bcf71e1ce535"
  },
  {
    "url": "assets/js/145.a6ac1047.js",
    "revision": "05aaedc77bab95bd87aec43a82937e87"
  },
  {
    "url": "assets/js/146.0821dd0a.js",
    "revision": "66a4c0f8432b4084d40cf66b60461ba2"
  },
  {
    "url": "assets/js/147.37a82552.js",
    "revision": "76c2a45a7a82f8964d0ccce757b2b696"
  },
  {
    "url": "assets/js/148.77f111e3.js",
    "revision": "d3937d8ee0d28429231d69a61f864fa8"
  },
  {
    "url": "assets/js/149.4d5bbf30.js",
    "revision": "dbcfef8681a69b5e48b4500fd8800254"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.8ad50d10.js",
    "revision": "0c29a3b30911a6fea09bd65487753a82"
  },
  {
    "url": "assets/js/151.7b9fb596.js",
    "revision": "808fc0c1ab4db1634258d39ba0ab7d36"
  },
  {
    "url": "assets/js/152.bf1b7640.js",
    "revision": "b811e156184ab1d6068e1bd283b6613c"
  },
  {
    "url": "assets/js/153.83028b17.js",
    "revision": "e983e0a7130624e3fc2f1b86ad1c03ad"
  },
  {
    "url": "assets/js/154.bdc8f259.js",
    "revision": "f88ae3dca9623a8f2186db853e573a20"
  },
  {
    "url": "assets/js/155.de269c16.js",
    "revision": "f8542648de6e62cc48859e1c557426e2"
  },
  {
    "url": "assets/js/156.c15d4ed4.js",
    "revision": "53125c1b4b521024e4025576f287f8e1"
  },
  {
    "url": "assets/js/157.52d72f54.js",
    "revision": "475cd7e6db6b8562a3d07503cfe90760"
  },
  {
    "url": "assets/js/158.b053a88e.js",
    "revision": "c0d48b0f1c255bf4a25a15aab1fa7a04"
  },
  {
    "url": "assets/js/159.617e9bfe.js",
    "revision": "d8002192da43a1240a8ee02375c264d2"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.e43e0cb3.js",
    "revision": "023d8d31ff1a29e01540d616422f0276"
  },
  {
    "url": "assets/js/161.895bade2.js",
    "revision": "207ab14e44ba6053bc011f8d344c66af"
  },
  {
    "url": "assets/js/162.41de4ace.js",
    "revision": "f7cba8c1da7b28279e1823c69574a8a2"
  },
  {
    "url": "assets/js/163.cd2e3536.js",
    "revision": "e43414f7db0594fe3625f47fd18f6142"
  },
  {
    "url": "assets/js/164.56f0f663.js",
    "revision": "e81384e582e84e7582a7481470649be6"
  },
  {
    "url": "assets/js/165.68cf5c07.js",
    "revision": "680232663bda0379d54543fa31c3617e"
  },
  {
    "url": "assets/js/166.6af08286.js",
    "revision": "7c0cf7c9a0d8a64d6322a4e991af4d92"
  },
  {
    "url": "assets/js/167.c1ab08c4.js",
    "revision": "bdd27bdcca722524080eeb1be0d178b9"
  },
  {
    "url": "assets/js/168.1c7b256f.js",
    "revision": "8dc152f4dcecbad0e3055e785231da17"
  },
  {
    "url": "assets/js/169.91ff9f3c.js",
    "revision": "7d14770f32ecb1c8e7e3a6e30b5d0515"
  },
  {
    "url": "assets/js/17.adbf4e27.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.49165e2f.js",
    "revision": "493b3cc9656f5d8efdc6823e2b353e12"
  },
  {
    "url": "assets/js/171.e3bf4b3f.js",
    "revision": "db3ef5f3209eb8d0c3ecc63fd3824ace"
  },
  {
    "url": "assets/js/172.b9e88d3e.js",
    "revision": "b1a22764fd8f2052cad882e9a65ce648"
  },
  {
    "url": "assets/js/173.228c0dd1.js",
    "revision": "e97eb2eae37c7571128fa0b1b5734cd4"
  },
  {
    "url": "assets/js/174.147d056a.js",
    "revision": "f7a382b7b8ca44320138e118eedcaea1"
  },
  {
    "url": "assets/js/175.58729f21.js",
    "revision": "0295d1b7a108ae9b418f721f60fe9c8f"
  },
  {
    "url": "assets/js/176.7c85defa.js",
    "revision": "78fcd3a354bb50de3c360dca243627e4"
  },
  {
    "url": "assets/js/177.2b4f9dd9.js",
    "revision": "e9c7fce2da1887292b664908533a4c70"
  },
  {
    "url": "assets/js/178.81277ae0.js",
    "revision": "80899a2b29eeb39900a8bff2bb8d4705"
  },
  {
    "url": "assets/js/179.67fb3d08.js",
    "revision": "f894b952bc20c3a86806d07a32a782ae"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.5a863761.js",
    "revision": "a85b190f1096f3de6bd0032560af6fb6"
  },
  {
    "url": "assets/js/181.c27b13b2.js",
    "revision": "8e5d9967bee10b0ff322c270908b98fc"
  },
  {
    "url": "assets/js/182.fefcdccf.js",
    "revision": "224dbae3e7c6847b739005f6ab3d7665"
  },
  {
    "url": "assets/js/183.a3aa9e95.js",
    "revision": "6e61c2fa6cf8f50c40f994888bbdb57b"
  },
  {
    "url": "assets/js/184.af73a19c.js",
    "revision": "907cd878e160dff5a8e53f293ca2003f"
  },
  {
    "url": "assets/js/185.0ce2e280.js",
    "revision": "b09d5f071b28f3cc023e8560914cc9de"
  },
  {
    "url": "assets/js/186.03e4f15a.js",
    "revision": "47bd041ed7a8df3eea86563790758a14"
  },
  {
    "url": "assets/js/187.673c3f47.js",
    "revision": "1052a6254c8a5ca55209a6b818820251"
  },
  {
    "url": "assets/js/188.c2c8319a.js",
    "revision": "dfb118e5d8d36c2437f48048ca0b493f"
  },
  {
    "url": "assets/js/189.2030465f.js",
    "revision": "8f56e6cb7fc202b55718d1f996f2c279"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.0eb1b5ee.js",
    "revision": "1783b197e99025b7a7b32910d8474a32"
  },
  {
    "url": "assets/js/191.14daf242.js",
    "revision": "c221909cba02a163efe23da54a2f23c2"
  },
  {
    "url": "assets/js/192.c8da01b2.js",
    "revision": "152e4871690cac11478bbc83cd882cf6"
  },
  {
    "url": "assets/js/193.efefe0d4.js",
    "revision": "2f4055cc8d3041833275ef7c1d25bb5a"
  },
  {
    "url": "assets/js/194.fdff1334.js",
    "revision": "4e6c68f571bee039df9a528715c318aa"
  },
  {
    "url": "assets/js/195.d1496b0e.js",
    "revision": "019a74c46054621c488db3102658eda6"
  },
  {
    "url": "assets/js/196.644182bb.js",
    "revision": "9c700a2ff23e339f895b00fb149c5f70"
  },
  {
    "url": "assets/js/197.fe838635.js",
    "revision": "fe49904898b39f74cd090f89029d8a66"
  },
  {
    "url": "assets/js/198.4689bc0b.js",
    "revision": "b5c42a5a9907cb2c6e9330dd02941fee"
  },
  {
    "url": "assets/js/199.320f8aff.js",
    "revision": "d7622fa5b705a23a722f8f717ab63a16"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.04842454.js",
    "revision": "78ba6aedd239bc8bbddd952832b42ac5"
  },
  {
    "url": "assets/js/201.031350a9.js",
    "revision": "672fda95ad7d740d3de1e5e5a7075e7d"
  },
  {
    "url": "assets/js/202.e3980653.js",
    "revision": "2ad27117134120aa5a81c546cd720d83"
  },
  {
    "url": "assets/js/203.91fc618d.js",
    "revision": "7f20e108f036a39db29ddcddc1ce88cd"
  },
  {
    "url": "assets/js/204.492be59c.js",
    "revision": "7b5b519c1f7fdc727f0ccc73ff39e7be"
  },
  {
    "url": "assets/js/205.866e9c83.js",
    "revision": "d9170d5ca11fffacef127bae3f4f6933"
  },
  {
    "url": "assets/js/206.14556584.js",
    "revision": "dd5b290ffbe0f60705d2a3c758c78870"
  },
  {
    "url": "assets/js/207.a819431e.js",
    "revision": "6128b123191788aa8adfa886cf0fc78c"
  },
  {
    "url": "assets/js/208.5182c3bc.js",
    "revision": "38274b2ecfb44180d809954ad3de2c02"
  },
  {
    "url": "assets/js/209.8e3e6c9f.js",
    "revision": "5a661fce376eb515fdd3578d8506ad8a"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.b079d197.js",
    "revision": "455f528758a7056774e94a4cfc216578"
  },
  {
    "url": "assets/js/211.20cddadd.js",
    "revision": "b555cd3374d4f3681283e76a104d726b"
  },
  {
    "url": "assets/js/212.6f431779.js",
    "revision": "d9be01cd333be7754b3a128c8dae5f89"
  },
  {
    "url": "assets/js/213.d1d24eaf.js",
    "revision": "4191ffa6169d3b11092597965714ca56"
  },
  {
    "url": "assets/js/214.9ee0d3a4.js",
    "revision": "37f6dc0558be5fcbea462ff34569414a"
  },
  {
    "url": "assets/js/215.6ac31558.js",
    "revision": "039db3a3169be6f6d035e57865f56f6b"
  },
  {
    "url": "assets/js/216.ebc22957.js",
    "revision": "1612c05995a24a581d0592cd3ffe0d3d"
  },
  {
    "url": "assets/js/217.341551af.js",
    "revision": "5cc5966582f0cb5832849e595ef4c87b"
  },
  {
    "url": "assets/js/218.34fc8d40.js",
    "revision": "ca6ea6d6799df4f5721629f99f31c5b5"
  },
  {
    "url": "assets/js/219.173a17ad.js",
    "revision": "a343d8b16eb5100a8a4faaa752eb1f6e"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.e3b6f479.js",
    "revision": "af5281dcee8630bae870c8b99f1d2134"
  },
  {
    "url": "assets/js/221.c4de15f0.js",
    "revision": "9b3f9ebce1ca2570423de1bd9c257ef3"
  },
  {
    "url": "assets/js/222.53a0c563.js",
    "revision": "1f0e63a928867aa7e558b64c469c7375"
  },
  {
    "url": "assets/js/223.1d68ae95.js",
    "revision": "2bf34be0908f5b7391a4562611ff7a4d"
  },
  {
    "url": "assets/js/224.bb8bcd5b.js",
    "revision": "8144fe8ed2e5ba29b5b456797f038c5b"
  },
  {
    "url": "assets/js/225.1b286d68.js",
    "revision": "0a2cd8426d6edfdefeddd17f2ed55b96"
  },
  {
    "url": "assets/js/226.9d91417e.js",
    "revision": "ddc8fe5480a7e84b5ff76af5cd7858b6"
  },
  {
    "url": "assets/js/227.617b2340.js",
    "revision": "f9ba6cc1dba691fb9ed6b2988c4e29bd"
  },
  {
    "url": "assets/js/23.a2e14971.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.700d0f24.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.ef9e6863.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.4129a7fc.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.a3d2b8d4.js",
    "revision": "acdd7a82e811b326e693992ffffd0d78"
  },
  {
    "url": "assets/js/28.05acc2ef.js",
    "revision": "32da41181adee283c0dbbf0d4b4b7f19"
  },
  {
    "url": "assets/js/29.4f8fc819.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.799edd4c.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.43abe8a4.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.228a1769.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.165b6d7a.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.4d1d7c77.js",
    "revision": "8b5043c2ab2c78b49a14831adc67fba7"
  },
  {
    "url": "assets/js/34.fb1605c3.js",
    "revision": "75a92b33ddd92d62819c2ea561aa90bf"
  },
  {
    "url": "assets/js/35.88962c32.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.b795d8c0.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.356ed9f4.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.72678ecc.js",
    "revision": "45e9d33953807ca1df3d63bb16c232af"
  },
  {
    "url": "assets/js/39.9fe51a96.js",
    "revision": "11df79cfae25297ce437f975e2360fab"
  },
  {
    "url": "assets/js/4.d8a1ff43.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.ab46386b.js",
    "revision": "90c3cf99f395792fa706fc288cb332ea"
  },
  {
    "url": "assets/js/41.34293495.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.8d322209.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.30f504e8.js",
    "revision": "d0b46bad0084bc7cc152a7813709964f"
  },
  {
    "url": "assets/js/44.b28e6add.js",
    "revision": "b9c1a6fa58813164f3d5c0cc4b2ad519"
  },
  {
    "url": "assets/js/45.146ca06d.js",
    "revision": "b6be199ebebe9bb75bf4a9370c81e7cc"
  },
  {
    "url": "assets/js/46.8f48726c.js",
    "revision": "b9a470431df234a822882b7efc9e8186"
  },
  {
    "url": "assets/js/47.e02f0a81.js",
    "revision": "389bbac7bccc98b46e7d512beba3723a"
  },
  {
    "url": "assets/js/48.a956ea1d.js",
    "revision": "b45c999a1b643e45a815e72b0ecacc16"
  },
  {
    "url": "assets/js/49.02734cd6.js",
    "revision": "beda7c9ff34a1223df8a0a11a4b89902"
  },
  {
    "url": "assets/js/5.2d5717cc.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.2f614578.js",
    "revision": "4f61b355ad22a2be9ee40f8a3f323ccd"
  },
  {
    "url": "assets/js/51.5f4fc92b.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.8daaa0fc.js",
    "revision": "189d83f1b6d303cbe3dbf6d25db02d81"
  },
  {
    "url": "assets/js/53.cf23f51d.js",
    "revision": "940519aa9763076a15a7c967ab7e5b4b"
  },
  {
    "url": "assets/js/54.5c79b21c.js",
    "revision": "45452b115966d6f32d225203d8bd2435"
  },
  {
    "url": "assets/js/55.8aef5ef4.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
  },
  {
    "url": "assets/js/56.83002e20.js",
    "revision": "2e843e7c65b7e51ed28faaec8b25b492"
  },
  {
    "url": "assets/js/57.49899604.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.353dbf26.js",
    "revision": "dca30611bc890fd7e88559bf45106399"
  },
  {
    "url": "assets/js/59.f9cea5f7.js",
    "revision": "4987674b1763759b5f8794abe53c2d1b"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.d3a90c41.js",
    "revision": "89fec651e1aaa7943ee00fb1a4df58cf"
  },
  {
    "url": "assets/js/61.b0acf4f6.js",
    "revision": "9b293e3cba5da98dfd45a44634ba21ac"
  },
  {
    "url": "assets/js/62.c85093a2.js",
    "revision": "d635d003fa4962b7c901bccc2d2516f0"
  },
  {
    "url": "assets/js/63.e0c7dfe0.js",
    "revision": "95e0334628cfd5a12cf713d48bb6ddd0"
  },
  {
    "url": "assets/js/64.ca24116d.js",
    "revision": "54b623e74f2918935841da97e705e04a"
  },
  {
    "url": "assets/js/65.bef781c6.js",
    "revision": "9d1a2029aedd41d9838e6dfeb4f45cd4"
  },
  {
    "url": "assets/js/66.df761b43.js",
    "revision": "6ad0a03c45623a2f81495fe3b14ef98e"
  },
  {
    "url": "assets/js/67.bb21956d.js",
    "revision": "e8d965be452f4b4d38887d1b96beedb8"
  },
  {
    "url": "assets/js/68.2cd19773.js",
    "revision": "46f033cc9ce6ebc4726ad4c5fe4922fe"
  },
  {
    "url": "assets/js/69.164acd8b.js",
    "revision": "42fa6a202a508a9deac08c010eae6965"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.07603734.js",
    "revision": "9268d5b0d6ec1d622a3e2b8b980d156e"
  },
  {
    "url": "assets/js/71.52444d5d.js",
    "revision": "3ac21153b1f29e71d832127d4ab834f8"
  },
  {
    "url": "assets/js/72.50a9608d.js",
    "revision": "e6bb7da55c0d4d088f04b3e66a610b6e"
  },
  {
    "url": "assets/js/73.f82de604.js",
    "revision": "cfeaff9d4dd7c8a13e306fc75fae96b8"
  },
  {
    "url": "assets/js/74.02737426.js",
    "revision": "a83fc147816bfe30a9bbe8ae0b7ef6fd"
  },
  {
    "url": "assets/js/75.2fd2a9b6.js",
    "revision": "7999181874be3d307482b2066a5775ab"
  },
  {
    "url": "assets/js/76.550b81e2.js",
    "revision": "2266fb5aa5c48c7ccdf7f888266595cd"
  },
  {
    "url": "assets/js/77.566240a4.js",
    "revision": "6179f6d0eb00fec90994fe2d82b9cd2f"
  },
  {
    "url": "assets/js/78.82d38d3e.js",
    "revision": "fd65112503f2fc7ba6204a30a6f3fab9"
  },
  {
    "url": "assets/js/79.3ad77280.js",
    "revision": "df28cbe7e480167e01dec887c86fddf7"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.e540abc7.js",
    "revision": "2796af92840470be40315419f0262bfa"
  },
  {
    "url": "assets/js/81.5ea513f9.js",
    "revision": "b7d3f9bb0bda55a2240e116f8e635f8b"
  },
  {
    "url": "assets/js/82.8fc3dfa8.js",
    "revision": "29c7bdd2118f8ecf9c29ccdd72d6b854"
  },
  {
    "url": "assets/js/83.2925ca3f.js",
    "revision": "d4af1292cd4ae898c3f1d2471da59b9e"
  },
  {
    "url": "assets/js/84.358fc8ce.js",
    "revision": "d70a9b1f935ea9de502c97c70d022424"
  },
  {
    "url": "assets/js/85.5fcb119a.js",
    "revision": "65f382ec4fcf4a90e98449ad4181757d"
  },
  {
    "url": "assets/js/86.849057a2.js",
    "revision": "9b90ed1e0a7f30916c98be8ceef1ed04"
  },
  {
    "url": "assets/js/87.7a073e40.js",
    "revision": "a7edfcaf8c5383aa8b46217be89c1e6f"
  },
  {
    "url": "assets/js/88.d73bc20c.js",
    "revision": "ce7d9ec7004f5fa0b6d3180de63fa9e5"
  },
  {
    "url": "assets/js/89.054845fa.js",
    "revision": "949336325819b2f7bd470892f304728d"
  },
  {
    "url": "assets/js/9.8d4662c9.js",
    "revision": "12eaac66df0256bca2c181fd1c4f0218"
  },
  {
    "url": "assets/js/90.920c6067.js",
    "revision": "0c57373c8d1c3e295a60f0b3fce79bc3"
  },
  {
    "url": "assets/js/91.4a913010.js",
    "revision": "959b96d554132cebdfaa2dfa93a4d59f"
  },
  {
    "url": "assets/js/92.b66d1494.js",
    "revision": "b800a59d9b80396365a599dd8a1225e0"
  },
  {
    "url": "assets/js/93.2b303751.js",
    "revision": "0b563df63f83f0f191eee7249b5d605a"
  },
  {
    "url": "assets/js/94.5944945d.js",
    "revision": "0a2fe567513c947eef73944d99141840"
  },
  {
    "url": "assets/js/95.e491a892.js",
    "revision": "52990e1866e66996f47727d43b067589"
  },
  {
    "url": "assets/js/96.a17f4580.js",
    "revision": "aff546463cb24a74e1f21c0e41ab8e41"
  },
  {
    "url": "assets/js/97.f24a2eac.js",
    "revision": "22c68b7b4660978f9142b3163e8c50b1"
  },
  {
    "url": "assets/js/98.efda9fd6.js",
    "revision": "af78fb2d01beaaca6f423fdd6e3d91a7"
  },
  {
    "url": "assets/js/99.2b1c9b75.js",
    "revision": "de9fc1597c42776e1308c18e8f0d99b3"
  },
  {
    "url": "assets/js/app.3b2b4078.js",
    "revision": "c36cc922bcb095624ca4f234ddab1eda"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "bb5a65eb9e0bbfaaef68571dc5c58c8e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b12f349e0b40c3fa40e13ff9b37e709a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "265d08c44033808959d4364646e37ced"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e267c091db431255b4b386fe0b38b923"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3ad6500a7b86d9a4f16401981b97accb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2bbff08b75f247582cf954d718669479"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e829d982ad781b7f27435708adf88ae2"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a0eb94c360f0667c87ff20d8f04561f8"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e89aba37932458590a61d5ed644b876b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e46c664991acb4c558c513cd211bf638"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "de7cd276e837e079a0808d5890735de2"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "ab5bdc482bd6fe2b33e214b41ab2e37e"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "365c170b59b8dc85a5af52bcef63cc06"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "5d48bff9076d17add20756ed7103008e"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "b62da6292fc084345a83764d81832ce6"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "705fc86b2a181922e15eb0b59bc4889c"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "799093b5364b136dbc91b8fa3982e4e1"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "0c2112e98c43a6996090e46ec449d86f"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "195967e841ddf05c346abe763412172d"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "8f99ed6c138e06d66c6df3c807134b4b"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "9622533aaa2aeed16f94851e7e3afdac"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "2877f7c2f7337b4c288891b1fab0a96d"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "54208cc9316ce8ce4cf2e0afcda311cf"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "b6de08aca8a39192cd32c724f5c1c75d"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "d5bc5afb8f0ee124c88223f8e3782241"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "b0fe357f9d7eefb14da140f528d160ca"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "0618fa4c307515ad80e49c65ab337f9c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "cbebcc2ab027225ef191db6a048f4ac1"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e59f7b7d6e11f20d0789518830a2eaeb"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "4b8083032b5f2e70b5c566a0bd20c74f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "53b6a1d2394929a9a3cd9e4864780f9f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "f1cade7edbc1cfec1d1584b7900ac9dc"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "800d5220d823ff4cfaf5b80be352bcf9"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f2bb6e0b1f04e80860db47a038f7a012"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "db5b69d04a4ebbd7984aea6a4e5e4844"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "24f7a4dac1776f8fed3ce4b10163a585"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "f91ee16a7ee423eee8cbcaed0bec26e9"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "272dce6316c6234b725f90dda999789d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ace91ef4210b727076b9655cf73c7669"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "55510e6b83b6f2acb3283dc3f7ea6423"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "dd680ceedea2c533d0fa40a15f169e05"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "efa8ec391c9eac624fec6f919880a869"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "48b5e1fb3e1f7f6a8c129bcf14e4e86e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0c3d8cf76eadee97aa8d34ab8fa7cd04"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "ddc2dfdb33466b4caa1eefff4dfdac19"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "bd68234676e8535775c384e868e249fe"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "142368fa76105d03d1d4306ac361d43d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "6111b2c2ee4fa1ed57a1616f2ff3fcc0"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a1874ff7c7d73d68cb965ee5144cda53"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "89decf10f96c3398c73b397f765409ee"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "77393bac3798a1f53330ddb042af595e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "970a6d24c8a3c607c95d56d8c1280d14"
  },
  {
    "url": "basis/index/index.html",
    "revision": "62f81015a218fc4209c63977321bee77"
  },
  {
    "url": "basis/os/index.html",
    "revision": "43811752edd60ad798515a06d1e7079f"
  },
  {
    "url": "book/index.html",
    "revision": "8658a9f626495b794cbe90419ef84867"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ac6750557c36b776de11a7bdd8042a45"
  },
  {
    "url": "c/index.html",
    "revision": "da8d42effdfcc0a0ede67077a0f8d6af"
  },
  {
    "url": "c/pointers.html",
    "revision": "9085d44ef401fd5d27d77416a42ad515"
  },
  {
    "url": "categories/index.html",
    "revision": "c263c7cb72287928f9150d7265606131"
  },
  {
    "url": "figma/index.html",
    "revision": "2d76bcefaf67a1a1e7cb8648de02e7c0"
  },
  {
    "url": "flutter/index.html",
    "revision": "83cc7e23bb9e96cc30a90ba09c2a8587"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ead31ba13a2cf7e6618c5ae029a14b6c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0a0bd99f3d9ade51a2a842edb6edf1cf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b3d89f7de26223fdf0e3831593271ff2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "16da0b4d0a437c63f273360b90b43178"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b3171b6669dca4ac1c4f32ecc5d1c76c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5609d06fadd8fda2b9a0b630afea01f9"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "9cd8b0ec93256148e089d1a13ea5c02d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "aba49ec5a574eae3dce3db59915c8377"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e33bc8beb41de4c3f56ed52f00b56e3a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "64b09f6b34621a1517ba097e0e0a4f79"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "4a76b02b24dfef02e831541c6b51b892"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a556cc21e0b407d1713a3853d1c8e5d8"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "e13f6c190ea4bc2d4a6878232069f0f8"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "72425950586b8e32b7a4d7d3f690dc87"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "bb5e21fb772e9895fd2986784de38da2"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "4c3006da12ee5d2e92cdcfd2309ce823"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "332e63eaa9928c8b16067a8e79699ae6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "48f1396a4c80c700d90658da67ebf113"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "78e5702a4daaa5b8ecff2833b9320132"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "e2b6bd584f766197497b2c883f64235e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b98102ed0340f33d6f3804139fb1e72f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e2f575e0afa1953919f5ed1a58fa0c6a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d663f8083f6aaad863d9679a77f061c9"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e8269f60a9bb0acf5596007e0053d5dc"
  },
  {
    "url": "haskell/index.html",
    "revision": "c152b8244220f7d518198b41bc94e84f"
  },
  {
    "url": "index.html",
    "revision": "77bbbd42bf577bf8d9690c4af158cb80"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e992c20e4b45c9d95fc604d3516e240a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "a3c29bead9e8fc7e57605db1d606e739"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "155be36a8fed48060387f01d6b2104fd"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "57a7e1decd88a502e3004a80f261f104"
  },
  {
    "url": "python/index.html",
    "revision": "3e758c388ac93e6f5f303c64d64d9875"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "0334238224b8920af0e4fb710b06424c"
  },
  {
    "url": "swift/better/available.html",
    "revision": "bc4ae6b7303194ad2a08e5742df31371"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "2d919bd2be8a8314d3bda2cd37cf87a4"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fd1396c2f08152706e124bca3e58a184"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c589335d6c021210b2b9d9ea34a154ed"
  },
  {
    "url": "swift/better/di.html",
    "revision": "703579dc0e8b545706f5536c39088cd0"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c61c32d94d3278288fe6ff99e32da591"
  },
  {
    "url": "swift/better/last.html",
    "revision": "60fbeb15959c5006214e103b9bda4350"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e8447b97eedd78980f207f2737ddf8c6"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "a60f0c985f170aa5b9ee245944eecd52"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1e2bedc9abf03f0c214527e2fb784468"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7a77414159cc7601e80d3549d5a20143"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "9e7ac39b2a878911c24e63d54c3b7461"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "915b9f7dfae9da7d3f4e282fc2015a0b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "04014b48ba75e10f42c30bb2fec251c2"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ca649fa38d997c707df6fea421cdbfdb"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a0a9389dc243aca2b58519fbd3695388"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "fbaaf26df2c7348a2aa4e71c68aa2ba6"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "34f47b0321cb23e17ac7af05c235675d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c25f0c3563f43f23d92d70f8f08cc95b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "bc0696bc06d0a29e05c76b72b7901356"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "cddde1e4f3bafe84f33bfc63227f2732"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "4b1a9c9d98966ec767e0cf3a8dd4585d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b6a1eac2c0449e05eafcdfa76fe6a7b3"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "204f8832d466bcc6152172fb732b82cd"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "08f0f721bd9590c89c33ca31fb06eec3"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6efa3f1301de02c9a96e0b34cc34dc9e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "80036a0a698d9e43033de34c38200dfb"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "8fbe46a819248e011402c6c8f6fa3df5"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "3b6095b72a76b8b13d7166232d7f9ad4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7fc874139c40305bfcc501e0e0a4983a"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "3d903f6deac2f3bffc96ae9f9c437c84"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "7724179c0afaf9208f9b05ed2c30edf6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "32cdf52e09191d04215ea003e574dc1d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "3f3a99fbadd5ff287f360eaf4209feac"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "3a4826642754e4d7e8d9572c287a340b"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "8caf84a47970d8bbac21cf3bae0c9244"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ea2074d1e5ff9e19d9fc7eb2f99ad315"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "dcd1ab5996c2d20f4af7c9e82422da0f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "704231b234c166569507ce4e9a4ef26f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d8a5741397c5aa9ef28c0327c7609a8e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "01c02da52bf9e080319d9e746acb9365"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "0526a83810d4b7963fc6ae607405c26c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f4b3141764ba93690e14cd6a97055397"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "44ad22cf542b818fb3184e9bb64e4bfd"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "b7cb65cc1d06000fb8363cc220286b46"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "447241e08b21e7603a9ad3c7621fca35"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6e96c1f002949e0cb51467b60e59af43"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "f93e6869934fa645ae7c9a8dc910f9b9"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "57292bf7c8469758a6cd71446022a776"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "3c6df8c4a9946287fb90a66718364e67"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "fbe8fed5be4022213c01d500220fce1f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "741e9c20196f7eb782124bf95cf1e1d0"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "d05dc1f5ac2e3855188b709ff444f120"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "c1c02cd1b84c6d79fce9e4d9a1145fe2"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "1753e592bce530f955dfcd79777c1035"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "d41d1b753440f1831532cf535b25c86e"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "e160d26d2f30d2612a72f99b3b86fa97"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "01983e34e13ed2e9411505541b402f00"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "60e056c241ca8daa5d0d6170f1bed5af"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e2f353a0609d1b67cae588a011b3256d"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "511b94439b92fb1de19ee75f9c56be71"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "365369b415f21a79011726607af3e9ec"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "fd647fb637b6907df1ed3a1c6f73a7e9"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "55e4ce41391a63026ea685e2a9163b3f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "bbba6988c2fa7b855e3451d10d261f5f"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "16645087446d007c3e5d1e5e13f15783"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "58aaee1272333c6b9d3b885e9c110f2d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "9d48f5f4a81110f9268a6e0867bb369b"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "465fe32f03e7381253e2df78020f6577"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "b6b59d36bcfa19ec08d4e006f0abd07f"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "ec858d12e512c4cd6bbaa668b60d30a6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "013509b8fb62c4269f33217ca13561a3"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "464754a1e220136f538403a54cc1413f"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a884d1a9e6a2c77dc0000c4eb265c9fd"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "ce094f6a244642dc59910e54f22a2f7c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "b4e067cbe7f3896816bbe44ce19a8354"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2eda5c5c74c2ed6e08bf5cd3c106206f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "f9a505fcb83c3438e0a3f23fe4076a72"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "eed30b91c6a43e0bb9a15751cc715912"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "8e8a8843289cecc5ad85679d47c5d964"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "cc1ce35b05f7f59778446861cb0251e2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "77869a43cb15eb1a01d44f0bac4e22d8"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "f5c5287a055ba0ed9ea78a1671da7b2a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "502b357dc53d6c1c6243e374de262ca6"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a6dc3a0423cc0c0dbb5acf4f64912a4b"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "81bef4fbe78825daa711fa614fc654b7"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "8c5646d460a3d7a14a43bd10b6361a02"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "382a460d9ed820d1e469ebd39f50003b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8b2fd849692cb660869058d459fb601f"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "37868ba29199c650765a2e56f431a1f9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "59496ed38bceb4fcd91fe70b99492f0e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "6d5782942f3f4ca0ae8dceddd5ddb91d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "af6b8904cdcc4907a2a76fed76a40320"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b4220768c36dbef0edd2d060e688a1cb"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b2c2e62e6ef1595bfc81bfca43381ef8"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a48e70cf3f15a22bd2965079ab745589"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d502b95b869cf23e4251ffbff7b45a8c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "092a2bb03ba39d525709b08bd18475c9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "dd1d7ee2391da4a626e6ba13cb2c11cc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "de670a13759bf3ff932470ec83e9735a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "3955b9ac22b0e5d60a4c71fb18daebd3"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c51b422f27a377b3f369033217a74e39"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "268af9fe0b1e0760f25e5bee5ab55230"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "eceb5d98b732b68ee70707bda208778e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d6a7823bb1dd0ab26e9d81e502d925dd"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "7f8ea6efc2a5723e821f273d452ef05b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "15440f3a9f43ec6f8dbc24a70d329f8f"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "af40b439a891bc66897e99b0ad0805a9"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "8a8ef5bff9b2c2e3e05c45324ecea16c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "fbb415beaa6b676e90fbd7ad45078699"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "491c1488d6b53691a9d6c77757e080ac"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "70a72f6fc3554a8dcaed58c5594b0373"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3ecaff34595cb76b23119ce11c56ee5f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "145b69b33c20113bdd163040a93969c7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "72ce5ead701c2224afbf43f6da6e194e"
  },
  {
    "url": "tag/index.html",
    "revision": "a2a52a180c007a405fabffa16648211f"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0343e73a3280ea5bd9e9c12142ed4973"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "5ae5f5687459012486148c50dbeeb09d"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "89922d4be766794f601f65dcedc59b5a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "fcb0d749c33e618d95c799cf2bc20f0a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a001240d5fc600e8750a1dfb60ba58a0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "5e7aeb1002b132761a6f217d8b8990c6"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3d2e5307955fdfb6be70368786d301c7"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d49f81aaf1e227fa5c5aaa6e69a2e15e"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "d2298ab6bff4b154cede69a49161f7f3"
  },
  {
    "url": "tag/json/index.html",
    "revision": "bd0f73d5cf13f6d580d90f754f9052c5"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "63c0abf6f2344289c7f1b4b2d54fcb25"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b8eaf51bfff9ebd799a4e4bd077f85bf"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "79f73dc51b8c4ce4014704f2b5752006"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "6d4c2fc008a8297eb212ccac0b45dcc8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "eeb4b4ce1e01fe01c2fbf3153496dec8"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a7faa426accb3dfa108fde263750d535"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "32def03504b5a295cd59ac25159ddfff"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "b603c22f47ff552522297264a7420900"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "21519f839ef0506dd676ac0058e97fa7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "327ac9d69a828e8aed45f1319d3a1444"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6db04a78fbff21174e1e63c49c1c8381"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "33d5376e6ea84025085cb972ef973882"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "50a8a30783d151257e565a705491f76c"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "906c7c93943f52bd34143cb90f8bd528"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "36a1f4acd00e776ea241a9bc5ef1f19a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "707d8cb73c2184593b6ae7254c88af45"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7afaae0f00cc3d1c2a3725b68daaa252"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "7cbec31443527bc897560f60e6e77625"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8385091a59ca9880a8a58c433ef95780"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "ecd5bef98ea1a196cc5937ad2b752df1"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "115064f8501477ab55208f9cc2afc65d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "1c73a57a229fe5e979c670eb7828a4e1"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "162e3f6f6282ac045b3375a5faa2e9f9"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "c455758d998fdd6ce52fcfa478d5a36c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "13f750fd4791dca981f4a5e3ec653ff7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f3b3028545191cd31a8ca5f44968b5b2"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "81c4aa1740952c382bd8a8262b94a265"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "5b17061c8fb7127cf314f883e153fa47"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9ebcbabfa1ff5f96d907c7de42727e32"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "cb939c53d1db283cf97c4111e43ea353"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d7be4cc5900215ebf4fa18eab3eb83f1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0fb9d388d644f116d3e57ba9e7e1008a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "793e2d49244d9106978a93e016d213dd"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "b695aeb1a2d324ae6151566a8d2ee902"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ee9b16a6d19d851194051e2711733acf"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1752278e6108b55f0929dd57a8db85fe"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "db1f0fcd7ce5747c804d2737a48371b8"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "8f89d49dc634966f052020ed11743736"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "6238f75777e74ba45fd2a354d7673bfe"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3d590515025d84f9f88bd1eeb249caf4"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "8929c920986149d5a7b4dd5d6dfd18e4"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "42fd5915346ed61ac678971634a38586"
  },
  {
    "url": "timeline/index.html",
    "revision": "b428b75da9b2f541c9c2c1e77042529b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5d512ff4a15047dda75ac937715b4013"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "179d952cf78b14a75af58c5e693c4cf2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ecca3e0f4926d269c0e916745afef8d1"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6232623e0596f7da543a28427b84d049"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "8754de00b4df752a088c79f8970734f0"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "5873eff48875c83553b4ae2618c4a6aa"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ebaafb14ae8e017c8f898bacb475692d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0db0087e1a9fc450751694faea1f20cf"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "763a416846c88aa9186b68ce282a84bc"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "abb78f9b3d20634a3b3ae5e93ec4668f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a1d5219d7c1fb8e8ce8a8a3f52967262"
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
