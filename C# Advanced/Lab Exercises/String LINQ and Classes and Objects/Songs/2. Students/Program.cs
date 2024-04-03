using System.Collections.Generic;

namespace _2._Students
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            List<Student> studentList = new List<Student>();

            while(input != "end")
            {
                string[] studentComponents = input.Split(' ').ToArray();
                string firstName = studentComponents[0];
                string lastName = studentComponents[1];
                int age = int.Parse(studentComponents[2]);
                string homeTown = studentComponents[3];

                Student currentStudent = new Student() 
                { 
                    FirstName = firstName, 
                    LastName = lastName, 
                    Age = age, 
                    HomeTown = homeTown 
                };

                studentList.Add(currentStudent);

                input = Console.ReadLine();
            }

            string cityName = Console.ReadLine();

            List<Student> filteredStudentList = studentList.Where(x => x.HomeTown == cityName).ToList();

            foreach (Student student in filteredStudentList)
            {
                Console.WriteLine($"{student.FirstName} {student.LastName} is {student.Age} years old.");
            }
        }
    }

    public class Student
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string HomeTown { get; set; }

    }
}
