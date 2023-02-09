const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, M;
let graph =[];
let cnt =0;
rl.on("line", function (line) {
	if (cnt === 0){
		[N, M] = line.split(' ').map(Number);	
	} else {
		graph.push(line.split(' ').map(Number));
	}
	cnt++;
	if(cnt === N+1){
		rl.close();		
	}
}).on("close", function () {
	
	let ant = [];
	let bug = [];
	let answer_cnt = 0;
	
	for (let i =0; i<N; i++){
		for (let j =0; j<N; j++){
			if(graph[i][j]===1){
				ant.push([i, j])
			}
			else if (graph[i][j]===2){
				bug.push([i, j])
			}
		}
	}
	
	while(ant.length){
		[x, y] = ant.shift();
		
		for(let i =0; i<bug.length;i++){
			if((Math.abs(x-bug[i][0]) + Math.abs(y-bug[i][1]))<=M){
				answer_cnt++;
				break;
			}
		}
	}
	
	console.log(answer_cnt);
	
	process.exit();
});

