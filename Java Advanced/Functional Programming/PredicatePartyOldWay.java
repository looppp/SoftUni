
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;

public class PredicatePartyOldWay {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        ArrayList<String> listOfPeople = Arrays.stream(scan.nextLine().split(" "))
            .collect(Collectors.toCollection(ArrayList::new));

        String[] inputToken = scan.nextLine().split(" ");


        while (!inputToken[0].equals("Party!")) {
            String command = inputToken[0];
            String criteria = inputToken[1];
            String value = inputToken[2];

            if(command.equals("Remove")){
                if(criteria.equals("StartsWith")){
                    listOfPeople = listOfPeople.stream()
                    .filter(name -> !name.startsWith(value))
                    .collect(Collectors.toCollection(ArrayList::new));
                    
                } else if(criteria.equals("EndsWith")){
                    listOfPeople = listOfPeople.stream()
                    .filter(name -> !name.endsWith(value))
                    .collect(Collectors.toCollection(ArrayList::new));
                } else {
                    listOfPeople = listOfPeople.stream()
                    .filter(name -> name.length() != Integer.parseInt(value))
                    .collect(Collectors.toCollection(ArrayList::new));
                }
            } else {
                if(criteria.equals("StartsWith")){
                    ArrayList<String> listToAdd = listOfPeople.stream()
                    .filter(name -> name.startsWith(value))
                    .collect(Collectors.toCollection(ArrayList::new));
                    listOfPeople.addAll(listToAdd);
                } else if(criteria.equals("EndsWith")){
                    ArrayList<String> listToAdd = listOfPeople.stream()
                    .filter(name -> name.endsWith(value))
                    .collect(Collectors.toCollection(ArrayList::new));
                    listOfPeople.addAll(listToAdd);
                } else {
                    ArrayList<String> listToAdd = listOfPeople.stream()
                    .filter(name -> name.length() == Integer.parseInt(value))
                    .collect(Collectors.toCollection(ArrayList::new));
                    listOfPeople.addAll(listToAdd);
                }
            }

            inputToken = scan.nextLine().split(" ");
        }
        
        if(listOfPeople.size() == 0){
            System.out.println("Nobody is going to the party!");
        } else {
            listOfPeople.sort(null);
            String result = String.join(", ", listOfPeople);
            System.out.print(result + " are going to the party!");
        }
    }
}
