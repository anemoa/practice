function hashard(x) {
    let sum = 0;
    let str = String(x).split(""); // 매개변수 x에 들어온 수를 문자열로 형변환 해서 글자를 하나하나 조각낸다
    
    for(i = 0; i < str.length; i++){
        sum += Number(str[i]); // str 배열의 각각의 요소를 숫자로 형변환 해서 각 요소들을 하나씩 다 더하기
    }
    
    return (x % sum === 0) ? true : false; // 3항 연산자로 x / sum이 0으로 떨어지면 true 아니면 false로 반환
}


console.log(hashard(18));

// toString() String()의 차이
// String()은 null, undefined도 잘 반환하지만
// toString()은 null, undefined 일 경우 오류가 난다.

// split()
// split() : 아무것도 전달하지 않을 경우 1로 반환
// split(" "): 단어별로 끊어 준다
// split(""): 글자 하나 하나씩 끊어 준다


const phoning = (phone) => {
    
  // 번호 뒷 4자리 판별
  let phone4 = phone.substring(phone.length - 4);
  console.log(phone4);

  // 뒷 4자리 제외한 앞 숫자 전부 가져오기
  let frontNum = phone.substring(0, phone.length - 4);
  console.log(frontNum);

  // 앞 숫자 전부 *로 대체하기
  let result = frontNum.replace(/[0-9]/g, '*');
  console.log(result);

  let answer = result + phone4;

  return console.log(answer);

};

phoning('123456789');


// substr()은 폐기된 함수라 사용하지 않을것을 권장함
// 이건 다른 사람이 한건데 짧게 가능
// function hide_numbers(s){
// return s.replace(/\d(?=\d{4})/g, "*");
// }