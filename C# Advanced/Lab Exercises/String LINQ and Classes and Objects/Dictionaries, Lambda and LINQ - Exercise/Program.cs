namespace Dictionaries__Lambda_and_LINQ___Exercise
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string inputString = Console.ReadLine().Replace(" ", "");

            Dictionary<char, int> charOccurrences = new Dictionary<char, int>();

            foreach(char letter in inputString)
            {
                if(charOccurrences.ContainsKey(letter))
                {
                    charOccurrences[letter]++;
                }
                else
                {
                    charOccurrences.Add(letter, 1);
                }
            }
            foreach(KeyValuePair<char, int> chars in charOccurrences)
            {
                Console.WriteLine(string.Join("\n", chars.Key + " -> " + chars.Value));

            }
        }
    }
}
