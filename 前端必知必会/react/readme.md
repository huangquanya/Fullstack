# react 


- 打包完代码的体积
- loader
- plugin
- 体积的优化
    - externals:把XX排除在外，把react reactDOM这些放在CDN上（script标签引进来）
    - splitChunk: 将import的nodemodule都打包到一个单独的js中
    - Dll：既可以分离第三方库，又可以提升打包速度
    - 懒加载(import).then(XXX) webpack 默认单独打包到一个文件