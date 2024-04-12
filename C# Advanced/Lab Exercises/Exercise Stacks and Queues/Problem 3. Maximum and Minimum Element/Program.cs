namespace Problem_3._Maximum_and_Minimum_Element
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int inputCount = int.Parse(Console.ReadLine());
            Stack<int> stackOfNumbers = new Stack<int>();

            int min = 0;
            int max = 0;

            for(int i = 0; i < inputCount; i++)
            {
                string[] inputCommand = Console.ReadLine().Split().ToArray();
                int typeOfCommand = int.Parse(inputCommand[0]);
               

                switch (typeOfCommand)
                {
                    case 1:
                        int numberToAdd = int.Parse(inputCommand[1]);
                        stackOfNumbers.Push(numberToAdd);
                        if(numberToAdd > max) max = numberToAdd;
                        if(numberToAdd < min)  min = numberToAdd;
                        break;

                    case 2:
                        if(stackOfNumbers.Count > 0)
                        {
                            int removedElement = stackOfNumbers.Pop();

                            if (removedElement == max)
                            {
                                if (stackOfNumbers.Count > 0)
                                {
                                    max = stackOfNumbers.Max();
                                }
                                else
                                {
                                    max = int.MinValue;
                                }
                            }
                            if (removedElement == min)
                            {
                                if (stackOfNumbers.Count > 0)
                                {
                                    max = stackOfNumbers.Min();
                                }
                                else
                                {
                                    max = int.MinValue;
                                }
                            }
                           
                        }
                        break;

                    case 3:
                        Console.WriteLine(max);
                        break;

                    case 4:
                        Console.WriteLine(min);
                        break;
                }

                Console.WriteLine(string.Join(", ", stackOfNumbers));
            }
        }
    }
}
