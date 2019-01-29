function Find(target, array)
{
    array = array || [];
    let lowNum = array.length;
    array[0] = array[0] || [];
    let colNum = array[0].length;

    let curLow = 0;
    let curCol = colNum - 1;
    while (curLow < lowNum && curCol >= 0) {
        if (array[curLow][curCol] === target) {
            return true;
        }

        if (array[curLow][curCol] > target) {
            curCol--;
        } else {
            curLow++;
        }
    }
    return false;
}
module.exports = {
    Find : Find
};