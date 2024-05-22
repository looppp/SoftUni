import java.util.Scanner;

public class HourglassPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
//TODO FINISH IT!
        for (int i = 0; i < n / 2; i++) {
            System.out.print(" ".repeat(i));
            if (i == 0) {
                System.out.println("#".repeat(n + 2));
            } else {
                System.out.print("#");
                int spaces = (n - 1) - 2 + i ;
                if (spaces >= 0) {
                    System.out.print(" ".repeat(spaces));
                    System.out.println("#");
                } else {
                    System.out.println();
                }
            }
        }

        if(n % 2 == 0){
            System.out.printf("%s%s", " ".repeat(n/ 2 + 3), "##");
        } else {
            System.out.printf("%s%s", " ".repeat(n / 2), "#");

        }


    }
}
