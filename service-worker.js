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
    "revision": "cf0a6e93e678c730812ae6ff21ac9dd8"
  },
  {
    "url": "about/app/index.html",
    "revision": "6f83918185809c5646125102685e3d7b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "69a4378d7198342f8ea26f3f358d7558"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "32f2b95d749efcd0ceb6640f497ca987"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "9e3efb74c0daf4314f2c34a344f6f695"
  },
  {
    "url": "about/index/index.html",
    "revision": "07ea1a8e797c8db56f04cf208b4b0eca"
  },
  {
    "url": "ai/index.html",
    "revision": "b4aabecc37b799cee4502f5817e32bb0"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d8ceb6c627ea566d234c87bc9166132f"
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
    "url": "assets/js/100.a2c9eaf2.js",
    "revision": "d738027cd4c9f523669011aeefcfbb54"
  },
  {
    "url": "assets/js/101.c2fe211b.js",
    "revision": "53baf5bbc25d02f34baa9f89d012689e"
  },
  {
    "url": "assets/js/102.a49bae0c.js",
    "revision": "6030baf5f4e53c08395139f7955f029f"
  },
  {
    "url": "assets/js/103.3f527d9a.js",
    "revision": "243e5421bf91e8cd2da940aea0bc2bd5"
  },
  {
    "url": "assets/js/104.042b167f.js",
    "revision": "9ebc73d187c7373b0a500c82d8e8c640"
  },
  {
    "url": "assets/js/105.ff2fed4e.js",
    "revision": "62231d8a78104f059ccded7d8dfdde24"
  },
  {
    "url": "assets/js/106.617c08de.js",
    "revision": "6498993d9f0229012fb49b03df85720f"
  },
  {
    "url": "assets/js/107.bf94f64f.js",
    "revision": "250982bf21a5f301b80aff6b3acf8185"
  },
  {
    "url": "assets/js/108.4a9681f3.js",
    "revision": "150612e3b5cf20af32e3949597219ebb"
  },
  {
    "url": "assets/js/109.eaf7d9c4.js",
    "revision": "23656aeda16290bb78ee02b749a139cc"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.58da5619.js",
    "revision": "ae852571fe9bf0d0599f2b8e611e9490"
  },
  {
    "url": "assets/js/111.5a74be5d.js",
    "revision": "3e94a640f55fbd02e9198a02794c9d34"
  },
  {
    "url": "assets/js/112.013e3102.js",
    "revision": "4a5dda3f461e73f6f6e5261a4ba9a47f"
  },
  {
    "url": "assets/js/113.af4b5e32.js",
    "revision": "2de2350950f493d5d92c84f5ebea1896"
  },
  {
    "url": "assets/js/114.18da2835.js",
    "revision": "3cc3f47f68b131d8dd3c58a042f0e9d0"
  },
  {
    "url": "assets/js/115.416b2270.js",
    "revision": "3a3dbd66965344f91a473305c206a192"
  },
  {
    "url": "assets/js/116.8530e3cb.js",
    "revision": "754df59c056ea96d4f4408bdc37723f2"
  },
  {
    "url": "assets/js/117.5d5c91ba.js",
    "revision": "05b6f534da338eba2568616241493762"
  },
  {
    "url": "assets/js/118.0f2a0258.js",
    "revision": "1c4b80848fd7be8f81cba13e9dc6ae8e"
  },
  {
    "url": "assets/js/119.5acf25db.js",
    "revision": "a48921048409c9bfc749e8987fe1ced7"
  },
  {
    "url": "assets/js/12.749f4d86.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.83835d68.js",
    "revision": "7c47703ce0d925fd00ade1ad4ca18c39"
  },
  {
    "url": "assets/js/121.2a9d5924.js",
    "revision": "0adc2e1e97746f3e0e6e5daad9e8433a"
  },
  {
    "url": "assets/js/122.16c37f79.js",
    "revision": "c0b07a1c5d086734e6b6989a98588258"
  },
  {
    "url": "assets/js/123.b2700946.js",
    "revision": "f1a6006228a07cf8b9f0ad3a3e54c9aa"
  },
  {
    "url": "assets/js/124.809df5ce.js",
    "revision": "efc4499393eef80b9a924f3bf7ca95da"
  },
  {
    "url": "assets/js/125.a76d34ff.js",
    "revision": "c205b9199bb4dd057bc586cbcae3d385"
  },
  {
    "url": "assets/js/126.9ce3e194.js",
    "revision": "d1053e4239b3b035b6325c00e6fa731e"
  },
  {
    "url": "assets/js/127.ff583c8a.js",
    "revision": "e4844045b8b482e3d4205f459312e5b2"
  },
  {
    "url": "assets/js/128.33a70bfc.js",
    "revision": "1a7e8b221e9019a71af68439d3aaa4f4"
  },
  {
    "url": "assets/js/129.b4976bc3.js",
    "revision": "3a084d25775ec344e09ed354dd4553e9"
  },
  {
    "url": "assets/js/13.2ea39f30.js",
    "revision": "df32daa236d6d24d49b15b2e19c2c424"
  },
  {
    "url": "assets/js/130.e085174e.js",
    "revision": "2d14eb03202ab412441d289c543edbd0"
  },
  {
    "url": "assets/js/131.78a8e271.js",
    "revision": "c828e945fcbdd44ec5d04c1c01229b42"
  },
  {
    "url": "assets/js/132.0e8f87ad.js",
    "revision": "f36e99572194a074cff5bfd0a7d87fa6"
  },
  {
    "url": "assets/js/133.80b66590.js",
    "revision": "ddd70ea45d6534f02185af81ee0da1c9"
  },
  {
    "url": "assets/js/134.16ba2b64.js",
    "revision": "e2aa4978a306f87b8562403153b9cbb3"
  },
  {
    "url": "assets/js/135.edb10a6f.js",
    "revision": "d74ce4c9b7a8940c63d690535a1af0e5"
  },
  {
    "url": "assets/js/136.9f282d8d.js",
    "revision": "1d1b9d687d78823d4a74b98ee6e247df"
  },
  {
    "url": "assets/js/137.d1afe419.js",
    "revision": "3b013e1faa1ddf416f8e0bd12ae6b327"
  },
  {
    "url": "assets/js/138.ca772163.js",
    "revision": "79e5ce555aa5ddf8a25459c773fc9897"
  },
  {
    "url": "assets/js/139.2b9149dd.js",
    "revision": "097b11e6d0297cac862112890f7f9ce8"
  },
  {
    "url": "assets/js/14.744c10d6.js",
    "revision": "7856cabbaf7f135f6180957351d76ebc"
  },
  {
    "url": "assets/js/140.2e628bab.js",
    "revision": "fe8831c97000f4c052433f150064d6d7"
  },
  {
    "url": "assets/js/141.979f607b.js",
    "revision": "a6440443196b933cfd7633473cbeb4c2"
  },
  {
    "url": "assets/js/142.5c5bcd67.js",
    "revision": "bdf263efdc5938ed676c86ce20642961"
  },
  {
    "url": "assets/js/143.512af4bf.js",
    "revision": "d10c489be161b14726ca8339c87f87e0"
  },
  {
    "url": "assets/js/144.91f1d214.js",
    "revision": "268858f106a20afb758442504e8702e0"
  },
  {
    "url": "assets/js/145.a902d886.js",
    "revision": "aaf663c7329c9191bebab1248e1164f0"
  },
  {
    "url": "assets/js/146.d57194d3.js",
    "revision": "ace67da79293bcd6661017d852de1b72"
  },
  {
    "url": "assets/js/147.91df0d6a.js",
    "revision": "cad74651608d5c330d444fd480b2846d"
  },
  {
    "url": "assets/js/148.99c0bf80.js",
    "revision": "316177e59b77d748a77198a354fdf468"
  },
  {
    "url": "assets/js/149.a40c05b2.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.38f58833.js",
    "revision": "6b9f943aae8f4c7289fccbe8bcc2106c"
  },
  {
    "url": "assets/js/151.6e477d14.js",
    "revision": "bc02369c82dd1b7b5368f724ac12a796"
  },
  {
    "url": "assets/js/152.18853804.js",
    "revision": "7a9a04b5ad509df1b9eb2c9f2c9349fe"
  },
  {
    "url": "assets/js/153.f0b4c92b.js",
    "revision": "ccc2f7ab509349a08009f3611696983f"
  },
  {
    "url": "assets/js/154.facf7187.js",
    "revision": "ff52dd833222272dec7f473ff9fdab5c"
  },
  {
    "url": "assets/js/155.abed289e.js",
    "revision": "aff42195ade8ddd9f674c96692997db2"
  },
  {
    "url": "assets/js/156.8d44c1bf.js",
    "revision": "3e98d25194337983b85e9c143e306a51"
  },
  {
    "url": "assets/js/157.cab168dd.js",
    "revision": "8d27816d08e17db493891241c47629b1"
  },
  {
    "url": "assets/js/158.5edc9bb3.js",
    "revision": "0156e1b16bbcc284ad58f17acc7742e4"
  },
  {
    "url": "assets/js/159.707ce13d.js",
    "revision": "fa0360c070f9e76563575590f42ab766"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.50ed4dce.js",
    "revision": "0007db3b04956cfb8a01eb5960474fbd"
  },
  {
    "url": "assets/js/161.cb72c02a.js",
    "revision": "2ce2c0b12361a959ded2f2d4eaacda36"
  },
  {
    "url": "assets/js/162.b20fc9d8.js",
    "revision": "edf1382143085ed8651e5853c5161d00"
  },
  {
    "url": "assets/js/163.45975365.js",
    "revision": "78232194cdf210babda2d5753609570e"
  },
  {
    "url": "assets/js/164.4d5991b5.js",
    "revision": "1e57818be748461aa45a465358ac1c45"
  },
  {
    "url": "assets/js/165.15c4cfff.js",
    "revision": "5612826c58a7ac43609ffce499fdd10a"
  },
  {
    "url": "assets/js/166.be73f542.js",
    "revision": "37119a1265aea9104a18cae9b1c28cc5"
  },
  {
    "url": "assets/js/167.3c583d14.js",
    "revision": "6c468bb3cf3978f0386f2acb07dcbc26"
  },
  {
    "url": "assets/js/168.f555f7e9.js",
    "revision": "f47eed3d05c6f8f6cc2a185973b1ffe3"
  },
  {
    "url": "assets/js/169.179090a7.js",
    "revision": "731dbb74e38d98884847aa3d49e34654"
  },
  {
    "url": "assets/js/17.adbf4e27.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.aea2b166.js",
    "revision": "d568fa02cbcefefcd788e356447e0893"
  },
  {
    "url": "assets/js/171.2757a751.js",
    "revision": "0defbd3f6267972bd6011901e4919f25"
  },
  {
    "url": "assets/js/172.f64397ad.js",
    "revision": "95d28290b156fecc421339cb809ed8f6"
  },
  {
    "url": "assets/js/173.8ffef5a2.js",
    "revision": "730dfd48885e33c11349901a457f9485"
  },
  {
    "url": "assets/js/174.ffb12514.js",
    "revision": "272661c00b2227c6c768030aab907b86"
  },
  {
    "url": "assets/js/175.041b4428.js",
    "revision": "ed434da8eca45837f71464f16a4953fe"
  },
  {
    "url": "assets/js/176.2b8d35c9.js",
    "revision": "d48cf0486874aa9e890924dda89d64b7"
  },
  {
    "url": "assets/js/177.717dc307.js",
    "revision": "0f26c058a7c5002bc9bd9c46efff2b2e"
  },
  {
    "url": "assets/js/178.afb0e248.js",
    "revision": "e6b974ba97d1ac17803e33cb5491d622"
  },
  {
    "url": "assets/js/179.fee83223.js",
    "revision": "b459fc19be79169f85738b0de435cb3a"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.5d8f36cc.js",
    "revision": "636b1e70d046a03b20d36583900895b1"
  },
  {
    "url": "assets/js/181.1376dc82.js",
    "revision": "6d957912c62fe99705393c53097d0703"
  },
  {
    "url": "assets/js/182.e3e431a3.js",
    "revision": "e497d2045d564bee8b1c67762a3aa582"
  },
  {
    "url": "assets/js/183.17c4ae73.js",
    "revision": "f4397ea965bcfbb371f8a380403b8e52"
  },
  {
    "url": "assets/js/184.5ccda8c0.js",
    "revision": "a7b6b597181cfb9e7720735eeab0b205"
  },
  {
    "url": "assets/js/185.6238cf00.js",
    "revision": "40a017c3764df28704d2804adcfc39fd"
  },
  {
    "url": "assets/js/186.127e4b7e.js",
    "revision": "ef354b0ccc7da3bf37b1b6b20392d287"
  },
  {
    "url": "assets/js/187.b456c5c3.js",
    "revision": "63e1e08624c5b6466e7f7bec72cef683"
  },
  {
    "url": "assets/js/188.74edaac0.js",
    "revision": "bbd4ba40e5f44301a2efc1a9b67cbed0"
  },
  {
    "url": "assets/js/189.76db22a2.js",
    "revision": "90fe665467116e9a54db882a1c0a830e"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.9437abbd.js",
    "revision": "199c4e7caa2986efbaa01d6198b79f35"
  },
  {
    "url": "assets/js/191.9e47314e.js",
    "revision": "2c2a623fab8cb3e6c5fbbe6c897ffd35"
  },
  {
    "url": "assets/js/192.a13ea326.js",
    "revision": "829b7e04c061c7ffeff2a49cfb51230e"
  },
  {
    "url": "assets/js/193.e9a448ca.js",
    "revision": "3eb7da8e67918a4925a7b2f8243f69e7"
  },
  {
    "url": "assets/js/194.111f3a9a.js",
    "revision": "721fbeb41f43398638624a72863e5643"
  },
  {
    "url": "assets/js/195.e7f5c7a1.js",
    "revision": "4bbba55139fc368903eba5d2eadecbc8"
  },
  {
    "url": "assets/js/196.98f312a3.js",
    "revision": "2add12f178776db237d28719d8d78a88"
  },
  {
    "url": "assets/js/197.c777d77f.js",
    "revision": "15170a575c1d4314f9ee68f19107036f"
  },
  {
    "url": "assets/js/198.96aa6cd4.js",
    "revision": "391f70e49cbcf79147365d0eeab6c679"
  },
  {
    "url": "assets/js/199.3064943b.js",
    "revision": "ea2ebcc28502d24d063cd9769e91fc99"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.e7966a51.js",
    "revision": "938c0ca564b943394032f76bbe37a00d"
  },
  {
    "url": "assets/js/201.9d58be30.js",
    "revision": "33dbb4cb7a30e5b91e5ae34ba9c239c9"
  },
  {
    "url": "assets/js/202.f13f11c7.js",
    "revision": "bd59d3d409fa185ec508db14161d2069"
  },
  {
    "url": "assets/js/203.ca179f54.js",
    "revision": "cb3ffb729c2510a94968299ee84f8479"
  },
  {
    "url": "assets/js/204.023bae73.js",
    "revision": "18ef9f7874b2b1421c74d001360bfa05"
  },
  {
    "url": "assets/js/205.5b45146a.js",
    "revision": "7a53a71bb5e868c75c0146293e3e23d1"
  },
  {
    "url": "assets/js/206.7d342f6d.js",
    "revision": "f4e5a8bcf227ba123868c946b70f606d"
  },
  {
    "url": "assets/js/207.2e01fbab.js",
    "revision": "9c5a4ec60a2f75bf41dbfa9e44c71d66"
  },
  {
    "url": "assets/js/208.7c74aa81.js",
    "revision": "164c82085890c9166c4c3a232ec62860"
  },
  {
    "url": "assets/js/209.673acb70.js",
    "revision": "842ed198294d3548457e0b1de3bfbbdf"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.a1dd0b4c.js",
    "revision": "0f8d0e0e036e11e76ccafaa64c3e6da8"
  },
  {
    "url": "assets/js/211.8b1181ec.js",
    "revision": "4a9756788a426b5c4850f99830c3016d"
  },
  {
    "url": "assets/js/212.0202d677.js",
    "revision": "ed25c4c87a495f2f7f85fbeac2480212"
  },
  {
    "url": "assets/js/213.f47ca950.js",
    "revision": "29afe355b4b1d36f914a6c7aee0c38a3"
  },
  {
    "url": "assets/js/214.21475899.js",
    "revision": "0400fda96907397d05ee5c09be6a85a4"
  },
  {
    "url": "assets/js/215.7ef524b3.js",
    "revision": "74d37808980fe6a06986cd509913cf35"
  },
  {
    "url": "assets/js/216.51cfe185.js",
    "revision": "8b65752b4e5ee4835c5aa38b03cf05f2"
  },
  {
    "url": "assets/js/217.8ce35237.js",
    "revision": "f607e1987974ca01a49acc8a25280848"
  },
  {
    "url": "assets/js/218.e1424083.js",
    "revision": "df94798552c4f769b6e2db1346873f66"
  },
  {
    "url": "assets/js/219.0f2ec8ff.js",
    "revision": "d2111a1fad26b1a1be199b5361f6b735"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.99959e27.js",
    "revision": "3c4d28165b9fcbde0833b90a4295ad71"
  },
  {
    "url": "assets/js/221.427810a3.js",
    "revision": "e99197fba4bd36245feadbdb28a3d6c8"
  },
  {
    "url": "assets/js/222.c801eaf8.js",
    "revision": "44e60f4ff345ca9590e7cfe68ff1aa72"
  },
  {
    "url": "assets/js/223.2d7cb602.js",
    "revision": "6744b29f7a419d49d05b13875f47c4d2"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
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
    "url": "assets/js/41.7fc942c1.js",
    "revision": "91b88336928d45eb4afd43e5574c970d"
  },
  {
    "url": "assets/js/42.01b6171b.js",
    "revision": "e25020089a0d9d16ef0c762f2c27bca1"
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
    "url": "assets/js/58.cbd70875.js",
    "revision": "4e3ea51040c2cf21bd99f61fed6ece82"
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
    "url": "assets/js/63.8f06287c.js",
    "revision": "9389a85671d59c23b2b85b036b135456"
  },
  {
    "url": "assets/js/64.347d02f9.js",
    "revision": "4e1076f37d2e1db92db28d87254f8e43"
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
    "url": "assets/js/73.f82de604.js",
    "revision": "cfeaff9d4dd7c8a13e306fc75fae96b8"
  },
  {
    "url": "assets/js/74.02737426.js",
    "revision": "a83fc147816bfe30a9bbe8ae0b7ef6fd"
  },
  {
    "url": "assets/js/75.d681727b.js",
    "revision": "e17545a8051574b630738644603b8460"
  },
  {
    "url": "assets/js/76.08747e2d.js",
    "revision": "d04bd5309f1e5cf2ba07d18d834e23d1"
  },
  {
    "url": "assets/js/77.44a2bd36.js",
    "revision": "98078f8c98644ec53d746a0791ba3a36"
  },
  {
    "url": "assets/js/78.40b2a10c.js",
    "revision": "028909487fe1d232a23e98fff2aaa1ac"
  },
  {
    "url": "assets/js/79.869a91ce.js",
    "revision": "daba8129d53c96b3c07de95c31b5442b"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.411bc293.js",
    "revision": "f35319077484cdf8cce78ce5464cea04"
  },
  {
    "url": "assets/js/81.4fd30987.js",
    "revision": "a95ef839ca901fbc70f279b5607183aa"
  },
  {
    "url": "assets/js/82.8c28d734.js",
    "revision": "c6bd394f57a0be889637ff49ec5a204c"
  },
  {
    "url": "assets/js/83.d66a6887.js",
    "revision": "01371dcf415eea5c3c29f270ca18655e"
  },
  {
    "url": "assets/js/84.7c3bf843.js",
    "revision": "a9300eaab2f1d02bad1ea9734212d3cc"
  },
  {
    "url": "assets/js/85.dffd62da.js",
    "revision": "b64904a95fbcea8b65a684e6a4941c3a"
  },
  {
    "url": "assets/js/86.6b6987d5.js",
    "revision": "9a974851a7e0309ba6763953046ec352"
  },
  {
    "url": "assets/js/87.3d5eb27c.js",
    "revision": "340cb2b4f1408a20a6d9deb56cff77a7"
  },
  {
    "url": "assets/js/88.865e4c05.js",
    "revision": "fc0db0bb1c3c4b84294edaf91acc3251"
  },
  {
    "url": "assets/js/89.f3c1ebfb.js",
    "revision": "d78e0c25fac90dc6a7900b0929db1160"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.02ade227.js",
    "revision": "f98e183b3abbd7450080849890a9ce9a"
  },
  {
    "url": "assets/js/91.e556975a.js",
    "revision": "26ab71098ab2beb4e758ceeced650f79"
  },
  {
    "url": "assets/js/92.115700f3.js",
    "revision": "7c57b9a2b243aca32b750cfd914aa904"
  },
  {
    "url": "assets/js/93.c3f166c1.js",
    "revision": "c15b94317bd2645047c69f99cfc75f19"
  },
  {
    "url": "assets/js/94.eb676396.js",
    "revision": "9357ae1221042940d4ad40f935e9cf24"
  },
  {
    "url": "assets/js/95.a5bea1ae.js",
    "revision": "586dc1840e020c15c0024a6079dbfd83"
  },
  {
    "url": "assets/js/96.d470d6a5.js",
    "revision": "dea1d1943c6cc34056aea2e7b6573782"
  },
  {
    "url": "assets/js/97.e5236d62.js",
    "revision": "c833ffcc79f6dd9bd35dd91121669dac"
  },
  {
    "url": "assets/js/98.03149451.js",
    "revision": "2b7d8bdf891a28b9062e96470c8e65ee"
  },
  {
    "url": "assets/js/99.f807f478.js",
    "revision": "617e52dd80d8640b3792e6af1b066616"
  },
  {
    "url": "assets/js/app.928921b2.js",
    "revision": "531a2b06e9b4b09cfda46ed10bf23ca5"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "9c8247e48d73b4b7617b8d11306989f4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "57afecac63b41a5188f9be2a154a16a1"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "79260083eb3a9f79618663d8898ed1be"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bca989c8caef41a27df6ab474b8afef8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "97aeeca6e4f1cde59f9cd9d74fa31671"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "2ed1770e32e74836b3d7590124cfdb7b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6d8af8b85f4f8e1673133bb6410a8f92"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "026ab0e3b1349c31fffe76b47c149de6"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "21a59a0691c5f87eef22ccf67a68338f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3c63a22f97d72c7598b8e23015dd2e14"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0a6f1271f9edd628c422184994a49430"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "b878f5a7da00abbb218dfb1d89431a58"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "e88cc95594cd2da97542563500478fa2"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "e1c7dad723cb0ec983a119ff4355bdde"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "992a7a7df028a68b1f0c8c0a6d283f3e"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "f5059e7ca31fd93d7590b88a0cb4d428"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "bced9af223300ee9df9cf0db70c577eb"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "0a89d1409a749bcb6728381f1c3c1ea0"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "fd6d64c1398c0b9029efc5e1b692700e"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "bb31fd96ea85482e18a952e34c966a6c"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "efbad2a512002357d2579ed19491710e"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "574313e8158ebe2002c9718da3d08e67"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "0611cc429e2519c189b0d80212c3c5a1"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "7c0bd5647c19ed929313e81584c60335"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "d8df26d816644f9eb306f15e0615689b"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1a46450d82f67122bda27e9057605f5a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "cccb3f7c415b3a6deade71a5fb569955"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "6ada740117aedaeb8346870206ccea7f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0451936272c1564b02fcbaafda42f487"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "d7d156e67894f672fe2a450d22036601"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "e9efa7233ec28f710632f22566d2d37b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "c26861fd3339c63932be6f136927e724"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "3bbc94235a2b4ac67e74b46c7a77487d"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "eb45e86ea5ec72933abbf8471b016e57"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "129b20344858dccdf729669e51c4662f"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "216d6899393539a8a23654fec73666d5"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ecc7cd2f6520089e66f03497f33fbfd7"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "784fe74886b42f8fc352cf3496d78d51"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e9b9793c44d1732d1c4d586186909924"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "d23438d1ecbcd69e313d9b7ffcb5541e"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "526aede0def436f9e79e04d1fdce6d71"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "6b9ac4abd27357258be1e8ac2dfb742e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "c792ac62c716b6e20d9376718836bb53"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "f190e7fb1f2d3e478bfb4471e3788dc4"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "6904260c20492dad04143378be6b63e9"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "7100c1c0b024996515f8b8665b74df80"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e1ff87e9c43bfbe6f018110216dc6137"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "5c855ad73f8662606f1a93ad6d44b2b2"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ebd755104e86f92ae892f1753e830354"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "bac517a9ba79c61bb3823eb7dc55280d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7b7c48ae7498c84f516e210faa18ff37"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "617a485f2a99355fbc458c49aba1f87e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8a35fb651e8bab8932c23bed4099fda7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2f30365a6a19a8df761835b9c967d29d"
  },
  {
    "url": "book/index.html",
    "revision": "94df5255bffbd81dd801e6cec3066e98"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "054026285809d8bc1f2bedc4c5be481d"
  },
  {
    "url": "categories/index.html",
    "revision": "f792287b11a8140316693be2636da314"
  },
  {
    "url": "figma/index.html",
    "revision": "3266a651b64a04ded0bc6425e94efc47"
  },
  {
    "url": "flutter/index.html",
    "revision": "e3cc044f719c406efc01e42ff8e66c7a"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "a9333b840ff48978854e57b8582547b2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0b70a02defccb65c3e8c1dc6ab4a5ac2"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "f6198dc1e0b61b506408aa238ed0512e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f452000b1a57f547a73bdff8f6798cd9"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "78434707ed100bca3219920a7bf08746"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e882400de3e445fa72bd32f3703d7e74"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5fae2f938eb30bd742373d2928f69bad"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "40fc699fb31c776d948d08a8bcbc712f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "33e61370206d8f597d8ea8e0893bb7fe"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "93f8daa57c01422b6ab41f7310431209"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "816688d7fabc42af22cecf1ed91f3bcb"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5307a36592c6f6721550ffaa5294f8c3"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "59a025b12f57310d178b3e3062c13a25"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "16ec8671d9aab9e1bc25078847a00384"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "79b073d3afeeaff785b5a6c14d48b720"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "ac73f3273a74eba60aea38b1ae3ca1a9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4f2522e2f0a9f20d91e59c794fa2899f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "485b943b8923a33f3cf1d5ae69fd1d6a"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "a602d4f328fb56949848807976d08692"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "6a5cc8af29c0ae65056826629dc2544f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "32c6f8e1a88dc7b932bb08b3dae30e64"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f3baee19e36ef8f5a70659f35d531c12"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "933cddf6f19a366abaa472345e27496e"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f465866eaac3d15189c350f303bc670a"
  },
  {
    "url": "haskell/index.html",
    "revision": "ec6f239d92bd7456a3e68aee615da865"
  },
  {
    "url": "index.html",
    "revision": "dbf50e0e7787021b867f30e44e342893"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e403e4c796f8d41f60e91de9c7c1b0c3"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f5a2d78ce43f5105ea55ea66bfbe2622"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "ace59d596623f1dc2c391a7044780672"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "102693f8a75925a8d2ab2710955ae3ba"
  },
  {
    "url": "python/index.html",
    "revision": "b932a26302ad152ba78f45b22c6f5f32"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "f3db98bb8589ccc95111725e0e0326a3"
  },
  {
    "url": "swift/better/available.html",
    "revision": "0f6003629823e4e98fb3c9aa29e5352b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7b0cfec2971985ef6a8ef70818b2042e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "25448f2853fa36af7507734c4b269601"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "fa0f34ae6edfdf946460dbb596cea714"
  },
  {
    "url": "swift/better/di.html",
    "revision": "41741d396cf843ec6cb21892838fac13"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9f93108c6cf28e884927d102dac86e6f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "6db8b30ccc826830e731b0aabf3c6ff9"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "1c3edef8a78241febd3eb4682143722b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c08b5bf6629fc40a0b53d18d959f401d"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d350b7f881f3a66b1250db219a3c71d7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "728bab7a792171bb0f7b018fd72c574a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "b5bd5385477440c33f665565cc4246b6"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "047d6f9f29db9bd764d7b832ba0f6ea9"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "f60f714c524b5531db629eaed785bea5"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9b576647a3784c28c19fb44d3bb90968"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "662d1cfea7b88c029eff512cc1c9485b"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "fb4bfe9b659e16e265e478b51bb1a014"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "23b5331de26d27664adfe7743492b96f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "7a58d9188aa06a9351e268251fd4c905"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "98d911a14d900ba18d87c448a2cb7fa1"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "36fdd18c739a3ae27a55e57ac763efa0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "23fd292be9e1ac9788b7d85a1f4ffdcc"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4216a8f8c306ab7a47229252de52e069"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7533794b59a50cec1cb9a83a4193dcca"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6007973eaf465990d6dac5db982128a6"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b20a01bd4a54c4f7fce54df8134f1062"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "e446460960a14155926a8137abf0161e"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "82bba2a01b6c46cd9eece75b38452a71"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "f91a172149c8092a5d1567a0f87bd4f8"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "53c0f52aff1f2b64e533bfe2cc5c1194"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "aa54ccb92f8beb2a9b463b121944619b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d50d06d93eca49b63ea5298c9244cc22"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "5b9d6e9ff9925889c9a1444b4482c75d"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "bad15ff6cec5211f5576ad1abadefa46"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "85733ab52813828917b46a3edd2b5007"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "72dacbd6d642b4716c55be1049afad6c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3832f29c3995a7559ddf1407efd96f76"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d675662fd4c771337f1641127e40a0dc"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1d4e047ef56cc548a3163a91a220181c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "368742fc4b827cf3f9e5803272046c51"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "19c4957914adf0ecb7b309fe98f543e9"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7f96acbc854555c7fe5c2fbc956cec7c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "3ad7282c6190151bea6b7844c0d01c1a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4edc0750f0fe2033cea97d6043c20b15"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "ccfe9555c7f59b9f091d006321f9ec87"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "5c74e3a653e544d5f13f1fdcca526962"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "3cdc8c4c8da8053cdf57a478e2320b27"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "840db9ecb035fb8369fee09e75b3a076"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "a2688c8c930a7a5e042e73a038bb50c4"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "774ab8e12e444dc239246f3955094d53"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7991ac6dfe55041aef83def683643f97"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "a7ec4c874d77f9994481caf59aa29be8"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "def46ce1b82c7fba9ccd75a2dc2ff2df"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b4d438ef38c89cdb3344de6c09be63ec"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "5cd01c02166ff962a0378b5e5519059c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "34b6b709f25ce2ccd9046f41c20e946e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "6068f398e0240df5a96b1494a63012b0"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "33b4e2ace21be9f82474f71bc821fa81"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "456e933c29bd3d515b6d47fc25ef493f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "47eabaf42d01a808f51a732f128c1c3e"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "7c56d3483f25a373954224a30924fb78"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "cf8042c656235a11e4c676c8947bc275"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "d53335cb55c03138cbc82b27ae47700e"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "e864350476555dd741461fcc87fc2ec9"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d0920ee8c53d711b8e2f61f305f7a06a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "a59ba533eafb8eda5e4d7f413ce53c1f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "154d27ae93b550aaaff7e785e1941a72"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "322cbdf929faa7712e7bf58781ae42b5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "0ecc1a61079bb539a50cf4fcabc9d9f9"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "5f4ee3dfc4ad04c19e7e7395453e3141"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d28fe40afa628f08ba68df5be33cb996"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "3ebea15c26832c2e52c9f9018034b250"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "eda67c5b8c4535f607111702658aa979"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "49deaf288ed630fe9b6e3540b6cb93e5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "d857a96ced865ff10392c82db78ce881"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6c90d131c057d399b43ade602217ca1c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "d0701ffb3d372cf79d998d4eaaec0314"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "fbd31ad0243d10d0af19f10365624ce6"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0e161e8c9587cffcee728f46c6e4173f"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "2d5b5a22f11ba1c187b64e38e4f698c3"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "1b8fc93e585d89237d37f686401c861e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "5dcae54023e29439223daa5436f5fea8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "4300049c542ae1ecd55ce8adc0962968"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f639f068a060aca34acb37bede773a9c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "1c50cdae9b03e09caebc8b682c75b4f6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "9adb54e08680a715a2d0d43f684bedc1"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "6655adc43b4724d872f07960e28dc440"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "134dca450ed73a2b25db6e5741ee0547"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f365cf9ebc05a8f7351de4b3cccc0d31"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9444c5704c6d4c706f04a36bdf6ed14a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "1e05b1e160758d2d0c5c0cd87932b983"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d84a91ee0f59c3c8b02f794c567202c2"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5d3e86c0984de0b5ae9b590926c5759b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "71e776a1576e3abb905fa529cd0e4cd9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0c33cd3b23c8e00b1807cd0f40217b46"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "655932904384984e6b41dc483b4627c8"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a7ae99d6383b8d515da4c50c87e27972"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "22e87683f65cf18e91041f6f26b5a4dc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "7a3daed006b7b379c3bf3a0c4f70f10d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "20726729e66fe17c0033f887f1dfa8d9"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "be94522474a5a27556a68bc06d896bc6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5037b0e21fd08a634fd4a48976675e7d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "9e395d13b29be69330fe27ae651f4af0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "1fb2a12fef6fa0416e69e254f6795e6e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "94255736ce64f01cf54d837fdf476bc4"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "bdf469e475eaa3ab7cd6d40d3395e979"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "eb2374f66aea629b7de577b16d321f15"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "310b103a959916fc84ea149cd3167d5e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "22b2b5da6b8e57a39d3e38f7872c0188"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "254d9373d231d92609672bdd12fa3dea"
  },
  {
    "url": "tag/git/index.html",
    "revision": "de8f81834c13e2e6daf53d111a2ff71b"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "945aa905074e9b5aa945571e1c14f81e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e0d6277e2a767f65d6319995b616983e"
  },
  {
    "url": "tag/index.html",
    "revision": "4020c91e90c16b3f5be05715b0995dbe"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "66a86f3f2fae393a0d1382042050ce92"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f9a235071c9389d298d55fd63c09b11d"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "74e3c6a8b1702bcab0aafceacdbb0a19"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "af2ea69f08c90c117e2fa0826f42db07"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "76ccaf4566921a0723aaee6729dcb811"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f42b528d7840c3579f34ea56d3eeaf65"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "578945ba9bd67387eb15ce8886d9c4a0"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c4304747054cc4ca1afd25763ab27eac"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "d1a0cc7116c18fb10db1f91ae7194850"
  },
  {
    "url": "tag/json/index.html",
    "revision": "24617ecab504f457f273603b4eb5ac02"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "36d552671cef218b3f94e4df0c5c74c7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "00653a702eb9f7a204f18fe46b15ded8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "04ee939770c60f5d5b19e488ecdfd93c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ea85649108e9e926f86a95e7ae0c75f3"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0f50baab313ca4d4c301b05574cfa78c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cc5c7daba870db21250f4c880cb96064"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "cfc0541c3ba51f21cd1b8d1a3b9a3508"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "dbc0f65862dd571ead581d6695c7a7e7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8c0897bfab4af33510ced28b85ab4a36"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e4a025a743ce0b06fe9c7832b95f77ba"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "231d07438e8bd0fff4b6b7f473e8182b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "5e7db4edf15e89af7ceb327594229b4e"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "79f65f6850916b7e22af639d74d89b4d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "a897e7bd9d833fb3fdf71bff3c0a99b9"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e32ba967fa83a434dca729d974fc76bc"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "2af135d0238302584c4868394aa107ec"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "86c8cabad38b33258cc480ca3e2a383c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "723e6192678b5d0961e7af8028313d61"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "f583d3cf43a635292a900550962e123c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "7a8bbc6a4059235ae5fe32cb50cc72e1"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f82d86fe9d2958f92319511f4796c90b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "26a058c0fe5c593b1653e0bf06511c48"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "4355639f74c89532cdf2538b4902d3c4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "de199ea892ff062a40e9bacd6ffdc9d4"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f9ed4c66530c64a6265f9f46c8a43c90"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "45bf8f410f256e9597154bba4059de96"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "41fac25ee4c21a1a11516ea65a175bf7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c644fbc0b992685f7f8aaa2bfec97d9d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e2acd8e97aaeee8056cf2702cc3d8a49"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "e04484e15e6507f8ad0df2b7e44db1b0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fa59063eb059f4ec5695b7263ab1aaff"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "dc30574cb804d13f1c94e37ce5296f47"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d12ca72971b68caa62a2e3dc05eab475"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "16ebb822270af9d29aa9a0962e184421"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "80c2f72ce9abf56e4b27a93a0b66e4f2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0bdfcaf52007e5795c795d99343ad7ff"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f9eeb2903b45dc6223a2ff31ef8633a0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b601bb114f0d23602e726c0a095fc7c4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8e453a86a3ba14b13b6b28c4bd1932df"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "d215c1747725d4e25b8b3d909a28a778"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a4f42942f3124add80dec9a976b71909"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ad2a25c4e19ec172f4bc8f50d81b33f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "559fb0d46cdebba9e4ee07be0ff465b7"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7f2a8dfc04b28d713735bb672c37ab82"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ff579d742a0e38ec838957b055773e72"
  },
  {
    "url": "tools/html/index.html",
    "revision": "18f4e22c95ea0ff91388074a8e340589"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bee0ebed5b66145ca6f014861b153464"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "00b39e8a81702dbc12bceec8dac8db69"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "52bc77e33d3f1f5663e294bb7a08f799"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a3ee51becf48c9b47fdd0d0c2f9a5ef2"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fac19d92734818323833c0989ef210bc"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "de824e86d1fc5027367f9caf1e37451c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9eacc9987ade6656607ad5854d1fa8b8"
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
