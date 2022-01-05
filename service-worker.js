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
    "revision": "e149c0a27ee78bbafbcd36451ab0bc56"
  },
  {
    "url": "about/app/index.html",
    "revision": "b85caee45a2719ab4da7a74a872dc022"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "5b99420f6c446abae035ff7f359dec82"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "91149f389119705f7fea5248a7ef149b"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "1c875aee7890d89ef21ed5f4fd03aee2"
  },
  {
    "url": "about/index/index.html",
    "revision": "bbde12773db91d142caca8755a0b2647"
  },
  {
    "url": "ai/index.html",
    "revision": "b3929da7fa2c9cf9343d1e661372c4cf"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a7c53dbc2b924b24956cd466e093900a"
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
    "url": "assets/js/1.16c5d5b7.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.c27e4566.js",
    "revision": "ba891b9692e9789c31f2b060501fbde3"
  },
  {
    "url": "assets/js/101.96cd7483.js",
    "revision": "192af620883110c9fee4f7466924b043"
  },
  {
    "url": "assets/js/102.9a5ff19b.js",
    "revision": "267e81586e9ea101c7269c70402a5b86"
  },
  {
    "url": "assets/js/103.854a39c0.js",
    "revision": "14aa2f54bcccf3c1d75295f2fb1324e7"
  },
  {
    "url": "assets/js/104.ec2f51f6.js",
    "revision": "b4d32b42f9c4ffa3caf3dc66af78c371"
  },
  {
    "url": "assets/js/105.f15eab3c.js",
    "revision": "858c56ed83f11e5d26bb2aa7cdd3c6dc"
  },
  {
    "url": "assets/js/106.50075d87.js",
    "revision": "fe7e68decc901c18e6a6fe54069916b6"
  },
  {
    "url": "assets/js/107.a9791517.js",
    "revision": "127dad4659bf5b6b83a39981b56c3a39"
  },
  {
    "url": "assets/js/108.58dd674f.js",
    "revision": "feca1dbc9a3768974f95662425d13457"
  },
  {
    "url": "assets/js/109.a0f158d9.js",
    "revision": "05bcfa18412e4da97c41c9c0c9d9995c"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.474ae92f.js",
    "revision": "8cf3efcc99f2eff99e023b56d0480b24"
  },
  {
    "url": "assets/js/111.809c13c0.js",
    "revision": "e73ae34e22b77e8f0824a68b60a0ee7e"
  },
  {
    "url": "assets/js/112.b150e256.js",
    "revision": "491664f21c0b9c31d04ce4abb4267479"
  },
  {
    "url": "assets/js/113.8ee35bae.js",
    "revision": "63c52b411880705bbeecad38115b0ed8"
  },
  {
    "url": "assets/js/114.72140725.js",
    "revision": "25dce0e7df119436154633bdf9bf1a3d"
  },
  {
    "url": "assets/js/115.d3a92ecc.js",
    "revision": "95d774a0b6fc26b16e462b5cca0e62e5"
  },
  {
    "url": "assets/js/116.9389806a.js",
    "revision": "77ea97983a599ba84e6f1b9d45663acc"
  },
  {
    "url": "assets/js/117.583e1f0e.js",
    "revision": "879e6259fadf77dbd9f12014e9a46aa2"
  },
  {
    "url": "assets/js/118.3f51727a.js",
    "revision": "b1cd52024e479373f019342c6ca0c14c"
  },
  {
    "url": "assets/js/119.597c7e24.js",
    "revision": "79b7f76d97d5fbcab4f3960fa5b38f85"
  },
  {
    "url": "assets/js/12.749f4d86.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.c947be35.js",
    "revision": "ec7905fa27c155ef114dcb68adff0a63"
  },
  {
    "url": "assets/js/121.6bc984c2.js",
    "revision": "cf2924f53abf24324f9bf707a79cbb46"
  },
  {
    "url": "assets/js/122.3544b565.js",
    "revision": "b4e6b7f3114129296a4b11cb044a9616"
  },
  {
    "url": "assets/js/123.cd0ad242.js",
    "revision": "a01523dbc1d09dcc1b4e1065a91f7621"
  },
  {
    "url": "assets/js/124.c3d657af.js",
    "revision": "0321f53a991b215c0e26cfce9af37ff9"
  },
  {
    "url": "assets/js/125.ecbdee50.js",
    "revision": "7f61499ef47fc6a9f8522ebb03144bdd"
  },
  {
    "url": "assets/js/126.188b1d79.js",
    "revision": "78c4c8ce99ed4861bef8ef81275b0ae7"
  },
  {
    "url": "assets/js/127.edb9d2f5.js",
    "revision": "8e7b4ba37a09a0fa5d9a0a2ec95a1b45"
  },
  {
    "url": "assets/js/128.d14108d1.js",
    "revision": "3cc8643796a17e2fbb152ef4cc9f2b5c"
  },
  {
    "url": "assets/js/129.30e7065c.js",
    "revision": "d01de1b99353023322d496e88bf0fd48"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.32716c1b.js",
    "revision": "c3f6612f07cb15cdcbedd5619dd3ef15"
  },
  {
    "url": "assets/js/131.38271fed.js",
    "revision": "3391362757308bc91cd15b89913d22d7"
  },
  {
    "url": "assets/js/132.759976f3.js",
    "revision": "a9ed75c13d69ae26d0b1eadce8bfc898"
  },
  {
    "url": "assets/js/133.f6a841de.js",
    "revision": "6883b25139124cde115246d9a9529d4f"
  },
  {
    "url": "assets/js/134.607ad70e.js",
    "revision": "de7c34adf122d78711394a7952c1031d"
  },
  {
    "url": "assets/js/135.ac0a5e42.js",
    "revision": "536ce8e0d98f4cbae93c5fc35ad7358f"
  },
  {
    "url": "assets/js/136.ce801afd.js",
    "revision": "52ee69854b452de25f3fbf9674928108"
  },
  {
    "url": "assets/js/137.e7da1ce3.js",
    "revision": "d68e290bc4ed016237af75eb5b94c573"
  },
  {
    "url": "assets/js/138.2a88d1f9.js",
    "revision": "006c38c8170e295a6572341170f978f6"
  },
  {
    "url": "assets/js/139.748bed21.js",
    "revision": "12bceb1b5af49ecf33351003b4abac76"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.2b7720c8.js",
    "revision": "44faba60255003b10976cfffa3ee4033"
  },
  {
    "url": "assets/js/141.5e256ff4.js",
    "revision": "b14112312ef6b1328da351fc3469ed04"
  },
  {
    "url": "assets/js/142.e58cabf7.js",
    "revision": "34f4270d42e77828b3ec1aa2a8962d98"
  },
  {
    "url": "assets/js/143.4bfbaa00.js",
    "revision": "598389011dfbf5a4b80dc6e7d8986061"
  },
  {
    "url": "assets/js/144.f7dc133e.js",
    "revision": "6733fe78ca1c594ce4938e67f2f39360"
  },
  {
    "url": "assets/js/145.98c0546e.js",
    "revision": "1cc477fbde74efd38cb36ad919ef4815"
  },
  {
    "url": "assets/js/146.a49dc937.js",
    "revision": "d25d196b131f3a0ec6797a50e679abe9"
  },
  {
    "url": "assets/js/147.262218fa.js",
    "revision": "50809096b863ec0c94334a4a26162777"
  },
  {
    "url": "assets/js/148.68c5c63a.js",
    "revision": "8a3dc1f162f03c78f598d0fc5ba53db2"
  },
  {
    "url": "assets/js/149.c4793c73.js",
    "revision": "9afefa6f31f0c410d15209189804706c"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.7191388f.js",
    "revision": "807182ce8720156a089e6f7cd7a475e2"
  },
  {
    "url": "assets/js/151.4b9c8f05.js",
    "revision": "d88fe4b70343e731816eeb23fc6ce6c6"
  },
  {
    "url": "assets/js/152.5c56827e.js",
    "revision": "14f0289b6cd31f821b5ce6f7d9b295fc"
  },
  {
    "url": "assets/js/153.e7649342.js",
    "revision": "50bf2374c9c49200b7ee3defd29bf9b4"
  },
  {
    "url": "assets/js/154.a0554f38.js",
    "revision": "d7ee15d203a2e12359812acdcd25992a"
  },
  {
    "url": "assets/js/155.fe9dcc69.js",
    "revision": "6f57818af1019011ad3ef3eccf3167b2"
  },
  {
    "url": "assets/js/156.f7d861cb.js",
    "revision": "3bb58cd182038e3b3d05fb33ea191532"
  },
  {
    "url": "assets/js/157.c36e64c3.js",
    "revision": "e25f57f447aee98a2d3e6111c81665a4"
  },
  {
    "url": "assets/js/158.2dc90450.js",
    "revision": "021f0de78d30730464ac456d6bba6af6"
  },
  {
    "url": "assets/js/159.16deb99b.js",
    "revision": "835c38132acf44e03e66ca40fb29d90c"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.85aed951.js",
    "revision": "c9b0e52364f2d7fbf1dc19a5fbc470e5"
  },
  {
    "url": "assets/js/161.aac22d76.js",
    "revision": "61d6dbbc95c657c9fb9027a3c8e7f9cc"
  },
  {
    "url": "assets/js/162.53354fd1.js",
    "revision": "c09ba826110d7d9d7470964f174d0b37"
  },
  {
    "url": "assets/js/163.410d88c9.js",
    "revision": "7276bd87f3fe223ab62c3f6732414d9a"
  },
  {
    "url": "assets/js/164.fa504035.js",
    "revision": "bfe9a96ed446abe0e90fcc46ca752ab1"
  },
  {
    "url": "assets/js/165.455173c0.js",
    "revision": "0264d7618393687637eab14f9a434c91"
  },
  {
    "url": "assets/js/166.367eedd6.js",
    "revision": "dd00ee6385414ea0fe21619cc292d128"
  },
  {
    "url": "assets/js/167.81a013e3.js",
    "revision": "2373861cae3492e2ffbac34124db8801"
  },
  {
    "url": "assets/js/168.89c8e8a2.js",
    "revision": "d1353b825f2aba7eb28cca60503dd00d"
  },
  {
    "url": "assets/js/169.e2c2cb3c.js",
    "revision": "8fa1b341e166e8519727873afa6b59e2"
  },
  {
    "url": "assets/js/17.7cc330cb.js",
    "revision": "a9feb5fb3a5ada4385bfbe840f8124ec"
  },
  {
    "url": "assets/js/170.4ea14107.js",
    "revision": "431d6e432751d6a413e0b3c6b1aeebcb"
  },
  {
    "url": "assets/js/171.f7c0a7cb.js",
    "revision": "873c98e862eae5cb9e386def47c1408b"
  },
  {
    "url": "assets/js/172.5ea786bf.js",
    "revision": "56442e2bda4c2f268aed347d687dac6a"
  },
  {
    "url": "assets/js/173.739ba719.js",
    "revision": "d70e0e6b08e5b099bf78e762d1cf9f37"
  },
  {
    "url": "assets/js/174.782ec8da.js",
    "revision": "0d5d650c89abd5caeb43496d5a05cf29"
  },
  {
    "url": "assets/js/175.73887ae7.js",
    "revision": "ef57d4a11f17deed203e48cd73709925"
  },
  {
    "url": "assets/js/176.70a03d25.js",
    "revision": "03d0e0ccbc8a4dcbecffd250a85cb125"
  },
  {
    "url": "assets/js/177.9781061d.js",
    "revision": "e640ee14d2defc3939925a7f56367dd9"
  },
  {
    "url": "assets/js/178.167dcd78.js",
    "revision": "29d51bcd9bc348dfe88b495ee4d7d112"
  },
  {
    "url": "assets/js/179.cbbe638e.js",
    "revision": "88245a69658068f2a1c81299f0a14b70"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.bf20f484.js",
    "revision": "871e71780f28828538c538ee5b7add2a"
  },
  {
    "url": "assets/js/181.4c85e575.js",
    "revision": "255ef7071658a24ac95343ceeb936927"
  },
  {
    "url": "assets/js/182.40cf43a6.js",
    "revision": "6b12e190497d33e778132c44a1e1919d"
  },
  {
    "url": "assets/js/183.e4e48717.js",
    "revision": "6ab57c52ac100eb2d9c41ede65a2922b"
  },
  {
    "url": "assets/js/184.8cad0e17.js",
    "revision": "3ce48ccf2a1d16ea9a7ba721e4a90828"
  },
  {
    "url": "assets/js/185.6cb986c4.js",
    "revision": "1808dac56c52f2e142a8242a27c3a4e1"
  },
  {
    "url": "assets/js/186.610009ab.js",
    "revision": "f741f2a35d7452baf4d951a0b91a005a"
  },
  {
    "url": "assets/js/187.fac32c83.js",
    "revision": "8187ea1dd1982f9275aadddc5a510f20"
  },
  {
    "url": "assets/js/188.15274fe8.js",
    "revision": "ecbe430e4cdd5f18e5293a88e0551c49"
  },
  {
    "url": "assets/js/189.766f3ee1.js",
    "revision": "f7fc774f9e0ab80b8a16ca097a66244e"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.ea57e0b3.js",
    "revision": "e4a8ddbdb4f627f0a7a7d05c5f07b0a5"
  },
  {
    "url": "assets/js/191.0ae54120.js",
    "revision": "ded6350fdab17e769e924cade81850fa"
  },
  {
    "url": "assets/js/192.09cd2766.js",
    "revision": "6cc4ba907a79972dde305c759b07cd4c"
  },
  {
    "url": "assets/js/193.3c4f2a82.js",
    "revision": "df7b333291baf72002f3c45d2ce12147"
  },
  {
    "url": "assets/js/194.58b14ae0.js",
    "revision": "f6a6436b2c3a6ea3cc90fcdaab44c8bf"
  },
  {
    "url": "assets/js/195.3689bd14.js",
    "revision": "217836a399d8b3e17e0e055db4834fda"
  },
  {
    "url": "assets/js/196.4d604fb1.js",
    "revision": "a6128b1c7d5481f0c00bf18cc13d6959"
  },
  {
    "url": "assets/js/197.d909b75c.js",
    "revision": "114c423cb64f253064739561740d117c"
  },
  {
    "url": "assets/js/198.a4e47401.js",
    "revision": "c57591ae64f6e31857d9a19a05060c57"
  },
  {
    "url": "assets/js/199.7b907b02.js",
    "revision": "f524ce989559b917f8d68deb7fd2fac6"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.729d7555.js",
    "revision": "8cad05937657b496dbb5533dfff8dc1a"
  },
  {
    "url": "assets/js/201.f98f050f.js",
    "revision": "acf270139739f39fd9f656dda32876d1"
  },
  {
    "url": "assets/js/202.c3c4bbcd.js",
    "revision": "17b0035bcf675b316d6004c94066d460"
  },
  {
    "url": "assets/js/203.961fe390.js",
    "revision": "9777a10f5e40cba8a64136a24c2c1a1f"
  },
  {
    "url": "assets/js/204.9e46e1df.js",
    "revision": "ee6bbd3206f4204d40e736ce4a1ab102"
  },
  {
    "url": "assets/js/205.09d1bbec.js",
    "revision": "f4c591a1939d7947ccd78d08ab583351"
  },
  {
    "url": "assets/js/206.c5cab401.js",
    "revision": "559d0ea1f73974ef12872d97e01eeb9e"
  },
  {
    "url": "assets/js/207.55176449.js",
    "revision": "34e5179f56dc2eb2d2e10c12d545c6a0"
  },
  {
    "url": "assets/js/208.0ccab48d.js",
    "revision": "2ed9284cf035a4dbc626e9542e996d14"
  },
  {
    "url": "assets/js/209.9b846da1.js",
    "revision": "39d19c9593d9b1ef8522d031e734816a"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.dc982382.js",
    "revision": "10d96b9a3968d8d0645bfe84220e1df8"
  },
  {
    "url": "assets/js/211.d7e6fe70.js",
    "revision": "14931c07a42ef37a16781ebc18e0f01f"
  },
  {
    "url": "assets/js/212.e8c04c93.js",
    "revision": "9901589406a42abbca699a92f576376a"
  },
  {
    "url": "assets/js/213.7448fe4b.js",
    "revision": "5b54382cd4fae99e9ba6492999ef2ffd"
  },
  {
    "url": "assets/js/214.7ce5a7c3.js",
    "revision": "9a087298660d0ec7d0fd64f4c426fd6d"
  },
  {
    "url": "assets/js/215.be802c40.js",
    "revision": "0c8593bee6ba49b924892e70cde3f251"
  },
  {
    "url": "assets/js/216.0cc7e1f1.js",
    "revision": "2f732a6d727d123470d0058d21a6835b"
  },
  {
    "url": "assets/js/217.d2b96f33.js",
    "revision": "024278925b3455f8681802a79c31fb94"
  },
  {
    "url": "assets/js/218.101b1bc3.js",
    "revision": "df3b370e224bb9172fe6bd8ad865e90f"
  },
  {
    "url": "assets/js/219.94549adc.js",
    "revision": "06c609e0821456ce810309da6c49f0a9"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.88a17906.js",
    "revision": "73e193055dda1218b7c8f2fd6010f9f4"
  },
  {
    "url": "assets/js/221.fdf22470.js",
    "revision": "b06697bae76e9a7cbbcf19b653ae7b5b"
  },
  {
    "url": "assets/js/222.0e9dec1c.js",
    "revision": "bd7a462e7e03116965ef150339b4f494"
  },
  {
    "url": "assets/js/223.aacfde5c.js",
    "revision": "714b46b15237d2bd047057cf64f093be"
  },
  {
    "url": "assets/js/224.260c93cf.js",
    "revision": "9f9ca8be7f0a78bba65918ae2f9f6b3e"
  },
  {
    "url": "assets/js/225.344930e9.js",
    "revision": "8cc136705378329f6533c322a3f42eef"
  },
  {
    "url": "assets/js/226.85320277.js",
    "revision": "5c8a7a476b76ad31f56d56d86ca5ad67"
  },
  {
    "url": "assets/js/227.59d0728b.js",
    "revision": "43f26e309d7f622c636c09a4f23de8c1"
  },
  {
    "url": "assets/js/228.064bf432.js",
    "revision": "ff78dd4743556d65f4e7eb82aab2bbc4"
  },
  {
    "url": "assets/js/229.d60fe22f.js",
    "revision": "1c0a98c761bfe225d6fcbb4528ae5849"
  },
  {
    "url": "assets/js/23.a2e14971.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/230.950e3e8d.js",
    "revision": "12db00b88b8a773cd7b6ce0ef90a1bbf"
  },
  {
    "url": "assets/js/231.9911e138.js",
    "revision": "c020b65ac42a91d0199c80c1cdd89733"
  },
  {
    "url": "assets/js/232.feeb0566.js",
    "revision": "d3b767978e74c6c3dffb7cc7889078e8"
  },
  {
    "url": "assets/js/233.a095f063.js",
    "revision": "16fd079e995b5d90ccabb0b9a7f3fbb6"
  },
  {
    "url": "assets/js/234.2ec44e62.js",
    "revision": "45242da15c4777c4c674576726dba936"
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
    "url": "assets/js/3.b4d5b2d1.js",
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
    "url": "assets/js/39.a03f9949.js",
    "revision": "b6543217c05898907e969cf7baca8095"
  },
  {
    "url": "assets/js/4.e6ba93f9.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.6026ae61.js",
    "revision": "7b8ab3f8f4a2d2af74584b566a999ef4"
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
    "url": "assets/js/5.2679ebfe.js",
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
    "url": "assets/js/58.37ef0841.js",
    "revision": "0498c2e0b6df86d6b7bac8c2b175885e"
  },
  {
    "url": "assets/js/59.db4774c9.js",
    "revision": "cac6d5a0e21623c817ec0975c38af5c3"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.3f21c124.js",
    "revision": "e70ac1da6c7ead6ad343ff3eda95e978"
  },
  {
    "url": "assets/js/61.c5f9e5bb.js",
    "revision": "929d5bccee5c29cc2593ee4da4fc6443"
  },
  {
    "url": "assets/js/62.e3c606e0.js",
    "revision": "a4d007b950f2f5d756064bd650ddb9db"
  },
  {
    "url": "assets/js/63.5533fa5f.js",
    "revision": "5c241ccf4e9b9b91aa5fd2f023d29910"
  },
  {
    "url": "assets/js/64.3ddb1082.js",
    "revision": "afcf511a8db0c45955cfea5690dea98a"
  },
  {
    "url": "assets/js/65.eef1ed93.js",
    "revision": "443ea2889b5a29ead3c93b9618c87072"
  },
  {
    "url": "assets/js/66.da83f998.js",
    "revision": "283385624d86ecb92d17f613900461c4"
  },
  {
    "url": "assets/js/67.fb1ce87b.js",
    "revision": "a6f976a36f181095054d300a1e965063"
  },
  {
    "url": "assets/js/68.36a855b9.js",
    "revision": "206ad708defd774b8f35c5a32773fd67"
  },
  {
    "url": "assets/js/69.9f3e0747.js",
    "revision": "b748e817729a435846a8a76d93a0d3fd"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.f49dea5c.js",
    "revision": "6be44178b3a6f5643018d8aba6e1f8af"
  },
  {
    "url": "assets/js/71.356f7d88.js",
    "revision": "8d5e4748a23a97754061159801325ec5"
  },
  {
    "url": "assets/js/72.de3a044f.js",
    "revision": "ad904b89f69bdd9fd56e359e84552c3b"
  },
  {
    "url": "assets/js/73.5a8f04fa.js",
    "revision": "080358ba9dd82b4c4ab5b355eefec65c"
  },
  {
    "url": "assets/js/74.8ea82ff7.js",
    "revision": "05641ab151d1fd53af133fdb3b6233ca"
  },
  {
    "url": "assets/js/75.f7efb4cd.js",
    "revision": "1594ccd0913e22809eebe93c657280fe"
  },
  {
    "url": "assets/js/76.14cddb32.js",
    "revision": "2ff9c7f1cb0c15f5f46caa97ac4b77f3"
  },
  {
    "url": "assets/js/77.09177b83.js",
    "revision": "7460380c85f0b422a9476b5df5905132"
  },
  {
    "url": "assets/js/78.0167b526.js",
    "revision": "d7628d67ee8b096c14efda136fd41dd0"
  },
  {
    "url": "assets/js/79.31963b6b.js",
    "revision": "66a8c4937942744a4991d5efb61de4d9"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.5ce42c1b.js",
    "revision": "d32d5adaf6b5cf23745464349c00208a"
  },
  {
    "url": "assets/js/81.27195c78.js",
    "revision": "a01a04a77bdc1be9bf08e5bf0aade680"
  },
  {
    "url": "assets/js/82.01950a1c.js",
    "revision": "0b231ed4f26538d7bd93e5776c8ddea9"
  },
  {
    "url": "assets/js/83.2793ec66.js",
    "revision": "651d5c92d551b583c64e0ad0b81eb357"
  },
  {
    "url": "assets/js/84.b203ed0b.js",
    "revision": "32742d56897645a4894af943144c274d"
  },
  {
    "url": "assets/js/85.f48fd335.js",
    "revision": "a76b61b88366d50de67341e4e65e4f5b"
  },
  {
    "url": "assets/js/86.e0bd01db.js",
    "revision": "d2b16ea58666d0945ac8cffe0ebb155b"
  },
  {
    "url": "assets/js/87.24e5c0d0.js",
    "revision": "85e452548a0105cff9f5266e8261c7ae"
  },
  {
    "url": "assets/js/88.3536ea46.js",
    "revision": "a59ef3d579b1416640f34c25362924c4"
  },
  {
    "url": "assets/js/89.18a4054e.js",
    "revision": "c547262273f02c9f0eeb28dc7de2a609"
  },
  {
    "url": "assets/js/9.ed1ae1e1.js",
    "revision": "a6b356c9d66beea979351c0faa815695"
  },
  {
    "url": "assets/js/90.ab536da3.js",
    "revision": "7c1f334a8b617b700efd7a944dddb42b"
  },
  {
    "url": "assets/js/91.393dd77b.js",
    "revision": "7b9818c14da353f2a1b84ab0481b0567"
  },
  {
    "url": "assets/js/92.ec2d5358.js",
    "revision": "a3ea425f9758c34ed7d8c1a9d1f52846"
  },
  {
    "url": "assets/js/93.1bd4a2cc.js",
    "revision": "f229f483339ababda10a98c89a81e7da"
  },
  {
    "url": "assets/js/94.2f1f4f7d.js",
    "revision": "93fe37375ee8fbdbde80fab976fc7c4a"
  },
  {
    "url": "assets/js/95.1844f2f2.js",
    "revision": "7461d68205f18c6a9b9ccb4e5905bc72"
  },
  {
    "url": "assets/js/96.d19b32ea.js",
    "revision": "799aef732d842f659579cc7e99cd44d7"
  },
  {
    "url": "assets/js/97.d042847c.js",
    "revision": "a98e21a2f347dcd7276608892e95f86a"
  },
  {
    "url": "assets/js/98.d9b8605a.js",
    "revision": "d22415fb22294146f98d7eec2c9702aa"
  },
  {
    "url": "assets/js/99.349ca994.js",
    "revision": "3cdbcb5ae423d21b1e5fd8cb03f23c32"
  },
  {
    "url": "assets/js/app.4da108e1.js",
    "revision": "d7fecc366d7ff4ebbefef034dd98f3e9"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "4df664e569294e07b98a6988324cfb06"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "dfa075c353518a0477f8a2328a482776"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9a2af3d5d767e523aacbe95790cec681"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "88ca2bdb1f1a5e93b71649f873fba092"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "255085ad92d41f25fb84b9709e57bb06"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "8c637f65daf5be19d64ebe2316b44b57"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4d9d95156dc93210fcff2d25aac49b7b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e5b387d452bf27ad74fb141bf1edb7ec"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "14b088429f36415caa2582f1cbf28ed9"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a95e18a2970182705cf27bf75cc8f692"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "dbe1f71d526da3a3c63daf87bd47ddb2"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "a2eddc841521355ce2f665c8b25e108a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "b6ce417fbacf17e5df9adf38043ce360"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "58b85ba426fac2a0ad96f93dc2fe8d41"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "432316d7d78d7fa7c40a71b2c4f31238"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c91cd1128c514cd9f5c8920b882ab99f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "2bcc4e587b4653ef70c4c6f53851b3ae"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "936eba1f91fb60391d445f868d9cd2b0"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "3001a6ed47cf54c2a546f340ade596d6"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7981043f2734b854f260f84fc2a38f55"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "23d3d5a8441276885094e475501abac8"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "ff8f8052fd5ecfddc0a5d09adc1eba68"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "957916ddc4b2ba9640ad5efad8cf2a09"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "f0daa068319402751e98fdf40fec0801"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "942b50d1df1ed6b608eb4a0677afc7fd"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "47d7fc6b34ac1a10b0d7dd82a1bea069"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3f98f9044440b13c46bfae8bce882b99"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "e047fb30b69c608daae475bf89a602fa"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "43bda151061ad8e8a5ae83c953aa1be8"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3c47fb8ef5e42bc399899561bd21e8f8"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "dd5c8f48bf7b93c8df3d143cb3360c86"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "667bdcd86bd804a9299b815da3ca6d98"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "590d1a98cd087bd2c431b2454153bc02"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a565c9b1dac6ad0d93b894fb3a8ece15"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "524429acf3b85c09ca2b1c0f751d7a33"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "403a8114e1696bdd120800def72a41e2"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "00703286fe51a9b3a2c5385702932753"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e7b2aa5dac5e9e3235a5a99a655d564c"
  },
  {
    "url": "basis/index/index.html",
    "revision": "30b291fd1bf0eafb451803071835c822"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f9c4f15c0988b8c29069c3760bcadd20"
  },
  {
    "url": "book/index.html",
    "revision": "a5d7e7ff7b96984ad0fd1986db508078"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "aab155938d94eea501e1f91b73cfe96f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "776bf39b8be47287d2ba4aaa17c40232"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "0d0664a34c90dec0ea8f6034eb020168"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e5c11cbd967aa753361fdce7d1abd6ec"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "147534d66a708d51da9da88d0612574a"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "034c2ba239bb5badc47138783f6029d7"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "e0232ffca980f9cad355327e0c50b5f3"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8256aeb34c8c52ea09380206e05d3933"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "2a765c984db072bfac28072ac7f99291"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "88fe607fa0b3eef2183dda1be3efe4a0"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "2ea92f3c6fa5248a6ef1d2fc8dcb7af8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "370c42d65a8eeb80a56efedac1f95613"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "257499f0c148f666d2a076d27c394256"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b2e61357bbc190223f15622486e627cd"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "bc3225bf869e99f85c2a4d9e6d40afeb"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "a2f574197c4367fe5f3dcecba1f68a48"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "855e68d3de08abc3832811a7ef91aaac"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "a8ed1ef397568ff454a0fb3d8b48dc5d"
  },
  {
    "url": "c/program/index.html",
    "revision": "8ae4efa2035566c08a57e257fe20ce37"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "112d23044822335f7085eaa6aca50289"
  },
  {
    "url": "categories/index.html",
    "revision": "ba9940ae5f37abe27dd185a5281e2a82"
  },
  {
    "url": "figma/index.html",
    "revision": "964be1fb39ff3c733f9183efbb658a64"
  },
  {
    "url": "flutter/index.html",
    "revision": "57bd252b63e53763b7336e5282f76cf7"
  },
  {
    "url": "flutter/point.html",
    "revision": "34f11ad54aeec15f21e71d730d813518"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "95c442558d9c83c56d2b8653e1a8abc1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a2ab09ef13a888342e36543c38e19b66"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "548ab4ebcc602fcc103be8e90b2ecaa1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "610050c083bd3b971d1b3e10b80a1877"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "aa54f6f84d97cb89bcc0d9b20e17d147"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "fa0f585abde4355aa1d3f1154c91409e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "145b0a512a73416ebe724ad6dba69d0b"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "50126769fc91e489197ee7cb59082f1d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "678da755b24f329411c33dd1b2bac112"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d8854c67a76f128375e401042f9fa024"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "047f17401111e1d62a8155195722fa6d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "aa8f5f011b9e73f561aeceaf64ee09da"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "dc5482c9b9e308f0c7468fb0c35cb48a"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "2ac5288e7c673426684c625a1a7fa4c8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f17052569fae77555b64111a3adf893b"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "e54d935c5aea05fa4354a9e7593d19e7"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "048a047c4d0d7c2cbb1710763c8fb20f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3541414cf2168479395cecc8fda5fcdf"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "a5e6cd1ce340195cc50acd9d49681158"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5a623829493e1f0b352c74c5f35e7b69"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "ce4681fc2d5f5723b722a2c7f2dcaa19"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fa070223bf6aa88d393c9f320c04b691"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7093c9bb0be50c12af5fa362a029d44a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7d2d09cae3738f63c63a8771358f7630"
  },
  {
    "url": "haskell/index.html",
    "revision": "b22c0b493c9b89d979e2573fb57845bf"
  },
  {
    "url": "index.html",
    "revision": "d4fe282618c84e672a2d0ea710accad3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4e4318e088c64885f3636fab694b10b0"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8ed3451bcfc5118f987f03bfa9bc475a"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "c59f9ec97d264f230a4f7032da47cca4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e8424d25f1ab0f23a8fcb947af3b94ab"
  },
  {
    "url": "python/index.html",
    "revision": "43aa39f75f17eb5a0a712688f8b4859c"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "b7547b8703ae544c2ff75209ee16c532"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3d5a4b8804bca71d6639e81f4d17c3b9"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c042527bfd009c35e7221272b59640ed"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "788c3755bed2626adcd4ebdce35241df"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "138283d320953487ea07fae6b846a639"
  },
  {
    "url": "swift/better/di.html",
    "revision": "43bb662b792f30ff1d6eff822f9a006e"
  },
  {
    "url": "swift/better/index.html",
    "revision": "2bf7cdf448be795536bca477d3c23d49"
  },
  {
    "url": "swift/better/last.html",
    "revision": "53a8bd23ab98a81c0d7b8730633e6530"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2b703693bd22f8fe219de87a7d1699ce"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "85fe47b12a2221dfd476725b6aa7bbe0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "7ff7465fa63c5f1c1c7e3ed8d21c1827"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "29a1bbc4e49cdcb9e5e480ac25a14cfa"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "487fbe8a6adaeb328db97e566bc626dd"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "318880e87c50fbbd75446e54b9f42cf2"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "0e0ba33d5e1774c59abba99ac6c2e782"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3e96ba809b12a34302b6b7de5a23d77a"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "94a245106506ae2aaac9ac9ef64ab052"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "bed0279abb83170ecfa4d8b54e22fdcd"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7b3352121851b509a14a77a42fc32f85"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "8f341728d059ea282f346be70018e13e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "293b1bb5eca1cc7d6e08c3878c6c6f31"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "72ff15744ba88ca5c1d4c230e2bda813"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ece00f06619472819c935c15b969e17b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b3e58cb782c8a0fe793a5a9d1bb7fab5"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "03df31ca3ada6c889923355ad2b5dc74"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "6a67094f82f0dbe79add7f9c66df6002"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "94db1d14b06f4167dbc845cfe2cb208b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9997cb85f0cf0625f5c58fe0b3d6305e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "531ba11725f6d54dfdbf637967491949"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "98fc5b28d0a9512978d5f7040744b3e0"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "463ac67588b9260a0925f83f1401d58f"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "a910eef955f134d6c4f6faea146a2403"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "20b553a17e44feb0ecfabe4217c42434"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "aa9042303a809169654a02825192710e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "ca844535988d10207188e1124ff2fc96"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "416e09346d2292baddc865c0a5966892"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "fe379ade9636ce9cb2a08b44d2aaac34"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "5d12f429f4a147337b36adc8290e5fca"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e20d976abad2c4897df70d8184c01f43"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f562cb47820811ebea00adee50f1c435"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d4b795ce66a1e5cc43ddcf11e4413a0b"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "08a5cc89af761b92ffba4769bd507d09"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "59aaaf702509da057b885edff686f7b3"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "3c2043e6457c9049c61420a8e409e858"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "a91336ba36b1232447d5102168bdac16"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "d3773e54f2f5662381eeb08b3e5ae90f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "8a52f199e27542d748e63110e02220a2"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "5aaf30b1dafbb9ebfce0f691913db11c"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "18998e40afa1dd25a7fff529ada61f77"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "9e9824b6311650f9ac701ad2140b4111"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "17433818322aa9f158671b893abc4d02"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "7ca948b2f51c1bca043d5f320a12af54"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "90ca2ea50e50bc603f300b05f2e9bc27"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "b4c6877f568fbb95e48e170cb58f7fa2"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8da2cb94e9f92efb892e8e636066c05b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "0fc5d24567d42ba7352cb3de23ef1df2"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f3e333698fa2345236e062d136f85860"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "8f6a58baabd242fbe8a7c4cd9a31fc32"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "5616a60a0330abb62f0775dec4a65cf3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "ba6e21b1f960c6b9bbf4165375535644"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "2804561449c7ee1e112794e2884f5405"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "55894390b835b60fb5e9ff542e6a7eb1"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2c71f2718a9185e46f6e5a78e6bc0360"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "951ed485b14d05354f78f4bc698e6c8a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "ec087d61cea9f7b52642e1942482797c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "b7c68fae4d057c5f041fc3e19eb520c3"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "99490150a67871f1b854eebfc1678d4a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "898666d924215098bf2a7bc6ea1c553d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0f8f04459114a26824c8d0e111154c3f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "1db28ad337c5e1e5bd16c571fedeb17d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "8eddc5a341ca167fcade9420540f2d4d"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "9585a5abcc12f024eb663444bb6d01c9"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "6855aaa16cfb798573abff0c808aadad"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a58770f30ef127ca01acc176b3d4662e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "1f60b51141403bd6c9f7f5d89d598e13"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "c810f38dde1b6b523d5d777f638c7ff4"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "51f381c2cb1ace6cc93a1ee1ade97c13"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e9e2fa497f6bba4b67ebc6bf460f90bc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "0266fe968695255d771964d5e385ccde"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c3080cf65c4f4a46ac4c843aafb270b7"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "14982f0d3d4d842b3545c4e23c93fd24"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "067beabab4ec222b7b1b3b0ac2a03bf6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "79e7dffa2ca4c3190ab9f106e3ecc381"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b17e0be30062e1f0b936f5d9df4964fe"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "0f1f278ea97fec16a5f65fece6be944e"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "ec01a6e6d2f3e16bcc7f5eda7e2e62da"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "43e328b8a1cc2d056c768201620130f8"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d31f2ca1a9bd25c409fb101f5135247e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2dfe82be0ae5816dbf94097c4eb09abf"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "136ae0070a10e5e11619b57ea5d51395"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4bc59b2a31fac1b2d065e3bd4bc2d101"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9db0963c6779c42ac811ce13f4ee271d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0a75419f5d65c6c56a2d229103360dd9"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7ef39afca846dded223e736093a165b0"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "bf642c7c751f34482d3dd8ffef16a673"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5ca79237b0f2b8936fe5daac36a69810"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5bcc66e76613ff30288cdc9f3416c0e5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f960840db35e5ed741a3dd250d8333a8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "c3ec65ac82caacad3593d614883d0efb"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fa83d935db49900b2c9e64000369289b"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "03ed1f4da25f0f014d451e9b5dcd4fb3"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3795747fe766607ce2702ff938f78b68"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c657f28cf4344958af57ae31f9aa353a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "079e53158cf163a5918528b7f187ac9b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a4b41f62bb50b1a7b80fa9ca38825120"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8e309accda138784dcb60539d4a4049f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "3f4b29e2d0ea5301333796dcebd38b91"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e640d2802b3f53b090975256c2906644"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7a1c8137d2db32649af7e49844714e58"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "588c55be60815a799e6b51c937e19b83"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a72182de890541bc64158319093b09b1"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "33c28175e1172fd436af87bb5436f4a5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c2ecd060e71514c9bc69e979140484af"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "9e3a239f0dc9ecae3598ed92ad02347f"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "29f2c5dafabcb2042480f23e3fc0388a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "47b43d2f3fde07df4cbeac0d8f408640"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d7ae1039b238bb9a091e5101d41b8ded"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fc70c89d1ac1c37374e7767d25aa60a9"
  },
  {
    "url": "tag/index.html",
    "revision": "e32493d4af41554eab77c581f678af15"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4ee5d65c3e8fa52023c431d4b9146be6"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e5af314c43c89b7abceb5818cb4f1feb"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "9d9a3ed984cdfcde17979a36be94213b"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "6948de0d57d2f74d3e1cd369f5261b54"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "81288acb333d9e0ba9b7c5a472bb92f0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "73bf36e70730ebbad97d26a13213f3b7"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "e88afd062469e6323254551135679926"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a1ad72afd49f9f79d647b002bb6cae61"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "bef1b5e612ce7da22f65b040ef94802a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "9dc77ddc2086f4c9823a30cd56880327"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6219b3ce357e38ee55fbc0aea1521ede"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "94c0a30f24b0d1ea5240e341dc617066"
  },
  {
    "url": "tag/python/index.html",
    "revision": "41bf948fa70b8613af7ec8c51ad2a18e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d5575781a988f3a8b5fc9dda98db999e"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "55e766be0a16c5580e4aa8d5e7ec312e"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b1f9c455ea7e9434bce89af6efc9ea67"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "eac8310f54e4da201d92decd7753ba98"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "3cb1962c0022fd0910df0218ee4e68b3"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "27723958e00709a1b9ebb1483511e11a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8888df50bd80f2034636efeaf9bb5d5a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "19fcef76fc1d590aa5d9a16e6f937f2b"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "38b1d58cf21d2457b7aeaf3a0e4bdded"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ee5b47b31a6d085d523cd74ef3f274bc"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "2237cb74d24fecfc67ac5482848c85c6"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b7fb45b7d56e045049e3867ce2603359"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "5c9b402bf061145baf88f465e5d3daf9"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5c15185227b93b32d4090703b1a0abf8"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f372be6c84d09cc7e67bb508d20b45e9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "27544d58444d84012dd0dea0b071520d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9797e76a0a510b4746aeed79e3272753"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "cf30de44c48b72fab7529d3645eafd55"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "90f017615ecf32c16248fb39875168de"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "53e11e708cb6e04670eb1bb9d7f99cbd"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "33f480cc5b0704a4737a5cfdfe33aad3"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "597c9fa2c3b08916658e6bd6d97a6e81"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "03fec31516a3092ce391e495c57cddda"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "d5b8d1ca5600e3d4d4d8aa69d4522cf6"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8b2bfd9839d0fa5fbf6651460d6b6c49"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "37a2c39a3bb7ba7ba3fd083dae9d10c3"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5cc6a0b3b0fa5d8eb578938c0e962b4d"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f6fd412bb067338172ee9e72b133615c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d9298d7f71e9cdbb1d3734ec1a7268ba"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c4de0fa7c3556e2e69801045bad43f68"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a59f34bb3f1f7bd9c26770fbf1a6bbc7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a9bce74dc2ff47e0691e440d6846e2bc"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d80a2b7107a92e125b4ba44401ea1315"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "43bcb00dd51b9e6ce6a9895105101d5e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "0111a8ef66cd2eea4f0adb4bc76d219c"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "32f084772b7dc45b4d87f1f3760885a7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "b21a51dd10d2165fa90cff492dff042a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "13b5208c178e47e6ee9b699c046dbc9b"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5e89ebae4107d919c27cebeacc331fa2"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "85a9e442e108d2a488eab34834df3c29"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "8abeae21749499c4c9597d1b66f73337"
  },
  {
    "url": "timeline/index.html",
    "revision": "d6ddefeee9277ac8565f48c37db93177"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "4d6d46dc5c000e68ea77966d2b68d1f6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8d6919a4cc0d30280f2f3d8ed0f9c535"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8d6ea467ead047177e4c48f63930255a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "bb3262af8ebeed9b919d423373954733"
  },
  {
    "url": "tools/html/index.html",
    "revision": "89bc33c1c2c3d6ae41f0a68d2ed5a1af"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ec08d6d087599c9dfd98dac034534a0c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c739c0533a92a80335dfb30b0105ba49"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "486bc97a77bb704d44bc6f8b6f5997b2"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "244e8db64ca23f6dc45c38cdf5f9ba23"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cd041346403944297a5481d90d963db8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "59d2d701fe2a75d43e7204e9ab1ba47c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "ea1b71c72593be73516aa3eff327f14a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a7f0ca7e0f66fe22ce8ae39e9e2a7831"
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
