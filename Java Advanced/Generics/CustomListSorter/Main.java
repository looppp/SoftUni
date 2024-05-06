package Generics.CustomListSorter;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        CustomList<String> customList = new CustomList<>();
        String[] input = scan.nextLine().split("\\s+");

        while (!input[0].equals("END")) {
            String command = input[0];
            
            switch (command) {
                case "Add":
                    customList.add(input[1]);
                    break;
                case "Remove":
                    customList.remove(Integer.parseInt(input[1]));
                    break;
                case "Contains":
                    System.out.println(customList.contains(input[1]));
                    break;
                case "Swap":
                    int index1 = Integer.parseInt(input[1]);
                    int index2 = Integer.parseInt(input[2]);
                    customList.swap(index1, index2);
                    break;
                case "Greater":
                    System.out.println(customList.countGreaterThan(input[1]));
                    break;
                case "Max":
                    System.out.println(customList.getMax().toString());
                    break;
                case "Min":
                    System.out.println(customList.getMin().toString());
                    break;
                case "Sort":
                    Sorter.sort(customList);
                    break;
                case "Print":
                    customList.forEach();
                    break;
            }
            input = scan.nextLine().split("\\s+");
        }
    }
}
