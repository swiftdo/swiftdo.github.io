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
    "revision": "12ed8cc3ebdaeafe019fa84f13dce935"
  },
  {
    "url": "about/app/index.html",
    "revision": "6598cc923df912911b08a27001e75bb6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e8c133add00fecab570dcf3c3cfcf138"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bcf0eb145f575d767195d120d3b2d6d1"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "bd9402079d748e88b743f8920e8180ef"
  },
  {
    "url": "about/index/index.html",
    "revision": "df24f41f11ec3f687894d64a14710e5d"
  },
  {
    "url": "ai/index.html",
    "revision": "8bcf73dcaf386ec5c33c74f816a3c9bf"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "618ffb31e00849a6f2397befb0965c32"
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
    "url": "assets/js/10.2e173fcd.js",
    "revision": "703fd2ac451975cd30b50f31ec6d1471"
  },
  {
    "url": "assets/js/100.88e137df.js",
    "revision": "17a315f662a33adf2212237f67c68712"
  },
  {
    "url": "assets/js/101.bf637254.js",
    "revision": "8344d55a3d0ec0bc1a26089d664ffda2"
  },
  {
    "url": "assets/js/102.7fcba690.js",
    "revision": "457c5109f871eb1135c4df7168e4dbc9"
  },
  {
    "url": "assets/js/103.424f2785.js",
    "revision": "b8dd0e221b62a390b5c4b9c631724bac"
  },
  {
    "url": "assets/js/104.844f1d11.js",
    "revision": "9e42e08da0e489ed84efcf46a86d904b"
  },
  {
    "url": "assets/js/105.fe02e78b.js",
    "revision": "8ec451f1483009cd27c23e6caabf0497"
  },
  {
    "url": "assets/js/106.0f673343.js",
    "revision": "23a85a9895babae7b87b7eee52c7775e"
  },
  {
    "url": "assets/js/107.7a8fdd72.js",
    "revision": "f9e68fb7b16fd4af7693bae3ccf43355"
  },
  {
    "url": "assets/js/108.24f25d9f.js",
    "revision": "fa8b67e33ad4802c5ba3158d90c1c7d9"
  },
  {
    "url": "assets/js/109.998895ce.js",
    "revision": "fc1dde8f4a1e21a38aaea6ac96bd2678"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.79fb808c.js",
    "revision": "ead0c99ff0cd2dcd3f38ee831b003687"
  },
  {
    "url": "assets/js/111.6e57cd3d.js",
    "revision": "92b34578f92196338d1f09b1c5ebc9b9"
  },
  {
    "url": "assets/js/112.44601da1.js",
    "revision": "5c76636a5cbbc3ced8270cec538d4c3d"
  },
  {
    "url": "assets/js/113.5da9cfb0.js",
    "revision": "a3f48ec3df99f719c6ebb641af431819"
  },
  {
    "url": "assets/js/114.24c189d8.js",
    "revision": "de9c41db8a1a40510bf00d37d0188915"
  },
  {
    "url": "assets/js/115.ce1caa26.js",
    "revision": "feafb1def7830d92308b01729276f41e"
  },
  {
    "url": "assets/js/116.2f456631.js",
    "revision": "aacce5d91164fc92b857e098184561f2"
  },
  {
    "url": "assets/js/117.38585e0a.js",
    "revision": "243b19d9976f5969185ab2cca8d8c399"
  },
  {
    "url": "assets/js/118.07751fa2.js",
    "revision": "08752850daa5620f3fd2033d25ece46c"
  },
  {
    "url": "assets/js/119.3863836d.js",
    "revision": "dd59f041251826baa1a6c2db02df00c4"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.1f196ee4.js",
    "revision": "76808792faadd9e0915ae0d424bb6601"
  },
  {
    "url": "assets/js/121.0482895f.js",
    "revision": "69820368050de4fdf77e4bcbc3bc6417"
  },
  {
    "url": "assets/js/122.fd87923e.js",
    "revision": "af40813c84eb455a30facb88ce201763"
  },
  {
    "url": "assets/js/123.73278be5.js",
    "revision": "1ba4cff35840051330565dc33c087daf"
  },
  {
    "url": "assets/js/124.11b5b838.js",
    "revision": "e08d25e39294a6b634ba64e4a5a978fe"
  },
  {
    "url": "assets/js/125.283110f6.js",
    "revision": "9ddf6f6b9fb6e1ceba3b8fedc434e54c"
  },
  {
    "url": "assets/js/126.785b8ee4.js",
    "revision": "7cfaeed6bb89d57e885b906b5ec3bdfd"
  },
  {
    "url": "assets/js/127.a20b5024.js",
    "revision": "16f2e4b24cbe8793688f36fe4623eae5"
  },
  {
    "url": "assets/js/128.28cabaab.js",
    "revision": "a11dd276f08cd98a8042cdccd4222462"
  },
  {
    "url": "assets/js/129.c38ee007.js",
    "revision": "d80074d9aa01ba053610d26cfccb58c9"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.ee654da2.js",
    "revision": "77412a969be4598794103a7e0979d009"
  },
  {
    "url": "assets/js/131.62b893f6.js",
    "revision": "f200e1bdb8303961349a4552317f9f9f"
  },
  {
    "url": "assets/js/132.8e75eb71.js",
    "revision": "ee69ca408eb7ae69b642ffa07f65824e"
  },
  {
    "url": "assets/js/133.18787dac.js",
    "revision": "0495866c5c93c1d7f1e4a64c70b0ede7"
  },
  {
    "url": "assets/js/134.d7ead2f6.js",
    "revision": "51a4fae1d3bc530d06a642cf6a7959e5"
  },
  {
    "url": "assets/js/135.cf573e65.js",
    "revision": "abaa55526008f15343da80d98cd297f2"
  },
  {
    "url": "assets/js/136.7fa0179e.js",
    "revision": "56887d4e876408a7af689776f5de3dae"
  },
  {
    "url": "assets/js/137.a7f1a086.js",
    "revision": "b002eaf90b1c147c5940f5e708acee08"
  },
  {
    "url": "assets/js/138.2170e623.js",
    "revision": "9fe2e1dc7be2422121290e6589875b4f"
  },
  {
    "url": "assets/js/139.a83e7178.js",
    "revision": "e9f1b828e3d8326cd0dab644fa2b7a81"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.441c8d58.js",
    "revision": "0a3dcf384b25e644bf0cd66c50940e47"
  },
  {
    "url": "assets/js/141.c9718b56.js",
    "revision": "eb8ba84855509b9a9b81a713d73fbb1a"
  },
  {
    "url": "assets/js/142.b7eed5e7.js",
    "revision": "a89cb4a8cf6b905fd4ffbb788613ee82"
  },
  {
    "url": "assets/js/143.6a25f664.js",
    "revision": "797e2ef108f29f8dc29128305b6c7a4c"
  },
  {
    "url": "assets/js/144.33abf787.js",
    "revision": "c5ac5dedf238c999521b9b1785e2a789"
  },
  {
    "url": "assets/js/145.1f7106f2.js",
    "revision": "2a732a0d92a999e40df446cc73fb37a1"
  },
  {
    "url": "assets/js/146.8996dcdc.js",
    "revision": "b9cbaf5581df69a930f0739747f5fc30"
  },
  {
    "url": "assets/js/147.b1965ba5.js",
    "revision": "0532b5ab04ea6a80fe66b470c40849d7"
  },
  {
    "url": "assets/js/148.25b0c1ea.js",
    "revision": "5379cfe53559a275c7b739805614425f"
  },
  {
    "url": "assets/js/149.56bab0b4.js",
    "revision": "0383fb40c11bfcfd7a9afa3eaa10c797"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.d26ed063.js",
    "revision": "3b3ded2ff432170a604c258f0cef1d62"
  },
  {
    "url": "assets/js/151.fd4a069a.js",
    "revision": "41d5261de2f44ecec751a6bdbe5fd6ae"
  },
  {
    "url": "assets/js/152.21977186.js",
    "revision": "8e486111380b251f2ee157aa5849cc48"
  },
  {
    "url": "assets/js/153.10966469.js",
    "revision": "38cc370baf80d798cbd085deba2e11a5"
  },
  {
    "url": "assets/js/154.9eabccbf.js",
    "revision": "7b086a3614ed0c33510740c46550e4b7"
  },
  {
    "url": "assets/js/155.2c879d14.js",
    "revision": "2916eb5e1adefb6cf2c7578d1d7e65a8"
  },
  {
    "url": "assets/js/156.285a8ceb.js",
    "revision": "065439b34541741c694972ff8f3c2547"
  },
  {
    "url": "assets/js/157.87834e3e.js",
    "revision": "c8e2b18058d399f785af1cf44bb9abdb"
  },
  {
    "url": "assets/js/158.a87b63ea.js",
    "revision": "0ad824582b8d4d4e3a1c0c18eab71fc4"
  },
  {
    "url": "assets/js/159.32960d56.js",
    "revision": "939e7a282ed97993d8e14e425e64e7df"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.0d31da7a.js",
    "revision": "fc056e50e35f58ccfbc7043bb4d7ae7e"
  },
  {
    "url": "assets/js/161.868855b0.js",
    "revision": "2decfe212b5259770d20da20c8fd2111"
  },
  {
    "url": "assets/js/162.03dd8176.js",
    "revision": "2298314215e96dd7d5a06fa9f357ce03"
  },
  {
    "url": "assets/js/163.a22a941b.js",
    "revision": "c71a9082ead76703073ca7d0e0c658ce"
  },
  {
    "url": "assets/js/164.cb4dbcac.js",
    "revision": "025df48f07d91444ae1958eee5777dfa"
  },
  {
    "url": "assets/js/165.d3e65c52.js",
    "revision": "6182ca659de3dc1140b3ca563ed2d53a"
  },
  {
    "url": "assets/js/166.b8e320a1.js",
    "revision": "cd7f69bfe5791d0c6aeaff8c944dece5"
  },
  {
    "url": "assets/js/167.b24091fb.js",
    "revision": "c96515f640e90e10e807e88180759472"
  },
  {
    "url": "assets/js/168.bb1a1930.js",
    "revision": "cc6cd88824729a4d91cd44dc5fdf21e7"
  },
  {
    "url": "assets/js/169.c9535878.js",
    "revision": "7aa05c5dca2159d81d7f7b102afacd27"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.1fca38e6.js",
    "revision": "d3fdc0510bf6cc51f77b9ed39e7797c8"
  },
  {
    "url": "assets/js/171.59cc941b.js",
    "revision": "74259500fd7b82b0b2731bff6607084a"
  },
  {
    "url": "assets/js/172.1936b8e6.js",
    "revision": "3d6f2c9dee501a2924bb7debf17207b5"
  },
  {
    "url": "assets/js/173.e906e0ca.js",
    "revision": "43d4f20a8090d9c5058c6c1cb64f97a2"
  },
  {
    "url": "assets/js/174.11f3b2d6.js",
    "revision": "32b6bc80aa87608597b033f74908bf70"
  },
  {
    "url": "assets/js/175.2e900bb0.js",
    "revision": "9d9f0756e22fcb9a17c6202096607151"
  },
  {
    "url": "assets/js/176.ac56425c.js",
    "revision": "91d7ba9186d340c19f7a62b5b9c27d37"
  },
  {
    "url": "assets/js/177.051794d3.js",
    "revision": "3fa9760970f5659ff3f286cf97d7b98d"
  },
  {
    "url": "assets/js/178.47801162.js",
    "revision": "00f44cfa0c45391b592dc5cb890bb8f0"
  },
  {
    "url": "assets/js/179.f996b593.js",
    "revision": "905c145f8ac1a9f1d97709f958f5daa7"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.1c3b2c48.js",
    "revision": "2f2c86723e0d0b50f40fe9e0963226bd"
  },
  {
    "url": "assets/js/181.1e92d1e7.js",
    "revision": "a67eedfdbaddddcd8a15bc352757a942"
  },
  {
    "url": "assets/js/182.82384e78.js",
    "revision": "77bd44dfc84533adab6f0634e829cd98"
  },
  {
    "url": "assets/js/183.ff6787c6.js",
    "revision": "06b1f8881a5d56e55e5c2fbe36b8643c"
  },
  {
    "url": "assets/js/184.4f1a2139.js",
    "revision": "68a9b75d043d845f97c0cd6677b56bbe"
  },
  {
    "url": "assets/js/185.3d5550d2.js",
    "revision": "7a016159ea5995c16b8cc71322e22be1"
  },
  {
    "url": "assets/js/186.5edf10a5.js",
    "revision": "397f3382bb592756b7a7fb0cefdbfa11"
  },
  {
    "url": "assets/js/187.ae4672d5.js",
    "revision": "b4429c1cd2d6bb94cfb5a0aa6e7280ba"
  },
  {
    "url": "assets/js/188.a416dc66.js",
    "revision": "a4872fb2f28764bde1f37500f805a2d6"
  },
  {
    "url": "assets/js/189.96a2f51c.js",
    "revision": "5ed0666e9d3bf8f3c0e22eaf9bfa92ea"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.fd08fa9c.js",
    "revision": "e9becdbea60b6d3fc2cbe78450c81089"
  },
  {
    "url": "assets/js/191.fcd03a1e.js",
    "revision": "d081a07d91f2075451c30d926045c9f7"
  },
  {
    "url": "assets/js/192.dcb572bd.js",
    "revision": "2dbf479e6e80f8e0e874d68de9954b7f"
  },
  {
    "url": "assets/js/193.7d011944.js",
    "revision": "a978d673f0654fd56c433cd3011add9c"
  },
  {
    "url": "assets/js/194.baeef9c4.js",
    "revision": "5694ab63e448cb103d2f061a0f76eae6"
  },
  {
    "url": "assets/js/195.76c2c87f.js",
    "revision": "e02c4f2101b01077c731e296fa2a1061"
  },
  {
    "url": "assets/js/196.3151706f.js",
    "revision": "35f1464819990ad7bd9f8343eee3d6af"
  },
  {
    "url": "assets/js/197.e2e4c0a3.js",
    "revision": "283171336265633de805a4fe90fbcab7"
  },
  {
    "url": "assets/js/198.6946df33.js",
    "revision": "54da5ba107158c665e35b08955d16d46"
  },
  {
    "url": "assets/js/199.a43c931b.js",
    "revision": "dfd07ae368b01cac8065a45a35986bf0"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.a18c3476.js",
    "revision": "4910c07d3850126c762579e598479f77"
  },
  {
    "url": "assets/js/201.fb3549d1.js",
    "revision": "79244bda7bc1ce7a93a25b4e0d0a8388"
  },
  {
    "url": "assets/js/202.69842417.js",
    "revision": "470494568f5ede1ba0db200dc53939f4"
  },
  {
    "url": "assets/js/203.98102ec0.js",
    "revision": "e7d47e7b105cd714a1a896a63c107b33"
  },
  {
    "url": "assets/js/204.4522170a.js",
    "revision": "6b49313b87a5867053a943fff34c1fea"
  },
  {
    "url": "assets/js/205.0d51a54a.js",
    "revision": "c56648bd08cb0dd7a437ba8e862be691"
  },
  {
    "url": "assets/js/206.c8425ae9.js",
    "revision": "954039a8cdfcf525c1ed6d2cae00fcf4"
  },
  {
    "url": "assets/js/207.04ddf0d1.js",
    "revision": "6479b58c70a79103a21d7933d38b87fa"
  },
  {
    "url": "assets/js/208.793144e5.js",
    "revision": "0386e351608609db3bdc2942cba04dba"
  },
  {
    "url": "assets/js/209.801438fc.js",
    "revision": "bd34e2ab54cbb66112a40c42a8d76b1f"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.b204863c.js",
    "revision": "51026288515ef1376099f95dc1b9e831"
  },
  {
    "url": "assets/js/211.02fad0df.js",
    "revision": "7099ae7251e89265fce07192ba884c39"
  },
  {
    "url": "assets/js/212.5406e824.js",
    "revision": "8e2dcf9d19b24ecb8dd050baa7cdbd86"
  },
  {
    "url": "assets/js/213.235b4afb.js",
    "revision": "d5cbbd9981bd0dec828a4c5573a4457f"
  },
  {
    "url": "assets/js/214.cb2faacc.js",
    "revision": "5f69942cc0ae26a6c927a9ed2aade88c"
  },
  {
    "url": "assets/js/215.1870e8ac.js",
    "revision": "96387237f45ffbbe0b70459ef62067b7"
  },
  {
    "url": "assets/js/216.8bde4593.js",
    "revision": "74050f27d549cfb17acbc543d555514d"
  },
  {
    "url": "assets/js/217.0aee33fc.js",
    "revision": "7e39e913cd2de2cc8b0c1115fb4466cb"
  },
  {
    "url": "assets/js/218.676b2882.js",
    "revision": "07374fa207c9ea2d086aee31f9f6c915"
  },
  {
    "url": "assets/js/219.28bba4d6.js",
    "revision": "6ad3aa1580f0687886f96ad6c066094c"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.9115702c.js",
    "revision": "506eb3e13dbe4ab41364fd408a619271"
  },
  {
    "url": "assets/js/221.4c541303.js",
    "revision": "f2f9547317e84d28de4223b8bbf620ae"
  },
  {
    "url": "assets/js/222.c72e299e.js",
    "revision": "a07bb91df79c5d89912b7b6a49961e42"
  },
  {
    "url": "assets/js/223.93646ddb.js",
    "revision": "bd5426fe3102230138fec3e2d2eec79a"
  },
  {
    "url": "assets/js/224.79c3995b.js",
    "revision": "6df5d8ef2ad2a04a14cf45db01b23fa8"
  },
  {
    "url": "assets/js/225.00d45e33.js",
    "revision": "b1c9f61d584694e593cc0b7ec3be80d8"
  },
  {
    "url": "assets/js/226.277ca10f.js",
    "revision": "52376c0c64368dae5cdcf579733b3023"
  },
  {
    "url": "assets/js/227.e041abc4.js",
    "revision": "2e373cfd6f1e7e9854a72acfd5b63a81"
  },
  {
    "url": "assets/js/228.a8fb190d.js",
    "revision": "6ee3073d932d36bb5a5ad275b6c27ae9"
  },
  {
    "url": "assets/js/229.9ec8e46e.js",
    "revision": "ec7e1c7d50320e38f6f5c10453dd8cee"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.a5123e87.js",
    "revision": "219a25605abfd0558506890ef80e20ce"
  },
  {
    "url": "assets/js/231.69266a43.js",
    "revision": "0a1f6e9482f5d850b5cd4c1d07e66b9f"
  },
  {
    "url": "assets/js/232.ac4f57eb.js",
    "revision": "889ba4b559543ea59aa1081d2a855553"
  },
  {
    "url": "assets/js/233.42a9e3df.js",
    "revision": "c55437c543101fe7c49fbbc5a1306a57"
  },
  {
    "url": "assets/js/234.a3f70843.js",
    "revision": "d51052ae09bbe20ddc7e04695c5f1fca"
  },
  {
    "url": "assets/js/235.2c52ce1c.js",
    "revision": "9d846dc571c6585f0efda94fa63fc737"
  },
  {
    "url": "assets/js/236.3d17a2c6.js",
    "revision": "b83e5818397425a431d74fd952f83d24"
  },
  {
    "url": "assets/js/237.84ea5f4f.js",
    "revision": "a3f6f0da57552344477f448d10690176"
  },
  {
    "url": "assets/js/238.df035d35.js",
    "revision": "f2b8ccf9cfc29ac701d054de990e93c8"
  },
  {
    "url": "assets/js/239.31a75804.js",
    "revision": "c8da35bd85e8a2f9dfcd7ab2d414c452"
  },
  {
    "url": "assets/js/24.f7ae0327.js",
    "revision": "9c7828de18ebb1c2858e2e8a119bf590"
  },
  {
    "url": "assets/js/240.72922f37.js",
    "revision": "5ae1b2fae7eaf47aa9ee25c14c693c7f"
  },
  {
    "url": "assets/js/241.237cfcd2.js",
    "revision": "86bbb5c2caa46d578668e6b5c8f68c79"
  },
  {
    "url": "assets/js/242.acc27102.js",
    "revision": "858d57c4d2aa8057d06fd386f563ef1d"
  },
  {
    "url": "assets/js/25.70035cb2.js",
    "revision": "0236fcd019613adbe33e6eb2cdcb42fe"
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
    "url": "assets/js/37.4629320f.js",
    "revision": "38da31c1301cd535db52162512711b58"
  },
  {
    "url": "assets/js/38.e37f0a51.js",
    "revision": "2fd13c9eeb3f3dff73c7b98b6fb93b2a"
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
    "url": "assets/js/83.c4dbc6b3.js",
    "revision": "6cb879e4bf290793a919aef451783f24"
  },
  {
    "url": "assets/js/84.dc8c7236.js",
    "revision": "ce709b1ea5efdaf2fab686db4a7eeab7"
  },
  {
    "url": "assets/js/85.f7284c91.js",
    "revision": "a06501b16821a7a7defae21615b58b14"
  },
  {
    "url": "assets/js/86.c1ca176b.js",
    "revision": "99d8809418ff0d478e5bf6269187e9d4"
  },
  {
    "url": "assets/js/87.ddbe179b.js",
    "revision": "ef0cd19d004da5546ed6c199b27fc283"
  },
  {
    "url": "assets/js/88.2073751c.js",
    "revision": "4a95c0f8fbc4c23ae633e433251853b6"
  },
  {
    "url": "assets/js/89.d3b4e071.js",
    "revision": "7e927e7fc3d233071d4dbd600956c806"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.f31fe779.js",
    "revision": "7cc8dc66758638017a36e9392d1e7ea5"
  },
  {
    "url": "assets/js/91.53a48407.js",
    "revision": "2726f91202d76270dab0a7ef34e366ae"
  },
  {
    "url": "assets/js/92.80fa4b1f.js",
    "revision": "d463bfd6282c83187799f9df031103a4"
  },
  {
    "url": "assets/js/93.eee38338.js",
    "revision": "a3b6ea696ab28017a85ef7dc51b5fa55"
  },
  {
    "url": "assets/js/94.6a911be3.js",
    "revision": "54aa5c0ba792b201ca439e916e53b3ac"
  },
  {
    "url": "assets/js/95.7fc1937f.js",
    "revision": "6bb531c01b1668e34b6e1deeff65d12f"
  },
  {
    "url": "assets/js/96.fdd3a135.js",
    "revision": "537938a3a0681e1c64a08ec72ca9552c"
  },
  {
    "url": "assets/js/97.3be485cb.js",
    "revision": "2309a8423c847be83dee13fb208ca88a"
  },
  {
    "url": "assets/js/98.ea8417b3.js",
    "revision": "b2f336f92be4b44480d832d3544f1a49"
  },
  {
    "url": "assets/js/99.c39fa795.js",
    "revision": "5e20d2c0b352667c304e218085dc0c7c"
  },
  {
    "url": "assets/js/app.72b332c5.js",
    "revision": "8958b3fbad104582d394c5564431949d"
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
    "revision": "a71721e3407b218588d6f9ae36dbdec0"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a675e4cbd9e5653e45b24c9bbb335482"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "7f4adf79dfe5e46d9030d4ac48fbb0c2"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4e939dc39b99de48e17bcbb036124270"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ed5139b5757b0578370ecdee8a354cec"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d0c2566324e80ec9a34023a8a0821ac0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3afb38a6c4b3d4a652a08da3067449a1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "72d87b0860714b867a9e8b514f9b5157"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c48a8be7e7bec54473b379a44460860c"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "5adda55542b9d2cf3733cbfbdcb33d02"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0f4f99d154e75fec9e8c7e6f7d12a7fd"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "e4a79d37a90d2e5afb719ae9b3aead6c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "98e579d80182a92555f62e80de8c2dd7"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "fa7fe5d28fc987b694d867a4b881a4be"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7e64b885048c44a6d6eff23a07450fb8"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "76c5bf3a0f9604dcccc89c55ede7aec3"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "5f4120d379fe831e3af03f4849c5633a"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "e73e4bdfe0df4db26be6768ca369d1d4"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "87386678e4711712cb609dec36e0d311"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "9bd93aee4286a34ae045b0c9c34cd963"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "2ba3904b56f34b4059b4d7c7fe05f7d1"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "0923a1c14f4621087fcde12c7d9b6118"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "06600dfff23a87c8242e402d9c7d9bc4"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "75278b883391da810de8da44c8985a96"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "3000ba4c56490e3d39df380568b05683"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "e4de59c2ac321c36539af3bec1cbc0ac"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "984fcfc0cd24a26d5c4335cb4cdc5e7e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f9710033019e947554cf33faca518758"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b92133074a08afd81214984aea0cf3c3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "915d7d18e955c664322dcb0ed7a0f43f"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "dc53f7aec43005c6569b5c355c15a239"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "326ee10604012511b70879baf76c4ae5"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "ba27c19e5a1bb20bd394739ac34905c0"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "d3364770d764f044b363ae3e77869839"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "c0d0d1527f425215f9ed45d218e31aff"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "99deafc6a792549c50b7217460e55706"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "9691cbc80d40e504c87365e2e72fd0be"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "e41c95d860638fead9d29e172823b995"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2ae9c0cd760344c73ed8c235e5e03466"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2cff5905c59eadab9854bbe36c424622"
  },
  {
    "url": "book/index.html",
    "revision": "8ab5a3b8a954e4f946cd53a0e44d77dd"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "1d3feb2e93459cdbef7f52d12ae8e694"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "652c9dc3c9bbb84af662f69c27a84a32"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "1a777cb98e1b0dfa3186278155f74b19"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b6690bb698994b479efdabd47fe777a7"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "25416a6c06e24c47056b5b150c68c7e2"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "3e561bc382eee20a3070304cfc7ed5b1"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "39ee98384a5de917b1d016f93014f3f3"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a9e2512a378196bac0b2243b422317c2"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a9e8fc2350483a3f0197983a2edf4bc3"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "0ff1e46dfdbc74c1199bbb42ccb76da1"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "306efa3d48e6e8e589273a5ecf935c56"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "d9208ccb4c753fb6d8f3ee20dd0104cf"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "59347609576123dc43510317be60653f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "3e7d86fb64459efbdfd5e17899f51109"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b8155f519b28dc737df8797152860061"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "cb16097daf3ba652973fb79428ab3ac9"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "095b9bd128db844e213309d186322fae"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "43c36271a4cffd5e49509b0fd52a7714"
  },
  {
    "url": "c/program/index.html",
    "revision": "a2f4cf4c57acdd06722543c3807c33be"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "8c75a00719b79a43123a64283d87576e"
  },
  {
    "url": "categories/index.html",
    "revision": "c3844952eff9b26f1f88d3165fe03a16"
  },
  {
    "url": "figma/index.html",
    "revision": "15b291cbbb2417f80f41633f7364cdfc"
  },
  {
    "url": "flutter/index.html",
    "revision": "4e78191c73099c4b66e2ceebc7d41c0f"
  },
  {
    "url": "flutter/point.html",
    "revision": "45008e96b168c23a025c62da69a00734"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "220d23c297ecfba7b1ffbbb336ff02cd"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "b708d0703e71f00194954bbd4ee649e9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "419c539bd05681f0082d8914ff598498"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "483ad3ecbba9e62c68f73e5a86fed6eb"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "e27c236b60875414a3084f9c23b2aa4a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e3f602326a9c3cfc00b349fa56176a27"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8b93d2b7b144f3c2eaa5f13a3935abca"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "fe452922ba5926e5eb6d57f6680986fa"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "27e6680f0f93f2211927b79813c43d17"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d49bc4a54f68f14f03513a68ce9a2461"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c4605fb33dbf9ebeb8a7b6bf236da36f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9fde86d26a7da8688e543a8917518a55"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "54116fb7da9b5131d1ee50bacb538578"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "9654cd498e7636be097c0a9176ab58ee"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f74145c4cf4c22766f30b84c3df01d40"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "2cdde8bc04e89302e7ec9012191730b5"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a2a62dfecc55d3674cf09e33c6d9f6bb"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c31898ec85599a4c206a0381e169e9a4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "a223832ebec75e4965b2f822ea0e15e4"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d80241204d0e23f9e02492cc1ca0a46c"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "18835562caa917f51dfe83efd9fb5c5b"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f36c494f05e9a59b497685b320b88a55"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "676f084996fff65c38f0613ef4154320"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "4cf0ba8f9c44d1f33df6e0c1df430541"
  },
  {
    "url": "haskell/index.html",
    "revision": "3e2b9ad0a5b647105e03a9007fcaba1b"
  },
  {
    "url": "index.html",
    "revision": "49ca4724f1521cd59b4c2a50dc0dc223"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "c22eb9f819dd353262e9f4ae186c0594"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "a727d55bcb99d7b59820c14cfa0e2d57"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "7f9fb427179b34839abda89c8ca242b4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d17f35297311db862906897d7c8161b0"
  },
  {
    "url": "python/index.html",
    "revision": "c49754a06fa020531a45654162a5f486"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c3602b842c1475b27099c635ffaf6706"
  },
  {
    "url": "swift/better/available.html",
    "revision": "96d7bdb6d645e24b180c91f5f4894b83"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "d0ce9291094f21b241b0a3da95f93e60"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "2ffc18b9413d1e9c9c409b2d9b400716"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ae3edf06e29c823c56be5e8ecc8e3542"
  },
  {
    "url": "swift/better/di.html",
    "revision": "57bad7b8766ba74389fe61b73000f9e8"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c5c492230182f22d5bf49576b84e8ca3"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9cd4a65ad991289ecc32a2ef623e5cbb"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "918e1b095a9407eed8917601e65f908d"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b7d6378e232cb88b68f70b1764e39814"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "e12a12511a45bbba86fb1290f493f99f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6c7088da64e93aed516216e5f6d25be8"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "8d7a8dec9e6c7676b2ee912e3176a207"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "496ab45d28f6c2f305c401876f96272a"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "342a9829bc1343f2e1140c0c42124165"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6555084fb3d7b4c95336eab3363c41eb"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7e5bbef2711815dfb315c2a0957efca0"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "9954f261630b08cfeca95ccc32ed9e9b"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "2ae7506169112b00ad6a922e1058f84e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "749164d65f645919f4970b2131370fd4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ced4b8f3bb9503240cb2285ee16ad46b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "12821a2a2e8e5841adb8165480901b31"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "767915e035cebc06c50181743ebb5a61"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "0a40784042f1b81b6d863948c2239bd9"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e7a991c2f36310da636d197e28ae0cb0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "780deb146dbe216e0294cbb7b0789df7"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "abf4c6ac8af475591bcf5545b4b22f14"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e4fb55baf734ddf06d633bcd68129c93"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b0a367ba6a897ef47025817f4d2d8991"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d0ea942977f954f88853239e20c6434e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "2599dc76b8dcb84de1a6fa790706845c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9333366e3c7d2b619258012d02aad61a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2d769bc99deecd00fb48b320d756f063"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b81633f63473b0ceea05e40124344c24"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "50c19303bd7ed7e0371efc427a6a4112"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c640222ad786144bf066c6a7bda29a8a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "ff2982c82828370fc3f837d7d6084744"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "71797785dda6666b6b29eef1d27489b4"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "81348a494ce371ede1ee3eb7fe7a9d43"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c2a968402708b4f745b03aedea0c78b0"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e3170f8754afc1eb71bf18700254757a"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "6d76ac55dc0f40457a8e36957fc63e48"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "5f8cac17de8dd4e64dfc3dbf7fd5a8b4"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "632b205cabb962da439c1e348d0fe7ec"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b5e4393680be263efdbfeb82fe435049"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "db4665070d61cc74865e4045d8e7fdef"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "6e07f6f38e4f5bc6a16ebfef8354bf24"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "5d0d4836fad857b9b9e769ee6e844785"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f47cbfe4271f00eaa6ba9ef32bb71696"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "9dfa6c430737e47be274547079b31569"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "77f48c5a17ccddd86bfbd74e3819c3bc"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8ebc058d147b7001afae3dd5bd94d939"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "4465e6e6418cf9b1a3c26aa4f0432904"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "98e862755d5efbb2a122e7e834a500e9"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "753e0a0e67e289da2289c1019e4385a4"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "a0b07921e882f9f391927939a1bdd2b4"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "d57355095f974027a3ddfae3d8103c72"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "425e7b1e6ba39af21f1bf2adfa01f0dc"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "f4e34a76e01117ae99f7216cf5dbc7f8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4306dbc5dc91a9ac51f8021cd0117712"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "607a8df971b611848a9dfd626206af8d"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "1722b23456512d4d399b7ee6bbbdcdcd"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "cd427ce339ca2da09866e40816ed1870"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "5cc625ed3c5eb0db817c4823f3187426"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "3e9791f16c3f64013f8b5943dfc432bb"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b85a9cdb4019cfbd4600d814a304e1e7"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "9567584c60adc1c9409acc11ded85761"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "ff72819bde16dd1c600a42dff61daff4"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "69244f5f2d9df446883ac6663621b14a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "aa0a49381f8d74bd0b1e22e0f7e5142c"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8d576b26987ab41b0b7f62e21528bed7"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b903a89710ac277c8a19c5b3c1f6204c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "f15ec564d4928573f142304cf5321057"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "595171c215e7dfe39b86656219c8bf47"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "00791655e20dbfa3635e4d7ac81b7041"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "78b12c9db1068e2264b2bf71664e248d"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "017ffcfd37df5f507604e4c350f6ccf8"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "cd4aee6a71684cdc80beaac1a20aea8d"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f4e1a399ae9cd355f851cab50c1f1947"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7318dc0ff62823ad1568ae5a3cf1e298"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "5f22da2de13063512f2b2b55bd8b7a65"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "b526d3cbc49cad8559127c32bfdc4930"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "353444fc7be0cae8e56009c01bad4d4e"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "62d7fbc9342287c790f91a5020aca9c1"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "730181bc63f2faba7583a39921f0ffe6"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "2e0eb8e31a9823a24cbf8e2492bd8920"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "cadb33145b953a3673a9d129e9f94dc4"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "408d1a5d61ef06e2240de690ea911213"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "dee87c9e6c33f9ced811e72883d88432"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "db1bffb4755dbdc05c1a32a2eb3959e0"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "c75a07773beeb9c78ec9564281045237"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "617e7b6156415e139b1f9dfbb5fb28af"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "df618469bbf89fde1dd792664159a54d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "19f34ae492d74a938cfed7a94a14e950"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "8a37c81ee19c6be9bd7f9c808733a701"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "6e2568d10bf96419e4ff6715bc3e3d3e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "53f7a058f1042de622779eaa67c46cd5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "bee7d767c2a5b3ff53c91fa78577030d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "4fbae487a790a3cc66ab632710f040d3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "66d4d884af4875d46f0554ee2964cc45"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "91ba791a1ed612c31616b68b89568918"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "662a40e587fc12b2d06fc0ae22383bb4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "cf4614edb3c20f8ad9f72fac30666f5c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c8d1578d8da7338e01d50ffd52db6a0e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "13b9f87ccc91c5b65a2febcaa536c20b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fa3c0bc165c836d1a623257ff42378cd"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d9488fab3d9214507158dc0fc382d8cc"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "cac6a7ec141973c22619765faaa02549"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "99a4a3b84f9ad0217e6b64dd10905ba2"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "ad33870340826263727fc79998890276"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ef6961ccc7deb506db5d73edf32c70cd"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c93fefcba79caeb3e3c59128a476c5f4"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d6586bff30f79e5513e3322009f57b59"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "3fe724665c6a42fa59af18036ed5b8a8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "6400cc412ac6377db620ab5f624adf30"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "f047eb1fe06d685d4c3d4f527d7320fb"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "a7b8d911ff18e67b67b6db88bce05e18"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "422e0aec2984ba83bc9e04621dc38c9c"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "1e3cbb122f38c095a315d3d28fa0a4c6"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "1e393fff7d6ed4742e9ab4bb30dccbc7"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "98265f42b7564cbfe9fde79baae9cad3"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "15a6b9d4af7928f79b46e06ef04fe74b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "59d556ec9cd9ee144240ecb592575dc2"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b1fae7b3ebe8a50af2e1d73f4646642b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d3921cfe635c666e8148d767bfa44cc9"
  },
  {
    "url": "tag/index.html",
    "revision": "c408410e322c306fbac0fe46b4a5e2ec"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5ac6a9170e0c6f88270ea6de1d73006d"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3df2431815bc64b4170a81eacac8f1da"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "ad85dffeffcc00b7e77999c86687a417"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "31fcad43e8ae3b3464b7c29d674aebde"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "bad311eb53ea7757892a0bb2a5d849d5"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7494e54dcdd0f3e8d896ccfcb51ef146"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "12f492265d4f7622b45680887e173a47"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "b823671955df40547b3cf1c08009bfa0"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "7bcbeb0b346f937f7bb646b88e1c451f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "1d5a89f2e4baa36540eb593f799afef0"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "0e09743c45bd7df3af939a0b9b277754"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "e7d3e7fcb2f572d4e1fbb0cd29e073fc"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ee17062a538d0b0995383ea9d012a0ff"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e84f8fe5f0ac8f4b7122b537995ad8c3"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "a633a9375bff524aa8b73a645c247cac"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "7b881d86df21292f9c8e8da8d3a4f514"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "1fd86051eb84672f5606dad09bf51f7f"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "12c2d654d8570dd4f9187ac94a7a0cd6"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "805c05198cbaf96eda190c95961ab8a4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7d5813f6e58fd0ef627b39f3d20fe69c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "5da2552cc54a8efb1f3ffc9bbbc2edf0"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "629bb5b970565bfe0d44bb004cac51ac"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "08b4f1eaf891c9018bd22b7bb9f59564"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "167b4e62ffed9bf20168d3ae220d3c69"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "2a03b8c0e0e0260b96032e129128cb0c"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "fb39f079a80a09f442b7bd1dd00c4846"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "452e94e7f352e096cb39a0021432bd14"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "f8f6d2332dd26a08fc457b72e4d1f53b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "31a5448a6ef16ce3b71bfe1a71819a20"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d62287ce100f1cea16aa4136a4935bb9"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0b3025be37d5cbdc1a8d4d6bc7992a00"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "ca16e44d9605fd9cc06b2e06e667f25f"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "07e48041f5a5b486d8738d3f55b4dc02"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "a81f352d473cbeadd68f95fb80eeb3b8"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "393c7d593cdf6f15f43c9e5b55455833"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "9161df329d7bbd377f3b3c53439c3726"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "b441d8d561469b0c86299240a59c00a2"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "cca2f8f3ab646cfa6aadf8242ce30779"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "4f10752232ea6f5d1859484253f74fcc"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "99bd5e7042af96d2b18bf5f21aa42de3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "16e85af7d45b3ae11ed734cd64885d43"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e2e5fd462a27832466b31c69e165f263"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "44e5d540cb6226681ab1726de9505f1b"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "5878441cfc018be0b04120ae7ae41f16"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1223b06b1f14d93d7cd8367ce8325aad"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9f096168f6c55526781c404776d6ff7e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c02189fc769119b3a3a87d11f0b85feb"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ca44a5f12ffa3053b01831a3944962a3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9ac5c7589635eb0b8f3e2ca013132e5b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e2976eb7ef814249be62bcd2431b3409"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "056231a62101fba7282ef35ec843015f"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "a5b07c2739ea6c84f76ed990947276b2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "f315e6d73046c22308272aa5427b2aa5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "662cc7e2a489279bb2d5b3ba12902462"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e6e9e745231785cf9e2dafed81951b4e"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "e30a1b025f2fc2371b4a0661bb2d4133"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a71948fc1d9f118b9e784e6c1ba580e3"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "5a98eae578f282696af80939bea68871"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4f1266697ba7eeadece4a4c91f7883b"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "7cf39576b0ce9d4f57528853aabddfd1"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "0ffc04b3b07e3efa94b660fe1d29c8e4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "520a32126258105bd72eda814463526c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "cf13a51b1e3df8b3405ad6069b0d86a5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ab433ba8f9c0cdb42aabcdcbc185525f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "9d4d3b476eba558b3513db95729c1046"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "792b0267988b5cb9c7f1caed3e72c131"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c57fdf4244921b4358b9e19eb85e9dba"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d6a0209d9877e6439fb3134f95bb5166"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "8baaef40b4ae6f2468c22088c95e7b58"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7794968663767afdb01d8bd28fc1e6dc"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "17992fcbf917cc1c64e1f3261f3a8954"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "0921ae3c52ef3ae75b6e5fb79768d45f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e8a5d64ed01f904b083cbcc1cbba5dbb"
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
