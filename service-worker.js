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
    "revision": "a588dbcf3655db5ab3df5b1af21244f3"
  },
  {
    "url": "about/app/index.html",
    "revision": "299dc0a58661d7205325f678425cf2a4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "54d1a6e25cbdbbed2586735c894dc1b2"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b21ba9c33ce12433eb55366770bd404d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "3d1bb79095464cc00bd325898718484a"
  },
  {
    "url": "about/index/index.html",
    "revision": "cc111761ee81a73d7bffca5abd71b040"
  },
  {
    "url": "ai/index.html",
    "revision": "c7b30914848cb88afbf8f8c4962108bc"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "763a9178a4b7f2d4d66bd5e46587e922"
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
    "url": "assets/js/109.c1d2e040.js",
    "revision": "78d29e45fb8900388e27447b23fdf752"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.f8efcbc3.js",
    "revision": "9c0f7fc050e84cde07e2c752c2791b83"
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
    "url": "assets/js/117.e41bf0fe.js",
    "revision": "784e0f1b19d7f6c67d0ae6f3349fc49d"
  },
  {
    "url": "assets/js/118.282544d8.js",
    "revision": "860f4029da63dea3fe3a5536ca61c217"
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
    "url": "assets/js/122.76bdaa7a.js",
    "revision": "eaa5e240d75a7cfc1bf722be82dd5eb3"
  },
  {
    "url": "assets/js/123.3c01c9e2.js",
    "revision": "688da4bdd5d4492ed17576ff10a6fcec"
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
    "url": "assets/js/126.3f034c8c.js",
    "revision": "88575661320030b14a3e57a396488af8"
  },
  {
    "url": "assets/js/127.c7985cc3.js",
    "revision": "ab80469b07934325062ea995fe692cbe"
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
    "url": "assets/js/13.2ea39f30.js",
    "revision": "df32daa236d6d24d49b15b2e19c2c424"
  },
  {
    "url": "assets/js/130.901860c5.js",
    "revision": "537f6d71a4b0599025ef1678e45b4aa1"
  },
  {
    "url": "assets/js/131.5137a0e1.js",
    "revision": "1d686f065b18ac2aadd3b21bf8c99e79"
  },
  {
    "url": "assets/js/132.53ca3490.js",
    "revision": "e7947d4b881b4e7d377060d6f35b8e49"
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
    "url": "assets/js/14.744c10d6.js",
    "revision": "7856cabbaf7f135f6180957351d76ebc"
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
    "url": "assets/js/161.197e34d8.js",
    "revision": "fac96845350752cf88da182376c292f3"
  },
  {
    "url": "assets/js/162.dd71913b.js",
    "revision": "3b73c49606ce9dfa47e0ddd2922ab7ab"
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
    "url": "assets/js/183.8f60a78a.js",
    "revision": "283591ffd50a9166d75a6af1577c6ab7"
  },
  {
    "url": "assets/js/184.cd4d1d11.js",
    "revision": "073edd85884c674427c55cbbb1b7dbfc"
  },
  {
    "url": "assets/js/185.6c87c013.js",
    "revision": "471ea47fe0f67177a840d855ccfd1a5a"
  },
  {
    "url": "assets/js/186.792c1ef9.js",
    "revision": "ce0ddbf0e2f72bdc63a4ee82b8271086"
  },
  {
    "url": "assets/js/187.55d838ed.js",
    "revision": "27cec8804e0a704a6a9906ce64965d5b"
  },
  {
    "url": "assets/js/188.c09b1636.js",
    "revision": "59a89f2ce297c07be2c7a4b64cdae75f"
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
    "url": "assets/js/222.53c6dbb7.js",
    "revision": "a837fb45ed182d60189e67fc33f7485c"
  },
  {
    "url": "assets/js/223.c413bd6d.js",
    "revision": "3e1755fe8b473709eb0b706b9ccbb6a4"
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
    "url": "assets/js/27.11ae4590.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.9f159f91.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
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
    "url": "assets/js/33.21573b42.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.b2e76c72.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
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
    "url": "assets/js/38.2a4dd5f5.js",
    "revision": "978586b909be63129e5327d1fd722d89"
  },
  {
    "url": "assets/js/39.f781bb97.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
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
    "url": "assets/js/57.a348a0ec.js",
    "revision": "079cc7f25de6b13845ad1ab27fdb4be0"
  },
  {
    "url": "assets/js/58.353dbf26.js",
    "revision": "dca30611bc890fd7e88559bf45106399"
  },
  {
    "url": "assets/js/59.0cdcc1d0.js",
    "revision": "cfb9081127b1aeddff9ef2a0d4ca0df5"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.d990ed62.js",
    "revision": "bbc112cd702807fadc4ef959b441aed9"
  },
  {
    "url": "assets/js/61.d70c242a.js",
    "revision": "334b1d9163eed9e1b2b90afbef02a5f8"
  },
  {
    "url": "assets/js/62.241ed18e.js",
    "revision": "f2232581d471418b0272709ba9d2c392"
  },
  {
    "url": "assets/js/63.1dd4f4f8.js",
    "revision": "d588035567cd9b3e6fd815d2132aa050"
  },
  {
    "url": "assets/js/64.a46be040.js",
    "revision": "8f85290a6c45bc1157b7f22b3165ba2d"
  },
  {
    "url": "assets/js/65.879f76ca.js",
    "revision": "5a46d7e9c87a168f8ce5d4e8928559e8"
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
    "url": "assets/js/68.a3800715.js",
    "revision": "4ebbb0dede9ea3db9b444fe18706e092"
  },
  {
    "url": "assets/js/69.54b75c60.js",
    "revision": "99b85d7ba96eac46f6518494a85fee81"
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
    "url": "assets/js/73.12619a13.js",
    "revision": "c7f97f7c510ff45b9ae0095ef72388c3"
  },
  {
    "url": "assets/js/74.78538f2f.js",
    "revision": "28e51fc6e591f8395b9513f477c2d6c1"
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
    "url": "assets/js/97.652a7b3d.js",
    "revision": "573138623efb3106d08c16ca0cbf2fc3"
  },
  {
    "url": "assets/js/98.c55b5235.js",
    "revision": "3194b0401a39c323063a2d8129f04482"
  },
  {
    "url": "assets/js/99.2b1c9b75.js",
    "revision": "de9fc1597c42776e1308c18e8f0d99b3"
  },
  {
    "url": "assets/js/app.609ea12c.js",
    "revision": "04abfeb79e29ee95cb2ca22e2fe64651"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "8f6521b0cece4960a46d07a85b4c2121"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d61ae015e758ae354f295f137488eb2e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b386eab99fe06c2749713d6eed8840dc"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2c8bb37fca9005d84c69cc9a1218084b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "65a81e7d4d5c7bede36ad79412cc0185"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b1ffebf5e236c46b0faa0ea3d032ed30"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "e91d559d5850d7417b098788c9e97853"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e1143a678f321a52a25187c73c83dc6a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8b0aeabb859a5aeef219346fa1ea9bcc"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "27e5e06c92342025d4c7dcb85d4a97d0"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8b428f6daa8600472655360bfe455b33"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "ce1be24d5400fa34153d684979383e90"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "ded21db356ee76ec357ba800cc515755"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "4c677a49af6e9fa61b8c71ae7d40664f"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "a5de05e1c0e2b0035d61fe02c45aebd0"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "928aa79e1699741137aa8303e91bf230"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "0bf1bf89dcb70d360d30edf7fa3264f6"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "87be996565faf5724991ed1f9f672f07"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "8a29b500f7f64105e4167655be038cac"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "6c2c857e3aeec3e266b5121e663e6eca"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "46fd9a11fe300c1bf482620d30679c89"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "944b5f196644c472b50ce4fb2d303447"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "813687c4a0e69aa16a8b9c54b811f8b8"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "72c9e4e42a72c7cc12b0d3e073cf94fc"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "70ee0efc265a3c013ddb6681cb9c047f"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "dae064d7d43d36b02a82104b6b6fa22d"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "e94761d9b1674f938a4566ec909a703a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "44d680058aa38aeaded88110a9f60d30"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "6ec05ab25dd2c38ad192b98fde60a80a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "71b41a093b6006b263707d823d838aa8"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7bbadb1c749a2425d5aef52f1e240532"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "6f73613926dbd0f41882955ea3075be2"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c7ea8440f73ce5075b5a81dcebe04c1b"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "64d50b10ce73913f70575690e8041578"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "a66f7a7e991189f252338cef94784ad9"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "8d43c7e2c81dace4fd933fa25e1a29c9"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "2cb12d8d86abda6865a24ab334b09dae"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "3c1dbd37e47dc43d632ce5d58330c00a"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "815a3f685e5974dd640b78128b7325a5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "21cc55317e7987bdc2ad7cfd6c9d521a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "fdcb0e9fc9f689323f5fc368389e2402"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f66899ea00463d9d95ad2085e9d33afa"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "68cc8d1e57d3157e9b70e85380080d6d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0c1c330bcf05f4e33adb4bc7a251ace6"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a92b709f9be9460f605a2253ce220944"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "f85d241c87546a6b7b46b2082e0dd068"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "203ef0b2920f042d47ba3bfdfbb1d060"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "6f1a922b8f367aa7d5736027040e41f3"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "0038fb45d57e840b652f867a647f8277"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "cae6fc560b8f1af7e83765818f80e155"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "ac678763291f60fc36266455c1ed63e6"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "368c0c96415f384214ceeb12a40e3ec9"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d8e8c55cc3da1ae24c02740c425f3c4d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "74b2702db6cf3eb78ba358814571248d"
  },
  {
    "url": "book/index.html",
    "revision": "135b0a68230b3a526d92af2b33e30786"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "cf04f2d0f026729cb7d8724b32f6e652"
  },
  {
    "url": "c/index.html",
    "revision": "3326d05d5f2d88568fa9c70ed4012594"
  },
  {
    "url": "c/pointers.html",
    "revision": "f962721d086611acf92526747462280d"
  },
  {
    "url": "categories/index.html",
    "revision": "008000c9ebc9c8f693356d257cf3cd3b"
  },
  {
    "url": "figma/index.html",
    "revision": "a40f54cdbd09179802b485c78094f3d9"
  },
  {
    "url": "flutter/index.html",
    "revision": "eeee3da1dc0e7b238fff0b102d391b04"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2fe031d3b7fcf1f31d1fe40db88ac876"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c7a99530e8b42cb16f06f44ed38e1f36"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "8c3fe7fe60e09f64a49abe0a1274889a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "905236854ceaf08470b6de2d9da623de"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "95d2633f54ba891bc3f4fbdccc16cabd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "857c79440ecaea461de07bc29aaeef2f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "313df4fa5c650df62e0a7f128d694d61"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e6fee9e787f15d488a55b6b747c8ec50"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "b3a65aa03b454a9387379e8b0f365c1b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "edbb04944d23819d7e141984377479e1"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "cc705c1cced72c1ca80c39b1f9f0f972"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f1251ab8aca81a15a19e374dde51a71a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "57e5bed28e63505671a04c1328ce0629"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "6fce6a08a663e0db9d3852175d9752cd"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8db3668ab05ab0874f874568b9ce64fb"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "8a7e353491d386a850e3919ce5c9fcb6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "dd7f206d3263f5e127d424f8a370db39"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "dac0d11ab9a85919031d2004740c98e3"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e4d7e6d888dec67777a9cc1a7c343e2e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9a16d6c716c1e2cbfa44ad7a20519eb3"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "eed706ead014c0cdef5615cb2382f0bc"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "940e3ea957dbaf5cd1c47dc2b2936d50"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "328e6c1d6294152a519b2355dfb24a99"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3def555789f8d213344b3cb48182bb1b"
  },
  {
    "url": "haskell/index.html",
    "revision": "558c276d5f06227652069a8c7ecce084"
  },
  {
    "url": "index.html",
    "revision": "167efef3d78f435f178ab97c089958ce"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4a08db4e99577b744910979d3e8ee0c9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "fca62a52d4d3a9367681abaec6bd857f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "172181336f83a3c264263a8ffd0ff68a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "2437aad9e7781f0667cefc9f24bb4f3a"
  },
  {
    "url": "python/index.html",
    "revision": "2a4178d1dadfb1401b31ed938f47524c"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "427b589a922b0d748b09819386879103"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b807816591bb27982df696b7534663f6"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "19008553f656f75b15d694cf1e3be2fb"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "8a076a111c557ccd79505bcad0762f3b"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "eb218822babcdc015c8b0cce6ca89d01"
  },
  {
    "url": "swift/better/di.html",
    "revision": "01eff6ddbe3f4d92f47f5b17bcc73e3f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a01dc33e8786eaf7bc60ad0d41ebf86a"
  },
  {
    "url": "swift/better/last.html",
    "revision": "4a81f0819af15dfb7dc42ab48a8e9d72"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "4904132f7a7c7b89b8092c73bbcdd2f2"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "06ba2a1fce83627862b140dfe79766fa"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "966cb92a4092e230381fdc45cd17d4d4"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "949b9b5768b85a449beba4ca75652db9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6d97995cda88843c2e566c6be8f067ae"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "0009d1b2547caeb8de0d4fabc353868f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b98fdf0e2bf642e17a31e3965f0a2bab"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6df3486cce2a168eb0e055e0c1fc0803"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "13044dc95ae63c531d1390c669e11216"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b936ea53daa47b7228950af8a0fb15cd"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "dbd12971d63b1cfe83ae09beb9005447"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ce42fd26e905c57df542d07377193044"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ab71a4f2d5acff69ec2ecf583e9212fe"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "45a97cd7f13106db782ddedcb9114aeb"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "579177ecaa7550fb38060855a3c2783b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f687fcb67e6bda061ee96e563683d1d5"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "71053ae14c56d8434fe2150fbbfdac90"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "5a35c49b583f9969d9f1660cf0dd5e41"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "fdb19b394e75e8e9c03e799932bfde2f"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "36c0877ac68066278fe2f35002b28eab"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e3f39ce56bf74d9a292f85586e2e8bc5"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "18ef1d0d046e498336a9b4fc118d0b75"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "d819f098753ca838e552e277a77e4e2c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "96c680d1ab50e869b68d397e6375f403"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "1c0bd244df09e17d8df268f238565955"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "fb4d8c1918d8697bbbc5c6d7eedc7574"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "eed80e0760f3cc714baa65d1a36382e4"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "863e517275bc39d136dad56140e0b9f9"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "3972bacbfc738cf86fac5a87648558aa"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "1027617b5c54df4b5e65ec6bc72ab1d1"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c732f2ae5690cb9d04890f2d8a7e26ac"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c2119bb2f2b1d91c34cea339795b842f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "2f5cfca78106d19bf1094c34ca32763e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e048009537813ce0185352006a9cb433"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "d691845df96b5d20b09ed7fc2d8cf3d9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "e3c463ce12329ee4eb10a08783a5ff5f"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d20c666a8e770373af89af60d4fe9f9c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "8ee0ce2879c0c5bb9f8cce89fb0b72fc"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a22506fe4609f97e33c414096fa62306"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b3dc07fe8c94c70ddda75fb96856c51b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "04a65c9b314e87339363f0ef8791677e"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "3662e01ba0ce5d7bf7b45176ca41f9ed"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e022fb97dec481e8a18828385d5ccff1"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "82a9da47dba662f12d9e4465f028f9ca"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "23a82a75e3ca9d2a3f9100461c9e7e90"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "0ad2600b2ef9922ea253cf4746dda25d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "d6d7a8481b2536eee574b9ed5255dc25"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "677dc5bb9180808c0b2986a8b09b4235"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "974cb96ab68a33503f6aa72398d76171"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "9302cf4ffe222b7ea779e3041fa2a14d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "0732dbf930f538e50f3533b7b81e21e3"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "17b6939bb56a3197a85b86f46e9f5c38"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "ac8fe9ddc4459223467c8c34913fb4bb"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "85e3df6687af09239cb1ffe4dfad7d7f"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "cf7a2ed42b1762f264075e40aaa43ff9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9e0763289295c42f3a5865f29569ed64"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e81f5e9edae08bba7375bf96f71c76ad"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "378bc47c05e29bcb2d80b3a19e6a83c4"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b2cc964ff020c4bfc5c9661b08797f2f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "5ca01900e7fd25595051a49e47d7695d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "b2dd5d647e0b96ae20374633f95e4bf4"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "2094d0e3cd05155b66dad133e65589e1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "fa25c93cf88735253a79ca38657289be"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "747859d1d1ef398cf5b44247222aeebf"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "70de76182d7e84c0c3f695500fed5048"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "d1aaae2c138d380f564006b53ef66ece"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a3f2b73726dcdbedbd008ce80274024f"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "0c9ad5ea701ba360b3f96d3fce1724ca"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5ee8b7e6163830042f1ccedf49e838e9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "aea574c7867c79176089f4b6c4f11135"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "df27c3cae9b2c309f4e3740847cdf524"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "bfda01281371b641b9ee7a08a9e197f1"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "60d25d9892c27d768dc3ff8c86db01f3"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f6d8789ab1c2ff3a5b41f3d2bdb1314e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "e85170b600c904317943691c627dc3d5"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c1e8581df753bff0615db2bfaa644363"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "74e56a0d84da66ccc5150022fafde5eb"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1df4e747890605d902173d0dcf8227dd"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "160b25431a78a43bd95fa7e5735e761c"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "d5dc849a904f69afa6e42037caf85baa"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "35b14d026845ec099f4b67817f5c8428"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c0f94a2bb5d03b66c6748c4751b9ec93"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8c09fe8be908deb8a112622f2279d3ea"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "63a5edce35d757aa673d744989731c9b"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d7d94bcfc52aa6f4b447526cfd24e074"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ae0e9764907334fd03808bfb287e1c7b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4bacd62676fc6280161734bb091b36e8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3352d269ce99a4a3ce3b3a18cba67e1e"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4272b3c1bb816e8af046a2af48c607c0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "94f187a748bceeae020a92b3cd39255f"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6453f62eb4ceb8e3a0eb8450ef1990e3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "eaf6e88db525bfd9220cbba68a446d6d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "46804acaaf42517057a894321e5f0faf"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "6c175aa20882488ef1f62973f90ef7ab"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e25f07988733b65af86cb117573b5ca6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "71697553816ebe4d8b524106387bddc2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8d41c3da147b0c5a4fb11a31de49b2c7"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d24df370088da2e5eb482bc683369be3"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "7b0605988bce8ddf8e1e36c760571b79"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d2718d7f9100b3268ece0990a99b13e4"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "a7dd9a900179fdbce0a60bc24e1b1f5c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b3491883777d28981303e43a0f771532"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "9cb834a01c9ff434300de58132339117"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "4b51fd0537708675368abcf270646550"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "d23d2f8335b08f48774e39b8e1acb532"
  },
  {
    "url": "tag/git/index.html",
    "revision": "75548f050d0540854c51aab45300023e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "8095be65d046ff8e76be226ea930e9d7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e3b53fd336314fe33d8c6ab483157951"
  },
  {
    "url": "tag/index.html",
    "revision": "0471cd09c930ec251d4dba416e8e7a2c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "131f41f38b10e9b6a150d2c2972f8ce7"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "1181fc1b6a89cfb3a9e0bcab18746ba1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "0f3e95d9489153c2d835d5b6d244a0f1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "0feb1d970c234f91db7abfb0bdd2f555"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "673f4402724298fba5c9f0bc4fede904"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "085c208f65a0d23c8cb1b8a990d5c62f"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "658dcb968e7cd4e872e803f264b6b22a"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "1b5ab5f7ca0c8e2cc4c31386d6c42556"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "c8d2c207a1b54884be28cf543ec4dfda"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8c60d8dd4cc11828af1c55076a6caf6b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2efa20cb5748339c1c3c3a53a6fa9dec"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5acb5199a7d84697f7d7e277ad9155de"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "629dadb6d248bc3f2b47ab037839df60"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1efe1dc64eacc8e317cbb6adb1459df9"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "98143505cba24b82c9e82c4a8d7cfb1b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "35d9b715d2acca6701f354b310c4c63b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "16bc1a08309e8b54ad14ca17b6a8cc8a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "5c39e3e359a77c94b95ac41d536b2694"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bf29fa01cb9204745e566b164cd810ca"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "27cbf5f71f8e21ce23febcf1f0d505bc"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c4b63a04b73cd4a9d4fe0c62d16be2e3"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "87d10738496b4114b8ddd2e4b05ca7ab"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "dd1c600861c095648d34d328c5b39bd2"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "f9b92174454be1fe51d1ff6bf538e2bb"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a1a596684d35685aaabaddfd252e1c7a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "06237253574e5907be832a6d7756d25a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8609559b6b321f1a449592bcf6cef8da"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "02f6458ea43039cc355de924cccb7fdd"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "747277605197fcd04318b54b06567aba"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a9b0d59a44854e4928b3caf0b63f044b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d2116c3eeb494fdd7786daed2a60b7d2"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "9ac997965466e326ab48fc93e99202c1"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4da18de623f8f2050eba8e85275592df"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "f093ef7e347a22405b7d68fb02f1a1ec"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3a4c5c7b041b2a2d7d083338c6d5450a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "995a55aff1b49c5de8240076264f190f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "44862baf8d30de69f9dfb941b17cde40"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b0a36f5f5f11c50913a145c9763d7bc2"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "dc1cef138f005285a394bd4a551620de"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c1d04624feb7ee398e3d2489c07138d5"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e18f24be3dc33a85931526642d0734ad"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5926887ab38909b99a795b471c6dd9bb"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5f1e0d802660331538813f29623388d6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "833d6f84fd19be67460a94c7d561e0c8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "730687a746ae2224b8145bf8576e3fae"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "58dcca75ca19b5eee89693a1001919c0"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "50e17e877324c3f8f3e22f93b169a9d3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0d1db7ee2cf46fac4046e773a54e873b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "65840e36b45727cc9c6b3207cf993c0c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ff61b85da124e0976b07446e32835236"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "26868c420d4433927aa4d5cff646579c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "47a2eedb9546a374a213a4939d540001"
  },
  {
    "url": "timeline/index.html",
    "revision": "cdab1559ad7bf760603fa39b1563c244"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c8d50463d98454a728482e1c4e7cf807"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b0b9af406ef2eddb847817f098b579b0"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "2e8232b725b4bed05c7461e753bc93a6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a4ef91f5f38609913c783404f53058b9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0b11fcccb09e305931cf051032622b28"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1c58d4603b81b9492b2cfd97d7e07a9e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "afe0f52db745f128553e36a193662b69"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "83a169ecd983ed1d5ba49669b0a631db"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "840402460bb040bcd0af0b4a5bfd3306"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9e6362bc4d9cf1fcdb5086c57cbedf8e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "463d53edcb96ef157f16c2df62e0c9b6"
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
