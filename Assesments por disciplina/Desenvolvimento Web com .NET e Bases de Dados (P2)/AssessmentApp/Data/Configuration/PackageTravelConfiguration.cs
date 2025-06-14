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
        packageTravel.Property(package => package.Capacity)
            .IsRequired();
        packageTravel.Property(package => package.Price)
            .IsRequired()
            .HasPrecision(18, 2);

        packageTravel.HasMany(package => package.Destinations)
            .WithMany();
    }
}