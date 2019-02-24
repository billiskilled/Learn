/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    let theStackOdd = [];
    let theStackEven = [];
    let isOdd = true;
    
    let result = [];

    if (!pRoot) return result;

    theStackOdd.push(pRoot);

    while (theStackOdd.length > 0 || theStackEven.length > 0) {
        if (isOdd) {
            const curArray = []
            while (theStackOdd.length > 0) {
                const curNode = theStackOdd.pop();
                curArray.push(curNode.val);
                if (curNode.left !== null) theStackEven.push(curNode.left);
                if (curNode.right !== null) theStackEven.push(curNode.right);
            }
            result.push(curArray);
            isOdd = !isOdd;
        } else {
            const curArray = []
            while (theStackEven.length > 0) {
                const curNode = theStackEven.pop();
                curArray.push(curNode.val);
                if (curNode.right !== null) theStackOdd.push(curNode.right);
                if (curNode.left !== null) theStackOdd.push(curNode.left);
            }
            result.push(curArray);
            isOdd = !isOdd;
        }
    }
    return result;
}
module.exports = {
    Print : Print
};