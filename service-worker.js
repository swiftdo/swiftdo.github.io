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
    "revision": "73255dd55de4c6e2c0e4055cab309014"
  },
  {
    "url": "about/app/index.html",
    "revision": "4e1cca73506ff46e771210d386119e28"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "7f63e0116fbabe5a39514fd67bbae665"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9c5021caf0de7f286bc637b38c8e9368"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "801c14e24ef3dd0cc12847f9b9a53bee"
  },
  {
    "url": "about/index/index.html",
    "revision": "925e53a4ce46ea0a91e6f9de20ebc53f"
  },
  {
    "url": "ai/index.html",
    "revision": "38ea09dfd7e28b9dde68ba9722fba678"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "b85c1cd6986865ca19e5d3640a40fac1"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.9c7fafbc.js",
    "revision": "fa7ce291ec8aeb54798d7dc6b052623c"
  },
  {
    "url": "assets/js/101.b58931bb.js",
    "revision": "9ba89a80ce9ae9109e84b368666fcf54"
  },
  {
    "url": "assets/js/102.4b33ec17.js",
    "revision": "b1aa0fd0b7982dd589bb713240986ab7"
  },
  {
    "url": "assets/js/103.5054affa.js",
    "revision": "1f0fd975be391aec6f56e98085664de4"
  },
  {
    "url": "assets/js/104.8af21d6d.js",
    "revision": "0235eebc4298d21008dd68fc6589ec78"
  },
  {
    "url": "assets/js/105.f34852cd.js",
    "revision": "ff452126f8ec4bc93f9263994cd03bbd"
  },
  {
    "url": "assets/js/106.b0e30eb3.js",
    "revision": "a577ef6432cb3ff81c6fd1ed2e56e3bd"
  },
  {
    "url": "assets/js/107.334594a8.js",
    "revision": "ea30fab98a1b039f6e47efdae65ae141"
  },
  {
    "url": "assets/js/108.3a96c37f.js",
    "revision": "7c60bb65119d86dc8959c7a3ee2244b3"
  },
  {
    "url": "assets/js/109.fb811143.js",
    "revision": "5a37d2fb437b0d26ada6df21b55f204e"
  },
  {
    "url": "assets/js/110.387a2e08.js",
    "revision": "aa08a73cc42a0bd9d92bb8436813899a"
  },
  {
    "url": "assets/js/111.087eb5d7.js",
    "revision": "623a586e3b12dad38d6dbc388a80713c"
  },
  {
    "url": "assets/js/112.2d6ae547.js",
    "revision": "486cbe5b3b6c5fb33d9dcd317fbcabf7"
  },
  {
    "url": "assets/js/113.ed194797.js",
    "revision": "babdfa8b7020ee2b58ba57cdc1077516"
  },
  {
    "url": "assets/js/114.4e733d42.js",
    "revision": "df6bf45fca27e8dc678b50120a23d959"
  },
  {
    "url": "assets/js/115.0b582ff4.js",
    "revision": "425ca3b7a2632b5841af4fe3f2d1ae3e"
  },
  {
    "url": "assets/js/116.5bd64748.js",
    "revision": "3b4ce691ac74fe42d53442ae888e7356"
  },
  {
    "url": "assets/js/117.3cf562cd.js",
    "revision": "55ee6b1f46ca8d2ad96f2ede7bb2a103"
  },
  {
    "url": "assets/js/118.bde8baab.js",
    "revision": "6edb7c905b8567c9d53f16455cd0dd4c"
  },
  {
    "url": "assets/js/119.eed36091.js",
    "revision": "30abadac1f89f4b686a4aba079fc9edc"
  },
  {
    "url": "assets/js/120.45054d3a.js",
    "revision": "e8afc89a5a5822095ca3c9d05b6ac08f"
  },
  {
    "url": "assets/js/121.f993fe14.js",
    "revision": "c481bc8189d55b511b772a3744051b9c"
  },
  {
    "url": "assets/js/122.d28ea398.js",
    "revision": "7b30bbf71b8e7fd439bedf2894c84570"
  },
  {
    "url": "assets/js/123.8a392a4c.js",
    "revision": "9aedb0a43837c9279dae7e3360405582"
  },
  {
    "url": "assets/js/124.946b42a3.js",
    "revision": "d0a5812cad0599494c60deb12b025ac1"
  },
  {
    "url": "assets/js/125.373e0f27.js",
    "revision": "6c74139b1a945dccded86fa17c51e9b1"
  },
  {
    "url": "assets/js/126.bd46ca3a.js",
    "revision": "77eb2eafe95d8b493d5d2684f846d19f"
  },
  {
    "url": "assets/js/127.e1029d0f.js",
    "revision": "563eecaf8ec15aad2818d0788de13512"
  },
  {
    "url": "assets/js/128.4a692ff1.js",
    "revision": "aa256d29155691277a9f5eb185c7723d"
  },
  {
    "url": "assets/js/129.0efd9b70.js",
    "revision": "0db76e697d46b805a013e2b7b1ce0039"
  },
  {
    "url": "assets/js/130.a51cecee.js",
    "revision": "db17bc72559577c0f2065336e67d24ef"
  },
  {
    "url": "assets/js/131.9397be6a.js",
    "revision": "27fc572bb3cc75465196ea32a67902dc"
  },
  {
    "url": "assets/js/132.ae8aacd0.js",
    "revision": "d84c82e46878b7be3ed63259ebdef311"
  },
  {
    "url": "assets/js/133.7b389c75.js",
    "revision": "51bdbe64c35ea2961123169ee55f0f50"
  },
  {
    "url": "assets/js/134.697a65d6.js",
    "revision": "9c7edbe00776528d2cf749afa790ae35"
  },
  {
    "url": "assets/js/135.73ac0b0c.js",
    "revision": "807822668bf0f6dad0b07ed7e60cc2e3"
  },
  {
    "url": "assets/js/136.d6693462.js",
    "revision": "4a956efdc9fde7543d0b80c817a5adb6"
  },
  {
    "url": "assets/js/137.b0abaa66.js",
    "revision": "718861d763571d48ab2044c52faf6157"
  },
  {
    "url": "assets/js/138.1943877f.js",
    "revision": "78075badbc04b9279c75e665d624b073"
  },
  {
    "url": "assets/js/139.f01ce6b6.js",
    "revision": "54d60fa69d242f02c700c265ceab0e1b"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.1de325b3.js",
    "revision": "4a0c44dfe054af23555682d4398c213b"
  },
  {
    "url": "assets/js/141.dc6149dc.js",
    "revision": "97b70884c871843d861c3766ec378e3e"
  },
  {
    "url": "assets/js/142.05a7e83b.js",
    "revision": "7710dff075bfda9576de3c2a2561b81f"
  },
  {
    "url": "assets/js/143.c1369a5d.js",
    "revision": "d6bafe8f8f699ee0c488c820fbbdc60e"
  },
  {
    "url": "assets/js/144.5c4d5f35.js",
    "revision": "39e08ff8bd56337519aaef834e8b1c3c"
  },
  {
    "url": "assets/js/145.84e7d347.js",
    "revision": "e920111108e7ca4629f2238562ade17f"
  },
  {
    "url": "assets/js/146.ea382846.js",
    "revision": "62d95a24c86687d2c551ee56fa3145d1"
  },
  {
    "url": "assets/js/147.53a342a9.js",
    "revision": "d4ec941e21a805aa77a7101f6c304ceb"
  },
  {
    "url": "assets/js/148.c0264c21.js",
    "revision": "34ce0b9d22a53fb782684b5027dcaf8b"
  },
  {
    "url": "assets/js/149.9f2e6734.js",
    "revision": "123d5fe73b107df41c8843a4475d1279"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.9f2f7454.js",
    "revision": "0e8c9f08ea2577c1f5526dd89c1615f2"
  },
  {
    "url": "assets/js/151.ec14e52c.js",
    "revision": "f003627031fc8fb308e1a263ea3a73bb"
  },
  {
    "url": "assets/js/152.aa9ef8a8.js",
    "revision": "ca4a79088cf9f41d83f1770c60adbdeb"
  },
  {
    "url": "assets/js/153.cbef124e.js",
    "revision": "d897cfbb8db2c4b27db6efdee14b809e"
  },
  {
    "url": "assets/js/154.1ee721e2.js",
    "revision": "83f6d87ed3e8de6a5018610140fa2d71"
  },
  {
    "url": "assets/js/155.c57738c6.js",
    "revision": "f81ddc40551950b9a169b23804bb5af5"
  },
  {
    "url": "assets/js/156.ef30d2d5.js",
    "revision": "c41e0745c5931d918f2273edfa527b12"
  },
  {
    "url": "assets/js/157.da0485aa.js",
    "revision": "a4eadae7971bd18284c7a350a872c9b3"
  },
  {
    "url": "assets/js/158.aac10777.js",
    "revision": "9a0d88501b898f17eaaae3d14b950107"
  },
  {
    "url": "assets/js/159.561718b7.js",
    "revision": "fa8f72ea26f664ce6c686b9e55bcef33"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.b25fe84a.js",
    "revision": "18c90fdcd3512b97391a08c6dbe63364"
  },
  {
    "url": "assets/js/161.3b4b2a0b.js",
    "revision": "14bab8a1b9ad20755e8319ca95cad96f"
  },
  {
    "url": "assets/js/162.e0b7b5fb.js",
    "revision": "e40a6ec11b44e1c576fac4dd51cf4f8a"
  },
  {
    "url": "assets/js/163.2ae43288.js",
    "revision": "83b92916bfebb6bad404a07ca56c5976"
  },
  {
    "url": "assets/js/164.26ebe7c9.js",
    "revision": "574fad5645c6683dfb2b1056be1316c9"
  },
  {
    "url": "assets/js/165.5e428b7e.js",
    "revision": "28a03079e3fc10cf112026b0a47d9e69"
  },
  {
    "url": "assets/js/166.f5c61404.js",
    "revision": "16f55661887dc6314dd40502dcf686cd"
  },
  {
    "url": "assets/js/167.e8de6fc8.js",
    "revision": "3d81df602d179b01a4ed6b5a976d43b2"
  },
  {
    "url": "assets/js/168.9e596c94.js",
    "revision": "caf1cd09cd0d49c16b876256319c782e"
  },
  {
    "url": "assets/js/169.a1e0a749.js",
    "revision": "fbdbabb2b82ab035ffb9cfc825a687a5"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.0f5c71c3.js",
    "revision": "67cc01e5906854e1c06c2de955b4ca46"
  },
  {
    "url": "assets/js/171.359e9b8b.js",
    "revision": "f3fe640c36af9bb9429a51fdf5ec4498"
  },
  {
    "url": "assets/js/172.0d214d19.js",
    "revision": "8eef53296da64adbecf3e4f0a85b230e"
  },
  {
    "url": "assets/js/173.8df87d3e.js",
    "revision": "a38090ed55c3af3708ab84ad8699cbc6"
  },
  {
    "url": "assets/js/174.3dbca265.js",
    "revision": "c767ee3e57106c9ba56c79e38cbec3dd"
  },
  {
    "url": "assets/js/175.0075d12f.js",
    "revision": "168f1b27fa5e94946ab46c2580a6fc1c"
  },
  {
    "url": "assets/js/176.abe6fed9.js",
    "revision": "b9c307ebed1baee18af5ee6c19a396a8"
  },
  {
    "url": "assets/js/177.9f44be10.js",
    "revision": "dde2611b29a9b0326b47140869c9cb6a"
  },
  {
    "url": "assets/js/178.2715cdbc.js",
    "revision": "d6684dc3a2d7193f72577b026e05a42b"
  },
  {
    "url": "assets/js/179.505ecf81.js",
    "revision": "79bac7a07f9b0f3b6961328500695a43"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.f92f8c96.js",
    "revision": "eabcda6ce919b5ef570041d6f623420a"
  },
  {
    "url": "assets/js/181.1c882be7.js",
    "revision": "9038682bb04d907c8f195c893f54f8b3"
  },
  {
    "url": "assets/js/182.d1c014d4.js",
    "revision": "0cfedec64d5f8f6e5a1f3359251b8094"
  },
  {
    "url": "assets/js/183.50168fbe.js",
    "revision": "540461590901f68056206cb910a45b89"
  },
  {
    "url": "assets/js/184.84d0585a.js",
    "revision": "6ee637e45ce4e6165b7960422fd23ca7"
  },
  {
    "url": "assets/js/185.ac755142.js",
    "revision": "27acfa1f22f692a91005d46555d289a1"
  },
  {
    "url": "assets/js/186.4e3fb332.js",
    "revision": "0ea932b423a8eeacad7f43e0117e64a0"
  },
  {
    "url": "assets/js/187.ce374785.js",
    "revision": "074ebf33043f5ecd801f674411a8b8e1"
  },
  {
    "url": "assets/js/188.87f2e82d.js",
    "revision": "93df300ebe471161e3574148380ea8d2"
  },
  {
    "url": "assets/js/189.20ecc2ac.js",
    "revision": "8a0863d76fb191fbca8a5cd7a8de51fd"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.f0edc279.js",
    "revision": "afff24e1941297dffd2e7df80b72730c"
  },
  {
    "url": "assets/js/191.0542432e.js",
    "revision": "a034710df86c26e568ef59356ae1bb71"
  },
  {
    "url": "assets/js/192.99ea21c3.js",
    "revision": "8b33d6c02d2fbeb87b9d89fcd704bc22"
  },
  {
    "url": "assets/js/193.e433a9a0.js",
    "revision": "087e3d60a36fc918b5b95e7f5a7a6b16"
  },
  {
    "url": "assets/js/194.b52dcd89.js",
    "revision": "7000c8e4ea58b02b17bb011179919059"
  },
  {
    "url": "assets/js/195.ba0e361d.js",
    "revision": "bba2e42f967bdca2524c1dc1f7e22a37"
  },
  {
    "url": "assets/js/196.9a8dc88a.js",
    "revision": "e8742a90a42cb0736e53d797c32ba99b"
  },
  {
    "url": "assets/js/197.4d580226.js",
    "revision": "a0e1763aae018d023ef97043bd67fdaa"
  },
  {
    "url": "assets/js/198.46646374.js",
    "revision": "ff74e3c870e8fe11bf8ba53bfb14f146"
  },
  {
    "url": "assets/js/199.75a25314.js",
    "revision": "d47377b99a7a3e98586c2662093bcd2f"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.841afed3.js",
    "revision": "9f385ccf29a71969d90f530dd8781ba8"
  },
  {
    "url": "assets/js/201.3b4d50b6.js",
    "revision": "51feff50b099fec2a6ef67bc47be6d1a"
  },
  {
    "url": "assets/js/202.0615710c.js",
    "revision": "48d89e8925768d22206f72f8cf844e4f"
  },
  {
    "url": "assets/js/203.0073d62c.js",
    "revision": "086108ee1ace1beeb29a8035e0881d5d"
  },
  {
    "url": "assets/js/204.195591a5.js",
    "revision": "b89a7faffdf83b7eb4a4c4f870f39d7d"
  },
  {
    "url": "assets/js/205.b387da3f.js",
    "revision": "574793f01e6b82da56c19e7c783d894c"
  },
  {
    "url": "assets/js/206.d38e3fae.js",
    "revision": "49c98dbb927ec41cf6afb63bc45c636a"
  },
  {
    "url": "assets/js/207.11b873b0.js",
    "revision": "cf0da532e9a958ea55bb41d9baaf6d3f"
  },
  {
    "url": "assets/js/208.e2746092.js",
    "revision": "9163cc9c04bec3f58c6c803179b0adca"
  },
  {
    "url": "assets/js/209.17771848.js",
    "revision": "c34806160ef3728a7a5cee63889b46f3"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.bd305ca4.js",
    "revision": "329ff78de3a40e68b709e92182d81113"
  },
  {
    "url": "assets/js/211.194117f5.js",
    "revision": "d18ea1d4b9eab4ddd9d82dd677712ee4"
  },
  {
    "url": "assets/js/212.b489b8ff.js",
    "revision": "330bb3bf5f0c6bb44cf8150355e66c16"
  },
  {
    "url": "assets/js/213.17089587.js",
    "revision": "e4545348a803b48ac94d1db882a218ff"
  },
  {
    "url": "assets/js/214.d6eb5933.js",
    "revision": "a561391415a6c9e78b938a213fb8b472"
  },
  {
    "url": "assets/js/215.3214acfc.js",
    "revision": "ff545f794ee104a57d03a3cb8cc18293"
  },
  {
    "url": "assets/js/216.33f5f00a.js",
    "revision": "892a50dddc898a37ba8e6306bcc3805d"
  },
  {
    "url": "assets/js/217.dbfb7629.js",
    "revision": "329ef154da2e17e706cc7c750e26e4da"
  },
  {
    "url": "assets/js/218.5513a310.js",
    "revision": "0cba0b386617b658c646b8c58078bb55"
  },
  {
    "url": "assets/js/219.7c5efd46.js",
    "revision": "7bed4c0d36f0d6eef5897320871715ab"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.675796a8.js",
    "revision": "7c1e97c586319e82e11fcb8b4366174f"
  },
  {
    "url": "assets/js/221.b29d36f1.js",
    "revision": "2b8fdec61e87370a5ed6f50076ee35dd"
  },
  {
    "url": "assets/js/222.539adc1d.js",
    "revision": "b37c473fbe15e289d1959fdb3f4d9414"
  },
  {
    "url": "assets/js/223.b701ce12.js",
    "revision": "8e0bb613b0e7175fb1a1145abd60b247"
  },
  {
    "url": "assets/js/224.92f6f205.js",
    "revision": "e2db923d2aee4ad7eb1c16534c2cd5d0"
  },
  {
    "url": "assets/js/225.c8752d05.js",
    "revision": "60b26074340231c21e01afa5f531db9b"
  },
  {
    "url": "assets/js/226.c3f7ed3f.js",
    "revision": "cf45e2eb736aa1b9d4aa42b04a75f0be"
  },
  {
    "url": "assets/js/227.b9f31d83.js",
    "revision": "32a573aab8d75b92263a38cf718908e1"
  },
  {
    "url": "assets/js/228.afae8e6a.js",
    "revision": "cd980654882efedbd7d3d72120c1f238"
  },
  {
    "url": "assets/js/229.a1c216fa.js",
    "revision": "fffb20202ab956336435790748d75e7a"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.7778af6c.js",
    "revision": "4cf04058a522ca5089a46121697cd1c0"
  },
  {
    "url": "assets/js/231.cf5b689a.js",
    "revision": "d9e64c8e997f08fd77fc26ddfade78e3"
  },
  {
    "url": "assets/js/232.c9e2e70a.js",
    "revision": "82bc8fd009c601b2f2dde11b2e8b20d0"
  },
  {
    "url": "assets/js/233.c8e9bc84.js",
    "revision": "b74209bb2a20bf2a90bee28794a2864a"
  },
  {
    "url": "assets/js/234.0987c630.js",
    "revision": "bec46c9803c368faef8fad88db5d5f2d"
  },
  {
    "url": "assets/js/235.3188d96b.js",
    "revision": "541f60b13c88fea4eb74ea34441b6720"
  },
  {
    "url": "assets/js/236.fe5d0358.js",
    "revision": "5110c987f5c1dc165dc2073e030e131a"
  },
  {
    "url": "assets/js/237.01919a7e.js",
    "revision": "0ded324f9ff647ed9bbb4b55bace7676"
  },
  {
    "url": "assets/js/238.601dfb3c.js",
    "revision": "d66d62330329eced2e44e7fdc4191bdb"
  },
  {
    "url": "assets/js/239.d4d9fe08.js",
    "revision": "e4cdb267430f5c2907aeeabff7d7934b"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.8cdfe9c0.js",
    "revision": "7913349c459a1db5da46eb6fa6395672"
  },
  {
    "url": "assets/js/241.63e3dac0.js",
    "revision": "e2be5fad6d37ce1baaae2ea8511bbe49"
  },
  {
    "url": "assets/js/242.4e6784a1.js",
    "revision": "baaf9e6b2a1504fa2ed33955d9a01288"
  },
  {
    "url": "assets/js/243.f1a42e48.js",
    "revision": "577ddebd593e9d09f99e3b29cbc9c058"
  },
  {
    "url": "assets/js/244.27b83cf1.js",
    "revision": "31a60e663a81653508e27e625778e4bd"
  },
  {
    "url": "assets/js/245.3051dd3d.js",
    "revision": "08910cf8ae4850d58a686b5cf056453b"
  },
  {
    "url": "assets/js/246.f9dcf8ee.js",
    "revision": "3d2314787505f9ca23a8efecc4126af3"
  },
  {
    "url": "assets/js/247.fa82d95b.js",
    "revision": "bb95f3a4a419f2a3dd69c88214599913"
  },
  {
    "url": "assets/js/248.9ed4f428.js",
    "revision": "aa8c1266317b6c48128047c6a3a170e1"
  },
  {
    "url": "assets/js/249.b38697cc.js",
    "revision": "6620b8c53101a17c8ac72e2e2c60c653"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.9f97fb39.js",
    "revision": "2aa39062681f5dec8acaa8f7e24ed116"
  },
  {
    "url": "assets/js/251.88588410.js",
    "revision": "de92553c2ebfa578c441f2f37c982b62"
  },
  {
    "url": "assets/js/252.b3ffb3a2.js",
    "revision": "6295a24aa8cc1d2159d531825f035ccb"
  },
  {
    "url": "assets/js/253.45d8f910.js",
    "revision": "c7798c1612341b2bf7484c3b699edf52"
  },
  {
    "url": "assets/js/254.74aa283e.js",
    "revision": "67d07ba68db0d49d505850d138b1b00f"
  },
  {
    "url": "assets/js/255.978a8e74.js",
    "revision": "b1c8c25c5e35e5a16018d691c2d840a6"
  },
  {
    "url": "assets/js/256.eaee8cdf.js",
    "revision": "e936c09fe39b31ba571e40656d3e0aab"
  },
  {
    "url": "assets/js/257.195fcad8.js",
    "revision": "b7a18cec7607aa01c1f802b2037fda8a"
  },
  {
    "url": "assets/js/258.7250126f.js",
    "revision": "0039a00ecfba179cc76ec05399f5b057"
  },
  {
    "url": "assets/js/259.c86804ce.js",
    "revision": "9e1d5b4754a68719e344dadc586ed8de"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.17be3e37.js",
    "revision": "9c5e9b35c8119187971d99c1faf6f98b"
  },
  {
    "url": "assets/js/261.2fb4aaa2.js",
    "revision": "940a194d6e2684222064572ccc535200"
  },
  {
    "url": "assets/js/262.4d5c60d9.js",
    "revision": "a11c4ea298f46721312e7e16055fa9d3"
  },
  {
    "url": "assets/js/263.afc26c7d.js",
    "revision": "9ded520b2f7da782475004cf5a6ea2e0"
  },
  {
    "url": "assets/js/264.e30c7bf9.js",
    "revision": "59f9d9ee5a2b9304ede3308932dcab9c"
  },
  {
    "url": "assets/js/265.b89820ed.js",
    "revision": "3b1c8b90ba09ab5e7ed11a30bffa96fb"
  },
  {
    "url": "assets/js/266.476b4988.js",
    "revision": "b97a373da316d54529cf37a3c1672830"
  },
  {
    "url": "assets/js/267.82b42ad0.js",
    "revision": "0132d3915f5f31038ff0b70ffdddde68"
  },
  {
    "url": "assets/js/268.76c57232.js",
    "revision": "753d6522df44fcd93c92309d8393fa43"
  },
  {
    "url": "assets/js/269.881aac6d.js",
    "revision": "3fde1265f01deee9b485245235985a32"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.2f2e5627.js",
    "revision": "eb2ab4ea6061c91e9975462fdab51bac"
  },
  {
    "url": "assets/js/271.32c5c92d.js",
    "revision": "b76fa4488728fe20d5388d8da7c84b3d"
  },
  {
    "url": "assets/js/272.bf4561bb.js",
    "revision": "3382a67b99cf08822118ffbe7edb1f00"
  },
  {
    "url": "assets/js/273.12c4a77e.js",
    "revision": "c812e7c68c9782b8dedffd3bde559048"
  },
  {
    "url": "assets/js/274.a95a9b7a.js",
    "revision": "9008eb6f58b2ec6ee571a996e4f801b7"
  },
  {
    "url": "assets/js/275.0b6b46d0.js",
    "revision": "9dc0c813951ba15067d123b428f054d8"
  },
  {
    "url": "assets/js/276.c3eac450.js",
    "revision": "3917a6664d94d10981a251be26ec1e58"
  },
  {
    "url": "assets/js/277.e611d10e.js",
    "revision": "f321bbd0dd4a5ecafc03f257c56edebe"
  },
  {
    "url": "assets/js/278.976d93c1.js",
    "revision": "7f799efb8d2db8652a0f43147ec7b175"
  },
  {
    "url": "assets/js/279.99789478.js",
    "revision": "1e5e5853cbdab0d6ad223d9372a49059"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.24299266.js",
    "revision": "2a11c5af3bf87911ede0c175ccfa52a3"
  },
  {
    "url": "assets/js/281.e0d23aab.js",
    "revision": "22c0b3ec78a3a9f8604d998d84a852a0"
  },
  {
    "url": "assets/js/282.a8586008.js",
    "revision": "e76892c006612ebd4e5cff8b8288e993"
  },
  {
    "url": "assets/js/283.4edd6117.js",
    "revision": "05e35bc4cf75dab6543b8a19c376b885"
  },
  {
    "url": "assets/js/284.74feed5f.js",
    "revision": "8b5235e0dede1bb2c07a5fde388e5737"
  },
  {
    "url": "assets/js/285.bb8ce17b.js",
    "revision": "968745446a5eeb3ffa069f97f51caddb"
  },
  {
    "url": "assets/js/286.f3069452.js",
    "revision": "57b50172219135037dd68531669206b5"
  },
  {
    "url": "assets/js/287.75f8bd78.js",
    "revision": "b10c105664c197a981dd0b42f2ef0369"
  },
  {
    "url": "assets/js/288.aec8661c.js",
    "revision": "a950bf7e5b878e7b14523e0a25d7a0a4"
  },
  {
    "url": "assets/js/289.729f427d.js",
    "revision": "f9a790b915377dfd54a9ce4ea25833dd"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.15562bdf.js",
    "revision": "6052cab8bd917931f60b3737948d62a0"
  },
  {
    "url": "assets/js/291.c560da8f.js",
    "revision": "1a831e7f3d93f659e23f286c1215cc2b"
  },
  {
    "url": "assets/js/292.a6723efe.js",
    "revision": "a5292f8b4763ad9d6bb92672828201a2"
  },
  {
    "url": "assets/js/293.e23ce757.js",
    "revision": "3334f098ecc456a83f9d57fac5c46add"
  },
  {
    "url": "assets/js/294.523945c1.js",
    "revision": "92f5c27229234968e3aa708a4bb027f3"
  },
  {
    "url": "assets/js/295.c1113106.js",
    "revision": "83e3b9748980bf00fd5fd827335c8fab"
  },
  {
    "url": "assets/js/296.d9520d4e.js",
    "revision": "537777f442aae2db5b3c3b80da193984"
  },
  {
    "url": "assets/js/297.10e2f0f8.js",
    "revision": "fead16a1f1cb77e15b31c01a14188837"
  },
  {
    "url": "assets/js/298.fadbdbf6.js",
    "revision": "207cf9468066708f2c0479f55c5aafd1"
  },
  {
    "url": "assets/js/299.b3d6b3d7.js",
    "revision": "fb422415b93d0d56a5e4d43dd2316e3e"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.2af1e175.js",
    "revision": "1b696c3ffe9bd70a7da96b6bb98b8055"
  },
  {
    "url": "assets/js/301.06f89789.js",
    "revision": "cb21b6b5918e10b72c22b5b2f922e817"
  },
  {
    "url": "assets/js/302.8a3e4c45.js",
    "revision": "794d59efbe7a0884e3a015c539ab5ec7"
  },
  {
    "url": "assets/js/303.425aa0be.js",
    "revision": "1fb0bac47ef2e8363569a5ebf3761b55"
  },
  {
    "url": "assets/js/304.40e79e80.js",
    "revision": "1d3d2efe0ff329367e768a9a729b446d"
  },
  {
    "url": "assets/js/305.1168bd40.js",
    "revision": "20a543d4c75d0de5bec430417e525001"
  },
  {
    "url": "assets/js/306.e1adc983.js",
    "revision": "55fd3243a80de1f9399efb2ad27914d0"
  },
  {
    "url": "assets/js/307.d1ce503e.js",
    "revision": "007654a24e8b1d053b4cc8f56bf29c9b"
  },
  {
    "url": "assets/js/308.96fefc05.js",
    "revision": "63065d489c8edca051c10aed000b0b87"
  },
  {
    "url": "assets/js/309.0ea7886b.js",
    "revision": "44f800529c0ce89b33ca9088ea49939e"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.d1e98ed0.js",
    "revision": "467db4cda0b2e9697e831591011ea470"
  },
  {
    "url": "assets/js/311.092d43e4.js",
    "revision": "4d553ff1a4612797e2ccb84c986f5e54"
  },
  {
    "url": "assets/js/312.acb21027.js",
    "revision": "3fbf6df3fa7c52bcf68e733c87851883"
  },
  {
    "url": "assets/js/313.c349ed22.js",
    "revision": "bba3162a2f3efedc2e58e24c480ccff4"
  },
  {
    "url": "assets/js/314.14448dd6.js",
    "revision": "2c74cc5b99c22e9f87cfd26b5ea9decb"
  },
  {
    "url": "assets/js/315.65042bb8.js",
    "revision": "99b2c5e42796fa50936159182e262e4b"
  },
  {
    "url": "assets/js/316.3797034e.js",
    "revision": "fa1cf30f102218ac2ef6b7491ac8c7a1"
  },
  {
    "url": "assets/js/317.d644597a.js",
    "revision": "acc8707f6cf6cd48d468e1218b5432eb"
  },
  {
    "url": "assets/js/318.6c6349fc.js",
    "revision": "269032d26bf2c55447c9b9c36995ec00"
  },
  {
    "url": "assets/js/319.5550b9b8.js",
    "revision": "9b91a0632ba140f0d126942b496dbe36"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.641058f7.js",
    "revision": "11dddc7abeb75f18ce3cb6cad876c3c1"
  },
  {
    "url": "assets/js/321.867c574c.js",
    "revision": "635ddbf1e8e57ba4c02556d964b42028"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d98ef824.js",
    "revision": "be9d5ed0ed7f08cfa8c58aefa206c05a"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.4600d658.js",
    "revision": "13f17db84c21c7b02109a6d1a10e9bfb"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.533c2b80.js",
    "revision": "6611bcda2be3344ee740bfa998b77cba"
  },
  {
    "url": "assets/js/44.0b5e9d9b.js",
    "revision": "991864d46f8a5c6bf3113363341db718"
  },
  {
    "url": "assets/js/45.134dce27.js",
    "revision": "bb716fe40e1dce76efc57d8907d2c139"
  },
  {
    "url": "assets/js/46.17e59aa5.js",
    "revision": "42233b847e88b2112a6dd523e8a80ec7"
  },
  {
    "url": "assets/js/47.1619522c.js",
    "revision": "5e41154cc2dc4e9721bca6530ae3fa5f"
  },
  {
    "url": "assets/js/48.1d28a7df.js",
    "revision": "88e346d4e5204bd643e73ce71e801423"
  },
  {
    "url": "assets/js/49.c4f3337b.js",
    "revision": "67cfd0bf958db09eca7736e96c8383c8"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.c41917c9.js",
    "revision": "8a9771dbb894930f735daee868aa3f07"
  },
  {
    "url": "assets/js/51.89679c84.js",
    "revision": "380b473f3130597824939708903e5c35"
  },
  {
    "url": "assets/js/52.c79f5015.js",
    "revision": "fa700a1aa8a38322f409182307bf27e6"
  },
  {
    "url": "assets/js/53.9e13e0e7.js",
    "revision": "dd68e77021bc0e82da4c5471ad7ce470"
  },
  {
    "url": "assets/js/54.fd2af0cb.js",
    "revision": "cf719be8cf8f1d50847c5b734f702eb6"
  },
  {
    "url": "assets/js/55.d2c56783.js",
    "revision": "fdcc315e573c3592238d34fc8c4e376c"
  },
  {
    "url": "assets/js/56.ae1e02f3.js",
    "revision": "25996913a1190bfd6e1a4b32c87d777e"
  },
  {
    "url": "assets/js/57.b6507420.js",
    "revision": "c6fdd8dde75b0584e27f7c7e3223492e"
  },
  {
    "url": "assets/js/58.91f066d0.js",
    "revision": "120eef2a9e7dcb7e8d49e8139f7eb45e"
  },
  {
    "url": "assets/js/59.3c810c3b.js",
    "revision": "02b6abe5d1a49bd7711825ab312245dc"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.fde416a1.js",
    "revision": "cb2fe0ba450ae6f2be3ec59ea663e4e1"
  },
  {
    "url": "assets/js/61.5cf3cfdb.js",
    "revision": "0f28f7fd1785bfa1338887ca8bcb9508"
  },
  {
    "url": "assets/js/62.d1ae4f4a.js",
    "revision": "37f0899ca859187c2ac6956c4ba98bc7"
  },
  {
    "url": "assets/js/63.faea59bf.js",
    "revision": "0f5f077a5e79968bc4493c3b2b5ee99e"
  },
  {
    "url": "assets/js/64.ca313b96.js",
    "revision": "da7029b98fed5bfa8cf2742f6c1fe401"
  },
  {
    "url": "assets/js/65.8ab5bfe4.js",
    "revision": "26a9bcc0405b5d48a341c9cc2f295275"
  },
  {
    "url": "assets/js/66.37fcbb42.js",
    "revision": "4fbeae29e0a1d9d1c30be315c2ad34dd"
  },
  {
    "url": "assets/js/67.063d0beb.js",
    "revision": "c88e95b01cca6c94e0c1ab24e07c9680"
  },
  {
    "url": "assets/js/68.8d7373b2.js",
    "revision": "bfa790a1971c731b70bc32bdec4ca352"
  },
  {
    "url": "assets/js/69.85988572.js",
    "revision": "966f849c39b8814a5543b297fe37147c"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.1c58d4d0.js",
    "revision": "c409ca15cd24b9791d8d92aac07c9d95"
  },
  {
    "url": "assets/js/71.e9c4f758.js",
    "revision": "dd3eaf52ce84a752ff1bfdcce2942817"
  },
  {
    "url": "assets/js/72.1142bd99.js",
    "revision": "4914e357bb5029bc96accb4f100f0d33"
  },
  {
    "url": "assets/js/73.91a35010.js",
    "revision": "f8f55a94551cf344d6cfa35c414a3fe8"
  },
  {
    "url": "assets/js/74.bb616a53.js",
    "revision": "03bcbbfc646baf3378d127f35df56ef9"
  },
  {
    "url": "assets/js/75.7ae66ebc.js",
    "revision": "a8df916f447467510f898da333835b74"
  },
  {
    "url": "assets/js/76.720f79fd.js",
    "revision": "565186eb6fa86c0765fc9fd88717ca00"
  },
  {
    "url": "assets/js/77.97ce3709.js",
    "revision": "d5933bd3599497c3b18fa9ce5c03feab"
  },
  {
    "url": "assets/js/78.10f24fe8.js",
    "revision": "51ab46f736dd11a3b558cd3d14b221a7"
  },
  {
    "url": "assets/js/79.409c08aa.js",
    "revision": "7c413c5baf574ff24b35ad3e4b8c9798"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.f7467614.js",
    "revision": "2fd0c43af0f585f4a4976432ce99ea4b"
  },
  {
    "url": "assets/js/81.eab76c53.js",
    "revision": "92ee54d9978c566eb164b9ff01f85ed6"
  },
  {
    "url": "assets/js/82.a3660e5c.js",
    "revision": "047f76cd07451f70e920dcdc634395b7"
  },
  {
    "url": "assets/js/83.f2a858ee.js",
    "revision": "b8af0066f37977c0da41b3a859838f0c"
  },
  {
    "url": "assets/js/84.ebb9ca53.js",
    "revision": "158e0a1eb11d30acbcdc071f1cf25c70"
  },
  {
    "url": "assets/js/85.5f57e098.js",
    "revision": "5ef39a5b2975ff95f918a14c0801e47e"
  },
  {
    "url": "assets/js/86.881630e7.js",
    "revision": "c1dbd2c87f98dc5bd4fa72b102c552a0"
  },
  {
    "url": "assets/js/87.ef6eda15.js",
    "revision": "56930813970901e9be2990215e7fe92b"
  },
  {
    "url": "assets/js/88.c6290e04.js",
    "revision": "33b43e54f870de4d7d3d8e006b0c80b5"
  },
  {
    "url": "assets/js/89.d3320b62.js",
    "revision": "aa6e8685563d9716f17da2cc466b3e34"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.ed185d6e.js",
    "revision": "659abafedbdcea707e19057f44faafe5"
  },
  {
    "url": "assets/js/91.57cdfa4f.js",
    "revision": "eb187bdf5384a4cc511b2e39498161a8"
  },
  {
    "url": "assets/js/92.7c2b44de.js",
    "revision": "097f3a227e8814afb6fc52f1b6ca72dc"
  },
  {
    "url": "assets/js/93.886cc15d.js",
    "revision": "e777b1a2cd26a007b896263759d309ba"
  },
  {
    "url": "assets/js/94.05c20568.js",
    "revision": "90bf59322fef441fe1f3f8cfb35c2aa3"
  },
  {
    "url": "assets/js/95.bacb130d.js",
    "revision": "d101e99e84e8e3eb445d32459e359889"
  },
  {
    "url": "assets/js/96.999e972d.js",
    "revision": "16e52b31f42868b8ce2e2db975ab3189"
  },
  {
    "url": "assets/js/97.01fb8051.js",
    "revision": "80a4c425557f47bb458ab287076b8355"
  },
  {
    "url": "assets/js/98.d0d2dad4.js",
    "revision": "bacd8a4d0aaf8b5b9f20110e714861e5"
  },
  {
    "url": "assets/js/99.d041db23.js",
    "revision": "2dd2b13feb7d54d8e0652ad298bc361b"
  },
  {
    "url": "assets/js/app.e4c1c501.js",
    "revision": "d87775d24514af34a966624e115ac0dc"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "94dbe0ad50345fe2e8e7894daaeb1158"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "356bf1c4462570188f3e3dc3849a22d6"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "560f21471d3e8d84f83c660c2ff845e1"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "778d0a120270bc090d8b5f1a7eb07041"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "76969c62a7cea31461bcafed77418b25"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "d1420e222dace149b7181ca35c0e7b73"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "a2b126815501c05fcc4c2537fa42d12c"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b4b707ee7acc5b4f2ff66f5acae3faf2"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "0e2691216663a278afe8ab00f36fdc51"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0d86e1fd762959692724d894078c80d3"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "636533a4468083c9df4d42e91bf9c7a8"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "30eb17945bd98e6cef049b328e86e08b"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "38066d66beb9afeaa62183d182d874a3"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "4fa1189ddc3868305e52734014cf7d24"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "066a829aa1e210453f17db31e14a691f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "116d6f3a99c6277186c8660dae469704"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "18997c8d78016ebab46ccdc5dceb6d14"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "85fe3cf068e7dfe4da128d8978fce137"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "5dce0ebdae244b6a75f410055cbc1466"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f994eae1d790592fab2c339399ccd52f"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f4c0c2b5d73dd0a6da7b82fd2b3ea501"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "798c3e7d81664cc66e8df2bd6c4038ba"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "612c065ee6e98d9de0b2f1c2e50921ce"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "910187343e87b6d7592d43ab91f9e5db"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "9354d0edfcf6690468c3b9b9ba07e399"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ea5c6e49f49d18f173fa0ce3f868632c"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "4027194770bee0b7339e9b469b87fec4"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "64bfc6d3f37a8fd79d02337ad27a6c9b"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "dd19250a6055d87a7d0c587fcef0c429"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "61c002f8f859b4857cb870a90e6ed481"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "db615387085f9b7e08b1b600ad2bcc7f"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "202cde3a2b427344f39d23ab33e8479a"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "a38da37b3733c447e44a336f86f1b6c9"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "701947df258487bb398f0f309f9ec693"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "46e9c442d2b3c14fd0e0e73f870c9644"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "d36841f40967be2304b1c6b896756aee"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "81afdc6443d8420d7caec4b649afe407"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "6a923b023d0fc7faa8f69a2953444ef2"
  },
  {
    "url": "basis/index/index.html",
    "revision": "673b407900e1b00cb082222f55c80bb0"
  },
  {
    "url": "basis/os/index.html",
    "revision": "1262cca55698bb24d72760cf387631c6"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "e539c5df2a4e7310b825f5340d28a055"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "d86ec974a5fad986d97994d84027ca77"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "ac99c034f0f21a39e945e7052e9fa046"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "faf876b7f58e4c22db2af4a6a212da5e"
  },
  {
    "url": "c/audio/index.html",
    "revision": "a223a05fd7bc5e286def93d5bad55072"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "1b783de1e17736dca8bb3ebaa4b9b767"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "bb965f01d91594d64f0bec2d354e5396"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "67ab5d54fa8d70c617b2063a86f9d697"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ebf3d64be11c42c0b319843eddab366d"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "dba4eca8484507720317c5ee4b8fa4e6"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "cb8577f03a02a9cdff28c2f241139951"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "875b020705f0f834265b88c5ac4a67b2"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "873f0280f6102adfe132c6d215b18432"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "d034d2cc836c61fc28873af8b76e8bf6"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "b0fc80e1555174dcaa3db0c25d8beef1"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "f1f4941f552d8b37d8df91d6da67bae7"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "f2cabcdd49017664d59875441e4e008f"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "d4d7c560da8dccc1e02b6d2760b897e5"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "1905896e40b47c9c46a89902a0c8254c"
  },
  {
    "url": "c/program/index.html",
    "revision": "da3f1e21f7df5cad633a7325c50f700a"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d1b9e538e3ecb37785948a0ad94d5352"
  },
  {
    "url": "categories/index.html",
    "revision": "0582889558b51f32641e63e74ccd9e4a"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "be63b10afd9941fddb863e55ce2cf2a3"
  },
  {
    "url": "figma/index.html",
    "revision": "4497a39c801b9a931c5f5f6d1cc27a76"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "711e1b0a92ce1884dab6d6cfd54139e2"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "69794af9b8f0370f38ebfeee0d4d36ec"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "63c76fd6b7082938087dd35894c50d74"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "27de472266a640a8cbdf123c6250eae1"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "26b37ced88da32de89168592839880b9"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "c6d32b11afe54a6d28f98bd6d406c76b"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "5029d1a25d43c81e14333842b8ff4445"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "89d8fa3b658166699923119f8327c2b4"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "e2db0d4b517af07004a5b6750c51c295"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "57b5c365085ccdb218fae66e58f50633"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "f87f2ca6f6d2de1adc1a41d522cc6727"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "c9c6682d375d48eeb6e0f41c497d386f"
  },
  {
    "url": "flutter/index.html",
    "revision": "210e8616240b09e080d417ed150b7ae2"
  },
  {
    "url": "flutter/point.html",
    "revision": "1dffe9c12a82606bf23f0dacad5193c9"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9790c2cd0806555aa80fcea4457fac13"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "90cc67b61e8ba39c44f6a765fa9c9a49"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4d4d4e872d96198526199e2624e602cb"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "c02a95c8a6b5548bc9bab01079e4915f"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "1f6f9967db6df6e972204eb066c4578e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "9934ccd7a9b2badf0eef60339f3ec22e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a293bbe8c86c182656c958dbd2012950"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "271398c18162faebd26beabe3a41f662"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "7229de6f6e19ec2001bbac289cf74a98"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e423dbc92f04390965375d98ba94ab68"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a7c39444bad766f85be1b55c1e62704b"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "e6ca9ad2c67114e509a721e3fde0e77e"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "d02115c57bbd863d3b46483f8e8e368b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "a0ffe73161b663baabae85ce9901c7bb"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "33efef74b52341c3d0a28effca1fd885"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "2b46b9fb371151d20becdeb0cba71b5b"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "c50df51bc28bcbdcacd3be1bbbe2deac"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "f1eee51922f3b0f21612526c3ac863b3"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "b32c49ef366018950cec31cdd5f50cbf"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c75928600cb451356484d380e44d284a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "18afeb4a7185efb780f6be76a21cab2e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "bf8231c4c7ea59753261c1f14db2d198"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "0e04e29ee845199be9ab504e8f73ddb1"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "72e03406686d2b9d3cebda47feca059e"
  },
  {
    "url": "haskell/index.html",
    "revision": "108b19e0feeefac50c687d6c8b97ba29"
  },
  {
    "url": "index.html",
    "revision": "8c9b57647dece7cda6c655ee8617a5b6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "2c0128e3a3aac85f3ff77f8b8e802a33"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "f86818b34e426a06ec0ec972a5ce70b9"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "e16f131167df13519e2c483ca78dce49"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b5716cbeab05e5109b55e2d89571d8fe"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "b49f981f077640b4f2096bcc0ab68c09"
  },
  {
    "url": "python/index.html",
    "revision": "38d42600e6f25f753591908d437badff"
  },
  {
    "url": "python/poetry.html",
    "revision": "a22dec7dcf0534ec7f08b3df863ae438"
  },
  {
    "url": "python/pyenv.html",
    "revision": "b1a8c13f225f4dfed6a9e8125ec342fb"
  },
  {
    "url": "python/python-ase.html",
    "revision": "06946677e4f7939c1edf2ad621dece31"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "b710b45c2a1c984a9a9f67253638a61e"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "a925355af42b7f575d8061512f0ebb09"
  },
  {
    "url": "python/python-file.html",
    "revision": "35e06bd7a72f53a0546f4c9bf6228238"
  },
  {
    "url": "python/python-function.html",
    "revision": "52b8f782a12d60ad7c058e9fdbff2a79"
  },
  {
    "url": "python/python-generator.html",
    "revision": "94133315a5f6cc34efa9af15849bb114"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "ad3c0190f592c54fe20c9e2223de7761"
  },
  {
    "url": "python/python-module.html",
    "revision": "9191bb69e59f9fe3456c1606a6af4823"
  },
  {
    "url": "python/python-string.html",
    "revision": "30a6fe2aac870508afab9656552bfc4a"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "e0c70252e4dd67bdadc31ddfe01a6514"
  },
  {
    "url": "read/index.html",
    "revision": "e17f2d7127d814667eee3789db1e712c"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "1ed3bc380bae59e96755b363b01db786"
  },
  {
    "url": "swift/better/available.html",
    "revision": "710d7eff52482ff6030b71f73c686955"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "bccdffe230663bc388e5e476c9984c41"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "0526eb02a1dd72545eca7e8bbff21632"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "9913812a809a72c2298df881d8003406"
  },
  {
    "url": "swift/better/di.html",
    "revision": "8919a9f9b447df8a7d764d8bb2bfc744"
  },
  {
    "url": "swift/better/index.html",
    "revision": "20d1c55097834cda941b73a66c2c9c41"
  },
  {
    "url": "swift/better/last.html",
    "revision": "7d022fa88909bf9558df4d60a02a029a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "982494c976ae2933d54e8c956cb00d40"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6fb6bdb39c44ba48fc38f52b4eacb9ad"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "a8bc1afc6d04f5bac44a1765d357ddb6"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "cca4610068be45eda1087a2cd0af6333"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a0330affbc184929544ce252e3446333"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "05eb40a355965bc009579521cbfd73de"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4f7c6df441c4f1d646b7237e52843495"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "f35a140fb565cf9e3ac21a4c64c0cb54"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "075a7ab97631aa358ca5c16e348f3ab6"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "01abf5d4023b199eae5e34a868d149ec"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "9d2ecaaa55e7918344a1f36cefdc42d5"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "160dbbbc2168c9acb6dc4d6fed6a3f3d"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "d009e01372525b2a0c499bb51b037c9b"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "84fba47b5c225e81ca543aa28abec756"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "864774588fa76bf7dbc538aa69582907"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "cc32fad7d37a263a27e66b7aa9abe528"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "504de81e4f822bb05d0a6653f6059cd7"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "92214beff8841fe450843df5126ee694"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "29e820ffd6279fd30d5d51bcc5ba8cc8"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "c49d2198815f3671e3dd0dad56ed8316"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "85faa9d560c089288601292b760f1f84"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "d948930bbf70457c1d0d1079059bd454"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "c4bbb245e22bba4e6109f0e6a6365fac"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "b783d36b71905be1ec96aae0abbd0fdf"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "02ee149e68f400fdc00edb63750f583d"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "5a8740909e60161c85a5c79364a8cfbe"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "9aa292577a87d29f3fa2ad08aec1fb62"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "44cb2c162567dbbc01f61fa107464ad1"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "d56e770c5caba30b00fed334733a7ac0"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "f3a71475f747530f1df86fe4cb94fb6a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "7b249da9e75ebea3b255559844ed9136"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "abe6259c6b75142bcf1186b5a5e66ca0"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "c19daeb84efbcba79d91cdff70ab6333"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "2edcb072c631127171b8da638e6239fa"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "42ca7bb6611b3fe8f97bcf082e7c31b8"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "07905075e3383ce56b7d8f00ccc70bfe"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "41575ba70706b8aceb059daf15a93389"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "20f44787a3b5654a3a5409d2ea030192"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "dd13e3d530499d625b2c0c5248644bbb"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "cd09840a649c928f329ca2a714399f54"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "49293ff018f0c7c7bdb16afc70b185ea"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "61c679feff57153e4caf3e53195d95e5"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "36d7035201ca29a8c7f5506a310537bd"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "1f5811aa84b0d6a1767ee2aa5981c95c"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "dc994798afb84731ac2855451296cc2f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "34b10da60b06aa39d028800596bc204f"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "15e75d63a7ac3c4a899b054c84f881fb"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "b68302aa53525ba0676841f464a58440"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "e078cea6f78c9b9f580e408d3c54f313"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "8d41afebb97287b36baad5ca99fedb10"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3226778a6f414df4111e82e170adbd54"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "4a5503ee93facf5a43401a368e6931f1"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "0fa77c4dfcd32a57fd3eec022435f43c"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "1fd32beb84849e497a9b32a7b475c3e0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "8b4f3819855c4d2714367cf1d6d8dd32"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "367c5e2758f94fee98eb037bb1a1f716"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "7e2746f84cda9725f67bb08f5cefbb51"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "6f486d3f5dce93f1f17a0d9c26adf872"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "706f6929cf250721f6802aeb2344fb9f"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "c86e3cf261ebeb671ce9b27d8ec05248"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c7e3e2e01d0e427528d676c78aed107d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "f3dde316f2674d9a7f443b4510cc7870"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "dac7e4fb551b40b221b25263613cca35"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f0069ed50d712f26ac626c1c296b548a"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "8cc76dd4a9304f7de7b540f3f0147152"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "f8aee8dbc4cf15ccd70e0edcaa48cccc"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4d9c3869bb3ae32507eff89a5af1cfc3"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "45b4c4073c26e77a4d8f5e892b3b43ac"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "b5ef6ad1e056edb09257c34e1940c0ba"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "36e2386821393f5a1c7abd96b9144b8c"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "5d87755203ed81ebb5a1ad7e13f4bdb0"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b90c0b3b341119b99ba027df3aabb773"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "b19a4f29940e0533837bdd2aa878b6d1"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "a8dbd3437289f69db03e9035ef55a3c9"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "c589830ab36097ed8d385164635fc89e"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "8d0932de26fa2db473c09f7ff7d46f03"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1ed6a58ccb9935828207fd4218b094e3"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "a6a623a31259b2e3b3712c4209e0ef49"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "a03710d5b3323e4856c29716939d84e2"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "d0e767619ec659bd928ef6992c547eac"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "4fd79f47aaa122175e667652d2ffd0f4"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4f23826c52bcdd4b567d4bff31f98b27"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "4be255f2dcd0f9100bdcd8177b6be99f"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "971a5bcfd40feff8487ca33ed4636fce"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "8522a88e2b6901817dc10d28623e6d71"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "43af660d9d0d7c5dacf4a67ba365cd76"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "283cd140858410ff8c59ab234724f0b8"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1606c704eae94f2405982d8627df0c38"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "a427ec2489a2f44983637b0d9d850816"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "60b590fcd8ba86c1b379a6fd2e10a525"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "0b0ec41823401caa770efbb3ee30e469"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0a71a3f6b06bcfddd2b5166be9b3b015"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "825ea9617aa8b8f3d731f3f2d66c6b03"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3a6e95e4ccf2e4b85291ea33af4f9ef7"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "cce449a332aaee9ef4d77c20d6c51933"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f7cdd511eb7f89dbbe0901ab01c22cd9"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "a3ec4a0adff827b24b4020595301fa1f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "788ddbf5066be536c0514f36acabbcc0"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "464f5b2c48077cf76e1fd16e20819f6c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d6591e5236def3ba3026b856a513ea8c"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "5f3c1e9d42addec410821a4bd488d409"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "26a8ec1f23a409c59fdb1aa409285d58"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "2f582715b8b40e40eab1c75e03d01a5d"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b2a6be62fa3c831cbe09a23ec26a1186"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "d365c04814f3b1148d5f91e219ea8a60"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "5da6d36fe8351af3697d87956ef635ff"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "9774a677fd72e430d2900b2a6ff4f230"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "1a415ecc170d67a425de9ac075ab5489"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f3ab438efb37d96133e1674e398b1c28"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "097782c4d1b9178878cc250dfe57292c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "59a162c601039d5b1168b0588b6c3a76"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "3f2ac4895fb85803439132d3cf40d7d5"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a071d3dd72418351bf2479b2e6fdf209"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "4daf0d8c155443c48b2af10972edee41"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "25048a1d0c9c43ebb571e839dd6faae5"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "0f7d4a6f8f7990c0c27dd97e00e071d6"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6dcfb1078d5087e2481ebcaad6c62741"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "4e753357037f6bea3c84bd14a0dd7046"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "23afcc92f28276c0e39e02c6aaca6850"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "530458ad6fd6acebd6db0e82f108650c"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "54eac5364ff55ee694727403911b74bc"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "1bda66435357541902340bd4ed3403c2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a532ca37bda4551bf092d01ead94cd2f"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "1bf8593d1fb87e998047bedf790e4bcb"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9af30c97c70032e8943967be2955353a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "abed0058234f9fcb7f78c3ba4106331b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "596461a04a865aac67916e526917fbb2"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "322f7ff3007f507dc7a30f64e5176f77"
  },
  {
    "url": "tag/django/index.html",
    "revision": "9ea4268f60c6dcb0ab82c59c3eb5db75"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "38a203e14b075c511913c258c3137615"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "c1ee6467aab084d847b7b2603eddc20c"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "5a7cac4be2f24841cf4af53d3d44e84f"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "82e397f0c5319a0fac4ff181da8e70a0"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "148a6aafb33f412eb77d59f43acf8b90"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "7cd2285ef90e1d2fea2ad58b8cb04f63"
  },
  {
    "url": "tag/git/index.html",
    "revision": "15e8c649d4f58185bf3e6625667c14e0"
  },
  {
    "url": "tag/github/index.html",
    "revision": "71ad6dcbd9427d7f093c8cab48e86808"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a5e93a3197fc24028c3911fc1df6e6ff"
  },
  {
    "url": "tag/html/index.html",
    "revision": "99a72b38982d0eb5b65e71f478ced296"
  },
  {
    "url": "tag/index.html",
    "revision": "729019bbfe385e017145001a5df88660"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "102a329a8ef2b39110a84d6ca340d9fc"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "e7ad945cd21c6bcaff8e28a8de52dae9"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "c496642e70877f4f668be7beae764cce"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "d819dcd1490f4bd3342eeab8b1e2d5f1"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d724a26487aee0e8f453b0ac2ddb758a"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "274a7e959df3340e8dd9343b2a907b07"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "ecbe34bf3f81bbb08043532f2b32639c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "ce310d8827165481e475390c302c8edb"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "f564a2271b1cbe5dc88b9a56bc714d47"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "472adb993723c98ce498b30dfc69ba73"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c3df1b4d981c1ab66ec9f46b8b13f6b0"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1c65cb5877b58738d6fea93ffbe676f3"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a446c57d608e994a5fe16172e5006222"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "07d859a2c235d86ab96236a2343d465a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3be98844b54b72175060ea1205ee371a"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "eef3d23bbf6d7458e4bdd3340ad14b53"
  },
  {
    "url": "tag/read/index.html",
    "revision": "95f250630e12523a87b38dbb2ed873ee"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "70d4d8b3f62e47f22a54a5147d2cdb7c"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "29aad02ba26c269246b4868c310c8cb5"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "364365446c3e9d85636dcf2a0105fa77"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "49999f9c247e9a7e4f183ab3da16894d"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "d845c6aba518e21b1206b3a9ed0cd93d"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "495a9d6e1831479a3209ea5f25735f2a"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a607c1d0211fbfa4e104d2d812977557"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "50016ebd145af5297f0f2d3d0753538a"
  },
  {
    "url": "tag/swift/page/16/index.html",
    "revision": "98d149ee9551ed26ea52ef8d11c60ca3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "b98e71db458c524e01707a8f19ae814e"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ec3918b4e622bf3cf63038e1d1a39cd5"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "a7668410d1d7617dde21f4bd9ba62862"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "1ef2d4ff5e3e483c17cf4ae9f5e750a3"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "b60bde1eb2b5e65ba2b92752941a8b2a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "1b1288d89c7f42301bdf3f982c470312"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "427d4f969ff1fa348d4eb66170c2ed06"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "e31d6b51a2465cbac5213e21511f4b25"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3eeedf8bf074359832efaf6e2950ecc3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "dfb94dfdc6ca2567b82e3aeffdc677bb"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "1bf799c1df495ad491268c16eaa10255"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "8ac7149be3dc2053f8d805aa726551dc"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b299d039702f8f46a0493d78e1f4d1aa"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "eacd0573a63d4dbbc6dc10b23783b05d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "5ddaeab795388a23f684fbf90c503504"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e7f2dd5054d381951166d8c86eb7f8f3"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "bc706a018ff1da71ffdff5997482364f"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "46c2a1d51732c58d221a84242623c8de"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "ccef0d43ae94127091f1382a1c632ec5"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "1c533419214110dce006ed0df33d1f7e"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2ac8a19265be9fb0d9cfe88a17f47c83"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e9ad7e6bd697f613f2a78eea16fd7950"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "944ddd1b083429f4df2fd4ca0c59f426"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "a9e3202fffcd55707bd5d9fc57f3e016"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "9fe771a7cd6210c3d043395c71049f83"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "10a45a2034346d07f83cead3c207d1b0"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "82982ea34a2d7cad5a4774fa7021f72b"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "1620a4a6cda3719958eccda71da8e6fc"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "a288f5eded9167bf148df7e8de1e1da6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "e0fb684e534c3a028ecc105a6c251275"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "14839c245f3c7c387ac561cb1396666d"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "4da3f6516f2c82049e1c63b2b385a770"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7c8f68bf7bae0cbdb36db67f75f5b96e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "a9df7429abc2052173386989a162e1d9"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "9a18a491f3298ac31ddc364f159fceeb"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "cc84af1e12ccdad8411542d001804363"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4073a5ac5340a263a18ed0f36f524ff0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3e81254d3cf176c3682b9cd34b5b183f"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "9382b5001cf78f986abea77ea527c940"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "da5be1481a9350263ccb2963eec62a3d"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "717b091388d4734313223b0c7ab18957"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "23af9a92ec3ab6878dc76f6de66e39e9"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "38565b394020e4e4d5c140163f569b95"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "e9c6336be7cf7ad2a9fbb63873b548c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1cac56dd091bf1ef1380a1450d2cb66"
  },
  {
    "url": "tools/docsify.html",
    "revision": "ae8d5f8b390fe0666e2289eea12e1918"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "be1f438534092447faeb02213c4b3573"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b6ce4711559949e13a1f7ca0f61396f9"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "8f3ad2143c202b2441ed631b054c9b20"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a0f82aaa37d880eacb59700eb5bb9f5d"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "452ff8def679e26108587b35d8dcf1ee"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "ae98e5a82b1032776b839a91b7bd0708"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "ea44e882448e6722f0a459e7ef393b6a"
  },
  {
    "url": "tools/html/index.html",
    "revision": "7329987a61c488b82fd270f1d34220cb"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "41f472b1ea97ae507326f18b24e2f5fb"
  },
  {
    "url": "tools/note/index.html",
    "revision": "b9e0548b1bdf579180353fe337e8ad3f"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "977de3eb95b54fd4db6d64218b5f831b"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d428a38ce60940ff3970a8ee7573ed67"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "468bd3d0e8e34baca6e6fb84da1a93c7"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a47c97b0af571acaa50bed14044702ac"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "1df705f5237aef5f627d74c5dc38f553"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7f6408e0fd614c652bf5218b5b6623c9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "972023a953ffadda09521e6f248ad552"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "35264348265b53c25ed081bcc2c113e6"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "3e73e05c6a0ab38c9a4d4998fcc7cec5"
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
