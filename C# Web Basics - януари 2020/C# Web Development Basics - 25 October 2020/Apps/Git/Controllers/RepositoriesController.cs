using Git.Services;
using Git.ViewModels.Repositories;
using SUS.HTTP;
using SUS.MvcFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Git.Controllers
{
    public class RepositoriesController : Controller
    {
        private readonly IRepositoriesService service;

        public RepositoriesController(IRepositoriesService service)
        {
            this.service = service;
        }
        public HttpResponse All()
        {
            var repositories = this.service.GetAll();
            return this.View(repositories);
        }

        public HttpResponse Create()
        {
            return this.View();
        }

        [HttpPost]
        public HttpResponse Create(CreateRepositoryInputModel input)
        {
            var userId = this.GetUserId();
            if (string.IsNullOrEmpty(input.name) || input.name.Length < 3 || input.name.Length > 10)
            {
                return this.Error("Username has to be between 5 and 20 characters");
            }

            this.service.Create(input, userId);
            return this.Redirect("/Repositories/All");
        }



    }
}
