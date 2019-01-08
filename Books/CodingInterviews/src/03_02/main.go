package main

import "fmt"

func main () {
    var a = []int {1, 9, 2, 3, 4, 4}
    fmt.Println(getDuplication(a))
}

func getDuplication(a []int) int {
    length := len(a)
    if (length <= 0) {
        return -1
    }

    start := 1
    var end = (length - 1)

    for end >= start {
        var mid = (end - start) / 2 + start

        var count = countRange(a, start, mid)

        if (end == start) {
            if (count > 1) {
                return start
            } else {
                break
            }
        }

        if (count > (mid - start + 1)) {
            end = mid
        } else {
            start = mid + 1
        }
    }
    return -1
}

func countRange(a []int, start int, end int) int {
    var length int = len(a)

    if (length == 0) {
        return -1
    }
    var count int = 0
    for i := 0; i < length; i++ {
        if (start <= a[i] && a[i] <= end) {
            count++
        }
    }

    return count
}
