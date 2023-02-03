# 시험감독
import sys

input=sys.stdin.readline

N = int(input().strip())

A = list(map(int,input().strip().split()))
B, C = map(int,input().strip().split())

temp=0
answer=0
for i in range(N):
    temp=A[i]-B
    answer+=1
    if temp>0:
        answer+=temp//C
        temp=temp%C
        if temp>0:
            answer+=1

print(answer)