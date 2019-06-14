package once_test

import (
	"fmt"
	"sync"
	"testing"
	"unsafe"
)

type Singleton struct {
}

var once sync.Once

var singleInstance *Singleton

func getSingle() *Singleton {
	once.Do(func() {
		fmt.Println("create obj")
		singleInstance = new(Singleton)
	})
	return singleInstance
}

func TestOnce(t *testing.T) {
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			sing := getSingle()
			fmt.Printf("%x\n", unsafe.Pointer(sing))
			wg.Done()
		}()
	}
	wg.Wait()
}
