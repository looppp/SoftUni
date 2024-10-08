import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.UnaryOperator;
import java.util.stream.Collectors;

public class AddVAT {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        UnaryOperator<Double> addVat = value -> value * 1.2;
        List<String> prices = Arrays.stream(scan.nextLine().split(", "))
            .map(Double::parseDouble)
            .map(addVat)
            .map(value -> String.format("%.2f", value))
            .collect(Collectors.toList());

        
            System.out.println("Prices with VAT:");
            System.out.println(String.join("\n", prices));
    }
}
