function GetNumberOfK(data, k)
{
    if (!data) return 0;

    let start = 0;
    let end = 0;

    start = getFirst(data, k, 0, data.length - 1);
    if (start === -1) return 0;
    end = getLast(data, k, 0, data.length - 1);
    return (end - start + 1);
}

function getFirst(data, k, start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (data[mid] < k) {
        return getFirst(data, k, mid + 1, end);
    } else if (data[mid] > k) {
        return getFirst(data, k, start, mid - 1);
    } if (data[mid] === k) {
        if (mid === 0) return mid;
        else {
            if (data[mid - 1] === data[mid]) {
                return getFirst(data, k, start, mid - 1);
            } else {
                return mid;
            }
        }
    }
    return -1;
}

function getLast(data, k, start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (data[mid] < k) {
        return getLast(data, k, mid + 1, end);
    } else if (data[mid] > k) {
        return getLast(data, k, start, mid - 1);
    } if (data[mid] === k) {
        if (mid === data.length - 1) return mid;
        else {
            if (data[mid + 1] === data[mid]) {
                return getLast(data, k, mid + 1, end);
            } else {
                return mid;
            }
        }
    }
    return -1;
}

console.log(GetNumberOfK([1,2, 3, 3,3,3, 4,5], 3));

module.exports = {
    GetNumberOfK : GetNumberOfK
};