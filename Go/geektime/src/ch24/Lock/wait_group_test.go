package lock_test

import (
	"fmt"
	"sync"
	"testing"
)

func TestWaitGroup(t *testing.T) {
	res := 0
	var wg sync.WaitGroup
	var mu sync.Mutex
	for i := 0; i < 5000; i++ {
		wg.Add(1)
		go func() {
			defer func() {
				mu.Unlock()
			}()
			mu.Lock()
			res++
			wg.Done()
		}()
	}
	wg.Wait()
	// time.Sleep(100 * time.Millisecond)
	fmt.Println(res)
}
