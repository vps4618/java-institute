
import java.util.Scanner;

public class Calculator {
    public static void main(String args[]){
            
            while(true){
                Scanner sc = new Scanner(System.in);
                System.out.println("Welcome to vps first java calculator");
                System.out.println("-----------------------------");
                System.out.println("1.Addition");
                System.out.println("2.Subtraction");
                System.out.println("3.Multiplicaion");
                System.out.println("4.Division");
                System.out.println("5.Exit");
                
                System.out.println("----------------");
                System.out.print("Enter choice : ");
                
                int choice;
                try{
                    choice = sc.nextInt();
             
                }catch(Exception e){
                    System.out.println("----------------");
                    System.out.println("error");
                    System.out.println("----------------");
                    continue;
                }
                
                if(choice==5){
                    System.out.println("-----terminated-----");
                    break;
                }
                // check operation validity
                if((choice != 1 && choice != 2) && (choice != 3 && choice != 4)){
                    System.out.println("---------------------");
                    System.out.println("Invalid operation !");
                    System.out.println("---------------------");
                    continue;
                }
               
                System.out.println("------------------");
                System.out.print("Enter first number : ");
                float number1;
                
                // number 1 validation 
                try{
                    number1 = sc.nextFloat();
                }catch(Exception e){
                    System.out.println("---------------------");
                    System.out.println("First number not  valid !");
                    System.out.println("---------------------");
                
                    continue;
                }
                
                
                System.out.print("Enter second number : ");
                
                // number 2 validation
                float number2;
                try{
                    number2 = sc.nextFloat();
                }catch(Exception e){
                    System.out.println("---------------------");
                    System.out.println("Second number not  valid !");
                    System.out.println("---------------------");
                
                    continue;
                }
            
                
                System.out.println("----------------");
                if(choice == 1){
                    float result = add(number1,number2);
                    System.out.println("Result is " + result);
                    System.out.println("-------------------");
                }else if(choice == 2){
                    float result  = subtract(number1,number2);
                    System.out.println("Result is " + result);
                    System.out.println("-------------------");
                }else if(choice == 3){
                    float result = multiply(number1,number2);
                    System.out.println("Result is " + result);
                    System.out.println("-------------------");
                }else if(choice == 4){
                    float result = divide(number1,number2);
                    System.out.println("Result is " + result);
                    System.out.println("-------------------");
                }
            }
    
    }
    
    public static float add(float number1,float number2){
        float result = number1 + number2;
        return result;
    }
    public static float subtract(float number1,float number2){
        float result = number1 - number2;
        return result;
    }
    public static float multiply(float number1,float number2){
        float result = number1 * number2;
        return result;
    }
    public static float divide(float number1,float number2){
        float result = number1 / number2;
        return result;
    }
}
