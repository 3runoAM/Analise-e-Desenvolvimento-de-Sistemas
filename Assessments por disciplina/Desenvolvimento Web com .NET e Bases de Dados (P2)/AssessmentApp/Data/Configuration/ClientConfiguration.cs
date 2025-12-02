using AssessmentApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssessmentApp.Data.Configuration;

public class ClientConfiguration : IEntityTypeConfiguration<Client>
{
    public void Configure(EntityTypeBuilder<Client> client)
    {
        client.HasKey(c => c.Id);
        client.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(100);
        client.Property(c => c.Email)
            .IsRequired()
            .HasMaxLength(100);
        
        client.HasMany(c => c.Reservations)
            .WithOne(r => r.Client)
            .HasForeignKey(r => r.ClientId);
    }
}