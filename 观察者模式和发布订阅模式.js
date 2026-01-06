function gczms() {
    // 主题（Subject）
    class Subject {
        constructor() {
            this.observers = [];
        }

        addObserver(observer) {
            this.observers.push(observer);
        }

        notify(data) {
            // 直接调用观察者的方法
            this.observers.forEach(observer => observer.update(data));
        }
    }
    // 观察者（Observer）
    class Observer {
        update(data) {
            console.log(`收到数据: ${data}`);
        }
    }

    // 使用
    const subject = new Subject();
    const observer1 = new Observer();
    const observer2 = new Observer();

    subject.addObserver(observer1);
    subject.addObserver(observer2);
    subject.notify('Hello'); // 直接调用
}

function fbdyms() {
    // 事件总线/消息代理
    class EventBus {
        constructor() {
            this.events = {};
        }

        subscribe(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
        }

        publish(event, data) {
            if (this.events[event]) {
                this.events[event].forEach(callback => callback(data));
            }
        }
    }

    // 使用
    const eventBus = new EventBus();

    // 订阅者不知道发布者是谁
    eventBus.subscribe('user.login', (user) => {
        console.log(`用户 ${user.name} 登录`);
    });

    eventBus.subscribe('user.login', (user) => {
        console.log(`发送欢迎邮件给 ${user.email}`);
    });

    // 发布者不知道订阅者是谁
    eventBus.publish('user.login', {
        name: '张三',
        email: 'zhangsan@example.com'
    });
}

gczms()


// 1. 耦合程度
// 观察者模式：Subject 需要维护 Observer 列表，直接调用其方法
// 发布-订阅：发布者和订阅者通过中间件通信，完全解耦


// 2. 灵活性
// 观察者模式：Observer 需要实现特定接口（如 update 方法）
// 发布-订阅：只需知道事件名和回调函数，更灵活

// 3. 通信时机
// 观察者模式：通常是同步的
// 发布-订阅：可以是同步或异步（常用于事件驱动架构）

// 4. 使用场景
// 观察者模式：
// 简单的 UI 组件通信
// 状态变化通知
// 小规模应用内部通信

// 发布-订阅模式：
// 复杂的微服务通信
// 跨模块/跨应用通信
// 需要解耦的系统
// 事件驱动架构

// text
// 观察者模式：
// Subject ──直接调用──> Observer1
//           └─直接调用──> Observer2

// 发布-订阅模式：
// Publisher ──发布事件──> Event Bus ──分发事件──> Subscriber1
//                           └─分发事件──> Subscriber2

// 观察者模式是特殊形式的发布-订阅模式，其中没有中间代理
// 如果只需要简单的通知机制，观察者模式更轻量
// 如果需要完全解耦和灵活的事件管理，发布-订阅模式更合适
// 现代前端框架（如 Vue 的 EventBus、Redux）通常使用发布-订阅模式
// Node.js 的 EventEmitter 也是发布-订阅模式的实现

// 简单记忆：观察者模式是“主动通知”，发布-订阅模式是“通过中介传递消息”。 耦合度、灵活性、同步异步（事件驱动架构）。 简单用观察者复杂用发布订阅