

const PENDING = 'PENDING';
const FUFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(excutor) {//构造函数中excutor到底是个什么？
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (value) => { //构造函数中使用let定义方法？
            if (this.status === PENDING) {
                this.status = FUFILLED
                this.value = value;

                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason

                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }

        try {  //构造函数中使用try catch??
            excutor(resolve, reject)
        } catch (err) {
            reject(error)
        }
    }
    then(onFullfilled, onRejected) {
        if (this.status === FUFILLED) {
            onFullfilled(this.value)


        }

        if (this.status === REJECTED) {
            onRejected(this.reason)
        }

        if (this.status === PENDING) {
            // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onResolvedCallbacks.push(() => {
                onFullfilled(this.value)
            });

            // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })

        }
    }
}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功');
    }, 2000);
    
})
    .then((data) => {

        console.log('成功', data)

    }, err => {
        console.log('失败', err)
    })