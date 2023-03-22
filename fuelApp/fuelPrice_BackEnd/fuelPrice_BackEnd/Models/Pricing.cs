using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fuelPrice_BackEnd.Models
{
    public class Pricing
    {

        [Key]
        public int orderID { get; set; }
        public int orderNumber { get; set; } //randomly generated once request submitted

        public int gallonsOrdered { get; set; }
        public string deliveryAddress { get; set; }

        public string deliveryDate { get; set; }
        public float pricePerGallon { get; set; }   
        public float totalAmountDue { get; set; }

        public int? userClientId { get; set; }

        [ForeignKey("userClientId")]
        public virtual User User { get; set; }  //client ID as foreign key --> this is the thing that the user table needs to reference??

    }
}
