function solution(num1, num2) {
  let answer = 0;
  let total = 0;
  total = (num1 / num2) * 1000;
  answer = Math.floor(total);
  
  return console.log(answer);
}


solution(3, 2);
solution(7, 3);
solution(1, 16);


// 다른 사람들의 문제풀이 

// Math.trunc()는 소수점 이하는 다 버린다.
// ex) Math.trunc(23.3) = 23, Math.trunc(-23.3) = -23

// function solution(num1, num2) {
//   return Math.trunc(num1 / num2 * 1000);
// }