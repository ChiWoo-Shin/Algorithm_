from collections import deque

def solution(s):
    answer_list =[]
    temp = ''
    s = deque(s)
    st_cnt=0
    other_cnt=0
    while s:
        x=s.popleft()
        
        if len(temp)==0:
            start = x
            st_cnt=1
            other_cnt=0
            temp+=x
        
        elif start == x:
            st_cnt+=1
            temp+=x
            if st_cnt == other_cnt:
                answer_list.append(temp)
                temp=''

        else:
            other_cnt+=1
            temp+=x
            if st_cnt == other_cnt:
                answer_list.append(temp)
                temp=''
    
    if len(temp)>0:
        answer_list.append(temp)
        

    return len(answer_list)

print(solution("abracadabra"))