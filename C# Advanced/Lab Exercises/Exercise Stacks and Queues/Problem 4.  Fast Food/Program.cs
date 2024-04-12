namespace Problem_4.__Fast_Food
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int foodQuantity = int.Parse(Console.ReadLine());

            Queue<int> orders = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());

            Console.WriteLine(orders.Max());
            int cycles = orders.Count();

            for(int i = 0; i < cycles; i++)
            {
                if (foodQuantity - orders.First() >= 0)
                {
                    foodQuantity -= orders.First();
                    orders.Dequeue();
                }
            }

            if (foodQuantity >= 0 && orders.Count == 0)
            {
                Console.WriteLine("Orders complete");
            }
            else
            {
                Console.WriteLine($"Orders left: {string.Join(" ", orders)}");
            }
        }
    }
}
