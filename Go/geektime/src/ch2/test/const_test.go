package const_test

import "testing"

func TestConst(t *testing.T) {
    const (
        A = iota
        B = iota
        C = iota
        D = iota
    )

    t.Log(A)
    t.Log(B)
    t.Log(C)
}

func TestBit(t *testing.T) {
    const (
        A = 1 >> iota
        D
        E
    )

    t.Log(A)
    t.Log(D)
    t.Log(E)
}
