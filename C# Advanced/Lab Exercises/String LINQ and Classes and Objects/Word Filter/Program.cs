namespace Word_Filter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] inputWords = Console.ReadLine().Split().Where(x => x.Length % 2 == 0).ToArray();
            Console.WriteLine(string.Join("\n", inputWords));

        }
    }
}
