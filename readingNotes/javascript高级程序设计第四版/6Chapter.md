

# 第六章

## 本章内容

1. 对象
2. 数组与定型数组
3. Map、WeakMap、Set 以及 WeakSet 类型

## 可能遇到的面试题

1. 数组的操作的程序题
2. 了解过定型数组吗？
3. 了解过映射吗？了解过弱映射吗？两者差别
4. 了解过集合吗？了解过弱集合吗？两者差别
5. 集合和映射的差别？
6. 集合映射的程序题
7. 对象和映射的内存，性能问题

## 知识点

1. 对象字面量（object literal）表示法： `let a = { name: '111' }`。
2. 存取可使用点或中括号

**数组Array**：

1. new Array()可传参，数值则是指定数组长度，传其他则是创建一个只包含该值的数组

2. Array.from()可以将类数组转为数组，of()可以将一组参数转为数组

3. ES6以前的方法忽视数组中的空位，ES6以后的方法会当作其中有存在的元素

4. 通过修改length长度，可以从数组末尾删除或添加元素

5. 检测数组，使用instanceof, 最好是Array.isArray()

6. 迭代器方法：keys返回数组索引，values返回数组元素，entries返回索引/值对

7. ES6新增fill(),三个参数，第一个，要填充的值，第二填充开始索引，第三，填充结束索引；copyWithin(),第一个，复制后插入到的索引值，第二个，复制开始的索引，第三个，复制结束的索引

8. 栈方法：push(),pop(); 队列方法：shift(), push(),unshift()

9. 排序方法：reverse(),将数组反向排列；sort(),默认升序，也可接受一个比较函数，函数返回值为正值则交换位置

10. concat()拼接，slice()复制；splice()影响原数组,第一个参，要删除的第一个元素的位置，第二个参数，要删除的元素数量，第三个要插入的任意多个元素

11. 严格相等的搜索方法：indexOf()、lastIndexOf()和 includes()。

12. find()和 findIndex()方法使用了断言函数：每个索引都会调用这个函数。断言函数的返回值决定了相应索引的元素是否被认为匹配。接收第二个可选的参数，用于指定断言函数内部 this 的值。

13. 迭代方法：每个方法接收两个参数：以每一项为参数运行的函数，以及可选的作为函数运行上下文的作用域对象（影响函数中 this 的值）。

    ```
     every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。  filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
     forEach()：对数组每一项都运行传入的函数，没有返回值。
     map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
     some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。
    ```

14. 归并方法：reduce()和 reduceRight()。

**定型数组**：

1. 定型数组（typed array）是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。

2. ArrayBuffer 是所有定型数组及视图引用的基本单位。

3. ArrayBuffer()是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。

4. ArrayBuffer 一经创建就不能再调整大小。不过，可以使用 slice()复制其全部或部分到一个新

   实例中

   ```
   const buf1 = new ArrayBuffer(16); 
   const buf2 = buf1.slice(4, 12); 
   alert(buf2.byteLength); // 8
   ```

5. ArrayBuffer的特点

   ```
    ArrayBuffer 在分配失败时会抛出错误。
    ArrayBuffer分配的内存不能超过 Number.MAX_SAFE_INTEGER（253  1）字节。
    声明 ArrayBuffer 会将所有二进制位初始化为 0。 
    通过声明ArrayBuffer 分配的堆内存可以被当成垃圾回收，不用手动释放。
   ```

6. 要读取或写入 ArrayBuffer，就必须通过视图。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。

7. **视图**：

   1. **DataView**:

      1. 这个视图专为文件 I/O 和网络 I/O 设计，其API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView 对缓冲内容没有任何预设，也不能迭代。

      2. 必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。这个实例可以使用全部或部分 ArrayBuffer，且维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置。

      3. 要通过 DataView 读取缓冲，还需要几个组件。

         ```
          首先是要读或写的字节偏移量。可以看成 DataView 中的某种“地址”。
          DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换。
          最后是内存中值的字节序。默认为大端字节序。
         ```

      4. DataView 对存储在缓冲内的数据类型没有预设。它暴露的 API 强制开发者在读、写时指定一个**ElementType**，然后 DataView 就会忠实地为读、写而完成相应的转换。

         ![image-20220117100714144](F:\Fullstack\readingNotes\javascript高级程序设计第四版\7Chapter.assets\image-20220117100714144.png)

      5. “**字节序**”指的是计算系统维护的一种字节顺序的约定。

      6. DataView 只支持两种约定：大端字节序和小端字节序。**大端字节序**也称为“网络字节序”，意思是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节。**小端字节序**正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节。

      7. DataView 是一个**中立接口**，它会遵循你指定的字节序。DataView 的所有 API 方法都以大端字节序作为默认值，但接收一个可选的布尔值参数，设置为 true 即可启用小端字节序。

      8. DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError

      9. DataView 在写入缓冲里会尽最大努力把一个值转换为适当的类型，后备为 0。如果无法转换，则抛出错误

   2. **定型数组**:

      1. 定型数组是另一种形式的 ArrayBuffer 视图

      2. 它特定于一种 ElementType 且遵循系统原生的字节序,定型数组提供了适用面更广的API 和更高的性能

      3. 创建定型数组的方式包括读取已有的缓冲、使用自有缓冲、填充可迭代结构，以及填充基于任意类型的定型数组。

      4. 通过<ElementType>.from()和<ElementType>.of()也可以创建定型数组

         ```
         // 创建一个 12 字节的缓冲
         const buf = new ArrayBuffer(12); 
         // 创建一个引用该缓冲的 Int32Array 
         const ints = new Int32Array(buf); 
         // 这个定型数组知道自己的每个元素需要 4 字节
         // 因此长度为 3 
         alert(ints.length); // 3
         // 创建一个长度为 6 的 Int32Array 
         const ints2 = new Int32Array(6); 
         // 每个数值使用 4 字节，因此 ArrayBuffer 是 24 字节
         alert(ints2.length); // 6 
         // 类似 DataView，定型数组也有一个指向关联缓冲的引用
         alert(ints2.buffer.byteLength); // 24 
         // 创建一个包含[2, 4, 6, 8]的 Int32Array 
         const ints3 = new Int32Array([2, 4, 6, 8]); 
         alert(ints3.length); // 4 
         alert(ints3.buffer.byteLength); // 16 
         alert(ints3[2]); // 6 
         // 通过复制 ints3 的值创建一个 Int16Array 
         const ints4 = new Int16Array(ints3); 
         // 这个新类型数组会分配自己的缓冲
         // 对应索引的每个值会相应地转换为新格式
         alert(ints4.length); // 4 
         alert(ints4.buffer.byteLength); // 8 
         alert(ints4[2]); // 6 
         // 基于普通数组来创建一个 Int16Array 
         const ints5 = Int16Array.from([3, 5, 7, 9]); 
         alert(ints5.length); // 4 
         alert(ints5.buffer.byteLength); // 8 
         alert(ints5[2]); // 7 
         // 基于传入的参数创建一个 Float32Array 
         const floats = Float32Array.of(3.14, 2.718, 1.618); 
         alert(floats.length); // 3 
         alert(floats.buffer.byteLength); // 12 
         alert(floats[2]); // 1.6180000305175781
         ```

      5. 定型数组的构造函数和实例都有一个 BYTES_PER_ELEMENT 属性，返回该类型数组中每个元素的大小

         ```
         alert(Int16Array.BYTES_PER_ELEMENT); // 2 
         alert(Int32Array.BYTES_PER_ELEMENT); // 4
         ```

      6. 定型数组行为:

         1. 定型数组支持如下操作符、方法和属性：

         ```
          []
          copyWithin()
          entries()
          every()
          fill()
          filter()
          find()
          findIndex()
          forEach()
          indexOf()
          join()
          keys()
          lastIndexOf()
          length
          map()
          reduce()
          reduceRight()
          reverse()
          slice()
          some()
          sort()
          toLocaleString()
          toString()
          values()
         其中，返回新数组的方法也会返回包含同样元素类型（element type）的新定型数组
         const ints = new Int16Array([1, 2, 3]); 
         const doubleints = ints.map(x => 2*x); 
         alert(doubleints instanceof Int16Array); // true
         定型数组有一个 Symbol.iterator 符号属性，因此可以通过 for..of 循环和扩展操作符来操作：
         const ints = new Int16Array([1, 2, 3]); 
         for (const int of ints) { 
          alert(int); 
         } 
         // 1 
         // 2 
         // 3 
         alert(Math.max(...ints)); // 3
         ```

      7. 合并、复制和修改定型数组

         定型数组同样使用数组缓冲来存储数据，而数组缓冲无法调整大小。下列方法不适用于定型数组：

         ```
          concat()
          pop()
          push()
          shift()
          splice()
          unshift()
         ```

         定型数组也提供了两个新方法，可以快速向外或向内复制数据：set()和 subarray()。

         ```
         set()从提供的数组或定型数组中把值复制到当前定型数组中指定的索引位置：
         // 创建长度为 8 的 int16 数组
         const container = new Int16Array(8); 
         // 把定型数组复制为前 4 个值
         // 偏移量默认为索引 0 
         container.set(Int8Array.of(1, 2, 3, 4)); 
         console.log(container); // [1,2,3,4,0,0,0,0] 
         // 把普通数组复制为后 4 个值
         // 偏移量 4 表示从索引 4 开始插入
         container.set([5,6,7,8], 4); 
         console.log(container); // [1,2,3,4,5,6,7,8] 
         // 溢出会抛出错误
         container.set([5,6,7,8], 7); 
         // RangeError
         
         
         subarray()执行与 set()相反的操作，它会基于从原始定型数组中复制的值返回一个新定型数组。
         复制值时的开始索引和结束索引是可选的：
         
         const source = Int16Array.of(2, 4, 6, 8); 
         // 把整个数组复制为一个同类型的新数组
         const fullCopy = source.subarray(); 
         console.log(fullCopy); // [2, 4, 6, 8] 
         // 从索引 2 开始复制数组
         const halfCopy = source.subarray(2); 
         console.log(halfCopy); // [6, 8] 
         // 从索引 1 开始复制到索引 3 
         const partialCopy = source.subarray(1, 3); 
         console.log(partialCopy); // [4, 6] 
         定型数组没有原生的拼接能力，但使用定型数组 API 提供的很多工具可以手动构建：
         // 第一个参数是应该返回的数组类型 
         // 其余参数是应该拼接在一起的定型数组
         function typedArrayConcat(typedArrayConstructor, ...typedArrays) { 
          // 计算所有数组中包含的元素总数
          const numElements = typedArrays.reduce((x,y) => (x.length || x) + y.length); 
          // 按照提供的类型创建一个数组，为所有元素留出空间
          const resultArray = new typedArrayConstructor(numElements); 
          // 依次转移数组
          let currentOffset = 0; 
          typedArrays.map(x => { 
          resultArray.set(x, currentOffset); 
          currentOffset += x.length; 
          }); 
          return resultArray; 
         } 
         const concatArray = typedArrayConcat(Int32Array, 
          Int8Array.of(1, 2, 3), 
          Int16Array.of(4, 5, 6), 
          Float32Array.of(7, 8, 9)); 
         console.log(concatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 
         console.log(concatArray instanceof Int32Array); // true
         ```

      8. 下溢和上溢

         定型数组中值的下溢和上溢不会影响到其他索引，但仍然需要考虑数组的元素应该是什么类型。

         ```
         // 长度为 2 的有符号整数数组
         // 每个索引保存一个二补数形式的有符号整数
         // 范围是-128（-1 * 2^7）~127（2^7 - 1）
         const ints = new Int8Array(2); 
         // 长度为 2 的无符号整数数组
         // 每个索引保存一个无符号整数
         // 范围是 0~255（2^7 - 1）
         const unsignedInts = new Uint8Array(2); 
         // 上溢的位不会影响相邻索引
         // 索引只取最低有效位上的 8 位
         unsignedInts[1] = 256; // 0x100 
         console.log(unsignedInts); // [0, 0] 
         unsignedInts[1] = 511; // 0x1FF 
         console.log(unsignedInts); // [0, 255] 
         // 下溢的位会被转换为其无符号的等价值
         // 0xFF 是以二补数形式表示的-1（截取到 8 位）, 
         // 但 255 是一个无符号整数
         unsignedInts[1] = -1 // 0xFF (truncated to 8 bits) 
         console.log(unsignedInts); // [0, 255] 
         // 上溢自动变成二补数形式
         // 0x80 是无符号整数的 128，是二补数形式的-128 
         ints[1] = 128; // 0x80 
         console.log(ints); // [0, -128] 
         // 下溢自动变成二补数形式
         // 0xFF 是无符号整数的 255，是二补数形式的-1 
         ints[1] = 255; // 0xFF 
         console.log(ints); // [0, -1] 
         除了 8 种元素类型，还有一种“夹板”数组类型：Uint8ClampedArray，不允许任何方向溢出。
         超出最大值 255 的值会被向下舍入为 255，而小于最小值 0 的值会被向上舍入为 0。
         const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]); 
         console.log(clampedInts); // [0, 0, 255, 255]
         
         “Uint8ClampedArray 完全是 HTML5canvas 元素的
         历史留存。除非真的做跟 canvas 相关的开发，否则不要使用它。”
         ```

Map

1. ECMAScript 6 的新增特性,真正的键/值存储机制。

2. 基本api：

   1. 初始化

   ```
   使用 new 关键字和 Map 构造函数可以创建一个空映射：
   const m = new Map(); 
   如果想在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数
   组。可迭代对象中的每个键/值对都会按照迭代顺序插入到新映射实例中：
   // 使用嵌套数组初始化映射
   const m1 = new Map([ 
    ["key1", "val1"], 
    ["key2", "val2"], 
    ["key3", "val3"] 
   ]); 
   alert(m1.size); // 3 
   // 使用自定义迭代器初始化映射
   const m2 = new Map({ 
    [Symbol.iterator]: function*() { 
    yield ["key1", "val1"]; 
    yield ["key2", "val2"]; 
    yield ["key3", "val3"]; 
    } 
   }); 
   alert(m2.size); // 3 
   // 映射期待的键/值对，无论是否提供
   const m3 = new Map([[]]); 
   alert(m3.has(undefined)); // true 
   alert(m3.get(undefined)); // undefined
   ```

   2. 使用 get()和 has()进行查询，通过 size 属性获取映射中的键/值对的数量，使用 delete()和 clear()删除值

   3. set()方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明

      ```
      const m = new Map().set("key1", "val1"); 
      m.set("key2", "val2") 
       .set("key3", "val3"); 
      alert(m.size); // 3
      ```

   4. 可以使用任何 JavaScript 数据类型作为键，基本上相当于使用严格对象相等的标准来检查键的匹配性。

3. 顺序与迭代

   ```
   Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。
   
   entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器
   
   forEach(callback, opt_thisArg)方法，依次迭代每个键/值对。
   ```

4. Object与Map的使用场景

   -  内存占用：给定固定大小的内存，Map 大约可以比 Object 多存储 50%的键/值对。
   - 插入性能：代码涉及大量插入操作，那么显然 Map 的性能更佳。
   - 查找速度：代码涉及大量查找操作，那么某些情况下可能选择 Object 更好一些。
   - 删除性能：Map 的 delete()操作都比插入和查找更快。如果代码涉及大量删除操作，那么毫无疑问应该选择 Map。

**WeakMap**：

1. ECMAScript 6 新增的“弱映射”，WeakMap 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式。
2. 其 API 也是 Map 的子集。
3. 弱映射中的键只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会抛出TypeError。值的类型没有限制。
4. 弱键：这些键不属于正式的引用，不会阻止垃圾回收。
5. 没有提供迭代其键/值对的能力，
6. 限制只能用对象作为键，是为了保证只有通过键对象的引用才能取得值。如果允许原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了。
7. 使用弱映射：
   - 私有变量
   - DOM 节点元数据

**Set**：

1. ECMAScript 6 新增的 Set 是一种新集合类型

2. 初始化：

   ```
   // 使用数组初始化集合 
   const s1 = new Set(["val1", "val2", "val3"]); 
   alert(s1.size); // 3 
   // 使用自定义迭代器初始化集合
   const s2 = new Set({ 
    [Symbol.iterator]: function*() { 
    yield "val1"; 
    yield "val2"; 
    yield "val3"; 
    } 
   }); 
   alert(s2.size); // 3
   ```

3. 使用 add()增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete()和 clear()删除元素

4. Set集合也使用 SameValueZero 操作（ECMAScript 内部定义，无法在语言中使用），基本上相当于使用严格对象相等的标准来检查值的匹配性。

5. Set 会维护值插入时的顺序,可以通过 values()方法及其别名方法 keys()（或者 Symbol.iterator 属性，它引用 values()）取得这个迭代器

6. entries()方法返回一个迭代器，可以按照插入顺序产生包含两个元素的数组，这两个元素是集合中每个值的重复出现,。forEach()方法并传入回调，依次迭代每个键/值对。

7. 定义正式集合操作：

   使用 Set 操作，手动实现：或者是子类化 Set，或者是定义一个实用函数库。要把两种方式合二为一，可以在子类上实现静态方法，然后在实例方法中使用这些静态方法。在实现这些操作时，需要考虑几个地方。

   ```
    某些 Set 操作是有关联性的，因此最好让实现的方法能支持处理任意多个集合实例。
    Set 保留插入顺序，所有方法返回的集合必须保证顺序。
    尽可能高效地使用内存。扩展操作符的语法很简洁，但尽可能避免集合和数组间的相互转换能
   够节省对象初始化成本。
    不要修改已有的集合实例。union(a, b)或 a.union(b)应该返回包含结果的新集合实例。
   ```

**WeakSet**：

1. ECMAScript 6 新增的“弱集合”（WeakSet）
2. WeakSet 是 Set 的“兄弟”类型，其 API 也是 Set 的子集。WeakSet 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱集合”中值的方式。
3. 使用 add()再添加新值，可以使用 has()查询，还可以使用 delete()删除
4. 不可迭代

**迭代(@@iterator)与扩展操作(...)**:

4 种原生集合类型定义了默认迭代器：

```
 Array
 所有定型数组
 Map
 Set
```

1. 支持for-of循环
2. 兼容扩展操作符(...)
3. 支持Array.of(),Array.from()









## 总结

JavaScript 中的对象是引用值，可以通过几种内置引用类型创建特定类型的对象。

- 引用类型与传统面向对象编程语言中的类相似，但实现不同。

- Object 类型是一个基础类型，所有引用类型都从它继承了基本的行为。

- Array 类型表示一组有序的值，并提供了操作和转换值的能力。

- 定型数组包含一套不同的引用类型，用于管理数值在内存中的类型。

- Date 类型提供了关于日期和时间的信息，包括当前日期和时间以及计算。

- RegExp 类型是 ECMAScript 支持的正则表达式的接口，提供了大多数基本正则表达式以及一些高级正则表达式的能力。

JavaScript 比较独特的一点是，函数其实是 Function 类型的实例，这意味着函数也是对象。由于函数是对象，因此也就具有能够增强自身行为的方法。

因为原始值包装类型的存在，所以 JavaScript 中的原始值可以拥有类似对象的行为。有 3 种原始值包装类型：Boolean、Number 和 String。它们都具有如下特点。

- 每种包装类型都映射到同名的原始类型。

- 在以读模式访问原始值时，后台会实例化一个原始值包装对象，通过这个对象可以操作数据。

- 涉及原始值的语句只要一执行完毕，包装对象就会立即销毁。

JavaScript 还有两个在一开始执行代码时就存在的内置对象：Global 和 Math。其中，Global 对象在大多数 ECMAScript 实现中无法直接访问。不过浏览器将 Global 实现为 window 对象。所有全局变量和函数都是 Global 对象的属性。Math 对象包含辅助完成复杂数学计算的属性和方法。

ECMAScript 6 新增了一批引用类型：Map、WeakMap、Set 和 WeakSet。这些类型为组织应用程序

数据和简化内存管理提供了新能力。
