function ReverseSentence(str)
{
    if (!str) return '';

    const strArr = str.split(' ');
    for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
        [strArr[i], strArr[strArr.length - 1 - i]] = [strArr[strArr.length - 1 -i], strArr[i]];
    }
    return strArr.join(' ');
}

console.log(ReverseSentence('you are good'));
module.exports = {
    ReverseSentence : ReverseSentence
};