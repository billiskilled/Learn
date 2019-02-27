function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let result = [];
let stack = [];
function FindPath(root, expectNumber)
{
    if (!root) return [];

    result = [];
    stack = [];
    FindPathCore(root, expectNumber);
    result.sort((a, b) => {
        return b.length - a.length;
    });
    return result;
}
function FindPathCore(root, expectNumber) {
    stack.push(root.val);
    const isLeaf = root.left === null && root.right === null;
    if (root.val === expectNumber && isLeaf) {
        result.push(stack.slice());
    } else {
        if (root.left) {
            FindPathCore(root.left, expectNumber - root.val);
        }
        if (root.right) {
            FindPathCore(root.right, expectNumber - root.val);
        }
    }
    stack.pop();
}
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);
console.log(FindPath(root, 15));

module.exports = {
    FindPath : FindPath
};