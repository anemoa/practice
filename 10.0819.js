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