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
    "revision": "2b2040abb55c9444204e3e226e2b0ebe"
  },
  {
    "url": "about/app/index.html",
    "revision": "e9b7e56c71141d6bc26317e1fe022423"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "9c8eb1868c391fc4649595358f4db980"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "13f4c9d60ff022028adf7d34a1566118"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "025648703a87290a5ef149cee6944b11"
  },
  {
    "url": "about/index/index.html",
    "revision": "f141ded5cc9cbe0b4ab8fae2fe7b4bf6"
  },
  {
    "url": "ai/index.html",
    "revision": "299787138449481691c543e9d3bb9f2c"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0f7b6b8783b66197c4113bbae0b1d35d"
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
    "url": "assets/js/10.c0b7bcca.js",
    "revision": "a78a9eb291c6cc29d3390e1d60a2a30c"
  },
  {
    "url": "assets/js/100.04877f9c.js",
    "revision": "cf765df9d7291d8e5a4a970dce985545"
  },
  {
    "url": "assets/js/101.7c503351.js",
    "revision": "8f76da4dd0f6266a7896d2803e8e1ba6"
  },
  {
    "url": "assets/js/102.896ffd40.js",
    "revision": "3f57b45c359f716cb35704cad72b00a9"
  },
  {
    "url": "assets/js/103.d04c70fe.js",
    "revision": "19f4560a58bf350a0d26f62566eeec78"
  },
  {
    "url": "assets/js/104.c7ca4a57.js",
    "revision": "5a34a93bc49909b97a1132b8e9995eb6"
  },
  {
    "url": "assets/js/105.eddada3b.js",
    "revision": "a31268478a48a980cdf099d64005f83b"
  },
  {
    "url": "assets/js/106.df238852.js",
    "revision": "36912f09502c3f6dad5e1fe0df5aa6e0"
  },
  {
    "url": "assets/js/107.a69743d9.js",
    "revision": "508ff75e64bb63ee638ef65f714ff576"
  },
  {
    "url": "assets/js/108.5438ee38.js",
    "revision": "6a19092b96ccdeb0dc2c21e498ced93f"
  },
  {
    "url": "assets/js/109.1b326a2a.js",
    "revision": "1ee9d9ba9a66ede80c7eb99447f9a894"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.200a4c54.js",
    "revision": "7c55060cc2015615f5a5e089ba6f9637"
  },
  {
    "url": "assets/js/111.f43c461a.js",
    "revision": "a5cdb3c0b1e38a3dbf9c14a02923edf4"
  },
  {
    "url": "assets/js/112.35e53165.js",
    "revision": "be5ec1a94f764608470f46a168dba4ff"
  },
  {
    "url": "assets/js/113.921a32c0.js",
    "revision": "7e367d31d707c8a852e8cbe0c377579c"
  },
  {
    "url": "assets/js/114.2a92ac78.js",
    "revision": "a73257e09f2b69bbf501f5922ac0e9a9"
  },
  {
    "url": "assets/js/115.28ce424f.js",
    "revision": "de0a3288e431578cf39c077badcec476"
  },
  {
    "url": "assets/js/116.2b1d8c20.js",
    "revision": "ee70b7780f125a6e6c4d57cd0ac892b5"
  },
  {
    "url": "assets/js/117.dfd14720.js",
    "revision": "f245ced7fb0b26cc52479c1bd981cb98"
  },
  {
    "url": "assets/js/118.c5a871d8.js",
    "revision": "98172c91f300d4adad8ee1fe9eaceb25"
  },
  {
    "url": "assets/js/119.6a988c01.js",
    "revision": "5a7867ba9f36eb9af01a9bd15e22c392"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.b6577929.js",
    "revision": "6b3b03ea0ccf8659c12c14e1ff2b4413"
  },
  {
    "url": "assets/js/121.fed323d9.js",
    "revision": "e7ea75a2983a538105a98ef195510f65"
  },
  {
    "url": "assets/js/122.33f91eaa.js",
    "revision": "326c22e9e4a1970c46f97ea603192de2"
  },
  {
    "url": "assets/js/123.43213d57.js",
    "revision": "442436db8a63297a9ba0abb40c2f33ba"
  },
  {
    "url": "assets/js/124.087a614e.js",
    "revision": "7cd2a82485ae62791577f0fafe8e9b38"
  },
  {
    "url": "assets/js/125.0260ea77.js",
    "revision": "30a0db693fe77218dacf978aed42e23c"
  },
  {
    "url": "assets/js/126.9d135ca8.js",
    "revision": "913dd2f4ba94c3efd3da26195bf3f869"
  },
  {
    "url": "assets/js/127.0920c1dc.js",
    "revision": "f53b042628732f2c62fcf7a33ca873d5"
  },
  {
    "url": "assets/js/128.a1ed3d05.js",
    "revision": "c833f4c1971253941d865ee13af8cfc5"
  },
  {
    "url": "assets/js/129.66226275.js",
    "revision": "60a659ca4ae2bd5082a376ec71c93319"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.d505445a.js",
    "revision": "f139d75dca08127054263f5c68d01527"
  },
  {
    "url": "assets/js/131.ae4fba73.js",
    "revision": "3e0fd673da6c5750cb5ad232b2cb88d6"
  },
  {
    "url": "assets/js/132.958f8674.js",
    "revision": "76dcf7d2caa9a66d4b0f63ebcf799d64"
  },
  {
    "url": "assets/js/133.c3d4ea18.js",
    "revision": "fcd2c04c8c89f55cea913ab6043ce28c"
  },
  {
    "url": "assets/js/134.06e5d288.js",
    "revision": "8dbbe35e3d5d3db3c53c754f9ab97863"
  },
  {
    "url": "assets/js/135.84473038.js",
    "revision": "53f9eb3937d0b2cebd30f626cead76f9"
  },
  {
    "url": "assets/js/136.e7374c69.js",
    "revision": "da4954148844657aec34ad1eb03615d2"
  },
  {
    "url": "assets/js/137.32fc0a94.js",
    "revision": "e7f907850d67dcbea41b96249974d149"
  },
  {
    "url": "assets/js/138.9dad2ef4.js",
    "revision": "afb67cc826186ce5ae40a0819131516f"
  },
  {
    "url": "assets/js/139.a2f14fb9.js",
    "revision": "ab16222c2a88c9dd45ecaa4bf0ff0a2a"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.1a9e149c.js",
    "revision": "ffb58607da9320c0577968b3091e885d"
  },
  {
    "url": "assets/js/141.8297f8b3.js",
    "revision": "6089725f8ea55a8f302688ded4f2ffb3"
  },
  {
    "url": "assets/js/142.d05b67a1.js",
    "revision": "9da2826319c35e094201857b7f1d7207"
  },
  {
    "url": "assets/js/143.4638c1ab.js",
    "revision": "6430a5a2f4d81ef39b09db28fbedad59"
  },
  {
    "url": "assets/js/144.c5597af0.js",
    "revision": "20cee0fb20c4db1c95e0d5c059e4cb0e"
  },
  {
    "url": "assets/js/145.3b8d3ca5.js",
    "revision": "0e16eea4be1729562b0f8bf88077b9b6"
  },
  {
    "url": "assets/js/146.b2cf85bc.js",
    "revision": "5bec1637d6c5041d531389d1b9fa75cc"
  },
  {
    "url": "assets/js/147.c551da27.js",
    "revision": "2c2cbac73bdb4497e6a3e57eba6a336a"
  },
  {
    "url": "assets/js/148.df5c5f86.js",
    "revision": "d84d312f8c7a4cdf37ee654c6fe209f5"
  },
  {
    "url": "assets/js/149.2e40a73a.js",
    "revision": "8df47daffd5ab55f58906eb1ebf7efdc"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.95ddf598.js",
    "revision": "260bed3de2f5fddbd3b1a520ffab860e"
  },
  {
    "url": "assets/js/151.5680f16b.js",
    "revision": "60921b006f762907f60abe1f9f53db47"
  },
  {
    "url": "assets/js/152.268ae4cd.js",
    "revision": "97537745dc298ec6782f795959ce7f89"
  },
  {
    "url": "assets/js/153.978c1b8d.js",
    "revision": "15c7d0311eabe93cddb4319e3eecdea6"
  },
  {
    "url": "assets/js/154.29765e60.js",
    "revision": "4d6cf553151bd22a4f1d15064a4eaf3a"
  },
  {
    "url": "assets/js/155.0ec416d9.js",
    "revision": "28c42c8882b7ecab4ce83428aff4151c"
  },
  {
    "url": "assets/js/156.ec964b82.js",
    "revision": "d9fe8082f5db4725885813f2659e18c5"
  },
  {
    "url": "assets/js/157.1ec224a0.js",
    "revision": "1d3d4c6c81f36c328f84ffcd60f14ffd"
  },
  {
    "url": "assets/js/158.3af059fe.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
  },
  {
    "url": "assets/js/159.192c639a.js",
    "revision": "4a5a0c0f695f3b4f64e4a94b89e373c4"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.aaad8012.js",
    "revision": "9e866017ee5234d83bb57439a9be3583"
  },
  {
    "url": "assets/js/161.dc217752.js",
    "revision": "db453fd9e814ad365044b082f815ae9d"
  },
  {
    "url": "assets/js/162.e419ab9a.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
  },
  {
    "url": "assets/js/163.0d31e156.js",
    "revision": "d206b46c253372bb696a38971753f01c"
  },
  {
    "url": "assets/js/164.e3a04b4f.js",
    "revision": "fcf0ca3397bb9e0bd43cf18d6d8cf03f"
  },
  {
    "url": "assets/js/165.46cea361.js",
    "revision": "0aac32c053d2217c28b94ecd46ae320d"
  },
  {
    "url": "assets/js/166.7188ad1d.js",
    "revision": "69638a87ad669289ce7bb51ca30e7f64"
  },
  {
    "url": "assets/js/167.3675206a.js",
    "revision": "4c4cea603da48db608a8075f80a6ed8e"
  },
  {
    "url": "assets/js/168.e9fb6ad1.js",
    "revision": "34f1bf1a7d8046663c053f74fcd69da0"
  },
  {
    "url": "assets/js/169.136c8349.js",
    "revision": "018cc6af3b7ec5fedc6b6964e90d7458"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.256ed8ce.js",
    "revision": "bae649559e780fa4aafac72eb1a47da0"
  },
  {
    "url": "assets/js/171.790f89e2.js",
    "revision": "375e8df57e5c8cca71b4fc104663e434"
  },
  {
    "url": "assets/js/172.de8d70b7.js",
    "revision": "3afacd0df06a2253e7a98d7d308604ba"
  },
  {
    "url": "assets/js/173.1ea2a867.js",
    "revision": "8f016442374b252d6e10ab664f7667bc"
  },
  {
    "url": "assets/js/174.3bb60f5f.js",
    "revision": "de77e11564a75e4f1b53416641d62bc6"
  },
  {
    "url": "assets/js/175.e1a306bb.js",
    "revision": "1c64a5368d286ed6f2aaa30da3fdf685"
  },
  {
    "url": "assets/js/176.7fffa03c.js",
    "revision": "8493b0226b0d476184e8652e0b8f8d9e"
  },
  {
    "url": "assets/js/177.7cee9bfc.js",
    "revision": "8b72b473d589c34891c394b54a9061ee"
  },
  {
    "url": "assets/js/178.987ead2e.js",
    "revision": "de458caf8650a581be16a9d958fdec7d"
  },
  {
    "url": "assets/js/179.f2af6c1e.js",
    "revision": "4b16e7fbfbe4c5a6d458043762e99b0b"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.757eb24b.js",
    "revision": "639755c1526152484baa4f4958ee6665"
  },
  {
    "url": "assets/js/181.8ebbea27.js",
    "revision": "c3a58613a326dc4dcc789f5f68958b65"
  },
  {
    "url": "assets/js/182.1bfebbff.js",
    "revision": "91c0ddc14da76766e0a1669fd23ed1e2"
  },
  {
    "url": "assets/js/183.9d3fdaa5.js",
    "revision": "1f5c8c0e2fd6a44730eb7dfe93ac14d8"
  },
  {
    "url": "assets/js/184.69ff4707.js",
    "revision": "9748ae2578948712ebfca7c6a9810140"
  },
  {
    "url": "assets/js/185.bee43b81.js",
    "revision": "d04611966099b6a4ef00db4cf420ead4"
  },
  {
    "url": "assets/js/186.a7bdbf6c.js",
    "revision": "0fb1f161f98574309641662789366406"
  },
  {
    "url": "assets/js/187.4675ffd1.js",
    "revision": "87db0a06931a84ddbbd9b6121921e6a6"
  },
  {
    "url": "assets/js/188.129985bb.js",
    "revision": "c6ead6da28e89742d54d0d9b9fbb4de1"
  },
  {
    "url": "assets/js/189.c49d5904.js",
    "revision": "c26a99712c3b5ddd8fc8a6f8d8840b32"
  },
  {
    "url": "assets/js/19.4421dd05.js",
    "revision": "6024139ea73968d56db6f4cee3b06840"
  },
  {
    "url": "assets/js/190.20505472.js",
    "revision": "bf65dece0f4870a113ee238b4314a32f"
  },
  {
    "url": "assets/js/191.f8f28b42.js",
    "revision": "03e4addff3aa0ef6bfff1792cefb8a27"
  },
  {
    "url": "assets/js/192.6faae021.js",
    "revision": "3cf888a519f348432bee8be489317cbd"
  },
  {
    "url": "assets/js/193.91f20c94.js",
    "revision": "558515bb9c8cf8486a158f7cf678e0fd"
  },
  {
    "url": "assets/js/194.46de2477.js",
    "revision": "2670e953ca4ef009ac3819cea17f0be1"
  },
  {
    "url": "assets/js/195.81198534.js",
    "revision": "4397156e515d67054bd508e09a7b281b"
  },
  {
    "url": "assets/js/196.01514852.js",
    "revision": "b0f1a5f59cc3387030a3477b2fc2851f"
  },
  {
    "url": "assets/js/197.74fb51f7.js",
    "revision": "2443c548e0125d83a5b01515a529571d"
  },
  {
    "url": "assets/js/198.a87b4ea5.js",
    "revision": "c5419b029360ef4c65c3119c8a82fe59"
  },
  {
    "url": "assets/js/199.18b0eeb7.js",
    "revision": "0af7a2beac817b8310880309d9bbaafa"
  },
  {
    "url": "assets/js/20.a4cf9422.js",
    "revision": "34abcb3fa966a0361c2f3611ec00dd53"
  },
  {
    "url": "assets/js/200.2239a4cb.js",
    "revision": "99c43362dae5a037601022b860bdfd10"
  },
  {
    "url": "assets/js/201.ca4f2518.js",
    "revision": "6c32d240a171c7f550bbe745a299a7ad"
  },
  {
    "url": "assets/js/202.143e0b2f.js",
    "revision": "0fa3b20c61cdcb3b9ac68f265cb1bf1e"
  },
  {
    "url": "assets/js/203.a9ea070d.js",
    "revision": "0374a5a5a8c91a8c98aaf4a4dc15c00c"
  },
  {
    "url": "assets/js/204.1d4baf15.js",
    "revision": "715f7a13268a47b633b56ba31b1dd0e0"
  },
  {
    "url": "assets/js/205.fd385095.js",
    "revision": "34e3e0fefcfbcc43c560913dc8eca403"
  },
  {
    "url": "assets/js/206.d861b935.js",
    "revision": "f7b8d14f9aac45ede5eda7847c8d4c43"
  },
  {
    "url": "assets/js/207.475886a6.js",
    "revision": "3bf4896521a432bbfae3a5012f2eeb12"
  },
  {
    "url": "assets/js/208.18a2d1cc.js",
    "revision": "e48b3a98bf74184e4944ede14d954480"
  },
  {
    "url": "assets/js/209.3c064ce6.js",
    "revision": "8e252c5d362f78cf3fd984cd2dc5649a"
  },
  {
    "url": "assets/js/21.de44a76d.js",
    "revision": "4ae348060694648f663712f402051c51"
  },
  {
    "url": "assets/js/210.ce422cd7.js",
    "revision": "b2e7ac475f7d1114f6717c5cbb34f1ba"
  },
  {
    "url": "assets/js/211.7d957aa6.js",
    "revision": "457d5286f232d61040e623e45c0cfbb4"
  },
  {
    "url": "assets/js/212.6871417e.js",
    "revision": "27e302a62d7325059dd8792f35e80972"
  },
  {
    "url": "assets/js/213.970ca812.js",
    "revision": "8d44306f8963d9ed007dd735a6c0ca05"
  },
  {
    "url": "assets/js/214.326e94cf.js",
    "revision": "8ddeaea7c31e05781509bcfe900f50c0"
  },
  {
    "url": "assets/js/215.ce6acb51.js",
    "revision": "280a96682dadbeb0a1b3d6a0f009a861"
  },
  {
    "url": "assets/js/216.88d3b805.js",
    "revision": "5f767d1c85b1f690a3556e7acabf3f71"
  },
  {
    "url": "assets/js/217.99e22d24.js",
    "revision": "c2e1009be52ba5875f50b43a89829938"
  },
  {
    "url": "assets/js/218.95ce3f89.js",
    "revision": "0f26398b01b5d231b8b548aeee00095f"
  },
  {
    "url": "assets/js/219.40b2ffae.js",
    "revision": "8f30cdaf621b4cbfb3d14f7fadd7aa26"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.756434c2.js",
    "revision": "389c2a285a8b668d6321b73bc2aefb61"
  },
  {
    "url": "assets/js/221.42cbf8b0.js",
    "revision": "eda092a7305127660d1e1a372bc138ed"
  },
  {
    "url": "assets/js/222.852a3460.js",
    "revision": "aa3cf730e7a4dfcc8783b6ae91249027"
  },
  {
    "url": "assets/js/223.1f414174.js",
    "revision": "9c220c70065ff3bd544f529cda577f0b"
  },
  {
    "url": "assets/js/224.09673d4c.js",
    "revision": "f6234935b0e479037cac0e11c31ee786"
  },
  {
    "url": "assets/js/225.12468f13.js",
    "revision": "48a670c8459ce90ddffa502af4152a39"
  },
  {
    "url": "assets/js/226.0368fc9b.js",
    "revision": "cda005830333edcdd0b079e1fa0f297d"
  },
  {
    "url": "assets/js/227.d63f8bb5.js",
    "revision": "4a41299e6b2d260d2ebe3bc05ee05943"
  },
  {
    "url": "assets/js/228.2ef2a299.js",
    "revision": "ffc9df22f6d2f56e106e6a4974edecd2"
  },
  {
    "url": "assets/js/229.ae1b3a62.js",
    "revision": "dc3ffddb18b8d083ce1f3613b726e891"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.6e1da1cf.js",
    "revision": "e53ba06724a1c82f5585b9a9aa20a222"
  },
  {
    "url": "assets/js/231.92da247c.js",
    "revision": "b5fd3055358dad12d22b4454ddc89998"
  },
  {
    "url": "assets/js/232.dcb71cb8.js",
    "revision": "8ec42d11ab6ea13e87db0a7fe0dd53f0"
  },
  {
    "url": "assets/js/233.50f84732.js",
    "revision": "fcdf2112f82c9cea7094a6132c239f84"
  },
  {
    "url": "assets/js/234.1163981a.js",
    "revision": "0ad9a3209bcfe2e58a1373af05c861b5"
  },
  {
    "url": "assets/js/235.89b694dc.js",
    "revision": "a3feaa7daf8abd996a5d6cb77c61b795"
  },
  {
    "url": "assets/js/236.7311c8b5.js",
    "revision": "e29010eb69c31c587c5a8270a2724441"
  },
  {
    "url": "assets/js/237.b5f5fea9.js",
    "revision": "238efb4e5be8e6b7514d73519ca7f148"
  },
  {
    "url": "assets/js/238.734c8b99.js",
    "revision": "a3509f0d7a8442f1b3595e5af9fed034"
  },
  {
    "url": "assets/js/239.8e2e7d18.js",
    "revision": "25a7ec495c936be96582286131e9b570"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.d50e27f8.js",
    "revision": "d8620b8feabfe7d4926dd9190ee85676"
  },
  {
    "url": "assets/js/241.d9b7be6e.js",
    "revision": "e98f57b5059058108ce70cf27718b6ff"
  },
  {
    "url": "assets/js/242.5e883b33.js",
    "revision": "105ccdc4d685e57078d2f98c0b7a862a"
  },
  {
    "url": "assets/js/243.a5534598.js",
    "revision": "39558af0629bd8276bda2bd2f4547d28"
  },
  {
    "url": "assets/js/244.aa8e41aa.js",
    "revision": "a6720f0e8a8a2d8d7e2e721c26f1d117"
  },
  {
    "url": "assets/js/245.518b03b3.js",
    "revision": "455dad0e0b41f2e0fce8e634f2d9146f"
  },
  {
    "url": "assets/js/246.33f6ad34.js",
    "revision": "ad48b819dec5d5a21487d71d011b1f70"
  },
  {
    "url": "assets/js/247.e060fffe.js",
    "revision": "171b933db8f7d3ade8d904c04d56de71"
  },
  {
    "url": "assets/js/248.21b95f09.js",
    "revision": "55999a9eeca0b29592386d4cd2108f61"
  },
  {
    "url": "assets/js/249.b0f70a63.js",
    "revision": "deb9e91308a4382bc57f83a56e7eecfb"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.5e274ec4.js",
    "revision": "051fd0e2834e33b00c964b979afc0df7"
  },
  {
    "url": "assets/js/251.fbad71b1.js",
    "revision": "c57e670f25e101b3c71fc22a8d523fb6"
  },
  {
    "url": "assets/js/252.144fe075.js",
    "revision": "931b7c9cc82f945aa4dfd99c7910c446"
  },
  {
    "url": "assets/js/253.978bb1bb.js",
    "revision": "ad88f6649a9326e8740b42abaedf04b4"
  },
  {
    "url": "assets/js/254.379c0155.js",
    "revision": "6bce81ba859a01f5ef459608fb910814"
  },
  {
    "url": "assets/js/255.e10df287.js",
    "revision": "7f526c9ee1bc3fecd4c01f8831cd1a59"
  },
  {
    "url": "assets/js/256.a6d9e040.js",
    "revision": "0beec3b0e4c912b718fe739cf227752f"
  },
  {
    "url": "assets/js/257.6ea0bdd2.js",
    "revision": "8ae3167c1f8876b929ed3378a3db6035"
  },
  {
    "url": "assets/js/258.45253552.js",
    "revision": "675b8431994c1d6c8aa91965e51973f5"
  },
  {
    "url": "assets/js/259.4069955a.js",
    "revision": "47b7aa69c90bc8c4b092f251966dc839"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.6a2e5aaf.js",
    "revision": "b4c7cb74cb5ac665a510602603ee3cff"
  },
  {
    "url": "assets/js/261.21bfbf1b.js",
    "revision": "13a3db3b91031996534da1a72e0f4fe4"
  },
  {
    "url": "assets/js/262.6bc3cd45.js",
    "revision": "3a36fff6b293916141e754673f0682e4"
  },
  {
    "url": "assets/js/263.803d5b6d.js",
    "revision": "3cf12ac626eb1e7f1c1f42fe3051661b"
  },
  {
    "url": "assets/js/264.296de983.js",
    "revision": "3752a8a2feb37422c07850028382b989"
  },
  {
    "url": "assets/js/265.29f70e34.js",
    "revision": "7bea2ab4476f180566e85cad7cb5e4d8"
  },
  {
    "url": "assets/js/266.aa900f86.js",
    "revision": "6a8f821a9cd95528409f06262618e1cc"
  },
  {
    "url": "assets/js/267.a27d2eb2.js",
    "revision": "bb24a096a5d43cb636bdf0d5f468a9de"
  },
  {
    "url": "assets/js/268.aabac23b.js",
    "revision": "ed4d251861d658f74a74ea6da5d9bd4c"
  },
  {
    "url": "assets/js/269.aa05831e.js",
    "revision": "4f964f6fc62c7669255ac6eeed9dfd20"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.50ffafbb.js",
    "revision": "9266bb45cec75325e0cf6b2217f268ab"
  },
  {
    "url": "assets/js/271.b69ec801.js",
    "revision": "fa8705201b6da0b6d5ba8a0fa7790035"
  },
  {
    "url": "assets/js/272.b37869e5.js",
    "revision": "5c2885bddd8b7ca6497076ab81e82c0a"
  },
  {
    "url": "assets/js/273.80d18afe.js",
    "revision": "66753e66f5c62d427ef0c089d7c8b11c"
  },
  {
    "url": "assets/js/274.9ad426b4.js",
    "revision": "744a515a123b1eac318f724e91dccda2"
  },
  {
    "url": "assets/js/275.5ecfecd1.js",
    "revision": "00138f47621c613c6b394615d894aa9b"
  },
  {
    "url": "assets/js/276.5b842358.js",
    "revision": "4ca2ebf9283adfc6ad613281503b3458"
  },
  {
    "url": "assets/js/277.bcc2791b.js",
    "revision": "edafc62b3aca10d5529f6e05b57b71e5"
  },
  {
    "url": "assets/js/278.31e25bdd.js",
    "revision": "9d69cd04fdd15ba3d05dae369f87ce50"
  },
  {
    "url": "assets/js/279.81cc8e73.js",
    "revision": "c8395c297f779a68153f7f4f0a1a6062"
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
    "url": "assets/js/87.8159c4b9.js",
    "revision": "78b3d182c72567a8e338a1bfc984389f"
  },
  {
    "url": "assets/js/88.7d9a0d30.js",
    "revision": "4cff348258eb0c885bb3021cab301b4f"
  },
  {
    "url": "assets/js/89.5b768c4b.js",
    "revision": "50d1bbac684541925c5e00700555361a"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.aa18f967.js",
    "revision": "2d5eb7fde0ac0b5e0dab7ce728c146ba"
  },
  {
    "url": "assets/js/91.96df6eee.js",
    "revision": "bebd172b4063d58c0da53c27d10978e3"
  },
  {
    "url": "assets/js/92.7a8ec391.js",
    "revision": "ee497be09959eefd3e2e475785e15a82"
  },
  {
    "url": "assets/js/93.a7c679c8.js",
    "revision": "aa79dc7f307df888fb9ad80dfc3646ee"
  },
  {
    "url": "assets/js/94.0c42c504.js",
    "revision": "1af3ceecbf0691a9a6e88402d2554d90"
  },
  {
    "url": "assets/js/95.a094feb7.js",
    "revision": "72f13681cb6658cd88c7ce72310e2543"
  },
  {
    "url": "assets/js/96.2c5dd177.js",
    "revision": "1469cb5ad55d2e53a16fd6b44fcc2a63"
  },
  {
    "url": "assets/js/97.9c17faf0.js",
    "revision": "fc7a5b35422af2708150b0e9bbf1ac58"
  },
  {
    "url": "assets/js/98.a130cb26.js",
    "revision": "cc628d874405c3e79838511bb8235e3c"
  },
  {
    "url": "assets/js/99.456856c5.js",
    "revision": "56e7a4b7220f1fc045c49d8e15171254"
  },
  {
    "url": "assets/js/app.e838ff8d.js",
    "revision": "30269a2f9138af94869d99b798d1f61d"
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
    "revision": "9571eaf1506c11ec8228f37872c84135"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c10b1605c091ca188335feedb299d38c"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "5183ac5fad44a200ed89849a8fbe3486"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3e3784058ed63a8ffc16e60f8841e40a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "9258550e765eda88151fae12f08ab4fd"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e605accf2283f0a66d449ea263129151"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f9a0160268dc6b5247c41271a9a7db9a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0076fde55820c364a4ba89ced9842d01"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "056abac5e5ea6b523c060fa0c10173ec"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e2755dd33aabc76e042d32270701e805"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "705e26bb97498e93b53f7fef7c752ca5"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "bd438cad2c20d3ed9f51b5dba36990ec"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "7fd41d9c3947319fd7aaaf1d86ca2901"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "1af4e0a0a43c6b2b0e07e905c7c9f4d6"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "3c1d78872ae543f7bfc36c8094285dd9"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "98015d0a920123dc7a17c6f830dc7ab4"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "bbf9c73fa29ef96892484b6a69375c25"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "5d3e570247b173de0e6671b2bf6360b8"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "8b66209756e235ad63edad118c7693d5"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ccd7ab5a7cb81ef855d22c4e0365cb8e"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "0f3b4bd7be211cd15154787599a7ef64"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "6cb8d8ea86c1a02165a2fd5167594a07"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "18a54e4d0112f580eae861014e16f756"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "e5f30b50c98c66bb21bd5982b8eeeb0b"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "fe1c2a417e6f8aae05fe50de5949c4b4"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "248a1f88648b9a700afc024390503853"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "0a72b54c2eac6ee56acd182b78e57599"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "959b1da8d97f5baa202986520a14f659"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "e8fe3e0b9616508e6be80031162ba612"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "a9664a9847b29f209d0c6114c2ddc1bf"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "0851fc419cc06ca6d802e3918b427063"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "f36e4610f0386b0cac9c125e2a875fe6"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "4deeaca2c926bd8f427c5cb5e8135b14"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "5ed619c32779e871431b03b59a96e966"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d23261c4e128721f1c2f29aca68e0dc2"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "e02ebb129092d1bf68a1dbeff9fc987c"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "e0e76bbf216d21e67ca05f4e081069e2"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "23bc866325dff365c527a8394cd2bbbf"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6c59a6f180c707dd691a161bc3d34b4d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "cf4f87083f8c7ab5d710ff52700bbaa9"
  },
  {
    "url": "book/index.html",
    "revision": "e6f5fc32a15dbbbfe49f43ae2bc0dce5"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8d575416c8a17ff5764cac04d186054e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "cc2e55c227e4e851112b0d459e3ebb1c"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "bb5325f6e45f4566b0cfb39ca5addb3c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "15418cc0c2e5844f8dceb5b74a240a86"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "ee3287f8efd88b61cee47f0b6e4d1d3e"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "e77bf799e34918f4b4106d635762054d"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "60cd7e14492712e4b2cc6780f8505fff"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "3a8ddaf6ba053f02b152720351d4ebcc"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "eb643db7ce6923115c2262120e035522"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "ab8322a6fa2b6d838bca669f9c47ffdc"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c30cfa6b65450d1e74e5b48f24c146c4"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "c470cb3fcf7cb0a6e5f8262819f6373d"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "6dee673ba031b9abd198a08f53b3cbdc"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "c298c46a9b42ea65b97014d90c61f7fa"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "87c1a74c3917b2e32b81b47aa1df503a"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "7c3f4187d8a98003c26873f5a3181c92"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "426a21aa20835db14f7a34778eef4a4a"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "b77c0804f533e394ca16fa1f0a6e9ac3"
  },
  {
    "url": "c/program/index.html",
    "revision": "b3581ee1e2399e3a48c3744ad73b264e"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "446cecccd1a3ac9ad1a26172b06ff82f"
  },
  {
    "url": "categories/index.html",
    "revision": "55415844ca81ce29ac8276005dd0af5b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "25608fa2837233404ddace38e6fef73a"
  },
  {
    "url": "figma/index.html",
    "revision": "a76f9f9c1300ed73017e86840c8629c6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "8e8080de6b047cc42bc8d65f62accf64"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "99873583aa4f79c5590026648d07f09e"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "09c2bedd9675ec2471b4e7edbc80be0f"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "c240ab323e27d0bab3eda9bb50833747"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "6eac25518009e70e2e238c1bacf2f475"
  },
  {
    "url": "flutter/index.html",
    "revision": "2ef3f4c80aa09e36632f59a2a70cc4d6"
  },
  {
    "url": "flutter/point.html",
    "revision": "cd635522981481294f8983f9c663a120"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ba05eee27cde860f0945aca8d98a8ab3"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "850c39434c1c015d0d2b7f5cace4fcdd"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "818fe4bf02abcb5f93184fb723625d06"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "5d9e8e6b657006f1026b7fc3984509be"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "85a7a86b221c7e89f57bd60e5d5ecf37"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "50fac3577ca57d113ac3e64a6eb78f09"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f3c50e5f296d1a2fb453fa47ed4847ea"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "e9a1d039d4f633824589e2665bb64bce"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f9ce52995daa7d7c3dc05bf94be7dcd4"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "72d7d79c73671cec9de8fda6e879fa7a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8546b2173cc2752dc502f2de6960a098"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "0ed31836f80e4a59bed1732d1a96e863"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "dc4c03c2d8715db841b88d1c3a56dd80"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "05b94eb1c06102344abf2a7763bb5006"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "fd15d921ade4bed1b8615820d16fd1a0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "12faefd154ef179810549478d222cc4b"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "3198bbe77e4579e61cd0bb222267c5df"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "cc429f1abe059e4338d59303076dee3c"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "79dedd893dc17597decf8e14c54efde3"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4f64cb905082db21f6a8861e6cb04a02"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "fe84ac5d16bc780a76c33d40ef7bc2c4"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "fd78290e39b18fa5d54a19126a8b1732"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "67e9361ee947a7a917445a2d15ad04a0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e59432dfe8ae27059d51161988eb56ee"
  },
  {
    "url": "haskell/index.html",
    "revision": "c1aad4936dabcc11ddf47abae6075b84"
  },
  {
    "url": "index.html",
    "revision": "4b2068e9645cd9025e7a5cbb9085d590"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "0eec2e91c46d113cda134b7466926aec"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "614f898bc4822ae7ae7e7793ed821cd1"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "a58606a65c42aae700ae721299a8cdd1"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "4002ff47ae02ded14e24d6131e5a9219"
  },
  {
    "url": "python/index.html",
    "revision": "81b627eee56115561eb0d4bab0fe9889"
  },
  {
    "url": "python/python-ase.html",
    "revision": "232df39119b3b382f1d6f2994a0ce197"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "e5cf88b1e650a237e18eab8190ded2c4"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "664879f12f0e37560e1f6c06edbb7367"
  },
  {
    "url": "python/python-file.html",
    "revision": "bc517f5b100ed4ec2d9f337b05daff60"
  },
  {
    "url": "python/python-function.html",
    "revision": "e5f50417f1f09a2cd330558ed7738be8"
  },
  {
    "url": "python/python-generator.html",
    "revision": "9087ce1f33026455011201c202ce6e90"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "a254f3b645012c6564a9f19b91c2b657"
  },
  {
    "url": "python/python-module.html",
    "revision": "9e03cfb4915fe1ff5b9cdd73d6da7678"
  },
  {
    "url": "python/python-string.html",
    "revision": "f3c45712e97e0cd59f1bc6e3a3e5fa2a"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "cf260c10a733a0ee769222acd27a9fd4"
  },
  {
    "url": "read/index.html",
    "revision": "e8fc78ef5f296f2bbf54e2533fc760ab"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "cd15417dea0771e3494b604c3114045e"
  },
  {
    "url": "swift/better/available.html",
    "revision": "270d51c561bfd9e4a4a53f77c5ef30e7"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9c1917b3ef374b08ef173e053bae0fb0"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "65e05a38ab731d647c9363d7fbe221d3"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "eb7219886855143665762d936b48f4f0"
  },
  {
    "url": "swift/better/di.html",
    "revision": "4e161c1df6d122dd52835c44725f1cae"
  },
  {
    "url": "swift/better/index.html",
    "revision": "0b8139a85c279cb89c959f8ac9be8162"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9cdb1044e3eb0fc890c47df90183aa33"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "539ef9160bd7fa2dbb3ded933dba0498"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e1bf69d2ae906d0ed39074514a0c3829"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "d188bf3bd1bf7bff4ac2d497e66c35c6"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8e98099bac4f4ce55a33b95ba032332a"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "60e535ffc9f54ba79ef6ecb5d1c710e9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "e5eef1f51585f7e77682c283b56a3e0e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "1b9cf673fdd6ca5ace14fd39d69ac246"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "5c94cce69e92d6f0cf511fef33cfac94"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "2cc7dabb82fc1804e118714d934e0c09"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "224ea12db68f5cc09b8cc5da98d35719"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3bb4016757faf896eb208cbab8e8425e"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "05caa7f7a51f9e57490554750b6022b9"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "23b95eee47296f27bfc9716a1db920a6"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "38d3062de7a7a32b25683b4577c1a0d3"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "03aecbd9e37b4b5861aaf108c28d059a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "a30fc6ccac24dc561f7233c37841ac15"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "3b561ec3e1c46d810f08ce7eca138fcd"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "be05f52ae7b405843d0d4a53f9ca2898"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "b9000fb0dffd9295c732a09a441e84ae"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "e6bc10dbd11a4a76a01b58df34afe8d2"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "b1198814daa8312255d0705908c812e1"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "5c78f9835e9c701b67090163324f1236"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "7a5280480883f11da635f764c6f6bedf"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "8b996140e1b8035eb4e4cedc4269fe15"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "b38a15693837bbb31c78636cb3d3689c"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "262c9ae61d2b665d29ff367e24e01b97"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "689d0ee4dcd4f6382224b688a925bb9c"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "97e0f395e6d477fb4645cea9ce13121d"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "c016027addc943dbdaf9bc7f52e7ab7a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "de0daab389c9002ae627e5e03eba4ba1"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "698b5f7fb713016aef53b4f4f9535480"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "050f0dec96834783fbbcc9b3fce7e658"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b412c992eee99ac3a984adc5b6683884"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "67ce0961112af45f4a516009338bf5da"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "e3a5eb7b4fb4967c3d9516225f7318d7"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b81f4ebd3e2f59459a94f6aae1e6b98c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "266272c681306010a89b8c021e622931"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "1b3ab58d1394f7e9786408430172f7ea"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "0fc491c1be75e04119d67e5e108309a8"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "c8314b84905105f8e9c29b8f01a32f98"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "8fffb808c1a3d022bbb2cad359de6e5c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "3683d7db785f2437e706187698223c6d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "18ab9526017b72bd1bc412247c9ad8e6"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "cea111ccd5990bba9fc4aaf825c76733"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a903b3cdd1334d9f9be693a14cc2f306"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "89938e5f7867d495aea91bb58aa78fe1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "15d05b6c02a7a5fc2b5439deff8a3ca2"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "12b2044f96ec44d9df3cd544bee01b15"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "6dcd34ffff4b6093d496bcd37a31b4f1"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "1430d8e1e6e0c4e09d2635ad51d7922c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "64c1f332bc0e5466a6d062f308a59419"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "bf06773933b9dafd152464878a642582"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "932c1fde346dd3ed138c2c0952adb319"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "f1539af5fb8c03cdbdf8ba6741143817"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "aee4c1902a215063b235cc6751e5ec14"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "895dae19f955950167b785194f0a98d5"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "3dfb6ac4f108b4537982bb9ce54a955b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "07d8ccc3c87a6dee3758e162da43a080"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b569f8ddc32eb37e6f50c13c43e3425a"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "18301471cfdceea55acdee4558e19395"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "14d018f71db8ea5bcdddd918f03b12ec"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "dabe97282b0ac457f364fae40f2ca500"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "a65644ac1b293282718394f2fbb19f59"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "31db0c061e050e6a7547d34624d319c7"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f3569b4aa7637897ea5518acebad5e81"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "12c3ce11930905fd934e1b36d3753adc"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "56d93f6d9b61253535b3d7e4d53174f3"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7d53065e7c4d9703d82c7af9a93e066b"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "e174b711d60a09aabc4258022314b40b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "251218d34f52732032b07a2c6279504e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a92b1ced1dae4c9204ed83d838f220fe"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "89e4b485abfa482dec86037013c3eece"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "8c92ab6c828d14cbc689398af9221ae5"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "455798eb6ac50f364339bd1d09a7a00e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "43829cdb58bc1e903f24b741f316224a"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "71bf7379440eb3023f782ae4f46b7fe7"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d258696392715e1c300bcbe631cc45fe"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "44c2ebf047feb1c77d72137a688c77f9"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "cc4a0393af96a3cf564d7de9992abbd9"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "d0396e9810817ef1ea58eba066268637"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "548d0b375882cad60fa69a10de66cdf7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "1100249977c1b3b691418a58cbc62d2d"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ddc53e232131c2a097eb2af428ee6678"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ff7f07cf2987e67265c6176818ae76a5"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "2b2ef89dda7ea7a71bbe9a3ce8172ec3"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6e4b2c7230d743df1b15f51e3a04e3d9"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "d00802b03c14a85f16ad5c93b981c867"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a9b5b6885ec55d5bb7fa6a685b69f75e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "8d69727eb67486a333804378edcba2e7"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "87d61d16b8b4f52aa458a65e2f431587"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "fde1c210292f8f69e16230b3b23c3aff"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "de1159c86ecd0a90c2b90bb1824ca7d2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "8957a92e5da22f312b52799b22bd7b30"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "df9714985b40edec0dcd49257ecaea0b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "9b3e5065d32ab8afd5ef721b6f347a9a"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7ca097959d1b0a115e9be098714beaed"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "0f3b9843d2a798aad0e4dd25cea11bb4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "c7e725e72835ba01ed4ebff673982436"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "4c90e28f95652601fbaa7135f6c11f97"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c6e2ba88b9b12914d799d0981f623350"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "284c70b33ad720f84b9b3c2639c07fd9"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d97f4a75a9e24165702f7dbb3d6ef31a"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "bd4b5a1c8fe9818148029c3c248c1b6c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d4cdcdf07352dbd860e4143e7107255b"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "a2f83390ffa6176c7636b1ec8acbd43b"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "43e603296772ba5dd5b9cf145df94054"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "9c83cf43f0fc3721d3c043c40e52887d"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "940927c55e53622bf3a3eb0c32e7680f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d91d9b0586adc1c9136edbb5651237f5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ea97bd69cb1c3bd1e0835a0492cbf9d7"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "da53b2279ba5c62c1fefc704076d8fa5"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "9cf841c8281f5b677f65a7206383aadc"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "55aa7ad380a00a3fa31485598780c0e6"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "0d1ad233dbdf4ceae3b629fc4a0b5692"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "8431b5a5a96685d5dc6628aefe8a373e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "a43c499504b9bff346f6fbbfe516f0b3"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "53a99c89f5ba27b73ef1655cf58f5ad5"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "24d2b599ff47b7d9e05fb872b18002c5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "f31e028d5497430a0c7a2a3c8a18d127"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4e278d1a0e3c0d1af1b9cbcd17fc735b"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "7b89a866b64fae50ced0da0ca72a98e8"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "51c84eb6e4f5ef56657211deb413c30b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "82090f033aa227d6037653ac8b75169e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "2ab3a81cf625231795e9fc0dd1321f7d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "c06fc62790d9b805a2ea9d0c217d461a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "28ed829f415576870f1b8dda6bdaefd3"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "d59a3b8f110e1079be919928aeb8c085"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "97005f757f1451b3ae8b61bbe5a4f4ac"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1ec840030d0046a81f043b765d1d78a7"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "2839eb8a4c091b7c6fb2c08167ea6a84"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c15fb6313159f338f9313ad981036e53"
  },
  {
    "url": "tag/github/index.html",
    "revision": "ce3550e362edb3429f8147c98d2bfd7e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "3335a28348979df790ff3f547c526ace"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f86254d237a118a883329c5744b2334a"
  },
  {
    "url": "tag/index.html",
    "revision": "2bf375052464136f9c7c14ce77a59ea0"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "fbcc52a7be96881b66884859be6a5066"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "279e7df04ec0632f0a0bbd07ea471ede"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "e3d0c346505c1970d85ce9a013be02f2"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "bd753590f7b039a6cbdc3c91b07c49fa"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "8a520cfd05cea27d89d48a7b7ee14afa"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8beb92ccd53533b4b531b64fed885395"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "874e3a24ca37651ff76249b2454b9c2e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "392d78f2b88bb41561d2dad04f8f5185"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "042d6b36ed4cec299e1ab9304265ec6b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "90a6036428ef1a2fcc3428b1c5452f2a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "96d5f06272c952327f173fd01cd72c57"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "70fa848390a552deff9b13bb56c8af58"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "fe9a888a903ab2296fef268d0b3d4b20"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e26b907f895f613d68631f700903a911"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "5fb23571f0530efe4a433371a6bec699"
  },
  {
    "url": "tag/read/index.html",
    "revision": "4bd43e4d2cd052beac44ad99b7dd67e9"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "091c6f3507f63e9def0881191293148d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "9e6fc3d39d67fea836b54711670a8de5"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "ea8e4cfda0c38ad4fc331dc2f6caa5ca"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "8510787c0178a2389cb568ad3013e7ab"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d9fa256159dc3c9fba76fc8939aeea70"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "0d17010752e20f5b65dba9d880c852cb"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "64f882abaabcc66cb2f4a65aaa365009"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "1031a040ff6012110ac20f9952bf389d"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "b3ddfea26a40e83b2359b591f27bd6de"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "ad0c917f73ea067a5743bfec1147780b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "a2884fc159ab8ce9edd50e4d5b0450c7"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "988db6937f6b1269c418f2fc615065c6"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "11877f5a9baf051705cac78af6791a19"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "dcea4650c7bac999cb6e0f64d0f99514"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "ec87421ff1d9d0c339f75dc19a52bf56"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "33a6ffe455bf49e40f5947e026a65dae"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "26bb9119b8812c3941366e301252f4ba"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "0bad81e443739d7ea7f001b3bbd02ef6"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "d436fd5d52b985bf98a609f1d932f2b5"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ffc650dc4b20c939fd374225cda04d04"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "07b34091d1bd7f55e538ed4178f39cd1"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "dfc5539b146c46190e803e03f80a82d6"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3988e428d5506ef4c5a9804e291e6253"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "c6c51138d4753d3de413280b2754ffd7"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "db56dae4dad477e402a1ef21dad6d0c1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "c6cf93863dc6edf0108e521eee446866"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "298ee0d70f4967c878992e366fb923a4"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "346a1fc32103e4c885d7e3d64cee0f0f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "11be8e748b11754befe5f3e75f26acd8"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "30f540137285080ba7695a12bb4504af"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1bb143e2b068f90a63e0c41cff168b2d"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f6485ad8995a33b3eb82a45cf78b768c"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "8ab43e23442ed2b8cf35104df0ddeb4f"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "d1bc888587c37c98582d5321f295f199"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bf64e82d2fd77fa059cebf85ffedb0ce"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "bb9b66ec7c93600a4a65ef61b30202d7"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "bc3ef1c9c6957eaafb4b0d64913f0823"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "37a3269d7d1f2036a658b24403bf5255"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "c57eb20de2478570f5cac4f2059a1ce2"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "7ca08855787a955d276b99b85f66da75"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7039f7c90476fb82c055faa364dfbd83"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c4d97a911f0a491d02961a41c11441d8"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "5f62bb2d5ef203ea4f83de616befbc11"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "c4ba9124c0217b7c513a33930bde3286"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "3a5115312dc66fd014df4d9fd2b2e443"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "177ba5bd83225a44f9985295c7bb85a3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a3f46990c6119b847ce98d72284e4656"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d1ff5976c4e976062b2945cc53aab71d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "566bcaf485ae9264b25e2db9f24bb5c2"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "9989fc38eaea14b93ce7e96818e00416"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "83d3b9bce10df97fcd46141685e672d7"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "0cf6f19f446bfb61102a2cd6cb1d271d"
  },
  {
    "url": "timeline/index.html",
    "revision": "943f6c18843d55db60bbfafdbac7f7d2"
  },
  {
    "url": "tools/docsify.html",
    "revision": "c5702acd0d82918af3dfb6c24077f327"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "74db0857e9eb60769797e493b323fd8c"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "88afbb6e633ebd937ec417cdbba546c4"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "b059844e0a9ae71148ea5af56565c539"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b45d84455e8148b977afefebec5b9f81"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "48be1f0d072cf4f359303ed7d585a320"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5918c920db3b9d55c11bcafbb405c0c2"
  },
  {
    "url": "tools/html/index.html",
    "revision": "b46422ef2c6ec81ea3599b333e753b19"
  },
  {
    "url": "tools/note/index.html",
    "revision": "efe5b4d7e89b21e79f57acc6941bd3fb"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f0797b4a4cd432be328fb8bbf94946d0"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "559803f3deac1b2da1f995ce5d677191"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "dcea7e473b55899a1ff50dfd1fd7a9dc"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "363a36f9d26359d8774e58042821f03a"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "4f08c54b121b3387a71f778cdc9f9de9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "f089f1bf72990cc8d76623bcc8ce162a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ad72b34112e0fb0d26568a7bebfe9ab1"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "4ededf3fedee5b34332549bda944b1c9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "a51e3992c90ccc32872e52827a2692de"
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
