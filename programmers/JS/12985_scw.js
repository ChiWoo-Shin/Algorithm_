function solution(n,a,b)
{
    var answer = 1;
    var temp=0;
    if (a>b){
        temp =a;
        a =b;
        b =temp;
    }
    if (a+1 === b){
        if (a%2 ===1){
            return answer;
        }
    }

    while (true){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
        if (a+1 === b){
            if (a%2 ===1){
                break;
            }
        }
    }
    
    return answer;
}

console.log(solution(8, 4, 7))


