import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ThePartyReservationFilterModule {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<String> listOfPeople = Arrays.stream(scan.nextLine().split("\\s+"))
            .collect(Collectors.toCollection(ArrayList::new));

        ArrayList<String> listOfCommands = new ArrayList<>();

        String[] input = scan.nextLine().split(";");

        while (!input[0].equals("Print")) {
            String command = input[0];
            String filter = input[1];
            String parameter = input[2];

            Predicate<String> predicate;

            if(filter.equals("Starts with")){
                predicate = x -> x.startsWith(parameter);
            } else if(filter.equals("Ends with")){
                predicate = x -> x.endsWith(parameter);
            } else {
                predicate = x -> x.length() == Integer.parseInt(parameter);
            } 

            if(command.equals("Remove filter")){
                listOfCommands.removeIf(predicate);
            } else {
                listOfCommands.add(filter+" " + Integer.parseInt(parameter));
            }
        }
    }
}
