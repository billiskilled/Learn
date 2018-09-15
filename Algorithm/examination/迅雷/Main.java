import java.util.*;

public class Main {
    static int zheng, fu;
    static ArrayList<ArrayList<Integer>> re = new ArrayList<ArrayList<Integer>> ();
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        zheng = sc.nextInt();
        fu = sc.nextInt();
        sc.close();

        ArrayList<ArrayList<Integer>> arr = new ArrayList<ArrayList<Integer>>();
        ArrayList<Integer> initList1 = new ArrayList<Integer> ();
        initList1.add(zheng);
        ArrayList<Integer> initList2 = new ArrayList<Integer> ();
        initList2.add(fu);
        
        arr.add(initList1);
        arr.add(initList2);

        makeArr(1 , arr);
        ArrayList<ArrayList<Integer>> resultArray = re;

        int theMax = Integer.MIN_VALUE;
        for (ArrayList<Integer> a : resultArray) {
            theMax = Math.max(theMax, addSumAll(a));
        }

        System.out.println(theMax);
    }

    public static void makeArr (int level, ArrayList<ArrayList<Integer>> arr) {
        if (level == 17) {
            re = new ArrayList<ArrayList<Integer>> (arr);
            return;
        }

        ArrayList<ArrayList<Integer>> newArr = new ArrayList<ArrayList<Integer>> ();
        for (ArrayList<Integer> a : arr) {
            ArrayList<Integer> tempA = new ArrayList<Integer> (a);
            tempA.add(zheng);
            if ((tempA.size() >= 7 && addSum(tempA.size(), tempA) < 0) || tempA.size() < 7) {
                newArr.add(tempA);
            }

            ArrayList<Integer> tempB = new ArrayList<Integer> (a);
            tempB.add(fu);
            if ((tempB.size() >= 7 && addSum(tempB.size(), tempB) < 0) || tempB.size() < 7) {
                newArr.add(tempB);
            }
        }

        makeArr(level + 1, newArr);
    }

    public static int addSum (int level, ArrayList<Integer> arr) {
        int start = level - 7;
        int end = level;

        int sum = 0;
        for (int i = start; i < end; i++) {
            sum += arr.get(i);
        }

        return sum;
    }

    public static int addSumAll (ArrayList<Integer> arr) {
        int sum = 0;
        for (int i : arr) {
            sum += i;
        }
        return sum;
    }
}