// Run by Node.js --1
// const readline = require('readline');

// (async () => {
//     let rl = readline.createInterface({ input: process.stdin });

//     let N, M;
//     let _array = [];
//     let cnt = 0;

//     for await (const line of rl) {

//         if (cnt === 0) {
//             [N, M] = line.split(' ').map(Number);
//         } else {
//             if (!_array[line.length])
//                 _array[line.length] = [];
//             _array[line.length].push(line);
//             _array[line.length].sort();
//         }
//         cnt++;

//         if (cnt === N + 1) {
//             // close the input stream
//             rl.close();
//             break;
//         }

//     }

//     let num = 0;
//     _array.map((x) => {
//         for (const word of x) {
//             if (num === M - 1)
//                 console.log(word)
//             num++;
//         }
//     })

//     process.exit();
// })();


// Run by Node.js


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N, M;
let _array = [];
let cnt = 0;

rl.on("line", function (line) {
    if (cnt === 0) {
        [N, M] = line.split(' ').map(Number);
    } else {
        if (!_array[line.length])
            _array[line.length] = [];
        _array[line.length].push(line);
    }
    cnt++;

    if (cnt === N + 1) {
        rl.close();
    }

}).on("close", function () {
    _array.map((x) => {
        x.sort();
    });

    let num = 0;
    _array.map((x) => {
        for (const word of x) {
            if (num === M - 1)
                console.log(word)
            num++;
        }
    });

    process.exit();
});
