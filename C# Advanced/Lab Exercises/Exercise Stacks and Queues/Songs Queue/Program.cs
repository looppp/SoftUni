namespace Songs_Queue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<string> queuedSongs = new Queue<string>(Console.ReadLine().Split(", ").ToArray());

            while(queuedSongs.Count() > 0)
            {
                string[] tokens = Console.ReadLine().Split(" ", 2).ToArray();
                string command = tokens[0];

                switch (command)
                {
                    case "Play":
                        queuedSongs.Dequeue();
                        break;

                    case "Add":
                        string currentSong = tokens[1];
                        if (queuedSongs.Contains(currentSong))
                        {
                            Console.WriteLine($"{currentSong} is already contained!");
                        }
                        else
                        {
                            queuedSongs.Enqueue(currentSong);
                        }
                        break;

                    case "Show":
                        Console.WriteLine(string.Join(", ", queuedSongs));
                        break;
                }
            }
            Console.WriteLine("No more songs!");
        }
    }
}
