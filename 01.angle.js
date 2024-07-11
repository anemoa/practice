function solution(angle) {
    var answer = 0;

    if( 0 < angle && angle < 90 ){
        return answer = 1;
    }else if(angle === 90){
        return answer = 2;
    }else if(90 < angle && angle < 180){
        return answer = 3;
    }else if(angle === 180){
        return answer = 4;
    }
    
    return answer;
}



function solutionA(angle) {
  return [0, 90, 91, 180].filter( (x) => angle>=x).length;
  }

  // function solution(angle){
  //   return [0, 90, 91, 180].filter(function(x){     
  //     angle >= x;
  //     console.log(x);
  //   }).length;
  // }

//   console.log(solution(70));
//   console.log(solution(91));
//   console.log(solution(180));


// 삼각형의 완성조건

// function tri(sides){
//     sides = sides.sort((a,b) => a - b);
//     if(sides[0] + sides[1] > sides[2]){
//         return answer = 1;
//     }else{
//         return answer = 2;
//     }
// }

function tri(sides){
    sides = sides.sort((a, b) => a - b);

    return sides[0] + sides[1] > sides[2] ? 1 : 2;

}

console.log(tri([199, 72, 222]));

// arr.sort((a,b) => a - b); => sort 메소드를 사용할 때 오름차순으로 하려면 이렇게 정의하면 된다
