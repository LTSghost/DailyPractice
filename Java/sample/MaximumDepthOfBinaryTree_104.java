package sample;

public class MaximumDepthOfBinaryTree_104 {
    public static void main(String[] args) {
        TreeNode rl = new TreeNode(2);
        TreeNode r = new TreeNode(1,rl,new TreeNode());

        System.out.println(maxDepth(r));
    }

    static int maxDepth( TreeNode root) {
        if ( root == null ) {
            return 0;
        }

        int left = 0, right = 0;
        if ( root.left != null ) {
            left = 1 + maxDepth(root.left);
        } else {
            left ++;
        }

        if ( root.right != null) {
            right = 1 + maxDepth(root.right);
        } else {
            right ++;
        }

        if ( left > right) {
            return left;
        } else {
            return right;
        }
    }
}
