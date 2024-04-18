import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Scanner;

public class BalancedParentheses {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);

        String parentheses = scan.nextLine();

        Deque<Character> openingBrackets = new ArrayDeque<>();

        boolean areTrue = true;

        for (int i = 0; i < parentheses.length(); i++) {
            char current = parentheses.charAt(i);
            if(current == '(' || current == '{' || current == '['){
                openingBrackets.push(current);
            }
            else{
                if(openingBrackets.size() == 0){
                    areTrue = false;
                    break;
                }
                char charOpening = openingBrackets.pop();
                if(current == '}' && charOpening != '{'){
                    areTrue = false;
                    break;
                }
                else if (current == ']' && charOpening != '['){
                    areTrue = false;
                    break;
                }
                else if(current == ')' && charOpening != '('){
                    areTrue = false;
                    break;
                }
            }
        }

        if(areTrue){
            System.out.println("YES");
        }
        else{
            System.out.println("NO");
        }
    }
}
