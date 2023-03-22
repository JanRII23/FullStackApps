using fuelPrice_BackEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fuelPrice_UnitTests
{
    public class MockData
    {
        public static List<User> GetFakeUserList()
        {
            return new List<User>{
             new User{
                clientID = 1,
                userName = "John",
                password = "John23",
                passwordVerification = "John23",
                accessLevel = 0,
                firstName = "John",
                lastName = "Doe",
                addressOne = "Lane Street",
                addressTwo = "Lane Drive",
                city = "Country Road",
                state = "TX",
                zipcode = 12345
             }
         };
        }

        public static List<User> GetFakeEmptyUserList()
        {
            return new List<User>();
        }
    }
}
