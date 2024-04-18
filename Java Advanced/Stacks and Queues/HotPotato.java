import java.util.ArrayDeque;
import java.util.Scanner;

public class HotPotato {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        ArrayDeque<String> childrenInside = new ArrayDeque<>();
        String[] partisipants = scan.nextLine().split("\\s+");
        int tossingPotato = scan.nextInt();

        for (String kid : partisipants) {
            childrenInside.offer(kid);
        }
        while (childrenInside.size() > 1) {

           for (int i = 0; i < tossingPotato - 1; i++) {
             String currentChield = childrenInside.poll();
             childrenInside.offer(currentChield);
           }
           String child = childrenInside.poll();
           System.out.println(child);
        }
            System.out.println("Last is "+childrenInside.poll());
    }
}
