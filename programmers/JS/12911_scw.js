function solution(n) {
    var answer = 0;
    var bin_list = (n.toString(2)).split('')
    var n_cnt = (bin_list.filter(num => num === '1')).length
    
    answer = n+1
    while (true){
        var answer_list = (answer.toString(2)).split('')
        var answer_cnt = (answer_list.filter(num => num ==='1')).length

        if (answer_cnt === n_cnt){
            break
        }
        answer +=1
    }
    return answer;
}

console.log(solution(78))