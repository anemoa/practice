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

// 짝수 홀수 개수

// function holjjak(list){
//   console.log(list);
//   let hols = list.filter( (value) =>  value % 2 === 0);
//   let jjaks = list.filter( (value) => value % 2 === 1 );

//   console.log(jjaks.length);
// }

function holjjak(num_list){
  let answer = [];
    
  let hols = num_list.filter( (ele) => ele % 2 === 0);
  let jjaks = num_list.filter( (ele) => ele % 2 === 1);
  
  answer.push(hols.length);
  answer.push(jjaks.length);

  
  return console.log(answer);
}

holjjak([1,1,2,3,4]);


// 피자 나눠 먹기 (1)

function pizza(n){
  let result = n / 7;
  let answer = Math.ceil(result);
  return answer;
}

pizza(5);


// 옷가게 할인 받기

function osprice(n){
  if(100000 <= n && n < 300000){
    return Math.floor(price * 0.95)
  } else if(300000 <= n && n < 500000){
    return Math.floor(n * 0.9)
  } else if(500000 <= n){
    return Math.floor(n * 0.8)
  } else{
      return n
  }
}

console.log(osprice(580000));


// 세균 증식

function segyun(n, t){
  let dap = n;
  for(i = 0; i < t; i++) {
    dap *= 2;
  }
  return dap;
}

console.log(segyun(2, 10));


// 중앙값 구하기

function middleRes(array) {
  array.sort( (a, b) => a - b );
  let len = array.length;
  let middle = Math.floor( len / 2);
  
  return array[middle];
}


// 자릿수 더하기

function jarisoo(n){

  let str = String(n);
  let words = str.split('');
  let answer = words.reduce((acc, word) => acc + parseInt(word), 0);

  return answer;
}

console.log(jarisoo(1123));


// 문자 반복 출력하기

function banbok(str, n){
  return str.split('').map(char => char.repeat(n)).join('');
}


// 최댓값 만들기 1

function choi(num){

  console.log(num);

  let arr = num.sort( (a,b) => b - a);
  console.log(arr);
  return arr[0] * arr[1];
}


choi([9,2,4,3,11]);


// 아이스 아메리카노

function ameri(money){

  return [Math.floor(money / 5500), money % 5500];
}

console.log(ameri(7000));

// 숨어있는 숫자의 덧셈 (1)

function hideNum(str){
    const num = str.split("");
    let result = 0;

    for(i = 0; i < num.length; i++){
        if(Number(num[i])){
          result += Number(num[i]);
        }
    }

    return result;
}

console.log(hideNum("54egsgsdg33"))

// 대문자와 소문자
function daemoonja(str){
    let answer = [];
    for(i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            answer.push(str[i].toUpperCase());
        }else{
          answer.push(str[i].toLowerCase());
        }
    }

    return answer.join("");
}

console.log(daemoonja('aacCCd'));