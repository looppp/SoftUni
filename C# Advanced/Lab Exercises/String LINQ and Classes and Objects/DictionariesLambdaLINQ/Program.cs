namespace DictionariesLambdaLINQ
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(" ").Select(int.Parse).ToArray(); ;

            SortedDictionary<int, int> numbersFrequency = new SortedDictionary<int, int>();

            foreach (int number in numbers )
            {
                if (numbersFrequency.ContainsKey(number))
                {
                    numbersFrequency[number] += 1;
                }
                else
                {
                    numbersFrequency.Add(number, 1);

                }
            }

            foreach (KeyValuePair <int, int> number in numbersFrequency) {
                Console.WriteLine(number.Key + " -> " + number.Value);
            }
        }
    }
}
