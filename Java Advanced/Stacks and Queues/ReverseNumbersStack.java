import java.util.ArrayDeque;
import java.util.Scanner;

public class ReverseNumbersStack {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        ArrayDeque<String> stack = new ArrayDeque<>();
        String[] input = scan.nextLine().split("\\s+");
        for (String x : input) {
            stack.push(x);
        }
       while(stack.size() > 0){
        System.out.print(stack.poll()+" ");
       }
    }
}