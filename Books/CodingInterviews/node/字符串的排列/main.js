let result = [];

function Permutation(str)
{
    if (!str) return '';

    result = [];
    const strArr = str.split('');
    strArr.sort();
    core(strArr, 0);

    let resultSet = new Set(result);
    result = [...resultSet];
    result.sort();
    return result;
}
function core(strArr, start) {
    const len = strArr.length;
    if (len === start) {
        result.push(strArr.join(''));
    } else {
        for (let i = start; i < len; i++) {
            let temp = strArr[i];
            strArr[i] = strArr[start];
            strArr[start] = temp;

            core(strArr, start + 1);

            temp = strArr[i];
            strArr[i] = strArr[start];
            strArr[start] = temp;
        }
    }
}
console.log(Permutation('aa'));
module.exports = {
    Permutation : Permutation
};