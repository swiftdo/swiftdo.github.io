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
    "revision": "ab918d05b33f1400478f51320115193a"
  },
  {
    "url": "about/app/index.html",
    "revision": "48e2fd1de2a69ba35283315a7b796f6d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fe6543c964882da59bc11999a767b7ea"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9ea9cc730c67061775b19b94d550c1dc"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "640de2dd3fa98a9c3cd31b45837d9c38"
  },
  {
    "url": "about/index/index.html",
    "revision": "c2dfbcce21f25a3e09686aa7ba86dcb1"
  },
  {
    "url": "ai/index.html",
    "revision": "45d75486c5811220657a302ff6f515c1"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "946f80ba55b2a5b4c09d34b4d50bfb84"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/100.6ff341de.js",
    "revision": "ff786dddf4b78c8c7ef0fc5652e0cc91"
  },
  {
    "url": "assets/js/101.6d0749df.js",
    "revision": "dc1bac2f7b35a9737960e15f72408019"
  },
  {
    "url": "assets/js/102.8b8e10a0.js",
    "revision": "20b0e58cad24b3dfe934559c01cbcc48"
  },
  {
    "url": "assets/js/103.f354f916.js",
    "revision": "9ceecb0a225a6fa344b50e9160832392"
  },
  {
    "url": "assets/js/104.735d767b.js",
    "revision": "c6b11c54c24009e4de35ba444824bee3"
  },
  {
    "url": "assets/js/105.cb7cda89.js",
    "revision": "a1445c75b2aed95b81cdb15729bccc99"
  },
  {
    "url": "assets/js/106.a3b61c93.js",
    "revision": "1ca52806ec7a5bf43114396f9b8f7725"
  },
  {
    "url": "assets/js/107.c03b3235.js",
    "revision": "3e27aecf0cf44adc467d862249ab66e1"
  },
  {
    "url": "assets/js/108.40ebbab0.js",
    "revision": "91d1175f913b8dc672b21394bead7967"
  },
  {
    "url": "assets/js/109.268d0b73.js",
    "revision": "74b014fc807c72110e87162a63783529"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.34dea704.js",
    "revision": "64245c844d18db0c728b971c1af23785"
  },
  {
    "url": "assets/js/111.ead4f107.js",
    "revision": "3306585a49997bb92d238dca43011504"
  },
  {
    "url": "assets/js/112.ef99ba09.js",
    "revision": "aa25ffd02d365c981f1504a8863c81b3"
  },
  {
    "url": "assets/js/113.50dd4b3e.js",
    "revision": "ff413a72cbf014529082fc9317431897"
  },
  {
    "url": "assets/js/114.80c7105f.js",
    "revision": "3cad9bf43d66ad0ff898ca28001511c8"
  },
  {
    "url": "assets/js/115.0cafde90.js",
    "revision": "cdf1ede4e74b155f65adc2bd25b16e85"
  },
  {
    "url": "assets/js/116.28ba02fe.js",
    "revision": "3bb9d17e9b1334eaf83b5e3da514ec3a"
  },
  {
    "url": "assets/js/117.49152fe0.js",
    "revision": "e6cd429cc45c6ee5e1d030f593443d53"
  },
  {
    "url": "assets/js/118.fba4bf4f.js",
    "revision": "3cf0f562a55a2a3021d1e8e4ac5ccf6c"
  },
  {
    "url": "assets/js/119.88389a07.js",
    "revision": "1d3196d9843edf9fede8a5a222bb6aa8"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.3a3336ed.js",
    "revision": "16598572ee7f39a51cbc2fd4d1a6979a"
  },
  {
    "url": "assets/js/121.bf690c4f.js",
    "revision": "a965d948f3753abc5cb776ffaab362ca"
  },
  {
    "url": "assets/js/122.fca0342d.js",
    "revision": "0e2c8b2b8a825b59a02e5e3ddbec9535"
  },
  {
    "url": "assets/js/123.41b62249.js",
    "revision": "5350c88e2571fdee83ca2916192d86ed"
  },
  {
    "url": "assets/js/124.5aada71b.js",
    "revision": "8e5f283ad74050f8d86ce831bc4d7ad7"
  },
  {
    "url": "assets/js/125.028397b4.js",
    "revision": "8157e5576f1362727a935d6a996bcbf5"
  },
  {
    "url": "assets/js/126.5f4725c1.js",
    "revision": "72eae3e1509ae338efa1a7bbe75da43c"
  },
  {
    "url": "assets/js/127.4b86c058.js",
    "revision": "6357a8db229c535a481001053e0eb87b"
  },
  {
    "url": "assets/js/128.6107a89a.js",
    "revision": "f386446c1c8ab4a1e787a796c4a75d90"
  },
  {
    "url": "assets/js/129.06cf3481.js",
    "revision": "b3210946a6bedb993fc328df91e20f12"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.97abc4c3.js",
    "revision": "36d4359c31bf3dc22d2cbaff16483ccc"
  },
  {
    "url": "assets/js/131.c50c4ef0.js",
    "revision": "8232588dfc864cabff4c5ad49b5ca47b"
  },
  {
    "url": "assets/js/132.346772ec.js",
    "revision": "5604123dd5fd2a90477c95bd1bed84cb"
  },
  {
    "url": "assets/js/133.0baff1b2.js",
    "revision": "086fa3a17fefbb69de4839678e325216"
  },
  {
    "url": "assets/js/134.46a4de00.js",
    "revision": "04f85772554fe454016619536142ace1"
  },
  {
    "url": "assets/js/135.19a36428.js",
    "revision": "9d80f4364f15f2d2c55e8e71a486f9e0"
  },
  {
    "url": "assets/js/136.6d945d82.js",
    "revision": "229d1d39ed1365e6f34786156fea9c75"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.8fef25b9.js",
    "revision": "590266b039effecf37f6a0110ec3bfbf"
  },
  {
    "url": "assets/js/16.f89849c9.js",
    "revision": "23693783f3355ecf4db7a506504e15f1"
  },
  {
    "url": "assets/js/17.12cea87b.js",
    "revision": "6fcc657469e57453ad0e9a647b72cb0b"
  },
  {
    "url": "assets/js/18.1736faec.js",
    "revision": "377e7c50dd84f74a4ec01fa04e1d6aad"
  },
  {
    "url": "assets/js/19.c87e256f.js",
    "revision": "de9b442b63e0d275cfe1fe60dfe35e64"
  },
  {
    "url": "assets/js/20.8d93a411.js",
    "revision": "b208555257c4e6839b3eee461090c2b2"
  },
  {
    "url": "assets/js/21.29f0a307.js",
    "revision": "ba023177649a558e72993b0d8e88e9f6"
  },
  {
    "url": "assets/js/22.e9e0472f.js",
    "revision": "3f886781040445b2ef9fe330cea1b147"
  },
  {
    "url": "assets/js/23.fccd0833.js",
    "revision": "0f9970c970765ff56b5ab741cc9cce7d"
  },
  {
    "url": "assets/js/24.35d73e3f.js",
    "revision": "b6bc2503ed6d671dbf58b7dd347dbd6a"
  },
  {
    "url": "assets/js/25.d7199ead.js",
    "revision": "ca97a9754f9a54eebf772c95855ff6ff"
  },
  {
    "url": "assets/js/26.9b223ae1.js",
    "revision": "7392355af61f204e4b2edf4ed97088d8"
  },
  {
    "url": "assets/js/27.263ca047.js",
    "revision": "da34fa8fc63dd42aee8cf648c0ea28c3"
  },
  {
    "url": "assets/js/28.052622f8.js",
    "revision": "e78de3fbeab8bd23cf4fa6bf29ece086"
  },
  {
    "url": "assets/js/29.e2080783.js",
    "revision": "d014607d6e2f0682b80900ea3592ca9f"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.1421ae8d.js",
    "revision": "322d5212beff73ad502492c1e3ab946a"
  },
  {
    "url": "assets/js/31.cd6758bc.js",
    "revision": "d1a061f77ab7ff2337018be4630d49d7"
  },
  {
    "url": "assets/js/32.60534ab5.js",
    "revision": "e515f31065f500c2219bb52451fd8539"
  },
  {
    "url": "assets/js/33.eccf569f.js",
    "revision": "fd818223efe47f2845477eb1f4148bc8"
  },
  {
    "url": "assets/js/34.75832252.js",
    "revision": "156a954491999489caed963c5f3d13fc"
  },
  {
    "url": "assets/js/35.43bead9f.js",
    "revision": "cd57561867fb05efbe3422fc20321cd0"
  },
  {
    "url": "assets/js/36.898079a7.js",
    "revision": "ac7547433995eab25fd14be972b15742"
  },
  {
    "url": "assets/js/37.50755570.js",
    "revision": "ea8e736162f1a05908860370c41e7e52"
  },
  {
    "url": "assets/js/38.f55b201e.js",
    "revision": "d18e46e57950f77094d6dfcc269ad508"
  },
  {
    "url": "assets/js/39.f9a31bca.js",
    "revision": "88b50da59806fa949985866385322d86"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.3f6932ee.js",
    "revision": "436955126c1ab54cc3d1b1dbdce025e7"
  },
  {
    "url": "assets/js/41.27b9acc5.js",
    "revision": "50a0cb5347f4700082e3df190eeb22c5"
  },
  {
    "url": "assets/js/42.f02bc052.js",
    "revision": "3e021e4857140a1c9275e0a574149d79"
  },
  {
    "url": "assets/js/43.a5cfbc16.js",
    "revision": "72f5b553fc72f2a705b4f01fdf38c315"
  },
  {
    "url": "assets/js/44.165c4c2e.js",
    "revision": "874fce4d4f94ef453d2bebf265eac208"
  },
  {
    "url": "assets/js/45.328e6a6d.js",
    "revision": "011fa63fee0918211c3226042efdfb42"
  },
  {
    "url": "assets/js/46.93b1c5a5.js",
    "revision": "f427a79669fbb6f0d4109beccb783fba"
  },
  {
    "url": "assets/js/47.dff36465.js",
    "revision": "6b408ef77725e1629de8ada5f3d790c7"
  },
  {
    "url": "assets/js/48.589a6d3e.js",
    "revision": "e89890a7e42562986121d9ca24bc780d"
  },
  {
    "url": "assets/js/49.8b8616f9.js",
    "revision": "97fb37187926d02775ac9876f1888c02"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.033dd99e.js",
    "revision": "9f744ba525d754cfd056082a17efdcd4"
  },
  {
    "url": "assets/js/51.f03a49f9.js",
    "revision": "adfd0a3c8d017e5766fe6ddaa04cb028"
  },
  {
    "url": "assets/js/52.2b1111ef.js",
    "revision": "3d22204b6c35ba05adf8980c5aa2567b"
  },
  {
    "url": "assets/js/53.aefb21d2.js",
    "revision": "b479fcfdb3991d0f456415afdac65f1f"
  },
  {
    "url": "assets/js/54.e1fbf6b3.js",
    "revision": "00f3fad1700dcd9242a4b3b3a48c01f8"
  },
  {
    "url": "assets/js/55.d8df2c25.js",
    "revision": "3dde59492056ec36910b30be7818d972"
  },
  {
    "url": "assets/js/56.e55f54dc.js",
    "revision": "fd3f9ed505ceba07908b72bc0dbf8600"
  },
  {
    "url": "assets/js/57.862344d4.js",
    "revision": "3452d9d43295606727eb1ef5b0696817"
  },
  {
    "url": "assets/js/58.7315dbe1.js",
    "revision": "e72055344901f0a3a85cfd30d77c501b"
  },
  {
    "url": "assets/js/59.cdc00726.js",
    "revision": "4c0d674617bf2bb8d669eabbc10b7a3b"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.e78fe802.js",
    "revision": "d11f5385ebb848cded938eceb1fe7667"
  },
  {
    "url": "assets/js/61.98d52788.js",
    "revision": "c9b6eadc0efd12e33debb94bd9d5129f"
  },
  {
    "url": "assets/js/62.0ec3e2f0.js",
    "revision": "22f961ea955e15c2adfc2bf455f2e498"
  },
  {
    "url": "assets/js/63.f2df63cd.js",
    "revision": "bc72eebf1ae123dd83e553a01ef99714"
  },
  {
    "url": "assets/js/64.c3b70501.js",
    "revision": "ba010c17916315a244818917d9eca75e"
  },
  {
    "url": "assets/js/65.fd4dc2d1.js",
    "revision": "1aa4e56d985773e6ad39392c7464b18b"
  },
  {
    "url": "assets/js/66.b9e418c9.js",
    "revision": "0122d4e7bb1291bbf0c8a7c4601dfb13"
  },
  {
    "url": "assets/js/67.a730a9e2.js",
    "revision": "7ce5b856854794d32cddce8bbcc15252"
  },
  {
    "url": "assets/js/68.4eb2dfd8.js",
    "revision": "b60f6d8249c91a26d38482c16542451b"
  },
  {
    "url": "assets/js/69.027b4107.js",
    "revision": "ae90b91b19dab6da84ae1d11cbe03168"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.afbfc5be.js",
    "revision": "7de800548a736cb19f398bc7fc6865b5"
  },
  {
    "url": "assets/js/71.e0363b74.js",
    "revision": "e7e50e0b63f5fddb0660a7244644d29b"
  },
  {
    "url": "assets/js/72.d9960420.js",
    "revision": "49ffe9900e5e76d7bc71afc667cd92d4"
  },
  {
    "url": "assets/js/73.487d1942.js",
    "revision": "0da22d6eb1f92b8b7c9dd476e4a68f2f"
  },
  {
    "url": "assets/js/74.ec37b744.js",
    "revision": "f9eb88b82f27e9cef1bdd33c697d106b"
  },
  {
    "url": "assets/js/75.17034431.js",
    "revision": "4b869a35c71532dd0db63c346489138f"
  },
  {
    "url": "assets/js/76.f0446d93.js",
    "revision": "b593129e674d0c50f748c0fe496557d6"
  },
  {
    "url": "assets/js/77.7f69e2db.js",
    "revision": "fcf94266e92c459e031d2e8bfe1217ae"
  },
  {
    "url": "assets/js/78.f475980b.js",
    "revision": "0386735391b40286048d9788edcf6169"
  },
  {
    "url": "assets/js/79.392ada74.js",
    "revision": "2ba44610ab750ca8f4872e9198d04cb9"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.275f01c9.js",
    "revision": "ba66f04273ebd816e19033a4ea9b92f2"
  },
  {
    "url": "assets/js/81.495bc7ae.js",
    "revision": "f8c099b417f36720037e8072f7df4228"
  },
  {
    "url": "assets/js/82.80989db6.js",
    "revision": "a446c756adb06ac1615b11e17a4d4c03"
  },
  {
    "url": "assets/js/83.6aed5d22.js",
    "revision": "4dea07e2ea5980fcd05b0531c2ecd682"
  },
  {
    "url": "assets/js/84.29577caf.js",
    "revision": "18ce21e28e24db179cc06f0e97317f13"
  },
  {
    "url": "assets/js/85.b4a6731f.js",
    "revision": "fcad74e86982c2d2a0e964ec9d37b88f"
  },
  {
    "url": "assets/js/86.2d1c7168.js",
    "revision": "35ae785c8c89924471b73108d9cb5529"
  },
  {
    "url": "assets/js/87.6e2812b1.js",
    "revision": "19440e7d9049c6c4ca245b1fb80363fd"
  },
  {
    "url": "assets/js/88.229c99d2.js",
    "revision": "47e4b39f2ccbc5cb8a741f94bb0bc4cb"
  },
  {
    "url": "assets/js/89.29874495.js",
    "revision": "a3b4af0ca9162de0b1fbc48dfe53fae7"
  },
  {
    "url": "assets/js/9.082e4631.js",
    "revision": "9f6c5862116317bffd70c72fd6af0331"
  },
  {
    "url": "assets/js/90.11ed8530.js",
    "revision": "e9f95f14e6e9937a99fa516a00517cc7"
  },
  {
    "url": "assets/js/91.0757e68e.js",
    "revision": "6fac12c616911b3dc36fc15500037c36"
  },
  {
    "url": "assets/js/92.c69a9f2f.js",
    "revision": "1c0ae4339733883693132e45e496e975"
  },
  {
    "url": "assets/js/93.1d9cff4d.js",
    "revision": "b4d8ad8a7e9c15354177dbc80ceeaf75"
  },
  {
    "url": "assets/js/94.2f0da7a9.js",
    "revision": "248c59ada67db4cad05d7e30bae36b51"
  },
  {
    "url": "assets/js/95.810769a7.js",
    "revision": "5aafb6c1087462a66f3320648711b2f7"
  },
  {
    "url": "assets/js/96.3221c438.js",
    "revision": "f65c5880b4a18d483cd7b1fa75f8cdd5"
  },
  {
    "url": "assets/js/97.ca794873.js",
    "revision": "290f7936ad69a9b79391c7f0530d4e3c"
  },
  {
    "url": "assets/js/98.3266c9e1.js",
    "revision": "542b1e85b6d619ddeac013341db6c1dd"
  },
  {
    "url": "assets/js/99.41cd39a0.js",
    "revision": "8f5f697b17fc76f1cdf39bc6d5eb1b5a"
  },
  {
    "url": "assets/js/app.36467a4e.js",
    "revision": "9880543a79cb817b1c2d60057e97ed90"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "6ee05d934a4fe4d6d43a320022627df8"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6578906be5fd97eb6f1939985de47191"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f14f25aca92cf2bc062048bd4ab28386"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d76382d99a2d3d510954896bfdbcfd59"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "819f7beca18e4fdbac8d697852ebd1ae"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f74910740e849cc6369a21a43a7554e1"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "8bbf383a68d357c7b17469e1573f1930"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "839e6b0c938e45b595fec469d8a7d759"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "8520956ae4aa4a12c8e11ef7017e8807"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "16c4c2be239698ae51b517e32653199c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "862d09033621731b44a6072dba167309"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "86cfd576f8282b06f4ce9d81f29b94c2"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "52de9a15eb3044fc1327211e2910badf"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "73c1b5abb185d48916eeb83d3927829c"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "25cb948854cee984e30355f7c231f1d2"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "6e607975f51c2c5e00992808b4fc63b6"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "de87c29ab6a3ad58f12b9a9df061cb3a"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "18517de25e09c2491ede82b8be277e51"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "015c67748e9ee8b37d362667bd56cd30"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "5bdd9f3a06a2578d4e69be9c7b194dee"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "48539cb3a821d43d47c85f65cbda804e"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "f5a419abaaae1620db070e7c44d77506"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "2b889185fab8ebc729e297f7f661ff62"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "839c8c11e535cc340563b3afe87d1fed"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "b840f4f920d6d4df616d2d0bd977d4b6"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "2b3222d0fa1e914750930aad66a0b91c"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "ebb2420b14c20e1b4a9cf53e62deb707"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "9a2952442d8bebafc09dee5c947112d7"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "f126ef5514c22bd4c19b3b560d018cf7"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "469bd050f3d40dd124d6bfb820532ca2"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "a27b3c7e60b35dcc533560c3d088cbf5"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "64ae4c5f04e978685bdec98b88c84ce6"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "726cf2c5a2bddcadb52913ae4dc4737a"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "589ca4f144ff1d1fe50a142472851ad8"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "01717e4ef9fecb96abdf8b670a7552a1"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "8cccc3d82beec8ae02f28f18bc0e50dc"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "121a4bcc7bc361dd56b9409ff3855186"
  },
  {
    "url": "basis/design/index.html",
    "revision": "4ac2da28561ad5c45a1366b6934a3a35"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a45c3b96be0306463fc4a3fbcfdca23a"
  },
  {
    "url": "basis/os/index.html",
    "revision": "4aa5de1f4dd30c11bae390b11b77b3e0"
  },
  {
    "url": "book/index.html",
    "revision": "8281f276289c31ea4a35abcaa48da27e"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2106ffbcc41db66a07f30667034655c2"
  },
  {
    "url": "categories/index.html",
    "revision": "0b64672fcac8f7dae203472d3ee582e8"
  },
  {
    "url": "figma/index.html",
    "revision": "dd8a3cae156cad857fd539ef39fb6fe4"
  },
  {
    "url": "flutter/index.html",
    "revision": "2c59cce0742086992b22916caca24b62"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5e15c562e3edc06a07f276ec554fd426"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c2759f81262d9ff654345d791151f75b"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d793e48cd3e04f24d6e4d570c6fcdf1a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "333ea421c0257cadef24695c8a310df8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e679552ea5a2bff82365c6a4bdf4cc85"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ddb7e0bb8aa7b8ed788478e4c690d436"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0ec79c741ac9078886918723a974c749"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a20d6ab8632dbcd6b05a9738293d9cb1"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f2c1d59c9f8a729dfafb6c4809c2fd99"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "31c50b42ff410bbf63be29b243336cee"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "e05d73ddbb7cbf158653e135b68b302d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "ad524b0a9246287df70acdc915b5a69f"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "951d4c10eb984727014fdd352952077e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "48dfdb33a97a4c7b1bf0838db4fc9d2b"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "53c80c8fc820cbc01a80872ffad64c8f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "07baeef31e3c1a0888b8ca4ff8faddcd"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "dae770533f7e9f25a4729338266ab4e4"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7ebe9fb6615ee29e7812e38ae1ec2e27"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "1af7d89efebcf37645c9fa0481858ce8"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "2cb6bea22985d8cb1ba7dc58acc35da5"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "72671a541482751695b27c4d49853a7b"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "785fddbf30c8ab92f4a8dbf9ec2d1bd9"
  },
  {
    "url": "haskell/index.html",
    "revision": "a325f5a14e703cb24ad1ff702e750f63"
  },
  {
    "url": "index.html",
    "revision": "8b72c988d8f289bfc28bcee4bf72eb84"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "46f6703a19431e4976d8fea69061f70e"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "86a3500a54fc6ef80c3f0e1c3e03aaa5"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "77a02206013d0034980b280e2c4a3f16"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8a0c55895607f1368c51ca22a779c723"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "d0861838e9cc7847d2474706f2bd19a4"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "397036aa7459e338ab9f33c89b525cb6"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3e653a2b324f3f161933034530e337b0"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1f8141a2096696bf67ee8ccfb38d2dde"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "b660f2f46eaf06557d968a5fdb967e36"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "6cf7b2052ce949ce3e7f1b0f46447e1f"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "efd6e787a96add5e694f1a248cc9db71"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "a76cbe07703792e3c4a22cadb7c7bfa4"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "80d2426455d80ed131278fcd786bec30"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "aa513a8959510d8427146e07eaef840b"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "9da6463482ed45d704d0ac79cfda6e07"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "5dd9c9e42c2661ccd302c51aaab70f55"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "87614418f80c6c277214d3688ab4811c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "9ae049c394eaefbd321f9ef3ff856479"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "cee682ff7ea4c7e86cf359d926be66c5"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "0b5ea20d3a6cc83e89a8ba5b5be2ecf9"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "83b1b9a24392bcc9a1119e859fc8e787"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "120b590ae223f7b9b12c90879334a8f9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "0f34ae6322877b1761b6808b39b198a0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "550643066452de18f7c2fbc865cfa9cc"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "598a617b91640700267f1404e89f0b97"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "bbfb3f8e40cc400df348c0ae609d467c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5e77c41f6602801d58416b5c62055e41"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "74bd5bea8c2ea4e158f2ef7a09ab571d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b86430c27cc10e045b2822d53fd83d08"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "55b48c1fc220bded7f7603b65f9bbc2f"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c5da5d8a1e6ab0279c4b07a85fa88bce"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "5d5fbd6b25f1d765bc940a8ba2ad4ee8"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "49da2402d499462c43f5b93ed6dc14ce"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "46e7966b7869163577e2abb7ae581a66"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "6d673fd3a1212100cca264304635ca57"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "60ddbb37ef07b695d48653286828fdc6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "65aade930ad587528136610b2c8c64b8"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a1be66f4f488e5c422b3f7856b3fc9ea"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "05abcd0dcddaad21365d25ec0c9ab1d6"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "92883cac8d64b34170c74f993a47c904"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "72688e64ff2eb37a532c1176996bb1dc"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e12ac80e69cab20176c548efbce9ce5b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d3322e2464d9a10aed85e07e96ae280f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5cb3ea4efcca4831c48318b4a2254160"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "e072b21419fa962ee700d0299f88d8ee"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ecf464b39de09d73332d009df1d66028"
  },
  {
    "url": "tag/index.html",
    "revision": "91ba9d6d7ab23b30cd2ebb15495b14c9"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2b490c61e6e0f39df082ab997c490cc2"
  },
  {
    "url": "tag/json/index.html",
    "revision": "45673ae5205375ce1f4fec32b19532e5"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ac47171d4c99282f5d09f96975cb4581"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "dd64245800bddc821cf717c13907e8c5"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "120d56f819abc860bf59cb16f85e8824"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0a30f4fa6d5beebe4b66eb86b4504508"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "2ae1a7bc2678997277cce9a997a70ed7"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a93ecdef561a69ac34d6bcc2dc4811e1"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "0e5c107db50a7d8ed93c0f950ea417c5"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9278ad155cf2e3105412e496b507b695"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5e9e1f046fd4eb8e08a1ab6d01fa5766"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "14281252485ed42a9bc1c0f3c2074147"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "de79f20be3895be43d5f9d0135b3a9ee"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "230fad09f75280bc75cf03071f15d648"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f5afb781447b743c8cb708276a2d9155"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "922b5d7132df187efe0dde29909a2828"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "938584121ded297c59eefa3844548fce"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cffe3fd85702cf6d6662ce0944c15bc7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2abf110bd2ab540907c6d88c3ca35e93"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "81721e8673d91319efda11181f9673ee"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5a78ee7229ee88b296c52257b59574c0"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "677d4504f8908e0bbf6ea413fe03795c"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "a6e63808ba253f00d574909b2a8fcbaf"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c712c5de5a78486ba69178bfbd3e8353"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "95e41dd47c25838d3ad68ea5e267d2d3"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "13dd694b7528492dbf7f619a2645c100"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1ecae698c8c5acf8df35ccdf68c430b2"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "b58bd8837dd72d6f26a2bfc24207b687"
  },
  {
    "url": "timeline/index.html",
    "revision": "22d7c6028dd5a43a2ab9bdf4cd0b621c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "49321f6483a4e0d599d9058100ea7b13"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a159d8400b909cc4d1b46598f50b2491"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f5c117aee2d891c4e4f58dea668b469c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c206c6dc33a4d7abd0ff307c7f5fb7e8"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e4c37f4ae739ab7a1d287f3ac3a70036"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "5312d5db312bbbf1354943568f2d4497"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "8223818478e94577fe04a0adefe3ee39"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b5b732531282ed45e0a2359719aca50b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "05ffc3dcca0853a158f8cc808d041c9e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5e4b400872313f5dacae9314b1a40107"
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
