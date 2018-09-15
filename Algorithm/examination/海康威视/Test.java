public class Solution {
    public boolean isNumric(String str) {
        boolean flag=true;
        char[] c=str.toCharArray();
        if(str==null||str==""||str=="0"){
            return 0;
        }
        int sum=0;
        for(int i=0;i<c.length;i++){
            if(i==0&&(c[i]=='+'||c[i]=='-')){
                if(c[i]=='-'){
                    flag=false;
                }
                continue;
            }
            else if(c[i]>='0'&&c[i]<='9'){
                if(c[i]==0&&i==0){
                    return 0;
                }
                else{
                    sum=sum*10+(int)(c[i]-'0');
                    continue;
                }
            }
            else{
                return 0;
            }
        }
        return flag==true?sum:-sum;
    }
}
