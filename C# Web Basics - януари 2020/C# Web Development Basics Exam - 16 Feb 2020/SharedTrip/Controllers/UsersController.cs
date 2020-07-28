namespace SharedTrip.Controllers
{
    using SharedTrip.ViewModels.Users;
    using SIS.HTTP;
    using SIS.MvcFramework;
    public class UsersController : Controller
    {
        public UsersController()
        {

        }
        public HttpResponse Login()
        {
            return this.View();
        }

        public HttpResponse Register()
        {
            return this.View();
        }
        
        [HttpPost]
        public HttpResponse Login(LoginInputModel loginInput)
        {
           // if (User != null)
           // {
           //     return this.View();
           // }
            return this.View();
        }

        [HttpPost]
        public HttpResponse Register(RegisterInputModel registerInput)
        {
           // if (User != null)
           // {
           //     return this.View();
           // }
            return this.View();
        }
    }
}
