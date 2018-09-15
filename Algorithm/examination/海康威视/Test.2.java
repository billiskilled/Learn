public class Test {
    public static int a (int i) {
        int result = 0;
        switch (i) {
            case 1:
                result = result + i;
            case 2:
                result = result + i*2;
            case 3:
                result = result + i*3;
        }
        return result;
    }

    public static void main(String[] args) {
        // Test test = new Test();
        // test.a();
        // int j = test.a();
        System.out.println(a(2));
    }
}