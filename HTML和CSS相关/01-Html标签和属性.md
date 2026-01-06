# HTML标签
## 一、基础结构标签
 定义网页的骨架和基础信息：
    ```
    <!DOCTYPE html>‌：声明文档类型为 HTML5
    ‌<html>‌：根标签，包裹整个页面内容。  
    ‌<head>‌：存放元信息（标题、字符集、CSS/JS 链接等）。  
    <body>‌：网页主体内容区域（用户可见部分）。  
    <div>: block 标签  
    <span>： inline 标签  
    <canvas>: 画图相关  
    <svg>: 画图相关  
    <iframe>: 可以引入另外一个网页   
    ```
## ‌二、文本与段落标签
    标题‌：<h1>到<h6>，数字越小级别越高。
    ‌段落‌：<p>这是一个段落</p>。
    ‌换行‌：<br>（无需闭合标签）。
    ‌水平线‌：<hr>。
    ‌文本修饰‌：
        粗体：<strong>（语义化强调）或<b>（仅视觉加粗）。
        斜体：<em>（强调）或<i>（图标或术语）。
        删除线：<del>删除内容</del>，下划线：<ins>新增内容</ins>。
## 三、链接与多媒体
    ‌超链接‌：<a href="https://example.com" target="_blank">链接文本</a>
        target="_blank" 表示在新标签页打开。
    ‌图片‌：<img src="image.jpg" alt="图片描述">
        alt 用于图片无法加载时显示替代文本。
    音视频
        ```html
            <audio controls>
                <source src="audio.mp3" type="audio/mpeg">
            </audio>
            <video controls width="600">
                <source src="video.mp4" type="video/mp4">
            </video>
        ```
## ‌四、列表标签 和 表格
    无序列表‌（圆点符号）：ul li
    ‌有序列表‌（数字序号）：ol li
    定义列表‌（术语与描述）：dl dt dd
    表格: table thead  tbody tfooter th tr  td
## 五、表单标签
    ```html

    <form action="/submit" method="POST"> 
        <label for="name">姓名：</label>
        <input type="text" id="name" name="username" required>

        <label for="password">密码：</label>
        <input type="password" id="password" name="pwd">

        <input type="radio" id="male" name="gender" value="male">
        <label for="male">男</label>

        <input type="checkbox" id="agree" name="agree">
        <label for="agree">同意协议</label>

        <textarea rows="4" cols="50" placeholder="输入内容"></textarea>

        <select name="city">
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
        </select>

        <button type="submit">提交</button>
        </form>

    ```
## 六、语义化标签（HTML5 新增）--- 面试常问
    <header>（页眉）、<footer>（页脚）、<nav>（导航栏）、<article>（独立文章）、<section>（内容区块）、<aside>（侧边栏）。
## 七、注释与特殊符号
    ‌注释‌：<!-- 注释内容 -->（不会被浏览器渲染）。
    ‌特殊符号‌：
        &lt;（<）、&gt;（>）、&amp;（&）、&nbsp;（空格）、&copy;（©）等。