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


// 삼총사

function three(number) {
  const chosenNums = []; // 뽑힌 숫자들 (조합)
  const isUsed = []; // 중복을 막기 위해 사용됐는지 확인할 배열
  let answer = 0; // 가짓수

  // 백트래킹
  function recursive(depth, start) {
    if (depth === 3) {
      // depth 3에서 조건 확인
      const sum = chosenNums.reduce((acc, cur) => acc + cur, 0);
      if (sum === 0) answer++;
      return;
    }
    // start를 통해 순서대로 탐색될 수 있도록 함
    for (let i = start; i <= number.length; i++) {
      if (!isUsed[i]) {
        chosenNums.push(number[i - 1]);
        isUsed[i] = true;
        recursive(depth + 1, i + 1); // depth = 3 이면 조건 확인하고 return해서 아래 내용 실행 X
        chosenNums.pop();
        isUsed[i] = false;
      }
    }
  }
  recursive(0, 1);
  return answer;
}


// chosenNums는 현재 재귀 호출에서 선택된 숫자들을 저장합니다.
// isUsed는 각 숫자가 사용되었는지 여부를 저장하는 배열입니다. 이 배열의 인덱스는 1부터 시작합니다 (하지만 실제로는 0부터 사용).
// answer는 조건을 만족하는 조합의 개수를 저장합니다.

// 백트래킹 함수 recursive

// 기저 사례: depth가 3이면 3개의 숫자가 선택된 상태입니다. 이 경우, chosenNums에 있는 숫자들의 합을 계산하여 0이면 answer를 1 증가시킵니다. 이후 함수는 종료됩니다.
// 재귀 호출 및 백트래킹:
// for 루프를 통해 start부터 number.length까지 반복합니다.
// isUsed[i]가 false인 경우, 즉 아직 사용되지 않은 숫자를 선택합니다.
// 선택된 숫자를 chosenNums에 추가하고 isUsed[i]를 true로 설정합니다.
// recursive(depth + 1, i + 1)을 호출하여 다음 깊이로 진행합니다.
// 재귀 호출 후에는 현재 선택한 숫자를 chosenNums에서 제거하고 isUsed[i]를 false로 되돌립니다. 이를 통해 다른 조합을 시도할 수 있습니다.

// 초기 호출에서는 depth를 0으로, start를 1로 설정하여 탐색을 시작합니다.
// 모든 가능한 조합을 탐색한 후, answer를 반환하여 조건을 만족하는 조합의 개수를 제공합니다.