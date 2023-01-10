package simple;

import java.lang.reflect.Array;
import java.util.*;
import simple.twoSum_1;

public class test {
    public static void main(String[] args) {
        // int target = 26;
        // int[] numbers = {0,2,7,26};
    
        // int[] result = twoSum.twoSum1(numbers,target);
        // System.out.println(Arrays.toString(result));

        String[] arrList = new String[]{"abd","abe","acf"};
        int arrlen = arrList[0].length();
        System.out.println(arrlen);

        int[][] points = {{2,15,20,20},{1,10,20}};
        System.out.println(Arrays.toString(points[0]));
        System.out.println(Arrays.toString(points[1]));
        System.out.println(Arrays.deepToString(points));
        Arrays.sort(points, (a, b) -> (a.length - b.length) );
        // Arrays.sort(points); // throw error, cause 
        System.out.println(Arrays.deepToString(points));
        
        int[] dot = {1,4,9,3,2,0};
        // Arrays.sort(dot);
        // System.out.println(Arrays.toString(dot));

        int[] dot2 = {2,5,10,4,3,1};

        ArrayList<Integer> diff = new ArrayList<>();

        // for (int i = 0; i < dot.length; i++) {
        //     diff.add(i, dot[i] - dot2[i]);
        // }
        
        // System.out.println(diff);
        

        int[] gas = {1,2,3,4,5};
        int[] cost = {3,4,5,1,2};
        for (int i = 0; i < gas.length; i++) {
            diff.add(i, gas[i] - cost[i]);
        }

        System.out.println(diff);

        int diffsum = 0;
        for (int i = 0; i < diff.size(); i++){
            // System.out.println(diffsum);
            diffsum = diffsum + diff.get(i);
            // System.out.println(diffsum);
        }
        System.out.println(diffsum);

        int maxdiff = Collections.max(diff);
        System.out.println("maxdiff = " + maxdiff);
        
        List<String> list = new ArrayList<>();

        // add elements to the list
        list.add("A");
        list.add(null);
        list.add("B");
        list.add(null);
        list.add("C");
  
        // print the list
        System.out.println(list);

        //------------------------------------------------- stack prac
        List<Integer> listNodeValue = new ArrayList<>();


        //  1
        //   \
        //    2
        //   /
        //  3
        TreeNode rootRightRight = new TreeNode();
        TreeNode rootRightLeft = new TreeNode(3);
        TreeNode rootRight = new TreeNode(2,rootRightLeft,rootRightRight);
        TreeNode rootLeft = new TreeNode();
        TreeNode root = new TreeNode(1, rootLeft, rootRight);

        Stack<TreeNode> sn = new Stack<>();
        sn.add(root);

        while ( !sn.isEmpty() ) {
            TreeNode current = sn.peek();
            sn.pop();
            if ( current != null ) {
                listNodeValue.add(current.val);
                sn.add(current.right);
                sn.add(current.left);
            }
        }

        System.out.println("listNodeValue = " + listNodeValue);
    }
}