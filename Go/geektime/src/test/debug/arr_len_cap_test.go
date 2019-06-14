package arr_len_cap

import (
	"testing"
)

func Test(t *testing.T) {
	arr := make([]int, 5, 6)
	t.Log(len(arr), cap(arr))
	// t.Log(arr[3])
	arr = append(arr, 9)
	t.Log(len(arr), cap(arr))
	t.Log(arr[3])
	arr = append(arr, 7)
	t.Log(len(arr), cap(arr))
	t.Log(arr[4])
}
