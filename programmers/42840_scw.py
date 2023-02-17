import math

def solution(answers):
    answer = []
    student1 = [1,2,3,4,5]
    student2 = [2,1,2,3,2,4,2,5]
    student3 = [3,3,1,1,2,2,4,4,5,5]

    problerm = len(answers)

    if len(student1) < problerm:
        student1 = student1*(math.ceil(problerm/len(student1)))
    if len(student2) < problerm:
        student2 = student2*(math.ceil(problerm/len(student2)))
    if len(student3) < problerm:
        student3 = student3*(math.ceil(problerm/len(student3)))

    std1_a =0
    std2_a =0
    std3_a =0
    for i in range(problerm):
        if answers[i] == student1[i]:
            std1_a +=1
        if answers[i] == student2[i]:
            std2_a +=1
        if answers[i] == student3[i]:
            std3_a +=1
    
    temp = [[std1_a, 1], [std2_a, 2], [std3_a, 3]]

    temp.sort(key=lambda x: -x[0])

    answer=[temp[0][1]]

    for i in range(1,len(temp)):
        if temp[i][0] == temp[0][0]:
            answer.append(temp[i][1])
        else:
            break

    return answer

print(solution([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]))