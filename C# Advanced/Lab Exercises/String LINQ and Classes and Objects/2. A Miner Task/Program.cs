﻿namespace _2._A_Miner_Task
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> resources = new Dictionary<string, int>();
            string input = Console.ReadLine();

            while (input != "stop")
            {
                int quantity = int.Parse(Console.ReadLine());

                if (resources.ContainsKey(input))
                {
                    resources[input] += quantity;
                }
                else
                {
                    resources.Add(input, quantity);
                }

                input = Console.ReadLine();
            } 

            foreach(KeyValuePair<string, int> resource in resources)
            {
                Console.WriteLine($"{resource.Key} -> {resource.Value}");
            }
        }
    }
}
