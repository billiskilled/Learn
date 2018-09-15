import java.util.*;

public class Main {
    // 在这个地方写写函数的思路
    public static ArrayList<ArrayList<Integer>> FindContinuousSequence(int sum) {
       ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();
        int i = 1,j = 2;
        int tmp=i+j;
        while(i<=((sum-1)/2)){
            if(tmp==sum){
                ArrayList<Integer> list=new ArrayList<Integer>();
                for(int m=i;m<=j;m++){
                    list.add(m);
                }
                result.add(list);
                tmp-=i;
                i++;
            }
            else if(tmp<sum){
                j++;
                tmp+=j;
            }
            else{
                tmp-=i;
                i++;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int theN = sc.nextInt();
        sc.close();

        ArrayList<ArrayList<Integer>> result = new ArrayList<ArrayList<Integer>>();

        result = FindContinuousSequence(theN);

        for (ArrayList<Integer> i : result) {
            System.out.println(i);
        }
    }
}