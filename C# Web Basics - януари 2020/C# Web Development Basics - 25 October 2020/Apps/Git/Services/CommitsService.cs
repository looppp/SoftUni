using Git.Data;
using Git.ViewModels.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Git.Services
{
    public class CommitsService : ICommitsService
    {
        private readonly ApplicationDbContext db;

        public CommitsService(ApplicationDbContext db)
        {
            this.db = db;
        }
        public IEnumerable<CommitsViewModel> GetAll()
        {
            var commits = this.db.Commits.Select(x => new CommitsViewModel
            {
               Name = x.Repository.Name,
               Repository = x.Repository.Name,
               Description = x.Description,
               CreateOn = DateTime.UtcNow,
            }
           ).ToList();
            return commits;
        }
    }
}
