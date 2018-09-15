import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] list = new int[2000];
        for (int i = 0; i < n; i++) {
            list[i] = sc.nextInt();
        }
        int Q = sc.nextInt();
        for (int i = 0; i < Q; i++) {
            int l = sc.nextInt();
            int r = sc.nextInt();
            l--;
            r--;

            ArrayList subList = new ArrayList();
            for (int j = l; j <= r; j++) {
                subList.add(list[j]);
            }

            Set set = new HashSet(subList);
            System.out.println(set.size());
        }
    }
}