function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    let prev = null;
    while (head !== null) {
        let temp = head;
        head = head.next;
        temp.next = prev;
        prev = temp;
    }
    const returnArray = [];
    while (prev !== null) {
        returnArray.push(prev.val);
        prev = prev.next;
    }
    return returnArray;
}

let a = new ListNode(1);
a.next = new ListNode(2);
console.log(printListFromTailToHead(a));

module.exports = {
    printListFromTailToHead : printListFromTailToHead
};