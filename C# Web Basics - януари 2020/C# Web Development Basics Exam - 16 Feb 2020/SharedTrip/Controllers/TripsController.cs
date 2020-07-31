using SharedTrip.Services;
using SharedTrip.ViewModels.Trips;
using SIS.HTTP;
using SIS.MvcFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedTrip.Controllers
{
    public class TripsController : Controller
    {
        private readonly ITripService tripService;

        public TripsController(ITripService tripService )
        {
            this.tripService = tripService;
        }

        public HttpResponse All()
        {
            return this.View();
        }
        public HttpResponse Details(string Id)
        {
            var trip = this.tripService.GetTripById(Id);
            return this.View();
        }

        public HttpResponse Add()
        {
            return this.View();
        }

        [HttpPost]
        public HttpResponse Add(AddViewModel input)
        {
            tripService.AddTrip(input.startPoint, input.endPoint, input.departureTime, input.imagePath, input.seats, input.description);

            return this.Redirect("/Trips/All");
        }

      
    }
}
