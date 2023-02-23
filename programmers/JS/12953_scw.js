function getGCD(a, b){
    if (b === 0){
        return a;
    } else {
        return getGCD(b, a%b);
    }
}

function getLCM(a, b){
    return a*b/getGCD(a,b);
}

function solution(arr) {
    var s = arr[0];
    for (let i = 1; i<arr.length; i++){
        s = getLCM(arr[i], s);
    }

    return s;
}

console.log(solution([2,6,8,14]))