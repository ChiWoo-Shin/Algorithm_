# 테트로미노 - 진행중
import sys,heapq

input=sys.stdin.readline

N,M=map(int,input().strip().split())

graph=[]
for i in range(N):
    graph.append(list(map(int,input().strip().split())))

direction=[(0,1),(0,-1),(1,0),(-1,0)]

visited=[[0]*M for _ in range (N)]

answer=0
def bfs(x,y):
    
    temp=[]
    for dx,dy in direction:
        nx=x+dx
        ny=y+dy
        if 0<=nx<N and 0<=ny<M:
            heapq.heappush(temp,(-graph[nx][ny],nx,ny))
        _,nx,ny=heapq.heappop(temp)
        

    


visited[0][0]=1
bfs(0,0)