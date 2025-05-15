# 核心概念
1. 组件化开发
2. 虚拟dom优化渲染性能
3. 声明式编程
3. 函数式编程


## 虚拟DOM工作原理
    虚拟DOM是内存中的轻量级DOM树副本，通过Diff算法比较新旧虚拟DOM差异后批量修改更新真实DOM,减少直接操作浏览器的开销
    虚拟 DOM (Virtual DOM) 核心流程
    1. 初始渲染
        react组件首次渲染师，生成虚拟DOM树（一个轻量级的js对象树，包含节点类型、属性、子节点等信息。）
        将此树转换为真实DOM并渲染到页面
    2. 状态更新触发
        当组件状态或props变化时，重新生成新的虚拟dom树
    3. diff算法（协调过程）
        同层比较：仅对比同一层的节点，若类型不同（如div变为span）,直接替换整个树
        Key优化列表：列表元素通过key标识，帮助react识别元素移动、增删、减少不必要的节点操作
        组件复用：相同类型的组件实例触发更新而非销毁重建
    4. 批量更新（commit 阶段）
        将diff结果批量更新到真实DOM, 减少重排重绘次数。
    示例‌：列表渲染时仅更新变化的项，而非重新渲染整个列表。
## 单向数据流 (Unidirectional Data Flow)
    核心概念
    1. 数据自上而下流动‌：父组件通过 props 向子组件传递数据，子组件通过回调函数通知父组件状态变化。
    2. 状态提升：多个组件需要共享状态时，需要提升到最近的公共父组件
    3. 单一数据源：每个状态的修改仅通过唯一的入口（如：setState,redux的dispath），避免数据不一致
    过程：
        父组件（State）-> props -> 子组件（只读）
        子组件（事件）-> 回调 -> 父组件（更新State）
    核心优势
        可预测性
        组件解耦
        高效更新
        适合复杂应用
    与双向绑定的对比
        显示更新，流程清晰，代码量多
        大型应用，强调可控性和可维护性
## 函数式与 Hooks
    React Hooks 的实现原理依赖于 React 的 ‌Fiber 架构‌和 ‌闭包‌机制，其核心设计解决了 ‌状态持久化‌ 和 ‌Hooks 执行顺序一致性‌ 两大问题
    1. 函数式组件和类组件的对比
    |特性      |函数式组件         |类组件|
    |代码结果  |纯函数，无this绑定     |需要处理this|
    |状态管理   | 使用useState等hooks | this.state和setState|
    |生命周期   | useEffect 模拟     | 直接使用声明周期方法 |
    |逻辑复用   | 自定义hooks，高可用性 | 高阶组件（HOC）或 Render Props|

    2. Hooks的设计思想
    解决类组件的痛点
        逻辑分散
        this问题
        复杂组件
        逻辑复用困难
    函数式编程的优势
        纯函数特性：输入props,输出jsx,无副作用（配合hooks管理副作用）
        更简介的代码：消除了类声明的模版代码（如 constructor）
    3. 核心hooks 详解
        1. useState状态管理
            ```jsx
                function Counter(){
                    const [count, serCount] = useState(0); 初始值0
                    return <button onclick={()=> setCount(1)}>{count}<button>
                }
            ```
            ‌作用‌：定义组件的局部状态。
            ‌返回值‌：当前状态值和更新状态的函数（约定命名为 setXxx）。
            ‌注意‌：状态更新是异步的，需通过函数式更新确保准确性：
        2. useEffect 副作用管理
              ```jsx
                function demo(){
                    const [count, serCount] = useState(0); 初始值0
                    useEffect(()=>{
                        console.log(count)
                        retun ()=> {
                              console.log('clean function')
                        }
                    }, [count])
                    return <button onclick={()=> setCount(1)}>{count}<button>
                }
            ```
            作用‌：处理副作用（数据获取、DOM 操作、订阅等）。
            ‌执行时机‌：
            默认在每次渲染后执行。
            通过‌依赖项数组‌控制触发条件：
            空数组 []：仅在组件挂载和卸载时执行（类似 componentDidMount 和 componentWillUnmount）。
            依赖项变化时重新执行。
            ‌清理机制‌：返回一个函数用于清理副作用。
        3. useContext：共享状态
            ```jsx
            import { createContext, useContext } from 'react';

            const ThemeContext = createContext('light');

            const App = () => (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
            );


            const Toolbar = () => {
            const theme = useContext(ThemeContext);
                return <div>Current Theme: {theme}</div>;
            };

            ```