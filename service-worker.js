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
    "revision": "7aef468f780bae3aeabe66c98864a4aa"
  },
  {
    "url": "about/app/index.html",
    "revision": "852745909b08c6831740f907db8547ad"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9592462718b10fe8575044f7d48218cb"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "73f47335e30aec227a5a6e94bd7383d1"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "535684cbcfe217f3da879708747ffed4"
  },
  {
    "url": "about/index/index.html",
    "revision": "74aacac9f9a55ad86d4a790af9b63604"
  },
  {
    "url": "ai/index.html",
    "revision": "f7caec33f327256a4964633eb6a1a855"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "fee3bfeb31e56f77423b7447118b45b6"
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
    "url": "assets/js/116.a43cdf1c.js",
    "revision": "3c3dcaa2330b3c415e41f5d89406a6d6"
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
    "url": "assets/js/83.2ee44f16.js",
    "revision": "5491bc40d5b57c74f02d36cf59d6eee2"
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
    "url": "assets/js/app.e2864ce7.js",
    "revision": "d55d17acf5c2c8925a8cc1b8de9d1ec7"
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
    "revision": "7a158b522b6b3b49ccc890dc1d6b183b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "02b626749a3dcefb0eb7e175004e2c1e"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "2818481c322513ffe1b11ae7a1f91a13"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "40f7bf083b1c22f538c4ef10cdc6a2f2"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "284714380445f71d2012fb45670a9618"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6ea37b0514c7d9c95977694f4a8fb457"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0143085debc838f152420ac962e47a6f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "7a8e8655f41a8d0f025fb121d9787188"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "85fc7466976d712a8844f925b1caa7b0"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "7a32d1190bcc55fafd9b86385aea91fe"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9555f1dd3502df702cb1cb7d3d10ab03"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "a03ad2c72ccf2b85016da18437e23474"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "8073c254eb7ba2e9d35cb27ee72f97f8"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "4df3a95571cbdeb20ee278776c231c2c"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "ab0dc00eeeb43d42f3fd3135491dc37f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "67eb678a18f7eac870c7f0692816e05d"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4ffe83d8137ef51b9e9601da464c79de"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "cd71f25018cd725ec1a887711a19b667"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6c17553d7d7023956653806d3a6b9c20"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "6150315f78dbb6297c7b2b49138ad181"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "03ccfaf4b439a67f0b559a9a3edacf48"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "1b84ba9e544064700b79ed18eb62c19d"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "016d63fc4bb4c6779fd000dd0860c903"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "763ef599eb376343294fac99d04fa5bc"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "b1337c8096c67ed91610302ff1e10f81"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "12005f503f80acef1c19dd43f682d3de"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "17e6671d46756c3c0f93991e83297ed0"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "ae0b6a5345e627d4c369b5856d430ecc"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "aae53c0caffb6d936eed59ee33915433"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "cc417d0721b1ecb10c54a6d05ec311dd"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "5790cbdf276be9338e7e0293f3f8d4f6"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c9a74624bee7d7ce2f116aa6e43f682c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1a7fe0affa5b541f879143b1264479f2"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "f4436b0be9ddcbe6d21258a695866887"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "8896a7cc8a73fb16fae8b5b9b9bcd833"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "e6847d83f41774b5fc87cfe33ae72330"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "54841c97b105caa741484d76960ac8cf"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ad7f839bda41ec9366aec20f7bcc22a0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9f0222775ee3dc053a884c89710b29da"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b30707aa76a13ca5ce9593bd7a34b8ed"
  },
  {
    "url": "book/index.html",
    "revision": "2bd5b3ffd7e500f645068b66ebfc20b4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "47a70abfe404cc31bedd50b2a3256e6c"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "68dd2595d12147b136934b433d1f6655"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "a22a51297823fe9f2887d73c361e4eef"
  },
  {
    "url": "c/audio/index.html",
    "revision": "ea7700a8c7c924b975802ff5e9a90149"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "9fb654a73ee179cd71bb80f16cc5e7cc"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "af857046453f2050477265817ce918f0"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "ab3e2372355bc13fd1009cc9905e4120"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a50b3136123034e9632f82733228f3a2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "7a05434493633b3e4ef2c6c9823f6c36"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "5f204640cc8a04eec2d3080c0c9c15de"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "7acf327b327406b10b8117dffdd7150b"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fdb5fcd97da8e4396761bb91fea4747c"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "3eaeccc6d5dbd0701ea6d4a8828eec4a"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "347d0ba533d2189a0560dc8dc975a5df"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "e0881b61b6ea33050999dea3726e69eb"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "82c4ba079d9dddb329721f3f77087ae6"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a8ecee1b313f57a2d6849656d24507c3"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ed78b9f3ea89095bad397731a02f1251"
  },
  {
    "url": "c/program/index.html",
    "revision": "2a670099853ce66b45f26e60520fdb4d"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "c537bca370060a3dde24daf67e3f3723"
  },
  {
    "url": "categories/index.html",
    "revision": "71b5a9d19b563681b686e71ae5947379"
  },
  {
    "url": "figma/index.html",
    "revision": "8398a1ceef8fd788eaaaf21bebbfca18"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "6552d16360bd498a628f9a7ce160b706"
  },
  {
    "url": "flutter/index.html",
    "revision": "b1222f4731ed760612c809a03c186766"
  },
  {
    "url": "flutter/point.html",
    "revision": "255be7759700db239cef00d96cf95e8c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ee4245f30495e7d77e001e0786f7d2c1"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "36293da8b33676d0096c53af97dd6ad9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "673587b8324404c70e5d19d4effb7537"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "aab292345d96c7e9d7d13dffb74d3fde"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "78e94f951dec6b16baef8017ee42e784"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dba686ff411286892204ae720cb01ca7"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ca45d6446c321df119888c8b1b44e57e"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "34e01357bc5782ebe2b0e5ff9cd2c7b1"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5a79fa8494d5061cae707e0815047f2d"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e277ef99298052bfa81ff94cbca5a698"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5b50af7092c9b6259c031db550241508"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "79a19eec444e0e731a6fcf7b6d6fe4b5"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "60ec304700fe27d0005f84b9d3cbb360"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f4f9cecde81ab4d81410f9d6e5ec0899"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7aa32233ed6c7921c5c37d686d5ffc7f"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7fea09289159f2647ca9c8a30d249290"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "feb564d50111c82bf2fed4f9e8de96b2"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d63dd3725c9bca72ce4397cdfc0fbd1c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "5915bceb73b791ee4946079e07797570"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4b8628c83c1f448fd08f500104452890"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "1f4ba27b65a362690df00dbb93d0615f"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "21ae61a7f4e25c9adbd0627b6f2ae6ec"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "70a9a19abd9ac1bdfb73951eefb3ff2d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "63e8e0d6216b7ba960f39797145ca652"
  },
  {
    "url": "haskell/index.html",
    "revision": "7938543e7b5beed013e31fc56111b36d"
  },
  {
    "url": "index.html",
    "revision": "8a122adcacb038fd79ca1186fb068edb"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "a0f9effbcb76cb42af6f97b8f05f4978"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "55f7e91789d0cfbb798ff91df37adb6b"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b564696085abc389b2bcace932e59867"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "306533d5dbc42c05967bdde46da271cf"
  },
  {
    "url": "python/index.html",
    "revision": "e28fbb3d37ebe9862184122e06626e0a"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "78bd155ebe32602e9732d3237b7b43fe"
  },
  {
    "url": "read/index.html",
    "revision": "01b653c73d1c35c99734b3d17552a06f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "8db0a55ba126a1c72218343f6c7deb3b"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7d026d26c74a757d481db76e911f3d09"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "fd921301bb3fa1ec2cf06d349232c9b7"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "1040b8776ad4824a592b13d49cbcbf88"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "8c01146f257f7155a673b9418e5143ae"
  },
  {
    "url": "swift/better/di.html",
    "revision": "787ce50a367461a416a025bbb05c4192"
  },
  {
    "url": "swift/better/index.html",
    "revision": "6695417d44957b58f5191633ce8fcde3"
  },
  {
    "url": "swift/better/last.html",
    "revision": "298f322bcbd91d4d875a164e0d0ed4aa"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "4f096cfae2f649ce92d37b80527f78db"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "c30c3931f464cb5bb08fc2db378a6bbf"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a22056c8e87d7454a6ba1728da9cd74f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "859904c42fd6876a5bff9a43f25de45e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0e3a3c221f3d7c8a8926bf3e2124341f"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "949abe2de4ebe36d80d6f18813f2164d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c092215ec292ab6df0d19331bde6a474"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a6add99a907704313aebbbe2d5c56368"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "398c771506e524e9ad024c308fd149e9"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "18a3192a6a11f4b51b685a610870e1d9"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "31477c948a8ed899b22ad301419419c8"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "124b010026693a46e8fbf2cf1dcf9483"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0e853dec93bf92dce787813c44b7452e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b6b4404967a5c5170f83abe0f7298ebe"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "50df32ff4ed3d029eb7e16f84f9eea9b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "2b777167990e85edda606e3e223f7902"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "dec8d0b59a011cb412fa4b529ac56ded"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c4c0c0a45f0ecd1c79f5ca0cc0095125"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "c4d76ce2b7584c82551390b2fd04de3b"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9506081c5f9bd8333e0cd1c6c14c9e02"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ce2a96544725b17c877c78d1329ef241"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c4c2e984e1a50316b5550e17bbd8f609"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "8d510e6d4c39343a72980d961cd98ae2"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "b4649357fb97b5e2228c86429b7e107a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4c208fd8031e267b4df92434a4161605"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "c384b359c6bddc0294ac005922250048"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "d3e9cb72c84a568e97a89d1c25873950"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "bef006069d83fb7e8d16f51fde44c359"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9e60d47451069a2f025e73c4857540ec"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "1c0c7e7d905127f72d5f1aeee0bd9b19"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "9a088cab7ef5ec1efff86f22d7d3fac5"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "147f3469abc3a3a8d9546b0b5896d13d"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "d79833b16f634ceb426c7283b290f25a"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a0a162153ddce75ca8fc6ad5cea3ebbd"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "c4c4e5611712a2160a691189bbcc58cf"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "664ab60d265af4bebf4f713439e5d319"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "d13f7eebb17da82da157b5fead407f82"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "c42295a14bb924be31dd0082961cb05d"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "89294ae7d2c1d58627c4d8bc5ba5b737"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "74734d7541ae9d2cf1018b027c22c911"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "4b198cdc63c566f8e21b0cdcb051b4e5"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "437b92b940d50a2f5f78020d880fc0fe"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a17331f7e01eabd96534d250c3c99c04"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2ff20d5f4da868adc051f98511951a31"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "66749923f2c2983325fd442e89bd1156"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "82f146fc6e82eb3a56a37bdaa7522be2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "0faa3089a2bba0a0cb62ccaa9ed82031"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f7f0583655b9121eb622ac0960a30ec2"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "22775b8ac2f8ae6a556fddeb8692c572"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "676a5fa61dc5044cd60c3783ee712ef2"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b427f8d84de48d1c0f25afa2b97f53ce"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3b10f42658389dbd0f11069e145eb51b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "b152424cecb7a96232c68b9aa442ddbf"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "4604a340925604e5e8e67a876cef461b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "d39639d8baac7db450eb2740bde08b59"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "460b6eb3f0d60fed73e7a17275dffe06"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "23c6c358e035f4245ac2190e9834b9b0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "aaa7d4e5eba21a497ab2ac03320caabb"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "9a447c24eef49c642d84d5a2c4a3ce3d"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "f5e98be0b2b84b9d68de586198859791"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "261bc869fe5430c931b3e2385edaabb2"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "00a095a319c26e6ea533556a2f8e3929"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "01ac1d05293ebb731bda842ef9a15974"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6fea19393d1a316e60191001113b478c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "529d34f1f9ce76472a4e8a9a653dc425"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "7c735eb1b79fba9099f2c6cf99ce0bab"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "bdd0b38c8b79dbd947e9550b681c4451"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "09fc0544054a941efc092fb4f19a3b6b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7794906e84e6ffb78a854c3d54759d71"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "944ac4163ca83e532cb694d10ceb4c4d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "277d9f625b6e1cbc280e81d68d90a467"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "f32175e0ddae3a8fef6bdc57fb973e21"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "b01632ad62dfd4e2aa168f296bbe466b"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "e4db757cd1c005e0ec1ee5e2bd48f40f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "863f64c2fa1656399014ac10db9edac9"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "e95c5ecbce5836f50b561d25b5f9e90d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "0e35495ad434a19c98c9468b2868e50b"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "b491693556baae81531806fae2e29b81"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "218cf2336f86d3e1543d868fe8f2e656"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7a16b889f1d235dd1bdc7c9b9199c812"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "b015115172049f89096493d56ee1b959"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "d0bd65df0b8b426a370c05bee387fc6a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "8373fa7258109b15dda45dd44db16733"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "80f4a8b5ff3fdfa02b7fd0e72081a2a8"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "820a1c562c42e25f8ef8873a4475b4d2"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "41d53dcfa5cf7b3f0c9a6be077a670df"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "f50cac46d547ff79d0ac39968f56075f"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "152c17293d71675341fe68ae351673e9"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "b66d476b3d202b84c9d6f39a5e9e4943"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d8e6d9abc14e8cc5398349b35c944015"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d6f70396d79adaeac97e6d8716256197"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "67cf100a0298803bd25ca9ba9b8cd81f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "56d2c26ce126fd3c0994745683e1d620"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c7b8eafdd45382139cd487174ed21107"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0c0b3e6961457c0aec095fc65471c433"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6079b868c521bc627591861b90f3eb1d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "350c4c66e104180731755a3a60571e1a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "93c912f4a9ebfca665c8db028e6df765"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "63dcea534c449fe2fff9592dce6dc763"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "b122c439b60583047b12fe7ac3b7cea2"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d3503aaef4d8c6d3e125f6b7223f12b9"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "faf61651db736c73b5f4e95931397838"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "f17a1b0eeff6999543db4ea1e1152ee6"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "871f7717df4e111fa325af48f4a25894"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "4a8716eaf91c3b7bfc5eb6da3493515e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "2108da1e76e58655a46edf232ad823c6"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "94a42177cffde03f281ac90c25c5d008"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "015c4793040d83ba93011cfee52d3925"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "3378b2961b1928794e7ff81f11eba099"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "afb37a32aa73b0939a170c8ee9abc4c8"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e00a1dcfced86f385e018c1befd8f29d"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "66c1da7e0a2f84ccada0de0e70cfee29"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b0dd59bf24a4d4b47444e1478d7af525"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "b2634e5486c467b389af0f5b7fbc0336"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7a26b69632d2e2843fee7a4b840c191e"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b7c175449a0ddbd367d4618b049075a4"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "eef776aaec62d108351946a6679a620c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5bd72de86df7a4293d1fc3f0d4e11ed4"
  },
  {
    "url": "tag/index.html",
    "revision": "07e94394a1041496bf0e3a770c52d601"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "768cf1615271f26faef7db6ee120d534"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "55e3c6a7ecb61f5eafceb021adfb16ee"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "35d33e79cfcee7802b2ec50ecea7f2dd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9cd799164f779038721607dfa1ac158e"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "4726d666b668fd2531097dab08870c9d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "c17b10039ea302c283433a07cdd22e94"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f859db4c6a2f4a27016ea9ac1ae1b56a"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "7a3dbe84a188815b8ea8597372010e48"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "d3b12016b9741226102b473041635f18"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a73670607f4625b8b20fbaa4a8cd0dec"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "f0c06eea1fa4a072f77560ad7481d4e5"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "c30df13dddc88f4f52b05e9065a64509"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d95d72cff02ceb426d26b76308370009"
  },
  {
    "url": "tag/read/index.html",
    "revision": "58f707574a99af611300bbd0342ce44e"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0b41da1dc432b6840a019376929c49f9"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "563c3fe304d8415a1e52856b7940d0e2"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "ce4a3e2537254d4bdeba28e659dd735c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "01426236af9d1c3c65124a8b2e7977f4"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "b6312a850d5733bdbb6a31035ec397bd"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "6aea97fc57bdbbaf2358a374f9c8bada"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5133ca1bbf3d72a8aaa4fde24736dd47"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "c0e4f09ae119e6fc054a47cc2ffd1f62"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b1061231ba950abc70124e591e508ed6"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "fba8aad8e60b7babfbb1d898f670723d"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "3fbc95aed73759c36c492c0059ba70ff"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "1a238ad0c4908e87c62ebc966a188701"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "3bef5b2518a326ffbd50ef0ae2b7b91e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "c1aa38b4131e768f00cfe4b23de2c39c"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "42fad38dfaf8edea107fcdc8639d9d16"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "635d8492c5111d4bc27ad6927b68acb6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "2b6434ca3119fa81d2bf265ee6b08c52"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "21372682cf77cc743d031648ae2293ef"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b01e65bbbdf380e95c7ce68c2fb98825"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "331daefdbdb0f8464b5e85a43576aad9"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c6c2759295add78ce48dde03e37494aa"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "eb619427e0917621639c4db901ac35c0"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "69c7e2cfa24353eb15460f771b1690b2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "75fd2ff3c378f971574d01e70e6f339b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "af64272a155ad98d5130f958eb6a2ddb"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "35e697cb3715361c4c3ef614e749d5b4"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fd3cb88480ac7b1a96f6014ceaf6f82e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "8dd9b0eaf548c5704cf67273d4f2470d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "62026e8902567119b8cfb30c0e1711e7"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "0b2914ed94695937c74fd79039d1b3a8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "9e3c02518cad84dab2f80fd181e2fc59"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b9258469930883d9d256b7ffeb22d343"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "359071fe121cab6723a9236833444e48"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "2e883b0ce3f59c558f43afe0cb738043"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0513d7da097735cc4728ee56ce1e2bf6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8073f91bb4b05d296055b882c3aca2b7"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d1d78b89b914c3f597c478af49fa3823"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "eb4bb27a1751010cc93d7f2be4ac65d3"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "fdea7a3a6255ccdea27bbe446d9443d2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0e142bdaa12035b607d34f794f260a00"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "a797f9d6265dfac5ea08e5c663217936"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "cc8ea1918967305eb23aa2ca62cf8fa3"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "bea2f6aedc4834fab37b7225daac03a5"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "0bd8e083d5fb8f9208b09d45998ba83a"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5ded255b289a02ecc6938f6f1a7ffa98"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "db4f7bec2be808a549da08fbeded907c"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d683f479a40b55c1f02d8b5bbda458e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "94a976b213ea407aa7a38704b42e4d78"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "12a57d97c913df8d93fa332f838940d1"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "0b27cfea375a67b6379cc4e69cafa21b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8a0ee139befa90202a12d40edb8552a1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6b2a7a9a1465ece119c0e7c1561f3e8e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "80898a6b170ac4778d38dd50fb4f5393"
  },
  {
    "url": "tools/html/index.html",
    "revision": "73153e600e15335d59e734d458d33ce7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "33d7d80a811e2d58f8fec758313ac868"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e45cb7aab33086e743ac3ecac9bd96da"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "0ce6486903706c4b86c60ebfe15fd047"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "0ac1ff39b6db14e1c33b08f9cda302eb"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c3f8c1c3a8067f93916ea385be2f3997"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "25fea31189f4b0c236446d19aadae460"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8f6977f50b9defb244f8e59a3cabe5c9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "61562c7549c9df2a4de1d90061fbcc75"
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
