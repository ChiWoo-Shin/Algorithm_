const fs =require('fs');
// const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
const input = Number(fs.readFileSync("./Algorithm_/JS/14226_이모티콘/예제.txt").toString().trim());

console.log(input, typeof(input))

let emo;
let clip;

let visited = new Array(1);
visited[(1,0)] =0
let arr =[]

function bfs (emo, clip){
    arr.push((emo, clip))

    while (arr){
        [emo, clip] = arr.shift();
    }
}

console.log(bfs(emo, clip));