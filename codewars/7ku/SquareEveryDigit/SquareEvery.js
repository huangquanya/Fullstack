function squareDigits(num){
    //may the code be with you
    return +num.toString().split('').map(i=>i*i).join('')
  }