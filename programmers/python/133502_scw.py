from collections import deque

def solution(ingredient):
    answer = 0
    ingredient = deque(ingredient)

    stack =[]
    while ingredient:
        x = ingredient.popleft()
        if len(stack)<3:
            stack.append(x)
        else:
            if stack[-3::] == [1,2,3] and x ==1:
                answer +=1
                stack.pop()
                stack.pop()
                stack.pop()
            else:
                stack.append(x)

    return answer

print(solution([1, 2, 3, 1]))