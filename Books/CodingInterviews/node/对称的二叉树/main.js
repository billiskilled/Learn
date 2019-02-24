/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot)
{
    if (!pRoot) return true;

    return isSymmetricalCore(pRoot, pRoot);
}
function isSymmetricalCore(pRoot1, pRoot2) {
    if (pRoot1 === null && pRoot2 === null) return true;
    if (pRoot1 === null || pRoot2 === null) return false;
    if (pRoot1.val !== pRoot2.val) return false;

    return isSymmetricalCore(pRoot1.left, pRoot2.right) && isSymmetricalCore(pRoot1.right, pRoot2.left);
}
module.exports = {
    isSymmetrical : isSymmetrical
};