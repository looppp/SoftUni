using Microsoft.CodeAnalysis.CSharp.Syntax;
using SharedTrip.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace SharedTrip.Services
{
    public class TripService : ITripService
    {
        private readonly ApplicationDbContext dbContext;

        public TripService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void AddTrip(string startPoint, string endPoint, DateTime departureTime, string carImage, int seats, string description)
        {
            var trip = new Trip
            {
                Id = Guid.NewGuid().ToString(),
                StartPoint = startPoint,
                EndPoint = endPoint,
                DepartureTime = departureTime,
                ImagePath = carImage,
                Seats = seats,
                Description = description
            };

            dbContext.Trips.Add(trip);
            dbContext.SaveChanges();
        }

        public IEnumerable<Trip> GetAll()
        {
            var trips = dbContext.Trips.Select(x => new Trip
            {
                StartPoint = x.StartPoint,
                EndPoint = x.EndPoint,
                DepartureTime = x.DepartureTime,
                Seats = x.Seats
            }).ToArray();

            return trips;
        }

        public Trip GetTripById(string id) => this.dbContext.Trips.FirstOrDefault(x => x.Id == id);
 

        public string GetTripId(string startPoint, string endPoint, DateTime departureTime)
        {
            var tripId = dbContext.Trips.Where(
                x => x.StartPoint == startPoint 
                && x.EndPoint == endPoint 
                && x.DepartureTime == departureTime)
                .Select(d => d.Id).FirstOrDefault();

            return tripId;
        }
    }
}
