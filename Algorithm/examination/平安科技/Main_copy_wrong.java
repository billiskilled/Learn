import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        ArrayList<String> s = new ArrayList<String>();

        while (sc.hasNext()) {
            s.add(sc.nextLine());
        }
        sc.close();

        int n = s.size() + 1;
        int sum = 0;

        HashMap<Integer, Integer> highMap = new HashMap<Integer, Integer>();
        HashMap<Integer, Integer> childMap = new HashMap<Integer, Integer>();

        for (int i = 0; i < n - 1; i++) {
            String theString = s.get(i);
            String[] nums = theString.split(" ");
            int parent = Integer.parseInt(nums[0]);
            int child = Integer.parseInt(nums[1]);

            if (childMap.get(parent) == null || childMap.get(parent) < 2) {
                int theNum = 0;
                if (childMap.get(parent) != null) {
                    int theValue = childMap.get(parent);
                    theNum = childMap.put(parent, theValue++);
                }
                childMap.put(parent, theNum);

                if (highMap.get(parent) == null) highMap.put(parent, 1);
                highMap.put(child, highMap.get(parent) + 1);
                sum = Math.max(highMap.get(child), sum);
            } else {
                childMap.put(child, Integer.MAX_VALUE);
                highMap.put(child, 0);
            }
        }

        System.out.println(sum);
    }
}