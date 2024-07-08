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

console.log(sam([3,3,0-3,-4]));


function jungbok(arr){
  let answer = [];

  for(i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i+1]){
      answer.push(arr[i]);
    }
  }
  
  return answer;

}

console.log(jungbok([1,1,1,3,3,5,99,99]));