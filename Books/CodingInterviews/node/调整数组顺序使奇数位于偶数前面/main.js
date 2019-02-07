function reOrderArray(array)
{
    if (array === undefined || array === null) return;
    if (array.length <= 0) return;

    let pre = 0;
    let last = array.length - 1;
    while (pre < last) {
        while (pre < last && isEven(array[pre])) {
            pre++;
        }
        while (pre < last && !isEven(array[last])) {
            last--;
        }

        if (pre < last) {
            let temp = array[pre];
            array[pre] = array[last];
            array[last] = temp;
        }
    }
    return;
}
function isEven(a) {
    if (a & 1 === 1) return true;
}

let a = [1,2,3,4,5,6,7];
reOrderArray(a);
console.log(a);

module.exports = {
    reOrderArray : reOrderArray
};