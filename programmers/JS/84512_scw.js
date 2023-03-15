function solution(word) {
    var answer = 0;
    let dic = ['A', 'E', 'I', 'O', 'U'];
    word = [...word];

    for(const [idx, wo] of word.entries()){
        let val = dic.findIndex(x => x === wo);
        answer += getNum(idx)*val +1;
    }

    function getNum(idx){
        let sum =0;
        let cnt =0;
        while(cnt <= 4-idx){
            sum += (5**cnt++);
        }

        return sum;
    }

    return answer;
}

console.log(solution("AAAAE"))

//dfs 방법

// let res = {};
// let idx = 0;
// let arr = ["A", "E", "I", "O", "U"];

// const dfs = (now, cnt) => {
//     if(cnt>5)   return;
//     res[now] = idx++;
//     for(let i=0; i<5; i++){
//         let next = now + arr[i];
//         dfs(next, cnt+1);
//     }
// }

// function solution(word) {
//     dfs("", 0);
//     return res[word];
// }