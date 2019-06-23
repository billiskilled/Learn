package benchmarktest

import (
	"bytes"
	"testing"
)

func StrAdd() {
	var ret = ""
	var strArr = []string{"a", "b", "c", "d", "e"}
	for _, str := range strArr {
		ret += str
	}
}

func StrBuf() {
	var buf bytes.Buffer
	var strArr = []string{"a", "b", "c", "d", "e"}
	for _, str := range strArr {
		buf.WriteString(str)
	}
}

func BenchmarkAdd(b *testing.B) {
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		StrAdd()
	}
	b.StopTimer()
}

func BenchmarkBuf(b *testing.B) {
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		StrBuf()
	}
	b.StopTimer()
}
