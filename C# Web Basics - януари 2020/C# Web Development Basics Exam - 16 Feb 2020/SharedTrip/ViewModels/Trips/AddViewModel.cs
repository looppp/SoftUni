using System;
using System.Collections.Generic;
using System.Text;

namespace SharedTrip.ViewModels.Trips
{
    public class AddViewModel
    {
        public string startPoint { get; set; }

        public string endPoint { get; set; }

        public DateTime departureTime { get; set; }

        public string imagePath { get; set; }

        public int seats { get; set; }

        public string description { get; set; }
    }
}
