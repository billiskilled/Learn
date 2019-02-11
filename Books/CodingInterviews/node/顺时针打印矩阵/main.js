function printMatrix(matrix) {
    if (matrix === null) return null;

    let cows = matrix.length;
    let cols;
    if (cows > 0) {
        cols = matrix[0].length;
    }

    let start = 0;
    let result = [];
    while (cows > start * 2 && cols > start * 2) {
        result = result.concat(printInCircle(matrix, start));
        start++;
    }
    // console.log(result.toString());
    return result;
}
function printInCircle(matrix, start) {
    let cows = matrix.length;
    let cols;
    if (cows > 0) {
        cols = matrix[0].length;
    }

    let endX = cols - 1 - start;
    let endY = cows - 1 - start;

    let result = [];

    for (let i = start; i <= endX; i++) {
        result.push(matrix[start][i]);
    }

    if (start < endY) {
        for (let i = start + 1; i <= endY; i++) {
            result.push(matrix[i][endX]);
        }
    }

    if (start < endY && start < endX) {
        for (let i = endX - 1; i >= start; i--) {
            result.push(matrix[endY][i]);
        }
    }

    if (start < endY - 1 && start < endX) {
        for (let i = endY - 1; i >= start + 1; i--) {
            result.push(matrix[i][start]);
        }
    }
    return result;
}
printMatrix([[1,2],[3,4],[5,6],[7,8],[9,10]]);
module.exports = {
    printMatrix: printMatrix
};