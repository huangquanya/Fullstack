/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 第一版
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.').map(_=>+_)
    let v2 = version2.split('.').map(_=>+_)
    let len1 = v1.length,len2 = v2.length;
    if(len1 > len2){
        while(v2.length!==len1){v2.push(0)}
    }
    if(len2 > len1){
        while(v1.length!==len2){v1.push(0)}
    }
    for(let i = 0;i<v1.length; i++){
        if(v1[i]>v2[i]){return 1}
        if(v1[i]<v2[i]){return -1}
    }
    return 0
};

var compareVersion = function(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let len = Math.max(v1.length,v2.length)
    for(let i = 0;i<len; i++){
        let a = v1[i]||0;
        let b = v2[i]||0;
        a=+a;b=+b;
        if(a>b){return 1}
        if(a<b){return -1}
    }
    return 0
};


