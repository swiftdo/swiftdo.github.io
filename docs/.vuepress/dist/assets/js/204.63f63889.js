(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{861:function(A,a,t){"use strict";t.r(a);var s=t(8),e=Object(s.a)({},(function(){var A=this,a=A.$createElement,t=A._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[t("p",[A._v("在我们写接口的时候，有个很普通的需求就是")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("只希望登录的人才能获取数据\n")])])]),t("p",[A._v("如何实现这种访问权限的控制，Auth(认证) 是我们常用的手法。\n由于 HTTP 是无状态的，那么每个请求就需要附带一些信息来证明我是谁。")]),A._v(" "),t("p",[A._v("HTTP Authentication 协议约定在 Header 中加入一个条目，然后约定 Key 和 Value 的格式。其中 Key 称为 "),t("code",[A._v("Request Header Field")]),A._v(", 而 Value 的格式各异。所以用 "),t("code",[A._v("Authorization Scheme")]),A._v(" 来进行区分各种标准，")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("scheme  auth-token\n")])])]),t("p",[t("strong",[A._v("几种常见的 Scheme")])]),A._v(" "),t("ul",[t("li",[A._v("Basic")]),A._v(" "),t("li",[A._v("Bearer")]),A._v(" "),t("li",[A._v("Digest")]),A._v(" "),t("li",[A._v("HOBA")]),A._v(" "),t("li",[A._v("Mutual")]),A._v(" "),t("li",[A._v("OAuth")]),A._v(" "),t("li",[A._v("...")])]),A._v(" "),t("p",[A._v("从 Postman 也可以看出，如下图")]),A._v(" "),t("p",[t("img",{staticStyle:{"min-width":"100px","min-height":"100px",background:"url(data:image/gif;base64,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) no-repeat center","background-size":"30px 30px"},attrs:{src:"http://blog.loveli.site/mweb/16051458260928.png",alt:"",loading:"lazy"}})]),A._v(" "),t("h2",{attrs:{id:"basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[A._v("#")]),A._v(" Basic")]),A._v(" "),t("p",[A._v("请求时提供以用户名和密码(口令)形式的凭证来验证用户身份。")]),A._v(" "),t("h3",{attrs:{id:"场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[A._v("#")]),A._v(" 场景")]),A._v(" "),t("ol",[t("li",[A._v("用户访问资源: /resource")]),A._v(" "),t("li",[A._v("用户名、密码: oldbirds、 123456")])]),A._v(" "),t("h3",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[A._v("#")]),A._v(" 步骤")]),A._v(" "),t("ol",[t("li",[t("p",[A._v("用户访问受限资源")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("GET /resource  HTTP/1.1\nHost: 127.0.0.1:8977 \n")])])])]),A._v(" "),t("li",[t("p",[A._v("服务器返回401")]),A._v(" "),t("p",[A._v("服务端发现 "),t("code",[A._v("/resource")]),A._v(" 为受限资源，于是向客户端发送 401 状态码，需要进行身份认证")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("HTTP/1.1 401 Unauthorized\nWWW-Authenticate: Basic realm=resource\n")])])]),t("p",[A._v("响应首部中，通过 "),t("code",[A._v("WWW-Authenticate")]),A._v(" 告知客户端，认证方案是 "),t("code",[A._v("basic")]),A._v(", 同时以 "),t("code",[A._v("realm")]),A._v(" 告知认证范围。")]),A._v(" "),t("blockquote",[t("p",[A._v("同一个服务端，访问受限的资源多种多样，比如资金信息、机密文档等。可以针对不同的资源定义不同的 realm，并且只允许特定的用户访问。")])])]),A._v(" "),t("li",[t("p",[A._v("用户发送认证请求")]),A._v(" "),t("p",[A._v("客户端收到服务端响应后，填写用户名、密码，然后向服务端发送认证请求。")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("GET /resource HTTP/1.1\nAuthorization: Basic Y2h5aW5ncDoxMjM0NTY=\n")])])])]),A._v(" "),t("li",[t("p",[A._v("服务端验证请求")]),A._v(" "),t("p",[A._v("服务端对请求进行验证：")]),A._v(" "),t("ol",[t("li",[A._v("根据 "),t("code",[A._v("/resource")]),A._v(", 确定对应的 realm")]),A._v(" "),t("li",[A._v("解析 Authorization , 获取用户名和密码")]),A._v(" "),t("li",[A._v("判断用户是否有访问该 realm 的权限")]),A._v(" "),t("li",[A._v("验证用户名、密码是否匹配")])]),A._v(" "),t("p",[A._v("验证成功，返回请求资源。验证失败，返回 401 要求重新认证，或者返回 403 (Forbidden）")])])]),A._v(" "),t("h3",{attrs:{id:"安全缺陷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全缺陷"}},[A._v("#")]),A._v(" 安全缺陷")]),A._v(" "),t("ol",[t("li",[A._v("通过明文传输用户的密码, 传输层未加密的情况下，用户明文密码可被中间人截获。")]),A._v(" "),t("li",[A._v("用户不关闭浏览器的情况下，并没有一种有效的方法来让用户退出")])]),A._v(" "),t("h2",{attrs:{id:"bearer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bearer"}},[A._v("#")]),A._v(" Bearer")]),A._v(" "),t("p",[A._v("为了验证使用者身份，客户端需要向服务器端提供一个可靠的验证信息，这个信息称作 Token。")]),A._v(" "),t("p",[A._v("当用户第一次登录后，服务器生成一个 token 并将此 token 返回给客户端，客户端收到 token 后把它存储起来，可以放到 cookie 或者(Local Storage)，以后客户端每次向服务器端发送请求的时候带上这个 token。 服务器接收到请求，然后去验证客户端带过来的 token，如果验证成功，返回请求数据。")]),A._v(" "),t("blockquote",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("1、用户向服务器发送用户名和密码。\n2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。\n3、服务器向用户返回一个 session_id，写入用户的 Cookie。\n4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。\n5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。\n")])])])]),A._v(" "),t("blockquote",[t("p",[A._v("A 网站和 B 网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？")])]),A._v(" "),t("blockquote",[t("p",[A._v("一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。")])]),A._v(" "),t("blockquote",[t("p",[A._v("另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。")])]),A._v(" "),t("p",[A._v("摘自 "),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[A._v("《JSON Web Token 入门教程》"),t("OutboundLink")],1)]),A._v(" "),t("h2",{attrs:{id:"jwt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[A._v("#")]),A._v(" JWT")]),A._v(" "),t("p",[A._v("JWT 的原则是在服务器身份验证之后，将生成一个 JSON 对象并将其发送回用户。如")]),A._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"username"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"swiftoldbird"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"role"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"Admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"expire"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"2018-08-08 20:15:56"')]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])])]),t("p",[A._v("之后，当用户与服务器通信时，客户在请求中发回 JSON 对象。服务器仅依赖于这个 JSON 对象来标识用户。为了防止用户篡改数据，服务器将在生成对象时添加签名。")]),A._v(" "),t("p",[A._v("服务器不保存任何会话数据，即服务器变为无状态，使其更容易扩展。")]),A._v(" "),t("h3",{attrs:{id:"构成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构成"}},[A._v("#")]),A._v(" 构成")]),A._v(" "),t("p",[A._v("JWT 由 3 个部分组成:")]),A._v(" "),t("ul",[t("li",[t("p",[A._v("头部（header)")]),A._v(" "),t("ul",[t("li",[A._v("声明类型")]),A._v(" "),t("li",[A._v("声明加密算法")])]),A._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"typ"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"JWT"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"alg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"HS512"')]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])])]),t("p",[A._v("然后将头部进行 base64 加密构成第一部分")]),A._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[A._v("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9\n")])])])]),A._v(" "),t("li",[t("p",[A._v("载荷（payload), 存放有效信息的地方")]),A._v(" "),t("ul",[t("li",[t("p",[A._v("标准中注册的声明(建议但不强制)")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("* iss: jwt签发者\n* sub: jwt所面向的用户\n* aud: 接收jwt的一方\n* exp: jwt的过期时间，这个过期时间必须要大于签发时间\n* nbf: 定义在什么时间之前，该jwt都是不可用的者\n* iat: jwt的签发时间\n* jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击\n")])])])]),A._v(" "),t("li",[t("p",[A._v("公共的声明")]),A._v(" "),t("p",[A._v("可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密")])]),A._v(" "),t("li",[t("p",[A._v("私有的声明")]),A._v(" "),t("p",[A._v("私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。")])])]),A._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"sub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"guonanjun"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"aud"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"dream7788-app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"clientId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"ip"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"192.168.1.108"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"iss"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"dream7788-server"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"scopes"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"ROLE_PAY"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"ROLE_VIEW"')]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"exp"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("1517633985")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"iat"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("1517630385")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[A._v('"jti"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[A._v('"e3ae8bdaed0a43fca3cb8b083012a2bc"')]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])])]),t("p",[A._v("然后将其进行base64加密，得到Jwt的第二部分：")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code")])])])]),A._v(" "),t("p",[A._v("eyJzdWIiOiJndW9uYW5qdW4iLCJhdWQiOiJkcmVhbTc3ODgtYXBwIiwiY2xpZW50SWQiOiIxMjM0NTYiLCJpcCI6IjE5Mi4xNjguMS4xMDgiLCJpc3MiOiJkcmVhbTc3ODgtc2VydmVyIiwic2NvcGVzIjpbIlJPTEVfUEFZIiwiUk9MRV9WSUVXIl0sImV4cCI6MTUxNzYzMzk4NSwiaWF0IjoxNTE3NjMwMzg1LCJqdGkiOiJlM2FlOGJkYWVkMGE0M2ZjYTNjYjhiMDgzMDEyYTJiYyJ9\n```")]),A._v(" "),t("ul",[t("li",[t("p",[A._v("签证（signature)")]),A._v(" "),t("ul",[t("li",[A._v("header (base64后的)")]),A._v(" "),t("li",[A._v("payload (base64后的)")]),A._v(" "),t("li",[A._v("secret")])]),A._v(" "),t("p",[A._v("该部分需要 base64 加密后的 header 和 base64 加密后的 payload 使用，连接组成的字符串，然后通过 header 中声明的加密方式进行加盐 secret 组合加密，然后就构成了jwt 的第三部分")]),A._v(" "),t("p",[A._v("最后生成如下")]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[A._v("KXCsn94zKO6DXloUFh-1Cjd5Rmlda-s1SvmDKpdANOlr65prEdOSEQIh4XqDXdkuZkIM11Ohew9KxlrX84La0g\n")])])]),t("blockquote",[t("p",[A._v("secret 是保存在服务器端的，jwt 的签发生成也是在服务器端的，secret 就是用来进行 jwt 的签发和 jwt 的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个 secret, 那么客户端就可以自我签发 jwt")])]),A._v(" "),t("p",[t("strong",[A._v("JWT 的构成是由这三部分字符串连接起来")])])])]),A._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[A._v("#")]),A._v(" 优点")]),A._v(" "),t("ul",[t("li",[A._v("降低服务器查询数据库的次数")]),A._v(" "),t("li",[A._v("解决跨域问题")])]),A._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[A._v("#")]),A._v(" 缺点")]),A._v(" "),t("ul",[t("li",[A._v("无法在使用过程中废止某个 token，或者更改 token 的权限")]),A._v(" "),t("li",[A._v("未加密时容易泄露")])]),A._v(" "),t("h2",{attrs:{id:"参阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参阅"}},[A._v("#")]),A._v(" 参阅")]),A._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81",target:"_blank",rel:"noopener noreferrer"}},[A._v("HTTP基本认证"),t("OutboundLink")],1)]),A._v(" "),t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[A._v("理解OAuth 2.0 "),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);