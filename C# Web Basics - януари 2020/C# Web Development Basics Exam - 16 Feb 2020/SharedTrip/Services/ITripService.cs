using SharedTrip.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedTrip.Services
{
    public interface ITripService
    {
        void AddTrip(string startPoint, string endPoint, DateTime departureTime, string carImage, int seats, string description);

        string GetTripId(string startPoint, string endPoint, DateTime departureTime);

        Trip GetTripById(string id);

        IEnumerable<Trip> GetAll();
    }
}
