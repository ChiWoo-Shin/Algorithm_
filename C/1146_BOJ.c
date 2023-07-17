#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MOD 1000000 // 답을 경우의수/백만을 요구해서 1,000,000 을 define 해놓음
#define NMAX 105 // N의 최대크기가 100개이지만 넉넉하게 105개로 줬다고 추정합니다.

int N; // input 받을 N
int dp[NMAX][NMAX][NMAX][2]; // dp에 값을 저장해서 누적시킬 예정임
// idx, left, right, s -- dp 변수 설명
// 현재 줄에 서있는 사람, left = 작은수의 개수, right = 큰수의 개수, 방향(큰수, 작은수)

long long ans; // 정답을 넣을 변수

// idx, left, right, s -- dp 변수 설명
// 현재 줄에 서있는 사람, left = 작은수의 개수, right = 큰수의 개수, 방향(큰수, 작은수)
int sv(int idx, int left, int right, int s)
{
    long long temp = 0; // 현재 순간의 경우의 수를 저장할 부분

    if (dp[idx][left][right][s] >= 0) // 해당 경우의 수를 이미 확인했으면
        return dp[idx][left][right][s]; // 해당 값을 return함

    if (idx == N) // 현재 줄에 선 사람이 마지막 번째일때
    {
        if (!left && !right) // 양쪽다 남은 개수가 없으면
            return dp[idx][left][right][s] = 1; // 해당 경우의 수가 성립하는거라서 1
        else
            return dp[idx][left][right][s] = 0; // 해당 경우의 수가 성립되지 않음 따라서 0
    }
    else // 마지막이 아닌 경우
    {
        temp = 0; // 현 순간의 경우의 수를 0으로 초기화

        if (s == 0) // 방향이 0 --> 나보다 작은 수를 선택
        {
            for (int i = left - 1; i >= 0; i--) // 남은 left 개수를 순회함
            {
                temp = (temp + sv(idx + 1, i, right + left - i - 1, 1)) % MOD;
                                // 다음 idx, left 남은 개수, right 남은 개수, 큰수 선택
            }
        }
        else // 방향이 1 --> 나보다 큰 수를 선택
        {
            for (int i = right - 1; i >= 0; i--)
            {
                temp = (temp + sv(idx + 1, left + right - i - 1, i, 0)) % MOD;
            }
        }

        // dp에 현재까지 누적된 개수를 넣어줌
        return dp[idx][left][right][s] = temp;
    }
}

int main()
{
    // input
    scanf("%d", &N);

    if (N == 1)
        printf("1");
    else
    {
        memset(dp, -1, sizeof(dp));
        // dp를 전부 -1 로 초기화함 (아직 아무것도 하지 않은것을 -1로)
        for (int i = 1; i <= N; i++) // 숫자를 순회함 1~N까지
        {
            for (int s = 0; s < 2; s++) // 다음에 오는 숫자가 나보다 큰 경우, 작은경우 2개.
            {
                ans = (ans + sv(1, i - 1, N - i, s)) % MOD;
            }
        }
        printf("%lld", ans);
    }
}