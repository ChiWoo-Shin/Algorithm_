// Run by Node.js

// 테스트는 전부 통과함 -- 제출시 틀림 - 예외케이스를 찾지 못함

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let cnt = 0;
let Num =0;
let question = [];

rl.on("line", function(line) {
	if (cnt === 0) {
		Num = Number(line)
	} else {
		question.push(line.split(' ').map(Number));
	}
	cnt++;
	if (cnt === Num*2 +1)
		rl.close();
}).on("close", function() {
	
	while(question.length){
		let [N, M ,K] = question.shift();
		let arr = question.shift();
		let standard = new Array(N).fill(0);
		let result = new Array(N).fill(0);
		let result_temp = [];
		let cnt = 0;
		
		let maxi = Math.max(...arr);
		
		if (maxi > M){
			if (M !== 0){
				cnt += (parseInt(maxi/M) +1);
				standard.fill(cnt*M);	
			} 
		}
		
		for(let i =0; i< standard.length; i++){
			result[i] = standard[i] - arr[i]
		}
		
		while(true){
			result_temp = result.filter(x => x !==0);
			let mini;
			
			if(result_temp.length>0)
				 mini = Math.min(Math.min(...result_temp), K);
			else{
				cnt++;
				result = result.map(x => x+M);
				result_temp = result.filter(x => x !==0);
				mini = Math.min(Math.min(...result_temp), K);
			}
				
			if(result_temp.length<3){
				cnt++;
				result = result.map(x => x+M)
			}
			
			
			let break_point =0;
			for (let i =0; i<result.length; i++){
				if(result[i] !==0){
					result[i] = result[i] - mini
					break_point++;
				}
				if(break_point ===3){
					K -=mini;
					break;
				}
			}
			
			if(K === 0){
				break;
			}
		}
		
		console.log(cnt)
	}
	

	process.exit();
});