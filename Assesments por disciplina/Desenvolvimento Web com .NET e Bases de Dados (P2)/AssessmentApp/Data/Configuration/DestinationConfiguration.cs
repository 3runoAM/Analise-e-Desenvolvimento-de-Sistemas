using AssessmentApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssessmentApp.Data.Configuration;

public class DestinationConfiguration : IEntityTypeConfiguration<Destination>
{
    public void Configure(EntityTypeBuilder<Destination> destination){
        destination.HasKey(d => d.Id);
        destination.Property(d => d.Name)
            .IsRequired()
            .HasMaxLength(100);
        destination.Property(d => d.CountryName)
            .IsRequired()
            .HasMaxLength(100);
    }
}