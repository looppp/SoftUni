using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Students
{
    public class Student
    {
        private string firstName;
        private string lastName;
        private float grade;

        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        public float Grade { get => grade; set => grade = value; }

        public Student(string firstName, string lastName, float grade)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Grade = grade;
        }

        public void StudentInfo()
        {
            Console.WriteLine($"{FirstName} {LastName}: {Grade:F2}");
        }
    }
}
