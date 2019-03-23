function IsContinuous(numbers)
{
    if (!numbers || numbers.length <= 0) return false;

    numbers.sort((a, b) => a - b);

    let zeroNum = 0;
    let diff = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            zeroNum++;
        } else if (i > 0 && numbers[i - 1] !== 0) {
            if (numbers[i] === numbers[i - 1]) {
                return false;
            }
            diff += numbers[i] - numbers[i - 1] - 1;
        }
    }

    if (diff <= zeroNum) {
        return true;
    } else {
        return false;
    }
}

console.log(IsContinuous([0,3,2,6,4]));

module.exports = {
    IsContinuous : IsContinuous
};