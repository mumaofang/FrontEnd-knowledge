# http请求方式
    GET: 向服务器获取数据；
    POST：将实体提交到指定的资源，通常会造成服务器资源的修改；
    PUT：上传文件，更新数据；
    DELETE：删除服务器上的对象；
    HEAD：获取报文首部，与GET相比，不返回报文主体部分；
    OPTIONS：询问支持的请求方法，用来跨域请求；
    CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行TCP通信；
    TRACE: 回显服务器收到的请求，主要⽤于测试或诊断。
# 状态码
1. 1xx 信息响应
    表示请求已被接收，需要继续处理（通常浏览器自动处理，无需用户干预）。

    100 Continue：客户端应继续发送请求体（用于大文件上传前的验证）。

    101 Switching Protocols：服务器同意客户端请求切换协议（如从 HTTP 升级到 WebSocket）。

    102 Processing：服务器已接收请求但未完成处理（用于长时间操作）。

2. 2xx 成功
    表示请求已成功被服务器接收、理解并处理。

    200 OK：请求成功（最常见，如返回 HTML、JSON 数据）。

    201 Created：资源创建成功（如 POST 请求后返回新资源 URL）。

    202 Accepted：请求已接收但未处理完成（异步任务场景）。

    204 No Content：请求成功，但无返回内容（如 DELETE 请求）。

    206 Partial Content：返回部分内容（用于断点续传或分片下载）。

3. 3xx 重定向
    表示需要客户端进一步操作以完成请求（通常自动跳转）。

    301 Moved Permanently：资源永久重定向（SEO 权重会转移）。

    302 Found：资源临时重定向（浏览器默认行为可能保留原方法为 GET）。

    303 See Other：重定向到另一个 URL，强制使用 GET 方法。

    304 Not Modified：资源未修改，使用缓存（协商缓存命中）。

    307 Temporary Redirect：临时重定向，保持原请求方法（比 302 更严格）。

    308 Permanent Redirect：永久重定向，保持原请求方法（比 301 更严格）。

4. 4xx 客户端错误
    表示请求包含错误或无法完成（客户端需修正请求）。

    400 Bad Request：请求语法错误（如参数格式错误）。

    401 Unauthorized：未认证（需要登录，如未携带 Token）。

    403 Forbidden：服务器拒绝请求（无权限访问资源）。

    404 Not Found：资源不存在（路径错误或资源已删除）。

    405 Method Not Allowed：请求方法不被允许（如用 GET 访问只支持 POST 的接口）。

    408 Request Timeout：请求超时（服务器等待时间过长）。

    429 Too Many Requests：请求频率过高（触发限流）。

5. 5xx 服务器错误
    表示服务器处理请求时发生错误（需排查服务端问题）。

    500 Internal Server Error：服务器内部错误（通用错误，如代码异常）。

    501 Not Implemented：服务器不支持请求的功能（如未实现的 HTTP 方法）。

    502 Bad Gateway：网关或代理服务器收到无效响应（如后端服务崩溃）。

    503 Service Unavailable：服务不可用（如服务器过载或维护）。

    504 Gateway Timeout：网关超时（代理服务器未及时收到后端响应）。

    505 HTTP Version Not Supported：服务器不支持请求的 HTTP 协议版本。


