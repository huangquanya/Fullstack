longestPalindrome=function(s){
    //your code here
    if(!s||s=='')return 0
    let count = 1;
    for(let i = 0; i < s.length; i++){
      for(let j = 1; j< 3; j++){
        let left = i;
        let right = i+j;
        while(left>=0&&right<s.length&&s[left]===s[right]){
          left--;right++;
        }
        let len = right -left -1;
        if(len>count)count = len;
      }
    }
    return count
  }