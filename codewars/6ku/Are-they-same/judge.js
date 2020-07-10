// high clever solution
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

// my solution
function comp(array1, array2){
    //your code here
    if(array1 === null || array2 === null)return false;
    if(array1.length === 0&&array2.length === 0) return true 
    if(array1.length === 0||array2.length === 0) return false
    let end = (array2.concat(array1.map(i=>i*i)).reduce((a,b)=>a^b))
    if(array2.includes(array1.reduce((a,b)=>(a*a+b*b)))){
      return false
    }
    return (end === 0) 
  }