function solution(s) {
    var answer = [];
    var total_zero =0;
    var temp_num=0
    var cnt =0

    while(true){
        cnt++;
        temp_num=0
        
        for (let i =0;i<s.length;i++){
            if(s[i] === '0'){
                total_zero++;
            } else {
                temp_num ++;
            }
        }
        
        s = (temp_num).toString(2);
        if (s === '1'){
            break;
        }
    }
    answer = [cnt, total_zero];
    return answer;
}



console.log(solution("01110"))


// function solution(s) {
//     var answer = [];
//     s = s.split('');
//     var total_length = s.length
//     var total_zero_cnt = 0
//     var zero_cnt = (s.filter(c => c ==='0')).length
//     var bin_num = (total_length - zero_cnt).toString(2);
//     var cnt = 1;
//     total_zero_cnt += zero_cnt

//     while (bin_num.includes('0')){
//         bin_num = bin_num.split('');
//         total_length = bin_num.length;
//         zero_cnt = (bin_num.filter(c => c==='0')).length
//         cnt ++;
//         total_zero_cnt += zero_cnt
//         bin_num = (total_length - zero_cnt).toString(2);
//     }

//     answer = [cnt, total_zero_cnt]
    
//     return answer;
// }