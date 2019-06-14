package main

import (
    "math"
    "testing"
)

func TestMax(t *testing.T) {
    t.Log(math.MaxInt32)
    t.Log(math.MaxInt8)
    t.Log(math.MaxInt64)
    t.Log(math.MaxFloat32)
    t.Log(math.MaxUint32)
}
