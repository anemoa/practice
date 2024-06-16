function solution2(numbers){
  var answer = 0;
  let numleng = numbers.length;
  
  for(i = 0; i < numleng; i++){
    answer += numbers[i];
  }
  let total = answer / numleng;
  answer = total.toFixed(3);
  return console.log(answer);
}


solution2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
solution2([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);


// 초기값: 0 첫 번째 반복: 0(누적값) + 1(현재값) = 1 
// 두 번째 반복: 1(누적값) + 2(현재값) = 3 
// 세 번째 반복: 3(누적값) + 3(현재값) = 6 
// 네 번째 반복: 6(누적값) + 4(현재값) = 10 
// 최종 반환값: 10


// function solution(numbers) {
//   var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
//   return answer;
// }