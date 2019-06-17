package testsyncpool

import (
	"fmt"
	"sync"
	"testing"
)

func TestSyncPool(t *testing.T) {
	pool := &sync.Pool{
		New: func() interface{} {
			fmt.Println("New")
			return 1000
		},
	}

	fmt.Println(pool.Get().(int))

	pool.Put(3)
	// runtime.GC()
	fmt.Println(pool.Get().(int))
}

func TestMulSyncPool(t *testing.T) {
	pool := &sync.Pool{
		New: func() interface{} {
			fmt.Println("New")
			return 1000
		},
	}

	pool.Put(3)
	pool.Put(3)
	pool.Put(3)

	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			fmt.Println(pool.Get().(int))
			wg.Done()
		}()
	}
	wg.Wait()
	fmt.Println("Finished!")
}
