import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class CountUppercaseWords {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Predicate<String> upperCaseLetters = x -> Character.isUpperCase(x.charAt(0));
        List<String> upCaseWords = Arrays.stream(scan.nextLine().split(" "))
            .filter(upperCaseLetters)
            .collect(Collectors.toList());

        System.out.println(upCaseWords.size());
        System.out.println(String.join("\n", upCaseWords));
    }
}
