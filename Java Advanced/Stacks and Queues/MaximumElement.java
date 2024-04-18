import java.util.Collections;
import java.util.Scanner;
import java.util.Stack;

public class MaximumElement {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        Stack<Integer> stack = new Stack<>();
        int commandsCount = Integer.parseInt(scan.nextLine());

        for (int i = 0; i < commandsCount; i++) {
            String[] tokens = scan.nextLine().split("\\s+");
            String command = tokens[0];
            switch (command) {
                case "1":
                    stack.push(Integer.parseInt(tokens[1]));
                    break;
                case "2":
                    stack.pop();
                    break;
                case "3":
                    int max = Collections.max(stack);
                    System.out.println(max);
                    break;
            }
        }
    }
}
