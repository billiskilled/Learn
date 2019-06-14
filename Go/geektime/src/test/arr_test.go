package you

import (
	"fmt"
	"reflect"
	"testing"
)

func TestArr(t *testing.T) {
	const n = 11
	var arr = [...]int{1, 2}
	var part = []int{1, 2}
	fmt.Println(n)
	fmt.Println(arr)
	fmt.Println(reflect.TypeOf(arr))
	fmt.Println(reflect.TypeOf(part))
}

func TestArrDefine(t *testing.T) {
	var n = 10
	var res [...]int
	res = initArr(n)
	t.Log(res)
}

func initArr(n int) [...]int {
	const len = n
	var res [len]int
	return res
}
