package simple;

import java.util.*;


public class twoSum_1 {
    public static void main(String[] args) {
        int target = 17;
        int[] numbers = {2,6,11,15};
    
        System.out.println(Arrays.toString(twoSum1(numbers, target)));
    }

    public static int[] twoSum1(int[] numbers, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < numbers.length; i++) {
            if (map.containsKey(target - numbers[i])) {
                result[1] = i;
                result[0] = map.get(target - numbers[i]);
                return result;
            }
            map.put(numbers[i], i);
        }
        return result;
    }
    
    public static int[] twoSum2(int[] numbers, int target) {
        for(int i = 0; i < numbers.length; i++){
            for(int j = i+1; j < numbers.length; j++){
                if (target == numbers[i] + numbers[j]) {
                    return new int[]{i,j};
                }
            }
        }
        return new int[2];
    }
}
