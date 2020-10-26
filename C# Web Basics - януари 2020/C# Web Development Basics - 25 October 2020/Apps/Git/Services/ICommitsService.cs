using Git.ViewModels.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Git.Services
{
    public interface ICommitsService 
    {
        IEnumerable<CommitsViewModel> GetAll();

    }
}
