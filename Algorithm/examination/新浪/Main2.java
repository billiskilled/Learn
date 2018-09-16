import java.io.*;

public class CountCodeCommentLineNum {
    public static void main(String[] args) throws IOException {
        FileReader fileReader = new FileReader(new File("XXXXXXX.java"));// 里边的文件路径为要统计的代码文件的路径
        BufferedReader bufferedReader = new BufferedReader(fileReader);
        String line = null;
        String regexAnnotation = "\\s*/{2}.*"; // 单行注释的正则
        String regexAnnotationStart = "\\s*/\\x2A.*";// 多行注释开始标记
        String regexAnnotationEnd = "\\s*\\x2A/.*";// 多行注释结束
        
        int countAnnotation = 0;
        
        while (null != (line = bufferedReader.readLine())) {
            // 多行注释统计
            if (line.matches(regexAnnotationStart)) {
                do {
                    countAnnotation++;
                    line = bufferedReader.readLine();
                } while (!line.matches(regexAnnotationEnd));
            }
            if (line.matches(regexAnnotation)) {// 单行注释统计
                countAnnotation++;
            }
        }
        bufferedReader.close();
        System.out.println("注释行：" + countAnnotation);
    }
}