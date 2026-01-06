# 服务端渲染和浏览器渲染的区别
    - 服务端渲染 server -》 server rendered html -> browser
    - 浏览器渲染 server =》 empty + js => browser exectes js -> rendered html 

# 服务端渲染示意
 ```javascript
    import fs from 'fs-extra' // fs-extra 是原生 fs 的一个超集
    import http from 'node:http'

    const server = http.createServer(async (req, res) => {
        const html = await fs.readFile('./index.html')
        // 以前的SSR 解析模版引擎方法 ejs jada handlebars
        const newHtml = html.replace("{data}", new Date().toLocalString())
        // 想着的服务端渲染 渲染react、vue

        res.send(html)
    })

    server.listen(3000, => {

    })


 ```

 # 服务端渲染现有问题
 服务端成本高
 spa无法100%重构
 无法调用浏览器事件

 # ssr 应用场景
 官网
 门户网站
 落地页
 广告业

 # 服务端渲染框架
 - react next/remix
 - vue nuxt

