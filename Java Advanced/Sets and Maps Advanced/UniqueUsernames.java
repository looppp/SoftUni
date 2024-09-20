import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.LinkedHashSet;

public class UniqueUsernames {
    public static void main(String[] args) {
        LinkedHashSet<String> listOfUniques = new LinkedHashSet<String>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            int n = Integer.parseInt(reader.readLine());
            for(int i = 0; i < n; i++){
                String input = reader.readLine();
                if(input instanceof String){
                    listOfUniques.add(input);
                }
            }
            listOfUniques.forEach(x -> System.out.println(x));
        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
