# 抽象语法树-AST
## 定义
    AST 是源代码的树状抽象表示，通过词法分析和语法分析将代码转换为带有层级的节点结构
## 生成流程
    1. 词法分析： 将代码字符串拆分为tokens
    2. 语法分析： 根据tokens构建AST节点
# 关键应用场景
## 代码转换
    1. babel 通过AST将es6+代码转换为es5，如箭头函数转化普通函数
    2. ts 编译器将ts代码转为js
## 静态分析与工具链
    1. ESlint 基于AST检查代码规范
    2. webpack 利用AST分析模块依赖

# 学习 babel 跟深入的了解AST 
    @babel/parser  @babel/traverse  @babel/types  @babel/generator