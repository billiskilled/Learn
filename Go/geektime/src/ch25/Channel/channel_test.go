package channel_test

import (
	"fmt"
	"testing"
	"time"
)

func service() string {
	// fmt.Println("start service")
	time.Sleep(50 * time.Millisecond)
	// fmt.Println("end service")
	return "service"
}

func asyncService() chan string {
	var ch = make(chan string)

	go func() {
		rest := service()
		fmt.Println("asyncService start")
		ch <- rest
		fmt.Println("asyncService end")
	}()
	return ch
}

func otherTask() {
	fmt.Println("start task")
	time.Sleep(100 * time.Millisecond)
	fmt.Println("end task")
}

// func TestChannel(t *testing.T) {
// 	var ch = make(chan string)
// 	ch <- service()
// 	fmt.Println(<-ch)
// 	otherTask()
// }

func TestAsyncChannel(t *testing.T) {
	ch := asyncService()
	otherTask()
	fmt.Println(<-ch)
}
