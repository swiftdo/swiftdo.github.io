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
    "revision": "9728dd493b2d26b6c7a707a8fcf47882"
  },
  {
    "url": "about/app/index.html",
    "revision": "5c117ec5efb92d438962f39c700779ae"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "47f3632f7b3f1011486305e0dde73771"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "aa1558f40d3352bceb4fd81d29474e59"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7f0e26160d93daa8537a9515ce06879c"
  },
  {
    "url": "about/index/index.html",
    "revision": "1e5bd2a2ed8aff1401aa9dfd9fb1cbf5"
  },
  {
    "url": "ai/index.html",
    "revision": "02abdf870b085e2019a952df41120ce6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "6377556978796dba7847cceb58365d67"
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
    "url": "assets/js/100.4520e361.js",
    "revision": "52d3ef08b17f3418a0f8fe91461241ec"
  },
  {
    "url": "assets/js/101.f74904b5.js",
    "revision": "0d0e57acc37a3360d502a949036d041c"
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
    "url": "assets/js/107.d8ca69be.js",
    "revision": "b811f5c19967d396339d7b443aaddf50"
  },
  {
    "url": "assets/js/108.081d59d3.js",
    "revision": "6fa271141331e189b9475bd369ad7687"
  },
  {
    "url": "assets/js/109.de2f4527.js",
    "revision": "96cc364170df35a99229c37991d098e6"
  },
  {
    "url": "assets/js/11.42f64f30.js",
    "revision": "d4f9488528383e31d58059bcc6041eca"
  },
  {
    "url": "assets/js/110.316a757f.js",
    "revision": "0800fb1a04f7378c800b3d1cedaafe45"
  },
  {
    "url": "assets/js/111.9149f7c4.js",
    "revision": "53f9b1c299b061ceaeb17d2c1d3b4730"
  },
  {
    "url": "assets/js/112.3a31e6de.js",
    "revision": "9f5c480e18068b570ef70a6a5748ecbb"
  },
  {
    "url": "assets/js/113.fa04fb15.js",
    "revision": "7dd2ec9d055fe64d566beae76f2283ae"
  },
  {
    "url": "assets/js/114.f291d842.js",
    "revision": "10905bc8addbac1d581075ab58cfc403"
  },
  {
    "url": "assets/js/115.0aa87d17.js",
    "revision": "eb3a6bb16d7b560bfeee038d37d433e2"
  },
  {
    "url": "assets/js/116.0716b439.js",
    "revision": "9a64f196279ae25b618e88b5ee0499d6"
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
    "url": "assets/js/12.8d9c5293.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
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
    "url": "assets/js/124.3575e18f.js",
    "revision": "91a362c20230b9bc276bf6b57935957d"
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
    "url": "assets/js/143.1f1b1323.js",
    "revision": "a5c2cd0f374768077464114dbfc80baf"
  },
  {
    "url": "assets/js/144.5f2630fd.js",
    "revision": "453030c7d0982072e9bb372e7997a783"
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
    "url": "assets/js/154.0584d4af.js",
    "revision": "176b3a6e3d9066a14db80ffef4a124b7"
  },
  {
    "url": "assets/js/155.03569521.js",
    "revision": "4ca6e92afa9eebed59254b416deb50da"
  },
  {
    "url": "assets/js/156.8141e7c8.js",
    "revision": "7eeebbe679f79aa260da2be977313e4f"
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
    "url": "assets/js/161.d710a56d.js",
    "revision": "8bc2949e0537572214abb4a442f0655f"
  },
  {
    "url": "assets/js/162.379b1a98.js",
    "revision": "1644485f3828020e0259210e342dcab8"
  },
  {
    "url": "assets/js/163.172076a6.js",
    "revision": "18e52bca686bf2b25dfb88c1a8de5967"
  },
  {
    "url": "assets/js/164.95c50a97.js",
    "revision": "3f7cff2f6f31413ac6ca20d32e6bf546"
  },
  {
    "url": "assets/js/165.73b3619b.js",
    "revision": "8bb7cb2a350a335daaea6fe5f4419d26"
  },
  {
    "url": "assets/js/166.12921021.js",
    "revision": "6bbaf458933484c24c29f52b2afb4aa3"
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
    "url": "assets/js/186.fca531fe.js",
    "revision": "e1a5fc009e368caa915613ac86906f25"
  },
  {
    "url": "assets/js/187.2f7f3906.js",
    "revision": "f4e1e2fa91f9497981edee3b2053e133"
  },
  {
    "url": "assets/js/188.73838a3a.js",
    "revision": "d0d824e02b994c92970cee3f1f63024f"
  },
  {
    "url": "assets/js/189.129011f3.js",
    "revision": "3cd5fd596af00c8d508aafcb823f97f1"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.4a927576.js",
    "revision": "2a55df7bb8b606e703c761d04bb88754"
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
    "url": "assets/js/201.7d6eac1e.js",
    "revision": "f1c6ddfdbe7a4b63437b9991c450e73c"
  },
  {
    "url": "assets/js/202.220bff92.js",
    "revision": "17377a064934920227f740e49f6b70e0"
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
    "url": "assets/js/205.62a96be2.js",
    "revision": "312b5fc7da75db7c09ad0377ccc11fbb"
  },
  {
    "url": "assets/js/206.dad4bd76.js",
    "revision": "af62d1605a73e3910caadccaf8d4ef4e"
  },
  {
    "url": "assets/js/207.e799d0cf.js",
    "revision": "685531cac17d2aba2e3f264cd3ddb264"
  },
  {
    "url": "assets/js/208.87f203bc.js",
    "revision": "ffab51644f8d0518a54de334c070e14d"
  },
  {
    "url": "assets/js/209.6d021c3b.js",
    "revision": "df949b52c4a39634a5066e111b388b06"
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
    "url": "assets/js/212.2429c848.js",
    "revision": "524ac8502d3fafa4b5e07f36db7d5859"
  },
  {
    "url": "assets/js/213.a6c2a73e.js",
    "revision": "e19f1bf3a5a6805267553a0840e404a4"
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
    "url": "assets/js/30.1f92262d.js",
    "revision": "8f8712cdaa426b3faaba1bef372f8bca"
  },
  {
    "url": "assets/js/31.c0a0b65c.js",
    "revision": "7dc97de67f37ad4a0f3377fb570605aa"
  },
  {
    "url": "assets/js/32.93ee1ef9.js",
    "revision": "48ff28716693e4d3e7d888b608fe1a49"
  },
  {
    "url": "assets/js/33.8344f41d.js",
    "revision": "43857ffce3bfc0f96e6ff2e853f0243c"
  },
  {
    "url": "assets/js/34.16e39487.js",
    "revision": "3185fec87dd2dd1b8781042775b96a95"
  },
  {
    "url": "assets/js/35.8bce70fb.js",
    "revision": "e8069bd6ef0f56cb5f3d16d3412b9b8d"
  },
  {
    "url": "assets/js/36.62a52656.js",
    "revision": "59217c43fed980796f778c0c3c76d6c3"
  },
  {
    "url": "assets/js/37.d67c5699.js",
    "revision": "f08bb8fba729fb60d361c2a81f1f33b8"
  },
  {
    "url": "assets/js/38.3049ddf9.js",
    "revision": "fcab6a68555801c730fc8c68b42e2515"
  },
  {
    "url": "assets/js/39.3d071671.js",
    "revision": "c8c1851630c6565e8db188244ed56896"
  },
  {
    "url": "assets/js/4.d8a1ff43.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.5a721072.js",
    "revision": "2188a1cdb3030eca9d9a768e77bd9889"
  },
  {
    "url": "assets/js/41.dd29c01a.js",
    "revision": "2ae33420a0eb549331be3add1a4c8693"
  },
  {
    "url": "assets/js/42.b9e774da.js",
    "revision": "584e3838ac45c817842d4a706e5507b9"
  },
  {
    "url": "assets/js/43.dd0e440a.js",
    "revision": "29120603093903e786afa7959f5379cc"
  },
  {
    "url": "assets/js/44.89fde36b.js",
    "revision": "f66d6ad6bce7e682b642d230e97d725a"
  },
  {
    "url": "assets/js/45.b1c951d8.js",
    "revision": "d86cbb72249092751c5c5cb36fb20a4b"
  },
  {
    "url": "assets/js/46.8d0c048a.js",
    "revision": "130ea456180791cd853eefef9d5e0065"
  },
  {
    "url": "assets/js/47.c74bf5f0.js",
    "revision": "8239d15c875db888375a9f85413187e2"
  },
  {
    "url": "assets/js/48.a500fb2b.js",
    "revision": "87833b209b2d943788300fd2ee2211af"
  },
  {
    "url": "assets/js/49.a4864bad.js",
    "revision": "3a776b42017ae88aa48b2a4928f54b28"
  },
  {
    "url": "assets/js/5.2d5717cc.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.74c95467.js",
    "revision": "b63b269430ee6b9be0cfc421befb236f"
  },
  {
    "url": "assets/js/51.8697f1b1.js",
    "revision": "cf7f90268dfdac964b1bc22297ccec10"
  },
  {
    "url": "assets/js/52.03aad984.js",
    "revision": "e7778cf05fdb1b7b2e48665b6c46fbc9"
  },
  {
    "url": "assets/js/53.0613278c.js",
    "revision": "d41ca25dbb6f4b80b029b2ffa302c6a0"
  },
  {
    "url": "assets/js/54.151e4535.js",
    "revision": "f8b983fc888b0d6c4ac94f4eb97d92a7"
  },
  {
    "url": "assets/js/55.f64a0f61.js",
    "revision": "c6539461d4a1c0c54da8c8449f206b17"
  },
  {
    "url": "assets/js/56.9d0145b1.js",
    "revision": "9629eb4edc4b85906e2a54cf08029a25"
  },
  {
    "url": "assets/js/57.90cf8838.js",
    "revision": "78537b633820f0e93348608870866423"
  },
  {
    "url": "assets/js/58.253c884d.js",
    "revision": "e20b2c124a36f3324ae3d9201226add2"
  },
  {
    "url": "assets/js/59.0126e0ca.js",
    "revision": "0e5ab330ab2c218130743a473d149943"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.f0bfaa21.js",
    "revision": "cbed7b911c926c065e81490e7e1e1b7c"
  },
  {
    "url": "assets/js/61.f6dd1e4e.js",
    "revision": "a5568c4a7aae3b154bd30f4a51368be3"
  },
  {
    "url": "assets/js/62.6bf06ed2.js",
    "revision": "74253f051a732c996ec7ddc66d5e6ae0"
  },
  {
    "url": "assets/js/63.b5d23bc3.js",
    "revision": "49736c3b64b0e4e40ef176ee6ec846e9"
  },
  {
    "url": "assets/js/64.0fba6656.js",
    "revision": "4f14b86ac2508b8531af2b3d8d1c1653"
  },
  {
    "url": "assets/js/65.09c80ac5.js",
    "revision": "7b6b3bf272d3612d83f1f5000eae52d1"
  },
  {
    "url": "assets/js/66.88a725ce.js",
    "revision": "95592b840973125d2b1b213a01db71b0"
  },
  {
    "url": "assets/js/67.bfa51df8.js",
    "revision": "226f16924d5fb5eb2c057e505224e831"
  },
  {
    "url": "assets/js/68.3d035821.js",
    "revision": "eb163b27118df1b15046521e09cc97c1"
  },
  {
    "url": "assets/js/69.246d9287.js",
    "revision": "9cb3019008bed684c7e94c4e432f6f6f"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.abe27280.js",
    "revision": "b97458cfa9b45106323d16cc6200cdb2"
  },
  {
    "url": "assets/js/71.bb1357ae.js",
    "revision": "8f6cc367bfce1461763000d63bbf1975"
  },
  {
    "url": "assets/js/72.2ccd3dde.js",
    "revision": "747e4d064ee18fb030fd6b43bf5316c4"
  },
  {
    "url": "assets/js/73.176f0e33.js",
    "revision": "bed71e209fce735c3c26ab6b66d27f93"
  },
  {
    "url": "assets/js/74.377cd1d4.js",
    "revision": "b444d17e364617646ada75891a771b33"
  },
  {
    "url": "assets/js/75.5ce8f080.js",
    "revision": "c559e1af6b64c5f3e2714c9dcb1ff8b6"
  },
  {
    "url": "assets/js/76.8dbb714d.js",
    "revision": "31977165a8b21dfca0a8b8752e4c6b99"
  },
  {
    "url": "assets/js/77.ac0f562f.js",
    "revision": "2330d6269377f21cd216ff751c4f6522"
  },
  {
    "url": "assets/js/78.9e3c4d05.js",
    "revision": "193eb11ea1d16421747366980c451dd9"
  },
  {
    "url": "assets/js/79.0c507e8e.js",
    "revision": "804451048726962e2c82ca6ec39f1634"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.50ba2855.js",
    "revision": "c1829549c60adcdd1fe92d7e4a11d46c"
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
    "url": "assets/js/84.b503854d.js",
    "revision": "b3bd36391e55310243a44b3ea9b42340"
  },
  {
    "url": "assets/js/85.b66b3b80.js",
    "revision": "3b823a75f98580208583b9e9563b24d9"
  },
  {
    "url": "assets/js/86.559f418c.js",
    "revision": "8d652f61646bc6d235e4e693e9eba4bf"
  },
  {
    "url": "assets/js/87.8fb9b3e0.js",
    "revision": "e466f25e8ac1b967ed3e6471eceb0de9"
  },
  {
    "url": "assets/js/88.05b6b486.js",
    "revision": "c284715ed54efe1901a9179e61d7f143"
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
    "url": "assets/js/90.63222a41.js",
    "revision": "bdee639a4b1db9e2139804ed8d587274"
  },
  {
    "url": "assets/js/91.4b852f46.js",
    "revision": "3318b07f0ed93d1e1680d66f4cf20af4"
  },
  {
    "url": "assets/js/92.e503e0ad.js",
    "revision": "1ce018881c92dc5fa0fb677d25808ffe"
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
    "url": "assets/js/95.1d04fd3e.js",
    "revision": "08160332a21d6c9cb7492e525aa985c9"
  },
  {
    "url": "assets/js/96.6da849a4.js",
    "revision": "2273b89310331a460ff24325a1f8b27e"
  },
  {
    "url": "assets/js/97.15d1f34c.js",
    "revision": "21d24a450d1208beff0b83099523dbca"
  },
  {
    "url": "assets/js/98.a5644905.js",
    "revision": "a7c3d64fa2ea10f536b77b306cf9cd38"
  },
  {
    "url": "assets/js/99.6a1ff020.js",
    "revision": "1f0038f35a7aec7397179bc81fa76a2a"
  },
  {
    "url": "assets/js/app.711b7559.js",
    "revision": "e40123c918339febdd7cd267a56e0521"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "417ea9a5b5350dc6bb25ee75a011e06f"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "129f02745832ed81cc7b5f48b1eaee4d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a8e844db5a01b2fa64dd09b4dfd8c20b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f9569317a5168e2b72539de4c04a7472"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "59e275a135cbdb1b7830f4047b2eecfe"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c6562ebae8219e758c12405cb56ac7ad"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d25980bd649d8cc35597e0f63ceebbe0"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "ca3e413ebdc4b0c34bc6c3e355eb2f7f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "5da18177a58325934ea12a0960560570"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "73986ce81da99a6f7ec6dbc715b710e2"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "464504fe4b63d7c95635858d04817c3e"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "28f42fb2b804d8ff315c36ca886395cc"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "9efe0913ffdee243b65970f4c9aa81dc"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "38233187385dd53e70321efeb9ff9246"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "851682ae1c6db241131b90d44d66ebb6"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c3c6be2e4fa8d1be7b69bc72b3a99dfe"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4c18bd2313588cbec91d91f3f3330d26"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "d2bbe7dfebca0f7ea32957260d694dab"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "9e9a9aec82063e2d166b632000c89e7f"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "b01fdc2fb4574a5131b6be1686579364"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "8488baa3018f70a8b0d0103da11f6184"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "9f99f814340b897daba920bdead3ccaf"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "c14e68553835921405297352793b77e8"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c482a836a48d46b00fcc920597abe27f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "0d93ea37d183a505866235faedd05b37"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "cfb66f271ddf3b0f76c54134ade70205"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "e239f1d43b3538b87b032a13be5fa5f4"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ce90280999e7d743b038ab7665e8fec0"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "79191ad217ae462c34e409e395eb8aa3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "1f41e35f900abc09d1b2419e0ced22e5"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "fbec79b475b6658be9fcab6e658528fb"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6b360f7fc354c86c8b14ed192e9ebfda"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "4e3e7caf89feb3e91c297b635e690363"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "99b772c2cdc3d7b97a6a6f6642a898d7"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "1a5191a3a55b493c9dd4aecab7f73258"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "08acca76ea961bd154b66372dab8d5b8"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "3988791c50627125a4297317714b762f"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e30039cdde348e929a960a372ab14eba"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ebe07cf6163ffc831a4f802fd8136f36"
  },
  {
    "url": "basis/os/index.html",
    "revision": "af0c5a83307ac4b142827084d6068161"
  },
  {
    "url": "book/index.html",
    "revision": "0663de0e0bff6f2c2bef8028e44bce3c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "034a6383b99d6734aa2650244f22b063"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "f6b9d7f6c7044dbe50faa07d630ea124"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e762ef9d4d3ad792c964a96730681806"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8e3eca0651e42eb36f60de80a4fafa0b"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "fc7b9acddd80db51b8ed4dc7d576b289"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "cd3eef8446226a3d36843cb5595c6e3e"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "6058e60a2fcf7b976ba38c2ceab27b2c"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "2b78382a2109dbaf7d27807115cd1c83"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "cee47515a53f6fa454ab73eecaae71d1"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "e85d25e397a1996fc3f8ae150d3f56fb"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "42e1c055d07c5e7aa5595874444cf3f6"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "4c3649c09d93d86764617065abaa9c51"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "92580db39303d2e6bd401697bb8285bf"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "f2585274b4fcc5aa5266283f3f111a17"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "7b89e44b60a925fedbfdfb9a8bde144c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e05b4e14dfad612451158f382d3429b4"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "265e2c09787451aef3613327a413a575"
  },
  {
    "url": "c/program/index.html",
    "revision": "d4b4d04ef042893bf0294064559e08ca"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "44469726de763eea873c17d0134ad0b0"
  },
  {
    "url": "categories/index.html",
    "revision": "ba803241f4efa7aa32439829abb64017"
  },
  {
    "url": "figma/index.html",
    "revision": "4f93439d406eb84783f8c3d9f7ea147a"
  },
  {
    "url": "flutter/index.html",
    "revision": "c09b73207b39e6f2e30314e13cad458c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d38f455cc44a95879425d26b7768e660"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "966f85486bcacd5521273dc16923d5f0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d90aa1581af65883d877bafbf6a2db55"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "216a90127192decc00adfc5957d20ffb"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "732435d47bdc2135796d3d42382581f3"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c43ae266071ebc80053038e6a8ff557a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a31929eb0a16b7a49d80f22172593e0f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a85bc1734bfc905b2f2831d0931f97c1"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ffc06994e30d5e47f2869b40c3a52c53"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ed489cb24eaad4e6a9985c5692084821"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6eb380bdfb9e2fb520127b5aecf6a0aa"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "27dc2317fed19da85cc460d991f3e2be"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ccc6705ac6c2d897ce49ed7c27da3541"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c3d9630ff1ca994a51711fde69d52c10"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "586d1d2be9e51236d4eef73b8c164586"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6418af8bd580f81c5910a8e8bbae4517"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e8f17cacfcbfae55ab4343973440a930"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3a6907c636c6e60fc2af05596acedbbd"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "2d657e7a1680e6bbb74eea6b4ed5cedd"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1c2e53079a37d21dab9862b7747436ce"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "ec416a64c1ae63c307cb5b0e1a5ae43d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "7e5c25f3c3e9f4eabd2c75a862ca9786"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0b6e7a6b0bf3e0b6114173accd309a94"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "8275cb15402ad64b9d6dbf04bb96593a"
  },
  {
    "url": "haskell/index.html",
    "revision": "fbe626cc4dd6f973f89e07e8a2e42c1b"
  },
  {
    "url": "index.html",
    "revision": "0922d315fb765e221bd47ef323523142"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d90054cc748bf1e0cc1ac8bec5d15150"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8ddfac132f70b3abeb78cfb3bcf74aaf"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "016ddc7b144bd8a618a707440bf4f587"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "00889bd0b38a11a98e2283ab96e30825"
  },
  {
    "url": "python/index.html",
    "revision": "38f79b40fd4266634c2ddc19f28d4de9"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c57ab91bdc15f29f8901aa01a3722343"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4eca9b5367e16994c547bb6068383612"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "eb80e7fb0aaa048e1be08dfbd351a67f"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "bbaf4ec207d38416bfc5a64caa2ca7ee"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "fe07c49028b0cfc0d1a23435f0507513"
  },
  {
    "url": "swift/better/di.html",
    "revision": "bb01a57d0fee783d4568fdba1726725d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "264df58ae24968e841ac1c657f83592a"
  },
  {
    "url": "swift/better/last.html",
    "revision": "19fa587d76a51aaa2a9eedaa9ebe26a9"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f953b09a7b699fc0cc62ceae1d162478"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "8a5763aededfe648784f1eec9181f748"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "14349761dbd536d9fc23cf9bd3f170a8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "83eceffe95a9dcea257fec474efc6171"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b57ca118b992597f67a07c1deea12e12"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2db71812835a7d9633ea810f56867164"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "635b3b6172fa8f2a32d1abf08edc4d1e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "fb96ccf30efc3920b3276921e5b5f1a1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "0dd68710250713f383ada4ffec30f64e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f0a9e78d28bccfa08249c13ab3a888ee"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1c888a8407820aa2aed00ae4d0e6c9f1"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7dd429114fff6e6a1276d242eafab7c3"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "21abf55658505224e2c30584598e6c03"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "1760c5576fdcfedcd2caf7ccbf5c234e"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "baabc20d275f364a152bd9bd7b3a9933"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "2fc3049c67e2c624884cc0d72d8d3f69"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "08c57d2c6fa1b974dfe0fc7b32e7082b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "78e50d1d7500aa43044317f308052cff"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "e1ca93b8bf6c92b53ca9af9d98688ddf"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "a4323e33ae6d1b84d1063949c127df9e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "a7ed96aa83777cda7175e4a2299f6892"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "8f8f96cae2f4df0fc5a83880857db5a7"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "5f625f867f2410d06ebbebce7647cadb"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "f8eb0c024d917523f5a69adfb016f35d"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "1c48deb6609421b9bf5bfa52149963c5"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3a517e370e639091efc14470853cdfdf"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b86406dd31f89a337f2d85c4127dce6b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a6c3da154c4d1d7b343a39cd1ec7fce5"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ad1a7c8a572a0b73be915d603cb4b2d2"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c451c8818eb4a8ca6ca29ae4c7b0270c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "0ffc50149dce5bc84836cc6e7f6e40a3"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9df5267f280513871506d7ad4b382f4f"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d1d96378e0a6eeed0ee1a74f95578a53"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e35fbb93fd94d3301b41bd8e7e86fdb4"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "4c9dd5673b1357b8524adca37f150215"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "fc7c677bb625d8867e67cdafaa0b9887"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "feec2a9e8bb6d74ee1afd3837b8aab4f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e02772a07feae322c143c8b4b3b926db"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "ba2a85bb0b049edd04b05f31d6671bf5"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "31ca69c912053b10ffde270763d76b62"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e2818c3d915970491c8477e4dcf807f0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2b1679930e1e3dfa4e78abdfc5acefea"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e924b9c185f99ce2be1a259149b17476"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a9c0ab712c28706d2d9c8fbdc3cbafe2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b48030f1a6d91aae7c49d7c149916682"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "e73ea3b467b94ce7980f6b133f11c7a1"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "302329b1126ec33d4e67d60ad418856a"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "668407c2355458b805371bfb0d49804f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "34748d9fb03493db831593dc3a03b255"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f8f15ff735ce91f2474f86a35522e6de"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3b410a96be629a3295cb97647bfc74c8"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "6a09891d7980668f152df7667eee0075"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "63c6ba5ec5ae959b2a3bb74a0ed18414"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "987c74a32b80cb2801e9fa9f4e8a7a73"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e9e0340a972f670b9c4aa240f5c1436c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "cdba9198b268beea30b41dcda79f1747"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "c44b08748f696313f8541402e3fcd5d0"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "e17567595750c4539f0b65e12be611d2"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "65af8d218137bea8cacce0d17c2bbffd"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "3e4e73c3645aae16b04aae4f8db0090a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "a05b4280d7d2e81df90b65a8e788343e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "d73b0750e683a2ae81f5763b5c4a1417"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "9c0c0778a1e2a61b28ef7d68768207f0"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "6bcfe8702b39f8a6f9d6fd154bafb9be"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "fb6e2776caf17e9857fd6e69b62e802d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4bbc6dbfbc8ade78bf13542dfd07c3a9"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "1387e8834e1beb0b30d106f9c024dbfb"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "dfbbef120d15cd0b01048fe1fb847f3a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f43c11303f8504d0edf21f5029cd4494"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0b2e7c850a935f22a500f89e7b1dcd0d"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "4066b6a79a1b8284ba08cebf219a06e4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "11b667c7c317de5219709890d25bca9b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "4fff0dee6a3eb94e3c041096c6dea03b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c51712079cc6ebf596e9a428d7239bf7"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "26de2e0b45c739ffbe83cd3577129461"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "8c31a4d799a568ca94ba182edb6494cb"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "760dd88192640444663b753334e6b038"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a33de98357bddd11ef2032d53f4cc3ed"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "a6be24e8be4a9551b8295fe7c6d2bff9"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "ac26e9d5e4e469fef859754a48ab500f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "fc50b9b5e611cddab907db539e84572d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "10cdc143b76ce98f1235a0319b28e80b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f3dbb0b9845f977b7d7a3bf841428b81"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d3a95cdb2e7b7cdd2668983f64994bb6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "29fba04be621948425bb9fbd96e35e5b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "208e9474662c7bab37c9eee38dead365"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "0e99ecd185a18f642ca4349036ed8f57"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "963c546fdf821520c92839200768e82d"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "78cf027cfc7c0701b6cc22fe3b203351"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e961ff2913deec363b278b0da63cb307"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "cf0443cd22087e64cf2ac6602971beac"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4ef6ce5c5df949786486c7b837c56ce8"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "59be3f0a3af580c023a36f0b907c747c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "42e43e1f0d07a8452b71330ece697eca"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ee7db950715f311306b3f255987f7ea0"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "c0ae4fbfda11d095640aa0d93291c7c3"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "dd026d8774562339e3fe52c33a8000e3"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "c178af8caedda45df0c32b02561e1390"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f081d0d56b83a1d58e8a6c0fbd8c782f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "68c3b4ecd793b765dbb687f62aa9324d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "38fe6011441122fec0e3bddab0523531"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "044fbbe793630e04adf546ed3d51c106"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "169f982e59fcd1bd1c25631128815c7e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "831f29241214fadc60d5ffed9e538172"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "6f053829ec75ebb0298f5a40fcdd438e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "cc0ebd6f7af95914fbba6519399bbd55"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "88321c9ac02bd339fb54faca2034ce55"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2d8ab377189ff16819dfa967659d0fca"
  },
  {
    "url": "tag/index.html",
    "revision": "d249759c3fdf14b8070acbcb2f8f9bf6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "77e1b8ee01d66d0452cda5d757ec1e5b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "a9a81dc9b2ab2c79ba62856a27c37b9a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "55c35a1047753e4b6a0ed588b059dbde"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "73e5f243402d0ea70756a24331f5d6a3"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8554a9fe58112f2d5521c0fb32ff5afe"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "57b1bb1de0aeba4ccdefe8a9ae02414b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2cb1d34c8731b9a9a233d66f6fd34db8"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c1ebf21df62a764ee72299a0a14ff7c4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "923acf21705574c2babdd1cd7d0bd303"
  },
  {
    "url": "tag/json/index.html",
    "revision": "aa045b61653a86598c18565cd50c5de8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "573fda7ef072c51977e332e62d986bc9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "f79386c372d899399af457d8dfad45cb"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "269e1cefb5f744b42bbed1e9267815ca"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ed426e89cf91fff166c5ce779c843a8f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "a1720604164388e67e7b0c77582c1eb6"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "71ea0a8d0e577cc95c961bacd88f21b8"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "6c4c30a4b91c1cea4dc56998ad598b88"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "3e549c5332ba80bc598714e7ba766938"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4e1ea184abe361ccb124e041eb2e5af8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8ac64bb777a89f0861ebd2a8133dca5f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "11e25a7f36028bbf26834a965158661f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "f2af0ef3c995ca03e105c7439f896c50"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "5029247700d96eb2e6486e54eca68b9d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "739cf345565055366c24586607b96903"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "b00cd4b9deafc9101247b967ab3e9063"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "21b1e399d22b2cac27c19f802562d992"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e024a8353980d0f29281e4e0c24330f7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "e661ed2caac44a0f53136c48dadd6761"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "32c0936eb97220bb5f981684653ce97b"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b87c7611b65d32d888f8bd646b9341a5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "99ac6fb804e09a8b4c80b1ff5f5da4cb"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "97e2930bdd0a7ad3afec0f0ef0482094"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "1b945e1e541c602a881120cdf705e36b"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "354cec40c48623a079ee7ff615c29a8a"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d6df3610ec160062d4c0ba0a99159054"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6a92ef91b19928137df5b60442c5e2d4"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "de4b825f14b9f3ef17b78ede96b8a0f3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "636df0169c5d45ee57d8e38c8c57d165"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "3350d8eff5b28329c97490831aadbd78"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a9ed561faa56e20d211909440f81ca98"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f9d293d2769d7667013d964374e0c46c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "90ff4de9808104da92de2c867f425fd6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "aea199c769b2f0ea8921add9ce0eca57"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5c4f5ae26923179122bfdfc563bfefa6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "a70b0a2051ecc18d3684d292f6af8578"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "da231536a4c2ceb0e014a37f875f2f60"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "9ebc6d083a34394dd9d54cc8e87e8c9d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "82a99cc51ee18ff2cb8ebd8939ba0242"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9e7703f2172e231eb312915b70e204e6"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "f6a33f04b5a9c08b39089847416fef7a"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "60bca578183c1d40f42e2fcface54e1e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5da509d27f8e364ffbbf58aaef4c1cfa"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d95560c67c4c12434704a66e629e04e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5c0e6175619e88356ecbb5f5904135b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "97baf42a3dabf9b84cd1b42fc929ebb2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c7e14d3c7124fddca1538ffc13dc1515"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "55a3c152ca42870aed923237f3cffa0c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ea62d9b7e94cb5a686df847cf2e91779"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "8fc98254db45a9d8c8bfefdbb085ee4d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ca0a85182d9ab401f93fc8fc89bf0dec"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a450395767b025d6820e268ad3bf5ec3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "87db7d844dd94617304b38d434e80ef0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b6bec9c52fec1cf62d12f40ab894f37d"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f9fea53ec659eee087a61a902f52e9ad"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "918a2702ddf37bdfeb54bcf53957b4ac"
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
