using fuelPrice_BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace fuelPrice_BackEnd.Context
{
    public class fuelDatabaseContext : DbContext
    {

        public fuelDatabaseContext(DbContextOptions<fuelDatabaseContext> options):base(options) 
        {
        
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Pricing> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Pricing>().ToTable("orders");
        }
    }
}
