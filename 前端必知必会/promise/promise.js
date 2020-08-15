let fs = require('fs')

fs.readFile('./name.txt','utf-8',(err,data)=>{
    console.log(err,data)
    fs.readFile(data,'utf-8',(err,data)=>{
        console.log(err,data)
        fs.readFile(data,'utf-8',(err,data)=>{
            console.log(err,data)
        })
    })
})

const p1 = new Promise((resolve,reject)=>{
    console.log('新建一个promise')
    resolve('成功了')
})

console.log("在new promsie之后")

const p2 = p1.then(data=>{
    console.log(data)
    return '成功了'
},err=>{
    console.log(err);
    throw new Error('失败了')
})

const p3 = p2.then(data=>{
    console.log('成',data)
},err => {
    console.log('败',err)
})

