package sample;

import java.util.*;

public class MergeTwoSortedLists_21 {

    public static void main(String[] args) {
        // 1 -> 2 -> 4
        ListNode l3 = new ListNode(4);    
        ListNode l2 = new ListNode(2,l3);
        ListNode l1 = new ListNode(1,l2);
    
        // 1 -> 2 -> 5
        ListNode r3 = new ListNode(5);
        ListNode r2 = new ListNode(2,r3);
        ListNode r1 = new ListNode(1,r2);

        List<Integer> show = new ArrayList<>();
        ListNode result = mergeTwoLists(l1, r1);

        while (result != null) {
            show.add(result.val);
            result = result.next;
        }
        System.out.println(show);

        // ArrayList<Integer> show = new ArrayList<>();
        // ListNode result = mergeTwoLists(l1, R1);
        // int i = 0;
        // while (result != null) {
        //     show.add(i, result.val);
        //     result = result.next;
        //     i++;
        // }
        // System.out.println(show);

    }

    static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode ans = new ListNode();
        ListNode current = ans;

        if ( list1 == null) {
            return list2;
        }
        if ( list2 == null) {
            return list1;
        }
        
        while ( list1 != null && list2 != null) {
            if ( list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if ( list1 != null ) {
            current.next = list1;
        } else {
            current.next = list2;
        }
        return ans.next;
    }
}
