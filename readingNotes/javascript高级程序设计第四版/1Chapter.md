#  1第一章

## 本章内容

JavaScript历史回顾
JavaScript是什么
JavaScript与ECMAScript的关系
JavaScript的不同版本

## 可能出现的面试题:

1.JavaScript是什么?
2.ECMAscript,DOM,BOM是什么?

## 历史回顾

**了解**：

1995年，JavaScript问世。当时，它的主要用途是代替Perl等服务器端语
言处理输入验证。

要真正学好用好JavaScript，理解其本质、历史及局限性是非常重要的。

1995年，网景公司一位名叫Brendan Eich的工程师，开始为即将发布的
Netscape Navigator 2开发一个叫Mocha（后来改名为LiveScript）的脚本
语言。当时的计划是在客户端和服务器端都使用它，它在服务器端叫
LiveWire。

网景与Sun公司结为开发联盟，共同完成LiveScript
的开发。就在Netscape Navigator 2正式发布前，网景把LiveScript改名为
JavaScript，以便搭上媒体当时热烈炒作Java的顺风车。

由于JavaScript 1.0很成功，网景又在Netscape Navigator 3中发布了1.1版
本。尚未成熟的Web的受欢迎程度创造了历史新高，而网景则稳居市场
领导者的位置。这时候，微软决定向IE投入更多资源。就在Netscape
Navigator 3发布后不久，微软发布了IE3，其中包含自己名为JScript（叫
这个名字是为了避免与网景发生许可纠纷）的JavaScript实现。1996年8
月，微软重磅进入Web浏览器领域，这是网景永远的痛，但它代表
JavaScript作为一门语言向前迈进了一大步。

微软的JavaScript实现意味着出现了两个版本的JavaScript：Netscape
Navigator中的JavaScript，以及IE中的JScript。与C语言以及很多其他编
程语言不同，JavaScript还没有规范其语法或特性的标准，两个版本并存
让这个问题更加突出了。随着业界担忧日甚，JavaScript终于踏上了标准
化的征程。

1997年，JavaScript 1.1作为提案被提交给欧洲计算机制造商协会
（Ecma）。第39技术委员会（TC39）承担了“标准化一门通用、跨平
台、厂商中立的脚本语言的语法和语义”的任务（参见TC39-
ECMAScript）。TC39委员会由来自网景、Sun、微软、Borland、
Nombas和其他对这门脚本语言有兴趣的公司的工程师组成。他们花了
数月时间打造出ECMA-262，也就是ECMAScript（发音为“ek-ma-
script”）这个新的脚本语言标准。

1998年，国际标准化组织（ISO）和国际电工委员会（IEC）也将
ECMAScript采纳为标准（ISO/IEC-16262）。自此以后，各家浏览器均
以ECMAScript作为自己JavaScript实现的依据，虽然具体实现各有不
同。

## 知识点

1. JavaScript分为三部分:

   1. 核心(ECMAscript);
   2. 文档对象模型(DOM);
   3. 浏览器对象模型(BOM)

2. ECMAscript是一种规范,符合这种规范的语言就可以用ECMAscript来称呼,如JavaScript和Adobe ActionScript

3. ECMAscript定义了 语法;类型;语句;关键字;保留字;操作符;全局对象

4. 关于一些ECMAscript版本的特性的了解
   - 第5版致力于厘清第3版存在的歧义，也增加了新功能。新功
     能包括原生的解析和序列化JSON数据的JSON 对象、方便继承和高
     级属性定义的方法，以及新的增强ECMAScript引擎解释和执行代
     码能力的严格模式。第5版在2011年6月发布了一个维护性修订版，
     这个修订版只更正了规范中的错误，并未增加任何新的语言或库特
     性。
   - ECMA-262第6版，俗称ES6、ES2015或ES Harmony（和谐版），
     于2015年6月发布。这一版包含了大概这个规范有史以来最重要的
     一批增强特性。ES6正式支持了类、模块、迭代器、生成器、箭头
     函数、期约、反射、代理和众多新的数据类型。

5. ECMAscript符合性是什么?
   **满足4个条件(前两个是必须的)**:

   - 支持ECMA-262中描述的所有“类型、值、对象、属性、函数，
     以及程序语法与语义”；

   - 支持Unicode字符标准。
     此外，符合性实现还可以满足下列要求。

   - 增加ECMA-262中未提及的“额外的类型、值、对象、属性和函
     数”。ECMA-262所说的这些额外内容主要指规范中未给出的新
     对象或对象的新属性。

   - 支持ECMA-262中没有定义的“程序和正则表达式语法”（意思
     是允许修改和扩展内置的正则表达式特性）

6. DOM,文档对象模型,是一个应用编程接口,用于在HTML中使用扩展的XML.

   我的理解是,HTML是与XML类似语法的,去记录网页节点的一种语言.

   然后DOM就是对这个"记录"进行了扩展,多了很多的接口,可以去操作这些节点.
   DOM把HTML看成一层一层的分层节点集合,然后就可以去增删改查

7. 欧洲计算机制造商协会（Ecma）统一ECMAscript
   万维网联盟（W3C，World Wide
   Web Consortium）统一DOM
   都是为了避免浏览器厂商的恶性竞争,还有各自发展方向不同,导致浏览器的脚本语言不能统一

8. DOM Level 0 是一个虚拟的时间节点,指的是IE4和Navigator4中最初支持的DHTML这个节点

9. 除了DOM Core 和 DOM HTML,还有其他类似的语言,每种都有独立的DOM方法和接口如:SVG(可缩放矢量图),MathML(数学标记语言),SMIL(同步多媒体集成语言),这三个是W3C推荐的标准,还有其他标准.

10. DOM Core和DOM HTML。前者提供了一种映射XML文
    档，从而方便访问和操作文档任意部分的方式；后者扩展了前者，
    并增加了特定于HTML的对象和方法。

11. BOM就是浏览器窗口对象API,针对浏览器窗口和子窗口.随着H5的发展,渐渐统一BOM(12章会解释为什么).

12. BOM是唯一没有被统一的,每个浏览器有自己的BOM接口,提供的功能也不完全相同.常见如下:

    - 弹出新浏览器窗口的能力；
    - 移动、缩放和关闭浏览器窗口的能力；
    - navigator 对象，提供关于浏览器的详尽信息；
    - location 对象，提供浏览器加载页面的详尽信息；
    - screen 对象，提供关于用户屏幕分辨率的详尽信息；
    - performance 对象，提供浏览器内存占用、导航行为和时间统计
      的详尽信息；
    - 对cookie的支持；
    - 其他自定义对象，如XMLHttpRequest 和IE的ActiveXObject

## 总结:

这章主要介绍了JavaScript的历史,包括其中组成三大部分:ECMAscript,DOM,BOM的概念和历史,主要是增加对JavaScript的了解,涉及的技术点甚少