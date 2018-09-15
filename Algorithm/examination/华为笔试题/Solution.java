import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int num = 0;
        char[] c = s.toCharArray();
        int len = c.length;

        int m = 0;
        String tmp = "";
        for (int i = 0; i < len; i++) {
            if (c[i] == '-') {
                m = 1;
                while (i + 1 < len) {
                    if (c[i + 1] == '-') {
                        m++;
                        i++;
                    } else {
                        break;
                    }
                }
                if (i + 1 < len && (c[i + 1] >= '0' && c[i + 1] <= '9')) {
                    tmp = "" + c[i + 1];
                    i++;

                    while (i + 1 < len) {
                        if (c[i + 1] >= '0' && c[i + 1] <= '9') {
                            tmp += c[i + 1];
                            i++;
                        } else {
                            break;
                        }
                    }
                }
                if (m % 2 == 0) {
                    num = num + Integer.parseInt(tmp);
                    tmp = "";
                    m = 0;
                }
                if (m % 2 == 1) {
                    num = num - Integer.parseInt(tmp);;
                    tmp = "";
                    m = 0;
                }

            } else if (c[i] >= '0' && c[i] <= '9') {
                tmp = "" + c[i];
                while (i + 1 < len) {
                    if (c[i + 1] >= '0' && c[i + 1] <= '9') {
                        tmp += c[i + 1];
                        i++;
                    } else {
                        break;
                    }
                }
                num = num + Integer.parseInt(tmp);
                tmp = "";

            } else {
                continue;
            }
        }
        System.out.println(num);
    }
}