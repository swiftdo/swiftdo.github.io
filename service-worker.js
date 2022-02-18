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
    "revision": "087a4972b4f02d493e3699a182a6f135"
  },
  {
    "url": "about/app/index.html",
    "revision": "3579c7264cdc8ed079170b626b7c7327"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "50f7b588dd3f5ca4aefc5faf5717de59"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "622379093f6369716a22351b09f56362"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ead762f12cff051b917b00a05f4c050b"
  },
  {
    "url": "about/index/index.html",
    "revision": "7950ef99b05db55680e6c32ffc7042da"
  },
  {
    "url": "ai/index.html",
    "revision": "42ab8d453c2cb3394da33fd54897a663"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1d6bf4c006faf581813a700c70b67dcb"
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
    "url": "assets/js/10.1c2ef134.js",
    "revision": "75901eac796780d65b1c3940627a2cfb"
  },
  {
    "url": "assets/js/100.1183dbce.js",
    "revision": "7a6e891a08ea6f9dfc9db4d202401f8e"
  },
  {
    "url": "assets/js/101.2f0c65c9.js",
    "revision": "c759fd2ee3c2ee1d356a8faef2926aae"
  },
  {
    "url": "assets/js/102.9c4a8589.js",
    "revision": "ed7331c46e1f466222d7f8a37d2ab0b1"
  },
  {
    "url": "assets/js/103.83b55a4f.js",
    "revision": "b410abf726858785ab3e5f5f3acb4752"
  },
  {
    "url": "assets/js/104.27f624b9.js",
    "revision": "fa8e236aa54160a7722063a56891d135"
  },
  {
    "url": "assets/js/105.6c0d5460.js",
    "revision": "9a84ac1c8cbae405c56376d5b52a5d91"
  },
  {
    "url": "assets/js/106.cc6d8a32.js",
    "revision": "2d8ac0f9c54a896cd9398ff613fd806d"
  },
  {
    "url": "assets/js/107.715f468c.js",
    "revision": "5aae5e86e9757a3d3e5d2483d06c6650"
  },
  {
    "url": "assets/js/108.b4b11744.js",
    "revision": "7de500585daeb7b4c01e0aab04a7ee66"
  },
  {
    "url": "assets/js/109.610aacf8.js",
    "revision": "d3bd693a5a983bd1dee291fe2ac63916"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.4c445894.js",
    "revision": "1c7a6f297c9e7152c1656b62450aa7c9"
  },
  {
    "url": "assets/js/111.dc4ff01c.js",
    "revision": "3b50df07e872ad6a0ce8e10a63b31fb5"
  },
  {
    "url": "assets/js/112.88275faf.js",
    "revision": "f36d02de0c3a4bc3271a3a9da4b46c18"
  },
  {
    "url": "assets/js/113.e64b8ab8.js",
    "revision": "c5253a81997e866ae8beae4dbd3cbc7d"
  },
  {
    "url": "assets/js/114.c4bd5e71.js",
    "revision": "9f127d32bc64f1830464e8ece443eb59"
  },
  {
    "url": "assets/js/115.01a3bae8.js",
    "revision": "8685f5aae00024e7ff576288212e6cdc"
  },
  {
    "url": "assets/js/116.6fe46c21.js",
    "revision": "4aba438b0c0299e044832a1caf31cb5b"
  },
  {
    "url": "assets/js/117.6744cfa2.js",
    "revision": "93dd0a38c3a8272545f71a7156bf6451"
  },
  {
    "url": "assets/js/118.e441f3d4.js",
    "revision": "70665027844177a1d91310185074cf27"
  },
  {
    "url": "assets/js/119.4c152767.js",
    "revision": "ce3e945a6e621c576a682a65bd8fb7d7"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.eba6f2e5.js",
    "revision": "db58cba2d0a6a130320e75d89665f32a"
  },
  {
    "url": "assets/js/121.9c27f1d4.js",
    "revision": "3cc5306ec49e0380cbed931069c36ba5"
  },
  {
    "url": "assets/js/122.9afb63e6.js",
    "revision": "7345ce8e8d690a922e2e75dfd1524125"
  },
  {
    "url": "assets/js/123.af8e5476.js",
    "revision": "cd2607fa705ec5e7de3f69b3abf00572"
  },
  {
    "url": "assets/js/124.35de9d03.js",
    "revision": "f9d31bbf7af4ceb19e6c7352f1a7d7a5"
  },
  {
    "url": "assets/js/125.1454dae5.js",
    "revision": "3bbece4eba1d67cf4ab1df4091030a2f"
  },
  {
    "url": "assets/js/126.4deeed55.js",
    "revision": "ca1c77bd2d1c572a3827671ab19e7a84"
  },
  {
    "url": "assets/js/127.046e23b2.js",
    "revision": "ef298bcbd6e5f69caf61d17839f46006"
  },
  {
    "url": "assets/js/128.ce1281f4.js",
    "revision": "3d1036a27562df74d8cfb2a140355f0f"
  },
  {
    "url": "assets/js/129.ffa2631a.js",
    "revision": "bff2b9cd5c4eda3dba77a9222f6164dd"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.676b684b.js",
    "revision": "f273d5fecb42b59483d333c428d44d93"
  },
  {
    "url": "assets/js/131.bed55d42.js",
    "revision": "18c75d246929896b9af73ad5612ebe91"
  },
  {
    "url": "assets/js/132.ca9d5591.js",
    "revision": "39add50c49ca9ef040b0a65365730856"
  },
  {
    "url": "assets/js/133.a9ef3565.js",
    "revision": "625a445b0ba1188d96def63f8fd030fd"
  },
  {
    "url": "assets/js/134.8aae0deb.js",
    "revision": "45bd9b94a488914b9d506af9226cef15"
  },
  {
    "url": "assets/js/135.3e874668.js",
    "revision": "2297b4d49ceb29ee6e15d7ca9214006a"
  },
  {
    "url": "assets/js/136.4d3a2d73.js",
    "revision": "e80077ce6902745973ee6b9ca07fb311"
  },
  {
    "url": "assets/js/137.0a502afb.js",
    "revision": "cf3c19d0af70761ee89cb4a5cd52dc56"
  },
  {
    "url": "assets/js/138.e8917770.js",
    "revision": "f94e5875b65a41120cee7ed826fef38b"
  },
  {
    "url": "assets/js/139.1d0bb0b3.js",
    "revision": "6437b975e48914cabb4c18c5f55109cc"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.e9b99c0a.js",
    "revision": "dc546d21f48b6148a35bfc774e2328f2"
  },
  {
    "url": "assets/js/141.d9a87d77.js",
    "revision": "e732105c9cb42db7e53084451bea951f"
  },
  {
    "url": "assets/js/142.9b38e979.js",
    "revision": "0a1baef5146494da6c15ed05976173d4"
  },
  {
    "url": "assets/js/143.638f4cf5.js",
    "revision": "48dbc0b94daf3b675cb0bd2524fe9195"
  },
  {
    "url": "assets/js/144.bf458ba2.js",
    "revision": "b6f290680d641f2c027d0505b400decd"
  },
  {
    "url": "assets/js/145.4b526748.js",
    "revision": "64fd2751b2cc8ebcb96aef5351fe0b1d"
  },
  {
    "url": "assets/js/146.bccf8a72.js",
    "revision": "7d8a00934c5282a33da580764633cca7"
  },
  {
    "url": "assets/js/147.55be87d8.js",
    "revision": "bfb66998789c3ccca561b98d5337153d"
  },
  {
    "url": "assets/js/148.4057a44e.js",
    "revision": "3841ec5190f21405ae5ccb227403389b"
  },
  {
    "url": "assets/js/149.e65762e3.js",
    "revision": "e8d8be1e2c1c244c15c345d3cd86fc12"
  },
  {
    "url": "assets/js/15.0e5dc693.js",
    "revision": "3ebf8df690a3ed1bb24c029339b70da5"
  },
  {
    "url": "assets/js/150.1cc595e2.js",
    "revision": "cfbc15874372c00d626fa45182c7b5b3"
  },
  {
    "url": "assets/js/151.d94e97e5.js",
    "revision": "d96c45b5351a5bc0980827ee7d008ee4"
  },
  {
    "url": "assets/js/152.6d16eb31.js",
    "revision": "005ed1ec08960bdac48e1c68acff8568"
  },
  {
    "url": "assets/js/153.26cc8ede.js",
    "revision": "73619cd27b4af945ae4e5dd64ab2c8b8"
  },
  {
    "url": "assets/js/154.ef5bf946.js",
    "revision": "70b42b7bfab0c26f949330c417b4ca5b"
  },
  {
    "url": "assets/js/155.9caac726.js",
    "revision": "5f3c9a72add45cc2e6dffe17e9c4300f"
  },
  {
    "url": "assets/js/156.18b08c69.js",
    "revision": "ad1a6477dad7bbb921e30d29d9d72499"
  },
  {
    "url": "assets/js/157.edbda614.js",
    "revision": "9b70e785735eabbc09f1b54448fa67fb"
  },
  {
    "url": "assets/js/158.439e0fc9.js",
    "revision": "83f698a3dba69cb9b4dac27932d4ec8d"
  },
  {
    "url": "assets/js/159.0e0a70ea.js",
    "revision": "0461c924c30addfd38a9ac9981d0c500"
  },
  {
    "url": "assets/js/16.e4a55c2b.js",
    "revision": "d8ac1823a4917b8b0948fc4fd06131e8"
  },
  {
    "url": "assets/js/160.29f8886e.js",
    "revision": "d1032608a13a7d8b1d6c1b1d5a471ce8"
  },
  {
    "url": "assets/js/161.e75e4089.js",
    "revision": "afa709ca9800a85a0df8844ed814c50a"
  },
  {
    "url": "assets/js/162.45e0b83a.js",
    "revision": "8be3427f554312696aabceaeee52b167"
  },
  {
    "url": "assets/js/163.001bd797.js",
    "revision": "3b40d253b934bdad2e477d7b90d89c5f"
  },
  {
    "url": "assets/js/164.d3bf1df5.js",
    "revision": "d35f52c1effe3319ceb388db0d34836c"
  },
  {
    "url": "assets/js/165.126c6586.js",
    "revision": "b0a11788d52ff52cbe34db7a3d1424df"
  },
  {
    "url": "assets/js/166.4f916dc9.js",
    "revision": "f1058441154f971f43b6dbda4928c221"
  },
  {
    "url": "assets/js/167.6cdbfc20.js",
    "revision": "ed67299c36dc3d72b0f9c77db329f6ad"
  },
  {
    "url": "assets/js/168.f7459733.js",
    "revision": "f3907b1b19d990c489d1e26dc5ccbf98"
  },
  {
    "url": "assets/js/169.491580e6.js",
    "revision": "6c03801fbe2b57500acd628cca8f0d51"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.5ec66c88.js",
    "revision": "edccd957e4129bb2465c75d89b5ce0de"
  },
  {
    "url": "assets/js/171.aa1ef4e6.js",
    "revision": "ee7d5e8631e298364f4ffd0c064b5ef4"
  },
  {
    "url": "assets/js/172.0590d543.js",
    "revision": "81a723dd443479dfe1c88454fcf61897"
  },
  {
    "url": "assets/js/173.8fb65a00.js",
    "revision": "51665d5ba42a19ff694fcc717abef41f"
  },
  {
    "url": "assets/js/174.49c1496b.js",
    "revision": "a8ec071d0cb89224209980366393f1ae"
  },
  {
    "url": "assets/js/175.f1641f7f.js",
    "revision": "2ae3324f78f0b2a0a280d8ce3e714dbd"
  },
  {
    "url": "assets/js/176.7e9006b4.js",
    "revision": "ad93c3a9c1af6dc51a4ac6b041403adb"
  },
  {
    "url": "assets/js/177.f765dec7.js",
    "revision": "2e2015ea32debf0e082cc4e584bcea9d"
  },
  {
    "url": "assets/js/178.7544c804.js",
    "revision": "5cb97e008094128f9176628c153b60ab"
  },
  {
    "url": "assets/js/179.ac3df513.js",
    "revision": "7186feaa6bdaa0a4eff6234144be7a44"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.5538a90e.js",
    "revision": "c5391ca530f598ce4f96cf76851b9c7c"
  },
  {
    "url": "assets/js/181.c227e566.js",
    "revision": "d4ad2478479b69090b9ac166d1dbd4f8"
  },
  {
    "url": "assets/js/182.8d1edf7e.js",
    "revision": "776e496cbd4a4f932bf152d33431fa9e"
  },
  {
    "url": "assets/js/183.65345955.js",
    "revision": "743c598b0a004cbcb1abdbdc8288fc00"
  },
  {
    "url": "assets/js/184.6d368c08.js",
    "revision": "27a4ecf32c66e8cc4b6dff628d19bd17"
  },
  {
    "url": "assets/js/185.edb4b61f.js",
    "revision": "54715c945d140f05859b75dfa96a5706"
  },
  {
    "url": "assets/js/186.11c0f3b0.js",
    "revision": "bd7747d35f9e3cf973375d9c788daac2"
  },
  {
    "url": "assets/js/187.4eaacc3c.js",
    "revision": "6debee721965c3abbe49c240e987a09e"
  },
  {
    "url": "assets/js/188.bbd92dd2.js",
    "revision": "e4278695c65f07026c266878abf42930"
  },
  {
    "url": "assets/js/189.dbc1206b.js",
    "revision": "683048b44c07fc73b2a47798f5733995"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.029f2a2b.js",
    "revision": "4b83d61b860a2c53f14b3ed0f9964977"
  },
  {
    "url": "assets/js/191.2fdfca88.js",
    "revision": "e9b609e9e5a398456ba8cbae4fa3279a"
  },
  {
    "url": "assets/js/192.b80f7b55.js",
    "revision": "e52958c16f823316d007d737ba3c00ed"
  },
  {
    "url": "assets/js/193.8f43c00e.js",
    "revision": "4a1b90b16caf85b34e0d078d500b16b7"
  },
  {
    "url": "assets/js/194.3a615aa7.js",
    "revision": "d91db89bb386e40219042a8e1e320f5e"
  },
  {
    "url": "assets/js/195.fd597028.js",
    "revision": "14b5783954a8e3db52315b3da1e5810e"
  },
  {
    "url": "assets/js/196.c5db1b29.js",
    "revision": "321d237d09d15b8f586c903b6ad54c83"
  },
  {
    "url": "assets/js/197.78b97379.js",
    "revision": "ffbe40d4825bd70c17151c65ebf21e5b"
  },
  {
    "url": "assets/js/198.0e3c4621.js",
    "revision": "82eac970c9f74686a738ae329d8ece82"
  },
  {
    "url": "assets/js/199.98914e2b.js",
    "revision": "59d81ee2d76742ffa3753cf79e445578"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.1a29ab19.js",
    "revision": "49cdeb85a14c88c4b9e18d11ca4d2075"
  },
  {
    "url": "assets/js/201.fa794d38.js",
    "revision": "6d39dffd1b6d0614c726005295c30407"
  },
  {
    "url": "assets/js/202.45043d1d.js",
    "revision": "57c8be42f036e1f17b5709195b88aeaa"
  },
  {
    "url": "assets/js/203.0f6d91a4.js",
    "revision": "bab2ec7004888abbf2516b67a52d13a9"
  },
  {
    "url": "assets/js/204.6b93ffa0.js",
    "revision": "422189c4e036bc660abf60b9ddd9b3fb"
  },
  {
    "url": "assets/js/205.7d3c3283.js",
    "revision": "c7adb28fe71a26d2d50230a31719a0eb"
  },
  {
    "url": "assets/js/206.494ba6a6.js",
    "revision": "78e68619cc82a11cc805a55e4ee3c755"
  },
  {
    "url": "assets/js/207.ec12c7e1.js",
    "revision": "e82c96fd8c809ed3e5a26ab94fb81c49"
  },
  {
    "url": "assets/js/208.80485171.js",
    "revision": "8ed7f472638bb54fdf9dec40a1b23c0f"
  },
  {
    "url": "assets/js/209.e6d3d032.js",
    "revision": "0eb51bb0c6ec4e6bc1f2bab99fbd4dc7"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.7a483e00.js",
    "revision": "2838953e37625591b8e6c4fa1248b401"
  },
  {
    "url": "assets/js/211.0feec35e.js",
    "revision": "c5c54fd31d3db64d0574b3b7457baa5e"
  },
  {
    "url": "assets/js/212.76365198.js",
    "revision": "c62034917a2b84b07228d23e26b1a80c"
  },
  {
    "url": "assets/js/213.7142abb6.js",
    "revision": "dbab7b1fd5bd70b24cfc878397681b8c"
  },
  {
    "url": "assets/js/214.81877d2a.js",
    "revision": "33a6e53969479e5617d96c6648027f4e"
  },
  {
    "url": "assets/js/215.2b6381df.js",
    "revision": "41770bb0d662d74326faea6a01ebbe62"
  },
  {
    "url": "assets/js/216.bf82bc49.js",
    "revision": "b207eab25ef7dd65a8a893059389bd24"
  },
  {
    "url": "assets/js/217.c6ce5d56.js",
    "revision": "b9779611802fd488c91b2df41ab584f9"
  },
  {
    "url": "assets/js/218.0711bd7b.js",
    "revision": "c09a49a148100519946ceca0a8811994"
  },
  {
    "url": "assets/js/219.ee24c8f7.js",
    "revision": "72b18e945378b48f00cc31c37648fdfa"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.4683cf09.js",
    "revision": "6700d7fa9602f7303ed0b31b523826d4"
  },
  {
    "url": "assets/js/221.880aecf0.js",
    "revision": "293996f6e2aa7a1a6e9738ba47c57090"
  },
  {
    "url": "assets/js/222.3b8a59ca.js",
    "revision": "b46c6d7db4ce32d20db232378031d6a4"
  },
  {
    "url": "assets/js/223.fe413623.js",
    "revision": "4d49a970aa4ec9aa24fdded2db662f45"
  },
  {
    "url": "assets/js/224.6c26b7db.js",
    "revision": "7fc7f39a42cdf88c32d4b10cacb1ff7f"
  },
  {
    "url": "assets/js/225.5601c2e3.js",
    "revision": "318f7924c2fb0c23dd51f80732144c30"
  },
  {
    "url": "assets/js/226.af9b138e.js",
    "revision": "a99ba1ad38a4d88a3682a9a4cbed68c6"
  },
  {
    "url": "assets/js/227.c5ece37d.js",
    "revision": "d8b9dd5f61b8a869333b667bc8b16956"
  },
  {
    "url": "assets/js/228.a9abecbe.js",
    "revision": "98ccd5f58befc7861cf66c79a98bc1c1"
  },
  {
    "url": "assets/js/229.6c74e167.js",
    "revision": "899bb1751dcc8fd43b964cea3672f470"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.07c96c85.js",
    "revision": "44d043cf7fa67da0d3860df00f73f3a3"
  },
  {
    "url": "assets/js/231.e24a64fd.js",
    "revision": "9bbaa0865753e52ef6568603717d6226"
  },
  {
    "url": "assets/js/232.a811e1cc.js",
    "revision": "2d9a09d856ed636064e7939e73d81825"
  },
  {
    "url": "assets/js/233.64be6ca7.js",
    "revision": "746ee2673fbcc32bdbf4c98a1cedab96"
  },
  {
    "url": "assets/js/234.8cc8bbe0.js",
    "revision": "922fa26ff4e65098a4ca12e5fc25ba21"
  },
  {
    "url": "assets/js/235.ba45b3a3.js",
    "revision": "4eda5b0fe42881ff4b347835ad7f8631"
  },
  {
    "url": "assets/js/236.b586f8d9.js",
    "revision": "67ee3e494f852c9d6d493764dd526dee"
  },
  {
    "url": "assets/js/237.9bc5af87.js",
    "revision": "e9030960b9d743c9eb434acee3780d5a"
  },
  {
    "url": "assets/js/238.926598bf.js",
    "revision": "bd15fc68b4f38c23e46b0ef07a4b96fc"
  },
  {
    "url": "assets/js/239.9d977ef7.js",
    "revision": "d3d139aae254b2cbf0e7fb674fa6610a"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.a1df6733.js",
    "revision": "83a389a99ce107c1012886eba10951b0"
  },
  {
    "url": "assets/js/241.c4fe97c4.js",
    "revision": "d559e66972cd55a27595305e73d43373"
  },
  {
    "url": "assets/js/242.1984896d.js",
    "revision": "72eef15d9dc46dac0748de3844711b54"
  },
  {
    "url": "assets/js/243.b09aba54.js",
    "revision": "4468844b6bc8cb9d67b1a708044d48a0"
  },
  {
    "url": "assets/js/244.0eaf4724.js",
    "revision": "47be5da8b0394b69269dfa7ff1bb6703"
  },
  {
    "url": "assets/js/245.7b60b0e4.js",
    "revision": "76a686066c498e295bac1adec7d435b7"
  },
  {
    "url": "assets/js/246.4b098eac.js",
    "revision": "ea1e1c20e376d92c5f58da2c3d33f4bd"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/26.1b19592f.js",
    "revision": "2c595447d507a660e96dae0a1d0708cc"
  },
  {
    "url": "assets/js/27.3f70a8ea.js",
    "revision": "b4af334dd4bbe8675113fb031b12ffdf"
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
    "url": "assets/js/83.b9f67f61.js",
    "revision": "1637be51b47b148dfd00ba56434ab4d9"
  },
  {
    "url": "assets/js/84.b14dfbce.js",
    "revision": "294085b2e80436613ebe3771cf24b47e"
  },
  {
    "url": "assets/js/85.30f0a5bf.js",
    "revision": "0d74711fa680140ca26687b1d86abea3"
  },
  {
    "url": "assets/js/86.ef3e5753.js",
    "revision": "6524c25577424783f73ac1d96920b547"
  },
  {
    "url": "assets/js/87.7c42a882.js",
    "revision": "a717a5f6e3757871113c693047defc62"
  },
  {
    "url": "assets/js/88.3b44d59f.js",
    "revision": "c990c75c4e08231104fd8d8913b5638d"
  },
  {
    "url": "assets/js/89.81c97353.js",
    "revision": "4f7d3f3b6871992bc0fd7f8ead55ec2d"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.83d03c0f.js",
    "revision": "9cadbab6baacca309ed898519a0e7022"
  },
  {
    "url": "assets/js/91.ccabe021.js",
    "revision": "4a6e081c4856103a2b87df20e42233d2"
  },
  {
    "url": "assets/js/92.dddcd00c.js",
    "revision": "37cb42a0380f5f2167680c8b9dfda729"
  },
  {
    "url": "assets/js/93.4e0b07a7.js",
    "revision": "f08b39a7a9b224d63b9a597fbedef410"
  },
  {
    "url": "assets/js/94.161f1c98.js",
    "revision": "8f9a1fb4997136804633dceeb9960a81"
  },
  {
    "url": "assets/js/95.16130c58.js",
    "revision": "74e7feef7f83f24e56e246019e858847"
  },
  {
    "url": "assets/js/96.2c7ac364.js",
    "revision": "8aef355021686f18effa025bb8f51324"
  },
  {
    "url": "assets/js/97.c59de351.js",
    "revision": "9f6d8ecf9d537c986aabaeced61b6e10"
  },
  {
    "url": "assets/js/98.b565210b.js",
    "revision": "c41521b6836b00781170c1fe8dd14402"
  },
  {
    "url": "assets/js/99.c7d2ecbb.js",
    "revision": "3c379b98fd66024a3bb203a67b32d3de"
  },
  {
    "url": "assets/js/app.c67856b2.js",
    "revision": "2bc46df09c8ce85beff715b8c5b4ad8e"
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
    "revision": "902ee7b2a206599374d669d367d65dc7"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0cd9355774b04ca2d63c0ba9e24b1fe9"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "618ba9139d5f6c2e39af45f48b207d1f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "84911a77e4dee1660afe8de2d6f42e69"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "49e71055f6d168a204214778e935e808"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "6ddbe6704fbf78f88df7331e678567f8"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "064eaa232564ce9e379b813227281951"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e7758754956af9e8025c7b51dc90d8fc"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f1991d0e007c9af2cd85a9859b9f080f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "a3a269cc837725d2ad9b281597f34f91"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d9f08b952e3e4e78ab6e726a699f956b"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "515a5a167be98a5007774e1a52eec2c2"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "86ee75d0eca3ff11a540fae6d9f253fc"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "1b01e70e67be5125b6b7be626256a76e"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "e0f80249249bf9445df0237b93244422"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "50acec0307d1ffce15471b3bf85a2814"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "376f648cf817f7ede9d777267b916c90"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "c69701a990573ffd41f0a2fee607a906"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "0097f3b4d2f914cc9e7b275e846e2afa"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "dec333ff011209808b10d086f583c339"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "aa00422ac6c67315bf02936becee8ce9"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "7961122a6040a55269858e5fd58b3882"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "caaf0b36772db4938e97c2ea45da57bd"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "5e2b0a69e0f51e0bab2339bcea969741"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "878f8231b4a6f76eccedc93628d931fd"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "1128d8361f75d06ac3f4df3928997050"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "3e19963515a0ef825149eb337fc60fa1"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "9e8971fc9d81d76c20dfdfa78b830393"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "e2ee9b6a57d86ee91604927060ad9b59"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "1066b64a7a8f53031c68f84806e0d051"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "70ad9f2175b968f36e7a5b798e0cfafe"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "7eb1238f2e9069b48f5374bdc30f308b"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "fa00d32dcd22024a71f2a57a7b97454e"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "ae7ee4923bc114bbe9f118dd9548a163"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ec90fca58fe982b693d76dabef6b498b"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "71cb7982602d402e7c4be517bdf37e57"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "1b1cefaf821ee8cdab3aa4b2ec79339d"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "ed0ab49a3edf87db9339be4065bc6a48"
  },
  {
    "url": "basis/index/index.html",
    "revision": "bf450e066c59e2045c6003755059e135"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1da65cdf81160583e08b4cd94150163e"
  },
  {
    "url": "book/index.html",
    "revision": "3b6763b221565cfd4bda6dae745f594c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ff51c9f2673aa2717fe0d9fc1df2f959"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "0c282318db4166a535a3bb354c975777"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "47fe4cd9c8c93a830d904b159fea9064"
  },
  {
    "url": "c/audio/index.html",
    "revision": "01ae6f95316db7676a7fd97da8b045c4"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ab7c22eebea364b9b90afc8251ade3df"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "0c70ac386322014bb7650a88dc08476a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "f6d17638dd68ed39058b11d06eb9738a"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "eca86b221822e988f0a2329ea17fd1b6"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "7a43a42d1a168917173123ac0fd102ed"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "829af8e665bd80b7d2315190b9b2bc81"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "433ae541834e768a3b3a2e57773ff35e"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "e086358fac767eddc94d2c586f9f4fc5"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "c916accd5659353aac1c7c5f5554cc26"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "53d91ee57f2bcf4f2c34dad9caa2495f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "a6e7415a9c1d0e996f6a13e18827b601"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "0e01f2e78f192cd45080c6006f4dbde9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "8ef864bf672eb2e924903a4bc3eb2561"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "b77f11f872272b17619a3f198e024213"
  },
  {
    "url": "c/program/index.html",
    "revision": "cc998b162aa0281d34e0bc29a470d697"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "ef24ca46f33a9c2cf5d711ec52038211"
  },
  {
    "url": "categories/index.html",
    "revision": "46f01d872931d8af78910374d9155ab5"
  },
  {
    "url": "figma/index.html",
    "revision": "7e9de97e1bab9193ea2d182ade3f7c97"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "a13bd9b198e50772affa59256c5eef09"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "7f0856293e86a8201cb46bbb8a86ea98"
  },
  {
    "url": "flutter/index.html",
    "revision": "2bb1945fdaf0da66516f2a8b7eede565"
  },
  {
    "url": "flutter/point.html",
    "revision": "bdd31424989f802a1627dc7ee5373802"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "c0df19c9d5e6c28325d3c0d6bc8c4eb5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "0433610db62ff5c6e3528786fe95f19e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5f221d6332be89a3b5f9215bf47a108e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "64e2b21d77c209993135415e994a7b15"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "28cdbbc28a2565dc2f65c81ddd2a33de"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9b8d27b51a6df8b2db275d338a2ebd01"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b567fec451e8483283ea976c0dc719b7"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "89e6fde5a6288d3714091d8e273f8440"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a40cbdd8a49bac6b8bf73ef899c2b7e8"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "44c3a7905812f57b40a81fd7ddcd491e"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "cc83c156f0b67021aaa673d1390fd696"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6635d21750705cb72d97ce8786c3c45a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "1f2fbb9e816886bbd3114c31a7364725"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "59b20e3ac3f3e3177bbbf980b4c7d823"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "3112742b0ed404ed89806bf2ddaf9a89"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d11d1f1e325d10338713b86c17f78f65"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "db783aa2a0bbc5ecebe7f94acede5c98"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d1baa6cd266344234dcac37ec9998bff"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "05c60c9bcfda28a2487f303529844c37"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "532d2557eb65ae39e18db26367d9a6fb"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "95339488d3089f6f4fdf8d94b3ae3df4"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "6a57f6cc96a514075230af4f1a4b89c9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "04f4c2272bbd889d4d49dd79f6130f07"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "31fec6ffc0812ebfb469001757605668"
  },
  {
    "url": "haskell/index.html",
    "revision": "6bd8f1582778d6ca670fb59107dee355"
  },
  {
    "url": "index.html",
    "revision": "4c23e33878ef06ba00e969b9ad7a11b3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4c23fcfa9c9383f9bf950260ad411a64"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ec73272fdc06161a4bb5778fe2433694"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "17984967e77fe7cdd82824add9b0137f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "0a573affb41bbb22edca4c92e6a2e1af"
  },
  {
    "url": "python/index.html",
    "revision": "057ec3ebea2efd0241c379b6d5d57996"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "463622a31e8877b47ccb65c0e05bbdf6"
  },
  {
    "url": "read/index.html",
    "revision": "2c98f9bd81e84c1b2d799a1ea21d4cb0"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "dee18a5348e61db0680b4d98f7596672"
  },
  {
    "url": "swift/better/available.html",
    "revision": "8efc82c384a29a488ba04a074d16ff93"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "e28e7eee6346bbc11b54f40f916ab8cc"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "449c33dd18e2858b0eaf788f975654c6"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "725b87683b15f4ac20d74ed8ef9b4879"
  },
  {
    "url": "swift/better/di.html",
    "revision": "7a0dd62aaeb2454d018fa168eee7e9ce"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c3b9d2768673bbd51a7dcf7d14f67ad9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9b40dc9947175d0d4a3d4ebe58845888"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "bdc678a28f9cfcd0d9f0bf78e7d4c4af"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "a42274b0857d0e3826c055a982902780"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "203e59a730797795695177622d239d3c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "44c23f8ac6de89d02ac34f5f2f457824"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "31e2ab76b3bde5db9421491d2af3cecf"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "3a64ed61b64cddb3d74ab995745713f8"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "75c38427db4e4ffbaecdb40c10a0f8f1"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "026bd26cb31bc3cce6963078f651e342"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7f8bd7335caa7faf3aab92ae1c2c5327"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5581fefcb3d144f39a2160ded68585e6"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "7b518e8d4efa69f1bd829b1734af3fe7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "0fb85ae9fba6c8e1ee319e500b3bf79a"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c69af62d424affd4b4143a4dc0166053"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "04d66d2355334367688085b3fcd96071"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "da849c01e9e2f4809e761c6a1e57603c"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ce520670a0dc7a4a0b412558f24ef728"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "4c60c1b4cd6060a7ab9c949fef81287f"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "8b0d97bd00c2e757df131654bca8691d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "0ad1a94ab952b568cea2d8f0a3252fda"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "659cf5a1d3ada7ee28318ea2063c1fed"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "a170cca3ffafc5d728e3bfe763f3799e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "17ddfb4276d31dcf6ef38b8c633ac27f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "adafea601121e835b2b4c1f7580ad1e5"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "323d5ff200d2c3e968e51236e72a76ac"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c6586273ef339b9d5e0a43adb3fcebc0"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "511b468d1292dc9e28c387b17f14d071"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "f90a935f6dc46708cd2cf82637600bf9"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5b0c058b65454d0b47c452c57cbef493"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "d2dcea6c2e9946964a494274024c59af"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "104dcbb3732a1e36e3698c275b048671"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "15d6517b5acc9fa6ca0a39be0ec81902"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "365cc4bb7172ba8a91c28db05794c3ff"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "cda89e96694f06b7bd0bdd2546b200a1"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7cf34b9c887299c4bf15c8453982efc6"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ec214abe99c84f55e96ffc5acb9136a0"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8310520568f119dbcf7cdf2756fb3001"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "d23229e73c7f01ac44a5aa3235a942a6"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "10fb6a0f81347cbbb53541957ae03baa"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f0e50890105d5cf84e718f1609e85375"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "6590e9b343f462f575331263f2e7ad4b"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "84a52a5782b5d1cae1840b8dcd29bfb6"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "0bdfdb5520379b58c4d547034d24955b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "535010bbb8452f6a84bd5a2298916e90"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "0b442a2296a8627b2e35ad83f1966244"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "df6729d3268b266c91f315b2a25dc166"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "6f9c67626755713709fc4c9b0adfe39d"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "699e60318ecd7e3d1a757d91f558c8c7"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "ce4ab121c537e47c5643ac54eb037083"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "2a69f542a9793cc08f8e655ec123f837"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "d4eb507a4ff0de9f263eb6d1db3bd05a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "f5679098ed13d45a9b88f7891241feda"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "a7d5080bdf131756c09ff46f5c504515"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "6cc39bbf3505a0be2fcba4aff52358da"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "59b4aa8876d768e43da9b1a159dd67a6"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "7df7170d3b8dc4da9ef0b60941ededee"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "48283172da454cd391384d7b80785e08"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "e9b3be138b0213e1f3dadbe6c405c8ec"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "3276f8e5e8dbcdaf91e91c51cbb582e5"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3a5f04e7add0041e2057641dfc489c04"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "9ca96a0bd037f25f468a2caca60a8b87"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "3786fe276c5a89a321e3c6a1edb9c696"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "c27019219881863449becb5768465748"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "9a21458b5a33362e4bfee83031699b9d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "9f7b96b475a99cf2ac3eb474e09f562a"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c6509f6aa3a52a4eeefe35758a9fceba"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "92718482436ba14f6c9e8c2a9b994359"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "64ab8cf5bd32085c6136248d7c372163"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "b081600feb8b917c482473b0faeb0fef"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "a1e824c1072d5a5165390d94883732ce"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2f358ce6f8736bc3af317f470fe226e5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "6c25216818a70390a2e36d934cda109c"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "22cfea6956e6edec6fd13cd13285fc3e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "61a7dc4feea196d83de13f41a0310f9a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "a3a4634274b562d3fccd74ac35d10340"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1dc34f2bd447b01408f32416ba0afc95"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "036a4dfa70e4c86d8477dca2fb5107ed"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "51c0b207abc08cfe6d80f27e00a305f6"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a6120eda317995713578d5a500d4141d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "1599c44cb651d26f45ba5d821ed76896"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f5d695ca7fb2efd5488a12f94c7f4f89"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "73567153f6a0a62af4364c1830b636dd"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "c020a4d6a940618a5fff622c75b9942a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "e1e22cf7896eec3fda471493db0d8322"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "87d9a94ab68c75c228fef895524e747d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "dae12a76b298e9df0573ceac78f51b1b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "7142f82eab97ef3a6cd2691f321107b0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "6bae177ab107961eba96d32b3b250dd9"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b164b4239ada1742faef3c16e68ca292"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "4465348b3b5d8187fffd0eb50cf873c9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "0fdeb7c5b706f82bed42f216cfd5ae2d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6a6da6c48b1ea6c03a2b36efe6e62f27"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fd00b740ecfe2a8aee9abd50527089cf"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "48c7ec32352eed9161b3367558199a6b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a5f021deedc1aa8fcd93ae9c0bf7166d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2c868b0fcdc8127e796a9d50a9243dce"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e88336c9efe0bf6c7c0284da38ff4773"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7ca0dc0d478b9d99151a5524a8dc2215"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "70c575058008f82d1bf41c2c8f6239e2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "83c4ec576bc200ec7413c4db34c6e9d7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "fa3c18d9d8d574372d1ef90c5a9363c9"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e764a140b8faaeadad20f887a6df5d4b"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "71e12bf7bba41fb9d62ce838e88a6ea7"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "7e8ed5e426268b84b4e75047c285552f"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "7e15fb5ce7d30d5806b2fafdf0653ad4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b35c2ff8eb059eaf2231cc39497f8f69"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "6b2121ab4e2f0e56f8eea3c1e4997b23"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "87b7ffd766f5558ed8eb84ad34394b6e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "44fd3a340ee09433d3b0541a01362b5e"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "00dd20ef1c3e5ad41d6e6af64980e963"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "dcf220aac47e87eeda030209c48d1b1e"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d985aa0004c8c8a5c449812068cb0f77"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "d3ea8304cb0480ec89f7145b088ad3a1"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "175d7cbc0eea589f7f0a5d10097babed"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "8b908556ca2b41ad65c010ccae17ccc9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b99dd94e62ce53d53fe47333b940bb9a"
  },
  {
    "url": "tag/github/index.html",
    "revision": "fa720dbad79629fefc18f16900ef4680"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f4d555c3fbf63a67ee1142fe42cae305"
  },
  {
    "url": "tag/html/index.html",
    "revision": "09d9d54bb91c08243202c5e3a9cd0dcb"
  },
  {
    "url": "tag/index.html",
    "revision": "5c8ee571b497a5b01b45bef2c1c7fe62"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "44e11e91e60ca7aef095c962cca63e3a"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "b0f1f321855039afa02e92958c45632a"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "491a6f1bc1e613a58895c45eba86d37c"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "23427e0206db47b33f7e134a35e02e59"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "c5a28e48ac6af968a327ceb101efa6af"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "8336cc1967867fbae3683f1e089ac3a1"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2afeebd09ac454366a2b9bff9800dbd9"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "157b3e071e5eaa5931b29178cf0c69d5"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "82a6796067bc03d3ecd9be26cee470de"
  },
  {
    "url": "tag/json/index.html",
    "revision": "162a73d717582f9d67d8b629081a754d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "371c2df7acac677be1263e901a44572c"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "74907b89be55164e7f843d3e0eb44dd1"
  },
  {
    "url": "tag/python/index.html",
    "revision": "74d81d8534e3e4f434e25287daca0d11"
  },
  {
    "url": "tag/read/index.html",
    "revision": "c83f858733357ad9e3f26670e86fa8f9"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e218671dd3f6342dcba36c55ec25062c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d5224222ceada5aeb4bb916924fb0a2c"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "8c8a411e6485ba976f948279ffb06e6b"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d35fe274807e3c0fb1a343204ccc9d54"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "5d2e44a04e92342c66e6b9a0cbf2bf23"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "83267cd15ba0881f34b6df6314236e49"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "15784c18adae2c7296c22d614451a8eb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "aea0111dd0435c8bf24be41a8b1a80c9"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "020483b15b24e0a546b08112d5d0681e"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "09479ff5ca5ad06e06c1d2973897b7c3"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "ba91d2fea868c6a86855e2c3a0e0e680"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "f00c41aa92f2bf965389316cf5c4d167"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "8ce628e1701addae3978d07c9ef253c8"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f8098df940da9bb205abffb797df3559"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "edbfad166011e6c0dc3dde596e158dc4"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "33c1ec461ec3b5e3d263d540c34fb45f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "cccde4833856195fb0a3c792552bd825"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "47b9148f637eb94fc438a353e371286d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "90128cbe17037209429f438d792ce23b"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "932d6e07b883931788a8944559f07e64"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "9da4e45c41ebc0cbbe996c6b6ede7943"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "a595c1b6c6073eb17b230af946698fda"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "e3cf32ec6afa2a15cfd1b30912fc6f51"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c5a11dcf85a12644248f50e4cbe5eda9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8419ef7c02d767cb0beb0bda61cdf5a1"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f709077f3c69e84f1f7dda5576e09735"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "e6b399419a76dceac0febdcbf473157a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "40e287d024e5294e95f2b11232bb6e11"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "26ce0bfd6191afe65761e1e8ff5866b1"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "7cb156d7af631bfcaa6d9f7546da33b0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "04f9a436c5a110b256131e8a37b74b77"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ba125a5738f2f51ce9eae36d2143c86e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "faf84261c00b774a97ca5e20499be3d4"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "37d5a6c138843948fd700ef7993946fd"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7842e9aaba1ffdf11f4617e81f876610"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "fdb769ff15d0dbfdb51bac66c627ec51"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c5a5bcb0b911c783d4c57874737276d5"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "51b255d66f1476208d4d6cd84c7dd86a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "73be53bd19d0d36aed8f7be4551a3cd9"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a672d4e50fb8ce7afefbf10bcbbad8d8"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "243a171d42163ae938e36021e7c712c1"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "41b427afa7ac02ec17da71bc26452fa7"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "79406e3026df01843781413c45c90da4"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "44ae983a9c5a53d5756d5ae01a3b7617"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0102211f88a0eb60d4f034a94e5aecf4"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "5ad1beeaeb835683e660120c6e427aac"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "039469a3ecaf99377cdd08e83230f81b"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8acb8a2b24c4a247b91d2839a3bdfba"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "bf83d79056d243e6e958a8d799e0ce99"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "0f4b9c3a8970eced1724459b55b32623"
  },
  {
    "url": "tools/git/index.html",
    "revision": "91a7cdb80bf26c1110946186b42b1d90"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "5948149864dccaf9371b8b4c2d4d5558"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3815a05ef68d32aa8ad6d61477ea4c97"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b882f62e5f95c2563d72743acfcc9726"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9e70b8d85c6f0d3499dc2be8927b4096"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "86c861c7c0cb6a364f1f7c7cdbe4a49c"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "163d1544d24c29be231abe03965f9d4d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b3351af198512cb11ecf7d0a5a9da810"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "3c77ee9c627aa503cd42ebc69060a523"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "9236b28ecc31be911a34b5caf54b2879"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "9b689eaeb7309b5ae4c641497eb45547"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1233563dca2c5b0aedbd2e96be9c7d38"
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
