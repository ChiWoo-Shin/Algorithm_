const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let cnt =0;
let N=0;
let question;

function solution(n){
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }

    return arr;
}

rl.on("line", function (line) {
	if(cnt === 0){
		N = Number(line.trim());
	} else{
		question = (line.split(' ').map(Number));
	}
	cnt++;
	if (cnt === 2){
		rl.close();	
	}
	
}).on("close", function () {
	let isPrimes = solution(N+1);
	let decimal=isPrimes.map((v, i) => (v) ? i : 0).filter(e => e);
	let answer =0;

	for (let i =0; i< question.length; i++){
		if (decimal.includes(i+1))
			answer += question[i]
	}
	
	console.log(answer)
	process.exit();
});