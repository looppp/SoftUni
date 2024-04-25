import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateParty {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<String> listOfPeople = Arrays.stream(scan.nextLine().split(" "))
            .collect(Collectors.toCollection(ArrayList::new));

        String[] inputToken = scan.nextLine().split(" ");


        while (!inputToken[0].equals("Party!")) {
            String command = inputToken[0];
            String criteria = inputToken[1];
            String value = inputToken[2];

            Predicate<String> predicate;

            if(criteria.equals("StartsWith")){
                predicate = name -> name.startsWith(value);
             } else if(criteria.equals("EndsWith")){
                 predicate = name -> name.endsWith(value);
             } else {
                predicate = name -> name.length() == Integer.parseInt(value);
             }
            if(command.equals("Remove")){
                listOfPeople.removeIf(predicate);
            } else {
                listOfPeople.addAll(listOfPeople.stream()
                    .filter(predicate)
                    .collect(Collectors.toList()));
            }

            inputToken = scan.nextLine().split(" ");
        }
        
        if(listOfPeople.size() == 0){
            System.out.println("Nobody is going to the party!");
        } else {
            listOfPeople.sort(null);
            System.out.print(String.join(", ", listOfPeople) + " are going to the party!");
        }
    }
}
