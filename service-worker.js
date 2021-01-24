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
    "revision": "6f13579a1ddfdb0739633db1b2501362"
  },
  {
    "url": "about/app/index.html",
    "revision": "283537628e343b80ded3496215b9047d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f8eab675c9895fd0f2e8d190f9805191"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "a7790565ee3f264bb886f7c9c123a520"
  },
  {
    "url": "about/index/index.html",
    "revision": "1bb11fc23c5086fb70e2041cacea8374"
  },
  {
    "url": "assets/css/0.styles.ef8fbc08.css",
    "revision": "75d501d333253bf66acf622f468da4e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.a23113d3.js",
    "revision": "f9ad9ecee0d76c03cafb2356d554432a"
  },
  {
    "url": "assets/js/10.e2cce4b3.js",
    "revision": "4ca55ac5d9220c2795fef472275f8581"
  },
  {
    "url": "assets/js/11.3cbebaf8.js",
    "revision": "52dad7bfe1cecc3887b1dde613e10d5a"
  },
  {
    "url": "assets/js/12.2cc6e04c.js",
    "revision": "f1a2b7586032449e112c938cb9f6f904"
  },
  {
    "url": "assets/js/13.2d6171c6.js",
    "revision": "800ea8f1a2e10f98f752656e3bdd247f"
  },
  {
    "url": "assets/js/14.3f74a4b1.js",
    "revision": "5bea93e4498ea21bfb0a2f8bd77d05aa"
  },
  {
    "url": "assets/js/15.bfa0770d.js",
    "revision": "5c86a9c5c1c0a455e2b03f2bdef656be"
  },
  {
    "url": "assets/js/16.a5e1c9f3.js",
    "revision": "b2bca1f28ad1fe9a8d4e37c70618f3a4"
  },
  {
    "url": "assets/js/17.dc987c41.js",
    "revision": "57a5307028ae394d7411cdf0808eb74e"
  },
  {
    "url": "assets/js/18.bf7b1e37.js",
    "revision": "9a79489ed5ade5bdb3ab4679e610f68c"
  },
  {
    "url": "assets/js/19.c00a3102.js",
    "revision": "6af11bbdebaef8f72cd7fa47a50d7907"
  },
  {
    "url": "assets/js/20.3cbf4f10.js",
    "revision": "3072860f7c58eb3a7c52af5fa994992b"
  },
  {
    "url": "assets/js/21.85927cdf.js",
    "revision": "cc045dd6dce444c9e302dcff85acc2f5"
  },
  {
    "url": "assets/js/22.7c8f04d2.js",
    "revision": "1035438d6ee61faefeb1dd24889ad367"
  },
  {
    "url": "assets/js/23.577ce3af.js",
    "revision": "e46fde1ff1d09bd6957880035435b5ab"
  },
  {
    "url": "assets/js/24.b88ad7c5.js",
    "revision": "d352aa6ce49fcd022aa0947f48356f99"
  },
  {
    "url": "assets/js/25.3182394a.js",
    "revision": "47b17832b5d84ae81793b5d345c76df9"
  },
  {
    "url": "assets/js/26.fb1b6b52.js",
    "revision": "9b99b70e005ba8aaaa0898945b95a5ea"
  },
  {
    "url": "assets/js/27.50d208bb.js",
    "revision": "397be1ec09bcdd6d8c0b107f77863123"
  },
  {
    "url": "assets/js/28.abfe1ab8.js",
    "revision": "cdbec9a48ca35418433c5187f92898c7"
  },
  {
    "url": "assets/js/29.16086d9b.js",
    "revision": "ea53bb09ceab0ad9a1cb55f791cc4cca"
  },
  {
    "url": "assets/js/3.1b0902a1.js",
    "revision": "1710836fc76effd31953a68b908415ee"
  },
  {
    "url": "assets/js/30.2ee57be9.js",
    "revision": "42ce1a03acd34b8b89417b724a7ef6b6"
  },
  {
    "url": "assets/js/31.4b330b51.js",
    "revision": "ed7aef4284fb98e25f699ecbf6137a8a"
  },
  {
    "url": "assets/js/32.65834969.js",
    "revision": "b9de9a9d140b626454b1343ddf8379f1"
  },
  {
    "url": "assets/js/33.d8fef21e.js",
    "revision": "60f6ccc4eb69046c3efea0be2f3b365f"
  },
  {
    "url": "assets/js/34.6c134203.js",
    "revision": "485acd8c0702327cd153f77a91beeefa"
  },
  {
    "url": "assets/js/35.375aede9.js",
    "revision": "0eb64ae9ff40399045cf14297ccdafd3"
  },
  {
    "url": "assets/js/36.572d6680.js",
    "revision": "098ba94b38aecc617555e193efb1b1fe"
  },
  {
    "url": "assets/js/37.a9642e20.js",
    "revision": "e940e6d8d88ad81853be53b826e3bdef"
  },
  {
    "url": "assets/js/38.d69bbe59.js",
    "revision": "548bd3247bb496faf158f2359280cdbe"
  },
  {
    "url": "assets/js/39.4a170183.js",
    "revision": "934e1b6c23796c95a9620ef24df8403f"
  },
  {
    "url": "assets/js/4.0cf07b02.js",
    "revision": "7b0660a0fcb6ece7b8081a911ed9b5af"
  },
  {
    "url": "assets/js/40.95191603.js",
    "revision": "24ece0d07eef55612a36712c1c35f0de"
  },
  {
    "url": "assets/js/41.83cd9f32.js",
    "revision": "86679e21851db1d527c68ad4faa75613"
  },
  {
    "url": "assets/js/42.965d7a6c.js",
    "revision": "3ef8be1a09befdf89d24a6a2a487a375"
  },
  {
    "url": "assets/js/43.dbf3732c.js",
    "revision": "1d47318cc9f28bd74dba62fbde19d977"
  },
  {
    "url": "assets/js/44.b980063c.js",
    "revision": "6bff15ccb97068f1a75ef9423d185959"
  },
  {
    "url": "assets/js/45.df1d42ec.js",
    "revision": "84d3c849df97526c17f95c59dff7a4ad"
  },
  {
    "url": "assets/js/46.6fc18df6.js",
    "revision": "a66905f31d6f492d960acfae63e2e026"
  },
  {
    "url": "assets/js/47.8afa2e4b.js",
    "revision": "716ea9ba4bf8dbeddc7dad8d7da942df"
  },
  {
    "url": "assets/js/48.a391b13f.js",
    "revision": "4baf2664b6b89e3ec09ae74b5bad7e42"
  },
  {
    "url": "assets/js/49.4cee5e73.js",
    "revision": "9e6e1df0dbc2170d9e043528a6056269"
  },
  {
    "url": "assets/js/5.e00cae0f.js",
    "revision": "f3769e2db35824bb31e86ba2095e453e"
  },
  {
    "url": "assets/js/50.6c44764d.js",
    "revision": "5c7e2c0332154f50a216c7a858da8d85"
  },
  {
    "url": "assets/js/51.9c216d16.js",
    "revision": "4b03eb142bd98bb4f81c5bceb299ee2c"
  },
  {
    "url": "assets/js/52.c6ceabca.js",
    "revision": "395b12ce3e1c7b598717afc34c27322f"
  },
  {
    "url": "assets/js/53.230d8c77.js",
    "revision": "98ffa6639c29ef5b7549910c2818f821"
  },
  {
    "url": "assets/js/54.572dd89b.js",
    "revision": "6cbbe7c2789a0051a7b23bb55263c826"
  },
  {
    "url": "assets/js/55.6c8270c6.js",
    "revision": "f70a559650205a8b5b233ebab7c032a5"
  },
  {
    "url": "assets/js/56.b5fe7bee.js",
    "revision": "bcdb00ba214e71caa01e94dd831775e8"
  },
  {
    "url": "assets/js/57.24aee490.js",
    "revision": "905ca8741d1b0f1ba2601195a11f53ec"
  },
  {
    "url": "assets/js/58.cdbb0cb3.js",
    "revision": "6af3ec07f53738612e2a212860b787f7"
  },
  {
    "url": "assets/js/59.44643f2d.js",
    "revision": "1ba72c0bc14b077e9b6c5c5bd8cdeb42"
  },
  {
    "url": "assets/js/6.6e678aff.js",
    "revision": "adb90a0af62af52837c5615074629882"
  },
  {
    "url": "assets/js/60.979be6e3.js",
    "revision": "b95ddfc9fbcf8905abedb19e61f34b5e"
  },
  {
    "url": "assets/js/61.6b49ffe7.js",
    "revision": "d1353aee9dc06e7442a8fa91831faf07"
  },
  {
    "url": "assets/js/62.392ca78c.js",
    "revision": "fe1789ee48911146ebb8486f46647e35"
  },
  {
    "url": "assets/js/63.1a683a0f.js",
    "revision": "e0aefe2fa3204b4a937c0211c3709b03"
  },
  {
    "url": "assets/js/64.e8e44411.js",
    "revision": "7338de9bedf6b93ac4871efb58f8e4e1"
  },
  {
    "url": "assets/js/65.d565ded7.js",
    "revision": "135397614bffd9b69dbf7239bd9b7acb"
  },
  {
    "url": "assets/js/66.0dff234d.js",
    "revision": "230646095cfe887acafebd2a9fff7e65"
  },
  {
    "url": "assets/js/67.b58e7e0e.js",
    "revision": "3c9c02fa486995e7e22b3777c7eebc0d"
  },
  {
    "url": "assets/js/68.9316a9ef.js",
    "revision": "326e09f0626375d2b76246379bb7a209"
  },
  {
    "url": "assets/js/69.56826a02.js",
    "revision": "ad7288a301db032534b63a1a70826e0a"
  },
  {
    "url": "assets/js/7.923ac453.js",
    "revision": "978f984cda412c028ebb713b18d53447"
  },
  {
    "url": "assets/js/70.f16b08a5.js",
    "revision": "01fb3829d4865e160235a5cd8391e93e"
  },
  {
    "url": "assets/js/71.3b6740bb.js",
    "revision": "0314cffb8ac3a864070f917632d6b3cd"
  },
  {
    "url": "assets/js/72.60453ba0.js",
    "revision": "2ea2dbc7e47c4e4873f723254cd76917"
  },
  {
    "url": "assets/js/73.36fa44ee.js",
    "revision": "29c0ab1bb976ddf4a008fefdc950ddd9"
  },
  {
    "url": "assets/js/74.404e0ac3.js",
    "revision": "198500584b38afff09b1fd3d8cd31e8a"
  },
  {
    "url": "assets/js/75.53e3b885.js",
    "revision": "6a231147fdff32056ab7a297ad1aacd0"
  },
  {
    "url": "assets/js/76.c8d7c8f9.js",
    "revision": "9e995c4912b995360f8fa839018f1501"
  },
  {
    "url": "assets/js/77.f6643dee.js",
    "revision": "e1ee068b036d70091560c44ac64db79f"
  },
  {
    "url": "assets/js/78.8c12c773.js",
    "revision": "d18f2ebd7d5683677b21f0b4917f9e9d"
  },
  {
    "url": "assets/js/79.77a5cddf.js",
    "revision": "9f6dd9bfed5264239fbba41b65defda4"
  },
  {
    "url": "assets/js/8.9a4a9dd8.js",
    "revision": "45f072ca3591748a0748ac1511882b5a"
  },
  {
    "url": "assets/js/80.5b37c0b5.js",
    "revision": "42090ca11f6f7f5087d1061b16063195"
  },
  {
    "url": "assets/js/81.008fc035.js",
    "revision": "6db72e85ae72c8ffd39463f8f335e55a"
  },
  {
    "url": "assets/js/82.c3979ca3.js",
    "revision": "f28f6a75427bc85f27fae9e02b289fc3"
  },
  {
    "url": "assets/js/83.65b462d5.js",
    "revision": "805b371a50ce08276e57b55881516823"
  },
  {
    "url": "assets/js/84.cecccce8.js",
    "revision": "ad7c94154427ebeebf13eec205d63030"
  },
  {
    "url": "assets/js/85.68a39c91.js",
    "revision": "9cafdaedb913b8e396bafb05ae28b391"
  },
  {
    "url": "assets/js/86.b0e7e3b5.js",
    "revision": "bf09e7ae4e8dd8cbe6e69412ff62cedf"
  },
  {
    "url": "assets/js/87.6130406a.js",
    "revision": "35daafd2dfdc81f6cb67e83f28329956"
  },
  {
    "url": "assets/js/88.17823982.js",
    "revision": "f9b0bfbcdd4114a8931d303236c166b4"
  },
  {
    "url": "assets/js/9.7cdb6692.js",
    "revision": "f8cb73f525bdc44e876e55b9a79d7100"
  },
  {
    "url": "assets/js/app.0b602066.js",
    "revision": "fdc037fe28e4370ab36d6b60cb84cdaf"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "b9f93514666c2de948d2344763c469cd"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1258d3dece36ec8462631a77ebbcc4e4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "22521be80c4125c583305ad539525cb6"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3753186560a7e2b913a570a5cf19339e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "838c503314e2868eb3cf9a7f658b2503"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "314cbda1a3923db7f11f0a8808f432d6"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "54b136bfc2055c9d7f108fd899510304"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "de8a001da09551b00cdbc3b597351d12"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "96ad38a615d878c9d23eaf8e4851a22e"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "034350766157c4780a9e4b699303e65c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "d579bd2b38c41315e334fae41df4b5b6"
  },
  {
    "url": "basis/design/index.html",
    "revision": "0c95b0236638c398d4744dbbae9f2e9a"
  },
  {
    "url": "basis/design/t1-designs.html",
    "revision": "c21401eecba2d07d743d5e8d9a9e562e"
  },
  {
    "url": "basis/index/index.html",
    "revision": "68dab8dc151d0edfc04041ce81bb8322"
  },
  {
    "url": "basis/os/index.html",
    "revision": "79d842abfdf60f33021a18dba59c9e56"
  },
  {
    "url": "book/index.html",
    "revision": "b7862c615dbdb7b4901e506c5757bcf4"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "79bf10510098c8f9bf5b6131f06728b1"
  },
  {
    "url": "categories/index.html",
    "revision": "e582acd00b1cc673b94cf73b8df361b5"
  },
  {
    "url": "figma/index.html",
    "revision": "898f4dfb80f1819513b3584d4459df7d"
  },
  {
    "url": "flutter/index.html",
    "revision": "a11274b81c6952989f1bc6c2a57a16a8"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "72bed5d8e8af29e55e03e61a2891867e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "413a5cd9398302d528eb8525b6cf12c9"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "29cbfc53bd5a04bbdf2376c326d7ea20"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "3b1d76dfac7e6f981776eb61324dbb31"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4a274974837decc296c9b40b64f59d2b"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "eace92ab4ff88e2c30538c3be0102799"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "238add06f871ab2c81e795900aab26cd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1a1bb2bb8b0d791168f2669e56cdc546"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a31bf93454a0871352bcc7538b537c87"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e561f1683974d5848ad969d35605cd23"
  },
  {
    "url": "index.html",
    "revision": "90322e439668686255911196141bf365"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "824db4b3217555bc4fa0a34c0922a074"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "8b41573712c49a3ba29a45cf10f8b9e1"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f842f996340d5f6a913eb2179debc741"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e79a22a09ba5ccad8b626767959ee618"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "7ec371dad9a5b0173a18b3fb8a3d25fd"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "5ed8fdbb7173a2e523c5848413ffd750"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "edba2bef2cd0685bf512a96490ec2f34"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "18c1b6f04c2a9e7341463bddfb5240b5"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "72041ad379dcd1b58c62372af507837d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "5938f259858f6bc4b87f2fec64bf5250"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "7286390f0017b00a5c58514331379a74"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "620131c0e349c194bba4fb958c3508f6"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "9f94551480cb011a20cdc052eab95a37"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "eb9079f783b958d6c5a529d81cf662b5"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "8a230eaebc418e58ef5080ebc6b3102a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "62d5fe4fa306f4528980c0975d88bcd5"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "97d1531c5f718ec75326bdbdd34e6f0d"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "1ab8dc8006ea0ac0ec034738f7bf7066"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "aa6f843b6c6f842db7eba93f1fbf7205"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "348f4d544acdc17aefa49b66524194ab"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "76f5b610d5d4e176514d60c580eeef96"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4de778cb0fbe626af6b16f2349fa29ff"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d4ca9ceda3618c13534f7b379e2bda2e"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "7e7e8e59268eb58a4ea1eef1e0caf03b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e4335044b656c79d7ed39c2ce2f4a369"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c4ede6b414aeb67817f7c502517586ea"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "42eb76142b968f91b23703046719afa7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "2a5f7d126d656871197c4db03274af9e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "32bf0c66eed9d2a52948435f7baebe26"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "30502fe2ce7094ca263bd454c5e43803"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "383348a15ce209bea9670cf069b4931b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "bfc908a8cde8883a90f89f9f4e32ef07"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "bf5998f522fd50ab59dbfdfc305869ce"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f48fe89129b8a50a8bb1c073fe1e4956"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "c5f933e3ebb021ea9a700fa44d448c54"
  },
  {
    "url": "tag/git/index.html",
    "revision": "369a5b9d567cdf308a93e64018851cd6"
  },
  {
    "url": "tag/html/index.html",
    "revision": "748d193c51509951e2ba2caa7baaf522"
  },
  {
    "url": "tag/index.html",
    "revision": "9aeb92bd09183c0c6389a3563644f0e8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b1034df15108fea52a2263a59d262300"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "2917d77613b4231999f06249ab21f9b4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4b5a8d039dafc6074f810d710183a2b1"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "475a61c02bbf4169751b32439038bd16"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0e917251803cdd9bc774dbdf2e15e649"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "39009e1ec98bd5805630c39d13d978bd"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "1f3d06aaa4bfbf506fabf607f84108f5"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c75ba10f91d7dec795f40e27920124c5"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "330697b56a74d9c6370306bf40bf6a05"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "ab9dfa2af794b9888bac12fb20ccae6f"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "362e78a5a1b7cf25655451631a3ba97a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0f6c8beb06da3d906694bec4ad129c36"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "000f363a1f2fc58f707ad76b66e7b3bf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "cb6bddc14cecfec52d7fa77073fd97e7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "47983afe75246bbff6b5d4feb1b9790d"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d260cda3d7975d3b1db8d1100973e0c8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2ec7fcdba5f9724c46dd9ecaab3a9c55"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6806ad805adcc485be9705e3f07f2577"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "ce6c65d75916fbbb8af1ddc5c2d1f1e1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1811c71199e82d930c02014756aaf73a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "42840f4af6add5fb248557d31d8103a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "569d51ec2a21521022790f556f135692"
  },
  {
    "url": "tools/git/index.html",
    "revision": "cfa369de620fc2e211149e4e69d593b2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "a30dff1bcc1736b6ddd356b3ad271242"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "68f247e0d281f922f3d39ae9d12f25a3"
  },
  {
    "url": "tools/html/index.html",
    "revision": "064d718cf769eae38b51cfadef17dfa6"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3b7e1abc19248a165053ce956f564e5b"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "43cde410567c604cc9e0d5cd676f0aed"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "79e86205c3ecb39f216c39c098dda2a8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "27ba960ee9e8392bd55fac72773908c4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "78b0290f28dca1ae7c75dab2fd887225"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ea10c29f35f6c4481473b750415fe79b"
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
