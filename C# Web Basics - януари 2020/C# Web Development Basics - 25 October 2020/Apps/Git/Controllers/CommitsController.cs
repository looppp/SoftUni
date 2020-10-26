using SUS.HTTP;
using System;
using System.Collections.Generic;
using System.Text;
using SUS.MvcFramework;
using Git.Services;

namespace Git.Controllers
{
    public class CommitsController : Controller
    {
        private readonly ICommitsService service;

        public CommitsController(ICommitsService service)
        {
            this.service = service;
        }
        public HttpResponse All()
        {
            var commits = this.service.GetAll();
            return this.View(commits);
        }

        public HttpResponse Create()
        {
            
        }

    }
}
