function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    let result = null;
    if (pHead1 === null) {
        return pHead2;
    }
    if (pHead2 === null) {
        return pHead1;
    }

    if (pHead1.val <= pHead2.val) {
        result = pHead1;
		pHead1 = pHead1.next;
    } else {
        result = pHead2;
		pHead2 = pHead2.next;
    }
    let temp = result;

    while (pHead1 !== null && pHead2 !== null) {
        if (pHead1.val <= pHead2.val) {
            temp.next = pHead1;
            temp = pHead1;
            pHead1 = pHead1.next;
        } else {
            temp.next = pHead2;
            temp = pHead2;
            pHead2 = pHead2.next;
        }
    }
    if (pHead1 === null) {
        temp.next = pHead2;
    } else {
        temp.next = pHead1;
    }
    return result;
}

let p = new ListNode(1);
p.next = new ListNode(2);
p.next.next = new ListNode(4);
let n = new ListNode(3);
n.next = new ListNode(5);
let a = Merge(p, n);
// let a = Merge(null, new ListNode(2));
while (a !== null) {
    console.log(a.val);
    a = a.next;
}