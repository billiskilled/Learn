/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let tempNode;
    let preNode = pHead;
    pHead = null;

    while (preNode !== null) {
        tempNode = preNode;
        preNode = preNode.next;
        tempNode.next = pHead;
        pHead = tempNode;
    }

    return pHead;
}
module.exports = {
    ReverseList : ReverseList
};