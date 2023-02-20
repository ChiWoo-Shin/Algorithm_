function solution(s) {
    var answer = '';
    var arr = s.split(' ');
    
    for(let i =0; i< arr.length;i++){
        arr[i] = arr[i].toLowerCase();
        if (arr[i].charCodeAt([0]) >57){
            arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
        };
    };
    
    answer = arr.join(' ');
    return answer;
}

console.log(solution("3people unFollowed me"))