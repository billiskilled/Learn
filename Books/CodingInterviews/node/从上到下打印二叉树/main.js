function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root)
{
    if (root === null) return [];
    let que = [];
    que.push(root);

    const result = [];
    while (que.length) {
        const theNode = que.shift();
        result.push(theNode.val);
        if (theNode.left) {
            que.push(theNode.left);
        }
        if (theNode.right) {
            que.push(theNode.right);
        }
    }
    return result;
}
let a = new TreeNode(1);
a.left = null;
a.right = new TreeNode(3);
PrintFromTopToBottom(a);
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};