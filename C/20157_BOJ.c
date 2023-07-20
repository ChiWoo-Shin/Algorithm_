#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct loc{
    int x, y;
}loc;

int Euclidean(int a, int b){
    if(b==0)
        return a;
    else
        return Euclidean(b, a%b);
}


int compareLoc(const void *a, const void *b) {
    loc *loc_a = (loc *)a;
    loc *loc_b = (loc *)b;

    if (loc_a->x != loc_b->x)
        return (loc_a->x - loc_b->x);
    else
        return (loc_a->y - loc_b->y);
}

int N;

int main(){
    scanf("%d", &N);
    loc* ballons = (loc*)malloc(sizeof(loc*)*N);

    int gcd;
    int _x, _y, temp, ans;

    for(int i=0; i<N; i++){
        scanf("%d %d", &ballons[i].x, &ballons[i].y);
    }

    for (int i=0; i<N; i++){
        gcd = Euclidean(ballons[i].x, ballons[i].y);
        if(gcd <0) gcd = gcd*(-1);
        ballons[i].x = ballons[i].x/gcd;
        ballons[i].y = ballons[i].y/gcd;
        if(ballons[i].x == 0){
            if(ballons[i].y > 0){
                ballons[i].y = 1;
            } else {
                ballons[i].y = -1;
            }
        }
        else if(ballons[i].y == 0){
            if(ballons[i].x > 0){
                ballons[i].x = 1;
            } else {
                ballons[i].x = -1;
            }
        }

        printf("%d %d gcd = %d\n", ballons[i].x, ballons[i].y, gcd);
    }


    qsort(ballons, N, sizeof(loc), compareLoc);

    _x = ballons[0].x;
    _y = ballons[0].y;
    ans = 0;
    temp = 1;

    for (int i=1; i<N; i++){

        if(_x == ballons[i].x && _y == ballons[i].y){
            temp++;
        } else {
            if(temp > ans){
                ans = temp;
            }
            temp = 1;
            _x = ballons[i].x;
            _y = ballons[i].y;
        }
    }
    if(temp > ans){
        ans = temp;
    }

    printf("%d", ans);

    free(ballons);
}

void swap(loc *a, loc *b) {
    loc temp = *a;
    *a = *b;
    *b = temp;
}

// 선택정렬
void selectionSort(loc *arr, int size) {
    for (int i = 0; i < size - 1; i++) {
        int min_index = i;
        for (int j = i + 1; j < size; j++) {
            // 구조체 멤버 중에서 (x, y) 좌표로 정렬
            if (arr[j].x < arr[min_index].x || (arr[j].x == arr[min_index].x && arr[j].y < arr[min_index].y)) {
                min_index = j;
            }
        }
        if (min_index != i) {
            swap(&arr[i], &arr[min_index]);
        }
    }
}
// 사용법
selectionSort(ballons, N);



int partition(loc *arr, int low, int high) {
    int pivot_x = arr[high].x;
    int pivot_y = arr[high].y;
    int i = low - 1;

    for (int j = low; j <= high - 1; j++) {
        if (arr[j].x < pivot_x || (arr[j].x == pivot_x && arr[j].y < pivot_y)) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}

void quickSort(loc *arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
// 사용법
quickSort(ballons, 0, N - 1);