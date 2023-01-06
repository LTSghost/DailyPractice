package simple;

import java.util.*;
// import java.util.Collections;

public class AddTwoNumbers {
    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        ListNode l2 = new ListNode(6);
        ListNode l3 = new ListNode(3, l1); // 3, 1
        ListNode l4 = new ListNode(4,l2); 
        ListNode l5 = new ListNode(5,l4); // 5, 4, 6
        ArrayList result = new ArrayList<>();

        ListNode nn = addTwoNumbers(l5, l3);
        
        int count = 0;
        while ( nn != null) {
            result.add(count, nn.val);
            nn = nn.next;
            count += 1;
        }
        System.out.println(result);
    }
    static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int sum = 0;

            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }
            sum += carry;
            carry = sum / 10;
            ListNode node = new ListNode(sum % 10);
            curr.next = node;
            curr = curr.next;
        }
        return dummy.next;
    }
}
