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
    "revision": "9f3465e024de806f8aaf834ca376a03d"
  },
  {
    "url": "about/app/index.html",
    "revision": "7ece4a0db84edbdc63852ea65f0c8193"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b57582a1fd12d10af6f71979ffa2eb3e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "de3dd0223d4a5123b5079c4af74c1894"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7301ddce46c3641c13d43117b59fbc4b"
  },
  {
    "url": "about/index/index.html",
    "revision": "0c7e42ded3cdc2c6317e5d1a07393fd2"
  },
  {
    "url": "ai/index.html",
    "revision": "b68e0c13cb361a0f203588818cdd36a4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "b1a95608d2c99fe5dceafb83784c74dc"
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
    "url": "assets/js/1.5964dece.js",
    "revision": "48529d0751226abf8bdf8838eb0a1898"
  },
  {
    "url": "assets/js/10.ede335fa.js",
    "revision": "b1070c08cecbb974b9ee097c125fd17d"
  },
  {
    "url": "assets/js/100.4ce9f105.js",
    "revision": "6f9ec603260fff587401c51e8f07033a"
  },
  {
    "url": "assets/js/101.9a08cf8c.js",
    "revision": "8afcf7fa49956882cbfc397a4ffe809a"
  },
  {
    "url": "assets/js/102.121acafe.js",
    "revision": "180f9ef8e89849ec552f479773eadd7b"
  },
  {
    "url": "assets/js/103.06c620af.js",
    "revision": "5db991cd991ceb82864e678c5c284bea"
  },
  {
    "url": "assets/js/104.a1355f1c.js",
    "revision": "f049cf4be04128aeab0ece36708aff40"
  },
  {
    "url": "assets/js/105.794741b4.js",
    "revision": "0409c63f9fced7206b0dea1c598fe171"
  },
  {
    "url": "assets/js/106.71924fb8.js",
    "revision": "dc97b0a15b40398996b4d2e857564171"
  },
  {
    "url": "assets/js/107.1c7bc28f.js",
    "revision": "eefd961ff053eef4e05a40bb0a46bcf5"
  },
  {
    "url": "assets/js/108.5d347a69.js",
    "revision": "ec129eb9fcc5ac776dedf819d3b07eec"
  },
  {
    "url": "assets/js/109.5c70fe44.js",
    "revision": "ce6e386838c6bc57bed876a09acf5f1f"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.cd795de8.js",
    "revision": "91238527eaa7465b9a0385d678e7b7fa"
  },
  {
    "url": "assets/js/111.81fcd73a.js",
    "revision": "a0f770f398a20d03ee024d15a1fb151f"
  },
  {
    "url": "assets/js/112.8d4d1680.js",
    "revision": "7859deda69070bc50135503a808cfc22"
  },
  {
    "url": "assets/js/113.23085d97.js",
    "revision": "e4b54e9ca608b8678c96337d4d23f35f"
  },
  {
    "url": "assets/js/114.c1a012fe.js",
    "revision": "495c1c823d44e5573da5a2346a4a0a3f"
  },
  {
    "url": "assets/js/115.b1ef2117.js",
    "revision": "3e0dfebd3038ad0b52a41e5d7c8cbe7f"
  },
  {
    "url": "assets/js/116.15a0aaff.js",
    "revision": "d46d273f18ec4fd5d623450858e5c212"
  },
  {
    "url": "assets/js/117.d644618d.js",
    "revision": "70dd777b2da56a4e639f926f99012669"
  },
  {
    "url": "assets/js/118.b0d3f7c1.js",
    "revision": "991e8ea894becba5c8e8409e06289b6d"
  },
  {
    "url": "assets/js/119.c4a7731a.js",
    "revision": "d1b2824cbabea67982b26221bf8c7f96"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.d524bf2e.js",
    "revision": "b136c37bf1a564ed0660f07d43d30670"
  },
  {
    "url": "assets/js/121.28cf8f99.js",
    "revision": "87b482ad3fc42faf680b7d8843c210c3"
  },
  {
    "url": "assets/js/122.450fec83.js",
    "revision": "2229e50c469a9c0d19086c81c003c646"
  },
  {
    "url": "assets/js/123.deabd526.js",
    "revision": "6e1c83fd05ffebb0d9e13408b6fc0d00"
  },
  {
    "url": "assets/js/124.113af7c4.js",
    "revision": "c26034d0cf40cc0db13abae8a5b02616"
  },
  {
    "url": "assets/js/125.3c4ac75f.js",
    "revision": "2f5aca9211cfdfc6bdcf2fb729d13255"
  },
  {
    "url": "assets/js/126.33c33de2.js",
    "revision": "7cbdec1285cc0db7d7d0feaedb73fca8"
  },
  {
    "url": "assets/js/127.df082656.js",
    "revision": "e1d01dd910964cd37c4cd6eac97246f0"
  },
  {
    "url": "assets/js/128.268351d1.js",
    "revision": "5828167ec6d87a794077c0a91b5b6692"
  },
  {
    "url": "assets/js/129.29a7c81f.js",
    "revision": "f156994fd8ac40a3b1024088ff443ec9"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.9823ab4f.js",
    "revision": "4a9e28939ed84b16368936864e04073e"
  },
  {
    "url": "assets/js/131.f169226e.js",
    "revision": "43a49d9887349ee9a4f9b1b368b5c26d"
  },
  {
    "url": "assets/js/132.1e6f1bd8.js",
    "revision": "f76bff64e029fa60619a3aef677e0f71"
  },
  {
    "url": "assets/js/133.dc23a8f5.js",
    "revision": "8806161041df37127b1489e0e84b086a"
  },
  {
    "url": "assets/js/134.53d19f28.js",
    "revision": "6e30db6594fc97b206b685679dc77705"
  },
  {
    "url": "assets/js/135.8c31e57a.js",
    "revision": "d52af69fc64cfbaa3dc9fc006d70e79f"
  },
  {
    "url": "assets/js/136.7e15b1d8.js",
    "revision": "a03eaff398d4ab8c676022dcfbdce612"
  },
  {
    "url": "assets/js/137.5880c4b4.js",
    "revision": "98e9aae9609e8cb162000f49abae2791"
  },
  {
    "url": "assets/js/138.5b8d8900.js",
    "revision": "40eae1c85a10e11b317f395c43f85a91"
  },
  {
    "url": "assets/js/139.c20a27d2.js",
    "revision": "58ffc905e60b6c9d022e6e0b4dac9e62"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.c00fb676.js",
    "revision": "5ffe603b924bae3c754b4f448661c5a4"
  },
  {
    "url": "assets/js/141.eccabf58.js",
    "revision": "b207f70a7f22f939a97ef9faae00f80f"
  },
  {
    "url": "assets/js/142.134fbf9c.js",
    "revision": "6c2c929fefccfb88d5dffe1fae3d0c3a"
  },
  {
    "url": "assets/js/143.807c8c13.js",
    "revision": "58a400053c526b5098260c7b104ae1b2"
  },
  {
    "url": "assets/js/144.e11b322f.js",
    "revision": "91e8e12cfc2f1f541ec5cb8ee6457379"
  },
  {
    "url": "assets/js/145.2738a7bb.js",
    "revision": "6bd6a18206f5316eedf43c9746c31f74"
  },
  {
    "url": "assets/js/146.a426fdef.js",
    "revision": "1ab9b28dfee6cee098a4d50a3127bd3a"
  },
  {
    "url": "assets/js/147.3b0a7532.js",
    "revision": "decd85efc4aff92674e9873e9e600aab"
  },
  {
    "url": "assets/js/148.ad22fd8a.js",
    "revision": "005cc9109c4f87fb299a1d6091507478"
  },
  {
    "url": "assets/js/149.b2f666b8.js",
    "revision": "f23b66654663267c3fd898ac7a3f3fc4"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.2fb73cce.js",
    "revision": "a213fbbade9b7dceaf7f456fb1d74466"
  },
  {
    "url": "assets/js/151.d729ab14.js",
    "revision": "ecdae20d7af3d2298c8c830fff3209b8"
  },
  {
    "url": "assets/js/152.fc9f7515.js",
    "revision": "4b8a1c706a49353f7a3a63e6bfd451e0"
  },
  {
    "url": "assets/js/153.8bb383aa.js",
    "revision": "ec033d106ffe5ff487ab54b55bc70d20"
  },
  {
    "url": "assets/js/154.6dc8b3cb.js",
    "revision": "568f37114944cd83cdaae2dee6668284"
  },
  {
    "url": "assets/js/155.3e680071.js",
    "revision": "eddb4eedd18c42be0890cdc22650fc32"
  },
  {
    "url": "assets/js/156.905198c7.js",
    "revision": "42df05c2fa7aac2e44e8a276ec4ea9f2"
  },
  {
    "url": "assets/js/157.c646d1f2.js",
    "revision": "6b172e4f9540e79e33e438e00eb24274"
  },
  {
    "url": "assets/js/158.b91c476e.js",
    "revision": "1c19ced2e680fa2b305b67d214fca3e5"
  },
  {
    "url": "assets/js/159.50982e70.js",
    "revision": "8a11e0b66930681f8a61470639b13785"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.41a99a0c.js",
    "revision": "abbbd4847b250fed5a219d5fd3c89cd7"
  },
  {
    "url": "assets/js/161.d1ede054.js",
    "revision": "2e403e0c84721d8abf61658e0aa1de14"
  },
  {
    "url": "assets/js/162.2bf2f2fb.js",
    "revision": "3dc4fe6ab9394a2362c949abeb069295"
  },
  {
    "url": "assets/js/163.15c0c932.js",
    "revision": "1ff9c3618a88ca089879160b54eb4ffa"
  },
  {
    "url": "assets/js/164.e04b469e.js",
    "revision": "3d4aad5d2b3846b4f54b4ead79cf7116"
  },
  {
    "url": "assets/js/165.ca624777.js",
    "revision": "321fd996f53689abb94de9c0136a5378"
  },
  {
    "url": "assets/js/166.da89777e.js",
    "revision": "a79ff1d9e78f6258660d4c4171c46857"
  },
  {
    "url": "assets/js/167.32e88057.js",
    "revision": "5fab9d76684ca4479b29d6af7529450c"
  },
  {
    "url": "assets/js/168.a7d283bf.js",
    "revision": "2af67d3094bb44e53593fb8cbe61e228"
  },
  {
    "url": "assets/js/169.88839740.js",
    "revision": "96a62bf3990f4c6976a813ff0fd02993"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.b6274059.js",
    "revision": "a837f2e69cee38141769ba87c4862782"
  },
  {
    "url": "assets/js/171.f8655cde.js",
    "revision": "81614303c8c4b015f77f299d224c27c7"
  },
  {
    "url": "assets/js/172.32890660.js",
    "revision": "55606fc246b94bb709434560a3497f98"
  },
  {
    "url": "assets/js/173.546cd9d6.js",
    "revision": "3da044a7d3b3a375d5c4b84daa632bf0"
  },
  {
    "url": "assets/js/174.85d27b81.js",
    "revision": "05ed599e256dabe0ba0a5a0e71866c5b"
  },
  {
    "url": "assets/js/175.2adecc39.js",
    "revision": "094b1633af96fed7a4427ae93be43d77"
  },
  {
    "url": "assets/js/176.640005df.js",
    "revision": "33a66e5a6a80f1b71d29240a9f48c76c"
  },
  {
    "url": "assets/js/177.585971a8.js",
    "revision": "64f4412bce37009410bbffb3952f7445"
  },
  {
    "url": "assets/js/178.e898cfce.js",
    "revision": "e31d90fbda0825c06b39f2e3cdae5e6c"
  },
  {
    "url": "assets/js/179.2eeb68de.js",
    "revision": "5b6d612bb9e6ae00d349d9e8a875efb3"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.cfcd9306.js",
    "revision": "ecd6348a66b4f85231f91c5522aeef6c"
  },
  {
    "url": "assets/js/181.0e35dea2.js",
    "revision": "4d8b54f53b5600302eaecee1198a4128"
  },
  {
    "url": "assets/js/182.b59e70fc.js",
    "revision": "13528e5fa0dc0dda34417ab27799b7fc"
  },
  {
    "url": "assets/js/183.8c67cb97.js",
    "revision": "94193eea8a2a7ecf373756b43c371937"
  },
  {
    "url": "assets/js/184.4622dc56.js",
    "revision": "33b4d4e179b2b90565b77b8316f01a83"
  },
  {
    "url": "assets/js/185.536b99af.js",
    "revision": "9044a7adbf2fdbfbb5dd2e5c1e97e239"
  },
  {
    "url": "assets/js/186.19ab16ab.js",
    "revision": "af82666f490989d7e64ae313808bc7b8"
  },
  {
    "url": "assets/js/187.89b346f7.js",
    "revision": "1a22d640994e2fcee0b1a7322c4be684"
  },
  {
    "url": "assets/js/188.55e2aec5.js",
    "revision": "18d365157e30c73412f836feb07dc7e0"
  },
  {
    "url": "assets/js/189.409623a2.js",
    "revision": "e63540ec11ba722ae171c94c3ba5c332"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.fa5309a3.js",
    "revision": "81c363c399d97a313dffcdc0c6fe57e5"
  },
  {
    "url": "assets/js/191.86652c9b.js",
    "revision": "a3f81332755f9db46092d31b3571c827"
  },
  {
    "url": "assets/js/192.3155b21f.js",
    "revision": "65b5648f3768e6e14d3e987bdfcbf654"
  },
  {
    "url": "assets/js/193.1ee66183.js",
    "revision": "90603ac1a34c140878f3344b53f5dd29"
  },
  {
    "url": "assets/js/194.b8d44901.js",
    "revision": "cd475833aa45b10667464d7cae631300"
  },
  {
    "url": "assets/js/195.b1f4e173.js",
    "revision": "b59ae2f23838b8fb34517d5facd14491"
  },
  {
    "url": "assets/js/196.0af2c525.js",
    "revision": "197cb9047e100d67b9cc32d0bfb3cb01"
  },
  {
    "url": "assets/js/197.b253157f.js",
    "revision": "5ae973c7fb16ca0e778f4dd23def1f2f"
  },
  {
    "url": "assets/js/198.6fc9a253.js",
    "revision": "e8d4478f51d826050e27e25c2f87cbcf"
  },
  {
    "url": "assets/js/199.c8c4fd6d.js",
    "revision": "2f2c5ec1e4de9c0974802964d8565746"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.a29601e7.js",
    "revision": "dd10e99c6b3a3d6b017629abff361515"
  },
  {
    "url": "assets/js/201.00420a66.js",
    "revision": "1a2bad037e8461d404dfa1825b1a229c"
  },
  {
    "url": "assets/js/202.2efc126d.js",
    "revision": "ae3b36fe7456d24e93c5a4056d310ccb"
  },
  {
    "url": "assets/js/203.d0b1699e.js",
    "revision": "9d8b2b2f29f26ab4fddfdae5187d9595"
  },
  {
    "url": "assets/js/204.5224be95.js",
    "revision": "8ed8612e985c6f9bee9201586a025d34"
  },
  {
    "url": "assets/js/205.ebe309c6.js",
    "revision": "4a606a1f5132ef3136489ea93fcf7977"
  },
  {
    "url": "assets/js/206.971b581f.js",
    "revision": "8d6ea96db9a7ba5670a2f67efb1ca6de"
  },
  {
    "url": "assets/js/207.9b81e0c1.js",
    "revision": "01e22d0ba8dc3151e5a55cfa61537fb8"
  },
  {
    "url": "assets/js/208.65a3f0c8.js",
    "revision": "0a1abb7df605ab46a747587e02807f06"
  },
  {
    "url": "assets/js/209.8670185e.js",
    "revision": "a47f2d13e9704b99e80af24c4da59ce3"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.ee8506cf.js",
    "revision": "987ffe4bd3b24c24df3d2f3274fa8358"
  },
  {
    "url": "assets/js/211.e432b65b.js",
    "revision": "4831674dde3126e1567cff843c2ddc2b"
  },
  {
    "url": "assets/js/212.17dc6181.js",
    "revision": "3a9f20241d3022c6c069ee8d99fd55a1"
  },
  {
    "url": "assets/js/213.0eedc11c.js",
    "revision": "8df707551e3e7144e37da6d68b856043"
  },
  {
    "url": "assets/js/214.7cb46b27.js",
    "revision": "fc8643e0402a8af1556c2671cdaf36c8"
  },
  {
    "url": "assets/js/215.bc8c19a2.js",
    "revision": "4bfd0351f64db38ca95f706b47313b1f"
  },
  {
    "url": "assets/js/216.4cdeca4b.js",
    "revision": "76ce226d94036ee4c7a3d076baf514f8"
  },
  {
    "url": "assets/js/217.89c1629f.js",
    "revision": "8b5c064fe5069e6d678afd9d6140aa3d"
  },
  {
    "url": "assets/js/218.8e148a5a.js",
    "revision": "2f06d8507bdaf55d8d3a62fdeb9c5824"
  },
  {
    "url": "assets/js/219.fc73a14c.js",
    "revision": "457cc87f9a0e09a00dd1fd001e456b53"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.60f75a88.js",
    "revision": "6c01ab61ef421b48802f50d0b9a9cb0b"
  },
  {
    "url": "assets/js/221.70a39812.js",
    "revision": "d71ead64cedfebe47645499610c82e25"
  },
  {
    "url": "assets/js/222.db36a8e0.js",
    "revision": "47dcb00c76be761ec1af6b8347bbdece"
  },
  {
    "url": "assets/js/223.af4b31c4.js",
    "revision": "06d3184b0459b0763de9fbbf822e27dc"
  },
  {
    "url": "assets/js/224.5b395a7d.js",
    "revision": "332e73551b7939bca4656c39065b5a15"
  },
  {
    "url": "assets/js/225.4987af6b.js",
    "revision": "b47ebabefcb36a3799463f1fc8724b8d"
  },
  {
    "url": "assets/js/226.edc1c3a0.js",
    "revision": "5d03c5632fe6d0e3818e12f97c583b50"
  },
  {
    "url": "assets/js/227.b6548a09.js",
    "revision": "15738a29df8e3c3532072dccb8211ad8"
  },
  {
    "url": "assets/js/228.87beb2e7.js",
    "revision": "38a2a60bda2a70ba7738bbad89dc42c7"
  },
  {
    "url": "assets/js/229.80c778a4.js",
    "revision": "492422682d7ec29e235dca3fb6cdcc7c"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.c79084c3.js",
    "revision": "263038092887b65b4aed80020544f269"
  },
  {
    "url": "assets/js/231.ccac7252.js",
    "revision": "4520dc507162db1af27721d046d41c44"
  },
  {
    "url": "assets/js/232.94e9cbb3.js",
    "revision": "1078ed4e8caa9189d1afd68e358ad99d"
  },
  {
    "url": "assets/js/233.10944a6e.js",
    "revision": "c0aa8aa756800f49a013d9d3f27c8e6f"
  },
  {
    "url": "assets/js/234.633ce2ef.js",
    "revision": "4f1352335b50122f8a80091efeeb8cd4"
  },
  {
    "url": "assets/js/235.eb27ca04.js",
    "revision": "1295d3af001b636f789e1227bf09944e"
  },
  {
    "url": "assets/js/236.8e8a1ec5.js",
    "revision": "6b25935efa298162bcd566e300bb41a8"
  },
  {
    "url": "assets/js/237.f4b52e51.js",
    "revision": "7e9c886ef958a6a99e1e881f2f36719a"
  },
  {
    "url": "assets/js/238.b6eeb2a1.js",
    "revision": "2676b12a045eeec5029e6a12a90263bf"
  },
  {
    "url": "assets/js/239.307fa357.js",
    "revision": "640a14a7e5e9175863ce244b302d5da6"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.87c6c257.js",
    "revision": "7d61d7c5b4ede029aecf2d4980a1e7b1"
  },
  {
    "url": "assets/js/241.3dd18fd1.js",
    "revision": "515eea7507993087960f993644e26ae5"
  },
  {
    "url": "assets/js/242.efcc9884.js",
    "revision": "95e7fd4044523192ece9bc5e8029c6ec"
  },
  {
    "url": "assets/js/243.309afac3.js",
    "revision": "cf2653e39dc6d9deea5f72cbf2db31da"
  },
  {
    "url": "assets/js/244.b6fa16ec.js",
    "revision": "a45896ccab49d5d5cf947775009fd8b9"
  },
  {
    "url": "assets/js/245.19a24c6e.js",
    "revision": "c6478f36e3806d0ff4db238c14061950"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/28.1d321b85.js",
    "revision": "ebea04baef7a0fd7c5a2782610599baa"
  },
  {
    "url": "assets/js/29.b3a2a4a4.js",
    "revision": "b02525f7fc85a6dd045ad4ea65a27114"
  },
  {
    "url": "assets/js/30.806f0e31.js",
    "revision": "2c1bbb64a70596b49db8101281ba6775"
  },
  {
    "url": "assets/js/31.4ce2a643.js",
    "revision": "efb66e197a3dbbf041823521cff85bfb"
  },
  {
    "url": "assets/js/32.fa70387b.js",
    "revision": "23cc305443a3e56aa52c08fb298af488"
  },
  {
    "url": "assets/js/33.f8113b4f.js",
    "revision": "a4af639cf5ab52272f5129ca93d664ec"
  },
  {
    "url": "assets/js/34.72be6ef5.js",
    "revision": "b475580d4fdd904aee2fb6ed6b80e3e7"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.fed85ca9.js",
    "revision": "3c48c254685b20bf23e89e69b6940eaa"
  },
  {
    "url": "assets/js/37.b86dd58b.js",
    "revision": "a2c979887f1e6ea6dd82213455aa5726"
  },
  {
    "url": "assets/js/38.02dda1f2.js",
    "revision": "8e5f297a369b87a1deb8f3e1b1d4f185"
  },
  {
    "url": "assets/js/39.9f63f8b8.js",
    "revision": "9a2a141d36db837ffe2e596f1a5402c4"
  },
  {
    "url": "assets/js/4.621c0810.js",
    "revision": "5e900ea450def94a9aeebaf79ea94718"
  },
  {
    "url": "assets/js/40.dcf15fe8.js",
    "revision": "4f72e1918ab0a7dd276b7e7b990fa337"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.e78db814.js",
    "revision": "55d55af0ff73bc07a2ed7b8ce61309e4"
  },
  {
    "url": "assets/js/43.26c01561.js",
    "revision": "00bfe55f2c337d861133603bc7761160"
  },
  {
    "url": "assets/js/44.6b429a17.js",
    "revision": "e28bf2f741982aa8cab4dc967e182781"
  },
  {
    "url": "assets/js/45.d60760ed.js",
    "revision": "38277da509e1053963a6f64815bf2666"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.0ac0bfce.js",
    "revision": "7eb7db0ff98a386b67d20542e2bb6344"
  },
  {
    "url": "assets/js/48.88acaea1.js",
    "revision": "125ff884b49d5dc6169a4bd0e65c11ec"
  },
  {
    "url": "assets/js/49.ebc9b4ac.js",
    "revision": "69a8bb2355d20ba4cfdb105bf0251571"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.ecee4d97.js",
    "revision": "f38f60924f6e019351c0cc0b36c6c988"
  },
  {
    "url": "assets/js/51.da8af6b8.js",
    "revision": "40b12615c2db3cdc507a35f716b8e429"
  },
  {
    "url": "assets/js/52.4b3c6f99.js",
    "revision": "345ab19ed4cfda55955bfe2d945e178b"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.027762a2.js",
    "revision": "ec7caf1ac60f7ff4187f134ef6db2439"
  },
  {
    "url": "assets/js/55.d43d6c44.js",
    "revision": "6c50a9580c0763c86fe0a23f099989ee"
  },
  {
    "url": "assets/js/56.540e07af.js",
    "revision": "58e2250cf17d9e1dc74b3c92dcb045a9"
  },
  {
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
  },
  {
    "url": "assets/js/58.07a61b26.js",
    "revision": "5755efe798230aec0cbe93c6ed502081"
  },
  {
    "url": "assets/js/59.936f4c2e.js",
    "revision": "ca012df874eeb1a5506cf9e1a4673db3"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.2f36c42e.js",
    "revision": "01404cca5be0abacc2a5095ea20146ec"
  },
  {
    "url": "assets/js/61.bae0851f.js",
    "revision": "edc6dbc9e894c9a309d7664526ab15b2"
  },
  {
    "url": "assets/js/62.65001b7c.js",
    "revision": "87cbb99930453617343df2a63e53bf29"
  },
  {
    "url": "assets/js/63.364ce22a.js",
    "revision": "b46fab7e24bf8d08e70260c7db75a510"
  },
  {
    "url": "assets/js/64.d5d291c7.js",
    "revision": "d8fe05589ef7ce88ee9e8a74e5437efc"
  },
  {
    "url": "assets/js/65.14f8de47.js",
    "revision": "a1e9bc10be1cbe3eaded1ab757062e7f"
  },
  {
    "url": "assets/js/66.7ac6444f.js",
    "revision": "d72d08b925c7abd1d881bfb7184e89ca"
  },
  {
    "url": "assets/js/67.064cf1e1.js",
    "revision": "1faa284ba538c45cf51866e675431c20"
  },
  {
    "url": "assets/js/68.92904f15.js",
    "revision": "9ae47dc5c77be9dc06f5ef17ce4ee8c8"
  },
  {
    "url": "assets/js/69.09c48e83.js",
    "revision": "108eeed855305b649b54b2b2862ff198"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.af07dd2f.js",
    "revision": "581ebc91f7d83d3c5a6883c700e5f1e3"
  },
  {
    "url": "assets/js/71.49f88104.js",
    "revision": "3935f9f73414c67eea31caf457930289"
  },
  {
    "url": "assets/js/72.b759eef2.js",
    "revision": "c498d1eaa6480b70f4655981b059f1c7"
  },
  {
    "url": "assets/js/73.0581cc53.js",
    "revision": "43ebc1eabc7cea00292f3b6419655e46"
  },
  {
    "url": "assets/js/74.aff0e133.js",
    "revision": "8f9dc8cd96b58025c93242ae8bc45a4f"
  },
  {
    "url": "assets/js/75.c4530927.js",
    "revision": "4475ad73691f99daa60857994b45a607"
  },
  {
    "url": "assets/js/76.866192fc.js",
    "revision": "05efa6e85fbe3cf08fb060f2c8187880"
  },
  {
    "url": "assets/js/77.795b5b8a.js",
    "revision": "b110aa5c6bb187814f2c1de4264e8bad"
  },
  {
    "url": "assets/js/78.f0d3acd1.js",
    "revision": "7680eb94846923dc172833c26dd6d639"
  },
  {
    "url": "assets/js/79.03d8460b.js",
    "revision": "62f0335e9d97a5092268161b86f209f5"
  },
  {
    "url": "assets/js/8.321f929e.js",
    "revision": "8089ae2cb60c42b9376220351e563b77"
  },
  {
    "url": "assets/js/80.e3564d5a.js",
    "revision": "18531106f827c939d28f946ee4864f4d"
  },
  {
    "url": "assets/js/81.9fc9a5d5.js",
    "revision": "6d4b758254e28687bc3ba09329bfda25"
  },
  {
    "url": "assets/js/82.e50dc3ba.js",
    "revision": "8a99ba60497ac000c83c477f0689e514"
  },
  {
    "url": "assets/js/83.69815cf4.js",
    "revision": "f3b501df98e6cdb7ee5a99566490d4a5"
  },
  {
    "url": "assets/js/84.7862a372.js",
    "revision": "6d3a3a3f2adf93ff3fa3b5de6dc52820"
  },
  {
    "url": "assets/js/85.eb26dd3c.js",
    "revision": "4cb901d1f8d405fe6545ed3c26b32cca"
  },
  {
    "url": "assets/js/86.7e003ff0.js",
    "revision": "c7bc1e64bcc2776bf9874ecb0f9f2bf2"
  },
  {
    "url": "assets/js/87.cc1300b7.js",
    "revision": "7c239b8735bdaf010b9ae62cff7a68e1"
  },
  {
    "url": "assets/js/88.1e954b0d.js",
    "revision": "ba0e09fad16869ed6f5ac158fdb3d3b1"
  },
  {
    "url": "assets/js/89.da09709f.js",
    "revision": "5ac5fa5d5a8347f13ca416a3113fbecd"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.c36e7d4f.js",
    "revision": "23a640b79ecb5e91b08771bf7afc6bdb"
  },
  {
    "url": "assets/js/91.b583b8a4.js",
    "revision": "5e62de1da1e5655e3bbdafab690c0ab8"
  },
  {
    "url": "assets/js/92.e0f0611c.js",
    "revision": "cbc41a83605724b8b635273d896b91cd"
  },
  {
    "url": "assets/js/93.01f1ccde.js",
    "revision": "3fbc1466c532001d8639983af9f00990"
  },
  {
    "url": "assets/js/94.9c680141.js",
    "revision": "ef45ed85f47ef3876ebe8003c500f68a"
  },
  {
    "url": "assets/js/95.fa83163a.js",
    "revision": "9bb81f096f7b29c70702b4f69b67c43b"
  },
  {
    "url": "assets/js/96.fd7bde79.js",
    "revision": "fbac7f879d43b2f66c11ff337d0aeb41"
  },
  {
    "url": "assets/js/97.809f6c4d.js",
    "revision": "f16239c467b916a5e5ab717f8b948455"
  },
  {
    "url": "assets/js/98.914c104a.js",
    "revision": "dfb8c0c2af43d5b096175abcb4a926b4"
  },
  {
    "url": "assets/js/99.da54b45d.js",
    "revision": "ec5730f8b5a351a7fe052c700661d929"
  },
  {
    "url": "assets/js/app.fa647f17.js",
    "revision": "2cb2f307428171de807a2a5522a96605"
  },
  {
    "url": "assets/js/vendors~flowchart.cd0cfe9a.js",
    "revision": "b3af5997e713cab07832a64b4cd1f3ae"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "8c3ac4227782c36b2e0116b04f394b42"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "30c909c54cd8b1e12ce9ff2e09b279ea"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "353127338bd3069d80ba7b6761bf3a43"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "845fe4aab0447fedf1f02dfd5db88043"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "67420bdedd189ade11d5889ef362bae2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d0438169090506b67f7eab2e7472de7e"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "277d50c2187fae760f6ef4d9e82bef4e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "30b911ef432e848fdf35ceaeb66f580a"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "7f0be6290c1b5f7ff2af9769e7d76915"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "27f153ec1718ffd154ea02bea2344c7f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "fe212ee1dd7c693b8966841e83fcb7bd"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1f9fa77bbd2a3c94f0e7e4185d196371"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "c3a4743ff0456a9d51767124a72909fa"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "aec41f6f48a15bf3c8a49f6330da3a72"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "65220cdaa06d6be0991fdc77a8635e92"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "1a2b6ba4ca0102cdd3dd8ee2af1303d4"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "63e216fbbb27bbe1a4d31fcbab0ff1f9"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "06569c9ced1d2154b34930147ce522ed"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "02b5521f4de072fdb970f8a14e7287dd"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "cb2394cdd3424c6f2990c57dd8700556"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "7c7574ca5ddb91fee5b193245bb062ed"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "3f19c4eb3f0eb0c6421dc6991fe38722"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "3616cec7f53608715934c5e6d24bdc8c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "1311e8209de7266d9cf1623a10e36f18"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "a885752d497e51fc1f562035bd9d8dd2"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "24317cc5d1e86b2c0c29032decf3b6b6"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "0048bdcc5264c91bcdd25bcd815f92d4"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "5cc8bca9f49b4e0e99c302c4b46ef63f"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "357536a0e8a1876d3af60428e0e7f2f5"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "fa6b267ffd25fd5de05d222cfe6a2ba9"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "510d704f77182b1069ce6d63049aa70f"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "e3a799ee6b9a456bc9462aca2356e80f"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "e001927ebecd612d795c2bc966dc7e1b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "c2ad9e325418bc973df1ca3b1023e2f2"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "58f7e75a17793c3a64ce25a5e5658bf1"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "73f465e8c84cfd6932e3e08d5c5abed1"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "9772beab515956ad61f9c0590724c314"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "d16406dcc9c3a66c33430911ebcf84e6"
  },
  {
    "url": "basis/index/index.html",
    "revision": "98acbd4e64cbd651df8e72861d5c79d0"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c35234013d52a12134845d5779b16321"
  },
  {
    "url": "book/index.html",
    "revision": "ce4f6de7cb0f819fd8134e55628040de"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "2da76e4511f2f456c6ab4cc775f20cfe"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "33375d9f67393e21d1596abe6fe0a2df"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "cad016a9ef5b10ad0a6a3c2ada61a8c4"
  },
  {
    "url": "c/audio/index.html",
    "revision": "f9d7ba62618457409303ae8102b169a4"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "d5f5532a38dab478645fef0b4b4e82dc"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "f98df589cb85236387cc0c7b9bd95169"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a71ba33b3db90ee6f5f8dd949fbb3f91"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "691ad1a92724989e0524951178b0c6d8"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "c7f2bd905886a0ece15b7f2a68d54c36"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "70fc0d7a70fb72dc9a3ee3e6410bd730"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "38f2f29da5648a50d4e50a73b0cad832"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "1c23b8f3522e6b5522040dbe652f9df5"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "62e4c108e5176241ebf4c2fbfe2c9c4e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "5e6d5a661bac9265424d0d95141b14e7"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "697d2140e8f00b8d8fe53cc8be2df5ab"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "b7856cfc31909747501c2324d203cde3"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a441ab9eb37b057b39d1b60dfb1d041a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "2736af5dded851cf1ee2192f3762ad00"
  },
  {
    "url": "c/program/index.html",
    "revision": "fb0b6a7dd3db58760b759bb0c943f543"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "c6076fd8e2b4ac94e7ff442d8d8cc21b"
  },
  {
    "url": "categories/index.html",
    "revision": "5e81f1b9d15f474d60d6dd3127e7dc6c"
  },
  {
    "url": "figma/index.html",
    "revision": "58775e1aaeb5d01c92c6fae14e1824e8"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "5f072aa5840d3bda79bebc25020a4c4f"
  },
  {
    "url": "flutter/index.html",
    "revision": "7587c21b78b159001751aec065b607e0"
  },
  {
    "url": "flutter/point.html",
    "revision": "23984a0bc1f4b4ce19b2d32837b5509e"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "e27a338925891fe84fd159fac1fd4932"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "64816b88a03ea66ef6f98e54f4c94e5f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d83c3914ef8e87e607b10d232c40e08a"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6e260ccf3192804b621181dcae92aed0"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a78c28c1f0dcc15932bd2959951f151f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "d9217e677dc6543078825c63f3c1cd8e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "db4dcbd86d041c787f4d3b42dd2b7876"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "4b9db52c7712d32ddae80433ecc3eb76"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "eedb9ad763438fafa879b52aa805d869"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "a286c68a419b601fa8bd0f62ade4ea35"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "dcf185fdcbd9452e04704275be38fa7a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6130afcad3df8128c9d5579c68eca7e9"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "88100468bb24c61184ce68a5b8ef51fa"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "82cfaafac05d924bea1821e437db060d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "17f56f527baeb445d71f5fe2eab7fecf"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "0b9adc1b9dee969fc8ee344242fdc39d"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e206247ed5065ab59914e58894701ba0"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f96d810452193fc9e3d807090c2f133b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "8e1408dc461534bccbd41bde91cb3bd2"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "9f4bcf853d94be95f239a6bff2af5e65"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "8e7feefbf44fe67387fa279f2729d8b9"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "19574ad6debfcd170ec15075d32c4b78"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "944be3d7fec66dd744337f67d766e6c7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "b87ff805c00baa80fb8220540aeed8cf"
  },
  {
    "url": "haskell/index.html",
    "revision": "dff8f0c4be70b22b993c91629d7fe12d"
  },
  {
    "url": "index.html",
    "revision": "7a636ce17c9d30e4a3a756d255908fe4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e69771587dfaa2ee35f346a8e0dc28f0"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "575d14c737e27c3d0f97e7f75a70f63e"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "6cfd925e382a41968a785478079a53b5"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "0e0348c07c9456eb281bc14028823800"
  },
  {
    "url": "python/index.html",
    "revision": "5e59adbcad17134b19e421838ba4b0bc"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "88c9c86aaa45b4eef52fa445a4ef9f9b"
  },
  {
    "url": "read/index.html",
    "revision": "2fc4f4aad06e9b1a2b0167ce3a814bba"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "9ff9091b3d91ae35fbae0e91820ddc50"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4ed505cae829c6f6f6bf2e4a574d6723"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9cd05f4c3d3236342ed2689904395f1b"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "4a6dd0341fe79bf910e1a9a9933f1793"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4da82fe60860e149cc5fbf09073195f8"
  },
  {
    "url": "swift/better/di.html",
    "revision": "79c6702eeecf585cffbc5a98a1f78520"
  },
  {
    "url": "swift/better/index.html",
    "revision": "82d43cc3581729b17ed42d7f60cfe479"
  },
  {
    "url": "swift/better/last.html",
    "revision": "c6d971c051ac71692247254f29837dc7"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "adb64820064f10a0a25269c32e8917ae"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "15a97825083bf0626d743ebe7c5761e8"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a13976464b8e4e86bc76f8d33cc109c3"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "c9ac7e9ac5b8770e862f70045aa653fa"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a7beec7eb8530087d3e387b756c197ed"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8b4ecdf36f58346bbd16cbbfeb34c5e7"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "312def6b4168848af7962252b0737ca7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2c0ce842d307da09c5508b3b7146ecac"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d4bc8b08a80d79a42066628e90daade8"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "da02c88efc40ec02c1e022769edaaa7d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "39a07bf48443bfb7c47eb37b94ac1735"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4c4c8a9560820ef907d61e6223579549"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "dfa1d9c8eef5cb16a19bf90528cd24b9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ad3e04e28de92f4d7bc4bd3ea6801cd2"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "bd0317a72d34ed5ef7dfecf5a60f18c5"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "287eb47cd40783e9d0a53ec1e7bad7ba"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "610259f32ca96d3ac2ea64a0efd98216"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "d2723a071295bb9a7baae77ce3d1fa31"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "0970dad0718d25cbe7064331b8ab3396"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "cd19cd800f0346d4e978c0c1e13225a4"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "7bd611c815db352074e26193ffb42d61"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "8e00afdb6cce7a705f7f093ff59582d4"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "9817ec772472772a6ab0a483d6ada790"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d9637d731e470b7a1f8a97b29ebc099a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b3f74c6945d86fd9cdff8894e8bf8070"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "19989054d3815f2da78e714d117cd99e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "288356f3f3b6b282e75bb52811e81782"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "503eb6c526ed941c7d88787f78768461"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "6e4acc69658783f29a1a789296a1022e"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "38cd1356f12a77bce98d7774e0935b6f"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "1e044ec61b75db353d9effae2dff7f8b"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e0d34625e44ff4c16b5370e5525cd97e"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2fb32ff29278612facefe424f7686383"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "1d7fc02cba6f679c4132b5057f046b64"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "f2a52e96e88a6fd5393c7ebe2f8327d5"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "2b528033e9b79b2f1992a98fc0461740"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "350aeb034c1f731afdb4f4a26ff5fa38"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "307eafbcd031f60bd127ae5c43726664"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "fcd3e45b85f5f7b3fa0a0571da51cbe4"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ec87532f5f19e59292dabcb337305a1a"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1229087109430c5f943299b1d6926a89"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6db20fba9b00128c48aa37d8bc4c06cd"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "ad23cc7db16ddcb1bcaeaf7b7853e4dc"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "0431f7d6629a375a4455591b3050739b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b26a961f4524cedd01b63bb875504e4b"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "9596ee2c2b093b56bbdfe627eb06a714"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "1c89e2edb58f9c09525367567a5d1992"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "761f0b97bb67e30bcb0546dcd3def4fd"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "733036652dd8f857c3c22a520f751046"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "8609337ab915d95400e53fe4b39e569c"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "0cc52c3bd3449e36e946ab1d3b9410b8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "89a702edaee1318b9cd5247841e8c025"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "994261d9f3f679fe3044be85a19add68"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "3948cbf3c4f49805bb72716cae5effa6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a3e426c8bf7b8e2060fecacbb7ab7d9c"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "95a77674adb2c2075380bed989cb30c8"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e57de904907efa52064186149fa1ad8d"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "35363d1b8e2a6dbc8d8dfb2298ec6f1d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "bf22ee01e6a83f5ef62250949397ac65"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "f6917a4825f1a4141ec8a05da3bbfa8a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "f9ef6dc414df1e58df92def52e54f1d3"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0b12ce58d4586bfeca7c4b277817c1ff"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5050aafe1562ae3f3c11f210cd5110ce"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "c3e5a51b4bb38d232f2660ec70fd56e5"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "891754016661cafca0ec8e303376e0be"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "9acdae39cc3fa3601b0240d178b29b46"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "9edf9de5da2955fb950f9fbac3f4839b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "eb7e48d4e587865eb01e8e0a7d44cdcb"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "6f3882349329fb748aabe60bfb174897"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "c31deb5c4358c0f36d7ad089a500263c"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5bb7d242b76d6443a68945f6e51741d9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "413fe4699818747031bfbf6b36ade5e2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8165143301443a9bf22c504e0c13d6c8"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "54571cd6bb922052e5ad8210b019877d"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0a7c95ca4ac3cb010440b8d21c3640cd"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "4a01f48d428936ea0527607109f527ac"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "0d63732656e8a0ed724dd09991d8d296"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "cb654de9e560e4cc87d4ef74cd05123d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "1cd29c95ea060b454b2d23ba50aaaf6f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "4ed4f18c38d1e8e21a95b143e61fb308"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "054d74be16452042693268c68c89b2d3"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "999f48e005a2a36051ff884dda75dee9"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "178369dd2c40399c44b927e68f0ade23"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "cffe7d214247f7943b2db4dcf02b4843"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "fa494d3c9224c0bb3584bff47c6fcb73"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "2f66fd1951ffd8f11f6e4a44ad4906a3"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "090a46418337543f5cd899c902a9c99e"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "74d42600f4b013985efd60751db68920"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "42793cee6030f3de99b978d0c2dbade1"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "fb22d6c6a6c015c921f039263c27a2cf"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d20be4aa30393548fa4cfb266a403e48"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c03314889e01ebd75c23b9090d8fdbc2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "87109b742c457a7e4f4284f0bb72fa50"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "cbdb9bc53a796688f7b7879f9cdaeb6c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "444e8274094995c9c9709636274ea9d8"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4fe80913b84cd579552b38fe2c24b466"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "95aded11c0ee923eb9b513c41c927ee2"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "a10de1ce3961bc5fa02a3c5754986599"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "55150336ebc1105784a818323540213a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "0e38cb93a5a824a4fdadd5ffb12a9755"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "da1a32b0ce914a17646de2d34628dc1f"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "175ba2acf401ff191c0a95ee31711d70"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "8914d84d8ae843f5aedaaf5a63f4ed2a"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "47efe4028763667b911ab0c654d1a629"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d502662e52196491a8b4b1355e812524"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3a56226ae44d2c9903552c7f5eb6ba49"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d28dede62894a51bc3b94fb71e2e5980"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "ddf8fb8c0d05f346f7f9699b692de1bf"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "578dc02e89b3241e3e154a8bb12b8f60"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "ab9de98e6dc059f8a1e95be336c10f5e"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "50692f455ad4434c4debdbc0e68dc11c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8f4fc2a9f7bd824c3546da3c58d983ab"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "97c8cc8685cbd893965490a47367cfcd"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "8e18749a822fe61e7856f1724afe8a66"
  },
  {
    "url": "tag/git/index.html",
    "revision": "23507461b58f8616b0b9480089a54691"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6cca60ebf379588a1d9acdcfe5b7e980"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "dff50f17dfc1e7c07c87cd000d8c0f5c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "090f81b6a6047bfbd9b6d66844aa1cdf"
  },
  {
    "url": "tag/index.html",
    "revision": "89232cb6416b4758aca8c41dd5143d15"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e2c043a16a6ec08d2f91679c1f43de88"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "a93a617987e7ac2af914ba3b86dd2678"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "d52c5628e5704efa23267317a820ba4a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1afca752c37d9438e37bcb24db019677"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "143a640bee70b04fafca0ec24379e0d7"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "97b251f0fb81e895b560be15e4cc960c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "493fb17fad8df91d2424553aabfac5a6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0728880e00663da761afd6a9c5cbf9a0"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7996a0fe5c290542403a0a72a0f84b58"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3cd50c7912547e502129a7cf6f541012"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6dda44e693b9fbbac522ae9fd3166704"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "891a3a9b98fd3a53f0a9051129b5d309"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0fb4b8dac6e46e9dc496b03ace8a1db3"
  },
  {
    "url": "tag/read/index.html",
    "revision": "fc983e16476feb5ae3c7dcac77940249"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cd45a10b494b66627d8b2dbd26fcb691"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "34744efaf4585924d22675315ee622f3"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "4f6cc93dae6f60c363da3c9e39724729"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "79ec52766f9ffde8565383a6b3b5f315"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "035c13aedbea07ff653ccbea6f039c5e"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "2a96a99983852facaa0fc981d508b49f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8c85f728670db4b0b2364ba666218629"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ba5492e07700aff0142a1a7c500a4569"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e6ea74857093fc2faee85bae5ece57b4"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1cb11de85d519866dfd28e6846628262"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "547a15a820854f8b8fc7fe0ced7e7122"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "824b97b5290964b2b6e4651d25491db2"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e984921c7e1478a424f2976b644e83fa"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7955a9f29eb286bb1050cd794e977bbd"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "39400dc3b7d710b0a030795a836a610a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "bfc719702800d1c17de79d2f4e697ecb"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "73e64026d04fe9c0f479f6f45641ba6d"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0d65584583951fad8bd7545fab058264"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5209c3fa56e2d140bc391bf2323c9a10"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f034f5eba9cd9c0b8eb3bd81dcc29da0"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "33b51e84f7ea0fe86d30cebbe0a41c7d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "ce9b0e64a0c421e660f478cdbdfa2925"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "fe4487e735033e6aeca63502776f46c2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b2ad833b7227cd4f762260b0891609d6"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "6fed31ddce10925881c457d74e75b114"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8d2f673526d9af2cf493efce34833089"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a0f9182752892ea38816eb16a6203f21"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0a68be0afa570a96afb91620ddd2176d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "80ee5b7facf5603882b10bdb72776b2c"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "9008ccb993959611ff2147dee1af0b04"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "5e612bfc5f57b097933c65757214a214"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "884a83e56b3377f3ffcefd387b14ba38"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f3082273ed30d724058c1edd2bdbf50f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d849e12c9ac4d87e70779084661fd8d6"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "fc2425b0496f9136639995cc78def790"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ccdb8a07038cbe5af63b499623e56ac0"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "b051a7df077639eb482ced338066cc4a"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "659bfd981681d258bed558c4a8b3ce6c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "020200cc88a952e84fbad7c5004d6529"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "cc8402ceffd1127bc7cce8af0327a291"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1efb31601199a5a051a7fb1980dc8594"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "2c3eda511e5542ec8c52ca897c4a559f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3adff769df5cff63544160dcb837d9a1"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "86d703b81e194b392b4bf3f3d5fca606"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d04fb2557e093223bfaf52bbee5d3057"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "41d899912c8fe5187deeef78fed9a7ef"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "b64911d063c8695c992978c7e187d723"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e930ea8b220c00d1d0fad2e70c2a857"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "2f7a6b8b6bdcbee722827755ef2c098c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "bfce2783405d2f147a526928c93862df"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f88df095af9949e40837ffc7e746327c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "81e5ca74a6f6f92da9d5f20eda976b8d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "75c291b2deb4a7dd88f22fba7ea68f5f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7aa76a7259f93c9a949a3685f3327735"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9adfc85ba460308b337d91417d19f851"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "021e47c88dda032e83cd9fc79247c10b"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "81c374c044eba6d6a0aa06d515ec6125"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b16209da8d4e7339fb5ed5a624d8c9d3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4178413c852311e616f054e5eb260ba7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "cb38109879576a5cfb39722d3ab54027"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "cf3a7543c34ad94580ba32ad015c5d58"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "975c389cd9af94ef76740af77e4f964a"
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
