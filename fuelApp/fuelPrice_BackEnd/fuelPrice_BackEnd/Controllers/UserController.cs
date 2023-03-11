using fuelPrice_BackEnd.Context;
using fuelPrice_BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fuelPrice_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly fuelDatabaseContext _authContext;

        public UserController(fuelDatabaseContext fuelDbContext)
        {
            _authContext = fuelDbContext;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }

            var user = await _authContext.Users.FirstOrDefaultAsync(x => x.userName == userObj.userName && x.password == userObj.password);

            if (user == null)
            {
                return NotFound(new { Message = "User Not Found!" });
            }

            return Ok(new
            {
                Message = "Login Success!"
            });
        }

        [HttpPost("register")]

        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }

            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();

            return Ok(new
            {
                Message = "Registration Success!"
            });
        }

        [HttpPut("updateAccount")]

        public IActionResult updateAccount([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }

            var user = _authContext.Users.AsNoTracking().FirstOrDefault(x => x.clientID == userObj.clientID);

            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Account Cannot be Changed"
                });
            }
            else
            {
                _authContext.Entry(userObj).State = EntityState.Modified;
                _authContext.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Updated Account"
                });
            }
        }

      /*  [HttpGet("getCurrentUser")]

        public IActionResult GetCurrentUsers([FromBody] User userObj)
        {
            var user = _authContext.Users.AsNoTracking().FirstOrDefault(x => x.clientID == userObj.clientID);
            return Ok(new
            {
                StatusCode = 200,
                userDetails = user
            });
        }*/
        //deleteOrders, getOrders, get_id from admin side

    }

}
