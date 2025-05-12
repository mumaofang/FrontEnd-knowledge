# ‌一、基础选择器
1. ‌元素选择器（Tag Selector）： 通过 HTML 标签名选择元素：
2. ‌类选择器（Class Selector）： 通过元素的 class 属性选择（可复用）
3. ‌ID 选择器（ID Selector）：通过元素的唯一 id 属性选择：
4. ‌通配符选择器（Universal Selector）：* 选择所有元素（慎用，可能影响性能）
# 二、复合选择器
1. ‌后代选择器（Descendant Selector）： 选择嵌套在某个元素内的后代元素（不限层级）div span
2. ‌子元素选择器（Child Selector）：仅选择直接子元素（一层嵌套） ul > li
3. ‌相邻兄弟选择器（Adjacent Sibling Selector）选择紧接在某个元素后的‌第一个兄弟‌元素 h2 + p
4. ‌通用兄弟选择器（General Sibling Selector）选择某个元素后的‌所有兄弟‌元素 h2 ~ p
5. ‌交集选择器（Compound Selector）同时满足多个条件的元素 p.special
6. ‌并集选择器（Selector List）同时选择多个元素（逗号分隔）h1, .title, #header
# ‌三、属性选择器
1. 包含指定属性 [attr]
2. 属性完全等于 [attr="value"]
3. 属性以 value ‌开头 [attr^="value"]
4. 属性以 value ‌结尾 [attr$="value"]
5. 属性包含 value ‌子串 [attr*="value"]
6. 属性包含‌独立单词‌ value [attr~="value"]
7. 属性以 value 或 value- 开头 [attr|="value"]
# ‌四、伪类选择器（Pseudo-Class）
    :hover：鼠标悬停
    :active：元素被激活（如点击瞬间）
    :focus：获得焦点（输入框、按钮）
    :visited：已访问的链接
    :checked：被选中的单选/复选框

    :first-child / :last-child：第一个/最后一个子元素
    :nth-child(n)：第 n 个子元素
    :not(selector)：排除匹配的元素
# ‌五、伪元素选择器（Pseudo-Element）
    p::first-line  /* 段落的首行文本 */
    p::before    /* 在段落前插入内容 */
    input::placeholder  /* 修改输入框的占位符样式 */

# ‌六、选择器优先级（Specificity）‌
    当多条规则作用于同一元素时，优先级高的样式生效。计算规则如下（从高到低）：

    ‌!important‌：强制优先级最高（慎用）。
    ‌行内样式‌：直接写在元素 style 属性中的样式。
    ‌ID 选择器‌：每个 ID 计 100。
    ‌类/属性/伪类选择器‌：每个计 10。
    ‌元素/伪元素选择器‌：每个计 1。
    ‌通配符/继承样式‌：优先级最低。

    ```css
        #nav .item:hover {}  /* 优先级：100 + 10 + 10 = 120 */
    ```
