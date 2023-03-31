using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fuelPriceBackEnd.Migrations
{
    /// <inheritdoc />
    public partial class v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    clientID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    passwordVerification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    accessLevel = table.Column<int>(type: "int", nullable: false),
                    firstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    addressOne = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    addressTwo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    zipcode = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.clientID);
                });

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
                    clientID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_orders", x => x.orderID);
                    table.ForeignKey(
                        name: "FK_orders_users_clientID",
                        column: x => x.clientID,
                        principalTable: "users",
                        principalColumn: "clientID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_orders_clientID",
                table: "orders",
                column: "clientID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "orders");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
