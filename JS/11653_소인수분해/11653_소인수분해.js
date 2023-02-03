// const fs = require('fs');
// let input = fs.readFileSync("/dev/stdin").toString().trim();
let input = 9991;

let result = input;
let num = 2;

const solve = () => {
    for (let i = 2; i * i <= input; i++) {
        while (result % i === 0) {
            console.log(i)
            result = result / i
        }
    }
    if(result>1){
        console.log(result);
    }
    return 0;
}
solve()