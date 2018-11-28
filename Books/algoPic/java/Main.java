import java.util.*;

class Main {
    /**
    // 模板
    public static void main(String[] args) {
        long nanoTime = System.nanoTime();

        System.out.println("程序执行时间：" + System.nanoTime() - nanoTime);
    }
    */

    // 选择排序
    public static void main(String[] args) {
        // 二分查找算法
        int[] arr = {1,2,3,8,22,33,99};
        int resultBS = Search.binarySearch(arr, 4);
        System.out.println("resultBS:" + resultBS);

        // 选择排序（容器版）
        ArrayList<Integer> result;
        ArrayList<Integer> a = new ArrayList<Integer>();
        a.add(1);
        a.add(31);
        a.add(13);
        a.add(21);
        a.add(111);
        a.add(122);
        a.add(1423);
        a.add(2341);
        result = Sort.selectSort(a);
        System.out.println(result);

        // 选择排序（数组版）
        int[] intA = new int[] {1, 8, 5, 22, 99, 33};
        Sort.selectSortV2(intA);
        System.out.println(Arrays.toString(intA));

        // 快速排序
        int[] intB = {1, 8, 5, 22, 99, 33};
        Sort.quickSort(intB, 0, intB.length - 1);
        System.out.println(Arrays.toString(intB));
    }
}
