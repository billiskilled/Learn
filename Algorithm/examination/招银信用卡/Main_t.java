import java.util.*;

public class Main {
    Scanner sc = new Scanner(System.in);

    String s1 = sc.nextLine();
    String s2 = sc.nextLine();
    String[] sa1 = s1.split(" ");
    String[] sa2 = s2.split(" ");

    ArrayList<Integer> a1 = new ArrayList<> ();
    ArrayList<Integer> a2 = new ArrayList<> ();

    for (int i = 0; i < sa1.length; i++) {
        a1.add(Integer.parse(sa1[i]));
    };
    for (int i = 0; i < sa2.length; i++) {
        a2.add(Integer.parse(sa2[i]));
    }

    System.out.println(a1);
    System.out.println(a2);


}