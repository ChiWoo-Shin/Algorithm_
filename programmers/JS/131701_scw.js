function solution(elements) {
    var answer = 0;
    var set_ = new Set();
    var s = elements.concat(elements);

    for(let i=1; i<=elements.length; i++){ // 길이
        for(let j=0; j<elements.length; j++){ // 시작점
            let temp = (s.slice(j, i+j));
            let temp_sum = temp.reduce((a,b) => (a+b));
            set_.add(temp_sum);
        }
    }
    answer = set_.size;

    return answer;
}

console.log(solution([7,9,1,1,4]))