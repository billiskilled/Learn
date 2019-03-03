function FindNumbersWithSum(array, sum)
{
    if (!array) return [];

    let result = [];
    
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        if (array[start] + array[end] === sum) {
            result = [array[start], array[end]];
            break;
        } else if (array[start] + array[end] < sum) {
            start++;
        } else {
            end--;
        }
    }

    return result;
}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};