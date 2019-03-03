/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    if (!pRoot) return 0;

    let left = TreeDepth(pRoot.left);
    let right = TreeDepth(pRoot.right);

    return (left > right) ? (left + 1) : (right + 1);
}
module.exports = {
    TreeDepth : TreeDepth
};