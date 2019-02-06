function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length === 0) return 0;

    let index1 = 0;
    let index2 = rotateArray.length - 1;
    let mid = index1;

    while (rotateArray[index1] >= rotateArray[index2]) {
        if (index2 - index1 <= 1) {
            mid = index2;
            break;
        }

        mid = Math.floor((index1 + index2) / 2);

        if (rotateArray[index1] === rotateArray[index2] &&
            rotateArray[index1] === rotateArray[mid]) {
                return minNumInOrder(rotateArray, index1, index2);
            }

        if (rotateArray[mid] >= rotateArray[index1]) {
            index1 = mid;
        } else if (rotateArray[mid] <= rotateArray[index2]) {
            index2 = mid;
        }
    }
    return rotateArray[mid];
}
function minNumInOrder(rotateArray, index1, index2) {
    let result = rotateArray[index1];
    for (let i = index1; i <= index2; i++) {
        if (rotateArray[i] < result) {
            return rotateArray[i];
        }
    }
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};