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
    "revision": "2ca83a61215e5683704f5ed752680909"
  },
  {
    "url": "about/app/index.html",
    "revision": "73291125fca9b24f8d4a3bfe3f1d1128"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "43060f47dd403d62e64e4f0cd48071b1"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4c0a597d19ba48323cb8bc97508897c8"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6f050a1f437d999f75da71292ee23857"
  },
  {
    "url": "about/index/index.html",
    "revision": "e4b5ffce2c4fc8bfb113791168b9aa81"
  },
  {
    "url": "ai/index.html",
    "revision": "2e8037c6ab975043cd6bd65df10cc5af"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c2cb7bd7b6b1d625be129529cd9d33dc"
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
    "url": "assets/js/1.5964dece.js",
    "revision": "48529d0751226abf8bdf8838eb0a1898"
  },
  {
    "url": "assets/js/10.fd02a121.js",
    "revision": "ae3b3e287b03cfb5ac87fdebc4238801"
  },
  {
    "url": "assets/js/100.e254f05d.js",
    "revision": "29a2040f2376ca11f1be5cf7e1e8a7aa"
  },
  {
    "url": "assets/js/101.4a82d8ee.js",
    "revision": "8d474c0b2300106240022348b9e98095"
  },
  {
    "url": "assets/js/102.7224ae93.js",
    "revision": "f60dbde891531512c2d6d5c72c27e71c"
  },
  {
    "url": "assets/js/103.9d5dd9ce.js",
    "revision": "bacc4339f6c9c2c4c31c74fc899fc85f"
  },
  {
    "url": "assets/js/104.4830f36a.js",
    "revision": "c61e51764644fd888d80a6c6c74b3b53"
  },
  {
    "url": "assets/js/105.6c2e5fa8.js",
    "revision": "63f53c1e4eac0de3b14e1636ea5a5abc"
  },
  {
    "url": "assets/js/106.5acbecf7.js",
    "revision": "fbca5cfc3625728e36df1962d23e6abd"
  },
  {
    "url": "assets/js/107.4d3e9d9f.js",
    "revision": "126c3cd74ae715d8004454b3eb292a86"
  },
  {
    "url": "assets/js/108.ea085aeb.js",
    "revision": "110894688a3af48beb0d29ddf2a8f279"
  },
  {
    "url": "assets/js/109.2b6f4803.js",
    "revision": "c35e407c59945a101fb003ecd71ddf55"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.53413a4a.js",
    "revision": "4a796b7ea649046bb994ceb507a2fc09"
  },
  {
    "url": "assets/js/111.f574c49c.js",
    "revision": "441bf7694ce4e0e0dec3ed941eb78bac"
  },
  {
    "url": "assets/js/112.0c8df473.js",
    "revision": "57240957bc6e9b13cebe5f451efea085"
  },
  {
    "url": "assets/js/113.f8a2252c.js",
    "revision": "b1d2f1197e651023b4bb068c8480667d"
  },
  {
    "url": "assets/js/114.4637035b.js",
    "revision": "6253744694140f31fef14a54f53e10c2"
  },
  {
    "url": "assets/js/115.2e9ac89d.js",
    "revision": "1f4a224d43170f9c2abc6dfd6eafc2fd"
  },
  {
    "url": "assets/js/116.90559de7.js",
    "revision": "34be4580b8c7570393f3ce73443359f7"
  },
  {
    "url": "assets/js/117.96c165ee.js",
    "revision": "4f38c7a33ef0fc3879e0f5b9a1f59130"
  },
  {
    "url": "assets/js/118.1d557f87.js",
    "revision": "4381bafa97b7cbe96459543e6ecf0620"
  },
  {
    "url": "assets/js/119.98675e73.js",
    "revision": "ea192330fcf03e87f425b099f0b75825"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.d96bbe4e.js",
    "revision": "9df3383e71d8c35c786f9f19bcc767da"
  },
  {
    "url": "assets/js/121.5a2b3e64.js",
    "revision": "05cd31c58372464602b33b7150d28396"
  },
  {
    "url": "assets/js/122.a51fa876.js",
    "revision": "cb9038859259f3e419419b793f8f0398"
  },
  {
    "url": "assets/js/123.2b63c89f.js",
    "revision": "02c8869a015674551e8513693cee4f55"
  },
  {
    "url": "assets/js/124.09a2510b.js",
    "revision": "0aed7242f1b72d8925249f64795c2623"
  },
  {
    "url": "assets/js/125.057f81e2.js",
    "revision": "a4d338fb012ef26855e7d138e27aefff"
  },
  {
    "url": "assets/js/126.8ea88f2b.js",
    "revision": "7fb3d30d6be11db3fe991b5ee3d3eb4f"
  },
  {
    "url": "assets/js/127.f28c32a3.js",
    "revision": "14e274ce2b81f769086093288d6a1593"
  },
  {
    "url": "assets/js/128.8e1fd120.js",
    "revision": "746bfaa1856302a6d9d0453aefeda66e"
  },
  {
    "url": "assets/js/129.466b56b7.js",
    "revision": "2f097520d06f007376f3aceecf567791"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.7c5f3302.js",
    "revision": "5e85e9369f14d8522fae1093d6e0452c"
  },
  {
    "url": "assets/js/131.4264ee73.js",
    "revision": "97f97028ec03c304cd2f21696b503c60"
  },
  {
    "url": "assets/js/132.57ff3f2d.js",
    "revision": "878a38bc64496a8c6cafa4c9c1221dc5"
  },
  {
    "url": "assets/js/133.33ea9f13.js",
    "revision": "25aeefd505448374aa2995f9722d991b"
  },
  {
    "url": "assets/js/134.9b235d25.js",
    "revision": "0ba594ad1a1e9fcb9d99fb628542d0e1"
  },
  {
    "url": "assets/js/135.d205d54d.js",
    "revision": "0bdb7cfdad6eec7215cac24f66d6f70e"
  },
  {
    "url": "assets/js/136.d730a0a0.js",
    "revision": "d93b29094962cb4a1f697c62abf8fb77"
  },
  {
    "url": "assets/js/137.1641d7d4.js",
    "revision": "36a52e88314aee882e58c8331a291207"
  },
  {
    "url": "assets/js/138.faedd824.js",
    "revision": "6e3f8878626d3085aebd4cea5fa0c602"
  },
  {
    "url": "assets/js/139.e71790a5.js",
    "revision": "5b962e56603a20544b481f97655af1dd"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.3f9a6c95.js",
    "revision": "ee06707013259f8a34f7a24aafafcb6b"
  },
  {
    "url": "assets/js/141.c1b856bb.js",
    "revision": "e25ad51883390d6936eb57b64bb9589c"
  },
  {
    "url": "assets/js/142.1e56badb.js",
    "revision": "3c7b628034c4434552c222d0ff0d579b"
  },
  {
    "url": "assets/js/143.6a497dc0.js",
    "revision": "e74c24d1428e1660e7856e8396980c6e"
  },
  {
    "url": "assets/js/144.c6360c6a.js",
    "revision": "1d209021e31c09b463cb574fc7fb504c"
  },
  {
    "url": "assets/js/145.d68c2bbd.js",
    "revision": "71c6789b75aa43f9b1b16938e5e0e98e"
  },
  {
    "url": "assets/js/146.481357c1.js",
    "revision": "8cba1d47841ac5fb73fe5bf301fb69ec"
  },
  {
    "url": "assets/js/147.faeaf3f8.js",
    "revision": "910e2e0cfb7122a3f3ab062ec809f86f"
  },
  {
    "url": "assets/js/148.64835abb.js",
    "revision": "20f54bd01152e9d2060be55599a77d94"
  },
  {
    "url": "assets/js/149.0a837536.js",
    "revision": "a72e8d8531f8984a7c9e115b55cd4763"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.1ea953e7.js",
    "revision": "9aca0c0bbdb0e4244f5058df3831594a"
  },
  {
    "url": "assets/js/151.622cb4ae.js",
    "revision": "0d3af58f84557e7260114c4994fb1e3d"
  },
  {
    "url": "assets/js/152.9877a24f.js",
    "revision": "69e02cc2be9799853aad8e9f3a510157"
  },
  {
    "url": "assets/js/153.fae1442f.js",
    "revision": "a60578ad1696f5b7df0037142ca7293d"
  },
  {
    "url": "assets/js/154.f386e2b1.js",
    "revision": "8ce4dee901417f54b404fd2396c4356c"
  },
  {
    "url": "assets/js/155.bcb62b15.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.c77395c0.js",
    "revision": "d9f1df9b10ae4c91a6fedce98d045173"
  },
  {
    "url": "assets/js/157.0c4fb88f.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.cb20ac76.js",
    "revision": "77ceb8aaa89dda1407cc2b0a804a2f9d"
  },
  {
    "url": "assets/js/159.4c86f82c.js",
    "revision": "c0279eea803f368405be35eb2cfa3b23"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.3444b74b.js",
    "revision": "bc452f46c9379deda9c597d0ad459035"
  },
  {
    "url": "assets/js/161.139ac97f.js",
    "revision": "86cefb295bddc5c057f713e83fe1ed56"
  },
  {
    "url": "assets/js/162.0ac44bc5.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.e1eb3528.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.2b9da000.js",
    "revision": "8a60880db27c2e8202b3573fe00b7830"
  },
  {
    "url": "assets/js/165.1ec0b843.js",
    "revision": "611213ce7f3f58e1ae6f1e3f18c74913"
  },
  {
    "url": "assets/js/166.f94586ab.js",
    "revision": "b6d4d398b6b0c6bef0a5487abf1e6843"
  },
  {
    "url": "assets/js/167.0656bc44.js",
    "revision": "ae678f8206d895c199fcf930a902f99b"
  },
  {
    "url": "assets/js/168.cf8865c5.js",
    "revision": "a051910cd1a8c91ee316a223b3e3d1ab"
  },
  {
    "url": "assets/js/169.6d5e6fcf.js",
    "revision": "779cd43c7d2efd6c7b65e0912e7b4698"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.4b3a9b35.js",
    "revision": "3ea220df9534e0cd571ddbd025523714"
  },
  {
    "url": "assets/js/171.ee1fb0f7.js",
    "revision": "7ae0ba2c95e7180d10b8572f5142dcd6"
  },
  {
    "url": "assets/js/172.8f0d5150.js",
    "revision": "3ddc43e11f0a8721b912805ef0be5688"
  },
  {
    "url": "assets/js/173.a1075b7e.js",
    "revision": "cc7cb7dccf45f8b599d244719ff9fac5"
  },
  {
    "url": "assets/js/174.27f64d4d.js",
    "revision": "3145569717f0fa1eb5b79d66621df044"
  },
  {
    "url": "assets/js/175.00c0897c.js",
    "revision": "5c1c1f6d37fa445d028b0da36d84532f"
  },
  {
    "url": "assets/js/176.6c4445e1.js",
    "revision": "2e9b82d6adbe3fa8efc2fb8ac4da887e"
  },
  {
    "url": "assets/js/177.d00a9a7a.js",
    "revision": "1d5eff6c59ac848eb673a07b298100a3"
  },
  {
    "url": "assets/js/178.6d7075fc.js",
    "revision": "b8d8d442ed664567d7e806028b8336b3"
  },
  {
    "url": "assets/js/179.2f68b977.js",
    "revision": "1ac320dd4e2f6f7e0a647d712444be52"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.49dd9e1a.js",
    "revision": "f3202a948a141cc8367a76c7832df313"
  },
  {
    "url": "assets/js/181.6ad983c7.js",
    "revision": "204dabf312a42a00bb1c6e820402ec8a"
  },
  {
    "url": "assets/js/182.324f160a.js",
    "revision": "4bc6750ce9ab39d1f814923f1ec09f66"
  },
  {
    "url": "assets/js/183.513b7282.js",
    "revision": "eb6055ac4b9932c3ecb146152486d394"
  },
  {
    "url": "assets/js/184.d9c55be1.js",
    "revision": "4b6e6926ec5407db52314fc9bec6407e"
  },
  {
    "url": "assets/js/185.ec48ebc9.js",
    "revision": "919c485f7d5f7d02d715e501adfcd0a5"
  },
  {
    "url": "assets/js/186.94101791.js",
    "revision": "dc8deb7c68e9704dd22652b52b878f15"
  },
  {
    "url": "assets/js/187.47875142.js",
    "revision": "9ab197b4822dbcbe4ef325a9b3e9f149"
  },
  {
    "url": "assets/js/188.e606153b.js",
    "revision": "7b2535065ffbd9dd32e2302f72a8f34d"
  },
  {
    "url": "assets/js/189.085e2c1b.js",
    "revision": "8c415b8df16cf0a3589880f49f7b2e61"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.c5a2646c.js",
    "revision": "cebc57f69bb0a0e4f47d3793f68acbb8"
  },
  {
    "url": "assets/js/191.d392af12.js",
    "revision": "846b0d35fb022780c1c1f1a3bfe2789c"
  },
  {
    "url": "assets/js/192.34e02533.js",
    "revision": "f265c29d08c535b6608290ff00d61fa2"
  },
  {
    "url": "assets/js/193.ede6dddb.js",
    "revision": "c88c77768a026d9095830805816a26a0"
  },
  {
    "url": "assets/js/194.5a0316d3.js",
    "revision": "4309e6443941f47a8058a88e68ebdbdd"
  },
  {
    "url": "assets/js/195.cf415694.js",
    "revision": "cfbf391bc136aee50861de18e8ece504"
  },
  {
    "url": "assets/js/196.eb71a6b1.js",
    "revision": "63f9a7f1a3442257023a5cf97f32d296"
  },
  {
    "url": "assets/js/197.edc470bc.js",
    "revision": "f729c10ecaa5bb2a86041547508b6e1a"
  },
  {
    "url": "assets/js/198.3daa7a33.js",
    "revision": "db2b4f15fe8069b2a46bfec6e4fbffd7"
  },
  {
    "url": "assets/js/199.f66f6359.js",
    "revision": "921793ef1fab2cafcf5e29437188aeb2"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.b44dd5db.js",
    "revision": "bac6ab3fa5361801c1435e5454dd8f1d"
  },
  {
    "url": "assets/js/201.e81a3675.js",
    "revision": "1f253e4cd36c703024194fc344481188"
  },
  {
    "url": "assets/js/202.b23433ca.js",
    "revision": "7dd3e0143a2cf5ee183e2e584030458b"
  },
  {
    "url": "assets/js/203.9b3171db.js",
    "revision": "cac01b326000c469e8e5b34b848d6c1d"
  },
  {
    "url": "assets/js/204.dad2dae6.js",
    "revision": "73063ca01e58df4e4bb8b6c4b5edcfcc"
  },
  {
    "url": "assets/js/205.71bbc21a.js",
    "revision": "64f56db71f5a9213c03345bbe49e415c"
  },
  {
    "url": "assets/js/206.a261e6d6.js",
    "revision": "5e187d012b98f36fecd20f5f99d6def9"
  },
  {
    "url": "assets/js/207.381f7e6f.js",
    "revision": "4840f368f24963c3f6281869a0f1a07d"
  },
  {
    "url": "assets/js/208.c543de8a.js",
    "revision": "d31370a058a87ff10e3f6113f48dadc8"
  },
  {
    "url": "assets/js/209.51b35515.js",
    "revision": "d59d280346668bb3c47517e83a79773e"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.88750827.js",
    "revision": "18d3e0b4aebbc27303fd2d0d67b21593"
  },
  {
    "url": "assets/js/211.c1b1cdd9.js",
    "revision": "c4ebc57cbf216e817c4e49bfabeb41e4"
  },
  {
    "url": "assets/js/212.70302cd0.js",
    "revision": "dbf665835d49753196ef9da549ce523a"
  },
  {
    "url": "assets/js/213.c4744871.js",
    "revision": "585dd99d1f9581bbe1b6acbe4308efce"
  },
  {
    "url": "assets/js/214.47751f70.js",
    "revision": "b25aff1796515e0af69c237f11bf5275"
  },
  {
    "url": "assets/js/215.4e46ba51.js",
    "revision": "195dbc08b412bd14b67265743ec25a8f"
  },
  {
    "url": "assets/js/216.b1f59b51.js",
    "revision": "0325e3f59731e8d0f85c9f7871ca583a"
  },
  {
    "url": "assets/js/217.ce37d4e8.js",
    "revision": "2967e97e0b5c6d315e3e36e614342a7e"
  },
  {
    "url": "assets/js/218.968c6a04.js",
    "revision": "a09c893f946933dade221cb8fcd7da99"
  },
  {
    "url": "assets/js/219.ab5d11d8.js",
    "revision": "3be4635dd6efa814003b3a6f7aaa7f63"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.10a09ed4.js",
    "revision": "7311a40ec6d26095f6ba807008b48c8a"
  },
  {
    "url": "assets/js/221.d666e815.js",
    "revision": "7b57ccc5f32cea9408378229b88b34c3"
  },
  {
    "url": "assets/js/222.e905fbb8.js",
    "revision": "c3bc2b86f6bc2d46aae388f324b41172"
  },
  {
    "url": "assets/js/223.05193cc2.js",
    "revision": "c5d97d332b51af9c445b76c629aef74e"
  },
  {
    "url": "assets/js/224.7f2b988b.js",
    "revision": "3d1137548a5f567144bc7227644d7bdd"
  },
  {
    "url": "assets/js/225.146e9412.js",
    "revision": "a183a6e681d67a398d82fae2712e9bad"
  },
  {
    "url": "assets/js/226.521075ed.js",
    "revision": "70af0cc936776a8e95ff8733290170a1"
  },
  {
    "url": "assets/js/227.ec72a0df.js",
    "revision": "86b70088b85a0bdc4323397a636ced83"
  },
  {
    "url": "assets/js/228.3323ce4e.js",
    "revision": "4f2a201d59e6e56cfef532b4c071c30c"
  },
  {
    "url": "assets/js/229.fd65873f.js",
    "revision": "67f26f1b0fb4901b00e721b06f924b81"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.b5d65a69.js",
    "revision": "3625d68402c036a9f7ba4bc392f4e206"
  },
  {
    "url": "assets/js/231.11fd0e4e.js",
    "revision": "08b2adb66f7d422ea0497c0ec832b056"
  },
  {
    "url": "assets/js/232.d4a48ee4.js",
    "revision": "4d340e359919f91c4bf749709cf2f180"
  },
  {
    "url": "assets/js/233.225f4bc2.js",
    "revision": "30e5c9ea466d381c6860ee9577f8404d"
  },
  {
    "url": "assets/js/234.5d5e911b.js",
    "revision": "82d073f7a379349fa1195d904db285cc"
  },
  {
    "url": "assets/js/235.dddffb24.js",
    "revision": "568b5aa9b18ffcaeb38cf4381ebd0c75"
  },
  {
    "url": "assets/js/236.380d4514.js",
    "revision": "0460e3eb0748a2ef83f9cc2c28f21343"
  },
  {
    "url": "assets/js/237.55ef9efb.js",
    "revision": "2494f08027d63344963685677c977eff"
  },
  {
    "url": "assets/js/238.0a37ba65.js",
    "revision": "2e9b9a4e0ec49116e90ca99f2017abd8"
  },
  {
    "url": "assets/js/239.d2785a7a.js",
    "revision": "7986dce066e5dc638f51cb8db30d9272"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.c10bfe37.js",
    "revision": "c5d4339d5b7a05a0c0ab03e56017a39e"
  },
  {
    "url": "assets/js/241.aff5d15f.js",
    "revision": "2ec7c551183d829c73c0d60738aaba61"
  },
  {
    "url": "assets/js/242.6bdde8f7.js",
    "revision": "ab528ff745895a0dcf64b951b231d086"
  },
  {
    "url": "assets/js/243.bcce4650.js",
    "revision": "d9f2dc2edeed4cc756fbd9c9a6e2d504"
  },
  {
    "url": "assets/js/244.f68ecabf.js",
    "revision": "c03449c257dd2b897052ed4ec1b512a9"
  },
  {
    "url": "assets/js/245.704719af.js",
    "revision": "1c1ff4892675663502c1789fd68edd1f"
  },
  {
    "url": "assets/js/246.7744dceb.js",
    "revision": "a4a03451748700ddf4d3e8c887577430"
  },
  {
    "url": "assets/js/247.77b4db7e.js",
    "revision": "873b35d6fb94a93e028e98c84e3359be"
  },
  {
    "url": "assets/js/248.296aba5e.js",
    "revision": "d1527cf3467162e3d1ef8d0c9d2c1008"
  },
  {
    "url": "assets/js/249.0c97f790.js",
    "revision": "df8af5a9bcae96a2f0ff22c0b556d0de"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.88379879.js",
    "revision": "345fe1cb7c1c62d89ecca34676af0022"
  },
  {
    "url": "assets/js/251.712dffaa.js",
    "revision": "e625ea504a5204a9a9f166fd02e9777e"
  },
  {
    "url": "assets/js/252.89d66d5e.js",
    "revision": "86f299759e619599ae34143628983a61"
  },
  {
    "url": "assets/js/253.3814d673.js",
    "revision": "f9dc8bc8a4936b7acef100ce2669d7bb"
  },
  {
    "url": "assets/js/254.d0920cf5.js",
    "revision": "75790327363992b201065d77f4617db5"
  },
  {
    "url": "assets/js/255.8c22f428.js",
    "revision": "610d829f4e4c6026e7cbe4f6052686e1"
  },
  {
    "url": "assets/js/256.7d3ef119.js",
    "revision": "39fe7840efdc5233d98891d13dc5f551"
  },
  {
    "url": "assets/js/257.7f7212cd.js",
    "revision": "cc16dd4b29dbb59c35d766200b11f472"
  },
  {
    "url": "assets/js/258.04b7b9e4.js",
    "revision": "5095d6a415d03a5fafe268db854ccd02"
  },
  {
    "url": "assets/js/259.5b570f08.js",
    "revision": "261ba2cca71c663f186ae4b9974b3ee4"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.5fe6bf3e.js",
    "revision": "d6b502a9f085137a89bbf225a69dfc0d"
  },
  {
    "url": "assets/js/261.983673c3.js",
    "revision": "5a49aba403c01c649efa7f1f4aabc6ed"
  },
  {
    "url": "assets/js/262.3b2f47e1.js",
    "revision": "797db1951066f2dc3c027482f6970ffe"
  },
  {
    "url": "assets/js/263.a5cb8bce.js",
    "revision": "e125b29d544b4250495c371076b048ac"
  },
  {
    "url": "assets/js/264.834af580.js",
    "revision": "3f49187c824496cd707dd7942a248cc3"
  },
  {
    "url": "assets/js/265.e0cba1c8.js",
    "revision": "1956131580d594cbc82f90d6da3653fb"
  },
  {
    "url": "assets/js/266.746a1eba.js",
    "revision": "77a222083deac0623f4192f44a5c4c34"
  },
  {
    "url": "assets/js/267.8d0b4f23.js",
    "revision": "3d41da33b9a0d6af21ed27e785362693"
  },
  {
    "url": "assets/js/268.47401d9e.js",
    "revision": "29458ce08030600e004f7790ae189c73"
  },
  {
    "url": "assets/js/269.e598686d.js",
    "revision": "1e8e97c9b0d7a1963cb9199177921fe6"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.18db7443.js",
    "revision": "90e83672440df975fee389c669a88aa3"
  },
  {
    "url": "assets/js/271.3bb81787.js",
    "revision": "2e3bee57fa435aeabfdd8a5dc94c051b"
  },
  {
    "url": "assets/js/272.7845c3bb.js",
    "revision": "ee8ca1d04465d836d26bad5528f5449b"
  },
  {
    "url": "assets/js/273.96b432c2.js",
    "revision": "d02c8bc92537bc9b9d2a789d94030ff0"
  },
  {
    "url": "assets/js/274.eac0f61a.js",
    "revision": "52b4e408055269cfea899b9568f822d4"
  },
  {
    "url": "assets/js/275.55b9280e.js",
    "revision": "3419e8803c88addaf694a0a51ae40086"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/29.3f14bee9.js",
    "revision": "6eae4a8b0fa2fb5bbc00e054a913e487"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
  },
  {
    "url": "assets/js/31.4ce2a643.js",
    "revision": "efb66e197a3dbbf041823521cff85bfb"
  },
  {
    "url": "assets/js/32.fa70387b.js",
    "revision": "23cc305443a3e56aa52c08fb298af488"
  },
  {
    "url": "assets/js/33.f8113b4f.js",
    "revision": "a4af639cf5ab52272f5129ca93d664ec"
  },
  {
    "url": "assets/js/34.d2a3d2ff.js",
    "revision": "c843e16b1f81cb784bd8b3847552a791"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.d661a1d4.js",
    "revision": "d7ece8ac2220876dfe52b31c085e85f1"
  },
  {
    "url": "assets/js/37.511e77d4.js",
    "revision": "a601936a06d8493a20e186baf495f1bf"
  },
  {
    "url": "assets/js/38.e7010906.js",
    "revision": "bf9dd04b928f9c64b4889a78f7f68a62"
  },
  {
    "url": "assets/js/39.9f63f8b8.js",
    "revision": "9a2a141d36db837ffe2e596f1a5402c4"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.e1b36b0b.js",
    "revision": "5812f7b7ce165af8c24ebe8f28149ee7"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.d6335a0e.js",
    "revision": "c2e201315dc01d9bb899aa40147b4521"
  },
  {
    "url": "assets/js/43.94a96c73.js",
    "revision": "6a90367bc85cb8affca1fa22db7cf092"
  },
  {
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.f5372cf5.js",
    "revision": "a89c6b2671d6c3a7c5b7a2e1df7d4fe8"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.8808044c.js",
    "revision": "83d7b49dacb0bf461d4a69f4eeb8daaf"
  },
  {
    "url": "assets/js/48.a2e61fc0.js",
    "revision": "898a49ca734b3a33ee9f1112e4681b48"
  },
  {
    "url": "assets/js/49.436504e0.js",
    "revision": "180aaa90e54cb8c1a29bd2d98b935d27"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.ecee4d97.js",
    "revision": "f38f60924f6e019351c0cc0b36c6c988"
  },
  {
    "url": "assets/js/51.17b67b59.js",
    "revision": "1f0104054fad0dda412d6b734d29977f"
  },
  {
    "url": "assets/js/52.fb1f4527.js",
    "revision": "8d1fd57f884bb0bd23a99ccce966e29d"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.eb6298eb.js",
    "revision": "02b5ba8409d90c15f01d836d19d341a8"
  },
  {
    "url": "assets/js/55.84ff7f52.js",
    "revision": "0181fbc302f6955e9b9bf75ec6cd71ef"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.82e26de0.js",
    "revision": "8916be9c99e83adc3eff4d8fbb5bd788"
  },
  {
    "url": "assets/js/58.07a61b26.js",
    "revision": "5755efe798230aec0cbe93c6ed502081"
  },
  {
    "url": "assets/js/59.936f4c2e.js",
    "revision": "ca012df874eeb1a5506cf9e1a4673db3"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.2f36c42e.js",
    "revision": "01404cca5be0abacc2a5095ea20146ec"
  },
  {
    "url": "assets/js/61.bae0851f.js",
    "revision": "edc6dbc9e894c9a309d7664526ab15b2"
  },
  {
    "url": "assets/js/62.65001b7c.js",
    "revision": "87cbb99930453617343df2a63e53bf29"
  },
  {
    "url": "assets/js/63.364ce22a.js",
    "revision": "b46fab7e24bf8d08e70260c7db75a510"
  },
  {
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
  },
  {
    "url": "assets/js/65.14f8de47.js",
    "revision": "a1e9bc10be1cbe3eaded1ab757062e7f"
  },
  {
    "url": "assets/js/66.7ac6444f.js",
    "revision": "d72d08b925c7abd1d881bfb7184e89ca"
  },
  {
    "url": "assets/js/67.064cf1e1.js",
    "revision": "1faa284ba538c45cf51866e675431c20"
  },
  {
    "url": "assets/js/68.92904f15.js",
    "revision": "9ae47dc5c77be9dc06f5ef17ce4ee8c8"
  },
  {
    "url": "assets/js/69.09c48e83.js",
    "revision": "108eeed855305b649b54b2b2862ff198"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.af07dd2f.js",
    "revision": "581ebc91f7d83d3c5a6883c700e5f1e3"
  },
  {
    "url": "assets/js/71.49f88104.js",
    "revision": "3935f9f73414c67eea31caf457930289"
  },
  {
    "url": "assets/js/72.b759eef2.js",
    "revision": "c498d1eaa6480b70f4655981b059f1c7"
  },
  {
    "url": "assets/js/73.0581cc53.js",
    "revision": "43ebc1eabc7cea00292f3b6419655e46"
  },
  {
    "url": "assets/js/74.aff0e133.js",
    "revision": "8f9dc8cd96b58025c93242ae8bc45a4f"
  },
  {
    "url": "assets/js/75.c4530927.js",
    "revision": "4475ad73691f99daa60857994b45a607"
  },
  {
    "url": "assets/js/76.866192fc.js",
    "revision": "05efa6e85fbe3cf08fb060f2c8187880"
  },
  {
    "url": "assets/js/77.ce48375b.js",
    "revision": "c21c4abe06152fa10c1f3544ce45ca12"
  },
  {
    "url": "assets/js/78.ba26b6ef.js",
    "revision": "78b71fdcbe6a9e0e300c04b923420f65"
  },
  {
    "url": "assets/js/79.03d8460b.js",
    "revision": "62f0335e9d97a5092268161b86f209f5"
  },
  {
    "url": "assets/js/8.321f929e.js",
    "revision": "8089ae2cb60c42b9376220351e563b77"
  },
  {
    "url": "assets/js/80.e3564d5a.js",
    "revision": "18531106f827c939d28f946ee4864f4d"
  },
  {
    "url": "assets/js/81.9fc9a5d5.js",
    "revision": "6d4b758254e28687bc3ba09329bfda25"
  },
  {
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
  },
  {
    "url": "assets/js/83.fba68469.js",
    "revision": "eeb3cc8108da18a904ecc67bb2bed00c"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.275ce1ec.js",
    "revision": "0920b9d182472161cdd292ade591e8e8"
  },
  {
    "url": "assets/js/86.a41f8c65.js",
    "revision": "a25da6635d56577aba0c9c3e06b0e856"
  },
  {
    "url": "assets/js/87.4c83c6af.js",
    "revision": "e3501006d472233ab33408da153c9011"
  },
  {
    "url": "assets/js/88.7ee006b0.js",
    "revision": "d1bd602edb1489fede7d8195ccd152c4"
  },
  {
    "url": "assets/js/89.10ff9007.js",
    "revision": "dc37dfe83cb6a3591f539afb969bd944"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.8fe07dac.js",
    "revision": "b8e1bca7ef49eace43ac9acc30e6c792"
  },
  {
    "url": "assets/js/91.810193bc.js",
    "revision": "e255732e4a3b810f8f627f15a0b0f4af"
  },
  {
    "url": "assets/js/92.b4e5b4c3.js",
    "revision": "4f50c70ef8bef0681d87ff0f5ec74ae2"
  },
  {
    "url": "assets/js/93.f7472136.js",
    "revision": "4d3e35e077338bde837a233ad4e65086"
  },
  {
    "url": "assets/js/94.34a863f1.js",
    "revision": "6fda567516c7935f6943c8ca08e9bdee"
  },
  {
    "url": "assets/js/95.5e003bbe.js",
    "revision": "bde5a20ccef594c6aef6ee05f43e62ae"
  },
  {
    "url": "assets/js/96.7f2ef601.js",
    "revision": "2f9d948652925bd0293af1de0d602c18"
  },
  {
    "url": "assets/js/97.792a46ce.js",
    "revision": "91f2e9404f39d8ec7c8b95474b137cc4"
  },
  {
    "url": "assets/js/98.75cfa658.js",
    "revision": "bd345640bbcf640e6194a93ada0c280b"
  },
  {
    "url": "assets/js/99.3876449f.js",
    "revision": "3a8989c1430f220e5a273f52bad862df"
  },
  {
    "url": "assets/js/app.b5fe0ceb.js",
    "revision": "1716e5c37c1eaff39ccb752eae3e7aca"
  },
  {
    "url": "assets/js/vendors~flowchart.cd0cfe9a.js",
    "revision": "b3af5997e713cab07832a64b4cd1f3ae"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "8b21b6943aaddd56ca172a4311fd64f9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "041f9b3d8fcb6ab293c9a619f1ab9acc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "cc1eace3c8c13b5c052f1687e7ce6d37"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "967ca71690212984ec4dd9d38b821ea4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5a66419c18bdd605034093b6da9e1f68"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c03820923ad7a6f473b1177898824ab7"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d3b07944f46bef70c10a1117d04cac0c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "85e05eeeb881eef1072af023d7d8273f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "40f5e4ed11b6e0d9cdba309c20746e7b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3339166e7ca83060cd7ce9416b98b608"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3be3544aa385446e412099332bec4e46"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "93604bca3c406bc15489eb6dbb5128b2"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "67d36dfb74100fd365dbb185f25de160"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "4f28d41da3c79ed01f13f33ef97c026b"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "b23ca28b4c98307e55b5ab559d9c5f25"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "0bacb725d7c8daebcad71066b3d147e8"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c4254b9ed0dc806ece1ce071de659b13"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "ed73fc054502fb23b7b349147af432bb"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "12ebcbc5c44e343e6aef9227e5226129"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "882d492923937bf219bdc4838453b39a"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "24fd176b28e4a44fb7782866c3926929"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "ae5477498f403a6708271e35559e45d0"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "89b87eaf1580b3b772aac69cd700bf82"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "860d8d00cec1e1e0000ca871702adecb"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ffcf64d609b46e746d0ce90fa730dbf5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "dfc16586654a775fb802fc17e66192e6"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "0f33e1c84339c6a5a8647b9fc1690449"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "25a11d1513482ce975db7b955cc7b9e6"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "7210613c1e306c0cfb44bb805841e7bb"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "90b485a012281328ecdb6f108fc6dd41"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a35fe92d55e96ec159a2d7dac528c2a9"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "3ef8692f528ad011f0636dc0a6037f76"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d9aa01ad2b13b14a519bfcfe5f092940"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "fcd3667df6a2f627aa5070fac5940765"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "2fb59b40378eca2db1e26a6a839d3cff"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d18035f11fe70a43be3a43196db58104"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "8b3f642ed0eaee9b535d1820d3e3ca5b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "52279b11c3bcbc53ebd0cf752e269f54"
  },
  {
    "url": "basis/index/index.html",
    "revision": "52c50f3da3b63e8e03110e8160602d83"
  },
  {
    "url": "basis/os/index.html",
    "revision": "495d941b91a8714bdcd20ef2b3540d6e"
  },
  {
    "url": "book/index.html",
    "revision": "f92121073dad6208f494e83c0eb36436"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "db21fa47e14bf0f654a2b7d2a6d7f48e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4e96e5bad02f1fdbad8ff148cf020fae"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b546b83401ec5f2423dd220acca94446"
  },
  {
    "url": "c/audio/index.html",
    "revision": "f4249b067fa7c1e20518fe7d6ebbda43"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "f58510007ce254937059b5eddef2da09"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "bc5e512b8068e635edcface852751ba0"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "44508440453b0a76d6a8d810152179a5"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "fc4394583a9ef7d547ce5760bb6aa2bc"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ed52611dca3db5c966ec24b0cb32fd97"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "0e3ef641e94ddd12c339bd5347fd2f5d"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "d4e5d3771c88d4b8fc54721972b6c8fd"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5914718699ba02d9cd0f51c33a31c5e9"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "cae35bab1dcf545bd5fef5d94bf4139e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b69b1b8cc4efe908799f098b31fc6376"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "122f7f7a42fd5a2fe9ca068cfb767aae"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "fe8b5f1db3615b40ea5db2ff061f2352"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "1220cbc215dccb2b155efd701e961b2d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "4639d64d356e7f659a97d42693955e7b"
  },
  {
    "url": "c/program/index.html",
    "revision": "f002299d0a26b007c87206e9adb5cb8f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "c57b4ca2e6f058b0c8a47480510912f7"
  },
  {
    "url": "categories/index.html",
    "revision": "854ec225abbee5a38f168aca2ac7a1cc"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "c1cb747a81cc50f47fc52761fe2c74c3"
  },
  {
    "url": "figma/index.html",
    "revision": "8e95cc7d5c7f0660e70a92dc96bea00d"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "2bd28ae4c6d103facd683cc9b5d436bf"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "8c823c412a43ed4972a8d55daccc088c"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "cf1792f357af074a7cb1c1f799ca37e2"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "febfc25a02d6c105099b45c2b333c574"
  },
  {
    "url": "flutter/index.html",
    "revision": "612821f0644fb497573f0a2eaebc98aa"
  },
  {
    "url": "flutter/point.html",
    "revision": "d756b6d3820613a7932bb0fa9a27f4ff"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "093688413d4f564a748548ff94b7e244"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b7102ef686242ec997014b0dca322acf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1c7bab8041b577e4087f3b5a57d38592"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fbe0808295421463fc28cbbfdfded4e8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "950e781fd85811c5636509516a07d4c5"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "5ba8e6b049111b51d2d202675a4c9537"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e554d823afb32ebba4406aa900e01516"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6a61810861e0542d69dea885a4b658b1"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "189be7d69e12117368bdb7305c2d4109"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "04e01ef81e771ca05c32c34dee679dd3"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "eeb4d25690a1bbe6a87c3b0ade38ef3b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "ed22b3b064f551bb5d6a9cf65b88ca13"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fa767147a98c68b0846df13b54aa0d1e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "988dc9d347c5e5ceacb0050633cd2a19"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f0e25e1e638bb9db7174506bc09723c0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "73aba24db8a33454c29478d501b42ec6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a7bd951d7abbd076995634e1805652e2"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "b352327571ef2c22d75494ab35c6ad10"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "553de606822bb2b8a9cb50b775a50f6e"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "abb8d5b982a4e81435e0d22e951dc7ef"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c775143f48e469d4674aba92568845a0"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "65707af5d55d2ed638f872a71f6d0518"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "09239e37f4fdc213051ac588e2791f50"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "bb955b41a45d4e6a99f158315e10318f"
  },
  {
    "url": "haskell/index.html",
    "revision": "f63b423e1b56fad11df50410fcc47511"
  },
  {
    "url": "index.html",
    "revision": "553c0d0a250f0964e3f0ff1efd0cad0d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "286e10a4448e54a05e0ef9f757d50f9f"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ee9a88f6ed5d3819d6c36fc25bc7744f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "6872f25ddaf3333360fe34a348b5efd2"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "3f7af9d43e7d4766374ea5a4bb5a2ca1"
  },
  {
    "url": "python/index.html",
    "revision": "7aeb9a67472646391c5267d116744094"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "aa48bcf5f0a361d0467c25f8ad8d1c9a"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "2d5a3517bc2640e5e13411561b1b4481"
  },
  {
    "url": "python/python-file.html",
    "revision": "47b86485e0457fb2ed036d171e858283"
  },
  {
    "url": "python/python-function.html",
    "revision": "8824e5b4fdfad6167a9c47707a83f9a1"
  },
  {
    "url": "python/python-generator.html",
    "revision": "0162616114c53d0b8f1518956da3a4aa"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "d4b13514c8940baade5d9a83ea654f9c"
  },
  {
    "url": "python/python-module.html",
    "revision": "859ae93cba2511c1f78d53609cc442a2"
  },
  {
    "url": "python/python-string.html",
    "revision": "ed2c6411f1c1687ea0762e3c08114588"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "e14aa4f5c872186fb4756d38e817ad17"
  },
  {
    "url": "read/index.html",
    "revision": "df83e83f0e36ebc59e1b2fdc63ddbe04"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "0ca7ca28ab6398f185f546af6d7f7f95"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c4a75b9716eebe1840e5e47941055e4e"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "81a0a5b25ec46dc60ca0617a001b2bc0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "7c8f29a4209e98ca960ef0acd85cad3e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "8a73dd1fdbfad90aba38b7c83be0f6d2"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b3c3d4f48f7366d454c94f9aff737eb7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "41d892f2b4c770653cacec98c865f305"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c2de262efadb78e25931698d6dc580af"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "863bbf58e5246a0e40a5279ddebd58d3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "11562d312d05a5ef68bc068d36f1de7b"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "5b9429309b513656314eefec6c9f2b5f"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "88c190922416f9e818a12be3fcde0c3f"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "2728d58d190fd4ff7910e1c0cb4fcf39"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "e83b351ba915e6a4497c9b7848ec0588"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a3a9916ebcf8f0fa095e15208a0d136c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "4db3c7cb8a8600a69371fc3341f632ac"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ff8344deb6658af215e30864bd5ad642"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3a991e0a995802f92e4e30506f51208b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "651e0f6f1d55d78e1c7d5021d8fc946f"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0d9e1e04fbea769a5ad3d9dd28040790"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "dff617ba7decb2933524eec4c4c41c68"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "0e84cadd5ef677183be728c7be0b4549"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5151b9b089592803f34fc8acbc5f5831"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f1e8246641d58fcded2905f4e941bdc9"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "103b7cac38a1deaaa606b776231ddd69"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "08dadb28aea47bd085be736cc7068e49"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "34552cb7f87baff1f225ed92fb9e8739"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "05a676ad237fb949828a65a74fa6e900"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b26751b9398b6b213edd437e803deb0b"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "6ffe8e35f8025470e07dc4466c639c70"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "424a6a81aad34cdf750515a01b8ac1e3"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "ecd7a6cf125679a815e4dda2da0293e4"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "894a60ac0002b8a94ff9f4489bb74c44"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "3933926b40333e1d51c2d7ab974a25aa"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "807a67d0eb3be6169b11d527cacf9170"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "bed5cf41c02ef12bc48d83b8b82ab513"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "8d801e4202ca9d339aa6ef2a6ab45085"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "255a96835c2ca7eb3eb937b41f365848"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b53995e8b5b6a59ef3d17c820433ea61"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "6873a443eac85e62fd02f72daaad515a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "e841b40b5aabd0b60481ed99e090c94d"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "fece3985f992ded4e3f61fb036e55a2f"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "3f9a65d713ea8121fc73a6fa5c09606b"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "734a6c9ff83c303760d0617c41fb7c64"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "93a952a736b0d9e8e43e7aeec8e02a06"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "dfb2a5e901bbacf299fcda719166f340"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b94f0a28a8d479101ed31946299de92b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "cf776866edb11b402735cc6b5863a313"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "bdeeaab8bb164fb7c11721f66610fcb6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "ca653f157357ec6cb8553ba02d36a867"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f02ab03182e46f99ba7343787c12c430"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "ef17d34ec990e985ed8e113b3b716bc7"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "1c4952ea24ea71cb5ce9bc146e645bb3"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "8a19e3c35dc3f7ad216eefed182ace9c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "a44aca94944fe61f7fdc91c7e3213563"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d28ea7006a7914c37de06dc73a315e69"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "14aa3b895f727f69942d9298042f8e35"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0b8c6ee78f28b15f9878dbf954813829"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "0f9cf988cb3c7e2f9d908f1b5dff458a"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "10a042b60c0da0a0154f52177cc8e1db"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "cf241443dfdb01ad2eb902584865255a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "bde317ca2d4168024f42e16df416136d"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "d2bbd784e4c44f9a4eca78ddb75d87db"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "dd810dc43155f3a333d4688e25ad622d"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "6abb0359fad5358118d0b43db0ab9a5c"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f5afafbe954d2f37f8781ab8a85ab25b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "7bd266573394016b1018aee579ea9ad2"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "426a81c983393a4a06a6335aa614e314"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "675380e6bbe9ed2be06a9da4023a6d4f"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1edcb8129451f73dad1d963768a79128"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7bd69ce1a36f73b45a6c5c6b94b15248"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "68f5f210ca4439bda132c71d1c817d60"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "663c11065f42edbf11b17f4849bf645a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4d2865ebd908146f3994ec43c3061266"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "5e47b7069f330f7e599ff80b90baea3f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "3ee4e9c28928a33552089507a757f691"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e599723fc16059441e4ad64715a2cb38"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "7250d5acd59c54d4a8970946c3476990"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e97250e893cd13f1ec1f77bfbfc7b0fb"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9e7da16dfe11c0ad45f7a6c70efbf8c0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "ad5dd90c0e37360c4de8b806eee82f2f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6b507ee890c16007a367e00db5e0c736"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "92e4c6617db0c97f60b3382df13159c8"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d5218dd8e5204899e92921357ff81836"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e6d1b6b9527d2811153b2c5ac57641a4"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "4a26bf649d6874008cc64eb8a6e4c2cd"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "86595a47d9f87ec7cbfe5072d8e46532"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c96cd4c67796d679e8b587559bf01e59"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f16e02dd96d1ef3ac83b0664be2e7679"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "76375b712fdc5898cb68d259ee011ecb"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "2d4914253329e0e76d6b4a19d2c7aaaa"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "3e931e03caea1aac326f2d961b27063a"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "93830bdb6eba4faa225dd0c5dd2101bd"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "89cd3437bc0980b2e8431a93f558ebca"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "ef335bd79855861b251123af22c55472"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "540729bf438c928d403e4a0f5a933338"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b6cd80897c1fb6fc5baa189d37d0f8af"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b1dad9d314f51f6b3e18f10110ae9251"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c36dee7af464bb80e530ae32cad6a0c0"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "481679aa3ad4e16d51bd671349e70f3b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "cc9983dd9af3b1d6de24b2f9dbbd032b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2e139239b98c2335d70baadb02e97c2b"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "16c30d785b8341730558668b35b92452"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "ab5d2d2670d29c581d6e99e5de77a142"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "10bbed8e6e53b3f7e86f744bad61392b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "2302759ef2596e992f6606482a24284e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e506c7ad7f6d3f0078a64f5ca657f990"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "ef6549d1d5e67c5a2f5708fb1a12df52"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "c676300d570926b6b9ac18b05ff8852b"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "0bcfccdf7c4ebf346eccd7a27bf033c6"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "a5f70d55fb0e961246dad0778c9a013d"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "40d0c366527779f5554450b48553f5d7"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "98ff1e183e42fc891754accc05d66c1c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7444d7b0eab1e3fd365f3bd75c0f69ca"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c24b6ee4ed522802f2c001e9bf9002d6"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5f9ab87d599f7e7d8e0851c2d14924d4"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "95dd7faf77d67855301d6df12404a944"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e388e1409a39d6ea92598e508e3b9c0b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "895441c392fc946c21caf073ad6ecbf8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7f05871c2e8a5726087eb861a742a097"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "d7c58060648f75d2fe81db8108484a95"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "1ef854f60603dbcb404524d424c16371"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2d8111ffb4a0aec31104e4afd9e89d41"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "42403ef7c8e9e9a20acf9e0edd9bbd48"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "01aab024f66140cf5f7ae51b3e3b765e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a6d6845f98af6b65562bde2b3a94a656"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "78b228ede620d8970bb09aecc446962c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "6d17e25c2be70605bb316efd0a31cfd7"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "66d9179e399535ccd902a93d5f40a4f8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "9cf59b1b31e89e706edcf842accc4efb"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "86cdf00b42a505498fdd78fa8e6e0fb3"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "5850e7eeb725c61572c59ac150d683d7"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "429a6d2732ec0d4f5aeb72ce89addb08"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "5ca428255a807399c56d7393cd004f44"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "346e72abb79370d327e80342fe3063b4"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "7af0ecf7484cc251e3a29c9f4bfe582b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "593c35439092faee1962424eaf8fef11"
  },
  {
    "url": "tag/git/index.html",
    "revision": "14298b31f9988321a9b750bedcc9c0cb"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b7e004ab9f96d9168a2a6c3541afd100"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "64a94b3427df931b9dd7f9a95b1ed282"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bcf2bce9376388e4b1a0d0352951396a"
  },
  {
    "url": "tag/index.html",
    "revision": "0170814564380ea45084fc0b5803352b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0a5892a5cef7a23bcb2f1b3f18de4920"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f75a51e054b11d33c11386f7ce2934f7"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "69477108af85a3b0fb9744a66a3dc8d7"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "4f00537e31fe97bb79043411e0c6ef45"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "dddbebbb352324e44d6e305bb2a2b55c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "01619108945544ab95b3e17eb67f40af"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "0443b257f1c017eb09342c0ed87d26d4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "d402dd08449493a5949dd2ed2eb7eb6b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "db184f66bbf2beef27784cc78bf5d925"
  },
  {
    "url": "tag/json/index.html",
    "revision": "23795d99ffb83a965419aa840d719984"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3a8eccf4c0dafde2c1ddae521fc2774d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a85418aeff56e4f9ff7c10cb60e17b56"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ab5e7a5f366d6a257596c2defeb2b0bb"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "8546eb0fbf50f2e127a488e802d0b10c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "05d926f0c0c4fd1605760b32c0d6276a"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "95de54d77c7b21fd9e01d829b50ad335"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c5d41e782dc343daf53684c6f9e7f886"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "24f22484bdd267de8488beb6161f6a8f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "681f936b3a530955fdb6126520b95891"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a19939ec001752183330c64e9100783c"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f6a9324092f0d1cd09819d365a5f8093"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "6c3b34f7be7b8686f10f75c712f2ac6b"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "8760094eace5bd5fbe113b6412f0398a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "09594d92fa95989280f51c0307fe2b7f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4c60832888f7ec0a2b5b7b2dec3d80a8"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d83c1270bb2a57789a0ce82cc8dae626"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "087789576ee25a2d1723ce99dff1453f"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "db7179b35c4e3f14d0dc31d0244d473e"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "350462e899245b74c9aedda673ffb480"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f083da3fd6a501217c7adb1270897fc9"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "a7ae1223dd10097fa1bb086961ccb204"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "65edb98559e516f605744d10c8df9188"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4650f19b0faf69eda7d9213ee54a557e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "4796760378224d935fcb9e09d0c424b6"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b5b3ae3b85b3a1da8c7af5772538ed70"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "6d7542ed671824527373ae3a335f778d"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4531537346e2faebe28212bcb3915584"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "75c03b4a9f23ac017e9ef1027f5ed0d9"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a2c46b9fd6a58c126d0ae18936114356"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "03e5dfa6f68b4b59c99f2cfadb59646f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "08e1e7e10fd30659d731830d2c0b3ef0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e011df5cf8fe3b2ff1fad3054b101797"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "d54d2540dc15510c48810f2e58886b06"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d5fd08712500e6d358159b37f4cd5a61"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e5bdc7f1ae70df6bd2675ec1e2637e44"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "49a44c680d7d44d9638851364d74f76d"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "4bbe7e51e615c7c55e9bbccc0618fb34"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "75afb349cd38ff0fed3018c588404ec7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bec9fb261a2ecd5c9849c8ec66df09cb"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "aa8a2e5d6d19431ab99a4a86f6b76ba6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ce06182f6af5f94416cbee23c36bcadc"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4f064291abe4f45dd5d984b57e02d223"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0f942790272e0b8750dd0ab9f9bd9df3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5f3486aa33e8b71950556e3dedc3d654"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f6dbc209871b68eee35b7467f8ead877"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "38bc0269fae86d0330b4fc53fbba7768"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "8936d08fcc8fb90e8ca0456dec6603a1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d8eac1da330777c78dd5e63eb828212e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "4011ebb02a8cef0c50d2d0e9141bdfec"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "d5d32b85a3bad5f685bb956733dc8727"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c7cd6f97470c03e7970bd403cf886485"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "6bfe02870e9cfdbd9afa878acb8a5761"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "6f482f54c25e116f164f111b56c2d417"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "082496090e9c49d82dd38e91bdee1349"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "cbec9a121ea1f4cd20812bf4b65b22d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd6ddf4e6248d4fafd08dda9083b51c9"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "a74b7558254dc56462e35916e20b14fc"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "8b060d8ca35fe325a49e06fa314cf432"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "fed9fe20e9bc42a5a89188a95cc0e28f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0f258b7084941851de7ac6c929b12a2a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "839187899a330ddd4eaef19a00022924"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3fddc36a811e1a26a2a43e286b9f0721"
  },
  {
    "url": "tools/html/index.html",
    "revision": "762208e4591993be3ae296798a7b483b"
  },
  {
    "url": "tools/note/index.html",
    "revision": "edbc22d8b8deced381ea8f1ba0584d62"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "53d48909455dc27523df4b6aed3d4826"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ceeb098877d160271bb9aded629bb484"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "314d62cbab1f3e3ab6d18b4d003ee592"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "57b673f47b00da748a24820b18195e57"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "e54da3b6f4d2f7acaad90f7bca6e1ffd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "dac47f015a2c044ae0d05781181dee53"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a0e0b18d0908ef4763a5139549eff485"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "70698fb4d54ccf556b00d540b536bec6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ae0ee32f650de06ae7f486a73ff685de"
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
