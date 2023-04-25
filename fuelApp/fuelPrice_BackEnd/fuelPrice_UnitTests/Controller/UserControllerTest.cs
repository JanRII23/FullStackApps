using FluentAssertions;
using fuelPrice_BackEnd.Context;
using fuelPrice_BackEnd.Controllers;
using fuelPrice_BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fuelPrice_UnitTests.Controller
{
    public class UserControllerTest
    {
        private readonly UserController controller;
        private readonly fuelDatabaseContext context;

        public UserControllerTest()
        {
            var options = new DbContextOptionsBuilder<fuelDatabaseContext>()
                .UseInMemoryDatabase(databaseName: "fuelAPIDatabase")
                .Options;

            context = new fuelDatabaseContext(options);
            controller = new UserController(context);

        }

        [Fact]
        public void RegisterUser_ActionExecutes_ReturnsNotNull()
        {
            //Arrange
            var userModel = new User
            {
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
            };

            //Act
            var result = controller.RegisterUser(userModel);


            //Assert
            result.Should().NotBeNull();
        }

        [Fact]
        public void Authenticate_ActionExecutes_ReturnsNotNull()
        {
            //Arrange
            var userModel = new User
            {
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
            };

            context.Users.Add(userModel);
            context.SaveChanges();

            //Act
            var result = controller.Authenticate(userModel);

            //Assert
            result.Should().NotBeNull();

        }

        [Fact]
        public void UpdateAccount_ActionExecutes_ReturnsNotNull()
        {
            //Arrange
            
            var updateUser = new User
            {
                clientID = 1,
                userName = "Jane",
                password = "Jane23",
                passwordVerification = "Jane23",
                accessLevel = 0,
                firstName = "Jane",
                lastName = "Doe",
                addressOne = "Road Street",
                addressTwo = "Road Drive",
                city = "Country Road",
                state = "TX",
                zipcode = 54321
            };

            //Act
            var result = controller.updateAccount(updateUser);

            //Assert
            result.Should().NotBeNull();
        }

        [Fact]
        public void UpdateAccount_ActionExecutes_ReturnOk()
        {
            //Arrange

            var updateUser = new User
            {
                clientID = 1,
                userName = "Jane",
                password = "Jane23",
                passwordVerification = "Jane23",
                accessLevel = 0,
                firstName = "Jane",
                lastName = "Doe",
                addressOne = "Road Street",
                addressTwo = "Road Drive",
                city = "Country Road",
                state = "TX",
                zipcode = 54321
            };

            //Act
            var result = controller.updateAccount(updateUser);

            //Assert
            result.Should().NotBeNull();
        }

        [Fact]
        public void UpdateAccount_ActionExecutes_ReturnsBadRequest()
        {
            //Arrange

            var updateUser = new User
            {
                clientID = 1,
                userName = "Jane",
                password = "Jane23",
                passwordVerification = "Jane23",
                accessLevel = 0,
                firstName = "Jane",
                lastName = "Doe",
                addressOne = "Road Street",
                addressTwo = "Road Drive",
                city = "Country Road",
                state = "TX",
                zipcode = 54321
            };

            updateUser = null;

            //Act
            var result = controller.updateAccount(updateUser);

            //Assert
            Assert.IsType<BadRequestResult>(result as BadRequestResult);
        }

        [Fact]
        public void AddOrder_ActionExecutes_ReturnsNotNull()
        {

            //Arrange
            var pricingModel = new Pricing
            {
                orderID = 2,
                orderNumber = 205621,
                gallonsOrdered = 3,
                deliveryAddress = "Fury Lane",
                deliveryDate = "3/22/23",
                pricePerGallon = 10,
                totalAmountDue = 20,
                clientID = 1
            };

            //Act
            var result = controller.AddOrder(pricingModel);

            //Assert
            result.Should().NotBeNull();

        }

        [Fact]
        public void AddOrder_ActionExecutes_ReturnsNull()
        {

            //Arrange
            var pricingModel = new Pricing
            {
                orderID = 2,
                orderNumber = 205621,
                gallonsOrdered = 3,
                deliveryAddress = "Fury Lane",
                deliveryDate = "3/22/23",
                pricePerGallon = 10,
                totalAmountDue = 20,
                clientID = 1
            };

            pricingModel = null;

            //Act
            var result = controller.AddOrder(pricingModel);

            //Assert
            Assert.IsType<BadRequestResult>(result as BadRequestResult);

        }


        [Fact]
        public void GetCurUserOrders_ActionExecutes_ReturnsFound()
        {

            //Arrange
            //Act
            var result = controller.GetCurUserOrders(1);
            //Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);

        }



        [Fact]
        public void GetQuoteTX_ActionExecutes_ReturnsOk()
        {

            //Arrange
            var userModel = new User
            {
                clientID = 2,
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
            };

            //Act

            context.Users.Add(userModel);
            context.SaveChanges();

            //Arrange
            var pricingModel = new Pricing
            {
                orderID = 2,
                orderNumber = 205621,
                gallonsOrdered = 1500,
                deliveryAddress = "Fury Lane",
                deliveryDate = "3/22/23",
                pricePerGallon = 0,
                totalAmountDue = 0,
                clientID = 2
            };

            //Act
            var result = controller.GetQuote(pricingModel);

            //Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);

        }

        [Fact]
        public void GetQuoteNotTX_ActionExecutes_ReturnsOk()
        {

            //Arrange
            var userModel = new User
            {
                clientID = 3,
                userName = "Jane",
                password = "Doe23",
                passwordVerification = "Doe23",
                accessLevel = 0,
                firstName = "Jane",
                lastName = "Doe",
                addressOne = "Dover Street",
                addressTwo = "High Drive",
                city = "City Road",
                state = "NY",
                zipcode = 87984
            };

            //Act

            context.Users.Add(userModel);
            context.SaveChanges();

            //Arrange
            var pricingModel = new Pricing
            {
                orderID = 2,
                orderNumber = 205621,
                gallonsOrdered = 500,
                deliveryAddress = "Dover Street",
                deliveryDate = "/10/23",
                pricePerGallon = 0,
                totalAmountDue = 0,
                clientID = 3
            };

            //Act
            var result = controller.GetQuote(pricingModel);

            //Assert
            Assert.IsType<OkObjectResult>(result as OkObjectResult);

        }

        [Fact]
        public void GetQuote_ActionExecutes_ReturnsBadRequest()
        {

            //Arrange
            var pricingModel = new Pricing
            {
                orderID = 2,
                orderNumber = 205621,
                gallonsOrdered = 3,
                deliveryAddress = "Fury Lane",
                deliveryDate = "3/22/23",
                pricePerGallon = 10,
                totalAmountDue = 20,
                clientID = 1
            };

            pricingModel = null;

            //Act
            var result = controller.GetQuote(pricingModel);

            //Assert
            Assert.IsType<BadRequestResult>(result as BadRequestResult);

            //Assert
        }


    }
}
