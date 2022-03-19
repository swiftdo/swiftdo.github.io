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
    "revision": "a68068f6fa502fcc42864312a3cd3d30"
  },
  {
    "url": "about/app/index.html",
    "revision": "cb0b72ba7aab1a1faf1f7c146aff656e"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "59b9698194cfc63ceee1b42ac6d77bbf"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "13a0298760b65b02fb5ed87a499125d9"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "2bb9f16272986c9990ddaafede063d3e"
  },
  {
    "url": "about/index/index.html",
    "revision": "e31dfdc9f7f886f7f8d7cda88295208d"
  },
  {
    "url": "ai/index.html",
    "revision": "25c3fc29a07d8ebb27272e0870ca92f1"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "9f98b06bee108f722e695c2dcde1e195"
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
    "url": "assets/js/10.48dfdc69.js",
    "revision": "99d5faf0a1cd0eac4b8567664234960d"
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
    "url": "assets/js/118.d7e6e667.js",
    "revision": "eb2c0e881fa06adc74912d56907a8925"
  },
  {
    "url": "assets/js/119.4a4d1214.js",
    "revision": "231deccb8763d20e80b02c5b8bd6e869"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.e1f5a860.js",
    "revision": "b566a60ff8bfe013d1ecc0b79b4fa93e"
  },
  {
    "url": "assets/js/121.6f0a0efa.js",
    "revision": "a8ba4304fe206cc6aff9b4a5319a2d75"
  },
  {
    "url": "assets/js/122.6983bdd2.js",
    "revision": "68e927cc327b0ce1b872d6d91cac6165"
  },
  {
    "url": "assets/js/123.48ea26ab.js",
    "revision": "80e9bb9592077999f0545799b5c0b165"
  },
  {
    "url": "assets/js/124.1456477c.js",
    "revision": "9795f0f7537f5fa5e66d637abd4c9c32"
  },
  {
    "url": "assets/js/125.6bc05738.js",
    "revision": "a6a03cf6e9de2b42ffc68a912c6f3518"
  },
  {
    "url": "assets/js/126.81b3936d.js",
    "revision": "5cd4ae3e78d422179a98831f83993b01"
  },
  {
    "url": "assets/js/127.bb583d06.js",
    "revision": "578cf9a5421bdb501f8638011713166d"
  },
  {
    "url": "assets/js/128.042a7b75.js",
    "revision": "5dbd4ee090eedb4a218127cee29e5893"
  },
  {
    "url": "assets/js/129.c1afd6b8.js",
    "revision": "19b29383a947f54225bfef813d35237a"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.2916bf04.js",
    "revision": "473799a5b4393a07fab076fbfc145796"
  },
  {
    "url": "assets/js/131.7c62c220.js",
    "revision": "2be90f6eda6f02be9662318e3689ae1f"
  },
  {
    "url": "assets/js/132.d283636f.js",
    "revision": "4bc799d9145517f4bbbbc52cd28e6dbd"
  },
  {
    "url": "assets/js/133.d7efefed.js",
    "revision": "5a814a2384d07520c09ac309fda2541f"
  },
  {
    "url": "assets/js/134.007601eb.js",
    "revision": "e256368a7c11a4f57e4c75b57360e316"
  },
  {
    "url": "assets/js/135.e2ade343.js",
    "revision": "f304105401dd838557563c2499e187ca"
  },
  {
    "url": "assets/js/136.df7e3e35.js",
    "revision": "88f21091eae8a8826e1d89a00f2b20a8"
  },
  {
    "url": "assets/js/137.7d3302f3.js",
    "revision": "a00e7f36fb7472e5bca20f326e84ca6a"
  },
  {
    "url": "assets/js/138.561bae4f.js",
    "revision": "2f8e2617cffac93f8ae3f7b751927a9f"
  },
  {
    "url": "assets/js/139.1c8e4ca3.js",
    "revision": "645b7f3044ecfb36a9c5408496d775af"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.081a4217.js",
    "revision": "970416e78165140fa7a28040697195be"
  },
  {
    "url": "assets/js/141.95385874.js",
    "revision": "5d8590bebf3330bf1402515334f515ef"
  },
  {
    "url": "assets/js/142.cbf17a1c.js",
    "revision": "9115b325a6890282ce41341083340d5a"
  },
  {
    "url": "assets/js/143.49f084bc.js",
    "revision": "fe2158ac5731bc757b5952c1fa49df75"
  },
  {
    "url": "assets/js/144.ae555356.js",
    "revision": "a6e123094d508e68ad05cb7dbe93e62c"
  },
  {
    "url": "assets/js/145.5ce1a733.js",
    "revision": "a91802faeb93ad4155fdde3961bb86c3"
  },
  {
    "url": "assets/js/146.7060c4f5.js",
    "revision": "bbe927db5578e9a8c4e9a021f0a2f2b0"
  },
  {
    "url": "assets/js/147.59f887e6.js",
    "revision": "ea772c9f0689b6923b7dbb426ee1d26f"
  },
  {
    "url": "assets/js/148.0c0c877a.js",
    "revision": "185c1927245bf02ad111dcb1b4f3bf63"
  },
  {
    "url": "assets/js/149.003e6b9f.js",
    "revision": "b50ba709313b2bb45eef84a784e32b94"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.3d3ac3a8.js",
    "revision": "8285d98f3ce5a7360ffb5efeed6b120f"
  },
  {
    "url": "assets/js/151.6af48f08.js",
    "revision": "2b6aaf695e172d85e6791cd1d3a19ac2"
  },
  {
    "url": "assets/js/152.f2687dbb.js",
    "revision": "2db9c4911523645cd74c85b4476c6cab"
  },
  {
    "url": "assets/js/153.e1a95635.js",
    "revision": "3487a4d395b623d635f8e0940157b005"
  },
  {
    "url": "assets/js/154.ed15adca.js",
    "revision": "01c4a666b2d6193912a0b6ed4b2ee367"
  },
  {
    "url": "assets/js/155.a0642621.js",
    "revision": "bb52e54aee12da6ba4ffd222119df7f8"
  },
  {
    "url": "assets/js/156.5401ef4b.js",
    "revision": "fce1d0660a557db1745cecece39b6c73"
  },
  {
    "url": "assets/js/157.d5b0cf48.js",
    "revision": "98f4cb8259a7029d6e642f9fbf369a86"
  },
  {
    "url": "assets/js/158.d32a22e7.js",
    "revision": "cce2cc1ae29deb48a9652c072deb3a17"
  },
  {
    "url": "assets/js/159.8e3ff37a.js",
    "revision": "4f220faf558f023cc8b73068ff194b97"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.6de759a1.js",
    "revision": "61c38ae3906c1e71da75bd1a9b70c862"
  },
  {
    "url": "assets/js/161.1f5046b1.js",
    "revision": "93519217d80053b350021b0473e3af96"
  },
  {
    "url": "assets/js/162.0ec481df.js",
    "revision": "def6b7f510480198141c52d4422638f7"
  },
  {
    "url": "assets/js/163.682ff8c0.js",
    "revision": "c8af1c2d7e244ebf452d59b6d82c8e7b"
  },
  {
    "url": "assets/js/164.d0fda7d6.js",
    "revision": "c8299a24d7d7d86720c987a8cb9bdc8a"
  },
  {
    "url": "assets/js/165.a0bfba81.js",
    "revision": "0e7cb52c6a1068f39053faee1f3ac967"
  },
  {
    "url": "assets/js/166.0e81ff9d.js",
    "revision": "4367f682ade937615f5b9f76a693139f"
  },
  {
    "url": "assets/js/167.6e57a5b7.js",
    "revision": "d6e2f39b0303de67672c1f195e4a14c4"
  },
  {
    "url": "assets/js/168.e93b3fe3.js",
    "revision": "b1f09c247df70ec440e11e95a0764868"
  },
  {
    "url": "assets/js/169.e02960c4.js",
    "revision": "a00cdacc5d21b88acd4422abb823501c"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.e899cf72.js",
    "revision": "2d5b473e8a3867725a93de6eb03e02ea"
  },
  {
    "url": "assets/js/171.a0a237a8.js",
    "revision": "0608792cfbf2e610cf4c7b2ae0d4a9ea"
  },
  {
    "url": "assets/js/172.111052f8.js",
    "revision": "4594a4f94bc4151830c6f80a5c714e59"
  },
  {
    "url": "assets/js/173.3dc2040e.js",
    "revision": "2ef7b8da2a2d89ca90903df0aa2a2f29"
  },
  {
    "url": "assets/js/174.eaf62463.js",
    "revision": "a159e956db7ac1520a2bc0b8247b8ece"
  },
  {
    "url": "assets/js/175.73d8b637.js",
    "revision": "61d699cb2f2910242f3e33c5309dabbf"
  },
  {
    "url": "assets/js/176.d4d06fa6.js",
    "revision": "3b29d3562eb70c6fa43a472e71364f40"
  },
  {
    "url": "assets/js/177.c1382f62.js",
    "revision": "e6e8b0151cda54f6d30ac702b58bbee3"
  },
  {
    "url": "assets/js/178.827e7e83.js",
    "revision": "cf6d3c04025f82065f8d7fa8e11090a9"
  },
  {
    "url": "assets/js/179.0323305c.js",
    "revision": "848e1116ed537232c29a0f3823bca034"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.485f17bd.js",
    "revision": "12cf6998f51d00cfda33d011198fa6cd"
  },
  {
    "url": "assets/js/181.644fe988.js",
    "revision": "1cb1c76cf23b0d548dd8b93b1bf37969"
  },
  {
    "url": "assets/js/182.a0adee80.js",
    "revision": "51aa37751fb173eeaf9e8c1b2feb032b"
  },
  {
    "url": "assets/js/183.e62704ed.js",
    "revision": "381a8a8503de02404f9aa15fc95825ee"
  },
  {
    "url": "assets/js/184.aee5a3b4.js",
    "revision": "43b02e960bcb06feb1b448057180eb24"
  },
  {
    "url": "assets/js/185.3f4db084.js",
    "revision": "9c950ebc1d93c84e76fa96ec0238831f"
  },
  {
    "url": "assets/js/186.93a29616.js",
    "revision": "e3323ca0da69792b2e610f08a1fd994b"
  },
  {
    "url": "assets/js/187.77cc599b.js",
    "revision": "66bb66e65b8bb833f9f5dc2352e063ea"
  },
  {
    "url": "assets/js/188.f53b8b1c.js",
    "revision": "b85b6b7aa66ed9219256da91b9ef4197"
  },
  {
    "url": "assets/js/189.53172471.js",
    "revision": "e770ecfee27dcdc40cffd18a7441f879"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.f4524efb.js",
    "revision": "138853dc7d290ce350677159805648e7"
  },
  {
    "url": "assets/js/191.61354665.js",
    "revision": "e26a1038609556117ce42dba7d5ebbf4"
  },
  {
    "url": "assets/js/192.a43ee676.js",
    "revision": "a8e42e2575c11aeb7e4482eac9716bad"
  },
  {
    "url": "assets/js/193.fbc89041.js",
    "revision": "3a40c0145fab0971168399fd6d0984ef"
  },
  {
    "url": "assets/js/194.74a5c824.js",
    "revision": "a7f3e38af0343535fe2572086c77ce8f"
  },
  {
    "url": "assets/js/195.51373edb.js",
    "revision": "82ec1929c8b6cf3a831db15a617c6be8"
  },
  {
    "url": "assets/js/196.2656f46d.js",
    "revision": "697b98f6650ea93a49089337cd1a2fe4"
  },
  {
    "url": "assets/js/197.80be37fa.js",
    "revision": "3ba8aec921a9a5f1dc136eee4a62f8b9"
  },
  {
    "url": "assets/js/198.c860f3f2.js",
    "revision": "f1c362bd09db71d41cace23c4ff3cc98"
  },
  {
    "url": "assets/js/199.1c6d212d.js",
    "revision": "718a4e4a06bde8ecb7908ed7060b175b"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.36c584ee.js",
    "revision": "ccc1b395d850fcf4c662d2942584450c"
  },
  {
    "url": "assets/js/201.096300f9.js",
    "revision": "56bc7ab585b8d66c0c98aabdfd02c2cf"
  },
  {
    "url": "assets/js/202.95431a3e.js",
    "revision": "d88d3bda42bf9df5bf71eed80a4403c7"
  },
  {
    "url": "assets/js/203.06ae95b4.js",
    "revision": "7c85e9b597aa7cb4ce26ee59a377b191"
  },
  {
    "url": "assets/js/204.74f11e60.js",
    "revision": "12d0ed5f933a9d07c814e794b86b733e"
  },
  {
    "url": "assets/js/205.dfe8d93e.js",
    "revision": "07ea4fd37a1e06c538a244489fa317d2"
  },
  {
    "url": "assets/js/206.8ff49bd6.js",
    "revision": "21d113c663bed791c45a7a0b124e9534"
  },
  {
    "url": "assets/js/207.dece4e2b.js",
    "revision": "4f85cb5a10463b2c6bd358113084f67e"
  },
  {
    "url": "assets/js/208.1149b0d3.js",
    "revision": "4adafe5564f4fc1d0679e0aea7503b51"
  },
  {
    "url": "assets/js/209.cef518cb.js",
    "revision": "f139db4c50af5aba42328f2ca8907a1f"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.ed505be5.js",
    "revision": "ab5ffba528ab3a8ab50dce950d6c1c3c"
  },
  {
    "url": "assets/js/211.7507d38d.js",
    "revision": "b78a462001ee46f58133f1966960965f"
  },
  {
    "url": "assets/js/212.0742d914.js",
    "revision": "18b09b4a5fe01c66878613e97f8303eb"
  },
  {
    "url": "assets/js/213.be5e64b3.js",
    "revision": "ecfa4126daaa00dff605f79151c925c9"
  },
  {
    "url": "assets/js/214.331188b3.js",
    "revision": "e4bc6b43e55066b18bf8b12b1be5b99d"
  },
  {
    "url": "assets/js/215.fb4324fa.js",
    "revision": "b7150d2a6e857cfcc5e5bdd263a5ab24"
  },
  {
    "url": "assets/js/216.1ba215b6.js",
    "revision": "9c22093b54e9e467956d705a82ae1ad2"
  },
  {
    "url": "assets/js/217.85703661.js",
    "revision": "c290ff72e20e6b0955c631aa69ffb769"
  },
  {
    "url": "assets/js/218.6685ca6c.js",
    "revision": "c2a4b218405bb8f05808bf3704db7022"
  },
  {
    "url": "assets/js/219.70979b18.js",
    "revision": "b632b7260bbc851aed694ee2d968daa5"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.6803c934.js",
    "revision": "2d3b5aca24b856c7b6bd89782eeec388"
  },
  {
    "url": "assets/js/221.86e647f1.js",
    "revision": "9403b363e7f5895453ca3c6a91dd7cf7"
  },
  {
    "url": "assets/js/222.891a0816.js",
    "revision": "c82eefe9e8bb266fe6d293dcac7afe23"
  },
  {
    "url": "assets/js/223.b375d98e.js",
    "revision": "1c453a369c1d39f770a485944c433b6e"
  },
  {
    "url": "assets/js/224.c9de6292.js",
    "revision": "b1e5e563d2b4651b65b4ed7e9b9be939"
  },
  {
    "url": "assets/js/225.257993ef.js",
    "revision": "2c06914558cb7d07815da5181cddb1f4"
  },
  {
    "url": "assets/js/226.4ed44477.js",
    "revision": "407bc4c60ecc40aa936aa85f259e594c"
  },
  {
    "url": "assets/js/227.30dd2b98.js",
    "revision": "02b52de53242a2e766b4a8f56a840728"
  },
  {
    "url": "assets/js/228.6363af45.js",
    "revision": "2edc72d6eaa50923adfbae3546b87936"
  },
  {
    "url": "assets/js/229.adec9c53.js",
    "revision": "2098ba260086f0cf268e6ef66b458ea1"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.7c5d0bd3.js",
    "revision": "e286e4259b98545f60ecac3cabceba7f"
  },
  {
    "url": "assets/js/231.5cf2d9dd.js",
    "revision": "3b891a6af596a24005328121f47aa980"
  },
  {
    "url": "assets/js/232.4b75800c.js",
    "revision": "0df9f583842b0882eac60646fa87cdc9"
  },
  {
    "url": "assets/js/233.80dab2c8.js",
    "revision": "222221987f39e575881ca0f28cf95ce9"
  },
  {
    "url": "assets/js/234.6456c0fb.js",
    "revision": "b82736b434000fd059db2ec5e4a18494"
  },
  {
    "url": "assets/js/235.9d4ae0b6.js",
    "revision": "a35cae520bdb6f822e51c40c6ed99d05"
  },
  {
    "url": "assets/js/236.28f386d3.js",
    "revision": "9f9ea33b10acbf45ed7b08738cac0f19"
  },
  {
    "url": "assets/js/237.b90581b7.js",
    "revision": "f9119fa5634c01904b2e9857856c062c"
  },
  {
    "url": "assets/js/238.110c4a29.js",
    "revision": "1b8fc8c23d8cefea5ea77ed03a826929"
  },
  {
    "url": "assets/js/239.6a71c641.js",
    "revision": "dbc8168d1479996cc81940370e1d28f7"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.3543e84e.js",
    "revision": "c056343e3a73edb5e8de2776e70218f7"
  },
  {
    "url": "assets/js/241.f5478647.js",
    "revision": "3fca8616279f56d5bc30de57a1dd98fd"
  },
  {
    "url": "assets/js/242.6fca4ffa.js",
    "revision": "7e80a9a102eb15e04f59b06faed9b554"
  },
  {
    "url": "assets/js/243.d76932a1.js",
    "revision": "22f4a53ee44796dfaf9c0ea345d639ca"
  },
  {
    "url": "assets/js/244.827d444e.js",
    "revision": "90f47876113c717f0019550e6ad203ee"
  },
  {
    "url": "assets/js/245.45e57b45.js",
    "revision": "d69036d25f527a78c6f00d1e5b90bc03"
  },
  {
    "url": "assets/js/246.af2d182a.js",
    "revision": "827e07563584f0a0379a2c527ad3e71a"
  },
  {
    "url": "assets/js/247.48506289.js",
    "revision": "39987bd1e26427980225715dc1c5e763"
  },
  {
    "url": "assets/js/248.ec737661.js",
    "revision": "5b9424c747f1148b03481a060f8367a9"
  },
  {
    "url": "assets/js/249.6bd26b76.js",
    "revision": "cef917650d0e667850c6903e2ed5fce7"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.0236d9dc.js",
    "revision": "7d771c550217fb4aee836180b2c79b3c"
  },
  {
    "url": "assets/js/251.e1b690c9.js",
    "revision": "eb61c6f1fd2452d88533d9ace08e4af8"
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
    "url": "assets/js/app.506c2cb8.js",
    "revision": "d245700fadaa2d68e8085848951ee196"
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
    "revision": "aa1d36995db6b9c9f2fb6e30fe30c5c3"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6e2275694f7222493009040b804be966"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "10e5d77476b34bad3c6178c0ffe1ab31"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "95cd8665529d037aa7b24f7f6ca3a228"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "8013b34777f549767d89ddd692d46ec5"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f4b0449ca94b19b3f3b1b6cd0cdc9c30"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "811f8f6fddae8b6ac7e098489bd9447a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "53668d64b1e284e683810d6f051cf009"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f177a2ad464f3d5f9222b6d3e337afbe"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "24dd7e9f56f1aec9029210bbb35e3fde"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d8dec075009086a81a025d53a985cad6"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1a46a962a212ebcfb5572363da948e2a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "e12df02758059a4d98e256c421a1ea9a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "a633ffba0f7d24b004c9db3089c803d1"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "62b55d2108c0a47e3a4deabce53f0c9c"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "e1005dba6796794e0b01d97685d1d6ea"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "179b14084c1cd55d499c7bb242932ad0"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "92e475b1bdaa2772f032caa1f8e2557c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "13c7c002bde9ab407a50930ff8527a0b"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "e588f09e634fb00521ac100517eeb491"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "633e5cd33f072e72ba3713c78b2ff8ae"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "f6c645ee5e7d8178e9817334b59ad685"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ea9f24e44f6bc0eb5382c17f8d3fed91"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "cc97bb395c5ffc50cc23babc468403ad"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "d58ff9aa119df1fa90d275d17576a723"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "99136e34bd63da0e027b888af5104313"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "6fac447e6d7bd800e9fb5efd9074f1dd"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "9dfe7909dcc3aaa7c6dbea3b4dffb463"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "c55b1aa3337bce4e81d1781b322a6fc3"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "fbd5f60556bb256056cc29944abbd13c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "ca9bc2cf16209a529d3c403b60eef903"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "2a8dd7dc6e73f10ce2a9aa617ea38b50"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d8270b60452ba57872e5625c87e16f0a"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "f221e7ffa7aeb2bdbddbe2498eea001d"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "bfe8d779c4a9717ab9bd314028c2ce00"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "71c3bd4f597ae2f1cf7aafaff17ce664"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "1f8bebc992929450686a40407876545e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "70b7ced342045a62cf820042a1e83348"
  },
  {
    "url": "basis/index/index.html",
    "revision": "78f4f2d4e56bbd54dbe2ca9eaf1b8534"
  },
  {
    "url": "basis/os/index.html",
    "revision": "351915b75c15a449b330c2b2323e7a14"
  },
  {
    "url": "book/index.html",
    "revision": "198dea58cb061734c45f76b2e5441469"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4f86a3f20f2d309efa5712634a8927d3"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "11cc26e90fb518e15cebbfb788b46e04"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "4d772974da523c87584e355113b057f5"
  },
  {
    "url": "c/audio/index.html",
    "revision": "5282a450bbbc85f56a4081c7caea78cc"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "96576529479f18a203aacd4fb497b2e0"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "2c6ca6414c0fbd839a115623d8711c4b"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "42bf1af531128efeeca5ce59898082e2"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "df8420f8eb996f71c72146721d7976f1"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "7c5d77e1a4f4a483456426dbe95b6a04"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "3809a77b1e54ee5886befa45597fb941"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "464e45e440c664be12395bc2e98f6326"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "80aa744d49737c508534be2b4622ef3a"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "aff032dcee8a992336e65206dd7494e4"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "c96ee45f49e2ae865e579bb3690454d4"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "288d9948dc425fca994928336e028820"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "53bccaf4020114643aae037b30d49d3c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0c70a47ed9966dab7888adbf30bc23ad"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "c9035e22861576f7f9abae195553aaa7"
  },
  {
    "url": "c/program/index.html",
    "revision": "5f13070903fe202616d90fe0ff08f1f0"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "65b655dec52f0eb24ec94daa58e88f64"
  },
  {
    "url": "categories/index.html",
    "revision": "96b15fdb3196a8347588aff2ad217ce9"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "85d52c323f016eb5072f80f1775b487d"
  },
  {
    "url": "figma/index.html",
    "revision": "71d22897cc7c27a58aa29eb2576ccae5"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e718adfc62a63ad023a02cffa95bc507"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "0ca67d54526af4837f52425796c26ff4"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "21d670b5384ec54e72d71041ed282db6"
  },
  {
    "url": "flutter/index.html",
    "revision": "4dc5adaad06527933f6f5ba7dfd9a4c7"
  },
  {
    "url": "flutter/point.html",
    "revision": "c273d882cb6a1a46334c969f2d1ba3bb"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9a22b9d40fd0f4fbba73890750333108"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2883e6251d9c2e8b9645a4847c835086"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "8180b944b174cdf5ec08a2ecfbea4ebc"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d438dff36fe04b6b603ce85190785425"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7fd33cb5a8f642321d0d6a74762643ed"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c13a567bff81de1d45822067b3303623"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "840d17a54271024044a923f7b536a616"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "a0285b4833338b63e204431288d7661c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7d4ff9d95eab3add6909f518fa6ce84a"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "07c245671f082f5e74c3b470b60a5d2c"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5ca9d3ffb5c2a6e3d7203fe0e32c9654"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3d2f06647f63fbac9c03d41fdf69bfc3"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ab110ecec13e3c67bca865fbc0a33fc3"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "8f07a2ec215b27390a6d17b98ab11ecc"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "4f4f7d86cde68211ac01e6d9399a0587"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d31652354bd419bcb00b0fece09e2001"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "7c9f90aad6fb8ce753709496f0da4eb2"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "add841aff2b77858d02a135facc46095"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "c077b712c6cb3a69a915245bab30a86f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "36caa825e4c87df5103d211747bd12b4"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "09c8249b81e144b06fa69e773b5e3f6a"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "aedecfa9efc24367b99e0a884be55736"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "aa8e33e7b4cc4b0871d159949cf38b38"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "85b701587bbb786cad79ffd4e3a7162a"
  },
  {
    "url": "haskell/index.html",
    "revision": "7693b390175286b2da0a0cf6e7bfbcb1"
  },
  {
    "url": "index.html",
    "revision": "3f151419c076bac37a9778b13e2ff325"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "00cc01248de235d905cceec53081c489"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "14505e7d4c4f5fe5f57b62ca72bc7d6f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "9ae5e9179b3aa17e2f8351db979ea3d4"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "39ea31d441dae0800f4dc42c5e534d6f"
  },
  {
    "url": "python/index.html",
    "revision": "797192833d8ad7b06f8870c6061f991c"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "94b32fbf1e17729be12df022b6423ddf"
  },
  {
    "url": "python/python-string.html",
    "revision": "be90ed343a430d63ad7266d3da94f95c"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "2cb9e188165285c263e2ee59ba0b338f"
  },
  {
    "url": "read/index.html",
    "revision": "ea5978fbf7feb1b3b319fef4f059e3e2"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "1dd671468de27bd42abd39cbb0f8a1bd"
  },
  {
    "url": "swift/better/available.html",
    "revision": "3516d360d0c79a63d8e465321b6d4f6c"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "47ea6567fde84c859c9d21c4f9ba1e9d"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fd25950b403e877207dd4d35b2320dba"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "cfebd3249aa75945e7f0ff29e822654a"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c5b978d162428f53e9ae5e0fd8501f66"
  },
  {
    "url": "swift/better/index.html",
    "revision": "eed46258cbcb3939ac38ebfb0f7466fb"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e1369475da29de0e8c7c3b0f43acbc47"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e03b042442ca82b501554637cd8c6396"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e7f96f7aeb6aa1165170f133f5297a6c"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d86b3da2d587aa86ba91d041ab7c2da4"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "24bc37c94decd31c430a0b13f1daa135"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ef7644e57f9f1790e626798b773e4a80"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "29c2995b4370bbf91cc79a8a18a452c2"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "badf10bb8716e8ef3670e301643c4187"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e3ed9e18ccc1af2e4638024920bd463e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "14ffe0d089940a0062ef51444fb43ded"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "60e4e1bf7a7ff6903ccfdfe51cda2d2c"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "b87d885e8fa1a4604c4ae1aec856cf98"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "e85287aaf19eaa64bbd4f24b4c7eeb80"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "1ee352024675cd4eb21c2612e6d71ac1"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "5631e23d98ed85520681db7d17f724ed"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "511641b283f59012221c2130557469d1"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "330c8c242c793b0121d1d4b22b0ad79f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "5ec85a8d24f7ef55fcb173d574ac43be"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "2bd342ae0b26e509ecf6ff007e8de428"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "df629bc92f1958555c3087bc0ecc3e96"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "c4916da6b009576e4ec1c6b38c160ae7"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "944d09ae6461453b6e0355222e1c919e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "01e7b378275bed25611557d6a4c10541"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "623b55c9554c172bd43a2e17b325460a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "4b82d0f7744cc90b0c4e5165b498f4ae"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2b26ef8e8eac50952f29648562f31841"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "bb8c8f5e0705d55fb2ff23ad8321be07"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a4949bb669a871f187e5a24a403f5ae1"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "4e10befe86b0bf4832a58edce7e5b920"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "488bccbc7d42b58d85c5c389a1c8b8cd"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "df588a6f055a9a31cbc623e8811e8c8d"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "66d2492653c1b3a40938e46ac4ff2833"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "28726362ff4aba1c7695aad64879d3e5"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f65dce454bfee61f22b0e329a34d2109"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d3b1c3a80fa4c0926ed9306c7f83d4fc"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "20a110599b8555d8999520e6a06afef2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "30ffb54db2eb27f9697c36900df5f2e7"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "2ad20302020417e8236f71785cfd536f"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "1a7c5455cea47372384626c2b88c4ef0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "a6dc9ea61ee452058df3807915712d6a"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "fc72812182dcc9f951e9cca131284eb1"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "036850d110cb883f4daf1a063aaf57a7"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ba620d0b33ee87ff4fa4ba75fbaa4134"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "392b40c3377fa44b11beca5b91fe2b2b"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "252718659d46de62b4cccedf29b6eb34"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "04fa673beba72434f63d2317c0a58186"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b9b89981af3f4377a441816e46b3be69"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "833eac0a018cfdd7de088aa94ab2ab42"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "74350b19ac6b1d61b1e664357b2446ea"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "e9ee95d08569c70e1576323e24c620e2"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c6732a0b47b2e6164680ba914e03fb24"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "6828239c93573afa812d332a9e75875e"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4ece68004b4b5fb01bb84daaff65deae"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "01df34f03f8662e3adc497fc1f26cb7f"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "31de32adb3b0443c26c5c55449620b17"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "12d34e40b3af7f42e3cca1ebed4ee1be"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "f91bdcd1369b81ed6ee87cfa0a3b367a"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c0af2ec6d20b99a7aa0a651d19c66e7c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "4ebe0f733e9e5d6cec9e4d84e6284818"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "3dd61c9d2b2e540ce71c9ca7f8fc07fb"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "004a4d3c27ccc90fb650cbab68aff758"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b04b5de5aa223cbe5911da9211bbeb4f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "9587ac8289a12d037f068a6987479182"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8a06a28db7e53cf129f004bffcf16a62"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "10c3bba3105de7080809e85b16bbf22c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "5c1868c808f2afb1d03af92fe1b8f7b7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "0e39b9cadd73758de2b75bb9fedaadf3"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "01f372defa67452276455f1873d503e2"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f9c7225b9b6a1ab5c3bb9d2a0e087f5e"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "949cc69a22709975fd1ab9296073107a"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "09e651525fec4bfd022ba85ad24857a5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "5a424775ddde591cdde82d533922f38b"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "beeafd21dc778b203df93c2d8e1e06c0"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "d7fc6ee226f9896c48798e8a2dd73805"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "932e51e012ee94af28090fc7e11f3107"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f8c02e419461206d77750ffaf166b004"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "72601c4cc45431a8415cc327171a542f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "d887123c84f417b7431b7bdf69e41717"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "8d05409f19ca859d751c47443e71e5ce"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "0e86ffa728744a32cd8d724d06a71095"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "cc9106b58871deaa60bc71c76db1cbc9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "9dc8ea7b0120f0408e0fffe3ae0d55ba"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "901befb1d9fbcdea062eb645e329301c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "9bffa4f2788bffa3fb530b32d2f5fed8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "0100746e1dd258c01daf2a92ca189712"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "6576a6baf999fa25859c70d8677319a3"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "62e3353ddb8c2d501ae774e426e6c24e"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "b90b5283284dfcc261bb53c44893cba4"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "93e4a7d6ce42e4dfc764e160fffffa8f"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "51654d63b5238e829643a1362cabc2d6"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "15fa669545b62e29726e5ed4254e31c3"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1a93d95648eab08cd6b734bffcecdd3e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "67b6e1162c083fa3670c802dc67ad25e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "66ef1bc0a97a9821fdc13d9201f4d413"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ca9d8d6b88a92168103ff698d9250f61"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "83d8026754df4ed35d881fa752df43bf"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e1c847e813fff2698b4e14e631ac2032"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "e1ee32ac5750ce081bf1130c7fa3a9a1"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fbccbffd094a0057437a6bf036335a3f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ab0046ebddaf63f88bad304e92c4c1f0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "eb360961129a6fa7f9fd799acdd56ea0"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "61827cb0ef9793d55d078720ff4cdfe6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4f23ffc2638f57213fd8602a4916cbc9"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "3c82b0668a593355a34ed085064fa982"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "077da5d4c8f74f1e1bdbbbcbe814169c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "b164166ebb2e9be3e57f14eeb4fa9383"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "cd5bd95c3225af3777d01dcd561dc3d9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a31bdf782ab8fb11a574f333d2e6fc9d"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d4a77d2ef95a2f55975b526e1aefccac"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "01d20831220d4308392e8d03e5edd61d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "a57b61ead4a099639d2d48afa902a3fd"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "534caceb46588d8a12157f40c4296571"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "4bd71ab050086d11dd039f28caddfaff"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "93503a5c40912699aeea3d4c7f1b832c"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "e304bc2f40bf9a4c4df80e90c09fe4a9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8cda7a35418b511b17a1182551e43410"
  },
  {
    "url": "tag/github/index.html",
    "revision": "cd47656c3c6d0028c9b100b08cf21532"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "df766eea7280368b350ee7b6510effb5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7ea5039849d49b857f266550e882c065"
  },
  {
    "url": "tag/index.html",
    "revision": "4ddc379b41f6d0ec6289207ed26ded31"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b2f656531942d1df7b83fdca08e77883"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "d901232b71a49232135797b9bdce90f9"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "66746c8e80f5ebecbf781c022523a9f3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "775c9def5a564c12566ba0d410f173e9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "61b665a5467478590055babb4580f5c0"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "6bc56e977aeeddbc4566a3d034111201"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "8cde2b358f31ad1ebeac929a62313401"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "09c2836b0c0aa53d2fb325012720f2c0"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "99ef523b7370f94f74c99291f789ccc3"
  },
  {
    "url": "tag/json/index.html",
    "revision": "81d5b1a7eaa9ee31ab5cecd2f60bc84a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "dd49d550a7717918090592e432f6fa2d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "3f2b6ed527a6468d2cfac6571291ed39"
  },
  {
    "url": "tag/python/index.html",
    "revision": "799e8373201edaf580f27debba6d54e6"
  },
  {
    "url": "tag/read/index.html",
    "revision": "cd514feedc03fd59c74e3a48e3339886"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "620582700aaf6cbe5bb72f49fa13d6e2"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "900891c7d75ebf92638fad89fbb30ffb"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "53c392a5afac8c4fbfd867f2733b562d"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "2e12e8896810ddb8b32bc7061e314044"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "717a4cb907949c182af9f3279af34500"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "0876f3a7ab753aaa7351ef245b516ccd"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "f1be340e8ef5f56ada3cbb70d7aea163"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "619575c6e37d2de8c3095b059bb73952"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "764b8e7284504bb7cbaba23773b0f55c"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1c7337a423c550993db62fa215f08c1a"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "ac361474c27c27bc551d1758040e076d"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b56ad668ee9a7937afef506515fc69cc"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "5c35d7c0491921dd119ca5fb92a6aca3"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "5a138085ff89cfd89f13edc79107de34"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "5755072bec10fd4f1d3527325741187c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7e7a46f9b9dc3ced2b6058c2018f1ca7"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "40f362b2e8c6c970a224a7263d8cda5c"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "56273becb9668c7eacfc3cf94a867ef3"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "62215278e5b707f640267fb4f7cd3b43"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3f6691432c7f6d6a8252ce0f5f8d3fce"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b3263dba7f77588add0c3cde0927262f"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "fcd8706f4abd610b7a2a2797e5104930"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "56de6907bf46b2b64a3ceeaf7e008b6b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "95b35fe917529be49f3935137df6761d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "65143e76b6d81e3af2f2e0a9fa92fa8f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "7dce02a457aa5164c6686236898d3b5d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "92ccce2aa6c8594b030ebb3f1711eeb4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1efcef703413b09009613824e56d18da"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "76d50a19065fabf947e3b57b019a867e"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "301d0c55b608d0b66b2fc2c3f3d2cfbc"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "c1ccf3f1e4b7dfc116b131a7dbfa04c0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0e9d718b998627d3c216910846202b40"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9c36c62d9deb84d6d72836b70700d499"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b339a1dcafc2a20d39d2a6ce0cbba53f"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "2011385a5266ac927ff53a0d7c903e33"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f542bd4a8bb1b09821bd125a28e4821f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "009833168010a633a5bec540b582bf4f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "913cd8d8745fb01f36b92c0679c88371"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c5e9e55020c35a242aed695a6aed941e"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "8f879feb36b233acb860e791b2207b77"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "0b3468ef0ebc2cb753d77ea1fb7b104b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "33f6cfe1237d855460f1bd14d2761a2f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "35a7e1c4f718fbbea14fe24f237dc7ef"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "f1dadee5e322978af8b9f082ba269cd1"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "95393557791149220b140e6bd9489051"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "35e16da73d9f17db0c2d39c1ef22ddb1"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9992204ca1de4f7ce4a9e81d2ce44138"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2cec64d2d7397813251bbf0979d8bef"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1722fcd2cdbc94dd4be6b80cef8df2c2"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b9f19dc09e82073723eabe22dd36738b"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "bb5538b5e2163bad8bbee100525f333e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9556e032baf5c090194053e78f183078"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "14978cbff53f6197009303e682962c14"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "458613d36cf0a38a3d237f6d002a3705"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5cdfe337635ae66a34bbe193a44bb1f1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "45f0ddaf6e04f10d97e034b9ace61388"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4b3a6f9d76d47a6464980217274b27ee"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4e5cc54c21d6505b6322b4975b83c204"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "90003f117235d3af89ad82561f850c4d"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "554bef6f7cd0644f9cc7bd608234d674"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "88a6cffdb2a3c2aae1958e2b1e692e41"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "1f1d92ebc3ee507d12cec55539d581f1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8aae4700fa148046b58a3b84e2bf086a"
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
