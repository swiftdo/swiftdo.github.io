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
    "revision": "3a37ce41c7b8c42098d49c4ff7bb9bad"
  },
  {
    "url": "about/app/index.html",
    "revision": "891552edece86ea2fb8117deced1ee2d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "70d9ab6c0647f44b552e77950b2e5678"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b2f237a30e72ea4fe3383dc04328cf26"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "1501a3a44a67857476f26bdd3a25ecdf"
  },
  {
    "url": "about/index/index.html",
    "revision": "8b05796cce57df0d414f1b0706a79b2c"
  },
  {
    "url": "ai/index.html",
    "revision": "5ca952cd680dad1cf565d5bbf9440e76"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "a5b97f3f692ba38bace69eb6e634044a"
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
    "url": "assets/js/10.d9d3a525.js",
    "revision": "764e2f98839cc1f280a9bb16b817cc25"
  },
  {
    "url": "assets/js/100.96802803.js",
    "revision": "3f216440f3f709ff078c61721d0cc206"
  },
  {
    "url": "assets/js/101.9c50a68f.js",
    "revision": "1c5072a6f80f549758dd272c03e9ba3b"
  },
  {
    "url": "assets/js/102.03fbdec7.js",
    "revision": "da845cb6d084e3540903bc3e8fe7b638"
  },
  {
    "url": "assets/js/103.9717e096.js",
    "revision": "3d42b77969dbba2fc1d90f3c70f9c557"
  },
  {
    "url": "assets/js/104.53192936.js",
    "revision": "98621b73793f250333fc1d870a5ff78f"
  },
  {
    "url": "assets/js/105.03476afb.js",
    "revision": "ec52366fc9d89dd2933b39f32590961e"
  },
  {
    "url": "assets/js/106.d0c083bc.js",
    "revision": "ca25526b0944f640cd95eb9a16f86c32"
  },
  {
    "url": "assets/js/107.ec88eb9b.js",
    "revision": "b097285db9da16f26330b395633e5d95"
  },
  {
    "url": "assets/js/108.3b1e358c.js",
    "revision": "b25ea9fad8458409867bef31bb9381c3"
  },
  {
    "url": "assets/js/109.b9bfc19c.js",
    "revision": "0ece66cadf80685af7fb865bf45546de"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.8f2e475e.js",
    "revision": "c2c1cc6f4b6a0b77657d1e12b7dd8cb4"
  },
  {
    "url": "assets/js/111.f574c49c.js",
    "revision": "441bf7694ce4e0e0dec3ed941eb78bac"
  },
  {
    "url": "assets/js/112.ccf65892.js",
    "revision": "61931632f6c70713c8eff1e2def3e3b2"
  },
  {
    "url": "assets/js/113.4d055c3f.js",
    "revision": "e6c8ad509237378dee0aff9579a71672"
  },
  {
    "url": "assets/js/114.a2cfa0dc.js",
    "revision": "20076fd4e4e41f87e6f19c3853fd0476"
  },
  {
    "url": "assets/js/115.ffce95ab.js",
    "revision": "657a2aaf37701e36213772bc73dfba67"
  },
  {
    "url": "assets/js/116.577fae82.js",
    "revision": "720eb77f6f8112169ed28537c7d34456"
  },
  {
    "url": "assets/js/117.8c826470.js",
    "revision": "68f6fc1a71bdf722ad197d98ba810537"
  },
  {
    "url": "assets/js/118.b6456cc8.js",
    "revision": "08075b4e1412d90d0b45a76ead847ec1"
  },
  {
    "url": "assets/js/119.c483400b.js",
    "revision": "53851b47ebe8b503822d44a10e92cb0e"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.d96bbe4e.js",
    "revision": "9df3383e71d8c35c786f9f19bcc767da"
  },
  {
    "url": "assets/js/121.20ba89f3.js",
    "revision": "b10941fdd2879948f46db6f9d3777d1b"
  },
  {
    "url": "assets/js/122.4b30519f.js",
    "revision": "0bd849ce7c0932e2b6d109c215d781de"
  },
  {
    "url": "assets/js/123.2b63c89f.js",
    "revision": "02c8869a015674551e8513693cee4f55"
  },
  {
    "url": "assets/js/124.6733dc9b.js",
    "revision": "563c251607ed12f4d650ce0169d6e8ff"
  },
  {
    "url": "assets/js/125.1f5f88fa.js",
    "revision": "c56596ed6efdd1fef36b1ce3d19ae7cf"
  },
  {
    "url": "assets/js/126.d62a1203.js",
    "revision": "a9f814b463b18830ccf9e279687012a5"
  },
  {
    "url": "assets/js/127.ef7180fe.js",
    "revision": "7b5b45886497910c07e3d11adc17b53e"
  },
  {
    "url": "assets/js/128.b6711232.js",
    "revision": "8a8dc426aec893442acd1ff279b75476"
  },
  {
    "url": "assets/js/129.62039df1.js",
    "revision": "11c26113c79eaf8a0722dcf7999bdc00"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.72018f2f.js",
    "revision": "60c4f983ca8983b2dbba802f801e9b18"
  },
  {
    "url": "assets/js/131.9f735a92.js",
    "revision": "ffcf8b39662d6e3b96062116df1b19aa"
  },
  {
    "url": "assets/js/132.04f9d07e.js",
    "revision": "ea367e2e8dd763aa8d383379a27a1191"
  },
  {
    "url": "assets/js/133.33ea9f13.js",
    "revision": "25aeefd505448374aa2995f9722d991b"
  },
  {
    "url": "assets/js/134.79be8712.js",
    "revision": "1a064dc931cb41ced894fda0da5b902e"
  },
  {
    "url": "assets/js/135.9ebb9f2a.js",
    "revision": "3e309e88bb05b524f68970917bc4a694"
  },
  {
    "url": "assets/js/136.4ff90afd.js",
    "revision": "331602855fc051ab92610ca35e50aeae"
  },
  {
    "url": "assets/js/137.1641d7d4.js",
    "revision": "36a52e88314aee882e58c8331a291207"
  },
  {
    "url": "assets/js/138.a2fd2dfa.js",
    "revision": "f38b990bd896dac921f9693cff3d9d45"
  },
  {
    "url": "assets/js/139.2910522d.js",
    "revision": "e3ba8e60b412f7f5897009b10ee64e64"
  },
  {
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.822eec67.js",
    "revision": "851976282a54c805311b961a0b75c615"
  },
  {
    "url": "assets/js/141.4aeb2eff.js",
    "revision": "0f1e2a5e2bee5f1009e23812a6346083"
  },
  {
    "url": "assets/js/142.22794ae2.js",
    "revision": "6721677a44c646305a79be5a64b3e535"
  },
  {
    "url": "assets/js/143.956e6c12.js",
    "revision": "676cd4b16b44bc628cf572fd6f05065a"
  },
  {
    "url": "assets/js/144.ff0ee0d7.js",
    "revision": "efb122086251084afd2c35e1a0137d9b"
  },
  {
    "url": "assets/js/145.2c2cb6ab.js",
    "revision": "13307c112f5c3c861757e30f5b4cac06"
  },
  {
    "url": "assets/js/146.750b1365.js",
    "revision": "ed11bfab0ad066514f5b16f615dd155a"
  },
  {
    "url": "assets/js/147.52ac77da.js",
    "revision": "e4f2e0994e55a15636a0ae461ce097ed"
  },
  {
    "url": "assets/js/148.a77516cb.js",
    "revision": "a85cbd30a51d7f7d52bfa825382f651b"
  },
  {
    "url": "assets/js/149.e2f7a42d.js",
    "revision": "8ea54cd8b8169fddf8eea39455121516"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.9c5b58ce.js",
    "revision": "b7222b064f1e48c6569cfb234f870a38"
  },
  {
    "url": "assets/js/151.2a369d26.js",
    "revision": "be1e2e7fbde06f988bff7a368bccbd73"
  },
  {
    "url": "assets/js/152.d0977f66.js",
    "revision": "8fa24f23dc30722b2d67bf5f09f96286"
  },
  {
    "url": "assets/js/153.f4513827.js",
    "revision": "48a26ca84469b4937262fb51affcc757"
  },
  {
    "url": "assets/js/154.6fb6f351.js",
    "revision": "fbbabe5106d793168349b7618ad68218"
  },
  {
    "url": "assets/js/155.b0b8459b.js",
    "revision": "130180fb4fd0c7d36ee073b8522df2e2"
  },
  {
    "url": "assets/js/156.57105c3d.js",
    "revision": "1b69820840a549d8f6b9e2f7ded481d0"
  },
  {
    "url": "assets/js/157.1d38080e.js",
    "revision": "98f763a2b09e15503ac3972364f217a7"
  },
  {
    "url": "assets/js/158.688de051.js",
    "revision": "82091b6df4ca05e98f01b92cd5dbf929"
  },
  {
    "url": "assets/js/159.736f2728.js",
    "revision": "63753dac7a74ae49022a68ccda85107e"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.ad0aeeb4.js",
    "revision": "906a1d3ee7d84fd71e6f97882d39dacf"
  },
  {
    "url": "assets/js/161.c2a34790.js",
    "revision": "db453fd9e814ad365044b082f815ae9d"
  },
  {
    "url": "assets/js/162.aa543eaf.js",
    "revision": "f8d35ec2840f93dfeefcfb2fc24c2895"
  },
  {
    "url": "assets/js/163.11357aa6.js",
    "revision": "cd4990599501c1ea1198e922b57cfb70"
  },
  {
    "url": "assets/js/164.934ce5ee.js",
    "revision": "89aa91f0a5fd3a4244ac68f3342de580"
  },
  {
    "url": "assets/js/165.93baced6.js",
    "revision": "08e1f94b4aad0ae180b34e540ca5c9d9"
  },
  {
    "url": "assets/js/166.20bd5c3b.js",
    "revision": "bcb14a907dee19b4caef9ecb53d90ee2"
  },
  {
    "url": "assets/js/167.18291164.js",
    "revision": "f8dc905c2244c77dd5a057db392b6ff2"
  },
  {
    "url": "assets/js/168.735b556a.js",
    "revision": "c3462f2c4e08e962ecf5d6d63927a402"
  },
  {
    "url": "assets/js/169.f485c918.js",
    "revision": "1830f8ad7d9c6d5d6cc58da862dbf64d"
  },
  {
    "url": "assets/js/17.c5e8be36.js",
    "revision": "2f79f66232dfc6e4cf84ee95dc5655c0"
  },
  {
    "url": "assets/js/170.3a242a52.js",
    "revision": "bbd557c6a36ce51c832de49a5f331f37"
  },
  {
    "url": "assets/js/171.b9d23d84.js",
    "revision": "5c0049930763f8d873878f6c165c282f"
  },
  {
    "url": "assets/js/172.825359e7.js",
    "revision": "3870d47b937decd71d9acd0c547d6189"
  },
  {
    "url": "assets/js/173.17ff51b8.js",
    "revision": "67e1952ce7c60aba926182f4942d62c8"
  },
  {
    "url": "assets/js/174.33521af6.js",
    "revision": "7424480a947f7043fd40aa81fc4986af"
  },
  {
    "url": "assets/js/175.9e352618.js",
    "revision": "13ce04c2b5c48bc58afa742765296026"
  },
  {
    "url": "assets/js/176.60ca5dc4.js",
    "revision": "e19116d35a5faab4b948b779c874e221"
  },
  {
    "url": "assets/js/177.48f5400e.js",
    "revision": "73f5c84c28171446412bd71a52d60584"
  },
  {
    "url": "assets/js/178.0b094039.js",
    "revision": "8de79b11ffe9bad0810c27be4c3a14bd"
  },
  {
    "url": "assets/js/179.e33edc64.js",
    "revision": "e30779f8322c84c7347a47a376ad17b9"
  },
  {
    "url": "assets/js/18.117fa827.js",
    "revision": "3636cf20ef70c18f8e58c0e3f544d6eb"
  },
  {
    "url": "assets/js/180.917278e6.js",
    "revision": "02ebc206950207cc7dcd61de5980b120"
  },
  {
    "url": "assets/js/181.3123c517.js",
    "revision": "f668785b255be982f349cf39332a3d4f"
  },
  {
    "url": "assets/js/182.ba6de102.js",
    "revision": "e05675d1168c4c35176a88b8359e387b"
  },
  {
    "url": "assets/js/183.7bb06a1c.js",
    "revision": "c9d10ed5d0eaac3ebef9093285944615"
  },
  {
    "url": "assets/js/184.f237a7ef.js",
    "revision": "000351d32028801945e843986e27961f"
  },
  {
    "url": "assets/js/185.3913b92b.js",
    "revision": "ea8e24acd52376c6d9a2f7c01770b3a2"
  },
  {
    "url": "assets/js/186.7cb5764f.js",
    "revision": "aeb159c5522198eef5ec8fa6271587a2"
  },
  {
    "url": "assets/js/187.c3609cb5.js",
    "revision": "97f23b850bcec9e2bca1bbe2de6176f3"
  },
  {
    "url": "assets/js/188.36f7e2b4.js",
    "revision": "39308783237726a55240273c2cde4d1a"
  },
  {
    "url": "assets/js/189.f770c158.js",
    "revision": "83fadf8c892aeda9a24db82ea208a5b5"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.9ad928d7.js",
    "revision": "2aded9b0b792642d67ca5404dbc2c693"
  },
  {
    "url": "assets/js/191.a0820935.js",
    "revision": "6d9b0c126a9fd15e2ef8e0f3aadb3a1a"
  },
  {
    "url": "assets/js/192.f17bc758.js",
    "revision": "3d77efbc2da71e976a759dfe7df796ec"
  },
  {
    "url": "assets/js/193.163c6f7a.js",
    "revision": "f37175dfe4511e9c585482a13d5262cc"
  },
  {
    "url": "assets/js/194.cb54d208.js",
    "revision": "dce0f7e5246e8a431c4a3c414d6fdc7d"
  },
  {
    "url": "assets/js/195.fb59e2c2.js",
    "revision": "b67c0320eb090aebc79969174dc10174"
  },
  {
    "url": "assets/js/196.966df5b1.js",
    "revision": "5062df15faa00c15abc92a09523b55f5"
  },
  {
    "url": "assets/js/197.8a868010.js",
    "revision": "863e7af7bd50a3dfe7b2dee0b38e308f"
  },
  {
    "url": "assets/js/198.0895c77d.js",
    "revision": "2f7fddd9f48e5b52901dc3b8a433dc27"
  },
  {
    "url": "assets/js/199.bea8f3a3.js",
    "revision": "6459481008256565b70a7e3f81203ecb"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.20ce88dd.js",
    "revision": "3ffdf29b8c4b0bd2756733df503c4d4e"
  },
  {
    "url": "assets/js/201.cf73565f.js",
    "revision": "e4bce7c6ce3dd1257ffe5ceb642c0c24"
  },
  {
    "url": "assets/js/202.c7caffa4.js",
    "revision": "fb0c476b1d1c256896cf7c0297573081"
  },
  {
    "url": "assets/js/203.e64482a3.js",
    "revision": "5e140812f1d0fee2c574086eba9a85b2"
  },
  {
    "url": "assets/js/204.592fe109.js",
    "revision": "43705df796faa2a2b20f93e2f70a40c9"
  },
  {
    "url": "assets/js/205.de4637db.js",
    "revision": "ddbf4410a6155545c3b63e7f2bd471ae"
  },
  {
    "url": "assets/js/206.60cd2451.js",
    "revision": "1795f0a7a870eebbea69a16d3e3df5b8"
  },
  {
    "url": "assets/js/207.518d0bb2.js",
    "revision": "2f4280d3549529c5ebd81327338f3523"
  },
  {
    "url": "assets/js/208.b45e6f2d.js",
    "revision": "25efcf9ea402237cff4d7a5a7c949ea0"
  },
  {
    "url": "assets/js/209.13f343c2.js",
    "revision": "1f2f34fbb89228ad9a2188a6a1b6e7ee"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.5174ead5.js",
    "revision": "85c91a9eddae4572174a0449b5b8adba"
  },
  {
    "url": "assets/js/211.40f8a82a.js",
    "revision": "39c0daff2cf210024a97d5eb1c57b198"
  },
  {
    "url": "assets/js/212.54f94bb2.js",
    "revision": "66e3815a80a5831a7e2374d8adbeec23"
  },
  {
    "url": "assets/js/213.3182b168.js",
    "revision": "7a6e78381c8fd3472e58a297fe5e2960"
  },
  {
    "url": "assets/js/214.11fffab8.js",
    "revision": "157cc091d6a4f7270f5dde09b7918072"
  },
  {
    "url": "assets/js/215.4f4ca991.js",
    "revision": "efde2f24e973a0c54049cc3f2efdf537"
  },
  {
    "url": "assets/js/216.ecc9310e.js",
    "revision": "003f79ec321c5c7709abe892458ca62c"
  },
  {
    "url": "assets/js/217.699eac8b.js",
    "revision": "6581ff98948b6b8771e7949721f8cd1b"
  },
  {
    "url": "assets/js/218.498ed12b.js",
    "revision": "34a8b149c41b0748ce55affb75bf3cc4"
  },
  {
    "url": "assets/js/219.d9bb70c1.js",
    "revision": "60c59e59175f5a4221cb29bd86515004"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.09229fce.js",
    "revision": "b4fef4ec17029aba12629aa24388558f"
  },
  {
    "url": "assets/js/221.f2091a8e.js",
    "revision": "37c90e79aca40591cd4ac2dbef68f407"
  },
  {
    "url": "assets/js/222.d658f49f.js",
    "revision": "fbdd6d389aae77740d68b1432dd1444e"
  },
  {
    "url": "assets/js/223.fedad3df.js",
    "revision": "567a3030db677bbb567a8c8a1bebae62"
  },
  {
    "url": "assets/js/224.01fd05b1.js",
    "revision": "c421f01b4ae94e1c00b8cc973940ec5a"
  },
  {
    "url": "assets/js/225.18958ab7.js",
    "revision": "5125c48a63a3b7302be5d6022ca20f7c"
  },
  {
    "url": "assets/js/226.d12b3faf.js",
    "revision": "09c9e207364b308b23de74d2a07ac9e8"
  },
  {
    "url": "assets/js/227.507a8627.js",
    "revision": "88bb075ca4caefb7db8cb58f497c0d7c"
  },
  {
    "url": "assets/js/228.61d89c21.js",
    "revision": "0b2d69cfd75ff07877bc876dd7873cf5"
  },
  {
    "url": "assets/js/229.70a77938.js",
    "revision": "4a6543008647ef68b3a76c2bba2d4e4c"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.5335052c.js",
    "revision": "e64d6db262b72c2cc8189288bdbc1f76"
  },
  {
    "url": "assets/js/231.dfd626f4.js",
    "revision": "ad5edd1c15f8fa74d8b1ec2dc0518ebe"
  },
  {
    "url": "assets/js/232.d1cdd28f.js",
    "revision": "cd2153dfb07627ae2bb52b56dd7f0703"
  },
  {
    "url": "assets/js/233.2eaf1016.js",
    "revision": "d7db1ba27cbc36059661b45132a2b02b"
  },
  {
    "url": "assets/js/234.cc2575c8.js",
    "revision": "d76278be581a90395ae6946f3fa82deb"
  },
  {
    "url": "assets/js/235.0256b285.js",
    "revision": "d210c03a61f628f61ce9a623c4ade90e"
  },
  {
    "url": "assets/js/236.04c99c0d.js",
    "revision": "90bd1933242826b651ebdbe74d4ba67b"
  },
  {
    "url": "assets/js/237.629902d4.js",
    "revision": "25c15e5fd86de71ca9b96e4085f6cfe9"
  },
  {
    "url": "assets/js/238.084c87ca.js",
    "revision": "372c0c834cdd6f470d44803d4700f64a"
  },
  {
    "url": "assets/js/239.6d3d4913.js",
    "revision": "73ded3871c719bf1e7bd1ca17cd1caf6"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.affe1b7e.js",
    "revision": "c4dfd1b337acd03d5576d5143c3ade7c"
  },
  {
    "url": "assets/js/241.d75b2b16.js",
    "revision": "bc67a8884b6f2343811b359a981c057d"
  },
  {
    "url": "assets/js/242.b16d7acd.js",
    "revision": "ac3348fa9ee16baa27c199253ee2628d"
  },
  {
    "url": "assets/js/243.e2ee157e.js",
    "revision": "9662234b91d13cec544d653a22912b8a"
  },
  {
    "url": "assets/js/244.eacbb657.js",
    "revision": "02fa02cb768d65617d3d27e9f1a53dbf"
  },
  {
    "url": "assets/js/245.ee9184b0.js",
    "revision": "4142e4435778e360d173dda62b35b9d3"
  },
  {
    "url": "assets/js/246.dd5b1696.js",
    "revision": "28f16233dba4019ae789a9f49bdaf5e7"
  },
  {
    "url": "assets/js/247.030bb9ef.js",
    "revision": "fc60804f211fa025831dbeeb2e681c59"
  },
  {
    "url": "assets/js/248.417f5144.js",
    "revision": "9fbb4baee3cb36da717f46c921c8ce3e"
  },
  {
    "url": "assets/js/249.65fab309.js",
    "revision": "1b2f71843448c27faf8250347e5a300f"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.a2cd47ec.js",
    "revision": "790d19ed3dcc3effe74c93cd2771dfdd"
  },
  {
    "url": "assets/js/251.cbaa1d0b.js",
    "revision": "c3cd5d31c369f469f489cc4afdea3cb7"
  },
  {
    "url": "assets/js/252.38ecc513.js",
    "revision": "65138419ea1725d6101e6b37e23125f3"
  },
  {
    "url": "assets/js/253.fea79857.js",
    "revision": "3417e8a597892b73a1a319bba5d1f9b8"
  },
  {
    "url": "assets/js/254.aee046ed.js",
    "revision": "95fa8046ac2864805b3d7b140db3459f"
  },
  {
    "url": "assets/js/255.a6d0fc67.js",
    "revision": "556dd2d813dd220fc4c7f21b463d9561"
  },
  {
    "url": "assets/js/256.1bfc3185.js",
    "revision": "444d90ec480c90eabcd9dee1a91b2a8e"
  },
  {
    "url": "assets/js/257.cfa55f66.js",
    "revision": "1810f1f81e4fba695b1e943c3d7b7fdb"
  },
  {
    "url": "assets/js/258.c3dc2876.js",
    "revision": "b74a1d3ff4cf4ffa62838907702be521"
  },
  {
    "url": "assets/js/259.a2882eda.js",
    "revision": "c7fc000e453f24d79585af05bd53f7b5"
  },
  {
    "url": "assets/js/26.dda6be16.js",
    "revision": "64fd2fc6972afa5e1fb047801250e702"
  },
  {
    "url": "assets/js/260.637a1164.js",
    "revision": "e86d91471570e4f0272eaed4767e244b"
  },
  {
    "url": "assets/js/261.f9615c3f.js",
    "revision": "4dc26cddc203a7caa1c798e4912e73be"
  },
  {
    "url": "assets/js/262.f5cde890.js",
    "revision": "18f52176baa08685fa184f1e4a72ad54"
  },
  {
    "url": "assets/js/263.d4787bed.js",
    "revision": "cb4a42fffafccd987a2357706e9c0aba"
  },
  {
    "url": "assets/js/264.4be3acbb.js",
    "revision": "6783891a17bfc796fbe390171aa9937f"
  },
  {
    "url": "assets/js/265.3110be62.js",
    "revision": "3a915719c12dfd76c8a8a647af6d8254"
  },
  {
    "url": "assets/js/266.41e4655e.js",
    "revision": "a754f81a6754159bed645aec80ec8f05"
  },
  {
    "url": "assets/js/267.db3a29cf.js",
    "revision": "745c1d0a2c157844756dd051d420cc3a"
  },
  {
    "url": "assets/js/268.ad859e23.js",
    "revision": "cb26caa2fee6be97ede40ba905c5c5db"
  },
  {
    "url": "assets/js/269.e2b14f71.js",
    "revision": "3f77e13dfcebf7fcfe31e379f853a40a"
  },
  {
    "url": "assets/js/27.3905d826.js",
    "revision": "3a1548c0241df5d2ecdfbc158851736d"
  },
  {
    "url": "assets/js/270.befdde70.js",
    "revision": "0aa5283f1b31d375ce484f09207acac3"
  },
  {
    "url": "assets/js/271.48fa633d.js",
    "revision": "3e1bcaf6da4cd9b569626432e05ed42e"
  },
  {
    "url": "assets/js/272.248248f3.js",
    "revision": "6ebcc40ffa3441cf2e07f833ef3f73d9"
  },
  {
    "url": "assets/js/28.1d321b85.js",
    "revision": "ebea04baef7a0fd7c5a2782610599baa"
  },
  {
    "url": "assets/js/29.b3a2a4a4.js",
    "revision": "b02525f7fc85a6dd045ad4ea65a27114"
  },
  {
    "url": "assets/js/30.806f0e31.js",
    "revision": "2c1bbb64a70596b49db8101281ba6775"
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
    "url": "assets/js/34.72be6ef5.js",
    "revision": "b475580d4fdd904aee2fb6ed6b80e3e7"
  },
  {
    "url": "assets/js/35.d5081ed3.js",
    "revision": "0dbc93d5ff600f987b42e2a66042c22e"
  },
  {
    "url": "assets/js/36.fed85ca9.js",
    "revision": "3c48c254685b20bf23e89e69b6940eaa"
  },
  {
    "url": "assets/js/37.b86dd58b.js",
    "revision": "a2c979887f1e6ea6dd82213455aa5726"
  },
  {
    "url": "assets/js/38.02dda1f2.js",
    "revision": "8e5f297a369b87a1deb8f3e1b1d4f185"
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
    "url": "assets/js/40.dcf15fe8.js",
    "revision": "4f72e1918ab0a7dd276b7e7b990fa337"
  },
  {
    "url": "assets/js/41.cb5700fd.js",
    "revision": "7adc9dba039ed167b888cbf070bb43fc"
  },
  {
    "url": "assets/js/42.e78db814.js",
    "revision": "55d55af0ff73bc07a2ed7b8ce61309e4"
  },
  {
    "url": "assets/js/43.26c01561.js",
    "revision": "00bfe55f2c337d861133603bc7761160"
  },
  {
    "url": "assets/js/44.6b429a17.js",
    "revision": "e28bf2f741982aa8cab4dc967e182781"
  },
  {
    "url": "assets/js/45.d60760ed.js",
    "revision": "38277da509e1053963a6f64815bf2666"
  },
  {
    "url": "assets/js/46.1b49d0cc.js",
    "revision": "375cb0a2146b93d2a483e9da4418d3d0"
  },
  {
    "url": "assets/js/47.0ac0bfce.js",
    "revision": "7eb7db0ff98a386b67d20542e2bb6344"
  },
  {
    "url": "assets/js/48.88acaea1.js",
    "revision": "125ff884b49d5dc6169a4bd0e65c11ec"
  },
  {
    "url": "assets/js/49.b8894e22.js",
    "revision": "56d298c57f3e743b3d79295af7c02170"
  },
  {
    "url": "assets/js/5.8dbb65f7.js",
    "revision": "48a98c4526c2d879c560cd6cfa0f5b07"
  },
  {
    "url": "assets/js/50.806154f6.js",
    "revision": "655db1b3744a890cbe1b5d8241ec49ba"
  },
  {
    "url": "assets/js/51.da8af6b8.js",
    "revision": "40b12615c2db3cdc507a35f716b8e429"
  },
  {
    "url": "assets/js/52.4b3c6f99.js",
    "revision": "345ab19ed4cfda55955bfe2d945e178b"
  },
  {
    "url": "assets/js/53.f4ce976d.js",
    "revision": "c2f702223e3df3f201543d42cc6f1b63"
  },
  {
    "url": "assets/js/54.027762a2.js",
    "revision": "ec7caf1ac60f7ff4187f134ef6db2439"
  },
  {
    "url": "assets/js/55.d43d6c44.js",
    "revision": "6c50a9580c0763c86fe0a23f099989ee"
  },
  {
    "url": "assets/js/56.540e07af.js",
    "revision": "58e2250cf17d9e1dc74b3c92dcb045a9"
  },
  {
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
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
    "url": "assets/js/64.d5d291c7.js",
    "revision": "d8fe05589ef7ce88ee9e8a74e5437efc"
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
    "url": "assets/js/73.3750484b.js",
    "revision": "bbcccaa8d4a8f2d259a706257bb46407"
  },
  {
    "url": "assets/js/74.4e638b2c.js",
    "revision": "77a9325d5a9588539b638fd09174fe8a"
  },
  {
    "url": "assets/js/75.22e98855.js",
    "revision": "19fa422b7dc5bfe95dc68cf30865e7a9"
  },
  {
    "url": "assets/js/76.5c3291d4.js",
    "revision": "319094fd913a0c8e5b7647bf691635d2"
  },
  {
    "url": "assets/js/77.fbb0d65b.js",
    "revision": "9fb708902a75a7d2c4b27af13b75e5a2"
  },
  {
    "url": "assets/js/78.ba26b6ef.js",
    "revision": "78b71fdcbe6a9e0e300c04b923420f65"
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
    "url": "assets/js/80.07c567f2.js",
    "revision": "083238c0b27b14d485d2bb7c1fb2045e"
  },
  {
    "url": "assets/js/81.5dd17bf7.js",
    "revision": "aae0ce75a696f6b52ee76e31a4214d56"
  },
  {
    "url": "assets/js/82.8e9b8c83.js",
    "revision": "483f792d6d23924ce72c5a206a0cce1f"
  },
  {
    "url": "assets/js/83.fdc2a85c.js",
    "revision": "3e9da65bc4576b3b596052b54766da52"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.56311c19.js",
    "revision": "88b87671932d87f5768407426fccdeae"
  },
  {
    "url": "assets/js/86.cb74bfe2.js",
    "revision": "c361064cb375b05a560d166566c2b382"
  },
  {
    "url": "assets/js/87.e9ba6696.js",
    "revision": "d9b55cc9e796692e9c5f2761c09e895c"
  },
  {
    "url": "assets/js/88.adc30bfb.js",
    "revision": "2863a0424fc3e3ab101e900d4ffc382f"
  },
  {
    "url": "assets/js/89.2653c7c5.js",
    "revision": "860c806f31552029e339cc33da3ec3c1"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.b70dbcd5.js",
    "revision": "bc6b02c692eacb05778caa169237c920"
  },
  {
    "url": "assets/js/91.f72738b3.js",
    "revision": "9d358011c58985efcafe39f6f6be7f17"
  },
  {
    "url": "assets/js/92.fbf3e2cb.js",
    "revision": "514a3334d7418685b049c5b88a3d6f41"
  },
  {
    "url": "assets/js/93.b2b1e3f7.js",
    "revision": "313f3596b7b5a2f9905b6faedac1e59a"
  },
  {
    "url": "assets/js/94.4fb352e5.js",
    "revision": "4ab11f30276c9160bf9b2d808ec2c1c8"
  },
  {
    "url": "assets/js/95.cbb7e9c3.js",
    "revision": "70bde62625a7b3e7650758db06b41ae8"
  },
  {
    "url": "assets/js/96.5f56e00b.js",
    "revision": "ee07d5eaa6816d7210f44af3cb2f0f90"
  },
  {
    "url": "assets/js/97.7c7568ad.js",
    "revision": "b36b0db0b13dbb3794e83bc46e3a1fce"
  },
  {
    "url": "assets/js/98.7d9459c6.js",
    "revision": "a00b363c0ba372e188596efebbdd9fb9"
  },
  {
    "url": "assets/js/99.ca772a8c.js",
    "revision": "8aec8c54811c07ee13eb932019162982"
  },
  {
    "url": "assets/js/app.51a8877f.js",
    "revision": "f82a2c8a9a724810df2eab5503e08650"
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
    "revision": "40a662ede5f7e4c26136f1065e8bca98"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a20a8429fdcdd6049f1666f0de9411c0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fbb6f4af3fda2985720f7688ff380bb7"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e08674c068f4bf2cb9ab9f65f58c28b8"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "817858964e665e4630e80aa27108bbff"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "40319cf38fc44a5e7bf65c0bacde490f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "739f0ed57324b4180a0a4d99ccb17c78"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e242bfc0f410b533ac04b1cbb371fc22"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "9ac7ab5f59f1018897dcaa3aa554b1a0"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "02e51394ac82d1e8cada4d446f683c06"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "56a5ce77a0ff200b915aed2e31b23d40"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "f0707469d86de4abc74e28c50c7c77aa"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "80cff209ba0764bca1a89c916edf26b6"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d5b121f604fba15c61acc3635737afc7"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "6bafd6ed995edfc534d0b5d28abfc75f"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "552225759e9faf6d8372b91940b1d36a"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "089702ce113874924983860b94e3d4c4"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "5414351087b21f7eeb4b40e51a63d4de"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "035782d1f56e6c06cc76854edba97130"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "741bd60df58246f9467ca6bc483aea50"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "d6bcaa47914610a9ad68ba71fcd10de0"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "61350f70e16c31f7b2e21ecd07fa6d08"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "5b734be9477d3fd640cc9e2783c520d1"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d76c5e329ecea8268b439ec20a03a0a9"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "104b1d616956bfc1843354c3c117e9c5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "cfbcd5f54add071e9442d4e574a56fa8"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "4db4d239674617160040c9d662053515"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "0b3674a77de604e1a5ddeaed801bc8b4"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "a3667e65944a0341e9eb7d15572667d7"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "c82fa5877da5cdcc409a0384a2931cf2"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "65a8982eb0ad0c13b7dd65eb5fcba898"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "6742cb7f8ffce3bc559bb478de4302d0"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "d11c33fbb7bcbfd6dc4f198af9b17f5a"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "caa4faf056e8412324a29563f14353c6"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "d952d85fcd6e9354fb8cfc05065e2fba"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "ceebb89fee4eb9458cffbc223429386a"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "80acb00e6e78a3972d2a3622658c709b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "c2c15b0bb75171c1611ba2b837d7f59d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "6d64d99f955ab9291d6701b049ed804b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "9d1aee459515a685b7fa7d193efd12f4"
  },
  {
    "url": "book/index.html",
    "revision": "06ed1c23b2f50b86e0d9d545f011afcc"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a28f1b5aa270c575f73195a03c355567"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "2dbc953fe4002a5ea71029b16c6366cb"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "0074fcbe32b107f2127c59e9a93e0b3e"
  },
  {
    "url": "c/audio/index.html",
    "revision": "81c1f3e202c0ed7b4fee8f134a42638a"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "7b8f3754212e2313ed747667abbf7c8b"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "583d14d185d1385dd5fe8693faeb87fa"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "775b40b4684324de37a786fb6db77ead"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8c28ad85d7aaee39436532e2f5ff3421"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "c0775485c6407249e9222ca5f3656521"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "ea4d0888fc5f16d63556b2a7a610b247"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f3fb02cc2bf32342fad7ea619be62c60"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "cf503d44d15908d3f069b6b794542397"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "8b2d23dbae63c4b26b670b079e0e77e4"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "a44db61c1ae789061a7138ea28d65c6f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "e053f6145245c184b905eb7051cd2688"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "8824528a8a4b6204585b25e38dc8e36f"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "37f97abb5853f4bee67aa292489b2355"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "dc499a2eaa66aadbd322615fbdfbd571"
  },
  {
    "url": "c/program/index.html",
    "revision": "984054fb82e59c0ebc548368a99a2a61"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "638c8875ccb2f4dc789553e353166561"
  },
  {
    "url": "categories/index.html",
    "revision": "c860bd1a77793e191ffcbfc418ff5e28"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "ad0ba1b3055071e81012e8d7b26027e1"
  },
  {
    "url": "figma/index.html",
    "revision": "ea65498c0a62c5fd22760cd9dfeffbb6"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "c153d9a959e458f777a1f24ee80148b1"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "20257efd1430243e6d477b4cf2a7775e"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "730b059aced9ac4f717f1c07769b288b"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "01f50ff7e14d1b3d1b72e0456e000d72"
  },
  {
    "url": "flutter/index.html",
    "revision": "559812f74d1e253f984b65f8a8996b40"
  },
  {
    "url": "flutter/point.html",
    "revision": "d25daee40b4ad89f0047531e058bd603"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8bceda161ccbf0de1d299f1c81d86441"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "31f15ffb9ecae98ce47a2491647122b7"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "76685032f3c4e1d06673682ed727069c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "d912b51609cdce4b6d1276474ec2c5b0"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "ae6463d2256f5eddfd83fe37fd348dd6"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "c36877bfb39ca2e166d4249e80833099"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "9f939d933e2a959c1c4e5d8b953ba3be"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ac84895e3a14a1bed8ba4e85d7d79bef"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "2b54c73ad7e0496d37b54380b9cd1e61"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "e089960b246786def9f32609b96e1689"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "7765ee53a1bdb44b3f436b2ab3e880eb"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "dbdfd7ee099f7e11744d16ecf8c26eec"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "e756687d6bea4cb9782bab27445cc5f5"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "51eaa154dceb67dadef454536ff9a195"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6e470d1f94927c824aa9602fd8739d6c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "00d9b37a4c3abe0729e862b17e19db7a"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "15eba3bf49dd031263988dd8bbb29bb6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "c66317e64fa0c68fba51473595fee82d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "68830f7d811847c422835fe76acfbbf0"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d667489988fd6855ee569e8886e24eb4"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "a6c23851874b23b661ef1b3fc5deeaad"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "ab84b070c8675ca4f7ab9dc50104b255"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "f28c2f497215f6407f173b6c5c453187"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c839fb29559993d26fa6a36989538118"
  },
  {
    "url": "haskell/index.html",
    "revision": "e63b3270148e5d6506269cda6e00a293"
  },
  {
    "url": "index.html",
    "revision": "e58b957c48f0e4614682b32d85e091e8"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ff3266dfd15bdfabf3f328e50ecf4b66"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "acead517bc4961460e69bdfc0b58f756"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "97d72ab7eec71088f31168f7ad1ce323"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "70d5b64d146a6c5f32cb5166774ca389"
  },
  {
    "url": "python/index.html",
    "revision": "968f09a173295826984429b4e69956af"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "d5ab3271f56b826ee0a1daeb5cc67ceb"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "16782285001e1b245463134118a0a448"
  },
  {
    "url": "python/python-file.html",
    "revision": "c897f8e508bdec4b626f613a6c85b17a"
  },
  {
    "url": "python/python-function.html",
    "revision": "f32e3b767b96b4001facec69e46e01e8"
  },
  {
    "url": "python/python-generator.html",
    "revision": "e13ed0a1d9f7b874e4fd0efb67181603"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "2849bdf4f88df7077f6fcfed687921f9"
  },
  {
    "url": "python/python-module.html",
    "revision": "c6adb9015c4ef9c42f299c66eb90a769"
  },
  {
    "url": "python/python-string.html",
    "revision": "8029adc631ebc2b9fdda22d6332af748"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "4cb275e81bd0ebeda710eb511cbd740a"
  },
  {
    "url": "read/index.html",
    "revision": "032665396edeb9f79d48df2672e8c0f8"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "9c082b839c7c82e8ee392a6cf08ae79e"
  },
  {
    "url": "swift/better/available.html",
    "revision": "8a7587b296247c1fa996d811fb806449"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "208e412cfd39fea7e20895526eeeb876"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "f8372df68912a49690b3b9e238d547c5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "f83b777f185633825e9101952e1e812d"
  },
  {
    "url": "swift/better/di.html",
    "revision": "bbf25bd5c57c60d10ec582826186d258"
  },
  {
    "url": "swift/better/index.html",
    "revision": "4e001ee877a5500557aff030f4bf0cae"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e01ea0b5c11401ce0cc47c8d32027548"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f64fca4e36eafaac50bfcacb22ef23ee"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "8b25b312ef583988119b5a0a8b458328"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "03f6b280b382e2ca0a723435ec6b44b8"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1b133b8d7c55e7ec3f6ba92abc663379"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "1c7404923d0e0ebcbd90e9c4592aa099"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "9681b24069143dd30cda02f9c2fdfe85"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e287aadbff80d9ecc4a1a5eb2cc90a3f"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "ad91a0947922e2fe86575bc5067650cd"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e2947e80d185eaf7bd07c247ac1916be"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f1880c770ce6b951e1d670ab885cb4b9"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "07c73b3895f4c34e2e2b685e1996dca5"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "82c9a8fb1e8858645f6a2976dbb99398"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "c99d564565594d01c92ddd72d101a2a8"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f93ffb2fc3305f9ad579091e7ff4ccae"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "ac5da7bfc9c0bc45989e42c6efd74c05"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "95c4baf8860a2b18359ce5540304e1a6"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "e1c58bb6bebc0d8537c218ca4b97517b"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "1af1141baed3b1f892668db2bb1acc15"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "6c627785a546166d0b7ded03d4c8ffde"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "70c91b5fa08ec3e1efd984ab1beb2ca4"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "b9e763efbd970f19be3e433e7f966bb5"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "25ad33821ce0eab44d32686cbb4248f5"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "976b3121087a5fb109ab701b4e7ee31f"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "b2f78d6882ab65fcb22afe05d00c31ac"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "f08147d64617ddd41bec3de39431c199"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "dd171a58454985a9cbd09832c60a2d68"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "d5af4fe44b9bb7dcf227defe22d519a8"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b9c178fb3f7870cf90b7d013f9b06e68"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "7314fab060c170563a6d7d403de01c3c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "ec91e81c9fe9a2b98329a451ae91e40d"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b59c06340823d9ef0a404f0c46ddc421"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "0c083719616c52b9df8c50c8d1073013"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "b1953344f53b2a2196f7e4dcad2159de"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "1e906fa0ef17c9622e50270061196d10"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "6c9602061f15e0cff0523dff516ef89a"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "819bee4b1ea2f4331207b8918541692a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "843ed4d8c93d3874dd3974b3599232f6"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "14ccf62e5bdcbe7344c5ba5de5250a2f"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "c98b5fb98e96226ff97c9c50d0efba4c"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "0a1284d2f9d408df93f53c8b5688f194"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9320fd184d8eb7a6f844e2e4ae424519"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "a5c6f2391b9333dea3b61be9777681c0"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "571d7155095c8f48b5934fe19cfc344f"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "6903cd213b610035aabf244bed0614a6"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "195e36ee876f1c717c6e96c22794deb5"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "7eb40d3322df4107230acb5048141ecb"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "49606e8259ee82c4ff225ef792d82f31"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "84635ee499fb8204ce0a26c80b5ebb30"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "20ed9e250b0c8eb8f54bcade5e26b0bd"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "56cfd8e77b38928f90f680ecfa8be9f1"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "318977b64c48dd94ed14c0f291478665"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "8cfd564109c1c88df66f0e27e6b5e28f"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "7beeb39b9ab34abd5a1fbf9d3789f97b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "c6d0c04c8c9342b3e05e4735d7720ce2"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "e53018d7277c8a7735fffad9dc4d7be6"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "b7ea82e3c53f1f395b4d554d7bd03bbe"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "400bcbcff4422dfc9ef6be1747ee5537"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "70bb54b402a128aca9fc7418197fbf07"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "66710d4eda36b599fbfdacf321ba68b5"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "6e363e45af15a45b931f1894dd4233e7"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "e274bdcb680732efdbca083b4bb76bed"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5c4f4914bd1e03e852bd77b162b7e912"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "7b71657bceaac4bdbab3cc803645282c"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "b662cb7ca76ffafb52ec20ee6924b574"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "be63a9cad2a4150af74d7febd7a65ad3"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "e647fe51cd8d46d737e696f1599800f0"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "441d8bc0a72a2f3c5a91c7b9168022d8"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a8d290388fc30f89c62116609f06c8fe"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "171f166c804dbcf0c58585da8b66a73a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "5a92e6c630635152f0113bf7caaad7ab"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "2f43d928a6cd434ca789667069fbd855"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "d6f3ac9c181666e0d5a42bebb06a2e4a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "0ec680a2ad8c1b8b03a4ff2d7ec2cc4a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ba78e1f37e15a70341540266c5e24fdd"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "64ade13147cf41c60789c96d9386b06e"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "db9610f443183290aa460ae9d3c483fe"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "70b238af9ec0e7b44b9b53f4bbb44a80"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "874d30c91cf041cbc8f8dfe4b3e7d0d9"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "d3bf2cedf1a0be3c839201580ccdbd4c"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "74068258d601eb4c0ce4b99b3d3e5797"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "7f03c082e3f01d0e071ff944ec4b7b00"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "00aac3f6cd18d114f35cc59921035430"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "f140805eea50e769adc879cfe4748494"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "9f78de245ae2f4952b3790a4b1b01f4b"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c1db3b9c39ffa7e00f856a3057788971"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "6dd2eec93139782acb7b9493366f5e34"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "7e1eb31de73cb9e1a0e247ca4a3d4a77"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "a85e3c23846673bfa8aaf1d8c86243ee"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "010d665256836b07064c14802c881596"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "9d8a64a57e7f5a4cb61021fe5ecf1b30"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "0b3277a683f155f5c951e700b07c5881"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "822f12a226441eb28f43068ab6002470"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "c3dd8dbe83dca9179cfc1e0193e35afb"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7566a1715c5112c99a62671f9e4a066a"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "9b87b00fe151ca44c2b85b87d8f79fb3"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b70d4a91bab522f4fc37a5a06c107a7f"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "65edf32759eab4c3edb110f1cbc40467"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "005d8b6f841c0f4ffd91ba03876dcccb"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "35d99f9de6e57f6b747d780c9892904c"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "ca7328cfbcd2c1998897c4799aa9dee8"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "3ac6c1cc24e519e16c739b48786a13e2"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "54db1650dc46ae91e82cc1f2231ff57f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b210bf7dd38a33e6d036281b72df670a"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "f76b0d40c0e2b9dbd5f50d64bd37c07c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f7ba799b869d589fff6e6f5ec141d56f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ed55823a8b8864b01d90718b5d02afc0"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "917ae7d0618ffe416fcdc0745a384824"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "0053fdceb352a87b3c274b8b42036df1"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "08289ab676472fa043fc1a374ec10d29"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "66faf4f40fd447207a95069befa176eb"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "3c2c1d400491231f9c598894b127e250"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "70d335be66879e5aa6736295a4e7ce07"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "ebfee3ecc5ab34a3d86138de2ecf418d"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "0337088d15b0745fb8a3dc076d7ad38a"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "2d0c3a1dc8e2a3155edd3d30d4ff88b0"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4c7cfefa9b22445cc852dd3028295ed3"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2135c63ed6b069d43dc5eddf8ff98167"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "5959e2c80520b614fbbacecef6223135"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "8dd94768c7ef08028fa4a70ac05b3953"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "441cce96d0df839652799a83683790eb"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "f45f67f838feb45b261a1febfba3bb4a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "9223d246d6e0bb392d1f502c2cfc1549"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "25748a9d4b69199d7e951e80dc701915"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "15b8b5f686f3dbce8cb341ca8594fbff"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "6f5e603cdb4503033fa6d07dd2eb5193"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c3139b495fd20caf907e48abe30b810e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "de5fa9d8dffb8a2a048e8b6bb0ab5e21"
  },
  {
    "url": "tag/github/index.html",
    "revision": "af1acc1d77e2fbed95b71f928315a58e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "85a01f215d7226507c233019fa54570c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8a52799550c159aa5c37612b3a1fd914"
  },
  {
    "url": "tag/index.html",
    "revision": "32c87a01926464f4ed3725cd27cd6273"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "ffcbf3cae07c90d044e553822753119b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f28bc8ac58ce06ae42a99f63cb6cf521"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "4cdc4535d66f82bf61b8bae83f4ec80b"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1744fc84e493b2d96530091f6702ffd6"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "2b7885a987e9bcdaf160c1f00ade4a71"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "416b340d3da6ea04f86895552133aa2e"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "e587404a91666446e3e346f4331be428"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "00e3b480b2aeeec5815f83910d3c6322"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "f0fcaae5f7ae7432a9a32c0b30e29380"
  },
  {
    "url": "tag/json/index.html",
    "revision": "97bc872dae568aa7188a60a9c8b284d3"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "466e4d801b6e2524e31b41c6a59a2244"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "d6d3f21da32f8855a0e435459f121439"
  },
  {
    "url": "tag/python/index.html",
    "revision": "46a3e6f0818a840ca83d97284b0dc01c"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "22d3bf4b3af9bc15893426e669349399"
  },
  {
    "url": "tag/read/index.html",
    "revision": "b39a8ceaddf83fd770f067a51c9a4d5c"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "c275c33dff564935802b9237c477eb37"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "935016d5559f787148511edf5f461e49"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "b8255652bdd46c5279d612bfc61329b8"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "33c1486f4f04f934b2d1d7b72f1fdef5"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "9e745aa22cdc2518d583094844569ef6"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9f91fecaac82e4a52dca04c38e4ccc7f"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1cb9537aee1a69ab7c016f5e27525aef"
  },
  {
    "url": "tag/swift/page/15/index.html",
    "revision": "1d8dab2502faca9f86fcd7ed048dde17"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "1dd74dd5714d71ad1f0f640fed02cfac"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "8cadb777d395814da4e3f59caa2543d1"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "3af545b186e55f7b8ca8efc56e438541"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "0a953e42eb2a918807b959e36d26221b"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "8f16a5968e04e493e0ced5062e74ff9b"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b68ac84beaef3a0eb85c2a175dc9d9b4"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "fe5fc4381cded40ba92445468aab2c38"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "ce05dc1a169db2916b5e594ed3e895c4"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "369f7fb4cf623e576d78db82df982848"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "59df0d69a5e49948ab370796a850a98a"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ecdb2de38a532c4f22659374bd5838b6"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7d14b9f61711744d301a9a7508b90760"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "2b5475a7e4e38454761adc43b8b88de8"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "06e77f290146fa779bfedf4f43f8ad6f"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "eb4c5ea07b86c784de034d6ac4bcdedc"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "903e1e70a3bebb7cf4567bbf05948b28"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "06b5dbc5104a4c39755b3a0b79e6f1bc"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "161fa2aa5886ace2ab15131543ed2ed9"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "2d2d1fbc30b7f94b515b9a31689d4b64"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "6a53a5d98009db54ce5ac5b5b31c48e9"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "88293198279ff63e25a3938883ec1980"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e7169b4ca9cdfde60a4f20807caa64d5"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "97b02d92cc7fa9b100b2ce9d98351d1d"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "c55f21b069a67f6d409b74d0fff19af9"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "abb4f739ad8bfdfd9c1b84d050d3f481"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "243a810db66af78c442df07f36510918"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f4f75809c453bb5676cdac4be7132bc8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d037b5246f8ee354c94ac02c970a8478"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "74617ac2d7741a04cea1a757849986e0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0decd46833b40ff4e43e15afe08af6be"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "06b564dce361da8fee0f249d5036864f"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f8c866ba2d9b480623be40331284e455"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "346b182f4eb8dfaa27a5dc0c532c7204"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "5b03a6635569847ebddc2953c9df6afd"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "af16076201b5b60bd2ae4b661a10a592"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1a680aa932b90c6d43f25b140f5fec4d"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "95a1bc6aa5b5831e6a168f198169cb13"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6cdae41873190d2859a3fc5f9856b969"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "969862c08e7a31decc37976f58ddfe7c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "adb164ffee9c449f680b56ee63f67f90"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "8db24904e94235884bf3942290333c30"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "e998eb3a0c404e10ee054a8897e2b42e"
  },
  {
    "url": "timeline/index.html",
    "revision": "7b942bf55f402d3a0de3d45b732b0e87"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "0bac076546ba5cc7c369e3c777e12de1"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "05c85316ffbf17fcbeccf8dfd7cf9760"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "8c9bc5a42c16fe3e5b1f8414f802284b"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ba98a90baef9de7f2ebc37489d041eb3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "8297fc7b2afe74fffd2cdaf2a12b04c3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "fbd0d5bad9d29111e3349c22785cca60"
  },
  {
    "url": "tools/html/index.html",
    "revision": "0eed3e4181d2094f55151ff0b41d92d0"
  },
  {
    "url": "tools/note/index.html",
    "revision": "c440e0486b8856b7b262b568c5263b6a"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "db4047746173439e348b50ad6b37d543"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "1937ce5d9e620402e0a5c9bd6a83efdf"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8375833558f0001c55b95691d9e422b4"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4a54594b5e6f00e6c25ac08a10a93190"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "d1036c8f9477a98799a6b509be779730"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "1fe54f46ada060f7869b64af3676a04f"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8207dff60aabb4aeff0a8b5361b4270b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "de132fd4b083d9f4faa73be4d7960585"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "eb548140ba8d75cd53b31e51bc377ec8"
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
