function solution3(n){
  var answer = 0;

  for(i = 0; i <= n; i++){
    if(i % 2 === 0){
      answer += i;
      console.log(answer);
    }
  }
  return console.log(answer);
}

// function solution4(n) {
//   var half = Math.floor(n/2);
//   return half*(half+1);
// } 더 줄이면 이렇게도 된다고 한다.
solution3(4);


// 두 수의 합
function solution(num1, num2) {
  var answer = num1 + num2;
  return answer;
}


// console.log(2, 3);
// console.log(100, 2);

// 나머지 몫 구하기

function solution2(num1, num2){
  let answer = 0;
  answer = Math.floor(num1 / num2);

  return console.log(answer);

}

solution2(10, 5);
solution2(7, 2);