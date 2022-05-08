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
    "revision": "0df20c91464767ad03499dc27648724f"
  },
  {
    "url": "about/app/index.html",
    "revision": "db31d55a55625468e8532b4b8fd9dd4e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c0beca7c62d7ac31a8eed6afee1efa86"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d1c855d64d288e97cfe88608f450c063"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "e4bb6ff398d21b57f0f0f5ca302dcd9f"
  },
  {
    "url": "about/index/index.html",
    "revision": "7819c07e49170604edff526d151c6c04"
  },
  {
    "url": "ai/index.html",
    "revision": "091975d2b2a759c9a2a23feaddfe0680"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "909d116d46546895d04750be916c1546"
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
    "url": "assets/js/10.0082ff9f.js",
    "revision": "d7924e5ff33553d5bce3e50fa4438730"
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
    "url": "assets/js/119.5fbca813.js",
    "revision": "6da06dc41f3d218f20446c2de012a331"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.ab49462e.js",
    "revision": "22f1570657d62c11b8b2bb4e51004363"
  },
  {
    "url": "assets/js/121.20ba89f3.js",
    "revision": "b10941fdd2879948f46db6f9d3777d1b"
  },
  {
    "url": "assets/js/122.34a14f98.js",
    "revision": "081711237c1d58ea6983ecf17ce02e92"
  },
  {
    "url": "assets/js/123.5f5f1a2b.js",
    "revision": "729b7309d1548200fb1b136505a8ee1d"
  },
  {
    "url": "assets/js/124.1a41a40f.js",
    "revision": "0a5358edcbf956848e290f27e8b70961"
  },
  {
    "url": "assets/js/125.1f5f88fa.js",
    "revision": "c56596ed6efdd1fef36b1ce3d19ae7cf"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
  },
  {
    "url": "assets/js/127.ef7180fe.js",
    "revision": "7b5b45886497910c07e3d11adc17b53e"
  },
  {
    "url": "assets/js/128.b5478fd1.js",
    "revision": "7867c413d08f544db2cf36b93a8cad9d"
  },
  {
    "url": "assets/js/129.62039df1.js",
    "revision": "11c26113c79eaf8a0722dcf7999bdc00"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.72018f2f.js",
    "revision": "60c4f983ca8983b2dbba802f801e9b18"
  },
  {
    "url": "assets/js/131.9f735a92.js",
    "revision": "ffcf8b39662d6e3b96062116df1b19aa"
  },
  {
    "url": "assets/js/132.04f9d07e.js",
    "revision": "ea367e2e8dd763aa8d383379a27a1191"
  },
  {
    "url": "assets/js/133.33ea9f13.js",
    "revision": "25aeefd505448374aa2995f9722d991b"
  },
  {
    "url": "assets/js/134.79be8712.js",
    "revision": "1a064dc931cb41ced894fda0da5b902e"
  },
  {
    "url": "assets/js/135.9ebb9f2a.js",
    "revision": "3e309e88bb05b524f68970917bc4a694"
  },
  {
    "url": "assets/js/136.4ff90afd.js",
    "revision": "331602855fc051ab92610ca35e50aeae"
  },
  {
    "url": "assets/js/137.1641d7d4.js",
    "revision": "36a52e88314aee882e58c8331a291207"
  },
  {
    "url": "assets/js/138.a2fd2dfa.js",
    "revision": "f38b990bd896dac921f9693cff3d9d45"
  },
  {
    "url": "assets/js/139.96b92dd7.js",
    "revision": "0d73e16894d6a3eab39431514e7e2f21"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.c8f31b8a.js",
    "revision": "17d13ad13739441c0ec21894928ff09b"
  },
  {
    "url": "assets/js/141.4574335e.js",
    "revision": "de23572ff0f19634f38b53e4c20446e4"
  },
  {
    "url": "assets/js/142.d2e3c99a.js",
    "revision": "b15aaa24256010259545cc6a1f2ecaf5"
  },
  {
    "url": "assets/js/143.6a497dc0.js",
    "revision": "e74c24d1428e1660e7856e8396980c6e"
  },
  {
    "url": "assets/js/144.4cbb5d7c.js",
    "revision": "f92229805df82716ad418cdd8ebb3521"
  },
  {
    "url": "assets/js/145.d68c2bbd.js",
    "revision": "71c6789b75aa43f9b1b16938e5e0e98e"
  },
  {
    "url": "assets/js/146.e57ffc9c.js",
    "revision": "0463d9d6f879be4a9100da8a4116d321"
  },
  {
    "url": "assets/js/147.7cd12ccf.js",
    "revision": "e328c4078f1145827b6c6ad6ff5ebd23"
  },
  {
    "url": "assets/js/148.eefb27bb.js",
    "revision": "2439b2d885a8fb46bda6550dc2fb1d43"
  },
  {
    "url": "assets/js/149.146d9ec5.js",
    "revision": "79bcbb19e957f1f15d969fbb139b60d8"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.f2bcc38e.js",
    "revision": "fe25d34db6fccf5e5c879039d789a85a"
  },
  {
    "url": "assets/js/151.fdfaecb8.js",
    "revision": "9d5270326e2ea30dbf62b2487c746f33"
  },
  {
    "url": "assets/js/152.9877a24f.js",
    "revision": "69e02cc2be9799853aad8e9f3a510157"
  },
  {
    "url": "assets/js/153.cb694ea7.js",
    "revision": "cc64ad1f2c563813d02b2c2decdd14cb"
  },
  {
    "url": "assets/js/154.a8ab202c.js",
    "revision": "64b1cb6129b488b009e81e0e9ae154b4"
  },
  {
    "url": "assets/js/155.189e5bd5.js",
    "revision": "130180fb4fd0c7d36ee073b8522df2e2"
  },
  {
    "url": "assets/js/156.76f57e9a.js",
    "revision": "91d01bf06df36a15715c3625635db1ca"
  },
  {
    "url": "assets/js/157.99037cd2.js",
    "revision": "4d6c4ecc01c367ef0e46b6681859c095"
  },
  {
    "url": "assets/js/158.1fe884fb.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
  },
  {
    "url": "assets/js/159.9b87b6a5.js",
    "revision": "065d4d3aa1180e53811f4294db07b1a7"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.1179bd26.js",
    "revision": "39c30d288978504821901dc5e42fbf64"
  },
  {
    "url": "assets/js/161.c8f8ef93.js",
    "revision": "894d945e77ec55084223e3218b78874f"
  },
  {
    "url": "assets/js/162.0ae26a3f.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
  },
  {
    "url": "assets/js/163.3fdaa75e.js",
    "revision": "22648ba027006ddc4caa74896efa573b"
  },
  {
    "url": "assets/js/164.98e312b5.js",
    "revision": "a0afb60b39608444467501c9e498e7d8"
  },
  {
    "url": "assets/js/165.16538b13.js",
    "revision": "19007f4218c13504c4e1f1405e2fa6dc"
  },
  {
    "url": "assets/js/166.ee6dcc99.js",
    "revision": "b8c036913318ebf66ca4509461cfd486"
  },
  {
    "url": "assets/js/167.eadb3ec6.js",
    "revision": "64676153c76193c70b68c6310304f7ea"
  },
  {
    "url": "assets/js/168.93ebc9b1.js",
    "revision": "f1ab72e824d1f10c8dbb7f7920e64faa"
  },
  {
    "url": "assets/js/169.a5032a74.js",
    "revision": "ccdcaee1a580cb369bbe0ca49d1780fb"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.19f2f733.js",
    "revision": "dfbdb3b75840e18242d9437275b72f7f"
  },
  {
    "url": "assets/js/171.0d15f974.js",
    "revision": "a34108158af3fc282e4507d977384e04"
  },
  {
    "url": "assets/js/172.5d7ba0f9.js",
    "revision": "73f3cf245d57ad03f96f3415dccad2d0"
  },
  {
    "url": "assets/js/173.2f9e2fc4.js",
    "revision": "b4282ceee9a02654c44f5273386cc7de"
  },
  {
    "url": "assets/js/174.901295ab.js",
    "revision": "321f198e8eebdf623c3cf723700fec64"
  },
  {
    "url": "assets/js/175.b157a369.js",
    "revision": "c58534a6d3c4018d0c0071dc1321864a"
  },
  {
    "url": "assets/js/176.c881fd5f.js",
    "revision": "190b0962020f9d852591802c34280e8a"
  },
  {
    "url": "assets/js/177.ab9b6957.js",
    "revision": "bc5eb3c57e7dd5a1337421ce93024164"
  },
  {
    "url": "assets/js/178.2c3980ce.js",
    "revision": "0c4f1f8dcbde31689db15d16bddcefe2"
  },
  {
    "url": "assets/js/179.5e2c7ae4.js",
    "revision": "60bba1b568f8ec70b6ba1070a1ce0010"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.7c66a7bb.js",
    "revision": "bdcebc3ab5b9cdaa722fb2d6c28eb20e"
  },
  {
    "url": "assets/js/181.6ad983c7.js",
    "revision": "204dabf312a42a00bb1c6e820402ec8a"
  },
  {
    "url": "assets/js/182.d9de7e5c.js",
    "revision": "8ebc0a09c41b92abb66dedcebd7334ff"
  },
  {
    "url": "assets/js/183.7105f3f5.js",
    "revision": "95c9289af44341f99a87a936d5f5855a"
  },
  {
    "url": "assets/js/184.2cac26fd.js",
    "revision": "186acee21a543ba2674489b94db5dcb6"
  },
  {
    "url": "assets/js/185.2668d1a6.js",
    "revision": "8e8ac43bb4bbf505cfc021b26388c1c4"
  },
  {
    "url": "assets/js/186.94101791.js",
    "revision": "dc8deb7c68e9704dd22652b52b878f15"
  },
  {
    "url": "assets/js/187.0d327ed7.js",
    "revision": "637220aaa329ac6a96f1b31d98604c7e"
  },
  {
    "url": "assets/js/188.0e4281e1.js",
    "revision": "2775625dc1533bf22b8056331cc2e4ab"
  },
  {
    "url": "assets/js/189.a8aa2147.js",
    "revision": "8f1e7d7bff5eb21f3dd16b4a26117d7d"
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
    "url": "assets/js/191.d8ae1907.js",
    "revision": "31b38bcd8723d4fe90d526f95e9633f5"
  },
  {
    "url": "assets/js/192.92318fce.js",
    "revision": "f57cba10ccf9f78cb43b9a46afcd3d86"
  },
  {
    "url": "assets/js/193.26ef96ad.js",
    "revision": "3ca3e1abeb38202b897f3d51fbdd42b5"
  },
  {
    "url": "assets/js/194.ea1e2bc3.js",
    "revision": "106d0cda1d97a1c7d187f1f545ed3d41"
  },
  {
    "url": "assets/js/195.4cb8c633.js",
    "revision": "e989663a82bbc0f94b7b2e90e3e5b5df"
  },
  {
    "url": "assets/js/196.eb71a6b1.js",
    "revision": "63f9a7f1a3442257023a5cf97f32d296"
  },
  {
    "url": "assets/js/197.fe37beb6.js",
    "revision": "6a5a093339861011577de1bf5f32aea7"
  },
  {
    "url": "assets/js/198.2e148b3b.js",
    "revision": "5c9b3d2dd3f24d8c44849000dab2efc7"
  },
  {
    "url": "assets/js/199.cd0ba349.js",
    "revision": "283b4ca4a663c5c7461b7e4cd7148e90"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.4ed4a882.js",
    "revision": "925afd75c3694395d03aef20e16dfb3a"
  },
  {
    "url": "assets/js/201.e81a3675.js",
    "revision": "1f253e4cd36c703024194fc344481188"
  },
  {
    "url": "assets/js/202.c0005cf1.js",
    "revision": "8ebb0339d2a487abbfc8e0a1c9c14fd3"
  },
  {
    "url": "assets/js/203.701db98e.js",
    "revision": "3abab713e53780c7203acab500effaa9"
  },
  {
    "url": "assets/js/204.6ca9820f.js",
    "revision": "0f83ed19e3e5ece8d5bca90695e0d64f"
  },
  {
    "url": "assets/js/205.68feea3e.js",
    "revision": "5dd8c710a602be1af3f2e89dfefb065a"
  },
  {
    "url": "assets/js/206.3104252a.js",
    "revision": "f08c1cdd965b3497482883bba54c6abe"
  },
  {
    "url": "assets/js/207.870b3c6b.js",
    "revision": "22b11a42364b9fdacb2faef14a552cd6"
  },
  {
    "url": "assets/js/208.c4b2a999.js",
    "revision": "43f560e69b0bda849174e2e0671ddcc6"
  },
  {
    "url": "assets/js/209.33d84d32.js",
    "revision": "dca7388beeaabc11c76a0701611ca4a6"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.3c557628.js",
    "revision": "c0508083ef0921d954b757fedaaf0850"
  },
  {
    "url": "assets/js/211.866c3514.js",
    "revision": "00aca61bc20564a923ff13ade5936eba"
  },
  {
    "url": "assets/js/212.70302cd0.js",
    "revision": "dbf665835d49753196ef9da549ce523a"
  },
  {
    "url": "assets/js/213.267a79bd.js",
    "revision": "6b2e6554c547292cc49778697b243514"
  },
  {
    "url": "assets/js/214.2235547a.js",
    "revision": "905aa9ba3266a3147a5ff01ada2e15a6"
  },
  {
    "url": "assets/js/215.654858fe.js",
    "revision": "92437d83a590de2d817aa0b64f3c12cb"
  },
  {
    "url": "assets/js/216.eb7b3775.js",
    "revision": "ca6443f0b6585b885a43c177d577644a"
  },
  {
    "url": "assets/js/217.ce37d4e8.js",
    "revision": "2967e97e0b5c6d315e3e36e614342a7e"
  },
  {
    "url": "assets/js/218.e6b226a0.js",
    "revision": "d02661fcd2bd27dae59c65232273fb2c"
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
    "url": "assets/js/220.01ccb7c8.js",
    "revision": "6550acb3547f64762b08e96892e7c18a"
  },
  {
    "url": "assets/js/221.5b0b1ca2.js",
    "revision": "d499d502d47073e1faade7f11d957de2"
  },
  {
    "url": "assets/js/222.208b843b.js",
    "revision": "3a81fbb0020d684a0b2bc12e3939acdf"
  },
  {
    "url": "assets/js/223.82f2e91d.js",
    "revision": "a144f608c26b6610881d8bcf9d5f95ee"
  },
  {
    "url": "assets/js/224.e1853f3d.js",
    "revision": "8653bcce56e57c5bd0b2290beb7ac370"
  },
  {
    "url": "assets/js/225.a25a8a31.js",
    "revision": "fda1c312ac025e0a4bafff68d3a23d8e"
  },
  {
    "url": "assets/js/226.c8473d74.js",
    "revision": "4f10395c2d08bc249de42a99250ef4ca"
  },
  {
    "url": "assets/js/227.ec72a0df.js",
    "revision": "86b70088b85a0bdc4323397a636ced83"
  },
  {
    "url": "assets/js/228.1cac1d2f.js",
    "revision": "5a7dfa3017d5f0d3c06d115b6b876b86"
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
    "url": "assets/js/230.fe75a359.js",
    "revision": "d9d1f189812b97434a86836e5ae7615c"
  },
  {
    "url": "assets/js/231.c43fcf8a.js",
    "revision": "3b24a5a6f9a362707c787c924b894790"
  },
  {
    "url": "assets/js/232.9d9b7718.js",
    "revision": "0296040c021fc6f48478d435d193df8c"
  },
  {
    "url": "assets/js/233.d3ed045c.js",
    "revision": "f2d6651a8a1dfd55cc5a9d97267a05fe"
  },
  {
    "url": "assets/js/234.a38c1da0.js",
    "revision": "61600c7507a1f967990ed86a377e0211"
  },
  {
    "url": "assets/js/235.dddffb24.js",
    "revision": "568b5aa9b18ffcaeb38cf4381ebd0c75"
  },
  {
    "url": "assets/js/236.b3768357.js",
    "revision": "0aa96c98482a1120f761542de0d2399d"
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
    "url": "assets/js/239.54c0a2cf.js",
    "revision": "7e8682bdec07dc654dfab92ec9f6c943"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.c87343e8.js",
    "revision": "fd19fb449f8517036cf121e90c64bc9f"
  },
  {
    "url": "assets/js/241.0c87e30d.js",
    "revision": "59e2f93bce6388b686d779926bc76afe"
  },
  {
    "url": "assets/js/242.c3785667.js",
    "revision": "88b5b956cd43cefb78f8568c39999acd"
  },
  {
    "url": "assets/js/243.62c12d37.js",
    "revision": "dc8fc22a058ce3e1661feb138dd025a1"
  },
  {
    "url": "assets/js/244.aba79844.js",
    "revision": "085ee309e8fa484970236dffc39df972"
  },
  {
    "url": "assets/js/245.142441c8.js",
    "revision": "c0c4391ca4a9971cbbb910d4e0287342"
  },
  {
    "url": "assets/js/246.08d52c3a.js",
    "revision": "4af66af4503ccc83028de74ee01d1504"
  },
  {
    "url": "assets/js/247.2768ff31.js",
    "revision": "128e5fe762636494c4b96ed7d822a59a"
  },
  {
    "url": "assets/js/248.27518c39.js",
    "revision": "33160cc01c9791441e478561f4864b10"
  },
  {
    "url": "assets/js/249.cd23f73a.js",
    "revision": "73727df8e0206ee98efac567b0400971"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.5dc377f2.js",
    "revision": "1659427782daf634bc511cb79ff621fb"
  },
  {
    "url": "assets/js/251.61649ac6.js",
    "revision": "c00c081c313e5ddb3a5db9cef1e059c0"
  },
  {
    "url": "assets/js/252.cfb01cb2.js",
    "revision": "3b454d0b35065f8c3430e4c0ec31ca99"
  },
  {
    "url": "assets/js/253.66d8f82a.js",
    "revision": "84ca0c4d9764f059516e89097e6785db"
  },
  {
    "url": "assets/js/254.9660e03d.js",
    "revision": "b4a47298fb3b2915d50f4bc8bdf79028"
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
    "url": "assets/js/258.725f3b91.js",
    "revision": "5e188b4cc060d5a9962da81e99b917b6"
  },
  {
    "url": "assets/js/259.b4028084.js",
    "revision": "4c8e341e3f60d08f86ede232892b7f5a"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.e5fd2392.js",
    "revision": "1f36b2d543bd663c2ba4bfe70c04fefa"
  },
  {
    "url": "assets/js/261.7f8274bf.js",
    "revision": "a6eb21fba7734bad732f2dc7754689c7"
  },
  {
    "url": "assets/js/262.0ea77ace.js",
    "revision": "9329aa54c511fc354dd5cfff40727106"
  },
  {
    "url": "assets/js/263.db9b6669.js",
    "revision": "53494659126b825fdcb65ed2560c795b"
  },
  {
    "url": "assets/js/264.5df60219.js",
    "revision": "75b34cfbd223ca77d863642720f391e0"
  },
  {
    "url": "assets/js/265.a0a32bad.js",
    "revision": "a71c0aefd905f5c043eeffe77b4a1b45"
  },
  {
    "url": "assets/js/266.78c27f66.js",
    "revision": "f1b0f044407de23b1c84b203fc9afaf7"
  },
  {
    "url": "assets/js/267.62ff8fa7.js",
    "revision": "dd11a8470ae8b1c1cb38a57d375740b3"
  },
  {
    "url": "assets/js/268.cb107781.js",
    "revision": "bb6b068ef878d9bf4d2dc10cabea47fd"
  },
  {
    "url": "assets/js/269.cbd988cb.js",
    "revision": "c7e163c5f5e23ac5f70685d9b0edc621"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.31e7c84c.js",
    "revision": "ac5e96f1e75589c0d28a796eb6ca2f8e"
  },
  {
    "url": "assets/js/271.c0927ca9.js",
    "revision": "dae5dce3da400d193eea9824745e05d9"
  },
  {
    "url": "assets/js/272.54fc3f19.js",
    "revision": "ff743ec032a01757de1bc4656c8b91f5"
  },
  {
    "url": "assets/js/273.648101eb.js",
    "revision": "cfbf4c7fe3563d5c64b82e8e5a18b658"
  },
  {
    "url": "assets/js/274.f0486403.js",
    "revision": "56956a187f0c4f7389090fdc55076163"
  },
  {
    "url": "assets/js/275.5ea87b62.js",
    "revision": "61e725be3fb136cffc9b94775b7eabb3"
  },
  {
    "url": "assets/js/276.28503327.js",
    "revision": "deae9bd5f6c4d64eb04baa69b2b8c8a5"
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
    "url": "assets/js/77.795b5b8a.js",
    "revision": "b110aa5c6bb187814f2c1de4264e8bad"
  },
  {
    "url": "assets/js/78.f0d3acd1.js",
    "revision": "7680eb94846923dc172833c26dd6d639"
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
    "url": "assets/js/87.1a80099d.js",
    "revision": "632f74086b11313369b8ed84029e78d0"
  },
  {
    "url": "assets/js/88.adc30bfb.js",
    "revision": "2863a0424fc3e3ab101e900d4ffc382f"
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
    "url": "assets/js/97.84372dfa.js",
    "revision": "7e80d96f4e1bfad4905fbfabfec583f0"
  },
  {
    "url": "assets/js/98.7d9459c6.js",
    "revision": "a00b363c0ba372e188596efebbdd9fb9"
  },
  {
    "url": "assets/js/99.3876449f.js",
    "revision": "3a8989c1430f220e5a273f52bad862df"
  },
  {
    "url": "assets/js/app.869d0d90.js",
    "revision": "99275b894ee4eec699b48587a240d529"
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
    "revision": "5b02752c65f7a38651c63315d9c96884"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0a01251dcc406dd04b33a6e326b99e0d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "041c6142275689c34d3a53f0a458e26d"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4c3ad6cf4d8900c231bfcd9699016d6e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "bfe5a5bb551d21610069a512073c65be"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1b8f69d01d9127ef3239ca81d264ca2d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f5e66612049b6861a058370951775afc"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4daa104ca69327901199829949ef9a8b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0eef65317f9c91ff0a4e7f367859e45f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "82a69b34926847b476134e71fecafe1b"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9d17b3b1abc96432b74745020226ef56"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "733f5f2127e514b1c28800c8cb32f3af"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "964993bec184a633686e4630187f8543"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "e24b4e60547b10fd66273987aa2115cd"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "637f4cfd89833fd80419ef28183551cb"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "dbe40afa7c79811f4a5fd22ed53e8106"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c446588fa4458833801870204e5a16d8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "54272c6d30dfdf5b61988248e7bf2566"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "9f6196b9b52a9ec39781d9924046bb09"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "a8ccde873d315cc3d7abde62bbcaf6c7"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "1241afdd5b907558cff38daf91bfe5ef"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e95d99dd08eff9d94c1c4c276467d2ed"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "6c78d0661d8ddb47ffc53148d7f8d39b"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d530f287dcd03f58d71c8e38bc2a57fc"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e36b1f203e9d87b160e9eefe03f93844"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "5d60c920c91693895f110249fea58935"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c00b02f02a8f0b87fc85713bf6b607a8"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "49ab8d3b2895717917f30a5f66c67433"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "56ad3d2d506aba9b302ff75e15c7eb48"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "8426fdd39995b3a2aef9255e25ea2447"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "296c3674751e6f24590435f99fca16ff"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6e898c7af3cfd600d131b0c77f4f38e3"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "8d19f2e9dc0ecae82f35f787f572b13a"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "3b9cf801cfbd9c6b2d1f67ceb5b7be0c"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "82139269de50d56e117e601e9bc35d43"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "fb9602879f614dba10fc1185c50b7caf"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "fb8cdbc5f38b7be9c14741f9c0dfbedd"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "a46b6bbb0a48f7756ff299ba9d5dc7f6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0b888a14434b784c00e1517b835c061d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1e23109328566b13403550eeda6e1403"
  },
  {
    "url": "book/index.html",
    "revision": "447dc734c6f3d469e6101c77d1cedba9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5e8f001b580c4b91121d5090a9c93c3f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "21c107f2a3da6e4e087cfa14d234eac1"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "d1af0f1c7cc648059d12cdd48614cce5"
  },
  {
    "url": "c/audio/index.html",
    "revision": "8e6d6f5c3027cfdabcf80aa775677f09"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "21c3f24498b06e222213f7258bd1486b"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d4c84c14d42e4cae706205d0f841b774"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "83b38fa1960fe117eba61227ba03f2e4"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "21602a16b6c62cc35119d3d35ee9f932"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "47439110b406f75f09391a2c9738686b"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "35fb900aeb600128df2e14e80f18e8fe"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "b3f27e4419a63bf0e566e809e5ca9891"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8cb215fe2f73b8754584d35c93a99ae1"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "407d7d0e4c06bf51c5389039c71311a2"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b94df7e0ec82002b25fdcfd8d6da05df"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "86ae8993e242526376191ed352769a9d"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "721b5d361f8b93f5df1527f9f15b3659"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0d279edea49ca8020a9177e393c09510"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a234e2f4f2dbf3f091dab0bac8c7f0a6"
  },
  {
    "url": "c/program/index.html",
    "revision": "1698bd3f4c8898239b0a54dcaf751a4d"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d931c52f10b6728272e6cc2115ecb5f7"
  },
  {
    "url": "categories/index.html",
    "revision": "3e2c725f9f6f4563bd19dc9c8179cc62"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "148f7a59193d347d54cf26732b1948a2"
  },
  {
    "url": "figma/index.html",
    "revision": "e2a48c7560808e2a4aea93e2ba45525b"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "a3c3f14d16ed33caa938bf8a483e88e0"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "547ce091ff9f8660056f67d205009379"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "a6cd575edc064d2ec97eaa4701e00b18"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "b7b6717a6743663fa7178af5c9cecdb6"
  },
  {
    "url": "flutter/index.html",
    "revision": "842f15bab25cd3b47fe6201e37f451d0"
  },
  {
    "url": "flutter/point.html",
    "revision": "ea0ba19524e409742122e926b3592693"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "13656d7fb00bed197d11bfc78bd18a8b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "158690cac097009433b50c426283e61c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d4a77b2940bff9b562f2fb3fd2a701c5"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "aab28b222be3804192249c11efd8e0bc"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b604885dd61bb057793955dd3cca4680"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6d1f9379b159ba3f34c78c9e7cb5c7ff"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "e886bf4f074b956f0e56bfa570bff1d1"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d216b84ab85f9a85e1d6e9de25b826b5"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "165ed2836cf9895290a38d5542ad0a21"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a89702103cbd7d25298eba294bc636e5"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f4b2d8a29ade8aa4b7de8f45ccf95485"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b134fceddda9119d955ba6ef4983e72c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "cf72a829026b732f050a1161f3d4274e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "86de0eae357693acb181a20d04ae79bd"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ee06199f63e9edc36f4ea1d27b2548f4"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "fc7c26c461d893a136c49a30f73a86e8"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "bc50f11a858d60c4001af87d3cb48005"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "872de8d0304e43bed629162f7fdf714e"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f1e9f4654c4a26088cf776b6dcb7b0e2"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "462b372dc0627b3256f0a845bde2d040"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "bfbd4aecb493fc058e4ff79b0e2c9895"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "cb0a3962f4e4a533de6a8d9c72cfc691"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "62d11c0322c61dcc939a44bb8c66771f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "9651a9556be99232cedbf4d42166ed9f"
  },
  {
    "url": "haskell/index.html",
    "revision": "ab87bca8e8549b01bb52313987b78e4a"
  },
  {
    "url": "index.html",
    "revision": "b7a32585d2245345af8d74f3a795e022"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "06f0d9595f20cb173c2e513a946aea59"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8d51a43e7b844185a0dfe87d72ea3503"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b9c851819211d0afe654197f6b9d884c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "546b1a801bf140a5ff0f91e16e120017"
  },
  {
    "url": "python/index.html",
    "revision": "f5b747b8c69182f8355af9afc2ef0a0d"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d1b9b000ab4f8fd46e51e9490b43d868"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "846bb6ef45de1c783a0c859244baee09"
  },
  {
    "url": "python/python-file.html",
    "revision": "3d3e97622877881a364dd5cf60507fa4"
  },
  {
    "url": "python/python-function.html",
    "revision": "133f76ce24db7c747db5ac7791598c4a"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4ff1badb997bf20a1f364295061691ee"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "2814542e0e29c05b56f8c4d11ed29b21"
  },
  {
    "url": "python/python-module.html",
    "revision": "6f603eb24fa0929e100e0c0147a14711"
  },
  {
    "url": "python/python-string.html",
    "revision": "9879dc45896d49e600bfe85e457abe74"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4b54f3050d1c0a8c4cd489abd0ecae97"
  },
  {
    "url": "read/index.html",
    "revision": "6c4e0c63975173f798b73aaccea65366"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "059f786c266eaa1e2820683b1866bafe"
  },
  {
    "url": "swift/better/available.html",
    "revision": "8e062bb87c314f4644242d37e8fac4bb"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e1aa2f9db0ff1b07338520eba108bb62"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "7a7f2218dc4c01e6984f287f390cf6a9"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c4f97b21c497896c11328299c715405e"
  },
  {
    "url": "swift/better/di.html",
    "revision": "9802ecb08de6d1e6282288649901b380"
  },
  {
    "url": "swift/better/index.html",
    "revision": "1dcb0f8fa3dfdde1d28ce4fba2a8e2fc"
  },
  {
    "url": "swift/better/last.html",
    "revision": "ea2f533eb3a1b246cbc8c43f3add8974"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "04f0006a99ed20685838a7b18c288ac0"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "33d25fc4d2645d73e1e340703c806a7d"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "6c4f7987096637482c5205dd81caba04"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "beaf18591d80f2fa9f2f2938cf750d1b"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "bb39197d6a176272c6d1c99a23278d0a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "cd5a92bbe2121f8ef21e81d24a042a80"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4ad96bbaabfc65e51cd0e4d35645b6f3"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "435bae0af1308440b177dc76b8a6a911"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "19cdf2a46b7a70eee640848a5635984c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "fdc960d43978f82be90745bf5e7557ce"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "408606b7c5bfafa3adc5414e5784e7b7"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1b808fedfcb41b79079bcf4d83848839"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "f2b2c872d885d872f474f57ee256c094"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "88037d1a4b012ba03840d20033160d37"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f8f3102bfc976f6662b585cc1dc7c2f5"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ff4fc32a24d27a3f05ec7c4e69ce5521"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "32f4449687f9bf374cb795df12163e15"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "7126283174edce4337dc1b13c9be28d2"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "e7e641ba3a3199c9096231db1c39ff57"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "10509da51490e92c59bed1ad784a56a1"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "87f3b5a86c1464b75fbdbde4c138fd4a"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "80634494a7443fa56defb0a03bd1ae80"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "a21da2111a96532691599afe3cbadc35"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "020947c4c6c3b4020b72345af633ae3e"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "6ffca3c299f56c5b3f4e042f131c39fd"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "0cd4e41d95d2af0259262897fb36f52b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "03bed388cbaabf3b3e576f2924640687"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "d433ef19dc33b5457cf3538b76fb4709"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2b6d09986a8a6b3f7161e5eb14275fd6"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f05886f69b382b401c074a4d7b2f78f0"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "8194f2fbccb19cf3e259f7bb50cf5245"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "798d63f0248791583085d165f226b512"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "df69a4b447c6fd80e460426ea973b4d7"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "af1d22c55d64c8aede064f12aed21b3b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "33d607aa52299793aab2cb8682c21816"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "dc692c89f96ad385132775c6d271c5ca"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "baeb66230fafb2689bb48c66f2229d72"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d5bb476087622f1d1651d95e18d2a37c"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "7a407a1d3ec30ef279da18afa164cbc2"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "f736ae08aa658117318928c42fd367e7"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "14cb0275c87fbedac286786cf5a2751a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "166b5968dad5a7771a89e54b1f55cdc6"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "843f63b9a8352ef3e4b9b5f118fc054b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "9e497228842fe310d1b8fc735e9162d9"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "70410e771cf8bbc0a54afc7d09d2c2a2"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "6684417ae7bb7ab11eae13e179caa9cf"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "cf5fbeaa7d74d7de26d426956e029336"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7b2003d15901e2a621fa3c4b9b946cf7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "048b6952fe13e0c62c8903d736188191"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "061a52739805a426a5fcf8b81b204d82"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "df7927880698d9eb40cb74715dd906cc"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "a2bf6b7e3171e78162b4aacc4d4db9bd"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f7a22825014db587938cacb033b3ecc9"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "df94c0005b800473b7312cafc1176fbc"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "0c9cff864a9b1daa0ae2ff39a152efc2"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b38efd99102273c60d5b70dd99925b9c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "3a1dad2e6a404bfa8c4526c8987418d9"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "a32151528c4a3f76ef2cd831e1f2af91"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d32bf1d1f4649009a493f0cae2b6b49c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1bebb65521a2f701f174acfebd5ddfff"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "46dd848319e0eb84dde319a489d0f846"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "41d4ff8639b5f0a448425e0caecb44e5"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "e6c6bb1fa5f464b85bc883ba09bb45eb"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "4fd5b88ed999bac665feae3ec744ae66"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0817ad094ef8ab8fd0b7a37aa75b7301"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2a30daac406735982d5c7cec329f3d3e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3be0c2bc1d1e56078938f4d23fe48340"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a0dc79dcd9bebe5e56d2a2670b3a8c4b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "c29f26d96db3e4f520e3ef2ab02e1d01"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "eb16107ecfde7784ee87a269cd21e287"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "733ae9ab25d6c54f3130ba7c0606de79"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "948700e9648a012e7ead07df0d4dfd0a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "8bc82f0d3d98b867b73c4b04c3773827"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c29caeccccea4c1e50b68f57b694bc2c"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "10f3bbbaecf45e14e7644beaa55b8588"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "ff189c553cc34c714424e600f9944bfb"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "9f387af043d8f667ad7a56e9e60acb12"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2955381887d0ddc72fd4af88462e6a3c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6bac5ac29131d88159b0a87baae6ef78"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "dab948a6dcafc85d56bd16b27ff0f6d7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "95b5d63b8fa94b4daa10e4ec15d77418"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0afce7dd8c8b5b562f5af39a2d581743"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "b304d05b5285d4e31a040014c25bf313"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "1cf135f20ae9718e26ceae7de1c054cd"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e39c5eef95e7146a62cd8037307a6047"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "904359ba214439f8fe398a55d9a8880d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a41f6092249207a6eaebf5651fd640ec"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "d452182469b42a544b4f2520b881898f"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "d2a5e855f075041e9c34bd817e6401f6"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e0a334865978ca67d1a341fdc44a2a6f"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "8cb7e069e94e49cbd833ac8ed47ba68d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3fc5929fbcd626bf97a15bfe728fea6e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "735914708c1b6ac3cf9cfe4d3cb9e751"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "46166c89eecc616850e3a5dc10993340"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "71e590ba0aa9525335cc23a0fb394935"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "029f628690e13ca23dcf86ac1bf68881"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "38970ecd3ac5c59127e543af5046b58f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "80ac86bbe2fb7eeb74703585c62faf54"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8c092e55db32c312a11c5282b5466f55"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "c9bca602d2c61efe364774536ad18c87"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "7c625d105af0ea793a0a1c9603392f95"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "96f2e265db7fe64c9110815c46580e28"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "6febb277ed663a25364ceed9fd05088e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "e995f33a882774a21ed6cc0dc746aa54"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "aae889a89c0c41a9e6881bd89d0c2e6b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "da81eac5895e20dd05b9d38aef0bc06c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c8661cd64a342cf2ebc6f2001a80233d"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "990e2ff3944ada7b737cd2e86fb614d1"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9ce324a304d66984300ff24116cc46c2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a928e6a2e2dae1e80c0b9a5f77928ece"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "af48226fb0af01a6bac0a563334084f7"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0b698b1f0244f4bf61f90519e864f41c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8966f5a96c8fa9c640b7e808e34e3c6e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ffc3b8c7749e907f9d7d184c7a753303"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b985d39a8e4b16b6887c05233978949b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "353f5e422c9e91328622d3b8796b1365"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "2bc21b6012bb9a9ba370f3d964a29d99"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "bdec5d4eb5b2c1b7ca633b188b01aac8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "972fe2845d0d6c26a1890313c0f64d9a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "df87fef7520e5cd551cc63c6aac35a8c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "cccf9c96369bea0abf7694f9ce7176a9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "df082fa703f4766bb3c8cf60b1fa5c4c"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "54fe285237cebf95c177d6f238d9b63a"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "de071d173df08104a9cbe015d8bee059"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "da619f1dfe1c296e087fc7111ed29425"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "409f33376c6463405b1e5b9cacd9dc57"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6be8ac5716a402b813bcaed3ccf25f30"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "559d9f1c035c5310bd4a89d6be2ea868"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "f3cf4aabcb7aa172fad7e7ab3cf11b7d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3fd3cb0ebe8a1daa25b5a754c1c39587"
  },
  {
    "url": "tag/github/index.html",
    "revision": "404830774fec1399a2cc092f90f74f02"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3214c15ea1aa870ed75a3e764aa72b95"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e184848ec2088702abe5493a422fad59"
  },
  {
    "url": "tag/index.html",
    "revision": "c443e2a225d3e8de9a205d8cd3add7ea"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "54f34650c0f9a78558e93fe7da18a4c6"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "83715de7d3560386b01ff99b36bd0479"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "56c00b4a1341e84234980b5799dbc481"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "5f331507c51bf07209a1c0ef15cfe589"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "405cb2a5b3fc1503c1d43261c8a3e8e8"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8af2d4d57f63b27e8f971cb7327662f5"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "949ed9113726014fe1e642f21be62382"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2a4a644948807d999fce52af51bc7ddd"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "32322916f0ecf582ead3e45742d545d8"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7528c04ff17cf91d06e1ae5b2502696c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "ab3bacb7a801b65a76c5f91082d83cc6"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2baef4f65f143d577ba788c8ad2aa67b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "913b9a08c6c2467b3e694c1caa71b888"
  },
  {
    "url": "tag/python/index.html",
    "revision": "67edefd5c2cc4eadac9c6144b865e954"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "45cb63bac48cf7c2d8e64cdd6d41143c"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3706377395870ffcc52663c1b73057c2"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "61c9907f89f0fecef4d142dbcc46b8f7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "022824dc30f8ffa75198e7e7d2f57b6c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "581fc885b2330bcc940c44ea7053f743"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "64e178da9aae9ab19c34845a1ee41b31"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ff693d5ad9794e245f2f76d1e344ed96"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "7d44f6f87b53cbcd7056cbe21b457453"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c7a344c3e3f05834e40cd7d1ac72b115"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "40e5fcd48ede7d9ed5a09d38ecc580e0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "bc3d2319446bb11ffdd78142c954e3d4"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3b93d7a9f71cdaad69b788a0faff3b20"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3e2afe182b9c9a632348f3c611062457"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "003ac62810a2c2f37fecc7d68111fd6a"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "e3ea2979f8ec542f797c28d07928fac2"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "3824b9e56342f4ad904fc1bdb3b1ff28"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "65216ddd33ae3ff885ab295a187175b3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7260ca3b109eaf53afa29eb8a0bc20ca"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "19ba5ef3e090da5b1e62da5e53170316"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c0253f2c8c75a08f024944edc95bc61c"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "7d5a8143aac85e1e6eaff3048289c274"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0493b03c25cd88e93bc25037b7e39afe"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a6d011d97ad10e52a9612812aca56240"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "73a4f0c5add4528f51ffbc2e4880be47"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "fa931c28ba967d70cd7e6da1e84634b2"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "f22fa7914deda79478e4be33d8ff00ef"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "75d7c9819159b1fdb7a0556c8713eec2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c6195813d811b9e681cc6e6a84be2b51"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6ef3193b74014f6b388873645653d792"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "baba681640e3755d8feb72eee994ef50"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a0e6350c5200743c87272fe7fca8b8ef"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f9818782084f6905406146c762d22901"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "368bdcf9fe1945897b9f42c2245a2c61"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8391522a42a24ee57781374c1988266d"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "f2a8e0cece66ac70b3e2d56a645a6b62"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3914cfe9d91be7717c00988f0fc15664"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cc57124e082f14c0cf807635b0a1bb95"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e5a039a65fd46958cab3d51d0ce814a3"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "49429eb8b0b9874e1fe9c477b5d0761f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0d643b590279e7eecd2e2f53f773ecf6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c3ba961dff4559afae126fee6be05053"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "0c48e19983dea08324425b296335b2e1"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "a50df524192cb2705c2994415aa29e9e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "519b294cd4ef83639120b67ec3b933c3"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "832154dbfb3ee5d45cb5d23ab8adf221"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a4b95986c568275dae0ff39b9fcb07fe"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ca675e50ee767d9b6086ac705514c2e9"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ef04a8679347ecd5993082d6be86a2dc"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5e55a4c8426317ac923958513851a898"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "82903e3783864aa4cb8242d7bb7f439a"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "3e9db57d35e4877c42744d450f66c78f"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "2e72c135fe5c8715bc774b327e8124f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f880cdeaf5b26e33842107e232af2eaa"
  },
  {
    "url": "tools/docsify.html",
    "revision": "6b42ee9b20f8e4380737a18307c62995"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0835bb6446f3609998693dc3c2ba76bc"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f1b0c212f6ba05600ecf75b07e260f07"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "0641c70de59a3b8715b3ec27c995f855"
  },
  {
    "url": "tools/git/index.html",
    "revision": "fc76c52df31f5a87a5dc3191082abd9e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3ad4f4a859711f2b12f4dd71a677e37c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "822c74b9866f8756879393b712c5955c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "9a9fb3b3797330b1e7f50eaaad6b91aa"
  },
  {
    "url": "tools/note/index.html",
    "revision": "c7e3873cee877727f3ae7ee5ba618555"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "9587ccc0495ef69e7883a154e77b7378"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1d52328f52697d505dc6f440064ca0b3"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "848bf66a4624a4043aef04fd0e9f04cd"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c36902280766042df07a79e99e85d5ca"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c91a7258890117c1d858451af12f7dfc"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cd6675b0cc8ee2712d8e1fc7e1554244"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "4fcd9304564d27eec6eba69126d43c8a"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "bff1e545f06d963824ff804117df6f80"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "c7088e0516b9b4c3dbac2f66a736b198"
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
