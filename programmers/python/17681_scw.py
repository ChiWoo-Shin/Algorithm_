def solution(n, arr1, arr2):
    answer = ['']*n
    for i in range(n):
        x = str(format(arr1[i], 'b'))
        if len(x) <n:
            x = '0'*(n-len(x)) + x
        arr1[i] = list(x)

    for i in range(n):
        x = str(format(arr2[i], 'b'))
        if len(x) <n:
            x = '0'*(n-len(x)) + x
        arr2[i] = list(x)

    for i in range(n):
        for j in range(n):            
            if arr1[i][j] == arr2[i][j] =='0':
                answer[i] += ' '
            else:
                answer[i] += '#'

        
    return answer

print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))

# def solution(n, arr1, arr2):
#     answer = []
#     for i,j in zip(arr1,arr2): -- arr1과 arr2를 zip으로 묶음
#         a12 = str(bin(i|j)[2:]) -- i|j 를 이진수로 변환 후 앞에 '0b' 를 제거하기 위해 slicing
#         a12=a12.rjust(n,'0') -- rjust --> 오른쪽 정렬을 하면서 n자리수로 맞춤 빈 공간은 0으로 채움 --> ex) a12 = 1001 a12.rjust(5,'0') --> a12 == 01001 로 
#         a12=a12.replace('1','#')
#         a12=a12.replace('0',' ')
#         answer.append(a12)
#     return answer