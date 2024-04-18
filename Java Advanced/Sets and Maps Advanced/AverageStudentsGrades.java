import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.TreeMap;

public class AverageStudentsGrades {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        int numberOfStudents = Integer.parseInt(scan.nextLine());
        TreeMap<String, ArrayList<Double>> studentsGrades = new TreeMap<>();

        for (int i = 0; i < numberOfStudents; i++) {
            String[] input = scan.nextLine().split(" ");
            String student = input[0];
            double grade = Double.parseDouble(input[1]);
            if(studentsGrades.containsKey(student)){
                studentsGrades.get(student).add(grade);
            } else{
                studentsGrades.put(student, new ArrayList<Double>(Arrays.asList(grade)));
            }
        }

        for (String studentName : studentsGrades.keySet()) {
            System.out.print(studentName + " -> ");
            double gradeSum = 0;
            List<Double> studentGrades = studentsGrades.get(studentName);
            for (Double grade : studentGrades) {
                gradeSum += grade;
                System.out.printf("%.2f ", grade);
            }
            System.out.printf("(avg: %.2f)\n", Math.round(gradeSum / studentGrades.size() * 100) / 100.0);
        }


    }
}
