function solution(s){
    var checking =0;
    
    for (const bracket of s){
        if (bracket =='('){
            checking++;
        }
        else{
            checking--;
        }
        if(checking<0){
            return false
        }
    }
    return checking ===0;
}

console.log(solution("()()"))

// function solution(s){
//     var checking =0;
    
//     for(let i = 0; i<s.length; i++){
//         if(s[i] == '('){
//             checking++;
//         } else {
//             checking--;
//         }
//         if (checking <0){
//             return false
//         }
//     }

//     return checking === 0;
// }