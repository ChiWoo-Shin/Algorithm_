def solution(t, p):
    answer = 0
    x = len(p)
    for i in range(len(t)-x+1):
        if int(t[i:i+x]) <=int(p):
            answer+=1

    return answer

print(solution("3141592", "271"))