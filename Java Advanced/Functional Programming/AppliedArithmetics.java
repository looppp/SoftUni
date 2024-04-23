import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Collectors;

public class AppliedArithmetics {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        List<Integer> numbersList = Arrays.stream(scan.nextLine().split(" ")).map(Integer::parseInt).collect(Collectors.toList());
        String commandLine = scan.nextLine();

        Function<List<Integer>, List<Integer>> add = x -> { return x.stream().map(e -> ++e).collect(Collectors.toList()); };
        Function<List<Integer>, List<Integer>> multiply = x -> { return x.stream().map(e -> e * 2).collect(Collectors.toList()); };
        Function<List<Integer>, List<Integer>> subtract = x -> { return x.stream().map(e -> --e).collect(Collectors.toList()); };
        Consumer<List<Integer>> printNumber = nums -> nums.stream().forEach(x -> System.out.print(x + " "));


        while(!commandLine.equals("end")){
            switch (commandLine) {
                case "add": 
                    numbersList = add.apply(numbersList);
                    break;

                case "multiply":
                    numbersList = multiply.apply(numbersList);
                    break;

                case "subtract":
                    numbersList = subtract.apply(numbersList);
                    break;

                case "print":
                    printNumber.accept(numbersList);
                    break;
            }

            commandLine = scan.nextLine();
        }
    }
}
