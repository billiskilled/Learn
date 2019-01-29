let num = -1;
let stackA = [];
let stackB = [];

function push(node)
{
    if (num < 0) {
        stackA[num + 1] = node;
        stackB[num + 1] = node;
        num++;
    } else {
        if (node < stackB[num]) {
            stackB[num + 1] = node;
        } else {
            stackB[num + 1] = stackB[num];
        }
        stackA[num + 1] = node;
        num++;
    }
}

function pop()
{
    if (num < 0) return null;

    const theValue = stackA[num];
    delete stackA[num];
    delete stackB[num];
    num--;
    return theValue;
}

function top()
{
    return stackA[num];
}

function min()
{
    return stackB[num];
}

module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};