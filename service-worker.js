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
    "revision": "af833d3ecdcaccbfe85e101adee57100"
  },
  {
    "url": "about/app/index.html",
    "revision": "ff1ccc1df3d17b4061e84d11a8a855c6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b578bd1216a95bd718bc41ede1a9a76e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "37e1dbbe3bf958b3a0d348587b8425fc"
  },
  {
    "url": "about/index/index.html",
    "revision": "a9b8dd2666127046218a0911047c97fe"
  },
  {
    "url": "assets/css/0.styles.02431204.css",
    "revision": "02a21477cca6bdb33721f279084a1790"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f227fbe8.js",
    "revision": "aed5dcfcca1efac00ac39433b22c794d"
  },
  {
    "url": "assets/js/10.4ae0625d.js",
    "revision": "de0a66e60353160b65f8c632bb656432"
  },
  {
    "url": "assets/js/11.26bb3e0d.js",
    "revision": "c4ca3e063b638095141e1da0739f087c"
  },
  {
    "url": "assets/js/12.11a8a456.js",
    "revision": "866e8d98b4c50093ddaddea1807a0c2f"
  },
  {
    "url": "assets/js/13.2f24503e.js",
    "revision": "8a677c7c7e4401073d06eac3b5c49ab1"
  },
  {
    "url": "assets/js/14.dca8ac7d.js",
    "revision": "1e68cfd3bb61fbaf31ef75d9abf9e03b"
  },
  {
    "url": "assets/js/15.3eb8ac45.js",
    "revision": "9977d1aa50c64c2885ef292cba6a9d7c"
  },
  {
    "url": "assets/js/16.5e2f9482.js",
    "revision": "98920ce1b809aa4067bc1a7faccf2b48"
  },
  {
    "url": "assets/js/17.956dcbc0.js",
    "revision": "4d2755e8df32dd36e81b445727b7812d"
  },
  {
    "url": "assets/js/18.f5bb9f53.js",
    "revision": "34a9835d8cb63df223fe9f4db4bd1f21"
  },
  {
    "url": "assets/js/19.3a5d468b.js",
    "revision": "ac2348cf63d6e5f3e1cd225f73e4ff2b"
  },
  {
    "url": "assets/js/20.649f6835.js",
    "revision": "6cdb0cc070e4ec578be6d9bf9f313f9e"
  },
  {
    "url": "assets/js/21.0b5e356a.js",
    "revision": "69ec02a485295176353f2be09cb6cc3c"
  },
  {
    "url": "assets/js/22.b8077a1b.js",
    "revision": "3a2506719d04228f15b9d7c7f1e3fc38"
  },
  {
    "url": "assets/js/23.8de7ba62.js",
    "revision": "54d39b19e24b8d0b00e5a0f70ddf92d0"
  },
  {
    "url": "assets/js/24.d8fa631b.js",
    "revision": "f3dee10ac3963bbd36d7ea0443594db1"
  },
  {
    "url": "assets/js/25.07ff1d77.js",
    "revision": "9b44b551cb6276d13617897e15893889"
  },
  {
    "url": "assets/js/26.bca32032.js",
    "revision": "29bc23e0a5df2f7d9c8a43cd8b686a81"
  },
  {
    "url": "assets/js/27.e2eeefde.js",
    "revision": "a0fc9c089fa67ff8eab124c7bc85467c"
  },
  {
    "url": "assets/js/28.419b8645.js",
    "revision": "9e4c000ced9086645d94a1d56ed97c25"
  },
  {
    "url": "assets/js/29.ce751905.js",
    "revision": "96cba5ffcfacfe5e15cc384348292631"
  },
  {
    "url": "assets/js/3.efdd3efa.js",
    "revision": "afce79097afa51be3c456f96ff5706bb"
  },
  {
    "url": "assets/js/30.be2e87a7.js",
    "revision": "122bc5624b093e9360725450e7b3df15"
  },
  {
    "url": "assets/js/31.f0ff06bf.js",
    "revision": "a6f70245fc2a36731ba9b4d94d714644"
  },
  {
    "url": "assets/js/32.70596f0a.js",
    "revision": "d36a3f7857db2cabbc34dd724ef1a626"
  },
  {
    "url": "assets/js/33.0f40f33f.js",
    "revision": "b995d045fe659da24c2c389f74570981"
  },
  {
    "url": "assets/js/34.a4fbafa7.js",
    "revision": "d6437dda9adc06074761caf7bf35a167"
  },
  {
    "url": "assets/js/35.bf5e510c.js",
    "revision": "306210b7db07e94982d37efb82e34710"
  },
  {
    "url": "assets/js/36.29606cb5.js",
    "revision": "b2624929fda74b20b984241759a92fd7"
  },
  {
    "url": "assets/js/37.59fba592.js",
    "revision": "878db90b970d9360f7e57021e5cb2bb7"
  },
  {
    "url": "assets/js/38.2bfb183b.js",
    "revision": "b64ea6199d6d991b072538703cfe2c1c"
  },
  {
    "url": "assets/js/39.a8763697.js",
    "revision": "120ccf21d29aa8971c196ab13f8729f2"
  },
  {
    "url": "assets/js/4.12d0db8f.js",
    "revision": "f4acf16d6b281eb8347b062f7e02e4b9"
  },
  {
    "url": "assets/js/40.51834a68.js",
    "revision": "2be9029a05ec82498a9af11277acf700"
  },
  {
    "url": "assets/js/41.d9c1bb14.js",
    "revision": "973b2b0b9d62c4456ddee5c0b6e28fa9"
  },
  {
    "url": "assets/js/42.7d98992b.js",
    "revision": "7e6fbf6be28aef46a9a35ccc1a3fdbab"
  },
  {
    "url": "assets/js/43.a085132a.js",
    "revision": "24606c35ee1c6ec7d0bcac31428f5c73"
  },
  {
    "url": "assets/js/44.beaff288.js",
    "revision": "ee79492d508910caff0d674d3fed315b"
  },
  {
    "url": "assets/js/45.a32c3236.js",
    "revision": "33ea303ac0f2d592197bad7c2b0b04b5"
  },
  {
    "url": "assets/js/46.ba3fe6ca.js",
    "revision": "9bdcd8f2eb52d3dae3eb4c5cfbb1f2d4"
  },
  {
    "url": "assets/js/47.fcb39853.js",
    "revision": "d4b65417d07cd539fc3798f94eb4aef4"
  },
  {
    "url": "assets/js/48.7edbfd40.js",
    "revision": "3284fc9cc97971241fd8c578174a40bb"
  },
  {
    "url": "assets/js/49.400534c1.js",
    "revision": "4262b16edb903c1dbe65e7376692b001"
  },
  {
    "url": "assets/js/5.f8ea9df0.js",
    "revision": "fc956de5f35d4013ef0d64a34dcff730"
  },
  {
    "url": "assets/js/50.d2d5580d.js",
    "revision": "54aecbd657e0431380d075361183b93b"
  },
  {
    "url": "assets/js/51.ecaa865c.js",
    "revision": "7b078f267a5ec51dc18d78d904a15b1c"
  },
  {
    "url": "assets/js/52.3e283551.js",
    "revision": "dc3adc17c4bac8f09dc2fdf6d0b59bdf"
  },
  {
    "url": "assets/js/53.504e6193.js",
    "revision": "fa9a13b4dd5ce87eb0b9058cf8bac3cb"
  },
  {
    "url": "assets/js/54.81123cba.js",
    "revision": "91ec109293853836859f432bdf6838f7"
  },
  {
    "url": "assets/js/55.25e715c9.js",
    "revision": "0e0d4fb62fecf41833207f14797f5ecd"
  },
  {
    "url": "assets/js/56.ba012f8d.js",
    "revision": "6ed9b66c21cdd5e7f9837de9bf70cb6b"
  },
  {
    "url": "assets/js/57.833a3b78.js",
    "revision": "37f039c98fa397bfae0ecc388e3d64e7"
  },
  {
    "url": "assets/js/58.a062ee8b.js",
    "revision": "829515a699e8cc5bbb7c418abadfd08e"
  },
  {
    "url": "assets/js/59.2394c021.js",
    "revision": "931efc4112c40e83adc72af9fb16347f"
  },
  {
    "url": "assets/js/6.30d8466d.js",
    "revision": "995deaa39e844062b1da500f78bead08"
  },
  {
    "url": "assets/js/60.43e12819.js",
    "revision": "a67f3815bcbc53c348461562e6ed6541"
  },
  {
    "url": "assets/js/61.9d63d2ae.js",
    "revision": "5625ecc72d60a8afafc0f7636d601bd2"
  },
  {
    "url": "assets/js/62.8a4c95c0.js",
    "revision": "b3834ee72f55afd19d4b2c9ae2d5042c"
  },
  {
    "url": "assets/js/63.86245f77.js",
    "revision": "1fbafa8628248ae9e204ef7216dc2e19"
  },
  {
    "url": "assets/js/64.2b96afee.js",
    "revision": "0f1911f1b9ce666b411235e3247fd45f"
  },
  {
    "url": "assets/js/65.3b1f2536.js",
    "revision": "1ce5f31b5bf3ff140d32aadf44bb01ce"
  },
  {
    "url": "assets/js/66.7a772672.js",
    "revision": "850229e277bd426834b8e4684ca50d18"
  },
  {
    "url": "assets/js/67.e228a65d.js",
    "revision": "3a0158c2b4ecbd3cf6888bb96c37a0c6"
  },
  {
    "url": "assets/js/68.2f8b82d2.js",
    "revision": "403dbf80d3295f01711b1e80d4b95329"
  },
  {
    "url": "assets/js/69.03b5d6de.js",
    "revision": "6b8c10c29cc67736d09cbb4f1be9f70d"
  },
  {
    "url": "assets/js/7.b76b832e.js",
    "revision": "5c9ee7202d15a668073076b08e8d7b5e"
  },
  {
    "url": "assets/js/70.2cc5558c.js",
    "revision": "4ac40d8f4f8008014cf2cd2c8fdf1b0d"
  },
  {
    "url": "assets/js/71.65c32d76.js",
    "revision": "fe3cd9fa17f515dc4c77e66d3c60b941"
  },
  {
    "url": "assets/js/72.abb27777.js",
    "revision": "c55949fa5dcc903eafcc9b99d8021841"
  },
  {
    "url": "assets/js/73.41aba8ce.js",
    "revision": "a64f8b2caa7cdfb0ba406e2894846c54"
  },
  {
    "url": "assets/js/74.0a2e00f4.js",
    "revision": "00fb2f1c692231b8e02e7e7a5f32a673"
  },
  {
    "url": "assets/js/8.e4a9c76f.js",
    "revision": "9e9768a8be0e0a2e3a7dbc8ba953318e"
  },
  {
    "url": "assets/js/9.1d7b4d42.js",
    "revision": "272ab95d583d18c73a09c4174267035e"
  },
  {
    "url": "assets/js/app.a646ce0d.js",
    "revision": "0a8414804d50653150e436ba06be648d"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "d51080f95487c05fdb887d62384b9521"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9477b0234f18c3a7171fde048f2a031d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "32809d860921db947f0167faff39cdc8"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "50981bf1b2d614c2a4a5256100a85ab9"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "5518e786caea516565365dcb70b6e136"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4697558265da29974e01231cbfd75bc7"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "44bf597d776fb1d86a57d0d768e9bacb"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "90319f29435789096b5b700e547bc541"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c6d6c320d343af3b1cd52efe6abe922f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "62c04163ea5a86dde42af642d71face5"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ff44a239e29f07a0514d2a44337a7e46"
  },
  {
    "url": "basis/design/index.html",
    "revision": "091103a0416f8a82ecc5e9fe018e1015"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "8f2dd313954e96785125cf78e2412852"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2d5db1c39bb4bc0f650e95d1d6d9f3fd"
  },
  {
    "url": "basis/os/index.html",
    "revision": "f1b55b592bda39182c2ba8c5f9d6c103"
  },
  {
    "url": "book/index.html",
    "revision": "8587a52312e85c0f8626c27eb4a62d33"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5fefeefc18688026ae8b1e0f46e4538d"
  },
  {
    "url": "categories/index.html",
    "revision": "1f02cbb549d2d4af27d5ef513d74d143"
  },
  {
    "url": "figma/index.html",
    "revision": "ec43e1c2eb18e266b45ada3ca6ba64b2"
  },
  {
    "url": "flutter/index.html",
    "revision": "29d5e7673294835a8d7d07952c1fa926"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "15a010d78057c7b7f1c9e786cdb649cf"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "91e6caa323b9c05da5ad670a8c3d4733"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b04145e246a04751fc95ec7f64e10f2f"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fd377615481ed97be509e6661365498d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6fdeec5278dc174d9f58bffc437e8090"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6a55a5cade18b49fd45704cc248971cc"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "2c58593afff307aec6157b53d52752dd"
  },
  {
    "url": "index.html",
    "revision": "ec2b1f6e56b34fe36ac07fb41a1654b8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5f43636c049a2359b8726f895923a63c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "24dc0f5a73bf6f3fd05979d5103c4e61"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ce9f718f6afd646fb5399109889e3da0"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "b336a022769f1442b4271e34514b8a19"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "16f0e9bd5d3f93ea24cb8c1b4da1f35d"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "50c7226fb1afbb5971210b42913b1975"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "0bc50325cbd8716f43b3296fa1e82051"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "12b595631dc55f91cfe3fb7a5ad6b344"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "ee65f3dc49d7afc7a6c337473bf3f90c"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "ed85fa66fa2e53b8a71fc5573abbdc9a"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "8691e98c7d84b95d91cb396a8a33d808"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c3afe25934399780dd375f830df70ece"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "15774e74ac0641b6be5dc8562f852387"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "7842a494b8d42717e369eb153bcefb81"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5ea6be509be166e63ec8560a875d9896"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "647b0460e92794fad906b5ed9b9b2a5f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "c36fb266d1d6af489f6d31a3e3fada9a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "fda8583958f5a55baffead9077337ef4"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "837fe725fcc64c525d6778fb454be51a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a5e1d9842f39335c1fd08c6b878d926e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "12a4cf2e456ca0e5a376e5158b8807d0"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "b2530342193c38d514a76a9ce01fc5dc"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "cb130b94407fd8b3c8c3551514ddf3e4"
  },
  {
    "url": "swift/vapor/u-10-read-code.html",
    "revision": "e9117e9c8afe51c59080505d4f3a633b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "8804c1b9f20262cc0a077a3b5727a0ec"
  },
  {
    "url": "tag/git/index.html",
    "revision": "36738af33350d964a812f1c5e5c77666"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9c8e49ff9cf22b32ac4036f27dfee3ed"
  },
  {
    "url": "tag/index.html",
    "revision": "fd78dc1f107f5eab7cb0a94d946541ba"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ca1eb23a5415a9cb72d1ce5342e7b2ee"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4bc8f980cf80755a12f6c5bc4230f705"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d25edf559502ce6be35a480dac42670d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "239034adfc971bdb68806ad7b5086e8f"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "bc596fc4eb576178fdb98bfdc36dfd81"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "2305533692aada68a9ec8dfcd3094a54"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5e6fdc8e1951b6f8903493e2abefbb46"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "fafbfad9df3b295804a444b6d5e4cc2c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "21e13a04c4adb2ebf19c1a04c7c6a6c3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a4b0b79013d80a4ff9ac69e3d5860cc1"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "5121e474871c471be015c6a106fb12ad"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "936ee7201b23b4ee056e212cb82dc7c3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c43cc1b0af6f53b0be750a042e1a5895"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "60be8cade4abe0fc7b78525634bb6abe"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "a917774cca6dc22cd9263f65ed8f4a1b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "d390e4e1c643b9beb5f7ab05b96c433f"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9bc4f573c6c6073893491e15b4629192"
  },
  {
    "url": "timeline/index.html",
    "revision": "83f5bb7b0ec3644812740207d9eb890d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5f909113fcca449d1d9d4f4a44430850"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8fcc78465000269ed70a8db1673b437d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "deefa9bf57fddb7044c45eaf5d5ca802"
  },
  {
    "url": "tools/html/index.html",
    "revision": "34b961e6ee449f15d1826c6266652d23"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "ce7e7ccf391cc64e79397965d16715ba"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "81cf78bdcaf841aefe39af67e3b13562"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "73ae22a894a204c8e98c3bfc7c8fa576"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "42ab741f46baef124f43c1b88526d925"
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
