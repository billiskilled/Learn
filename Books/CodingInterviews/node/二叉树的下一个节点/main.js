/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    if (!pNode) return null;

    if (pNode.right) {
        let theNode = pNode.right;
        while (theNode.left) {
            theNode = theNode.left;
        }
        return theNode;
    } else {
        if (pNode.next === null || pNode === pNode.next.left) {
            return pNode.next;
        } else {
            let theParentNode = pNode.next;
            while (theParentNode.next !== null) {
                if (theParentNode === theParentNode.next.left) {
                    return theParentNode.next;
                }
                theParentNode = theParentNode.next;
            }
            return null;
        }
    }
}
module.exports = {
    GetNext : GetNext
};