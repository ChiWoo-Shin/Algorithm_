function solution(n) {
    let arr = [1n, 1n];

    for(let i=2; i<n+1;i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]%1234567n;
}

console.log(solution(10))

// 실패 -- 이유는 BigInt, 일반적인 int는 숫자 크기 제한이있음 Bigint를 쓰면 2^53 -1 임
// function solution(n) {
//     var answer = 1;
//     var two_cnt = 0;
//     var one_cnt = n;
    
//     function factorial(k){
//         if (k === 1 || k === 0){
//             return 1;
//         }
//         return k* factorial(k-1);
//     }

//     while ( n !== two_cnt){
//         n = n -1;
//         one_cnt = one_cnt-2;
//         if(one_cnt <0) break;
//         two_cnt++;
//         var total = factorial(n);
//         var one_cnt_t = factorial(one_cnt);
//         var two_cnt_t = factorial(two_cnt);
//         // console.log(total, one_cnt, one_cnt_t, two_cnt, two_cnt_t)
//         answer += (total/(one_cnt_t*two_cnt_t));
//     }

//     return answer%1234567;
// }