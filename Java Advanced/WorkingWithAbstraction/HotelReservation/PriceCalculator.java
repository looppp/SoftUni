package WorkingWithAbstraction.HotelReservation;


public class PriceCalculator {

    public static double calculateTotalPrice(double pricePerDay, int numberOfDays, Season season, DiscountType discountType){
        double totalPrice = pricePerDay * numberOfDays;

        switch (season) {
            case Autumn:
                totalPrice *= 1;
                break;
            case Spring:
                totalPrice *= 2;
                break;
            case Winter:
                totalPrice *= 3;
                break;
            case Summer:
                totalPrice *= 4;
                break;
        }
        if(discountType.equals(DiscountType.VIP)){
            totalPrice *= 0.8;
        } else if(discountType.equals(DiscountType.SecondVisit)){
            totalPrice *= 0.9;
        } else {
            totalPrice *= 1;
        }

        return totalPrice;
    }
}
