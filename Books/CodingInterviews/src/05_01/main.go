package main

import "fmt"

func main () {
    var s = "We are happy."
    var result string

    result = replaceSpace(s)

    fmt.Println(result)
}

func replaceSpace(s string) string {
    sLen := len(s)

    var sArray []byte
    sArray = []byte(s)

    var spaceNum int
    for i := 0; i < sLen; i++ {
        if sArray[i] == 32 {
            spaceNum++
        }
    }

    newIndex := sLen + 2*spaceNum - 1
    var resArr [1000]byte
    for i := sLen - 1; i >= 0; i-- {
        if sArray[i] == 32 {
            resArr[newIndex] = 48
            newIndex--
            resArr[newIndex] = 50
            newIndex--
            resArr[newIndex] = 37
            newIndex--
        } else {
            resArr[newIndex] = sArray[i]
            newIndex--
        }
    }

    var resStr string
    resStr = string(resArr[:])

    return resStr
}
