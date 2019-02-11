function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    let result = false;
    if (pRoot1 === null) return result;
    if (pRoot2 === null) return result;
    if (pRoot1.val === pRoot2.val) {
        result = DoTree1HasTree2(pRoot1, pRoot2);
    }
    if (!result) {
        result = HasSubtree(pRoot1.left, pRoot2);
    }
    if (!result) {
        result = HasSubtree(pRoot1.right, pRoot2);
    }
    return result;
}
function DoTree1HasTree2(pRoot1, pRoot2) {
    if (pRoot2 === null) return true;
    if (pRoot1 === null) return false;

    if (pRoot1.val === pRoot2.val) {
        return DoTree1HasTree2(pRoot1.left, pRoot2.left) && DoTree1HasTree2(pRoot1.right, pRoot2.right);
    } else {
        return false;
    }
}
module.exports = {
    HasSubtree : HasSubtree
};