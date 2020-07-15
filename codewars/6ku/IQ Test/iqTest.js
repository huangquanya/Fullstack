function iqTest(numbers){
    // ...
    let a = numbers.split(' ').map(i=>i%2).sort((a,b)=>a-b)
    let judge;
    let re;
    a[0]===a[1] ? judge = 1:judge=0
    numbers.split(' ').map(i=>i%2).forEach((i,index)=>{
      if(i === judge){re = index+1}
    })
    return re
  }