import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FindTheSmallestElement {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<Integer> numbers = Arrays.stream(scan.nextLine().split("\\s+"))
            .map(Integer::parseInt)
            .collect(Collectors.toCollection(ArrayList::new));

            Function<ArrayList<Integer>, Integer> findIndexOfMin = arr -> {
                int min = arr.stream().min(Integer::compareTo).get();
                return arr.lastIndexOf(min);
            };

            System.out.println(findIndexOfMin.apply(numbers));
    }
}
