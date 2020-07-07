function duplicateCount(text){
    //...
    if(text === null)return 0
    let cur = text.toLowerCase(text);
    let uniq = new Set();
    let arr = []
    for(let i = 0; i< cur.length;i++){
      
      if(uniq.has(cur[i])){
        arr.push(cur[i])
      }else{
        uniq.add(cur[i])
      }
    }
    console.log(arr)
    let end = new Set(arr)
    return end.size
  }