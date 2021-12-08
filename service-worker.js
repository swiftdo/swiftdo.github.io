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
    "revision": "c10ad8e06c5d710453fbe28a8bfafe49"
  },
  {
    "url": "about/app/index.html",
    "revision": "64a67a0421b6da47ddf932b12a796e88"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "fd6ca500a8e65594e61f446850f745fe"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "71b5ecd768a3f5da48a4ce0aff02bea2"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2983b29d9aa87e9ed218d691979c3d2f"
  },
  {
    "url": "about/index/index.html",
    "revision": "47fc7d3d86d3b2aa09795848fad893b6"
  },
  {
    "url": "ai/index.html",
    "revision": "8a88b2aa67d26d833df148627f10530e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "93f664eef1754f344026cae8fc53718c"
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
    "url": "assets/js/100.a1a4642a.js",
    "revision": "4e8c92a964d60e709adfa6785ef75fb5"
  },
  {
    "url": "assets/js/101.7890d83f.js",
    "revision": "59a180631aaf3c3d29df3322ffb0d2c1"
  },
  {
    "url": "assets/js/102.d45aa5ab.js",
    "revision": "84da1bc1402d25cbacb24055225e8c42"
  },
  {
    "url": "assets/js/103.c004f917.js",
    "revision": "a438686af9658bb304cb055181c5702d"
  },
  {
    "url": "assets/js/104.ff4d1545.js",
    "revision": "69f5e5e6da39554aabd806054d1f3b0e"
  },
  {
    "url": "assets/js/105.424412c2.js",
    "revision": "b1f7c2034caa8010cb6200d3f33c3ae5"
  },
  {
    "url": "assets/js/106.56ea05eb.js",
    "revision": "00a903ef38fa3e9bcd760ee4b87fac5a"
  },
  {
    "url": "assets/js/107.b44e53c0.js",
    "revision": "ef337a49b527dc75806c77532e0c5978"
  },
  {
    "url": "assets/js/108.20d075a0.js",
    "revision": "b6a54c4e2612fb36a16f66b348bd41d7"
  },
  {
    "url": "assets/js/109.ad2998c6.js",
    "revision": "57c17989869b65c0e6127116a6784d6d"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.316a757f.js",
    "revision": "0800fb1a04f7378c800b3d1cedaafe45"
  },
  {
    "url": "assets/js/111.e921ce01.js",
    "revision": "6ff4497a9315d97fac9ba3414891785e"
  },
  {
    "url": "assets/js/112.3a31e6de.js",
    "revision": "9f5c480e18068b570ef70a6a5748ecbb"
  },
  {
    "url": "assets/js/113.199752e8.js",
    "revision": "ecbda06bee9bdf6e11128df773de4103"
  },
  {
    "url": "assets/js/114.f291d842.js",
    "revision": "10905bc8addbac1d581075ab58cfc403"
  },
  {
    "url": "assets/js/115.ae74ff32.js",
    "revision": "82f4e4c5a5c5af24fcfdfe534347849a"
  },
  {
    "url": "assets/js/116.d5476b6d.js",
    "revision": "868c218c8af1eaabe918685ff0ff5b67"
  },
  {
    "url": "assets/js/117.628f1668.js",
    "revision": "73b6bf24ce0d88c458a95254cd5d76ec"
  },
  {
    "url": "assets/js/118.dffa6639.js",
    "revision": "38fdb8e78369bd1faa1557e0760307d5"
  },
  {
    "url": "assets/js/119.56bd86f5.js",
    "revision": "5f1f01cec88e57291093d5a0e24b0f83"
  },
  {
    "url": "assets/js/12.749f4d86.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.79f65535.js",
    "revision": "b5ab2476d57f77dd727d3e6b0e699849"
  },
  {
    "url": "assets/js/121.b8161f3c.js",
    "revision": "f3c16edf84b9f7642ff356b9449c2345"
  },
  {
    "url": "assets/js/122.098d6bd1.js",
    "revision": "3c356904ec5f1a894bab26ea069bcda9"
  },
  {
    "url": "assets/js/123.8a7e9e7d.js",
    "revision": "c2e53d1d911ed03a65c3526a13b05433"
  },
  {
    "url": "assets/js/124.648e313c.js",
    "revision": "d23398eff16e3263fc29afa23fbb4ffb"
  },
  {
    "url": "assets/js/125.656a52a6.js",
    "revision": "afd987b88a33d0ad873eeaeb4e8dabc3"
  },
  {
    "url": "assets/js/126.de3c64ef.js",
    "revision": "3297581e11540a074c95354ad30994ca"
  },
  {
    "url": "assets/js/127.61cd182c.js",
    "revision": "4c9d2ae18fdfe8ea3f688b7271716dee"
  },
  {
    "url": "assets/js/128.24d38004.js",
    "revision": "8e0c9d082aeb293d4641807ad7585845"
  },
  {
    "url": "assets/js/129.8284d8fc.js",
    "revision": "eaddb3773025920887bcfe256341de82"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.ad7ff180.js",
    "revision": "23e1365c3fac32546c90b1a22b2eed31"
  },
  {
    "url": "assets/js/131.9dfdb641.js",
    "revision": "c1c6da90acec0b97917be14fe0ec36fd"
  },
  {
    "url": "assets/js/132.671f1855.js",
    "revision": "d2286f84f5a8b1803ed8e99055f137e8"
  },
  {
    "url": "assets/js/133.075dfbf0.js",
    "revision": "1312affa93a51573c8ffa1e60c53fe7f"
  },
  {
    "url": "assets/js/134.b9667111.js",
    "revision": "5ce441ad1aa01956003627341fab54d7"
  },
  {
    "url": "assets/js/135.907e96f1.js",
    "revision": "1c34281880e73a7e86a4c4136ff0238c"
  },
  {
    "url": "assets/js/136.2a95d6fa.js",
    "revision": "6f67517f6d6d2584ce608edda006c04a"
  },
  {
    "url": "assets/js/137.1ec30a1a.js",
    "revision": "054466231a9a0f8ae700e4ec58917cac"
  },
  {
    "url": "assets/js/138.43938164.js",
    "revision": "242c3a9c47a4dee1a900e750b0aad527"
  },
  {
    "url": "assets/js/139.9f9c9db5.js",
    "revision": "f9cc3100dce042467b82d144c753e911"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.03f05480.js",
    "revision": "7a50fb9d4d13b11093cbe96c954e1d23"
  },
  {
    "url": "assets/js/141.a7f69883.js",
    "revision": "b0087865ac8b1485cf2d2bdc4dcd4a19"
  },
  {
    "url": "assets/js/142.dd28f03f.js",
    "revision": "285cf14e913e7f4215c9a66e412e757b"
  },
  {
    "url": "assets/js/143.1d69b258.js",
    "revision": "b83f57e9f797ef40466f5fb056b2e69c"
  },
  {
    "url": "assets/js/144.072de752.js",
    "revision": "9a1aa11111bf9142d7e83c733ec48958"
  },
  {
    "url": "assets/js/145.bb798d22.js",
    "revision": "97bee715ce66214befc3f3f89dee51c9"
  },
  {
    "url": "assets/js/146.5cb2fd13.js",
    "revision": "8d17f85b321f7552b27308add00fac1a"
  },
  {
    "url": "assets/js/147.826154c2.js",
    "revision": "3ebac220240650aa34e8dd9b3ba446c8"
  },
  {
    "url": "assets/js/148.c188d7d4.js",
    "revision": "fac71eea99b13199874b8eeed456eb79"
  },
  {
    "url": "assets/js/149.df88d9da.js",
    "revision": "b65b9e0417a0d08c9bf35c8a3cb14293"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.0101219f.js",
    "revision": "1b9c93f9da73764c310c4d5974a124f7"
  },
  {
    "url": "assets/js/151.0da65061.js",
    "revision": "7de40850c53b77cc8208afbe7121680f"
  },
  {
    "url": "assets/js/152.13e1bfd4.js",
    "revision": "394490cd5cac0f36f915ba410b6881cb"
  },
  {
    "url": "assets/js/153.dc1c4573.js",
    "revision": "51ffe2b72690823bb056223f83bce115"
  },
  {
    "url": "assets/js/154.1039b505.js",
    "revision": "760f3eff2b4993a0f39d3386566ca51a"
  },
  {
    "url": "assets/js/155.bf1e92dc.js",
    "revision": "3a1ad611d2169a025016c27bd4aec0cc"
  },
  {
    "url": "assets/js/156.8244fd2b.js",
    "revision": "9829f8507f4c59c4f1396b9cdb904e66"
  },
  {
    "url": "assets/js/157.ca969829.js",
    "revision": "84bcdc8003a9b495419784ddc3b9d77c"
  },
  {
    "url": "assets/js/158.734d0be9.js",
    "revision": "8eb13c391130cd1c7db4cb2ee224976f"
  },
  {
    "url": "assets/js/159.de78334a.js",
    "revision": "285e18c8ae8b31ad33e00a48f1f4ce30"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.5c3ebd2f.js",
    "revision": "c73aa10f78ffbc8548226a7eee038901"
  },
  {
    "url": "assets/js/161.aa661278.js",
    "revision": "c90cd1d1abcf8a7bde5f4415f3570eac"
  },
  {
    "url": "assets/js/162.183394d1.js",
    "revision": "3ba28ab544eb2fa3da91ad7d68ba7f05"
  },
  {
    "url": "assets/js/163.172076a6.js",
    "revision": "18e52bca686bf2b25dfb88c1a8de5967"
  },
  {
    "url": "assets/js/164.d2984db6.js",
    "revision": "b0449890e935bda0004ff9db28056aae"
  },
  {
    "url": "assets/js/165.9358c432.js",
    "revision": "3916d9a10eb782778f6ff64dfe0d4d2f"
  },
  {
    "url": "assets/js/166.d22ea351.js",
    "revision": "a94970c22918869d49531016a584d8ab"
  },
  {
    "url": "assets/js/167.377e6c2c.js",
    "revision": "8ed6546098550dfb80a97262a6d12fb3"
  },
  {
    "url": "assets/js/168.f3fe08de.js",
    "revision": "8bb3cb9ca57c56a6d37f253e2b942f50"
  },
  {
    "url": "assets/js/169.a3c7c267.js",
    "revision": "ac82c3f1f42efdaf2091df9fd50f46c1"
  },
  {
    "url": "assets/js/17.adbf4e27.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.685f8595.js",
    "revision": "d1fca274233c5d8171f7fbfd54a6e210"
  },
  {
    "url": "assets/js/171.1199397c.js",
    "revision": "f112a9af95e764b7ba6695ccf8edf0ab"
  },
  {
    "url": "assets/js/172.14904484.js",
    "revision": "2ceb8c2be435f7c42653f25fd73ff78d"
  },
  {
    "url": "assets/js/173.cb6be953.js",
    "revision": "a7f177c6765ff4d201c973996031ef5d"
  },
  {
    "url": "assets/js/174.ec111aff.js",
    "revision": "c43e4e4297f22acbdc2da18c8672672d"
  },
  {
    "url": "assets/js/175.03f13f9d.js",
    "revision": "ec4133419a444eb4d2acacab659808fb"
  },
  {
    "url": "assets/js/176.d6d532d7.js",
    "revision": "6d4ef0e33ae6bbec30fdac6f020d97a8"
  },
  {
    "url": "assets/js/177.0093b902.js",
    "revision": "e4ff0e84087e8bcc1ca408477bdcadb5"
  },
  {
    "url": "assets/js/178.5e7012d9.js",
    "revision": "63eac21898654eebc87586f1ef4381c0"
  },
  {
    "url": "assets/js/179.1036101b.js",
    "revision": "8d389f165c218ec22292859a29e8c40d"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.9d5c984f.js",
    "revision": "b881d3cce8e6da921be108e5fe7ae98a"
  },
  {
    "url": "assets/js/181.566ff603.js",
    "revision": "3f9a23ff48f534ba3311f8e364b5789c"
  },
  {
    "url": "assets/js/182.8ff99762.js",
    "revision": "ad1c7ccdde66d943e96d282eb1cf0cbe"
  },
  {
    "url": "assets/js/183.85886d80.js",
    "revision": "06c6cc5d87244049360bb5cffde9b2fa"
  },
  {
    "url": "assets/js/184.7d8e67c2.js",
    "revision": "8548e42687eb0edd9a77f74aee50803a"
  },
  {
    "url": "assets/js/185.67667305.js",
    "revision": "4b725d3acdc8f5e75414ff64d24b2207"
  },
  {
    "url": "assets/js/186.ec9941d7.js",
    "revision": "e9755a820d83dfaace1660066de8dbda"
  },
  {
    "url": "assets/js/187.0a96a83b.js",
    "revision": "8e6fa688bdeecf816cb479f15578205f"
  },
  {
    "url": "assets/js/188.73838a3a.js",
    "revision": "d0d824e02b994c92970cee3f1f63024f"
  },
  {
    "url": "assets/js/189.cadbd4a6.js",
    "revision": "4239b38f5a013510ba02b2156c6bfb56"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.3e0ad8f1.js",
    "revision": "b04f28ce6d07389e729d7e075e164bc2"
  },
  {
    "url": "assets/js/191.7bd3d162.js",
    "revision": "9a4775dcb4c28435e77de8b52254e92a"
  },
  {
    "url": "assets/js/192.30bccb2d.js",
    "revision": "90dc7c558d886571b04a526a1421a49c"
  },
  {
    "url": "assets/js/193.89f2c881.js",
    "revision": "d7655bee5f491305705586cdbe20a3d0"
  },
  {
    "url": "assets/js/194.01d8bc08.js",
    "revision": "f483c5276b5f0ac07854c0e87306c854"
  },
  {
    "url": "assets/js/195.eed92ed5.js",
    "revision": "b8a0e3063b95a412966f8d90f8e91c10"
  },
  {
    "url": "assets/js/196.0eb7459f.js",
    "revision": "d2e5505162812c14cf531ed794ac722b"
  },
  {
    "url": "assets/js/197.0e96e549.js",
    "revision": "7f2df32f3383b155357ee1f2682f30ce"
  },
  {
    "url": "assets/js/198.135de961.js",
    "revision": "902d6d1c95d2a04613a6a10a655d3989"
  },
  {
    "url": "assets/js/199.047d1b8e.js",
    "revision": "bbc402479deaf8e9d568e735311788c9"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.96cdeae4.js",
    "revision": "076c38a4a2bbdd434961de9787fde861"
  },
  {
    "url": "assets/js/201.f6f6db3a.js",
    "revision": "2f84c309eb3640dc875829009e93e29c"
  },
  {
    "url": "assets/js/202.70639d8e.js",
    "revision": "ee06c75dd621c6786115829db4ad63aa"
  },
  {
    "url": "assets/js/203.84fb451c.js",
    "revision": "af0890bb38e14886b0cc9cd92713632e"
  },
  {
    "url": "assets/js/204.007474e5.js",
    "revision": "530b44917f81e114210f25911aaf130d"
  },
  {
    "url": "assets/js/205.c4dbb485.js",
    "revision": "73ec8b7dd95742e0a8212f3de66524c4"
  },
  {
    "url": "assets/js/206.b96415c9.js",
    "revision": "e55326d907803d573da9a42612e7e4a1"
  },
  {
    "url": "assets/js/207.e799d0cf.js",
    "revision": "685531cac17d2aba2e3f264cd3ddb264"
  },
  {
    "url": "assets/js/208.8fb218e5.js",
    "revision": "c498a0f1b60764bac75ab6614e7e876c"
  },
  {
    "url": "assets/js/209.eb0934eb.js",
    "revision": "e703d873275300253a490733f827057c"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.38b0e403.js",
    "revision": "c6c3c8e8cae8ff5c003641a7ae3632e1"
  },
  {
    "url": "assets/js/211.7f23e1d7.js",
    "revision": "cff1a6f8dce5c6fda6081560f3b4664f"
  },
  {
    "url": "assets/js/212.b9a27093.js",
    "revision": "495dc027d3599b8cba1f953e2c11bad8"
  },
  {
    "url": "assets/js/213.4fa6ddfa.js",
    "revision": "10f8af59aa16020518eb5a907693ef61"
  },
  {
    "url": "assets/js/214.e361a28b.js",
    "revision": "c30075a029be566b42dbab42500d917b"
  },
  {
    "url": "assets/js/215.f4c398f2.js",
    "revision": "bab569b9867846c6b1a5a30d5a62a347"
  },
  {
    "url": "assets/js/216.063da47e.js",
    "revision": "67623e5c803fff7ce63fbceb1f7555fd"
  },
  {
    "url": "assets/js/217.8e92ab22.js",
    "revision": "c0277ee1b5259fbbcbe386c256064cf3"
  },
  {
    "url": "assets/js/218.09b61b7a.js",
    "revision": "af848027342fb39f054220c9919c2ad1"
  },
  {
    "url": "assets/js/219.2bcf1b4c.js",
    "revision": "d0abff892d2b8040b257de0eafcaad9c"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.60900f4b.js",
    "revision": "583d3353fdfc81a0112dc3449f3d4fbc"
  },
  {
    "url": "assets/js/221.f34b2664.js",
    "revision": "525e332271e3c78376edf76c0521107d"
  },
  {
    "url": "assets/js/222.ba4cd85a.js",
    "revision": "8aa337e50de8da86fd87311c730d105e"
  },
  {
    "url": "assets/js/223.a7f209c1.js",
    "revision": "14e7981a367b9374b7386ae7d70280ac"
  },
  {
    "url": "assets/js/224.a2020b13.js",
    "revision": "8cb57db6f9fd70727697e4bb57bff19e"
  },
  {
    "url": "assets/js/225.7ce642aa.js",
    "revision": "f6d3187284446ecef15d97b618c447fa"
  },
  {
    "url": "assets/js/226.57dbb9ea.js",
    "revision": "0f1d8114812f962f6748f0b01fdfc1b4"
  },
  {
    "url": "assets/js/227.8d68fc58.js",
    "revision": "af86705d9b7d72463fb5a82821797b41"
  },
  {
    "url": "assets/js/228.cbbb5d92.js",
    "revision": "b0f85fb7b3f8d1218ca45a4c0b3d0dd8"
  },
  {
    "url": "assets/js/229.eb1998ab.js",
    "revision": "e0ca35d8ea58a6066baf9ecb82741bef"
  },
  {
    "url": "assets/js/23.a2e14971.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.0ee4b711.js",
    "revision": "a401ccefb4bd536408223b35792f0f73"
  },
  {
    "url": "assets/js/25.b045a20d.js",
    "revision": "52f23e1cbff64035373016c053d496bb"
  },
  {
    "url": "assets/js/26.4129a7fc.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.11ae4590.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.9f159f91.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
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
    "url": "assets/js/31.fc449779.js",
    "revision": "f5c7e7d9ec2d2f39d2a34ba462b70356"
  },
  {
    "url": "assets/js/32.bbbd7f78.js",
    "revision": "1aa48a9e93e7f2afd9b6f5fb63f1278d"
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
    "url": "assets/js/39.37976279.js",
    "revision": "7e971c0334f45da4f1accf1ef4d2b431"
  },
  {
    "url": "assets/js/4.d8a1ff43.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.83e6c11c.js",
    "revision": "2fe3dfcf882ed107561a7dda03e8395a"
  },
  {
    "url": "assets/js/41.34293495.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.8d322209.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
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
    "url": "assets/js/57.49899604.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.353dbf26.js",
    "revision": "dca30611bc890fd7e88559bf45106399"
  },
  {
    "url": "assets/js/59.5d3a6e05.js",
    "revision": "2d0fd8c517f47decc9567bd4f4540f59"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.1980019a.js",
    "revision": "d10f8c14e2ecdda820ea551c533f5241"
  },
  {
    "url": "assets/js/61.4e6499d7.js",
    "revision": "0a90b05e03a9f8ce591836831b3fa5c3"
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
    "url": "assets/js/64.ca24116d.js",
    "revision": "54b623e74f2918935841da97e705e04a"
  },
  {
    "url": "assets/js/65.bef781c6.js",
    "revision": "9d1a2029aedd41d9838e6dfeb4f45cd4"
  },
  {
    "url": "assets/js/66.55b47e8d.js",
    "revision": "9bbb87eef9500eede10a20fdde6eb28d"
  },
  {
    "url": "assets/js/67.4713ffc8.js",
    "revision": "f6fd2a9adb70ce5b73f603f46415fa58"
  },
  {
    "url": "assets/js/68.2cd19773.js",
    "revision": "46f033cc9ce6ebc4726ad4c5fe4922fe"
  },
  {
    "url": "assets/js/69.164acd8b.js",
    "revision": "42fa6a202a508a9deac08c010eae6965"
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
    "url": "assets/js/73.12619a13.js",
    "revision": "c7f97f7c510ff45b9ae0095ef72388c3"
  },
  {
    "url": "assets/js/74.78538f2f.js",
    "revision": "28e51fc6e591f8395b9513f477c2d6c1"
  },
  {
    "url": "assets/js/75.6f6254a0.js",
    "revision": "11e4ca5c3e862d24be92b5097dbaa8d9"
  },
  {
    "url": "assets/js/76.14867609.js",
    "revision": "4d59bb3ecae0d40748b05a6f5a7b884e"
  },
  {
    "url": "assets/js/77.50e302cc.js",
    "revision": "a49c65ecd61247d4bdf4fb8a1123a41b"
  },
  {
    "url": "assets/js/78.c11ebbd8.js",
    "revision": "f3fb5b960532596e16b3134027fd7f85"
  },
  {
    "url": "assets/js/79.31ca83a3.js",
    "revision": "10b3535450046cf8823367fc749f1d9c"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.102f40b7.js",
    "revision": "9b91f1ee44e330e114f65fb936e5195d"
  },
  {
    "url": "assets/js/81.084f5b1e.js",
    "revision": "f690dc5981aaad8f669a15dae04ccc74"
  },
  {
    "url": "assets/js/82.ce7d0c5c.js",
    "revision": "c763348a08ca5e7b60988624e8d04dfe"
  },
  {
    "url": "assets/js/83.eb43b320.js",
    "revision": "1468d0bf2fbe21f28e656cdbfea73d0c"
  },
  {
    "url": "assets/js/84.c4b17276.js",
    "revision": "f75654d2a844e7b417bef6e3073548a2"
  },
  {
    "url": "assets/js/85.01f1c5c6.js",
    "revision": "3d7396c7c6789918900522ed03f359d1"
  },
  {
    "url": "assets/js/86.d2bb9b09.js",
    "revision": "66c447af527ee47a489a32703136a432"
  },
  {
    "url": "assets/js/87.59135926.js",
    "revision": "58dae6e48c626279b658986988b71f10"
  },
  {
    "url": "assets/js/88.03a684a8.js",
    "revision": "17aa2b90c4e3470cdacc70829df9e994"
  },
  {
    "url": "assets/js/89.3224b66f.js",
    "revision": "8343f666f8f960d71dae67afccc529d4"
  },
  {
    "url": "assets/js/9.28c3d5f1.js",
    "revision": "14361929581d60cccca663a151362cd6"
  },
  {
    "url": "assets/js/90.c7869d6f.js",
    "revision": "9dbb27c908f043789a599a088fa6686d"
  },
  {
    "url": "assets/js/91.c55c3916.js",
    "revision": "a972bcd4bf0f399977fef8cabd3b1c8c"
  },
  {
    "url": "assets/js/92.e8f4a301.js",
    "revision": "c86f1fa23d8f6b57e65538931e46d454"
  },
  {
    "url": "assets/js/93.dd5ac9e2.js",
    "revision": "e3ff5613a5833d49e53fe7438ea1b5ce"
  },
  {
    "url": "assets/js/94.e6827bf7.js",
    "revision": "de6198586518c3e5d9cb77f1afe5a381"
  },
  {
    "url": "assets/js/95.473827be.js",
    "revision": "6c8adc10363d843a220dd4c207d606ad"
  },
  {
    "url": "assets/js/96.d861b18b.js",
    "revision": "2482f8977b64c5693de9d6f993dfcdbb"
  },
  {
    "url": "assets/js/97.3c176954.js",
    "revision": "25f14f5872224720d65d4c38bf6d726b"
  },
  {
    "url": "assets/js/98.7da9b3c2.js",
    "revision": "0b2baf01307240259684500af8783c34"
  },
  {
    "url": "assets/js/99.6a1ff020.js",
    "revision": "1f0038f35a7aec7397179bc81fa76a2a"
  },
  {
    "url": "assets/js/app.4d75ee41.js",
    "revision": "c35e343d68b524554de5ce2428a6c594"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "3adde2f415c2a0a34a33bbc5b391d096"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "fcbc3d791002b41784c1e1dc789a971b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d2b28a86b5e265ec28a96418d32bddca"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bc408915201b95049abff42265782eb2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f7409f599d59d72392b862074df7a4f1"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5efd0ec92e4452cbf518d7faae00768f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1a2379d117992079af8e376df9e18702"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "8b5f3086ab8f10339ff77750f39ec11e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "99a3fb80bec4f5cfbc2858e12ff4cfea"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d5e39fad649e2cd86b16f89082717a48"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "1f5d4b34a88b4f01b4ac55378f6873ce"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "03e17f61fcc4982fbcea4f52247478ec"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "7ee629e7b81f6e58b5d0339b2de16fa7"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "077212a39971eb1d89e61420897842d2"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "4fefcb98f4fec32bc4450e02157ade85"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "46f38ad91ac69456b52b8f5b8b14b084"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "25f673ebf6dbf5cf41535725f1c444c6"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "06e33e58de06288aa21aa67195ed28c6"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "959d5bbfbe90c42f353da2a47e97e6e3"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "91a366b7f3a9f6d9c2747dbba3eddeda"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "e5decfa9a278c355424bc6c82faac870"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "91bf585d7f3f306cb5388a1afe8a9666"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "70e48a4f8a5201a6b811c18a534ecdc8"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "5cd915928f78873ae44d577c549a3ff6"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "b9ebf465df74f343f45421065854315b"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "b388c561923d21691bff81d0891e7b1b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "e3574ba033b02af0aa0774ed0770b303"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "3adc1734574066ca4ac92148ce866217"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "96bf873c5a176e536ab44b0953c33fc0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "6395038669b8d570f55e88b67281eb6f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "403d3f7966642edd2c2e9b7c5e909ac3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "f1d289a9680a21b8a217c439142e9a25"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "d6508e775801aacdf8a2374c62d9fd78"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ba19a0b956514f896725e8cd087d9cb8"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "0c30312afd2e690a3a04bf868c3233ef"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "ecd1f7b55e6e746f4f720c105f5db5b0"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "cbd6a805aac5ba5abcf98818ec14a6fc"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "e34b58002505faaf331554e8cc9c9d13"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "383117b1cd8c0ff92c50f0ef729517ee"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "a85b75fb3c76bb7f8d607a0e4ff9eaf4"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "253aad381fd10baefcccd3d5ce6ff3bb"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "5e33db42471fda6ac44bf64aade8ec89"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "7d9d69445927306805d25cc4e086f00d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "6328b5d1b9ac5a54cc6f3598ff3e9832"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "beadef0fa46b91819c4b5f22404626af"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "809c7df04ffc761ef613e494ccfcf7dd"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a4ea27ae9b2ffa50803cb5a1e54fc9f8"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "9e01516ec404b97c7efa7bf163b48617"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "89dd23fdfeebd179842a5fa6c4a4828c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "4545b8513ce67e7b94fea4f8cb27e465"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d304af4edfac25f172cd85094006cab1"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ca16b48d48c71a5ec742c07ceeea7f94"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c114e2fc20ca16f53cb55ded9704ad41"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c54b6eb943adf08a78935573d2e7085e"
  },
  {
    "url": "book/index.html",
    "revision": "f376ab54f81f281fb035f4ff13820d48"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "fbb9b8ea0ebcbd18419ca1e4889c3822"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6d937b7803d5c30160b8525cbe65ad6a"
  },
  {
    "url": "c/audio/index.html",
    "revision": "79c247e418d88f8e1ea3f49cae132fdf"
  },
  {
    "url": "c/program/index.html",
    "revision": "31ba1be4380027473dd262daeb801ef1"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "4e7b6c344b7f12ecdcf4f39966a023ce"
  },
  {
    "url": "categories/index.html",
    "revision": "3566d618f46d59afaf485fb8880ca377"
  },
  {
    "url": "figma/index.html",
    "revision": "4d1956d77ab5a5ebd398275db8ca4f57"
  },
  {
    "url": "flutter/index.html",
    "revision": "6f0add934182845425335097efcfd29d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "edb0de2926df56e309d6d38b97ee83d0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "877f481d0b5af016c2589a65633e3873"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a4a0939f9ec23d30c82cec2ae74fdfbe"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6ce53d6f073d0443caae7e1d3d6b3448"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "467210b7d52480dd769249331aef792f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7b800566320872604919bc3edc8b3933"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b3f35707ca3dfc25bb371bcaec0b7b1d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "34f8a685baba0817b70a298e3b9c9006"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "be88d21082daedf9bf9dd7b7a7da0a7b"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "98639580f39c45a5fa8fbf376d6855b8"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1e8d69d172afde6a724a083e5afb1449"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "674c5bbdf9863e03b2ebd59ed2221bfc"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "e912c125ec24eabab3ab5410bb85f225"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "2a94e9bdb0a24fa7311fde85ef9757b9"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "21dbd9c5a02409358162c871afeb240f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "320a58d5295cd7ee40eefb783b37ecda"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "0e4ee515a157cb339c947195970b4c1b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "4b0c795d3101a0379c6c737787a7a577"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "15fada0e63171d7546520cc0f81c7192"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1805ab64d71ae7ca98d791daa1a1e716"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "18dd4d1e47d432a4a046803790a37bfd"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "0808505a66d09adb3505b7df2c79d90d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "ba217e5e1a10683e7aa39019f30824dd"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "179f77982d5483f30b32ef0a5ecfa28d"
  },
  {
    "url": "haskell/index.html",
    "revision": "05f1810c63e44522fdf63dde13162bbb"
  },
  {
    "url": "index.html",
    "revision": "0beea320740843cc386c32bea35b8458"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "86ac4db9c3986e873d8d666a4b4686e7"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7b6171b91b2875478672c41e7a598c01"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "35effc067c479795f48080c4a9bac876"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "1aae178f1fb73eb0f4fd179a5082f0d2"
  },
  {
    "url": "python/index.html",
    "revision": "798d27f1665804dc510027761446e094"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "13765c19ad1591bab34c44c3bcae98ff"
  },
  {
    "url": "swift/better/available.html",
    "revision": "15956049d9fea1431799d1f1b3ad10bd"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "39da22acb45a9c88da5d3392fa3aa537"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "01f1884c9c2a6ffcad5d884ee320f3f8"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "613a67c61ab1682cf22ad5e5677a30ec"
  },
  {
    "url": "swift/better/di.html",
    "revision": "a901340558dde1498f82b02e7d26ac5f"
  },
  {
    "url": "swift/better/index.html",
    "revision": "dd1d1bc745090e966906ade905945c72"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7725bc4f1909860dcdb407ded37c2425"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "94b211878828cfbc9b774aae2929d90e"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "ea109b86c11c78d70b81b8f28be56179"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d0bb7ccbfe790d63c4efbe35332e9c29"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "4b60ebf579955f91dc0ee040f3e72c60"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8a7394974d035726cc1dbd36d63bacc4"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "75467871914759a5a1a1dd3bb4d1d722"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "09a1ca0b182736086501d21a2606749c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c402685506be7f64648c650a370e11dd"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "561294c1fb9d349b6b2f1549a5ba0088"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e73691a48b7e105035bda88b179b3d32"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9f49327767675cdbb345137aa5688629"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ab14c0a83327f59504906406ac23bbaf"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "763b4c55d4f70486b8a8be968a6536c0"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "9a1aa06342859f551cecc9f5808977cd"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "0a1d14fb2a96574c892afb5267633048"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "7b0cb6dda880eb4c82551601591953e2"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "3ad76775fa327dfa137770640d95ad78"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "eaa1bca3951819a9d39d443efa932617"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "1230f05539f883653e06c252b2464e94"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "487b1f8cacb40e8dbdf3da29a0e56c58"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "c10d5e7e3a348c9e46cb68b79f9a5395"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "983888fb6f1cc73b6a29144fd253638e"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "a8be3772b6ef7a4df9db9fd621d4d5a5"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "5d59d673c65d796cb2589ad342e7fa7c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "6ada10329b1a32e87fc18bd0ca1c727e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "8a5efa188f7df1757cc5bae74265dd0c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f740405df386d6cd3e8d4ce8898c577a"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "73e439ee7192b791cd8a8588d3c7c5aa"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "3c5e27c4389c904ad7beff02969f1ca5"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "a73b5945f32dfd745064bce6a7e66ff0"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3b35667ac2606b1b50e978c334ccd3be"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "5793c187e932c0037dc2a4274cc34526"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "021aabbb6c9428cb7447c5e0504cfec8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ab1634792e3d0f5847a65c4ebb24d471"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "48b61b7f0bc86727af960c57dc8d0e5d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "fcc9c3ef5006b08eeeca237f334a025c"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "93be9fac3670c344abc0f9440c4f1141"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "999223bf716b063066ce2d6a33a2bbee"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "3e96548326d19efa755e1b13d69a6f97"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "481ef33e5fc29ba783db5a983edeb422"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "45c8e282fff8a81fdc626de749ac727a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "503c1e3241709f72e236d9cc05bea19b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "f772344952052b21ab9762507ff4689b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "ecc05441aa5cdf36d816f6a7dbe88327"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "51503896f75376b7f436aaf927747b09"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "5f7533b3a661c743e99b559139f497e1"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "06d69ea9caa2376dabd2604804fb974e"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "91e0f861462bc1427ca21d48bbe37fad"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "cd2668a55ba589eceb14d312da9ed3e2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "c2b61c93cee07055a7e9f2a31158b689"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "4c10e31853a8203ed8c71953aa8dfa67"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "803bbfe7743f98fdd57c41f3070a4145"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "199d1cec2cebddfd1db312411b07ec86"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d13a4dd2b63230e44cc266739a75ca32"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "84514a873a47d82a3bce51268a0750be"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "4b82892b4560aded79530d9c520d9b27"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "304a70ca42bc670b70544c1edd75f9d1"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "5087a7002656e6d7d4eb5d383459be85"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "adb2007f0adcc3b214a9f68ba77dbef6"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "9de1a77429d442188b999851a6b9e0e4"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0cd036bae76fc58d47586ef63a5085c3"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "23ecc20e4e1c52bbd94e16f0139422d8"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "b239c3aa869bd390164de28e4deed8ca"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a42217f56c522170214be2e39a7fffe6"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5fdef727d4cced17f51bb9a0a80fb7a8"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4bccbf97066618677b747e35bae63247"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "97f7575efb70313573e6a1cdbdf111dd"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "9ca29c6f128b9bcb66b4c8f5659ac5f5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "503659d3e25259bdf684c32064b83edd"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "ba42304ede969a57812b71b887524c1f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "364c7e516df77afec665207f0b85977d"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "bcc2fcebfea37ff34a06413d0a27c296"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0573c6dd8e7cf7c933c8daff14ccfd6a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "25795c89a2f237acbf1da7e83bd6fa94"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "5306c7c8c83383397dbb25edf7184b59"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "4b8d89b6d6d2cc1eff4e3a5ba4c97db8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "c3037e3facf121265c2c5b40b07a8353"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "82e2c1eef8eeaee53c395d2fa6b1d971"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "8de6bbd9cbd0047e2e1061dbe60c9a06"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "d46bd0d6fed4e731e229de7e0abf4f8b"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "1ff36f445074c9fd7676790a17b87cd7"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "855c0a52f2283565d86c8de896702869"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "022848d54374d79bc6fcbf621fb87e78"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c69139517196a466d8a58ef6033fe88f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ae6388765ec9dd9690523dcedc1cf8c2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "178dbf9b15388501f1c46c4eac206574"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5c57e1a8f60a0ff8d0daf38df9b8dd25"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c400a37a79d56367ad06be4890f818f0"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "41a904fbd59381961a982a359f1db487"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "76ffa495ff71cf6d93626feb8fb44df3"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "c7028d86d2fb50f15dc619ee1c876122"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "5155a67cb0b264f5785b241c3db53f56"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a4fff6c76083dbf6fd9b37070f61c41a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f85cdf96318bc1e8c7168098a59fb89c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "11bf9abda13aa98053a79946c7e34e26"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "fcef90000248da15603e7fe831e7c992"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f27604990c5f294d8f05190455b2f571"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "38c9fdab5bc3ec1d49ef60123440f670"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3f54e5b14455913f67b625745deaf869"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3e15a862e0e0f7179a20b4e991e8259e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d6a15067a61c97e2df07da0c97e0aef2"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "25d2f3789214a7c92964a3c06bda76fc"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5970cf95228f03b04c03725a43cd9210"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ac53934531160385ed5363525f2a4f83"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "2c31d5b48a37044155bf462cffd98a6e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "52cdfb5bdb0fab0fe8b14f7245f33bcb"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "cadef89c869e5e79bc427c4d9d57326f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c4b104426d7a26cadb9fe521e397e5bd"
  },
  {
    "url": "tag/index.html",
    "revision": "8f93609304af81e5deb60555232ef9ea"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b10397e73f7a3ade832db2e7ff565a84"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "29ddb69f4e8c088944893a5cb2e54b0c"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4f51e64d2fb6a3bd9391c20f5fbaf5b3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "4bef3652c3afb5dc6942d0e31e706b06"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "da6edf73284e3ea6d84eba54af27f57c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "b954d4912ac3032ae780ff34ab706147"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b19c28d3ff4cfe458a647a0c67995910"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "eabaf30b5499d384c72cbe38a1edbb01"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "cd08ae81dad3130eaf80a130017600a9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "b4ee18533a880f6fbcda3667e32f8bce"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "dada3f3efdcbb73a6d387951ad867403"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b0c039355049fea5c37cbd1f1108922e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3baabd418e0c60788f4ae7c799582df2"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1f9541cafe4250cf9f678863dd0c7158"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "136c5a704c1f5039bf10e8bfd0e2bac2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "a9753f72025ba2a031df6f9a26c51f10"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "6f6a476297582f4adf9623d73fb4a003"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "3105b70747f2733dd7f6617d7c1dd060"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e1c94276c6fa326d07184e6b9e01ea5b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "f8287317d24e49bcdce2aef8cc70ee47"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e2ab449fac06413d25518b71bfc36f24"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3b322c896eac4de42d3c1987b66a6e6b"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1ae48a766d0d3b5fd81d05cce90a4f39"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "83071ee6695dd0974812054485ff7f8b"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b027428e7f01c4dacb2428911ac721b5"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "2f3eededcd612751cc3345274ab357ee"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2874f110c503729bac8a2eb52c91da56"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "f9dcbfa7f39e8275dfdc4cba47868e55"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "4c92d8eb44397eca82d2da488b64ad5e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "fd3d9d5e160a904f15f2aebb64a56881"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "38f292c3b92721cf7305b49575852031"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "dfeb45a58cb6dfb3437a44030fd6b772"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "0f1c4106cd1a120b75b2cec2a3961cdc"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1680c4aa79da7e433a52dc7d63e55798"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d5988117fb86393a203250d5535610cc"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "06346b2dbc81d0b3242a94a07b67ffba"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6efdb11a663fb487631a54e17339f437"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f860ec876d527ba3bc80471a673ba1cd"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9d6d99b22a2dc0b52d4ef0b3c91e9d7b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "fad51edcd157236ba7e056b5964020b3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "89993ea56699b2aa570b105a8b397d07"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2e11fb8ba44b0fcd2ee73d0ee2ef05f3"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "74a03c9e311b10cf0e41a96dc0b981a1"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a565a7a078013648e6020127dd04e89a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "03f85b4c0bf27d7df533bf7a2254f883"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1d1131f65aaf0996a31286472f1b9302"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "e0e4a97de8072e4874c2fbfedb785d18"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "09950cff558646f453edad47698bee3b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "58e38dbcf38394bb71338a85d0b6c076"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "63dea2398196bc7a52514a13edaa358c"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a1839f377d5364bccdb0f1e3bb606487"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "698d6b8c40ed99c69a9867e7ad1b4e38"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "92b8b2adb49400e11b009044a0e02d34"
  },
  {
    "url": "timeline/index.html",
    "revision": "f63d5f02706418a1f03844b512a4494d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3759e170e262ef1734d42e8115b5e82e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3fdd861eafb0e918d9f0005243b7fddc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "70e59478ddbc254e1215114325dcf7d2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "968f21c0c94d5b5afaf1eb89a88d64d4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "2bb458e9f31879f29acccbff202c1dfa"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "d1958b26a201fab3953b6a29697994fe"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3474f768a5f0d639be05ee80be0426b3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "48e5c563538242e7ce1dbfffd8f5fd4b"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d5f30dce50868d29c7deb48365f5151d"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "fdf0a083c89b846cec527582b43b2394"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8bb5f35ea9694e5ca0425db3650eb52a"
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
