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
    "revision": "74b9e5a74a4d1d4bb374eff5d723ef47"
  },
  {
    "url": "about/app/index.html",
    "revision": "48c85da164c5e5f74cc54fa8a9b723ea"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "05eddf5ae77e8d0e5a8bed4fe5f374cc"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3e46496eb18be6040d962544e903015e"
  },
  {
    "url": "about/index/index.html",
    "revision": "98932120050ae1ea713e067fd5897291"
  },
  {
    "url": "ai/index.html",
    "revision": "40d88763526b2a3a0c45c9a2545f1059"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7b61b18440fbd8d9067e5568d5ca6e79"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.429f6100.js",
    "revision": "5079abc5c70e6401e011c2b0cd42e6b2"
  },
  {
    "url": "assets/js/16.de4c7be5.js",
    "revision": "91dfe2e910e1f674302d4876d7a1ae92"
  },
  {
    "url": "assets/js/17.0ddb612b.js",
    "revision": "d005c426a00d40956ca85e652bb17c68"
  },
  {
    "url": "assets/js/18.77bbacd8.js",
    "revision": "e799887b365b13b69b761f8a100d34d3"
  },
  {
    "url": "assets/js/19.9e579819.js",
    "revision": "d7e93989eb9cb8e0d42a115b9fddeb3e"
  },
  {
    "url": "assets/js/20.5ab45d12.js",
    "revision": "952a337862377b210b286e9d1d763026"
  },
  {
    "url": "assets/js/21.feed0bc0.js",
    "revision": "53aa1b695420ac448047037df4d0da89"
  },
  {
    "url": "assets/js/22.e652841e.js",
    "revision": "1598a1fe8fbd8495fcda0045859ca648"
  },
  {
    "url": "assets/js/23.ae326ac6.js",
    "revision": "7ed82f1b9810338287d73781e3ab0b08"
  },
  {
    "url": "assets/js/24.e0203ae5.js",
    "revision": "3187102e042dafa39816382f9f165be3"
  },
  {
    "url": "assets/js/25.457686cc.js",
    "revision": "79b476642e86d0f7aec070d0ef5949ec"
  },
  {
    "url": "assets/js/26.4b920c1a.js",
    "revision": "ec4d75a4732a721677fa92bd62169bf4"
  },
  {
    "url": "assets/js/27.64b91fb0.js",
    "revision": "7d583b00bf3347b8f8b5ce957d3e24ab"
  },
  {
    "url": "assets/js/28.06dc66be.js",
    "revision": "2ca610c92b76ac76e12274ee4cdbff74"
  },
  {
    "url": "assets/js/29.390db75e.js",
    "revision": "70ead5cdd356bb61d3af6a67d94d1e4e"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.bee18969.js",
    "revision": "cb3f9cfb5345ae194496ce98ac6e53c8"
  },
  {
    "url": "assets/js/31.3b4b2d51.js",
    "revision": "1dbcc732a7a3c026aa0c1661ea3fdd6f"
  },
  {
    "url": "assets/js/32.9e0642d6.js",
    "revision": "e4b4583f4d73476ebc5f71c335a76635"
  },
  {
    "url": "assets/js/33.50c2e661.js",
    "revision": "37c2f9a06da6eeadd8aeccb381a65ea9"
  },
  {
    "url": "assets/js/34.cdcda296.js",
    "revision": "eecce383a8bc001a74c46d24361afeed"
  },
  {
    "url": "assets/js/35.a008f97d.js",
    "revision": "3328792ea738bae555848149bf25f1c2"
  },
  {
    "url": "assets/js/36.57604a30.js",
    "revision": "3aecddcd2cf64efb8e7f5ec853c372f9"
  },
  {
    "url": "assets/js/37.e9aaa5d1.js",
    "revision": "9cde3c297f4eedd1c750d0abea3f9158"
  },
  {
    "url": "assets/js/38.0798ed31.js",
    "revision": "eb1cf3184c569294bf59eba7a3c4ab03"
  },
  {
    "url": "assets/js/39.f1cc87c6.js",
    "revision": "bba63b134a11ea885dbb267e939250b8"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.40f86c16.js",
    "revision": "fa7ba1ffae8803060878c58b9a38ba28"
  },
  {
    "url": "assets/js/41.3892d675.js",
    "revision": "53364c81b0b190f8bdd92125a0dda0bf"
  },
  {
    "url": "assets/js/42.867fbefa.js",
    "revision": "ff7f48ed38fdd0bc1f45a8663effd54b"
  },
  {
    "url": "assets/js/43.a279e791.js",
    "revision": "45de2a263b6407dca51047c41af1499c"
  },
  {
    "url": "assets/js/44.9115e4fe.js",
    "revision": "066c716bb2c813c07c077a83f88b947f"
  },
  {
    "url": "assets/js/45.25d7c6c5.js",
    "revision": "8e38b6ff14487d4bd035bd78c3799d31"
  },
  {
    "url": "assets/js/46.04ede97e.js",
    "revision": "93c575778279f2db24006a937eb9ce99"
  },
  {
    "url": "assets/js/47.197458d9.js",
    "revision": "d7d98f793f90f34de09d0f66f7c5a171"
  },
  {
    "url": "assets/js/48.cff92216.js",
    "revision": "cc0c02d7e137dcd33ea8998384eb49d8"
  },
  {
    "url": "assets/js/49.e42eea91.js",
    "revision": "86f2ba864497dfb39c980aae84ec14f5"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.06a7e6b1.js",
    "revision": "c35a5972e243571473ead0e5d1deb3d1"
  },
  {
    "url": "assets/js/51.43b48b91.js",
    "revision": "b06d8f85b24520c2c8528a4c2cac54b4"
  },
  {
    "url": "assets/js/52.01a10d4c.js",
    "revision": "13c02f8489feca6291deb4a28d8c4840"
  },
  {
    "url": "assets/js/53.6991164a.js",
    "revision": "970db1f334b54bf4ffe91f634926ec5e"
  },
  {
    "url": "assets/js/54.5b846b85.js",
    "revision": "7040b435569362272115010c992f8f5e"
  },
  {
    "url": "assets/js/55.86b7cc8f.js",
    "revision": "2774acd88b45779ab54830c3e7ed8f3c"
  },
  {
    "url": "assets/js/56.fb1bfd5c.js",
    "revision": "14c2e5f06e347cde1512747dccf173b2"
  },
  {
    "url": "assets/js/57.ea26a3c3.js",
    "revision": "ae815a6015cb43c2a1ea8234a01c73a0"
  },
  {
    "url": "assets/js/58.5be52d31.js",
    "revision": "fdee4b9276abfa0be63b900f658bf756"
  },
  {
    "url": "assets/js/59.f304306b.js",
    "revision": "ef1209bca7ee1479647e70206c1edec8"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.3a923f84.js",
    "revision": "69788881f93055225d1be6b2521a6bdd"
  },
  {
    "url": "assets/js/61.8aba1632.js",
    "revision": "e39b2d5033cb7ccadd63dfff8abf1bb9"
  },
  {
    "url": "assets/js/62.f9d0a334.js",
    "revision": "90250801caaee6272ef39d9614929855"
  },
  {
    "url": "assets/js/63.d7c1e4b8.js",
    "revision": "021642e890ea5126d729bed5e2804bd1"
  },
  {
    "url": "assets/js/64.9090adca.js",
    "revision": "db20602a4732b9a64f3d522ef86316f9"
  },
  {
    "url": "assets/js/65.504f03ef.js",
    "revision": "4ab908019b4f06305673270cc5cf1742"
  },
  {
    "url": "assets/js/66.3e9a6db4.js",
    "revision": "e3c3ca0736ac62d383ab25ac5c6d380f"
  },
  {
    "url": "assets/js/67.f42950ea.js",
    "revision": "f62d00e62a3cd580525591992e999e53"
  },
  {
    "url": "assets/js/68.9636d93c.js",
    "revision": "2658763de0cb09d2ca4ff9250a196a40"
  },
  {
    "url": "assets/js/69.7ccf0ab2.js",
    "revision": "0ced49cc2d8f5cfad34e61dc56cc8b02"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.4034be12.js",
    "revision": "9e3922f191e6fff96fde0e51d824f0bd"
  },
  {
    "url": "assets/js/71.821cc2fa.js",
    "revision": "1255506b59af1e8f02bdb9a942558bbb"
  },
  {
    "url": "assets/js/72.0d3866a1.js",
    "revision": "75774270ab965a03bbed01fca8b99333"
  },
  {
    "url": "assets/js/73.43bf4a92.js",
    "revision": "91bc879da714ffb72ee6b9321de9f08c"
  },
  {
    "url": "assets/js/74.6008800f.js",
    "revision": "356da29c432801a558e1f0ac7fc9af85"
  },
  {
    "url": "assets/js/75.e630213a.js",
    "revision": "e94ac2f9dc42c61f629aede368a00d33"
  },
  {
    "url": "assets/js/76.8a0221d0.js",
    "revision": "889db61730174b581f1f30d8b26df212"
  },
  {
    "url": "assets/js/77.4330be30.js",
    "revision": "98ac8ccd3867ea3b34b82539b2676852"
  },
  {
    "url": "assets/js/78.b6e2c641.js",
    "revision": "8cfc051abc62c9186945ca9f4b0b7431"
  },
  {
    "url": "assets/js/79.29b888de.js",
    "revision": "bc76353e800cae8ad6a9345474683795"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.c73dbc00.js",
    "revision": "bb5dedab736e30fa49d4c000f6a36c99"
  },
  {
    "url": "assets/js/81.ffdc6203.js",
    "revision": "06b1b684993dffdf4666e2942accaaf4"
  },
  {
    "url": "assets/js/82.408bddd2.js",
    "revision": "aa47890ecb92c035bf176cffe81d4feb"
  },
  {
    "url": "assets/js/83.4ff1100e.js",
    "revision": "5d1acdefb27ca5c98f6ccc42f1a9762c"
  },
  {
    "url": "assets/js/84.f8b65596.js",
    "revision": "d647a7494e52cb09e55e689ca413a599"
  },
  {
    "url": "assets/js/85.4b7bad4e.js",
    "revision": "1c7a0567dcd2410b2306eaab827bae7f"
  },
  {
    "url": "assets/js/86.8d1b268f.js",
    "revision": "e840b6d72f916652a134fe78a831a118"
  },
  {
    "url": "assets/js/87.1209e212.js",
    "revision": "d9311e9af4f12daae29e40c72b9a3aaf"
  },
  {
    "url": "assets/js/88.9f3e686b.js",
    "revision": "c3365b42b791c2f613002eefbcd24e4f"
  },
  {
    "url": "assets/js/89.40169f7e.js",
    "revision": "0697fcb83e37ad73ccb1d1139a821bc8"
  },
  {
    "url": "assets/js/9.3711703b.js",
    "revision": "9aa5c42a446df45ad327dc9effcc78f1"
  },
  {
    "url": "assets/js/90.639b4706.js",
    "revision": "b3fb45e854853b704e47d019454f3f6a"
  },
  {
    "url": "assets/js/91.03520faf.js",
    "revision": "82dc714205e49b14fc7e581c133cd6d2"
  },
  {
    "url": "assets/js/92.351478d5.js",
    "revision": "1ffaa0a01c7b84547b8cea6a2173d05c"
  },
  {
    "url": "assets/js/app.f79cfb63.js",
    "revision": "8907f10aac6757c562f23c05b70471ab"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "ff9717f9cb42b79f9152b98c5d146db9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4f750661b974756169529a8cfd94e9a2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5517c406ac21f8bb061984e2559671c9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1e2b5e5acd85016f41b52404908878e9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5def2aa2351a8cf5660d210bda2eb502"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "096307d47693a119f515d60e682afd11"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "21314ac4a3b5edc3b6e286a5fa8a9f24"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c1f95577b99e4f0b51c573bee7785af0"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0b44d9cf07a29fd2bc23e3f489906607"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "75894f028d5971c1eb7824bc080979b1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d354c52983f0518cf625afbf3bce1eb6"
  },
  {
    "url": "basis/design/index.html",
    "revision": "9db1d5845058237bf6c05d2df0a402a4"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "d06ad18822f5b642afc0ebea29097573"
  },
  {
    "url": "basis/index/index.html",
    "revision": "10b06816f644b54b8df06cabc5d0d936"
  },
  {
    "url": "basis/os/index.html",
    "revision": "bce0711d8bf2a250d3150c1ea5eec7ea"
  },
  {
    "url": "book/index.html",
    "revision": "db084aa8d337e875ad4c4ed709d6bfcb"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ee507766b91aa579d96e94188b641c34"
  },
  {
    "url": "categories/index.html",
    "revision": "8ae43d96fdbb44400150f0e4830d1fc1"
  },
  {
    "url": "figma/index.html",
    "revision": "f8497b1c08505fda8b6156c83d212e43"
  },
  {
    "url": "flutter/index.html",
    "revision": "7a813a622ba237fce2416eabaf265b40"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ba26f36722d3f4f35d1280ce33f214ca"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "235bf0d54f1c3e47a7b94e54c1d753e0"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6fff8b2c1373bdfa4307df8c507486b6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ea2ff0da664c7ea3220f78503c3f291a"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1027ad1e8e362870c8c5054bd39353ec"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "3f12f22ea8e56fce87de26cbb98cdc84"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "70a1b5981917e92e0d003f17ef6cb83a"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "880385d2589b1f5eb6c0275a722259ec"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "91f5def91fb404fb1f73b5a0136b2049"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "7e173fb358e3ae9245bcb7e8a938c3bb"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "97f8395e428c832f5dbbedf8c51cf598"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f14648d8033be3af5c9a4589473b136e"
  },
  {
    "url": "index.html",
    "revision": "7a4b15b660178e72d58bc7931f2ae5f5"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "1c04d63a35a487bd596e126dd618e196"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ba3d15f55d0b07945cf318a985d8ae3e"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "0e8ff41355f33008f8011d5673040ea1"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "df4e41d6b21c9caf0da87f8e7750fe0f"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "39aeb11ccf98ca91b651d99c6055035f"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "e72901083fe4a451054bd99fda30baaf"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "f51d5ad2984c4db163affe522816fc4f"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "bd56b35ef8d5c79d48825278bb34a6cb"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "b127ba2842a1196d42a16307da1b1993"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ca65e3d6cd77e713b27dc1387e486da5"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "dbb91470a7aa65686a74751ccf815f87"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "0582475a850e0a3410e57d5d1ee40955"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "41d9fef6a5cc9c27215f056243fd19cb"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "f46bb15b28838f2cd6c49310e63b6979"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "af8bad0dd632625de15fbd7ebbba4085"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "98d0824a2486d05e72511f8a864a2d18"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ef3b85a4c9bbe3a72e540445b9f1a013"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5ed4e0c3df86624db647264153e3dbcb"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "4aa86b0b5307557435623f0b2dcd9939"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ba8fbf5e5326fd1149aa7c181b668acd"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "8393944339e167abcc2564d9412d02a0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8655a9400bc99068077ea18b14f8723b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c6f5ddf29959df7bfee2692ae01deaad"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "392c7d3037c753219f114d58c4a62081"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b42cb1be645bcdfc1d3503aa6a4d8eb7"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "442eeffecab7380fb214fcf6ee407ff7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a25f3a0a58d74ee09886336a538f5695"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "d3e2e5f453e669519c7958fb49247bde"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "596ceceb4816dfe27e3e8a43777a4ff5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2c017f52eeafccb694e567a1a76931c3"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "5c2a5f97e723350f24e1805072a7973e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "07aae77824932e474c4ad95252138683"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "719570054938f7799e37a665c225865e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "13711bf591964a0bfac5eb3825cc264b"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b28f789c4561b8a6481d8d4898b97a5c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8ca0e6c67ac9320a42e6d226529bcf0e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e1d703c44fd0e3e447bd7c572f60f4b8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8cc640701d1c76a83080859c308f4819"
  },
  {
    "url": "tag/index.html",
    "revision": "7d8ee2a59a52269f5ef0f7d8f0d80a48"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "14b8bfdacaef01ff8568767925c1018b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "79e17f58b4184a5605dc411c0b00e206"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "155dba8efe14ac70f701a47c744a90fa"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ec6d3c3f3d22e7315a228d15aff1bf8d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "eadd87e5386109e9e6f97e8f640e6625"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3b3b172adadef7e749c387be6a0f709d"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d014bb0909056da4f042aad0c10968f1"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "7c31041bc6f14d37ec92be6f5b25ec91"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "49d312cd240ea645f74fdb969c6cc981"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "565ed05a666566c64c9041429f83b53b"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "a30f047ffecbdd9d2f69005d2bc557cd"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "fcdc8738012fd23ceb7079e7298a62d6"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "4c99902791aeee7952ba1ea2bf727987"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "7a6677d07fa21ea6febc3509e6a184ac"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "bc6dd8fe6bbba0525122bafea33d4cf6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "6e6c1baf3925412a3dc4af2ab2d7d840"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ef20f59376f2f644e0dd7bfd1211d177"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a4f095d38a12e027d883422a9253d76f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3549eb8754abc621a31654ee927db126"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "277af4c512d5d0cf45c20f50bfd7912e"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "5d46bb1d48befcb1dac04b5a2f518895"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ed8fea3eabbc3ac81a5eefd5cd276dd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d1c3fe8ae144860e8f0fd5153b51a0f5"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "00464686eff6bf1ef15334489e306029"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "42737afe091d9ea78887550f92279c5d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5b8e58d607d8deaa67f80e5bdb2fc1e1"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1063c2ccbd8ae499796316e7a789dd3d"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "43814b51b97dfbc54403ce61481d0130"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "079021802f4905656cd32f248159b9c2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "5cf3d2d696c0bec303600aad8e9c4202"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "46422ff0901716df924e34dbbc24aef9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "8c91f368308b8a5e94edddf593da6ae6"
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
