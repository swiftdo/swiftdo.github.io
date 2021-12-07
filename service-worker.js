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
    "revision": "f2544ac6754a7aa07212998f86715a0f"
  },
  {
    "url": "about/app/index.html",
    "revision": "2fe47c33a92ba79b7fa0daba7d0c6555"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ec03127fc0af61373c1fee9723b1a089"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "10d9b873fc779e72cc311aba46e6985d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "646e896d40771265bddbd87f67507d78"
  },
  {
    "url": "about/index/index.html",
    "revision": "da38f447a9c0cd75aacf0ba3a4d49c00"
  },
  {
    "url": "ai/index.html",
    "revision": "33436c140833380f9301c8fc0bc1992b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "65a54eae73203da8f7684341626972a6"
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
    "url": "assets/js/100.abe8fd73.js",
    "revision": "20824761898e44a45f81f7c19517f9b2"
  },
  {
    "url": "assets/js/101.e8730348.js",
    "revision": "becf43146aec87e972a79c96f3b56258"
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
    "url": "assets/js/111.5513a414.js",
    "revision": "74807d81ed986d746a225736b0cdac36"
  },
  {
    "url": "assets/js/112.7bccfe20.js",
    "revision": "babdc28b7768694e4f29e4284f65b1c1"
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
    "url": "assets/js/118.51daf946.js",
    "revision": "b9bfe7ec6d6b8b791a5802696bb915c4"
  },
  {
    "url": "assets/js/119.a0a4cd16.js",
    "revision": "f4d2b35073bb4e995588dc0337e57c0e"
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
    "url": "assets/js/123.d334125c.js",
    "revision": "7927e083f1b1fe476a0fee55a151c913"
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
    "url": "assets/js/132.c452005c.js",
    "revision": "cc5a6ccec0b8e13cc18fc892a3159905"
  },
  {
    "url": "assets/js/133.101b57a7.js",
    "revision": "17f348ccd8c5d55a30c02da79cecec21"
  },
  {
    "url": "assets/js/134.2d5586c9.js",
    "revision": "10c77c01cc0fc815da533ab6d2a0673c"
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
    "url": "assets/js/137.4231093d.js",
    "revision": "f7320f3bd74e18700f9d533da773fc0c"
  },
  {
    "url": "assets/js/138.59104cb5.js",
    "revision": "dbd18d746e0c317561f02626c58bae58"
  },
  {
    "url": "assets/js/139.6e70a9c7.js",
    "revision": "8e363e834bf86d23736c74be8c433d03"
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
    "url": "assets/js/141.b66b072d.js",
    "revision": "6f05f7e8b84ccf5f00822937304ee511"
  },
  {
    "url": "assets/js/142.0173b3ce.js",
    "revision": "d18ba0613a33b1de83d95bc6cabbaf1d"
  },
  {
    "url": "assets/js/143.2f1abc50.js",
    "revision": "7f70fe57c21e4cebc8f021319e1ffde3"
  },
  {
    "url": "assets/js/144.774eb382.js",
    "revision": "ed0fdbc1a96048e6f2ebfffbaa603336"
  },
  {
    "url": "assets/js/145.b333dc85.js",
    "revision": "397e600f22569b3f616ed3b6b72ae49e"
  },
  {
    "url": "assets/js/146.80e73681.js",
    "revision": "22ad457d4344c372131eae2521c38103"
  },
  {
    "url": "assets/js/147.f52efaf1.js",
    "revision": "08892281178e3b87bb8f210b0d93067a"
  },
  {
    "url": "assets/js/148.b2d22435.js",
    "revision": "12a5fdd086e361a0cd4eb1589244e427"
  },
  {
    "url": "assets/js/149.c18bc33d.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.0727d298.js",
    "revision": "d4bda84b8171fb3466624824e999a764"
  },
  {
    "url": "assets/js/150.48d5919d.js",
    "revision": "9bcd75c59e8edbfdc5758ddef3093974"
  },
  {
    "url": "assets/js/151.0acc351e.js",
    "revision": "80a19bca417a775d514eb2beb4c104c0"
  },
  {
    "url": "assets/js/152.e67d43f4.js",
    "revision": "e179dc27573e4504eb8aa6f86ce726b2"
  },
  {
    "url": "assets/js/153.693647a3.js",
    "revision": "aaa52079b63e10622f5de71bf4cd205f"
  },
  {
    "url": "assets/js/154.199f3ba8.js",
    "revision": "1dd1580a84c8faa6e0b8b1bf43586f63"
  },
  {
    "url": "assets/js/155.dbc8bfab.js",
    "revision": "bb87c36313556b96b4fad60fe651873b"
  },
  {
    "url": "assets/js/156.9f51730f.js",
    "revision": "f5f875d4b1199ea58ac8af8d2e5cad52"
  },
  {
    "url": "assets/js/157.52189cf1.js",
    "revision": "947222409fca76ec70f52185ab3b53b5"
  },
  {
    "url": "assets/js/158.9d6ea641.js",
    "revision": "bad21e0be62fec67bdcbc80748dafb24"
  },
  {
    "url": "assets/js/159.0e9fb058.js",
    "revision": "02188d5bb760123ba86a69abffde2721"
  },
  {
    "url": "assets/js/16.b68badca.js",
    "revision": "cf3baa1a349a2b9452aadced95552c63"
  },
  {
    "url": "assets/js/160.21003d2c.js",
    "revision": "e054fdedb7fb4a852413d196979e9fbd"
  },
  {
    "url": "assets/js/161.1847befc.js",
    "revision": "8e2fab09511782cfda3ced3422a2a4e0"
  },
  {
    "url": "assets/js/162.cf3d4189.js",
    "revision": "e49e5ba9dbbca2ddc4ad1320da215f12"
  },
  {
    "url": "assets/js/163.64aae01b.js",
    "revision": "674e6b65989183e584ddfa722e8323da"
  },
  {
    "url": "assets/js/164.df0511b7.js",
    "revision": "48cbd5d681820492e34b7548b18d6c10"
  },
  {
    "url": "assets/js/165.5052e040.js",
    "revision": "c44cda78e92c1aba4ef32345fde16731"
  },
  {
    "url": "assets/js/166.c6c860d3.js",
    "revision": "da6c29780ecb8cff4e15f292aa34898c"
  },
  {
    "url": "assets/js/167.8fcbc654.js",
    "revision": "31b1744e18efdf4f0b794caab15e2183"
  },
  {
    "url": "assets/js/168.55e4350f.js",
    "revision": "f194b977a21525bc040b4edf2f8fc963"
  },
  {
    "url": "assets/js/169.67cf552f.js",
    "revision": "2a3a6b884ee128cc9a52a74fdf338235"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.e0a0074b.js",
    "revision": "f209d9b7dfc94166f0bb3bb41b1d9f2b"
  },
  {
    "url": "assets/js/171.ae02c044.js",
    "revision": "0defbd3f6267972bd6011901e4919f25"
  },
  {
    "url": "assets/js/172.417e5f66.js",
    "revision": "839ce828f1651d0f354d8dc5139a2772"
  },
  {
    "url": "assets/js/173.8a95d07d.js",
    "revision": "730dfd48885e33c11349901a457f9485"
  },
  {
    "url": "assets/js/174.81456322.js",
    "revision": "8678ea0141c9c723e5ae13b42b4a59cd"
  },
  {
    "url": "assets/js/175.e4db80f3.js",
    "revision": "8bd4c849ad8ea7e23f4c23e15478b9ef"
  },
  {
    "url": "assets/js/176.284d579c.js",
    "revision": "f6859b9e49e377fe76fc4eaf52d55395"
  },
  {
    "url": "assets/js/177.b76d354f.js",
    "revision": "04a3e6b782ec4bad87f543d22fb04e4d"
  },
  {
    "url": "assets/js/178.a2cbb327.js",
    "revision": "57937c842efc941111ff038f81ad0ef0"
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
    "url": "assets/js/180.d48fbd3f.js",
    "revision": "2f0782c3f5d901ed753fa1cb8d18ccd0"
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
    "url": "assets/js/184.0553d61d.js",
    "revision": "a08a3b268450fe9c3a244eef0bb8ed12"
  },
  {
    "url": "assets/js/185.6d021c59.js",
    "revision": "ca3c6ecb991bea6511739d0bbd6a3d0c"
  },
  {
    "url": "assets/js/186.0dc37059.js",
    "revision": "83df7165855c095c63b39aad3eb2fe4a"
  },
  {
    "url": "assets/js/187.e35d8cec.js",
    "revision": "bca680cbc2c08460eeb095fc1e3c6dad"
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
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.c4e25b35.js",
    "revision": "077709cb255d1bb863401627fb2ccf5c"
  },
  {
    "url": "assets/js/191.1ea8e4f1.js",
    "revision": "5dfb5ded474e7b35fe3eafac3c9c78f5"
  },
  {
    "url": "assets/js/192.14ae6def.js",
    "revision": "829b7e04c061c7ffeff2a49cfb51230e"
  },
  {
    "url": "assets/js/193.17a68a99.js",
    "revision": "5dc28b194d7812af7ee8224bd8da8a87"
  },
  {
    "url": "assets/js/194.f10cb86e.js",
    "revision": "ff79ec52ba5c817bd1c159be3097dc6a"
  },
  {
    "url": "assets/js/195.0c35c849.js",
    "revision": "5715107af47a377740e8bce02fd62bab"
  },
  {
    "url": "assets/js/196.dc192b72.js",
    "revision": "2add12f178776db237d28719d8d78a88"
  },
  {
    "url": "assets/js/197.7b5469ee.js",
    "revision": "6e2cfc78c490455b9a389b366942e81a"
  },
  {
    "url": "assets/js/198.33e5a0bb.js",
    "revision": "838aeb99c440833c716d355db25978c8"
  },
  {
    "url": "assets/js/199.cdd27f49.js",
    "revision": "92682d1d687e57e0c5c99baabda18ef2"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.ef172dc6.js",
    "revision": "df8b14488afa4ca86d28bd08dc85d989"
  },
  {
    "url": "assets/js/201.8289ad40.js",
    "revision": "ae49007c1a80e37667665356a39aed5f"
  },
  {
    "url": "assets/js/202.e816f78c.js",
    "revision": "7529a319c1243252e42c4bb78709241f"
  },
  {
    "url": "assets/js/203.33288b94.js",
    "revision": "71bcf0e06e71f23e082458c46c750f02"
  },
  {
    "url": "assets/js/204.26c278ef.js",
    "revision": "5351923fa0c1aed06513be2fbd46d376"
  },
  {
    "url": "assets/js/205.f313bcea.js",
    "revision": "6d45c472ef34d738c5e44791b3bbd083"
  },
  {
    "url": "assets/js/206.288fd01c.js",
    "revision": "0235756f2436c571e2c54e933472f30f"
  },
  {
    "url": "assets/js/207.761bfca5.js",
    "revision": "073e7ec33eb08a45fa07848c311074c0"
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
    "url": "assets/js/21.f2ac8f76.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.d0116468.js",
    "revision": "685864f912e7fb42de1d683e435b60ec"
  },
  {
    "url": "assets/js/211.fc5fce02.js",
    "revision": "a8d24f05e882be686847fb535abfb6e7"
  },
  {
    "url": "assets/js/212.4a2092ba.js",
    "revision": "483cf0fca2ba72ab08288319344d809c"
  },
  {
    "url": "assets/js/213.f8c94606.js",
    "revision": "8df82d95e81e02bdf4e0ed76eb2942ca"
  },
  {
    "url": "assets/js/214.444fe8b6.js",
    "revision": "ea505db82a68395910dc0a64209e27eb"
  },
  {
    "url": "assets/js/215.856acd8a.js",
    "revision": "f7e68ac74b10b69c3d85800d244c9f4a"
  },
  {
    "url": "assets/js/216.bfe1c182.js",
    "revision": "9cf2c35e83b91cf74a7fb4a2368b30c3"
  },
  {
    "url": "assets/js/217.49c66008.js",
    "revision": "4220ad5c6d0cc43b86f15cca2126abc2"
  },
  {
    "url": "assets/js/218.366dddee.js",
    "revision": "332948072e6beff669b26394ae05a690"
  },
  {
    "url": "assets/js/219.5da9e937.js",
    "revision": "c0e0fb704e4c45fa07b1f1a0488d8c07"
  },
  {
    "url": "assets/js/22.487afd95.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.c87d8323.js",
    "revision": "5af311dae1bd7f67ccd0f4c94707e90d"
  },
  {
    "url": "assets/js/221.48f270ef.js",
    "revision": "642eed5b1e654f5f5d2461b02a524e41"
  },
  {
    "url": "assets/js/222.2d7ba1a0.js",
    "revision": "fe713f30d2698a24744aebdc56c2fc0b"
  },
  {
    "url": "assets/js/223.85ef1540.js",
    "revision": "94678218631c19ee3234735f909a7470"
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
    "url": "assets/js/25.8256c65a.js",
    "revision": "93e8a4f51a3e2a30ca10c3a5ab341931"
  },
  {
    "url": "assets/js/26.e3eaa039.js",
    "revision": "1cc5ff9a14b60ac339c0483fe09879f2"
  },
  {
    "url": "assets/js/27.bb391e34.js",
    "revision": "53f035db2f7796a0a901969147288a08"
  },
  {
    "url": "assets/js/28.601c4303.js",
    "revision": "32da41181adee283c0dbbf0d4b4b7f19"
  },
  {
    "url": "assets/js/29.7840ca5e.js",
    "revision": "82d1866d5026a16bb224490aa866c599"
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
    "url": "assets/js/31.d8d1a594.js",
    "revision": "e886545f25d7c187da7607c8a93faf58"
  },
  {
    "url": "assets/js/32.feb7bce3.js",
    "revision": "1aa48a9e93e7f2afd9b6f5fb63f1278d"
  },
  {
    "url": "assets/js/33.aae173fa.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.07ddaa0c.js",
    "revision": "37c4f3ea1ebce1fbe8ea8067a5b3edd2"
  },
  {
    "url": "assets/js/35.0c189b89.js",
    "revision": "b85866a7347c9e86ac34408f0ba54280"
  },
  {
    "url": "assets/js/36.58965ce8.js",
    "revision": "7a13714728004595dd2fdc7cf0f778bc"
  },
  {
    "url": "assets/js/37.eb40e17f.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.364e8500.js",
    "revision": "50b2e4fc1beeadb4f07798b36d02294e"
  },
  {
    "url": "assets/js/39.c60f1332.js",
    "revision": "11df79cfae25297ce437f975e2360fab"
  },
  {
    "url": "assets/js/4.6330a4ac.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.0f4c246c.js",
    "revision": "2fe3dfcf882ed107561a7dda03e8395a"
  },
  {
    "url": "assets/js/41.3d8d712f.js",
    "revision": "54bed834792b74759124cedba4d88353"
  },
  {
    "url": "assets/js/42.ea849bee.js",
    "revision": "e25020089a0d9d16ef0c762f2c27bca1"
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
    "url": "assets/js/58.51692bfb.js",
    "revision": "f4d09319409a0de32f2a1a1882c80d83"
  },
  {
    "url": "assets/js/59.cf02e5fc.js",
    "revision": "f4a5522b272ce972def2bc2a4b5a465c"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.79e47b1b.js",
    "revision": "df315090011a5abb7d25758db567efba"
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
    "url": "assets/js/73.87ac5e68.js",
    "revision": "5bd194d90a4344d33dcbe145622d80b2"
  },
  {
    "url": "assets/js/74.5b267226.js",
    "revision": "0278eb8439fa10818948166bab5445bf"
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
    "url": "assets/js/77.272c14a6.js",
    "revision": "0ec270b74099f05682c8a20b9498e71d"
  },
  {
    "url": "assets/js/78.30ac6cab.js",
    "revision": "766e7955a7e888f6e51c921c1a7b5e1e"
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
    "url": "assets/js/98.ff9e87c5.js",
    "revision": "02259483ebeb505b9b39e4ae59ba0a14"
  },
  {
    "url": "assets/js/99.930444e1.js",
    "revision": "0829c5a5adc02102117f2bf3078de6e3"
  },
  {
    "url": "assets/js/app.795ff412.js",
    "revision": "5490f91f6e0e29cd42e530fbd78f691f"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "44ae8add31dbe251efa222dfcd129577"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1ee71b8e4237dd27e20797eaa73587c0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "31c79ed186825fd6c762cc1f67259858"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "23dc7c73b84923a61e39127d6019c76f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "30047865f4fe7da811631a39f481a7a8"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "81737a8a6e6c817855da21df2e2a220f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ec6e349879105b6b8616020376507f53"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "01512eb49aaf9e49d96736844c7c843c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e06c833f2e78ed313b37c1711ddf516e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d5db22ea8c8da0afcc52e5c79c40df62"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e40f846184ad8e6294bf1435c78b9ba3"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "80e304c243770882f9a5d2041ec19e6b"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "4836a85d3ed5a963ba1bfaaf57043d68"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "89b99c1a533f982450f85fa1e0951d52"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "e44c8b15c9d81f01bd646ad9e157ed79"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "ab06ae632d741af76ad05ee5adb46df3"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "072420a2bb47019c838686cd162cd17b"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "73dfca886a60af15aa16743fc36a6e00"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "1c2f2d59c47a94fe45b8d1319cb8eca7"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "8f02edbba70a252d26678a5e900bb588"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "37ff97c7676c8f570a3648d3d8d19a90"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "789087e3af66067d5b42f67bd43e7425"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "35a22aa4b3566a7e425195d36e9f8a17"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "638345cd38dd77c44e45325a46b6440d"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "8c662b4ea86acc36468cca3c16ec7d28"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "cecb85fea2ef404237ba2dd3a47d6d7c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "a6f10d1d9bb84b444c547a0561730e88"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "c64df87255db02544c370d6a71271558"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0435c344cd0b3a2e70b637f325912076"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "1523740a9f2b209cdf0895dc562d1be2"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "6c56e1a6c4e2277f75555124566934a8"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "756e907d787acfa280ed2fa9a47f2c41"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6f8f127c9775760645778e012e842d80"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "651c7176d0fd338e9c62594ac0c28581"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "449279c1e2113c1b17fbf20a009265b3"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "d2a4220d9af7271c6c7d4b6fc11f308a"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "57777af9e803a38bbd4c455c4718ed13"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "370ef9e7856417b97f0c424025b5ab8b"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "83a20515c99440e3ce95907c5387710c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "b2d1fe202836cc73a893ffd10c498c75"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "62f592563f20c39d3d4ca5b2290a7b5f"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "74bdd166aff5bd0e41845270102c85a4"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "56458a5fdeeb63c8c255749511e58162"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "e28a68f80f3e939d12a7bfee7e68fb18"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8c884e74cb5aaa38430d5b14c136b015"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "8351d6f5ef0bcd9e60647bfdc2ff7a77"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "0634941317ffb29ce348326647cb5ed6"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "065a8510757706af5721b8cdfa486d55"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "a22d8f3ddcb01ec4155675f5aae73c19"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "8c6e6b511cff3bfafb8e7aef21d37a93"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "50809ad8d61df38026bca45ae6b327e2"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ac014ffce5b42251ee772b28c86d3bbb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0dc3d4a47a98d326938065c59d5d25b8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "cf588a2f60dfe5137568bcc916930cf3"
  },
  {
    "url": "book/index.html",
    "revision": "3f7f171550c0d12b442f515aabf5968c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d6c802f40c77f78d0c32bb45a68d1db8"
  },
  {
    "url": "categories/index.html",
    "revision": "e77d16de36156b5d2112431de83e83ae"
  },
  {
    "url": "figma/index.html",
    "revision": "045d26ec5069436e17eca73735c141d9"
  },
  {
    "url": "flutter/index.html",
    "revision": "e0c677be203eb7da67a425394c2c1594"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "88a6c08fdbaef5bb9c346bdff35fc206"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "9d4e43e283f843a3aaa0b6cf70bb105e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "07f7e4431200143cc314167c16d14730"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "272589101d2d0d0e4fc399b2a5882a3f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "86a71aca1cd99cdac8bc833aed9b895d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "2fcbac8ddbb41f8ba2b64571e245c3f3"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d51d5c5122aeadb177ad28837bc93a9b"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "af64006831ad0751ca1c8c0d38e1fd1d"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c6f8d75e4c759d092d9f7ef0f408aff5"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "79e80c05e5cc3ccd80c1da3617c5ed21"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2c02e557bc99aef25fa0e439a3087633"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "0b8efe204cd88765b0d08c1c42e5927d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7dd389020c79262dd9b1c5f255d0b7fe"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "52bbed538d63dbe2d94bc9ffb6574f50"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "90913e762bebc66ebbec5c23c14cccfd"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "95b5867409ada454cd6f9cc07ab8ffa6"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "814c8cadbd96f5f9d1a0747acc02883b"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "cbac57eb853f8f65398aea18a638625f"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "8294178ba0681646f493a24570786ea4"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "6b5fd0f1d00d0de586ec0d307cad73fb"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c7691c130fff330765b1a4a8a5a8a152"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "14e98f828aa5e54e0cd066c87866310e"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3b30bcce17fc84ec7ee9b6ae836773c4"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "cc6edc2b73f6fec2989f43e85bed14d6"
  },
  {
    "url": "haskell/index.html",
    "revision": "83a0667bca015e0a154a35a0e2061c23"
  },
  {
    "url": "index.html",
    "revision": "9e7668d6e6fe0160dfd7b4d79c71e221"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "fe9f07e4bf547f04c27e5b09d625825c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "10f0af2170d361a249cabb6e050de855"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3b683047751a37c999c294db8f47b412"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5fb2bb5031cffca25afe64279a78dbd0"
  },
  {
    "url": "python/index.html",
    "revision": "a7539c644ace9f4cf17fb9af403634cd"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "05906c6ebaea10a2686ea1dbf6bfd085"
  },
  {
    "url": "swift/better/available.html",
    "revision": "aa0b4d39c140eea4769db07b7ca6fded"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "7b9e0d078a52f0a0e5cc692d849fc71e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "46e302486f2dcec677e4f71c17a5841b"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "21ddb4034b64100fba1703516c34aec0"
  },
  {
    "url": "swift/better/di.html",
    "revision": "6febc854e230e01bb9993b3078e87a25"
  },
  {
    "url": "swift/better/last.html",
    "revision": "2d384d7ed6919cb024f64ebd39a29310"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "90eaf4d918e72ad8fefb0995ee246cdf"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "4aab46c5cb1776c6d31bdaaea906ed87"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "72c5b11c6bdaf6c8546a9480003c8aa9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "412324172ab0cd40bf6577014a3803c7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "71bbb23e53347d08ad302682fcbd8495"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "3a185e2688eadcb9f24c4b8029c57694"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "20b4d6ecb4282b29d8732849100abf56"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "4653e46ed57bf7d44881d5621500ba91"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "0fad94ff5844260b21036b63ced904d9"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "2fa8a58bb17c7a13bc12a7d11ee9c9ae"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "11e4e1ed022b2ec8de602a89ec104025"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "93b1dc421542a9cfe79b4a1e47d7d3d7"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "44ff73f48c4ec18d75b714be0fe9eff3"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "a49d62f6a9b1ab3cfdc254211b380a7c"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "df71b7b0516621066321ca1755bfc1ca"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "91d868f2c75d029bb3ead65e57286422"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "0aabe1b2702fba790c593954eec7c095"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "c7f95b1a262fc4d3b26750a750cd3361"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "2f5a2372fa62fb94302e1f53bd61a6c2"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "f6ffea0dc448bd74598ff3b61bba4f5f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "10d7a120226b88ab55de7959d602ffdb"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "f8bb9cd0f1c3040b78c09b0552a5d59c"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b67220bd27fd8cea141c8284e06cdf6b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8f1ebc150a4a76bbb8a12ded1086a8b1"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a748defaf511ce4664e7e9937c25ffa0"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "63b528c6faa0574ff864e278d1a7f2f7"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "bb26a09443ee7a346eb1895b626c3fc0"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "f578de27f203f70a0d677a99e8e32448"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a1e6bb46f5b49671ca1845544a558635"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "d5a37076c9c4d101379449f787da3278"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b54fcd3133a8eea0fb740f3c2c4be130"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "0411d77a896dede7ad7cccb5524f1074"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "de45a21ec996f8e946b89bb990bae92c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8aa5a8e9f97e6adfafae0d841c4aed2a"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b9adaef89928ba2acc1501f0c6de4552"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "35f4bf22c818245c0ce2154e77ad5ec1"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b6807ade1bc8142564ec1ac546a4e887"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "04ae70f7edcc5ad43e02ff99d849fd32"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "6a009a2100441c71fe882afe3fdd7e7e"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b3a4104baeaf252d2f0c55e50639e3a3"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "51dc1a1326a4edb2e00d41db5ad0dae0"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "f2b6553d6c7495fe084e17ecf80147bb"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "7cfce4d044754c1d37d98ccafa5b25cb"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "51cae8b6021558373bbfd861940d05ff"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "392cf9e71a61e13a6ed3dff8e7a72a20"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "d5ee9bc07782a01cb626e95ffc1cb629"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "966a4bcf3bc3b635a552f792fe330d1d"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "fe9e14212852abe4072c00715564d217"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "83823744964fb0ac58ed19f97b2670a2"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "7b271680d5d1929e98f427db07aabc66"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "67cf6c226890ec05ebfea386d6a62a8c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "a8e34321cf3afae1074c945899dc6f35"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5b3c4922e3142b0bf9e2b90ccde73e9b"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a97113fc17edd8f96a06d4373fd7db5f"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "64ea1e091cbf341a73a0f45c69d4e17a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9cc8859aa057e5b3276d2771c0f689dd"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "5ce872838d494278f31481eb2cb44824"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "258ee5a92a6f8fc5eeeff08e05b1ebe9"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "6c88fbcf1d17f2939ee5c5f8b5ac48f9"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "4df668d246c83c899a0af6340ec4ee4a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "ee9a95273e689ab33e40ed25a6570620"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "439e1d0f220803ef940c1a35b19a24db"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "635a10dc486ee909e241aee9e94991d2"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "1cae099db3c0eb17fb655872bdd1077c"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c95e3821d5f006852402a7e8c07803c2"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5c146e2c63e198de4d1c6237c19acf5f"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "25b5fd2b6bf53d49266c21717fbb6d12"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "48e2da9b4305f608d14f229dc55a9fd4"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "d931fc3e4e640a7746b7a0a6ba5aed24"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7b2a026a84d6dd4eb1db5bdd1a09f874"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c336ece9fec06d7a2f65c695ed500c68"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "4384acf455ceeab170d886f30cf403ba"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b48817581f6cce22e9cbad158655b6f0"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "15574f43787c0d366fce60ca30be2d4e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "de5ef1b96772239007ad5ae66a940695"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "7a85dd04268653a3204cabb0d5f172ed"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "7d6b69de4f8aa559311eda9ea002da65"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "24fac8167312c11d6e6f39b61b38b657"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "325caedd9360810d4cac4829580bcc7d"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2117cb036a8327b8f38f94a075d8d4f3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "cf329c53063d012fb3b709fb306a6fb3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ab5b3dfca7b27285212456616210eea2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "e4061e6a967d6bb23d1116df364862f5"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2c231b3ca943d25a650340941d07bd28"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c92b0eb8b92596a4fbea1c38ea6c3e47"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f075e9871e7c298ddc9d2fe39bf7e171"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "46686700e3c28e19d958f9046ada22d3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c5cefff0c97983c04f5daa52c44f2e71"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "21b925758824b61015a6d858e028e059"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "54eaca6d40d8bd732f279190f685bffe"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b85f426e3dcd431924fcb0d04c8048bf"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "53204d2b7e0fdadf58bc95536a92ca2d"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "e300f1365ec5c7a5101adb909c0b8c37"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "821755826dc18bded4185986f8a6c928"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "de0b2b7f1fdcdc9748fbf17cf2f38ff0"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2582cf2105bb7a97fa81a49f7fd1e16f"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "5a76cd7b9a0bf1ecf36acd99fafee30e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7d3e6679947d43990c40e594d87271c1"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "372e177bbb1a1b762628b9b0607a7c66"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7cd5786702612ab66b96310341e2fa80"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "8a34cbe155acfd57fa50a97054bcd1d0"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a8d869781e9203d491a464eb11a1e786"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c56662dbc1bc39a0fbf3b904ec5372d4"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "795a1d94d3dab4355d266bfe47bc204a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "74be124810db9176915df604fc42c82a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7b1ca14a82e852ff999d51adda37a31f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "10fb16c14658fa54519d3ab253f31a90"
  },
  {
    "url": "tag/index.html",
    "revision": "cf8e7b7f49c85bab2c4b1c45f5d77967"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a3099cebd25b4281e61f440d5debba77"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "68b3673dc6b7c48bb47b37050074f618"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "131975528604a22da6f81756c4fa9c88"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "0f0c01be1f7b0de8a64552b2ebd71641"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "29513c0ff434414ac520d15602a297e1"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f97282471e3a08531f269d43bc230d2b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f5241acb999602a73160822191f70171"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a8c5695cc509651f05de09d588b5e262"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ae93e188e1f38c7fa9688a7f1e8b2357"
  },
  {
    "url": "tag/json/index.html",
    "revision": "7dcb96afbdc7e049d0cccdcdb28ef535"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "caa8a966fe33fff46bd24fa544515583"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c8f5a479f218b6d9528623a228f9602b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6581787e195e3855a40204739b7662cb"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "44a4ffd98e600c1b14e8c0a1230a14bd"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "0f8b17ece11f95778658ae0c6eab9f24"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "07c9efde35b84007585bc8059e1ba537"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9ecfcb38a680393a1bdc301c253b8a78"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "96739cfb48c4e274dcc952a4a18f70b8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f5e7f2845079c6aba1adfb2461de0987"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "d3ab7f258f85fdabd88e1022934385ee"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "bdc78c69e4162c7b8a2a5e1cc38ca158"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3a0f8b492fed0423e27923891ed70be2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "6aefe25598dcd41d03a8f5b2a1ec4d14"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4fe9761323cc81e83cc6cecbb6ec5d59"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "a19db76e7cbeb36775e8606c0eef1d4b"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "eb23f1ef419d725db2e66ff24e7ccfb9"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "4663965bc6be7cba7e7ad3d6bc2f88bc"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "338198b3b28c087b28bbdc214ad1341f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "21a33dfd475d28881f6e5450f0bf27c2"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c61b44ab7fe8cc3dc91c8b0787f4288e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4f73f58432fbd02e6f8a5eee68b2c9c3"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "fe200d4664f47baa114bc0638051e7ea"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "616876ff0a1dc58a544b2938e885b69d"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "8312416d6fd243731e107c5f955797a5"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c3187d036ff43ee0b2748f2cb37c58e5"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "07f0f0036c2d2765121274131c3a4a08"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "769671c88b780b229e0e9dd1cfeb5fd8"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "9b0573559dd80cc3a18909c2a5ee4121"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "cb193365ffe157f0f386b16181c4d939"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "60cdc0cc919938cfedcbe15c8c08c79b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d597366ea0ebb25e78ee5163b72f2d3c"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3751424ac8b2e18db5ff9374c632f891"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b7a84a710fbca8a57c8ed592846dd5f4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "363e1f5ca44abedec7f8ef6bf4d494f9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "36907da2f9a5eeb331d08101cd3225e3"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "163f95f36538e0592c50b2bf187f530f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "af0f75ce0546c403add53a67751c3b53"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0d26e91cb368be49cb300bd0635e8b22"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "02d94acbf1f4dbbd26875526a4150b0f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "bac077be7cfbb6dd88a40c06233a8719"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c70dfc81f60006860757e39569c3ec33"
  },
  {
    "url": "timeline/index.html",
    "revision": "75899e3f99b6f61cb46db4ecdf22cc95"
  },
  {
    "url": "tools/git/index.html",
    "revision": "67f347395ffeef8e2ca5e9510514a572"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e47cee068fdbe40c3eef2a063ac21655"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9e9a2625fb75a97c8d8f19ae2f8eda40"
  },
  {
    "url": "tools/html/index.html",
    "revision": "432a8ae4cb541555854e1b7083210ea2"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "620eb47707bb8315d7ba9e6ba3890b4d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "5562430ca02831f08e527d2f0e582131"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "9a71ea41bfdc4ca5bb66ccb40c6f0c66"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "a8391601c29b09f7603a0c27061cbcd7"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2e101b7b8eb56e6d050b6a890c8fd3f6"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "8dc36addf85591c16ed410d1860db45e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bb1d6297e37a864d995d678593882cce"
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
