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
    "revision": "c06638e8ddd752e20dff7c449aaf0c40"
  },
  {
    "url": "about/app/index.html",
    "revision": "b8bbc20f880be7208947ec0964e94b6b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "07a070a15d0c7bada19fd6d305bcefb0"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "625aa080ee0d144b2ba3c630ab08f56e"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "eb8164d711266760793738510b586cf0"
  },
  {
    "url": "about/index/index.html",
    "revision": "4e50183235225aaf8ec5311a201ef3c1"
  },
  {
    "url": "ai/index.html",
    "revision": "ec284855a440693ed8227035a33d442d"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0b6db5b317ba24fb2ed37dc193156c9f"
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
    "url": "assets/js/100.37597bde.js",
    "revision": "6255782d7208a24c4ed52cafb3094c57"
  },
  {
    "url": "assets/js/101.c6c6a911.js",
    "revision": "17063e27aa996949bf1c91e16f397e69"
  },
  {
    "url": "assets/js/102.4dfddae8.js",
    "revision": "4257fd05be62e8f140ea7ac485747323"
  },
  {
    "url": "assets/js/103.c81db50c.js",
    "revision": "ee1288ddb40b2f1057b5dcd0bfa014ae"
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
    "url": "assets/js/107.8d1c3550.js",
    "revision": "a6928049abf27e972d2a20c3ffa637c2"
  },
  {
    "url": "assets/js/108.3a96c37f.js",
    "revision": "7c60bb65119d86dc8959c7a3ee2244b3"
  },
  {
    "url": "assets/js/109.55514b02.js",
    "revision": "fdae5c83a1c026dc55122984be13db71"
  },
  {
    "url": "assets/js/110.612bd0d9.js",
    "revision": "d4692452594afaae976f08189e09e2d4"
  },
  {
    "url": "assets/js/111.2deef7bc.js",
    "revision": "d218849bd51f0925c5872578178a0dd2"
  },
  {
    "url": "assets/js/112.7f409df0.js",
    "revision": "1eee9755f599e5549e9b09e84130b719"
  },
  {
    "url": "assets/js/113.a1e9d7c1.js",
    "revision": "e678668c53aa7f5861d1056078f3a6fe"
  },
  {
    "url": "assets/js/114.88633a32.js",
    "revision": "3894333261f31fdce7d950440232dc8b"
  },
  {
    "url": "assets/js/115.ca5d16fe.js",
    "revision": "68a5c37b689b97f5ff42ad63c95f8b4f"
  },
  {
    "url": "assets/js/116.2dcc4c75.js",
    "revision": "33414d849139ae21ffc84f709fdb6c4e"
  },
  {
    "url": "assets/js/117.083c7834.js",
    "revision": "be95f259258fa09c8ca986666c9c343c"
  },
  {
    "url": "assets/js/118.3a3618ab.js",
    "revision": "2a262abebdcb1ea67019bfe739e5b8ce"
  },
  {
    "url": "assets/js/119.55f09a63.js",
    "revision": "694238a481c15c00be8724aaaf2c9df4"
  },
  {
    "url": "assets/js/120.45054d3a.js",
    "revision": "e8afc89a5a5822095ca3c9d05b6ac08f"
  },
  {
    "url": "assets/js/121.f993fe14.js",
    "revision": "c481bc8189d55b511b772a3744051b9c"
  },
  {
    "url": "assets/js/122.a4fc7c93.js",
    "revision": "89d0cc3a4484970d118c9a266879ecb3"
  },
  {
    "url": "assets/js/123.aa46b45f.js",
    "revision": "99553bcc8e446fb36749bc2ba48f51f2"
  },
  {
    "url": "assets/js/124.039c8c4a.js",
    "revision": "19c6fe91197cf8243168277182f5f244"
  },
  {
    "url": "assets/js/125.724abf77.js",
    "revision": "e3c35b1aa2a9bc39ea60ba3db9d2f8a0"
  },
  {
    "url": "assets/js/126.09529943.js",
    "revision": "b34fe0e0d52d12f2b2e5959e357fb7e8"
  },
  {
    "url": "assets/js/127.927aa6f5.js",
    "revision": "934be92a68363696e7ed450376f4e0f8"
  },
  {
    "url": "assets/js/128.2704e673.js",
    "revision": "83e2937efebb91671ac97852cbe97784"
  },
  {
    "url": "assets/js/129.ff418c2d.js",
    "revision": "cad7a8aadf7ca1a5ca0e6eb47e5d6529"
  },
  {
    "url": "assets/js/130.335e4253.js",
    "revision": "29b69ac6db4b43d8dfd5b12f2a41900a"
  },
  {
    "url": "assets/js/131.e92b6561.js",
    "revision": "e542be3fe4f96dbd243b12fdd9391d74"
  },
  {
    "url": "assets/js/132.bace5bc6.js",
    "revision": "b0daf6e25dc8f1634e313899e48dd110"
  },
  {
    "url": "assets/js/133.435258ef.js",
    "revision": "a0bbe888e77781a3b17c6435fade60ca"
  },
  {
    "url": "assets/js/134.b249053d.js",
    "revision": "2c99c107e3aa5c92bd1a828c3891da7b"
  },
  {
    "url": "assets/js/135.baa0e3d1.js",
    "revision": "2f7bfcd4b600189e017b0d083b45d9ca"
  },
  {
    "url": "assets/js/136.b2811f5f.js",
    "revision": "860c20cd59c57b5596ba2da912bca5bd"
  },
  {
    "url": "assets/js/137.d2b5570d.js",
    "revision": "14c2c2babef56736e4f57965f22ca0f6"
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
    "url": "assets/js/141.4ea73100.js",
    "revision": "262681c57beed62030ce5c16c5ae82eb"
  },
  {
    "url": "assets/js/142.5ffbd4e7.js",
    "revision": "4985d40cfda048a0530d4b28e85683e6"
  },
  {
    "url": "assets/js/143.36b022af.js",
    "revision": "fc4a6d5a2c4f779b59f405f32871ad60"
  },
  {
    "url": "assets/js/144.3806085f.js",
    "revision": "d8391aa6e38e2333950a610dda59fe59"
  },
  {
    "url": "assets/js/145.9104998b.js",
    "revision": "d790ce2012716340d5a3b66ca95e7fb2"
  },
  {
    "url": "assets/js/146.8389964a.js",
    "revision": "5aee53795b1af8c09ef1856306e717aa"
  },
  {
    "url": "assets/js/147.c9baae5a.js",
    "revision": "021aae85dec240f4f79c6f1a24274ddc"
  },
  {
    "url": "assets/js/148.e4d473ce.js",
    "revision": "4d32de28624ce6cd9dc91466b8a5de00"
  },
  {
    "url": "assets/js/149.9da08b28.js",
    "revision": "68738cfb0d1a7fae0df42c13a153942b"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.959ae7ae.js",
    "revision": "4e6878eca77d06c2d489c244786e3111"
  },
  {
    "url": "assets/js/151.ec14e52c.js",
    "revision": "f003627031fc8fb308e1a263ea3a73bb"
  },
  {
    "url": "assets/js/152.fc13e017.js",
    "revision": "ccfd5a617158bf4b5d43d0e7fefe85c2"
  },
  {
    "url": "assets/js/153.cbef124e.js",
    "revision": "d897cfbb8db2c4b27db6efdee14b809e"
  },
  {
    "url": "assets/js/154.558ead72.js",
    "revision": "8431022189cf9ef55c7a6810107e4983"
  },
  {
    "url": "assets/js/155.5cb89fb1.js",
    "revision": "3fbbc232f7f92d025c8ad58197a15865"
  },
  {
    "url": "assets/js/156.195d3619.js",
    "revision": "da850e9502f7a7ad08552767e5db8ff2"
  },
  {
    "url": "assets/js/157.da0485aa.js",
    "revision": "a4eadae7971bd18284c7a350a872c9b3"
  },
  {
    "url": "assets/js/158.9efc4dd8.js",
    "revision": "7fec05bd9883d157269a253b4d1a1465"
  },
  {
    "url": "assets/js/159.561718b7.js",
    "revision": "fa8f72ea26f664ce6c686b9e55bcef33"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.dbb38ad6.js",
    "revision": "15b261995ea172e8dbadad182e3c6624"
  },
  {
    "url": "assets/js/161.be033792.js",
    "revision": "d687cd6a2c02087bb5fcbb8935c9c133"
  },
  {
    "url": "assets/js/162.0edfd887.js",
    "revision": "eafe4424773e510f10fff962f9f9702c"
  },
  {
    "url": "assets/js/163.e16776c1.js",
    "revision": "44f303d2c23b0dbf9058fb640a280991"
  },
  {
    "url": "assets/js/164.20e85fb2.js",
    "revision": "11705e8c921e08a635f1cd0dc3614ec8"
  },
  {
    "url": "assets/js/165.b1ab412b.js",
    "revision": "6a79657917b260066c516fd001e8ba31"
  },
  {
    "url": "assets/js/166.c6b5e020.js",
    "revision": "5bb29b41027c48d022c0f0781a801e2b"
  },
  {
    "url": "assets/js/167.79f380f9.js",
    "revision": "db81896d65d667fa313bbf778d25a04c"
  },
  {
    "url": "assets/js/168.9e596c94.js",
    "revision": "caf1cd09cd0d49c16b876256319c782e"
  },
  {
    "url": "assets/js/169.35b1f3d6.js",
    "revision": "be19ba4e530af60903911c3edc5cb630"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.9eaaaa75.js",
    "revision": "77f9b82560ecb3775e305b9f261bd25c"
  },
  {
    "url": "assets/js/171.9e4d08c2.js",
    "revision": "0e727120f85c6a5c8be7e426768fd725"
  },
  {
    "url": "assets/js/172.9e2a6538.js",
    "revision": "e3f4d3bf3b603ccaa1c2ed36e6f718bf"
  },
  {
    "url": "assets/js/173.a546573d.js",
    "revision": "feae12df478dbd877e28e6edc54914b9"
  },
  {
    "url": "assets/js/174.5b9a3904.js",
    "revision": "c85943b031c5f6761ef02a3bf93157bf"
  },
  {
    "url": "assets/js/175.0075d12f.js",
    "revision": "168f1b27fa5e94946ab46c2580a6fc1c"
  },
  {
    "url": "assets/js/176.a389d144.js",
    "revision": "662a7df3b725a816ce6bc6b0b7aa5187"
  },
  {
    "url": "assets/js/177.bdb15584.js",
    "revision": "8faaa5d013566b9db6577851b4c87e21"
  },
  {
    "url": "assets/js/178.ad5cf465.js",
    "revision": "d124138d87bae3a552eaf17b1aedb3a7"
  },
  {
    "url": "assets/js/179.42c1ec69.js",
    "revision": "05b373aaa6e66904e3da3bcd503038e4"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.9dac5e3d.js",
    "revision": "87ccc8a81aaefa391511703c3bade9bb"
  },
  {
    "url": "assets/js/181.7a90c0f7.js",
    "revision": "3e803c73fa281da0d2b64109c1338b1b"
  },
  {
    "url": "assets/js/182.d1c014d4.js",
    "revision": "0cfedec64d5f8f6e5a1f3359251b8094"
  },
  {
    "url": "assets/js/183.50168fbe.js",
    "revision": "540461590901f68056206cb910a45b89"
  },
  {
    "url": "assets/js/184.5490aeff.js",
    "revision": "4babe0736de781186c21ff5988dd636e"
  },
  {
    "url": "assets/js/185.5830bdf6.js",
    "revision": "17df290e79ecf6c34899c6b5535771f3"
  },
  {
    "url": "assets/js/186.4e3fb332.js",
    "revision": "0ea932b423a8eeacad7f43e0117e64a0"
  },
  {
    "url": "assets/js/187.bcec48ce.js",
    "revision": "a05ed2b48d1d27dd86c3170971630699"
  },
  {
    "url": "assets/js/188.a893454e.js",
    "revision": "1904905cd0cc7e3d91f1a708ab6590b0"
  },
  {
    "url": "assets/js/189.6fbe55df.js",
    "revision": "0eaf606460a373a29dcf63fcc13b1b8f"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.133f362f.js",
    "revision": "35505f34369db3196a5bf9578fe5e22a"
  },
  {
    "url": "assets/js/191.11bdaa83.js",
    "revision": "69c245e5f43eff48a8c4d3e63e47fe03"
  },
  {
    "url": "assets/js/192.9fee3603.js",
    "revision": "6256bc93bba16addf3b38016a542e046"
  },
  {
    "url": "assets/js/193.9fac1854.js",
    "revision": "8555222d62bfdae75f24e74dd90e0167"
  },
  {
    "url": "assets/js/194.1e2250c7.js",
    "revision": "88a6afc553df1425284b8d8f03e41786"
  },
  {
    "url": "assets/js/195.ba0e361d.js",
    "revision": "bba2e42f967bdca2524c1dc1f7e22a37"
  },
  {
    "url": "assets/js/196.18613854.js",
    "revision": "85474a8506e1aa6f92d6b2ae1d44afaf"
  },
  {
    "url": "assets/js/197.b4b2f7f5.js",
    "revision": "2e4d2b3cb0dc826f70adba2d1e0d25fb"
  },
  {
    "url": "assets/js/198.084f5f35.js",
    "revision": "c4fd9a32b06bdbbc77e17a8ec74b75ad"
  },
  {
    "url": "assets/js/199.209cd66c.js",
    "revision": "170d13f3bea5181cfa69bec0ec123832"
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
    "url": "assets/js/200.ea39f2f7.js",
    "revision": "cd9d5b33e31e000579e589306997d2e5"
  },
  {
    "url": "assets/js/201.9313169d.js",
    "revision": "0776c25dc79fc95378f12a02547cbd62"
  },
  {
    "url": "assets/js/202.f0da851c.js",
    "revision": "b6099261b8dd6872a89b8b87dc005634"
  },
  {
    "url": "assets/js/203.1587a3f5.js",
    "revision": "11a9523560a62280f6b7a6d702d8f131"
  },
  {
    "url": "assets/js/204.25ddae1f.js",
    "revision": "88febe1efe10ae99602ee4b7bd9bd841"
  },
  {
    "url": "assets/js/205.37bfa03b.js",
    "revision": "b0e75c0282e6b80611bfc60e50a1594b"
  },
  {
    "url": "assets/js/206.d38e3fae.js",
    "revision": "49c98dbb927ec41cf6afb63bc45c636a"
  },
  {
    "url": "assets/js/207.99af322f.js",
    "revision": "a9ce7dc0dc9d4d4e450ae9f8f694e1b1"
  },
  {
    "url": "assets/js/208.f2604b5b.js",
    "revision": "2d207e8ed5a3630106dba235c6c4647a"
  },
  {
    "url": "assets/js/209.5cfaa44d.js",
    "revision": "00796e2de56d22b75ee71b6126909ca5"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.bd305ca4.js",
    "revision": "329ff78de3a40e68b709e92182d81113"
  },
  {
    "url": "assets/js/211.194117f5.js",
    "revision": "d18ea1d4b9eab4ddd9d82dd677712ee4"
  },
  {
    "url": "assets/js/212.b489b8ff.js",
    "revision": "330bb3bf5f0c6bb44cf8150355e66c16"
  },
  {
    "url": "assets/js/213.17089587.js",
    "revision": "e4545348a803b48ac94d1db882a218ff"
  },
  {
    "url": "assets/js/214.5667de57.js",
    "revision": "5777d94dde2c683da835927928326b33"
  },
  {
    "url": "assets/js/215.6ec40e32.js",
    "revision": "e615f71d2f2fa7bb89daf9556c3a2e9f"
  },
  {
    "url": "assets/js/216.b454c59b.js",
    "revision": "2eabe476dd2232edf71ef5888d95ec5b"
  },
  {
    "url": "assets/js/217.e6de0951.js",
    "revision": "404641938b2e8cb89a5e1a64cfd68668"
  },
  {
    "url": "assets/js/218.58e23802.js",
    "revision": "d7257fd4b383a9d98f32342ad7d79cf7"
  },
  {
    "url": "assets/js/219.c0f62346.js",
    "revision": "12de53e77b80deb634bc4680b7398bb1"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.675796a8.js",
    "revision": "7c1e97c586319e82e11fcb8b4366174f"
  },
  {
    "url": "assets/js/221.b29d36f1.js",
    "revision": "2b8fdec61e87370a5ed6f50076ee35dd"
  },
  {
    "url": "assets/js/222.83e77c8c.js",
    "revision": "47df6074b9d7420c86f4ed75d9fd95bf"
  },
  {
    "url": "assets/js/223.c746c80f.js",
    "revision": "6543a560912885c1275bbd70d62f63da"
  },
  {
    "url": "assets/js/224.5cf40cd7.js",
    "revision": "d1160e9b75a839217adeabc4188a81f5"
  },
  {
    "url": "assets/js/225.c8752d05.js",
    "revision": "60b26074340231c21e01afa5f531db9b"
  },
  {
    "url": "assets/js/226.c3c30b9c.js",
    "revision": "eaab67852619e68aed0c4e8c1f139a36"
  },
  {
    "url": "assets/js/227.c3d56493.js",
    "revision": "98de8c73a92344179602473bce357897"
  },
  {
    "url": "assets/js/228.fe3cf044.js",
    "revision": "f363b12803ba03b45d07786ff5d900bc"
  },
  {
    "url": "assets/js/229.d54c56fe.js",
    "revision": "22ef94ec167f400b257bd671781a5469"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.6a2f2933.js",
    "revision": "c48f4bc3995b961786af72b7a630bb57"
  },
  {
    "url": "assets/js/231.cf5b689a.js",
    "revision": "d9e64c8e997f08fd77fc26ddfade78e3"
  },
  {
    "url": "assets/js/232.cf1c0e87.js",
    "revision": "77efb4aee362daae664ab323470adba6"
  },
  {
    "url": "assets/js/233.c1d0474a.js",
    "revision": "ab56765e1ef09f3beb804d3b65499a72"
  },
  {
    "url": "assets/js/234.0987c630.js",
    "revision": "bec46c9803c368faef8fad88db5d5f2d"
  },
  {
    "url": "assets/js/235.3188d96b.js",
    "revision": "541f60b13c88fea4eb74ea34441b6720"
  },
  {
    "url": "assets/js/236.c28810a6.js",
    "revision": "1dd0290a52d55e2919c2c562fcc42de1"
  },
  {
    "url": "assets/js/237.7d040631.js",
    "revision": "af20403d82c55d2226cf503221040b19"
  },
  {
    "url": "assets/js/238.601dfb3c.js",
    "revision": "d66d62330329eced2e44e7fdc4191bdb"
  },
  {
    "url": "assets/js/239.d4d9fe08.js",
    "revision": "e4cdb267430f5c2907aeeabff7d7934b"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.8cdfe9c0.js",
    "revision": "7913349c459a1db5da46eb6fa6395672"
  },
  {
    "url": "assets/js/241.98233d67.js",
    "revision": "7f3ba3664462f800130d1efdd9792e07"
  },
  {
    "url": "assets/js/242.6bd85f73.js",
    "revision": "4a80349a833d28a68233ef1400736175"
  },
  {
    "url": "assets/js/243.ae124574.js",
    "revision": "80f75cdfaf572d5b02c8af5f8979c536"
  },
  {
    "url": "assets/js/244.27b83cf1.js",
    "revision": "31a60e663a81653508e27e625778e4bd"
  },
  {
    "url": "assets/js/245.52661add.js",
    "revision": "dcde9498f35ada5024301a8f8cd2358e"
  },
  {
    "url": "assets/js/246.f9dcf8ee.js",
    "revision": "3d2314787505f9ca23a8efecc4126af3"
  },
  {
    "url": "assets/js/247.fa82d95b.js",
    "revision": "bb95f3a4a419f2a3dd69c88214599913"
  },
  {
    "url": "assets/js/248.9ed4f428.js",
    "revision": "aa8c1266317b6c48128047c6a3a170e1"
  },
  {
    "url": "assets/js/249.b38697cc.js",
    "revision": "6620b8c53101a17c8ac72e2e2c60c653"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.9f97fb39.js",
    "revision": "2aa39062681f5dec8acaa8f7e24ed116"
  },
  {
    "url": "assets/js/251.09400e04.js",
    "revision": "56eb2a4b607a3557a74e529dc66b763c"
  },
  {
    "url": "assets/js/252.3e1d34c6.js",
    "revision": "83676e627f0165b6dae8f0427c472b09"
  },
  {
    "url": "assets/js/253.45d8f910.js",
    "revision": "c7798c1612341b2bf7484c3b699edf52"
  },
  {
    "url": "assets/js/254.1357b8cd.js",
    "revision": "b87b1d2be9386bc2dc85779fb7fd47f2"
  },
  {
    "url": "assets/js/255.6ca2deaf.js",
    "revision": "9ba7ff9b808c739c5fdf11186c04473a"
  },
  {
    "url": "assets/js/256.42d58171.js",
    "revision": "4675712786f06c6647ebd3c89030e426"
  },
  {
    "url": "assets/js/257.689663aa.js",
    "revision": "21c58e88794ba49b51fae95549694f7c"
  },
  {
    "url": "assets/js/258.7250126f.js",
    "revision": "0039a00ecfba179cc76ec05399f5b057"
  },
  {
    "url": "assets/js/259.c86804ce.js",
    "revision": "9e1d5b4754a68719e344dadc586ed8de"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.17be3e37.js",
    "revision": "9c5e9b35c8119187971d99c1faf6f98b"
  },
  {
    "url": "assets/js/261.2fb4aaa2.js",
    "revision": "940a194d6e2684222064572ccc535200"
  },
  {
    "url": "assets/js/262.36209675.js",
    "revision": "b6f96a299b42140182488e768dcb11b6"
  },
  {
    "url": "assets/js/263.63c379a3.js",
    "revision": "19c19519c980a910e9b6f366dd964e9f"
  },
  {
    "url": "assets/js/264.e30c7bf9.js",
    "revision": "59f9d9ee5a2b9304ede3308932dcab9c"
  },
  {
    "url": "assets/js/265.5b80a839.js",
    "revision": "473a1810b37a75de2559dc5c854a5b31"
  },
  {
    "url": "assets/js/266.891189e0.js",
    "revision": "7e177b113e6706ccb8e6d662e519a514"
  },
  {
    "url": "assets/js/267.6b581867.js",
    "revision": "4ecaf84321783846a248bd1e49a949df"
  },
  {
    "url": "assets/js/268.675af990.js",
    "revision": "1bf0fa3847f441eaf435a401c77f2e49"
  },
  {
    "url": "assets/js/269.881aac6d.js",
    "revision": "3fde1265f01deee9b485245235985a32"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.6fb3c845.js",
    "revision": "33b261050e4f4d4ee2bc591a4dbb777d"
  },
  {
    "url": "assets/js/271.be27c754.js",
    "revision": "a9ab8d3fbd04b74e798ac7ece0be3309"
  },
  {
    "url": "assets/js/272.bf4561bb.js",
    "revision": "3382a67b99cf08822118ffbe7edb1f00"
  },
  {
    "url": "assets/js/273.700a485e.js",
    "revision": "e4b436700f2536d9e4d7133fc1f57de8"
  },
  {
    "url": "assets/js/274.67cc031a.js",
    "revision": "605a486d97c77e49e828a5d624841244"
  },
  {
    "url": "assets/js/275.635b47ff.js",
    "revision": "b5831d7b66129b6a9c9cf904fddca35e"
  },
  {
    "url": "assets/js/276.82606e97.js",
    "revision": "403c54954e5c5e9648967507f2366a10"
  },
  {
    "url": "assets/js/277.4258bbb3.js",
    "revision": "e7fca20295a46e0ae51940622da580dd"
  },
  {
    "url": "assets/js/278.2ca26662.js",
    "revision": "37511394ec5322ca5ffc73c6da9694bf"
  },
  {
    "url": "assets/js/279.07a580b5.js",
    "revision": "4bd6700a7985591e940feb638261fcbc"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.d0a70926.js",
    "revision": "f4cb40253d17249d9e5588d52876a5c5"
  },
  {
    "url": "assets/js/281.c85da151.js",
    "revision": "d82c84530cddebadcd10eedd86378ca1"
  },
  {
    "url": "assets/js/282.ec5c036e.js",
    "revision": "68af4ba7373f008478ae742c07631e4d"
  },
  {
    "url": "assets/js/283.9d63609b.js",
    "revision": "7d8d1cb049cf2c019d5fb7dee460f12e"
  },
  {
    "url": "assets/js/284.193a89a2.js",
    "revision": "6127f9c9dbfee47368b3b812fffb0527"
  },
  {
    "url": "assets/js/285.5cdc4184.js",
    "revision": "95ba999ed0978227f64d64a78e764a61"
  },
  {
    "url": "assets/js/286.717793c4.js",
    "revision": "27e74e6264f7e794c948fb37c8373afd"
  },
  {
    "url": "assets/js/287.17512f6b.js",
    "revision": "ad88241347015607924d4a45083b0b6e"
  },
  {
    "url": "assets/js/288.d6bcc46f.js",
    "revision": "0d243b01e32bec345e7ae571565314b5"
  },
  {
    "url": "assets/js/289.c3bb21bf.js",
    "revision": "80ad18db02a1887ac472e89b1fd5a9f0"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.e6c58847.js",
    "revision": "c7e58519f64ba57a46f37a2eb5aa1dc9"
  },
  {
    "url": "assets/js/291.244e6914.js",
    "revision": "a135d089b4e0524dea3958d06d2a930f"
  },
  {
    "url": "assets/js/292.523f0f4f.js",
    "revision": "59b2f0541eca9fb785d37956f83a80b4"
  },
  {
    "url": "assets/js/293.c9d55e20.js",
    "revision": "e10d9a60aa8ba53e2da7cd3c7800cddb"
  },
  {
    "url": "assets/js/294.aa5c7b65.js",
    "revision": "6cd3b1ba7eced3e0f9c8451a87801aea"
  },
  {
    "url": "assets/js/295.b212dca9.js",
    "revision": "e5ac8c363768169ba1f854945f9866bf"
  },
  {
    "url": "assets/js/296.5dc6ae24.js",
    "revision": "1b20b8ed7caf0391fb7defc881d9d962"
  },
  {
    "url": "assets/js/297.3801c875.js",
    "revision": "b33b672adc6fec1b114384f85af8574d"
  },
  {
    "url": "assets/js/298.74eaf406.js",
    "revision": "4fc6b935215642ac359b83fb89e14288"
  },
  {
    "url": "assets/js/299.b3d6b3d7.js",
    "revision": "fb422415b93d0d56a5e4d43dd2316e3e"
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
    "url": "assets/js/300.f30c80ca.js",
    "revision": "86d56e09618974ad4157bc8b0256cc0c"
  },
  {
    "url": "assets/js/301.494525c8.js",
    "revision": "619e1906a3c7a781c788782e18eee4a6"
  },
  {
    "url": "assets/js/302.8a3e4c45.js",
    "revision": "794d59efbe7a0884e3a015c539ab5ec7"
  },
  {
    "url": "assets/js/303.e1af967f.js",
    "revision": "0d241d4f25f739350be9b2d76a289f35"
  },
  {
    "url": "assets/js/304.b80f969b.js",
    "revision": "8946af04a293c9152705a4740c342e28"
  },
  {
    "url": "assets/js/305.6d073950.js",
    "revision": "66057189af617218c726cc9e3e81bf94"
  },
  {
    "url": "assets/js/306.68344ddb.js",
    "revision": "77011c8f1268e825b9b2d84d178cc2ca"
  },
  {
    "url": "assets/js/307.b11acb92.js",
    "revision": "6efc299d66226e3027a74911188f2c55"
  },
  {
    "url": "assets/js/308.b70a7eb4.js",
    "revision": "581aa028ce3af6d82e519e897a12a8c8"
  },
  {
    "url": "assets/js/309.bd726eda.js",
    "revision": "3558acf0dc5dc41a94a629ead5e85ad9"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.d523cf08.js",
    "revision": "abc4f2a3d8cac8c9fd39cbee5dba37ce"
  },
  {
    "url": "assets/js/311.82bfba98.js",
    "revision": "78f6a8fa2698648a4476fbdd376a7a8d"
  },
  {
    "url": "assets/js/312.1b3a43f7.js",
    "revision": "3b9c9a2007ab8409988789ca138a512d"
  },
  {
    "url": "assets/js/313.9b250c64.js",
    "revision": "5a4f0427bccdf9a93bee8a9a263fb102"
  },
  {
    "url": "assets/js/314.a50cdd43.js",
    "revision": "81b97559588402aa3813998e896f59e5"
  },
  {
    "url": "assets/js/315.e0129304.js",
    "revision": "334f6a19962d3f29c54fa3b9cebeb133"
  },
  {
    "url": "assets/js/316.30ba8021.js",
    "revision": "e6d2a38af4a275ae2f0fd784227b7e8b"
  },
  {
    "url": "assets/js/317.f052202c.js",
    "revision": "0665713becf50980b7c9ec9ec02f800f"
  },
  {
    "url": "assets/js/318.6df3a89e.js",
    "revision": "f8e005992077346d6865d1e45ae9aff2"
  },
  {
    "url": "assets/js/319.bad1f8e0.js",
    "revision": "07343e253b83a15e392141d52a4ed092"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.dbc8307a.js",
    "revision": "70303ee4e325353f3a56ea5e0c3a71de"
  },
  {
    "url": "assets/js/321.fb4b79e8.js",
    "revision": "8faa1290cefb1d57ffcd59ee57b5adfc"
  },
  {
    "url": "assets/js/322.c551795b.js",
    "revision": "6e9223b5b201cb1471114d2d28b40b12"
  },
  {
    "url": "assets/js/323.265a3e4e.js",
    "revision": "35f35502ce394f91c37d5d8dc7afa545"
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
    "url": "assets/js/40.a543e22c.js",
    "revision": "089111597a6cba3742c8ac86c3094bd0"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
  },
  {
    "url": "assets/js/42.b9c5ae99.js",
    "revision": "f8c475ea3f8b4c0dacadbd1bba404626"
  },
  {
    "url": "assets/js/43.83a99001.js",
    "revision": "3a2f887888b9ffcd0373af50f4b511eb"
  },
  {
    "url": "assets/js/44.c8996bbc.js",
    "revision": "b11c4c3cba69f7858175f9259cdf3697"
  },
  {
    "url": "assets/js/45.1a2f0496.js",
    "revision": "da53032c8b94a14586619195485ee97d"
  },
  {
    "url": "assets/js/46.c50112f5.js",
    "revision": "5d32f5ebe0353b2bb5e5e983f0c22e8a"
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
    "url": "assets/js/52.c79f5015.js",
    "revision": "fa700a1aa8a38322f409182307bf27e6"
  },
  {
    "url": "assets/js/53.318a822f.js",
    "revision": "423a53c5cf19f927c853a388161fe606"
  },
  {
    "url": "assets/js/54.beeadceb.js",
    "revision": "ba5ca699fe4af5fa7dbc69a269f5034b"
  },
  {
    "url": "assets/js/55.d2c56783.js",
    "revision": "fdcc315e573c3592238d34fc8c4e376c"
  },
  {
    "url": "assets/js/56.ae1e02f3.js",
    "revision": "25996913a1190bfd6e1a4b32c87d777e"
  },
  {
    "url": "assets/js/57.b6507420.js",
    "revision": "c6fdd8dde75b0584e27f7c7e3223492e"
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
    "url": "assets/js/60.0f8a257e.js",
    "revision": "1c6c09f6bcb61dae2fd5cae3c805cc5c"
  },
  {
    "url": "assets/js/61.637bd443.js",
    "revision": "95edb3caeb1173441f1accc143953144"
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
    "url": "assets/js/65.8ab5bfe4.js",
    "revision": "26a9bcc0405b5d48a341c9cc2f295275"
  },
  {
    "url": "assets/js/66.37fcbb42.js",
    "revision": "4fbeae29e0a1d9d1c30be315c2ad34dd"
  },
  {
    "url": "assets/js/67.063d0beb.js",
    "revision": "c88e95b01cca6c94e0c1ab24e07c9680"
  },
  {
    "url": "assets/js/68.356fdc53.js",
    "revision": "ce03b52ea7af2806eea4185436337e50"
  },
  {
    "url": "assets/js/69.34ba9b99.js",
    "revision": "a8903a7f7dcb7d9af83429cfd7a97146"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.1c58d4d0.js",
    "revision": "c409ca15cd24b9791d8d92aac07c9d95"
  },
  {
    "url": "assets/js/71.e9c4f758.js",
    "revision": "dd3eaf52ce84a752ff1bfdcce2942817"
  },
  {
    "url": "assets/js/72.a72b8947.js",
    "revision": "b17af7a4703361097cfd1784597f6745"
  },
  {
    "url": "assets/js/73.d6177d1e.js",
    "revision": "36df1de6f5280d40750db10397ee4be7"
  },
  {
    "url": "assets/js/74.e6612549.js",
    "revision": "4af4c2fc9e92e80acc78ae59c72bcf5d"
  },
  {
    "url": "assets/js/75.5f5e9e6d.js",
    "revision": "311c38efe716905310fff47fe2772520"
  },
  {
    "url": "assets/js/76.0abdf9c6.js",
    "revision": "fbad0468930a2c678b7e05600ce6499f"
  },
  {
    "url": "assets/js/77.53e016ee.js",
    "revision": "c211671585361db7ba2b7e44f35f517e"
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
    "url": "assets/js/80.bd5a42d0.js",
    "revision": "2a2eafc1aed01ecdb8de7c915e20e325"
  },
  {
    "url": "assets/js/81.2be641ea.js",
    "revision": "958c7dc59ac1e46fdc270028feea2a1f"
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
    "url": "assets/js/84.abbc5b1c.js",
    "revision": "fab7a32d343612545932161ad0e7b52a"
  },
  {
    "url": "assets/js/85.6019c25d.js",
    "revision": "48f6eae6e120b3ff2d05438dc25f6bf7"
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
    "url": "assets/js/88.37a5f600.js",
    "revision": "de955a274a1681f963fe4e1e4206a744"
  },
  {
    "url": "assets/js/89.b75ae169.js",
    "revision": "5d3ff3184f2b94ffbeac19d64d2da7c9"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.afddd590.js",
    "revision": "a427108214156b837d277d4826853d91"
  },
  {
    "url": "assets/js/91.e86643e9.js",
    "revision": "e6eaf1960f3e8755b2abb1b4265b7e52"
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
    "url": "assets/js/96.57145c99.js",
    "revision": "3b802c79cc14e5d003e8d63a6932b7dc"
  },
  {
    "url": "assets/js/97.9def574b.js",
    "revision": "72a65068d1ac9bf672d18b99e6067661"
  },
  {
    "url": "assets/js/98.13398f8d.js",
    "revision": "016b017bbd5ccb2aed0c4116f007efdf"
  },
  {
    "url": "assets/js/99.57b63a0f.js",
    "revision": "42063b8353564fbd742d64be06b5f32a"
  },
  {
    "url": "assets/js/app.19fb24e9.js",
    "revision": "41f29c81ef787dee02746c0db24fcc0a"
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
    "revision": "1d057ba754ff0070115e93115ba5b030"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4856cc2a7f411815bf8576607670ec28"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "53db37969a58d26add40ae368a060022"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4f9b13b7e1498b2041c03fb371ed45a2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "124240fd2f3b2f550e55a3ec31c49151"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "75790cb9692dd7304ea8c3d204c9c32a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "405910115abff3d5e0d966c1a3cf6d1b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f408f15e5284287f8aa3d64a9da655b2"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "dda965173c12d0b0f4d79d69baf554b7"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "478b720c42a15a4cc36b747c6ee28ba9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9f222cc1c7d00a9d3f23a80d4f3a70c3"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "49bb7b9e39b03b1a3031f197cb40218c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "95a15907cf3d60204826030279026151"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "f1d94a964c8ef0712ae2228ef331a788"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "d48778e06937180a516064aba47702fe"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "061d727f10df2b7780be5256b5dd220b"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "0b90cedddb64afc32c072ad6882f5a39"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "9da361bb476277f5dc66d1a98ad7c9db"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "3909cad1c9e931fb4bd766a78d795f24"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "89e032cdda7a963451e664f63f53ca4d"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "8a743fb4ba3cc9ccc5416f3db0324110"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "3c1401d5432d50b2163abece3020b7ad"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "90a20fd50c915da220a6d2aea48e1c31"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d0fbaa45bdc69358eeb8003f11ed07a7"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "3d157239ca44c51b2d958a425ae510d1"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "e0c8ef674cd7564ff893a8b688fc324a"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "62cbbbd7f755d0aea14ddae087ae3655"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "6426a349af2d6a63f0cdb0b990ffd246"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b3a50be6a84096ef9d2322f839431226"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "71cdfd12ac8bf481c5b69e598f801954"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "997ecf12340b8d174e61dbabfb0a0fb8"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "385d22779004a441fce49d195acb2588"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b9443f07167f19abf2ec318e31f2e778"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "323a8985a1a77eefcab0f3d9c6b10e5f"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "27f3b3b5c3fca9184e557dc51e043af1"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "5ea46688310cb320c60d0f46f855633d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "2dfd720b52731a1bf8832335f132343d"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "fe37f91693cfca3cf5d5e284003f5c45"
  },
  {
    "url": "basis/index/index.html",
    "revision": "21f933b2943d47a2fa47328c2d2ac1b2"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1f778533bad6b756ed60c62732421835"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "6fdf85ab6e9785e2aba1baa249840bdc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "70a9c415638e7745600645ee79061013"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "c3abca3bcd78510c9abb82034d5b8ddd"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "86d1a1482bb79c0597b6ff3fbb92cd27"
  },
  {
    "url": "c/audio/index.html",
    "revision": "70165568c18609d483f1837204b0dad4"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "10acf6da137fa36adc28ae0dab148711"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "287ca214b7d7f0c1152573495fedb2bd"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "393045cd321c706ee136f7d6ca60ef0a"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e4acbfbe2784b13d3d2ea76158c41d64"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "9f9a85ff790d8a2577920f3dc01c7aa7"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "20a1728e28ada0d588e7b96383e733fb"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "abdfd6d532c1ccd703c5f0ab04768fe8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8f36fb26de05ce77f8e3fb7606b628e7"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "81305f26f2588efc854ef5b0f272f3d4"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "87014e0cf0f537465e24d67cd0ee354e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "0673180e5e4ec1d62c2ee51c0eec4f07"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "5ae1c30eadd64619053ab69ad144678a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "aace43b0afc27877cfd55b7a2ea37baa"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "f2802461d046709e90f8a3990336f907"
  },
  {
    "url": "c/program/index.html",
    "revision": "e92837152088710f89ab8a2b8e49f288"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "8bcb41e947754b8577bb73430d573d21"
  },
  {
    "url": "categories/index.html",
    "revision": "db4a38571d2da8126f0531b42cdb3c5b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "d519dcd195841f1c41407ad277d7c6d5"
  },
  {
    "url": "figma/index.html",
    "revision": "71077b8ef1f59de438a39cb4d3304eba"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "3e492d1389d148a30e88014aaf06e2a4"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "2f92c7db62e224a1334260b3c88ceda5"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "a286af7410c71aa0e9af45827bf3504f"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "9f12ac1f951f45dd846e68a1a29c9186"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "2208664917b2cc64619456d6d02263c3"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "caed2579334810410575c66698116665"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "d50e45637a64bbf8989b665ac516571c"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "fccb74fd323d35c3d11b6cac70dfa98c"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "350797d4aa340ab1d076a0acffe270d3"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "dc7e8e8a7efbcc5a4b7ad75b7c1e2e05"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "4940433c7f34d9aacae04fb0f2e03cdb"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "cfdfde11e2082b38a9b9448aba6164e0"
  },
  {
    "url": "flutter/index.html",
    "revision": "eb04f787d7cc5eac1ca5c9c71f73e470"
  },
  {
    "url": "flutter/point.html",
    "revision": "cc3591aaf019abac62cce235b1eca234"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "42f742a25bc60c898cd498a7cf849059"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "33e6cd28a671ca84980987ea4dbb5374"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "9cfba03d6fe4a14805fc0b9dbd4457db"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "bf8a6abc2ce1f903e8df07432a51483c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "93c5d3b72cb04205e8f5947f55fb345e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d1580462be88746f42b5b60504b36f5a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a892d27457474085ba4fd949078761d6"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b57e062aa94ee445ac56b78ead3fa526"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "e0fe0bda2ea1ec064b577e125f9c3ba7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ee742dc699fb6cb8eb75e79bd4e22e57"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "37dc839d8c9ddb3515a944ed00a84ed8"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "d32b38672b6b175c378ca5f02713a8b2"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "37832cc67e8abbbe5640e9bc2077cc92"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "eb1736d87afaf6afb611695a9c64fc1b"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8d89a77775487307d53f0ef1cc966a2e"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "0bb1f1532b07b250139d054c2242e860"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "beade3c92e669bb7d4e244c572776cae"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "e73f5de6e8405758af04993ae460b8bc"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "7f0254fe0f11617922a5ced19da6cc3e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a103afcca82eeaa97b7795383d390430"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "a36f4bb178da87de3d325d4bff12b782"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "52b6784c9d30285f1a1ef763e668dfae"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3f6e7070202c49da1f4cc278d04a9e6b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4bc046f40b339479ebd100a91cf7de12"
  },
  {
    "url": "haskell/index.html",
    "revision": "3bacf2e49e3dc1b00fb0ed9df9bb401a"
  },
  {
    "url": "index.html",
    "revision": "a4e2f30e4c158994cc1b4be3872d2c15"
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
    "revision": "b90f3614223b5f0b902374da4c02793c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c70f0b9a4a80b7d02e94d63a74b250d7"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f8a1767efecd6c03e70e5feb21435f0b"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "de1c6755ee11c679d6d0ee8ba99bcfa6"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "2f636c55631d05eae4fe66b0d1b93f76"
  },
  {
    "url": "python/index.html",
    "revision": "0bfbf00b9ebd712dd611bc16a68bb449"
  },
  {
    "url": "python/poetry.html",
    "revision": "00356c6a3a6fcd6071aed23bbf95045f"
  },
  {
    "url": "python/pyenv.html",
    "revision": "a6bea1e1ef2df97af37640a66615a24d"
  },
  {
    "url": "python/python-ase.html",
    "revision": "792647e065b6d45006e1f6a7762fed80"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "5176695e5b4eeba97f45503e9d3815fa"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "d0b9498638f8d61ce453dd8a4a786dda"
  },
  {
    "url": "python/python-file.html",
    "revision": "f1b7575cf0d2896a5740560ee7d5535e"
  },
  {
    "url": "python/python-function.html",
    "revision": "dc5b44f7b390775756ee678ae1c54034"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4c5b45f6f47765efc4b8ec31102a458a"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "4f0289a308b94b7fa695572b0fb2d67b"
  },
  {
    "url": "python/python-module.html",
    "revision": "576c55f0fbebddfc237d9feb57160cbf"
  },
  {
    "url": "python/python-string.html",
    "revision": "7111fba12d8e3fe981305653a646fd87"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a1fcaed9edfe17850182ada65dee6c26"
  },
  {
    "url": "read/index.html",
    "revision": "262b94dff19e52286eecfdae2d8b66c9"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "fe1d3a688402157da3e8707da0a10b2a"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3b838cf2728606cd9c7b3214540ff3d7"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "095907240c43e75e007dd0f964e519c6"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "cb249a00ca39328ec885906f3790082f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "746a5d56ca47ef047f14156389032935"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b0c1061736ba766d39e695f76aefe79d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "ac939d72cc2ab9111505196e158e4d84"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e02b6160e063a3ff326e2029ed272457"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "aad4483713c6d1fc624ee3d8b1ced57a"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "2bc8b60ce22829a6e0549c8ce72600db"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a6140fa24e122185d18ef22972b2191e"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "c339d50509800d1345f5c9c9d26c14f9"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "83a2b0e0038b7a3c3cc8bed81a632bfe"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "8450148a2fc64ff4a64b399e11c6b83b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "9c1cc12fb9a421ea3084056b842f7d64"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d4f630bd1a1dd438588b7976d61f15b3"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "1238a7448206f9ec4536947242c6bd13"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ae97e3c2ccaaf19775faebf743e2b099"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "51f36a41151dc6d9d7d83add3a20d798"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "bcc28a4c2e699d60cc27d8c27c2237ff"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ff0325cd714969e20561dff92b9ebbff"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "204db32f5b7dc664204292d11b29ee54"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "5fd71e594f62742cbd080779193add83"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "50631261cf0dda0c04d5edf21142459a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "820bde51dbc316a3898f9a4f9d9eb74d"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "27d3b1766f07aa2951b8aed9fd2bc077"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "9b5bf4457751856f5e40de242bcbbfaa"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "fbf7a3dfd1e8660902ec040f17a47d6e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "04038e946978276bcf501a948cfff839"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "f564e214106549668ae65ca736a9db94"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b8cef8483ce2ebc9729dcd0705dfaa2b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "013d72b5d169f8df0b67256d2584925f"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "374aa1c1ad1180445f08d0d1b6f14644"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "7b4019adedeb5dcae5d2864c9595d37c"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "b95debb08b1513ccf184085d2ff44a8a"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "966a997db8e319db718d30db77b38e91"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "8c1aa93fc61a54dae9107e2564f49292"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "ebf6e8feedf795670e6c15fd38a1db41"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "1fa78566880400b0d45337ce20d07210"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "32b3ca016af538ea5f7a1a1cff34a906"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "c502ddaca088bd15c3ca404490e272f7"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d323611635b70068745a97c25b04ffc7"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "f62b976a842e32b5a42c712f47bc25ba"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "2b79df177fa1098df77d2ff174a000e8"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "458299aeb8fbb496cc7111b141b02d3a"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "98ac41e7b330fdee2aa44ea8df4a6459"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "25f75e5468eb0f37b183fd162a3bded0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "13c08268690b640ae3b68e90db564dd2"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "ad4a1082ddcdfecabd3328e903169adf"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b239fc7034fd081bf772a37760fd0d0c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "17d31c9653299b16c45f8b5fb852bb56"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "b71dc5a6178e7d13053c58db995c9420"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "d86d72c897e7b4468f00dde9c203e3ba"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "c54cf755ffb599dcef5970f47a790cb8"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "6ab66fd0baae1b582b865c6723cf2034"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f8bfc65a07979c5779b688fcd21706c0"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "37565ca83c3af39a9698cb6fb486298b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "073ef0f8b8c95debabb08fd07d281a08"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "2fe856da4861e406cfbac2057d332ab4"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8cee13e9b13464c4c39019b9c3582d72"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "f6d4ad24feecddf9f87ebb1aa6770731"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "6e39dd1d7c981e2a78b9fa850719d580"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "c4c6c00abff3b11477b2242c1db6a728"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "1c21d54b6df8735d5cdf90a9b4f560eb"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "07dc1fdb57ca986ef7db3f47fef8dcad"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "c0feb78d079787457c2a89f3b198224a"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "812494616fc7aadce2364fc16a5954ca"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b1c79128941c5a26f1108ffc2c8c2f0e"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d25fd0a526526eeb2381a7aeb9713294"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "67c846e37422c7928a9e1619242f88f5"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "c256230b1ee0a4af56610d741d6ab698"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "0e9beeb4160290634e135fae912167c6"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "d06524a6c0ce3d163dd40c129c59c8c4"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "18ac64ae5a950f6502b312b7f1db43f8"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "a8d3d4a7b0076ed2e919e3bd7519baa2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "e03746a28791342916153f9c4f48f87d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "57c3d84750f399d31fc86fce7dc50890"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "6818e27ce18c9399d916b60d6e93ced6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "47ace2a431424f98e34e5c11183d081d"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5f576205f0f030a2fef54b10cf792fbb"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "47f0fde1a1817945fd864d5d83ed7796"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "97d8b6452bc3929fd39bae50ce68dbfc"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "c4be0ce4380f9bdf2aaa39d1ff3c48ad"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "d8ef89cf7e27e6600b8e820575c97676"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "0c9125bb421068f37360eef35a197a34"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "3e87f34756145b2a640d9cfee55311fb"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "57889b1f0b8453cd618939f8de48ff1d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "44e94cc5e17dc967d9985244a87255f8"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "46b1353fefb656bcf6d7b67c4fcd9421"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6781180eb36ad2979598c32c851af164"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "fa7567f6c331333a80a9111149e50f1b"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d9bbd9384023b6748a2a81c5ce796e9f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "8ac23e042e3d379c7a9a85173f72c00e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "85d25007e2b41f8b67fa912036943838"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "1e404825547758d1fa72730a814b2a88"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f514062c2e43fc33efd1f46620b3c631"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "5a91c3383821dd0a565ef101ca9a16e3"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "689db3a1696af39ed418fc87c64049bf"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "7d7f7f3cadf3f221a435c4787a0a32fe"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "c47dae3f57c1bb434ad3f015a96ab4cb"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "21781a8eda2145cde579375fcbfd82d7"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "72b3e3ee14678ba15d8918821e3f0ea8"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "0d8300d1019135852c983ead239c8cc9"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "4e0a7f408184a7140f7dc5f7b34f31ab"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0a2d121e9be47cf751c11a50002fa4ba"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "654b94215e83e3b8f61a6f090656420e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "ae46fd7419a6863c4ebd73353ab8675f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d8cb863ec57170890279f5bcef6d99c1"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9567b43ff1aeffa36d1e11d1e14b5978"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "17ea9cced18a8080be7b62a570c703a8"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "5980b250d35e34597e84b0f42dd4ffde"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "049a2b3806be38daba44b9be4949aa9c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "810ee8cf8957f1fd4b5b1865db34462a"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "8105e4ecd61a3785287ce43914f98450"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "adb2dcffe8bddad2cb7b4db3289c7043"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "f33625d1329312c25ddb56fe96e2b06a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "926001b7589ca98957fd81106ebe3eb0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "38b5a8c91ce433bfe9e9170b31db578f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e489798d010ecdaf09ffaadb3e6f5c62"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "48b78b8f602f4836ad6be908be7e922a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "101b584d528ef5caa602e4de3b7de72e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6c2ae281071644496177e22a7cbd9560"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "bb2a9bd59900c5cca0ed33916475d286"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "deb28f4034b9fc450a03a5c95f14e3b5"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b55ef654849b80655bf0d7532195f3b3"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "aefc7b815d0b69208d94d8719075fb53"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d6e40d3debc77e99404510792986df50"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "517f62ca0e72a70fb2c91f397f36e0ec"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "7f254e870316f7d7509b32a261517aac"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1a5f23c68f8cb9b9ff768eaeb124d6bf"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f9ca99cf325c45ff3eb39189510c7db2"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "73ec686a294e49c31073c3359ec1f527"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9b03b4f966115407905ce2b05da61b42"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "eadf7292419344c329795b4be39812fd"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "33042e07faab62e45e5149efa3277588"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "efcf035ba781a5037a097939112e17ec"
  },
  {
    "url": "tag/django/index.html",
    "revision": "4af776e8bc5234da3ae69e0a23c3bd16"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "580439520c15e23452a747b64258ad58"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "cf1896e4241c01c0c8707b0680302a29"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e039ae553e664d910abb989d2061b42e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3ed75d3d2c7e6e0220caec2f6b2945c1"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c37517b55a7e0f260696953bf27eb9c7"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "a3539a6d0a553d6ab8bb59fbc8e28c4d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "60fe65ee2f9715501505045900688173"
  },
  {
    "url": "tag/github/index.html",
    "revision": "30b12c718b4f74705aaed44f6ebafce4"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "359e8b92fed8fe4de22c5cc183c4b38e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3b2317343de8aa0da21d8ff9b080818f"
  },
  {
    "url": "tag/index.html",
    "revision": "3a9ffbf52a8a38ba8753ba2382f71755"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0c81a45d4ede219c89e041e6e642710b"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "d23b501e63796ef81f82181bc56a6c25"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f2157a6430360b21f69e6c86f3ad8671"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "85219cc5c0b989ef2386f5aa1d7e9a1f"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "f94edccf2f1712a5c31ba7a68308b968"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1aeaa187ac4cdaecbbcb5545cf93c7a0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b32305f4995f8391cbf7a3a0b9a7279c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3b9b72e2f933678aa253429d2f4ab648"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "52b7c72adcc0ee94687e28dabe0f2500"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "71dce1813ac7f7f36b7050ee30c1b394"
  },
  {
    "url": "tag/json/index.html",
    "revision": "500d23af017ec0bb65466c927b536655"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "478bd7452031b11fd16cd9d84a7fed96"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "b629522b73318d76927390bb88b139fc"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "c6319bbf90b0ec05943c5aa5a537cca0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9a2a222ae2537e16821a4bbca1c096ff"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "fd64055e7f32ef365bed3afe8a3a78a6"
  },
  {
    "url": "tag/read/index.html",
    "revision": "f1cda56784893f56c60017e9dc82e816"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "525f558f57b5dceb2c29ec0e5545c1d0"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9018ace4a8ddf7b1cdccb82ffcb2b052"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "74e35f9d752142f96fdd87c28715c0f7"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "09d32c549934b3ac6fcec64f26f1d4bf"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "538d36741f2346ff29e1f02fbc145a78"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "1ff7f87c0333250af95c73e844dd1a91"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "d3d1f35b1f11af68b7f66be8e19535d3"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "4f2b02752d68ad6293608c7c8c1bf252"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "2d5d569a9eac102af0f226c13e5ca708"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d8001ae5a28a804c645ec977724960d0"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c7a68aa6dca9fbc53582c7464858c477"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ce35c80f300697eb7accc67190df53e8"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "db37b65d59ef297895b7d62ddc235a36"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "53b4b19474d2d6055e1318129ff14108"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "ab9ebee227b2c7f4018810041680cd50"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "3108c2e2faeb35b219abe79bbb42f1bf"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f3cf916d124155ba660be0e4f763f3f4"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "28607f598dddacb528f677b867a9940e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6e391cae54c5f5c453751e509cc8d930"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "59dd87a4e018456e8148f0304e5b35e8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "33a221b6d6c01572de39dea8883a23b0"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d4277b637ab10bcd9fe57022768c3cb5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b5a909f0d79b56bd57556ac9b81587ce"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "00f146a77719dffdb5d76311000b94fd"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "702477e89b2b532a6c2337b05ea0fa38"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "897d0b4fa72a00ca30dfe30516e60ff1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "995f1b0445612be4561835dcd36c42bc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0a5152007f682aba99a31441f643812a"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "15eeaaaad52e7b91a758cf4e2daf7972"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "10fc0ecaf036f8f767a152c23913058f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "31b15028faee75eb60194b3a4023ffe1"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "179422fd7c992f693c0cca57c871e0bb"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "b5480975c6b8cf5b01a3bc7df2e987eb"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "ee930904e763bc6447af516b1c41dbe4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3825fcaa7d17387241135ab7af7fcb42"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f7510ad4f2d72ae524f3296466281849"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1047ab0bd72905e9364408b070241a28"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "85b1e92b814389967eace3b4fd2c494c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "013c540913ef5050ac7a1763c8be12e8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0ec08625d78f9a26e801ffad50235566"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8904fe9e9e97c5d3dd79e2d21284c81e"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "8565d6a35e6ddd7668180e6412d20573"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "064d21181daed20cb036a365e7e815bc"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "11d05fe9fb3e0b6a93fb308167d27dd3"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "0dea74b241fc56e32eae40aea7c13429"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "253d664711d549ef857aeebead171f3f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "9e15e736d10a417f657e89784986447f"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0ea957d526f14b29d867dbc3dbda24be"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "8cead97abf7a0de6f1ee0d50c39d8e42"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "97377b31bf800cb321f6a6a5f00d971d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "83106bcada924ebe88b55a379131c274"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "dbc31cc7434780efc40ce7fed3f020e9"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "73482f7b10a3f86c0c9dcbfcc5418fbc"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "880afd2ddceb55da9c78429673cd5c1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "79811a2e00817cc98df00c395028f0e3"
  },
  {
    "url": "tools/docsify.html",
    "revision": "35c8c4d17ad6036f46baf3db0fdd9b57"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f1cca077ccaec76148e17923afdc305a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "1c18ba6210c530aa00f2ec310dad6f03"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "5730a96e030832840ab10275334f9609"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1c9d7d094c7ea794d98b11936195353b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "76ede205b258f8c31cef5f71fe05526d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a79414db18c0378ba5a9ca7dfb4786a0"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "c60e7c6907734c7a27eb44cc4496fba6"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6fec70fded7b28720da665bf9d072967"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "d76267731660d5bbb88d9e075e72ec40"
  },
  {
    "url": "tools/note/index.html",
    "revision": "2d7411a1ab7e9124909d7779482c21f3"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "a598efa1fc928368997213b0ab7f31b8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "13d8141e1cce500ecdfd5edfeca5648b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "bcb6b46a78b40c764fbc25d7e84825a9"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "2dd1824ad350bff47910b19af4e89102"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "026830f3905af4156262ccc9a6f52ad5"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a32006aa965980cd787566a0e686b090"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ae3bbb22d499ccb8d655506110fe5771"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "944c935113c087c08e539a413f8ccc6b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "838b4338f81245afd1a123a1657448e4"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "62a5e41582f74fbfa6cd822ac8733e15"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "b140d18acce8243e0876f48fb881375f"
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
