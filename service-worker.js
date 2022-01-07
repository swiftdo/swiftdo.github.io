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
    "revision": "29492e63c29f9741faa495445775dd9e"
  },
  {
    "url": "about/app/index.html",
    "revision": "9edf762ab3fab5154d84077d37657c83"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5efbb0025f7a5c4ee536e16e474ef866"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2d314e0c1eb8a66ddfe23fbfc2fc023a"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f1eed10356430f3f13f46926142ad736"
  },
  {
    "url": "about/index/index.html",
    "revision": "c46cea1d2eed2427bd6b5afd95efc754"
  },
  {
    "url": "ai/index.html",
    "revision": "63ca2c99bf94bf86f56569ceb70c6b1b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1db62f463c00ffb3bdfb6570da616c7d"
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
    "url": "assets/js/10.eeedfe79.js",
    "revision": "d7281a03cca01fa0d9867fac7eee890e"
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
    "url": "assets/js/119.feaf7b8d.js",
    "revision": "5468f904d14255562442527119cd861c"
  },
  {
    "url": "assets/js/12.8265697f.js",
    "revision": "5462499b630529b5bd6323abe9b2e455"
  },
  {
    "url": "assets/js/120.38fbb33d.js",
    "revision": "acc5a3f2c83079c475a2909cd0e56b50"
  },
  {
    "url": "assets/js/121.83ad245e.js",
    "revision": "b3097dff078503c5aebdbc59d95c2e9c"
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
    "url": "assets/js/126.21e4902f.js",
    "revision": "26028a5ccbe81349387005233cba1252"
  },
  {
    "url": "assets/js/127.44f85cb4.js",
    "revision": "f8af2d94730e3b1e987cb14b3d669416"
  },
  {
    "url": "assets/js/128.824ff2a4.js",
    "revision": "3422a5dbb5d25889d92e86272d2887ee"
  },
  {
    "url": "assets/js/129.b52c10c8.js",
    "revision": "b552613f4a1843afd75e7793b488e9c6"
  },
  {
    "url": "assets/js/13.017d1305.js",
    "revision": "aa6152a76c566e176e42f160946b6fe3"
  },
  {
    "url": "assets/js/130.c65ae59d.js",
    "revision": "473c5c3f8700f66258b0d747ec56bc13"
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
    "url": "assets/js/138.5d813e47.js",
    "revision": "2fb05c40b47223063cce9613b1c8a06b"
  },
  {
    "url": "assets/js/139.73f18325.js",
    "revision": "c2aa64253c8f5df8291a1ef87bb45cef"
  },
  {
    "url": "assets/js/14.e1ad22d1.js",
    "revision": "9362ee7a79f3108c6a6fc8c4def45345"
  },
  {
    "url": "assets/js/140.4325c8ab.js",
    "revision": "0f08525a8cade1853c43d8c1c3727b11"
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
    "url": "assets/js/160.8dcd34a0.js",
    "revision": "b00c99f28357aeb8d8e677405c5e623e"
  },
  {
    "url": "assets/js/161.b3fcedd1.js",
    "revision": "aacc77abfb7187a62edf93aa17d4aec0"
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
    "url": "assets/js/178.d9cb8525.js",
    "revision": "464e31af394819d7f881ffc403546d49"
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
    "url": "assets/js/183.25297a24.js",
    "revision": "23a31424cc21d89b8eaa7ea7bbc3417e"
  },
  {
    "url": "assets/js/184.abe4b716.js",
    "revision": "0b8e8bbbf5f88a75a07b1a57e530034b"
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
    "url": "assets/js/189.131298c0.js",
    "revision": "804d0f5aa8f1763009cee34799ec00cc"
  },
  {
    "url": "assets/js/19.65f73a7d.js",
    "revision": "b838eeb3dfd9898feff7ba72fd365ff1"
  },
  {
    "url": "assets/js/190.57933d3a.js",
    "revision": "d5ad395e818b744637e911d306fbcd5d"
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
    "url": "assets/js/205.9d408c91.js",
    "revision": "40887284bdd07213b984aea32bb9dacd"
  },
  {
    "url": "assets/js/206.06c2f7d1.js",
    "revision": "f0e74fba67acbc6e8b7bce05a3a41da4"
  },
  {
    "url": "assets/js/207.4db3f90f.js",
    "revision": "35575443cfc1f62695e848bb789682dc"
  },
  {
    "url": "assets/js/208.b68d5926.js",
    "revision": "ba1abe4c9d2f915dc5f2112a8b92f2cd"
  },
  {
    "url": "assets/js/209.d84da126.js",
    "revision": "005d0531c1b0bbcc74205ac669ee48e6"
  },
  {
    "url": "assets/js/21.49cdda21.js",
    "revision": "f62e002372f10f249a13479434fb5423"
  },
  {
    "url": "assets/js/210.ed86d998.js",
    "revision": "bf8c70df3339b3424070660b03b92ed3"
  },
  {
    "url": "assets/js/211.9d8e01df.js",
    "revision": "0e3c93ad561f96fcbc033cc0bcab27a8"
  },
  {
    "url": "assets/js/212.60d68ac2.js",
    "revision": "54a478394fb6315b78314174099c4af5"
  },
  {
    "url": "assets/js/213.c8c04515.js",
    "revision": "a657da8d68d6d207c7977aec7d1998c3"
  },
  {
    "url": "assets/js/214.20c9d56d.js",
    "revision": "08dc816798d5457cf8a1e4c03da2e410"
  },
  {
    "url": "assets/js/215.1c4a16d0.js",
    "revision": "10422a4888de91f974fe2a30c766b5fc"
  },
  {
    "url": "assets/js/216.2d1bbd05.js",
    "revision": "4de23d7e9f8ba99f9209291ba1ba2f5a"
  },
  {
    "url": "assets/js/217.f214da0a.js",
    "revision": "f559e88852c9bfc860e79f86f304c1ed"
  },
  {
    "url": "assets/js/218.905d14c3.js",
    "revision": "641c5ca94c17dfe530b3ebaa88823e3f"
  },
  {
    "url": "assets/js/219.9cd815d9.js",
    "revision": "bd6ddc4d5c3874f5deebe672d68d49a7"
  },
  {
    "url": "assets/js/22.f022518b.js",
    "revision": "2ae04bcaa6d50dbf284b94a86cb0e46a"
  },
  {
    "url": "assets/js/220.517ac302.js",
    "revision": "78843b49d3e3d904fddf19d77dd08dfe"
  },
  {
    "url": "assets/js/221.9d2b44e3.js",
    "revision": "b6e90af189a291487ddeab664f72b55a"
  },
  {
    "url": "assets/js/222.f3fb82b2.js",
    "revision": "c8abd9c6f68d07e349b59585672ee2c4"
  },
  {
    "url": "assets/js/223.9a3bcdd9.js",
    "revision": "1e1bc477a059db30dc2c834372fb617d"
  },
  {
    "url": "assets/js/224.5437a647.js",
    "revision": "ae47064acd9ea9fbe8cb26899bb8bff2"
  },
  {
    "url": "assets/js/225.854a07f9.js",
    "revision": "678ea85b3256fa67afe34e019251aea1"
  },
  {
    "url": "assets/js/226.c5578f19.js",
    "revision": "6adfde90548fae15f1d69cd645fe6488"
  },
  {
    "url": "assets/js/227.8c1cb9fc.js",
    "revision": "261df9bb431c4a379954c4706442c3cb"
  },
  {
    "url": "assets/js/228.77ef0772.js",
    "revision": "4d5ec1efddc0db02710f7a0b1e010709"
  },
  {
    "url": "assets/js/229.64215bb2.js",
    "revision": "77cfe152228aba5bc382e65df849ccf2"
  },
  {
    "url": "assets/js/23.93005be3.js",
    "revision": "2cfc243493dde2997341a297fcbb27e7"
  },
  {
    "url": "assets/js/230.c7c09226.js",
    "revision": "8da215b559cef82a5e7a045e72e9e5a8"
  },
  {
    "url": "assets/js/231.efabe964.js",
    "revision": "30be32b1a7d69fa37e5f0dbc633bc693"
  },
  {
    "url": "assets/js/232.14ace0da.js",
    "revision": "316d3443df0fa57198f3ed3c99f28fb1"
  },
  {
    "url": "assets/js/233.4566ad2d.js",
    "revision": "390e72c836a92fb5b59a0e530fd7fc6a"
  },
  {
    "url": "assets/js/234.6e29538f.js",
    "revision": "a4a0fd10550130a5da2a1a2e9b501cb8"
  },
  {
    "url": "assets/js/235.5fbfac96.js",
    "revision": "e234d77040c080f3b581496485427bc9"
  },
  {
    "url": "assets/js/236.e45fc8b3.js",
    "revision": "9e9ca44aebfcbb84788fd1c93d9ca2d9"
  },
  {
    "url": "assets/js/24.fa766d47.js",
    "revision": "11901ea467c4494fddf9b3eee5a3e473"
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
    "url": "assets/js/app.259f2bac.js",
    "revision": "d0de68d5cc6ba2aaddbfb01613168a0f"
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
    "revision": "55000544737204c56fb19e47bd759886"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d0344ee007b3b5155dd861db02fc93bc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "3aea4c4d2050ba49e97061d0a2873802"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "af661a8f5c4c49b52ad12b3b47185598"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "a35f1c54a68729cdda3cfb68baef59d5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "35deac34500490cd8563ce5ed104ea9a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "07177f9f0af2d54fac59e109dc0b8222"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "748175af321fe7e0f37f1687c3ba4d72"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2471f37b5e1718e591d99506e031c253"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "daf21db2745553d32032bbf6a1def63f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "7300f606c866f7e239d371b9a79c8021"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "11eeeec978eb3ce3dbbae829a1cedec7"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "3b860dfc56a9b8731a2e40d38f22838a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d583f554b0fb93fc6dbe41d133156310"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "bfd9f786e57009faaf18f90719128366"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "ba9fbfe3ad785093936296c020d9fb70"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "fa417a240a4c3c97d1b517ff41e21d44"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "19d47c4746211d405462c0af6ca6f04c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "8c3268e92857f49f60ad3e6796dbecbd"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "110ef45decd981f0f38a9c49246cb8bd"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "d77d6c8efe7909744af753a8ed3f878b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "dbba83f3a2cd2614d19470ad29cfc5b1"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "32edca5096cd5daa625fa5afdb0cc477"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "18dc428f1bf0b1b1b42169d3fc11b730"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "cf38d890c2a1558c5ae1a1e7fcc9e268"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ac0d102b153dba5f0659bcef19858709"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c65b7eff0bf138bc42c202a5d7c11216"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f87e0816033ce74514b46bae04bb644c"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "9ee28839a3abc5e0759067e88f135cad"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "12509ac85affd57575c0ed552f5c18cd"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b2d3f4155be32f2f471a40f6cf452e7c"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e7a5e5f90b6c6eb40939d75b4d257930"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "2ba088f81c81d198095ece8cd1ae0847"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "8cb61735a05a5fbd27b56108fe1bb642"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "b3fc2cb9fde138f7d53c2430196736d8"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "2e51d6901fdd9b909f282ff9f694915d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "385357ca810cf6be652734721d7ddd11"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "3ebd047403a14a8a1b99f5d2d02eb38c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8558b18027156a1b1c46638ef20fd9c8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ab257040b9ffb7cd1c94007b5d5bd1a5"
  },
  {
    "url": "book/index.html",
    "revision": "29adb92d7892c9658c56c18545c17b9f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "819b77846c52ad536d5198e90d2bace1"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "49b21580d39c4a36973fddcee9462b36"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c1458b4600c8592cafc88a3d94a89e62"
  },
  {
    "url": "c/audio/index.html",
    "revision": "adbbe3501062e611e27b6c455d25e51a"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "e770ee02de821b279d82e0134eb9a60e"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "0f210fdfeb470dd10ae7b280a2d23910"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "79bceba72f07ded83c6c74014435f208"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "928cc0dd13f53b735a7cb2c073fb11b1"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b05aceced12c18b0ad8bd05a1ed746fd"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "00426fef99a5ba4a4643c5effef72254"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "b0c529995941c2e5916709d7ad8a1728"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "de4ecd5aea8b98182d5c78d73178f8c3"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "13424cc62f59a0ae672a8e3b6f6a679c"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f366978142474f8262d17c6f3df719ee"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "9429f7de72a46990af6520a459cd3463"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "ac2f4737eaa4d96bda9dbcc73dd3d439"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "d41bb2cae38e036c732961d09608dbfc"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "744266587dce3fb21b7177848c4d76e0"
  },
  {
    "url": "c/program/index.html",
    "revision": "6d4dbc032588f614ee3556c63d546cd7"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "a44971c25a91a3ee94d79e9422c0c161"
  },
  {
    "url": "categories/index.html",
    "revision": "889997a7af58619a809b4cfbf6a8ce60"
  },
  {
    "url": "figma/index.html",
    "revision": "2e088f47c9e9aadf120f2ac040dbc675"
  },
  {
    "url": "flutter/index.html",
    "revision": "c9bf8685f2e63d56c3531a771cea059b"
  },
  {
    "url": "flutter/point.html",
    "revision": "78bf141ff56096e040f6c820d71afe0c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "335c930055b5ec2fa8b69a77b4b00559"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "24e20948a27c65238d49a67d81b59161"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "fd193f83129720bea6067280f0588c0a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "388f9e719c76db55176d334b3931649b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0dd845a000ae4a3e4d3a0ddb7fd1660a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ae9ac46aa906da93ac72c309a55fd1f0"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "c826f38beff5ee9d163fb638aa285f8d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "736e85862ecbcd671d90978c4667aec2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5dbf9f176829ba9b07d388c8e7d99705"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "4419f603d4d74fa9d137183697c0bdfa"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5529d7fe1bbf18809bbd8ad3bec68d18"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f2c109dc1855f3a41f18f47c674780b7"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c49793e0a3170da1dcba6a6b5874b849"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "bcadbbacf08918c861f1d9a5585e02b6"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "1c9752b03472efd643d56db8a0e90aae"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1dde6e1ccdb64b1ae1769715aaf59485"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "eeafd0a4f1d2382a622e452e0681817a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "33d0b39356b73fcd46cbfb1452fe03f4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "0c246e69be954a469ccab0d184d2aa28"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "257d84150dded426e9e6639b4aa0789f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "801903d457aa975f707640fa96f0420b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fd584b73853f4528028bb013eb16aa9c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "730006a27457d97a5990fa311bf7ac70"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "42a32a7d962d41e9f7d906300fa63699"
  },
  {
    "url": "haskell/index.html",
    "revision": "9654297f815c33da6ba9e5ee57d6df8e"
  },
  {
    "url": "index.html",
    "revision": "d68a477cce841210d0057d57121269a6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ad437e8e2ffc2cb1d27d2b1c0c72600b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ab647f07ad4ce528e30f432a744e5503"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "781794f042ca576d2346069656578489"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "52b337a386b3163af0383918c5833d13"
  },
  {
    "url": "python/index.html",
    "revision": "034ab76cb3b6dc8067313fb2afdca7e1"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "05084bfad5977c681e7792829934e7df"
  },
  {
    "url": "swift/better/available.html",
    "revision": "9cebad85ff42d7abcf7dc682bacf6097"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "eb481f4e2b6bdcd466e9965f8cbb29e5"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fea2847b16ec252aba12bedcdb806eba"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1aa13d12c153c4e9666200bddf7fe927"
  },
  {
    "url": "swift/better/di.html",
    "revision": "735e9f8d76cc303bb288eb24572fe0d5"
  },
  {
    "url": "swift/better/index.html",
    "revision": "096084d58c74f38f43b2f8d64bc520e2"
  },
  {
    "url": "swift/better/last.html",
    "revision": "6f640b2a7e0f0f97396b95671f1237bf"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "d51884616072e9e5c946c22caff39620"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "36ae80011d8d3b2f47d6a6b37b9b863f"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "990636c42c20d018501d6913c9fa948e"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "8500a8c5a94883063a3733052ea946be"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "98c1e08ea607b50c85287d85ab6be111"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e83aac8296c6bf7c07c1397b7062b4c2"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "31b27d60cdd9ef8113ae48387b3c33c0"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "62a79e64d5bb8ad967de34801f4ddd08"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9ed40dfcd823708d24194002b2b94450"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "e96782735fb62f847f01af74dcc4eb2b"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "010b5af5d472fed00ca099628b90a776"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7a94321c7782794bb99ba40cf67c7732"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "8d89e58b925f639ffd94e22253a74fd8"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e876f746af90aef433ac85f219aa82d6"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a8f28177ef395d7feaeb723299f43743"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "f93dfd65f97c0a2d3898c157c5388001"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "31139557fd54c226e53f75f57addd1df"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "88ac06c309a68b2e278d2629aa34dc0e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "fe29576204348c3adc4e8559b95c3ac2"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "1ad220894ffedbb43263bb216521363d"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "eca45d863a71b5a1f0e1eeba9a5fcfbd"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5e7cec10be8cbd003789ab5757642bee"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f2ce36a31fff63fa276016f4024596dd"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "685fd19f344fcd8c8cc4da01164f3e3d"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b3b188bba98800acaf541ba6f9b8486e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "ef84922c928786c87bb621d3122661e1"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c01da44a345d5863d71c563e4700db3b"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "d1b0f4de2013de8c0171f363d7e1e1e3"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "3b19b035e005c636b70e25a43f01be85"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "74855425cba9481fce54365313f360a4"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "d8948d6127d82d4f064604928619e813"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "ffe84d85a647507411f135adf21355ec"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a495516c615e193305769b474b37d066"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "a6b648a82173a4b1e2fa61397a6c4ae2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f344403590b0d1552e548776a4417609"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "031160e733c11aa94910f80d8aebe811"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "78c7e8e720f39fe3fc4987ceacd7e4a5"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6d453e8e05987bcac79ac8e0521a5509"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e3710b450c59f8fe862311d0c0bf59f8"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "90562530c1d0a18d172c6ecc69b89c5d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "74b853e9f73187261fd1103262330ae8"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "7febd18d519be632ec78a34d4d1d8090"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "1a0291795a5bc93f7111351f293b24d0"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "f75f7bfa34759d1de748006b5070f9ef"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "5a6d4c0764d39b8c4d91353ea93562e2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "afb11ee6c3d9f855edadfdf5e6a90950"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "58afde9964ff316b774a30b6f320cc4b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "7724f1f493cb8b7a4a0f5287f7ec282c"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6f795b21fd7eb0d7e5a0a4be3dabac2b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "f553e85ecbf50da2cc414c59ceb13e3d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "11592626ba773a34e3845b130cf996c6"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "60542f28f1b6ba60cf83aee956096fd9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "723154a284a886a0cb98995fe42f158e"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "c8d31707ee31cf8fb0531ff82fcc91c5"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b12f38308bbe8695900af590a44cbd25"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "d7bdb5d1e829309531ddbe17561bbfb1"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "404c71688fcf70d569ddb48c9d4d73ed"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "44ef27e05a8f288d99b493d5fdfd5b0d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1a12cbb7a6e9f76a5b04a4f5c1986990"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "412ec1dff8ccfea6594857ce6357deb7"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "911c26543f2995db957770ef8c40534a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "ff7d682cfb792a44d84ce346a26e5bc6"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "5d1761ec61225374fa2630d735243d68"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1f69f6caa2d0c8aef9a03d2fd38c8417"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "12efd3c8a01aea1a9fa4a9986dd63045"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "e9390941ab35e6d63e2e5f299b4c8ede"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "1629048e5243c7c0681e0a8974f86bb1"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "4c463fc5f8e7df6b85e334e5e3084b71"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "dd23312825aed7fdb1a7d018b57d95bf"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "2358afd22b5a9ff4948847f5fa0379b7"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "c93b73f47595e948df8fdd6273bfd371"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1bfbfe52125cbb8bb5022976b9090e43"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "dfc24f95c65b92dd1ed04138334e7f16"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a163365a16e05d1bf7b8c2a083ff072b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "ee2e4a5997ccaebcb7f1b787ea6b714f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3ed4736460b0b8989078d1680c9f3ac3"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "82c41b05e76e0b089152f2735fa8ab31"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "6afb05ea604afe00b6c01c4750655a7d"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "5261a93de0f74280862840610a802ace"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "6bc6114f306360d6b8c04387f65d350b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "c006d79c69a1e0295de3a6436c67c9e3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "589efa1cbc31f020d6f2c92e1094e138"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4c8b92684d36889caf073392103ad0d6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "200553aa9ecbf91b92f301829f8bffb4"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c7c07016e27baa9c9afad67df4192c4e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ce12c6ff303589b4c1f9a39726b45836"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f4cb59984f3a8b1660569d311d19a1af"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2760092b6db8ea2313e1d7d3eac73ac4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "abcabb6a7751e3e5d6f891587f9003a2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8f8db50720efa5304e95419132dff6ab"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f56033fd012d5f25862b8cb6b8544d3a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "40aa8af81ad1f77508721b8286575058"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "aff15d39c30c42eb05a6db7ec0b348d6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "9cfa9d18802ce0904d712c64259b5b57"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "5fcb98999b44d4a0b8cf7978b6e788b6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e00030b2072330211b245088cc13a124"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ad73023f4b92650caa79c6e42784148e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "32738f99f4b5616370b884a9246bbdf0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "0988093879f714109c60621c43da6f48"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "dbc4ea10614873e698defb23353b525a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "099a804949b221f537aa023c1ef4ae62"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "cac129c010d6f1d5e5237604b9a9e4cd"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "23568eb57340b6e304950b58b2379843"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "885e52e024c3e5e35764a979cd8429ca"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "07b916c3bf37bd29c1003ab45aef5676"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4decef1dde94e1ef33e89d434e83fafa"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "59fd5e792dd7d03b0127c42d381dd01b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "a926b3ee855cbff09db36a2edcf311f5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "606d6fcaa96579d017714de2732fda6d"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c11c838361360ce034d54d0083717ce7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5962ed5f2e7b0f47c3bfaebb6c1f1e9a"
  },
  {
    "url": "tag/index.html",
    "revision": "2d11cf43e90d6bab9f1425ab3d62c300"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5128dd5f10d24ec8f0de03c67c42b777"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7d34bc201a17dfc42f1abe521a14db07"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ebeefed833782cb868316171d651460d"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "51c2bb47428e5831d75cca1fceb3e907"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "687311c219c659af1c40d7209a4ad4c7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "eba69f34b753612197c21ce0697fc14b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "52384c56624e30d645b6098f4823a38a"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "673195d80a5ff6317b2c8833bac3b61d"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "0a34f3805e827247c71b9c3d76b99a81"
  },
  {
    "url": "tag/json/index.html",
    "revision": "beee68dcef5fe7c1c8a25a884998effe"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "c7a0e14a4fe305e4cee0c97e2d8a0404"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a2c98e71bcc80c976e38a3ac0f35d02f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0ce9c3f67058f31309e1c807288ffc3d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d21f22d5afe3e2222746d9026d2306b6"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d42769fdc6a44b49805a2842372ede00"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0be9f361e30cb3c42b78c3ed917db7f9"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "434d9b078869667bcc600530352d28d3"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "a880eb859025f2352e24f4d4a6642d47"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a125304de563c9d1b6ab2075d8ab4844"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b25788c8832a9072a0f864e1a3b214a8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e1db61268eeaae04a41efcd6f8a5c758"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f1af3cb9e76a218b13f5e412e6875596"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1fa534110d4cd51cb6190ecdd29c9edd"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8dc10c3fe639053e6a65eeeb511a3d29"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "39dcbe900541e044fcaf92d59c67052c"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e7b1398e5951200a75e2d00f62bf2d8a"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "bbf6d87a3596f547ce3e44dad34ab1f0"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f8fa90e0feefb85e537711d061c80f32"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "41e631ce6df957f9bbde5f5bac248864"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "d6601ffa7e3bff219e06ee5b494d3b91"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c23eed02c1df1b171ad351ad655081e3"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "d5b4b6e4c5141db8a5e298eb1fb1b7e3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "969342e6c25222fbc2518ef1c6f6ce09"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e2087dd163e9a505f382e77cbafc3d16"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "6880d6ab8f0a65bb26c5fb7677d35103"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ef8e45ee5ec90819ea7835782b960930"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f08f4bb511fb69502569a0804ec99801"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f451c3fb5fd985c7ae80bdd6dd5dc2e5"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7848654dbce2b868cb789b618c35d073"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "bce9faaef4d456d62a9125e0b918cc37"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "fd853048d0e7049561fd943394169789"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "af11a51df4020258b274500503654f99"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ecb49082ffad87389e63dd55b2d16eba"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d8efd1671014205ce39fc56401ed6d07"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "3077e9f3697e9818dc712faba1460855"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "31919ca059b51487a4e1d98b3af44e90"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "88d7e174dd827d05fdbbd5b80be5e5c4"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "58d879786cc9ba6d2426e4fe0f4aa050"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2770fb246a7b8f35459dbb5228f62353"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ae7772002c1799402b54fd06eda2dcb4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d48c5529bf1b36dd360cdb45878b7626"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1ecaec22f121718de0adbb14c8a85034"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3566adcf4937c86494baf95c2ca45d1e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "de71e0842b0ac9a9f3c37cd9174f52fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "3e3e85f1c7385afe10785b886ce637cb"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "65a82c7bb9397c34f736c0f6de5c0b98"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "cf6c7ebdc4b9c34eccbb4b2b9e81f794"
  },
  {
    "url": "tools/git/index.html",
    "revision": "887e80eda35b0e921542358c9749fca0"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "aac8c435d97ae5c4018bce184314568c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "504b4d226d47b7bba4482eb9eaadbd57"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c163f692d4e2a54d860101c9504baa82"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "20746cde207994fc051d9de03d2b132f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a104bf8a5fb7008bb5424aedcd7c466e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4a2a3b7e2228a664150c285299eacde8"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "e398e946409caa932a941f892fa07646"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7cceed3d0f425ac07573b9048e7b15b0"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "61206edf437f61617c1f8ea625fad362"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "39e6536aea01e1e9fe61578685b0b4e1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "968826536854bd5fc62025d1afbfc023"
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
