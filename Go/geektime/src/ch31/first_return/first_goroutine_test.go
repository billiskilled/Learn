package firstgoroutine

import (
	"fmt"
	"runtime"
	"strconv"
	"testing"
	"time"
)

func doneTask(i string) string {
	time.Sleep(50 * time.Millisecond)
	return "Done: " + i
}

func firstTask() string {
	ch := make(chan string, 10)
	for i := 0; i < 10; i++ {
		go func(i string) {
			ch <- doneTask(i)
		}(strconv.Itoa(i))
	}
	return <-ch
}

func TestFirst(t *testing.T) {
	fmt.Println(runtime.NumGoroutine())
	fmt.Println(firstTask())
	time.Sleep(100 * time.Millisecond)
	fmt.Println(runtime.NumGoroutine())
}
