#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void *x, const void *y)
{
    if (*(long long *)x < *(long long *)y)
        return -1;
    else if (*(long long *)x == *(long long *)y)
        return 0;
    else
        return 1;
}

int main(void)
{
    int N;
    scanf("%d", &N);
    long long* card = (long long*)malloc(sizeof(long long)*N);
    
    int max = 0;       // 최대 카드 개수
    long long num;     // 최대 카드 숫자
    long long cur_num; // 현재 카드 숫자
    int cur_cnt = 0;   // 현재 카드 개수
    int i = 0, j = 0;
    
    for (i = 0; i < N; i++)
    {
        scanf("%lld", &card[i]);
    }
    
    qsort(card, N, sizeof(long long), compare);

    cur_num = card[0];
    cur_cnt++;
    printf("check point\n");
    for (i = 1; i < N+1; i++)
    {
        if (card[i] == cur_num)
        {
            cur_cnt++;
        }
        else
        {
            if (max < cur_cnt)
            {
                num = cur_num;
                max = cur_cnt;
                cur_num = card[i];
                cur_cnt = 1;
            }
            else
            {
                cur_num = card[i];
                cur_cnt = 1;
            }
        }
    }

    printf("%lld\n", num);

    free(card);
    return 0;
}