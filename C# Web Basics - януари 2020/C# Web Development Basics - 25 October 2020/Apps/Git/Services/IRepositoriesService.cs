using Git.ViewModels.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Git.Services
{
    public interface IRepositoriesService
    {
        void Create(CreateRepositoryInputModel repo, string userId);

        IEnumerable<RepositoryViewModel> GetAll();
    }
}
