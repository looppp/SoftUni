import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Function;
import java.util.stream.Collectors;

public class SumNumbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Function<String, Integer> parseInt = Integer::parseInt ;

        List<Integer> numbers = Arrays.stream(scan.nextLine().split(", "))
            .map(parseInt)
            .collect(Collectors.toList());

        System.out.println("Count = " + numbers.size());
        System.out.println("Sum = "+ numbers.stream().reduce(0, (a, b) -> a + b));
    }
}
