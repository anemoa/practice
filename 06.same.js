function solution(num1, num2){
    let answer = 0;
    if(num1 === num2){
        return answer = 1;
    }else{
        return answer -1;
    }
}

console.log(solution(2, 3));
console.log(solution(11, 11));
console.log(solution(7, 99));