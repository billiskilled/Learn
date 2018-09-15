import java.util.*;

public class Main {
    public static void main(String[] args) {
        int m;
        Scanner sc = new Scanner(System.in);

        m = sc.nextInt();

        int i,j,k;
        int result = 0;
        for (i = 1; i <= m; i++) {
            for (j = i; j <= m; j++) {
                for (k = j; k <= m; k++) {
                    if (i * i + j * j == k * k) {
                        if (isHuZhi(i, j) && isHuZhi(j, k) && isHuZhi(i, k)) {
                            result++;
                        } 
                    }
                }
            }
        }

        System.out.println(result);
    }

    public static boolean isHuZhi (int a, int b) {
        if(a < b) {
            int tmp = a;
            a = b;
            b = tmp;
        }
        int c;
        while((c = a % b) != 0) {
            a = b;
            b = c;
        }

        return b == 1;
    }
}