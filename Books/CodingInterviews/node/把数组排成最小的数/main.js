function PrintMinNumber(numbers)
{
    let strArr = numbers.map(o => '' + o);
    strArr.sort((a, b) => {
        let ab = a + b;
        let ba = b + a;
        if (ab < ba) return -1;
        if (ab > ba) return 1;
        if (ab === ba) return 0;
    });

    let result = '';
    for(let i = 0; i < numbers.length; i++) {
        result += strArr[i];
    }
    return result;
}
module.exports = {
    PrintMinNumber : PrintMinNumber
};