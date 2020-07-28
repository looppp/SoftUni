using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using SharedTrip.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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
            return this.dbContext.Users.Any(x => x.Email == email);
        }

        public string GetUserId(string username, string password)
        {
            var hashedPassword = this.Hash(password);
            var user = this.dbContext.Users.FirstOrDefault(
                x => x.Username == username && x.Password == hashedPassword);
            if (user == null)
            {
                return null;
            }

            return user.Id;
        }

      

        public string GetUsername(string id)
        {
            var username = dbContext.Users.Where(x => x.Id == id)
                .Select(x => x.Username)
                .FirstOrDefault();

            return username;
        }

        public void Register(string username, string email, string password)
        {
            var hashedPassword = this.Hash(password);
            var user = new User
            {
                Id = Guid.NewGuid().ToString(),
                Username = username,
                Email = email,
                Password = hashedPassword
            };

            dbContext.Users.Add(user);
            dbContext.SaveChanges();
        }

        public bool UsernameExists(string username)
        {
            return this.dbContext.Users.Any(x => x.Username == username);
        }


        private string Hash(string password)
        {
            if (password == null)
            {
                return null;
            }

            var crypt = new SHA256Managed();
            var hash = new StringBuilder();
            byte[] crypto = crypt.ComputeHash(Encoding.UTF8.GetBytes(password));
            foreach (byte theByte in crypto)
            {
                hash.Append(theByte.ToString("x2"));
            }

            return hash.ToString();
        }
    }
}
