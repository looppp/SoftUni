namespace Problem_2._Basic_Queue_Operations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] elements = Console.ReadLine().Split().Select(int.Parse).ToArray();
            int numberOfElementsToPush = elements[0];
            int numberOfElementsToPop = elements[1];
            int elementToLookForInStack = elements[2];
            int[] inputNumbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
            Queue<int> selectedNumbers = new Queue<int>();

            for (int i = 0; i < numberOfElementsToPush; i++)
            {
                selectedNumbers.Enqueue(inputNumbers[i]);
            }
            for (int j = 0; j < numberOfElementsToPop; j++)
            {
                selectedNumbers.Dequeue();
            }

            if (selectedNumbers.Contains(elementToLookForInStack))
            {
                Console.WriteLine("true");
            }
            else if (selectedNumbers.Count > 0)
            {
                Console.WriteLine(selectedNumbers.Min());
            }
            else
            {
                Console.WriteLine(0);
            }
        }
    }
}
