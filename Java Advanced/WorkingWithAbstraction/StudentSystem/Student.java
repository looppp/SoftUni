package WorkingWithAbstraction.StudentSystem;

public class Student {
    public String studentName;
    public int studentAge;
    public double studentGrade;

    public Student(String studentName, int studentAge, double studentGrade){
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }

    public void showStudent(){
        System.out.println(this.studentName + " is " + this.studentAge + " years old." + "This is the grade " + this.studentGrade);
    }
}
