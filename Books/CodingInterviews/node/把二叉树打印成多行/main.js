/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    if (!pRoot) return [];

    const result = [];

    const theQueue = [];
    theQueue[0] = [];
    theQueue[1] = [];

    let level = 0;
    theQueue[level].push(pRoot);
    while (theQueue[level].length > 0 || theQueue[1 - level].length > 0) {
        const nextLevel = 1 - level;

        const curArray = [];
        while (theQueue[level].length > 0) {
            const theNode = theQueue[level].shift();
            curArray.push(theNode.val);
            if (theNode.left) theQueue[nextLevel].push(theNode.left);
            if (theNode.right) theQueue[nextLevel].push(theNode.right);
        }

        level = 1 - level;
        result.push(curArray);
    }

    return result;
}
module.exports = {
    Print : Print
};