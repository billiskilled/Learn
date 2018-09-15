import java.util.*;
public class Main {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] shuru=new int[n];
        int tmp=Integer.MIN_VALUE;
        int index=0;
        for(int i=0;i<n;i++){
            shuru[i]=sc.nextInt();
            if(shuru[i]>tmp){
                tmp=shuru[i];
                index=i;
            }
        }
        int c[]=new int[n-1];
        int j=0;
        for(int i=index+1;i<n;i++){
            c[j++]=shuru[i];
            //j++;
        }
        for(int i=0;i<index;i++){
            c[j++]=shuru[i];
            //j++;
        }
        int ming=tmp;
        int hong=0;
        int pre=0;
        int last=n-2;
        int t=0;
        
        for(int i=0;i<n-1;i++){
            if(c[pre]>=c[last]){
                t=c[pre];
                pre++;
            }
            else{
                t=c[last];
                last--;
            }
            if(i%2==0){
                hong+=t;
            }
            else{
                ming+=t;
            }
            
        }
        int result=0;
        //result=Math.abs(ming-hong);
        result=(ming>hong)?(ming-hong):(hong-ming);
        System.out.println(result);
    }
}