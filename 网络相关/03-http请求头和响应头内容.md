
# 一、HTTP 请求头（Request Headers）
客户端发送请求时携带的头部信息，告知服务器请求的详细信息或客户端的能力。

1. 基础控制
Host：目标服务器的域名（必需字段，用于区分虚拟主机）。
User-Agent：客户端标识（如浏览器类型、版本、操作系统）。
Accept：客户端支持的响应内容类型（如 text/html, application/json）。
Accept-Language：客户端偏好的自然语言（如 en-US, zh-CN）。
Accept-Encoding：客户端支持的压缩方式（如 gzip, br）。
Connection：控制连接是否保持（如 keep-alive 或 close）。

2. 缓存控制
Cache-Control：缓存策略（如 no-cache, max-age=3600）。
If-Modified-Since：资源最后修改时间（用于协商缓存，触发 304 响应）。
If-None-Match：资源的唯一标识（如 ETag，用于协商缓存）。

3. 身份认证
Authorization：携带认证凭证（如 Bearer <token>, Basic <credentials>）。
Cookie：客户端存储的会话信息（如 sessionId=abc123）。

4. 跨域与安全
Origin：请求的源域名（用于 CORS 跨域检查）。
Referer：请求的来源页面 URL（可能被隐私策略屏蔽）。
Sec-Fetch-*：浏览器安全策略信息（如 Sec-Fetch-Mode: navigate）。

5. 内容协商
Content-Type：请求体的数据类型（如 application/json）。
Content-Length：请求体的字节大小。
Content-Encoding：请求体的压缩方式（如 gzip）。

# 二、HTTP 响应头（Response Headers）
服务器返回响应时携带的头部信息，控制客户端如何处理响应数据。

1. 基础控制
Server：服务器标识（如 Nginx, Apache）。

Date：响应生成的时间（GMT 格式）。

Content-Type：响应体的数据类型（如 text/html; charset=utf-8）。

Content-Length：响应体的字节大小。

Content-Encoding：响应体的压缩方式（如 gzip）。

2. 缓存控制
Cache-Control：资源缓存策略（如 public, max-age=3600）。
ETag：资源的唯一标识（用于协商缓存）。
Expires：资源过期时间（旧版缓存控制）。
Last-Modified：资源最后修改时间（用于协商缓存）。

3. 安全与跨域
Access-Control-Allow-Origin：允许跨域的源（如 * 或 https://example.com）。
Access-Control-Allow-Methods：允许的 HTTP 方法（如 GET, POST）。
Strict-Transport-Security：强制使用 HTTPS（HSTS 策略）。
Content-Security-Policy：限制资源加载来源（防止 XSS 攻击）。
X-Content-Type-Options：禁止浏览器猜测 MIME 类型（如 nosniff）。

4. 会话管理
Set-Cookie：服务器设置 Cookie（如 sessionId=abc123; Path=/; HttpOnly）。
Set-Cookie 属性：
Secure：仅通过 HTTPS 传输。
HttpOnly：禁止 JavaScript 访问。
SameSite：限制跨站发送 Cookie（如 Strict, Lax）。

5. 重定向与跳转
Location：重定向目标 URL（配合 301, 302 状态码）。
Refresh：定时刷新或跳转（如 5; url=https://example.com）。

6. 性能优化
Vary：缓存变体标识（如 Vary: User-Agent）。
Link：预加载资源（如 <https://example.com/style.css>; rel=preload）。