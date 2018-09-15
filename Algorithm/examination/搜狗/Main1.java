import java.util.*;

public class Main1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        int[] arr = new int[5000000];
        n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        sc.close();

        int diffNumCount;
        HashSet<Integer> tempSet = new HashSet<>();

        for (int i = 0; i < n; i++) {
            tempSet.add(arr[i]);
        }
        diffNumCount = tempSet.size();

        int[][] tempResult = new int[5000000][];
        int aaa = 0;
        
        for (int i = 0; i < n; i++) {
            HashSet<Integer> newSet = new HashSet<>();
            for (int j = i; j < n; j++) {
                newSet.add(arr[j]);
                if (newSet.size() == diffNumCount) {
                    int[] startEnd = new int[2];
                    startEnd[0] = i;
                    startEnd[1] = j; 
                    tempResult[aaa++] = startEnd;
                    break;
                }
            }
        }

        int min = Integer.MAX_VALUE;
        for (int i = 0; i < aaa; i++) {
            int start = tempResult[i][0];
            int end = tempResult[i][1];

            if (end - start < min) {
                min = end - start;
            }
        }

        ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
        int resultNum = 0;
        for (int i = 0; i < aaa; i++) {
            int start = tempResult[i][0];
            int end = tempResult[i][1];

            if (end - start == min) {
                ArrayList<Integer> a = new ArrayList<Integer>();
                a.add(start);
                a.add(end);
                result.add(a);
                resultNum++;
            }
        }

        System.out.println("" + (min + 1) + " " + resultNum);
        for (ArrayList<Integer> a : result) {
            int start = a.get(0);
            int end = a.get(1);

            System.out.print("[" + (start + 1) + "," + (end + 1) + "] ");
        }
        System.out.println();
    }
}