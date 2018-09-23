import java.util.*;

/**
 * 执行命令： java -verbose:gc -Xms20m -Xmx20m -XX:+HeapDumpOnOutOfMemoryError HeapOOM
 */
public class HeapOOM {
    static class HeapOOMObject {
    }

    public static void main(String[] args) {
        List<HeapOOMObject> l = new ArrayList<HeapOOMObject>();
        while (true) {
            l.add(new HeapOOMObject());
        }
    }
}