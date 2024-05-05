package Generics.GenericBox;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[]args){
         Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());

        Box<String> box = new Box<>();

        for (int i = 0; i < n; i++) {
            box.getCollection().add(scan.nextLine());
        }
        int[] indexes = Arrays.stream(scan.nextLine()
                .split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        
        Box.swaper(box.getCollection(), indexes[0], indexes[1]);
        System.out.println(box.toString());
    }
}
