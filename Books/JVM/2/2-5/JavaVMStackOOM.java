/**
 * java -Xss2M JavaVMStackOOM 
 */
public class JavaVMStackOOM {
    public void runObj () {
        while (true) {

        }
    }

    public void runThread () {
        while (true) {
            Thread thread = new Thread(new Runnable(){
            
                @Override
                public void run() {
                    runObj();
                }
            });
            thread.start();
        }
    }

    public static void main(String[] args) {
        JavaVMStackOOM s = new JavaVMStackOOM();
        s.runThread();
    }
}