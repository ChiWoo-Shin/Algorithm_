#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int N;
    scanf("%d", &N);
    int M;
    scanf("%d", &M);

    int *stand_list = (int *)malloc(sizeof(int) * M);

    for (int i = 0; i < M; i++)
    {
        scanf("%d", &stand_list[i]);
    }

    int s = stand_list[0];
    int e = N;
    int mid, flag;
    int answer = N + 1;

    if (M == 1)
    {
        if (N - stand_list[0] > stand_list[0])
        {
            answer = N - stand_list[0];
        }
        else
        {
            answer = stand_list[0];
        }
    }
    else
    {
        while (s <= e)
        {
            mid = (s + e) / 2;
            flag = 0;

            if (stand_list[M - 1] + mid < N)
                flag = 1;
            else
            {
                for (int i = 0; i < M-1; i++)
                {

                    if (stand_list[i] + mid < stand_list[i+1] - mid )
                    {
                        flag = 1;
                        break;
                    }
                }
            }

            if (flag == 1)
            {
                s = mid + 1;
            }
            else
            {
                e = mid - 1;
                if (answer > mid)
                {
                    answer = mid;
                }
            }
        }
    }

    printf("%d", answer);
}