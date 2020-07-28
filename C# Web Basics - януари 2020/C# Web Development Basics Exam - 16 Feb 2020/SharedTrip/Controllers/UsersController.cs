namespace SharedTrip.Controllers
{
    using SharedTrip.Services;
    using SharedTrip.ViewModels.Users;
    using SIS.HTTP;
    using SIS.MvcFramework;
    using System;

    public class UsersController : Controller
    {
        private readonly IUserService userService;

        public UsersController(IUserService userService)
        {
            this.userService = userService;
        }
        public HttpResponse Login()
        {
            if (this.IsUserLoggedIn())
            {
                return this.Redirect("/");
            }

            return this.View();
        }

        public HttpResponse Register()
        {
            if (this.IsUserLoggedIn())
            {
                return this.Redirect("/");
            }

            return this.View();
        }
        
        [HttpPost]
        public HttpResponse Login(LoginInputModel loginInput)
        {
            var userId = this.userService.GetUserId(loginInput.username, loginInput.password);
            Console.WriteLine(userId);

            if (userId != null)
            {
                this.SignIn(userId);
                return this.Redirect("/home/index");
            }
            return this.Redirect("/Users/Login");
        }

        [HttpPost]
        public HttpResponse Register(RegisterInputModel registerInput)
        {
            this.userService.Register(registerInput.Username, registerInput.Email, registerInput.Password);
            return this.Redirect("/Users/Login");

        }

        public HttpResponse Logout()
        {
            if (!this.IsUserLoggedIn())
            {
                return this.Redirect("/Users/Login");
            }

            this.SignOut();

            return this.Redirect("/");
        }
    }
}
