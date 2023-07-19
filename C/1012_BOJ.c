#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct cabbage {
    int x, y;
}loc; // 양배추 위치를 기억하기 위한 struct

int dir_x[4] = {1, -1, 0, 0};
int dir_y[4] = {0, 0, 1, -1};

int** map; // 배추밭을 그리기 위한 map
int M, N, K; // 변수를 저장

void dfs(int y, int x){ // 전형적인 DFS
    int new_x, new_y;

    for(int i=0; i<4; i++){
        new_x = dir_x[i] + x;
        new_y = dir_y[i] + y;

        if(new_x >= 0 && new_x < M && new_y >= 0 && new_y < N && map[new_y][new_x] == 1){
            map[new_y][new_x] = 0;
            dfs(new_y, new_x);
        }
    }
}

int main(){
    int T;
    scanf("%d", &T);
    int cabbage_cnt = 0;

    for(int i=0;i<T;i++){
        scanf("%d %d %d", &M, &N, &K);
        loc* cabbages = (loc*)malloc(K* sizeof(loc)); // 배추의 위치를 기억할 배열

        map = (int**)malloc(sizeof(int*)*N); // 지도의 크기를 할당해주자
        for(int j=0; j<N;j++){
            map[j] = (int*)malloc(sizeof(int)*M);
            memset(map[j], 0, sizeof(int)*M); // 하면서 값을 0으로 초기화 (안그러면 쓰레기값이 가득찬다)
        }
        
        // 배추 위치를 기록하자
        int x_, y_;
        for(int j= 0; j<K; j++){
            scanf("%d %d", &x_, &y_);
            cabbages[j].x = x_; // 배열에도
            cabbages[j].y = y_;
            map[y_][x_] = 1; // 배추밭에도
        }

        cabbage_cnt = 0; // 배추지렁이 개수를 세자
        for(int j=0; j<K; j++){
            if(map[cabbages[j].y][cabbages[j].x] == 1){ // 1이라는건 아직 안지났다는거
                cabbage_cnt++; // 배추 지렁이 개수를 추가해주고
                map[cabbages[j].y][cabbages[j].x] = 0; // 지나간 배추니깐 체크해주고
                dfs(cabbages[j].y, cabbages[j].x); // 해당 배추를 기점으로 전부다 돌려주자
            }
        }

        printf("%d\n", cabbage_cnt); // 값 출력해주고

        // 할당된 공간을 free 해준다.
        for (int j = 0; j < N; j++) {
            free(map[j]);
        }
        free(map);
        free(cabbages);
    }
}