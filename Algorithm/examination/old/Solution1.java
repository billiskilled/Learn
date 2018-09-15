import java.util.Scanner;

public class Solution {
    public static void replaceSpace(String str) {
        
        int len = str.length();
        int high = (len - 1) / 3;
        int space = 2 * (high - 1) + 1;
        char[] strArray = str.toCharArray();

        int temp = 0;
        int preSpace = 0;
        // 先打印Y上面的两个分叉
        for (int i = 0; i < high; i++) {
            for (int k = 0; k < preSpace; k++) {
                System.out.print(" ");
            }


            System.out.print(strArray[temp++]);
            for (int j = 0; j < space; j++) {
                System.out.print(" ");
            }
            System.out.print(strArray[temp++]);
            space -= 2;

            preSpace++;
            System.out.println();
        }

        for (int m = 0; m < high + 1; m++) {
            for (int k = 0; k < preSpace; k++) {
                System.out.print(" ");
            }
            System.out.print(strArray[temp++]);
            System.out.println();
        }

        return;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while(sc.hasNext()) {
            String s = sc.nextLine();
            replaceSpace(s);
        }

        sc.close();
    }
}