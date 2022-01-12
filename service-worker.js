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
    "revision": "d9709da288d2c0011fadfbd7b9cc1d31"
  },
  {
    "url": "about/app/index.html",
    "revision": "ce4c4ffad402cd225192b6b9ddc88541"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0af29a58fc69fc4ae12a8532fed0d224"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b6b3d323b6d9855705c97502809075bb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "65a84ecd71c436aea10333231c99e0ca"
  },
  {
    "url": "about/index/index.html",
    "revision": "10da5564e367ee82f1ce2e9356038644"
  },
  {
    "url": "ai/index.html",
    "revision": "441864919f11c281c7744127b920d9c6"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "742516023d3f431a1b91f48738e5b50c"
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
    "url": "assets/js/1.b74ea68b.js",
    "revision": "c5e7b23a60464e79980a65df4c084044"
  },
  {
    "url": "assets/js/10.8aef31c3.js",
    "revision": "db678ae30a13ec93f60557067fc212e2"
  },
  {
    "url": "assets/js/100.c62f9a0d.js",
    "revision": "33778d0b9c4826e255a3631da335cdd5"
  },
  {
    "url": "assets/js/101.d9d24b46.js",
    "revision": "5c5cdbadcf0f7ba23023903d6b19b1bf"
  },
  {
    "url": "assets/js/102.88f6e12d.js",
    "revision": "b8584a1c7ecdbe13fc3286966c5bd784"
  },
  {
    "url": "assets/js/103.3dbfcd00.js",
    "revision": "d08214b048e28cf85b49901a302baceb"
  },
  {
    "url": "assets/js/104.7f47bff7.js",
    "revision": "802184f1ff1c55898040bd28c935989d"
  },
  {
    "url": "assets/js/105.15b4e9b4.js",
    "revision": "babd6423655813ea54b5d909fef79de1"
  },
  {
    "url": "assets/js/106.2b7fbe43.js",
    "revision": "2b517fa9f1a4aaddd22238e848cce4b1"
  },
  {
    "url": "assets/js/107.bb0de9d8.js",
    "revision": "2d57a5064ca8e7f89e98234e4634182d"
  },
  {
    "url": "assets/js/108.97fba57b.js",
    "revision": "2baa5a87e96406f331d56ab1064b22de"
  },
  {
    "url": "assets/js/109.1c165db3.js",
    "revision": "c0d6aa0a811df3e95ed3fefd0c134ea2"
  },
  {
    "url": "assets/js/11.5025bd81.js",
    "revision": "8594e2f5e118fb7ef5b9d34cf5c84237"
  },
  {
    "url": "assets/js/110.e87126d1.js",
    "revision": "48187c26220d07f164185ce71c53dec3"
  },
  {
    "url": "assets/js/111.5d557caf.js",
    "revision": "cead74f1d7413c57860baf14d6a75b6a"
  },
  {
    "url": "assets/js/112.97712424.js",
    "revision": "7a7cede06221ed07e986167d1d0fc769"
  },
  {
    "url": "assets/js/113.b4c7f207.js",
    "revision": "84bd9e780c59923957bdf065a22dad95"
  },
  {
    "url": "assets/js/114.976e424d.js",
    "revision": "6bd522e792c2a7c134e8e501e68f265d"
  },
  {
    "url": "assets/js/115.1392fd34.js",
    "revision": "3b3ec9cc3d47dd1bfc9a227865967820"
  },
  {
    "url": "assets/js/116.8f384623.js",
    "revision": "79ffe952df97692bb3a49b2b940ff743"
  },
  {
    "url": "assets/js/117.48c94124.js",
    "revision": "ea5305ae96533156a608e8a46773fb61"
  },
  {
    "url": "assets/js/118.077bd468.js",
    "revision": "6212821a9f9d3d1f38d15e831fd810c5"
  },
  {
    "url": "assets/js/119.95eb0d22.js",
    "revision": "27627c1c82d3aa34e08dcfa71d0f8538"
  },
  {
    "url": "assets/js/12.61581d13.js",
    "revision": "4b82016a1c5c56bf54795e8b4aaae59d"
  },
  {
    "url": "assets/js/120.009bf038.js",
    "revision": "84f5ebd3eb5e041e6ac60919831d7154"
  },
  {
    "url": "assets/js/121.72c8e5b2.js",
    "revision": "a5958e8de528f744ae39e998e1a1b794"
  },
  {
    "url": "assets/js/122.1211fcb4.js",
    "revision": "4c9c4f8819a79afa350bde1fe83a18a3"
  },
  {
    "url": "assets/js/123.b3db63ca.js",
    "revision": "1b794826775360d51602bc7edf51dea9"
  },
  {
    "url": "assets/js/124.0553649e.js",
    "revision": "d34b2bd250870e797349455dfb967637"
  },
  {
    "url": "assets/js/125.7ce62abb.js",
    "revision": "28d57e753d870f400909e5560273826f"
  },
  {
    "url": "assets/js/126.d909ce73.js",
    "revision": "a7272f71335a2d8b0e271a6d52cddd53"
  },
  {
    "url": "assets/js/127.ff830784.js",
    "revision": "77f31be427750ce69bb55b2c8bdc827b"
  },
  {
    "url": "assets/js/128.a1dc8519.js",
    "revision": "25b5f65c8ed646005ce2527932ef1272"
  },
  {
    "url": "assets/js/129.083f60d9.js",
    "revision": "ed3128aecc912f2592ecc39a1c3f408c"
  },
  {
    "url": "assets/js/13.48960aa7.js",
    "revision": "bba0af566bced556857c11f0a02c32b0"
  },
  {
    "url": "assets/js/130.f8672f04.js",
    "revision": "3017699821ccd01c41c200f039e13b5b"
  },
  {
    "url": "assets/js/131.4a8beae5.js",
    "revision": "4782efc2dac671d6ea0f568b8414c128"
  },
  {
    "url": "assets/js/132.9299d692.js",
    "revision": "6bdf6fbcef6f3c176693c334b971f60f"
  },
  {
    "url": "assets/js/133.adcddce5.js",
    "revision": "c5aedb7a671aafa3f87244e2859c0cc4"
  },
  {
    "url": "assets/js/134.8280338c.js",
    "revision": "66ce006efca1a9e053f86744466d175f"
  },
  {
    "url": "assets/js/135.d68f7ef4.js",
    "revision": "a34aaeafeb07263e4e672dd80ee784fe"
  },
  {
    "url": "assets/js/136.87b0769a.js",
    "revision": "f3c9cd1afa79961fb5c9ca9fae255b06"
  },
  {
    "url": "assets/js/137.7a0ad314.js",
    "revision": "6dcb8cbbbdcd9d5ee5d8bea47cb59ab1"
  },
  {
    "url": "assets/js/138.5d813e47.js",
    "revision": "2fb05c40b47223063cce9613b1c8a06b"
  },
  {
    "url": "assets/js/139.0b81188a.js",
    "revision": "36caf297cdb7df978988e306b359a867"
  },
  {
    "url": "assets/js/14.008d58aa.js",
    "revision": "5f4c2652f44fcdd1224cbc3efe80a7e7"
  },
  {
    "url": "assets/js/140.27667d55.js",
    "revision": "bb70044077ef3b1f2440ccf3a7c18ee6"
  },
  {
    "url": "assets/js/141.6d9a9430.js",
    "revision": "a4a7b8e1a619ff960992d4d9ac5d7459"
  },
  {
    "url": "assets/js/142.659e3d5f.js",
    "revision": "641b8551c098d43383cdf38415035988"
  },
  {
    "url": "assets/js/143.6b593c82.js",
    "revision": "f91e1b8b277095e56f0354f8946a6057"
  },
  {
    "url": "assets/js/144.3c56b0e9.js",
    "revision": "4ebd17c2f622f21eea4f44d705e2e837"
  },
  {
    "url": "assets/js/145.d5707580.js",
    "revision": "6101d2fa4fffb1cc3f25489a1046f591"
  },
  {
    "url": "assets/js/146.3964ae1f.js",
    "revision": "6974f6b9a597384c91c6792fabdcfdd4"
  },
  {
    "url": "assets/js/147.22513764.js",
    "revision": "4d0d780fc5a0926119edb7a847c8555c"
  },
  {
    "url": "assets/js/148.a7e3fbaa.js",
    "revision": "f9a5b864142209e42e5a79addfab966e"
  },
  {
    "url": "assets/js/149.a14b22eb.js",
    "revision": "4cd3c4327aa57b95a4810bdbf6bc4009"
  },
  {
    "url": "assets/js/15.4056799d.js",
    "revision": "de05d438649de7d6d2be159d20e94f27"
  },
  {
    "url": "assets/js/150.12b5c115.js",
    "revision": "23684ac33dd0b4b222a9d477f4828ef7"
  },
  {
    "url": "assets/js/151.2dd13b3f.js",
    "revision": "304374556b7e11635b664b15b4e850aa"
  },
  {
    "url": "assets/js/152.e479d7a7.js",
    "revision": "2d2d49bb193396e53b53d4141c939556"
  },
  {
    "url": "assets/js/153.4954b5be.js",
    "revision": "f553bddf00fec391d44c1f2c844f11cf"
  },
  {
    "url": "assets/js/154.88ec1f72.js",
    "revision": "3958f5646e825d8340b4d61d9514f674"
  },
  {
    "url": "assets/js/155.cc19b485.js",
    "revision": "4d2ca9989d29b749b2fbba815570d4ee"
  },
  {
    "url": "assets/js/156.6315cc58.js",
    "revision": "df8674fee4e05ed8ae0fbbd9489e8603"
  },
  {
    "url": "assets/js/157.59a79145.js",
    "revision": "f279dc7da32dd44c6b742fac47200e19"
  },
  {
    "url": "assets/js/158.1cd94c1c.js",
    "revision": "b89a31a4f06464e29e6e3bbf0bd8ed24"
  },
  {
    "url": "assets/js/159.e0784d7e.js",
    "revision": "eb28945fffbd8b70461d639a03b7d3a2"
  },
  {
    "url": "assets/js/16.79c3d288.js",
    "revision": "9bf3a4f61f65515748b77dd7e8a2f56d"
  },
  {
    "url": "assets/js/160.decbef9c.js",
    "revision": "e2afa68530e2bab9e6465f0e157639ce"
  },
  {
    "url": "assets/js/161.e245e8a1.js",
    "revision": "440fba7635e23cc20f9d01915446006f"
  },
  {
    "url": "assets/js/162.8fda9143.js",
    "revision": "a764b5910ef77b2e5f952c11f672be8f"
  },
  {
    "url": "assets/js/163.e4895277.js",
    "revision": "0622e10604421babcf8a34e3773fced6"
  },
  {
    "url": "assets/js/164.36e22f54.js",
    "revision": "d93f0346540a3beee9633820efec8e4a"
  },
  {
    "url": "assets/js/165.2b83e596.js",
    "revision": "46fd0bbe94aa4385c85d1d49bc641d43"
  },
  {
    "url": "assets/js/166.fb7a50a1.js",
    "revision": "00dc2b164d13e62c1f74f06aba2d7ee4"
  },
  {
    "url": "assets/js/167.d376cde5.js",
    "revision": "7dee9731e0a767f9cbe44c887bc6dbb5"
  },
  {
    "url": "assets/js/168.d6c9a5b3.js",
    "revision": "cc6c03b8d1f139af6fdb66a9b61c6672"
  },
  {
    "url": "assets/js/169.ee26f038.js",
    "revision": "dcd79c1bab3e1da32ef1a2e884645bdb"
  },
  {
    "url": "assets/js/17.ba1dbe51.js",
    "revision": "382cc471d59f865d36ef0953bee93123"
  },
  {
    "url": "assets/js/170.61dd14cd.js",
    "revision": "990249526a93352fc677119506f93fff"
  },
  {
    "url": "assets/js/171.84264a25.js",
    "revision": "416ee8de57bd8b3341188aabdf0196bb"
  },
  {
    "url": "assets/js/172.30535819.js",
    "revision": "469e5b81837d56599bfb3030abf1491f"
  },
  {
    "url": "assets/js/173.3793762e.js",
    "revision": "638c35d5e96bb05e6a2a8b85f2229228"
  },
  {
    "url": "assets/js/174.8980fcb6.js",
    "revision": "5397511daaf65b13b796f2ef49507fb6"
  },
  {
    "url": "assets/js/175.828b9d91.js",
    "revision": "e32ed5dc068116251ebd40535f1dafc3"
  },
  {
    "url": "assets/js/176.a910bbd2.js",
    "revision": "17e187ea5bf06466cda4f1b4226e4a8c"
  },
  {
    "url": "assets/js/177.9cdac701.js",
    "revision": "7434ea547aceab1eb968c6497fb526f9"
  },
  {
    "url": "assets/js/178.1c254838.js",
    "revision": "de52ac94ddd3cb58d5fc9cb53c105a3a"
  },
  {
    "url": "assets/js/179.984a2839.js",
    "revision": "553e62d54d75d7c2295b67b4e7ffa26f"
  },
  {
    "url": "assets/js/18.10794f63.js",
    "revision": "8abde94d4cdc8ec6f5713237249a53c7"
  },
  {
    "url": "assets/js/180.3226b6a8.js",
    "revision": "b1046fcb4b20355f3d0979071f4cbc04"
  },
  {
    "url": "assets/js/181.9bb57369.js",
    "revision": "50e84db6dcf6592e2e75e9df5e4a67af"
  },
  {
    "url": "assets/js/182.849de29a.js",
    "revision": "fd349079d517b777548649e99a12a6d9"
  },
  {
    "url": "assets/js/183.c138e87b.js",
    "revision": "feddef1226bf47d2cb7bd4332e3d6337"
  },
  {
    "url": "assets/js/184.4bb3b221.js",
    "revision": "461e7c12c71cb5f06356c0273495cb8d"
  },
  {
    "url": "assets/js/185.2bfa1804.js",
    "revision": "67baab2bcbf85d83c2949d8b1db3beb0"
  },
  {
    "url": "assets/js/186.2167cae7.js",
    "revision": "7592c1169a0c89bda2ff81b942c6d441"
  },
  {
    "url": "assets/js/187.fbfe70ae.js",
    "revision": "af1b27d00ef6e38a54a43dad40d038e8"
  },
  {
    "url": "assets/js/188.d198f32e.js",
    "revision": "7b14c7cb0cc24f1c35b0951464268241"
  },
  {
    "url": "assets/js/189.f0558e99.js",
    "revision": "fbaf279ce30ed52e13b169521305af2d"
  },
  {
    "url": "assets/js/19.65f73a7d.js",
    "revision": "b838eeb3dfd9898feff7ba72fd365ff1"
  },
  {
    "url": "assets/js/190.f8194f1c.js",
    "revision": "dad4a3507726e045f833e9e889b41a4c"
  },
  {
    "url": "assets/js/191.68d83e78.js",
    "revision": "46c1fcda7402ac1fe36a4fe228e7d8f7"
  },
  {
    "url": "assets/js/192.3060e723.js",
    "revision": "95be225d02a933b8e9a209a12085e0ff"
  },
  {
    "url": "assets/js/193.33e9cfae.js",
    "revision": "dc7d2745cc9b0cd75034fe78c7e845aa"
  },
  {
    "url": "assets/js/194.dc3a5cdd.js",
    "revision": "ee047be5c6a80ca38ee499e6c693866d"
  },
  {
    "url": "assets/js/195.858e1528.js",
    "revision": "898291f2cba47929862f95d414c75bd4"
  },
  {
    "url": "assets/js/196.1b420428.js",
    "revision": "20ffe11b1b4fb841b8d61fc720abce28"
  },
  {
    "url": "assets/js/197.5bcf47bb.js",
    "revision": "b9f4855a46a6382629e61d2e2d9b742a"
  },
  {
    "url": "assets/js/198.3c637a59.js",
    "revision": "146f60eafdd841f88a6e981b8345544d"
  },
  {
    "url": "assets/js/199.eb6d8517.js",
    "revision": "5926c8a953f3e11123a44d88ffa0c123"
  },
  {
    "url": "assets/js/20.43bb39bd.js",
    "revision": "097d54b6376cb67662d0c2d278ba8bfe"
  },
  {
    "url": "assets/js/200.91ecb46e.js",
    "revision": "c967ba9cff5c803014e82247e185bdd2"
  },
  {
    "url": "assets/js/201.79843cd3.js",
    "revision": "b8616690750235232f5fbc70082bd47e"
  },
  {
    "url": "assets/js/202.49dfd051.js",
    "revision": "4697813c871559954c7dcc038a5b59c6"
  },
  {
    "url": "assets/js/203.2579b77b.js",
    "revision": "ca663d21d94c6bdf568a45f515a092bc"
  },
  {
    "url": "assets/js/204.bb66badc.js",
    "revision": "9fa5c74f7a3f7ce1107d6e3bbd965f78"
  },
  {
    "url": "assets/js/205.f5e6c565.js",
    "revision": "048fca802b25c7d7b502257f3a456420"
  },
  {
    "url": "assets/js/206.0cc4726c.js",
    "revision": "4645d1e45b27fb87985d2102af4bee8f"
  },
  {
    "url": "assets/js/207.fbb586c8.js",
    "revision": "1c240ff7c97e565e23371d8c7a2d1e64"
  },
  {
    "url": "assets/js/208.4eb62958.js",
    "revision": "1bdfa09dcb49885c2c05e67529de0415"
  },
  {
    "url": "assets/js/209.461b8a26.js",
    "revision": "54fefd2ab1d18b814afa8aabb1b9c7d2"
  },
  {
    "url": "assets/js/21.49cdda21.js",
    "revision": "f62e002372f10f249a13479434fb5423"
  },
  {
    "url": "assets/js/210.433087da.js",
    "revision": "8f7fd9f558be10e79d82bce405b98184"
  },
  {
    "url": "assets/js/211.227e905f.js",
    "revision": "bf3497f2ae86b5a96794d7a4b7baba8f"
  },
  {
    "url": "assets/js/212.f31fa14b.js",
    "revision": "645a6d9e4619809902444b11edad4893"
  },
  {
    "url": "assets/js/213.e75a3dbc.js",
    "revision": "7e58d2deb15ad883b9e0b082182bbebd"
  },
  {
    "url": "assets/js/214.d8c85269.js",
    "revision": "1431ac628041f6a48403d31dcec429d2"
  },
  {
    "url": "assets/js/215.01f0c9d9.js",
    "revision": "c31cbeb65bbaeff8bcaa889dc0b451ab"
  },
  {
    "url": "assets/js/216.57e387e6.js",
    "revision": "bc543c268bc0717ff9e54c2f8ec9f352"
  },
  {
    "url": "assets/js/217.4efe5fe2.js",
    "revision": "c6191255ccf7e7a05b843456229910ce"
  },
  {
    "url": "assets/js/218.acbc012d.js",
    "revision": "4610d59cea30667816b3e9e901de4b92"
  },
  {
    "url": "assets/js/219.d99a4e25.js",
    "revision": "bd15dd35bcf8243033e634f0a4600714"
  },
  {
    "url": "assets/js/22.f022518b.js",
    "revision": "2ae04bcaa6d50dbf284b94a86cb0e46a"
  },
  {
    "url": "assets/js/220.90d087b5.js",
    "revision": "ba3f54b855806b4218f15732d6e74ce8"
  },
  {
    "url": "assets/js/221.2f28068b.js",
    "revision": "af093ab298ed7d2ab430e2f8fed5b591"
  },
  {
    "url": "assets/js/222.7f06aa34.js",
    "revision": "34a2d894f701e87578f0eec3c0cc1b73"
  },
  {
    "url": "assets/js/223.9dcd86c9.js",
    "revision": "f8c2f07eff0e88f2bc2e7ae951bbcffe"
  },
  {
    "url": "assets/js/224.80800301.js",
    "revision": "5937d5fde2c74e963ebcfbb4e4bf58e3"
  },
  {
    "url": "assets/js/225.51545bd8.js",
    "revision": "a7f090f26c3e13a94b396d52c46f95d8"
  },
  {
    "url": "assets/js/226.b6bea5c7.js",
    "revision": "4b7ba05d4d3d2ed589fd32deed8150e5"
  },
  {
    "url": "assets/js/227.0dc2caeb.js",
    "revision": "8a44cc79e62d06f59fe81c4ebeefa67c"
  },
  {
    "url": "assets/js/228.8bdf5128.js",
    "revision": "0b312fd2c61b642db5b8c729992eec06"
  },
  {
    "url": "assets/js/229.e7423181.js",
    "revision": "365e5794358074c240824a0de77bbe0d"
  },
  {
    "url": "assets/js/23.93005be3.js",
    "revision": "2cfc243493dde2997341a297fcbb27e7"
  },
  {
    "url": "assets/js/230.3d57e70e.js",
    "revision": "aa8aa052d733c0c30a6fbdd8119ae7f0"
  },
  {
    "url": "assets/js/231.9963c48e.js",
    "revision": "d6e8d678a275a7f5eafff5032a28c59a"
  },
  {
    "url": "assets/js/232.eae61f3c.js",
    "revision": "9be20b547d5ba647d98eebb8f80eca12"
  },
  {
    "url": "assets/js/233.a39d65bb.js",
    "revision": "9033271c6ddacc24880284fcdbc830c6"
  },
  {
    "url": "assets/js/234.923d1a73.js",
    "revision": "8668166f155b7f1237cd5608922b5a80"
  },
  {
    "url": "assets/js/235.b76ebe1b.js",
    "revision": "254cbb14ff6792fefaa1d5f59569fc9f"
  },
  {
    "url": "assets/js/236.b31d51bd.js",
    "revision": "6984207b309f984655ddc9082e71cc89"
  },
  {
    "url": "assets/js/237.f351f918.js",
    "revision": "4cbe38a935688d9dd1055e1de37e011e"
  },
  {
    "url": "assets/js/238.0045bb80.js",
    "revision": "66c0f1c57e9bc7f6d189a5b86bcaae59"
  },
  {
    "url": "assets/js/239.8a0b846b.js",
    "revision": "0dc98c1cce0f6760e2dcb8a352ab6340"
  },
  {
    "url": "assets/js/24.fa766d47.js",
    "revision": "11901ea467c4494fddf9b3eee5a3e473"
  },
  {
    "url": "assets/js/240.13b6655c.js",
    "revision": "52e7883f93e6518495df7bd8e4bbbbd0"
  },
  {
    "url": "assets/js/241.15a040fd.js",
    "revision": "b74242874178101873aafc5ac7548802"
  },
  {
    "url": "assets/js/25.ca1fba81.js",
    "revision": "f8f261c2540e75f52855b1c2d1299aa9"
  },
  {
    "url": "assets/js/26.fe952e32.js",
    "revision": "8c2b8f540e4b35dcfb0b5563f7a69567"
  },
  {
    "url": "assets/js/27.764532f1.js",
    "revision": "99432bf1678adc13c668a5cbed874d19"
  },
  {
    "url": "assets/js/28.df5b9597.js",
    "revision": "479dd849f9b56b6615d506ff6da355d3"
  },
  {
    "url": "assets/js/29.a1364084.js",
    "revision": "0720d0d60b3582087e2c547cce07f102"
  },
  {
    "url": "assets/js/30.11dc42c9.js",
    "revision": "faae076e7d03f56a668672459f0eeaaa"
  },
  {
    "url": "assets/js/31.a9d1c244.js",
    "revision": "e588b3b55ac9d3ed49d2f9a56d091b3a"
  },
  {
    "url": "assets/js/32.9507e1a2.js",
    "revision": "1a3b73f0e0e390e78c2c729947c42c33"
  },
  {
    "url": "assets/js/33.9b8e0d3e.js",
    "revision": "80266655f26ab70f0626f5b3aa4d593d"
  },
  {
    "url": "assets/js/34.473b07d9.js",
    "revision": "0f2042849367e9a804ac7a8c3f50fad5"
  },
  {
    "url": "assets/js/35.11f60928.js",
    "revision": "8577817d7b6d3a68e9f68223f4cf7407"
  },
  {
    "url": "assets/js/36.d29b01c8.js",
    "revision": "0dfbf890ba45ce6509791ccf48c1e83e"
  },
  {
    "url": "assets/js/37.01e8aaef.js",
    "revision": "e457ffc388388ab296563c375df345a7"
  },
  {
    "url": "assets/js/38.bcf82665.js",
    "revision": "06bbfc1b901b77d450751a6e27dc0e30"
  },
  {
    "url": "assets/js/39.f2bcd934.js",
    "revision": "3fa087e6f57e98e0989f2f9753cb447d"
  },
  {
    "url": "assets/js/4.4da56912.js",
    "revision": "be007d18d61ba5e5f59f1599ac6abff6"
  },
  {
    "url": "assets/js/40.51ec623b.js",
    "revision": "3d63e1a1cfa5699e557dcbf47de8b606"
  },
  {
    "url": "assets/js/41.6b4d747c.js",
    "revision": "8b1b35ae777300bc7672c7efb2716403"
  },
  {
    "url": "assets/js/42.e2b5f9ce.js",
    "revision": "988abf20cfa937c3f501ec2f5f47f3a7"
  },
  {
    "url": "assets/js/43.87196e78.js",
    "revision": "50cce2f527fa0d568c11cce4a90400ff"
  },
  {
    "url": "assets/js/44.231397e5.js",
    "revision": "69f4289f25f0a032bfdd2ee80d2f9111"
  },
  {
    "url": "assets/js/45.1302eb5d.js",
    "revision": "5fe3ddd3c7f516a8c2b2171d3a2c6d58"
  },
  {
    "url": "assets/js/46.ba31a452.js",
    "revision": "09b863721993d888b9078b4487f3e17c"
  },
  {
    "url": "assets/js/47.fe911d9e.js",
    "revision": "3e1f2ec7a8b07e4744c91b7e5acfa565"
  },
  {
    "url": "assets/js/48.32470d7e.js",
    "revision": "46140bdf503cc6a8d9a7b4f911a5a28a"
  },
  {
    "url": "assets/js/49.898a1ee5.js",
    "revision": "b1a344a5b85e99cab782ea6c9ad8356c"
  },
  {
    "url": "assets/js/5.7f2a82d9.js",
    "revision": "30727f26786f019a188995fd84df75c7"
  },
  {
    "url": "assets/js/50.939c7440.js",
    "revision": "55c8085eaac62d0af5b90a1c858044d2"
  },
  {
    "url": "assets/js/51.05ae439f.js",
    "revision": "4f264636eada85e6578413dc977874f6"
  },
  {
    "url": "assets/js/52.6975bebb.js",
    "revision": "e15543437e15e1a511471703931f2679"
  },
  {
    "url": "assets/js/53.e9b29dbc.js",
    "revision": "d73a1146014f0ae56a1e49811ef7d9ec"
  },
  {
    "url": "assets/js/54.4f57424d.js",
    "revision": "e26d7493ed3e285a185119e15b9e7f3e"
  },
  {
    "url": "assets/js/55.054d91fd.js",
    "revision": "89cd24f3479abcef7fc0649300a96b4f"
  },
  {
    "url": "assets/js/56.215cb904.js",
    "revision": "cae961d38c6663091cf19fc1dd35465b"
  },
  {
    "url": "assets/js/57.1288e528.js",
    "revision": "5e5bad462f8723e1d3428f4d8fd9653d"
  },
  {
    "url": "assets/js/58.55110184.js",
    "revision": "3f503cd2e737bb1e66755745cf376477"
  },
  {
    "url": "assets/js/59.26ca8cc3.js",
    "revision": "c349339dbeb3d97bdf328bd6095b7c0b"
  },
  {
    "url": "assets/js/6.aec09dad.js",
    "revision": "497d8649a8445c2f54c2be502a578b85"
  },
  {
    "url": "assets/js/60.d67c65ab.js",
    "revision": "65944f5d30340abd627f43f0f64e983d"
  },
  {
    "url": "assets/js/61.c5d6bba9.js",
    "revision": "9a7e5de5fb0047563f1580eae9a59f5e"
  },
  {
    "url": "assets/js/62.bd48a31b.js",
    "revision": "11659cab16d8df85d5c50dfdb4ced447"
  },
  {
    "url": "assets/js/63.f6b33e37.js",
    "revision": "cc1b4db917c0cddee8cecad1ebb2d901"
  },
  {
    "url": "assets/js/64.2fd2470f.js",
    "revision": "67373e9ced75efbc25f6d649d8b840ac"
  },
  {
    "url": "assets/js/65.0df44d62.js",
    "revision": "1f60e65ecbb41c87b31cdd2f7e9dfe07"
  },
  {
    "url": "assets/js/66.8ed28a0e.js",
    "revision": "bfe9a297804a08a266cc9ebea55681ac"
  },
  {
    "url": "assets/js/67.81b145ae.js",
    "revision": "a743a8f89f674db538fb2ee0d450085b"
  },
  {
    "url": "assets/js/68.cd8f173b.js",
    "revision": "dbeba63e34911d9306e65713783947c2"
  },
  {
    "url": "assets/js/69.894fd5d5.js",
    "revision": "66e458c78f5991ae9ee8d7a02a151910"
  },
  {
    "url": "assets/js/7.2ddd48e6.js",
    "revision": "29f7a724dad49be6948ea3383d030d28"
  },
  {
    "url": "assets/js/70.ea09edbb.js",
    "revision": "1a382c41c283a78917a005e87f83299b"
  },
  {
    "url": "assets/js/71.2ae2ac2b.js",
    "revision": "de434da198968183d444f2776060ad35"
  },
  {
    "url": "assets/js/72.93ecd326.js",
    "revision": "0af9063474b6ae7f7751fd86b8e6be4e"
  },
  {
    "url": "assets/js/73.ec4760e3.js",
    "revision": "a1bc8307856b1f9221cf9b0658b65353"
  },
  {
    "url": "assets/js/74.208fa967.js",
    "revision": "94f0b596f429fd1387b1c5b4c2c09268"
  },
  {
    "url": "assets/js/75.7e6395de.js",
    "revision": "cf716bac41dca74c076cd1f2f4c8e213"
  },
  {
    "url": "assets/js/76.09f36953.js",
    "revision": "09ddade6e521685c65acd55a7bbadfb0"
  },
  {
    "url": "assets/js/77.cce35442.js",
    "revision": "c8d5abee9f18e030db9b2c868c5c5c9e"
  },
  {
    "url": "assets/js/78.fcafa482.js",
    "revision": "f2b1e7e0b3648c85da9778b00cc0547d"
  },
  {
    "url": "assets/js/79.0d5189a1.js",
    "revision": "b0eaf3a56e3044d550e14b74df23ee1e"
  },
  {
    "url": "assets/js/8.1fb332aa.js",
    "revision": "b9fc34f5581483f3c49ed2838dde4b50"
  },
  {
    "url": "assets/js/80.152f5982.js",
    "revision": "32451ee30d6212143c884ba658867891"
  },
  {
    "url": "assets/js/81.a32df1b7.js",
    "revision": "fcc9ccff70469189fd9cc8396fed7de8"
  },
  {
    "url": "assets/js/82.cff81b1b.js",
    "revision": "7e88c3f7824a7794415051742a82e4f4"
  },
  {
    "url": "assets/js/83.28de86fd.js",
    "revision": "6ff0cd35f63acfc7b1b6dca60e75ee2f"
  },
  {
    "url": "assets/js/84.ae6455a1.js",
    "revision": "6ee926fab981945353bb5fc527c07c3b"
  },
  {
    "url": "assets/js/85.711b0766.js",
    "revision": "80706ab0154d0e953d269fc94757ddd4"
  },
  {
    "url": "assets/js/86.892a205c.js",
    "revision": "cd1445cacaf0b25314f919220ce5af30"
  },
  {
    "url": "assets/js/87.f6e4162e.js",
    "revision": "5df63e2dd312c151be06cfeffe21282e"
  },
  {
    "url": "assets/js/88.e0475416.js",
    "revision": "3c39fc1685a32ef092bfa9d5d31c60f7"
  },
  {
    "url": "assets/js/89.8579cd2e.js",
    "revision": "08f24fae158a1c760182c663630b9106"
  },
  {
    "url": "assets/js/9.ade5b115.js",
    "revision": "54734064a0c0e2a89a899e44b10dd037"
  },
  {
    "url": "assets/js/90.4cacef07.js",
    "revision": "b46dba81d9ea7fa722e960401228728e"
  },
  {
    "url": "assets/js/91.7cdc02f4.js",
    "revision": "b14a3989b1ada8c4cc6ff35c383f39a5"
  },
  {
    "url": "assets/js/92.481efcdc.js",
    "revision": "45f75703dcc9f88f58a86f1854a04d76"
  },
  {
    "url": "assets/js/93.934cb09c.js",
    "revision": "798855ed3c03338e08b223d9431ee7c4"
  },
  {
    "url": "assets/js/94.7eef7d11.js",
    "revision": "17f6a9a4fcce5a8d7bdf01b823d100cf"
  },
  {
    "url": "assets/js/95.4de89ada.js",
    "revision": "a7e2f2804ab9d7d7fa2675ca5e3c7c3f"
  },
  {
    "url": "assets/js/96.c73e7e81.js",
    "revision": "97b9ce7b0a14877356fd5c2b2566f372"
  },
  {
    "url": "assets/js/97.aacd026e.js",
    "revision": "ed4535508422ae34589eb80ec2487e42"
  },
  {
    "url": "assets/js/98.af0445aa.js",
    "revision": "97e6751c940024121ae5d53b1a466da5"
  },
  {
    "url": "assets/js/99.0de8470f.js",
    "revision": "e35c82e95cff71d52b1ba4f76ca890e8"
  },
  {
    "url": "assets/js/app.b48250da.js",
    "revision": "28d8de4820f0c0523856c9c00430c1b7"
  },
  {
    "url": "assets/js/vendors~flowchart.65e94d02.js",
    "revision": "0ebcd0f7930734160e15c97a4105a0f7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a40bca374176742675ce70a29a522856"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "100876df42b65cff9803ee49b6cb584d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "1318f55fd32fdbe5b8a14ebe881eb5ef"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "cc434625c1401936857086123b73b130"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ac071348d4b024f18fce6f686e601a16"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b650ae428243fe481392bdf868b1eb88"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6616259e60f8d566c0c02e6d7ef286bb"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "dea1b2a303c6ba84c0fa398e49e9275d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d1ab936ab306ca1612cf271663fec325"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6cd03b32e195810738db428d709e6422"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "2f200c21887215d3d9a90082eb1f6b55"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "3d14b94c3dfefc90cccf8864ffad804b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "1c4049b59dba22f9cd175e4f5bfd2d33"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "bb8c8dc53f7b0e8e98c1097df1b6f187"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "82b54d4479c64f837f5847c34b7bed55"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "f118d0e54570fe0fbea2bdd57b1d39d5"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "52d8894418f6f7d2cc629fd3b845161b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b6876fbb8c3154a45f1e1bb669145d87"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "04ab1ae73ed32386cab8cabc87ed7696"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "74581e47522577e2306d1834c9ba079a"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f0926adbf3f619544ef3b426bc1a244e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "325c2620193e5053051cafb92edf6f29"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "667b9417a94ba402d71655f500986ac9"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "da2f2d9223d9ade661d9103f75e92dc1"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "d0e25412fae805b58d580a0b3ac183dd"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "d2f42164f56d35286c7a96101d743825"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d562ec7fd8ffb5afca07c82882cd90da"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "2d28f44c052fd145fc33b212e52a6a4b"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "967b937b6ff26e96c16a1c75026a9b2a"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "75e2fc1e07b2e8ebe3138d975a3d0e14"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "438a21c2fc54d81546dd0eca2aae287a"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "d2ff022fb2a603bf71cb13a6b0edec50"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "17770d06bd68802d964232f12fbcef37"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "4af630d8c33e5fd7a76218fa4a711537"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ab3c09eec60d27b09cddb4cd4e3eb3fe"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "003030f8801db7e989ca5f935a0538d1"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "dfa9864e4d787456ff176115c3751409"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "5ccb979825c13fca94931068740329f3"
  },
  {
    "url": "basis/index/index.html",
    "revision": "60859b9944dee3776e5925293562a4d5"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ea1af12c37bd82966a8a6b7511ee46f9"
  },
  {
    "url": "book/index.html",
    "revision": "523f28554eeaff010087940b4ee69ff9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5f5baf50553c762d1b14b5800e3f709a"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "5eb2e84e85f1a005e8fde9e88507b13b"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "a55cf5796dd8eae94f7d489a789001bc"
  },
  {
    "url": "c/audio/index.html",
    "revision": "58ca66e06435116d9c2efc79236603d5"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "479fe473ae6750aa2ef9b1ea8a534b71"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "fda916b799ab9ad5b8019103c4d8f6ac"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7098ba66c6cd18c584f4fd20db00a943"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e5992f23b2a446561ea9b7c453cb5445"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "e0b789f7cd0f5702cee8fc8949fee674"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "beb7185c4226c78a47881c6ba7db9f96"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "846d4d2d73acb53c23e71a0d6a652962"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "5c8c6078a1151f9bcc52739fd1847725"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "ad18262cbdac12bab31d77a95f33e2b9"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "85315392766d2a0eb2be47771e1275d1"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "78e3a3e5d9e0c0ecd80aabb64a1c09e6"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "9a9946240e3b0bf41b4bba5ea18e88f1"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "05971f15845e2bf98d8f137c5431b37b"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a2d852a5dedaf6ede84c193f09b12ccd"
  },
  {
    "url": "c/program/index.html",
    "revision": "4cee7dc14b28ab5be6a3883da494ca1f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d88e489507641e26a4d16ce1a5c2623d"
  },
  {
    "url": "categories/index.html",
    "revision": "eb8472257d1691b3698f338b1f96f332"
  },
  {
    "url": "figma/index.html",
    "revision": "bbb9eb73b97a4ca3689def35d2ee7bf1"
  },
  {
    "url": "flutter/index.html",
    "revision": "37a91728259ca3838f6b5fc13ad1c2a1"
  },
  {
    "url": "flutter/point.html",
    "revision": "cb4ab9fc3dcf66382f75779682a2dd68"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0513f3cab54095c0f7670ead5354c96c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "12aa87fbb8c78b991cb8c514b58eb536"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1ee84e6a593937e01fff2089f4e1fcd5"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c88c59f466026067c4f554930dc528fe"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "ba7c916dea1f8a4c30ec5281b52d67e7"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "a4f6dfd605cf4f4d42d74c7058870ef4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4618d043929f714e8c25d092e3951454"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "03a3f1f6ee6ce1e2e242337e0571b11b"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "29a4193eb13b0e88ec322e714a6ac55f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8604c3a743727ed8319d815962dced05"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "08607a13ea989dfb28ce8d62014391ac"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "05be22c62273b1618ea12ed1026439ff"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "b4e6e63a97700574f1437068fec813aa"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "505c41b52c820a28aab2af70abd2da2c"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "cc821a8d6b49d435bd00b7d27c86b2cc"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "903e71da9a0c8eb79e63e5e15f8aab24"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "7f5d9bb0ceb6885c3e0ae55c983ff1a4"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3d78d41fc5e610ae7e62eb3e7ee14e45"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "28b3c7f52749d3bd1d9e8bde324a6b74"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "bc962181be8cda0221f0993369b77cd6"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "a559eda116cefdd2da69a02e03383afb"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "dc65608dc05bfb442353fd8675c9e244"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0c4dc71a0168b2f1aa2f52b9fbc882e0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "2882fb08aa1b3e26d973d8eae10874af"
  },
  {
    "url": "haskell/index.html",
    "revision": "6f023e1e0d0738946cb5b986e13a1b3a"
  },
  {
    "url": "index.html",
    "revision": "070df5a3d02e14bf9c160293f5314ab1"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fb526052f2665198ad3a59cd7a260373"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "cf8b1cf370d58a4289b494ed4cc9169b"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "ff344b18bd21ac9903d02ead47f074c9"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "0cf11efe2c90fcc7a3c8d48ba02a4e58"
  },
  {
    "url": "python/index.html",
    "revision": "51e0af4833a9735a183a53139d7c3728"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "3e1debfa64d5f8bcf5e8150d98c47249"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c3e7ba29cf0a69ff0bdc02c870bd7d69"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3514e44aa820bb6b93ac00d4eb2e08d4"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "03a08f7cbe0705a964520e4c6305b5c9"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "61d8ab69f0fa6cb8b6f8ba3b9e5d0920"
  },
  {
    "url": "swift/better/di.html",
    "revision": "6b217d481aa6a04009c510acafa8a0f7"
  },
  {
    "url": "swift/better/index.html",
    "revision": "3795fc484b41819718da289c4bffef84"
  },
  {
    "url": "swift/better/last.html",
    "revision": "dd8d4a9ba4b6114d2496f1b8177a5003"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "de0c5415d990252510df1614711c2a66"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "677e36d04e254f338e96152a2d1ac94f"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "cb3099494b8aafae5020c9b73891192a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "5820792ab2dcd26d30b7ec54aea40cd5"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "626e7acaaf18e49c2c0bd01a6da08c52"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "2c51d5fc15385945edb902e37b4669fc"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "8fc73e572fff7b87f881b25d029fba27"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d5145aa7dd974c43872ba9d18a778207"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d634c2bb1ba3fb0fdb62fd970db6499e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "46e1340030e27ea559a7295387ff9451"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "6d00eed23531839c8a7d3bfd3a42ae18"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "859629e03f7f81fa73524b77ef3cdd66"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "bc0eb63f7e2cdebd2b3930bf1645f255"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e99b4d8902a9840138aee937e707c057"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "73ca9755c284b1736529b5fb92a9f806"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "bfc923463c29c7b33c63a3bb73e66c5e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "26fd2c778cfd9b0b8ce34467ba1bea4b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "791fb0cfe1a529e60044e04326a85bd7"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "29a8649aa2ac29c058e3d8456d2d2970"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "d08a1f1d2dd05ec1398189ba77798691"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "206f1a16550616579ec8c0542168807a"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "dd46dc026263bb092620de3ecb1bfea4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "20de18206903f33d22bfded36cad2325"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "74e2674bbed87342aa57a0e5e0d93815"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "1aa96826068000e2f495076395765e39"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "793b3dc165d66d7071561d95d6366cd5"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "b3b933daf787933aa4759f3b712445ee"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "6734a20bcd0dd566cc2dba69845c5251"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e101f3320a6b26179e0fcc65937862b3"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "1dcb45e49b48f835a9215d7d44f66e5e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "ad020bb17040935520e238b18a0b1aab"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "1605622707da3d39db0f4ec609a9846c"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "81fdb52d5ad3ecbc390cd66323a9f4f7"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3eb42d9ab9b4091d1f567ab7180161d5"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5a339d29f029640d229be5004105a2e6"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "4a23cf4abb79486ebe62db698d4c162d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f39fb1ebae2e9337f16dc0f58ce21134"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f6839f6bb70e524cff36f83c92546061"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "6f5d6cbe137270977cc93bff02d634c8"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b31f34fc7ba5d1524915dc7d55080ce7"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "c85c74101d5a6ee37462b89b37ee22c3"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "bdfa5d813d6f8c782eacf565ae683986"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "6d0c779dcc79d3c9c6e3df1ef3caaaae"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "2f5bad612da5ef5930655100f1d183cb"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "501845005a6d8b581f31f156dc481566"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a5a81d6f3dc0989f36f352ae750c2b62"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "135061913e3e8b754a893acf8940b19b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "509ee48fac6804392ed3869f1e425c2e"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b7415782a373cd8fa2b93c7908ad8770"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "730066b9e9bdc87a0981148b12210349"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "da6c95f52c4f2ef87ce2cec46f961cb9"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "08df3e3e0a2fa742a2ff8807c43373b4"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "920b0acad562700966d47b9356658c32"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f55a601fdac9561cf39c4805a85831dc"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "083f8e6f8118416fcae34478ff849f59"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f8e53e0b0b11eacbefedfc5e4fbd64c7"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "c07ad3a1b645c6b73f5dc96240bd6e30"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8a424fdd75d3dbd40e756a2c8fd4595f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "cce47cfefac72801476985cf8db9c01f"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "fb1c583b6cf4ee748dce979c2c38117e"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "8d4a5dd315ca748916916cac03a921d6"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "2c049885b7d096ee4dfb535736f36272"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8dcfc2f2ef99f66fe97713b1bf520714"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4d16231875da93206191e19bab39dc36"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "485803d7f003805bd4c6e1309d8bd7f2"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "102653b01be281f350bbe6aa4b74b9e4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "75356683b7b10d87b6a568f9bfa07331"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "bbb98e955c1f49e9b45cc81a6d664ce3"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "0e22973abe813e046c3c71e7d0361e2c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "fc0828f005a644fd00e5a3485c560206"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "479ad83ac6650625e38d58e2f2424c7f"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "654529944e2765e18aa49ddfb82b4af8"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b019d6cb39305c395b51dc9392eb4290"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "957afa44a821c3affe9a43d7f4c22782"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "db5d34b2d03313ee0c921445c55381cd"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6ecdff12faf9be5ebf67f15b16737e70"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "d571e13732183ea027a300923fc6b4c1"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "ab678c5fea2fc4858ee6fed24e43bc3d"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0843ff68cb7117140c84b5e2c5ebae1c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d3bbeccbdb7f2b9b8b33385b78af1c47"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "666370a2f4e00fffca496675663400b6"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "90b3dca180e10490f86d8abf857cc91c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c0f4dc7c5f82f98784cadac3c965afae"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "11082f2e162975304854767197e11f29"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "10c57791271eff9fda4a3e652026ba50"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "a77619c1211d5b12320581c1e5987f8a"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "9c1c80352b7ddb3e323e7f61c66bc6e1"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "71cf816b67e95cf8610f3d3d90485ba1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "8387c01813c7101a32e9ed0132f503c1"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "e174c313f786c977983c95d3f18b4102"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "918771f642d9b124ad9b85b3e645f59f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "337010eab5265afcce5140a85838eb6b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "333e5d39644f4309ca4c3f09bfee35ca"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "bb845c0af6bdc3e4477d386abbe3fc52"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f6078661e0d6aae99b90608b32d2d124"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "be7e53d7758103651d56dc167457a3c4"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "d38ab78b422e9b5d0af95df3bb6b2d2a"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "a8657a3b595aafdd408331bed3dd8b0c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ab2bb3677aaa452b88d03e4e1e3fe51b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "02155176971ff18a3b8a2833b08deaa6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "0ab21a8e8ec8b1254c730856d1eb58a3"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b4945828f96f0ec756510c2f1f64bc37"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "701c0125189c9cbbf497c9e68bdadcdb"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "5726ccd9c9e6d68cac18af63ddf09bcd"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f0f859dbbd4bdf0ff2bd7573fefb9656"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4e31b4de57efaf0037ce392d01c82b64"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bc6e9c59a1839ec30c1c4b577b7c6550"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "2fe233fdc2ee9da42433bab726dfbb4d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "ba7318c4790c344a231f29995460a3bd"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "09b9bd583f75ad89fd11ba4b86aaf875"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "bbe676683a4af083a8c6c7790c8794a4"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "e28281148bc4528b7dd94a6e64af959c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "0c180502ed44378bbff2f984aa0ff511"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e0c7c6bb3d453b8f832c53a87721adb3"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "99a9a2d7997f104f8d50922e35dc0df2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1448c3a88adf166424171c6085c486c8"
  },
  {
    "url": "tag/index.html",
    "revision": "2df8252fde06c6c3fc64635de53ed1e2"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2aa38fb4ead4b0139da164c5d61f12cf"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e5733c0d20232eca89dce805886e0c31"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "06260ae00b98eec00200e7d6e646e3dd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c2f07520a221bd46d31bec92fd24dec6"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "93779dafada1dab4612e49bb159c397e"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "020e81368be158a7b272260ebba4f406"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "afd9bf60e5d1d3d63101b0f5c16fb5f6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "8bcfe25dc6948f8f973edc826637ae5c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "275587dbfa937c67576935162f6d93f4"
  },
  {
    "url": "tag/json/index.html",
    "revision": "76079d78e048614acfea055862e18f82"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "83e0565d21aeeb53fa8012217d3c7ff3"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "8da0778bea55849bfdd1a17b018d13ae"
  },
  {
    "url": "tag/python/index.html",
    "revision": "bdaf13def951b9c59219d006683f0ce7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ad1fda9101e37b2a1921821e713b5b40"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "b2d19c8f9a267988fea485d326bc2dc0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d44ffcb1572c7b30dd80f2139ddbecc2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "82fe44e2b966f4cb00ca92f17586fe1e"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "992954b7fba9105e8c523e23c132df32"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "508411231a5a8444889a03b342e1a9ad"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e94c4f725d85be707b8fbe58d4462f65"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b1863dee0bcafce1cfdd212b8767ce33"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "07735b4761ba1f5b7a33e937ceb86ee5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "6825c8c644a02bb283c4e06c38465e8d"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "65099f108d1f20ed5c1476aab5c03e54"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "76d38cdb022fd60f510ec156139ab81a"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "d3be4dd6227ce6839c4faa71b0d80f5d"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "cbe95a9ccfd2182675a1c44278a6a377"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ef65f51389a51f475d91a1bef0fc21e3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bbbb389b4bbaf07a7db00149480dc9c9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1981a8df9f99e437585552978d67c138"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "290792a1d974f0b6d228c267ffd49f46"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "883c7414e17733533ffbd4b2a7414995"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0ff1deb1509c80cad51472e4b6bf5110"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a184bb550c74c197c6f14db0c06e044d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "470f9b60914c6eca504031ba8ad549b1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "cebd87315d6f415b82590b2fbb195559"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "544c7e85aa7e991301b6ebd47826be7d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8c8f5856c98778a906a25311f577394b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6813bf7d14ea1153e27f832835685610"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "d3d05da4be88fc246f883d7a6a80302d"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "bf7bb83361de1972a2a4e6ab94ced658"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ef6c1c5396ee72e834917425d1c0f813"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "d10b38efb59502449240c0a20443a487"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3a5000172d127c299304f5df0288172f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6e658e7706322d9082d8eea6c2222898"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "eed7545ad3188c2025470bee6d46e09b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1ad243df4a06806b359256cb2129e641"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "9d501dad48400b7efb8f5893a5d51b9c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "65d59b6ccf8c9ae0796c1a15afb86fba"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "5774c87731607cff65edba5971e8edc4"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "6d5251417f3fbc5112b5bd86624a610b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "902bc28b0ee233f3344ff324384925ac"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "dca5a4eeb1ce35836fc1ccfb4ff9d8a0"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "094927338519e2616945a8d04357a88c"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "7034f83f2b92d43d7331dcac0ff800af"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0a0ba706e673784d890fc53a7930054c"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "55d02c10df9c406d46cb9ffadb3cb282"
  },
  {
    "url": "timeline/index.html",
    "revision": "25478ff38c36726d1cdaca85a1834398"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "96f13fa29f9bb86d50632f113d468ddd"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "fd67f14f217fff8cbce6a2a8400ee22a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c725e79ed3edf84615eb8f5cf4df0356"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "d9af757db71bd0a5eccabed0b0f56997"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b0edf895c208278d877ea3ce2647d06b"
  },
  {
    "url": "tools/html/index.html",
    "revision": "53d0bded888a8a53fcdbcd42acb53360"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "452bc66d46c0d88a149ec4cbb86131f5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "bcc3c2e2fc422afd6d0611350615964f"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9882df6a12980c2fc910c76eaf6cf71c"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "163ac1c4eb7d0d71aafb31f1c9df334e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "86c2888f49242c1bbec6fc10f37b1bd1"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "720ea9500a9d7092b957beee5a8f2a56"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "09880eefb7183fd4af0b3ab965af6c7f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d914bfff96f3a461e8844d52fe5209e9"
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
