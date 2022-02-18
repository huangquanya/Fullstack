# 第八章	对象、类与面向对象编程

## 本章内容

1. 理解对象
2. 理解对象创建过程
3. 理解继承
4. 理解类

## 可能遇到的面试题

1. 谈谈数据属性，访问器属性
2. 定义属性，读取属性用什么方法？
3. 合并属性用什么方法？
4. 编程中用ES6的语法糖可以体现出水平
5. 什么是对象解构
6. 创建对象有几种模式？各自特点？
7. 了解原型吗？
8. 了解继承吗？常见模式有哪些（这里提到了7种），它们的特点是什么？
9. 了解ES6的类吗？Super？
10. 了解抽象基类吗？如何实现？
11. 如果我们想让一个派生类有必须有某个方法，怎么实现？
12. 类混入？怎么实现？

## 知识点

### 原型

1. ECMA-262 使用一些内部特性来描述属性的特征。属性分两种：**数据属性**和**访问器属性**。

2. **数据属性**：包含一个保存数据值的位置，数据属性有 4个特性描述它们的行为。

   ```
    [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
   性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特
   性都是 true，如前面的例子所示。且指定为false后，不可再指定为true。
    [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对
   象上的属性的这个特性都是 true，如前面的例子所示。
    [[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的
   这个特性都是 true，如前面的例子所示。
    [[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性
   的默认值为 undefined。
   ```

3. 要修改属性的默认特性，就必须使用 Object.defineProperty()方法(描述符对象上的属性可以包含：configurable、enumerable、writable 和 value)。

4. **Object.defineProperty()**方法：接收 3 个参数：要给其添加属性的对象、属性的名称和一个描述符对象。

5. **访问器属性**：访问器属性不包含数据值。包含一个获取（getter）函数和一个设置（setter）函数，访问器属性有 4 个特性描述它们的行为

   ```
    [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
   性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性
   都是 true。 
    [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对
   象上的属性的这个特性都是 true。 
    [[Get]]：获取函数，在读取属性时调用。默认值为 undefined。 
    [[Set]]：设置函数，在写入属性时调用。默认值为 undefined。
   ```

6. 访问器属性是不能直接定义的，必须使用 Object.defineProperty()。

7. **Object.defineProperties()**方法。接收两个参数：要为之添加或修改属性的对象和另一个描述符对象，其属性与要添加或修改的属性一一对应。

8. **Object.getOwnPropertyDescriptor()**方法：可以取得指定属性的属性描述符。接收两个参数：属性所在的对象和要取得其描述符的属性名。

   ECMAScript 2017 新增了 **Object.getOwnPropertyDescriptors()**静态方法，会在每个自有属性上调用 Object.getOwnPropertyDescriptor()并在一个新对象中返回它们。

9. 合并(mixin)对象的方法：

   Object.assign()方法：接收一个目标对象和一个或多个源对象作为参数，然后将每个源对象中可枚举（Object.propertyIsEnumerable()返回 true）和自有（**Object.hasOwnProperty**()返回 true）属性复制到目标对象。

   - 对每个源对象执行的是**浅复制**。
   - 多个源对象都有相同的属性，则使用最后一个复制的值。
   - 不能在两个对象间转移获取函数(getter)和设置函数(setter)。
   - 赋值中间出错，出错之前的赋值仍生效

10. ECMAScript 6 规范新增了 Object.is()，与===相似，但：NaN彼此相等，+0，-0不相等

11. 可计算属性表达式：

    ```
    const nameKey = 'name'; 
    const ageKey = 'age'; 
    const jobKey = 'job'; 
    let person = { 
     [nameKey]: 'Matt', 
     [ageKey]: 27, 
     [jobKey]: 'Software engineer' 
    };
    
    let uniqueToken = 0; 
    function getUniqueKey(key) { 
     return `${key}_${uniqueToken++}`; 
    }
    
    let persons = { 
     [getUniqueKey(nameKey)]: 'Matt', 
     [getUniqueKey(ageKey)]: 27, 
     [getUniqueKey(jobKey)]: 'Software engineer' 
    };
    
    简写方法名与可计算属性键相互兼容
    const methodKey = 'sayName'; 
    let person = { 
     [methodKey](name) { 
     console.log(`My name is ${name}`); 
     } 
    }
    ```

12. **对象解构**：ECMAScript 6 新增了对象解构语法(解构在内部使用函数 ToObject()`不能在运行时环境中直接访问`把源数据结构转换为对象。)

    ```
    解构并定义赋值
    let { name: personName, age: personAge } = person;
    解构赋值并赋默认值
    let { name, job:otherName='Software engineer' } = person;
    只赋值，不定义
    ({name: personName, age: personAge} = person);
    
    let person = { 
     job: { 
     title: 'Software engineer' 
     } 
    }; 
    // 声明 title 变量并将 person.job.title 的值赋给它
    let { job: { title } } = person;
    
    函数参数解构
    function printPerson2(foo, {name: personName, age: personAge}, bar) { 
     console.log(arguments); 
     console.log(personName, personAge); 
    }
    ```

13. 创建对象：

    1. **工厂模式**：可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建的对象是什么类型）

    2. **构造函数模式**：用于创建特定类型对象的。构造函数名称的首字母都是要大写

       定义自定义构造函数可以确保实例被标识为特定类型

       ```
        没有显式地创建对象。
        属性和方法直接赋值给了 this。 
        没有 return。
       ```

       **new** 运算符的执行过程

       1. 在内存中创建一个新对象。
       2. 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性。
       3. 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
       4. 执行构造函数内部的代码（给新对象添加属性）。
       5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

       ```
       // 构造函数
       function Person(name, age, job){ 
        this.name = name; 
        this.age = age; 
        this.job = job; 
        this.sayName = function() { 
        console.log(this.name); 
        }; 
       } 
       let person1 = new Person("Nicholas", 29, "Software Engineer");
       ```

       1. **构造函数也是函数**：构造函数与普通函数唯一的区别就是调用方式不同。除此之外，构造函数也是函数。并没有把某个函数定义为构造函数的特殊语法。任何函数只要使用 new 操作符调用就是构造函数，而不使用 new 操作符调用的函数就是普通函数。
       2. **构造函数的问题**：定义的方法会在每个实例上都创建一遍。

    3. **原型模式**：每个函数都会创建一个 prototype 属性，这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法，这个对象就是通过调用构造函数创建的对象的原型。

       ```
       let Person = function() {}; 
       Person.prototype.name = "Nicholas"; 
       Person.prototype.age = 29; 
       Person.prototype.job = "Software Engineer"; 
       Person.prototype.sayName = function() { 
        console.log(this.name); 
       }; 
       let person1 = new Person(); 
       person1.sayName(); // "Nicholas" 
       let person2 = new Person(); 
       person2.sayName(); // "Nicholas" 
       console.log(person1.sayName == person2.sayName); // true
       ```

       - 所有属性和 sayName()方法都直接添加到了 Person 的 prototype 属性上，构造函数体中什么也没有。
       - 但这样定义之后，调用构造函数创建的新对象仍然拥有相应的属性和方法。
       - 与构造函数模式不同，使用这种原型模式定义的属性和方法是由所有实例共享的。

       **ECMAScript 中原型的本质**：

       1. 无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个 prototype 属性（指向原型对象）。

       2. 默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构

          造函数。

       3. 在自定义构造函数时，原型对象默认只会获得 constructor 属性，其他的所有方法都继承自Object。

       4. 每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构造函数的原型对象。

       5. **关键**：实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有。

       6. **isPrototypeOf()**方法：在传入参数的[[Prototype]]指向调用它的对象时返回 true

       7. **Object.getPrototypeOf()**：返回参数的内部特性[[Prototype]]的值。

       8. **Object.setPrototypeOf()**：可以向实例的私有特性[[Prototype]]写入一个新值。这样就可以重写一个对象的原型继承关系。(可能会严重影响代码性能。)

       9. Object.create()创建一个新对象，同时为其指定原型

          ```
   let biped = { 
           	numLegs: 2 
          };
          
          let person = Object.create(biped); 
          person.name = 'Matt'; 
          
          console.log(person.name); // Matt 
          console.log(person.numLegs); // 2 
          console.log(Object.getPrototypeOf(person) === biped); // true
          ```
       
       10. 原型层级：

           1. 在通过对象访问属性时，会按照这个属性的名称开始搜索。
    2. 搜索开始于对象实例本身。
           3. 如果在这个实例上发现了给定的名称，则返回该名称对应的值。
           4. 如果没有找到这个属性，则搜索会沿着指针进入原型对象，然后在原型对象上找到属性后，再返回对应的值。
       
       11. 原型和 **in** 操作符：单独使用和在 for-in 循环中使用。

           - 在单独使用时，in 操作符会在可以通过对象访问指定属性时返回 true；

           - 在 for-in 循环中使用 in 操作符时，可以通过对象访问且可以被枚举的属性都会返回，包括实例属性和原型属性。

       12. **Object.getOwnPropertyNames()**：列出所有实例属性，无论是否可以枚举

           兄弟方法**Object.getOwnPropertySymbols()**：针对符号

    4. 属性枚举顺序：

       - for-in 循环和 Object.keys()的枚举顺序是**不确定**的；
   - Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()和 Object.assign()的枚举顺序是确定性的：先以升序枚举数值键，然后以插入顺序枚举字符串和符号键，在对象字面量中定义的键以它们逗号分隔的顺序插入。对象迭代：ECMAScript 2017 新增了两个静态方法，用于将对象内容转换为序列化的——更重要的是可迭代的——格式。Object.values()和 Object.entries()接收一个对象，返回它们内容的数组。非字符串属性会被**转换为字符串输出**。另外，这两个方法执行对象的**浅复制**。符号属性会被**忽略**。
       - Object.values()返回对象值的数组，
       - Object.entries()返回键/值对的数组。
    
    5.  其他原型语法

       ```
   function Person() {} 
       Person.prototype = {
        name: "Nicholas", 
        age: 29, 
        job: "Software Engineer", 
        sayName() { 
        console.log(this.name); 
        } 
       };
       
       Person.prototype 被设置为等于一个通过对象字面量创建的新对象。这样重写之后，Person.prototype 的 constructor 属性就不指向 Person了。
       
       
       Person.prototype = { 
        constructor: Person, // 解决无constructor
        name: "Nicholas", 
        age: 29, 
        job: "Software Engineer", 
        sayName() { 
        console.log(this.name); 
        } 
       };
       
       // 恢复 constructor 属性
       Object.defineProperty(Person.prototype, "constructor", { 
        enumerable: false, 
        value: Person 
       });
       
       ```
    
    6. 原型的动态性：

       - 实例的[[Prototype]]指针是在调用构造函数时自动赋值的，这个指针即使把原型修改为不同的对象也不会变。
   - 重写整个原型会切断最初原型与构造函数的联系，但实例引用的仍然是最初的原型。
       - 实例只有指向原型的指针，没有指向构造函数的指针。
    
    7. 原生对象原型: 

       - 所有原生引用类型的构造函数（包括 Object、Array、String 等）都在原型上定义了实例方法。
   - 通过原生对象的原型可以取得所有默认方法的引用，也可以给原生类型的实例定义新的方法。
    
    8. 原型的问题:

       - 它弱化了向构造函数传递初始化参数的能力，会导致所有实例默认都取得相同的属性值。（修改该值相当于在实例上添加一个该值，不会修改原型对象即[[prototype]]上的该值）
   - 最主要问题源自它的共享特性。

### 继承

1. 原型链：ECMAScript 的主要继承方式。通过原型继承多个引用类型的属性和方法。

2. 构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。

3. 原型链的基本构想：原型是另一个类型的实例，这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。

4. 默认原型：任何函数的默认原型都是一个 Object 的实例，这个实例有一个内部指针指向Object.prototype。

5. 原型与实例的关系的确定：

   - instanceof 操作符：如果一个实例的原型链中出现过相应的构造函数，则 instanceof 返回 true
   - isPrototypeOf()方法：只要原型链中包含这个原型，这个方法就返回 true

6. 子类有时候需要覆盖父类的方法，或者增加父类没有的方法。这些方法必须在原型赋值之后再添加到原型上。

7. 以对象字面量方式创建原型方法会破坏之前的原型链，因为这相当于重写了原型链。

8. 原型链的问题：

   1. 在原型中包含引用值的时候，原型中包含的引用值会在所有实例间共享。
   2. 子类型在实例化时不能给父类型的构造函数传参。

9. 盗用构造函数(也称作“对象伪装”或“经典继承”)：

   基本思路很简单：在子类构造函数中调用父类构造函数。因为毕竟函数就是在特定上下文中执行代码的简单对象，所以可以使用apply()和 call()方法以新创建的对象为上下文执行构造函数。

   ```
   function SuperType() { 
    this.colors = ["red", "blue", "green"]; 
   } 
   function SubType() { 
    // 继承 SuperType 
    SuperType.call(this); 
   } 
   let instance1 = new SubType(); 
   instance1.colors.push("black"); 
   console.log(instance1.colors); // "red,blue,green,black" 
   let instance2 = new SubType(); 
   console.log(instance2.colors); // "red,blue,green"
   ```

   **优点**：可以在子类构造函数中向父类构造函数传参

   **缺点**：1. 必须在构造函数中定义方法，因此函数不能重用。2. 子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式。

10. **组合继承**（有时候也叫**伪经典继承**）：综合了原型链和盗用构造函数，将两者的优点集中了起来。

    基本的思路：使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。

    ```
    function SuperType(name){ 
     this.name = name; 
     this.colors = ["red", "blue", "green"]; 
    } 
    SuperType.prototype.sayName = function() { 
     console.log(this.name); 
    }; 
    function SubType(name, age){ 
     // 继承属性
     SuperType.call(this, name); 
     this.age = age; 
    } 
    // 继承方法
    SubType.prototype = new SuperType(); 
    SubType.prototype.sayAge = function() { 
     console.log(this.age); 
    };
    ```

    **优点**：弥补了原型链和盗用构造函数的不足，保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。

    **缺点**：父类构造函数始终会被调用两次，一次在是**创建子类原型时调用**，另一次是在**子类构造函数中调用**。

11. **原型式继承**：不自定义类型也可以通过原型实现对象之间的信息共享。

    ```
    function object(o) { 
     	function F() {} 
     	F.prototype = o; 
     return new F(); 
    }
    ```

    ECMAScript 5 通过增加 **Object.create()**方法将原型式继承的概念规范化了。

    这个方法接收两个参数：作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选）。

12. **寄生式继承**：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。

    ```
    function createAnother(original){ 
     	let clone = object(original); // 通过调用函数创建一个新对象
     	clone.sayHi = function() { // 以某种方式增强这个对象
     		console.log("hi"); 
     	}; 
     return clone; // 返回这个对象
    }
    
    object()函数不是寄生式继承所必需的，任何返回新对象的函数都可以在这里使用。
    ```

    通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。

13. 寄生式组合继承：承通过盗用构造函数继承属性，但使用混合式原型链继承方法。寄生式组合继承可以算是引用类型继承的最佳模式。

    基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。

    ```
    function inheritPrototype(subType, superType) { 
    	let prototype = object(superType.prototype); // 创建对象
     	prototype.constructor = subType; // 增强对象 
    	subType.prototype = prototype; // 赋值对象
    }
    ```

### 类：

1. class 关键字：ECMAScript 6 新引入的，具有正式定义类的能力。class 关键字加大括号

2. 类表达式在它们被求值前也不能引用，类定义**不能提升**,**受块作用域限制**。

3. 类的构成：可以包含构造函数方法、实例方法、获取函数、设置函数和静态类方法，默认情况下，类定义中的代码都在**严格模式**下执行。

4. 类表达式的名称是可选的。可以通过 name 属性取得类表达式的名称字符串，不能在类表达式作用域外部访问这个标识符。

5. 类的构造函数(constructor)：使用 new 操作符实例化 类 的操作等于使用 new 调用其构造函数。类实例化时传入的参数会用作构造函数的参数。

6. 类构造函数与构造函数的主要区别：类构造函数必须使用 new 操作符。而普通构造函数如果不使用 new 调用，那么就会以全局的 this（通常是 window）作为内部对象。

7. ECMAScript 类就是一种特殊函数，可以像其他对象或函数引用一样把类作为参数，类本身在使用 new 调用时就会被当成构造函数。重点在于，类中定义的 **constructor 方法不会被当成构造函数**。在对它使用instanceof 操作符时会返回 false。

8. 实例成员：每个实例都对应一个唯一的成员对象，在构造函数中可以为新创建的实例（this）添加“自有”属性。

9. 原型方法：在类块中定义的方法作为原型方法。但**不能在类块中给原型添加原始值或对象**作为成员数据。也支持获取**get**和设置**set**访问器。

10. **静态类成员**在类定义中使用 static 关键字作为前缀。在静态成员中，this 引用类自身。其他所

    有约定跟原型成员一样。通常用于执行**不特定于实例的操作**，也**不要求存在类**的实例。

11. 类定义并不显式支持在原型或类上添加成员数据，但在类定义外部，可以手动添加

    ```
    // 在类上定义数据成员
    Person.greeting = 'My name is';
    ```

12. 类定义语法支持在原型和类本身上定义生成器方法：

    ```
    class Person { 
     // 在原型上定义生成器方法
     *createNicknameIterator() { 
     yield 'Jack'; 
     yield 'Jake'; 
     yield 'J-Dog'; 
     } 
     // 在类上定义生成器方法
     static *createJobIterator() { 
     yield 'Butcher'; 
     yield 'Baker'; 
     yield 'Candlestick maker'; 
     } 
    } 
    let jobIter = Person.createJobIterator(); 
    console.log(jobIter.next().value); // Butcher 
    console.log(jobIter.next().value); // Baker 
    console.log(jobIter.next().value); // Candlestick maker 
    let p = new Person(); 
    let nicknameIter = p.createNicknameIterator(); 
    console.log(nicknameIter.next().value); // Jack 
    console.log(nicknameIter.next().value); // Jake 
    console.log(nicknameIter.next().value); // J-Dog 
    因为支持生成器方法，所以可以通过添加一个默认的迭代器，把类实例变成可迭代对象：
    class Person { 
     constructor() { 
     this.nicknames = ['Jack', 'Jake', 'J-Dog']; 
     } 
     *[Symbol.iterator]() { 
     yield *this.nicknames.entries(); 
     } 
    } 
    let p = new Person(); 
    for (let [idx, nickname] of p) { 
     console.log(nickname); 
    }
    // Jack 
    // Jake 
    // J-Dog 
    
    也可以只返回迭代器实例：
    class Person { 
     constructor() { 
     this.nicknames = ['Jack', 'Jake', 'J-Dog']; 
     } 
     [Symbol.iterator]() { 
     return this.nicknames.entries(); 
     } 
    } 
    let p = new Person(); 
    for (let [idx, nickname] of p) { 
     console.log(nickname); 
    } 
    // Jack 
    // Jake 
    // J-Dog
    ```

13. 类继承：ECMAScript 6 新增特性，使用 extends 关键字，就可以继承任何拥有[[Construct]]和原型的对象，也可以继承普通的构造函数（保持向后兼容）

14. 派生类都会通过原型链访问到类和原型上定义的方法。this 的值会反映调用相应方法的实例或者类

15. super：派生类的方法可以通过 super 关键字引用它们的原型。只能在派生类中使用且仅限于类构造函数、实例方法和静态方法内部。

    注意事项：

    - super 只能在派生类构造函数和静态方法中使用。
    - 不能单独引用 super 关键字，要么用它调用构造函数，要么用它引用静态方法。
    - 调用 super()会调用父类构造函数，并将返回的实例赋值给 this。
    - super()的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入。
    - 如果没有定义类构造函数，在实例化派生类时会调用 super()，而且会传入所有传给派生类的参数。
    - 在类构造函数中，不能在调用 super()之前引用 this。
    - 如果在派生类中显式定义了构造函数，则要么必须在其中调用 super()，要么必须在其中返回一个对象。
    
16. new.target 保存通过 new 关键字调用的类或函数。通过在实例化时检测 new.target 是不是抽象基类，可以阻止对抽象基类的实例化:

    ```
    // 抽象基类 
    class Vehicle { 
     constructor() { 
     console.log(new.target); 
     if (new.target === Vehicle) { 
     	throw new Error('Vehicle cannot be directly instantiated');
      } 
      // 通过在抽象基类构造函数中进行检查，可以要求派生类必须定义某个方法。因为原型方法在
    调用类构造函数之前就已经存在了，所以可以通过 this 关键字来检查相应的方法
      if (!this.foo) { 
        throw new Error('Inheriting class must define foo()'); 
      }
     } 
    }
    
    
    ```

17. 继承内置类型：ES6 类为继承内置引用类型提供了顺畅的机制：

    ```
    class SuperArray extends Array
    有些内置类型的方法会返回新实例。如果想覆盖这个默认行为，则可以覆盖 Symbol.species 访问器，这个访问器决定在创建返回的、实例时使用的类
    class SuperArray extends Array { 
     static get [Symbol.species]() { 
     return Array; 
     } 
    } 
    let a1 = new SuperArray(1, 2, 3, 4, 5); 
    let a2 = a1.filter(x => !!(x%2)) 
    console.log(a1); // [1, 2, 3, 4, 5] 
    console.log(a2); // [1, 3, 5] 
    console.log(a1 instanceof SuperArray); // true 
    console.log(a2 instanceof SuperArray); // false
    ```

18. 类混入：把不同类的行为集中到一个类是一种常见的 JavaScript 模式。混入模式可以通过在一个表达式中连缀多个混入元素来实现，这个表达式最终会解析为一个可以被继承的类。

    ```
    // 定义一组“可嵌套”的函数，每个函数分别接收一个超类作为参数，而将混入类定义为这个参数的子类，并返回这个类。
    class Vehicle {} 
    let FooMixin = (Superclass) => class extends Superclass { 
     foo() { 
     console.log('foo'); 
     } 
    }; 
    let BarMixin = (Superclass) => class extends Superclass { 
     bar() { 
     console.log('bar'); 
     } 
    }; 
    let BazMixin = (Superclass) => class extends Superclass { 
     baz() { 
     console.log('baz'); 
     } 
    }; 
    class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {} 
    let b = new Bus(); 
    b.foo(); // foo 
    b.bar(); // bar 
    b.baz(); // baz 
    通过写一个辅助函数，可以把嵌套调用展开：
    class Vehicle {} 
    let FooMixin = (Superclass) => class extends Superclass { 
     foo() { 
     console.log('foo'); 
     } 
    }; 
    let BarMixin = (Superclass) => class extends Superclass { 
     bar() { 
     console.log('bar'); 
     } 
    }; 
    let BazMixin = (Superclass) => class extends Superclass { 
     baz() { 
     console.log('baz'); 
     } 
    }; 
    function mix(BaseClass, ...Mixins) { 
     return Mixins.reduce((accumulator, current) => current(accumulator), BaseClass); 
    } 
    class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {} 
    let b = new Bus(); 
    b.foo(); // foo 
    b.bar(); // bar 
    b.baz(); // baz
    ```

19. 软件设计原则：“组合胜过继承（composition over inheritance）。

## 总结

1. 对象在代码执行过程中的任何时候都可以被创建和增强，具有极大的动态性，并不是严格定义的实体。下面的模式适用于创建对象。
   - **工厂模式**：就是一个简单的函数，这个函数可以创建对象，为它添加属性和方法，然后返回这个对象。这个模式在构造函数模式出现后就很少用了。
   - **构造函数模式**：可以自定义引用类型，可以使用 new 关键字像创建内置类型实例一样创建自定义类型的实例。**不足**：主要是其成员无法重用，包括函数。考虑到函数本身是松散的、弱类型的，没有理由让函数不能在多个对象实例间共享。
   - 原型模式：解决了成员共享的问题，只要是添加到构造函数 prototype 上的属性和方法就可以共享。而组合构造函数和原型模式通过构造函数定义实例属性，通过原型定义共享的属性和方法。
2. JavaScript 的继承：
   1. 通过原型链来实现。原型链涉及把构造函数的原型赋值为另一个类型的实例。子类就可以访问父类的所有属性和方法，就像基于类的继承那样。**问题**是所有继承的属性和方法都会在对象实例间共享，无法做到实例私有。
   2. 盗用构造函数模式：通过在子类构造函数中调用父类构造函数，可以让每个实例继承的属性都是私有的，但要求类型只能通过构造函数模式来定义（因为子类不能访问父类原型上的方法）。
   3. 组合继承：通过原型链继承共享的属性和方法，通过盗用构造函数继承实例属性。
   4. 原型式继承：无须明确定义构造函数而实现继承，本质上是对给定对象执行浅复制。
   5. 寄生式继承：先基于一个对象创建一个新对象，然后再增强这个新对象，最后返回新对象。
   6. 寄生组合继承：基于类型继承的最有效方式。
   7. ECMAScript 6 新增的类很大程度上是基于既有原型机制的语法糖。
