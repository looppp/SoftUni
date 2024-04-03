using System.Text.RegularExpressions;

namespace Match_Dates
{
    internal class Program
    {
        static void Main(string[] args)
        {

            string pattern = @"\b(?<day>\d{2})(?<sep>[\.\-\/])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})\b";
            Regex regex = new Regex(pattern);

            string inputDates = Console.ReadLine();
            MatchCollection matches = regex.Matches(inputDates);

            foreach(Match match in matches)
            {
                Console.WriteLine($"Day: {match.Groups[1]}, Month: {match.Groups[3]}, Year: {match.Groups[4]}");
            }
        }
    }
}
