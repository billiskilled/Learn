function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    const stack = [];
    inner(stack, head);
    return stack;
}

function inner(stack, node) {
    if (node === null) return;
    inner(stack, node.next);
    stack.push(node.val);
}

let a = new ListNode(1);
a.next = new ListNode(2);
console.log(printListFromTailToHead(a));

module.exports = {
    printListFromTailToHead : printListFromTailToHead
};