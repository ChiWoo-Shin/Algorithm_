function solution(n) {
    var answer = 0;
    var temp=0
    var temp_list=[]
    var flag=true
    for(let i =0; i<n+1;i++){
        temp +=i
        temp_list.push(i)
        if (temp === n){
            answer +=1
            flag = false
        }
        while(temp>n){
            var x = temp_list.shift()
            temp -=x
            flag=true
        }
        if (flag === true && temp ===n){
            answer+=1
        }
    }
    return answer;
}

console.log(solution(15))