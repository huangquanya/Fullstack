// function descendingOrder(a) {
//   //...

//   let n = a.toString().split('').map(_ => +_)
//   for (let i = n.length - 1; i >= 0; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       if (n[j] < n[j + 1]) {
//         [n[j], n[j + 1]] = [n[j + 1], n[j]]
        
//       }
//     }
//   }
//   return Number(n.join('').toString())
// }
function descendingOrder(a) {
  return String(a).split('').sort().reverse().join('')
}
console.log(descendingOrder(918327465))