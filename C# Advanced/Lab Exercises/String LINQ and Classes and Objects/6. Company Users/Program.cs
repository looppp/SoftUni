namespace _6._Company_Users
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, HashSet<string>> companyAndUsers = new Dictionary<string, HashSet<string>>();
            string input = Console.ReadLine();

            while(input != "End")
            {
                string[] companyUser = input.Split(" -> ").ToArray();
                string company = companyUser[0];
                string user = companyUser[1];

                if(companyAndUsers.ContainsKey(company))
                {
                    companyAndUsers[company].Add(user);
                }
                else
                {
                    companyAndUsers.Add(company, new HashSet<string>() { user });
                }

                input = Console.ReadLine();
                
            }
            foreach (KeyValuePair<string, HashSet<string>> pair in companyAndUsers)
            {
                Console.WriteLine(pair.Key);
                foreach(string value in pair.Value)
                {
                    Console.WriteLine($"-- {value}");
                }
            }
        }
    }
}
