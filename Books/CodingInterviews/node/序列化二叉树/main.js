function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Serialize(pRoot)
{
    const arr = [];
    SerializeCore(pRoot, arr);
    return arr;
}
function SerializeCore(pRoot, arr) {
    if (!pRoot) {
        arr.push('$');
        return;
    }

    arr.push(pRoot.val);
    SerializeCore(pRoot.left, arr);
    SerializeCore(pRoot.right, arr);
}

function Deserialize(s)
{
    if (s.length <= 0) return null;

    let node = null;
    let num = s.shift();
    if (num === '$') {
        return null;
    }

    node = new TreeNode(+num);
    node.left = Deserialize(s);
    node.right = Deserialize(s);
    
    return node;
}

module.exports = {
    Serialize : Serialize,
    Deserialize : Deserialize
};