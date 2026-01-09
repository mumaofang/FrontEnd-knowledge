# type 和 interface
- 声明合并
    type不能声明合并。interface 可以
- 扩展
    interface 使用 extends。type 使用 &（交叉类型）
- 类实现
    interface 可以被类实现。type 不能直接被类实现（除非是对象类型）
- 灵活性差异
    type 更灵活，支持更多类型
    - 联合类型、元组类型、条件类型、提取函数返回类型、字面量类型
```typescript
    // 联合类型
    type id = string | number
    // 元组类型
    type Point = [number, number];
    // 映射类型
    type Readonly<T> = {
        readonly [p in keyof T]: T[P]
    }
    // 条件类型
    type isString<T> = T extends string ? true : false
    
```