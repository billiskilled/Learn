package reflecttest

import (
	"fmt"
	"reflect"
	"testing"
)

func TestReflect(t *testing.T) {
	// var i int
	// fmt.Scanf("%d", &i)
	var i = 33
	reflectParam(i)
}

func reflectParam(i interface{}) {
	t := reflect.TypeOf(i)
	k := t.Kind()
	switch k {
	case reflect.Float32, reflect.Float64:
		fmt.Println("Float")
	case reflect.Int, reflect.Int16:
		fmt.Println("Int")
	default:
		fmt.Println("Not Known")
	}
}
