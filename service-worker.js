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
    "revision": "c6b645ec1474925cec1fd027753f47ad"
  },
  {
    "url": "about/app/index.html",
    "revision": "6f977b46475f24778f40f27818b19dae"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0525e2c9730b19255dcec731910c7314"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "8f543eb6c0d12a22103d8e316d4e85dd"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "603c2d20d1e8c5a0d2f6bea908344543"
  },
  {
    "url": "about/index/index.html",
    "revision": "74018e974e1c120bdccb5538e073453c"
  },
  {
    "url": "ai/index.html",
    "revision": "7bac3741b4823b27669788026bd992e4"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "4a5484af8038645ec94f1a0e7c5fb407"
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
    "url": "assets/js/1.f05c8c5f.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.2b0f2ac7.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.98b290f8.js",
    "revision": "ba891b9692e9789c31f2b060501fbde3"
  },
  {
    "url": "assets/js/101.f0b0d7d3.js",
    "revision": "192af620883110c9fee4f7466924b043"
  },
  {
    "url": "assets/js/102.011767c7.js",
    "revision": "267e81586e9ea101c7269c70402a5b86"
  },
  {
    "url": "assets/js/103.1ba8fa35.js",
    "revision": "14aa2f54bcccf3c1d75295f2fb1324e7"
  },
  {
    "url": "assets/js/104.0de76f50.js",
    "revision": "b4d32b42f9c4ffa3caf3dc66af78c371"
  },
  {
    "url": "assets/js/105.279e3b56.js",
    "revision": "858c56ed83f11e5d26bb2aa7cdd3c6dc"
  },
  {
    "url": "assets/js/106.0c5b35b4.js",
    "revision": "fe7e68decc901c18e6a6fe54069916b6"
  },
  {
    "url": "assets/js/107.a7fd5c00.js",
    "revision": "127dad4659bf5b6b83a39981b56c3a39"
  },
  {
    "url": "assets/js/108.18f3b534.js",
    "revision": "feca1dbc9a3768974f95662425d13457"
  },
  {
    "url": "assets/js/109.9a705997.js",
    "revision": "05bcfa18412e4da97c41c9c0c9d9995c"
  },
  {
    "url": "assets/js/11.eb396082.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.2c237968.js",
    "revision": "8cf3efcc99f2eff99e023b56d0480b24"
  },
  {
    "url": "assets/js/111.3850cc32.js",
    "revision": "e73ae34e22b77e8f0824a68b60a0ee7e"
  },
  {
    "url": "assets/js/112.614d9e05.js",
    "revision": "491664f21c0b9c31d04ce4abb4267479"
  },
  {
    "url": "assets/js/113.61eb52c6.js",
    "revision": "63c52b411880705bbeecad38115b0ed8"
  },
  {
    "url": "assets/js/114.1fcb59f8.js",
    "revision": "25dce0e7df119436154633bdf9bf1a3d"
  },
  {
    "url": "assets/js/115.3fed1cdb.js",
    "revision": "95d774a0b6fc26b16e462b5cca0e62e5"
  },
  {
    "url": "assets/js/116.a78d50f3.js",
    "revision": "77ea97983a599ba84e6f1b9d45663acc"
  },
  {
    "url": "assets/js/117.e168eaa4.js",
    "revision": "6528a76dafa9cd82a23b0f3c9a0b055f"
  },
  {
    "url": "assets/js/118.e36571d7.js",
    "revision": "507c9e8208e7b905cd2a8f9f55dfc64c"
  },
  {
    "url": "assets/js/119.e793c7f9.js",
    "revision": "f1f9fa25f6d8be5ce04bdadf298b5487"
  },
  {
    "url": "assets/js/12.c999e452.js",
    "revision": "587d8a4e995f9e705e221c5cdd6acc19"
  },
  {
    "url": "assets/js/120.2e5f5a76.js",
    "revision": "0dd71c88f6897b1970b5e72c6e7fe5de"
  },
  {
    "url": "assets/js/121.cf9709f3.js",
    "revision": "d77d960304c1dbc213a7ed13ad376573"
  },
  {
    "url": "assets/js/122.4d464293.js",
    "revision": "b9553c9b0948a3885fe4e7a39719bd29"
  },
  {
    "url": "assets/js/123.f40416d6.js",
    "revision": "2e8fb94dec8e5617f1f5d94d25150923"
  },
  {
    "url": "assets/js/124.25b129a3.js",
    "revision": "ce719edff58d3f41ec665bd907ce7179"
  },
  {
    "url": "assets/js/125.dda9cf47.js",
    "revision": "7f61499ef47fc6a9f8522ebb03144bdd"
  },
  {
    "url": "assets/js/126.68d443a1.js",
    "revision": "2efc550640bcdfb43ec32cda69c7ad3f"
  },
  {
    "url": "assets/js/127.1bc09e08.js",
    "revision": "2d3c543d253192e77548bf4d4c3172fa"
  },
  {
    "url": "assets/js/128.e90e8348.js",
    "revision": "af858d220501c443e0a7001805ad7634"
  },
  {
    "url": "assets/js/129.3d952ac6.js",
    "revision": "9ccc0e1643c2b74c352a376a4cebccf1"
  },
  {
    "url": "assets/js/13.a59f2c70.js",
    "revision": "a44616c7f94b448c8500953cbb38a91f"
  },
  {
    "url": "assets/js/130.6f64076d.js",
    "revision": "4508e85505fbf9fbb27b925f88856401"
  },
  {
    "url": "assets/js/131.3244af04.js",
    "revision": "003ef1fc0e1f6265ddcad1bf042532ad"
  },
  {
    "url": "assets/js/132.4b353509.js",
    "revision": "0ad8a5da6b13877affc3ce794356ef4a"
  },
  {
    "url": "assets/js/133.714d8b14.js",
    "revision": "e660ceadf725da0999a745d265d51929"
  },
  {
    "url": "assets/js/134.c0aef710.js",
    "revision": "b63540bd0c714c31d9944a414bc4e829"
  },
  {
    "url": "assets/js/135.fe48cabe.js",
    "revision": "f820e3cb1ed6aeff05c5336443afbf56"
  },
  {
    "url": "assets/js/136.5779376b.js",
    "revision": "0d2a1d91f5a055fb0d0b9bc4ea226617"
  },
  {
    "url": "assets/js/137.06ff0a43.js",
    "revision": "c7fe2b02724d145343fbf09324c00ba1"
  },
  {
    "url": "assets/js/138.54e3face.js",
    "revision": "970b02e6a1b6e21ba639c0d62c3d3546"
  },
  {
    "url": "assets/js/139.7792ddef.js",
    "revision": "fe3188d15b6878b1823e5e1e6b9dad7b"
  },
  {
    "url": "assets/js/14.62fd0368.js",
    "revision": "5879e47367177f95347256d15498f807"
  },
  {
    "url": "assets/js/140.300c48b0.js",
    "revision": "548995bd43292f4e062b75e8d9a95c52"
  },
  {
    "url": "assets/js/141.d05ec229.js",
    "revision": "8dd579c1895d05700df4df1b42ea8c83"
  },
  {
    "url": "assets/js/142.1fd421e4.js",
    "revision": "4329bc23841f3ec407f21f80ca4f8a2a"
  },
  {
    "url": "assets/js/143.7c6dbdfc.js",
    "revision": "7d478aec938355b2fdbe37bf5c3c61d4"
  },
  {
    "url": "assets/js/144.c6873b00.js",
    "revision": "1a890ede3e02e3e9cddde14f930c8a40"
  },
  {
    "url": "assets/js/145.f95526d9.js",
    "revision": "1bca348678ae7458ab8b033a415a5185"
  },
  {
    "url": "assets/js/146.70024cad.js",
    "revision": "c246fd426ef1166bc84a3707f9e4a21a"
  },
  {
    "url": "assets/js/147.04abc03c.js",
    "revision": "f3ec43de697c163f867c42dadfacf925"
  },
  {
    "url": "assets/js/148.879b60bb.js",
    "revision": "6d9fb347168ff140881a69fd2d6e5158"
  },
  {
    "url": "assets/js/149.26e64fee.js",
    "revision": "83117cb1ee2343178ba4179be7ad3086"
  },
  {
    "url": "assets/js/15.9fa31020.js",
    "revision": "8c389e95709b64517f459132f0520338"
  },
  {
    "url": "assets/js/150.6851dc00.js",
    "revision": "0d133cd7176ed9b461d5eba5ed66ddcd"
  },
  {
    "url": "assets/js/151.ef16efd2.js",
    "revision": "9e0d04485dba7d62a2344393bcdafbc6"
  },
  {
    "url": "assets/js/152.7e82813b.js",
    "revision": "09320609cf2709e63b566098b3970760"
  },
  {
    "url": "assets/js/153.108a59a5.js",
    "revision": "456109d3278ee325204e95fa5aee4a34"
  },
  {
    "url": "assets/js/154.d1d27e44.js",
    "revision": "06a1936d396991de1ba5eb0f679b964b"
  },
  {
    "url": "assets/js/155.32411c1f.js",
    "revision": "8b0a32a092971eaebb00b787003b2410"
  },
  {
    "url": "assets/js/156.daf5b643.js",
    "revision": "c58ddeb27a7057dfc8316cbab2314f9b"
  },
  {
    "url": "assets/js/157.4373e1e1.js",
    "revision": "fe1f20be94d40a87702d5e34b0bbcf73"
  },
  {
    "url": "assets/js/158.d4ca0caf.js",
    "revision": "b485963c625d0e353a68aef0bbe273be"
  },
  {
    "url": "assets/js/159.707326a6.js",
    "revision": "84279870f0949e5697fb57efadffc746"
  },
  {
    "url": "assets/js/16.2f21d4f8.js",
    "revision": "6d16ede67d07b6124d8b638c39ae4a79"
  },
  {
    "url": "assets/js/160.2b2a7122.js",
    "revision": "9ad292fbccfeda29ab89e496477f4f15"
  },
  {
    "url": "assets/js/161.5f812811.js",
    "revision": "e7f6f374a3a251154d50ac8400644668"
  },
  {
    "url": "assets/js/162.e1bf1a04.js",
    "revision": "c6eb99b7d54acdac70b240c31c460f96"
  },
  {
    "url": "assets/js/163.957cf844.js",
    "revision": "77eb0f2d3bd22b65d6d21292c2245998"
  },
  {
    "url": "assets/js/164.8700fa95.js",
    "revision": "ff00d1043e059dc5ba9711c86cab2434"
  },
  {
    "url": "assets/js/165.7b3212f2.js",
    "revision": "3b42ffe28cae38e22c58382d37eb82ec"
  },
  {
    "url": "assets/js/166.c03911d1.js",
    "revision": "95353bd16558ffe440cea0e023271cca"
  },
  {
    "url": "assets/js/167.9319c3ee.js",
    "revision": "a2f0602c14081af155bc838a328becb1"
  },
  {
    "url": "assets/js/168.155074d3.js",
    "revision": "8287b08b3f70ccc5653613ba203e6c2b"
  },
  {
    "url": "assets/js/169.41acfd7d.js",
    "revision": "8fa1b341e166e8519727873afa6b59e2"
  },
  {
    "url": "assets/js/17.f0c60771.js",
    "revision": "a9feb5fb3a5ada4385bfbe840f8124ec"
  },
  {
    "url": "assets/js/170.9a6a2130.js",
    "revision": "ae0bd1f278fbfcc2627a287172a48fda"
  },
  {
    "url": "assets/js/171.6576273c.js",
    "revision": "3f4c18d8a402805859dfdf7a895e02fc"
  },
  {
    "url": "assets/js/172.89d39db0.js",
    "revision": "519ef05d9fb4ed240150065f26aa27d6"
  },
  {
    "url": "assets/js/173.60064233.js",
    "revision": "85f811913644eb87918190e85011855d"
  },
  {
    "url": "assets/js/174.bc41e1a5.js",
    "revision": "1b47173e3656b4768c59a313736813a6"
  },
  {
    "url": "assets/js/175.0ada72d3.js",
    "revision": "5ceadd67079caf8acd5bfaaa02fadb78"
  },
  {
    "url": "assets/js/176.c4309f89.js",
    "revision": "3646c7312b79e928da038447c976e0aa"
  },
  {
    "url": "assets/js/177.4c29348a.js",
    "revision": "24827efc5e68cd53b29c6c2b8f3e159d"
  },
  {
    "url": "assets/js/178.4cba133b.js",
    "revision": "73f4da1584195d63d6118adef5dad6aa"
  },
  {
    "url": "assets/js/179.50e0a379.js",
    "revision": "88245a69658068f2a1c81299f0a14b70"
  },
  {
    "url": "assets/js/18.53cacea2.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.1c4dc9c2.js",
    "revision": "711bf752ee81ec8ec8ec9e71e1bee751"
  },
  {
    "url": "assets/js/181.f9327fed.js",
    "revision": "fd34c05013fc44ac55aad84ffb6ea9a8"
  },
  {
    "url": "assets/js/182.d8daa99e.js",
    "revision": "ecef713e57576064054859e0e810c7d0"
  },
  {
    "url": "assets/js/183.223c8ed0.js",
    "revision": "1114cb3f0488a7be2cdc051867b2fe2e"
  },
  {
    "url": "assets/js/184.f5c5e741.js",
    "revision": "38224e5bf534f8347b536250e97fea84"
  },
  {
    "url": "assets/js/185.4353ba56.js",
    "revision": "e3292791278d0eea4fe98c876516856a"
  },
  {
    "url": "assets/js/186.e77816fe.js",
    "revision": "03941767fd5105662045acf94bd287e8"
  },
  {
    "url": "assets/js/187.fe5e05c3.js",
    "revision": "7137e8a58468807021a8e259ac4a404d"
  },
  {
    "url": "assets/js/188.8edd998c.js",
    "revision": "4015e833f61a9b7d21a3c867f46e5149"
  },
  {
    "url": "assets/js/189.134c73e0.js",
    "revision": "7bf49ec8270032800a1f8c502164a749"
  },
  {
    "url": "assets/js/19.31503caa.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.9a450d29.js",
    "revision": "dcd52569b77ed085259f0df0415a2b37"
  },
  {
    "url": "assets/js/191.09dd7b26.js",
    "revision": "353ec7d531f2d6438a1b8b1b30de8272"
  },
  {
    "url": "assets/js/192.ea21f0c5.js",
    "revision": "410426af0c917d24f8adb7ed6ae91e48"
  },
  {
    "url": "assets/js/193.65d54d42.js",
    "revision": "ebe5af8e4a51bc462f7e1eb673db16c2"
  },
  {
    "url": "assets/js/194.25dcd8be.js",
    "revision": "a9096b20786d940ba7fbd527ed4c6fe7"
  },
  {
    "url": "assets/js/195.637a6cb7.js",
    "revision": "9ded66bec6b3744b2b095efcda616ffd"
  },
  {
    "url": "assets/js/196.3dc20811.js",
    "revision": "a6128b1c7d5481f0c00bf18cc13d6959"
  },
  {
    "url": "assets/js/197.658130c1.js",
    "revision": "5b3fc1b5dee326ba79b55ffc299340b6"
  },
  {
    "url": "assets/js/198.9566aa06.js",
    "revision": "79ded865f50eaa36616d6b6ee92d7264"
  },
  {
    "url": "assets/js/199.e95d8796.js",
    "revision": "d4915a8f5838e7709d6b1c8241201cbb"
  },
  {
    "url": "assets/js/20.643cfe78.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.cd884048.js",
    "revision": "61055aa0feb8e11c45cb4948dbb65393"
  },
  {
    "url": "assets/js/201.c286e33c.js",
    "revision": "6c9ea81b5228e5ed20b6bc90ebd51062"
  },
  {
    "url": "assets/js/202.07a5bbcc.js",
    "revision": "60f96e5beeb5d2421180b0974e789c88"
  },
  {
    "url": "assets/js/203.6fd7d199.js",
    "revision": "4d90ff4d9246ec549365a58715c72e1c"
  },
  {
    "url": "assets/js/204.aad6ce03.js",
    "revision": "f8bf05568b6cf95f1e241eff80239998"
  },
  {
    "url": "assets/js/205.56521069.js",
    "revision": "49ccd443046b76738293eae86b511e11"
  },
  {
    "url": "assets/js/206.2eac0083.js",
    "revision": "10207bad6f4f93a9d5db2cb84ad10e9b"
  },
  {
    "url": "assets/js/207.3c835b18.js",
    "revision": "324362af86613367cd6e0fd93c570887"
  },
  {
    "url": "assets/js/208.44c3cb87.js",
    "revision": "843bc50c6c39cd631cf962d6e29c762c"
  },
  {
    "url": "assets/js/209.8a66f41b.js",
    "revision": "17e06dfccec806df0113a42c4a809ceb"
  },
  {
    "url": "assets/js/21.f3f20ff8.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.fbc92773.js",
    "revision": "c8cc0d7bbd956a201f770984b599c135"
  },
  {
    "url": "assets/js/211.ee4dae0d.js",
    "revision": "84cc2990a493a39de8eb53da8ddaecf0"
  },
  {
    "url": "assets/js/212.8f8a0d23.js",
    "revision": "5892bdd4c1d2ca02539f3b0444f4f030"
  },
  {
    "url": "assets/js/213.07baead0.js",
    "revision": "0b9b1f8c290b352edb45490d2d196a3b"
  },
  {
    "url": "assets/js/214.d4b3b151.js",
    "revision": "cf822cd0d81776e08c69e0c336541684"
  },
  {
    "url": "assets/js/215.af2c08ac.js",
    "revision": "1a02a0029f0234bd8ae313d2fe7355ab"
  },
  {
    "url": "assets/js/216.b4dbd288.js",
    "revision": "e832eb9ca3528dc0e4cabe5b642c3f52"
  },
  {
    "url": "assets/js/217.24d4229b.js",
    "revision": "581fc59a2696df03d8d46a235956f1a1"
  },
  {
    "url": "assets/js/218.37cab0bb.js",
    "revision": "7dbb073c3dfcfe44d132c578e3a24c17"
  },
  {
    "url": "assets/js/219.ca2cbfcc.js",
    "revision": "1788599c8292b2675090b9584552c431"
  },
  {
    "url": "assets/js/22.06122c2d.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.04f6a38f.js",
    "revision": "e12c083b42d1fcab3d21c4f6d7ee56aa"
  },
  {
    "url": "assets/js/221.33b5ba66.js",
    "revision": "a71c8d003bded7f5a68d180431ff242b"
  },
  {
    "url": "assets/js/222.adad93c6.js",
    "revision": "6013cd0f8e674c5c6233a2afcc890042"
  },
  {
    "url": "assets/js/223.373ad8ad.js",
    "revision": "2f4da94cb3ed3116837bc2499d81bdaf"
  },
  {
    "url": "assets/js/224.16954cff.js",
    "revision": "3618e547fe82efaf312f0d6e7783ee9d"
  },
  {
    "url": "assets/js/225.c721bd24.js",
    "revision": "34d0b68d9dacd77fc8e9751f9170d227"
  },
  {
    "url": "assets/js/226.0044f828.js",
    "revision": "868e101b0df746a7b0d5ad84ad6191c8"
  },
  {
    "url": "assets/js/227.40b247bc.js",
    "revision": "460ca525b48b307d369d82e0c6f126ae"
  },
  {
    "url": "assets/js/228.b2f2673c.js",
    "revision": "bbd8b0431a69959a7707c1cb1c9a9992"
  },
  {
    "url": "assets/js/229.2e0a9bc8.js",
    "revision": "8e3725a6030e37bfc5b03706ba75f80c"
  },
  {
    "url": "assets/js/23.2047f65e.js",
    "revision": "bcb32407aa340b889d35227ff98da272"
  },
  {
    "url": "assets/js/230.f9530eec.js",
    "revision": "f481715ff7b7dd0d761f97a722ba958f"
  },
  {
    "url": "assets/js/231.c9f843d6.js",
    "revision": "fffb30f108b007fdec2f71ad41882a27"
  },
  {
    "url": "assets/js/232.e20999e8.js",
    "revision": "b15b9beb0f7a7c1eb8be9d316bbf9231"
  },
  {
    "url": "assets/js/233.8bb3d317.js",
    "revision": "f0c7a52fd54f9da669b3c842649a96c6"
  },
  {
    "url": "assets/js/234.955ebcbb.js",
    "revision": "453716f401d2e7db23529c5cd6259a88"
  },
  {
    "url": "assets/js/235.f5d7b825.js",
    "revision": "72f613a1d8d1150d9924a2a98a292643"
  },
  {
    "url": "assets/js/24.c10aa09a.js",
    "revision": "088135cd020982bd6e06eb5fe78b6202"
  },
  {
    "url": "assets/js/25.f72a201f.js",
    "revision": "d97df20cb8ccef727da32df49782215d"
  },
  {
    "url": "assets/js/26.0e41e393.js",
    "revision": "52617cfb6ad938c57ebb6cefcf81c5f6"
  },
  {
    "url": "assets/js/27.1e3751db.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.a9bdfaa5.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.fefd72ec.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.bb49b2fc.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.4ae042ec.js",
    "revision": "8f8712cdaa426b3faaba1bef372f8bca"
  },
  {
    "url": "assets/js/31.3533ad2f.js",
    "revision": "7dc97de67f37ad4a0f3377fb570605aa"
  },
  {
    "url": "assets/js/32.42fe49a2.js",
    "revision": "48ff28716693e4d3e7d888b608fe1a49"
  },
  {
    "url": "assets/js/33.37b5587d.js",
    "revision": "43857ffce3bfc0f96e6ff2e853f0243c"
  },
  {
    "url": "assets/js/34.a1f161ea.js",
    "revision": "3185fec87dd2dd1b8781042775b96a95"
  },
  {
    "url": "assets/js/35.6f379ca6.js",
    "revision": "e8069bd6ef0f56cb5f3d16d3412b9b8d"
  },
  {
    "url": "assets/js/36.5b6ec1f3.js",
    "revision": "59217c43fed980796f778c0c3c76d6c3"
  },
  {
    "url": "assets/js/37.d30b26f5.js",
    "revision": "f08bb8fba729fb60d361c2a81f1f33b8"
  },
  {
    "url": "assets/js/38.bcab50c9.js",
    "revision": "fcab6a68555801c730fc8c68b42e2515"
  },
  {
    "url": "assets/js/39.d0035a41.js",
    "revision": "b6543217c05898907e969cf7baca8095"
  },
  {
    "url": "assets/js/4.b0b5e267.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.8b756816.js",
    "revision": "7b8ab3f8f4a2d2af74584b566a999ef4"
  },
  {
    "url": "assets/js/41.600739f8.js",
    "revision": "2ae33420a0eb549331be3add1a4c8693"
  },
  {
    "url": "assets/js/42.9affd60d.js",
    "revision": "f5819f92380bda9c1b2c6039a4566c89"
  },
  {
    "url": "assets/js/43.2a68b21a.js",
    "revision": "565e3e0582269d0be45d6f226c0b5763"
  },
  {
    "url": "assets/js/44.657d352a.js",
    "revision": "f66d6ad6bce7e682b642d230e97d725a"
  },
  {
    "url": "assets/js/45.072c7121.js",
    "revision": "d86cbb72249092751c5c5cb36fb20a4b"
  },
  {
    "url": "assets/js/46.281f5dc0.js",
    "revision": "130ea456180791cd853eefef9d5e0065"
  },
  {
    "url": "assets/js/47.1c1ec151.js",
    "revision": "8239d15c875db888375a9f85413187e2"
  },
  {
    "url": "assets/js/48.891f369b.js",
    "revision": "87833b209b2d943788300fd2ee2211af"
  },
  {
    "url": "assets/js/49.d64d2a84.js",
    "revision": "3a776b42017ae88aa48b2a4928f54b28"
  },
  {
    "url": "assets/js/5.f370df38.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.cc9e41c2.js",
    "revision": "b63b269430ee6b9be0cfc421befb236f"
  },
  {
    "url": "assets/js/51.fc250d9b.js",
    "revision": "cf7f90268dfdac964b1bc22297ccec10"
  },
  {
    "url": "assets/js/52.0cdbd692.js",
    "revision": "e7778cf05fdb1b7b2e48665b6c46fbc9"
  },
  {
    "url": "assets/js/53.020b473e.js",
    "revision": "d41ca25dbb6f4b80b029b2ffa302c6a0"
  },
  {
    "url": "assets/js/54.492279ec.js",
    "revision": "f8b983fc888b0d6c4ac94f4eb97d92a7"
  },
  {
    "url": "assets/js/55.7111b114.js",
    "revision": "c6539461d4a1c0c54da8c8449f206b17"
  },
  {
    "url": "assets/js/56.1dc08c5f.js",
    "revision": "9629eb4edc4b85906e2a54cf08029a25"
  },
  {
    "url": "assets/js/57.ab85fdee.js",
    "revision": "78537b633820f0e93348608870866423"
  },
  {
    "url": "assets/js/58.604b3a97.js",
    "revision": "0498c2e0b6df86d6b7bac8c2b175885e"
  },
  {
    "url": "assets/js/59.0088125e.js",
    "revision": "cac6d5a0e21623c817ec0975c38af5c3"
  },
  {
    "url": "assets/js/6.493affb7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.73f07819.js",
    "revision": "e70ac1da6c7ead6ad343ff3eda95e978"
  },
  {
    "url": "assets/js/61.53009013.js",
    "revision": "929d5bccee5c29cc2593ee4da4fc6443"
  },
  {
    "url": "assets/js/62.3ff0a731.js",
    "revision": "a4d007b950f2f5d756064bd650ddb9db"
  },
  {
    "url": "assets/js/63.28acd32a.js",
    "revision": "5c241ccf4e9b9b91aa5fd2f023d29910"
  },
  {
    "url": "assets/js/64.13f46fc0.js",
    "revision": "afcf511a8db0c45955cfea5690dea98a"
  },
  {
    "url": "assets/js/65.8ea9034e.js",
    "revision": "443ea2889b5a29ead3c93b9618c87072"
  },
  {
    "url": "assets/js/66.44d5c1f6.js",
    "revision": "283385624d86ecb92d17f613900461c4"
  },
  {
    "url": "assets/js/67.6ce73966.js",
    "revision": "a6f976a36f181095054d300a1e965063"
  },
  {
    "url": "assets/js/68.01d49690.js",
    "revision": "206ad708defd774b8f35c5a32773fd67"
  },
  {
    "url": "assets/js/69.27de3406.js",
    "revision": "b748e817729a435846a8a76d93a0d3fd"
  },
  {
    "url": "assets/js/7.3bd09e4f.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.0c8762cb.js",
    "revision": "6be44178b3a6f5643018d8aba6e1f8af"
  },
  {
    "url": "assets/js/71.21731612.js",
    "revision": "8d5e4748a23a97754061159801325ec5"
  },
  {
    "url": "assets/js/72.52d4c708.js",
    "revision": "ad904b89f69bdd9fd56e359e84552c3b"
  },
  {
    "url": "assets/js/73.ec461f83.js",
    "revision": "080358ba9dd82b4c4ab5b355eefec65c"
  },
  {
    "url": "assets/js/74.b3e67dec.js",
    "revision": "05641ab151d1fd53af133fdb3b6233ca"
  },
  {
    "url": "assets/js/75.4c6e00c7.js",
    "revision": "1594ccd0913e22809eebe93c657280fe"
  },
  {
    "url": "assets/js/76.7ac9807e.js",
    "revision": "2ff9c7f1cb0c15f5f46caa97ac4b77f3"
  },
  {
    "url": "assets/js/77.0672db3c.js",
    "revision": "7460380c85f0b422a9476b5df5905132"
  },
  {
    "url": "assets/js/78.4d4e4369.js",
    "revision": "d7628d67ee8b096c14efda136fd41dd0"
  },
  {
    "url": "assets/js/79.e28689fd.js",
    "revision": "66a8c4937942744a4991d5efb61de4d9"
  },
  {
    "url": "assets/js/8.63ab5f68.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.f428a7f8.js",
    "revision": "d32d5adaf6b5cf23745464349c00208a"
  },
  {
    "url": "assets/js/81.64797cc5.js",
    "revision": "a01a04a77bdc1be9bf08e5bf0aade680"
  },
  {
    "url": "assets/js/82.509d073e.js",
    "revision": "0b231ed4f26538d7bd93e5776c8ddea9"
  },
  {
    "url": "assets/js/83.d5b7ad82.js",
    "revision": "651d5c92d551b583c64e0ad0b81eb357"
  },
  {
    "url": "assets/js/84.b53ca9f2.js",
    "revision": "32742d56897645a4894af943144c274d"
  },
  {
    "url": "assets/js/85.185796c0.js",
    "revision": "a76b61b88366d50de67341e4e65e4f5b"
  },
  {
    "url": "assets/js/86.041d657f.js",
    "revision": "d2b16ea58666d0945ac8cffe0ebb155b"
  },
  {
    "url": "assets/js/87.9f41b650.js",
    "revision": "85e452548a0105cff9f5266e8261c7ae"
  },
  {
    "url": "assets/js/88.713e80db.js",
    "revision": "a59ef3d579b1416640f34c25362924c4"
  },
  {
    "url": "assets/js/89.b4457985.js",
    "revision": "c547262273f02c9f0eeb28dc7de2a609"
  },
  {
    "url": "assets/js/9.b9ea9e95.js",
    "revision": "2504e68c5a8cb16fd3bd981094156211"
  },
  {
    "url": "assets/js/90.89911282.js",
    "revision": "7c1f334a8b617b700efd7a944dddb42b"
  },
  {
    "url": "assets/js/91.99f8b9b0.js",
    "revision": "7b9818c14da353f2a1b84ab0481b0567"
  },
  {
    "url": "assets/js/92.d175004d.js",
    "revision": "a3ea425f9758c34ed7d8c1a9d1f52846"
  },
  {
    "url": "assets/js/93.f90a1fff.js",
    "revision": "f229f483339ababda10a98c89a81e7da"
  },
  {
    "url": "assets/js/94.3807ea84.js",
    "revision": "93fe37375ee8fbdbde80fab976fc7c4a"
  },
  {
    "url": "assets/js/95.33d5117a.js",
    "revision": "7461d68205f18c6a9b9ccb4e5905bc72"
  },
  {
    "url": "assets/js/96.af0be7a2.js",
    "revision": "799aef732d842f659579cc7e99cd44d7"
  },
  {
    "url": "assets/js/97.aaefa3df.js",
    "revision": "a98e21a2f347dcd7276608892e95f86a"
  },
  {
    "url": "assets/js/98.cef44722.js",
    "revision": "d22415fb22294146f98d7eec2c9702aa"
  },
  {
    "url": "assets/js/99.d2f8573a.js",
    "revision": "3cdbcb5ae423d21b1e5fd8cb03f23c32"
  },
  {
    "url": "assets/js/app.0bb74aa1.js",
    "revision": "17a08f96074b559dffbda5b3a02c3381"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "7523ba1dae0ae20d533cafc95a34f14b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "c49fca2b22d03156044055f02924a998"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "d892f562e25b82bc6f3c10edd2fac90e"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c22c13ef3fb94d44f9a3302f2b6b3c5a"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "368d8caa87f783003ceb5560cc1b8275"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3fe6522d98f19c8b5f37f3f03a0680aa"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "c57f0ee6776ab49d11c300c39f0eac4e"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "0bc086df7a2b878c70cdf29ae83b57a5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "5d52526b06a31a48dd0b08e6fa5f1037"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "91056e1a85738364f1ec4114458579fc"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "2e06cd098a40472ba0f0d0127b6063d0"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "78ea1ca7bc6a7fefb403d44cfdc19fc1"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "7c4220aa6fedd4473654f5a2035bc71b"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "c5a92a7c18bf277af1671956c40e3c94"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "05f8c095c446cfd57ef3cacdae20f4b0"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "98946c77f10011f1c5a788deebd621b7"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "a98573cd1746c62299a020d8dc73bb52"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "f4b5abad4f8ee0af1c25f722d8f691ad"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "dad8aba9ddc0c6cf20189ba7ccd1ed43"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "85cadc14cf7581bd03e4bd81036574dc"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "9819695dc7d96e8753d4e49b600a3afc"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "d77deeca5f34418ce5ecaf9ce993d073"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "d428d2307a33f32d0b7ababe02da2361"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "7474ccbb9789d2b6bd17b7045529f797"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "acc70b890614a0b5dd412aca9f77e08d"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "cb1b2a736fa63d10d39d8fc241f026dc"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "01b28364ff2bd1dbcb04cce3f17343f0"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "19d52099c712d0caf7dd3102161e15b8"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "7836dc587b9ef0a1d275ebdb4d8fa278"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "b677ee9c2ab9888dc0cccd21ee95f8c9"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "3c9386222e8d8c5d2cd2ce92b792d290"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "da85227907581a5882fdabf634c08b31"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "bf2284a7f4e8e41c71ed1f409243d18b"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b130a812aee4c4513e58936961c46e15"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "4f571a0b9f48b5ad800812915348533c"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "ff09f14f321c8434459c2d5f571695d4"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7e749303a73b94cb284d474bf09bdd43"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "70935a85320a4764c07cc0d8847c2d09"
  },
  {
    "url": "basis/index/index.html",
    "revision": "a1489e5dfb224458d04e4069f4d66803"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ae1d883ca51b23debf4edc012000a29b"
  },
  {
    "url": "book/index.html",
    "revision": "1fa5428a382fb1ee37db8df092bc393f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "5fb51f74202ce6769668ebd7d69ac836"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "e7228819af309308b39c637960370b86"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ed8ff2635f7b72605f3ff92d18f5e91c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "8ce67244ed5f297e182a857e27b18cc2"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "c90c65472b259a69c5691bc202905f0f"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "8740a380c46157493afb25973ceefa96"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "83e1fedbaad7e4f57e37310b5165f92c"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "fe5d21b3290174250411d1339c045727"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "ee8eb90fb20b9e5af8dcbb3a571f5081"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "e488691ed3e1514ce7a0f03a98a99048"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "22928d3189682f29ac445fc6e89c4541"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "6521326504b1b8f5fb14637b7540fa5a"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "0fbf44c7d72de90f10272dbf2fea5cd4"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "949dba11ae342db7a0561237f0781efc"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "cebf15026261cbfcc3ccdc1caae21c6e"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "c6a64824bc3ad208a83b3c913af8892c"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a81523ccdd60a4d4fe7e53e42d3c4310"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "85886a5cd65c5d254f1e3f3b5fc9b6f1"
  },
  {
    "url": "c/program/index.html",
    "revision": "94f5b57bc168a59eddd9dbb9e89ce2c4"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "2d32898e46ffe95e195ad9c0fb800333"
  },
  {
    "url": "categories/index.html",
    "revision": "2278fdf759c37d2bf945a53a1968a36d"
  },
  {
    "url": "figma/index.html",
    "revision": "f38d153369ad1d4487b0d998eda00370"
  },
  {
    "url": "flutter/index.html",
    "revision": "4871236568a6b0a2a28b1002184d038b"
  },
  {
    "url": "flutter/point.html",
    "revision": "c0d49c8891440be241638ae8aa8a5d4b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "7b8d77461f5a2a07a71233df0c6d942e"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "504d8fa26ee86ccd73b7183f6ff9338a"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "abe44f54517e21ad2d57346ba0324d91"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "7d7357c67d3038636c7bc0af14ff2ce1"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "d96c7af5d236e7770024487602840f4d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "93fe8975477ac5197b372c234e844637"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "60d58986498dd6f1ee7fce2715314e30"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "d1414a5a1e9a084657550befac1eff5f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "af119c842c730fda2002e3c9b1038a02"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "de5a8d795051b867e5312f2ae2e70c79"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "8e461d700373bb9e178e36aa5518807f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "b13c5b54eb4416da667821ee7e489277"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "bc2080caf54bc6bb27ac968effbb42c0"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3b0d4279916ddc18f24427740c7ed8fe"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "37e3db56d44cd95308b802373a2e8d14"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "dc5db1cf1dd58377edc3be6dd1990b62"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "2abfa9d9af0cd44502a90ad22fcf0bde"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "8a6a5d9726b6147bf8945840c5c51ab8"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "1ae553861b21d3656d79945e703f261f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "bfbb1ff33ea0b4df0d7439a46f84a905"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "0c3e7ccd3e03535067242f3fbe6e4959"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "306c19377c8da8a825371aefc5d6ff44"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a5935f59131dd55b1cfa1b2dc5872b74"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "110cf16c7ee1037da093eddde4f707de"
  },
  {
    "url": "haskell/index.html",
    "revision": "1751a213054fd6a0ee1b0c2f91aa7b19"
  },
  {
    "url": "index.html",
    "revision": "825f6b306f9522f2f1acb74f38710b5c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "ed547621178994095e1e4b0ef6f79432"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "8cac5db3b2efc9908723316cc6fe56c0"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "1d3be39fb2058ab07b62ed7f681c4a45"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "84c74e8a3e1dba2e30186e63301f763c"
  },
  {
    "url": "python/index.html",
    "revision": "d102c3f940a5c742abe9f34b6d8d3081"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "84052577d95c01e7fc8e3bd2043ce16c"
  },
  {
    "url": "swift/better/available.html",
    "revision": "b7b2ab7383cb6a003d305acfd4009ff7"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "ee0e752b49490e1f048cb119864bad1d"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "333f8969ef0a59dd99f8ad8ca6e42d30"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "ebd7d5a94aae69bcaa72b25e62298638"
  },
  {
    "url": "swift/better/di.html",
    "revision": "ba1a0af050b0595adb841c8e8a7c5cd1"
  },
  {
    "url": "swift/better/index.html",
    "revision": "02f743a47ad63fa02fc2ae4cad4653f3"
  },
  {
    "url": "swift/better/last.html",
    "revision": "cf5e4e352ff7fc80280f4b8ad2c19194"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e263f3a8a79823f6c47f3418fd682966"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "a187ddf934718a4f68d1246c70502bb9"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "46e44c7d00232e6774294321ca0cf7d9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "083bdfa8dc6db77811905e6c0c710ef5"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5a207c828dbeee38ddb37b552e790d4d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "10c9cb7dffd021f9ad2ff566d11a9c53"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "a2c39616d3e5cef174de6397624bf5b6"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d47af59643a8b25d89e116f87e41a8e4"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "bfbdd6da99d4e0238d269d7c4459c72a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "82c97990f9a913f19f08e2e28c675d6a"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "f2240ff443ba578f2d26fed41a1fc951"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "81e4c37ef9a133966a9934852a56bcfc"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "3d96580102ec0c5b39ce161757c6f834"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "ac1685aebebbdf9de53a15f9cdda108e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b87e82132f2788e0b8d74f6764ab243d"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "fc62ae5bce4e53476db960d8025311d9"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "0925e5c1d8674b9fab44268bdab7f50a"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "dbe539a5da3e418fb3396e36e204fd93"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "8913c897a0fc3b6ae13c961e834f43e0"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "19f1d3660e8069d0fca3eb881220a272"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "d004eab185e129b5b9d5bcaf28cbeb4c"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "d1fe7352c53d7ed327977090e5db6670"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "beb6a81f5252f0869cb4d556775ba1c4"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "85030578fa06db1467fb18bed9bf6ffe"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "0461314486d4d5f25874ebe865581645"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "377987c91cf127e3c9c4d546a561efd6"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "a1ecff012c934685247e1c3765e9253e"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "142f06f1c456f15f9bd81d04a8fda7f4"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "687f0cb04b4cb6bcde7767cfb01f2815"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "dffec7de24e7c7389885a6fef6c6f188"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "f861bd1f2e17dddf6b2306cfdb04f520"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "3810d9ffeaf162e265b51741047bbdce"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "dd5c3680ba1a9a2b99d7d9a1edeee82a"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "febc4744f8780d836466b64de58057fb"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "b7affc788e4da36616f258b6f49c3d10"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "b1d11b5e76b8241f7a82a116a1cd9d49"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "1391d423517265b8df5c27cc2eb0a141"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "ae819984c7486357505229073536a85c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a9cada580a189533dbab4589b0ce51b4"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "3beea15b0f249dcd454510dcee662c28"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ccd68b60d0d15ca5039f3514c72e5b3b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "1cf79ce1b7fc9f601b6b7bc1e57794f2"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4a3b656f9e2acf50f8840c69ea77c116"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "7c9948102cf6d346c21038efa9007dd7"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0a4808b83b229df37995f888f97d96d5"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "16c95933fae408be56a251b4e82fa148"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "81d141098ebe916c830b8098da934c9b"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "6e7d4635f7a960aff2db38893b00688a"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "ce2445debab32c1fddbe6785058c8f5e"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "b925b0662ea237ffbcc798814f6a3093"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2e470f32bf190edc12c4e6766ece3e54"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d072b417c76f4c6fb3d660b8dd71ad33"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "6bd777ccd6e2b48d8858fdd3b21081c4"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "da0eca111fec689de7d0a940a12f9ec9"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "a62a660ce0789b086a9747a8b14f2921"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "247d4d3095d275d66fb6e44bb1940123"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "2dbcd3c696d61002ea2497987aa5bcf0"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "2fcc96734329e1728fd2841319af39f2"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "5326ee9841fa448ed3da78a213c21edb"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "e5b50e6b9fc973318ff8ef05b2ec3eb8"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "f8d006aad4f57b9a02195cbc46fbd4fc"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "cfe45ac1f74e48aa8f1e97e4ae7fbbdc"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "233a12d03353744020752c28580be17a"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "3cc9471b067e8bb4cf88afe1991519df"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "65be1c8c0edadb1dcbe7a1694f392de2"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "22bde2bfb1105a8ea4cbff94cdf737cf"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4aab2148ab00f39eaf0d768676089413"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "66f07936de9ad716c1b5a8512fbc1f80"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "6bc2e3c7750702ba770c3c6e9b2c2bff"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "c2e53a43e757179c5eb399c3075de7e2"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "e773f1d671a5b2586ed01d291e00a0bb"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "5283936fe47656012c03705069051821"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5a9ac8b25453ba01303ed1f78eba8c36"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "efbd8921074d5c97f32d4e337f4d3976"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "ea3248c36025ace3f89a76e241b35214"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3e5edfeec220f78f6b7a6eb10601d3f2"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "91b3530e6ae180fa5c1d0235a2d91c42"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "cef2dfb7a59ee433cfe84f762a20b810"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "558868e036f8d22b34c4206f38b76c3f"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "221cf752edc59c3b63bee7ee2a46e2d4"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "7807f8d9621f529f51167a750bff4b08"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "ade27e90b9320838bb615619793db777"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "bc600d7a774cd0c6fed257c47210551d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "37786ac4a933272eb1999bdff3f74443"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "402ad6dbd61e86e9c752474dc1b74f12"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "2fead56b19e9daf554854dcd7c7e3442"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "190f4a9b457b960a7c16965e0c3ec93b"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "5be41b3e2806d10e670817f21fa6baa4"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "3e2066a99d8e62413d6885d6be857e99"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ddb486eb44d99486bb4d8a7a8241ac84"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ad6bae5e2248cd857bb89672cdd56bdc"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "3a862f15efa0a301aee86a2e2020fb2e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c35926dd250ce2fdb19723859345dd60"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "40e4173c3388475ad6b93ff766fb5b88"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e30c896e4bfd052a2c05bf3012a9cfcd"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "0b8c262f186ec235734e941e807f9888"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b144c7297f55cd156bbab5950eeafd10"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "fe249b45185c80ce5ae4dc33c5a48eb1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "91d1311a9743d85a3eabcfc83cc59787"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "27ee729d2dc5954f9fdb73eeed001c96"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b571489bcc59330fb5648d3cad292370"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "8433bf2f61ea27c4f9fd695df24d6c40"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "5590f8c92f88e92e86ef6dac3e4d1f23"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "744c72fa36e6eb7c323a255fe85dafbb"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "30427097df108d1be5b6bc0179b8496b"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "be5b760b9bb11bda0a3adab97352d2d6"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "d05b758e02b7d97a82480bc97ac157d5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9e3ad7444255c2f5c070a3285c186d05"
  },
  {
    "url": "tag/git/index.html",
    "revision": "14eae414e4fce2b4cd7b7393cf779d7b"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0f364ba06aec74a5025db43f56b7efb2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "af0dfafd79c3f349aeb3a52ef584df0f"
  },
  {
    "url": "tag/index.html",
    "revision": "dc57478f8c8842402024a3134b145e93"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "b00e0836bdbd2359f7c9dd34aef10d18"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "6a538c5d10bda27d1e05923c79875b41"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "073102caf73b6705d198a5351899a847"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "a6645a8dd185c273adfce6d3eb803713"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8f263a6257ac248d17347ab62251a816"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "0aa832e12f4c7b4a159efcdbbdb6855c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "40816d31ec550e45643e870f70264e83"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "a9110f17fc0756c94b0c6b27fbf49037"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "2859c9e821f8b212bbce8f623243fac6"
  },
  {
    "url": "tag/json/index.html",
    "revision": "fcdd78810c8f0cc97c5e14c622438b35"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "8529bfb0cdfaa4ce2caec842afdbb889"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "e2c19e0ccaa472fb78385cebd8f1d90a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "6814507e9a1dd21d523439661bb7d98b"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "5875856da1fd5d4dc352645fea64df2e"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "2ddf97917469cca9afd484d432b87bbb"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "baaa24e05c7afdbda8b16e322d75b1fb"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "bb6d0303bfd0e4927e6ca26e7fa9274b"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "9668e8070b1ac228b7eb3ac0913bd5dd"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "be3206fcb7d59a6b1fa19b1a987b3e17"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7d3248fb661161108a704e6d63395a0d"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3d43fd40262753f6169488ef69dbb4a4"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "cbd0a808ed11ca411b693cd516110af5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "b8e97cdad9ffaf42b536492aaa9296a8"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "cf3ff45d53fa3a3ced38c4ade1ed61e7"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "d70f49c41c93d2de3439c10872b52788"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "56216aab55e5e439800da0f7bbbc5f06"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f25cac2c9fe53633d09c608687695dc3"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e2ed8491b7d6164f6dd93c9d0c31bea0"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "2f75b937b16dfb84bc60262a98d02950"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "b5d52d016eeb328e722870200bd634ee"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "9e09525d2fae1005e7fb3f5c898fd87e"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "6008199b1e3298ddb82e3f0a9436051d"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "6c071588c842282ae24711de5ed79764"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "5d3296082cb78bb688041bc5e822c38e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "b554da2ef2dbaf02c06937bab1953751"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "831b389f7ed8f61f596afbd16b0b5d20"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "b065e26e035e07966aef46de33113f1b"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "75eaa4d32dee112b5fcb99c8316e2ddf"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "544a7ca629b5615a21fde71b97ebd034"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "a9b22e12259dee2756d6d7a000fd9f78"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "bfae90e0f98a2a230bfdc8d04f7c3008"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fe16f0d084633b7cfc19dc4d4498ec5a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "810d9e5f94c920a67c46fa96c5581f49"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8b529f15ea4f2424e6daa1bf0054056b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "0a3352b9f25ada03748866a1cca4aa38"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2989a633254d901e00f051a334c2af9c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ab0944047218b8453e9bde46656e536a"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "4819c04de0208ffd1fa9c99edf789f33"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6eca7d9272a809391020be85571eff1a"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f42f8e3dbc25c347fd43136c57d06b6b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "8b930630aa42921f6c214ea5406e1fc5"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "e571e2c587c6b06d6d4af4334e7a8f99"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "c89dec120645a5055eee7556d1ccb840"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "13e2dae45c233d47dc6751e489760483"
  },
  {
    "url": "timeline/index.html",
    "revision": "557e74106f786c5932fb4d5230175fa8"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "22b75cfb4f3984f23004adde51052953"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "939b18d39d9a86a1f07254b9da9903fc"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bec03a2ef025e0e49da3add8e0b0290c"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7eef53cb4400fb466d5269d0a9fe7b7a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "f2d6f78719fd34d883b5ea91bd4bc625"
  },
  {
    "url": "tools/html/index.html",
    "revision": "22884106c295a07df8e0a7581df8c17e"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "28b7c4225607055effd36759cde0f6bf"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "33b248a36b229cbe4b9619ee58ceb2ea"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "84d2c33f60916dea65ec7674e6e5f905"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "34bae8641541cab3bfc5d1b0c14f438a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8b935eaf2bacbdaf197833e1b4e284aa"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "09304d2277130f148051ce04f9285ed3"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "929307c499353c7a9bb6976e2322ec30"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "9c0e9bd16e0e4b72c992e3f2b45fc8a7"
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
