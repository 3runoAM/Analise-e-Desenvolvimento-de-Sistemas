using AssessmentApp.Models;

namespace AssessmentApp.Data.Services.Interfaces;

public interface IReservationService{
    void AddReservation(Reservation reservation);
    List<Reservation> GetAllReservations();
    Reservation GetReservationsById(int id);
    List<Reservation> GetReservationsByTravelPackageId(int travelPackageId);
    void CancelReservation(int reservationId);
    decimal ApplyDiscount(decimal price);
}