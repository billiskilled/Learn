import java.util.*;

public class Sort {
    public static ArrayList<Integer> selectSort(ArrayList<Integer> al) {
        int len = al.size();

        ArrayList<Integer> newAl = new ArrayList<Integer>();
        for (int i = 0; i < len; i++) {
            int minItem = al.get(0);
            int theIndex = 0;
            for (int j = 0; j < al.size(); j++) {
                if (al.get(j) < minItem) {
                    minItem = al.get(j);
                    theIndex = j;
                }
            }
            newAl.add(minItem);
            al.remove(theIndex);
        }

        return newAl;
    }

    public static int[] selectSort(int[] a) {
        int len = a.length;

        int[] result = new int[len];
        int resultIndex = 0;
        for (int i = 0; i < len; i++) {
            int minItem = a[0];
            int theIndex = 0;

            for (int j = 0; j < a.length; j++) {
                if (a[j] < minItem) {
                    minItem = a[j];

                    theIndex = j;
                }
            }

            a[theIndex] = a[a.length - 1];
            a = Arrays.copyOf(a, a.length - 1);

            result[resultIndex++] = minItem;
        }
        return result;
    }

    public static void selectSortV2(int[] a) {
        int len = a.length;
        
        for (int i = 0; i < len; i++) {
            int minValue = a[i];
            int theIndex = i;
            for (int j = i; j < len; j++) {
                if (a[j] < minValue) {
                    minValue = a[j];
                    theIndex = j;
                }
            }
            int temp = a[i];
            a[i] = a[theIndex];
            a[theIndex] = temp;
        }
    }

    public static void quickSort(int[] a, int low, int high) {
        if (low >= high) return;

        int i = low, j = high;
        int temp = a[low];

        while (i < j) {
            while (a[j] > temp && i < j) {
                j--;
            }
            while (a[i] <= temp && i < j) {
                i++;
            }
            if (i < j) {
                int temp1 = a[i];
                a[i] = a[j];
                a[j] = temp1;
            }
        }
        a[low] = a[i];
        a[i] = temp;

        quickSort(a, low, i - 1);
        quickSort(a, i + 1, high);
    }
}
