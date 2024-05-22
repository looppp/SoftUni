import java.util.Scanner;

public class ArrowPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = Integer.parseInt(sc.nextLine());
        int cycles = input * 2 - 2;
        for (int i = 0; i < cycles; i++) {
            System.out.printf("%s%s", input);
        }
    }
}
