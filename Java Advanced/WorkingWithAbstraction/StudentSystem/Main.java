package WorkingWithAbstraction.StudentSystem;

import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        HashMap<String, Student> studentsSet = new HashMap<>();
        String[] input = scan.nextLine().split("\\s+");

        while (!input[0].equals("Exit")) {
            if(input[0].equals("Create")){
                String studentName = input[1];
                int studentAge = Integer.parseInt(input[2]);
                double studentGrade = Double.parseDouble(input[3]);
                Student student = new Student(studentName, studentAge, studentGrade);
                studentsSet.put(studentName, student);
            } else if(input[0].equals("Show")){
                String currentName = input[1];
                if(studentsSet.containsKey(currentName)){
                    Student selectedStudent = studentsSet.get(currentName);
                    selectedStudent.showStudent();
                } 
            } 
            
            input = scan.nextLine().split("\\s+");

        }

    }
}
