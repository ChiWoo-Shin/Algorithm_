#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>

long long solution(int _k, int _d) {
    long long answer = 0;
    long long a =0;
    long long b =0;
    long long k = _k;
    long long d = _d;
        
    for(a=0; a<d+1; a=a+k){
        b = sqrt(d*d - a*a);
        
        answer += floor(b/k) +1;
    };
    
    return answer;
};

int main(void){
    int a = 0;
    a = solution(2,4);
};