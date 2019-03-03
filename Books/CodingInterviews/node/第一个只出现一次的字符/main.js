function FirstNotRepeatingChar(str)
{
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = {
                sum: 1,
                index: i
            }
        } else {
            obj[str[i]].sum = obj[str[i]].sum + 1;
        }
    }

    for(let char of str) {
        if (obj[char].sum === 1) {
            return obj[char].index;
        }
    }

    return -1;
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};