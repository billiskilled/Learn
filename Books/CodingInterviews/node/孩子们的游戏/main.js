function Node(n) {
    this.val = n;
    this.next = null;
}

function LastRemaining_Solution(n, m)
{
    if (n < 1) return -1;
    if (n === 1) return 0;

    let head;
    let prev;
    for (let i = 0; i < n; i++) {
        let temp = new Node(i);
        if (i === 0) {
            head = temp;
            prev = temp;
        } else if (i === n - 1) {
            prev.next = temp;
            prev = temp;
            prev.next = head;
        } else {
            prev.next = temp;
            prev = temp;
        }
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < m - 1; j++) {
            prev = head;
            head = head.next;
        }
        head = head.next;
        prev.next = head;
    }

    return head.val;
}
module.exports = {
    LastRemaining_Solution : LastRemaining_Solution
};