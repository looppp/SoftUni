namespace Odd_Occurrences
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine().Split(" ");
            Dictionary<string, int> allElements = new Dictionary<string, int>();

            foreach ( string word in words )
            {
                string caseInsensitiveWord = word.ToLower();

                if(allElements.ContainsKey(caseInsensitiveWord))
                {
                    allElements[caseInsensitiveWord]++;
                }
                else
                {
                    allElements.Add(caseInsensitiveWord, 1);
                }
            }
            foreach (KeyValuePair <string, int> pair in allElements)
            {
                if(pair.Value % 2 == 1 )
                {
                    Console.Write(pair.Key + " ");
                }
            }
        }
    }
}
