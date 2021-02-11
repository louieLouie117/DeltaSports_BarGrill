using Microsoft.EntityFrameworkCore;


namespace DeltaSports_BarGrill.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<FoodCategory> FoodCategories { get; set; }

        public DbSet<FoodItem> foodItems { get; set; }


    }
}