namespace _5._Student_Academy
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<decimal>> gradeBook = new Dictionary<string, List<decimal>>();
            int rows = int.Parse(Console.ReadLine());

            for (int i = 0; i < rows; i++)
            {
                string student = Console.ReadLine();
                decimal grade = decimal.Parse(Console.ReadLine());

                if (gradeBook.ContainsKey(student))
                {
                    gradeBook[student].Add(grade);
                }
                else
                {
                    gradeBook.Add(student, new List<decimal>() { grade });
                }
            }

            foreach(KeyValuePair<string, List<decimal>> pair in gradeBook)
            {
                decimal avaregeGrade = pair.Value.Average();
                if(avaregeGrade >= (decimal)4.50)
                {
                    Console.WriteLine($"{pair.Key} -> {avaregeGrade.ToString("0.00")}");
                }
            }
        }
    }
}
