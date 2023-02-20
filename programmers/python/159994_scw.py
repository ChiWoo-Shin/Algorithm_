from collections import deque

def solution(cards1, cards2, goal):
    answer = 'Yes'

    cards1 = deque(cards1)
    cards2 = deque(cards2)
    goal = deque(goal)

    while goal:
        goal_top = goal.popleft()

        if len(cards1)>0 and goal_top == cards1[0]:
            cards1.popleft()
        elif len(cards2)>0 and goal_top == cards2[0]:
            cards2.popleft()
        else:
            answer = 'No'
            break

    return answer

print(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))