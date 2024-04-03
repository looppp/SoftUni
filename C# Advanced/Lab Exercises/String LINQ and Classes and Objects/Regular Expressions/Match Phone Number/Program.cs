using System.Text.RegularExpressions;

namespace Match_Phone_Number
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string inputPhones = Console.ReadLine();
            string pattern = @"\+359([\ \-])2\1\d{3}\1\d{4}\b";

            Regex regex = new Regex(pattern);

            MatchCollection matches = regex.Matches(inputPhones);

            Console.WriteLine(string.Join(" ", matches));
        }
    }
}
