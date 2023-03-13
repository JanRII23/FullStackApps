using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fuelPriceBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class v2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "orders",
                columns: table => new
                {
                    orderID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    orderNumber = table.Column<int>(type: "int", nullable: false),
                    gallonsOrdered = table.Column<int>(type: "int", nullable: false),
                    deliveryAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    deliveryDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    pricePerGallon = table.Column<float>(type: "real", nullable: false),
                    totalAmountDue = table.Column<float>(type: "real", nullable: false),
                    userClientId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orders", x => x.orderID);
                    table.ForeignKey(
                        name: "FK_orders_users_userClientId",
                        column: x => x.userClientId,
                        principalTable: "users",
                        principalColumn: "clientID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_orders_userClientId",
                table: "orders",
                column: "userClientId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "orders");
        }
    }
}
