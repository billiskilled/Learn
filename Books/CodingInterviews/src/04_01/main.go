package main

import "fmt"

func main () {
    var arr = [4][4]int {{1, 2, 8, 9}, {2, 4, 9, 12}, {4, 7, 10, 13}, {6, 8, 11, 15}}
    if findEle(arr, 7) {
        fmt.Println("ok")
    } else {
        fmt.Println("wrong")
    }
}

func findEle (arr [4][4]int, ele int) bool {
    var len = 4
    var res = false

    var low = 0
    var col = len - 1
    for low < len && col >= 0 {
        if (arr[low][col] == ele) {
            res = true
            break
        }
        if (arr[low][col] > ele) {
            col--
        } else {
            low++
        }
    }
    return res
}
