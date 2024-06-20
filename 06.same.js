// function solution(num1, num2){
//     let answer = 0;
//     if(num1 === num2){
//         return answer = 1;
//     }else{
//         return answer -1;
//     }
// }

// console.log(solution(2, 3));
// console.log(solution(11, 11));
// console.log(solution(7, 99));

function solution2(numer1, denom1, numer2, denom2){
    let answer = [];


}


// function solution3(numbers){
//     let answer = numbers.map(function(num){
//         return num * 2;
//     });
//     console.log(answer);
// }

//위에걸 더 간단하게 줄이면 아래처럼 된다

function solution3(numbers){
    let answer = numbers.map((num) => num * 2);

    console.log(answer);
}


solution3([1, 2, 3, 4, 5]);
solution3([1, 2, 100, -99, 1, 2, 3]);