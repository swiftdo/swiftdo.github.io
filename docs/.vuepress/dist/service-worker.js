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
    "revision": "1c1124235725ed9acff70cc8a29f27c4"
  },
  {
    "url": "about/app/index.html",
    "revision": "4ff7cb5a93fef8e2448c008e13180768"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d9cc7cafade4400ed46649743ce26eea"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9c9b8aa361e2015e3a70b9c94b240f58"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7f54d0dc9fe32e986f66f6852bdd1fae"
  },
  {
    "url": "about/index/index.html",
    "revision": "d1f28c105e80a1b37e6db229c0feca09"
  },
  {
    "url": "ai/index.html",
    "revision": "3ad1d271214e46806605d774f74fb951"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4239caaaeb8d87ac4253aeef543845a9"
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
    "url": "assets/js/1.a551f48d.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.bc9b3ca7.js",
    "revision": "2edecf2f68b44b39a05390ee122c3ff5"
  },
  {
    "url": "assets/js/101.e0df4dae.js",
    "revision": "c1180e60610de381171995a1bfe2336b"
  },
  {
    "url": "assets/js/102.0cd2e9fa.js",
    "revision": "4992d7802a587e7f3cc93668d3bf84e3"
  },
  {
    "url": "assets/js/103.0ff7b439.js",
    "revision": "9e9ba6e6a5f2b06d2a367cdd95abe49b"
  },
  {
    "url": "assets/js/104.fe3f4f8b.js",
    "revision": "cd1758c701ba18d7453eee203ea1d6e2"
  },
  {
    "url": "assets/js/105.15f8ffce.js",
    "revision": "f3fc89b403219a77c33a186d73647a40"
  },
  {
    "url": "assets/js/106.45ff6cd3.js",
    "revision": "311645b94ecb8186b2d267561758ae36"
  },
  {
    "url": "assets/js/107.cc80c4b9.js",
    "revision": "84df75d591a24aa4d86e3d97df580b6a"
  },
  {
    "url": "assets/js/108.37464949.js",
    "revision": "5e2437a85a75b9defd71a932313f798b"
  },
  {
    "url": "assets/js/109.5622bb3f.js",
    "revision": "c8ece226aca1c7269c779735a179a1b5"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.ba00c7f3.js",
    "revision": "189782a3c4353fa2d06053cb4e8aea65"
  },
  {
    "url": "assets/js/111.d5c9d233.js",
    "revision": "6d416b93ff401c045532bba7f1c0b4da"
  },
  {
    "url": "assets/js/112.4e42f4c0.js",
    "revision": "fe5a17ff3942931c50e8d3b10ae82775"
  },
  {
    "url": "assets/js/113.b9556848.js",
    "revision": "42de37518cfa40186a55e2a41dd2075a"
  },
  {
    "url": "assets/js/114.14913a72.js",
    "revision": "ae894155c52155380b48a942078cbad9"
  },
  {
    "url": "assets/js/115.1de71db5.js",
    "revision": "9e43832b23b1a8826c3098f340aadb4e"
  },
  {
    "url": "assets/js/116.245031f9.js",
    "revision": "318c11c1566a6db05c9c216737a214e6"
  },
  {
    "url": "assets/js/117.e25df4a2.js",
    "revision": "8a22c0dd3b599ddbb4ccd9932a6ab9da"
  },
  {
    "url": "assets/js/118.5177eff6.js",
    "revision": "b6e08e2d6007b9edd5799638aee6d91e"
  },
  {
    "url": "assets/js/119.8ee3befc.js",
    "revision": "baa33f5f2fe0eaeddcc12a0f73910421"
  },
  {
    "url": "assets/js/12.b374beee.js",
    "revision": "799db054f470f1a861df7847bce93c87"
  },
  {
    "url": "assets/js/120.b495945c.js",
    "revision": "02183a46c2475daa3663bbfe96f286b9"
  },
  {
    "url": "assets/js/121.9a08eaea.js",
    "revision": "d16b46017dc6a225955177e4e08079ff"
  },
  {
    "url": "assets/js/122.7961bba5.js",
    "revision": "0c25feb14bf4f34a1652dd18c336c53b"
  },
  {
    "url": "assets/js/123.916e4f74.js",
    "revision": "a053f8f800a80fdb023a94c217561d6c"
  },
  {
    "url": "assets/js/124.8104893a.js",
    "revision": "5b89cf9911d639fd1981f198b05832ad"
  },
  {
    "url": "assets/js/125.a7bdaa63.js",
    "revision": "a5c5ce34fa484fd865bc6cc3b4cc5e2e"
  },
  {
    "url": "assets/js/126.3891c74f.js",
    "revision": "1960e4cf25717e9593662a32701f6cd2"
  },
  {
    "url": "assets/js/127.ee81596f.js",
    "revision": "4b43248fff27dd6d60c5b529f81c1414"
  },
  {
    "url": "assets/js/128.60bfddd4.js",
    "revision": "9d3562dbc5bc8167b61eb446a7c2edb7"
  },
  {
    "url": "assets/js/129.2e5a6c08.js",
    "revision": "63e7f8e429d2924ef82eba1079c390f1"
  },
  {
    "url": "assets/js/13.e98bb4bc.js",
    "revision": "43c21373e6bc06b1c996bd147d8ca308"
  },
  {
    "url": "assets/js/130.3f98587f.js",
    "revision": "4fc42e2b6a967a9fbd458c28ecc4cdde"
  },
  {
    "url": "assets/js/131.afe1107a.js",
    "revision": "2195fc14cb5e1efcd8be35628800b8e5"
  },
  {
    "url": "assets/js/132.a3feacb8.js",
    "revision": "aba0106f6f0e33baf355c33cca53f013"
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
    "url": "assets/js/135.ef36cd98.js",
    "revision": "ba66c70370f1fb0e8390f59768ad6c94"
  },
  {
    "url": "assets/js/136.2691404a.js",
    "revision": "0611f8bee17af3dcc2782df41df0759b"
  },
  {
    "url": "assets/js/137.ddc3502c.js",
    "revision": "5fadf60a9d5659a0e0a4eeda2cad9b32"
  },
  {
    "url": "assets/js/138.59104cb5.js",
    "revision": "dbd18d746e0c317561f02626c58bae58"
  },
  {
    "url": "assets/js/139.0a19a988.js",
    "revision": "24bd064dea3b5b071358165e4bf26416"
  },
  {
    "url": "assets/js/14.c655ffbc.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.0063933a.js",
    "revision": "95d58dae400f933115cfbc7d5353ca7e"
  },
  {
    "url": "assets/js/141.32c9f560.js",
    "revision": "a66047c32141de1cf1e01fcf45ac2fbd"
  },
  {
    "url": "assets/js/142.5adbe7e3.js",
    "revision": "ae2e681a3e8a1dda2e813a059f27f90c"
  },
  {
    "url": "assets/js/143.ce8b5087.js",
    "revision": "7074f4bc7ba2787f99a72896452e0bc6"
  },
  {
    "url": "assets/js/144.624860a8.js",
    "revision": "f79a3214f34c4e8814eb8a1646d8fe74"
  },
  {
    "url": "assets/js/145.f18121c9.js",
    "revision": "279d7388d59100f9207a370a19ad8545"
  },
  {
    "url": "assets/js/146.5383d61a.js",
    "revision": "8f1abb6b2cec1bc712053ee4e700d649"
  },
  {
    "url": "assets/js/147.09260136.js",
    "revision": "58a548c5df4b4169c89af9b8e05ea3d0"
  },
  {
    "url": "assets/js/148.7ad21d56.js",
    "revision": "3d3d3e24e2e5dd72e52a58106e5c9a81"
  },
  {
    "url": "assets/js/149.c18bc33d.js",
    "revision": "476b166d05a50a0a445d8ec6f59b74a6"
  },
  {
    "url": "assets/js/15.0b7c9cc1.js",
    "revision": "38e5efe12d41957490cf41e5a189eb4d"
  },
  {
    "url": "assets/js/150.48d5919d.js",
    "revision": "9bcd75c59e8edbfdc5758ddef3093974"
  },
  {
    "url": "assets/js/151.5a91b536.js",
    "revision": "33ff9960de9f5d70b3fdeb49e67924c5"
  },
  {
    "url": "assets/js/152.c7624147.js",
    "revision": "ae6ac7626a6ed250fb51a7e47f49a55c"
  },
  {
    "url": "assets/js/153.693647a3.js",
    "revision": "aaa52079b63e10622f5de71bf4cd205f"
  },
  {
    "url": "assets/js/154.b4996770.js",
    "revision": "182af1d894ae4adbd63f65e276ab860e"
  },
  {
    "url": "assets/js/155.2d96bf11.js",
    "revision": "3a377b7f73e783bb957b32db60f061ba"
  },
  {
    "url": "assets/js/156.60f1eb59.js",
    "revision": "b5f418d160f5982775e7bb3ac97bfd1d"
  },
  {
    "url": "assets/js/157.52189cf1.js",
    "revision": "947222409fca76ec70f52185ab3b53b5"
  },
  {
    "url": "assets/js/158.37fb4931.js",
    "revision": "80a377638a965802b9c4108a6e05a0e7"
  },
  {
    "url": "assets/js/159.c3bc76af.js",
    "revision": "04e1dd9241c010be2a7aa79f4a92fb78"
  },
  {
    "url": "assets/js/16.a86413f6.js",
    "revision": "9e6a271c1bb10cf64e99f2030b941f05"
  },
  {
    "url": "assets/js/160.8ed2b5e5.js",
    "revision": "12c6eddcff0fea921b9eb0cb9324811a"
  },
  {
    "url": "assets/js/161.1847befc.js",
    "revision": "8e2fab09511782cfda3ced3422a2a4e0"
  },
  {
    "url": "assets/js/162.c4b2f195.js",
    "revision": "729a902069405f999b579f072f2f5a66"
  },
  {
    "url": "assets/js/163.5022879b.js",
    "revision": "58d6c477cca23c04fb81aceb584e9c77"
  },
  {
    "url": "assets/js/164.df0511b7.js",
    "revision": "48cbd5d681820492e34b7548b18d6c10"
  },
  {
    "url": "assets/js/165.729f2c7c.js",
    "revision": "946f40fa6b9149f17356b93283918b56"
  },
  {
    "url": "assets/js/166.cd2b7241.js",
    "revision": "708882fa909a40665f551160e807e7ac"
  },
  {
    "url": "assets/js/167.7ff155fb.js",
    "revision": "8b6885e5d1e1f8e1d7fdc4fb12f402f9"
  },
  {
    "url": "assets/js/168.64c8e422.js",
    "revision": "87e259dce1e7f2cfd49b64a1c158af93"
  },
  {
    "url": "assets/js/169.67cf552f.js",
    "revision": "2a3a6b884ee128cc9a52a74fdf338235"
  },
  {
    "url": "assets/js/17.75cb7d95.js",
    "revision": "9f15aaef1c8aea431710cbfdb337121c"
  },
  {
    "url": "assets/js/170.a217e66e.js",
    "revision": "6de90d6a1ed1874b967d1a2ce0787040"
  },
  {
    "url": "assets/js/171.da5be6f7.js",
    "revision": "6100e001dca5cad95c92a0ce7e409350"
  },
  {
    "url": "assets/js/172.dc92cd26.js",
    "revision": "f6d7f69e1810556dbc1c35db64614e34"
  },
  {
    "url": "assets/js/173.bc6c7241.js",
    "revision": "eb2ef132d979f7c967c3d4f2aa2796c6"
  },
  {
    "url": "assets/js/174.dd31d730.js",
    "revision": "6b8e50b9311bf39d61b00047ab3d7399"
  },
  {
    "url": "assets/js/175.04b1c249.js",
    "revision": "b61fdadfc3da9a27d177b90acc0557cd"
  },
  {
    "url": "assets/js/176.284d579c.js",
    "revision": "f6859b9e49e377fe76fc4eaf52d55395"
  },
  {
    "url": "assets/js/177.45316b27.js",
    "revision": "16cff3aacef67fc4b5d9884b963e8e1c"
  },
  {
    "url": "assets/js/178.56856211.js",
    "revision": "a5e9028dff66223986083265ee2e9d3d"
  },
  {
    "url": "assets/js/179.9831a7bc.js",
    "revision": "86da0b751b44d390f4eb045ce9f71e60"
  },
  {
    "url": "assets/js/18.001eb769.js",
    "revision": "a6b8038e3696d43587c2e5c560823f33"
  },
  {
    "url": "assets/js/180.4ea7c9d4.js",
    "revision": "d9fc1fe02f1818feabf42642700618bd"
  },
  {
    "url": "assets/js/181.1c353f23.js",
    "revision": "ccac5f1aeb3859e641a56435cd9ea6e2"
  },
  {
    "url": "assets/js/182.01bb4f87.js",
    "revision": "9f3373ae6666e5723989db8621391264"
  },
  {
    "url": "assets/js/183.ad701f66.js",
    "revision": "f4397ea965bcfbb371f8a380403b8e52"
  },
  {
    "url": "assets/js/184.427915b1.js",
    "revision": "6acafa66a8f7d815780e30bfba65ad13"
  },
  {
    "url": "assets/js/185.18664bd3.js",
    "revision": "d6e9bba374446af569353b2568bdd825"
  },
  {
    "url": "assets/js/186.d7741834.js",
    "revision": "d37e05b0111733000e96b5ca11656f76"
  },
  {
    "url": "assets/js/187.11f8d614.js",
    "revision": "362c9397716fe534c657a43f0af6784e"
  },
  {
    "url": "assets/js/188.e1b51c69.js",
    "revision": "126fbb5af4696ed251ac7637f8845460"
  },
  {
    "url": "assets/js/189.c92b9ac2.js",
    "revision": "78e02fb24d31547c7d9b161d39635fcf"
  },
  {
    "url": "assets/js/19.86e6f294.js",
    "revision": "bf687c341ce4e4aea0ce6e60befc5ac0"
  },
  {
    "url": "assets/js/190.7a26c81c.js",
    "revision": "bbc071cd25d06c106ed1429b05231fa4"
  },
  {
    "url": "assets/js/191.25988d34.js",
    "revision": "521397460ff25f9914c3cbbdbb3861f8"
  },
  {
    "url": "assets/js/192.29ff380e.js",
    "revision": "fd808bbb40c7ac82a0b259608e9439bf"
  },
  {
    "url": "assets/js/193.8581b3e0.js",
    "revision": "0071384ced8f1d5a5adfcda673734b35"
  },
  {
    "url": "assets/js/194.e3f01be7.js",
    "revision": "b2265ab4206d7765ee447d79336d0d7a"
  },
  {
    "url": "assets/js/195.151741f6.js",
    "revision": "9a219fba0ad59b6f9fff7838324eb2cf"
  },
  {
    "url": "assets/js/196.3716f0ec.js",
    "revision": "9bdd95bf98f5a55ad2e7c1f1a89e35d0"
  },
  {
    "url": "assets/js/197.52f8e8a2.js",
    "revision": "8106ff5f9275c2ac2b79ce77727a0bf1"
  },
  {
    "url": "assets/js/198.2c8801ab.js",
    "revision": "c8754dc1f749470bb35206ee881ce1c3"
  },
  {
    "url": "assets/js/199.cdd27f49.js",
    "revision": "92682d1d687e57e0c5c99baabda18ef2"
  },
  {
    "url": "assets/js/20.a1bde2a5.js",
    "revision": "cf202be16fae863c0a91217e279eb5bd"
  },
  {
    "url": "assets/js/200.ef172dc6.js",
    "revision": "df8b14488afa4ca86d28bd08dc85d989"
  },
  {
    "url": "assets/js/201.94ddacea.js",
    "revision": "635099c1997ee36289102bc05a2c9ead"
  },
  {
    "url": "assets/js/202.fcfe9354.js",
    "revision": "125fb561c91934460cf4fb842e60d4e7"
  },
  {
    "url": "assets/js/203.b67f18c4.js",
    "revision": "6aefa0ba39e65021a215d1d44b8ecfd2"
  },
  {
    "url": "assets/js/204.63f63889.js",
    "revision": "4b86f6af22c5cb85faf81daff38fc0db"
  },
  {
    "url": "assets/js/205.e93a80d9.js",
    "revision": "53fbfe858381d17e4de1f7ee34269cfd"
  },
  {
    "url": "assets/js/206.d8a85d97.js",
    "revision": "fd15738c07261e6e79f1245a9b7176c1"
  },
  {
    "url": "assets/js/207.90250afc.js",
    "revision": "600aae7659072df3a64c908940a7e82f"
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
    "url": "assets/js/21.ae4841d1.js",
    "revision": "99dfa242c79eb89747951998ebeb472e"
  },
  {
    "url": "assets/js/210.afd5de33.js",
    "revision": "a566d40925031ea770d164ea8200f451"
  },
  {
    "url": "assets/js/211.d1144c15.js",
    "revision": "990a652c8cce5ff91c68a235946be6ba"
  },
  {
    "url": "assets/js/212.bf8de9bc.js",
    "revision": "366ca2dcf27fe6ab92615ce8742b339b"
  },
  {
    "url": "assets/js/213.80c5a655.js",
    "revision": "813d8a1a78927eb5274e2996b1e0ce60"
  },
  {
    "url": "assets/js/214.18731125.js",
    "revision": "5606f0ef46ee7ebf8325b3c101049ebe"
  },
  {
    "url": "assets/js/215.08af8639.js",
    "revision": "cc45e8808ba53c4689700012974c0986"
  },
  {
    "url": "assets/js/216.75829dc0.js",
    "revision": "54e7e5bd0a93212c1995fa7b3442be43"
  },
  {
    "url": "assets/js/217.74c4d62a.js",
    "revision": "f607e1987974ca01a49acc8a25280848"
  },
  {
    "url": "assets/js/218.891fa4e8.js",
    "revision": "fd7f62a21c052014a2c9fe02cd22fcf3"
  },
  {
    "url": "assets/js/219.36a0b681.js",
    "revision": "f33f2d3524534fcd087742e9929019ac"
  },
  {
    "url": "assets/js/22.ef88fd27.js",
    "revision": "d0067c3eb3e4864fc30d0a91c6b12344"
  },
  {
    "url": "assets/js/220.bb970b83.js",
    "revision": "be4fefad2a1a74b69e136576e7b2c0f5"
  },
  {
    "url": "assets/js/221.bbb11873.js",
    "revision": "7bb11c8d9c577a330a820e5def528bea"
  },
  {
    "url": "assets/js/222.a1582612.js",
    "revision": "d7657c7787071fe2f30fc747bff6a86a"
  },
  {
    "url": "assets/js/223.cda90a54.js",
    "revision": "df044a569898918e7204cbedb63196b8"
  },
  {
    "url": "assets/js/224.1a946310.js",
    "revision": "d20fa37a588e6c2d0085cba8ba908c26"
  },
  {
    "url": "assets/js/23.51ddcaa0.js",
    "revision": "302934f4634f7be570bba0c8a90ca064"
  },
  {
    "url": "assets/js/24.d1aa06c5.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.b2ba8e9d.js",
    "revision": "f1fcf286f07d98d2c3683b9114855ead"
  },
  {
    "url": "assets/js/26.5099a8af.js",
    "revision": "1abfebe0bf882fd69a2487c567558e4f"
  },
  {
    "url": "assets/js/27.bb391e34.js",
    "revision": "53f035db2f7796a0a901969147288a08"
  },
  {
    "url": "assets/js/28.04a73919.js",
    "revision": "585f830e75da697f26bbfdef208f82de"
  },
  {
    "url": "assets/js/29.c3246eac.js",
    "revision": "1031ca89ef260ff618ef9fedf4cc66cb"
  },
  {
    "url": "assets/js/3.03b8f943.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.a8c742fd.js",
    "revision": "5154373fbc89c84b00b8fc7aa54047ab"
  },
  {
    "url": "assets/js/31.77167430.js",
    "revision": "0f30418b97c928b1bb54e15cb2314008"
  },
  {
    "url": "assets/js/32.40da5fef.js",
    "revision": "5cba1a12bc66b9bc479f135bedc5b317"
  },
  {
    "url": "assets/js/33.7138121a.js",
    "revision": "70d4aac0a45392291bca0d1c2547f422"
  },
  {
    "url": "assets/js/34.d1630693.js",
    "revision": "b4b72957488fd33143cfbc87e9d14600"
  },
  {
    "url": "assets/js/35.cec93a6d.js",
    "revision": "1635a117cfa629974866f7c5e080d17a"
  },
  {
    "url": "assets/js/36.1a93664d.js",
    "revision": "ec7106e52d1225c61db6926132867d76"
  },
  {
    "url": "assets/js/37.46b89bf6.js",
    "revision": "a053ed00a55f3c293a67b1d2f04481c1"
  },
  {
    "url": "assets/js/38.7bd21d49.js",
    "revision": "7610e2f432721143a81fd6cea4ee6faa"
  },
  {
    "url": "assets/js/39.5aad70da.js",
    "revision": "d480864c0da5517b4d2fa5d7629480a8"
  },
  {
    "url": "assets/js/4.ec8238cb.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.92b6a123.js",
    "revision": "3ce8b364176f59620a006b5738803f96"
  },
  {
    "url": "assets/js/41.d03918f7.js",
    "revision": "5f3feeccb2fa0ed8d0c0490b46503d4a"
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
    "url": "assets/js/47.d9266606.js",
    "revision": "62d1221bb3df3b9af887d2f8dd62ee20"
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
    "url": "assets/js/5.a53ea690.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.346bc3da.js",
    "revision": "0d483d6af638e47c4d6ec18dc4ab99dc"
  },
  {
    "url": "assets/js/51.c7d00a68.js",
    "revision": "06a71b7c7cdc30d021943a98634f871b"
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
    "url": "assets/js/54.18ed9f48.js",
    "revision": "a36b239a77c3e3dd2852ebc0c2369995"
  },
  {
    "url": "assets/js/55.d4e6c173.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
  },
  {
    "url": "assets/js/56.2efc2837.js",
    "revision": "524c126932b339e3aab9c3120fa95f68"
  },
  {
    "url": "assets/js/57.60edecb3.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.b28f7cc5.js",
    "revision": "3befe225f4836f2ff334322fd0b1c56a"
  },
  {
    "url": "assets/js/59.0901c838.js",
    "revision": "890553d830c83037f433bb95afce5e3e"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.d0f8df08.js",
    "revision": "d10f8c14e2ecdda820ea551c533f5241"
  },
  {
    "url": "assets/js/61.81345526.js",
    "revision": "dc9d23d17a346824afaa8325e0b56df0"
  },
  {
    "url": "assets/js/62.34444ce7.js",
    "revision": "93b2fd6de52c4ac057f44464c83a2eb0"
  },
  {
    "url": "assets/js/63.904a1287.js",
    "revision": "d588035567cd9b3e6fd815d2132aa050"
  },
  {
    "url": "assets/js/64.21451af2.js",
    "revision": "ec53974955b680f26bc521fd58954147"
  },
  {
    "url": "assets/js/65.eaa0a968.js",
    "revision": "1f823bef6581dbef11a10309e46c1e18"
  },
  {
    "url": "assets/js/66.5dfdaafc.js",
    "revision": "9bbb87eef9500eede10a20fdde6eb28d"
  },
  {
    "url": "assets/js/67.5fa1da40.js",
    "revision": "22d2da47c9a75ceb7c69874238900948"
  },
  {
    "url": "assets/js/68.b79e53af.js",
    "revision": "148d092e6ef6e2334d81905da3f5e147"
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
    "url": "assets/js/71.1fcbfdb4.js",
    "revision": "5ae6bb9f51baa74d0298df45fe396e77"
  },
  {
    "url": "assets/js/72.9c1f3666.js",
    "revision": "07b4cc86248924706eac40439029c612"
  },
  {
    "url": "assets/js/73.fa8b7c8b.js",
    "revision": "1758d8bc500d10a49400a4113077bd06"
  },
  {
    "url": "assets/js/74.04116cfc.js",
    "revision": "ea646a5fd021b9af80fcd46b4b3064f8"
  },
  {
    "url": "assets/js/75.9b269e69.js",
    "revision": "433b5e90bca9e7c66497d57a2f5123cb"
  },
  {
    "url": "assets/js/76.28493260.js",
    "revision": "7d48a96813d6cdc577c998e27a49f94d"
  },
  {
    "url": "assets/js/77.6b2e973c.js",
    "revision": "2091e8e7dbd8d0b1ddd6dff36344ea05"
  },
  {
    "url": "assets/js/78.4e58493d.js",
    "revision": "ef2e77ddff9f8acc1fa60f648d91e887"
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
    "url": "assets/js/80.ed77a603.js",
    "revision": "d71050d29091262136864d319309f477"
  },
  {
    "url": "assets/js/81.146e864e.js",
    "revision": "92927d915811d48f285c19902a36353c"
  },
  {
    "url": "assets/js/82.b58e576f.js",
    "revision": "aaeffa585a34bda6777fd8ce7457ca80"
  },
  {
    "url": "assets/js/83.4bed7a04.js",
    "revision": "af2b1032e6154620e52c98fc7c977916"
  },
  {
    "url": "assets/js/84.46baa9d0.js",
    "revision": "9d0e4ea9d7bdfcc7df3488c3bc55d165"
  },
  {
    "url": "assets/js/85.bb610f56.js",
    "revision": "3c87731ece31a1fbbe5fb8bdddc4669e"
  },
  {
    "url": "assets/js/86.41d25f2b.js",
    "revision": "de05b93e4a8830104ed0f717931e3dd1"
  },
  {
    "url": "assets/js/87.1624dbf5.js",
    "revision": "9b8b171e93cae2532477ad9cca1aaca0"
  },
  {
    "url": "assets/js/88.6b210c51.js",
    "revision": "f5e45f12b173cf1328f7656c81c71006"
  },
  {
    "url": "assets/js/89.abe8ae22.js",
    "revision": "2ba1933ee242e04303de33e8ad66476a"
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
    "url": "assets/js/91.f4dbe90c.js",
    "revision": "bd3b1d200d6526599c2305a0f2704fcf"
  },
  {
    "url": "assets/js/92.74b71eef.js",
    "revision": "12a6a9b0157f26ece95c8e1bb4e4cab9"
  },
  {
    "url": "assets/js/93.551a595c.js",
    "revision": "a5936797caa3db79579f89e575733dfe"
  },
  {
    "url": "assets/js/94.6c6b0b66.js",
    "revision": "4e86c97ff13264f696644c0a1a7feb0f"
  },
  {
    "url": "assets/js/95.3169b572.js",
    "revision": "4922ebe330710f7a5cde46a4016e6ad4"
  },
  {
    "url": "assets/js/96.234d5a49.js",
    "revision": "f550a712763be27e466546f187339185"
  },
  {
    "url": "assets/js/97.50699a69.js",
    "revision": "8800c3342aa47c1050b3a10c7b474ab9"
  },
  {
    "url": "assets/js/98.71c20909.js",
    "revision": "8f0dd584b43333c9c53cc558eb6989bf"
  },
  {
    "url": "assets/js/99.0c58f354.js",
    "revision": "3ea634897f3d5993f5a685c6f27930b1"
  },
  {
    "url": "assets/js/app.d7700844.js",
    "revision": "9c54c37eaea5788c19b8bc7f90d4f2fb"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "082ffa2e0c1981328a33b30f5911c0ac"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "734d38ed65eac070de03e326fa27376d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8bde95ef56bb9f699d0a003905575325"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "bf7d85f6168bcb4f6aabe05607aee0a6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "cc94633d19a6f997b8e3e92f7192d55a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "cb4c61649d37e0ab0ef0e34d210898b0"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4f32da4ff214a2d8cada21b1995bb992"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5ed993fd3c7ccb4f18bc29138c26ba85"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "f0b96d9c665ad86e820d7f649d18a7d6"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "3325e320efa4100077aaaabb22d32529"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "7471767047765e5de937f7958d31b5bd"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "0e54088850b73e8627e0858b1806710b"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "cfa8bfa67a1de3847ccad7605a480ca1"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "3934ed75c0be279d5ea38213b59b20cf"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "80ad6beb29c9da93ad05138567b2d172"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "909ee4c79628ecd962f9923b6303d679"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "6d103cfcad52d39c5134e9e48eaa132b"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "5528087181509fe5435016f4d86c0785"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "00b746a4f27d31d775fa0d1de9bfe11e"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "61a618f7e742d4d35db805c4654b3a56"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "4b66c1ea3e8e49e30fa9f9257ed6f244"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b578b24fafd2a8dda0a67cd6d53f074f"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "c7fad83ecc7a660748fd2321fd5a3ba9"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "0e48a95590747980503ea3f8c783ffd6"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "811c9096881cfb5a6b901be83326e1f0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "bf2527552108e1a62cd0e2d623061f15"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "819501107cff1fb5be40f3e647df1076"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "a29ed44eb84cd0faecba4fe8258d57d0"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "1ae7a51de8f65524eb452d5b826e3c1a"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "db000b3835f38b27695171d77d54a6dc"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "0e100bf723ded45b5772d40f0123cc98"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "a3d58993bd4eb679c02c18b88f47b8dd"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "a312fd6395fc5962ee691c997d71feb2"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "2f070a5895bdfa9879aaf65ab90c6b9a"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "0b84c8832a0ab723c144f4df5757494e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "2323661b41e9c5c89eb7b76d24136666"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "6864ac0ad1edb35e401914d958133de3"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a4ca4d95260503a60a0c8eb0d4c28264"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "b60f0acec34327f902029436a1f85af0"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "fa227afa97640ce3fbd2a749b70313d6"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "d71cd36c363ee8f6ebcede2d4354fdfc"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "30a87a82a09a8ca7bf9cf40d39efcea4"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "30d2e6f242d58d70b0ec2d8e6fa5fdb1"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "7fbcb3da0fd6a0685976bcda22bca5ca"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "e9381522e796ef2b22e7bb2ba95c8b87"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b359f0636b9ac06f8d6a58412446ba98"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "df32c0ab6a115d329e670f070784ae73"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "0e7aa89bf85dcc95a866c1e2193c45da"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "530777a75da976068d3864f9d865d0fd"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "4f26031d0bbea3931083d7315a31a230"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "87749abab51026ab3ec56da3b7069afc"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "746811efce4143f7718305a15aefbbb8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "9b48d7fcc22ddbd3e044b5fe70b89143"
  },
  {
    "url": "basis/os/index.html",
    "revision": "394ff33ca6ee7db5688c1935dbb15ea3"
  },
  {
    "url": "book/index.html",
    "revision": "d066f42e82b3e1ea629cbfe504794ac9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "607098bba279a463fd73fa0df20dd686"
  },
  {
    "url": "categories/index.html",
    "revision": "c3a2bb01413ac7a8c3455c2607aa9ded"
  },
  {
    "url": "figma/index.html",
    "revision": "1b298c258fbe90fa806cc51508563a61"
  },
  {
    "url": "flutter/index.html",
    "revision": "c5e82907c46b6b1f4da2b42e5fe2bca2"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "df9c4a7b57274a4735131db7ad7d6eac"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "352a6583bf960fb4ad7643d626015642"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "17dc1b3ffe9d647b3b121a884d5a6428"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c79c6c46aa3dc1fa1b8df97381cb8bf5"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "80b10c4a9d3d05cc76338c3f65e2a437"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "938149168a841c94f72d432c7aa9e337"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "82cf4bbd4a5b4fe5bac856317cf2675c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "cf9291dc07b2649e2205a18f4f8ae934"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "671a7b61562e011d28f9815baa20c7ca"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "efd2ee72cccc58f0c8d9af2e4262bf73"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a7a0d188facb2057c0c40b172ae87f84"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "dba7e4d85a3a5db8e4702cb11be0deef"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "3e9a94437c008e6bc8e94ecb9ac00ee5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "112d3b198bf284fa130742a56e6b1bb4"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "12f863aaca3b8e422715c3954fa7e5ef"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "536b850a3f7d8f914cd495327e525183"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "2fb535bae5083841d1ce2bc8b2257e0a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "fbfe0df3dd954595cd1d2635156fd6c1"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "0ea5d08d19b0c59cdc0d668b1fa4c360"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "e744c841c42e745908ee367e7c366a03"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "de7fae3743e7ba9d5f0b4fc59c952335"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ea25025a1d3f655fecd6933fabdb358a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "56d2349cae6416cc0b6ee8d16a81ebaa"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "cca524d175fd66e976cce89e01777b6a"
  },
  {
    "url": "haskell/index.html",
    "revision": "f07183d923af1e26c94745b5a96a5b96"
  },
  {
    "url": "index.html",
    "revision": "1a0d2c7a5cdb3636c2c0909717432637"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "817fb51070b370130a8ff2273ee5462c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "5a8e4ba29e68d2b239e6073760e568f6"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "9478054216510d43f4351a90300e2e2a"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "fa70fcda09f0705b0020c1cdb4207919"
  },
  {
    "url": "python/index.html",
    "revision": "1ad77a7c75703989b8af90b39ba7aa01"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "dc0a87a8b279f4069c404e8de8a569fb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e6a6ef5ad70447779f6b4bf89e279eec"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9cf53e13b2c73750653ab4f919265680"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "36c3c25f41f78bc41631ab2cb137aaa1"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1c5d8ef22ffb1f2d92275e0565813fdc"
  },
  {
    "url": "swift/better/di.html",
    "revision": "65d452765db17893910d3a665494acd0"
  },
  {
    "url": "swift/better/last.html",
    "revision": "0925a89d1a981c446b8d199c12a51ed9"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "9887a29915e2169e444d7ee7243275a9"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "b7f88f2a7167c9684db6bed8a97e86cb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "81baa0b356af619e6c3738c6b033f6a0"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "db8436a6ef05531d2a9a922cda7369b8"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a234ec32a461a1d82100a24ca7e733ef"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ed1786be601fb941f56dbe5a634cc23b"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "1718d51cb82f38df838d7bf22e3afaa0"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "e5c70c4dca495b2df2d2e8866c37015e"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "318a56a6de50202a98834f50a9379f9f"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a48a43d14492b4ea4de8b6b3822a72ca"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "23a116bd39bf1235ae34da1c32407f7b"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "430232f0cd4a4a3208da1c513ea949de"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "9cbeccc8789d6a37b31815930e926295"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "98ce425adc59e69540f90c6ae306b510"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "0edc59115f581dcb98c277bcc5e57cda"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b702e62a242ecb98fed9d55ad6ebad51"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "486fe469f95d3735011b7f8bc804d9df"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "c45edcfc1a31c919cea528680c9854b7"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "bce233ecf2a7982dd7f60975690fd7f9"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "0075d5b4d9291fb3bb7a7b183d6d3edd"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "08b2b991890f7d061c9757173a31ced6"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "51362711cf4b2035826e90b359dab0cb"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2e168d9b02184ca9eae9bbef42de85a0"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "2a0ff97f591b12b992fe6a8fda8effc8"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "9a26f4ec41b9ae44dbbebaab10ee010b"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "d5349a8193ddc1f65d4bf238ffe2c297"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f641351de39aebd696f818b677a72826"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "7397527a3fed17d59615b6fc0f4597d7"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a814e86205f7ac64a16b37a263ef4985"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c0f8b36dc87685cb5abdf72ac7ce4738"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "85a9bfa0bb375b40a1f06980ecfcd344"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "6d3715045c50f92cd2d164b4082c0482"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "51325844fda6e8ed9e4a24f4b08ca544"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5059a41446b5678940f7f6b945871c4c"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "32f3e8336c5bafeb72f0049b3504270d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "fc0d5181e854ec2cc80a2a85b25caa05"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "0b64f4abc5bd13484a0cb2060d151acc"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "4ee32191204e43368a7a9bb658750740"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "13399a59142cbd53dfb3eb4ba4a5601e"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "85e92ed966b345f31428fc1e10878851"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "2974677172fb55a0ea0e24adc6208baf"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "e7863912c84e9fcc2dafca226d7d33a6"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "65adc596b1f3fd4bc7c0cc471050ae40"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8e16b17e8ffbcc68ca40dd4737b95b2b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "ddf35e06806608ebb66cf86df10b5710"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "57fad115ccddf16bdb4f5577eb585e71"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "6290f01fe37477571ef49ec05b2596a2"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "6915009ddf548be75fd4dc7cb567865d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "2fa4a4bf25b20d52a47710bd881e7d15"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "52bb6b0e1f5cb5edc48b913430a19b5b"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "24c30826d9d44a7cdd8c7c082f6be84b"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "173e23c0c2ed7abbd47673ef20b63059"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f36b1821234644281575a9ebf849d533"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "31bf1ef403bca2ff9f9a29efba6a69ad"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "6833c58bcc792fd674fe62143165c565"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "b9b5f037f987f4937886dde23c807c2f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a66ed87508e5212d5cfa5cb7d2ebf621"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "c1851212caec04c0e565e63a52301ee1"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "a298c6f67f0b4e43610f0ea9b15c34b5"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "22dd732d3d03f388ca8b9cda5cc46638"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "7c60843d83d89940f42d885d70f14792"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "c87b52c44f069cc7886b80ae649db6d6"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "eb9ecde63072d6bba77b4e2dbfe59056"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "dd56da9c6d116fc6bdc18bd8c734d698"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5d80e9bcc889c7764a4d41390f34726e"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ff52e574ec895756d62e2f5db88f5813"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "91159f81e2446867febfcfafaeb14218"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2cf5da354370c3674468dfc8d0ecc51a"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c4d5a05fe8b0569bf047eded093e1531"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "55a44be1dc6376d36704c2665143004e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "df6b58a1baee721062acb41961a90032"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "53a1bae4cfa136587948c5a04bbf2c8b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "363df892949e9047a3a4d24d6ea70c0b"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "f5aa6354825c1b5446f3248fe721b531"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "10ca53a93e8cc01768506d215f914291"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "d41081f3d31f2f3b16ac760d19d50d47"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "20387276564ce356dd2a43ca6dcc7d27"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "013d653a9a5864f2badb9ffb9ccb2855"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "3752b72e4694f1dfb3686132ceff394f"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f088297dff5b46d352fb7b63f23b1821"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4328aaafa315efdacc9c71917040adc5"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "a8d4c0cc7a467475226a16eec56b500a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "189ba3355e67f0dc6c7d69f65759d727"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "13797602bcf04ca31bf6bb9d512958bd"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "16438dc3eff060eed5a0da1c7906f686"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9a0a6836817942c4465bca2a511ba785"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ddb518f5da533149dea277223a19a7d8"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "541828eaeba7cfb6a7e0a2c10cc35b36"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "5275c8270d5a844406c05ed9571a1de4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "91491c0533fccdba0b834463c1e2ba61"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "653ef2a3c295d42b9f7ad90dd9eb81e6"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ef98e4f4044cf277961f1dcb8db70038"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d0b8e112d46edf93ca51593b5bc1da8f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "12b025d3f003e5a6f66acdda4455a7f4"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "0a0f6d5044580835d04f1659db4be318"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "779eb1aef4b57f9015e2ef8d5fd9e0b1"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "6d13ac376788aeccddd6cf6bdc4fd60c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "3d1490c04594488d571e5a5c1637e4bb"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "aa5f55fdce6cf12209ad587702706882"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "76cf93c95506571d8461ccceb50abab7"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "5bb78dd03c0118f74ea15dc3dd3fe6a5"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0c069a1318e585f5018e4cd77e9f9269"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "88ec7ec653ad48266b38475b83b27cd8"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "f4b605d08409abe27e5a2d4a0148d6d9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7ab09da474b794014eeb2253308b56a1"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "9b27867a1b80fdfcc318f403cb9f018d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7a2b66912cf844fb07c3e223f6e2944a"
  },
  {
    "url": "tag/index.html",
    "revision": "f6fd5c01a84d3c26447fcff6346dfb6c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "7e7f3a15a66689eb1f80fc25aaad58bd"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7ecb4812d24441746e403c57ecca41a9"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "2bd103e872dde25dfc40bb97b4989dc3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "0d12efeed40c6c8ad846bff6e99e3ec8"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "c7d0efc12a597f22d4fcbcd26f4b0e28"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "319ddddef4212815495eed44506c5baf"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "f3d8cc8d708b64eef0109e2becc3b7cd"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "035f9cf5811659dbee37367820dbdc34"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "43afb6dd798129197f8365c9c3acdde4"
  },
  {
    "url": "tag/json/index.html",
    "revision": "fcf1da10cc69d1aa2f18077708caa974"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "821a0c5accb8d7aea280ca96a27f5be3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "82a6d0ee354fa584677e8692bbe74479"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "c43274dac928438cdbb7637302d8caa0"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "8b29bec0cb2406c4eda4557168a9f9e8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "a241bf769afc500848351cbcb4eaa6ff"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "028bac3a98c334bf5098020c7acdd135"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "61a4b77b6ebcbe253eb669ec05422e49"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "98636256b8be5d482dfeba1367cb2d77"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8e43861cf5934c66ebaec8077e47c9fb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2ed795ce86aa739c05ea1b76ea88ab8e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c3c2e3724c43b61097425526afd51418"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "7a9a8059d0f6d2b8a85d24ac07814174"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "602813dbf34ef41f4aafce7a68e40d16"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4ab067e4ea89578f3c9eed7dffcb1932"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f0ee6ec3872170eafc0c2b8f2b3a17ea"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "64d303a29d8b1c091c1cffa85c003848"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "cfa11932b8f7c965790af9372dc90a88"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "37be4dfd9e215dd118fac0b14ea76162"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e43f8c9306fe72c15b3b290d0e74aec8"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "8833c496c8604b67f42fbf71da3532c9"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "adedaae64316aed8de76f965bc553776"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "53ec194cc851ff97afc3ff9b41664638"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "52165bf1d7262bf9735ad5c00fc77a4b"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "2ef1b5ee1ca6a5d5bef276d73a5d6f86"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "329c00c8320efb49d039a7507e186692"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "29560d2fe128e703c91f482a2a385976"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "4b333ce05009aa848499e106c3f79c9c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "60f196e50d55d6c3540c90dee5c37064"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8108b6f6cb63daf3cc76825249d7cc15"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "1ffecb9ad19adb880aae21eff7aa1654"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b9cf721f5b5d213e5793e21947030920"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "db829792a711f5712e0b502741ef55eb"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ff0af2e3d372378323022634b41bcc3a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "46dbac1dcd247a95092c2fb7d17c8d84"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2af0e4ae6909d6c3fa8f500f591c2575"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "64ac1b55cacc2a7a60a4701a52ac3a23"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "27db402a36a832e23b7dbe99b6fe84d8"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "703ad20ceb9149639b03edfcbd1f705c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4740cb9c3a03ead0e244188626f16d5d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "21ddcff5449e3515f233b9245ea711c3"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "fd8e36ab4f1f113df5e3d4cba329969a"
  },
  {
    "url": "timeline/index.html",
    "revision": "53880a45b6524dc687ed9a6c14ce4924"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bd5be6082fc8f9bd85aa21ca1807af56"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7b0bb0ff40ce76705b4e08014a0898dd"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "6ad57a861356815d51fbce2fb2e9078c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a13a4fb3ce61d0c1d42cc251cc339807"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7ba1d090ae2ecdd146335a22880927af"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "0fe829190326b1fc300f2ccf40553378"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "ecf8f8c1c2492b576477ede27f62e124"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d1e176faee4905aa34412e31bf114426"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "c105255352c4eca97995ff9359a885d8"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "22d5b90019115ed23d099fcd2c57c195"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ee863df6dbcf8f83ff52059bcb829d29"
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
