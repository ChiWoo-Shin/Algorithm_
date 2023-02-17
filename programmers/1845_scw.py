def solution(nums):
    answer = 0
    select_cnt = len(nums)//2
    nums = set(nums)
    if len(nums) <= select_cnt:
        answer = len(nums)
    else:
        answer = select_cnt

    return answer

print(solution([3,1,2,3]))