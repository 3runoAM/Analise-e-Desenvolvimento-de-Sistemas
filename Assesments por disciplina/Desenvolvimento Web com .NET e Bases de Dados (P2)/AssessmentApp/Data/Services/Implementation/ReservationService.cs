using System.Security.Claims;
using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using AssessmentApp.Utils;
using Microsoft.EntityFrameworkCore;

namespace AssessmentApp.Data.Services.Implementation;

public class ReservationService : IReservationService
{
    private readonly AppDbContext _context;
    private readonly Action<string> _logAction;
    private readonly CalculateDelegate _tenPercentDiscount;
    private readonly Func<int, decimal, decimal> _calculateTotalValue;
    private readonly ITravelPackageService _travelPackageService;
    
    public ReservationService(AppDbContext context, ITravelPackageService travelPackageService)
    {
        _context = context;
        _logAction = Log.subscribeToAll();
        _tenPercentDiscount = (price) => price * 0.9m;
        _calculateTotalValue = (todayDays, price) => todayDays * price;
        _travelPackageService = travelPackageService;
    }
    
    public void AddReservation(Reservation reservation)
    {
        if (_travelPackageService.IsTravelPackageAvailableById(reservation.TravelPackageId))
        {
            reservation.ReservationDate = DateTime.Now;
            _context.Reservations.Add(reservation);
            _context.SaveChanges();
            return;
        }

        if (_travelPackageService.IsTravelPackageAvailableById(reservation.TravelPackageId)){
            reservation.ReservationDate = DateTime.Now;
            
            _context.Reservations.Add(reservation);
            
            _context.SaveChanges();
            return;
        }
        
        LogMessage($"Não foi possível reservar o pacote turístico: {reservation.TravelPackage.Title}. O pacote não está disponível para reserva");
        throw new InvalidOperationException($"Pacote turístico: {reservation.TravelPackage.Title} não está disponível para reserva");
    }
    
    public List<Reservation> GetAllReservations()
    {
        LogMessage("Obtendo todas as reservas...");
        return _context.Reservations
            .Include(r => r.Client)
            .Include(r => r.TravelPackage)
            .ToList();
    }

    public Reservation GetReservationsById(int id){
        LogMessage($"Obtendo reservas do cliente com ID: {id}...");
        return _context.Reservations
            .Include(r => r.Client)
            .Include(r => r.TravelPackage)
            .FirstOrDefault(r => r.Id == id) ?? throw new ArgumentNullException(nameof(id), "Reserva não encontrada");
    }
    
    public List<Reservation> GetReservationsByTravelPackageId(int travelPackageId)
    {
        LogMessage($"Obtendo reservas do pacote de viagem com ID: {travelPackageId}...");
        return _context.Reservations
            .Include(r => r.Client)
            .Include(r => r.TravelPackage)
            .Where(r => r.TravelPackageId == travelPackageId)
            .ToList();
    }
    
    public void CancelReservation(int reservationId)
    {
        LogMessage($"Cancelando reserva com ID: {reservationId}...");
        var reservation = _context.Reservations.Find(reservationId);
        if (reservation == null)
        {
            LogMessage("Reserva não encontrada");
            throw new ArgumentNullException(nameof(reservation), "Reserva não pode ser nula");
        }
        
        _context.Reservations.Remove(reservation);
        
        _context.SaveChanges();
    }
    
    public decimal ApplyDiscount(decimal price)
    {
        return _tenPercentDiscount(price);
    }
    
    public decimal CalculateTotalReservationValue(int numberOfNights, int dailyRate)
    {
        LogMessage($"Calculando valor total para {numberOfNights} diárias a R${dailyRate}...");
        return _calculateTotalValue(numberOfNights, dailyRate);
    }
    
    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction(message);
    }
    

}