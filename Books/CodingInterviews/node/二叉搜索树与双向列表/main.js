function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let pre = null;
function Convert(pRootOfTree)
{
    if (!pRootOfTree) return null;

    core(pRootOfTree);

    let head;
    while (pRootOfTree) {
        head = pRootOfTree;
        pRootOfTree = pRootOfTree.left;
    }
    pre = null;
    return head;
}

function core(node) {
    if (node.left) core(node.left);

    if (pre) pre.right = node;
    node.left = pre;
    pre = node;

    if (node.right) core(node.right);
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
Convert(root);

module.exports = {
    Convert : Convert
};