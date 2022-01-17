# 第七章	迭代器与生成器 

## 本章内容

1. 理解迭代
2. 迭代器模式
3. 生成器

## 可能遇到的面试题

1. 迭代器和生成器的程序题
2. 做题过程中，看是否使用了迭代器生成器，可以看出这个面试者的一些水平吧
3. 可迭代协议和迭代器协议的概念

## 知识点

1. ECMAScript 6 规范新增了两个高级特性：迭代器和生成器。

2. 循环是迭代机制的基础，这是因为它可以指定迭代的次数，以及每次迭代要执行什么操作。每次循环都会在下一次迭代开始之前完成，而每次迭代的顺序都是事先定义好的。

3. 理解迭代：迭代会在一个有序集合上进行。（“有序”可以理解为集合中所有项都可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。）

4. 通过递增索引遍历数组每一项不理想的原因：

   - 迭代之前需要事先知道如何使用数据结构。
   - 遍历顺序并不是数据结构固有的。

5. 迭代器模式：有些结构称为“可迭代对象”（iterable），因为它们实现了正式的 Iterable 接口，而且可以通过迭代器 Iterator 消费。

6. 可迭代对象是一种抽象的说法。**可迭代对象**理解成数组或集合这样的集合类型的对象。它们包含的元素是有限的，且具有无歧义的遍历顺序

7. 任何实现 Iterable 接口的数据结构都可以被实现 Iterator 接口的结构“消费”（consume）。**迭代器**（iterator）是按需创建的一次性对象。每个迭代器都会关联一个**可迭代对象**，而迭代器会暴露迭代其关联可迭代对象的 API。迭代器无须了解与其关联的可迭代对象的结构，只需要知道如何取得连续的值。这种概念上的分离正是 Iterable 和 Iterator 的强大之处。

8. 可迭代协议要求同时具备两种能力：

   1. 支持迭代的自我识别能力
   2. 创建实现Iterator 接口的对象的能力

9. 实现了Iterable接口的内置类型：

   ```
    字符串
    数组
    映射
    集合
    arguments 对象
    NodeList 等 DOM 集合类型
   ```

   实现可迭代协议的所有类型都会自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：

   ```
    for-of 循环
    数组解构
    扩展操作符
    Array.from()
    创建集合
    创建映射
    Promise.all()接收由期约组成的可迭代对象
    Promise.race()接收由期约组成的可迭代对象
    yield*操作符，在生成器中使用
   ```

10. 迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象。迭代器 API 使用 next()方法在可迭代对象中遍历数据。每次成功调用 next()，都会返回一个 **IteratorResult 对象**，其中包含迭代器返回的下一个值。若不调用 next()，则无法知道迭代器的当前位置。

11. 迭代器对象 IteratorResult：：done 和 value。

    done 是一个布尔值，表示是否还可以再次调用 next()取得下一个值；

    value 包含可迭代对象的下一个值（done 为false），或者 undefined（done 为 true）。

12. 迭代器会阻止垃圾回收程序回收可迭代对象。

13. 可以自定义迭代器

    ```
    class Counter { 
     constructor(limit) { 
     	this.limit = limit; 
     } 
     [Symbol.iterator]() { 
     	let count = 1, 
     	limit = this.limit; 
     	return { 
     		next() { 
     			if (count <= limit) { 
     				return { done: false, value: count++ }; 
     			} else { 
     				return { done: true, value: undefined }; 
     			} 
     		},
     		return() { 
             console.log('Exiting early'); 
             return { done: true }; 
            }
     	}; 
     } 
    } 
    let counter = new Counter(3); 
    for (let i of counter) { console.log(i); } 
    // 1 
    // 2 
    // 3
    ```

14. 可以提前终止迭代器

    ```
    执行迭代的结构在想让迭代器知
    道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。可能的情况包括：
     for-of 循环通过 break、continue、return 或 throw 提前退出；
     解构操作并未消费所有值。
    return()方法必须返回一个有效的 IteratorResult 对象。
    ```

15. **生成器**：生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。只要是可以定义函数的地方，就可以定义生成器。

    `箭头函数不能用来定义生成器函数。`

16. **调用生成器函数**会产生一个**生成器对象**。一开始处于暂停执行（suspended）的状态。实现了 Iterator 接口，因此具有 next()方法。

17. 生成器函数只会在**初次**调用 next()方法后开始执行。

18. **yield** 关键字，让生成器停止和开始执行，也是生成器最有用的地方。

19. 遇到**yield**关键字后，执行会停止，**函数作用域的状态会被保留**。停止执行的生成器函数只能通过在生成器对象上调用 next()方法来恢复执行：

    ```
    function* generatorFn() { 
     yield; 
    } 
    let generatorObject = generatorFn(); 
    console.log(generatorObject.next()); // { done: false, value: undefined } 
    console.log(generatorObject.next()); // { done: true, value: undefined }
    ```

20. yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误。yield 关键字必须直接位于**生成器函数定义中**，出现在嵌套的非生成器函数中会抛出语法错误

21. 生成器对象作为可迭代对象：

    ```
    function* generatorFn() { 
     yield 1; 
     yield 2; 
     yield 3; 
    } 
    for (const x of generatorFn()) { 
     console.log(x);
     }
    function* nTimes(n) { 
     	while(n--) { 
     		yield; 
     	} 
    }
     for (let _ of nTimes(3)) { 
     console.log('foo'); 
    } 
    // foo 
    // foo 
    // foo 
    ```

22. 使用 **yield** 实现输入和输出：上一次让生成器函数暂停的 yield 关键字会接收到传给 next()方法的第一个值。（第一次调用 next()传入的值不会被使用，因为这一次调用是为了开始执行生成器函数）

    ```
    function* generatorFn(initial) { 
     console.log(initial); 
     console.log(yield); 
     console.log(yield); 
    } 
    let generatorObject = generatorFn('foo'); 
    generatorObject.next('bar'); // foo 
    generatorObject.next('baz'); // baz 
    generatorObject.next('qux'); // qux
    ```

23.  产生可迭代对象

    可以使用星号增强 yield 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值

    ```
    // 等价的 generatorFn： 
    // function* generatorFn() { 
    // for (const x of [1, 2, 3]) { 
    // yield x; 
    // } 
    // } 
    function* generatorFn() { 
     yield* [1, 2, 3]; 
    } 
    let generatorObject = generatorFn(); 
    for (const x of generatorFn()) { 
     console.log(x); 
    } 
    // 1 
    // 2 
    // 3
    ```

24. 使用 **yield\***实现递归算法

    yield*最有用的地方是实现递归操作，此时生成器可以产生自身。看下面的例子：

    ```
    function* nTimes(n) { 
     if (n > 0) { 
     yield* nTimes(n - 1); 
     yield n - 1; 
     } 
    } 
    for (const x of nTimes(3)) { 
     console.log(x); 
    } 
    // 0 
    // 1 
    // 2
    ```

25. 生成器作为默认迭代器：生成器对象实现了 Iterable 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，所以生成器格外适合作为默认迭代器。

    ```
    下面是一个简单的例子，这个类的默认迭代器可以用一行代码产出类的内容：
    class Foo { 
     constructor() { 
     this.values = [1, 2, 3]; 
     }
      * [Symbol.iterator]() { 
     yield* this.values; 
     } 
    } 
    const f = new Foo(); 
    for (const x of f) { 
     console.log(x); 
    } 
    // 1 
    // 2 
    // 3
    ```

26. 提前终止生成器：生成器也支持“可关闭”的概念，一个实现 Iterator 接口的对象一定有 next()

    方法，还有一个可选的 return()方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个方法：throw()。

    1. **return()**：强制生成器进入关闭状态，只要通过它进入关闭状态，就无法恢复了
    2. **throw()**：会在暂停的时候将一个提供的错误注入到生成器对象中，如果错误未被处理，生成器就会关闭



## 总结

1. ECMAScript 6 正式支持迭代模式并引入了两个新的语言特性：迭代器和生成器。
2. 迭代器是一个可以由任意对象实现的接口，支持连续获取对象产出的每一个值。任何实现 Iterable接口的对象都有一个 Symbol.iterator 属性，这个属性引用默认迭代器。默认迭代器就像一个迭代器工厂，也就是一个函数，调用之后会产生一个实现 Iterator 接口的对象。
3. 迭代器必须通过连续调用 next()方法才能连续取得值，这个方法返回一个 IteratorObject。这个对象包含一个 done 属性和一个 value 属性。前者是一个布尔值，表示是否还有更多值可以访问；后者包含迭代器返回的当前值。这个接口可以通过手动反复调用 next()方法来消费，也可以通过原生消费者，比如 for-of 循环来自动消费。
4. 生成器是一种特殊的函数，调用之后会返回一个生成器对象。生成器对象实现了 Iterable 接口，因此可用在任何消费可迭代对象的地方。
5. 生成器的独特之处在于支持 yield 关键字，这个关键字能够暂停执行生成器函数。
6. 使用 yield 关键字还可以通过 next()方法接收输入和产生输出。在加上星号之后，yield 关键字可以将跟在它后面的可迭代对象序列化为一连串值。
