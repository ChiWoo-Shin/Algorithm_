def solution(k, m, score):
    answer = 0
    score.sort()

    cnt=0
    while score:
        x = score.pop()
        cnt +=1
        if cnt ==m:
            answer+= x*m
            cnt=0

    return answer

print(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))