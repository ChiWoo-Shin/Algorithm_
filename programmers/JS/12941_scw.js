function solution(A,B){
    var answer = 0;
    A.sort(function(x,y) {
        return x-y;
    });
    
    B.sort(function(x,y) {
        return y-x;
    });

    console.log(A, B)

    for(let i=0; i<A.length; i++){
        answer += A[i]*B[i];
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))