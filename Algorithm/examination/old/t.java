import java.util.*;

public class t{
	public static void main(String[] args) {
		Scanner in=new Scanner(System.in);
		while(in.hasNext()) {
			int n=in.nextInt();
			int m=in.nextInt();
			int[] a=new int[n];
			a[0]=0;
			for(int i=1;i<=n;i++) {
				a[i]=in.nextInt();
			}
			int q=in.nextInt();
			int start=0;
			int end=0;
			for(int j=0;j<q;j++) {
				start=in.nextInt();
				end=in.nextInt();
				System.out.println(total(a,start,end));
			}
			
		}
	}
	public static int total(int[] a,int start,int end) {
		Map<Integer,Integer> map=new HashMap<Integer,Integer>();
		int count=0;
		for(int i=start;i<=end;i++) {
			if(map.containsKey(a[i])) {
				map.put(a[i], map.get(a[i]+1));
				count=count;
			}else {
				map.put(a[i], 1);
				count+=1;
			}
		}
		return count;
	}
}