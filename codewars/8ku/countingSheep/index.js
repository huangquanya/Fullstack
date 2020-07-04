// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     let count = 0;
//     for(let sheep of arrayOfSheep) {
//       if(sheep)count++
//     }
//     return count
//   }

function countSheeps(arrayOfSheep) {
    console.log(arrayOfSheep.filter(Boolean))
    return arrayOfSheep.filter(Boolean).length
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))