---
sitemap:
  exclude: false
  changefreq: hourly
title: 'Vapor 之 auth 概念'
date: 2020-11-12
tags:
- swift
- vapor
---

在我们写接口的时候，有个很普通的需求就是

```
只希望登录的人才能获取数据
```

如何实现这种访问权限的控制，Auth(认证) 是我们常用的手法。
由于 HTTP 是无状态的，那么每个请求就需要附带一些信息来证明我是谁。

HTTP Authentication 协议约定在 Header 中加入一个条目，然后约定 Key 和 Value 的格式。其中 Key 称为 `Request Header Field`, 而 Value 的格式各异。所以用 `Authorization Scheme` 来进行区分各种标准， 

```
scheme  auth-token
```

**几种常见的 Scheme**

* Basic
* Bearer
* Digest
* HOBA
* Mutual
* OAuth
* ...

从 Postman 也可以看出，如下图

![](http://blog.loveli.site/mweb/16051458260928.png)


## Basic

请求时提供以用户名和密码(口令)形式的凭证来验证用户身份。

### 场景

1. 用户访问资源: /resource
2. 用户名、密码: oldbirds、 123456

### 步骤

1. 用户访问受限资源

    ```
    GET /resource  HTTP/1.1
    Host: 127.0.0.1:8977 
    ```

2. 服务器返回401

    服务端发现 `/resource` 为受限资源，于是向客户端发送 401 状态码，需要进行身份认证

    ```
    HTTP/1.1 401 Unauthorized
    WWW-Authenticate: Basic realm=resource
    ```
    
    响应首部中，通过 `WWW-Authenticate` 告知客户端，认证方案是 `basic`, 同时以 `realm` 告知认证范围。
    
    > 同一个服务端，访问受限的资源多种多样，比如资金信息、机密文档等。可以针对不同的资源定义不同的 realm，并且只允许特定的用户访问。

3. 用户发送认证请求

    客户端收到服务端响应后，填写用户名、密码，然后向服务端发送认证请求。
    
    ```
    GET /resource HTTP/1.1
    Authorization: Basic Y2h5aW5ncDoxMjM0NTY=
    ```
4. 服务端验证请求

    服务端对请求进行验证：
    
    1. 根据 `/resource`, 确定对应的 realm
    2. 解析 Authorization , 获取用户名和密码
    3. 判断用户是否有访问该 realm 的权限
    4. 验证用户名、密码是否匹配
    
    验证成功，返回请求资源。验证失败，返回 401 要求重新认证，或者返回 403 (Forbidden）

### 安全缺陷

1. 通过明文传输用户的密码, 传输层未加密的情况下，用户明文密码可被中间人截获。
2. 用户不关闭浏览器的情况下，并没有一种有效的方法来让用户退出

## Bearer

为了验证使用者身份，客户端需要向服务器端提供一个可靠的验证信息，这个信息称作 Token。

当用户第一次登录后，服务器生成一个 token 并将此 token 返回给客户端，客户端收到 token 后把它存储起来，可以放到 cookie 或者(Local Storage)，以后客户端每次向服务器端发送请求的时候带上这个 token。 服务器接收到请求，然后去验证客户端带过来的 token，如果验证成功，返回请求数据。

> ```
> 1、用户向服务器发送用户名和密码。
> 2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。
> 3、服务器向用户返回一个 session_id，写入用户的 Cookie。
> 4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。
> 5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。
> ```

> A 网站和 B 网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？

> 一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。

> 另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。

摘自 [《JSON Web Token 入门教程》](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

## JWT

JWT 的原则是在服务器身份验证之后，将生成一个 JSON 对象并将其发送回用户。如

```json
{
    "username": "swiftoldbird",
    "role": "Admin",
    "expire": "2018-08-08 20:15:56"
}
```

之后，当用户与服务器通信时，客户在请求中发回 JSON 对象。服务器仅依赖于这个 JSON 对象来标识用户。为了防止用户篡改数据，服务器将在生成对象时添加签名。

服务器不保存任何会话数据，即服务器变为无状态，使其更容易扩展。

### 构成

JWT 由 3 个部分组成:
 
* 头部（header)
    * 声明类型
    * 声明加密算法
    
    ```json
    {
        "typ":"JWT",
        "alg":"HS512"
    }
    ```
    
    然后将头部进行 base64 加密构成第一部分
    
    ```json
    eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9
    ```
    

* 载荷（payload), 存放有效信息的地方
    * 标准中注册的声明(建议但不强制)
        
        ```
        * iss: jwt签发者
        * sub: jwt所面向的用户
        * aud: 接收jwt的一方
        * exp: jwt的过期时间，这个过期时间必须要大于签发时间
        * nbf: 定义在什么时间之前，该jwt都是不可用的者
        * iat: jwt的签发时间
        * jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击
        ```
        
    * 公共的声明

        可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密

    * 私有的声明

        私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。
        
    ```json
    {
    "sub":"guonanjun",
    "aud":"dream7788-app",
    "clientId":"123456",
    "ip":"192.168.1.108",
    "iss":"dream7788-server",
    "scopes":[
    "ROLE_PAY",
    "ROLE_VIEW"
    ],
    "exp":1517633985,
    "iat":1517630385,
    "jti":"e3ae8bdaed0a43fca3cb8b083012a2bc"
    }
    ```
    
    然后将其进行base64加密，得到Jwt的第二部分：
    
    ```
eyJzdWIiOiJndW9uYW5qdW4iLCJhdWQiOiJkcmVhbTc3ODgtYXBwIiwiY2xpZW50SWQiOiIxMjM0NTYiLCJpcCI6IjE5Mi4xNjguMS4xMDgiLCJpc3MiOiJkcmVhbTc3ODgtc2VydmVyIiwic2NvcGVzIjpbIlJPTEVfUEFZIiwiUk9MRV9WSUVXIl0sImV4cCI6MTUxNzYzMzk4NSwiaWF0IjoxNTE3NjMwMzg1LCJqdGkiOiJlM2FlOGJkYWVkMGE0M2ZjYTNjYjhiMDgzMDEyYTJiYyJ9
    ```
    
* 签证（signature)

    * header (base64后的)
    * payload (base64后的)
    * secret

    该部分需要 base64 加密后的 header 和 base64 加密后的 payload 使用，连接组成的字符串，然后通过 header 中声明的加密方式进行加盐 secret 组合加密，然后就构成了jwt 的第三部分
    
    最后生成如下
    
    ```
    KXCsn94zKO6DXloUFh-1Cjd5Rmlda-s1SvmDKpdANOlr65prEdOSEQIh4XqDXdkuZkIM11Ohew9KxlrX84La0g
    ```
 
    > secret 是保存在服务器端的，jwt 的签发生成也是在服务器端的，secret 就是用来进行 jwt 的签发和 jwt 的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个 secret, 那么客户端就可以自我签发 jwt
    
  **JWT 的构成是由这三部分字符串连接起来**
    
### 优点

* 降低服务器查询数据库的次数
* 解决跨域问题

### 缺点

* 无法在使用过程中废止某个 token，或者更改 token 的权限
* 未加密时容易泄露

## 参阅
* [HTTP基本认证](https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81)
* [理解OAuth 2.0 ](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)






