package WorkingWithAbstraction.RhombusOfStars;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());

        for (int row = 1; row <= n; row++) {
            for (int space = 0; space < n - row; space++) {
                System.out.print(" ");
            }
            for (int stars = 0; stars < row; stars++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        for (int invertedRow = 1; invertedRow <= n - 1; invertedRow++) {
            for (int space = 0; space < invertedRow; space++) {
                System.out.print(" ");
            }
            for (int stars = 0; stars < n - invertedRow; stars++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
    }
}
