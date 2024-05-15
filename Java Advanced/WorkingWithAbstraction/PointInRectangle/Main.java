package WorkingWithAbstraction.PointInRectangle;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] allPoints = scan.nextLine().split(" ");
        int bottomLeftX = Integer.parseInt(allPoints[0]);
        int bottomLeftY = Integer.parseInt(allPoints[1]);
        int topRightX = Integer.parseInt(allPoints[2]);
        int topRightY = Integer.parseInt(allPoints[3]);

        Point bottomLeft = new Point(bottomLeftX, bottomLeftY);
        Point topRight = new Point(topRightX, topRightY);
        Rectangle rectangle = new Rectangle(bottomLeft, topRight);

        int lines = Integer.parseInt(scan.nextLine());

        for (int i = 0; i < lines; i++) {
            String[] coordinates = scan.nextLine().split(" ");
            int pointX = Integer.parseInt(coordinates[0]);
            int pointY = Integer.parseInt(coordinates[1]);
            Point point = new Point(pointX, pointY);
            System.out.println(rectangle.contains(point));
        }

    }
}
