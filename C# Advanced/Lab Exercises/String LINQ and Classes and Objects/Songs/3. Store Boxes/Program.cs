namespace _3._Store_Boxes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            List<Box> boxToGet = new List<Box>();

            while(input != "end")
            {
                string[] components = input.Split(" ").ToArray();
                string serialNumber = components[0];
                string itemName = components[1];
                int itemQuantity = int.Parse(components[2]);
                decimal itemPrice = decimal.Parse(components[3]);


                Item currentItem = new Item(itemName, itemPrice);
                Box currentBox = new Box(serialNumber, currentItem, itemQuantity);

                boxToGet.Add(currentBox);

                input = Console.ReadLine();
            }

            boxToGet = boxToGet.OrderByDescending(x => x.Price).ToList();

            foreach(Box box in boxToGet)
            {
                Console.WriteLine(box.SerialNumber);
                Console.WriteLine($"-- {box.Item.Name} - ${box.Item.Price:F2}: {box.ItemQuantity}");
                Console.WriteLine($"-- ${box.Price:F2}");
            }
        }
    }

    public class Item
    {
        public Item(string name, decimal price) 
        {
            Name = name;
            Price = price;
        }

        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    public class Box
    {

        public Box(string serialNumber, Item item, int itemQuantity)
        {
            SerialNumber = serialNumber;
            Item = item;
            ItemQuantity = itemQuantity;
            Price = item.Price * itemQuantity;
        }

        public string SerialNumber { get; set; }
        public Item Item { get; set; }
        public int ItemQuantity { get; set; }
        public decimal Price { get; set; }
    }
}
