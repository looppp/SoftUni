import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Scanner;

public class CountRealNumbers {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        double[] values = Arrays.stream(scan.nextLine().split(" "))
                .mapToDouble(Double::parseDouble)
                .toArray();

        LinkedHashMap<Double, Integer> valuesAndOccurrenses = new LinkedHashMap<>();

        for (double key : values) {
            if(valuesAndOccurrenses.containsKey(key)){
                valuesAndOccurrenses.put(key, valuesAndOccurrenses.get(key) + 1);
            } else {
                valuesAndOccurrenses.put(key, 1);
            }
        }

        for (Double number : valuesAndOccurrenses.keySet()) {
            System.out.println(number+" -> "+ valuesAndOccurrenses.get(number));
        }
    }
}
