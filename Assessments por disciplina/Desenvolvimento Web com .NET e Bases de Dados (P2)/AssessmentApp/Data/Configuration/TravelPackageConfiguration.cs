using AssessmentApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssessmentApp.Data.Configuration;

public class TravelPackageConfiguration : IEntityTypeConfiguration<TravelPackage>
{
    public void Configure(EntityTypeBuilder<TravelPackage> packageTravel)
    {
        packageTravel.HasKey(package => package.Id);
        packageTravel.Property(package => package.Title)
            .IsRequired()
            .HasMaxLength(100);
        packageTravel.Property(package => package.StartDate)
            .IsRequired();
        packageTravel.Property(package => package.CapacityLimit)
            .IsRequired();
        packageTravel.Property(package => package.PricePerDay)
            .IsRequired()
            .HasPrecision(18, 2);
        packageTravel.HasMany(package => package.Reservations)
            .WithOne(reservation => reservation.TravelPackage)
            .HasForeignKey(reservation => reservation.TravelPackageId)
            .OnDelete(DeleteBehavior.Cascade);

        packageTravel.HasMany(package => package.Destinations)
            .WithMany();
    }
}