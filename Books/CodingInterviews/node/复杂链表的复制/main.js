function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    if (!pHead) return null;

    let curNode = pHead;
    while (curNode) {
        const next = curNode.next;
        const newNode = new RandomListNode(curNode.label);
        curNode.next = newNode;
        newNode.next = next;
        curNode = next;
    }

    curNode = pHead;
    while (curNode) {
        curNode.next.random = curNode.random;
        curNode = curNode.next.next;
    }

    curNode = pHead;
    let newHead = pHead.next;

    while(curNode) {
        let newCurNode = curNode.next;

        curNode.next = newCurNode.next;
        
        newCurNode.next = newCurNode.next === null ? null : newCurNode.next.next;

        // 此处需要想好应该使用哪个指针
        curNode = curNode.next;
    }

    return newHead;
}
let node1 = new RandomListNode(1);
let node2 = new RandomListNode(2);
let node3 = new RandomListNode(3);
let node4 = new RandomListNode(4);
let node5 = new RandomListNode(5);
node1.next = node2;
node1.random = node3;
node2.next = node3;
node2.random = node5;
node3.next = node4;
node3.random = null;
node4.next = node5;
node4.random = node2;
node5.next = null;
node5.random = null;
Clone(node1);
module.exports = {
    Clone : Clone
};