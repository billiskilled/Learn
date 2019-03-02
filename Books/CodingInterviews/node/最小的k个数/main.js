function GetLeastNumbers_Solution(input, k)
{
    if (!input || input.length < k) return [];

    core(input, 0, input.length - 1, k);

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(input[i]);
    }
    result.sort();
    return result;
}

function core(input, start, end, k) {
    if (!input || start > end || start < 0 || end > input.length) return null;

    let index = partition(input, start, end);

    if (index === k - 1) {
        return;
    }
    if (index < k - 1) {
        core(input, index + 1, end, k);
    }
    if (index > k - 1) {
        core(input, start, index - 1, k);
    }
}

function partition(input, start, end) {
    if (!input || start > end || start < 0 || input.length < end) return null;

    let randomIndex = Math.floor((end - start) * Math.random()) + start;
    [input[randomIndex], input[end]] = [input[end], input[randomIndex]];

    let small = start - 1;
    for (let i = start; i < end; i++) {
        if (input[i] < input[end]) {
            small++;
            [input[small], input[i]] = [input[i], input[small]]
        }
    }

    ++small;
    [input[small], input[end]] = [input[end], input[small]]

    return small;
}

module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};