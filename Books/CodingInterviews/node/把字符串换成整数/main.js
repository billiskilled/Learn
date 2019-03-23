function StrToInt(str)
{
    const strArr = str.split('');
    let result = 0;
    let flag = 1;

    for (let i = strArr.length - 1; i > 0; i--) {
        let cur = strArr[i];
        if ('0' < cur && cur < '9') {
            result += (Number(cur) * flag);
            flag *= 10;
        } else {
            return 0;
        }
    }

    if (strArr[0] === '-') {
        return -result;
    } else if (strArr[0] === '+') {
        return result;
    } else if ('0' < strArr[0] && strArr[0] < '9') {
        result += (Number(strArr[0]) * flag);
        return result;
    } else {
        return 0;
    }
}
module.exports = {
    StrToInt : StrToInt
};