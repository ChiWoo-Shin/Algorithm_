#65~90 A~Z
#97~122 a~z

def solution(s, n):
    answer = ''
    s_list = list(s)

    for i in range(len(s_list)):
        x = ord(s_list[i])
        if 65 <= x<=90:
            if x+n > 90:
                answer += chr(x+n-26)
            else:
                answer += chr(x+n)
        elif 97<=x <123:
            if x+n > 122:
                answer += chr(x+n-26)
            else:
                answer += chr(x+n)
        else:
            answer +=' '

    return answer

print(solution("z",1))