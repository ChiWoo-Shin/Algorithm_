from collections import deque

def solution(new_id):
    answer = ''
    
    # 1단계 - 대문자를 소문자로
    new_id = new_id.lower()

    # 2단계 - 빼기, 밑줄, 마침표, 숫자, 알파벳 소문자를 제외한 모든 문자 제거
    # 3단계 - 마침표가 연속되어 있으면 한 개만 남기고 나머진 없애기
    # 4단계 - 마침표가 처음 또는 끝에 위치하면 제거
    new_id = deque(new_id)
    new_id2=[]
    while new_id:
        word= new_id.popleft()
        x = ord(word)
        if 97<=x<=122 or 48<=x<=57 or x==45 or x == 95 or x ==46:
            if len(new_id2) == 0 or len(new_id) == 0:
                if x == 46:
                    continue
                else:
                    new_id2.append(word)
            elif x == 46 and new_id2[-1] == word:
                continue
            else:
                new_id2.append(word)
    # 4단계 - 마침표가 처음 또는 끝에 위치하면 제거
    while new_id2:
        if new_id2[0] == '.':
            new_id2.popleft()
        if new_id2[-1] =='.':
            new_id2.pop()
        if new_id2[0] != '.' and new_id2[-1] !='.':
            break
    
    # 5단계 - id가 빈문자열이면 'a'를 대입
    if len(new_id2) ==0:
        new_id2.append('a')

    # 6단계 - id 길이가 16이상이면 15자만 남기고 나머지 제거
    if len(new_id2) >15:
        new_id2 = new_id2[:15]

    # 4단계 - 마침표가 처음 또는 끝에 위치하면 제거
    while new_id2:
        if new_id2[0] == '.':
            new_id2.popleft()
        if new_id2[-1] =='.':
            new_id2.pop()
        if new_id2[0] != '.' and new_id2[-1] !='.':
            break

    # 7단계 - id 길이가 2자 이하면, 마지막 문자를 복사해서 길이를 3으로 만들어줌
    if len(new_id2)<3:
        x = new_id2[len(new_id2)-1]
        for _ in range(3 - len(new_id2)):
            new_id2.append(x)

    answer = "".join(new_id2)
    return answer

print(solution(".!!..!."))