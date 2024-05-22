import java.util.Scanner;

public class AlternativeConditions {
    public static void main(String[] args) {
        //TODO finish the logic to match the result
        Scanner sc = new Scanner(System.in);
        int input = Integer.parseInt(sc.nextLine());
        int numberToPrint = 1;

        for (int i = 0; i < input; i++) {
            for (int j = 0; j <= i && numberToPrint <= input; j++) {
                System.out.printf("%d ", numberToPrint++);
            }
            System.out.println();
        }
    }
}
