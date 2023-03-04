function solution(s) {
    var answer = 0;
    let s_len = s.length;

    function check_bracket(mod_s) {
        let check_s = 0;
        let check_m = 0;
        let check_l = 0;
        
        for(let i=0;i<mod_s.length;i++) {
            if (mod_s[i] === '(') {
                check_s++;
            }
            else if (mod_s[i] === '{') {
                check_m++;
            }
            else if (mod_s[i] === '[') {
                check_l++;
            }
            else if (mod_s[i] === ')') {
                check_s--;
                if (check_s < 0) {
                    return false
                } else if (mod_s[i-1] === '{' || mod_s[i-1]==='['){
                    return false
                }
            }
            else if (mod_s[i] === '}') {
                check_m--;
                if (check_m < 0) {
                    return false
                } else if (mod_s[i-1] === '(' || mod_s[i-1]==='['){
                    return false
                }
            }
            else if (mod_s[i] === ']') {
                check_l--;
                if (check_l < 0) {
                    return false
                } else if (mod_s[i-1] === '{' || mod_s[i-1]==='('){
                    return false
                }
            }
        }
        if (check_l===0 && check_m===0 && check_s===0){
            return true
        } else{
            return false
        }
    }
    
    
    for (let i = 0; i < s_len; i++) {
        if(check_bracket(s)){
            answer++;
        }
        s=s.substr(1,s_len-1)+s[0];
    }

    return answer;
}

console.log(solution("{(})"))