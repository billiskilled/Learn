package main

import "fmt"

func main () {
    var a = [7]int{3, 6, 4, 0, 3, 5, 3}
    if hasRepetitiveEle (a) {
        fmt.Println("Repetitive!")
    } else {
        fmt.Println("Not repetitive!")
    }
}

func hasRepetitiveEle (a [7]int) bool {
    aLen := len(a)
    for i := 0; i < aLen; i++ {
        for a[i] != i {
            index := a[i]
            if a[index] == index {
                return true
            } else {
                temp := a[index]
                a[index] = index
                a[i] = temp
            }
        }
    }
    return false
}
