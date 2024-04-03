using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Strings_and_Text_Processing
{
    internal class Program
    {
      
        static void Main()
        {
            Console.WriteLine("Enter strings (type 'end' to finish):");
            string input;
            while ((input = Console.ReadLine()) != "end")
            {
                string reversed = string.Join("", input.ToCharArray().Reverse());
                Console.WriteLine($"{input} = {reversed}");
            }
        }

      
    }

    
}
