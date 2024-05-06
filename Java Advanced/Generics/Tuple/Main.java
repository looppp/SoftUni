package Generics.Tuple;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        for (int i = 0; i < 3; i++) {
            String[] input = scan.nextLine().split("\\s+");

            switch (i) {
                case 0:
                    String fullName = input[0]+ " " +input[1];
                    String address = input[2];
                    Tuple<String, String> cityzen = new Tuple<String,String>(fullName, address);
                    System.out.println(cityzen.item1 + " -> " + cityzen.item2);
                    break;
                case 1:
                    String name = input[0];
                    int littersBeer = Integer.parseInt(input[1]);
                    Tuple<String, Integer> order = new Tuple<String,Integer>(name, littersBeer);
                    System.out.println(order.item1 + " -> " + order.item2);
                    break;

                case 2:
                    int integer = Integer.parseInt(input[0]);
                    double doublee = Double.parseDouble(input[1]);
                    Tuple<Integer, Double> numbers = new Tuple<Integer,Double>(integer, doublee);
                    System.out.println(numbers.item1 + " -> " + numbers.item2);
                    break;
            }
        }
    }
}
