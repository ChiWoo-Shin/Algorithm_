#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

int solution(int _storey) {
    int answer = 0;
    long long storey = _storey;
    long long remain = 0;
    long long check_dec = 0;
    
    while(storey){
        remain = storey%10;
        check_dec = (storey%100)/10;
        
        if(remain ==5 && check_dec >=5) {
            answer += 10-remain;
            storey = storey + (10-remain);
        }
        else if (remain > 5){
            answer += 10-remain;
            storey = storey + (10-remain);
        }
        else {
            answer += remain;
            storey = storey - remain;
        }
        
        storey = storey/10;
        // printf("storey = %lld remain = %lld \n", storey, remain);
    }
    
    return answer;
}

int main(void){
    int a =0;
    a = solution(123);
    printf(" %d \n", a);
}