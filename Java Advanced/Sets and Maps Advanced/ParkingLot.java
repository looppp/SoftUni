import java.util.HashSet;
import java.util.Scanner;

public class ParkingLot {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        HashSet<String> parkingLot = new HashSet<>();
        String[] inputLine = scan.nextLine().split(", ");

        while (!"END".contains(inputLine[0])) {
            String command = inputLine[0];
            String currentCar = inputLine[1];
            if(command.equals("IN")){
                parkingLot.add(currentCar);
            }
            else if(command.equals("OUT")){
                parkingLot.remove(currentCar);
            }
            inputLine = scan.nextLine().split(", ");
        }

        if(parkingLot.size() == 0){
            System.out.println("Parking Lot is Empty");
        }

        parkingLot.forEach(System.out::println);

    }
}
