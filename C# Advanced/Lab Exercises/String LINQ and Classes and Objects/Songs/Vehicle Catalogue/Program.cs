namespace Vehicle_Catalogue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            Catalog vehicleCatalog = new Catalog();

            while (input != "end")
            {
                string[] components = input.Split("/").ToArray();
                string typeOfVehicle = components[0];
                string brand = components[1];
                string model = components[2];
                int horsePowerOrWeight = int.Parse(components[3]);

                if (typeOfVehicle == "Car")
                {
                    Car car = new Car() { Brand = brand, Model = model, HorsePower = horsePowerOrWeight };
                    vehicleCatalog.Cars.Add(car);
                }
                else
                {
                    Truck car = new Truck() { Brand = brand, Model = model, Weight = horsePowerOrWeight };
                    vehicleCatalog.Trucks.Add(car);
                }

                input = Console.ReadLine();
            }
            if (vehicleCatalog.Cars.Count > 0)
            {
                List<Car> orderedCars = vehicleCatalog.Cars.OrderBy(x => x.Brand).ToList();

                Console.WriteLine("Cars:");

                foreach (Car car in orderedCars)
                {
                    Console.WriteLine($"{car.Brand}: {car.Model} - {car.HorsePower}hp");
                }
            }
            if(vehicleCatalog.Trucks.Count > 0)
            {
                List<Truck> orderedCars = vehicleCatalog.Trucks.OrderBy(x => x.Brand).ToList();

                Console.WriteLine("Trucks:");

                foreach (Truck truck in orderedCars)
                {
                    Console.WriteLine($"{truck.Brand}: {truck.Model} - {truck.Weight}kg");
                }
            }
        }
    }

    public class Truck
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Weight { get; set; }
    }
    public class Car
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public int HorsePower { get; set; }
    }

    public class Catalog
    {
        public List<Car> Cars { get; set; } = new List<Car>();
        public List<Truck> Trucks { get; set; } = new List<Truck>();
    }
}
