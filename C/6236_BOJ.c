#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int N, M;
    scanf("%d %d", &N, &M);

    int* money_list = (int*)malloc(sizeof(int)*N);
    int min = 0;
    int max = 0;
    int mid =0;
    int cnt = 1; // 출금 횟수
    int temp = 0;
    int ans = 0;
    for(int i=0; i<N; i++){
        scanf("%d",&money_list[i]);

        if (money_list[i]>min){
            min = money_list[i];
        }

        max += money_list[i];
    }

    // 이분탐색
    while(min<=max){
        mid = (min+max)/2;
        temp = mid;
        cnt = 1;

        for(int i=0; i<N; i++){
            if(temp< money_list[i]){
                cnt++;
                temp = mid;
            }
            temp -= money_list[i];
        }

        if(cnt>M){
            min = mid+1;
        } else {
            max = mid-1;
            if (ans<mid){
                ans = mid;
            }
        }
    }

    printf("%d", mid);
}