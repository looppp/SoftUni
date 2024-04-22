import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class FilterByAge {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());
        Map<String, Integer> studentSet = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {

            String[] tokens = scan.nextLine().split(", ");
            String name = tokens[0];
            int age = Integer.parseInt(tokens[1]);

            studentSet.put(name, age);
        }

        String condition = scan.nextLine();
        int age = Integer.parseInt(scan.nextLine());
        String format = scan.nextLine();

        if(format.equals("name")){
            System.out.println(String.join("\n", studentSet.keySet()));
        } else if(format.equals("name age")){
            for (String student : studentSet.keySet()) {
                System.out.println(student + " - " + studentSet.get(student));
            }
        } else if(format.equals("age")){
            System.out.println(String.join("\n", studentSet.values().stream().map(String::valueOf).collect(Collectors.toList())));
        }
    }

    
}
