import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.TreeSet;

public class PeriodicTable {
    public static void main(String[] args) {
        TreeSet<String> uniqueElements = new TreeSet<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            int n = Integer.parseInt(reader.readLine());
            for (int i = 0; i < n; i++) {
                String[] input = reader.readLine().split("\\s+");
                for (String string : input) uniqueElements.add(string);
            }

            System.out.println(String.join(" ", uniqueElements));
        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
