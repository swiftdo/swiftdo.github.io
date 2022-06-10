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
    "revision": "49b7f9c31d69f82d4d207c6970304d0b"
  },
  {
    "url": "about/app/index.html",
    "revision": "f2b80ad21e3f4cc0aadba58696e3a06c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0169832679425fae8d760659ddedb062"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6a30381a03b7f00e9cc46d99f3f010e9"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7b885c9db8ee04806cc3cec66247071b"
  },
  {
    "url": "about/index/index.html",
    "revision": "0c1e03a4a6605fc18bc88ebd25d5c647"
  },
  {
    "url": "ai/index.html",
    "revision": "87618957a8465d3f8d6012eae7c7c44a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "451c9171d5091f68df5228e33a28022a"
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
    "url": "assets/js/10.d3414d3d.js",
    "revision": "2dd0771d0834999b9a91aff5ac2a7f88"
  },
  {
    "url": "assets/js/100.1f6d540d.js",
    "revision": "5f46867f84d0598f7d72f11dfbd810b4"
  },
  {
    "url": "assets/js/101.178ae9f2.js",
    "revision": "b054d80e16edbae2a8d525680f455bd5"
  },
  {
    "url": "assets/js/102.cba1497a.js",
    "revision": "ba4cbd1182da7b5021ee0942c10be99c"
  },
  {
    "url": "assets/js/103.78346fb3.js",
    "revision": "c6aaf5f5d1a631b77aa180983758d7ec"
  },
  {
    "url": "assets/js/104.ae823524.js",
    "revision": "57a686d16ce10f17523ccbe3fdabbf7c"
  },
  {
    "url": "assets/js/105.aa73250b.js",
    "revision": "e5458a42ffeea74cf7093ac835d096b9"
  },
  {
    "url": "assets/js/106.d13593fb.js",
    "revision": "a6f249be6a1bdd5e2012d9190a0afaf4"
  },
  {
    "url": "assets/js/107.387fc744.js",
    "revision": "0e57223eeb15317a72e8767047ec5ed8"
  },
  {
    "url": "assets/js/108.179846bc.js",
    "revision": "88c21992a90d318c15a3bb7cbf79b269"
  },
  {
    "url": "assets/js/109.b345312e.js",
    "revision": "8183339d9385152251ade6bc33957bfb"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.99014719.js",
    "revision": "3c55f7bee15d6a5efe6605b12f8164d6"
  },
  {
    "url": "assets/js/111.7bfafd1a.js",
    "revision": "df5d92f86ca341ec26b0c0538781bb87"
  },
  {
    "url": "assets/js/112.3a3eebab.js",
    "revision": "f39937c24610a2e32267f25090060883"
  },
  {
    "url": "assets/js/113.f49fa32a.js",
    "revision": "0c68da6701fdc013e90c57d3cd8893af"
  },
  {
    "url": "assets/js/114.44a82cb1.js",
    "revision": "e598a346c1f530653388173d01ed3e59"
  },
  {
    "url": "assets/js/115.ede6a898.js",
    "revision": "1df4c8b91e864fdb454cfe52758cd491"
  },
  {
    "url": "assets/js/116.cfa39397.js",
    "revision": "3f807ff48f12c45722ce354141371d77"
  },
  {
    "url": "assets/js/117.1d90a990.js",
    "revision": "d36af3734087399b44916853bdae8012"
  },
  {
    "url": "assets/js/118.b682e743.js",
    "revision": "6cdf44b6982a0e06933efd6622f584c8"
  },
  {
    "url": "assets/js/119.10d2223c.js",
    "revision": "25953e449f7356cc65479e731cc1e7e0"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.e55830a5.js",
    "revision": "3a0a94ae0be7d4fddf8cd77e4782ccc9"
  },
  {
    "url": "assets/js/121.c4aae801.js",
    "revision": "adb4582526e4d8d42ad681a49c2df2e8"
  },
  {
    "url": "assets/js/122.ead0ef3e.js",
    "revision": "10d018ae2d839ccab8d90efde0e46faa"
  },
  {
    "url": "assets/js/123.c0293fc5.js",
    "revision": "ab25d86595abf5509e99e01ad87e3eca"
  },
  {
    "url": "assets/js/124.3558842c.js",
    "revision": "66b68ff72ac03ebd4e4b71be0b23c373"
  },
  {
    "url": "assets/js/125.e6ac66c7.js",
    "revision": "8aacd4fb8c8b7157bf6aa5a6b6585393"
  },
  {
    "url": "assets/js/126.e7da657c.js",
    "revision": "59c998fe12946e5cbb8fa73b05ea9d96"
  },
  {
    "url": "assets/js/127.f9a87d67.js",
    "revision": "fc09267f4fdc74b3d6edb2583c3d5cd2"
  },
  {
    "url": "assets/js/128.3c97ca47.js",
    "revision": "533c3394c96087a7d81bd2ae7b65f6a9"
  },
  {
    "url": "assets/js/129.9d11957d.js",
    "revision": "3eb2893b3892ba39a00fd4151c7388e3"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.042dbb79.js",
    "revision": "57542a129a762dcd7c07b405a6035324"
  },
  {
    "url": "assets/js/131.bf2ef37f.js",
    "revision": "47eabe662787c016d9bc4762188a3e2c"
  },
  {
    "url": "assets/js/132.4d3aaea8.js",
    "revision": "607ff68fd4a9b9169fe4090f82b620de"
  },
  {
    "url": "assets/js/133.4ca5a8bb.js",
    "revision": "c60e9b759dcbc0d5a4978a72c77cc999"
  },
  {
    "url": "assets/js/134.02cf7d8c.js",
    "revision": "ecd6fb2830b4e01f729280fc048bd327"
  },
  {
    "url": "assets/js/135.efe646a6.js",
    "revision": "2646ed4a82b05d03b69b3edcd40ecd54"
  },
  {
    "url": "assets/js/136.51ba43ec.js",
    "revision": "fab70d799a00caceb73c28c523c15fa1"
  },
  {
    "url": "assets/js/137.0757a816.js",
    "revision": "11c24b4faafd913c0cbd37ce09026162"
  },
  {
    "url": "assets/js/138.b2f91e4a.js",
    "revision": "afde7ba8cbe1831cd2abf28006ae139f"
  },
  {
    "url": "assets/js/139.718d5231.js",
    "revision": "9b96439c3d1e1f5d57aed674e7f098ff"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.842629f3.js",
    "revision": "eb230d4426f07cff035e56f86361e271"
  },
  {
    "url": "assets/js/141.9136b835.js",
    "revision": "623c1dcfe7a991bd421d3b95277a613a"
  },
  {
    "url": "assets/js/142.dc0c0acc.js",
    "revision": "51960cf39c8d339d9f9c53d6084c889d"
  },
  {
    "url": "assets/js/143.dc9c0d87.js",
    "revision": "d74d8038441bdf975787a2b15534f4a5"
  },
  {
    "url": "assets/js/144.6d09766a.js",
    "revision": "42ae602c8d7135b0e5606d171bd513f8"
  },
  {
    "url": "assets/js/145.278f3205.js",
    "revision": "ff16b0919b8b531358482dc48b53a4ff"
  },
  {
    "url": "assets/js/146.aafdd202.js",
    "revision": "0fa738c83a65cb691bbdbb2263ccc324"
  },
  {
    "url": "assets/js/147.11b12ed9.js",
    "revision": "3dcfcd97eb381d40c3fc24f4e78c44d2"
  },
  {
    "url": "assets/js/148.a71f99db.js",
    "revision": "3659c43acb66e07b944f16d005322968"
  },
  {
    "url": "assets/js/149.47236a43.js",
    "revision": "cce755a3af510e9ebc82635b621779df"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.ea8aa78e.js",
    "revision": "90a204d53388d754dfab510245e21eee"
  },
  {
    "url": "assets/js/151.4265a713.js",
    "revision": "033a2f2a08aa56a6f70fd00566ceb6b2"
  },
  {
    "url": "assets/js/152.60b6d89a.js",
    "revision": "7129cadacd3b03f437eb7822185c9164"
  },
  {
    "url": "assets/js/153.dd890a7f.js",
    "revision": "240034d1b38dc73048c4873a696ec2d3"
  },
  {
    "url": "assets/js/154.2ce5ce17.js",
    "revision": "69f42a0f99b0c76b2c2466c64659d207"
  },
  {
    "url": "assets/js/155.8b0d9a42.js",
    "revision": "a136ce8994856d97f650b222f89ea714"
  },
  {
    "url": "assets/js/156.ec61a2f5.js",
    "revision": "ffc5d88abd5004d9590b4663f87eb3c6"
  },
  {
    "url": "assets/js/157.ac5d1fd1.js",
    "revision": "b903e58960db93654a8e9f13de862c4b"
  },
  {
    "url": "assets/js/158.defe9ebd.js",
    "revision": "df6331161b47a4b4308d34020bc02dbb"
  },
  {
    "url": "assets/js/159.bf7e83ad.js",
    "revision": "d3bdafd75b0c3bd0ed424d33c99fd382"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.40900d2f.js",
    "revision": "906a1d3ee7d84fd71e6f97882d39dacf"
  },
  {
    "url": "assets/js/161.8ff52bbc.js",
    "revision": "336690cd58104b076661280e9b4498d8"
  },
  {
    "url": "assets/js/162.3a1abfee.js",
    "revision": "411706d0b9abe82c602bf333e81657ae"
  },
  {
    "url": "assets/js/163.83335170.js",
    "revision": "22648ba027006ddc4caa74896efa573b"
  },
  {
    "url": "assets/js/164.eb399226.js",
    "revision": "a0afb60b39608444467501c9e498e7d8"
  },
  {
    "url": "assets/js/165.1807fa6b.js",
    "revision": "4556d9f3a96447a4de109c20c63ccc8f"
  },
  {
    "url": "assets/js/166.bf31ee9a.js",
    "revision": "292ba5b090aa9867033995e856099c12"
  },
  {
    "url": "assets/js/167.9ce3a9d4.js",
    "revision": "628f69af2914b0189712788d0a3f3098"
  },
  {
    "url": "assets/js/168.1c1a3cee.js",
    "revision": "f575b2f5f1d40d153190931d07cf4469"
  },
  {
    "url": "assets/js/169.ac80af35.js",
    "revision": "fe5be696f64181ab950a1a6394968df0"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.725cc824.js",
    "revision": "4af3937050791b76f87ddb20a465e35f"
  },
  {
    "url": "assets/js/171.21e5e303.js",
    "revision": "c568992c2c1bb1996e11d193dcd3f874"
  },
  {
    "url": "assets/js/172.7e84bd3d.js",
    "revision": "bf9d05e44dc90406dc72dfd8b061f175"
  },
  {
    "url": "assets/js/173.12b54b4d.js",
    "revision": "4c35ef0966c083fa0b20e3d1b65e588b"
  },
  {
    "url": "assets/js/174.5ef52598.js",
    "revision": "6ad44185ad29b7c1ef17feb5d16d89bc"
  },
  {
    "url": "assets/js/175.a49d823e.js",
    "revision": "756a2e82b57bf413711cf9d765b5d1ff"
  },
  {
    "url": "assets/js/176.db2b9107.js",
    "revision": "111a6212e7af77b2286965f0fcedbe5c"
  },
  {
    "url": "assets/js/177.773e8e54.js",
    "revision": "bf214f3da5b8b5d918feeb17865b548d"
  },
  {
    "url": "assets/js/178.c7f66b62.js",
    "revision": "4e9b9d0b976a95d0723027c77d804c10"
  },
  {
    "url": "assets/js/179.f891b35a.js",
    "revision": "1d077425cadad08ce8f3ce6397148b4a"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.f0995506.js",
    "revision": "031e28c821593e6192e2bbacca47b937"
  },
  {
    "url": "assets/js/181.00d116ba.js",
    "revision": "2fe8143732296bea1ac4034c02649ca4"
  },
  {
    "url": "assets/js/182.1f2f8719.js",
    "revision": "13412867df560c892b631928b2d15565"
  },
  {
    "url": "assets/js/183.4ddff3fc.js",
    "revision": "4eabd00296c98765d32a36a16de525b7"
  },
  {
    "url": "assets/js/184.76e93a47.js",
    "revision": "537774942ec7e4301be14dee1f8c47f2"
  },
  {
    "url": "assets/js/185.6f5bbf9d.js",
    "revision": "1707903151397f46ae3b9bf487f56062"
  },
  {
    "url": "assets/js/186.26e961bf.js",
    "revision": "5361668da4c9bd6faae690d554b41840"
  },
  {
    "url": "assets/js/187.a16832cb.js",
    "revision": "7a40ee503740bb76926a91a6c61ce4d9"
  },
  {
    "url": "assets/js/188.e8bd9edc.js",
    "revision": "f0bd44c9b64b7e00b0042ff7fd3ca2af"
  },
  {
    "url": "assets/js/189.54291ed7.js",
    "revision": "6cf06941966cf7aafe92b0e404018390"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.8790a10f.js",
    "revision": "edf3dd240fe75b9f5e677bf6e15fff83"
  },
  {
    "url": "assets/js/191.5e6b4b32.js",
    "revision": "db586119d1606512eb856954d9f80bd8"
  },
  {
    "url": "assets/js/192.ab724546.js",
    "revision": "33cbe04e9865eae5df2fb01784880722"
  },
  {
    "url": "assets/js/193.80e899be.js",
    "revision": "7ac670f9bf1193e21d2ccdc4d02f46b5"
  },
  {
    "url": "assets/js/194.cccaacb8.js",
    "revision": "ef6764a4b3d5f56c3657e0189ec06c24"
  },
  {
    "url": "assets/js/195.a99d96a4.js",
    "revision": "abdf31611231fdac672b8fdf6bd1757e"
  },
  {
    "url": "assets/js/196.dfd997a1.js",
    "revision": "946849fdd92060692fdffef8dd61a128"
  },
  {
    "url": "assets/js/197.dd6524f1.js",
    "revision": "97a6badd4fda2aa2b4ba06c4eb130e42"
  },
  {
    "url": "assets/js/198.934dcbcb.js",
    "revision": "8852bfe9257014c899c37e5fb519e7a8"
  },
  {
    "url": "assets/js/199.d5d7196d.js",
    "revision": "38750213752936f688f62c1ea5ea5010"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.ab136a3a.js",
    "revision": "e9e68aa16584ed3ce11ce4d871d90006"
  },
  {
    "url": "assets/js/201.37b20549.js",
    "revision": "30df3167f1a2b7ce1182510a6775e9fe"
  },
  {
    "url": "assets/js/202.1a9943ba.js",
    "revision": "f178602134b55ffda297ac28e4d13cba"
  },
  {
    "url": "assets/js/203.79395603.js",
    "revision": "85b43e0ead6e81402e317786285506c4"
  },
  {
    "url": "assets/js/204.2239a74d.js",
    "revision": "1dfba49edeea11d19b6342185a3b16e3"
  },
  {
    "url": "assets/js/205.f412652f.js",
    "revision": "8f908eec61f417417d22336df9d74f2c"
  },
  {
    "url": "assets/js/206.001ead97.js",
    "revision": "8a9bccf0a4f2df6d5daaa1491b5cf540"
  },
  {
    "url": "assets/js/207.66ae78c4.js",
    "revision": "e069a901a692fd4f22311ac3d7842367"
  },
  {
    "url": "assets/js/208.681fd6f7.js",
    "revision": "9398d6487fbcad585b65e630909fa32c"
  },
  {
    "url": "assets/js/209.ed93ef6c.js",
    "revision": "a7b6a2d8527727bad874f526283f4d25"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.84dbfaf5.js",
    "revision": "b54c307115b6eda8392c97df1c3cce4c"
  },
  {
    "url": "assets/js/211.b7a537a5.js",
    "revision": "68bd64d5edecd85d9aeec6729a58769c"
  },
  {
    "url": "assets/js/212.763c26c4.js",
    "revision": "632f6f4a437e009f7a573692ca7a4ac3"
  },
  {
    "url": "assets/js/213.667853ba.js",
    "revision": "c8a8f5840d89178217019f3f0803c0c3"
  },
  {
    "url": "assets/js/214.1e07ea49.js",
    "revision": "dffa951b4773c1ccf2a4fc46d16f600a"
  },
  {
    "url": "assets/js/215.92379dff.js",
    "revision": "a7f8ae75e86ca8b533d2dcb32b9e7c2a"
  },
  {
    "url": "assets/js/216.4337d2b2.js",
    "revision": "4cfebb18d5f6715ee78a778f99ec12c5"
  },
  {
    "url": "assets/js/217.d327e1a3.js",
    "revision": "6c927ccf12c360223a144f50aa56f776"
  },
  {
    "url": "assets/js/218.b9bb17ec.js",
    "revision": "a0f76340dd2ea748e364bbc13bbc7007"
  },
  {
    "url": "assets/js/219.938463e8.js",
    "revision": "6556c44cf2a5603ccbe0279c2aa1a561"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.07181701.js",
    "revision": "13cc0808aea29809d2159e2298c6bd88"
  },
  {
    "url": "assets/js/221.87d2d078.js",
    "revision": "df1348703a0372dfa6acc387f5c8b059"
  },
  {
    "url": "assets/js/222.37a7c786.js",
    "revision": "433d69da80911eddcf13529528be4b02"
  },
  {
    "url": "assets/js/223.404067e2.js",
    "revision": "67747adcd3d671f9f43f76a5021b261c"
  },
  {
    "url": "assets/js/224.2a855c51.js",
    "revision": "d7bfc023b7bb935b2db29ed58e6336be"
  },
  {
    "url": "assets/js/225.f270b880.js",
    "revision": "9f5130984f9260d2a1b6638e859ea719"
  },
  {
    "url": "assets/js/226.3dd84b46.js",
    "revision": "1e95caaa1254e5a8ae7fbb907c84da10"
  },
  {
    "url": "assets/js/227.1f19e0a4.js",
    "revision": "362fade72d167c48f7327802b813a105"
  },
  {
    "url": "assets/js/228.ec805428.js",
    "revision": "b5f4669a4baadb32c54ba28f5176304a"
  },
  {
    "url": "assets/js/229.ee31efe1.js",
    "revision": "1b0d587ee2f60502372e4c7c36b6993c"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.2cebbe2e.js",
    "revision": "88cdcb66259b0d3d7907ca76a8b62431"
  },
  {
    "url": "assets/js/231.948fc41f.js",
    "revision": "7ea7637c3e0f6858740d885433a504e7"
  },
  {
    "url": "assets/js/232.f97a694c.js",
    "revision": "afe66ffb5b941912f2ab60ae43379319"
  },
  {
    "url": "assets/js/233.1a1d91b4.js",
    "revision": "73c0ce651ecc8240d73053655585343b"
  },
  {
    "url": "assets/js/234.ad2ea913.js",
    "revision": "62bd1d98665241962bcd39207814d727"
  },
  {
    "url": "assets/js/235.4d45e762.js",
    "revision": "b4232ee281fd166c41162d542646e597"
  },
  {
    "url": "assets/js/236.fbbe1687.js",
    "revision": "42868761e0f54dc2e7ecdd3d7d66e234"
  },
  {
    "url": "assets/js/237.6cea55d3.js",
    "revision": "2bf0d610bf959e7373692e55bc004872"
  },
  {
    "url": "assets/js/238.b63bc295.js",
    "revision": "00a402a60c46410e62090e7020e759f0"
  },
  {
    "url": "assets/js/239.e6087c36.js",
    "revision": "eb02ec12ede1e54d05fea60994314bdc"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.06b9bd68.js",
    "revision": "1aa4a55561a6f3d4d45b12fd0fe49c56"
  },
  {
    "url": "assets/js/241.71226b19.js",
    "revision": "04e823ad19ff3421444da10745a23fe6"
  },
  {
    "url": "assets/js/242.df4f0a00.js",
    "revision": "9a20a9021a0a074eccf2db28f6a3d4da"
  },
  {
    "url": "assets/js/243.33a4143b.js",
    "revision": "67c7e602243ca0c3215d099ace18639a"
  },
  {
    "url": "assets/js/244.b98ffcc3.js",
    "revision": "c5d613ac50301b6c74f85d4a36c9f466"
  },
  {
    "url": "assets/js/245.475e755a.js",
    "revision": "51a5a9886cf1de89ffe94fb6afdba006"
  },
  {
    "url": "assets/js/246.bfdec2b7.js",
    "revision": "85c54f5f1b255d30b60650ce8e92bc7c"
  },
  {
    "url": "assets/js/247.5537e184.js",
    "revision": "aa7ac3ad2514deabbce022f2750145ff"
  },
  {
    "url": "assets/js/248.97f3463d.js",
    "revision": "02312416216dd9850ea6b10f09d53b45"
  },
  {
    "url": "assets/js/249.e5ea61f2.js",
    "revision": "ca9246b2dad4fa101cf3422fd69c59b4"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.fdd03f7e.js",
    "revision": "e7f162b0ec486a671aa728b376b5c8f7"
  },
  {
    "url": "assets/js/251.ce283499.js",
    "revision": "6058fbaef5456728b446290afc5dd501"
  },
  {
    "url": "assets/js/252.265001a1.js",
    "revision": "2b156caa93155569476fcf9a686c91fb"
  },
  {
    "url": "assets/js/253.077a60f1.js",
    "revision": "c1dc8de792867be82881c79bdc11b14d"
  },
  {
    "url": "assets/js/254.824a5f15.js",
    "revision": "d665d859f94797eb56516b20d2c4c595"
  },
  {
    "url": "assets/js/255.1b6c5c91.js",
    "revision": "251eb1e505da98c3fa0a77692106087d"
  },
  {
    "url": "assets/js/256.bb26582a.js",
    "revision": "e9771d406e483f74c140dda84b52eb40"
  },
  {
    "url": "assets/js/257.6c5f7fb5.js",
    "revision": "98d29b3c9a2052fe184ac01945e7b9d1"
  },
  {
    "url": "assets/js/258.66764cb1.js",
    "revision": "7d9a44d486e1b01f9e223fbc2c23a5f7"
  },
  {
    "url": "assets/js/259.609aa847.js",
    "revision": "af9cdc923f80db46ce37e27928a3a8d2"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.a2c96ad1.js",
    "revision": "a35c7927fccbc9b76ad130c076c01112"
  },
  {
    "url": "assets/js/261.a2b00524.js",
    "revision": "27e366bd61f3dcb9470cb6d354fa0a12"
  },
  {
    "url": "assets/js/262.723a050c.js",
    "revision": "e024ab43a52b73d5ade5a87965b01345"
  },
  {
    "url": "assets/js/263.1310efba.js",
    "revision": "1b17cc431edd04c9cad3d788a96a407f"
  },
  {
    "url": "assets/js/264.7d68df89.js",
    "revision": "57d7a9104da9d6e26dd33d6891ee498b"
  },
  {
    "url": "assets/js/265.e0f07e4a.js",
    "revision": "dbeb8d3b4101701b48dc2148aa5e528e"
  },
  {
    "url": "assets/js/266.408942c5.js",
    "revision": "9327dfe619457b609bdfb245638a245f"
  },
  {
    "url": "assets/js/267.0fde717c.js",
    "revision": "d0b8832a35e71b71b5dc230aaa5894f7"
  },
  {
    "url": "assets/js/268.9a5cc3b1.js",
    "revision": "8fb3808516d1a2e0da811f31b73db1b0"
  },
  {
    "url": "assets/js/269.7dcac990.js",
    "revision": "d839a4657d7d775ba607f4b2ef7c7236"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.319cab1f.js",
    "revision": "72786231aac4a10518401f9fa378f5fc"
  },
  {
    "url": "assets/js/271.d79d6e8a.js",
    "revision": "69e2c89413af607f8fdc1f8cacf758dc"
  },
  {
    "url": "assets/js/272.bf7d5c3e.js",
    "revision": "2795da519ea7ab2fc38ae50fb08bae2c"
  },
  {
    "url": "assets/js/273.d26bfb42.js",
    "revision": "dbee9383c520bdbfa350376506e20a6b"
  },
  {
    "url": "assets/js/274.7685e757.js",
    "revision": "3f676135301364965db2a202dbd79bf7"
  },
  {
    "url": "assets/js/275.8ccd0a26.js",
    "revision": "cbc8c83545655ec9708ba67d564080c7"
  },
  {
    "url": "assets/js/276.d55c2c9a.js",
    "revision": "5e5afdf4229300a7cb53cc624f4dff4d"
  },
  {
    "url": "assets/js/277.6868bf06.js",
    "revision": "1d4327d169c19db9186e32324e5f3ac4"
  },
  {
    "url": "assets/js/278.3a9e1a0f.js",
    "revision": "7414936c41e4a75270ad896d214e6535"
  },
  {
    "url": "assets/js/279.028abadc.js",
    "revision": "4c57b03de87a824be954b5b0d466d923"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.015d735e.js",
    "revision": "a6570e5bf1c6d9b71737324a55eabb34"
  },
  {
    "url": "assets/js/281.2251369e.js",
    "revision": "3beca3245667f47a684944aaf76f0a1e"
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
    "url": "assets/js/85.2be196ee.js",
    "revision": "9a185f9253a56626e88749d72e6023d4"
  },
  {
    "url": "assets/js/86.051f416c.js",
    "revision": "3b23d0dceb52c7606bd71b88fbb1f4f9"
  },
  {
    "url": "assets/js/87.347d1d24.js",
    "revision": "936c933f52923f6bc507450655a15e8e"
  },
  {
    "url": "assets/js/88.9bacb11c.js",
    "revision": "aab46b21872dee360cc562eee0d00d12"
  },
  {
    "url": "assets/js/89.a740ad26.js",
    "revision": "3a0585ead1fc5d39cafeccb883448a26"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.08e85631.js",
    "revision": "9eaa4432723fa555f54b3bbbd545e63c"
  },
  {
    "url": "assets/js/91.24a77b61.js",
    "revision": "b6be8e0fc94b94bed3123ee79ddc1239"
  },
  {
    "url": "assets/js/92.b21715af.js",
    "revision": "cc5bc80eaf77041ff633be20361bb985"
  },
  {
    "url": "assets/js/93.cbdd32d6.js",
    "revision": "d0ba7f7ad66c38819dcf337c82ba01f7"
  },
  {
    "url": "assets/js/94.6b4da1c1.js",
    "revision": "65bf6cb54b812b40570f2132c6e6319a"
  },
  {
    "url": "assets/js/95.db8147d8.js",
    "revision": "0697c4e1626218e2ccc23841bedad664"
  },
  {
    "url": "assets/js/96.7e890f79.js",
    "revision": "92b3e7b22784e1413ab5ddfbdc2c2dec"
  },
  {
    "url": "assets/js/97.c29454f2.js",
    "revision": "fb2a72ca5508be01488205507609beda"
  },
  {
    "url": "assets/js/98.b82569a6.js",
    "revision": "0c84949fbb029700ad85b866ed8d683b"
  },
  {
    "url": "assets/js/99.15b38b24.js",
    "revision": "38acb7fdce48c66ab2fce9b618802c7c"
  },
  {
    "url": "assets/js/app.3f930965.js",
    "revision": "6f4638bbebbdc858a9c3c0fcf9f5db42"
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
    "revision": "563c69a76b1003b8bb1a08439b717d3f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3ec042ba3fdbcb286ff3f51308b0687d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "dbd11cc9cd822f626fbd84db5fdf3e42"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8fbaac566b7a9b242cd09738ca82c780"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "898c920df34383939053d2aeb8166d0a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "042fc062c3a2c4bd340b5605c7c67165"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9eeeab6985c2f0784924cdfacca21e5e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "90aff88b426ab6993b8aa6fd4b53999f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4ce0b50ba11a0af32e088a02fbb6d2fa"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6c0f4006c509b324039338684276ac8c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "abcec282888369a3c58b22f8bbfffc8d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "7c702cc68eed07ffbf092d3c961887e7"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5e4660292194feeb532f23808f7fae12"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d08fff92680536c7609cbf6c6e6fc042"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "5f0e9be0c63df5a3c268a09e316d6648"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c89a4a7c326bf6e0b87f62031117f3d4"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "7a3ff88c30b7c97c811479a28c81e16b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "024ca7608361c63ca3d2d723f950714a"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c55d26e81cca2380d5655654fe327600"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ce9b0d422d924027b47ec2091b2d9a79"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "b5ec9fc79e7c162b8ff5f256bd77202a"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "cd6114cce1b61e96a8a8975bcb930ebe"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "d16610bcbcbdbabf789b512531dfaee1"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "417533e5e87f3f1fed8e79bb49eb70d9"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "d5af29565786c1650e279a0b6d346e2a"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "096aefba1c87280d801b0587bb1daa10"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "222e70e5e42efd67d3cf476a2c695319"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "4c6a00fd02e768a8ed75edafad08344b"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "d25c2439e6181afbaa42d277ed613ca3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "ba886b66ca8b378eeb2969b67101f343"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8159c1fc931e8ec6b714ed7c23a22ea5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "fe657b4244fd1656a58d64ef01759abc"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "4d100a232bf5afdf952ca82ea961263b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "0bce9db65e8c63a93bfbe16b31eb1046"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "44bc26df636d66c21254f0676b8f4cc0"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f14a51943a65723109f3c89da582f0da"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "5f587b931c562d8b0dc8b1d5edc49981"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "c34fabc4ab8d8f0e8e219bda873f380d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5ff5bd8eaa0a854b914a72f50a6836cc"
  },
  {
    "url": "basis/os/index.html",
    "revision": "d0b237d0e512317155a5dcacfe65a20e"
  },
  {
    "url": "book/index.html",
    "revision": "5853d1107a345377cf8de5ac5bf54447"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "105f8c58d684724725dceb94b2b2a992"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "9b17d39e39a1b5bcfaa16cf37ee94217"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "5f90e8c867413ec65a7e7c84e8e3211f"
  },
  {
    "url": "c/audio/index.html",
    "revision": "0a4c1d2f833658aa6e057f1b30224d15"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "feaae2de057107cdb737f9ae14afadfe"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "1ca0007c38ba37d2acf3a163c83625e0"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7d7357fd417cd127d32ad87099df38db"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "1ed724f7e8f2caf47923a9a2585cc9a1"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a5740ebfda1f44f7574c596f47abd4ea"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "0a5c0589afac1ec0d0f35dc5fae487d2"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "51a8fdd216980f83f8643373fa808254"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "c88178b1b7b1d87d10b2d3ee40c39c5e"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "674532513d9024fce46832760bacfb65"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "df5e5ae5669118b31b9c3802b3fa77c5"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "391c98bb3f862bc51195b92be597e782"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "d1d01d9cd64807d7d9c9e30eeb0145d3"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "474da96c0855a328db32d51e7c427010"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "dbb8bea062d93bea17b872c37e0997a6"
  },
  {
    "url": "c/program/index.html",
    "revision": "942386455fa7e225775e72df46fb3c61"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "64c4b92008f555a2b49ca12761e4af10"
  },
  {
    "url": "categories/index.html",
    "revision": "f9d338bf6d81aa8ce2e9dca5afaa16b4"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "4bb3ee7937d5d89d674fcb149fe8acc2"
  },
  {
    "url": "figma/index.html",
    "revision": "033d04a2150317622d19455cd8b34170"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "bcdd053bac62b1ea6af70247623969b3"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "813de28acd94766f41de705c0d22befc"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "fed95a4466cb7941b00501e3232cd996"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "99b9940bf672bc92ff41d19bd393bf1a"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "cbe7ae9256caf66e4cdd18e4977c0d29"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f03ccf1199b5ad3839f4e652cc043565"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "dc96f51e5348107f4b5b1a3dcebd1d99"
  },
  {
    "url": "flutter/index.html",
    "revision": "613dbcd4c28898f12e641a00c2032686"
  },
  {
    "url": "flutter/point.html",
    "revision": "350b828d39b1265237d69760fbe8c400"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e265fde3647edeb296b924c09efe5131"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9f0b3a415965b048a962c3de37cdf118"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e46304ecdf68c7f949787866024a6b81"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2d18395482a25a2f8e4671ebcb7b6f1f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "90d30773c7fbf0cd1d160de181017cb0"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "4b1ce77005d8753ef6296400153ffff0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a32a34357c3b5c7e1a4894d5cea7adf9"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ecd84249595f7af50a975f0fb83f6ca5"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "bb5a79f679abc320054df29beb482032"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "95c2a6ba499a459ae3cbf9e93f58ba6d"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "3a3ad28791257fbc578ebe4ae7c3dca5"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f50cfc19d8e27985288f03b323a8538d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "97c58d8db81f0c1713372c0789572e25"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "7a8be8baf74fb495ad168185565e3322"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7fb7e5fd5107ea2fe06dc05d0429f507"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "34a9e7859b9f16597ad2670ba2f64f3e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "32e52ceb0b5c91b47b9b0d5ace35483e"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d9e518f7aa15f55245cb81caf640f6c5"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ba928e9bc1f7e91b858f00c254a42860"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "3dbcf6cf1204a341800dd7143e4d5d98"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "4008bf8022d27241e847b275ae74d641"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3a2481b9bd8a3d8e80c9143ea2bb6908"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "fcbdf05735c115e5997918c980f0536f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e1be6d9c1f3bdea0b4b98d9ae37b6f57"
  },
  {
    "url": "haskell/index.html",
    "revision": "0941971200fd389d52183dbe066bea2b"
  },
  {
    "url": "index.html",
    "revision": "bae083e8956869aac1d6a67a785a9551"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "255990863482ecfeff58a4bc10d7a272"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "4308ca4a0bbff15632d122de98f1de74"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "63aeb36edf73e2a739065956f7e4a014"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "373fcca05e2fd539c5eb2842ff234710"
  },
  {
    "url": "python/index.html",
    "revision": "7c43cd731d0c32e02e0516f23e5fbd69"
  },
  {
    "url": "python/python-ase.html",
    "revision": "8324a53ae776d780e72f730a27d1089a"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "94252919c282dcbde50293511adecfc7"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "456ded335399907f5619da5c78cc31ed"
  },
  {
    "url": "python/python-file.html",
    "revision": "7d1bb568391fe9ef3f285c97b7fe8d5e"
  },
  {
    "url": "python/python-function.html",
    "revision": "5c5b9452fe92e384e7b89b7905744f9f"
  },
  {
    "url": "python/python-generator.html",
    "revision": "26c037aa3eb5aaa114a554a4b6dfd046"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "4554275cbfb81c42533cf218547c5e68"
  },
  {
    "url": "python/python-module.html",
    "revision": "7616a99a8c2b549767e0a5ccd35f88c3"
  },
  {
    "url": "python/python-string.html",
    "revision": "9c359822a6802a927ccb6f300a2832d6"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "d8d327241f404bd4ed231f09f8829e77"
  },
  {
    "url": "read/index.html",
    "revision": "f194c40c34c7d6e425e723fc52e153f5"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e8fc851783ba6c0e661fe5b157d9b825"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7431f577949729dbdb9baa05ec80401c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "ffecad3553eea1ad4f7471c82f73899c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "79f9f915323ffb0f9ab5b65aba886f0e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "88e163fb357d38aa31bb4b54d910a7e7"
  },
  {
    "url": "swift/better/di.html",
    "revision": "1b78b4be42c6301d8b52d34bf8a704ac"
  },
  {
    "url": "swift/better/index.html",
    "revision": "adfb10324005130e145aa077dd1ac21b"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c59cbb3f1070dbcc2d37422662724cd8"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2231e35597eac14e63b6869f178c12a9"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "78c5efd6fc201ab5bf86f149e9110e64"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "7995b3a53db12b431b400643058ea4eb"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "fd7ac7a00d04f5d45365ed0eb1227680"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "8ddf311e2845e83e0818d61e522ec1fc"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a998861cd3c5882348437e0e824714de"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a2b1cb02c3469d50e657077f5b85dc52"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "86898ee329b3c5b85c41b859cca6790e"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5070c814bfb1bb711b261fd59a68a325"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "436aa7a3ac17330266179aba95d3bc47"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "c6bd720995cdb9a06a0a8616b70189b5"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "7f3c6eb56fa8286a974268233fb8e7d2"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b9f33f9cfc270578d9d551188b1061ce"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "439905d2df3fe68332d9ed7ee3b31093"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "5b2c31982857d3ecf886110a25a27180"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "6f9b4bc3cabfddc9e1510949b4966086"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "606c37ba5864d6cbf48339bbe35c4a36"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "24906b7d1d3421bd0be5f1be938da3a1"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "939422ea444024ee60add9bfa18b4a91"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "61d5ed302d6dba85bb110d748f8f9785"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "d4fbfaa7d1ce4424a1b13428b5ac4048"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "44f44231b66fba49ea5a40f39cd42db8"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "298f990ec7e837fdb5a27ad91e4d1959"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "93aacbc3b334f7313d81d14d0889be42"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "036b3d68deabd0051cf479dcc397d6d9"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "5ca758ea0f3139c6cec8b6d29efbe32f"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "f44d758f97307b7bdf1fa9461f20f26d"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "e7c6813d229480f4ed7e038cfba5841c"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "e77cccee6f24fcfd884670d772bf7583"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e8b74b74daaf1a854c41fc4f11ae16ae"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "5824349ad4b487f24a4f33c0eb41ba14"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "78c7556493746319c6dc5d1fb922162f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "79d168caf4f4a2d6cc1e045a3eac889f"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "5952485c321d7fdc49c3444fb5ed9f3a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "317d040c34ad8e26e5210fdd41fb23e0"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "1e8c19f9977b1c4326ca357eb4ede6f9"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "345c62489dfca2b61ce9dc9bc1f00f15"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4c8d06e68e1e553b5624fa1d0a81cf2c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d1c6b6ae43599a420754052d73018b02"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "722ecfd87d582109f06f9371cbd00d1c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "4b85c9cd5bbf65f65f96a01383ee80ba"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a33c5e9ebb665a1bf58d6bf906741274"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "33620915833d61979662e964c5336218"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "637364f25855f7def06887c1f7097846"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "df1e776e13eeb5317fa34cd4776476a2"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5d3f13f7eb1aff771c772f0cc91377f5"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "cf2b9f92f66e23837d65dc3ffa1907f7"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "c26d9290769ed838de985404de3a1a2a"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d5b6c6bae78518dbc8e1bad89e1f730a"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "aad7f215e57f28736d2a74d2bb142e64"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "a22e170b08468a8341d9dd597a2a0d45"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "cfb3f18fc1b18cbc88faa8d321d72912"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5cc4c0b13a15091e72817e8bfbbc6d8e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "924947700eac3cba90fdf45e0fd9167e"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "8503f6f47e8c67958e6581339638234c"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "e1a73d638cf49d8b4ae9dbeebd87b19e"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6c7237e6bcf3e850219a0599780c5506"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "8c670939299332bb336437889cced7e5"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "97fbb507d967281b14bfd56faddd2be7"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "446cf5c73a54968c65b92e2a2aeec226"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "36f5b9c8b3b94bb117008a3469a23720"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "68241518602f1973cbfec155f6e66237"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8dd30403a27a4e72c5a3f3ac7edb4951"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "3334d3ad8310df2632b34cd62ab322be"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "2b891c0ad16911c5f4d5810e93efa3af"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "7a694c1be656b50230761c5d987fa413"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "7cf795c3828b6868aab6c8f0631d752e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "9838d0ce2dd7636bfc93ecb6119ea277"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "0af4e041fdcfc25a67bb25cead4333a1"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e46a18c24af158d52a4d53215dc994f1"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "066ba8ca6f8f2b1f0451e6efb06b42bb"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "8cd06a71653a34ccb5322a1b97b81103"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "c429bd86dfc4dcbbc8452f42ce252089"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "788682b33e168d1f95dd374b4cf67a1e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "49263d01faf550616e06a3edc3a5ab44"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "128fd516fcf1c9ef5ae95258e51d8532"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e696b181b48cbcc3ea3993d5887e0852"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "23d47f0e02262e5b8bc21d59d26c4e8e"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "04961cca6677f6e278005f0b1384c08e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "378917e0607beeaae3d0b5e4660981a5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8f08917531a1cd19cc0c25e2b8a2d70e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "1f16f3952937b54c9ff25fd5f7ceae0a"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c73355dceed4d83eba113568773e7d6f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "1290c9c5eb5c2dea9d9355fce79309dd"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "58b63f22f5f7066e8ea368468601af7c"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "095dec56ab6fa2dea36e24ed6be16737"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "75be3bb8d3cdc620f9c4b675c1535589"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "9dd0383fa58a5d130706cffe6d59cc16"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "9c0873c54a6fd7d01144584c4796c549"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "eaa5f37d1c02d054caef83e1b65e2107"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "910fb4b9b88d749cd1fa296b237793df"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9f4ee8321826f893aab757b3b66a610e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "bb86a1f106c2c06cb7f47093b1f09c99"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7411d78b89325e247998ceef85211e7e"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "2f6e5468f62fdefbfb7416eed7b62202"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f63156ba864067102ed68e5d9a46637f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "bf4a3b471e0bb0ddf14214b793cef610"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "32ea968447b9c846cfb140a1b0415733"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "3205657b928b7fa10e396b0089674462"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4fad1aa73bfd0aebed34294cd24a9532"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "d7547102d8fc6103e535dc0fb1817027"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "58fb16fe4479a41b6447acf05545991e"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "cac5e6c64f15092247b0d40ca21c79fa"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "70537adfc0e5ec8c0e45aae3df28cd59"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "7d048b57a116b2d0c7d8a7becdd4e8b3"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8c3bae6ee4456f379ec0f13145197407"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "995d3bbbd70468029c543a997f7fa075"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d9c586604bb66a310a9e7314ea6a2b37"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "65599b20b5e4f531e9ec723e2bfe6f00"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "6f2cd4a2956320bad742277f6b86ae90"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a92f884922cc30d0c767c8e4630c20a2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "7b81096031b8c163ffd3376212f298d6"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b931deeca4e7b9173956ecaea9f7fa85"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fba79216aaf4769e090c3e90a8fa416f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "853f2454b7e6651dcb016c61a3d0be71"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "e74fa601ac26e614abde0d7cb99d5e0f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "58a2adad1099a46e94792ef103870413"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4633f6f5f7b12839a6cdc185c092b0be"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "fa74d926ea86952c973a331c4b70538b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "122a073797c22f748e36eae10adb14f2"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ed0d5f7f6d2d5c5fff3ea6f904fd9650"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f04f0d0baffe40c6ca985356a4c31c94"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "eee9435a90fcdaea0da908d6fec5f4a5"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "5b47af44090c7f8c31fa7c1ebd3ab563"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "75bfb057d4b64a693b57d57518e6ab0d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0ffceb123aaa91b0afa084882568ece7"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e00660c6fcfd247410394f795244e393"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "da5f099dc88b8fdbb03f73fd5bab9269"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "6217e5976a0a87aef3e4f3138efc4c3c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "7be2d602a9d516084a8b7677cd4b7941"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b7500e38be59eb64883666d04d331de6"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c7501ef33d17196e8dcda8d93fde01ca"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "457f20b463ee0e8df82d4d55dc2739eb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "09ce06bbb7d81f80deeccfc691690955"
  },
  {
    "url": "tag/index.html",
    "revision": "eae7c39bef276a909a1c799b0320e764"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "50b73c960e7fc608e6672fc69f4cfb01"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "6083ab8ac342df13232886adaa9a88ba"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "197aacefbd7b59f2dc13c06673f01697"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "97f6b774ba91b14a41b8e8ba60869c0d"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "4c0b008565e4aec7ddae025fea693bd9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "18380a712ff34f05d671206381dd1ec6"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d8c258b5a7d9e4a5eca91ec9c1dda113"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "df29e86cf7659bf08f177f49de1f29c4"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "2eac1969f9c855596891ad8d616c2277"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "db2b9517ccbbcdc62c80f3166617cf27"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3fcbe0a96f28f8cb181a57e5f6838bfb"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1aa347694bb245ce22007302ddd7998e"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "e7b543b243edf01761d05f7da1a22a18"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8094e4a97636a6d2fff2928a80d8dc89"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "74cc21916510ce526ff7a22d304fd542"
  },
  {
    "url": "tag/read/index.html",
    "revision": "5e6b781a421e285a013292e8209e54b9"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "4e3b66c3c1d2e9536fad54ecb01a3052"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "51fae5428fbeef4f6516a345bee05cd7"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "0255977cd4ec9d4784380c351e408abf"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "244ea4d0d4bef25cc995def4a7166497"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "6ad3a97e66b7dc511f742e496b336594"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "d7dd1b008e0722546b4e33233289925e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c6f6091cbd47350294ac2f4bac31057e"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "9aaa2753047e70e78ed926707cbf032a"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "82c82c76c70de744306f59c8680fcbe9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a727e634c4638959df43ad5efe8ea975"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "116f19e4ece08cb229627831770cd504"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9df90fdfb05f89ae733eaa641f94656b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "029465f67644fc74cf3a69a1a52203fd"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "96342a246d82e996abee5b5344f4c427"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e9856dfa9ed47e2425e4c94341223d07"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "cf930cf818ef08be272c4d2f3d861598"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "78710f4f9e60f158035ae2ee83bab2ef"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "36251bca2df3364e63417991b5816dec"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6bc7a39856733b4ea5c5f4be43ab34af"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "040dbac881aa5ac88c4e421fb7a055b0"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d27cd4261d8e770725aaaf5789a8bec0"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e0881cf51fcbbaad7b7922a01862c082"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b3a6dbb3daec52cb3080e3450ac8c7a6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c739d46798bba15eaaf3109fac11cfb8"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a5e97d9b4cab743e31c02c1a576c64e9"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1e08d631ddd8590bb2c0f91dbb3f5770"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c2ff66b997890f4dac10a31d0f94ccb8"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8d622295a2b26525d2292431d27567ce"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "63cb6ffd1451b4d0bb5819a37febb35b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "adf990c074a5116e24857bd960ff46ee"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "b847473bdf34aa220c69884bce1ced9f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "15d6c90ad5bca05596cc8019b5ff84ff"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "611fa82c8ad5dfe0596b5fdfee4fbf68"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "53ffd01483b5e07df5706b7ea596642f"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d05218ea862d0eae4852081a9e3823fe"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "351e619cb20adb74d59b431d32ba905b"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5a6c8794aa992c8fcc8efbcdfa5cb5f6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2687df2b4bfa7e4159bde7303afac55a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "e72b88a9148de0fb904346f66272dd7c"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "b0a6429cf204f44810b0216dbcaa2754"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a5f3e3233bae159bd94990fd5a2be642"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2b44644d9d188dd2dc33528fda156bbd"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9b452c4cfd5f8788974481d7bf8865bf"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "58967eb7b7e04823f12f7f6b6b926754"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "76528b3a77f057078277ba7c9c9edc8e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "03597c1ec636179ab71fa3c8715861d0"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ee17814a78ae6ded24861660e4fb552f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ed0f6ca8ff0b61260eeabd67a878bf95"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "52c82b3115003dbe48564456bea78b7f"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "610fdc40a95623b73fc174f08e18506c"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "af20e74f1cf654a429f056f3926ed494"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "829ee544c6ad167f03a31d558d318204"
  },
  {
    "url": "timeline/index.html",
    "revision": "dbd39e05dc1142accc4156c1024ea42c"
  },
  {
    "url": "tools/docsify.html",
    "revision": "076feff934c97d57c544e7407c0d4b19"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "4e348370d05c5320681667b488711f37"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "7c558f3fc26fdd49d159aea2f19bda53"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "13c5984799406b744e6cf944d62ee24f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8327c4d31421222b20e990cb6844299e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "33741be127b6667c0f6510fe1ea39ddc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "0fb5ad930a10afd179605c35cbb41d94"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c02d2abbc91c009f9fc563665938c54a"
  },
  {
    "url": "tools/note/index.html",
    "revision": "84d0ece48c9799946445b2326cfe5171"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "03cac4a870485915689963fed60760c7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c50b4ac28034a8719739f827574cbaff"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "46de05956aee9cd325062dd17f1d318c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "992969f9f79deb6b165b2aa2cc2b2ec6"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "04bbc75734663985f202d40f431a950d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "423f97b83d91fc83302a855d69ec88a3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6130694fc978a7ab728359067e4e8a97"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f3f6693691e9b45bae20a5a454062645"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ed0f5dc78acc459a0f430f106b62f4e4"
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
