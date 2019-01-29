function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k)
{
    if (head === null || head === undefined) return null;
    if (k < 1) return null;

    let fast = head, slow = head;
    if (k > 1) {
        for (let i = 1; i < k; i++) {
            fast = fast.next
            if (fast === null) return null;
        }
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow.val;
}

let head = new ListNode(1);
let tail = head;
let temp = new ListNode(2);
tail.next = temp;
tail = tail.next;
temp = new ListNode(3);
tail.next = temp;
tail = tail.next;
temp = new ListNode(4);
tail.next = temp;
tail = tail.next;

console.log(FindKthToTail(head, 0));

module.exports = {
    FindKthToTail : FindKthToTail
};