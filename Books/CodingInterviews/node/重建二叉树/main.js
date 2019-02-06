function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    return buildTree(vin, pre, 0, pre.length - 1);
}
function buildTree(elems, pre, preStartIndex, preEndIndex) {
    if (elems.length === 0 && preStartIndex === preEndIndex) return;

    const theVal = pre[preStartIndex];
    const index = elems.indexOf(theVal);
    const left = elems.slice(0, index);
    const right = elems.slice(index + 1, elems.length);

    const node = new TreeNode(theVal);
    if (left.length === 0) {
        node.left = null;
    } else {
        node.left = buildTree(left, pre, preStartIndex + 1, preStartIndex + left.length);
    }
    if (right.length === 0) {
        node.right = null;
    } else {
        node.right = buildTree(right, pre, preStartIndex + left.length + 1, preEndIndex);
    }
    return node;
}

/**
 * 用例
 */
function preC(node) {
    if (node === null) return;

    console.log(node.val);
    preC(node.left);
    preC(node.right);
}
let a = [1, 2, 3, 4, 5, 6, 7];
let b = [3, 2, 4, 1, 6, 5, 7];
const root = reConstructBinaryTree(a, b);

preC(root);

module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};