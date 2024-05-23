import java.util.Scanner;

public class AddAndRemoveElementsFromArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] commands = sc.nextLine().split(",");
        int[] numbersArray = new int[0];
        int initialNumber = 1;

        for (int i = 0; i < commands.length - 1; i++) {
            if(commands[i].toLowerCase().equals("add")){
                int[] localArray = new int[numbersArray.length + 1];
                //TODO create a new array copy the old and add or remove element
            } else if(commands[i].toLowerCase().equals("remove")){

            }
        }
    }
}
