function FindGreatestSumOfSubArray(array)
{
    if (!array || array.length < 1) return -1;

    let result = Number.MIN_SAFE_INTEGER;

    if (allIsNegative(array)) {
        for(let i = 0; i < array.length; i++) {
            if (array[i] > result) {
                result = array[i];
            }
        }
        return result;
    }

    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];

        if (sum > result) {
            result = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
        
    }

    return result;
}

function allIsNegative(arr) {
    let hasPositive = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            hasPositive = true;
            break;
        }
    }
    return !hasPositive;
}

let a = [1,-2,3,10,-4,7,2,-5];
console.log(FindGreatestSumOfSubArray(a));

module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};