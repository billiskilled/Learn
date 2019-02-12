function MoreThanHalfNum_Solution(numbers)
{
    if (!numbers) return 0;
    if (numbers.length <= 0) return 0;

    let sum = 0;
    let theNum;

    for (let i = 0; i < numbers.length; i++) {
        if (sum === 0) {
            theNum = numbers[i];
            sum++;
        } else {
            if (theNum === numbers[i]) {
                sum++;
            } else {
                sum--;
            }
        }
    }
    if (checkNumsAboveHalf(numbers, theNum)) {
        return theNum;
    } else {
        return 0;
    }
}

function checkNumsAboveHalf(numbers, theNum) {
    let times = 0;
    const numLen = numbers.length;
    for (let i = 0; i < numLen; i++) {
        if (numbers[i] === theNum) {
            times++;
        }
    }
    if (times * 2 > numLen) {
        return true;
    } else {
        return false;
    }
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};