function FindNumsAppearOnce(array)
{
    const result = [];
    if (!array || array.length <= 0) return result;

    let result1;
    let result2;

    let temp = 0;

    for (let i = 0; i < array.length; i++) {
        temp = temp ^ array[i];
    }
    
    const theIndex = findFirstBitIs1(temp);
    for(let i = 0; i < array.length; i++) {
        if (bitIs1(array[i], theIndex)) {
            result1 ^= array[i];
        } else {
            result2 ^= array[i];
        }
    }

    result.push(result1, result2);
    return result;
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
}
function findFirstBitIs1(temp) {
    let index = 0;
    let flag = 1;
    while (flag) {
        if ((temp & flag)) {
            return index;
        }
        flag = flag << 1;
        index++;
    }
}
function bitIs1(num, index) {
    num = num >> index;
    return (num & 1);
}
module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};