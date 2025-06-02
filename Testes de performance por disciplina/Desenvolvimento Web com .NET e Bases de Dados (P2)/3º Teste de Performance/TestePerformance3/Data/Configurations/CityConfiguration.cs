using CityBreaks.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CityBreaks.Data.Configurations;

public class CityConfiguration : IEntityTypeConfiguration<City>
{
    public void Configure(EntityTypeBuilder<City> builder)
    {
        builder.HasData(
            new City { Id = 1, CityName = "Rio de Janeiro", CountryId = 1 },
            new City { Id = 2, CityName = "São Paulo", CountryId = 1 },
            new City { Id = 3, CityName = "Nova York", CountryId = 2 },
            new City { Id = 4, CityName = "Paris", CountryId = 3 },
            new City { Id = 5, CityName = "Roma", CountryId = 4 },
            new City { Id = 6, CityName = "Tóquio", CountryId = 5 }
        );
    }
}