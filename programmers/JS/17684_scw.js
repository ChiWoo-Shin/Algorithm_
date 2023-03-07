function solution(msg) {
    var answer = [];
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const dic ={};
    let cnt=1;

    for(let i =0;i<26;i++){
        dic[alpha[i]] = i+1
    }
    msg = [...msg];
    let str = '';
    while (msg.length>0){

        let x = msg.shift();
        str = x;
        if(dic[str]){
            while (true){
                let str2 = str+msg[0];
                if(dic[str2]){
                    str = str+msg[0];
                    msg.shift();
                } else{
                    answer.push(dic[str]);
                    dic[str2] = 26+cnt;
                    cnt++;
                    str='';
                    break;
                }
            }

        } 
    }

    return answer;
}


console.log(solution("ABABABABABABABAB"))