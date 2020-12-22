using Git.Data;
using Git.ViewModels.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using SUS.MvcFramework;

namespace Git.Services
{
    public class RepositoriesService : IRepositoriesService
    {
        private readonly ApplicationDbContext db;

        public RepositoriesService(ApplicationDbContext db)
        {
            this.db = db;
        }
        public void Create(CreateRepositoryInputModel repo, string userid)
        {
            var IsPublic = false;
            var owner = this.db.Users.FirstOrDefault(x => x.Id == userid);
            if (repo.repositoryType == "Public")
            {
                IsPublic = true;
            }
            var dbRepo = new Repository
            {
                Name = repo.name,
                CreatedOn = DateTime.UtcNow,
                IsPublic = IsPublic,
                Owner = owner,
                OwnerId = userid
            };

            this.db.Repositories.Add(dbRepo);
            this.db.SaveChanges();
        }

        public IEnumerable<RepositoryViewModel> GetAll()
        {
            var repositories = this.db.Repositories.Select(x => new RepositoryViewModel
            {
                Id = x.Id,
                Name = x.Name,
                Owner = x.Owner.Username,
                CreatedOn = x.CreatedOn,
                CommitsCount = x.Commits.Count(),
            }
            ).ToList();
            return repositories;
        }
    }
}
