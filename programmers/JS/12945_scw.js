function solution(n) {
    var answer = 0;

    var dp = new Array(n+1);

    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i<n+1;i++){
        dp[i] = dp[i-1]%1234567 + dp[i-2]%1234567
    }
    answer = dp[n]%1234567
    return answer;
}

console.log(solution(10))