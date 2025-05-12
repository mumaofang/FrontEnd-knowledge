XSS攻击（跨站脚本攻击）是一种利用网页漏洞注入恶意脚本并诱导用户执行的攻击方式。攻击者通过篡改网页内容或构造特定请求，使受害者在浏览器中加载并执行未经授权的脚本，进而窃取数据、劫持会话或破坏系统功能。以下是其核心要点：

# 一、攻击类型与技术原理‌

- 反射型XSS‌
攻击者将恶意脚本嵌入URL参数中，用户点击链接后服务器返回包含脚本的响应内容并执行。例如构造类似 http://example.com/search?query=<script>alert('XSS')</script> 的链接，用户点击后触发弹窗或其他恶意行为。

- 存储型XSS‌
恶意脚本被持久化存储在服务器数据库中（如评论、日志等），当其他用户访问包含该内容的页面时自动执行。例如攻击者在论坛提交含恶意脚本的帖子，所有浏览该帖的用户均受影响。

- DOM型XSS‌
通过修改客户端DOM结构实现攻击，无需与服务器交互。例如恶意URL中的参数被JavaScript直接解析并插入页面，导致脚本执行。

# 二、危害与攻击场景‌
窃取敏感信息‌：通过盗取Cookie、Session ID等实现会话劫持。
篡改网页内容‌：注入虚假页面或重定向至钓鱼网站。
传播蠕虫病毒‌：利用社交平台发起大规模自动化攻击。
控制用户浏览器‌：远程执行恶意操作如下载木马或发起DDoS攻击。
# 三、防御措施‌

- 输入验证与过滤‌
对用户输入进行严格校验，过滤危险字符（如 <, >, &）或限制输入格式。

- 输出编码与转义‌
动态内容输出时，对HTML、JavaScript、CSS等上下文进行转义处理，例如将 < 转为 &lt;。

- 启用CSP策略‌
    通过内容安全策略（Content Security Policy）限制脚本来源，禁止加载未经授权的资源。
    通过HTTP响应头配置
    Apache: .htaccess 设置 
    ```
        Header set Content-Security-Policy "default-src 'self'; script-src 'self' 
    ```
    Nginx: 配置文件中设置
        add_header Content-Security-Policy "default-src 'self'; img-src *; style-src ;
    通过HTML meta标签配置
``` html
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; connect-src https:; img-src 'self' data:;">
```
- 设置HttpOnly属性‌
Cookie标记为HttpOnly，防止JavaScript直接读取敏感信息。

- 框架与库的防护‌
使用现代前端框架（如Vue/Angular）的默认编码机制，避免手动拼接HTML。

# 四、典型示例‌
SQL注入与XSS结合‌：攻击者利用SQL注入漏洞获取数据库权限后，进一步植入XSS脚本扩大攻击范围。
基于DOM的会话劫持‌：通过修改页面中的登录表单，将用户凭证发送至攻击者服务器。
XSS攻击因隐蔽性强、危害面广，长期位居Web安全威胁前列。开发需遵循安全编码规范，结合自动化工具（如渗透测试、代码审计）持续排查隐患。