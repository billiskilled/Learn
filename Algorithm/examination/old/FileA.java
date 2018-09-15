import java.util.regex.*;
import java.util.*;
import java.io.*;

public class FileA {
    public static void main(String[] args) {
        File path = new File(".");
        String[] list;
        if (args.length == 0) {
            list = path.list();
        } else {
            list = path.list(new FileFilter(args[0] + ".*"));
        }
        Arrays.sort(list, String.CASE_INSENSITIVE_ORDER);
        for (String a : list) {
            System.out.println(a);
        }
    }
}

class FileFilter implements FilenameFilter {
    Pattern pattern;
    FileFilter(String regex) {
        pattern = Pattern.compile(regex);
    }
    public boolean accept (File file, String name) {
        return pattern.matcher(name).matches();
    }
}