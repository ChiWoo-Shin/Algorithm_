const fs =require('fs');
// const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input =fs.readFileSync("./ALGORITHM-STUDY/8595/예제.txt").toString().trim().split("\n");

let len = Number(input[0].trim());
input.shift();
var answer =[];

for(let i =0; i< len; i++){
    if(input[0][i].charCodeAt(0)<58 && 48<=input[0][i].charCodeAt(0)){
        if (i>0){
            if(input[0][i-1].charCodeAt(0)<58 && 48<=input[0][i-1].charCodeAt(0))
                answer[answer.length-1] = answer[answer.length-1]* 10 + Number(input[0][i]);
            else
                answer.push(Number(input[0][i]));    
        }
        else
            answer.push(Number(input[0][i]));
    }
}
let sum_answer=0;
for(let i =0; i< answer.length;i++){
    sum_answer+=answer[i];
}

console.log(sum_answer);