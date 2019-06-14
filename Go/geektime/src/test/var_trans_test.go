package var_trans

import(
    "testing"
    "math"
)

func TestVarTrans(t *testing.T) {
    var a = 5

    t.Log(int(math.Sqrt(float64(a))))

    var b = 3.7
    t.Log(int(b))
}
