function duplicate(numbers, duplication)
{
    if (!numbers) return false;
    if (numbers.length <= 0) return false;

    for (let i = 0; i < numbers.length; i++) {
        let theNum = numbers[i];
        if (theNum !== i) {
            if (numbers[theNum] === theNum) {
                duplication[0] = theNum;
                return true;
            } else {
                while (theNum !== i) {
                    const newNum = numbers[theNum];
                    if (theNum !== newNum) {
                        numbers[theNum] = theNum;
                        theNum = newNum;
                    } else {
                        duplication[0] = theNum;
                        return true;
                    }
                }
            }
        }
    }
    return false;
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
}
let a = [];
console.log(duplicate([2,1,3,1,4], a));
console.log(a[0]);
module.exports = {
    duplicate : duplicate
};