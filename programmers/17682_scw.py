#48~57

def solution(dartResult):
    answer = []
    temp=0
    for i in range(len(dartResult)):
        if 48<=ord(dartResult[i])<=57:
            answer.append(temp)
            if 48<=ord(dartResult[i+1])<=57 or 48<=ord(dartResult[i-1])<=57:
                if 48<=ord(dartResult[i+1])<=57:
                    temp=0
                else:
                    temp=10
            else:
                temp=int(dartResult[i])
        elif dartResult[i] == 'S':
            temp = temp**1
            if i ==len(dartResult)-1:
                answer.append(temp)
        elif dartResult[i] == 'D':
            temp = temp**2
            if i ==len(dartResult)-1:
                answer.append(temp)
        elif dartResult[i] == 'T':
            temp = temp**3
            if i ==len(dartResult)-1:
                answer.append(temp)
        elif dartResult[i] == '*':
            temp = 2*temp
            answer[-1] = answer[-1]*2
            if i ==len(dartResult)-1:
                answer.append(temp)
        elif dartResult[i] == '#':
            temp =(-1)*temp
            if i ==len(dartResult)-1:
                answer.append(temp)


    return sum(answer)


# import re -- 특별한 풀이법

# def solution(dartResult):
#     bonus = {'S' : 1, 'D' : 2, 'T' : 3}
#     option = {'' : 1, '*' : 2, '#' : -1}
#     p = re.compile('(\d+)([SDT])([*#]?)')
#     dart = p.findall(dartResult)
#     for i in range(len(dart)):
#         if dart[i][2] == '*' and i > 0:
#             dart[i-1] *= 2
#         dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

#     answer = sum(dart)
#     return answer

print(solution("1D2S3T*"))