const fs =require('fs');
// const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input =fs.readFileSync("./Algorithm_/JS/1963_소수경로/예제.txt").toString().trim().split("\n");
let NUM = Number(input[0].trim())


// 에라토스테네스의 체
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

function bfs(s, e, cnt){
    cnt +=1;
    let temp="";
    let str_cnt=0;
    let dq=[];
    for(let i = 0; i < decimal.length; i++){
        str_cnt=0;
        temp=String(decimal[i]);
        for(let j =0; j< 4; j++){
            if(s[j] === temp[j]){
                str_cnt +=1;
            }
        }
        if(str_cnt === 3){
            dq.push([decimal[i], cnt]);
            decimal[i] = false;
        }
    }
    
    while (dq.length>0) {
        let mid, cnt;
        [mid, cnt] = dq.shift();
        mid = String(mid)
        if(mid === e){
            return console.log(cnt);
        }
        
        cnt +=1;
        let temp_2="";
        for(let i = 0; i < decimal.length; i++){
            str_cnt=0;
            temp_2=String(decimal[i]);
            for(let j =0; j< 4; j++){
                if(mid[j] === temp_2[j]){
                    str_cnt +=1;
                }
            }
            if(str_cnt === 3){
                dq.push([decimal[i], cnt]);
                decimal[i] = false;
            }
        }
    }

    
    return console.log("Impossible");
}

let isPrimes=[];
let decimal=[];

for(let i=1; i<NUM+1; i++){
    const [s, e] = input[i].trim().split(" ")
    isPrimes = solution(9999);
    decimal = isPrimes.map((v, i) =>(v)? i: 0).filter(e=>e>1000);
    if(s === e){
        console.log(0)
    } else {
        bfs(s, e, 0)
    }
}
