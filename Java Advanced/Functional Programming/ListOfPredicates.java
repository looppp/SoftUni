import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.IntPredicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class ListOfPredicates {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        ArrayList<Integer> numbersSequence = Arrays.stream(scan.nextLine().split(" "))
            .map(Integer::parseInt)
            .distinct()
            .collect(Collectors.toCollection(ArrayList::new));


        IntPredicate isDevisibleBySequence = number -> numbersSequence.stream()
            .allMatch(divisor -> number % divisor == 0);

        ArrayList<Integer> numbers = IntStream.rangeClosed(1, n)
            .filter(isDevisibleBySequence)
            .boxed()
            .collect(Collectors.toCollection(ArrayList::new));

            numbers.forEach(x -> System.out.print(x +" "));
    }
}
