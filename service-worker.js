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
    "revision": "481e81133551cf4432e2cf6ae17e5aa7"
  },
  {
    "url": "about/app/index.html",
    "revision": "34f210cfdf3bdb51ea5008efb906c9a0"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e2ba78429c79e281a8cb9ec080daba4d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "f26761bbce01e2f15edd9db2365882a9"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "3b847b2fa9b608448c5699a8a637faa7"
  },
  {
    "url": "about/index/index.html",
    "revision": "65d0270354010fda28f91334760c239b"
  },
  {
    "url": "ai/index.html",
    "revision": "617790b8ab66e5c974d12e899a52647a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7c3bbdfb679642c02ee083b2e8500c58"
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
    "url": "assets/js/1.aa25a933.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.eeecbe8a.js",
    "revision": "b4d24372629ddef27c2869a152558ac6"
  },
  {
    "url": "assets/js/101.4bcd1eac.js",
    "revision": "dbeec067d18483b9278a25baac19a768"
  },
  {
    "url": "assets/js/102.6b0671b3.js",
    "revision": "d7f32a942a31e375522b0b68acb6e748"
  },
  {
    "url": "assets/js/103.205a7589.js",
    "revision": "b3d166ccf05bd0f49e7c6cfac5326c2a"
  },
  {
    "url": "assets/js/104.da279e9a.js",
    "revision": "1f900b055be7c2205d05ef35ecaa8b46"
  },
  {
    "url": "assets/js/105.7eefe9c6.js",
    "revision": "a14f7908c09b6cbe667430ab1d04eac7"
  },
  {
    "url": "assets/js/106.4a84cc87.js",
    "revision": "a824be735271370fe03b91c7061196d2"
  },
  {
    "url": "assets/js/107.7c6208ad.js",
    "revision": "6ce8029adaf788ec774da3c9fc5ff892"
  },
  {
    "url": "assets/js/108.c56dcfe7.js",
    "revision": "775c9052f5163c2fd2ec9429603229cc"
  },
  {
    "url": "assets/js/109.eea7336a.js",
    "revision": "0d636e1760cdcdbb9a01d7400039852d"
  },
  {
    "url": "assets/js/11.42f64f30.js",
    "revision": "d4f9488528383e31d58059bcc6041eca"
  },
  {
    "url": "assets/js/110.b973a751.js",
    "revision": "b4700b3be34fda8ea8e19de9c28c8636"
  },
  {
    "url": "assets/js/111.3d205cea.js",
    "revision": "ccbe88439b6b08eec8334ccdeaad1df4"
  },
  {
    "url": "assets/js/112.250a450a.js",
    "revision": "8a90fbe8fd26ef660b820ad4d639b8d6"
  },
  {
    "url": "assets/js/113.dde2f649.js",
    "revision": "b4c24f6caa79269d3025e8c296da6a2e"
  },
  {
    "url": "assets/js/114.340fc5f9.js",
    "revision": "d1f4410edb63913bfd6873dd91da947a"
  },
  {
    "url": "assets/js/115.b8abdda9.js",
    "revision": "68ce6e44e4916ded55539a8bc5ef8359"
  },
  {
    "url": "assets/js/116.1fa5a2e1.js",
    "revision": "be9e299a8393bb308e23a537c5e41cd8"
  },
  {
    "url": "assets/js/117.1efa8ba1.js",
    "revision": "c02f96fb53eb6000ed1d9de8f5f6db90"
  },
  {
    "url": "assets/js/118.c92019a9.js",
    "revision": "d0d809cae2bbde3623e0d0c921a5be48"
  },
  {
    "url": "assets/js/119.8ac70acf.js",
    "revision": "7ba76bc5c213b245c6d694a8a5a023e2"
  },
  {
    "url": "assets/js/12.8d9c5293.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
  },
  {
    "url": "assets/js/120.ef540a99.js",
    "revision": "6330dbe249c032eb83e0fa72dd428080"
  },
  {
    "url": "assets/js/121.124bfaec.js",
    "revision": "88a69558745bcb549ae3a319439ccfa9"
  },
  {
    "url": "assets/js/122.c016fcc7.js",
    "revision": "67c0bfbedcb4e2cef66066b4281b29ce"
  },
  {
    "url": "assets/js/123.e439e199.js",
    "revision": "c2048cf34c3cf9627455b90a52c1b10a"
  },
  {
    "url": "assets/js/124.e2d98b16.js",
    "revision": "79517e1626f3ad1a456718a59a60d16e"
  },
  {
    "url": "assets/js/125.6177ded9.js",
    "revision": "522be82fda283507b82e8d31edcd8ca8"
  },
  {
    "url": "assets/js/126.8b861d25.js",
    "revision": "fd3164a43ac313af4c7414413855baca"
  },
  {
    "url": "assets/js/127.a10032b0.js",
    "revision": "40551c6f5d385c8443c5b271bb562e1f"
  },
  {
    "url": "assets/js/128.2bcdce12.js",
    "revision": "140ebcf69d39685163407152a57fcf39"
  },
  {
    "url": "assets/js/129.c679559b.js",
    "revision": "adc8d6846e1fb9389ccfef672796c9f6"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.484e93f5.js",
    "revision": "d5dedfb2b1cdfc88473e7cd2fda3b21d"
  },
  {
    "url": "assets/js/131.64a11da3.js",
    "revision": "96301cf171d3c9d0df9c11bdb425a067"
  },
  {
    "url": "assets/js/132.43312b13.js",
    "revision": "c9b29ebfc783f94b2ff158b357f27419"
  },
  {
    "url": "assets/js/133.d3136586.js",
    "revision": "6c0b6cf0e80f27ff55785fc680c2b7af"
  },
  {
    "url": "assets/js/134.663b48d5.js",
    "revision": "c2372e0b11e444319574aad758134685"
  },
  {
    "url": "assets/js/135.5c352600.js",
    "revision": "c35f301eed1ef8eafc791bf381bcdfff"
  },
  {
    "url": "assets/js/136.b36edf7f.js",
    "revision": "eaf6cb9860977069dc43a26e9bd089b2"
  },
  {
    "url": "assets/js/137.2a04d05a.js",
    "revision": "e1a63307e2e7ae9a4400ba94750f4df9"
  },
  {
    "url": "assets/js/138.33847ef1.js",
    "revision": "6e50d375fd478a828adf5527cd2028b9"
  },
  {
    "url": "assets/js/139.12cca6e3.js",
    "revision": "3406fb3be19869b4b93ab812e87a83f5"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.490220ea.js",
    "revision": "27251d30e94134951f391aad0a3934a1"
  },
  {
    "url": "assets/js/141.ac7d770a.js",
    "revision": "d20d3646815e29627e81ca3c21be9f19"
  },
  {
    "url": "assets/js/142.f551be53.js",
    "revision": "01e668299705c532e0275e3f14491247"
  },
  {
    "url": "assets/js/143.609cb68b.js",
    "revision": "12e702ec290f10033fee432ebc040ef6"
  },
  {
    "url": "assets/js/144.a2885ba1.js",
    "revision": "b14e65150f35ebbd8f3a24b083b03710"
  },
  {
    "url": "assets/js/145.7e91baeb.js",
    "revision": "23e5f31435739a4b268d3d98b063c46f"
  },
  {
    "url": "assets/js/146.7cd3334a.js",
    "revision": "217924134c0e91e1391d32904a203178"
  },
  {
    "url": "assets/js/147.9d9ced7b.js",
    "revision": "c3154149ae97d28623348b9815a9e230"
  },
  {
    "url": "assets/js/148.dcd976cd.js",
    "revision": "bf02f58744f4d52c820e2150118d1233"
  },
  {
    "url": "assets/js/149.7dfee8ab.js",
    "revision": "04b47c88cfc72cd7223a585ce946d8f2"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.462bec31.js",
    "revision": "20caf784a401faaf762a50df06eed7e4"
  },
  {
    "url": "assets/js/151.a5950177.js",
    "revision": "01495c10790d2b76351177f511af7bad"
  },
  {
    "url": "assets/js/152.cf18de6b.js",
    "revision": "2a5a73e074ee561b206666e36f4d27ae"
  },
  {
    "url": "assets/js/153.62e47f20.js",
    "revision": "58c604b1251311d9e308e5be952edf83"
  },
  {
    "url": "assets/js/154.9064e9f7.js",
    "revision": "6d5b350184db7190bf58623377c53619"
  },
  {
    "url": "assets/js/155.d5614ed4.js",
    "revision": "810f512ebe284279aa4009773163470b"
  },
  {
    "url": "assets/js/156.5c0112b1.js",
    "revision": "8c99f5728d54e7b6588ff1a9541d1373"
  },
  {
    "url": "assets/js/157.729c9738.js",
    "revision": "aef46a8710b59b9160b5978517d3110a"
  },
  {
    "url": "assets/js/158.d06433af.js",
    "revision": "a0b1eff96e4620821fbdd35ab6eaf01c"
  },
  {
    "url": "assets/js/159.c5b97874.js",
    "revision": "582734fd6d7bef6f2bc7826880ff6c45"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.89cbf2ff.js",
    "revision": "190416a2b11f45bfa531fb132c85505c"
  },
  {
    "url": "assets/js/161.eb4f64c6.js",
    "revision": "5452dbf6c4b1bfc07e1f22d9420c2f98"
  },
  {
    "url": "assets/js/162.f5ff5edc.js",
    "revision": "802a02b7f2832c60b4397618c1d7a7c6"
  },
  {
    "url": "assets/js/163.8a040fce.js",
    "revision": "46fe828cf8f37e4853956b40f4c029a7"
  },
  {
    "url": "assets/js/164.2bcea97e.js",
    "revision": "0acf4e26ecddf0ade2ea5b2b6090eb13"
  },
  {
    "url": "assets/js/165.96e50b71.js",
    "revision": "3753b84c3f716512ce723dfec5f03d6d"
  },
  {
    "url": "assets/js/166.e36fdc18.js",
    "revision": "bf81b6d454c79f754aec818db9bc38b0"
  },
  {
    "url": "assets/js/167.e3b17737.js",
    "revision": "b33c308e33d7ccdef1e1e7071ca68933"
  },
  {
    "url": "assets/js/168.2ac9e1a2.js",
    "revision": "fddbcbbe982c6f63ece03bedcd9149ef"
  },
  {
    "url": "assets/js/169.c7a244dc.js",
    "revision": "bed4e686a71d63fc4f333a30d1f260e3"
  },
  {
    "url": "assets/js/17.adbf4e27.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
  },
  {
    "url": "assets/js/170.f0c5fe81.js",
    "revision": "e403d476b478d41c5efd87ef08e0add3"
  },
  {
    "url": "assets/js/171.a6b9522e.js",
    "revision": "19ba2b5fb8aa0d4432b7701b6a355bf4"
  },
  {
    "url": "assets/js/172.710b498c.js",
    "revision": "95421534610367aa69701130992124cc"
  },
  {
    "url": "assets/js/173.6b92b987.js",
    "revision": "87452103cb2c0a6279019b3fafd7600f"
  },
  {
    "url": "assets/js/174.2a9c54fe.js",
    "revision": "5b42914d7d5ed9e28af7afdfd637940e"
  },
  {
    "url": "assets/js/175.e5476bc9.js",
    "revision": "30dc2709f97a71ad0f16744b5574c014"
  },
  {
    "url": "assets/js/176.3169f527.js",
    "revision": "299148c63296ada472f78077f9a14830"
  },
  {
    "url": "assets/js/177.dc767161.js",
    "revision": "c4718f34d85468239699589080226497"
  },
  {
    "url": "assets/js/178.1ced8453.js",
    "revision": "e6feebe717c392d532a3664ab95bf62a"
  },
  {
    "url": "assets/js/179.50cf4c53.js",
    "revision": "f70eaf9ad82603dd0c5cacd685726398"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.200dafa5.js",
    "revision": "44d7ad20ce34ab84895af589c27d395e"
  },
  {
    "url": "assets/js/181.d15a60e8.js",
    "revision": "818989f93f7b0a3c4ce904b3119b28c1"
  },
  {
    "url": "assets/js/182.1c7e73de.js",
    "revision": "1187270ac8f256ba97cdcb64aa076572"
  },
  {
    "url": "assets/js/183.ad1af572.js",
    "revision": "2000e476eb8bf4d29375a6df6178053d"
  },
  {
    "url": "assets/js/184.ec72491b.js",
    "revision": "6ffb5ac1cc5ae6e416de34a14f614bd4"
  },
  {
    "url": "assets/js/185.e920537e.js",
    "revision": "efc931b53748de9aadb1dce55a35eeb2"
  },
  {
    "url": "assets/js/186.34851b88.js",
    "revision": "e21ef43e36e4f5be12e66e423fabc3b6"
  },
  {
    "url": "assets/js/187.ef144fd9.js",
    "revision": "5faf9ec0c542494df18b8a8750b50694"
  },
  {
    "url": "assets/js/188.dc5250bd.js",
    "revision": "9b92cc80565cc5daa045038174218e12"
  },
  {
    "url": "assets/js/189.20ac351e.js",
    "revision": "d2aab30f35ea1cde7fc562ded4c477d2"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.baa0b1de.js",
    "revision": "1ed79d6577d8cb2b7845f8d59bf1552d"
  },
  {
    "url": "assets/js/191.eeeebc76.js",
    "revision": "8b9ef77e1c6dd77437f0c190f25a7048"
  },
  {
    "url": "assets/js/192.79248544.js",
    "revision": "7da9058abcea27598e8094feb7ee6bea"
  },
  {
    "url": "assets/js/193.7198e183.js",
    "revision": "545581f30e3627f56601d835036590bf"
  },
  {
    "url": "assets/js/194.31076ef0.js",
    "revision": "8c246795c11963e88f2c00832c715da6"
  },
  {
    "url": "assets/js/195.392c4ad7.js",
    "revision": "7c2aaa080aa788c9f56bacaccb3b42e7"
  },
  {
    "url": "assets/js/196.b188e02a.js",
    "revision": "9160740961673660e2d0be0b47edebaf"
  },
  {
    "url": "assets/js/197.55c3ff03.js",
    "revision": "7027f6a44436c0abf8b487d43e1f7606"
  },
  {
    "url": "assets/js/198.5d6e52c7.js",
    "revision": "55b850ce7ae216bcacf832336a438b65"
  },
  {
    "url": "assets/js/199.075477d3.js",
    "revision": "cdabd99e116a1f91212db970a4336de0"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.7e83f9ed.js",
    "revision": "19d95770eb9dadd62f82fa4474134641"
  },
  {
    "url": "assets/js/201.599ed932.js",
    "revision": "ca78a8f079e52b37a5be3aee251912cb"
  },
  {
    "url": "assets/js/202.8606f3a6.js",
    "revision": "973de50516a4f82d142caa51adab911e"
  },
  {
    "url": "assets/js/203.1690d38f.js",
    "revision": "4bf86283ca61881163f6714977651eea"
  },
  {
    "url": "assets/js/204.30c67106.js",
    "revision": "5ecddc3ec0787d5ff1e158fc61fee162"
  },
  {
    "url": "assets/js/205.cd9ff79e.js",
    "revision": "c53379048d16fee14158804975d03036"
  },
  {
    "url": "assets/js/206.aadfda2c.js",
    "revision": "d9caadb0dda0e926b367f5cb9e8256d2"
  },
  {
    "url": "assets/js/207.d5f830c1.js",
    "revision": "3f6f3ad6d9c2a3e2497f7d0fb019115b"
  },
  {
    "url": "assets/js/208.33d8dcd5.js",
    "revision": "4ade085d00ddbfc070863723fde47636"
  },
  {
    "url": "assets/js/209.16d5a54c.js",
    "revision": "1515b826524c1fb5c021338bb869ed57"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.e3d996ee.js",
    "revision": "42186a96211879d510aaa4bdd0abbbf9"
  },
  {
    "url": "assets/js/211.009b258a.js",
    "revision": "bc56c5f2464a9dda815e1584f3ba5eb5"
  },
  {
    "url": "assets/js/212.74b6a84b.js",
    "revision": "8ce4439d8dd5b95ec4aa9d1b8b59e50a"
  },
  {
    "url": "assets/js/213.81a49ede.js",
    "revision": "b0035a5c3912d76610733c1727310cdb"
  },
  {
    "url": "assets/js/214.b874ff9c.js",
    "revision": "fa39d4d89f394fb731d29f185f99a7ff"
  },
  {
    "url": "assets/js/215.b28ce225.js",
    "revision": "65172dd71b0e1ba2d61698fbcc9eb78e"
  },
  {
    "url": "assets/js/216.65648687.js",
    "revision": "5048a38891b967295ed3fa5228970d4f"
  },
  {
    "url": "assets/js/217.1414ea8a.js",
    "revision": "3204f79764980d3aee0354323b645efc"
  },
  {
    "url": "assets/js/218.9e5d671e.js",
    "revision": "e62457940e55b35949734cb88aaddc58"
  },
  {
    "url": "assets/js/219.81e2f7f4.js",
    "revision": "59423c24c61be0f6f67c16a832b0a189"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.6034ccf7.js",
    "revision": "0df9d21de57f64fb1be756e66dcf68ab"
  },
  {
    "url": "assets/js/221.ff7968ba.js",
    "revision": "cdf3be4373d0dca17f5df3d7a7d78000"
  },
  {
    "url": "assets/js/222.7ccfa7be.js",
    "revision": "42e14fd76ef0b52db18ca6262f52fe58"
  },
  {
    "url": "assets/js/223.ae8e6907.js",
    "revision": "c72b325c80102ac1da60dbe35e1e7424"
  },
  {
    "url": "assets/js/224.567f5d01.js",
    "revision": "224c7bfeb040b7d5ba8696cef3521902"
  },
  {
    "url": "assets/js/225.d93838be.js",
    "revision": "8c1ded0ae8541f6f9700e2193d460194"
  },
  {
    "url": "assets/js/226.f63bd614.js",
    "revision": "98b957f84f1292d64a43f0466bec1a64"
  },
  {
    "url": "assets/js/227.943927c6.js",
    "revision": "567fcca565b5e70805a72bc5a6f33cf8"
  },
  {
    "url": "assets/js/228.2fff93cc.js",
    "revision": "7e555e6bcd529a8f2bdba9217c0152e3"
  },
  {
    "url": "assets/js/23.a2e14971.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/24.700d0f24.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.ef9e6863.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.4129a7fc.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.a3d2b8d4.js",
    "revision": "acdd7a82e811b326e693992ffffd0d78"
  },
  {
    "url": "assets/js/28.05acc2ef.js",
    "revision": "32da41181adee283c0dbbf0d4b4b7f19"
  },
  {
    "url": "assets/js/29.4f8fc819.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.799edd4c.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.43abe8a4.js",
    "revision": "234a4c1e1f965104e33c1445a9d2e45b"
  },
  {
    "url": "assets/js/31.228a1769.js",
    "revision": "72111967edccec374cf25773de6d7f82"
  },
  {
    "url": "assets/js/32.165b6d7a.js",
    "revision": "aa6562ae9c19d3c5bed61548aeec5261"
  },
  {
    "url": "assets/js/33.21573b42.js",
    "revision": "93ebaf44acc62839778558d7c4784507"
  },
  {
    "url": "assets/js/34.b2e76c72.js",
    "revision": "a47a0be7f06b9634eb77a7f424c67eac"
  },
  {
    "url": "assets/js/35.88962c32.js",
    "revision": "065010bfb77dadaf44b00a7edbed68bf"
  },
  {
    "url": "assets/js/36.b795d8c0.js",
    "revision": "062fd7e7cdc9c9b16d8895b0f99dc9c5"
  },
  {
    "url": "assets/js/37.356ed9f4.js",
    "revision": "4f78cdff06f45197de4160acd92b34bb"
  },
  {
    "url": "assets/js/38.2a4dd5f5.js",
    "revision": "978586b909be63129e5327d1fd722d89"
  },
  {
    "url": "assets/js/39.f781bb97.js",
    "revision": "6cf602ec5ac7fd1aa415e6548faf82df"
  },
  {
    "url": "assets/js/4.d8a1ff43.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.ab46386b.js",
    "revision": "90c3cf99f395792fa706fc288cb332ea"
  },
  {
    "url": "assets/js/41.34293495.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.8d322209.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.30f504e8.js",
    "revision": "d0b46bad0084bc7cc152a7813709964f"
  },
  {
    "url": "assets/js/44.b28e6add.js",
    "revision": "b9c1a6fa58813164f3d5c0cc4b2ad519"
  },
  {
    "url": "assets/js/45.146ca06d.js",
    "revision": "b6be199ebebe9bb75bf4a9370c81e7cc"
  },
  {
    "url": "assets/js/46.8f48726c.js",
    "revision": "b9a470431df234a822882b7efc9e8186"
  },
  {
    "url": "assets/js/47.e02f0a81.js",
    "revision": "389bbac7bccc98b46e7d512beba3723a"
  },
  {
    "url": "assets/js/48.a956ea1d.js",
    "revision": "b45c999a1b643e45a815e72b0ecacc16"
  },
  {
    "url": "assets/js/49.02734cd6.js",
    "revision": "beda7c9ff34a1223df8a0a11a4b89902"
  },
  {
    "url": "assets/js/5.2d5717cc.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.2f614578.js",
    "revision": "4f61b355ad22a2be9ee40f8a3f323ccd"
  },
  {
    "url": "assets/js/51.5f4fc92b.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.8daaa0fc.js",
    "revision": "189d83f1b6d303cbe3dbf6d25db02d81"
  },
  {
    "url": "assets/js/53.cf23f51d.js",
    "revision": "940519aa9763076a15a7c967ab7e5b4b"
  },
  {
    "url": "assets/js/54.5c79b21c.js",
    "revision": "45452b115966d6f32d225203d8bd2435"
  },
  {
    "url": "assets/js/55.8aef5ef4.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
  },
  {
    "url": "assets/js/56.83002e20.js",
    "revision": "2e843e7c65b7e51ed28faaec8b25b492"
  },
  {
    "url": "assets/js/57.49899604.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.22a1eb8b.js",
    "revision": "24d84c6c9a96b1a5880e5c0a7fbdcdbf"
  },
  {
    "url": "assets/js/59.921b6d86.js",
    "revision": "535c1491572d5122e903de26c8a6d5bc"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.5e0e826e.js",
    "revision": "a471dc14b4aeff11c58d682db6fc600a"
  },
  {
    "url": "assets/js/61.4e6499d7.js",
    "revision": "0a90b05e03a9f8ce591836831b3fa5c3"
  },
  {
    "url": "assets/js/62.241ed18e.js",
    "revision": "f2232581d471418b0272709ba9d2c392"
  },
  {
    "url": "assets/js/63.e0c7dfe0.js",
    "revision": "95e0334628cfd5a12cf713d48bb6ddd0"
  },
  {
    "url": "assets/js/64.a46be040.js",
    "revision": "8f85290a6c45bc1157b7f22b3165ba2d"
  },
  {
    "url": "assets/js/65.bef781c6.js",
    "revision": "9d1a2029aedd41d9838e6dfeb4f45cd4"
  },
  {
    "url": "assets/js/66.fdfe29c2.js",
    "revision": "ded1adbf786675f0f6b58e0edd3d9c49"
  },
  {
    "url": "assets/js/67.4713ffc8.js",
    "revision": "f6fd2a9adb70ce5b73f603f46415fa58"
  },
  {
    "url": "assets/js/68.f8ca7d2d.js",
    "revision": "30416ec41756279c6a3a8faa0f85521e"
  },
  {
    "url": "assets/js/69.164acd8b.js",
    "revision": "42fa6a202a508a9deac08c010eae6965"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.07603734.js",
    "revision": "9268d5b0d6ec1d622a3e2b8b980d156e"
  },
  {
    "url": "assets/js/71.52444d5d.js",
    "revision": "3ac21153b1f29e71d832127d4ab834f8"
  },
  {
    "url": "assets/js/72.50a9608d.js",
    "revision": "e6bb7da55c0d4d088f04b3e66a610b6e"
  },
  {
    "url": "assets/js/73.f82de604.js",
    "revision": "cfeaff9d4dd7c8a13e306fc75fae96b8"
  },
  {
    "url": "assets/js/74.02737426.js",
    "revision": "a83fc147816bfe30a9bbe8ae0b7ef6fd"
  },
  {
    "url": "assets/js/75.184238a7.js",
    "revision": "4c7778211d9d590cdaf90112d8d7c885"
  },
  {
    "url": "assets/js/76.41acc021.js",
    "revision": "8d58b007007d34cab581f5cb5393ba34"
  },
  {
    "url": "assets/js/77.cefd5af8.js",
    "revision": "c87f8982c3ed297f78502a9f0eb523d0"
  },
  {
    "url": "assets/js/78.5da2585b.js",
    "revision": "52dd7ec927c768e992e6fc4d38f189e3"
  },
  {
    "url": "assets/js/79.0f4d87bb.js",
    "revision": "36bd863af3e6acc1ac6677e2ff3f6284"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.6b607937.js",
    "revision": "9fe6789eb9d4c90393f268f107378bf0"
  },
  {
    "url": "assets/js/81.44aa05a2.js",
    "revision": "0446cb2a3329c41f389a680273fd7d17"
  },
  {
    "url": "assets/js/82.e2e2685d.js",
    "revision": "2c27dbd41e3ebf96d0d5ca717105cb6e"
  },
  {
    "url": "assets/js/83.b33a999f.js",
    "revision": "d5be45a46500c4a1da8ec59a48f89a7e"
  },
  {
    "url": "assets/js/84.f5eaaec1.js",
    "revision": "ebc39a88dfcc2ecddf86e8e099eaeb09"
  },
  {
    "url": "assets/js/85.feedea28.js",
    "revision": "17089d9d089efbfff871d99df53ec8a8"
  },
  {
    "url": "assets/js/86.b41f94e1.js",
    "revision": "166637a82c0280ef0c1e35a0b67d825f"
  },
  {
    "url": "assets/js/87.325e6e40.js",
    "revision": "82f4e4ab2685a28f21c005a17fd12b17"
  },
  {
    "url": "assets/js/88.9e3520ed.js",
    "revision": "e35573907e25f7e3d9f80c6aba54170c"
  },
  {
    "url": "assets/js/89.c83dfc45.js",
    "revision": "06eee6a9a8ce46d536c78fa84bede84e"
  },
  {
    "url": "assets/js/9.6283fa1d.js",
    "revision": "45727505dea074e323a5b93331073f16"
  },
  {
    "url": "assets/js/90.f9858e4c.js",
    "revision": "d6e1368235ba0b305a85d48ad7e0de0a"
  },
  {
    "url": "assets/js/91.c85e6486.js",
    "revision": "9f5844b02215bbdd1a9eab8a74e080a6"
  },
  {
    "url": "assets/js/92.857df929.js",
    "revision": "41f6474685bf65c21076c66b2ef22ff4"
  },
  {
    "url": "assets/js/93.be38958e.js",
    "revision": "25806d93da8fb60d85ae96befc65bbac"
  },
  {
    "url": "assets/js/94.4b1e7a69.js",
    "revision": "044ef8334aa500cfc8a28b1191c7ebe3"
  },
  {
    "url": "assets/js/95.2660d8fd.js",
    "revision": "14daf9438377974be6f28fad0b59824f"
  },
  {
    "url": "assets/js/96.8aa2f529.js",
    "revision": "2d44d9a9e263117f4f923dacf29ba731"
  },
  {
    "url": "assets/js/97.731bacc1.js",
    "revision": "16472c68a2aa3d74827065bfb3db02a3"
  },
  {
    "url": "assets/js/98.a18c661c.js",
    "revision": "5b59b9ff644d634f391e0009c206a821"
  },
  {
    "url": "assets/js/99.2897038d.js",
    "revision": "18b549a6192f0241c3299cab27004209"
  },
  {
    "url": "assets/js/app.62b82212.js",
    "revision": "26cab282864e7fdbaa45082e5802a1fd"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "4d4d3622aa317b686c2db72170706a54"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0a6acd1e80287b303da9da255eebb049"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "2618d005bcbd12ead5015a0a8414c13a"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "54f07d8ca83984e686387134a257afd5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e03d5645da5c016eaf8da9cd8aef82be"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "fdf226b8ac77baa0310d6701b85505f9"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "687ac03ccd66875229291702f407d7b7"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "fff81e5e00699192554b105ffa1c725e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "11122db3bcebcd33253f183b83d6ca53"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "678c8ea09019a3a47429dfe7ebce1b6a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0542d72a3b344d00ef9193858907e584"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "c550336bc99e52875a98cdb15cb418b3"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "96c3583b7299d37f315d476c63ed6e03"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "5774cef9a52f50c886105f7fd1de4b99"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "520c1fad88cab375fd20e6567315cc1d"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "2f828b3519857c0f91efb4adaca38b1e"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "8297b574a3cb8c8e615fc4a2835efaa5"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "3e51d52b112708886827e92c748453ec"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "05dd6a6ddc5d05e0c263d65d0bed0206"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "8743a4ebdd8267ebaa90390bdbeb4329"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "abe2c128dfefb56b234be5ff9f795872"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "f2756dcfce5e9fcaa5a96e4911c51c47"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "dcc2ba96cc100900e3ecdec9ffeb8cee"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "9dbe1d9bb3ba099af2120d5aa9956c22"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "55b4c60922b9642c19f8adb1e8dc5323"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "67d2d268885a97dcc719b8cb44a889ab"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "b83f69985edf608d782ecef8ccab4f37"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "70bc8f219a466edfb38291a4016de720"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "7e8c2843e66e6696c2a757d75afd828c"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "3dd4e435ed78d7e2d38d0f6b9de38dbb"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "bc26efceaeb5c2138107e92c50592c7c"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "ac121b438e50ec644c46b6410c9f4b49"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "134d9cf748ccd4a74325dccf9f3182df"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ff48c2acc383e96b1ee93bf4e9c20b88"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "d86676a6dff605bdfb05feb9259288b7"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "4ee4e63f5745762d3725ae2ac7efac14"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "1eda68e846b6fa9e71fdffb6bb96672f"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "43333a8e6243ce02cd5ec2e530deafd3"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "652591314fbbf4d0dfd2a124f19ba699"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "f320c15438d033216de4ff7463dc5806"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "f718ee438b196533c36c7ba3e93d5294"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "22acccbcfd35f68f5aef19db4ba55fc3"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "585ca84de02b0578ef0110f72ff4dc45"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "74b048495181edd825d4551857205109"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "5e946ffee758c1d2ce13bcf73ea4552b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "681f8d63591b0eff6b1348f26b695971"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "01984046ce660aa12fe86ad4021acd2d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "077bb95c9c31e7a94e93a28cba4ac1b9"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "c642fcdf86b47a464c5ae3758aea04f5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "cb9f74f419a3b65e40e468e60fdc3672"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d811b4e9a5731f5596c1da1baa621bc9"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "987edc43697d6119a26647fe33230331"
  },
  {
    "url": "basis/index/index.html",
    "revision": "1d40ff709c90058a6a66ffe4874cdc9f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a180a1df91ec53039d90e3c2fbf4c9e6"
  },
  {
    "url": "book/index.html",
    "revision": "cf48181f5d2da65c32974d7fcd3fcf05"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "55926d86f514ccbfa1cc11617b39d52f"
  },
  {
    "url": "c/audio/index.html",
    "revision": "fd279ba30a05a2eb6128ae8d7751de1d"
  },
  {
    "url": "c/program/index.html",
    "revision": "c273e685f4ce161cf1673426f46acdaf"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d92f312276198c75a399918fa9256a01"
  },
  {
    "url": "categories/index.html",
    "revision": "be6352097d132dfe5cc67e6b76cfe6c8"
  },
  {
    "url": "figma/index.html",
    "revision": "59c6450791ae6371cf53fc2ef5a26ed3"
  },
  {
    "url": "flutter/index.html",
    "revision": "71eca482cdf876cad358fbb39783e821"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "41d8a0fca159e23d3005f75d9db7d988"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "16974e49062814a6cce53eee0e286569"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "5aa2020ca6796037c51e5b4fcf0eb623"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "80d878faf351c77f9d19e4bdcb1d21d9"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a071a2078dfc60d1eeda7b69929b3b99"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e867b677703976b85bf7045d8645c17c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "439ece9c8d66aa64fc43bb13402cb286"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "9ff4249611fc0742b6b167b651151567"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "3ff4a34d48a25df5b90c9f717fe70f0c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "afec1442d5710619cd2e02f5e8e8934a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "43ee4848469488c13adfdd49354245a6"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "03f1abb99fede983a8d3c55a1b381168"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7ca21be20e2cd5673caf585199d095fe"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "276df189d632b7363c3cdc65c02c0194"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "7096fe0222c42c5ee53c0d8418fbe248"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "10f22c46ebfc4f01d31c238bf84d93b1"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "5e5486dee006e9256fb3a15a12f6c746"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "8b5a76db81f39044bc94d1f4692fea34"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "e0b78b9bfca5fd6bca799e1eb08ad2e0"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "7b69e97c0ab82376b82dbd3644382517"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "c668a2b8875bd796e2cc9ee4ae37dc58"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "2b1992487c15d891458343bf8d889802"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a6f980860529cebc4cf5b17fe042e7a3"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "28e3fda23c92cbb250839caa959640b7"
  },
  {
    "url": "haskell/index.html",
    "revision": "7bdf12c437f1f04b3bdbf7b41e27201b"
  },
  {
    "url": "index.html",
    "revision": "26640df71afa127528370e3757cc392d"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "8149a37c479363cb027f7e0b600c8bd5"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "92a43738727485cdbea0dc99acce3d66"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "4d90afb3ed776347ad3aee94cfc12e09"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e1e093a54a71ecb4ebf69fe7f196b8b4"
  },
  {
    "url": "python/index.html",
    "revision": "091173fbcc62413e54c35bb7ef1d4156"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c9da551a757b77104b891674c7ad62da"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c136e0f841fcaa538b78a7f0be611428"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "256c11d618f80818e0b1333bce74f301"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "3ee7c4295ec5daf294a2ee97fe04c293"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "6d9c0a2ca038725b32ace7182ebbc4d6"
  },
  {
    "url": "swift/better/di.html",
    "revision": "6047afcf068667714f58773d56080078"
  },
  {
    "url": "swift/better/index.html",
    "revision": "4201ac465258ccbca78c2e9f966bc700"
  },
  {
    "url": "swift/better/last.html",
    "revision": "4a80df1a22715777cbd0ac3db4e11148"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "6f1411891c5a37758e47ee8a44d8f3b7"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f360998a8a0da66c6970276583966bac"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "215950458edddf65a9a7d83bd336c425"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "c86034f4610237bac3ac7896b17f240c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "b72df493193ef8d018436805b1f28a92"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9cc0f85150b8252fdabf71d9cd6fffa4"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4a11907111bfcf8c98332ef1729ca838"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3e4297b9947c35ee8caae001f0a3fbfc"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "fa5f488e3726040e17e324e53bd4ccb3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "33d9eccfddae935235836356266e62d4"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "200dc1eed58a4e4d3ed0421bbd9973b2"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "2a8eab5eb91db0f3e7b368d981c5dca1"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "24ca384381307576c1c8bef2cc15f3fe"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "1a5ca620d0f13d539223955c9ae83f2d"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "01ca5c75d02fc0f582d7d2f9418be795"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "2cde7fad527355327edd03841d3f442c"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "9ec8086cd5b77e1e2ecb1e0df88357d4"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "0eb6db1a11704be8b32e3220ab245a78"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b018f44aa87ad2cabcdcf40a23813b9e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "f67948416439dff00b31dfc131ebbfcb"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "428736444580def5cc9e39d60ffd7415"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "c6235042614eb36af9af5f6c6f79a17a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "644533f8aaa49c21ead8508330f35456"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "b4a62e37242a7e6d43cd960de3703e81"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "db6b0fa4001788f027459e4561619959"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "26cb4ee4f2d21e6ab826bbf5f2d249eb"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2218621e8c4190989b2916b84b32ce64"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "4c438267c80970d19afeedd48879d717"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "331037405db70c3a7559674f9169264a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "4895f56864f0a55910906202896f8c80"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "17c5bf0701056349ec6005e2c66db751"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "830034bb7a7e79688c107c16899c81db"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "8c51bf333536fad6d93933c80eac119d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "570cb2e514e66106f3434f26c1c0b221"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "fd083af7a0a292cca69d7e91bd9e9133"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "2626cca244f9002bb9f2b73eade04b1e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "ae81a8e755a51c773122ac052abc2987"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "ad942af52027e8a5049f58644f037a10"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f8ce352c69fe16a45eaf71b72a9ff5d7"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "2a4f0b4d850323eed2ec1d72e83e71a5"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "7815406c209fd1f9ba212c3edc1c30e9"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "7087c2d58e58a7512e6a0b9e3a9c7fb2"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "733754e46f59cfdd294025ec79adaf53"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0f8c3b4fb2ab4b5107b2058a92ce7b5d"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "9c36b6aa23640bb1eef0e69460b6e56d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "a6e5b1f3d158f365670aa3cd200eb6a3"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "00de7e0ef0a4ee88d0c17f7543580706"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "3cd60bfecb9b5e586f550cc1edc9f02f"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "50fabe247de1dc5986c0406f151ccae7"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "41ba92c69e085fa9bc588fc4e664a678"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "25073a81ca66dc0ca3d739d97f295e56"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "838706f3d9e82f02d3a804ab32a0fcdd"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "59e515a7891435f0eedca618f681fb0e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "8973f45647599bb83c36e835a0282a63"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "a200d6911f09ad5608e63aebc069cbe1"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "8319ff29b9f7149502cd833498ae5dee"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a974662ebd27776dfebbcddc2e933cdd"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1017362a5269b13188d3c93dc5fbeac3"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "8157dfa399a4c08efae82e19e748e21c"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b03191a1645f8bb12c97427d91207542"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "86e5c5b22beaaf992550429fc3c8bf74"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "532ca7323667dbd785ab9945af042b2f"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "254c83c035ac7d1327c8a5d108186813"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "31b98f8f4a75e81657e748dbeb733de9"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "53bf80654f4e8ff6fbe0919ccf1ed533"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ccbd5570f11cbec8b297ac53f899fb38"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "3dfe413a954de8443b30b88b816c5abb"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "f643ec23228a7ae1644ee6866a7834df"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "569eba0b49ac2210f1dac154c9950069"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "26cc2f6e29a7153e65af17d51c21701c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "bab4a9acc2d33bcf522e5c7ccc28e258"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "66570e48bfdcce2f7bad0e08ac0307af"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "6863b7a03e13d08bde6b6a150e8e2ed6"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "fb63b8612b1ac50273c47a39a088f342"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "930ab627129ffde0bcbcca9bff376ce5"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "56114fa5d18b2f59ff35751a3dd4b364"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "182012d26e589e6aea0dfbd102de2700"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "84d87efd9f23096d07e5c05798be964e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "055a755f587882ff5dc66f60aa064ae5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f6aa718b4fd4f6cf4a771b2eb103a6ae"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "1512aa7edc196c27e387055bd4dc4078"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "57d9ac8d9d01edd671c90ba9784c8dfc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "941adef91c55e82d090b06d0c436ce7f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "07e7e08c360daee88f4edb4c8bdbfa12"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e7aef23658d724866b777db3a0b5afe2"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f6c3f5e8dfdd7c74f7b15ad5921977f3"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "c16b12db35b39f81bb01dadedf52e8d1"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "09e74dbfb45bf98bc6d076157f7ba791"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4555e2c7772c497dc50909ebca33f987"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "5922ae6791df42579e2573219f9a6131"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6b9c3537744058d10cad407c28aea820"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "42d15d39eb8e64f4f2ebc3c28fa20132"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "114c951d33ea974983c777524fa24b65"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "f0e612490c8d30cb1da47e88363885e0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "98360e73a87ba608cd177c07b01bd343"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "328a56c1fc19e5f53185b0db9a8104fd"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "e072f977164adf0c8a12503058ae0de1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "af95becad5fd84e5f0e9bab129f4b678"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9b0c2440eeec28e5e4f3ed155bb98f00"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4063a14d1f27bfafe947829d90f126db"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "80ebd26c0fd8b150e6ff5f2e954528df"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "4b19c11a8c8523fa0aaaf1f622952660"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8f04a60f2cb5a704852a2e6de3fca795"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1dc1f0ed238b65d9f6595f27d36e83b5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "cb6fb9ad7bfc5552a5d3f4631ef5c297"
  },
  {
    "url": "tag/git/index.html",
    "revision": "89f2fc4d8505d7f3b18b75a12345f42a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5e7f8fa18e87e7413e5d84259e51dc2f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "65fe9c3d5830d0dfd16c5b936cae2570"
  },
  {
    "url": "tag/index.html",
    "revision": "a842f6c52652ea934a840fd192b0f7fd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3df0ab61207644d3b7eba73f9cf21ddb"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "98247c7e5932b5708fcf84f60f1024bf"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "61c2784f816fb8be35e6986dbf982667"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e72eb32cfb6b08f2db9da8e0fb179c0e"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "397f9d3e9f3217a38c8e5bfc588f2f1c"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d9fb1bafe5b9636a96da13d4754408a6"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a6bfbd3c5e2640b8c38ca63f939ab85d"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "6457cc894d926c1daaec9932e9753803"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "43f1a846d4ce69583d6359d571b862d0"
  },
  {
    "url": "tag/json/index.html",
    "revision": "470ae23957762ec7e2afb5ac2cc6da57"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "9d6c20a23c6aaab0162b398c673f69f9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cb3e5923a8119ea912d9dd09b21a247f"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "97fc554ce455de36e004f211e9985a67"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ab0ad11a4893c09a7129a63edf0bb037"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "86f9bc9628b2a5a2d8476dc86cc0d745"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "cacba9e160ebd7de985de2d5d259b290"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "58f00fd1059c2b17aea78294866f2985"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "19141179ac87031121a71cf8fd19e5e8"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b141928353da077d83b3ddcb45868912"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "32885c1d0df22f264541f7f5c7eb369e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "961255a662ae95638d3d0c4a229a7769"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b0111fe601783ffa7b3e5a16cfbc1ed8"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "66daa6d8e4981cb405dc69d7bf7195da"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b95d8f505d358b5e5f12a1179e2aceae"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "d898c7216405bcf413997e0bec3eada9"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "fff3b9418cdedd1a8203296c11eab80c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "ae054405f71a156f291cdb81dc44cd87"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "34b62bdf16e53cee64d0e6b344a3d0ff"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "0eea00c1c5f3dcdf0c4d3b9eea5f9e51"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "7420d357f9cd8e3bdc1e34b9d8439c10"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "55ab4c450cf5decc6ebe66c33e053252"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "0195f09681179b77d2bd31538947dd5c"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "c65d5852002e9f483c1e994a690e9cca"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "3add3f6c70fedad4e3576bdbc55ab197"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "cd3cbf1f0d30d0a61c8819f47e77a7d7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "85d59357be0f5db5dcb391728ee03039"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "c83342776d6f2defcaa0465b32e1c178"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1874c3efa7f16da2c850f139626b7122"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "75a9e0c5732b02c036e809932b1c9240"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ed0e3a32dfe50ef59c7fab4daf43e443"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "aec0aa6dcac5e0a35f2b139cea2fafac"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f49d8c46c40dd3bc0977c2d2a14fdbe7"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "63bab30be538aea0c144f876a0cbdcf8"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7a6fbaa9f1371586274b2998f932b3ca"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "15730b0e826c1c4de28e34482e8e9bb9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c63172dcfb53dde42840a7d299e045c1"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4810a58c736e6bc6fa412c1ea4a0679f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "2a77b60674385e13975f8e184ff25497"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d33b2631fd6bf6109ff5edbd4f90089c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "3d3bfda56f2137209f197824e076adc5"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "84f004a90bd79762139575ff31a2712b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "ca0191eb69ed3bdb73127b8a1556aa67"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "2b750e35dd9b3311ff82a7fa4379cdbb"
  },
  {
    "url": "timeline/index.html",
    "revision": "89e73b4d3419417afa3dbbc416757486"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6d553f1e8f54ff7f96731beca0cc3dac"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9beeefaf638fb78d3e8bf50513ce8acc"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "fbe4bddc8d68d38a0df7063f15274868"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c76cffa34c29cc257ff6a5f8b7f743ef"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "19b90c938c1edde384067b842f7926a6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "5d92066314f9fdd28c84de650ac8ad49"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "acf20a9a753358bf9989f51a9ed4769b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f4f3b1d9b8257933cf1381ce2fef21cf"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "526d07aee0bb8ea467c964a8a0a3c020"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b7eceac1f4b5670b2ef5c91ba6bb829b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "905ada4dfa1b500f01d47322cd65afa0"
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
