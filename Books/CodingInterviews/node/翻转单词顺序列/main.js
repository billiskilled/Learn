function ReverseSentence(str)
{
    if (!str) return '';
    let result = '';
    const strLen = str.length;

    let start = 0;
    let end = 0;

    
}

function reverse(str, start, end) {
    str = str.substr(str, start + end + 1);
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
module.exports = {
    ReverseSentence : ReverseSentence
};