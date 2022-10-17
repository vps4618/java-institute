
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */

/**
 *
 * @author vishw
 */
import java.util.*;  
public class first {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        String name = "Vishwa";
        String secondName = "Praveen";
        
        int number1 = 2;
        int number2 = 3;
        int result = number1 + number2;
        
        char chara1 = 'V';
        char chara2 = 'P';
        char chara3 = 'S';
        
        System.out.println(name +" " + secondName);
        System.out.println(result);
        System.out.print(chara1);
        System.out.print(chara2);
        System.out.println(chara3);
        
        Scanner getInputScanner= new Scanner(System.in);
        System.out.println("Enter time :  ");  
        int time = getInputScanner.nextInt();
        
        if(time >= 0 || time <= 12){
            System.out.println("Good Morning");
        }else if(time > 12 || time <= 16){
            System.out.println("Good Afternoon");
        }else if(time > 16 || time <= 19){
            System.out.println("Good Evening");
        }else if(time > 19 || time < 24){
            System.out.println("Good night");
        }else{
            System.out.println("Invalid time");
        }
    }
}
