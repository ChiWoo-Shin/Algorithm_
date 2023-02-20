def solution(arr):
    answer = []

    if len(arr) ==1:
        answer = [-1]
        return answer
    
    arr.remove(min(arr))
    answer = arr
    
    return answer


print(solution([4,3,2,1]))