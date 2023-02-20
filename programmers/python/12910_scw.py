def solution(arr, divisor):
    answer = []
    arr.sort()

    for i in arr:
        if i%divisor ==0:
            answer.append(i)
    if len(answer) ==0:
        answer = [-1]

    return answer

print(solution([3,2,6], 10))