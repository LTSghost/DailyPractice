package simple;

import java.util.*;

public class SameTree_100 {
    public static void main(String[] args) {
        TreeNode rootpr = new TreeNode(3);
        TreeNode rootpl = new TreeNode(3);
        TreeNode rootP = new TreeNode(5,rootpl, rootpr);

        TreeNode rootqr = new TreeNode(3);
        TreeNode rootql = new TreeNode(3);
        TreeNode rootq = new TreeNode(5,rootql, rootqr);

        boolean ans = sameTree(rootP, rootq);

        System.out.println(ans);

    }

    static Boolean sameTree(TreeNode p, TreeNode q) {
        if ( p == null && q == null ) {
            return true;
        }
        if ( p == null || q == null) {
            return false;
        }

        if ( p.val != q.val || 
            !sameTree(p.left,q.left) ||
            !sameTree(p.right, q.right) ) {
            return false;
        }
        return true;
    }
}
