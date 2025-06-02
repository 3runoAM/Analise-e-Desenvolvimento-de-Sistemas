using CityBreaks.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CityBreaks.Data.Configurations;

public class CountryConfiguration : IEntityTypeConfiguration<Country>
{
    public void Configure(EntityTypeBuilder<Country> builder){
        builder.Property(country => country.CountryName)
            .HasMaxLength(100)
            .HasColumnName("Country_Name");
        
        builder.Property(country => country.CountryCode)
            .HasMaxLength(2)
            .HasColumnName("Country_Code");
        
        builder.HasData(
            new Country { Id = 1, CountryCode = "BR", CountryName = "Brasil" },
            new Country { Id = 2, CountryCode = "US", CountryName = "Estados Unidos" },
            new Country { Id = 3, CountryCode = "FR", CountryName = "França" },
            new Country { Id = 4, CountryCode = "IT", CountryName = "Itália" },
            new Country { Id = 5, CountryCode = "JP", CountryName = "Japão" }
        );
    }
}