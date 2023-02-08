let fs =require('fs');
// let input = fs.readFileSync("./Algorithm_/2206/예제.txt").toString().trim().split('\n');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
input.shift();
const graph = input.map(line => line.trim().split('').map(Number));

const visited = Array.from(new Array(N), () => new Array());

for (let i =0; i<N;i++){
    for (let j=0; j< M; j++){
        visited[i][j] = new Array(2).fill(0);
    }
}

const direction = [[1,0], [-1,0], [0,-1], [0,1]];
const arr =[];
arr.push([0, 0, 0]);
visited[0][0][0] = 1;

function bfs() {
    let idx = 0;

    while (idx !== arr.length) {
        const [y, x, cnt] = arr[idx];
        
        if (x === M-1 && y === N-1){
            return visited[y][x][cnt];
        }
        
        let nx, ny;
        for(let i = 0; i < 4; i++){
            nx = x + direction[i][0];
            ny = y + direction[i][1];

            if (nx<M && 0<=nx && ny<N && 0<=ny ){
                if (graph[ny][nx] === 0 && visited[ny][nx][cnt] === 0){
                    visited[ny][nx][cnt] = visited[y][x][cnt] + 1;
                    arr.push([ny, nx, cnt]);
                } else if ( graph[ny][nx]=== 1 && cnt === 0) {
                    visited[ny][nx][cnt+1] = visited[y][x][cnt] + 1;
                    arr.push([ny, nx, cnt+1]);
                }
            }
        }
        idx ++;
    }
    return -1;
}


console.log(bfs());
