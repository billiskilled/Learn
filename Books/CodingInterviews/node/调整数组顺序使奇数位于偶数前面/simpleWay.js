function reOrderArray(array)
{
    let tempOdd = [];
    let tempEven = [];
    for(let a = 0; a < array.length; a ++) {
        if ((array[a] & 1) === 1) {
            tempOdd.push(array[a]);
        }
        if ((array[a] & 1) === 0) {
            tempEven.push(array[a]);
        }
    }
    return tempOdd.concat(tempEven);
}

let a = [1, 2,3,4,5,6,7];
console.log(reOrderArray(a));

module.exports = {
    reOrderArray : reOrderArray
};