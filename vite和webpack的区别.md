1. 核心架构和构建理念
    Webpack
        基于打包：将所有模块（JS、CSS、图片等）打包成一个或多个bundle
        构建时编译：开发时需要在内存中完成整个打包过程才能启动服务
        先打包后启动：需要等待所有依赖分析、编译、打包完成

    Vite
        基于原生 ES 模块：利用浏览器原生支持 ES 模块的特性
        按需编译：只编译当前页面需要的模块
        先启动后编译：服务器秒开，根据请求实时编译

2. 开发服务器启动速度
    // Webpack
    // 项目越大，启动越慢（可能需要几十秒到几分钟）
    // 需要打包整个依赖图才能启动

    // Vite
    // 秒级启动（无论项目大小）
    // 只启动服务器，不打包
3. 热更新（HMR）性能
    Webpack
    修改文件后，需要重新构建受影响模块的依赖链
    项目越大，HMR 越慢

    Vite
    基于 ES 模块的精确 HMR
    只更新修改的模块，不重新构建依赖链
    HMR 速度几乎不受项目规模影响
4. 配置复杂度
    // Webpack配置示例（复杂）
        module.exports = {
        entry: './src/index.js',
        output: { /* ... */ },
        module: {
            rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            ]
        },
        plugins: [ /* 多个插件 */ ]
        };

        // Vite配置示例（简洁）
        export default {
        plugins: [vue(), react()], // 内置了常见功能
        build: {
            rollupOptions: { /* ... */ }
        }
        };
5. 生态系统
    Webpack
    ✅ 成熟稳定：经过多年实践考验
    ✅ 插件生态丰富：成千上万的loader和插件
    ✅ 社区支持强大：问题容易找到解决方案
    ✅ 功能全面：支持各种复杂场景

    Vite
    ✅ 现代化：专为现代浏览器设计
    ✅ 开箱即用：内置对TypeScript、JSX、CSS预处理器等的支持
    ✅ 构建速度快：生产构建使用Rollup，速度更快
    ✅ 逐渐完善：生态正在快速增长
6. 技术实现差异
    webpack  源码 → 分析依赖 → 打包所有模块 → 生成bundle → 启动服务器
    vite     启动服务器 → 请求模块 → 按需编译返回 → 浏览器直接使用ES模块