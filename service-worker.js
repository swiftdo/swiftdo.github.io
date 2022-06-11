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
    "revision": "cb2f11186cf6a497525b2a461b472704"
  },
  {
    "url": "about/app/index.html",
    "revision": "5f95dc6f26748718d679a6ec0b0de3c5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "3e11dcb1f656600cb88fc5f995b465a8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "23b0bf0fa297f696fb9eb984eed74e6b"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6b9f6b156953f8f1ca2bc4f8e10cd2f7"
  },
  {
    "url": "about/index/index.html",
    "revision": "e71a1266abea1c21ef2335716553e55c"
  },
  {
    "url": "ai/index.html",
    "revision": "d2104e31587ca20c38953fef9fe70851"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "56a8e51b2a6379e33a3b1c6f41812a7c"
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
    "url": "assets/js/10.9ead56c9.js",
    "revision": "e89e3671b4772e35a72d56a622f39106"
  },
  {
    "url": "assets/js/100.7ff65128.js",
    "revision": "df8a600ecbd41bd8d9823f1c0a1bcab0"
  },
  {
    "url": "assets/js/101.c3bbdfe6.js",
    "revision": "bded750ae0e663fde15444ba044fa141"
  },
  {
    "url": "assets/js/102.c2df6c9e.js",
    "revision": "917912b33133ab1ce7875bd801b02774"
  },
  {
    "url": "assets/js/103.82c54ec1.js",
    "revision": "8355ac4970894a0ca6e4a51d3bbbaf01"
  },
  {
    "url": "assets/js/104.f20cd226.js",
    "revision": "319939cdb04550a296e81028c196454d"
  },
  {
    "url": "assets/js/105.e44d0fa0.js",
    "revision": "b83547fe93253df8884d50dea21b4fd4"
  },
  {
    "url": "assets/js/106.6e92851b.js",
    "revision": "ddd26a0d51545404da74d0a0e6847040"
  },
  {
    "url": "assets/js/107.6bb953a5.js",
    "revision": "87ed72ff2ece725594a667b9b7a1586b"
  },
  {
    "url": "assets/js/108.97d390e5.js",
    "revision": "0290cec538ec5c95b7557db1462c82b7"
  },
  {
    "url": "assets/js/109.5d5f97af.js",
    "revision": "15307a1ca00bc9e1fb19900b30d6a7b5"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.51ec89cd.js",
    "revision": "0b7eb8cd1a97f94041c78cfe3ff3832a"
  },
  {
    "url": "assets/js/111.8bafe8ed.js",
    "revision": "699f8cbbd7dc4714cbf4a6c911a80da7"
  },
  {
    "url": "assets/js/112.e8896936.js",
    "revision": "d49a9fe9c8c3970f39c335297a67a352"
  },
  {
    "url": "assets/js/113.e000afa4.js",
    "revision": "113b30e042561ae1aaf373e653a0678c"
  },
  {
    "url": "assets/js/114.956ba975.js",
    "revision": "59277f30df18a34e11e763d45f8c36e8"
  },
  {
    "url": "assets/js/115.498566f9.js",
    "revision": "37b0aa02bae1567247b45669d05e5d1b"
  },
  {
    "url": "assets/js/116.09982b90.js",
    "revision": "3442ec5bd8778fcc5e5196ca2bb4e6b1"
  },
  {
    "url": "assets/js/117.50480ba0.js",
    "revision": "535c852f7756310d83e7fac984f0f887"
  },
  {
    "url": "assets/js/118.32389ca5.js",
    "revision": "af8cde01cb31ac4ddf73f34591cbe8e0"
  },
  {
    "url": "assets/js/119.8ac92d1a.js",
    "revision": "d160345e86b30e3076ec9408665b4a03"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.45eb64c2.js",
    "revision": "8e61b93c1f58f292c99f1914770bf02a"
  },
  {
    "url": "assets/js/121.91559785.js",
    "revision": "03d362a6951a0d246dbb12efb1c9cf60"
  },
  {
    "url": "assets/js/122.6c5bc7be.js",
    "revision": "efe1ab334b8d552c7dfa483d7f9fccc5"
  },
  {
    "url": "assets/js/123.6d527860.js",
    "revision": "27fcedeb53f9cf3663e85b6478ab7b4e"
  },
  {
    "url": "assets/js/124.8fd553dc.js",
    "revision": "000fc7a21fb21170561fa2fe26667bb4"
  },
  {
    "url": "assets/js/125.645ea02e.js",
    "revision": "8e3655ef44a3489d2b9565389acf8f6f"
  },
  {
    "url": "assets/js/126.6bc5ab5d.js",
    "revision": "b475ac04bffd3702cb1871a5bd8599ee"
  },
  {
    "url": "assets/js/127.efc3473e.js",
    "revision": "c52c58d9b2cc8dd3b947caefefc57759"
  },
  {
    "url": "assets/js/128.abcf4f99.js",
    "revision": "2202aecf738794d4d8d14517de87cc2e"
  },
  {
    "url": "assets/js/129.9cd13188.js",
    "revision": "64fe9ac4fbd0d4e482e0857b620079f6"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.b5a7711b.js",
    "revision": "0bd42f019dd6207bfe6c61aec9496bd7"
  },
  {
    "url": "assets/js/131.e3f98f2d.js",
    "revision": "bcb333122105ba59ef228e7f13f44362"
  },
  {
    "url": "assets/js/132.a3d3e92f.js",
    "revision": "fb3fe2d75221c953a78981ba491c6a9d"
  },
  {
    "url": "assets/js/133.08a4129d.js",
    "revision": "ec4d8d21ff885d48e77981c203cf1776"
  },
  {
    "url": "assets/js/134.da287fda.js",
    "revision": "a37f37eca3f647dce2df3c11682718bc"
  },
  {
    "url": "assets/js/135.f33c3edc.js",
    "revision": "2901fb4f843f94895eb35e003402455e"
  },
  {
    "url": "assets/js/136.b4fd14ee.js",
    "revision": "dad583d734c69e73a291253f6faeb640"
  },
  {
    "url": "assets/js/137.bd1ad1ee.js",
    "revision": "9b5927052496c1a51df98b28239512da"
  },
  {
    "url": "assets/js/138.21ab983e.js",
    "revision": "feee22446bc7367dc51fdcaac7f18a1c"
  },
  {
    "url": "assets/js/139.cd9c9f0d.js",
    "revision": "2d86151b6d96e8c8f6c58bace40c63e3"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.8e319d11.js",
    "revision": "60a9a3afd9650c35967a0750129dc080"
  },
  {
    "url": "assets/js/141.57250bd0.js",
    "revision": "a329afd4652787add3e943bdac75b747"
  },
  {
    "url": "assets/js/142.ad4e2e90.js",
    "revision": "67ad6d4f726a63fe636b6fc6bf9a27c6"
  },
  {
    "url": "assets/js/143.d730bcda.js",
    "revision": "daa288cfa983ff0221000584520f89cb"
  },
  {
    "url": "assets/js/144.f6f6c0fa.js",
    "revision": "6306dc49ef0afba984846e598fb8c5da"
  },
  {
    "url": "assets/js/145.c8bb29b6.js",
    "revision": "ccdf5eb7f1c0344a51ec92a1e6cec351"
  },
  {
    "url": "assets/js/146.e3f87f1a.js",
    "revision": "7c77ab68deec7c1ff543842415b19adb"
  },
  {
    "url": "assets/js/147.f221b6ef.js",
    "revision": "dc5b250a8ca98f8d84322bf54f003f03"
  },
  {
    "url": "assets/js/148.3d4610b0.js",
    "revision": "45ef208bc06e11443f35fd8ad3514596"
  },
  {
    "url": "assets/js/149.e9eca25b.js",
    "revision": "1a77a08447430625b544fadefe36a932"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.c5554a86.js",
    "revision": "9cd711f46abf95ee656f6aebf3929558"
  },
  {
    "url": "assets/js/151.87b94141.js",
    "revision": "8abcef75519b90351fe2d25c2cdb1635"
  },
  {
    "url": "assets/js/152.91f4eb79.js",
    "revision": "f9856dd067852ee904a132e06699b714"
  },
  {
    "url": "assets/js/153.1c84a327.js",
    "revision": "f07b6afef34d6e5824e9fa5691f1fda6"
  },
  {
    "url": "assets/js/154.7c9d4cff.js",
    "revision": "8d11ef3ecb09e03d75a901055126e9b5"
  },
  {
    "url": "assets/js/155.ac0acdc3.js",
    "revision": "3b30c8afb4624dd8f3572a3949f0cf22"
  },
  {
    "url": "assets/js/156.07db6810.js",
    "revision": "42e8937858053407405d214ed4c2e5a5"
  },
  {
    "url": "assets/js/157.bed1c616.js",
    "revision": "513243bbc742def88de6ff4f1e0ef298"
  },
  {
    "url": "assets/js/158.888087d0.js",
    "revision": "881aeb8de87dd66d60b53ecd9c317ea7"
  },
  {
    "url": "assets/js/159.dbb7204b.js",
    "revision": "3b1e19aa1933ca8252a51ac7c6a0aa81"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.30bab5cc.js",
    "revision": "fe5951123f2b484bc3b2108068d366eb"
  },
  {
    "url": "assets/js/161.895396d1.js",
    "revision": "ab385146020ffc881e618ab49d5b1feb"
  },
  {
    "url": "assets/js/162.d9dcf96f.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.dfd52c02.js",
    "revision": "33debfc1ee05dd8151e139e914d1caeb"
  },
  {
    "url": "assets/js/164.546b5fcb.js",
    "revision": "278877adc2cc8b94c02682de583c7e05"
  },
  {
    "url": "assets/js/165.28834199.js",
    "revision": "e71c456079107e9eb891303345d0180f"
  },
  {
    "url": "assets/js/166.b4f59f67.js",
    "revision": "a74dcf4ff3f39497875a046bd9e78ebd"
  },
  {
    "url": "assets/js/167.3513555c.js",
    "revision": "baada8998debe0f1b5dfd7ea9019c17e"
  },
  {
    "url": "assets/js/168.d38316ae.js",
    "revision": "725fc38494f56068bf6f6166983b41b2"
  },
  {
    "url": "assets/js/169.38f9c0f7.js",
    "revision": "7036e5f38a8ab0cf7ba7d2ca4f2abf75"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.853b849c.js",
    "revision": "04c4c47de9b5c1a9215da1e20fa4667f"
  },
  {
    "url": "assets/js/171.f979815a.js",
    "revision": "31351c410c94d9f401efce3bdbee3fa4"
  },
  {
    "url": "assets/js/172.7c9eff5b.js",
    "revision": "561032e58f6774c6d07276c80cfef20a"
  },
  {
    "url": "assets/js/173.75a33a0b.js",
    "revision": "841e60f1665eca275ecd089c7f09d1f9"
  },
  {
    "url": "assets/js/174.28f6290d.js",
    "revision": "3b0e236f396f9a1674a4b23955ec2ef0"
  },
  {
    "url": "assets/js/175.e2da2375.js",
    "revision": "ac253d6e4aa3c470cd70a099cbebc376"
  },
  {
    "url": "assets/js/176.a67098b6.js",
    "revision": "88ae42acbb97d00b0dbb649568b56d29"
  },
  {
    "url": "assets/js/177.8e3d04b8.js",
    "revision": "270ffbcbe3ed24e870b6d0396461ca44"
  },
  {
    "url": "assets/js/178.7a016d70.js",
    "revision": "26bca44b0a6e01c3983ad4bdceba586b"
  },
  {
    "url": "assets/js/179.a314d6a8.js",
    "revision": "109ec491af19b2f53e4853d8d19a9d56"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.a4a8d620.js",
    "revision": "adc19d979261c42730f03be676a06b04"
  },
  {
    "url": "assets/js/181.254d6150.js",
    "revision": "e4072b175154e1f30d536ff654d86125"
  },
  {
    "url": "assets/js/182.3ae40a58.js",
    "revision": "eaa5da51b8c35da5d7ef6954c9fd7be9"
  },
  {
    "url": "assets/js/183.ad6f781a.js",
    "revision": "97701786a1adf1be80d6de6786f1e405"
  },
  {
    "url": "assets/js/184.7960036c.js",
    "revision": "96ed37f6df6a8c823271185c36c597a4"
  },
  {
    "url": "assets/js/185.f818209a.js",
    "revision": "36b866d5a6256b8505c30175165e934b"
  },
  {
    "url": "assets/js/186.e5a5c307.js",
    "revision": "a9fd47faba2a10b50974cefed8d15bf0"
  },
  {
    "url": "assets/js/187.16791499.js",
    "revision": "549a510bad4762e760704fb19ece6e3a"
  },
  {
    "url": "assets/js/188.e3c3f306.js",
    "revision": "4e669d862856c7262d70c98025fec639"
  },
  {
    "url": "assets/js/189.86a58fe1.js",
    "revision": "6e81bb215b2998797db868d60218e812"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.dfbd1041.js",
    "revision": "a58e0dcfff02d0ae1fc7460df672b630"
  },
  {
    "url": "assets/js/191.2df0425f.js",
    "revision": "99dcf832e1b4db23e000ee31f3d8cfcc"
  },
  {
    "url": "assets/js/192.33926b50.js",
    "revision": "8481cc7e738a25a7d04fe4ad6757a067"
  },
  {
    "url": "assets/js/193.e525518c.js",
    "revision": "d62b5476bb9cbb6ba92658c52a7b268b"
  },
  {
    "url": "assets/js/194.e431e4f9.js",
    "revision": "7ea340bb40133dd36ae5ba39bff62234"
  },
  {
    "url": "assets/js/195.5ff63ddb.js",
    "revision": "17bbaec166ed13775deb0e47fea19caa"
  },
  {
    "url": "assets/js/196.ee38a4b1.js",
    "revision": "994efa2eb75695a4497a033180ca4dae"
  },
  {
    "url": "assets/js/197.cf123676.js",
    "revision": "aad2ccd26376f6d274f74adb54cc344f"
  },
  {
    "url": "assets/js/198.9b1c350e.js",
    "revision": "997437a32219af5586196c311a44c6b5"
  },
  {
    "url": "assets/js/199.7e73e432.js",
    "revision": "c06bf2f1c12d1191002c7b80f2c4621e"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.4d202dfc.js",
    "revision": "af281e959c0fdb0b159c7e1a33494000"
  },
  {
    "url": "assets/js/201.307ce97c.js",
    "revision": "74d16916c7419536e6e9c8ff7ec268d2"
  },
  {
    "url": "assets/js/202.fc76d4fe.js",
    "revision": "9239bbe89a0ce9e51e637f9a03315c3b"
  },
  {
    "url": "assets/js/203.72b29027.js",
    "revision": "170685c39d4c06dc78245a6bd8cd5437"
  },
  {
    "url": "assets/js/204.d063c727.js",
    "revision": "ab6bd4e813eb5df972ff9e313f738fdc"
  },
  {
    "url": "assets/js/205.bf0421e9.js",
    "revision": "277fc3ff3c10d5d997805db263f45ee0"
  },
  {
    "url": "assets/js/206.3246759e.js",
    "revision": "027369523460e86922210aa645f6775e"
  },
  {
    "url": "assets/js/207.43dce348.js",
    "revision": "a4063143f62127415626f17f7c7145ed"
  },
  {
    "url": "assets/js/208.38b3c498.js",
    "revision": "5bc6330c06d6f6d25f0ffd75971db550"
  },
  {
    "url": "assets/js/209.54896223.js",
    "revision": "67aaf2d7002940a43df048524e3aa489"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.77a1364f.js",
    "revision": "22da5969881e42725f93081c9ddd1c7f"
  },
  {
    "url": "assets/js/211.bf474142.js",
    "revision": "b0bff1e4b94145d5f7df31c226b58969"
  },
  {
    "url": "assets/js/212.df9c363e.js",
    "revision": "78d22686e32ed110fbf7d72b288bc9ff"
  },
  {
    "url": "assets/js/213.3e7458f4.js",
    "revision": "6d70e4948be3eb315606873e5b5da32d"
  },
  {
    "url": "assets/js/214.cad20970.js",
    "revision": "f02bed334bb1a522e4497cef69775a8a"
  },
  {
    "url": "assets/js/215.b414c124.js",
    "revision": "a9b0c03f1a31c54f73b379a2205466ae"
  },
  {
    "url": "assets/js/216.aad49e46.js",
    "revision": "e1850ecb3c28ba58bb33cd971be4ba82"
  },
  {
    "url": "assets/js/217.c3778d05.js",
    "revision": "7cf51cb2959e970b7d73e9abbfdee29f"
  },
  {
    "url": "assets/js/218.5fdb8558.js",
    "revision": "2a10e1f69754b1182332c4433bc38081"
  },
  {
    "url": "assets/js/219.af1d2482.js",
    "revision": "453969dc5817bd6f2587f1b1545eeeb3"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.d2f91e7a.js",
    "revision": "e48215ed2bcf3be8799944ad8c264265"
  },
  {
    "url": "assets/js/221.91e1c4bf.js",
    "revision": "c9ebd7e9e160117231225e86a3e064de"
  },
  {
    "url": "assets/js/222.ee66a3e4.js",
    "revision": "b91fdbcfd1923106981380291a9266b8"
  },
  {
    "url": "assets/js/223.17339684.js",
    "revision": "1af0c855e914f7ced1a55a5aeb29f5de"
  },
  {
    "url": "assets/js/224.32a51c24.js",
    "revision": "2ece9f1c4dce4673d48e6b9038a17e99"
  },
  {
    "url": "assets/js/225.46955bfd.js",
    "revision": "cdc1deb10a52c3ada0d8d497705b6855"
  },
  {
    "url": "assets/js/226.db7664fc.js",
    "revision": "7957eeb1fd3af2b2529e4da0de526b27"
  },
  {
    "url": "assets/js/227.e761f22a.js",
    "revision": "145985b705223e5f63d10700ff8f335a"
  },
  {
    "url": "assets/js/228.aaec4e34.js",
    "revision": "61c4d1055af6fa44cfd378edd8780fce"
  },
  {
    "url": "assets/js/229.d2853ada.js",
    "revision": "7c6078862c00d8d118a4f28d8aab7201"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.f9d88e9c.js",
    "revision": "3ac5d3957001ab6065d7058a2fcc0bc5"
  },
  {
    "url": "assets/js/231.abc9eab3.js",
    "revision": "99f7bb8814415f05598e305e2ca9c904"
  },
  {
    "url": "assets/js/232.bedbbd76.js",
    "revision": "8c085cc461e2da883d1682df05e6d662"
  },
  {
    "url": "assets/js/233.484e170a.js",
    "revision": "37ab77835dae33d719889aebeb5213ba"
  },
  {
    "url": "assets/js/234.bc187661.js",
    "revision": "7f98f0d4eb42d9767a0483498209e464"
  },
  {
    "url": "assets/js/235.f7903d43.js",
    "revision": "2511e412043477783919cb3a05c5ef2b"
  },
  {
    "url": "assets/js/236.d074c311.js",
    "revision": "2892ebe37cb0d9cb30c2ab54d817bf9f"
  },
  {
    "url": "assets/js/237.068336ca.js",
    "revision": "6acc06da3e9cb3d5caef7cfb4638633b"
  },
  {
    "url": "assets/js/238.8867fd9e.js",
    "revision": "c65173111614c988374ee53888fa6398"
  },
  {
    "url": "assets/js/239.e98049f0.js",
    "revision": "0f9f6d18761ecaf5f02d141d7b6718ed"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.bec2d298.js",
    "revision": "1749a86a00a4e0a1891214f7ecaba95b"
  },
  {
    "url": "assets/js/241.83487ad1.js",
    "revision": "7b372c5ae45d670dcc63f7af279dfa6c"
  },
  {
    "url": "assets/js/242.e7367bc1.js",
    "revision": "1703cb1d5c2c39d246bd3c49df3c1f4a"
  },
  {
    "url": "assets/js/243.1aefa43e.js",
    "revision": "15e878dabf369141b78de0e731e7fdb3"
  },
  {
    "url": "assets/js/244.09690318.js",
    "revision": "7b680f5b84a8c6b5613684e5a7246a6d"
  },
  {
    "url": "assets/js/245.2f75edb8.js",
    "revision": "1ff77f64353ac56733a58425b970a2b5"
  },
  {
    "url": "assets/js/246.80328c8f.js",
    "revision": "817b0986b5cd5791260a8830b939910e"
  },
  {
    "url": "assets/js/247.3d58e676.js",
    "revision": "a19fef2880cc2976b436298ff3cb5ded"
  },
  {
    "url": "assets/js/248.2b4b3c6d.js",
    "revision": "835c82abd8d1e6f5af2576cf2175eb4b"
  },
  {
    "url": "assets/js/249.87d97fb8.js",
    "revision": "42bd0e912204ad6fa17c2ca11e4bcb16"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.81592ccc.js",
    "revision": "51a31f10ae84846a616219049d9b9d18"
  },
  {
    "url": "assets/js/251.4167b5fc.js",
    "revision": "66d4c2bf95b9db70ec556cfb4a003db9"
  },
  {
    "url": "assets/js/252.25e7235b.js",
    "revision": "8d304023fbb2794f5ee4da5177f1424a"
  },
  {
    "url": "assets/js/253.8ecba5e2.js",
    "revision": "b42894051c3f4c0b74a3a7bdc9e36edf"
  },
  {
    "url": "assets/js/254.d4607623.js",
    "revision": "29be0d3a357b4680fb7744b21e277977"
  },
  {
    "url": "assets/js/255.0e5b1596.js",
    "revision": "5f78cb75c0bcb28a7eb1928ba999f76d"
  },
  {
    "url": "assets/js/256.2b669f16.js",
    "revision": "60fcdd842b004c811b835f6e674171d3"
  },
  {
    "url": "assets/js/257.48a30b8f.js",
    "revision": "d015d832f9855d398c470d863cbfff3d"
  },
  {
    "url": "assets/js/258.b3d1256a.js",
    "revision": "dfbbb439413018ce95e023633c2232bb"
  },
  {
    "url": "assets/js/259.236de421.js",
    "revision": "39b4cfa4c120d19ca65721646256cbaa"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.af00259c.js",
    "revision": "7937104172cc7f42168e53512606c6c7"
  },
  {
    "url": "assets/js/261.04d0b656.js",
    "revision": "7c61bc52e34f046ebce364078d5258bd"
  },
  {
    "url": "assets/js/262.39743fa0.js",
    "revision": "6520a7b06017548ac3af3d26cdd28bd8"
  },
  {
    "url": "assets/js/263.9f931974.js",
    "revision": "5bcd8c72681df47e772be0f02f764376"
  },
  {
    "url": "assets/js/264.fa3f640a.js",
    "revision": "898b700407bc45386620cd4c19d05c17"
  },
  {
    "url": "assets/js/265.1458dd9d.js",
    "revision": "bb562aec8537fe130e3d312c0cfb77c6"
  },
  {
    "url": "assets/js/266.73d368b1.js",
    "revision": "c8a86e2d908c95194374d432fc59e861"
  },
  {
    "url": "assets/js/267.86d16eb2.js",
    "revision": "4e45fc56124a5f86ef00755384b0034b"
  },
  {
    "url": "assets/js/268.61da3e25.js",
    "revision": "6f7991e829271d76031c4e83e40c078a"
  },
  {
    "url": "assets/js/269.9b618be1.js",
    "revision": "7bc028ea06440700febbffeb874d589d"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.d8ee6229.js",
    "revision": "dac21739d272a6e1e2f047fbad449894"
  },
  {
    "url": "assets/js/271.231318e6.js",
    "revision": "43ba98bc9add655228c81b34f87bd1f4"
  },
  {
    "url": "assets/js/272.787d97c3.js",
    "revision": "07299fa886692030d6f731404fd1da04"
  },
  {
    "url": "assets/js/273.01d1738a.js",
    "revision": "0f89537f18c3d9de2728a34830942ab7"
  },
  {
    "url": "assets/js/274.b837aa45.js",
    "revision": "1f509e177beef42072f3047f4486799d"
  },
  {
    "url": "assets/js/275.4d35c87c.js",
    "revision": "70f0376f421bd823545070906a63d643"
  },
  {
    "url": "assets/js/276.6fd7e282.js",
    "revision": "0cec53d5233577845f4eaa9e83b6074a"
  },
  {
    "url": "assets/js/277.b4051be9.js",
    "revision": "1fbd5bdda61653df9e8b99a67d476ac0"
  },
  {
    "url": "assets/js/278.8f1651a6.js",
    "revision": "9ec579e5a72e4b7b6879a0d8cca60fa9"
  },
  {
    "url": "assets/js/279.5be8f537.js",
    "revision": "02dddcd301a6a42291d7d3dfd8942e7e"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.99ae21e0.js",
    "revision": "923f6b3a79ca44098429acdcb862e9df"
  },
  {
    "url": "assets/js/281.f3e256d3.js",
    "revision": "dbc678b23c7a3e975f65621c7a97d6c0"
  },
  {
    "url": "assets/js/282.a0bc5a91.js",
    "revision": "10668198bfd8d491cc6d8119970f02d2"
  },
  {
    "url": "assets/js/283.b8e17ca5.js",
    "revision": "1528e94001c1095c8d79c584dda3aa59"
  },
  {
    "url": "assets/js/29.3f14bee9.js",
    "revision": "6eae4a8b0fa2fb5bbc00e054a913e487"
  },
  {
    "url": "assets/js/30.f64b4acb.js",
    "revision": "86aacfb8404d5fc293118c6dc45e7b8d"
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
    "url": "assets/js/34.d2a3d2ff.js",
    "revision": "c843e16b1f81cb784bd8b3847552a791"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.d661a1d4.js",
    "revision": "d7ece8ac2220876dfe52b31c085e85f1"
  },
  {
    "url": "assets/js/37.511e77d4.js",
    "revision": "a601936a06d8493a20e186baf495f1bf"
  },
  {
    "url": "assets/js/38.e7010906.js",
    "revision": "bf9dd04b928f9c64b4889a78f7f68a62"
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
    "url": "assets/js/40.e1b36b0b.js",
    "revision": "5812f7b7ce165af8c24ebe8f28149ee7"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.d6335a0e.js",
    "revision": "c2e201315dc01d9bb899aa40147b4521"
  },
  {
    "url": "assets/js/43.94a96c73.js",
    "revision": "6a90367bc85cb8affca1fa22db7cf092"
  },
  {
    "url": "assets/js/44.496df8f6.js",
    "revision": "ba89d8cf74746c40076c7105921375d3"
  },
  {
    "url": "assets/js/45.f5372cf5.js",
    "revision": "a89c6b2671d6c3a7c5b7a2e1df7d4fe8"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.8808044c.js",
    "revision": "83d7b49dacb0bf461d4a69f4eeb8daaf"
  },
  {
    "url": "assets/js/48.a2e61fc0.js",
    "revision": "898a49ca734b3a33ee9f1112e4681b48"
  },
  {
    "url": "assets/js/49.436504e0.js",
    "revision": "180aaa90e54cb8c1a29bd2d98b935d27"
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
    "url": "assets/js/51.17b67b59.js",
    "revision": "1f0104054fad0dda412d6b734d29977f"
  },
  {
    "url": "assets/js/52.9bb2d446.js",
    "revision": "710ad8f7c8bbd3b15e97e7b3db304bf5"
  },
  {
    "url": "assets/js/53.865d548c.js",
    "revision": "635936281c733aaef73646ece84e0be0"
  },
  {
    "url": "assets/js/54.eb6298eb.js",
    "revision": "02b5ba8409d90c15f01d836d19d341a8"
  },
  {
    "url": "assets/js/55.84ff7f52.js",
    "revision": "0181fbc302f6955e9b9bf75ec6cd71ef"
  },
  {
    "url": "assets/js/56.1b768cf3.js",
    "revision": "52cc19ee33a0d18ba1b66f410cf68d16"
  },
  {
    "url": "assets/js/57.82e26de0.js",
    "revision": "8916be9c99e83adc3eff4d8fbb5bd788"
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
    "url": "assets/js/64.92ca7de0.js",
    "revision": "894ed0738cb6fe50ad6dec4fb944f071"
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
    "url": "assets/js/82.bb6d9443.js",
    "revision": "d602b342653b4c549eada629cc698c88"
  },
  {
    "url": "assets/js/83.fba68469.js",
    "revision": "eeb3cc8108da18a904ecc67bb2bed00c"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.2be196ee.js",
    "revision": "9a185f9253a56626e88749d72e6023d4"
  },
  {
    "url": "assets/js/86.051f416c.js",
    "revision": "3b23d0dceb52c7606bd71b88fbb1f4f9"
  },
  {
    "url": "assets/js/87.790b9794.js",
    "revision": "217c81a998df390d49cdbbb436c7d2e9"
  },
  {
    "url": "assets/js/88.4f03554a.js",
    "revision": "76e3f9fe6ca8cf568b32c2652d4ab1fa"
  },
  {
    "url": "assets/js/89.9d3dcdcb.js",
    "revision": "7338095060331665a2fc8109f60af95c"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.551e6d71.js",
    "revision": "45fc47f4e47c1a2c59ad35ad5a7577ec"
  },
  {
    "url": "assets/js/91.3c3ee169.js",
    "revision": "496a1a3247c594b13a624a5ad176ab5a"
  },
  {
    "url": "assets/js/92.46a19e80.js",
    "revision": "e2c85e52b7c14acb95d96de5d02a481a"
  },
  {
    "url": "assets/js/93.46db8bab.js",
    "revision": "00b6196459ef4cebef018b7f67c2d850"
  },
  {
    "url": "assets/js/94.d9413ed6.js",
    "revision": "f6062ea7ec9ae0dbb1a72e5b6eaaf462"
  },
  {
    "url": "assets/js/95.bdc34454.js",
    "revision": "0b26d6a8dd75c35764e6a1e1ca2c7202"
  },
  {
    "url": "assets/js/96.63b3d2d9.js",
    "revision": "621f90514361f60e2775334c025a1cc7"
  },
  {
    "url": "assets/js/97.9df0918a.js",
    "revision": "a869240b8314a89ddbe96e2d5ba3abca"
  },
  {
    "url": "assets/js/98.0461d494.js",
    "revision": "39b667c5407b427611277ee5e8105187"
  },
  {
    "url": "assets/js/99.df3de36a.js",
    "revision": "537c7ed3ad852b404ab434e212b85396"
  },
  {
    "url": "assets/js/app.fe951eb4.js",
    "revision": "4a8afba517ce342fff648a67fb80ad14"
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
    "revision": "90e789879b8eed6c63d0707de2524c2a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "153a8ab69dff9608612e01464dd2653a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "70e8417d51adee6d9b0fc0e36e14b7f1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b35161bd40b7ba65833a8ba6155580e5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "988758def493125646fb19ea4a056c42"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "c481a8dee7db172ca8fb55b66ee9e969"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b0c4a87a53e464022855b14b6e30d8a7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b00a700fe03b9ff9bc5d955b039cfa99"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c03a454bc10a7d83e8fc4a5290643e8d"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "6beda375703dbf053ef53d3b58a8e792"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3a261446ff076c505c70783be00db454"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "aa5ff057bac93daa160adad2eb1bbe5a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "2ab508fc76cbef051514f1e7cc627eb6"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "af7bb6f1f0fbfbac4d510b5bcf09a675"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "51ed7eb343f05cb962d63ff0d9279682"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "d2a18f74d4fa7ee407247367c7258ca4"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "b943dc375b2b37879800ab32feb9b41c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "ca6f8917361ddc633b68231dbe67e7f7"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6abd42f0f73687698f8ab3fd395a958b"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "eedd9b4f37eb0dcff14558db93f8ec07"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "84b0c59be9ffe1468d28467245f543dd"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "c3d402bc6d7cca65f9edda0a5afcece4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "fe08e043a357aaf3c30f28ce32bb562e"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "657b6318a2d06bdda4936eea2f22c48d"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "43bead2c6267a3ed6ddbc8ed5734b875"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "10341e1187b54e5185a60c7c76d4e909"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "1af01c2131b4c210029fc5f90f67c885"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "3b2365dd0569ac43ef3f94dff79a5297"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "8079043dd28cb775ab7aadfc8c19a585"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "c925b3163b7d36569e80f133376f5dee"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e810328e45331f80cde13d085010607f"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "cd382e04d8de7f706ed5dbbb92d24eaf"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "1126570c068633dca26ff4ba34139875"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "4a0c443b5682dcab564d918fba0140be"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a242b9cb9165b2137d16865f2ddc06d6"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "7a40f076d9f406eaf2311860b4ce809f"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "de22ae8d8e4b76528ccf1c2897f05cc1"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e3983437185d9e749bd69adcba72410b"
  },
  {
    "url": "basis/index/index.html",
    "revision": "e2fce9af95d96a5fc8784edbeb116780"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e7acf457bbdd644b52659a7d8ae221e1"
  },
  {
    "url": "book/index.html",
    "revision": "81cf1c510833708374cf2adf4b37bd1a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5298ca01bc5d559009db1a4b23bbb559"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "bf96fc25963b4602885f242fe159cd78"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "9bed1366f5b4b9dc129ae4b55401140b"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b523d0666a5d88fbb71f76111576fe35"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "7c4cafac3ac1aaa45a9a7ee0b8b407a9"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "1822f33c62eee1449420c743b657f2a3"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "4c4cc81d0f2206f3c9d56b9315f65722"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "d2a566839ff80b905e928ba27cdae0cd"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "175c0aeec4b8b642c5c66eb20aae5112"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "953d9749041373b1fac859d84e6e6f8e"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "69bf525cb57c9d3cf69d3043b72cc624"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "8ac3df91e5a65c27185ca731aa3e7589"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "533c300f00a5b81381daa7cc4aef3d9e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "4e0a12582ca27b1e3d8215b8d791a224"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b3c3624a4d65f517a5ecfe4b5f78573b"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "2e601c9cbfef243730570e47571735b8"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "e9431cd217e43d562bd968ed7544b524"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "60edd87b9a30ae5c11d0231b7ac4844d"
  },
  {
    "url": "c/program/index.html",
    "revision": "4cdab8c6160a9e9a10c84717f41ec464"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "6613270e2b3e6e4d0c50b51657a3330d"
  },
  {
    "url": "categories/index.html",
    "revision": "d3ec88339d4d9a09af767595340c4cfe"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "18fb8f2c85470d4bcad11afcc51e9606"
  },
  {
    "url": "figma/index.html",
    "revision": "a054a92fb426a2652aa91788314defd3"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "422765f058f2abc315d081b28c4b6acc"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "25a47ac0e5a67efd9006ccec1106b860"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "4a9b39d70bbeca2c974cd544a1aa5fc9"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "82497391ea1418245432b05e2e90cfb5"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "20517412c36ba62b1db3eaec5d3f9902"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "15f9d50c0c3f8a0dcf58e0945a616449"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "f58ac036d9dc629850ffc88cea2fdd10"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0f1dd112f0528649f71b4c31b059ddaa"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "1b16e883691e978354ba498181ce0d50"
  },
  {
    "url": "flutter/index.html",
    "revision": "5ffdd53a8431566217366bf919514d72"
  },
  {
    "url": "flutter/point.html",
    "revision": "bbc366ad154b38103c0d49413f411999"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "1757c34cb7a132315a4a996473f94e78"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "c630975e557be4547da87e9170510836"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "54553241c5c67c231c4f6dc710223fb2"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "944af02b26a5dc15b48f6a15815a58b2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "8a604cff6233b049f2e4356c4396ed6b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "50e90f2d44514d834e9c80094765d9b3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "0e13a878d5858f01d688b716e55f59e4"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "086825ac06a9ab211bddeef0e2f3a30e"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a4b5b3a354f5c2fad18777c410fbc64e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "23ab55a24146d37082f3497493e3757e"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "fa1896b87a771f220141a15d930c2ec5"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "4ab805af7804c2cb98d6227aeac9e8d9"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d1afd406ab5b397e2a4e3cf0d162830d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "21765469360d157256b43092b7d0b4e3"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "731f2e661819c471567d8e14cce4a1be"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "fae61006f11e86cd94666221e569e094"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "232a9c573891bd5614c672892a866e39"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "b36cc170aa8217dcb67cb149cf672156"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "06a3c32bc0d42696ea4451880fcb6079"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "cbe646e1376a3b51a9817dfbde4de933"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "9887cd65085eee4f31b93a66e0b7c091"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "52e820119fd3cbe584177050e5410c4b"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "5e814d4c9356f3a3eea2a4c141be32d5"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6c24d819e474969c8137ece603264b07"
  },
  {
    "url": "haskell/index.html",
    "revision": "4a1d4ce7d6970cbe3e3d1152769a21f3"
  },
  {
    "url": "index.html",
    "revision": "db2f66c4af9c0f6387bb8f73a0044663"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "eeec0051a9cbc39cc5f908eb6ccd970c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "e1a0bedcc2cff6f6edaad24d37b2a228"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "8e434e42875da254cc95fab7e3f52a36"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "0aec709d5ef39322e92a6cab7cef7242"
  },
  {
    "url": "python/index.html",
    "revision": "b41243e3c0688bda74c87f382c75c2ab"
  },
  {
    "url": "python/python-ase.html",
    "revision": "b375d4e769740d242d4b237116b66bdc"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "14813d66776cd633d2fcd68017603b8b"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "888cc55891844774291f36ef99406247"
  },
  {
    "url": "python/python-file.html",
    "revision": "8851b1cc5535b11432f85100d703796f"
  },
  {
    "url": "python/python-function.html",
    "revision": "7ed598782a17a8495ead2ab2ce076c34"
  },
  {
    "url": "python/python-generator.html",
    "revision": "93bb2f7a9a85e94ecc08e4bd7b849e1c"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "f23e0945612bc27f7754be9fb47a1924"
  },
  {
    "url": "python/python-module.html",
    "revision": "d92f0622aee81cf4e3a2a8b09de8bb47"
  },
  {
    "url": "python/python-string.html",
    "revision": "b31df05c2f90ff156ed17a4c818148ec"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "db60f97711cee91742c9254bcf3aea7b"
  },
  {
    "url": "read/index.html",
    "revision": "0dc2b5aa61907c985c305a7aae14fc98"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "3fc18f0f94027a4ebc4b19452d9cd57f"
  },
  {
    "url": "swift/better/available.html",
    "revision": "013e817693459af239cc22c7b6636e23"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "1f92f03b2e9206792784ce94b05b792c"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fc3425e5d4f66a5fc54b55bcea3a3352"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "924835126164d9f6713016a691068006"
  },
  {
    "url": "swift/better/di.html",
    "revision": "4a56f2bc15af0f35014c11f6df2ac605"
  },
  {
    "url": "swift/better/index.html",
    "revision": "26e09570ce0b99199761bd62dad4b5e6"
  },
  {
    "url": "swift/better/last.html",
    "revision": "d12d299cc7ac32fd7f60a811dcc4dab0"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1b08de7ffc040092fc0d6e156b17af39"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "0c09c3edc2532aba4996b605e122879e"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "980503400087e70f8c255cbb2efe79d1"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "9a1513b507ae4926b9adf9e68d6f4227"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "e3b566a46632ed17130ea459793200df"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "e660a362f560ebc4110232018b1e691c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8b6fc2510352bd158041ea5c1a2e09a2"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "c360218adc4288e83ea4ba3ef8716922"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "31bdfc2f231850df6da4691f1bd68ad8"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "2a06382677154bcb4039c228c5f1e833"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "591b34c768a1b4e258ca562f12144e3c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a98dfc282581060f0f32ae5b2c9fcd7f"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b58c3efbfae8811a40b42e0ebdbaf8ff"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "7ebfd2f2d353cedf51cd88a28ca8afe2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "29f4850d03fe61f60a6130c01c336a3e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "e946f4abf56bf0a878716b8522b5653e"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "fa5e901e544aca0253d7537efa5470f3"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "b0dd29e581472b39e781e1944b051978"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "e684187754cbe31338c4999b0a6ec205"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b795022b2b98dd0ae66fcd0339428ec5"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "0b25a466f6ed33347fbf889e2ca3b074"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "343130ba359445b8f43a0e5f3027a3b6"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "469d587197cdcbf8d4bf66ab0a4b3836"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "1f46983c0710cf521a59557ae6b7279e"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "b2196c4b32c141a65b741e6ac10bee4f"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "7f5efb8ef42630364c0bbfd4bca0aa32"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "1f35c5efad4cb9cba565d619c6dfbeb9"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "9d9ec95f627d21ba93a615ce879f7eb6"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "55aaeaf4e73d4e0c25e743b6c93c002d"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e8ecaee37a8039a4b2165ca4d6a2e0ee"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "0f8ddc2c2765a94d53588810a526fb61"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "bf17393b7b0d146337088c5929ab3d16"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b14af38980ee8f6baff544d9b6f0ec1d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "86938c67b9cc87863c47cdd305c3c553"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "53d9bce686c982993d1a0b8e54c88f4d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "d6f8e04983ebaf00416f8e4f05416d3e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "2205e069a02bb3772c40028ad26dda48"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "860da7c8caa0fdf87c852e21dd2438cd"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d89204f8b20c5653b15a5ad17be5ea6e"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "84ff2027a47185d6ec92a2da78d2887d"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "7f0da099cec611b2315bfe5fcd7899ab"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "af3c0a9884b58756104e78a60b46552c"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f5f655470813a58ca664018371c58e9b"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "cc1fc20c5cc561a21ddf8257fd47329b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "e607f386cd004e01a7591d6136a000d2"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "c1054f4ec000b05ec43d96638e20624c"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "121d23289ed53d6a12ff24978bbb7027"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e64da1837b46fc5f47cc172e3a1cc921"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "1a4798e5a228cc83de6683408142d9e4"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "f4e54d2f2c3e7f0b55b292a926b992e3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "362225a88baf2199938515f700ed32a8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "c074d2cde2f80522c9a0aea09da463fd"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ec88feac3d7577f004708114e11460ec"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6ca230f979838c9aad4052bcab4bee0f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a3f8a4f2703005647b96accc1be37d00"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "a64149b513d2bbfa27c6aab350c6a55d"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "669d0d71997ce32237b5acb705426c04"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "56c57b9b79427ef7ff5b70fb0a1c7d55"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "fef50bdedcc228ad882b774cb370020b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "bbaaff5e7f827cc1c11508d6d92eab6d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "ff1e1093aec7354f1d2cd70ceb5da82d"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "0fa0590af098bc61eb3ca84a60c63833"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "77a85e6805ea97926c73c36817b521f8"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "a193e075238c87bf49b3ac504ea3bc7b"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6d182db826325af204695cb1238a3a44"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "3e2b2eef0e5e01044aa13339b16d2740"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "81b36573cc3cb0bf334d92df3b0759df"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "4a864e8ee0c06dcc161e3f7a8f4f655a"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "cb99e7d4ed262e26e119c49b7d43f347"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "408107d91d8d699f4786e5a6bd06727c"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "950143d34aa1b8bc237f1c791210ccae"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e7c96b058630859d27129f7c1cc2c4e6"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "7ef4f781e52856927a94022242a203b4"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "273d22a752ad05d297f213125a48b1ed"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8bc98d844ee1dab8da464b5cb3825529"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "42ee1ca931eb3112369466f78cf82c2c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "722ef71e47ed2479a08a18b07722f401"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "e92f209e6747724bd454cfebe8fe9700"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "0f8ed2dc33497e98e0d822d2aa46ee38"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "536ac9598b684732415c8da166e681e7"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "21d717019207db4414fc3655f98cee0d"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "0037f89f9e43cb8c73ff33a4ca764b77"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "95f4e7cc89ef2c32346ceccccf1167b9"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "bd81979b0ac47fb489f78ec2af9d0b7e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "42cf999c0dac892336a8f467e4445004"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "84359cc0d3569d11fb557955f3027b7e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7030271125bf798c5f300b2359d86fba"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "ca771bba4d6d2c0724fd8c9ec9e5f960"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "34cbb885cc597f23568b076fac2d16f3"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "da59f733525845d97fdff235fa0d901a"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "33535725dcde036ef032fef755496480"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "345fd0ad0c3d1bc59374d950eec43e1e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "c1b70b50fcaaf3a0cdc2ffc47b8c8912"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "8cac263acdbd4247660e9b218d7bb791"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "56fbae9bf33df9f815616ce2bdddd698"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "ff28e90a3fcdaa0f3d89c2858a2e3701"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "bc4eba3e7441f92a31d1b825253c60e2"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "0cb31cdafa6d4cec3dec1c8e871f5675"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4a3d0bc58191d745528b8613617f14b1"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ca8d90361331c4fbd4e21e3ff0f495c5"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "c89d24b3b892fee0cfe83db86a98b9a2"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "bd431887e5ed62b66e1b2e102d22cd6d"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "e84d43eff0001e894ec38b7a6db9ba80"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "c815d6b656ff2eac584c4776f5425d92"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "7171421e12ba249b3bdd7f67376f6ebc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "57344e14d57692de4cb5029d47158e73"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b4e9bebdeb9e6608e564bfdd16b6ea0c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "25f90b1ffbd761907cdd2c9ea7c86f6b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ce87fb81f9a1717a6be169b1df9eaeec"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "f8daa12ee00055cd5bde792dc9132fa8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "d3e1abd29606b9706551682177fe46e3"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "915521e7b9813cdffbea817af358146a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "027eeef7172a55502444e71a7a8374d7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "208756731dd04c68a8aa4d4110073efe"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4cabe9143e28a91d4719d179e7dce28c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2e70600fd0ec1995505c49b844e33d75"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c06567feb581dcec26e86b6f1feb263d"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "6875aff36af109ca572e96644fc6b258"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2c0705d5800554ae8c3c381b5f0ceb3e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "17fc87dbb26df4672320252574d2e3e9"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "77e0960b19487de700df397591907aa4"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "d06f14bb5c7ca60f36e084ecfd0b6136"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "32e255043de4bb6f8c1c475ca500b750"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "006eabef9465c4089f5773a73dec9027"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "25f549fa3060e6cd6cb6b89330159b4e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9e71657b784f5d49e8664bf73b9f5858"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "81db1783e71ade6b9bee964203fc85aa"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "1f8d6cfb66508c185374a00b84e5d430"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1e718b3c2f91bd9cc3ed491022cfaf81"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9f11492e592345e6c41a25b6f7624574"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "0cdf3919818626bd54a24a631eaf6710"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4b6c18c27b6f6a585838c3fcc682e985"
  },
  {
    "url": "tag/github/index.html",
    "revision": "0b47befd27b587b78b1bf968bfa22e52"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "cf92887d8b95050e83f44bd352bbc9cd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d72ad1ce0a315193498c82498c15e886"
  },
  {
    "url": "tag/index.html",
    "revision": "eed25719946d0b7671d34749251c145b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3046fcb5e1aa55534894d285a1350ae3"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "573037634263fac39f4ae01cee5b0568"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "2362d5eb55a88268a9b10a4e96710b35"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4d0c2bb3bb2fe87872149d7305695eff"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d59a3db84c53d9591686ee382690e1e3"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "7bbf29a585fd53dc8685bed8126264ad"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "68bc7a998cc6d98518b2d5cdc8f6529d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "ea1469b8aaf670eaaa51bebbff969cbb"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "635dd8770a82060f10dc39c966f6031b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "5cc690931a5a9d5fb100c036a28abc21"
  },
  {
    "url": "tag/json/index.html",
    "revision": "6574e0b2fe230e6a0477e7fccded321b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9934f48888037e78832bf9c65c279e9b"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "9a01023ed7034efc5a10e048bd4f81a2"
  },
  {
    "url": "tag/python/index.html",
    "revision": "fdf4a7483ec6a2884556c78cf79a5537"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "c2ffb4df1f1dd913e3c05e1080f68f91"
  },
  {
    "url": "tag/read/index.html",
    "revision": "c24d852d5c1fa31a177831e42364f898"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "ba25a012a96fd9c3260719fa6e649ce2"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "65b377912cc3bb12484d6de90a910361"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "a09ec9d1dc856d81a146f7d22de0cac8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "f7948a2aa3832a6f9e8490362b38e2b7"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "9b9e243739fdad8d404206db0db9d08f"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "590fcfd0ac95edcc2e45ea6cace5705a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "c9a7e750954a8e1110655bab30808d0c"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "38fdfee8b706984817a47c0724d46485"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "5fad38d84bb41bb9212ae85592a22f2e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "feaafa4e4fce6c3f901e7aad1f49cec7"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "167c053bb334a5cf69f3e1051b927b41"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d0ac0ccfca0637a4769ed085afd9591f"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "4137fbfbfe63bf12f3ffa426247335f9"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "91c2183af66c2e0752a7dd5e63fd905b"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "790399e9de0dd10978b5c41f29a5ed16"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "9a1516158b6da13de4ae0fc2db7c1990"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f0519a9f51ce153cf43e15f0698399a4"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "edfaa73535219979690bcd04e1f1009d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c9673f5428f666bf1ecf370988d1e77d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "27318c0d7df53da5bb1110c52c510d1f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "06a1bf9d4678ed44f034de1101162ad9"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e7d12de7b4a0568c69f59dee65f797e2"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "ea2ecffb0d4301c5a797600aa4c05f20"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a4bb6f108824614def95de6138d0c9fd"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "eb75325f7c997018a9187b6337437d77"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "3c4770222991c6d90dffd1afaa7fbbb5"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "2e94e9df6f57d428f4af3245c0ba0db5"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "e4b58ce69196fbadbf840212167f5bc7"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "dfe68debdd04925ef6c48ea41da187ce"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "693625f0e0abf3d5e22ee8bad88d89e2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "92e78e6ab78bda5b4e755262599dbee3"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "9f8185952755abac1a5d2772c2c08cd0"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "b6470bb937cf9e84644319aff35d8649"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b874b10f556950aad544977e00100058"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "0c29c2a7e428766d760c1cf0b6d76d1f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "62528b910fc95fac95d3f39d1b4e16df"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "33849e6b5c4f33941b2e53368fbebb1f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3d8c2e82ae97291bb09f077b7581265a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "bbeae465346d49251068f2258473b814"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "8da808efeef461d2043e57db4108b963"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6da8655994b1f31681634b0550df11cd"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4c116d9e568978868ab8583db070d11c"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "0c9e5a4e637ad89a54ecf331dc1e3a45"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "7b683be2e0b8959daa460d4c60abe7eb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "db16a11c7ffa0922bc10a5eb02687fa6"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1593a014079329c71bc5ea07ed16b465"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "290c237e058a51c6b05680a56eb4c780"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "36c0cfed5a56ce6eba8d78158b8df392"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a9de58020330850e28b49242770f07b2"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e5387358b652f9a9eec7e8ea6c111e0e"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "f8c761612c9b4aab82ca830187e65fca"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "283688adb297b81eac2b35f9eaf9fd7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "afc5d5310e68da502385f822d84b3fc9"
  },
  {
    "url": "tools/docsify.html",
    "revision": "4f6c36590032dace44159c9b1691e01b"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "5927b233a3c2436b40f24e1df0c4118f"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d59952984bfe4e63ed2aa5ecda97ae6b"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "d2d4219d9b4fd92fda0c410a46f7a408"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5c859e984043643568b26773d8dce679"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "3eb5a937b6320f6b3ba3ba49b1a8ac75"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1b52e3994573567a4a0a00a5d453679a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4525879aa48f0b8598d7492e3e99aef7"
  },
  {
    "url": "tools/note/index.html",
    "revision": "e8098ddb3cf1ba6afa78c8c2a9932a03"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "d32340b0324dc3a6c50cec552354046c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f8c1f331eea245dc8f1d06f1d87026d7"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8c51d4a4ef0d144cc4f8f17c8888196e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e93836f07e2dbb3c63514b00550952b8"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "76c7dc1521dafd042303b966c823607b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4560650334a52816d77c801559d17bcc"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e5232794b16dceb164a8dac582868811"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b6aede999f2943f7736948624bc22a6c"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ba713544aa160bc6b8616bd5de3f82a8"
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
