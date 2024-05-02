package CarInfo;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    ArrayList<Car> carList = new ArrayList<>();
    int n = Integer.parseInt(scan.nextLine());

        for (int i = 0; i < n; i++) {
            String[] input = scan.nextLine().split(" ");
            String brand = input[0];
            String model = input[1];
            int horsePower = Integer.parseInt(input[2]);
            Car car = new Car(brand, model, horsePower);
            carList.add(car);
        }

        carList.forEach(x -> System.out.println(x.getInfo()));



    }
}