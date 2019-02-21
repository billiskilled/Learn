/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    if (!pHead) return null;

    let preNode = null;
    let curNode = pHead;
    let repeatValue = null;

    while(curNode !== null) {
        let nextNode = curNode.next;
        if (nextNode === null) {
            if (curNode.val === repeatValue) {
                if (!preNode) {
                    pHead = nextNode;
                } else {
                    preNode.next = nextNode;
                }
            }
        } else {
            if (curNode.val === nextNode.val || curNode.val === repeatValue) {
                repeatValue = curNode.val;

                if (!preNode) {
                    pHead = nextNode;
                } else {
                    preNode.next = nextNode;
                }
            } else {
                repeatValue = null;
                preNode = curNode;
            }
        }
        
        curNode = nextNode;
    }

    return pHead;
}
module.exports = {
    deleteDuplication : deleteDuplication
};