import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class FixEmails {
    public static void main(String[] args) {
        String currentName ;
        String currentEmail ;

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
        String input = reader.readLine();
        while(!input.equals("stop")){
                currentName = input;
                currentEmail = reader.readLine();
                if(!(currentEmail.toLowerCase().endsWith(".com") ||
                        currentEmail.toLowerCase().endsWith("uk") || currentEmail.toLowerCase().endsWith("us"))){

                    System.out.println(currentName + " -> " + currentEmail);
            }
            input = reader.readLine();
        }


        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
