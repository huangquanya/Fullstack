# 第九章

ECMAScript 6 新增的代理和反射为开发者提供了拦截并向基本操作嵌入额外行为的能力。具体地说，可以给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对象来使用。在对目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制。

## 本章内容

1. 代理基础
2. 代码捕获器与反射方法
3. 代理模式

## 可能遇到的面试题

1. 了解过代理，捕获器，反射吗？
2. 介绍常见的捕获器与反射方法。
3. 介绍几种代理的用处

## 知识点

1. **代理**是目标对象的抽象。使用 Proxy 构造函数创建接收两个参数：目标对象和处理程序对象。在代理对象上执行的任何操作实际上都会应用到目标对象。

2.  Proxy.prototype 是 undefined，因此不能使用 instanceof 操作符

3. 使用**代理的主要目**的：可以定义捕获器（trap）。捕获器就是在处理程序对象中定义的“基本操作的拦截器”。每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接或间接在代理对象上调用。每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对象之前先调用捕获器函数，从而拦截并修改相应的行为。

4. 通过代理对象执行 get()操作时，就会触发定义的 get()捕获器，get()不是ECMAScript 对象可以调用的方法

5. 反射（Reflect）：处理程序对象中所有可以捕获的方法都有对应的反射（Reflect）API 方法

   ```
   const handler = { 
   // 方法1
    get() { 
    	return Reflect.get(...arguments); 
    } 
    // 方法2
    get: Reflect.get
   };
   // 方法3
   const proxy = new Proxy(target, Reflect);
   ```

6. 捕获器不变式：捕获器不变式因方法不同而异，但通常都会防止捕获器定义出现过于反常的行为。

   `比如，如果目标对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性不同的值时，会抛出 TypeError`

7. 可撤销代理: Proxy 也暴露了 revoke()方法，这个方法支持撤销代理对象与目标对象的关联。撤销函数（revoke()）是幂等的,撤销函数和代理对象是在实例化时同时生成的

   `const { proxy, revoke } = Proxy.revocable(target, handler); `

8. 反射 API :为什么要使用该api

   - 反射 API 并不限于捕获处理程序
   - 大多数反射 API 方法在 Object 类型上有对应的方法

   

   1. 状态标记:很多反射方法返回称作“状态标记”的布尔值，表示意图执行的操作是否成功。

   2. 提供标记状态的反射方法
      - Reflect.defineProperty()
      -  Reflect.preventExtensions()
      - Reflect.setPrototypeOf()
      - Reflect.set()
      - Reflect.deleteProperty()

   3. 用一等函数替代操作符

      - Reflect.get()：可以替代对象属性访问操作符。
      - Reflect.set()：可以替代=赋值操作符。
      - Reflect.has()：可以替代 in 操作符或 with()。
      - Reflect.deleteProperty()：可以替代 delete 操作符。
      - Reflect.construct()：可以替代 new 操作符。

   4. 安全地应用函数

      ```
      在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性（虽然可能性极小）。
      为绕过这个问题，可以使用定义在 Function 原型上的 apply 方法，比如：
      Function.prototype.apply.call(myFunc, thisVal, argumentList); 
      这种可怕的代码完全可以使用 Reflect.apply 来避免：
      Reflect.apply(myFunc, thisVal, argumentsList);
      ```

9. 代理另一个代理：在一个目标对象之上构建多层拦截网

10. 代理的**问题与不足**：

    - 代理中的 **this**：如果目标对象依赖于对象标识(定义时存在get,set)，
    - 代理与内部槽位：Date 类型方法的执行依赖 this 值上的内部槽位[[NumberDate]]。代理对象上不存在这个内部槽位，而且这个内部槽位的值也不能通过普通的 get()和 set()操作访问到，于是代理拦截后本应转发给目标对象的方法会抛出 TypeError

11. 代理可以捕获 13 种不同的基本操作。这些操作有各自不同的反射 API 方法、参数、关联 ECMAScript操作和不变式。

    - 对于在代理对象上执行的任何一种操作，只会有一个捕获处理程序被调用。不会存在重复捕获的情况。
    - 只要在代理上调用，所有捕获器都会拦截它们对应的反射 API 操作。

    1. get()捕获器会在获取属性值的操作中被调用。对应的反射 API 方法为 Reflect.get()。

       返回值:无限制；

       拦截的操作：proxy.property，proxy[property]，Object.create(proxy)[property]，Reflect.get(proxy, property, receiver)

       捕获器处理程序参数

## 总结

