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
    "revision": "1e84f8f2fc4423165a162d0dee3c48de"
  },
  {
    "url": "about/app/index.html",
    "revision": "d0b6908155e17de9a7b81a6d8ceb5c5b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "42351da489d767007ba34ed9fc623428"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "513344eaeecd69f03117cc847e557530"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "bb34143fe8b97c32b24ece0b7283b147"
  },
  {
    "url": "about/index/index.html",
    "revision": "f1f7cd7b50a4781669a0c5f5adda6400"
  },
  {
    "url": "ai/index.html",
    "revision": "fc32173a7e954af85d7065367e2e3db5"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "d1187460967b49749ec7e3f33a337d7f"
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
    "url": "assets/js/1.40d766f2.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.e8702a46.js",
    "revision": "d738027cd4c9f523669011aeefcfbb54"
  },
  {
    "url": "assets/js/101.e0df4dae.js",
    "revision": "c1180e60610de381171995a1bfe2336b"
  },
  {
    "url": "assets/js/102.d046950c.js",
    "revision": "ccea25e0eabea3f9399ab213793193d8"
  },
  {
    "url": "assets/js/103.00a37402.js",
    "revision": "243e5421bf91e8cd2da940aea0bc2bd5"
  },
  {
    "url": "assets/js/104.bce55cc3.js",
    "revision": "9ebc73d187c7373b0a500c82d8e8c640"
  },
  {
    "url": "assets/js/105.d8ba74ed.js",
    "revision": "62231d8a78104f059ccded7d8dfdde24"
  },
  {
    "url": "assets/js/106.e17dede7.js",
    "revision": "6498993d9f0229012fb49b03df85720f"
  },
  {
    "url": "assets/js/107.b097b565.js",
    "revision": "7aa71def7e2bd81471f1d7350dbcff12"
  },
  {
    "url": "assets/js/108.94301157.js",
    "revision": "150612e3b5cf20af32e3949597219ebb"
  },
  {
    "url": "assets/js/109.46f2712c.js",
    "revision": "c978c38536ec98e4c162a2a4cfbf51e5"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.c37b77aa.js",
    "revision": "ec1a7eca297b3ff25a494dc818cfeb6c"
  },
  {
    "url": "assets/js/111.5513a414.js",
    "revision": "74807d81ed986d746a225736b0cdac36"
  },
  {
    "url": "assets/js/112.30e4a9e8.js",
    "revision": "c3fee6cc474128fca103f300d37574d6"
  },
  {
    "url": "assets/js/113.433d0bcb.js",
    "revision": "1a87c3568facb999f41630d9c86e7eef"
  },
  {
    "url": "assets/js/114.30d2dd3b.js",
    "revision": "3cc3f47f68b131d8dd3c58a042f0e9d0"
  },
  {
    "url": "assets/js/115.120c4634.js",
    "revision": "3a3dbd66965344f91a473305c206a192"
  },
  {
    "url": "assets/js/116.342a0f2a.js",
    "revision": "754df59c056ea96d4f4408bdc37723f2"
  },
  {
    "url": "assets/js/117.958383f2.js",
    "revision": "ceabe24d2ccce72e70cd7978400d2f63"
  },
  {
    "url": "assets/js/118.51daf946.js",
    "revision": "b9bfe7ec6d6b8b791a5802696bb915c4"
  },
  {
    "url": "assets/js/119.58f7b8a4.js",
    "revision": "401b11dc8cf51abfede7356973af9a86"
  },
  {
    "url": "assets/js/12.6d4d6a4d.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.d0c32528.js",
    "revision": "878985506204c57aee1ce1e29ef433e6"
  },
  {
    "url": "assets/js/121.8e609c9d.js",
    "revision": "6c550589b00cdb79d8bb00514e0140fd"
  },
  {
    "url": "assets/js/122.7961bba5.js",
    "revision": "0c25feb14bf4f34a1652dd18c336c53b"
  },
  {
    "url": "assets/js/123.f5977692.js",
    "revision": "2dcae2fde787a3ccea575b300f1e5615"
  },
  {
    "url": "assets/js/124.5226410c.js",
    "revision": "1a4e79fba7bec7d0db3b00b18d10aed1"
  },
  {
    "url": "assets/js/125.9d7ee613.js",
    "revision": "223819be4b62d59e11cb36292810d9a0"
  },
  {
    "url": "assets/js/126.fcd6a0c0.js",
    "revision": "3f8b688ddd1b2d88c4de1cbeae6a70fd"
  },
  {
    "url": "assets/js/127.73c88110.js",
    "revision": "1c7a8ba5ced162b383f96eb96b011fd8"
  },
  {
    "url": "assets/js/128.cf09dc55.js",
    "revision": "1a7e8b221e9019a71af68439d3aaa4f4"
  },
  {
    "url": "assets/js/129.ce1b3ff5.js",
    "revision": "3a084d25775ec344e09ed354dd4553e9"
  },
  {
    "url": "assets/js/13.46bd07b3.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.1735ec2f.js",
    "revision": "0cd6572195bc2f5500241085dc71ce23"
  },
  {
    "url": "assets/js/131.c80934f5.js",
    "revision": "21d1fbe77405e11894574f80805af58b"
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
    "url": "assets/js/134.7d2c1592.js",
    "revision": "14c22a083a1f082b54cc866cb5d2e2c2"
  },
  {
    "url": "assets/js/135.c58cc204.js",
    "revision": "d74ce4c9b7a8940c63d690535a1af0e5"
  },
  {
    "url": "assets/js/136.a931ef7f.js",
    "revision": "1d1b9d687d78823d4a74b98ee6e247df"
  },
  {
    "url": "assets/js/137.4231093d.js",
    "revision": "f7320f3bd74e18700f9d533da773fc0c"
  },
  {
    "url": "assets/js/138.1b33e077.js",
    "revision": "41d6b23d57985ef3613aa8eb258dde87"
  },
  {
    "url": "assets/js/139.87b26a2f.js",
    "revision": "c32cd272d65c128e1f5c151fe1a3dd92"
  },
  {
    "url": "assets/js/14.c655ffbc.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.dbcbf0f7.js",
    "revision": "3dfa602bca1b9bbcd205f01c8ca609bc"
  },
  {
    "url": "assets/js/141.32c9f560.js",
    "revision": "a66047c32141de1cf1e01fcf45ac2fbd"
  },
  {
    "url": "assets/js/142.8f4eb933.js",
    "revision": "df9e2b1821a1e1cf5201b2f8a8edca1f"
  },
  {
    "url": "assets/js/143.6b9c2327.js",
    "revision": "d10c489be161b14726ca8339c87f87e0"
  },
  {
    "url": "assets/js/144.b943f0a0.js",
    "revision": "268858f106a20afb758442504e8702e0"
  },
  {
    "url": "assets/js/145.1fdf4498.js",
    "revision": "a3ba7500319ceaf177f423825bbc302a"
  },
  {
    "url": "assets/js/146.78403d72.js",
    "revision": "b75c409d8b945c1d66b93fc4e30bc4ae"
  },
  {
    "url": "assets/js/147.f95f816a.js",
    "revision": "cad74651608d5c330d444fd480b2846d"
  },
  {
    "url": "assets/js/148.57a5dbc3.js",
    "revision": "ea288096ec4dae65a4c0aeb4ee9786b9"
  },
  {
    "url": "assets/js/149.b2e3f0f7.js",
    "revision": "bf8cb5162ceee5f169b5493e3ccb9ab0"
  },
  {
    "url": "assets/js/15.f3c0b53a.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.ec6bf39b.js",
    "revision": "22d7385421a6d1c930178a146706468b"
  },
  {
    "url": "assets/js/151.0acc351e.js",
    "revision": "80a19bca417a775d514eb2beb4c104c0"
  },
  {
    "url": "assets/js/152.0442e6de.js",
    "revision": "2a52db9d0eae88122e77838f360d7b43"
  },
  {
    "url": "assets/js/153.33a3c898.js",
    "revision": "ccc2f7ab509349a08009f3611696983f"
  },
  {
    "url": "assets/js/154.c411abd4.js",
    "revision": "7b379f8d836648d9101451922d7d7e10"
  },
  {
    "url": "assets/js/155.30cd8547.js",
    "revision": "aff42195ade8ddd9f674c96692997db2"
  },
  {
    "url": "assets/js/156.9812346b.js",
    "revision": "3e98d25194337983b85e9c143e306a51"
  },
  {
    "url": "assets/js/157.04c6d730.js",
    "revision": "b1f5b584310c0a13f62122317527c81e"
  },
  {
    "url": "assets/js/158.d8667e51.js",
    "revision": "0156e1b16bbcc284ad58f17acc7742e4"
  },
  {
    "url": "assets/js/159.0e9fb058.js",
    "revision": "02188d5bb760123ba86a69abffde2721"
  },
  {
    "url": "assets/js/16.3964a598.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.d6babef3.js",
    "revision": "eabdb42d262877c4e0f2b1ae885ae089"
  },
  {
    "url": "assets/js/161.f4c887c8.js",
    "revision": "2ce2c0b12361a959ded2f2d4eaacda36"
  },
  {
    "url": "assets/js/162.8bec19ab.js",
    "revision": "78993d4f5eca00844e2baa60adc312e2"
  },
  {
    "url": "assets/js/163.5022879b.js",
    "revision": "58d6c477cca23c04fb81aceb584e9c77"
  },
  {
    "url": "assets/js/164.41fde81b.js",
    "revision": "1e57818be748461aa45a465358ac1c45"
  },
  {
    "url": "assets/js/165.068cbe68.js",
    "revision": "8cbf0da90d4314df5141c28f35157171"
  },
  {
    "url": "assets/js/166.d9f88d6d.js",
    "revision": "708c7dfd03c109275eca4c9bc1e24c7c"
  },
  {
    "url": "assets/js/167.cac5f189.js",
    "revision": "6c468bb3cf3978f0386f2acb07dcbc26"
  },
  {
    "url": "assets/js/168.2ed9a2d1.js",
    "revision": "f47eed3d05c6f8f6cc2a185973b1ffe3"
  },
  {
    "url": "assets/js/169.f6251259.js",
    "revision": "731dbb74e38d98884847aa3d49e34654"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.f58b3751.js",
    "revision": "f29746059b73d8fb47ab7a3a5fcbdfc1"
  },
  {
    "url": "assets/js/171.28221b14.js",
    "revision": "be35a68bcb57c4bd8fe2220f4cf70bf2"
  },
  {
    "url": "assets/js/172.b33d6b9b.js",
    "revision": "51709d525668cc340213f1bdbb891ae9"
  },
  {
    "url": "assets/js/173.83bebd70.js",
    "revision": "c4f52df7fbf88ec07e5e68d90eca87e6"
  },
  {
    "url": "assets/js/174.dcff100b.js",
    "revision": "db309c89cbb06e5f831a7af31806a9df"
  },
  {
    "url": "assets/js/175.d934bc67.js",
    "revision": "ed434da8eca45837f71464f16a4953fe"
  },
  {
    "url": "assets/js/176.8c98feff.js",
    "revision": "d48cf0486874aa9e890924dda89d64b7"
  },
  {
    "url": "assets/js/177.b76d354f.js",
    "revision": "04a3e6b782ec4bad87f543d22fb04e4d"
  },
  {
    "url": "assets/js/178.780587a2.js",
    "revision": "e6b974ba97d1ac17803e33cb5491d622"
  },
  {
    "url": "assets/js/179.ec00f7b8.js",
    "revision": "5ff68a3372c479ff8fe7713a22219e62"
  },
  {
    "url": "assets/js/18.8ab0e1f0.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.4ea7c9d4.js",
    "revision": "d9fc1fe02f1818feabf42642700618bd"
  },
  {
    "url": "assets/js/181.a523c051.js",
    "revision": "6d957912c62fe99705393c53097d0703"
  },
  {
    "url": "assets/js/182.aff20ffa.js",
    "revision": "cae9af2e6e0c00c4af81d5c52a7a1e40"
  },
  {
    "url": "assets/js/183.ad701f66.js",
    "revision": "f4397ea965bcfbb371f8a380403b8e52"
  },
  {
    "url": "assets/js/184.de68c066.js",
    "revision": "a7b6b597181cfb9e7720735eeab0b205"
  },
  {
    "url": "assets/js/185.541394ba.js",
    "revision": "73693e6c8bfc241c2b1aeea1660e8500"
  },
  {
    "url": "assets/js/186.333753cc.js",
    "revision": "6efa42bf43777def6a9f4afc0c08cfef"
  },
  {
    "url": "assets/js/187.0386c743.js",
    "revision": "63e1e08624c5b6466e7f7bec72cef683"
  },
  {
    "url": "assets/js/188.26bf1b85.js",
    "revision": "bbd4ba40e5f44301a2efc1a9b67cbed0"
  },
  {
    "url": "assets/js/189.6f0c881f.js",
    "revision": "b81ffab11ade8d766db3638248be8709"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.353f5699.js",
    "revision": "b20575dccf4da12a84b2a26985aa4a0a"
  },
  {
    "url": "assets/js/191.25988d34.js",
    "revision": "521397460ff25f9914c3cbbdbb3861f8"
  },
  {
    "url": "assets/js/192.3f2b8152.js",
    "revision": "cb5ffa144bb5225f7c55d104595f3a35"
  },
  {
    "url": "assets/js/193.2aeedd0c.js",
    "revision": "3eb7da8e67918a4925a7b2f8243f69e7"
  },
  {
    "url": "assets/js/194.85553856.js",
    "revision": "3e5ffaf6d28d1f3a40d23d8ddc683016"
  },
  {
    "url": "assets/js/195.c94ef859.js",
    "revision": "4bbba55139fc368903eba5d2eadecbc8"
  },
  {
    "url": "assets/js/196.dc192b72.js",
    "revision": "2add12f178776db237d28719d8d78a88"
  },
  {
    "url": "assets/js/197.52f8e8a2.js",
    "revision": "8106ff5f9275c2ac2b79ce77727a0bf1"
  },
  {
    "url": "assets/js/198.8b902288.js",
    "revision": "391f70e49cbcf79147365d0eeab6c679"
  },
  {
    "url": "assets/js/199.3d53ddcc.js",
    "revision": "ea2ebcc28502d24d063cd9769e91fc99"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.7686a98e.js",
    "revision": "938c0ca564b943394032f76bbe37a00d"
  },
  {
    "url": "assets/js/201.ba4135cc.js",
    "revision": "19bed92acadf069c9a8df9e4eac4baff"
  },
  {
    "url": "assets/js/202.ac96e827.js",
    "revision": "6034bf2f1dff417ce095180eb1871d2a"
  },
  {
    "url": "assets/js/203.61024f24.js",
    "revision": "6d18e4ab2e7b2d3253a6591778dd28ca"
  },
  {
    "url": "assets/js/204.f6417ab2.js",
    "revision": "18acbad8a407459e6fef7aaf32c10243"
  },
  {
    "url": "assets/js/205.f313bcea.js",
    "revision": "6d45c472ef34d738c5e44791b3bbd083"
  },
  {
    "url": "assets/js/206.319c27ea.js",
    "revision": "13dacce2dd2941765f1df5320b6970c8"
  },
  {
    "url": "assets/js/207.a772699f.js",
    "revision": "87686d69f7469d18fdff754936ba4f06"
  },
  {
    "url": "assets/js/208.5659067f.js",
    "revision": "164c82085890c9166c4c3a232ec62860"
  },
  {
    "url": "assets/js/209.edcbcbba.js",
    "revision": "227413294b5cdb5fd2033d7f72f91cfb"
  },
  {
    "url": "assets/js/21.f2ac8f76.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.8d61ecdc.js",
    "revision": "04fe5fd2507c353e2b5cc6a209304e3b"
  },
  {
    "url": "assets/js/211.2911a11b.js",
    "revision": "1f7e69cf796979be5af816df746bb414"
  },
  {
    "url": "assets/js/212.bf8de9bc.js",
    "revision": "366ca2dcf27fe6ab92615ce8742b339b"
  },
  {
    "url": "assets/js/213.8c04565d.js",
    "revision": "45d7e6ac4153f4ef3bbb236fd1e327b4"
  },
  {
    "url": "assets/js/214.053c81e9.js",
    "revision": "10a36dc8d669466c690b110d3e8d3363"
  },
  {
    "url": "assets/js/215.2db71438.js",
    "revision": "6517b805aae13fc24428ca66b2f378f0"
  },
  {
    "url": "assets/js/216.dff923c9.js",
    "revision": "8b65752b4e5ee4835c5aa38b03cf05f2"
  },
  {
    "url": "assets/js/217.74c4d62a.js",
    "revision": "f607e1987974ca01a49acc8a25280848"
  },
  {
    "url": "assets/js/218.d8d74757.js",
    "revision": "df94798552c4f769b6e2db1346873f66"
  },
  {
    "url": "assets/js/219.d50909cd.js",
    "revision": "d2111a1fad26b1a1be199b5361f6b735"
  },
  {
    "url": "assets/js/22.487afd95.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.ef084876.js",
    "revision": "b2d3194d18297ab5b226ad0accef14e9"
  },
  {
    "url": "assets/js/221.ebdc7fa8.js",
    "revision": "6dfd23fc314f217871301ff03842fc2f"
  },
  {
    "url": "assets/js/222.d74b65bd.js",
    "revision": "baebd22c87d2219ebf8e81dbc0375051"
  },
  {
    "url": "assets/js/223.0d623c06.js",
    "revision": "c719adb75ca02d461fdb6e55a4026666"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
  },
  {
    "url": "assets/js/23.19fe5758.js",
    "revision": "89b957d3082166f0288c0324c110cb44"
  },
  {
    "url": "assets/js/24.08b7c412.js",
    "revision": "c17031d89613a2580ecff5a9b138d7fb"
  },
  {
    "url": "assets/js/25.60497cb3.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.537bdc9e.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.a087bf61.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.03f74411.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.2c64d416.js",
    "revision": "7badb60fdb61529301abbc8f5fc6fbf9"
  },
  {
    "url": "assets/js/3.548b5112.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.e05059b5.js",
    "revision": "ed80f03fcdb0a684e25464a11e18ba94"
  },
  {
    "url": "assets/js/31.831b550b.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.1ab61c12.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.aae173fa.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.4dbf7aac.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
  },
  {
    "url": "assets/js/35.ec60a253.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.8b8b5b23.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.eb40e17f.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.463a3ce7.js",
    "revision": "978586b909be63129e5327d1fd722d89"
  },
  {
    "url": "assets/js/39.9192be50.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
  },
  {
    "url": "assets/js/4.6330a4ac.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.2bb4453d.js",
    "revision": "90c3cf99f395792fa706fc288cb332ea"
  },
  {
    "url": "assets/js/41.56528ebb.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
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
    "url": "assets/js/49.14c18272.js",
    "revision": "beda7c9ff34a1223df8a0a11a4b89902"
  },
  {
    "url": "assets/js/5.9cc3b324.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.02012b8c.js",
    "revision": "4f61b355ad22a2be9ee40f8a3f323ccd"
  },
  {
    "url": "assets/js/51.427c43e6.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.abc8f2c4.js",
    "revision": "189d83f1b6d303cbe3dbf6d25db02d81"
  },
  {
    "url": "assets/js/53.0fe89005.js",
    "revision": "940519aa9763076a15a7c967ab7e5b4b"
  },
  {
    "url": "assets/js/54.19cc3736.js",
    "revision": "45452b115966d6f32d225203d8bd2435"
  },
  {
    "url": "assets/js/55.d4e6c173.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
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
    "url": "assets/js/58.2a42567b.js",
    "revision": "a26087acf7bbfcc93849a6750837b06c"
  },
  {
    "url": "assets/js/59.8b2ec786.js",
    "revision": "b35f336d09e2f3723e618f5782622354"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.29e1f2af.js",
    "revision": "20428aec27a133729b599141cc0032be"
  },
  {
    "url": "assets/js/61.0773043e.js",
    "revision": "0a90b05e03a9f8ce591836831b3fa5c3"
  },
  {
    "url": "assets/js/62.776184f8.js",
    "revision": "6e4cb0c8ccdc588334678bae7645ab84"
  },
  {
    "url": "assets/js/63.a200cc44.js",
    "revision": "9389a85671d59c23b2b85b036b135456"
  },
  {
    "url": "assets/js/64.7977efe4.js",
    "revision": "4e1076f37d2e1db92db28d87254f8e43"
  },
  {
    "url": "assets/js/65.82e599ab.js",
    "revision": "b9d87e5dd95f0aa562cc4bdb196e4158"
  },
  {
    "url": "assets/js/66.942817fe.js",
    "revision": "6ad0a03c45623a2f81495fe3b14ef98e"
  },
  {
    "url": "assets/js/67.cd1ac0c9.js",
    "revision": "e8d965be452f4b4d38887d1b96beedb8"
  },
  {
    "url": "assets/js/68.2fb71ee5.js",
    "revision": "4ebbb0dede9ea3db9b444fe18706e092"
  },
  {
    "url": "assets/js/69.c0cd21bc.js",
    "revision": "99b85d7ba96eac46f6518494a85fee81"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.87abe8a0.js",
    "revision": "9268d5b0d6ec1d622a3e2b8b980d156e"
  },
  {
    "url": "assets/js/71.ffd63e21.js",
    "revision": "3ac21153b1f29e71d832127d4ab834f8"
  },
  {
    "url": "assets/js/72.d9f56e54.js",
    "revision": "e6bb7da55c0d4d088f04b3e66a610b6e"
  },
  {
    "url": "assets/js/73.66ca6931.js",
    "revision": "6260c5b9414ca5a90f22bdfc5971918e"
  },
  {
    "url": "assets/js/74.04116cfc.js",
    "revision": "ea646a5fd021b9af80fcd46b4b3064f8"
  },
  {
    "url": "assets/js/75.dabb13cf.js",
    "revision": "7285bd634d6ee9276b3f31036f9bf295"
  },
  {
    "url": "assets/js/76.9c141291.js",
    "revision": "c773a5e35f072c082e96b58a7cdae138"
  },
  {
    "url": "assets/js/77.43a02e8e.js",
    "revision": "b1fe0def8b5edd33874752ea7a657e98"
  },
  {
    "url": "assets/js/78.5fdd05b1.js",
    "revision": "4f15b6b972dcd90f79424b8433cf701e"
  },
  {
    "url": "assets/js/79.e9151112.js",
    "revision": "32fedde14a1b0d54bead32f1f6490360"
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
    "url": "assets/js/81.cd36a78e.js",
    "revision": "a95ef839ca901fbc70f279b5607183aa"
  },
  {
    "url": "assets/js/82.46824b45.js",
    "revision": "c6bd394f57a0be889637ff49ec5a204c"
  },
  {
    "url": "assets/js/83.9f77a348.js",
    "revision": "ed39f7b02e99c8524353d5611b1a4fc8"
  },
  {
    "url": "assets/js/84.84e34f8c.js",
    "revision": "221b1c418c483d6ca5cbb4ca3d0c10ea"
  },
  {
    "url": "assets/js/85.42a41e24.js",
    "revision": "2d5ab90f9ddfccf232b01b9593e823d3"
  },
  {
    "url": "assets/js/86.9e153552.js",
    "revision": "5e4de5bc27a4d29109f7a1957725a6d8"
  },
  {
    "url": "assets/js/87.a129f1c7.js",
    "revision": "10e35b990e587983a73d416a236984c1"
  },
  {
    "url": "assets/js/88.6b210c51.js",
    "revision": "f5e45f12b173cf1328f7656c81c71006"
  },
  {
    "url": "assets/js/89.0434edcc.js",
    "revision": "1924458f646809be43b4adfa556313e8"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.8873cc91.js",
    "revision": "cf12d7a4c187e412f9f9eb8f00e39f9f"
  },
  {
    "url": "assets/js/91.f4dbe90c.js",
    "revision": "bd3b1d200d6526599c2305a0f2704fcf"
  },
  {
    "url": "assets/js/92.92dbedec.js",
    "revision": "1c135c9e1ff43379144afe0aeab8cff0"
  },
  {
    "url": "assets/js/93.168ca1ec.js",
    "revision": "4f7a99d74d060377615e70707c15b9e3"
  },
  {
    "url": "assets/js/94.9dd2f5f0.js",
    "revision": "3398d417549c34b40c2f04c9e27559af"
  },
  {
    "url": "assets/js/95.96290599.js",
    "revision": "586dc1840e020c15c0024a6079dbfd83"
  },
  {
    "url": "assets/js/96.9fefc939.js",
    "revision": "dea1d1943c6cc34056aea2e7b6573782"
  },
  {
    "url": "assets/js/97.9b1a75a2.js",
    "revision": "c833ffcc79f6dd9bd35dd91121669dac"
  },
  {
    "url": "assets/js/98.0ce4d124.js",
    "revision": "24c83de3ff446ed09f036ba6decfe7f9"
  },
  {
    "url": "assets/js/99.f64438b0.js",
    "revision": "617e52dd80d8640b3792e6af1b066616"
  },
  {
    "url": "assets/js/app.01bac450.js",
    "revision": "fdc9d446f0302b2aba5099d85badb5fc"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "457e5a1800d279c4ad1704895e02da7b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "b0bed345aef82d44184e6eec36347d6b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5742e4caeebdd611b18cd7e636739cfa"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ea0a5656ec49848e1549ceab6486bf28"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "aef88217b1fbf365c1fed57cbd58fd5a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "908f44ba1c3ef4023701922aa3e78106"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "033bfe1063e8fd78b1f33c4a92f7a043"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3fff719e5d706c2a77dcd3ca8c78e067"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "05fc18c9ee1d7c6ab522dc689754a2fb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "4fc6ecf892541deafd3b2d2c14a12b23"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "09f9e1995fd1b77b208c94046c32a8f9"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "d830c7d9f26dd0ac2736a9dbbce955a0"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "655d4f50baf5e77dd054b681520899c9"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "048005aa0f67da75c47ee3ae493ddf85"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "ebb43137ef44cb425ca55686cdca0873"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "95d2d90c4ed74a79ba3ee434231b4577"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "4f859e720fe707ad0784ce05a8e58435"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "b250e6b4f35f4c688319bed192a6ed99"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "5f79938b98914d1575a14a169ba20a41"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "60ccd8a86f9d34694a8858cb7e7b873b"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "58dea12cc0c6d9d1d322106ead95faa0"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "910b8a43bbb8df2c6c0ccc82d149a462"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "6a619ad41bd7c21afdb39f6f8cebe7df"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "5f5432af8a4dbb2d0cd45e734e3b9d50"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "ca181cb3887d661979b36f6237536c3d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c60e74c185ae582aa8a1de66e72fe3a5"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ab7fa152bed581a32257ab67aa229cc6"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "8dfca1f07e816b345a5106568290f4ab"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "fbd841d3322b78453fe7f80bec2f2275"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c9c04f2d0822709844fd79df2a18aa6f"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5241649674fc13dadc54c5011d0832c9"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b1052b523d4e41e619741fd85b475e36"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "1f32a95be25fa7ec02aa1f40c866835e"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "6980770d68f85650d338da66b1b7dfe9"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "79b89121b230f877226a2d9eee0b06f2"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5ef45c98ea85d925cd1557a5c47a5d10"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "72572e80d0b7576432972a65bd9d936a"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "17aa528fbe074e559a5c7a93d5f6fd22"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "17073ac736947c3447ff5358f8e64445"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "bb6d617f99b721599d7890a65b074519"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c2ee622534b532eb4f3da887c0177a30"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "04072bf0f78f0a097c8b5f2e3078715e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "dd40278409549b47c2454f9aff3f2781"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3496a3935c0c58d2c3e6342a1d56f2e3"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "08fda2d8b31024b6c9973ab2ed1e7988"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "bea86e7140c383ef1ae0daec4747eec4"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "91d879ada75a52e5ad818af1033e0565"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "04a44bdd170fefdecda7eae6e198f7d0"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "47f3b6afd3ec5c619d4711ebc39b5253"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "b3ba267341c6ac4bbcef1d0532d88db8"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "847d8dd3d6a0a89ba49039efcc3cca6b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "d3c09f5d67fa4d3d8b3a31ab698ec9c2"
  },
  {
    "url": "basis/index/index.html",
    "revision": "ad580d1fee142c779830a5dd40753b0c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "41c7a449efaffc1f2260178b3630905a"
  },
  {
    "url": "book/index.html",
    "revision": "fcb9239a547a3e50a160be4cac3e93a4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8f3177ca403260b54b92ab0d0bb37ec9"
  },
  {
    "url": "categories/index.html",
    "revision": "75df68e3c9a1a1224e5338750c9e25f9"
  },
  {
    "url": "figma/index.html",
    "revision": "257503864d033b20fe6b6b28e0f9560e"
  },
  {
    "url": "flutter/index.html",
    "revision": "3880c408895505b690911ef4bb6ea110"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "840c8b5a0da4fc2a03e7529f9b7d7829"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "223cb34ec7b94068fe3c3a449921792f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "225e220b6e735d468bd2f389bad9fe24"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "4614d4866e56d9b47f3d79b001658f5d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "53ba8114b0cfd08dea4171e649e750fa"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c27bf226ec0bb355d1e29d6f22735c44"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5f5586ee4e663133d10c9e2806806da8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "333d170536b7bcde7cacb732a614946c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "83af30272dd9da2312a0c16d59d584d9"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "c510e66a9a6faec57bbe931537ea6315"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "db0b3614da24009a49b1f690d80abf17"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9323a3b7442433b0b108bc6ed38c6587"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "fee3b488a05a1f46467627e07d9cc783"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "d02297ba958631a1b5a35d7604e53d3e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e79b6fe2fa59f0e310e6c65814bf0bf3"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d066055f58d6025a3e3fe4e6fbef8294"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e230b3d9449b72eeb4f6e8c4fc95761d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "42e2edc038128f440c5c1ceb70fa8fd7"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "edc93ad1af4e6772ac283c7fe97c1ae5"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "43892ee94a8c4b26849c93d5f3cbf76b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "ff9bd2584827c7fdfa03c21ea5646d26"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "bfb936ae65b097b3c0990bda11bf28a7"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b54655fbce29973b50668a02efede129"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "a6b7f675c254af1abedc8b9532ebdcd0"
  },
  {
    "url": "haskell/index.html",
    "revision": "a35642c519210dbef871a7672c432149"
  },
  {
    "url": "index.html",
    "revision": "11bbf10fbc8f7681bf82e72f952ca543"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "6fe0a0e2ae8de12a4c10e84c03f659b1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "817c4409eca53132ed2ef47498f01c97"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3c142086a73cfd8456fc23440496f325"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "00b19282cb9b8b1894a6c628c7ad0a30"
  },
  {
    "url": "python/index.html",
    "revision": "b3b2c3676870652280c8d354e3a709b6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "f6d8fc5d0b70a1878a4015af548f50cf"
  },
  {
    "url": "swift/better/available.html",
    "revision": "1578287196df11cdea6cc08260dc76e1"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4a2f848816fb04ce28aa9103fcfafb48"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ab0120998cd33971be4ea152406d3449"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "600d22117c097183802ae11c345d464f"
  },
  {
    "url": "swift/better/di.html",
    "revision": "50180782690d54b5e7382930830a366d"
  },
  {
    "url": "swift/better/last.html",
    "revision": "91e02f03619d1ba9be7245ccf6ea4846"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "564b6865ee08b9b8a5a6f658e8f527be"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "ac700511158329764dffc4a290088f77"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b00417331377dbb47dfeba482d4dda5c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1a92334c44a774c2dd158a7287dc969b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "e8478f82c9fad85599cda2dc63dd502b"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "78892bea9d5def62cf3389d6a3d88c63"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ea90daf752bff1f47ffcc7556ab4a530"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "43c1676b8a2e18a696d3f6225afc1bd1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "16454dab524ed8df90ed527d22635cc3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0e4bb48b66447a9bbdd93a24ed05f4d9"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "feaf7b2718ab64107dc06c5d0ff4005e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "98f2ead3fc21eaab21818e9206695dec"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "299ff77d69698bff1db411121b65fa43"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f435c78ce32b7c4caf8c06e6efc5e34b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "b96f92a3136659f229ee8c782ae868a6"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a7d416fdb1cddc197c592855487d82d1"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "11182841de5f94d40ac2edc4ca85c4b9"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "4d70f774ff36c796bceb3b10e74f146b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "8c0ecdf9d82cd706ffc32c9fbbe414bd"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "8ce4d103add8631a6a05f17170940564"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "67712dbf41e37e4a24db9414abd1aac9"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "78b7b66e6dff99cdd3bbc0d37ecf88f2"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "38b9fdec84af354f8ae573c1426b85e3"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "80b79b52f653668b729d17a2e1021daf"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "f028cfde1dc4ed13eb01b8219370c969"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "07b4653aa8013d002f919c848dacd747"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "4ebf6afc33744d670477756ba63b5ffe"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "b2d9cf25633f29c9992ce041e5c11627"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "77ccba96ca3f6dd6fbba609459590b67"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "380630f7530d0067f1d6ae15452fe062"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "a6e810f34dcf181685970cd50312744b"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "2397da0a256fb4585b941e2d259758a1"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "17b4869696a324b40a354f0e2ea72ba8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "630b7726584050f9832013c71ae616b1"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9e0520f001d6d043e7bbebdd0b05a7bb"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "edb9200e97515d2fa5eb90ca3a2a0325"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "bfe6b0a14752b53d1ad150cb6f9afb18"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "759f3b12dddb256021a238584a48c4ff"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "982105d837a047a94abf740a026a9d2f"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "fd62f534e5c8c1c2b5fd1c1cbde5ed50"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "92151d4ca4cc3ebcdc7bd6f4b3462f5d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "0f9a6adadd94a6d25d9e225c78f1ff55"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "13b2c338327ff0255d6642b2cc48375c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "3cc965e87d0d12d42198058c584c0bdf"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f9a8d6408cdc1503c55aa2b4658cb76d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "2863dbbfcc1fe83d6e860e1ca9390da3"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "6484043191cb7d1f012bbfa3355d1280"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c5cee653bd950f84504ac0fff5ecd05c"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "dcdd6d92a905833477da058c80b035b7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f1030aed8e5b0690900c66c811f15a5f"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "0eafa3d91dc8a100b8b772e713f4c8a8"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "467b4c0ec541c997efd74b73e6445c98"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "aac3eec859c689b9460898e74a066aa6"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ad5e94e674c5c91fe4b549a6bd542179"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "b9713cd16f8834dd0756b567d3464de8"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "21ac62c768f7beba27c3df970ce72285"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "2553d8f1c29ba3f87789aeba03499c10"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a297c2285dcc19ec4a462cec14de4229"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d12b64c453e4c94216f61de0d62d54a2"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f7bff7da8d33dd23ba22c47b0a6d6830"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "4ce0f0191097d54f61f1b2b13956c8e8"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "15d08a43e3b2c60c35ab160492b18618"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "e0886f8ca3795171728df95c0c5a9fb5"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "5fdeb8c5bf6f891c34abbd33ad1dd4ac"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "1ea822430460216804854cc43868f67b"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ece059989cc1a1a30db52a743f93e393"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e54f91f0aafe9794194b2e1299082944"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "7f8114eb6e1586c80367f98a1fe43ae3"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "4ef9a2844eb6a46028c75b9a7e6dbccc"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "4f099b1a066b8e361503104450faddd5"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "56266e5666e23dd4acad85e6c359c9c4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "55fad002f0fdd3114bab3e8038d00bb9"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "c48b5cf0c68900064d5340f544762611"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "e75370567dad256bd63040f8a7616b73"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "e0485706393547e0115c6910ce5255c1"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "435d5d316ec0761076e099fdc1ac4c17"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "4237a7db03e04523984ebb7ea8aad7ce"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "52553531a19951221f0bc97b09e9c710"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "18f065866fb5efa6acce8e7176fc76b7"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "d3c8d77eee2f7f84e52afeaa21a7d335"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "9225cf9c6fed1d4e30a7fd74fee47859"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "2240ad1be9e5deb2df0d24b7ac990f4a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "d002e5f0410ac9f060c15cbddcf86c32"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7dd345c953df8bbc0093b83b1117d636"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "10b36a268311a2d0065c6129910bca1e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5d07ff2e03e8c0bc2436e23ab661def7"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "be41a815b6728a54930b53f446f95b47"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f76d0e0bf194141d4a8cabfd49d96418"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "2d702af3de174ddfd4bca7b922b769e8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "29cb28daf28d7172e36269bca4ecd833"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "04968f62a7822bef7259a2007a830fbf"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4ebfa93f82587097f5206c01856ac759"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "6ba88a99dbec5507f1cc70baadaabcdd"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b1bb8efe22d0bfcb5449c935ec9eb4b2"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ef5c424c031cecc485f8f1b89da052a4"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "f1f6de0ccd6cad776c331ea8de8c035d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "0f5e3f40df9096f96d2b33a1393cdd30"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a38abda3a71df8f2a427ff9724deefa0"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "f22d0947a9551dd312604b3d5fd51e2f"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3dfe49fbef4cccecee3798ff339d153c"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9665224e7662ab35e5280978783b7276"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "65e20dd64003115a848ac87a5962b992"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "53d8c9b497e1bdd4481d0e556c49ea01"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "92c56016138c3bbd3601ba9815b57ccc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e22db0e859a190cbe49b8e7250048874"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "d95894bf930696e85b46b25ffde6e81f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d13d62c637d89cd9f4eec8f070429ac7"
  },
  {
    "url": "tag/index.html",
    "revision": "f23c006d27f652d6e5dc75db619af5f1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a442d6895b0e5d3966817b6f9fa9b3d5"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "28e8b1c61e0fff4875aa9ae78511c138"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a652c02c335a3938d0cf8d5d316f767f"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "06383e6cb08c9ed9b56a87a00ff094c4"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1e7ec3b11d5ba4f8f0dc04cb5ca75390"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "447019cf3064ac315b2efc8e20325a60"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "34b1852b1796c37f65161be003ca6c4a"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "3d8da26ea03e7926ab21954e7963a1fd"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b8cd41222caa8eec251665d71a21d7b9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "a7ec510a2910bb0da677adb5d3cad6f8"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "07c040f355adcd67e7f101038b6bfe1a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cd840879e411c88cb55fac64998a1472"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "a40eef334e82cc29592d481826f54001"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "c2b13ffe0e19d52c15aeed9a40517633"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "121c2a1b8aa9635fc00b244ded6a7e9e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "3e70b713888cc866a5ac404ffdaae9a6"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "cc542b1465d78bcbea4eb27a9f9ed446"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "92345c19aac59a85ba372a508e59a0ca"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7b99a74edbfc8ed97f1e6f55f0956ddc"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4202029118ee29ad17625e88d84b00da"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "99845b64dda5f7fca1c6af8571969ae8"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "8bed006dfdb33931188f990e7cdce92b"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1e14c22f1ae691fc2c4761f2f0f26941"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "6f0e680f0d311ae4f26a29ceae1a1704"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "07f59e2f66dda382927c974474950691"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "279dc6de5343c0d6fe3b0deaefa584cb"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "da91fd518f29c4953ebab73690934467"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3390c073bd860d9ee7e0688e63aca5c3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5d4d4b20843d9a8caa0995276595b34e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "d728fd67db469a8c7f67fad01987c273"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "c8815d88c64176516aedf77744c5a4bf"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "3bbe27ab42ca6815616281202bd205a2"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "375fe17175d46d250bededc54c552d09"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "34438fdfd629cc20dba46767e624fddf"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ac590c9fca197f90192f74e38acbab32"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "66d039e03788f2752ba21442ba653277"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "77fe68218d5bba7b2f0b53d34a16e295"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d5c53d8e1f25747257302be4db3aef4b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "d3a9efd2f4cf13819a945ae9c8790556"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "e83d9215ec1cc2149ca84f3487b09a0f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2bf9ebc9e1531d62e30f1ab54fcd87c6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3c69c4d74fcc1f8eac536cfe6a23855d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "46477e43ba6c4f6caef947b7d43fa3a9"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d77cabd7e6bfec7b469cdb1ab6753860"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "013b6fa152f66e1cc58712e39b0b1736"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d56cbfa5216d092dd67ca61582561316"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "21720e965759a59e554d1547aac62477"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "c83d3471036f97bda1d6c3a4968ca9e4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "af33ef0d6e7bfe8e1c50d759ac522081"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1331a660c570e78e3d9c64e930d4c21e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "72edf09a50a4c18d65ea39f9200507c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "6315da58811c9a9a0019732d1aa4d7f1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e77751c575fc3b937c335f05cd6c802c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "77b6207c89837ae30eacb7518fdb51ac"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b383d8c0f7b61ddea53f3bd2df912641"
  },
  {
    "url": "tools/html/index.html",
    "revision": "12ecc59221dd6f7a0a768052de8d3103"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5cab846e232d5cbb76453ab5f139913c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f39652159c4c0d22f5ffca2ae67450ef"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "f8e630a6f8f7c70d52b198cca907a290"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1a868bd9fc6cf5f353fd32a8d1313450"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "43ee7e36cea670987ba583723883c1b4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "2071374afe8781bb9c4c271f61bb9711"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5dcbb932389c099ca43ee212c3e9e277"
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
