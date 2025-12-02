using AssessmentApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AssessmentApp.Data.Configuration;

public class ReservationConfiguration : IEntityTypeConfiguration<Reservation>
{
    public void Configure(EntityTypeBuilder<Reservation> reservation)
    {
        reservation.HasKey(r => r.Id);
        reservation.HasOne(r => r.Client)
            .WithMany(c => c.Reservations)
            .HasForeignKey(r => r.ClientId)
            .OnDelete(DeleteBehavior.Cascade);
        reservation.HasOne(r => r.TravelPackage)
            .WithMany()
            .HasForeignKey(r => r.TravelPackageId)
            .OnDelete(DeleteBehavior.Cascade);
        reservation.Property(r => r.ReservationDate)
            .IsRequired();
    }
}