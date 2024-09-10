function jungsoo(n){

  let answer = 0;
  let sqrt = Math.sqrt(n);
  if(sqrt % 1 == 0 ){
    return answer = Math.pow(sqrt +1, 2);

  } else{
    return answer = -1;
  }

}

console.log(jungsoo(144));


// Math.sqrt(x) : 숫자 x의 제곱근을 반환한다. ex) Math.sqrt(9) = 3
// Math.pow(base, exponent) : base에 exponent를 제곱한 값을 반환한다. ex) Math.pow(2, 3) = 8



function gangyuk(x, n){
  let answer = [];

  for(i = 1; i <= n; i++){
    answer.push(x*i);
  }
  return answer;
}


console.log(gangyuk(3, 4));



// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a) // 가로별의 개수를 row라는 변수에 담음
//     for(let i =0; i < b; i++){ // 세로별의 개수 반복
//         console.log(row) //출력
//     }
// });


function nanum(arr){
  let answer = 0;
  let sum = 0;
  
  for(i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return answer = sum / arr.length;
  
}

console.log(nanum([6,6,6]));


function soo(s){
  let num = parseInt(s);

  console.log(num);
  
}

soo('+1234');


// 양꼬치

function yang(n, k){
  let free = parseInt(n/10);
  return n*12000 + (k - free) *2000;

}

console.log(yang(64, 6));