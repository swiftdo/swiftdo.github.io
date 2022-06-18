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
    "revision": "1f2fb7b690dfafe24a44d556e0e5d0e2"
  },
  {
    "url": "about/app/index.html",
    "revision": "aee68d40ad9c8e529ed9f8812d137c89"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e5a070ebf84ce8e04f7e0076a6aaf220"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d340fb9eee3182c56b13498db6e058b9"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "0af89e2b4d89304200a5176bda456f11"
  },
  {
    "url": "about/index/index.html",
    "revision": "08d68e695c7cfddb9658d494f31669c0"
  },
  {
    "url": "ai/index.html",
    "revision": "529e82de9bd0222eb900a314eb6a2edd"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "411b6fd97c5fc4b8a6c6493d1ab25ec5"
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
    "url": "assets/js/10.c8f4060d.js",
    "revision": "13b53f9ab412b04aac4746f71d416aca"
  },
  {
    "url": "assets/js/100.4fe981c8.js",
    "revision": "fdd300c218911f33ad19c8b545874151"
  },
  {
    "url": "assets/js/101.2fd3afe6.js",
    "revision": "7a3fcafbf7517736ceae30ec4ca1c999"
  },
  {
    "url": "assets/js/102.469329c4.js",
    "revision": "bf97ff657fea10c190a2202553efb534"
  },
  {
    "url": "assets/js/103.aadd893a.js",
    "revision": "5178f3874f8e2495f68959a7e6bda05f"
  },
  {
    "url": "assets/js/104.51337b76.js",
    "revision": "140291a76abcf06a2d4e02f8c13cb6ba"
  },
  {
    "url": "assets/js/105.4cb068e8.js",
    "revision": "d24c2a9063e1b09a69536001758ff633"
  },
  {
    "url": "assets/js/106.e441a895.js",
    "revision": "3f9a55cc930a34fc12ac70fb6b1ede5d"
  },
  {
    "url": "assets/js/107.080c566d.js",
    "revision": "b5fb06bbd850887b0d8fc82e9eb4a1b4"
  },
  {
    "url": "assets/js/108.11c27cdf.js",
    "revision": "5214f737878e1a7e830e3c54f560dba5"
  },
  {
    "url": "assets/js/109.10c830da.js",
    "revision": "e3d2a15aec27d42c7ff055ce614824a0"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.302b9cad.js",
    "revision": "cec31af9572a09242207eb1b1e37bbb9"
  },
  {
    "url": "assets/js/111.514791ac.js",
    "revision": "8f329556960a67967d8a625932a6ad7e"
  },
  {
    "url": "assets/js/112.356cc03e.js",
    "revision": "2306548e4ded458bf45cc0be1dacddf5"
  },
  {
    "url": "assets/js/113.1d860649.js",
    "revision": "eb17a43aa44aa4d8e8d47c007ca22275"
  },
  {
    "url": "assets/js/114.6a0c2943.js",
    "revision": "9d5258490778221c44fa22e599d0777a"
  },
  {
    "url": "assets/js/115.54830f95.js",
    "revision": "c384bf99cfb00e73fe728c9c1ace49b3"
  },
  {
    "url": "assets/js/116.d5e83204.js",
    "revision": "083bd0abf74b6372e921e08831944514"
  },
  {
    "url": "assets/js/117.1d27ab1d.js",
    "revision": "3567b66cb15e6b0a4211ddd7faedcfa7"
  },
  {
    "url": "assets/js/118.f1294adb.js",
    "revision": "3d2ece2c224a7fb7272b962ce6f1b1c6"
  },
  {
    "url": "assets/js/119.2bfbdd4a.js",
    "revision": "61bd100b2d463f50c636f108acb17acf"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.fca7fec8.js",
    "revision": "0eea0668f6fb85ae63280bc2d1b6340e"
  },
  {
    "url": "assets/js/121.310c570c.js",
    "revision": "cc6320a732a8c1cddee08d69adb4f6f6"
  },
  {
    "url": "assets/js/122.bb4f5349.js",
    "revision": "6213d63b94f341cbf6e2e70e3b7bec1f"
  },
  {
    "url": "assets/js/123.ca638b34.js",
    "revision": "68139fe8db6468f9b4d00ba71d0462a6"
  },
  {
    "url": "assets/js/124.77db8740.js",
    "revision": "299881eddf8626d56d5c35ab76ec96b9"
  },
  {
    "url": "assets/js/125.a2188051.js",
    "revision": "ca3596ef191ae6ca7579e68123aa3c1b"
  },
  {
    "url": "assets/js/126.21412911.js",
    "revision": "bc128dd33bb811fa82bd404f1f550454"
  },
  {
    "url": "assets/js/127.91fd4daa.js",
    "revision": "a198a1aeb7658d0b7fc0bfda364b9cf9"
  },
  {
    "url": "assets/js/128.61ca9920.js",
    "revision": "2a2d356b6daeaade4cb6e5dd53ad7435"
  },
  {
    "url": "assets/js/129.2e354cfd.js",
    "revision": "4614ff65042cde5c55cd6227b4e75196"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.9a5cc1c0.js",
    "revision": "f161c1ac36a142b19650b95d7aea3ac0"
  },
  {
    "url": "assets/js/131.493699b3.js",
    "revision": "2c903a6e67a2e8fc618821d1b8a04e8a"
  },
  {
    "url": "assets/js/132.6db5935d.js",
    "revision": "0d10731344a85e11f5b970a755d25546"
  },
  {
    "url": "assets/js/133.066a97b5.js",
    "revision": "2709ffccf36c8be779efd98307991dd9"
  },
  {
    "url": "assets/js/134.cacef5c0.js",
    "revision": "035ed02319c90909f3742c0c27e825d1"
  },
  {
    "url": "assets/js/135.6a0387ac.js",
    "revision": "a4bb510ce565168d94b866cf6bf3c591"
  },
  {
    "url": "assets/js/136.087eeac6.js",
    "revision": "21847d875f61148e08641d03c927b878"
  },
  {
    "url": "assets/js/137.475d5499.js",
    "revision": "fc8407e905ac7c65efbf496e0fa69e73"
  },
  {
    "url": "assets/js/138.49b2426e.js",
    "revision": "497a6200c28fa53b3bde0d6d8eae1a65"
  },
  {
    "url": "assets/js/139.f9e3a11c.js",
    "revision": "592d396181dd1f7f97f5505ccbf8cb9d"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.b4324739.js",
    "revision": "f211679b8f6b8d58bd47d4d8dd791fba"
  },
  {
    "url": "assets/js/141.4e1c70f5.js",
    "revision": "f73be098d20026b4887c5a6bd54af4fc"
  },
  {
    "url": "assets/js/142.629d74a0.js",
    "revision": "98c49619130c98071860d81150294d0c"
  },
  {
    "url": "assets/js/143.9edc9f8d.js",
    "revision": "aa0f4edc16d4d4d7f3cbbe8da0f8777d"
  },
  {
    "url": "assets/js/144.9952ae73.js",
    "revision": "29f859b841476145722d72c944c847a9"
  },
  {
    "url": "assets/js/145.0d06b1e1.js",
    "revision": "45425310a1e032be4309fbcf28a278c2"
  },
  {
    "url": "assets/js/146.5f8c5d29.js",
    "revision": "ac12f4c80c5233a7617d103b6348f9a7"
  },
  {
    "url": "assets/js/147.00e58d74.js",
    "revision": "bce0dcf61c12669fe85fe4f102374a29"
  },
  {
    "url": "assets/js/148.f7f8ef5c.js",
    "revision": "64db3e6cd1c14d08ce54246d40f69a27"
  },
  {
    "url": "assets/js/149.dad3b59a.js",
    "revision": "dcce033a1201b6566840ebe28e12345c"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.051ce04c.js",
    "revision": "304e3ccd3a8df7e21d8247c578f5e57e"
  },
  {
    "url": "assets/js/151.34f0e581.js",
    "revision": "3ebb70d08145854831c40ca95dd0732d"
  },
  {
    "url": "assets/js/152.f7b9d1e3.js",
    "revision": "2bed010928a308565787857da7825878"
  },
  {
    "url": "assets/js/153.bc2622cd.js",
    "revision": "18b997c5349b00792edfdbfc0994758f"
  },
  {
    "url": "assets/js/154.1b256561.js",
    "revision": "47e9afebb6d36be550a5d33539753a4f"
  },
  {
    "url": "assets/js/155.2947eb1c.js",
    "revision": "dec3e3a4114c7b3398fbcf0e93881ac0"
  },
  {
    "url": "assets/js/156.d661c8f3.js",
    "revision": "b4963cf077bab4d23d72d5bbe1de9f37"
  },
  {
    "url": "assets/js/157.03bd6e9e.js",
    "revision": "17e2081e677525612fe6bdcd4d3a7c44"
  },
  {
    "url": "assets/js/158.72fa357f.js",
    "revision": "ee2ee8c8723960393bc425d098985b5b"
  },
  {
    "url": "assets/js/159.63bf7a05.js",
    "revision": "c701d4c7b05d7234e7807ed15264c228"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.726d39e1.js",
    "revision": "45ccf1e0ab1c43d30e6ed95e3e7e63b6"
  },
  {
    "url": "assets/js/161.0ea25041.js",
    "revision": "7df75a410647c8f538e26224409ed1fa"
  },
  {
    "url": "assets/js/162.e1a8690e.js",
    "revision": "aca051b74ed3cf7308e97ad5b73d16ef"
  },
  {
    "url": "assets/js/163.24e1f48b.js",
    "revision": "7eb978d846b49c2cf72956781d76df2b"
  },
  {
    "url": "assets/js/164.8f3390f7.js",
    "revision": "2a2dab1cd9252320d78a4425ac735f36"
  },
  {
    "url": "assets/js/165.78efcea6.js",
    "revision": "e71c456079107e9eb891303345d0180f"
  },
  {
    "url": "assets/js/166.a9e9999b.js",
    "revision": "491319e4ccad5f37252d34f7b87ec74f"
  },
  {
    "url": "assets/js/167.36e3c004.js",
    "revision": "430f508ab5221d9d499b69e4266b71b0"
  },
  {
    "url": "assets/js/168.da91b827.js",
    "revision": "c18252301947091308f255cb77122c5b"
  },
  {
    "url": "assets/js/169.eafc49f6.js",
    "revision": "e284a9e45ad0303a77335ffa1a457bed"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.b35cb16a.js",
    "revision": "0c32bd51bb321d2003e7f85127d70ce6"
  },
  {
    "url": "assets/js/171.154f8073.js",
    "revision": "5054c36c861ec305ea0f7dd55b82db34"
  },
  {
    "url": "assets/js/172.7fe43607.js",
    "revision": "20fd673ce4060693f7dd60c2701942cf"
  },
  {
    "url": "assets/js/173.e5499ccf.js",
    "revision": "f16a58e7e3871403f05cecc7bec1e73f"
  },
  {
    "url": "assets/js/174.43ccc404.js",
    "revision": "c8b17bd0cff57bc1fbec480f674408fe"
  },
  {
    "url": "assets/js/175.3e663bae.js",
    "revision": "d47c3cfd924a7355490a60db3f0ec558"
  },
  {
    "url": "assets/js/176.1bfd55ea.js",
    "revision": "361fcc819499be1ce789a4956ad28ec8"
  },
  {
    "url": "assets/js/177.2af75ea2.js",
    "revision": "f7259493a36005fa9445623f3458fc95"
  },
  {
    "url": "assets/js/178.c1b57cf7.js",
    "revision": "4e5a8897b3c3ffc57e8d82b3338e32fe"
  },
  {
    "url": "assets/js/179.c2340336.js",
    "revision": "f0d7df3b2127cfa63a77cf1c2db69841"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.bc1be2e0.js",
    "revision": "12c7cf4786d53f4ca5430b662036fa8d"
  },
  {
    "url": "assets/js/181.e8efd99e.js",
    "revision": "d1e1cc6dab12fad1ed02d7a0c899a5d4"
  },
  {
    "url": "assets/js/182.70767ea4.js",
    "revision": "0494b7ebd81ea1e0ec100dad03573128"
  },
  {
    "url": "assets/js/183.51b55b06.js",
    "revision": "14a84f05f2c244e60ea55ef96325ac27"
  },
  {
    "url": "assets/js/184.c471755e.js",
    "revision": "3fe5c802dcc4f06385544261931ba3d7"
  },
  {
    "url": "assets/js/185.b0ca42a7.js",
    "revision": "d631d7bb205baf3d82488d066ff71d24"
  },
  {
    "url": "assets/js/186.c31c971c.js",
    "revision": "b1d8e683a05266033b03728cb416ae9c"
  },
  {
    "url": "assets/js/187.72bf8eae.js",
    "revision": "22b0f2435d6e89f794043535118a83a5"
  },
  {
    "url": "assets/js/188.c58f5344.js",
    "revision": "a2515bcf8e8b20a997c743d9be2299be"
  },
  {
    "url": "assets/js/189.29f0a623.js",
    "revision": "a16bec7c8705f9ac505fc234b3c9c557"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.6578b3ab.js",
    "revision": "4fb83f6e05e345fa07b191b913f7f5e0"
  },
  {
    "url": "assets/js/191.4a781cc0.js",
    "revision": "f3afb2c3219e306a681039289f60b78a"
  },
  {
    "url": "assets/js/192.06cf2c09.js",
    "revision": "a33245843f37d1a4399b86a4396cdfe1"
  },
  {
    "url": "assets/js/193.ca613276.js",
    "revision": "57f236eec49c5f0e11b343346b5454ad"
  },
  {
    "url": "assets/js/194.cb4b7c43.js",
    "revision": "68a7429b5aaf314b944a2c0d2b7135f3"
  },
  {
    "url": "assets/js/195.136d4a5c.js",
    "revision": "d02ddbcf86a9c8702a4d683361a52958"
  },
  {
    "url": "assets/js/196.0ff33c59.js",
    "revision": "c08033b7703067cdc2f6ec1518d075ad"
  },
  {
    "url": "assets/js/197.d6800c86.js",
    "revision": "38f9f1f57099439ede3ea900312303e9"
  },
  {
    "url": "assets/js/198.a397c71b.js",
    "revision": "c513c29dc3f9351d5e546704553827b0"
  },
  {
    "url": "assets/js/199.04bab095.js",
    "revision": "196c9adb930fff69a69155d893f174b8"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.4f7d6aa8.js",
    "revision": "0d8413ba5a77b5e4f73ba62face68f0d"
  },
  {
    "url": "assets/js/201.ace2202e.js",
    "revision": "fd8f68e6353aaf7aa5e377de2da4c534"
  },
  {
    "url": "assets/js/202.f6d4b790.js",
    "revision": "60c006a40cf6072521d6ad742a980df4"
  },
  {
    "url": "assets/js/203.e9e9bc94.js",
    "revision": "1477367f1b1f367be362a485ca506eea"
  },
  {
    "url": "assets/js/204.f092e9f3.js",
    "revision": "e5fed97bc97fd709e804bad0b5b03d75"
  },
  {
    "url": "assets/js/205.ee4f79b8.js",
    "revision": "0bca9f4b2057b47ba5a89af610c64d4d"
  },
  {
    "url": "assets/js/206.792075af.js",
    "revision": "aae49fc97ed0da1cde2090603b635cc0"
  },
  {
    "url": "assets/js/207.bb10a59a.js",
    "revision": "835acce6d94b45c1882fee2dc43c4d68"
  },
  {
    "url": "assets/js/208.6ab95012.js",
    "revision": "f5a309b12577f040b9e1d50132861736"
  },
  {
    "url": "assets/js/209.d14be0d3.js",
    "revision": "893465ce431fb9c3d210e45f3995ca09"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.c1af70f5.js",
    "revision": "faf2e9dcc8b1f5ed01d610919eda4739"
  },
  {
    "url": "assets/js/211.f4e0fc76.js",
    "revision": "8317006b3612ef06e320512dab0714b3"
  },
  {
    "url": "assets/js/212.e0934ea4.js",
    "revision": "2f2f5d20194aea3e453c81d83dd95420"
  },
  {
    "url": "assets/js/213.203c1e5a.js",
    "revision": "ed2c41decac3b66946de2b272bd03568"
  },
  {
    "url": "assets/js/214.3cf2d905.js",
    "revision": "f0334a0decd496ad8549ccedcb81f13f"
  },
  {
    "url": "assets/js/215.778859b1.js",
    "revision": "7f30ed8196c3dac10ad85cb79b184f91"
  },
  {
    "url": "assets/js/216.cfd32eb1.js",
    "revision": "65475116e5e4713921030e50b3a68e0d"
  },
  {
    "url": "assets/js/217.2b96f108.js",
    "revision": "a5229c452e662be9312b67121b0ffe8a"
  },
  {
    "url": "assets/js/218.bcd0e55e.js",
    "revision": "3dad59f4cb4b3de442d5e78f185a7fd4"
  },
  {
    "url": "assets/js/219.c4e759ad.js",
    "revision": "770ec67e12f41a1ea1ccf219002cd45c"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.2f224a9f.js",
    "revision": "a78fe8a4683efed1fc502ba0aeadec1f"
  },
  {
    "url": "assets/js/221.e7f8d9e0.js",
    "revision": "dbe83f31c51673e8131725e699db8d80"
  },
  {
    "url": "assets/js/222.582ee1aa.js",
    "revision": "d38578403885a9b5d7f9d88ddb729906"
  },
  {
    "url": "assets/js/223.3f11a1bc.js",
    "revision": "459b360645168789223b695aedd630dc"
  },
  {
    "url": "assets/js/224.aff5360a.js",
    "revision": "0a2d2ddaba0bdf7f6a28b3de1cf3344e"
  },
  {
    "url": "assets/js/225.3849f48e.js",
    "revision": "3a04eda194fe18be95700f00ff50be6d"
  },
  {
    "url": "assets/js/226.3b48d0e2.js",
    "revision": "4a35ffa79626a8eab3615c2757cb17bd"
  },
  {
    "url": "assets/js/227.04a29c11.js",
    "revision": "506b8771bcf0dbc6e446fcb0610ac776"
  },
  {
    "url": "assets/js/228.c7893c2d.js",
    "revision": "9aa66997c064f8addd1c763e10e6e488"
  },
  {
    "url": "assets/js/229.2d3fd67e.js",
    "revision": "ba0fc906ba5e7b2b612b40e272a2847e"
  },
  {
    "url": "assets/js/23.f959a716.js",
    "revision": "7e352f6bdfac297dfdab0280a53a0530"
  },
  {
    "url": "assets/js/230.63cd87f6.js",
    "revision": "139d29a0c53ff98e686385948ac2e3ec"
  },
  {
    "url": "assets/js/231.a683c487.js",
    "revision": "3e0631c57429b338128c1a854f543d8d"
  },
  {
    "url": "assets/js/232.71214281.js",
    "revision": "351006954908852cd52eb68dfd08460e"
  },
  {
    "url": "assets/js/233.fb0a5586.js",
    "revision": "097c9a8b6bfe9469fda976c481988cb3"
  },
  {
    "url": "assets/js/234.77b5f5e3.js",
    "revision": "6f542677e9d12118af22251e90f13cbb"
  },
  {
    "url": "assets/js/235.e8b09531.js",
    "revision": "25981a53f7de1025c4bc26d435e98b9b"
  },
  {
    "url": "assets/js/236.f94ace9d.js",
    "revision": "e9ea40ae4286fb1cbc7aeb972b1ca5a8"
  },
  {
    "url": "assets/js/237.dbe025f1.js",
    "revision": "a6d2a142ff2b9f564d20ebd7121c14b2"
  },
  {
    "url": "assets/js/238.eb5935cc.js",
    "revision": "b3329566868ae0b088e089965c665e21"
  },
  {
    "url": "assets/js/239.adfa1f41.js",
    "revision": "289708dbdafd9c33b0d29cd138d6e353"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.a1159d3b.js",
    "revision": "b6b3ffcfb9462d8630a19f788aa4bf36"
  },
  {
    "url": "assets/js/241.fef7be1e.js",
    "revision": "53bea356702c023d541f4ac1e08cade0"
  },
  {
    "url": "assets/js/242.c9bc7106.js",
    "revision": "1f8a8ef745abda42b3c6ffe37e533614"
  },
  {
    "url": "assets/js/243.b60fc95a.js",
    "revision": "4e58a35893ac6a2f47a74494777a0aa8"
  },
  {
    "url": "assets/js/244.74a009d9.js",
    "revision": "3bcd5683c6dd78df7d6ad9f99052360e"
  },
  {
    "url": "assets/js/245.c0ea39e0.js",
    "revision": "631a4c869cca8110ae31201523d1ce42"
  },
  {
    "url": "assets/js/246.2e64fe89.js",
    "revision": "a76b847ed7b54b5d0c1bd3e1961a10e0"
  },
  {
    "url": "assets/js/247.5047f756.js",
    "revision": "83a040cc100576051157a8c12cf8a372"
  },
  {
    "url": "assets/js/248.0c338081.js",
    "revision": "57690526b3826586a0460298f6567bbc"
  },
  {
    "url": "assets/js/249.98dc6014.js",
    "revision": "60c6481b086a546fc4b8fc06b6384a98"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.fc819101.js",
    "revision": "c5a9c6e532cd3b8624146c2f189b88b0"
  },
  {
    "url": "assets/js/251.2a817d9f.js",
    "revision": "3d2bea8c0f444e989b76331e1dfbd383"
  },
  {
    "url": "assets/js/252.a4e34519.js",
    "revision": "9baf96bebe7c3be560d1a42d28cd6eaf"
  },
  {
    "url": "assets/js/253.e35b0056.js",
    "revision": "53452922bee6bd16909b2df6850ac9ea"
  },
  {
    "url": "assets/js/254.6a15273f.js",
    "revision": "02eec1a778cc3c1d63ba8dde10cda638"
  },
  {
    "url": "assets/js/255.85a4018f.js",
    "revision": "7021772a90d0c08c209530b8bf722e12"
  },
  {
    "url": "assets/js/256.ee1e467b.js",
    "revision": "99a8fcc9969aa266af1ebaecea7dc764"
  },
  {
    "url": "assets/js/257.63e95fe4.js",
    "revision": "c61116142db5f28ef8496ec2b875854f"
  },
  {
    "url": "assets/js/258.25209ae3.js",
    "revision": "d2eb7ee7ce1efd8078a9bf5d963f7118"
  },
  {
    "url": "assets/js/259.c7fa7da4.js",
    "revision": "af594a0a3229b6a1fe139c8c350f5038"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.e7f2613d.js",
    "revision": "6130fc3dd5a96303a0c70b622f5fa313"
  },
  {
    "url": "assets/js/261.da6d2328.js",
    "revision": "649f716e83095afaef259c90a6ed4cdf"
  },
  {
    "url": "assets/js/262.d62ac4c0.js",
    "revision": "e1f718caf712900d24c6cb00b5270831"
  },
  {
    "url": "assets/js/263.7e555b8e.js",
    "revision": "f66c106fa95d444da9ed7714e4ce1d65"
  },
  {
    "url": "assets/js/264.5aac1251.js",
    "revision": "e34fc099f31f98b47840245b317846b6"
  },
  {
    "url": "assets/js/265.fcff7af9.js",
    "revision": "bde74449dfb191e4da7a4921b42fda3d"
  },
  {
    "url": "assets/js/266.34f11596.js",
    "revision": "50957ab844b765667dc07c4355e6f9ef"
  },
  {
    "url": "assets/js/267.7b14171d.js",
    "revision": "8dd13bfbbf0baf5d244363d68431506b"
  },
  {
    "url": "assets/js/268.2d6a8ca8.js",
    "revision": "6b25c4bb7bb98187d07344b5ed7a869a"
  },
  {
    "url": "assets/js/269.1e496d39.js",
    "revision": "3a56674c4c9047a3b3da7b2267f206fd"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.9b38d399.js",
    "revision": "41ef61b0e76bff0fdede12c39c3910d4"
  },
  {
    "url": "assets/js/271.e1cd7c58.js",
    "revision": "7539d08c267f03de978cac0df3473702"
  },
  {
    "url": "assets/js/272.9c5ac1b5.js",
    "revision": "bf8bb370ec4b5bf391f061ef0d34e47e"
  },
  {
    "url": "assets/js/273.5bb87d63.js",
    "revision": "4ba3b0bb223f8e8f0701ef17acc32c74"
  },
  {
    "url": "assets/js/274.661828b3.js",
    "revision": "dec4ebc16584479245b4b419697c4341"
  },
  {
    "url": "assets/js/275.0a58cc76.js",
    "revision": "8723cee2ec31a45bdcd1db1b0fbdd752"
  },
  {
    "url": "assets/js/276.9f2af03e.js",
    "revision": "aed79b1923f5007074461ca9c9407499"
  },
  {
    "url": "assets/js/277.da9592fd.js",
    "revision": "c894fee04fc9788e4651359aac9f066d"
  },
  {
    "url": "assets/js/278.11d1857e.js",
    "revision": "831197ab91154a54d059d666a3677d2b"
  },
  {
    "url": "assets/js/279.cf6c2da5.js",
    "revision": "cb69405a08e5088b42232f6f3fbb7573"
  },
  {
    "url": "assets/js/28.e480c418.js",
    "revision": "f4f9ce4f39cf52fbad8a7120637d0cff"
  },
  {
    "url": "assets/js/280.d4dc15e4.js",
    "revision": "f0010fac0a3b01327c97589956c571fa"
  },
  {
    "url": "assets/js/281.173f4292.js",
    "revision": "515320ecc4e09b1ef6dcfebe26aa7833"
  },
  {
    "url": "assets/js/282.4e653941.js",
    "revision": "e4018d9c5bbb2b0a2274cbcd763c639e"
  },
  {
    "url": "assets/js/283.ebfa376d.js",
    "revision": "9bd4a66d46683f2025fc0ca0978abdea"
  },
  {
    "url": "assets/js/284.957b1c56.js",
    "revision": "14dfd07430946ad3b845204a644b4b7f"
  },
  {
    "url": "assets/js/285.9388bc77.js",
    "revision": "511858879c877bc09951da773787eba1"
  },
  {
    "url": "assets/js/286.1a3225ba.js",
    "revision": "ad25e6875887534f9401fe7407872d71"
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
    "url": "assets/js/41.8c0f791a.js",
    "revision": "15f6dba477266e39d2e657725a0b58d9"
  },
  {
    "url": "assets/js/42.5975f351.js",
    "revision": "78fa37132da41344f368c1ff19e2ceae"
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
    "url": "assets/js/72.5197b6a7.js",
    "revision": "f31aa23a0a30e935acea7ec8460755ae"
  },
  {
    "url": "assets/js/73.2c6139f2.js",
    "revision": "969ba5840f379fc0a9bd3989190ae87d"
  },
  {
    "url": "assets/js/74.a37280e0.js",
    "revision": "2b34df40982ee7efb7f62f4f6c008e8d"
  },
  {
    "url": "assets/js/75.22e98855.js",
    "revision": "19fa422b7dc5bfe95dc68cf30865e7a9"
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
    "url": "assets/js/86.52e6fbd8.js",
    "revision": "ba3a3e7955e81bd6fd38f9bdf7429b89"
  },
  {
    "url": "assets/js/87.dabdb19a.js",
    "revision": "9434637a1a5c17ef4a8d3de03e140046"
  },
  {
    "url": "assets/js/88.e0eac106.js",
    "revision": "163643296f138097f596400e2120f91c"
  },
  {
    "url": "assets/js/89.fff27227.js",
    "revision": "ed4d2ad5a36c6988eca554a472a79663"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.3eb3e2df.js",
    "revision": "d642512cef5347349623bacbebdc6b95"
  },
  {
    "url": "assets/js/91.597b0fa8.js",
    "revision": "a77574748b7b3501800709e5a4eaa7a9"
  },
  {
    "url": "assets/js/92.f815e0eb.js",
    "revision": "6b4c5f07c8c7f108d9cb7f970c03ab33"
  },
  {
    "url": "assets/js/93.eeb5a00e.js",
    "revision": "b363e41c3ae47cac998178550f4ead9c"
  },
  {
    "url": "assets/js/94.e3455996.js",
    "revision": "8f87b06def901e47f7138d6fb08ea82f"
  },
  {
    "url": "assets/js/95.2a4e4a23.js",
    "revision": "7d57f66c3b63bee5762eaa5105872fee"
  },
  {
    "url": "assets/js/96.80279361.js",
    "revision": "2367ca60c56f6b9deee2f98ac630b4fe"
  },
  {
    "url": "assets/js/97.96b3faaa.js",
    "revision": "b0e6fc2e7b348a6806af57f57c0e6a8d"
  },
  {
    "url": "assets/js/98.f4a1357c.js",
    "revision": "903bba0d39a623baaa8a2fa814dac501"
  },
  {
    "url": "assets/js/99.df93ef3d.js",
    "revision": "224faa013a31c7ef599b2ddfffb5878f"
  },
  {
    "url": "assets/js/app.07d85b05.js",
    "revision": "a2ac5d7a020f2af241de85aeed3f0bb4"
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
    "revision": "d428a745d4d5e053b3e3c6cfc4af2e57"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "8de3b2c3dfcb1a54220815423a2a6750"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c1461f8d8a4ca6726b50bd05a271b466"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5768bca4bd1274ec717bdae4697f0c69"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "c6666549ff0021cfaad13e7a943a36bf"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "5844064ef35950e7e259817745319913"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a85e9151460cc16ee986751aef2b2bd2"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "144aa6cbf4c31fd59e400957578d105d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4dfe5ad8e08281828abf5912dfa0ef63"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "cae312b6ce7aaf3c900e7bf9ab5725dc"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "307ea1a59a4ff133eb5238ef3ecd6ba0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "f2a44c3f60221f40fc3bc287a9da1d93"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ffdc3c66e9a2d405f8a182b5ed589cdc"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "bc9cb5d520229c00edc51723951991ca"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f6ada99806f7128e27bbff2c689cad69"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "75fad915136710e39a97d31f149108cb"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "2952fb92114adcc4bfe2e06c98bb5281"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "731b009b4e27bd9f2bdef405260a5197"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "5ac30d803ecc415fe2576ccf7bac320a"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "4600d616d388e1ae27f4e8aed1a71b54"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "d7ae691d6fe3b6f1de0576bf30d35f33"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "c01237c5ec47299c944c73973040a9c5"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "c910f4c706d84f4e8c81cfa0e9cb1b07"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "3035b3dd0548d5e8cbc4b83d2f2c8ec2"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "aa118ce2aeeed725d55e7c8a4d1f8e79"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "e4eaed57127c1c8886bac95d12a69737"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "ba45d978052357dd4bfb419895dc9ff6"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "32b3d1efd794294ef8769959a7f245d5"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "cd486f9969943e3252effdebc440b18e"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "da4251672cd2b7bf20a5e2e89b5a7286"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "6873f89adbb620db1d76b468432da284"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b0becb4aed965a31bc68672b7c40912a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b0d8fb653b0ab8d6f99057c928f82a8a"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "c5bbb4f8a8b9417288b9b06486bf4aba"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "2554162ec595e4b421c8208232abe60e"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d8dd9736d1d2be03f355444393a6c892"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d3c4a448f2fcd67c87d310bb508a7867"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "239847386d387e95369e04a1123b15aa"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b535c6849a03aeac9806480c0b3310a6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "697bad290cda56b81220c032290ca11c"
  },
  {
    "url": "book/index.html",
    "revision": "9ab587a77dfc503766b82aef2df0bd00"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "83363ccd5b313fbd4d1c7e841b6f2e9c"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "f58c4c11c0a500893bde8aa20af1cedf"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "fbc7b1c137dc54b048f16cc94f512419"
  },
  {
    "url": "c/audio/index.html",
    "revision": "db8abe35a198276890a963c4d5be486c"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "8108117c263bfd8923bcf1706bdb707d"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "a755be51accb16ce27b8a0232a61eb1c"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "75f5da30edd04a67be614200b67c7dd1"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "1e42c746193854bcae1e162d1180876d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ea0effe0f700551ae5eacdf9c36e30ef"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "df8a15205a4acf0c4d3cbce9f6b95f3c"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f5acc22045509c98047ad5bbe2d47937"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "d38006675efad3f44cd7b4cffd677528"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "f6241fc6a803b974047d84d3ba82d495"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "4a24f653f3837fc9a27544b1ba7c5e0a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "b38f921e3b10ea1899c01570b913b658"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "5fee4e6a0015abd18ef13ca56de21656"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "f703d6e679560fde418aa502a9edee4f"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "b3d432c817ed8c75357be501924756ad"
  },
  {
    "url": "c/program/index.html",
    "revision": "078217fe1c0df3f7e9e4a61ae03aaea6"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "eee7b8caf224f2f2ce43c802965c80d4"
  },
  {
    "url": "categories/index.html",
    "revision": "8a872617f7da032863b65fce07f78d5b"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "5e84ea548f1cb4318655fafeb4ed543b"
  },
  {
    "url": "figma/index.html",
    "revision": "0b4b826e188c1c7faa03459d7dd5ed38"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "c82a5a71b44c990461fd131c42a3875c"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "63fcddd370ade19aa393a63878cdee71"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "ce3418c40f1e3b39c1ca7360fe38b388"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "7d71fc1326f1ddf6e4a2bf34c3a3da28"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "6de772f8ee840e61dab1cc5ea4a9c68f"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "d8051172ef2b7479ec7b1e7163858fd0"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "a0a68a6d82b2b76b579c71d105b9d4ec"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "71ecd1275912cb0b22f9bb2ec1de51f4"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "611b12e25276127842baebb0b677f8e2"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "354d69a12d82f5969cfb0f3e1520100b"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f9dd7ec58712d043ed4a135e3fbcd52d"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "29512c545d2ac202e2de2d5057abe055"
  },
  {
    "url": "flutter/index.html",
    "revision": "f5d09709ad97d86fd6e84e0b1542f230"
  },
  {
    "url": "flutter/point.html",
    "revision": "8b0a94e1209d1dcb7fb831ce419c4c06"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "33134962853b4c2711835252dc148b36"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "59a037c76499f94ad30ca984d9f5c882"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "66e6b290b8f2fd48567855ffa6808af1"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "95cd66556cc74d47fc31a0f7e173bfe8"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3889b1cf45e7da89ebb20f42482bf875"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "8ca31a90b692841bb5fb686acf7ec1ee"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "aa6041bba38298ac902a4c489134d4ca"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "3ae4f4da12b9b732e06f90274fdf27c8"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "af0e009c2009d7a77000fc4f9eaec3a5"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "ca2effa2b9dba19d300037863e5b01a5"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "0f07fb73e28efa8141065f6904890136"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "a88620a17a38ae4deeabfce5187da3d0"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "3e295947ac74d581f4604a3fb5f72dee"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c5b2b96db1c63c436093917394889796"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "b8e96988038d9dcc45804942970ddc10"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "4697078f406568baa5469fc0ba451d17"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "f74a566336d93111edd871d01d84376a"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "a612eec535c2d058df00639734fb4786"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "954902fd7fc57b59ad28cc69f56e3141"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "0465bfa948560dd862c86b73608dd299"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "463d318006320d67765232189c2deab5"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "504987770a4cb2f482e56b7f4f0f798d"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "211e325b94ca1ddf045a70665ca6bb6c"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "72319cdcfb8712af6ae65632f280ebae"
  },
  {
    "url": "haskell/index.html",
    "revision": "d2060c0ceb379ae14faf6561e5fc6168"
  },
  {
    "url": "index.html",
    "revision": "6e1d5d165abf6de4c391ef9516d46384"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "7ff732a286a6f486f79fe2c06a7bb02b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "76b6218f3656277e9f89887deda36870"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "4201f5b805b826f97fc253c6e9ddeeff"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "9064791c5b6f1788856c24d3e980424a"
  },
  {
    "url": "python/index.html",
    "revision": "90016b1af91df442a39012f3fa612540"
  },
  {
    "url": "python/python-ase.html",
    "revision": "3852b903f3c3f329d26b359e54397a1c"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "3e8777714e444793050ac4007e30dd7a"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "bf6608fde8b70bf519351f075bd9f851"
  },
  {
    "url": "python/python-file.html",
    "revision": "352ad8bf513bbef8fc5a6b2596f79c1e"
  },
  {
    "url": "python/python-function.html",
    "revision": "30c37510ff799f5cc85aa6be4c07e651"
  },
  {
    "url": "python/python-generator.html",
    "revision": "aec7d37aac5c599b7b4c7f6e105cb65e"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "63db82231e4b654b919545add422dcde"
  },
  {
    "url": "python/python-module.html",
    "revision": "d48b44488d2d5ee7721b8d354e30c682"
  },
  {
    "url": "python/python-string.html",
    "revision": "94414bdf0c0a1756204337b42d68716b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "5891382e319a0dd26e0eb149497bc32b"
  },
  {
    "url": "read/index.html",
    "revision": "4bcdab166681ac84a2f858b893194d96"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "cbb73c0963c4e7f4026554142c9eeba2"
  },
  {
    "url": "swift/better/available.html",
    "revision": "20d263ebf92dfecca7960ae153adf28a"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "64c05479e6635efb3c8f2c6934667942"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "95a3202137e6ec531f63135876e99fb6"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4933425fccf99037fd743afbb34180bb"
  },
  {
    "url": "swift/better/di.html",
    "revision": "c282c17e1db8c0a8f85c18b143ae0b5d"
  },
  {
    "url": "swift/better/index.html",
    "revision": "74c2470aecdc5511fbdf5fc7e255267b"
  },
  {
    "url": "swift/better/last.html",
    "revision": "38c15d8136d7fb5138495fbc88520e48"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "171a6b951bb448153c32862d426a5e21"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "df0507c0b4dfd9a44f81d5acd8f01015"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "ed8547e3969ba9365dfd39d0ba2db4e6"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "238e87c789503407850d5be662e003a7"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "dae1f1e075b2698864dcc3fd46027732"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "794baf3ef21cb1349ec7dff6e6e6e97b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ec1fc57fc5b1eed54e4a0fd726c1756c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ac9ead426cacfb4ba7be75fb77ce1ef4"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "72fa3545348ce03ba1026b1a4b476b84"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "3202fcb6d333bcc1886b57f3beeb6c14"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "926f9d126f37704cc36b32e6a210a987"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "8d86fce619eae5cafc7f730f3fc7bb51"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "53347ea1cafacad1d9d7137a63cc1d87"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "795849c3cbfb62f7666be9909bb92b9f"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "7536512dab29175e6daaf43a1fa1ad62"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "cd4885eef05e990cf650066d1118047b"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "e87fc39586772a92bcc920c20067d325"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "fb2ce64e0b3ec373cebab971bb175b51"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "518ed90dab0f6f8e1e3195d05c5c7767"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "fe044831c210b72f2e7e2a27048a37eb"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "2c34fb8f76ea69524923323bd7778147"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "2f4f1e6e32bc5c99f19a1a5547191e73"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "8f44f4666181fe3ccaef663e127b3e6c"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "101de7a139ef84c6f5cdf6b5f908ffc3"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "a2f35856d3d2d4addd25aaa17b447f7c"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "0d5fe89189a617ad2849b6d8e3ca0f14"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "744a930eca6ab2deaffa175cdcfef1ca"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "fb9cee38e7afcd583b50b5d085311ff4"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "ea03e97269d4891d9834f7594a6c5891"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ecfea4173c5947977b64e5d282d82996"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "3cfc589078746fceef4ba8b4c930b5ad"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "0146eb461272bd192f9f0e90dfa7c959"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "b1abba787b58fe0929de436fdf6a79a5"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b7359def41cd16c19d84e9fe044303dd"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "06b2fab594b2dc9fe69cb36b79b92e8e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "4435204b9c5efe38d71e1fa894c9c901"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "9d2c504c39dd88ec3d3644763c50c9d7"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "54eb6579233e770b18e0abbf407601ec"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "0138fba103e7c0f2fcd3a6ee327da230"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "82edfddc4c2da482e4bb3672a6a256fa"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "890b1090b5d22407a05427f1c8f1bf00"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "08f0d1061838ea2a57580f20da17e55e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "cd042e0356dde19b100b5c0996c685e6"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "2a47ff2708a40373a10ef8d82882fcc1"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "7ea641096da51ddf36e8d0f4d935db40"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "75b5030de3351a6e82672baf4a37d428"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "45bb571d60c0707fe3af221cf867c713"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "685110a16343cbd8a280740cca3e6532"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7c2a43f7c76e7f7ba94e82a999ce14d9"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "819890978bb3ce2bd66039e78d54ed74"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0ce6fadf0aaae2dabe001175674ace50"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "990635841f44fe36bbaf4f2f92cbe763"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "8c6aae4cbfd4db4c59294da9e2b30af4"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "5b9445fd3847d68d1aec968e48db7d81"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "9c561f91d0f5f5c0feaef37a4c8a72a3"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "1e560f0d06359add49ea587d54cb9026"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4d682bfadb258d7d7ccdb78741137c9c"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "194c40ca5365c207ce2a56cc3d485337"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2f2cac015d85067e6e76eb2acb063a1e"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "d6e3c96b855407982e3c565063cb341d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "60675f63b38d8738d623cba109ce7746"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f9289d2c8cf78b9d5ce1df15069dd30e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "dbb596f0fadb74ac460ce56394818fe5"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "4d4a843facac492b45b8c41d20c6e713"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c827fd7e7ff5a5e3efd1c1fe1f90d99d"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "39ba60777b4e2dc579040ce184d28ac6"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "3a40aca2991a8d4746fb2ff83161e27f"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "08fc5d41f9bc119df4784269a30891e9"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "0eb7edc3392980f7551b36f06391c01b"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "6f41e283bd599a7e099c0e662b2081b3"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "3a62c7bd003b3da689c7449e46607853"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "f0270c3acb4cd7b71cf06dbd900e43a5"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "7d7ad11d1157cf2e8bc6622a2f893322"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "0ebea682e863e4df30c2e8aa965b789d"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6eb31bcd4c5685bd5384911aafa1347c"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "303a18ce26faefa5948652be838d0651"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "263f42abd61ec9c23effa4b3d6352cbf"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d1e55b61bb10dd93d8779e85c0c5e23d"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "41de5fbb70d999a48f2b70e69b48b36d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "5bcac2190196b0a04dc79fe4ec5b7c1b"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "d7d13a2bbb512ffc09dd2770bc19bc68"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "49382c616d02e6afeb271321065b31d4"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "68a5f861a2b909908c8a4fdca53c7eda"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "5603cfe2e30cca354e3219ed8471d2ff"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "1a7d42c9b6fc53eca63b56ef542e2f51"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "a1d70f0da528745dc682673c5de160e2"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "3a35fa648e9a107c94b16ee4eb488b2a"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "5bc5ac6823b1eb98516fb294c8183b73"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "4fcdded0ec5cba9f82d22a7e3ecf38ec"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "616c0789664a9d54de607483343f0edd"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "9b586db0a582c1b1ec0dbe5d253fdac2"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "59349014dd189fb3008e442b83092a26"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7d9ece6a9fd948f4a12a5f19bf6fff5e"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "a43e0330c785cd20a6b6f841c883157b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "e6aa010f500a5d75269389292026763e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1ede28be3e64e16d242ea5318b61853e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f35612b9c347bd5f798940bfe9aa9459"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "b22598447da6abe50e7758b8c24a167f"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "93eec56d544ed5a0d3729be05988a05b"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "99d69cdfcfe5ed110bd52140db0c782f"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "78fdb5e7d16c826b7a96aa30dc7e8a92"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9cce765f716a4cab15454fc9cdb7a447"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "2959c5514edfd0140d4e1419722a1477"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "235b39e11e38e74064dd460757c513e0"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d4341f971ad0b0f95b21e849617fc208"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "792ee4365d1772fc13b5ff76b7dfa07b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "ff79380f36d8a20fcdd5ce4daceb0830"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "da614e9ef6030bcd836643c3c58b614b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "67b750028367122b458546627a579fe9"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3d63a8324425726b81cc1a87375d7477"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "934b5cbd62b53732046a3676b65ed919"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "c2ebd656a0f5ab214053b3e59cf38669"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b7504331628cde58115c85e55835c9c0"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6c0877961ef7b0495262433afbf2ead7"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "6de17d19eb6f0a37e5fc035798fe2a59"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "f888b177abfa018875152477d6ed804c"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e4e40a6ecae66bbb0d3e29f0be9cf713"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "4a05b0ef2b48005d6f9588316f6604ed"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "e4c712bfb97e4590af6eb8b4af35f536"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "3678401f691d95ac5cce38f848211c99"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "efbeef13a314a9d6704111f63a5057c3"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a3690cb1f4533ff5d80341331550c106"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "3cb80efc05459b5013483bc898450b0e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "b75266d5022b608f45e56931d9d18776"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "6fe6c636907ae399d3d309a929933e53"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "d373a005c184f02e410e8b5f65e87b6a"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e4496d5b988e0997b30d9a9f3df9c5c8"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "eb3b06c3f2a214c5e7463d763f98825b"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "bc6476d9425bfa86d2d9f40a15457367"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c790d8a90c33cd254d92fbabb92bb213"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "218d8f13e13bf1ae316a925211450a18"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b50b83df0ed1cc47dc16ea8d75de7c32"
  },
  {
    "url": "tag/github/index.html",
    "revision": "9d2641416af9c531affa6776efb44dbe"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b380e49d42c9f44db781e8428442cf39"
  },
  {
    "url": "tag/html/index.html",
    "revision": "00cd10ca5c939434ab7b096256baa702"
  },
  {
    "url": "tag/index.html",
    "revision": "cbf81cfc013fd37c21f5fb712d7a1f56"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "d30501b2331766d990788eff3b8320a6"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "ba010193a8cb126d82cf822888573f90"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "cc67cbd787974b7c94ee5a1884df7b95"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "a0046bf97018a0dbb580a7f3ceaacc8d"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9aa1594cc5315e2085d71d023bdb825d"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "4ef131852a5f9ace435803b7506516fe"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "15bd260cb546e7ee19a74e3b0fd283ab"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "cfd102b1cd4b7c2631a7f96b8a909730"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a81695cd31c2bd8f3db617d5e1fc44f4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "03cc8561af5bc23be7d29c353fd3380f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c10da68aaa70f6d0adfae7b428c40574"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "d3a3bb65d5dbe85a8178b68a34f8d5cd"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "f247fb3896ff916fcf9e255a77df62ee"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cd706b4be97972f2ae0eef876f38486c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "e5ee083895930fabe53bf237b1428690"
  },
  {
    "url": "tag/read/index.html",
    "revision": "54d8d074d983cf84a3543874303ad3bf"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "b481c63a816468dc776263610fcda42c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "028c3ab895cc7095ff8832bf9e2c6642"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1b4d76c97870b419a22d08f15ee9f6a4"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "cccf02c41dbe7b3d936ad1939873dc88"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "7654e8338fcaeae6107169d9e7b3f3d5"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "073de5b62c337ae6427139459a5d0a10"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ec069c9afe0a32ab98e765c8399d13e8"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "308790c64720e619133c5a70b5485113"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "ace85e4420725b7ddc424cab713384b2"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "d3ec2e807ecedb702b8776d719968fdc"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8baf245362eb2b52939b7bd0c72307cb"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "87adee19f55b4180bddc8af0b32c72e5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "a6c34e0965a8b86d22b0750efd7ed0a8"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "a99195de7e2d06f40a06157d7fa02cb3"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "c5c03ea96d9bd9b6a6e52b318bdb8027"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "5bc07cc292df047b28ca2e9f80a2be16"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "7cc9b446f928a93a6de6cb5e4e8e6866"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "bc9e53e596633c19a0cc7d1c8db107a1"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "ddaf09443290f1e948ac63e3a8847b48"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "9ce904410b660dbb5bb168bdae673a31"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "ca75228c94f60eb6973953cf7ac322e3"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "31e2436bb21b79aef9b8dbcd1d64a1a5"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "501a0a3cdc7e76af2a97e9eb12c57a90"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "0e552575cebec7c6a602d854e782b57e"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "02efa51891ead3241b04af1fc07292c1"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "5eafeed13164578cdd270040b243c2ed"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "c48347752368630c4771a54700e9c966"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "80bfb4ae5abf4a73d80eb888b5aff45c"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6dc14e5d46c6c6da490a72e49bbe0c4b"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "74689c725adbe8ebf8ea5df57f1794f6"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "8d3547fc47484d205c9ac2ed8e970430"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "41e9d2f24e54e0455660bda4726dd6ad"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "f545eb2675ac3e759850e2cf93a0b995"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "4579006d24e8947b2eb6b07938b1eac0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "9e399463e4a8ba65585733830f2a0cbc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "3a93c2c9801d368ecf3817dc40461d1f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b7a9fa7c85ad54e896bec708fda612ad"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "3d5a14d7e0d61dde26a76efb53f4f8e4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "1463883f36f86e9f04b25d83a499aca0"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "5134a18448c1639de63dc2b9530c3fe5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8160a312184db4d85165caf210b7709f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cb896f3e8774b7628a5d7137c991cf45"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "c2475c2b26b9c3ff0d5182615d0f2bb8"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "62f5fe211b42c24b5f6914685ebdb62b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1a9ebe23e46c45362af663e7c488d0e9"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bca360b656a68be6ad31706ec9945f4f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f93aeaf38ebf9a26636088dfaebad5f7"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "eb05697543edb230f86d35410a4daa51"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "aa93ca63c340e3735f8bb45879d63212"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "63a45c2da4bec9044dd91b111b7bd252"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "57a94e25bbe73e522e5649f7e2b0d830"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "4d3961844753a3685da76ab1dc34a85f"
  },
  {
    "url": "timeline/index.html",
    "revision": "22fe4a4fd7daabe5cd9b69e232cebaa3"
  },
  {
    "url": "tools/docsify.html",
    "revision": "8238a436ca8cdd2236363db95536047a"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "afc0b95e896b344da0bb4f68171ac87b"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "d3cba2c8433915d4bae15ea5ba6d4ea0"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "bfdd289823cf751e47f622ff114a1ab0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8c75bc3509ced8114956861b56f0d6e2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "917cf59a968d7ec7fd9913af30ccaa9c"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "5410d8cdfb55261fc6aa5d418155a315"
  },
  {
    "url": "tools/html/index.html",
    "revision": "db5fc4a2d2f74063eab194c1a667be3a"
  },
  {
    "url": "tools/note/index.html",
    "revision": "110204a2182d938c36e9e96d74b67dcf"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "7c9dea122e7793a1c03bd5cd4a4bb8e3"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d7374e0a91d6ea947fb04199b738b2b9"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e76867f5963950025d4b4498a9d3caef"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "b11845ab066fa9ab414d2e9a34edaf5c"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "9055bb33e1b3715a27299bca22146fc3"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d818ceee4719a2481ec1685838399fe4"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2ec12a9af5319c38e38a6c88d6047ba5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "dfb6b829a151378db0c7ead719aa0f33"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "997cdd18a7230f3dbc7d24315c0bbee6"
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
