package main

import (
	"fmt"
	"math/rand"
	"time"
)

func quick_sort(arr []int, start int, end int) {
	var index = quick_sort_core(arr, start, end)
	if index-1 > start {
		quick_sort(arr, start, index-1)
	}
	if index+1 < end {
		quick_sort(arr, index+1, end)
	}
}

func quick_sort_core(arr []int, start int, end int) int {
	var rand_gen = rand.New(rand.NewSource(time.Now().UnixNano()))
	var random_index = rand_gen.Intn(end-start+1) + start
	var the_value = arr[random_index]
	arr[random_index], arr[end] = arr[end], arr[random_index]

	var flag_index = start - 1
	for i := start; i <= end; i++ {
		if arr[i] < the_value {
			arr[i], arr[flag_index+1] = arr[flag_index+1], arr[i]
			flag_index++
		}
	}

	flag_index++
	arr[flag_index], arr[end] = arr[end], arr[flag_index]

	return flag_index
}

func main() {
	arr := []int{1, 9, 0, 3, 2, 2, 8, 7, 99, -3}
	quick_sort(arr, 0, len(arr)-1)
	fmt.Printf("%v\n", arr)
}
