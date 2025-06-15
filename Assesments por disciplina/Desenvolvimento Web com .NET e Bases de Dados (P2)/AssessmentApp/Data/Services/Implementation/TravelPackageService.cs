using AssessmentApp.Data.Services.Interfaces;
using AssessmentApp.Models;
using AssessmentApp.Utils;
using Microsoft.EntityFrameworkCore;


namespace AssessmentApp.Data.Services.Implementation;


public class TravelPackageService : ITravelPackageService
{
    private readonly AppDbContext _context;
    private readonly Action<String> _logAction;
    private readonly Func<int, decimal, decimal> _calculateTotalPrice;


    public TravelPackageService(AppDbContext context)
    {
        _context = context;
        _logAction = Log.subscribeToAll();
        _calculateTotalPrice = (travelDurationInDays, price) => travelDurationInDays * price;
    }
    
    public bool IsTravelPackageAvailableById(int travelPackageId)
    {
        LogMessage($"| Verificando disponibilidade do pacote de viagem com ID: {travelPackageId}");
        var travelPackage = _context.TravelPackages
            .Include(tp => tp.Reservations)
            .FirstOrDefault(tp => tp.Id == travelPackageId);
        if (travelPackage == null)
        {
            LogMessage("| Pacote de viagem não encontrado");
            throw new ArgumentNullException(nameof(travelPackage), "Pacote de viagem não pode ser nulo");
        }
        
        bool isAvailable = travelPackage.Reservations.Count < travelPackage.CapacityLimit;
        LogMessage(isAvailable ? "| Pacote de viagem disponível" : "| Pacote de viagem indisponível");
        
        return isAvailable;
    }
    
    
    // MÉTODOS PRIVADOS ------------------------------------------------------------------------------------------------
    private void LogMessage(string message)
    {
        _logAction(message);
    }
}