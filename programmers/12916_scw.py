def solution(s):
    answer = True
    
    s=s.lower()
    p_cnt = 0
    y_cnt = 0
    for i in s:
        if i =='p':
            p_cnt +=1
        elif i == 'y':
            y_cnt +=1
    
    if p_cnt != y_cnt:
        answer = False

    return answer

print(solution("pPoooyY"))