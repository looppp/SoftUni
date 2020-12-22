using Andreys.Data;
using Andreys.Models;
using Andreys.ViewModels.Products;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public void DeleteById(int id)
        {
            var itemForDelete = GetById(id);
            dbContext.Products.Remove(itemForDelete);
            dbContext.SaveChanges();
        }

        public Product GetById(int id)
        {
            return dbContext.Products.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Product> GetProducts()
        {
            var productList = dbContext.Products.Select(x => new Product
            {
                Id = x.Id,
                Name = x.Name,
                ImageUrl = x.ImageUrl,
                Price = x.Price,
                
            }).ToArray();

            return productList;
        }


    }
}
