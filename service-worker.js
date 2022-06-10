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
    "revision": "92dd21e0f141c5d1648961609c659ec6"
  },
  {
    "url": "about/app/index.html",
    "revision": "abdd259b2962f3b93625c4e86db525f1"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8b99ef04a366b1780a213c45d24113ad"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0f050e472015f1b0fcef911c0d6efca6"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "521eaa0a10298cfb8b1f396e0048bd85"
  },
  {
    "url": "about/index/index.html",
    "revision": "450f0a9a6640586e58c363f8e8ae4d05"
  },
  {
    "url": "ai/index.html",
    "revision": "aa4e1193973ea90b03bd0202de6f640b"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4d641d9e9c6fbeee6b01173d53a69b1f"
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
    "url": "assets/js/10.d6209aad.js",
    "revision": "47d9d733199f989825ca80cbddd27bf6"
  },
  {
    "url": "assets/js/100.2a49ef33.js",
    "revision": "2c08033dcc192d13d8b421102f9ba6c1"
  },
  {
    "url": "assets/js/101.69414c1a.js",
    "revision": "3a28c052e8e64c646eefc3839b2ed1f3"
  },
  {
    "url": "assets/js/102.6edd1b7a.js",
    "revision": "635d7ac09464315b6011615919aac4a6"
  },
  {
    "url": "assets/js/103.6735b53d.js",
    "revision": "1fe53da4224b645c3abd75e7672e1e35"
  },
  {
    "url": "assets/js/104.5bfeae51.js",
    "revision": "d1d313d266d92474d6452c2bdfde3541"
  },
  {
    "url": "assets/js/105.da56dbc3.js",
    "revision": "d26c2188875ca9ee5abf7ecc60681042"
  },
  {
    "url": "assets/js/106.bbfbb08d.js",
    "revision": "b28aaed156afdad8c5b3c26504f453f6"
  },
  {
    "url": "assets/js/107.c46a631d.js",
    "revision": "022962cbea6f906e0f8fb90a1deac0f1"
  },
  {
    "url": "assets/js/108.da126522.js",
    "revision": "bda7a94c0a133b6c83cbb709f4845977"
  },
  {
    "url": "assets/js/109.20feea97.js",
    "revision": "bad0ce7dd9b8b2e686fc841e79ca2f61"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.d18fa080.js",
    "revision": "46a60f1c11bef017672a7fc98f0502ef"
  },
  {
    "url": "assets/js/111.44b0509c.js",
    "revision": "9efe4bc7e29fd769c5331e5de2133520"
  },
  {
    "url": "assets/js/112.d30a5c41.js",
    "revision": "e06d9992a36c8b7dcbaed731ee3d737c"
  },
  {
    "url": "assets/js/113.aa4a5b97.js",
    "revision": "3b0d793b1ed12833b969b87c08b532cc"
  },
  {
    "url": "assets/js/114.e3142688.js",
    "revision": "48eb08e76a24a463f62e69ac8d245f4d"
  },
  {
    "url": "assets/js/115.5f9bf4a4.js",
    "revision": "6e78cacc6c682c060c50761f0696bcfd"
  },
  {
    "url": "assets/js/116.7afb3329.js",
    "revision": "bf5f51f70ffea299892af823e74d56d2"
  },
  {
    "url": "assets/js/117.706e02d0.js",
    "revision": "3e63157c0428c7493fe77218a835ff29"
  },
  {
    "url": "assets/js/118.62e73024.js",
    "revision": "cac3c5558a9595e9c5019ad214d269af"
  },
  {
    "url": "assets/js/119.912c85b1.js",
    "revision": "dc596e0cc522b439eb29969fba30be15"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.f36d624d.js",
    "revision": "247ac6b1f9a914b59cf1a5ce47ecc6e6"
  },
  {
    "url": "assets/js/121.64a047b8.js",
    "revision": "2833a2cf1a5c8f87d6474a1f98640de2"
  },
  {
    "url": "assets/js/122.feb1cac9.js",
    "revision": "b22c4fde8b0c9d3b3aaf1abc04eb6d42"
  },
  {
    "url": "assets/js/123.cb73da20.js",
    "revision": "ed0b340d98cf5cb373027e1529461eb4"
  },
  {
    "url": "assets/js/124.5ed99d50.js",
    "revision": "62d419d72675a3c71c819cd5bd1b28c7"
  },
  {
    "url": "assets/js/125.f0e75fce.js",
    "revision": "2d658235715a627dde41d9af6ccb49d8"
  },
  {
    "url": "assets/js/126.55fe268b.js",
    "revision": "a2fd32b6c32d29bc812fdbab109b81ba"
  },
  {
    "url": "assets/js/127.4c31429c.js",
    "revision": "021db2a24b1c93953a8c7f47999fd2d2"
  },
  {
    "url": "assets/js/128.7daa171e.js",
    "revision": "24e8caf7d657e4e890d859b11e3f84f2"
  },
  {
    "url": "assets/js/129.27c71f5e.js",
    "revision": "9edba3e3dea313c98ee17a0ee7443eda"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.54e13fe9.js",
    "revision": "921b6bcfe39f36d8b5d09be88cdb38e9"
  },
  {
    "url": "assets/js/131.35c16cc6.js",
    "revision": "9064f88b07ea0c392e7d3a8ee0904a2b"
  },
  {
    "url": "assets/js/132.ce5e15b2.js",
    "revision": "93a221a32121e7031c71c420ee515d93"
  },
  {
    "url": "assets/js/133.840ee180.js",
    "revision": "c61dad3171c49f84aa49d8c6c298c730"
  },
  {
    "url": "assets/js/134.44c3663a.js",
    "revision": "d9cabfd0b19e489068cfe36a00c73a8f"
  },
  {
    "url": "assets/js/135.629d7ee9.js",
    "revision": "0a3c46e55006ad5998ad518144dc4869"
  },
  {
    "url": "assets/js/136.98558bbf.js",
    "revision": "b64b1186cb87f9a4f54c84af96454688"
  },
  {
    "url": "assets/js/137.6389a5f1.js",
    "revision": "ceb84d050ba054ff0296ae70d86d68ce"
  },
  {
    "url": "assets/js/138.aa540733.js",
    "revision": "a428edfcf2002dfc9873889098e8e301"
  },
  {
    "url": "assets/js/139.390fe53c.js",
    "revision": "67b0e20e2c8ada1444262366ff8c023a"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.bd9c0d1e.js",
    "revision": "d8f1e7b74114c21345697a0e13f19a90"
  },
  {
    "url": "assets/js/141.869108e1.js",
    "revision": "b608438f6aea6b410c2f45d5c6805483"
  },
  {
    "url": "assets/js/142.f5be4874.js",
    "revision": "4212768ecaea02be5594b3e5c3244a9e"
  },
  {
    "url": "assets/js/143.29064fd4.js",
    "revision": "64098ad664db3ba9be9c75eb58d6ab26"
  },
  {
    "url": "assets/js/144.e6245cf2.js",
    "revision": "7d2ae711c347d6a87a8cded2049d705f"
  },
  {
    "url": "assets/js/145.aa8a6327.js",
    "revision": "4dcb0ad63952f4b9213860eec6a033a7"
  },
  {
    "url": "assets/js/146.714b3634.js",
    "revision": "5bc9965b106853808b8197ef0d57d172"
  },
  {
    "url": "assets/js/147.d0171213.js",
    "revision": "7264fde5297f81390880fc66de12c3e6"
  },
  {
    "url": "assets/js/148.897efd53.js",
    "revision": "e6a8b0fa94fd998f77c5dfd28b245858"
  },
  {
    "url": "assets/js/149.c612fd56.js",
    "revision": "a55f17ef599b04c99ac119fd4cddd8d2"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.88c58e5b.js",
    "revision": "ce2482075f90f32fc9dc495fdae4d742"
  },
  {
    "url": "assets/js/151.b4d5d283.js",
    "revision": "23ca97241fce8abf50ae5cb050abd912"
  },
  {
    "url": "assets/js/152.0884f0a7.js",
    "revision": "ed617efeef628ec07b714fdd6c645a37"
  },
  {
    "url": "assets/js/153.be8ad8c9.js",
    "revision": "3d9518c9b0d95e2dd0375fc7b9313227"
  },
  {
    "url": "assets/js/154.55a30f0f.js",
    "revision": "22dba033973e0a92a360b32dff0c79fb"
  },
  {
    "url": "assets/js/155.1d8e636b.js",
    "revision": "cba5352b1a4f2fe639690de7635a92a8"
  },
  {
    "url": "assets/js/156.05a17766.js",
    "revision": "f24dd4b7c40aa6056fdd2ac5117171b1"
  },
  {
    "url": "assets/js/157.bb9c83ba.js",
    "revision": "954ec5f0eac30a3580044b8c42a81bd6"
  },
  {
    "url": "assets/js/158.037a4a1b.js",
    "revision": "ddf2d59c630ba893879b5da03f74f828"
  },
  {
    "url": "assets/js/159.9e5ddd1b.js",
    "revision": "c0279eea803f368405be35eb2cfa3b23"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.61082d39.js",
    "revision": "5b299e57fdfc1a54670ef50c46368eda"
  },
  {
    "url": "assets/js/161.986e587b.js",
    "revision": "f86004b4f94912dc821233f59f38054e"
  },
  {
    "url": "assets/js/162.82a5c279.js",
    "revision": "422cb18557da32e170ec84f17e7d2883"
  },
  {
    "url": "assets/js/163.a0fe7b6a.js",
    "revision": "a478bf1bb706fcac40decfbefb3b5b5b"
  },
  {
    "url": "assets/js/164.1cb0d357.js",
    "revision": "7ff9639b9b0747522f565ac96d374a3f"
  },
  {
    "url": "assets/js/165.1ee80e45.js",
    "revision": "382132caa613c4dd190aca69eaa24b47"
  },
  {
    "url": "assets/js/166.8f75f953.js",
    "revision": "abe94a01364717d3ad151d02a274d06a"
  },
  {
    "url": "assets/js/167.4781670c.js",
    "revision": "4c4cea603da48db608a8075f80a6ed8e"
  },
  {
    "url": "assets/js/168.a8ad81ab.js",
    "revision": "2ab4be297caef5d03034e78f9c3b3a49"
  },
  {
    "url": "assets/js/169.d2dcfc59.js",
    "revision": "1315235a109af4e9d748751c6c0a2c70"
  },
  {
    "url": "assets/js/17.1a43dfeb.js",
    "revision": "ec5e69f869425f1b5b1a4ad1b5301f57"
  },
  {
    "url": "assets/js/170.55be36a2.js",
    "revision": "d824ac349fae206111223832079c6659"
  },
  {
    "url": "assets/js/171.1704254a.js",
    "revision": "319fe92ec949820cbda7d7aac7a79746"
  },
  {
    "url": "assets/js/172.d52dee63.js",
    "revision": "de2613c1cb917c330d6e9d0d72d6fef1"
  },
  {
    "url": "assets/js/173.1f731468.js",
    "revision": "8683f0eb97141a15f5650024f4c4473d"
  },
  {
    "url": "assets/js/174.8ab6f62d.js",
    "revision": "6cf517df10fe45c0927dec4b7d8da6dd"
  },
  {
    "url": "assets/js/175.848bd0ee.js",
    "revision": "5633692df3b13c86de0f0f9538dd34f9"
  },
  {
    "url": "assets/js/176.e5ae73d7.js",
    "revision": "672f4320b57070f4ddb793846ca285b8"
  },
  {
    "url": "assets/js/177.3fb7ace8.js",
    "revision": "055f69e6a8d6e9494746af321f3d0e29"
  },
  {
    "url": "assets/js/178.b5ad835e.js",
    "revision": "adfb2c3ce0a04af0a0adb138129b654f"
  },
  {
    "url": "assets/js/179.53eca1a8.js",
    "revision": "6bd391fc2781372d1f7f9dd89e4fd8c9"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.748b4dd2.js",
    "revision": "a5d2553e9f994b0cffbe641c493f46ed"
  },
  {
    "url": "assets/js/181.0b11aac0.js",
    "revision": "567d75d13d99b7db6e56aa58d0bdb7f1"
  },
  {
    "url": "assets/js/182.de05e62a.js",
    "revision": "3f74745b9f53ec6a9aa7602fc127bc04"
  },
  {
    "url": "assets/js/183.0e88d8e3.js",
    "revision": "f36ffb096b87445a99813c30b916d331"
  },
  {
    "url": "assets/js/184.24cd7021.js",
    "revision": "ea6d8e7f7afa70e4ff2889d758730e99"
  },
  {
    "url": "assets/js/185.457593c5.js",
    "revision": "7cb2218bd2e5188ea37a1117e60b599c"
  },
  {
    "url": "assets/js/186.ef7a308f.js",
    "revision": "4a2f0a532d70c3fed3ae25431e27dbf3"
  },
  {
    "url": "assets/js/187.003db690.js",
    "revision": "58157d1119987f8884567e1fe8c516de"
  },
  {
    "url": "assets/js/188.842ef031.js",
    "revision": "a33d844450f79412161ea3d29ccfb84a"
  },
  {
    "url": "assets/js/189.ad853092.js",
    "revision": "cb0b1a4a0f568036d4038a02ce12703e"
  },
  {
    "url": "assets/js/19.8d8240c7.js",
    "revision": "ab1df5d06628026886a7459dcf0de9ad"
  },
  {
    "url": "assets/js/190.367cc2c4.js",
    "revision": "cfb9b2d9dfe64f54ce1b4e5a9bbedd24"
  },
  {
    "url": "assets/js/191.d4f3ba62.js",
    "revision": "e9dfc6e3fe46ee5fefc64f9adbfdfd76"
  },
  {
    "url": "assets/js/192.50579df9.js",
    "revision": "0d845fa0960e780fffed474d5a2ee337"
  },
  {
    "url": "assets/js/193.ba72c4ec.js",
    "revision": "1f4db7849fef3a72552405adce88b9fa"
  },
  {
    "url": "assets/js/194.7dff8484.js",
    "revision": "193fc08d0c61b47b31257b4ab928d0d9"
  },
  {
    "url": "assets/js/195.9ef732b5.js",
    "revision": "04d3763c62e7b8c382716a09f913a0b7"
  },
  {
    "url": "assets/js/196.ebace87a.js",
    "revision": "e2181da035103f8aff91f6682b2d84cc"
  },
  {
    "url": "assets/js/197.38d369da.js",
    "revision": "b4ac5d37129f5d43992b7bc583cd08d3"
  },
  {
    "url": "assets/js/198.2c4cc3c9.js",
    "revision": "1c95e4ecf0e409665e0562c04ee91a93"
  },
  {
    "url": "assets/js/199.f62616e2.js",
    "revision": "553de2cc760170ffe719e87cf2a828d7"
  },
  {
    "url": "assets/js/20.00657ad8.js",
    "revision": "27cae195d254fb4841ce352fbc0331c5"
  },
  {
    "url": "assets/js/200.5739a141.js",
    "revision": "98e1727c0886475a482cacbdbcf327eb"
  },
  {
    "url": "assets/js/201.6b244b24.js",
    "revision": "39d1876d816878be33e12402a538d6c6"
  },
  {
    "url": "assets/js/202.68ed6f82.js",
    "revision": "2b0bfe7d6a18e793bee54a214d53ed04"
  },
  {
    "url": "assets/js/203.387544f3.js",
    "revision": "1107b7d96ba1935b75b1f57c702d38de"
  },
  {
    "url": "assets/js/204.6f181a38.js",
    "revision": "1ab3b4205c18c484136f70e8a69a1114"
  },
  {
    "url": "assets/js/205.684bcbc3.js",
    "revision": "b6e398f3bdc721b2ec6f4d11d226f408"
  },
  {
    "url": "assets/js/206.e6a0465f.js",
    "revision": "4d66cb8a2e5c79f13c937d2487419d42"
  },
  {
    "url": "assets/js/207.e1af24fb.js",
    "revision": "9daac09a28a4e37872b2ac343598c228"
  },
  {
    "url": "assets/js/208.7c8e96b8.js",
    "revision": "590a98faac38e30b237e6c0da19d55ee"
  },
  {
    "url": "assets/js/209.ae3d1b5c.js",
    "revision": "4981bcb2f2e202c3cab9d3e14940b843"
  },
  {
    "url": "assets/js/21.27856a10.js",
    "revision": "6799964d5bd5498c69c8b042802780c6"
  },
  {
    "url": "assets/js/210.bc2b5ed0.js",
    "revision": "6aac948b13fba81b570dd94c987472c7"
  },
  {
    "url": "assets/js/211.ada3b60f.js",
    "revision": "7401a27ec22abfbac8ddb4bc54d5590a"
  },
  {
    "url": "assets/js/212.0342e569.js",
    "revision": "31612576a023538cc80efa8866988d43"
  },
  {
    "url": "assets/js/213.14069183.js",
    "revision": "0d3adc8cf9a1e0d741b0a464cb809fd7"
  },
  {
    "url": "assets/js/214.f3ab7a58.js",
    "revision": "8ec3d5d416b8742c1309a5e68df67c0c"
  },
  {
    "url": "assets/js/215.a7dacdd8.js",
    "revision": "c71202e3a5738e9cbaeb89df7a7848ff"
  },
  {
    "url": "assets/js/216.bf4744d4.js",
    "revision": "fcd5cb6d5daf4e875e8fbe41bbc0d673"
  },
  {
    "url": "assets/js/217.79da6c16.js",
    "revision": "cfd6fa2dd05088c69235095509c2533c"
  },
  {
    "url": "assets/js/218.ec7eb09c.js",
    "revision": "5430c7abd7622705509e1bb4c84c4e7f"
  },
  {
    "url": "assets/js/219.c4c0ed83.js",
    "revision": "e11e19ca6ba789bb12d8cda32d3c6c70"
  },
  {
    "url": "assets/js/22.83e90bfa.js",
    "revision": "337004a045a219a4aa4f1d143e0ff022"
  },
  {
    "url": "assets/js/220.d1edade1.js",
    "revision": "a34a785818ef15466cf49ea250a8b9bc"
  },
  {
    "url": "assets/js/221.59cdd56e.js",
    "revision": "98bdb014172875cfe809d437b26925e8"
  },
  {
    "url": "assets/js/222.9d5d4c2f.js",
    "revision": "a4c5fe770137ee55fdfbc756ab81add9"
  },
  {
    "url": "assets/js/223.9d8df84d.js",
    "revision": "d83b33a6e05dd0fe0c6309fad404b8e0"
  },
  {
    "url": "assets/js/224.18d1a6c7.js",
    "revision": "7f2acc07b7b03fb73878b77ad936e51a"
  },
  {
    "url": "assets/js/225.8f960d28.js",
    "revision": "4c0d7ad9047969d5e697320dd7dcb2ee"
  },
  {
    "url": "assets/js/226.e9c05621.js",
    "revision": "4ef497f0bdae3b2a03c20d2ab47b79d7"
  },
  {
    "url": "assets/js/227.9a0baa4b.js",
    "revision": "e8f9cb7b3000926d67db0d921c7b4499"
  },
  {
    "url": "assets/js/228.311b8c8f.js",
    "revision": "5363d829bcd5e3b9cfdba5777d3b4006"
  },
  {
    "url": "assets/js/229.6f2b83e0.js",
    "revision": "1a9550ff06cb0ec693add2da80ed1f7d"
  },
  {
    "url": "assets/js/23.c7b97841.js",
    "revision": "ff5ed05eafa8a5c539f6af08e9b2bced"
  },
  {
    "url": "assets/js/230.b1b24f4c.js",
    "revision": "af0e1e262d79e220c8daa5d8aa4042ef"
  },
  {
    "url": "assets/js/231.6c4677bc.js",
    "revision": "9815231ba9855b5cc59f97c6a8e768ae"
  },
  {
    "url": "assets/js/232.0f5d4179.js",
    "revision": "e09c11fd1d8e41d8a31e40fd8a4adc8a"
  },
  {
    "url": "assets/js/233.b6a7c0bc.js",
    "revision": "5a6568f156e42b46894add2235f91f9c"
  },
  {
    "url": "assets/js/234.e1d2d90f.js",
    "revision": "3dda34dedf2b2a0cf01d2557631775ce"
  },
  {
    "url": "assets/js/235.3fdcfee1.js",
    "revision": "2e8bcd8369b4fe21e8f987841dec57f9"
  },
  {
    "url": "assets/js/236.d70b46a5.js",
    "revision": "a763d455b3bba313d689392029f7504c"
  },
  {
    "url": "assets/js/237.ffbbff77.js",
    "revision": "02b91e2546b58068f4803170bcd4e6a3"
  },
  {
    "url": "assets/js/238.fa5676b7.js",
    "revision": "db92592de501a2c2746b2b593428c87e"
  },
  {
    "url": "assets/js/239.b12a9fa9.js",
    "revision": "fc5b9ce4641d227bca66e622e74fedab"
  },
  {
    "url": "assets/js/24.c6bb06c3.js",
    "revision": "d4d94de30b70a82c4d5c901a40d7e9b9"
  },
  {
    "url": "assets/js/240.55251149.js",
    "revision": "e1ad5b344f18ef9a9eeacc8640a81b21"
  },
  {
    "url": "assets/js/241.4ce3e46b.js",
    "revision": "a290376ebd6b427227d0bd9498b7b588"
  },
  {
    "url": "assets/js/242.b9de64ee.js",
    "revision": "e3225f3bc6fe4607c49e3abf5eee3908"
  },
  {
    "url": "assets/js/243.e181ac59.js",
    "revision": "1023c68dc28f08f5c7aa2a61a55f96c2"
  },
  {
    "url": "assets/js/244.0f569d11.js",
    "revision": "03b19b1ad5d1e43492ae3476e7f217b0"
  },
  {
    "url": "assets/js/245.36e4c8a2.js",
    "revision": "53a03896fdfae12c117d0fc72c496751"
  },
  {
    "url": "assets/js/246.3cf8a530.js",
    "revision": "db47fbd7d100fff07dfea27218d48c74"
  },
  {
    "url": "assets/js/247.ec8dea7a.js",
    "revision": "5bbebc6601b2046a869ea698453f627f"
  },
  {
    "url": "assets/js/248.a764157e.js",
    "revision": "4f67cecfb48c6e29e09ce69a4d6f734e"
  },
  {
    "url": "assets/js/249.c9444127.js",
    "revision": "1f0c2faec28595634f0db67400c10a0b"
  },
  {
    "url": "assets/js/25.902005f8.js",
    "revision": "63d8d6a85756e6514365a0e824e4d4cc"
  },
  {
    "url": "assets/js/250.521d75b8.js",
    "revision": "16a688bc4fe756a481327adf44917eb8"
  },
  {
    "url": "assets/js/251.0c51e1de.js",
    "revision": "bf52a067699b63b008f8ebc6e48abdb5"
  },
  {
    "url": "assets/js/252.8883bd12.js",
    "revision": "f3659b4f52221d43d1300dc9f03fa1ae"
  },
  {
    "url": "assets/js/253.af248852.js",
    "revision": "952690fe3b2a820b61ee66ef0f035000"
  },
  {
    "url": "assets/js/254.5a40efb6.js",
    "revision": "b4ce6f957b0197cbf21f08e6f5a92549"
  },
  {
    "url": "assets/js/255.80637cc5.js",
    "revision": "bdd7af470eb2004b02035c010c8cf105"
  },
  {
    "url": "assets/js/256.bc2bb22f.js",
    "revision": "08e5e010ef31a1412b7a7104d35e2d3b"
  },
  {
    "url": "assets/js/257.b914f1a1.js",
    "revision": "6d23e7b796d035fb67ac7260c51edd0f"
  },
  {
    "url": "assets/js/258.93f710f8.js",
    "revision": "0cecf32bb19fd1a2f7536ffc336f19a3"
  },
  {
    "url": "assets/js/259.e4007980.js",
    "revision": "4f83720c51c2b11d5921e8a78d44379e"
  },
  {
    "url": "assets/js/26.b21d4b13.js",
    "revision": "117f42b2e4285954b11aed91da6c8ddd"
  },
  {
    "url": "assets/js/260.515c2d0a.js",
    "revision": "6ad2ab4594e9ee4d62a139a3a4a15949"
  },
  {
    "url": "assets/js/261.bfce26f6.js",
    "revision": "7f7d1a020242a661ce40312d99cce3d7"
  },
  {
    "url": "assets/js/262.8ddeaf6a.js",
    "revision": "90c435d5b1e038b6756819355889d98c"
  },
  {
    "url": "assets/js/263.7afd0358.js",
    "revision": "1491f0dae6cf4d230c1329c6d41d1828"
  },
  {
    "url": "assets/js/264.5d5ee2f7.js",
    "revision": "eda73ba76b5bf59d90ae5bc57507a311"
  },
  {
    "url": "assets/js/265.0cdf5b72.js",
    "revision": "e9e0e6d32c890b839b09487676b079d4"
  },
  {
    "url": "assets/js/266.97ff79bb.js",
    "revision": "51dea48b65b61daef1dfd9107919a8df"
  },
  {
    "url": "assets/js/267.32fb9811.js",
    "revision": "c95fe0605d0c5d018029dd2d82abe498"
  },
  {
    "url": "assets/js/268.1f2b3145.js",
    "revision": "b314fca924a356a8886f191cf54ded5b"
  },
  {
    "url": "assets/js/269.bc7c550a.js",
    "revision": "1ea62a0a8a5f81fdb69e27914f0e767a"
  },
  {
    "url": "assets/js/27.68da506e.js",
    "revision": "23300cd77c2feae545eaa2601384c214"
  },
  {
    "url": "assets/js/270.dcd9a6d3.js",
    "revision": "303423d6828b41d9117ebd11fdf5459b"
  },
  {
    "url": "assets/js/271.b110daeb.js",
    "revision": "f3c6e9d34b75658fe9242d549e641d96"
  },
  {
    "url": "assets/js/272.77f59cbb.js",
    "revision": "146036590446e5d023ac42b646abb1df"
  },
  {
    "url": "assets/js/273.10f8005c.js",
    "revision": "2bcfa99ba85dc0c955c2978f258ae071"
  },
  {
    "url": "assets/js/274.7778f97a.js",
    "revision": "028cea56d75593f24a71e08ff35701b8"
  },
  {
    "url": "assets/js/275.f7b4aff3.js",
    "revision": "39c7108d6f6096f0c1eb962e2b6aa3d8"
  },
  {
    "url": "assets/js/276.11472701.js",
    "revision": "d8fa00d9d226300560ffd70f6ce2deff"
  },
  {
    "url": "assets/js/277.e5b59a8e.js",
    "revision": "8682244a976de553bf6b587b10078c0a"
  },
  {
    "url": "assets/js/278.ebddbc9b.js",
    "revision": "a98f57834f8957ca40f60c40dab72812"
  },
  {
    "url": "assets/js/279.d8b1ea8e.js",
    "revision": "f6270eef06ef12af74c85342731af70a"
  },
  {
    "url": "assets/js/28.9ce211da.js",
    "revision": "948b428866895b9f5c9f159933761680"
  },
  {
    "url": "assets/js/280.d5c5ca72.js",
    "revision": "25ac37b5994a9381246d245c3703e8bc"
  },
  {
    "url": "assets/js/29.1d1e7653.js",
    "revision": "be3aec80b21cd5478c4270ee7b584f35"
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
    "url": "assets/js/33.8074ec1f.js",
    "revision": "3aeced4634c6cdc4e00d355b622e22db"
  },
  {
    "url": "assets/js/34.968d76fd.js",
    "revision": "cebc6eb02ca954b11a8d88c1f199bc7c"
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
    "url": "assets/js/87.5edbb87d.js",
    "revision": "1339ea9dee911aa42f6e15673c234241"
  },
  {
    "url": "assets/js/88.355151dc.js",
    "revision": "5c32211309e764d070ed050bea022cde"
  },
  {
    "url": "assets/js/89.1eacb133.js",
    "revision": "4f7a9c45bed2b0766b7d4a85d0a45e53"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.ebc27913.js",
    "revision": "cef28ba437ac22d2f970e5fe28e51ebe"
  },
  {
    "url": "assets/js/91.c4c9a941.js",
    "revision": "230197abf212ab7e1806acf877cad060"
  },
  {
    "url": "assets/js/92.93322bba.js",
    "revision": "459cd99abff79db78befa1a7e406e678"
  },
  {
    "url": "assets/js/93.8173a8b7.js",
    "revision": "5783992ea520b50f82cbbd94f3ceca86"
  },
  {
    "url": "assets/js/94.6e9d37f1.js",
    "revision": "f4b69c30ace777d821e2b2e82ac09f9c"
  },
  {
    "url": "assets/js/95.96328453.js",
    "revision": "7184589bd2e903649b7896e24a360a00"
  },
  {
    "url": "assets/js/96.eb6a402c.js",
    "revision": "9a9db06f9dfbe07886ba2cf96d1061bb"
  },
  {
    "url": "assets/js/97.113fb2c0.js",
    "revision": "ab02f9f37d69147b0b067ec3ba67b5ad"
  },
  {
    "url": "assets/js/98.c7e3bddb.js",
    "revision": "889a27b97ac9fdf45079688ed2483e73"
  },
  {
    "url": "assets/js/99.91929f5d.js",
    "revision": "dadb13e3157fb6a602a6cecf128756b1"
  },
  {
    "url": "assets/js/app.e1cf961b.js",
    "revision": "7920808f27ae3762c258000f59c23049"
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
    "revision": "0f18f41ee515d8ba107540e7f3c0d476"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "43859cc0b09de4273e9f6fc058bee3d1"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "09b64e183e449ac04f87fcb25dde3ee5"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "3309b9e9d072ca5f6b006459915482a1"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "2012eb3a9c6a1276db3a6a069b41deb0"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7199d23f708f6bcb612fd692d6c75452"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "6ad411d4ec08509eaf392f1efc920d71"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5a5e00d9b1fbd150212da22cc9f91cdc"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ca6796c49c4bd714ad48bd95d02befc3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "d44dcf2036a2c90a0e53a33e86c51a22"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ed991c9f20a3d76fcc1486782e18f6ca"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "cba65b4db1c5e3243c5c59b80cf5e7ca"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "d7e4f08866d9bb24da2e78f6ddec402b"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "12ed683d2463dcde7589a8b962415a92"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "4109d589a0ec69aebf94ac5319b3fee5"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "a74a8724f95e17554ff77e0d28be97c1"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "4b84d573ff4e2f904f7f9d2d2f691f2d"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "5f7f0e106b1de4e1b4a6ec1fc4491aa6"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e6581f417b3cf93d6ca84f4861a851d7"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "41e2ffec432951e5e616ae85f1363d5b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "33c4fb3b9e36eae278d71b7fd7e68b88"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "808685b96958a55204a3df16efa58434"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "53cdad61eceb8b90cd1632d001aae7d6"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c1f897976726597218435959f275559a"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "e61c83740b3c4bc5ed05c3f639ce547c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "93ad59a6bb6688784598208ee10a4ac2"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "6f4612e978563447ec5c5006e11d7594"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "63c636581c47ca0f1a3034c683ddf5a8"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b07d889893d185e88aa5ae39e00f2fbf"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "0bb68066d32e19f4a64eb5b10627f7b4"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "7a02a3a974da4890dc880117e732a48d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "f780e8a7bbd0e8fefef0d9e2f0249edf"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "c9bbe6b1eceb82e71dc20f8e7917ba47"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "5e88db9ff7250d395afbd0a3cc005cc7"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "4bd6a6e84df6f555a935f3755563ead3"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "a49f660c364c114f09fc7f2628902dd1"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "ce270786a5455f15082858b21622b181"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "621084e4b298b4659e06096dcb06a8c8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8433f8029e4873f87e2d18c09abbe4dd"
  },
  {
    "url": "basis/os/index.html",
    "revision": "97f9ea20a23098108776df529cb03135"
  },
  {
    "url": "book/index.html",
    "revision": "cfeacfcc7435e8094c64d761df968aca"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "fa8e2ec86e09f55889fa66cb8ce74ded"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "07895d45fa1423ea54e52257b6f23f43"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "3fa8ed79f5b84b8ba724404f064eac7f"
  },
  {
    "url": "c/audio/index.html",
    "revision": "ae66640ae1fa2c769f317bd3635a4303"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "2278aab41249aa154d07579c46aa6763"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "8955cfba7bdc6dfa6dc560dc452c4bff"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "2b374f4d37d387ee36139b48311d31e6"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ba57fcc4e5f6496f874ffd92d0a91cd5"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "32814e9458fcea50e22a96b002d5f582"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "5ce0135c0f7dc462d124fcd23c64f793"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "62aed7d7fa8686438bb5c9df874e04a8"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "d5630f920e01de681cf7dd445a3509b9"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "98a5fa058c4b36741cb1b81df1d61def"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "6470a4ae28952972ff4a06df81f50396"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "772972cef6bc0b330dd1d07a66afbdf0"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "43393024cae996b9e50726c06c095829"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7e16d68f3308d2b0dcc81489eae7d3a0"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "fc453f6c03bd6545aa857de26289c4eb"
  },
  {
    "url": "c/program/index.html",
    "revision": "c5a7a5b81c5792476caa135abe355579"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "5149d0ee1722c575b31e9568115a416b"
  },
  {
    "url": "categories/index.html",
    "revision": "e2e33ad8c1b0b6c310e08f48c7013df6"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "0c8a497970828a376cd0cd1065e5ee23"
  },
  {
    "url": "figma/index.html",
    "revision": "5406dd1c9ec64a7c908eb150dbc5c2af"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "bdabe437988de06d4ae033b8d71d0dfc"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "34db3a85562279e8e57a793aeea6fd99"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "455b85f1148e56f1466d51cd97bb81ed"
  },
  {
    "url": "flutter/flutter-screenshoot.html",
    "revision": "b212e4fc04199ba38abcfab5f46c1b9e"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "2b4fd50ab6e7386e9f0ea2eac667f33c"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "3c51392ca03fb06120d6319ca979dc90"
  },
  {
    "url": "flutter/index.html",
    "revision": "10f8d4ed502c94f95dade1ff53feebaf"
  },
  {
    "url": "flutter/point.html",
    "revision": "0d5ba41284061b3a029c17fda5521475"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "43c80f526016a8c6374137493daba3d6"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "a5913f7655160e476a32b39f0eaee3a7"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "189d5ea47fd4f627cf375e4bbffd1840"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9bfca523378e3ebbb98659c000e0631d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "396c40cff9c29d7a0aa75494a90f13f3"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "bc64f7a827ea4e0c96633aa520b2d24f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "8d8c3b8df658a45f5d2c59134de63670"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "837ae3c6157d7dd296e001682a056ef7"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "698fb072728ff047d6273bd2be1df4ef"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "aa78a8b0043a3732819c1f7373692af3"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "b37f5f9b4b0c2efa7391fe1c464ebc6b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "cbdb696c35a179c9a91bff640ed272f9"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "718e52019eeda863a225188788d26f1f"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f70f554bd88d854280daf4b10b4c3f25"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "d6f753b1d6e3fe1eff5793331a30fb41"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "dc1cc4adea3985b2a2749e642bdd9ab1"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "4c5bf8223a0bce1fe8e37c78f5905065"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "7ae3f1e5efbb19f1c3e2b569b797e724"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "ae16fbb5b2fe84b0522c59648cacbb3a"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "a73563d979198441c0813061b9163c70"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "fc14799bb76132f411bf32b71a3c6891"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "1c48298cd79c228c7901c0bb64eff1f9"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "c662f22f77689545fe4bf45bba661e23"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "f91f107b0aa45ca052eafa2231f28091"
  },
  {
    "url": "haskell/index.html",
    "revision": "14ad77662c19ed35f3be02da81225fed"
  },
  {
    "url": "index.html",
    "revision": "6da0bf532ca95d2f349a760d6a3c393b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "4ffc4daa9238cf1d261620d67e5a5821"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "41e895f60bd42374839ff60b25398005"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f794a5102bd9198bf94eb597d846844d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "9cbd1b274a35986a285533e11c0f8a05"
  },
  {
    "url": "python/index.html",
    "revision": "17bda84a1469ac7bfdabd3415f1f1969"
  },
  {
    "url": "python/python-ase.html",
    "revision": "323ee534c5930ab16f16cc35ea472b7f"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "fb7c828ed7f059ee48f71cf87ca615a0"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "d3d4e49232727f6e1d98b037a32eff90"
  },
  {
    "url": "python/python-file.html",
    "revision": "0782e13a8e432a2b58be473981710326"
  },
  {
    "url": "python/python-function.html",
    "revision": "2104e0c28de9764a310ceb89e57c960a"
  },
  {
    "url": "python/python-generator.html",
    "revision": "1af5a2bf262e9ad710675156924fbc3a"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "39d0fd15b1422548c7278475db6ec36a"
  },
  {
    "url": "python/python-module.html",
    "revision": "f6b3aa13d94132e9c7fbb44d04d18796"
  },
  {
    "url": "python/python-string.html",
    "revision": "60a30f4bd2a884a9098e3934c4b67fad"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "fa2aedb464955a2eb1ea1831b8d6cb5b"
  },
  {
    "url": "read/index.html",
    "revision": "0b075ee08904b55932b2be4a176f23c2"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "de234d83516eb328fd3a0041b92b6e68"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4d30479b90b0f2cf563a82d4387900b0"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "a16cfbbee4cf602b32273c10fd2608e9"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "c3db1d3c12602ad3d2f44b3fad2874f5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "43363203460b01c42a1d21f7504229db"
  },
  {
    "url": "swift/better/di.html",
    "revision": "a14e75e48e86b815d5cd95c69298e679"
  },
  {
    "url": "swift/better/index.html",
    "revision": "2d58cd09976249bc812067fc711315ac"
  },
  {
    "url": "swift/better/last.html",
    "revision": "8d2e65c8f3b4ff940e5699849ba4c09c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "797ea0b95e50f8ae0515562a01528237"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "52b69480b945878424e65c5bbf5612bd"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "ce7f2ed6b73190205737ee661ba15710"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "8aa16a49976205805652812e8f104076"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d22c5c51d2c00eadc548c49a01e75ab7"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a41919613e3f2ed069143910cbba3d9d"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "ca27f7ae582a553422a447fa48a21b8d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "af4c540746fdf823d091ce48c435f90e"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "843d87f78a5d52df609674afcc941063"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "95c4af4c21e0837a64991faf1a9561bf"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "a3272960df7d3b8e905a17c5be8e48cb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ca29a49fc3c15cac97020cc1b929a28e"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "5c02f4d75791ff704d785699f0f1dfd1"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "03ceae797da293082d96ec4dc6e006f3"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "48eb205b5a6f9cc722ab50cdaecdfb94"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "33ced90358a36f7fd531ca3040a539e8"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "23b3bd5b1630f8ec895c20b46f6446f2"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "c26af8d6759e8e70999c1bae64bcb970"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "793ef36601f16d9295386bb6529c7356"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "7b0107a0e0f79aeb25f835c565b92a2d"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "b543d14996fe6ba038494df8c9b6c58c"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "034a593df6946e811d549c98c7a59e57"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "ca550d84446f20efb47db129429cc154"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "faf1412b7366680f15bada8f00196c8f"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "ed8e2b7ecd2e43ab4f07294f1b4eb057"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "9884042acc11cf95797052de5873f9ca"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "81e360ce078be599d9a25e392d72686b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "4c40fab439edc3612b4a525c546ed391"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "1fa21e9c9d485b6fc71449563798af47"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "888deccea3851fa436741459078b663b"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "09dc0178e92b0f287c7a8097581491c2"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "58ffc565dae4750eba3b1b8039e5d063"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "231026ee893571c63d2657eaf69a2f0b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "638676224f9a7d702e8483b06a0e6827"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "4588e2bc88b80a835ea092d2928e912c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "f55c8d4a95b457c9c04a46fe490035d6"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "372ffc326dc279ee583cbf5553108e6d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "ab04fcc6fe1495368d56ead02cde4033"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "0ef2b1a8c984fde22e0de5a339fb48ab"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "3804fb6594afb58ef704040aced4bfc4"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "3354ea3b7481a10cd8965b9f9e3bbe27"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "4cc8277b2d6677e02db5e2b76c9e3d69"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "79a4bec3c7b0e5a365f8bb586fe33796"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "eb61988e1427789da8108e05090106ac"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "1d2471e6eaef41c87df5a086dee1c73a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "074053a6a5f6af26801a85ac1f043382"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "c93fd5dedb0bdfa2303ddb2ffc05d3e0"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "0452de4b138e7b1315f0173e3a907447"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "236de6cae72a8403d3e5810f2de43c70"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "02f60515170daa186fd72c159a5fe67c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "df87a4e002f2ac876c611190d35981d3"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "f91e1dcecd60f0256630e678b12c7e87"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "9f28863c93003ccfab402fcd2800df76"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "67e8784f75de6b77364ce017dc71aa24"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "94e0c611a8f358693fa2669b05b5bb40"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "b2a1e34d8e7c8366ebe6abb0d465a9a7"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6b355b7785960f4871d2fc268c794780"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "dae88f36f93000a70320d66c95a3224d"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "1d9991d5b66026d0700d67007b158e79"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "ea5a4c6ca38165b9786747a0e4c62ef9"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "38b5701e627c897c8a5f778f363ed31b"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "bae9d2d0a19ad79232b2a37b9952bdeb"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7b4fc582961603cf7c2be89e3fa7d34e"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "8a26a82680e2b9cd422d2a7c7d189f12"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "d32708dcaf49710b7fe3823c4f118f9a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "7efdc362f5e5859d1dbf3d695e9bc958"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "327ff374728939f275d23230cd48ec28"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "4f0238aeaf848cb20c9f5e26d39e3e30"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "fe6c5748f49f0040711b4ca770ce9d75"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "ea2b237fdc7c8f10bcf6270c8d77f198"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a7cdc6cd326fdc2119dad4b4396165f4"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "0973164dec987ea952f696cd7656845e"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "ac636fa153f0b6e93fc902cda53e0673"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "d8d78d4692a0b8f00f684400bdc27b1a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "2669ba0039f3437eedc7ab963679e8cc"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "99dc93d8ef151d94c232f29ea6c59d02"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d70ee711f01f3c2ace193caef254e796"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b8ef30dd8a3402f7698815edf1c06ab6"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5ddd307287c130e1bb68666114cbf99e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "9657346f4474d50eae6d8215290c7f74"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "facc40d888ab2a5aa3131039cbf71d5a"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "e4d470d89ab739c714366d5c76558eb3"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "77dc77a11f75765b69fac76ee4a06b42"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "1bbfe7ba3e5b6b922802e62ec11b1e5b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "52f696019bf2dc0321920bee532f6f84"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "3fded634f53f4dc48681071804ae2e43"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "3ee25e4f42dbcea251731f193a5344ce"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "7e4c23c3f1c67047748dbfb0bdb1e1ce"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "0a979052d9d0c03e264bef874f08cd69"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "f0f64f7e82af213ae54e0e984dd7b08f"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "349dfad1bfba34a948da2f4d194fd783"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "7a12278137f0e35d825ca4442ec95050"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "fc40ac0d369d38e237939f4924812d10"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "139988b3a9bb740c7f31e5cb238947a0"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "84aad8c33e29d0b7d7ed1e6948db4381"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7da1416e59ba120a78b738e36eb8cc53"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "3ada8a652f8fe580b0869afaece242ea"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "dae21a184d94429ae3e8fde90ca6acda"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "5554e45dec20311c4c190aaf31da716e"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "48279f8ab60c9e95cc5148cd467549af"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "cfb385ef347d38b8753dca15096a7c1c"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "baf209588a566d4f61b14f06c1f7fbf0"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "39e0f94e07f904844e94492be9b30800"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "c15ddae05d8435cfc697a2045f25d25b"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "8c04ebfc8f79d94b11938b338655cfd0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c7f7132340cbc720514cc19626cefa24"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "930643ccbaa339d81cddceaa2d3d1ff5"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d7f0668bc751b6017b79c0122e8c61fe"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5851a7e97e970b286924067e6cc39c02"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2c3428a70a7bef8905c365894c3b26c6"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "9d3d66243cee5a68384675a623c5a2dd"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ed9cf21a417753be53a2eafce3a5e033"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "4ca2c6c19e7a453366915767beb0f2a6"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "fb4132282ed594340e603a6c784297cb"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e64d8b44b4105d43ef9073c9c2a93342"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "14395eecce01b57abc58a46e39176a8a"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "bc4062071f93424cd49b6ab6c48620ed"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "715d7b0008a7722959321e228e177d5c"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "0021fae162b10edf3a41d26d3c7217c5"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "7e3b74f737868f44c28c94753062059d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "821f28de49f3fae167b2f9f7cc72c5d5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1b3a76fd010dc4dcd83d3457bd6663db"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d355df9b5a1c7b0913d80509aaf41ead"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d5feef781b07689258424625b50e62fe"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "e02da8153af83f922e227b2f44791eec"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "28d40780c1208c659e936e46db49dcc6"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "a282ae1bede9afeb27ffb52b9213bec1"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ad0356f548569d54a1432a70a1b91513"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0eed0c399d7120f8d4b193e36dce8056"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c696e82ded7a632bc8f38d5cf533fd87"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4d71c2e4219992463193648d7a09688e"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b0c3969651c90d93a83e76e3f8de9fe2"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "c13fbe2fbcfc72e6b19d7705fb2d5e92"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f1c7572402612d835ee85e1c8d56d629"
  },
  {
    "url": "tag/index.html",
    "revision": "26a45708e634e61e3cf63c2301d3f351"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "203efc460ab518d5ab77580a5cd216b7"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "8175fb93de7ab566819c45566dc440c0"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "607383aa7c5f5711c7032bd7cf6c150c"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "05e056f574bfc80c12dd41d852bc323e"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "7b5ca070170a9e4537a59a6ebdea4894"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "383a13a5b4c41308722def63d5c6562e"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "01e541fc8f019cfd7e8ec341340d4eed"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a565020b49296f9ef81b0c4bfd435f37"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "194a337cf4693f8d82c7b9979277f4e6"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "4fa0b244da13ae065aebe98a61750e64"
  },
  {
    "url": "tag/json/index.html",
    "revision": "d597ceb1b74313830ec22ea878ff7dbe"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "e6497a818e8467bf0d3ce401749b3921"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "3c9513a17a27b77bdbc2dda3c842b8dc"
  },
  {
    "url": "tag/python/index.html",
    "revision": "8e0a60c735efcf89a34e17654d46be95"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "96b83cfd4784f617d1bf9d8fbf35fa8b"
  },
  {
    "url": "tag/read/index.html",
    "revision": "b033aee49ad38eb57c87854fd06586a4"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "1a7c812408d7e20128a87a20e9fbd9b7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6c104a1d8c8c047bd2b739989019a1c3"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "3521e693a50497536b27e0baf8fc735e"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "cefee3326b8c724d5d44afd266c50c87"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "368f4378ac7d9c41bd2debc9c0678c57"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "5b12da111307b4a250a78e807fd62740"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "ef8753a02145e28d1cb5b425ac64c114"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "0fc9c6a36fd11b3b08ef97b8714a7872"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "619d8318fc0307e7e4247971b98b2be7"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1c8483fe1a70ba0a6a3161ebc0171ded"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "bceb35036b223cbf4abeb2f9cdc14db2"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a51237a0d30d61da18b131acb7a13711"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "da8b810341e46bc0c2bdb025109097e7"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "69bdf4eb58e99eb09d69515896646aa3"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "40bd9e07792204d430a51a9ba984a82d"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "25857003b928522a1808d44d9ac4ec64"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "450662a3f83e3d54319ab739f606d45e"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ac6d9621dba164a3ecfa7740f32ce126"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0e6d6e65ecbeecbd8c52ed779e34f1e6"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "dc4bbc6ef220c7365b8a7d47af6217d4"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "e98136d1a39f4e9d2dfe8dfa3822404a"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "cdb712e5e57a5e0472b501b95080d9ce"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b938a97e37ed43ffa280be81c2d778a7"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "fb6e94ba9921511f6cc62f5d076229b9"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b42551c4a9ea1ef777dd91152f3d9fc8"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "a378d7204b002580852b58d1204e53e8"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bc55253e884853a22221a55e54aef4ee"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "32b6a548cc426a7324a92918eabd829f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9e92393d6b0ef26bdeab004ee389c963"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "bd73c2188db7bb5e8d6c0527065cbcb3"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "0e803054df4aad743e122ec0dfa536bd"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "a1c7b1ff155f50866ec1352c959a9692"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "541ad89dc47f3fe85aa8bc826d827a90"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "5beac29017d1fb73355b53a4a10810e1"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "691ad255ea8e5d4c0c9616d4db6d98ed"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "672d7b6e774168702ebbd3313e1ead5d"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "3c928c35fda981c9686b71173cede173"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c97d8b9984028d08c090db33d2df5855"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "19357f3503e33d205e696de99d5f02c5"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "b393eb780afd0005ba47a86bb3368bd2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "c1e46eff47583565907e7c6eecb551a8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "1b98e261a06538e705cdb2036cf1b59d"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9c1119988fc5d000d984d293a4f7d0ff"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "cb1960d861fa7d513cd2386ff3353897"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6d803d1e1cdb67b92f192a7738a28c59"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f54d56c4d38617a7c69b7a5a58bf9263"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "c26ef5fd3cf493eaeaa56fee512a685b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b70ada64987844e35796dad74b069f82"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a493bd42b8d6804373e1f18e42704260"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "1e6b86fe7d287e6a4e164b6b5c4f0091"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "95148f19127ac8529653e69b47c688d7"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "4c95b81abd28db0d7bc65b5577a42f4a"
  },
  {
    "url": "timeline/index.html",
    "revision": "8400eb0f310238f7c4cf7d9d78bd18a9"
  },
  {
    "url": "tools/docsify.html",
    "revision": "96b97569f4ec735283edc3e1628ca432"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "9cb4dd509f2ba366c8b93117c8b31f8a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b1ba1a97569a0296cab47f80ab8bc976"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "9fce7ac7b3a168b3b7b17404d9317bdb"
  },
  {
    "url": "tools/git/index.html",
    "revision": "5f5965066be10845eadbebaaf0ce4ab6"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7f337053f61b71a1e63afb11ac69cb5b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "c4429950c30492ca93fdf81db7a1bfea"
  },
  {
    "url": "tools/html/index.html",
    "revision": "65bf55b3d4c471437751187bd2cd359a"
  },
  {
    "url": "tools/note/index.html",
    "revision": "13ce68974079ba99d44e475afe5b9bb9"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "f1b466f08bb688c445298cc1ea8962ad"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bc5d0098294095a1141f78bf973dbd52"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c9b6fbe5e4b6147860f2655ef73260bf"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "01a7e49f23d3d34dabb64c3d36693f42"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "53577c372b981ef6324852d15b431fbf"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "4291cfa04e61ccb1475d5f70bb7a640a"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e4f4de9a89943ab3e9c20faa2bc899e3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "3f3990ef74a734baf39de2a3915c415e"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4c7ad5b38e9d70538927af5e64c7bc6f"
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
