import java.util.*;
public class Solution2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();
        for(int i=0;i<t;i++){
            int x=sc.nextInt();
            int k=sc.nextInt();
            int index=1,y=1;
            while(index!=k){
                if((x+y)==(x|y)){
                    index++;
                    y++;
                }
                else {
                    y++;
                }
            }
            System.out.println(y);
        }
    }
}