package simple;

import java.util.*;
import simple.twoSum;

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
        Arrays.sort(dot);
        System.out.println(Arrays.toString(dot));

        
    }
}

