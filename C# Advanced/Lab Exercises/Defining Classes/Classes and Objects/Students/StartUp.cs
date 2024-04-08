namespace Students
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());
            List<Student> studentList = new List<Student>();

            for(int i = 0; i < input; i++)
            {
                string[] studentInfo = Console.ReadLine().Split(" ").ToArray();
                string firstName = studentInfo[0];
                string lastName = studentInfo[1];
                float grade = float.Parse(studentInfo[2]);

                Student currentStudent = new Student(firstName, lastName, grade);
                studentList.Add(currentStudent);
            }

            studentList = studentList.OrderByDescending(x => x.Grade).ToList();

            foreach(Student student in studentList)
            {
                student.StudentInfo();
            }


        }

    }
}
