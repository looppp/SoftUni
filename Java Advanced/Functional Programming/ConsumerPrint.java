import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class ConsumerPrint {
   public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    ArrayList<String> namesList = new ArrayList<>(Arrays.asList(scan.nextLine().split("\\s+")));

    Consumer<String> printName = s -> System.out.println(s);
    namesList.forEach(printName);
   }
}
