using fuelPrice_BackEnd.Context;
using fuelPrice_BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace fuelPrice_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AdminController : ControllerBase
    {
        private readonly fuelDatabaseContext _context;

        public AdminController(fuelDatabaseContext userDbContext) { 
            _context = userDbContext;
        }

        [HttpGet("users")]

        public IActionResult GetUsers()
        {
            var userdetails = _context.Users.AsQueryable();
            return Ok(userdetails);

        }
/*
        [HttpPost("add_user")]

        public IActionResult AddUser([FromBody] User userObj) { 
        
            if (userObj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.Users.Add(userObj);
                _context.SaveChanges();

                return Ok(new
                {
                    StatusCode = 200,
                    Message = "User Added"
                });
            }
        }
*/
        [HttpGet("getAllUsers")]

        public IActionResult GetAllUsers()
        {
            var allUsers = _context.Users.AsQueryable();

            return Ok(new
            {
                StatusCode = 200,
                userDetails = allUsers
            });
        }

        [HttpGet("getAllOrders")]

        public IActionResult GetAllOrders()
        {
            var allOrders = _context.Orders.AsQueryable();
            return Ok(new
            {
                StatusCode = 200,
                orderDetails = allOrders
            });
        }

        //delete, get, get_id from admin side
    }
}
