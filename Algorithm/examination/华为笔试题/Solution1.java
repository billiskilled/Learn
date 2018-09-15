import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int high = 0;
        double[] a = new double[5];
        double[] b = new double[5];

        while (sc.hasNext()) {
            a[high] = sc.nextDouble();
            System.out.println(a[high]);
            b[high] = sc.nextDouble();
            high++;
        }
    }
}