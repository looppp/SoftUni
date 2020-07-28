using Andreys.Services;
using Andreys.ViewModels.Products;
using SIS.HTTP;
using SIS.MvcFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andreys.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductsService productsService;

        public ProductsController(IProductsService productsService)
        {
            this.productsService = productsService;
        }
        public HttpResponse Add()
        {
            if (!this.IsUserLoggedIn())
            {
                return this.Redirect("/Users/Login");
            }

            return this.View();
        }

        [HttpPost]
        public HttpResponse Add(ProductAddInputModel inputModel)
        {
           var productId = productsService.Add(inputModel);

            return this.View();
        }

        public HttpResponse Details(int id)
        {
            if (this.IsUserLoggedIn())
            {
                var products = productsService.GetById(id);
                return this.View(products, "Details");
            }

            return this.View();
        }

        public HttpResponse Delete(int id)
        {
            productsService.DeleteById(id);
            return this.Redirect("/");

        }
    }
}
