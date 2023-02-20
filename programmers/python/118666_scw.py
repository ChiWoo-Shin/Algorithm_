from collections import defaultdict

def solution(survey, choices):
    character = ['R','T','C','F','J','M','A','N']
    answer = ''

    dic = defaultdict(int)
    for i in range(len(survey)):
        if choices[i] == 4:
            continue
        elif choices[i]<4:
            if not dic[(list(survey[i]))[0]]:
                dic[(list(survey[i]))[0]] = 0
            dic[(list(survey[i]))[0]] += 4-choices[i]
        elif choices[i]>4:
            if not dic[(list(survey[i]))[0]]:
                dic[(list(survey[i]))[0]] = 0
            dic[(list(survey[i]))[1]] += choices[i]-4

    
    for i in range(0,len(character),2):
        if dic[character[i]] < dic[character[i+1]]:
            answer += character[i+1]
        elif dic[character[i]] >= dic[character[i+1]]:
            answer += character[i]

    return answer

print(solution(["AN", "CF", "MJ", "RT", "NA"], 	[5, 3, 2, 7, 5]))