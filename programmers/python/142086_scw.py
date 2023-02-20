from collections import defaultdict

def solution(s):
    answer = []
    dic = defaultdict(list)
    for i in range(len(s)):
        if len(dic[s[i]])>0:
             answer.append(i - dic[s[i]][0])
             dic[s[i]][0] = i
        else:
            answer.append(-1)
            dic[s[i]].append(i)

    return answer

print(solution("aaaaabbbbb"))