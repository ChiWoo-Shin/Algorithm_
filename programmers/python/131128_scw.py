from collections import defaultdict

def solution(X, Y):
    answer = ''
    
    temp = defaultdict(int)
    temp2 = defaultdict(int)
    for i in X:
        temp[i] +=1
    
    for i in Y:
        if temp[i]>0:
            temp[i] -=1
            temp2[i] +=1
            
    for i in range(9,-1,-1):
        if temp2[str(i)]>0:
            answer += str(i)*temp2[str(i)]
        
    if answer =='':
        return '-1'
    elif len(answer) == answer.count('0'):
        return '0'

    return answer

print(solution('100', '2345'))