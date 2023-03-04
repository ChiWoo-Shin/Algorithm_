// 11 16 19 20 실패

function solution(cacheSize, cities) {
    var answer = 0;
    var cache = [];
    
    if (cacheSize===0){
        return cities.length*5;
    }

    for (let i = 0; i < cities.length; i++) {
        let temp = cities[i].toLowerCase();
        if (cache.length < cacheSize) {
            let find_idx = cache.findIndex(x => x === temp);
            if (find_idx >= 0) {
                answer++;
                let tmp_cache = cache.splice(find_idx, 1)[0];
                cache.push(tmp_cache);
            } else {
                cache.push(temp);
                answer += 5;
            }
        }
        else {
            let find_idx = cache.findIndex(x => x === temp);
            if (find_idx >= 0) {
                answer++;
                let tmp_cache = cache.splice(find_idx, 1)[0];
                cache.push(tmp_cache);
            } else {
                cache.shift();
                cache.push(temp);
                answer += 5;
            }
        }
    }
    return answer;
}

console.log(solution(3, ["a", "b", "c", "a", "b", "d", "c"]))