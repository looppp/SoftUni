import java.util.Arrays;
import java.util.Scanner;
import java.util.function.BiPredicate;

public class PredicateForName {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int numberN = Integer.parseInt(scan.nextLine());

        BiPredicate<String, Integer> checkNamesLength = (name, length) -> name.length() <= length;

        Arrays.stream(scan.nextLine().split(" ")).filter(name -> checkNamesLength.test(name, numberN)).forEach(System.out::println);
        
    }
}
