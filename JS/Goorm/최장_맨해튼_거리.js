// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface(
		{ input: process.stdin});
	
	
	for await (const line of rl) {
		// 여기서부터
		let answer_re =0;
		const arr = line.split(' ').map(Number);
		
		for(let i = 1; i<4; i++){
			let answer =[];
			let temp = 0;
			answer.push(arr[0])
			answer.push(arr[i])
			
			arr.map((x) => {
				if(!answer.includes(x))
					answer.push(x)
			});
			
			temp = Math.abs(answer[0]-answer[1]) + Math.abs(answer[2]-answer[3]);
			answer_re = Math.max(answer_re,temp);
		}
												
		console.log(answer_re)
		//여기까지
		rl.close();
	}
	process.exit();
})();
