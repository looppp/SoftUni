namespace Fashion_Boutique
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> boxOfClothes = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            int rackCapacity = int.Parse(Console.ReadLine());
            int needetNumberOfRacks = 1;
            int currentRackCapacity = 0;

            while(boxOfClothes.Count > 0){ 
                if(currentRackCapacity + boxOfClothes.Peek() > rackCapacity)
                {
                    currentRackCapacity = 0;
                    needetNumberOfRacks++;
                }
                else if( currentRackCapacity + boxOfClothes.Peek() == rackCapacity)
                {
                    currentRackCapacity = 0;
                    needetNumberOfRacks++;
                }
                else
                {
                    currentRackCapacity += boxOfClothes.Pop();
                }
            }

            Console.WriteLine(needetNumberOfRacks);
        }
    }
}
