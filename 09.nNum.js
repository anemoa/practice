function nNum(n, numlist){
  let answer = [];

  for(i = 0; i < numlist.length; i++){
    if(numlist[i] % n === 0){
      answer.push(numlist[i]);
    }
  }
  return answer
}

console.log(nNum(3, [3,4,5,6,7,8]));


function sam(num){
  let answer = [];

  return answer;
}

console.log(sam([3,3,0-3,-4]))