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
    "revision": "06d0d733ed11c6a2b3fa2935db8fb7ca"
  },
  {
    "url": "about/app/index.html",
    "revision": "97ad29dcf7c0bdb6d90b56fb7f7bcef0"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "944d18862d8e2db9066240e6a7884d85"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "6ef4f141d6f3306e8dce2b7ea2b1b5b9"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "07e0ecd13e808e5c4f06003e8bac1da0"
  },
  {
    "url": "about/index/index.html",
    "revision": "64f989de2bf408a07f2ee2a7fb133569"
  },
  {
    "url": "ai/index.html",
    "revision": "b6c7c39c9b94c1f38bf11dcb8452da68"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a02ede0353b13e3dde3b552ab7899f4b"
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
    "url": "assets/js/10.36990aa5.js",
    "revision": "c2ccb74107a0f86b6e171db9ce54700e"
  },
  {
    "url": "assets/js/100.d1f95b4a.js",
    "revision": "5af2f8b81f244f7b84c24a7ecea9dd77"
  },
  {
    "url": "assets/js/101.3ffa42a7.js",
    "revision": "5d1df566ea154a27243290686988f961"
  },
  {
    "url": "assets/js/102.7ec5a46c.js",
    "revision": "7963989e29171673aeb59fd1eb5450b6"
  },
  {
    "url": "assets/js/103.1307acc5.js",
    "revision": "3e9c245b3e89165e02faca52373ab4ca"
  },
  {
    "url": "assets/js/104.50b87535.js",
    "revision": "072c790e5c8e927644100d005c426ad9"
  },
  {
    "url": "assets/js/105.5c515075.js",
    "revision": "32009be5f11807ea2b47de709a7adf72"
  },
  {
    "url": "assets/js/106.ac6f8121.js",
    "revision": "ffd371aa9dc4b56e432b78ddb0eddf79"
  },
  {
    "url": "assets/js/107.aa3ba668.js",
    "revision": "bc02f9f1063da7fb44b1b53090b2f0c0"
  },
  {
    "url": "assets/js/108.09ed29e9.js",
    "revision": "c598460239886d8698d8335a20030435"
  },
  {
    "url": "assets/js/109.acf67c54.js",
    "revision": "cb12c9e996ec6a2bcb0d285afd10d7b4"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.323327c8.js",
    "revision": "de63b7c70d6c3856297fb4390f0df84c"
  },
  {
    "url": "assets/js/111.749ca7fa.js",
    "revision": "1e2bef341c0c029da2a3f338cf049b8f"
  },
  {
    "url": "assets/js/112.d56094a4.js",
    "revision": "365bd951e5f8969e536c5f46d7cb467d"
  },
  {
    "url": "assets/js/113.837b583c.js",
    "revision": "c5e87d6c9beb7e080a41c7797af25ccc"
  },
  {
    "url": "assets/js/114.a7d33ac9.js",
    "revision": "dd9642023437c421b827c4f8c6f6f363"
  },
  {
    "url": "assets/js/115.1eab824f.js",
    "revision": "1c300812248c5e433f2c5310ea4a745b"
  },
  {
    "url": "assets/js/116.3467615b.js",
    "revision": "bd1dcb2de0216a8bce0fc29f8093d1f3"
  },
  {
    "url": "assets/js/117.ba7e800b.js",
    "revision": "efd4cfc5610d72d229ed781644c165c0"
  },
  {
    "url": "assets/js/118.0c9c5bb8.js",
    "revision": "6bd4c7c545c23eb7a8ddb0abec7d0045"
  },
  {
    "url": "assets/js/119.6ec77962.js",
    "revision": "7c3cfa90dc868bb41dc0067881d2fa41"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.8697e372.js",
    "revision": "ceac37943d00050881079f5fe84c4a96"
  },
  {
    "url": "assets/js/121.157ca8b1.js",
    "revision": "6b91dad79007b5677680eb8a1f123d7f"
  },
  {
    "url": "assets/js/122.5cb0c3bb.js",
    "revision": "8179af628761bda046aec543dd4da7b7"
  },
  {
    "url": "assets/js/123.406b89cf.js",
    "revision": "ffe4da3d2ac01a571db2803060b4042a"
  },
  {
    "url": "assets/js/124.56662867.js",
    "revision": "f19c451195d9ea314d8b964cbfcf4d1d"
  },
  {
    "url": "assets/js/125.387f5661.js",
    "revision": "e62d3f65d62aeda40b8fa26f1fc7b6d1"
  },
  {
    "url": "assets/js/126.650d9b01.js",
    "revision": "135c877edd90ab9fdb993db27942125f"
  },
  {
    "url": "assets/js/127.4f0de641.js",
    "revision": "72bfd131542e12aa9f342baed673e76b"
  },
  {
    "url": "assets/js/128.cef937de.js",
    "revision": "52e5db9d76c43b585a7f1e7ff8ccb25c"
  },
  {
    "url": "assets/js/129.d542994b.js",
    "revision": "35d2e833ae358b70bfac9badaee00178"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.6b321f87.js",
    "revision": "a937c34db35cc490bc380e8389924d7f"
  },
  {
    "url": "assets/js/131.05e2cf1a.js",
    "revision": "b21c42eb4eca0c0ec2fc7240bf5e5337"
  },
  {
    "url": "assets/js/132.883ed828.js",
    "revision": "17c3be8c0012452fbbabb225eb421b80"
  },
  {
    "url": "assets/js/133.9cb19be8.js",
    "revision": "e6cc3573087c4419e5ba0b071347800d"
  },
  {
    "url": "assets/js/134.6a5f88fc.js",
    "revision": "5c0d0d8793f307520b6c52c851e08619"
  },
  {
    "url": "assets/js/135.b701b3ad.js",
    "revision": "8b7332768c9dc18efdda83e06258fc8c"
  },
  {
    "url": "assets/js/136.c32e37ba.js",
    "revision": "9aac7708dcc2af0c7389b217e4ace48a"
  },
  {
    "url": "assets/js/137.4637eb21.js",
    "revision": "f4a1c0750b08c433f6ae7759b893b453"
  },
  {
    "url": "assets/js/138.c76964c2.js",
    "revision": "0982b7d49daba8c67ff2041d67b3c662"
  },
  {
    "url": "assets/js/139.3a25a170.js",
    "revision": "64347c7bda2b7633f8c2a137ad2986b6"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.d55d590e.js",
    "revision": "72fa1fe49ff9f0aa5bf2cf18407a622d"
  },
  {
    "url": "assets/js/141.dd766b1d.js",
    "revision": "a8a162e04c617417f1c150a146f9a19e"
  },
  {
    "url": "assets/js/142.7bd9305d.js",
    "revision": "358d46c9720c5fbddea9f70d4e54eac4"
  },
  {
    "url": "assets/js/143.8f55ceb7.js",
    "revision": "b6bc8fcff830913a5cf6386c9531b949"
  },
  {
    "url": "assets/js/144.b0c4cc4f.js",
    "revision": "a632eb8ecbbeb83b275c00ece03d9a81"
  },
  {
    "url": "assets/js/145.755eba3d.js",
    "revision": "3c603d484cc58c7958e799af3e182e28"
  },
  {
    "url": "assets/js/146.90f24ca7.js",
    "revision": "6086ae319edb82776ce72f60ea66805c"
  },
  {
    "url": "assets/js/147.13bf762b.js",
    "revision": "03190ff04b08fda6ce1040e01840cec2"
  },
  {
    "url": "assets/js/148.0668c7bb.js",
    "revision": "e2110a5e669d4d62de2f369077a8d344"
  },
  {
    "url": "assets/js/149.3175c863.js",
    "revision": "434759fe4827e2b02d4026b0fc96d4ae"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.3079b98c.js",
    "revision": "ff42d7f6603d8e1f0b2830b9255da54e"
  },
  {
    "url": "assets/js/151.a82678b8.js",
    "revision": "e19078c4c32bd625ec50cc4a06dc9bbb"
  },
  {
    "url": "assets/js/152.45d1d8e1.js",
    "revision": "fcc0fcceb7f96adb584ef78f15c263b2"
  },
  {
    "url": "assets/js/153.dea23085.js",
    "revision": "aea7dcb542e4205af310a1d599d49104"
  },
  {
    "url": "assets/js/154.aa93097a.js",
    "revision": "2155c8ba9f6b35e339b7699bd4022694"
  },
  {
    "url": "assets/js/155.28cd6241.js",
    "revision": "24cc9dd1eb8db72a1e766f7ac184940f"
  },
  {
    "url": "assets/js/156.cf43ff43.js",
    "revision": "ae6c8830eb10b6c8c1a0fe5089b5bffc"
  },
  {
    "url": "assets/js/157.f4bf701a.js",
    "revision": "af4a227139e3648a1c32a390fc95817f"
  },
  {
    "url": "assets/js/158.115f1c65.js",
    "revision": "ef98dbce034d0aaa758377c13baab72f"
  },
  {
    "url": "assets/js/159.1b2d5805.js",
    "revision": "5c873c62963f561aa5e87e57f17bc358"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.fb2ef31b.js",
    "revision": "0c6890fb68e6c8ebfe65fb4a71604f08"
  },
  {
    "url": "assets/js/161.4606fdf2.js",
    "revision": "db453fd9e814ad365044b082f815ae9d"
  },
  {
    "url": "assets/js/162.8f44af20.js",
    "revision": "751c32c827af17c3c33a689aba3a2729"
  },
  {
    "url": "assets/js/163.bae1b32f.js",
    "revision": "113a432d338886b5de163b3539f1707a"
  },
  {
    "url": "assets/js/164.d7792fb4.js",
    "revision": "a0afb60b39608444467501c9e498e7d8"
  },
  {
    "url": "assets/js/165.a0367b28.js",
    "revision": "e4d831975eaf5d4e78d1e0028fc5c95c"
  },
  {
    "url": "assets/js/166.fb110428.js",
    "revision": "592bb0562b9915cb2d20918f941c641f"
  },
  {
    "url": "assets/js/167.9bc029b6.js",
    "revision": "47e822b6b7827d62279656a1650c100e"
  },
  {
    "url": "assets/js/168.089d37c7.js",
    "revision": "32d4af06e6e9accd3e2bb2796d6bc669"
  },
  {
    "url": "assets/js/169.bbdc0df6.js",
    "revision": "fe5be696f64181ab950a1a6394968df0"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.7acea14f.js",
    "revision": "4032920fa60ecb198644af3324a6ed65"
  },
  {
    "url": "assets/js/171.06aa1154.js",
    "revision": "b650440552b5d70c9e609e4a083258a3"
  },
  {
    "url": "assets/js/172.8983b047.js",
    "revision": "a17ddb8b9b4fa280220066ba5c740a32"
  },
  {
    "url": "assets/js/173.8ae29d65.js",
    "revision": "eedbaa27d85cc680e6f96ea49b7be3cf"
  },
  {
    "url": "assets/js/174.5f98f4c8.js",
    "revision": "46483bd9706e1cbf914b4fae45f74d4a"
  },
  {
    "url": "assets/js/175.8b0b6ba5.js",
    "revision": "5209f91cd10b69ba9a6f60ca51b0a864"
  },
  {
    "url": "assets/js/176.0e64b804.js",
    "revision": "508fb97b67cf94bba75df88c727d3621"
  },
  {
    "url": "assets/js/177.a3662bef.js",
    "revision": "40c1b2ee78dd80d8351804969703adf2"
  },
  {
    "url": "assets/js/178.eec30d41.js",
    "revision": "7268b3700f2ca4f6f9bcabe21373418c"
  },
  {
    "url": "assets/js/179.000a312d.js",
    "revision": "dc0d5e54c86a07c681f098d2dfdbf65e"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.00025d6d.js",
    "revision": "fb33cd12e3d27c7fc6297dc554a0c25c"
  },
  {
    "url": "assets/js/181.0d3b1344.js",
    "revision": "f0c3397b82218eecb1c86f88220e3953"
  },
  {
    "url": "assets/js/182.c23f247b.js",
    "revision": "4bbc8e57b6daabf44c399497d6c79a99"
  },
  {
    "url": "assets/js/183.f2811fae.js",
    "revision": "6a868aab72fdeb03773664ec08098194"
  },
  {
    "url": "assets/js/184.fffe7d9f.js",
    "revision": "a5ee3173f841b8e321fc1fedb0499d52"
  },
  {
    "url": "assets/js/185.0a1a026a.js",
    "revision": "5872980cbacf6c96328552c69aba27d9"
  },
  {
    "url": "assets/js/186.1fc30f9b.js",
    "revision": "5d65e297dbc16848c5f6a3c80b8e2eee"
  },
  {
    "url": "assets/js/187.574ad6eb.js",
    "revision": "7bc57d8e9ccf010e63b0657ecc77ed37"
  },
  {
    "url": "assets/js/188.a7110fb4.js",
    "revision": "d868d5551dc31fa5d14a7060d334db4f"
  },
  {
    "url": "assets/js/189.e0d6d95b.js",
    "revision": "a00a514de68f513b26bfaed72813b205"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.0667f4ff.js",
    "revision": "a20f1602296d1a7d8642205f51d28f5b"
  },
  {
    "url": "assets/js/191.3e6e8aa4.js",
    "revision": "770f3fd42ed7994050a1a8ef6212e8e6"
  },
  {
    "url": "assets/js/192.0a5d1703.js",
    "revision": "23132b76e14601b648cb4ff0eb48701a"
  },
  {
    "url": "assets/js/193.7090b3e9.js",
    "revision": "128e7e96ee77399bfdea48fd40f54467"
  },
  {
    "url": "assets/js/194.a7cd270e.js",
    "revision": "6c639f2e47e88902d963e406d35b9708"
  },
  {
    "url": "assets/js/195.cb5204a3.js",
    "revision": "6a613ffae9e13714a1a5a5902e4d8725"
  },
  {
    "url": "assets/js/196.3db0268d.js",
    "revision": "b7606625e27b381226ccfc4737808b94"
  },
  {
    "url": "assets/js/197.0e66e319.js",
    "revision": "ab3c06b3fd98e37015873bb2d54998f8"
  },
  {
    "url": "assets/js/198.03e27019.js",
    "revision": "5dfecebaa7c68427916d6c93b39c6118"
  },
  {
    "url": "assets/js/199.35faa2d1.js",
    "revision": "247a9e1476b6ce999694b9d466214b63"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.7a6672de.js",
    "revision": "630a9c0e94c8445f56bead261412a1b6"
  },
  {
    "url": "assets/js/201.4690276b.js",
    "revision": "3b751aa1a267688262a9703bc5a9f958"
  },
  {
    "url": "assets/js/202.63f3c15c.js",
    "revision": "51e87c3b84c1942ec85ddd49b1cbdb62"
  },
  {
    "url": "assets/js/203.cb333f55.js",
    "revision": "d06481b34d5ca50a0eb6325c76f61c00"
  },
  {
    "url": "assets/js/204.fe61ad04.js",
    "revision": "f131e1c25a63f42d5988c1a3f26a1f4f"
  },
  {
    "url": "assets/js/205.0a4891a9.js",
    "revision": "7c9bc5fdad6b2b2d8b5daefabe9de3c0"
  },
  {
    "url": "assets/js/206.8ec54c69.js",
    "revision": "95d7e8ccc64da5e6e4430a530db5f222"
  },
  {
    "url": "assets/js/207.dcb9b63f.js",
    "revision": "a608abd3f4bce4570f36721431f85a05"
  },
  {
    "url": "assets/js/208.1abb3d7b.js",
    "revision": "cccd0e13af7050d9cde4b77b40b9b15b"
  },
  {
    "url": "assets/js/209.b5b06d49.js",
    "revision": "207d88629b7280b2124e46f496d38cae"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.f6b25fc1.js",
    "revision": "12ae4ec6934a321b5bb4029072445df3"
  },
  {
    "url": "assets/js/211.c8ee6bb1.js",
    "revision": "95822e292c8aa66b780e0ef0ea7eb531"
  },
  {
    "url": "assets/js/212.b92257af.js",
    "revision": "95103de0d1ee0853d69efe6a34951e3e"
  },
  {
    "url": "assets/js/213.ebfbb444.js",
    "revision": "e22da600066134bf51c89450e18cb18e"
  },
  {
    "url": "assets/js/214.05ed9d9d.js",
    "revision": "eb832c556b3e5e6ceb2119f1cbeb41cc"
  },
  {
    "url": "assets/js/215.2017dcdb.js",
    "revision": "39c48a3f3407289ab13039759b42a6b9"
  },
  {
    "url": "assets/js/216.5b7108a8.js",
    "revision": "21e86bea69ce89a13e9a82644f71816c"
  },
  {
    "url": "assets/js/217.8ffb693e.js",
    "revision": "bdad2d3e87542263e0dd971046f1102e"
  },
  {
    "url": "assets/js/218.7574f1f8.js",
    "revision": "490f8f816688a074b0e249949e5b3e7e"
  },
  {
    "url": "assets/js/219.83c22ab1.js",
    "revision": "b78728b3c40b5a5c019ae3e1d092ab06"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.a4dbfb7b.js",
    "revision": "cfd853a5fef9b47eb060f69b84e94447"
  },
  {
    "url": "assets/js/221.886ef63d.js",
    "revision": "daeb9a203d1d3ed2246c3522be5daa8e"
  },
  {
    "url": "assets/js/222.74fb53bc.js",
    "revision": "a3de2451450cad2f71900c4001219382"
  },
  {
    "url": "assets/js/223.d632aa91.js",
    "revision": "7f520180e4741da1cf166e849f231520"
  },
  {
    "url": "assets/js/224.a5f7f888.js",
    "revision": "75d37b87ae8da293b7436280704aafc7"
  },
  {
    "url": "assets/js/225.3d8cec14.js",
    "revision": "2fabf62fe4f21e52204b65ecede2a722"
  },
  {
    "url": "assets/js/226.49fa178b.js",
    "revision": "df9c1792b12fd0a8186ac84a3b56cccc"
  },
  {
    "url": "assets/js/227.830140b9.js",
    "revision": "f633e53397e8e32599cd5c178281c2a0"
  },
  {
    "url": "assets/js/228.a690c515.js",
    "revision": "433fc33a3a4bcfb003e8e70024ef1a2f"
  },
  {
    "url": "assets/js/229.2949387b.js",
    "revision": "46c29362a624b69bdce63b05a908e39d"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.69d3b291.js",
    "revision": "c99a0d5bacc2f2161a1e5c03290b90f2"
  },
  {
    "url": "assets/js/231.719c2118.js",
    "revision": "1e801bb0bd52d96bc51bcdbced72fcee"
  },
  {
    "url": "assets/js/232.4e61e49e.js",
    "revision": "59ee9d466722cac889e494c9b2ef401b"
  },
  {
    "url": "assets/js/233.8949f80f.js",
    "revision": "8151f2f4e3238b0889836cba42082caf"
  },
  {
    "url": "assets/js/234.8d798055.js",
    "revision": "cc7d7f600e5eefcb0441677706ccdcba"
  },
  {
    "url": "assets/js/235.429239dd.js",
    "revision": "8b353a2223f3a4012efef5b3fbba3d6f"
  },
  {
    "url": "assets/js/236.713844dc.js",
    "revision": "cb6a5c0d9dc06bd89afb1e39f1142bb7"
  },
  {
    "url": "assets/js/237.3259fb35.js",
    "revision": "d1190fc6384a8392010ab47c271632a2"
  },
  {
    "url": "assets/js/238.39292dc4.js",
    "revision": "01eadeff3df0bc593090002a4a4ce9a8"
  },
  {
    "url": "assets/js/239.b745f033.js",
    "revision": "77834fe01ceaa6e0c8770fc67f6dd1d6"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.ee52fb1f.js",
    "revision": "ae060e07889f552919f38150e52067d6"
  },
  {
    "url": "assets/js/241.c924be7e.js",
    "revision": "1875af760d1d9847d6638c83c9fd7aac"
  },
  {
    "url": "assets/js/242.b98b62c3.js",
    "revision": "b834e463026d1da2980c4622fc8d0f49"
  },
  {
    "url": "assets/js/243.6380c056.js",
    "revision": "83a594ec09e433c5ccf5a50fedd928a1"
  },
  {
    "url": "assets/js/244.1b1f09df.js",
    "revision": "cb6665361ccbaa52042421ac15bdd49c"
  },
  {
    "url": "assets/js/245.359cdf6d.js",
    "revision": "58689cbfa1a5a8f5bea3b0fc86eb3204"
  },
  {
    "url": "assets/js/246.bc035f8b.js",
    "revision": "f24dc50ef2b373aa620bdc12b9e5c6d1"
  },
  {
    "url": "assets/js/247.fe2590d4.js",
    "revision": "9d0290ed55f76f23e29930e713db88bd"
  },
  {
    "url": "assets/js/248.108df346.js",
    "revision": "b1ad9ecd929922c20e5a2dba3f6789ef"
  },
  {
    "url": "assets/js/249.ad4e06af.js",
    "revision": "426b06f14c38ee267ef85d30449ede1e"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.c1f8d6b1.js",
    "revision": "d6bd260ea45d4c578fca3e8983a5b9e3"
  },
  {
    "url": "assets/js/251.35d41510.js",
    "revision": "0e8909a400da6f62f7af9c5ea8bd74ed"
  },
  {
    "url": "assets/js/252.bb301348.js",
    "revision": "b8a6613fecf3eb548d6ea5e6a7709f4a"
  },
  {
    "url": "assets/js/253.801fd8b3.js",
    "revision": "67b5e999164896a152fedd946c4b489b"
  },
  {
    "url": "assets/js/254.196773dc.js",
    "revision": "981db5a4a9c39e07ebd7090cf8e42330"
  },
  {
    "url": "assets/js/255.067eb331.js",
    "revision": "b70e349f6a266555d494f548949f6537"
  },
  {
    "url": "assets/js/256.749a2d8d.js",
    "revision": "221b179dca686ecc70d858b36d39f1a8"
  },
  {
    "url": "assets/js/257.478033c4.js",
    "revision": "5ce4b247afded2af44fb95a76bb0e7cc"
  },
  {
    "url": "assets/js/258.4f57f8b3.js",
    "revision": "56eb7798f50127284d34cc4f67cb4096"
  },
  {
    "url": "assets/js/259.2f40aba6.js",
    "revision": "8a60d0677e98f1ec583b0a3269a785bd"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.19cd8f00.js",
    "revision": "dd9064e038eb99edd8e5e3c11152a81e"
  },
  {
    "url": "assets/js/261.ec3d6472.js",
    "revision": "7a058985bd7ec9c7db3a7cd15138b43e"
  },
  {
    "url": "assets/js/262.b2dcd3f6.js",
    "revision": "34ca8c6069d54c1f72e505ff635f59a4"
  },
  {
    "url": "assets/js/263.32cb4cc0.js",
    "revision": "f3eadec0789b5ad69b65b572a0ef5552"
  },
  {
    "url": "assets/js/264.2f3de417.js",
    "revision": "467b79c59a1d0b7e9ca9520959fc0f91"
  },
  {
    "url": "assets/js/265.5aabf7a8.js",
    "revision": "8d70f34e982bf3f7817db829b6579b15"
  },
  {
    "url": "assets/js/266.d7fcbcd2.js",
    "revision": "8d90bb2caaac2af8fe363c3dd2e62b34"
  },
  {
    "url": "assets/js/267.2afa1aa2.js",
    "revision": "dd89f1b2a5522c202804eecc6b220f8e"
  },
  {
    "url": "assets/js/268.bbc100f0.js",
    "revision": "2b5836f29e72564fd273d98a852dd86b"
  },
  {
    "url": "assets/js/269.3c42ee63.js",
    "revision": "0b59516fd78659f55ace0fc631336e83"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.528353e7.js",
    "revision": "48b52d20a2eae845f06bdc542572627b"
  },
  {
    "url": "assets/js/271.dc0fe215.js",
    "revision": "3695ee2ebae168789e555777ae0f3273"
  },
  {
    "url": "assets/js/272.3ff3a2b2.js",
    "revision": "ee7586d3d17898ba3ad0662ef9df04a6"
  },
  {
    "url": "assets/js/273.bf64d18f.js",
    "revision": "5defb7aa7e35fe4baa24cd988bd82013"
  },
  {
    "url": "assets/js/274.7b202eae.js",
    "revision": "5aa7b6cc24963d08e05e6aeefb98bc17"
  },
  {
    "url": "assets/js/275.f4dde395.js",
    "revision": "ff7fea2cf46090b527e2a5e88a77fd3e"
  },
  {
    "url": "assets/js/276.1cd863b0.js",
    "revision": "0da690bd828314df910227713a218751"
  },
  {
    "url": "assets/js/277.9fb3027e.js",
    "revision": "caaca28926e11aab3878ad1a86f0f72c"
  },
  {
    "url": "assets/js/278.92163f02.js",
    "revision": "ab9f785aa3ff139fa4e9c8a4d5aaf3e7"
  },
  {
    "url": "assets/js/279.ae18e00f.js",
    "revision": "1d3f0bcd6beb5d8f63d90c0447722508"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.cacbff0d.js",
    "revision": "041008a8bf4ce29f53ad359d04029e59"
  },
  {
    "url": "assets/js/281.c1aa1945.js",
    "revision": "e33b50388648b11441b69672319c9ca5"
  },
  {
    "url": "assets/js/282.e2800bce.js",
    "revision": "cb8df4cb723e483e221832db57d45f8e"
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
    "url": "assets/js/52.fb1f4527.js",
    "revision": "8d1fd57f884bb0bd23a99ccce966e29d"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
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
    "url": "assets/js/87.347d1d24.js",
    "revision": "936c933f52923f6bc507450655a15e8e"
  },
  {
    "url": "assets/js/88.7ea609bf.js",
    "revision": "924be252924a96b7a3ff4f235669e59f"
  },
  {
    "url": "assets/js/89.5e89398c.js",
    "revision": "276d540817674c4283d40cf1e2bf6c37"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.b0d286fb.js",
    "revision": "f400c5e13fcd4b29c00f50ed15c6e9c6"
  },
  {
    "url": "assets/js/91.2c5e16f5.js",
    "revision": "9e151a975b8a87409e3e7ef5c9ce5b14"
  },
  {
    "url": "assets/js/92.103be353.js",
    "revision": "97731d067e61d03091010e9ae667ef18"
  },
  {
    "url": "assets/js/93.484256ad.js",
    "revision": "8b53558c258d9bb90a8863cea01a1110"
  },
  {
    "url": "assets/js/94.2ca1b926.js",
    "revision": "35069616bd4e6515891ef3e127e5dcbc"
  },
  {
    "url": "assets/js/95.c3e8ec92.js",
    "revision": "487be528d873cbd961f9d9a399b2bd20"
  },
  {
    "url": "assets/js/96.87a2e3c0.js",
    "revision": "ecd1787dbd1ccd3ad634779b9fb49ece"
  },
  {
    "url": "assets/js/97.d2f3248c.js",
    "revision": "83d0c945b33fac3c2fc90df465863fae"
  },
  {
    "url": "assets/js/98.9fddbd4f.js",
    "revision": "470ba59ef91805bf72edcf640e18541d"
  },
  {
    "url": "assets/js/99.14855627.js",
    "revision": "60378c5b082c02157fbc0a4cf156cc9c"
  },
  {
    "url": "assets/js/app.0105550c.js",
    "revision": "733bae1e9ecb07245d543100ba3e92dc"
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
    "revision": "c4d9e08cdbcbd5d2f1622a1836a46525"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "911f684c740025ecdd7419383e9dd20a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "66690d667a5e8691d2249f2959345f9b"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "2d100f121d91345035434eca8a19768e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "40203b340524332e1e3597e9f5bc33c3"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "82c8c721578b7a3745af370155189a4a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "91169f64f21495875af3e7c8f7615a2c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "1c7eda899263af9341c5a63c374d2f2f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "6544b567ce93483ebe98f4360eb917d8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c1777035c221ff7b5f8c9bf680e3955d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "c0058b6f069acac84c557231e70244cc"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "fe6468149143a538d937433984ee390b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "fbbc2e5205703d4cca43e214ce4c7a31"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "e7015eee303e434ad51a485fd1caa94d"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "8ae9766b1c805fb914121580efa845bd"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "756c45a306ef9b6832f4bf2dd92919d7"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c0685ac3d939a93c9a83bf5edf12d74b"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "8135162608366e025082e754c8d2586c"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "dd9a61fb680d4d3a9745ef4d802adb03"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "a604dd48d052ec88be5e2ba28dcb55bd"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "d83ffa8f82e5659fb8e9ecafbde79bea"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "bcaf0260b758cb2e6317edfc06cdf4c9"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "72bbd9ec1dad6d9dd126f02f70ef8e21"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "b110f5bffe236cbd08a18100694150cf"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "c753ee324589e7d864d78cb451d7f228"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "c17d59995e93010458e43a9796ce56be"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "f2b8dfdf5dad660f9d488b184021fa3c"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "8e5497418b1436b1ee5a7dedcd18aad5"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "2c81f54926ccf4a66932dd23e5134eda"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "444d7b9b16294be5b28478cdbddf8fd2"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "9d1b7a60f105e6eb264514830c049b27"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "78cf165b1af54012d373a1b9b272efaf"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "fbf4df60507624c2e783d03feb8d7912"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "189e6473808e425307d05c8c64c1f566"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "4cc837dbefc02e74d389ecdabe40b5e8"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "43c8042fe495c9a7550c945c331bc71e"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "74ab9404f77e2bb90741b4f11917bbfe"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "1e87a916965afa6f4fc8c7bd6dccea0a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "37c9be403cecabc4d1c2981318904159"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ca63c7c979a2440df7d484d296aa47d1"
  },
  {
    "url": "book/index.html",
    "revision": "446aebf7d18de0d74ab9cf76e89cec83"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8e171d6c72f7da8f46919001ee561937"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "4da73e2b2c80fec162d0597b1d4197a4"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "c7755eab270d5300507037d956515db1"
  },
  {
    "url": "c/audio/index.html",
    "revision": "a6417389e1ccd1185b4fc7d43f1aeec8"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "13ee09bb8e7b47994d6aaaf7caf50d69"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "19e76b33dc2930aa32c69650ca9abbf6"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "76681410d85ee4c9c331098393eced42"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "adf85d78e7cd590f36642b6f2879b766"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "a82742d57cf86392b61cf9d6dfd53e26"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "61a4643d3e92990433a1e47a9cbe4cc9"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "49e195bdd499b8b95d54420e45690db1"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "7a530b3426a6573c81300f96a60c1bac"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "47cb2a5a5a367d578410af68bdaa8234"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "7c52f343414940a198b8e1754bc007e5"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7c6bb80ccb50987660993507c9d90179"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8f15f638951e7557494bc81e46bbfa3c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "02c00a12e869f45b0236cd04ed310594"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "eeb94914f97b14669d219b12b448a1d7"
  },
  {
    "url": "c/program/index.html",
    "revision": "bd68366571a9ae9658cfd21648b43254"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "2bb84e40e5179e1cebd8260ad216751b"
  },
  {
    "url": "categories/index.html",
    "revision": "ffdd3746a6746f8af05129636dd18420"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "84a0d7370f3eef0413764f0ad99cd8e1"
  },
  {
    "url": "figma/index.html",
    "revision": "daf6af8fc228526b182c5ec9abe04626"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "f06bee41eecc3ae1105e18156cf9903c"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "d19d2e868ce15ebb025a1dde07d4c397"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "eab5c7cbaae662a399191899223984b1"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "bc29aed5e17b1f82b54a4dd6ad081c85"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "3be7eeab0d6e46f96cc46b50888c472d"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "e5f878e237d573bd83b43a5d8604509f"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "509e1c16d6640f64fa6d5f5b6a7f2e15"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "a58978df024544699a24c9661be66d5f"
  },
  {
    "url": "flutter/index.html",
    "revision": "0d475b45dc1f0f435ef338f66aa7184e"
  },
  {
    "url": "flutter/point.html",
    "revision": "02c87cb6c6967a36a921b940bb6064b0"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9dc24b840266fab0fc84ab1ba4219d5f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "7e589b0d7237652d74f0f087d5bbe719"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a71e1c8ff5ae2cb4303ce534a13e32ba"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "68300fe1fa6c654dddb2e04282437db0"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "24831afd1ba1a181e87f1f75356e425f"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0e1290903b680ba3d162975db199056f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5382b4b68290e8dfca7560ff63a29ffe"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e264028d905e8698e95e2ec42b66ca6f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "9cae632c481860f280f4700cc9d3b554"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "21e5ae119d6a810e24623cb5b0d55b7a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "abd987fd90884a52599483d60d6d3377"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "28a557326a686475ae35b4719bad617e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "48a62e2acaed192ef4e9196685c776a0"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "36221aa546ff9065ee440e006b989187"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "211338cc1cbfbb0973da216cd8a5e9ca"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "487caff1248faeb002a49d05393aaad7"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "3e4fe45a624c20c7911152864cd34c11"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d5ce2d3a176b9b3aa1b3270849139b3b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "0688f6f85269bd88d4f3cde8e9db6d2c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "26a5cdd8e6ca9fed28f0252c498a7b9b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "160f0a724e46989414c90d08c13952c6"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3f0bcd833aa36ac4f0c1080a9da2529c"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "aae0cd7feece30a266f74b554a0f5f83"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "10f3e94b4c5024c2eb5febfe4086f8ef"
  },
  {
    "url": "haskell/index.html",
    "revision": "9c83b22867962372da402ebb74773b4b"
  },
  {
    "url": "index.html",
    "revision": "523d63d3325d223fcb4f78a830c323bf"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "d0dd1868a5dc81dc6c077d28c7b227a0"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9ba5123e8392a95b99166cdc26a37a54"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "3a78395ff40ddcfe8fee5638acba0b23"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "e3aad049d328778e6537c13ccd43055c"
  },
  {
    "url": "python/index.html",
    "revision": "dd1bc1aa76c02da20ac4c5fac6caf81b"
  },
  {
    "url": "python/python-ase.html",
    "revision": "51ba4acd3b4bc0d54059f0d840a43c45"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "03976b857c13d7bdc82feae69fd39e5d"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "fb4fc4c1b88b147be4ea46ee901e4ee9"
  },
  {
    "url": "python/python-file.html",
    "revision": "0870121c998f2d74c5b707d84b36c5f6"
  },
  {
    "url": "python/python-function.html",
    "revision": "8d76eaad10151e7a8ec8c0e2032e646e"
  },
  {
    "url": "python/python-generator.html",
    "revision": "64814ecb6552563367e52e75f0940d17"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "cf9570901609c6e78ea0864e68cf81f5"
  },
  {
    "url": "python/python-module.html",
    "revision": "8e8bdf8477b0aa78a051b9f1bbad7de4"
  },
  {
    "url": "python/python-string.html",
    "revision": "63e8ebbd3f056764da5d4ef6983d784b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "36279465f71d68d5f7db36158beca556"
  },
  {
    "url": "read/index.html",
    "revision": "1fee82a5547aa04568d566f38088309d"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "99b35da8029c4059111568a07726ab89"
  },
  {
    "url": "swift/better/available.html",
    "revision": "afb1c7d7654271096903a11a458d37b3"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "57af107b3dd9a61c625643314e779cfc"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "38053cb98e4dbf3fa448fe880f37e73e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "97e802f5fc673d1d3153c52047d39fb3"
  },
  {
    "url": "swift/better/di.html",
    "revision": "039c8eb2273c24b6f874b7c6692b4995"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a987ffa543b66edf7834b78bd179dcd9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "bfe4633d20e15f4e302bf38fe54a6d58"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "7c66f1afa401e6ebc76a156c5341b470"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "f903406f3db9b2a337946adc3dd361a0"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "cae3c02dac58ce93091b43f9692c0200"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "72fe38f7a28efb22b6fb4114e46a1e3d"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "aa5bbf098a28594dae6340e19e912c0d"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6f9edbf57cf52352b7de1b8b99ab2854"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "3161a3abcbea6fcddd5babe85d786a8a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "5c41d6f93440cfea3bb064acf3714725"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "836af17ccbd9cb7d9796ab43679f32be"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6b06fe32f37c3c32a5caabe68644ad0f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "8361db68de735cdb1109d2f00b78aa01"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "99fef7a91cb83ffc536d8a77c4971a17"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "55eb63e95a2601cfb78bd5481dbfafc9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "e6a68ff468129546cebca539577b1ec1"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ae26734cbcf2a99867f4c40cbecddf90"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "1ac73604a8eeb22dd7847960ad634b1e"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "f24b08ed1997d873e0e424861fb172f5"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "2d9c7a9d764e37056342fe1d0338b691"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "5a06edca88250dffaea171a4893f9f96"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "b11b47942136ec69946ac5ea732357aa"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "35ccfcef4ead405b5e1062722c922cf2"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "e4eaebcfe603756d3d648da8b5c65ea8"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "d4a4ac413f2f4de6bbad9eaea525c4c9"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "fdee1fc71666f330eec15772df9b194e"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "20983a7662e959b4b394b38fdc51087a"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "08bcc964cb73b2eb917c14a4ea6cb49d"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "95888fbdb888716b287095bf783871b4"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "a7dc5285513acb9aab290ed5af6c2f17"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "0c1dc627716d422d89f646e2edcf447f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "71c6664ce4669d7f63d061c8ddcb8c5c"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "cd9c93889fddc3c79b7908a3f9551379"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "3167fc35c8c1d35ac7f470b9afd0843b"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b9bd4214e1c8c1af3ceb1fe5345749ec"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "5f464e14a9748aa6314bb2f2512215b6"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "296e3acce5c2cac1afbad9d04dcd606d"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b9f1f3c5fe86b2bf7fa44910aaf82c4e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "24e5d55cd9e5e2db6a79f77c1882f2cb"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "f5ef305ea067e343d8eb74f726f50772"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "e55ea8d789e42e28a3ee40379cf39629"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "2fe155cec6729a224c9c93fcd7f6d1ac"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "67b8a4f0660239a169159fd6cb8a116f"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "929fbfd5e46771cd4f7c03bf2b1b7f47"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "2f2f5e1d341e7141664db0b765934034"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "12da16225147d5d7ae34394984f0b7ca"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "2f05380350d35e1d3ccd1ed2b14119db"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a52c14deda52b4f407a383cb102e170b"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "298185dde3eca00464706b0440546de4"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "6c3ff8695640f8c6bbe470ce746629ef"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "c02f3b7cf0ed5700708b265a2d28c3da"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "8c1bfeb4df5fd3f110a6ca66ef7f04da"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "52bce2caca37742dc6ebc99b82fed750"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "badb7e68bf353c31fd3d13b27f81f040"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "579f9f9ff0846ffa39f8cb20a4d64196"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "30863961457b006ef5e3e1f35e31521f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "5d87d8ffeea30a8c6f792c0bb352827b"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "f9a03434401601466d046ce86ee3f645"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "799ab680cd77a623519d344ff35b3edf"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "1e089113b7f521ade9f6aca206bddd8f"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "5e2d07d7ead854293448c1eeef229a66"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "9dc882b51f7516ecb28c34b6809f2fc3"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b7502157c89b4e91f85c1225d88eb357"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "abb410e7807b27fa647f03a8dafb2065"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "6e086e3badc45610f37192c2565ad11f"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "811c9b3fb94c82718c8a8765d9862384"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5f1928888614f6d2f36dc243e3ecd303"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e1b7e6bf55bf554fda26c2e49de20615"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "9b2064d4e871b04c691e14d4f24ad614"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "283e90ef0c5a161156196947ffabec3c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "62ce20cbe0cd4e35ee7c952fb8c99fac"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4291b3ad5c4a95c9a5ef4b4a0dcc02f6"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b5750b924139415097eeadd5ff6e17a6"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "61a83ef17e6325b032ec399c09b7991a"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "f7b4cdb193c11c38040d5c874369775e"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9193434dde6bce049a917989333d4846"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "a3a29a117199e87a63afc1ec704c3682"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "76737ac4cc73a38b1d236d74dc7e40ad"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c24bcc133540dfdcde5358194448202d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "4fe079d73eb3652d27741239a95782c8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "f8700e9a54a116b09d7896739b1d79d3"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "7c39f2a9f14d85dc144b4dfdf5c2b124"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "cb946bcee309b5a7d6207b5bc8ef72bf"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b60893e623a7955ccc05826a56f0f14f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0a2d348acb0676dbc36e3b6a47d7caaf"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "022ef880d819567994df85fa63a0dc94"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "302c3d7fffb4637c8fd93cd87d0de1f9"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "8a34a308ac5824e8c17b13d82d93ee74"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "671c767339734c95f6f0fb6735317bcf"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "27d3805f30266c756b846c41a14d7899"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "9f54a1652c102c8cf006a4e069269ae0"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "9bd21ba79f0a484b5bf17d8fe97275c8"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "1dc0df82cc05680954eeace106c93720"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "cacb6afcbe5896d41e8a9e9c75f2424c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "0cfc2bc36c9516d6dc79cd9fc608bc8a"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "9d87a939bb01da6e70ea0b7f786cfb7d"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "31aedaa8d0ca4732009ec210a9c414c9"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1e2c943a54bf1a65622cfdbf948d24fb"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "9a382e114161280f8b026919ea30e225"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "82c6d7c01e5ac0cef57c79b9b65e71e3"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "945259f24f4b546df7fd1e60ac1a05d8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7c97b66a038d670a763d1df8be410384"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "8d298477e863ed6b71621205165c879d"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "b4c2a92946cfcaebd8dfe71910d43140"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "0d880209d389026e49c8a174f7f783bb"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "70715e2181fee2f3fe05432c52d07105"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "140861d9d51059b4bf3b32b04f43ba91"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4feddbaa2f283225710e3335e94ce8ac"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b525fdd5d7904a0618578c30d2d4f090"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "94b471df5cf1387850b7179972a9c99a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d72ef6e4f6c3167c90dfbc6b705fac2d"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3be82b8f355400d6a39afb88a0f80546"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f8ca1a5f21405183a16f6c74fddd94ca"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0a7953cf6e4704e97b7121660bb61d86"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2cee336ff7a622399ba5f8821968e051"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "204ab5dd75cbff6cf5268a7495edb45e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "80bd3b42c4e6375e672f43561047f5b1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "397dc2d0620b1a23dea25d67963d2c2e"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "69bd7e38d4af07279318cc46b1428c47"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f96bf0b299b25c8a6e4f88e15fb9508a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "eb1047e58ef1562c4ddc254d53b1f068"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "842c1dd78b3f3a8de37fc995d6eacfeb"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "d6a1ff7240733f5de13fa5c62eca3a14"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1a1a6ebffc6314d8e60098291694baaa"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "689027ba80a42bc61221d849f060eadc"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "fa5a3651b176dc160c837e2599e9edda"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "447ab02785cd41adf0af13cbb46455fb"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "956ee54a753ed4f4ab376fd225d06c01"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "400486946987f8c6d00d0e64b433b705"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "dc48a7d15703a10a562ec12aa1127c5a"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "40b04f0206c04de3241727445d178f8d"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "cb156c5b24f81c6f39e5ab458d4d70da"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6e39a20b516fa608eb7ef2e9015e757f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f7fe2eb7e6cdd59d18e8aeb5dc18e1f6"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3fb5850c5c5f0ee235005839702a2a6b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "180de4321467368edda8473832fc7558"
  },
  {
    "url": "tag/index.html",
    "revision": "bc03519d1e8ee60d54fa933010ce1bd7"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "e5be1a7c146eb7c5de35e4b42c1c0471"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "692d1ab5dd5bddb26856b44d18026286"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "23b9debcda8602e05f8f62fa8dfd7a30"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "895ead98a5307ac5942af7e4940ed7a1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "5c303ff524c20f034bc921cc76b81e95"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "f47049f21169067b13131d58abeefe67"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7b7c83e5a5e2346b871f7177b85f9e24"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "90aaf513003474fde3ba6176a52e5ba8"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a73099f0d3a06684c6c36149b4df5269"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "de0768b5431609559e2cf69ddabe3e12"
  },
  {
    "url": "tag/json/index.html",
    "revision": "6dee105d9a1afb0e5cf868b75f707d10"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "cf4559923ee7c45076c33686ef8ce579"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "3e7a717a0ae7bf871dd8ef61ede5738c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "dd225edd4911be2076885003e86067b0"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "9a2cc0ff1ceca0661e927fd022709fc3"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3dee14043cb2c92407e03b6ca9653498"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "e895ab85050e9126f6367005a77c6897"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e2ee0de88f8c3ba1313de4526c23aa24"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "9d20e6227cebd8909b3fab4646c5a50e"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "2560e3e4e960f0ad7e58d12b7e26f47f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "4ea14955943869b0caa0c5ee06c8ddef"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "be1f67606dd59ca0f0af2526c72904e1"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "172faec00adf033abbda38e827a07a5a"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "86817f63af45b8d8018669cb22a1a479"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "cf358efd1261bd36fac878455fb3f3d6"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "06504923d3c8fc99a485ca12566e4e8e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "668af49d217c76ee5353351271531955"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e04ff7047532d2885a99a49aeafbfee4"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "110f3e58cbdbb085112293aa9841bb66"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "f30e9afdb77b04acd84578451c17fd5a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "d45c95c3e35870749ed43002a9a2cfaa"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "6664487315c2cf9be1bebe75fd9a4ffb"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "8d46bbbfcb259775e7baf41e6a4a40df"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "bf70006556129b27e2d2fc66cc990219"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "cf901a53aa670a98ac1ffc254f227dbf"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3673bf8f9397a394747a76f29d0f0814"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5919d777ecff2a09a34d6f6cb3e82148"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "9141965b3f7bbb8a25d7332d05631846"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "451e8f0457ded45c05ae2b2e0471cd13"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "d72322fe305b8263b76deff895e15d04"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "d478858cbe79cb06143606a2c372beb2"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "7c89b59c68e3bae21148e7451882e96c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "881e851cb7393f0488f0e6c89abf3abe"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "82edecfe482b83e96d293abc03efb603"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "8dc08af4b682b2c3d225ccd1f46037c0"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "fd58e8c586c6dd576f453f18278d89eb"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "834c4ab2701e9e3b83483518e7b16611"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "171b20161d1385515c5b781e90c0f64f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e0d503a50e65a8aeba4c1cc8143a7c18"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "8a897d4ff50caba3666784f5768123e2"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "9c64111c6646fbb7b6eccb5dba3ef253"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "99de835382f753bad9618c5ddc4d7d70"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "77d80d90d8d1adaf9e84afd764865b10"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e156be2bbf6378bb87cc187d4e7ed729"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d66e7c1c0dee051c5dc0d60a112f8e40"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "9c091171a1aceb1d53bb0da6dc5ca35c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d4cf21dab22ea31f7925e3d53c25f775"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "720ad4ebf0d07e470b9e69fdd1b28737"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "eb1c82e1f3a8ade6c1834bae93353d7e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "5cb1b237e47a32011ecf5f650df2fdfb"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b5128a632d573cc89125d6c4ff91dd1e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9f7dd54c10a46558bf28b81407ae6977"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "acf338d1aca61ee69af6558b818a7bc2"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2ced4c61bd1d884670ccfd045780a121"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "cbcac84aea4e77a45ce99f1e309816a4"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5131d067698d04f84d0f7c27e5b2d45e"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "cd5284da8e21120e86ad0e125abff97a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "1f2fa27b56e5f6b1faf615cef5ce6973"
  },
  {
    "url": "timeline/index.html",
    "revision": "b55cbb5d82e4f8f58a8adffa59893dc2"
  },
  {
    "url": "tools/docsify.html",
    "revision": "5f727a3b06e8ad4996616ab961486708"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "933edf45d4131b9df076ce2ae78f0c94"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "cb99d2929389b51e1c6b221a69a06094"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "de9e09ba0880d04acda4f1402b38be55"
  },
  {
    "url": "tools/git/index.html",
    "revision": "70008401edf843145ea7df4c671a793e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "6e7349d2d61e1f46897eb39b94e8773c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "51f25f6a72acfff0ac428062ca357493"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f712d313589cf6ca7e21941cd305b470"
  },
  {
    "url": "tools/note/index.html",
    "revision": "dde4c2b89cc14e10932dbd4a876a1621"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "09a6b1adc515887bb6263369878a1765"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f725e663e6e456195c86975dc87dea58"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "3e1929060904a2bc3b9e1a25e3336d12"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "86ffbf13d2eff24d7d169d0d1451cd50"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "3b03bd76bfa59afce67441cb6e724b6f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "25e3d18872212db226a914d2a9b011ea"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6400632854cfbf26cf67508b96f6bc7d"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "a9860abd5721e0424f1556019c100f7f"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "c509be23ee6be5d4ac179eb72520dcfc"
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
