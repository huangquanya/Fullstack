## jspang redux教程学习
- redux入门
- 掌握 页面 -》 action -》 store -》 reducer -》 store -》 页面  的渲染流程

thunk 中间件可以 dispatch传递一个函数 由在store中的thunk中间件协助store接收
例如此例子中 将使用axios请求数据的步骤写在getTodoList的返回值里，返回了请求函数和调用getListAction 的方法， 使代码的在todoList中的业务逻辑更为简单