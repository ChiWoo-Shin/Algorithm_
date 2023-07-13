#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int n;
    scanf("%d",&n);
    int* arr_q =  (int*)malloc(sizeof(int)*n);
    memset(arr_q, 0, sizeof(int)*n);

    for (int i =0; i<n;i++){
        scanf("%d", &arr_q[i]);
    }
    int q_idx = 0;
    int max_num = 0;

    int *arr_a = (int *)malloc(sizeof(int) * n);
    memset(arr_a, 0, sizeof(int) * n);
    int arr_idx = 0;

    char *arr_txt = (char *)malloc(sizeof(char) * (n * 2));
    memset(arr_txt, '0', sizeof(char) * (n * 2));
    int txt_idx = 0;

    for (int j = 1; j < n + 1; j++)
    {
        arr_a[arr_idx] = j;
        arr_txt[txt_idx] = '+';
        txt_idx++;

        while (arr_a[arr_idx] == arr_q[q_idx])
        {
            arr_txt[txt_idx] = '-';
            txt_idx++;
            q_idx++;
            arr_a[arr_idx] = 0;
            arr_idx--;
        }

        arr_idx++;
    }

    if (arr_txt[n * 2 - 1] == '0')
    {
        printf("NO\n");
    }
    else
    {
        for (int i = 0; i < n * 2; i++)
        {
            printf("%c\n", arr_txt[i]);
        }
    }
}