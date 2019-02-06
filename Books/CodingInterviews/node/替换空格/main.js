function replaceSpace(str)
{
    if (str === null) return null;

    const strArray = str.split('');
    let strOriLen = str.length;
    let spaceNum = 0;
    for (let i = 0; i < strOriLen; i++ ) {
        if (strArray[i] === ' ') {
            spaceNum++;
        }
    }
    let strNewLen = strOriLen + 2 * spaceNum;
    strNewLen--;
    for (let i = strOriLen - 1; i >= 0; i--) {
        if (strArray[i] === ' ') {
            strArray[strNewLen--] = '0';
            strArray[strNewLen--] = '2';
            strArray[strNewLen--] = '%';
        } else {
            strArray[strNewLen--] = strArray[i];
        }
    }
    return strArray.join('');
}

console.log(replaceSpace('ab cd'));
module.exports = {
    replaceSpace : replaceSpace
};