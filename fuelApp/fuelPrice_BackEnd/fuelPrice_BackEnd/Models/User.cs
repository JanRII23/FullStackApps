using System.ComponentModel.DataAnnotations;

namespace fuelPrice_BackEnd.Models
{
    public class User
    {
        //UserCredentials Elements
        [Key]
        public int clientID { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string passwordVerification { get; set; }
        public int accessLevel { get; set; }


        //ClientInformation Elements
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string addressOne { get; set; }
        public string addressTwo { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public int zipcode { get; set; }


        //Quote - Request --> This might actually get moved somewhere else
        /*    public float gallons { get; set; }
        public string deliveryAddress { get; set; }
        public DateOnly MyProperty { get; set; }
        public float suggestedPrice { get; set; }
        public int totalAmountDue { get; set; }*/




    }
}
