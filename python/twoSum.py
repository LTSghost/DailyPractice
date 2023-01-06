target = 8
arr = [1,3,4,7]

def twoSum():
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if target == arr[i] + arr[j]:
                return [i,j]

print(twoSum())