import sys
from collections import deque
input=sys.stdin.readline

N, M = map(int, input().strip().split())

graph=[]
for i in range(N):
    graph.append(list(map(int ,list(input().strip()))))

direction = [(1,0),(-1,0), (0,1), (0,-1)]

def bfs(x,y,cnt):
    dq = deque()
    dq.append((x,y,cnt))

    while dq:
        x, y, cnt = dq.popleft()



print(bfs(0,0,1)) # 시작 좌표 0, 0 벽 부수는 게 가능한 개수 1
