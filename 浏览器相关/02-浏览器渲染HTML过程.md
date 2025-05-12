HTML在浏览器的执行顺序解析
# 一、基础执行流程
                                           
    HTML解析 → CSS解析 → 样式计算 → 布局(Layout) → 绘制(Paint) → 合成(Composite)
          ↘ JavaScript执行 ↗         ↘ 重排(回流)触发 ↗ ↘ 重绘触发 ↗

- DOM树构建‌(HTML解析构建)
  HTML解析器通过词法分析将文本转换为符号序列，生成DOM树结构
  阻塞规则‌：若遇到<script>标签且无async/defer属性，暂停HTML解析直至脚本执行完成

- CSSOM树生成‌‌(CSS解析构建)
  解析<link>引入的CSS文件及<style>标签内容，构建CSSOM树
  同步依赖‌：后续JS执行需等待CSS加载解析完成（避免样式冲突）

# 二、关键执行顺序规则

  - HTML解析与DOM构建‌	
    顺序解析标签，生成DOM节点（遇到未闭合标签时自动补全）	
    注意：script标签未异步加载会阻塞解析
  - JS执行优先级‌	
    内联JS立即执行；
    外部JS默认同步加载并阻塞后续解析	
    async属性异步加载（无序执行），
    defer属性延迟至DOM解析完成后执行
  - 渲染树合成‌	
    DOM树与CSSOM树合并生成渲染树，排除隐藏元素（如display:none）	
    <link>标签位置影响CSSOM构建顺序
  - 布局与绘制‌	
    计算元素几何属性（布局），
    调用GPU进行像素绘制	
    JS操作DOM/CSS触发回流（重排）或重绘，
    强制重新布局


三、典型场景示例
```html
<!DOCTYPE html>
<html>
<head>
  <script async src="onw.js"></script> <!-- 无序执行 -->
  <link rel="stylesheet" href="styles.css">
  <script defer src="two.js"></script> <!-- 延迟至DOM解析完成后执行 -->
</head>
<body>
  <div>内容</div>
  <script  src="there.js"></script> <!-- 立即执行-柱塞解析 -->
  <img src="image.jpg">
</body>
</html>
```

执行顺序分析：

解析到onw.js时不暂停，加载完成后执行-无序执行
加载styles.css（预解析线程提前下载）
继续解析生成DOM，异步加载two.js（-延迟至DOM解析完成后执行）
there.js 立即执行-柱塞解析

# 四、性能优化实践

关键渲染路径优化‌
  CSS优先通过<link>置于头部，JS使用async/defer减少阻塞
  动态资源加载‌
  延迟非关键资源加载（如Intersection Observer 懒加载图片）
  减少回流触发‌
  避免JS频繁操作样式，使用requestAnimationFrame批量更新

CSS优化策略‌
  避免深层嵌套选择器（减少样式计算范围）
  使用flex/grid替代float布局（回流计算效率更高）
  对动画元素启用position: absolute（脱离文档流减少影响范围）


布局（重排、回流）与绘制‌（重绘）	
1. ‌必触发重排的操作‌
修改元素尺寸：width、height、padding
调整布局结构：display: none、flex布局变化
窗口/元素几何读取：offsetTop、scrollWidth等布局属性访问（强制同步计算）
2. ‌仅触发重绘的操作‌
颜色类属性修改：color、background-color
边框样式调整：border-style
非布局可见性变化：visibility: hidden