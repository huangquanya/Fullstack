var number = function(busStops){
    // Good Luck!
    let res = 0;
    busStops.map(i=>{
      res = res+i[0]-i[1]
    })
    return res
  }