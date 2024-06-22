// function solution555(num1, num2){
//   let answer = 0;
//   answer = num1 % num2;

//   return console.log(answer);
// }

const solution555 = (num1, num2) =>{
  let answer = 0;
  answer = num1 % num2;

  return console.log(answer);
} 

solution555(3, 2);
solution555(10, 5);
solution555(15, 4);

// 더 간단하게 줄이면 이렇게 할 수도 있다고 한다 => const solution = (num1, num2) => num1 % num2