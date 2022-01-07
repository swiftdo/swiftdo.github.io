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
    "revision": "0d851e15e0bcc22493db12ca46df2ba6"
  },
  {
    "url": "about/app/index.html",
    "revision": "b553e946ce24c3ea80d9ec2fe759afea"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "e7718ddb2fac384c8a08bb424efd7686"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "1d423cebd1292d38b68abef25dd9ed32"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "a3ce92b6fc1a8324a6cebf237dcacb38"
  },
  {
    "url": "about/index/index.html",
    "revision": "2e028f0fa479e44c1a7fb2a819724c75"
  },
  {
    "url": "ai/index.html",
    "revision": "65ea151e5df51206b78226126e33cce3"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0652c2e96b5e537cb91c326dc196a0c3"
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
    "url": "assets/js/11.42f64f30.js",
    "revision": "d4f9488528383e31d58059bcc6041eca"
  },
  {
    "url": "assets/js/110.7058c9b4.js",
    "revision": "4939a4cecb08896f77109e5122a94a98"
  },
  {
    "url": "assets/js/111.76f824b6.js",
    "revision": "897970b59c3994f3a59212ef108220a3"
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
    "url": "assets/js/117.583e1f0e.js",
    "revision": "879e6259fadf77dbd9f12014e9a46aa2"
  },
  {
    "url": "assets/js/118.eb3217f7.js",
    "revision": "507c9e8208e7b905cd2a8f9f55dfc64c"
  },
  {
    "url": "assets/js/119.64b23ddd.js",
    "revision": "fbba650e2f64d0e4a1ab1a4cfdb3eac6"
  },
  {
    "url": "assets/js/12.8d9c5293.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
  },
  {
    "url": "assets/js/120.894f9103.js",
    "revision": "1294829fb43ea1856d2565316f967c6f"
  },
  {
    "url": "assets/js/121.6bc984c2.js",
    "revision": "cf2924f53abf24324f9bf707a79cbb46"
  },
  {
    "url": "assets/js/122.2086c3d9.js",
    "revision": "b9553c9b0948a3885fe4e7a39719bd29"
  },
  {
    "url": "assets/js/123.509d1e4a.js",
    "revision": "9241d7da50201a858cdf415b9d9e63f3"
  },
  {
    "url": "assets/js/124.c3d657af.js",
    "revision": "0321f53a991b215c0e26cfce9af37ff9"
  },
  {
    "url": "assets/js/125.ecbdee50.js",
    "revision": "7f61499ef47fc6a9f8522ebb03144bdd"
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
    "url": "assets/js/133.0f96c8dd.js",
    "revision": "f16a3f724866c127c761631c72ee501c"
  },
  {
    "url": "assets/js/134.607ad70e.js",
    "revision": "de7c34adf122d78711394a7952c1031d"
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
    "url": "assets/js/143.1282e89e.js",
    "revision": "7d478aec938355b2fdbe37bf5c3c61d4"
  },
  {
    "url": "assets/js/144.409df3d6.js",
    "revision": "1a890ede3e02e3e9cddde14f930c8a40"
  },
  {
    "url": "assets/js/145.c95a58ee.js",
    "revision": "1bca348678ae7458ab8b033a415a5185"
  },
  {
    "url": "assets/js/146.4593471c.js",
    "revision": "c246fd426ef1166bc84a3707f9e4a21a"
  },
  {
    "url": "assets/js/147.62f55fa4.js",
    "revision": "f3ec43de697c163f867c42dadfacf925"
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
    "url": "assets/js/160.93d51ebc.js",
    "revision": "9ad292fbccfeda29ab89e496477f4f15"
  },
  {
    "url": "assets/js/161.4702f0cb.js",
    "revision": "e7f6f374a3a251154d50ac8400644668"
  },
  {
    "url": "assets/js/162.5b9b31a9.js",
    "revision": "ca13e445bcb58897af800fa5a2066f5a"
  },
  {
    "url": "assets/js/163.410d88c9.js",
    "revision": "7276bd87f3fe223ab62c3f6732414d9a"
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
    "url": "assets/js/186.b09c1c88.js",
    "revision": "03941767fd5105662045acf94bd287e8"
  },
  {
    "url": "assets/js/187.7174a851.js",
    "revision": "7137e8a58468807021a8e259ac4a404d"
  },
  {
    "url": "assets/js/188.1cc947ac.js",
    "revision": "4015e833f61a9b7d21a3c867f46e5149"
  },
  {
    "url": "assets/js/189.199e772d.js",
    "revision": "23b40ddd572c925fbf81298fe6ab31ed"
  },
  {
    "url": "assets/js/19.3d2241bd.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.ea57e0b3.js",
    "revision": "e4a8ddbdb4f627f0a7a7d05c5f07b0a5"
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
    "url": "assets/js/200.66739262.js",
    "revision": "28bb83fcafccf78b12327def1f3d9aa6"
  },
  {
    "url": "assets/js/201.f98f050f.js",
    "revision": "acf270139739f39fd9f656dda32876d1"
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
    "url": "assets/js/221.46f88d65.js",
    "revision": "ccd24a8d5b517f507f2f1bb29bc1aa79"
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
    "url": "assets/js/233.5c1f8231.js",
    "revision": "acc41969fe8b07da6d8ca34834ee6d21"
  },
  {
    "url": "assets/js/234.2e7103ce.js",
    "revision": "acb5a7992d23a1aa32a210814f813218"
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
    "url": "assets/js/32.50092ef7.js",
    "revision": "0209b4498639ace435f1cdee48913631"
  },
  {
    "url": "assets/js/33.8ca15494.js",
    "revision": "a7509afbc0315260972a82e959b600a0"
  },
  {
    "url": "assets/js/34.16e39487.js",
    "revision": "3185fec87dd2dd1b8781042775b96a95"
  },
  {
    "url": "assets/js/35.8bce70fb.js",
    "revision": "e8069bd6ef0f56cb5f3d16d3412b9b8d"
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
    "url": "assets/js/46.8d0c048a.js",
    "revision": "130ea456180791cd853eefef9d5e0065"
  },
  {
    "url": "assets/js/47.c74bf5f0.js",
    "revision": "8239d15c875db888375a9f85413187e2"
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
    "url": "assets/js/53.0613278c.js",
    "revision": "d41ca25dbb6f4b80b029b2ffa302c6a0"
  },
  {
    "url": "assets/js/54.151e4535.js",
    "revision": "f8b983fc888b0d6c4ac94f4eb97d92a7"
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
    "url": "assets/js/84.f2b8aa1c.js",
    "revision": "9308de177a6e00e2e1a84ada15a89f9f"
  },
  {
    "url": "assets/js/85.8b8a850b.js",
    "revision": "7163049a53060d15d2edadbd51c9a21e"
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
    "url": "assets/js/90.9e12c523.js",
    "revision": "9987afe81353719261c6d9d4e7045df0"
  },
  {
    "url": "assets/js/91.3e230c39.js",
    "revision": "ffff36cda249d9559f3ff9827426ce5e"
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
    "url": "assets/js/app.b916eec1.js",
    "revision": "bcad6c2ce527dc02efbdb6e340528a63"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "c867870a80a3bd94f6ff262135714522"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3879330be061f31c4b03c4a9de46bc46"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "fa974efb358efc0ffc7dc6686c74d7b9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "8e89e5a252e3ce0a89b2e29dff292217"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "ad0eabce253371a81ec828dfd5ba6d8a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "46bb1bcda3ac0587ad88e2c9f0cf876d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "76f90d180fe34cca031c37de81508364"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "efb76acc89f9c139f3f3564390a8081c"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "ceb5953099e3bb163370a4339ac93eeb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "b82019024dcd4a0d1b42e25b93ded80a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "6a7869d80ea9ea91c847b89fec6b294b"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "df6b8e472480f98eea0a690a22bc5a0d"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "5b8de53d934908bbafb3b67bd2f08d3c"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "d90fb9657f3b9babb546b82dac9a2a6d"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "287b4688e6420b0807e59b047df6a9a8"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "2a69953e037888fe30d716cf6a34d055"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "1894cc44f7626bbb7cce3100e2e4d44e"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "1e42c7865645639e724436b575f71cab"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "fba082f01e2aab468e23d0ff8d265157"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ee6ba7502fdc5193748c725e48f62aee"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "15bdec741e1643cc4d2f9298b1f7c532"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "e7874ce03dd6f5709db2eae8305a7baf"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "bdced04098dde8af6e93a0e6b81e22a7"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "cdb39b5703d676579f65a0ca4e4aa876"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "4f3b1b94c5a4a54f0950e83527b31dc6"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "813e3db6abd7117664a4d262c2cd3979"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "a7fed28d5128a871609d81af7ba70628"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "4cd41ac4d22a4f45bc455c0dd1df94d4"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "c40113c59b3ca862c0b520acac2b11d0"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3cdbf22143e7c324fc6d82f413bdbab0"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "2febcc65ab16dd028227dbfcc7fb433b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "bca84160bc2ccad5b4822ce9dc3be5f5"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "705a64ce73aada32a5131001c93bc1aa"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "823a37d7a5f7c9dc9c7f26dba9846da0"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "f58739336625e682852020c936da36aa"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "49dceee5421b2b88454e9dabd01e6239"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "f88b98fd5818308eb436378b934a4f39"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b19b62f600efa78810d3ce5bd5bc4858"
  },
  {
    "url": "basis/index/index.html",
    "revision": "da6645d5784c4d976d972c974f173eed"
  },
  {
    "url": "basis/os/index.html",
    "revision": "9c2a2ec6e0608d57d78e02e1c2740716"
  },
  {
    "url": "book/index.html",
    "revision": "7e092710d1cbb47161fd4d5859cc2d70"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "7b323f4055fd2c49f17653b3b198f284"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "21610b7cfa42e781b9c319ace7f2f116"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "b22bce0227ecd787118d973c15b2a337"
  },
  {
    "url": "c/audio/index.html",
    "revision": "54e83e839eaaefe564281b335095ccad"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "eccfff5dd5add507805358a997d5a400"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "8799a16b595ccf3466622fecb3b049e0"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "28cdc6d0cffbb817bab98c4cc03f1b49"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "e19fa1162dc502cc0990567ac06602a8"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "b1987617e8dada2676c2e4c2d1a8f4e7"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "2366427c1f1ba109b98cf129572fca18"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "f3a047ff6b7bb2f9c7893d0668995502"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "ee91996d42112aead2b81509da159a22"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "1f4c78c7b856fce4444a0248bfa5c0a5"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "47e1b7d95aec5326745549fc29b71ccd"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "8aa77a2dc2e91e5e7663df7d4ca5537e"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "c25a8be5173a4cd1e18b38158d482f1a"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7e6ecd8b09349925e688e3361a0c7eeb"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "96b0922adc623f279d28639ad296c726"
  },
  {
    "url": "c/program/index.html",
    "revision": "48ce2bc4c8417b305d9cb6e36e2ad050"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "fae59a4c0af435ee8232bb75dc41e243"
  },
  {
    "url": "categories/index.html",
    "revision": "a08428106639a8601348aff970c3ea81"
  },
  {
    "url": "figma/index.html",
    "revision": "83bd663230e4273ea81b8fad6c9895a9"
  },
  {
    "url": "flutter/index.html",
    "revision": "2ff5bd6bd565f44ec0bee27e07433154"
  },
  {
    "url": "flutter/point.html",
    "revision": "909cbab26b37f0d1e73ce1a41fa73d7c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b37be2e283bed629ac11cff6250ae3ac"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "66e76b0a11eddfb8da3e54f383437d95"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "201c3ccfaa7437f206ab950e85559d81"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ad80786cf4c34b6113cafbfe6b0cdeb6"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d5807cf2cb5a9dfc63e9f3f145aec1c0"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6d11730612ae17caee5775c02bd66733"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5aade28a1b694a83bf593d70b6d83415"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6f245951b5090788367fea87857e521f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5b707e95c59e6a21befcdf28ab4382bf"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "d6fd1a5685047df7aaa7bdc7819e8997"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "10cd2852bfaa4a79008d43a1a074d56e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6b74911789172acaa337b7d263ac98b3"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "162c3a20800a11357438f7786eacbdcb"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "0f44ce83bec1175ed2611507f704382d"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "24bb1bf2684a32eda4ec7b363fb3fc1c"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "27cbed3316cc15d28df0b2ed29283ec4"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "635ed0829756dfbaa66c5eac5046e68e"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "fc6090b8873e97a96dc95796840a537e"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "aedfca15450b62ce770796a027b16cab"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "3f1568d5365cf439765332580fc57eb9"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "f4f534f506b485506aa576004b93a042"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "26af865ff674d65f11776bfc2459dd99"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "92618e0fbaff3327aa90f6a6c82d16b7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c975e6a6d0c28c0452424e7f63286d27"
  },
  {
    "url": "haskell/index.html",
    "revision": "70e2a29fd013b583d86aad0c0222e35f"
  },
  {
    "url": "index.html",
    "revision": "46a1683709ecf63e376940c587383aee"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "142889462321ba0a4720fc2bb340b0d1"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "7de333aba2fc73ceb13a975fb212ea53"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "33b4b515e571637661b2f7198b85398c"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "94f14f28a0c5e7647426c63ec64629f9"
  },
  {
    "url": "python/index.html",
    "revision": "2470ccd0a5ef29ce210ed7bebce2d662"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ed9a6d3a33f688156efe7d0648f249b7"
  },
  {
    "url": "swift/better/available.html",
    "revision": "2350f33b5f9e7c19751a8e4032dddeee"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c18211f1cfbcce75ec8538a1140701bf"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "8bcd5e470f38561ef28f4d63b540efba"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "a62bf296405575ed4933c45cd0e4b074"
  },
  {
    "url": "swift/better/di.html",
    "revision": "90456f05d827b66fca08473cf52bf437"
  },
  {
    "url": "swift/better/index.html",
    "revision": "fc60554e9f50ba966e5e332f10496556"
  },
  {
    "url": "swift/better/last.html",
    "revision": "9e194455a1fe3fb17cf018b312a2b2d3"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "ca77902fc667362f651aeef5a3a283fd"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "af4ce72c225e01c11c17497c29fdf968"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d1ddd15e0478809d33521b8b099cc8ba"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a8dd062b84f4471b9800999b3d124f39"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "cb90ffe81e2e23cf05ee601a8c3f457d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "cd61c08cdd233d610d69a800e2057273"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "14740529c165a49e83578e41b49524c7"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b65302cb394b24bc43f34576a5ad3403"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "7477a5e838562f02b0a69d0e013943ec"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "9239c3e9f89c30814eb230376df58449"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "cc5735d17ade67ed32de878f24ffca3c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "388c05ee9155db956ceb78344765ecbc"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fa7b21ee7f3cded22d903e9c897616e1"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "e9776cf3058a0ea744a36df90a9ce66a"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "4e5035dfc6d186e9042f77289360051f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "e905ad1d989e31d7364ccc5762a6d221"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "cf7d49bf4dce0f77e0081126ab5a3a58"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "b3a0395fb7934ea2d28d8d7571db291f"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "7dc968f17b2c3d0c24464d5afced3dc0"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "47bc240da1b48444a47bd8d9827aca30"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "4246da583b4163fc1867d8b91587c8dc"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "8bceb7c790c62e3c656709cabc390208"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "64b4c4850cea77423010b0fb6803f18e"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "4fdf999269f46bfe53c6b6cc92815cb2"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "f519b22328ad72113e571260a1fee31c"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "0d0e35f234e376edb4064f7a743854c6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c5215e8054263364ffff335ea64af1f2"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "1db7e1d1d7a489ac3275c41cf5d8da67"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "1364dbb23f24c7e233683393ae5a9bca"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ac4188a30460a7d4ec55f832da062c50"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e2c7c113fdc1ba4144493fe858036fb1"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "4a678f4867be5c7f6b828af106370ac6"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "2ab2ef0a1dbd8c4374898cf008239df3"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "99ee9474222bf78b2b64cd00786ffc24"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0c1467ff8bdab11a72a46b082a11de01"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "1b3611f8995d3e2c6a91d392dfb04470"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "f7575e660dbf6338fa2e118e79a4f6e9"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "90ff652a41337d465a3ebe85bfd4c71c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "2dba83daeef05d36706518cb9823a150"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "397a2c10cfe0c7d94b7716f26fe9b520"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "bccaa4cc3701abd3cf583d15a401e909"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "0cfbb71640e656dcdfadd066e3c3278a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "8dc21413a6032541dfa1c002214a0a70"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "82049f110add3dcb2d79d3df2b0b8800"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "9db796ffac9fe1a1f4367d4d55e99d7f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "f3cc4c8c59ced667dd68211552ea7499"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b33c4b8f0d016c3e07fdf8d190e1d33d"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "9892a57507d5f28b843acde63adadc05"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "54db4ae67cbf746774955ef3f0d4101a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e8f51051ad04672a572368fa8e489666"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "c6c8a4e639f49ddefe66c1b1086e6215"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "39e3c0601bd8e3bbfca26d88e44dbbdc"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c1a44e6bb003410908428059a41dc037"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "64f8ed0ee8726488013b91f8d146e69a"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "70768b87213bc452e63a6c9ddb2a0481"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "9ad4d47c3572a981e61c39c5a2963d4c"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "94399c4612eb0a2137e65291068b982c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "344057f28c94a574c22743025f086139"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "915a24df2c670e067f7727c7afddb91c"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "8d7bcd2186786a6bacd15203d0b2e1ca"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "35ba4af06da03f7ed5ed1f41c82e751f"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "26cf8ce258c87836e33f8b30d5af4bef"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "986dfd98f53d2d98e7e6a3dc86ec4430"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "732c549ca5b1c64a76d90bcf1251eade"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "61049ba8221f241ba379f42c83d26d47"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5e5d41e5329305545de4d79aa653b8a8"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "9b3c606df2d852ee0846715a967943f3"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "ee7e2ab93eebbd1f3300acf984794577"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "4f5cc2aaa3d9c01308b09a7f802eeba4"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "40e31ddfe46e3fde0157a09f2de21262"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "6ddd6181ddfbe022dbd43659c8b2eb01"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "58b61f862e7a19f6d8c4b7dff767e81a"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "87a3eadfd57bf03fc57cc71307b0be9b"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e6f66d2edb3a3f33b11d4f3a914cb7ab"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "11197482ef6746f3b1157c3848170d94"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "8ef6095324f9a9d5b76d911eef03c4ec"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6cfbb8c2d9af9260e270bc266068c6fe"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "d779f0f9eb18d30e92c13b7c56013c1b"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "0bd11ff72710f8c5a3db9b5a7a33afd0"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "632e8c6e16e5bfce62190e7bd7f09cab"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "16b38b8e5b14829f030e7274a77f1c8e"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "abcee40ac4bdd44e77e05d1ce45ae958"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "733e2c91ac8ee7263dcbe4326cfd49c0"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "c3c284aaa4d6ecdfe0cf1a6716b8822e"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bd03553228af2cc05263b8e5a601d928"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e3d2253a6e788ce37b9f6808e076e031"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "51fe218de77336301a93e7f26390ef1f"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "4dae9a824906913ecd3db8be4a803df3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "21cadaf3fa49f96022201b41a17f0c9c"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "1c6eedce47fcc6d85ebbe49f681305dd"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "50128cdbca17a25662cc457133cf850e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b999ba3ab079e3dd47d55f4025db0cbe"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e9953759dcaa2ba0989b981b21f34db6"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "0975e890d83cb0816cfb8c3a227e815b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "044102e1ba585a59ff454a684758c560"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "3a099d22c896c823f2334d4f40cb01a2"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "df4d350c173fbf3a4a6ad50cc9bb3514"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "7dc306177053ba821ed02b6d2aafc0eb"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "570a291f4870ae70e55d728084d9503e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "9b4333965d3fe6a6711ffb97e1a806d0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "850f43c639062388715a52fc19cc0b98"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "9e31fb96867b24fde3d67f531d622879"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "cb7cb771d1206cd7a4da95e10b360aed"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "35b8b796848c6822370e5dd0dc93e768"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e769837943e18c23a86198401fadbfd3"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "32d3701f5ee1c9477e8fea4b1d53a15e"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8194c65ad78f9c02be2268efbdf83f83"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "67eb320a2a03c00633de326a3bf6af92"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ce8697bf2b422d0ef0c87eb464ffecdd"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "4a96a4f52e8c0479c2b7c42448af7dad"
  },
  {
    "url": "tag/html/index.html",
    "revision": "cb1cd8845a95c6bcb58631a125bfa306"
  },
  {
    "url": "tag/index.html",
    "revision": "3cf420129b6894e555c78e54ad574eba"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "258643cfccdd8870cd0fa8b694db5dd3"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "df9039ba4a93d6ecc2351fc8edb1da5d"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "3fae29b8b11bdd63f2b33ad0f9f85cbd"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "dcdd333222c498e6ba0cef0b71461fed"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "ffc6530fdf6b1eaf853c8bc9a061cd2d"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "3f9a76178ec1d5f220b0735e1b7c942f"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "6cdb912b4a8600072c2a47568bd20db6"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0a20ac54a7df2b2c49286c9cb3321bb4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "3818b98cfdc7785845b711ba1d33130f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "81a1fe13cb6d1f0ef47f9b7ee20557b6"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "04f145d4af05178c9fa037cba54a613f"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "7f076de7dc8eeb0f05c60734281fe23d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5b4eab2ef1ee170604e7cb9318e16adc"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "40515dea134acd7d4699ee22e1fc7d23"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "920ffc2bf7c6952aa938dfe74d56f158"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d5aa3b407a415c3b8a9396e3febf7931"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ed57a80655d794ec178143b4c8aae368"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "936873c91a5f595f40b60a28472615be"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1f6ab4c6e20bdc07d9c6fc5dd91b6a31"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e06260eedde192df96a9c2f10811cbe1"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "77ec26a3121d7514b8d12c7f58d5e433"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "f7c90232a5fa580ad6b111e9f039a9ce"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "909aef5f8d463d10efe1cab5e5d46e13"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "4e2abd7e96cfa3874b99ec87c523f420"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "5778effe6156c1ab2309d3915713c71a"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "934e6d67d4385b9be209ca1ff047b114"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "0bc6c23802197a797c3791940ff31577"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "f4a43cac9730350dd148ea84faf6e04d"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d602851e76f46896de403bb0a7f24559"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7689309014662e0202b77adac788974b"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "9a599c2480f8b2328a96716dd417e997"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "f5945755357182c3f392d81e4a31620b"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "34d2da98f41ef479e4b6b9e1e83fd2c3"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "f1194037128abfceb143fa2d084e98f4"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "0d16c49a243dff05e1f68f82be6bdc88"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "bc4b62df63f4c43dc958939cbfe3e071"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "68b7ce8aec52e08fdccb8b1584809e7c"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "09d943b111ca6e10b63a0af25de4735a"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6232492d4646ba4d93f4717c0fe39598"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "c425ef860b25a7741ef7423696889a18"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d12c2f45e92baf60773e4c646f0c8acc"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c46dd17c0c227b4df1b8a12063ea7a5a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "770d5ab1e90e0f47cf00e76830d45a80"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0097359cfa2ed5eac4e4c50e0e7fb84e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "495f92705f2899d8fc942b1afd0096b2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "9116d32709d142bbe1a640b92a877182"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f68c8bae002547f5557ead08edbb6b8e"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4d21eae7312ab3fa31be7dc1699df430"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "00fb6f3071b7a3723d652235eed74404"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "3630e43d8f0a0b47ec7c0f82ab409f34"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "81499c56266a67036101493a43ba75a9"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "30979546e21d98faac8e0ade2f792c32"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "1c621400966d1cb2d819dd313a25be75"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "70978627f2d05ccc281ee10974eba91b"
  },
  {
    "url": "timeline/index.html",
    "revision": "666410b864582cddf79f137f8a90f639"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "a499e579ad996febcbfa31b9b7539f83"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "4109479979f41a2b790e4cf0748fee55"
  },
  {
    "url": "tools/git/index.html",
    "revision": "ff9cad306b19d3d146af2588c4db0e4b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "0b738ea4cde621c4f7b2c5404fd1cdda"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "a2bed146bf1edef39389ab8a961d6466"
  },
  {
    "url": "tools/html/index.html",
    "revision": "2cf026430ba8e5b99d88137d49015cbf"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "bfc873d37e0c1f221fdae79a2dd4d283"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "ee51cf07a6a133bfe88653a178f9f33d"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1a4c4ad7ccf7d89ef20a990f02e56497"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "6e0b794f9d4bad0f5c957e6a5523e350"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "899d7fb09c9ea6ac7171f200b5ac39ac"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "96cfee8d8ef5261a4c78e839fc7f0cff"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b00da11dda919133ca28bce0fde864a4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5d9a77c5f3feaceda7cf4388a734245b"
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
