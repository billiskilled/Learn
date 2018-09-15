public class Test {
    public int a () {
        static int i = 0;
        i++;
        return i;
    }

    public static void main(String[] args) {
        Test test = new Test();
        test.a();
        int j = test.a();
        System.out.println(j);
    }
}