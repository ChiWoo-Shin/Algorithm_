from collections import deque

def solution(numbers, hand):
    L_P = [3, 0]
    R_P = [3, 2]
    answer = ''

    numbers = deque(numbers)

    while numbers:
        num = numbers.popleft()
        if num in [1, 4, 7]:
            answer += 'L'
            if num == 1:
                L_P = [0, 0]
            elif num == 4:
                L_P = [1, 0]
            else:
                L_P = [2, 0]
        elif num in [3, 6, 9]:
            answer += 'R'
            if num == 3:
                R_P = [0, 2]
            elif num == 6:
                R_P = [1, 2]
            else:
                R_P = [2, 2]
        else:
            if num == 2:
                L_D = abs(0-L_P[0]) + abs(1 - L_P[1])
                R_D = abs(0-R_P[0]) + abs(1 - R_P[1])
                if L_D == R_D:
                    if hand == 'right':
                        answer += 'R'
                        R_P = [0, 1]
                    else:
                        answer += 'L'
                        L_P = [0, 1]
                elif L_D < R_D:
                    answer +='L'
                    L_P = [0, 1]
                else:
                    answer +='R'
                    R_P = [0, 1]
            elif num == 5:
                L_D = abs(1-L_P[0]) + abs(1 - L_P[1])
                R_D = abs(1-R_P[0]) + abs(1 - R_P[1])
                if L_D == R_D:
                    if hand == 'right':
                        answer += 'R'
                        R_P = [1, 1]
                    else:
                        answer += 'L'
                        L_P = [1, 1]
                elif L_D < R_D:
                    answer +='L'
                    L_P = [1, 1]
                else:
                    answer +='R'
                    R_P = [1, 1]
            elif num == 8:
                L_D = abs(2-L_P[0]) + abs(1 - L_P[1])
                R_D = abs(2-R_P[0]) + abs(1 - R_P[1])
                if L_D == R_D:
                    if hand == 'right':
                        answer += 'R'
                        R_P = [2, 1]
                    else:
                        answer += 'L'
                        L_P = [2, 1]
                elif L_D < R_D:
                    answer +='L'
                    L_P = [2, 1]
                else:
                    answer +='R'
                    R_P = [2, 1]
            elif num == 0:
                L_D = abs(3-L_P[0]) + abs(1 - L_P[1])
                R_D = abs(3-R_P[0]) + abs(1 - R_P[1])
                if L_D == R_D:
                    if hand == 'right':
                        answer += 'R'
                        R_P = [3, 1]
                    else:
                        answer += 'L'
                        L_P = [3, 1]
                elif L_D < R_D:
                    answer +='L'
                    L_P = [3, 1]
                else:
                    answer +='R'
                    R_P = [3, 1]
                
    return answer



print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))