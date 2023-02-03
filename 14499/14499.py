# 주사위 굴리기
import sys

input=sys.stdin.readline

N,M,x,y,o=map(int,input().strip().split())

A=[] # 지도 정보
for i in range(N):
    A.append(list(map(int,input().strip().split())))

command=list(map(int,input().strip().split())) # 커맨드

direction=[(0,1),(0,-1),(-1,0),(1,0)] # 굴리는 방향
dice=[0,0,0,0,0,0]

def throw_dice(i): # 굴렸을때 주사위에 있는 값의 변화 위치
    a,b,c,d,e,f=dice[0],dice[1],dice[2],dice[3],dice[4],dice[5]
    if i==1: # 동
        dice[0],dice[1],dice[2],dice[3],dice[4],dice[5]=d,b,a,f,e,c
    elif i==2: # 서
        dice[0],dice[1],dice[2],dice[3],dice[4],dice[5]=c,b,f,a,e,d
    elif i==3: # 북
        dice[0],dice[1],dice[2],dice[3],dice[4],dice[5]=e,a,c,d,f,b
    elif i==4: # 남
        dice[0],dice[1],dice[2],dice[3],dice[4],dice[5]=b,f,c,d,a,e

nx,ny=x,y
for i in command:
    nx=nx+direction[i-1][0]
    ny=ny+direction[i-1][1]

    if 0<=nx<N and 0<=ny<M: # 주사위 이동 방향이 지도 안에서 안 벗어나면
        throw_dice(i) # 주사위를 던지고
        print(dice[0]) # 위에 값 추출
        if A[nx][ny]==0: # 바닥이 0이면
            A[nx][ny]=dice[-1] # 주사위 값 넣고
        else:
            dice[-1]=A[nx][ny] # 0이 아니면 지도 값을 주사위 바닥에 넣고
            A[nx][ny]=0 # 지도는 0으로
    else: # 주사위 이동 방향이 지도 밖이면
        nx=nx-direction[i-1][0] # 이동한거 취소
        ny=ny-direction[i-1][1]