package simple;

import java.util.*;

public class BinaryTreePreorderTraversal_144 {
    // -------------------------------------- recursion
    static List<Integer> ans = new ArrayList<>();
    
    static void dfs( TreeNode node ) {
        if ( node == null ) {
            return;
        }

        ans.add(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    public static void main(String[] args) {
        TreeNode rootRightRight = new TreeNode();
        TreeNode rootRightLeft = new TreeNode(3);
        TreeNode rootRight = new TreeNode(2,rootRightLeft,rootRightRight);
        TreeNode rootLeft = new TreeNode();
        TreeNode root = new TreeNode(1, rootLeft, rootRight);

        List<Integer> result = new ArrayList<>();

        result = preorderTraversal(root);

        System.out.println(result);
        
        
    }


    static List<Integer> preorderTraversal(TreeNode root) {
        // -------------------------------------- recursion
        dfs(root);
        return ans;
    }
}
