import java.util.Scanner;
import java.util.Stack;

public class DecimaltoBinaryConverter {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        Stack<Integer> binary = new Stack<Integer>();

        Integer input = scan.nextInt();

        if (input == 0) {
            System.out.println(0);
        }

        while (input != 0) {
            binary.push(input % 2);
            input /= 2;
        }

        while (!binary.isEmpty()) {
            System.out.print(binary.pop());
      }
       
    }
}
