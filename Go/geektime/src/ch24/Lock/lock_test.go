package lock_test

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func TestLock(t *testing.T) {
	res := 0
	var mu sync.Mutex
	for i := 0; i < 5000; i++ {
		go func() {
			defer func() {
				mu.Unlock()
			}()
			mu.Lock()
			res++
		}()
	}
	time.Sleep(100 * time.Millisecond)
	fmt.Println(res)
}
