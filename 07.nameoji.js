// 나머지 구하기
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

// 제곱수 판별하기

const numRight = (n) =>{
  let answer = 0;
  // Math.sqrt(); 대상 숫자의 제곱근 값을 구해주는 메소드다.
  let check =  Math.sqrt(n);


  // Number.isInteger() 정수인지 아닌지를 판별해주는 메소드. 정수가 맞으면 true, 아니면 false를 반환한다.
  if(Number.isInteger(check)){
    return answer = 1;
  }else{
    return answer = 2 ;
  }
}

console.log(numRight(16));

// 이건 다른 사람이 작성한 식인데 훨씬 줄여서 썼다.
// function solution(n) {
//   return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }


// 편지

// const letter = (message) => {
//   let answer = 0;
//   let space = message.length;
//   answer = space * 2;

//   return console.log(answer);
// }

// letter('I love you~');


// 약수 구하기
// const yak = (n) => {
//   let answer = [];

//   for(i = 1; i <= n; i++){
//     if(n % i === 0){
//       answer.push(i);
//     }
//   }

//   return console.log(answer);
// };

// yak(29);


// 짝수는 싫어요

function no2n(n) {
  var answer = [];
  
  for(i = 1; i <= n; i++){
      if(i % 2 !== 0){
          answer.push(i);
      }
  }    
  return console.log(answer);
}

no2n(10);
no2n(15);

// 다른 사람이 작성한 코드

function no2n2(n) {
  var answer = [];

  for (let i = 1; i<=n; i+=2) answer.push(i);

  return answer;
}