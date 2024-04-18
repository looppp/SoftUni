import java.util.Scanner;
import java.util.TreeSet;

public class SoftUniParty {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        TreeSet<String> vipList = new TreeSet<>();

        String input = scan.nextLine();

        while(!"PARTY".equals(input)){
            vipList.add(input);
            input = scan.nextLine();
        }
        while (!"END".equals(input)) {   
           vipList.remove(input);
           input = scan.nextLine();

        }
        System.out.println(vipList.size());
        vipList.forEach(System.out::println);
    }
}
