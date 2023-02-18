from collections import defaultdict

def solution(id_list, report, k):
    answer = []
    answer_info = defaultdict(int)
    for i in id_list:
        answer_info[i] =0

    report_info=defaultdict(list)
    banner_info=defaultdict(int)
    report = set(report)
    for i in report:
        reporter, banner=i.split(" ")
        report_info[reporter].append(banner)
        if not banner_info[banner]:
            banner_info[banner]=0
        banner_info[banner]+=1

    for keys in banner_info:
        if banner_info[keys] >=k:
            for key in report_info:
                if keys in report_info[key]:
                    answer_info[key] +=1

    for key in answer_info:
        answer.append(answer_info[key])

    return answer

print(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))

# from collections import defaultdict

# def solution(id_list, report, k):
#     answer = []
#     answer_info = defaultdict(int)
#     for i in id_list:
#         answer_info[i] =0

#     report_info=defaultdict(list)
#     banner_info=defaultdict(int)

#     for i in report:
#         reporter, banner=i.split(" ")
#         if banner not in report_info[reporter]:
#             report_info[reporter].append(banner)
#             if not banner_info[banner]:
#                 banner_info[banner]=0
#             banner_info[banner]+=1

#     for keys in banner_info:
#         if banner_info[keys] >=k:
#             for key in report_info:
#                 if keys in report_info[key]:
#                     answer_info[key] +=1

#     for key in answer_info:
#         answer.append(answer_info[key])

#     return answer