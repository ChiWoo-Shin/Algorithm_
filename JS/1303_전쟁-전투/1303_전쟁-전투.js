const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
input.shift();
const graph = input.map(line => line.trim().split('')); // 여기까지 input
const direction_x = { 0 : 0, 1 : 0, 2 : 1, 3 : -1}
const direction_y = { 0 : -1, 1 : 1, 2 : 0, 3 : 0}

function dfs(r,c,s) {
    if (graph[r][c] === s){
        cnt +=1;
        graph[r][c] = 1;
    }
    let nx=0;
    let ny=0;

    for(let i= 0; i < 4; i++){
        let dx = direction_x[i]
        let dy = direction_y[i]
        nx = r + dx;
        ny = c + dy;
        if( 0<= nx && nx < M && 0 <= ny && ny < N){
            if(graph[nx][ny] === s){
                dfs(nx,ny,s);
            }
        }
    }
    return;
}

let A=0;
let B=0;
let cnt=0;

for(let i =0; i<M; i++){
    for(let j =0; j < N; j++){
        cnt = 0;
        if(0<= i && i< M && 0<=j && j<N){
            if (graph[i][j]==='W'){
                dfs(i,j,'W');
                A += cnt**2;
            } else if (graph[i][j] === 'B'){
                dfs(i,j,'B');
                B += cnt**2;
            }
        }
    }
}


console.log(A, B);
