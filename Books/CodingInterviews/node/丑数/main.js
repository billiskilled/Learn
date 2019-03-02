function GetUglyNumber_Solution(index)
{
    if (index <= 0) return 0;

    let uglyArr = [1];

    let t2 = 0;
    let t3 = 0;
    let t5 = 0;

    while (uglyArr.length < index) {
        let next = min(uglyArr[t2] * 2, uglyArr[t3] * 3, uglyArr[t5] * 5);
        // console.log(next);
        uglyArr.push(next);
        let len = uglyArr.length;

        while (uglyArr[t2] * 2 <= uglyArr[len - 1]) {
            t2++;
        }
        while (uglyArr[t3] * 3 <= uglyArr[len - 1]) {
            t3++;
        }
        while (uglyArr[t5] * 5 <= uglyArr[len - 1]) {
            t5++;
        }
    }

    return uglyArr[uglyArr.length - 1];
}

// console.log(GetUglyNumber_Solution(5));

function min (a, b, c) {
    let min = a < b ? a : b;
    min = min < c ? min : c;
    return min;
}
module.exports = {
    GetUglyNumber_Solution : GetUglyNumber_Solution
};