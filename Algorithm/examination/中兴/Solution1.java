import java.util.*;

class Solution {
    static List<Integer> salaryfrequeny (int num, int[] salaries) {
        List<Integer> result = new ArrayList<> ();

        LinkedHashMap<Integer, Integer> map = new LinkedHashMap<> ();
        for (int i = 0; i < num; i++) {
            if (map.get(salaries[i]) == null) {
                map.put(salaries[i], 1);
            } else {
                int temp = map.get(salaries[i]);
                map.put(salaries[i], temp + 1);
            }
        }

        List<Integer> al = new ArrayList<> ();
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            al.add(entry.getValue());
        }

        Collections.sort(al);
        Collections.reverse(al);

        for (Integer i : al) {
            for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
                if (entry.getValue() == i) {
                    for (int j = 0; j < entry.getValue(); j++) {
                        result.add(entry.getKey());
                    }

                    entry.setValue(-1);
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int m = 19;
        int n[] = {10000, 20000, 40000, 30000, 30000, 30000, 40000, 20000, 50000, 50000, 50000, 50000, 60000, 60000, 60000, 70000, 80000, 90000, 100000};

        List<Integer> result = salaryfrequeny(m, n);
        System.out.println(result);
    }
}