using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace SharedTrip.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext dbContext;

        public UserService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public bool EmailExists(string email)
        {
            throw new NotImplementedException();
        }

        public string GetUserId(string username, string password)
        {
            throw new NotImplementedException();
        }

        public string GetUsername(string id)
        {
            throw new NotImplementedException();
        }

        public void Register(string username, string email, string password)
        {
            throw new NotImplementedException();
        }

        public bool UsernameExists(string username)
        {
            throw new NotImplementedException();
        }
    }
}
