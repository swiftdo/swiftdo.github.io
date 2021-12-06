# 关联协议与类型擦除

1. 关联协议：带有关联类型的协议（PATs, Protocols with Associated Types）。

2. 类型擦除：**利用一个具体实现的通用泛型类（参看系统库的 AnySequence），去包装具体实现了该泛型协议的类。用以解决不能直接使用泛型协议进行变量定义的问题。**

上方抛出了 2 个概念，对于关联协议还是比较容易理解的，比如下面的`Request`的定义：

```swift
enum HTTPMethod: String {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case patch = "PATCH"
    case delete = "DELETE"
}

protocol Request {
    associatedtype Output

    var url: URL {get}
    var method: HTTPMethod {get}
    func decode(_ data: Data) throws -> Output
}
```

`Request`这个关联协议也比较简单，`Output`是一个关联类型。`decode`目的是用来泛指完成网络请求后，将二进制转化为`Output`类型。如果我们想加载一张图片，那么可以定义 `ImageRequest`：

```swift
enum Error: Swift.Error {
    case invalidData
}

struct ImageRequest: Request {
    let url: URL
    var method: HTTPMethod { .get }

    func decode(_ data: Data) throws -> UIImage {
        guard let image = UIImage(data: data) else {
            throw Error.invalidData
        }
        return image
    }
}
```

为了让问题更易理解，我们将案例的网络请求层也展示出来：

```swift
protocol Networking {
    func fetch<R: Request>(_ request: R) -> AnyPublisher<R.Output, Swift.Error>
}

class Networker: Networking {
    func fetch<R: Request>(_ request: R) -> AnyPublisher<R.Output, Swift.Error> {
        var urlRequest = URLRequest(url: request.url)
        urlRequest.httpMethod = request.method.rawValue

        var publisher = URLSession.shared
            .dataTaskPublisher(for: urlRequest)
            .compactMap { $0.data }
            .eraseToAnyPublisher()

        return publisher.tryMap(request.decode)
            .eraseToAnyPublisher()
    }
}
```

`Networker`实现`Networking`协议，在 fetch 方法中，构造网络请求，待请求成功，将数据进行解析。

假设有一个文章列表，我们要加载这些文章的封面，大致的请求如下：

```swift
let request: Request = ImageRequest(url: article.image)
let networker: Networking = Networker()
networker.fetch(request)
  .sink(receiveCompletion: { completion in
    switch completion {
    case .failure(let error): print(error)
    default: break
    }
  }, receiveValue: { [weak self] image in
    self?.articles[articleIndex].downloadedImage = image
  })
  .store(in: &cancellables)
```

假设我们想让加载好的图片缓存起来，这样在滚列表的时候我们可以复用这些图片而不需要重新加载图片。

```swift
class RequestCache<Value> {
    // 报错：
    // 1.Protocol 'Request' can only be used as a generic constraint because it has Self or associated type requirements
    // 2.Type 'Request' does not conform to protocol 'Hashable'
    private var store: [Request: Value] = [:]
}
```

RequestCache 的目的是将这个 Request 作为 key，将下载好的数据作为 value。在加载图片的时候优先从 store 中取出 request 对应的 value，如果 value 不存在则进行加载图片。但是当我们定义好 `RequestCache` 的时候，编译发生错误。

为了解决这个问题，我们需要使用 `类型擦除`。

> 利用一个具体实现的通用泛型类（参看系统库的 AnySequence），去包装具体实现了该泛型协议的类

那么如何实现？

```swift
//可以将任何 Request 转化为 AnyRequest, 从而摆脱关联类型
//AnyRequest 是一个普通结构体
struct AnyRequest: Hashable {
    let url: URL
    let method: HTTPMethod
}
```

我们将 `RequestCache` 的定义如下：

```swift
class RequestCache<Value> {
    private var store: [AnyRequest: Value] = [:]
}
```

这样就不会报错了。那么下一步如何将`Request`的具体类转化为`AnyRequest`包装类？我们将`RequestCache`进一步完善：

```swift
class RequestCache<Value> {
    private var store: [AnyRequest: Value] = [:]

    /// 从 store 取
    func response<R: Request>(for request: R)-> Value? where R.Output == Value {
        // 包装
        let erasedRequest = AnyRequest(url: request.url, method: request.method)
        return store[erasedRequest]
    }

    // 保存到 store 中
    func saveResponse<R: Request>(_ response: Value, for request: R) where R.Output == Value {
        // 包装
        let erasedRequest = AnyRequest(url: request.url, method: request.method)
        store[erasedRequest] = response
    }
}
```

那么我们的 `Networker`的改造如下：

```swift

class Networker: Networking {

    private let imageCache = RequestCache<UIImage>()


    func fetch<R: Request>(_ request: R) -> AnyPublisher<R.Output, Swift.Error> {
        var urlRequest = URLRequest(url: request.url)
        urlRequest.httpMethod = request.method.rawValue
        var publisher = URLSession.shared
            .dataTaskPublisher(for: urlRequest)
            .compactMap { $0.data }
            .eraseToAnyPublisher()
        return publisher.tryMap(request.decode)
            .eraseToAnyPublisher()
    }

    func fetchWithCache<R: Request>(_ request: R) -> AnyPublisher<R.Output, Swift.Error> where R.Output == UIImage {
        if let response = imageCache.response(for: request) {
            return Just<R.Output>(response)
                .setFailureType(to: Swift.Error.self)
                .eraseToAnyPublisher()
        }
        return fetch(request)
            .handleEvents(receiveOutput: {
                self.imageCache.saveResponse($0, for: request)
            }).eraseToAnyPublisher()
    }
}
```

最终列表的图片的请求代码：

```swift
let request = ImageRequest(url: article.image)
let networker: Networking = Networker()
networker.fetchWithCache(request)
    .sink(receiveCompletion: { error in
        print(error)
    }, receiveValue: { image in
        self.articles[articleIndex].downloadedImage = image
    })
    .store(in: &cancellables)
```

## 总结：

当我们遇到不能直接使用泛型协议进行变量定义的时候，**我们可以利用一个具体实现的通用泛型类，去包装具体实现了该泛型协议的类**。
