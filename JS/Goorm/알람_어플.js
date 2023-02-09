// Run by Node.js

// 문제가 이상함 예시가 잘못됐음 k가 없는 경우들이 존재함

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let cnt =0;
let k =0;
let text ="";
rl.on("line", function(line) {
	if (cnt ===0 ){
		text = line
	} else {
		k = Number(line)
	}
	cnt++;
	if(cnt ===2)
		rl.close();
}).on("close", function() {
	let answer_list=[]
	for (let i =0; i< text.length; i++){
		for (let j = 0; j < text.length - i; j++){
			answer_list.push(text.substring(j,j+i+1))
		}
	}
	answer_list = new Set(answer_list);
	answer_list = Array.from(answer_list);
	answer_list.sort();
	
	console.log(answer_list[k-1]);
	process.exit();
});
