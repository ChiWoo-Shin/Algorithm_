from collections import defaultdict

def solution(n, words):
    answer = [0, 0]
    words_list_before = []
    pe_dict = defaultdict(int)
    pe_num =1
    
    for word in words:
        
        if len(words_list_before)>0:
            if word in words_list_before:
                answer = [pe_num, pe_dict[pe_num]+1]
                break
            
            elif word[0] != words_list_before[-1][-1]:
                answer = [pe_num, pe_dict[pe_num]+1]
                break
        
        if not pe_dict[pe_num]:
            pe_dict[pe_num] =1
        
        elif pe_dict[pe_num]:
            pe_dict[pe_num] +=1
        
        words_list_before.append(word)

        pe_num +=1
        if pe_num>n:
            pe_num=1
    
    return answer


print(solution(2, ['land', 'dream', 'mom', 'mom', 'ror']))