# 第二章

## **本章内容**

使用<script> 元素
行内脚本与外部脚本的比较
文档模式对JavaScript有什么影响
确保JavaScript不可用时的用户体验

## **可能出现的面试题:**

谈谈js标签的属性?
谈谈js脚本几种加载模式?
谈谈html的文档模式?
js脚本会不会阻塞页面渲染?
前端性能优化,关于脚本大小和SPDY/HTTP2的关系
浏览器不支持js怎么处理?

## 知识点

1. “<script>”元素是网景公司创造的,最早在Navigator2中实现的,后来被加入到HTML规范中ECMAscript是一种规范,符合这种规范的语言就可以用ECMAscript来称呼,如JavaScript

2. script标签上的属性：

   1. **async** ：可选。表示应该立即开始下载脚本，但不能阻止其他页面
      动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有
      效。**不保证按出现次序执行**。
   2. **charset** ：可选。使用src 属性指定的代码字符集。这个属性很少
      使用，因为大多数浏览器不在乎它的值。
   3. **crossorigin** ：可选。配置相关请求的CORS（跨源资源共享）设
      置。默认不使用CORS。crossorigin=“anonymous” 配置文件请
      求不必设置凭据标志。crossorigin=“use-credentials” 设置凭
      据标志，意味着出站请求会包含凭据。
   4. **defer** ：可选。表示脚本可以延迟到文档完全被解析和显示之后再
      执行， **可保证按出现次序执行**。只对外部脚本文件有效。在IE7及更早的版本中，对行内脚
      本也可以指定这个属性。
   5. **integrity** ：可选。允许比对接收到的资源和指定的加密签名以验
      证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源
      的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执
      行。这个属性可以用于确保内容分发网络（CDN，Content Delivery
      Network）不会提供恶意内容。
   6. **language** ：废弃。最初用于表示代码块中的脚本语言
      （如"JavaScript" 、“JavaScript 1.2” 或"VBScript" ）。大
      多数浏览器都会忽略这个属性，不应该再使用它。
   7. **src** ：可选。表示包含要执行的代码的外部文件。
   8. **type** ：可选。代替language ，表示代码块中脚本语言的内容类型
      （也称MIME类型）。按照惯例，这个值始终都
      是"text/javascript" ，尽管"text/javascript"
      和"text/ecmascript" 都已经废弃了。JavaScript文件的MIME类
      型通常是"application/x-javascript" ，不过给type属性这个
      值有可能导致脚本被忽略。在非IE的浏览器中有效的其他值还
      有"application/javascript" 和"application/ecmascript"
      。如果这个值是module ，则代码会被当成ES6模块，而且只有这
      时候代码中才能出现import 和export 关键字。

3. 在`<script>` 元素中的代码被计算完成之前，页面的其余内容不会被加
   载，也不会被显示

4. 代码中不能出现字符串`</script>`

   用"\“来转义”/"让浏览器不当成标签解析.

   ```html
   <script>
   	function sayScript() {
           console.log("<\/script>")
       }
   </script>
   ```

   

5. 用src属性引入外部文件: `<script src="examole.js"></script>`

   与行内JavaScript一样，在解释外部JavaScript文件时，页面也会阻塞。

6. 在XHTML文档中，可以忽略结束标签：`<script src="examole.js"/>`

   以上语法不能在HTML文件中使用，因为它是无效的HTML，有些浏览
   器不能正常处理，比如IE

7. 使用了src 属性的 标签中再包含其他JavaScript代码。如果两者都提供的话，
   则浏览器只会下载并执行脚本文件，从而忽略行内代码。

8. 按照惯例，外部JavaScript文件的扩展名是.js。这不是必需的，因为浏览器不会检查所包含JavaScript文件的扩展名。这就为使用服务器端脚本语言动态生成JavaScript代码，或者在浏览器中将JavaScript扩展语言（如TypeScript，或React的JSX）转译为JavaScript提供了可能性。不过要注意，服务器经常会根据文件扩展来确定响应的正确MIME类型。如果不打算使用.js扩展名，一定要确保服务器能返回正确的MIME类型。

   ```
   MIME(Multipurpose Internet Mail Extensions)多用途互联网邮件扩展类型。是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。
   ```

9. 浏览器在解析js资源时，会向src 属性指定的路径发送一个GET 请
   求，以取得相应资源。这个初始的请求不受浏览器同源策略限制，但返回并被执行的JavaScript则受限制。当然，这个请求仍然受父页面HTTP/HTTPS协议的限制。来自外部域的代码会被当成加载它的页面的一部分来加载和解释。这个能力可以让我们通过不同的域分发JavaScript。

10. 可以使用 defer 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出

    的次序执行。

11. 对不推迟执行的脚本，浏览器必须解释完位于<script>元素中的代码，然后才能继续渲染页面

    的剩余部分。为此，通常应该把<script>元素放到页面末尾，介于主内容之后及</body>标签

    之前。

12. 通过使用<noscript>元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启

    用脚本，则<noscript>元素中的任何内容都不会被渲染。

## 总结:

这章主要介绍了HTML中的<script>标签，以及其内部属性的介绍，并给出使用标签的最佳实践，使用defer 让其资源先加载，而不阻塞文档渲染