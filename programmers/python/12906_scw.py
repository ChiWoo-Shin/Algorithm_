from collections import deque

def solution(arr):
    answer = []
    arr = deque(arr)
    answer.append(arr.popleft())
    
    while arr:
        x = arr.popleft()

        if answer[-1] != x:
            answer.append(x)
        
    return answer

print(solution([1,1,3,3,0,1,1]))