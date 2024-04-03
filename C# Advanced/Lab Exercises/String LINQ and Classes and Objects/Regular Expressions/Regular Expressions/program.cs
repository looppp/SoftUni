using System.Text.RegularExpressions;

namespace Regular_Expressions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string inputNames = Console.ReadLine();
            string pattern = @"\b[A-Z][a-z]+ [A-Z][a-z]+\b";

            Regex regex = new Regex(pattern);

            MatchCollection matches = regex.Matches(inputNames);

            foreach (Match match in matches)
            {
                Console.Write(match.ToString() + " ");
            }

        }
    }
}
