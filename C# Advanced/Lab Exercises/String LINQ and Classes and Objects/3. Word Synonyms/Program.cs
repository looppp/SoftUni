namespace _3._Word_Synonyms
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> synonyms = new Dictionary<string, List<string>>();
            int countOfWords = Convert.ToInt32(Console.ReadLine());


            for (int i = 0; i < countOfWords ; i++)
            {
                string word = Console.ReadLine();
                string synonym = Console.ReadLine();

              if(synonyms.ContainsKey(word))
                {
                    synonyms[word].Add(synonym);
                }
              else
                {
                    synonyms.Add(word, new List<string> { synonym });
                }
            }

            foreach (KeyValuePair<string, List<string>> pair in synonyms)
            {
                Console.WriteLine($"{pair.Key} - {string.Join(", ", pair.Value)}");
            }

        }
    }
}
