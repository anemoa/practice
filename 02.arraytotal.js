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