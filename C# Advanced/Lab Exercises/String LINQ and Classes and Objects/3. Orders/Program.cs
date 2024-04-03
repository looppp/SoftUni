namespace _3._Orders
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<decimal>> orderReceipt = new Dictionary<string, List<decimal>>();
            string input = Console.ReadLine();

            while(input != "buy")
            {
                string[] orders = input.Split().ToArray();
                string productName = orders[0];
                decimal quantity = decimal.Parse(orders[2]);
                decimal price = decimal.Parse(orders[1]);

                if (orderReceipt.ContainsKey(orders[0])){

                    orderReceipt[productName][1] += quantity;
                    orderReceipt[productName][0] = price;
                }
                else
                {
                    orderReceipt.Add(productName, new List<decimal> () { price, quantity });
                }

                input = Console.ReadLine();
            }

            foreach(KeyValuePair<string, List<decimal>> pair in orderReceipt)
            {
                decimal finalPrice = pair.Value[0] * pair.Value[1];
                Console.WriteLine($"{pair.Key} -> {finalPrice}");
            }
        }
    }
}
