package main

import "fmt"

func main() {
    var a = 0
    var b = 1

    var n int

    fmt.Scanln(&n)

    fmt.Print(b)
    for i := 1; i < n; i++ {
        temp := b
        b = a + b
        a = temp
        fmt.Print(" ", b)
    }
}
