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
       
        /*private readonly fuelDatabaseContext _mockData;
        private readonly AdminController _controller;
        public AdminControllerTest()
        {
            _mockData.Users(null);

            _controller = new AdminController(_mockData);
        }*/

        [Fact]
        public void GetAllUsers_Execute_ReturnsOkResult()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<fuelDatabaseContext>()
                .UseInMemoryDatabase(databaseName: "fuelAPIDatabase")
                .Options;

            /*options = null;*/

            var context = new fuelDatabaseContext(options);
            var controller = new AdminController(context);
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
        public void GetAllOrders_Execute_ReturnsOkResult()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<fuelDatabaseContext>()
                .UseInMemoryDatabase(databaseName: "fuelAPIDatabase")
                .Options;

            var context = new fuelDatabaseContext(options);
            var controller = new AdminController(context);    

            // Act
            var result = controller.GetAllUsers();

            // Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);

          
        }



    }
}
