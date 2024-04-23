import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class KnightsOfHonor {
    private static final String ArrayList = null;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<String> namesList = new ArrayList<>(Arrays.asList(scan.nextLine().split("\\s+")));
        Consumer<String> printNamesAddSir = name -> System.out.println("Sir " + name);
        namesList.forEach(printNamesAddSir);
    }
}
