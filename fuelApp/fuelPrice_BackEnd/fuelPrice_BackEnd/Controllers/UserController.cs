using angularAuthAPI.Helpers;
using fuelPrice_BackEnd.Context;
using fuelPrice_BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Text;

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
            //var user = await _authContext.Users.FirstOrDefaultAsync(x => x.userName == userObj.userName); //passwordhasher

            if (user == null)
            {
                return NotFound(new { Message = "User Not Found or Password Wrong!" });
            }

            /*  if (!PasswordHasher.VerifyPassword(userObj.password, user.password))
              {
                  return NotFound(new { Message = "Password Incorrect!" }); //passwordhasher
              }*/

            return Ok(new
            {
                Message = "Login Success!",
                user
            });
        }

        [HttpPost("register")]

        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }

            //check username uniqueness
            if (await CheckUserNameExistAsync(userObj.userName))
            {
                return BadRequest(new { Message = "Username Not Valid!" });

            }

            //check strength of password
            var pass = CheckPasswordStrength(userObj.password);
            if (!string.IsNullOrEmpty(pass))
            {
                return BadRequest(new { Message = pass.ToString() });
            }

            /*  userObj.password = PasswordHasher.HashPassword(userObj.password);
              userObj.passwordVerification = userObj.password;*/ //passwordhasher

            userObj.accessLevel = 0;
            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();

            return Ok(new
            {
                Message = "Registration Success!"
            });
        }

        private Task<bool> CheckUserNameExistAsync(string username)
               => _authContext.Users.AnyAsync(x => x.userName == username);

        private string CheckPasswordStrength(string password)
        {
            StringBuilder sb = new StringBuilder();
            if (password.Length < 8)
            {
                sb.Append("Minimum password length should be 8" + Environment.NewLine);
            }

            if (!(Regex.IsMatch(password, "[a-z]") && Regex.IsMatch(password, "[A-Z]") && Regex.IsMatch(password, "[0-9]")))
            {
                sb.Append("Password should be Alphanumeric" + Environment.NewLine);
            }

            if (!(Regex.IsMatch(password, "[<,>,@,!,#,$,%,^,&,*,(,),_,+,\\[,\\], {, }, ?, :, ;, |, ', \\, ., /, ~, `, -, =]")))
            {
                sb.Append("Password should contain special character" + Environment.NewLine);
            }

            return sb.ToString();
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


        /*[HttpGet("currentUser")] //Leave this here for future reference
        
        public async Task<IActionResult> getCurrentUser([FromQuery] User userObj)
        {

            var user = await _authContext.Users.FirstOrDefaultAsync(x => x.userName == userObj.userName && x.password == userObj.password);

            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User Doest not Exists"
                });
            }

            return Ok(new
            {
                user, 
                Message = "Found User"
            });
        }*/

        [HttpPost("addOrder")]
        public IActionResult AddOrder([FromBody] Pricing orderObj)
        {

            if (orderObj == null)
            {
                return BadRequest();
            }
            else
            {

                /*var user = _authContext.Users.AsNoTracking().FirstOrDefault(x => x.clientID == orderObj.clientID);

                orderObj.User = user;*/

                /* _authContext.Orders.Add(userObj);
                 _authContext.SaveChanges();*/

                _authContext.Orders.AddAsync(orderObj);
                _authContext.SaveChangesAsync();

                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Order Added"
                });
            }
        }


        [HttpGet("GetCurUserOrders")]

        public IActionResult GetCurUserOrders(int clientID)
        {
            //referring to the foreign key from the table

            var allOrders = _authContext.Orders.AsQueryable().Where(x => x.clientID == clientID);

            if (allOrders == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "User/Account does not exists"
                });
            }

            return Ok(new
            {
                StatusCode = 200,
                orderDetails = allOrders
            });
        }



        //deleteOrders, getOrders, get_id from admin side

    }


}
