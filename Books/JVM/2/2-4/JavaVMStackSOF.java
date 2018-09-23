/**
 * 
 */
public class JavaVMStackSOF {
    private int stackLength = 0;

    public void a () {
        stackLength++;
        a();
    }

    public static void main(String[] args) throws Throwable {
        JavaVMStackSOF jvm = new JavaVMStackSOF();
        try {
            jvm.a();
        } catch (Throwable e) {
            System.out.println("Stack Length: " + jvm.stackLength);
            throw e;
        }
    }
}