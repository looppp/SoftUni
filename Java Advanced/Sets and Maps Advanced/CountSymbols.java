import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.TreeMap;

public class CountSymbols {
    public static void main(String[] args) {
        TreeMap<Character, Integer> charOccurrences = new TreeMap<>();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String input = reader.readLine();
            for (char c : input.toCharArray()){
                if(!charOccurrences.containsKey(c)){
                    charOccurrences.putIfAbsent(c, 1);
                } else {
                    charOccurrences.put(c, charOccurrences.get(c) + 1);
                }
            }

            for (Character character : charOccurrences.keySet()){
                System.out.println(character + ": " + charOccurrences.get(character) + " time/s");
            }
        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
