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
    "revision": "a69465db975d1c3567329d45d9b29618"
  },
  {
    "url": "about/app/index.html",
    "revision": "f3accb50d86a0a4e1c9db10227fcebc1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2b947003a9457d903d45e990b4c4ca2f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "2ce31e8fd835ccb6840bcf8501fb4abe"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "94f907aaea46ab88269f2f18aad94280"
  },
  {
    "url": "about/index/index.html",
    "revision": "9fa32dd8d3e4316d7fcee6f8ba1e9333"
  },
  {
    "url": "ai/index.html",
    "revision": "476253d249740bef216e7f083b668718"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "93e355b1916ac941a395aacbc9424468"
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
    "url": "assets/js/100.68049ebb.js",
    "revision": "445fdfb77c2f00741d8e21deb1c2b562"
  },
  {
    "url": "assets/js/101.3cf5d213.js",
    "revision": "a1c513990e18bcd732791e6c2e9d6d01"
  },
  {
    "url": "assets/js/102.d046950c.js",
    "revision": "ccea25e0eabea3f9399ab213793193d8"
  },
  {
    "url": "assets/js/103.3d4be305.js",
    "revision": "05745ce9bab31e418d1340cdc4ff5982"
  },
  {
    "url": "assets/js/104.4715dbdf.js",
    "revision": "177e85bbe385014d1a845b588ba956a7"
  },
  {
    "url": "assets/js/105.f09787d7.js",
    "revision": "d3b4e1852ca3521940a74396ac5127c9"
  },
  {
    "url": "assets/js/106.1b6c77c6.js",
    "revision": "15adfc773b7db8f33bb6abd67edb3d09"
  },
  {
    "url": "assets/js/107.231ef512.js",
    "revision": "434c8ffe67b162475d0eeb1ced6b70c8"
  },
  {
    "url": "assets/js/108.71748c39.js",
    "revision": "be6fb58575172a6e845778a663dda5c4"
  },
  {
    "url": "assets/js/109.3afb2877.js",
    "revision": "2ac31d967a3c83672458ca1da345903b"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.ed9cac59.js",
    "revision": "9302bdeca3c5771bb78b5bed26804198"
  },
  {
    "url": "assets/js/111.2e4c51a3.js",
    "revision": "9ee2bb51e94855c084ac868effd8dae9"
  },
  {
    "url": "assets/js/112.caa06436.js",
    "revision": "5addcedf2eb6b62d196bcbf168837af1"
  },
  {
    "url": "assets/js/113.60f34cb2.js",
    "revision": "ac0c3f49210fd1931237643e2156ee33"
  },
  {
    "url": "assets/js/114.bc4bc40c.js",
    "revision": "e8191a6db0b2006c1e8f7643313a6fb9"
  },
  {
    "url": "assets/js/115.19771fd2.js",
    "revision": "a0b6ed21df042beb052f5b741ecc5537"
  },
  {
    "url": "assets/js/116.210be6e7.js",
    "revision": "e05cfd38086c5b2902b613c14701d661"
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
    "url": "assets/js/119.92774851.js",
    "revision": "d87c6e0a9d7a2ee162a5b57c629de2a3"
  },
  {
    "url": "assets/js/12.6d4d6a4d.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.825b870c.js",
    "revision": "71042c47957bd1056e27e01cb63e8e5e"
  },
  {
    "url": "assets/js/121.dc06f0e4.js",
    "revision": "f0dacde4ac57800f8fccf8609c01119a"
  },
  {
    "url": "assets/js/122.7961bba5.js",
    "revision": "0c25feb14bf4f34a1652dd18c336c53b"
  },
  {
    "url": "assets/js/123.cc6168de.js",
    "revision": "2ace2ed484bed618978010ef3400abf8"
  },
  {
    "url": "assets/js/124.b221b6af.js",
    "revision": "efc4499393eef80b9a924f3bf7ca95da"
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
    "url": "assets/js/13.c8cf3f4e.js",
    "revision": "df32daa236d6d24d49b15b2e19c2c424"
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
    "url": "assets/js/14.2897d1a8.js",
    "revision": "7856cabbaf7f135f6180957351d76ebc"
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
    "url": "assets/js/161.1847befc.js",
    "revision": "8e2fab09511782cfda3ced3422a2a4e0"
  },
  {
    "url": "assets/js/162.9baa76d1.js",
    "revision": "c0f0adc398d9eb28368ad7734e77a332"
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
    "url": "assets/js/169.d0ef50a6.js",
    "revision": "d8b6711dd97dcd64ca3eb2b3e62c8e6f"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.b91a3987.js",
    "revision": "ada4c338f86a3b2fa6621fbee105d727"
  },
  {
    "url": "assets/js/171.af409e30.js",
    "revision": "6078a5e98f0e9c38d9d9aad8e4e4c5d4"
  },
  {
    "url": "assets/js/172.0ef662e9.js",
    "revision": "74da7065becdd087fd4d7d72486a6af9"
  },
  {
    "url": "assets/js/173.a524da26.js",
    "revision": "1be996bbb2714f698e880c962a44e51e"
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
    "url": "assets/js/189.e1fd9951.js",
    "revision": "90fe665467116e9a54db882a1c0a830e"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.33bc2bfd.js",
    "revision": "4fd2013ae2e9d27be1adb4757c6399b3"
  },
  {
    "url": "assets/js/191.4e6ab562.js",
    "revision": "2c2a623fab8cb3e6c5fbbe6c897ffd35"
  },
  {
    "url": "assets/js/192.14ae6def.js",
    "revision": "829b7e04c061c7ffeff2a49cfb51230e"
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
    "url": "assets/js/213.f8c94606.js",
    "revision": "8df82d95e81e02bdf4e0ed76eb2942ca"
  },
  {
    "url": "assets/js/214.053c81e9.js",
    "revision": "10a36dc8d669466c690b110d3e8d3363"
  },
  {
    "url": "assets/js/215.856acd8a.js",
    "revision": "f7e68ac74b10b69c3d85800d244c9f4a"
  },
  {
    "url": "assets/js/216.dd411b7c.js",
    "revision": "9da3b8fa801d970bc7692554ddd12427"
  },
  {
    "url": "assets/js/217.49c66008.js",
    "revision": "4220ad5c6d0cc43b86f15cca2126abc2"
  },
  {
    "url": "assets/js/218.a52b310e.js",
    "revision": "e4e6d80b6a3caf642cfafd3b388b6d79"
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
    "url": "assets/js/24.d1aa06c5.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
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
    "url": "assets/js/43.a8123ac7.js",
    "revision": "eb09a32076bb4f9fd0bb2dbad1e4d7f6"
  },
  {
    "url": "assets/js/44.c1b05484.js",
    "revision": "6e1188aa64af8dde30cc95571927560f"
  },
  {
    "url": "assets/js/45.14bb0184.js",
    "revision": "afe392c8c52dcce45dada60e9c2be06b"
  },
  {
    "url": "assets/js/46.c6463346.js",
    "revision": "a53df765bcc6ff83040be71272353f91"
  },
  {
    "url": "assets/js/47.1131843d.js",
    "revision": "2962bb1bbbeec72cdcad7a7faf5e00b1"
  },
  {
    "url": "assets/js/48.bc1392ea.js",
    "revision": "e967c7ab435f7bfe0bfeaf4fe6acb6ec"
  },
  {
    "url": "assets/js/49.3598549c.js",
    "revision": "7e3c3b0cdc4e9f69fb5cca6c5ef96a3b"
  },
  {
    "url": "assets/js/5.9cc3b324.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.82b5ea7c.js",
    "revision": "978a5b5ceae53d041decb86daa9c3351"
  },
  {
    "url": "assets/js/51.c7d00a68.js",
    "revision": "06a71b7c7cdc30d021943a98634f871b"
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
    "url": "assets/js/54.2b6181be.js",
    "revision": "f353355994c69d96f79575e96fda3b0c"
  },
  {
    "url": "assets/js/55.a2d61638.js",
    "revision": "74ab596d826c6aed0599eb52eb80efae"
  },
  {
    "url": "assets/js/56.ec6f811f.js",
    "revision": "6d512daef9e2edb86934c206785344bd"
  },
  {
    "url": "assets/js/57.b5490e73.js",
    "revision": "09a34594adee6a5cdf52c4049773a099"
  },
  {
    "url": "assets/js/58.774f8eda.js",
    "revision": "dca30611bc890fd7e88559bf45106399"
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
    "url": "assets/js/60.42451ec7.js",
    "revision": "bbc112cd702807fadc4ef959b441aed9"
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
    "url": "assets/js/66.2e14a297.js",
    "revision": "ded1adbf786675f0f6b58e0edd3d9c49"
  },
  {
    "url": "assets/js/67.9287fd90.js",
    "revision": "f6fd2a9adb70ce5b73f603f46415fa58"
  },
  {
    "url": "assets/js/68.587b5def.js",
    "revision": "30416ec41756279c6a3a8faa0f85521e"
  },
  {
    "url": "assets/js/69.160deaed.js",
    "revision": "42fa6a202a508a9deac08c010eae6965"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.05929cc3.js",
    "revision": "17f805696201d9e7cb967a7d4874a83c"
  },
  {
    "url": "assets/js/71.1e2fc77f.js",
    "revision": "4304182279bf3fe8b04377d5fa66186d"
  },
  {
    "url": "assets/js/72.bb65d65a.js",
    "revision": "b0281061ac8db19789e5b97a69bfed91"
  },
  {
    "url": "assets/js/73.66ca6931.js",
    "revision": "6260c5b9414ca5a90f22bdfc5971918e"
  },
  {
    "url": "assets/js/74.9a9f33a6.js",
    "revision": "66c5bbc8166605231a2de7a51d049a4d"
  },
  {
    "url": "assets/js/75.2f8d7d31.js",
    "revision": "e8c372434fa633a48fe706fabdea16ba"
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
    "url": "assets/js/80.64422dc7.js",
    "revision": "9a25115ff498c035c141f7f13b75b384"
  },
  {
    "url": "assets/js/81.0722ddba.js",
    "revision": "3a8aec5ed2d395d78a81df5f6b33a45c"
  },
  {
    "url": "assets/js/82.a85fc7f1.js",
    "revision": "4276d6dfdeb2bafea0ae46544112d527"
  },
  {
    "url": "assets/js/83.98438e7a.js",
    "revision": "b4eed4b385180946ef21f7e4c0fd460b"
  },
  {
    "url": "assets/js/84.100e508b.js",
    "revision": "41302ce5d8a851ea0bd11874fd6a9251"
  },
  {
    "url": "assets/js/85.f5c088b4.js",
    "revision": "d5ce424c345b6d468deab6deed107680"
  },
  {
    "url": "assets/js/86.9e153552.js",
    "revision": "5e4de5bc27a4d29109f7a1957725a6d8"
  },
  {
    "url": "assets/js/87.25989127.js",
    "revision": "cb705f6fdf2ec3063c1fabaa16934d63"
  },
  {
    "url": "assets/js/88.713e8a41.js",
    "revision": "5191fb22a7c468e4e33382f8908d003a"
  },
  {
    "url": "assets/js/89.f7759cdd.js",
    "revision": "462b77a20c28ea88197c61eac5527eeb"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.b3858698.js",
    "revision": "e5401102b2bee483ad1f479dcb646942"
  },
  {
    "url": "assets/js/91.057270fa.js",
    "revision": "6c457b71a6c4b3be9423c507d910167c"
  },
  {
    "url": "assets/js/92.0c3a4838.js",
    "revision": "77a867a18f01bd771e9698a9ebf36abf"
  },
  {
    "url": "assets/js/93.7a8d3f53.js",
    "revision": "6b8dc54b8492daec305a12e2f318ead7"
  },
  {
    "url": "assets/js/94.806b8d40.js",
    "revision": "2c1b8a1a60e7512d269f8f8b51818651"
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
    "url": "assets/js/97.25bef75f.js",
    "revision": "c24da6b8a578f7f8e173b5c746c44acd"
  },
  {
    "url": "assets/js/98.71c20909.js",
    "revision": "8f0dd584b43333c9c53cc558eb6989bf"
  },
  {
    "url": "assets/js/99.930444e1.js",
    "revision": "0829c5a5adc02102117f2bf3078de6e3"
  },
  {
    "url": "assets/js/app.1e838f8a.js",
    "revision": "6eb6480ce0a98b3b6b670667e705f4e7"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "97412f700f070760df4b7f9ce2b906ca"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "46f03c33ad2125b1f76b1b49ca6334ec"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "ab8a9f4a1838c1ed70a5dfbf904edb9f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5258477b76d3d294ddafc5c659cb1dd9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2993e10260b7b9d35f131c8b6d1a7240"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5b529bcb5098e6cbe7615f201300d6ab"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "df348626acbdbf888d2c88ab4e916f29"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1dfc27831ac91baa2f1ea1ded1d76913"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "3d71cf5861510cb4e1b6d87723691c60"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "42706f09b933c2ffb833426399e76c04"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c0fdad27de199caf1a1811b537cbb64b"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "20172df62d494c896faf2e20b2636f03"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "57a6941b6901cbdc2cd475aaaa6b7fbb"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "8f2fd923528a9952bed281519a8c3d51"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "6e3904a2ba524295938805150309b0d9"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "11d791c160b1bd1bda8873dacaf37f87"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "5e23853694d69d9e9bb029d944796169"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "5d1d09166c381d48f7e1201ba200ee87"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "c16ea42623170907c7ac369f0848b9f0"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "dd1a4ef6b3f9bc1800348b927b3c3b90"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "585d169594703e567f591b5f4a2a7f86"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b38803585729ba115a61ad9b0ab77fb6"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "546b31b1a2651533642ccadab82d2048"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "088df2a8396e33b4db73914f90a077e2"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "fb2c96ab12a7d768aac393967d1aece0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d590636f50f8e22f85742f7c76d12488"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5a3d042e777f68519bc70b62cc0fec72"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "34afd039a0c5b9eae0ae5e4122c739ba"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "85dfdf356640f477f76aeb9ef95bce44"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "b3f566b81e866d128a040387edf74121"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "a688d992b57acb174c920cd7e37f4843"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "ba25c9a6f27d38f357bbde78ad0c340c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "acebd1263a55d000feb0faac4fb0a018"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "5dd756dff3e4b33fec53d819250c07a7"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "661c0c7d469ac36f1784d971a4428770"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "7e4dee0f866078812c33e52e76a6e4e4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "e1812bf214f92d9611960f6023876ea1"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c36cdfd11a4a48593356919cf055cf94"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "9c41168d4c9ee3ce8b94b01aabbdb676"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "aae0a4c018395a721a27f9d96e5ad638"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "92d6194682a3c11b4525ebdd5fe673fe"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "5dd872186626f2abfd457c6fba4821bc"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "d63c845e59e5bddab997f5044130031e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "2f54eea93bddd3e66577ce17e1f7f0fd"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8feea6f6ae2caf8dbcad7b069b2d8ac5"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "8277b000a9607baedbd5b535fd13dd58"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "de763cbee55ca8d90f8fd3ca82736f97"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "69b065aabf0d06f39685603a3f9bfa04"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "db1fd3158322af42043945566608c4c5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "02d8910e6197f8652b198dae721e402d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "904d82b2d3d451895102d3e768fb3ae8"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "6daa44f4554ac97fd903debf4e73573a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "f5cf553a9401b880a114a8879f91419b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "8b3e2e1986130120072d8d314b41358b"
  },
  {
    "url": "book/index.html",
    "revision": "3ed0443c82f5a5672b938a908970d9e7"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "bd9d833e70d9021e68833c037c939b31"
  },
  {
    "url": "categories/index.html",
    "revision": "22e57c6115630b0776f00bb943823ea5"
  },
  {
    "url": "figma/index.html",
    "revision": "ba7bd2ccd3d7d5caeae71b80b59e75a8"
  },
  {
    "url": "flutter/index.html",
    "revision": "6c7af422f20a9f7f88fa249df6507a1d"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5c7e167c76c5e4f026095c021204454a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "04976d6bdf61c6c214340cb954775dae"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c78e73ec0eebea9a217cbe7774dfa600"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "3da591dc994ac079fa12615ef4c4ea5b"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "059d2745f6d11de798e8cd3d291b49ac"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e4e90b26feafe24b3bf95f15c4b46fba"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b76b8ee45f34f275ae276392a31872ad"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "005470f635fecef5d7c4c81aa2f19331"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "73ec6b629a6e4d0da3e6ea21f80e96e4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "cd6e12215abc1f48fb7a6a5df4d9dff8"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "37df1c7731e4e8198ad40c2f45cc41ae"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "c4751db1dcd94a7517fc0ed863bd2565"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "af320cd16bbba683a06a4ab39fdbeae5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "597ad7ccf9fa44eb803078d8db040d1f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "588cf7c93ea0bacd75a29d7f9f94cd13"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "eb42c67b204c70d7052204aabdedcdc9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "8ac20271d66730ded8a55cb1b40cef80"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f21f483d32c154936133624774b92f7d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "57ff0619c6dc7cf27eb854c026111629"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "2f9edfc8fbffccbce3a81d2f986a428b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "1701a4045908d4b0f09f86adf956e26b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "d16bb9339272a7291337ca9d95e71ce7"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5884d9f6781dd5a095b3dd4f8c155829"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "03ecbc7488e9b33992ec79f342df2b8c"
  },
  {
    "url": "haskell/index.html",
    "revision": "479376f26dc04cf4ed3d4ae80f26ce12"
  },
  {
    "url": "index.html",
    "revision": "3a86c44c928e12d1e6c69b2af196bd5b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "9e176c968bf01cf5cf8ab1b511cf0074"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ef813d0ae091213e64208a8ba69318e8"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "1bf4d335bd4149df1232a250a7d32a39"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "2bc100ba798b76e5c8e9e5c319aa4136"
  },
  {
    "url": "python/index.html",
    "revision": "5bc6dbcc9331c730949a1ff13709b608"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "be48b9a70f39022b0af2068be3a41193"
  },
  {
    "url": "swift/better/available.html",
    "revision": "1aaf5c6339ced62906fa2ff9e660c466"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "61465fd6fbe9b35bfc9a10f8913e9e84"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "e9625d50d832e5ae494018e56933a35f"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "cb75f4d15c5d567f09900a67ddd4835a"
  },
  {
    "url": "swift/better/di.html",
    "revision": "43dff43a3304a6107f736f395eaf3da0"
  },
  {
    "url": "swift/better/last.html",
    "revision": "47ac1210500e26d372c56612c0d26062"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "bc58ec6e6dfdd0505acb0a99e3814fd4"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6f484999fc2e1d3b32c6642510c0df14"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a58a216092f96b89b1353d3d171f8137"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1f4e8219101acfc137e52b6267741678"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5107444aa4917037085e0173f4200c1d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9feefcb6e37c7c842b1f51f86321e6d5"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "813b46f7884a37b485e353351c290ba3"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "915499eb7cf33f7612bd4fdc72ba6c6b"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "db94899b7acf8eec92c485b57ec9fdf3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ba93f54b89b41fe7497c401552934781"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "bd150c9f66cd20dae47946b240f6da3e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d4fbc8776c618822c965a24606f91e12"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "b6bb9a4d086fa753e4463fd69f68ab19"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "6fe56d95c1c5dd7b2d1ad3d0fe4c7525"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "d1ce1deeb3908282e9e0134aeabcff65"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c7ff814595926f376061b8f016861a5b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "4a9d1343262722294a28c2cfd06da08d"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "d0d938459166f29e1b6dbd5d1d4ba90b"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "9e3a464ee146913c89fc00780dbabce5"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c9cc188cbf53d27c55081fe7036d18b7"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "5b0f89bc93dd85648beaf09f439ede7a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9bbcb6f11cc7b069406bf6ad91941815"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4975312391bb8f256a0e2880ec1d0b08"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "63a8b6eaea57ac5edd80ddea51a026a7"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "62514cb3013be8c3c155ab7e34953af5"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c784c3f3da71aa9b773054701f587076"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "497a57132efc7e499dd376c954562ece"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "352772b68fcfb1db281618589963b997"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "70ecdfb0c005a01d16fa2633bb1ef940"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "b0ce961e88618075f64b9464bf8e9290"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "9cd546d701909639db80846141ae36d9"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "f6e35c08e0c4418b2eca1087263e4750"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "578c6bf8c2a66bccca47dd2d8654af26"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "693ef7edcc40cc454927b354e2e1c890"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "ea2f74d936e491cdb70033bd8dc00ef8"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "0e86d10aaed65de0bfc305288a1c07b3"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "78212590fd801e5dccdc525b31e63299"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "06fd43bb892c225a22711de06cef8593"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f8cdab4f66b42569d0961cd22fd6456a"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "42b9c29e91868d706c33ac086ffc44cf"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "8d1c889f1a1965a58fe8747602fafa51"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "388b25ff0fdcbc2199364a00ec7767f6"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "5f63961fc865b263a5b6b6d11f8dc3e6"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "28ac2e08b691b29f645ce712d9cd44f2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "1dc2b5d3388c0059c837213805aaadda"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "c148180bbebffec4080aff40c43d4075"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "2555b36367d39d86f91b739742f82d45"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b322cf80686cc87956582603a4c79328"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "2b92e908a0ff2b0026d8197357278bc9"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "59effc3eb91d351a944eca6ae3186dce"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d4e28bd26082be7484cbaeed7e9ac78e"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7b6b03d913d78bc2373c00deaf0ae551"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f0eef3453b6b4b816a9b2800c9720bb0"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "c3888b86c1a3e02a33d1736ac125e60f"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "0fff36242d4aca1c44284115cc518a20"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "efbe66051abab0845618abfc10f833d7"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "95e4dc36fc73e90003ae7035c3847759"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "4c3d3c85f79a552a9af5165d43554717"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "8c9075e0cd27e10253afa14feaef0fe7"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "574d1c88365392ce597f82a011836b14"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5ad8b21406c75f2d5c577cc1ad4cd592"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "ed3e29e6ac8ee39d1dc904a3440e70ec"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1d1ba5008b9f2c45f4729476b8970c63"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "1eb69533d330e0dcb27364ab88567d64"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c727dc5d65832a95ba620ec81043653a"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9e637d1fbf50875db1f1b7d2f9440d6f"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "dc69810914afa9f5117e18ad5a05d528"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "685c167cf5b91f9d38b257c59f2c1fd0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "52dc951e86bc45d7de3a80a5d6af139d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "47287d5fe2a64692d38b677d929fb119"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "ba406dc18141d3480472d0684e7a7d9e"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "605cf5b35534724741f61189dbaf4ae0"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "185c47f5c81ab30d63720ba2b783c71b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "85f62c3df0f2602d5129a947ce066ead"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "4b1becaf2992f3a3626c8089252e8cac"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "8fa508b9e9445f75c642ff813aa2b1cc"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "8a590feae36543c09e6cbbbeca9ec43a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "3eb33c8fcdc4454742e9dd45983d9139"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "def76d7170d17ee00256e84084a93df6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b417eff348fe8e9ad9cf68030c80e2ca"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "16bee6e76a4d1fe2788e71d9a2dbfce0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a86645e7a5d25c1111801bc01796e9aa"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "379b06bba5ff3c771e7b1f97495728c3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "551a7e3abe1d0e2d062e3ea15366b483"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b0516cf3a312665094ea8c19e453f53a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "80fff406f7c8491a4734506701ab814f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f7894480b7be49f32259156d927c70ee"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2610ccac773e7fcbab80fffa80542db9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "3d17eb9202533b9d92d14865f8fd3779"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "8883be67105aa2066090b3543c46666d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8a14aca1fa39c6bd8505e8776fa68fd9"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b0af4b360832f5d1adeb60f9eb367744"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d382debb037875d97014ef9238a4f618"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "db0b9d67ee5af83611bbdf04e9edea44"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4a8f7e055bf4b6298e836e91b05edc6b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ba9c07f7425d5d75d594f98e37453dab"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "19c7514d3f334057d06d82ad21b9b43a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "11b2b5b0304ecee0732073d3b5924d5b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9cc0bc666b14870687bc192ddf8d4853"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "0349ea4b1913949d0c3b8fdb7d5cfcbd"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "c808f56c4cad4effe79b9c945a5121a5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a451843d79cf47ed1cabf4080c7fe140"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "bedca7c069ca66d4b7478af0dec78cb7"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "64302d8dd3124ef98ae1b508d94a97f4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "61e957c44ff210f7d362b16d66ecfd65"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "1a555bfa780f3432a7038de11da8d301"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5cef808180df0a3cca5185ab3984f681"
  },
  {
    "url": "tag/index.html",
    "revision": "6a2b85c93579eb9e1f03a1a9c5112c77"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d7616bd760802090261c4a642d4b23e5"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "608e89034087d1229f7fe1e8bbe78a3c"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ea470a9cdfae341610579360f464c721"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "b8a91da2a83130a0e9389c4a6c01a43c"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "e7fe3b787675ec4866b0930415a76324"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "86c336e9f13030a27b2e9a591cf15c71"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "6bf151e06b28c2a0c8a183a416c09109"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "7a12a866ba8bd0ce78cc8a245cdfe4d4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ec3372acdc6964c59a65d03d7d36d9c6"
  },
  {
    "url": "tag/json/index.html",
    "revision": "86ed47acc1de284f3a89c32d183dfd43"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9e90cc0d7333733e827b88c7150ab07a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8e2834b8486cc13a38c4ee880d34a6a2"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0b7792c84dbc7bf15ac47f59c200044a"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8d7455a9ff6dfacbeb9aac9e6d0cf8ad"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "ac578e7d9ac497661d8d2dbb83eb531f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "c73d5ebd3c89308080ae69564d6c37cc"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9c6bdfc525f2a768af66f25016f21dca"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "fa9d7dc053acbb24135fe2fd06591437"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "69bd06fcf1e0c7497915fd4a4338a7b6"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "9b83193826c06c8129549ae92ee87ecf"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d20a43b584fd216aa2ffdda64e15db16"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "c10905d7bd0cb17830772c8a888f867c"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "78610125af3f6a2cb0c8ce48fe5ea6ac"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "35c26092f6c91f76e7af4606e8c15d33"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "40387d388128f6d61f6f02ff4847d53b"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "22e2c6d9ef1c1322ecb1a49e6aaaa273"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "3db38da8eda9cf30f344e0a2bb472792"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "a89d576d35d1d896179c800febc21b49"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c202c27b9fe0afc567c84a557a9b5a05"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "0ec9919ec8a5d87f65a8efee2ade20e5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "2ca4a723411c74df7c72b6397a997f2b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "014d45c4478c625a4750e02a6c1c2df6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "2c3ce5f69c35da6b296067ca1f19b5af"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9a3e94d6296475b62e0d842576fd4d8f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "18cfce59c6ef839931ef66efb05a8cd2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f869dd661cbe96d5d78528f51baf9cf8"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "cc380a41d15c0b220ba6bf353e684bc1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "07c2218d79889971ce550e7f6e40d749"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "6c55cc892c70ac4308caf0bc1873ab24"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a5d3c37d9b3a3ae97a1d005f88dd6281"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "47ba732e6d139b87762d1d7b2e791607"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "ff07ca9d740893baeb94fbc82da17a4a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e0a5ce509a9ac6281355182a5f97b846"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "34790aacbca98fffc480ffe24d6de27f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e6beffd30e911274a881a38c0087d20c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "479c73a8c46f5d87618ea96e01a92b7a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1c15fb6802a7447d74872a7e442ed964"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2ac1eeebaf86cfd7eb0506586e748469"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "02200d0231e46ca4b02448fabfb3b581"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "1bbd8a9457b47092f9f691ab74a2614e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "d6c43021c0d165a3d762dfc2cec03e88"
  },
  {
    "url": "timeline/index.html",
    "revision": "a8a36f5013dabffd64b07884849c9928"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f8742881e423756c70bf322c73d0d224"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "25a38346a35350dcf7bcdb3542aae709"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "fe25a177de3b40d52faf1a3d5e39c158"
  },
  {
    "url": "tools/html/index.html",
    "revision": "509a290a946cfbf92b376a01175381c0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "dea09263409b71a86f8c42d3fbab8798"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "9c6a79cf49a3b066464f67cffd70b1c5"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "68ea9fd489ee1fa1b6b9ac3dfb7bf3af"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4094e8e8d84dcb1e022bfa796a626a64"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "1cf993ba3cccc71d8a962a6b82f48df6"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b7fc231835b1193cf1d157d890a9974f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a040c2e6018c99af70b752bd141db094"
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
