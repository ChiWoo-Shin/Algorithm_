const fs =require('fs');
// const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input =fs.readFileSync("./Algorithm_/JS/1269/예제.txt").toString().trim().split("\n");

const [A, B] = input[0].trim().split(' ').map(Number);

let A_list = input[1].trim().split(' ').map(Number);
let B_list = input[2].trim().split(' ').map(Number);

const A_set = new Set(A_list);
const B_set = new Set(B_list);


function check_count(setA, setB){
    let cnt =0;
    
    setB.forEach(e => {
        if(!setA.has(e)){
            cnt++;
        }
    })
    return cnt;
}


console.log(check_count(A_set, B_set) + check_count(B_set, A_set))