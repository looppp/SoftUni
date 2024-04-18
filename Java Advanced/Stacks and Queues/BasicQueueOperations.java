import java.util.ArrayDeque;
import java.util.Scanner;

public class BasicQueueOperations {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        ArrayDeque<Integer> numbers = new ArrayDeque<>();
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

            numbers.add(currentNumber);
        }

        for (int i = 0; i < s; i++) {
            numbers.poll();
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