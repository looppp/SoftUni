import java.util.Scanner;
import java.util.function.IntPredicate;
import java.util.stream.IntStream;

public class FindEvensOrOdds {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] boundries = scan.nextLine().split(" ");
        int lowerBoundry = Integer.parseInt(boundries[0]);
        int upperBoundry = Integer.parseInt(boundries[1]);
        String command = scan.nextLine();

        IntPredicate predicate;

        if(command.equals("odd")){
            predicate = num -> num % 2 != 0;
        } else if (command.equals("even")){
            predicate = num -> num % 2 == 0;
        } else{
            System.out.println("Invalid command!");
            return;
        }

        IntStream.rangeClosed(lowerBoundry, upperBoundry)
        .filter(predicate)
        .forEach(num -> System.out.println(num));
    }
}
