package simple;

import java.util.Scanner;

public class Palindrome_Number {
    public static void main(String[] args) {
        System.out.println("Please input a number, judgement is Palindrome or not.");
        System.out.print(": ");
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        
        System.out.println(palindrome(input) ? "isPalindrome" : "Not");
    }

    static boolean palindrome(int input) {
        int newNumber = 0;
        int target = input;

        if(input < 0) return false;
        while(input > 0){
            int digit = input % 10;
            input /= 10;
            newNumber = newNumber * 10 + digit;
        }
        return newNumber == target;
    }
}
