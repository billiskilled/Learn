import java.util.*;

public class TestArrayAndLinkedListEfficiency {
    public static void main(String[] args) {
        Object o = new Object();
        ArrayList a = new ArrayList();
        LinkedList b = new LinkedList();

        long t1 = System.currentTimeMillis();
        for (int i = 0; i < 50000000; i++) {
            a.add(i, o);
        }
        long t2 = System.currentTimeMillis() - t1;

        t1 = System.currentTimeMillis();
        for (int i = 0; i < 50000000; i++) {
            b.add(i, o);
        }
        long t3 = System.currentTimeMillis() - t1;

        System.out.println(t2 == t3);
        System.out.println("t2: " + t2 + ";t3:" + t3);
    }
}