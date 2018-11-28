public class Search {
    public static int binarySearch (int[] arr, int item) {
        int len = arr.length;

        int low = 0;
        int high = len - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (arr[mid] == item) {
                return mid;
            }
            if (arr[mid] < item) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}
