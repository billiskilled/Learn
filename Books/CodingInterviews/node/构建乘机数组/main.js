function multiply(array)
{
    if (!array) return null;
    const len = array.length;
    if (len <= 1) return null;

    let result = [];
    result[0] = 1;
    for (let i = 1; i < len; i++) {
        result[i] = result[i - 1] * array[i - 1];
    }

    let temp = 1;
    for (let i = len - 2; i >= 0; i--) {
        temp *= array[i + 1];
        result[i] *= temp;
    }

    return result;
}
module.exports = {
    multiply : multiply
};