public class Test {
    public static void main(String[] args) {
        System.out.println(a());
    }

    public static int a() {
        int i  = 0;
        try {
            i++;
            throw new Exception("e");
        } catch (Exception e) {
            return i++;
        } finally {
            i++;
        }
    }
}