/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let arr = path.split('/')
    while(arr.length>0){
        if(arr[0]===''||arr[0]==='.'){
            arr.shift();
        }else if(arr[0]==='..'&&stack.length<1){
            arr.shift();
        }else if(arr[0]==='..'&&stack.length>=1){
            stack.pop()
            arr.shift()
        }else {
            stack.push(arr.shift())
        }
    }
    return '/'+stack.join('/')
};