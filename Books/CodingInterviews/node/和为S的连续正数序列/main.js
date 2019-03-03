function FindContinuousSequence(sum)
{
    if (sum < 3) return [];

    let result = [];

    let curSum = 0;
    let start = 1;
    let end = 2;
    let middle = (sum + 1) / 2;
    curSum = start + end;

    while (start < middle) {
        if (curSum === sum) {
            const curResult = [];
            for (let i = start; i <= end; i++) {
                curResult.push(i);
            }
            result.push(curResult);
        }

        while (curSum > sum && start < middle) {
            curSum -= start;
            start++;

            if (curSum === sum) {
                const curResult = [];
                for (let i = start; i <= end; i++) {
                    curResult.push(i);
                }
                result.push(curResult);
            }
        }

        end++;
        curSum += end;
    }

    for (let i = 0; i < result.length; i++) {
        result[i].sort((a, b) => a - b);
    }
    result.sort((a, b) => a[0] - b[0]);
    return result;
}

module.exports = {
    FindContinuousSequence : FindContinuousSequence
};