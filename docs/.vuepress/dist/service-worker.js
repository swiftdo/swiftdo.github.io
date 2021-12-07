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
    "revision": "6c08f8581832766b402af10998315290"
  },
  {
    "url": "about/app/index.html",
    "revision": "0e9f2e1b3b5c2ef94406e6c752fe847d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d2517e7e402a079489a60a01a40d6fee"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d4886884fb0fdc5a6210413da18531d2"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "9c8a90bfc42ed544b089ba2d8bf8d3cb"
  },
  {
    "url": "about/index/index.html",
    "revision": "acdba95a25a619d7e6077466ec234c4f"
  },
  {
    "url": "ai/index.html",
    "revision": "208fc6180b6e82eabb8ef14c5fe3f356"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "743ed7ffc43cd00ab1644d5622a7ed85"
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
    "url": "assets/js/1.a551f48d.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.1677aa8c.js",
    "revision": "7bfa1b06e71c3216200eec1a716066cb"
  },
  {
    "url": "assets/js/101.5a142948.js",
    "revision": "56fcf065df0694948fb6b39eb2a922a4"
  },
  {
    "url": "assets/js/102.0e71658c.js",
    "revision": "6a4ee90ee2a960161baf4977f94aff0e"
  },
  {
    "url": "assets/js/103.6634fbbe.js",
    "revision": "b3af0734368902ebe74f300e3c0b428e"
  },
  {
    "url": "assets/js/104.9236d6e1.js",
    "revision": "fbc418b03d790dc408a4f6b107037739"
  },
  {
    "url": "assets/js/105.15f8ffce.js",
    "revision": "f3fc89b403219a77c33a186d73647a40"
  },
  {
    "url": "assets/js/106.45ff6cd3.js",
    "revision": "311645b94ecb8186b2d267561758ae36"
  },
  {
    "url": "assets/js/107.cc80c4b9.js",
    "revision": "84df75d591a24aa4d86e3d97df580b6a"
  },
  {
    "url": "assets/js/108.37464949.js",
    "revision": "5e2437a85a75b9defd71a932313f798b"
  },
  {
    "url": "assets/js/109.5622bb3f.js",
    "revision": "c8ece226aca1c7269c779735a179a1b5"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.3040f0a5.js",
    "revision": "7b6d2695e969b1dcf41b044079fe400b"
  },
  {
    "url": "assets/js/111.ea7e8a7c.js",
    "revision": "b330ebbb6e3563567afae993b810cd99"
  },
  {
    "url": "assets/js/112.69f1bac1.js",
    "revision": "88909cea5bffe5d108f372f230a5feaf"
  },
  {
    "url": "assets/js/113.da7355f8.js",
    "revision": "2ca81ad677cbfe5b81eaf423abbd80df"
  },
  {
    "url": "assets/js/114.30d2dd3b.js",
    "revision": "3cc3f47f68b131d8dd3c58a042f0e9d0"
  },
  {
    "url": "assets/js/115.4f3ef802.js",
    "revision": "270285c2196ef0a8445ba9b70e0bb43e"
  },
  {
    "url": "assets/js/116.dcf19e96.js",
    "revision": "012ce1b26d62bb87ac350027b4ce6ec2"
  },
  {
    "url": "assets/js/117.2a2bb0f3.js",
    "revision": "82dcfe9ca0500185e93c8a2a5bdb45cb"
  },
  {
    "url": "assets/js/118.9228862d.js",
    "revision": "e1483e67a38485ad4876cfbd6e2b88f6"
  },
  {
    "url": "assets/js/119.8ee3befc.js",
    "revision": "baa33f5f2fe0eaeddcc12a0f73910421"
  },
  {
    "url": "assets/js/12.6d4d6a4d.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.990041a7.js",
    "revision": "8b4a409683771ee038db17462cc60f0b"
  },
  {
    "url": "assets/js/121.8e609c9d.js",
    "revision": "6c550589b00cdb79d8bb00514e0140fd"
  },
  {
    "url": "assets/js/122.9484ad7c.js",
    "revision": "f95acf175cd9da0bfb2366112254210c"
  },
  {
    "url": "assets/js/123.c8a61af2.js",
    "revision": "02336c2705f003f6a488ffcdc580c8b9"
  },
  {
    "url": "assets/js/124.c12859f8.js",
    "revision": "53490eaf32386328300afcde8a2260a6"
  },
  {
    "url": "assets/js/125.a7bdaa63.js",
    "revision": "a5c5ce34fa484fd865bc6cc3b4cc5e2e"
  },
  {
    "url": "assets/js/126.3891c74f.js",
    "revision": "1960e4cf25717e9593662a32701f6cd2"
  },
  {
    "url": "assets/js/127.ee81596f.js",
    "revision": "4b43248fff27dd6d60c5b529f81c1414"
  },
  {
    "url": "assets/js/128.6b6fe5f5.js",
    "revision": "c193125ab7a0d07ae6f65c8736113ccb"
  },
  {
    "url": "assets/js/129.38c6f4cd.js",
    "revision": "4d1d0e38df710ef035cbffa5ddbc7ac1"
  },
  {
    "url": "assets/js/13.46bd07b3.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.1735ec2f.js",
    "revision": "0cd6572195bc2f5500241085dc71ce23"
  },
  {
    "url": "assets/js/131.d9b5c486.js",
    "revision": "dfc48285112eedd625364e8985ebb4d4"
  },
  {
    "url": "assets/js/132.c452005c.js",
    "revision": "cc5a6ccec0b8e13cc18fc892a3159905"
  },
  {
    "url": "assets/js/133.2034dd69.js",
    "revision": "faf72df9ca00aac5553adc1e25a07015"
  },
  {
    "url": "assets/js/134.23494180.js",
    "revision": "1fba9891b0a05ec9eeb5eb29ca13fb8e"
  },
  {
    "url": "assets/js/135.ef36cd98.js",
    "revision": "ba66c70370f1fb0e8390f59768ad6c94"
  },
  {
    "url": "assets/js/136.2691404a.js",
    "revision": "0611f8bee17af3dcc2782df41df0759b"
  },
  {
    "url": "assets/js/137.ddc3502c.js",
    "revision": "5fadf60a9d5659a0e0a4eeda2cad9b32"
  },
  {
    "url": "assets/js/138.59104cb5.js",
    "revision": "dbd18d746e0c317561f02626c58bae58"
  },
  {
    "url": "assets/js/139.abd54a79.js",
    "revision": "65279c5ceb1071a73d0e95bc18c3a09c"
  },
  {
    "url": "assets/js/14.420914e8.js",
    "revision": "29571602fb9aff4b4ff3cf7baaf4bb3b"
  },
  {
    "url": "assets/js/140.0063933a.js",
    "revision": "95d58dae400f933115cfbc7d5353ca7e"
  },
  {
    "url": "assets/js/141.9ed38250.js",
    "revision": "85f8ca1fd79539f8d195ec131caff1fb"
  },
  {
    "url": "assets/js/142.b227c73c.js",
    "revision": "b2a9c33dccd1d3ba0bc7b7fbc6c30c61"
  },
  {
    "url": "assets/js/143.2f1abc50.js",
    "revision": "7f70fe57c21e4cebc8f021319e1ffde3"
  },
  {
    "url": "assets/js/144.624860a8.js",
    "revision": "f79a3214f34c4e8814eb8a1646d8fe74"
  },
  {
    "url": "assets/js/145.59fdfd33.js",
    "revision": "af7bb934590b9d6d3a81b89dcbb3b34c"
  },
  {
    "url": "assets/js/146.80e73681.js",
    "revision": "22ad457d4344c372131eae2521c38103"
  },
  {
    "url": "assets/js/147.f52efaf1.js",
    "revision": "08892281178e3b87bb8f210b0d93067a"
  },
  {
    "url": "assets/js/148.b2d22435.js",
    "revision": "12a5fdd086e361a0cd4eb1589244e427"
  },
  {
    "url": "assets/js/149.c18bc33d.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.0727d298.js",
    "revision": "d4bda84b8171fb3466624824e999a764"
  },
  {
    "url": "assets/js/150.769a4226.js",
    "revision": "3fb5f209c874f2f42e8a30e531d13569"
  },
  {
    "url": "assets/js/151.5a91b536.js",
    "revision": "33ff9960de9f5d70b3fdeb49e67924c5"
  },
  {
    "url": "assets/js/152.6b8c0e88.js",
    "revision": "e74da32e7afeb8908c52a03e7d603301"
  },
  {
    "url": "assets/js/153.88fd1558.js",
    "revision": "0ab3c4f6b86d6a312b3f82d9d647da75"
  },
  {
    "url": "assets/js/154.b4996770.js",
    "revision": "182af1d894ae4adbd63f65e276ab860e"
  },
  {
    "url": "assets/js/155.2d96bf11.js",
    "revision": "3a377b7f73e783bb957b32db60f061ba"
  },
  {
    "url": "assets/js/156.d3b6b2bd.js",
    "revision": "aa887d02ed8a225bd95bb34467b4f0b7"
  },
  {
    "url": "assets/js/157.0502ab03.js",
    "revision": "ad46d65578549047fc931546b76cf094"
  },
  {
    "url": "assets/js/158.37fb4931.js",
    "revision": "80a377638a965802b9c4108a6e05a0e7"
  },
  {
    "url": "assets/js/159.c3bc76af.js",
    "revision": "04e1dd9241c010be2a7aa79f4a92fb78"
  },
  {
    "url": "assets/js/16.d4f8a177.js",
    "revision": "64354d46c8bcc3e557ca5c7eaa5b3ae0"
  },
  {
    "url": "assets/js/160.6bf21d87.js",
    "revision": "0a75263f955467cdd40e9786bcd48506"
  },
  {
    "url": "assets/js/161.1847befc.js",
    "revision": "8e2fab09511782cfda3ced3422a2a4e0"
  },
  {
    "url": "assets/js/162.c4b2f195.js",
    "revision": "729a902069405f999b579f072f2f5a66"
  },
  {
    "url": "assets/js/163.bf3a48d0.js",
    "revision": "347a803c6d55c8ad15de833edc000421"
  },
  {
    "url": "assets/js/164.9e60e9f3.js",
    "revision": "049855a68364f90c3744b61b39730368"
  },
  {
    "url": "assets/js/165.729f2c7c.js",
    "revision": "946f40fa6b9149f17356b93283918b56"
  },
  {
    "url": "assets/js/166.d1fa426c.js",
    "revision": "6daa74c5acad1e1ea026a45052219b1c"
  },
  {
    "url": "assets/js/167.8fcbc654.js",
    "revision": "31b1744e18efdf4f0b794caab15e2183"
  },
  {
    "url": "assets/js/168.73f70488.js",
    "revision": "f3bc90ba4198f3b612bb877c2906d6ad"
  },
  {
    "url": "assets/js/169.f6251259.js",
    "revision": "731dbb74e38d98884847aa3d49e34654"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.e0a0074b.js",
    "revision": "f209d9b7dfc94166f0bb3bb41b1d9f2b"
  },
  {
    "url": "assets/js/171.ae02c044.js",
    "revision": "0defbd3f6267972bd6011901e4919f25"
  },
  {
    "url": "assets/js/172.dc92cd26.js",
    "revision": "f6d7f69e1810556dbc1c35db64614e34"
  },
  {
    "url": "assets/js/173.bc6c7241.js",
    "revision": "eb2ef132d979f7c967c3d4f2aa2796c6"
  },
  {
    "url": "assets/js/174.dd31d730.js",
    "revision": "6b8e50b9311bf39d61b00047ab3d7399"
  },
  {
    "url": "assets/js/175.04b1c249.js",
    "revision": "b61fdadfc3da9a27d177b90acc0557cd"
  },
  {
    "url": "assets/js/176.284d579c.js",
    "revision": "f6859b9e49e377fe76fc4eaf52d55395"
  },
  {
    "url": "assets/js/177.45316b27.js",
    "revision": "16cff3aacef67fc4b5d9884b963e8e1c"
  },
  {
    "url": "assets/js/178.a2cbb327.js",
    "revision": "57937c842efc941111ff038f81ad0ef0"
  },
  {
    "url": "assets/js/179.c4a91663.js",
    "revision": "07d16440ef02b49ff3dfe69e58c96356"
  },
  {
    "url": "assets/js/18.8ab0e1f0.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.908ec7ae.js",
    "revision": "ad5a5b13e238d96831993e17a5c81528"
  },
  {
    "url": "assets/js/181.72b6425e.js",
    "revision": "724de9e9f0794036dab00444944675d0"
  },
  {
    "url": "assets/js/182.01bb4f87.js",
    "revision": "9f3373ae6666e5723989db8621391264"
  },
  {
    "url": "assets/js/183.21629d22.js",
    "revision": "c25718761fb3745fc511eb96151a2e32"
  },
  {
    "url": "assets/js/184.0553d61d.js",
    "revision": "a08a3b268450fe9c3a244eef0bb8ed12"
  },
  {
    "url": "assets/js/185.18664bd3.js",
    "revision": "d6e9bba374446af569353b2568bdd825"
  },
  {
    "url": "assets/js/186.333753cc.js",
    "revision": "6efa42bf43777def6a9f4afc0c08cfef"
  },
  {
    "url": "assets/js/187.c7953eed.js",
    "revision": "ba99f8508a324bd968793fa14e512d1b"
  },
  {
    "url": "assets/js/188.8b51e83d.js",
    "revision": "69d11271fe14924d4065fb8ff3126986"
  },
  {
    "url": "assets/js/189.c92b9ac2.js",
    "revision": "78e02fb24d31547c7d9b161d39635fcf"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.bb020870.js",
    "revision": "6d5f66addb9901cae648bced32ced3c6"
  },
  {
    "url": "assets/js/191.0c0fc49e.js",
    "revision": "da65ded3dd697b3fdd64f1b5f0ebdc0d"
  },
  {
    "url": "assets/js/192.ba614c43.js",
    "revision": "a39c6b12db4ad9f538a4197470025898"
  },
  {
    "url": "assets/js/193.8581b3e0.js",
    "revision": "0071384ced8f1d5a5adfcda673734b35"
  },
  {
    "url": "assets/js/194.e3f01be7.js",
    "revision": "b2265ab4206d7765ee447d79336d0d7a"
  },
  {
    "url": "assets/js/195.0c35c849.js",
    "revision": "5715107af47a377740e8bce02fd62bab"
  },
  {
    "url": "assets/js/196.bca540ef.js",
    "revision": "97ee0373d86c87504da8ed60235b8c4b"
  },
  {
    "url": "assets/js/197.a0e72271.js",
    "revision": "23d69d3103646d795ce0b8d0973e28ce"
  },
  {
    "url": "assets/js/198.0b0fb034.js",
    "revision": "400f28f01acad67b60c5e4338e5861ce"
  },
  {
    "url": "assets/js/199.9ea9ffc4.js",
    "revision": "8c1dcddae5c5c4717155c22d585df9bb"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.bc4c05b3.js",
    "revision": "98dd4e263ce9707e0d22d0c9a0d1ada9"
  },
  {
    "url": "assets/js/201.d247716b.js",
    "revision": "f1fca412f029e79235d57c01862fcb20"
  },
  {
    "url": "assets/js/202.4826f6f5.js",
    "revision": "62f000622e207f5fab183ab26fe54abb"
  },
  {
    "url": "assets/js/203.ebe723e5.js",
    "revision": "a8e45e8207863d7cec2e187be9c8fc67"
  },
  {
    "url": "assets/js/204.63f63889.js",
    "revision": "4b86f6af22c5cb85faf81daff38fc0db"
  },
  {
    "url": "assets/js/205.e93a80d9.js",
    "revision": "53fbfe858381d17e4de1f7ee34269cfd"
  },
  {
    "url": "assets/js/206.d8a85d97.js",
    "revision": "fd15738c07261e6e79f1245a9b7176c1"
  },
  {
    "url": "assets/js/207.45ced772.js",
    "revision": "ece5b4c04fd446ab3f6e621da077ea16"
  },
  {
    "url": "assets/js/208.0f715622.js",
    "revision": "71e7a46a456d9651e1062d1b52d5c7b3"
  },
  {
    "url": "assets/js/209.8d2e6ebd.js",
    "revision": "7885696ac1509fb1596066450b68a8e5"
  },
  {
    "url": "assets/js/21.f2ac8f76.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.afd5de33.js",
    "revision": "a566d40925031ea770d164ea8200f451"
  },
  {
    "url": "assets/js/211.caae218d.js",
    "revision": "698db57487e90ac83edf50ca75d3bbfe"
  },
  {
    "url": "assets/js/212.22f237be.js",
    "revision": "fcf7e0e6df4d6bce0f9b86ef3357c352"
  },
  {
    "url": "assets/js/213.80c5a655.js",
    "revision": "813d8a1a78927eb5274e2996b1e0ce60"
  },
  {
    "url": "assets/js/214.18731125.js",
    "revision": "5606f0ef46ee7ebf8325b3c101049ebe"
  },
  {
    "url": "assets/js/215.4a21f3e1.js",
    "revision": "bfb7fba6e596f16b10e1a4c1a4890dc7"
  },
  {
    "url": "assets/js/216.7d7a361f.js",
    "revision": "40d27d4b477440365c788f776ff45b23"
  },
  {
    "url": "assets/js/217.39352352.js",
    "revision": "34d446961a5cfd43528e97fdd94d8afa"
  },
  {
    "url": "assets/js/218.7476a006.js",
    "revision": "40616699fd77e0f02947ea3c4b997750"
  },
  {
    "url": "assets/js/219.13a4e4e3.js",
    "revision": "34fac09faeb13ab55d222d332f1c8130"
  },
  {
    "url": "assets/js/22.487afd95.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.bb970b83.js",
    "revision": "be4fefad2a1a74b69e136576e7b2c0f5"
  },
  {
    "url": "assets/js/221.48f270ef.js",
    "revision": "642eed5b1e654f5f5d2461b02a524e41"
  },
  {
    "url": "assets/js/222.c7faae51.js",
    "revision": "b650a1dfda80c947852f8a9ef3e7fc42"
  },
  {
    "url": "assets/js/223.cda90a54.js",
    "revision": "df044a569898918e7204cbedb63196b8"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
  },
  {
    "url": "assets/js/23.aaac1724.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.d1aa06c5.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.60497cb3.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.537bdc9e.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.a087bf61.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.03f74411.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.cbea7ff0.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.03b8f943.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a6631d9f.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.831b550b.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.1ab61c12.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.aae173fa.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.4dbf7aac.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
  },
  {
    "url": "assets/js/35.ec60a253.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.8b8b5b23.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.eb40e17f.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.463a3ce7.js",
    "revision": "978586b909be63129e5327d1fd722d89"
  },
  {
    "url": "assets/js/39.9192be50.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
  },
  {
    "url": "assets/js/4.ec8238cb.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.2bb4453d.js",
    "revision": "90c3cf99f395792fa706fc288cb332ea"
  },
  {
    "url": "assets/js/41.56528ebb.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.91a71cfa.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.b7a1f86e.js",
    "revision": "90ac1710caebac649d4148cb7247bc9b"
  },
  {
    "url": "assets/js/44.ad73faa2.js",
    "revision": "b9c1a6fa58813164f3d5c0cc4b2ad519"
  },
  {
    "url": "assets/js/45.b068ef61.js",
    "revision": "b6be199ebebe9bb75bf4a9370c81e7cc"
  },
  {
    "url": "assets/js/46.a90dbc23.js",
    "revision": "b9a470431df234a822882b7efc9e8186"
  },
  {
    "url": "assets/js/47.39286241.js",
    "revision": "389bbac7bccc98b46e7d512beba3723a"
  },
  {
    "url": "assets/js/48.6147eec7.js",
    "revision": "b45c999a1b643e45a815e72b0ecacc16"
  },
  {
    "url": "assets/js/49.14c18272.js",
    "revision": "beda7c9ff34a1223df8a0a11a4b89902"
  },
  {
    "url": "assets/js/5.a53ea690.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.02012b8c.js",
    "revision": "4f61b355ad22a2be9ee40f8a3f323ccd"
  },
  {
    "url": "assets/js/51.427c43e6.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.65e8192d.js",
    "revision": "acbc2cdc612ab50d8b9e3d3bc387263a"
  },
  {
    "url": "assets/js/53.d0c300c3.js",
    "revision": "3fbacefac0c34bb3c1783a3ee02a2ed5"
  },
  {
    "url": "assets/js/54.19cc3736.js",
    "revision": "45452b115966d6f32d225203d8bd2435"
  },
  {
    "url": "assets/js/55.d4e6c173.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
  },
  {
    "url": "assets/js/56.b728b768.js",
    "revision": "2e843e7c65b7e51ed28faaec8b25b492"
  },
  {
    "url": "assets/js/57.60edecb3.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.b28f7cc5.js",
    "revision": "3befe225f4836f2ff334322fd0b1c56a"
  },
  {
    "url": "assets/js/59.0901c838.js",
    "revision": "890553d830c83037f433bb95afce5e3e"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.fc65d766.js",
    "revision": "510db66873cf27f20b65849bdd60298c"
  },
  {
    "url": "assets/js/61.9978b29a.js",
    "revision": "334b1d9163eed9e1b2b90afbef02a5f8"
  },
  {
    "url": "assets/js/62.4f1224e8.js",
    "revision": "203b92a28d965541ec28090486152e1b"
  },
  {
    "url": "assets/js/63.9301bf66.js",
    "revision": "05fb74fa0d2f6e432231c58c1093ff35"
  },
  {
    "url": "assets/js/64.d6cc9938.js",
    "revision": "3132947d60a29fa0134baeb3c296f479"
  },
  {
    "url": "assets/js/65.ff06b778.js",
    "revision": "110da5b5e33f31ec17328086fa04c781"
  },
  {
    "url": "assets/js/66.d0e6441b.js",
    "revision": "78f596d8e7a49e4779a2c8764c9da6f4"
  },
  {
    "url": "assets/js/67.a53e25ec.js",
    "revision": "fab47fc0d22006f766846767f6668de4"
  },
  {
    "url": "assets/js/68.2d0a74cb.js",
    "revision": "46f033cc9ce6ebc4726ad4c5fe4922fe"
  },
  {
    "url": "assets/js/69.1c8ea074.js",
    "revision": "94b7f68135867c658122aacf4806dbbd"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.31cbf7fb.js",
    "revision": "df7e816fc2c8540c4536cfb954e0c2f2"
  },
  {
    "url": "assets/js/71.3b8f516d.js",
    "revision": "b57758681efb36d8047507f64b249b3b"
  },
  {
    "url": "assets/js/72.0a1d1609.js",
    "revision": "95b7e39e8c166b277db536840100fcdd"
  },
  {
    "url": "assets/js/73.6b7539b4.js",
    "revision": "006cf113e1d5311baf6b748e62b02386"
  },
  {
    "url": "assets/js/74.06a41251.js",
    "revision": "60f153e3a7ea86eb40050522379f3d5b"
  },
  {
    "url": "assets/js/75.e0cf9cb9.js",
    "revision": "a25a65f6f1a7e44be694647cd317ec65"
  },
  {
    "url": "assets/js/76.28493260.js",
    "revision": "7d48a96813d6cdc577c998e27a49f94d"
  },
  {
    "url": "assets/js/77.6b2e973c.js",
    "revision": "2091e8e7dbd8d0b1ddd6dff36344ea05"
  },
  {
    "url": "assets/js/78.fdd2b0ab.js",
    "revision": "530c5f2edfba9b8a7c1b1dd885f20ffb"
  },
  {
    "url": "assets/js/79.7abb0a76.js",
    "revision": "b919e2f5f39daaaf009b94ec8d7086d8"
  },
  {
    "url": "assets/js/8.ce438359.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.ed77a603.js",
    "revision": "d71050d29091262136864d319309f477"
  },
  {
    "url": "assets/js/81.146e864e.js",
    "revision": "92927d915811d48f285c19902a36353c"
  },
  {
    "url": "assets/js/82.635df817.js",
    "revision": "ff78d32aac795ebd575c71155f2c8139"
  },
  {
    "url": "assets/js/83.4df8e3e0.js",
    "revision": "47bd27af045fb98e9d3e935b225b95b6"
  },
  {
    "url": "assets/js/84.46baa9d0.js",
    "revision": "9d0e4ea9d7bdfcc7df3488c3bc55d165"
  },
  {
    "url": "assets/js/85.bb610f56.js",
    "revision": "3c87731ece31a1fbbe5fb8bdddc4669e"
  },
  {
    "url": "assets/js/86.ae3ffdfc.js",
    "revision": "8675eb56df27e6b1d7b6c203a712dcc2"
  },
  {
    "url": "assets/js/87.0e9d3353.js",
    "revision": "73888e48db3ea26ae283f325834dc45b"
  },
  {
    "url": "assets/js/88.02533efb.js",
    "revision": "14a244e8a0d101959d37c7f782133bba"
  },
  {
    "url": "assets/js/89.d5ec230b.js",
    "revision": "5e74ef5c3a2db2732ccf17e87bff10d7"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.8654c7cd.js",
    "revision": "702c0f57c8ed80038502f0f8e94ef19c"
  },
  {
    "url": "assets/js/91.f0c64ba8.js",
    "revision": "1f1cdb1a0961780ceff5c1decae00a5a"
  },
  {
    "url": "assets/js/92.df551a2b.js",
    "revision": "b0d2663bf2fbe0cf7a830fd336411cde"
  },
  {
    "url": "assets/js/93.8680eacd.js",
    "revision": "b7e0d883352758700132550eb1efebba"
  },
  {
    "url": "assets/js/94.6d65fb52.js",
    "revision": "cf759784b1c0bd074b77efc91f80a1c8"
  },
  {
    "url": "assets/js/95.242711eb.js",
    "revision": "54c283ba47bde05bd9fa6c9c73335ada"
  },
  {
    "url": "assets/js/96.8bf6c408.js",
    "revision": "5cbf4402b3b580f8beea23d6b8c0ad4e"
  },
  {
    "url": "assets/js/97.7d4d1ae4.js",
    "revision": "03f9823b32e3ab83467605bfd9f2660e"
  },
  {
    "url": "assets/js/98.71c20909.js",
    "revision": "8f0dd584b43333c9c53cc558eb6989bf"
  },
  {
    "url": "assets/js/99.0c58f354.js",
    "revision": "3ea634897f3d5993f5a685c6f27930b1"
  },
  {
    "url": "assets/js/app.b28b445f.js",
    "revision": "43f5209b55fbbd39e8755e72753c99af"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "28f18b7c9e63ee91920212628139dbdb"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "59b72d54ed566683c279857a22442af2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "81949a0a14f4301077ace99d9b5fdd5a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2a9ad6ab3b40a54a039eeb8ce47dd602"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "14155e7705bd93b70c684da3c6ceb831"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "537db01efc81b0a2590428e56a013db1"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f42729fa74fd22ae9d2c24109f04fda9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0c4245e4bc2920ef80f4940dea12a635"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4c4e4e4a30287dc819c63122e44d3c55"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "22c8dd9b1b36825fe2f9e4d6158dbe39"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "5cd89a735a23bcadb9787ca1faf597d8"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "dae8e6cc0845afeacbeb886e9f749355"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "bac73de262e1f30ce4e230b3c65e8147"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "5a5ab1ff6dd2479500d6e5463ee57423"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "3e73f6980ba0b236664db9819203574b"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "951fea8c0665200512f6c84785bd9d25"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "e34a6e51ceb232176ab432428bf9b4d5"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "202dc082c13335e89e6068de06a39831"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "79db3dd49c868572e7c76166e0de9002"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "aedc0e08007a721d88771303ee1f3a2d"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "e5713d787a6eeb81ffcaeff2543b6eb1"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "1f68f59d329ad92092c0ab42fb687ac0"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "021358350801fdfa90f7c4060e969e9d"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "65f4eb72056827cfec06318b4b236a8c"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "300e007d4bdf97889f68b92af5d1933c"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "548ec1eb937f6b66b91b490ff5f385e3"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "135bd2cad6eba5336f0b8f3b77a64eaa"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "14aebefea3797458d31f485dc0c454de"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "900bce27c4ba7806fc3fb34179a56171"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "9ee5488aef595b839124bb6b78e83069"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "e95c605fb6b1fd31818ec59d03f55b0a"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e472a38ba755962c98de26bc4961cecd"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "1371155740c719e8134d20a81528e5e6"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "d01078d652f55d51a59a47b12c39cfcc"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "460a42b811961042e82f0ce4562f6504"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "90f7d01fab6eef6a845d3dd8318ecb32"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "4b14516cb81a1b9bb965df4366f508bb"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "2e8d74979dc4192f03a196d792b155ba"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e8678a816c5b14f367876b46e5da62c5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "204a703a4a6162aa2942ca259d1e319b"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ca5a407db9e4c3459a1aa14ee8419e70"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ba0424ad00b22df5d74fe91fd0051f8b"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "305f901095e1a5ccc05aecb95b3bb69d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "7f4612a95b5162a59e52e715870fd5f0"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "5cf8a13fff9f974e0840dc8a14847d3e"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5314d21f71f2e61cab648073f3355192"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a1bf36bb21c9ba07e18e6e9840e8978d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a8db7b11019c986927f90a63bab597da"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "c533b509b1c8a012514dd666edc8b26d"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "e3d3bf69324e9a73e153e41c16ec39c6"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "981421d7ed13451e90794125a62672fb"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "9fde488cd385633960c0f495060695f8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d246401ea95d0dcf57682bdd25a1570d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "476ea3dbbb049f0697949c89374a23e3"
  },
  {
    "url": "book/index.html",
    "revision": "3314926e16475233eaa0112632f173b7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e99b4d9e5e0dc563f02a29b6e8c8f4bb"
  },
  {
    "url": "categories/index.html",
    "revision": "ceffe5604661c4b3280ffe25bc252b8f"
  },
  {
    "url": "figma/index.html",
    "revision": "02be0193930016c28b86126f68ef05a3"
  },
  {
    "url": "flutter/index.html",
    "revision": "0e0b405a3360c630b4ca52295deba0ee"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5129daa44035b27be3068bd40767e2d0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "3f38d394f8b8e8296ebb8f598566178f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1f87fb52bffc6daeaf55a83ec45a839e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "309365dae1bbee0685bdacf8acdd89af"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e086d07d54cf85788becaba0a76d4c08"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "aed53bd964d1741260ecf171c08bf50d"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ab18e78f78a6320fd14e3249c27752bc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "73e675bea14007dab56d2d293173cf4d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2abe90a6c36278c2e2ca6c24665ea9dc"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1c16e5f5b94518ae8fe667079093c75e"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2944e7e47904423f2f53b4a4e0c9d3d8"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5b04370e27a4c9949e04490484e53d6c"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "93aef90fde3c6c659f6b8e0c19c3eba7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "a13e69dd27acf21109800540efee5ef1"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "19fb89de3f8525c1e21c4d1c79aa409a"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "343e965b46dd186fb245c7839dfd51d3"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "894199b8833a48ee2199621565b942ef"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3acffd22338bb1d71fb030c1219af0d0"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "6e5a9a54d039e986ddbc1280c847ece4"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4a09b59edb32f353323aae17e1c26ebd"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "9b3861aeffb8eeecf222630f30e009c4"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "7324a56440a984a7d0c7973d6f4ca04d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "967d148e186e00cae87cc976d7ddb86a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "aff6fe27c5710822aa74f025948ee853"
  },
  {
    "url": "haskell/index.html",
    "revision": "7729f1478db0e7b4340507e65c020141"
  },
  {
    "url": "index.html",
    "revision": "628cb32c0f254dbc320bf4f17341ba11"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "f42c9dffb0161efad4b94e91fe9ab001"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c451c6c4b0c3d1b7653ce2511a083c81"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "396b30bb353e318951d01da5f88ccbfa"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "6c725ae85118f617af483f68d7e93818"
  },
  {
    "url": "python/index.html",
    "revision": "f1a8d0faa86297edbd9626999f83e78f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e28b53950d35003b122cef783f527072"
  },
  {
    "url": "swift/better/available.html",
    "revision": "681afdeff3382932a1291b67a5b85067"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3bd4d43a866554029df8c5643b001120"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c65e15715b9197fd84cc6f0e3e8b9210"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "26a704884c55ab0c6bcc4c5b3d60ea66"
  },
  {
    "url": "swift/better/di.html",
    "revision": "6a4f067351f3f7218adbeaf515962334"
  },
  {
    "url": "swift/better/last.html",
    "revision": "f774e2f1ae2e096bd64c3bec628d118c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "a11dfb48020baa220d95f72167c8da1b"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "5edfc197f9f817dee25cd5e3813a9fab"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ae3df5d406c5435581dfc4b881390a61"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ae41ad5fc2c0e99ccdda62f3969c7fd5"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "c5403da44f6a25b2ffee74b4ac98776f"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "7ca6478ce91b24d0ea82e7136bc79040"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8f6a2d0b6d5d1c3a03687d94bbc3ce71"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "874692e3428dc9b54c9437790b9c7617"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "39d0475e76fea138d98767229200ab85"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "bdb944b026d677ecdd6412438441d3e7"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "633704e573678f3bc1a742f73f65b882"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ca6042403333845473e0a45df28a6739"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "7e7df4d283e34a3c092139b38b742891"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a34883fdc2ac400a5a915f76c06b9578"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "84d02b3ce68bfdea985bd80a9b51282a"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "16fc63ed586e04c0db07dc188e71c92a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "ec75764c50d01fa46ccca70bbd019e93"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "21af5155670c360a401a8d26ffe07a38"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "f969b678fd177d8a6aa9fde4036688e3"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "5a759e12e234a8bc5bb87b25bed89983"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f4e0b0a87a4f8df4219694b57232ab3b"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "1fb2c37fcc9041569bda819c63c1ea66"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "bb4f3942ef727a11395dbc95049b5e20"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "74ef89671851522acd805489d2575982"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "bf20de15e94e60a59efa425b389ba5d4"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "a1a38b5c327a33a7ca570f75a45a2c4c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "33dce4866470cb9a46a09655c9903703"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "23b467af8c5dc819ed5615989d1d0435"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "7dc0bca57d9aed73db46d7264213d89c"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "062c8dfbd459d57a1f5ad2c8111a0140"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "647d6f46d3a1402cb3a32793462cb0c2"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "8783ffd3da210b30d0a7e40c81b470d7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c38378dddeac8a8601233410284957dd"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "2aced86f957d040bc62d5141f7b6acd5"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9ecf640039c8b296da83236539dc0c53"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "524d08ce87b9f52698773f8584003f0e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b8c8e2d0930487ff977b923868260dcf"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "7a987d9dc19264c837dd4b7ae077fffe"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1d1e187f92930e58e51fbca745ce5e98"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "03f111fd7840f7e2633150e8febdde00"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "2ded3c38878a0c247acae417c4279267"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "40100234c090e096f9ca29333764d8cc"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c2b648f13bac01eac11077140efae5da"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "ebfb0c57d7575e4459fd930ec05dbff9"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "bf9450ae1bd7e6a8f9d52cb7d4f5a904"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f7fdb217b53deca0c9f06471b9654675"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "9872604a0a7de271bf62baf58827a8be"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "891d80fded50c7dd022dfb8dc32925f5"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "434b1fa24403841a0cda0e31679ecad7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "d3ab32efc2e0788a69b3f675aa6d1efd"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "6ba3747497d40f3a03b47ac6823a45c5"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "b85ab4679b9b79dcb6ccdceaadb46426"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "69bde3e3948b57777a2a3567df34aa11"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a90338fb454ebd286a00f676db621c93"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "44952a58b9d57c0d34adee0b91795fb6"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "cd7aca977c1b968857c5ea72683fd5a6"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6e28578c051bb3bea6b8ecc2129f02e3"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "13eaf05239fc7a5c63b3b520de1b0d43"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "93efabb58aacaf6206adaf30ea680f9e"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "987e8e0ee267a8a63e6e958602deb6d8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "bbb81aeb2d24af305476fa95a1690f1c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ee484e4b4dd1a07419f5efc305f30b85"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "e192c7f2adba8afbbc23960a97066675"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "8bfc6fe75a32c2478a2eb948d9503f51"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b86c7f522a759be4745fbefcf1a68d6c"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "0f589909c0dd065272ef164bad2ad49d"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "dfd8bc5615fe5384398907ceb91e52a7"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "076b9467100a045c835dd7b8a3a41f52"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "a376b0c917229e41e3421ad1b9b33251"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "e799929fd1927f437b62be624fc8e70f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "811d4b45fee827db8b3e177db8537a55"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "3f1439d5bc23acfaf4bfbbfb098a68f6"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "35b1709feaab78705075fecb5fb5a07e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "96c882f5d0cfed54c8c39390b638393c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "19a08ca6781abbf405cdd3baa8973cd7"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "5b82d4d13152ee6e295f964f20a4ecc2"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d84c7673be801d821c9c23c63727d562"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0a4dbbb8e1e6f1987cda64f6bca040f1"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "96f723d9c75d19306509981a2393ef94"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2fd6f49b53e1fe950d18de2ab8f2681f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "78febe783a6e06a9108dfa465096f97a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "9cdca397ca59339e27bb57c9c287aa00"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8028f1448079649032f5bdb0204175d6"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "50c333a8629094e76d24227d473c9dd1"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "218f3eb95cf3a820306b8cb8acbfd5b3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "a81569211a83ccbacacc23b2c9dc66dc"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "363e516a1af4235aaef6ed6b840feba9"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "edd1d8831116ffc36e24de420ee93037"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8908ef507b77b8a9f728db09e382da36"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "104f5613768825324acd1f88b6f9a7ce"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6ac8d0358b75589fe3b149cd68c6ead9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "043b6794d99fb3fb4b912c962d3dce14"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a04fc81e8fbab32d82385fc89a3e102d"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "022fba6ac08f095e9701dc9aeda93d73"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f4cc5aaf5f5f981ad4aa88c512637578"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1bed0dba6dd95e9d49b4cb102c09492d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "110d05b9e96b9da22b2845358e320639"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e080f2709d612c8d807e6a40e3021138"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9447f0b95a4991aac63c249cc984042d"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "81c845b01e26e82d5f3e74c1e1a2351f"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4fce846db19f31402e74112c2c0a1cc5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "3ae22fd8cd1bf4d4a99dd6ac2370be3f"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "6605889065013d1f9863cdc96900b963"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "01ba6a6d7716dad1874291d392c48a6a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f46df207bec3827229fcb918a6caeb01"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "ad28dd9697b54ceb766df56919bda1cc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ab6dfa620761a7fd78233b5c20631149"
  },
  {
    "url": "tag/index.html",
    "revision": "c23ffef5a5557aa8ca372231b6b8e649"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "db678fea98fde8abeeee08b7d314bb83"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "de15c41f5661203ab5806aa7d58ecf2a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "40ab55659dfe6c9354637404b244c385"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7d517688e00dd7fa94952bfa7201d168"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "a4f9e1c53f032bdb9ec94d53a425e665"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "3dd83c0ffad4c349b7abf5bc5a7d8c83"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "ffcbd23f170fd6aa5b1ec7b7e674a57b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ac35379cda22269590d097778db0fcc2"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "4d3d1b0267f167da81c77439bae9d6e8"
  },
  {
    "url": "tag/json/index.html",
    "revision": "8e77b11b5a5c85ca7a300a0c3b8b1322"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f9eada7a99ab64a91ba580c0f0f502e7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0e8b6ed9503515c5e67f604fa491d72c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "67d5082a144f761c3204c8e31887e103"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "100de365ac374e20c5367cd3f8419587"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "49b29fb26ad1670c4eb268a9194c232b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d03d84c5ade6abc0fb628894ab4c48be"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "79251c972cc483640eac02c607e17ec1"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "f0bb8835421879915c89a0e349912a4e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3b1444f759d58a1c2ee90c5d407c0a7d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4aada61bae426fdf82252b445478c8f0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bd77256fe539e6e21724b68983143850"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "a5312c7865974d9409c59ae156c759d9"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "f00a829b85d6b5bf57a0c7fb26eb72c4"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "7291e57dbcaf68267a4b09bac2d227e3"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f9c67ebe98edf2b344c7c9aeb0b102fe"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "bcb2e74ae5730bffbf45a6f9ff9d6f5d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7e4d5a1a6a35a55588eab75b0b6fa189"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "5ebc7ced3cadcf5cd6e1a186e9a15574"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "61940e62202b40eb7ad8d757bb0f4868"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "09461af2f6e58a75b36d1a593930abd8"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "5ba0015014ac71cfdff035d6b3972997"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "056f104c4a8d602213b6728206ddc71d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "94f28ee438e324213c32bf9e9ed3bfb5"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "2768bca041c5cc0b44683f2323b351ab"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "43c37ae0ae586daa0f55bd00acda645d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ca087c40587e51db4c126145cbd76f66"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "c174cde1b8b68b1e9505026a4bfef19c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "bffc62a55c309342d2f43f26172c8f61"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3624c2e6dd2405d8d6c575de51d26b48"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "def1530133dc3d5031eaa2ff300a09f6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "9288edb808576e03ec9543b2b2b1bef8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "1838d7cd3544a98a264443a0209618ab"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cc14c9250873f3a32d436bcbeb232aad"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7a058fae7109ba12425be4936be52aca"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "306769ff5398f25e8000c330439c9ba7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f618e49f784f9a2c2324d453366dbdc7"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "c795bc5ed4ba34d8cdad34d8b9a6b294"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "dd2922d93f228b5e3bbbfdbabef455ff"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a24ec901bf4ea446cf1f8329ef2e7506"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "9b92c78c4b8d7bd5fcdc71de05575f25"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "422b371aee8230116c61a953a4074dde"
  },
  {
    "url": "timeline/index.html",
    "revision": "0952d12d9f7580336dde740bf1a009d6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a2440baee8dfe9ecf39b4ba2c707867a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4268795a391cb1d1043c0bcc0cf3eb91"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "033f68c3988d732979031a0a2b9c25f8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7bff5625886562d8cd6dcf8b02b3a9f0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "78f71d04fe5c2b5a1120c0894d03e906"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f7bb42e11262b90869aa7c8d0c78cb2d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d13fe869207ed46e7d0c8b1e95a7f68f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "18409d29b1088e4ae6ac8fe27270b075"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "dc143d5673e61cc497fffda7dab617d9"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "e52071d4689b9547eb594cc5af5ec597"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "97ee0665627f15f11235ad49a88e422c"
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
