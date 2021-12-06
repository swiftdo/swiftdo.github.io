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
    "revision": "c8fd4636b02f7d230882fb76fcb61c15"
  },
  {
    "url": "about/app/index.html",
    "revision": "406ee7adddc5dc1725e90cb2d4d4dfa4"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "6a8de32dc5c84e6c324fc2dccb7b4805"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4d62b720a9b4830c3e76c90dd4ae22ca"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6fc067a419fee7fdedcae222f4a92463"
  },
  {
    "url": "about/index/index.html",
    "revision": "68e9bbcaa2a9f788068e52824f8b0545"
  },
  {
    "url": "ai/index.html",
    "revision": "af92729b79467b3709c67069fd7472c1"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "ababf0834bf4e86ff0a1c06e7da0beea"
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
    "url": "assets/js/100.ad1f2f42.js",
    "revision": "7436ab1bc028219edbae99c8a8c18a97"
  },
  {
    "url": "assets/js/101.e0df4dae.js",
    "revision": "c1180e60610de381171995a1bfe2336b"
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
    "url": "assets/js/105.72b1062a.js",
    "revision": "720eeced3405a0f478c2b1f533f0c50b"
  },
  {
    "url": "assets/js/106.2bb88b5a.js",
    "revision": "b9e17adbe97a171f35ac818446743d36"
  },
  {
    "url": "assets/js/107.cc80c4b9.js",
    "revision": "84df75d591a24aa4d86e3d97df580b6a"
  },
  {
    "url": "assets/js/108.99b217e6.js",
    "revision": "042f8b42ac9c0c584db45f61dc06efe9"
  },
  {
    "url": "assets/js/109.47b8d3f8.js",
    "revision": "a1ba9e3e3526a0a3ac5373f2d16c2449"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.aa4d9862.js",
    "revision": "8dd94389d1e56178316df9aeb19259bc"
  },
  {
    "url": "assets/js/111.f7562f51.js",
    "revision": "c060779f6868e1937f69d62910f4fcac"
  },
  {
    "url": "assets/js/112.69f1bac1.js",
    "revision": "88909cea5bffe5d108f372f230a5feaf"
  },
  {
    "url": "assets/js/113.15081035.js",
    "revision": "28d58dbda4390161ddebd4df671729ec"
  },
  {
    "url": "assets/js/114.30d2dd3b.js",
    "revision": "3cc3f47f68b131d8dd3c58a042f0e9d0"
  },
  {
    "url": "assets/js/115.45a38fcd.js",
    "revision": "aa00ecf720b8146a824aa4d893f0c02b"
  },
  {
    "url": "assets/js/116.245031f9.js",
    "revision": "318c11c1566a6db05c9c216737a214e6"
  },
  {
    "url": "assets/js/117.e4add1aa.js",
    "revision": "8e0ef101fd2ef005e64ab7af43837bef"
  },
  {
    "url": "assets/js/118.395b1245.js",
    "revision": "e9a8877c8342a73eb7177b7084796ee5"
  },
  {
    "url": "assets/js/119.58f7b8a4.js",
    "revision": "401b11dc8cf51abfede7356973af9a86"
  },
  {
    "url": "assets/js/12.b5d2db03.js",
    "revision": "02a8f9a407cb0e94419a522df6e2ee34"
  },
  {
    "url": "assets/js/120.d0c32528.js",
    "revision": "878985506204c57aee1ce1e29ef433e6"
  },
  {
    "url": "assets/js/121.4ffbf873.js",
    "revision": "9206d1c5785046cf90d12a70561810e5"
  },
  {
    "url": "assets/js/122.bdb27532.js",
    "revision": "c0b07a1c5d086734e6b6989a98588258"
  },
  {
    "url": "assets/js/123.c8a61af2.js",
    "revision": "02336c2705f003f6a488ffcdc580c8b9"
  },
  {
    "url": "assets/js/124.5226410c.js",
    "revision": "1a4e79fba7bec7d0db3b00b18d10aed1"
  },
  {
    "url": "assets/js/125.57bd901e.js",
    "revision": "513e15136133871574b4e75c0f4dfca7"
  },
  {
    "url": "assets/js/126.68d6934e.js",
    "revision": "40165a6705975954cef4ae121032c606"
  },
  {
    "url": "assets/js/127.eac5a384.js",
    "revision": "903dd61f766a20ae0184d623242c88a9"
  },
  {
    "url": "assets/js/128.3ade84a8.js",
    "revision": "94702d14073c55e4de8e5fce7d6c96d3"
  },
  {
    "url": "assets/js/129.2e5a6c08.js",
    "revision": "63e7f8e429d2924ef82eba1079c390f1"
  },
  {
    "url": "assets/js/13.e98bb4bc.js",
    "revision": "43c21373e6bc06b1c996bd147d8ca308"
  },
  {
    "url": "assets/js/130.dc1cd5fd.js",
    "revision": "8ff6c30987f9be4c943de12c10eb6880"
  },
  {
    "url": "assets/js/131.542733fb.js",
    "revision": "f1334ddcbdfeafd85ce66a0d61926a3d"
  },
  {
    "url": "assets/js/132.e1601025.js",
    "revision": "f36e99572194a074cff5bfd0a7d87fa6"
  },
  {
    "url": "assets/js/133.f7371c62.js",
    "revision": "ddd70ea45d6534f02185af81ee0da1c9"
  },
  {
    "url": "assets/js/134.cf6f3996.js",
    "revision": "5b9538c778e2665276159b430943be2f"
  },
  {
    "url": "assets/js/135.3cdbab1c.js",
    "revision": "48bd9065bef7bce995bc0ba51022f8e5"
  },
  {
    "url": "assets/js/136.09bd853d.js",
    "revision": "3fcc1e141cca852200fb542c7d76ab43"
  },
  {
    "url": "assets/js/137.a96545fe.js",
    "revision": "a38aa0df960a63a16ccc77da77131abe"
  },
  {
    "url": "assets/js/138.0879b2e8.js",
    "revision": "9fd91ba5cbedd27e315b1e3af736001a"
  },
  {
    "url": "assets/js/139.85e7fca7.js",
    "revision": "d9ed4bc3ed8365f3cb24b29f7c336d3a"
  },
  {
    "url": "assets/js/14.c655ffbc.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.51f770cc.js",
    "revision": "96c358e81235a5a8826ade241559e2e7"
  },
  {
    "url": "assets/js/141.6ab534a7.js",
    "revision": "67c089da890da6885304fb6e0285ad76"
  },
  {
    "url": "assets/js/142.b227c73c.js",
    "revision": "b2a9c33dccd1d3ba0bc7b7fbc6c30c61"
  },
  {
    "url": "assets/js/143.5b84df44.js",
    "revision": "5e2b8b69aa10bdc6d68bca2dded62912"
  },
  {
    "url": "assets/js/144.b943f0a0.js",
    "revision": "268858f106a20afb758442504e8702e0"
  },
  {
    "url": "assets/js/145.c8d106e6.js",
    "revision": "baf5713a33408443e912ac8057115902"
  },
  {
    "url": "assets/js/146.f88f8f26.js",
    "revision": "9f9a63f692025332087e2cf579a1fe88"
  },
  {
    "url": "assets/js/147.09260136.js",
    "revision": "58a548c5df4b4169c89af9b8e05ea3d0"
  },
  {
    "url": "assets/js/148.6b0f55df.js",
    "revision": "ae50455e96cf519c01d75a284baf26fb"
  },
  {
    "url": "assets/js/149.c18bc33d.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.f3c0b53a.js",
    "revision": "8c389e95709b64517f459132f0520338"
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
    "url": "assets/js/154.0ebbebd9.js",
    "revision": "e093a9229ff88eb52d8d1fd051688e6f"
  },
  {
    "url": "assets/js/155.dbc8bfab.js",
    "revision": "bb87c36313556b96b4fad60fe651873b"
  },
  {
    "url": "assets/js/156.d3b6b2bd.js",
    "revision": "aa887d02ed8a225bd95bb34467b4f0b7"
  },
  {
    "url": "assets/js/157.b5f5d595.js",
    "revision": "af53b4a2406720a0737ebfe609c34cf8"
  },
  {
    "url": "assets/js/158.9d6ea641.js",
    "revision": "bad21e0be62fec67bdcbc80748dafb24"
  },
  {
    "url": "assets/js/159.a028c592.js",
    "revision": "768a14406c0a506da52064109b579d86"
  },
  {
    "url": "assets/js/16.b82d6f38.js",
    "revision": "fcd5889fb25f1fbcf1c9cbf885507a64"
  },
  {
    "url": "assets/js/160.21003d2c.js",
    "revision": "e054fdedb7fb4a852413d196979e9fbd"
  },
  {
    "url": "assets/js/161.ae539a7b.js",
    "revision": "7908b9f38e96ac7f760a35db7bf09268"
  },
  {
    "url": "assets/js/162.26bfd237.js",
    "revision": "36deb0977c9210e3c4ef591410eab119"
  },
  {
    "url": "assets/js/163.b8330c00.js",
    "revision": "4099f077eba552abd431fc7f2d3751e9"
  },
  {
    "url": "assets/js/164.6880919e.js",
    "revision": "60295e83f57a32ad015aa9765d4a80bc"
  },
  {
    "url": "assets/js/165.cf5181ad.js",
    "revision": "ef320ba94ed6aa55ed1c1ad00dcaf65f"
  },
  {
    "url": "assets/js/166.e9e998b7.js",
    "revision": "e2b939805a9aa5032dc5db67cb2caeef"
  },
  {
    "url": "assets/js/167.7ff155fb.js",
    "revision": "8b6885e5d1e1f8e1d7fdc4fb12f402f9"
  },
  {
    "url": "assets/js/168.64c8e422.js",
    "revision": "87e259dce1e7f2cfd49b64a1c158af93"
  },
  {
    "url": "assets/js/169.8a25ef97.js",
    "revision": "7ebd7d31df0cc6aa9789908589d4ded5"
  },
  {
    "url": "assets/js/17.75cb7d95.js",
    "revision": "9f15aaef1c8aea431710cbfdb337121c"
  },
  {
    "url": "assets/js/170.4935a407.js",
    "revision": "07078993cbfd315431cea0ef4b52aa98"
  },
  {
    "url": "assets/js/171.af409e30.js",
    "revision": "6078a5e98f0e9c38d9d9aad8e4e4c5d4"
  },
  {
    "url": "assets/js/172.e30ec04b.js",
    "revision": "45e501b81a6cafe2e313c2ad5572b9ae"
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
    "url": "assets/js/179.8f160699.js",
    "revision": "ba3688f374ed2e5488504122dc8884c9"
  },
  {
    "url": "assets/js/18.8802c3cb.js",
    "revision": "c279e50cee03c3516af8be711abe3590"
  },
  {
    "url": "assets/js/180.60d8badb.js",
    "revision": "687bfca677ffd74bd231e10fcc385780"
  },
  {
    "url": "assets/js/181.e90fa7f5.js",
    "revision": "0c5540917d02976e2750418855ab8f40"
  },
  {
    "url": "assets/js/182.933c7339.js",
    "revision": "9d60801d8bc5798b6e3ca1675cd470cf"
  },
  {
    "url": "assets/js/183.f6569c4f.js",
    "revision": "41e35de4373facf4316f5aca21625ec2"
  },
  {
    "url": "assets/js/184.789abb0b.js",
    "revision": "44cdb4bbc5b505c6aa93451dbd8f653f"
  },
  {
    "url": "assets/js/185.2e3c6c50.js",
    "revision": "64c98de4e099a7dbb6b35acf2fe639b3"
  },
  {
    "url": "assets/js/186.52e0dc41.js",
    "revision": "7a096dea80e0e45cc5fd3b5fb16daad8"
  },
  {
    "url": "assets/js/187.3eab8879.js",
    "revision": "736ddbda17786e4474c53ca1ba71388d"
  },
  {
    "url": "assets/js/188.e1b51c69.js",
    "revision": "126fbb5af4696ed251ac7637f8845460"
  },
  {
    "url": "assets/js/189.6f0c881f.js",
    "revision": "b81ffab11ade8d766db3638248be8709"
  },
  {
    "url": "assets/js/19.fa387aae.js",
    "revision": "47d0bafd003f696f3444759835babc6c"
  },
  {
    "url": "assets/js/190.6013f55b.js",
    "revision": "a3e379903249602a808a07c575a5fcee"
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
    "url": "assets/js/194.a8797a18.js",
    "revision": "3d315040971d1572ba83ac7e3fe6aa18"
  },
  {
    "url": "assets/js/195.e371cb46.js",
    "revision": "ae87bf74cfa670fa147db5c90d988113"
  },
  {
    "url": "assets/js/196.3ae6ebb5.js",
    "revision": "5ff117eb76c95f30ae67be8e6e766c23"
  },
  {
    "url": "assets/js/197.7b5469ee.js",
    "revision": "6e2cfc78c490455b9a389b366942e81a"
  },
  {
    "url": "assets/js/198.0b0fb034.js",
    "revision": "400f28f01acad67b60c5e4338e5861ce"
  },
  {
    "url": "assets/js/199.3d53ddcc.js",
    "revision": "ea2ebcc28502d24d063cd9769e91fc99"
  },
  {
    "url": "assets/js/20.93f54667.js",
    "revision": "198f8723322d4bc1ff75ef8d55b5b894"
  },
  {
    "url": "assets/js/200.ef172dc6.js",
    "revision": "df8b14488afa4ca86d28bd08dc85d989"
  },
  {
    "url": "assets/js/201.d247716b.js",
    "revision": "f1fca412f029e79235d57c01862fcb20"
  },
  {
    "url": "assets/js/202.fcfe9354.js",
    "revision": "125fb561c91934460cf4fb842e60d4e7"
  },
  {
    "url": "assets/js/203.33288b94.js",
    "revision": "71bcf0e06e71f23e082458c46c750f02"
  },
  {
    "url": "assets/js/204.63f63889.js",
    "revision": "4b86f6af22c5cb85faf81daff38fc0db"
  },
  {
    "url": "assets/js/205.e6b6d4ce.js",
    "revision": "e02ae89b82f4dda0b83c804e4787d442"
  },
  {
    "url": "assets/js/206.d8a85d97.js",
    "revision": "fd15738c07261e6e79f1245a9b7176c1"
  },
  {
    "url": "assets/js/207.a772699f.js",
    "revision": "87686d69f7469d18fdff754936ba4f06"
  },
  {
    "url": "assets/js/208.8331ac53.js",
    "revision": "babab7044784b6ac18fe066d0e71f8cb"
  },
  {
    "url": "assets/js/209.0d04c2d9.js",
    "revision": "54a8d975f651875835caf263866e2a80"
  },
  {
    "url": "assets/js/21.648dc923.js",
    "revision": "a3ac571dfe21b2fc1d3e23e963dd83ba"
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
    "url": "assets/js/213.3cca79e3.js",
    "revision": "4217cadada484a3dd9e4c0fb360e4585"
  },
  {
    "url": "assets/js/214.e422eac6.js",
    "revision": "cacca54a11b6f42669b9ee8821d887c3"
  },
  {
    "url": "assets/js/215.bb8f123e.js",
    "revision": "33fcc8fa01be7355f8131ca55bb7785d"
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
    "url": "assets/js/218.891fa4e8.js",
    "revision": "fd7f62a21c052014a2c9fe02cd22fcf3"
  },
  {
    "url": "assets/js/219.5da9e937.js",
    "revision": "c0e0fb704e4c45fa07b1f1a0488d8c07"
  },
  {
    "url": "assets/js/22.904be68b.js",
    "revision": "cee57ab95b0e28c368abc6eaed3e7e41"
  },
  {
    "url": "assets/js/220.644a9915.js",
    "revision": "27cfd5c65aa061909f4eb6cf73451042"
  },
  {
    "url": "assets/js/221.f152ec5b.js",
    "revision": "6fcb263471f31566b76892ff0c5df9e8"
  },
  {
    "url": "assets/js/222.bb0ae4a4.js",
    "revision": "9c1a412d97a02e7a0b8a50908b895673"
  },
  {
    "url": "assets/js/223.c9e54027.js",
    "revision": "23d6f5a0df9524083b0841b1faac52fe"
  },
  {
    "url": "assets/js/23.a33725e7.js",
    "revision": "9c1fecc51e849c6115a741cc2450f357"
  },
  {
    "url": "assets/js/24.08b7c412.js",
    "revision": "c17031d89613a2580ecff5a9b138d7fb"
  },
  {
    "url": "assets/js/25.3f29490a.js",
    "revision": "52f23e1cbff64035373016c053d496bb"
  },
  {
    "url": "assets/js/26.537bdc9e.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.c6dbc72c.js",
    "revision": "334a77617df42de65d55f3800d6098a1"
  },
  {
    "url": "assets/js/28.04a73919.js",
    "revision": "585f830e75da697f26bbfdef208f82de"
  },
  {
    "url": "assets/js/29.2c64d416.js",
    "revision": "7badb60fdb61529301abbc8f5fc6fbf9"
  },
  {
    "url": "assets/js/3.03b8f943.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a8c742fd.js",
    "revision": "5154373fbc89c84b00b8fc7aa54047ab"
  },
  {
    "url": "assets/js/31.66d94448.js",
    "revision": "257bb00457698be896a024221dba6edd"
  },
  {
    "url": "assets/js/32.b747d335.js",
    "revision": "b371f77cd2a9d546a1ef94c57b871700"
  },
  {
    "url": "assets/js/33.7138121a.js",
    "revision": "70d4aac0a45392291bca0d1c2547f422"
  },
  {
    "url": "assets/js/34.d1630693.js",
    "revision": "b4b72957488fd33143cfbc87e9d14600"
  },
  {
    "url": "assets/js/35.cec93a6d.js",
    "revision": "1635a117cfa629974866f7c5e080d17a"
  },
  {
    "url": "assets/js/36.f9348fee.js",
    "revision": "41909cffebe14044519ce2fb64361474"
  },
  {
    "url": "assets/js/37.5f3be3f4.js",
    "revision": "66fa3aca65f23841e22e7fb1f7b405fb"
  },
  {
    "url": "assets/js/38.7bd21d49.js",
    "revision": "7610e2f432721143a81fd6cea4ee6faa"
  },
  {
    "url": "assets/js/39.5aad70da.js",
    "revision": "d480864c0da5517b4d2fa5d7629480a8"
  },
  {
    "url": "assets/js/4.ec8238cb.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.92b6a123.js",
    "revision": "3ce8b364176f59620a006b5738803f96"
  },
  {
    "url": "assets/js/41.d03918f7.js",
    "revision": "5f3feeccb2fa0ed8d0c0490b46503d4a"
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
    "url": "assets/js/49.536e8253.js",
    "revision": "afe9504fe08dabba404e0dbefc870544"
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
    "url": "assets/js/51.0af902df.js",
    "revision": "141985de1dc415e480b696b441a24cf7"
  },
  {
    "url": "assets/js/52.70705de2.js",
    "revision": "3189d7342b19a7fc0126412c34b6b0d8"
  },
  {
    "url": "assets/js/53.d0c300c3.js",
    "revision": "3fbacefac0c34bb3c1783a3ee02a2ed5"
  },
  {
    "url": "assets/js/54.c95ebf35.js",
    "revision": "3781a8a53b3c551d8ffee0a702b4c32d"
  },
  {
    "url": "assets/js/55.748e8f50.js",
    "revision": "a27cbc4c34e1395cffc6c2b798922c5a"
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
    "url": "assets/js/60.d0f8df08.js",
    "revision": "d10f8c14e2ecdda820ea551c533f5241"
  },
  {
    "url": "assets/js/61.1176a83a.js",
    "revision": "0c5570c2b7747b99aed04b2420b77717"
  },
  {
    "url": "assets/js/62.0b5ee3d7.js",
    "revision": "d635d003fa4962b7c901bccc2d2516f0"
  },
  {
    "url": "assets/js/63.9301bf66.js",
    "revision": "05fb74fa0d2f6e432231c58c1093ff35"
  },
  {
    "url": "assets/js/64.7977efe4.js",
    "revision": "4e1076f37d2e1db92db28d87254f8e43"
  },
  {
    "url": "assets/js/65.ff06b778.js",
    "revision": "110da5b5e33f31ec17328086fa04c781"
  },
  {
    "url": "assets/js/66.a00b9f71.js",
    "revision": "ead2f6672c29055ce3903d0e46c02618"
  },
  {
    "url": "assets/js/67.bde49d2b.js",
    "revision": "9946820be7000f98f75150d1ce46b2f9"
  },
  {
    "url": "assets/js/68.2d0a74cb.js",
    "revision": "46f033cc9ce6ebc4726ad4c5fe4922fe"
  },
  {
    "url": "assets/js/69.682330cd.js",
    "revision": "5e6d90b88bbb8a747ae8361d433c4a27"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.d247395f.js",
    "revision": "04ae1b9886235b11e7695aaaec7c37ef"
  },
  {
    "url": "assets/js/71.3b8f516d.js",
    "revision": "b57758681efb36d8047507f64b249b3b"
  },
  {
    "url": "assets/js/72.d9f56e54.js",
    "revision": "e6bb7da55c0d4d088f04b3e66a610b6e"
  },
  {
    "url": "assets/js/73.497cf87c.js",
    "revision": "89d01908df139552d8fa8b6eb24d4e05"
  },
  {
    "url": "assets/js/74.51c07784.js",
    "revision": "2136b7d4f9079b5ec947459dd67a1492"
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
    "url": "assets/js/77.272c14a6.js",
    "revision": "0ec270b74099f05682c8a20b9498e71d"
  },
  {
    "url": "assets/js/78.5ac9f6bb.js",
    "revision": "61785b7c43555e1a5f29d8a8bbb8ddf1"
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
    "url": "assets/js/80.ddb8716a.js",
    "revision": "f35319077484cdf8cce78ce5464cea04"
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
    "url": "assets/js/86.46ddd7be.js",
    "revision": "7f35eb2bf864fb45f099c31cb39d8c48"
  },
  {
    "url": "assets/js/87.0e9d3353.js",
    "revision": "73888e48db3ea26ae283f325834dc45b"
  },
  {
    "url": "assets/js/88.6b210c51.js",
    "revision": "f5e45f12b173cf1328f7656c81c71006"
  },
  {
    "url": "assets/js/89.ee14f4b8.js",
    "revision": "f17dde0a5404e530fd37ee9038ae2750"
  },
  {
    "url": "assets/js/9.d951da48.js",
    "revision": "f3d49783f04ef3201609cfdd4236a9cb"
  },
  {
    "url": "assets/js/90.6b496e9d.js",
    "revision": "d3b79f3cc7462b5a6e4164a113543097"
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
    "url": "assets/js/94.71cc74b2.js",
    "revision": "061ce927340eca771b98513804f20686"
  },
  {
    "url": "assets/js/95.244220ca.js",
    "revision": "10112c044de8f2f28b702f1a5f54c205"
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
    "url": "assets/js/99.957b76d0.js",
    "revision": "dce760b10afd56d5278dfd410d052ebf"
  },
  {
    "url": "assets/js/app.498c7abf.js",
    "revision": "ad49dab7ed916fc7ffd040485e01938e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d94567b0ef6bc2f25b20ecaef0e84314"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "011ebd97970d8f49eff1633ef10c20ee"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "eb63eacee021e65f7f56dff23b994bfc"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ab89b1f318d327021f5cb5f0c4bc68c9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c6c6f92693ffecc489d44fa8c02aa8e4"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "cf9299dd26314748b7a25609ae464b60"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b44a6d5c693ba5d6105c8d299d53e3b0"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "955202853b67764025073401f75fd601"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "bd3870553f367a690cb04959db5ab60f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6c4bafc50c80c89e065fb1b0f66406bb"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "eaefed951df02dd72a65da5076612798"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "dd9dcb5ccb692e0367bb53d65bfdb6ba"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "3c594a2b82a95509e30b238e4542a083"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "4da1f0a392d9c21f40378e633f6e42f5"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "b1329b0d1f6296c8ad32a73322043ffb"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "4409ab568ab5f75b905d58889cd87f3b"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "c9670db8d7872da0408a3485980b78a9"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "db9d1a4de4bab160df9b1e437abafdd5"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "85e9b0d213ce8c0362d96a49969886a5"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "53ddc201b70a3afd323988da1edd8f3c"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "19472a24e7a32722b5abc5fd3055eb7f"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "98aa0bae436a467e17b665d0af754654"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "d19083108aff47ad1959bd196ff065ba"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "e7d4d17dd2046965a9eb09ff8c8b3e80"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "de7acdaf9af4313e46c46c548df333ad"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "f251189969a70ba763e9acdb0446c00e"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "df0928421a99c13ad67f7aa5bd4f32b6"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "3b215fcd2a9c41fec58a346d8140c2fe"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "41775966150bff132d93180d240e8f55"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "a561cd883bbb7f8321025b45ca256584"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "a40bdd102a153b27bc6d1142e60c0960"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b77eb88aa7134257944a800cff705b24"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "44f2cf776319dbb92b824a03ac37a4c7"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "a60d9c4b81fc1ecea60c3828f07cc7ea"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "18cefc3afed3144e34876cd447d7c730"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "07e5a80c3f45eb148cbd219925047fa1"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "d438eb10737ff52262d342cf529021e2"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "35ffae80da818d46100163cc0b2a3922"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "6bba9b226b1aeca95277db33304c5f7b"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "4ec1603ce2bc3caceeb742686ac7c04e"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "cc39bbb8000f114be61d20a1fe39e326"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "320c8477ca2696da648321b9de8d7e93"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "f7ae2eae2405af4ed11b15b26b9c5690"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "6b95f92e183678945ebd4ad8428bd221"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "2262a019bdce7581603cea1ee0abf68f"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "51cb90e6f7456563e91d51867db272e8"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "dacc7a6de2bebc983b35d6c56e3891ee"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "0c8239f25b5f5a63e919a99749a6df39"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "7ccb9581a867396815b7275b80fde9ad"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "0c216dad0701bd6536491c41665e72ab"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "006b71fc686381db33d9943cf41aad04"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8b4d7a2d3dc1f95de2fed05be7734832"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9375bc9d96e8d8e4669f0241ba6aedc7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "0812838117b5a117ee5eae927256d9ea"
  },
  {
    "url": "book/index.html",
    "revision": "0c1b837aa33503df2fcbb8f8c9c1d1d9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e6f24e3ebd75aa6565d0e01e4a4f6b4f"
  },
  {
    "url": "categories/index.html",
    "revision": "f1b1aeaa8755947f81186482bd0a2842"
  },
  {
    "url": "figma/index.html",
    "revision": "db4e31b47a5c0829bcb6431f640ebcda"
  },
  {
    "url": "flutter/index.html",
    "revision": "16d3bb80ffbdc87df121d395eb18c987"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7fb7a763d1eac855f28a143b72f8eeb0"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "273c3509e4d5a0c2bc95f9e504a07c36"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "937b5889a88fbfc969a3a8b746fe7838"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ba6dd790522f2bc2398975f08f1f9ea4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d2e6845a1c51fe17ae08a0bf10d2b46f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b5c108401fb616665e4e67c4f8488961"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8ed9820720bbc26247ca403037cb2ffc"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5e7d6817b9044005d4ee7a7791a18ff2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f9699dde80f1096f3901e3edc74acc03"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d5b499ff9a7c0f59ae5778cc3058d99c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "460c4f8e82100db40da65fc41ba3ab4d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6fcf3d127b16824fad62d70cc68cc4a5"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ac941485269b693bd9788aa9969605d7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "fec51997e977b89d9d066dd48e2decb1"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f07bf15b953e7d989412542c5fb1bc98"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "5e69d7c91367a1e11ab0b599e9e0e0c4"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "ed908662dbab80c5d5474d784b58fe19"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "32c1a8f6a961af5ae307a55a3e58fef6"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "7547f7805c6508b7c5d9faf33e69371d"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "e88218eda98bc3f8180695438364cef9"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "240592f037d36673a112eea1954bafaa"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b4bf8de621e87ebc37a714bb395bb2f9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5eb16d924c44c23342f73e112ee40312"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4aab54db61090db1b9c8b15c7aaec5e6"
  },
  {
    "url": "haskell/index.html",
    "revision": "f49edd25d958d07fd21ffccf79189193"
  },
  {
    "url": "index.html",
    "revision": "530d09da7af1186c592b6d2083b8aef0"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "512513eafcaeed6fad525075e3dbdc4b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "2b8f53d7f5d9d309b94fe49adca2b6db"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "280700992f84db38fcb4a4af3981c096"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "6f8fb8973830f3c1f515770c994bb7c0"
  },
  {
    "url": "python/index.html",
    "revision": "2c00749ff4855000189ac5125d58eb0b"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "2856654c19aeacacfde80649b8b5c5b4"
  },
  {
    "url": "swift/better/available.html",
    "revision": "1529fbcc8f850feae1d107f7a27afabe"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "74215e847672bd6c2bfd56d5d8e28197"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "09e832e08ebd5a35b1076953522bb661"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "eff2921b519e08bf9289c0d2c5553380"
  },
  {
    "url": "swift/better/di.html",
    "revision": "877ad043e07adce211b8ec672faa341c"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c181290a373ea448e9f89e6c756e7765"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "60c84bc34534d0b89df0d26e801f984d"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "31966eeac46991330f949acb8bc2d0fd"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "1548f8f56d5415ffcb16cb4dafbc2a01"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "739b32e997ad747af1b8b6b358e482ff"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6c5b34275fa272ec1b8041970c5dcbe8"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "0bbb8bd49a1f9f3785dde06a767d0ab8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2a0e2a7a2313971a81e461ad77ab4399"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "9c2f335362e53b61282b31846af6d4cf"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "cad7da5ed317fdce2712c21c919be721"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0a628f20951d6eb44e6677f260fafde8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "2dd09dd1415db1c172aed49b40c9808e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "9b842612440917d7aaaa0ca871c17f48"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2d332887428090f7b300ec06e6aca9fa"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "5c141244b555016574e18c570742c5de"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "8ba159491bfacf298d59e8779bed57ec"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0665401317c0c1aeafc984a1ae31c1d4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "2d0e405d3723b9c4c490b7c9fd244d7b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d87fedb6661683251d19a1a54b54ef36"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "412acb97fbcc3c7b3134a3f10633db25"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "5f0dac45dd8e7f6ccae1c7a81f683c1d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "2deef2214412bbd85884f5a4b0eb21a1"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "11e994a8070746bf3f67fb25c0846cd0"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c969b2098c077d07366d278e9a84a0b3"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "3d71ae929a2fd4354b73a9ff70cb67f0"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "51800c281e37acb4a6fad0375f6cda59"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d42e2043d36801c864c8598d927ce88d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "b2d958a6a4736bd5ea62bbbb9b5cb0e9"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "701160e87607334210edec324383ef21"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "9430713a7ea3535274f449b513648514"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f56beec387973b1b1d3094875d5c5f18"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "d428efee4d0152b950450921146a3e6f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "4f51f2d089231842602f0b937a3b8701"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5a482197dace483b072e45300e986360"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8060c9973cb8bbbafcb6395c1f9ce70f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "44aa8838c1db43c4c406260c0744195c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f7ebbdb964df4281a1f86d3bdf00d331"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "55e3fdfcd0b87174de4cb06a831a6f07"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "31b1892e1d2868201351dd302cbb0d60"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "98564722c5fbf75066612aef05858270"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "aa672ff7958af6e0cf5ba9ad19ef408b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "2e19dbb202fc0f8b23ffaace41dbbabe"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "64068e5a9636caa59c66b41232f94cfd"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "1b2ff1851328ca71ba03f420d35ce42d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "41f71e5640d3fbdb97c32d9f96ee0cfd"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7c8599df164297bfcfca386f9084c48e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c739bc383fc3aaae93d80ff10615e9c6"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "6512d92146d03496a9c12734818e4b60"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e2f02c92211d70889fcd5019b2f2ee91"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "9bf7da997e09d76ddade0906f9b2ed9f"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "ff319a74e8771ccce28376ebb658b4d3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "376623d44e1e47e738980c5c96ef1033"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "94704e8197d71277be58e6efba183be4"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "cd08635984c925e372379a09f98fa61f"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "50fff237e5a42f48be234def4cf5e1d5"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f550da46bdca095e4c88914b91145e59"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "ecac12e7ec38e39c7a6d3de41a94a3d8"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "eebbfb261c8c8e15a732d9aef44328a0"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "edbf387938594a03a2a5308ddb33ee19"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "652b2a1edfc30a704377fcd8ff3033d0"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ff9c0e9b5a2a03f0180cbac41098fae5"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "6b87272fa580ca99a7257d2922bbab2d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "a729fa8652dabafe1379f5cc73e90e6e"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "306889d6ab428c7e25483a35da7a31e8"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "926a8e4e6e46a53882a0ea2e152360a9"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "66ad85227a00788126c746876cb17be0"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9872958061a344c68ad8184685aa458c"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "995bc05c061bbd2a79345ba9f39b39ff"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e2fe5a372fb7862ea329076a0a35fa5e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "2df41247bd4e5875af304086b82f02cc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "508396d5d7c6947b08f42490838706d3"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "83e94ee147f07d29bef0857f02d0a321"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "db426fb41788452d45132cf7c9068f68"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "854e7d04c662ecb79fdad8b8c2d8b424"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "135e92c379df49059a7bfad94f9c0127"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c42ff184b503db0d664407a57e67e38a"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a6a0e099069f57fbe00a130007208078"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "eac931674c698d2669566a4a11115664"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6d831742aa9d0d0d8ed11124eaf6fc0a"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "64f0afc89acc69ed72b751347ff3e41e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a8253ab834127d7d7a2c7338421b5527"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d028620553c5ebba702fde74e6314edf"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8d6af239f43012548b086807d20d29a9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d38ec674b93ecf7a7734fafffc8b7361"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "0aa466ae0a588d7f3417582a63bc38cc"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ba6de576db07b41f75cef6bce907a112"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "6f1de89e7b9467f0aaef54d08dcd1e16"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "460e72a62e2a5336b44fb7c4806712ff"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ab51fb9691ec0a315899bd65a66c7583"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e6331314bda100fabc24aa5da171ee97"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e443f3264f07082763d6ecec24a0f14c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8358a7ab440546a1fada73ec8e372274"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b496f6fcff0cca6f3949a948391ca955"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "f78d410e5a3ba4476c9dda47456d51f8"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "89b3f72d01ef63592a84e6e217c6ac38"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "345d2e1df8dd0f3dc18e7e630d9ff0c7"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "679735f5058f04799091e36237078d1e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "eef95e47a089c0491a7fc272ea2d6222"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "c0bb44633df47c0b47acad0d2da095de"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3c6e16ac00158a6628d9fe0085a2aae8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "567975c8e40bba923f242f55adf21894"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "2aa4e92a6dd1ac98d9f65c7c54d70e10"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ec3662173d88951988293a39e42e9575"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8fded59aefe39a952acf0a3e13ae494f"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "913c6a58443cf78b98f947fdc772ebeb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1708988900fd2518fd313981e2c17d9b"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "48444fedd810b01a628f821b7ae1ecf1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e8b7469c5899dc5202d61af421055cf5"
  },
  {
    "url": "tag/index.html",
    "revision": "1d855b9b777ddd229935437b0304fbda"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "0abd99c1030c4adc2f5b8631ae445874"
  },
  {
    "url": "tag/json/index.html",
    "revision": "78dba2c150da73f9941177cf078ed7bc"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f2be1ad7137ad12d34c03a59ab45b13f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2bbcc0116b4ab27b5314a2998b8653f9"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a2f6ebdb5796a9f7a84af7aba2c1297a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e3677ee3162f1401dec4fa10454d724b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5b2f2adfce28428dedbedc0702094dc4"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "ffbc854b23b6e7c252bdc13c87271a92"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "156adc5a4a86fe0f7c39eefee830e92c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "52fa44f8afcf9656c8a6ffd1c382176c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "db3636e93d9a02e1bbabb543bebb63b5"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2338e948ffeff4ac9df1c4f011b955ad"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6f275a031370165ca3aefb1f9823d81c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a4caccfad07a4700c034f251aa29a964"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6d63c28d0c97eed1e5eb3ee2a1af0b9f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ac91cd950b58190989f197a1100ffd55"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "70b0803cd6cef307d2dad3940cd9ef8e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "89a850ebc4d03b289b62dc1b4f7f0081"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8f2dfb377677be09153f20280764588e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "62e51ea52a379b6c748d6903e5c7d18b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "374944dc25339c9d70d4ae00668f2df7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d295e93bb5bd12a36e40f0bcd10e46c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "3cd6be856d592d8bf99de7dcc95a19dc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d7e594e6d2d67c0311655142e588b022"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "da094ba7531268e85046acdafeb498cf"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f20fc913a18f371431f681031126e3d5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b0c83578496bfbc1180ef46709247ad9"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "8d9891b97eb4325dbae096810c7eec50"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a90c63b97bed7188b0e363bf38536844"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c19c8dfdc2475cd7320fb80e857a6e1e"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9f59984d9282b57376527768c32180a6"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "0de3a699d2ab7c2e5cf9adc417c72207"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "20d141a4093192e1eab82af494e850d4"
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
