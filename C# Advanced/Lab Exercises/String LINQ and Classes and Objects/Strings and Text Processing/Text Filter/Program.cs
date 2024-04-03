using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Text_Filter
{
    internal class Program
    {
        static void Main()
        {

            string[] bannedWords = Console.ReadLine().Split(new string[] {", "}, StringSplitOptions.RemoveEmptyEntries);
            string text = Console.ReadLine();

            foreach(string bannedWord in bannedWords)
            {
                //string censorWord = "".PadLeft(bannedWord.Length, '*');
                string censorWord = new string('*', bannedWord.Length);

                while(text.Contains(bannedWord))
                {
                    text = text.Replace(bannedWord, censorWord);
                }

            }

            Console.WriteLine(text);
            
        }
    }
}
