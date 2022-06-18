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
    "revision": "94391b48466322302acd8f407a084ebe"
  },
  {
    "url": "about/app/index.html",
    "revision": "f89010303098ec461cfb9b34e01187c6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "2fc9eb0ee00d716f346e35820bb580d4"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "15a5d18f61fa7e046ce53df0fdedd0ed"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7c0a6d29909466ca078244fa6d5f9dd1"
  },
  {
    "url": "about/index/index.html",
    "revision": "4d6dc559f406fc17d154b6b0813d1861"
  },
  {
    "url": "ai/index.html",
    "revision": "99148f6f5112b0e44810d733db9297dd"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "339d4ab86760d7691f847a198ac04d4c"
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
    "url": "assets/js/112.d5751e89.js",
    "revision": "15a0592a6d09cbbc66775b1fc3b82a17"
  },
  {
    "url": "assets/js/113.a9b91fde.js",
    "revision": "2dacc20229fbe797caf6f3fce2e26a75"
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
    "url": "assets/js/121.b2c55296.js",
    "revision": "5048c35ad83b0078b169a61f7f5ce78e"
  },
  {
    "url": "assets/js/122.bb4f5349.js",
    "revision": "6213d63b94f341cbf6e2e70e3b7bec1f"
  },
  {
    "url": "assets/js/123.32f50a53.js",
    "revision": "9a8f5a9f929a1e2fe16fa650f86fb1c9"
  },
  {
    "url": "assets/js/124.95df7c86.js",
    "revision": "764309714340e65b7022a86d93594617"
  },
  {
    "url": "assets/js/125.5df024d2.js",
    "revision": "0da583ee51801dfd8c1f08bde83f7e5d"
  },
  {
    "url": "assets/js/126.166cc8bc.js",
    "revision": "5442bc7e4558e867e414c1013a5271eb"
  },
  {
    "url": "assets/js/127.16fd7f52.js",
    "revision": "98d9bf91d7762ed7899b6f3d99435802"
  },
  {
    "url": "assets/js/128.18ecf095.js",
    "revision": "b83ecd7d324ceedcaa373964ce51478b"
  },
  {
    "url": "assets/js/129.2e354cfd.js",
    "revision": "4614ff65042cde5c55cd6227b4e75196"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
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
    "url": "assets/js/133.d101ece5.js",
    "revision": "34e9d241faba3908b616f903c34953b8"
  },
  {
    "url": "assets/js/134.91473ad5.js",
    "revision": "1cb3f0fe8d67ca5b72ea12f7c3bffc66"
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
    "url": "assets/js/138.783c908c.js",
    "revision": "79cb437b221758af1937e8b6f280681c"
  },
  {
    "url": "assets/js/139.08084e95.js",
    "revision": "bdb713cc45ea8356d628f8db9d94fc89"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.3be97742.js",
    "revision": "332c282a0a933390192b7c80683ac675"
  },
  {
    "url": "assets/js/141.f5e9e214.js",
    "revision": "31604fff3ceb08096af75e2dec556687"
  },
  {
    "url": "assets/js/142.0e8b9a84.js",
    "revision": "2588285e1737ab4ae4f41d70e7940aeb"
  },
  {
    "url": "assets/js/143.9edc9f8d.js",
    "revision": "aa0f4edc16d4d4d7f3cbbe8da0f8777d"
  },
  {
    "url": "assets/js/144.2086410a.js",
    "revision": "63f95549723d431b4c644dc418d83174"
  },
  {
    "url": "assets/js/145.6eb21df3.js",
    "revision": "013bae221fdc6ceb4a76cf1caf43633b"
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
    "url": "assets/js/152.cbd4a8da.js",
    "revision": "03add02c6fbb113fea29810bda6f6566"
  },
  {
    "url": "assets/js/153.66a5cb47.js",
    "revision": "c189516d5185b3baa424e5256043c7a2"
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
    "url": "assets/js/188.91c4d91e.js",
    "revision": "deb3cab28653e8ad9defc29a72737c8e"
  },
  {
    "url": "assets/js/189.4951a438.js",
    "revision": "f334724690925af57d8437f427047764"
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
    "url": "assets/js/193.74f7c9dc.js",
    "revision": "20db76a757be7663721f5c8a9fdc9365"
  },
  {
    "url": "assets/js/194.99b99239.js",
    "revision": "fd701c45be92ea52a0463b344acd5148"
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
    "url": "assets/js/199.dd76b707.js",
    "revision": "2fa417af082cd83fd7d972d7ded939ab"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.25b0af91.js",
    "revision": "145c90e6acfa343a295d25a13a8cae27"
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
    "url": "assets/js/211.4969c24f.js",
    "revision": "03bc3a031aac3512b24c0e4853f37644"
  },
  {
    "url": "assets/js/212.206d7736.js",
    "revision": "677c89c006a5c503a71c90e01cb27c43"
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
    "url": "assets/js/230.4311ae23.js",
    "revision": "e6b3c28ebf67cace36efbb3dc0a4303c"
  },
  {
    "url": "assets/js/231.8b8892a7.js",
    "revision": "7bd1642ef78e5e2962cb999794063eae"
  },
  {
    "url": "assets/js/232.48aa9ee9.js",
    "revision": "c1e818c8d9436d71c915f22178b935ab"
  },
  {
    "url": "assets/js/233.c839a7ef.js",
    "revision": "eef063f07e84413770ca6f45df3db338"
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
    "url": "assets/js/239.ad3154f4.js",
    "revision": "70ae3f5dca2da7e2f92eefee097c13f1"
  },
  {
    "url": "assets/js/24.f87d574b.js",
    "revision": "70e366338a7591c9c02d8062713fa856"
  },
  {
    "url": "assets/js/240.07be432e.js",
    "revision": "3349e5522d7ac366e2b896567aa79e5b"
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
    "url": "assets/js/250.c53698ce.js",
    "revision": "8d9292e2ff40218ff6cf591dc9eefe2e"
  },
  {
    "url": "assets/js/251.2a817d9f.js",
    "revision": "3d2bea8c0f444e989b76331e1dfbd383"
  },
  {
    "url": "assets/js/252.f6af528f.js",
    "revision": "8d1b01c0dc79ef3a40e4f4b00af7b2e3"
  },
  {
    "url": "assets/js/253.6a905096.js",
    "revision": "fbbe57d99b1ea95bfe1d389685852d73"
  },
  {
    "url": "assets/js/254.56d424fb.js",
    "revision": "6332ee074bdcdba6e960804ac263db07"
  },
  {
    "url": "assets/js/255.40a975df.js",
    "revision": "f201e10d65401301ffee61941f191998"
  },
  {
    "url": "assets/js/256.da9f0994.js",
    "revision": "e798705f9cb5d5fe6d95fa7a60b58fd3"
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
    "url": "assets/js/261.0c123e4d.js",
    "revision": "bf4e69b4bc06ffb8ef9bf0e185dee607"
  },
  {
    "url": "assets/js/262.b0c14f9e.js",
    "revision": "2433d9f924f635e9a8f0f06ba54131f5"
  },
  {
    "url": "assets/js/263.d820a181.js",
    "revision": "aaa63cfe4f1106cb631b06a5e6de7da6"
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
    "url": "assets/js/272.00a93503.js",
    "revision": "5331792aaf19ece600451d49fa8858f2"
  },
  {
    "url": "assets/js/273.b1b31976.js",
    "revision": "c579e0c37405aa0cc63c6b76c49a05a6"
  },
  {
    "url": "assets/js/274.5ba191a7.js",
    "revision": "1c318a026f47fd8e8d6eb15a410e0ae2"
  },
  {
    "url": "assets/js/275.13cf9a06.js",
    "revision": "cedcf886dab240a3bcbcdcb2a5494e48"
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
    "url": "assets/js/280.005d0dc7.js",
    "revision": "ab0d1b660a1ec6df8967949dee3b8c85"
  },
  {
    "url": "assets/js/281.e2dd208d.js",
    "revision": "3fb66c8a18bab7f59c05a77ad4b9a42d"
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
    "url": "assets/js/65.4b9e3601.js",
    "revision": "86dc7d471d478bf3116f759663b5da60"
  },
  {
    "url": "assets/js/66.34826071.js",
    "revision": "63c91dfb28ddf695b31358e445f69c56"
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
    "url": "assets/js/78.a0d21839.js",
    "revision": "f78e0dcae984454ab5cbd18952fded20"
  },
  {
    "url": "assets/js/79.f2763289.js",
    "revision": "2e68f903fc39fabca9222ee8c257d277"
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
    "url": "assets/js/81.e0e15f37.js",
    "revision": "855fd5ab58814c710b483793faf6a350"
  },
  {
    "url": "assets/js/82.ab24a0e3.js",
    "revision": "4dca81eff8c69bafdd78b5de730f44d0"
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
    "url": "assets/js/87.dab6d190.js",
    "revision": "87ec35117d136b74fb850f1951297781"
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
    "url": "assets/js/app.6e5d84a4.js",
    "revision": "de80981f340fc92dfb1fbde03c0a40c2"
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
    "revision": "eacee2686b009da59750f58b263ca6a9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "7e93c5a00b5e41b898a587e3bd0759a2"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "eb17ea79fb5eb5e77fcf7073728beab7"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c8fe8e96b44f0ed166b7a538362a657a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "415db467e7ed6cc9060786b9e05584e2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "ecd9f04df1a105b7d9afee4f8a8190eb"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "ec9556333eb24ebb3af230286ff730d8"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "c71d78df628cc177e8d2a38d0f7e086e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "2c6ad4faf52066bdcaadebbeb6d049e5"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ce5158e71dd278f66e0759b905a3200c"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "4766f749fc50565694b2a570479d7002"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "67a0148e3bd53361624625f2cd211915"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "aa74134776710a75b91ebb5190553edd"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "26a44c6137e33c05772af1a23cc4fcfb"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0d77c0134acccb1884dd836f2be6dc6b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "9f1d0717b9a8cc268cebe1289d5de405"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "9b39711abd753d37201b3db66b92e355"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "b4d412329965faf7b261ddb21647d569"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "8329344cea4b2771f4f3a052e9f26a29"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f47bc1657d99cafef08364f26a96071b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "9a02e67bbeefacffe83c1f62046ef12b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "5f1c6b8f8d28daa5c9b166157163d1f4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "722598b9bba492595efa4cfc54de7fbb"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "6a9be4b4519becaa04dbf54ef8fd5949"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "cc9b3550a63b9508a9ee07ea337fc88e"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "bdcf7faca1eb5a2d1701c45e3dbce079"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "91a4f06038b537a57da012ac8fcf785b"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "2724ced48a528ac79d7e6da744d8025e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "f248fb3d13a8abbd06162e6042effc4d"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "73b37e6e645b6b412c4072bd30d83c15"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "1be88ef4811bceec3e92bacd0fcb8b4b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "4c694a1212b4d371af7909dea5a28442"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "50d289d5a8ff32b2d2737afd9aac0133"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "9b432610ee0b48dafbd4af6f63cd8675"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5d59319b6f6d15011eb0088994e07505"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "a9d1f5c3e311a311b4404f19661e1f3a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "a1a02f60e5ceb60f27e0f8f665236ccb"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "4c0231733dd42cc2154ade7e3a5fa692"
  },
  {
    "url": "basis/index/index.html",
    "revision": "b432e573fca5efcce3c3101c9a28bd8b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "6c45a6db2d125a899c90bf29f49b1003"
  },
  {
    "url": "book/index.html",
    "revision": "00432a86935b4cbd027a3f5d9fe5c2b0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e94e267c81c7782689d31bbb8383772f"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "515768f87b95aa3577d745d75bcbc5aa"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "de6eaead24ec9be2f09ddf1caa79a684"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e54879358e0467da08b89a7337d790d0"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "f15f30f679664dbc429a665600f96184"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "23ebc4fb1cf58daebc18a5e7397bf7ba"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "ad5ad9e7c8b8c0a43a823cf620776203"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "97d7e67f3623142397ace3c092e89efd"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "002a529b5dcac06a4d01161be26e85d0"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "8eb69a00168f896465a4445687be2b47"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "bfac36e767e3435d942b4f0f4c505238"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "044f66af7088b3632751caa5654b74ba"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "fb628d311bb4cf5226447360d1828ee3"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "609dbae7cd39128d32e1e12d8015fe0c"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "098e20b718df2c429b1bb46dca4e7cec"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "c6a3f9fdf69bae9582b6a6282c4706ac"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "99a11a91beb37945f2b6fbeb992ac648"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "2eaafc2fe38430425171f7165fb37e5b"
  },
  {
    "url": "c/program/index.html",
    "revision": "6f6a5c67645f01549938b26dbc7496ea"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "63502198bdd38972c043058686fd0ed9"
  },
  {
    "url": "categories/index.html",
    "revision": "0277d7ac1ab9ad39b749a199044655ce"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "358e7c02203c5e4b5445f2611495c1dc"
  },
  {
    "url": "figma/index.html",
    "revision": "c311b3baaf626a3350cad85b94ba193c"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "df0ee881906927e6d274d9c878d7675c"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "038ed7e57b57a84064db8809af8040a3"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "f27897ca1fc1e9c8bf53c74c67276486"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "a1602fbfba764a8351529f9f3338e72c"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "601e860719da38e91f626aada8f8031f"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "399632e960785e90cfe34472159888d8"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "cc0136de79804a3c6dd0d9281a1afdde"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "e6487e27c01f20704b99e7d1e636656c"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "44435d48328e5899cf7c77694be53094"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "878b4c198430b317e8f1e2721525afa8"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "861f68638cb9d2a59dfc4424c59a800e"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "6c83ad8072e790a1d6c0227e0e6e0d2c"
  },
  {
    "url": "flutter/index.html",
    "revision": "1fb830a5b505f8b9dfb7751a2c3e7e13"
  },
  {
    "url": "flutter/point.html",
    "revision": "5bc7a4009720eddc4d516f3c9fd96306"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "91ff331658b62f00987adb4e5d4ed4b6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "69513d35146104df2f0ca13b3b781376"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "aa515a4ad35ffc87969bb3f6781b1756"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "fc9bdaed2f7b0574b91ad71f25cef028"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a4166c94077dbcc14adfdd3ba9b62e73"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9ef4328a00ea2f53922981a82f5c7350"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "1abe7e4f34a41e6b6534210c88960aa4"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "08d4a5f468e31359be51d57dfbbbfae2"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "3e6f90c897190df7b006ee4e1785cf93"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "5461862876655f351812ebe52e22a9a2"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "543afcc78ca4432acdedd3d8b3b54a0f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "cf1a77b5b213e584fbc38fb98d5da4d1"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "28f2c0847728aa735edc413283de32ae"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f95c96211cca1cdc7e8b2afe6a24281e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "8e866601463326da4d2d2fdc53c18c8c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "6e7981602bef4b6fd9fd87a0d59722b1"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "85497de347b0479ac258242e5774e6ef"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "ec9a5620f598065ff2f36be424fb3e4d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "3119374968df172d05496bc0fbf6c5f7"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "1ca799cd7ab24df71f273570464a4fcf"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "cddd5ee82cd1c1fc07597ef1a9b5add8"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "3481bff011d436306e2d0041c10bb5ca"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8a7d0d6a26096b7b47df2f6a3785484f"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "7007b02f03a67901e177959ad37e3961"
  },
  {
    "url": "haskell/index.html",
    "revision": "44372da7b346be5d75354b42dbdceac7"
  },
  {
    "url": "index.html",
    "revision": "539c8afa74e6cd434d234702972e07be"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "b235ef9dc7e21748e5da03e44ef5e4cb"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "23d91286c930c00d06ea1f7db478d4c5"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "8be98a41935ce165b05894272979fb50"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "efc9a7950c6222a23063205699381855"
  },
  {
    "url": "python/index.html",
    "revision": "703e5e744636092c8a8c2e4f572acdce"
  },
  {
    "url": "python/python-ase.html",
    "revision": "8122c01e597d35c757bbc4f5b1f2f87d"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "743e6fa9e0e8e0531877da3b10ed77fe"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "89aa19761fada49ceeb5da07e90b483b"
  },
  {
    "url": "python/python-file.html",
    "revision": "70f12cbc98f832194b1d84e3a77f3f79"
  },
  {
    "url": "python/python-function.html",
    "revision": "9e4d23f201763405c0ad8e0f242a1e64"
  },
  {
    "url": "python/python-generator.html",
    "revision": "257b98108044f64f571c040c0e90d4a6"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "a4d1549a76b07ee58f9131f7d449ca56"
  },
  {
    "url": "python/python-module.html",
    "revision": "85f62064ef75c5a6697b49728f8d7d48"
  },
  {
    "url": "python/python-string.html",
    "revision": "260123cdb4f4ccc508a1f5974a42e049"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "15387a2bd5fef7919f3b355106ef467d"
  },
  {
    "url": "read/index.html",
    "revision": "f213263f52bd2d594396cfe5fac9faa4"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "263a59cd50f54bb591704f4790593061"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c197ecd64dcf4c8166ceebc24351569b"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "3a452c04bd479ac7a224fa99910d0848"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "1dc9ba338088d17bb196f868adc9c90e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "702bf126f51b3d10e5d59c04eb2d5ec4"
  },
  {
    "url": "swift/better/di.html",
    "revision": "1b6943b5e260279eb7f1d05d4fb6dcf1"
  },
  {
    "url": "swift/better/index.html",
    "revision": "9aa98984eef5657192e01ad080680d75"
  },
  {
    "url": "swift/better/last.html",
    "revision": "f7e50a2ff602e030c32be6f139219c36"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2b9830bce1ff45195a899e417d126275"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "1845ebdee32a7965a91dea7a2e1fb863"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "12203a6bb324fa7c0bd93586425a3e93"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "569480b440f9e5d32fde57495d06d111"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "2ecc0bd72c584ab0fee134d479fa8fed"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "18a907c1b5cfd999c7888f5ac4f78b39"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a9e89d7969e6774b4e229860384f91a3"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a1a82314c5115b993a4e81590188588d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "487c52bdb1162a314fd86307c92d3bf1"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "8b03cfe823e9eb6c810184937bb5d5fc"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "4dd411a4f74e19b7da8e2fa48e336863"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "b3eb49f512fcdd7771f768a4f7c543c4"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "59f6347639f31e82d9e5ed88c0183708"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "4fff594942f8b28c5b4042c2df41005c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "85f33695fafbeb2b5a2f8ab908075895"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "9956cef1b8578fe32cf7005cf4a18945"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "c0b378b04690194e4b1d3185f2b8e5e3"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "ea4d4edf068c2f7d63a4c9725c5d26a7"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "4966f91e3388e4c3b989da4ccac4c32f"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "df481a30456abcc21ba9cf00cd2d8cd1"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "831d10493f439f41e43aade0be2a5c5b"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "b2fcf689db6b60cc951ca99b25ebc0c1"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "6f3e268138cca1ae53847236f0226e9c"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "676bd1d73963316ea29e2116f3b59b2e"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "e2560f367d1dae84a280e3de9948161b"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "77260df9fb6d5e843aa8a319c8d36083"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "11f43eaf2d5af38b8f8778753ebc1cd0"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "9235e6ce1f7d243c4d2eb773876ce383"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "0213694b79ee60e0430931229c7ec2d5"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "f5ec7cef035c01e58dce463c8a4c25c3"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "efe36b9b82c28b90e3adc73c3dd2d660"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "cad98b56d98e050648c3c2ad5372de1a"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "f298c91be01644286fb6cbb6117cda66"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "e57e13eeeac37893b4e419b8c5a94278"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "de95eb221f133387fae331f2a8b3b7cd"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b981c1a392c328a847a7c80b666b2879"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "ecbf17862f3049b0b1fe59f5393fe98e"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "470b2756a304b7b0f90f1febe3f22708"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "a2e83e6d5c94b9517f8ae68d4d7ae5ce"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "662e01e2f03974b25fce574a316cfd88"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "29a5553b8686ddfe82e1525962506a9e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4260b7608948c4948018242f514a29b2"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "5e877bfb02db8595cf74880484474b80"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "35620c7e390fab2ea95d4f2365591a6b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "6751899afb9ca6012955c68f81464ed6"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "25feba3e5a5213796825f3a3bab2c919"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "746fea4465c4dab47806aa6868126536"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "198887f4ba0f4db64fb1ceb66f9363d8"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a463db49f91e6903af358e107d28555d"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "593e58ea2b8c1354e2ad3887dc24a05d"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "12b0cd81e67bbcaa6dc3f52351d58b3b"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "9936195ee385aaebe0a59e7ba2095245"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "433d0e05cc3a0a52e659ca73d1d5a199"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9703b149bf3d85e9da5c084fbe773253"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "0fdc3cb883a834d408effb13d4b15c66"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b3b96aebac064b8b4bd295b1ef4b3fdf"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "2f2c9e1e5fb307a8978967066587dca9"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "3c28b6dea3625d42bd510077e4351088"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b3f847678c4972d39e1d29ee04f57181"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "8d1f4d8ab9b5e8a46711619f6b3c2f35"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "1f59eeee7a16bb25416e8b481c3f9111"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "a9abc6d3315676ea36ecdbf7a388ab0e"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "5b439cb8c1552f7b8e6e8d53d9637321"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "9e7a9ec5c55ddd3fe8f2f92a181070cd"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c590c705f95399fc9c2e5c2b7328a6d6"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "64b2d456dc8aa4ea537e84c21f69772a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "014801a223badb3bc2d8e175af75e47a"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "e216fe625c93dc7250865be8e9b57a8d"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "94064c6af190937e917a88e1d9edf78d"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f28eb782a5ea3ff3ef6d19aa009e1536"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "ddcb986d09732d541bdcaf8aa6d83372"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "c80d85b189f68415ad2dd0b1c2d8864b"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "558bb4005a3ef59a5cb267e73f90663a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "bb585cc992a8a1c491455a8e6f2073ba"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "855c1441d8972e1fa6e5ad1f0dc8b30f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "9effc9b0af368b3486b053d8763eed37"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "6878544f7d206e121bb2679806bd3979"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "8ea91edc3bd4fa2c6ba3cc2a958d8cde"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8b98eaba3d1187994b774012060e0239"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "5f3f6c81f4b5cd9a5c4189ef95c1b7ac"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "a79c4ee519e5c649d598a3e951fa37b2"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "f74697ebed0ae6f9eb86e5085d68f672"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "cd9c9e5d051b46e68b53876034ec03e4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "ad94ef513dab57b77092a0d43a2aab83"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "c404d83475d5f2343361988a63fc7600"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "ad3b2b8911be425641e577d13c9a2df7"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "547d1e995e2b6cc10d04274da0463347"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "885a9c6615163d9f30b50837e9a63cf6"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "4251ce5abaa5278136a33ac71cbc87b4"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "ea7a65ee0192bd57fd70b7b959a4b88d"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "426e2c25b7e0ba7506bdbc8cbb450574"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9ef7f84b4df2a047f38a64808b555c1f"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "12d3ff47c073b2e6941a0a558de64e57"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6ecebd776c510fb848eb470f0e5a65c2"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "c7c6f6bc3fed89d2a898a705ac95219d"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "2a4c2f6e14541919819f63a24f4e3b01"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "7bbc9eac94156a5dfbc7318df4661b37"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "2991d7a9250ca0325717f532801178bd"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "7cba5c53704d471a22b068fce8fcdcb9"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "91223a1e43982b8613a9007b1c5155f2"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "8ecccebb6cd4b7979b26c3914595b3ed"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "9ae86294fe64529ce215b0a42ced3019"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "7ff8b30b0ae8572846bfb7fe32ec838c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d5564de899d408f41bc9ce37fbf2004e"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "b0f830a8664e9ea4f6b19ef7df87f785"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "3a25f975c18b8c2df550457df4f2fd86"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "fe529f894d7cfc7f45f8905bf6ce301f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "a38f05c5adaf85e5d6d1932ec5d9de6e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9f79a53bd9a46380ef6e0cf414d28706"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "629827b9102c788f0fc91fda557d4586"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0f2cc94ff5b05823de0cd7fb7339b19f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4795c595186b6d29e7a819e4d7a0918b"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "605aff2ee2f9b880e024fefd5d7aff5c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "2721a9772aef30d0a3bf6af2dde913d2"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d4cb840c68ca6e4b93e8ebfed4f869b4"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "907504417c23620287f8e43d1f8b0b6a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "2f419c77efec0e36de0b1bf454a1f4b3"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "f5d4ed13bd774a84f7905aaa1a89a1dd"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b36cb4e935695fc697cc773a32ec26af"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f2d1c9504c42cf424f3142793e8b5693"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "548a56f2265d11d44899f954894700ff"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "184e00e3b416593b093f8d306b11e31e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "8c5835fa04f582d46a5413d27e6e600e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "6253fc47422cc617d8b5f14151776c1b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "98f616bf6eacec09424a974f1987d6ea"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "b590a673b61ded181dc2119cd6ead3d3"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "595c23640a821c94d2dff4a357245974"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "94fd34214c15363e76572c2287df32a2"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "29d541900511b89feeffba1e2a102d79"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "71794ddef1eefd1fdd37dea60d7912e1"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "c1440482be7bf99fdaf164c091780caf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2510576142bef37a178d9799e362abb0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "40ba35ddd3f6057cf82e9eebcf9c538a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "5de7f768557f7e8753ae2d2142794605"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b53644feafc476db50c552c56dfe8190"
  },
  {
    "url": "tag/index.html",
    "revision": "0256d6c3ae41f164d57742f566848d20"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "76c2e7b860a042de4cfd45977c6b50c7"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "88460cbe69d3f79e5022df17f0a51f63"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c1d5fcf64db7ad8392c344e2204dcd4b"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "b1742d8c73513a531ad34a303529f349"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "c303a9ae8252e643740c727f1b44823d"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "be37932d63b3029fdb45602c7e022445"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7624e49416d4d9985e02d3d77f8ad6b7"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "5ff63e863daa61cc00a29b44b7f01621"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c432b9faff4d07718bd3328b00ab17a9"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "fb09315e06d5e94d0cc3eb628cd0ad4f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c2966a273a959f145321644290f66a3e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "fe4818046fbe6be21073a2fe7dbeecd9"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "4a7e3d04e83358ff2c8efd6fcfe3aa32"
  },
  {
    "url": "tag/python/index.html",
    "revision": "46cb1e82daff283e3c18f187fa7369d5"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "f4cbbca2fe9d40ef54d7bb5a03373b16"
  },
  {
    "url": "tag/read/index.html",
    "revision": "a0ef108b5ca3f7b593786ddaa73a60e6"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "acc25552a06bb59571f0969a15f73a8c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "dfbea818244ebd6ef7f4d91739c2a764"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "5cc93beddbbe5d6d92c2ec02c4583ac3"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "da7941693eda6086f1bc8ab6df387b12"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d8dc073d99710afa843c36eb530ee9fa"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "1097f5b397aa9226ed03ecf7d16576de"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "31c14a3de47f2d89d2de5d700b698499"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "f10678198e0dfdcf842ee4d739880d10"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "59c7061b3591083bcf9e4a87bf58c598"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3d9642e3d4f430582caa4bde1244c710"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b1c156215a086389aee07ece504ab2ac"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "624731865dc6b1b0422c7667a670fcd3"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b0c7fc5194a8a99c9ac409ddf5462eac"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "a6dc5e86ce19ca4b0f1e03d5150d6dc1"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4d7287220132b928743becbf9fbd00f6"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "ba1626f03f33198a676fbe5ffc4d6c04"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "fc88ab407a17f069ac632640e8e2a9a3"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "29c743b0f15a92b9cbcb1411dbe5bf8f"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "80221f0cf7996ef87b4e65495d9e21b4"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "32ed6dba06d6f7802d06b4f830a7932e"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "5447efe3b91f17bfa55d0476fc97fa83"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "454932136c7970a2afcbc040f1aa52a7"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "40aa51d1594d48de527b83cedc210d97"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "d343b94cc4d81391455de6518753dbe4"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "9af71df9f2facc3a4c08e64c3ed7e490"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "c242f62dadc84352b1e4269b3b2d4bc5"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "153a4ea037878dadb5a9468496050577"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "691f14339829ee7a52785ef276df6788"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "320cc5498870777c6bda4f1af9c0ef2d"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "dae331bb9d7a9f43090d0e0c51abd6ff"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "f5d4b6289800b490276140275c2dc489"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "eaaf39412632ed506f2f85e6556639cf"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "b37dee8406bd05e104057bedd181ac36"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "cf075186d101c99ba35b8a5c1a993bb0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f1c4fa7799afcf3125f513d0c8f9146a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "56abb2624d9e77850d5c998582c3c5b6"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4da385ec193cf03c008bcb390ce5f14e"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cf3368c3bdb4e406e5b921283b903c4d"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a06da2e7f456ca88d01060e0789b9581"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "ce9563d62c41ed4650eedf2906e0ee68"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "93c50205daa983f1c7c8701565132c55"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1d4549bc2bbb98d4f99c0d8dfc6de2a9"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "1d85e3b95e48a849f16fb9e8f720cb5b"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4cb978226d471a86c37289c86f89ef6a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "1644d8d7d20fc802902a795d13b65c61"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9696bc2af9afe5a531de1e77ffc5e349"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "3e36a2ee6969f0f7a41286a5d053b546"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b07b10d43e5fca384934599cd72dea9e"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5c19297830a86a8572f16ef47139b524"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "7b85d7e233d3849cfd49e792e0d0bf99"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "c572f11d7c26614a59f56c6754564f48"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "4607d6d120f383ab1a759e85b0326727"
  },
  {
    "url": "timeline/index.html",
    "revision": "d9e8c033f9df14b43473ebc9d0c29423"
  },
  {
    "url": "tools/docsify.html",
    "revision": "b35cd5b220e25f81bf345e7ef36e0fe0"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1bebbb5e28384966e6f8c62adbce5fe9"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "bae9e0700b2dd776288933f9ba0d05f9"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "c74a0f3a1c6e7c199900b5a7a20bd180"
  },
  {
    "url": "tools/git/index.html",
    "revision": "83b2284b694a20883656a67f11bc227d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "98fa43acc350b150556ec5cdc06a80f8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7ea8bfc7256d1bf7a41a7f5031c4cdf0"
  },
  {
    "url": "tools/html/index.html",
    "revision": "98691ab2e0d63060e01b3449bc17a5e5"
  },
  {
    "url": "tools/note/index.html",
    "revision": "9c6bae1340cb68a324745da37994320c"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "6f04f94c45bb1a25002d5ff2650c0005"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "01e531feea72a40489bad3b31d5f4e6f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "e216f8e9355d6018cc6dcd041a9cb530"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "c879aeb2e47b81acee238392f4e21cf2"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "f8598a1a4d57d58084b9dc97540d2a31"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "417a256d73b6b186473982bb1c8c1b1e"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "f551ba757f1ce98aa84461792a754bd4"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "c14bb56593c694110add0d49ce066440"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e29eb07a63ed9e3aecba98ff81fa1ede"
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
