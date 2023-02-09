// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
let graph = [];
let cnt = 0;
let queue = [];
let temp_queue = [];


rl.on("line", function (line) {
    if (cnt === 0) {
        N = Number(line.trim());

    } else {
        graph.push(line.split(' ').map(Number));
    }
    cnt++;

    if (cnt === N + 1) {
        rl.close();
    }
}).on("close", function () {

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] !== 0) {
                queue.push([i, j, 0])
            }
        }
    }

    let day = 0;
    let queue_len = 0;
    if (queue.length > 0) {
        while (true) {

            queue_len = queue.length;

            for (let i = 0; i < queue_len; i++) {
                [x, y, cnt] = queue.shift();
                let nx, ny;

                for (let j = 0; j < 4; j++) {
                    nx = x + direction[j][0];
                    ny = y + direction[j][1];

                    if (nx < N && 0 <= nx && ny < N && 0 <= ny) {
                        if (graph[nx][ny] === 0) {
                            cnt++;
                        }
                    }
                }
                queue.push([x, y, cnt]);
            }

            queue_len = queue.length

            for (let i = 0; i < queue_len; i++) {
                [x, y, cnt] = queue.shift();
                graph[x][y] -= cnt;

                if (graph[x][y] < 0) {
                    graph[x][y] = 0
                }

                if (graph[x][y] !== 0) {
                    queue.push([x, y, 0])
                }
            }

            day++;

            if (queue.length === 0) {
                console.log(day);
                break;
            }
        }
    } else {
        console.log(0);
    }

    process.exit();
});
