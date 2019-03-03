/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    let len1 = GetListLen(pHead1);
    let len2 = GetListLen(pHead2);

    if (len1 >= len2) {
        for (let i = 0; i < len1 - len2; i++) {
            pHead1 = pHead1.next;
        }
    } else {
        for (let i = 0; i < len2 - len1; i++) {
            pHead2 = pHead2.next;
        }
    }

    if (pHead1 === pHead2) return pHead1;

    while (pHead1 && pHead2) {
        if (pHead1.next === pHead2.next) return pHead1.next;
        else {
            pHead1 = pHead1.next;
            pHead2 = pHead2.next;
        }
    }
    return null
}

function GetListLen(head) {
    let len = 0;
    while(head) {
        len++;
        head = head.next;
    }
    return len;
}

module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};