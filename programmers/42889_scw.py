from collections import deque

def solution(N, stages):
    answer = [0]*(N+1)
    answer_list=[]
    stages.sort()
    member = len(stages)

    stages = deque(stages)
    cnt=0
    sta=0
    
    while stages:
        x = stages.popleft()
        if x == N+1:
            answer[sta] = cnt/member
            break
        
        if sta ==0:
            sta = x
            cnt +=1
        elif sta == x:
            cnt+=1
        else:
            answer[sta] = cnt/member
            member -=cnt
            sta = x
            cnt = 1
        
        if len(stages) ==0:
            answer[sta] = cnt/member
    
    for idx, value in enumerate(answer):
        answer_list.append([idx, value])

    answer_list = sorted(answer_list[1:], key=lambda x : -x[1])

    answer=[]
    for i in range(len(answer_list)):
        answer.append(answer_list[i][0])


    return answer


print(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))