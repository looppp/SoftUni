package WorkingWithAbstraction.HotelReservation;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] input = scan.nextLine().split(" "); 
        double pricePerday = Double.parseDouble(input[0]);
        int numberOfDays = Integer.parseInt(input[1]);
        Season season = Season.valueOf(input[2]);
        DiscountType discountType = DiscountType.valueOf(input[3]);
        double finalPrice = PriceCalculator.calculateTotalPrice(pricePerday, numberOfDays, season, discountType);
        
        System.out.printf("%.2f", finalPrice);
    }
}
