type isString<T> = T extends string ? true : false;

const aaa: string = '123';

const f1: isString<number> = false

type ro<T> = {
    readonly [K in keyof T]: T[K]
}
interface name {
    age: number
}
const obj1: ro<name> = {
    age: 123,
}

// 提取函数返回类型
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : never;

type function1 = (a: number, b: string) => boolean

function ddd(id: number): { name: string, id: number } {
    return {
        name: 'ddd',
        id
    }
}
type ddd1 = ReturnType1<typeof ddd>;
console.log(typeof ddd)