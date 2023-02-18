from collections import deque

def solution(babbling):
    answer = 0
    pron = ["aya", "ye", "woo", "ma"]

    for word in babbling:
        prev=''
        word = deque(word)
        temp=''
        while word:
            x = word.popleft()
            if len(temp)==0:
                temp +=x
            else:
                temp+=x
                if temp in pron and prev != temp:
                    prev = temp
                    temp=''
        if temp == '':
            answer +=1

    return answer


print(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))