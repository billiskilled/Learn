package main

import (
    "fmt"
)

func main() {
    aArr := []int{1, 2, 3, 4, 5, 6}
    bArr := aArr[2: 4]

    bArr[0] = 33

    fmt.Printf("aArr: %d\n", aArr[2])
    fmt.Printf("bArr: %d\n", bArr[0])
}
