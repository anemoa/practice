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

  console.log(solution(70));
  console.log(solution(91));
  console.log(solution(180));





