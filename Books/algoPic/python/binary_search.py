def binary_search(array, item):
    low = 0
    high = len(array) - 1

    while low <= high:
        mid = (low + high) // 2
        if array[mid] == item:
            return mid
        if array[mid] > item:
            low = mid + 1
        else:
            high = mid - 1

    return None

a = [1, 3, 7, 10, 20, 33, 44, 86, 98, 100]

print(binary_search(a, 80))
