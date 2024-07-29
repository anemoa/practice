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


// 숫자 문자열과 영단어

function daneoh(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for(let i=0; i< numbers.length; i++) {
      let arr = answer.split(numbers[i]);
      answer = arr.join(i);
  }
  return Number(answer);
}

// 1. 문자열을 영문으로 표기된 숫자 기준으로 split 한다. 그렇게되면 영문자로 표기된 숫자는 사라지고 양옆으로 남은 문자열들이 arr배열에 들어간다.
// 2. join을 통해서 arr배열을 다시 합쳐주면 arr배열 원소들 사이에 i 가 들어가면서 새로운 문자열이 생성된다.

// 'one4seveneight'의 경우 split을 통해 [ '', '4seveneight'] 이 생성된다.
// 이후 join(i)를 통하여 두 원소 사이에 '1' (i는 1인 상태기 때문에) 이 들어가게 되어 14seveneight 이 생성된다.
// 이후 for문을 계속 따라가다보면 
// [ '14', 'eight'] // split 을 통해 생성.
// 147eight // join을 통해 생성.
// [ '147', ''] // split을 통해 생성.
// 1478 // join을 통해 성성.

// 의 과정을 거쳐서 정답이 완성된다. 과정중 '' 의 타입은 String 이다.

console.log(daneoh('123zero'));


// 같은 숫자는 싫어!
function nosame(arr){
  const newArr = []
  
  for(i=0; i<arr.length; i++){
      if(arr[i]!==arr[i+1]){
          newArr.push(arr[i])
      }
  }
  return newArr
}