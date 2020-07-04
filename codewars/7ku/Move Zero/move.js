let arr = [1,2,3,4,0,0,5]

// function move_zeros(arrNum, isRight){
//     //Your Code logic should written here
//     // true push /false ushift/undefined push
//     if(isRight === undefined)isRight = true;
//     let zero = []
//     for(let i = 0; i<arrNum.length;i++){
//         if(arrNum[i]===0){
//             zero.push(...arrNum.splice(i,1))
//             i=i-1
//         }  
//     }
//     if(isRight){
//         return [...zero,...arrNum]
//     }else{
//         return [...arrNum,...zero]
//     }
// }

function move_zeros(arrNum, isRight){
    //Your Code logic should written here
      let zero = arrNum.filter(i => i===0)
      let noZero = arrNum.filter(i => i!==0)
      if(isRight === undefined|| isRight)return noZero.concat(zero);
      return zero.concat(noZero)
    }

    // function move_zeros(arrNum, isRight = true) {
    //     let zeroes    = arrNum.filter(i => i === 0);
    //     let nonZeroes = arrNum.filter(i => i !== 0);
        
    //     return isRight ?
    //       nonZeroes.concat(zeroes) :
    //       zeroes.concat(nonZeroes);
    //   }
console.log(move_zeros(arr))