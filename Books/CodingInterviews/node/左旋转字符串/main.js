function LeftRotateString(str, n)
{
    if (!str) return '';
    if (n > str.length || n < 0) return '';

    str = reverse(str, 0, n - 1);
    str = reverse(str, n, str.length - 1);
    str = reverse(str, 0, str.length - 1);

    return str;
}
function reverse(str, start, end) {
    const strArr = str.split('');
    while (start < end) {
        let temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
    }
    return strArr.join('');
}

console.log(LeftRotateString('abcdefg', 2));

module.exports = {
    LeftRotateString : LeftRotateString
};