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

function quickSort(arr, start, end) {
    if (!arr) return [];

    let index = partition(arr, start, end);
    if (start < index) {
        quickSort(arr, start, index - 1);
    }
    if (index < end) {
        quickSort(arr, index + 1, end);
    }
}

let a = [2, 333, 1, 33, 98, 22, 2];
quickSort(a, 0, a.length - 1);
console.log(a);