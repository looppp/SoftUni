using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repeat_Stringss
{
    internal class Program
    {
        static void Main()
        {
            string [] words = Console.ReadLine().Split();
            string output = "";

            for(int i = 0; i < words.Length; i++)
            {
                string currentWord = words[i];

                for(int j = 0; j <  currentWord.Length; j++)
                {
                    output += currentWord;
                }
            }

            Console.WriteLine(output);
        }
    }
}
