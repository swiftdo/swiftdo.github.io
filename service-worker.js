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
    "revision": "fcc89fea6532a4aed6f67a78dae237b9"
  },
  {
    "url": "about/app/index.html",
    "revision": "7fa794a5d3029f6f3a46689360e8af56"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e09e915ce741d5fdc82d893133c1b8b4"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "ae5b228078754c9c4db75261ef328479"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c86854946b0a6558146afa05fd87d4d8"
  },
  {
    "url": "about/index/index.html",
    "revision": "c71dc8734a4e265b6c80f356f0f9912e"
  },
  {
    "url": "ai/index.html",
    "revision": "d1d747175f82d6d788553ce4caf861f1"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4ddd25e663826f4a9317a3e3f1331b16"
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
    "url": "assets/js/101.5d3103b3.js",
    "revision": "53baf5bbc25d02f34baa9f89d012689e"
  },
  {
    "url": "assets/js/102.8dcdc396.js",
    "revision": "6030baf5f4e53c08395139f7955f029f"
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
    "url": "assets/js/116.245031f9.js",
    "revision": "318c11c1566a6db05c9c216737a214e6"
  },
  {
    "url": "assets/js/117.4fa45ee5.js",
    "revision": "2b12dd04a463951ca105c178ec23f539"
  },
  {
    "url": "assets/js/118.2074fb00.js",
    "revision": "9c2162dbe0bf1736946c6e02d7884f08"
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
    "url": "assets/js/121.4ffbf873.js",
    "revision": "9206d1c5785046cf90d12a70561810e5"
  },
  {
    "url": "assets/js/122.57df8909.js",
    "revision": "c0f3aef8916a4d2eda7d7c9f817ccec7"
  },
  {
    "url": "assets/js/123.cc6168de.js",
    "revision": "2ace2ed484bed618978010ef3400abf8"
  },
  {
    "url": "assets/js/124.9ccdbc29.js",
    "revision": "22388575c2c0ab91407d1ebb0dfe4f11"
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
    "url": "assets/js/137.0a21db3c.js",
    "revision": "3b013e1faa1ddf416f8e0bd12ae6b327"
  },
  {
    "url": "assets/js/138.d7135091.js",
    "revision": "79e5ce555aa5ddf8a25459c773fc9897"
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
    "url": "assets/js/145.b333dc85.js",
    "revision": "397e600f22569b3f616ed3b6b72ae49e"
  },
  {
    "url": "assets/js/146.b4d3e206.js",
    "revision": "7fe14d16b2c69e8186725a6fc384425f"
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
    "url": "assets/js/151.890aed6d.js",
    "revision": "bc02369c82dd1b7b5368f724ac12a796"
  },
  {
    "url": "assets/js/152.79daad43.js",
    "revision": "29378956f0b066d00a5910267e607c11"
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
    "url": "assets/js/155.dbc8bfab.js",
    "revision": "bb87c36313556b96b4fad60fe651873b"
  },
  {
    "url": "assets/js/156.214631f6.js",
    "revision": "e2ed207e136ce8fa05eab3ad4d53ae83"
  },
  {
    "url": "assets/js/157.52189cf1.js",
    "revision": "947222409fca76ec70f52185ab3b53b5"
  },
  {
    "url": "assets/js/158.36cbb2d7.js",
    "revision": "2745847fd1ddfd1ee01ff7d89083e577"
  },
  {
    "url": "assets/js/159.a57cc202.js",
    "revision": "493fb0c9de0c5ba6a27b69992b2133a6"
  },
  {
    "url": "assets/js/16.3964a598.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.c55e3776.js",
    "revision": "0007db3b04956cfb8a01eb5960474fbd"
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
    "url": "assets/js/175.e4db80f3.js",
    "revision": "8bd4c849ad8ea7e23f4c23e15478b9ef"
  },
  {
    "url": "assets/js/176.806b5480.js",
    "revision": "006180aaaed6e7fda6814e8b72835453"
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
    "url": "assets/js/179.ad52eafa.js",
    "revision": "4d3571c5f9a20e74c9372ddf23d186e7"
  },
  {
    "url": "assets/js/18.8ab0e1f0.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.3f75f6b2.js",
    "revision": "a37dc8f3fe745ce8b6f16ce49cd07b5a"
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
    "url": "assets/js/191.4e6ab562.js",
    "revision": "2c2a623fab8cb3e6c5fbbe6c897ffd35"
  },
  {
    "url": "assets/js/192.ba614c43.js",
    "revision": "a39c6b12db4ad9f538a4197470025898"
  },
  {
    "url": "assets/js/193.6d60472e.js",
    "revision": "b5aa988c1089485e89c3d1bb4ad26567"
  },
  {
    "url": "assets/js/194.85553856.js",
    "revision": "3e5ffaf6d28d1f3a40d23d8ddc683016"
  },
  {
    "url": "assets/js/195.e371cb46.js",
    "revision": "ae87bf74cfa670fa147db5c90d988113"
  },
  {
    "url": "assets/js/196.4eee6c19.js",
    "revision": "ead5b64a24181b5f509ff0986b22f573"
  },
  {
    "url": "assets/js/197.7b5469ee.js",
    "revision": "6e2cfc78c490455b9a389b366942e81a"
  },
  {
    "url": "assets/js/198.38cc5ca5.js",
    "revision": "9940fbe6167fa660e8e9830b40bf2371"
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
    "url": "assets/js/205.aa22bd3a.js",
    "revision": "7a53a71bb5e868c75c0146293e3e23d1"
  },
  {
    "url": "assets/js/206.93908ce1.js",
    "revision": "d542f7581368bcd34c82bbbb5aa6bf3b"
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
    "url": "assets/js/211.b865939a.js",
    "revision": "de4d1e5f12ba4650afe3252b806657d7"
  },
  {
    "url": "assets/js/212.4cd241cd.js",
    "revision": "93b890ad6f524d3306792259cd1c48a3"
  },
  {
    "url": "assets/js/213.a46a1be4.js",
    "revision": "773b080d34f45ea9a350ce74cab26188"
  },
  {
    "url": "assets/js/214.0972cb79.js",
    "revision": "2e5ee3a1abcf4256cad54d6cc26db3e3"
  },
  {
    "url": "assets/js/215.bb8f123e.js",
    "revision": "33fcc8fa01be7355f8131ca55bb7785d"
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
    "url": "assets/js/222.4c560b05.js",
    "revision": "44e60f4ff345ca9590e7cfe68ff1aa72"
  },
  {
    "url": "assets/js/223.70e23ca9.js",
    "revision": "2be6e7035c5f9d19dd0495480e4ff6ec"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
  },
  {
    "url": "assets/js/23.aaac1724.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.a8c839b2.js",
    "revision": "a401ccefb4bd536408223b35792f0f73"
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
    "url": "assets/js/27.a087bf61.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.03f74411.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.cbea7ff0.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.548b5112.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a6631d9f.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
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
    "url": "assets/js/58.774f8eda.js",
    "revision": "dca30611bc890fd7e88559bf45106399"
  },
  {
    "url": "assets/js/59.1bcd708b.js",
    "revision": "51ed3df5a8959f59534e156dbac55ad6"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.5dea0015.js",
    "revision": "af30697af1268a78df9c5b7aa4a50b4e"
  },
  {
    "url": "assets/js/61.0773043e.js",
    "revision": "0a90b05e03a9f8ce591836831b3fa5c3"
  },
  {
    "url": "assets/js/62.33b6285a.js",
    "revision": "f2232581d471418b0272709ba9d2c392"
  },
  {
    "url": "assets/js/63.a47dd61a.js",
    "revision": "95e0334628cfd5a12cf713d48bb6ddd0"
  },
  {
    "url": "assets/js/64.2dd6952d.js",
    "revision": "8f85290a6c45bc1157b7f22b3165ba2d"
  },
  {
    "url": "assets/js/65.9af84460.js",
    "revision": "a7431f664494d4bdc1d30d5583b71f5d"
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
    "url": "assets/js/75.402c1138.js",
    "revision": "8da4bb48e483eb194cb4a0a09a971428"
  },
  {
    "url": "assets/js/76.93824f56.js",
    "revision": "d04bd5309f1e5cf2ba07d18d834e23d1"
  },
  {
    "url": "assets/js/77.272c14a6.js",
    "revision": "0ec270b74099f05682c8a20b9498e71d"
  },
  {
    "url": "assets/js/78.8788dfc0.js",
    "revision": "e96716e7d3e69b0a79066f9d41518b97"
  },
  {
    "url": "assets/js/79.f5188532.js",
    "revision": "fac5c3d116033fc5170a99f87cee60f4"
  },
  {
    "url": "assets/js/8.ce438359.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.64422dc7.js",
    "revision": "9a25115ff498c035c141f7f13b75b384"
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
    "url": "assets/js/85.09f9276e.js",
    "revision": "11232024489600597de9689980a50730"
  },
  {
    "url": "assets/js/86.91a99844.js",
    "revision": "949e742cc324f7babad36c36adff1ce5"
  },
  {
    "url": "assets/js/87.6dccf705.js",
    "revision": "fca1c1bd933012bf450750676338d173"
  },
  {
    "url": "assets/js/88.713e8a41.js",
    "revision": "5191fb22a7c468e4e33382f8908d003a"
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
    "url": "assets/js/94.6d65fb52.js",
    "revision": "cf759784b1c0bd074b77efc91f80a1c8"
  },
  {
    "url": "assets/js/95.f8d708eb.js",
    "revision": "5927f32cdf3f3df31d596a36d169a275"
  },
  {
    "url": "assets/js/96.e07fb889.js",
    "revision": "ab8c2e6d9ca34547c07063341ce5d3ec"
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
    "url": "assets/js/app.80363b06.js",
    "revision": "2bf52a3ea718c7d2751801ee18ad3ec5"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "dc43004f2bbd920acca1cbceaf6ca9ed"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "52f9207826d78e21071ee85c4ad1f356"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "a992a801553a29e9e21279a9e983af9e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "d24491664e2a4971aa45ea393ff7916b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2beced9333341a87bd7a83cc5203814f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a0be7d71e33df2053fa5e618ec4e6664"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ec964f7f8ca7a861b7af8b224f5ca0ea"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "766cc23a506d0c76aad3be741db65344"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "34aba2b97f046385cfa43858c68d532d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "9abb5533c4739f3eed3fd3a1ff055e00"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "aa8098a496fba37cc16bdf369fe48424"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "56b85a562ef029b6ff05a5483ded6257"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "655eec231e08dc08ce602e506b2e8d1d"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "de0d9b810660011f05537586b02f048c"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "a9bdf9ccceae63a9c1b6560807ae882a"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "e39b3c55ed78f0aab1ea673f77eac1a7"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "c8707b107d2ec6f005f575c8e848e114"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "688fdff926afd329c82838a1a2a70b79"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "98054e034787b255240f5714391d784d"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "dba211a28dbda4101f8f568eb72897e4"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "8ce0435b794441342c506331086743f6"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "a782f923b287068665adb6ac4f50955d"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "f10003b7531da09f936dab1e4724dbf1"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "11742fe90637c83b49bbb46af10eb3e4"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "b53846959a87a4224a12ccea4a40b00e"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "e1bd5586ecd78b089638e04b561dd213"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "dcfca100b4114f6aa06194200a854336"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "e6e5997d029d498ae6a0eb938a7a5032"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e1ac642c24f9f155184f28738ac35e10"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "dfce1976510b7c3439c62083d1a66220"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "decd76c443cedbf6291afb7bf31bc1d3"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "79921fb4f633d92b56b1ba99a032ca4c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c9819867a1ddbac708491112f95ab31f"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "d5966f4f82c7196466c5a55d21d9de99"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4dd6037a53948a337111cc7e4036e5a7"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "65804684ad7142daaf3b2f2169da7003"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "3fa90fd9c982bff972e1e9f63e2469ac"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6451a1fa50a7e16f959cfe02d5f8b8f9"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ab44e288b52654f508cd6f7bef1b994c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "7706116b3e6d3f430883d7c23f05ead0"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "8a820b007f3942f9fd139143d0659258"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "e7a689d551a443ece1bc07362ef060c8"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "6ca439b7e0917e9d2fb83345672c56cd"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "fdc27ec771caee60b0ac9a919b72c766"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b2dd5eda77b774117f8c134c8fcefe2f"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2ce2be83fbc7334e553aa7256386e579"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b33ae4a46efede758e3848bdebc3e013"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "45740bece6611b3ef13060b19383ac21"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ad5fbc95dd5840b4eef19c6578163402"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "e6c8747bb3d343a4826d48abf16f6d0a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7202df52a428eeb75050c2732c1cd534"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "40bd22c527c62a5d1b279c80cf7d2279"
  },
  {
    "url": "basis/index/index.html",
    "revision": "768807335662e40033d4e2b9a9d62ab7"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1b96b7d8602179157c44e69543babd9b"
  },
  {
    "url": "book/index.html",
    "revision": "60b136281e30d88544702e62c24a7fbf"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "421caa57a2b367abd7e09d5d9fd4e579"
  },
  {
    "url": "categories/index.html",
    "revision": "72a25abf02543e4017f7d4ac303f7eb7"
  },
  {
    "url": "figma/index.html",
    "revision": "4dff05127cb02afee924256a827000f8"
  },
  {
    "url": "flutter/index.html",
    "revision": "c6b8312925f5a315d167cc72db767fc1"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "f59a94d0983c08fedf4384967d451a0f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0472ba32abc9ec0ab518c40084934888"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "bcc60afe8e9d673314aaacd27feb6aad"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "76933428499e11c029c4b905893e4419"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7b9e5289dcbe07075e577e31dcfa7fbd"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6d84a23135102b8f7d64bc10fbc4ffb6"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "9e1b01e217e25447a3fdb1384e234960"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "61d3f9a66941d41aad36c88251a00334"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c100c4d0acd6333d342e87361e803567"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8911d3c48d9b3e6259c842da6cea0e8d"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8c8c38a35ec5a6642f8e8f3c4ac01252"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "016f1a7f1be2fd4016a317379cc7c75b"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "54be236c5d8eef74a65edc78a7ecca1b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "d7ac5ae420f6c313f6bd31dcd1a7c674"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "9a614823c0cf1f5517caa8e6e7e0befe"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "226331b579da4fd4ffe008bfc25df55a"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "fb5a83a2ae6dd9f76966641341594a86"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "338b7554b96efde8fb85fb850e10b505"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "584f39ebd8dca3fc6b843937908dbfef"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "8f3d9ec7192b13e3a3ca191ab4318ddb"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "936e6aad3394fa3499195b75f13bc3c3"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "186a3b0d1d182a667a8fe98d5533835d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "e94dc59c28292243d9560ff85460e78f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "25cfcc957b926617a7d9bc677fbc562b"
  },
  {
    "url": "haskell/index.html",
    "revision": "779798daf53d5e3615f83e7889330997"
  },
  {
    "url": "index.html",
    "revision": "e5558a548c2e352ce554b5e16c222a09"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "23f6c173aec80c3575b09e76afba7a23"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "413aa7333517c3576289947bb4791a01"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "780be65dfd0fb41e787bb06b22148def"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "8cec7fc2c92f12afa5465586c31c001c"
  },
  {
    "url": "python/index.html",
    "revision": "a49d15a6ec88260be7434b4af7428a79"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "f79b4909badbbf8650104f55a015ac28"
  },
  {
    "url": "swift/better/available.html",
    "revision": "d5468d0e873b8b90b981d1ab2c0e69ce"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4325cb9870565bb831c3f92c113b5e14"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "85bf35b1b65c1c722b60f2c0042ee506"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ca48526ba2b03cec15b1e499fbeb3b0c"
  },
  {
    "url": "swift/better/di.html",
    "revision": "2489238f48cfaa2bd7f90fe563a9eead"
  },
  {
    "url": "swift/better/last.html",
    "revision": "6113373c083c030bea3dfb4d15b81f36"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "8f12c894caed5660948ccd184c8f8061"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e5aef5c35d597ffabd3d66f1195c4dac"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "619f5274d95db92ae7eff603898a838c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "dd89707e14b1b9573e68125224fa53ea"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "9e657ea7f326cd42dba8e2f9168f4384"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "e9202855dabdd7ec8591f7ebc73a7778"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "5dc75e7977635da4d1ed9bad5a88f1b9"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "88bae23b2e1cece017b5543e13150d8e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "354f935e1754775c2dca3e72d5f4a937"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "509cd1569a5b96afc66f6ec7f218d798"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3610ae563e6fc50f10fef173ad2ea3a0"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "60a79f6b3ff8f068a97841ca15153b15"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "2b44408af0ef7373a75b76e381e68d54"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "d8c2abe66aece9d47755fe424a454743"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "27b2c024a2e3c1b6e1649b61b45db831"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "27a8d8d836bd1a0c5bd8ff07c0653d98"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "8342ee9ad6ffb6a1afc332740f7841f1"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "f77a872173188f7396478afad1171317"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "667197c130d3873e8e520377451db86b"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "642947ea8fa33d267372a3d13fb6b9e1"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "79ec4687a30c4f67cf475f01cfc60d40"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f11e3bb00fe28610712ac7d14b6f006f"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "11583cf2b5ad8263aa4b39c78ec9e6c7"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "66f66f04444b1abf405f593a791b4301"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "40a5e040acaf28efe0a6c0aa853cb0b4"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "0c112d4d135cce3b74a43b1fcd370b1d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "860a91a6217ee01547fe452c70b9a967"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "19c53423557fc89593dda6787af173b5"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "f8072b8f8dc0d0e82d77129d0f1aa09f"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "bcf743d02a0661e1d71289d4d21991fa"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3789a666b68caa51a4f594e2cae66b72"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "aba47fe6c06927cfccd676a162644b7c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "36ae4b1f397847a5f84923bc9f61f1c1"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f04545d926f7cd263450eaf1132a87b7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "5c64f0b9d0d0059380859f035c401dbc"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "2f07f8c6243d3b5dd95be5490ee1a5fa"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "c19e777878d954bbbfb5c418919f2897"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "73e73137704d8ac1084331a88f659134"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1846eb214822ca306d7d74a156a6a8f2"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "528f4653fee7028ff736c9564354f15b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "9faa19b8162303868184e6aa7d0e11c8"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "d0095adc46a1ea97575ea422371f4274"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "3b9366a98d7cc17fcedfb8d217a303d4"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "a6ad54e8fe0633a0d1a0c436ce7df6f4"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "c928787d5ea03ac64f9a8665437e19b8"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "6d76098555d7de3910d69ddd4d5f4e2c"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "65213eaa36895fb6426a52ee5e67c905"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "58ac58ce838a16abfeeeae70d95169be"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4813030abe39853ab6879173c44beb7d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "255717e1369f6e98e1e3cb33c39213ed"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "cfa7a7358927996f05da520d73e279d1"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "fa91ee4b0fb8fdc868dc229ca3f18690"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "abbcd5031766fd39f8359d10d1980040"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2471ca2b22b4881f6ebbbd8240af3715"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "af5f49e7622c041e121f9dca1aa58b9f"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2afb37881aa6e241f22dd77330095c2c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "431899f890d214121b3f44987f360878"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "f0a32c416f51f412ee5f6707e7400f4a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "0ddcfdcbb6e20513743c3479a10ceb59"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "51d654a988e5db6c02cccbe53f8d205f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "24d25442f258aac631e29f0e848e8c03"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "df02daf05eaeb7944559c2ab49e27903"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "6816a9d4f85da595eb04bd2e7357a84e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c23b41a16a617e0d9e173f5364ca9287"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d9875e6bb4467ad3ef8c30e33752858c"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4738ff2e0af454909f3c8891d7a505dc"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "10e51662c88ed37dcae3d888f5a8e842"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "36d1f1114070a05a2ec0d7fa92518ccc"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "d4971d339e0d1167cfb59a6ef1216878"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "8e9761a165b193316b21dd0ce09ecc9a"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "185602e3bba00b987b8a6f61f520a855"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2f6129bbbf652229954108f4a7ad124c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a29f9469014e39fbbced6e9b1ffc96f0"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a2be90369fbf5996968d60cb0c93b5e2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "5219d6f289bb8e71a6e75fdb07f26f29"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "0b28c6e308fc263534fb37c90f97c408"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "51e6bc463a54d1950617ff74af929140"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "6eced93c8a66df4a0daedf40fe668aa9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e2576c496b83f31976200adbf06346fd"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "99f693fe2756256e2e7dac87ccbc4d38"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d819876b099a4ee3c7d4efa9ab38fd83"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a7ae37374a71e71360e903f0e44ce3f2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "57d5b5d30ca26837ea6370efc0001bf7"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ea3aab3612ba34fd062c2cbbc28878c4"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "17bce83812f3fb8c054cffc2d0cf826e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "961cee39b44780ba215a53967be93a1a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8687450f38857abd36dbf0f01fda7cd1"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "df0858fe6c265da8a37a44dfca9f5029"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "50aa4acdd59e141d43cf172f70fab135"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5007617f68f14fdcef970ada948818ec"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "26a247025d0a379d7e3e538d34316987"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "97127d89570bd6dd6f3c4bfaa932fe0c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "61deccb758fd8a72fe566f329f879e6f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "8ffd191489d7349ffb1d09dadf38f1ec"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "5be81e5b67be0131b0694825603a801e"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "6c46e094527a5d8e73351c396980039d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "edd6734ebe587a0cb0e8f5bcd030f3b0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "01051bc41ee1d97d693541ea512e6128"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "cf6e5249e5919909bdfb3f93ad02b8c1"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "77203fc3b7eab115a5cb07148905411f"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "5cc5d2069e4c23b4e0c55abdc3891352"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2a03b55fb0b1941d7e25e8cd8e600a4d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "3aa22d19383940441351e40f84cf0de7"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "99ba5c8c3e0a25398e72e5d26d5033a6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c25d03aa6ce5fb068fc2a88526fa6929"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "2a1c56277ac2dd39dce30461e79c8ea6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "059fe4e880c9a0560a9968e9ddd2507a"
  },
  {
    "url": "tag/index.html",
    "revision": "7ffd64af603c6076b463c3551042d844"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "dbd18bd06d69478a60a136cb279c33d1"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f7dd8a8800bef3cff7dc47a5acde821f"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "2d7ab606970b79868f9d32f107ea98d1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "fce431dadef5ffec11b05f487422e997"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ae8a195968a2c893c849a5a299a06887"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "8339597a13d0553167a9ce3c0ea866c3"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "644bc7627354b5a3c8b8da77ceca1268"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "e121f2a2cba75547b1ac98407c4b72c7"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ef247571d6cdf24be8e13ba1f71b7936"
  },
  {
    "url": "tag/json/index.html",
    "revision": "4f1e32d0512435b5d3a68fea7f0cab3f"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "aac20f94b09728137dede8d9a641d6c0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "333aec4f6f586efa214b038c3e6e95d7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "3807c9c15018118aa4aefc227519b781"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8d413df12a54420a3d82deb510cafa7b"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "4c455249f825c5440649e36bb2086b06"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "6fdadce775280c298adcdc40a2ff82c7"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "91d2f210411c605e962f6d40dbf20351"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a9447c3bab9f646054ef430bb660946f"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ba3c828a9f1e550af0e827063c717426"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "cd2ef451ddf0bcdafe2a791f1bdd7e27"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "b6961d6c25f061100d8fa3d581edde97"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1a3c838969ec59a8e27bf2295657eb35"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9436c65e1d8b2747af274155c3ab2b1e"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "cb2848e77892ffd2d66349e14e1078a4"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6a3d9e049a034ef49d13c483c7d6906e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "d0b8e0c78a833ea521586d80661aab5d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "80b2fdbb94811f9eba96c4dbc0969b69"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "de411e282dabafabe868ec870fae12bf"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "36f3545932e3fcf8dbd6d099fa00de6c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "570406ed33558597ce9af0fc0c1870ba"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "243c14eb0722a3738893c0aec8bafcaf"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "e104964f6e17805f1722f9e0ccc83801"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "444c98c5faec592c683aa53a3e4f7dbd"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8351d6c664d0e2f05fdfe40b3957a2c9"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "686e3e09dc10b4942dc15de9a550a6be"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "184dfc7bfa3b55eb8fc059d25a7336fb"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "47a2a15922674ec564e62589c31a5804"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d3ab2618aa832895bd4d2d56d35618e6"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "217a0e9fcc9d1a7c03d228b61e4ff4c6"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "81c4c6c47d93a0971dc1e9a6b180ed22"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b42cc94dcc1a20ef79a267dd23feba6c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "e95f2857f505c98437ef6c7189a44749"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "805819e55cbc090f49c2c69a292029ae"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "110d449aff2b96559e38d35db16c63bd"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "96466f986fcefab8caaa4042666d9e8f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "01d258a18e27ba39fc11cb6a475c1f05"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ceb8e54c6987bf0aa5880b0133286fee"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f9bcaccc6e61c7464a96b0b42a26154a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3091a5d09e6c0c424f36bf6b2e775285"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "9f997b63d6c9a0171809685e3eef9490"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "8d734cfe09badf64bcc15d3735c461bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "3bc1c86b20a066a1ee1232d8d3db6083"
  },
  {
    "url": "tools/git/index.html",
    "revision": "75318297f83909b8e84e339eab6bfc97"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "57256119abe73a4593bd97393d740b1e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c47566d1fc7a3aa5cea01f28a6204bd4"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7dda9c57ec7ea96f09d9b0319eee56c7"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "575ab16fc4f9938810334feca8f7d37c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a45d47ea94abfa5d9e02d7ffc965265e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "b84139d5e10d051de0937be34749926d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c4af2a97b6d180f3191acfc685f1bd72"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e45e0dc8d9ed8c3e4c82543fcac6dc15"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "010d728706ebebb17f5d3b386d160889"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "483caaff837f95af84d13ae475c2607a"
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
