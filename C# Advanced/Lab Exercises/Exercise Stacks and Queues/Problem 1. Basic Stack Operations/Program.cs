namespace Problem_1._Basic_Stack_Operations
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
            Stack<int> selectedNumbers = new Stack<int>();

            for(int i = 0; i < numberOfElementsToPush; i++)
            {
                selectedNumbers.Push(inputNumbers[i]);
            }
            for (int j = 0; j < numberOfElementsToPop; j++)
            {
                selectedNumbers.Pop();
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
