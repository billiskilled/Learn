import java.util.*;
public class Main{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in 

);

        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        String[] sa1 = s1.split(" ");
        String[] sa2 = s2.split(" ");

        ArrayList<Integer> a1 = new ArrayList<> ();
        ArrayList<Integer> a2 = new ArrayList<> ();

        for (int i = 0; i < sa1.length; i++) {
            a1.add(Integer.parseInt(sa1[i]));
        };
        for (int i = 0; i < sa2.length; i++) {
            a2.add(Integer.parseInt(sa2[i]));
        }
        System.out.println(zhi(a1,a2));

    }

    public static int zhi(ArrayList<Integer> result,ArrayList<Integer> list){
        int listlen=list.size();
        int resultlen=list.size();
        for(int i=0;i<listlen;i++){
            for(int j=0;j<result.size();j++){
                if(result.get(i) > result.get(j)){
                    result.remove(j);
                    break;
                }
            }
        }
        int n=resultlen-result.size();
        return n;
    }
}
