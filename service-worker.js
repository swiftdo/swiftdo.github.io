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
    "revision": "31ea61fed045d0239f42f058c171ff36"
  },
  {
    "url": "about/app/index.html",
    "revision": "481b946601e5912d7d7808c1943d9f7a"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "a98cdb906eff1f1e54a54df9355d06e0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e442132c766f322b2436ac45156ed155"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "4d4158636867560d1a4b4fe265200678"
  },
  {
    "url": "about/index/index.html",
    "revision": "7d6621bd5f5d275a6da4ad42615d54ab"
  },
  {
    "url": "ai/index.html",
    "revision": "55b6c3aca00e447ba1bdbdf63edd42b6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "e5f10446308d7a8d17af0a4ff07070e4"
  },
  {
    "url": "algorithms/index.html",
    "revision": "e5e7039dc9428f6978ef0ecf7db91949"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "9dc7741c74530c1502c678b432da7202"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "42c8d6e24a52ca0c2daa55af65d82cb3"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "37b6b371695d90de7afa01b19b17406f"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "7527df256682026c4ba764431b9f2327"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "01dff868f74e1ab7b0919f1d4666fa20"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "0def769de947b9cc006af0607dfef2fd"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "692e1f0cb63e74d30094dc6bdb5891bb"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "1c9ccdf206c089f1a727fc037e6954e9"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "095fde6002282dce0739e63107803ddd"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "87a732bc49e5f5af18e8fad694d17b61"
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
    "url": "assets/js/100.f47a8b69.js",
    "revision": "963154183e4e700a94bf62a833fc446d"
  },
  {
    "url": "assets/js/101.15cf8b77.js",
    "revision": "a7465ef11f9c67f45702d264d06bfea6"
  },
  {
    "url": "assets/js/102.cf8d28c9.js",
    "revision": "ef9946c699568dbe74ebb825be2b1baa"
  },
  {
    "url": "assets/js/103.f48a2ff9.js",
    "revision": "09f191c591517983169ea8ff853a386d"
  },
  {
    "url": "assets/js/104.880e9c2f.js",
    "revision": "bf5860779627d47382873bedec7a0738"
  },
  {
    "url": "assets/js/105.ddf584e3.js",
    "revision": "fbe94e18121b734704981688dda3dab6"
  },
  {
    "url": "assets/js/106.32772f9d.js",
    "revision": "04fcf9b976ea273d4b53ae322bc1523e"
  },
  {
    "url": "assets/js/107.4ed23e88.js",
    "revision": "8c15a42a4614fa2ed8468b2f418acf6a"
  },
  {
    "url": "assets/js/108.24ca4c54.js",
    "revision": "fc3b4959c0445dd37bdb1f32192ebef1"
  },
  {
    "url": "assets/js/109.2c1a75de.js",
    "revision": "e4be330fae9c44b9b018f61cab6e8e0a"
  },
  {
    "url": "assets/js/110.6ed8b181.js",
    "revision": "213dc08430f58f4afcc333c10ec7f0d3"
  },
  {
    "url": "assets/js/111.3d3a554f.js",
    "revision": "fd54f249a1e8bf8712e3b40ee29b1c2c"
  },
  {
    "url": "assets/js/112.3678d88f.js",
    "revision": "dd31933d535c955c498c21e5658fcbb2"
  },
  {
    "url": "assets/js/113.bdf21016.js",
    "revision": "55c992a94c9b1196228b577082488e34"
  },
  {
    "url": "assets/js/114.3be2b39b.js",
    "revision": "32dacf15db50e8ceed2e9e7fb12027f1"
  },
  {
    "url": "assets/js/115.3538f706.js",
    "revision": "7c218c21cd3e38e6e9c322b868a1e458"
  },
  {
    "url": "assets/js/116.eb2a0256.js",
    "revision": "902fcb91514595d748c869e42d8c858a"
  },
  {
    "url": "assets/js/117.1e2f6874.js",
    "revision": "78b037a72524a1f66c716e6d8ce81659"
  },
  {
    "url": "assets/js/118.1e65dbb0.js",
    "revision": "ad2dc7d7e9ff39f9be905161f85bf3f6"
  },
  {
    "url": "assets/js/119.06a975cb.js",
    "revision": "fcde1e4bac7b5e0cc8f480ceaf7794db"
  },
  {
    "url": "assets/js/120.7a914dff.js",
    "revision": "5a59a872f228a9fcc510ba6d1646001f"
  },
  {
    "url": "assets/js/121.6cb557df.js",
    "revision": "fc5d2e0137d0de6f540672cb92766c2c"
  },
  {
    "url": "assets/js/122.e022f387.js",
    "revision": "c38f29ca7a711b03ec16c31080d29ac7"
  },
  {
    "url": "assets/js/123.d99da180.js",
    "revision": "844d4c52e4b0cb26a4337368aacf2969"
  },
  {
    "url": "assets/js/124.4d0f53b9.js",
    "revision": "b3276956bb9b688739c10f704f08e5cb"
  },
  {
    "url": "assets/js/125.46f103a5.js",
    "revision": "2938e8865791a7195dd8932f4bbfff23"
  },
  {
    "url": "assets/js/126.e309bd87.js",
    "revision": "da0b963b677fbbf1682e03f346212ce0"
  },
  {
    "url": "assets/js/127.15fc6fc5.js",
    "revision": "9bdca38c870de851dfba503247507b04"
  },
  {
    "url": "assets/js/128.2ceb30cd.js",
    "revision": "a4f328d1cf05ce6872101b0edadce71d"
  },
  {
    "url": "assets/js/129.fa0d1776.js",
    "revision": "8452b0de652fae77c76851ac54bddc01"
  },
  {
    "url": "assets/js/130.f841e7f4.js",
    "revision": "69d0d52469346816720449b352523f4b"
  },
  {
    "url": "assets/js/131.99349edc.js",
    "revision": "e515244e080793bdff1ec0ad27f5efa4"
  },
  {
    "url": "assets/js/132.41a96205.js",
    "revision": "d39726dcd4fe43ecde91b5621abdef80"
  },
  {
    "url": "assets/js/133.5d754756.js",
    "revision": "f4f77d6181cc32a813da495fdd770634"
  },
  {
    "url": "assets/js/134.dd70b5ee.js",
    "revision": "d457154bc845574bdcd4c2f52815d69b"
  },
  {
    "url": "assets/js/135.09b72b1b.js",
    "revision": "a07a635a1d0fde00d493af9a6d6a52c2"
  },
  {
    "url": "assets/js/136.37879cf3.js",
    "revision": "60abab0ac2124cd8343ac7c2aa973c35"
  },
  {
    "url": "assets/js/137.f6810fd6.js",
    "revision": "108cb3d1154603c041ceebeb7859cf2f"
  },
  {
    "url": "assets/js/138.16a21c31.js",
    "revision": "5568f14bc9138e471738b59cc21cc078"
  },
  {
    "url": "assets/js/139.0b1649ca.js",
    "revision": "075f3a4f2c96dda39a815c18b3275043"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.b67221e3.js",
    "revision": "643831ca3fe2c1ecdae5d8408bccd4db"
  },
  {
    "url": "assets/js/141.bcf8eea8.js",
    "revision": "dc3d54a280d4679edb97b00a4a1d12fc"
  },
  {
    "url": "assets/js/142.33df0363.js",
    "revision": "076786b75e98af55a3ce376d21d76fc8"
  },
  {
    "url": "assets/js/143.e8e114cf.js",
    "revision": "48966981dd8ce68cae21092a8e2550e4"
  },
  {
    "url": "assets/js/144.f239ff30.js",
    "revision": "8f20609565dd18f20cdbb7129d8ddce7"
  },
  {
    "url": "assets/js/145.0fee0607.js",
    "revision": "3042cf11403dbcfeddc27dca7f5d5205"
  },
  {
    "url": "assets/js/146.e2645faa.js",
    "revision": "fa9d5e6f8feda0a6b41ed850084ae4f0"
  },
  {
    "url": "assets/js/147.c181d20c.js",
    "revision": "dabfb1117f9ca8ca8d99f52f65e9c7e6"
  },
  {
    "url": "assets/js/148.73664bd1.js",
    "revision": "814bab7dc156ef0195c36192ff1cf37c"
  },
  {
    "url": "assets/js/149.56bf9212.js",
    "revision": "b43febdf8768e3c11451a055fb596580"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.a74bdc7e.js",
    "revision": "4fd089e36f422b3aa554567697dd5737"
  },
  {
    "url": "assets/js/151.4a97be94.js",
    "revision": "67b1254c9b401f2378c12e6a7587201b"
  },
  {
    "url": "assets/js/152.3d98ab54.js",
    "revision": "49a16d7ea04edddbc7b1062b3a8d46ab"
  },
  {
    "url": "assets/js/153.59ee2a3e.js",
    "revision": "3347ad18c01a64a858d8cbbed0625bb8"
  },
  {
    "url": "assets/js/154.942c3127.js",
    "revision": "7e9e69959949a98d9818e2cab95595d6"
  },
  {
    "url": "assets/js/155.0207a249.js",
    "revision": "c3ec9ec59505f62dcab0743d3afff699"
  },
  {
    "url": "assets/js/156.68bd6a75.js",
    "revision": "a5b5644fb9ec2b1e3b4dfd29d938e133"
  },
  {
    "url": "assets/js/157.e6c7e746.js",
    "revision": "e0ffb25f0a558d2b4cee8de00d750b4b"
  },
  {
    "url": "assets/js/158.5e01ba69.js",
    "revision": "eb1192dbff6ddc61993e59d76d6ab063"
  },
  {
    "url": "assets/js/159.8833147b.js",
    "revision": "8d63656424ec7142dd248595ebe9aa36"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.1a6ea121.js",
    "revision": "7df83dd48178cfe85bb036464d5ab984"
  },
  {
    "url": "assets/js/161.d565328d.js",
    "revision": "a25dd1e69982e9b5ed7194b0b96b1a1b"
  },
  {
    "url": "assets/js/162.109fb59e.js",
    "revision": "d1ba907ba240fc2c0326b9c951df7b2d"
  },
  {
    "url": "assets/js/163.1d0d59fb.js",
    "revision": "0de333ab75e3c109ae20b16f0ec9f9bf"
  },
  {
    "url": "assets/js/164.752191d6.js",
    "revision": "72b4b41385503e408ec226e6a426ec6e"
  },
  {
    "url": "assets/js/165.33c4bf69.js",
    "revision": "11fd94ae952f06a37f9e888f56ea6fb6"
  },
  {
    "url": "assets/js/166.6c177a13.js",
    "revision": "502eb37f952e6d0f9f98757143cd0a6c"
  },
  {
    "url": "assets/js/167.a2fdfb2e.js",
    "revision": "eae9970a94e6e902aaf3731c414cec45"
  },
  {
    "url": "assets/js/168.e2e4d659.js",
    "revision": "74dc63bf62fddb51013cf9869d584491"
  },
  {
    "url": "assets/js/169.531e5e6e.js",
    "revision": "8a34235e9cb02e405d0ec941aa202f74"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.e0bacdca.js",
    "revision": "8e0031ab665b1738128000ab1513c050"
  },
  {
    "url": "assets/js/171.a9f9da75.js",
    "revision": "632febfe33949e9e91f2eab3ac5c1e26"
  },
  {
    "url": "assets/js/172.1a565090.js",
    "revision": "94871d4063ad579efb8ff2d4d61bdd21"
  },
  {
    "url": "assets/js/173.805b6cf8.js",
    "revision": "20c5a5c4fbd2fcfb55e1e7987dba70e2"
  },
  {
    "url": "assets/js/174.2a2ea11c.js",
    "revision": "980849fcd81862106526666b7be68425"
  },
  {
    "url": "assets/js/175.c52568b4.js",
    "revision": "13a632cdf0e28af83783d98ccb89b82e"
  },
  {
    "url": "assets/js/176.aba42e6f.js",
    "revision": "b85db0180a269977f60719cd5869bddb"
  },
  {
    "url": "assets/js/177.9bdc84a9.js",
    "revision": "8e0d1e48032d5282b87f1a4124d3e33b"
  },
  {
    "url": "assets/js/178.ff5dacb9.js",
    "revision": "6a8daf56b50f01a1eda0573e72fffc34"
  },
  {
    "url": "assets/js/179.f40906ea.js",
    "revision": "0058e358a01d76297345cf7444d8bab2"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.21616cf4.js",
    "revision": "86c1196f6d3910c9c103baba70aa7475"
  },
  {
    "url": "assets/js/181.8bd468b2.js",
    "revision": "4e20508ef9d08c34ef5fc17bef3651f6"
  },
  {
    "url": "assets/js/182.f9ba1f58.js",
    "revision": "b752862f7532678acc6aa200cdbdecef"
  },
  {
    "url": "assets/js/183.7248ec51.js",
    "revision": "3480686c6c98a85c0f5d1a662474f5e5"
  },
  {
    "url": "assets/js/184.53d8830c.js",
    "revision": "b690bfb0871e2d7ab2d6b41d356eb72c"
  },
  {
    "url": "assets/js/185.bd3f12e5.js",
    "revision": "a76fb34025e8f93ba58c72bcec8e58b6"
  },
  {
    "url": "assets/js/186.239eb085.js",
    "revision": "c0a5c107ae650dccb4ca728598c70c08"
  },
  {
    "url": "assets/js/187.98f3b803.js",
    "revision": "d95b0a74fd1a18b4d95a485705463b01"
  },
  {
    "url": "assets/js/188.84501b0d.js",
    "revision": "1b4219a2124e412acd15d953b581e909"
  },
  {
    "url": "assets/js/189.74546cfd.js",
    "revision": "be65779f4e7195821cc01a08de424b22"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.d6a6c2b7.js",
    "revision": "9c9ff2487dd9e7263d9d1f8457ba8556"
  },
  {
    "url": "assets/js/191.c8e2cf42.js",
    "revision": "b55e8b7cbcf16e80b168647ddc2ab49f"
  },
  {
    "url": "assets/js/192.4924c567.js",
    "revision": "b6bdfad1e3a558199176e6f0f3cf834c"
  },
  {
    "url": "assets/js/193.4cdaede9.js",
    "revision": "7152ef64a4558e529837ac4e0785e7a2"
  },
  {
    "url": "assets/js/194.f142905b.js",
    "revision": "b289f73d64ac391522727d2a4b8ff70b"
  },
  {
    "url": "assets/js/195.91cd9cb2.js",
    "revision": "4599f5b4b34c984a78c3d7a66238ef17"
  },
  {
    "url": "assets/js/196.794fb5b6.js",
    "revision": "6b0ce2bbfe3a04a513e41138ebc31a51"
  },
  {
    "url": "assets/js/197.28846e1b.js",
    "revision": "75a1d99a1eab3dc40147a32853731b30"
  },
  {
    "url": "assets/js/198.ca3f146e.js",
    "revision": "80b2352ca5e142959cf0b5f6c48c48bc"
  },
  {
    "url": "assets/js/199.0512a4b4.js",
    "revision": "ae3153b12fa5cd2898862c202b3f0075"
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
    "url": "assets/js/200.ba796cfd.js",
    "revision": "ce1213efef060554b2f883bd5fce762c"
  },
  {
    "url": "assets/js/201.424fe936.js",
    "revision": "3dd79eb751d078ed556491764c0429cb"
  },
  {
    "url": "assets/js/202.c234e63d.js",
    "revision": "6c471eab5fea8558345f871b9f0a892c"
  },
  {
    "url": "assets/js/203.2419a3b6.js",
    "revision": "22a2c6fc0e80f095328cbae2ef2b866f"
  },
  {
    "url": "assets/js/204.7acfc871.js",
    "revision": "72ee909b9dc5661142c94cd51850679d"
  },
  {
    "url": "assets/js/205.9df23f09.js",
    "revision": "c67548b0e6b6029cf0e4f6fde979ab59"
  },
  {
    "url": "assets/js/206.09fe3766.js",
    "revision": "cc30ac8e2a3c4e6f638f80c03ed08390"
  },
  {
    "url": "assets/js/207.dac9bf40.js",
    "revision": "a1cd1b606e91b463b2f4cf923ab09fbe"
  },
  {
    "url": "assets/js/208.25ac3924.js",
    "revision": "6b7948af7ce16069863a7d0ce2d3c76f"
  },
  {
    "url": "assets/js/209.4d5a92cf.js",
    "revision": "6d1d5d83c5b50fc47a052d0d842793d6"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.f8a92690.js",
    "revision": "0c0c436c98b6ea44681754e89064f963"
  },
  {
    "url": "assets/js/211.0d1f9765.js",
    "revision": "efab28265ee1717625eec72d812d3249"
  },
  {
    "url": "assets/js/212.72a06991.js",
    "revision": "2b0064f50a34b1e107204c5a5fad5b7f"
  },
  {
    "url": "assets/js/213.daa8a3b6.js",
    "revision": "be402d4780b7c55f03554416740ee5af"
  },
  {
    "url": "assets/js/214.e27a39a5.js",
    "revision": "1ab1004997bdd32d690d280c6b232661"
  },
  {
    "url": "assets/js/215.94e1d8b0.js",
    "revision": "3df5317239aec3c9e7bd3059e79d9b92"
  },
  {
    "url": "assets/js/216.fc6c0c46.js",
    "revision": "48d7f04c4ffbc29838d02092152dc3b2"
  },
  {
    "url": "assets/js/217.a8bbb929.js",
    "revision": "607b5b4e14655ff450e86ff48ab09cc7"
  },
  {
    "url": "assets/js/218.d77c2be2.js",
    "revision": "c46ab0fe4ebb205fc58238b38032c565"
  },
  {
    "url": "assets/js/219.d766d9bd.js",
    "revision": "624f61b36061a1f4800c78c088a5b2f1"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.ecdd4c74.js",
    "revision": "09247d78176c287386613ff4186004f9"
  },
  {
    "url": "assets/js/221.08622924.js",
    "revision": "28809453d08d8420032ecbede0b63895"
  },
  {
    "url": "assets/js/222.7b82c8f4.js",
    "revision": "18610952833da18b527a96fc5f64c4bc"
  },
  {
    "url": "assets/js/223.f36eb589.js",
    "revision": "cbbcab6e8c1fdcd7a4b18c8ba84a68ae"
  },
  {
    "url": "assets/js/224.643c1ade.js",
    "revision": "23ce0bfd0f937fa1e95aaae7ba84cf1c"
  },
  {
    "url": "assets/js/225.6791f3c4.js",
    "revision": "c7853b5b3b175320a2b14a5ae0f8bdf1"
  },
  {
    "url": "assets/js/226.d37eed61.js",
    "revision": "3e8fa4d6e7808ae932bdbf01d508dd7f"
  },
  {
    "url": "assets/js/227.5fa3ce7c.js",
    "revision": "4fb7488fbd40e8f4052a2b2cfd088317"
  },
  {
    "url": "assets/js/228.6ae63cf3.js",
    "revision": "7078bff7bff50d2ee17762b7fe669fd0"
  },
  {
    "url": "assets/js/229.d170a6f0.js",
    "revision": "0197249f6ac3b633556614ae5f6ccaff"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.e7c2a650.js",
    "revision": "edea0d9b99c03bfde4ec16e316a6fdaf"
  },
  {
    "url": "assets/js/231.aeb2fcca.js",
    "revision": "c8e4d1cc98542c6c37224a1222d632e5"
  },
  {
    "url": "assets/js/232.ab4fe45c.js",
    "revision": "dbc30babf9d69916702cc1f0df4dc105"
  },
  {
    "url": "assets/js/233.3c3e0e14.js",
    "revision": "b0c29e9b19ddb8acd1c067b3cbd27535"
  },
  {
    "url": "assets/js/234.7635470d.js",
    "revision": "9bc280deb1631e8832e8f2c76f9636a7"
  },
  {
    "url": "assets/js/235.419ad42f.js",
    "revision": "896d6ede69130d676f173ee0036d2b72"
  },
  {
    "url": "assets/js/236.a0d3bdb4.js",
    "revision": "70deaae4480cbee046e15819872eabe4"
  },
  {
    "url": "assets/js/237.7cb393bd.js",
    "revision": "36db570b99810a2d4726dfecbb3f78ae"
  },
  {
    "url": "assets/js/238.fb03a056.js",
    "revision": "dfbb948420a9cee3ded81d1c30e9f92d"
  },
  {
    "url": "assets/js/239.57fb5eec.js",
    "revision": "7a22afbe883e15617a0854c6ab809afd"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.764fcf38.js",
    "revision": "6bc6e6098f39499bef62425111310afd"
  },
  {
    "url": "assets/js/241.f0c65473.js",
    "revision": "0db9ae792d6c5bf0bd241900c34bc8d6"
  },
  {
    "url": "assets/js/242.0ada3e50.js",
    "revision": "3cc50e211442cb0b76739e590d24148d"
  },
  {
    "url": "assets/js/243.db37ebcd.js",
    "revision": "7b285840ed8b5ab94ea4e23b3d749c7c"
  },
  {
    "url": "assets/js/244.c97a36af.js",
    "revision": "0d6144aff535ecd61f544869e3be7b84"
  },
  {
    "url": "assets/js/245.2248d299.js",
    "revision": "f5900f5377988230159e9f2a917c246c"
  },
  {
    "url": "assets/js/246.d37e0e4d.js",
    "revision": "51dd99eb1f2a091cd196029fe079c7ff"
  },
  {
    "url": "assets/js/247.7eb043c1.js",
    "revision": "f7a6e18b321086a92c7a3c4d41638d87"
  },
  {
    "url": "assets/js/248.e7087c1b.js",
    "revision": "be862bac0aa21a3788d9a42b84f0b2f3"
  },
  {
    "url": "assets/js/249.d4896172.js",
    "revision": "317eb50578f9310600d8ff6e9b9266b9"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.d7bfb63b.js",
    "revision": "eb8564ec325575099970c96ba485927e"
  },
  {
    "url": "assets/js/251.d51e46d7.js",
    "revision": "f16711cdf08cf52d4e7af55c8a1545c6"
  },
  {
    "url": "assets/js/252.bbe8a506.js",
    "revision": "10bc495e8fa33907500f197c4ac9f530"
  },
  {
    "url": "assets/js/253.c7718635.js",
    "revision": "974bb097ae2efe374e9cea0c8d7910c0"
  },
  {
    "url": "assets/js/254.ad235921.js",
    "revision": "323ca3eba65fc6c21568291faa4df7bb"
  },
  {
    "url": "assets/js/255.72444c47.js",
    "revision": "05059c10a4d90f12578e1bca4659d57a"
  },
  {
    "url": "assets/js/256.ec87866e.js",
    "revision": "1aa08da3fa4e49fea92ca423e46ee3ea"
  },
  {
    "url": "assets/js/257.378e8f17.js",
    "revision": "daf19c9ac138bddd65c857c284b100fa"
  },
  {
    "url": "assets/js/258.7cd069eb.js",
    "revision": "215ac5a16ee8edc94780f3cf8a92a8f6"
  },
  {
    "url": "assets/js/259.356032e6.js",
    "revision": "a04a6dea48cffdd9b11adf3b75f23e29"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.18b8f487.js",
    "revision": "135a9ddf00d16933c320f4d001bc014e"
  },
  {
    "url": "assets/js/261.b660b52b.js",
    "revision": "faf114166abeba53039e59766f659759"
  },
  {
    "url": "assets/js/262.3e21a423.js",
    "revision": "dd414cdb84cce19ff0827b71b75d57c7"
  },
  {
    "url": "assets/js/263.435a4902.js",
    "revision": "2dd68b4fb3457d708601f906b4cc79b6"
  },
  {
    "url": "assets/js/264.2eab2322.js",
    "revision": "a2260519b2a07b6e563046af9c6133c0"
  },
  {
    "url": "assets/js/265.1c51b1f5.js",
    "revision": "0cd4e460d03f46ab8e83c201e508d3d6"
  },
  {
    "url": "assets/js/266.d31d1abb.js",
    "revision": "34d67847ec481fccf88941e43f4c0a4d"
  },
  {
    "url": "assets/js/267.b8268631.js",
    "revision": "c98592a97f5880337f0655f248e80fbd"
  },
  {
    "url": "assets/js/268.b13d33d9.js",
    "revision": "1a71aa9da4452c31d70c97e7cbdb4cf1"
  },
  {
    "url": "assets/js/269.fea0c05a.js",
    "revision": "12ca2957957a18ea4eb28ae5846ef150"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.143f5b97.js",
    "revision": "c554cb7bbea9c81ffe7b1032a1b61eb5"
  },
  {
    "url": "assets/js/271.380ec915.js",
    "revision": "60dfdfc4f6fb033e91c9ceaf485f7729"
  },
  {
    "url": "assets/js/272.86fde93b.js",
    "revision": "d63dc30dc4cf8e63f06e86e20c87b9ea"
  },
  {
    "url": "assets/js/273.551ee9a4.js",
    "revision": "a99acea4682788f7f3ffb75ef969feb6"
  },
  {
    "url": "assets/js/274.053bff89.js",
    "revision": "d705963cf8fd116b474eb849f169f20a"
  },
  {
    "url": "assets/js/275.c058de36.js",
    "revision": "daf6c4bf5ecd8494ef8931f32dd27e9b"
  },
  {
    "url": "assets/js/276.001ccfde.js",
    "revision": "ebfdcdb96cb4999e1227c14a9ce96595"
  },
  {
    "url": "assets/js/277.83719f3c.js",
    "revision": "7e98ed415ed795bba19ffb34fab9f6ce"
  },
  {
    "url": "assets/js/278.cf4863bb.js",
    "revision": "bb3d75602230eacf4891488f58916e2a"
  },
  {
    "url": "assets/js/279.6d06cbdb.js",
    "revision": "61fecc2d578c852fd7791ec5ac49f856"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.d90043bf.js",
    "revision": "d2e5cbdace25b9792ed35f737153f71d"
  },
  {
    "url": "assets/js/281.ae56d0e2.js",
    "revision": "13d7684af402dcc9f21a2b9c720a626b"
  },
  {
    "url": "assets/js/282.ca0f7b6a.js",
    "revision": "017a3c6342199551f397ae10f9cec60f"
  },
  {
    "url": "assets/js/283.91db49ab.js",
    "revision": "7bf2096ea2ebd13df7863e8d1066e724"
  },
  {
    "url": "assets/js/284.33762bc2.js",
    "revision": "399cbc9e74625240e7741d49e79a9d0f"
  },
  {
    "url": "assets/js/285.6676a450.js",
    "revision": "244f1a8bb3d02ece9111d4432463ceb3"
  },
  {
    "url": "assets/js/286.b290055b.js",
    "revision": "9c3599691222688b0c3f4ba29f5c1752"
  },
  {
    "url": "assets/js/287.cf10238d.js",
    "revision": "873eee1173b2fd3e392c3c4ddac5ecc6"
  },
  {
    "url": "assets/js/288.41877c4d.js",
    "revision": "38f10b1496d5c61666b0dda3fa89130b"
  },
  {
    "url": "assets/js/289.68effd5e.js",
    "revision": "700408cd0412e614bda3f6b7efb1e171"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.73ef4d5f.js",
    "revision": "8295e2bf8d7cdef27c723fd72604958a"
  },
  {
    "url": "assets/js/291.dc917367.js",
    "revision": "93bed7e0b55f3899fd5b2c50cae17550"
  },
  {
    "url": "assets/js/292.82c27c57.js",
    "revision": "edd610b05cf8914ec9132221bc6280ce"
  },
  {
    "url": "assets/js/293.a04e2ce0.js",
    "revision": "c984029a1671abf831a0bb6744fc5958"
  },
  {
    "url": "assets/js/294.3a2b5f4d.js",
    "revision": "abe95e3a89cbb7f0cd32fe2674d6ec5f"
  },
  {
    "url": "assets/js/295.fb244c1f.js",
    "revision": "2c850e9e116d5feb8fb5fd2ff634e6a9"
  },
  {
    "url": "assets/js/296.86441799.js",
    "revision": "648f252371af26bd20ef9ac4402571bf"
  },
  {
    "url": "assets/js/297.9fd4895f.js",
    "revision": "9e6be9794016c66100486b0a48017ff3"
  },
  {
    "url": "assets/js/298.254bab8f.js",
    "revision": "b5b556a0c20ae56312c3aa255c7ffe75"
  },
  {
    "url": "assets/js/299.aa5e3692.js",
    "revision": "abeb729ca8d726911d0dbd4b20b85899"
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
    "url": "assets/js/300.bc34cb17.js",
    "revision": "1fc43ef22dc71f3fff9ff600dda98525"
  },
  {
    "url": "assets/js/301.04fc394b.js",
    "revision": "5933ff24e68bdb4aa90407c5d3d6c304"
  },
  {
    "url": "assets/js/302.88db4c6f.js",
    "revision": "2f536cca8d727ff8e88e00f3d71f845a"
  },
  {
    "url": "assets/js/303.f6516bfa.js",
    "revision": "78f5f083cdb4e93d2ea9af3ebd442fc1"
  },
  {
    "url": "assets/js/304.536ba315.js",
    "revision": "09ea88b56bfe3225ae59009936ba77fc"
  },
  {
    "url": "assets/js/305.d61e0d25.js",
    "revision": "36b34cad4b6a3c66964f485b562f6b24"
  },
  {
    "url": "assets/js/306.89c7e900.js",
    "revision": "e4acba27966a9771a2041170580fc36a"
  },
  {
    "url": "assets/js/307.7883f26b.js",
    "revision": "85b6c5111979fcea7d2b1fe9adff5c77"
  },
  {
    "url": "assets/js/308.b94440ca.js",
    "revision": "d8fa6fe817eccdfc7622ba24874680e1"
  },
  {
    "url": "assets/js/309.871a425c.js",
    "revision": "5b5d6a29163a9432441394aae9fa5943"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.faeaa11e.js",
    "revision": "a2d7fff215a0d4795239bbfe03b7511a"
  },
  {
    "url": "assets/js/311.a29a671d.js",
    "revision": "a2a830097a4c92e7c48b7c087481e7f7"
  },
  {
    "url": "assets/js/312.a3c20f98.js",
    "revision": "914528de4690287e925f75873ed10721"
  },
  {
    "url": "assets/js/313.fcc734cb.js",
    "revision": "31394242f7f8221d61ba2e10baf438bb"
  },
  {
    "url": "assets/js/314.0ff409b8.js",
    "revision": "43406593e36cac9bcfa010ae80c4e65f"
  },
  {
    "url": "assets/js/315.8071b282.js",
    "revision": "2249e4959026f341da4d46fcb268341d"
  },
  {
    "url": "assets/js/316.02e2836b.js",
    "revision": "70a9938cc164030e88a275b0073c29d5"
  },
  {
    "url": "assets/js/317.54bbcf3b.js",
    "revision": "1213031769eb66adfe206284d3c66659"
  },
  {
    "url": "assets/js/318.8bce6bb5.js",
    "revision": "d04e5a6c1edb62d05c11507fa5815ea5"
  },
  {
    "url": "assets/js/319.3d0dca7b.js",
    "revision": "9f2e8d0c6b268bda0dbb679a77c19f70"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.e845dae2.js",
    "revision": "4bae3d8b0aa11daba60834d5f9169638"
  },
  {
    "url": "assets/js/321.0d2b83c9.js",
    "revision": "87bae7ac764cc1631fc65caa3c86e451"
  },
  {
    "url": "assets/js/322.2b0f9929.js",
    "revision": "e38e52a0f5b2b4b34f96df59a58a6f3d"
  },
  {
    "url": "assets/js/323.fccbc371.js",
    "revision": "4044cd5ac45d4a240d2fe9ce28bddaff"
  },
  {
    "url": "assets/js/324.0adf4b05.js",
    "revision": "2b68f2eb7f12a3e715004c0c15119063"
  },
  {
    "url": "assets/js/325.6eb95f69.js",
    "revision": "ae33a19cbae52172dd8330ec60b63f4b"
  },
  {
    "url": "assets/js/326.09d59ecf.js",
    "revision": "973dfc36c3c6b1861c506c389eccadbf"
  },
  {
    "url": "assets/js/327.71682f51.js",
    "revision": "413a6c0ac5182c9460dc6b733e3f0124"
  },
  {
    "url": "assets/js/328.face8a8b.js",
    "revision": "bd827dcf4b1333a1e471e08fce2c2669"
  },
  {
    "url": "assets/js/329.d4c98b63.js",
    "revision": "602dbfc5aa49a008ea4d923aaeb4da66"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.ef6035cd.js",
    "revision": "c82658ca9d569d71ef4b3f12d64ee5e5"
  },
  {
    "url": "assets/js/331.32b7ea94.js",
    "revision": "dd0b8ba76158a0c6480c6b8b36bf5e36"
  },
  {
    "url": "assets/js/332.bb1f8643.js",
    "revision": "a9a71b1bb0f008885e26f466963cb4b7"
  },
  {
    "url": "assets/js/333.baceac5c.js",
    "revision": "fa6d7f88c64c5d382388b5ee6c8f9344"
  },
  {
    "url": "assets/js/334.6139d62a.js",
    "revision": "1fd7aa9b4462e1b465cfded6a8301d12"
  },
  {
    "url": "assets/js/335.6ab300ba.js",
    "revision": "5aff15fab9db40a45baa3eee537e5428"
  },
  {
    "url": "assets/js/336.ad8166a0.js",
    "revision": "b67537c1b60347bd345d7d4b166f86da"
  },
  {
    "url": "assets/js/337.dcbfe443.js",
    "revision": "de4f36cb0b4b70478101653cc5043c2c"
  },
  {
    "url": "assets/js/338.36230eb5.js",
    "revision": "91a55ab8d10d1ac5368b81a64fec0cad"
  },
  {
    "url": "assets/js/339.e3f4c25f.js",
    "revision": "306a4f336af81bfc1e27a004b6b67765"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.629807d3.js",
    "revision": "d77e16e41583b39c154806b06843f283"
  },
  {
    "url": "assets/js/341.580b2424.js",
    "revision": "1fc86ebfc3f5c552a9f49b46195e49ac"
  },
  {
    "url": "assets/js/342.d0128218.js",
    "revision": "e5997dda94e8f78dce9370488f0daef6"
  },
  {
    "url": "assets/js/343.5016c839.js",
    "revision": "7f08511edc366e1c347f25c51af05d6a"
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
    "url": "assets/js/40.d8887dab.js",
    "revision": "5c199233d8134852bb7a98cdddfc2d2d"
  },
  {
    "url": "assets/js/41.fce8a83a.js",
    "revision": "ffd58a8bff888cc4c8e88ca39b918d76"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.678226ef.js",
    "revision": "f7cd244a0ffae99e6b679a9cc403b0b3"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.fc0717f1.js",
    "revision": "82fb958c414b1f8dcad72a4ab5dedcee"
  },
  {
    "url": "assets/js/48.c6c95e4b.js",
    "revision": "e06fd95f61fc7b7d55d464b6f647723e"
  },
  {
    "url": "assets/js/49.99451977.js",
    "revision": "8b361f9564a2272f629fdb4d63e0a993"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.5269a0de.js",
    "revision": "45569b6c6fb9997d3889406172157442"
  },
  {
    "url": "assets/js/51.25863a78.js",
    "revision": "d3e36c1847f80e3a819c2bc4353c967c"
  },
  {
    "url": "assets/js/52.9b9a474a.js",
    "revision": "8379ea35bbfdf87f3bd9d89b44514ac5"
  },
  {
    "url": "assets/js/53.b768495a.js",
    "revision": "e889d6164ac044f3f084b2054fb0935a"
  },
  {
    "url": "assets/js/54.132dbd14.js",
    "revision": "c9c33058cc768551b8c892b7a4b7a8ae"
  },
  {
    "url": "assets/js/55.1de3bf60.js",
    "revision": "a0b2ba385d9913d95c5b48f079d3639a"
  },
  {
    "url": "assets/js/56.21458346.js",
    "revision": "d2bb22cf0fedfce6d8362479966fcdfd"
  },
  {
    "url": "assets/js/57.0a558446.js",
    "revision": "33cee930ec0d7552f22dbb5592516109"
  },
  {
    "url": "assets/js/58.2b5b0fbc.js",
    "revision": "d67a923fc00b01dd14fd8ac86f6539ab"
  },
  {
    "url": "assets/js/59.7f2c6fa4.js",
    "revision": "83948a8f0713421d0deebeac846ea292"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.2378d84a.js",
    "revision": "1b25228315b23ff0f34e1038df86694a"
  },
  {
    "url": "assets/js/61.3923ef64.js",
    "revision": "3e39cd75c87902f77f3ad21ffc89a1ea"
  },
  {
    "url": "assets/js/62.e204a376.js",
    "revision": "26c3cd2b1ac8199319aab6a6b7112e50"
  },
  {
    "url": "assets/js/63.710b313e.js",
    "revision": "b7c63b2965b1f83f74d43cba0814458d"
  },
  {
    "url": "assets/js/64.59ad0588.js",
    "revision": "db5bd90216c71e02b23a5587856c538d"
  },
  {
    "url": "assets/js/65.fa90ccae.js",
    "revision": "b18f809b8527b5926041ae6f45c11f95"
  },
  {
    "url": "assets/js/66.bb622833.js",
    "revision": "88ab5ef21fda1c43653078ff93efc008"
  },
  {
    "url": "assets/js/67.7c371768.js",
    "revision": "a904cbb7991e85582486baaad7bb6329"
  },
  {
    "url": "assets/js/68.fc6048c4.js",
    "revision": "1d0a02d9328c04a98feff05ca049c884"
  },
  {
    "url": "assets/js/69.cb959ecf.js",
    "revision": "12ed865d48cf27cd8341a7811558030f"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.c1a8c973.js",
    "revision": "e274e523700beeb28a4a4af4b4d23428"
  },
  {
    "url": "assets/js/71.b1a2004e.js",
    "revision": "a81f107614e07a525edf1a38ca5a8451"
  },
  {
    "url": "assets/js/72.6d2bc36e.js",
    "revision": "c0e8b2b42f4ca3f5754e070ec7e81065"
  },
  {
    "url": "assets/js/73.55edb1c4.js",
    "revision": "be367a7d0f7737199095a830c2f3a9ac"
  },
  {
    "url": "assets/js/74.4328d99b.js",
    "revision": "9ca92807fe36201566c43490d8904ecf"
  },
  {
    "url": "assets/js/75.12da5957.js",
    "revision": "c1f98047b3c9a4254dc4aeb27c81b585"
  },
  {
    "url": "assets/js/76.80c3c0fa.js",
    "revision": "6fde6a4917d5370d331e448c5abdd63b"
  },
  {
    "url": "assets/js/77.a3328eda.js",
    "revision": "1a0696f073a4b6a9523b38aef69f72e9"
  },
  {
    "url": "assets/js/78.600c7d41.js",
    "revision": "98dc7ef8fc204f6d29d6c2ec4bd0d7d9"
  },
  {
    "url": "assets/js/79.ddc48247.js",
    "revision": "f54aec4261368471261ab53a0a3e733c"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.3878b366.js",
    "revision": "10e1a03564ee078609a9a256a71a50d5"
  },
  {
    "url": "assets/js/81.82ef888e.js",
    "revision": "93d7165b42921af77363f078313e0f12"
  },
  {
    "url": "assets/js/82.f8c9b59e.js",
    "revision": "06a87f17ec7da913bf20d8c09ac08256"
  },
  {
    "url": "assets/js/83.3eed4b21.js",
    "revision": "3f4006bdaee85928fa0ff2aa08c50a9f"
  },
  {
    "url": "assets/js/84.48dbbd04.js",
    "revision": "cee6a936dc6469099dd506bdfa21454b"
  },
  {
    "url": "assets/js/85.b32ac70a.js",
    "revision": "c8d9c3a949ecbbc02afa11dc9ee3ed02"
  },
  {
    "url": "assets/js/86.9900f5d4.js",
    "revision": "858d755131688240f23a64ba26c44c9c"
  },
  {
    "url": "assets/js/87.7f73b335.js",
    "revision": "6bc21c1b58af4224577f9b13f958002c"
  },
  {
    "url": "assets/js/88.0cb4b24d.js",
    "revision": "7b39355ae8e4b8c355879f87fb7eb488"
  },
  {
    "url": "assets/js/89.1c290a17.js",
    "revision": "93d849919483bcecbf6dc8aa8e924cdf"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.393e3a69.js",
    "revision": "2eb5de3b01dc1100f6a01c67083f69d9"
  },
  {
    "url": "assets/js/91.6ba1feb6.js",
    "revision": "5a8da9e34df385b8b1c0420c71f04c6e"
  },
  {
    "url": "assets/js/92.53f0889b.js",
    "revision": "769b5239a09ae516e41e61e5a720dd34"
  },
  {
    "url": "assets/js/93.0f9d7a79.js",
    "revision": "134d06dc70f01e20c849d43de4945bff"
  },
  {
    "url": "assets/js/94.5f51211d.js",
    "revision": "ece1e0f6f5fd7d2f33bbfaa228dee5f2"
  },
  {
    "url": "assets/js/95.acddd05b.js",
    "revision": "2acfc8eeccba3c2b64de17ee9d81c97e"
  },
  {
    "url": "assets/js/96.2adaad1a.js",
    "revision": "ecac7b0a963121f6a1134698e65163c4"
  },
  {
    "url": "assets/js/97.abb6bd9f.js",
    "revision": "b7a1d7a813cfa964d42bf779ec936eac"
  },
  {
    "url": "assets/js/98.f622c7cb.js",
    "revision": "805ee88707c3329c3f249b68257245d9"
  },
  {
    "url": "assets/js/99.905b6ad6.js",
    "revision": "f65e087d304634ce46b6cddc78c26175"
  },
  {
    "url": "assets/js/app.4f1e565f.js",
    "revision": "e730484c486f6780136ba3b88f31c55d"
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
    "url": "basis/index/index.html",
    "revision": "6dcbcd8bee25db60bac16b73bfd6bd94"
  },
  {
    "url": "basis/os/index.html",
    "revision": "6d618286f892009514f326f77d3f57f1"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "8f1ad63477eadb4c8c92e179c1893b02"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c0486fc57d80a903d32e1d5a949f2637"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "c473a9ab2b912e5cf7fa465b0967b950"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "5a129f4c2dbb5eecec30e06c8c29da27"
  },
  {
    "url": "c/audio/index.html",
    "revision": "16bb8251231327c464417dc3d4117e89"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ee0a5dfccfb3cf82217b2ddc53252aee"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "7c283dc2da0d64dc169cfd47a53faa66"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "b7602f6e7e11acc45bd2f81905692f75"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "608e8112aa610db5744b98b734d7c06f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b747c9ad2d255d411a4f2fcc64ace49c"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "c700e6f081e7487d92031c49379c2f6d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "793305a76bae6abc99f52c63bdb47975"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "7d672aaf5b38acba84169e86eaada4ff"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "e7097d894ad457343f1c41c9256d270c"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "93ed086cbecf9a8e5fb75377a6a58f55"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "1957719697cf36f925a8f09d310143ff"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "37810c9c8f23c85bc2899228d23833e8"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "25f5e65212bd52b2fce9f79a93e91861"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "d8399cfe7c0c12f0232379f227e0f504"
  },
  {
    "url": "c/program/index.html",
    "revision": "c4848181385a449697e8c51deaa86a37"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "43ea1fba26b613e0d0b581293954a6f6"
  },
  {
    "url": "categories/index.html",
    "revision": "8e7b9b843ded199c3e5c31ff2e8a73e5"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "c190408c4e5f26077eb9f0f0472657b5"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "41020b11828b7724b5708c0214435860"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "cff6d8c369cc427eb93071fc9230266f"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8e910d7f2daa1d00013ad5f23caafc7a"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "e8ab737b8473c44db1e5ec48f6348faf"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "e4f7008e163f08f0ec1a2141116aa761"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "f4f6b1667400d9c0e39d4099ea1087dd"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "6e5559f6bf5545b5925b50bbd65f8bbc"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "8fc3c96affcc500ff3829e68ccc0c32f"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "f2476bc8e49d19774e2f02294aa36bee"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "15787f29aea0ac3ccf438b10f00cd49b"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "57d99ecb384a8430c558f337b4469e12"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "55a126d1683cf06cf86c8dbf896b34ee"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "451842e9256f64e39f7442c1574052f6"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "25410778969384e03caf7f5b8d690aa9"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "ec6b4c6fd95dcef2011ed8eab876cd24"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "2168cfbadf60a731c25176329c9c8138"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "0dab6de602fad1de3141bdb7d54f69d6"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "1cf2796b7d6dd73b80775f3e3ba6ca54"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "a7ec776cb6ce9f6198ebad52549fde0e"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "281a97fa4d9a9a08772dd1504fdeda55"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "c88619e67de86033dd6a2876fe004e09"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "c76bec268b1f988f93bf37452f5ec046"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "2b57be4726ea7304b74ef58f6a9a0e33"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "442809ab31bcb9b763742870f4515ffd"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "6d3f491cd31b1cbcaf7294a54c87c411"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "d4020b652a950ec81d5ea921c6ae1342"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "53d5a1be9a265f2203259537fc69d037"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "7a99832accf98501f498de6c9a11de14"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "c8e88124e702aee6013b0b3559e6999c"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "38875e447ed54f1e110e9bfeb6b66480"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "52b5496345b629c6f113c448c9629006"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "397c1d324041d8e99fd56c589573409a"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "244f3427ab007057ffaad3c24d8e1476"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "9f4f00f130968180230326f0bc6737dd"
  },
  {
    "url": "figma/index.html",
    "revision": "cef8ed77190da8f6e9239010fa706c22"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "f5fa801d3404f03b3c1d52cbd2ea0559"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "47eba1801ef0606db69e9a154dead5c9"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "500ed5f08bbf20c9ebdf7c34763b82ad"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "c50c595c600fb511eaaf78927117f0b7"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "1857206d733713a8ce096b55e6cd306f"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "1757e86cad3ac7fe5f782d529816232d"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "b2f29a28f86ebe38147539bd52b690bc"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "961d81fbaef2abf1447f59d32c4d15b8"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "1306da899a77fc1af37c76633b10302e"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "d78538edea8820ee5d23c1522b6c9cf7"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "c0431fb9c10fc3d751bb841f03054c73"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "98fca062faeb9f95679c1dd6f99dadb0"
  },
  {
    "url": "flutter/index.html",
    "revision": "086e2e25f2f4600e3fed92c09dc4ebad"
  },
  {
    "url": "flutter/point.html",
    "revision": "b6916ce79800a4ca0170007555dc7ce8"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7ff98c74087c0742e7ff0e0cddeca297"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8ef37d7071a0556ec1d04aded2f74e0a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4f3cc744b5f6b34b282fb6b19a1eb384"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c7981370b13b330c1390d9f6fbecbb0b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4131ae8ca3a1bbe5a905b7555512b0b0"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "50b71055c7c187818bd625ac46c39c53"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f1acf33bd78d5bedd6f53730b465b257"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "762c993b1a125092fde247844c2ff4a4"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ebed9df94ae3242c3b613962d7c172e4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "224e0487977c3ea56b1eb88fbe83eb93"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9ea04527c84b8514be14fe35f516c221"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "bcc9d4476a723cf6c16dac2315e662aa"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "a09cd6e119ed77902d9d6737d9fa6b2d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "9376152dbd030c4ba78c1bf291f4398f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c93bb5ce4c9d0ed4f9d4486fd3c8fd22"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "519d590e700b005cf24813630247d300"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "24cb9d6b63bfdc48048f97b2679b2838"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "42b208d8290492167acf79e24b162e68"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "46de87c6672f73290e1e5e4a93138aaa"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a2f74cafe4f44b0be02f4037367650a1"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "dfc21ad9bdc523cd791c98e2580421e6"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "69159c67f49f5f38fe521fecc81f8d50"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5013f60c145f296cad89949fba7f6888"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7ab4202b797142676505784945d76cb9"
  },
  {
    "url": "haskell/index.html",
    "revision": "e9f529082901d9733456e7db5f039911"
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
    "url": "index.html",
    "revision": "6d615b9d014280dae05fd45ceb50061e"
  },
  {
    "url": "java/index.html",
    "revision": "a53c8d665b1b0f2c0b33c88704ff9333"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "9b4741f0c96995a8c2b4992efc46aca7"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "89036efcf4cc167ac2a4d09e35dd19fc"
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
    "revision": "0ac0d8f6fdb396bd9b8ccac597d26644"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "fab90acacdd5459d84a816a44ffdb115"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "5378471f77054ffeb676aad0418cde9d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "1299a58ec9655202307b5392c5277a01"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "a24ec3cd08c1e0aa1dfcb778b739163a"
  },
  {
    "url": "python/index.html",
    "revision": "aaccd3242480623cfc6c18ea963b0c05"
  },
  {
    "url": "python/poetry.html",
    "revision": "55ab6e523ca3d001ea1726019846bbbc"
  },
  {
    "url": "python/pyenv.html",
    "revision": "2c83bacc83f6ff9f1860fa64d408a7db"
  },
  {
    "url": "python/python-ase.html",
    "revision": "d63f3630e11f8652cc5381f88b9c996b"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "7cb7204e528fff30d4a67eecef1feb4b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2e32b7207612ec364224f5bfe579c87e"
  },
  {
    "url": "python/python-file.html",
    "revision": "70736c32e71c4ccbf72539ced608f622"
  },
  {
    "url": "python/python-function.html",
    "revision": "dca1b97567c02c80df4b3ea0fcf3b30f"
  },
  {
    "url": "python/python-generator.html",
    "revision": "b3499f425e1b34f31c983415ea050a74"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "393c3e81a6d22448b18786e4fbc594e0"
  },
  {
    "url": "python/python-module.html",
    "revision": "fefcd15ec9ac48b56ca4a00fb646934c"
  },
  {
    "url": "python/python-string.html",
    "revision": "944c9d34961a857bd703f98cee8a6a4e"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "1c779a967c6ec0bf8bad6d63c589c7f2"
  },
  {
    "url": "read/index.html",
    "revision": "213aaac9373cb84284e52c725157195b"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "8fb9af9d86cae479d212dbcac3cfc1e6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "167479e94049dc8f3354e139d388017b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "340ad257ca2d86dc1dcd987fa5cbca12"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "57351f5a0985066f902fa8d90e5a0321"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "e4f08390e306da27e075e505ad1a1d9c"
  },
  {
    "url": "swift/better/di.html",
    "revision": "eadfece29a779e397c80ce753c88a97a"
  },
  {
    "url": "swift/better/index.html",
    "revision": "71382181e09b22dd13ebd5838d5f0fa6"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d4a2cb4fc786fa4ca3ddfd0445be5822"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "ab7ee94eb7895ca3f5f7353cebc7afd6"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6b6a0e229e6a6d90a12a1d8633a9506b"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "b4d9e5d80e28b5634768bee2a215eaea"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "6635dd66da7d7a5228deba64949f9dc3"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "8b274fc258350be088b81f9c2ef17028"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "8b3a9740b0f43a90b0dbc0b7d2a1a327"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0b093c69a70b8816ab13e50bd44e02a7"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8d91fa70756672e5353118a7306a2a23"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "0590d86e236bee90c1179c0a07c95d11"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3e48e6a9f70ae237741287cd69881023"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "71f3f4b73706b242d709f1d1d4eec080"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "813cb8aad5bb2e1b825ee915cb63085f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "c1f7f63f34a88a1ed00aadc74bbb446b"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "f1d9f6024ad029b57b77c7e862b6d0d4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "ed4e5753a51d1172a91d0ea43f260d9a"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "51cd3c847b2b8cbaa98f43abba85182d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "343ea8f066713574a027ebbbd6e6c845"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "975dca8bc4d610cc31e9890e8cb0ea56"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "73c7610a927dfbb5c382e8c585a66d88"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "6573ccd5c688c36317e5f9cc6a84d15f"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "02c98290692038ba3f83e4525d6e9ad1"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "2e89ff21bf2138ef00e55018bfe85c02"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "587ba8e69d0e5affd1bb76c6a0644882"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "6db29c7b6c67469ea5b477c0f68d0bc1"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b06a4ebd9560b3a2561a8bf37201b479"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "9b4dd2a88030fe105e84de571e164c00"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c60012e9cbd9e8b46174e7feeb949703"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "d8ef3b1110d84cf316b3a0a6347a6b57"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "3e203d0702b952365e1558adb0ebd3f4"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "9283078689bd59b9c490bd6a3bd3519c"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "0b1e816dfa9379478190915389a255ae"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "bc7392fcf0aaf03b3759552905fbb001"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "4d70449f2e64bd0756edae4c89ab2e5d"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a8086277a6e7ea824ec6cdfc1755dd53"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "36a98883abe687177427fec4a12a5f54"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "7cb11a4367d763fc3ed94e24bd9c4861"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "737d852036a7132e9e6593dc0bdc144e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "91dedb592702e31771e040c9422acc33"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ac6553aa733add2d4b507bb3cfb9f991"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c4fd2d095cf9fdcc5fb889442606ceba"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "c66ea45a40c20583f962567684e6cbd7"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "3b6a26d3fd62c3cb2d24e794b8f7d43c"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c195d82e59d55326c5479e1f0bdc680f"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "7ac4d480c8fd8edc58dcfd9d72d9929b"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "278213e7085a0d0dcb25f5c546f391ec"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "7f997dad17e53f811e83198e47bbc06d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9bd6455db1410c8d45ddcc5e2ec7b43a"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "52a04911699c08d31c10b3701a8f3d9a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "fd993d92d2de80295367a2e6d7ca08d8"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "77ae4ee7dee148a72f1f7448b5768f67"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2adaf47a5207f0ee7357b4963c4a6241"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a563eb1dfebc0748271dc0c62dd193f1"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c4a443d69e428f6ac29152bfc266b52e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "28c97144ef12861231791a1530e7fd92"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "13d7bd387b8b903492aefd5bb3e8dbba"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "b14fc11b0e6691e033e9ef414b9ce552"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "ace83a1e782e804a37647512d308d6c2"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "96ff835c05ba7030d9c824536605c8d2"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "e33836522db6337abde59d35e88bd03b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "f4f5dd8b17daf1a2f4be6f489b6d268d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "63ff09707729ccbdbfcf5e2cf6e7740b"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "7841c507cb49163fb083273ee8d4b917"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "18588a54775511154098b851488c196f"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8d1b8df88ffb91df21810ecd5b9e4300"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b069307b92fb69f4f8e54fbc23e48c46"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9dd69c10b497819cca45d9d12c85164a"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "723cba396714c1728fa73c5db4225625"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "aa1a2da216d0e5eedbeb7cf4826b9fed"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "96057b7937db068730ceefc0127528d2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b1d8a91a8f7baced9c5b624f669f544b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "4d7c1e1d60788334f073158248947966"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c80a0a1834c67a85e13b3797e67e48fd"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a3e9608f1a833f619d162f398826ef20"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "4cc864463ff3c4fa5d08f9f711e8b657"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "caa0617e02912f36d497a69cc47a4814"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "c887b9110757e9548f4b18960c4d348c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2cc833e8dfc33eb25df49f404538d88f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "322f8cb5dc3c54d52d09618543cf8ee4"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "63c30960c81ddf210f54ec1f5b49a54d"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e89237e2afe53b865ed0272b1c872b31"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "55d32438317400aae578659c34494bf2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c41081a21aac64dd73e51311678b8f7e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "eaa7b277472eca4a91dc0a798f4ea313"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "beecabeb5ff5b4aa43a5d5c80cf07004"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "200b1e82a43fcf88c7bcf9b39fc9e2cc"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "cdad1c813e1fca61325bce278c1cd542"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "0e5717455f0a2a579831e4589eab9dcc"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "fbe99a2e67f41c363c4e4b86aa077902"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "25d50a50bf4ca25674d753cfd784ef8d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5bef954770cc5f5cbcfaadf00854fadd"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6bb968cb97bf490547db8592c1e0f3db"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1b198d09fc2914261c8c076bab0fe82c"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "cb30d006b053eda8a60ed3fa9270298c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "43e0ed6388e6365385f96817ba887975"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "5251c4c1477c539ee3de36c45a696083"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "835894a6b35210ad96a8e2db803f25d2"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "766d8044d08f0e37104e571bd7f2216d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2bafbb4fcef1a2f697aa0444f48290ca"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "db9b2b6c05ba695d06bdafb8ab4f7b9b"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "424322286cf02474df518089077ea07a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "1e547d595b3d3082c9b5bfc8c44ffbcb"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c0180bf84bb476c88e4b98519cdeb922"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "580293a91143814b07d9a89f6ffd1112"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "9d0451f845bb5cd8fa01d35bfadfa2e9"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "31e20db75a1564634824c600c0f47355"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "a1933cc443426bfa6593bd0c4ef79be8"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "f0983873fb67c979b9bce0784933dc10"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "3be058ea34334c057a03856c61ae11d5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "cf0da42d0fe8b21e88a184cac78495b4"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "72bfb404f808eafaf111050e5238875a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ec08eb3de6300930298f6b4e7b83b6e7"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2e5447b5f4bb5151a7fe22f38318fe3f"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "f458c04961dfcf14fbee08cd535841f9"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "8a3f8964a505ffa5f733af15cb91d150"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "de048a830acdff7cc68ddbf91fef91bc"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "3e717866164f5611d139345b42aee648"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "10de6e8c61ed931984572013fa4e17e4"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "2c1233e7fa552b11cd5c8980719ba81c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "51c7111dde667eb838e3d9fbd63ed905"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "1b238bd1fd9dbad9f7e1548b71661468"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4b2e73c0e7061eab08e5aa2fc3c32eea"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "3c67c50c78912728ee220a539939a933"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "cf5dd842d984eca50c1c5e6a07a89b79"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6ec74de7a7b26149c4774e59ac54fe29"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fc13eaf529bfca2204dc107a0f90ce24"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1f5480420d85e47c59dd49b6ea32b248"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b4e464811018fa82b4964d03a9c9ea53"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ff6ba3f1804a306d7209f557891162e1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "db74af95eaa603124b6331f7b2ce5ce6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "55a24687f0866936521c3964f2cf31fa"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1c7a0149348c80344df411938bca8dc7"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "336271a0da7666cd86131353b200024c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "35a0f0e6b6b8ebadc358073ff1bf2ff5"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "34942f67e92a63c3bd273d2a29aa888a"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "dd49206b22c37ddcb1305e7033d51249"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a943e1fcf630163702a4f11a2a157ecc"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "988ba12f6b7a65021b97a1ad602a09d0"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "221fc5939ae58ee84a0185462f2e3bdf"
  },
  {
    "url": "tag/django/index.html",
    "revision": "74c42443fe749338e33d0ca5e9e401be"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d762d39116562829d8bf969a64153691"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "e71dca19846071048196a1153f47eb46"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "2da80474c0c7777b2a744b36f28f1065"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "fff15fb6dfccaed70222aa61d1839c3b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d77d1da3e69c4c89d7c1aa7abdb39bac"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "2c4d400596e6e7fc822ac187c30fc893"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "5cc1fc5ba408a8f780c77c8aa6c7c9a8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1b8ec1d864a7801f3346eadb56ea880e"
  },
  {
    "url": "tag/github/index.html",
    "revision": "e56c74fa48b9484ec600f106790c7509"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7b0ffdbe487cef6b7d34e6dbb541e7ab"
  },
  {
    "url": "tag/html/index.html",
    "revision": "56010dc7ce4a3f81c94b0bf2a0268b4b"
  },
  {
    "url": "tag/index.html",
    "revision": "ea1768d3665e552a6571fb74cfdc9c12"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a494ce6172e79911d3ea583d1fd8cbb1"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "0cfc7e27b7d1052a29d4b09a232dc4ea"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "aa53832cf0243b1c03f40acd5196e6ba"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "9c801495802dc5831d99dcacac341691"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a6196f268c0c10dd1a9057f00ce6e70b"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "df1658ce7eafa8f0a11e5be947f61213"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f66f03a1253a3c418a55d88a7993399b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "381a3b638b27f96457eca09bac786ab6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "8e7929dd6ad1838aaadd3fdb933ec67b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "cfec999f49b089a018b61c7ebf26c3ba"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b1a4403760dbcfb079ef3ea4f98e3bfa"
  },
  {
    "url": "tag/json/index.html",
    "revision": "06bf55b80eec68b1cb2066c407e09fdd"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "882974e82230f5a6dd31d3c412675e85"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "612d1ae9cf2bba0e29979e2f76323e65"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "d312e9cc362c1af578f5162e40ac760c"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "3cf9fc7e94026ae0caa6938fa2d5ec63"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ab9105d535c3a0d5b7c41415b4b38957"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "41cf9feee234dcc45ee9cf0a6e494362"
  },
  {
    "url": "tag/read/index.html",
    "revision": "408e2be71e810d80dc2ffcd241eebd33"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "78d7448be2b202469fee32eb5700d73c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "2e985571d1bd80e5186f716cce645bae"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "57baa40143f28942fb2d05c8a56d8843"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "7bbb6ec6f005075c20f23fea17aff84e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cc03efdb7c63f7eaa5524ec74c3b6e93"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "c490357489aa04cbe680afad36a12efa"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "48b5eca9a5750533c0ab3069a0eb6b96"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "470883c87ec70fa9aa4b43ff4b002202"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "19a5f822720020be5cf739778ac55200"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "99aa8406af3b848a719c0e5462377c80"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "29d8bf14f30a62661342accb12bfe499"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "6a4cec1f570cad30957bfa0db007fb2d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "0d09c42551a6f61a3bc3af2fccc77002"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a596e6190759cae691af319dfdf3fb7f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "770c3255c8a99d346802dae67c421f21"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "9f0d0c881083bf69b76dfb23488e0dda"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d2df2e0727ba40051bd11caebb99ddf6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "619fadee2ebd867bf51f1f91e0906f18"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "6fc3036651b9ef0ff18d5be0c3c2cf6a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "8329c182ba83a5431a8607dbefe27a8a"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "de8c3c600680bc07b3f68857f261a1b6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "ed2db8849ad5b448098cc0071988e492"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b52cf71d7f674f3913f4f74b6582a4b1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1e374b5fa9246c0b8d5a835c00b1bcf8"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "deaf0714aa3a62c3f6d90f07e01cec2c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2572f644e1c1f1bb936f57f96053c2e9"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "0561261be8d76e99763a12c94b30f670"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "b3b5125da044fe012a285eb56e4edfa6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d2df347eba5474dc937788ff8bd85d23"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "dc21bc5fdd1e2cc21d41ad168ffe8e5c"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "1576f801f54ceac132dd7ba2dfcf181b"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b5f563bb815f807acbf38fbc56face97"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "7fa7503f09b8e2e7bc064b6dfea6ede1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "317e9c71ac1a08665dc073aa000b3543"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "14bf073c9a333822d6c7d75fb522c21a"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "a64311a69f562b01f5cce43e3fd32816"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "07b7afdf4a867d8cf092601cae2ef11e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7d3e3d65a45bafdbc7d5ff67f3e2feb2"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b14599bfa85a82b85d11608f88e01744"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7cb0e0777f3ad1e30ee6dc43bd6bab9a"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "88815146b0bfb3255ec12780fa41ae05"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e78eab6afc4de6f5fa7947e907a0ec3f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "be86384e13df5e0b37742ae3e9805a28"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "6c7335b55e54ee66b9aa1fa085e8d264"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "dd5a2091f4d92ca1507244d4161f4507"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "252db40ab8012b689a02a112476b2e35"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "480691da5b5b6ef04b1ce8e4f9a55b65"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "75d808cabfbb0cbd6d562505b60e920f"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "7b6effd56351ca9eb19c6e0279aa4191"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "835a2194714a2be7917c4641ed61e218"
  },
  {
    "url": "timeline/index.html",
    "revision": "fbe711dab700081b784f6a5dcefdc83d"
  },
  {
    "url": "tools/docsify.html",
    "revision": "b67fd22abdad9fc67d9b6e54348c026b"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d3706431ce1fa1b6281f3909801f7917"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "cabd9ae24f5780e6e49c8e4b4295f5c7"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "da47307ce9dcca605f98afb9986aeb7a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "389605801fdd971c03543b86eb7d9e56"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e6bdcd16b11ebdcf306802b16670bddc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "4d804db81fa439dd9d07b87563522e6f"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "4ee6d3f1c8f1ab3b82a277cb4883b707"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a3c14303c792122cbbe1bea2f1ae263e"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "e1d45bb79bcede1601280693ac7c5b99"
  },
  {
    "url": "tools/note/index.html",
    "revision": "e118615afe8501546c42d18d216cdf13"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "c8e86a482eb64211e7db68f98a4a2349"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5d1fdcd09cfd454705bd6deba721d46b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "2d68c00fc1e603c0f7ac06fbc712fd45"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "2030b6af85f768e7b1434c142f192149"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "f857f0ae2b661e157caf72952db49e4c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "94dcfb70b87ef942d5dc1726b4d36dbd"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "77dacf72013c841894924272525e47c3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "6adf463816f9dcfab551ad30af7ea592"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "330205bd4b55c50053eba4c485369e6a"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "6d3875492ad0fb1af0d654b29b257950"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "9d1e45cc13009ffa379e726d75823e5b"
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
