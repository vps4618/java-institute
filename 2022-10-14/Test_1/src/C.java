
import java.util.Scanner;

class C{
    public static void main(String args[]){
        System.out.println("Vishwa Praveen");
        System.out.println("17");
        System.out.println("0772923594");
        System.out.println("K/Taxila Central College");
        System.out.println("Ingiriya");

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter time now : ");
        int time = sc.nextInt();
        
        System.out.println("");
        
        if(time >= 0 && time <= 12 ){
            System.out.println("Good Morning !");
        }else if(time > 12 && time <= 16){
            System.out.println("Good Afternoon !");
        }else if(time > 16 && time <= 19){
            System.out.println("Good Evening !");
        }else if(time > 19 && time < 24){
            System.out.println("Good Night !");
        }else{
            System.out.println("Invalid time !");
        }
        
    }
}
