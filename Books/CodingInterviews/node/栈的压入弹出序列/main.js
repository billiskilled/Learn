function IsPopOrder(pushV, popV)
{
    if (pushV === null && popV === null) {
        return true;
    } else if (pushV === null) {
        return false;
    } else if (popV === null) {
        return false;
    }

    if (pushV.length !== popV.length) {
        return false;
    }

    let stack = [];
    let stackLen = -1;

    let floor = 0;
    let ceil = pushV.length;

    for (let value of popV) {
        if (stack[stackLen] === value) {
            stack.pop();
            stackLen--;
        } else {
            while (floor < ceil) {
                if (pushV[floor] === value) {
                    floor++;
                    break;
                } else {
                    stack.push(pushV[floor++]);
                    stackLen++;
                }
            }
        }
    }
    if (stackLen === -1) {
        return true;
    } else {
        return false;
    }
}
// console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
module.exports = {
    IsPopOrder : IsPopOrder
};