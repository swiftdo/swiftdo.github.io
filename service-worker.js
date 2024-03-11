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
    "revision": "1e9083776563858dcd58b554175921e9"
  },
  {
    "url": "about/app/index.html",
    "revision": "2c381f535d4fc4f41c3eb23e2a6c5a32"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "1ac926a775f396f885cc376d0a673804"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4de9c25acaf568045803e4a56c62077a"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "131d76acc1aa616b27f5eb956482cb57"
  },
  {
    "url": "about/index/index.html",
    "revision": "7be22f94740939b4b419d6fec1ccc048"
  },
  {
    "url": "ai/index.html",
    "revision": "a1ef025f8d4fb9473fc072dac57eb3cf"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "12391429f378131e240a5ad5a1097632"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.4c021220.js",
    "revision": "e2036a8d9db9f718d64ffcca05f83e2d"
  },
  {
    "url": "assets/js/101.cd42b276.js",
    "revision": "bb0df5c430b72b3ccdbacfd797c877d7"
  },
  {
    "url": "assets/js/102.4dfddae8.js",
    "revision": "4257fd05be62e8f140ea7ac485747323"
  },
  {
    "url": "assets/js/103.2f4ff964.js",
    "revision": "8a67e0b20bc0266b31b9319c96a9fb60"
  },
  {
    "url": "assets/js/104.0953406b.js",
    "revision": "0d1610491505ee58e14a543dfb7499c9"
  },
  {
    "url": "assets/js/105.b7a8b85b.js",
    "revision": "5566fe8ff95870ee9c6a5fa6edc06844"
  },
  {
    "url": "assets/js/106.094b1df1.js",
    "revision": "d4d1eae2cd767ff2e63eb328552e0312"
  },
  {
    "url": "assets/js/107.d36bb470.js",
    "revision": "01287b9786d600e5c913566d098c6b7a"
  },
  {
    "url": "assets/js/108.19ee4c72.js",
    "revision": "87cc21633e5427fad0d907075ef3f762"
  },
  {
    "url": "assets/js/109.55514b02.js",
    "revision": "fdae5c83a1c026dc55122984be13db71"
  },
  {
    "url": "assets/js/110.6239739e.js",
    "revision": "07a195394e532b84dc60a5619b7a3425"
  },
  {
    "url": "assets/js/111.0e6a1baf.js",
    "revision": "54c5054654894c7f334b997eee2e5176"
  },
  {
    "url": "assets/js/112.7f409df0.js",
    "revision": "1eee9755f599e5549e9b09e84130b719"
  },
  {
    "url": "assets/js/113.1eb879ab.js",
    "revision": "e73acb468e3798f4f3269b4f3d8a5df1"
  },
  {
    "url": "assets/js/114.e2e2536e.js",
    "revision": "a43138eb869866a0fd07aa4f48e5e808"
  },
  {
    "url": "assets/js/115.4ef83f0a.js",
    "revision": "bbe8dd0e4780aedf21c782aaf5349746"
  },
  {
    "url": "assets/js/116.2dcc4c75.js",
    "revision": "33414d849139ae21ffc84f709fdb6c4e"
  },
  {
    "url": "assets/js/117.083c7834.js",
    "revision": "be95f259258fa09c8ca986666c9c343c"
  },
  {
    "url": "assets/js/118.4f5c030c.js",
    "revision": "c05f571bfd7ed6fc4b266a16b18f14d3"
  },
  {
    "url": "assets/js/119.8127859f.js",
    "revision": "555067f5ad26e5ec62b678eadd34f6c9"
  },
  {
    "url": "assets/js/120.ae9253d6.js",
    "revision": "94ba2c384df5162467d99e718292b62d"
  },
  {
    "url": "assets/js/121.4ba36f42.js",
    "revision": "3426adb27ba9073f81c959c9998d2352"
  },
  {
    "url": "assets/js/122.a4fc7c93.js",
    "revision": "89d0cc3a4484970d118c9a266879ecb3"
  },
  {
    "url": "assets/js/123.aa46b45f.js",
    "revision": "99553bcc8e446fb36749bc2ba48f51f2"
  },
  {
    "url": "assets/js/124.bf940ad9.js",
    "revision": "094bbe9deff1f1cd9319f846148a1a32"
  },
  {
    "url": "assets/js/125.c45a88e1.js",
    "revision": "af121d5c77ef688c88844be6ec4833b0"
  },
  {
    "url": "assets/js/126.5b010a5c.js",
    "revision": "861f4e0d6974b6f1a88123591f049c2b"
  },
  {
    "url": "assets/js/127.927aa6f5.js",
    "revision": "934be92a68363696e7ed450376f4e0f8"
  },
  {
    "url": "assets/js/128.2704e673.js",
    "revision": "83e2937efebb91671ac97852cbe97784"
  },
  {
    "url": "assets/js/129.ff418c2d.js",
    "revision": "cad7a8aadf7ca1a5ca0e6eb47e5d6529"
  },
  {
    "url": "assets/js/130.65dce400.js",
    "revision": "422d32afa2ab94325b37e7f4db1d2c66"
  },
  {
    "url": "assets/js/131.9397be6a.js",
    "revision": "27fc572bb3cc75465196ea32a67902dc"
  },
  {
    "url": "assets/js/132.bace5bc6.js",
    "revision": "b0daf6e25dc8f1634e313899e48dd110"
  },
  {
    "url": "assets/js/133.435258ef.js",
    "revision": "a0bbe888e77781a3b17c6435fade60ca"
  },
  {
    "url": "assets/js/134.b249053d.js",
    "revision": "2c99c107e3aa5c92bd1a828c3891da7b"
  },
  {
    "url": "assets/js/135.d8cc840f.js",
    "revision": "d07297ed55694eea03268e22aeefac3c"
  },
  {
    "url": "assets/js/136.0155d6f9.js",
    "revision": "b8b665ffbfd1fa877a7af923ea124b5f"
  },
  {
    "url": "assets/js/137.4cfa7879.js",
    "revision": "7efff3c4675556602c855e99ed054f8e"
  },
  {
    "url": "assets/js/138.1943877f.js",
    "revision": "78075badbc04b9279c75e665d624b073"
  },
  {
    "url": "assets/js/139.2719f39a.js",
    "revision": "9cc9cf8adbf085206c2ad35ca92b3d9f"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.bb57b935.js",
    "revision": "084298e939af2b208178ffe243c5dab6"
  },
  {
    "url": "assets/js/141.4ea73100.js",
    "revision": "262681c57beed62030ce5c16c5ae82eb"
  },
  {
    "url": "assets/js/142.5ffbd4e7.js",
    "revision": "4985d40cfda048a0530d4b28e85683e6"
  },
  {
    "url": "assets/js/143.cbc47c9c.js",
    "revision": "3c0b9fc67200edc6ac188ff93e1d7cf6"
  },
  {
    "url": "assets/js/144.2cfa443b.js",
    "revision": "299edadbeb23a243244783c94e578e20"
  },
  {
    "url": "assets/js/145.9104998b.js",
    "revision": "d790ce2012716340d5a3b66ca95e7fb2"
  },
  {
    "url": "assets/js/146.8389964a.js",
    "revision": "5aee53795b1af8c09ef1856306e717aa"
  },
  {
    "url": "assets/js/147.0d5e45a1.js",
    "revision": "c9d5e55cb26a0e404b72036f2da6e0df"
  },
  {
    "url": "assets/js/148.4f4bd572.js",
    "revision": "15dc056640242495cdeb06e3e03b135e"
  },
  {
    "url": "assets/js/149.e6fc7969.js",
    "revision": "5c3ad91f665ff2bd45fa81670445cd15"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.77521ef7.js",
    "revision": "19c0d8c2b4168dd8701fa4d5bfd3e081"
  },
  {
    "url": "assets/js/151.272cb596.js",
    "revision": "f7d175e5539555dc18efe6910a19ccb5"
  },
  {
    "url": "assets/js/152.a8bf93eb.js",
    "revision": "4a440d96758addb29e4538748eafb04b"
  },
  {
    "url": "assets/js/153.70d839ec.js",
    "revision": "72039bae1a2b0a8048f1c78eee8c5cd7"
  },
  {
    "url": "assets/js/154.fb709959.js",
    "revision": "c35a6a15682599e135f3ab593045a0a5"
  },
  {
    "url": "assets/js/155.350febb6.js",
    "revision": "480741498cb1823fe63991317f133c18"
  },
  {
    "url": "assets/js/156.6b456964.js",
    "revision": "8e611feddd312cbcb1098b20fcb6afdf"
  },
  {
    "url": "assets/js/157.595f17c7.js",
    "revision": "67f91c07d46da73be0d805347d236a5e"
  },
  {
    "url": "assets/js/158.43d57925.js",
    "revision": "4cb58fe420c81f6ad18d7ce2f79c453e"
  },
  {
    "url": "assets/js/159.f6c83984.js",
    "revision": "ab74443a5e44b1f8f0bb337eb0c5c135"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.2bc8d4e7.js",
    "revision": "3399cffcfdf1838f45440f4c71b101dc"
  },
  {
    "url": "assets/js/161.eee6248b.js",
    "revision": "665c83a1d5f7abfa7221cfd4b031f9fa"
  },
  {
    "url": "assets/js/162.90a871b7.js",
    "revision": "e98ee46dea145a4c2db4f1faf2d6477e"
  },
  {
    "url": "assets/js/163.083951a1.js",
    "revision": "2db29bfc0d4e2d305e0767acc3b8fabb"
  },
  {
    "url": "assets/js/164.6bed78b8.js",
    "revision": "69aa4a24806ced5311026eda7d9b6c42"
  },
  {
    "url": "assets/js/165.693e1c44.js",
    "revision": "e1c7a1a3608ea522dc3251aba1a2fcfe"
  },
  {
    "url": "assets/js/166.67add711.js",
    "revision": "dbdc21594fe574b16b83d7487d2c6345"
  },
  {
    "url": "assets/js/167.e67c33e9.js",
    "revision": "168d903f86844afb28373cf052588796"
  },
  {
    "url": "assets/js/168.1aa631ea.js",
    "revision": "8438e57c4ba3ee2111fa5d9b926a56b3"
  },
  {
    "url": "assets/js/169.39af3175.js",
    "revision": "dc4fba6ee52a1b2269388143d20d698b"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.38160101.js",
    "revision": "6f5bde6dda6e5fcc6fa6edd53c1b0c33"
  },
  {
    "url": "assets/js/171.b7f0226d.js",
    "revision": "c167faca4006da7c14446b5e74c6d7cc"
  },
  {
    "url": "assets/js/172.d7e955df.js",
    "revision": "05909005e4cbb47e26b1883a4fe256a9"
  },
  {
    "url": "assets/js/173.fc15ba70.js",
    "revision": "736e2d35d104c368aaed3675d2997b28"
  },
  {
    "url": "assets/js/174.5e52b60c.js",
    "revision": "07b891500627b9cc14bc1b7ce8249443"
  },
  {
    "url": "assets/js/175.8c83de1b.js",
    "revision": "f0a82dcf00718f5333008861f076fe98"
  },
  {
    "url": "assets/js/176.d67c3a78.js",
    "revision": "3c376e4a411e55109fcfdb64402aa7ea"
  },
  {
    "url": "assets/js/177.8df07425.js",
    "revision": "c8db37bc941a16cc0cbe90718bcba095"
  },
  {
    "url": "assets/js/178.df7bf50d.js",
    "revision": "f155e19a621ef016a0b2d14fbe1026ad"
  },
  {
    "url": "assets/js/179.d2258ee9.js",
    "revision": "714e17c51d5bdfa4478da5799aa2570b"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.dca781e6.js",
    "revision": "cfb22f986531a0ddb2cb6166c11e42b9"
  },
  {
    "url": "assets/js/181.33ca0582.js",
    "revision": "810290474d9645083e3e182fbe6b690f"
  },
  {
    "url": "assets/js/182.c7a416d7.js",
    "revision": "e1f3ba29eda87c941035a3682fb4788e"
  },
  {
    "url": "assets/js/183.9711347a.js",
    "revision": "0e8a0efffcbebd86ff104f86e4e31e83"
  },
  {
    "url": "assets/js/184.69fba026.js",
    "revision": "b592d58565d73c318e47d3639030bb0c"
  },
  {
    "url": "assets/js/185.15b21404.js",
    "revision": "510d0925b3a414e94c3349bd55d5ed09"
  },
  {
    "url": "assets/js/186.80188bec.js",
    "revision": "1ffa4594f6f1c8e6be04254582588494"
  },
  {
    "url": "assets/js/187.3d13a94f.js",
    "revision": "29a921468246d5d95d158e3a23dd77e9"
  },
  {
    "url": "assets/js/188.ca684555.js",
    "revision": "fe69660a1cdda931073d59ea168992fe"
  },
  {
    "url": "assets/js/189.5c968b0d.js",
    "revision": "ee691edd65f8a45d2b3bada4f71f8eaf"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.29dcc93e.js",
    "revision": "23007b14f4392fb71ddfbf553e144bfe"
  },
  {
    "url": "assets/js/191.e88a7ec5.js",
    "revision": "81e311e44e72f6a7e8787dcf87ff8d1c"
  },
  {
    "url": "assets/js/192.029e92f5.js",
    "revision": "ac30af9876bf33d89e99f7ad54626973"
  },
  {
    "url": "assets/js/193.813e9efd.js",
    "revision": "ff586eafa2561b3a85cd600b62cdc9b2"
  },
  {
    "url": "assets/js/194.92044d65.js",
    "revision": "09197c7c0ccb1f493d4e252f9cf510dc"
  },
  {
    "url": "assets/js/195.f3e85981.js",
    "revision": "abc326eacc546d6f3f9a0efea46f46df"
  },
  {
    "url": "assets/js/196.d7ace4a0.js",
    "revision": "e8742a90a42cb0736e53d797c32ba99b"
  },
  {
    "url": "assets/js/197.3b03e815.js",
    "revision": "405dd5cb448324cb0d4b0bc8d57727f9"
  },
  {
    "url": "assets/js/198.c2702fff.js",
    "revision": "b33224c47a84dd2fe77f61f774102c4c"
  },
  {
    "url": "assets/js/199.90abe0a7.js",
    "revision": "c40d870102c89f19ed5ea0183515373b"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.c9114bad.js",
    "revision": "2ce217299e2ffbe9c3aefdcd701bec16"
  },
  {
    "url": "assets/js/201.d4d805af.js",
    "revision": "82393859e476f8c1829611050e314b1d"
  },
  {
    "url": "assets/js/202.1fe2854b.js",
    "revision": "485d0330497ba0ec90a2791604b652da"
  },
  {
    "url": "assets/js/203.4717bf80.js",
    "revision": "19d90c67f8a72419dc1613a1b7c436b9"
  },
  {
    "url": "assets/js/204.5ab00dc8.js",
    "revision": "ee07964a8dc9ea171c7c16f6185eb5bf"
  },
  {
    "url": "assets/js/205.a62e2664.js",
    "revision": "e8a810f51aae5671a91e679e7ec03771"
  },
  {
    "url": "assets/js/206.045dda51.js",
    "revision": "b8794f31f04380b038e2c81fa1f5fe55"
  },
  {
    "url": "assets/js/207.0e037cb0.js",
    "revision": "af49fc2957082d9c40b90fa9cf286d95"
  },
  {
    "url": "assets/js/208.c4b2b01a.js",
    "revision": "76485017035a565f0ccc0ac0903959c9"
  },
  {
    "url": "assets/js/209.c02469c8.js",
    "revision": "c7b5be5a311a5037d5b2e2c5b9f576ce"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.0c57bc52.js",
    "revision": "501e4a93db05a5d1028bce1773dda74f"
  },
  {
    "url": "assets/js/211.38d67e98.js",
    "revision": "f678341d6f20155b242c6115dbb7d721"
  },
  {
    "url": "assets/js/212.dfa3fd1e.js",
    "revision": "c0b9c95ffb40c8648abea4566efa5571"
  },
  {
    "url": "assets/js/213.2655b937.js",
    "revision": "9aa716aaea70a39c3b030694362f8174"
  },
  {
    "url": "assets/js/214.e25c9a3c.js",
    "revision": "027855eb30cf5e208811686d94877bf1"
  },
  {
    "url": "assets/js/215.258421c2.js",
    "revision": "977396bcfb3db5845bf736e819e4665e"
  },
  {
    "url": "assets/js/216.06981f78.js",
    "revision": "52c65aec803e88edc9a0b99a1da678d7"
  },
  {
    "url": "assets/js/217.be80f8cb.js",
    "revision": "14f7d3747d12bdda73e9e2688be7931d"
  },
  {
    "url": "assets/js/218.c0913537.js",
    "revision": "7a776133ae9a309765e322da27302807"
  },
  {
    "url": "assets/js/219.dd008bf9.js",
    "revision": "f846df1d44fbb43c8e081da7f0c090ce"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.1a905a72.js",
    "revision": "f82219f5c9c1365a559e3b316903a7c6"
  },
  {
    "url": "assets/js/221.566765ac.js",
    "revision": "ce35d87aef8210e482beda449d76be51"
  },
  {
    "url": "assets/js/222.41113e73.js",
    "revision": "7300ccc1d1e4df21f644ed028ca139e6"
  },
  {
    "url": "assets/js/223.308d3f76.js",
    "revision": "a760ec3f3dd72b160890addd8d88039c"
  },
  {
    "url": "assets/js/224.f4d15000.js",
    "revision": "7573bfc4928348a35d43fbf9b2d35418"
  },
  {
    "url": "assets/js/225.aab79c99.js",
    "revision": "17cf884a9640eb5f2c97eb17d5d26ef3"
  },
  {
    "url": "assets/js/226.8049d733.js",
    "revision": "395cfb559bfef27769fa39ce1304872e"
  },
  {
    "url": "assets/js/227.f311ac2b.js",
    "revision": "ee06a3421769fabe7f4dd32d3cb23849"
  },
  {
    "url": "assets/js/228.929bd79b.js",
    "revision": "8d1bafc219daac214239e19efd978fdd"
  },
  {
    "url": "assets/js/229.76fafedb.js",
    "revision": "a9edf8e75d1929b851d91a4480959af0"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.5ac33b15.js",
    "revision": "fc4ebe23d79486fdf3e8e386c6d24a5c"
  },
  {
    "url": "assets/js/231.53328381.js",
    "revision": "8f6fae5dff680c1579ec9f09e58d18b3"
  },
  {
    "url": "assets/js/232.cbba7e32.js",
    "revision": "86d0977ba036fec518094cb83e3d1ef7"
  },
  {
    "url": "assets/js/233.4e56e4ee.js",
    "revision": "b804f2536f3837bc7bc4f0de9cfba236"
  },
  {
    "url": "assets/js/234.2fe18e69.js",
    "revision": "9ddf15548dcfa7575b60fa63f17bb94c"
  },
  {
    "url": "assets/js/235.70f2cb6a.js",
    "revision": "08a9531d60a720c6d34b16c2adf9f181"
  },
  {
    "url": "assets/js/236.1a8dc352.js",
    "revision": "94e76dea12cfc1e86e9f87014dc2a20f"
  },
  {
    "url": "assets/js/237.ebc36f5a.js",
    "revision": "de534c039475dda2a24c32924e87093e"
  },
  {
    "url": "assets/js/238.f7e1e455.js",
    "revision": "7380de681c1ad84a9dfe7d9734e17246"
  },
  {
    "url": "assets/js/239.b7bc2e45.js",
    "revision": "e7a63b40709f627848c61e93dc667031"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.2598455b.js",
    "revision": "b2ed6ebfa2af07e1684c91894442f285"
  },
  {
    "url": "assets/js/241.6aaf8070.js",
    "revision": "7d51dae52a42325189dccff01bd3d4c5"
  },
  {
    "url": "assets/js/242.c833cc8b.js",
    "revision": "87d10627b19e46abb9c2a0eb1da200d2"
  },
  {
    "url": "assets/js/243.93de2142.js",
    "revision": "c1f50df1b9cebc0f8cb62dd18def0165"
  },
  {
    "url": "assets/js/244.692543c8.js",
    "revision": "43ee6ad7adc1c63585a2cfa05f739c75"
  },
  {
    "url": "assets/js/245.5a20e376.js",
    "revision": "5daa8b95955d39563f7157302ff2b40e"
  },
  {
    "url": "assets/js/246.59892eab.js",
    "revision": "b3b66d54dbfda662143460edc01cd7fb"
  },
  {
    "url": "assets/js/247.33fc60dc.js",
    "revision": "08a20d6dc7b09d7cc3de6d1331fba7ee"
  },
  {
    "url": "assets/js/248.65dbdcc0.js",
    "revision": "2ed94b43ef1ab2925b5d09d05a198034"
  },
  {
    "url": "assets/js/249.6f5d10f5.js",
    "revision": "f37feffa6019db2451303927790dc56d"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.f8468904.js",
    "revision": "8b48c2080a926303b97d085cfef346bb"
  },
  {
    "url": "assets/js/251.908f1a08.js",
    "revision": "20cc4e585b105195aecd178d46fb91aa"
  },
  {
    "url": "assets/js/252.f1bbcfd4.js",
    "revision": "1cf6e44cdd66f4e644c16b8a484a84f4"
  },
  {
    "url": "assets/js/253.87f59b7d.js",
    "revision": "2e3864205862d7fd973aca68f02503d3"
  },
  {
    "url": "assets/js/254.2691b302.js",
    "revision": "ab29ca87ee31656d5b66ae1d68aa50c3"
  },
  {
    "url": "assets/js/255.45cd5e00.js",
    "revision": "9635990af80d540f51c3cb881ff34fac"
  },
  {
    "url": "assets/js/256.60016002.js",
    "revision": "e1ede67cb89223311d18955d42caa715"
  },
  {
    "url": "assets/js/257.803fbc7f.js",
    "revision": "bc0fb12e9862c173082b0cf70ca1a11e"
  },
  {
    "url": "assets/js/258.b3488c8a.js",
    "revision": "7678408fa665f961f3a060568178aff5"
  },
  {
    "url": "assets/js/259.c35bc985.js",
    "revision": "869824021efc86a3f540c177c54952f7"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.cea4e086.js",
    "revision": "7cebb1ca9259926fa7690a966981cd45"
  },
  {
    "url": "assets/js/261.b682303a.js",
    "revision": "404d84a96e205c586ab563254c033b6d"
  },
  {
    "url": "assets/js/262.bc9ae504.js",
    "revision": "e2a642b8dc8e9f53ef5d8e80a54651b2"
  },
  {
    "url": "assets/js/263.86e35de0.js",
    "revision": "1d45991401173432c8a59748413b602e"
  },
  {
    "url": "assets/js/264.f1cef7c2.js",
    "revision": "f9fb7a593cdfa8738ce2b353836e77f0"
  },
  {
    "url": "assets/js/265.04c697be.js",
    "revision": "2890cfb7abb553a0a56ce8be3fc10fec"
  },
  {
    "url": "assets/js/266.c620b12e.js",
    "revision": "5331de7e862333c4d5d977a710b6e256"
  },
  {
    "url": "assets/js/267.7f9390cd.js",
    "revision": "71c3b3f86af795b8273a78b846c99e17"
  },
  {
    "url": "assets/js/268.5705d5d5.js",
    "revision": "aec0c07399a66f1b7dde7cf4dbcfac50"
  },
  {
    "url": "assets/js/269.fadda62c.js",
    "revision": "552c0a82700c57b1e514e448655402df"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.45b26121.js",
    "revision": "741644e9363d01a6d697db3fb7315f24"
  },
  {
    "url": "assets/js/271.0cfb0247.js",
    "revision": "d481c9045ba9049303653a5cadb9ad75"
  },
  {
    "url": "assets/js/272.a82ce68e.js",
    "revision": "85b1dc6f5cfe7840c41cb1943e725ccf"
  },
  {
    "url": "assets/js/273.599ba4a8.js",
    "revision": "be4b0af9b13a54986a66cde80b807d88"
  },
  {
    "url": "assets/js/274.a68b34c9.js",
    "revision": "c8f818ab0bf7eb8e2c7989701e4195b9"
  },
  {
    "url": "assets/js/275.0817d4ac.js",
    "revision": "d425c3b3e8e657039ab3d3bce05724e2"
  },
  {
    "url": "assets/js/276.f7a24e48.js",
    "revision": "2de1c75bde6a7b14bce6f87be9e702c3"
  },
  {
    "url": "assets/js/277.5e231010.js",
    "revision": "2d6a62a01409b63ceaa203e5a3647152"
  },
  {
    "url": "assets/js/278.28144a12.js",
    "revision": "ae14702a8e4e262d4d738618feb159a0"
  },
  {
    "url": "assets/js/279.d24ffbde.js",
    "revision": "bbe68550b5af2c20ee269390ba76e24d"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.846855ec.js",
    "revision": "d0e9d0f86572c466fa9e16e9d4d6c199"
  },
  {
    "url": "assets/js/281.bc77d2a4.js",
    "revision": "b171364118f41f7cd659ef76182763e4"
  },
  {
    "url": "assets/js/282.f447f50e.js",
    "revision": "1d6d485072124033dafd9259d110369d"
  },
  {
    "url": "assets/js/283.37df3033.js",
    "revision": "14b52f83aa66d5c64de50ed35feccbbb"
  },
  {
    "url": "assets/js/284.ca05d317.js",
    "revision": "fbd176ff32591a62d79ca1e77d1ebe9c"
  },
  {
    "url": "assets/js/285.38a58ff6.js",
    "revision": "a360c03eefd2c912bccd1cee0244bee6"
  },
  {
    "url": "assets/js/286.96afd8a6.js",
    "revision": "863b52ad0dffbef3604f916bb6b983df"
  },
  {
    "url": "assets/js/287.eca05405.js",
    "revision": "95d2408c0c6c765d017dd625847b21ed"
  },
  {
    "url": "assets/js/288.08be3624.js",
    "revision": "697b7887e3644a2799eef62ec0d05b72"
  },
  {
    "url": "assets/js/289.1a70e045.js",
    "revision": "88e5c24b5419f9af4b917eebf1eba33c"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.b0929563.js",
    "revision": "60e0c29e42f02b6408e7caedce0fec77"
  },
  {
    "url": "assets/js/291.120f3c8e.js",
    "revision": "9f96cbcbf13615f1ef535b32f5ea4c08"
  },
  {
    "url": "assets/js/292.f7dd7c47.js",
    "revision": "af00226862ec558d17b4027aea8319bd"
  },
  {
    "url": "assets/js/293.ca5dc3d2.js",
    "revision": "932157f384312280bc8a7cd802895015"
  },
  {
    "url": "assets/js/294.1a0f3de9.js",
    "revision": "ea1ab432d6bd417a2c02840402895591"
  },
  {
    "url": "assets/js/295.ed6c98c7.js",
    "revision": "6e12b985055e8f6a18b0cfa4dcb6e575"
  },
  {
    "url": "assets/js/296.a9ecb75d.js",
    "revision": "e99df6f7ac246677b1e5760dc9981c0e"
  },
  {
    "url": "assets/js/297.acf47c2e.js",
    "revision": "5cdc1a8aa7bd2ca7da1c4496076222c6"
  },
  {
    "url": "assets/js/298.f9114d4f.js",
    "revision": "9f6f5299bfdec7003636c3b1ebe72f95"
  },
  {
    "url": "assets/js/299.4ce99e22.js",
    "revision": "d73c9abdc85d89739c2ba4d0011018bb"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.cb6e2c8e.js",
    "revision": "5455b2542a90f81dc3a19805535bc88d"
  },
  {
    "url": "assets/js/301.5e005707.js",
    "revision": "801e49b8a55d5863d701ef90c1309df8"
  },
  {
    "url": "assets/js/302.f8655b13.js",
    "revision": "cf3c857874891c19601e98f355473137"
  },
  {
    "url": "assets/js/303.5593ae29.js",
    "revision": "c788a24c62f4f36117e67da788904ed1"
  },
  {
    "url": "assets/js/304.bead9c7d.js",
    "revision": "1342ec8eccabdecd998ca791f33f6b41"
  },
  {
    "url": "assets/js/305.9f1199b2.js",
    "revision": "ed9ddd185c6115919be5c6ea55530ce2"
  },
  {
    "url": "assets/js/306.5376cf8a.js",
    "revision": "2c6495c92ce1b81900dbee423161c0ca"
  },
  {
    "url": "assets/js/307.08b55543.js",
    "revision": "72556dfc6e032c6e7978423ac0202986"
  },
  {
    "url": "assets/js/308.6ac3b895.js",
    "revision": "75512d08a7f09f47a83bbbd1766f8c08"
  },
  {
    "url": "assets/js/309.eb1afaeb.js",
    "revision": "8e712fd99d02658f1b75913c3d30ac70"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.c46ca4fc.js",
    "revision": "4c570f74ad4c01034415ca8f97658018"
  },
  {
    "url": "assets/js/311.9ab7a5e7.js",
    "revision": "55842c985b7dddbe38f363a300790617"
  },
  {
    "url": "assets/js/312.0872ad52.js",
    "revision": "71dd63cbcf8f2e487f212793cb375bb0"
  },
  {
    "url": "assets/js/313.08028e06.js",
    "revision": "54cd8d7f1ea139a17f21ca0de01246bd"
  },
  {
    "url": "assets/js/314.02d11b8d.js",
    "revision": "1736d7fcdd6c42b6db8de5a33d1b80cc"
  },
  {
    "url": "assets/js/315.cb46e267.js",
    "revision": "b8bc51e6713b40125de1f3edc99be44f"
  },
  {
    "url": "assets/js/316.a43fc1b8.js",
    "revision": "8426b3705c3e3e5a7d3ad2cfac8e3e23"
  },
  {
    "url": "assets/js/317.f048c04b.js",
    "revision": "f4735cf313f0858db1a5e4e9dd927fb8"
  },
  {
    "url": "assets/js/318.7fb086af.js",
    "revision": "c4adecd3cc089887138839410ead0ad3"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d98ef824.js",
    "revision": "be9d5ed0ed7f08cfa8c58aefa206c05a"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.4600d658.js",
    "revision": "13f17db84c21c7b02109a6d1a10e9bfb"
  },
  {
    "url": "assets/js/41.fce8a83a.js",
    "revision": "ffd58a8bff888cc4c8e88ca39b918d76"
  },
  {
    "url": "assets/js/42.5da2c8bf.js",
    "revision": "1ba8963caac85100e1db1eaa0898b610"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.1619522c.js",
    "revision": "5e41154cc2dc4e9721bca6530ae3fa5f"
  },
  {
    "url": "assets/js/48.ff9fa5bc.js",
    "revision": "6436e035841ca5407f46c370ddc0d3f0"
  },
  {
    "url": "assets/js/49.7b8e50f5.js",
    "revision": "4093247f13c01161f1ecb4017d892b6b"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.72febdce.js",
    "revision": "bd331f16957faec9bf696a1aef872892"
  },
  {
    "url": "assets/js/51.89679c84.js",
    "revision": "380b473f3130597824939708903e5c35"
  },
  {
    "url": "assets/js/52.b2b38e37.js",
    "revision": "86a0e132c312606015f270562f4b157f"
  },
  {
    "url": "assets/js/53.8c8021fc.js",
    "revision": "145a9c5672a26cbb3395a647586a1f29"
  },
  {
    "url": "assets/js/54.beeadceb.js",
    "revision": "ba5ca699fe4af5fa7dbc69a269f5034b"
  },
  {
    "url": "assets/js/55.334807e9.js",
    "revision": "b801c2267a590f7435cee4e79454e5ba"
  },
  {
    "url": "assets/js/56.24877a27.js",
    "revision": "a034121f51b31f21a782093a2a90bd13"
  },
  {
    "url": "assets/js/57.ab790651.js",
    "revision": "715dfe44f27bf1c3b1ee38df1b24f164"
  },
  {
    "url": "assets/js/58.91f066d0.js",
    "revision": "120eef2a9e7dcb7e8d49e8139f7eb45e"
  },
  {
    "url": "assets/js/59.3c810c3b.js",
    "revision": "02b6abe5d1a49bd7711825ab312245dc"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.0f8a257e.js",
    "revision": "1c6c09f6bcb61dae2fd5cae3c805cc5c"
  },
  {
    "url": "assets/js/61.5cf3cfdb.js",
    "revision": "0f28f7fd1785bfa1338887ca8bcb9508"
  },
  {
    "url": "assets/js/62.856a1241.js",
    "revision": "807bb168492d1b69aad71c8e8b8faa61"
  },
  {
    "url": "assets/js/63.faea59bf.js",
    "revision": "0f5f077a5e79968bc4493c3b2b5ee99e"
  },
  {
    "url": "assets/js/64.ca313b96.js",
    "revision": "da7029b98fed5bfa8cf2742f6c1fe401"
  },
  {
    "url": "assets/js/65.ebd99cfc.js",
    "revision": "db0d555a1dc85d02bf575c569a0a90c7"
  },
  {
    "url": "assets/js/66.a862e587.js",
    "revision": "2c36e57e4206bc0bbf907e5ecd51b8db"
  },
  {
    "url": "assets/js/67.dc3439db.js",
    "revision": "8eda9aa774cb53d129246410ddb2816f"
  },
  {
    "url": "assets/js/68.736c4815.js",
    "revision": "2d4675aebadd298e3718caec0956c964"
  },
  {
    "url": "assets/js/69.85988572.js",
    "revision": "966f849c39b8814a5543b297fe37147c"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.1a92af4b.js",
    "revision": "7c62863ef5d727af120d3a687737edd8"
  },
  {
    "url": "assets/js/71.2f6b1a7a.js",
    "revision": "162a3028636e96c98c4b2b9ad5ef9e7e"
  },
  {
    "url": "assets/js/72.a72b8947.js",
    "revision": "b17af7a4703361097cfd1784597f6745"
  },
  {
    "url": "assets/js/73.5b35930f.js",
    "revision": "0d80a85f4737e186e4ef551d1fd70924"
  },
  {
    "url": "assets/js/74.7ada5acc.js",
    "revision": "7519aa6253d96605e3a8d95da0c59f80"
  },
  {
    "url": "assets/js/75.f4c3f6b1.js",
    "revision": "286c22e08b254b07653adc157ad83ee5"
  },
  {
    "url": "assets/js/76.0abdf9c6.js",
    "revision": "fbad0468930a2c678b7e05600ce6499f"
  },
  {
    "url": "assets/js/77.53e016ee.js",
    "revision": "c211671585361db7ba2b7e44f35f517e"
  },
  {
    "url": "assets/js/78.92540989.js",
    "revision": "f493b777db6c8196b1e454e252c0eb00"
  },
  {
    "url": "assets/js/79.f43a5f97.js",
    "revision": "aa3b1158e6e36dc3d4e2ea72ff212f4e"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.bd5a42d0.js",
    "revision": "2a2eafc1aed01ecdb8de7c915e20e325"
  },
  {
    "url": "assets/js/81.2be641ea.js",
    "revision": "958c7dc59ac1e46fdc270028feea2a1f"
  },
  {
    "url": "assets/js/82.f64e7910.js",
    "revision": "6d8e2e7a73a6c1a48babfa0111028edc"
  },
  {
    "url": "assets/js/83.081a9f62.js",
    "revision": "d3a20a197f1f5017023571d78d35f046"
  },
  {
    "url": "assets/js/84.b2c0d808.js",
    "revision": "01ee615e9877f71cd64b3e6055b89a79"
  },
  {
    "url": "assets/js/85.e30a4051.js",
    "revision": "831ccefd3089c4dda98f437d02416a39"
  },
  {
    "url": "assets/js/86.6290b650.js",
    "revision": "f747fb23c754a3265a7d3f978d287cda"
  },
  {
    "url": "assets/js/87.83019ecc.js",
    "revision": "2cd8526b924b4a11c2fe8d2088e3668a"
  },
  {
    "url": "assets/js/88.dde79da5.js",
    "revision": "e30b06f88bf83dc31d12fd9000dc75bb"
  },
  {
    "url": "assets/js/89.b75ae169.js",
    "revision": "5d3ff3184f2b94ffbeac19d64d2da7c9"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.4da6eef7.js",
    "revision": "d8173b9473a0597de582b1f75b8aa5f3"
  },
  {
    "url": "assets/js/91.e92d9531.js",
    "revision": "d78d86f824a715e12abe732113b6ce34"
  },
  {
    "url": "assets/js/92.2d7de507.js",
    "revision": "a8e3ad9e93e9c5a3b0df9e0bb8a616f4"
  },
  {
    "url": "assets/js/93.484376f0.js",
    "revision": "d0b784fd2e38eeda778062dc3a978583"
  },
  {
    "url": "assets/js/94.a5921be2.js",
    "revision": "ab01f21cacddd9f301fd9f9f150252c6"
  },
  {
    "url": "assets/js/95.38937b70.js",
    "revision": "5bb70d88fbd1c681988136f8262bb583"
  },
  {
    "url": "assets/js/96.57145c99.js",
    "revision": "3b802c79cc14e5d003e8d63a6932b7dc"
  },
  {
    "url": "assets/js/97.9def574b.js",
    "revision": "72a65068d1ac9bf672d18b99e6067661"
  },
  {
    "url": "assets/js/98.13398f8d.js",
    "revision": "016b017bbd5ccb2aed0c4116f007efdf"
  },
  {
    "url": "assets/js/99.57b63a0f.js",
    "revision": "42063b8353564fbd742d64be06b5f32a"
  },
  {
    "url": "assets/js/app.4a7880d3.js",
    "revision": "f6926852e8cc18524665b6f7f9b22cba"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "dcc25a3afbcf83cec4572077545ec621"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c2a21d6bb70672546c438b03b901e4fb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "36be060f414f916a447c53945c0604e2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "eb01c8c0090c7772ae9d62d4fad94d1a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4b4b222f74aab09ed2a49c6853e1af5e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d90d13c8b2d8f31ae9ab0528fae20c7a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "50014902c98a51dba9697faffc8a90f9"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "78435c61cd1c670bd8d873a4c13cc4da"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f2c2f6f12f6dcf84b3da94bd9efc3d12"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "31d4f9bfa02db9d17c414990efb43596"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "406f9c21cec79f6b4c93d920f10b092d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "9647e0ab2056be12217a2ade6434de47"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "95fa6c2f7366a2dca3e087b8ec76f054"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "9a54aa30e84f828d363970ec64681841"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "408dc7cdd5248890ba2d5c3bf276141f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "fb558d4f783352933f572200876a0c8e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "95759bffa2d833131330afda4ab4dea5"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "3702ea12a2d2545033c9dc3c57cd5690"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "fe5ba081d06c093b08568d9cd7cc6ea8"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "c5a17e2d86497350b293345135fe5d07"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f982d9a19e0c8499fd657f0c7fa5f30c"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f7c9a26ce6e820e7f41699de296a600d"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "bbc0fe5024ce8c23adf9319ccc387b6d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a9c779d2425df3ae5feeebf6cd755ce8"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "09f6f9b33bdb12cb3a3bad80b7c3172d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "f95dc298fd704221763bc9557b9ad879"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "581dacf58b29e7fca958f5d3f18a9a7e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "1b9addc3b9e1500cdcea7a608ecc836f"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "57d23a4050261fa0b5115253d912b765"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0df11c1c1ca7d8b072c9f5399ba6e982"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8b164b0fde1fb8902243ce3ad8a06658"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "99729108b081b2867d2a43ced36e4a8e"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "60fa2d908df9a2c32dae208df5176d5d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "33a481e068e2a6936fd0bcfd2e483f6b"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "92e372da25fb8601b63dba5d7341b2ad"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "fb92c2cf75234695d9af192d7aafdeb1"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7e0de8486cb19abdafff54af9894e0f7"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "4730842a0576c485a11ae341cf4ef07f"
  },
  {
    "url": "basis/index/index.html",
    "revision": "7cdb2ac148dd59b8dd53829aac165492"
  },
  {
    "url": "basis/os/index.html",
    "revision": "af2280d8684a21bcf28f288d530e019c"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "dacddccb909fb0f7244923b6c57e15cc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1940c88cce3ee166062a51e6d4587df4"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "61f527e54375104a6416bfbb292386d4"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "fd9d2764c195b3513ba3c5e1cc8d2da5"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b7216c9c7c1682b825af10d860f458bc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "dca268d7d454ce5a1de3ffb84c0b2822"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "73752bc78aba1ca63894cdb89eac0802"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7c7c179465f99a3ad745d90c36e7e016"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "7c595cbfb63fbf095813fb3ffd8fe034"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "3d0ec8bada7b1ac51b6b4b9f4b4bc017"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "d9f3ac6229a2510c0750adfc3a3762f8"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "8ae8c9034230b6c5982e03e4bdb00b71"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "6584e97bd66afa570b715b55ef2404af"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "9abec1b8d276cf96dbceb218371eab76"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "cf5c3081520c2036666ac0a9364a2868"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d607f501719a3c3381934b0a695f3999"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "fcf8e67c2e15f6422e5d0da33f76e082"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "bea59c2431c8412ee110fd2740c2dfeb"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "94942ba9b056c892f6ce6e78142ecf58"
  },
  {
    "url": "c/program/index.html",
    "revision": "04bdcc1ba008319d39b624182dd48a32"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "741ea979b393b3307aaedaaf875d4fc1"
  },
  {
    "url": "categories/index.html",
    "revision": "b2cdedb974fdeb8f9a8f2d1ebf415902"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "67c5d052a7a3fb0105eb4788afcf9182"
  },
  {
    "url": "figma/index.html",
    "revision": "58176691d1c1fb7f72760a26abbc2f0c"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7f5deb0fa1eef9ef157921ea901e09f4"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "6c0dc2a0d6deec769bcdb1e8b9b21386"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "b774fe674bb39c7bfa79600762ff774b"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "a4a886c5fdc9df42feca4504fefd9f0f"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "d591ee229c0ceff436b0f085e4e015c9"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "3e4434cf336701f5130995d3d68ab449"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "1b0f21a8782a7a5371c6a6f29fe7725b"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "1400aae6128a93b0e25cce0c41f564e4"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "8ff1b1ba99af3dc89689f7b8b665f459"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "a580e9037aacdfe279c02b341b577105"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "af237dd3b24e1a703bb67a99e5aff8eb"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "97ce22d41fe266f40197c197031857ac"
  },
  {
    "url": "flutter/index.html",
    "revision": "1027a4bf63c18135c256d8f4b1d91c92"
  },
  {
    "url": "flutter/point.html",
    "revision": "e2bb9080371d1f5048c842998dc12f73"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "4d8753f0b24593dcd83c55da7a53fcb1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "345cd6f5bbf0583f5edd740c48d54adf"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "02136deba7b2630906ce0c19fe8f5ae6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "868f1335defbe823dd0b0ec8c97a92e2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "84c12bf2dd25037629e8c7e146dc0696"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "169f34ab4752a5b3fa023c24f793f450"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "dfa538005e92707fa6d0a2f07524e3a5"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e8e88fb605c363eb1cdab40038baa1fc"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "182c249a49b55021a789ea1b7a16fe76"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "7c246eb9ce71132b44678cd25db52ac6"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "9278397a65e2c85677c7bc4ac8e7504b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5426fbd9d1086e02bdbfa1a727881b9d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "1f1d853680ca442bc71cb24552cdf26f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "ef86e6be4c7385df17d1b7407330ea86"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7694cea54ce00c9821109e38f5f6000d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a9a70e762de675e73dfcc86039fdc9bc"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "10dbda621340df8d125c89668e889181"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "04d165dd8e8254b86479d860af5694e4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ca9cc21dd3f8ac50eb37b523f497b2c5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "ce5920c925c027ddc94b5079dc86a7de"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "dcc40b3969eabfdc5c71495d519fdd45"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "8d5e442caaa3666c5e3701e466afc6b9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1a7b5cc4a7edc7354076375783550089"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "fd1f0761690302f9e9588fc1dfe39d43"
  },
  {
    "url": "haskell/index.html",
    "revision": "6877f7283f180aa15b088f824c89a30d"
  },
  {
    "url": "index.html",
    "revision": "33af2ec0ac78b587e114fb7c00f9e3f3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "baf8694d15f22e22eeafe7f129eed806"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "4f1f30886b34498a3f0d7ce9a805b000"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "530ee962f699c69962e77e663a82c726"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "3d5deb896b083d1536827c99328f1d15"
  },
  {
    "url": "python/index.html",
    "revision": "4a43031e0ae9d75461fc17421ce1a345"
  },
  {
    "url": "python/python-ase.html",
    "revision": "92c5bcce90cebadf5f322e74cd869bf8"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "74e8d822543bd0881095b5b8d882c3d9"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "458400eee0445375fa1e9cf932fbbd14"
  },
  {
    "url": "python/python-file.html",
    "revision": "1fb3de8ca4a61a67d7bd51c78c581bb0"
  },
  {
    "url": "python/python-function.html",
    "revision": "54fdf9ea3e117a5f8766235f4d69c50f"
  },
  {
    "url": "python/python-generator.html",
    "revision": "6b526ac40ba55a6a6766d3b32f718193"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "70d3750e0addfba47172b180e4a0e26c"
  },
  {
    "url": "python/python-module.html",
    "revision": "aabcdaf47f5f0f533ec2b241a974d782"
  },
  {
    "url": "python/python-string.html",
    "revision": "12fe08ba6b79b353be7ffde2da9b4ded"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c5f9830fc2324ae124a24f4572e484b7"
  },
  {
    "url": "read/index.html",
    "revision": "2ff6985c2c531639bd4f545d04b77fc8"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "926ac32c40ff80a00d02ad2e9db0a4a2"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4ff6616d46ca3b72f570197fe697fd1d"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "edebd38d0316fbb93b1a82fad6dda201"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2c8215b2f91e80beb1293cd8c831736c"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4f4a6fa275a2ac5f93546c0687a259ae"
  },
  {
    "url": "swift/better/di.html",
    "revision": "7b5975f7f49104470b63761c7d7caa03"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a0c3510813ac12a2cd282c064e18f0e2"
  },
  {
    "url": "swift/better/last.html",
    "revision": "772be8f7792d208338c18a82fec82b99"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "fc4e78360c47279f22bd3e48d90fda32"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e896fbdd9746b6684cc1004ff13ad920"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "e89dafdfb81d0e4789bde2ab6d61314b"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "3bb7c3c2253aee1f02ff30f50abf1855"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "ddacab8d252d06ddff4c7d0aee2f76c0"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "696e298e6ac07a7016f883f4d3968235"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "33098197c4a7b1d335e7a600a5cbbd1e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "c5515404c9d8552ad7caa4c2d2144c29"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a4a68e79d7ff2ea572d35540ca3e9cbc"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c80086590ea3415026c32e6d22045a40"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "b5b01a4d1e635512d383f797f95b5f53"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "614643c8d93966ee90eb271d77170dc9"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "d4ef9efeeb12473776ab2c588d2b7308"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "f3ad6cd3f90b0d4fd1905c9915ae3539"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "578d9f8b62d510d16b8acc0a3bd0c7b5"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ef8025d40b97869e312ef5b127746de7"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b1ca153fdfbf8d8baa6e2c9e45b29bb3"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "1af613f209ef9a57c4780de845940b40"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f1aaf9f2e32b7cdf221c674fde7f3878"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "108bcfcaa885b36a5bfc32a4a972ed2e"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "c7897215907d7991f7917f94e77a8eec"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "40642d8a623c9312c4fc8a7231fd6ff6"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "bb8c647b5e7ca29a3e4a98cdae3db5c2"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "c9744bdceaa88959894a399e872f6af1"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "921c7d71e92d69e811ba2dee4fc5c7df"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "e4638297113e7da18943fec212a6fd4a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "1fb383bf433280ac60b68f783af0837c"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "878b63684f2c4bcf1903b33ece4e52ef"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "d8928a32cf0bef5c90fa1aa34608bfa3"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "b682cf05fb4e1995902f4ee1d6f77ec9"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "3334aaa30e66d7340598cce3bdc00b67"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f952600f3a3681546b66feb6dc7aa191"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "4837da908832985acdb5ea8c470645d5"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "4abf3bb1979c9f4af677802c54538732"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "02a36d56069eb626e9cb89184ca6732a"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "6445e46960d98cff00ee026cd842d908"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "0a2b01001b3854cf8b8ffce178db0da6"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "3b5a895cf8d4c3362f761ad748fb8d15"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "96610eba36d3144d0d39932bfd2c91e8"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "249f2dfccf74fb2b2cd73205c92d8777"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "51d82f89e84d9fc1af9959ad68607f04"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "0a4491440e83f4434cb9b96f6a4bdf71"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "9c5d02c3b605520da0e1f11578a4a396"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f14e2391c779157a9200aa07603c2b91"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "10a341951e0fb57cb8b33e563b548040"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "3996302661ce8e6a19d56f4828a65f26"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "1d1e3d60622286ac6c588d1870194280"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "a84204b6d089c3b0a3bbaf1e4f7cfd84"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "05a60314a9f90d09a9cd0acddda14c67"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "32350f297cb0fc125530cb4efa41e7dd"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "80b55035f4eed2f39b38bda632e74978"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8cf235e0e04373e5cb3bd5d5dc8624bd"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "384531ba641f9a344b0f4f01ca5890af"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "5e18b48e241bc284085595c2189257d3"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f7ab0a64581b8e4a417caf82ac799ff4"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "b1be671a97affeb82ef7805965abae7c"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "96ea274eee76829c186fec382cca6cf0"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ff7d9b1bd59d8acaade7c57519c66edc"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "55be07644a2d20f6a0097b7356b0963f"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f48765640ec96c7a3cc60d08ce46cdb1"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "bb5345f3fc922adb161f8399af04c8b7"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0798a437888ed61b0092234dfdd73164"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7c42833f661b5c2878531980efd9c125"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "9bbef63d0fcb660ecae17e4a9486d88c"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "b0935a50e058d1aed2df2d5194ca3256"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "21495363aeb7512a2b73f5ede8eecaa4"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "a6eccc09f65f291dde4be06de9c13a8c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "836e8b8e1af04a114689175757b818d3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d6bcd58842b236177666402c58b4fc8e"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "404db589eaee7c2d0c00e82a1cd0aab7"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "c296411aa6c39da615c527fab81218b8"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5942f8e1611e2a230a21cde2ffbfd7c6"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "4d6f1cd43c94e48ceea02d4c47c0b8af"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "9be7b3948fff2cdf5c3bc2bf9ac2bc7f"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "37e4741a897f36d03b238432c4ef5c94"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "1664375093e42c8a6d6c061c1e1ab11f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "aff71fdd0e26f7779b36081acd6a84ac"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "bc7a875c9499972b96e6212aff295222"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "1f174f543b6b5afa046c300dbf66a29e"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5e5f259fd6ba9597b5e27d0d35cf2e3c"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "cff95cf232bce6439cfb5ae16e3da87f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6fb019b3750f1b366b5b1422ae676b71"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "96abb35f8edae90693321f0b4f6467ee"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0ca5e708f628561ea02ecdf14212cb07"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "aad6aed475feb7fdc4327f5dcc7ce288"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "2f8442a6c1767d8c664c34945b72d35e"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2a003e9f0cb7d773082d7e161184968f"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "df189390a80ed610c9c274dbf9d09a73"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "93250a0dd1472f1218d728b2aa342785"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "b97a695d68d648242fb4fe7ada37977b"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "d434195ecb4dfbd65e67098b26911975"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "ae9c2758a77029caec4ea12ea27d5f86"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c13353a14f7aafeb5fffbeadb5cac609"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7d499b14491c534c0c8451612a9673ec"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "1848b545c6d371f47d225d802a3661c9"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "782d5f2a127d8354f82d949856d3fb6a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "2e74f25850fa3d71adbd4a231820d96b"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e446883c4e53ffba476e62586bffb19b"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "444fe7b1731d2d82c45858f15054cd63"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "1d026c377bae674ab73c39a83d105ecc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "34471888ca67f2cc1bef2bd747d6d864"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "d84e94d4f31e3d641eaddbe95de86bd3"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "bc0de195a96fab1cf8a759b1b0b29052"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "1a10764b038802204da0f26e98514a62"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "40812ddfe68111b9d17f294d282ee05a"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "b6029ec96e191a61e75b59afbaad986c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "5323f4655b91076a0525e0604d976891"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "0022dd4012ba0074d11261add565a058"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "29a4c92040326e04c3ede69ee640a85f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "fb37a220b69e2cdad99d1a0df2c9798a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b3473f6113b9196a01699dc535f39037"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5a74ed47fa147489542fa64d9c708163"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "34e7b83856b2257945d9de2a27a660bf"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c944b38d526941708a2a65fb0696140f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "9918fcdbf7e686c23561cebbe47fd095"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8e2a251f669fab49926f39ef9beac440"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b83fc9b2b949c7ef602a1628ee3c6553"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b3949069df98c872ca934f74d31f72ee"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "690a11a17c0db0805ff1351537978481"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e886b6e8da0cb24bbcbbbf8d53ac74e8"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "9843a99d37f36f5dca52ef6067912d16"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0cedf076ea205d9127ef2f3510a5446c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "abc9505c4331605168da7976f7971947"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "0bcfa9d630f750b90453867f888603de"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "149d60e096b2f52eb5f7f2aefc64c8e7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b8cb0b5799a1d9154885adef8ee1f8e5"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "4a74cd056937d9d141a8837bb3da3eb3"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "b23892e49c8a65b598f6070c15df0704"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "75161010b4880a02c566826a45e8f7ff"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "9f940ce192685daf265213fd058a182c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "c798b7727004e0c661ae237e7fb900cf"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b781f8062d646f80613628b16b4e2efe"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "0d7542aa16f23db7bc22cf78aa23a676"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "7da0fb36de6c23676f02242b3fec8b50"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8a1b2d239fc4443f867b8dbf7e232489"
  },
  {
    "url": "tag/github/index.html",
    "revision": "caede3e018f4bbfc23f7b85db5923b10"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "28624178a8a412d3387e3a8c30d00ac9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a53cd31a3acb61bcb97f5b3619bf60de"
  },
  {
    "url": "tag/index.html",
    "revision": "626069a7264d0a102be938a1c84188d1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "7b1fbac6f5848a1f9c1ae3df34de2500"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "a38de54cf4580d6b2b3f06da20d8f6cc"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "9911ed83d36ae9bbcf0c09ac4b581e2a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "82b13aa3c88166da1d4a69e02ded84a3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "337dda13d5a3ecb670414b6ef6735169"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "94872673b9f6bd84d5c16d3c0394864a"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "1b5e36f5151e0800ff7c325396f02375"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a696be5cf6d42d43b4887f5d2a9c09e7"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "58655a1e5ec93fa7d57e1f8e03df167f"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "e6a73ef29c2609f8b489211b9eb370cf"
  },
  {
    "url": "tag/json/index.html",
    "revision": "5431a9e8548fd62480a7fbc5e08dbe14"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d4107e891f9fc458096497c9e6c53e00"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a82cc8e5c40bbfb5f66791662d30e052"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d595b8da0b9fe0970d492e8f04eaadb1"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "58a9750738b04b59d5be43572c97c954"
  },
  {
    "url": "tag/read/index.html",
    "revision": "78533c07f53fa3b003f9cd63675ba0fb"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "72a35ad5e036e796ab53acf80bc0cde6"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "8e30ba3157a8d3971b71acb371e165be"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "55836f2cd0d92426cd9d366225f0bf77"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "b71d43b80cf0ffc52d62a5b11b8f9c54"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "dec74427cefd44348b8c02dc2cfe97aa"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "e58c04ca5719cd1b1d931b799fb92ed9"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "6a46f1efdadf8cb6175b3b78bcd25012"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "6b46d65286979b87a2ddefda0803eef2"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "0978a4648eaa389130a26c176cd81807"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "28a413e4790e43005b69185996e9bc5a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "858f5e059a7d79e5a15e690dbc3f5afe"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "607fa5f6efb6e09daf823410ae49bcdb"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "db0fd892c9316c70d568e90827de7ed1"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "031f0b936933ea293293f6a917e920f4"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "a89824ebbd1121e845aea9b4e713b6f8"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "01e723e9c8afc0797dc68c4ac1dd6214"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b4a14610e7d52e6f5bf27a4c15003d7a"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "7a0a72ee630849d7fa116e3a6533bef0"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "b0c8f8d42dbbfa917f33fcae6b35622b"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b55955304ad3110ef13c4f2ddce8f3f7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0b9a9c71e611cf01d5790e8854cb6817"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b66dca0d64c172326a81657634d7d895"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1f6d6a7a4adc76448a2a6b95fac91254"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "2833d98ff680a862447aa51b8652b848"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "915b0d153bb51c92bbde3df61aa2c7f4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "492cc6f206ebfdcdcf1a756304726627"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "8b0530b21aea773ae9da7ca2cdbd8c60"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8c8140158644d8e0492ff096f2dc220d"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "27e7fa5ac6e7f53b198618cf05609281"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "826942fcc4fb61820eec9f9364f34cdf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "04f32135bd36847a3114689f335b137d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "305f8bdcf611ff0b1f3413c82dc02a07"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "fd2453fc9f4496fe099f9b029c393c0f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "a63dcb8d25b426b4d88603761f3b98cf"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "162d9f8b5e583c4d43f617a42ce67348"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2810523d24db3177840df6aa72ad9726"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "7c5d07f886d280a3268b84b527532a4e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "c73c02212c01e5b361d658fa7e2c152b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "418f0a223c6a0dff33a7ad614fa0f429"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f17d0486745d3a199f1f7866dc726656"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "c7e1623c927c6e29fd3d938bd4fdc0b5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f7ebb646e774cc5480b83c71be1c1948"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "2e9815c59b48a105beb12b0c32a0babb"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "473389e9bd9aec5efb06af4df154b13a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "03ab4f0405e4b4c7d4a2046928c94ccf"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a5420cc52e8fc01da4ab01d7522f6767"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "039c99489bd37890a6d0abdd66fcfb85"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e938764abd16ec38ce8c3fef9b591c1c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e5935aa85a34d62d6894ee8fb1c9d89c"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5fc6c6423be1f860527bbc8d679e2a2c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e047e90e7fab5c3cfd5f8ebdd38c0193"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "6c23783b599ac8c38b2100c741d4e031"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6d1fa52d500c00b181b8f6d41874699e"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ffcec75934faa25ac8d1f879c26042d"
  },
  {
    "url": "tools/docsify.html",
    "revision": "12feb144d0cf96c25a2f8aef60131cae"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1f280e20787f19ddb7feb7546b2b4397"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "9fc80ef8be06dc1e3086a0e0d082b6f1"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "e79cc4097a77cd4bf4907a2ebb5e9d5c"
  },
  {
    "url": "tools/git/index.html",
    "revision": "df00d7007cff36f6f6455f75131c5d65"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6e548e944566802db9a9558195a3d5d8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ce2488fb9068af8c751b95053f181d98"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "d35da4b4f5204409980158b9b9e346b8"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3f4f5b27eabf0ad4f7a9dfe99c0fcbc1"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "d73fdfa56671b28205a824ffffa1ffe6"
  },
  {
    "url": "tools/note/index.html",
    "revision": "405bad14a67bfc9bf3ce4f9d7341361f"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "d8d6b2a6c3ce03012017d9eca5159755"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "91359281ba1a04dbcaff9d470aae2905"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3142769d8edf909c73460b333881cf33"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c225c98232c5c8f3f84eac9d5f9cad81"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "31a3a845b32d3f7f09159135bc2a8697"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1d31a46f4ffd2bb235756ab202314381"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "83a7ddda6b7292538b5b8d2a2f54ba6f"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "72fe20ad35bf21435569dc49881e1873"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a0940036318ca3dafd9e06ae6c7c7d25"
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
