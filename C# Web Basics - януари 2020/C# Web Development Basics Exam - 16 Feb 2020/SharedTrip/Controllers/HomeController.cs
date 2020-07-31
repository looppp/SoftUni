namespace SharedTrip.App.Controllers
{
    using SharedTrip.Models;
    using SharedTrip.Services;
    using SIS.HTTP;
    using SIS.MvcFramework;
    using System.Collections;
    using System.Collections.Generic;

    public class HomeController : Controller
    {
        private readonly ITripService tripService;

        public HomeController(ITripService tripService)
        {
            this.tripService = tripService;
        }

        [HttpGet("/")]
        public HttpResponse IndexSlash()
        {
            return this.Index();
        }
        public HttpResponse Index()
        {

            if (IsUserLoggedIn()) 
            {
                var allTrips = tripService.GetAll();
                return this.View(allTrips);
            }
            return this.View();
        }
    }
}