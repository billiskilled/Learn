package unittest

import (
	"testing"
)

func TestSquare(t *testing.T) {
	var input = [...]int{1, 4, 8}
	var output = [...]int{1, 16, 64}

	for i := 0; i < len(input); i++ {
		if Square(input[i]) != output[i] {
			t.Errorf("input: %d, output: %d, actual: %d", input[i], output[i], Square(input[i]))
		}
	}
}
