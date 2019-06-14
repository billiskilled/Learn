package struct_test

import (
	"fmt"
	"testing"
	"unsafe"
)

type employee struct {
	Id   string
	Name string
	Age  int
}

func (e employee) String() string {
	fmt.Printf("The addr2: %x \n", unsafe.Pointer(&e.Name))
	return "you\n"
}

func TestStruct(t *testing.T) {
	e := employee{"1", "good", 3}
	fmt.Printf("The addr1: %x \n", unsafe.Pointer(&e.Name))
	t.Log(e.String())
}
