public static boolean isPalindrome(ListNode head) {
    ListNode hou=head;
    ListNode qian=head;
    
    if(qian==null||qian.next==null)     //0 or 1 node
        return true;


    while(qian.next!=null&&qian.next.next!=null)
    {
        qian=qian.next.next;
        hou=hou.next;
    }
    //reverse last part list
    ListNode zhongjianNode=hou;
    ListNode houYiNode=hou.next;         //first last part node
    ListNode cur=houYiNode.next;
    houYiNode.next=null;
    while(cur!=null)
    {
        ListNode nextNode=cur.next;
        cur.next=zhongjianNode.next;
        zhongjianNode.next=cur;
        cur=nextNode;
    }
    
    //compare after reverse
    hou=head;
    qian=zhongjianNode.next;
    while(qian!=null)
    {
        if(qian.val!=hou.val)
            return false;
        hou=hou.next;
        qian=qian.next;
    }
    return true;
    
}
