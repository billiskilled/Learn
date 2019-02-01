/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    const stack = [];
    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }
    const returnValue = [];
    while (stack.length !== 0) {
        returnValue.push(stack.pop());
    }
    return returnValue;
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};