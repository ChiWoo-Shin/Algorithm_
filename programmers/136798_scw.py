def find_divisor(n):
    divisor_list=[]
    k=1
    while k*k<=n:
        if n%k==0:
            divisor_list.append(k)
            divisor_list.append(n//k)
        k+=1
    return len(set(divisor_list))

def solution(number, limit, power):
    answer = []

    for i in range(1, number+1):
        if i==1:
            answer.append(i)
        else:
            x = find_divisor(i)
            if x>limit:
                answer.append(power)
            else:
                answer.append(x)

    return sum(answer)

print(solution(5,3,2))