namespace Objects_and_Classes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int numberOfSongs = int.Parse(Console.ReadLine());
            List<Song> songsList = new List<Song>();

            for(int i = 0; i < numberOfSongs; i++)
            {
                string[] songComponents = Console.ReadLine().Split("_").ToArray();
                string songTypeList = songComponents[0];
                string songName = songComponents[1];
                string songTime = songComponents[2];

                Song song = new Song()
                {
                    Name = songName,
                    Time = songTime,
                    TypeList = songTypeList
                };

                songsList.Add(song);
                
            }

            string finalInput = Console.ReadLine();

            if(finalInput == "all")
            {
                foreach(Song song in songsList)
                {
                    Console.WriteLine(song.Name);
                }
            }
            else
            {
                List<Song> filteredSongs = songsList.Where(x => x.TypeList == finalInput).ToList();

                foreach (Song song in filteredSongs)
                {
                    Console.WriteLine(song.Name);
                }
            }
        }
    }

    public class Song
    {
        public string Name { get; set; }

        public string Time { get; set; }

        public string TypeList { get; set; }

    }
}
