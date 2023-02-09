// const fs =require('fs');
// const input =fs.readFileSync("./Algorithm_/JS/1516_게임_개발/예제.txt").toString().trim().split("\n");
// const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const N = Number(input[0].trim())
// let visited = new Array(N+1).fill(0);

// let info = {}
// for (let i = 0; i < N; i++){
//     info[i+1] = input[i+1].trim().split(' ').map(Number)
// }

// function topology(need_time, k){
//     for(let j = 0; j < info[k].length; j++){
//         if (j === 0 && visited[k] ===0){
//             visited[k]=1
//             need_time =need_time + info[k][0];
//         }
//         else if(j>0){
//             if(info[k][j] === -1){
//                 return need_time
//             }
//             else{
//                 if (visited[info[k][j]]===0)
//                     need_time = topology(need_time, info[k][j])
//             }
//         }
//     }

//     return need_time
// }

// for (let i = 1; i< N+1; i++){
//     let need_time = 0;
//     visited.fill(0);
//     console.log(topology(need_time, i))
// }

const fs =require('fs');
const input =fs.readFileSync("./Algorithm_/JS/1516_게임_개발/예제.txt").toString().trim().split("\n");
// const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

const info = [];
input.map((x)=> {
    const tmp = x.split(' ').map(Number);
    info.push(tmp)
})

function solve(N, info){
    let graph = Array.from({length: N+1}, () => []);
    let degrees = Array(N + 1).fill(0); // 각 건물이 가지고 있는 간선의 개수
    let need_time = Array(N + 1).fill(0);
    let result = Array(N + 1).fill(0);
    let dq = [];

    for (let i=0; i< info.length; i++){
        need_time[i+1] = (info[i].shift()); // 각 건물이 짓는데 걸리는 시간
        const to = i +1; // 지어야할 건물 번호

        for (const from of info[i]){
            if(from === -1) continue; // -1이면 끝난거니깐 pass
            graph[from].push(to); // from은 to를 짓는데 필요한 건물
            degrees[to]++; // 해당 건물이 받은 간선의 개수
        }
    }

    for (let i =1; i< N+1; i++){
        // i 노드로 오는 간선의 개수가 0이라면
        // 받은 간선의 개수가 0이면 시작노드
        if (degrees[i] === 0){ 
            dq.push(i); // 시작노드를 저장
            result[i] = need_time[i]; // 시작 노드는 자기가 걸리는 시간이 끝이니깐
        }
    }

    while(dq.length>0){
        const s = dq.shift();

        for (let next of graph[s]){
            degrees[next]--; // s랑 이어지는 간선을 제거

            if (degrees[next]=== 0) // 간선이 다 지워졌으면 dq에 넣어주기
                dq.push(next);

            result[next] = Math.max(result[next], result[s] + need_time[next]);
        }
    }

    result.shift();
    console.log(result.join(' '));
}

solve(N,info);