#include <stdio.h>

int N, M; // input 을 받음
int chicken_idx = 0;
int home_idx = 0;
int min = 50*50*2;

// 좌표를 저장하기 위한 struct
typedef struct loc {
    int x, y;
}loc;

// 집, 치킨집, 그리고 선택된 치킨집을 저장해야하니깐
loc home[2500], chicken[13], select_chicken[13];

// 3- 집과 치킨집의 거리 계산
int gap(loc a, loc b){
    int gap = 0;
    gap = a.x>b.x ? a.x - b.x : b.x-a.x;
    gap += a.y>b.y ? a.y - b.y : b.y - a.y;
    
    return gap;
}

// 4- 도시의 치킨거리 계산
void calculate() {
    int distance = 0, sum = 0;

    for(int i=0; i< home_idx; i++){
        int chicken_dist = 50*2;

        for(int j=0; j<M; j++){
            distance = gap(home[i], select_chicken[j]);
            if(distance < chicken_dist){
                chicken_dist = distance;
            }
        }
        sum += chicken_dist;
    }
    if(sum < min){
        min = sum;
    }
}

// 2- 전체 치킨집 중에 M개를 선택하는 방법 (combination)
/*
depth : 몇 번 index를 보고있는지
cnt : 현재 선택된 치킨집의 개수
isSelect : 해당 치킨집을 선택할지 안할지 (1 == 선택, 0 == 선택X)
*/
void select(int depth, int cnt, int isSelect){
    
    if (isSelect == 1){
        select_chicken[cnt - 1] = chicken[depth];
    }

    if (M == cnt){
        calculate();
        return;
    }

    if (depth == (chicken_idx-1)){
        return;
    }

    select(depth+1, cnt+1, 1);
    select(depth+1, cnt, 0);
}

int main(){
    scanf("%d%d", &N, &M);
    int input;
    // 1- 집과 치킨집을 각각의 리스트에 넣음
    for(int i=0; i<N;i++){
        for(int j=0; j<N;j++){
            scanf("%d", &input);
            if(input == 2){
                chicken[chicken_idx].x = i;
                chicken[chicken_idx].y = j;
                chicken_idx++;
            } else if(input == 1){
                home[home_idx].x = i;
                home[home_idx].y = j;
                home_idx++;
            }
        }
    }

    select(-1, 0, -1);

    printf("%d\n", min);

    return 0;
}