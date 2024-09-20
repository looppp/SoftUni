import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.TreeMap;

public class Phonebook {
    public static void main(String[] args) {
        TreeMap<String, String> phoneBook = new TreeMap<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String[] input = reader.readLine().split("-");
            while(!input[0].equals("search")){
                phoneBook.put(input[0], input[1]);

                input = reader.readLine().split("-");
            }
            String inputName = reader.readLine();
            while(!inputName.equals("stop")){
                if(phoneBook.containsKey(inputName)){
                    System.out.println(inputName + " -> " + phoneBook.get(inputName));
                } else {
                    System.out.println("Contact " + inputName + " does not exist.");
                }
                inputName = reader.readLine();
            }

        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
