using Andreys.Data;
using Andreys.Models;
using Andreys.ViewModels.Products;
using System;
using System.Collections.Generic;
using System.Text;

namespace Andreys.Services
{
    public class ProductsService : IProductsService
    {
        private readonly AndreysDbContext dbContext;

        public ProductsService(AndreysDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public int Add(ProductAddInputModel inputModel)
        {
            var genderEnum = Enum.Parse<Gender>(inputModel.Gender);
            var categoryEnum = Enum.Parse<Category>(inputModel.Category);

            var product = new Product
            {
                Name = inputModel.Name,
                Description = inputModel.Description,
                ImageUrl = inputModel.ImageUrl,
                Price = inputModel.Price,
                Gender = genderEnum,
                Category = categoryEnum
            };

            this.dbContext.Products.Add(product);
            this.dbContext.SaveChanges();

            return product.Id;
        }
    }
}
