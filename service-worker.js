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
    "revision": "a79f1a6f4391299f38f58dbde1888582"
  },
  {
    "url": "about/app/index.html",
    "revision": "3d01b8013a5350ba9255c8a47a0ed029"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f2bddf12e5c3fd1097919cbbc51c2600"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f51b4809b5ec54b7988d8a4691e8d1b6"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6e8ce63b8f1536915141a6d7ccf867b5"
  },
  {
    "url": "about/index/index.html",
    "revision": "06dd8bbea1dff8ccbee128799f469e90"
  },
  {
    "url": "ai/index.html",
    "revision": "43680cc1da3342dd5961d14bbf4e8eb7"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "5a9128f80fb1ea19f034c632fc502221"
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
    "url": "assets/js/10.38684270.js",
    "revision": "837455a154999fc64f78f6ee1ce15cfe"
  },
  {
    "url": "assets/js/100.088e8fa3.js",
    "revision": "5921232931f22dea4870e5c9a1ae7e81"
  },
  {
    "url": "assets/js/101.330832ab.js",
    "revision": "28e17445b4544e10b7655cd65bc63c50"
  },
  {
    "url": "assets/js/102.816336bb.js",
    "revision": "180552ceda7012d8a2c89a0b1ac255f4"
  },
  {
    "url": "assets/js/103.bb94d7d7.js",
    "revision": "4ffd8341d15634bfcd8093bb9adbc383"
  },
  {
    "url": "assets/js/104.cfc23d18.js",
    "revision": "b5ff8d506d6d70dd82f530daf493ebe9"
  },
  {
    "url": "assets/js/105.3fda9f7b.js",
    "revision": "147f752669e2ca0c6dcb3d3fa56898c7"
  },
  {
    "url": "assets/js/106.658ce3fd.js",
    "revision": "40c6aa7ab46cb3aed951ec3195d281d8"
  },
  {
    "url": "assets/js/107.2b612b73.js",
    "revision": "d1787edd838b78ef7c4187e224a5b70f"
  },
  {
    "url": "assets/js/108.5d0d1a2d.js",
    "revision": "231490a317b0b7680f5857af08265505"
  },
  {
    "url": "assets/js/109.f3a27906.js",
    "revision": "95f9cce7647273dab6bce51a3b828d52"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.b357b556.js",
    "revision": "492ccbfaeadd66d181fc86097f5b0a50"
  },
  {
    "url": "assets/js/111.36f1ea59.js",
    "revision": "84903311b44510ad31abea7b6c41db77"
  },
  {
    "url": "assets/js/112.69b39f1b.js",
    "revision": "74c0a2d73fea0210472b0438f6e04021"
  },
  {
    "url": "assets/js/113.741cbd0d.js",
    "revision": "f5a053c11e04cf7fd59ee0b399ac906e"
  },
  {
    "url": "assets/js/114.ae7a0e48.js",
    "revision": "96809c14d71370e4e1a8450a92107e90"
  },
  {
    "url": "assets/js/115.47872b0a.js",
    "revision": "3a40c3dec5c05902681c716dbc887588"
  },
  {
    "url": "assets/js/116.898a0ce2.js",
    "revision": "344daf823e620d482843862c341c23da"
  },
  {
    "url": "assets/js/117.52fdd5ea.js",
    "revision": "80ef936e029b65aa3a420b03c7ed606b"
  },
  {
    "url": "assets/js/118.b1bd0c82.js",
    "revision": "646a673bcd79c829385e4041b47121c0"
  },
  {
    "url": "assets/js/119.45bdb243.js",
    "revision": "7b123f2f699a2e98f6d3980afabda2ca"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.0dd0e33a.js",
    "revision": "0f25ec5baf862af183e2bb4945116f1a"
  },
  {
    "url": "assets/js/121.55d9f0d6.js",
    "revision": "04bdd47819e7ddacd132e194aac1c900"
  },
  {
    "url": "assets/js/122.e2ca18c5.js",
    "revision": "947f3731ddc0ba9367cacd2cf9baf897"
  },
  {
    "url": "assets/js/123.3f5e04bf.js",
    "revision": "9f3d05e831b893f6931f80e7edb71811"
  },
  {
    "url": "assets/js/124.f69d5dd6.js",
    "revision": "d3e26b55a72a69c8a1495e7adc5bc970"
  },
  {
    "url": "assets/js/125.d1bc94be.js",
    "revision": "24b3305087f3a141b9d32b7174359bc1"
  },
  {
    "url": "assets/js/126.46cfab2f.js",
    "revision": "30822c310767f675bfed8329974133bf"
  },
  {
    "url": "assets/js/127.c694cdea.js",
    "revision": "fdcad95906582b259a86469a8fb94c49"
  },
  {
    "url": "assets/js/128.0db4c9f1.js",
    "revision": "9fe0c58a84f2873c590f57ee9cf2c0b1"
  },
  {
    "url": "assets/js/129.78570762.js",
    "revision": "e0ccf5f67bfb10e16f898ba0b0b431e4"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.e8e3cc56.js",
    "revision": "68845f7fe9fc67ecedb1011afe15789f"
  },
  {
    "url": "assets/js/131.219f5a46.js",
    "revision": "525dc4d7a48cf10e74f7719b6677dbca"
  },
  {
    "url": "assets/js/132.27ec9b8f.js",
    "revision": "7bcaff5f60c12d528af67e339c2a684a"
  },
  {
    "url": "assets/js/133.0cff17e0.js",
    "revision": "af5d89f8928ccc1bc043b2cda3a2163c"
  },
  {
    "url": "assets/js/134.85650d78.js",
    "revision": "a9029286dd797e71f870791b71cedf83"
  },
  {
    "url": "assets/js/135.fda384de.js",
    "revision": "c418772a42bf3add2839b9b632644f11"
  },
  {
    "url": "assets/js/136.8cf99161.js",
    "revision": "9784445be64b5f106a9c463a7c130708"
  },
  {
    "url": "assets/js/137.54065872.js",
    "revision": "f2763268c04795e5a4538ebaacecd79c"
  },
  {
    "url": "assets/js/138.596127aa.js",
    "revision": "3f2e9c8e86e44d4c00b37e29d31fb237"
  },
  {
    "url": "assets/js/139.f759462c.js",
    "revision": "a7b41d7661f2fe383ba7672034eb538b"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.54043313.js",
    "revision": "eae1dc620f4b7f7d7805498bca906e9f"
  },
  {
    "url": "assets/js/141.0ce72cd3.js",
    "revision": "3d0270070a2ebd432a391e5c11197a08"
  },
  {
    "url": "assets/js/142.9c28541a.js",
    "revision": "554a7450028f53f928d7fd0d343b39d7"
  },
  {
    "url": "assets/js/143.aadec524.js",
    "revision": "8629d50152ffc1f42212e58437d3d6c1"
  },
  {
    "url": "assets/js/144.b31a1eb9.js",
    "revision": "f6fc85e885c0cbf06fa06980ef3317ff"
  },
  {
    "url": "assets/js/145.f2cf75cd.js",
    "revision": "92bcbcd78b0c325648330b7320b72460"
  },
  {
    "url": "assets/js/146.6b0e8086.js",
    "revision": "b22d8b228f07c39d1b22cc2c6a3dddb9"
  },
  {
    "url": "assets/js/147.fa902ae7.js",
    "revision": "19f30c28c845cb186970b7358d498b2e"
  },
  {
    "url": "assets/js/148.3809c7e6.js",
    "revision": "f8d932f7c1eba508b51f837a2eb2ac51"
  },
  {
    "url": "assets/js/149.d0685d8f.js",
    "revision": "f4582450fe151947f4ae90461286937b"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.8f0282c6.js",
    "revision": "834000394bb6be5eb3cdf57d927b0fdb"
  },
  {
    "url": "assets/js/151.8e6d37e9.js",
    "revision": "e347cf52bc9e8fa81646aa83ae97d0a4"
  },
  {
    "url": "assets/js/152.358a7edc.js",
    "revision": "cd8728aa84cfcf10f43a6938d02d54b7"
  },
  {
    "url": "assets/js/153.ff0f4f5e.js",
    "revision": "1b9df490ffc552678959b6ef15b9854a"
  },
  {
    "url": "assets/js/154.c6f96a96.js",
    "revision": "2327376a5ec725e2a3668252c681464b"
  },
  {
    "url": "assets/js/155.ba01f48f.js",
    "revision": "8ef65430545d7b92df0e55e1a51f0c69"
  },
  {
    "url": "assets/js/156.6c9bb002.js",
    "revision": "8f25a453d92b323729b0544f0c004da9"
  },
  {
    "url": "assets/js/157.61d54a5a.js",
    "revision": "738930a26ed1e7dda6f72ae4de59c2f6"
  },
  {
    "url": "assets/js/158.4373cf00.js",
    "revision": "2d5196d481ea1bd7952be314f58df9b6"
  },
  {
    "url": "assets/js/159.61cef5b3.js",
    "revision": "d8de502b67b837f7cea87ec5bde8afc8"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.6b5731b2.js",
    "revision": "2fbb86b9dba24680025764072f53d845"
  },
  {
    "url": "assets/js/161.fd553901.js",
    "revision": "4b482be60370762ee55251c10429cafd"
  },
  {
    "url": "assets/js/162.deb19925.js",
    "revision": "bc4abb9bfda73d980e38e7f5a9c4f47c"
  },
  {
    "url": "assets/js/163.4e01f879.js",
    "revision": "354652c59264ed0d1bb986c77f1eceb0"
  },
  {
    "url": "assets/js/164.bd0e5237.js",
    "revision": "8b0e2c5917bd3e1e3f46a199f3395983"
  },
  {
    "url": "assets/js/165.16b8e0b5.js",
    "revision": "24c1b992af028ad0cb0fcf7e3d9b7c95"
  },
  {
    "url": "assets/js/166.7d6e9853.js",
    "revision": "1012f9ffeaebe7fe596df4d6e6327f99"
  },
  {
    "url": "assets/js/167.a1afb3ea.js",
    "revision": "f265359fd79d426e9cbd2a582198cf9a"
  },
  {
    "url": "assets/js/168.35d989bc.js",
    "revision": "2033f8f37f5a2123af8f24725b6c7318"
  },
  {
    "url": "assets/js/169.2c46859b.js",
    "revision": "804d67f986a2a8388a7bf9eb83808703"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.32836456.js",
    "revision": "755d09cc373494513387fed6be84d685"
  },
  {
    "url": "assets/js/171.b22a6532.js",
    "revision": "9e961c3c6b13b09c25befeea958d72d9"
  },
  {
    "url": "assets/js/172.39d325d0.js",
    "revision": "7c16217832485be720d91404d9e5729b"
  },
  {
    "url": "assets/js/173.041e204c.js",
    "revision": "dc4d252fd789512d386826f450510a47"
  },
  {
    "url": "assets/js/174.bccaa0aa.js",
    "revision": "99ea6d7e5a394f30bf43f769d6b27a64"
  },
  {
    "url": "assets/js/175.e683276c.js",
    "revision": "53ec0a286ccbf9cab7c5fc56ce46ac4a"
  },
  {
    "url": "assets/js/176.9779ea23.js",
    "revision": "ab083bff0f0fabd27dab451771114e95"
  },
  {
    "url": "assets/js/177.6879e70b.js",
    "revision": "cad4ea11c3bec07a70332895540f0120"
  },
  {
    "url": "assets/js/178.a873842c.js",
    "revision": "667ca90c1e0e53ff50ac21efabd8cc33"
  },
  {
    "url": "assets/js/179.4ea872ea.js",
    "revision": "ef0e0c83552a0e32f02165779ff0d2f7"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.29d4c39c.js",
    "revision": "8bef19a6e2206094fe6631a88e3333bc"
  },
  {
    "url": "assets/js/181.353b26d0.js",
    "revision": "ed8bc0732f20077decfee32624497334"
  },
  {
    "url": "assets/js/182.c8aa3f18.js",
    "revision": "6c47f6683f02790b1c4b015d96f9768d"
  },
  {
    "url": "assets/js/183.e6152da0.js",
    "revision": "05e0713c67f64e5d110895f42e462e77"
  },
  {
    "url": "assets/js/184.e66e391d.js",
    "revision": "8615139dc7631ced09990cb6b6dc23bd"
  },
  {
    "url": "assets/js/185.c894a3ca.js",
    "revision": "61819c13bb0cd26deb99d40b26e252b2"
  },
  {
    "url": "assets/js/186.d90a392c.js",
    "revision": "624dc9e3e966890c98bb61018beb83c8"
  },
  {
    "url": "assets/js/187.192b1a4c.js",
    "revision": "79dbf0c3cd21872c19656e646a3b0a2a"
  },
  {
    "url": "assets/js/188.282b1eee.js",
    "revision": "3470da0396e821b8a1976f8d59ab703e"
  },
  {
    "url": "assets/js/189.ed21b6cc.js",
    "revision": "ee1df01a0abdb2ac857e51761ed4e917"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.d377dee7.js",
    "revision": "6d6e09224c415a326f1a1c95dce53087"
  },
  {
    "url": "assets/js/191.119aa063.js",
    "revision": "4c2cec1d4c56c2af9901dbbbf3059953"
  },
  {
    "url": "assets/js/192.0d427483.js",
    "revision": "c85a7e046946dc6334ee9b45adfe2711"
  },
  {
    "url": "assets/js/193.54ddee37.js",
    "revision": "6485f0158442442ae03f27fb444a8c59"
  },
  {
    "url": "assets/js/194.8e4e98ca.js",
    "revision": "004d25bce71aeed1c531e6b13665d026"
  },
  {
    "url": "assets/js/195.73e1249f.js",
    "revision": "1c8dd8fefcd03d447131d360dad79513"
  },
  {
    "url": "assets/js/196.cb339909.js",
    "revision": "2c182d859b545b81756bf9e9b4d09c81"
  },
  {
    "url": "assets/js/197.5c99f8a3.js",
    "revision": "d9f9ed94ef5ff944a26618b18e97adba"
  },
  {
    "url": "assets/js/198.281f4723.js",
    "revision": "80788b2dece9fc5c6053e1aa29a75947"
  },
  {
    "url": "assets/js/199.b38b01a6.js",
    "revision": "d352812fd8176f3823bf669e0a5269e4"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.2e68f340.js",
    "revision": "5db9d5bc8b1f62e61c4e99731335fea5"
  },
  {
    "url": "assets/js/201.e357262a.js",
    "revision": "809ef8890b638d68ffeb3b721774c3d2"
  },
  {
    "url": "assets/js/202.c8836465.js",
    "revision": "ed8dd395175e71eafd0ff69da74d864a"
  },
  {
    "url": "assets/js/203.ce4b2c39.js",
    "revision": "cf5ff15c2373bfc7bd7fb2e526717bb2"
  },
  {
    "url": "assets/js/204.b3070436.js",
    "revision": "0d8d7db0a44377aba943ce112ebc1de0"
  },
  {
    "url": "assets/js/205.08f5e1ca.js",
    "revision": "7fc3470ccf52684bbc6e3019553053e2"
  },
  {
    "url": "assets/js/206.0946d34b.js",
    "revision": "9b0b7d3ebd779d4f254ae04e39cc0673"
  },
  {
    "url": "assets/js/207.9d8b22cb.js",
    "revision": "795c742b9f7d48f2d35ba1f2b23b5f0b"
  },
  {
    "url": "assets/js/208.8a080da8.js",
    "revision": "35a01a80d7d493b45346cff05821a704"
  },
  {
    "url": "assets/js/209.94ed7c22.js",
    "revision": "b34105c38f36bfef897e7e137fdc71d9"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.ad221372.js",
    "revision": "7aaaac08f8d513caf2989028ddfa05c7"
  },
  {
    "url": "assets/js/211.a071bdc8.js",
    "revision": "07b70c17bf8c1b45be0e9e9ac7c12a7c"
  },
  {
    "url": "assets/js/212.c990d6a0.js",
    "revision": "c40d917b312418bdee2966b0a2094c5f"
  },
  {
    "url": "assets/js/213.2af15b80.js",
    "revision": "68c9fdf26d8e44edd74259fb7fb97890"
  },
  {
    "url": "assets/js/214.d8dac017.js",
    "revision": "58dcd713a09264b4debeb5b62e2fa7e9"
  },
  {
    "url": "assets/js/215.76542db8.js",
    "revision": "77c0155ae758a32bde7f50077f3c9de9"
  },
  {
    "url": "assets/js/216.c243ae0e.js",
    "revision": "0de1bb73e8f2a5cf9cf3f142fe5a8b34"
  },
  {
    "url": "assets/js/217.4eb706bf.js",
    "revision": "b104f2174a67b75199be4304398a2491"
  },
  {
    "url": "assets/js/218.7665d4cd.js",
    "revision": "363cae67943f26b1c3107b24ab078665"
  },
  {
    "url": "assets/js/219.136b1ba6.js",
    "revision": "0661c104572bf3ba2e376bea1e9b6610"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.13c27f48.js",
    "revision": "751c4a0a4695ab1b3244bc4ffe30732a"
  },
  {
    "url": "assets/js/221.a6fe227c.js",
    "revision": "a94584a9ce279cdeda58bca820095c57"
  },
  {
    "url": "assets/js/222.48fbf0d2.js",
    "revision": "16d8e2cdee3966e5db08afd21a6f26ac"
  },
  {
    "url": "assets/js/223.a6f0b685.js",
    "revision": "3b5aeb1777ca8e15b1b7d714de3f15f1"
  },
  {
    "url": "assets/js/224.c1eb57f8.js",
    "revision": "26eee553b842e92e714833c1273e0411"
  },
  {
    "url": "assets/js/225.07185a76.js",
    "revision": "f15c9b171eaa1f88874f3feeaf961c05"
  },
  {
    "url": "assets/js/226.5e6e1f7c.js",
    "revision": "3253a41faa7c0bbbb974861c43aa3af6"
  },
  {
    "url": "assets/js/227.6802d2b7.js",
    "revision": "e06960032902853fae9b11c485bf754d"
  },
  {
    "url": "assets/js/228.b3bd3c00.js",
    "revision": "627063d33550d857682d144667be1701"
  },
  {
    "url": "assets/js/229.dffbfb22.js",
    "revision": "62e0881908851ce25897a983e97b507d"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.26972850.js",
    "revision": "5c132bdc2b6bb82b005e22c8c91724b5"
  },
  {
    "url": "assets/js/231.e65463a8.js",
    "revision": "3ed73e4d95b87962b4d2d769b7560bd7"
  },
  {
    "url": "assets/js/232.1028da70.js",
    "revision": "ce3db474cf0e03134d92ba60f7e1b53f"
  },
  {
    "url": "assets/js/233.615e1a3a.js",
    "revision": "0173173f68bd8dcfe5d06b587633ef4c"
  },
  {
    "url": "assets/js/234.500bdbbc.js",
    "revision": "bc39fdd781ad8a5c613a5cecd63efc9d"
  },
  {
    "url": "assets/js/235.71c23f0e.js",
    "revision": "b77cac5ea8a6e5ba3016a71f5d9dffb1"
  },
  {
    "url": "assets/js/236.827b380f.js",
    "revision": "d36bbeb1588ee007e2330307c5453214"
  },
  {
    "url": "assets/js/237.da2ef54f.js",
    "revision": "743cae3afd22b627f44069d1a980a059"
  },
  {
    "url": "assets/js/238.1ff56faf.js",
    "revision": "0f9c1acbb355ffcace70883e544a6c79"
  },
  {
    "url": "assets/js/239.6ea47d77.js",
    "revision": "436312cc3a13598157e23241a8d07a43"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.33cd63b3.js",
    "revision": "6d093c6e1a98085dbd71c96547325253"
  },
  {
    "url": "assets/js/241.d54f7739.js",
    "revision": "2cfcacf9fb97349ccb684ed4dc06e22c"
  },
  {
    "url": "assets/js/242.bf152d51.js",
    "revision": "526945642deb0547ee7be79808d5b897"
  },
  {
    "url": "assets/js/243.2d311ef8.js",
    "revision": "f0e8859acdd08033c41d78e8a88988ef"
  },
  {
    "url": "assets/js/244.4b79262f.js",
    "revision": "5db0b0d1013529014f1c24e66f7eaac2"
  },
  {
    "url": "assets/js/245.3638bd31.js",
    "revision": "df9fa1cd47d29bcba7ab4f989ca35913"
  },
  {
    "url": "assets/js/246.90c274b0.js",
    "revision": "c3d8016db523541df70a854ec53345d7"
  },
  {
    "url": "assets/js/247.ca8b1976.js",
    "revision": "c13bf3c2a5f186958f821c5fd3da0c87"
  },
  {
    "url": "assets/js/248.b7d4b6f0.js",
    "revision": "781fea31a07cdd04d7d996c7e395e287"
  },
  {
    "url": "assets/js/249.35e3e558.js",
    "revision": "d7d2431306004a6fcb55a959ccc00b42"
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
    "url": "assets/js/82.81b4524b.js",
    "revision": "a20441464f046a8763a5ff6052edc5d1"
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
    "url": "assets/js/85.c71f2d5c.js",
    "revision": "038c104868beb8dd97cd156e9f8f0135"
  },
  {
    "url": "assets/js/86.9d94f73e.js",
    "revision": "0090e9e3cc018d9c7fca8396445ba1ce"
  },
  {
    "url": "assets/js/87.25c6fa2a.js",
    "revision": "141deba77e6d38ee6df645acc50c9c4c"
  },
  {
    "url": "assets/js/88.7d86270f.js",
    "revision": "aa652a28b5273d85ad09722b107154ca"
  },
  {
    "url": "assets/js/89.3a119d90.js",
    "revision": "a8fbfcc94bb73936309da600cf4a1fab"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.549ca566.js",
    "revision": "a81ce1458224381aeb0e9a7c90d8cfa2"
  },
  {
    "url": "assets/js/91.5a551749.js",
    "revision": "03ed6ac0d040e76c4876a6a51c8184c3"
  },
  {
    "url": "assets/js/92.f403c43e.js",
    "revision": "ce39d93bb3b6f839d2de9425e2e32876"
  },
  {
    "url": "assets/js/93.aed57e01.js",
    "revision": "133f53e5b67ea79e76caa3454055b371"
  },
  {
    "url": "assets/js/94.6861134a.js",
    "revision": "1f08e89bc5fea7b67270107a94b0ca2a"
  },
  {
    "url": "assets/js/95.c5f5acd7.js",
    "revision": "5f091e6db0715bf0ecd96308ad3ac526"
  },
  {
    "url": "assets/js/96.9cd3c97c.js",
    "revision": "b5910e66b0d79eca23b4aa8a7f3a6f49"
  },
  {
    "url": "assets/js/97.6deb6f69.js",
    "revision": "b01293dc9ce718e4a6663d4091435c74"
  },
  {
    "url": "assets/js/98.87776596.js",
    "revision": "08137714d5d232abc4cd785b2c02ecbf"
  },
  {
    "url": "assets/js/99.d92adbca.js",
    "revision": "1a7e29c435880faf799f5295a39ae519"
  },
  {
    "url": "assets/js/app.44219c87.js",
    "revision": "e0f51639af1aeb7fc678515f169b16b2"
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
    "revision": "e69c34e666cb5acff50293567e268bdb"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c8052684b0551681b487403dacb6efed"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7f9755918b094e756b4e25e94a95729b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8e580c71ec1b1f4e0e87d8ba48e12314"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3b5a94c06a47d7c0113dde2755a9527c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d780ea8f9492205287de4ba783da6777"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "5a3c823ab2bb0d5d8a97278482db5ab7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9818e531ecc6ad3562af0e89781125f0"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2b444cb72108727eb87b96efea6285a2"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "706682fbc04205332d026c4ea37178af"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "947b32adb8c22cc040757707bf3e81ea"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "b10ec41bac199e7302b9ff9c7812d6ae"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5f0004d8b257b8cd55f9557a98f1615c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "4c002642d12839dca7bf05ecbf84d824"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "b13969c02b898989677e959823dfbb64"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "fa54c9d1a7f29cbb70cccd3a21b18656"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "3aacc5d213f77c6d4fa5f18cb1412bae"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "475442b339688b599079a847047265a9"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "2e5e764eceff87d8da085bf82f3cdcdd"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "8e782fbee3168e7f5328fd52858f7dfa"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "33d78bd22d63b5ced026e1c223de6268"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "a32bad1705acbb8fee2a39dfe12a5404"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "366b6e6c93d218702dc40c953e59a3e4"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "93b807d50db57d0b8ee8db5437d1c982"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "7cbf3487bc074b379ceca568e95ab27f"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ceb1ff3e0a09b49cab9a3256728b6d6f"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "228dc5633702060e4b82a1d6398c2f11"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "26d699d0fa1f7bf526e0000481fee7d6"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "759037d4dc0f2cd3bbf217fdc3eb2de6"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "09416cdb592eef250babca99efaeb182"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "d6b2165047a5cdb8e8c914a5f2856b40"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "d7d9265b6e5cac8072833d4e8dc62ed5"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "07a2f8223c0f3bd0d5905ed9ea02e68f"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "966160e9b177bd414718a7150d1ba501"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "c05aa3b8c045dab6f5d5ea6318732a02"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "8cbef7b14d599746a17c3048546f21b5"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f8d13c6c7bb4df1038530b78bcc00740"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "38902a26cfd4a880b3b09369872f94af"
  },
  {
    "url": "basis/index/index.html",
    "revision": "69f41358982b9a437e129834e6894377"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1df848928f9c763d0a1316c72d0508b2"
  },
  {
    "url": "book/index.html",
    "revision": "6283ed5727beb650c7b063fa9e44ece0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5cfb3e9e3c2863c21c0ef6785c3e5fd5"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "f197cb59f703439ad576b8db765b3714"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "e9b3374258f55074a5a853016ac4f162"
  },
  {
    "url": "c/audio/index.html",
    "revision": "c73cf85e271486c08ea97d1ce3829de2"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "2dbf9c4315b8e3b8bd0131256301f383"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "b0c366808c305508cd7c9604048435ea"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a79ee5863828fc7326e0f8f3d3fccefe"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "fa27aabbe8503b73141cf8bb31b07bdc"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "d2b6594d12a633cc5cef29b88f86f0b5"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "b8679c48bed42d593ef79dc6b8c00bf7"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "eee13d3030d16a982ef913326d463a24"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "433fd2ad673cb02444c51c5816f576c8"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d133f851f8694b536713b5d60a0f94d6"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "2bf218019c716dd21138f99d73f5b44d"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "236dd536f8c980d642fc78444a65ccdd"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "4eb5c7608059465469abb584660b1e05"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "64dcf50720c21537070d40db71ac0eee"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "490948e791aea058bbb7d023064b30f2"
  },
  {
    "url": "c/program/index.html",
    "revision": "4c913ec8d7c87f0c45d806216219d8b9"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "c25502e59ed3053125e00ba64f85b2ef"
  },
  {
    "url": "categories/index.html",
    "revision": "27611a7442586b334e46f4409267b780"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "1e2c2286fc99242098aa4bd65ac671f6"
  },
  {
    "url": "figma/index.html",
    "revision": "04992fb5c7cbbf5a0188891f9987c502"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "7cc63d17ba01a13fd9f253dd14517dc3"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "4b8e2b0779787c9aa0e32e146eb731de"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "20e7063de0310fe4a41fcc6b3a85a722"
  },
  {
    "url": "flutter/index.html",
    "revision": "4d342401a2440d268b77c50ba8b47245"
  },
  {
    "url": "flutter/point.html",
    "revision": "c8423f3dce26a346037f5300bf713b69"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "985979bb01e492c4f69a4660b9b00b8a"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "8053b7e0ef77f69ba7ded7a87f3f2e02"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b151e67579407c5c88cc0abaa15455da"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1fb5f9afa0516b68a9c71a068685b26d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3aa721fa2adf22078c7e5140bfb2eb7d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "735b19df0a75492236fd7a3e8f6989a4"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "098df4e75a12c233b4d9045e4a5704bd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1dc5a8a8f16a93eda4cadd9e330bbeb0"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "58c1ff1e75d67d387dfbbb4bd3f25ded"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1816a64d025a09432ca05c7bf83aa069"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "0c0cf1a8cdc0de0891258503d5a43a4f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a5dcc9a8ee5e292fad9fd43452838377"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d720be6bdf7482f123430ddfa70ae094"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c632103289eecbfc97b10f1f5320fd7f"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e27f31dd3299e2c5877bb05909b2fdeb"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "f3642467297e7adb3503b0f3e9a1d0b8"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4fe96b283635de70e0d01d921168bf0a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "03429ae6f13940debb2895d894211d03"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f2341ff2637d8b6c05b8ab82f6589e8c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "e5ed61915abd29cab0628852b03f86d7"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "480783db35feb1d1676a32607605bfd3"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "86c410de8493d4e093059ee71e05d042"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "401e43a280926fd9d0e534664a82072d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d46110133838a4837ba846bf4a678b0e"
  },
  {
    "url": "haskell/index.html",
    "revision": "b3351df117fdbd04fbbd24c06351579c"
  },
  {
    "url": "index.html",
    "revision": "08ace5dce230861d1ecfba174de10352"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "a00b206ebcf07970bd5ca0bde40029ba"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "1e7bba2e0667bf672864435fe5b14dd9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "220ac49c67bbf47539eaca7f25f536df"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "450fffb2208802c978ab42ef8205e6f4"
  },
  {
    "url": "python/index.html",
    "revision": "f0dbe2ed34b821c828882ce6a03ae9cb"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "2eac45ddbfb2ec314c2b9285208a5244"
  },
  {
    "url": "read/index.html",
    "revision": "78bfe01f086d47ac96e4e073b302c524"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "52037d07429e1753efaf3df8b6410065"
  },
  {
    "url": "swift/better/available.html",
    "revision": "207451491bf5534f36e9d8407a024f45"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "395e3e64fdbcd933b381318a1b41160e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "336bbac5642821274105218e057e154a"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "7c75adce43458726f10bd02c5c832f32"
  },
  {
    "url": "swift/better/di.html",
    "revision": "cdc9ed7e092612279293a5bc958ddc91"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a70d31fa97b96c2f5af0b4289e8f6a5e"
  },
  {
    "url": "swift/better/last.html",
    "revision": "6e479934a50c6131c67018f6b96fa73a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "0672bbc631506e62b69b3afb5f0dc8d6"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "1ce35e41ac1e3a2d0999824c5bc822d1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "fd41dfd46129d066983cbb31b7a2f324"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "bbb433d50c42be2601554699dda7e817"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8119dc65cf04a99695991f84cac18eeb"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "130941b80a3f1c1902fcfef4b1b1499c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "88a9e9467936d6379c2c181a1eed0741"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "bb6488eab1d2cf52bf2302c046854161"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d1a1472aeaf8df8e356cd521e86ccafb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "809c083244057727d778574298e2c721"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "e2040c3a175133a5c652c47a967c2079"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "709a4d9c990193fc9d020f5abe2bbd60"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1a60f1696993d3a0e97eb0a30259cac4"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "c2ce2486469e5793a5583971c1f236fe"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d2ceb5aa5f08b9af480a7e1ae188c822"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "4e88e9b7a71c26fc7a1e292f6b58751d"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "16f49fd5452e57455b2969e94c5408aa"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "eb9d58fb7980679fcaa0b38bd0355aa4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "666ad712acc334c708f85a78580b6974"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "17ffa08ea8b855cd1328c70a97ad9453"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "ec7beec61ff0506b482aca7068a94879"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9bf725787413d532d992be36ab7f91a8"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f49081cfdbb4c3a139cc9a22e5379758"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "299dfe763c2be754441351ea293c0e98"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "352887737e04578dd7aa6235608cffa1"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "d12f36bfae380a7e8cdf9c3305a0a76a"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a43114b9587dca84b44cd95edc927c7b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f16aebeea63b9b071da4ac52ad97d7ce"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "97b4cf25cd2a5253d18a294fbd2010f0"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "0734d0592140353efe66a40058d71181"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "2cb9ff8a532fe3a7c1ddf4ef6a133aa5"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "85f1b43169f4ad096969f3931ec0e2e0"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "207e9f26414444733eec41a9e45cf914"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "eb84b0b1bb79ab1e042d8b7bf590bb9d"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5429b9a53c34bddbcdb271d74b3084ee"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e9da3fc3934c4c59feea1911c0632545"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "5be49f8a0d21cce04630ecebae145e1c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f44c56dfe89848ce1bc02a4c9c94b808"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "03bec2c0c8389bf7a6746566d315ea04"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "85bbbab13fb81992bd63cb41d035f8cc"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b7b5ef65d5dc29df74065ec1c78b47c4"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "e8b06b306f6ae26fa54e920234eea7d0"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "5fb6d27e4247371b4275120e15442d76"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4c456575b8433021c7d8a19d6704d9d4"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "871bc3029d81cacc63ed889ed8809228"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "85dfb9928b53b44b9dd83cbe0462510c"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "7b593d6aec30a56d502980b57b8d0dc9"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "696ad12de7f3b20e406dbcb07199688d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "1686d1ab917607c4e8ed84773d0e9cfc"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "acfb43f639d882529f355c9560f50480"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e2dec16d0ec6551b35d686894fceeafc"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "5da0aca61946cc26e6d83e0f9e971b48"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "73c19569fd8c66fb79deeed2ef58b95d"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "2d7c65c3558bd056c9d9f891f08190fe"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "bee7853da9afa5c1abf7a3548bc8d4c0"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "57896866c5c4357ff071f50dc55efe67"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "b90e76daaf423c585facc77ecb561d74"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2f7f5c21c69f60161debcb9b9757fbbe"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "e76c0290764c1d32fbbad5bc1216192c"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a0a051f0cef6e3dabe40e3f1dce576ad"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "9e6e68fa556fe8f3c0224b3a4cf09c8a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "a31e27520cc122484a616d2f159a8b4e"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "e154a7c3b05fc61e41473eac6d3f896e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "2a22394fe19a89e9f8cadbcf03e363cb"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "a3963da05c84cb84a8a2ca0269ab07c2"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "7bb9cde2dbeef354924c912313b52e93"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d306503245b52af351f7b0724e2d846f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ff665023fa12bc557edaf0f6d85b37aa"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "88811352334f414bcf2765c15473f6dd"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "8d2846f73725a3dd5645949231fede3a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5fb2b09d0b7f977a3afcd38bb3740ba5"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1f09ba61723f8d0393f189bc005bcc30"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "0eefe1f0a375bc2091b7b2e8b9f3d679"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "e6fba07291cbabd7815444ef070343b3"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "d286c80bdd34598e78a66d0b7518be2a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "70d18caf221301a9053468add4830594"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "2ec70cbe3f71faf3452fbf5a11b8bfbe"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6978dad9b2f0753a36a95fb9ae803e3a"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "68b7c38e1d1f3fa92d8d65fbfc5949f1"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "23f0b577958d92061f007f4e7a690c8e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "6bd99a5c474a32b0ea147e53df50a35c"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "541990d81a49578ad3c1406cedb9bd05"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "6dc4757577be4271552a9b9d1597be5d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7e5b4138a9da06e64a6a7aed2c452f7b"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "e7b825a79d0514d3e42bb1af621a04d4"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "31d6683ae6acdfbf11370e667b89d3f6"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "4433cd5ddadeddd1b5f1bdd8ccc4b07d"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e9a974595c304652b043a114e2c38f69"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "91c3c70a7bb9fea25a8532de4df0d872"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "fa5814e7c082b7f11bc83a1e3cf79afe"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "261b5dce7145be2917529ed0eb18eddb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "763e7f632ef258b557d55ce1e5aeb8c3"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5975b56a313ba9145c8312c2bac069a0"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "74dd5dd2cddc27269fb45ac9ac009933"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3a0b3e2a0425c866e66c9d943b2bf250"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "9432551ee4cbb8da6963f49797337209"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1cae0ae2d7c398b485573f7c35c70835"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "95ea4d13cb2660298d9d4e1af64674f6"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "3c58424f23159d76d96146de41858873"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "cba7623442e69a9aba46642752af6437"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e69b27321f1f1962d349192ed96ad4b5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a8e30134957241b8ec0e59cbe9003a97"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3541c1fe41bb6f555dbf6fbab27feb6b"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "922217fbe9f8f85c0c20cd2973ea9d30"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b0fda1817c7fa606a35bedf60ee4207c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3256f85f87d498aea607033d1db9505e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3b47f37018763f2665bb2e7a007fcee2"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "5607dc187b865e6ab52690949bae1762"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "4480f05af3e4cf430d89a9b26f9debe9"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "67b66a6545854cf41566c2a72eaf4ee5"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "434fc6b47f856f32a27953d5b3837347"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "77692c86d4121791de7b7743abb035ac"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0cfbfa02cae5c4cc38a7052facbbf651"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "ccb735311491709160f3a2a465d909e4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "82b2eda4009c589d44477c5d79f6cba6"
  },
  {
    "url": "tag/github/index.html",
    "revision": "96d9f5640e9181ffdc2aefe8b8143ac9"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "febd11c2b53405fe281679f41e4f759f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8e6090522aeecc5d9a708af7c31d62a4"
  },
  {
    "url": "tag/index.html",
    "revision": "660a6cdb6a1e66a4f97189fcb2818456"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "89c828d8f7258b935c368e78267deff0"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "bff1e633573c2cae44a4b571d24d5776"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "10669cb83fd2641c2ea3b5b6f7165b8e"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "51f542209845db57e3180e6a521f930d"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1a4391cd24035be2a761d0be5abc4fca"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "0ec01232a9690da2627406b5329ba5d6"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "d7eacb5ff2d7f27d40a0dda6a3b84212"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c47ccde7129492dbea39a15a172a444d"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "1d28b4d4209b69ca3965003f4a412157"
  },
  {
    "url": "tag/json/index.html",
    "revision": "12164d3dde43902fcde25f333bd96b97"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "91830f88ec75dd4b6f53b6e4c48ae5e4"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "58ede59f0e2f11014888b8c4d7858fa5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cb5f922bcce3793c84e1c712ee239083"
  },
  {
    "url": "tag/read/index.html",
    "revision": "8ce7b742888846a32f9e4474f7dbf94a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "910b9b1ccfd92c010b2d32c24c791f46"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "48afd687b905451b0f64cc0ad3edeed5"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0d703c58d1c9d81e588752c72d20a547"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "445e21b950e3c8ccc59001f881f930fc"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "747432e2835bf6dddc3488bea60f305a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "40974e0f0cf85e309d960cde588aee9a"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "10bfd9c5cb14484199471416d886ff3d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "32f2d1dcfdeb923f1c71cca2bd79c641"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e056a03625df65c4cba1aaa3d340c9d8"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3f4cc546e66f9bb45a9ff18b5eede17d"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "73068fbe2006606f71dd00951984252e"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "06e60b11ef45b117b62f4018b33bee38"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "d74281a1614a90bf6c33ba2522654805"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9572dbf8b301c70430dff08275e25fd7"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "1620172b61c600743e55c0ff5ca3368a"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c63331c29c85b355612e20148b4c7df9"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ae9b87f94794552dfc4f73b1df3fb799"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "103f713e10a6f9c4c4eb55905b44857b"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "adb9049af200cce2a35d941496dcd5e0"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "66b81f05547b7426f87eb47a2b8c00e3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "894f6318dc96e3079785f83a57cb5591"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e8ed834832627bc125d6c0b688700a53"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "4bebd50a407cbd04e8a9ab7573ff8e99"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "33aae65ea685b08617828759a3c23cd8"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "132f62bb7a1dc346e4c6de3538c53c8e"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "3c8c61b8c3896b5ed7c0660b0f6ca1f7"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "929b23c778bf7d02880c1eeeb11ed993"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e116c7ae694c57abdb6ba5cb3760c4b0"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ab1132920729270874bf948c53eecf01"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "3a33f63f24fafe9b3d6b7a4adfdf41c0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f39d460f24eda070be231136cdba82d6"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f1a682e217afda85ffc2516ce6334fe4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "0952e6d9b638f3777587c31852f1c75b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "97b49b531dc4e8058c0128288c8dd354"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "939e2f0175db9d4a84823228ada4bea8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "159a45edbcf14a1e9007176d88bca195"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fa6b4d91e426eee57aa5af2eba95cf85"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "af9294f6e42fa9b43d511f6abf82c32a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "10b7f626540cd50e1faa090d66473968"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "640245fcb3cd173fd008513accb58cc0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ce9a585c082adcfa72df2bd34e2e74e8"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "7660bc423b3b109b2bbfdb5709fe291f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "1297d926aa8ae0a991350001b2852ef8"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f83749988e5e5574ce2041b09001d60c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "ce3189e5c8a8ffd4422f24a2990782c4"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "953919f86fc9174c51bc6b40a2a51566"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "4e6feccfe828ba3cc52eabf568106ccc"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e536ad9ef8622c5c879f3ce336bc7f4"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "590731d27e71787f58c244bffef3a7f7"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "8577d342a52c1085d80f80997aa66a56"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "9e808a6eb1de45e8aff2776db7e8e953"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6732cfe1839749bde66f49098ced6acb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "53664a28c71869b3f4a22c18ba511583"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8d8afe8f52b4ba816eb70e3fd49f76d5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "4b6278863528dd7773aa669a3e3b3c22"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "2259b21d55418180083d8efe0c30ca1d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "51d8a7f35502cdae9708e3390d7407a8"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d76e47403b47b5144c02542d3f604121"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c82f96cd522a5b07b601ceda2a9e0d79"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "9b8964745b85b1203938793ddbdab3d7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "66eeb28cfac09bd86ecb408052415b50"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "7e16af1a714395d996dec58650a9c285"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "79253fe363515a18421e985e56ad46e7"
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
