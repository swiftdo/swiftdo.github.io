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
    "revision": "384cef0de27f2d89473bcb2c5bb3e45a"
  },
  {
    "url": "about/app/index.html",
    "revision": "5e8917156ca3fc89328c22cd04b12d0b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "c6dec2e7f9b981c56b3ef4e2f65fe167"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d09bf9091a8278b606a4bc05109f3b7e"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "1f0137725596dafc633264af801b1f50"
  },
  {
    "url": "about/index/index.html",
    "revision": "2ca3b5be11d52645042826f4acd1b39b"
  },
  {
    "url": "ai/index.html",
    "revision": "ec588a5c58bce3d72fda6d25eadcf94f"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "46bc52a11689cf465fed563642c97e1f"
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
    "url": "assets/js/10.0082ff9f.js",
    "revision": "d7924e5ff33553d5bce3e50fa4438730"
  },
  {
    "url": "assets/js/100.8fed33f5.js",
    "revision": "9aab57a13474b0f1fbbbc021efc7f240"
  },
  {
    "url": "assets/js/101.f7c83ef1.js",
    "revision": "643e6674c1847a09aed8bf9a9b5ba4df"
  },
  {
    "url": "assets/js/102.7224ae93.js",
    "revision": "f60dbde891531512c2d6d5c72c27e71c"
  },
  {
    "url": "assets/js/103.9d5dd9ce.js",
    "revision": "bacc4339f6c9c2c4c31c74fc899fc85f"
  },
  {
    "url": "assets/js/104.4830f36a.js",
    "revision": "c61e51764644fd888d80a6c6c74b3b53"
  },
  {
    "url": "assets/js/105.6c2e5fa8.js",
    "revision": "63f53c1e4eac0de3b14e1636ea5a5abc"
  },
  {
    "url": "assets/js/106.5acbecf7.js",
    "revision": "fbca5cfc3625728e36df1962d23e6abd"
  },
  {
    "url": "assets/js/107.700f7027.js",
    "revision": "9f875138c51bcc7328162a6247e71562"
  },
  {
    "url": "assets/js/108.3b1e358c.js",
    "revision": "b25ea9fad8458409867bef31bb9381c3"
  },
  {
    "url": "assets/js/109.2b6f4803.js",
    "revision": "c35e407c59945a101fb003ecd71ddf55"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.53413a4a.js",
    "revision": "4a796b7ea649046bb994ceb507a2fc09"
  },
  {
    "url": "assets/js/111.f574c49c.js",
    "revision": "441bf7694ce4e0e0dec3ed941eb78bac"
  },
  {
    "url": "assets/js/112.0c8df473.js",
    "revision": "57240957bc6e9b13cebe5f451efea085"
  },
  {
    "url": "assets/js/113.f8a2252c.js",
    "revision": "b1d2f1197e651023b4bb068c8480667d"
  },
  {
    "url": "assets/js/114.4637035b.js",
    "revision": "6253744694140f31fef14a54f53e10c2"
  },
  {
    "url": "assets/js/115.2e9ac89d.js",
    "revision": "1f4a224d43170f9c2abc6dfd6eafc2fd"
  },
  {
    "url": "assets/js/116.90559de7.js",
    "revision": "34be4580b8c7570393f3ce73443359f7"
  },
  {
    "url": "assets/js/117.96c165ee.js",
    "revision": "4f38c7a33ef0fc3879e0f5b9a1f59130"
  },
  {
    "url": "assets/js/118.1d557f87.js",
    "revision": "4381bafa97b7cbe96459543e6ecf0620"
  },
  {
    "url": "assets/js/119.5fbca813.js",
    "revision": "6da06dc41f3d218f20446c2de012a331"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.ab49462e.js",
    "revision": "22f1570657d62c11b8b2bb4e51004363"
  },
  {
    "url": "assets/js/121.fc6f67bb.js",
    "revision": "84c75d4bbba1d37228d06578919c4264"
  },
  {
    "url": "assets/js/122.2eb1fc94.js",
    "revision": "d0621b92fbbb3314afe32e8179702fc3"
  },
  {
    "url": "assets/js/123.2b63c89f.js",
    "revision": "02c8869a015674551e8513693cee4f55"
  },
  {
    "url": "assets/js/124.09a2510b.js",
    "revision": "0aed7242f1b72d8925249f64795c2623"
  },
  {
    "url": "assets/js/125.6a32d26e.js",
    "revision": "8d38056644bea0149d1913b06a23011d"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
  },
  {
    "url": "assets/js/127.f28c32a3.js",
    "revision": "14e274ce2b81f769086093288d6a1593"
  },
  {
    "url": "assets/js/128.d6e8d7bd.js",
    "revision": "c9a72235df8b758be14948c930fd3fe1"
  },
  {
    "url": "assets/js/129.62039df1.js",
    "revision": "11c26113c79eaf8a0722dcf7999bdc00"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.7c5f3302.js",
    "revision": "5e85e9369f14d8522fae1093d6e0452c"
  },
  {
    "url": "assets/js/131.4264ee73.js",
    "revision": "97f97028ec03c304cd2f21696b503c60"
  },
  {
    "url": "assets/js/132.4e8a4980.js",
    "revision": "37364059bc32feb4c6918d9cf0bd3c39"
  },
  {
    "url": "assets/js/133.9127ff4a.js",
    "revision": "e41640ac1d6bcb596b8c63c31287d7c3"
  },
  {
    "url": "assets/js/134.9b235d25.js",
    "revision": "0ba594ad1a1e9fcb9d99fb628542d0e1"
  },
  {
    "url": "assets/js/135.d205d54d.js",
    "revision": "0bdb7cfdad6eec7215cac24f66d6f70e"
  },
  {
    "url": "assets/js/136.f75c8524.js",
    "revision": "84bb12ce2c4862529739ba97d87c6e41"
  },
  {
    "url": "assets/js/137.991454c8.js",
    "revision": "93b941cf5ea014227e4348b4721e1466"
  },
  {
    "url": "assets/js/138.faedd824.js",
    "revision": "6e3f8878626d3085aebd4cea5fa0c602"
  },
  {
    "url": "assets/js/139.e71790a5.js",
    "revision": "5b962e56603a20544b481f97655af1dd"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.3f9a6c95.js",
    "revision": "ee06707013259f8a34f7a24aafafcb6b"
  },
  {
    "url": "assets/js/141.c1b856bb.js",
    "revision": "e25ad51883390d6936eb57b64bb9589c"
  },
  {
    "url": "assets/js/142.9ddde1a4.js",
    "revision": "f08181b5076f2976f0a621dad8cab374"
  },
  {
    "url": "assets/js/143.d43255a1.js",
    "revision": "9dadd1d626fa58e4fbfb651e4c2cf157"
  },
  {
    "url": "assets/js/144.39cd0a08.js",
    "revision": "c5a399f59bb1261068cb21b0dfba15bc"
  },
  {
    "url": "assets/js/145.48692656.js",
    "revision": "5ed0fe5f7763f03f72086b32d74ebf66"
  },
  {
    "url": "assets/js/146.481357c1.js",
    "revision": "8cba1d47841ac5fb73fe5bf301fb69ec"
  },
  {
    "url": "assets/js/147.1aeaf3e3.js",
    "revision": "9b93060db0da28a4b9d538ba8d701559"
  },
  {
    "url": "assets/js/148.eefb27bb.js",
    "revision": "2439b2d885a8fb46bda6550dc2fb1d43"
  },
  {
    "url": "assets/js/149.0a837536.js",
    "revision": "a72e8d8531f8984a7c9e115b55cd4763"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.1ea953e7.js",
    "revision": "9aca0c0bbdb0e4244f5058df3831594a"
  },
  {
    "url": "assets/js/151.a32956da.js",
    "revision": "02643808854964b1a2ac46b5d5fcc1ad"
  },
  {
    "url": "assets/js/152.99878d0b.js",
    "revision": "3a96a27ded817e85e1066d72f40a4d08"
  },
  {
    "url": "assets/js/153.efe421c1.js",
    "revision": "a21480cbdc713833bc9a7fa516711aa3"
  },
  {
    "url": "assets/js/154.1b23f6b2.js",
    "revision": "02debfd5d2ca1aedcf2280cf203cd5ee"
  },
  {
    "url": "assets/js/155.bcb62b15.js",
    "revision": "5ff36c4a4671ada8bbe8d3ef7a8753d2"
  },
  {
    "url": "assets/js/156.c77395c0.js",
    "revision": "d9f1df9b10ae4c91a6fedce98d045173"
  },
  {
    "url": "assets/js/157.0c4fb88f.js",
    "revision": "77f30941e9c5dc7710344f9701dfec23"
  },
  {
    "url": "assets/js/158.cb20ac76.js",
    "revision": "77ceb8aaa89dda1407cc2b0a804a2f9d"
  },
  {
    "url": "assets/js/159.4c86f82c.js",
    "revision": "c0279eea803f368405be35eb2cfa3b23"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.4e148c6d.js",
    "revision": "984a84da6244bf1b3d8337e8d6f85058"
  },
  {
    "url": "assets/js/161.395b8ef9.js",
    "revision": "0b78575ac7ace7ec44f3ac335cc88d53"
  },
  {
    "url": "assets/js/162.0ac44bc5.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.e1eb3528.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.3c0a56e2.js",
    "revision": "5f35470f1bfe1a6589e5da650ad620eb"
  },
  {
    "url": "assets/js/165.16538b13.js",
    "revision": "19007f4218c13504c4e1f1405e2fa6dc"
  },
  {
    "url": "assets/js/166.f94586ab.js",
    "revision": "b6d4d398b6b0c6bef0a5487abf1e6843"
  },
  {
    "url": "assets/js/167.0656bc44.js",
    "revision": "ae678f8206d895c199fcf930a902f99b"
  },
  {
    "url": "assets/js/168.cf8865c5.js",
    "revision": "a051910cd1a8c91ee316a223b3e3d1ab"
  },
  {
    "url": "assets/js/169.9cab72d4.js",
    "revision": "777aeff6da75c1fd8e535f5eb09a85e3"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.19f2f733.js",
    "revision": "dfbdb3b75840e18242d9437275b72f7f"
  },
  {
    "url": "assets/js/171.ee1fb0f7.js",
    "revision": "7ae0ba2c95e7180d10b8572f5142dcd6"
  },
  {
    "url": "assets/js/172.8f0d5150.js",
    "revision": "3ddc43e11f0a8721b912805ef0be5688"
  },
  {
    "url": "assets/js/173.a1075b7e.js",
    "revision": "cc7cb7dccf45f8b599d244719ff9fac5"
  },
  {
    "url": "assets/js/174.68df0b00.js",
    "revision": "51d41c93e6654300b25ce56d3618e9cb"
  },
  {
    "url": "assets/js/175.b157a369.js",
    "revision": "c58534a6d3c4018d0c0071dc1321864a"
  },
  {
    "url": "assets/js/176.6c4445e1.js",
    "revision": "2e9b82d6adbe3fa8efc2fb8ac4da887e"
  },
  {
    "url": "assets/js/177.d00a9a7a.js",
    "revision": "1d5eff6c59ac848eb673a07b298100a3"
  },
  {
    "url": "assets/js/178.6d7075fc.js",
    "revision": "b8d8d442ed664567d7e806028b8336b3"
  },
  {
    "url": "assets/js/179.2f68b977.js",
    "revision": "1ac320dd4e2f6f7e0a647d712444be52"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.7a4fe3d1.js",
    "revision": "722a9446d0aeb2cb7e9de6de9fa25230"
  },
  {
    "url": "assets/js/181.894136af.js",
    "revision": "6b4ed078710e4b89db431f3c1a9b5d89"
  },
  {
    "url": "assets/js/182.324f160a.js",
    "revision": "4bc6750ce9ab39d1f814923f1ec09f66"
  },
  {
    "url": "assets/js/183.075e5bdd.js",
    "revision": "7d0caa6b4ea41f416d894b54b4fa13dc"
  },
  {
    "url": "assets/js/184.2cac26fd.js",
    "revision": "186acee21a543ba2674489b94db5dcb6"
  },
  {
    "url": "assets/js/185.ec48ebc9.js",
    "revision": "919c485f7d5f7d02d715e501adfcd0a5"
  },
  {
    "url": "assets/js/186.94101791.js",
    "revision": "dc8deb7c68e9704dd22652b52b878f15"
  },
  {
    "url": "assets/js/187.47875142.js",
    "revision": "9ab197b4822dbcbe4ef325a9b3e9f149"
  },
  {
    "url": "assets/js/188.e606153b.js",
    "revision": "7b2535065ffbd9dd32e2302f72a8f34d"
  },
  {
    "url": "assets/js/189.cd517317.js",
    "revision": "444b6b028ed3f2f57ba155c558b9ffd9"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.a76c68be.js",
    "revision": "d533b73df6f0b42cc6337552e69c85dc"
  },
  {
    "url": "assets/js/191.d392af12.js",
    "revision": "846b0d35fb022780c1c1f1a3bfe2789c"
  },
  {
    "url": "assets/js/192.34e02533.js",
    "revision": "f265c29d08c535b6608290ff00d61fa2"
  },
  {
    "url": "assets/js/193.ede6dddb.js",
    "revision": "c88c77768a026d9095830805816a26a0"
  },
  {
    "url": "assets/js/194.5a0316d3.js",
    "revision": "4309e6443941f47a8058a88e68ebdbdd"
  },
  {
    "url": "assets/js/195.2ad5f331.js",
    "revision": "1eaba6b6effa667f852afebb5679c66a"
  },
  {
    "url": "assets/js/196.2bf6ff3e.js",
    "revision": "add0718abc8229a5d478160c5ae0ad24"
  },
  {
    "url": "assets/js/197.fe37beb6.js",
    "revision": "6a5a093339861011577de1bf5f32aea7"
  },
  {
    "url": "assets/js/198.2e148b3b.js",
    "revision": "5c9b3d2dd3f24d8c44849000dab2efc7"
  },
  {
    "url": "assets/js/199.cd0ba349.js",
    "revision": "283b4ca4a663c5c7461b7e4cd7148e90"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.4ed4a882.js",
    "revision": "925afd75c3694395d03aef20e16dfb3a"
  },
  {
    "url": "assets/js/201.e81a3675.js",
    "revision": "1f253e4cd36c703024194fc344481188"
  },
  {
    "url": "assets/js/202.c0005cf1.js",
    "revision": "8ebb0339d2a487abbfc8e0a1c9c14fd3"
  },
  {
    "url": "assets/js/203.701db98e.js",
    "revision": "3abab713e53780c7203acab500effaa9"
  },
  {
    "url": "assets/js/204.6ca9820f.js",
    "revision": "0f83ed19e3e5ece8d5bca90695e0d64f"
  },
  {
    "url": "assets/js/205.68feea3e.js",
    "revision": "5dd8c710a602be1af3f2e89dfefb065a"
  },
  {
    "url": "assets/js/206.3104252a.js",
    "revision": "f08c1cdd965b3497482883bba54c6abe"
  },
  {
    "url": "assets/js/207.870b3c6b.js",
    "revision": "22b11a42364b9fdacb2faef14a552cd6"
  },
  {
    "url": "assets/js/208.c543de8a.js",
    "revision": "d31370a058a87ff10e3f6113f48dadc8"
  },
  {
    "url": "assets/js/209.51b35515.js",
    "revision": "d59d280346668bb3c47517e83a79773e"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.88750827.js",
    "revision": "18d3e0b4aebbc27303fd2d0d67b21593"
  },
  {
    "url": "assets/js/211.715f34a2.js",
    "revision": "a91bf2b4ba8c364af371eb4ce89ebde4"
  },
  {
    "url": "assets/js/212.f5a1ec67.js",
    "revision": "efd168ddb60cbb8dda183b248483f8c7"
  },
  {
    "url": "assets/js/213.c4744871.js",
    "revision": "585dd99d1f9581bbe1b6acbe4308efce"
  },
  {
    "url": "assets/js/214.47751f70.js",
    "revision": "b25aff1796515e0af69c237f11bf5275"
  },
  {
    "url": "assets/js/215.909987f8.js",
    "revision": "7afb6ee08daa539aadc2deba1f3a76c4"
  },
  {
    "url": "assets/js/216.eb7b3775.js",
    "revision": "ca6443f0b6585b885a43c177d577644a"
  },
  {
    "url": "assets/js/217.5b62465c.js",
    "revision": "f73974ffd0735fbf36d82404f8b68a35"
  },
  {
    "url": "assets/js/218.19be4841.js",
    "revision": "1be6912803235303a422f193f8f21ca4"
  },
  {
    "url": "assets/js/219.d18d8997.js",
    "revision": "4c3c8630122306c4b553b976e5d381d9"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.10a09ed4.js",
    "revision": "7311a40ec6d26095f6ba807008b48c8a"
  },
  {
    "url": "assets/js/221.d666e815.js",
    "revision": "7b57ccc5f32cea9408378229b88b34c3"
  },
  {
    "url": "assets/js/222.e905fbb8.js",
    "revision": "c3bc2b86f6bc2d46aae388f324b41172"
  },
  {
    "url": "assets/js/223.05193cc2.js",
    "revision": "c5d97d332b51af9c445b76c629aef74e"
  },
  {
    "url": "assets/js/224.7f2b988b.js",
    "revision": "3d1137548a5f567144bc7227644d7bdd"
  },
  {
    "url": "assets/js/225.146e9412.js",
    "revision": "a183a6e681d67a398d82fae2712e9bad"
  },
  {
    "url": "assets/js/226.5c579d3f.js",
    "revision": "d30ff46620d40682929c1952090eac49"
  },
  {
    "url": "assets/js/227.d8821a2e.js",
    "revision": "779b8b447f81e44db73879808c02f994"
  },
  {
    "url": "assets/js/228.6a6989a7.js",
    "revision": "46fd9854351675eaf2247db678549de8"
  },
  {
    "url": "assets/js/229.f25cd557.js",
    "revision": "58cbed193c66a36b4ac84f512c4eef4a"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.1baad38d.js",
    "revision": "d2eb8c125f468e6722fc106e00af14dc"
  },
  {
    "url": "assets/js/231.c43fcf8a.js",
    "revision": "3b24a5a6f9a362707c787c924b894790"
  },
  {
    "url": "assets/js/232.d4a48ee4.js",
    "revision": "4d340e359919f91c4bf749709cf2f180"
  },
  {
    "url": "assets/js/233.225f4bc2.js",
    "revision": "30e5c9ea466d381c6860ee9577f8404d"
  },
  {
    "url": "assets/js/234.81648489.js",
    "revision": "0312e3e2421fd2ff9c097709ed27a0c6"
  },
  {
    "url": "assets/js/235.19211581.js",
    "revision": "3aab1e89c0b062da4d1191f367b1e26c"
  },
  {
    "url": "assets/js/236.5cdc1bac.js",
    "revision": "8a5911d6dbfb560cfcba7d97d229e657"
  },
  {
    "url": "assets/js/237.e9f7a530.js",
    "revision": "fdcb91cbec2441d98ef699f5b2bb702b"
  },
  {
    "url": "assets/js/238.0a37ba65.js",
    "revision": "2e9b9a4e0ec49116e90ca99f2017abd8"
  },
  {
    "url": "assets/js/239.d2785a7a.js",
    "revision": "7986dce066e5dc638f51cb8db30d9272"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.c10bfe37.js",
    "revision": "c5d4339d5b7a05a0c0ab03e56017a39e"
  },
  {
    "url": "assets/js/241.aff5d15f.js",
    "revision": "2ec7c551183d829c73c0d60738aaba61"
  },
  {
    "url": "assets/js/242.6bdde8f7.js",
    "revision": "ab528ff745895a0dcf64b951b231d086"
  },
  {
    "url": "assets/js/243.7d5c95d8.js",
    "revision": "1a8ffdd288e2a52c1df19ac5ccae5828"
  },
  {
    "url": "assets/js/244.aba79844.js",
    "revision": "085ee309e8fa484970236dffc39df972"
  },
  {
    "url": "assets/js/245.704719af.js",
    "revision": "1c1ff4892675663502c1789fd68edd1f"
  },
  {
    "url": "assets/js/246.7744dceb.js",
    "revision": "a4a03451748700ddf4d3e8c887577430"
  },
  {
    "url": "assets/js/247.77b4db7e.js",
    "revision": "873b35d6fb94a93e028e98c84e3359be"
  },
  {
    "url": "assets/js/248.33e08447.js",
    "revision": "eb341a5c220db7b07b8188dbb861a405"
  },
  {
    "url": "assets/js/249.cd23f73a.js",
    "revision": "73727df8e0206ee98efac567b0400971"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.170c7d07.js",
    "revision": "f89fe172ba13183002090b80ae914aa0"
  },
  {
    "url": "assets/js/251.712dffaa.js",
    "revision": "e625ea504a5204a9a9f166fd02e9777e"
  },
  {
    "url": "assets/js/252.cfb01cb2.js",
    "revision": "3b454d0b35065f8c3430e4c0ec31ca99"
  },
  {
    "url": "assets/js/253.66d8f82a.js",
    "revision": "84ca0c4d9764f059516e89097e6785db"
  },
  {
    "url": "assets/js/254.9660e03d.js",
    "revision": "b4a47298fb3b2915d50f4bc8bdf79028"
  },
  {
    "url": "assets/js/255.8c22f428.js",
    "revision": "610d829f4e4c6026e7cbe4f6052686e1"
  },
  {
    "url": "assets/js/256.7d3ef119.js",
    "revision": "39fe7840efdc5233d98891d13dc5f551"
  },
  {
    "url": "assets/js/257.7f7212cd.js",
    "revision": "cc16dd4b29dbb59c35d766200b11f472"
  },
  {
    "url": "assets/js/258.725f3b91.js",
    "revision": "5e188b4cc060d5a9962da81e99b917b6"
  },
  {
    "url": "assets/js/259.b4028084.js",
    "revision": "4c8e341e3f60d08f86ede232892b7f5a"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.e5fd2392.js",
    "revision": "1f36b2d543bd663c2ba4bfe70c04fefa"
  },
  {
    "url": "assets/js/261.7f8274bf.js",
    "revision": "a6eb21fba7734bad732f2dc7754689c7"
  },
  {
    "url": "assets/js/262.0ea77ace.js",
    "revision": "9329aa54c511fc354dd5cfff40727106"
  },
  {
    "url": "assets/js/263.db9b6669.js",
    "revision": "53494659126b825fdcb65ed2560c795b"
  },
  {
    "url": "assets/js/264.5df60219.js",
    "revision": "75b34cfbd223ca77d863642720f391e0"
  },
  {
    "url": "assets/js/265.a0a32bad.js",
    "revision": "a71c0aefd905f5c043eeffe77b4a1b45"
  },
  {
    "url": "assets/js/266.78c27f66.js",
    "revision": "f1b0f044407de23b1c84b203fc9afaf7"
  },
  {
    "url": "assets/js/267.62ff8fa7.js",
    "revision": "dd11a8470ae8b1c1cb38a57d375740b3"
  },
  {
    "url": "assets/js/268.cb107781.js",
    "revision": "bb6b068ef878d9bf4d2dc10cabea47fd"
  },
  {
    "url": "assets/js/269.d50c35b6.js",
    "revision": "7f143b6ecd8db071245400f89894712f"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.1cb36de6.js",
    "revision": "72f6df4159d336e30bfeb19c74d7552e"
  },
  {
    "url": "assets/js/271.c0927ca9.js",
    "revision": "dae5dce3da400d193eea9824745e05d9"
  },
  {
    "url": "assets/js/272.54fc3f19.js",
    "revision": "ff743ec032a01757de1bc4656c8b91f5"
  },
  {
    "url": "assets/js/273.648101eb.js",
    "revision": "cfbf4c7fe3563d5c64b82e8e5a18b658"
  },
  {
    "url": "assets/js/274.f0486403.js",
    "revision": "56956a187f0c4f7389090fdc55076163"
  },
  {
    "url": "assets/js/275.5ea87b62.js",
    "revision": "61e725be3fb136cffc9b94775b7eabb3"
  },
  {
    "url": "assets/js/276.28503327.js",
    "revision": "deae9bd5f6c4d64eb04baa69b2b8c8a5"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
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
    "url": "assets/js/54.62ff6c48.js",
    "revision": "3873751d5564d74670112deaff47fabc"
  },
  {
    "url": "assets/js/55.6f34170a.js",
    "revision": "1715db38936a0d735a933cf4ea63db47"
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
    "url": "assets/js/85.275ce1ec.js",
    "revision": "0920b9d182472161cdd292ade591e8e8"
  },
  {
    "url": "assets/js/86.a41f8c65.js",
    "revision": "a25da6635d56577aba0c9c3e06b0e856"
  },
  {
    "url": "assets/js/87.4c83c6af.js",
    "revision": "e3501006d472233ab33408da153c9011"
  },
  {
    "url": "assets/js/88.7ee006b0.js",
    "revision": "d1bd602edb1489fede7d8195ccd152c4"
  },
  {
    "url": "assets/js/89.10ff9007.js",
    "revision": "dc37dfe83cb6a3591f539afb969bd944"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.8fe07dac.js",
    "revision": "b8e1bca7ef49eace43ac9acc30e6c792"
  },
  {
    "url": "assets/js/91.810193bc.js",
    "revision": "e255732e4a3b810f8f627f15a0b0f4af"
  },
  {
    "url": "assets/js/92.b4e5b4c3.js",
    "revision": "4f50c70ef8bef0681d87ff0f5ec74ae2"
  },
  {
    "url": "assets/js/93.f7472136.js",
    "revision": "4d3e35e077338bde837a233ad4e65086"
  },
  {
    "url": "assets/js/94.34a863f1.js",
    "revision": "6fda567516c7935f6943c8ca08e9bdee"
  },
  {
    "url": "assets/js/95.5e003bbe.js",
    "revision": "bde5a20ccef594c6aef6ee05f43e62ae"
  },
  {
    "url": "assets/js/96.7f2ef601.js",
    "revision": "2f9d948652925bd0293af1de0d602c18"
  },
  {
    "url": "assets/js/97.84372dfa.js",
    "revision": "7e80d96f4e1bfad4905fbfabfec583f0"
  },
  {
    "url": "assets/js/98.48aa5dff.js",
    "revision": "7eac0daa9d01f6a61a4965733aefbb8c"
  },
  {
    "url": "assets/js/99.b8f35b17.js",
    "revision": "b9e85ba3e53696ddcdb8dc3d4ef34655"
  },
  {
    "url": "assets/js/app.bad2eea6.js",
    "revision": "afccbf93061f256d559f2274601e2ab9"
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
    "revision": "b6581e8c645192cbee3561425d63e7e4"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "0736d6259825f0dde4f2a7ba59c39ba2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fe0b559dba9d6244734766d002b35bda"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "779dbc324a9adfc8e7b042a73efcaae5"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "571f68295bdae226366b37872a92a0bc"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "dff848e9bde3062c8c35a97e1a37e481"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d7597493269ee38747e7d47d5b6ae34f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b58da766dd85d38026c20ca7a16a202d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "37ddfff93d427aaa227f7da2a103f291"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "064a1e94f10337755a2075ad932058e3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "efd4866ab54462a22e4adcd110e5c5d3"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "b8858c31386f1ed8d37aae92247ff794"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "a495837cb0c05b880ecc11beadd6238a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "1234cc5609a812526346a804121584a5"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "9a1834c677b912034153dce5b8e98f14"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "ccef6e1892943d4c46f7f10acfcbeed6"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "533be0bc1a1ca3c8b9717c698e856f8f"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "abb15ab6164ad9eda7ddbe8203ce8c41"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "7f123f4817924e11eaa2db5bd2095f34"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "0d99d35870f1f55d94fcfe4939c93263"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "4270eb29995799347eecc794fea43c78"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "43700890dcf96e02f9e513b339d2fc43"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "a3e8d2d99d748e8f2e758094980ff0fc"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "65aa5c4605069d756e0d0af059cb4ac5"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "a9c59e6bc47cc1250a2b50b7e0ea8942"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "89eca91b8d6a0afda79a93cd678ed91b"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "38f1879155aff8bcba093608c1a828f2"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "e6021335297f7e969fa029d2a90191fb"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "cf53d3c7670b3054e02a97e5d34bb11d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a5ea1ee56a2dc2254422ac2ad5e5f461"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "9e48f12a4e117fd19977d6a70c993326"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5584c81143aa44c2c3ce75d62301eb46"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a233620793d573ba8d8af73b40b6d5a4"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "0213ca26d8209ced4daf971ae2c758fc"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5a4aa2c2cc8ea6efc8839ecba815ad7c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "84d193831af8a38dddcbc8a23214464f"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "60025a3b80346bcb35e2e4c7a6f766b4"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b37383059f1cca17e65a391203ef1ebb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "138495191af8a56e9888c4d67575e405"
  },
  {
    "url": "basis/os/index.html",
    "revision": "fe275b46cc68832948f449027f17d8ac"
  },
  {
    "url": "book/index.html",
    "revision": "7f97383670d024cdb82c1d3a53226535"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ff398326697f52afcf54a34911469590"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "6f6b5d6d10fd5d6adcd913b0671e8622"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b4e08d2d12b73cf8a53786ebd2220e52"
  },
  {
    "url": "c/audio/index.html",
    "revision": "089ad120078ff85eba2f98418b8e16d7"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "07e9af1be3414f124745cd7f2a882780"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "aafb2cc562b48fd2782bea4c2604e59a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "5e84cbf2cd2883c9ab4996f36b63fc03"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "a473dfb2e2e93c0efee9df56249fe330"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "1478e21457e667999f2b25a15933f3c8"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "93de8208b1ce3fea0aa551c0fa27cfd2"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "3400168a8be2868c53c37b8d1a945826"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "87cb77a74052b1ce57b353a916f69ee2"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "7c69d2d39a5e53904a8736dd617a9527"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "ee2dc60c102b6277b9c4fc27146c411e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d992b1ed9d3cc76f63d5ed213ee59bd3"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "761f930dd7617d47857d03955009a689"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "9022ffc3beab9263bae4ed126f9a60f1"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "5b6a00cf213c85f2694b8cb166182f84"
  },
  {
    "url": "c/program/index.html",
    "revision": "104a6d60e2b03316a07e6b1e93e2425c"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "49c5253fd89718a1f162d2b58aad9da6"
  },
  {
    "url": "categories/index.html",
    "revision": "dfcfb45afe259aa697e0bdc3ddc8917b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "993c5a507ac26c5188b6feb16942a152"
  },
  {
    "url": "figma/index.html",
    "revision": "d0dd7e7446c535c76c102abac9797c89"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "61324168de1a3575073f931ee9087dd8"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "893769f83a9864e7a14562dcf517e7d9"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "22e1458d606fccd54b1d9fba4dd1d2f0"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "8199d087937298a542f4c7b37ac2b2d3"
  },
  {
    "url": "flutter/index.html",
    "revision": "7cb441567f91cc5d49807c53885b948d"
  },
  {
    "url": "flutter/point.html",
    "revision": "3847b4a05e1b4239d11ed776313f61a1"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "0ae87fad1c56afc7074ec82d06fe4558"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ecb0673bd8ea14976f455fa4062e219c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "59b8ff572880523b541fce6eb3ca9f9c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "428833f98497c552db4f5330413e2c71"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "9ca0394183ffb33271eb75765b9d914e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "077a8956d2cbfa143e2ca340f6acfecd"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5d73f8f6f2119e8a0ba7f6d05700a7dd"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "9db2267cb37ef692ea04b520b36e86d0"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "6824a3562f66a48465bbf89d071e475e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8d51664bdcc6083cafcd14af097ca832"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "0a3a71beef6f4ee51e2edeabdf478476"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "3d190bc6069a0ea5ee46df85babf7947"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "92f17f84beceb6b47082c67fcba1bf88"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f431c548e7c78e84c366ec31a0606c85"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "f41b60982d529ee39ba3708abcd5c943"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6a25f078032c6b3e1f2da185354922da"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "e2da93d93152757b08c3b74c8efe5031"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "d3a34a83fa0529e00faf3d21259e2854"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "b9120cc1a205e349ab0e0a9644b2d6eb"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "80c711a1cc3a2e3dae49ed5652e63bc0"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "51fe05bf647127b913d53678a508568a"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e074fbddaa6053880d944ad420cd62ce"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "460465130b90a7922a27f4f51386111a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "2680ae9aed0887f7f532cac7a877c9fd"
  },
  {
    "url": "haskell/index.html",
    "revision": "cba618ed8dc3fdb24a688ebe682524ec"
  },
  {
    "url": "index.html",
    "revision": "2ab501d213a5ee72c731fcf8e061049b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "201672df81b7f793edaca59fbf0996d7"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "44f5a80f0db5c458e0ed8c0ee40f4d50"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "0a298e8221fbb7940d7a1b2ca6d8b84e"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "463c241120b1e6cfef495d52a81d1da7"
  },
  {
    "url": "python/index.html",
    "revision": "219035547d662170a96a0ba3a20505c0"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "c2346181c122fca6af6085ca4b7f4f24"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "b53a95e7a9938f1eb2c816a24d5ab4f8"
  },
  {
    "url": "python/python-file.html",
    "revision": "6ff1b5fb8d5824b70b3c92a8540a4a33"
  },
  {
    "url": "python/python-function.html",
    "revision": "a3d302c3c640d809d8b39f0807739972"
  },
  {
    "url": "python/python-generator.html",
    "revision": "f81792610a50194f945417e00a7e8ae0"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "4cbef10895dcd8b662208eb2aea4b5ad"
  },
  {
    "url": "python/python-module.html",
    "revision": "4d364e89eeb0f388e7f56a6b98e68d72"
  },
  {
    "url": "python/python-string.html",
    "revision": "2715d3202ff3e64147a1324dd87759fb"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "0385707d2cc3c48cabc6286579e07b70"
  },
  {
    "url": "read/index.html",
    "revision": "0659a247667825bcecacba637914a772"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "c37412893917f9073a8cfc99a39160eb"
  },
  {
    "url": "swift/better/available.html",
    "revision": "5b07456a4fb9953cc30223c60c45c6fb"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "a517b5e89491609d4665a7eb7b33413e"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fefa3b79fd5b358a8a372ec13f6dfdc7"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "6ccf360eea3c39e9ef32b2c041a54e99"
  },
  {
    "url": "swift/better/di.html",
    "revision": "533cd3563cc4928470d7606337f04be5"
  },
  {
    "url": "swift/better/index.html",
    "revision": "a747eea45d9aa4889deb221aa4c32ce9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "51de2ef7ed3cd4c6021f2f9c589e7f36"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "5fc6482b0c06731487acbbf5e3d319fc"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "dde89f9bb4648ecc1f8dc2fc9bef5896"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "5bc6f0d62e9b14ddab341de9533ddf98"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "c74d8a7ad5379ec3fff6ea19d3599be0"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "20e06ae6f4da29ecca5fed015b2e0f5c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "33819dd056e5b813f6bb0615002baa3f"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "c2d2348c3fb0f59d95ff7a73ab5fc452"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "36629d8e0db3ae86505b473533a94497"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "eee6c16153b357d5418055ae723d0410"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "9e24384d4f48ca238d6b66dd933d44c8"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9bdd65644251a554ec79125e4da5274d"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5e834d67ac42a07afc1ab0040ba49f9b"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "5b755edf5393ee1c9acffe4dee92236a"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "6e0df60fe95941b8ab80ea4f401ab1e0"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "9f02a54611c7861b74142467b640fccb"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "54bed47a7e4a42d444a489de103a6f9d"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "48ab7f208c102045e1df4f507e9b37ad"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "e9ab86d08f51e1bee840177e5fa6e2d2"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "372b06f12ede5083f937f9429ebe020c"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "5e6b698ad37f6f91ef38bbf00f2a659f"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "4de55032dbc2b192a5c2a95a2e7a4da9"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "b83e27afcc88e08ab8c914f2ac6556c7"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "bb973212a667f858f3ce5761de664348"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a01bc0850efabe4e57f6aa679d92f79d"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "7e16eac0081966f9639d446aafc2a4ef"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "1077af85deabebd2d61b6f85264506eb"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "61605103bb8ead77d3b8844ec515e125"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "9890ccef474bd721273adc0357cb61fd"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "75b99db8b71ff7132a1570d116b2ddb9"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "0c34896afe4ab7473b88062d8e996a7d"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "6f2b70084c6c8188bf4fca6da3c911b6"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "46428ffae26b06dc15de3d42e6a0381e"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "9e41510e2afb11aa3f32428040071509"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e0993c55c06a8c5f95151f74eceded92"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "460c9f59d77a07bc28f291480afa00a0"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "e6bf10f1cd6a1fc69e9a0d1f309cad4f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "75ddd6c8c7ad169ff06dc9c4022a9a98"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "d242ba7863426157355c08b83459ead5"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "d736160947f4c9b799439b5dd75d13ae"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "91c66f6aae3212d42be0a1e48eb63afb"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "2324b889fd49b7acd0bb3b4e3ac4e3ab"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "eba88061bbf42f51ab6940e21df163dc"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "5c70263c672c7ef4e4d6b309bd277993"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "da688a6c4279a0f84f5a29987117ab46"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "56e5bc0d5d74ef310b3c2034deb8f4ec"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "5ba630037e8d597cdcd9be144ca0ea39"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "05809e55d4074bebc2a34bb9682c262c"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "031f6c012906e6b9abaddaccac83bb11"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b40244ed5ff8147edad6929f4d5c994e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "1067d30823e3bde237e7be060043a9e6"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "1aa1cdc01efcd97fa9747a21e0e6d842"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "65a4938d8469e3d3e71c585422b600d9"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "e34570d0432231df217256ede88f95c5"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "b7dee4001e666d187ae7fce451701ae4"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "0df4e5ea8e235d5383400d7fe0239885"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "913f545dfbcf7b783915e2a70daa4ca2"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "5961fb2564928b0dbc8bee9be3d83af3"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4cdf464d792d00f3643fb8e0a1580c68"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "642fdf37b96e26621f00a15d387550b7"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1c6ad602738c749ccdf7ded162633b5d"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "62a1c1ee3a7ab2324746aa1427a8ee67"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "eaf3420a509b2cb61c328664dc4835ac"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "71eb99f30889d3154f22b7a04a9b692a"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "db0bd48812039409e52eb3a16df8302e"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "77876839bce2096cb55336575f82c180"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6a8c830ef88bb5c7bd8cf3c421904bd0"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "6ca31e9fcf630b75e5a40247f4ec081c"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "21f0ea9cb76082e92c8e9f038fb09ebe"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "e23b9cc4a58e8d4e30e7365d110eefae"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "4d8e1b7dd32a8a772249bae665f36388"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "278f047491e4cd425b1be7102f40ec64"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "a8e5d18c4aa5d07d52bdf8ec6398d51f"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "441d9dbf72d4daa42650e2fa55c928a9"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "82fedf3536b334f87d454f063e6a0154"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a5e5af469098105f1412f2f6e0ea2ad6"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "de0151f98d2b91e9a28397e3c2fccf63"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "238c5e90cdc0448243e32340785e8f8c"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c31d81e290bc83b7a1a1224afd2ddebf"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "03b4ce9dae3a697b370eaceb138a8b65"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "ceec3ed5f6dbb67d2e49bef8aa1e20bb"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "c3b94a1faef80ff8bf2d0d20a899e32c"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0c783081db40f8e5fc9f19765cddeb6f"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "46949574d3894ec2bc8ca7ba4a4dc8f9"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "b44da7d4d3defde06b87e608cbe2ccbc"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6b459bfc89900e35a81099e80cb7a3b1"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "232b5e5f899ec6c0d18d8c99dcb0cbce"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "3bfb517f8a3fe35fe6dfbfd3b1229b3e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "456e114625ed87bbc411ac7a5607a4cd"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "e1c62e0a85a20efcaed2783ab4dded1f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "f5e57a0bfb1505d1688fa35c6217dece"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "01b08a1108f4bc7ba2da1af1be2f585c"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "b4f49ad60f77bc444e22fa090b4b8cd2"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "e1ab6169cf7a4ce0e08d12813c352ddc"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "e3043afaa1f3dcf22bab2338b1767858"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1231596d84240db0a6afff52e276f3d8"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "59b6d24cdae6717501f62ecd407f5d62"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "14fd74f04a242606d9aae9312ca5b80f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "450889cb0491f312fa581dfd0308cdd9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d852137d4060e5f608bf26109a69da28"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "8c2efdc70d76ff6ff7baaef70ee41a4b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9966c9d8d8d2273dd51101306f7a9d33"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "8c5f476d554705397b6147d10c612b63"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "f026d53fe529b12143fdee931165c0bf"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "4678757d1c5eb8aef61aad44843f1c36"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9cd99d48ed07619b31b6c076b0c674aa"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6705f4ec85a30bec4d0837460bf9dbb7"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "0f8138e7760f24309c75fbb9027b5889"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "556a2c84dfc269b935a435ba0a2acab5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "05703e3d78565448fac50db3f1b8fa01"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "aa437b96ef3ede678bd001421862510a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0692dc253633f9c1ecd0b0808def4e5a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "68d79e5499013b507770f5af10888f02"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "8f59f37e42719e3113e7283a7a460e87"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "3858ea94a96de686f5a71f2dd984761b"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3356c550f051ea6e08cb04144ebd9c5f"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "62f340f91ac8eec2543941c0dd0a5c0c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "37d1c3085e7c1bc0059b9782efc00a7d"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "9cac6dffbb6cfdf9753d9210361a535c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b64e1244538bf9ae26319e4dd90780df"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "426be1f94ffe2482f6d8625ec3d77e6e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "4b1b8b148a12cdf0ef6b0b46150e83fc"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "900b2f1d4d9d13173baf97a324257017"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "c4f2bc679afc69752db37121821b009e"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "cfeb02287c250352be8a283bfb5a984d"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7475830a8c6ef88cb2ae485827dd3409"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "9562b3b9b5ea729cb2f888ecb8c472b6"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a8196f409fecb44851204d7ade53b467"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "2688fb1f11f77cbf5b07a9378fa1a1f1"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "77bcf90f42644243e5614dd1198626d9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3ff920def984e5c84f0584e5fcad7d7f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "765eb49695ebe5c5c6299243f106f907"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "18df5a6fa6b776d11a9fdb1bd1b44637"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6c4d3b9a67c5591c0310b4143f9f8daa"
  },
  {
    "url": "tag/index.html",
    "revision": "0e47834cb6cbcd6915ba09fe4d374ed5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "3c29070b55e00fb46e471eec71ab0b82"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "7045ac198ab4f06f8a20c2d0d5b6e93e"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "383473108ead632f7cb374a58c759dfb"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "3a724adacd4a628b7d7c89d23c05248a"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "6543162f271aadf27d052a15cb15f0d9"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "9a79e8d60c605209f54661e8c90af928"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "fed73e6c28e770fc2c61562ad2d9a767"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "14d2056410cc7f4587ffe52e4ff09118"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "ecd842184fca85f067c66d5f24cd2bbc"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "23fa262bba8c57af454cf217f077d9ad"
  },
  {
    "url": "tag/json/index.html",
    "revision": "0514b8ee4dff03323ad4e86f3c84b258"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6f6bd6e72a17f71570d39c5b3eee527d"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "192a25a03c06b044cd3b85e32901e4be"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cf82204678423ae4db9b556f390691de"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "60932addd5b28fd26c54b458b7a1abc7"
  },
  {
    "url": "tag/read/index.html",
    "revision": "b77293656369c87bfe0af544abcfc621"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "51fc7ecf3ce4a80f8fd135964e8a46c8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f85ab897a52202cd113888c38ade66a2"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "7d413072f06e1106cc57acb05adaed01"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "00615b20bec88fd5c92fac1fb8b83ab0"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "3b0e2fe0f2fe745bae3530021cbea9f9"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "fbedc609796a6cbc8036c3ecd3c5b767"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "e5bc5531d7c8e5a00df9b05b0bafa509"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "85f3e958bdaf35649836755e532acec1"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "45ff5df61c6ad91ee053e699fce714c8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "e6ad255bd05554805c348a17ddd16b5f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ed4f233467c1f09aeb2bdf5ead1b12bc"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "ac324be4b37fe33dda243a99da2804b2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "73a1e3ca64e7eb78031484c2e6c54449"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "9d2e0bf7fc7773557c8a11d22341da1d"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "9111bb34aa52a0bf97c00d47b622e578"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "e28fccfb88e968e96e900d4b5835173d"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ee7be65fe6847f768e8bb76ac51fd580"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "2f8e176f7b1b53b08a312ddaa512a74a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "848dbcb87d82d90be1f66020cdd261e9"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ceccc030a0c139891e6268ae00b1899e"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "cd30e53ecfd37e564917b9d51261223e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4d32b04432959a745bfbc14304e4b477"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "b187756df873626ab813b8dacb87be72"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e0e77d0dcf3486653075397570c6af78"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "0fd77715907c4d2efd595f8be5d7ecc2"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "46d7aabc0182147418a9192bce308998"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "79282e9ee561883f50d8cfbc7e3fefd4"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "2644a388b077eefad4dd65e82f886110"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "f09686f483059d6e621ffdd3861b78f2"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6e13588d478fb6262b6c4675fa5afd49"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "ee8845bbdb43ca24c60172aa00a93554"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "91af031d762d9b239293d1cec7068861"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "b95bb2bd587987ca3fb94ec909f779f4"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "59787c5212ec3ca94e3f88c8f867743a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ea0211bae7ee4bff345de7142a2c0b45"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "98669f3be2c5e27835976424cda6113a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d55940b750d2bcbdae3fae9daf3ff8e0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "db0e488548c05ea2108962522c0e85ed"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5801a1b6d10c65e9ff50d123b4ce1ec2"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "bbcf9e1ad4a6fcb2168c00244c2bd97f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9a4fd4cda1ae9b91112eed0152fb2814"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ad2bb872f3f3a5eaca1001619f0d3cef"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "65d0ba840b8c886bed863ee05e82bcc7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "e1107226f0956cea95def83684bf0cd8"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "93829648e58b48687fc37de64eb0c170"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b4477fe0557e95a25c0a1106afa0efd3"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5ea333f3bc67a909c2216f0a53189e9e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "dfccdf353ba452134d0761592e3e3518"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "fc7ba67a7d11444dfb505c411441bc5e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "0e4f77aa72cf945f9f0cae25043e5c00"
  },
  {
    "url": "timeline/index.html",
    "revision": "f0c9eca169ed9835cb432c0ced2eef07"
  },
  {
    "url": "tools/docsify.html",
    "revision": "d05d8b80179598aded3581f6caa281c1"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "c4bf780faea69f80c008d251c7c64a5a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "1d1501604deff264526c35e65cde7b69"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "3e9bc8e4d3ddc7c72c58b2802d562911"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b05f4f72c5f2daeb394560fa5b2a1bd6"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "60c3bcfc1ae5bf67c4aa79da2a831f7b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "eaad6a403bf5389d18b0f29497bf9973"
  },
  {
    "url": "tools/html/index.html",
    "revision": "47ddb93aed9084df80388b8e067f27bb"
  },
  {
    "url": "tools/note/index.html",
    "revision": "014855b08c003518603f5b56d59c0c65"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "07da0d23774ac30fded8a7efb35300ea"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c97b6ab138130228a4df9c7c55206377"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "7a97bec6772ae604360ab794173041fe"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e5f4bd7eb89e6b335e1f04396d466f7d"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "d379b111eafd5453ccaa247a2cf63877"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "ec0adc23b74c2538cab2970523102206"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "62a51078dedd49340185e43af62d4c59"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "3f915bdff29c8cc12bc03543f89462b8"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3f4bdade18896f7b95e979ae14596829"
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
