using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SharedTrip.Models
{
    public class User
    {

        [Key]
        public string Id { get; set; }

        public string Username { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public ICollection<UserTrip> UserTrips { get; set; }
    }
}
