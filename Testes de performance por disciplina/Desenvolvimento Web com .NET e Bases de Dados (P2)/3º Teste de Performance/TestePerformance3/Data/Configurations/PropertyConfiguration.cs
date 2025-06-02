using CityBreaks.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CityBreaks.Data.Configurations;

public class PropertyConfiguration : IEntityTypeConfiguration<Property>
{
    public void Configure(EntityTypeBuilder<Property> builder)
    {
        builder.Property(property => property.Name)
            .HasMaxLength(100)
            .HasColumnName("Property_Name");
        
        builder.HasData(
            new Property
            {
                Id = 1,
                Name = "Copacabana Palace",
                PricePerNight = 800.00m,
                CityId = 1
            },
            new Property
            {
                Id = 2,
                Name = "Ipanema Beach House",
                PricePerNight = 650.00m,
                CityId = 1
            },
            new Property
            {
                Id = 3,
                Name = "Times Square Luxury Apartment",
                PricePerNight = 1200.00m,
                CityId = 3
            }
        );
    }
}