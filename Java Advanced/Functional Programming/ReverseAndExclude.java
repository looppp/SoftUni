import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ReverseAndExclude {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        List<Integer> numbers = Arrays.stream(scan.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());
        int number = Integer.parseInt(scan.nextLine());
        Function<List<Integer>, List<Integer>> filterDevisibleByN = nums -> nums.stream().sorted(java.util.Collections.reverseOrder()).filter(x -> x % number != 0).toList();
        Consumer<List<Integer>> reverseAndPrint = nums -> nums.forEach(x -> System.out.print(x + " "));

        numbers = filterDevisibleByN.apply(numbers);
        reverseAndPrint.accept(numbers);
    }
}
