package unsafe1

import (
	"fmt"
	"sync"
	"sync/atomic"
	"testing"
	"unsafe"
)

func TestUnsafe(t *testing.T) {
	var buffPtr unsafe.Pointer

	writeDataFunc := func() {
		var data []int
		data = make([]int, 100)
		for i := 0; i < 100; i++ {
			data[i] = i
		}
		atomic.StorePointer(&buffPtr, unsafe.Pointer(&data))
	}

	readDataFunc := func() {
		data := atomic.LoadPointer(&buffPtr)
		fmt.Println(data, *(*[]int)(data))
	}

	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			writeDataFunc()
			wg.Done()
		}()
		wg.Add(1)
		go func() {
			readDataFunc()
			wg.Done()
		}()
	}
}
