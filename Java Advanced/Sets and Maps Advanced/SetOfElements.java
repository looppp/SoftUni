import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class SetOfElements {
    public static void main(String[] args) {
        ArrayList<Integer> firstList = new ArrayList<>();
        ArrayList<Integer> secondList = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            String[] inputTokens = reader.readLine().split("\\s+");
            int firstArrayCycles = Integer.parseInt(inputTokens[0]);
            int secondArrayCycles = Integer.parseInt(inputTokens[1]);
            for (int i = 0; i < firstArrayCycles; i++) {
                int input = Integer.parseInt(reader.readLine());
                firstList.add(input);
            }
            for (int i = 0; i < secondArrayCycles; i++) {
                int input = Integer.parseInt(reader.readLine());
                secondList.add(input);
            }

            for (int number : firstList){
                if(secondList.contains(number)){
                    System.out.print(number + " ");
                }
            }


        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
