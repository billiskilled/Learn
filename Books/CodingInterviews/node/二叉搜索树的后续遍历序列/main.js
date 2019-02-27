function VerifySquenceOfBST(sequence) {
    if (!sequence || sequence.length <= 0) {
        return false;
    }

    let len = sequence.length;
    const theRoot = sequence[len - 1];

    let i = 0;
    for (;i < len - 1; i++) {
        if (sequence[i] > theRoot) {
            break;
        }
    }

    let j = i;
    for (;j < len - 1; j++) {
        if (sequence[j] < theRoot) {
            return false;
        }
    }

    let left = true;
    if (i > 0) {
        left = core(sequence.slice(0, i));
    }

    let right = true;
    if (i < len - 1) {
        right = core(sequence.slice(i, len - 1));
    }

    return left && right;
}

module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};