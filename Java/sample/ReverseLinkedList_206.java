package sample;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class ReverseLinkedList_206 {
    public static void main(String[] args) {
        ListNode n2 = new ListNode(3);
        ListNode n1 = new ListNode(2,n2);
        ListNode n0 = new ListNode(1,n1);

        System.out.print("list = ");
        showNodeList(n0);

        ListNode rev = reverseList(n0);
        
        System.out.print("reverse list = ");
        showNodeList(rev);

    }
    
    static ListNode reverseList(ListNode head) {
        Stack<Integer> stack = new Stack<>();
        if ( head == null ) return head;

        while ( head != null) {
            stack.add(head.val);
            head = head.next;
        }
        
        ListNode curr = new ListNode(stack.pop());
        ListNode newHead = curr;
        
        while ( !stack.isEmpty() ) {
            curr.next = new ListNode(stack.pop());
            curr = curr.next;
        }
        return newHead;
    }

    static void showNodeList( ListNode node){
        List<Integer> list = new ArrayList<>();
        while ( node != null) {
            list.add(node.val);
            node = node.next;
        }
        System.out.println(list);
    }
    
}
