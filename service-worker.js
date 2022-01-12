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
    "revision": "8819c5991c94f13f88372cefb6af7fb1"
  },
  {
    "url": "about/app/index.html",
    "revision": "44655da1594e6b1c8b991366a22d262e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "443b9ae09f54cb63c8da4f4c12bef316"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "00a0e8f11f2add378ae65d0aa6f9ed70"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6b39766fb1939e144bee1b1d1b719704"
  },
  {
    "url": "about/index/index.html",
    "revision": "fc06d956ea14a38cead0b5caf8070b38"
  },
  {
    "url": "ai/index.html",
    "revision": "10464eec357fd2d03bade0f54b9fb6b8"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "5f93a545e0b539c7ce9e41939c592be9"
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
    "url": "assets/js/118.14735502.js",
    "revision": "c2a7f886c5c4b8598ca0ceaa9cd682be"
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
    "url": "assets/js/121.e04bd9fc.js",
    "revision": "0756c38c020266b046cc4aca972c8ee1"
  },
  {
    "url": "assets/js/122.c3a832df.js",
    "revision": "7c80e5752e55f4da78f3d0e5aa840371"
  },
  {
    "url": "assets/js/123.f57a5dd1.js",
    "revision": "0ca76fc72a72a340b5495f2095a46bc1"
  },
  {
    "url": "assets/js/124.2a8f74e7.js",
    "revision": "766592d1dccdc19896cf5314aaed3e6c"
  },
  {
    "url": "assets/js/125.d27437b6.js",
    "revision": "ac9f39976fe708e6b90eb21820c08f58"
  },
  {
    "url": "assets/js/126.d909ce73.js",
    "revision": "a7272f71335a2d8b0e271a6d52cddd53"
  },
  {
    "url": "assets/js/127.df8205dc.js",
    "revision": "ebe65f7803365e191ef8013f79aac795"
  },
  {
    "url": "assets/js/128.824ff2a4.js",
    "revision": "3422a5dbb5d25889d92e86272d2887ee"
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
    "url": "assets/js/130.a80ce519.js",
    "revision": "ade2caf43c528c7d497110116f276d68"
  },
  {
    "url": "assets/js/131.3eb447e9.js",
    "revision": "d47e16b530bf2d30420fd046d096f172"
  },
  {
    "url": "assets/js/132.098d323f.js",
    "revision": "6f5baf22c828f612e5915d0002e75670"
  },
  {
    "url": "assets/js/133.829daa5a.js",
    "revision": "8e83b2003649c8c80add016c8dec6c71"
  },
  {
    "url": "assets/js/134.4ffc4937.js",
    "revision": "1e3618072ca560992e545c8ea00932c8"
  },
  {
    "url": "assets/js/135.5594dfb8.js",
    "revision": "25839685fcbc8754605f62c2d8e011a3"
  },
  {
    "url": "assets/js/136.7b122a5e.js",
    "revision": "f22b1c08c927ec8983cd041d537be02f"
  },
  {
    "url": "assets/js/137.6f475fe6.js",
    "revision": "c97fd2a3aceef37e988243a3d952c1be"
  },
  {
    "url": "assets/js/138.9c83768c.js",
    "revision": "a13dd6408d44824a4bd0a13c0079bf42"
  },
  {
    "url": "assets/js/139.3f0184b0.js",
    "revision": "34a027cd4a35e8853342d52c0a7373a1"
  },
  {
    "url": "assets/js/14.008d58aa.js",
    "revision": "5f4c2652f44fcdd1224cbc3efe80a7e7"
  },
  {
    "url": "assets/js/140.4325c8ab.js",
    "revision": "0f08525a8cade1853c43d8c1c3727b11"
  },
  {
    "url": "assets/js/141.ce47664f.js",
    "revision": "b5be5ef58b9e0ca8a6edbd6582a9298e"
  },
  {
    "url": "assets/js/142.cddcb407.js",
    "revision": "6ee80f0c06de4a0f912f6c79d94f1673"
  },
  {
    "url": "assets/js/143.c5b4dee7.js",
    "revision": "d77e1f25194f5b46966b9b9d9889fe73"
  },
  {
    "url": "assets/js/144.8f4cb2c1.js",
    "revision": "eb5c0c610d136407a42efd9f8ecb971b"
  },
  {
    "url": "assets/js/145.d96f70cd.js",
    "revision": "f5210d2788a66ba5d2f096485c7ec74f"
  },
  {
    "url": "assets/js/146.727a1645.js",
    "revision": "c1a407eeff26070a9391834576790a74"
  },
  {
    "url": "assets/js/147.22efb236.js",
    "revision": "3fe8fca410eb574da4ae020b7af349ff"
  },
  {
    "url": "assets/js/148.a7e3fbaa.js",
    "revision": "f9a5b864142209e42e5a79addfab966e"
  },
  {
    "url": "assets/js/149.fabc280d.js",
    "revision": "c1ed2d87c2da79e3c27dd974d26e129c"
  },
  {
    "url": "assets/js/15.4056799d.js",
    "revision": "de05d438649de7d6d2be159d20e94f27"
  },
  {
    "url": "assets/js/150.92658a6d.js",
    "revision": "6777370a2b9ca553c4c32d57c51454e7"
  },
  {
    "url": "assets/js/151.2dd13b3f.js",
    "revision": "304374556b7e11635b664b15b4e850aa"
  },
  {
    "url": "assets/js/152.bf8bc8a6.js",
    "revision": "60ebbb03e89704a340ad81b8bef27e0f"
  },
  {
    "url": "assets/js/153.8119bd80.js",
    "revision": "d096b4ec99d8976a94fc1f9917b6a597"
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
    "url": "assets/js/175.b1fc3d0b.js",
    "revision": "8de09a61421b38d214e68b4596ea627f"
  },
  {
    "url": "assets/js/176.e3cebf60.js",
    "revision": "3d1b1ddccb4f29f2c7253b9312884c69"
  },
  {
    "url": "assets/js/177.25eed4e8.js",
    "revision": "d4bcfc9afc916a9e0c6266b0aabf4c9a"
  },
  {
    "url": "assets/js/178.4f92a5bd.js",
    "revision": "8d6cb3d10c41b0473b3ae75a9e91fd35"
  },
  {
    "url": "assets/js/179.00db1da3.js",
    "revision": "0518b9c4c88faf8e12fc57596d28aed6"
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
    "url": "assets/js/203.f70b0046.js",
    "revision": "007a8f8624c46bc385886ba55d0933cb"
  },
  {
    "url": "assets/js/204.6a1e87a6.js",
    "revision": "79d4fecdfa0b43f4bf91aaa9dce54b74"
  },
  {
    "url": "assets/js/205.f5e6c565.js",
    "revision": "048fca802b25c7d7b502257f3a456420"
  },
  {
    "url": "assets/js/206.e86c0d79.js",
    "revision": "45cacd2e897fc015d7c5d72060d08909"
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
    "url": "assets/js/214.15701c6a.js",
    "revision": "307f8817778e3d404a4c307a9c44cb5a"
  },
  {
    "url": "assets/js/215.cc2826f2.js",
    "revision": "9f27c182651fe5c5786cf5428c0513e0"
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
    "url": "assets/js/25.bf035779.js",
    "revision": "004d54d75bca45f31b24ec01494e5a8c"
  },
  {
    "url": "assets/js/26.44892b44.js",
    "revision": "dcc0df5c47b8461dec89938fcec2f1fb"
  },
  {
    "url": "assets/js/27.f6053976.js",
    "revision": "75ead8b85fc60a4314b6efc358a27422"
  },
  {
    "url": "assets/js/28.749c5c93.js",
    "revision": "cfece9c6348f99a0603c2cfced9d1cb5"
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
    "url": "assets/js/41.62074146.js",
    "revision": "313eedb1b1440d47a3cabba71ff3e47d"
  },
  {
    "url": "assets/js/42.6be66a1a.js",
    "revision": "fe4ed1c39b018a4f4c3e0ad7a3621891"
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
    "url": "assets/js/69.66bbc9ab.js",
    "revision": "872967e1508ab64461e09a324549811f"
  },
  {
    "url": "assets/js/7.2ddd48e6.js",
    "revision": "29f7a724dad49be6948ea3383d030d28"
  },
  {
    "url": "assets/js/70.4384adae.js",
    "revision": "da352a024484d5b2414d924141ecc02c"
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
    "url": "assets/js/77.c596576c.js",
    "revision": "6e6a54cd9c6f3c7c452f2c62f9308e57"
  },
  {
    "url": "assets/js/78.e87f8d3e.js",
    "revision": "82a6565420a153c6280d02219436d66d"
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
    "url": "assets/js/81.50b35306.js",
    "revision": "c290a1f19c42802f2e478d2330b85e40"
  },
  {
    "url": "assets/js/82.7971a343.js",
    "revision": "6825e0178046ead1f9536aa6d4c56249"
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
    "url": "assets/js/app.3267d945.js",
    "revision": "cd97726d453f4e99347495bf794826b0"
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
    "revision": "fa71a00c3d2caa134987a274a2fb184c"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d7ff745e8fae1b3b1f7976dbd0966457"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fac246fdb2541fa25fbacbbb786324ef"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ad2987e4ce41912380ae6f20148663fa"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "bafa78825b33bee51c22f28f4d6b5092"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c065c77d237e55532c2e77c9ff0bbe6d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d3d0679bb5973fa37d14ad90533185c6"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "10c62e2c5c8a62e71d86c259766c1478"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d1fa0e3de3182ae8f9fe5d23fd6b64d9"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5c78d87f256e130436d737242dad30a6"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4e4a1a056eb223c2fb95b3f3e0b1c61b"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "4e76368e954cfb4582424ec37ac56a1b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "8f711b4f5d1f646186e8cd1bbe1225ef"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8ed1105f39acbd7277fd657ee79744b6"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "663a4d39d089ea0412a066ca356eb7c3"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "3f634afc45e6d8bf0326a9ae698abbc9"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4f2639f89883027df3201e44ec89e82d"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "7934b025333e6d399b096a6b9c79ea5b"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "d12ee70952da3553f2e23bee8f38f77b"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "d5783444ae39e86dd03057fae722b2ce"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "1579af97c969fa956843794f5fefa237"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "c646f64d93e487300fd597211a937827"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "b993cce60818cf8393f3a0fd459db167"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "72ca9cea9b1c09966fa3602961f694ad"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "89db961d4517807819466eac1f38d46b"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "d372bc77c8025b3358b8e427cca1ec6f"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "752c673d44e245f07b81a58bf04dc8aa"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "17b93a779bbe8932701eb7c2b06099ad"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "4010deb43dd5ced7c65bce2c9bf7b5bc"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0e155b90de32306c5cafbd7ef5a2cdad"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "38a824620b094de8dc68c1486ee80d16"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "ba58f7e72ad0ea64edf4e97aa5bf8b2a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e0772c939ca4edbaff885997fadddb01"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a155ebf10f8acae9f5946896027d2cf4"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "2f1015a5e2179d49cbac0c52d7f20f08"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "2aef5218f4c0c596eaf5d212e93b39b7"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "c4dec741ef769daaf4ffa4878378a638"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "f9de412651830b9d9610c35ce8c0592b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "658d5872a32d49623bc057b8bbe8d6ac"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ba617dda768076bbc0651490d52b5dd5"
  },
  {
    "url": "book/index.html",
    "revision": "c8f01cbb74c4b15791f8d73002e30701"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2073cbfbc9854e3d2da15c9ba2e175e2"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "98b6990e857bf6649bb306f56dad40ad"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "f2ae2707ebdd78d05142005aeff20ac2"
  },
  {
    "url": "c/audio/index.html",
    "revision": "0f8efa6b55448434ffceba59e38c2e93"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "fde61581efc36624298ec17a6d73db5e"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "f1e120d3b0ca4b18642b6c49ced5cd48"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "8df8cbcf9d44a15cbc68516fbdac42dc"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "befff555ebc624adcc59f7b4eaf5e60f"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "485e9e2380b0c551e1234b52c24b44c0"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "e880b0518114ba1c907769b0866b4ea4"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "3586a4af87bed1fc454d379296c6df37"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "a4996f4ceda15603f1f65c654e3ff4d7"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "5a199da7131e763658544aa56868646f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "db47e3858aed696326f2d9df2b1a7615"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "6a38a61d118fda2b91eeae676a3fe7ec"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "aa96d9e5df175b6feb9fb70bf218c848"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "94de6dc2215ba0a98a5c17706e38b832"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "c55957c55c21d7b3fe140aff9008662a"
  },
  {
    "url": "c/program/index.html",
    "revision": "e58757713cbf2d798cb4b51251275830"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5ed7adfbf98b933e91182f383b2642d0"
  },
  {
    "url": "categories/index.html",
    "revision": "1edbfdcfc439627a2396528f99c9ebf9"
  },
  {
    "url": "figma/index.html",
    "revision": "67559e5fa92faf0c34acc18310ea9950"
  },
  {
    "url": "flutter/index.html",
    "revision": "9553cbfbbc1c10856bad9d231f2630b2"
  },
  {
    "url": "flutter/point.html",
    "revision": "78d1a3bb928bcec1d7434ae3e595eb5b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5088a1c9e739f5e5492088c8d694b7ac"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5d7d8f67862f2b2b6a36018c30576688"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "eea1071861946d1aaf3df4a4bec298f1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "69ee83bd1d78779b479e731b60c8f320"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1aea599725e5d94b2aacd386b8e3124f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2499ad194bd95e0de419773e2f55045f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "15a02541182361b0616cf0b47ba04cb8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d7149e0306c3da358425d0b0a01f5aaf"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "9bd635447ac2e9b455655213298ca5c6"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3ddfdba1869af1268fe7ef4130ff7ef8"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8459f40f14dce5e8ac00f12d6b214a13"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1afbb67db8c7c6a60b639d248cec5303"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "3e4025272f71014137bdfe7e59d22db9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "2c1f5300a4c2a4454130a645cc43a0cb"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7cccf6419f241cfec7da5862c570298e"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "e4e63ede85a7aa9036bd44980e7a56e5"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "5105d50f44e2a5bd200f86d5bff4e5c6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "8bbc5c150dc1e01b70ebefe51fc04a10"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "12c1a985baeacdf311c048afc18a65a6"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "077a09e99d1afe95524300ebb0d17e7b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "93e96379804ed71b453c5db53e2dd20a"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "04199176f3d1a0528153c89972219cdd"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "fb481fbc0c2cce1ff9a2d4a9244b0b24"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "22708cb1b89c5996b4532ed357ae36da"
  },
  {
    "url": "haskell/index.html",
    "revision": "8526b2b1f41e63130a316d2d61553051"
  },
  {
    "url": "index.html",
    "revision": "9a4fb51dbcf0bbba09c27c37445831f7"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4ab736675d6470d901ce9a230e8d912d"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c808ec301440db7a932d0081afb1efdd"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "2a36c235d0ac01e18bc669d0e07060ff"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d97d936031d45979c4fdad137caee3df"
  },
  {
    "url": "python/index.html",
    "revision": "31b1ccbf0b8b7c1bf6701f3ecd386a64"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "96e08eaea0c9d316686f750387545ed6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "45bbe1a4e0b4e561ee2fe4d3b2b3362c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "6f609a33ca8d855314e44b077eede424"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2e3da8df39fde5e78c9dac86c0482e49"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "a1778b512770303ddb153c787fac1948"
  },
  {
    "url": "swift/better/di.html",
    "revision": "a410d3fcf2e114c343f4b0be02315dc0"
  },
  {
    "url": "swift/better/index.html",
    "revision": "7d2449ad5c26d1a4dc806d144bd07390"
  },
  {
    "url": "swift/better/last.html",
    "revision": "3716cfdafec81bcfffdd03eb4153cfb3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2476e7311a956ab539afe523ccef285f"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "4c66e104ed9c38401189ce36c7567565"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "3ef96b0c9a8e024505bee365007b3f25"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "8910b92668631c7282346e8a08292dba"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "47e6c93dce79f094ae0230b209ae818e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "0e8a530dec2df3b25c3fd05dd1defdd9"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f2da137d0d6ef5fb04352e79758e0e9a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b6bffadd9823d423e2a134f68d677597"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "40eba34c2abd6f8752cec05ba7d6e814"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "952bd98204b4c69f8ce1d51d6bbdb1bd"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "5ee2918cdcd6fda76049fe49dbe5e61e"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "8b7988eaef3e25d61d3a60585bf72ef1"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "77fe2455ac0859f72991be531305ca7b"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ee91c1a07bb52343a601a4f25c273900"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a775fa1315da0c4fe0291c37c0f11cf9"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "bfd7780a18e6f08e91bca8e41110c66e"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0b260160e0b7a5109c84c06ba0f474e4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "157eb547571c2d7a24c9605f88bae44c"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "879af60cc382b3cfd19b62c08cb61eb9"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9991ac7fcc5e8d2c3dc9ab080db5aaaf"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "4c98ca2be8c5c16e4fd1c5801841dbf8"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "fbfa5096d1532c05d058afba2408f2cd"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "7dd5ed9fe1efd8d18ad39dde64291085"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "03f71c53d414738737311752385cd013"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "888e7ed6b420c3baf0dd775382fd2ca5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4803a97ab3697f836e2ad9b3da20db9a"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "6ffcb09769d1f661575cdf351af35bb6"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f3f32370bcf3f546315e83444960621c"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "117165e3726dca294bfb9383e944fd1e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "8bdadc47b1d19f692dcfc7d0315dfe5d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "0cd955536956125bb60f5db31ad8c12c"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "7c75bfb54abf42df0c1c066a52d7a66b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "36cbc1d414a7746ce9ef7e0ac3173142"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "dab09493a46e97939be4b684dab348fe"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c8c8e191c78f772dffb2bc8454f68266"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "1bb534f26bb0fd1ab97a1ecf11011d60"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "98b53f23896ffa5b9cd711131b26d322"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d1a4e0b546455337c1262213cf2cf89c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "f741d3e20f61c3a345083b3d5f54843c"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "09f3f98bf66d7257aa46e629d20517e8"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "68f9e3143b0b9f6c921add2cb0927659"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "779c097484c75362d0872cdd54f3ca91"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b1179e8ab14d9f1a3821ee081dcdeb4c"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d332e8594888db458203513c264c5e93"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "d88eb3c8fda48dae9f04be37e7747d56"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b5cb991f7516074225d2ed6ab295c5c1"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7addfd0bd1dda5b77d7bd8fcc7efcd74"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7afa4301e7942ebbd49ad1527ddb7f9f"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "ec781817d9d10cbfa510bff526a53adf"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "97a9fadff09162d460bb36d4db7906f4"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "743ff7b5d7c741ff15f42ad4f3bba4b1"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "b94019429d21b16b377b74580342338b"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "5e4717ab6a736ae4835a7fd751882f14"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "61b1375c024a6140eef3c59f99e2573b"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "791d3c15d6739663ab5cf4970e8721f3"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "60299de3636a25926bce673f015f8140"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9a11c1be7255261d320399b292d4e1cd"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "0a2aa28e84910bc46ce377761dfee192"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "eda0f4bd25e0a20447ed17fbb81d70da"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "2c0d024809dc92438ab425909b441548"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "5ec7c9315a05ca85f903b76f0001243f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "bbaaef70406c968979fb3aa1a7bf619c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "68ca96c5134f7cb61a1cff2f79189568"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c8a5f9ee7d8c2222f1f5aa53e4d5a874"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "47bdd40ff7f2f5a2cbb585951e99bf11"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c42cf8e60568dcbb4970052529ff7480"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "7deee92d906dc538bce15ee14a0c315e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "28dba592844707c046198f82081936ce"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "56433e8134508015626d7e2ede056655"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "015aac71ac8b301adaf3da9eecf920f4"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "95cdeecda0e51b0c19cac04966304121"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "b5eb2cbbb9be34a97f73e5e24b654ec7"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "93f16cbdd00aef3c26c45010c3120f6f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9b1c8bacbb898946f22dc1d390b50ef6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "b0ab7a14081b0698a30b494a1272dbdb"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c9126522f075f3d98923ae49a0bafa34"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "884a06781ab0e6c1d80ea79bf2b17766"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "67b564e1b51259089e3934a7aec78afb"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b23104b1a0dc4067a32dbcba3502f3cf"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "c429cd75d51367cb3ca261033daddb8d"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "5348e333921dc7a78c2a98b534c193cf"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "616cc0e66280282076621b5317f2881b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "3566bdad1fe3810fd27d849d6d6062f9"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "e3f53619e87390d93b5d04da74574f5c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "a5d74d63d9697824b5a50a104073e375"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "d570ddd16560eba3c506a16ba2d0f8e5"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "0a0acd4e0a12c8564281f5166c44b707"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "e3b306cb0fc57013f68885ec7240b3bb"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9577429fc6c7e8b0026ec757298ca6e9"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9851b307f2849c6c480ec25eee6aea04"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a50d34595fe4e2e724caf3bacaeb5285"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9a599f4d3d7147c2b3cc6404cb5a595b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "11241fc920f3b1e2bf0e38dca9ad6e90"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8ece0e537db6654aa812b2b5dcd2e7e2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f2bc47887251e600916e2ef8154c79bf"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8b3b9910655f9679929449f8321bbe1e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "c1786cbc73f0b53d0b9119cc61ee0af8"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "58c0311db4ee75bbccf1e80a062b5972"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "32f4db858057d0688756d3febbcc7fa7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d797fa630d854677ddad1ca474f1f567"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a415786ea0cc061357dfac395c700c5c"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1a007926cf59d179ed52a56ead50b8d9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "7e04a5e18e94a9754f41d8b7db8ce90d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "9d1b18ca11f411af5d2f88d5c6b8476e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9941f1c258856365bc55a72396451d4a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f7035b78ba352690897fad90237edd15"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "187c27ec7373100183d42753f3486434"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "98596414cd38995ce7e97b3d01a47ad5"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "324495881cd08dbeaaffe441f8a118a9"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "f26d90db10c3dc5813e8ff9c61c6a6fd"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "cd8e454293fa8ca54ad47d74ce314fa6"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "32f777c0d8ef174367556121c936a788"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "7ad67172c3f9cdfda571b55b36a7dca1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9c022b0481ad6b3787cd4933c0141104"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7fcbbb6d22325bf5082f30bd3f407f8c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5b2b1c806a9ba02419129d8d9944326c"
  },
  {
    "url": "tag/index.html",
    "revision": "35a5fc263f56c7861ad098cb67476c71"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "61ea0b8231f710e19d16763b3c9cfb8c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "cd299f60bf835a61c301e164b9392005"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "2c570f8f0e7b6652e667be27eb62dabf"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e460a26bfc22bf0d3eeb3eb34466eae4"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "c482e08ae28edb9c73bf373e831d43c7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7b18801f037770c2250bc8cd5bbdac40"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "904cc2d216799c555f2d6673c0199ce6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "1eb0bfc66447ae7a635c531e8e18264e"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b6e69e329cfafce4f681ec0884a14db2"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d9dad7cef6ebd240b2f66f100c9cda9b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "88ce2bee0f4cbc62cee9b3455ac6f03d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a1b8d4ca8ce7250e7292fa43ca9e3afc"
  },
  {
    "url": "tag/python/index.html",
    "revision": "941cd4e292044e28b13a4f3b0fbd3245"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f869512fc305d14a6fd1c3d9168e593e"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2d2566d27bcd2bbeaa7ceaf40caac965"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "8fad18c981bdb2e110c2c2e85f4a77ac"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "620edc5cbfc06f46488eae5b74e944af"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "8dd75d7f2d5aa48092c5538eadb5fbbc"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "34ac03c91d91f823d2ad9c5ac7bd8c30"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d1e186d6ae3daf2abe5b428b8978374f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "78da46e1adacdb7b05a8ab6c5bb1d9bd"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "520f2426c7303d53bfe3bb7199d07e48"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "338e5b85827241c7efb996847cb147c2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "b05fe69b47c7e6c5637481bf81468574"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "1c886f4daeb5a961d9b9aade7585a10f"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "92f5292928f4c19f38085e31cf8bbac3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b0dc845d2e3378271db3b2e9ba9c8f54"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ff942c629560740e40df5cd986b82dbc"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3829c6fe2ba50c479a303d5cd18ef6f3"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "86f8ced366f3a64058b2c22e66a81d8e"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "77c0e79d0b85d8acec1d06dabb7d7193"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b310ead6c671e10a1af347cf1d47550b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0dd8a232466f73137e981f28099241ea"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b88c5cf43c19cd36e04b3e4324928ed3"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "5759dc5cb034dd3204193a5fdd196c7a"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "447d3367bfdb2900bcb272b748e459bd"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4d9b4d597c0c610fa083b712d252e0c0"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "bd3ccd678ae90ef0a041ed312c6e8360"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "b78d02051d9ed89a3baa314b7ff72766"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "cc393c1cc020e2ee27b1de66242e6315"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "05ce3be8df5a840825701c75ad29bf99"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "a6061512f6a80c584dadc35efb9ae08a"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "bc05ab1ad676603db913e0837cd66629"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "89d42ca9fe9473865c37827bd43d0c2c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c32bf8afa2cbad7d3937da29e5646323"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b7fae7bfa1ba2904bf675cd2a01080c9"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "7a930721052a102bc37ad3c74cc61de0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "c05c4374b376a8abf52eee286722502a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "40fdf3dd5c1fb94c932150e2aa1091c7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bd4787141c32a984300944cafdeeb9e8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "87262bf7a451846a4e31502bf3333d17"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "68a9ee97de329ebaab5176f13fa44e73"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e4ac12910eb366d5e769f4de23cdcd7c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "cef4c779bc8bddf49899bfdb264d77a6"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f9f3dcd18139481de498407ccc67e13c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "54f242d942b7fc0101f1c456d3e854f7"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d5eef863cf360a9bd8583940eaba645e"
  },
  {
    "url": "timeline/index.html",
    "revision": "6cd06cb80be9c37be47c275f1b9a47e4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "21285d83d5a5c6488c1bf978d4076e8a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "56124b929a62f94b703902a725aba4da"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f8573ba3fbb5feb41b9c05719775c8eb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4449f2c51ec7601b4bfe6a9f72532df8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c8a9484c4d2bbd5cc0f64ffaa510c852"
  },
  {
    "url": "tools/html/index.html",
    "revision": "01c4f7d857916b941f7fb7af9edd3064"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b2befbe7fe49be37d67eeaecf204d2df"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "daa33b0107b3e44c05b7302cb9cf3499"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "07dae7d5d5f1edeb17aa7fc68afe7524"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "d63640e70d00d561b87b0abb0be081c4"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "6ccfda6275f28b8dcd17672e026475fa"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6a4b8922aa349a80c7d32b6f3cd64995"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "3959c8bc3f87f940cc5cba108eb83220"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "7b81e68234e9cde199d7b9891aa351fd"
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
