// 시소 짝꿍

#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// weights_len은 배열 weights의 길이입니다.
long long solution(int weights[], size_t weights_len) {
    long long answer = 0;
    long long temp =0;
    long long arr[1001] = {0};
    
    for(int i=0; i<weights_len; i++){
        arr[weights[i]]++;
    }
    
    for(int i=0; i<weights_len; i++){
        // 2:3
        if(weights[i] % 2 ==0){
            temp = (weights[i]/2)*3;
            if(temp <=1000)
                answer += arr[temp];
        }
        
        // 3:4
        if(weights[i] % 3 ==0){
            temp = (weights[i]/3)*4;
            if(temp <=1000)
                answer += arr[temp];
        }
        
        // 1:2
        temp = weights[i]*2;
        if(temp<=1000)
            answer +=arr[temp];
    }
    
    for(int i=100; i<=1000; i++){
        if(arr[i] >=2)
            answer += (arr[i]*(arr[i]-1))/2;
    }
    
    
    return answer;
}

// 실패
// #include <stdio.h>
// #include <stdbool.h>
// #include <stdlib.h>

// int Euclidean(int a, int b){
//     if (b == 0)
//         return a;
//     else
//         return Euclidean(b, a%b);
// }

// // weights_len은 배열 weights의 길이입니다.
// long long solution(int weights[], size_t weights_len) {
//     long long answer = 0;
//     int temp = 0;
//     int* arr;
//     arr = (int*)malloc(sizeof(int)*weights_len);
    
//     for (int i = 0; i < weights_len - 1; i++)
//     {
//         for (int j = 0; j < weights_len - 1 - i; j++)
//         {
//             if (weights[j] > weights[j + 1])
//             {
//                 temp        = weights[j];
//                 weights[j]     = weights[j + 1];
//                 weights[j + 1] = temp;
//             }
//         }
//     }
    
//     int a = weights[0];
//     int j =0;
//     int idx = 0;
//     arr[idx] = a;
//     idx++;
//     for (int i = 1; i<weights_len; i++){
//         j = i;
//         while (a == weights[j]){
//             j++;
//         }
        
//         if (i != j){
//             answer++;
//             a = weights[j];
//             arr[idx] = weights[j];
//             idx++;
//             i = j;
//         } else {
//             arr[idx] = weights[i];
//             idx++;
//         }
//     }
    
//     int gcd = 0;
//     int tempA = 0;
//     int tempB = 0;
    
//     // for (int q = 0; q<weights_len; q++){
//     //     printf("%d ", arr[q]);
//     // }
//     // printf("\n");
    
//     for (int i=0; i<weights_len-1; i++){
//         for (int j =i+1; j<weights_len; j++){
//             if (arr[j] == 0) break;
            
//             gcd = Euclidean(arr[i], arr[j]);
//             tempA = arr[i]/gcd;
//             tempB = arr[j]/gcd;
            
//             if ((tempA == 2 || tempA == 3 || tempA ==4)&&(tempB == 2 || tempB == 3 || tempB ==4)){
//                 // printf("1 : %d -- 2 : %d \n", arr[i], arr[j]);
//                 answer++;
//             } else if (tempA ==1 && tempB ==2){
//                 answer++;
//             } else if (tempB ==1 && tempA ==2){
//                 answer++;
//             }
//         }
        
//         if(arr[i] == 0) break;
//     }
    
    
//     return answer;
// }