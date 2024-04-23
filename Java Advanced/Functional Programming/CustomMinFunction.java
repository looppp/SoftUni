import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Function;

public class CustomMinFunction {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Integer[] inputNumbers = Arrays.stream(scan.nextLine().split(" ")).map(Integer::parseInt).toArray(Integer[]::new);

        Function<Integer[], Integer> findSmallest = arr -> {
            int smallest = arr[0];
            for(int num: arr) {
                if(num < smallest){
                    smallest = num;
                }
            }
            return smallest;
        };

        System.out.println(findSmallest.apply(inputNumbers));
    }
}
