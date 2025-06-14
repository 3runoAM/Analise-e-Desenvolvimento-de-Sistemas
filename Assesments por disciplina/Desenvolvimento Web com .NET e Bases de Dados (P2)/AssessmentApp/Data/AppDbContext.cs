using AssessmentApp.Data.Configuration;
using Microsoft.EntityFrameworkCore;
using AssessmentApp.Models;

namespace AssessmentApp.Data {
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<TravelPackage> TravelPackages { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Destination> Destinations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.ApplyConfiguration(new TravelPackageConfiguration());
        }
    }
}