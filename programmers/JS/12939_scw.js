function solution(s) {
    var answer = '';
    var arr = s.split(' ')
    arr =arr.map(Number)
    mini = Math.min(...arr)
    maxi = Math.max(...arr)
    
    answer = String(mini) + " "+String(maxi)

    return answer;
}


console.log(solution("-1 -2 -3 -4"))