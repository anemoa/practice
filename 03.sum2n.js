function solution3(n){
  var answer = 0;

  for(i = 0; i <= n; i++){
    if(i % 2 === 0){
      answer += i;
    }
  }
  return console.log(answer);
}

// function solution4(n) {
//   var half = Math.floor(n/2);
//   return half*(half+1);
// } 더 줄이면 이렇게도 된다고 한다.
solution3(4);