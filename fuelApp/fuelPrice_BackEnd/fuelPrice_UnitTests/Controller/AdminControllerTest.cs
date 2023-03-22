using fuelPrice_BackEnd.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FakeItEasy;
using fuelPrice_BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;
using fuelPrice_BackEnd.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Xml;
using System.Web.Http.Results;

namespace fuelPrice_UnitTests.Controller
{
    public class AdminControllerTest
    {
       
        private readonly AdminController controller;
        private readonly fuelDatabaseContext context;

        public AdminControllerTest()
        {
            var options = new DbContextOptionsBuilder<fuelDatabaseContext>()
                .UseInMemoryDatabase(databaseName: "fuelAPIDatabase")
                .Options;

            context = new fuelDatabaseContext(options);
            controller = new AdminController(context);
        }

        [Fact]
        public void GetUsers_ActionExecutes_ReturnsOkResult()
        {
            //Act
            var result = controller.GetUsers();

            //Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);
        }


        [Fact]
        public void GetAllUsers_ActionExecutes_ReturnsOkResult()
        {
           
            /*
            var testModel = new User {
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
            };*/

            // Act
            var result = controller.GetAllUsers();

            // Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);

            //Assert.IsNotType<OkObjectResult>(result as OkObjectResult);
        }

        [Fact]
        public void GetAllOrders_ActionExecutes_ReturnsOkResult()
        {
              
            // Act
            var result = controller.GetAllUsers();

            // Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);

        }



    }
}
