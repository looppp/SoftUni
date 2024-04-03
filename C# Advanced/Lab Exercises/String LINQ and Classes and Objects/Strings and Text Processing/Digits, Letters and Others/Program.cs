using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Digits__Letters_and_Others
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();

            StringBuilder digits = new StringBuilder();
            StringBuilder letters = new StringBuilder();
            StringBuilder extractedSymbols = new StringBuilder();

            foreach(char symbol in text)
            {
                if (char.IsDigit(symbol))
                {
                    digits.Append(symbol);
                }
                else if (char.IsLetter(symbol))
                {
                    letters.Append(symbol);
                }
                else
                {
                    extractedSymbols.Append(symbol);
                }
            }

            Console.WriteLine(digits.ToString());
            Console.WriteLine(letters.ToString());
            Console.WriteLine(extractedSymbols.ToString());
        }
    }
}
