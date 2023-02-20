def solution(food):
    answer = ''
    for i in range(1,len(food)):
        answer +=str(i)*(food[i]//2)
    
    real_answer =answer + '0' + "".join(reversed(answer))
    return real_answer


print(solution([1, 3, 4, 6]))