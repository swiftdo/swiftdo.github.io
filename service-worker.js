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
    "revision": "b1842628d9e1cdba47e436e5cc4567e1"
  },
  {
    "url": "about/app/index.html",
    "revision": "51e29aa9f477444f389efd9c334f0d81"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "57dfa0a0c742828e374c225f9b703db9"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8eb34748a8688d3ceec4feaf475d92b1"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "5fabe8c046f2510c323f34f59891b734"
  },
  {
    "url": "about/index/index.html",
    "revision": "b569801644cbbb0aa461e59a7236fbb5"
  },
  {
    "url": "ai/index.html",
    "revision": "4b96f8903de77781e38478a39468cf86"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4492f65e353fba2d85257b5360ff0377"
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
    "url": "assets/js/101.48328d51.js",
    "revision": "16d0f2d0d03c40cac19eaba6b15d12df"
  },
  {
    "url": "assets/js/102.d654ed34.js",
    "revision": "b14a282d47a16d3ddfd8ca9a0deeeb4b"
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
    "url": "assets/js/121.5a2b3e64.js",
    "revision": "05cd31c58372464602b33b7150d28396"
  },
  {
    "url": "assets/js/122.b86e8a51.js",
    "revision": "5f4b94d59e93e4a816f2ad4b67f7ffdc"
  },
  {
    "url": "assets/js/123.7af41974.js",
    "revision": "3f814ddcd0e9f236cec45a1c7aebc7ed"
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
    "url": "assets/js/154.f386e2b1.js",
    "revision": "8ce4dee901417f54b404fd2396c4356c"
  },
  {
    "url": "assets/js/155.189e5bd5.js",
    "revision": "130180fb4fd0c7d36ee073b8522df2e2"
  },
  {
    "url": "assets/js/156.8fcd059a.js",
    "revision": "1b69820840a549d8f6b9e2f7ded481d0"
  },
  {
    "url": "assets/js/157.8f4da794.js",
    "revision": "98f763a2b09e15503ac3972364f217a7"
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
    "url": "assets/js/160.5e9d2883.js",
    "revision": "906a1d3ee7d84fd71e6f97882d39dacf"
  },
  {
    "url": "assets/js/161.a534d905.js",
    "revision": "70d37f80964896aed1fb542c4d2b449d"
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
    "url": "assets/js/194.5a0316d3.js",
    "revision": "4309e6443941f47a8058a88e68ebdbdd"
  },
  {
    "url": "assets/js/195.0ee3b00c.js",
    "revision": "14e4e81b95b0d0b11e6e0f20320e4624"
  },
  {
    "url": "assets/js/196.eb71a6b1.js",
    "revision": "63f9a7f1a3442257023a5cf97f32d296"
  },
  {
    "url": "assets/js/197.80b75a8d.js",
    "revision": "2621966370a781fa21355d9faa311ef6"
  },
  {
    "url": "assets/js/198.ce7e1da5.js",
    "revision": "64c6ea7600c0cb3470cd897c530fdd57"
  },
  {
    "url": "assets/js/199.5194c08e.js",
    "revision": "fca76e68627aef0372c9a21d74ce0fbe"
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
    "url": "assets/js/207.1756b674.js",
    "revision": "bdda672068e70fe00374613a084a5fa5"
  },
  {
    "url": "assets/js/208.feb0ede8.js",
    "revision": "b58bdd12b7731f5c5e6eecbee6cede9a"
  },
  {
    "url": "assets/js/209.a378f209.js",
    "revision": "f991210192ff00cd1bdfcf4596306a9c"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.d5a20a05.js",
    "revision": "848ecf865a73a2f8005df0ded64271ff"
  },
  {
    "url": "assets/js/211.6819c8ab.js",
    "revision": "f29eda4631b3c3cdbf3867b5a74c301c"
  },
  {
    "url": "assets/js/212.7509f086.js",
    "revision": "0c195481492a1235c1ae57eb52e74367"
  },
  {
    "url": "assets/js/213.fc578349.js",
    "revision": "a60ce6a77be880e80137d07ad8ea66f7"
  },
  {
    "url": "assets/js/214.b44d77ac.js",
    "revision": "d4425927e22deeb011e66d723cf1943a"
  },
  {
    "url": "assets/js/215.f5fc914a.js",
    "revision": "cb9100316bc8a478c693df072025ba8d"
  },
  {
    "url": "assets/js/216.d02723cc.js",
    "revision": "1a5b3767e7ab082b0b6602d87329b22b"
  },
  {
    "url": "assets/js/217.59d0558f.js",
    "revision": "bb57fd551270b92607f16edc2e8f94c8"
  },
  {
    "url": "assets/js/218.0d5450cc.js",
    "revision": "df87d7210068040fe77dea564546fd87"
  },
  {
    "url": "assets/js/219.764323a1.js",
    "revision": "407c2902d03ef169849f1ae58d377c54"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.919f5125.js",
    "revision": "1389c3939b6ae5bfd044a2b79e35775a"
  },
  {
    "url": "assets/js/221.6db00f64.js",
    "revision": "f044931ae672189be27f48140b417d15"
  },
  {
    "url": "assets/js/222.9450403c.js",
    "revision": "675d321638210b9c41a4ac264fc0c5c0"
  },
  {
    "url": "assets/js/223.82bab6e0.js",
    "revision": "564f3d5643e33e3374d9ee71d35cb2b1"
  },
  {
    "url": "assets/js/224.7ea52125.js",
    "revision": "287434c5889ac7ba84c4626037462191"
  },
  {
    "url": "assets/js/225.83c68fd5.js",
    "revision": "e222fa799e7bc71b27fb085cd14fa01d"
  },
  {
    "url": "assets/js/226.a167bad0.js",
    "revision": "e3ffce04f0fad49b2ee5495ed0652f4a"
  },
  {
    "url": "assets/js/227.fc3ce103.js",
    "revision": "33e118d3a91c1f80acc05ef5e572d2d2"
  },
  {
    "url": "assets/js/228.3a73ccc9.js",
    "revision": "0dc549f3b6fd7477fba339a0e18c4000"
  },
  {
    "url": "assets/js/229.4d6ee7cf.js",
    "revision": "57f9f684ba1bf8f24756e6d564c62ebc"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.b9f3dee9.js",
    "revision": "0fd9c5fdfe493dac2d9a04a0cb4584b4"
  },
  {
    "url": "assets/js/231.e5a5421d.js",
    "revision": "caa9429af7fa01a6c187938d2770d688"
  },
  {
    "url": "assets/js/232.fc60023e.js",
    "revision": "47e9afab416f0b11f2b8dc983f799680"
  },
  {
    "url": "assets/js/233.bfd36191.js",
    "revision": "94601e0bde3289e5d276a743f4302df4"
  },
  {
    "url": "assets/js/234.c473af89.js",
    "revision": "bfed1b29e8a0e05776e33fb3de2f074a"
  },
  {
    "url": "assets/js/235.3320b6e9.js",
    "revision": "09c8ad817f822c80cad6c6dbf69d8b56"
  },
  {
    "url": "assets/js/236.75042ca6.js",
    "revision": "076cdd1e5898bdb5603f45d32d07907c"
  },
  {
    "url": "assets/js/237.3bb81ccb.js",
    "revision": "472cad22c4cc17f62bf166b878b1af11"
  },
  {
    "url": "assets/js/238.0a8f0a80.js",
    "revision": "f214ef02ce84351b1f3ce9aa153c1b26"
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
    "url": "assets/js/240.637d8d1b.js",
    "revision": "203bfecf84375f83556024cef24cf64a"
  },
  {
    "url": "assets/js/241.f337c40b.js",
    "revision": "6d0d40e0c787daa81b6b1668b7bab080"
  },
  {
    "url": "assets/js/242.9266fe70.js",
    "revision": "dda242f9c39ed2cb2f27e02a51192361"
  },
  {
    "url": "assets/js/243.0e518111.js",
    "revision": "4e85b4c2de17eef34a74e4640f0a292e"
  },
  {
    "url": "assets/js/244.c99108b3.js",
    "revision": "e20b2010ae7a36f596a9215f08458a39"
  },
  {
    "url": "assets/js/245.705758ea.js",
    "revision": "7e6595ec4da1ea059b9316b1fda22479"
  },
  {
    "url": "assets/js/246.b4a09c72.js",
    "revision": "0d69ce29fa148e9fcee050e6ad5601de"
  },
  {
    "url": "assets/js/247.f387ea81.js",
    "revision": "b5ca6b229628de2411b4c36eeb558851"
  },
  {
    "url": "assets/js/248.02ba70d1.js",
    "revision": "038367ae1c033b6557764d744e159fc6"
  },
  {
    "url": "assets/js/249.747aab4f.js",
    "revision": "b4ce15c8ce0406325990c8b7bd723b68"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.04245d6e.js",
    "revision": "07f4fdb7aeaca7d9b9555d0288d4a77b"
  },
  {
    "url": "assets/js/251.ef08e254.js",
    "revision": "ba291e76b468ffaf1a12638315d6590d"
  },
  {
    "url": "assets/js/252.89d66d5e.js",
    "revision": "86f299759e619599ae34143628983a61"
  },
  {
    "url": "assets/js/253.66d8f82a.js",
    "revision": "84ca0c4d9764f059516e89097e6785db"
  },
  {
    "url": "assets/js/254.de4b52d8.js",
    "revision": "018358f671b9fe4c21688efaf1efefce"
  },
  {
    "url": "assets/js/255.5a1e8845.js",
    "revision": "f42445a0601cb15568d67fcca2c2268f"
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
    "url": "assets/js/264.ec241ff3.js",
    "revision": "6390f8fa7b83238fa86f8ce6aabaf7ac"
  },
  {
    "url": "assets/js/265.2c03efa8.js",
    "revision": "bf05cbc91d7ff0842434cf38a6ffa2c9"
  },
  {
    "url": "assets/js/266.746a1eba.js",
    "revision": "77a222083deac0623f4192f44a5c4c34"
  },
  {
    "url": "assets/js/267.b6d4729d.js",
    "revision": "a86d3b6a78ba87893a8325c86f1f4ae8"
  },
  {
    "url": "assets/js/268.d5e80733.js",
    "revision": "e2b595221de355b617cdb1a3715299bf"
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
    "url": "assets/js/app.22f7edaa.js",
    "revision": "0de8a00333e00d626a79540eff347a21"
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
    "revision": "1f4a3f6b23c5bc79618051097e11221a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "22330bf35eb45f44d35bd4d7fb26183c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7ce112429cfad281a5cc5c9e8fea12b2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2e0faccd381ea18f23b0fc71bdcbf024"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "55804b0ba77f2efc676af360b57a76db"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "30c99e550c5a1ddb60609dc5faca5d5a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a38f115aa8cadf74b7e14e6335b4c3ae"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "de45eed19d54818b19df5934bd2ab6e3"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "32d4fedd349300e664e017493d1fdb1b"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c66a708ac815cedfac8b9dfe0d687e7e"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "835f124cfd6f48f529c9cb2936d48e63"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "27ffd75f5cfb7ca73e0640a59c554338"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "bfc715634da876f445e9cb59bcafa030"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "b79fab0c506499bef5bdb4ab895bdcfb"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "76c2f31ef2c6ac0f33a877624fd709f9"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "7e5562a8335f61c4f68facd98f79146f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4cd25981d73fa6b0d708adbab805df2b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "c77e5e80514dfd9c40d238d61e8c4ca1"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "84ca6e7e05ba69c6ecace5277a767562"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c2853f0f9c632d841f9b8961fbd9ed16"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "9f6cdff6dc7787ce94552e6a736e7cc1"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "0d27037799eee96814b51816d0b47f3c"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "324dda657367141769f34acd25c0a2c1"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6e3a625b69da84f577cac48af179f78d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "0ee16f3967bdfbce8c10d9b3e101dc09"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "dc45bf766085d05ea9d7e82025bc0880"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "e6f3649763c29dea4c791557ce26cca9"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "94afb4e5e04e1cc330da78ae8941df08"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "8b13e285cbc7b333d9ea5a14f6f95626"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "c464b826df170cb5e99531b8552be775"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "ae57f3c16f77de5a04a9b8c9c548606b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "790c06c8f2193e5fcbf0f225f634c3bc"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "46ba752484d88f049a796be63658c47b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "673d1925828263ca871da4646d6cce62"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "669f0b61de84750e023c1c40e3b1138c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "a7f095a55c9fef56ca40d216e52dec45"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d4ccc7fa7628a994d07176ecae093b70"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "0e213fb316f7b2f381098140a119fc97"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5b372f36d0579a117c1eaf267232306e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "06d8499e34a1e1e15cf5cd8ee06fafc0"
  },
  {
    "url": "book/index.html",
    "revision": "c73140b0defa24b0d5a1cb78c6493426"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a95ca23c1ce8790c8edb4cb7d40212f3"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "2e9be6a9401328109f6c200bf41396a1"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ccf87f8b2d2dcc16e5085765773b48f1"
  },
  {
    "url": "c/audio/index.html",
    "revision": "4456e01888c446d0b803c55ef02225e2"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "01d637f4e2e4cbf050b8a65a9b5457e1"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "ddd8894d0179b4a613e0f9710238d638"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "accf7045285bf5048923546db561de60"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a94668d6c5ff41d6cf2dc0b8b589c22c"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "c759188dbdc58085b457c3243d483b52"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "6aed83c7acf124df6e865d3370d79cbc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "5d7c6d0eb30877798d4aa0cef02ec197"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "0af29dac2d34b6802f39ad5c1e09f53b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "f848e9d65b3a54a2419143174bcd86ef"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "7c631528a685dc45d4c4e22bde470f6a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "9792df47a3f2a6f41ce43caccc91d6f8"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "cdea5f873bcd5501c8ba68ada8f0430a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "09fd1236f4aeccf0f1fadd96e708764c"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "41dcf410f3cfba5e0b48336859bafd35"
  },
  {
    "url": "c/program/index.html",
    "revision": "bb31cc3f7a85d6662a9fadd70b343902"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "12fc409d6adf82455940af470a31b7d7"
  },
  {
    "url": "categories/index.html",
    "revision": "d1e30d293dd3d83d0d01640c26fab96b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "75057828732a7418cf864f26c2cc3718"
  },
  {
    "url": "figma/index.html",
    "revision": "b23c0001eb9700ccc8b3196b216d9d89"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "52f0a1b9b0cb41ac97482bf59cb6f390"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "4718c817cd53a2d6fda9ccdffa8ded96"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "c2f3d65ac0a67b858b9ebd89e8a1d10c"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "0552fdbaf281e13cb720c4716f52e147"
  },
  {
    "url": "flutter/index.html",
    "revision": "60164da910b6bb88abebc1e82674c6c2"
  },
  {
    "url": "flutter/point.html",
    "revision": "288da2acdea9e8666ae8b194bb58aae3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "506c958600dae446b381328e18df1712"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "e23dbd76b937c75a2cf90c04dc4c633a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "38c00a1dc9c6748bc829d6c5a28e9ffb"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "236bcdaecabac2a096e99e164eab93d0"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b1bd39b839688825172143fa578ba97b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "785c1d9e96ea3dd206faf25e5de1979e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4bcd5d8fe44ed7806df6d45c1cf752dd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "13f0530c873c48112a537d06f780d9fa"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "cf64840b2a2ca71151749d6ff0058526"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2db559a7904ed9fec42cabb204aee16a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d9119490b83f2c456accdd8cb6e0c1aa"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1527cb9d9762e90a7f2f3eab0f27c160"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d7b6fcd71443f5457f3f46bafd817bc0"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "16656ffe2737e7c6e60e7ffed7647c89"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4406e1d869409e7963f5ae5543a2ecf8"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "49f9d5834cad9ff9f0deb2b9d2119c0b"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0eb39d8fe96184663d3e4b064a2690d7"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "4e2b822562d43881c1a4196ce9dc0e77"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "c783ed7f10d4792c820e170fca5f75ed"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "3a8fca8a55f86ba151f5ce95e83651a4"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f681d305054dc61cebeeb288c64dc9dd"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "0d3653bca4a6bfbf65645a61256f6b29"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "19b5ffca8e0253f1efc1558527e8019b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f3dae0c62886d18c629fcdbacb509a73"
  },
  {
    "url": "haskell/index.html",
    "revision": "c22b34f6f83e7432ee2c615c0931a268"
  },
  {
    "url": "index.html",
    "revision": "9d04dbb48e96d2208b5f5174b9d8d934"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4eba037d6c169222112ad3549c7010a4"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "2dd15a44afb3d4b41d34a3a9d579abe9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f8ff8d56fe0560f09264918ea10de697"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "143adbd5d69bc8298e682a396d6525c6"
  },
  {
    "url": "python/index.html",
    "revision": "b3b29f412588b3eafe2c7458c053c735"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d891d048214af95f649bba1ef852e216"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "d1d76c469a0b5c54976048d15f12147a"
  },
  {
    "url": "python/python-file.html",
    "revision": "1a456a7c81840a44702d688dd7965c96"
  },
  {
    "url": "python/python-function.html",
    "revision": "d4145263468ad9bead661c9cd7608179"
  },
  {
    "url": "python/python-generator.html",
    "revision": "ebb33a38ee9dc17f2e0cdeb9f4ec6565"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "3e9fa52d176a5e3bdf74acddb4482f41"
  },
  {
    "url": "python/python-module.html",
    "revision": "342b50b3735ea79cd66c45f2ebd7b39f"
  },
  {
    "url": "python/python-string.html",
    "revision": "a3d5863c4b406befb3643e82f7db33ae"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4d911092ddf0457a9e647efa0fce36e0"
  },
  {
    "url": "read/index.html",
    "revision": "3b32ef9e16d1bacea5ec383e030af854"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "7c17bb70255a544969cab52b785225b3"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c8b96c606dd490059229ebb20284fe1c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "58f1e604c37fdd327649130cc55b31ce"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "25b365d584e2a40144275d160e8d6334"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "e0ec5559dad8dd1b80bd202160b9ba83"
  },
  {
    "url": "swift/better/di.html",
    "revision": "a621dc806469c0c89acd6e6e738877dc"
  },
  {
    "url": "swift/better/index.html",
    "revision": "e8563bf4f35489109a2fcd0c3b4da1a4"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2d9200a09a82b95d9dda64b6406dee04"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "25fe79b629a55694898cfb6c517679c3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b16ea6820ac23bb863403784760f7603"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "e6223214eefcf1a4b893a9a143ffe6e8"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "65af8b03db20f32096e24dd683dd3551"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a12d37eba82bd2971527e3631f45d1c4"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "15bc215cac2bb539ccde6263b0270eb5"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ee51032a38648d205e0cda1cc128970c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e39b55bf03b3a3ed768dc36bf263d090"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ac4ee021cd1b64e100b55bb27c8d0410"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e800e96fc510d0709ffd0086cbe56e33"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "cd6d716b33d8fc54f94a547533228044"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "90be3297341cdc23e0052076e475bb4e"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "33161cc795515a0bd6abc40c942f26a4"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "452bc5c834ddd39e1270d97acd85e801"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b88f2ac4bf30e5a887169aff94dd8e5b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "354e36c8ee5892442f38cdbb9abfd401"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "0d79465a5a202cb38fa0e555cd16e6b9"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "b7bfdb04bc285a0ee59f6b71d6f5c963"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b42d785cf1283d24abba4cb10483949d"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "9a925b02a9c9296f039806e1a8ff20e3"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e8c0f00128ec566e13497f8f51ec1401"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "5d9d685b72b8c926edb9541ed75ee65b"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "c257952977ac1b3d38362a7f294295f4"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "37d027a02951096553c7d7d4ab17f265"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "c4a9063dbc33fc97075e5a7b300aabdd"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "ea752cc666120e8ba1e623845d0c64fd"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "6ceefb9b2435345e3c700445a63f12c5"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "697b8dceda0fd5ba0303b7596368f295"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "70357923b9f37c802531d161aa906d0e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "181a3c527b2b19bd204a9471269b7856"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "fdf0e9d609207f5ac64ea87c73f5cc97"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "195054ad8a3e137b7e7432cdf43f1adc"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4ba9d0aab4d29e918d459e5f268dcfea"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "89d4d99e4f1d8f40cd8cbc532588ed4c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9b75691744b9fbd2b7120a39505fe7bc"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "aed5a12a18a3ce0f301f28708177a1f7"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "eef239848b4b27bdd740686751481a13"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "96f41ea23ca07996c1ba47a4ff0c9597"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "264f98a0276eeeee8b58208cf6c741b0"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "97bc7b2556cb1a5aaec2cf8bcf808fda"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "dd0ae4973ff89138a2a98480cb3d6b42"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c1a582d15a8b4ab5be23a29da65dbe2f"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "46f196e9effc1e194290ad71c1521abb"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e63669bfb9398a80a7d7af1840733505"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5d4ac9cf4db7e4568fe419317c02d9ce"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "d2eed1ce5c3b5ffcfd0776aeb886f277"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "eff115137140c0194420c65651442589"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9a112c4b7d4ec124c7e43d6828fc23c9"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1924e0c841da7f0b873bdb72370aad9d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e1d91d4a6926074a09be7fc0ce40b430"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b38257ac37c2323d9e0b9501fb59fb30"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "0a3661f21b4bc52866e2e811ba71bbe0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e79cb8f65dfb2b909b7eec6c7054deea"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "8f2c3cb97fa67fa64d8dcbf614334cb2"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4b28c3742c6aeda3f2253f68a2aa72c4"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "63da0dd8cecee93a22bf8ce278bd7670"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "efa632ee8658ea9df3c52a4d1ef70c7a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c0bded49a2fb18e880123593c59e1935"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d7b3fcf11d2b2e94e1778de093d9ee1b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5faf3afef39f1377c6b347792dff60b5"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7089a7125b86662f380ea3070da85943"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "410e448eaee77103f6db77fa1066adf4"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "2764f8d2df846655eb91de9ad245a152"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "4b76a00f208e9aade668e8775cf48abd"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "3bf70746a63e03ecfa8f9830929cfb0c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "1615187a88459121c3d0b9c7bc6cfbc3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "b2da911a553d77a7afa4d9b6900191c0"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "9d19694336708ab3ae14893930f9afc3"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "36f67f1b58962e076de5a3a58fa09d26"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "6917ec59262112f6085f6d928bc53804"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "4f0af4ca05c92b6c194ccfc0a6483b12"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "1a6e0ba209f6f854afcc9a90b3bd399c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "4e844f0eed652732a2a445c2420e5251"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3d6c0e023ddc48da9429e296d39c0ac6"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "8735c0804add5fe79388d1d6109c2401"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "5a4035f36d0959086cc133e381bb693d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "fb6b0dfefbdf0b61b1d5836104cd7433"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "d4f680bd1d446167e26018b695e1af0c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b9ee36636c537bd25272bf1aa0370883"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "efe95406b3d46902a2b4827c43591fb8"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "cdfb21df1a90eb994acea927d36118fb"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "3d5de770ee0abcc5c9e2830905b8233f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9dbca5c1d171937c8c5fa709a89a7e01"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e2a75b47b10055af393639d6d2adafa2"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e6965188c73831dd1f53e303619c2069"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7104b5a722bdb68ba925f0ba76236386"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "596134a809db61f9dc5478d88d85229d"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "27f88780ee8c39d80b165cc19a055680"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "dea9996b3384d3203f605b6b6858f8bf"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "3cc796315356c65d79d73b4dfcefcef5"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "310e3318d9321f40e5ee25a0f5276912"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "fbdf7ed411005f55dff9b87732c6bf6d"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a3f22e29d913dd3c5c350651e2ff550a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "56fb1937e2da6018be2937b8e69201f3"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "881702dfa77cfd5970f73a2fcf02625d"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "31251aceb782cbde5f08a5e45edb6e8a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "feb345f512313f992482809a27fb93ca"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "a05ab997daf9b3917ee38554193e60bd"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "eaa3e4d74202e8809de994bf5f279b7b"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "3b240414dc1ae9607f4ec350345fb0ec"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d3a4e1b21fc962fa6107e57ed50ded49"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "be07ea1de7bdf5a8f82826a808ce4f5d"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "1d1e5cb4d1744d45e48cac72b507c3d8"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "ccbf08f51866c59d9b75ebfcbe1adb20"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b5f1963713efc71224e18640526d3d88"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "cbc5cbce96c365ac5e78372fe79cd200"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "68ca40988705e20ebf64415db7d14650"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "28509309f346f35ddc865a9ee54c4aad"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f16747dcff38851d06ef9158816314ca"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4bd30cca2d70283486fe1fcf89fdd9ff"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c7f77223464af5dcc9d650e5aef0a708"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "94f45501f3a3d7cdec8b84c929580cf1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "ab0b1e7a42a229a6d62cddc16d7b1484"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "318e9f1c80fb575e0cef68c3a3792338"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b984cc291838d38c2371599198e488d3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "029bfef79acc0e1c32148d9881fb3928"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "98ae1a84cd01dc515b5a7ad52d86e8e1"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "82d2591ecbb8f07f9324a7155f619c89"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b76cea6c8fb8150a3a74a28da00725e4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "cc84e0d682a8e2e3fa8683f649020fa6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c55865e0b2dd98aaaff41623c5b81bc7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "17e0d50be726de22feade661cfe07a1a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "f185fd4ca9aa089973e166f66a21ee30"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a076ba7215ea45569c2fa859c8925cb9"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "5ab670b7e13c609774d3f0aac5c9fc20"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "f79b5a824d2bb068fbaac4fd4c95aa01"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "399389d5594af07dea5eb0d403f7d6ff"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "441b2cde4dd46567ffa53cc1862edb51"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "0db0fc3413b37b89178398d7932b6c95"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6aa2dd55006ceed4b808bfc5b06b9710"
  },
  {
    "url": "tag/github/index.html",
    "revision": "3d6fd662691325e2e4421c54489cd32f"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "1450c4118a9f6fbe65457b0daf7f9f1b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "de42efa3d70e86dd65ffe8f2f87bb499"
  },
  {
    "url": "tag/index.html",
    "revision": "01f1697897ee39b9525e9d795a3b88a5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "bc56a99e07f6263c301f443059a57d77"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "ae857cede892d384b10e80dfe10217de"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "fc5a70d7270bf85d034eca19077a1355"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c4895934d39483aeb8a8c6ad7b2862c1"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "135eaf4167338223141ec9ce1cc57e97"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ec49e6e2ee29aa288938fd82e747bb0d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "1c2f18b3e4f1cba54ef8e1ac66ebd30f"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0551e056240dcd2a61b189a0ba153e04"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "06aba125fad87886966e6e119d5e8146"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3c1edcd5812380bbc8e78d2a06528f17"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3ea0020986fe20cb07a441402dda41da"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a473b637a49407288c443d1d86b112ef"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5eff947e80fac634e84e352aa50e74b4"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "dcef96edacf611a93d44d3e2489bf0e3"
  },
  {
    "url": "tag/read/index.html",
    "revision": "422255ffd37b433f80010b12b555fe5b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "4e596f6ed642f71a830fce6348c20ff5"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "542ad1f28ac2d580996e307859c3c3bf"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "52477d963bf4bb7d26f9c915746a3735"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "39c7048b60d9044cbacfcf690f6a3a0a"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "7f4e3bd8fafecf18bd2d4e5d0d70ed60"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "f4c756ed3fb7a1d1979d1eb4e49685ed"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "cd8244f6963fd2231df0f18f4d2653e5"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "c0fb07ae082658bc6222e0db20a0e6b0"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "0e2956d71a45a35771e7f423fc77ba67"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "36e2cfc2f871bde4a02870ce3683a7d9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c717768a3ab635624d6cd6cb37990d41"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "e084babb60b3e9ad9bb0c69152dddfdb"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "24752f4492685c4899a64f11b13de7f0"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "3902addd6f13e63e1a06c7cb8b09b006"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "58cc1208b528de351592c8a011d72bd8"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "d5933c080b3a03e83a6bff08db8a9e83"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3b78ed43fead219533363c2f890da5a2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7334c58d922f0c5579be9da4f7b5055f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1f9012261bbe6f4d12768ab07f1507e7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ba34434aba290d83159583345d9a6a99"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "55b9716dee3613c4699dbc95b4922db2"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ff4743bc27d42f92deda99eddfd85c5f"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "7df5ac254b5b124c97301d706fab8230"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a5ceda1371b0c20604667f6f6f1258ca"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "453d905f6e0dcfde49331d9cdfb5621c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "8f42e33e8acf4efb8e0eb25413ec63a2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ee565cfa34a02e44e0956c9f28b2cd32"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "407b7cdb8674cbfebec392416c26e781"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "8d33f6260dde9ff582fee10c2054e46e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fe738e34b8b5c90880c91311c3f01cc5"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ffece0348d950e864f11f39bdb402fd1"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8ece89340f5e6da93b3ee34a8ac84209"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "893b748ac4364dcacddbc053c170cc55"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "89b054719118686acb1dab3419026700"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fdc620eaeaa9d51e90544d678a3315e6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e4e016af66a124b93fca6fb05c45e7d8"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3c9ccfe65aa6808aa722a79956a858e4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "759036f196c038ecd53afb83d32afea7"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "514945e34dbdc72d100bb17e2c8fefc2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fa71ad924e08daace4c23ee02b854a5d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "34fb7c5aa27bca4e387663faa592e3c7"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "fdc6c60551c992e5660c8e5bc5e43355"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0160a0619e9bcaf3eb25588e382cbb66"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "dfd795cd614860d499c7a3d904f69e8a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5dc33b92814a3b19a6cf8214ff41cf87"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "41bdd853023ebbf150928a9e434b8fe7"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "db01baca4083af69644072b79e716bbb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "075d4c0562577c5212f02b545770e8eb"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "3d8fe9ef191dc7077353fd92c5282241"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d1d30f1cd324044488cc68e6209adc61"
  },
  {
    "url": "timeline/index.html",
    "revision": "220854225461e0a9cd337d3c35abccf1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "6fa6e929fac220b8b2bb2b74b70d4fdd"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "28cb45572b5e5b1aa6af4f1091d097bc"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "93e0b37c9d277f80fc379958e5a5a818"
  },
  {
    "url": "tools/git/index.html",
    "revision": "0bced186cb13bdf1958f8fc67c74ee7e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "0ef0655582ed49051284066e57d895bf"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5edfe6aa5539d3466942fca616a92867"
  },
  {
    "url": "tools/html/index.html",
    "revision": "8589573c803b6cb5ece49e9a0040069d"
  },
  {
    "url": "tools/note/index.html",
    "revision": "4a51b53a0c8b53d440d516933125b3a2"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "5187aee37d9104ad35ade46bc14c40fa"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "a6d775c788c5d9bd7318559cf2b4c016"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f054c4f0461d9650cd2129faad6252f2"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "8c4d7713cfebcb3418ceef6c2f2524ad"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "df3999640562b76664964ec68c67f5ad"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "91cab47909105db3b52f5313bcf25acd"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "a4df7a3b384c9c19baa5bf0e74e79e36"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f756965461f0c0125fad8c462e3d1b1a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8afde86178a4b4e4cd374945ef6c7027"
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
