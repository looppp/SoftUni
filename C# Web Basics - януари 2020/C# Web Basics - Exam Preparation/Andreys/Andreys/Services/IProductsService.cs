using Andreys.Models;
using Andreys.ViewModels.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andreys.Services
{
    public interface IProductsService
    {
        int Add(ProductAddInputModel inputModel);

        IEnumerable<Product> GetProducts();

        Product GetById(int id);

        void DeleteById(int id);
    }
}
