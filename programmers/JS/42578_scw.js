function solution(clothes) {
    var answer = 1;
    var dic ={};
    for (let i=0; i<clothes.length;i++){
        if(dic[clothes[i][1]]===undefined){
            dic[clothes[i][1]] = [clothes[i][0],'null']
        } else {
            dic[clothes[i][1]].push(clothes[i][0])
        }
    }

    for(const key in dic){
        answer *=dic[key].length
    }

    answer--;
    return answer;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))