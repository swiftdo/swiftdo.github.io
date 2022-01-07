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
    "revision": "0bd041cbf713f183ce26752bda58f804"
  },
  {
    "url": "about/app/index.html",
    "revision": "17d1886ec498fda8297d3c3b0235fa61"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f7cc19bacb60aded34c669a205185ad7"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c3c724b6ea30062b31b29e0a5fdb61de"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6178001a53e9975bbe7bb20c3da031d2"
  },
  {
    "url": "about/index/index.html",
    "revision": "f75cfe774d0f3c90e3c024e75f0ef82e"
  },
  {
    "url": "ai/index.html",
    "revision": "8baa040fe7acb599e8bf43db02504026"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7396d2954ac0211a876c0f1d8bbe0c8e"
  },
  {
    "url": "assets/css/0.styles.69e419d6.css",
    "revision": "84df19b9cf0610a91946ef13394769e6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.16c5d5b7.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.bc471f7a.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.c27e4566.js",
    "revision": "ba891b9692e9789c31f2b060501fbde3"
  },
  {
    "url": "assets/js/101.96cd7483.js",
    "revision": "192af620883110c9fee4f7466924b043"
  },
  {
    "url": "assets/js/102.9a5ff19b.js",
    "revision": "267e81586e9ea101c7269c70402a5b86"
  },
  {
    "url": "assets/js/103.854a39c0.js",
    "revision": "14aa2f54bcccf3c1d75295f2fb1324e7"
  },
  {
    "url": "assets/js/104.ec2f51f6.js",
    "revision": "b4d32b42f9c4ffa3caf3dc66af78c371"
  },
  {
    "url": "assets/js/105.f15eab3c.js",
    "revision": "858c56ed83f11e5d26bb2aa7cdd3c6dc"
  },
  {
    "url": "assets/js/106.50075d87.js",
    "revision": "fe7e68decc901c18e6a6fe54069916b6"
  },
  {
    "url": "assets/js/107.a9791517.js",
    "revision": "127dad4659bf5b6b83a39981b56c3a39"
  },
  {
    "url": "assets/js/108.58dd674f.js",
    "revision": "feca1dbc9a3768974f95662425d13457"
  },
  {
    "url": "assets/js/109.a0f158d9.js",
    "revision": "05bcfa18412e4da97c41c9c0c9d9995c"
  },
  {
    "url": "assets/js/11.03204408.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.474ae92f.js",
    "revision": "8cf3efcc99f2eff99e023b56d0480b24"
  },
  {
    "url": "assets/js/111.809c13c0.js",
    "revision": "e73ae34e22b77e8f0824a68b60a0ee7e"
  },
  {
    "url": "assets/js/112.b150e256.js",
    "revision": "491664f21c0b9c31d04ce4abb4267479"
  },
  {
    "url": "assets/js/113.8ee35bae.js",
    "revision": "63c52b411880705bbeecad38115b0ed8"
  },
  {
    "url": "assets/js/114.72140725.js",
    "revision": "25dce0e7df119436154633bdf9bf1a3d"
  },
  {
    "url": "assets/js/115.d3a92ecc.js",
    "revision": "95d774a0b6fc26b16e462b5cca0e62e5"
  },
  {
    "url": "assets/js/116.9389806a.js",
    "revision": "77ea97983a599ba84e6f1b9d45663acc"
  },
  {
    "url": "assets/js/117.c45df492.js",
    "revision": "5455b3e26cad2e96d3b54edeb5d7c1e6"
  },
  {
    "url": "assets/js/118.3f51727a.js",
    "revision": "b1cd52024e479373f019342c6ca0c14c"
  },
  {
    "url": "assets/js/119.c447a6ba.js",
    "revision": "afaf96abe761b74e4b761b9ec6bbab5f"
  },
  {
    "url": "assets/js/12.749f4d86.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.d10d85ed.js",
    "revision": "0dd71c88f6897b1970b5e72c6e7fe5de"
  },
  {
    "url": "assets/js/121.fd931621.js",
    "revision": "d77d960304c1dbc213a7ed13ad376573"
  },
  {
    "url": "assets/js/122.2086c3d9.js",
    "revision": "b9553c9b0948a3885fe4e7a39719bd29"
  },
  {
    "url": "assets/js/123.34413671.js",
    "revision": "2e8fb94dec8e5617f1f5d94d25150923"
  },
  {
    "url": "assets/js/124.0a9b6438.js",
    "revision": "4eceb8bb12fe112739195ee3566472c6"
  },
  {
    "url": "assets/js/125.6c6ffa91.js",
    "revision": "528d816f05e43ec9924d55d6e6e4fe6d"
  },
  {
    "url": "assets/js/126.5f522a9a.js",
    "revision": "2efc550640bcdfb43ec32cda69c7ad3f"
  },
  {
    "url": "assets/js/127.1b909d71.js",
    "revision": "2d3c543d253192e77548bf4d4c3172fa"
  },
  {
    "url": "assets/js/128.a2c06fb2.js",
    "revision": "af858d220501c443e0a7001805ad7634"
  },
  {
    "url": "assets/js/129.1a0ef98e.js",
    "revision": "9ccc0e1643c2b74c352a376a4cebccf1"
  },
  {
    "url": "assets/js/13.d6981eb5.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.0ea78f00.js",
    "revision": "4508e85505fbf9fbb27b925f88856401"
  },
  {
    "url": "assets/js/131.b5fbc9bb.js",
    "revision": "003ef1fc0e1f6265ddcad1bf042532ad"
  },
  {
    "url": "assets/js/132.45bbfd2c.js",
    "revision": "0ad8a5da6b13877affc3ce794356ef4a"
  },
  {
    "url": "assets/js/133.7849487f.js",
    "revision": "e660ceadf725da0999a745d265d51929"
  },
  {
    "url": "assets/js/134.d823dcec.js",
    "revision": "b63540bd0c714c31d9944a414bc4e829"
  },
  {
    "url": "assets/js/135.80367a74.js",
    "revision": "f820e3cb1ed6aeff05c5336443afbf56"
  },
  {
    "url": "assets/js/136.10ce6453.js",
    "revision": "0d2a1d91f5a055fb0d0b9bc4ea226617"
  },
  {
    "url": "assets/js/137.fe133bc7.js",
    "revision": "c7fe2b02724d145343fbf09324c00ba1"
  },
  {
    "url": "assets/js/138.77fd0c01.js",
    "revision": "970b02e6a1b6e21ba639c0d62c3d3546"
  },
  {
    "url": "assets/js/139.0a4926a4.js",
    "revision": "fe3188d15b6878b1823e5e1e6b9dad7b"
  },
  {
    "url": "assets/js/14.7a946a8c.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.ca4dbee3.js",
    "revision": "548995bd43292f4e062b75e8d9a95c52"
  },
  {
    "url": "assets/js/141.29fe4644.js",
    "revision": "8dd579c1895d05700df4df1b42ea8c83"
  },
  {
    "url": "assets/js/142.83825d94.js",
    "revision": "4329bc23841f3ec407f21f80ca4f8a2a"
  },
  {
    "url": "assets/js/143.8eb1ea49.js",
    "revision": "1a0030009f8883340507471b39a388f1"
  },
  {
    "url": "assets/js/144.f7dc133e.js",
    "revision": "6733fe78ca1c594ce4938e67f2f39360"
  },
  {
    "url": "assets/js/145.c95a58ee.js",
    "revision": "1bca348678ae7458ab8b033a415a5185"
  },
  {
    "url": "assets/js/146.b882160d.js",
    "revision": "2a4f76e091902de0a863324c2e1cd054"
  },
  {
    "url": "assets/js/147.262218fa.js",
    "revision": "50809096b863ec0c94334a4a26162777"
  },
  {
    "url": "assets/js/148.8f2192aa.js",
    "revision": "6d9fb347168ff140881a69fd2d6e5158"
  },
  {
    "url": "assets/js/149.d40538bd.js",
    "revision": "83117cb1ee2343178ba4179be7ad3086"
  },
  {
    "url": "assets/js/15.df02acc9.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.3b20556b.js",
    "revision": "0d133cd7176ed9b461d5eba5ed66ddcd"
  },
  {
    "url": "assets/js/151.29ec7e66.js",
    "revision": "9e0d04485dba7d62a2344393bcdafbc6"
  },
  {
    "url": "assets/js/152.2cdac1b1.js",
    "revision": "09320609cf2709e63b566098b3970760"
  },
  {
    "url": "assets/js/153.5d090a67.js",
    "revision": "456109d3278ee325204e95fa5aee4a34"
  },
  {
    "url": "assets/js/154.beabbb4b.js",
    "revision": "06a1936d396991de1ba5eb0f679b964b"
  },
  {
    "url": "assets/js/155.9916b9ad.js",
    "revision": "8b0a32a092971eaebb00b787003b2410"
  },
  {
    "url": "assets/js/156.a6d8de16.js",
    "revision": "c58ddeb27a7057dfc8316cbab2314f9b"
  },
  {
    "url": "assets/js/157.c6d20e83.js",
    "revision": "fe1f20be94d40a87702d5e34b0bbcf73"
  },
  {
    "url": "assets/js/158.7601ab2d.js",
    "revision": "b485963c625d0e353a68aef0bbe273be"
  },
  {
    "url": "assets/js/159.8e6c0af8.js",
    "revision": "84279870f0949e5697fb57efadffc746"
  },
  {
    "url": "assets/js/16.564d894b.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.96840045.js",
    "revision": "132066f1583a3e060cf54f6b60675586"
  },
  {
    "url": "assets/js/161.aac22d76.js",
    "revision": "61d6dbbc95c657c9fb9027a3c8e7f9cc"
  },
  {
    "url": "assets/js/162.12c807ec.js",
    "revision": "c6eb99b7d54acdac70b240c31c460f96"
  },
  {
    "url": "assets/js/163.a6a880b7.js",
    "revision": "77eb0f2d3bd22b65d6d21292c2245998"
  },
  {
    "url": "assets/js/164.a2205c85.js",
    "revision": "ff00d1043e059dc5ba9711c86cab2434"
  },
  {
    "url": "assets/js/165.e06118e7.js",
    "revision": "3b42ffe28cae38e22c58382d37eb82ec"
  },
  {
    "url": "assets/js/166.f08aaebf.js",
    "revision": "95353bd16558ffe440cea0e023271cca"
  },
  {
    "url": "assets/js/167.2f3932e9.js",
    "revision": "a2f0602c14081af155bc838a328becb1"
  },
  {
    "url": "assets/js/168.26215ec8.js",
    "revision": "81961d71f0fdaa773bed8c358b697935"
  },
  {
    "url": "assets/js/169.5b746aae.js",
    "revision": "ee2d24a0fead41c69ec888fabdf60eb3"
  },
  {
    "url": "assets/js/17.7cc330cb.js",
    "revision": "a9feb5fb3a5ada4385bfbe840f8124ec"
  },
  {
    "url": "assets/js/170.abc4d27d.js",
    "revision": "ae0bd1f278fbfcc2627a287172a48fda"
  },
  {
    "url": "assets/js/171.a8e6d272.js",
    "revision": "3f4c18d8a402805859dfdf7a895e02fc"
  },
  {
    "url": "assets/js/172.0536430a.js",
    "revision": "519ef05d9fb4ed240150065f26aa27d6"
  },
  {
    "url": "assets/js/173.eec2d2ab.js",
    "revision": "85f811913644eb87918190e85011855d"
  },
  {
    "url": "assets/js/174.c862301a.js",
    "revision": "1b47173e3656b4768c59a313736813a6"
  },
  {
    "url": "assets/js/175.0b983127.js",
    "revision": "5ceadd67079caf8acd5bfaaa02fadb78"
  },
  {
    "url": "assets/js/176.34baa5a9.js",
    "revision": "3646c7312b79e928da038447c976e0aa"
  },
  {
    "url": "assets/js/177.0d64bb18.js",
    "revision": "24827efc5e68cd53b29c6c2b8f3e159d"
  },
  {
    "url": "assets/js/178.19094075.js",
    "revision": "dc6a1a1bb4c23cb295fb2e7baeb1bb7d"
  },
  {
    "url": "assets/js/179.c1956341.js",
    "revision": "7d82fae94bb0eced9e69d7b5590dd247"
  },
  {
    "url": "assets/js/18.e4503b0a.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.e7e9c819.js",
    "revision": "711bf752ee81ec8ec8ec9e71e1bee751"
  },
  {
    "url": "assets/js/181.5e64c4d4.js",
    "revision": "fd34c05013fc44ac55aad84ffb6ea9a8"
  },
  {
    "url": "assets/js/182.42c537c7.js",
    "revision": "ecef713e57576064054859e0e810c7d0"
  },
  {
    "url": "assets/js/183.63c99589.js",
    "revision": "1114cb3f0488a7be2cdc051867b2fe2e"
  },
  {
    "url": "assets/js/184.3cbe5440.js",
    "revision": "38224e5bf534f8347b536250e97fea84"
  },
  {
    "url": "assets/js/185.b909d09d.js",
    "revision": "e3292791278d0eea4fe98c876516856a"
  },
  {
    "url": "assets/js/186.836c7364.js",
    "revision": "7d95beb9fd38e157f3343d5a54429153"
  },
  {
    "url": "assets/js/187.fac32c83.js",
    "revision": "8187ea1dd1982f9275aadddc5a510f20"
  },
  {
    "url": "assets/js/188.1cc947ac.js",
    "revision": "4015e833f61a9b7d21a3c867f46e5149"
  },
  {
    "url": "assets/js/189.19176bd6.js",
    "revision": "7bf49ec8270032800a1f8c502164a749"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.7609503c.js",
    "revision": "dcd52569b77ed085259f0df0415a2b37"
  },
  {
    "url": "assets/js/191.d54532e4.js",
    "revision": "353ec7d531f2d6438a1b8b1b30de8272"
  },
  {
    "url": "assets/js/192.bc12b7ad.js",
    "revision": "410426af0c917d24f8adb7ed6ae91e48"
  },
  {
    "url": "assets/js/193.fa0d1b54.js",
    "revision": "ebe5af8e4a51bc462f7e1eb673db16c2"
  },
  {
    "url": "assets/js/194.b1c97e25.js",
    "revision": "a9096b20786d940ba7fbd527ed4c6fe7"
  },
  {
    "url": "assets/js/195.a2c9d9d6.js",
    "revision": "cdba6406c5157df0df57cf73608dc9e7"
  },
  {
    "url": "assets/js/196.b46bf76f.js",
    "revision": "c0aef0f4fc3a76e17ad279c941ae4993"
  },
  {
    "url": "assets/js/197.c5d3a237.js",
    "revision": "5b3fc1b5dee326ba79b55ffc299340b6"
  },
  {
    "url": "assets/js/198.b3eae0fa.js",
    "revision": "79ded865f50eaa36616d6b6ee92d7264"
  },
  {
    "url": "assets/js/199.81d6fd06.js",
    "revision": "d4915a8f5838e7709d6b1c8241201cbb"
  },
  {
    "url": "assets/js/20.61aa10a1.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.1d47985f.js",
    "revision": "61055aa0feb8e11c45cb4948dbb65393"
  },
  {
    "url": "assets/js/201.4807fda3.js",
    "revision": "6c9ea81b5228e5ed20b6bc90ebd51062"
  },
  {
    "url": "assets/js/202.75b0ce76.js",
    "revision": "60f96e5beeb5d2421180b0974e789c88"
  },
  {
    "url": "assets/js/203.b3db6ffe.js",
    "revision": "4d90ff4d9246ec549365a58715c72e1c"
  },
  {
    "url": "assets/js/204.92b64b3e.js",
    "revision": "f8bf05568b6cf95f1e241eff80239998"
  },
  {
    "url": "assets/js/205.1b3b3c52.js",
    "revision": "49ccd443046b76738293eae86b511e11"
  },
  {
    "url": "assets/js/206.5d48cb4b.js",
    "revision": "10207bad6f4f93a9d5db2cb84ad10e9b"
  },
  {
    "url": "assets/js/207.d2283cae.js",
    "revision": "324362af86613367cd6e0fd93c570887"
  },
  {
    "url": "assets/js/208.35edbf67.js",
    "revision": "843bc50c6c39cd631cf962d6e29c762c"
  },
  {
    "url": "assets/js/209.5b8153e0.js",
    "revision": "17e06dfccec806df0113a42c4a809ceb"
  },
  {
    "url": "assets/js/21.10b4569d.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.e0812fdd.js",
    "revision": "c8cc0d7bbd956a201f770984b599c135"
  },
  {
    "url": "assets/js/211.0b72cc76.js",
    "revision": "84cc2990a493a39de8eb53da8ddaecf0"
  },
  {
    "url": "assets/js/212.e11478ab.js",
    "revision": "5892bdd4c1d2ca02539f3b0444f4f030"
  },
  {
    "url": "assets/js/213.105c84c1.js",
    "revision": "0b9b1f8c290b352edb45490d2d196a3b"
  },
  {
    "url": "assets/js/214.1c7e599c.js",
    "revision": "cf822cd0d81776e08c69e0c336541684"
  },
  {
    "url": "assets/js/215.d3e8caca.js",
    "revision": "1a02a0029f0234bd8ae313d2fe7355ab"
  },
  {
    "url": "assets/js/216.65bc54ab.js",
    "revision": "e832eb9ca3528dc0e4cabe5b642c3f52"
  },
  {
    "url": "assets/js/217.d44cbcd3.js",
    "revision": "581fc59a2696df03d8d46a235956f1a1"
  },
  {
    "url": "assets/js/218.53ed103d.js",
    "revision": "7dbb073c3dfcfe44d132c578e3a24c17"
  },
  {
    "url": "assets/js/219.f3b45dca.js",
    "revision": "1788599c8292b2675090b9584552c431"
  },
  {
    "url": "assets/js/22.20fbd596.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.9add3a6f.js",
    "revision": "e12c083b42d1fcab3d21c4f6d7ee56aa"
  },
  {
    "url": "assets/js/221.d0e71741.js",
    "revision": "a71c8d003bded7f5a68d180431ff242b"
  },
  {
    "url": "assets/js/222.fe402a57.js",
    "revision": "6013cd0f8e674c5c6233a2afcc890042"
  },
  {
    "url": "assets/js/223.c71868f4.js",
    "revision": "2f4da94cb3ed3116837bc2499d81bdaf"
  },
  {
    "url": "assets/js/224.35b7a74f.js",
    "revision": "3618e547fe82efaf312f0d6e7783ee9d"
  },
  {
    "url": "assets/js/225.f34ed3a2.js",
    "revision": "34d0b68d9dacd77fc8e9751f9170d227"
  },
  {
    "url": "assets/js/226.cb90a398.js",
    "revision": "868e101b0df746a7b0d5ad84ad6191c8"
  },
  {
    "url": "assets/js/227.0c8961cc.js",
    "revision": "460ca525b48b307d369d82e0c6f126ae"
  },
  {
    "url": "assets/js/228.586f4c9b.js",
    "revision": "bbd8b0431a69959a7707c1cb1c9a9992"
  },
  {
    "url": "assets/js/229.694a6751.js",
    "revision": "8e3725a6030e37bfc5b03706ba75f80c"
  },
  {
    "url": "assets/js/23.a2e14971.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/230.02c6ecf6.js",
    "revision": "f481715ff7b7dd0d761f97a722ba958f"
  },
  {
    "url": "assets/js/231.f0b536b2.js",
    "revision": "fffb30f108b007fdec2f71ad41882a27"
  },
  {
    "url": "assets/js/232.2f37e5df.js",
    "revision": "b15b9beb0f7a7c1eb8be9d316bbf9231"
  },
  {
    "url": "assets/js/233.c308f87b.js",
    "revision": "f0c7a52fd54f9da669b3c842649a96c6"
  },
  {
    "url": "assets/js/234.b96b52fd.js",
    "revision": "453716f401d2e7db23529c5cd6259a88"
  },
  {
    "url": "assets/js/235.f5d7b825.js",
    "revision": "72f613a1d8d1150d9924a2a98a292643"
  },
  {
    "url": "assets/js/24.700d0f24.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.ef9e6863.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.4129a7fc.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.11ae4590.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.9f159f91.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.4f8fc819.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.b4d5b2d1.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.1f92262d.js",
    "revision": "8f8712cdaa426b3faaba1bef372f8bca"
  },
  {
    "url": "assets/js/31.c0a0b65c.js",
    "revision": "7dc97de67f37ad4a0f3377fb570605aa"
  },
  {
    "url": "assets/js/32.93ee1ef9.js",
    "revision": "48ff28716693e4d3e7d888b608fe1a49"
  },
  {
    "url": "assets/js/33.8344f41d.js",
    "revision": "43857ffce3bfc0f96e6ff2e853f0243c"
  },
  {
    "url": "assets/js/34.afa89a65.js",
    "revision": "45a8de78b4b2d9d2f9a93c4ee05af2b1"
  },
  {
    "url": "assets/js/35.18120f36.js",
    "revision": "39df833ba4356eec20d55a8f3dd8046c"
  },
  {
    "url": "assets/js/36.62a52656.js",
    "revision": "59217c43fed980796f778c0c3c76d6c3"
  },
  {
    "url": "assets/js/37.d67c5699.js",
    "revision": "f08bb8fba729fb60d361c2a81f1f33b8"
  },
  {
    "url": "assets/js/38.3049ddf9.js",
    "revision": "fcab6a68555801c730fc8c68b42e2515"
  },
  {
    "url": "assets/js/39.a03f9949.js",
    "revision": "b6543217c05898907e969cf7baca8095"
  },
  {
    "url": "assets/js/4.e6ba93f9.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.6026ae61.js",
    "revision": "7b8ab3f8f4a2d2af74584b566a999ef4"
  },
  {
    "url": "assets/js/41.dd29c01a.js",
    "revision": "2ae33420a0eb549331be3add1a4c8693"
  },
  {
    "url": "assets/js/42.b9e774da.js",
    "revision": "584e3838ac45c817842d4a706e5507b9"
  },
  {
    "url": "assets/js/43.dd0e440a.js",
    "revision": "29120603093903e786afa7959f5379cc"
  },
  {
    "url": "assets/js/44.89fde36b.js",
    "revision": "f66d6ad6bce7e682b642d230e97d725a"
  },
  {
    "url": "assets/js/45.b1c951d8.js",
    "revision": "d86cbb72249092751c5c5cb36fb20a4b"
  },
  {
    "url": "assets/js/46.1d8bc571.js",
    "revision": "0bf45738c0596a45ce606ea98ba47748"
  },
  {
    "url": "assets/js/47.8597c934.js",
    "revision": "3239f16d1b2488e36639970fb1c033a6"
  },
  {
    "url": "assets/js/48.a500fb2b.js",
    "revision": "87833b209b2d943788300fd2ee2211af"
  },
  {
    "url": "assets/js/49.a4864bad.js",
    "revision": "3a776b42017ae88aa48b2a4928f54b28"
  },
  {
    "url": "assets/js/5.2679ebfe.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.74c95467.js",
    "revision": "b63b269430ee6b9be0cfc421befb236f"
  },
  {
    "url": "assets/js/51.8697f1b1.js",
    "revision": "cf7f90268dfdac964b1bc22297ccec10"
  },
  {
    "url": "assets/js/52.03aad984.js",
    "revision": "e7778cf05fdb1b7b2e48665b6c46fbc9"
  },
  {
    "url": "assets/js/53.7d9c95c2.js",
    "revision": "6b99f7a32b6be2ec4fdf0ecfde8f965b"
  },
  {
    "url": "assets/js/54.4eb9d102.js",
    "revision": "ccf1b705250a0f5085f81dfd0d22a869"
  },
  {
    "url": "assets/js/55.f64a0f61.js",
    "revision": "c6539461d4a1c0c54da8c8449f206b17"
  },
  {
    "url": "assets/js/56.9d0145b1.js",
    "revision": "9629eb4edc4b85906e2a54cf08029a25"
  },
  {
    "url": "assets/js/57.90cf8838.js",
    "revision": "78537b633820f0e93348608870866423"
  },
  {
    "url": "assets/js/58.37ef0841.js",
    "revision": "0498c2e0b6df86d6b7bac8c2b175885e"
  },
  {
    "url": "assets/js/59.db4774c9.js",
    "revision": "cac6d5a0e21623c817ec0975c38af5c3"
  },
  {
    "url": "assets/js/6.81af9301.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.3f21c124.js",
    "revision": "e70ac1da6c7ead6ad343ff3eda95e978"
  },
  {
    "url": "assets/js/61.c5f9e5bb.js",
    "revision": "929d5bccee5c29cc2593ee4da4fc6443"
  },
  {
    "url": "assets/js/62.e3c606e0.js",
    "revision": "a4d007b950f2f5d756064bd650ddb9db"
  },
  {
    "url": "assets/js/63.5533fa5f.js",
    "revision": "5c241ccf4e9b9b91aa5fd2f023d29910"
  },
  {
    "url": "assets/js/64.3ddb1082.js",
    "revision": "afcf511a8db0c45955cfea5690dea98a"
  },
  {
    "url": "assets/js/65.eef1ed93.js",
    "revision": "443ea2889b5a29ead3c93b9618c87072"
  },
  {
    "url": "assets/js/66.da83f998.js",
    "revision": "283385624d86ecb92d17f613900461c4"
  },
  {
    "url": "assets/js/67.fb1ce87b.js",
    "revision": "a6f976a36f181095054d300a1e965063"
  },
  {
    "url": "assets/js/68.36a855b9.js",
    "revision": "206ad708defd774b8f35c5a32773fd67"
  },
  {
    "url": "assets/js/69.9f3e0747.js",
    "revision": "b748e817729a435846a8a76d93a0d3fd"
  },
  {
    "url": "assets/js/7.8702dca7.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.f49dea5c.js",
    "revision": "6be44178b3a6f5643018d8aba6e1f8af"
  },
  {
    "url": "assets/js/71.356f7d88.js",
    "revision": "8d5e4748a23a97754061159801325ec5"
  },
  {
    "url": "assets/js/72.de3a044f.js",
    "revision": "ad904b89f69bdd9fd56e359e84552c3b"
  },
  {
    "url": "assets/js/73.5a8f04fa.js",
    "revision": "080358ba9dd82b4c4ab5b355eefec65c"
  },
  {
    "url": "assets/js/74.8ea82ff7.js",
    "revision": "05641ab151d1fd53af133fdb3b6233ca"
  },
  {
    "url": "assets/js/75.f7efb4cd.js",
    "revision": "1594ccd0913e22809eebe93c657280fe"
  },
  {
    "url": "assets/js/76.14cddb32.js",
    "revision": "2ff9c7f1cb0c15f5f46caa97ac4b77f3"
  },
  {
    "url": "assets/js/77.09177b83.js",
    "revision": "7460380c85f0b422a9476b5df5905132"
  },
  {
    "url": "assets/js/78.0167b526.js",
    "revision": "d7628d67ee8b096c14efda136fd41dd0"
  },
  {
    "url": "assets/js/79.31963b6b.js",
    "revision": "66a8c4937942744a4991d5efb61de4d9"
  },
  {
    "url": "assets/js/8.700d872d.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.5ce42c1b.js",
    "revision": "d32d5adaf6b5cf23745464349c00208a"
  },
  {
    "url": "assets/js/81.27195c78.js",
    "revision": "a01a04a77bdc1be9bf08e5bf0aade680"
  },
  {
    "url": "assets/js/82.01950a1c.js",
    "revision": "0b231ed4f26538d7bd93e5776c8ddea9"
  },
  {
    "url": "assets/js/83.2793ec66.js",
    "revision": "651d5c92d551b583c64e0ad0b81eb357"
  },
  {
    "url": "assets/js/84.b203ed0b.js",
    "revision": "32742d56897645a4894af943144c274d"
  },
  {
    "url": "assets/js/85.f48fd335.js",
    "revision": "a76b61b88366d50de67341e4e65e4f5b"
  },
  {
    "url": "assets/js/86.e0bd01db.js",
    "revision": "d2b16ea58666d0945ac8cffe0ebb155b"
  },
  {
    "url": "assets/js/87.24e5c0d0.js",
    "revision": "85e452548a0105cff9f5266e8261c7ae"
  },
  {
    "url": "assets/js/88.3536ea46.js",
    "revision": "a59ef3d579b1416640f34c25362924c4"
  },
  {
    "url": "assets/js/89.18a4054e.js",
    "revision": "c547262273f02c9f0eeb28dc7de2a609"
  },
  {
    "url": "assets/js/9.b9ea9e95.js",
    "revision": "2504e68c5a8cb16fd3bd981094156211"
  },
  {
    "url": "assets/js/90.ab536da3.js",
    "revision": "7c1f334a8b617b700efd7a944dddb42b"
  },
  {
    "url": "assets/js/91.393dd77b.js",
    "revision": "7b9818c14da353f2a1b84ab0481b0567"
  },
  {
    "url": "assets/js/92.ec2d5358.js",
    "revision": "a3ea425f9758c34ed7d8c1a9d1f52846"
  },
  {
    "url": "assets/js/93.1bd4a2cc.js",
    "revision": "f229f483339ababda10a98c89a81e7da"
  },
  {
    "url": "assets/js/94.2f1f4f7d.js",
    "revision": "93fe37375ee8fbdbde80fab976fc7c4a"
  },
  {
    "url": "assets/js/95.1844f2f2.js",
    "revision": "7461d68205f18c6a9b9ccb4e5905bc72"
  },
  {
    "url": "assets/js/96.d19b32ea.js",
    "revision": "799aef732d842f659579cc7e99cd44d7"
  },
  {
    "url": "assets/js/97.d042847c.js",
    "revision": "a98e21a2f347dcd7276608892e95f86a"
  },
  {
    "url": "assets/js/98.d9b8605a.js",
    "revision": "d22415fb22294146f98d7eec2c9702aa"
  },
  {
    "url": "assets/js/99.349ca994.js",
    "revision": "3cdbcb5ae423d21b1e5fd8cb03f23c32"
  },
  {
    "url": "assets/js/app.178c12bc.js",
    "revision": "5f593e5b2f57ebdcc9970c7fd2ff1af1"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "122f2846b5c8d9e7f664d31fa69a954e"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4687d683ec8aec87f8a76faa76d04dcb"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b7ece087bc3188fea655e136a312ca94"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "14b4e3d25760eb0ee6c9d4f29153d386"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "bbbac03197167eb22f6507cce3357c5d"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "47f65664b3bedc80e45f42397cee710b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "d24c1da9b47b2d8d9241c0206c2cddbb"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "9f480d881d2e9ff9f80fd3933aa98a63"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "abcddcf3a338a5b50484d506ddacac00"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "e51e43892ffdf5f1662a8c2d165b82f1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8ab2a0179d5722413e3103db58cbd1f1"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "ddfaa29cde7777c36d2152fda6492293"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "83eab0e101ce92b4f315be0739749c6c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d7dc29694c58dd5d04f633e6c193005f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "81063c1dbf08059db9749536bb05c80c"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "76eb82d11ebd15170ddcca8061703af3"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "935529b9d55dc030a72216dc8bc31ca1"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "1fcbca3285d8ca966caecb37da35058f"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "d0fd9bdab29125ea4dbf9c47533bdebc"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "0b840ae7c5c3233a2971bf3b17114594"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "eaece45ad76b3b0cb52c7d8803709512"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "3928838ff329f60b1c806169e18bca66"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ed9a8c7dc3f69762fcd3c1a4eb37cc01"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "27069ca3118699099a4a8d9659421ec3"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ba46187c8914c3df62425dca45672522"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "ef4b556fa32caaeb71407c6a3d49cdd5"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c3444152126ba72f3575c57b3a46b344"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "7a6df6e829f998f30d7daede264276bd"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "bab0dde2075b4fa50b0fd1b17b3e21fc"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "05ebcbae8b07b7494555a5a5a0c9c79c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "16cb7cee19f8ff52ca47e0f1729c5fdf"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5e26a331b356edacc97ec0cba2cebc61"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "3f4e361f416e716f6039be370b5db4fb"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "462c6d6f1c1177c8156b57edba907e9a"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5405013bbfd99b6eda2f08ba76640b28"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "008105bf485625d6ef055745053fff56"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "ed7ca966bcd0a168a11d1abc50ba693f"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8bde36f09706e98eb66551f480352c39"
  },
  {
    "url": "basis/index/index.html",
    "revision": "223d9382305e72d33bed4978ce8e8431"
  },
  {
    "url": "basis/os/index.html",
    "revision": "dee9a34a0a11482e0659423958b33ea6"
  },
  {
    "url": "book/index.html",
    "revision": "627abc919debc765e857e89231c74d59"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4a92e9fc85d94f8519de4968804eb42e"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "19e37cd94a53cc745c4d05c3a01f8685"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "affc7ff0de56b6fe303b636b8998032a"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b26ac494fbd1175792d3b260910ff646"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "cc3b31018de8e5af4164ff91f8887224"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "652dfbef8c6c8d287fb4a0f6d11b545e"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7b8d4cada8db2c7da71c144379b69e98"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "8166440af73f30f1e07de611b6a0d68b"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "938af2ab6205d8832e3bd0d51e477940"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "10a17071e422ff4d6db426eabe267d56"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "086f273a54229d23d355537bc5797920"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4bb064a42cdbf51fcbbd0c758160df5e"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "01d40ac6783b855df8446b8015789d99"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "4c84a8fb46ee3ca13a28a93575d4041e"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "bb5cdc90108293ba9a25582a31a974ac"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "ace5b20f8c360e4d3e898df1ad251409"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "1f8d3fec1221eb903fa96066b5acdd6d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "c3caab3878949c26edb14d1cacdcecd2"
  },
  {
    "url": "c/program/index.html",
    "revision": "afa3212249516d60498d7089837b2b4f"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "68cccd84e04bf0b35c5b0f3ded738e43"
  },
  {
    "url": "categories/index.html",
    "revision": "0df579d7d338b54fca7e964794ce0a5b"
  },
  {
    "url": "figma/index.html",
    "revision": "35f07cb685d4e83c053409c50ae1c819"
  },
  {
    "url": "flutter/index.html",
    "revision": "4f8429b4893fc8524782b4120edf1bd0"
  },
  {
    "url": "flutter/point.html",
    "revision": "32edae3066a8f8442178496f7cdf29aa"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d92a9ba27283fc925cbd176a273476aa"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "48c27d1a0eb4ab3a3fd64e438cf7f8fb"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "7a8317aeaa07c1c1b6135a6e3ac85765"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f44758384d1f7569089013dbfbee411d"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "bd24b6cf232cf352dc8f4ecb6af31f3d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "38e48e95103bb7ca3f938f830be88b0a"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "89a1ec7cb6a6119307dfaa726aebb948"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "5493f84278bc903fdc1018429c26a4b9"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "0f342b760626304ecc8efd923878c386"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d3076596f168366d406a64de2232fcf6"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a03e1a93ee372f754588cca4e2fea041"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9deede0f9ab1672fba913566d4a6b1c6"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "91cd4d9a54c5a4bb269123caddec12af"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e4ce33261d07f89629ebc0f311abc809"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "78550abff13e67aa3a3fbd3ad92c0db9"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "b1007b74718128c56895a9b750eb0244"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "69067e205a78886650417dbbe0e39bc2"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6da9b83112010bca1f32964d1d09302d"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9dedfe9df2e9cb2b263ec94f304122d1"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "df93ec14f2692632700c413c5096ea75"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "91dc145a53aaf1e8011a7ecf3135dd17"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "490e9110d49a5e47aa1fd5cec8c4c2ac"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "8d6686700e5c053984b2fe8c8b166dc5"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "e26ab76115d801b24ad54a250166b90c"
  },
  {
    "url": "haskell/index.html",
    "revision": "27a4f4115fdba010e948c71f24453aa5"
  },
  {
    "url": "index.html",
    "revision": "c4137d68056a56c6f7cc703f519ff4c2"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "353263359f6b90f3da2d8170fe41e64a"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "b649f01f8d359d3951e20b90b54fc616"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "6294a16801d75ec8cc68eb998f287e7f"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "5ecca0bb2f6002b16bc789c3f710de3c"
  },
  {
    "url": "python/index.html",
    "revision": "e1cfdc463fe3e3f96424865d6fa9155a"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "3f5c7e770cc0104e111235ba580a21a6"
  },
  {
    "url": "swift/better/available.html",
    "revision": "54f07850460780f760ee5d9d07a5bb0a"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "97f921eeae67cb15dbf133debc6e4cfd"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "a8e5eda239a9282f299d2b67a0631001"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "2c2018a2705aab5365043806f5738af6"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b9555adede990c39e5d277bc3c89c9dc"
  },
  {
    "url": "swift/better/index.html",
    "revision": "db045845b0094643f872eb98779f5102"
  },
  {
    "url": "swift/better/last.html",
    "revision": "f60899fe74d3e0611b29836545af5de6"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "eeae8445219b4d69904e8705230f1799"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "6c8c2a29a510e91d087eebc6149e9173"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "cf83c8ff7d6225dd5cfcbe7efdad553c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "38876f8469cd0f74f923f524626c653d"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "513356312292144fd1ffccc19e00ec3d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "f72e3a955f05de30e5b6b60dec6fc515"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "b5a6523cabb21bfe5ad4d083b4e3e103"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c23594e7fd673608ca7de0f23b753940"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "dce95c140a03779a777fc2b8cecb7111"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5b1a3b78916615f6d9622392ba534e54"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "af278f173af2cad8de86670b1fc78dfd"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0cd7e5f05496c57ff18313b042c159b0"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b249801bcfb766d595eedd47b747028f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "41331f59803cc855737d4f1f7d091b23"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "fd168f3e34519a116b456d723c16b537"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "aa79f5a40ac1941ebed1aefeafb99541"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "c9f12c23b0ce7985d10d38350e9a2800"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "110eee6499443d922ba32986fc35196e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7ca37c113020661be5011d6eccef318c"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "2df5b637ae74407a7732b2a4de2977ca"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "21d8086b13ef2cdedf55473dc20c7a4a"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "df77c6882bb71522e128956ac7e45f7d"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "5d2390645ea98338ddb8ba2a4f74fc06"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "43bc71e9134c39e3e081f86c6cc76b0b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "aeb7976b2119e25cbc42d16fde14ab2e"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "923f1c00e937623996f4ad31a1b4759f"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "dd2d9175d1278c66c22cd3c1fe3306bf"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f57ed7a66f8daf8a718ccf740f02653b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "c6e6973374f7b2cb2e1c6f676782902c"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "14de6c7e9bc01577fa1d03443f712cf1"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "958c7967fa94fbc5b6f9d9cbbc77930a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "5d8501db40938534de495471c70fad18"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "75a58170831a250fd86ad64d86905948"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "8701fd6506a60b666ff71fc16e645bb7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7d52c6594fa7b9184247dda02fe10d63"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "7f0c3289a7aa885c8c215ec3c7100a79"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "bb6c13e4bb5e7c691ef4e7a32d46b155"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "67cf5669c952d09fb4bf784dc2cd469d"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "e30297c121d08dfbc5021215ce4e5371"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "17992c0b23e7af9fa3c7dc4885895a48"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "8e43d436adf3e718b0aae32a106c19e6"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "67158ca8a09796d441a107a856c5d1d8"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2ad5831afd3edf87599f803ead55f148"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "171de8b658104fd00c4b2a5964aa6ecd"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "3b29979a42035addacbee5759de848be"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "794bc053676912d52b41ae83c07b87bd"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7d3edcd3c48e961b5adb120585998964"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "029e53914aa522e43bf5b46cd1beffcb"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "e5efc182bbfa66e1ea4d602a5426fa57"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "6b4dda4a7716e15c7a57e97c85fb6a63"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "ed4978fc41d6ca2bc421cc2ed8a3b61d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f9539d65ac2cb6f21d613f9528e2f520"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "9cdd03448e213469f7477b907100dc01"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "228ad7f613cf5c6c83b3b668bb0a57b2"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "30fc370b6aa97b018f72ad3f0bee5069"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "7ed97124864e0393b5a4a45439a2a145"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "57f5b1886c54ad7cd76e7ef677165970"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "bb7ab7ab00186d06c844d2c0cd1bd63f"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "246b7c48a14b68f4297da39c6234eb7a"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d2ef774f298ac8c93fe55ebe73114ff9"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "fea2f94742907d0948fe1e0d7a5ad85e"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "dff987924f8782923ba67621e4e69bef"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "96db9fe4b1058bad12bc5989e14bb2e4"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "f0e8c10a853e445d20ec2bc505e29a74"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "1dd027c5ec7a478a441b64369ebdcde0"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "ebc0ec62f22106a5f460c2e4945c39f6"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "d0ee1cda442909d11304768954ab7129"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "e57ae5cc9dfb79efa1935ed242bcd836"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "f32a677dd6d2f83f76306d523ebc2d15"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1f284e24142ba48131a29acbcfc68ad2"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "3ea347cf67fdff949ba3818f9c10992e"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "23ea29a5872b7e2899cf7983d3f2dc27"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "1f38a1f09eaa84e40be01ae93c9b5908"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "ea9880e3f6c55e0c91cae4085a00f340"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "475d7ba33585adaf17d2aed5c5341123"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6eab4238132983ddb6af591be39f3e89"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "611fbf546e2b0b4825df8be39f282b07"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "19dbdfba3d627c2848c95710cd5bc24e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "1cd78735633322a74088cb06267710ba"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "63870d9906dedc09714b4cc4d7073a35"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "095a510a91e4ce6e8383bc4a9e952cbd"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "271442bd20b22f61ea7225c0b17512ca"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "d1c4d21367cb3f63221d299772a4cd28"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "7208b9960a20f7158d38fc5e6637d78b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "f050f24878c75861b9a3bcdc1e27888f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c4c2947d5803286e32e7617779cdad15"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d7e897838dcde2307106da2c7fa07d16"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "34ba10ea81c4e00d84dcfde5fd673b16"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c520f23cc7f7f8a297279300bed1957f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "f3dace48d3c7719a0514a6ca095ef39a"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "b137115835ee222a093ba003541cb862"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "177ba1310df9063cc0a18f3203ac9331"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "853aa3063ff13021f0fc644be6f9454a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "fbebb1ace37c474943487ec2c6a13772"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "669829d5d4ae591c6b8b0d1c744682d6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "34656e4236751c7306913a3e564bd8f6"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b96aff60a5cfc3db9c268535acbdc8e2"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "07d3f54d56e5ebf154ea4aa4c60a5ee1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "15f7dc9e4514dc7165270aafa021370b"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9fbb0d43b6748d6391d50b0723d49662"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ba2f0e70b4f841c7fd4497ba79724f5b"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "87069570f6fd1b24e9d6abeb06300313"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "12f82e35ebbd389d33b0f1543aa3f3fc"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "0d9ee648413392a6e537b5b6900b963b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "331cea437be07772ba0b270a7e791375"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2a51f9c853d58b81d2bbd0a5809d2cf1"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b3f7220ed71c7b8f92667d43df324b87"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "d1be5cfc1986fe8cf5784d50cccca895"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4e06ca8f404966e8ba167e1a4b1439f0"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "2965c3734e36a9f39f29029efe93a790"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e5bb97a7675ac32de9d3b78f687fba1e"
  },
  {
    "url": "tag/index.html",
    "revision": "2cfde0b38e49061bd7720ff04a2408c8"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "47a0cf29991817f4eba0d2e158f823a1"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3e3ebc3aa16ba7f9fbd6d4bacb9896ff"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "1aa335f2eb1bfffa67ac9fe2eb97b180"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "9790d5dce021733906dab316ae4b69ce"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ffaa2a838161759e130a6d4c7a381251"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "29b7a7c42c917040a3187489a842a53d"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "36cfd2d5573e9cd53adab6859c32cd98"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "fc049b19037ae68ce93e3a80e5ecfd49"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "b6985ec25e25feb740f22a45b193575f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "00979a53f4411cb760bb7a47e8d751c9"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "19524606627d34e9bafd69f5bd3f9d15"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "2a366867ca648f73706c21d5f5b46e24"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1b0845d1037859cb2a7d629c4621b325"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "b0b6634336c48ed02999f226e265b459"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d70613bac43ceda481c911b4bdb5d5c0"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d984a7016a974a91a84d9c786f678d7f"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "e1b64bed0dec2c3e08445b0a7ebce5e9"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "49ed15a126bd2f84d62bdb73bc12da84"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "6566d06e3a116e89831073e9cff565fc"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "01f12d78f0cae6cd27393a1439730a76"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "485e876397daadee1ce7003f7b9a1eea"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "58e014c1cb9a049b341b82c496ff95c8"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3db71f7d2ca3ea0ab7a5dabc3cce9d5f"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9a6587662c434caec54198323b44bd81"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4293186146f62a9114b761b4076e29f5"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "845e9594502a884da96051b2a815d77e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "89e433d38497e3a069725915d84ec322"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "34c68a7680489e243e4d68aff41fdeae"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "c0818bcc8b0a9e3b77d1047f41dd90a1"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "fa2979fa075c9dd921b11f740174d8bb"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "b65f700eb4f82e57713355d6cf482a30"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "585d64cfd4fea413cb4b0900c8b5e13b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "6d8e3f770f3fd7aadbea081b729026f6"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "b3bd26471ae1883e40f707e5d1b2d94f"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "27c9a46ea44a3f929824c612222b24b1"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "aeee13e6cdfbeacf390812cd457f356e"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9fc27906ed45eca2c3cf58816b162736"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f2ba7788c9ea81967c263f0d7650dcd4"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "730f207526e62cd19fd59b2159635f7a"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "86d972a29f532c112348c8d888dda604"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a6244c0dce938f03bae06c770c34d3af"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e0e55a4c42058de6a2b5d8da4076c8f5"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "2607453c6665bc2e50c0861592e8620b"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a82a502f519d2de23c4ad302d1c10096"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "a2c990d1bcceab46f3c94a7bf718a7a1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f5eb9ff20b456a29f4313573d1c78895"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "61476c064d1154c1db3af5cf76be7b3c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "7c1841645fc4f1dd2dee0b14c8de4c50"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e29bf70b205df571830c29f2d7213a80"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "bd71889156257ece59624b8372b4df14"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "c341df972e3a2acdf659913a75bc37f2"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "dca4b79cd4b5ecd79309bf9422b04804"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "414d762c0d5963eacc6ee23282edcc34"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "5e49a4757e63212133ff333a9bc33312"
  },
  {
    "url": "timeline/index.html",
    "revision": "529f94e34e7d7f22dd07b4535ba70eb8"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "d31ea2c8910ce7e7f509d72a346aa183"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "536461aba0def907c2c8fa8b9c902ad5"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e0b441517ca6f41f2341cbbf7a7672cd"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "66d596e383eaeccfe7f49cc10bcd8b76"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "10941e188d22118bc97dd2c543518669"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ee61590dad60da39d3ac4b4504ce9d00"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "7658497b0c8b09f890c050210799c026"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a1eb9f717a7741976496c0560556655e"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "e69904502eb18e3d00ff096ac4c7f9f0"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "0bb00aa4ce91850d8e4e695faec82f7f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b192f7cd1c5e0a4711ea9ea1b9febd47"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "e8a3d34169f2052fcea2d0e1ecac99b7"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "4d0208901ed11bc5a865c020eeed7bff"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "21f4be6c993e33f9568b2f59a95a134d"
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
