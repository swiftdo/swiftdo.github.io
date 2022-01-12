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
    "revision": "69510b1f113e62c9ecaf80a41594cd17"
  },
  {
    "url": "about/app/index.html",
    "revision": "2de5f640d1a81b3c8f59fe027eadd01b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "28e157305c8466f6ae4f005140b08153"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "68a6a81ab9f32488ddfdb3c7e3923e8f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "3af2509d1a136a3c52db3d25290bc74f"
  },
  {
    "url": "about/index/index.html",
    "revision": "b79a3b026249a35ddcbaf6f84129e478"
  },
  {
    "url": "ai/index.html",
    "revision": "31cde059600ae1f323cf0d14255bde49"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e444ce7fd20b4de83c7b7b63acee2597"
  },
  {
    "url": "assets/css/0.styles.69fe0ec4.css",
    "revision": "b222c2e7ac4543d2fa4d450479a65364"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.b74ea68b.js",
    "revision": "c5e7b23a60464e79980a65df4c084044"
  },
  {
    "url": "assets/js/10.8aef31c3.js",
    "revision": "db678ae30a13ec93f60557067fc212e2"
  },
  {
    "url": "assets/js/100.c62f9a0d.js",
    "revision": "33778d0b9c4826e255a3631da335cdd5"
  },
  {
    "url": "assets/js/101.d9d24b46.js",
    "revision": "5c5cdbadcf0f7ba23023903d6b19b1bf"
  },
  {
    "url": "assets/js/102.88f6e12d.js",
    "revision": "b8584a1c7ecdbe13fc3286966c5bd784"
  },
  {
    "url": "assets/js/103.3dbfcd00.js",
    "revision": "d08214b048e28cf85b49901a302baceb"
  },
  {
    "url": "assets/js/104.7f47bff7.js",
    "revision": "802184f1ff1c55898040bd28c935989d"
  },
  {
    "url": "assets/js/105.15b4e9b4.js",
    "revision": "babd6423655813ea54b5d909fef79de1"
  },
  {
    "url": "assets/js/106.2b7fbe43.js",
    "revision": "2b517fa9f1a4aaddd22238e848cce4b1"
  },
  {
    "url": "assets/js/107.bb0de9d8.js",
    "revision": "2d57a5064ca8e7f89e98234e4634182d"
  },
  {
    "url": "assets/js/108.97fba57b.js",
    "revision": "2baa5a87e96406f331d56ab1064b22de"
  },
  {
    "url": "assets/js/109.1c165db3.js",
    "revision": "c0d6aa0a811df3e95ed3fefd0c134ea2"
  },
  {
    "url": "assets/js/11.5025bd81.js",
    "revision": "8594e2f5e118fb7ef5b9d34cf5c84237"
  },
  {
    "url": "assets/js/110.e87126d1.js",
    "revision": "48187c26220d07f164185ce71c53dec3"
  },
  {
    "url": "assets/js/111.5d557caf.js",
    "revision": "cead74f1d7413c57860baf14d6a75b6a"
  },
  {
    "url": "assets/js/112.97712424.js",
    "revision": "7a7cede06221ed07e986167d1d0fc769"
  },
  {
    "url": "assets/js/113.b4c7f207.js",
    "revision": "84bd9e780c59923957bdf065a22dad95"
  },
  {
    "url": "assets/js/114.976e424d.js",
    "revision": "6bd522e792c2a7c134e8e501e68f265d"
  },
  {
    "url": "assets/js/115.1392fd34.js",
    "revision": "3b3ec9cc3d47dd1bfc9a227865967820"
  },
  {
    "url": "assets/js/116.8f384623.js",
    "revision": "79ffe952df97692bb3a49b2b940ff743"
  },
  {
    "url": "assets/js/117.48c94124.js",
    "revision": "ea5305ae96533156a608e8a46773fb61"
  },
  {
    "url": "assets/js/118.14735502.js",
    "revision": "c2a7f886c5c4b8598ca0ceaa9cd682be"
  },
  {
    "url": "assets/js/119.75a36991.js",
    "revision": "98477237b2aa2c0ad99bb8810db7ec56"
  },
  {
    "url": "assets/js/12.8265697f.js",
    "revision": "5462499b630529b5bd6323abe9b2e455"
  },
  {
    "url": "assets/js/120.009bf038.js",
    "revision": "84f5ebd3eb5e041e6ac60919831d7154"
  },
  {
    "url": "assets/js/121.ff6ea329.js",
    "revision": "d55a1c92664355e98e9d586b65fb059b"
  },
  {
    "url": "assets/js/122.c3a832df.js",
    "revision": "7c80e5752e55f4da78f3d0e5aa840371"
  },
  {
    "url": "assets/js/123.f57a5dd1.js",
    "revision": "0ca76fc72a72a340b5495f2095a46bc1"
  },
  {
    "url": "assets/js/124.2a8f74e7.js",
    "revision": "766592d1dccdc19896cf5314aaed3e6c"
  },
  {
    "url": "assets/js/125.d27437b6.js",
    "revision": "ac9f39976fe708e6b90eb21820c08f58"
  },
  {
    "url": "assets/js/126.21e4902f.js",
    "revision": "26028a5ccbe81349387005233cba1252"
  },
  {
    "url": "assets/js/127.44f85cb4.js",
    "revision": "f8af2d94730e3b1e987cb14b3d669416"
  },
  {
    "url": "assets/js/128.824ff2a4.js",
    "revision": "3422a5dbb5d25889d92e86272d2887ee"
  },
  {
    "url": "assets/js/129.b52c10c8.js",
    "revision": "b552613f4a1843afd75e7793b488e9c6"
  },
  {
    "url": "assets/js/13.bd15f5e6.js",
    "revision": "51625acbf6f6884c4952f5471614a366"
  },
  {
    "url": "assets/js/130.c65ae59d.js",
    "revision": "473c5c3f8700f66258b0d747ec56bc13"
  },
  {
    "url": "assets/js/131.3eb447e9.js",
    "revision": "d47e16b530bf2d30420fd046d096f172"
  },
  {
    "url": "assets/js/132.098d323f.js",
    "revision": "6f5baf22c828f612e5915d0002e75670"
  },
  {
    "url": "assets/js/133.829daa5a.js",
    "revision": "8e83b2003649c8c80add016c8dec6c71"
  },
  {
    "url": "assets/js/134.4ffc4937.js",
    "revision": "1e3618072ca560992e545c8ea00932c8"
  },
  {
    "url": "assets/js/135.5594dfb8.js",
    "revision": "25839685fcbc8754605f62c2d8e011a3"
  },
  {
    "url": "assets/js/136.7b122a5e.js",
    "revision": "f22b1c08c927ec8983cd041d537be02f"
  },
  {
    "url": "assets/js/137.6f475fe6.js",
    "revision": "c97fd2a3aceef37e988243a3d952c1be"
  },
  {
    "url": "assets/js/138.9c83768c.js",
    "revision": "a13dd6408d44824a4bd0a13c0079bf42"
  },
  {
    "url": "assets/js/139.3f0184b0.js",
    "revision": "34a027cd4a35e8853342d52c0a7373a1"
  },
  {
    "url": "assets/js/14.008d58aa.js",
    "revision": "5f4c2652f44fcdd1224cbc3efe80a7e7"
  },
  {
    "url": "assets/js/140.4325c8ab.js",
    "revision": "0f08525a8cade1853c43d8c1c3727b11"
  },
  {
    "url": "assets/js/141.ce47664f.js",
    "revision": "b5be5ef58b9e0ca8a6edbd6582a9298e"
  },
  {
    "url": "assets/js/142.cddcb407.js",
    "revision": "6ee80f0c06de4a0f912f6c79d94f1673"
  },
  {
    "url": "assets/js/143.c5b4dee7.js",
    "revision": "d77e1f25194f5b46966b9b9d9889fe73"
  },
  {
    "url": "assets/js/144.8f4cb2c1.js",
    "revision": "eb5c0c610d136407a42efd9f8ecb971b"
  },
  {
    "url": "assets/js/145.d96f70cd.js",
    "revision": "f5210d2788a66ba5d2f096485c7ec74f"
  },
  {
    "url": "assets/js/146.727a1645.js",
    "revision": "c1a407eeff26070a9391834576790a74"
  },
  {
    "url": "assets/js/147.22efb236.js",
    "revision": "3fe8fca410eb574da4ae020b7af349ff"
  },
  {
    "url": "assets/js/148.2af45c3b.js",
    "revision": "4eb2f41d94b30745767799c2e71b3001"
  },
  {
    "url": "assets/js/149.37dff575.js",
    "revision": "b53996ecbfac7d5482216fbf2692df41"
  },
  {
    "url": "assets/js/15.4056799d.js",
    "revision": "de05d438649de7d6d2be159d20e94f27"
  },
  {
    "url": "assets/js/150.92658a6d.js",
    "revision": "6777370a2b9ca553c4c32d57c51454e7"
  },
  {
    "url": "assets/js/151.50ebd33e.js",
    "revision": "061ee3e6b7ef10d0032d7a2ff7215d5e"
  },
  {
    "url": "assets/js/152.389fb4d5.js",
    "revision": "7e41b3172dc72089e084462a7029a582"
  },
  {
    "url": "assets/js/153.4954b5be.js",
    "revision": "f553bddf00fec391d44c1f2c844f11cf"
  },
  {
    "url": "assets/js/154.6adaab4a.js",
    "revision": "6e8e5b2395d5dbcae859a9a1176b7268"
  },
  {
    "url": "assets/js/155.a9318799.js",
    "revision": "1585a296d7e3584b02a80153bc8b4584"
  },
  {
    "url": "assets/js/156.34d2f2d1.js",
    "revision": "53ca993567ce86158abf18791d3eaac0"
  },
  {
    "url": "assets/js/157.b573a7d0.js",
    "revision": "8f2492aaa3eb4e02d9ec28b780e59fcf"
  },
  {
    "url": "assets/js/158.e78b838c.js",
    "revision": "a65aaf0d43065fba2ca5390911ec2661"
  },
  {
    "url": "assets/js/159.09137e8c.js",
    "revision": "c934c6d63efdf8107ac5447635a0351c"
  },
  {
    "url": "assets/js/16.79c3d288.js",
    "revision": "9bf3a4f61f65515748b77dd7e8a2f56d"
  },
  {
    "url": "assets/js/160.c346f446.js",
    "revision": "a964917fdb80191f46e5b39a22d94feb"
  },
  {
    "url": "assets/js/161.b3fcedd1.js",
    "revision": "aacc77abfb7187a62edf93aa17d4aec0"
  },
  {
    "url": "assets/js/162.825f8e36.js",
    "revision": "7516d9c0ca9b17f22882d47acc022d5b"
  },
  {
    "url": "assets/js/163.0e56147d.js",
    "revision": "5166fdcc447f2ed1253eaca41ac4ed11"
  },
  {
    "url": "assets/js/164.ffa04027.js",
    "revision": "405521a42f74204550d66a46dc653a5e"
  },
  {
    "url": "assets/js/165.30d91177.js",
    "revision": "22f63d8c1c0fd76aefaf9b5226e23701"
  },
  {
    "url": "assets/js/166.b214c9d1.js",
    "revision": "2017f55ac8e90a3429bfb17de1e895d0"
  },
  {
    "url": "assets/js/167.c4478ad2.js",
    "revision": "b207fa77e646d2ea06053d43d4b25a40"
  },
  {
    "url": "assets/js/168.c91fed15.js",
    "revision": "86bbbd64952558e4be5154e4d6e70b13"
  },
  {
    "url": "assets/js/169.e0ac38d2.js",
    "revision": "314d8c4bd078fa34cacfc8c4b3a9a2aa"
  },
  {
    "url": "assets/js/17.ba1dbe51.js",
    "revision": "382cc471d59f865d36ef0953bee93123"
  },
  {
    "url": "assets/js/170.ae48fded.js",
    "revision": "5c5be96e3a87e97c9189c08ad160366a"
  },
  {
    "url": "assets/js/171.8699df0e.js",
    "revision": "71922e34f801b8d04e5505e7e5862f84"
  },
  {
    "url": "assets/js/172.f8d406bb.js",
    "revision": "0b00416838cf1261265c28dc196b4b44"
  },
  {
    "url": "assets/js/173.d502dbd0.js",
    "revision": "2d08ff518f80ccbfd0ba84278d48499c"
  },
  {
    "url": "assets/js/174.2d992f05.js",
    "revision": "1f5bd72b9a51df5a87e33b90f9f5d169"
  },
  {
    "url": "assets/js/175.6241b356.js",
    "revision": "3a1a5733d196673830ecf8d429c226cd"
  },
  {
    "url": "assets/js/176.e3cebf60.js",
    "revision": "3d1b1ddccb4f29f2c7253b9312884c69"
  },
  {
    "url": "assets/js/177.6527a185.js",
    "revision": "b577511dc32dfec1d2fd56674c328f7a"
  },
  {
    "url": "assets/js/178.4f92a5bd.js",
    "revision": "8d6cb3d10c41b0473b3ae75a9e91fd35"
  },
  {
    "url": "assets/js/179.984a2839.js",
    "revision": "553e62d54d75d7c2295b67b4e7ffa26f"
  },
  {
    "url": "assets/js/18.10794f63.js",
    "revision": "8abde94d4cdc8ec6f5713237249a53c7"
  },
  {
    "url": "assets/js/180.9e5607c4.js",
    "revision": "a4ab0432c3018ee61afedbfbaf323561"
  },
  {
    "url": "assets/js/181.04459352.js",
    "revision": "df2270133403b81e751ec8544f7bec09"
  },
  {
    "url": "assets/js/182.d40c42ed.js",
    "revision": "4b608d76ca6eeb885336e4faa30831b3"
  },
  {
    "url": "assets/js/183.66667341.js",
    "revision": "9e0c5fc9fa776aac4cef63b833b98da3"
  },
  {
    "url": "assets/js/184.4bb3b221.js",
    "revision": "461e7c12c71cb5f06356c0273495cb8d"
  },
  {
    "url": "assets/js/185.d09f7dbe.js",
    "revision": "145a165aa28cf4858dfeebb4f9709eea"
  },
  {
    "url": "assets/js/186.ef280cc4.js",
    "revision": "3f6c83121c8448cd7ba56cedd1e0e6fa"
  },
  {
    "url": "assets/js/187.889e212b.js",
    "revision": "dc431db9036d36e5479938b56c44dcc8"
  },
  {
    "url": "assets/js/188.b49033fc.js",
    "revision": "50cd9d5577078597777ab8d63ba7f875"
  },
  {
    "url": "assets/js/189.d6ba2daf.js",
    "revision": "dea7177f22844da9a4fe855e63da46d3"
  },
  {
    "url": "assets/js/19.65f73a7d.js",
    "revision": "b838eeb3dfd9898feff7ba72fd365ff1"
  },
  {
    "url": "assets/js/190.57933d3a.js",
    "revision": "d5ad395e818b744637e911d306fbcd5d"
  },
  {
    "url": "assets/js/191.01cd6ceb.js",
    "revision": "7e5ef71e4d6f1a497365bc768bc52ab4"
  },
  {
    "url": "assets/js/192.5d34af96.js",
    "revision": "596cf89fa81f9211caa32c390c012940"
  },
  {
    "url": "assets/js/193.c202b2a1.js",
    "revision": "33c11705352fc3826784c50b31d44b71"
  },
  {
    "url": "assets/js/194.d15a2980.js",
    "revision": "6a8c4e83d791bc145d1d00cdaa27b1b5"
  },
  {
    "url": "assets/js/195.088c01a2.js",
    "revision": "bdc09381bf6480ee872140bb1488cbd4"
  },
  {
    "url": "assets/js/196.b425aaac.js",
    "revision": "5c14f9c85b7c15c71bc5dd60bb8e0960"
  },
  {
    "url": "assets/js/197.371af9b1.js",
    "revision": "a60f7111608eb10e1079c997d2d3bbcb"
  },
  {
    "url": "assets/js/198.1c087e81.js",
    "revision": "076419778b3014b30abd4f2adfa60cef"
  },
  {
    "url": "assets/js/199.2be04bdb.js",
    "revision": "50cd97bbfb88877291456e38742d3e10"
  },
  {
    "url": "assets/js/20.43bb39bd.js",
    "revision": "097d54b6376cb67662d0c2d278ba8bfe"
  },
  {
    "url": "assets/js/200.e7ebc04b.js",
    "revision": "6695afec0fa0b567f916cdacdc835ec9"
  },
  {
    "url": "assets/js/201.bd18b348.js",
    "revision": "9b539289f8adf9dce1d668b67a7a6c3a"
  },
  {
    "url": "assets/js/202.0685c320.js",
    "revision": "01e0a6e26d4c418583ecc0e0b5733563"
  },
  {
    "url": "assets/js/203.65e6f19c.js",
    "revision": "62d79e7c93cb6deec01c685ed409bc18"
  },
  {
    "url": "assets/js/204.bb66badc.js",
    "revision": "9fa5c74f7a3f7ce1107d6e3bbd965f78"
  },
  {
    "url": "assets/js/205.3cb3d49d.js",
    "revision": "9790e1cb3a25fafc0d14ff507ff0a072"
  },
  {
    "url": "assets/js/206.5eba1f23.js",
    "revision": "3641ef234239c9871b00c065bec26f60"
  },
  {
    "url": "assets/js/207.46e23b69.js",
    "revision": "96fa22ff7476c3c7bdfab1231fd69daf"
  },
  {
    "url": "assets/js/208.9d476ff7.js",
    "revision": "9c6324f3f366f4761830d7dc10d7addd"
  },
  {
    "url": "assets/js/209.b1940763.js",
    "revision": "0b715da95aaf72b89b98c6ae7a32ee7e"
  },
  {
    "url": "assets/js/21.49cdda21.js",
    "revision": "f62e002372f10f249a13479434fb5423"
  },
  {
    "url": "assets/js/210.e5bdfbfe.js",
    "revision": "fe77d2789f92b8b7c9d6cea056b6853c"
  },
  {
    "url": "assets/js/211.04f8e2fd.js",
    "revision": "75f21883f6fb787204e25a61025cec18"
  },
  {
    "url": "assets/js/212.aa1425c7.js",
    "revision": "92a629f34b83bdaf4f7e7ae3a81b28c8"
  },
  {
    "url": "assets/js/213.3772495e.js",
    "revision": "89982ca778ca7a06bc736b0d383e2457"
  },
  {
    "url": "assets/js/214.22c3e063.js",
    "revision": "f655ee004d3fe833b4bbf8a03ede5170"
  },
  {
    "url": "assets/js/215.01f0c9d9.js",
    "revision": "c31cbeb65bbaeff8bcaa889dc0b451ab"
  },
  {
    "url": "assets/js/216.af9ae016.js",
    "revision": "2a16901676361900f68c290376fa0dd2"
  },
  {
    "url": "assets/js/217.b5be1b59.js",
    "revision": "aa9826a9f98184d5fdaed4e4a946b2d9"
  },
  {
    "url": "assets/js/218.034eb29f.js",
    "revision": "9484e13c2eeb6b012a86abfd51ffdd3e"
  },
  {
    "url": "assets/js/219.d612b327.js",
    "revision": "fdeaa86ad8e39b3513936c937448ffd3"
  },
  {
    "url": "assets/js/22.f022518b.js",
    "revision": "2ae04bcaa6d50dbf284b94a86cb0e46a"
  },
  {
    "url": "assets/js/220.0f773eea.js",
    "revision": "ff05d67a4dd01c1355e1d537f18daf2d"
  },
  {
    "url": "assets/js/221.bf8902c0.js",
    "revision": "d0d8ffb8b045402b9b10b1561b3840c5"
  },
  {
    "url": "assets/js/222.a41f1212.js",
    "revision": "7ae668e7cd94b4174bcd084891d81100"
  },
  {
    "url": "assets/js/223.9ec5631a.js",
    "revision": "f5a6c4044cb04d53d19f6729d95cf1a9"
  },
  {
    "url": "assets/js/224.44d0cabc.js",
    "revision": "0fdc233a89778db92f4312ef3ef599c4"
  },
  {
    "url": "assets/js/225.4ebe7470.js",
    "revision": "f8911e00c2c6e4dd06879341ff0bf9b5"
  },
  {
    "url": "assets/js/226.2193ef4f.js",
    "revision": "25c436f790f6a42945c63fe8381af631"
  },
  {
    "url": "assets/js/227.0dc2caeb.js",
    "revision": "8a44cc79e62d06f59fe81c4ebeefa67c"
  },
  {
    "url": "assets/js/228.ab4fe35a.js",
    "revision": "820b2cde8aa1e26d93b7c75c18466cff"
  },
  {
    "url": "assets/js/229.756ee631.js",
    "revision": "8097d6bbed3af57e89bea14a39f82e55"
  },
  {
    "url": "assets/js/23.93005be3.js",
    "revision": "2cfc243493dde2997341a297fcbb27e7"
  },
  {
    "url": "assets/js/230.a27f6eff.js",
    "revision": "36e93af7fa48b2b7503f5b0e9060d389"
  },
  {
    "url": "assets/js/231.b88df31e.js",
    "revision": "8fd23b969c0e9420cb01ec22f0e3d252"
  },
  {
    "url": "assets/js/232.3cd2d323.js",
    "revision": "d274522a19922d11a1485860e2fcf5b8"
  },
  {
    "url": "assets/js/233.f93ec40f.js",
    "revision": "456161373511bc489f0fb1cb45c976c5"
  },
  {
    "url": "assets/js/234.36d164c1.js",
    "revision": "810db8b2d6d91923c235d7735038f555"
  },
  {
    "url": "assets/js/235.c4f9a086.js",
    "revision": "b2c13ac18a2354a6b5fccbb266f09674"
  },
  {
    "url": "assets/js/236.cdde3b56.js",
    "revision": "e7d73ccff86ad4d898c8861b48de0ec3"
  },
  {
    "url": "assets/js/237.43a9c4a1.js",
    "revision": "1417abbfef8a8509cb57756143bd8eea"
  },
  {
    "url": "assets/js/238.b4cb499a.js",
    "revision": "993cdf9a3cfceeedb4efe1fa27448846"
  },
  {
    "url": "assets/js/239.6fcb0d4b.js",
    "revision": "886a2e0579e1cd5f356c7259f9ab48dd"
  },
  {
    "url": "assets/js/24.fa766d47.js",
    "revision": "11901ea467c4494fddf9b3eee5a3e473"
  },
  {
    "url": "assets/js/240.81d46a3f.js",
    "revision": "752a6aed5c01166d2d86aa83422a2c86"
  },
  {
    "url": "assets/js/241.15a040fd.js",
    "revision": "b74242874178101873aafc5ac7548802"
  },
  {
    "url": "assets/js/25.bf035779.js",
    "revision": "004d54d75bca45f31b24ec01494e5a8c"
  },
  {
    "url": "assets/js/26.44892b44.js",
    "revision": "dcc0df5c47b8461dec89938fcec2f1fb"
  },
  {
    "url": "assets/js/27.764532f1.js",
    "revision": "99432bf1678adc13c668a5cbed874d19"
  },
  {
    "url": "assets/js/28.df5b9597.js",
    "revision": "479dd849f9b56b6615d506ff6da355d3"
  },
  {
    "url": "assets/js/29.a1364084.js",
    "revision": "0720d0d60b3582087e2c547cce07f102"
  },
  {
    "url": "assets/js/30.11dc42c9.js",
    "revision": "faae076e7d03f56a668672459f0eeaaa"
  },
  {
    "url": "assets/js/31.a9d1c244.js",
    "revision": "e588b3b55ac9d3ed49d2f9a56d091b3a"
  },
  {
    "url": "assets/js/32.9507e1a2.js",
    "revision": "1a3b73f0e0e390e78c2c729947c42c33"
  },
  {
    "url": "assets/js/33.9b8e0d3e.js",
    "revision": "80266655f26ab70f0626f5b3aa4d593d"
  },
  {
    "url": "assets/js/34.473b07d9.js",
    "revision": "0f2042849367e9a804ac7a8c3f50fad5"
  },
  {
    "url": "assets/js/35.11f60928.js",
    "revision": "8577817d7b6d3a68e9f68223f4cf7407"
  },
  {
    "url": "assets/js/36.d29b01c8.js",
    "revision": "0dfbf890ba45ce6509791ccf48c1e83e"
  },
  {
    "url": "assets/js/37.01e8aaef.js",
    "revision": "e457ffc388388ab296563c375df345a7"
  },
  {
    "url": "assets/js/38.bcf82665.js",
    "revision": "06bbfc1b901b77d450751a6e27dc0e30"
  },
  {
    "url": "assets/js/39.f2bcd934.js",
    "revision": "3fa087e6f57e98e0989f2f9753cb447d"
  },
  {
    "url": "assets/js/4.4da56912.js",
    "revision": "be007d18d61ba5e5f59f1599ac6abff6"
  },
  {
    "url": "assets/js/40.51ec623b.js",
    "revision": "3d63e1a1cfa5699e557dcbf47de8b606"
  },
  {
    "url": "assets/js/41.62074146.js",
    "revision": "313eedb1b1440d47a3cabba71ff3e47d"
  },
  {
    "url": "assets/js/42.6be66a1a.js",
    "revision": "fe4ed1c39b018a4f4c3e0ad7a3621891"
  },
  {
    "url": "assets/js/43.87196e78.js",
    "revision": "50cce2f527fa0d568c11cce4a90400ff"
  },
  {
    "url": "assets/js/44.231397e5.js",
    "revision": "69f4289f25f0a032bfdd2ee80d2f9111"
  },
  {
    "url": "assets/js/45.1302eb5d.js",
    "revision": "5fe3ddd3c7f516a8c2b2171d3a2c6d58"
  },
  {
    "url": "assets/js/46.ba31a452.js",
    "revision": "09b863721993d888b9078b4487f3e17c"
  },
  {
    "url": "assets/js/47.fe911d9e.js",
    "revision": "3e1f2ec7a8b07e4744c91b7e5acfa565"
  },
  {
    "url": "assets/js/48.32470d7e.js",
    "revision": "46140bdf503cc6a8d9a7b4f911a5a28a"
  },
  {
    "url": "assets/js/49.898a1ee5.js",
    "revision": "b1a344a5b85e99cab782ea6c9ad8356c"
  },
  {
    "url": "assets/js/5.7f2a82d9.js",
    "revision": "30727f26786f019a188995fd84df75c7"
  },
  {
    "url": "assets/js/50.939c7440.js",
    "revision": "55c8085eaac62d0af5b90a1c858044d2"
  },
  {
    "url": "assets/js/51.05ae439f.js",
    "revision": "4f264636eada85e6578413dc977874f6"
  },
  {
    "url": "assets/js/52.6975bebb.js",
    "revision": "e15543437e15e1a511471703931f2679"
  },
  {
    "url": "assets/js/53.e9b29dbc.js",
    "revision": "d73a1146014f0ae56a1e49811ef7d9ec"
  },
  {
    "url": "assets/js/54.4f57424d.js",
    "revision": "e26d7493ed3e285a185119e15b9e7f3e"
  },
  {
    "url": "assets/js/55.054d91fd.js",
    "revision": "89cd24f3479abcef7fc0649300a96b4f"
  },
  {
    "url": "assets/js/56.215cb904.js",
    "revision": "cae961d38c6663091cf19fc1dd35465b"
  },
  {
    "url": "assets/js/57.1288e528.js",
    "revision": "5e5bad462f8723e1d3428f4d8fd9653d"
  },
  {
    "url": "assets/js/58.55110184.js",
    "revision": "3f503cd2e737bb1e66755745cf376477"
  },
  {
    "url": "assets/js/59.26ca8cc3.js",
    "revision": "c349339dbeb3d97bdf328bd6095b7c0b"
  },
  {
    "url": "assets/js/6.aec09dad.js",
    "revision": "497d8649a8445c2f54c2be502a578b85"
  },
  {
    "url": "assets/js/60.d67c65ab.js",
    "revision": "65944f5d30340abd627f43f0f64e983d"
  },
  {
    "url": "assets/js/61.c5d6bba9.js",
    "revision": "9a7e5de5fb0047563f1580eae9a59f5e"
  },
  {
    "url": "assets/js/62.bd48a31b.js",
    "revision": "11659cab16d8df85d5c50dfdb4ced447"
  },
  {
    "url": "assets/js/63.f6b33e37.js",
    "revision": "cc1b4db917c0cddee8cecad1ebb2d901"
  },
  {
    "url": "assets/js/64.2fd2470f.js",
    "revision": "67373e9ced75efbc25f6d649d8b840ac"
  },
  {
    "url": "assets/js/65.0df44d62.js",
    "revision": "1f60e65ecbb41c87b31cdd2f7e9dfe07"
  },
  {
    "url": "assets/js/66.8ed28a0e.js",
    "revision": "bfe9a297804a08a266cc9ebea55681ac"
  },
  {
    "url": "assets/js/67.81b145ae.js",
    "revision": "a743a8f89f674db538fb2ee0d450085b"
  },
  {
    "url": "assets/js/68.cd8f173b.js",
    "revision": "dbeba63e34911d9306e65713783947c2"
  },
  {
    "url": "assets/js/69.894fd5d5.js",
    "revision": "66e458c78f5991ae9ee8d7a02a151910"
  },
  {
    "url": "assets/js/7.2ddd48e6.js",
    "revision": "29f7a724dad49be6948ea3383d030d28"
  },
  {
    "url": "assets/js/70.ea09edbb.js",
    "revision": "1a382c41c283a78917a005e87f83299b"
  },
  {
    "url": "assets/js/71.2ae2ac2b.js",
    "revision": "de434da198968183d444f2776060ad35"
  },
  {
    "url": "assets/js/72.93ecd326.js",
    "revision": "0af9063474b6ae7f7751fd86b8e6be4e"
  },
  {
    "url": "assets/js/73.ec4760e3.js",
    "revision": "a1bc8307856b1f9221cf9b0658b65353"
  },
  {
    "url": "assets/js/74.208fa967.js",
    "revision": "94f0b596f429fd1387b1c5b4c2c09268"
  },
  {
    "url": "assets/js/75.7e6395de.js",
    "revision": "cf716bac41dca74c076cd1f2f4c8e213"
  },
  {
    "url": "assets/js/76.09f36953.js",
    "revision": "09ddade6e521685c65acd55a7bbadfb0"
  },
  {
    "url": "assets/js/77.cce35442.js",
    "revision": "c8d5abee9f18e030db9b2c868c5c5c9e"
  },
  {
    "url": "assets/js/78.fcafa482.js",
    "revision": "f2b1e7e0b3648c85da9778b00cc0547d"
  },
  {
    "url": "assets/js/79.0d5189a1.js",
    "revision": "b0eaf3a56e3044d550e14b74df23ee1e"
  },
  {
    "url": "assets/js/8.1fb332aa.js",
    "revision": "b9fc34f5581483f3c49ed2838dde4b50"
  },
  {
    "url": "assets/js/80.152f5982.js",
    "revision": "32451ee30d6212143c884ba658867891"
  },
  {
    "url": "assets/js/81.a32df1b7.js",
    "revision": "fcc9ccff70469189fd9cc8396fed7de8"
  },
  {
    "url": "assets/js/82.cff81b1b.js",
    "revision": "7e88c3f7824a7794415051742a82e4f4"
  },
  {
    "url": "assets/js/83.28de86fd.js",
    "revision": "6ff0cd35f63acfc7b1b6dca60e75ee2f"
  },
  {
    "url": "assets/js/84.ae6455a1.js",
    "revision": "6ee926fab981945353bb5fc527c07c3b"
  },
  {
    "url": "assets/js/85.711b0766.js",
    "revision": "80706ab0154d0e953d269fc94757ddd4"
  },
  {
    "url": "assets/js/86.892a205c.js",
    "revision": "cd1445cacaf0b25314f919220ce5af30"
  },
  {
    "url": "assets/js/87.f6e4162e.js",
    "revision": "5df63e2dd312c151be06cfeffe21282e"
  },
  {
    "url": "assets/js/88.e0475416.js",
    "revision": "3c39fc1685a32ef092bfa9d5d31c60f7"
  },
  {
    "url": "assets/js/89.8579cd2e.js",
    "revision": "08f24fae158a1c760182c663630b9106"
  },
  {
    "url": "assets/js/9.ade5b115.js",
    "revision": "54734064a0c0e2a89a899e44b10dd037"
  },
  {
    "url": "assets/js/90.4cacef07.js",
    "revision": "b46dba81d9ea7fa722e960401228728e"
  },
  {
    "url": "assets/js/91.7cdc02f4.js",
    "revision": "b14a3989b1ada8c4cc6ff35c383f39a5"
  },
  {
    "url": "assets/js/92.481efcdc.js",
    "revision": "45f75703dcc9f88f58a86f1854a04d76"
  },
  {
    "url": "assets/js/93.934cb09c.js",
    "revision": "798855ed3c03338e08b223d9431ee7c4"
  },
  {
    "url": "assets/js/94.7eef7d11.js",
    "revision": "17f6a9a4fcce5a8d7bdf01b823d100cf"
  },
  {
    "url": "assets/js/95.4de89ada.js",
    "revision": "a7e2f2804ab9d7d7fa2675ca5e3c7c3f"
  },
  {
    "url": "assets/js/96.c73e7e81.js",
    "revision": "97b9ce7b0a14877356fd5c2b2566f372"
  },
  {
    "url": "assets/js/97.aacd026e.js",
    "revision": "ed4535508422ae34589eb80ec2487e42"
  },
  {
    "url": "assets/js/98.af0445aa.js",
    "revision": "97e6751c940024121ae5d53b1a466da5"
  },
  {
    "url": "assets/js/99.0de8470f.js",
    "revision": "e35c82e95cff71d52b1ba4f76ca890e8"
  },
  {
    "url": "assets/js/app.1428dbc2.js",
    "revision": "e3aeecd0102cb6e413f85651687310ce"
  },
  {
    "url": "assets/js/vendors~flowchart.65e94d02.js",
    "revision": "0ebcd0f7930734160e15c97a4105a0f7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9e2398095922c7bbaef9ce30ca44044c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "2e17bf6916fa6cb149aad30cd81077b7"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "627971e9046853d682e40c87e0bc592a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3f7de66f48357b177f025b7fd3aa518a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "6b320f568d15e868656f07d99a763b16"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f2fa0e068be30dbaadeceebf6c353c01"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "52a17beb8ae7926411d60090b5cabbe7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "fd9eabeb06d5ade301a3eca5621bb484"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e31b65872acf1bb9ab169f3c5bd6f5b5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6016b501f4e0b6b114624e2b4f1aa808"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "526f425e81a5e901144df9cea67eaf92"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "6a2b22139daf05655df2aa9f75595bab"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "101df266f9982c2bd648093a86b54961"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "3d9ba05c961ee0b9c3b5aa5e609e8f6a"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "a926eedf44b6a27034c6fa1f11c1e645"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "35241cd270eeaf9924b83ce372b10adf"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "048a60b92b5a95629c8e1a01a8840a3b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b7ddf525b6684fa5b3518dad6704aa63"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "5ca370683a8e6ebaf70aeb83d712cb17"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "565e7cf0e18609888ef1c5a3ace2ca62"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "8e744769d49b8719732ccc42ca738ae0"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "89a6f342c11432782359cc9988e846f2"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "fb6798752214a5379585174f775c5c83"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "28146fb6d407323ae10be2d856c646fc"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "1852fc9e22edd91054b598aa8625a0e6"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "81e72985408e26082b2719311a1f4242"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "82b7221168cad4c43f5c933ce5643499"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "43f36f09ed8a4abd79cf2c0c693c3cff"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "5fb4f82d422d17c122446ae30fcca6e5"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "5aa0aec0dfb185c77de8de75b77071fc"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "cdc454810617d438d2c7c001ec490d74"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "a1c1f409e0274a2a101bf15c83cddaa7"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "cbc8d074e805869bead7fc3ee0a9ac6d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a8bebf278daf469b1b7a5d0c3f232181"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "b1dd07f2c021b9d362f665d7643379dc"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0087d39b5e8f0c6af78380ef54b0cffb"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d951d9b17c2230283799047d3ed641e8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b8319ce9373980371084f24f58751679"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0369cc595e1303ecaf26fcda42bb8744"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e9dd1fa04d29cdbe52017d7cf9d848d8"
  },
  {
    "url": "book/index.html",
    "revision": "895f047466aa74643b56f317bd35faac"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "244748e38e665afd7b36b29886d2bbd6"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "58186423092b8a85a752a11e4778b3b4"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c061c07dee4910a70ee18f500514ace0"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b4dda8188a3bd1fd2813e70dfd761d95"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "48bcac3f83f235e30fc0592c6bde66ea"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "b065c8337a965710bc2395aba27a1899"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "eac44baa0c5f7d416cc19077cde4e22f"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "47354485d81c99459fcd778b29ed432b"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "6556b8a692b8b950bc8b4dcfe611b1bc"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d11d9456a59d09ce9e865a12c643359f"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "75a21a37d18f3a4216761d95474655fa"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "1b82bd459f47278834f58980c1e08a2b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "322ebad4c3a51e4a0fe571958712ea6f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "a98128ae5f0611a33f5f7f39c283af08"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "4d787608e80a61d53b334c416ccd6b00"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "cd1920947705d8e67b71be324b61fb04"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0c5ef144a285c631545a5e38592d2f07"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "348d68124bb0999253759ce44913eba7"
  },
  {
    "url": "c/program/index.html",
    "revision": "12edd30846b9404620d7a32f1c24d2a9"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "baa1e20506337df3d1188c85ce89405e"
  },
  {
    "url": "categories/index.html",
    "revision": "fe76332b10900dd27891b14d3190c456"
  },
  {
    "url": "figma/index.html",
    "revision": "8910aa31e00f7c47588c3adcee88715f"
  },
  {
    "url": "flutter/index.html",
    "revision": "b559117d9f3e253d7cd84b4d9313b0ac"
  },
  {
    "url": "flutter/point.html",
    "revision": "630e8ab1c64471838cb04476b4e9e8fa"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4b186121687bc82594688b42837793ea"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "f5bfffab12e2f4a7c48d1e743764f267"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "759583057f4cdaa075d06cef9ad5bf5d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b7a2b68114378f9b859ae9f3d30d7ea4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fd7058ea3dd4093410b2c3d14d2217ae"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0a3a593a4c2c6df32954c86650f05ef2"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5eaf5ddd1e3182a3b17354cf33ae6472"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b4cacd1afc863ecce2c434da08add419"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "6bca8ebe7b9d941db411414b8165dd35"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a9908c3fcbc387d6ad017df610d18a53"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "226245c792767bdce6abbabafc543a2d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6ea9b55c36ad4e8f9f8906042a5da975"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "e27e9587445465c533eebbcf28dc0ae5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "df664ebdba8ca7ae18aa6a4d992d0dd6"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "46625befb036303873883dd29b72d6b8"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "bef0dd27137cae875882ea7eb00bc613"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "95583eacf08deee735505d462ee128ca"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "fa3e2cc2513f328bc76af8dd9e606c3c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "502cd21de13d4bb461eadcd12bcc077d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "765c77146a957aa707cd76b036fab13c"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "577bf8cfb01566f5f4775743ef9fef2e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "586c369d7088425dc7e684b124eb6f90"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "eea4cdac8618e07fae19336dfba9240b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7ca85aa681d8d1b8232e3afea83d0c96"
  },
  {
    "url": "haskell/index.html",
    "revision": "35226ca203704ceb6dfc63f1d1716868"
  },
  {
    "url": "index.html",
    "revision": "9e85406044b004ef6f70e38590b429af"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ffe5226e5ec351073760ffae5394b7f9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7b063c8ab3909a3e533fce8d9418ec42"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "d50727549b82c3c975f3d6c0ea38dfc6"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "44b7c9dcacf0ad4d07cebc2f23539e51"
  },
  {
    "url": "python/index.html",
    "revision": "903024fab6c782f0b27a34a52d0c2d47"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e2077804fe16ec8271eefa3d7a63158f"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e3f96d779c4f10cb59ccd3f94cab4467"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "031e2d02afea999bbf9e5353212fe5a5"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "31ac8b5030ab74ac506908ac34e1f032"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "e702dcafaed4e87698c13e6e77ee8e77"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e490be06ce1134251b878c4060e15ff3"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e205964d411bd5c2dc9d85a645dd8370"
  },
  {
    "url": "swift/better/last.html",
    "revision": "af39c6d844e03f20c3085455956d6274"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2266bebceb74ea34f92d0cb6696b3c88"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "a05801b33a9e77232f04618b7e80f1b2"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c908ba4051ec738db52119d0da021b55"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "88b272bc7e4f860f0b42beadfba0f19e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "457edb64c7c50ea3ef6c59ea42ba1add"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "845467923c2635a1c27d46f5963f419c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8d79e401ad64756c87396cb92c998c68"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "66e007439f4be9f56b6400cbca65e0ab"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "361eada6836627e64e8a4a4f97406989"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "46528dcbf6d7b13c08704461045e0af8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4211b456917404e1786fc4da37048990"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "6a9610ee71a664770b82756942c9f26a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a038e4324f9ad45dc413fff0ffe20b4c"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "a002b1f9ca1a49d65fd13c885aaa0f46"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "245fdcefbb3983756ad827ec0a42a200"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "fa00bb07ed8abe29bbef0944ff9f8045"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0bfb3a575e6315bd28060be18e512f6c"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4f9ced92725bac06883bcb978a12aa70"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "5dcc2f86d1090b78db34425a49138c29"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8b9b39b58e766a89e12864f98e254073"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "816b1c79ab6643bd42360a0e7694a70a"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "8678126dca72e9c77e9e52ceb62dd50e"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f7073f44b69a954629b971d48c453d57"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "8f0d0a969c7446b0fa305f0ad0f380b0"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "416759ec44477140e569139e7471169c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "de6567c5e2806eabc7b90079429537f6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "4f7ba823fe069e303d273134a20109eb"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "dcc0688d331136cb5c1be8a3e9863f81"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "777f710ac932aaa2eb503383b72e483e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ce09b96d70a353003524081501ebdbfd"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "60bb40991140c925000e3f6f9aa0e816"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e8e67335003dd831fd4534f81356db36"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "21f689e7a945f23a8554f9ac2b7487f3"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "e53999b36c445c70b819734dd2b2a5b3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "6a175a6ec9ce320c6a904f2dd1ad28b1"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "f132c3652ec065da0d552fca83d2bba2"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "9c71765a85b8be00a3ce9dea2768a005"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "eb42d9df6ea980ab37e489852333384f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "9484fab62135ce96b6ca7c8bb025383d"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "61e651e83a4090ec1a82c483528b73fa"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "09291fdf2d43ba5595c982f027b673c9"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "41880f1d3c68cc0e3f63415058ea241a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "ea741f72ed498617de9704f915dcb257"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "6f3a05d5bf9d3c9a6481286d066089b0"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a3cd2ba70ddd365b16949ea8dadd5eee"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7cd71cc10a183171b308096b031939f1"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "079927c8801b158013e2077c8b185094"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4aa206556fe19a015a88473cc33147d3"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "736724effed993dea25cb42594a76a1f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "f2d19c4d2e1ad824cb8041882dbdb5e9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "780c2cfd1ef3d26e0075710c2079e6e2"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ee8321690e73b75a42329d619a439055"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "dc601706657a737b6fa8a12551974f56"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5f174a3e631484594a6b32340f6709f2"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "89e67702ea8b5502ec78222537562f07"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "185b04c181d8a52d418a9b1443d6545c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "70912aa7193cb8f18fe8a1faebb09eae"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "9a1ab6c5b3ea060dc1cbfb602a681d6d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "fc561d6931d795b373603a1f5afcef31"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c0eef37a86889eb4adf00a0f76ebd15b"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b957dc8962fa729583c7abd31e2c0931"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c3e2a57b4e3ef3e4ff14d6e0d662e13a"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "09d4e2d1d81a5aae6627a2e2c9ca075c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4da013522615eeb7840995d3986a7a0d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "fb6c5424f4919c8c13f1c3ffdbcf6fed"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "1c880bf35a6b8ba81e331f6d9fb3c18b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5148a2d0da9d821005d5e973f125a34e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f0ca8e9fcfb0e0cdc11b480d37bbd6ee"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "ee5b0fb6b1192b7fc4bebbe34cb3ca75"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "d7995535705dff6cd735f4e509953447"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "82f3e0ce9068d0cbbf0bb5a962b0a979"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "56a5d265cbcbdf6437e4940801ef0b3b"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "06d50a38c445644a82a0898328365df2"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b442119f1f519c6ab57e514605c7d09a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c8ad03d64fbc575733e5c922130a451e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "723323f459a6aac11516f9c4ffb16b67"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a9ad3a32e47da81d249b452f4d0df7cb"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "02aac29d1cca9dad6be1b8afea4e2053"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "073e8b91f8a231beb680e1827c45d4a8"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "671c9d68ed7e0f40c0b2ca835ef00965"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "ac2dc468e13dc58dcddfb9c5d14f6fd1"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "484c8fcdfcbf1432729f508caed98a6f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "1233880075503ade56a4aae9ffa84b83"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d1b4267907f427e99a70174b4e717ec5"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "bf406c5407a795983bbec38b22d698bc"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "869854782a4370e6f085141b5fed6e98"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "52336e093872b237c8b8c82e4d8606e7"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "dd87b30b1f00eff8839aa1dc3d51cfe0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "24291db7f19840ec4003a4478463f570"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9e711f86612ef760b906f9168c0599fb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "765752647eb4d04210739d038d2b3cab"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b3c13b7e2d263b819d53901ec9a850d5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "cb45425846ea5c742aa8c50c96e348e5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d8391de894c218d68b49ac491c4938c5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1ea57011856ba35f5fb4abdde7281545"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "598096767b2195935041a05547b30fe3"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f0faba47232c29df240e1536ebc7ec52"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "071d3ca3817dbfa21c5342a581edd713"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "409baead061e5642d07df6919d622fe7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "85188f0d20ee0475a06464ca42a2bbe9"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9c7245804ce0020b9a22adaf1bffd6ed"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7ddbf628759e9b1d456193702ff59e8a"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "cb30d2c8eb2f433a31c55915b29f9ba8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7d33bafb312c83dace09b062e3fed9af"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1c137ac3673b97c4a6414c50a54fc28b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f9308186519561853410a8ecba73e64d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d6eb819111c37d379d2b0c919fff624b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6e28c59e95b8e9a63020f890577f2ffd"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9d18656cd8e7596eb949ccf06eb67c63"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "03a163228ed733d38e50740e4834d145"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f4d220324d2d3e18349c919df278329d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c7abe14932d7a6b93e7275b961002567"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "4269101a41f34bde23a6f4308e0bbc7e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "24554b99ce1bcaa030ba0450ee9a700f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "8b36b6e7c19f2e368d1ad037079f624c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "590af8f19b3ff12db301e60bf4c7ab26"
  },
  {
    "url": "tag/index.html",
    "revision": "69b7ceaf278fd87aed59a8592ec4855c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "47108c38a384836edfd8682c057f64f9"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e0d4dcb5f26c2f8f004a862c08ceab04"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4832b1d7de9b5d3b4caf6d6d50382fff"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "99401b08cbc15515f8380f7623529a51"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "41499d102d39d0cc94a69e9af838380f"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "3155c08fe00b6ac7a202acee6fc4976d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "4f669210007b0c8c640bf41e89c6e5db"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0742b7f77a59e8d1055d168a94efb578"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "86e2a2574755dc945617b96e87fb2b5d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "374c5030902db68f3644ebc29eecef53"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e996c1acadb287294b37c0dc8781064a"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "ae114cb01e0b54522bdf1d728dfcf9f6"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1100affe70fd3e8d648c843838169ba0"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2cb12fcba5c31f05bc9b8f4be8d54482"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "cb2cca996f3b39ddbd49f3c8a59c17db"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "fc2315e87817d4c34e3647a6404fee7c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "0d144c1ebd613de8f57ca989a0eee1fb"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "54621aa7528144790676bf44198b8561"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ec28db35a8cf779686f08534256a22cd"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "65dc22c49acdabe8dd2ffc15ad6c1340"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b22fee43d688eff79e1369921de2c2e1"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3297f37d718c71f0743904049f6187d9"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "d2774c85bc1ad23bea3d23ec6a266737"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "016985abcf895b473256f541b268bb5e"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "8359a8fe6dcf0192e4b19346b5cb7c1f"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "0f2effaa448ac02246ff9e7f2f8d1619"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5b9227f25afa0b2472b13f681dcc700e"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ddc2ab673708a1d3ab64b1f29e28b94e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7d673056cbff2a3e29c35994646a875a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "56bd8e0338d34ba36c2fc0c1e43056a2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b078f9705b6bf83d13634c3a54f2813c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "fd312df3b343abb403b1d05520669a15"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "be4b219c1b7b9be72f0d291e734357d3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "449c8807c54f8bebd2621e0cb8750301"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "84ebd074da5e09a75b2eca7f2792d037"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8f0ca029b3f5fb8145dbd9aabbc31e41"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b9ce2dcacc7ba5aa7c3218e328235dc5"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "42e807d677da95f58a59469c686b400b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "645b4ecbb39f2718b1a1334dcd60bec8"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cc0981e2c8d64721e7aa103c66657d28"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "68b3814a36818c798751577322a8e409"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "0dbb8f0965c28911e9d0e6c463ca4ebf"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "78644370516c9d6a17c276d62d7ddca7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c5bf941bfa3cb69e61d9471fb908a7af"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0a9353d0271ce06e3fd2f2f002aa411a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e1e219e106627d0f7680efbb3e62c612"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "15052f7955be8d50de64c35019df92ee"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "689841619ef33a212e1b6b70be448b7b"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fcacc374bafb0e095b9460bdcc75aedf"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "9b7faee3a8245ab36329ef7b7afa57da"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "fafb7808081e9f4cefe507e33d308be2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "17142057e2f6571a33d7b03d2c621fe2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "689092702230ba940ca21cf385cb3461"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "da2aeed664030f05a765753d75af94d5"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "94cfcb7ed86cd6d8c3e6178eefff0a10"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "fff844b510eef781282cf3152bada196"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6ac81d75a8cd2b269a58ac0a1a318747"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e9b3b3ed42e142227b753c124cd9bc9"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "9e999e87d54624b61d634f41e054cc40"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "83c21b1669b49ced9c102d9d03d76fdd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "543c4a61dfe4815a11268d074de333dc"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "eb1f79c1497ff70d7c83feb4e725fd45"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "db888fb5b0613a1bc1036f07937e8a20"
  },
  {
    "url": "tools/html/index.html",
    "revision": "9bbc32846ab1f3576b85140655d35ab6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "4a3e66effa3a191b8b9196d30b1c1036"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "05f5d2d396396e173069fe132ddde9e8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "823f709590d6f0ec44d5d67f14405e9b"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "819ae3bcdb0d015ed1eff4d57fe24c7e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ede101db6d80cd5f92e357239e6039d1"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "05c5dcf59d9e23d7915b2fad032d0c33"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ba9bf5a7a422e03827d6741883c3a0c1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ec1c23544a8841e55d1af4eae61ad84b"
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
