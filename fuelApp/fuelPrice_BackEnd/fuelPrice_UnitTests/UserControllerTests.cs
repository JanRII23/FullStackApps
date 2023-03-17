using Azure;
using fuelPrice_BackEnd.Context;
using fuelPrice_BackEnd.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Web.Http.Results;

namespace fuelPrice_UnitTests
{
    public class UserControllerTests
    {
        [Fact]
        public async void Authenticate_UserDoesNotExists_ReturnNull()
        {
            //Arrange
            var user = new Mock<fuelDatabaseContext>(); //mock object
            var sut = new UserController(user.Object);

            //Act
            var result = await sut.Authenticate(null);

            //Assert
            Assert.IsType<BadRequestObjectResult>(result);
        }


    }
}