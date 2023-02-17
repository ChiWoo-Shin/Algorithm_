def solution(n, m):
    answer = []

    for i in range(n,0,-1):
        if n%i ==0 and m%i==0:
            answer.append(i)
            break
    mok =m
    while True:
        if mok%n ==0 and mok%m ==0:
            answer.append(mok)
            break
        mok+=1
    
    return answer

print(solution(3,12))