from collections import defaultdict

def solution(participant, completion):
    answer = ''
    comp_ = defaultdict(int)
    for i in completion:
        if not comp_[i]:
            comp_[i] =1
        else:
            comp_[i] +=1

    for i in participant:
        if comp_[i]:
            comp_[i] -=1
        else:
            answer = i

    return answer

# import collections

# def solution(participant, completion):
#     answer = collections.Counter(participant) - collections.Counter(completion)
#     return list(answer.keys())[0] -- 이러면 value가 1인 사람만 남음 거기에 0번은 이름임

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))