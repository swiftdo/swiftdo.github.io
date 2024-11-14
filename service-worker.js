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
    "revision": "51763bff7a27085ab3aa234194f14ffb"
  },
  {
    "url": "about/app/index.html",
    "revision": "81bd79496b56a8a8b2072f4176720aec"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "cd60dc1f99bfcbcaa99c369735ac936e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "7e61c21c0b1ea9d1b44683d812322d17"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "06437d971957cd75ea15dcfbe2a1d038"
  },
  {
    "url": "about/index/index.html",
    "revision": "a3a7af733d656be17b546b106662184c"
  },
  {
    "url": "ai/index.html",
    "revision": "f407582f0ace2f88499f5f9dab821042"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4e95a13f20b3976c9f7cadc88980f8bf"
  },
  {
    "url": "algorithms/index.html",
    "revision": "c07cdeb9ef24963318d77ac7d66383fc"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "5e78df2eeddc0cc19b6db632aab8b26b"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "1ca83e0b5266da83921ccc7f5ce3ac24"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "3c34cd7fd5a8834f2d687bb3638c8ae4"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "4ffbb2aa2044836a1d64a98afa830504"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "3bed553fef0121cddc8a1ab27c644f09"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "e452ffee762fd276cb106a18626e7733"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "ccb04b204175d13f35331d0d693c5c9b"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "cc963c6cbb23d2ba1128fc9a5c558dc6"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "c1dbe52966c9ed4c5ff6affc0952806f"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "31c8592e126700d5fe885c8c16090648"
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
    "url": "assets/js/100.22a2728b.js",
    "revision": "af94a9b086f49fb5244c218511a41210"
  },
  {
    "url": "assets/js/101.86074a49.js",
    "revision": "527ae229932e69a7fdc39eaab6a703f3"
  },
  {
    "url": "assets/js/102.3bf5e872.js",
    "revision": "2b8504c6181538ccbfa52d06d0dccdeb"
  },
  {
    "url": "assets/js/103.79a41c11.js",
    "revision": "b4bd2e97d6cc8c21eaae9e4db7d36de1"
  },
  {
    "url": "assets/js/104.24b27520.js",
    "revision": "66aa8fc8f139eed433669575ce479e20"
  },
  {
    "url": "assets/js/105.16d8fdf9.js",
    "revision": "e5ed0a91d26cb66a16d54432e0efdbdd"
  },
  {
    "url": "assets/js/106.32772f9d.js",
    "revision": "04fcf9b976ea273d4b53ae322bc1523e"
  },
  {
    "url": "assets/js/107.cc5463ec.js",
    "revision": "d0e4715c4d046cdda4717904e72e8e6a"
  },
  {
    "url": "assets/js/108.b415a5e6.js",
    "revision": "d509fee6d98c05de014162fc459e5ebb"
  },
  {
    "url": "assets/js/109.9867e1b8.js",
    "revision": "2f8a76abc5daa0a34038b7a2571d48ad"
  },
  {
    "url": "assets/js/110.39c3c738.js",
    "revision": "440c2a3c1b59de99cbf916fcce288940"
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
    "url": "assets/js/115.4dce97ab.js",
    "revision": "fa24baab85f13892193c78f3bc88414b"
  },
  {
    "url": "assets/js/116.7da0f747.js",
    "revision": "e4656120a93417a0d667fb165f5f5527"
  },
  {
    "url": "assets/js/117.046d87fd.js",
    "revision": "8e6193b645065c091cbeaf1a1a7a05e9"
  },
  {
    "url": "assets/js/118.85e80792.js",
    "revision": "8c4a6dec7750b9d2dc4c39f1d4e61719"
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
    "url": "assets/js/122.789c5eef.js",
    "revision": "c28843b7394cf52455833a2939edd99a"
  },
  {
    "url": "assets/js/123.848521ac.js",
    "revision": "8d59e81fd6d30b81e5bcac8f7c154753"
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
    "url": "assets/js/126.afaef7be.js",
    "revision": "e3925a2dc90b0c302a84e5a91772f488"
  },
  {
    "url": "assets/js/127.d740c9f1.js",
    "revision": "17d14daf10d6b4d1e2ed46d618496614"
  },
  {
    "url": "assets/js/128.9b75598c.js",
    "revision": "e7000c5e8f47c0e8e4cf0425b64db5f3"
  },
  {
    "url": "assets/js/129.e52b3641.js",
    "revision": "52b193e0bdceb733d79acc8df9abb52e"
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
    "url": "assets/js/133.f68e6b54.js",
    "revision": "a1fb438472c56d16ec4c6419fe45eb51"
  },
  {
    "url": "assets/js/134.ce8438c5.js",
    "revision": "bc3fbdd22f33f3b9bf2e7b571f6414c0"
  },
  {
    "url": "assets/js/135.e311dfea.js",
    "revision": "2a10a734abebe31871e37af9366780b5"
  },
  {
    "url": "assets/js/136.e54bf6f6.js",
    "revision": "c813d67de5ad162ca6dca26344141d4d"
  },
  {
    "url": "assets/js/137.f6810fd6.js",
    "revision": "108cb3d1154603c041ceebeb7859cf2f"
  },
  {
    "url": "assets/js/138.35125a43.js",
    "revision": "68e93b63e0c487eef0854abdc6c312c1"
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
    "url": "assets/js/141.7d559869.js",
    "revision": "f7201f80e3e899e374bacc77f2200eed"
  },
  {
    "url": "assets/js/142.17b16050.js",
    "revision": "e5db199853b9c4de6e7df122473c4692"
  },
  {
    "url": "assets/js/143.ffcbe888.js",
    "revision": "906104cffd46d77a8a1692e57ad8f4da"
  },
  {
    "url": "assets/js/144.4e4649e1.js",
    "revision": "fbfa17f2208d98358b6b04f2062890a5"
  },
  {
    "url": "assets/js/145.28442111.js",
    "revision": "7b0278c12acfa0d77b2aedda79ae4810"
  },
  {
    "url": "assets/js/146.e2645faa.js",
    "revision": "fa9d5e6f8feda0a6b41ed850084ae4f0"
  },
  {
    "url": "assets/js/147.88fbe495.js",
    "revision": "28472083693e54697c97478d5dae3191"
  },
  {
    "url": "assets/js/148.2668029c.js",
    "revision": "9170e2991ab375c81a1d59a1a75e2451"
  },
  {
    "url": "assets/js/149.92f9b23e.js",
    "revision": "42f5d4b684cdd0f0e31de447ff951ab6"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.04d340fe.js",
    "revision": "707d32a1c685264fcc9fd2e55472f0df"
  },
  {
    "url": "assets/js/151.18f9a120.js",
    "revision": "802e71f31df1bb7e38f4e310abacf47d"
  },
  {
    "url": "assets/js/152.c06fa424.js",
    "revision": "32b28aeb99cce1afbbf0288eefe6f43f"
  },
  {
    "url": "assets/js/153.d42e4841.js",
    "revision": "1fa224f4a5e80f24d83036881e4c7090"
  },
  {
    "url": "assets/js/154.f214718b.js",
    "revision": "930b6bd918b5ae2e1238a36eb599caeb"
  },
  {
    "url": "assets/js/155.f3bd0f43.js",
    "revision": "85a809e68b0e666f30b7f37ced62ee91"
  },
  {
    "url": "assets/js/156.4597e710.js",
    "revision": "107099f846e5dc9de8954ecde7ea5c10"
  },
  {
    "url": "assets/js/157.08d92fd7.js",
    "revision": "0f5fd8f49215689f768c6d41e310eef6"
  },
  {
    "url": "assets/js/158.5e01ba69.js",
    "revision": "eb1192dbff6ddc61993e59d76d6ab063"
  },
  {
    "url": "assets/js/159.68021fa3.js",
    "revision": "f7b5aa58a58c49bdd35eef3d9cdea8d1"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.093e7db3.js",
    "revision": "e999d4d29de8e67e0c5efaa5a63b0325"
  },
  {
    "url": "assets/js/161.d565328d.js",
    "revision": "a25dd1e69982e9b5ed7194b0b96b1a1b"
  },
  {
    "url": "assets/js/162.181f81c7.js",
    "revision": "ccc473ce47bedfdefcba79d35ee693aa"
  },
  {
    "url": "assets/js/163.5ca197da.js",
    "revision": "986e0328c2e8e20bdfbb35c4a489f393"
  },
  {
    "url": "assets/js/164.21b65015.js",
    "revision": "b4c940569ecb3848380eb5fc5b2b056c"
  },
  {
    "url": "assets/js/165.33c4bf69.js",
    "revision": "11fd94ae952f06a37f9e888f56ea6fb6"
  },
  {
    "url": "assets/js/166.63a8d8db.js",
    "revision": "7ac8c6e4af555a85c465e8c94a7dff1a"
  },
  {
    "url": "assets/js/167.18fee816.js",
    "revision": "80c09f6f5d0e74d6eb339e8fc60ddb96"
  },
  {
    "url": "assets/js/168.89cd554c.js",
    "revision": "2eda6a10b7763644a653f9253aefe1eb"
  },
  {
    "url": "assets/js/169.05d314d9.js",
    "revision": "699763aba846af76fe5ce20d1b9f85e8"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.04395d8e.js",
    "revision": "ac3e41bec218e5cdfc245ca25da47591"
  },
  {
    "url": "assets/js/171.219666e4.js",
    "revision": "4d3a4d36c8e6a2dbd859cdad2fc8e39d"
  },
  {
    "url": "assets/js/172.ef02574c.js",
    "revision": "6a65b48b8f518ca6255fd1b0a79f3d81"
  },
  {
    "url": "assets/js/173.805b6cf8.js",
    "revision": "20c5a5c4fbd2fcfb55e1e7987dba70e2"
  },
  {
    "url": "assets/js/174.76e809a2.js",
    "revision": "0c8ab159691ebdb1204bde6aac170a10"
  },
  {
    "url": "assets/js/175.60324bea.js",
    "revision": "816b7a181024167952f6a873767274e9"
  },
  {
    "url": "assets/js/176.a12e875a.js",
    "revision": "f59d9b37da812e84344e4780c1fc1874"
  },
  {
    "url": "assets/js/177.82cdd018.js",
    "revision": "b8424a059bc55d3ec2dd2a04c6fa2e67"
  },
  {
    "url": "assets/js/178.ff5dacb9.js",
    "revision": "6a8daf56b50f01a1eda0573e72fffc34"
  },
  {
    "url": "assets/js/179.3d699a64.js",
    "revision": "07a0d7d67c243085b611e04f1e106f0a"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.a0f4837c.js",
    "revision": "feb1328c4a7b9d65784bcc9daa3102f1"
  },
  {
    "url": "assets/js/181.ff4ae24c.js",
    "revision": "ebf97e50d4a23b5a6c8d091d5f2445f2"
  },
  {
    "url": "assets/js/182.dc968e2c.js",
    "revision": "305e974cf06f4586118219d7ca1176d0"
  },
  {
    "url": "assets/js/183.7248ec51.js",
    "revision": "3480686c6c98a85c0f5d1a662474f5e5"
  },
  {
    "url": "assets/js/184.90d9aeb0.js",
    "revision": "bd7a50e2df8734a4e945ac7823c1ec16"
  },
  {
    "url": "assets/js/185.bd3f12e5.js",
    "revision": "a76fb34025e8f93ba58c72bcec8e58b6"
  },
  {
    "url": "assets/js/186.bdb4b844.js",
    "revision": "2a8f839b4e5837415c9e978cfe7ccade"
  },
  {
    "url": "assets/js/187.c9d4c4ae.js",
    "revision": "51819f31aff08a7baa79ee4f023549e4"
  },
  {
    "url": "assets/js/188.3ff5526a.js",
    "revision": "bcb55e81fcaa57810b6c8871e2fbfcd9"
  },
  {
    "url": "assets/js/189.6688c44a.js",
    "revision": "ad799014f4c64643271ce71bb2b9b631"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.8e2b1534.js",
    "revision": "3c01b08ad89e1af8f8571a78217f23b1"
  },
  {
    "url": "assets/js/191.c8e2cf42.js",
    "revision": "b55e8b7cbcf16e80b168647ddc2ab49f"
  },
  {
    "url": "assets/js/192.4b1ce18a.js",
    "revision": "28f8862877bf76eeed888e20e2a157c6"
  },
  {
    "url": "assets/js/193.4565f928.js",
    "revision": "673b916ef4ab8374c9e4a395805f6b38"
  },
  {
    "url": "assets/js/194.261d3322.js",
    "revision": "520c3ffb3fe548a55a603c0378bf0032"
  },
  {
    "url": "assets/js/195.37387cef.js",
    "revision": "945235858e076504b2d1b25621a27d20"
  },
  {
    "url": "assets/js/196.372fc8e7.js",
    "revision": "ef83f4ad0129adeb3b19889f66dc54fa"
  },
  {
    "url": "assets/js/197.0bb0f20d.js",
    "revision": "e24983b5d1351d6c880a18207ef85fc9"
  },
  {
    "url": "assets/js/198.fecf5192.js",
    "revision": "d629fbed8030a178badb54e718a338e6"
  },
  {
    "url": "assets/js/199.eb3c9a10.js",
    "revision": "88f19619681d769e882c7cfaded2544e"
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
    "url": "assets/js/200.7dd4a3b6.js",
    "revision": "298e73f634aa88e0bdaa6f839c22d35d"
  },
  {
    "url": "assets/js/201.28ea4e1d.js",
    "revision": "70252d6b2e93ea601cabdf2d7eaf13fe"
  },
  {
    "url": "assets/js/202.fbb84ba4.js",
    "revision": "783a219b99dee18819c9baa5d1d699a2"
  },
  {
    "url": "assets/js/203.c54445ab.js",
    "revision": "171339c2ff6704651cb49749b4218b0d"
  },
  {
    "url": "assets/js/204.68f23619.js",
    "revision": "5bfcd14a08e430e36638fd03811c143b"
  },
  {
    "url": "assets/js/205.f0639d0c.js",
    "revision": "ecd8a3de591f01d66d373c64a9bf2f65"
  },
  {
    "url": "assets/js/206.b864ab3f.js",
    "revision": "1a365cec28bde7cd9984054de01ce73c"
  },
  {
    "url": "assets/js/207.93bdb29a.js",
    "revision": "9f1197f90179aaca830bc903cbc86f47"
  },
  {
    "url": "assets/js/208.06ae02b7.js",
    "revision": "fff956263cdcfcd90be84c2fbd4ceaed"
  },
  {
    "url": "assets/js/209.2633c833.js",
    "revision": "bbc5c955038fec8368648dc8ad3c50c1"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.e79da039.js",
    "revision": "5b0d589f71b785ab64e85d26e7f229fc"
  },
  {
    "url": "assets/js/211.11d69695.js",
    "revision": "f70151d638e5b9b442fb4dde8a572d5b"
  },
  {
    "url": "assets/js/212.80425459.js",
    "revision": "e0fdc7369dd2b6811fb9595fbd5d8f32"
  },
  {
    "url": "assets/js/213.7ab7ad2f.js",
    "revision": "373ec14e16cb431c125eb5af662a5e7d"
  },
  {
    "url": "assets/js/214.e27a39a5.js",
    "revision": "1ab1004997bdd32d690d280c6b232661"
  },
  {
    "url": "assets/js/215.8c446f32.js",
    "revision": "6a283e22c7ce6ea9138523ecee64ee27"
  },
  {
    "url": "assets/js/216.f4a55c23.js",
    "revision": "3264de06ceca6fb0f9b65eaf746c549e"
  },
  {
    "url": "assets/js/217.751e519d.js",
    "revision": "dafefa0248abeb98f7da786a4a019057"
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
    "url": "assets/js/221.3305b5fd.js",
    "revision": "f0588f871c2604b1406e904181582740"
  },
  {
    "url": "assets/js/222.2bbf5e67.js",
    "revision": "0b871343af1967b5a02f552c69e9d4aa"
  },
  {
    "url": "assets/js/223.f36eb589.js",
    "revision": "cbbcab6e8c1fdcd7a4b18c8ba84a68ae"
  },
  {
    "url": "assets/js/224.f2e7ca9a.js",
    "revision": "eea03bfa0d5f6c76be201bafa895ef83"
  },
  {
    "url": "assets/js/225.6539662f.js",
    "revision": "b1abe8d1207dd28c5cc3542e8b175d00"
  },
  {
    "url": "assets/js/226.692aef9e.js",
    "revision": "215c88a0c3b3390d6369d61be86a07ce"
  },
  {
    "url": "assets/js/227.fe443695.js",
    "revision": "7cddcfa52fc0ea6ae21f94ba0114cf3d"
  },
  {
    "url": "assets/js/228.399de407.js",
    "revision": "a8161fb16f0d43f91628507f351f915c"
  },
  {
    "url": "assets/js/229.fc050c35.js",
    "revision": "40f909ca2970e152fb7ac6963368194b"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.7908b08c.js",
    "revision": "d40d0fe96e83838937ffd8a132a77567"
  },
  {
    "url": "assets/js/231.86c225b1.js",
    "revision": "b1b745d6712353721f6c7961a8ccee27"
  },
  {
    "url": "assets/js/232.94171afa.js",
    "revision": "eaabc42b88a39b21fcc27ffd5f0f3c6e"
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
    "url": "assets/js/237.31ef35c4.js",
    "revision": "f09b4b6818849d774b4eff8906158172"
  },
  {
    "url": "assets/js/238.014ab9d5.js",
    "revision": "aab0935da8a0d6662420b3a3ef68821a"
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
    "url": "assets/js/240.1ea24883.js",
    "revision": "12c65ecd7eb243ca0aa8aa68d515c57d"
  },
  {
    "url": "assets/js/241.3073d1d7.js",
    "revision": "9cd654e08b2299fe51dd75a74e1de9db"
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
    "url": "assets/js/247.8d54a09f.js",
    "revision": "e48ef34b1796466bc68493e0e175a642"
  },
  {
    "url": "assets/js/248.5dcd724c.js",
    "revision": "73a7f5fc081b0916e898f4418526d7e9"
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
    "url": "assets/js/250.dfd4b175.js",
    "revision": "d83578267bc4ff8a8149a759b347615e"
  },
  {
    "url": "assets/js/251.450b550f.js",
    "revision": "0b6f06de8761a2d01e606adf8542dd45"
  },
  {
    "url": "assets/js/252.bbe8a506.js",
    "revision": "10bc495e8fa33907500f197c4ac9f530"
  },
  {
    "url": "assets/js/253.8111813a.js",
    "revision": "f519dc973c54efd90da3ef276d622eaa"
  },
  {
    "url": "assets/js/254.d098287d.js",
    "revision": "8bd70cfd4e6fb454f3c708b5e7bbd575"
  },
  {
    "url": "assets/js/255.72444c47.js",
    "revision": "05059c10a4d90f12578e1bca4659d57a"
  },
  {
    "url": "assets/js/256.2a638f6b.js",
    "revision": "c175369942b9753bbd38b17bf986f0e1"
  },
  {
    "url": "assets/js/257.a5b094ff.js",
    "revision": "8cdb278b463592581b392bfab75e66ea"
  },
  {
    "url": "assets/js/258.5725c8a1.js",
    "revision": "f57250fe8997270ddf8801bf08e1bd57"
  },
  {
    "url": "assets/js/259.aefd0dec.js",
    "revision": "439f4b87f94329eb913a0388a43a24db"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.8c6abbf1.js",
    "revision": "9f078a50dc8408ceda77768a9114dedf"
  },
  {
    "url": "assets/js/261.b660b52b.js",
    "revision": "faf114166abeba53039e59766f659759"
  },
  {
    "url": "assets/js/262.a6baa685.js",
    "revision": "1fa0c37479d3cba4548242babe43c12f"
  },
  {
    "url": "assets/js/263.835ba732.js",
    "revision": "02752509c757e98a4b21dc5a4dd8964c"
  },
  {
    "url": "assets/js/264.4c33bb54.js",
    "revision": "b8e2624902d2dda639651278667a54f6"
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
    "url": "assets/js/267.d0c720b6.js",
    "revision": "16152c3aa028a8504a90d3ca29bb4006"
  },
  {
    "url": "assets/js/268.e58e165b.js",
    "revision": "929b547eb1829123063d8c536f6a3a22"
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
    "url": "assets/js/270.6d70ed74.js",
    "revision": "665e701f52d6037857c46e1b4c525d9e"
  },
  {
    "url": "assets/js/271.7628599b.js",
    "revision": "4c5da663e6c7f217faa1998aecb4514c"
  },
  {
    "url": "assets/js/272.86fde93b.js",
    "revision": "d63dc30dc4cf8e63f06e86e20c87b9ea"
  },
  {
    "url": "assets/js/273.e05a23d0.js",
    "revision": "4db47ca4289460fd97caead3806d9970"
  },
  {
    "url": "assets/js/274.41535384.js",
    "revision": "823f87a243392ca93cf50817dff1de5b"
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
    "url": "assets/js/278.208b10ae.js",
    "revision": "870fa43596c9196548411995bf07bbd0"
  },
  {
    "url": "assets/js/279.ef1aad13.js",
    "revision": "ac686f1343e6b38e3a6b8f97f1a15fa5"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.5789875b.js",
    "revision": "dabce14af27a0443c60dde24a82ab1fb"
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
    "url": "assets/js/283.2c8028ec.js",
    "revision": "beaaad3ea10d9153478837bbcce34027"
  },
  {
    "url": "assets/js/284.d6c1d13d.js",
    "revision": "6fd0d863299df8682877afb87d6d1c3a"
  },
  {
    "url": "assets/js/285.93685fd2.js",
    "revision": "d50cd537ea6cd5dbb0f34353793a92bc"
  },
  {
    "url": "assets/js/286.b290055b.js",
    "revision": "9c3599691222688b0c3f4ba29f5c1752"
  },
  {
    "url": "assets/js/287.c07fa6be.js",
    "revision": "f073e2e156a0c367457c4f42df7642fa"
  },
  {
    "url": "assets/js/288.8e7a0ffd.js",
    "revision": "4b59b988ffc20bb491da6f2927ce9dd1"
  },
  {
    "url": "assets/js/289.9b05bf28.js",
    "revision": "7dd6a42d1b298c5f2d2699e0c08d724e"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.8881b87b.js",
    "revision": "fc4e87c94069d9e7d687fd111bca672a"
  },
  {
    "url": "assets/js/291.19ae4769.js",
    "revision": "3eda079046f652b8f13edd34ac7682b7"
  },
  {
    "url": "assets/js/292.e224381d.js",
    "revision": "075d7b933804257d99fd8fe4b2bd9be1"
  },
  {
    "url": "assets/js/293.a04e2ce0.js",
    "revision": "c984029a1671abf831a0bb6744fc5958"
  },
  {
    "url": "assets/js/294.926e2261.js",
    "revision": "31c8f396bf3e5d045df239c637d6c5e7"
  },
  {
    "url": "assets/js/295.e03f5007.js",
    "revision": "7f880ada08c3752897c45d08bb82b2f2"
  },
  {
    "url": "assets/js/296.e2228493.js",
    "revision": "4c90a8157a489b81be94c8a135712cd5"
  },
  {
    "url": "assets/js/297.c2de9bc9.js",
    "revision": "b59700a26771b6995ff0187346503a7e"
  },
  {
    "url": "assets/js/298.b7c00d93.js",
    "revision": "21f4fe58641589cfa19e86c89c471008"
  },
  {
    "url": "assets/js/299.4253059f.js",
    "revision": "12a43d9d481992b05b106364d815e313"
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
    "url": "assets/js/300.f792c348.js",
    "revision": "17f6eb50730748844b46e90eb2b6df34"
  },
  {
    "url": "assets/js/301.da741812.js",
    "revision": "a7c4ae71289b455248ef7bd0640d839a"
  },
  {
    "url": "assets/js/302.00d4aefe.js",
    "revision": "5b7426448a5fcb7af6071d9112e4ec84"
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
    "url": "assets/js/305.4a1a6bfa.js",
    "revision": "00c7c278c7e8140a22d50d2b3a113402"
  },
  {
    "url": "assets/js/306.8df566ab.js",
    "revision": "c7f860fcee687e31c81f7f5afda4a547"
  },
  {
    "url": "assets/js/307.03ee2a9b.js",
    "revision": "83b723bd3d147f3576b39aa330b02ee2"
  },
  {
    "url": "assets/js/308.eda164db.js",
    "revision": "d70f3eaa07c761b348434ac2dd4d50a8"
  },
  {
    "url": "assets/js/309.cf17789e.js",
    "revision": "e12f44d3b5cdb8ab62d9a70fe600d457"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.6a156966.js",
    "revision": "f00af8e3423d446ccc539c0b2190408d"
  },
  {
    "url": "assets/js/311.c7d6c678.js",
    "revision": "c334cf6328cf77655bcd71ef6917a2af"
  },
  {
    "url": "assets/js/312.94695726.js",
    "revision": "9d241120c978154f5cd553f200fb5856"
  },
  {
    "url": "assets/js/313.fcc734cb.js",
    "revision": "31394242f7f8221d61ba2e10baf438bb"
  },
  {
    "url": "assets/js/314.a12c92b1.js",
    "revision": "8dc23e403e1d1ad86c568b54a9e81047"
  },
  {
    "url": "assets/js/315.3b7662f0.js",
    "revision": "b23e32e3ec9c41e9d1a53f7ea7655905"
  },
  {
    "url": "assets/js/316.6c2b42b2.js",
    "revision": "dae4f49a0911a4a2ec07ef60894808a9"
  },
  {
    "url": "assets/js/317.63670928.js",
    "revision": "5343939d077c2f155e111f6dcb424ef9"
  },
  {
    "url": "assets/js/318.8bce6bb5.js",
    "revision": "d04e5a6c1edb62d05c11507fa5815ea5"
  },
  {
    "url": "assets/js/319.e6b91646.js",
    "revision": "e7ebc056bed531ef9f38175f740e404e"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.9ac0686b.js",
    "revision": "61795f0154ea7018f5c3535f3c6cd801"
  },
  {
    "url": "assets/js/321.3f1da970.js",
    "revision": "7503fd7da5cbf7892d25ed75dc8b0265"
  },
  {
    "url": "assets/js/322.6c65e1d9.js",
    "revision": "0ebea66dfd69b7b24b27d4bdca5acd35"
  },
  {
    "url": "assets/js/323.27014bd9.js",
    "revision": "187e5b073b78c0c7c16f37f9b7d8c04e"
  },
  {
    "url": "assets/js/324.fcba4df1.js",
    "revision": "1807ad27f252159842f41519d207c471"
  },
  {
    "url": "assets/js/325.4695a336.js",
    "revision": "0ab03baba75c27579df969956dc6398c"
  },
  {
    "url": "assets/js/326.34616bfb.js",
    "revision": "d05a3822e33da59a8a965af1559bf854"
  },
  {
    "url": "assets/js/327.e607db63.js",
    "revision": "48f18daa8b1f84634e663e789a9264d0"
  },
  {
    "url": "assets/js/328.cd3aebe7.js",
    "revision": "580b4414548eba6c83eedece5f36cf2e"
  },
  {
    "url": "assets/js/329.bd96e459.js",
    "revision": "e9164999f8b464f44d9201f8931cecf6"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/330.08e8046c.js",
    "revision": "4b0ed0b148c9cff29f0bf9167b9b699b"
  },
  {
    "url": "assets/js/331.fe1a1ffa.js",
    "revision": "d7673d700ffb5ab3714cbe56f0ddb3c1"
  },
  {
    "url": "assets/js/332.39fde102.js",
    "revision": "9df431f88d1ac48a90bd9cdb1bee8beb"
  },
  {
    "url": "assets/js/333.878a733c.js",
    "revision": "dcc2563beceb86ebb71dd66c1f0ba633"
  },
  {
    "url": "assets/js/334.287221d6.js",
    "revision": "dcd42edf3164a829400a95bc13ac3e28"
  },
  {
    "url": "assets/js/335.a26ff05c.js",
    "revision": "53075ec5a21c3a94581f8b4f03676dd8"
  },
  {
    "url": "assets/js/336.11644ad7.js",
    "revision": "d7ef78f4889a2c054e1de8e3cc62474d"
  },
  {
    "url": "assets/js/337.c63bd1e2.js",
    "revision": "aa6be11935a4a1d0f72ed5efb7e3c27a"
  },
  {
    "url": "assets/js/338.b4b64e35.js",
    "revision": "3777bee9a6e13266966ce6fc7ad2fadc"
  },
  {
    "url": "assets/js/339.8b07186c.js",
    "revision": "fd45f699c9f7778e5e2fcae0b15a5ddf"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/340.ff92a817.js",
    "revision": "1e05de4689a74c8c0303abaa1c33865f"
  },
  {
    "url": "assets/js/341.2e6a63e4.js",
    "revision": "f7182ef04d0d0dfee486edab0351720d"
  },
  {
    "url": "assets/js/342.c5dfb15c.js",
    "revision": "711562e50393c4694b84e79d70728e02"
  },
  {
    "url": "assets/js/343.6e6f9922.js",
    "revision": "0405ac374eb9124a1a64c6dc1d8e6d4d"
  },
  {
    "url": "assets/js/344.66eb7f8d.js",
    "revision": "6f4cd981978c5075c008feaee4a42c06"
  },
  {
    "url": "assets/js/345.f6ce56cd.js",
    "revision": "777f13142c8a37fbef07970158a9eb07"
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
    "url": "assets/js/39.d98ef824.js",
    "revision": "be9d5ed0ed7f08cfa8c58aefa206c05a"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.4600d658.js",
    "revision": "13f17db84c21c7b02109a6d1a10e9bfb"
  },
  {
    "url": "assets/js/41.a03eb21a.js",
    "revision": "f7003219e839dcac79693799fd1ddf68"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.a31630bf.js",
    "revision": "4789e908ce6f33897cb865b51b3841ac"
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
    "url": "assets/js/50.daaf0520.js",
    "revision": "01fa2243d47357c0716356f815a82144"
  },
  {
    "url": "assets/js/51.4aca88f4.js",
    "revision": "c0852cda5add6286ee1a5501f920d9e7"
  },
  {
    "url": "assets/js/52.b614984f.js",
    "revision": "4971b998f94d9a08424d40f044e3a920"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.e9b811ff.js",
    "revision": "7f4f35e18d00e60b32acadcf93fd32c6"
  },
  {
    "url": "assets/js/55.2890cd6d.js",
    "revision": "2c7ac47f156bf2a7b42ed66e8aa81b72"
  },
  {
    "url": "assets/js/56.21458346.js",
    "revision": "d2bb22cf0fedfce6d8362479966fcdfd"
  },
  {
    "url": "assets/js/57.7a3df85c.js",
    "revision": "fca67054031cb8a7848d6c1e1b3dc0eb"
  },
  {
    "url": "assets/js/58.e5e445bc.js",
    "revision": "9b1d1f5570b887d74f75f3bf81b36d76"
  },
  {
    "url": "assets/js/59.895de05d.js",
    "revision": "8f1ac0169ded9c9190904fef1ab757b4"
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
    "url": "assets/js/64.5c0091c8.js",
    "revision": "171b8b6cf87f72bfe3fd0a2fbda2e5c4"
  },
  {
    "url": "assets/js/65.0d18b526.js",
    "revision": "90643b756ae1cab40be49f193187021b"
  },
  {
    "url": "assets/js/66.c51ef002.js",
    "revision": "9ac4d6658ed77d09c2d43e435bca4d81"
  },
  {
    "url": "assets/js/67.8f335cc9.js",
    "revision": "ec796a5b1d82d5accefcf785c75f723d"
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
    "url": "assets/js/72.d5082849.js",
    "revision": "362aa314b5fed2c3a2faaea5adad487d"
  },
  {
    "url": "assets/js/73.55edb1c4.js",
    "revision": "be367a7d0f7737199095a830c2f3a9ac"
  },
  {
    "url": "assets/js/74.0d8d7347.js",
    "revision": "a3cc8af485400c173a761f644f5a1008"
  },
  {
    "url": "assets/js/75.12da5957.js",
    "revision": "c1f98047b3c9a4254dc4aeb27c81b585"
  },
  {
    "url": "assets/js/76.6ed3f5cc.js",
    "revision": "07d3a37f21831800633e4e25436031a6"
  },
  {
    "url": "assets/js/77.78c60725.js",
    "revision": "470a8edfe59411b4ad00a2d219d34609"
  },
  {
    "url": "assets/js/78.5cf1c207.js",
    "revision": "74e36c5c592d92b8c398b0c7268510db"
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
    "url": "assets/js/80.e0e3e65e.js",
    "revision": "603fb3d86cacc61fe82f16cb50b8b7b3"
  },
  {
    "url": "assets/js/81.e638bc6f.js",
    "revision": "2ada032ec096912e2b33f490f3636c1b"
  },
  {
    "url": "assets/js/82.1052902e.js",
    "revision": "2ba0d6c01ce2823d826bebc5dbe86b74"
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
    "url": "assets/js/85.253cee0f.js",
    "revision": "08ca9ce287372da325f5161c6d5e579c"
  },
  {
    "url": "assets/js/86.5d11431f.js",
    "revision": "fe75730b14a0851235a3c147df668df0"
  },
  {
    "url": "assets/js/87.9dabeeed.js",
    "revision": "0cb6251ea73a76d2e60afdafdca4974d"
  },
  {
    "url": "assets/js/88.ed34d707.js",
    "revision": "9120646f637fe2d8a039231cfa32dda6"
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
    "url": "assets/js/91.4eb8b6a1.js",
    "revision": "4a39bcd1d11293897fba73a81b0b6c94"
  },
  {
    "url": "assets/js/92.003ae620.js",
    "revision": "31eab006d6234e0fc779c0c9c2d4357e"
  },
  {
    "url": "assets/js/93.0f9d7a79.js",
    "revision": "134d06dc70f01e20c849d43de4945bff"
  },
  {
    "url": "assets/js/94.b6c3c037.js",
    "revision": "d5fe04b0e577a565d83b99c3384d9508"
  },
  {
    "url": "assets/js/95.b88fceb5.js",
    "revision": "8f3fdd267a4579feb0308c58360aa06b"
  },
  {
    "url": "assets/js/96.947c3907.js",
    "revision": "371be016a924e9f5c37bcf1313893f39"
  },
  {
    "url": "assets/js/97.a1a31748.js",
    "revision": "2cb32e9f7ccc92acf3bb7cdd6b85f71f"
  },
  {
    "url": "assets/js/98.af86dac0.js",
    "revision": "a753ce319cb90cfff2179148f5750e93"
  },
  {
    "url": "assets/js/99.905b6ad6.js",
    "revision": "f65e087d304634ce46b6cddc78c26175"
  },
  {
    "url": "assets/js/app.99d59edd.js",
    "revision": "5d4cfdca9d2df0204f6cbfaa195f1fb3"
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
    "revision": "4e7594fb5599f4605752937020cf6a2b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "138051b46c8ea56d224974b77e6c4217"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "5845f20e4308b985eff054e01340f584"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "dd70bdeb25887918fb1daf4ac095bcd1"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "803afbf89d1888bad5591954f218b0eb"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "6cbf9de87dbea20441c120c536b07e2b"
  },
  {
    "url": "c/audio/index.html",
    "revision": "3a7e500a81cc9347349f6ce69f6f4c98"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8cafe5d2a045ea183d41fa48d3c3d67c"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "cdc656b9786ac59dd07d98631bf9c678"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "3733562316848d2d2875e3c4327de6ca"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "99b43ec920ede1f84df79a0b400a9e5b"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b7703f95cfa144d0f8bd62e41f83cf02"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "344d2f5e4e4164b4c4a638fff6526be7"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "1e8d5abbad6094de8c66a575b15b36e2"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "13d773e31184116f431afdc8dddc0b63"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "e6f00841d739f69476d9a14d472fc744"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "ab42440fe7b1e6a994c2f05f904fdadb"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "25e99c922a19a388f61a5ac8ee950cba"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "87f529f30bfee65aef932339c46fafc4"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8eb94e42ec61004be250d75f2792f0ea"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "103c20c9f174544ac71f6679c9e0f5b8"
  },
  {
    "url": "c/program/index.html",
    "revision": "aab74ae878f4d0d2d06e9770a9dc01e4"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "8538b0fd848678ca09e86f3d63f76312"
  },
  {
    "url": "categories/index.html",
    "revision": "e56e53cc7a512884c826fc56aa7cdb83"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "41d5a6dc82056d861c9165a8126fdc06"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "f93030007e2e38c1dda57ffa57f85bad"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "e8df08414ea223cb621739f52e442dc1"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8670cc37302e652fe8596e2bb20f350d"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "2008c6a604e3ccb98186acaaa0af75b5"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "e3f49ccb7a8d23279e282e8328ce4434"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "9d664d381ba0b0c1e22f795d038e3019"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "1123817c559c5e9e3618a0fa4ee40716"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "9ab913434cadc5f82b3c6a4356b33bc0"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "36ac0cd700359410d5113d2add77b814"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "bfe7e694c0223de3fcfae0e7a2f490a7"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "deada9a1531cb5a710a81acffa3ac450"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "56b1a30b8ee4d5b528d5a80188c24af5"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "32f8d2e712c9905d908853104b510774"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "0071209074eb6d2dba95a7aab2fd9592"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "16772741de92bc8157894664f89f8ae1"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "9e5881c1df942f5f799a1c679d79be0f"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "f3c0fa5e63ccf43bd755e38da7dd9f47"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "c49de1b4f89f449809ba91e245557841"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "87774fd3148754683b8bc65e7a89846c"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "594d23199a215f46bc7b29e642b8fa89"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "772ba04ec90e6c5b314c9fe96006715d"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "8ab653a2ea1c22a669ff521622c02d5b"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "2292b6c712670ba64435d430780ed449"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "e6ca0073d30a18a6f3aa9007d2261051"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "265961b292f48b636d167a069adc1011"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "67ddc5972274c31ad477fc03074d1fd1"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "f0c44f697fee97cc2125b39a612fb492"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "02d382e6cc4e267eb5d449a2b63842b3"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "c3b5c2141acdf05b77065429db1e7ccf"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "01e9daf10416c5a5dfda6263976318ea"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "476095a6ee95f247781ee552ab2e3b29"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "a6f5d0fadf0ad75df701071c4f8ca2b2"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "319542e99c7cdec536c65a415df211cb"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "03f19b4b8db482029494901e99002573"
  },
  {
    "url": "figma/index.html",
    "revision": "b06bbdfe3cede0caaa03f5d1a5ec859b"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7dd56801587e9ffbaeb5c7add8c84115"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "9b92c056e139a0a9a6c6081fd6f504e3"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "79d6ae8b14d6f4bc33dec62476b9f0da"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "b2b894654cb3321503a8a034c910ae6a"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "a9df848d664168e86fd8d0c769420b08"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "cd474d9a44a8da9cbda43d18ccac139d"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "2a7b0ff78b95f25c661fe6e197d2a4c0"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "d7a9f1ce892b65d851d52b56ee6aec91"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "f5c3cdf0c336c66c9778919d7733ef93"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "875e14c12d64cca649c270b2180517f1"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "2b28c702dd8ff0a9d6be57b383dc2fcc"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "c9c64801c79cde3aba8ca5257f7748ed"
  },
  {
    "url": "flutter/index.html",
    "revision": "5e3c171f186f4d91d097dd37613d6071"
  },
  {
    "url": "flutter/point.html",
    "revision": "4fa0724359ed89b06e392dd187de3ac9"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c68c8f379c860f59be3cbb764da5eae8"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "37c90c251b534bf41fbb7092ff66873b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "abcd229849b39840782fde6e5326a221"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "718f801a4511224e1f8843310e7ffaf4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "09d9c9855bbc84948fbe7ee5b3e42f27"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ddbd0955d3a0fbe8d54cc58e2650bf84"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "90fc2f8243dc7b5fca9a0aaf1b5e38b6"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "dfcd4f1b7f210edceae0aa92261e32e7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "78576399da0cd82f366c198be6f61f5c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6b8310fb85071ec6d46d87d8aec7a017"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "06f84e46354431780e6320b5128570d6"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "cc697aba6af0a564030ebdedc486b305"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7244acb8e8bf4890bf633bdb9f80ec67"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "ac3c3cbe023bdb16942baa8c83447140"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7b1a552e36d55cfc324d2436a10f2e52"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "c4567b700419d862108b74b50a0bbead"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "edcb06627ece6ab3354cc6ac0ff2ef41"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "9730f1914135dcf005ea6cb5655ec9d3"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "2d529d740c29338a8716e5d8f54a04c7"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "399333d14625d104156d19dd2778eb5c"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "788584345f1dab8592ffc428b546ea9f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "a52145608b7caf3b5e7bfc6333855f98"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "687a4713e47565e5dde91efe3dc53c25"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "30338c47a68bf87f04ad0f556626a732"
  },
  {
    "url": "haskell/index.html",
    "revision": "9dfc26b512caab16e48a3dee8bdf86a3"
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
    "revision": "f19fab33d049ed99b26cb14df6998b1c"
  },
  {
    "url": "java/index.html",
    "revision": "8cc215bd396592ad585b1ef17a7955aa"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "68ecc1b11e4ffadcd71217abfff40bb5"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "ddd5a2a5d3b062ea83f7297f20e65318"
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
    "revision": "eebff138571259370bc96d653369de77"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9e11862253cf9fa9bf099e4f4b4e5d76"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "7ca3b3eaefb54bd06ea9bd45bf802110"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5a679029357e29b7700192e1d5446ef7"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "bb5bb2e11cba911f10d3aa26d3e92315"
  },
  {
    "url": "python/index.html",
    "revision": "f0e5b0065966a42fec4268bf0c0ceeb0"
  },
  {
    "url": "python/poetry.html",
    "revision": "53767a10c7021509dd910d8622c72ce2"
  },
  {
    "url": "python/pyenv.html",
    "revision": "a8c588fad4b41ba650b6a5b9adecc0c5"
  },
  {
    "url": "python/python-ase.html",
    "revision": "58ba659e66e2b69c486622959572416a"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "bfd9fb17246ceb74d1e4222ea2ea2b65"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "8648e9d1b366aae499103d05a02b0d29"
  },
  {
    "url": "python/python-file.html",
    "revision": "bf056a59e02b309af163119544f808ba"
  },
  {
    "url": "python/python-function.html",
    "revision": "8e262ce764967e951131c4c6691197f4"
  },
  {
    "url": "python/python-generator.html",
    "revision": "a1271815b8f684186b8fd3414e13feb4"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "45989274c065e4246bf2f775a94fafc0"
  },
  {
    "url": "python/python-module.html",
    "revision": "3e942e9a1fbd7001df5b9abc47c849a9"
  },
  {
    "url": "python/python-string.html",
    "revision": "632d6478f9d84e8437c2b024bf570520"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "7e6a3108c6b15f424de2bbb9ee64ff45"
  },
  {
    "url": "read/index.html",
    "revision": "7c278f08a4bdb093a4531918dced4b77"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "dc9b62da5306bf92d15b8fa4c447fd7f"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3307c48a458e41c8074113757d124d43"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "b6cc0fdf211e3ea2e2d455118274b05e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "7eb0f636be4ce6c13c38d6adfcabe708"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3badbf324e9a190f785a437a05b2bdfc"
  },
  {
    "url": "swift/better/di.html",
    "revision": "e2aa7ad3c9f4b1f7eeee2ae17dfd0e10"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a5791ccad4716d62e9cb2c1360758b4e"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9ef15fa8e1dec8a9228d75e7970098d2"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "3c0ab3a55cfc3f4bc95f44bd95088b54"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "95db41ad76f6065745ffecf88a4f3dbf"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "bf8898db45ca36bbe6ba1872f3e52974"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "b3623b95dc821e56a2a231201902cb61"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "7be70c528d9026f872eba5f25fa5edd7"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "c1718f962820960e0186c1406355a441"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "9a8ce49e546820ba63cf400334949233"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "db0d2272b4a300fc9571a11d14f93035"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "46763da141ea034731c6104398d01be7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "088a209f92d492e6c2af444ebe1be808"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4c617dd3d4c7763dc4e5abb6edaee75b"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "05af2c885ce9ff2915ac8d1613d0da35"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b95b43b71758c13ef1cf8386b33002ee"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "deee67d8b9e3d7abdd4720315730cd3f"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "faa636189d9e271d6230e2d3241a29b7"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "65e7949abac5fa67f0d14098732ac020"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "1952f365ee21d1acfda02a1f20a52913"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "166876d078496f4dc5f0a68bb55f1d65"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "f43309bedba9d990cf4bc741ea7ced9b"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "534cc29e65884174904f8397822c1445"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "e9f1ab170518ccecfe2bc51f9210f876"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "5b04541445112b67007b9fa1e7e303fe"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "cdd98ffd3706524735499b7840f78e09"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "b4c1aa8b94a249c64a19671a103879de"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "5679d89ec010952d8d52fc5fd64a07f9"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "ef82c38e2366baa353c1975953d435a6"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "eb269ee36612f4931d31c2671628a20a"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "0ac60a40fa0ae0a079654aef78d92977"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "333942d7b169e07cc78f675a5e6759e5"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "e6b823d6d658e97f14e352e3ef14b52a"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "91081a5ca09e025110ed96142b1fc9f8"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "d19591f2c0aa69d4ad27f327ebab4f92"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "5624ff5f4ffae2ce32d022f9501f7f6b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "47e65cd636a102403d7c80461df1e493"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "737ac1dd7743161f7a9fd90fe8c67e91"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "7b5a80e3714ecd6b93178a0d81870221"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "9ad0437b0031fe4270f7c3181a2819e1"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f9e9c2568c1805cf77e9e38b97dcbd77"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "193b948376289dc4df22e06611419fb8"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "915f9c11244973cbe6bd5abf7920b26c"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "81444f71abb223f6bcbd4cefaba10dbe"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "668831c1b20bb2b36ca05ce45daaf1e1"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "949a12e4a063d8a72bfc6ac18e9b5db5"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "be1c26783a26e71540e09bd4d7b08b50"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "000c039780689250c2bbf4236ba1f7d0"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "09ed1dfb5e50b885868dbb49115f2efc"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "34170a97357efecb08f35833f0616afb"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "bada3b590a8e2bec755577f7b005c632"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "2c228c695367e64a8133f8cd604b582e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "69d319ce9f6d81e4cf21d5f6e3e8481f"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e538b9c4478167e6b227727eda19f1f0"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "256a770b10362a77dc5b86f9a16a838f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "2305ba769a91e500f51521e291008e6c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "be41485138d199868cc643b555ad34ad"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "bd7e773a6ffd0eff5c89b25af8f6b7e8"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "c50143a600d1694aaeaa3031e72e0f7e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "2353391e62ef3300c9f25f50d0f159eb"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "0968934d65076a478fea2db1ce34ac3e"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b171bcc9dc552e991a1aa58ef315f0ad"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "7baa8c761b021e1ec32207ca0b89d560"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "afc2454e9719742e9ba0dc69591f213f"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "45a4be1168c34d9cf07c7fc46e7d8db4"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e196203a6fcedd6e9e3c53be37e48459"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1721546eaa0d8097cb0636188af60909"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "288916ce95eb3853679966db80c56911"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c7622e9bc70f836d1edbee9e5872e883"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "08a4637f89bbb04481f679101cfe81d4"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "9a24b05d9b4d33b1b4b4808cad996cf2"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0c7910ff128e87cccab93174d64295d2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "95ae10806b705d75fc0071cf6b49b10c"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "be0a42c6fd73bdcaa1603ee148f34db3"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c172d9bc16639ba0b11b3a325fd0750f"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "6b4ca69a2afcf4f3609b676ee99c1819"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "72120ce29836ac9fcc669cc44364f57b"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "94eaf22441a88cd382eb3a4ec1f7caf7"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "4602cbad722988712554acd0dcf8e626"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3302a2aa32ab6e11470a755268e04037"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "05ef1354b7f2673699ea231b962f50b3"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "fff509dba53e2313677f2309d3e6b0ee"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "32094c5ad1383317361e79d07bc4c341"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f1f7b9e8576934d2a4054697803660ca"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "509ba3ccac7ae1302f6b1691629059ca"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8e7d475bffc9a241fb6ce99f214a6542"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "cb27bf12322641525893cee67a8ab049"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "e27e7b2431310147fe72827e668d27cb"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b7a1ea1d1f91bb490eb4be8069548b56"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "1c812d078fd9cad0eeefe35093b99523"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "68bbb3379750d215c1a4a98a743f1563"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "c7e517c72d0db433f284754cd1275b1b"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "87121446b97b64eec985bfff94ca6fe0"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f6d3004c714e9d54db060f66965b540b"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "0dafad49d4d0b2044ad225568dce2fa6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5b03a90baaf72bee15b2e586e502506d"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "64e4e6a5b5b8f45927bef6b210c8eadc"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "d38b10a22c49f2fbc8004998a08aeec3"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "5e0029b38e90ac053e30df34c9d165a3"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "bac2fb7a0b14e2ff6cbdabd43de2f0e4"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2dfd14f04dd41485f33f2f0306f33035"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f2ecdefddc7290cdd7994bd93023f398"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "03002fa8948a9dcf4bcdd501bd5fb6e6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a41fa7281905fa03195edef8f3bfc75a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c82902b6dfb93ce9b43e7bcea4344bf3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "35d4495a1f138bc205ad9c7c25fe82cd"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "c2dc8ab59c0c3fc40bb11433b4fc3a08"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "147877f3c2d6d72e22ab0e8e904292b2"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "fb763ff540ab549e63680602efadfdd9"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "206294ad4e172acd08dc1841d65867b5"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e6ba2b1133758b293fe11969d6566555"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d5e80cac0bd3083d7f18f919c0c2df1d"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "75d2aa46f65f0a139222605e6b1cdc29"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b0ae658cba52794fb9157e4b4742ba9a"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "10493f8eea1aaeb69bd4851794e1847c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "2c4e640ad7803d67f065e2d75a07acdf"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "94232414e2d54afd34848f04fdb60ee4"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "cd4b098caa90933ec6f9a8af64b74e55"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "fb056a5a36a7baf9cc8fe70b3a604275"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "e1bcf1f36775e80f09f58021f573eff0"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "db5ddc02527640799345840ecc1198a8"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "25cf5a7d01bc38161761619267266c67"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "b0f7cc4458f0dfbb3a57d762bd65b10a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "976de177dca46bff3ffaa3b4312a04cd"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b517bd507ce882953ab41bb692857aa6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f53c04a3c3c2b1f2263e1a6e7edad146"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4294655092c06dddf96c4a5f997ddb79"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6cdcab35c3852e5bff094c91820d1944"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "bea34420aedbdf0d895204c3c1bab688"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f0f56ce932a96b66026190ffab3eced7"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c5c0d3c32603d9574464c7d763365de6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "480c605d7f053bfaeec1a0bf6bbdc4cf"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "a46c50c5cc11eb9a8b1f11adb26dc903"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1246bd2880b75af810f06a16119d558d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7fbe4ebf9ce326cf301c657704d72a24"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b948290e997c8dab6a54b2e0fe0ae17d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "fe39f38c30863d8b2c0ea1ca42c0c691"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a28be63ac45e3624316ac025ab2693b4"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "298e2c368a56e00feb9a7d66b7442ae5"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "09ad88e8d06fd904821b76f7de4c9226"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c6b45e7d53317fce188905257334bfd2"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "b334d7b89302a2e5d52af354c1a896b7"
  },
  {
    "url": "tag/django/index.html",
    "revision": "d7a2203c37bffe3f6cc8e234c678ab01"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "07442907a657cf2ac3c1a6e69aa9245b"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "011e2c09b66d1d7ab7f2ee6f8f36027b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d26090afcaab73565839dfc01363a884"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "380a623e782712e9f7aa056c2ca0b942"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b1769ee4ad918abe5baa7c447d7853b8"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ca5837cd48b14b2a07b8a2a99e0645b7"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "62e00d4ba3d3ad4c01d35a5d17aebf07"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bb731df5e3bc098a5645ff2abf00dd32"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8ef88ab5059a90783ba990092193268e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a1c73b08b55f919f6bc6c2d114ccb232"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7974e26f397796849ba07d82fb353c74"
  },
  {
    "url": "tag/index.html",
    "revision": "ac0897477eab66ebe06118147028253b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0ef5f0a10f6a4734844e8064f2be8980"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "201d58d62b889b8bd7e6fade2e3ab744"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3c7ac918a675d69f058d9e6cf58a26b6"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "1aa4cbb5fbfabb2159be9d6ea4d9ae7c"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "3f00f67525a0072903079c87a67deae9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "9d80daff6e55805942c1ccd25ea3a68d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "de0f524fa513f4e9a065cee01174be1a"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5615e4691dd89be62f6cead9dd1acfb9"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "6a2a2607258e1ea74a3cbb6c7ed974a7"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ef1c54f93c4166620f4bbb176f92bc99"
  },
  {
    "url": "tag/java/index.html",
    "revision": "0e7798412ace1e1e518215edc274b9bc"
  },
  {
    "url": "tag/json/index.html",
    "revision": "89a2a1f5161d0c3bd6e4e7d8158b7e5b"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "df578c9eaf8a58b3f028327bbc1eed8f"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "542841a51b20abe3d0337253aaf379be"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f26627df0cf54a932df376bde5a39542"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "07b3caf48a3b0dfcaa9fd5b9338152f2"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "ae9d0ff2d199fc2ac54898dc54e49b79"
  },
  {
    "url": "tag/python/index.html",
    "revision": "151bac2bd4a6ca19cd3d351a804b3688"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "76dda6d53c6ebd7dd878d2916d1cf824"
  },
  {
    "url": "tag/read/index.html",
    "revision": "5f95dc9747e9400c500605ec0f660d02"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "fa8306919fb7e34c1fb0a03e418722ae"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "90037a349ad6fb344473954a8bc2f957"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ab382201c6540f0244b99ee99b3c19e1"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "4decc0bd67313102fb441caf85a6041a"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "9bb3717fc22145dafec2d8b30bf1a5e4"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "5100ab0a676843804662aba749e8ebf8"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "46c3a920441ffbfce9aac8991faad535"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5460afd33d4a4c4111919ea3ca61a9dd"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "35cdf346ae7b76259b63424509415709"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ec7f6a0cf6a288f1870f96305fc5d3d6"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "766a475b96f9a7f47af4237a2e8f9a6d"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "93300794a6fe3f370a902a629f64fcb8"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "405d811891ee84e3b481045e18482ac2"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "79e144753ffd71b710c7d3fb4ae05dba"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "e327c7f0b993d83135e9db94d81b7ccb"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "8b50764d89c3a249be5037c342a1e00f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "60f9aef3c4867b7fd2bd5ac184074a3c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "31f9455be9a329b788d63558abe5b7ac"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9b1174f7136ccc46e6dcaae84283d34b"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "f4218ace4a37123d0a18dcbcb2031543"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "bd204948b0d6384965fc84332d84b3d4"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "8039f88b0b59a2d2898de4a6f347ba91"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "41155db24def4efbef80967d4dfa7652"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8792f26a233b3e278898efba517f2507"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "e8c9a5f7f5dc33b6e476822d33cb70c9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b050424a24a6b03c3037c2b849f204b6"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "37abf24c6cb75dd1a1fc6dec472136e6"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "ccd825cb82b7ff7a0bc111145da8b6e2"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "40ec91ff05677d56fa86208a3a1a67a0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3a9af9a3c5037df94faba146ef6e39b0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3057c7f7e4ad9c0f5d6a788d2c2b9bca"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "864fc1b84188939f8e49e0b140991375"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "aae90089206ba216b5a2b79de95aee73"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "225b34fcfbadbe965fa6f6c18a46e85f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "6c9f9eeb3e6cbcb40be6e68b32048c34"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c18faccf32f8cb8dad81af41e069213c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "5564d11678fd1d807199ac6a06be20ec"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "53af17300331cc5e8df5c0ff63402569"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "8fd34b9b6ae1bdf0e6b56ee489a7ccb1"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "2f097e1b5ee37a046e38b3d81a870745"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "77bff0cc3ce6a4cdbc66c1cfab5aa795"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c3ad47df2e3007f69f026273e8051d67"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "373437127cc0d279202e6827481810d8"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "1302f5cdbb81faacd7540d6d9db80a44"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a1904046c1f8eaaa8c20658246db59cd"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "56bcff936e87eb781e2e4c8eb9529015"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9031a385831d6debac9f160067e80527"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a87a8515c069cdf019f9900613fd6962"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b71a4a0b420a0804c4ebce405541e1be"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "847c7c9d77b992a39d4f729ed6a1b146"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "d8c2b4965163ba3c5ca8249d7190dfbb"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "a10d9a1dfad223063331782d89e5f02b"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "bbdfe336916399622736e58ee5022a37"
  },
  {
    "url": "timeline/index.html",
    "revision": "66c67f12f08b82f43ad65b6d7c4e88b3"
  },
  {
    "url": "tools/docsify.html",
    "revision": "eaafbaa6c3002eb47206d2a6033482a1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "eb93607bff25362fe7e345f59f947e8a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d753faeee624f0088d6403b7895ec4f1"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "1e6b320af30f8d31e68384c67f384c3b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c82e82c5e5b2d11f600be24df2e4774e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c9f615f2700c038cecc5ffddede918a5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c1682eadeb860c0d227e8527ae4c5856"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "5a36db10926c158536a0a1e8fce02c4e"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0ac10f2d177fbfd910bf035eab97261e"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "5ff0b1036ea8eda160b5e82bf36c0947"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "4af052d2416c8cbd3c6ec59cf1d3faab"
  },
  {
    "url": "tools/note/index.html",
    "revision": "dba3838daa38eedbfe738b71680596d2"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "700f8fa3d6ebd7500ff18261aff4d69d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "51569527f5857e00d7acbf8577c2236d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "729d301f7e52f35143f66fe15d2761cd"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "aba761816c7be781b19268ac353f95ce"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "33795d7b9083c5e8b444db3bf2ccc423"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1b946c62f142c2cfc480480b70a45fbe"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "3721006e6e90c3906519f84a29dd4c2c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9a5783a524ea59ae95374947b2655e88"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9a0d619003047083cf329b6c2b6356e8"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "7acc3b3679beb34ad01b7e8889abb2f3"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "d57925a3bca4f4c216034ee7a45280f2"
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
