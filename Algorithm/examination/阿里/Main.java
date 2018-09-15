import java.util.*;
import java.lang.*;

class Point2D {
	
	public double x;
	public double y;
	
	public Point2D(double x, double y) {
		super();
		this.x = x;
		this.y = y;
	}
	
	public double getX() {
		return x;
	}
	public void setX(double x) {
		this.x = x;
	}
	public double getY() {
		return y;
	}
	public void setY(double y) {
		this.y = y;
	}
	
}

public class Main {

	public static boolean isPtInPoly(Point2D point, List<Point2D> pts){  
	      
	    int N = pts.size();  
	    boolean boundOrVertex = true;
	    int intersectCount = 0;
	    double precision = 2e-10; 
	    Point2D p1, p2;
	    Point2D p = point;
	      
	    p1 = pts.get(0);      
	    for(int i = 1; i <= N; ++i){         
	        if(p.equals(p1)){  
	            return boundOrVertex;
	        }  
	          
	        p2 = pts.get(i % N);           
	        if(p.x < Math.min(p1.x, p2.x) || p.x > Math.max(p1.x, p2.x)){                
	            p1 = p2;   
	            continue;
	        }  
	          
	        if(p.x > Math.min(p1.x, p2.x) && p.x < Math.max(p1.x, p2.x)){
	            if(p.y <= Math.max(p1.y, p2.y)){                    
	                if(p1.x == p2.x && p.y >= Math.min(p1.y, p2.y)){ 
	                    return boundOrVertex;  
	                }  
	                  
	                if(p1.y == p2.y){                      
	                    if(p1.y == p.y){
	                        return boundOrVertex;  
	                    }else{ 
	                        ++intersectCount;  
	                    }   
	                }else{                       
	                    double xinters = (p.x - p1.x) * (p2.y - p1.y) / (p2.x - p1.x) + p1.y;                       
	                    if(Math.abs(p.y - xinters) < precision){
	                        return boundOrVertex;  
	                    }  
	                      
	                    if(p.y < xinters){
	                        ++intersectCount;  
	                    }   
	                }  
	            }  
	        }else{            
	            if(p.x == p2.x && p.y <= p2.y){                  
	                Point2D p3 = pts.get((i+1) % N);                   
	                if(p.x >= Math.min(p1.x, p3.x) && p.x <= Math.max(p1.x, p3.x)){ 
	                    ++intersectCount;  
	                }else{  
	                    intersectCount += 2;  
	                }  
	            }  
	        }              
	        p1 = p2;
	    }  
	      
	    if(intersectCount % 2 == 0){
	        return false;  
	    } else {
	        return true;  
	    }  
	      
	} 

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String line1 = sc.nextLine();
        String line2 = sc.nextLine();

        double x,y;
        x = Double.parseDouble(line1.split(",")[0]);
        y = Double.parseDouble(line1.split(",")[1]);

        Point2D point = new Point2D(x, y);
    
        List<Point2D> pts = new ArrayList<Point2D>();  
        String s[] = line2.split(",");

        for (int i = 0; i < s.length; i++) {
            x = Double.parseDouble(s[i++]);
            y = Double.parseDouble(s[i]);

            pts.add(new Point2D(x, y));
        }

        sc.close();
	      
	    if(isPtInPoly(point, pts)){  
	        System.out.println("yes,0");  
	    }else{  
	        System.out.println("no,2");  
	    }
    }
}