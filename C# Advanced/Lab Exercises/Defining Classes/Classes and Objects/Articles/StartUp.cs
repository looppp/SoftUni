namespace Articles
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string[] articleComponens = Console.ReadLine().Split(", ").ToArray();
            string title = articleComponens[0];
            string content = articleComponens[1];
            string author = articleComponens[2];
            Article article = new Article(title, content, author);

            int numberOfCommands = int.Parse(Console.ReadLine());

            for(int i = 0; i < numberOfCommands; i++)
            {
                string[] commands = Console.ReadLine().Split(": ");
                string method = commands[0];
                string newInfo = commands[1];

                switch (method)
                {
                    case "Edit":
                        article.Edit(newInfo);
                        break;
                    case "ChangeAuthor":
                        article.ChangeAuthor(newInfo);
                        break;
                    case "Rename":
                        article.Rename(newInfo);
                        break;
                }
            }

            Console.WriteLine(article);
        }

    }
}
