#97~122

def solution(s, skip, index):
    answer = ''
    skip_list = ['']*len(skip)
    for i in range(len(skip)):
        skip_list[i] = ord(skip[i])
    
    for i in range(len(s)):
        x = ord(s[i])
        idx = index
        while idx>0:
            x +=1
            if x>122:
                x -=26
            
            while True:
                if x in skip_list:
                    x+=1
                    if x>122:
                        x -=26
                else:
                    break
            idx -=1
        
        answer +=chr(x)

    return answer

print(solution("aukks", "wbqd", 5))