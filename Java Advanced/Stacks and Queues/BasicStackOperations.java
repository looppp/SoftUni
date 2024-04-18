import java.util.Scanner;
import java.util.Stack;

public class BasicStackOperations {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        Stack<Integer> numbers = new Stack<>();
        int n = scan.nextInt();
        int s = scan.nextInt();
        int x = scan.nextInt();
        String empty = scan.nextLine();
        int smallestNumber = Integer.MAX_VALUE;

        String[] input = scan.nextLine().split("\\s+");

        for (String token : input) {
            int currentNumber = Integer.parseInt(token);

            if(smallestNumber > currentNumber){
                smallestNumber = currentNumber;
            }

            numbers.push(currentNumber);
        }

        for (int i = 0; i < s; i++) {
            numbers.pop();
        }
      
        if(numbers.contains(x)) {
            System.out.println("true");
        } else if(numbers.size() > 0){
            System.out.println(smallestNumber);
        }
        if(numbers.size() == 0){
            System.out.println(0);
        }
    }
}
