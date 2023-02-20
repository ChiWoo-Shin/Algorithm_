from collections import deque

def solution(board, moves):
    answer =0
    bucket =[]
    moves = deque(moves)

    while moves:
        line = moves.popleft()
        for i in range(len(board)):
            if board[i][line-1] !=0:
                if len(bucket) ==0:
                    bucket.append(board[i][line-1])
                    board[i][line-1] =0
                    break
                elif bucket[-1] ==board[i][line-1]:
                    board[i][line-1] =0
                    bucket.pop()
                    answer +=2
                    break
                else:
                    bucket.append(board[i][line-1])
                    board[i][line-1] =0
                    break


    return answer

print(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]))