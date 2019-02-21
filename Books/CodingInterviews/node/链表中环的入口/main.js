/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    let meetingNode = _meetingNode(pHead);
    if (!meetingNode) return null;

    // 计算环的长度
    let tempNode = meetingNode;
    let loopLen = 1;
    while (tempNode.next !== meetingNode) {
        loopLen++;
        tempNode = tempNode.next;
    }

    // 寻找入口节点
    let fastNode = pHead;
    for (let i = 0; i < loopLen; i++) {
        fastNode = fastNode.next;
    }
    let slowNode = pHead;
    while (fastNode !== slowNode) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    return slowNode;
}

function _meetingNode(pHead) {
    if (!pHead) return null;

    let pFast = pHead.next;
    if (!pFast) return null;

    let pSlow = pHead;

    while (pFast !== pSlow) {
        pFast = pFast.next;
        if (!pFast) return null;
        
        pFast = pFast.next;
        if (!pFast) return null;

        pSlow = pSlow.next;
    }
    return pFast;
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};