package Generics.GenericCountMethodStrings;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());

        Box<String> boxOfElements = new Box<>();

        for (int i = 0; i < n; i++) {
            String element = scan.nextLine();
            boxOfElements.getCollection().add(element);
        }

        String comparable = scan.nextLine();

       int count = Box.compare(boxOfElements.getCollection(), comparable);

       System.out.println(count);
    }
}
