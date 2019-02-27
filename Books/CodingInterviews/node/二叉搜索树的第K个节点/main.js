function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function KthNode(pRoot, k)
{
    function KthNodeCore(pRoot, k) {
        var node = null;
        if (pRoot) {
            node = KthNodeCore(pRoot.left, k);
            if (node) {
                return node;
            }
            count = count + 1;
            if (count === k) {
                return pRoot;
            }

            node = KthNodeCore(pRoot.right, k);
            if (node) {
                return node;
            }
        }
        return null;
    }
    let count = 0;
    return KthNodeCore(pRoot, k);
}

let root = new TreeNode(8);
root.left = new TreeNode(6);
root.right = new TreeNode(10);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(11);
console.log(KthNode(root, 1));


module.exports = {
    KthNode : KthNode
};